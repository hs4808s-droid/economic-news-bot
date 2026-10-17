#!/usr/bin/env node
'use strict';
// DoD-2: 홈페이지에 실제로 들어가 모든 버튼·탭·필터를 눌러 본다 (Playwright, headless Chromium).
//   npm run e2e                                  → 로컬 서버(http://localhost:8080/, docs/ 를 서빙 중이어야 함)
//   node scripts/e2e_site.js --base https://hs4808s-droid.github.io/economic-news-bot/ --tag live
//   옵션: --out <폴더> (스크린샷, 기본 logs/<오늘 KST>/e2e) · --tag <접두어>
// file:// 로 열면 JSON fetch 가 실패하므로 http 서버만 허용한다. 하나라도 실패하면 exit 1.

const fs = require('fs');
const os = require('os');
const path = require('path');
const { chromium } = require('playwright-core');
const C = require('../lib/common');

const args = process.argv.slice(2);
const opt = (k, d) => (args.includes(k) ? args[args.indexOf(k) + 1] : d);
const BASE = opt('--base', 'http://localhost:8080/').replace(/\/?$/, '/');
const TAG = opt('--tag', 'local');
const OUT = path.resolve(opt('--out', path.join(C.ROOT, 'logs', C.kstDate(), 'e2e')));
if (!/^https?:/.test(BASE)) { console.error('http(s) 주소만 허용 (file:// 금지)'); process.exit(2); }
fs.mkdirSync(OUT, { recursive: true });

function findChrome() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  const roots = [path.join(os.homedir(), 'AppData', 'Local', 'ms-playwright'), path.join(os.homedir(), '.cache', 'ms-playwright'), path.join(os.homedir(), 'Library', 'Caches', 'ms-playwright')];
  for (const r of roots) {
    if (!fs.existsSync(r)) continue;
    for (const d of fs.readdirSync(r).filter((x) => /^chromium-\d+$/.test(x)).sort().reverse()) {
      for (const sub of ['chrome-win64/chrome.exe', 'chrome-win/chrome.exe', 'chrome-linux/chrome', 'chrome-linux64/chrome', 'chrome-mac/Chromium.app/Contents/MacOS/Chromium']) {
        const p = path.join(r, d, sub);
        if (fs.existsSync(p)) return p;
      }
    }
  }
  return undefined; // playwright 기본 탐색
}

const results = [];
const check = (name, ok, detail = '') => { results.push({ name, ok: !!ok, detail }); console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? ' — ' + detail : ''}`); };
const BAD_TEXT = /undefined|NaN|\[object/;

async function main() {
  const browser = await chromium.launch({ executablePath: findChrome(), headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'ko-KR' });
  const page = await ctx.newPage();
  const consoleErrors = [], badResponses = [];
  page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
  page.on('pageerror', (e) => consoleErrors.push('pageerror: ' + e.message));
  page.on('response', (r) => { if (r.status() >= 400) badResponses.push(`${r.status()} ${r.url()}`); });
  page.on('requestfailed', (r) => badResponses.push(`failed ${r.url()}`));

  const goIndex = async () => { await page.goto(BASE, { waitUntil: 'networkidle' }); await page.waitForSelector('#tiles .tile', { timeout: 15000 }); };
  await goIndex();

  // 1. 지표 타일
  const tiles = await page.$$eval('.tile', (els) => els.map((e) => ({ l: e.querySelector('.l')?.textContent, v: e.querySelector('.v')?.textContent, c: e.querySelector('.c')?.textContent })));
  check('대시보드 타일 14개 렌더링', tiles.length === 14, `${tiles.length}개`);
  const badTiles = tiles.filter((t) => !/^[\d,]+(\.\d+)?%?$/.test((t.v || '').trim()) || BAD_TEXT.test(t.v + t.c) || !(t.c || '').trim() || /N\/A/.test(t.v + t.c));
  check('모든 타일이 숫자(undefined·NaN·N/A·빈칸 없음)', badTiles.length === 0, badTiles.map((t) => `${t.l}=${t.v}/${t.c}`).join('; '));
  check('타일 스파크라인 SVG', (await page.$$eval('.tile svg polyline', (e) => e.length)) === 14);
  check('타일 등락 기호(▲▼) 병기', (await page.$$eval('.tile .c', (e) => e.every((x) => /[▲▼–]/.test(x.textContent)))));
  const upd = await page.textContent('#updated');
  check('최종 업데이트(KST/ET)·미국 기준일 표시', /KST/.test(upd) && /ET/.test(upd) && /\d{4}-\d{2}-\d{2}/.test(upd), upd);

  // 2. 히트맵 기간 토글
  const snap = () => page.$$eval('#heatmap .cell', (els) => els.map((e) => ({ p: e.querySelector('.p').textContent, bg: getComputedStyle(e).backgroundColor })));
  let prev = null;
  for (const [per, label] of [['1d', '1D'], ['5d', '5D'], ['1m', '1M'], ['ytd', 'YTD']]) {
    await page.click(`#heat-ctrl [data-period="${per}"]`);
    const now = await snap();
    const pressed = await page.getAttribute(`#heat-ctrl [data-period="${per}"]`, 'aria-pressed');
    check(`히트맵 ${label}: 15개 셀·숫자`, now.length === 15 && now.every((c) => /^[▲▼–] [+-]?\d/.test(c.p) && !BAD_TEXT.test(c.p)) && pressed === 'true', `${now.length}개`);
    if (prev) check(`히트맵 ${label}: 이전 기간과 값·색이 바뀜`, now.some((c, i) => c.p !== prev[i].p) && now.some((c, i) => c.bg !== prev[i].bg));
    prev = now;
  }
  await page.click('#heat-ctrl [data-period="1d"]');

  // 2-b. 히트맵 정렬·배치 (A4): 선택 기간 수익률 내림차순, 15칸이 모두 보이고 잘리지 않음
  for (const per of ['1d', '5d', '1m', 'ytd']) {
    await page.click(`#heat-ctrl [data-period="${per}"]`);
    const vals = await page.$$eval('#heatmap .cell', (els) => els.map((e) => Number(e.getAttribute('data-v'))));
    const boxes = await page.$$eval('#heatmap .cell', (els) => els.map((e) => { const r = e.getBoundingClientRect(); return { l: r.left, r: r.right, w: r.width }; }));
    const hm = await page.$eval('#heatmap', (e) => ({ cw: e.clientWidth, sw: e.scrollWidth, h: e.getBoundingClientRect().height }));
    check(`히트맵 ${per}: 수익률 내림차순 정렬`, vals.every((v, i) => i === 0 || vals[i - 1] >= v), vals.join(','));
    check(`히트맵 ${per}: 15칸 모두 컨테이너 안(잘림 없음)`, boxes.length === 15 && hm.sw <= hm.cw + 1 && boxes.every((b) => b.w > 60), `${hm.cw}/${hm.sw} h=${Math.round(hm.h)}`);
  }
  await page.click('#heat-ctrl [data-period="1d"]');
  const gap = await page.evaluate(() => { const hm = document.getElementById('heatmap').getBoundingClientRect(); const nx = document.querySelector('#calendar').getBoundingClientRect(); return Math.round(nx.top - hm.bottom); });
  check('히트맵 아래 빈 영역 없음(다음 블록까지 간격 < 160px)', gap < 160, `${gap}px`);

  // 3. 홈 일정: 탭 2개(실적·지표·연준), 기본은 관심·대형주 / ★★★만
  const tabIds = await page.$$eval('#calendar [role=tab]', (e) => e.map((x) => x.getAttribute('data-tab')));
  check('홈 일정 탭 = 실적·지표·연준 (기업 이벤트는 전체 보기로)', tabIds.join(',') === 'earnings,macro', tabIds.join(','));
  await page.click('#calendar [data-tab="earnings"]');
  const eh0 = await page.$$eval('#cal-panel thead th', (e) => e.map((x) => x.textContent.trim()));
  const er0 = await page.$$eval('#cal-panel tbody tr', (trs) => trs.map((tr) => [...tr.children].map((td) => td.textContent.trim())));
  check('홈 실적 탭: 열 5개 = 날짜·종목·예상 EPS·실제 EPS·서프라이즈', eh0.length === 5 && ['날짜', '종목', '예상 EPS', '실제 EPS', '서프라이즈'].every((h, i) => eh0[i] === h), eh0.join(','));
  const fullN = Number(/전체 (\d+)건/.exec(await page.textContent('#cal-panel'))[1]);
  check('홈 실적 탭: 기본 화면은 전체보다 적은 관심·대형주만', er0.length > 0 && er0.length < fullN, `${er0.length} / 전체 ${fullN}`);
  const tickers0 = er0.map((r) => r[1].split(' ')[0]);
  check('홈 실적 탭: 중소형(NFLX·COF·CB) 미표시, 대형주(MSFT·GOOGL) 표시', !tickers0.includes('COF') && !tickers0.includes('CB') && tickers0.includes('MSFT') && tickers0.includes('GOOGL'), tickers0.join(','));
  check('홈 실적 탭: 검증 대기·undefined 없음, 숫자만', !er0.some((r) => BAD_TEXT.test(r.join(' '))), '');
  await page.click('#calendar [data-tab="macro"]');
  const top3 = await page.$$eval('#cal-panel tbody tr', (trs) => trs.length);
  const toggle = page.locator('#macro-toggle');
  check('지표·연준 탭: "전체 보기" 토글 존재(기본 ★★★만)', (await toggle.count()) === 1 && (await toggle.getAttribute('aria-pressed')) === 'false', `rows=${top3}`);
  await toggle.click();
  const allRows = await page.$$eval('#cal-panel tbody tr', (trs) => trs.length);
  const sched = await page.$$eval('#cal-panel .sched', (e) => e.map((x) => x.textContent).join(' '));
  check('토글 클릭: 전체 보기로 전환(aria-pressed=true), 행 수 증가', (await toggle.getAttribute('aria-pressed')) === 'true' && allRows >= top3, `${top3} → ${allRows}`);
  check('값이 없는 일정(베이지북·실질임금 등)은 "일정" 한 줄로 축약', /일정/.test(sched) && /베이지북|실질임금|건축허가/.test(sched), sched.slice(0, 80));
  await toggle.click();
  check('토글 재클릭: ★★★만 보기로 복귀', (await toggle.getAttribute('aria-pressed')) === 'false' && (await page.$$eval('#cal-panel tbody tr', (t) => t.length)) === top3);
  await page.locator('#calendar').screenshot({ path: path.join(OUT, `${TAG}_home_calendar_macro.png`) });
  await page.click('#calendar [data-tab="earnings"]');
  await page.locator('#calendar').screenshot({ path: path.join(OUT, `${TAG}_home_calendar_earnings.png`) });

  // 3-a. 전체 보기 링크 → calendar.html (전 열 · 기업 이벤트 탭 포함)
  await page.click('#cal-panel .more');
  await page.waitForSelector('#fullcal #calendar [role=tab]');
  check('"전체 보기" 클릭 → calendar.html 이동', /calendar\.html$/.test(page.url()), page.url());
  const tabIds3 = await page.$$eval('#calendar [role=tab]', (e) => e.map((x) => x.getAttribute('data-tab')));
  check('전체 일정 페이지: 탭 3개(실적·지표·기업 이벤트)', tabIds3.length === 3, tabIds3.join(','));
  for (const tab of tabIds3) {
    await page.click(`#calendar [data-tab="${tab}"]`);
    const rows = await page.$$eval('#cal-panel tbody tr', (e) => e.length);
    const empty = await page.$$eval('#cal-panel .empty', (e) => e.map((x) => x.textContent).join(''));
    const text = await page.textContent('#cal-panel');
    check(`전체 일정 탭 ${tab}: 행 ${rows}개 또는 '예정 없음'`, (rows > 0 || /예정 없음/.test(empty)) && !BAD_TEXT.test(text), `rows=${rows}`);
  }

  // 3-b. 정정 검증 (2026-10-14 CPI 사고 회귀): 전체 일정 페이지에서 값과 표기를 확인한다
  const rowsOf = async () => page.$$eval('#cal-panel tbody tr', (trs) => trs.map((tr) => [...tr.children].map((td) => td.textContent.trim())));
  await page.click('#calendar [data-tab="macro"]');
  const mh = await page.$$eval('#cal-panel thead th', (e) => e.map((x) => x.textContent.trim()));
  const mrows = await rowsOf();
  await page.locator('#calendar').screenshot({ path: path.join(OUT, `${TAG}_calendar_macro.png`) });
  check('지표·연준 탭: 열 = 측정 기준·직전·예상(컨센서스)·발표·서프라이즈', ['측정 기준', '직전', '예상(컨센서스)', '발표', '서프라이즈'].every((h) => mh.includes(h)), mh.join(','));
  check('지표·연준 탭: 혼합 행("CPI/Core CPI") 없음', !mrows.some((r) => /CPI\/Core CPI/.test(r[2])));
  const numRows = mrows.filter((r) => /\d/.test(r.slice(5).join('')) && !/검증 대기/.test(r.slice(5).join('')));
  check('지표·연준 탭: 숫자가 있는 행은 모두 측정 기준 표기', numRows.every((r) => r[3] && r[3] !== '—'), numRows.filter((r) => r[3] === '—').map((r) => r[2]).join('; '));
  check('지표·연준 탭: 서프라이즈에 단위(%p/K) 표기', mrows.filter((r) => /\d/.test(r[8])).every((r) => /%p|K/.test(r[8])), mrows.map((r) => r[8]).join(' '));
  const cpi = mrows.filter((r) => /^\d월 (Core )?CPI/.test(r[2]) && r[0] === '2026-10-14');
  if (cpi.length) {
    const WANT = { '9월 CPI (MoM)': ['+0.4%', '+0.6%', '+0.6%', '0.0%p'], '9월 CPI (YoY)': ['+3.4%', '+3.6%', '+3.7%', '+0.1%p'], '9월 Core CPI (MoM)': ['+0.3%', '+0.2%', '+0.3%', '+0.1%p'], '9월 Core CPI (YoY)': ['+2.4%', '+2.5%', '+2.6%', '+0.1%p'] };
    check('10/14 CPI 정확히 4줄 (헤드라인·근원 × 전월비·전년비)', cpi.length === 4, cpi.map((r) => r[2]).join(' | '));
    for (const [t, want] of Object.entries(WANT)) {
      const r = cpi.find((x) => x[2] === t);
      check(`10/14 ${t}: 직전·예상·발표·서프라이즈 = ${want.join(' / ')}`, !!r && [r[5], r[6], r[7], r[8].replace(/^[▲▼–]\s*/, '')].join('|') === want.join('|'), r ? [r[5], r[6], r[7], r[8]].join(' / ') : '행 없음');
    }
  } else console.log('  (건너뜀) 창 안에 10/14 CPI 가 없음 — 날짜가 지나면 정상');
  // 10/15 PPI·소매판매: 예상값(출처)·서프라이즈가 채워짐 (A3)
  const WANTM = { '9월 PPI (MoM)': ['+0.5%', '+0.6%', '+1.3%', '+0.7%p'], '9월 소매판매 (MoM)': ['+1.3%', '+0.3%', '+0.8%', '+0.5%p'] };
  for (const [t, want] of Object.entries(WANTM)) {
    const r = mrows.find((x) => x[2] === t && x[0] === '2026-10-15');
    if (!r) { console.log(`  (건너뜀) 창 안에 10/15 ${t} 없음`); continue; }
    check(`10/15 ${t}: 직전·예상·발표·서프라이즈 = ${want.join(' / ')}`, [r[5], r[6], r[7], r[8].replace(/^[▲▼–]\s*/, '')].join('|') === want.join('|'), [r[5], r[6], r[7], r[8]].join(' / '));
  }
  await page.click('#calendar [data-tab="earnings"]');
  const eh = await page.$$eval('#cal-panel thead th', (e) => e.map((x) => x.textContent.trim()));
  const erows = await rowsOf();
  await page.locator('#calendar').screenshot({ path: path.join(OUT, `${TAG}_calendar_earnings.png`) });
  check('실적 탭: 열 = EPS 기준·전년 동기 EPS·실제 매출·매출 서프라이즈·출처', ['EPS 기준', '전년 동기 EPS', '실제 매출', '매출 서프라이즈', '출처'].every((h) => eh.includes(h)), eh.join(','));
  const hasAct = erows.filter((r) => /^\$/.test(r[6] || '') || /검증 대기/.test(r[6] || ''));
  check('실적 탭: 실제 EPS 가 있는 행은 EPS 기준 표기(조정/GAAP/Core FFO/미확인)', hasAct.every((r) => /조정|GAAP|미확인|Core FFO/.test(r[3])), hasAct.filter((r) => !/조정|GAAP|미확인|Core FFO/.test(r[3])).map((r) => r[1]).join(','));
  const WANTE = { JPM: ['조정', '$5.07', '$5.75'], C: ['조정', '$2.24', '$2.85'], GS: ['GAAP', '$12.25', '$17.01'], WFC: ['GAAP', '$1.66', '$1.87'], BAC: ['조정', '$1.04', '$1.08'], MS: ['GAAP', '$2.80', '$3.03'], BLK: ['조정', '$11.55', '$15.93'], JNJ: ['조정', '$2.80', '$2.59'], UNH: ['조정', '$2.92', '$4.69'], ASML: ['GAAP', '$5.49', '$12.95'], PGR: ['GAAP', '$4.45', '$4.37'], PLD: ['Core FFO', '$1.49', '$1.60'], SCHW: ['조정', '$1.31', '$1.69'], TSM: ['GAAP', '$2.92', '$4.60'] };
  const shown = Object.keys(WANTE).filter((t) => erows.some((r) => r[1].split(' ')[0] === t));
  for (const t of shown) { const r = erows.find((x) => x[1].split(' ')[0] === t); check(`실적 ${t}: 기준·전년·실제 EPS = ${WANTE[t].join(' / ')}`, [r[3], r[4], r[6]].join('|') === WANTE[t].join('|'), [r[3], r[4], r[6]].join(' / ')); }
  const links = await page.$$eval('#cal-panel tbody a', (a) => a.map((x) => x.href));
  check('실적 탭: 검증된 행에 1차 출처 링크', shown.length === 0 || links.length >= shown.length, `${links.length}개`);
  const apld = erows.find((r) => r[1].startsWith('APLD'));
  if (apld) check('실적 APLD(서프라이즈 97% 초과): 숫자 대신 검증 대기', /검증 대기/.test(apld.join('|')) && !/\+?0\.30/.test(apld[7]), apld.join(' | '));
  // 실적 중복 제거(A2): 같은 종목은 한 줄
  const tk = erows.map((r) => r[1].split(' ')[0]);
  const dupT = tk.filter((t, i) => tk.indexOf(t) !== i);
  check('실적 탭: 같은 종목이 두 날짜에 나오지 않음(GE·PM·TSLA·GOOGL·MA·XOM·PGR)', !dupT.some((t) => ['GE', 'PM', 'TSLA', 'GOOGL', 'MA', 'XOM', 'PGR'].includes(t)), dupT.join(','));
  const held = erows.filter((r) => ['VLO', 'PSX', 'SNDK', 'BA', 'TSLA'].includes(r[1].split(' ')[0]));
  check('실적 탭: VLO·PSX·SNDK·BA·TSLA 는 숫자 대신 검증 대기', held.length > 0 && held.every((r) => /검증 대기/.test(r.join('|'))), held.map((r) => r[1] + ':' + r[5]).join(' '));
  await goIndex();

  // 4. 태그 필터
  const total = await page.$$eval('#archive li[data-tags]', (e) => e.length);
  const countOf = async () => Number((await page.textContent('#count')).replace(/\D/g, ''));
  check('아카이브 전체 건수 = 카드 수', (await countOf()) === total, `${total}건`);
  const chips = await page.$$eval('#tagchips button', (e) => e.map((x) => ({ tag: x.getAttribute('data-tag'), t: x.textContent })));
  let changed = 0;
  for (const ch of chips.filter((c) => c.tag)) {
    await page.click(`#tagchips [data-tag="${ch.tag}"]`);
    const n = await countOf();
    const expect = Number(/\((\d+)\)/.exec(ch.t)[1]);
    const visible = await page.$$eval('#archive li[data-tags]:not([hidden])', (e) => e.length);
    check(`태그 '${ch.tag}': 건수 ${expect}건과 일치`, n === expect && visible === expect, `표시 ${visible}`);
    if (n !== total) changed++;
  }
  check('태그 필터가 건수를 실제로 바꿈', changed > 0, `${changed}개 태그에서 변동`);
  await page.click('#tagchips [data-tag=""]');
  check("'전체' 복귀", (await countOf()) === total);

  // 5. 검색
  await page.fill('#q', 'FOMC');
  const nF = await countOf();
  check("검색 'FOMC': 결과 있음", nF > 0 && nF <= total && (await page.isHidden('#noresult')), `${nF}건`);
  await page.fill('#q', 'zzqxkw없는단어');
  check('없는 단어: 0건 + 빈 결과 문구', (await countOf()) === 0 && (await page.isVisible('#noresult')) && /검색 결과가 없습니다/.test(await page.textContent('#noresult')));
  await page.fill('#q', '');
  check('검색 지움: 전체 복귀', (await countOf()) === total && (await page.isHidden('#noresult')));

  // 6. 상승/하락 색상 전환 (+ 새로고침 후 유지)
  const upColor = () => page.evaluate(() => getComputedStyle(document.querySelector('.tile .c.up, .tile .c.down') || document.body).color);
  const upVar = () => page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--up').trim());
  const krUp = await upVar();
  await page.click('[data-set-color="us"]');
  const usUp = await upVar();
  check('미국식 전환: --up 색 변경', krUp !== usUp && (await page.getAttribute('html', 'data-color')) === 'us', `${krUp} → ${usUp}`);
  await page.reload({ waitUntil: 'networkidle' });
  check('새로고침 후에도 미국식 유지', (await page.getAttribute('html', 'data-color')) === 'us' && (await upVar()) === usUp && (await page.getAttribute('[data-set-color="us"]', 'aria-pressed')) === 'true');
  await page.waitForSelector('#tiles .tile');
  await page.screenshot({ path: path.join(OUT, `${TAG}_index_us-color.png`) });
  await page.click('[data-set-color="kr"]');
  check('한국식 복귀', (await upVar()) === krUp);

  // 7. 라이트/다크
  for (const th of ['light', 'dark']) {
    await page.click(`[data-set-theme="${th}"]`);
    const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    check(`${th} 테마 렌더링`, (await page.getAttribute('html', 'data-theme')) === th && bg !== '', bg);
    await page.screenshot({ path: path.join(OUT, `${TAG}_index_${th}.png`) });
  }
  const bgs = [];
  for (const th of ['light', 'dark']) { await page.click(`[data-set-theme="${th}"]`); bgs.push(await page.evaluate(() => getComputedStyle(document.body).backgroundColor)); }
  check('라이트와 다크 배경이 다름', bgs[0] !== bgs[1], bgs.join(' vs '));
  await page.click('[data-set-theme="auto"]');

  // 8. 아카이브 카드 전부 순회 — 모든 reports/*.html 이 200
  const hrefs = await page.$$eval('#archive a.card', (e) => e.map((a) => a.href));
  const bad = [];
  for (let i = 0; i < hrefs.length; i += 8) {
    await Promise.all(hrefs.slice(i, i + 8).map(async (h) => { const r = await ctx.request.get(h); if (r.status() !== 200) bad.push(`${r.status()} ${h}`); }));
  }
  check(`아카이브 카드 ${hrefs.length}개 링크 전부 200`, hrefs.length >= 65 && bad.length === 0, bad.slice(0, 3).join('; ') || `${hrefs.length}건`);
  const sums = await (await ctx.request.get(BASE + 'data/summaries.json')).json();
  check('카드 개수 = summaries.json 중 대표 리포트(rep 없는 것) 개수', sums.filter((x) => !x.rep).length === hrefs.length, `${hrefs.length}/${sums.length}`);
  const usd = {}; sums.filter((x) => !x.rep).forEach((x) => (usd[x.us_date] = (usd[x.us_date] || 0) + 1));
  check('목록에서 같은 미국 기준일 중복 없음(10/03·04·05 → 1건)', Object.values(usd).every((n) => n === 1) && !hrefs.some((h) => /2026-10-04|2026-10-05/.test(h)) && hrefs.some((h) => /2026-10-03/.test(h)), Object.entries(usd).filter(([, n]) => n > 1).join(','));
  check('기준일=게시일 오표시 보정(09/28→09/25, 09/29→09/28)', sums.find((x) => x.date === '2026-09-28')?.us_date === '2026-09-25' && sums.find((x) => x.date === '2026-09-29')?.us_date === '2026-09-28' && sums.every((x) => x.us_date < x.date));
  const cardInfo = await page.$$eval('#archive a.card', (e) => e.map((a) => ({ hl: a.querySelector('.hl')?.textContent || '', tags: a.querySelectorAll('.tag').length })));
  check('모든 카드에 헤드라인, 태그는 최대 2개', cardInfo.every((c) => c.hl.trim().length >= 8 && c.tags <= 2 && !BAD_TEXT.test(c.hl)), `${cardInfo.filter((c) => !c.hl.trim()).length}건 빈 제목`);

  // 8-b. 배너·정정·내부 메모·중복 안내 (A4)
  check('홈에는 정정 배너 없음(해당 리포트에만 표시)', (await page.$$('.notice')).length === 0);
  const chipsN = await page.$$eval('#tagchips button[data-tag]:not([data-tag=""])', (e) => e.map((x) => Number(/\((\d+)\)/.exec(x.textContent)[1])));
  check('태그 필터가 쓸모 있음: 어떤 태그도 전체의 60% 초과 안 함', Math.max(...chipsN) <= total * 0.6, `최대 ${Math.max(...chipsN)}/${total}`);
  check('태그 칩에 정의 툴팁(title)', (await page.$$eval('#tagchips button[data-tag]:not([data-tag=""])', (e) => e.every((x) => (x.title || '').length > 8))));
  const rp = await ctx.newPage();
  await rp.goto(BASE + 'reports/2026-10-15.html', { waitUntil: 'networkidle' });
  const ban = await rp.$$eval('.notice', (e) => e.map((x) => x.textContent));
  check('10/15 리포트: 정정 배너 + 정정 기록 링크', ban.some((t) => /정정 안내/.test(t)) && (await rp.$$('.notice a[href*="corrections.html"]')).length === 1, ban.join('|').slice(0, 60));
  check('10/15 리포트: 자동 검증 경고 배너 없음', !/자동 검증 경고/.test(await rp.textContent('body')));
  const txt15 = await rp.textContent('article');
  check('독자 화면에 내부 메모 없음([P1]·Yahoo chart API·facts.json·logs 폴더)', !/\[P[1-4]\]|Yahoo chart API|facts\.json|logs 폴더/.test(txt15));
  check('리포트 맨 아래 "출처" 목록', (await rp.$$('article .sources h2')).length === 1);
  await rp.click('.notice a[href*="corrections.html"]');
  await rp.waitForLoadState('networkidle');
  check('정정 배너 링크 → corrections.html 해당 항목', /corrections\.html#2026-10-15-cpi$/.test(rp.url()) && /CPI/.test(await rp.textContent('[id="2026-10-15-cpi"]')), rp.url());
  await rp.goto(BASE + 'reports/2026-10-14.html', { waitUntil: 'networkidle' });
  check('다른 날짜 리포트(10/14)에는 정정 배너 없음', (await rp.$$('.notice')).length === 0);
  await rp.goto(BASE + 'reports/2026-10-05.html', { waitUntil: 'networkidle' });
  check('중복 기준일 페이지(10/05): 삭제되지 않고 대표 리포트 안내', (await rp.$$('.notice.dup a[href="2026-10-03.html"]')).length >= 1);
  await rp.close();

  // 9. 상세 리포트: ← 목록 / 이전 / 다음 + 경계
  await page.goto(hrefs[0], { waitUntil: 'networkidle' });
  const newestUrl = page.url();
  check('최신 리포트: 다음 버튼 비활성', (await page.$$eval('nav.nav:nth-of-type(1) span[aria-disabled="true"], article ~ nav span[aria-disabled="true"]', (e) => e.map((x) => x.textContent)).catch(() => [])).some((t) => /다음/.test(t)));
  await page.click('article ~ nav a[rel=prev]');
  await page.waitForLoadState('networkidle');
  check('이전 클릭 → 더 오래된 리포트로 이동', page.url() !== newestUrl && /reports\/\d{4}-\d{2}-\d{2}\.html$/.test(page.url()), page.url());
  await page.click('article ~ nav a[rel=next]');
  await page.waitForLoadState('networkidle');
  check('다음 클릭 → 원래 리포트로 복귀', page.url() === newestUrl);
  await page.click('article ~ nav a[rel=up]');
  await page.waitForLoadState('networkidle');
  check('← 목록 클릭 → 인덱스로 이동', new URL(page.url()).pathname.replace(/index\.html$/, '').endsWith('/') && (await page.isVisible('#archive')));
  await page.goto(hrefs[hrefs.length - 1], { waitUntil: 'networkidle' });
  check('가장 오래된 리포트: 이전 버튼 비활성', (await page.$$eval('article ~ nav span[aria-disabled="true"]', (e) => e.map((x) => x.textContent))).some((t) => /이전/.test(t)) && (await page.$$('article ~ nav a[rel=prev]')).length === 0);
  await page.click('article ~ nav a[rel=next]');
  await page.waitForLoadState('networkidle');
  check('가장 오래된 → 다음 클릭 정상', /reports\//.test(page.url()) && page.url() !== hrefs[hrefs.length - 1]);

  // 10. JSON 로드 실패 시: 대시보드만 오류 문구, 아카이브는 그대로
  const p2 = await ctx.newPage();
  await p2.route('**/data/latest.json', (r) => r.abort());
  await p2.goto(BASE, { waitUntil: 'networkidle' });
  await p2.waitForSelector('#tiles .error', { timeout: 10000 }).catch(() => {});
  check('latest.json 실패: 대시보드에 오류 문구', /데이터를 불러오지 못했습니다/.test(await p2.textContent('#tiles')));
  check('latest.json 실패: 아카이브 목록은 정상', (await p2.$$eval('#archive a.card', (e) => e.length)) === hrefs.length);
  await p2.close();

  // 11. 뷰포트 3종: 가로 스크롤 없음 + 스크린샷
  for (const [name, w, h] of [['mobile', 390, 844], ['tablet', 768, 1024], ['desktop', 1440, 900]]) {
    const vp = await ctx.newPage();
    await vp.setViewportSize({ width: w, height: h });
    for (const [label, url] of [['index', BASE], ['report', hrefs[0]]]) {
      await vp.goto(url, { waitUntil: 'networkidle' });
      if (label === 'index') await vp.waitForSelector('#tiles .tile');
      const m = await vp.evaluate(() => ({ sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth, bsw: document.body.scrollWidth }));
      check(`${name} ${w}×${h} ${label}: 가로 스크롤 없음`, m.sw <= m.cw && m.bsw <= m.cw, `scrollWidth ${m.sw} / clientWidth ${m.cw}`);
      await vp.screenshot({ path: path.join(OUT, `${TAG}_${label}_${name}.png`), fullPage: label === 'index' ? false : false });
    }
    await vp.close();
  }

  // 12. 전체 콘솔 에러·404
  const ignorable = () => false; // 예외 없음: 파비콘 404도 data: 아이콘으로 없앴다
  const ce = consoleErrors.filter((s) => !ignorable(s)), br = badResponses.filter((s) => !ignorable(s));
  check('브라우저 콘솔 에러 0건', ce.length === 0, ce.slice(0, 3).join(' | '));
  check('404/실패 요청 0건', br.length === 0, br.slice(0, 3).join(' | '));

  await browser.close();
  const pass = results.filter((r) => r.ok).length;
  console.log(`\n[${TAG}] e2e 통과 ${pass} / 전체 ${results.length} — 스크린샷: ${path.relative(C.ROOT, OUT)}`);
  fs.writeFileSync(path.join(OUT, `${TAG}_e2e_result.md`), `# e2e 결과 (${TAG}) ${BASE}\n\n통과 ${pass} / 전체 ${results.length}\n\n| 항목 | 결과 | 비고 |\n|---|---|---|\n` + results.map((r) => `| ${r.name} | ${r.ok ? 'PASS' : '**FAIL**'} | ${String(r.detail).replace(/\|/g, '/')} |`).join('\n') + '\n');
  process.exit(pass === results.length ? 0 : 1);
}

main().catch((e) => { console.error(e); process.exit(1); });
