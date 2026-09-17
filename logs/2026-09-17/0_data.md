# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-09-17 · 생성시각(KST): 2026-09-17 09:46
# 출처: Yahoo Finance chart API · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,663 | +0.97% | 7,589.25 | 2026-09-16 20:36 |
| 나스닥100 선물 (NQ) | `NQ=F` | 29,463.5 | +1.76% | 28,955 | 2026-09-16 20:36 |
| 다우 선물 (YM) | `YM=F` | 52,203 | +0.17% | 52,115 | 2026-09-16 20:36 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,901.7 | +1.00% | 2,873.1 | 2026-09-16 20:36 |

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 17.71 | +2.97% | 17.2 | 2026-09-16 16:15 |
| VIX9D (9일) | `^VIX9D` | 17.4 | +1.10% | 17.21 | 2026-09-16 16:15 |
| VIX3M (3개월) | `^VIX3M` | 19.73 | +1.91% | 19.36 | 2026-09-16 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 95.41 | +0.53% | 94.91 | 2026-09-16 16:15 |
| SKEW (테일리스크) | `^SKEW` | 145.95 | -0.45% | 146.61 | 2026-09-16 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 미 10년 국채선물 | `ZN=F` | 105.88 | -0.29% | 106.19 | 2026-09-16 20:36 |
| 금 | `GC=F` | 4,322.3 | -0.24% | 4,332.8 | 2026-09-16 20:36 |
| WTI | `CL=F` | 101.43 | -4.16% | 105.83 | 2026-09-16 20:36 |
| 달러지수 (DXY) | `DX-Y.NYB` | 100.3 | +0.65% | 99.65 | 2026-09-16 20:36 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.114 | 콘탱고 |
| VIX / VIX9D | 1.018 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.286 | 1.402 | 2,147,517 | 2,761,234 | 28,846 |
| 나스닥100 ETF 옵션 (QQQ) | 1.366 | 1.397 | 3,129,348 | 4,273,311 | 11,324 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **Reuters** · US officials met Iran-backed Houthis in Oman over the weekend, sources say - Reuters
  - 2026-09-16 19:13 (ET) · https://news.google.com/rss/articles/CBMivAFBVV95cUxQNVlvS0o5eGw3QnFsN1NoVTdWbElpWFhDLS14WFpCb0duUUJMYzVoS2VZSHpqQUxQWXVtN0VadTJHNnNhYlNCZmlhMDVJQVl3Y2pqTjQ2bmRuVEdDR3FKY0VGQ1Uxc1pwVzcteUNJSTB0Mm9wZHRIWUdTUmVLTUVsTEpYMFRmN21ENmtrbnZvTm9XZjZsOU5DN2JHWUYtdm5OcFJiUzJzZTVBeUJ3a3NmSEJROEFxekl5RGlMNw?oc=5
- **Reuters** · US House passes Russia sanctions bill championed by late Senator Graham - Reuters
  - 2026-09-16 18:54 (ET) · https://news.google.com/rss/articles/CBMivwFBVV95cUxQdGtKVXRwQXN1c3J1bnpHcXNvRzJEbE9DVEVqV3JOQWttNmNhbHR3ekdVNWhKY1VUSHVuUmZvLXJILXNXRWI1bWhpSnJNV1BqUGhESUl0dGFpUUJDVmtvTmZpeV9ZR3F3bUhJZGFfNllUdENsemJHd0xubFBzUy0yanFES0xxX0FPc1p4UHpNQnh6VU1NSmhwOHp1ZHdka0ItUGlKN0NlcE1Id2J1RjVpcUVZLVZlcFZ6bnd1R0FMVQ?oc=5
- **Reuters** · Israel, Morocco agree to upgrade diplomatic ties, Israeli government says - Reuters
  - 2026-09-16 16:11 (ET) · https://news.google.com/rss/articles/CBMivwFBVV95cUxNUktRelVFeVlmRUh4NjlTNU5vVFNRZDBsaE9Wd2YybUlQYTNSY0NONXhUMjJEcTJzSnRjaWZNM2pNN0E4YnVyTVdLZVhOX2FmM0l1MXU2SU01NXR2aWw3bC1IY2lZM3BZbzZQQ01kN3loX09KU2x5dTd4RXl6cXU0TUd5eVppY3NSbXpibXBnRmxyeHJyUUtjME5FU2tBaHZyMDB4RXgyQ3E0dnh5X1lZY2oxOWpqQTdCQlJiZFZtYw?oc=5
- **Reuters** · Top Democrat on US House committee will not support Israel bomb sale - Reuters
  - 2026-09-16 15:37 (ET) · https://news.google.com/rss/articles/CBMixgFBVV95cUxOYXVjVVhxZXk4MjhZM2JLYzR1cDlpdlg3QVozb1RKX0JOcE9GakdvYjBTckJxMF9WeFpiWUIyNTJVcS1RV2hHRnFrWHlwcDk1a0dDMGY0ZnVBUnBRdFpVc1FGalhCanpuX2xYSjB0ZnlVTi0yNldoQ2plZEtMSTNNQUV6UDRXSDVLdGVOdFN5M2YtMEFDT0Y3UENyTzRhdFByYk84N090MFlVSnYyUklfWWdodE0zZ05yZGlKbTFQQ3d1RjI0MUE?oc=5
- **CNBC** · Boeing CEO: 737 Max production taking 'a little bit longer' to stabilize than expected
  - 2026-09-16 15:12 (ET) · https://www.cnbc.com/2026/09/16/boeing-ceo-737-max-production.html
- **CNBC** · Fed delivers its first hike in 3 years. Plus, what's moving Starbucks and GE Vernova
  - 2026-09-16 15:00 (ET) · https://www.cnbc.com/2026/09/16/fed-delivers-its-first-hike-in-3-years-plus-whats-moving-starbucks-and-ge-vernova.html
- **Reuters** · Yemen offensive elevates enigmatic Houthi commander's standing - reuters.com
  - 2026-09-16 14:04 (ET) · https://news.google.com/rss/articles/CBMiwgFBVV95cUxNa0FZY0J4cFN1dGZjZEsxUXc5aVlrd2ZJdHF5LWtEcWU2bnJ6aFZ4X1I5WHhRQ3pfZUNfVzJUYlEzbW9lSTdINmtnVFYyUXNBZW5LcXlYQS0zVUNlTllVTUhkR29xaWFhZFlsSTgzU1p5Z3FTSzJtMEpka0lHS0VoZHltRXMxME40Zldtb0xOcWxEekxIOGN5WG5vV2I5NHpZbGd6X21kTzMzT3hnWjVLUDZFejNYeEgzcEJnRFFuQlN5UQ?oc=5
- **Reuters** · US Treasury gathers global financial institutions to advance Iran sanctions - Reuters
  - 2026-09-16 13:42 (ET) · https://news.google.com/rss/articles/CBMixAFBVV95cUxPXzUwU0VnMDVwQm1aTmZIQ25odU1FYXpWRkM4R2ZTMjdwalhFVDJ3dGtWV0szd1hYRVdJY1VlRmdPemJDOG9ONy1FZXUzbWhZRkFiTVVSRkdLX19Za3h2c0RneVpmbjhVdzhiZXRmYTJtc2JwYmFUU085RXBvclZoNkM1Y1AyUGF0RjhoTFRwaHF5WFNNbFlzdEMzSTZNNnhzTHB0N0p1aXdRYjY5SUpXVHhRVEtsclZPUkNGZEpCdzBvLVJu?oc=5
- **CNBC** · Lagging sector looks poised for a rebound. Here's how Mike Khouw is trading it
  - 2026-09-16 13:21 (ET) · https://www.cnbc.com/2026/09/16/lagging-sector-looks-poised-for-a-rebound-heres-how-mike-khouw-is-trading-it.html
- **CNBC** · American Airlines says 30% of seats drive half of revenue as premium cabin rush heats up
  - 2026-09-16 12:55 (ET) · https://www.cnbc.com/2026/09/16/american-airlines-ceo-first-class-seats.html
- **Reuters** · Houthi blitz leaves Saudi Arabia exposed, Iran emboldened - Reuters
  - 2026-09-16 12:38 (ET) · https://news.google.com/rss/articles/CBMirwFBVV95cUxNU210dG1ONGRhN0FKOXF3WUpTLVowR3hJTGlsMVA2LVUtXzlacGVGbE5Hd3VLYktLOEgzYXdBZ3llMzFBdW1RMGJJaUxjRWJHSHRNZmh5T3l5RW9qTDE3Y1NRSFhnVjlEQXR0QzY4Ym0zdUc4MGxNdkZMT2NYVVU1eEtxcUtWYS0tdHpCcmJVXzdXRDZFQU1PeHVuc3I2bnUzb3NBR2pSN1V1YmhMSFFz?oc=5
- **CNBC** · We're significantly trimming a stock that has not gone to plan
  - 2026-09-16 12:37 (ET) · https://www.cnbc.com/2026/09/16/were-significantly-trimming-a-stock-that-has-not-gone-to-plan.html
- **CNBC** · Jim Cramer says this enterprise software stock is 'way too cheap'
  - 2026-09-16 12:04 (ET) · https://www.cnbc.com/2026/09/16/jim-cramer-says-this-enterprise-software-stock-is-way-too-cheap.html
- **CNBC** · Senate is still a tossup, but Democrats now have slight edge, prediction market traders think
  - 2026-09-16 10:53 (ET) · https://www.cnbc.com/2026/09/16/prediction-markets-say-democrats-are-slightly-favored-to-win-senate.html
- **CNBC** · Costco expands Uber Eats delivery partnership to 47 states
  - 2026-09-16 10:31 (ET) · https://www.cnbc.com/2026/09/16/costco-and-uber-partnership.html

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Uncover the latest developments among dow jones stocks in today's session.
  - ChartMill · 2026-09-16 15:10 (ET) · https://finnhub.io/api/news?id=ee741aaaf6d4c596298525d052f23bfe3d78b5929e852d5db39941de9f83365c
- **NVDA** · These S&P500 stocks are the most active in today's session
  - ChartMill · 2026-09-16 14:05 (ET) · https://finnhub.io/api/news?id=3d20960e9c2cadfe673a46daeed5f890004d55a06e129bf7d23e901b6ea94793
- **NVDA** · Micron Technology Has Just Shared Great News
  - SeekingAlpha · 2026-09-16 14:04 (ET) · https://finnhub.io/api/news?id=e916b4f9f5e4f5c515a8f8f4239a819302b19537016ce0e09f3e7203335ca45b
- **AVGO** · Hock Tan Just Guided Broadcom's AI Revenue to Reach $230 Billion by 2028. Should You Believe Him?
  - Yahoo · 2026-09-16 13:05 (ET) · https://finnhub.io/api/news?id=7479728aeecc51178bfe5c1288f857aa3fd5cbf8cf29b6e9ded4d4a967134e72
- **AVGO** · OpenAI’s CFO Just Explained Why Nvidia Is No Longer the Only Option
  - Yahoo · 2026-09-16 11:11 (ET) · https://finnhub.io/api/news?id=386503685a06dad2bb67e4e89421edacc8c9b64c954cb942e26815b28501e35e
- **AVGO** · Broadcom (AVGO) Shares Fell As Slower AI Development Raised Demand Concerns
  - Yahoo · 2026-09-16 11:11 (ET) · https://finnhub.io/api/news?id=149b9189706ec6a32d50aa8aa233c80d8b58ff6fbb72702378fef67dc5d497f4

### 금융

- **JPM** · Uncover the latest developments among dow jones stocks in today's session.
  - ChartMill · 2026-09-16 15:10 (ET) · https://finnhub.io/api/news?id=ee741aaaf6d4c596298525d052f23bfe3d78b5929e852d5db39941de9f83365c
- **JPM** · Can PNC's Record Capital Markets Pace Support Its Fee-Income Outlook?
  - Yahoo · 2026-09-16 13:15 (ET) · https://finnhub.io/api/news?id=90a54c660d1f1197ea7db093b828752fc9c2e1b7801d24cb3ae6c2249dee6d9f
- **JPM** · Explore the top gainers and losers within the dow jones index in today's session.
  - ChartMill · 2026-09-16 12:40 (ET) · https://finnhub.io/api/news?id=a7f4a33ec0874d76807fce9f33e2df62237dd14cd3496691d1338c9a8a2f7b1a

### 에너지

- **XOM** · XOM Keeps Climbing. Should You Climb On?
  - Yahoo · 2026-09-16 19:29 (ET) · https://finnhub.io/api/news?id=7534221ac344c5c53503dc5423a14b49129f15f76c320858103b61d665ba1ebd
- **XOM** · Exxonmobil in talks to return to Venezuela, Bloomberg reports
  - Yahoo · 2026-09-16 17:56 (ET) · https://finnhub.io/api/news?id=42769e2f8782b1f67d1d307ec183c9629b79b693dfaa3b5d005143199e44b669
- **XOM** · Chevron Doesn’t Need Oil to Hit New Highs. Here’s What Could Drive the Stock Instead
  - Yahoo · 2026-09-16 13:30 (ET) · https://finnhub.io/api/news?id=945f88515cefc51b03a2d8a4b506153ff9045413908dc0c60f2a44c5cbb92826

### 헬스케어

- **UNH** · Uncover the latest developments among dow jones stocks in today's session.
  - ChartMill · 2026-09-16 15:10 (ET) · https://finnhub.io/api/news?id=ee741aaaf6d4c596298525d052f23bfe3d78b5929e852d5db39941de9f83365c
- **UNH** · Only 11 of 237 Active Dividend Funds Beat SCHD’s Index
  - Yahoo · 2026-09-16 13:35 (ET) · https://finnhub.io/api/news?id=0d7fe76e4f7b009446dfacc7976e6ecd8041ca5cd67a99bdd0756f0fdefa518a
- **UNH** · The One Cost Line UnitedHealth Stock Has Not Caught Up To Yet
  - Yahoo · 2026-09-16 13:16 (ET) · https://finnhub.io/api/news?id=62893c934108390cb4e84f708579862ec5e7b3b4291db08db0f2465e4946203f

### 소비재·유통

- **AMZN** · The Next Short? Economist Compares Hyperscaler AI Debt Stress to 2008 Housing Collapse
  - Yahoo · 2026-09-16 18:39 (ET) · https://finnhub.io/api/news?id=5381226b9e2c126572bc7a1bc40343514bb578645a0e3628085055863895de45
- **AMZN** · Generac Stock Soars on Amazon Generator Deal
  - Yahoo · 2026-09-16 18:13 (ET) · https://finnhub.io/api/news?id=fc71a99933c41d025d94da073faa19d03e23d9efb14a122e4e1811b9e61fe2d6
- **AMZN** · UPS (UPS) Stock Could Be 40% Undervalued Despite Strike Threats
  - Yahoo · 2026-09-16 18:12 (ET) · https://finnhub.io/api/news?id=9abc7970799f38fb7e0a6a193a57e1484c6f7fef0707afd810209c08e8fb6ad7

