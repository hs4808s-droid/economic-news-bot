# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-09-30 · 생성시각(KST): 2026-09-30 06:30
# 출처: Yahoo Finance chart API · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,738.25 | -0.11% | 7,746.75 | 2026-09-29 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 30,652.75 | +0.28% | 30,566.25 | 2026-09-29 16:59 |
| 다우 선물 (YM) | `YM=F` | 51,755 | -0.16% | 51,837 | 2026-09-29 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,831.4 | -0.31% | 2,840.1 | 2026-09-29 16:59 |

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 16.04 | -0.19% | 16.07 | 2026-09-29 16:15 |
| VIX9D (9일) | `^VIX9D` | 14.21 | -1.25% | 14.39 | 2026-09-29 16:15 |
| VIX3M (3개월) | `^VIX3M` | 18.09 | -0.77% | 18.23 | 2026-09-29 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 89.71 | -1.44% | 91.02 | 2026-09-29 16:15 |
| SKEW (테일리스크) | `^SKEW` | 144.58 | -1.14% | 146.25 | 2026-09-29 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 미 10년 국채선물 | `ZN=F` | 104.53 | +0.04% | 104.48 | 2026-09-29 16:59 |
| 금 | `GC=F` | 4,215 | -2.46% | 4,321.2 | 2026-09-29 16:59 |
| WTI | `CL=F` | 88.94 | -3.95% | 92.6 | 2026-09-29 16:59 |
| 달러지수 (DXY) | `DX-Y.NYB` | 101.39 | +0.19% | 101.2 | 2026-09-29 17:20 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.128 | 콘탱고 |
| VIX / VIX9D | 1.129 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.101 | 1.390 | 2,319,181 | 2,552,817 | 30,110 |
| 나스닥100 ETF 옵션 (QQQ) | 1.077 | 1.416 | 4,095,888 | 4,411,717 | 11,330 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **Reuters** · US imposes sanctions on 13 tied to Iran weapons procurement - Reuters
  - 2026-09-29 17:03 (ET) · https://news.google.com/rss/articles/CBMirAFBVV95cUxOWWZ2NlJ3d0swV0JKWFhhREdzNmxnUlhaSlE0eFlrbUhBZ3RBMXhQeEJSS1JCTnR2UV82cTA4YW4yUDR5YnNUd1FmN2M1Z1liMWhfNEJOUnFMLVYtTzFCMjFSTWJuaWlhUFdHc3lLVE9tMHZUWkRldzJXaFd3SDdqX1NIOXJxRTBFZF9FT1Fvalg1b25FWm1RVEYySkUzZS1nNHItOXMtVUVTQjVt?oc=5
- **CNBC** · Goldman Sachs CEO succession planning faces one big problem
  - 2026-09-29 16:50 (ET) · https://www.cnbc.com/2026/09/29/goldman-sachs-ceo-succession-planning.html
- **CNBC** · John Ternus' vision for Apple is coming into view, and we like what we see
  - 2026-09-29 15:08 (ET) · https://www.cnbc.com/2026/09/29/john-ternus-vision-for-apple-is-coming-into-view-and-we-like-what-we-see.html
- **Reuters** · Using old election playbook, Netanyahu projects image as Israel's protector despite Hamas attack - Reuters
  - 2026-09-29 14:40 (ET) · https://news.google.com/rss/articles/CBMizAFBVV95cUxNaGhLcllsckhTZ1ZsYzVwdzc1V2p5UWhmZFpSa2xJbVhmNTJXckNxVTE2ckkzcGl0N25US0JaTjFId1hMZHFSelBoUWx0Y0VvNEZlVWstOWp1b2F0Wm5fOEZVNW1GRkIwbHYyaE1QSmRkSnpuNVo2UkJ5SHZpT094a0xkcmFKaE5GLU53U3hPTlVqWjFoNjRMUWY5cWRyN0pxa3BhUGU3My0tNEN4bTE1MTVVZXVKQTNTTG1FYl9oNE1MLVBUUkVCSHRIcS0?oc=5
- **Reuters** · UK police say no explosive devices found in airbase probe - Reuters
  - 2026-09-29 13:36 (ET) · https://news.google.com/rss/articles/CBMinAFBVV95cUxNSUxVYmd1LVFBRTFKeTE2cjhic3VRLVpTN2xkMnhhQlFGMVFxUm1qM3FlMnVDZkM3RjBLS0QzMHlXQ3h4RlI4SXVEZF9CMXVGblg5WlE5NVVOOXJKRkI3ZkdTQWMyQlRuNVdaeUQtTnZHeHNla3JyNXdXbzY4c19yRUdtWDIxdjYxS3ZxZDFZQ3VMVW5hejhteWJmOFI?oc=5
- **Reuters** · US to loan up to 40 million barrels of oil from SPR, last batch from global deal - Reuters
  - 2026-09-29 13:26 (ET) · https://news.google.com/rss/articles/CBMivwFBVV95cUxPYzc4cTNMeUhoSHg2R2Mxa1hVMUtWb2xGbk92dHp0aWUzejZKbWVVbjBRb240dzRuX0dNVTMwbDVPOXRJbWJhT28xTEpwTGMyZEZKMXpSTlJFLTRVZkd6RDVzYk9vZFBKNkNEdE9ENFo0WDhXaWRTZ2Q0bzBpeEFRUDM5WF9JOFpBYmJ6U3ZkRnRtdFBUQmkzN0M3WEtsazI5TDFPNEl3eHViVGNuSlJHZzBVbFN6eXdrVVNYWmx2OA?oc=5
- **CNBC** · Cramer weighs in on Goldman amid CEO succession talks — plus, Boeing bounces back
  - 2026-09-29 12:08 (ET) · https://www.cnbc.com/2026/09/29/cramers-take-on-goldman-ceo-succession-plus-boeing-bounces-back.html
- **CNBC** · Gina Raimondo thinks AI ultimately will create jobs. It's the initial mass layoffs wave that worries her
  - 2026-09-29 11:36 (ET) · https://www.cnbc.com/2026/09/29/ai-job-losses-layoffs.html
- **Reuters** · Exxon veteran Liam Mallon joins TMC board ahead of seabed mining push - Reuters
  - 2026-09-29 11:24 (ET) · https://news.google.com/rss/articles/CBMiuwFBVV95cUxPb0cxSUFycjRrZ3l3TFJORGJaTUdFTWcteGlYVjBsYU1CSXhnZXlXWVlZeTVmeS1pbUNFNHZJUENGSFk2Mng3NE1OX1hZcVU2T1dBc243OVB3dDR5ZklSdVNqV00xUjR0dERCN2didjVqYzJGSHdVNnRUMHJEYjJCQXY5U0ZPZWxYYzBVUV80Vl9qWHFYaW42eDVtX2xNMTZNUWpZRXZ3RDBKb2hHNTJiNktRal8xeEEyUV9r?oc=5
- **Reuters** · Iranians stagger under soaring costs of seven months of war - Reuters
  - 2026-09-29 11:10 (ET) · https://news.google.com/rss/articles/CBMiqAFBVV95cUxQZkZiODJvYlVSWTFTXzU5NnY5dV9vQzAya01EME94cUZRdmtITkpwTnR2UWVLX0gtY2hOX0k5bE1mbUpSSjhGMU43NDRqQkJJaWVVVmt6d1p3cmJnVGdJQkg3U0RtUTZXVDRzVUNJdnB3bDdiUmVLTDF0ZXc1a3FnTi1qMVNOZUxxeVFZR1JxbDZUaFVmT2RIWDlTN292SFBUZlVYUDZwNG0?oc=5
- **Reuters** · Iraqi Airways to resume Iran flights in October after securing 'special exemption' - Reuters
  - 2026-09-29 09:58 (ET) · https://news.google.com/rss/articles/CBMixwFBVV95cUxPUmhrZmNPS2RtZVBMZVFTS1F5NXZkbFpybE1oQzVOWHN5aDh6clVJQk9CY0xnV21HUGotSHNFQmh3Z2NQOGVzU3RJZkhjaTVSYWNpNGs3MW96dk1DZ0w4eml6OUIzaWhnVThqWjR0azJfc0xaN3B4TGtYME9ya2dHWHUxcHcxZ081dEZfMzlXdkF0MW9iOHVnWHpWS3FUQ2pOOS10WHRIMTRERVpneTE3aVpjOFlvRWtKSHFzQkFab3hDUHlVWmV3?oc=5
- **CNBC** · Investors who have shunned diversification face maybe the best buying opportunity for bonds in decades
  - 2026-09-29 09:22 (ET) · https://www.cnbc.com/2026/09/29/investors-who-have-shunned-diversification-face-maybe-the-best-buying-opportunity-for-bonds-in-decades.html
- **Reuters** · Most Gulf equities end lower amid cautious response to renewed US-Iran talks - Reuters
  - 2026-09-29 09:16 (ET) · https://news.google.com/rss/articles/CBMiuAFBVV95cUxNNkFOX3FoaXBxc3NzemVSOHlWaFkxQnd1Wl9pOVd1TmZEMWZSTkZfckRiaEpzajRZNWM0bkFPREZXME93cVlBZU9rT25yZ0hMTDd6OHdNZWM1WlJIYlE3Z3U0ZXI5MU5NaVBucjRVQTJyVjdSUHh0ZHBrNTdfRnVnaWl3VUJDbFVRa3VoaUs1NG9yVURNUHRvSUxpNW1QM3gwZzBjaVJMUnlCaTZzY2k1aU1TeWNyTTUx?oc=5
- **CNBC** · Some wealthy Americans are spending up to $250,000 a year on longevity care. Here's what doctors say about the practice
  - 2026-09-29 09:09 (ET) · https://www.cnbc.com/2026/09/29/longevity-clinic-costs.html
- **CNBC** · Coinbase Ventures and CMCC Global close strategic funding round with trading firm Raven
  - 2026-09-29 09:05 (ET) · https://www.cnbc.com/2026/09/29/coinbase-ventures-and-cmcc-global-close-strategic-funding-round-with-raven.html

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Sector Update: Tech Stocks Rise Late Afternoon
  - Yahoo · 2026-09-29 15:55 (ET) · https://finnhub.io/api/news?id=fcf79993b993d12393c90aa654ab7a52182ffa384966151be8fb727fcab57338
- **NVDA** · I've Covered Palantir for 5 Years. Here's How to Know if the Artificial Intelligence (AI) Stock Is Overvalued.
  - Yahoo · 2026-09-29 15:47 (ET) · https://finnhub.io/api/news?id=cd7e4b72c0da063d663a0f4fef188bcc7b66f2363034f5fc031c8d81d69b9eab
- **NVDA** · What we know about Trump's meeting with Alex Karp, Jensen Huang, & other AI leaders
  - Yahoo · 2026-09-29 15:40 (ET) · https://finnhub.io/api/news?id=67e08d454a277d7cec8c7c39f23a4940fa032ecc87f930f6b0b2d280ca99ef3b
- **AVGO** · Marvell Is Up 210% in 2026: Take Profits, or Buy More?
  - Yahoo · 2026-09-29 15:01 (ET) · https://finnhub.io/api/news?id=513f74c8c35d4f0cfed1620f5cbe2dbf7603340c1e5c30742f2664c172d78bf0
- **AVGO** · Broadcom Stock Jumps Nearly 3.2% as $16.7 Billion AI Engine Faces Margin Test
  - Yahoo · 2026-09-29 14:46 (ET) · https://finnhub.io/api/news?id=cb8b32c7d964b863df44f8539dd51812887f54327e0d02334589cdf35160c33f
- **AVGO** · Reflecting On Processors and Graphics Chips Stocks’ Q2 Earnings: Broadcom (NASDAQ:AVGO)
  - Yahoo · 2026-09-29 14:40 (ET) · https://finnhub.io/api/news?id=3fb09f7f4dde4148a255efb9c748335460f7fb5931ea73b0e8e148dea9652843

### 금융

- **JPM** · JPMorgan Says Micron's Rally May Not Be Over
  - Yahoo · 2026-09-29 15:21 (ET) · https://finnhub.io/api/news?id=7152204adfa4ef86ce4ec7b6611be347cb85269d0fd77b7207a64d2e79d7bc9a
- **JPM** · JPM vs. GS: The Dividend Raiser That Won’t Flinch When Markets Crack
  - Yahoo · 2026-09-29 12:30 (ET) · https://finnhub.io/api/news?id=0661cf962cf47adcbc6399bd2a872dcd3b7f906216ea23273952d927b7f51d0d
- **JPM** · Michigan LIFT Launches to Accelerate Industrial Innovation, Scale Manufacturing Growth and Strengthen U.S. Competitiveness
  - Yahoo · 2026-09-29 11:30 (ET) · https://finnhub.io/api/news?id=6c8860340446126d956dc95fb2d99d76c49739777aaa20b079780e2c175ed8db

### 에너지

- **XOM** · ExxonMobil Taps SLB Venture for Giant African LNG Project
  - Yahoo · 2026-09-29 13:45 (ET) · https://finnhub.io/api/news?id=164314fa685b86aa1b6d961325ddb609ad77d2adfee0cd90f29de3ae6b106f85
- **XOM** · ExxonMobil Upstream Veteran Joins TMC Board Ahead of Seabed Mining Push
  - Yahoo · 2026-09-29 13:40 (ET) · https://finnhub.io/api/news?id=f117fda788ed7635d57ab7d62b876a3887a6158b018c63621a4c741cfbdb5bb5
- **XOM** · Exxon Stock Trades Near Its High After a 44% Run. Here’s What Could Stall the Rally
  - Yahoo · 2026-09-29 12:31 (ET) · https://finnhub.io/api/news?id=52042fd51e2aa92061d5a1b9f715d4fcdd2c59560cde8de0084fd64c9cae3ac8

### 헬스케어

- **UNH** · Which dow jones stocks are moving on Tuesday?
  - ChartMill · 2026-09-29 15:10 (ET) · https://finnhub.io/api/news?id=d86a89f12f7a3769625ba57f71398b516023a72b2444d33a1d6a23ea31e36d7c
- **UNH** · What Are UNH Stock Investors Betting On?
  - Yahoo · 2026-09-29 14:25 (ET) · https://finnhub.io/api/news?id=235745f2ec56182ee07c85a38d1c9a880f6d5ddce34e70ce68a6175f09891376
- **UNH** · Uncover the latest developments among dow jones stocks in today's session.
  - ChartMill · 2026-09-29 12:40 (ET) · https://finnhub.io/api/news?id=362a7fa3a08b5b82f86e238a015d29e47e2b1662bb86ae269c887a259e761117

### 소비재·유통

- **AMZN** · Sector Update: Tech Stocks Rise Late Afternoon
  - Yahoo · 2026-09-29 15:55 (ET) · https://finnhub.io/api/news?id=fcf79993b993d12393c90aa654ab7a52182ffa384966151be8fb727fcab57338
- **AMZN** · What Is The One Risk Every Google Stock Investor Should Know?
  - Yahoo · 2026-09-29 15:20 (ET) · https://finnhub.io/api/news?id=a7967c24b06427f73d01cc10288db31526e618c49311614800fc516f583dc0bb
- **AMZN** · SpaceX Briefly Passed Amazon and Microsoft in Market Cap After Its IPO. Could It Get There Again?
  - Yahoo · 2026-09-29 15:19 (ET) · https://finnhub.io/api/news?id=81753abf08510cb607b0440483dfb9e964feb80c5a8c24c4ad358cf2e2f03532

