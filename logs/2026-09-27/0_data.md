# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-09-27 · 생성시각(KST): 2026-09-27 06:30
# 출처: Yahoo Finance chart API · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,803.75 | +0.47% | 7,767 | 2026-09-25 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 30,889.25 | +0.40% | 30,766.75 | 2026-09-25 17:00 |
| 다우 선물 (YM) | `YM=F` | 52,163 | +0.86% | 51,717 | 2026-09-25 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,859.3 | +0.09% | 2,856.8 | 2026-09-25 16:59 |

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 14.87 | -5.11% | 15.67 | 2026-09-25 16:15 |
| VIX9D (9일) | `^VIX9D` | 12.76 | -9.57% | 14.11 | 2026-09-25 16:15 |
| VIX3M (3개월) | `^VIX3M` | 17.93 | -2.71% | 18.43 | 2026-09-25 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 87.84 | -3.01% | 90.57 | 2026-09-25 16:15 |
| SKEW (테일리스크) | `^SKEW` | 144.91 | -0.77% | 146.04 | 2026-09-25 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 미 10년 국채선물 | `ZN=F` | 104.97 | +0.10% | 104.86 | 2026-09-25 16:59 |
| 금 | `GC=F` | 4,321.2 | +0.54% | 4,298 | 2026-09-25 16:59 |
| WTI | `CL=F` | 92.41 | -2.33% | 94.61 | 2026-09-25 16:59 |
| 달러지수 (DXY) | `DX-Y.NYB` | 101.04 | -0.25% | 101.29 | 2026-09-25 16:59 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.206 | 콘탱고 |
| VIX / VIX9D | 1.165 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.344 | 1.391 | 614,553 | 825,768 | 29,206 |
| 나스닥100 ETF 옵션 (QQQ) | 0.984 | 1.405 | 4,386,939 | 4,317,399 | 11,710 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **Reuters** · China pushes back against US on Iran and Cuba in UN speech - Reuters
  - 2026-09-26 15:14 (ET) · https://news.google.com/rss/articles/CBMinAFBVV95cUxQNmFyYk05dGVubEpsSTJ2dGwxcWtFNEx0ZDNybVVaMndCOUpzOTV5SHNjdmw0eHFCQzlsSHZONU91bHVjeU9lQ1RjSTJSM0pZRDhzUUNENHl1b1daMUxkajZ2QklCNTY5bXUxV0dEczRhZTJmU0VKWHhUeWN0OG5OYWRXdWRYUHJOaFJWbjlySGpEdUQtaDdDWThfTWk?oc=5
- **Reuters** · Trump rejects Iranian proposal to open Hormuz and end fighting - Reuters
  - 2026-09-26 11:15 (ET) · https://news.google.com/rss/articles/CBMivAFBVV95cUxNZTlYWmNvWG9uODA3NXdWTTQ0d1EtNnFKczBKYThkcFExSmZGWjlqb2xmc0ZsUDNsYWxUWjhLNm1ocTRCcmJDMGdhUmZ1NC1WdjVJdWFxNDRzLTA0Mk11dUN6WHkyUUVpcFMxV1A1d2RFUXljR0xlY293UldHb2ZoUDAzT294ZmVUWVdCZUEzUTlGSkp4cEhTLTVqTllkU3lDNDREeXFqVlQzSUU1VGpnXzZYZ1ZSMXZ3dmU0Tg?oc=5
- **CNBC** · Apple faces $5.7 billion patent infringement verdict over iPhone and Apple Watch haptics
  - 2026-09-26 10:55 (ET) · https://www.cnbc.com/2026/09/26/apple-taction-technology-patent-infringement-verdict.html
- **CNBC** · The blue-collar AI job market is booming. Will data center backlash make it go bust?
  - 2026-09-26 09:43 (ET) · https://www.cnbc.com/2026/09/26/blue-collar-jobs-ai-data-center-backlash.html
- **CNBC** · 27-year-old started a run club to meet new people—now his NYC side hustle brings in $640K a year
  - 2026-09-26 09:05 (ET) · https://www.cnbc.com/2026/09/26/nyc-run-club-side-hustle.html
- **Reuters** · Six big takeaways from a turbulent week of UN diplomacy - Reuters
  - 2026-09-26 01:09 (ET) · https://news.google.com/rss/articles/CBMinAFBVV95cUxOOFZoZDdKM2NZd3RrRFBLRGQ3VWoteUxkRFFtemw1RGVqbXdBWEdDR3FNazZ6MERQMWdCMThtVnJ5dnpmYjU0WWgzZW03OU5vWVZKLXRmS0s2c3BKV2lKbTlGLTJDRThYRW96eGJNVEhDZ3VEVVhPNGxpSkszTFc5WXNNQWh4dVRYWEJIZkhPTGN3ZDJXeW5FV2dYT3M?oc=5
- **Reuters** · Britain warns Iran it will not tolerate hostile activity on UK soil - Reuters
  - 2026-09-25 23:45 (ET) · https://news.google.com/rss/articles/CBMixgFBVV95cUxPZmt3OWdYdUxlUXlJa0h6T0lndm5xUDBvRjg0M0plMzcxOThXT2lIaUNSY1NnczJYOEpwa3dYcGZWT2NGc0R3VGNHeVRJb0N5dS16V2FHamQyWkFuRkpSdXNIQk5CUk13dGU3NW1UNF9IdzFHSlFuOHpJRS1KZk1Hal9XNDFHbTlybmwxaUZsZmlINjRGZ29PekZNNFBpMHBabkxMelNBb1NPWk04Y3FYcU83QVR1T0xKTTJXeURIT1pwdDdJYUE?oc=5
- **Reuters** · Saudi coalition says it intercepts Houthi missiles, drones - Reuters
  - 2026-09-25 21:25 (ET) · https://news.google.com/rss/articles/CBMiwAFBVV95cUxNdndqUFdtd2J6b19yZlhhZjlOZXVBYkNvYjVtTjQzYUxlRTVldkZHbjdQdDQtMGI0ZFEwSEY2MTc1OHNTcWJHUXJCbFJjSlpFb0o3blUxMTRBQWZncEVZaEZiMEdJbU9ZOGZIbUFxQzB3SGduZFZ2ZGFDYWNoZEtqVTd0QXRVZUc2UHRXMnpjUi1XM0d0a3dXcDg3ZFRqd2xsWHdzVXlhOXhMMDlQeHlpcEFXWjNncEZWbnBxZ0NaLXI?oc=5
- **CNBC** · Here's exactly what Paramount promised Hollywood to land WBD — and why some are still skeptical
  - 2026-09-25 18:31 (ET) · https://www.cnbc.com/2026/09/25/paramount-hollywood-promises.html
- **Reuters** · Iran's Araqchi says now up to US to accept 7-day plan - Reuters
  - 2026-09-25 16:36 (ET) · https://news.google.com/rss/articles/CBMiogFBVV95cUxQUmpYaGtLNnJmeGdiOGNJZVNJQVJ0eVNmRzdLNHdQWF9hVkFfZ3FkSmtwamwxUmpkdWJJNmxldmtYckJzUGpFblZsYzVLV19PeFd2ZkFvSmgxUDJZQUF4MUdSQXU4SjFlWmM2WU42clJWNUlVNy1DVkRmY2k3MEJoQkQteWVKdVlBaFNiLWVla3FnTXdHSUdBZGN4eXhNUDJfN2c?oc=5
- **Reuters** · EU warns of energy price crisis, asks countries to consider curbing demand, letter shows - Reuters
  - 2026-09-25 16:16 (ET) · https://news.google.com/rss/articles/CBMizAFBVV95cUxNemtIR2FDbDVHcjRWdzNYQnpYZGdsSW5yZTIzRlFtTnhXMVoxUGc1RTNWNlNVTkdiZk05SHpsMmh1TXlvQmdOLWR3MHlGRHV0Qkg4SGFhd1p1SUhfQ3YzVWVNZmc5TTVXbEdzQ19yQXU2RnE0MFprTjlYZGluYWVtb0JuQ3NzWkdNTnhqQ3hKYk9oelprY1FxbU1LZmgzcFByWVh6M01JR3BVMm56REhOR3JST2hQQXBXRUlkSFhqT3dOZGxsSi1fTTlkcWw?oc=5
- **CNBC** · Microsoft gives Copilot a much-needed overhaul, and the stock deservedly soars
  - 2026-09-25 14:38 (ET) · https://www.cnbc.com/2026/09/25/microsoft-gives-copilot-a-much-needed-overhaul-and-the-stock-deservedly-soars.html
- **Bloomberg** · Trump says he will meet Xi again in November in China
  - 2026-09-25 14:35 (ET) · https://www.bloomberg.com/news/articles/2026-09-25/trump-hosts-xi-for-tea-with-final-day-of-summit-underway
- **Bloomberg** · Trump-Xi summit: China presses for changes on Taiwan and trade
  - 2026-09-25 14:25 (ET) · https://www.bloomberg.com/news/articles/2026-09-25/xi-seizes-trump-detente-to-seek-lasting-gains-on-trade-taiwan
- **CNBC** · The iced coffee debate reflects 'everything wrong with hiring right now,' says career expert
  - 2026-09-25 13:50 (ET) · https://www.cnbc.com/2026/09/25/iced-coffee-job-interview.html

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Upstart Lends Money It Doesn't Hold. What Does That Do to the Stock in a Downturn?
  - Yahoo · 2026-09-26 15:25 (ET) · https://finnhub.io/api/news?id=b993b0aa05fb83eae2bd474ab6aa245c774aad08c42f113121905f1e53de3bee
- **NVDA** · Here's How Oracle's "Force Majeure" Changes the AI Data Center Thesis
  - Yahoo · 2026-09-26 15:20 (ET) · https://finnhub.io/api/news?id=42eea216ec5eacea4978936d24c3a01d300b1a2a77fce4b41160ffb938597e95
- **NVDA** · VIG's Strange Rule: The Highest-Yielding Dividend Growers Aren't Allowed In
  - Yahoo · 2026-09-26 15:05 (ET) · https://finnhub.io/api/news?id=44d1dfdde61a094c0f898596d137a5b780eb5b7df140906ac76f8e8e6ded1cb5
- **AVGO** · Broadcom Has More Than One Way to Win. Here’s Where I See the Stock Going
  - Yahoo · 2026-09-26 12:45 (ET) · https://finnhub.io/api/news?id=7db80f6cdf7166a419b8121e59e9e6312912d70e86da37fa0e27c4d425d5c545
- **AVGO** · 3 Elite Dividend Stocks Hiding in the Nasdaq-100
  - Yahoo · 2026-09-26 11:58 (ET) · https://finnhub.io/api/news?id=5423b41d525b5d427c974c3fa6e4ee096922ded73202f5df7e64c263fc64d832
- **AVGO** · Adobe Stock And 2 Other AI Stocks To Own
  - Yahoo · 2026-09-26 07:12 (ET) · https://finnhub.io/api/news?id=c3221417410781475c123d7706ce0b3e1f675ba6fc0bba1f73654511dddc6536

### 금융

- **JPM** · JPMorgan Predicts IREN Will Generate $24 Billion in Annual Revenue by 2030
  - Yahoo · 2026-09-26 11:59 (ET) · https://finnhub.io/api/news?id=0043abad6fbea128d5e47f87a507ebf2f921ed445b80c7c5aeb54857087e9de4
- **JPM** · Here's how high-income Americans keep spending in a shaky economy
  - Yahoo · 2026-09-26 05:30 (ET) · https://finnhub.io/api/news?id=55d021a74695487fd4bd908a472da31f3349ada197ef3d445369566bac173cd6
- **JPM** · Morgan Stanley public finance co-head Zach Solomon leaves for TD - Bloomberg
  - Yahoo · 2026-09-25 21:13 (ET) · https://finnhub.io/api/news?id=feebf68006a3856b52ed2bc126662a9d671c5696fd17eae8b628d42719410660

### 에너지

- **XOM** · For Retirees Who Want Oil Income: Chevron vs. ExxonMobil
  - Yahoo · 2026-09-26 10:30 (ET) · https://finnhub.io/api/news?id=e7a27fd793a99cfdc8c0ff918c6fd02dafcddfd659df16644bc1a821f9034ff0
- **XOM** · Why US Diesel Prices Could Stay High Even If Oil Tumbles: A Global Refinery Shortage
  - Benzinga · 2026-09-26 06:19 (ET) · https://finnhub.io/api/news?id=d913ccbfbe201d07e83ac640984196aae6164d61fdaadeed783121e357d6cbcf
- **XOM** · With Gas at $4.48 a Gallon, Here's How Much ExxonMobil Stock You Need to Buy to Fill Up Your Tank
  - Yahoo · 2026-09-26 02:50 (ET) · https://finnhub.io/api/news?id=ec0ec0f2e676031a1b5a7f85674c8e0bb49f1fabc835885226ec0c086b99e29b

### 헬스케어

- **UNH** · Goldman Sachs Outweighs Microsoft in This Popular Dow ETF, and Share Price Is the Only Reason
  - Yahoo · 2026-09-25 18:00 (ET) · https://finnhub.io/api/news?id=9229f9cff1cf1f9cafcc30ab8fdcaddcf7e0ee292deb29f81fc02e715c985d7c
- **UNH** · Humana Jumps 7% on Barclays Upgrade and $515 Target; UnitedHealth Nudges Higher
  - Yahoo · 2026-09-25 13:59 (ET) · https://finnhub.io/api/news?id=0d41d472a3c61877a78173ca1812c78e13c4a7ab5ff1180522c81f12f81fe3e9
- **UNH** · Encompass Health Adds New Capacity With First Small-Format Hospital
  - Yahoo · 2026-09-25 09:54 (ET) · https://finnhub.io/api/news?id=53e6484869ce7cd1fd209f1d4610527e15e4abc4b99fbbe0f9708eda52d45897

### 소비재·유통

- **AMZN** · The 3 "Magnificent Seven" Stocks That I'm Buying Now
  - Yahoo · 2026-09-26 11:50 (ET) · https://finnhub.io/api/news?id=2b5166a182adcc0ae68ee08893cc938f55d81d7ccd3d29278e36df06bfc30bd9
- **AMZN** · Intuit vs. Oracle: Which Technology Stock Is a Better Buy in 2026?
  - Yahoo · 2026-09-26 11:32 (ET) · https://finnhub.io/api/news?id=5cd135f9d84fb4ec9a0e1e48e0bb5cddb69504c96e4abfaebcfa96535f35ffdd
- **AMZN** · Amazon.com (AMZN) Confirmed Iranian Drone Strikes Hit AWS Data Centers
  - Yahoo · 2026-09-26 10:10 (ET) · https://finnhub.io/api/news?id=4a1e72e5916d0ec5a28c7e50f0879a0bbd33f157706a1858fbc0b0caefbb120d

