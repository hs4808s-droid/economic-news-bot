# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-13 · 미국 기준일(ET): 2026-10-12 · 생성시각(KST): 2026-10-13 06:30
# 출처: Yahoo Finance chart API · FRED(키 없는 CSV) · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.
> 금리·스프레드의 등락은 bp(1bp=0.01%p) 단위다. FRED 값은 영업일 기준 하루 늦게 확정될 수 있다(기준 열 참고).

## 미국 주요 지수

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| S&P500 | `^GSPC` | 7,807.24 | -0.06% | +0.43% | +1.96% | +14.05% | 7,811.54 | 2026-10-12 16:35 |
| 나스닥종합 | `^IXIC` | 27,245.9 | -0.44% | -0.84% | +3.47% | +17.23% | 27,366.17 | 2026-10-12 17:15 |
| 다우 | `^DJI` | 51,850.55 | +0.38% | +1.14% | -1.37% | +7.88% | 51,654.95 | 2026-10-12 16:43 |
| 러셀2000 | `^RUT` | 2,794.48 | -0.45% | -1.85% | -3.77% | +12.59% | 2,806.98 | 2026-10-12 16:30 |
| SOX (필라델피아 반도체) | `^SOX` | 12,236.79 | -2.67% | -7.11% | +3.49% | +72.76% | 12,572.42 | 2026-10-12 17:15 |

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,857 | -0.04% | 7,859.75 | 2026-10-12 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 30,877.5 | -0.74% | 31,108.75 | 2026-10-12 16:59 |
| 다우 선물 (YM) | `YM=F` | 52,129 | +0.39% | 51,926 | 2026-10-12 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,812.3 | -0.35% | 2,822.1 | 2026-10-12 16:59 |

## 금리

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 미 10년물 금리 (Yahoo) | `^TNX` | 5.24 | -0.4bp | -7.1bp | +26.5bp | +107.7bp | 5.244 | 2026-10-12 14:59 |
| 미 30년물 금리 (Yahoo) | `^TYX` | 5.598 | -0.2bp | -6.7bp | +24.4bp | +75.8bp | 5.6 | 2026-10-12 14:59 |
| 미 2년물 금리 (FRED) | `FRED:DGS2` | 4.75 | -2.0bp | -3.0bp | +32.0bp | +128.0bp | 4.77 | 2026-10-08 (FRED) |
| 미 10년물 금리 (FRED) | `FRED:DGS10` | 5.22 | -6.0bp | -2.0bp | +39.0bp | +104.0bp | 5.28 | 2026-10-08 (FRED) |

**10Y-2Y 스프레드 (FRED DGS10−DGS2, 2026-10-08): 0.47%p** (전일 대비 -4.0bp)

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 15.21 | +2.49% | 14.84 | 2026-10-12 16:15 |
| VIX9D (9일) | `^VIX9D` | 11.68 | +3.73% | 11.26 | 2026-10-12 16:15 |
| VIX3M (3개월) | `^VIX3M` | 17.93 | +0.90% | 17.77 | 2026-10-12 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 85.93 | +1.24% | 84.88 | 2026-10-12 16:15 |
| SKEW (테일리스크) | `^SKEW` | 155.06 | +0.47% | 154.34 | 2026-10-12 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 달러지수 (DXY) | `DX-Y.NYB` | 102.57 | +0.36% | 102.21 | 2026-10-12 17:20 |
| USD/KRW | `KRW=X` | 1,334.04 | -0.67% | 1,342.99 | 2026-10-12 17:30 |
| WTI | `CL=F` | 93.16 | +1.43% | 91.85 | 2026-10-12 16:59 |
| Brent | `BZ=F` | 105.92 | +1.15% | 104.72 | 2026-10-12 16:59 |
| 금 | `GC=F` | 4,195.9 | -0.48% | 4,216.3 | 2026-10-12 16:59 |
| 구리 | `HG=F` | 6.77 | +1.84% | 6.64 | 2026-10-12 16:59 |
| 비트코인 | `BTC-USD` | 82,838.91 | -1.00% | 83,679.47 | 2026-10-12 17:30 |
| 하이일드 스프레드 (OAS, %p) | `FRED:BAMLH0A0HYM2` | 3.15 | +6.0bp | 3.09 | 2026-10-08 (FRED) |

## 섹터 ETF

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 기술 | `XLK` | 196.36 | -1.22% | -2.27% | +4.63% | +36.39% | 198.78 | 2026-10-12 16:00 |
| 금융 | `XLF` | 55.05 | +0.58% | +2.17% | -3.84% | +0.51% | 54.73 | 2026-10-12 16:00 |
| 에너지 | `XLE` | 66.01 | +1.43% | +4.03% | +1.34% | +47.64% | 65.08 | 2026-10-12 16:00 |
| 헬스케어 | `XLV` | 171.99 | +0.69% | +2.76% | +4.01% | +11.10% | 170.81 | 2026-10-12 16:00 |
| 경기소비재 | `XLY` | 112.27 | -0.51% | +1.68% | -0.61% | -5.98% | 112.85 | 2026-10-12 16:00 |
| 필수소비재 | `XLP` | 84.41 | +1.17% | +4.16% | +1.24% | +8.66% | 83.43 | 2026-10-12 16:00 |
| 산업재 | `XLI` | 169.15 | -0.06% | -0.56% | -1.87% | +9.04% | 169.25 | 2026-10-12 16:00 |
| 소재 | `XLB` | 49.44 | +0.02% | -0.12% | -2.96% | +9.02% | 49.43 | 2026-10-12 16:00 |
| 유틸리티 | `XLU` | 41.63 | +0.53% | +4.15% | -1.79% | -2.48% | 41.41 | 2026-10-12 16:00 |
| 부동산 | `XLRE` | 41.92 | +0.74% | +3.07% | -3.45% | +3.89% | 41.61 | 2026-10-12 16:00 |
| 커뮤니케이션 | `XLC` | 111.45 | +0.97% | -0.14% | -1.02% | -5.33% | 110.38 | 2026-10-12 16:00 |
| 반도체 | `SMH` | 590.99 | -2.05% | -6.77% | +3.95% | +64.10% | 603.33 | 2026-10-12 16:00 |
| 소프트웨어 | `IGV` | 111.28 | -1.23% | +1.42% | +9.61% | +5.29% | 112.67 | 2026-10-12 16:00 |
| 지역은행 | `KRE` | 69.56 | +0.80% | -1.18% | -5.87% | +7.33% | 69.01 | 2026-10-12 16:00 |
| 바이오 | `XBI` | 151.4 | -1.54% | -3.07% | -3.07% | +24.17% | 153.77 | 2026-10-12 16:00 |

### 섹터 ETF 보조 지표 (1M 상대강도 vs SPY · 이동평균 위치)

| ETF | 1M vs SPY | 50일선 | 200일선 |
|---|---|---|---|
| 기술 (`XLK`) | +2.82% | 위 | 위 |
| 금융 (`XLF`) | -5.65% | 아래 | 위 |
| 에너지 (`XLE`) | -0.47% | 위 | 위 |
| 헬스케어 (`XLV`) | +2.20% | 위 | 위 |
| 경기소비재 (`XLY`) | -2.42% | 아래 | 아래 |
| 필수소비재 (`XLP`) | -0.57% | 위 | 위 |
| 산업재 (`XLI`) | -3.67% | 아래 | 아래 |
| 소재 (`XLB`) | -4.77% | 아래 | 아래 |
| 유틸리티 (`XLU`) | -3.60% | 아래 | 아래 |
| 부동산 (`XLRE`) | -5.26% | 아래 | 아래 |
| 커뮤니케이션 (`XLC`) | -2.83% | 아래 | 아래 |
| 반도체 (`SMH`) | +2.14% | 위 | 위 |
| 소프트웨어 (`IGV`) | +7.81% | 위 | 위 |
| 지역은행 (`KRE`) | -7.68% | 아래 | 아래 |
| 바이오 (`XBI`) | -4.88% | 아래 | 위 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.179 | 콘탱고 |
| VIX / VIX9D | 1.302 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.141 | 1.453 | 1,643,792 | 1,875,371 | 29,756 |
| 나스닥100 ETF 옵션 (QQQ) | 0.966 | 1.500 | 3,239,549 | 3,129,866 | 11,166 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **CNBC** · Bear to bull: A double upgrade of Salesforce illustrates the folly of the 'SaaSpocalypse'
  - 2026-10-12 15:50 (ET) · https://www.cnbc.com/investingclub/2026/10/12/bear-to-bull-a-double-upgrade-of-salesforce-illustrates-the-folly-of-the-saaspocalypse-.html
- **Reuters** · US hopes diesel deal can 'soften' Moscow on peace talks, sources say - Reuters
  - 2026-10-12 15:45 (ET) · https://news.google.com/rss/articles/CBMitAFBVV95cUxQY1h5ek9QWEw0bXVmSUpuTlA1MDlVNXg1SzlnSkpwT1BXLVZHVnNMT1k0V3pfaU8tVFhUcWw1TWl1SE9Kcm04T0RYNjlhbGdyaUFQZEtOU2x6NmtJOGVfYXFWaHY3b1R0TDA5SzVsSDg0UTU2M2NGZk50WEZRTHBTSnJVWTBGbUJ6RjlnWFp0WTl1bkdWYmNYcl9ISXFSNS10OTBUZmVwQXpKSkI5REN1YTdkbnE?oc=5
- **Reuters** · Saudi capital's airport to remain shut this week as airlines cancel services - Reuters
  - 2026-10-12 15:36 (ET) · https://news.google.com/rss/articles/CBMixgFBVV95cUxObGszbTdESk0xU0twcE1ZOHg4VFpzN2lzeWQ0ZDJseVpKczh6cE44eTNOb3ZDS3dnVnZJN3RCNE1wVDI0djVodU41LTN3WkVIemI0NWlucWpKY0tvU3JMeEM2YVN1OTBsdW5mZDVXeWhFcXdyQ1pGRjBVNTR6SmpBSXhzSXRObWtSTjlYcEJzOUxsX2Ezb28yZ1FrU083bzNpNmd2VlpjUkxnaE5PdEliNWpxeU5QNkp1V1JmcXlFdUJ1S01zcHc?oc=5
- **CNBC** · Microsoft, Micron and Meta make news. Here's what the updates mean for our stakes
  - 2026-10-12 14:47 (ET) · https://www.cnbc.com/investingclub/2026/10/12/microsoft-micron-and-meta-make-news-what-it-all-means-for-our-stakes.html
- **Reuters** · UK PM Burnham says Iran's IRGC likely behind RAF Fairford incident - Reuters
  - 2026-10-12 13:12 (ET) · https://news.google.com/rss/articles/CBMirwFBVV95cUxNWWJ0NVNWU296YXNLZ1BDNC11S1V3MW5uY1ViQ2M3VmZ4eVZVLWtTT2x4MG4zOGJncUVrOFFyZkcwekpYZXpWRWhvc0lxWkhveHU3MmV0VW03dEo1RmN4dzVhSVFWajBzMXlZVDFQWXRkQ3V3eFdVTDdadFpJNjFCVzVlQ05WMkYxZEpmelV6RDdBaWhSN19YVDJROXcySFo0anBOWTNQYk81TENDaUY4?oc=5
- **Reuters** · What's in the diesel deal between Putin and Trump? - Reuters
  - 2026-10-12 12:00 (ET) · https://news.google.com/rss/articles/CBMilgFBVV95cUxPQVYyWUE3V0taZldlY0hsb2o0Rko0Y0QxTGJrbk80SHhyT3VKcWR1LTNfMFFEcEowbklSemZfRHp0Vk51cTBIQWFxNTBMSGZWTGZJejR4TUtoN1V6NGpWcnJtZWhScXY2MGotd1E4eW05UHd1cVZWb3NJLVI2NXl0QnJlRWlMeW1sVVFKSm1mQnBUd29yZVE?oc=5
- **Reuters** · Trump defends Russia diesel deal as lawmakers from both parties complain - Reuters
  - 2026-10-12 11:48 (ET) · https://news.google.com/rss/articles/CBMitwFBVV95cUxOWUNYSF8xeXZscDAyZTZVNC1zZHNtdHhqMng2bVZTenRCTDJWX0FDeV9pMjllMzRMRmJ0blkwMFZ1MENpd1RmbWltR1R0SmV6Q1JUQnpHbnZxNmQtYmZZaFpxdXVLS3Vxd2xqYmI1UVhLM3hCM2gybXN2LUZ5Q2JOdDByZUIwemdsenlGY3FxOENNME5lT0xocWNDYmN6X0ZxQXBiVFNHNnlENmVTOXdqU3pxdlpscHM?oc=5
- **CNBC** · Parenting in the digital age can be ‘a very anxiety provoking experience,’ says Emily Oster: How parents can lower that anxiety
  - 2026-10-12 11:03 (ET) · https://www.cnbc.com/make-it/2026/10/12/emily-oster-how-parents-can-lower-anxiety-.html
- **CNBC** · McDonald's is leaning into chicken and drinks to grow. New data shows it could be a tough task
  - 2026-10-12 10:56 (ET) · https://www.cnbc.com/2026/10/12/mcdonalds-chicken-beverage-growth.html
- **Reuters** · Airlines cancel flights to Saudi Arabia after Riyadh airport attacks - Reuters
  - 2026-10-12 10:48 (ET) · https://news.google.com/rss/articles/CBMiuwFBVV95cUxOX0c4YlJSYUNrT1pqLTA2TmFjdDZUdmh2Z3pXbG9vWF9mdS0tZFZ6M2tYTVUzRjZVTzhodnh4WU0waXV1bjZENURjUVhmRVZPN251V2laQmNMZ3JoNmIzZE5hWU82YkxIWTdvd2xNczBkNnEta0xGdzlmaGlFNkZ5M1lxcGZUNW5pRnMxV1pPT0NxMXZmOWpEUmpBNXRUcksyZWQ5Sm9pM1QweFFWdmZYVkdid0s1dUJSanNN?oc=5
- **Reuters** · Saudi Arabia faces new missile and drone fire after major attacks on airports - Reuters
  - 2026-10-12 10:28 (ET) · https://news.google.com/rss/articles/CBMiwgFBVV95cUxPbjQ4VHZvYkdYQm9yVEk1YjFFMmpzdkZlZURhdnpYUlNHTl9KMDZrbVFMSXB6WGRlU2ZIb2NnZm9yMjYwb2hYTnh0YnBrc2RkWWs0MzdxX01TUzllWERDajRXZHhxVXFIVmJhX0ljT0NWVHZMejdIdFhmWlZaOUFPQkVLUXZiN2hGVG1velpDX3FvTzY0VVhiQlpCQ1hoejRmSjhBZlVnYlNUcUlQOF9PeWVlMS0xT1RzS2Rlb1FUQlBwQQ?oc=5
- **Reuters** · Breakingviews - COMMENTARY: Riyadh attacks hit core of Saudi's economic pivot - Reuters
  - 2026-10-12 10:07 (ET) · https://news.google.com/rss/articles/CBMiqgFBVV95cUxOZENLRXVWdDdZX1BvTXFQN3E2TnRnYnJxUER4aldTVHFiR1pyenp6RllPeTMxeG55MjVrUE9TR3R2NzF2U1FEbjVHbS13S3JSNlJ5dldvWktocXZ6QzBkSEx6WV83SVBTN216X1BPYlhrSVoxZWp5a0REZkJjaVpBb2IteXBLN212R0lkRFJGeFdLaUhtb0ZuWFY1Q1BMT0pYWUZCZlhzX3JyUQ?oc=5
- **Reuters** · Europe set for another year of high gas prices as reserves hit lows - Reuters
  - 2026-10-12 10:03 (ET) · https://news.google.com/rss/articles/CBMirgFBVV95cUxOYUNxdUxmaThaQ0FLdXRxaWdHNE0tMm5OZjVZenR0X1h2cEtmODNEckpiejRHc0dtZXZnajFRZUQyLVo5ckgyR1lyTEN4YzdNNVo4OGptVC1QMkxUYUVGMDJzZnR0RXFZcXZ2NU9JMDNhVDlmLWQyMmhwZHVSRnRXWWVyTnBfX2Z3UXlxT3JRTnZ3R0xMRktqb0gwTWZRVXl4emZqU1NzWHMxX0hBeVE?oc=5
- **Reuters** · Saudi shares fall after second airport attack as Gulf trade stays cautious - Reuters
  - 2026-10-12 09:44 (ET) · https://news.google.com/rss/articles/CBMiwwFBVV95cUxNNDJseDNYUmxPQzZqWnBZM1hRbXJhaGQwdklnQVZBUWp3WEY2SUczaGpYejg3bXRDYzdDN3ctYzRVNVhBc05Rc084QzdOemRFX1l0a2J5TElELVFXUldBZEd6WVItdjVaeFZfWTVEdjJ5VGVkVmxiLVZ5ZWg3ckFLclRTcG1OaExuTnZXamxFcElNalR0SWlPUm5qY2lIa0dFQVJmc24wX0F2WG1nc3hnV3Z0dXEyN0pLWmhnRXJHeFVJTVU?oc=5
- **CNBC** · FAA warns U.S. airlines of safety risks over Saudi Arabia after attacks
  - 2026-10-12 08:31 (ET) · https://www.cnbc.com/2026/10/12/faa-saudi-arabia-flight-risks.html

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Microsoft just reclaimed its $4T market cap, thanks to its Maia 300 AI chip
  - Yahoo · 2026-10-12 15:47 (ET) · https://finnhub.io/api/news?id=64c51f3f54e043b957468f170adb603ea220a9fee2556ac022c6f50494cea199
- **NVDA** · Maia 300: Microsoft Builds the Exit From a Compute Landlord Model It Helped Finance
  - Yahoo · 2026-10-12 15:30 (ET) · https://finnhub.io/api/news?id=f5da460903b120e03641777b69800bb4b912d7c703c7891759803f237b9626e0
- **NVDA** · Intel aims to boost AI turnaround with new GPU chips to take on Nvidia
  - Yahoo · 2026-10-12 15:29 (ET) · https://finnhub.io/api/news?id=2f0da72ebcd2f7b29e7c6d4fdd1b32bc6acbbfe215a75c53663762e9d027bab1
- **AVGO** · Maia 300: Microsoft Builds the Exit From a Compute Landlord Model It Helped Finance
  - Yahoo · 2026-10-12 15:30 (ET) · https://finnhub.io/api/news?id=f5da460903b120e03641777b69800bb4b912d7c703c7891759803f237b9626e0
- **AVGO** · What Does NVIDIA Offer That Marvell Does Not?
  - Yahoo · 2026-10-12 15:11 (ET) · https://finnhub.io/api/news?id=71af332cd766ac84194a598e771bbea846f054fac024ac252deee52203b02464
- **AVGO** · d-Matrix Announces Squadron Compute Clusters for AI Inference at Data Center Scale
  - Yahoo · 2026-10-12 15:00 (ET) · https://finnhub.io/api/news?id=79a7e39b02221b609187febb6a5349fb17166d82ae3867cef802be4e872ec372

### 금융

- **JPM** · Wall Street Is Shedding Risk Ahead of Earnings, Inflation Data
  - Yahoo · 2026-10-12 14:33 (ET) · https://finnhub.io/api/news?id=d662550ff908f7ce69d41f89a95795b1e5b32172c6bc7360d749aab494b55fde
- **JPM** · Stocks Face a Tricky Patch. Banks and Bonds Could Decide What’s Next.
  - Yahoo · 2026-10-12 13:35 (ET) · https://finnhub.io/api/news?id=89e31a59e5d6524e4e320fe96d87541d7e8350a985994c7c1d0ea561bec30986
- **JPM** · Biogen Upgraded to Buy at J.P. Morgan. How the Stock Could Rise 28%.
  - Yahoo · 2026-10-12 13:15 (ET) · https://finnhub.io/api/news?id=d7b89a9724b6684eca2328ec43aa70627caa9eab7fbe881eb5a41bc920aa007e

### 에너지

- **XOM** · Exxon, Oil Giants Top Buy Points After Deadly Saudi Airport Attacks
  - Yahoo · 2026-10-12 14:06 (ET) · https://finnhub.io/api/news?id=27207fe903afa40becfc1c195e3d83b3d028759275e0d5b3fcba3e0028120993
- **XOM** · Stock Market Today: Nasdaq Drops As Lumentum Dives; Tanker Firm Navios Glides Into Buy Zone (Live Coverage)
  - Yahoo · 2026-10-12 13:22 (ET) · https://finnhub.io/api/news?id=77f078c5eba658e547f103903be4bd9b08cee267c3db86d2d90f1e7b276a3562
- **XOM** · ExxonMobil (XOM) Blocks $5.2 Billion Kashagan Fine Settlement
  - Yahoo · 2026-10-12 13:08 (ET) · https://finnhub.io/api/news?id=fce1fb35091a79d8d4eaac3a8d49c6faa6f7f5a85723e6b7cb3dc1b9c4347464

### 헬스케어

- **UNH** · Humana leads Managed Care winners in new CMS Star Ratings - Evercore
  - Yahoo · 2026-10-12 15:45 (ET) · https://finnhub.io/api/news?id=76c279f40b2ea3c9822b1d1ce2e3344b47316d325ee958932b5df2cc915af9cf
- **UNH** · Uncover the latest developments among dow jones stocks in today's session.
  - ChartMill · 2026-10-12 15:10 (ET) · https://finnhub.io/api/news?id=02ccc14928cac6b07e502b3a1349a262b04aa03aacb6c39874473bea74c00ca6
- **UNH** · Wall Street Is Shedding Risk Ahead of Earnings, Inflation Data
  - Yahoo · 2026-10-12 14:33 (ET) · https://finnhub.io/api/news?id=d662550ff908f7ce69d41f89a95795b1e5b32172c6bc7360d749aab494b55fde

### 소비재·유통

- **AMZN** · Microsoft just reclaimed its $4T market cap, thanks to its Maia 300 AI chip
  - Yahoo · 2026-10-12 15:47 (ET) · https://finnhub.io/api/news?id=64c51f3f54e043b957468f170adb603ea220a9fee2556ac022c6f50494cea199
- **AMZN** · Better High-Yield Dividend Stock: UPS vs. General Mills
  - Yahoo · 2026-10-12 15:26 (ET) · https://finnhub.io/api/news?id=3c364d1c048dd96b6575bb7813ff091bb51792765fdacf1d7e278f56bcfb14e5
- **AMZN** · Uncover the latest developments among dow jones stocks in today's session.
  - ChartMill · 2026-10-12 15:10 (ET) · https://finnhub.io/api/news?id=02ccc14928cac6b07e502b3a1349a262b04aa03aacb6c39874473bea74c00ca6

