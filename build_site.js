#!/usr/bin/env node
'use strict';

// 5단계: logs/<날짜>/3_report.md → docs/reports/<날짜>.html + docs/index.html
// GitHub Pages(Deploy from branch: main /docs)가 docs/를 그대로 서빙한다.
//
// 사용법: node build_site.js
//   전체 리포트를 매번 다시 빌드한다. 출력이 결정론적이라 내용이 같으면 git diff도 없다.

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const ROOT = __dirname;
const LOGS = path.join(ROOT, 'logs');
const DOCS = path.join(ROOT, 'docs');
const REPORTS = path.join(DOCS, 'reports');

const SITE_TITLE = '미국 시장 데일리 브리핑';

// 카드 부제 = 그날 TOP 1위 항목. (H1은 모든 리포트가 같아서 구분에 쓸모가 없다)
// 형식: "1. 요약 — 방향 · ★등급 · AI영향 · 확신" → ' — ' 앞까지만 쓴다.
function summarize(md) {
  const m = /^\s*1\.\s+(.+)$/m.exec(md);
  if (!m) return '';
  return m[1]
    .split(' — ')[0]
    .replace(/\*\*/g, '')
    .replace(/[*`#]/g, '')
    .trim()
    .slice(0, 90);
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const weekday = (date) =>
  ['일', '월', '화', '수', '목', '금', '토'][new Date(date + 'T00:00:00Z').getUTCDay()];

const STYLE = `
:root{
  --bg:#faf9f7; --surface:#fff; --text:#1c1b19; --muted:#6b675f; --line:#e5e1da;
  --accent:#8a5a2b; --accent-soft:#f3ece3; --shadow:0 1px 2px rgba(0,0,0,.05),0 8px 24px -12px rgba(0,0,0,.12);
}
@media (prefers-color-scheme:dark){
  :root:not([data-theme="light"]){
    --bg:#161513; --surface:#1f1e1b; --text:#eceae5; --muted:#a09a90; --line:#312f2b;
    --accent:#d9a441; --accent-soft:#2a2621; --shadow:0 1px 2px rgba(0,0,0,.4),0 8px 24px -12px rgba(0,0,0,.6);
  }
}
:root[data-theme="dark"]{
  --bg:#161513; --surface:#1f1e1b; --text:#eceae5; --muted:#a09a90; --line:#312f2b;
  --accent:#d9a441; --accent-soft:#2a2621; --shadow:0 1px 2px rgba(0,0,0,.4),0 8px 24px -12px rgba(0,0,0,.6);
}
*{box-sizing:border-box}
body{
  margin:0; background:var(--bg); color:var(--text);
  font-family:"Pretendard","Apple SD Gothic Neo","Malgun Gothic",-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;
  font-size:16px; line-height:1.75; -webkit-text-size-adjust:100%;
}
.wrap{max-width:860px; margin:0 auto; padding:32px 20px 80px}
header.top{border-bottom:1px solid var(--line); padding-bottom:20px; margin-bottom:36px}
header.top a.home{color:var(--muted); text-decoration:none; font-size:13px; letter-spacing:.04em}
header.top a.home:hover{color:var(--accent)}
h1{font-size:27px; line-height:1.35; margin:.5em 0 .2em; letter-spacing:-.01em}
h2{font-size:21px; margin:2.2em 0 .6em; padding-bottom:.3em; border-bottom:1px solid var(--line); letter-spacing:-.01em}
h3{font-size:17px; margin:1.8em 0 .4em; color:var(--accent)}
h4{font-size:15px; margin:1.4em 0 .3em; color:var(--muted)}
p,ul,ol{margin:.7em 0}
li{margin:.25em 0}
a{color:var(--accent)}
hr{border:0; border-top:1px solid var(--line); margin:2.4em 0}
code{background:var(--accent-soft); padding:.12em .4em; border-radius:4px; font-size:.87em}
blockquote{
  margin:1em 0; padding:.6em 1em; border-left:3px solid var(--accent);
  background:var(--accent-soft); border-radius:0 6px 6px 0; color:var(--muted);
}
blockquote p{margin:.3em 0}
/* 표는 넓다. 페이지가 아니라 표 자체가 가로 스크롤되게 한다. */
.tablewrap{overflow-x:auto; margin:1.1em 0; border:1px solid var(--line); border-radius:8px; background:var(--surface)}
table{border-collapse:collapse; width:100%; font-size:14px; min-width:520px}
th,td{padding:9px 13px; text-align:left; border-bottom:1px solid var(--line); vertical-align:top}
th{background:var(--accent-soft); font-weight:600; white-space:nowrap}
tr:last-child td{border-bottom:0}
.meta{color:var(--muted); font-size:13px; margin:0}
.cards{list-style:none; padding:0; margin:0}
.cards li{margin:0 0 10px}
.cards a{
  display:flex; justify-content:space-between; align-items:baseline; gap:14px;
  background:var(--surface); border:1px solid var(--line); border-radius:10px;
  padding:15px 18px; text-decoration:none; color:var(--text); box-shadow:var(--shadow);
}
.cards a:hover{border-color:var(--accent)}
.cards .d{font-weight:600; font-variant-numeric:tabular-nums; white-space:nowrap}
.cards .s{color:var(--muted); font-size:13px; text-align:right; overflow:hidden}
.latest a{border-color:var(--accent); border-width:2px}
.badge{
  display:inline-block; background:var(--accent); color:var(--bg);
  font-size:11px; padding:1px 7px; border-radius:99px; margin-left:8px; vertical-align:middle;
}
footer{margin-top:56px; padding-top:20px; border-top:1px solid var(--line); color:var(--muted); font-size:13px}
`;

const page = (title, body, description) => `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light dark">
<meta name="description" content="${esc(description)}">
<title>${esc(title)}</title>
<style>${STYLE}</style>
</head>
<body>
<div class="wrap">
${body}
</div>
</body>
</html>
`;

function renderReport(date, md) {
  // marked가 만든 <table>을 가로 스크롤 컨테이너로 감싼다.
  const html = marked.parse(md).replace(/<table>/g, '<div class="tablewrap"><table>').replace(/<\/table>/g, '</table></div>');
  return page(
    `${date} 미국 시장 브리핑`,
    `<header class="top"><a class="home" href="../index.html">← ${esc(SITE_TITLE)}</a></header>
<article>
${html}
</article>
<footer>자동 생성 리포트 · 투자 조언이 아닙니다. 모든 수치는 원문 출처를 확인하세요.</footer>`,
    `${date} 미국 증시·연준·경제지표·AI 인프라 데일리 브리핑`
  );
}

function renderIndex(entries) {
  const items = entries
    .map(
      (e, i) => `  <li${i === 0 ? ' class="latest"' : ''}><a href="reports/${e.date}.html">
    <span class="d">${e.date} (${weekday(e.date)})${i === 0 ? '<span class="badge">최신</span>' : ''}</span>
    <span class="s">${esc(e.summary)}</span>
  </a></li>`
    )
    .join('\n');

  return page(
    SITE_TITLE,
    `<header class="top">
  <h1>${esc(SITE_TITLE)}</h1>
  <p class="meta">미국 증시·연준·경제지표·AI 인프라를 매일 수집·분석한 한국어 리포트 · 총 ${entries.length}건</p>
</header>
<ul class="cards">
${items}
</ul>
<footer>매 거래일 자동 생성 · 투자 조언이 아닙니다.</footer>`,
    '미국 증시·연준·경제지표·AI 인프라를 매일 분석한 한국어 데일리 리포트 모음'
  );
}

function main() {
  if (!fs.existsSync(LOGS)) {
    console.log('logs/ 없음 — 할 일 없음');
    return;
  }

  const entries = [];
  for (const date of fs.readdirSync(LOGS).sort()) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) continue;
    const md = path.join(LOGS, date, '3_report.md');
    // 리포트가 없는 날(파이프라인 중단 등)은 조용히 건너뛴다. 사이트를 깨뜨리지 않는다.
    if (!fs.existsSync(md)) continue;
    const body = fs.readFileSync(md, 'utf8');
    if (!body.trim()) continue;
    entries.push({ date, summary: summarize(body), html: renderReport(date, body) });
  }

  if (!entries.length) {
    console.log('빌드할 리포트 없음 — 사이트를 건드리지 않는다');
    return;
  }

  entries.reverse(); // 최신순
  fs.mkdirSync(REPORTS, { recursive: true });
  fs.writeFileSync(path.join(DOCS, '.nojekyll'), '');
  for (const e of entries) fs.writeFileSync(path.join(REPORTS, `${e.date}.html`), e.html, 'utf8');
  fs.writeFileSync(path.join(DOCS, 'index.html'), renderIndex(entries), 'utf8');

  console.log(`빌드 완료: ${entries.length}건 (최신 ${entries[0].date}) → docs/`);
}

main();
