# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-09-26 · 생성시각(KST): 2026-09-26 06:31
# 출처: Yahoo Finance chart API · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,805.75 | +0.50% | 7,767 | 2026-09-25 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 30,921.75 | +0.50% | 30,766.75 | 2026-09-25 17:00 |
| 다우 선물 (YM) | `YM=F` | 52,180 | +0.90% | 51,717 | 2026-09-25 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,859.9 | +0.11% | 2,856.8 | 2026-09-25 16:59 |

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
| 금 | `GC=F` | 4,320.5 | +0.52% | 4,298 | 2026-09-25 16:59 |
| WTI | `CL=F` | 92.44 | -2.29% | 94.61 | 2026-09-25 16:59 |
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
| S&P500 지수옵션 (SPX) | 1.062 | 1.414 | 2,413,921 | 2,563,535 | 29,858 |
| 나스닥100 ETF 옵션 (QQQ) | 0.984 | 1.405 | 4,386,939 | 4,317,399 | 11,710 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **Reuters** · Trump warns Xi over Chinese support for Iran, receives assurances, US envoy says - reuters.com
  - 2026-09-25 14:59 (ET) · https://news.google.com/rss/articles/CBMiuAFBVV95cUxQS3NaNENZd05ESDQwSFdrTGwyLUtGX3NzT1NiR0tzbWwtM282dHRxbkxLYTk2b1Rkd01xQldYM2ItTlNRV01wbnhDMWpZVkliRnBhMlFWYVg1VHh6bjRCVkQwVGFFamhhWWpJa0p5aHlVRkJpblI1UUZJeDN6VFg1Z1hhdGFBSklFN2ZyVjZ0b1IyNUpoMU5GN0tmTlZPMExVNFppU2ZSRGFwcW1QSElZaktmS3pXSElm?oc=5
- **CNBC** · Microsoft gives Copilot a much-needed overhaul, and the stock deservedly soars
  - 2026-09-25 14:38 (ET) · https://www.cnbc.com/2026/09/25/microsoft-gives-copilot-a-much-needed-overhaul-and-the-stock-deservedly-soars.html
- **Reuters** · Hurt by Trump, Senate Republicans plan to bolster affordability credentials before midterms - reuters.com
  - 2026-09-25 14:05 (ET) · https://news.google.com/rss/articles/CBMiywFBVV95cUxNLVpEek9KREFnOGlnd1c3RldyaGpVZ3BJUjdWemtCekdlWG5Qem9jXzJpbFpSTHNNTUFIYWtJM1JwdEgyTUFJTWYtZnBQWTJGZHJUS0tQX080Y1ZtS2Z6VHZOX1NiY2h0ZU5iWW9ZMk1yR2QyNGRGYUxMNzdRbzZ1VkFKaDVfM3ZZXzFVLWxMdFNIWG0wS01WN0xJY3VNQUFxaTFLZFp0dkdCTlowcXFSWklJem5HOU1FeDhXSjFuZzRWREpJWWI0MlExdw?oc=5
- **CNBC** · The iced coffee debate reflects 'everything wrong with hiring right now,' says career expert
  - 2026-09-25 13:50 (ET) · https://www.cnbc.com/2026/09/25/iced-coffee-job-interview.html
- **Reuters** · Iran will make no nuclear concessions, Iranian official says - reuters.com
  - 2026-09-25 13:08 (ET) · https://news.google.com/rss/articles/CBMiswFBVV95cUxORVpYNWQxeFFCcXEzQTZQdkM1LTJpVWc2RHpwOWtxbzV0OHg2aE12UGV1Y2VOQUN4WHdvOVB4YzBGT0ltckk5d0hDZGZUVXk3YWs0WnA5R2xjNmNBbkhHRzNra2pIQVlLa1pNQ29OV1QxQVdSTWJnaWZEYkVaaXJXa3d4cHVvV1o5VGlpWFRjUG9HVTFoMWw4TFZwNlI4aHJwQjU0UVRuZzJISFp0ZU9YQUw4VQ?oc=5
- **CNBC** · 10-year Treasury yield hit a 19-year high—and some investors see opportunity to buy bonds
  - 2026-09-25 12:40 (ET) · https://www.cnbc.com/2026/09/25/treasury-yield-buy-bonds.html
- **Reuters** · EXCLUSIVE: Qatar Airways retires idle A330s and sends pilots to RwandAir as Iran war drags - reuters.com
  - 2026-09-25 09:33 (ET) · https://news.google.com/rss/articles/CBMizAFBVV95cUxNZU95VVVfeElqRlJLSHBPWFg3bE0zRjdvVFNIWGxSZF8zcDB4R2poelQ2MUFWR3Y2Y2FlSEp2OVVBcjdxSC1jNWhDQVhHQlpMbnp3SlZKR0ZFT0t4LVVwTEVrOUhhN0taRkh1SHAzM2VfeG0wTjhTcG12RXJCLW9WUVltTGlFb2dUdGdINl9fUktFcGg1UEhuQlY3WlU1ZUxGdG10ZDA3RkozdmE4aW9PSC1qaFJfcFQ1M08zVERyMVJOV1BzWDFRT0NKMjk?oc=5
- **CNBC** · Airlines waive flight-change fees ahead of nor'easter
  - 2026-09-25 08:52 (ET) · https://www.cnbc.com/2026/09/25/flights-storm-new-york-boston-east-coast.html
- **Reuters** · UAE markets decline after warning on regional air travel - reuters.com
  - 2026-09-25 08:17 (ET) · https://news.google.com/rss/articles/CBMiqwFBVV95cUxPdmc1cG4yNlZ5Z2FjX3VJcHhsVDJmX0JMTFdKZ2JBODlNY3RYRS1VeWNhbXJXTlRTTEhXRUlualU0dHo1SzU1b3hjUFVHUlhpLUhhZk11WVU0dlFDcHRXaTN1ZEctd0pXaEFxQnAySlJiMzNOZGNFWk9qZUJNaThzOVhmNk5NeWQ3U2NTMFJuSGw0LXdoUHVXQTdiRXZPc2ZaQ1hoVS1zczFnUzg?oc=5
- **CNBC** · New study reveals the estate-planning choices that are likely to pit heirs against each other
  - 2026-09-25 08:00 (ET) · https://www.cnbc.com/2026/09/25/study-estate-planning-heirs-legal-battles.html
- **Reuters** · Three Iraqi airports suspend Iranian flights starting Friday, sources and state media say - reuters.com
  - 2026-09-25 07:24 (ET) · https://news.google.com/rss/articles/CBMizwFBVV95cUxORXVfSjUybmdXOEJyMC00eFFVaWQzeUJUTElQSS1GMVoxODJsVHYwZVBGNl9jdXdnLU1OVERHaDdIVFdtRXROU2EtTWk4bnlUSklUV1F0ZTZrVzFONzMyOGtna3VFa3lqZmJBVkZvWVlBZUN3dGp5S0dFSFVJVGNVRWcyZkpyVkl5d3FUcmJIM01BNEpFVWJRZ3FFa0JkbUlidl9SSTJRNWRyN29WaVZRbXM3RVRVU2NSYkppQjdHYlVZUWRIdXBnVWhJVzJtUUk?oc=5
- **Reuters** · Pact with Saudi and Pakistan could expand to Muslim world, Iran, Turkish speaker says - reuters.com
  - 2026-09-25 06:01 (ET) · https://news.google.com/rss/articles/CBMiygFBVV95cUxQSU13N2RRWHBoTWR0LUNPRUFQb0FHckVYX1FwTG5sMXFWUHlHeFhvYURrbWp1R3pfVVFIYXUwZWN5c3RsWjhBVDNyRHBsQ2RCV2U0ZndOMFdKR2tNZ1pWT1FsSHl4TC1jMmdOb0wwQldnVTZRNEJBOFl6RWs3TnE3LThMSGdUMmJib2hNdGZhQlhQWlc3ai1nRWJlZ0hTT21MYVR3YzlPdFhqSWl6MnBjN3JDcGFmY1U1VHZpXzh1WHpmOUpvZ1BZR2JB?oc=5
- **CNBC** · Pharma stock soars 150% on injectables deal with Wegovy maker Novo
  - 2026-09-25 05:58 (ET) · https://www.cnbc.com/2026/09/25/wegovy-novo-nordisk-obesity-drugs.html
- **Reuters** · How Trump's diplomatic week exposed the limits of his power - reuters.com
  - 2026-09-25 01:03 (ET) · https://news.google.com/rss/articles/CBMioAFBVV95cUxNWUNJQ25mYi11NFg0WjVHdEZaSjVqMHhQS0NIT2tfQjc5UF9EZUpGWUNWZW40VGlmZjlhRFVZTkRicnh3UTlERy1vcU9majF6em4wYlRVN1V5S0RaTnpmR0VDdDV5VzBqNHY5dWNuWEJtdkF3VWNfQlVLbDc4S19Zb1Y1MzYxN2kwNGhVRF9uVUF0RTZPaVoyX1NvRmRkeFVG?oc=5
- **Reuters** · Crude oil exports via Hormuz at 33.7 million barrels this week, data shows - reuters.com
  - 2026-09-24 23:49 (ET) · https://news.google.com/rss/articles/CBMixgFBVV95cUxOZXFDTzBxRUNwS0tCV0ZKaDI2Wm5RRXdCLVBYLW12YVdIeDZCX09tV3RKcEhHQ0xEM0JVMXZ1UWpiVW9wMDlkU2Y0b2ozbmZyX1I4RHhyUWphREs3NDFhaTJhcTRTbFRiY2lTV0RVMEo3RlM4X2pBRlB2Y1AtSENKSGs1VUNKZXJTSnVfLUZWMjdYZTgzOTdMenZ1bFhjejRoQXBYUWowN05OeWZ4ZGloS09GLU1aTFZtSE51Qk9hVTBlX2VwSUE?oc=5

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Microsoft Just Raised Its Dividend by 8%: Is It the Best Magnificent Seven Dividend to Own?
  - Yahoo · 2026-09-25 15:50 (ET) · https://finnhub.io/api/news?id=fc8a7fe2181e5a5962472dbbaf82e3452808c7ac88cec1fa8a817e447eb5b4c0
- **NVDA** · 3 Nuclear Stocks Powering the Grid Long Before AI Made Them Trendy
  - Yahoo · 2026-09-25 15:50 (ET) · https://finnhub.io/api/news?id=e4d6513cae675b4e855c140c620f48d7ef5c5d9790f29b431a4dc715ca3c5b37
- **NVDA** · The Case For and Against Fidelity’s Fundamental Large Cap Growth ETF
  - Yahoo · 2026-09-25 15:45 (ET) · https://finnhub.io/api/news?id=496a8092000d3bb36a66cf74a465f54c12c984b9889abef523093c4c9616344c
- **AVGO** · Is AMD Stock Priced Right Against Its Chip Peers?
  - Yahoo · 2026-09-25 14:34 (ET) · https://finnhub.io/api/news?id=5c6b800e68aa5b0b9ee1b4ce254fb0debe91d47ebbea96ef2d9c3cc12006edeb
- **AVGO** · Marvell’s 203% YTD Surge Sets High Bar but We See More Runway Ahead
  - Yahoo · 2026-09-25 13:30 (ET) · https://finnhub.io/api/news?id=d85e8e0969bd6e4f4c09395e170f78ee2f48aa2405fa5512bd17578458bb5cc6
- **AVGO** · How to fix overvalued AI companies and a McDonald's market play
  - Yahoo · 2026-09-25 12:57 (ET) · https://finnhub.io/api/news?id=49fea019b16dc160de6929beb18c0e28fa698c8ba6793055f4818ac8b4adf549

### 금융

- **JPM** · Exploring the top movers within the dow jones index during today's session.
  - ChartMill · 2026-09-25 15:10 (ET) · https://finnhub.io/api/news?id=57fe018b3402c0dd7a0c4f897a79d04dab37b2ed6e6f995fcb25f081db824dbe
- **JPM** · J.P. Morgan Loses Fight to Overturn $4.25 Million Award to Advisor Fired Over Super Bowl Platter
  - Yahoo · 2026-09-25 15:08 (ET) · https://finnhub.io/api/news?id=4af8cec1efa459d3a6fa1397ffc05f13bba2d15aaf6977d55ee0c15b3a606b26
- **JPM** · Chase Launches Data Security Center to Help Customers Manage Connected Apps and Third-Party Data Sharing
  - Yahoo · 2026-09-25 13:15 (ET) · https://finnhub.io/api/news?id=811cc89c87633a82c163d8d5d7843c94a5f0575573751f479e59c71092076980

### 에너지

- **XOM** · The 8:30: Trump-Xi summit takeaways, an interview with Microsoft CEO Satya Nadella
  - Yahoo · 2026-09-25 11:04 (ET) · https://finnhub.io/api/news?id=96faf258040b3f62ee6f5c2eea28efc778e4cd9a8ae7f9227342a08663804108
- **XOM** · Chevron's Cost Discipline: Turning Efficiency Into Lasting Value
  - Yahoo · 2026-09-25 09:17 (ET) · https://finnhub.io/api/news?id=9a523b27c8e544abb4996339bf826d384b550b28756ceb8ac79f8d73801f2701
- **XOM** · Vietnam’s BSR inks crude oil supply agreement with ExxonMobil
  - Yahoo · 2026-09-25 06:41 (ET) · https://finnhub.io/api/news?id=6ebc5b3b9918fca3ccbdcde0f2f828465abe6b027b983930f688e4ef6f2992f3

### 헬스케어

- **UNH** · Humana Jumps 7% on Barclays Upgrade and $515 Target; UnitedHealth Nudges Higher
  - Yahoo · 2026-09-25 13:59 (ET) · https://finnhub.io/api/news?id=0d41d472a3c61877a78173ca1812c78e13c4a7ab5ff1180522c81f12f81fe3e9
- **UNH** · Encompass Health Adds New Capacity With First Small-Format Hospital
  - Yahoo · 2026-09-25 09:54 (ET) · https://finnhub.io/api/news?id=53e6484869ce7cd1fd209f1d4610527e15e4abc4b99fbbe0f9708eda52d45897
- **UNH** · Mark Cuban Says He’s ‘All for Universal Care’ But Warns It Won’t ‘Automagically Work,’ and the ‘Best First Step’ Is This Warren-Hawley Bill
  - Yahoo · 2026-09-25 09:00 (ET) · https://finnhub.io/api/news?id=eec6c86050b8ffc62458252617932e28de184654677dbb4e310a5c4ffd58993b

### 소비재·유통

- **AMZN** · Amazon Stocks Move Lower as Anthropic Commits $11.6 Billion Elsewhere
  - Yahoo · 2026-09-25 14:15 (ET) · https://finnhub.io/api/news?id=082e743010acf82d7984c545e135a59cf1b8536211c4f56d84991c43692b476f
- **AMZN** · Most active S&P500 stocks in Friday's session
  - ChartMill · 2026-09-25 14:05 (ET) · https://finnhub.io/api/news?id=05bab3b9b2fcb41175871378adc80d9d2b6f43067350ad7207724a3c97045a4b
- **AMZN** · Quantum Is a $850 Billion Dream. Microsoft and Amazon Are Betting Big on It.
  - Yahoo · 2026-09-25 14:02 (ET) · https://finnhub.io/api/news?id=aca2b2c724f93957fd3158140b34a280985b39d71bbc2d7204ba1a09ea8678a6

