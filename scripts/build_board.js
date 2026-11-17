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

// --- 변환 --------------------------------------------------------------------
// rows: [{day, v}] 오름차순. 반환도 같은 모양.
function transform(rows, kind, scale = 1) {
  const s = rows.map((r) => ({ day: r.day, v: r.v * scale }));
  if (kind === 'level') return s;
  if (kind === 'yoy') { // 월간 자료: 12행 전 대비 %
    const out = [];
    for (let i = 12; i < s.length; i++) if (s[i - 12].v !== 0) out.push({ day: s[i].day, v: (s[i].v / s[i - 12].v - 1) * 100 });
    return out;
  }
  if (kind === 'diff') return s.slice(1).map((r, i) => ({ day: r.day, v: r.v - s[i].v }));
  if (kind === 'ma4') {
    const out = [];
    for (let i = 3; i < s.length; i++) out.push({ day: s[i].day, v: (s[i].v + s[i - 1].v + s[i - 2].v + s[i - 3].v) / 4 });
    return out;
  }
  if (kind === 'dd252' || kind === 'vs200') {
    const n = kind === 'dd252' ? 252 : 200;
    const out = [];
    for (let i = n - 1; i < s.length; i++) {
      const win = s.slice(i - n + 1, i + 1).map((r) => r.v);
      const ref = kind === 'dd252' ? Math.max(...win) : win.reduce((a, b) => a + b, 0) / n;
      out.push({ day: s[i].day, v: (s[i].v / ref - 1) * 100 });
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
    if (counts.warn * 2 >= n) return 'rain';
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
  return {
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
    const base = { id: ind.id, group: ind.group, label: ind.label, unit: ind.unit, decimals: ind.decimals, signed: !!ind.signed, bad: ind.bad, freq: ind.freq, source: `FRED:${ind.fred}`, what: ind.what, read: ind.read, rule_note: ind.rule ? ind.rule.note : null, rule_line: ind.rule ? ind.rule.warn : null, window_note: ind.window_note || null };
    if (!r || r.error) return { ...base, value: null, status: 'na', error: (r && r.error) || '수집 안 됨' };
    return { ...base, ...r };
  });
  const tally = (list) => list.reduce((a, x) => { if (a[x.status] != null) a[x.status]++; return a; }, { good: 0, mid: 0, warn: 0, info: 0, na: 0 });
  const groups = cfg.groups.map((g) => {
    const counts = tally(indicators.filter((x) => x.group === g.id));
    return { ...g, counts, weather: weather(counts, true) };
  });
  const counts = tally(indicators);
  const days = indicators.map((x) => x.asof).filter(Boolean).sort();
  return {
    schema: 1,
    generated_at: new Date().toISOString(), generated_kst: C.kstTime(),
    latest_data_day: days.length ? days[days.length - 1] : null,
    status_rule: sr, counts, weather: weather(counts, false),
    groups, indicators, ...extra,
  };
}

// --- 실행 --------------------------------------------------------------------
async function main() {
  const cfg = C.readJson(CONFIG);
  if (!cfg) throw new Error('config/board.json 을 읽지 못함');
  const start = addDays(C.kstDate(), -Math.round(365.25 * 8)); // 5년 위치 + 전년비 + 200일 평균 여유
  const cache = {};
  const results = {};
  for (const ind of cfg.indicators) {
    try {
      if (!cache[ind.fred]) cache[ind.fred] = await fredRows(ind.fred, start);
      results[ind.id] = buildIndicator(ind, cache[ind.fred], cfg.status_rule);
      console.log(`ok   ${ind.id.padEnd(14)} ${results[ind.id].asof} ${results[ind.id].value} (${results[ind.id].status})`);
    } catch (e) {
      results[ind.id] = { error: String(e.message || e) };
      console.log(`FAIL ${ind.id.padEnd(14)} ${results[ind.id].error}`);
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
      const n = Math.floor((365.25 * 8) / stepDays);
      const trendy = ['CPIAUCNS', 'PCEPILFE', 'PAYEMS', 'RSAFS', 'M2SL', 'SP500'].includes(ind.fred);
      let v = base[ind.fred] * (trendy ? 0.75 : 1);
      const rows = [];
      for (let i = n; i >= 0; i--) {
        const vol = Math.abs(base[ind.fred]) * (trendy ? 0.004 : 0.02) + 0.01;
        v += (rnd() - 0.5) * vol * (stepDays === 1 ? 0.6 : 1.4) + (trendy ? base[ind.fred] * 0.25 / n : (base[ind.fred] - v) * 0.02);
        const day = addDays(today, -i * stepDays);
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
  const near = (a, b, e = 1e-9) => Math.abs(a - b) < e;
  const mk = (vals, stepDays = 30, start = '2020-01-01') => vals.map((v, i) => ({ day: addDays(start, i * stepDays), v }));
  // yoy: 13번째 값이 첫 값의 1.1배 → 10%
  const y = transform(mk([100, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 110]), 'yoy');
  assert(y.length === 1 && near(y[0].v, 10, 1e-6), 'yoy');
  assert(near(transform(mk([5, 8, 6]), 'diff')[1].v, -2), 'diff');
  assert(near(transform(mk([1, 2, 3, 4, 5]), 'ma4')[1].v, 3.5), 'ma4');
  assert(near(transform(mk([2000000]), 'level', 0.000001)[0].v, 2), 'scale');
  const up = mk(Array.from({ length: 260 }, (_, i) => 100 + i), 1);
  assert(near(transform(up, 'dd252').pop().v, 0), 'dd252 고점이면 0');
  const drop = up.concat([{ day: addDays(up[up.length - 1].day, 1), v: 359 * 0.9 }]);
  assert(near(transform(drop, 'dd252').pop().v, -10, 1e-6), 'dd252 -10%');
  assert(transform(up, 'vs200').pop().v > 0, 'vs200 오름세면 양수');
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
