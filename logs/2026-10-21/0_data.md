# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-21 · 미국 기준일(ET): 2026-10-20 · 생성시각(KST): 2026-10-21 06:30
# 출처: Yahoo Finance chart API · FRED(키 없는 CSV) · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.
> **금리 기준 통일:** 2년물·10년물·10Y-2Y 는 FRED 일별 값(같은 기준일)만 본문에 쓴다. Yahoo ^TNX·^TYX 는 당일 참고용이라 FRED 값과 섞어 인용하지 않는다.
> 금리·스프레드의 등락은 bp(1bp=0.01%p) 단위다. FRED 값은 영업일 기준 하루 늦게 확정될 수 있다(기준 열 참고).

## 미국 주요 지수

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| S&P500 | `^GSPC` | 7,712.57 | +0.28% | -1.19% | -0.67% | +12.67% | 7,690.73 | 2026-10-20 16:45 |
| 나스닥종합 | `^IXIC` | 26,424.82 | -0.02% | -2.87% | -2.57% | +13.69% | 26,430.89 | 2026-10-20 17:15 |
| 다우 | `^DJI` | 52,495.88 | +1.02% | +1.60% | +0.86% | +9.22% | 51,966.03 | 2026-10-20 16:46 |
| 러셀2000 | `^RUT` | 2,773.42 | +1.65% | -0.36% | -3.55% | +11.75% | 2,728.3 | 2026-10-20 16:30 |
| SOX (필라델피아 반도체) | `^SOX` | 11,283.81 | -0.29% | -7.58% | -9.24% | +59.31% | 11,316.34 | 2026-10-20 17:15 |

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,784.75 | +0.65% | 7,734.5 | 2026-10-20 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 29,893.75 | +0.58% | 29,722.5 | 2026-10-20 16:59 |
| 다우 선물 (YM) | `YM=F` | 52,838 | +1.26% | 52,182 | 2026-10-20 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,792.2 | +1.82% | 2,742.3 | 2026-10-20 16:59 |

## 금리

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 미 2년물 금리 (FRED·기준) | `FRED:DGS2` | 4.77 | +3.0bp | -3.0bp | +10.0bp | +130.0bp | 4.74 | 2026-10-19 (FRED) |
| 미 10년물 금리 (FRED·기준) | `FRED:DGS10` | 5.15 | +6.0bp | -9.0bp | +21.0bp | +97.0bp | 5.09 | 2026-10-19 (FRED) |
| 미 10년물 금리 (Yahoo 당일·참고) | `^TNX` | 5.117 | -1.9bp | -10.0bp | +15.4bp | +95.4bp | 5.136 | 2026-10-20 14:59 |
| 미 30년물 금리 (Yahoo 당일·참고) | `^TYX` | 5.425 | -4.7bp | -13.8bp | +12.9bp | +58.5bp | 5.472 | 2026-10-20 14:59 |

**10Y-2Y 스프레드 (FRED DGS10−DGS2, 2026-10-19): 0.38%p** (전일 대비 +3.0bp)

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 17.31 | -6.13% | 18.44 | 2026-10-20 16:15 |
| VIX9D (9일) | `^VIX9D` | 16.27 | -9.26% | 17.93 | 2026-10-20 16:15 |
| VIX3M (3개월) | `^VIX3M` | 18.99 | -3.11% | 19.6 | 2026-10-20 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 97.15 | -9.15% | 106.93 | 2026-10-20 16:15 |
| SKEW (테일리스크) | `^SKEW` | 160.4 | -0.90% | 161.86 | 2026-10-20 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 달러지수 (DXY) | `DX-Y.NYB` | 101.7 | -0.27% | 101.98 | 2026-10-20 17:20 |
| USD/KRW | `KRW=X` | 1,326.18 | -0.54% | 1,333.43 | 2026-10-20 17:13 |
| WTI | `CL=F` | 98.18 | -5.29% | 103.66 | 2026-10-20 16:59 |
| Brent | `BZ=F` | 109.12 | -0.39% | 109.55 | 2026-10-20 16:57 |
| 금 | `GC=F` | 4,142.5 | -0.42% | 4,160.1 | 2026-10-20 16:59 |
| 구리 | `HG=F` | 6.62 | +1.19% | 6.54 | 2026-10-20 16:59 |
| 비트코인 | `BTC-USD` | 82,827.3 | +1.19% | 81,853.54 | 2026-10-20 17:30 |
| 하이일드 스프레드 (OAS, %p) | `FRED:BAMLH0A0HYM2` | 3.29 | -2.0bp | 3.31 | 2026-10-19 (FRED) |

## 섹터 ETF

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 기술 | `XLK` | 185.44 | -0.28% | -5.52% | -4.83% | +28.80% | 185.96 | 2026-10-20 16:00 |
| 금융 | `XLF` | 55.72 | +1.20% | +1.64% | -0.32% | +1.73% | 55.06 | 2026-10-20 16:00 |
| 에너지 | `XLE` | 67.97 | +0.25% | +1.15% | +8.82% | +52.02% | 67.8 | 2026-10-20 16:00 |
| 헬스케어 | `XLV` | 179.82 | +2.37% | +5.99% | +6.40% | +16.16% | 175.65 | 2026-10-20 16:00 |
| 경기소비재 | `XLY` | 115.5 | +0.91% | +2.79% | +2.91% | -3.27% | 114.46 | 2026-10-20 16:00 |
| 필수소비재 | `XLP` | 87.75 | +0.62% | +4.23% | +7.12% | +12.96% | 87.21 | 2026-10-20 16:00 |
| 산업재 | `XLI` | 166.8 | +0.07% | -1.11% | -1.87% | +7.53% | 166.68 | 2026-10-20 16:00 |
| 소재 | `XLB` | 51.23 | +0.55% | +3.04% | +3.06% | +12.97% | 50.95 | 2026-10-20 16:00 |
| 유틸리티 | `XLU` | 41.88 | +1.26% | +0.02% | +3.00% | -1.90% | 41.36 | 2026-10-20 16:00 |
| 부동산 | `XLRE` | 42.38 | +1.70% | +1.31% | -0.49% | +5.03% | 41.67 | 2026-10-20 16:00 |
| 커뮤니케이션 | `XLC` | 110.19 | +0.09% | -1.86% | -3.97% | -6.40% | 110.09 | 2026-10-20 16:00 |
| 반도체 | `SMH` | 546.36 | -0.38% | -7.10% | -8.33% | +51.71% | 548.46 | 2026-10-20 16:00 |
| 소프트웨어 | `IGV` | 106.93 | +0.89% | -3.65% | -0.19% | +1.17% | 105.99 | 2026-10-20 16:00 |
| 지역은행 | `KRE` | 70.62 | +1.96% | +2.26% | -1.90% | +8.96% | 69.26 | 2026-10-20 16:00 |
| 바이오 | `XBI` | 153.24 | +3.64% | +4.39% | -3.15% | +25.68% | 147.86 | 2026-10-20 16:00 |

### 섹터 ETF 보조 지표 (1M 상대강도 vs SPY · 이동평균 위치)

| ETF | 1M vs SPY | 50일선 | 200일선 |
|---|---|---|---|
| 기술 (`XLK`) | -4.25% | 아래 | 위 |
| 금융 (`XLF`) | +0.25% | 아래 | 위 |
| 에너지 (`XLE`) | +9.40% | 위 | 위 |
| 헬스케어 (`XLV`) | +6.97% | 위 | 위 |
| 경기소비재 (`XLY`) | +3.49% | 위 | 아래 |
| 필수소비재 (`XLP`) | +7.69% | 위 | 위 |
| 산업재 (`XLI`) | -1.30% | 아래 | 아래 |
| 소재 (`XLB`) | +3.63% | 위 | 위 |
| 유틸리티 (`XLU`) | +3.58% | 아래 | 아래 |
| 부동산 (`XLRE`) | +0.08% | 아래 | 아래 |
| 커뮤니케이션 (`XLC`) | -3.40% | 아래 | 아래 |
| 반도체 (`SMH`) | -7.76% | 아래 | 위 |
| 소프트웨어 (`IGV`) | +0.39% | 위 | 위 |
| 지역은행 (`KRE`) | -1.33% | 아래 | 아래 |
| 바이오 (`XBI`) | -2.58% | 아래 | 위 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.097 | 콘탱고 |
| VIX / VIX9D | 1.064 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.156 | 1.455 | 2,344,586 | 2,709,252 | 29,492 |
| 나스닥100 ETF 옵션 (QQQ) | 1.204 | 1.434 | 3,925,331 | 4,726,155 | 10,872 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **CNBC** · United Airlines slashes 2026 profit outlook on fuel prices, but travelers keep booking despite higher fares
  - 2026-10-20 16:03 (ET) · https://www.cnbc.com/2026/10/20/united-airlines-ual-3q-2026-earnings.html
- **CNBC** · Boeing wins FAA approval for 737 Max 10 after years of delays
  - 2026-10-20 15:41 (ET) · https://www.cnbc.com/2026/10/20/boeing-737-max-10-certification.html
- **CNBC** · We're booking big profits in an AI stock and trimming a credit-exposed bank
  - 2026-10-20 15:00 (ET) · https://www.cnbc.com/investingclub/2026/10/20/were-booking-big-profits-in-an-ai-stock-and-trimming-a-credit-exposed-bank.html
- **CNBC** · Traders are betting Netflix's stock drama may be coming to an end
  - 2026-10-20 14:10 (ET) · https://www.cnbc.com/2026/10/20/traders-are-betting-netflixs-stock-drama-may-be-coming-to-an-end.html
- **CNBC** · Stocks try for back-to-back gains — plus, Qnity gets iPhone business from Apple
  - 2026-10-20 14:09 (ET) · https://www.cnbc.com/investingclub/2026/10/20/stocks-try-for-back-to-back-gains-plus-qnity-gets-iphone-business-from-apple.html
- **Reuters** · Iran tells Pakistan army chief no talks with Washington until demands are met - Reuters
  - 2026-10-20 14:02 (ET) · https://news.google.com/rss/articles/CBMizgFBVV95cUxOVDRWMklOYkRvUmtPYU1tcnN0MVJCbzRxWlJzS3lSUFhsZzQ3SnQ2N0FKXzRsZFpmdmMwS1lVYWhKenNoNEF6UmhhcThrbVM1V0ZHQUk0aXFwWHlvbXFNWVhzQkV2aHVzM1I2am9fOHFHa19CQlN0Z3FqUG5nc2VwQUJxazBhbGZlSUhDMHExSWJLbDJNNXRjc3BOYkZrTThIUW1IUkE4QUI2azl6MzZHT0Nrb2M4aDZBQzZKYVp4OTg0VV9xWWllLUJGYkFkdw?oc=5
- **Reuters** · Israeli fire kills four people in Gaza, medics say - Reuters
  - 2026-10-20 13:51 (ET) · https://news.google.com/rss/articles/CBMiogFBVV95cUxPNTMzR3ZQMmZ1R0RFZHQyOUxldnFwaXF4QVhEUmpwUUEwM2lGYUZXUXBILVhjS3BUZXl1WUNCbTNZTDY1RnYwWDg2Qi1EbGxqczBnY2FwcGE0eUxzOG1OQmJEZWdWbHFkbTctcHdKcDVOXzRsQ2JJQjJRUDdyN2lUUTJIYXJxSk1mLVJLYUs0UEdFTVZMMG5QcEVyRWgtWUQ4RVE?oc=5
- **Reuters** · Turkey submits Saudi-Pakistan defence pact to parliament for ratification, sources say - Reuters
  - 2026-10-20 13:27 (ET) · https://news.google.com/rss/articles/CBMizAFBVV95cUxNUFRNd3JZYUQ0bDBIdTYxNDczNExsX1h3ZUN5RU0xdTRUeThLVVljcjBHTkRlRUpxaUotM2tTUExONi15T29YQlJTZ2FPaEpoS0VkMXdiUlBGcTNNWXFoc0lEVUlHT0pIZWRZR1RUeXpVYW5aRlNZd2dGZXFIVFMyanFXcGh3V1JQcXRzM1ZzNnBSazBIT2NSVDNCa2pRTlZhNWt1cGpNeFNZTTFkd09iQ1hKZURpLThleHlNUmpFdVp2Yjg0WVA3VThydDI?oc=5
- **Reuters** · UK police arrest pair on suspicion of helping Iranian intelligence over RAF Fairford incident - Reuters
  - 2026-10-20 13:10 (ET) · https://news.google.com/rss/articles/CBMiuAFBVV95cUxNOWtHNEd1UkNWcGVXUE1HOW96YUlFbUQtRE8xdGstc1FlMTFSR0plZjc0Z21kR3lGczUwaEprd3pUcUtvX0x1VE5Cb28xSWNOd0R2UTM1TklYUFZjZVlJalVuZjRHZ0RpZVJHYVNuREdGeHJDdU9zLTRfTnRuOHNsellBOXBhLTAwSWxMV2g2d3FTa1c1dFNUM1o2c3Q4RWo5bjNpOVN3N25MaW9KZEpHQl9KRDlydlNP?oc=5
- **Reuters** · Britain says it will carry out defensive air missions over Saudi Arabia - Reuters
  - 2026-10-20 13:05 (ET) · https://news.google.com/rss/articles/CBMi1AFBVV95cUxQTGh1LWkyRVZqaTRQMEdnRXhvWFhvWnJ6TW5WdlEyM0dxTFQwLWczNjAwLU95SDFDZVVSdUNQUE1uYkREcG05THRjbmhiQk5FWlBjb2p2V01DVmhGRFppUmFHQUFwMm4yZHFLRndUbU9PcEVjY0JBY1JpZjROd0JnOTdoZXFodTRDSzJEQURHQkVzd21pMmtUZmdnLUE3SGI1UGt5Wno0WWVKR1ZWV0FaQ0FmZUY5aVlQZVAtRGV4WEhoTmVnbHRsZ0taZ2d2NFBxOFIzdQ?oc=5
- **Reuters** · Israel's Ben-Gvir poised for election gains as young voters turn to far right - Reuters
  - 2026-10-20 13:01 (ET) · https://news.google.com/rss/articles/CBMivAFBVV95cUxPRG9Wc1hmTWh4V3JfNXMxV3FjbVI1WTJ6Vy1JY1p5ZUdXa2wxbFQ3V2VyMmhFTm9NaG5LMm5NdjJNQ08zbksyODZtd1NFQS03V0x1MGtrZ3JmTGg1Z3lWc0JnNjVjZ1NUUEU1clZLS0g5Y1JqQlpvRTlheG1LQkxrTHY1TUIzQVAzcDh2dVdpMVU5ekUwbFdRTC1wWHBLTFRUY0FuMUhpdDJ0by1OTmp1akRtbTFvT3l1YjczXw?oc=5
- **CNBC** · Jim Cramer says this is the 'magic elixir' driving Tuesday's stock market
  - 2026-10-20 12:01 (ET) · https://www.cnbc.com/investingclub/2026/10/20/jim-cramer-says-this-is-the-magic-elixir-driving-tuesdays-stock-market.html
- **CNBC** · To get a reply when reaching out to people, make 1 simple change, says LinkedIn career expert
  - 2026-10-20 11:09 (ET) · https://www.cnbc.com/make-it/2026/10/20/networking-specific-ask-linkedin-career-expert.html
- **Reuters** · Ahead of elections, Bessent says a Democrat-led Congress could do little to stop Trump agenda - Reuters
  - 2026-10-20 10:22 (ET) · https://news.google.com/rss/articles/CBMiswFBVV95cUxObkxLVGNxelN2TDhGZUtrbUROaWc5TEFGR2lYX1laNGZBZGRkbGJocUhUY0t1Z1U1ZXByeWZyYmdPS25xZkdPODFrSzZHRk5Bci1nWGM3bGVoT211SGhRSGlvcnp5b1JrMnVVVXRkZk5iNk5vN3JXdFhvdTBjcDdxMGQ5LWdQMzl0SGtRcXF4UXlnM2oxUnRqSWV5REdLRl8yX2NVVUNwNndUeDV0a1hNRHliUQ?oc=5
- **CNBC** · Anthropic in talks with neocloud Nscale over second multibillion-dollar deal, source tells CNBC
  - 2026-10-20 10:12 (ET) · https://www.cnbc.com/2026/10/20/anthropic-nscale-data-center-deal.html

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · 3 High-Yielding Dividend Stocks That Investors Can Safely Buy and Hold for Years
  - Yahoo · 2026-10-20 15:53 (ET) · https://finnhub.io/api/news?id=1f81835423052ffe5539009d893038787de01b93b16054b3ec9b4add0696566c
- **NVDA** · Amazon stockpiles Nvidia AI hardware ahead of power availability -Business Insider
  - Yahoo · 2026-10-20 15:46 (ET) · https://finnhub.io/api/news?id=ab574575bc56dcfc0cd06ef844851b998d5564737e945aab4859e7d98b0587f1
- **NVDA** · Anthropic Is in Talks for Another $45 Billion AI Deal. Nvidia Could Be a Big Winner.
  - Yahoo · 2026-10-20 15:44 (ET) · https://finnhub.io/api/news?id=e7614a1c2f40846e8541b05cc5535d834a3170da285d81e21d784000cd103613
- **AVGO** · 3 Artificial Intelligence (AI) Stocks That Look Like Great Buys Right Now
  - Yahoo · 2026-10-20 15:05 (ET) · https://finnhub.io/api/news?id=eb33510996c9c7086cb736662e61c8ea526eeebbfa662967092ccbdbcccb8aa5
- **AVGO** · 3 Great AI Stocks To Own In October 2026
  - Yahoo · 2026-10-20 13:09 (ET) · https://finnhub.io/api/news?id=06d3f7b7a284e08f2f25458622d9b0c94b142cf058d98aceb5fb5a709be22dbd
- **AVGO** · Photonic Integrated Circuit (PIC) - Global Strategic Business Report: Capitalize on 19.7% CAGR to US$5.5 Billion by 2030 as Broadcom, Intel, Ciena, Infinera and Acacia Reshape the Market
  - Yahoo · 2026-10-20 11:47 (ET) · https://finnhub.io/api/news?id=e9fbcbbf889a1d30c09c9def430bb49c061554c9320f310a611b4f043365dfb0

### 금융

- **JPM** · The Banks Locked Agents Out. This Week an Agent Paid an Invoice Through the Front Door.
  - Yahoo · 2026-10-20 15:14 (ET) · https://finnhub.io/api/news?id=a5d86da8f457da8c4d0b547c25f24a9fd6987224babdb4bb287b2902e43496a4
- **JPM** · JPMorgan Reveals 3 Bitcoin Price Scenarios for 2036
  - Yahoo · 2026-10-20 14:24 (ET) · https://finnhub.io/api/news?id=a2ed34a84e08fd0beffd44e2269642cf2b41a4da02cb1e1c7a73cd8dbb8e3471
- **JPM** · JPMorgan Flips Bullish on Bitcoin Over the Next Ten Years
  - Yahoo · 2026-10-20 13:23 (ET) · https://finnhub.io/api/news?id=1e544cad7e65b7ad0021dd50d9e3ce731c263a4b8fdec62d40701d95c2052aa4

### 에너지

- **XOM** · Energy ETFs: How to Play the Sector's Surge
  - Yahoo · 2026-10-20 14:09 (ET) · https://finnhub.io/api/news?id=a8d7a4c055739d326f8b98cb9a3071aaff8dd906deb77e48123a72344b7e24fa
- **XOM** · TotalEnergies (ENXTPA:TTE) Takes Center Stage In Mozambique’s $250 Million Gas Plan
  - Yahoo · 2026-10-20 13:15 (ET) · https://finnhub.io/api/news?id=d3c5b2aaf42ad01f2e9fb32d047e00373a47ace41bc363d39ef06e51e6e2f881
- **XOM** · Shell's Latest LNG Move Has Me Rethinking My Oil Major Pecking Order. Here's Where I'd Rank Exxon and Chevron Now.
  - Yahoo · 2026-10-20 11:35 (ET) · https://finnhub.io/api/news?id=c08ab60cbb8deaefae5f1cf64fae4e0d15607347e29d7529aecbca4228030fb6

### 헬스케어

- **UNH** · Stock Market Today: Dow Pops, Oil Falls On U.S.-Iran Hopes; Hasbro Rockets, Toys With An Entry (Live Coverage)
  - Yahoo · 2026-10-20 15:46 (ET) · https://finnhub.io/api/news?id=10fb269e33b023d8073c62e1faebefa902225f99bb0b26c309d18defaf3718a0
- **UNH** · Dow Jones Top Gainers in Today's Session: 3M Leads
  - ChartMill · 2026-10-20 15:10 (ET) · https://finnhub.io/api/news?id=e847f5497219a6ee5fb3303bc66bd6264ef463d03cfa7aef6fad9b678cc7ee61
- **UNH** · Dow Jones Top Gainers on Oct. 20, 2026: MMM, UNH, MRK Lead Session
  - ChartMill · 2026-10-20 12:40 (ET) · https://finnhub.io/api/news?id=881cc041f08f15467b0662fcf5a528cc5c286d59149055686324bb6611907161

### 소비재·유통

- **AMZN** · Amazon stockpiles Nvidia AI hardware ahead of power availability -Business Insider
  - Yahoo · 2026-10-20 15:46 (ET) · https://finnhub.io/api/news?id=ab574575bc56dcfc0cd06ef844851b998d5564737e945aab4859e7d98b0587f1
- **AMZN** · Amazon’s $350 target rests on an AI bet beyond the cloud
  - Yahoo · 2026-10-20 15:37 (ET) · https://finnhub.io/api/news?id=37c90875b4c69045a7db5958cc4e5234cea6ef3bb1a2da6e9e97121822cf6d52
- **AMZN** · Market Chatter: Amazon is Buying More Nvidia AI Hardware Than It Can Power Up
  - Yahoo · 2026-10-20 15:29 (ET) · https://finnhub.io/api/news?id=af5b78cf3bc72ee40b61c9f88597575013b276cf78183bbb30a4005d404291c0

