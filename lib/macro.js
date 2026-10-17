'use strict';
// 경제지표 원장의 단일 규칙 모듈. update_calendar(적재) · inject_dashboard(표) · verify_data(검증)가 같은 함수를 쓴다.
//   parseTitle  : 이벤트 제목 → { metric, measure, mixed }   (측정 기준을 제목에서 결정론적으로 읽는다)
//   checkMacro  : 지표 행의 그럴듯함 검사 → 사유 문자열(보류) | null(통과)
//   checkEarnings: 실적 행 검사 (서프라이즈 ±50% 초과 · EPS 기준 불일치)
//   fredValue   : FRED 시리즈에서 발표값·직전값을 코드로 계산
// 보류(hold)된 행은 사이트·리포트·메일에서 숫자 대신 "검증 대기"로 표시한다.
const path = require('path');
const C = require('./common');

const RULES = C.readJson(path.join(C.ROOT, 'config', 'macro_rules.json'), { metrics: {}, consensus_sources_allowed: [], consensus_sources_reference_only: [], earnings: {} });

// 제목 → 지표 키. 근원(Core)을 먼저 본다.
const METRIC_RES = [
  ['COREPCE', /core\s*pce|근원\s*pce/i], ['PCE', /\bpce\b/i],
  ['CORECPI', /core\s*cpi|근원\s*(cpi|소비자)/i], ['CPI', /\bcpi\b|소비자물가/i],
  ['PPI', /\bppi\b|생산자물가/i], ['NFP', /nfp|payroll|비농업/i], ['GDP', /\bgdp\b/i], ['ISM', /\bism\b/i],
  ['RETAIL', /retail|소매판매/i], ['JOLTS', /jolts/i], ['CLAIMS', /jobless|claims|실업수당/i], ['UNEMP', /실업률|unemployment rate/i],
];
const MEASURE_RES = [['mom', /mom|전월\s*(대비|비)/i], ['yoy', /yoy|전년\s*(동월|동기)?\s*(대비|비)/i], ['qoq', /qoq|전기\s*대비|연율/i]];

function parseTitle(title) {
  const t = String(title || '');
  if (/fomc/i.test(t)) return { metric: 'FOMC', measure: null, mixed: false };
  let metric = null;
  for (const [k, re] of METRIC_RES) if (re.test(t)) { metric = k; break; }
  // 헤드라인과 근원이 한 제목에 섞인 경우 ("CPI/Core CPI") — 하나로 정할 수 없다
  const mixed = /core\s*cpi|근원/i.test(t) && /\bcpi\b/i.test(t.replace(/core\s*cpi/gi, '')) || /core\s*pce/i.test(t) && /\bpce\b/i.test(t.replace(/core\s*pce/gi, ''));
  const found = MEASURE_RES.filter(([, re]) => re.test(t)).map(([m]) => m);
  let measure = found.length === 1 ? found[0] : null; // 둘 이상이거나 없으면 모호 → null
  const def = metric && RULES.metrics[metric];
  if (!measure && def) { const ms = Object.keys(def.measures); if (ms.length === 1 && ['level', 'index'].includes(ms[0])) measure = ms[0]; } // NFP·실업률·청구 등은 단일 기준
  return { metric, measure, mixed };
}

const ruleFor = (metric, measure) => RULES.metrics[metric]?.measures?.[measure] || null;

// 예상값 출처 분류: 'allowed'(시장 컨센서스 서베이) | 'reference'(nowcast·예측시장·기타) | 'none'
function classifySource(src) {
  const s = String(src || '');
  if (!s.trim()) return 'none';
  const hit = (arr) => arr.some((k) => s.toLowerCase().includes(k.toLowerCase()));
  if (hit(RULES.consensus_sources_reference_only)) return 'reference';
  return hit(RULES.consensus_sources_allowed) ? 'allowed' : 'reference';
}

// "+3.6%", "197,000", "84K", "-0.2%p" → 숫자. 단위가 K 인데 값이 "197,000" 형태면 /1000.
function parseValue(v, unit) {
  if (v == null) return null;
  if (typeof v === 'number') return Number.isFinite(v) ? v : null;
  const s = String(v).replace(/,/g, '');
  const m = s.match(/[-+]?\d+(\.\d+)?/);
  if (!m) return null;
  let n = Number(m[0]);
  if (unit === 'K' && !/k/i.test(s) && Math.abs(n) >= 5000) n /= 1000;
  return n;
}

const round = (n, d) => (n == null ? null : +n.toFixed(d));
const decimals = (unit) => (unit === 'K' ? 0 : 1);
// 표시: 숫자 + 단위. % 는 부호 포함, 서프라이즈는 %p.
function fmtVal(v, unit) {
  if (typeof v !== 'number') return v == null || v === '' ? '—' : String(v);
  if (unit === '%') return `${v > 0 ? '+' : ''}${v.toFixed(1)}%`;
  if (unit === 'K') return `${v > 0 ? '+' : ''}${Math.round(v).toLocaleString('en-US')}K`;
  return String(v);
}
function fmtSurprise(v, unit) {
  if (typeof v !== 'number') return '—';
  const sg = v > 0 ? '+' : '';
  if (unit === '%') return `${sg}${v.toFixed(1)}%p`;
  if (unit === 'K') return `${sg}${Math.round(v).toLocaleString('en-US')}K`;
  return `${sg}${v}`;
}

// --- 그럴듯함 검사 (지표) -----------------------------------------------------
function checkMacro(ev) {
  if (ev.type !== 'macro') return null;
  const hasNums = ev.prior != null || ev.consensus != null || ev.actual != null;
  if (!hasNums) return null; // 숫자가 없으면 보류할 것도 없다
  if (!ev.metric || !ev.measure || !ev.unit) return '측정 기준(metric/measure/unit) 미확인';
  const rule = ruleFor(ev.metric, ev.measure);
  if (!rule) return `정의되지 않은 측정 기준(${ev.metric}/${ev.measure})`;
  if (ev.mixed) return '헤드라인·근원 혼합 행';
  if (ev.unit !== rule.unit) return `단위 불일치(${ev.unit} ≠ ${rule.unit})`;
  const nums = { prior: ev.prior, consensus: ev.consensus, actual: ev.actual };
  for (const [k, v] of Object.entries(nums)) {
    if (v == null) continue;
    if (typeof v !== 'number') return `${k} 가 숫자가 아님`;
    if (v < rule.range[0] || v > rule.range[1]) return `${k}=${v} 가 ${ev.metric}/${ev.measure} 허용 범위 ${rule.range.join('~')} 밖(다른 측정 기준 의심)`;
  }
  if (ev.consensus != null && classifySource(ev.consensus_source) !== 'allowed') return '예상값 출처가 시장 컨센서스(Reuters/Bloomberg/WSJ 등)가 아님';
  if (ev.consensus != null && ev.prior != null && Math.abs(ev.consensus - ev.prior) > rule.gap_max) return `예상값(${ev.consensus})이 직전값(${ev.prior})에서 ${rule.gap_max} 초과 이탈 — 측정 기준 불일치 의심`;
  if (ev.actual != null && ev.prior != null && !ev.surprise_ok && Math.abs(ev.actual - ev.prior) > rule.gap_max) return `발표값(${ev.actual})이 직전값(${ev.prior})에서 ${rule.gap_max} 초과 이탈 — MoM/YoY 혼동 의심`;
  if (ev.actual != null && ev.consensus != null) {
    const s = ev.actual - ev.consensus;
    if (Math.abs(s) > rule.surprise_max && !ev.surprise_ok) return `서프라이즈 ${round(s, 3)} 가 허용 ±${rule.surprise_max} 초과`;
    if (ev.surprise != null && Math.abs(ev.surprise - s) > 1e-6) return '서프라이즈 ≠ 발표값−예상값';
  }
  if (ev.actual != null && ev.actual_source && /llm|collect/i.test(ev.actual_source)) return '발표값이 코드 수집(FRED/BLS/BEA)이 아님';
  return null;
}

// --- 실적 ---------------------------------------------------------------------
function checkEarnings(ev) {
  if (ev.type !== 'earnings') return null;
  const lim = RULES.earnings || {};
  if (ev.actual_eps != null && ev.cons_eps != null) {
    const bases = [ev.eps_basis, ev.cons_basis].filter(Boolean);
    if (bases.length === 2 && bases[0] !== bases[1]) return `EPS 기준 불일치(실제 ${ev.eps_basis} ↔ 예상 ${ev.cons_basis})`;
    const pct = Math.abs(ev.actual_eps - ev.cons_eps) / Math.max(Math.abs(ev.cons_eps), 0.01) * 100;
    if (pct > (lim.surprise_pct_max ?? 50)) return `EPS 서프라이즈 ${pct.toFixed(0)}% 가 허용 ±${lim.surprise_pct_max ?? 50}% 초과`;
  }
  // 전년 EPS 부호가 SEC 분기 이력(GAAP)과 반대이고 크기가 비슷하면 부호 오류
  if (ev.prior_eps != null && ev.prior_gaap_sec != null && ev.prior_gaap_sec !== 0 && Math.sign(ev.prior_eps) !== Math.sign(ev.prior_gaap_sec)
    && Math.abs(Math.abs(ev.prior_eps) - Math.abs(ev.prior_gaap_sec)) / Math.abs(ev.prior_gaap_sec) <= 0.25) return `전년 EPS 부호 오류 의심(공급자 ${ev.prior_eps} ↔ SEC GAAP ${ev.prior_gaap_sec})`;
  // 발표 전 행: 예상 EPS 가 전년 동기의 3배 초과 / 1/3 미만이면 공급자 값 오류(분기·통화·단위 혼동) 의심
  if (!ev.verified && ev.actual_eps == null && ev.cons_eps > 0 && ev.prior_eps > 0) {
    const r = ev.cons_eps / ev.prior_eps, m = lim.cons_prior_ratio_max ?? 3;
    if (r > m || r < 1 / m) return `예상 EPS(${ev.cons_eps})가 전년 동기(${ev.prior_eps})의 ${r.toFixed(1)}배 — 허용 1/${m}~${m}배 밖`;
  }
  // 같은 종목의 예상 EPS 가 출처마다 크게 다르면 어느 쪽도 믿지 않는다
  if (ev.cons_eps != null && ev.cons_eps_alt != null && Math.abs(ev.cons_eps - ev.cons_eps_alt) / Math.max(Math.abs(ev.cons_eps), Math.abs(ev.cons_eps_alt), 0.01) * 100 > (lim.cons_alt_pct_max ?? 20)) return `예상 EPS 출처 간 불일치(${ev.cons_eps} ↔ ${ev.cons_eps_alt})`;
  if (ev.actual_eps != null && ev.prior_eps != null && ev.prior_basis && ev.eps_basis && ev.prior_basis !== ev.eps_basis) return `전년 EPS 기준 불일치(전년 ${ev.prior_basis} ↔ 실제 ${ev.eps_basis})`;
  if (ev.actual_rev != null && ev.cons_rev != null) {
    const pct = Math.abs(ev.actual_rev - ev.cons_rev) / ev.cons_rev * 100;
    if (pct > (lim.rev_surprise_pct_max ?? 25)) return `매출 서프라이즈 ${pct.toFixed(0)}% 가 허용 ±${lim.rev_surprise_pct_max ?? 25}% 초과`;
  }
  return null;
}
const checkEvent = (ev) => checkMacro(ev) || checkEarnings(ev);

// --- FRED 로 발표값·직전값 계산 -------------------------------------------------
const cache = new Map();
async function fredSeries(id) {
  if (!cache.has(id)) {
    const rows = (await C.getText(`https://fred.stlouisfed.org/graph/fredgraph.csv?id=${id}`, 30000)).trim().split(/\r?\n/).slice(1).map((l) => l.split(','));
    cache.set(id, new Map(rows.filter((r) => r[1] && r[1] !== '.').map((r) => [r[0], Number(r[1])])));
  }
  return cache.get(id);
}
const monthStr = (y, m) => `${y}-${String(m).padStart(2, '0')}-01`;
const shiftMonth = (ymd, n) => { const d = new Date(ymd + 'T00:00:00Z'); d.setUTCMonth(d.getUTCMonth() + n); return d.toISOString().slice(0, 10); };

// 이벤트의 기준월(period): 제목의 "N월" → 발표월 이전의 가장 가까운 N월. 없으면 발표월 -1.
function periodOf(title, dateEt) {
  const [y, m] = dateEt.split('-').map(Number);
  const mm = String(title).match(/(\d{1,2})월/);
  let pm = mm ? Number(mm[1]) : (m === 1 ? 12 : m - 1);
  let py = pm > m ? y - 1 : y;
  if (!mm && m === 1) py = y - 1;
  return `${py}-${String(pm).padStart(2, '0')}`;
}

// 반환: { actual, prior, asof, series, note } — FRED 에 해당 기간 관측이 없으면 actual=null
async function fredValue(metric, measure, period, dateEt, getSeries = fredSeries) {
  const f = ruleFor(metric, measure)?.fred;
  if (!f) return null;
  const s = await getSeries(f.id);
  if (f.kind === 'weekly_k') {
    const wk = C.addDays(dateEt, -5); // 청구 통계는 직전 토요일 마감 주
    return { actual: s.has(wk) ? round(s.get(wk) / 1000, 0) : null, prior: s.has(C.addDays(wk, -7)) ? round(s.get(C.addDays(wk, -7)) / 1000, 0) : null, series: f.id, asof: wk };
  }
  const cur = `${period}-01`, prev = shiftMonth(cur, -1);
  const val = (d) => {
    const x = s.get(d);
    if (x == null) return null;
    if (f.kind === 'level') return round(x, 1);
    if (f.kind === 'diff') { const p = s.get(shiftMonth(d, -1)); return p == null ? null : round(x - p, 0); }
    if (f.kind === 'pct_mom') { const p = s.get(shiftMonth(d, -1)); return p == null ? null : round((x / p - 1) * 100, 1); }
    if (f.kind === 'pct_yoy') { const p = s.get(shiftMonth(d, -12)); return p == null ? null : round((x / p - 1) * 100, 1); }
    return null;
  };
  return { actual: val(cur), prior: val(prev), series: f.id, asof: cur };
}

module.exports = { RULES, parseTitle, ruleFor, classifySource, parseValue, fmtVal, fmtSurprise, checkMacro, checkEarnings, checkEvent, fredValue, fredSeries, periodOf, decimals, round };
