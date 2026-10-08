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

  // 3. 2주 일정 탭
  const tabIds = await page.$$eval('#calendar [role=tab]', (e) => e.map((x) => x.getAttribute('data-tab')));
  check('일정 탭 3개 존재 (실적·지표·기업 이벤트)', tabIds.length === 3, tabIds.join(','));
  for (const tab of tabIds) {
    await page.click(`#calendar [data-tab="${tab}"]`);
    const rows = await page.$$eval('#cal-panel tbody tr', (e) => e.length);
    const empty = await page.$$eval('#cal-panel .empty', (e) => e.map((x) => x.textContent).join(''));
    const text = await page.textContent('#cal-panel');
    check(`일정 탭 ${tab}: 행 ${rows}개 또는 '예정 없음'`, (rows > 0 || /예정 없음/.test(empty)) && !BAD_TEXT.test(text), `rows=${rows}`);
  }

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
  check(`아카이브 카드 ${hrefs.length}개 링크 전부 200`, hrefs.length >= 72 && bad.length === 0, bad.slice(0, 3).join('; ') || `${hrefs.length}건`);
  check('카드 개수 = summaries.json 개수', await (async () => { const r = await ctx.request.get(BASE + 'data/summaries.json'); return r.ok() && (await r.json()).length === hrefs.length; })());
  const cardInfo = await page.$$eval('#archive a.card', (e) => e.map((a) => ({ hl: a.querySelector('.hl')?.textContent || '', tags: a.querySelectorAll('.tag').length })));
  check('모든 카드에 헤드라인·태그', cardInfo.every((c) => c.hl.trim().length >= 8 && c.tags >= 1 && !BAD_TEXT.test(c.hl)), `${cardInfo.filter((c) => !c.hl.trim()).length}건 빈 제목`);

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
