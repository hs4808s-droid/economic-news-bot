#!/usr/bin/env node
'use strict';

// 3단계 직후(코드): 3_report.md 의 마커 자리에 표를 끼워 넣는다. LLM 은 숫자 표를 옮겨 적지 않는다.
//   <!-- DASHBOARD --> ← 0_data.json 기반 지수·금리·변동성·매크로·섹터 ETF·Put/Call 표
//   <!-- CALENDAR  --> ← docs/data/calendar.json 기반 A(지표·연준) / B(실적) / C(기업 이벤트) 표
// 이렇게 하면 메일(build_email.js)과 사이트(build_site.js)가 같은 숫자를 받는다.
// 멱등: 이미 채워진 자리(<!-- /DASHBOARD -->까지)는 다시 실행하면 새 표로 교체된다.
//
// 사용법: node inject_dashboard.js [YYYY-MM-DD] [--selftest]   (생략 시 오늘 KST)

const fs = require('fs');
const path = require('path');
const C = require('./lib/common');
const { renderTables } = require('./fetch_market_data');
const { extractTickers } = require('./scripts/tickers_lib');

const TICKERS = () => C.readJson(path.join(C.ROOT, 'docs', 'data', 'tickers.json'), {});

// 마커 교체: `<!-- NAME -->` 또는 `<!-- NAME -->…<!-- /NAME -->` 전체를 새 블록으로 바꾼다.
function replaceBlock(md, name, block) {
  const re = new RegExp(`<!-- ${name} -->[\\s\\S]*?<!-- /${name} -->|<!-- ${name} -->`);
  if (!re.test(md)) return { md, found: false };
  return { md: md.replace(re, () => `<!-- ${name} -->\n\n${block.trim()}\n\n<!-- /${name} -->`), found: true };
}

// --- 캘린더 표 ----------------------------------------------------------------
const cell = (v) => (v == null || v === '' ? '—' : String(v).replace(/\|/g, '/'));
const usd = (v) => (typeof v === 'number' ? `$${v.toFixed(2)}` : '—');
const usdB = (v) => (typeof v === 'number' ? `$${(v / 1e9).toFixed(2)}B` : '—');
const stars = (n) => '★'.repeat(Math.max(1, Math.min(3, n || 1)));
const sgn = (v, f = (x) => x) => (typeof v === 'number' ? `${v > 0 ? '+' : ''}${f(v)}` : '—');
const TIMING = { bmo: '장전', amc: '장후' };

function calendarTables(cal, D, seen, tickers) {
  const lo = C.addDays(D, -2), hi = C.addDays(D, 14);
  const evs = (cal.events || []).filter((e) => e.date_et >= lo && e.date_et <= hi);
  const tk = (t) => {
    if (!t) return '—';
    if (seen.has(t)) return t;
    seen.add(t);
    const m = tickers[t];
    return m && m.name_ko !== '?' ? `${t}(${m.name_ko}·${m.sector})` : t; // 마스터에 없으면 이름을 추측하지 않는다
  };
  const L = [];

  L.push(`### A. 지표·연준 (${lo} ~ ${hi}, ET 기준)`, '');
  const A = evs.filter((e) => e.type === 'macro' || e.type === 'fed');
  if (!A.length) L.push('예정 없음', '');
  else {
    L.push('| 날짜(ET) | 시각 | 이벤트 | 중요도 | 직전값 | 예상값 | 발표치 | 서프라이즈 | 출처 |', '|---|---|---|---|---|---|---|---|---|');
    for (const e of A) L.push(`| ${e.date_et} | ${cell(e.time_et)} | ${cell(e.title)} | ${stars(e.importance)} | ${cell(e.prior)} | ${cell(e.consensus)} | ${cell(e.actual)} | ${sgn(e.surprise)} | ${cell(e.source)} |`);
    L.push('');
  }

  L.push('### B. 실적 발표', '');
  const B = evs.filter((e) => e.type === 'earnings');
  if (!B.length) L.push('예정 없음', '');
  else {
    L.push('| 날짜(ET) | 시점 | 종목 | 전년 동기 EPS | 예상 EPS | 실제 EPS | 서프라이즈 | 예상 매출 | 실제 매출 | 예상 변동폭 |', '|---|---|---|---|---|---|---|---|---|---|');
    for (const e of B) {
      L.push(`| ${e.date_et} | ${TIMING[e.timing] || '—'} | ${tk(e.ticker)} | ${usd(e.prior_eps)} | ${usd(e.cons_eps)} | ${usd(e.actual_eps)} | ${sgn(e.surprise_eps, (x) => x.toFixed(2))} | ${usdB(e.cons_rev)} | ${usdB(e.actual_rev)} | ${e.implied_move != null ? `±${e.implied_move}%` : '—'} |`);
    }
    L.push('', '> 전년 동기 EPS·예상 EPS는 Nasdaq/Finnhub 집계, 예상 변동폭(옵션 내재)은 무료 소스가 없어 비워 둔다. 값이 `—`이면 수집되지 않은 것이다.', '');
  }

  L.push('### C. 기업 이벤트', '');
  const Cc = evs.filter((e) => e.type === 'corporate');
  if (!Cc.length) L.push('예정 없음', '');
  else {
    L.push('| 날짜(ET) | 종목 | 이벤트 | 출처 |', '|---|---|---|---|');
    for (const e of Cc) L.push(`| ${e.date_et} | ${tk(e.ticker)} | ${cell(e.title)} | ${cell(e.source)} |`);
    L.push('');
  }
  return L.join('\n');
}

function inject(md, data, cal, tickers) {
  const D = data?.us_date || C.expectedTradingDay();
  const res = { dashboard: false, calendar: false };
  let out = md;

  const dash = data ? renderTables(data, '###').join('\n') : '> 시장 데이터(0_data.json)를 수집하지 못했습니다. 수치는 `N/A`로 남깁니다.';
  let r = replaceBlock(out, 'DASHBOARD', dash);
  out = r.md; res.dashboard = r.found;

  // 티커 첫 등장 표기: 캘린더 표에서 처음 나오는 티커는 `T(이름·섹터)`, 이미 앞에서 나온 티커는 `T`
  const idx = out.indexOf('<!-- CALENDAR -->');
  const before = idx >= 0 ? out.slice(0, idx) : out;
  const seen = new Set(extractTickers(before));
  r = replaceBlock(out, 'CALENDAR', calendarTables(cal, D, seen, tickers));
  out = r.md; res.calendar = r.found;
  return { md: out, ...res };
}

function main() {
  const date = process.argv.slice(2).find((a) => /^\d{4}-\d{2}-\d{2}$/.test(a)) || C.kstDate();
  const file = path.join(C.ROOT, 'logs', process.env.LOG_NAME || date, '3_report.md');
  if (!fs.existsSync(file)) { console.error(`3_report.md 없음: ${file}`); process.exit(1); }
  const data = C.readJson(path.join(C.ROOT, 'logs', process.env.LOG_NAME || date, '0_data.json'), null);
  const cal = C.readJson(path.join(C.ROOT, 'docs', 'data', 'calendar.json'), { events: [] });
  const r = inject(fs.readFileSync(file, 'utf8'), data, cal, TICKERS());
  if (!r.dashboard) console.error('경고: <!-- DASHBOARD --> 마커가 리포트에 없음 — 대시보드 표를 넣지 못했다');
  if (!r.calendar) console.error('경고: <!-- CALENDAR --> 마커가 리포트에 없음 — 일정 표를 넣지 못했다');
  fs.writeFileSync(file, r.md, 'utf8');
  console.log(`완료: logs/${date}/3_report.md (대시보드 ${r.dashboard ? '삽입' : '마커 없음'} · 일정 ${r.calendar ? '삽입' : '마커 없음'})`);
}

function selftest() {
  const assert = require('assert');
  const md = '## 1. 대시보드\n\n<!-- DASHBOARD -->\n\n해석 NVDA(엔비디아·반도체) 언급\n\n## 7. 향후 2주 일정\n\n<!-- CALENDAR -->\n\n관전\n';
  const data = JSON.parse(fs.readFileSync(path.join(C.ROOT, 'docs', 'data', 'latest.json'), 'utf8'));
  const D = data.us_date;
  const mk = (o) => ({ ...{ id: null, date_et: D, type: 'earnings', importance: 2 }, ...o });
  const cal = { events: [
    mk({ id: 'a', ticker: 'NVDA', date_et: C.addDays(D, 3), cons_eps: 1.2, prior_eps: 0.9, timing: 'amc' }),
    mk({ id: 'b', ticker: 'MU', date_et: C.addDays(D, 4), cons_eps: 2, actual_eps: 2.5, surprise_eps: 0.5 }),
    mk({ id: 'c', ticker: 'ZZZZ', date_et: C.addDays(D, 5) }),
    mk({ id: 'd', type: 'macro', date_et: C.addDays(D, 7), title: '9월 CPI (YoY)', consensus: '3.3%', source: 'BLS' }),
    mk({ id: 'e', ticker: 'OLD', date_et: C.addDays(D, -5) }),   // 창 밖(너무 과거)
    mk({ id: 'f', ticker: 'FAR', date_et: C.addDays(D, 30) }),   // 창 밖(너무 미래)
  ] };
  const tickers = { NVDA: { name_ko: '엔비디아', sector: '반도체' }, MU: { name_ko: '마이크론', sector: '반도체' } };
  const r1 = inject(md, data, cal, tickers);
  assert(r1.dashboard && r1.calendar);
  assert(/\| S&P500 \| `\^GSPC` \| 7,801\.77/.test(r1.md), '지수 표 삽입');
  assert(/<!-- \/DASHBOARD -->/.test(r1.md) && /<!-- \/CALENDAR -->/.test(r1.md));
  assert(/ MU\(마이크론·반도체\) /.test(r1.md), 'MU 는 첫 등장이라 이름 표기');
  assert(/\| 장후 \| NVDA \|/.test(r1.md), 'NVDA 는 앞에서 이미 나왔으니 티커만');
  assert(/ ZZZZ /.test(r1.md) && !/ZZZZ\(/.test(r1.md), '마스터에 없는 티커는 이름을 지어내지 않음');
  assert(!/OLD|FAR/.test(r1.md.split('<!-- CALENDAR -->')[1]), 'D-2~D+14 밖은 제외');
  // 멱등: 다시 실행해도 마커 블록이 중복되지 않는다
  const r2 = inject(r1.md, data, cal, tickers);
  assert.strictEqual((r2.md.match(/<!-- DASHBOARD -->/g) || []).length, 1);
  assert.strictEqual(r2.md, r1.md, '재실행 결과가 같아야 함');
  // 마커가 없으면 조용히 넘어가지 않고 found=false
  assert.strictEqual(inject('## x\n', data, cal, tickers).dashboard, false);
  console.log('selftest 통과: 표 삽입 · 티커 첫 등장 표기 · 창 필터 · 멱등 · 마커 없음 감지');
}

if (require.main === module && process.argv.includes('--selftest')) selftest();
else if (require.main === module) main();
module.exports = { inject, calendarTables };
