#!/usr/bin/env node
'use strict';

// 5단계: logs/<날짜>/3_report.md → docs/reports/<날짜>.html + docs/index.html + docs/data/summaries.json
// GitHub Pages(Deploy from branch: main /docs)가 docs/를 그대로 서빙한다.
//
// 화면 변경은 이 파일(HTML 템플릿)과 docs/assets/site.css · site.js 에서만 한다.
// docs/index.html · docs/reports/*.html 은 매일 통째로 다시 생성되므로 직접 고치면 덮어써진다.
//
// 사용법: node build_site.js
//   전체 리포트를 매번 다시 빌드한다. 출력이 결정론적이라 내용이 같으면 git diff도 없다.
//   `--selftest` 는 제목·요약 추출 규칙을 시험한다.

const fs = require('fs');
const path = require('path');
const { marked } = require('./lib/md');
const { reportUsDate } = require('./scripts/should_run');
const { readerMd, sourcesOf } = require('./lib/sanitize');
const C = require('./lib/common');

const ROOT = __dirname;
const LOGS = path.join(ROOT, 'logs');
const DOCS = path.join(ROOT, 'docs');
const REPORTS = path.join(DOCS, 'reports');

const SITE_TITLE = '미국 시장 데일리 브리핑';
const TAGCFG = C.readJson(path.join(ROOT, 'config', 'tags.json'), { max_per_report: 2, min_score: 3, tags: [] });
const TAG_ORDER = TAGCFG.tags.map((t) => t.name);
const TAG_DEF = Object.fromEntries(TAGCFG.tags.map((t) => [t.name, t.def]));
const TAG_RULES = Object.fromEntries(TAGCFG.tags.map((t) => [t.name, new RegExp(t.re, 'gi')]));

// 점수 = 헤드라인 3 + 요약 줄당 2 + TOP 항목당 1 (extract 가 계산). 어느 날에나 나오는 태그는 필터가 쓸모없으므로
// 전체 리포트에서의 출현 비율(df/N)로 점수를 깎는다(희소할수록 가산). 최소 점수 미만이면 붙이지 않고, 최대 max_per_report 개.
function tagScores(headline, summary, top) {
  const hits = (txt, t) => ((txt || '').match(TAG_RULES[t]) || []).length > 0;
  return Object.fromEntries(TAG_ORDER.map((t) => [t, (hits(headline, t) ? 3 : 0) + summary.filter((l) => hits(l, t)).length * 2 + top.filter((l) => hits(l, t)).length]));
}
function assignTags(entries) {
  const N = entries.length || 1;
  const df = Object.fromEntries(TAG_ORDER.map((t) => [t, entries.filter((e) => e.tagScores[t] >= TAGCFG.min_score).length / N]));
  for (const e of entries) {
    e.tags = TAG_ORDER.map((t) => [t, e.tagScores[t], e.tagScores[t] * (1 - 0.8 * df[t])])
      .filter(([, raw, adj]) => raw >= TAGCFG.min_score && adj >= TAGCFG.min_adjusted)
      .sort((x, y) => y[2] - x[2] || TAG_ORDER.indexOf(x[0]) - TAG_ORDER.indexOf(y[0]))
      .slice(0, TAGCFG.max_per_report).map(([t]) => t);
  }
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const weekday = (date) => ['일', '월', '화', '수', '목', '금', '토'][new Date(date + 'T00:00:00Z').getUTCDay()];
const plain = (s) => s.replace(/\*\*|__/g, '').replace(/[`#]/g, '').replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/\s+/g, ' ').trim();
const clip = (s, n) => (s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s);

// --- 제목·요약·태그 추출 ------------------------------------------------------
const section = (md, headRe) => {
  const lines = md.split('\n');
  const s = lines.findIndex((l) => headRe.test(l));
  if (s < 0) return [];
  const level = (lines[s].match(/^#+/) || ['##'])[0].length;
  const out = [];
  for (let i = s + 1; i < lines.length; i++) {
    const m = /^(#+)\s/.exec(lines[i]);
    if (m && m[1].length <= level) break;
    out.push(lines[i]);
  }
  return out;
};

// TOP 항목: "1. 요약 — 방향 · ★..." 또는 표 행 "| 1 | 요약 | ↓ | ★... |" 두 형식 모두 지원
function topItems(md) {
  const block = section(md, /^#{2,3}\s*(\d+\.\s*)?(오늘의\s*)?핵심\s*TOP/);
  const items = [];
  for (const l of block) {
    let m = /^\s*(\d+)[.)]\s+(.+)$/.exec(l);
    if (!m) m = /^\s*\|\s*(\d+)\s*\|\s*([^|]+)\|/.exec(l);
    if (m) items.push(plain(m[2]).split(' — ')[0].replace(/\s*·\s*★.*$/, '').trim());
  }
  return items.filter(Boolean);
}

// 일정 이름만 있는 제목("NFP (07-02)")은 정보가 없다: 짧고 동사/수치가 없으면 약한 제목으로 본다.
const weakTitle = (t) => !t || t.length < 24 || /^[A-Za-z0-9가-힣·&.\- ]{1,16}\s*\(\d{1,2}[-/]\d{1,2}\)\s*$/.test(t);

function extract(md) {
  // 1) 새 구조: ## 0. 헤드라인 — 굵은 한 줄 + 불릿 + 태그 줄
  const hb = section(md, /^##\s*0\.\s*헤드라인/);
  let headline = null, summary = [], tags = [];
  if (hb.length) {
    const hl = hb.find((l) => /^\s*\*\*.+\*\*\s*$/.test(l));
    if (hl) headline = plain(hl);
    summary = hb.filter((l) => /^\s*[-*]\s+/.test(l)).map((l) => plain(l.replace(/^\s*[-*]\s+/, ''))).slice(0, 3);
  }
  const top = topItems(md);

  // 2) 기존 구조: TOP 1이 제목, 2~3이 요약. 약한 제목이면 TOP 1~3을 이어 붙여 보완(LLM 재생성 없음)
  if (!headline) {
    headline = top[0] ? clip(top[0], 90) : null;
    if (weakTitle(headline) && top.length > 1) headline = clip(top.slice(0, 3).map((t) => clip(t, 40)).join(' · '), 110);
    if (!summary.length) summary = top.slice(1, 4).map((t) => clip(t, 90));
  }
  // 3) TOP이 아예 없는 날(06-19 등): 시장 개요의 첫 문장들
  if (!headline || !summary.length) {
    const ov = section(md, /^##\s*(\d+\.\s*)?시장\s*개요/).map(plain).filter((l) => l && !l.startsWith('|') && !l.startsWith('---'));
    const sentences = ov.join(' ').split(/(?<=[.다요])\s+/).map((s) => s.trim()).filter((s) => s.length > 8);
    if (!headline) headline = sentences[0] ? clip(sentences[0], 90) : '시장 요약';
    if (!summary.length) summary = sentences.slice(1, 3).map((s) => clip(s, 90));
  }
  const scores = tagScores(headline, summary, top);
  tags = TAG_ORDER.filter((t) => scores[t] >= TAGCFG.min_score).sort((x, y) => scores[y] - scores[x]).slice(0, TAGCFG.max_per_report);
  const searchText = [headline, ...summary, ...tags, ...top.slice(0, 12)].join(' ');
  return { headline, summary, tags, tagScores: scores, searchText };
}

// --- 템플릿 --------------------------------------------------------------------
const HEAD_SCRIPT = `<script>try{var t=localStorage.getItem('enb.theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);if(localStorage.getItem('enb.color')==='us')document.documentElement.setAttribute('data-color','us')}catch(e){}</script>`;

const settingsHtml = () => `<div class="settings" aria-label="표시 설정">
    <div class="seg" role="group" aria-label="테마"><button type="button" data-set-theme="auto" aria-pressed="true">자동</button><button type="button" data-set-theme="light" aria-pressed="false">라이트</button><button type="button" data-set-theme="dark" aria-pressed="false">다크</button></div>
    <div class="seg" role="group" aria-label="상승 하락 색상"><button type="button" data-set-color="kr" aria-pressed="true">한국식 <span class="up">▲</span><span class="down">▼</span></button><button type="button" data-set-color="us" aria-pressed="false">미국식 <span class="up">▲</span><span class="down">▼</span></button></div>
  </div>`;

const FOOT = `<footer>
  <p>자동 생성 리포트 · 투자 조언이 아닙니다. 모든 수치는 원문 출처를 확인하세요. · <a href="corrections.html">정정 기록</a></p>
  <p>데이터 출처: Yahoo Finance · CBOE · Finnhub · FRED · Nasdaq. 시세는 지연될 수 있으며 기준시각(ET)은 각 항목에 표기됩니다.</p>
</footer>`;

// 정정 기록(config/corrections.json): 해당 리포트(report_date)에만 banner_days(기본 7)일 동안 배너를 띄우고, 상세는 corrections.html 로 보낸다.
const CORRECTIONS = C.readJson(path.join(ROOT, 'config', 'corrections.json'), { items: [] }).items;
const TODAY_KST = process.env.BUILD_TODAY || C.kstDate();
const correctionFor = (date) => CORRECTIONS.find((c) => c.report_date === date && TODAY_KST <= C.addDays(c.report_date, c.banner_days || 7));
const noticeHtml = (date, prefix) => { const c = correctionFor(date); return c ? `<div class="notice" role="note">⚠️ <b>정정 안내</b> — ${esc(c.summary)} <a href="${prefix}corrections.html#${esc(c.id)}">정정 기록 보기 →</a></div>\n` : ''; };

const page = ({ title, description, body, assets, wrapClass = '', notice = '' }) => `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light dark">
<link rel="icon" href="data:,">
<meta name="description" content="${esc(description)}">
<title>${esc(title)}</title>
${HEAD_SCRIPT}
<link rel="stylesheet" href="${assets}site.css">
</head>
<body>
<div class="wrap ${wrapClass}">
${notice}${body}
</div>
<script src="${assets}site.js" defer></script>
</body>
</html>
`;

const sourcesHtml = (md) => {
  const src = sourcesOf(readerMd(md));
  const base = '<p>시세·지표: Yahoo Finance · CBOE · FRED · Nasdaq · Finnhub · SEC EDGAR · 각 기업 IR. 시세는 지연될 수 있으며 기준시각(ET)은 각 항목에 표기됩니다.</p>';
  return `<section class="sources"><h2>출처</h2>${base}${src.length ? `<ul>${src.map((x) => `<li><a href="${esc(x.url)}" rel="noopener">${esc(x.host)}</a></li>`).join('')}</ul>` : ''}</section>`;
};

function renderReport(e, older, newer, rep) {
  const html = marked.parse(readerMd(e.md)).replace(/<table>/g, '<div class="tablewrap"><table>').replace(/<\/table>/g, '</table></div>');
  const prev = older ? `<a href="${older.date}.html" rel="prev">‹ 이전 (${older.date})</a>` : `<span aria-disabled="true">‹ 이전</span>`;
  const next = newer ? `<a href="${newer.date}.html" rel="next">다음 (${newer.date}) ›</a>` : `<span aria-disabled="true">다음 ›</span>`;
  const nav = `<nav class="nav" aria-label="리포트 이동"><a href="../index.html" rel="up">← 목록</a>${prev}${next}</nav>`;
  return page({
    title: `${e.date} 미국 시장 브리핑`,
    description: e.headline,
    assets: '../assets/',
    wrapClass: 'report-wrap',
    notice: noticeHtml(e.date, '../'),
    body: `<header class="top"><div><nav class="nav" aria-label="사이트"><a href="../index.html">${esc(SITE_TITLE)}</a></nav></div>${settingsHtml()}</header>
${nav}
${rep ? `<div class="notice dup" role="note">이 리포트는 <a href="${rep.date}.html">${rep.date} 리포트</a>와 같은 미국 기준일(${e.us_date}) 데이터입니다. 대표 리포트: <a href="${rep.date}.html">${rep.date} ›</a></div>` : ''}
<article>
${html}
${sourcesHtml(e.md)}
</article>
${nav}
${FOOT}`,
  });
}

function renderIndex(entries) {
  const months = [];
  for (const e of entries) {
    const ym = e.date.slice(0, 7);
    let g = months.find((m) => m.ym === ym);
    if (!g) months.push((g = { ym, items: [] }));
    g.items.push(e);
  }
  const tagCount = {};
  entries.forEach((e) => e.tags.forEach((t) => (tagCount[t] = (tagCount[t] || 0) + 1)));
  const chips = [`<button type="button" data-tag="" aria-pressed="true">전체 (${entries.length})</button>`]
    .concat(TAG_ORDER.filter((t) => tagCount[t]).map((t) => `<button type="button" data-tag="${t}" aria-pressed="false" title="${esc(TAG_DEF[t])}">${t} (${tagCount[t]})</button>`)).join('');

  const card = (e, i) => `    <li data-tags="${esc(e.tags.join(','))}" data-text="${esc(e.searchText)}"${i === 0 ? ' class="latest"' : ''}><a class="card" href="reports/${e.date}.html">
      <div class="row1"><span class="d">${e.date} (${weekday(e.date)})</span>${e.us_date ? `<span>미국 기준일 ${e.us_date}</span>` : ''}${e.dups ? `<span class="dupn">같은 기준일 ${e.dups}건 더 있음</span>` : ''}${i === 0 ? '<span class="badge">최신</span>' : ''}</div>
      <div class="hl">${esc(e.headline)}</div>
      <p class="sm">${e.summary.map(esc).join('<br>')}</p>
      <div class="tags">${e.tags.map((t) => `<span class="tag">${t}</span>`).join('')}</div>
    </a></li>`;
  let n = 0;
  const monthsHtml = months.map((m) => `  <div class="month"><h3>${m.ym.slice(0, 4)}년 ${Number(m.ym.slice(5))}월</h3>
  <ul class="cards">
${m.items.map((e) => card(e, n++)).join('\n')}
  </ul></div>`).join('\n');

  return page({
    title: SITE_TITLE,
    description: '미국 증시·연준·경제지표·AI 인프라를 매일 분석한 한국어 데일리 리포트 모음',
    assets: 'assets/',
    body: `<header class="top">
  <div><h1>${esc(SITE_TITLE)}</h1><p class="meta" id="updated">총 ${entries.length}건 · 최신 ${entries[0].date}</p></div>
  ${settingsHtml()}
</header>
<section class="block" id="dashboard" data-base="" aria-label="대시보드">
  <h2>시장 대시보드 <small>Yahoo Finance · FRED · CBOE 자동 수집</small></h2>
  <div id="tiles"><div class="empty">불러오는 중…</div></div>
  <h2 style="margin-top:22px">섹터 히트맵
    <span class="seg" id="heat-ctrl" role="group" aria-label="기간"><button type="button" data-period="1d" aria-pressed="true">1D</button><button type="button" data-period="5d" aria-pressed="false">5D</button><button type="button" data-period="1m" aria-pressed="false">1M</button><button type="button" data-period="ytd" aria-pressed="false">YTD</button></span>
  </h2>
  <div id="heatmap" class="heat" aria-live="polite"><div class="empty">불러오는 중…</div></div>
  <h2 style="margin-top:22px">다가오는 2주 일정 <small>ET 기준 · 관심·대형주 중심 · <a href="calendar.html">전체 일정 보기 →</a></small></h2>
  <div id="calendar"><div class="empty">불러오는 중…</div></div>
</section>
<section class="block" aria-label="아카이브">
  <h2>리포트 아카이브 <span class="count" id="count">${entries.length}건</span></h2>
  <div class="tools">
    <input type="search" id="q" placeholder="검색 (예: FOMC, 엔비디아, 유가)" aria-label="리포트 검색" autocomplete="off">
  </div>
  <div class="chips tools" id="tagchips" role="group" aria-label="태그 필터">${chips}</div>
  <div id="archive">
${monthsHtml}
  </div>
  <div class="empty" id="noresult" hidden>검색 결과가 없습니다</div>
</section>
${FOOT}`,
  });
}

function renderCalendarPage() {
  return page({
    title: '전체 일정 — ' + SITE_TITLE,
    description: '실적·경제지표·연준·기업 이벤트 전체 일정',
    assets: 'assets/',
    body: `<header class="top"><div><nav class="nav" aria-label="사이트"><a href="index.html">${esc(SITE_TITLE)}</a></nav><h1>전체 일정</h1><p class="meta" id="updated">ET 기준 · 발표된 항목은 실제값과 서프라이즈 표시 · 숫자를 확인하지 못한 항목은 '검증 대기'</p></div>${settingsHtml()}</header>
<section class="block" id="fullcal" data-base="" aria-label="전체 일정"><div id="calendar"><div class="empty">불러오는 중…</div></div></section>
${FOOT.replace('href="corrections.html"', 'href="corrections.html"')}`,
  });
}

function renderCorrectionsPage() {
  const items = [...CORRECTIONS].sort((a, b) => b.date.localeCompare(a.date));
  return page({
    title: '정정 기록 — ' + SITE_TITLE,
    description: '리포트·사이트 숫자 정정 기록',
    assets: 'assets/',
    body: `<header class="top"><div><nav class="nav" aria-label="사이트"><a href="index.html">${esc(SITE_TITLE)}</a></nav><h1>정정 기록</h1><p class="meta">잘못 게시된 숫자를 바로잡은 내역과 근거입니다. 정정 배너는 해당 리포트에 7일간 표시됩니다.</p></div>${settingsHtml()}</header>
${items.map((c) => `<section class="block correction" id="${esc(c.id)}"><h2>${esc(c.title)} <small>${esc(c.date)} · <a href="reports/${esc(c.report_date)}.html">${esc(c.report_date)} 리포트</a></small></h2>
<article>${marked.parse(c.body)}</article></section>`).join('\n')}
${FOOT}`,
  });
}

// --- 자체 테스트 -----------------------------------------------------------------
function selftest() {
  const assert = require('assert');
  const nw = extract('# 리포트\n\n## 0. 헤드라인\n\n**장기금리 부담에 소형주 급락, 대형 지수는 방어**\n\n- 국채 금리 급등\n- 둘째 줄\n- 셋째 줄\n\n태그: #연준 #금리 #없는태그\n\n### 오늘의 핵심 TOP\n1. 항목A — ↓ · ★★★\n\n## 1. 대시보드\n');
  assert.strictEqual(nw.headline, '장기금리 부담에 소형주 급락, 대형 지수는 방어');
  assert.deepStrictEqual(nw.tags, ['연준·금리']); // 태그는 코드가 고정 어휘로 계산(LLM 태그 줄 무시)
  assert.strictEqual(nw.summary.length, 3);
  const old = extract('# R\n## 0. 오늘의 핵심 TOP\n\n1. 10년물 국채수익률 5.365%, 2002년 이후 최고치 — ↓ · ★★★★☆\n2. FOMC 의사록 공개 — → · ★★★\n3. 엔비디아 신제품 — ↑ · ★★★\n');
  assert(old.headline.startsWith('10년물 국채수익률 5.365%'));
  assert.strictEqual(old.summary.length, 2);
  assert(old.tags.length <= 2 && old.tags.includes('연준·금리'));
  const tbl = extract('# R\n## 0. 오늘의 핵심 TOP 10 (순위)\n\n| 순위 | 핵심 내용 | 방향 |\n|---|---|---|\n| 1 | Kevin Warsh 연준 의장 "물가가 너무 높다" 발언 + 10년물 4.481% 급등 | ↓ |\n| 2 | ADP 고용 부진 | ↓ |\n');
  assert(tbl.headline.includes('Warsh') && tbl.summary.length === 1, '표 형식 TOP');
  const weak = extract('# R\n## 0. 오늘의 핵심 TOP\n1. NFP (07-02)\n2. 10년물 4.48% 급등으로 증시 약세 마감\n3. 반도체 급락\n');
  assert(weak.headline.includes('·') && weak.headline.includes('10년물'), `약한 제목 보완: ${weak.headline}`);
  const none = extract('# R\n기준일: 2026-06-18\n\n## 1. 시장 개요\n\n6/18(목) 미국 3대 지수는 모두 상승 마감했습니다. 전날 FOMC 충격에서 반등한 모습입니다. 다만 유의가 필요합니다.\n');
  assert(none.headline.includes('상승 마감') && none.summary.length >= 1, 'TOP 없는 날 보완');
  // A1 회귀: 물결표 범위가 취소선으로 깨지지 않는다
  for (const r of ['76.5~81센트', '15~16%대', '-11~14%', '523억~543억']) {
    const h = require('./lib/md').parse(`범위 ${r} 입니다`);
    assert(h.includes(r) && !h.includes('<del>'), `물결표 범위 보존: ${r}`);
  }
  console.log('selftest 통과: 물결표 범위 4종 · 새 헤드라인 · 기존 TOP(목록/표) · 약한 제목 보완 · TOP 없는 날 · 태그 규칙');
}

function main() {
  if (process.argv.includes('--selftest')) return selftest();
  if (!fs.existsSync(LOGS)) { console.log('logs/ 없음 — 할 일 없음'); return; }

  const entries = [];
  for (const date of fs.readdirSync(LOGS).sort()) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) continue;
    const mdFile = path.join(LOGS, date, '3_report.md');
    // 리포트가 없는 날(파이프라인 중단·중복 건너뜀 등)은 조용히 건너뛴다. 사이트를 깨뜨리지 않는다.
    if (!fs.existsSync(mdFile)) continue;
    const md = fs.readFileSync(mdFile, 'utf8').split('\r\n').join('\n'); // CRLF 로 저장된 리포트도 있다
    if (!md.trim()) continue;
    let usDate = reportUsDate(md);
    if (!usDate) { try { usDate = JSON.parse(fs.readFileSync(path.join(LOGS, date, '0_data.json'), 'utf8')).us_date || null; } catch { /* 없으면 null */ } }
    // 미국 종가 기준일은 작성일(KST)보다 반드시 앞선다. 같거나 늦게 적혀 있으면(09/28·09/29 등) 직전 미국 거래일로 보정한다.
    if (!usDate || usDate >= date) usDate = C.prevTradingDay(date);
    entries.push({ date, us_date: usDate, md, ...extract(md) });
  }

  if (!entries.length) { console.log('빌드할 리포트 없음 — 사이트를 건드리지 않는다'); return; }

  assignTags(entries);
  entries.reverse(); // 최신순
  // 같은 미국 기준일 리포트(주말·휴장 재발행)는 목록에서 가장 먼저 게시된 1건만 대표로 보이고, 나머지 페이지는 그대로 두되 대표 리포트 안내를 단다.
  const repOf = new Map();
  for (const e of [...entries].reverse()) if (!repOf.has(e.us_date)) repOf.set(e.us_date, e);
  for (const e of entries) { const r = repOf.get(e.us_date); e.rep = r === e ? null : r; e.dups = r === e ? entries.filter((x) => x.us_date === e.us_date).length - 1 : 0; }
  fs.mkdirSync(REPORTS, { recursive: true });
  fs.mkdirSync(path.join(DOCS, 'data'), { recursive: true });
  fs.writeFileSync(path.join(DOCS, '.nojekyll'), '');
  entries.forEach((e, i) => {
    // 최신순 배열: 인덱스가 작을수록 최신. 이전 = 더 오래된(i+1), 다음 = 더 최신(i-1)
    fs.writeFileSync(path.join(REPORTS, `${e.date}.html`), renderReport(e, entries[i + 1], entries[i - 1], e.rep), 'utf8');
  });
  fs.writeFileSync(path.join(DOCS, 'index.html'), renderIndex(entries.filter((e) => !e.rep)), 'utf8');
  fs.writeFileSync(path.join(DOCS, 'calendar.html'), renderCalendarPage(), 'utf8');
  fs.writeFileSync(path.join(DOCS, 'corrections.html'), renderCorrectionsPage(), 'utf8');
  const sums = entries.map((e) => ({ date: e.date, us_date: e.us_date, headline: e.headline, summary: e.summary, tags: e.tags, ...(e.rep ? { rep: e.rep.date } : {}) }));
  fs.writeFileSync(path.join(DOCS, 'data', 'summaries.json'), JSON.stringify(sums, null, 1) + '\n', 'utf8');

  console.log(`빌드 완료: ${entries.length}건 (최신 ${entries[0].date}) → docs/`);
}

main();
