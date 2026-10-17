#!/usr/bin/env node
'use strict';
// 1b 단계(코드): docs/data/calendar.json 에서 2·3단계(LLM)가 인용할 수 있는 "일정·실적 팩트"를 만든다.
//   node scripts/calendar_facts.js [YYYY-MM-DD]   → logs/<날짜>/calendar_facts.md
// 이유: 리포트 본문의 실적·지표 숫자와 날짜가 표(원장)와 따로 놀았다(TSLA 예상 EPS 표 0.43/0.45 ↔ 본문 0.21).
//   LLM 은 이 파일의 값만 인용하고, validate_report.js 가 본문 인용을 원장과 대조한다.
// "예상값이 없는 지표" 목록을 함께 넘긴다 — 그 지표에는 '예상 상회/하회/부합/서프라이즈' 표현을 쓰지 못한다.
const fs = require('fs');
const path = require('path');
const C = require('../lib/common');
const M = require('../lib/macro');

const f = (v, unit) => M.fmtVal(v, unit);
const eps = (v) => (typeof v === 'number' ? v.toFixed(2) : '—');
const day = (d) => d.slice(5).replace('-', '/');

function build(cal, usDate) {
  const from = C.addDays(usDate, -3), to = C.addDays(usDate, 14);
  const ev = cal.events.filter((e) => e.date_et >= from && e.date_et <= to);
  const macro = ev.filter((e) => ['macro', 'fed'].includes(e.type) && e.metric && e.measure);
  const noCons = macro.filter((e) => e.importance >= 2 && (e.consensus == null || e.hold));
  const L = [`# 일정·실적 팩트 (코드 생성, 기준일 ${usDate})`, '',
    '> 이 파일의 숫자·날짜만 인용한다. 여기 없는 실적 숫자·날짜는 쓰지 않는다(필요하면 "일정표 참고"). 출처: docs/data/calendar.json', ''];

  L.push('## 예상값이 없는 지표 — "예상 상회/하회/부합/서프라이즈" 표현 금지', '');
  if (!noCons.length) L.push('- 없음', '');
  else {
    noCons.forEach((e) => L.push(`- ${day(e.date_et)} ${e.title}${e.hold ? ` — 검증 대기(${e.hold})` : ' — 예상값 없음'}${e.ref_consensus != null ? ` (참고용 비공식 값 ${f(e.ref_consensus, e.unit)} 있음 — 서프라이즈 계산에 쓰지 않는다)` : ''}`));
    L.push('');
  }

  L.push('## 경제지표', '', '| 날짜(ET) | 지표 | 직전 | 예상(출처) | 발표 | 서프라이즈 |', '|---|---|---|---|---|---|');
  macro.filter((e) => e.importance >= 2).forEach((e) => {
    const h = !!e.hold;
    L.push(`| ${day(e.date_et)} | ${e.title} | ${h ? '검증 대기' : f(e.prior, e.unit)} | ${h ? '검증 대기' : e.consensus == null ? '없음' : `${f(e.consensus, e.unit)} (${(e.consensus_source || '').replace(/\|/g, '/')})`} | ${h ? '검증 대기' : f(e.actual, e.unit)} | ${h ? '검증 대기' : M.fmtSurprise(e.surprise, e.unit)} |`);
  });
  L.push('');

  const er = ev.filter((e) => e.type === 'earnings').sort((a, b) => a.date_et.localeCompare(b.date_et) || a.ticker.localeCompare(b.ticker));
  L.push('## 실적 (날짜는 ET·발표일)', '', '| 날짜 | 종목 | 날짜 상태 | 예상 EPS | 전년 EPS | 실제 EPS | EPS 기준 | 서프라이즈 |', '|---|---|---|---|---|---|---|---|');
  er.forEach((e) => {
    const h = !!e.hold;
    const st = e.date_confirmed ? '확정(IR)' : e.date_tbd ? `날짜 미확정(후보 ${[e.date_et, ...(e.date_alt || [])].map(day).join('/')})` : e.actual_eps != null ? '발표 완료' : '공급자 집계';
    const sur = !h && e.actual_eps != null && e.cons_eps != null ? `${(e.actual_eps - e.cons_eps >= 0 ? '+' : '') + (e.actual_eps - e.cons_eps).toFixed(2)}` : '—';
    L.push(`| ${day(e.date_et)} | ${e.ticker} | ${st} | ${h ? '검증 대기' : eps(e.cons_eps)} | ${h ? '검증 대기' : eps(e.prior_eps)} | ${h ? '검증 대기' : eps(e.actual_eps)} | ${e.eps_label || e.eps_basis || '—'} | ${sur} |`);
  });
  L.push('', '※ "검증 대기" 종목은 숫자를 쓰지 않는다. "날짜 미확정" 종목은 날짜를 단정하지 않는다.');
  return L.join('\n') + '\n';
}

function main() {
  const date = process.argv.slice(2).find((a) => /^\d{4}-\d{2}-\d{2}$/.test(a)) || C.kstDate();
  const dir = path.join(C.ROOT, 'logs', process.env.LOG_NAME || date);
  const cal = C.readJson(path.join(C.ROOT, 'docs', 'data', 'calendar.json'), null);
  if (!cal) { console.error('calendar.json 없음'); process.exit(1); }
  const us = C.readJson(path.join(dir, '0_data.json'), null)?.us_date || cal.window?.anchor_us_date || C.expectedTradingDay();
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'calendar_facts.md'), build(cal, us), 'utf8');
  console.log(`calendar_facts.md: 기준일 ${us}`);
}

if (require.main === module) main();
module.exports = { build };
