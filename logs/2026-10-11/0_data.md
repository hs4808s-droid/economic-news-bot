# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-11 · 미국 기준일(ET): 2026-10-09 · 생성시각(KST): 2026-10-11 06:30
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
| S&P500 선물 (ES) | `ES=F` | 7,859.75 | +0.56% | 7,816.25 | 2026-10-09 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 31,108.75 | +0.45% | 30,969.5 | 2026-10-09 16:59 |
| 다우 선물 (YM) | `YM=F` | 51,926 | +0.84% | 51,493 | 2026-10-09 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,822.1 | +0.44% | 2,809.6 | 2026-10-09 16:59 |

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
| USD/KRW | `KRW=X` | 1,340.9 | -0.16% | 1,342.99 | 2026-10-09 23:30 |
| WTI | `CL=F` | 91.85 | +0.39% | 91.49 | 2026-10-09 16:59 |
| Brent | `BZ=F` | 104.72 | +0.42% | 104.28 | 2026-10-09 16:59 |
| 금 | `GC=F` | 4,216.3 | +1.43% | 4,157 | 2026-10-09 16:59 |
| 구리 | `HG=F` | 6.69 | +2.65% | 6.52 | 2026-10-09 16:59 |
| 비트코인 | `BTC-USD` | 82,988.99 | +0.54% | 82,546.32 | 2026-10-10 17:30 |
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

- **Reuters** · Several wounded in Riyadh airport attack, operations suspended, Saudi aviation authority says - Reuters
  - 2026-10-10 13:22 (ET) · https://news.google.com/rss/articles/CBMitAFBVV95cUxQbV9hVGtMSXpTVDJ3c05vRW9SQ2lRLTg3cUlOeWxDc2w4amF5V2N2Ul9YazdxcHJGNDRwd3hlQi15a2ZGWWZoZnc1dlA5UkY3cU9PclVCNkh6SVkzQ25waEVRRlN2TVdES3lKV1VuVXN6QnJycWxtdkNOdUIwMTdTRE9fbko3Umt5d0huNVY1dW9ZcFpLSF9yczRGRHJfSWZhM1AtTkVzbVR4TlRUdzhIb19JN3o?oc=5
- **CNBC** · Stocks saw new highs and big declines: How the volatile AI trade moved last week's market
  - 2026-10-10 11:28 (ET) · https://www.cnbc.com/investingclub/2026/10/10/stocks-saw-new-highs-and-big-declines-how-the-volatile-ai-trade-moved-last-weeks-market.html
- **CNBC** · Pokémon card values are soaring. What collectors should know before buying or selling
  - 2026-10-10 09:30 (ET) · https://www.cnbc.com/2026/10/10/pokemon-card-values-grading-guide.html
- **CNBC** · I work hard to stay close to my friends. A researcher says it’s good for my well-being—and these 3 habits can help
  - 2026-10-10 09:05 (ET) · https://www.cnbc.com/make-it/2026/10/10/how-to-maintain-close-friendships.html
- **CNBC** · How Supreme Court justices are leaning in major 401(k) case over private funds and underperformance
  - 2026-10-10 09:00 (ET) · https://www.cnbc.com/2026/10/10/supreme-court-case-401k-private-funds-intel.html
- **Reuters** · Major Saudi conferences to proceed, organisers say, despite deadly airport attack - Reuters
  - 2026-10-10 07:33 (ET) · https://news.google.com/rss/articles/CBMixwFBVV95cUxNS3lBZTEwaWVLUXNScDVCZjV1eDRkb3RoWnM2M0ZkOE9DM0ZVMDNPaXA1ZDJXQ0xYZ2JqZm85dm9HbHBOSXNaQmVzUWJQN0xnMXpNR2dENDFoMXItWEQxYlB2WmZGUVVxYU1RX0E0RHNKSWd0RDNkbmk1Ty1MZnlJZFUxR3pjanFwSWZzS3hiZlktMEtTM2psOS12Y2xaMlk1MEc1Nm81NU50WjFKN0ZkY082T0pFVGU3dmd6T3JIckNPcFR0VlM0?oc=5
- **Reuters** · Wall Street posts weekly gains with earnings, inflation data on tap - Reuters
  - 2026-10-09 19:33 (ET) · https://news.google.com/rss/articles/CBMiugFBVV95cUxNY0hWbFNBUlE5SFJjLVpMMnIwZzFpN2hVNEd2YkxlalYyVDRKTDZxcGJ0REJLUERXb0tlVVVreVZLMHFodlAtZlY0eDhuN2xiOHcybjM1c3gxMlBNTmZMWWdrdkhQOG9Pc2JRdTEwYXM5N181QmttRVEyRkdXTy1LT2J0ZVA4d2FXdjZZeGZwaGRaSUtDUXJUZXFjSU94cnprbTVUSXRpXzFtQzV2TWtpR1dNSjdaWVplUlE?oc=5
- **Reuters** · Kremlin says Putin in phone call with Trump downplays immediate Ukraine talks resumption - Reuters
  - 2026-10-09 18:04 (ET) · https://news.google.com/rss/articles/CBMiwAFBVV95cUxQa1VpS1UxU2RzcFdfQkpkUXdBQkd5cTZPdTRrU3hTSzFhOHpaN25PcHJjblJGdGQxSlBSNjZ2S0tnSlhUYmRLZmtubDJ4NU5WYXJxRHBSdy1kSHBpdGktVFpZcGVTNTJPZHlvREE1QnVuXzE5SXR1Y19KLWdmdTlKMWIwRjBGQzFFbGVUTmw3TUNaY0FjWHRCSjdWSk1kT3NHVlJGSlY3MVR6d0REZlVjdmhpX3JPOFgwZVF0UlYtb3c?oc=5
- **Reuters** · UAE says Omani flydubai co-pilot planned suicide attack on Tel Aviv flight - Reuters
  - 2026-10-09 17:06 (ET) · https://news.google.com/rss/articles/CBMiwwFBVV95cUxQZTJVb2U2eWdVMjdYVEVwMWt0NzJaQTA0aDNCMVB3YVc3N1VIMUszdjl0OUFFNVhCRHNSUEk3MzVsY1pnX2pIU1hfME5sRm5QUThjSEdJd3VHeGtuQzMzTGc4X0VESC1McU1vUXo3QTJGV2MwWGpFMXpacXF3dndjcWNORXU3bWNXaUtwWjRLbHJDNjBBQ3BIQldySU5LWXNjU0hxQkd4aWp2ZjAtYzNyQ0J0MHpLZjFKM19VSjM4QlJkZ2c?oc=5
- **CNBC** · What's behind the recovery rally in tech stocks — plus, Elon Musk's very good week
  - 2026-10-09 15:02 (ET) · https://www.cnbc.com/investingclub/2026/10/09/whats-behind-the-recovery-rally-in-tech-stocks-plus-musks-good-week.html
- **CNBC** · Two massive trades just happened in Micron and Nvidia. What they could mean for chips
  - 2026-10-09 14:50 (ET) · https://www.cnbc.com/2026/10/09/two-massive-trades-just-happened-in-micron-and-nvidia-what-they-could-mean-for-chips.html
- **CNBC** · Trump created a committee to dig into the Fed's Lisa Cook. What is it and what comes next?
  - 2026-10-09 14:20 (ET) · https://www.cnbc.com/2026/10/09/trump-lisa-cook-fed-firing-committee-explained.html
- **CNBC** · The used car market is stagnant. Here's how to profit anyway
  - 2026-10-09 13:37 (ET) · https://www.cnbc.com/2026/10/09/the-used-car-market-is-stagnant-heres-how-to-profit-anyway.html
- **CNBC** · Tesla drops 'Full Self-Driving' brand name in Europe after regulator pushback
  - 2026-10-09 13:12 (ET) · https://www.cnbc.com/2026/10/09/tesla-full-self-driving-europe-regulator.html
- **CNBC** · Cramer: Investors selling Apple on latest iPhone 18 report are 'stupid as plywood'
  - 2026-10-09 12:43 (ET) · https://www.cnbc.com/investingclub/2026/10/09/cramer-investors-selling-apple-on-iphone-report-are-stupid-as-plywood.html

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · 2 Cryptocurrencies Poised to Surge 100% in the Coming Years That Savvy Investors Are Already Buying
  - Yahoo · 2026-10-10 15:41 (ET) · https://finnhub.io/api/news?id=14c18f2b4928acb0441085673740898e8ae9a94e25c0b29030fe8127ec023cf4
- **NVDA** · ‘Big Short’ investors split over the AI risk that matters most
  - Yahoo · 2026-10-10 15:13 (ET) · https://finnhub.io/api/news?id=cbdfc812c36a45772b50e46513f505a99ebed7bceeff3b04dfa4afd7dcd88994
- **NVDA** · Is It Too Late to Buy Palantir Stock?
  - Yahoo · 2026-10-10 14:50 (ET) · https://finnhub.io/api/news?id=ba8cd1956b3d0fe6f23703ccbae1213d97b7f9b49b00a8fef444d7dd5db09e29
- **AVGO** · 3 Low-Cost ETFs Spreading Income Across Hundreds of Holdings. One Still Puts 7.35% Behind a Single Company
  - Yahoo · 2026-10-10 12:03 (ET) · https://finnhub.io/api/news?id=b9ef3a927a71c6291bd6495d9e2aa92b06954eb1c40d4e989078877a4fe76410
- **AVGO** · Broadcom vs. Intel: Which Chip Stock Is a Better Buy in 2026?
  - Yahoo · 2026-10-10 11:35 (ET) · https://finnhub.io/api/news?id=a07a1f0cae3dbe4e693111a1dd0253e8b8fdfe5e60cb9b6055d1b42fe8cbe862
- **AVGO** · Broadcom’s AI Revenue Is Tripling, but the Stock Has Lagged. Is It Time to Load Up?
  - Yahoo · 2026-10-10 10:43 (ET) · https://finnhub.io/api/news?id=8f9a6501dc3aab368ea41dc3d95a9558dbf736286a6558f981ff6d72a43e5bff

### 금융

- **JPM** · Fed Official: “Rates Ought to Be Going up Further.” Cue the Trump Fireworks
  - Yahoo · 2026-10-10 11:16 (ET) · https://finnhub.io/api/news?id=637ffb27b47b1b9046e666348e75a4db0dbef2b0ade727236b91aa0325d17efd
- **JPM** · Stock Market Week Ahead: Gathering Election, Earnings Momentum
  - Yahoo · 2026-10-10 10:06 (ET) · https://finnhub.io/api/news?id=52d496ae164b8e30604ca8969c4e7d6651bd2e60dfcf9b64032c4b9535fcf79e
- **JPM** · How Much More Dividend Income a Roth IRA Keeps on a Half-Million-Dollar Portfolio
  - Yahoo · 2026-10-10 10:00 (ET) · https://finnhub.io/api/news?id=97371cf754bec6351a4b79af870a8da732ba9eb407fd85cb89a34a39d5305481

### 에너지

- **XOM** · Why ExxonMobil's Venezuela Warning Could Matter for Energy Investors Right Now
  - Yahoo · 2026-10-10 12:22 (ET) · https://finnhub.io/api/news?id=dbe3e25a0d40d0f3b762ac343e60b874a24d4f7bcbf388524c395dccb46c052c
- **XOM** · Chevron’s Dividend Has Survived Every Oil Crash. Can It Survive This One?
  - Yahoo · 2026-10-10 07:45 (ET) · https://finnhub.io/api/news?id=addeab99ab17728680895163d775065861043637e90237aec7390cc8acebfeb0
- **XOM** · ExxonMobil Holdings Corporation (XOM) Presents at Barclays 40th Annual Energy-Power Conference - Slideshow
  - SeekingAlpha · 2026-10-10 03:13 (ET) · https://finnhub.io/api/news?id=999fe2364622227b5b840d50f261738a9c3a142f92aa5fd21cbda1322198512b

### 헬스케어

- **UNH** · How UnitedHealth’s 2027 Medicare Advantage Overhaul Could Reshape the Investment Case for UNH
  - Yahoo · 2026-10-10 07:12 (ET) · https://finnhub.io/api/news?id=391410f514d68d52584f5a15115b70f543384408dacb45f3bff88bb9a1716f49
- **UNH** · UnitedHealth’s 4-Star Medicare Enrollment Share Falls to 67%, J.P. Morgan Estimates: What It Means Before Earnings
  - Yahoo · 2026-10-09 22:55 (ET) · https://finnhub.io/api/news?id=52a33c242d4bc20f2e265f3da76df80f7034b2ceb6196d0b009f2687b53f2b3a
- **UNH** · Estimates Keep Rising as Q3 Earnings Season Takes Center Stage
  - Yahoo · 2026-10-09 18:37 (ET) · https://finnhub.io/api/news?id=73b59c6d79519f821571c067bc86a653580406c019b010d3e65a46f0a8aaa077

### 소비재·유통

- **AMZN** · Coupang vs. MercadoLibre: Which Consumer Stock Is a Better Buy in 2026?
  - Yahoo · 2026-10-10 14:50 (ET) · https://finnhub.io/api/news?id=bc9df5f5fa0c7a96a75358f2cf8df6d73c0a296df3487e24bbb7179de9526bd0
- **AMZN** · Skydance Stock Is a Dicey Bet. 2 Better Plays.
  - Yahoo · 2026-10-10 14:42 (ET) · https://finnhub.io/api/news?id=203bd7ee4a0243d17842b4d1b0f7b2101024e589a0debdf892c625697e60a871
- **AMZN** · Amazon.com (AMZN) Patched Critical AWS Bedrock AgentCore Security Flaws
  - Yahoo · 2026-10-10 13:12 (ET) · https://finnhub.io/api/news?id=7c0794a766208e8e9d18f74383859a64af2defb42085a298b5feb22d632e3ca2

