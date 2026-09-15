# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-09-15 · 생성시각(KST): 2026-09-15 09:21
# 출처: Yahoo Finance chart API · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,694 | +0.45% | 7,659.5 | 2026-09-14 20:11 |
| 나스닥100 선물 (NQ) | `NQ=F` | 29,444.5 | +0.20% | 29,387 | 2026-09-14 20:11 |
| 다우 선물 (YM) | `YM=F` | 52,865 | +0.53% | 52,585 | 2026-09-14 20:11 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,915.6 | +0.38% | 2,904.5 | 2026-09-14 20:11 |

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
| 미 10년 국채선물 | `ZN=F` | 106.02 | -0.32% | 106.36 | 2026-09-14 20:11 |
| 금 | `GC=F` | 4,325 | -1.90% | 4,408.9 | 2026-09-14 20:11 |
| WTI | `CL=F` | 102.37 | +2.32% | 100.05 | 2026-09-14 20:11 |
| 달러지수 (DXY) | `DX-Y.NYB` | 99.51 | +0.39% | 99.12 | 2026-09-14 20:11 |

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
- **Reuters** · Syria fuel price hikes trigger widest protests since Assad fall - Reuters
  - 2026-09-14 07:11 (ET) · https://news.google.com/rss/articles/CBMiuAFBVV95cUxNdVRQSVoxOWU2azRFeC0zZmpXWDktNzRrTjhvQzgyRWtFVmtOb3doanREbmdpRldIWWlDSE1CeTVNWnpMZlVkQlZycmNSaHZXLWliYjVHekxXa2RrSVdwYU5ucExKbTU2aTQ4c01TV3ctU2JWWFJUR2hPb21INWZiZHYtb3JYa2lNS04yMUdENk51YVY1RHl5VTVhalNKWmFfUS0tUUlZYkhULVZ4OTZHT2g4bVcxb3ND?oc=5
- **CNBC** · College students feel more pressure to be perfect. Experts explain why
  - 2026-09-14 07:00 (ET) · https://www.cnbc.com/2026/09/14/college-students-more-perfectionistic.html

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Here's Why SpaceX Stock Could Finish 2026 Above $200
  - Yahoo · 2026-09-14 17:56 (ET) · https://finnhub.io/api/news?id=de7e490ea97f3b29f5e10e2ec75cbfb7615d13fc8dade9118f5809e3c988219c
- **NVDA** · If You'd Invested $1,000 in Tesla Stock 1 Year Ago, Here's How Much You'd Have Today
  - Yahoo · 2026-09-14 17:53 (ET) · https://finnhub.io/api/news?id=4359748e4127532b19df217ee4ec848843bd603fec7d0efe2152d6306af1476f
- **NVDA** · Why S&P Global Stock Beat the Market on Monday
  - Yahoo · 2026-09-14 17:37 (ET) · https://finnhub.io/api/news?id=65b3e197abde58dfea825f09160397097bf7af63507d500aaec03de3b27be19a
- **AVGO** · Broadcom Drops Over 4% as $21.7 Billion AI Forecast Meets Slowdown Fears
  - Yahoo · 2026-09-14 17:00 (ET) · https://finnhub.io/api/news?id=d142438bc7bfb55c2895ae8b57e5eb7e10d0929e372682f8f83b0fa663a85a26
- **AVGO** · Broadcom buys its Irvine office building
  - Yahoo · 2026-09-14 15:49 (ET) · https://finnhub.io/api/news?id=e8d17eafa3c4f7b71e934089bbfb7f2993c2843bdb509dc6517dd41f0a0a557e
- **AVGO** · AI Warning Sends Nvidia, AMD, Micron and Intel Shares Tumbling
  - Yahoo · 2026-09-14 15:09 (ET) · https://finnhub.io/api/news?id=23082b3c996d80263fb2bc3abbf79f918117ebbd852c86fb0edda9edb8ab8b5b

### 금융

- **JPM** · Stock Market Today, Sept. 14: Bank of America Slides on Investment Banking Fee Surprise
  - Yahoo · 2026-09-14 17:17 (ET) · https://finnhub.io/api/news?id=b5de7752b17aedaae2fb64e3e1bf7c2e3cf02784f0139e239a7358e9ef3966af
- **JPM** · Top dow jones movers in Monday's session
  - ChartMill · 2026-09-14 15:10 (ET) · https://finnhub.io/api/news?id=a582f12a39d548a360c2fd563324d739fe0187dbabf02574fc36af5ad1f665b3
- **JPM** · The high-end card changes that are challenging banks
  - Yahoo · 2026-09-14 13:29 (ET) · https://finnhub.io/api/news?id=e6c46b9ece7ecee266bbf8cf99821db1bd0fcf1e5ba2d103e20a89cce5dc6623

### 에너지

- **XOM** · Wood Lands $200 Million Contract for ExxonMobil’s PNG LNG Project
  - Yahoo · 2026-09-14 11:42 (ET) · https://finnhub.io/api/news?id=c9339e393aa31859ad177973b0e1e8d3a4e7212b5213bcca7aad21f92bc30f5b
- **XOM** · Sector Update: Energy Stocks Advance Premarket Monday
  - Yahoo · 2026-09-14 09:29 (ET) · https://finnhub.io/api/news?id=f7bcfadc307d4c4d2d41aa5f6dbb1ca8c36b59b5e7702f3bc61126374e75703c
- **XOM** · Chevron Sees Higher Oil Prices Ahead: Is It Set for More Upside?
  - Yahoo · 2026-09-14 08:48 (ET) · https://finnhub.io/api/news?id=a6fd44eb44a9d520f0343da133e9eeac6b490aa6329ec834ebd073e613ee8d51

### 헬스케어

- **UNH** · CVS Stock Returned $24B In Cash: Why Did It Still Lag The Market?
  - Yahoo · 2026-09-14 17:10 (ET) · https://finnhub.io/api/news?id=1319d644a68d1a16e7a0fdb153103e0f98cb9c4ea9eee6a94f946c434dcaf49d
- **UNH** · Top Analyst Reports for Walmart, UnitedHealth & Wells Fargo
  - Yahoo · 2026-09-14 16:38 (ET) · https://finnhub.io/api/news?id=fa751033b5a80bcb6de19e1a2c7c0b33d7ca8bd048aa6c032c7cac00a9b6544c
- **UNH** · UnitedHealth CFO delivers blunt verdict on the company's big reset
  - Yahoo · 2026-09-14 16:23 (ET) · https://finnhub.io/api/news?id=55fd3561c2baae81ad8a580fa2a3f4ff0332339e6983adb20c825e394552c915

### 소비재·유통

- **AMZN** · FREEHILL Expands Amazon Winter Apparel Collection With Three Heated Products
  - Yahoo · 2026-09-14 17:55 (ET) · https://finnhub.io/api/news?id=2c504ee0396e80caefaccd9e6e0d0192708d8ca0ba1deca172646b6665c7e45e
- **AMZN** · Big Tech Issued About $220 Billion of Bonds. Alphabet and Meta Show How AI Is Warping the Credit Market
  - Yahoo · 2026-09-14 17:29 (ET) · https://finnhub.io/api/news?id=90ec7de50bce06e131bad79726bd4df850afa47acc3da8ba426d9ece1d110b45
- **AMZN** · Amazon Faces Tough Questions After Major Crash
  - Yahoo · 2026-09-14 17:24 (ET) · https://finnhub.io/api/news?id=218d9438df4791c6794564ea39759eea65f41bbc9d58a147a1a3d8f5b82ed407

