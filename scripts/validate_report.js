#!/usr/bin/env node
'use strict';
// 4단계(코드 전용): 3_report.md 를 검증한다. LLM 을 다시 부르지 않는다 — 실패하면 상단에 경고 배너를 달아 게시하고
// 내역을 logs/<날짜>/validate.md 에 남긴다. run_daily.sh 는 이 스크립트가 실패해도 멈추지 않는다.
//
//   node scripts/validate_report.js [YYYY-MM-DD] [--no-banner] [--file 리포트.md --data 0_data.json]
//   node scripts/validate_report.js --selftest      (정상 1건 + 망가뜨린 3종)
//
// 검사: ① 필수 섹션 10개 순서 ② 마커 ③ 티커 첫 등장 형식(+마스터 미등록 경고) ④ 지수·금리 수치 ↔ 0_data.json
//       ⑤ JSON 값이 있는데 N/A 로 쓴 경우 (JSON 이 null 이면 N/A 허용 — CLAUDE.md "추정치로 메우지 않는다")  ⑥ 기준일

const fs = require('fs');
const path = require('path');
const C = require('../lib/common');
const { extractTickers } = require('./tickers_lib');

const SECTIONS = [
  [0, '헤드라인'], [1, '대시보드'], [2, '어제 대비'], [3, '섹터 카드'], [4, '연준'],
  [5, 'AI 밸류체인'], [6, '수급'], [7, '향후 2주'], [8, '종합'], [9, '확인 필요'],
];
const BANNER_RE = /<!-- VALIDATION-BANNER -->[\s\S]*?<!-- \/VALIDATION-BANNER -->\n*/;
const AMBIGUOUS = new Set(['PM', 'ON', 'EL', 'BA', 'RTX']); // 일반 약어와 겹치는 2글자 티커는 첫 등장 검사에서 뺀다

// 대시보드·일정 표는 코드가 넣은 것이라 검사 대상이 아니다(사람이 쓴 본문만 본다).
const stripInjected = (md) => md.replace(/<!-- DASHBOARD -->[\s\S]*?<!-- \/DASHBOARD -->/g, '<!-- DASHBOARD -->').replace(/<!-- CALENDAR -->[\s\S]*?<!-- \/CALENDAR -->/g, '<!-- CALENDAR -->').replace(BANNER_RE, '');

// 숫자 검사 대상: [라벨 정규식, 비교할 JSON 항목들, 절대 허용오차(소수 자릿수 반올림 흡수), 상대 허용오차]
const NUMERIC = [
  { name: 'S&P500', re: /S&P\s?500|S&P(?!\s?500)/, keys: ['^GSPC'], abs: 0.011, rel: 1e-4 },
  { name: '나스닥종합', re: /나스닥(?!\s?100)|NASDAQ(?!\s?100)/i, keys: ['^IXIC'], abs: 0.011, rel: 1e-4 },
  { name: '다우', re: /다우|\bDow\b/, keys: ['^DJI'], abs: 0.011, rel: 1e-4 },
  { name: '러셀2000', re: /러셀|Russell/i, keys: ['^RUT'], abs: 0.011, rel: 1e-4 },
  { name: 'SOX', re: /\bSOX(?!X|L)|필라델피아 반도체/, keys: ['^SOX'], abs: 0.011, rel: 1e-4 },
  { name: 'VIX', re: /\bVIX\b(?!\s?9D|\s?3M)/, keys: ['^VIX'], abs: 0.06, rel: 0 },
  { name: '미 10년물', re: /10년물|\b10Y\b(?!\s?-\s?2Y)/, keys: ['^TNX', 'FRED:DGS10'], abs: 0.0061, rel: 0 },
  { name: '미 2년물', re: /(?<![\d-])2년물|(?<!-)\b2Y\b/, keys: ['FRED:DGS2'], abs: 0.0061, rel: 0 },
  { name: '미 30년물', re: /30년물|\b30Y\b/, keys: ['^TYX'], abs: 0.0061, rel: 0 },
];
const NA_RE = /N\/A|확인 ?필요|미확인/;

// "7,801.77" "5.365%" 같은 숫자 토큰만 뽑는다. bp·pt·%p·% 변화량(+/- 부호 붙은 것)은 종가가 아니라서 제외한다.
function numbersIn(line) {
  const out = [];
  for (const m of line.matchAll(/(?<![\w.+\-−])(\d{1,3}(?:,\d{3})+(?:\.\d+)?|\d+(?:\.\d+)?)(\s*(?:bp|pt|%p|%|포인트))?/g)) {
    const v = Number(m[1].replace(/,/g, ''));
    if (Number.isFinite(v) && !/^\s*(bp|pt|%p|포인트)/.test(m[2] || '')) out.push({ v, pct: /%/.test(m[2] || '') });
  }
  return out;
}

function checkNumbers(body, data, checks) {
  // '9. 확인 필요' 섹션은 출처 간 불일치를 설명하는 곳이라 수치 대조에서 뺀다. 입력 파일을 직접 인용하는 줄도 제외.
  const cut = body.search(/^##\s+9\./m);
  const lines = (cut >= 0 ? body.slice(0, cut) : body).split('\n').filter((l) => !/1_collect|2_analysis/.test(l));
  for (const spec of NUMERIC) {
    const vals = spec.keys.map((k) => data.items?.[k]).filter((it) => it && !it.error && typeof it.close === 'number').map((it) => it.close);
    if (!vals.length) { checks.push({ name: `수치 ${spec.name}`, ok: true, detail: 'JSON 값 null → N/A 허용' }); continue; }
    const tol = (x) => Math.max(spec.abs, Math.abs(x) * spec.rel);
    // 직전 종가·최근 종가를 인용하는 것("직전 7,818.93")은 정상이다: 이 값들과 일치하면 통과시킨다.
    const history = spec.keys.flatMap((k) => [data.items?.[k]?.prev, ...((data.raw?.[k]?.bars) || []).map((b) => b.close)]).filter((x) => typeof x === 'number');
    const bad = [];
    let seen = 0;
    for (const raw of lines) {
      if (!spec.re.test(raw)) continue;
      const line = raw.replace(/https?:\/\/\S+/g, '');
      for (const n of numbersIn(line)) {
        // 종가를 인용한 숫자만 본다: JSON 값과 5% 이내인데 허용오차를 넘으면 "다른 수치를 쓴 것"
        if (/선물|\bES\b|\bNQ\b|\bYM\b|\bRTY\b|futures/i.test(line.slice(Math.max(0, n.i - 14), n.i))) continue; // 선물 가격은 다른 시리즈
        if (history.some((x) => Math.abs(x - n.v) <= tol(x))) { seen++; continue; }
        const nearest = vals.reduce((a, b) => (Math.abs(b - n.v) < Math.abs(a - n.v) ? b : a));
        if (Math.abs(nearest - n.v) / Math.abs(nearest) > 0.05) continue;
        seen++;
        if (Math.abs(nearest - n.v) > tol(nearest)) bad.push(`${n.v} ≠ ${vals.map((x) => x).join(' / ')} ("${raw.trim().slice(0, 50)}")`);
      }
      // JSON 에 값이 있는데 라벨 바로 옆(줄 앞 30자)에서 N/A 라고 쓴 경우
      const head = raw.replace(/[|*`>\-\s]+/, ' ').trim().slice(0, 30);
      if (spec.re.test(head) && NA_RE.test(raw) && !numbersIn(line).some((n) => vals.some((x) => Math.abs(x - n.v) / Math.abs(x) <= 0.05))) {
        bad.push(`JSON 에 값(${vals[0]})이 있는데 N/A: "${raw.trim().slice(0, 60)}"`);
      }
    }
    checks.push({ name: `수치 ${spec.name} = 0_data.json`, ok: bad.length === 0, detail: bad.length ? bad.slice(0, 3).join(' ; ') : `인용 ${seen}건 일치` });
  }
}

function validate(md, data, tickers) {
  const checks = [];
  const warnings = [];
  const body = stripInjected(md);

  // ① 섹션
  const found = [...body.matchAll(/^##\s+(\d+)\.\s*(.+?)\s*$/gm)].map((m) => ({ n: Number(m[1]), title: m[2], idx: m.index }));
  const missing = [], misplaced = [];
  let lastIdx = -1;
  for (const [n, kw] of SECTIONS) {
    const f = found.find((x) => x.n === n && x.title.replace(/\s/g, '').includes(kw.replace(/\s/g, '')));
    if (!f) { missing.push(`## ${n}. ${kw}`); continue; }
    if (f.idx < lastIdx) misplaced.push(`## ${n}`);
    lastIdx = Math.max(lastIdx, f.idx);
  }
  checks.push({ name: '필수 섹션 10개', ok: !missing.length, detail: missing.length ? `누락: ${missing.join(', ')}` : '0~9 모두 있음' });
  checks.push({ name: '섹션 순서', ok: !misplaced.length, detail: misplaced.length ? `순서 어긋남: ${misplaced.join(', ')}` : '0→9 순서대로' });

  // ② 마커
  const markers = ['DASHBOARD', 'CALENDAR'].filter((m) => !md.includes(`<!-- ${m} -->`));
  checks.push({ name: '마커 <!-- DASHBOARD --> / <!-- CALENDAR -->', ok: !markers.length, detail: markers.length ? `없음: ${markers.join(', ')}` : '둘 다 있음' });
  const unfilled = ['DASHBOARD', 'CALENDAR'].filter((m) => md.includes(`<!-- ${m} -->`) && !md.includes(`<!-- /${m} -->`));
  checks.push({ name: '마커 자리에 표 삽입됨', ok: !unfilled.length, detail: unfilled.length ? `표 미삽입: ${unfilled.join(', ')}` : '삽입 완료' });

  // ③ 티커 (URL 은 같은 길이의 공백으로 지워 인덱스를 보존)
  const text = body.replace(/https?:\/\/\S+/g, (u) => ' '.repeat(u.length));
  const used = extractTickers(text);
  const unknown = used.filter((t) => !tickers[t]);
  if (unknown.length) warnings.push(`tickers.json 에 없는 티커 ${unknown.length}개: ${unknown.slice(0, 15).join(', ')}`);
  const badFirst = [];
  for (const t of used) {
    const meta = tickers[t];
    if (!meta || meta.name_ko === '?' || meta.sector === '?' || meta.sector === 'ETF' || AMBIGUOUS.has(t)) continue; // ETF 는 섹터 카드 라벨로 쓰여 면제
    const m = new RegExp(`(?<![A-Za-z0-9가-힣_])${t.replace('.', '\\.')}(?![A-Za-z0-9_])`).exec(text);
    if (!m) continue;
    const want = `${t}(${meta.name_ko}·${meta.sector})`;
    if (!text.startsWith(want, m.index)) badFirst.push(`${t}: "${text.slice(m.index, m.index + 24).replace(/\n/g, ' ')}" → ${want}`);
  }
  checks.push({ name: '티커 첫 등장 형식 `T(이름·섹터)`', ok: badFirst.length === 0, detail: badFirst.length ? `${badFirst.length}건: ${badFirst.slice(0, 3).join(' ; ')}` : `${used.length}개 티커 확인` });

  // ④⑤ 수치
  if (data) checkNumbers(body, data, checks);
  else warnings.push('0_data.json 이 없어 수치 대조를 건너뜀');

  // ⑥ 기준일
  const hd = /기준일[^\d\n]{0,30}(\d{4}-\d{2}-\d{2})/.exec(body);
  if (data?.us_date) {
    checks.push({ name: '기준일 = 0_data.json 미국 기준일', ok: !!hd && hd[1] === data.us_date, detail: `리포트 ${hd ? hd[1] : '없음'} vs JSON ${data.us_date}` });
  }
  return { checks, warnings, ok: checks.every((c) => c.ok) };
}

function render(date, res) {
  const L = [`# 리포트 검증 결과 (${date})`, '', `판정: **${res.ok ? '통과' : '실패'}** (${res.checks.filter((c) => c.ok).length}/${res.checks.length})`, '', '| 검사 | 결과 | 내용 |', '|---|---|---|'];
  for (const c of res.checks) L.push(`| ${c.name} | ${c.ok ? '통과' : '**실패**'} | ${String(c.detail).replace(/\|/g, '/')} |`);
  if (res.warnings.length) L.push('', '## 경고 (실패 아님)', ...res.warnings.map((w) => `- ${w}`));
  return L.join('\n') + '\n';
}

function applyBanner(md, res) {
  const clean = md.replace(BANNER_RE, '');
  if (res.ok) return clean;
  const fails = res.checks.filter((c) => !c.ok).map((c) => `${c.name}`);
  const numeric = res.checks.some((c) => !c.ok && /수치|기준일/.test(c.name));
  const note = numeric ? '수치가 원본 데이터와 다를 수 있으니 원문 출처로 다시 확인하세요.' : '표기 형식 문제이며 수치 검증은 통과했습니다.';
  const banner = `<!-- VALIDATION-BANNER -->\n> ⚠️ **자동 검증 경고** — 다음 검사를 통과하지 못했습니다: ${fails.join(' · ')}. ${note} (내역: logs 폴더의 validate.md)\n<!-- /VALIDATION-BANNER -->\n\n`;
  const i = clean.search(/^#\s/m);
  const eol = i >= 0 ? clean.indexOf('\n', i) + 1 : 0;
  return clean.slice(0, eol) + '\n' + banner + clean.slice(eol).replace(/^\n+/, '');
}

// --- 자체 테스트: 정상 1건 + 일부러 망가뜨린 3종 -------------------------------------
function selftest() {
  const assert = require('assert');
  const it = (close, kind = 'price') => ({ close, kind });
  const data = { us_date: '2026-10-07', items: { '^GSPC': it(7801.77), '^IXIC': it(27538.69), '^DJI': it(51179.87), '^RUT': it(2793.2), '^SOX': it(13066.15), '^VIX': it(15.08), '^TNX': it(5.277, 'yield'), 'FRED:DGS10': it(5.27, 'yield'), 'FRED:DGS2': it(4.79, 'yield'), '^TYX': it(5.661, 'yield') } };
  const tickers = { NVDA: { name_ko: '엔비디아', sector: '반도체' }, MU: { name_ko: '마이크론', sector: '반도체' }, JPM: { name_ko: 'JP모건', sector: '금융' } };
  const good = [
    '# 미국 시장 데일리 리포트', '', '- **기준일**: 2026-10-07 (수) 미국 정규장 종가 기준', '',
    '## 0. 헤드라인', '**금리 부담에 기술주 조정**', '- 요약', '태그: #금리', '### 오늘의 핵심 TOP', '1. NVDA(엔비디아·반도체) 약세 — ↓ · ★★★★☆ · AI영향 부정 · 확신 중간', '',
    '## 1. 대시보드', '<!-- DASHBOARD -->', '| S&P500 | 9,999.99 |', '<!-- /DASHBOARD -->', 'S&P500은 7,801.77로 마감, VIX 15.08.', '',
    '## 2. 어제 대비 변화', '변화 없음', '## 3. 섹터 카드', '#### 기술 (XLK)', '- 주목 종목: MU(마이크론·반도체), NVDA',
    '## 4. 연준·금리', '미 10년물 5.277%, 2년물 4.79%, 30년물 5.661%', '## 5. AI 밸류체인', '해당 없음', '## 6. 수급·포지셔닝·내부자', 'JPM(JP모건·금융) 내부자 매도', '## 7. 향후 2주 일정', '<!-- CALENDAR -->', '| x |', '<!-- /CALENDAR -->', '## 8. 종합·시나리오', '종합', '## 9. 확인 필요', '해당 없음', '',
  ].join('\n');
  const r0 = validate(good, data, tickers);
  assert(r0.ok, `정상 리포트가 실패: ${JSON.stringify(r0.checks.filter((c) => !c.ok))}`);

  // 망가뜨린 1: 섹션 누락 (## 6 삭제)
  const r1 = validate(good.replace('## 6. 수급·포지셔닝·내부자\nJPM(JP모건·금융) 내부자 매도\n', ''), data, tickers);
  assert(!r1.ok && r1.checks.find((c) => c.name === '필수 섹션 10개' && !c.ok), '섹션 누락을 못 잡음');
  // 망가뜨린 2: 숫자 불일치 (S&P 7,801.77 → 7,780.10, 10년물 5.277 → 5.365)
  const r2 = validate(good.replace('7,801.77', '7,780.10').replace('5.277%', '5.365%'), data, tickers);
  const f2 = r2.checks.filter((c) => !c.ok).map((c) => c.name);
  assert(f2.some((n) => n.includes('S&P500')) && f2.some((n) => n.includes('10년물')), `숫자 불일치를 못 잡음: ${f2}`);
  // 망가뜨린 2-b: JSON 에 값이 있는데 N/A
  const r2b = validate(good.replace('S&P500은 7,801.77로 마감', 'S&P500은 N/A'), data, tickers);
  assert(r2b.checks.some((c) => !c.ok && c.name.includes('S&P500')), 'JSON 값이 있는데 N/A 를 못 잡음');
  // JSON 이 null 이면 N/A 허용
  const dNull = { ...data, items: { ...data.items, '^GSPC': { close: null, error: '수집 실패' } } };
  assert(validate(good.replace('S&P500은 7,801.77로 마감', 'S&P500은 N/A'), dNull, tickers).ok, 'JSON null 인데 N/A 를 실패로 처리함');
  // 망가뜨린 3: 미등록 티커 → 경고 목록에 정확히 올라온다 (실패는 아님)
  const r3 = validate(good.replace('JPM(JP모건·금융) 내부자 매도', 'JPM(JP모건·금융) 내부자 매도, QZXW 급등'), data, tickers);
  assert(r3.warnings.some((w) => w.includes('QZXW')), '미등록 티커를 경고에 못 올림');
  // 망가뜨린 3-b: 티커 첫 등장 형식 위반 (이름 없이 NVDA 먼저)
  const r3b = validate(good.replace('1. NVDA(엔비디아·반도체) 약세', '1. NVDA 약세'), data, tickers);
  assert(r3b.checks.some((c) => !c.ok && c.name.includes('티커 첫 등장')), '티커 첫 등장 형식 위반을 못 잡음');
  // 배너: 실패 시 상단에 달리고, 통과로 재실행하면 사라진다(멱등)
  const bannered = applyBanner(good, r1);
  assert(/VALIDATION-BANNER/.test(bannered) && bannered.indexOf('VALIDATION-BANNER') < bannered.indexOf('## 0.'));
  assert.strictEqual(applyBanner(bannered, r1), bannered, '같은 결과로 다시 달아도 배너가 중복되지 않아야 함');
  assert(!/VALIDATION-BANNER/.test(applyBanner(bannered, r0)));
  console.log('selftest 통과: 정상 1건 통과 · 섹션 누락/숫자 불일치/미등록 티커(+첫 등장 형식)/N-A 규칙을 각각 정확히 검출 · 배너 멱등');
}

function main() {
  const args = process.argv.slice(2);
  if (args.includes('--selftest')) return selftest();
  const val = (k) => (args.includes(k) ? args[args.indexOf(k) + 1] : null);
  const date = args.find((a) => /^\d{4}-\d{2}-\d{2}$/.test(a)) || C.kstDate();
  const dir = path.join(C.ROOT, 'logs', process.env.LOG_NAME || date);
  const file = val('--file') || path.join(dir, '3_report.md');
  const dataFile = val('--data') || path.join(dir, '0_data.json');
  if (!fs.existsSync(file)) { console.error(`리포트 없음: ${file}`); process.exit(1); }
  const md = fs.readFileSync(file, 'utf8');
  const res = validate(md, C.readJson(dataFile, null), C.readJson(path.join(C.ROOT, 'docs', 'data', 'tickers.json'), {}));
  const out = render(date, res);
  if (!val('--file')) fs.writeFileSync(path.join(dir, 'validate.md'), out, 'utf8');
  if (!args.includes('--no-banner') && !val('--file')) fs.writeFileSync(file, applyBanner(md, res), 'utf8');
  console.log(out);
  process.exit(res.ok ? 0 : 1);
}

if (require.main === module) main();
module.exports = { validate, applyBanner, render };
