#!/usr/bin/env node
'use strict';

// 0단계: 웹 검색으로는 안정적으로 얻기 어려운 시장 수치를 API에서 결정론적으로 수집한다.
// 출력: logs/<YYYY-MM-DD>/0_data.md  (1_collect.md 프롬프트가 이 파일을 Read해서 사용)
//
// 사용법:
//   node fetch_market_data.js            오늘(KST) 기준 수집
//   node fetch_market_data.js 2026-09-14 날짜 지정
//   node fetch_market_data.js --check    자가 점검 (파일을 쓰지 않는다)
//
// 원칙: 실패한 항목은 N/A로 남기고 계속 진행한다. 값을 지어내지 않는다.

const fs = require('fs');
const path = require('path');

const UA = 'Mozilla/5.0 (compatible; economic-news-bot/1.0)';

// --- 수집 대상 -------------------------------------------------------------

// Yahoo chart API (키 불필요). 전 심볼 200 응답 확인 완료.
const YAHOO_GROUPS = [
  ['선물 (한국 아침 시점)', {
    'ES=F': 'S&P500 선물 (ES)',
    'NQ=F': '나스닥100 선물 (NQ)',
    'YM=F': '다우 선물 (YM)',
    'RTY=F': '러셀2000 선물 (RTY)',
  }],
  ['변동성 구조', {
    '^VIX': 'VIX (30일)',
    '^VIX9D': 'VIX9D (9일)',
    '^VIX3M': 'VIX3M (3개월)',
    '^VVIX': 'VVIX (VIX의 변동성)',
    '^SKEW': 'SKEW (테일리스크)',
  }],
  ['매크로', {
    'ZN=F': '미 10년 국채선물',
    'GC=F': '금',
    'CL=F': 'WTI',
    'DX-Y.NYB': '달러지수 (DXY)',
  }],
];

// CBOE 지연 시세 옵션 체인 → Put/Call 직접 집계. 지수는 '_' 접두사, ETF는 없음.
const PUTCALL_TARGETS = [
  ['_SPX', 'S&P500 지수옵션 (SPX)'],
  ['QQQ', '나스닥100 ETF 옵션 (QQQ)'],
];

// Finnhub 섹터별 대표 티커. 무료 티어 60콜/분 — 여유롭다.
const SECTORS = {
  '반도체·AI': ['NVDA', 'AVGO'],
  '금융': ['JPM'],
  '에너지': ['XOM'],
  '헬스케어': ['UNH'],
  '소비재·유통': ['AMZN'],
};

// --- 유틸 ------------------------------------------------------------------

const kstDate = (d = new Date()) => d.toLocaleDateString('sv-SE', { timeZone: 'Asia/Seoul' });
const kstTime = (d = new Date()) =>
  d.toLocaleString('sv-SE', { timeZone: 'Asia/Seoul' }).slice(0, 16);
const etTime = (ts) =>
  ts ? new Date(ts * 1000).toLocaleString('sv-SE', { timeZone: 'America/New_York' }).slice(0, 16) : 'N/A';

const num = (v, digits = 2) =>
  typeof v === 'number' && Number.isFinite(v) ? v.toLocaleString('en-US', { maximumFractionDigits: digits }) : 'N/A';
const pct = (v) => (typeof v === 'number' && Number.isFinite(v) ? `${v >= 0 ? '+' : ''}${v.toFixed(2)}%` : 'N/A');

async function getJson(url, timeoutMs = 60000) {
  const res = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(timeoutMs) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// --- 수집기 ----------------------------------------------------------------

const etDay = (ts) => new Date(ts * 1000).toLocaleDateString('sv-SE', { timeZone: 'America/New_York' });

async function quote(symbol, range = '5d') {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?range=${range}&interval=1d`;
  const r = (await getJson(url, 20000))?.chart?.result?.[0];
  const m = r?.meta;
  if (!m || typeof m.regularMarketPrice !== 'number') throw new Error('meta 없음');

  // meta.chartPreviousClose는 '직전 거래일'이 아니라 '조회 구간 시작 이전'의 종가다.
  // (예: range=5d로 CL=F 조회 시 5거래일 전 종가가 들어와 등락률이 크게 틀어진다)
  // 직전 거래일 종가는 일봉 시계열에서 직접 뽑는다. 마지막 봉이 당일 진행 중인 봉이면 그 앞을 쓴다.
  const bars = (r.timestamp || [])
    .map((t, i) => ({ day: etDay(t), close: r.indicators?.quote?.[0]?.close?.[i] }))
    .filter((b) => typeof b.close === 'number');
  const today = etDay(m.regularMarketTime);
  const closed = bars.filter((b) => b.day !== today);
  const prev = closed.length ? closed[closed.length - 1].close : m.chartPreviousClose;

  return {
    price: m.regularMarketPrice,
    prev,
    changePct: typeof prev === 'number' && prev !== 0 ? ((m.regularMarketPrice - prev) / prev) * 100 : null,
    asOf: etTime(m.regularMarketTime),
  };
}

// 옵션 체인에서 콜/풋 거래량·미결제약정을 집계한다.
// 종목코드 형식: <루트><YYMMDD><C|P><행사가8자리> → 날짜 6자리 뒤 한 글자가 타입.
async function putCall(symbol) {
  const d = (await getJson(`https://cdn.cboe.com/api/global/delayed_quotes/options/${symbol}.json`, 90000)).data;
  const agg = { callVol: 0, putVol: 0, callOi: 0, putOi: 0 };
  for (const o of d.options) {
    const m = /\d{6}([CP])\d{8}$/.exec(o.option);
    if (!m) continue;
    if (m[1] === 'C') {
      agg.callVol += o.volume || 0;
      agg.callOi += o.open_interest || 0;
    } else {
      agg.putVol += o.volume || 0;
      agg.putOi += o.open_interest || 0;
    }
  }
  if (agg.callVol === 0) throw new Error('콜 거래량 0 — 집계 실패');
  return {
    ...agg,
    volRatio: agg.putVol / agg.callVol,
    oiRatio: agg.callOi ? agg.putOi / agg.callOi : null,
    contracts: d.options.length,
  };
}

// Finnhub company-news는 대형주일수록 Yahoo 신디케이션 홍보성 기사가 대부분이다
// (실측: NVDA 3일치 250건 중 239건이 "Yahoo" 소스의 종목 추천·리스티클).
// 아래 패턴으로 명백한 것만 걸러낸다.
// ponytail: 헤드라인 패턴 매칭이라 완벽하지 않다. 남은 노이즈는 Collect 프롬프트의
// '노이즈 제외' 규칙이 2차로 거른다. 더 정교하게 가려면 소스 화이트리스트가 필요하다.
const NOISE_PATTERNS = [
  /^(forget|want |if i |should you|better buy|prediction|here's why you)/i,
  /\b\d+\s+(reasons?|things?|stocks?|etfs?|ways?)\b/i,
  /\b(millionaire|\$1 million|\$100|monthly investment|could grow into|dividend king)\b/i,
  /\b(is|are) .* a (buy|sell|good (stock|buy|investment))\b/i,
  /\b(my top|best stock|top \d+|worth buying|buy now|which \d+ to buy)\b/i,
  /\b(motley fool|zacks rank|analyst blog)\b/i,
  /\bwhere will .* be\b/i,
];

const isNoise = (headline) => NOISE_PATTERNS.some((r) => r.test(headline));

const toItem = (n) => ({
  headline: n.headline,
  source: n.source || '출처 미상',
  at: n.datetime ? etTime(n.datetime) : 'N/A',
  url: n.url,
});

async function sectorNews(ticker, from, to, key) {
  const url = `https://finnhub.io/api/v1/company-news?symbol=${ticker}&from=${from}&to=${to}&token=${key}`;
  const list = await getJson(url, 20000);
  if (!Array.isArray(list)) throw new Error('예상치 못한 응답');
  return list
    .filter((n) => n.headline && n.url && !isNoise(n.headline))
    .slice(0, 3)
    .map(toItem);
}

// 시장 전반 와이어 뉴스. company-news와 달리 Reuters·CNBC·Bloomberg 위주라
// 프로젝트의 [P2] 등급과 그대로 맞는다.
const WIRE_SOURCES = ['Reuters', 'Bloomberg', 'CNBC', 'WSJ'];

async function marketNews(key) {
  const list = await getJson(`https://finnhub.io/api/v1/news?category=general&token=${key}`, 20000);
  if (!Array.isArray(list)) throw new Error('예상치 못한 응답');
  return list
    .filter((n) => n.headline && n.url && WIRE_SOURCES.includes(n.source) && !isNoise(n.headline))
    .slice(0, 15)
    .map(toItem);
}

// 실패해도 파이프라인을 멈추지 않는다. 실패는 N/A로 표면화된다.
async function safe(label, fn) {
  try {
    return { ok: true, value: await fn() };
  } catch (e) {
    process.stderr.write(`  [실패] ${label}: ${e.message}\n`);
    return { ok: false, error: e.message };
  }
}

// --- 마크다운 생성 ---------------------------------------------------------

function buildMarkdown(date, quotes, putCalls, news, wire, newsSkipReason) {
  const L = [];
  L.push('# 자동 수집 시장 데이터 (0_data)');
  L.push(`# 기준일: ${date} · 생성시각(KST): ${kstTime()}`);
  L.push('# 출처: Yahoo Finance chart API · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)');
  L.push('');
  L.push('> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.');
  L.push('> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.');
  L.push('');

  for (const [groupName, symbols] of YAHOO_GROUPS) {
    L.push(`## ${groupName}`);
    L.push('');
    L.push('| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |');
    L.push('|------|------|-------------|-----------|-----------|--------------|');
    for (const [sym, label] of Object.entries(symbols)) {
      const r = quotes[sym];
      if (r?.ok) {
        const q = r.value;
        L.push(`| ${label} | \`${sym}\` | ${num(q.price)} | ${pct(q.changePct)} | ${num(q.prev)} | ${q.asOf} |`);
      } else {
        L.push(`| ${label} | \`${sym}\` | N/A | N/A | N/A | 수집 실패 |`);
      }
    }
    L.push('');
  }

  // 기간구조는 비율(사실)과 중립적 분류명까지만. 해석은 2단계 소관.
  const v = (s) => (quotes[s]?.ok ? quotes[s].value.price : null);
  const vix = v('^VIX');
  const ratio = (a, b) => (a && b ? (a / b).toFixed(3) : 'N/A');
  const shape = (a, b) => (a && b ? (a / b > 1 ? '콘탱고' : '백워데이션') : 'N/A');
  L.push('### VIX 기간구조 (위 수치에서 산출한 비율)');
  L.push('');
  L.push('| 비율 | 값 | 구조 |');
  L.push('|------|----|------|');
  L.push(`| VIX3M / VIX | ${ratio(v('^VIX3M'), vix)} | ${shape(v('^VIX3M'), vix)} |`);
  L.push(`| VIX / VIX9D | ${ratio(vix, v('^VIX9D'))} | ${shape(vix, v('^VIX9D'))} |`);
  L.push('');
  L.push('> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**');
  L.push('');

  L.push('## Put/Call 비율 (CBOE 옵션 체인 직접 집계)');
  L.push('');
  L.push('| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |');
  L.push('|------|--------------|------------------|-----------|-----------|-------------|');
  for (const [sym, label] of PUTCALL_TARGETS) {
    const r = putCalls[sym];
    if (r?.ok) {
      const p = r.value;
      L.push(
        `| ${label} | ${p.volRatio.toFixed(3)} | ${p.oiRatio ? p.oiRatio.toFixed(3) : 'N/A'} | ` +
          `${num(p.callVol, 0)} | ${num(p.putVol, 0)} | ${num(p.contracts, 0)} |`
      );
    } else {
      L.push(`| ${label} | N/A | N/A | N/A | N/A | 수집 실패 |`);
    }
  }
  L.push('');
  L.push('> CBOE 지연 시세 기준. 직전 정규장 집계값이다.');
  L.push('');

  L.push('## 시장 전반 뉴스 (Finnhub · 와이어 매체)');
  L.push('');
  if (newsSkipReason) {
    L.push(`N/A — ${newsSkipReason}`);
  } else if (!wire.length) {
    L.push('N/A — 해당 시점 와이어 뉴스 없음');
  } else {
    for (const n of wire) {
      L.push(`- **${n.source}** · ${n.headline}`);
      L.push(`  - ${n.at} (ET) · ${n.url}`);
    }
  }
  L.push('');

  L.push('## 섹터별 뉴스 (Finnhub)');
  L.push('');
  if (newsSkipReason) {
    L.push(`N/A — ${newsSkipReason}`);
    L.push('');
  } else {
    for (const [sector, items] of Object.entries(news)) {
      L.push(`### ${sector}`);
      L.push('');
      if (!items.length) {
        L.push('N/A — 해당 기간 신규 뉴스 없음');
      } else {
        for (const n of items) {
          L.push(`- **${n.ticker}** · ${n.headline}`);
          L.push(`  - ${n.source} · ${n.at} (ET) · ${n.url}`);
        }
      }
      L.push('');
    }
  }
  return L.join('\n') + '\n';
}

// --- 자가 점검 -------------------------------------------------------------

async function check() {
  const assert = require('assert');
  const must = ['ES=F', 'NQ=F', 'YM=F', 'RTY=F', '^VIX'];
  console.log('필수 심볼 점검...');
  for (const s of must) {
    const q = await quote(s);
    assert(typeof q.price === 'number' && q.price > 0, `${s} 가격이 숫자가 아님`);
    console.log(`  OK ${s} = ${num(q.price)} (${pct(q.changePct)})`);
  }
  // 회귀 방지: 전일 종가가 조회 구간 길이에 따라 달라지면 안 된다.
  // (meta.chartPreviousClose를 쓰던 시절 WTI 등락률이 +10.57%로 잘못 나왔던 버그)
  console.log('전일 종가 일관성 점검 (5d vs 1mo)...');
  for (const s of ['CL=F', '^VIX9D']) {
    const [a, b] = [await quote(s, '5d'), await quote(s, '1mo')];
    assert.strictEqual(a.prev, b.prev, `${s} 전일 종가가 구간에 따라 다름: ${a.prev} vs ${b.prev}`);
    console.log(`  OK ${s} 전일 종가 ${num(a.prev)} 일치 (${pct(a.changePct)})`);
  }

  console.log('Put/Call 집계 점검...');
  const pc = await putCall('_SPX');
  assert(pc.volRatio > 0 && pc.volRatio < 10, `P/C 비율이 비정상: ${pc.volRatio}`);
  console.log(`  OK SPX P/C(거래량) = ${pc.volRatio.toFixed(3)}`);
  console.log('\n자가 점검 통과.');
}

// --- 메인 ------------------------------------------------------------------

async function main() {
  const args = process.argv.slice(2);
  if (args.includes('--check')) return check();

  const date = args.find((a) => /^\d{4}-\d{2}-\d{2}$/.test(a)) || kstDate();
  const outDir = path.join(__dirname, 'logs', date);
  const outFile = path.join(outDir, '0_data.md');

  console.log(`수집 시작 — 기준일 ${date}`);

  const quotes = {};
  for (const [, symbols] of YAHOO_GROUPS) {
    for (const sym of Object.keys(symbols)) {
      quotes[sym] = await safe(sym, () => quote(sym));
    }
  }
  console.log(`  시세 ${Object.values(quotes).filter((r) => r.ok).length}/${Object.keys(quotes).length} 성공`);

  const putCalls = {};
  for (const [sym] of PUTCALL_TARGETS) {
    putCalls[sym] = await safe(`put/call ${sym}`, () => putCall(sym));
  }

  // Finnhub 뉴스 — 직전 3일치를 받아 최신 3건만 남긴다 (주말·휴장 대비).
  const news = {};
  let wire = [];
  let newsSkipReason = null;
  const key = process.env.FINNHUB_API_KEY;
  if (!key) {
    newsSkipReason = 'FINNHUB_API_KEY 미설정';
    console.log('  섹터 뉴스 건너뜀 (FINNHUB_API_KEY 없음)');
  } else {
    const to = date;
    const from = new Date(new Date(date).getTime() - 3 * 86400000).toISOString().slice(0, 10);
    for (const [sector, tickers] of Object.entries(SECTORS)) {
      news[sector] = [];
      for (const t of tickers) {
        const r = await safe(`뉴스 ${t}`, () => sectorNews(t, from, to, key));
        if (r.ok) news[sector].push(...r.value.map((n) => ({ ...n, ticker: t })));
      }
    }
    const w = await safe('시장 전반 뉴스', () => marketNews(key));
    if (w.ok) wire = w.value;
    console.log(`  섹터 뉴스 ${Object.values(news).flat().length}건 · 와이어 뉴스 ${wire.length}건 수집`);
  }

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outFile, buildMarkdown(date, quotes, putCalls, news, wire, newsSkipReason), 'utf8');
  console.log(`완료: ${path.relative(__dirname, outFile)}`);
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
