# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-09 · 미국 기준일(ET): 2026-10-08 · 생성시각(KST): 2026-10-09 06:30
# 출처: Yahoo Finance chart API · FRED(키 없는 CSV) · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.
> 금리·스프레드의 등락은 bp(1bp=0.01%p) 단위다. FRED 값은 영업일 기준 하루 늦게 확정될 수 있다(기준 열 참고).

## 미국 주요 지수

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| S&P500 | `^GSPC` | 7,765.36 | -0.47% | +1.29% | +1.69% | +13.44% | 7,801.77 | 2026-10-08 16:46 |
| 나스닥종합 | `^IXIC` | 27,193.34 | -1.25% | +1.20% | +3.58% | +17.00% | 27,538.69 | 2026-10-08 17:15 |
| 다우 | `^DJI` | 51,231.64 | +0.10% | +0.60% | -2.19% | +6.59% | 51,179.87 | 2026-10-08 16:46 |
| 러셀2000 | `^RUT` | 2,794.13 | +0.03% | -0.45% | -4.35% | +12.58% | 2,793.2 | 2026-10-08 16:30 |
| SOX (필라델피아 반도체) | `^SOX` | 12,623.72 | -3.39% | -1.60% | +5.80% | +78.22% | 13,066.15 | 2026-10-08 17:15 |

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,822.5 | -0.39% | 7,852.75 | 2026-10-08 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 31,021.25 | -1.21% | 31,402.25 | 2026-10-08 16:59 |
| 다우 선물 (YM) | `YM=F` | 51,509 | +0.12% | 51,449 | 2026-10-08 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,811.9 | -0.01% | 2,812.2 | 2026-10-08 16:59 |

## 금리

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 미 10년물 금리 (Yahoo) | `^TNX` | 5.231 | -4.6bp | -0.6bp | +39.4bp | +106.8bp | 5.277 | 2026-10-08 14:59 |
| 미 30년물 금리 (Yahoo) | `^TYX` | 5.606 | -5.5bp | +0.3bp | +32.0bp | +76.6bp | 5.661 | 2026-10-08 14:59 |
| 미 2년물 금리 (FRED) | `FRED:DGS2` | 4.77 | -2.0bp | -11.0bp | +38.0bp | +130.0bp | 4.79 | 2026-10-07 (FRED) |
| 미 10년물 금리 (FRED) | `FRED:DGS10` | 5.28 | +1.0bp | -1.0bp | +48.0bp | +110.0bp | 5.27 | 2026-10-07 (FRED) |

**10Y-2Y 스프레드 (FRED DGS10−DGS2, 2026-10-07): 0.51%p** (전일 대비 +3.0bp)

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 15.41 | +2.19% | 15.08 | 2026-10-08 16:15 |
| VIX9D (9일) | `^VIX9D` | 12.21 | +3.65% | 11.78 | 2026-10-08 16:15 |
| VIX3M (3개월) | `^VIX3M` | 18.08 | +2.03% | 17.72 | 2026-10-08 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 87.66 | +5.39% | 83.18 | 2026-10-08 16:15 |
| SKEW (테일리스크) | `^SKEW` | 149.19 | +5.18% | 141.84 | 2026-10-08 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 달러지수 (DXY) | `DX-Y.NYB` | 102.11 | -0.13% | 102.24 | 2026-10-08 17:20 |
| USD/KRW | `KRW=X` | 1,343.02 | +0.24% | 1,339.74 | 2026-10-08 17:30 |
| WTI | `CL=F` | 91.18 | +3.29% | 88.28 | 2026-10-08 16:59 |
| Brent | `BZ=F` | 103.92 | +3.71% | 100.2 | 2026-10-08 16:59 |
| 금 | `GC=F` | 4,158.3 | +0.42% | 4,140.7 | 2026-10-08 16:59 |
| 구리 | `HG=F` | 6.55 | -0.70% | 6.6 | 2026-10-08 16:59 |
| 비트코인 | `BTC-USD` | 81,614.77 | -1.99% | 83,275.93 | 2026-10-08 17:30 |
| 하이일드 스프레드 (OAS, %p) | `FRED:BAMLH0A0HYM2` | 3.09 | +6.0bp | 3.03 | 2026-10-07 (FRED) |

## 섹터 ETF

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 기술 | `XLK` | 197.78 | -1.79% | -0.02% | +5.27% | +37.38% | 201.39 | 2026-10-08 16:00 |
| 금융 | `XLF` | 54.23 | +0.89% | +1.44% | -4.96% | -0.99% | 53.75 | 2026-10-08 16:00 |
| 에너지 | `XLE` | 65.24 | +2.97% | +4.05% | -0.11% | +45.92% | 63.36 | 2026-10-08 16:00 |
| 헬스케어 | `XLV` | 168.16 | -0.39% | +1.18% | +0.95% | +8.63% | 168.81 | 2026-10-08 16:00 |
| 경기소비재 | `XLY` | 111.71 | +0.31% | +2.67% | -0.67% | -6.45% | 111.36 | 2026-10-08 16:00 |
| 필수소비재 | `XLP` | 83.42 | +2.11% | +3.85% | +0.45% | +7.39% | 81.7 | 2026-10-08 16:00 |
| 산업재 | `XLI` | 168.4 | +0.33% | -0.14% | -1.97% | +8.56% | 167.84 | 2026-10-08 16:00 |
| 소재 | `XLB` | 49.27 | +0.59% | +1.50% | -4.13% | +8.64% | 48.98 | 2026-10-08 16:00 |
| 유틸리티 | `XLU` | 41.07 | -0.19% | +3.50% | -4.35% | -3.79% | 41.15 | 2026-10-08 16:00 |
| 부동산 | `XLRE` | 40.85 | +0.69% | +0.42% | -5.90% | +1.24% | 40.57 | 2026-10-08 16:00 |
| 커뮤니케이션 | `XLC` | 112.07 | +0.73% | +1.94% | +1.12% | -4.80% | 111.26 | 2026-10-08 16:00 |
| 반도체 | `SMH` | 607.27 | -2.84% | -1.71% | +5.74% | +68.63% | 625.03 | 2026-10-08 16:00 |
| 소프트웨어 | `IGV` | 109.59 | -0.23% | +1.26% | +7.62% | +3.69% | 109.84 | 2026-10-08 16:00 |
| 지역은행 | `KRE` | 69.59 | +1.02% | -0.51% | -5.26% | +7.38% | 68.89 | 2026-10-08 16:00 |
| 바이오 | `XBI` | 149.29 | -0.63% | -3.38% | -6.33% | +22.44% | 150.23 | 2026-10-08 16:00 |

### 섹터 ETF 보조 지표 (1M 상대강도 vs SPY · 이동평균 위치)

| ETF | 1M vs SPY | 50일선 | 200일선 |
|---|---|---|---|
| 기술 (`XLK`) | +3.76% | 위 | 위 |
| 금융 (`XLF`) | -6.47% | 아래 | 위 |
| 에너지 (`XLE`) | -1.62% | 위 | 위 |
| 헬스케어 (`XLV`) | -0.56% | 아래 | 위 |
| 경기소비재 (`XLY`) | -2.18% | 아래 | 아래 |
| 필수소비재 (`XLP`) | -1.07% | 아래 | 아래 |
| 산업재 (`XLI`) | -3.49% | 아래 | 아래 |
| 소재 (`XLB`) | -5.64% | 아래 | 아래 |
| 유틸리티 (`XLU`) | -5.87% | 아래 | 아래 |
| 부동산 (`XLRE`) | -7.41% | 아래 | 아래 |
| 커뮤니케이션 (`XLC`) | -0.39% | 위 | 아래 |
| 반도체 (`SMH`) | +4.23% | 위 | 위 |
| 소프트웨어 (`IGV`) | +6.11% | 위 | 위 |
| 지역은행 (`KRE`) | -6.77% | 아래 | 아래 |
| 바이오 (`XBI`) | -7.84% | 아래 | 위 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.173 | 콘탱고 |
| VIX / VIX9D | 1.262 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.187 | 1.424 | 2,526,477 | 2,999,960 | 29,968 |
| 나스닥100 ETF 옵션 (QQQ) | 1.040 | 1.493 | 5,292,414 | 5,502,886 | 11,442 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **CNBC** · Treasury yields are 'really, really high,' but can come down soon, Bessent's new adviser says
  - 2026-10-08 15:38 (ET) · https://www.cnbc.com/2026/10/08/treasury-yields-david-zervos.html
- **CNBC** · New data shows Starbucks turnaround is working, but Chipotle takeover report slams shares
  - 2026-10-08 15:08 (ET) · https://www.cnbc.com/investingclub/2026/10/08/new-data-shows-starbucks-turn-is-working-but-chipotle-takeover-report-slams-shares.html
- **CNBC** · We're buying the dip in a stock being punished for something it's actually insulated from
  - 2026-10-08 14:49 (ET) · https://www.cnbc.com/investingclub/2026/10/08/were-buying-the-dip-in-a-stock-being-punished-for-something-its-actually-insulated-from.html
- **Reuters** · Plane damaged at Riyadh airport as Houthis escalate attacks, sources say - Reuters
  - 2026-10-08 14:42 (ET) · https://news.google.com/rss/articles/CBMiyAFBVV95cUxQS3RjWlUtbVhIS3V2UlRkMFZOT3pESFlCZGVKcVp5N1lwX1JCTGRrXzI3dXdHT3diVGZUWENHREJ3MW5zQUpRamZpbkV0dTdoNDhRUzl6OW5FT2JZSjZHaHY2T2ltMm1fNTZVNHhuQzdZTmJVRHhSbE1vYnNpZTR4SGJONWhxVWxoYmxBLW1SRkpBNlROdHBxN3VjMUtpcHFaVzgzQ1ZvcmIyVllXcjBhSTY3TlhuLXpQRExkZmYtd29TOEppUkYwOA?oc=5
- **Reuters** · US imposes fresh sanctions on Iran's shadow fleet - Reuters
  - 2026-10-08 14:35 (ET) · https://news.google.com/rss/articles/CBMimAFBVV95cUxQUm45bHRGMFlmNEV2d2lTTkFvQURQckhMSGhYRlhxWUtOb1d2cGhCTnVXUEJaMF94S2xZNXFWMF9ONTVraWdWdnVOME04c2xyMk5tRnhHVjI3YVFmQTZIWVR6MXhDUUNram9tRjlsejRlRXVQUERDX3NkY2ZIVmlsOV9Ic0wxOVNPSmVCRmtVVExGcWZNY0tCTw?oc=5
- **CNBC** · We're adding to our position in a hard-hit stock before important catalysts arrive
  - 2026-10-08 14:26 (ET) · https://www.cnbc.com/investingclub/2026/10/08/were-adding-to-our-position-in-a-hard-hit-stock-before-important-catalysts-arrive.html
- **Reuters** · Moroccan defense firm MMI targets turret deliveries in March 2027 - Reuters
  - 2026-10-08 14:26 (ET) · https://news.google.com/rss/articles/CBMiwgFBVV95cUxQOGtuWDhETzgwLUI4QlB0cnVKQWtuZjIybG1ROF9HVHVpRGR2S0Z6Q1dGeUFENnZDa0l3SzNGaUNpX05nOUNaQTV0NGUwMGdyQ01fSEw2ZzQ5eGhPWVZuOUpRTlVfSHM0WlluMDZRc0tBR2hDcXFIMVJCcUg4MnE2bDdORmxiV1ItVDBCNkN3UU5RZktvcTh0eVdadExMTUdIRDZ5dGg1U0t0Z3VBTXhMZzc4b3RKa3pqZElMNmJEM0pyQQ?oc=5
- **Reuters** · Trump says US will not attack Iran before midterm elections in November - Reuters
  - 2026-10-08 13:22 (ET) · https://news.google.com/rss/articles/CBMivAFBVV95cUxNMmV2ZUhoRklKSzBPaFkzWHVFdkwxVDlVVU8tdDV2NXc4NEkxTjZSTVhoaklIeTlJX3BCUTFkRUREY1VDVGpTY1lhZEQ4OHgyRG81S0RLa0JJVEZHTWpiUFJVRy0xZmVSWEpVbDZsVFBSRzZ4bmw2RnhtMXlBelJ1Vi1GUnVuZ3htemdTdExuTktpQ2dKdzhFRmRMd0MwMlYtd3JPb1J0NVlKcVNtWUlNNHRoNVFWaFBWUHNTdg?oc=5
- **Reuters** · Lufthansa, Indian airlines suspend flights to Riyadh after Houthi attacks - Reuters
  - 2026-10-08 12:51 (ET) · https://news.google.com/rss/articles/CBMiuAFBVV95cUxOVXd3SHFQR3NWbldRVWo1OVQtajAyZVYtRzNYcmFzZTR3X2pMaDEzTXJKX3R4aUNPNW9fOEhUalZkVnR3LWtKRWM3VDVqelA0M1QtRlFNOE45ZG16VFVIN0JrbHFQSDFFd0N1OEM5Z3FMS0tnVDJvaEZXSjhSYUVsVWJGWXpBdTdVSjZrVVBEc3JCUzFDQXM4Y2ZjYUpHTWlIb2VtUGFlOWs2djlQYUFZLUZ1X0hSZFJ0?oc=5
- **Reuters** · Turkey's foreign minister says Ankara weighing Saudi defence support, rules out offensive role - Reuters
  - 2026-10-08 12:35 (ET) · https://news.google.com/rss/articles/CBMizAFBVV95cUxPY0RkSExrMDJ0QVQySHp6M1RMbEpSRXA5U2hUZXZINGM1Vk03b0lsR2dRZ3h1SGh4OXNHclpDT0RuYWFHM2d3SXk1YzVkTXpkckZHc2syWllMUFgwdnpaaXZhWXk2bkxEdEl2U3F2YzJhaWVBcmVVbGV6d0RiY09Fb2lzMEYxOGVJZ3VmbERDSlVZQnJfYWJ4M3NHT3hQZ1dLUVBzcVhXRl9YR1c2aDMzM3o3RzNBR0FlMU9DYld0emJBR1pid0lDajNtQ0s?oc=5
- **CNBC** · We're putting some of our large cash pile to work in a beaten-down consumer name
  - 2026-10-08 12:09 (ET) · https://www.cnbc.com/investingclub/2026/10/08/were-putting-some-of-our-large-cash-pile-to-work-in-a-beaten-down-consumer-name.html
- **CNBC** · Jim Cramer says he's in a buying mood. Here are some stocks he's considering
  - 2026-10-08 11:18 (ET) · https://www.cnbc.com/investingclub/2026/10/08/jim-cramer-says-hes-in-a-buying-mood-here-are-some-stocks-hes-considering.html
- **Reuters** · German government raises growth forecasts for 2026 and 2027 - Reuters
  - 2026-10-08 10:58 (ET) · https://news.google.com/rss/articles/CBMinAFBVV95cUxQZmVoTW5PMWs0TDR0NkRqT1ZnclNyUExCU2Z1TWlhd1VhMmdoTVc5WWwwZVJVSUhkandjbmx6UXEydzk0MTN4V0ZkcHBZTmZSR0V5T05YRGo3Ry1NdHp6WHpqQzQ2MERoNjN3NGk4TEJaaDd1MGh5bjhoWUIxTTZpZUhxVzgzaGMxOUQtVEZKMy1rc3M0bnJSdUh2RzE?oc=5
- **Reuters** · Asia races to stockpile oil, speed up renewables in response to Iran war - Reuters
  - 2026-10-08 10:56 (ET) · https://news.google.com/rss/articles/CBMitAFBVV95cUxPcW1Cd0Mwc1pJOUR1MFdlMWxHSzRESGx0anZnd0FyYzJZRVAteGFZOFNvSEdjYjNZREFINVprWFhiVmIyZkNrZlNBM25GaVgzMGo4OFJNdmE0LVdJbmYxSFJILTZzaXRhTlFxTXZNOGhWamREdTlYQTI4dXJycS1lMFF6VEgyUHo3c3NUeV93NmY3RXowVEp2andOcWVTMmZpZUFVYXZKcGg1cVlwRjlaOUxsQnQ?oc=5
- **CNBC** · 10-year Treasury yield is little changed as Fed's Waller says more hikes needed, investors await 30-year auction
  - 2026-10-08 10:11 (ET) · https://www.cnbc.com/2026/10/08/us-treasury-yields-30-year-bond-auction.html

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Sector Update: Tech Stocks Fall Late Afternoon
  - Yahoo · 2026-10-08 15:51 (ET) · https://finnhub.io/api/news?id=41cc899fae1c361b4d4d29d0aa19c406dce6c54fdf154e5304f99a33169c7ff6
- **NVDA** · Why there's a spotlight on Trump's relationship with Big Tech and corporate America
  - Yahoo · 2026-10-08 15:42 (ET) · https://finnhub.io/api/news?id=d78c8fbf5f06e6c5fa4a4719862b408f5d1e6919ccf19e784aacb9d470650dbb
- **NVDA** · Here's What a $10,000 Investment in Marvell Stock Could Be Worth in 2031 (Hint: It's a Lot)
  - Yahoo · 2026-10-08 15:35 (ET) · https://finnhub.io/api/news?id=c009f9fe1902e3d1b398f44a43aae35bfaca0db72f2df6dea2fe1179c06c1c0a
- **AVGO** · Oracle Stock Crashes After OpenAI's Revenue Gap. Who's Next?
  - Yahoo · 2026-10-08 14:41 (ET) · https://finnhub.io/api/news?id=65ae8f35646f7744314bdc34397fee78c5bc627a6baec202a0cfef4a3ababfb7
- **AVGO** · Billionaire David Tepper Dumped Sandisk for This Trillion-Dollar AI Chip Giant
  - Yahoo · 2026-10-08 14:20 (ET) · https://finnhub.io/api/news?id=898d555a409bbd3fcc793c9debd14d2b25beacc40eb6254a32e199d1684a8732
- **AVGO** · Oracle stock falls on more debt to fund AI chip buying, OpenAI revenue disclosure
  - Yahoo · 2026-10-08 14:02 (ET) · https://finnhub.io/api/news?id=da9e8c5fd6a3eb2d327bb8ad292b2488ed65830288b1395953af037226cbae30

### 금융

- **JPM** · Western Digital upgraded, PayPal initiated: Wall Street's top analyst calls
  - Yahoo · 2026-10-08 09:43 (ET) · https://finnhub.io/api/news?id=27528b27da098eccd8995c8fe4848e47e7b0b73f20c8cb2aad3df002a5e847c0
- **JPM** · Interactive Brokers Group, Inc. (IBKR) Earnings Expected to Grow: What to Know Ahead of Next Week's Release
  - Yahoo · 2026-10-08 09:00 (ET) · https://finnhub.io/api/news?id=e5652344f56721e77dad1aa4a0354008301e36a905319d952880bbf957de8a5b
- **JPM** · Citigroup’s Transformation Can Lift the Stock by 30%. It’s Time to Buy.
  - Yahoo · 2026-10-08 08:42 (ET) · https://finnhub.io/api/news?id=084424397a9f34fd988d34d2c8275f882ef42c486655b847dd20d1a7e13b5f0e

### 에너지

- **XOM** · How XOM's Strong Balance Sheet Helps Weather Oil Price Volatility
  - Yahoo · 2026-10-08 09:38 (ET) · https://finnhub.io/api/news?id=c83de90e2a1921e0b7ad5cefc2bcde2dd9c6ab9004bef809b4a268ecdcc3c5c7
- **XOM** · HP's Strong Q4 Outlook and FlexRobotics Drive Investor Focus
  - Yahoo · 2026-10-08 09:14 (ET) · https://finnhub.io/api/news?id=6fcd2ff36675a1ab6f190f75ddbde8283b2c4ec1228d10e1c94ace1221ada6d6
- **XOM** · These S&P500 stocks that are showing activity before the opening bell on Thursday.
  - ChartMill · 2026-10-08 08:35 (ET) · https://finnhub.io/api/news?id=1ac25b3729a281f22c541b2922f619ac20a7dd4de053fb7af5ccb6d5a18d03b1

### 헬스케어

- **UNH** · Exploring the top movers within the dow jones index during today's session.
  - ChartMill · 2026-10-08 15:10 (ET) · https://finnhub.io/api/news?id=d02e79ecef043a92ebba46248d20db4281c6aa7162d4da8ddbe12ca8c3b04577
- **UNH** · These dow jones stocks are moving in today's session
  - ChartMill · 2026-10-08 12:40 (ET) · https://finnhub.io/api/news?id=5346d97d82ac2a7bb433a1d6bca532f03007c528ef70f21e487ae9da37ae871f
- **UNH** · CVS Health Trades at a Discount to Industry: How to Play the Stock?
  - Yahoo · 2026-10-08 12:21 (ET) · https://finnhub.io/api/news?id=86c548386c1e9658dae6b65e60f304fb0d0316c7418352549369d25f7d8bc55d

### 소비재·유통

- **AMZN** · Can AWS Transform Make NetApp (NTAP) the Default Storage Landing Zone in the Cloud?
  - Yahoo · 2026-10-08 15:48 (ET) · https://finnhub.io/api/news?id=36da1a2aef088f581f9a20b69c60a715050b3505c529189425258b2d76406428
- **AMZN** · Did Amazon owe you a refund? You may qualify for part of a $309.5 million settlement.
  - Yahoo · 2026-10-08 15:43 (ET) · https://finnhub.io/api/news?id=a9bee8040934f9099ce5b1dc1b0b9d11f4fc2ca5c9b0cce622a190edb495e444
- **AMZN** · Exploring the top movers within the dow jones index during today's session.
  - ChartMill · 2026-10-08 15:10 (ET) · https://finnhub.io/api/news?id=d02e79ecef043a92ebba46248d20db4281c6aa7162d4da8ddbe12ca8c3b04577

