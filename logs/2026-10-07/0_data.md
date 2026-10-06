# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-07 · 생성시각(KST): 2026-10-07 06:30
# 출처: Yahoo Finance chart API · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,880.5 | +0.69% | 7,826.25 | 2026-10-06 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 31,501 | +0.59% | 31,317.75 | 2026-10-06 17:00 |
| 다우 선물 (YM) | `YM=F` | 51,850 | +0.57% | 51,558 | 2026-10-06 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,849.2 | -0.65% | 2,867.8 | 2026-10-06 16:59 |

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 15.01 | -3.29% | 15.52 | 2026-10-06 16:15 |
| VIX9D (9일) | `^VIX9D` | 12.03 | -6.38% | 12.85 | 2026-10-06 16:15 |
| VIX3M (3개월) | `^VIX3M` | 17.64 | -2.00% | 18 | 2026-10-06 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 82.59 | -3.36% | 85.46 | 2026-10-06 16:15 |
| SKEW (테일리스크) | `^SKEW` | 141.21 | -1.28% | 143.04 | 2026-10-06 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 미 10년 국채선물 | `ZN=F` | 104.44 | +0.21% | 104.22 | 2026-10-06 16:59 |
| 금 | `GC=F` | 4,192.7 | +0.86% | 4,156.8 | 2026-10-06 16:59 |
| WTI | `CL=F` | 89.91 | +0.54% | 89.43 | 2026-10-06 16:59 |
| 달러지수 (DXY) | `DX-Y.NYB` | 101.86 | -0.30% | 102.17 | 2026-10-06 17:20 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.175 | 콘탱고 |
| VIX / VIX9D | 1.248 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.039 | 1.392 | 2,701,425 | 2,806,738 | 29,478 |
| 나스닥100 ETF 옵션 (QQQ) | 1.103 | 1.464 | 3,554,693 | 3,919,064 | 11,422 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **Reuters** · Former German spy chief arrested for attempted treason, obtaining state secrets - Reuters
  - 2026-10-06 14:57 (ET) · https://news.google.com/rss/articles/CBMixAFBVV95cUxObU8wUVdxRFgxQzZyTGZXbHhIOEhBTHAzR2luYTFzZDkyXzhLV21OZHhtYWFFd1c4TDFTZzFURFc1SzRPRFA2NlJaYm1VbFFNMU4yT2t1NHRBYW8zZmFXVW52clZJbWJVeVZfVHlfYVk4N2hRUnRxcHN3SFhFSHBPOHBIaVRGRkdaZWd2QnpNQ21QSU0tV3FhQlg1Z2tzZzM5MTRWazcwS211bTJrM3k0N0M3MkJLNmFZczE2RkhkaVkxOEhP?oc=5
- **Reuters** · 'I'm getting fed up': voters line up before dawn as early voting begins in Ohio - Reuters
  - 2026-10-06 14:52 (ET) · https://news.google.com/rss/articles/CBMioAFBVV95cUxOR3NBVWtIOEhDaDlKenA1S0x2NUh3dDFfa1c5REw3OThWbjVzQnpwWVhQd09nYnBJU2dwMFJfZWxhcU1nb1JTR1JETm85R1lRV0RVZEViRmR0UGZJdmpSQUdNLXZhTWRleFRaMndmX283c29UY3FvZE9KSVBsRVM0ZW5rMXZYam9FeklWUTZoU3FKQ2pDcFBzc21LVFF6QndO?oc=5
- **CNBC** · What Marvell's rosy long-term guidance means for our AI chip stocks
  - 2026-10-06 14:51 (ET) · https://www.cnbc.com/investingclub/2026/10/06/what-marvells-rosy-long-term-guidance-means-for-our-ai-chip-stocks.html
- **CNBC** · Kalshi launches transparency features on its election contracts ahead of midterms
  - 2026-10-06 14:34 (ET) · https://www.cnbc.com/2026/10/06/kalshi-launches-transparency-features-on-its-election-contracts-ahead-of-midterms-.html
- **Reuters** · Northeast Democrats urge Trump administration action as heating oil costs surge - Reuters
  - 2026-10-06 13:52 (ET) · https://news.google.com/rss/articles/CBMiyAFBVV95cUxNSjNTOThyMXhvc1UzM1A2TVVrak53cDQ2d2h5dElha3lIWVU1NXVVbjhpRHhCejJldi1IS04tOVpBNzR1eDFGeGthX0F3TUNmSXljbkhaWnR6X0xIRmtMNUZtbW5KeG9nQ0NTMXFsdE9rdmdlTjE5dlFOR3JfbFJiWGJUU1pBUTd3RE8wNHgtcVowX1NlWUxRM3VESDM3d1NYRFFJdUJEeGR0eGd3blZtZnhKRDZpTlR3bE1fMEtKS25NS0l0OFVvVw?oc=5
- **CNBC** · How the S&P 500 can be at record highs, while the market remains oversold
  - 2026-10-06 13:41 (ET) · https://www.cnbc.com/investingclub/2026/10/06/how-the-sp-500-can-be-at-record-highs-while-the-market-remains-oversold.html
- **Reuters** · US EIA hikes oil price forecasts again as Iran war drains global stockpile - Reuters
  - 2026-10-06 13:39 (ET) · https://news.google.com/rss/articles/CBMiwAFBVV95cUxQZk8xUmkwZm83ZUdaTWpWaEVibFZzckNxOVFNOG9OTjlWdzJBdXRqWk5GUUFoME5DWXJmNThNRlIzdVBxUXNfeGd5cTFFNjlVZmg1VkFwVXdONzVLNGh0RVF5S203NlRieWFBNEY3b0dnZlZ3MERxUGlYWTRDaGwzYUJaYWJxWjI1WTlJbDNfMFJ0TVlqSjdFNnl6SVF6UVhmQlhNM2pRUnltSDVMMXNmS21JZkMySWNFVjhtbXVSMUw?oc=5
- **Reuters** · Californians blast Trump remark that Iran could 'take out' Los Angeles, San Diego - Reuters
  - 2026-10-06 13:16 (ET) · https://news.google.com/rss/articles/CBMiswFBVV95cUxNMTY3RjZOMDVYS2VsdWNRS0ZWR0FoRTU1V1MtQk8wLWdEMmdvTXYwVUxORXFpQXNFM25wbU9uVFFKNnhMSmlYUkFEQ0xhNnNKMk5hTjZURGhtV3piTlhieVVhb3h4N3hCYmtTQUVZZUh5dkhPaERqT0hFWXdPQl8wYVNfemd6VkZqSXVEVHQ0Q2NzWWpQUlVjVUhpdHhDWnZUMWl4RUZKTVplVWp6c3prRDhGZw?oc=5
- **Reuters** · EU to delay methane emissions rules for one year and no more, energy chief says - Reuters
  - 2026-10-06 13:01 (ET) · https://news.google.com/rss/articles/CBMiuwFBVV95cUxOcWJxRGxvRk5YTXVKbjZPSndYMTdEa3dlZjByT3dFN1k0dXZ1NWdiNVBGUVlDVEt5akxfckFZYUJHOV9sUDMwVnlpWVR0MG5mNGtacnhfVW80azQwUU1jVzR5NlhYNXRzX0p5TUdQQXVVeGF0OUFvd3VMR2ZXcFhpa3RYTkJTeXVzR2hrYWFTcTRhaVdrTmlNRFd0ckNiTURRaHQ1Ny05TzctaThrQ1RXSzlGQUVkTzBpeEZz?oc=5
- **Reuters** · UK police make further arrest over suspected Fairford airbase plot - Reuters
  - 2026-10-06 12:26 (ET) · https://news.google.com/rss/articles/CBMiqgFBVV95cUxPd2c1UTlFZXNSUXNHTkZYTmxtSjZTekZRYlEtanhyRHQ1SlkzbWtaN0ZpZzBuY3ZuUEIyQ2ZncjdGQ3lvMUNXaTFPdHFYRDZhTWxfbzRtUHF0VGZXZHJvdjQ4X2tZcXRFTGxjRG5fOU5OLUY2YmpqWkxDUGVGQW5ta05wVU9VYmJpX0I0X3p3YWtBX2FhLWV5VVV4Mkx1eDg4NmVuc3Z2TVBzUQ?oc=5
- **Reuters** · Venture Global in talks to sell US LNG to Chinese buyers, Bloomberg News reports - Reuters
  - 2026-10-06 12:06 (ET) · https://news.google.com/rss/articles/CBMivwFBVV95cUxOTWpfeEtvWDdaNW1TamJHMS13MVdFaVlnblpIUFRDZWRWbXJEOWJZUV9Cd09XSl9acnRpaDhJMXJ3QVlsTkwwdEpXMWFOa2x3c3R2Q28wakRGUVFDSjVlSHowdzMzNGZsYkpuUlJkYzVsNTl4ZEh6aUxKczdndmpOYlV5NldoWElUenFNN3FTeE9KOGRCX2Q1eDRJTTJhOVpJNjA2UzlnX2J2MFBJY2lndFJvcmFPMjNVcEd5M3dmZw?oc=5
- **CNBC** · What's behind an 'explosion of buying' Tuesday, including the rally in GE Vernova
  - 2026-10-06 12:02 (ET) · https://www.cnbc.com/investingclub/2026/10/06/whats-behind-an-explosion-of-buying-tuesday-including-the-rally-in-ge-vernova.html
- **CNBC** · British Airways plans record 106-seat business class on Airbus A380 jumbo jets
  - 2026-10-06 11:40 (ET) · https://www.cnbc.com/2026/10/06/british-airways-business-class-a380.html
- **Reuters** · Iran drone plot fears led US to remove bombers from UK base, US officials say - Reuters
  - 2026-10-06 11:00 (ET) · https://news.google.com/rss/articles/CBMiswFBVV95cUxNNmxrT2JGb1p3OXBWNFN3Y195SFBkc3JnNFZ5ODBuWVRCT3RUUGt1WE5wVkFVano3TkQtaU5EbUNtQ3J5aUR0OUNWU3hIM2RNLV90emJQNUU4T29oeno3UzZ4Ymd5RWRhd3FoZmZoN2NEZDZXWF8xajRGZ3ZoWS1LVmI1Z2o1aVBadmhYeXNGQ1NHUTExY3BldDgxSGwwb01fZ3JybVhnb3R0UUZ6YVhhSmFEcw?oc=5
- **Reuters** · Nigeria's Dangote refinery targets 10 million retail investors for planned IPO, CEO says - Reuters
  - 2026-10-06 10:47 (ET) · https://news.google.com/rss/articles/CBMiyAFBVV95cUxNLV9ETnBfeTNDYXoxZkRqdWhEMklGNklyZGYwVV9wTk1BcVVPT2FjQTJiUWl3Q2FJelZkMGR2ZXVZYlVFZFVNejFIYklDOHllaWQ2OTdBTC11VHdMUTRrRTdjTTBnSVV0RUpjZzFrdmxZVVI3cThnUWU5MDVVd2pNNW5KbFVjOXN2SWVsSmY1bEJOOW9vUTB6dmc3ei1hUTBqZ3FUNExtTXpfU2ZqZWd3alNLeWlfNy0wMWY5RWEtVVhWTVY1REZYYw?oc=5

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Nvidia Strength Is Masking ‘A Whole Lot of Pain’ in the Broader Market, David Rosenberg Says
  - Yahoo · 2026-10-06 15:41 (ET) · https://finnhub.io/api/news?id=0104dc991880bd279d7970047571dfd74fc1e9dbad9119cb6090020eac4bd09a
- **NVDA** · Stock Market Today: Dow Rises, But Seagate Dives On This; AI Stock, Electronics Play Clear Entries (Live Coverage)
  - Yahoo · 2026-10-06 15:34 (ET) · https://finnhub.io/api/news?id=1978a1c82c4d9c59958a6ba206f27ca78d48bd7846ee379ed8b186b3e2f133e2
- **NVDA** · Anthropic Could Beat OpenAI to Wall Street by Over a Year
  - Yahoo · 2026-10-06 15:32 (ET) · https://finnhub.io/api/news?id=01b61d163b347468b787f6840257d88ef200b803d7601cac44b393eddecc320a
- **AVGO** · Update: Big Tech Pushes US Equity Indexes Higher Amid Lower Treasury Yields
  - Yahoo · 2026-10-06 14:24 (ET) · https://finnhub.io/api/news?id=2ab5e7fc9760494ddf7b7b34e153477832f90dc4e64fbd26a41bd130255744df
- **AVGO** · Which S&P500 stocks are the most active on Tuesday?
  - ChartMill · 2026-10-06 14:05 (ET) · https://finnhub.io/api/news?id=7ac5538e31ce186fc71d5982aeaf8622b1db0c230425ffa7324cfbda11ad9a1d
- **AVGO** · TSMC Q3 Earnings: Strong AI Demand Sets the Bar High for Growth
  - Yahoo · 2026-10-06 14:00 (ET) · https://finnhub.io/api/news?id=eee32647e2dd9c812eb46807295402951283bebc08db4a697e83aa60b1fe535b

### 금융

- **JPM** · Jamie Dimon Says AI Boom Is Competing With Government Borrowing for Capital: ‘Rates Are Going Up’
  - Yahoo · 2026-10-06 15:00 (ET) · https://finnhub.io/api/news?id=22a04c81368249e486ae18b2678d6af5b9fd55e4b4a165c5f23c183cbe922124
- **JPM** · Why Corteva Stock Is Rocketing Higher Today
  - Yahoo · 2026-10-06 14:44 (ET) · https://finnhub.io/api/news?id=e1b77edfaad1c5271600149d9d80e97d935afa7f2829126ff77ae3ce15b379c8
- **JPM** · JPMorgan tops Evident AI banking index for fifth straight year
  - Yahoo · 2026-10-06 13:21 (ET) · https://finnhub.io/api/news?id=f120ab1bf3ee94ac803dba7da6fc2d842f78e483b462be165f4ffb9d933a97c7

### 에너지

- **XOM** · ExxonMobil’s Dividend Story Is Only Part of the Bull Case
  - Yahoo · 2026-10-06 14:00 (ET) · https://finnhub.io/api/news?id=12f2fd609769f3e31615967e08d1e8a11a02cb12d4f590690b2a08aeae343d71
- **XOM** · 3 of the Best Dividend Stocks to Buy in October 2026
  - Yahoo · 2026-10-06 12:50 (ET) · https://finnhub.io/api/news?id=0c4a7bb05de5bb5be7e4cf51ffcd5c358bea665c5b24048d350848ac57ef577b
- **XOM** · Sozzi talks SpaceX, takes a look at Nike, and chats with the Conference Board CEO
  - Yahoo · 2026-10-06 10:51 (ET) · https://finnhub.io/api/news?id=d07dbe19af84ddbe763216708c1a6c35385bb66cdd013f239da51a34846c5f81

### 헬스케어

- **UNH** · Stay informed with the top movers within the dow jones index on Tuesday.
  - ChartMill · 2026-10-06 15:10 (ET) · https://finnhub.io/api/news?id=d746261ff29e9cc44ef27036fcaea7bc30f5ad242ea1e6c22ec443fb552f4afd
- **UNH** · Uncover the latest developments among dow jones stocks in today's session.
  - ChartMill · 2026-10-06 12:40 (ET) · https://finnhub.io/api/news?id=361e5b72465570df72e887158a87e1dc49821914f115ef86f466fedcaf903622
- **UNH** · UnitedHealth Q3 Coming Up: Two Questions Investors Can't Ignore
  - Yahoo · 2026-10-06 12:27 (ET) · https://finnhub.io/api/news?id=c0adbfa82ff4cfa37f123929df94f6f2d6c0188132fd12ed523bd0d84ea51e90

### 소비재·유통

- **AMZN** · Sector Update: Consumer Stocks Higher Late Afternoon
  - Yahoo · 2026-10-06 15:56 (ET) · https://finnhub.io/api/news?id=af0026f590c2c6b88d5e99d7e39902f2a18de1c6a5f7d03103c11dbc9cad0d16
- **AMZN** · Stock Market Today: Dow Rises, But Seagate Dives On This; AI Stock, Electronics Play Clear Entries (Live Coverage)
  - Yahoo · 2026-10-06 15:34 (ET) · https://finnhub.io/api/news?id=1978a1c82c4d9c59958a6ba206f27ca78d48bd7846ee379ed8b186b3e2f133e2
- **AMZN** · Marvell rides the AI boom, targets $90B in revenue by fiscal 2031
  - Yahoo · 2026-10-06 15:26 (ET) · https://finnhub.io/api/news?id=fd1442bda0c611fa1334f17bc6daf04e297b94976a8502ef8ed764624dcb48ce

