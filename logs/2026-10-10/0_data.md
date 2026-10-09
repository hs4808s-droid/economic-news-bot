# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-10 · 미국 기준일(ET): 2026-10-09 · 생성시각(KST): 2026-10-10 06:30
# 출처: Yahoo Finance chart API · FRED(키 없는 CSV) · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.
> 금리·스프레드의 등락은 bp(1bp=0.01%p) 단위다. FRED 값은 영업일 기준 하루 늦게 확정될 수 있다(기준 열 참고).

## 미국 주요 지수

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| S&P500 | `^GSPC` | 7,811.54 | +0.59% | +1.15% | +2.90% | +14.11% | 7,765.36 | 2026-10-09 17:29 |
| 나스닥종합 | `^IXIC` | 27,366.17 | +0.64% | +0.64% | +4.92% | +17.74% | 27,193.34 | 2026-10-09 17:15 |
| 다우 | `^DJI` | 51,654.95 | +0.83% | +0.93% | -0.79% | +7.47% | 51,231.64 | 2026-10-09 16:37 |
| 러셀2000 | `^RUT` | 2,806.98 | +0.46% | -0.91% | -2.90% | +13.10% | 2,794.13 | 2026-10-09 16:30 |
| SOX (필라델피아 반도체) | `^SOX` | 12,572.42 | -0.41% | -4.30% | +8.25% | +77.50% | 12,623.71 | 2026-10-09 17:15 |

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,866 | +0.64% | 7,816.25 | 2026-10-09 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 31,123.25 | +0.50% | 30,969.5 | 2026-10-09 16:59 |
| 다우 선물 (YM) | `YM=F` | 51,976 | +0.94% | 51,493 | 2026-10-09 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,823.5 | +0.49% | 2,809.6 | 2026-10-09 16:59 |

## 금리

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 미 10년물 금리 (Yahoo) | `^TNX` | 5.244 | +1.3bp | -3.3bp | +30.0bp | +108.1bp | 5.231 | 2026-10-09 14:59 |
| 미 30년물 금리 (Yahoo) | `^TYX` | 5.6 | -0.6bp | -3.0bp | +23.9bp | +76.0bp | 5.606 | 2026-10-09 14:59 |
| 미 2년물 금리 (FRED) | `FRED:DGS2` | 4.75 | -2.0bp | -3.0bp | +32.0bp | +128.0bp | 4.77 | 2026-10-08 (FRED) |
| 미 10년물 금리 (FRED) | `FRED:DGS10` | 5.22 | -6.0bp | -2.0bp | +39.0bp | +104.0bp | 5.28 | 2026-10-08 (FRED) |

**10Y-2Y 스프레드 (FRED DGS10−DGS2, 2026-10-08): 0.47%p** (전일 대비 -4.0bp)

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 14.84 | -3.70% | 15.41 | 2026-10-09 16:15 |
| VIX9D (9일) | `^VIX9D` | 11.26 | -7.78% | 12.21 | 2026-10-09 16:15 |
| VIX3M (3개월) | `^VIX3M` | 17.77 | -1.71% | 18.08 | 2026-10-09 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 84.88 | -3.17% | 87.66 | 2026-10-09 16:15 |
| SKEW (테일리스크) | `^SKEW` | 154.34 | +3.45% | 149.19 | 2026-10-09 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 달러지수 (DXY) | `DX-Y.NYB` | 102.23 | +0.09% | 102.14 | 2026-10-09 16:59 |
| USD/KRW | `KRW=X` | 1,340.02 | +0.07% | 1,339.08 | 2026-10-09 16:59 |
| WTI | `CL=F` | 91.66 | +0.19% | 91.49 | 2026-10-09 16:59 |
| Brent | `BZ=F` | 104.43 | +0.14% | 104.28 | 2026-10-09 16:59 |
| 금 | `GC=F` | 4,220.3 | +1.52% | 4,157 | 2026-10-09 16:59 |
| 구리 | `HG=F` | 6.71 | +2.95% | 6.52 | 2026-10-09 16:59 |
| 비트코인 | `BTC-USD` | 82,486.33 | +0.99% | 81,676.34 | 2026-10-09 17:30 |
| 하이일드 스프레드 (OAS, %p) | `FRED:BAMLH0A0HYM2` | 3.15 | +6.0bp | 3.09 | 2026-10-08 (FRED) |

## 섹터 ETF

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 기술 | `XLK` | 198.78 | +0.51% | -0.52% | +7.32% | +38.07% | 197.78 | 2026-10-09 16:00 |
| 금융 | `XLF` | 54.73 | +0.92% | +2.32% | -3.76% | -0.07% | 54.23 | 2026-10-09 16:00 |
| 에너지 | `XLE` | 65.08 | -0.25% | +3.60% | +0.23% | +45.56% | 65.24 | 2026-10-09 16:00 |
| 헬스케어 | `XLV` | 170.81 | +1.58% | +2.79% | +3.11% | +10.34% | 168.16 | 2026-10-09 16:00 |
| 경기소비재 | `XLY` | 112.85 | +1.02% | +2.55% | +0.79% | -5.49% | 111.71 | 2026-10-09 16:00 |
| 필수소비재 | `XLP` | 83.43 | +0.01% | +3.60% | +0.41% | +7.40% | 83.42 | 2026-10-09 16:00 |
| 산업재 | `XLI` | 169.25 | +0.50% | -0.41% | -0.76% | +9.11% | 168.4 | 2026-10-09 16:00 |
| 소재 | `XLB` | 49.43 | +0.32% | +1.17% | -2.62% | +9.00% | 49.27 | 2026-10-09 16:00 |
| 유틸리티 | `XLU` | 41.41 | +0.83% | +3.97% | -2.61% | -3.00% | 41.07 | 2026-10-09 16:00 |
| 부동산 | `XLRE` | 41.61 | +1.86% | +1.96% | -3.34% | +3.12% | 40.85 | 2026-10-09 16:00 |
| 커뮤니케이션 | `XLC` | 110.38 | -1.51% | +0.05% | -1.00% | -6.24% | 112.07 | 2026-10-09 16:00 |
| 반도체 | `SMH` | 603.33 | -0.65% | -4.32% | +7.68% | +67.53% | 607.27 | 2026-10-09 16:00 |
| 소프트웨어 | `IGV` | 112.67 | +2.81% | +3.91% | +11.33% | +6.60% | 109.59 | 2026-10-09 16:00 |
| 지역은행 | `KRE` | 69.01 | -0.83% | -2.50% | -6.50% | +6.48% | 69.59 | 2026-10-09 16:00 |
| 바이오 | `XBI` | 153.77 | +3.00% | -0.43% | -1.94% | +26.11% | 149.29 | 2026-10-09 16:00 |

### 섹터 ETF 보조 지표 (1M 상대강도 vs SPY · 이동평균 위치)

| ETF | 1M vs SPY | 50일선 | 200일선 |
|---|---|---|---|
| 기술 (`XLK`) | +4.58% | 위 | 위 |
| 금융 (`XLF`) | -6.50% | 아래 | 위 |
| 에너지 (`XLE`) | -2.51% | 위 | 위 |
| 헬스케어 (`XLV`) | +0.37% | 위 | 위 |
| 경기소비재 (`XLY`) | -1.94% | 아래 | 아래 |
| 필수소비재 (`XLP`) | -2.33% | 아래 | 아래 |
| 산업재 (`XLI`) | -3.50% | 아래 | 아래 |
| 소재 (`XLB`) | -5.36% | 아래 | 아래 |
| 유틸리티 (`XLU`) | -5.35% | 아래 | 아래 |
| 부동산 (`XLRE`) | -6.08% | 아래 | 아래 |
| 커뮤니케이션 (`XLC`) | -3.74% | 아래 | 아래 |
| 반도체 (`SMH`) | +4.95% | 위 | 위 |
| 소프트웨어 (`IGV`) | +8.60% | 위 | 위 |
| 지역은행 (`KRE`) | -9.24% | 아래 | 아래 |
| 바이오 (`XBI`) | -4.68% | 아래 | 위 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.197 | 콘탱고 |
| VIX / VIX9D | 1.318 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.237 | 1.437 | 2,006,578 | 2,483,131 | 29,904 |
| 나스닥100 ETF 옵션 (QQQ) | 0.976 | 1.510 | 3,555,553 | 3,469,366 | 11,518 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **CNBC** · What's behind the recovery rally in tech stocks — plus, Elon Musk's very good week
  - 2026-10-09 15:02 (ET) · https://www.cnbc.com/investingclub/2026/10/09/whats-behind-the-recovery-rally-in-tech-stocks-plus-musks-good-week.html
- **CNBC** · Two massive trades just happened in Micron and Nvidia. What they could mean for chips
  - 2026-10-09 14:50 (ET) · https://www.cnbc.com/2026/10/09/two-massive-trades-just-happened-in-micron-and-nvidia-what-they-could-mean-for-chips.html
- **Reuters** · Wall Street set for weekly gains with earnings, inflation data on tap - Reuters
  - 2026-10-09 14:34 (ET) · https://news.google.com/rss/articles/CBMiugFBVV95cUxNY0hWbFNBUlE5SFJjLVpMMnIwZzFpN2hVNEd2YkxlalYyVDRKTDZxcGJ0REJLUERXb0tlVVVreVZLMHFodlAtZlY0eDhuN2xiOHcybjM1c3gxMlBNTmZMWWdrdkhQOG9Pc2JRdTEwYXM5N181QmttRVEyRkdXTy1LT2J0ZVA4d2FXdjZZeGZwaGRaSUtDUXJUZXFjSU94cnprbTVUSXRpXzFtQzV2TWtpR1dNSjdaWVplUlE?oc=5
- **CNBC** · Trump created a committee to dig into the Fed's Lisa Cook. What is it and what comes next?
  - 2026-10-09 14:20 (ET) · https://www.cnbc.com/2026/10/09/trump-lisa-cook-fed-firing-committee-explained.html
- **CNBC** · The used car market is stagnant. Here's how to profit anyway
  - 2026-10-09 13:37 (ET) · https://www.cnbc.com/2026/10/09/the-used-car-market-is-stagnant-heres-how-to-profit-anyway.html
- **CNBC** · Tesla drops 'Full Self-Driving' brand name in Europe after regulator pushback
  - 2026-10-09 13:12 (ET) · https://www.cnbc.com/2026/10/09/tesla-full-self-driving-europe-regulator.html
- **CNBC** · Cramer: Investors selling Apple on latest iPhone 18 report are 'stupid as plywood'
  - 2026-10-09 12:43 (ET) · https://www.cnbc.com/investingclub/2026/10/09/cramer-investors-selling-apple-on-iphone-report-are-stupid-as-plywood.html
- **Reuters** · London stocks post weekly gains as gilt yields retreat; telecom stocks fall - Reuters
  - 2026-10-09 12:35 (ET) · https://news.google.com/rss/articles/CBMioAFBVV95cUxPNVpWYUFMM2hlY2dnS0N0Q1VkcTFqLUJ1cGJzcVdJTWUzYjRvUWZXeDgyMmZsYXhsYl9wbEd1X1lRbU50dXA5c3lXLTZvd0N5clhnS1gxZHlpYUp1M01ha1BBQkp4Y0VacnRZWEFEWms0WG5UWEYtTE96ZzRuNDlsUzB6eXRUWEdKUGMzd3VGbkdsUTR1Z0VRbGtKUFZOeDVu?oc=5
- **CNBC** · Verizon stock heads for worst day since 2002 as SpaceX U.S. network plans whack telcos
  - 2026-10-09 12:26 (ET) · https://www.cnbc.com/2026/10/09/verizon-att-tmobile-stocks-spacex-network.html
- **Reuters** · EU aviation body widens Saudi airspace warning after Houthi strikes - Reuters
  - 2026-10-09 12:25 (ET) · https://news.google.com/rss/articles/CBMixgFBVV95cUxObUF1S2Y0LTFHM0JDbXRLY05aMmVvUDJqOU1ZNjEtLVlDdFVMelgyTlN0d3BvY0lrLVJkZEc4VGI0eEMtWTVnbDBGQnNVSGx1bklCQkxiNEs3RzFlWklGSWtoMFpyLV9zb2N6Y1VlVjQ2b2pqMy1ld0IyZ2RQMGt3YmFRaWQyUFBrYnVua2VyWGdyQW4wU0xGWm91d2prUlRLSHZrZXNwZjl0MVBuQV9ZeFZmZi15Nmh1VGFvV25xeVJfYkNGWkE?oc=5
- **Reuters** · US diesel prices remain high despite Trump's moves to boost supplies - Reuters
  - 2026-10-09 12:18 (ET) · https://news.google.com/rss/articles/CBMitAFBVV95cUxPSC1DZmo5R2daREU0YTBRSFBZTE04NW92WFQ3eXhLeGhiRlFyTEZBbHdWT2xuczBRYmtWcmlqMVJKTUo0Vk9KTEk1OU1jYUo1NlQ3Zi1KTzhmc1pmZkhQS01OajhXWHR1aWpQVEpuRTllX0RSd3ZmR3ZKMG51MlJRNGQtX3BkdUpfOHFGejVtbnhMUGlGNVdDa2lISkd5dFdmNWc3dFpRZnJuNGJ6M3duQ1pJcXo?oc=5
- **Reuters** · Four signs it is about to get uglier in the bond market as yields rise - Reuters
  - 2026-10-09 12:18 (ET) · https://news.google.com/rss/articles/CBMilAFBVV95cUxOZnpPbXRYRlc0T3dINmZIZnM3VEgxWWJzS2tLRVBadmJMVnQ2ekdHaTQ1NG1SZlhfTV84VjNsM3JNR0RRSTZyVWJ1ODJFZmxpa1pxckluaktPY0d6T0d3bUVUUnRGQjlCVmwxWUNGWEs2cEo1VGV4R3MxN19PakJaZ3FUZnZfMWxqUHAzNk1nOTVFT0hr?oc=5
- **Reuters** · Trump teases 'big announcement' on diesel - Reuters
  - 2026-10-09 11:55 (ET) · https://news.google.com/rss/articles/CBMilgFBVV95cUxQU3RwVkZ4Mkg3Vy1fdGF2T2t4RmRLV3lQaU5LcXdnd3hKd21HRlZqR1dBTDlEbmNheE1MYVNjZldOLVlUd2lpMDdSaDd5c0tSUEpVRWJPLU1rTU9hSVhTYlF3Z2JPUlQydXgyb0VraVpvMUlwdHlFY2RoNEZ3WUE4Y0JjNnlHMV9VakFsdzMzOFFzUnQ3MlE?oc=5
- **Reuters** · Portugal PM cautions judiciary not to get political over US use of air base - Reuters
  - 2026-10-09 11:38 (ET) · https://news.google.com/rss/articles/CBMisAFBVV95cUxQR0JxN3hkUmZhbTlNY3FRWnlZaklwOTJ6QVpleUV3X2FoX0pEVm1YWlROSTRaUUE4ek5CMWhWN2FvcEM1bVowbkdxWDZIVjM0Vm4xTl9RLUxxZzBGeU0tWlBrWS1peFROZkM0UDIydnN6Q1VEWXhhOEQzdUtMVW83SjF4QXN6anlzMnlrQmI4X2VVOVlXa19TRU9VaTB3VXJHb0ROOHE3a0Rxa2lRaExPcA?oc=5
- **CNBC** · ChatGPT for Teens is not necessarily 'safer than the previous version,' Common Sense Media finds
  - 2026-10-09 11:07 (ET) · https://www.cnbc.com/make-it/2026/10/09/chatgpt-for-teens-safety-common-sense-media.html

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Sector Update: Tech Stocks Mixed Late Afternoon
  - Yahoo · 2026-10-09 15:47 (ET) · https://finnhub.io/api/news?id=39f065624a1766f0c3cc41bc76b37601070f130177da07d9f38817749ca5c858
- **NVDA** · What Could Surprise CoreWeave Stock Investors On The Upside?
  - Yahoo · 2026-10-09 15:41 (ET) · https://finnhub.io/api/news?id=7a66c1ae291228008e867b66f618835d7689b935959909a9860572fe7fffb98f
- **NVDA** · CoreWeave's Backlog Is Huge. Here's the Risk Investors Shouldn't Ignore
  - Yahoo · 2026-10-09 15:35 (ET) · https://finnhub.io/api/news?id=1d87251457fdaff111c7c8e100d4e205d5166638b1ceea87e8a9aa79320cf952
- **AVGO** · Arm Stock Is Up 143% This Year: Take Profits, or Hold On for the Ride?
  - Yahoo · 2026-10-09 15:14 (ET) · https://finnhub.io/api/news?id=586ffcc37bfc3d72da938e55beb9272a939869015dc029d229756909852105d3
- **AVGO** · Management Raised the Bar For NVIDIA Stock; Does The Chart Agree?
  - Yahoo · 2026-10-09 14:22 (ET) · https://finnhub.io/api/news?id=b82eadbdd4bf3444c8b21203cfdcc96ac7f6f8489c199a743de1a1a0ffb4b378
- **AVGO** · How Investors May Respond To Berkshire Hathaway (BRK.A) Leadership Shift, Index Tilt, and Regulatory Scrutiny
  - Yahoo · 2026-10-09 13:16 (ET) · https://finnhub.io/api/news?id=767016c846cf36098c2e0699578d0de1856fdbe0e5bc265901c216b0135a4f10

### 금융

- **JPM** · Technoprobe (BIT:TPRO) Stock Gets Fair Value Bump After Positive Analyst Calls
  - Yahoo · 2026-10-09 15:14 (ET) · https://finnhub.io/api/news?id=adad364b9f05e7a4169d24160c4524f741a9c2eb3ff5ff7aecbe55495a47759d
- **JPM** · Stock Market Today: Dow Pops 500 Points As Big Bank Earnings Loom; JPMorgan Chase In A Base (Live Coverage)
  - Yahoo · 2026-10-09 14:57 (ET) · https://finnhub.io/api/news?id=8df387dc5becb03b94ef0f8c61c8b9d02a89c480c1329752e1e7b3d92c7fb395
- **JPM** · Retirees Who Picked VIG Over VYM in 2022 Are Still $10,000 Behind on Every $100,000
  - Yahoo · 2026-10-09 13:24 (ET) · https://finnhub.io/api/news?id=1b848e55def758de63b87e20c7b25878a553925e53b6518355c042797853a540

### 에너지

- **XOM** · Retirees Who Picked VIG Over VYM in 2022 Are Still $10,000 Behind on Every $100,000
  - Yahoo · 2026-10-09 13:24 (ET) · https://finnhub.io/api/news?id=1b848e55def758de63b87e20c7b25878a553925e53b6518355c042797853a540
- **XOM** · BP is Undervalued: Should You Bet on the Stock Right Away?
  - Yahoo · 2026-10-09 09:36 (ET) · https://finnhub.io/api/news?id=12292d47f61f8e53e9547e3ec05f388ce4fe668937ffeb4090eb4524e1bfb8bf
- **XOM** · Sector Update: Energy Stocks Decline Pre-Bell Friday
  - Yahoo · 2026-10-09 09:31 (ET) · https://finnhub.io/api/news?id=8e9cd296aafd9ae2f944aa85b0c519eddf9170d1b158f6d211aa0eeb4b0233cb

### 헬스케어

- **UNH** · Friday's session: top gainers and losers in the dow jones index
  - ChartMill · 2026-10-09 15:10 (ET) · https://finnhub.io/api/news?id=e8e3b8da2da0d6ae4d9558e72857a3ca0885d2701f5b383c0d396564a0c319c7
- **UNH** · Humana Leads Managed Care Peers in 2027 Medicare Advantage Star Ratings, Deutsche Bank Says
  - Yahoo · 2026-10-09 13:23 (ET) · https://finnhub.io/api/news?id=9e7332cc74618b03804573ae8b7a0fc7855c0c6adf03785ef48ba630a6291f3a
- **UNH** · Top dow jones movers in Friday's session
  - ChartMill · 2026-10-09 12:40 (ET) · https://finnhub.io/api/news?id=017ffc0a54b8f782db50580fa23a16d185b394840ad8991564195fa4ddb45199

### 소비재·유통

- **AMZN** · Sector Update: Consumer Stocks Rise Late Afternoon
  - Yahoo · 2026-10-09 15:51 (ET) · https://finnhub.io/api/news?id=4bf1c55308cb0fec95eb17650c3c090a99ff1faebec0cc2ef7980b15d9e47416
- **AMZN** · What Could Surprise CoreWeave Stock Investors On The Upside?
  - Yahoo · 2026-10-09 15:41 (ET) · https://finnhub.io/api/news?id=7a66c1ae291228008e867b66f618835d7689b935959909a9860572fe7fffb98f
- **AMZN** · Delta cuts outlook, Microsoft fights H-1B restrictions, Bezos eyes Blue Origin IPO
  - Yahoo · 2026-10-09 15:13 (ET) · https://finnhub.io/api/news?id=29895590be39d8554d2273cdd20f3bc580765bc68f65dd79499a4d1e588611bf

