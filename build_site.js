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
const { marked } = require('marked');
const { reportUsDate } = require('./scripts/should_run');

const ROOT = __dirname;
const LOGS = path.join(ROOT, 'logs');
const DOCS = path.join(ROOT, 'docs');
const REPORTS = path.join(DOCS, 'reports');

const SITE_TITLE = '미국 시장 데일리 브리핑';
const TAG_ORDER = ['연준', '금리', '물가', '고용', 'AI', '반도체', '실적', '빅테크', '에너지', '금융', '변동성', '환율'];
const TAG_RULES = {
  연준: /FOMC|연준|\bFed\b|파월|Powell|Warsh|연방준비/i,
  금리: /금리|국채|수익률|10년물|2년물|30년물|\bbp\b/i,
  물가: /CPI|PPI|PCE|물가|인플레/i,
  고용: /고용|NFP|비농업|실업|JOLTS|\bADP\b/i,
  AI: /\bAI\b|인공지능|데이터센터|GPU|HBM|하이퍼스케일러/i,
  반도체: /반도체|\bSOX\b|NVDA|엔비디아|\bTSM\b|AVGO|\bAMD\b|\bMU\b|마이크론|HBM|메모리/i,
  실적: /실적|어닝|가이던스|\bEPS\b|매출/i,
  빅테크: /MSFT|AAPL|AMZN|GOOGL|META|TSLA|마이크로소프트|애플|아마존|알파벳|메타|테슬라|빅테크/i,
  에너지: /유가|WTI|원유|Brent|OPEC|에너지|원자재/i,
  금융: /은행|금융|JPM|골드만|\bBAC\b|\bWFC\b|대출/i,
  변동성: /\bVIX\b|변동성|SKEW/i,
  환율: /환율|달러|DXY|원화|엔화/i,
};

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
    const tl = hb.find((l) => /^\s*태그\s*[:：]/.test(l));
    if (tl) tags = (tl.match(/#([가-힣A-Za-z0-9]+)/g) || []).map((t) => t.slice(1)).filter((t) => TAG_ORDER.includes(t));
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
  if (!tags.length) {
    const basis = (top.length ? top.join(' ') : '') + ' ' + headline + ' ' + summary.join(' ');
    tags = TAG_ORDER.map((t) => [t, (basis.match(new RegExp(TAG_RULES[t].source, 'gi')) || []).length]).filter(([, n]) => n > 0)
      .sort((a, b) => b[1] - a[1] || TAG_ORDER.indexOf(a[0]) - TAG_ORDER.indexOf(b[0])).slice(0, 4).map(([t]) => t);
  }
  const searchText = [headline, ...summary, ...tags, ...top.slice(0, 12)].join(' ');
  return { headline, summary, tags, searchText };
}

// --- 템플릿 --------------------------------------------------------------------
const HEAD_SCRIPT = `<script>try{var t=localStorage.getItem('enb.theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);if(localStorage.getItem('enb.color')==='us')document.documentElement.setAttribute('data-color','us')}catch(e){}</script>`;

const settingsHtml = () => `<div class="settings" aria-label="표시 설정">
    <div class="seg" role="group" aria-label="테마"><button type="button" data-set-theme="auto" aria-pressed="true">자동</button><button type="button" data-set-theme="light" aria-pressed="false">라이트</button><button type="button" data-set-theme="dark" aria-pressed="false">다크</button></div>
    <div class="seg" role="group" aria-label="상승 하락 색상"><button type="button" data-set-color="kr" aria-pressed="true">한국식 <span class="up">▲</span><span class="down">▼</span></button><button type="button" data-set-color="us" aria-pressed="false">미국식 <span class="up">▲</span><span class="down">▼</span></button></div>
  </div>`;

const FOOT = `<footer>
  <p>자동 생성 리포트 · 투자 조언이 아닙니다. 모든 수치는 원문 출처를 확인하세요.</p>
  <p>데이터 출처: Yahoo Finance · CBOE · Finnhub · FRED · Nasdaq. 시세는 지연될 수 있으며 기준시각(ET)은 각 항목에 표기됩니다.</p>
</footer>`;

const page = ({ title, description, body, assets, wrapClass = '' }) => `<!doctype html>
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
${body}
</div>
<script src="${assets}site.js" defer></script>
</body>
</html>
`;

function renderReport(e, older, newer) {
  const html = marked.parse(e.md).replace(/<table>/g, '<div class="tablewrap"><table>').replace(/<\/table>/g, '</table></div>');
  const prev = older ? `<a href="${older.date}.html" rel="prev">‹ 이전 (${older.date})</a>` : `<span aria-disabled="true">‹ 이전</span>`;
  const next = newer ? `<a href="${newer.date}.html" rel="next">다음 (${newer.date}) ›</a>` : `<span aria-disabled="true">다음 ›</span>`;
  const nav = `<nav class="nav" aria-label="리포트 이동"><a href="../index.html" rel="up">← 목록</a>${prev}${next}</nav>`;
  return page({
    title: `${e.date} 미국 시장 브리핑`,
    description: e.headline,
    assets: '../assets/',
    wrapClass: 'report-wrap',
    body: `<header class="top"><div><nav class="nav" aria-label="사이트"><a href="../index.html">${esc(SITE_TITLE)}</a></nav></div>${settingsHtml()}</header>
${nav}
<article>
${html}
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
    .concat(TAG_ORDER.filter((t) => tagCount[t]).map((t) => `<button type="button" data-tag="${t}" aria-pressed="false">${t} (${tagCount[t]})</button>`)).join('');

  const card = (e, i) => `    <li data-tags="${esc(e.tags.join(','))}" data-text="${esc(e.searchText)}"${i === 0 ? ' class="latest"' : ''}><a class="card" href="reports/${e.date}.html">
      <div class="row1"><span class="d">${e.date} (${weekday(e.date)})</span>${e.us_date ? `<span>미국 기준일 ${e.us_date}</span>` : ''}${i === 0 ? '<span class="badge">최신</span>' : ''}</div>
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
  <div id="heatmap" class="heat"><div class="empty">불러오는 중…</div></div>
  <h2 style="margin-top:22px">다가오는 2주 일정 <small>ET 기준 · 발표된 항목은 실제값과 서프라이즈 표시</small></h2>
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

// --- 자체 테스트 -----------------------------------------------------------------
function selftest() {
  const assert = require('assert');
  const nw = extract('# 리포트\n\n## 0. 헤드라인\n\n**장기금리 부담에 소형주 급락, 대형 지수는 방어**\n\n- 첫째 줄\n- 둘째 줄\n- 셋째 줄\n\n태그: #연준 #금리 #없는태그\n\n### 오늘의 핵심 TOP\n1. 항목A — ↓ · ★★★\n\n## 1. 대시보드\n');
  assert.strictEqual(nw.headline, '장기금리 부담에 소형주 급락, 대형 지수는 방어');
  assert.deepStrictEqual(nw.tags, ['연준', '금리']);
  assert.strictEqual(nw.summary.length, 3);
  const old = extract('# R\n## 0. 오늘의 핵심 TOP\n\n1. 10년물 국채수익률 5.365%, 2002년 이후 최고치 — ↓ · ★★★★☆\n2. FOMC 의사록 공개 — → · ★★★\n3. 엔비디아 신제품 — ↑ · ★★★\n');
  assert(old.headline.startsWith('10년물 국채수익률 5.365%'));
  assert.strictEqual(old.summary.length, 2);
  assert(old.tags.includes('금리') && old.tags.includes('연준'));
  const tbl = extract('# R\n## 0. 오늘의 핵심 TOP 10 (순위)\n\n| 순위 | 핵심 내용 | 방향 |\n|---|---|---|\n| 1 | Kevin Warsh 연준 의장 "물가가 너무 높다" 발언 + 10년물 4.481% 급등 | ↓ |\n| 2 | ADP 고용 부진 | ↓ |\n');
  assert(tbl.headline.includes('Warsh') && tbl.summary.length === 1, '표 형식 TOP');
  const weak = extract('# R\n## 0. 오늘의 핵심 TOP\n1. NFP (07-02)\n2. 10년물 4.48% 급등으로 증시 약세 마감\n3. 반도체 급락\n');
  assert(weak.headline.includes('·') && weak.headline.includes('10년물'), `약한 제목 보완: ${weak.headline}`);
  const none = extract('# R\n기준일: 2026-06-18\n\n## 1. 시장 개요\n\n6/18(목) 미국 3대 지수는 모두 상승 마감했습니다. 전날 FOMC 충격에서 반등한 모습입니다. 다만 유의가 필요합니다.\n');
  assert(none.headline.includes('상승 마감') && none.summary.length >= 1, 'TOP 없는 날 보완');
  console.log('selftest 통과: 새 헤드라인 · 기존 TOP(목록/표) · 약한 제목 보완 · TOP 없는 날 · 태그 규칙');
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
    entries.push({ date, us_date: usDate, md, ...extract(md) });
  }

  if (!entries.length) { console.log('빌드할 리포트 없음 — 사이트를 건드리지 않는다'); return; }

  entries.reverse(); // 최신순
  fs.mkdirSync(REPORTS, { recursive: true });
  fs.mkdirSync(path.join(DOCS, 'data'), { recursive: true });
  fs.writeFileSync(path.join(DOCS, '.nojekyll'), '');
  entries.forEach((e, i) => {
    // 최신순 배열: 인덱스가 작을수록 최신. 이전 = 더 오래된(i+1), 다음 = 더 최신(i-1)
    fs.writeFileSync(path.join(REPORTS, `${e.date}.html`), renderReport(e, entries[i + 1], entries[i - 1]), 'utf8');
  });
  fs.writeFileSync(path.join(DOCS, 'index.html'), renderIndex(entries), 'utf8');
  const sums = entries.map((e) => ({ date: e.date, us_date: e.us_date, headline: e.headline, summary: e.summary, tags: e.tags }));
  fs.writeFileSync(path.join(DOCS, 'data', 'summaries.json'), JSON.stringify(sums, null, 1) + '\n', 'utf8');

  console.log(`빌드 완료: ${entries.length}건 (최신 ${entries[0].date}) → docs/`);
}

main();
