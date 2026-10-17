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
  { name: '미 10년물', re: /10년물|\b10Y\b(?!\s?-\s?2Y)/, keys: ['FRED:DGS10'], altRe: /Yahoo|장중|\^TNX/, altKeys: ['^TNX'], abs: 0.0061, rel: 0 },
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
    const closes = (keys) => keys.map((k) => data.items?.[k]).filter((it) => it && !it.error && typeof it.close === 'number').map((it) => it.close);
    const vals0 = closes(spec.keys), altVals = spec.altKeys ? closes(spec.altKeys) : [];
    let vals = vals0;
    if (!vals0.length) { checks.push({ name: `수치 ${spec.name}`, ok: true, detail: 'JSON 값 null → N/A 허용' }); continue; }
    const tol = (x) => Math.max(spec.abs, Math.abs(x) * spec.rel);
    // 직전 종가·최근 종가를 인용하는 것("직전 7,818.93")은 정상이다: 이 값들과 일치하면 통과시킨다.
    const histOf = (keys) => keys.flatMap((k) => [data.items?.[k]?.prev, ...((data.raw?.[k]?.bars) || []).map((b) => b.close)]).filter((x) => typeof x === 'number');
    const history0 = histOf(spec.keys), historyAlt = spec.altKeys ? histOf(spec.altKeys) : [];
    let history = history0;
    const bad = [];
    let seen = 0;
    for (const raw of lines) {
      if (!spec.re.test(raw)) continue;
      const useAlt = !!(spec.altRe && spec.altRe.test(raw) && altVals.length);
      vals = useAlt ? altVals : vals0; history = useAlt ? historyAlt : history0;
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

// ⑦ 일정표·CPI 본문 대조 (원장 calendar.json 이 기준). 사고(2026-10-14): 본문/표의 CPI 수치가 서로 다른 측정 기준이었는데 아무도 대조하지 않았다.
function checkCalendar(md, cal, checks) {
  if (!cal?.events) return;
  const M = require('../lib/macro');
  // (a) 삽입된 일정 블록에는 보류(hold) 행의 숫자가 없어야 한다
  const blk = /<!-- CALENDAR -->([\s\S]*?)<!-- \/CALENDAR -->/.exec(md)?.[1] || '';
  const leaked = cal.events.filter((e) => e.type === 'macro' && (e.hold || M.checkEvent(e)) && blk.includes(e.title) && blk.split('\n').some((l) => l.includes(e.title) && /\+?\d+\.\d%/.test(l.replace(/\d{4}-\d{2}-\d{2}/g, '')) && !/검증 대기/.test(l)));
  checks.push({ name: '일정표: 보류 행 숫자 비노출', ok: leaked.length === 0, detail: leaked.length ? leaked.map((e) => e.id).join(', ') : '보류 행 없음 또는 모두 "검증 대기"' });
  // (b) 본문(주입 블록 밖)의 "CPI/Core CPI + YoY/MoM + 수치"는 원장 발표값과 같아야 한다 (발표값이 코드로 확정된 경우만)
  // '정정 기록' 절은 오류 수치를 일부러 인용하므로 대조에서 제외한다
  const body = md.replace(/\n### 정정 기록[\s\S]*$/, '\n').replace(/<!-- CALENDAR -->[\s\S]*?<!-- \/CALENDAR -->/, '').replace(/<!-- DASHBOARD -->[\s\S]*?<!-- \/DASHBOARD -->/, '');
  const bad = [];
  let n = 0;
  for (const e of cal.events.filter((x) => x.type === 'macro' && ['CPI', 'CORECPI'].includes(x.metric) && typeof x.actual === 'number')) {
    const core = e.metric === 'CORECPI';
    const mm = e.measure === 'mom' ? String.raw`MoM|전월(?:비|\s*대비)` : String.raw`YoY|전년(?:비|\s*대비|\s*동월)`;
    const who = core ? String.raw`(?:Core\s*CPI|근원\s*CPI)` : String.raw`(?<!Core\s)CPI`;
    const re = new RegExp(String.raw`(?<![A-Za-z])${who}[^\n|]{0,24}?(?:${mm})[^\n|\d+-]{0,12}([+-]?\d+\.\d)%`, 'gi');
    for (const m of body.matchAll(re)) { n++; if (Math.abs(Number(m[1]) - e.actual) > 0.05) bad.push(`${e.metric} ${e.measure}: 본문 ${m[1]}% ≠ 원장 ${e.actual}%`); }
  }
  checks.push({ name: '본문 CPI 수치 = 원장(FRED 코드 수집)', ok: bad.length === 0, detail: bad.length ? bad.slice(0, 3).join(' ; ') : `인용 ${n}건 일치` });
}

// ⑧ 실적 본문 ↔ 원장 (A2): 본문의 종목별 EPS·발표일은 calendar.json 과 같아야 한다. 보류 종목은 숫자를 쓰면 안 된다.
const bodyOnly = (md) => md.replace(/\n### 정정 기록[\s\S]*$/, '\n').replace(/<!-- CALENDAR -->[\s\S]*?<!-- \/CALENDAR -->/g, '').replace(/<!-- DASHBOARD -->[\s\S]*?<!-- \/DASHBOARD -->/g, '').replace(/https?:\/\/\S+/g, ' ');
const SHORT_TICKERS = new Set(['T', 'V', 'MA', 'PM', 'GE', 'BA', 'ON', 'EL', 'MU', 'DE', 'CB', 'NOW', 'HD', 'BP', 'SU', 'SO']);

function checkEarningsBody(md, cal, checks) {
  if (!cal?.events) return;
  const body = bodyOnly(md);
  const ev = cal.events.filter((e) => e.type === 'earnings' && e.ticker);
  const byT = new Map();
  for (const e of ev) (byT.get(e.ticker) || byT.set(e.ticker, []).get(e.ticker)).push(e);
  const mentions = (line) => [...byT.keys()].filter((t) => new RegExp(String.raw`(?<![A-Za-z0-9가-힣_.])${t}${SHORT_TICKERS.has(t) ? String.raw`\(` : String.raw`(?![A-Za-z0-9_])`}`).test(line));
  const bad = [];
  let n = 0;
  for (const line of body.split('\n')) {
    if (!/실적|EPS|컨센서스|어닝|발표/.test(line)) continue;
    const ts = mentions(line);
    if (ts.length !== 1) continue; // 한 줄에 여러 종목이면 어느 숫자가 누구 것인지 모호 — 검사하지 않는다
    const rows = byT.get(ts[0]);
    const held = rows.some((e) => e.hold);
    const nums = [...line.matchAll(/(?:EPS|주당순이익|컨센서스|예상)[^\d\n$]{0,14}\$?(-?\d+\.\d{2})(?!\d)/g)].map((m) => Number(m[1]));
    for (const v of nums) {
      n++;
      if (held) { bad.push(`${ts[0]}: 검증 대기 종목인데 EPS ${v} 인용`); continue; }
      const ok = rows.some((e) => [e.cons_eps, e.prior_eps, e.actual_eps].some((x) => typeof x === 'number' && Math.abs(Math.abs(x) - Math.abs(v)) < 0.006));
      if (!ok) bad.push(`${ts[0]}: 본문 EPS ${v} ≠ 원장 예상 ${rows.map((e) => e.cons_eps).join('/')}`);
    }
    const dates = [...line.matchAll(/(?:2026-(\d{2})-(\d{2}))|(?<![\d/.])(\d{1,2})\/(\d{1,2})(?![\d/])/g)].map((m) => (m[1] ? `2026-${m[1]}-${m[2]}` : `2026-${String(m[3]).padStart(2, '0')}-${String(m[4]).padStart(2, '0')}`));
    if (dates.length && /실적|발표|컨콜/.test(line)) {
      n++;
      const okDates = new Set(rows.flatMap((e) => [e.date_et, ...(e.date_alt || [])]));
      const tbd = rows.some((e) => e.date_tbd);
      if (!dates.some((d) => okDates.has(d))) bad.push(`${ts[0]}: 본문 날짜 ${dates.join(',')} ≠ 원장 ${[...okDates].join(',')}`);
      else if (tbd && /확정/.test(line) && !/미확정/.test(line)) bad.push(`${ts[0]}: 날짜 미확정인데 "확정"으로 서술`);
    }
  }
  checks.push({ name: '본문 실적 EPS·날짜 = 원장', ok: bad.length === 0, detail: bad.length ? `${bad.length}건: ${bad.slice(0, 3).join(' ; ')}` : `인용 ${n}건 일치` });
}

// ⑨ 예상값이 없는 지표에 "예상 상회/하회/서프라이즈" 표현 금지 (A3)
const METRIC_ALIAS = { CPI: /CPI/, CORECPI: /CPI/, PCE: /PCE/, COREPCE: /PCE/, PPI: /PPI|생산자물가/, RETAIL: /소매\s?판매/, NFP: /NFP|비농업/, UNEMP: /실업률/, CLAIMS: /실업수당|신규\s?청구/, GDP: /GDP/, ISM: /ISM/, JOLTS: /JOLTS|구인/ };
const SURPRISE_RE = /서프라이즈|예상(?:치|값)?\s?(?:을|를|보다|대비|에)?\s?(?:상회|하회|웃돌|밑돌|부합|못\s?미치|넘어)|컨센서스\s?(?:를|을|보다|대비)?\s?(?:상회|하회|웃돌|밑돌|부합)|(?:상회|하회|부합)했|예상보다|예상\s?대비/;
function noConsensusMetrics(cal, usDate) {
  const from = C.addDays(usDate, -3), to = C.addDays(usDate, 14);
  const byM = new Map();
  for (const e of cal.events) if (e.type === 'macro' && e.metric && e.date_et >= from && e.date_et <= to && e.importance >= 2) (byM.get(e.metric) || byM.set(e.metric, []).get(e.metric)).push(e);
  return [...byM].filter(([, rows]) => rows.every((e) => e.consensus == null || e.hold)).map(([m]) => m);
}
function checkNoConsensusWords(md, cal, usDate, checks) {
  if (!cal?.events || !usDate) return;
  const body = bodyOnly(md);
  const metrics = noConsensusMetrics(cal, usDate);
  const bad = [];
  for (const line of body.split('\n')) {
    if (!SURPRISE_RE.test(line)) continue;
    for (const m of metrics) {
      const a = METRIC_ALIAS[m];
      if (!a) continue;
      // 지표명 뒤 40자 안에 서프라이즈 표현이 있고, 같은 구간에 다른 (예상값이 있는) 지표명이 끼어 있지 않을 때
      const re = new RegExp(`(${a.source})[^\\n]{0,40}?(${SURPRISE_RE.source})`);
      const mm = re.exec(line);
      if (mm && !/\bvs\b/.test(mm[0])) bad.push(`${m}: "${mm[0].slice(0, 40)}"`);
    }
  }
  checks.push({ name: '예상값 없는 지표에 상회/하회 표현 금지', ok: bad.length === 0, detail: bad.length ? `${bad.length}건: ${bad.slice(0, 3).join(' ; ')}` : `대상 지표 ${metrics.length}개(${metrics.join(',') || '없음'}) 위반 없음` });
}

// 독자 화면에 나오면 안 되는 내부 메모 (build_site 가 숨긴다)
const MEMO_RE = /\[P[1-4]\]|Yahoo chart API[^\n|]{0,6}자동\s?수집|facts\.json\s?이월(?:값)?|logs\s?폴더|\b0_data\.(?:md|json)\b|\b1_collect\b|\b2_analysis\b/g;
function internalMemos(body) {
  const out = [];
  for (const m of bodyOnly(body).matchAll(MEMO_RE)) out.push(m[0]);
  return out;
}

function validate(md, data, tickers, cal) {
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

  checkCalendar(md, cal, checks);
  checkEarningsBody(body, cal, checks);
  checkNoConsensusWords(body, cal, data?.us_date, checks);
  const memos = internalMemos(body);
  if (memos.length) warnings.push(`독자 화면에서 숨겨질 내부 메모 ${memos.length}건: ${memos.slice(0, 4).join(' / ')}`);

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
    '## 4. 연준·금리', '미 10년물 5.27%, 2년물 4.79%, 30년물 5.661%', '## 5. AI 밸류체인', '해당 없음', '## 6. 수급·포지셔닝·내부자', 'JPM(JP모건·금융) 내부자 매도', '## 7. 향후 2주 일정', '<!-- CALENDAR -->', '| x |', '<!-- /CALENDAR -->', '## 8. 종합·시나리오', '종합', '## 9. 확인 필요', '해당 없음', '',
  ].join('\n');
  const r0 = validate(good, data, tickers);
  assert(r0.ok, `정상 리포트가 실패: ${JSON.stringify(r0.checks.filter((c) => !c.ok))}`);

  // 망가뜨린 1: 섹션 누락 (## 6 삭제)
  const r1 = validate(good.replace('## 6. 수급·포지셔닝·내부자\nJPM(JP모건·금융) 내부자 매도\n', ''), data, tickers);
  assert(!r1.ok && r1.checks.find((c) => c.name === '필수 섹션 10개' && !c.ok), '섹션 누락을 못 잡음');
  // 망가뜨린 2: 숫자 불일치 (S&P 7,801.77 → 7,780.10, 10년물 5.277 → 5.365)
  const r2 = validate(good.replace('7,801.77', '7,780.10').replace('5.27%', '5.365%'), data, tickers);
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
  // 망가뜨린 4 (사고 회귀): 본문 CPI 수치가 원장과 다름 / 보류 행 숫자가 일정표에 새어 나옴
  const cal = { events: [
    { type: 'macro', id: 'a', title: '9월 CPI (YoY)', metric: 'CPI', measure: 'yoy', actual: 3.7 },
    { type: 'macro', id: 'b', title: '9월 CPI (MoM)', metric: 'CPI', measure: 'mom', actual: 0.6 },
    { type: 'macro', id: 'c', title: '9월 Core CPI (MoM)', metric: 'CORECPI', measure: 'mom', actual: 0.3 },
    { type: 'macro', id: 'h', title: '잘못된 행', hold: '측정 기준 미확인' },
  ] };
  const run = (txt) => { const ck = []; checkCalendar(txt, cal, ck); return ck; };
  assert(run('9월 CPI YoY +3.7%(예상 +3.6%), 헤드라인 CPI MoM +0.6%, Core CPI MoM +0.3%').every((c) => c.ok), '정상 인용은 통과');
  assert(run('9월 CPI YoY +0.6%로 발표').some((c) => !c.ok && c.name.includes('CPI')), 'MoM 값을 YoY 로 적은 본문을 못 잡음');
  assert(run('Core CPI MoM +2.6%').some((c) => !c.ok && c.name.includes('CPI')), '근원 MoM 오인용을 못 잡음');
  assert(run('<!-- CALENDAR -->\n| 2026-10-14 | 08:30 | 잘못된 행 | +0.6% | +3.6% |\n<!-- /CALENDAR -->').some((c) => !c.ok && c.name.includes('보류')), '보류 행 숫자 노출을 못 잡음');
  assert(run('<!-- CALENDAR -->\n| 2026-10-14 | 08:30 | 잘못된 행 | 검증 대기 | 검증 대기 |\n<!-- /CALENDAR -->').every((c) => c.ok), '검증 대기 표기는 통과');
  // 망가뜨린 5 (A2/A3): 본문 실적 숫자·날짜 ↔ 원장, 예상값 없는 지표의 상회/하회 표현, 내부 메모
  const cal2 = { events: [
    { type: 'earnings', ticker: 'TSLA', date_et: '2026-10-21', cons_eps: 0.4459, prior_eps: 0.37, hold: '예상 EPS 출처 간 불일치' },
    { type: 'earnings', ticker: 'GOOGL', date_et: '2026-10-28', cons_eps: 3.0983, prior_eps: 2.87 },
    { type: 'earnings', ticker: 'GE', date_et: '2026-10-19', date_alt: ['2026-10-20'], date_tbd: true, cons_eps: 2.02 },
    { type: 'macro', metric: 'PCE', measure: 'yoy', date_et: '2026-10-29', importance: 3, consensus: null },
    { type: 'macro', metric: 'CPI', measure: 'yoy', date_et: '2026-10-14', importance: 3, consensus: 3.6 },
  ] };
  const eb = (txt) => { const ck = []; checkEarningsBody(txt, cal2, ck); return ck[0]; };
  assert(!eb('TSLA(테슬라·경기소비재) 실적 10/21 장마감후').ok === false, '날짜만 맞으면 통과');
  assert(!eb('TSLA 3분기 실적 컨센서스 EPS 0.21달러').ok, '검증 대기 종목 숫자 인용을 못 잡음');
  assert(eb('GOOGL 실적 10/28, 컨센서스 EPS 3.10달러').ok, '원장 3.0983 ≈ 3.10 은 통과해야 함');
  assert(!eb('GOOGL 실적 10/27 발표, 컨센서스 EPS 3.10달러').ok, '날짜 불일치를 못 잡음');
  assert(!eb('GOOGL 실적 컨센서스 EPS 2.94달러').ok, '원장과 다른 EPS 를 못 잡음');
  assert(!eb('GE(GE에어로스페이스·산업재) 실적 10/20 확정').ok, '날짜 미확정을 확정으로 서술한 것을 못 잡음');
  const nc = (txt) => { const ck = []; checkNoConsensusWords(txt, cal2, '2026-10-16', ck); return ck[0]; };
  assert(!nc('9월 PCE 전년비가 예상을 상회했다').ok, '예상값 없는 PCE 에 상회 표현을 못 잡음');
  assert(nc('9월 CPI 전년비가 예상을 상회했다').ok, '예상값 있는 CPI 는 허용');
  assert(internalMemos('근거: CBOE(Yahoo chart API 자동수집)[P1], facts.json 이월').length >= 3, '내부 메모 검출');
  assert(!/\[P1\]|facts\.json|Yahoo chart API/.test(require('../lib/sanitize').readerMd('근거: CBOE(Yahoo chart API 자동수집)[P1], facts.json 이월값 사용')), '독자용 변환이 내부 메모를 못 지움');
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
  const res = validate(md, C.readJson(dataFile, null), C.readJson(path.join(C.ROOT, 'docs', 'data', 'tickers.json'), {}), C.readJson(path.join(C.ROOT, 'docs', 'data', 'calendar.json'), null));
  const out = render(date, res);
  if (!val('--file')) fs.writeFileSync(path.join(dir, 'validate.md'), out, 'utf8');
  // 독자 화면에는 검증 경고를 띄우지 않는다(로그 validate.md 에만 남김). 과거에 달린 배너가 있으면 걷어낸다.
  if (!val('--file') && BANNER_RE.test(md)) fs.writeFileSync(file, md.replace(BANNER_RE, ''), 'utf8');
  console.log(out);
  process.exit(res.ok ? 0 : 1);
}

if (require.main === module) main();
module.exports = { validate, applyBanner, render, checkEarningsBody, checkNoConsensusWords, internalMemos };
