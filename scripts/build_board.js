#!/usr/bin/env node
'use strict';

// 경기 상황판 데이터 빌더. LLM 을 쓰지 않는다(코드만).
//   node scripts/build_board.js             FRED(키 없는 CSV)에서 받아 docs/data/board.json 작성
//   node scripts/build_board.js --demo OUT  네트워크 없이 가짜 시계열로 OUT 에 작성(화면 개발용, demo:true 표시)
//   node scripts/build_board.js --selftest  계산 규칙 단위 테스트
//
// 원칙(CLAUDE.md 와 같다): 못 받은 지표는 value:null + error 로 남기고 계속 간다. 값을 지어내지 않는다.
// 색(양호·보통·주의)은 "읽기 쉽게 하려는 표시"다. 매매 신호가 아니다. 기준은 config/board.json 에 있다.

const path = require('path');
const C = require('../lib/common');

const CONFIG = path.join(C.ROOT, 'config', 'board.json');
const OUT = path.join(C.ROOT, 'docs', 'data', 'board.json');
const round = (v, d = 4) => (typeof v === 'number' && Number.isFinite(v) ? Number(v.toFixed(d)) : null);
const addDays = C.addDays;

// --- 수집 --------------------------------------------------------------------
function parseFredCsv(text) {
  const rows = text.trim().split(/\r?\n/).slice(1)
    .map((l) => l.split(','))
    .filter(([d, v]) => /^\d{4}-\d{2}-\d{2}$/.test(d) && v !== '.' && v !== '' && Number.isFinite(Number(v)))
    .map(([d, v]) => ({ day: d, v: Number(v) }));
  if (rows.length < 12) throw new Error('FRED CSV 행 부족');
  return rows;
}
async function fredRows(id, startDay) {
  const url = `https://fred.stlouisfed.org/graph/fredgraph.csv?id=${id}&cosd=${startDay}`;
  let lastErr;
  for (let i = 0; i < 3; i++) {
    try { return parseFredCsv(await C.getText(url, 30000)); } catch (e) { lastErr = e; await new Promise((r) => setTimeout(r, 1500 * (i + 1))); }
  }
  throw lastErr;
}

// Yahoo 일별 종가(지수용). FRED 는 S&P 500 을 최근 1년치만 주므로 1년 고점·200일 평균 계산에 쓴다.
// 장중에 돌면 마지막 봉은 그 시각의 값이다(나중에 장중 갱신을 붙일 때 그대로 쓴다).
async function yahooRows(symbol) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?range=10y&interval=1d`;
  let lastErr;
  for (let i = 0; i < 3; i++) {
    try {
      const r = (await C.getJson(url, 30000))?.chart?.result?.[0];
      const q = r?.indicators?.quote?.[0]?.close || [];
      const tz = r?.meta?.exchangeTimezoneName || 'America/New_York';
      const rows = (r?.timestamp || [])
        .map((t, k) => ({ day: new Date(t * 1000).toLocaleDateString('sv-SE', { timeZone: tz }), v: q[k] }))
        .filter((b) => typeof b.v === 'number' && Number.isFinite(b.v));
      if (rows.length < 260) throw new Error('Yahoo 행 부족');
      return rows;
    } catch (e) { lastErr = e; await new Promise((res) => setTimeout(res, 1500 * (i + 1))); }
  }
  throw lastErr;
}

// --- 변환 --------------------------------------------------------------------
// rows: [{day, v}] 오름차순(빈 값은 이미 빠져 있다). 반환: [{day, v, src}] — src 는 그 값을 만든 원자료(검증·화면 표시용).
// 날짜로 짝을 맞춘다. 행 개수로 세지 않는다: FRED 에는 빠진 달이 있다(예: 2025년 10월 CPI·실업률은 발표되지 않았다).
// 짝이 없는 시점은 값을 만들지 않고 건너뛴다(13개월 변화를 '전년 대비'라고 부르는 사고 방지).
const monthKey = (day) => day.slice(0, 7);
function shiftMonth(day, n) {
  const y = Number(day.slice(0, 4)), m = Number(day.slice(5, 7)) - 1 + n;
  const yy = y + Math.floor(m / 12), mm = ((m % 12) + 12) % 12;
  return `${yy}-${String(mm + 1).padStart(2, '0')}`;
}
function transform(rows, kind, scale = 1) {
  const s = rows.map((r) => ({ day: r.day, v: r.v * scale, raw: r.v }));
  if (kind === 'level') return s.map((r) => ({ day: r.day, v: r.v, src: { kind, raw: [r.day, r.raw] } }));
  if (kind === 'yoy' || kind === 'diff') { // 월간 자료
    const byMonth = new Map(s.map((r) => [monthKey(r.day), r]));
    const back = kind === 'yoy' ? -12 : -1;
    const out = [];
    for (const r of s) {
      const b = byMonth.get(shiftMonth(r.day, back));
      if (!b || (kind === 'yoy' && b.v === 0)) continue;
      out.push({ day: r.day, v: kind === 'yoy' ? (r.v / b.v - 1) * 100 : r.v - b.v, src: { kind, cur: [r.day, r.raw], base: [b.day, b.raw] } });
    }
    return out;
  }
  if (kind === 'ma4') { // 주간 자료: 연속된 4주(간격 7일)일 때만
    const out = [];
    for (let i = 3; i < s.length; i++) {
      const w = s.slice(i - 3, i + 1);
      const gap = (new Date(w[3].day) - new Date(w[0].day)) / 864e5;
      if (gap !== 21) continue;
      out.push({ day: s[i].day, v: w.reduce((a, r) => a + r.v, 0) / 4, src: { kind, vals: w.map((r) => [r.day, r.raw]) } });
    }
    return out;
  }
  if (kind === 'dd252' || kind === 'vs200') {
    const n = kind === 'dd252' ? 252 : 200;
    const out = [];
    for (let i = n - 1; i < s.length; i++) {
      const win = s.slice(i - n + 1, i + 1);
      let ref, src;
      if (kind === 'dd252') { const hi = win.reduce((a, r) => (r.v > a.v ? r : a)); ref = hi.v; src = { kind, close: [s[i].day, s[i].raw], high: [hi.day, hi.raw], days: n }; }
      else { ref = win.reduce((a, r) => a + r.v, 0) / n; src = { kind, close: [s[i].day, s[i].raw], avg: round(ref, 4), from: win[0].day, days: n }; }
      out.push({ day: s[i].day, v: (s[i].v / ref - 1) * 100, src });
    }
    return out;
  }
  throw new Error(`알 수 없는 transform: ${kind}`);
}

// day 이전(포함) 마지막 관측값
function valueAt(s, day) {
  let hit = null;
  for (const r of s) { if (r.day <= day) hit = r; else break; }
  return hit ? hit.v : null;
}
// 최근 years 년 안에서 x 이하인 값의 비율(0~100)
function percentile(s, x, lastDay, years) {
  const from = addDays(lastDay, -Math.round(365.25 * years));
  const win = s.filter((r) => r.day >= from && r.day <= lastDay).map((r) => r.v);
  if (win.length < 8 || x == null) return { pct: null, n: win.length, from: win.length ? s.find((r) => r.day >= from).day : null };
  return { pct: (win.filter((v) => v <= x).length / win.length) * 100, n: win.length, from: s.find((r) => r.day >= from).day };
}

// 색 판정. rule 이 있으면 그 경계값, 없으면 5년 위치(나쁜 쪽 백분위).
function judge(ind, v, pct, sr) {
  if (v == null) return { status: 'na', basis: null };
  if (ind.bad === 'none') return { status: 'info', basis: 'none' };
  if (ind.rule) {
    const { dir, mid, warn } = ind.rule;
    const st = dir === 'high' ? (v >= warn ? 'warn' : v >= mid ? 'mid' : 'good') : (v < warn ? 'warn' : v < mid ? 'mid' : 'good');
    return { status: st, basis: 'rule' };
  }
  if (pct == null) return { status: 'info', basis: 'none' };
  const badness = ind.bad === 'high' ? pct : 100 - pct;
  return { status: badness >= sr.warn_at_badness ? 'warn' : badness >= sr.mid_at_badness ? 'mid' : 'good', basis: 'position', badness: round(badness, 1) };
}

function weather(counts, small) {
  const n = counts.good + counts.mid + counts.warn;
  if (!n) return 'none';
  if (small) { // 지표가 몇 개뿐인 묶음
    if (counts.warn * 2 > n) return 'rain';   // 절반을 넘을 때만 비(딱 절반은 흐림)
    if (counts.warn >= 1) return 'cloudy';
    return counts.good === n ? 'sunny' : 'partly';
  }
  if (counts.warn / n >= 0.4) return 'rain';
  if (counts.warn / n >= 0.2) return 'cloudy';
  return counts.good / n >= 0.6 ? 'sunny' : 'partly';
}

function sparkline(s, lastDay, years = 2, maxPts = 90) {
  const from = addDays(lastDay, -Math.round(365.25 * years));
  const win = s.filter((r) => r.day >= from);
  if (win.length <= maxPts) return win.map((r) => [r.day, round(r.v, 4)]);
  const step = (win.length - 1) / (maxPts - 1);
  const out = [];
  for (let i = 0; i < maxPts; i++) { const r = win[Math.round(i * step)]; out.push([r.day, round(r.v, 4)]); }
  return out;
}

function buildIndicator(ind, rows, sr) {
  const s = transform(rows, ind.transform, ind.scale || 1);
  if (!s.length) throw new Error('변환 뒤 값 없음');
  const last = s[s.length - 1];
  const years = sr.window_years;
  const p = percentile(s, last.v, last.day, years);
  const v3m = valueAt(s, addDays(last.day, -91));
  const p3 = percentile(s, v3m, last.day, years);
  const j = judge(ind, last.v, p.pct, sr);
  // 원자료의 가장 최근 시점이 계산에서 빠졌으면(짝이 되는 과거 값이 없음) 그 사실을 남긴다
  const rawLast = rows[rows.length - 1];
  const skipped = rawLast.day > last.day ? { day: rawLast.day, raw: rawLast.v } : null;
  // 지금은 주의가 아니어도, 최근 N일 안에 주의였던 마지막 날을 남긴다(금리차 역전처럼 풀린 뒤에도 의미가 남는 지표)
  let recentWarn = null;
  if (ind.recent_warn_days && ind.rule && j.status !== 'warn') {
    const from = addDays(last.day, -ind.recent_warn_days);
    for (const r of s) if (r.day >= from && r.day < last.day && judge(ind, r.v, null, sr).status === 'warn') recentWarn = { day: r.day, v: round(r.v) };
  }
  return {
    calc: last.src, skipped_latest: skipped, recent_warn: recentWarn,
    value: round(last.v), asof: last.day,
    v1m: round(valueAt(s, addDays(last.day, -30))), v3m: round(v3m), v1y: round(valueAt(s, addDays(last.day, -365))),
    pct: round(p.pct, 1), pct3m: round(p3.pct, 1), pct_n: p.n, pct_from: p.from,
    status: j.status, basis: j.basis,
    spark: sparkline(s, last.day),
  };
}

function assemble(cfg, results, extra = {}) {
  const sr = cfg.status_rule;
  const indicators = cfg.indicators.map((ind) => {
    const r = results[ind.id];
    const base = { id: ind.id, group: ind.group, label: ind.label, unit: ind.unit, decimals: ind.decimals, signed: !!ind.signed, bad: ind.bad, freq: ind.freq, source: `FRED:${ind.fred}`, what: ind.what, read: ind.read, now: ind.now || null, rule_note: ind.rule ? ind.rule.note : null, rule_line: ind.rule ? ind.rule.warn : null, window_note: ind.window_note || null };
    if (!r || (r.error && r.value == null)) return { ...base, value: null, status: 'na', error: (r && r.error) || '수집 안 됨' };
    return { ...base, ...r };
  });
  const tally = (list) => list.reduce((a, x) => { if (a[x.status] != null) a[x.status]++; return a; }, { good: 0, mid: 0, warn: 0, info: 0, na: 0 });
  const groups = cfg.groups.map((g) => {
    const counts = tally(indicators.filter((x) => x.group === g.id));
    return { ...g, counts, weather: weather(counts, true) };
  });
  const counts = tally(indicators);
  // 색을 줄 지표의 절반도 못 받았으면 전체 날씨를 정하지 않는다(몇 개만으로 '맑음'이 나오는 것을 막는다)
  const judgeable = cfg.indicators.filter((x) => x.bad !== 'none').length;
  const enough = counts.good + counts.mid + counts.warn >= judgeable / 2;
  const days = indicators.map((x) => x.asof).filter(Boolean).sort();
  return {
    schema: 1,
    generated_at: new Date().toISOString(), generated_kst: C.kstTime(),
    latest_data_day: days.length ? days[days.length - 1] : null,
    status_rule: sr, counts, weather: enough ? weather(counts, false) : 'none', weather_short: !enough,
    groups, indicators, ...extra,
  };
}

// 이번에 못 받은 지표는 지난번에 받은 실제 값을 그대로 둔다(추정이 아니다). 화면은 '새 자료를 받지 못했다'고 알린다.
// 지난 값도 없으면 value:null + error.
const KEEP = ['calc', 'skipped_latest', 'recent_warn', 'value', 'asof', 'v1m', 'v3m', 'v1y', 'pct', 'pct3m', 'pct_n', 'pct_from', 'spark', 'source'];
function carryOver(ind, prev, error, sr) {
  const old = prev && !prev.demo && Array.isArray(prev.indicators) ? prev.indicators.find((x) => x.id === ind.id) : null;
  if (!old || old.value == null) return { error };
  const kept = {};
  for (const k of KEEP) if (old[k] !== undefined) kept[k] = old[k];
  const j = judge(ind, old.value, old.pct, sr);
  return { ...kept, status: j.status, basis: j.basis, error, carried: true, carried_since: old.carried_since || prev.generated_kst || null };
}

// --- 실행 --------------------------------------------------------------------
async function main() {
  const cfg = C.readJson(CONFIG);
  if (!cfg) throw new Error('config/board.json 을 읽지 못함');
  const start = addDays(C.kstDate(), -Math.round(365.25 * 8)); // 5년 위치 + 전년비 + 200일 평균 여유
  const cache = {};
  const results = {};
  const prev = C.readJson(OUT);
  for (const ind of cfg.indicators) {
    try {
      const key = ind.yahoo ? `Y:${ind.yahoo}` : ind.fred;
      if (!cache[key]) {
        if (ind.yahoo) {
          try { cache[key] = { rows: await yahooRows(ind.yahoo), source: `Yahoo:${ind.yahoo}` }; }
          catch (e) { console.log(`     Yahoo 실패(${e.message}) → FRED 로 대체`); cache[key] = { rows: await fredRows(ind.fred, start), source: `FRED:${ind.fred}` }; }
        } else cache[key] = { rows: await fredRows(ind.fred, start), source: `FRED:${ind.fred}` };
      }
      results[ind.id] = { ...buildIndicator(ind, cache[key].rows, cfg.status_rule), source: cache[key].source };
      console.log(`ok   ${ind.id.padEnd(14)} ${results[ind.id].asof} ${results[ind.id].value} (${results[ind.id].status})`);
    } catch (e) {
      results[ind.id] = carryOver(ind, prev, String(e.message || e), cfg.status_rule);
      console.log(`FAIL ${ind.id.padEnd(14)} ${results[ind.id].error}${results[ind.id].carried ? ' → 지난번 값 유지' : ''}`);
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  const out = assemble(cfg, results);
  C.writeJson(OUT, out);
  const failed = out.indicators.filter((x) => x.value == null).length;
  console.log(`\n상황판: 지표 ${out.indicators.length}개 중 실패 ${failed}개 · 양호 ${out.counts.good} 보통 ${out.counts.mid} 주의 ${out.counts.warn} · 날씨 ${out.weather} → ${path.relative(C.ROOT, OUT)}`);
}

// 네트워크 없이 화면을 확인하기 위한 가짜 자료(결과에 demo:true 를 남겨 화면이 '예시 자료'라고 표시한다)
function demo(outPath) {
  const cfg = C.readJson(CONFIG);
  let seed = 7;
  const rnd = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
  const base = { DFF: 3.9, DGS2: 3.6, DGS10: 4.1, CPIAUCNS: 320, PCEPILFE: 125, T10Y3M: 0.4, T10Y2Y: 0.5, HOUST: 1350, PERMIT: 1400, PAYEMS: 159000, UNRATE: 4.3, ICSA: 230000, SAHMREALTIME: 0.2, RSAFS: 730000, INDPRO: 103, TCU: 77, UMCSENT: 60, BAMLH0A0HYM2: 3.1, NFCI: -0.5, M2SL: 22000, WALCL: 6600000, VIXCLS: 17, SP500: 6800, DTWEXBGS: 121, DCOILWTICO: 62, PCOPPUSDM: 10500 };
  const monthly = new Set(['CPIAUCNS', 'PCEPILFE', 'HOUST', 'PERMIT', 'PAYEMS', 'UNRATE', 'SAHMREALTIME', 'RSAFS', 'INDPRO', 'TCU', 'UMCSENT', 'M2SL', 'PCOPPUSDM']);
  const weekly = new Set(['ICSA', 'NFCI', 'WALCL']);
  const today = C.kstDate();
  const cache = {};
  const results = {};
  for (const ind of cfg.indicators) {
    if (!cache[ind.fred]) {
      const stepDays = monthly.has(ind.fred) ? 30 : weekly.has(ind.fred) ? 7 : 1;
      const n = stepDays === 30 ? 96 : Math.floor((365.25 * 8) / stepDays);
      const trendy = ['CPIAUCNS', 'PCEPILFE', 'PAYEMS', 'RSAFS', 'M2SL', 'SP500'].includes(ind.fred);
      let v = base[ind.fred] * (trendy ? 0.75 : 1);
      const rows = [];
      for (let i = n; i >= 0; i--) {
        const vol = Math.abs(base[ind.fred]) * (trendy ? 0.004 : 0.02) + 0.01;
        v += (rnd() - 0.5) * vol * (stepDays === 1 ? 0.6 : 1.4) + (trendy ? base[ind.fred] * 0.25 / n : (base[ind.fred] - v) * 0.02);
        const day = stepDays === 30 ? `${shiftMonth(today, -i)}-01` : addDays(today, -i * stepDays);
        if (stepDays === 1 && [0, 6].includes(new Date(day + 'T00:00:00Z').getUTCDay())) continue;
        rows.push({ day, v });
      }
      cache[ind.fred] = rows;
    }
    try { results[ind.id] = buildIndicator(ind, cache[ind.fred], cfg.status_rule); } catch (e) { results[ind.id] = { error: String(e.message) }; }
  }
  results.UMCSENT = { error: '예시: 수집 실패 화면 확인용' };
  C.writeJson(outPath, assemble(cfg, results, { demo: true }));
  console.log(`demo → ${outPath}`);
}

function selftest() {
  const assert = (c, m) => { if (!c) { console.error('FAIL', m); process.exit(1); } };
  // 최근 2년 안의 역전: 풀린 뒤에도 마지막 역전일을 남긴다
  {
    const sr1 = { warn_at_badness: 80, mid_at_badness: 50, window_years: 5 };
    const indT = { id: 'T', transform: 'level', bad: 'low', rule: { dir: 'low', mid: 0.5, warn: 0 }, recent_warn_days: 730 };
    const rowsT = [{ day: '2025-01-01', v: -0.3 }, { day: '2025-06-01', v: -0.1 }, { day: '2026-01-01', v: 0.4 }, { day: '2026-06-01', v: 0.8 }, { day: '2026-11-01', v: 0.9 }];
    const bt = buildIndicator(indT, rowsT, sr1);
    assert(bt.status === 'good' && bt.recent_warn && bt.recent_warn.day === '2025-06-01', 'recent_warn: 마지막 역전일');
    const bt2 = buildIndicator({ ...indT, recent_warn_days: 100 }, rowsT, sr1);
    assert(bt2.recent_warn === null, 'recent_warn: 기간 밖이면 없음');
    const bt3 = buildIndicator({ ...indT, recent_warn_days: undefined }, rowsT, sr1);
    assert(bt3.recent_warn === null, 'recent_warn: 설정 없으면 없음');
  }
  // 못 받은 지표: 지난 값이 있으면 유지(색은 지금 규칙으로 다시 판정), 없으면 null
  {
    const sr0 = { warn_at_badness: 80, mid_at_badness: 50, window_years: 5 };
    const indV = { id: 'V', bad: 'high', rule: { dir: 'high', mid: 20, warn: 30 } };
    const prev0 = { generated_kst: '2026-11-16 07:23', indicators: [{ id: 'V', value: 31, asof: '2026-11-13', pct: 90, status: 'good', label: '옛 이름', spark: [] }] };
    const k = carryOver(indV, prev0, 'HTTP 500', sr0);
    assert(k.carried && k.value === 31 && k.status === 'warn' && k.error === 'HTTP 500' && k.carried_since === '2026-11-16 07:23' && k.label === undefined, 'carryOver: 지난 값 유지 + 재판정');
    assert(carryOver(indV, null, 'x', sr0).value === undefined && carryOver(indV, { demo: true, indicators: prev0.indicators }, 'x', sr0).carried === undefined, 'carryOver: 지난 값 없음/예시 자료는 쓰지 않음');
    assert(weather({ good: 2, mid: 0, warn: 2 }, true) === 'cloudy' && weather({ good: 1, mid: 0, warn: 2 }, true) === 'rain' && weather({ good: 0, mid: 0, warn: 2 }, true) === 'rain', '묶음 날씨: 절반은 흐림, 절반 초과는 비');
    const cfg0 = { status_rule: sr0, groups: [{ id: 'g' }], indicators: [{ id: 'A', group: 'g', bad: 'high' }, { id: 'B', group: 'g', bad: 'high' }, { id: 'C', group: 'g', bad: 'high' }] };
    const few = assemble(cfg0, { A: { value: 1, status: 'good' }, B: { error: 'x' }, C: { error: 'x' } });
    assert(few.weather === 'none' && few.weather_short === true, '절반도 못 받으면 전체 날씨 없음');
    const kept = assemble(cfg0, { A: { value: 1, status: 'good' }, B: { value: 2, status: 'good', error: 'x', carried: true }, C: { error: 'x' } });
    assert(kept.weather_short === false && kept.indicators[1].value === 2 && kept.indicators[1].carried && kept.indicators[2].status === 'na', '유지된 값은 색에 포함');
    const cfgReal = C.readJson(CONFIG);
    for (const ind of cfgReal.indicators) {
      const keys = Object.keys(ind.now || {}).sort().join(',');
      assert(keys === (ind.bad === 'none' ? 'down,flat,up' : 'good,mid,warn'), `now 문구 누락: ${ind.id}`);
    }
  }
  const near = (a, b, e = 1e-9) => Math.abs(a - b) < e;
  const mk = (vals, stepDays = 1, start = '2020-01-01') => vals.map((v, i) => ({ day: addDays(start, i * stepDays), v }));
  const mkM = (vals, start = '2024-01') => vals.map((v, i) => (v == null ? null : { day: `${shiftMonth(start + '-01', i)}-01`, v })).filter(Boolean);
  assert(shiftMonth('2026-01-01', -1) === '2025-12' && shiftMonth('2026-10-01', -12) === '2025-10' && shiftMonth('2025-12-01', 1) === '2026-01', 'shiftMonth');
  // yoy: 같은 달끼리
  const y = transform(mkM([100, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 110]), 'yoy');
  assert(y.length === 1 && near(y[0].v, 10, 1e-6) && y[0].src.base[0] === '2024-01-01', 'yoy');
  // 빠진 달: 2024-10 이 없으면 2025-10 은 값을 만들지 않고, 2025-11 은 2024-11 과 짝을 맞춘다(행 개수로 세면 13개월 변화가 된다)
  const gapVals = Array.from({ length: 24 }, (_, i) => 100 + i); gapVals[9] = null;
  const yg = transform(mkM(gapVals), 'yoy');
  assert(!yg.some((r) => r.day === '2025-10-01'), 'yoy: 1년 전 달이 없으면 건너뜀');
  const nov = yg.find((r) => r.day === '2025-11-01');
  assert(nov && nov.src.base[0] === '2024-11-01' && near(nov.v, (122 / 110 - 1) * 100, 1e-9), 'yoy: 빠진 달 뒤에도 같은 달끼리');
  const dg = transform(mkM([5, 8, null, 6, 9]), 'diff');
  assert(dg.length === 2 && near(dg[0].v, 3) && near(dg[1].v, 3) && dg[1].day === '2024-05-01', 'diff: 전달이 없으면 건너뜀');
  assert(near(transform(mk([1, 2, 3, 4, 5], 7), 'ma4')[1].v, 3.5), 'ma4');
  const wk = mk([1, 2, 3, 4, 5, 6], 7); wk.splice(2, 1);
  assert(transform(wk, 'ma4').length === 0, 'ma4: 주가 빠지면 그 구간은 건너뜀');
  assert(near(transform(mk([2000000]), 'level', 0.000001)[0].v, 2), 'scale');
  const up = mk(Array.from({ length: 260 }, (_, i) => 100 + i), 1);
  assert(near(transform(up, 'dd252').pop().v, 0), 'dd252 고점이면 0');
  const drop = up.concat([{ day: addDays(up[up.length - 1].day, 1), v: 359 * 0.9 }]);
  const dd = transform(drop, 'dd252').pop();
  assert(near(dd.v, -10, 1e-6) && dd.src.high[1] === 359, 'dd252 -10%');
  assert(transform(up, 'vs200').pop().v > 0, 'vs200 오름세면 양수');
  // 최근 달이 계산에서 빠지면 skipped_latest 로 남는다
  const cpiLike = mkM(gapVals.concat([130, 131]).map((v, i) => (i === 9 ? null : v))); // 2024-10 없음, 마지막 달 = 2026-02
  const bi = buildIndicator({ transform: 'yoy' }, mkM(Array.from({ length: 22 }, (_, i) => (i === 9 ? null : 100 + i))), { warn_at_badness: 80, mid_at_badness: 50, window_years: 5 });
  assert(bi.asof === '2025-09-01' && bi.skipped_latest && bi.skipped_latest.day === '2025-10-01', '마지막 달의 1년 전이 없으면 직전 달 값을 쓰고 표시를 남김');
  void cpiLike;
  // 판정
  const sr = { warn_at_badness: 80, mid_at_badness: 50, window_years: 5 };
  assert(judge({ bad: 'high' }, 1, 90, sr).status === 'warn', '높을수록 나쁨: 상위 10% → 주의');
  assert(judge({ bad: 'low' }, 1, 90, sr).status === 'good', '낮을수록 나쁨: 상위 10% → 양호');
  assert(judge({ bad: 'low' }, 1, 40, sr).status === 'mid', '낮을수록 나쁨: 하위 40% → 보통');
  assert(judge({ bad: 'none' }, 1, 99, sr).status === 'info', '참고 지표는 색 없음');
  assert(judge({ bad: 'high', rule: { dir: 'high', mid: 0.3, warn: 0.5 } }, 0.5, 0, sr).status === 'warn', '삼의 법칙 0.50 → 주의');
  assert(judge({ bad: 'low', rule: { dir: 'low', mid: 0.5, warn: 0 } }, -0.01, 99, sr).status === 'warn', '금리차 역전 → 주의');
  assert(judge({ bad: 'low', rule: { dir: 'low', mid: 0.5, warn: 0 } }, 0, 99, sr).status === 'mid', '금리차 0 → 보통(역전 아님)');
  assert(judge({ bad: 'high' }, null, null, sr).status === 'na', '값 없음');
  // 백분위·시점값
  const s = mk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 30, '2024-01-01');
  assert(near(percentile(s, 10, s[9].day, 5).pct, 100), '최댓값 백분위 100');
  assert(valueAt(s, addDays(s[9].day, -91)) === 6, '91일 전 이전의 마지막 값');
  // 날씨
  assert(weather({ good: 20, mid: 3, warn: 0 }, false) === 'sunny', '맑음');
  assert(weather({ good: 5, mid: 5, warn: 0 }, false) === 'partly', '구름 조금');
  assert(weather({ good: 10, mid: 5, warn: 5 }, false) === 'cloudy', '흐림');
  assert(weather({ good: 2, mid: 2, warn: 6 }, false) === 'rain', '비');
  assert(weather({ good: 0, mid: 0, warn: 0 }, true) === 'none', '판정 지표 없음');
  assert(weather({ good: 3, mid: 0, warn: 1 }, true) === 'cloudy', '묶음: 주의 하나면 흐림');
  // 설정 점검: 묶음·필수 칸
  const cfg = C.readJson(CONFIG);
  const gids = new Set(cfg.groups.map((g) => g.id));
  const seen = new Set();
  for (const ind of cfg.indicators) {
    assert(gids.has(ind.group), `묶음 없음: ${ind.id}`);
    assert(!seen.has(ind.id), `중복 id: ${ind.id}`); seen.add(ind.id);
    assert(ind.fred && ind.label && ind.what && ind.read && ['high', 'low', 'none'].includes(ind.bad), `필수 칸 누락: ${ind.id}`);
    if (ind.rule) assert(['high', 'low'].includes(ind.rule.dir) && typeof ind.rule.mid === 'number' && typeof ind.rule.warn === 'number' && ind.rule.note, `rule 형식: ${ind.id}`);
  }
  // 수집 실패는 null 로 남는다(지어내지 않는다)
  const a = assemble(cfg, { DFF: { error: 'HTTP 500' } });
  const dff = a.indicators.find((x) => x.id === 'DFF');
  assert(dff.value === null && dff.status === 'na' && dff.error, '실패 지표는 null');
  console.log('build_board selftest OK');
}

if (require.main === module) {
  const a = process.argv.slice(2);
  if (a[0] === '--selftest') selftest();
  else if (a[0] === '--demo') demo(path.resolve(a[1] || '/tmp/board_demo.json'));
  else main().catch((e) => { console.error(e); process.exit(1); });
}
module.exports = { transform, judge, weather, percentile, valueAt, parseFredCsv };
