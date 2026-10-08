#!/usr/bin/env node
'use strict';

// 0단계: 웹 검색으로는 안정적으로 얻기 어려운 시장 수치를 API에서 결정론적으로 수집한다.
// 출력: logs/<YYYY-MM-DD>/0_data.md  (1_collect.md 프롬프트가 이 파일을 Read해서 사용)
//
// 사용법:
//   node fetch_market_data.js            오늘(KST) 기준 수집
//   node fetch_market_data.js 2026-09-14 날짜 지정
//   node fetch_market_data.js --check    자가 점검 (파일을 쓰지 않는다)
//   출력: 0_data.md(LLM용) · 0_data.json(검증·사이트용) · docs/data/latest.json
//
// 원칙: 실패한 항목은 N/A로 남기고 계속 진행한다. 값을 지어내지 않는다.

const fs = require('fs');
const path = require('path');
const C = require('./lib/common');
const { kstDate, kstTime, etDay, etTime, getJson, getText } = C;

// --- 수집 대상 -------------------------------------------------------------
// 심볼 목록은 config/universe.json 한 곳에서 관리한다. 'FRED:<id>'는 FRED 키 없는 CSV, 나머지는 Yahoo.
const UNIVERSE = C.readJson(path.join(__dirname, 'config', 'universe.json'));
const WATCHLIST = C.readJson(path.join(__dirname, 'config', 'watchlist.json'), { tickers: [] }).tickers;
const GROUPS = UNIVERSE.groups;
const ITEM_META = {};
for (const g of GROUPS) for (const [sym, m] of Object.entries(g.items)) ITEM_META[sym] = { ...m, group: g.id };

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

const num = (v, digits = 2) =>
  typeof v === 'number' && Number.isFinite(v) ? v.toLocaleString('en-US', { maximumFractionDigits: digits }) : 'N/A';
const pct = (v) => (typeof v === 'number' && Number.isFinite(v) ? `${v >= 0 ? '+' : ''}${v.toFixed(2)}%` : 'N/A');
const bp = (v) => (typeof v === 'number' && Number.isFinite(v) ? `${v >= 0 ? '+' : ''}${(v * 100).toFixed(1)}bp` : 'N/A');
const round = (v, d = 4) => (typeof v === 'number' && Number.isFinite(v) ? Number(v.toFixed(d)) : null);

// --- 수집기 ----------------------------------------------------------------

// 종가 시계열 `bars`([{day, close}], 오름차순, 마지막 = 현재 값)에서 기간별 지표를 계산한다.
// 규칙(verify_data.js가 같은 정의로 재계산한다): 1D=직전 봉, 5D=5봉 전, 1M=21봉 전, YTD=전년도 마지막 봉.
// 금리·스프레드는 %가 아니라 %p 차이(change)도 함께 둔다.
function periodStats(bars) {
  const n = bars.length;
  const last = bars[n - 1];
  const at = (k) => (n - 1 - k >= 0 ? bars[n - 1 - k].close : null);
  const year = last.day.slice(0, 4);
  const prevYear = [...bars].reverse().find((b) => b.day.slice(0, 4) < year);
  const chg = (base) => (typeof base === 'number' && base !== 0 ? ((last.close - base) / base) * 100 : null);
  const diff = (base) => (typeof base === 'number' ? last.close - base : null);
  return {
    close: last.close,
    prev: at(1),
    chg_1d: chg(at(1)), chg_5d: chg(at(5)), chg_1m: chg(at(21)), chg_ytd: chg(prevYear?.close),
    d_1d: diff(at(1)), d_5d: diff(at(5)), d_1m: diff(at(21)), d_ytd: diff(prevYear?.close),
    spark_20d: bars.slice(-20).map((b) => round(b.close, 4)),
  };
}

const sma = (bars, len) =>
  bars.length >= len ? bars.slice(-len).reduce((a, b) => a + b.close, 0) / len : null;

// Yahoo chart API. range=1y 일봉 한 번으로 모든 기간 지표를 만든다.
// meta.chartPreviousClose는 '직전 거래일'이 아니라 '조회 구간 시작 이전' 종가라 쓰지 않는다 —
// 일봉 시계열에서 직접 뽑고, 마지막 봉이 진행 중인 당일 봉이면 그 봉을 현재가로 대체한다.
async function yahooBars(symbol, range = '1y') {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?range=${range}&interval=1d`;
  let r;
  for (let attempt = 0; ; attempt++) {
    try { r = (await getJson(url, 20000))?.chart?.result?.[0]; break; }
    catch (e) { if (attempt >= 1) throw e; await new Promise((res) => setTimeout(res, 800)); }
  }
  const m = r?.meta;
  if (!m || typeof m.regularMarketPrice !== 'number') throw new Error('meta 없음');
  const q = r.indicators?.quote?.[0]?.close || [];
  // 봉의 '날짜'는 거래소 현지 시간대 기준이다. BTC(UTC)·환율(London) 일봉은 ET로 바꾸면 하루씩 밀려
  // 진행 중인 봉이 '직전 종가'로 잡힌다(BTC 등락률이 0.00%로 나왔던 문제).
  const tz = m.exchangeTimezoneName || 'America/New_York';
  const localDay = (ts) => new Date(ts * 1000).toLocaleDateString('sv-SE', { timeZone: tz });
  const today = localDay(m.regularMarketTime);
  const closed = (r.timestamp || [])
    .map((t, i) => ({ day: localDay(t), close: q[i] }))
    .filter((b) => typeof b.close === 'number' && b.day !== today);
  const bars = [...closed, { day: today, close: m.regularMarketPrice }];
  return { bars, asof: etTime(m.regularMarketTime), asof_day: etDay(m.regularMarketTime) };
}

// 기존 호출부(--check)용 얇은 래퍼
async function quote(symbol, range = '5d') {
  const { bars, asof } = await yahooBars(symbol, range);
  const s = periodStats(bars);
  return { price: s.close, prev: s.prev, changePct: s.chg_1d, asOf: asof };
}

// FRED 키 없는 CSV (DATE,VALUE). '.'은 결측(휴일). 영업일 1일 지연되는 게 정상이다.
function parseFredCsv(text) {
  const rows = text.trim().split(/\r?\n/).slice(1)
    .map((l) => l.split(','))
    .filter(([d, v]) => /^\d{4}-\d{2}-\d{2}$/.test(d) && v !== '.' && v !== '' && Number.isFinite(Number(v)))
    .map(([d, v]) => ({ day: d, close: Number(v) }));
  if (rows.length < 30) throw new Error('FRED CSV 행 부족');
  return rows;
}
async function fredBars(id) {
  const rows = parseFredCsv(await getText(`https://fred.stlouisfed.org/graph/fredgraph.csv?id=${id}`, 30000));
  return { bars: rows.slice(-300), asof: `${rows[rows.length - 1].day} (FRED)`, asof_day: rows[rows.length - 1].day };
}

async function collectItem(sym, meta) {
  const isFred = sym.startsWith('FRED:');
  const { bars, asof, asof_day } = isFred ? await fredBars(sym.slice(5)) : await yahooBars(sym);
  const st = periodStats(bars);
  const item = {
    label: meta.label, group: meta.group, kind: meta.kind || 'price', policy: meta.policy,
    ...Object.fromEntries(Object.entries(st).map(([k, v]) => [k, Array.isArray(v) ? v : round(v, k.startsWith('chg') ? 4 : 6)])),
    asof, asof_day, source: isFred ? 'FRED' : 'Yahoo Finance',
  };
  if (meta.group === 'sector') {
    item.above_50dma = bars.length >= 50 ? bars[bars.length - 1].close > sma(bars, 50) : null;
    item.above_200dma = bars.length >= 200 ? bars[bars.length - 1].close > sma(bars, 200) : null;
  }
  // 검증용 원시 종가: 1M(21봉 전)까지 + YTD 기준(전년도 마지막 봉)만 남긴다. 전체 시계열은 용량 때문에 저장하지 않는다.
  const year = bars[bars.length - 1].day.slice(0, 4);
  const ytdBase = [...bars].reverse().find((b) => b.day.slice(0, 4) < year) || null;
  return { item, raw: { bars: bars.slice(-22), ytd_base: ytdBase } };
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

// 금리·스프레드는 %가 아니라 %p(bp) 차이로 보여준다. 나머지는 등락률.
const fmtChg = (it, key) => {
  if (!it || it.error) return 'N/A';
  if (it.kind === 'yield' || it.kind === 'spread') return bp(it[`d_${key}`]);
  return pct(it[`chg_${key}`]);
};

function groupTable(g, items, extended, h = '##') {
  const L = [`${h} ${g.label}`, ''];
  L.push(extended
    ? '| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |'
    : '| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |');
  L.push(extended ? '|---|---|---|---|---|---|---|---|---|' : '|------|------|-------------|-----------|-----------|--------------|');
  for (const [sym, meta] of Object.entries(g.items)) {
    const it = items[sym];
    const ok = it && !it.error;
    const [cl, pv] = ok ? [num(it.close, it.kind === 'yield' ? 3 : 2), num(it.prev, it.kind === 'yield' ? 3 : 2)] : ['N/A', 'N/A'];
    const asof = ok ? it.asof : '수집 실패';
    L.push(extended
      ? `| ${meta.label} | \`${sym}\` | ${cl} | ${fmtChg(it, '1d')} | ${fmtChg(it, '5d')} | ${fmtChg(it, '1m')} | ${fmtChg(it, 'ytd')} | ${pv} | ${asof} |`
      : `| ${meta.label} | \`${sym}\` | ${cl} | ${fmtChg(it, '1d')} | ${pv} | ${asof} |`);
  }
  L.push('');
  return L;
}

// 대시보드 표 묶음(마크다운). 0_data.md 와 리포트의 DASHBOARD 자리(inject_dashboard.js)가 같은 함수를 쓴다 —
// 그래서 LLM 이 읽은 수치와 사이트·메일에 나가는 수치가 항상 같다. h = 그룹 제목의 헤딩 기호.
function renderTables(data, h = '##') {
  const { items, derived } = data;
  const L = [];
  const extendedGroups = new Set(['index', 'rates', 'sector']);
  for (const g of GROUPS) {
    if (g.hidden) continue;
    L.push(...groupTable(g, items, extendedGroups.has(g.id), h));
    if (g.id === 'sector') {
      L.push(`${h}# 섹터 ETF 보조 지표 (1M 상대강도 vs SPY · 이동평균 위치)`);
      L.push('');
      L.push('| ETF | 1M vs SPY | 50일선 | 200일선 |');
      L.push('|---|---|---|---|');
      for (const [sym, meta] of Object.entries(g.items)) {
        const it = items[sym];
        const yn = (b) => (b === true ? '위' : b === false ? '아래' : 'N/A');
        L.push(`| ${meta.label} (\`${sym}\`) | ${it && it.vs_spy_1m != null ? pct(it.vs_spy_1m) : 'N/A'} | ${yn(it?.above_50dma)} | ${yn(it?.above_200dma)} |`);
      }
      L.push('');
    }
    if (g.id === 'rates') {
      const sp = derived.spread_10y_2y;
      L.push(sp
        ? `**10Y-2Y 스프레드 (FRED DGS10−DGS2, ${sp.asof_day}): ${sp.close.toFixed(2)}%p** (전일 대비 ${bp(sp.d_1d)})`
        : '**10Y-2Y 스프레드: N/A** (FRED 수집 실패)');
      L.push('');
    }
  }

  const v = (s) => (items[s] && !items[s].error ? items[s].close : null);
  const vix = v('^VIX');
  const ratio = (a, b) => (a && b ? (a / b).toFixed(3) : 'N/A');
  const shape = (a, b) => (a && b ? (a / b > 1 ? '콘탱고' : '백워데이션') : 'N/A');
  L.push(`${h}# VIX 기간구조 (위 수치에서 산출한 비율)`);
  L.push('');
  L.push('| 비율 | 값 | 구조 |');
  L.push('|------|----|------|');
  L.push(`| VIX3M / VIX | ${ratio(v('^VIX3M'), vix)} | ${shape(v('^VIX3M'), vix)} |`);
  L.push(`| VIX / VIX9D | ${ratio(vix, v('^VIX9D'))} | ${shape(vix, v('^VIX9D'))} |`);
  L.push('');
  L.push('> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**');
  L.push('');

  L.push(`${h} Put/Call 비율 (CBOE 옵션 체인 직접 집계)`);
  L.push('');
  L.push('| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |');
  L.push('|------|--------------|------------------|-----------|-----------|-------------|');
  for (const [sym, label] of PUTCALL_TARGETS) {
    const p = data.putcall?.[sym];
    if (p && !p.error) {
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
  return L;
}

function buildMarkdown(date, data, news, wire, newsSkipReason) {
  const L = [];
  L.push('# 자동 수집 시장 데이터 (0_data)');
  L.push(`# 기준일: ${date} · 미국 기준일(ET): ${data.us_date || 'N/A'} · 생성시각(KST): ${kstTime()}`);
  L.push('# 출처: Yahoo Finance chart API · FRED(키 없는 CSV) · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)');
  L.push('');
  L.push('> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.');
  L.push('> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.');
  L.push('> 금리·스프레드의 등락은 bp(1bp=0.01%p) 단위다. FRED 값은 영업일 기준 하루 늦게 확정될 수 있다(기준 열 참고).');
  L.push('');
  L.push(...renderTables(data));
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
    for (const [sector, list] of Object.entries(news)) {
      L.push(`### ${sector}`);
      L.push('');
      if (!list.length) {
        L.push('N/A — 해당 기간 신규 뉴스 없음');
      } else {
        for (const n of list) {
          L.push(`- **${n.ticker}** · ${n.headline}`);
          L.push(`  - ${n.source} · ${n.at} (ET) · ${n.url}`);
        }
      }
      L.push('');
    }
  }
  return L.join('\n') + '\n';
}

// --- 전체 수집 -------------------------------------------------------------

// 모든 심볼을 4개씩 병렬로 받는다. 실패한 항목은 close=null + error 로 남기고 계속 간다(추정 금지).
async function collectAll() {
  const entries = Object.entries(ITEM_META);
  const items = {};
  const raws = {};
  for (let i = 0; i < entries.length; i += 4) {
    await Promise.all(entries.slice(i, i + 4).map(async ([sym, meta]) => {
      const r = await safe(sym, () => collectItem(sym, meta));
      if (r.ok) {
        items[sym] = r.value.item;
        raws[sym] = r.value.raw;
      } else {
        items[sym] = { label: meta.label, group: meta.group, kind: meta.kind || 'price', policy: meta.policy, close: null, error: r.error, source: sym.startsWith('FRED:') ? 'FRED' : 'Yahoo Finance' };
      }
    }));
  }

  // 섹터 ETF 상대강도: 1M 등락률 − SPY 1M 등락률
  const spy = items.SPY;
  for (const it of Object.values(items)) {
    if (it.group === 'sector' && !it.error) {
      it.vs_spy_1m = spy && !spy.error && it.chg_1m != null && spy.chg_1m != null ? round(it.chg_1m - spy.chg_1m, 4) : null;
    }
  }

  // 10Y-2Y: FRED DGS10 − DGS2 를 같은 날짜끼리 계산한다 (Yahoo 10Y와 FRED 2Y의 기준일 불일치를 피함).
  const derived = { spread_10y_2y: null };
  if (!items['FRED:DGS10'].error && !items['FRED:DGS2'].error) {
    const [fa, fb] = await Promise.all([fredBars('DGS10'), fredBars('DGS2')]);
    const m2 = new Map(fb.bars.map((x) => [x.day, x.close]));
    const bars = fa.bars.filter((x) => m2.has(x.day)).map((x) => ({ day: x.day, close: round(x.close - m2.get(x.day), 4) }));
    if (bars.length > 30) {
      const st = periodStats(bars);
      derived.spread_10y_2y = {
        label: '10Y-2Y 스프레드', kind: 'spread', policy: 'fred', source: 'FRED(계산: DGS10−DGS2)',
        close: round(st.close, 4), prev: round(st.prev, 4), d_1d: round(st.d_1d, 4), d_5d: round(st.d_5d, 4),
        d_1m: round(st.d_1m, 4), d_ytd: round(st.d_ytd, 4), spark_20d: st.spark_20d,
        asof: `${bars[bars.length - 1].day} (FRED)`, asof_day: bars[bars.length - 1].day,
      };
      // 검증용 원시값: 같은 날짜의 DGS10/DGS2 마지막 6쌍
      derived.spread_10y_2y.raw = bars.slice(-6).map((b) => ({ day: b.day, dgs10: fa.bars.find((x) => x.day === b.day).close, dgs2: m2.get(b.day) }));
    }
  }
  return { items, derived, raws };
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

  console.log('FRED CSV 파싱 점검...');
  const csv = 'DATE,V\n' + Array.from({ length: 31 }, (_, i) => `2026-01-${String(i + 1).padStart(2, '0')},${i === 3 ? '.' : '4.5'}`).join('\n');
  assert.strictEqual(parseFredCsv(csv).length, 30, '결측(.) 행 제거 실패');
  console.log('  OK 결측 행 제거');

  console.log('기간 등락률 계산 단위 테스트...');
  const fake = Array.from({ length: 300 }, (_, i) => ({ day: new Date(Date.UTC(2025, 6, 1 + i)).toISOString().slice(0, 10), close: 100 + i }));
  const st = periodStats(fake);
  const last = fake[299].close;
  const approx = (a, b, msg) => assert(Math.abs(a - b) < 1e-9, msg);
  approx(st.chg_1d, (last / fake[298].close - 1) * 100, '1D 계산 오류');
  approx(st.chg_5d, (last / fake[294].close - 1) * 100, '5D 계산 오류');
  approx(st.chg_1m, (last / fake[278].close - 1) * 100, '1M 계산 오류');
  const lastPrevYear = fake.filter((b) => b.day < '2026-01-01').pop().close;
  approx(st.chg_ytd, (last / lastPrevYear - 1) * 100, 'YTD 계산 오류');
  console.log('  OK 1D/5D/1M/YTD');

  console.log('전 심볼 수집 점검 (config/universe.json 전체)...');
  const { items, derived } = await collectAll();
  const bad = Object.entries(items).filter(([, it]) => it.error || typeof it.close !== 'number' || !(it.close > 0));
  bad.forEach(([s, it]) => console.log(`  FAIL ${s}: ${it.error || `close=${it.close}`}`));
  assert.strictEqual(bad.length, 0, `${bad.length}개 심볼 수집 실패`);
  for (const [s, it] of Object.entries(items)) {
    for (const k of ['chg_1d', 'chg_5d', 'chg_1m', 'chg_ytd']) assert(typeof it[k] === 'number', `${s} ${k} 없음`);
    assert(it.spark_20d.length === 20, `${s} 스파크라인 길이 ${it.spark_20d.length}`);
  }
  assert(derived.spread_10y_2y, '10Y-2Y 계산 실패');
  assert(Math.abs(items['^TNX'].close - items['FRED:DGS10'].close) < 0.5, '^TNX 단위(퍼센트) 이상: Yahoo/FRED 10Y 차이가 큼');
  console.log(`  OK ${Object.keys(items).length}개 심볼 · 10Y-2Y = ${derived.spread_10y_2y.close}%p`);

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
  const oi = args.indexOf('--out'); // 테스트용: logs/<date> 대신 다른 폴더에 쓴다 (예: --out logs/_rerun)
  const outDir = oi >= 0 ? path.resolve(args[oi + 1]) : path.join(__dirname, 'logs', date);

  console.log(`수집 시작 — 기준일 ${date}`);

  const { items, derived, raws } = await collectAll();
  const okCount = Object.values(items).filter((r) => !r.error).length;
  console.log(`  시세 ${okCount}/${Object.keys(items).length} 성공`);

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

  // 미국 기준일 = S&P500 종가일. S&P 수집이 실패했으면 null (추정하지 않는다).
  const usDate = items['^GSPC'] && !items['^GSPC'].error ? items['^GSPC'].asof_day : null;
  const generatedAt = new Date();
  const data = {
    date, us_date: usDate, generated_at: generatedAt.toISOString(), generated_at_kst: kstTime(generatedAt),
    items, derived,
    putcall: Object.fromEntries(Object.entries(putCalls).map(([k, r]) => [k, r.ok ? r.value : { error: r.error }])),
    news_skipped: newsSkipReason,
  };

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, '0_data.md'), buildMarkdown(date, data, news, wire, newsSkipReason), 'utf8');
  C.writeJson(path.join(outDir, '0_data.json'), { ...data, raw: raws });
  // 사이트용 사본: 원시 종가(raw)는 빼고 표시에 필요한 값만 둔다. docs/data 는 매일 봇이 커밋한다.
  const sp = derived.spread_10y_2y;
  const siteSpread = sp ? (({ raw, ...rest }) => rest)(sp) : null;
  C.writeJson(path.join(__dirname, 'docs', 'data', 'latest.json'), { ...data, derived: { spread_10y_2y: siteSpread } });
  console.log(`완료: logs/${date}/0_data.md · 0_data.json · docs/data/latest.json`);
}

// verify_data.js 등이 재사용할 수 있게 노출한다 (require 시에는 main을 실행하지 않는다).
module.exports = { renderTables, yahooBars, fredBars, periodStats, parseFredCsv, ITEM_META, GROUPS, WATCHLIST, UNIVERSE };

if (require.main === module) {
  main().catch((e) => {
    console.error(e.message || e);
    process.exit(1);
  });
}
