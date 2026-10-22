# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-23 · 미국 기준일(ET): 2026-10-22 · 생성시각(KST): 2026-10-23 06:30
# 출처: Yahoo Finance chart API · FRED(키 없는 CSV) · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.
> **금리 기준 통일:** 2년물·10년물·10Y-2Y 는 FRED 일별 값(같은 기준일)만 본문에 쓴다. Yahoo ^TNX·^TYX 는 당일 참고용이라 FRED 값과 섞어 인용하지 않는다.
> 금리·스프레드의 등락은 bp(1bp=0.01%p) 단위다. FRED 값은 영업일 기준 하루 늦게 확정될 수 있다(기준 열 참고).

## 미국 주요 지수

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| S&P500 | `^GSPC` | 7,663.43 | -1.21% | -1.04% | -0.55% | +11.95% | 7,757.17 | 2026-10-22 16:31 |
| 나스닥종합 | `^IXIC` | 26,008.86 | -2.60% | -2.64% | -3.44% | +11.90% | 26,702.86 | 2026-10-22 17:15 |
| 다우 | `^DJI` | 52,867.98 | +0.02% | +1.32% | +2.63% | +10.00% | 52,856.09 | 2026-10-22 16:31 |
| 러셀2000 | `^RUT` | 2,784.03 | +0.11% | +0.61% | -1.92% | +12.17% | 2,781.02 | 2026-10-22 16:30 |
| SOX (필라델피아 반도체) | `^SOX` | 10,731.98 | -6.72% | -7.33% | -14.38% | +51.51% | 11,505.56 | 2026-10-22 17:15 |

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,703.75 | -1.24% | 7,800.25 | 2026-10-22 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 29,094.75 | -3.04% | 30,007 | 2026-10-22 16:59 |
| 다우 선물 (YM) | `YM=F` | 53,085 | +0.05% | 53,059 | 2026-10-22 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,792.6 | -0.06% | 2,794.2 | 2026-10-22 16:59 |

## 금리

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 미 2년물 금리 (FRED·기준) | `FRED:DGS2` | 4.81 | +2.0bp | -1.0bp | +5.0bp | +134.0bp | 4.79 | 2026-10-21 (FRED) |
| 미 10년물 금리 (FRED·기준) | `FRED:DGS10` | 5.13 | +1.0bp | -6.0bp | +17.0bp | +95.0bp | 5.12 | 2026-10-21 (FRED) |
| 미 10년물 금리 (Yahoo 당일·참고) | `^TNX` | 4.953 | -19.3bp | -13.6bp | -16.1bp | +79.0bp | 5.146 | 2026-10-22 14:59 |
| 미 30년물 금리 (Yahoo 당일·참고) | `^TYX` | 5.287 | -15.2bp | -14.2bp | -11.4bp | +44.7bp | 5.439 | 2026-10-22 14:59 |

**10Y-2Y 스프레드 (FRED DGS10−DGS2, 2026-10-21): 0.32%p** (전일 대비 -1.0bp)

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 19.03 | +14.09% | 16.68 | 2026-10-22 16:15 |
| VIX9D (9일) | `^VIX9D` | 18.86 | +21.76% | 15.49 | 2026-10-22 16:15 |
| VIX3M (3개월) | `^VIX3M` | 20.12 | +7.48% | 18.72 | 2026-10-22 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 107.94 | +14.16% | 94.55 | 2026-10-22 16:15 |
| SKEW (테일리스크) | `^SKEW` | 152.39 | +1.35% | 150.36 | 2026-10-22 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 달러지수 (DXY) | `DX-Y.NYB` | 101.62 | -0.15% | 101.78 | 2026-10-22 17:20 |
| USD/KRW | `KRW=X` | 1,326.1 | +0.16% | 1,323.94 | 2026-10-22 17:29 |
| WTI | `CL=F` | 99.1 | +2.01% | 97.15 | 2026-10-22 16:59 |
| Brent | `BZ=F` | 112.87 | +3.72% | 108.82 | 2026-10-22 16:59 |
| 금 | `GC=F` | 4,039.8 | -2.66% | 4,150 | 2026-10-22 16:59 |
| 구리 | `HG=F` | 6.4 | -2.21% | 6.54 | 2026-10-22 16:59 |
| 비트코인 | `BTC-USD` | 81,433.63 | -3.07% | 84,011.97 | 2026-10-22 17:30 |
| 하이일드 스프레드 (OAS, %p) | `FRED:BAMLH0A0HYM2` | 3.27 | -6.0bp | 3.33 | 2026-10-21 (FRED) |

## 섹터 ETF

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 기술 | `XLK` | 182.34 | -3.29% | -3.62% | -6.66% | +26.65% | 188.54 | 2026-10-22 16:00 |
| 금융 | `XLF` | 56.65 | +1.09% | +2.50% | +3.87% | +3.43% | 56.04 | 2026-10-22 16:00 |
| 에너지 | `XLE` | 67.57 | -0.87% | +1.52% | +8.34% | +51.13% | 68.16 | 2026-10-22 16:00 |
| 헬스케어 | `XLV` | 181.3 | +1.32% | +2.32% | +7.41% | +17.12% | 178.94 | 2026-10-22 16:00 |
| 경기소비재 | `XLY` | 115.01 | -0.45% | +1.41% | +3.94% | -3.68% | 115.53 | 2026-10-22 16:00 |
| 필수소비재 | `XLP` | 89.99 | +3.31% | +3.82% | +9.17% | +15.85% | 87.11 | 2026-10-22 16:00 |
| 산업재 | `XLI` | 166.73 | -0.94% | -0.69% | -1.98% | +7.48% | 168.31 | 2026-10-22 16:00 |
| 소재 | `XLB` | 51.69 | +0.72% | +2.23% | +2.80% | +13.98% | 51.32 | 2026-10-22 16:00 |
| 유틸리티 | `XLU` | 42.87 | +2.07% | +2.93% | +7.85% | +0.42% | 42 | 2026-10-22 16:00 |
| 부동산 | `XLRE` | 42.52 | +1.09% | +1.26% | +1.63% | +5.38% | 42.06 | 2026-10-22 16:00 |
| 커뮤니케이션 | `XLC` | 107.42 | -1.42% | -4.46% | -4.57% | -8.75% | 108.97 | 2026-10-22 16:00 |
| 반도체 | `SMH` | 523.35 | -5.99% | -6.35% | -12.98% | +45.32% | 556.7 | 2026-10-22 16:00 |
| 소프트웨어 | `IGV` | 108.72 | -0.09% | -0.80% | +0.57% | +2.87% | 108.82 | 2026-10-22 16:00 |
| 지역은행 | `KRE` | 72.41 | +2.53% | +3.81% | +2.88% | +11.73% | 70.62 | 2026-10-22 16:00 |
| 바이오 | `XBI` | 151.64 | -0.75% | +1.24% | -2.29% | +24.37% | 152.78 | 2026-10-22 16:00 |

### 섹터 ETF 보조 지표 (1M 상대강도 vs SPY · 이동평균 위치)

| ETF | 1M vs SPY | 50일선 | 200일선 |
|---|---|---|---|
| 기술 (`XLK`) | -6.15% | 아래 | 위 |
| 금융 (`XLF`) | +4.37% | 위 | 위 |
| 에너지 (`XLE`) | +8.84% | 위 | 위 |
| 헬스케어 (`XLV`) | +7.91% | 위 | 위 |
| 경기소비재 (`XLY`) | +4.44% | 위 | 아래 |
| 필수소비재 (`XLP`) | +9.67% | 위 | 위 |
| 산업재 (`XLI`) | -1.48% | 아래 | 아래 |
| 소재 (`XLB`) | +3.31% | 위 | 위 |
| 유틸리티 (`XLU`) | +8.35% | 위 | 아래 |
| 부동산 (`XLRE`) | +2.13% | 아래 | 아래 |
| 커뮤니케이션 (`XLC`) | -4.07% | 아래 | 아래 |
| 반도체 (`SMH`) | -12.48% | 아래 | 위 |
| 소프트웨어 (`IGV`) | +1.07% | 위 | 위 |
| 지역은행 (`KRE`) | +3.39% | 아래 | 위 |
| 바이오 (`XBI`) | -1.79% | 아래 | 위 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.057 | 콘탱고 |
| VIX / VIX9D | 1.009 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.240 | 1.469 | 2,531,838 | 3,140,429 | 29,284 |
| 나스닥100 ETF 옵션 (QQQ) | 1.006 | 1.446 | 5,304,410 | 5,337,500 | 10,694 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **CNBC** · A lesson from poker tells us not to fold on Meta after its earnings sell-off. Here’s why
  - 2026-10-22 16:11 (ET) · https://www.cnbc.com/investingclub/2026/10/22/meta-stock-why-were-staying-bullish-after-the-post-earnings-sell-off.html
- **CNBC** · The perfect storm behind the Nasdaq's rout — plus, some of the bright spots in the market
  - 2026-10-22 14:23 (ET) · https://www.cnbc.com/investingclub/2026/10/22/perfect-storm-behind-the-nasdaqs-rout-plus-some-bright-spots-in-the-market.html
- **Reuters** · Egypt calls for Yemen talks as parliament weighs military support to Saudi Arabia - Reuters
  - 2026-10-22 14:09 (ET) · https://news.google.com/rss/articles/CBMiwwFBVV95cUxOSjlqS1owcXdLQnhHZnV3Q3FSWUU4OXhFTkpxV1E3dVdnU1pEak1sSENZRnN5cEs1dE5YREx5NnZsODFFWm01T1FNMC0wVXF0dWhkTUl5MTZaRHhJcVVRNkdyVnh5ZFJKam9xMHYxMG42R3F3WDdyQ1lsSDBPTmJVMVJLSmhYeFRnamp1aVRWYmY0RlcwdmVibkZ2cWl6S21QS1JEOUt5UWd3M2RpTld2eVhFTjJ5bmpjX1RZX3BuaGNUZUU?oc=5
- **CNBC** · We're dipping back into the AI trade with our first data center buy in weeks
  - 2026-10-22 13:28 (ET) · https://www.cnbc.com/investingclub/2026/10/22/were-dipping-back-into-the-data-center-trade-with-small-buy.html
- **Reuters** · US regulator is probing suspicious Iran oil trading, official says - Reuters
  - 2026-10-22 12:30 (ET) · https://news.google.com/rss/articles/CBMiuAFBVV95cUxPem1fOEZ2aU10cDBTVHhDUXFuN3ZTU1l3ZXR4dkpMUUNCazJDMEk4V0UxT01nZ2tNckxuTllmYXhNeUlhSTQzbzg5dHN2aVNjMUpnNnU0T2FJWmNtTGZ4ZTg0UXNjRFhReHlDbThZalczOHdVZFBKLU9pVEp3YTBTS096QUdKVm4tbTdlQzJSYWQ5eGhDZ05FSjJJWFhNYkt2dHZERzg1Zmltc2xKUkd1UjBXUEpTdjNC?oc=5
- **CNBC** · Pepsi renews contract with Taco Bell days after KFC switches to Coke in the U.S.
  - 2026-10-22 11:52 (ET) · https://www.cnbc.com/2026/10/22/pepsico-taco-bell-beverage-deal.html
- **Reuters** · US weekly jobless claims near 57-year lows, underscore labor market stability - Reuters
  - 2026-10-22 11:50 (ET) · https://news.google.com/rss/articles/CBMikAFBVV95cUxPY1lNaWxpcFZmNGx5cEFsQ25QUUNuM0ZkVzJXaGdxdDRFdXNpNGVyYlhhV3JLcnpoMHJKLTZhMWduY0hQYXFPM2xBRjl5TF8xaXAyNU40UUtnTl94TDl3eUVjSHlleXBtenZHVDNpUmw5LUxRMDJNNzF2VVlxYmVodVpWUE5PWEdtVHRSZmdzR2w?oc=5
- **CNBC** · AI stocks tumble as the defensives rise. What it says about this uneasy market
  - 2026-10-22 11:45 (ET) · https://www.cnbc.com/investingclub/2026/10/22/ai-stocks-tumble-as-the-defensives-rise-what-it-says-about-this-uneasy-market.html
- **CNBC** · Cruise lines chase luxury travelers with suites for up to $25,000 a night
  - 2026-10-22 11:16 (ET) · https://www.cnbc.com/2026/10/22/luxury-cruise-suites-regent-seven-seas.html
- **Reuters** · As Trump's support slips, white evangelicals remain his Republican bedrock - Reuters
  - 2026-10-22 11:07 (ET) · https://news.google.com/rss/articles/CBMitAFBVV95cUxQRnNVTGtmN2VWX3RIWkxlUEx6d2hVV1djTnhWellIdWZMM1JMa1RrbTVKMlIycEI0em5CcHYtMXhucUFOdk5vZW9LZHVLRzNNWExIcHZqeVFtRFFxTlY3MDNka0l1VjE4T2NnOExIWFBlWXI1V1ZSVXRaRXVIVFB0UTFCcGpGZjZYUk9SekxGNE9GUWg0V3p4VW14MHVEUkY3MWNPQzdGMzRJVTZRVmIzZDRkS2Y?oc=5
- **Reuters** · Dow forecasts profit above estimates on pricing gains and cost cuts - Reuters
  - 2026-10-22 10:56 (ET) · https://news.google.com/rss/articles/CBMiowFBVV95cUxPeko2eDV1REFETEVaR0x3Q0NsVVRjM3JFRUx0djk1dWJWRlNOT1lnNkctZlBtWHp4VG9vM1RoTkxzdzRWbHhKaWE2U0lXZDQyZHFRanlDY3I1LWNaNkVmX1dYZ0ZhNGxJUm8yLUF3R3RJdFhpeW90bUEzY2h5UURYQWZUS2Y1XzBPNC1ER3ExMmE2SGpXcndkdFhqN2FiNURRZ0dn?oc=5
- **Reuters** · Citi sees oil risks skewed to upside despite recovery in Gulf exports - Reuters
  - 2026-10-22 10:37 (ET) · https://news.google.com/rss/articles/CBMitgFBVV95cUxOakVZV3hhS1BtQ2puTC1WcVZBYXo2bEI3bE0xaS1keVpmVkduLTBFT2tvSkRiSUk3RTA2dDBXd3o5TDk1VjFJNFpWN2xXdmZGby1UWWl2MkFxMDZJd056WnpmRU1IUXhWaXZiR2JzWkQwaFBvcC04MGZjUUd6THZTd0c2TmZ4YjlwUHVxeWR6bzRnSDV6VW5jNDlDRDgyaTFoclFnQi02aXZUZnJKa1Q1OTlkaVdlQQ?oc=5
- **Reuters** · Gulf markets fall as fresh Houthi strikes on Saudi Arabia raise regional risk - Reuters
  - 2026-10-22 09:44 (ET) · https://news.google.com/rss/articles/CBMiwwFBVV95cUxOQS1ESU5ra242UzdCbkxuVkNzUkV2NWZVTGlRcDZnSzJBeE5KTkFyMEZvaTd0ZEl4LWduc0lmbGZkRnV6REF1dV9VUkRESHpVM3lLUkt0SmtfQzJDLXdnZ0l6akwwOWZpS1lza2tSbHczcnlpU2JPSXo5eHNrY0c4aWNpWjNJSlFYa2M2UEhDNnVsUnQySGF6MVJSY1FPam1LSlliSkJUTzFKck9tZ2J6S2xlUnVSam1TTllJbUxQWmtTcjQ?oc=5
- **CNBC** · Jobless claims near the lowest since the 1960s as low-fire trend continues
  - 2026-10-22 09:21 (ET) · https://www.cnbc.com/2026/10/22/jobless-claims-record-low-weekly.html
- **Reuters** · Saudi Aramco tells staff to evacuate Dhahran headquarters, sources say - Reuters
  - 2026-10-22 08:51 (ET) · https://news.google.com/rss/articles/CBMivAFBVV95cUxNNDNYdWIxY2pGbkhqRTlJNmJRMUE4N1RsclJwWklRYzdQUy04Wi1ObjlQNm1JaER4QVpRREs1NkdOeVNzYi1wd3lURFQ0S29OYkdJOERlQUdlSlBQMU1Mb2VzRDVaZlpUbWt0UGdpODc3a0FjWkVoUDIyWEZCeHlSd2JfZkIzLVNNVV9LSFcyVGpNaFU0S3JOV19wc29qWU90SGJrV04xRlQ5cjlBMUp0dFZ5UlgzR3F0MEdJXw?oc=5

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Meta stock falls despite Wall Street analysts raising price targets
  - Yahoo · 2026-10-22 15:50 (ET) · https://finnhub.io/api/news?id=00f3b6822563f8c9ab80f47603d3869b30ceea3ee38a944f1e817a6235965cb9
- **NVDA** · Uranium Is Near $90 a Pound. Here's My Prediction for What's Ahead for the Fuel.
  - Yahoo · 2026-10-22 15:50 (ET) · https://finnhub.io/api/news?id=bff11f7c703635aea11711bb38056ff31f388f1ea1b0127dd3bf19de1de8775a
- **NVDA** · Vertiv, Nvidia target 10-week cut in AI power, cooling setup
  - Yahoo · 2026-10-22 15:47 (ET) · https://finnhub.io/api/news?id=8a50ebd79af547e0ca96287af0003f685083379d3157a8a03ca0ed9baa654b68
- **AVGO** · Stock Market Today: Nasdaq-100 Drop Tops 3%; FirstCash, Southern Copper, Meta Lead Sell-Off (Live Coverage)
  - Yahoo · 2026-10-22 15:50 (ET) · https://finnhub.io/api/news?id=a28a1706345bc9a53f7e6e82ee8c36e6e1a40add7558e2547dfe0eb9119e1dec
- **AVGO** · Is Ciena Stock Really Expensive?
  - Yahoo · 2026-10-22 15:36 (ET) · https://finnhub.io/api/news?id=8af625d7b45b9ca754600deba47ab3c744b3dc4d4f6dbb495f4ec8f9829be73c
- **AVGO** · Could Intel be the next trillion-dollar company?
  - Yahoo · 2026-10-22 13:25 (ET) · https://finnhub.io/api/news?id=1550f03d0e6d5c5fcf4c18f942947334d46dbafb1c9868987b45ac01020ecf03

### 금융

- **JPM** · How Much of Your Portfolio Should Be in Bitcoin After JPMorgan’s 10% Forecast?
  - Yahoo · 2026-10-22 14:30 (ET) · https://finnhub.io/api/news?id=7a55ecb2987472f62a4c92e90742abed1011ad49b710101ed2c40f7290daa1a7
- **JPM** · J.P. Morgan Boosts Its Long-Term Forecast for How 60/40 Portfolios Will Perform
  - Yahoo · 2026-10-22 14:22 (ET) · https://finnhub.io/api/news?id=6eabebaf836ce1f68ee3c03d1ee473faf87994dcb5f6ee2526e31c7245f7850d
- **JPM** · Solana Is Faster and Cheaper Than Ethereum. So Why Is ETH Worth 5 Times More?
  - Yahoo · 2026-10-22 14:00 (ET) · https://finnhub.io/api/news?id=d0e08d9d072dd1a9c4ed3ed4ff4205bf84f762a96bfba690dbf40d67996148f9

### 에너지

- **XOM** · ExxonMobil Just Gained 12% in a Month and Chevron 11%: Take Profits, or Buy More?
  - Yahoo · 2026-10-22 12:08 (ET) · https://finnhub.io/api/news?id=43c19f419c31dff227451edf03ea7f97cf96a06a54d518288ae2ca4f262a7258
- **XOM** · Exxon Mobil Holdings (XOM) is a Great Momentum Stock: Should You Buy?
  - Yahoo · 2026-10-22 11:00 (ET) · https://finnhub.io/api/news?id=7832814c2ae5de6ad4502682f7183fbd752ff681a0054659c175b605be5d085d
- **XOM** · XOM vs. BP: Which Integrated Energy Giant Has the Edge?
  - Yahoo · 2026-10-22 09:45 (ET) · https://finnhub.io/api/news?id=0dd4fb863c9ff2f2b0adcdfcf91e58d4480b20c744ce45675391ee826ef9cf79

### 헬스케어

- **UNH** · Dow Jones Top Movers: Gainers and Losers on October 22, 2026
  - ChartMill · 2026-10-22 12:41 (ET) · https://finnhub.io/api/news?id=dd0e716c087c296a435bd07e6976db52212f11256849c06f4d99a4595e759e09
- **UNH** · SCHD’s Price May Be Soaring, but Its Dividend Isn’t Keeping Up
  - Yahoo · 2026-10-22 10:10 (ET) · https://finnhub.io/api/news?id=31089b36f7297ee9ebdee9be5e7a73deb90a3f3024692a938473b9d3f46ccba6
- **UNH** · UnitedHealth Group Incorporated (UNH) is Attracting Investor Attention: Here is What You Should Know
  - Yahoo · 2026-10-22 08:00 (ET) · https://finnhub.io/api/news?id=3b2b9f7207e98ca9d49c69db4add237e2c25d96224bb031a804df7837966c7d1

### 소비재·유통

- **AMZN** · One Number That Makes Home Depot A Buy
  - Yahoo · 2026-10-22 15:19 (ET) · https://finnhub.io/api/news?id=6efb4eecf8cba4c614fdb39461f0af91c548807a82cb71120853549024c2fa55
- **AMZN** · Dow Jones Top Movers Today: PG and JNJ Lead Gainers, CAT and AMZN Lead Losers
  - ChartMill · 2026-10-22 15:11 (ET) · https://finnhub.io/api/news?id=6ba6eb21e59fd6c1286d6cd915cb82479246b421181b0793bf608366b363e3b8
- **AMZN** · Meta, AI Stocks Tumble As AI Spending Fears Reignite
  - Yahoo · 2026-10-22 14:29 (ET) · https://finnhub.io/api/news?id=b2d13986b6ba08633a0952821918a8c2ffdd91b2df4527f4e8b2d73e77c61000

