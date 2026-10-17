'use strict';
// SEC EDGAR XBRL(data.sec.gov)에서 미국 상장사의 분기 GAAP 희석 EPS 이력을 읽는다. 전년 동기 EPS 부호 검증용.
// 외국 기업(20-F/6-K)과 4분기(10-K 연간에 포함)는 이력이 없어 null 을 돌려준다 — 검증 불가이지 오류가 아니다.
const C = require('./common');
const H = { 'User-Agent': 'economic-news-bot/1.0 (research script)', Accept: 'application/json' };

let tickerMap = null;
async function cikOf(ticker) {
  if (!tickerMap) {
    const j = await C.getJson('https://www.sec.gov/files/company_tickers.json', 30000, H);
    tickerMap = new Map(Object.values(j).map((r) => [r.ticker, String(r.cik_str).padStart(10, '0')]));
  }
  return tickerMap.get(ticker) || null;
}

// 반환: [{ end, val }]  3개월(80~100일) 보고 기간만, 최신순
async function quarterlyEps(ticker) {
  const cik = await cikOf(ticker);
  if (!cik) return null;
  let j;
  try { j = await C.getJson(`https://data.sec.gov/api/xbrl/companyconcept/CIK${cik}/us-gaap/EarningsPerShareDiluted.json`, 30000, H); } catch { return null; }
  const rows = (j.units?.['USD/shares'] || []).filter((r) => r.start && r.end && (new Date(r.end) - new Date(r.start)) / 864e5 > 80 && (new Date(r.end) - new Date(r.start)) / 864e5 < 100);
  const byEnd = new Map(rows.map((r) => [r.end, r.val]));
  return [...byEnd].map(([end, val]) => ({ end, val })).sort((a, b) => b.end.localeCompare(a.end));
}

// 곧 발표될 분기의 "전년 동기": 10-Q 에 있는 가장 최근 분기말 L 의 다음 분기 = L+3개월, 그 -12개월 = L-9개월 (±20일)
function priorYearQuarter(hist, dateEt) {
  const L = hist && hist[0];
  if (!L || (new Date(dateEt) - new Date(L.end)) / 864e5 > 150) return null; // 이력이 낡았으면 검증 안 함
  const t = new Date(L.end + 'T00:00:00Z'); t.setUTCMonth(t.getUTCMonth() - 9);
  return hist.find((r) => Math.abs(new Date(r.end) - t) / 864e5 <= 20) || null;
}

module.exports = { quarterlyEps, priorYearQuarter, cikOf };
