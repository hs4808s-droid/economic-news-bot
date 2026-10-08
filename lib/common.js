'use strict';
// 공용 유틸: 날짜(KST/ET), HTTP, 미국 거래일 계산. fetch_market_data / verify_data / update_calendar가 함께 쓴다.
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const UA = 'Mozilla/5.0 (compatible; economic-news-bot/1.0)';

const kstDate = (d = new Date()) => d.toLocaleDateString('sv-SE', { timeZone: 'Asia/Seoul' });
const kstTime = (d = new Date()) => d.toLocaleString('sv-SE', { timeZone: 'Asia/Seoul' }).slice(0, 16);
const etDay = (ts) => new Date(ts * 1000).toLocaleDateString('sv-SE', { timeZone: 'America/New_York' });
const etTime = (ts) => (ts ? new Date(ts * 1000).toLocaleString('sv-SE', { timeZone: 'America/New_York' }).slice(0, 16) : null);
const etHour = (d) => Number(d.toLocaleString('en-US', { timeZone: 'America/New_York', hour: '2-digit', hour12: false }));

const readJson = (p, fallback) => {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return fallback; }
};
const writeJson = (p, obj) => {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(obj, null, 2) + '\n', 'utf8');
};

async function getText(url, timeoutMs = 60000, headers = {}) {
  const res = await fetch(url, { headers: { 'User-Agent': UA, Accept: 'application/json,text/csv,*/*', ...headers }, signal: AbortSignal.timeout(timeoutMs) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}
const getJson = async (url, t, h) => JSON.parse(await getText(url, t, h));
// Nasdaq API 는 봇 UA 에 응답을 주지 않고 매달아 둔다(실측: 40초 타임아웃). 일반 브라우저 UA 를 쓴다.
const BROWSER_UA = { 'User-Agent': 'Mozilla/5.0' };

// --- 미국 거래일 -------------------------------------------------------------
const HOLIDAYS = new Set(readJson(path.join(ROOT, 'config', 'nyse_holidays.json'), { dates: [] }).dates);
const isWeekend = (ymd) => [0, 6].includes(new Date(ymd + 'T00:00:00Z').getUTCDay());
const isTradingDay = (ymd) => !isWeekend(ymd) && !HOLIDAYS.has(ymd);
const addDays = (ymd, n) => new Date(new Date(ymd + 'T00:00:00Z').getTime() + n * 86400000).toISOString().slice(0, 10);
function prevTradingDay(ymd) {
  let d = addDays(ymd, -1);
  while (!isTradingDay(d)) d = addDays(d, -1);
  return d;
}
// 기준 시각 now 에 "종가가 확정된 가장 최근 미국 거래일"(ET). 16:00 ET 이후면 당일, 아니면 직전 거래일.
function expectedTradingDay(now = new Date()) {
  const today = etDay(now.getTime() / 1000);
  if (isTradingDay(today) && etHour(now) >= 16) return today;
  return prevTradingDay(today);
}
// 거래일 n개 전 (n>=0)
function tradingDaysBack(ymd, n) {
  let d = ymd;
  for (let i = 0; i < n; i++) d = prevTradingDay(d);
  return d;
}

module.exports = { ROOT, UA, BROWSER_UA, kstDate, kstTime, etDay, etTime, etHour, readJson, writeJson, getText, getJson, isTradingDay, prevTradingDay, expectedTradingDay, tradingDaysBack, addDays };
