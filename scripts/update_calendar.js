#!/usr/bin/env node
'use strict';
// 2주 일정 원장(docs/data/calendar.json) 누적 갱신. LLM 미사용 — 코드가 수집·파싱·병합만 한다.
//   node scripts/update_calendar.js [YYYY-MM-DD]   KST 기준일 폴더(logs/<날짜>/1_collect.md, 0_data.json)를 입력으로 사용
//   node scripts/update_calendar.js --selftest     임시 폴더에서 누적·병합 규칙 테스트
//
// 소스
//   earnings : Finnhub /calendar/earnings(키 있을 때) + Nasdaq 공개 API(키 없는 보조·전년 EPS). 둘 다 실패하면 earnings 는 건드리지 않는다.
//   macro/fed/corporate : 1_collect.md [8] 표(출처가 있는 값만). 발표치는 [3] 표.
// 병합 규칙: id 기준 upsert. 새 값이 null 이면 기존 값을 지우지 않는다. 원장에서는 절대 삭제하지 않는다(표시 필터는 사이트가 한다).

const fs = require('fs');
const path = require('path');
const C = require('../lib/common');

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
    const [cDate, cTime, cType, cEvt, cTicker, cPrior, cCons, cSrc] = [['날짜'], ['시각'], ['구분'], ['이벤트'], ['티커'], ['직전값', '이전치'], ['예상값', '컨센서스'], ['출처']].map((n) => col(...n));
    if (cDate < 0 || cEvt < 0) continue;
    const isCorp = cTicker >= 0 || /기업/.test(h);
    for (const r of t.rows) {
      const date = (r[cDate] || '').match(/\d{4}-\d{2}-\d{2}/)?.[0];
      const title = clean(r[cEvt]);
      if (!date || !title) continue;
      const time = (cTime >= 0 && (r[cTime] || '').match(/\d{1,2}:\d{2}/)?.[0]) || null;
      const src = cSrc >= 0 ? clean(r[cSrc]) : null;
      // 출처가 없으면 값은 신뢰하지 않고 null (일정 자체는 남긴다)
      const prior = src && cPrior >= 0 ? clean(r[cPrior]) : null;
      const consensus = src && cCons >= 0 ? clean(r[cCons]) : null;
      if (isCorp) {
        const ticker = cTicker >= 0 ? (clean(r[cTicker]) || '').toUpperCase() || null : null;
        if (!src) continue; // 기업 이벤트는 출처가 확인된 것만 (지시서)
        out.push({ ...EMPTY, id: `${date}-${ticker || 'CORP'}-${slug(title)}`, date_et: date, time_et: time, type: 'corporate', title, ticker, importance: 2, source: src, collected_at: nowIso });
      } else {
        const [key, imp] = keyOf(title);
        const typeCell = cType >= 0 ? (r[cType] || '').toLowerCase() : '';
        const type = /fed|fomc|연준|연설/.test(typeCell + title) ? 'fed' : 'macro';
        const id = `${date}-${key || (type === 'fed' ? 'FED-' : 'MACRO-') + slug(title)}`;
        out.push({ ...EMPTY, id, date_et: date, time_et: time, type, title, prior, consensus, importance: type === 'fed' && !key ? 2 : imp, source: src, collected_at: nowIso });
      }
    }
  }
  return out;
}

// Collect [3] 발표치 표 → { id: {actual, surprise} } 후보. 지표 키와 날짜로 원장 항목과 짝짓는다.
function actualsFromCollect(md, usDate) {
  const sec = section(md, /^#{2,4}\s*\[3\]/m, /^#{2,4}\s*\[4\]/m);
  const res = [];
  for (const t of parseTables(sec)) {
    const col = (n) => t.headers.findIndex((x) => x.includes(n));
    const [cName, cAct, cCons] = [col('지표'), col('발표치'), col('예상')];
    if (cName < 0 || cAct < 0) continue;
    for (const r of t.rows) {
      const [key] = keyOf(r[cName] || '');
      const actual = clean(r[cAct]);
      if (!key || !actual) continue;
      res.push({ key, date: usDate, actual, consensus: cCons >= 0 ? clean(r[cCons]) : null });
    }
  }
  return res;
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
    for (const [k, v] of Object.entries(ev)) {
      if (v == null || k === 'id') continue;        // null 로 기존 값을 지우지 않는다
      if (k === 'collected_at') continue;           // 값이 바뀔 때만 아래에서 갱신
      if (JSON.stringify(cur[k]) !== JSON.stringify(v)) { cur[k] = v; changed = true; }
    }
    if (changed) { cur.collected_at = ev.collected_at; updated++; }
  }
  ledger.events = [...byId.values()].sort((a, b) => (a.date_et + (a.time_et || '')).localeCompare(b.date_et + (b.time_et || '')) || a.id.localeCompare(b.id));
  return { added, updated };
}

// 발표치를 원장 macro 항목에 반영 (숫자·단위가 모두 같을 때만 surprise 계산)
function applyActuals(ledger, actuals, nowIso) {
  let n = 0;
  for (const a of actuals) {
    const ev = ledger.events.find((e) => e.type === 'macro' && e.id.slice(11) === a.key && e.date_et >= C.addDays(a.date, -1) && e.date_et <= a.date);
    if (!ev) continue;
    ev.actual = a.actual; ev.collected_at = nowIso; n++;
    const cons = ev.consensus ?? a.consensus;
    if (ev.consensus == null && a.consensus != null) ev.consensus = a.consensus;
    const [x, y] = [toNum(ev.actual), toNum(cons)];
    ev.surprise = x != null && y != null && unitOf(ev.actual) === unitOf(cons) ? +(x - y).toFixed(6) : null;
  }
  return n;
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
    stats.collect = merge(ledger, evs);
    stats.actuals = applyActuals(ledger, actualsFromCollect(md, D), nowIso);
  } else stats.collect = '1_collect.md 없음 — macro/fed/corporate 갱신 건너뜀';

  const er = await fetchEarnings(from, to);
  if (er.ok) stats.earnings = { ...merge(ledger, earningsToEvents(er.rows, nowIso).filter(inWin)), sources: er.srcs.join(', ') };
  else stats.earnings = `수집 실패 — earnings 는 기존 원장 유지 (${er.srcs.join(', ')})`;

  ledger.updated_at = nowIso;
  ledger.window = { from, to, anchor_us_date: D };
  C.writeJson(CAL_PATH, ledger);
  console.log(`calendar.json: 총 ${ledger.events.length}건 · ${JSON.stringify(stats)}`);
}

// --- 자체 테스트 -------------------------------------------------------------
function selftest() {
  const assert = require('assert');
  const T1 = '2026-10-07T00:00:00Z', T2 = '2026-10-08T00:00:00Z';
  const collect = `
### [8] 향후 14일 주요 일정
| 날짜(ET) | 시각(ET) | 구분 | 이벤트 | 직전값 | 예상값 | 출처 |
|---|---|---|---|---|---|---|
| 2026-10-14 | 08:30 | macro | 9월 CPI (YoY) | 3.2% | 3.3% | BLS https://www.bls.gov |
| 2026-10-15 | 08:30 | macro | 9월 PPI | 2.1% | N/A | BLS |
| 2026-10-16 | 08:30 | macro | 소매판매 | 0.4% | 0.3% |  |
| 2026-10-28 | 14:00 | fed | FOMC 금리 결정 | 3.75% | 3.75% | Fed |
| 2026-12-30 | 08:30 | macro | 먼 미래 | | | BLS |

| 날짜(ET) | 시각(ET) | 기업 | 티커 | 이벤트 | 출처 |
|---|---|---|---|---|---|
| 2026-10-16 | 10:00 | 엔비디아 | NVDA | 제품 발표 | 기업 IR |
| 2026-10-17 | | 무명 | ZZZ | 출처 없는 루머 | |

### [9] 사실
`;
  const a = eventsFromCollect(collect, T1).filter((e) => e.date_et <= '2026-10-31');
  const ids = a.map((e) => e.id);
  assert(ids.includes('2026-10-14-CPI') && ids.includes('2026-10-28-FOMC'), `id 규칙: ${ids}`);
  assert.strictEqual(a.find((e) => e.id === '2026-10-15-PPI').consensus, null, 'N/A 는 null');
  assert.strictEqual(a.find((e) => e.id === '2026-10-16-RETAIL').consensus, null, '출처 없는 값은 null');
  assert(!a.some((e) => e.ticker === 'ZZZ'), '출처 없는 기업 이벤트는 제외');
  // 누적: 1일차 → 2일차(일부 항목만 + 새 항목 + null 값) 병합해도 기존 항목이 사라지지 않는다
  const ledger = { events: [] };
  const r1 = merge(ledger, a);
  const day1 = ledger.events.length;
  const day2 = [
    { ...EMPTY, id: '2026-10-14-CPI', date_et: '2026-10-14', type: 'macro', title: '9월 CPI (YoY)', consensus: '3.4%', prior: null, source: 'BLS', collected_at: T2 },
    { ...EMPTY, id: '2026-10-20-NVDA', date_et: '2026-10-20', type: 'earnings', ticker: 'NVDA', title: 'NVDA 실적', collected_at: T2 },
  ];
  const r2 = merge(ledger, day2);
  assert.strictEqual(ledger.events.length, day1 + 1, '새 항목만 늘어야 함');
  const cpi = ledger.events.find((e) => e.id === '2026-10-14-CPI');
  assert.strictEqual(cpi.consensus, '3.4%', '새 값으로 갱신');
  assert.strictEqual(cpi.prior, '3.2%', 'null 은 기존 prior 를 지우지 않음');
  assert(ids.every((id) => ledger.events.some((e) => e.id === id)), '1일차 항목이 모두 남아야 함');
  assert.strictEqual(r1.added, a.length); assert.strictEqual(r2.added, 1);
  // 발표치 반영 + 서프라이즈
  const act = actualsFromCollect('### [3] 지표\n| 지표 | 발표치 | 예상치 |\n|---|---|---|\n| 9월 CPI (YoY) | 3.5% | 3.4% |\n### [4] x', '2026-10-14');
  assert.strictEqual(applyActuals(ledger, act, T2), 1);
  assert.strictEqual(ledger.events.find((e) => e.id === '2026-10-14-CPI').surprise, 0.1, 'surprise = 3.5-3.4');
  // 단위가 다르면 surprise 계산 안 함
  const l2 = { events: [{ ...EMPTY, id: '2026-10-02-NFP', date_et: '2026-10-02', type: 'macro', consensus: '84K' }] };
  applyActuals(l2, [{ key: 'NFP', date: '2026-10-02', actual: '29,000명', consensus: null }], T2);
  assert.strictEqual(l2.events[0].surprise, null, '단위 불일치');
  // 소스 정규화
  const f = normFinnhub({ earningsCalendar: [{ date: '2026-10-20', symbol: 'NVDA', hour: 'amc', epsEstimate: 1.2, revenueEstimate: 5e10, epsActual: null }] });
  assert.deepStrictEqual([f[0].timing, f[0].cons_eps, f[0].actual_eps], ['amc', 1.2, null]);
  const nq = normNasdaq('2026-10-14', { data: { rows: [{ symbol: 'BAC', time: 'time-pre-market', epsForecast: '$1.12', lastYearEPS: '$1.06', marketCap: '$378,237,747,000' }] } });
  assert.deepStrictEqual([nq[0].timing, nq[0].cons_eps, nq[0].prior_eps, nq[0].mcap], ['bmo', 1.12, 1.06, 378237747000]);
  console.log('selftest 통과: id 규칙 · null/무출처 처리 · 2일 누적(손실 없음) · 서프라이즈 · 소스 정규화');
}

if (require.main === module && process.argv.includes('--selftest')) selftest();
else if (require.main === module) {
  run(process.argv.slice(2).find((a) => /^\d{4}-\d{2}-\d{2}$/.test(a))).catch((e) => { console.error(e.message || e); process.exit(1); });
}
module.exports = { merge, eventsFromCollect, applyActuals };
