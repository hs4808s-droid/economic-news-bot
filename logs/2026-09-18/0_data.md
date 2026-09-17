# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-09-18 · 생성시각(KST): 2026-09-18 07:19
# 출처: Yahoo Finance chart API · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,700 | +1.90% | 7,556.5 | 2026-09-17 18:09 |
| 나스닥100 선물 (NQ) | `NQ=F` | N/A | N/A | N/A | 수집 실패 |
| 다우 선물 (YM) | `YM=F` | N/A | N/A | N/A | 수집 실패 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,892.8 | +1.09% | 2,861.7 | 2026-09-17 18:09 |

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 15.44 | -12.82% | 17.71 | 2026-09-17 16:15 |
| VIX9D (9일) | `^VIX9D` | 13.39 | -23.05% | 17.4 | 2026-09-17 16:15 |
| VIX3M (3개월) | `^VIX3M` | 18.55 | -5.98% | 19.73 | 2026-09-17 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 87.72 | -8.06% | 95.41 | 2026-09-17 16:15 |
| SKEW (테일리스크) | `^SKEW` | 145.7 | -0.17% | 145.95 | 2026-09-17 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 미 10년 국채선물 | `ZN=F` | 106.23 | +0.18% | 106.05 | 2026-09-17 18:09 |
| 금 | `GC=F` | 4,381.2 | -0.14% | 4,387.5 | 2026-09-17 18:09 |
| WTI | `CL=F` | 101.07 | -1.33% | 102.43 | 2026-09-17 18:09 |
| 달러지수 (DXY) | `DX-Y.NYB` | 100.24 | -0.07% | 100.31 | 2026-09-17 18:04 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.201 | 콘탱고 |
| VIX / VIX9D | 1.153 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.152 | 1.407 | 2,230,067 | 2,569,976 | 29,914 |
| 나스닥100 ETF 옵션 (QQQ) | 1.352 | 1.384 | 3,111,202 | 4,204,835 | 10,994 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **Reuters** · EXCLUSIVE: China presses Iran to help rein in Houthis after Saudi appeal, sources say - Reuters
  - 2026-09-17 16:28 (ET) · https://news.google.com/rss/articles/CBMitgFBVV95cUxNUnJncHUxLTNvV25NTHFxQzVwcnljdzdsTkJCNFNjSlJybF95bFBhcW9DTWV1dnlYQ0prMkI0SmdnNjBrdXNLV0ZNM1pQNW1FcUxuaWpqd3NnRXJ6U2lkQWFqQlR0UVE2X3lYU0RXNXlBdno3QkRkSzB2SEwxUzdYV2NZWlc3SGhZdGRMbUFCVDJZeXZsTy0zOHF4R013c2xyMl8zNmVkaHlFOXM1MmtuZHJRREI3UQ?oc=5
- **Reuters** · US allies fret over how Trump might play his Taiwan hand with Xi - Reuters
  - 2026-09-17 16:07 (ET) · https://news.google.com/rss/articles/CBMisgFBVV95cUxQY3hVM1dFSVFMbUpibXh4OWtYdWFBRnNkN0JhREtSNFZ0R2hVMnN1T0lUTHlneVdReE1kd1YzSENaY2xpWXh5SGVjY09qSXNack9RQkN2VFBYQUxCcE5sUExGNzJxRDJzRXYzX0pZU3NTX3RNOTZ0WEZWZ01oSUp2dHh3SkNZSERMc0tFempuV3RSaXF6OXlGaUhCZGNUZlRvMEhaRWRKcUVMSVN6aVJRcmZ3?oc=5
- **Reuters** · Impoverished by war in Iran, Afghan migrants return to Taliban rule - Reuters
  - 2026-09-17 16:05 (ET) · https://news.google.com/rss/articles/CBMitgFBVV95cUxQbUtnR01KbXZwRU1yS09FNXhXdnFRaXRXR1YyaWwyOWFvYWl1VC1MbVJFb1dvVWgxNGVFR0xKV3pCQkNycmVDaUJpVjFLYmt4MTVhSmR5dXRlVU54MWFRTG9LY2V4a1g3d2cyblNlVkU2MjNUTWJXaEY0MFNpNG9uZ3dWMWFEZ0ZIZ1dGMFdQby1jd1A5RzZ2TXNsQlJzdEFER2ZjRHE2SWstblhoVFRWWVhGcXFMZw?oc=5
- **CNBC** · Intel and Micron lead our portfolio higher, and J&J's strengthens our case for owning it
  - 2026-09-17 14:55 (ET) · https://www.cnbc.com/2026/09/17/intel-and-micron-lead-our-portfolio-higher-and-jjs-strengthens-our-case-for-owning-it-.html
- **Reuters** · Iranian delegation will be able to attend UN General Assembly, US says - Reuters
  - 2026-09-17 14:49 (ET) · https://news.google.com/rss/articles/CBMivAFBVV95cUxQMlRxdXlUU25MV1Q5ZThqV29lYjBpb1Y0V2MwV3RqZFNoR25hS2ZUX0VpR0hENmZIMlRPWWxGS1p1WUJmNktPZ0ZMWE8xSGRQYmFOUHkwamNjVTFhZFdpSkUxUEhROGl4Y0Y4X05kcTM5QmxqRXVnRm9hSzNCWGZza2RNX1JqYmJiLUJ3UUFFeHFlZVNQQ2QxbzEtbkF5MzlKSktFV3ZUaEdMdTdOdy1rMU9CYWxlRG81SlM0Zg?oc=5
- **Reuters** · Lockheed Martin gets first batch of Patriot interceptor parts from General Motors - Reuters
  - 2026-09-17 14:35 (ET) · https://news.google.com/rss/articles/CBMi1gFBVV95cUxNNG1NWWFVb3NxMWY1WVJVeXpyRzlOdXdNWklvZER6T19vTWpqOGV4OU8tWE9ZeC1SYzZlYlFtbkxKdEZNTFdVVjY2a3huYnhCSU5EazRYU0hLWlRLckpxaXcwS0VpdE5kRElRcVpWYkc4NWZ3VW5yMnc5SXA0R1k0UjdNWVVfMXZwZjd6RURHUktZUXRjNWNncHBHclI2YW1Rd2paV0ExMmRObE4xRVVoSS1oREpRV3NOUncwMHJaLVNzdk94bmZReWMtT3l1RXZQSFVib0Jn?oc=5
- **CNBC** · Stephen Curry says his Li-Ning signature shoe will debut early next year
  - 2026-09-17 13:27 (ET) · https://www.cnbc.com/2026/09/17/stephen-curry-li-ning-signature-shoe.html
- **CNBC** · We're buying more shares of a retailer that's been punished enough for a rare misstep
  - 2026-09-17 13:08 (ET) · https://www.cnbc.com/2026/09/17/were-buying-more-shares-of-a-retailer-thats-been-punished-enough-for-a-rare-misstep.html
- **CNBC** · Stocks stage a comeback after Fed-induced declines — plus, what's ailing Boeing
  - 2026-09-17 12:37 (ET) · https://www.cnbc.com/2026/09/17/stocks-stage-a-comeback-after-fed-induced-declines-plus-whats-ailing-boeing.html
- **Reuters** · Why are world leaders at the UN next week and what will they talk about? - Reuters
  - 2026-09-17 12:18 (ET) · https://news.google.com/rss/articles/CBMitgFBVV95cUxQZWxWOU16ZUF2MDh5UlVqc2pMM0d1WGFVSGJzdUl6aGZCZ09QeGFNX2pwTkdaNkRuaGJmUGtvUWRqZDlmMTdaZlA1V05WanlTQnlhRXJZQXlGTFE2bVhoT1lJYlZER3pkQ0EzcEdDLTNJVHVUd2RYU0VjUUNoWkplNDNrcGhtX1hrMUVpMG5vQkFKVjRJSkZuZHBGZ3NCbFN0YjJYYmN2aWt5Y0pIeXFZY2pQcWpOUQ?oc=5
- **Reuters** · UN mission finds grounds to believe US committed war crimes in Iran, and Tehran crimes against humanity - Reuters
  - 2026-09-17 11:41 (ET) · https://news.google.com/rss/articles/CBMiyAFBVV95cUxPbmJVNS1uc3FDVDUwbUJ5bjJkZzRwbTdzNFZYUW00SEloak4wZl9yeXJhWlQ2bEExbjZBSzh6T2lRVjNjQ2VvR1lNZGNBc3BwLXZ6QXJCTmZ3M3BfQVdURWZaaUVOV2k0VkNOTFMwcnhsdXR1VU5IWFRWYlVYNDgzeGNwTDB6d3FURHV4YnZZdFpibE45Qm1tTVJxMi1QZG9lbFFqVW16M1ZzQzRLQW1PVkhud2RLeWtxUVV6OFJweE0wOXZuVG5RRg?oc=5
- **Reuters** · How Yemen's Houthis went from a small mountain militia to a big regional threat - Reuters
  - 2026-09-17 09:43 (ET) · https://news.google.com/rss/articles/CBMivAFBVV95cUxNcGthY0luQlRSdV83a2g1VktUVlRKMVJCeXVjME5lNEU3MUNocU55OUhIQXhoRThxT0ZiVlUyMkM1ZENVVlowLWNaX0p5bFpjVnpfMDhPTl9EYU01MV94Y19fOE91Ym9oQS1XdENUbGotVjVRcjNsZzFGbnJDQi13Z0tSSEhMYlBiZ2pSallYMkRBb2F0Q24xT0ZpcnRUdzR0OEJLTUo4NEZtazJidEl5N3ItbkhFZmdpWVM5Mw?oc=5
- **Reuters** · US-Iran conflict helps drive wave of supertanker orders - Reuters
  - 2026-09-17 09:13 (ET) · https://news.google.com/rss/articles/CBMipwFBVV95cUxONHQ5ZjFKUlRNeTl4YXFuSUNzZ0FpZHRoUGRjMUJ0WjJhbVZOY2tQazZuVUdtMURzNzNnTlVadTZoT3gxUmYyYWdxS2o2bEdtSWRUcGExWjFOQXNsdmwzMm9EOFljblVTdk1OTXY2UUtuZ3pyOXhjSmhQTy0yQkFXUDFHN2tqR2p4VWhDcW1FbE9PY2lwLVJDcWhmWnFSMFZpSVBoUUJiOA?oc=5
- **Reuters** · Lockheed Martin reveals new secret missile, fast tracks production - Reuters
  - 2026-09-17 08:39 (ET) · https://news.google.com/rss/articles/CBMixwFBVV95cUxPM0dqZ3hGcHAzNXRmNXZJRzRSV3EtbThWYms2Z2tRM1h2QzVUTncwMEhudXVmbWRhd3d2MHoxZTctUXc3dWRXdWxxN29lbHRieGpVZUFuMG5ta1ViQ3NZdXhsLWZucXIzZXhDSXRuR3Rud2Z6dnpoaXZxM3VKUFZMX3JUSUw2S1d2Z1piZU5vNjBXMHMzVHRHaGRES0NrcmxBTXdrLVhldmZqbWlfU2FqUHlfTXpUbTRGNkZNR08tb2dENklSd3BF?oc=5
- **CNBC** · Charities say gifts by deceased donors are getting held up at financial firms
  - 2026-09-17 07:31 (ET) · https://www.cnbc.com/2026/09/17/charities-ira-gifts-hurdles.html

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Discover which dow jones stocks are making waves on Thursday.
  - ChartMill · 2026-09-17 15:10 (ET) · https://finnhub.io/api/news?id=dfb76a66e1436e85948b341453048bdf27d660ffca2da6ee1a728671127df0b6
- **NVDA** · Most active S&P500 stocks in Thursday's session
  - ChartMill · 2026-09-17 14:05 (ET) · https://finnhub.io/api/news?id=0d852bd60c8de3c6239685cf2705b7e360785db1df8879cd5d21e530331f5afd
- **NVDA** · These dow jones stocks are moving in today's session
  - ChartMill · 2026-09-17 12:40 (ET) · https://finnhub.io/api/news?id=19743c4c516fff44e17aef6ad8aee7e45aa5ec507e86f2f5d35e75dfae85174e
- **AVGO** · Investors Want to Know When Broadcom’s Custom Hyperscaler Chips Will Move Share Prices
  - Yahoo · 2026-09-17 08:55 (ET) · https://finnhub.io/api/news?id=a729b9ee706afbcfbb75d7af45b2d3f8ab29cb4b211da9d5f3733bd2ffcd4109
- **AVGO** · Despite Hype, Broadcom Keeps Edging Sideways and Down: This Wall Street Analyst Says It Will Provide 75% Returns Soon
  - Yahoo · 2026-09-17 08:51 (ET) · https://finnhub.io/api/news?id=618e749b92ba5ebb35884d35db4870ba5fae1d641a26a90fff36a3aa04717064
- **AVGO** · Marvell Technology Dropped By 25% in 3 Months: This Trusted Analyst Says 75% Returns Are Coming In The Next Year
  - Yahoo · 2026-09-17 07:16 (ET) · https://finnhub.io/api/news?id=92ef61a28484e39e2b1664bc9dcdbe4fa2ae328dfdea03e51c6eb9aa4a7f7541

### 금융

- **JPM** · Sumitomo Financial Group Is Now An Interesting Value And Growth Play In The Banking Sector
  - SeekingAlpha · 2026-09-17 04:15 (ET) · https://finnhub.io/api/news?id=f4c9e5709da6a5adf05228c7f5aef04ff7907406f923eb56d23fef64c74f91c9
- **JPM** · 'Mastercard Inks Deal as Payment Giants Brace for New Era of AI Shopping' - Wall Street Journal
  - Benzinga · 2026-09-17 04:12 (ET) · https://finnhub.io/api/news?id=02d5ce65324ce9fd4a9ef997e1f9c8ef2bd3c0f64a92ef28b9eb39856e1a70f7
- **JPM** · S&P 500 Could Deliver Another 6% by Year-End as JPMorgan Calls Bears an ‘Extinct Species’ — Polymarket Bettors Price 35% Odds
  - Benzinga · 2026-09-17 03:20 (ET) · https://finnhub.io/api/news?id=f922ed5e023481957ef46ff65beb7a538e8a6e6a32fd0fa52e11afe1c22b53bb

### 에너지

- **XOM** · ExxonMobil: Quietly Increasing Its Papua New Guinea Significance
  - SeekingAlpha · 2026-09-17 07:34 (ET) · https://finnhub.io/api/news?id=2331a75210d80cd9e81fc503c9f19b33e799b584ae28ee3acaaa0dcec204cf88
- **XOM** · Update: Market Chatter: US, Vietnam Firms Set to Announce Deals During To Lam Visit
  - Yahoo · 2026-09-17 07:33 (ET) · https://finnhub.io/api/news?id=0ecf5c1a55cd4bf026b445a1b6a2f017556b7ff86de56942992d03a98b9cf144
- **XOM** · Panama NGL Pipeline Decision Coming: Who Gets The Bid
  - SeekingAlpha · 2026-09-17 05:21 (ET) · https://finnhub.io/api/news?id=870349255bd49a93e5c7b9e198a8acc813421ee61b7a4cf5fec9e0bfda5f50c1

### 헬스케어

- **UNH** · UnitedHealth Group Incorporated (UNH) is Attracting Investor Attention: Here is What You Should Know
  - Yahoo · 2026-09-17 09:00 (ET) · https://finnhub.io/api/news?id=1957e7874a541542bded9f7ce45dd15d286e80c2ca6c8994e60b1f0a5ad05261
- **UNH** · Charles Schwab, UnitedHealth And Cleveland-Cliffs: CNBC’s ‘Final Trades’
  - Benzinga · 2026-09-17 03:31 (ET) · https://finnhub.io/api/news?id=d0573a7b47114c789f926d1ea0a14e1fb05e97d846ab26128a3e6da3c7cbaa88
- **UNH** · 3 Health Care Stocks Built For Higher Rates
  - Yahoo · 2026-09-17 03:13 (ET) · https://finnhub.io/api/news?id=4c0c1b40c39b4cd3cde08377f58d6a5a0e9a8ef017f648fcbdfe8c5296450c0c

### 소비재·유통

- **AMZN** · Discover which dow jones stocks are making waves on Thursday.
  - ChartMill · 2026-09-17 15:10 (ET) · https://finnhub.io/api/news?id=dfb76a66e1436e85948b341453048bdf27d660ffca2da6ee1a728671127df0b6
- **AMZN** · Wall Street Breakfast With Steven Cress (Generac, Amazon, Powell, Kroger)
  - SeekingAlpha · 2026-09-17 13:50 (ET) · https://finnhub.io/api/news?id=3c31abe1f83ec660d5bd379baca449bf1ab93f6234e714b3027b0eb34d80871b
- **AMZN** · These dow jones stocks are moving in today's session
  - ChartMill · 2026-09-17 12:40 (ET) · https://finnhub.io/api/news?id=19743c4c516fff44e17aef6ad8aee7e45aa5ec507e86f2f5d35e75dfae85174e

