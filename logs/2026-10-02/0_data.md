# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-02 · 생성시각(KST): 2026-10-02 06:30
# 출처: Yahoo Finance chart API · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,725 | +0.12% | 7,715.5 | 2026-10-01 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 30,771.25 | +0.24% | 30,698.75 | 2026-10-01 16:59 |
| 다우 선물 (YM) | `YM=F` | 51,234 | -0.09% | 51,278 | 2026-10-01 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,829.8 | +0.44% | 2,817.5 | 2026-10-01 16:59 |

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 16.39 | +0.31% | 16.34 | 2026-10-01 16:15 |
| VIX9D (9일) | `^VIX9D` | 14 | -1.41% | 14.2 | 2026-10-01 16:15 |
| VIX3M (3개월) | `^VIX3M` | 18.58 | +1.14% | 18.37 | 2026-10-01 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 92.01 | +2.83% | 89.48 | 2026-10-01 16:15 |
| SKEW (테일리스크) | `^SKEW` | 142.77 | +0.60% | 141.92 | 2026-10-01 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 미 10년 국채선물 | `ZN=F` | 104.61 | +0.39% | 104.2 | 2026-10-01 16:59 |
| 금 | `GC=F` | 4,207.8 | +0.50% | 4,186.7 | 2026-10-01 16:59 |
| WTI | `CL=F` | 92.91 | +2.75% | 90.42 | 2026-10-01 16:59 |
| 달러지수 (DXY) | `DX-Y.NYB` | 102.01 | +0.55% | 101.45 | 2026-10-01 17:20 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.134 | 콘탱고 |
| VIX / VIX9D | 1.171 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.122 | 1.420 | 2,589,741 | 2,905,883 | 29,394 |
| 나스닥100 ETF 옵션 (QQQ) | 1.001 | 1.399 | 5,055,200 | 5,061,425 | 11,268 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **Reuters** · UK police arrest dual UK-Iranian man in Fairford air base investigation - Reuters
  - 2026-10-01 16:14 (ET) · https://news.google.com/rss/articles/CBMipgFBVV95cUxPNXZoS0pkNjVhU0QyeEtaTFh2OU9nb2FPNVJHa1R3NENYMUx3ZGVWd0Y0UEcyTnNHdGxmSF9ndU5nSXNPUVpfV1pvMnBlTUZHYk9OUGhBWjEyTmJpcy0zNkx3TWVwQ2RzcEtnYklxRzVxOXY5M1NJSm9oVzBkSFd4aEZESFlUSmVabUN4Wm1sQmJtaFpIY2VpNFZ0ajZoWVhVN0lIMm5B?oc=5
- **CNBC** · Boeing engineers and technical workers approve new contract, avoiding strike
  - 2026-10-01 15:36 (ET) · https://www.cnbc.com/2026/10/01/boeing-contract-engineers-technical-workers.html
- **CNBC** · Jim Cramer sees a huge catalyst on the horizon for Apple. How to play the stock
  - 2026-10-01 15:23 (ET) · https://www.cnbc.com/2026/10/01/jim-cramer-sees-a-huge-catalyst-on-the-horizon-for-apple-how-to-play-the-stock.html
- **CNBC** · The September jobs report will be released Friday. Here's what to expect
  - 2026-10-01 14:55 (ET) · https://www.cnbc.com/2026/10/01/the-september-jobs-report-will-be-released-friday-heres-what-to-expect.html
- **CNBC** · United Airlines goes after top frequent flyers at Delta, American with status match
  - 2026-10-01 14:52 (ET) · https://www.cnbc.com/2026/10/01/united-airlines-status-match-delta-american.html
- **CNBC** · One of our most recent defensive buys cleared a hurdle and its stock jumped
  - 2026-10-01 14:45 (ET) · https://www.cnbc.com/2026/10/01/one-of-our-most-recent-defensive-buys-cleared-a-hurdle-and-its-stock-jumped.html
- **CNBC** · You think Nvidia's $235 billion buyback is big? Just wait and see what Micron might do
  - 2026-10-01 14:26 (ET) · https://www.cnbc.com/2026/10/01/you-think-nvidias-235-billion-buyback-is-big-just-wait-and-see-what-micron-might-do.html
- **CNBC** · The 2 most important skills for entry-level workers in the age of AI, says IBM's chief talent officer
  - 2026-10-01 14:15 (ET) · https://www.cnbc.com/2026/10/01/ibm-talent-officer-top-skills-entry-level-workers-ai.html
- **Reuters** · EXCLUSIVE: Syrian government officials and Hezbollah held secret talks in Turkey, sources say - Reuters
  - 2026-10-01 14:08 (ET) · https://news.google.com/rss/articles/CBMixwFBVV95cUxNdzNSVk8xcS0weTJwZkdGVVR2OVJqSUlnRlhRaG9HVlUxVEs0dWs0R2VTSkpCUlV4alRiVENpNnc4M3ZCVF9VVVBmWW9CQzJLRzhOaC1SODlHNmNhRWdXZHBDZ0g5UEJ1c2Fkd3ltenFpSHcwRWp6VEt6YnBhX0pUdVUyMUdTTkRKV2FBRDNRb3dJdk9BQVBqdGRBd19RNHltTUtmMERiZEFYUHJ0d2dHel9CSEpYeWlmRlZWbE5uaVlWVF9MbjBj?oc=5
- **Reuters** · US sanctions target Iran's auto, rail sectors after blockade chokes shipping lanes - Reuters
  - 2026-10-01 13:53 (ET) · https://news.google.com/rss/articles/CBMizwFBVV95cUxOMGQ5cWhPbnlFT0hFQU1VME1qVVB2SndmZVROdUpzUU1sVGxRcDZndDN0R1BwdGVXRThreEJhTnV4WWQzZ19xUjlqZ3hqWjBWSEJWQ1JtcExJNVVRTG95UHQ1RjFsc21pbWQ4Q3c3dnhvYWZXUF9uNmQ0UHhWT1pJRXg3Yk42b0dOS0FJVmNsbGJLeFZTQkNKcW5ocVZVSzBlS2tnSnRpM044NEhMZW1FMG94N1U2dW1fUXJkbng1clJZSHpaZVVGLXFyeDBYcXM?oc=5
- **CNBC** · Next OpenAIs and Anthropics may come straight to retail market. Here's what to know before investing
  - 2026-10-01 12:50 (ET) · https://www.cnbc.com/2026/10/01/sec-private-equity-hedge-funds-stock-investing.html
- **CNBC** · Nike's new Caitlin Clark shoes are already almost sold out
  - 2026-10-01 12:38 (ET) · https://www.cnbc.com/2026/10/01/nikes-new-caitlin-clark-shoes-are-already-almost-sold-out.html
- **Reuters** · Israeli passenger says he knew what to do on flydubai plane after watching TV show - Reuters
  - 2026-10-01 12:14 (ET) · https://news.google.com/rss/articles/CBMiygFBVV95cUxNNWZnVHV0eE10U2dwMERaTTNPU0pla1NHSUllX1o4R1J6dzRaN2FiVmlWWGNyZGlRZjgwRGFzOE1nVjNvcFI1bmxuRmJVQnEzeUxaeWp4am1KbzVobndTVHVmRVRzSXlOWHVGTG1idUt2WGMtd3pBTXp6STFFN0hTTG51ajQ0VWRVRFE5Q2VCV3B5czE1VnVSSGQ5Mnp6WUhpN2k5UTJzUHVYM1hXSXZiVHNKMGFOVnhBRFNqRVVBM3JPeGZKRURJM29n?oc=5
- **Reuters** · Israeli airlines plan to resume Dubai flights after flydubai incident - Reuters
  - 2026-10-01 11:53 (ET) · https://news.google.com/rss/articles/CBMivAFBVV95cUxOVTVCTm5OUGRQR0FhMF9DYW82eWVXNE5NUUNJWGtNT3VRUHNjRjY4dWlSMXJtbHpSZTRWa3lfUWpVeFQwSmIzbVlwY2oxSXBwd1VMZE9ZYzRvdEZrWjBsdGVyVE9VOXRXY0lhcmNYMVExdmE2dmd1ck0tQlZaUG5CcFVvY0pMWEpic0pkMndCWlNXZDZmNWx3UUd1VHJmdzZENUYwUmNYOEJLTkF6NFFYZDdJUmIzWXpKZDhHRw?oc=5
- **Reuters** · Israel's Netanyahu: Co-pilot of flydubai plane underwent radical Islamist indoctrination - Reuters
  - 2026-10-01 11:52 (ET) · https://news.google.com/rss/articles/CBMiuAFBVV95cUxQT1RDU0l3eU5nTnBlVmRsYkpBYTdSTEVRRE1WRk1qbVZYT0MxVzVMSWJMbHk3OElRU1M5RHlGXzV6UWFSdVJiU0cydV9qMlZvSE9mV0ZCcEZSVzJyVGx4X2x2SFJYTUw4N2lialRSOFoxSElUSHVMQ3RHZHZBamNQU21WdWJhbmJHUG9mXzFPbGpfbDRkUzBMYlVOODBPMUc1TTZzSHJYc0d5ME5Ud1NGQjR3d0xSUzdz?oc=5

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · If a Bear Market Is Coming, History Says the Most Successful Investors All Share This 1 Habit
  - Yahoo · 2026-10-01 15:50 (ET) · https://finnhub.io/api/news?id=2cf57b8bc2792156392f5b0700d08dfa12d13c6d43ccb872e492536f9ed85287
- **NVDA** · This AI Stock Is Trading Near Record Highs. Is It Too Late to Buy?
  - Yahoo · 2026-10-01 15:46 (ET) · https://finnhub.io/api/news?id=9c4086ded4c0a181850863b2d4fc7618ea2e188a9bbfa27836e6f16a8e2d6e7c
- **NVDA** · Nvidia Authorizes a Record $150 Billion in Stock Buybacks. The Real Prize Is Where the Rest of Its Cash Is Going.
  - Yahoo · 2026-10-01 15:35 (ET) · https://finnhub.io/api/news?id=e84d920e300dc3c29e50103713052ce83d4b0c0574f7a5988b177252726e57e5
- **AVGO** · Is Marvell Stock Ready For A Slowdown In AI Demand?
  - Yahoo · 2026-10-01 15:32 (ET) · https://finnhub.io/api/news?id=0285a6d1db0bed4cc0b79c3edf21275ff5e70005157e9cceea8c3fc99e3ef001
- **AVGO** · Applied Materials vs. Broadcom: Which Semiconductor Stock Is a Better Buy in 2026?
  - Yahoo · 2026-10-01 14:29 (ET) · https://finnhub.io/api/news?id=6f3e91de8704ac93d4fdf702bbb7770dbd94930ccf9dc6f9975ef83e8b8b86bf
- **AVGO** · Why Did AMD Stock Jump?
  - Yahoo · 2026-10-01 14:13 (ET) · https://finnhub.io/api/news?id=179b81b2efb1c751797187a71b6871e83de204b5d534b7a4c5024935d51782d0

### 금융

- **JPM** · JPMorgan Chase (JPM) Taps Bond Markets, Is The Stock Still Undervalued?
  - Yahoo · 2026-10-01 14:09 (ET) · https://finnhub.io/api/news?id=8088ac4f9e23d79ec162d3a91ac5f1249f1327fc8418820dddebb0ec255e6cc6
- **JPM** · JPMorgan M&A chief Hernan Cristerna retiring after 30 years
  - Yahoo · 2026-10-01 14:05 (ET) · https://finnhub.io/api/news?id=80e0a5b4219f6b97c1c2f002b3adb0913c9f1be307fab13d369a1410aa5e492f
- **JPM** · Noah Holdings (NOAH) Stock Fair Value Moves Lower After JPMorgan Target Cut
  - Yahoo · 2026-10-01 13:09 (ET) · https://finnhub.io/api/news?id=fae764d7d994de95bd4677f8608604f641fa9a357bbecf351937d11df468fea6

### 에너지

- **XOM** · Marathon Petroleum Climbs 5%, Valero Energy Gains 4% as Refiners Outrun Integrated Majors; Exxon Mobil Stays Flat
  - Yahoo · 2026-10-01 13:53 (ET) · https://finnhub.io/api/news?id=29e1a73a4258cc5fd071ab287e1755f0895e015f7f17b98fcc685ca6a0e3385b
- **XOM** · ExxonMobil's Advantageous Upstream Assets to Fuel Long-Term Growth
  - Yahoo · 2026-10-01 12:31 (ET) · https://finnhub.io/api/news?id=9298a194049655bda60174c55af557c34c634c872a1634cb9f91f85794b2e017
- **XOM** · Wells Fargo bullish on BP, downgrades Exxon Mobil amid valuation gap
  - Yahoo · 2026-10-01 11:35 (ET) · https://finnhub.io/api/news?id=28404afdde69e7a56278e363ebd0ebd870fb0b03ed1a64e886d1551405ded1a4

### 헬스케어

- **UNH** · These dow jones stocks are moving in today's session
  - ChartMill · 2026-10-01 15:10 (ET) · https://finnhub.io/api/news?id=593aa07a576d9a104d35417a4de50cd4023685048bcb784bbe5f867fa4a98c43
- **UNH** · UnitedHealthcare 2027 Medicare Plans Focus on Affordability, Simplicity and a More Connected Healthcare Experience
  - Yahoo · 2026-10-01 07:00 (ET) · https://finnhub.io/api/news?id=29f604db34829663708b62c3c416be35aaae0b69629cd46e2f1f42ebef19bf8b
- **UNH** · UnitedHealthcare Rolls Out 2027 Medicare Plans With $0 Premiums, Drug Copays And Broader Benefits
  - Benzinga · 2026-10-01 05:24 (ET) · https://finnhub.io/api/news?id=88e2198d009e6a61469b58ebcceb08f667129012be79471fa8fa6dd87fb0659d

### 소비재·유통

- **AMZN** · Sector Update: Tech Stocks Gain Late Afternoon
  - Yahoo · 2026-10-01 15:51 (ET) · https://finnhub.io/api/news?id=562133cf5715763d5fbc16d7a6819894df187c19d16c3330eca97d753c41886d
- **AMZN** · Amazon, Constellation sign 20-year PPA to expand Maryland nuclear plant
  - Yahoo · 2026-10-01 14:55 (ET) · https://finnhub.io/api/news?id=f1ca1ac9b465740637982ff121d52ae34d3e852f21653abf698dbd0cd94011f4
- **AMZN** · National retailer files Chapter 11 after 80 stores closed in 2026
  - Yahoo · 2026-10-01 14:34 (ET) · https://finnhub.io/api/news?id=18428585ea7ce8bfad42089cb7c5eedb05092899889c1812fe26d67bc1e153f0

