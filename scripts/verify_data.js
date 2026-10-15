#!/usr/bin/env node
'use strict';
// DoD-1 자동 검증. 사이트·리포트에 쓰이는 모든 수치를 코드로 대조한다 (LLM 미사용).
//   node scripts/verify_data.js [YYYY-MM-DD | 0_data.json 경로] [--offline]
// 검증 묶음: ① 시세(범위·기준일·산술·교차) ② 캘린더 ③ 티커.  하나라도 실패하면 exit 1.
//   --offline: 라이브 재조회(교차 검증)를 건너뛴다 (단위 테스트용).

const fs = require('fs');
const path = require('path');
const C = require('../lib/common');
const F = require('../fetch_market_data');
const M = require('../lib/macro');
const { extractTickers } = require('./tickers_lib');

const args = process.argv.slice(2);
const offline = args.includes('--offline');
const target = args.find((a) => !a.startsWith('--'));

const results = [];
const check = (group, name, ok, detail = '') => results.push({ group, name, ok: !!ok, detail });

function loadMarket() {
  let file = target;
  if (!file) {
    // 기본값: 0_data.json 이 있는 가장 최근 날짜 폴더
    const dirs = fs.readdirSync(path.join(C.ROOT, 'logs')).filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d)).sort().reverse();
    file = dirs.find((x) => fs.existsSync(path.join(C.ROOT, 'logs', x, '0_data.json')));
    if (!file) throw new Error('0_data.json 이 있는 날짜 폴더가 없음');
  }
  if (/^\d{4}-\d{2}-\d{2}$/.test(file)) file = path.join(C.ROOT, 'logs', file, '0_data.json');
  return { file, data: JSON.parse(fs.readFileSync(file, 'utf8')) };
}

const RANGE = { '^VIX': [5, 100], '^VIX9D': [5, 100], '^VIX3M': [5, 100], '^VVIX': [20, 250], '^SKEW': [100, 250] };
function rangeFor(sym, it) {
  if (RANGE[sym]) return RANGE[sym];
  if (it.kind === 'yield') return [0, 15];
  if (it.kind === 'spread') return [0, 30];
  return [0, Infinity];
}

const near = (a, b, tol) => a != null && b != null && Math.abs(a - b) <= tol;

function verifyMarket(data) {
  const now = new Date(data.generated_at);
  const expected = C.expectedTradingDay(now);
  const today = C.etDay(now.getTime() / 1000);
  const prevExpected = C.prevTradingDay(expected);
  const G = '시세';

  for (const [sym, it] of Object.entries(data.items)) {
    check(G, `${sym} 수집`, !it.error && typeof it.close === 'number', it.error || '');
    if (it.error) continue;
    const [lo, hi] = rangeFor(sym, it);
    check(G, `${sym} 범위`, it.close > lo && it.close < hi && it.close > 0, `close=${it.close} 허용 ${lo}~${hi}`);
    // 등락률 ±25% 초과는 실패. 금리·스프레드는 %가 아니라 bp(%p) 변화로 따로 본다.
    if (it.kind !== 'yield' && it.kind !== 'spread') check(G, `${sym} |1D|≤25%`, Math.abs(it.chg_1d) <= 25, `chg_1d=${it.chg_1d}`);
    else check(G, `${sym} |1D|≤100bp`, Math.abs(it.d_1d) <= 1, `d_1d=${it.d_1d}`);

    // 기준일 (주말·휴장은 config/nyse_holidays.json 허용 목록으로 expectedTradingDay 가 처리한다)
    let okAsof, why;
    if (it.policy === 'session') { okAsof = it.asof_day === expected; why = `기대 ${expected}`; }
    else if (it.policy === 'continuous') { okAsof = it.asof_day >= expected && it.asof_day <= today; why = `기대 ${expected}~${today}`; }
    else { okAsof = [expected, prevExpected].includes(it.asof_day); why = `기대 ${expected} 또는 FRED 1영업일 지연 ${prevExpected}`; }
    check(G, `${sym} 기준일`, okAsof, `asof_day=${it.asof_day} (${why})`);

    // 산술: 원시 종가에서 다시 계산
    const raw = data.raw?.[sym];
    if (!raw) { check(G, `${sym} 원시값 존재`, false, 'raw 없음'); continue; }
    const b = raw.bars; const n = b.length;
    const pc = (base) => ((it.close - base) / base) * 100;
    check(G, `${sym} 종가=원시 마지막`, near(b[n - 1].close, it.close, 1e-4 + Math.abs(it.close) * 1e-6), `${b[n - 1].close} vs ${it.close}`);
    check(G, `${sym} 직전종가`, near(b[n - 2].close, it.prev, 1e-4 + Math.abs(it.prev) * 1e-6), `${b[n - 2].close} vs ${it.prev}`);
    const arith = [['chg_1d', b[n - 2]], ['chg_5d', b[n - 6]], ['chg_1m', b[n - 22]], ['chg_ytd', raw.ytd_base]];
    for (const [k, base] of arith) {
      check(G, `${sym} ${k} 재계산`, base && near(pc(base.close), it[k], 2e-3), `재계산 ${base ? pc(base.close).toFixed(4) : 'N/A'} vs ${it[k]}`);
    }
    check(G, `${sym} 스파크라인 20개`, it.spark_20d?.length === 20 && near(it.spark_20d[19], it.close, 1e-3 + Math.abs(it.close) * 1e-6), `len=${it.spark_20d?.length}`);
  }

  // 10Y-2Y 산술
  const sp = data.derived?.spread_10y_2y;
  check(G, '10Y-2Y 존재', !!sp);
  if (sp) {
    const last = sp.raw[sp.raw.length - 1];
    check(G, '10Y-2Y = DGS10−DGS2 (같은 날짜)', near(last.dgs10 - last.dgs2, sp.close, 1.5e-4), `${last.dgs10}-${last.dgs2} vs ${sp.close}`);
    check(G, '10Y-2Y 날짜 일치', last.day === sp.asof_day);
    const pv = sp.raw[sp.raw.length - 2];
    check(G, '10Y-2Y 직전값', near(pv.dgs10 - pv.dgs2, sp.prev, 1.5e-4), `${pv.dgs10 - pv.dgs2} vs ${sp.prev}`);
  }

  // 섹터 상대강도 산술: vs_spy_1m = ETF 1M − SPY 1M
  const spy = data.items.SPY;
  for (const [sym, it] of Object.entries(data.items)) {
    if (it.group !== 'sector' || it.error || !spy || spy.error) continue;
    check(G, `${sym} vs_spy_1m`, near(it.chg_1m - spy.chg_1m, it.vs_spy_1m, 2e-3), `${(it.chg_1m - spy.chg_1m).toFixed(4)} vs ${it.vs_spy_1m}`);
  }

  // 금리 교차: Yahoo ^TNX vs FRED DGS10 — FRED 마지막 날짜와 같은 날의 Yahoo 종가끼리 5bp 이내
  const fr = data.items['FRED:DGS10'];
  const yb = data.raw?.['^TNX']?.bars.find((x) => x.day === fr?.asof_day);
  check(G, '10Y 교차: Yahoo ^TNX vs FRED DGS10 (≤5bp)', yb && near(yb.close, fr.close, 0.05), yb ? `${yb.day}: ${yb.close} vs ${fr.close}` : `Yahoo에 ${fr?.asof_day} 봉 없음`);
}

// 같은 값을 다른 경로(range=1mo)로 다시 받아 완료된 봉이 일치하는지 본다.
async function verifyCross(data) {
  const G = '교차(range 1mo)';
  const syms = Object.entries(data.items).filter(([s, it]) => !it.error && !s.startsWith('FRED:')).map(([s]) => s);
  const jobs = syms.map((sym) => async () => {
    try {
      const re = await F.yahooBars(sym, '1mo');
      const reMap = new Map(re.bars.slice(0, -1).map((b) => [b.day, b.close]));
      const stored = data.raw[sym].bars.slice(0, -1).filter((b) => reMap.has(b.day));
      const bad = stored.filter((b) => !near(reMap.get(b.day), b.close, Math.abs(b.close) * 5e-4 + 1e-4));
      check(G, `${sym} 완료 봉 ${stored.length}개 일치`, stored.length >= 5 && bad.length === 0,
        bad.length ? `불일치 ${bad.slice(0, 2).map((b) => `${b.day}: ${b.close} vs ${reMap.get(b.day)}`).join('; ')}` : `겹침 ${stored.length}개`);
    } catch (e) {
      check(G, `${sym} 재조회`, false, e.message);
    }
  });
  for (let i = 0; i < jobs.length; i += 4) await Promise.all(jobs.slice(i, i + 4).map((j) => j()));
}

// --- 캘린더·티커 -------------------------------------------------------------
function verifyCalendar(asOfDay) {
  const G = '캘린더';
  const p = process.env.CAL_PATH || path.join(C.ROOT, 'docs', 'data', 'calendar.json');
  if (!fs.existsSync(p)) { check(G, 'calendar.json 존재', false, '없음'); return null; }
  const cal = JSON.parse(fs.readFileSync(p, 'utf8'));
  const events = cal.events || [];
  const ids = new Set();
  let dup = 0;
  for (const e of events) { if (ids.has(e.id)) dup++; ids.add(e.id); }
  check(G, 'id 중복 없음', dup === 0, `${dup}건 중복`);
  const lo = C.addDays(asOfDay, -2), hi = C.addDays(asOfDay, 14);
  const shown = events.filter((e) => e.date_et >= lo && e.date_et <= hi);
  const stale = events.filter((e) => e.date_et > hi);
  check(G, `원장 날짜가 D+14(${hi}) 이내`, stale.length === 0, stale.slice(0, 3).map((e) => e.id).join(', '));
  check(G, `표시 대상(${lo}~${hi}) 1건 이상`, shown.length > 0, '표시할 일정 없음');
  // ── 원장 전체(표시 창 밖 포함)를 같은 규칙으로 검사한다. 이 검사가 사고(2026-10-14 CPI)를 잡았어야 했다. ──
  const macros = events.filter((e) => e.type === 'macro');
  const numeric = macros.filter((e) => e.prior != null || e.consensus != null || e.actual != null);
  const noBasis = numeric.filter((e) => !e.metric || !e.measure || !e.unit);
  check(G, '숫자가 있는 지표 행은 metric·measure·unit 보유', noBasis.length === 0, noBasis.slice(0, 4).map((e) => e.id).join(', '));
  const dupKey = new Map();
  for (const e of macros.filter((x) => x.metric && x.measure)) { const k = `${e.date_et}|${e.metric}|${e.measure}`; dupKey.set(k, (dupKey.get(k) || 0) + 1); }
  check(G, '원장 키(발표일·metric·measure) 중복 없음', [...dupKey.values()].every((n) => n === 1), [...dupKey].filter(([, n]) => n > 1).map(([k]) => k).slice(0, 3).join(', '));
  const mixed = macros.filter((e) => e.mixed && (e.prior != null || e.consensus != null || e.actual != null));
  check(G, '헤드라인·근원 혼합 행에 숫자 없음', mixed.length === 0, mixed.map((e) => e.id).join(', '));
  const notNum = numeric.filter((e) => ['prior', 'consensus', 'actual', 'surprise'].some((f) => e[f] != null && typeof e[f] !== 'number'));
  check(G, '지표 값이 숫자 타입(문자열 "+0.6%" 금지)', notNum.length === 0, notNum.slice(0, 4).map((e) => e.id).join(', '));
  const badSrc = macros.filter((e) => e.consensus != null && M.classifySource(e.consensus_source) !== 'allowed');
  check(G, '예상값(consensus)은 시장 컨센서스 출처만 (nowcast·예측시장 금지)', badSrc.length === 0, badSrc.slice(0, 4).map((e) => `${e.id}[${e.consensus_source}]`).join(', '));
  const hand = macros.filter((e) => e.actual != null && M.ruleFor(e.metric, e.measure)?.fred && !/^FRED /.test(e.actual_source || ''));
  check(G, 'FRED 지원 지표의 발표값은 코드 수집(actual_source=FRED)', hand.length === 0, hand.slice(0, 4).map((e) => e.id).join(', '));
  const sBad = macros.filter((e) => typeof e.actual === 'number' && typeof e.consensus === 'number' && !near(e.surprise, +(e.actual - e.consensus).toFixed(3), 1e-6));
  check(G, '서프라이즈 = 발표값−예상값 (숫자 타입 기준)', sBad.length === 0, sBad.slice(0, 3).map((e) => e.id).join(', '));
  const eBad = events.filter((e) => typeof e.actual_eps === 'number' && typeof e.cons_eps === 'number' && !near(e.surprise_eps, +(e.actual_eps - e.cons_eps).toFixed(4), 1e-4));
  check(G, 'EPS 서프라이즈 = 실제−예상', eBad.length === 0, eBad.slice(0, 3).map((e) => e.id).join(', '));
  // 그럴듯함: 규칙을 어긴 행은 반드시 hold 가 찍혀 있어야 한다(= 사이트·리포트에 숫자로 안 나간다). hold 는 실패가 아니라 안전장치.
  const unstamped = events.filter((e) => M.checkEvent(e) && !e.hold);
  check(G, '그럴듯함 검사 실패 행은 모두 hold 처리됨', unstamped.length === 0, unstamped.slice(0, 4).map((e) => `${e.id}: ${M.checkEvent(e)}`).join(' | '));
  const held = events.filter((e) => e.hold);
  check(G, `보류(검증 대기) ${held.length}건`, true, held.map((e) => `${e.id}: ${e.hold}`).join(' | ') || '없음');
  const unverifiedBasis = events.filter((e) => e.type === 'earnings' && e.verified && (!e.src_url || !e.eps_basis || e.actual_rev == null));
  check(G, '검증 표시된 실적 행은 출처 URL·EPS 기준·실제 매출 보유', unverifiedBasis.length === 0, unverifiedBasis.slice(0, 4).map((e) => e.id).join(', '));
  // 사고 당일 CPI 는 4줄이어야 한다 (발표일에 CPI 행이 하나라도 있으면 헤드라인/근원 × MoM/YoY)
  const cpiDays = [...new Set(macros.filter((e) => ['CPI', 'CORECPI'].includes(e.metric)).map((e) => e.date_et))];
  const short = cpiDays.filter((d) => ['CPI', 'CORECPI'].flatMap((m) => ['mom', 'yoy'].map((x) => `${d}-${m}-${x}`)).some((id) => !ids.has(id)));
  check(G, 'CPI 발표일마다 헤드라인·근원 × MoM·YoY 4줄', short.length === 0, short.join(', '));
  const noSrc = [];
  for (const e of shown) {
    for (const f of ['consensus', 'prior', 'cons_eps', 'cons_rev', 'prior_eps', 'prior_rev']) {
      if (e[f] != null && !e.source && !e.consensus_source && !e.prior_source) noSrc.push(`${e.id}.${f}`);
    }
  }
  check(G, '값이 있는 consensus·prior 는 출처 보유', noSrc.length === 0, noSrc.slice(0, 5).join(', '));
  const badFmt = events.filter((e) => !/^\d{4}-\d{2}-\d{2}$/.test(e.date_et) || !['macro', 'fed', 'earnings', 'corporate'].includes(e.type));
  check(G, '날짜·type 형식', badFmt.length === 0, badFmt.slice(0, 3).map((e) => e.id).join(', '));
  return { events, shown };
}

// FRED 를 다시 받아 원장의 발표값·직전값이 코드 계산과 같은지 대조한다(수작업·LLM 값 혼입 탐지).
async function verifyMacroLive(events) {
  const G = '캘린더(FRED 재계산)';
  const rows = events.filter((e) => e.type === 'macro' && e.actual != null && e.metric && e.measure && M.ruleFor(e.metric, e.measure)?.fred);
  for (const e of rows) {
    try {
      const v = await M.fredValue(e.metric, e.measure, e.period, e.date_et);
      check(G, `${e.id} 발표값=FRED 재계산`, v && v.actual === e.actual, `원장 ${e.actual} vs FRED ${v?.actual}`);
      check(G, `${e.id} 직전값=FRED 재계산`, v && (e.prior == null || v.prior === e.prior), `원장 ${e.prior} vs FRED ${v?.prior}`);
    } catch (err) { check(G, `${e.id} FRED 조회`, false, err.message); }
  }
}

async function verifyTickers(events) {
  const G = '티커';
  const tp = path.join(C.ROOT, 'docs', 'data', 'tickers.json');
  if (!fs.existsSync(tp)) return check(G, 'tickers.json 존재', false);
  const tickers = JSON.parse(fs.readFileSync(tp, 'utf8'));
  const missing = [...new Set(events.filter((e) => e.ticker).map((e) => e.ticker))].filter((t) => !tickers[t]);
  check(G, '캘린더의 모든 티커가 tickers.json 에 있음', missing.length === 0, missing.slice(0, 10).join(', '));
  const reps = fs.readdirSync(path.join(C.ROOT, 'logs')).filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d)).sort().slice(-3);
  const rmiss = new Set();
  for (const d of reps) {
    const p = path.join(C.ROOT, 'logs', d, '3_report.md');
    if (fs.existsSync(p)) for (const t of extractTickers(fs.readFileSync(p, 'utf8'))) if (!tickers[t]) rmiss.add(t);
  }
  check(G, '최근 리포트 3건의 티커가 tickers.json 에 있음', rmiss.size === 0, [...rmiss].slice(0, 10).join(', '));
  // 캘린더 신규 티커의 실재 확인: Finnhub profile2 (키가 있을 때만 — 로컬엔 키가 없으니 건너뜀을 명시)
  const key = process.env.FINNHUB_API_KEY;
  const fresh = [...new Set(events.filter((e) => e.ticker).map((e) => e.ticker))].filter((t) => !tickers[t]?.verified).slice(0, 40);
  if (!key) { check(G, 'Finnhub profile2 실재 확인', true, `건너뜀: FINNHUB_API_KEY 없음 (대상 ${fresh.length}개, Actions에서 수행)`); return; }
  const bad = [];
  for (const t of fresh) {
    try { const j = await C.getJson(`https://finnhub.io/api/v1/stock/profile2?symbol=${t}&token=${key}`, 15000); if (!j.ticker) bad.push(t); } catch { bad.push(`${t}(오류)`); }
  }
  check(G, 'Finnhub profile2 실재 확인', bad.length === 0, bad.join(', '));
}

async function main() {
  const { file, data } = loadMarket();
  console.log(`검증 대상: ${path.relative(C.ROOT, file)} (생성 ${data.generated_at}, 미국 기준일 ${data.us_date})`);
  verifyMarket(data);
  if (!offline) await verifyCross(data);
  const cal = verifyCalendar(C.expectedTradingDay(new Date(data.generated_at)));
  if (cal && !offline) await verifyMacroLive(cal.events);
  if (cal) await verifyTickers(cal.events);

  for (const g of [...new Set(results.map((r) => r.group))]) {
    const rs = results.filter((r) => r.group === g);
    const bad = rs.filter((r) => !r.ok);
    console.log(`\n[${g}] ${rs.length - bad.length}/${rs.length} 통과`);
    for (const r of bad) console.log(`  FAIL ${r.name} — ${r.detail}`);
  }
  const failed = results.filter((r) => !r.ok).length;
  console.log(`\n총 ${results.length}건 중 통과 ${results.length - failed}, 실패 ${failed}`);
  process.exit(failed ? 1 : 0);
}

// --selftest: 사고 당시 원장(fixtures)을 먹여 검증기가 반드시 실패시키는지 본다 (회귀 방지).
function selftest() {
  const assert = require('assert');
  process.env.CAL_PATH = path.join(__dirname, 'fixtures', 'incident_2026-10-15_calendar.json');
  results.length = 0;
  verifyCalendar('2026-10-14');
  const failed = (name) => results.some((r) => !r.ok && r.name.includes(name));
  assert(failed('metric·measure·unit'), 'MoM/YoY 측정 기준 없는 CPI 행을 못 잡음');
  assert(failed('숫자 타입'), '문자열 값("+0.6%")을 못 잡음');
  assert(failed('시장 컨센서스 출처'), 'Scotiabank/Kiplinger 출처 혼용을 못 잡음');
  assert(failed('hold 처리'), '그럴듯함 검사(APLD -145% 포함) 실패 행의 hold 누락을 못 잡음');
  console.log('selftest 통과: 사고 원장(2026-10-14 CPI 2줄 · 문자열 값 · 혼용 출처)을 검증기가 모두 실패시킨다');
}

if (process.argv.includes('--selftest')) selftest();
else if (require.main === module) main().catch((e) => { console.error(e); process.exit(1); });
module.exports = { verifyMarket, results };
