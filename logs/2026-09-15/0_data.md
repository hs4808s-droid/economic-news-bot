# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-09-15 · 생성시각(KST): 2026-09-15 13:10
# 출처: Yahoo Finance chart API · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,682.25 | +0.30% | 7,659.5 | 2026-09-14 23:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 29,416.25 | +0.10% | 29,387 | 2026-09-14 23:59 |
| 다우 선물 (YM) | `YM=F` | 52,722 | +0.54% | 52,440 | 2026-09-15 00:00 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,909.3 | +0.17% | 2,904.5 | 2026-09-14 23:58 |

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 17.1 | +7.95% | 15.84 | 2026-09-14 16:15 |
| VIX9D (9일) | `^VIX9D` | 16.91 | +16.86% | 14.47 | 2026-09-14 16:15 |
| VIX3M (3개월) | `^VIX3M` | 19.28 | +3.66% | 18.6 | 2026-09-14 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 94.89 | +3.95% | 91.28 | 2026-09-14 16:15 |
| SKEW (테일리스크) | `^SKEW` | 152.09 | -1.55% | 154.49 | 2026-09-14 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 미 10년 국채선물 | `ZN=F` | 105.84 | -0.54% | 106.42 | 2026-09-15 00:00 |
| 금 | `GC=F` | 4,344.4 | -0.17% | 4,351.9 | 2026-09-15 00:00 |
| WTI | `CL=F` | 102.95 | +1.54% | 101.39 | 2026-09-15 00:00 |
| 달러지수 (DXY) | `DX-Y.NYB` | 99.59 | +0.13% | 99.46 | 2026-09-15 00:00 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.127 | 콘탱고 |
| VIX / VIX9D | 1.011 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.099 | 1.402 | 2,439,930 | 2,681,122 | 28,934 |
| 나스닥100 ETF 옵션 (QQQ) | 1.314 | 1.412 | 3,682,594 | 4,837,742 | 11,280 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **Reuters** · Houthis strike Saudi targets anew as talks over Strait of Hormuz stall - Reuters
  - 2026-09-14 20:04 (ET) · https://news.google.com/rss/articles/CBMiugFBVV95cUxOYjU2YnlvRExQZkwtRGlRN2ljVC10RTVQRGI4NUhLSEladjEzeGltZlcxWXByODRyZDlyM3pvWGdSYVBIZXctNVZvQ2ZOX09PZ2ZsN0pWU216ZFUwUDRRS0RjQXV2QVpMWkVXRFJiZGRaVVZENkFMN3hmUlBSWWxWVENnWnFYVEFHMGVMeWYyX2V0b09TMU9Bb2M4ZmZDWTU2YVVpYUFFOUJCcmVTeHhtdEVla2hMbGR1UGc?oc=5
- **Reuters** · US imposes fresh sanctions on Russia's VTB Bank over alleged Iran ties - Reuters
  - 2026-09-14 17:12 (ET) · https://news.google.com/rss/articles/CBMioAFBVV95cUxPUV9iZ1hvNXptVGtUeEZ2X3Q1bkxtdm93Zm1neUNFdjlKM3Y2eElENzhEbHNpMFRRUXlGaWtUakU1al9wM3gtanR4R05saV9fWXVmNXlOWFUtQkpvRnJBbDdybE5CdVJtUmFRVDdLazdXRGljQUVVa0xpcUEzWHNpUEd5ZEhjOUlQMVMzY2hnamY1endIa0RZbFRlM3pKOUUx?oc=5
- **Reuters** · Billionaire Dangote launches oil refinery 'people's IPO', Africa's biggest - Reuters
  - 2026-09-14 15:34 (ET) · https://news.google.com/rss/articles/CBMixwFBVV95cUxNNm15SzdOekVDNV9rUTlPanJOckRvYlVjbzNtRU1BVFlWLV9DUVFBRHIxQWwzbzZJNHNuUWt4VXpyM0piZVZCTjRXelNxMUN3ZHB4WXNuZmdoeTJvZkI5Mmp5azBwVGxRNU1qdEEwelJ4c3lCUGxORXRGUFkxckEwZFkwMjRIR3pUbnZhQnllUXp6ZVN2QllZeEg5LUhuVm9tdDhHZmhlTEt5RV8temxtSTJqb0RYWENfckZLTVV1RmlzNjQwdjBj?oc=5
- **CNBC** · Not all tech is under fire in Monday's selling, while investors seek refuge in defensive stocks
  - 2026-09-14 15:27 (ET) · https://www.cnbc.com/2026/09/14/not-all-tech-is-under-fire-in-monday-selling-investors-seek-out-defensives.html
- **CNBC** · Counting the votes: Warsh faces a tough battle as the Fed girds for expected interest rate hike
  - 2026-09-14 14:50 (ET) · https://www.cnbc.com/2026/09/14/counting-the-votes-warsh-faces-tough-battle-as-fed-girds-for-expected-rate-hike.html
- **CNBC** · Is a 'SaaSpocalypse'-like sell-off coming for AI hardware stocks? Not so fast
  - 2026-09-14 14:43 (ET) · https://www.cnbc.com/2026/09/14/is-a-saaspocalypse-like-sell-off-coming-for-ai-hardware-stocks-not-so-fast.html
- **CNBC** · As the oil surge continues, trader Mike Khouw sees more upside in this surging name
  - 2026-09-14 13:16 (ET) · https://www.cnbc.com/2026/09/14/as-the-oil-surge-continues-trader-mike-khouw-sees-more-upside-in-this-surging-name.html
- **CNBC** · Jim Cramer on why 'sitting on your hands' is worth it in this oversold market
  - 2026-09-14 12:11 (ET) · https://www.cnbc.com/2026/09/14/jim-cramer-on-why-sitting-on-your-hands-is-worth-it-in-this-oversold-market.html
- **Reuters** · Senior Sunni cleric shot dead by unidentified gunmen in southeast Iran - Iranian state media - Reuters
  - 2026-09-14 11:10 (ET) · https://news.google.com/rss/articles/CBMiyAFBVV95cUxPSXc0MkRtdlNRQUxNbjlDN3pHenA5cnEwdFBLU2ZPS3FBZDlpdXI4UDZ1WEZFQnZaemdZUVd6Q1JMOWNyc2s1QWZMU0YzWWVuSjl3V0hGS3BLTzFQWFZtalViVUZEcmduVElMUm0zU19oenVaUkdlRHAyUUF5TW9GelVoNlZyUktjV1FpQWNDbVRiOGdzNHg1X3JBNFRwZ0dDbGIyeWs2dWhVbERSVWJFYlhwLWtSSm00Z0ZIcDJtMXJ2U3dlY3pvZA?oc=5
- **Reuters** · AirBaltic files for Chapter 11 bankruptcy as Iran war costs bite - Reuters
  - 2026-09-14 10:58 (ET) · https://news.google.com/rss/articles/CBMikgFBVV95cUxOSTBsQlVVMThMRmZ6a3gxOE5lRG1fbENPRnEwUmlWN3pXNUdGT1ZhMDZOQnFMbGZWZUk5ZTQzYUd0VVByOXdZVy01ZE85UTJ2dVBIZW1EX0ZzZjVaRjRyc09PTkpGQlJQc0JGQmh3b1J0NkllWFItWHhaNTVIRUxrbEJVaWQyVkpfcm0zcks0X1ZZdw?oc=5
- **Reuters** · Etihad Airways says passenger numbers have rebounded from Iran war impact - Reuters
  - 2026-09-14 10:15 (ET) · https://news.google.com/rss/articles/CBMizwFBVV95cUxNYzdYYUtHSkVTSDY0dUZQVUZzdkY3WDVCZmgteEFHcXhrNGxmVmY5X1k4dGR3Z3o4ek9CdTNycWw3Z01jcHlRUFhJYllYLUd0V3JpRF9JVzY5eDh4WEFOVVBOSDd6RXhGa3lrSFFKVlBjV2cwMDhCdG5jcE1zN180Q0J1Y3lyVXNsWE9CaHBZWHlJZGtxdXNRWFlTWmVSR3RNV2dtR2RYV1JoU3VQcllHaUhIUEhMS2UwNzY4QzQxc2dwZjRQRFhtMkExRHI1Ukk?oc=5
- **Reuters** · Yemen's displaced long for loved ones, stability as Houthis advance - Reuters
  - 2026-09-14 09:00 (ET) · https://news.google.com/rss/articles/CBMisgFBVV95cUxONDRXdHd5bkV2YlhUcGtEVzN3UE1oRnBXa0RKYkNUeDZtTFBWZThSaFRydWYwUUI0S0M1QThnbG9yZDF1OERhN2pFNVViSXRMTE9fa2VnQTNLeDhNS1BkMHJoZHgtTnVHOHlTcVVSRVZYR1NsWmpGbUlsekUzVk9zZGRvTGI2al9xNkRPUGtfZFhXWS1DeHJ5a3RjbEFxZ0doOGZjV0ZoNnQzOTR6SGZGalFB?oc=5
- **CNBC** · AI stocks tumble on safety warnings. How to proceed — including 2 names on our shopping list
  - 2026-09-14 08:59 (ET) · https://www.cnbc.com/2026/09/14/ai-stocks-tumble-on-safety-warnings-how-to-proceed-including-2-names-on-our-shopping-list.html
- **Reuters** · Iran protests as US prevents its nuclear chief attending IAEA meeting - Reuters
  - 2026-09-14 07:49 (ET) · https://news.google.com/rss/articles/CBMivAFBVV95cUxOQmFYd0hqU3pUXzRwRklUdC1WMkl4N2xFZHZkdnJndndRRTlITmctYlhjOWFQc013NWdoRUxuMFRzRWcwZWF2Q203aF84cE8zVF9ZZ0h6YnVNUk9wRjdnMFlFTW9YSWdVOWppMUJFOHNDTllGVTZlMHd6eFpERTlVbzB4c2t1amtmMldEYWZGZXBZWHZ5RThHS2dMWkJEUnBibm5WTFRCaGVQNGQtRUpBWDZMZ3F1dm9td25qXw?oc=5
- **Reuters** · Eleven injured in ammonia gas leak at Jordan's Aqaba industrial complex - Reuters
  - 2026-09-14 07:40 (ET) · https://news.google.com/rss/articles/CBMiugFBVV95cUxOTDNWcHN6ajB1alZneHBrZm52NEh5RFUyNnV4TXZ1RlNPSi1PWThZWkxubXI3RXNlakVpUldfcUd5SXZselRLNlVHaHdkdWxBMHIwa29LOWxlUHpJY0NheVB5U3ZPcnktLVBXM2tzUWkzazdsdG5NREhQUGozN1hBSFFreDVnV3N4b0llRG9PelBRMGFKUHJiOEswbHNWNGdsbE5YLUtzMV9SeXZXdHhYRHNXRzI5N2J1Rnc?oc=5

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · This Index Fund Could Turn $25,000 Into $20,635,655
  - Yahoo · 2026-09-14 21:35 (ET) · https://finnhub.io/api/news?id=47f65a01118bf1e6e8918754edc773dae42c145811159f763851c43c72ae4419
- **NVDA** · SpaceX Spent $15.8 Billion on AI in a Quarter. Here's What Happens to the Stock if Orbital Data Centers Don't Work.
  - Yahoo · 2026-09-14 20:32 (ET) · https://finnhub.io/api/news?id=7d4859c3275cbcbc9d077314c148ac7f724dca08fb6bd4cc3b58fda860a95d72
- **NVDA** · IREN Stock Slips, But A Top Wall Street Bank Is Bullish With Double-Upgrade And 50% Upside
  - Yahoo · 2026-09-14 19:21 (ET) · https://finnhub.io/api/news?id=4906a0fd2834fbd4bf331752df71fe54baa963eedb66d23568ce7364c30ecd91
- **AVGO** · Broadcom Drops Over 4% as $21.7 Billion AI Forecast Meets Slowdown Fears
  - Yahoo · 2026-09-14 17:00 (ET) · https://finnhub.io/api/news?id=d142438bc7bfb55c2895ae8b57e5eb7e10d0929e372682f8f83b0fa663a85a26
- **AVGO** · Broadcom buys its Irvine office building
  - Yahoo · 2026-09-14 15:49 (ET) · https://finnhub.io/api/news?id=e8d17eafa3c4f7b71e934089bbfb7f2993c2843bdb509dc6517dd41f0a0a557e
- **AVGO** · AI Warning Sends Nvidia, AMD, Micron and Intel Shares Tumbling
  - Yahoo · 2026-09-14 15:09 (ET) · https://finnhub.io/api/news?id=23082b3c996d80263fb2bc3abbf79f918117ebbd852c86fb0edda9edb8ab8b5b

### 금융

- **JPM** · Top Bank Warns 12 Million Small Businesses Could Change Hands Over the Next Decade — 70% of Owners Are Still in Early Succession Planning
  - Yahoo · 2026-09-14 20:30 (ET) · https://finnhub.io/api/news?id=81af2f8c3ff16d4adfc14cec2ade766b417b63eba32d98c3c08e8e0ac94ed97f
- **JPM** · J.P. Morgan nears $1 trillion, but your gains hinge on 1 office
  - Yahoo · 2026-09-14 20:03 (ET) · https://finnhub.io/api/news?id=f461ecb0f597b8e19e1ec60f0352ac1cd08fa8b0e48e423c3b0289dac949c2f8
- **JPM** · JPMorgan Chase & Co. (JPM) Declines More Than Market: Some Information for Investors
  - Yahoo · 2026-09-14 17:45 (ET) · https://finnhub.io/api/news?id=fa7a2eefe11e26eaf3a80784e1cec0967b5ba3a20754f2f7fbb5a9a3ad142f5b

### 에너지

- **XOM** · Global Fuel Squeeze Triggers U.S. Refiners Stocks Rally
  - Yahoo · 2026-09-14 18:00 (ET) · https://finnhub.io/api/news?id=0352c9aa1fc46a8d477aaa2a4f527b31b62b5de0a1011a2457017d327999adce
- **XOM** · Wood Lands $200 Million Contract for ExxonMobil’s PNG LNG Project
  - Yahoo · 2026-09-14 11:42 (ET) · https://finnhub.io/api/news?id=c9339e393aa31859ad177973b0e1e8d3a4e7212b5213bcca7aad21f92bc30f5b
- **XOM** · Sector Update: Energy Stocks Advance Premarket Monday
  - Yahoo · 2026-09-14 09:29 (ET) · https://finnhub.io/api/news?id=f7bcfadc307d4c4d2d41aa5f6dbb1ca8c36b59b5e7702f3bc61126374e75703c

### 헬스케어

- **UNH** · UnitedHealth Partners with TPG to Strengthen Underperforming Florida Clinics
  - Yahoo · 2026-09-14 21:23 (ET) · https://finnhub.io/api/news?id=f3442a67cabf8e087e1ff9b63f22d01a9703a0509106d077f9eea32eb313fa05
- **UNH** · CVS Stock Returned $24B In Cash: Why Did It Still Lag The Market?
  - Yahoo · 2026-09-14 17:10 (ET) · https://finnhub.io/api/news?id=1319d644a68d1a16e7a0fdb153103e0f98cb9c4ea9eee6a94f946c434dcaf49d
- **UNH** · Top Analyst Reports for Walmart, UnitedHealth & Wells Fargo
  - Yahoo · 2026-09-14 16:38 (ET) · https://finnhub.io/api/news?id=fa751033b5a80bcb6de19e1a2c7c0b33d7ca8bd048aa6c032c7cac00a9b6544c

### 소비재·유통

- **AMZN** · Amazon Partners with Wiwynn to Expand U.S. AI Infrastructure Capacity
  - Yahoo · 2026-09-14 21:22 (ET) · https://finnhub.io/api/news?id=9d6f938474dcced437940a650150120826e2569d92b9e30d51edea96f8f199f9
- **AMZN** · AMAZON TEAMSTERS RALLY FOR DELIVERY PROTECTION ACT
  - Yahoo · 2026-09-14 19:05 (ET) · https://finnhub.io/api/news?id=13aaf5b7386824be631c2edbd2b0f9539db0be28d97d1d08a0493e821500da32
- **AMZN** · FREEHILL Expands Amazon Winter Apparel Collection With Three Heated Products
  - Yahoo · 2026-09-14 17:55 (ET) · https://finnhub.io/api/news?id=2c504ee0396e80caefaccd9e6e0d0192708d8ca0ba1deca172646b6665c7e45e

