#!/usr/bin/env node
'use strict';
// B단계 견본: "3분 브리핑" 새 구조를 한 페이지로 만든다. 매일 파이프라인에는 연결하지 않는다.
//   node scripts/build_brief_preview.js [KST작성일=2026-10-17]
// 입력: logs/<날짜>/0_data.json · calendar.json · preview/brief_llm.json(Claude 1회 호출 결과) · 1_collect.md([7] 수급·[7-A] 내부자)
// 출력: docs/preview/<날짜>-brief.html
// 코드가 만드는 것: 숫자 띠 · 이번 주 볼 것 5개 · 섹터 15개(숫자만) · 수급 · 내부자 · 전체 일정 링크.  Claude 가 쓰는 것: 한 줄+세 문장 · 이야기 3개 · 관심 종목(1,500자 안팎).
const fs = require('fs');
const path = require('path');
const C = require('../lib/common');
const M = require('../lib/macro');
const { readerMd } = require('../lib/sanitize');
const { marked } = require('../lib/md');

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const isNum = (v) => typeof v === 'number' && Number.isFinite(v);
const pct = (v) => (isNum(v) ? `${v > 0 ? '▲ +' : v < 0 ? '▼ ' : '– '}${v.toFixed(2)}%` : 'N/A');
const bp = (v) => (isNum(v) ? `${v > 0 ? '▲ +' : v < 0 ? '▼ ' : '– '}${(v * 100).toFixed(1)}bp` : 'N/A');
const cls = (v) => (!isNum(v) || Math.abs(v) < 0.005 ? 'flat' : v > 0 ? 'up' : 'down');
const num = (v, d = 2) => (isNum(v) ? v.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d }) : 'N/A');
const md2 = (d) => d.slice(5).replace('-', '/');

// "AMD(AMD)" → "AMD": 이름이 티커와 같으면 괄호 중복을 없앤다
const wrapT = (h) => h.replace(/<table>/g, '<div class="tablewrap"><table>').replace(/<\/table>/g, '</table></div>');
const fixName = (s) => String(s).replace(/([A-Za-z][A-Za-z0-9&.]*)\(\1\)/g, '$1');

// 숫자 띠: 지수 5 · 10년물(FRED) · VIX · 달러 · WTI 를 한 줄 표로
function numberStrip(d) {
  const it = d.items;
  const cells = [
    ['S&P500', it['^GSPC'], 'p', 0], ['나스닥', it['^IXIC'], 'p', 0], ['다우', it['^DJI'], 'p', 0], ['러셀2000', it['^RUT'], 'p', 0], ['SOX', it['^SOX'], 'p', 0],
    ['10년물(FRED)', it['FRED:DGS10'], 'y', 2], ['VIX', it['^VIX'], 'p', 2], ['달러지수', it['DX-Y.NYB'], 'p', 2], ['WTI', it['CL=F'], 'p', 2],
  ];
  const th = cells.map((c) => `<th>${esc(c[0])}</th>`).join('');
  const val = cells.map((c) => `<td class="num">${c[1] && !c[1].error ? num(c[1].close, c[2] === 'y' ? 2 : (c[1].close >= 1000 ? 0 : 2)) + (c[2] === 'y' ? '%' : '') : 'N/A'}</td>`).join('');
  const chg = cells.map((c) => { const v = c[1] && !c[1].error ? (c[2] === 'y' ? c[1].d_1d : c[1].chg_1d) : null; return `<td class="num ${cls(v)}">${c[2] === 'y' ? bp(v) : pct(v)}</td>`; }).join('');
  const dt = d.items['FRED:DGS10']?.asof_day;
  return `<div class="tablewrap"><table class="strip"><thead><tr>${th}</tr></thead><tbody><tr>${val}</tr><tr>${chg}</tr></tbody></table></div><p class="meta">미국 기준일 ${esc(d.us_date)} 종가 · 10년물은 FRED 일별값(${esc(dt || '')}) · ${isNum(d.derived?.spread_10y_2y?.close) ? `10Y−2Y ${num(d.derived.spread_10y_2y.close)}%p(같은 날짜끼리 계산)` : ''}</p>`;
}

// 이번 주 볼 것 5개: ★★★ 지표(+FOMC)와 관심·대형 실적만, 날짜순. 부족하면 14일까지 넓힌다.
function weekAhead(cal, usDate, tickers, watch) {
  const name = (t) => { const n = tickers[t]?.name_ko; return n && n !== '?' && n !== t ? `${n}(${t})` : t; };
  const mk = (e) => {
    if (e.type === 'earnings') {
      const held = !!e.hold;
      const when = e.date_tbd ? `${md2(e.date_et)}~ (날짜 미확정)` : md2(e.date_et);
      return { d: e.date_et, text: `${when} ${name(e.ticker)} 실적${!held && isNum(e.cons_eps) ? ` — 예상 EPS $${e.cons_eps.toFixed(2)}(공급자 집계)` : held ? ' — 예상 검증 대기' : ''}` };
    }
    const u = e.unit;
    return { d: e.date_et, text: `${md2(e.date_et)} ${e.title}${!e.hold && e.prior != null ? ` — 직전 ${M.fmtVal(e.prior, u)}` : ''}${!e.hold && e.consensus != null ? `, 예상 ${M.fmtVal(e.consensus, u)}(${(e.consensus_source || '').replace(/ 서베이.*|설문/, '')})` : ' (예상값 없음)'}` };
  };
  const pick = (to) => cal.events.filter((e) => e.date_et > usDate && e.date_et <= C.addDays(usDate, to)
    && ((['macro', 'fed'].includes(e.type) && (e.importance || 1) >= 3) || (e.type === 'earnings' && (e.featured || watch.includes(e.ticker))))).sort((a, b) => a.date_et.localeCompare(b.date_et) || (b.importance || 0) - (a.importance || 0));
  let rows = pick(7);
  if (rows.length < 5) rows = pick(14);
  return rows.slice(0, 5).map(mk);
}

function sectors(d, tickers) {
  const rows = Object.entries(d.items).filter(([, v]) => v.group === 'sector').sort((a, b) => (b[1].chg_1d ?? -1e9) - (a[1].chg_1d ?? -1e9));
  const body = rows.map(([k, v]) => `<tr><td>${esc(v.label)} <span class="sub">${esc(k)}</span></td><td class="num ${cls(v.chg_1d)}">${pct(v.chg_1d)}</td><td class="num ${cls(v.chg_5d)}">${pct(v.chg_5d)}</td><td class="num ${cls(v.chg_1m)}">${pct(v.chg_1m)}</td><td class="num ${cls(v.chg_ytd)}">${pct(v.chg_ytd)}</td></tr>`).join('');
  return `<div class="tablewrap"><table><thead><tr><th>섹터 ETF</th><th class="r">1D</th><th class="r">5D</th><th class="r">1M</th><th class="r">YTD</th></tr></thead><tbody>${body}</tbody></table></div>`;
}

function flows(d, collect) {
  const pc = d.putcall || {};
  const rows = Object.entries(pc).filter(([, v]) => isNum(v.volRatio)).map(([k, v]) => `<tr><td>${esc(k.replace(/^_/, ''))} 옵션</td><td class="r num">${num(v.volRatio)}</td><td class="r num">${num(v.oiRatio)}</td></tr>`).join('');
  const sec = (re) => { const m = re.exec(collect); return m ? m[1].trim() : ''; };
  const flowTbl = sec(/## \[7\] 기관·대형 자금 수급\s*([\s\S]*?)\n---/);
  return `<h3>Put/Call 비율 (CBOE 지연시세 직접 집계)</h3><div class="tablewrap"><table><thead><tr><th>대상</th><th class="r">거래량 기준</th><th class="r">미결제약정 기준</th></tr></thead><tbody>${rows}</tbody></table></div>`
    + (flowTbl ? `<h3>자금흐름·옵션 이상거래 (수집 사실)</h3>${wrapT(marked.parse(readerMd(flowTbl)))}` : '');
}

function insiders(collect) {
  const m = /## \[7-A\][^\n]*\n\s*([\s\S]*?)(?:\n---|\n## )/.exec(collect);
  const t = m ? m[1].trim() : '';
  if (!t || /N\/A — Form 4 신규 공시 없음/.test(t)) return '<p>대상 기업(관심 종목) 신규 Form 4 공시 없음.</p>';
  return wrapT(marked.parse(readerMd(t)));
}

function render(date, d, brief, cal, tickers, collect, watchlist) {
  const wl = brief.watch.filter((w) => watchlist.includes(w.ticker)); // 관심 종목 밖 종목은 코드가 걸러낸다
  const stories = brief.stories.slice(0, 3).map((s, i) => `<section class="story"><h3>${i + 1}. ${esc(fixName(s.title))}</h3>
<dl><dt>무슨 일</dt><dd>${esc(fixName(s.what))}</dd><dt>왜 중요한가</dt><dd>${esc(fixName(s.why))}</dd><dt>영향 받는 종목</dt><dd>${esc((s.tickers || []).map((t) => { const n = tickers[t]?.name_ko; return n && n !== '?' && n !== t ? `${n}(${t})` : t; }).join(' · '))}</dd><dt>다음 확인 시점</dt><dd>${esc(fixName(s.next))}</dd></dl></section>`).join('\n');
  const week = weekAhead(cal, d.us_date, tickers, watchlist);
  const body = `<header class="top"><div><nav class="nav" aria-label="사이트"><a href="../index.html">미국 시장 데일리 브리핑</a></nav><h1>3분 브리핑 <small>견본</small></h1><p class="meta">${esc(date)} 작성 · 미국 기준일 ${esc(d.us_date)} · 이 페이지는 새 구조 견본이며 매일 파이프라인에는 아직 적용되지 않았습니다.</p></div></header>
<section class="brief-hero"><p class="one">${esc(fixName(brief.headline))}</p>
<ol class="three"><li><b>무슨 일</b> ${esc(fixName(brief.three.what))}</li><li><b>왜</b> ${esc(fixName(brief.three.why))}</li><li><b>다음에 볼 것</b> ${esc(fixName(brief.three.next))}</li></ol></section>
<section class="block"><h2>숫자 띠 <small>코드 생성</small></h2>${numberStrip(d)}</section>
<section class="block"><h2>오늘의 이야기</h2>${stories}</section>
<section class="block"><h2>내 관심 종목</h2>${wl.length ? `<ul class="watch">${wl.map((w) => `<li>${esc(fixName(w.note))}</li>`).join('')}</ul>` : '<p>오늘 움직임·뉴스가 있었던 관심 종목이 없습니다.</p>'}</section>
<section class="block"><h2>이번 주 볼 것 5개 <small>★★★ 지표 + 관심·대형 실적 · 코드 생성(calendar.json)</small></h2><ol class="week">${week.map((w) => `<li>${esc(w.text)}</li>`).join('')}</ol></section>
${brief.caveat ? `<p class="meta">⚠️ ${esc(fixName(brief.caveat))}</p>` : ''}
<section class="block"><h2>상세 데이터</h2>
<details><summary>섹터 15개 (숫자만, 코드 생성)</summary>${sectors(d, tickers)}</details>
<details><summary>수급</summary>${flows(d, collect)}</details>
<details><summary>내부자 거래 (SEC Form 4)</summary>${insiders(collect)}</details>
<p><a href="../calendar.html">전체 일정 보기 →</a></p></section>
<footer><p>자동 생성 리포트 · 투자 조언이 아닙니다. 모든 수치는 원문 출처를 확인하세요. · <a href="../corrections.html">정정 기록</a></p></footer>`;
  return `<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="light dark"><meta name="robots" content="noindex"><link rel="icon" href="data:,">
<title>3분 브리핑 견본 ${esc(date)}</title>
<script>try{var t=localStorage.getItem('enb.theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);if(localStorage.getItem('enb.color')==='us')document.documentElement.setAttribute('data-color','us')}catch(e){}</script>
<link rel="stylesheet" href="../assets/site.css"><style>
.brief-hero .one{font-size:22px;font-weight:700;line-height:1.4;margin:.2em 0 .5em}.three{padding-left:1.2em}.three li{margin:.4em 0}
.story dl{display:grid;grid-template-columns:7.5em 1fr;gap:.35em .8em;margin:.3em 0 1.2em}.story dt{color:var(--muted);font-size:13px}.story dd{margin:0}
.strip th,.strip td{text-align:right;white-space:nowrap}.strip{min-width:640px}details{margin:.6em 0;border:1px solid var(--line);border-radius:8px;padding:.4em .9em;background:var(--surface)}summary{cursor:pointer;font-weight:600;padding:.4em 0}
.week li,.watch li{margin:.4em 0}h1 small{font-size:13px;color:var(--muted);font-weight:400}
@media (max-width:640px){.story dl{grid-template-columns:1fr}.story dt{margin-top:.5em}}
</style></head><body><div class="wrap">
${body}
</div><script src="../assets/site.js" defer></script></body></html>
`;
}

function selftest() {
  const assert = require('assert');
  assert.strictEqual(fixName('AMD(AMD) -5.95%, 마이크론(MU)'), 'AMD -5.95%, 마이크론(MU)');
  const cal = { events: [
    { type: 'macro', date_et: '2026-10-28', title: 'FOMC', importance: 3, hold: null },
    { type: 'earnings', date_et: '2026-10-21', ticker: 'META', featured: true, cons_eps: 6.3122 },
    { type: 'earnings', date_et: '2026-10-20', ticker: 'COF', cons_eps: 5.45 },
  ] };
  const w = weekAhead(cal, '2026-10-16', { META: { name_ko: '메타' } }, []);
  assert(w.some((x) => /메타\(META\)/.test(x.text)) && !w.some((x) => /COF/.test(x.text)), '관심·대형 실적만');
  console.log('selftest 통과: 이름 중복 제거 · 이번 주 볼 것 선별');
}

function main() {
  if (process.argv.includes('--selftest')) return selftest();
  const date = process.argv.slice(2).find((a) => /^\d{4}-\d{2}-\d{2}$/.test(a)) || '2026-10-17';
  const dir = path.join(C.ROOT, 'logs', date);
  const d = C.readJson(path.join(dir, '0_data.json'), null);
  const brief = C.readJson(path.join(dir, 'preview', 'brief_llm.json'), null);
  if (!d || !brief) { console.error('0_data.json 또는 preview/brief_llm.json 없음'); process.exit(1); }
  const cal = C.readJson(path.join(C.ROOT, 'docs', 'data', 'calendar.json'), { events: [] });
  const tickers = C.readJson(path.join(C.ROOT, 'docs', 'data', 'tickers.json'), {});
  const watchlist = C.readJson(path.join(C.ROOT, 'config', 'watchlist.json'), { tickers: [] }).tickers;
  const collect = fs.readFileSync(path.join(dir, '1_collect.md'), 'utf8');
  const out = path.join(C.ROOT, 'docs', 'preview', `${date}-brief.html`);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, render(date, d, brief, cal, tickers, collect, watchlist), 'utf8');
  console.log(`견본 생성: ${path.relative(C.ROOT, out)}`);
}

if (require.main === module) main();
module.exports = { render, weekAhead, fixName };
