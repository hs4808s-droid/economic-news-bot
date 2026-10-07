# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-08 · 생성시각(KST): 2026-10-08 06:30
# 출처: Yahoo Finance chart API · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,850.25 | -0.30% | 7,874 | 2026-10-07 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 31,403.75 | -0.25% | 31,483.25 | 2026-10-07 16:59 |
| 다우 선물 (YM) | `YM=F` | 51,421 | -0.76% | 51,816 | 2026-10-07 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,812.3 | -1.26% | 2,848.2 | 2026-10-07 16:59 |

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 15.08 | +0.47% | 15.01 | 2026-10-07 16:15 |
| VIX9D (9일) | `^VIX9D` | 11.78 | -2.08% | 12.03 | 2026-10-07 16:15 |
| VIX3M (3개월) | `^VIX3M` | 17.72 | +0.45% | 17.64 | 2026-10-07 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 83.18 | +0.71% | 82.59 | 2026-10-07 16:15 |
| SKEW (테일리스크) | `^SKEW` | 141.84 | +0.45% | 141.21 | 2026-10-07 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 미 10년 국채선물 | `ZN=F` | 104.42 | -0.07% | 104.5 | 2026-10-07 16:59 |
| 금 | `GC=F` | 4,136.7 | -1.20% | 4,187.1 | 2026-10-07 16:59 |
| WTI | `CL=F` | 88.94 | -0.56% | 89.44 | 2026-10-07 16:59 |
| 달러지수 (DXY) | `DX-Y.NYB` | 102.28 | +0.44% | 101.83 | 2026-10-07 17:20 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.175 | 콘탱고 |
| VIX / VIX9D | 1.280 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.101 | 1.419 | 2,311,793 | 2,544,351 | 30,138 |
| 나스닥100 ETF 옵션 (QQQ) | 1.212 | 1.469 | 3,135,474 | 3,801,413 | 11,432 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **CNBC** · SpaceX’s plans to buy more Nvidia GPUs is keeping Jim Cramer bullish on the chip stock
  - 2026-10-07 16:24 (ET) · https://www.cnbc.com/investingclub/2026/10/07/spacexs-plans-to-buy-more-nvidia-gpus-is-keeping-jim-cramer-bullish-on-the-chip-stock-.html
- **Reuters** · Explainer: The status of Iran's uranium enrichment programme - Reuters
  - 2026-10-07 16:02 (ET) · https://news.google.com/rss/articles/CBMimwFBVV95cUxOSnlJOEpCTFRFNHYydjJsZE5xaXBTQUZtbGxveEo4MlJlYlR2V083Z29pLXV4TFdxWS1zTjVNTS1fWHh4Zkt4TTNqcXIzVDhiOGluLUZoaDNtS216c3R0WVQ3VmJkY0xFVUgzWVpKVGZjbTFlRmpKdnB4MzBIT055cWpVMGJrV29Db2llb2tlTVhMU2RMSFJrS19WUQ?oc=5
- **Reuters** · Most Republicans in tight midterm races distance themselves from Trump, Reuters review finds - Reuters
  - 2026-10-07 15:47 (ET) · https://news.google.com/rss/articles/CBMivwFBVV95cUxPUWpHUU05ZlNYUVZhUDRvOEtsU2tKOWJWLWM4OUZFWm1PRkJDZDJCZzBIenFyenhDT3o2T1c0QzhJRG4xS2xQTUMxX0VyZVZoSm92ZG8wdGlKdjRmeTI3SldqeHgxM3FabHRZMHI1SXA2dUsySGtza0dWNllWT21ZeVdPWEwwaHdoeUowSEJ2dWdqakxFTDNiQ1dUNkZhT0xyRThrZTM2Z0lmM1JKa2xManNhLUphOVlOOUJ0eVJzdw?oc=5
- **Reuters** · IEA to accelerate oil reserve release, says 100 million barrels still to come - Reuters
  - 2026-10-07 15:28 (ET) · https://news.google.com/rss/articles/CBMivwFBVV95cUxQSWQwZFJidm90SFN2SzVMQVk2ZTZrVDI0LVhoWDloYnNCU2NuTE1ZUlZFM3dyZTFPaUptLXFZNlA2TTQtZFRFdXRDREdIZUtyWHhQbDQ4TDZOU1JpdjhENmxZLVdpU21ZaC1GcEFGT3MyZE5YX0FoZXJPUTM2TDNrTXpoTjRzUTh5V2VQdFlYTmFVTmtBYWIzR0hleXJ3RnZRNy1YTVRNQkxtSDF2OTZ1OUhYMkxFaGdNaUVSWnhxWQ?oc=5
- **Reuters** · EXCLUSIVE: Lebanon's Hezbollah gets $200 million from Iran to help displaced, sources say - Reuters
  - 2026-10-07 15:07 (ET) · https://news.google.com/rss/articles/CBMivgFBVV95cUxNZDFQZzNVZkV5bHhCZ2FaemZmZDdyMTZtWndQR2tTakxOaW9SWTI2clhnZWpKcDZaVU9RS2p0TUJ0UGoxWWxUQm1JZ3pWYzZJN1pKSkROLTFzc2pqdE9TUEd6b1pQM2dlVE16VEZJbVlOOWFxUUhud3c5UXZ1N3NMMldSRkwxNS1hbnN2ZkxHX1hMaTAzSHMxODdFa2xhU1dTcVpmQ282d2xOUEZRbGpTejZmRFFCVzBsMTh6bnh3?oc=5
- **CNBC** · New data strengthens our faith in a TJX comeback. Plus, the Nvidia-Microsoft PC is here
  - 2026-10-07 15:07 (ET) · https://www.cnbc.com/investingclub/2026/10/07/new-data-strengthens-our-faith-in-a-tjx-comeback-plus-the-nvidia-microsoft-pc-is-here.html
- **CNBC** · Strange market anomaly is creating a buying opportunity in the Nasdaq 100
  - 2026-10-07 14:44 (ET) · https://www.cnbc.com/2026/10/07/strange-market-anomaly-is-creating-a-buying-opportunity-in-the-nasdaq-100.html
- **Reuters** · Syria weighs military aid for Saudi Arabia amid Yemen war, sources say - Reuters
  - 2026-10-07 14:21 (ET) · https://news.google.com/rss/articles/CBMiuwFBVV95cUxNLWZMNEFpTGtIVEhwLWJHUXdGdGliYUtUazZhMk1yd3RDLW9yZllOblA2U1BvLVZaN2pvejZpaWwwenF5MzhObG93NC1BYzJhVGdIelROY2VXSTF6RTJ3MDROSzVYMUVoUm9UMHdCcTZEbVBxODRVVEYxRGIxZWljUHdiSVJDcUxubndSdFM3RFdNYmZOWDdBZk1tdXgzVzRFTGZmWlZPeDZVOGtZUXNwaEFEVTZnMzMxclRZ?oc=5
- **Reuters** · EXCLUSIVE: Saudi Arabia launches air safety probe into flydubai incident, sources say - Reuters
  - 2026-10-07 14:12 (ET) · https://news.google.com/rss/articles/CBMixgFBVV95cUxOYjBULXpYUldRcnZ0TUJ2bXJSUFlkNkdQSHdoT3YtX1RUVWZNb2NYdlI0OF9seXUwMU5CbFRtTnkxeXRuRUNaV01yQlBHZE5HS2pGZDJPMlVxalpacXpxOUVjZDhpc3hYTURMUDBBV0tEMFdNX0I3RS1naEVsOHVjTTB2S0cwM1owQklJVVlrblFGeXpVelE4SmotNGFxYmZyMFpuNXhSaHNFOVl3MGFrckpvb3RDakFOMnh1SnlSaTZYZnRYWUE?oc=5
- **CNBC** · Another Micron triple? Where we agree with this wildly bullish call and where we don't
  - 2026-10-07 13:52 (ET) · https://www.cnbc.com/investingclub/2026/10/07/another-micron-triple-where-we-agree-with-this-wildly-bullish-call-and-where-we-dont.html
- **Reuters** · UK's Headlam to delist after it collapses into administration - Reuters
  - 2026-10-07 13:52 (ET) · https://news.google.com/rss/articles/CBMiswFBVV95cUxQbzZHTkllVHhnc3hKbFl4UEY2WnpBeWUyLWxWQWxyWkJrN3JRcC1lYm9hdGRGNFZEUV9SXzVMdUNFOVgzRUlpelk1S3JCMnl6WlhQQnRSeXRUTVRQNVRZcWJENFY4ejhCNU8zd3ZGcjdBdWlLWVEyRFhvdkU3dFEzNEFMaWt2V2FIMjBnaHV4U083U0tWb1BCUG1XaGlRMTYzc0hqTHBycXFXUkRlajQ3NXoxOA?oc=5
- **CNBC** · Jim Cramer's key to Wednesday's market — plus, relief for Intel after a concerning report
  - 2026-10-07 11:38 (ET) · https://www.cnbc.com/investingclub/2026/10/07/jim-cramers-key-to-wednesday-market-plus-relief-for-intel-after-a-concerning-report.html
- **Reuters** · Attacks on tankers in Hormuz hit highest of any week since start of Iran war, sources say - Reuters
  - 2026-10-07 11:24 (ET) · https://news.google.com/rss/articles/CBMiygFBVV95cUxPMzlOYkh2NkF3OTFOQ0g5RFdjT0VSZXU4Y0U1cDREQnltUF9XM2VBVlk1bER5cTNTS00yaWctcDdnTjI3TG1jeWVxV3JIT2ctb1JVLVg4Nm13aENfNmlQSVQ2dHZLS2dabVYyYXQydWFEQ25SQVY1UkFORHd6djNHUHFkVEpwa3d6WkRiMy15SFRwV3l4anZiSXQ2YmR2bmxWZFhYTFE1YVNBRnc1ZG0tbHJDT1RacGJ6VmRhV3RnQ3g5UmZvdE5xZ3RB?oc=5
- **Reuters** · Turkey sending technical, defensive support to Saudi Arabia to help fight Houthis, officials say - Reuters
  - 2026-10-07 10:43 (ET) · https://news.google.com/rss/articles/CBMiyAFBVV95cUxNWnlvSTNKVmJOWXpOaGtjeHBIMXR1cHFuWm1PeUkweEp5RWxkaHNTMTZmWjY2cEVhN2cwdUF1aTViazVpOExPS3dLSndRREhnX0RRVzNlQl9JRzdGUjRvV3k2MkdnRlNyMUdlTDVWRmpBdVFGUHlBRmJ3Q0lReVc1RVVqaGFjNmJraDI4UzRvMWNrQ1pkczk2ZnZlQldFbVVzV08wY2JUR2pEY1dnZ3BPOWNWeDhuVW1sOXctREZ6eWJTSmZ5WUVhdg?oc=5
- **CNBC** · Stocks made a record high. Two big bearish trades point to skepticism
  - 2026-10-07 09:59 (ET) · https://www.cnbc.com/2026/10/07/stocks-made-a-record-high-two-big-bearish-trades-point-to-skepticism.html

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · The tech industry wants you to run AI models at home, but it's not for everyone
  - Yahoo · 2026-10-07 15:53 (ET) · https://finnhub.io/api/news?id=37889a445f5abc29ffa14d87e1e613b277bcab8a600246ee90e97d26bc1a23e7
- **NVDA** · Sector Update: Tech Stocks Fall Late Afternoon
  - Yahoo · 2026-10-07 15:47 (ET) · https://finnhub.io/api/news?id=5085866793f4a8625658a75c6b9b31d9e0d71da74c4517031a761fc5e0100d29
- **NVDA** · Microsoft unveils new AI laptop powered by Nvidia chips
  - Yahoo · 2026-10-07 15:42 (ET) · https://finnhub.io/api/news?id=1aea98b58b603ef38a949d4fb93f689a8f1922ba8bf9ceb4cc132c8eb216f927
- **AVGO** · At $1,069, Is Micron Stock Going to Split?
  - Yahoo · 2026-10-07 15:35 (ET) · https://finnhub.io/api/news?id=d67ec5289d7572e9bedc1cc1df5b46620412017f6e1b02acf56f18c9c4211c4a
- **AVGO** · Is There A Risk Hiding In Marvell Stock's Rapid Growth?
  - Yahoo · 2026-10-07 15:34 (ET) · https://finnhub.io/api/news?id=dd713597b6ddec82b8cbd6973f1518981f70c4ddf5ecc19e1959b5c9cac955dc
- **AVGO** · Nvidia (NVDA): Is There Still Room to Run?
  - Yahoo · 2026-10-07 14:43 (ET) · https://finnhub.io/api/news?id=20fc9c5c0b57312e9f91b399b8042500dd66788dca5235bcfdb11a23dddb9bbd

### 금융

- **JPM** · Top dow jones movers in Wednesday's session
  - ChartMill · 2026-10-07 15:10 (ET) · https://finnhub.io/api/news?id=79cbbb6a9394d74f43ed5875e5d2b638c156a24824ea95997addfce18685ce40
- **JPM** · JPMorgan just put a different spin on the stock market selloff
  - Yahoo · 2026-10-07 14:07 (ET) · https://finnhub.io/api/news?id=4804d5826e8b38e544103fc602e4dfaf97ddee1db14a749b875d346c39048af6
- **JPM** · Which dow jones stocks are moving on Wednesday?
  - ChartMill · 2026-10-07 12:40 (ET) · https://finnhub.io/api/news?id=7035659f7d8a2a0d5730ed16bd3bcb7683148f81f5fe35ce66fb9682da838018

### 에너지

- **XOM** · America Got Addicted to Cheap Money — Now the Economy Is Cracking as Rates Exceed 5%
  - Yahoo · 2026-10-07 11:22 (ET) · https://finnhub.io/api/news?id=793824044529a96ffd299714168933d210c6db264bbeb65f31108659d955fd88
- **XOM** · ExxonMobil Surges 44% in a Year: Should Investors Bet on the Momentum?
  - Yahoo · 2026-10-07 10:48 (ET) · https://finnhub.io/api/news?id=cc69b1cf40adbcf4c974da5eed8a10c3ea76873031833055f621ba74439fbb41
- **XOM** · Treasury Bills Beat Exxon’s Dividend Yield. Does That Make Them the Better Buy?
  - Yahoo · 2026-10-07 10:30 (ET) · https://finnhub.io/api/news?id=d6bc69eece5f46afbbcee10cc4da59341d793f07e20e727c3e40a1c780f365cb

### 헬스케어

- **UNH** · Top dow jones movers in Wednesday's session
  - ChartMill · 2026-10-07 15:10 (ET) · https://finnhub.io/api/news?id=79cbbb6a9394d74f43ed5875e5d2b638c156a24824ea95997addfce18685ce40
- **UNH** · Suze Orman Warned 390,000 People Their Medicare Plans Are Shutting Down, Then CNBC Called the Same Stock a Turnaround
  - Yahoo · 2026-10-07 13:42 (ET) · https://finnhub.io/api/news?id=7b41a39e576b9b9bb47a5350123331a168e5e3491f20cb7d241f26d5b1b8f3e7
- **UNH** · Which dow jones stocks are moving on Wednesday?
  - ChartMill · 2026-10-07 12:40 (ET) · https://finnhub.io/api/news?id=7035659f7d8a2a0d5730ed16bd3bcb7683148f81f5fe35ce66fb9682da838018

### 소비재·유통

- **AMZN** · Duke Energy protects customers from data center costs
  - Yahoo · 2026-10-07 15:53 (ET) · https://finnhub.io/api/news?id=50027646ec838a912a2f24074daa320a42f8fd7b862103330f67d7bca17fc3bc
- **AMZN** · Top dow jones movers in Wednesday's session
  - ChartMill · 2026-10-07 15:10 (ET) · https://finnhub.io/api/news?id=79cbbb6a9394d74f43ed5875e5d2b638c156a24824ea95997addfce18685ce40
- **AMZN** · Now Is the Perfect Time to Buy Amazon and Alphabet Stock
  - Yahoo · 2026-10-07 15:09 (ET) · https://finnhub.io/api/news?id=8c060be30d9303bebd5afcb29f6f25d198408118a352ded86fb3365414b3af36

