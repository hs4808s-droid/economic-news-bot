#!/usr/bin/env node
'use strict';
// 2주 일정 원장(docs/data/calendar.json) 누적 갱신. LLM 미사용 — 코드가 수집·파싱·병합만 한다.
//   node scripts/update_calendar.js [YYYY-MM-DD]   KST 기준일 폴더(logs/<날짜>/1_collect.md, 0_data.json)를 입력으로 사용
//   node scripts/update_calendar.js --selftest     임시 폴더에서 누적·병합 규칙 테스트
//
// 소스
//   earnings : Finnhub /calendar/earnings(키 있을 때) + Nasdaq 공개 API(키 없는 보조·전년 EPS). 둘 다 실패하면 earnings 는 건드리지 않는다.
//   macro/fed/corporate : 1_collect.md [8] 표 — LLM 은 일정·예상값(+출처)만 준다.
//   macro 발표값·직전값 : LLM 이 아니라 코드가 FRED 에서 직접 계산한다(lib/macro.js fredValue). [3] 표는 원장에 쓰지 않는다.
//   earnings 검증값 : config/earnings_verified.json (1차 출처 URL 포함) 이 있으면 덮어쓴다.
// 원장 키: macro = (발표일, metric, measure) → `YYYY-MM-DD-CPI-yoy`. 측정 기준을 알 수 없는 행은 숫자를 버린다.
// 병합 규칙: id 기준 upsert. 새 값이 null 이면 기존 값을 지우지 않는다. 원장에서는 절대 삭제하지 않는다(표시 필터는 사이트가 한다).

const fs = require('fs');
const path = require('path');
const C = require('../lib/common');
const M = require('../lib/macro');

const CAL_PATH = path.join(C.ROOT, 'docs', 'data', 'calendar.json');
const UNIVERSE = C.readJson(path.join(C.ROOT, 'config', 'universe.json'), { earnings_tickers: [] });
const WATCH = C.readJson(path.join(C.ROOT, 'config', 'watchlist.json'), { tickers: [] }).tickers;
const EARN_SET = new Set([...UNIVERSE.earnings_tickers, ...WATCH]);
const MCAP_MIN = 1e11; // Nasdaq 경로: 목록에 없어도 시총 1,000억 달러 이상이면 포함

const EMPTY = {
  id: null, date_et: null, time_et: null, type: null, title: null, ticker: null,
  prior: null, consensus: null, actual: null, surprise: null, importance: 1, source: null, collected_at: null,
};

// --- 표 파싱 -----------------------------------------------------------------
function parseTables(md) {
  const tables = [];
  const lines = md.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    if (!/^\s*\|/.test(lines[i]) || !/^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1] || '')) continue;
    const cells = (l) => l.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
    const headers = cells(lines[i]);
    const rows = [];
    let j = i + 2;
    for (; j < lines.length && /^\s*\|/.test(lines[j]); j++) rows.push(cells(lines[j]));
    tables.push({ headers, rows });
    i = j;
  }
  return tables;
}
const section = (md, startRe, endRe) => {
  const s = md.search(startRe);
  if (s < 0) return '';
  const rest = md.slice(s + 1);
  const e = rest.search(endRe);
  return e < 0 ? md.slice(s) : md.slice(s, s + 1 + e);
};

const isNull = (v) => v == null || /^(n\/a|na|-|—|–|없음|확인 ?필요|미확인|tbd)?$/i.test(String(v).trim()) || /확인 ?필요|미확인|출처 ?없음/.test(String(v));
const clean = (v) => (isNull(v) ? null : String(v).replace(/\*\*/g, '').trim());
const toNum = (v) => {
  if (v == null) return null;
  const m = String(v).replace(/,/g, '').match(/-?\d+(\.\d+)?/);
  return m ? Number(m[0]) : null;
};
// 단위 접미사(%, K, M, B, 만, 명 등)가 같을 때만 숫자 비교를 인정한다.
const unitOf = (v) => String(v).replace(/,/g, '').replace(/-?\d+(\.\d+)?/, '').replace(/\s/g, '');

const MACRO_KEYS = [
  ['CPI', /core cpi|cpi|소비자물가/i, 3], ['PCE', /pce/i, 3], ['NFP', /nfp|payroll|비농업/i, 3], ['GDP', /gdp/i, 3],
  ['PPI', /ppi|생산자물가/i, 2], ['ISM', /ism/i, 2], ['RETAIL', /retail|소매판매/i, 2], ['JOLTS', /jolts/i, 2],
  ['CLAIMS', /jobless|claims|실업수당/i, 1], ['UNEMP', /실업률|unemployment/i, 2],
];
const keyOf = (title) => {
  if (/fomc/i.test(title)) return ['FOMC', 3];
  for (const [k, re, imp] of MACRO_KEYS) if (re.test(title)) return [/core/i.test(title) && k === 'CPI' ? 'CORECPI' : k, imp];
  return [null, 1];
};
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9가-힣]+/g, '-').replace(/^-|-$/g, '').slice(0, 24);

// --- Collect [8] → 이벤트 ----------------------------------------------------
function eventsFromCollect(md, nowIso) {
  const sec = section(md, /^#{2,4}\s*\[8\]/m, /^#{2,4}\s*\[9\]/m);
  const out = [];
  for (const t of parseTables(sec)) {
    const h = t.headers.join('|');
    const col = (...names) => t.headers.findIndex((x) => names.some((n) => x.includes(n)));
    const [cDate, cTime, cType, cEvt, cTicker, cPrior, cCons, cConsSrc, cSrc] = [['날짜'], ['시각'], ['구분'], ['이벤트'], ['티커'], ['직전값', '이전치'], ['예상값', '컨센서스'], ['예상출처'], ['출처']].map((n) => col(...n));
    const cSrc2 = t.headers.findIndex((x) => x.trim() === '출처'); // '예상출처' 와 구분
    if (cDate < 0 || cEvt < 0) continue;
    const isCorp = cTicker >= 0 || /기업/.test(h);
    for (const r of t.rows) {
      const date = (r[cDate] || '').match(/\d{4}-\d{2}-\d{2}/)?.[0];
      const title = clean(r[cEvt]);
      if (!date || !title) continue;
      const time = (cTime >= 0 && (r[cTime] || '').match(/\d{1,2}:\d{2}/)?.[0]) || null;
      const src = cSrc2 >= 0 ? clean(r[cSrc2]) : cSrc >= 0 ? clean(r[cSrc]) : null;
      // 출처가 없으면 값은 신뢰하지 않고 null (일정 자체는 남긴다)
      const prior = src && cPrior >= 0 ? clean(r[cPrior]) : null;
      const consensus = src && cCons >= 0 ? clean(r[cCons]) : null;
      if (isCorp) {
        const ticker = cTicker >= 0 ? (clean(r[cTicker]) || '').toUpperCase() || null : null;
        if (!src) continue; // 기업 이벤트는 출처가 확인된 것만 (지시서)
        out.push({ ...EMPTY, id: `${date}-${ticker || 'CORP'}-${slug(title)}`, date_et: date, time_et: time, type: 'corporate', title, ticker, importance: 2, source: src, collected_at: nowIso });
      } else {
        const typeCell = cType >= 0 ? (r[cType] || '').toLowerCase() : '';
        const type = /fed|fomc|연준|연설/.test(typeCell + title) ? 'fed' : 'macro';
        const p = type === 'macro' ? M.parseTitle(title) : { metric: /fomc/i.test(title) ? 'FOMC' : null, measure: null, mixed: false };
        const rule = p.metric && p.measure ? M.ruleFor(p.metric, p.measure) : null;
        const imp = (p.metric && M.RULES.metrics[p.metric]?.importance) || (type === 'fed' ? 2 : 1);
        let id;
        if (p.metric === 'FOMC') id = `${date}-FOMC`;
        else if (type === 'macro' && p.metric) id = `${date}-${p.metric}-${p.measure || (p.mixed ? 'mixed' : 'unk')}`;
        else id = `${date}-${(type === 'fed' ? 'FED-' : 'MACRO-') + slug(title)}`;
        const ev = { ...EMPTY, id, date_et: date, time_et: time, type, title, importance: imp, source: src, collected_at: nowIso };
        if (type === 'macro' && p.metric) Object.assign(ev, { metric: p.metric, measure: p.measure, unit: rule?.unit || null, seasonal: rule?.seasonal || null, period: M.periodOf(title, date), mixed: p.mixed || undefined });
        if (rule) {
          // 예상값: 출처가 시장 컨센서스일 때만 consensus 칸. nowcast·예측시장·기타는 ref_consensus(참고)로만 둔다.
          const csrc = cConsSrc >= 0 ? clean(r[cConsSrc]) : src;
          const cv = M.parseValue(consensus, rule.unit);
          if (cv != null) {
            if (M.classifySource(csrc) === 'allowed') Object.assign(ev, { consensus: cv, consensus_source: csrc });
            else Object.assign(ev, { ref_consensus: cv, ref_source: csrc });
          }
          const pv = M.parseValue(prior, rule.unit);
          if (pv != null && !rule.fred) Object.assign(ev, { prior: pv, prior_source: src });
        }
        out.push(ev);
      }
    }
  }
  return out;
}

// --- Earnings 소스 -----------------------------------------------------------
// 공통 행: { date, ticker, timing(bmo|amc|null), cons_eps, cons_rev, actual_eps, actual_rev, prior_eps, mcap, name }
function normFinnhub(json) {
  return (json.earningsCalendar || []).map((r) => ({
    date: r.date, ticker: r.symbol, timing: ['bmo', 'amc'].includes(r.hour) ? r.hour : null,
    cons_eps: num(r.epsEstimate), cons_rev: num(r.revenueEstimate), actual_eps: num(r.epsActual), actual_rev: num(r.revenueActual),
    prior_eps: null, prior_rev: null, mcap: null,
  }));
}
function normNasdaq(date, json) {
  const money = (v) => (v == null || v === 'N/A' ? null : num(String(v).replace(/[$,()]/g, '')));
  return (json?.data?.rows || []).map((r) => ({
    date, ticker: r.symbol, timing: r.time === 'time-pre-market' ? 'bmo' : r.time === 'time-after-hours' ? 'amc' : null,
    cons_eps: money(r.epsForecast), cons_rev: null, actual_eps: money(r.eps), actual_rev: null,
    prior_eps: money(r.lastYearEPS), prior_rev: null, mcap: money(r.marketCap),
  }));
}
function num(v) { return typeof v === 'number' && Number.isFinite(v) ? v : (v != null && v !== '' && Number.isFinite(Number(v)) ? Number(v) : null); }

async function fetchEarnings(from, to) {
  const rows = new Map(); // `${date}|${ticker}` → row (Finnhub 우선, Nasdaq 로 빈 칸 보충)
  const srcs = [];
  const put = (r, tag) => {
    const k = `${r.date}|${r.ticker}`;
    const cur = rows.get(k);
    if (!cur) rows.set(k, { ...r, _src: [tag] });
    else { for (const f of Object.keys(r)) if (cur[f] == null && r[f] != null) cur[f] = r[f]; cur._src.push(tag); }
  };
  const key = process.env.FINNHUB_API_KEY;
  if (key) {
    try {
      const j = await C.getJson(`https://finnhub.io/api/v1/calendar/earnings?from=${from}&to=${to}&token=${key}`, 30000);
      const n = normFinnhub(j).filter((r) => EARN_SET.has(r.ticker));
      n.forEach((r) => put(r, 'Finnhub')); srcs.push(`Finnhub ${n.length}`);
    } catch (e) { process.stderr.write(`  [실패] Finnhub earnings: ${e.message}\n`); }
  }
  let nasdaqOk = 0;
  for (let d = from; d <= to; d = C.addDays(d, 1)) {
    if ([0, 6].includes(new Date(d + 'T00:00:00Z').getUTCDay())) continue;
    try {
      const j = await C.getJson(`https://api.nasdaq.com/api/calendar/earnings?date=${d}`, 15000, C.BROWSER_UA);
      normNasdaq(d, j).filter((r) => EARN_SET.has(r.ticker) || (r.mcap || 0) >= MCAP_MIN).forEach((r) => put(r, 'Nasdaq'));
      nasdaqOk++;
    } catch (e) { process.stderr.write(`  [실패] Nasdaq earnings ${d}: ${e.message}\n`); }
  }
  srcs.push(`Nasdaq ${nasdaqOk}일`);
  return { rows: [...rows.values()], ok: rows.size > 0, srcs };
}

function earningsToEvents(rows, nowIso) {
  return rows.map((r) => {
    const idx = UNIVERSE.earnings_tickers.indexOf(r.ticker);
    const sur = r.actual_eps != null && r.cons_eps != null ? +(r.actual_eps - r.cons_eps).toFixed(4) : null;
    return {
      ...EMPTY, id: `${r.date}-${r.ticker}`, date_et: r.date, time_et: null, type: 'earnings', title: `${r.ticker} 실적`, ticker: r.ticker,
      timing: r.timing, prior_eps: r.prior_eps, prior_rev: r.prior_rev, cons_eps: r.cons_eps, cons_rev: r.cons_rev,
      actual_eps: r.actual_eps, actual_rev: r.actual_rev, surprise_eps: sur, implied_move: null,
      cons_basis: 'adjusted', data_source: 'provider(미검증)', // ponytail: 공급자 컨센서스는 Street(조정) 기준이라고 가정 — 검증 항목은 아래 verified 로 덮어씀
      importance: WATCH.includes(r.ticker) || (idx >= 0 && idx < 10) ? 3 : 2,
      source: [...new Set(r._src)].join('+'), collected_at: nowIso,
    };
  });
}

// --- 병합 --------------------------------------------------------------------
function merge(ledger, incoming) {
  const byId = new Map(ledger.events.map((e) => [e.id, e]));
  let added = 0, updated = 0;
  for (const ev of incoming) {
    const cur = byId.get(ev.id);
    if (!cur) { byId.set(ev.id, ev); added++; continue; }
    let changed = false;
    // 예상치는 발표일이 되면 동결한다: 발표 후 공급자가 컨센서스를 사후 갱신해도 '발표 직전 컨센서스'가 유지되도록.
    const frozen = cur.type === 'earnings' && (cur.actual_eps != null || cur.date_et <= C.etDay(Date.now() / 1000));
    for (const [k, v] of Object.entries(ev)) {
      if (v == null || k === 'id') continue;        // null 로 기존 값을 지우지 않는다
      if (frozen && ['cons_eps', 'cons_rev', 'source', 'timing'].includes(k)) continue;
      if (k === 'collected_at') continue;           // 값이 바뀔 때만 아래에서 갱신
      if (JSON.stringify(cur[k]) !== JSON.stringify(v)) { cur[k] = v; changed = true; }
    }
    if (changed) { cur.collected_at = ev.collected_at; updated++; }
  }
  ledger.events = [...byId.values()].sort((a, b) => (a.date_et + (a.time_et || '')).localeCompare(b.date_et + (b.time_et || '')) || a.id.localeCompare(b.id));
  return { added, updated };
}

// 발표값·직전값을 코드가 FRED 에서 채운다 (LLM 값은 쓰지 않는다). 발표 전이면 FRED 에 관측이 없어 null 로 남는다.
async function fillActuals(ledger, nowIso, getSeries) {
  let n = 0;
  for (const ev of ledger.events) {
    if (ev.type !== 'macro' || !ev.metric || !ev.measure || !M.ruleFor(ev.metric, ev.measure)?.fred) continue;
    let v;
    try { v = await M.fredValue(ev.metric, ev.measure, ev.period || M.periodOf(ev.title, ev.date_et), ev.date_et, getSeries); } catch (e) { process.stderr.write(`  [실패] FRED ${ev.id}: ${e.message}
`); continue; }
    if (!v) continue;
    if (v.prior != null) { ev.prior = v.prior; ev.prior_source = `FRED ${v.series}`; }
    if (v.actual != null && ev.date_et <= C.etDay(Date.now() / 1000)) {
      if (ev.actual !== v.actual) { ev.actual = v.actual; ev.actual_source = `FRED ${v.series}`; ev.collected_at = nowIso; n++; }
    }
  }
  return n;
}

// 서프라이즈는 같은 id 안의 숫자끼리만: 발표값−예상값 (단위는 행의 unit; %는 %p)
function computeSurprises(ledger) {
  for (const ev of ledger.events) {
    if (ev.type === 'macro') ev.surprise = typeof ev.actual === 'number' && typeof ev.consensus === 'number' ? M.round(ev.actual - ev.consensus, 3) : null;
    if (ev.type === 'earnings') {
      ev.surprise_eps = ev.actual_eps != null && ev.cons_eps != null ? M.round(ev.actual_eps - ev.cons_eps, 4) : null;
      ev.surprise_rev_pct = ev.actual_rev != null && ev.cons_rev ? M.round((ev.actual_rev - ev.cons_rev) / ev.cons_rev * 100, 1) : null;
    }
  }
}

// 옛 원장(측정 기준 필드 없음)을 새 스키마로 올린다. 측정 기준을 알 수 없으면 숫자를 버린다(추정 금지).
function migrate(ledger) {
  let n = 0;
  for (const ev of ledger.events) {
    if (ev.type !== 'macro' || ev.metric !== undefined) continue;
    n++;
    const p = M.parseTitle(ev.title);
    const rule = p.metric && p.measure && !p.mixed ? M.ruleFor(p.metric, p.measure) : null;
    Object.assign(ev, { metric: p.metric, measure: p.measure, mixed: p.mixed || undefined, unit: rule?.unit || null, seasonal: rule?.seasonal || null, period: p.metric ? M.periodOf(ev.title, ev.date_et) : null });
    const was = { prior: ev.prior, consensus: ev.consensus, actual: ev.actual };
    ev.prior = ev.consensus = ev.actual = ev.surprise = null;
    if (rule) {
      // 직전·예상(LLM+출처)은 단위가 맞고 출처가 시장 컨센서스일 때만 이어받는다. 발표값은 FRED 가 다시 채운다.
      ev.prior = rule.fred ? null : M.parseValue(was.prior, rule.unit);
      const cv = M.parseValue(was.consensus, rule.unit);
      if (cv != null) { if (M.classifySource(ev.source) === 'allowed') { ev.consensus = cv; ev.consensus_source = ev.source; } else { ev.ref_consensus = cv; ev.ref_source = ev.source; } }
      ev.id = `${ev.date_et}-${p.metric}-${p.measure}`;
    } else if (p.metric) {
      ev.id = `${ev.date_et}-${p.metric}-${p.mixed ? 'mixed' : 'unk'}`;
    }
  }
  return n;
}

// 같은 (발표일, metric)에 측정 기준이 명확한 행이 있으면 모호한 행(혼합·기준 없음)과 중복 id 를 정리한다.
function dedupe(ledger) {
  const byKey = new Map();
  for (const e of ledger.events) if (e.type === 'macro' && e.metric && e.measure) { const k = `${e.date_et}|${e.metric}`; byKey.set(k, true); }
  const family = { CPI: ['CPI', 'CORECPI'], CORECPI: ['CPI', 'CORECPI'], PCE: ['PCE', 'COREPCE'], COREPCE: ['PCE', 'COREPCE'] };
  const before = ledger.events.length;
  const seen = new Set();
  ledger.events = ledger.events.filter((e) => {
    if (e.type === 'macro' && e.metric && !e.measure) { if ((family[e.metric] || [e.metric]).some((m) => byKey.has(`${e.date_et}|${m}`))) return false; }
    if (seen.has(e.id)) return false;
    seen.add(e.id);
    return true;
  });
  return before - ledger.events.length;
}

// 실적: 1차 출처로 검증된 값(config/earnings_verified.json)을 덮어쓴다. EPS 기준(조정/GAAP)·매출·출처 URL 포함.
function applyVerifiedEarnings(ledger, nowIso) {
  const ver = C.readJson(path.join(C.ROOT, 'config', 'earnings_verified.json'), { items: [] }).items;
  let n = 0;
  for (const v of ver) {
    const ev = ledger.events.find((e) => e.type === 'earnings' && e.ticker === v.ticker && e.date_et === v.date_et);
    if (!ev) continue;
    const basis = v.eps_basis; // 'adjusted' | 'gaap'  — 예상 EPS(컨센서스)와 같은 기준으로 표시할 값의 기준
    Object.assign(ev, {
      actual_eps: basis === 'adjusted' ? v.eps_adjusted : v.eps_gaap, prior_eps: basis === 'adjusted' ? v.prior_adjusted : v.prior_gaap,
      eps_basis: basis, prior_basis: basis, cons_basis: v.cons_basis || basis, eps_gaap: v.eps_gaap, eps_adjusted: v.eps_adjusted ?? null,
      actual_rev: v.revenue, rev_basis: v.revenue_basis || 'reported', verified: true, src_url: v.source_url, verified_at: v.verified_at || nowIso, note: v.note || null,
    });
    n++;
  }
  return n;
}

// CPI·PCE 는 발표 한 번에 헤드라인/근원 × MoM/YoY 4개 수치가 나온다. 하나라도 일정에 있으면 4줄을 모두 만든다(누락·합치기 방지).
const FAMILY = { CPI: ['CPI', 'CORECPI'], CORECPI: ['CPI', 'CORECPI'], PCE: ['PCE', 'COREPCE'], COREPCE: ['PCE', 'COREPCE'] };
function expandFamilies(ledger, nowIso) {
  let n = 0;
  const have = new Set(ledger.events.map((e) => e.id));
  for (const e of [...ledger.events]) {
    if (e.type !== 'macro' || !FAMILY[e.metric]) continue;
    const mon = e.period ? Number(e.period.slice(5)) : null;
    for (const metric of FAMILY[e.metric]) for (const measure of ['mom', 'yoy']) {
      const id = `${e.date_et}-${metric}-${measure}`;
      if (have.has(id)) continue;
      const rule = M.ruleFor(metric, measure);
      have.add(id);
      ledger.events.push({ ...EMPTY, id, date_et: e.date_et, time_et: e.time_et, type: 'macro', title: `${mon ? mon + '월 ' : ''}${M.RULES.metrics[metric].name} (${measure === 'mom' ? 'MoM' : 'YoY'})`, importance: M.RULES.metrics[metric].importance, source: '일정 자동 확장', collected_at: nowIso, metric, measure, unit: rule.unit, seasonal: rule.seasonal, period: e.period });
      n++;
    }
  }
  ledger.events.sort((a, b) => (a.date_et + (a.time_et || '')).localeCompare(b.date_et + (b.time_et || '')) || a.id.localeCompare(b.id));
  return n;
}

// 시장 컨센서스를 1차 보도에서 확인한 값(config/macro_consensus_verified.json)을 consensus 칸에 덮어쓴다.
function applyVerifiedConsensus(ledger) {
  const items = C.readJson(path.join(C.ROOT, 'config', 'macro_consensus_verified.json'), { items: [] }).items;
  let n = 0;
  for (const v of items) {
    const ev = ledger.events.find((e) => e.type === 'macro' && e.date_et === v.date_et && e.metric === v.metric && e.measure === v.measure);
    if (!ev) continue;
    Object.assign(ev, { consensus: v.consensus, consensus_source: v.source, consensus_url: v.url });
    n++;
  }
  return n;
}

function stampHolds(ledger) {
  let held = 0;
  for (const ev of ledger.events) { const h = M.checkEvent(ev) || null; ev.hold = h; if (h) held++; }
  return held;
}

function load() { return C.readJson(CAL_PATH, { updated_at: null, events: [] }); }

async function run(dateArg) {
  const date = dateArg || C.kstDate();
  const logDir = path.join(C.ROOT, 'logs', process.env.LOG_NAME || date);
  const market = C.readJson(path.join(logDir, '0_data.json'), null);
  const D = market?.us_date || C.expectedTradingDay();
  const from = C.addDays(D, -2), to = C.addDays(D, 14);
  const nowIso = new Date().toISOString();
  const ledger = load();
  const inWin = (e) => e.date_et >= from && e.date_et <= to;

  const stats = {};
  const collectFile = path.join(logDir, '1_collect.md');
  if (fs.existsSync(collectFile)) {
    const md = fs.readFileSync(collectFile, 'utf8');
    const evs = eventsFromCollect(md, nowIso).filter(inWin);
    stats.migrated = migrate(ledger);
    stats.collect = merge(ledger, evs);
  } else stats.collect = '1_collect.md 없음 — macro/fed/corporate 갱신 건너뜀';

  const er = await fetchEarnings(from, to);
  if (er.ok) stats.earnings = { ...merge(ledger, earningsToEvents(er.rows, nowIso).filter(inWin)), sources: er.srcs.join(', ') };
  else stats.earnings = `수집 실패 — earnings 는 기존 원장 유지 (${er.srcs.join(', ')})`;

  stats.migrated = (stats.migrated || 0) + migrate(ledger);
  stats.deduped = dedupe(ledger);
  stats.expanded = expandFamilies(ledger, nowIso);
  stats.verified_consensus = applyVerifiedConsensus(ledger);
  stats.actuals = await fillActuals(ledger, nowIso);
  stats.verified_earnings = applyVerifiedEarnings(ledger, nowIso);
  computeSurprises(ledger);
  stats.held = stampHolds(ledger);
  ledger.updated_at = nowIso;
  ledger.window = { from, to, anchor_us_date: D };
  C.writeJson(CAL_PATH, ledger);
  console.log(`calendar.json: 총 ${ledger.events.length}건 · ${JSON.stringify(stats)}`);
}

// --- 자체 테스트 -------------------------------------------------------------
async function selftest() {
  const assert = require('assert');
  const T1 = '2026-10-07T00:00:00Z';
  const collect = `
### [8] 향후 14일 주요 일정
| 날짜(ET) | 시각(ET) | 구분 | 이벤트 | 직전값 | 예상값 | 예상출처 | 출처 |
|---|---|---|---|---|---|---|---|
| 2026-10-14 | 08:30 | macro | 9월 CPI (YoY) | 3.4% | 3.6% | Dow Jones 서베이 (CNBC) | CNBC |
| 2026-10-14 | 08:30 | macro | 9월 CPI (MoM) | 0.4% | 0.6% | Dow Jones 서베이 (CNBC) | CNBC |
| 2026-10-14 | 08:30 | macro | 9월 Core CPI (YoY) | 2.4% | 2.5% | Dow Jones 서베이 (CNBC) | CNBC |
| 2026-10-14 | 08:30 | macro | 9월 Core CPI (MoM) | 0.3% | 0.2% | Dow Jones 서베이 (CNBC) | CNBC |
| 2026-10-14 | 08:30 | macro | CPI (9월, CPI/Core CPI) | N/A | 2.5% | Scotiabank 경제캘린더 | Scotiabank |
| 2026-10-15 | 08:30 | macro | 9월 PPI | 2.1% | 2.3% | Reuters | Reuters |
| 2026-10-16 | 08:30 | macro | 9월 소매판매 (MoM) | 0.4% | 0.3% |  | 블로그 |
| 2026-10-28 | 14:00 | fed | FOMC 금리 결정 | 3.75% | 3.75% | Fed | Fed |

| 날짜(ET) | 시각(ET) | 기업 | 티커 | 이벤트 | 출처 |
|---|---|---|---|---|---|
| 2026-10-17 | | 무명 | ZZZ | 출처 없는 루머 | |

### [9] 사실
`;
  const a = eventsFromCollect(collect, T1);
  const by = (id) => a.find((e) => e.id === id);
  // ① 원장 키 = (발표일, metric, measure): CPI 4줄이 서로 다른 id 를 갖는다
  for (const id of ['2026-10-14-CPI-yoy', '2026-10-14-CPI-mom', '2026-10-14-CORECPI-yoy', '2026-10-14-CORECPI-mom']) assert(by(id), `id ${id}`);
  assert.strictEqual(by('2026-10-14-CPI-yoy').consensus, 3.6); assert.strictEqual(by('2026-10-14-CORECPI-mom').consensus, 0.2);
  assert.strictEqual(by('2026-10-14-CPI-yoy').unit, '%'); assert.strictEqual(by('2026-10-14-CPI-yoy').seasonal, 'nsa'); assert.strictEqual(by('2026-10-14-CPI-mom').seasonal, 'sa');
  // ② 헤드라인·근원 혼합 행: 측정 기준이 없어 숫자가 버려지고, 명확한 행이 있으면 dedupe 가 제거한다
  const mixed = by('2026-10-14-CORECPI-mixed');
  assert(mixed && mixed.consensus == null && mixed.ref_consensus == null, '혼합 행은 숫자 없음');
  // ③ 출처 혼용: Scotiabank/nowcast 는 consensus 칸에 못 들어간다. 측정 기준 없는 PPI 도 숫자 없음
  assert.strictEqual(by('2026-10-15-PPI-unk').consensus, null);
  assert.strictEqual(by('2026-10-16-RETAIL-mom').consensus, null, '허용 출처가 아니면 consensus 칸 불가');
  assert.strictEqual(by('2026-10-16-RETAIL-mom').ref_consensus, 0.3);
  assert(!a.some((e) => e.ticker === 'ZZZ'), '출처 없는 기업 이벤트는 제외');
  const nowcast = eventsFromCollect(collect.replace('| 3.6% | Dow Jones 서베이 (CNBC) | CNBC |', '| 3.6% | Cleveland Fed nowcast | CNBC |'), T1);
  assert.strictEqual(nowcast.find((e) => e.id === '2026-10-14-CPI-yoy').consensus, null, 'nowcast 는 예상값 칸 불가');
  assert.strictEqual(nowcast.find((e) => e.id === '2026-10-14-CPI-yoy').ref_consensus, 3.6);
  // ④ 같은 발표 중복 제거 + 누적 병합
  const ledger = { events: [] };
  merge(ledger, a);
  assert(dedupe(ledger) >= 1 && !ledger.events.some((e) => e.id === '2026-10-14-CORECPI-mixed'), '혼합 행 제거');
  assert.strictEqual(ledger.events.filter((e) => e.date_et === '2026-10-14').length, 4, 'CPI 발표는 정확히 4줄');
  // ⑤ 발표값은 코드가 채운다 (가짜 FRED 시리즈 주입): 사고 재현값 = BLS 9월 CPI
  const fake = {
    CPIAUCSL: new Map([['2026-08-01', 334.131], ['2026-09-01', 336.298], ['2026-07-01', 334.131 / 1.004]]),
    CPILFESL: new Map([['2026-07-01', 336.789], ['2026-08-01', 337.765], ['2026-09-01', 338.896]]),
    CPIAUCNS: new Map([['2026-08-01', 334.98], ['2026-09-01', 336.94], ['2025-08-01', 334.98 / 1.034], ['2025-09-01', 336.94 / 1.0374]]),
    CPILFENS: new Map([['2026-08-01', 338.041], ['2026-09-01', 339.287], ['2025-08-01', 338.041 / 1.0245], ['2025-09-01', 339.287 / 1.0256]]),
  };
  const getSeries = async (id) => fake[id] || new Map();
  const real = (id) => ledger.events.find((x) => x.id === id);
  await fillActuals(ledger, T1, getSeries); computeSurprises(ledger); stampHolds(ledger);
  const ids = ['2026-10-14-CPI-mom', '2026-10-14-CPI-yoy', '2026-10-14-CORECPI-mom', '2026-10-14-CORECPI-yoy'];
  assert.deepStrictEqual(ids.map((i) => real(i).actual), [0.6, 3.7, 0.3, 2.6], '코드가 FRED 에서 BLS 값을 재현');
  assert.deepStrictEqual(ids.map((i) => real(i).prior), [0.4, 3.4, 0.3, 2.4], '직전값도 코드가 채움');
  assert.deepStrictEqual(ids.map((i) => real(i).surprise), [0, 0.1, 0.1, 0.1], '서프라이즈(%p)');
  assert(ids.every((i) => real(i).hold == null), '정상 4줄은 보류 없음');
  const ex = { events: [by('2026-10-14-CPI-yoy')] }; assert.strictEqual(expandFamilies(ex, T1), 3, 'CPI 한 줄만 있어도 4줄로 확장'); assert.strictEqual(ex.events.length, 4);
  // ⑥ 사고 재현: MoM 값을 YoY 칸에 넣거나, 혼합·nowcast 출처 행은 검증기가 반드시 보류시킨다
  const bad = (o) => M.checkMacro({ type: 'macro', metric: 'CPI', measure: 'yoy', unit: '%', prior: 3.4, consensus: 3.6, consensus_source: 'Dow Jones', actual: 3.7, ...o });
  assert.strictEqual(bad({}), null, '정상');
  assert(bad({ actual: 0.6 }), 'MoM 값(0.6)을 YoY 칸에');
  assert(/출처/.test(bad({ consensus_source: 'Cleveland Fed nowcast' })), 'nowcast 출처');
  assert(/혼합/.test(bad({ mixed: true })), '헤드라인·근원 혼합');
  assert(/측정 기준/.test(bad({ measure: null })), '측정 기준 없음');
  assert(/이탈/.test(bad({ consensus: 2.5, actual: null })), '예상값이 직전값에서 과도하게 이탈(근원 예상을 헤드라인 칸에)');
  assert(/서프라이즈/.test(bad({ consensus: 3.2, actual: 3.7 })), 'YoY 서프라이즈 +0.5%p 는 허용(±0.4) 초과');
  // ⑦ 옛 원장 이전: 사고 당시 두 줄 → 새 스키마에서 잘못된 숫자가 사라진다
  const legacy = { events: [
    { id: '2026-10-14-CORECPI', date_et: '2026-10-14', type: 'macro', title: 'CPI (9월, CPI/Core CPI)', prior: null, consensus: '+2.5%', actual: '+0.3%', surprise: -2.2, source: 'Scotiabank 경제캘린더 [P3]' },
    { id: '2026-10-14-CPI', date_et: '2026-10-14', type: 'macro', title: '9월 CPI (YoY)', prior: null, consensus: '+3.6%', actual: '+0.6%', surprise: -3, source: 'Kiplinger' },
  ] };
  migrate(legacy); dedupe(legacy);
  const lc = legacy.events.find((e) => e.title === '9월 CPI (YoY)');
  assert.strictEqual(lc.id, '2026-10-14-CPI-yoy'); assert.strictEqual(lc.actual, null); assert.strictEqual(lc.consensus, null);
  assert.strictEqual(lc.ref_consensus, 3.6, 'Kiplinger 는 참고값으로만');
  assert(!legacy.events.some((e) => e.title === 'CPI (9월, CPI/Core CPI)'), '혼합 행 제거');
  // ⑧ 병합 규칙: null 로 기존 값을 지우지 않는다
  const l2 = { events: [{ ...EMPTY, id: 'x', date_et: '2026-10-20', consensus: 1 }] };
  merge(l2, [{ ...EMPTY, id: 'x', date_et: '2026-10-20', consensus: null, prior: 2 }]);
  assert.deepStrictEqual([l2.events[0].consensus, l2.events[0].prior], [1, 2]);
  // ⑨ 실적: 서프라이즈 ±50% 초과 · 기준 불일치 보류
  const E = (o) => M.checkEarnings({ type: 'earnings', actual_eps: 2.85, cons_eps: 2.73, prior_eps: 2.24, eps_basis: 'adjusted', cons_basis: 'adjusted', prior_basis: 'adjusted', ...o });
  assert.strictEqual(E({}), null);
  assert(/초과/.test(E({ actual_eps: -0.76, cons_eps: -0.31 })), 'APLD 형태(-145%)');
  assert(/기준 불일치/.test(E({ eps_basis: 'gaap' })), '실제 GAAP vs 예상 조정');
  assert(/전년 EPS 기준/.test(E({ prior_basis: 'gaap' })), '전년 EPS 기준');
  // ⑩ 소스 정규화
  const f = normFinnhub({ earningsCalendar: [{ date: '2026-10-20', symbol: 'NVDA', hour: 'amc', epsEstimate: 1.2, revenueEstimate: 5e10, epsActual: null }] });
  assert.deepStrictEqual([f[0].timing, f[0].cons_eps, f[0].actual_eps], ['amc', 1.2, null]);
  const nq = normNasdaq('2026-10-14', { data: { rows: [{ symbol: 'BAC', time: 'time-pre-market', epsForecast: '$1.12', lastYearEPS: '$1.06', marketCap: '$378,237,747,000' }] } });
  assert.deepStrictEqual([nq[0].timing, nq[0].cons_eps, nq[0].prior_eps, nq[0].mcap], ['bmo', 1.12, 1.06, 378237747000]);
  console.log('selftest 통과: 원장 키(발표일·metric·measure) · 혼합/중복/출처혼용 차단 · FRED 발표값(BLS 9월 CPI 재현) · 사고 회귀(MoM→YoY칸 등) · 옛 원장 이전 · 실적 보류 규칙');
}

if (require.main === module && process.argv.includes('--selftest')) selftest().catch((e) => { console.error(e); process.exit(1); });
else if (require.main === module) {
  run(process.argv.slice(2).find((a) => /^\d{4}-\d{2}-\d{2}$/.test(a))).catch((e) => { console.error(e.message || e); process.exit(1); });
}
module.exports = { expandFamilies, applyVerifiedConsensus, merge, eventsFromCollect, fillActuals, computeSurprises, migrate, dedupe, stampHolds, applyVerifiedEarnings };
