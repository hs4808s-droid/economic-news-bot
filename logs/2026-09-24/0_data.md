# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-09-24 · 생성시각(KST): 2026-09-24 06:30
# 출처: Yahoo Finance chart API · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,772.75 | -0.75% | 7,831.75 | 2026-09-23 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 30,776 | -0.81% | 31,028.5 | 2026-09-23 16:59 |
| 다우 선물 (YM) | `YM=F` | 51,868 | -0.79% | 52,279 | 2026-09-23 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,859.8 | -1.86% | 2,914.1 | 2026-09-23 16:59 |

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 15.18 | +2.08% | 14.87 | 2026-09-23 16:15 |
| VIX9D (9일) | `^VIX9D` | 13.45 | +2.36% | 13.14 | 2026-09-23 16:15 |
| VIX3M (3개월) | `^VIX3M` | 18.11 | +0.17% | 18.08 | 2026-09-23 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 88.6 | +3.30% | 85.77 | 2026-09-23 16:15 |
| SKEW (테일리스크) | `^SKEW` | 146.15 | +2.79% | 142.19 | 2026-09-23 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 미 10년 국채선물 | `ZN=F` | 105.03 | -0.91% | 106 | 2026-09-23 16:59 |
| 금 | `GC=F` | 4,322.7 | -1.23% | 4,376.4 | 2026-09-23 17:00 |
| WTI | `CL=F` | 92.71 | -1.99% | 94.59 | 2026-09-23 16:59 |
| 달러지수 (DXY) | `DX-Y.NYB` | 101.14 | +0.70% | 100.43 | 2026-09-23 17:20 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.193 | 콘탱고 |
| VIX / VIX9D | 1.129 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.052 | 1.410 | 2,226,198 | 2,341,329 | 30,470 |
| 나스닥100 ETF 옵션 (QQQ) | 0.877 | 1.390 | 4,547,953 | 3,986,300 | 10,826 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **Reuters** · Iran's Pezeshkian accuses Trump of 'bullying mentality,' vows no surrender - Reuters
  - 2026-09-23 16:16 (ET) · https://news.google.com/rss/articles/CBMiwwFBVV95cUxNMjhvWl9UZXFUYjJ2MHhOTWJvdFgxYUN2b1NuVXYtYTNwVXEzS0J6cVVrZTVBYWxmNHJTLUZ6SG55eFE4azRCZVZDUloyUnVtNE85dGp5Q2xDUmtOVEdVUl8wenVVdUZpWm5ONE5OQUhSYjd1VWNfNm9Ib3g0VjBqdXItY1pTdW5XekI5MFJOWGpoazl2Y29Zb2dMSWx6S2VRckFRVm1WVUlYUkQ1S0dGM3piVGZ6TjgyNGZXcWNFVWFxN2M?oc=5
- **Reuters** · Wall Street ends down as oil prices, Treasury yields rise - Reuters
  - 2026-09-23 16:01 (ET) · https://news.google.com/rss/articles/CBMisAFBVV95cUxQeEU4dTJoZV9XeFR4cENDYXhRMG1Tb3E4aHFNc1RoUEpHeVJNYmtnS1RHb0lVdzg5S1BKelZiUkR4eER2bkFZc0tjcWxlRFEyODRlVlRoNlNmblFabUhsZnJwTllqbmd2RUQ5NmI0M0JVc3B3aVkwcmt0SE9vTERyLVhFRzIybV9OMU94QlF6UGdORGhJZldzTUJ6X1F2TjhTRVpLNDZWeVN6WU1hR0ZLRw?oc=5
- **CNBC** · OpenAI and Anthropic CEOs push for AI cooperation at UN after Trump rebuffs 'globalist scheme' to control it
  - 2026-09-23 15:55 (ET) · https://www.cnbc.com/2026/09/23/altman-amodei-un-ai-safety.html
- **CNBC** · A rare Microsoft bear warms up to the stock. Here's what changed their mind
  - 2026-09-23 15:53 (ET) · https://www.cnbc.com/2026/09/23/a-rare-microsoft-bear-warms-up-to-the-stock-heres-what-changed-their-mind.html
- **CNBC** · Tesla Roadster reveal is creating a unique options opportunity, says Mike Khouw
  - 2026-09-23 14:52 (ET) · https://www.cnbc.com/2026/09/23/tesla-roadster-reveal-is-creating-a-unique-options-opportunity-says-mike-khouw.html
- **Reuters** · Oil settles up around 4% as Iran's president vows to never surrender - Reuters
  - 2026-09-23 14:48 (ET) · https://news.google.com/rss/articles/CBMipgFBVV95cUxOeFhpNFFXWGZ2azRGVllBNXpwLXZQeTFySkY3Vi12SmpTNmMyY09oU3RMa3Rqb21pNUl0ZGhSbVBWQnZBOXdOb19xSlU3TnNra0F6OWowVHp5RHlSblJGTVhXandWeEFJaDBOTi1VcjdrSjVNeGVJZnVjeUJXM3NVYUgxZ28yQkVuWXNhc1pxd093NVVBTHZnWm40c01OS00zZHAwRWVR?oc=5
- **CNBC** · Bond yields spike and stocks drop — plus, why Boeing is bucking the trend
  - 2026-09-23 14:42 (ET) · https://www.cnbc.com/2026/09/23/bond-yields-spike-and-stocks-drop-plus-why-boeing-is-bucking-the-trend.html
- **Reuters** · Rubio, after Lavrov talks, says Russia has also voiced interest in 'limited ceasefire' - Reuters
  - 2026-09-23 13:53 (ET) · https://news.google.com/rss/articles/CBMiuAFBVV95cUxOd3MzYlZCZEgzcUlDYjZORWhrZEFaczhhdjlTV2tXYW9lcjk0V1BIZlpqNVM1d21rQU1GYi1vX1p2QWtLV2MtRFNUZ2VuZzRmSkNCUGZibHFPVjF1NjdBUkhrU2NmR3pzZk4wdDFSdFdfWkJfX19wdll1LUROTGVVTkF6RUQzSmZ2NXBsRi14WHJnZkJiajIxUXVfbnc5Wk5zRXBncjZhRHNveHl2Yl9MeE9GWHliX0dW?oc=5
- **Reuters** · Iran, US still far apart in peace talks, Iranian official says; Pezeshkian vows no surrender - Reuters
  - 2026-09-23 13:38 (ET) · https://news.google.com/rss/articles/CBMiswFBVV95cUxPWjBhV01rbEcwcTJwZjdTbjF1ekxtTnZiRzc2b3p3d1NRVjZZWEUyM0gtQlFPeXBWX0hRdlVpMS11d01GVHpiQmdVY1FlN3dIZUQ4eDRTcTZBRFJxYjRMeVp3eWg5M0Q1YWw5a2N3cEhOUHlhOWRxNmZQTjVLenl2MjRrSENSaUYyTkFhc0ZNdnNoNnN0VXZOM2NhRGRLOWcyUEtXUk9wbThsdXBzc1ZYQW5iRQ?oc=5
- **Reuters** · Trump plans grand spectacle for potentially tense Xi talks - Reuters
  - 2026-09-23 13:07 (ET) · https://news.google.com/rss/articles/CBMipAFBVV95cUxNaVBYbDJtMVNJRWNyaDlFLXhaWDBIbERYTkRRYVliRGR3eklaai1JTHBhZ2tOTjBqRk1CSTFvOENrMjduNVhWRUFiNzRsbDg0Y1ZJdFlKTy1oSUVBaUpTNlkwVS02emZkaHVUZVRaZjJleVhJWF9uY09xSHZMOVh3YXh2aVMwV09HeGJGSXVZTWZCRE5iNHdNdDI0bDU5aXZvMjJzMQ?oc=5
- **Reuters** · FTSE 100 muted as energy gains offset broader drag; Iran, Xi visit watched - Reuters
  - 2026-09-23 12:49 (ET) · https://news.google.com/rss/articles/CBMikwFBVV95cUxQYm9UZS1CY1Z1eU5IVFFEUFd6V2VCbW80eWgwMjk4Z3ZyWDJSSk9JZ1dXY3oyd3oxX2RyRmJMT0o2SmFEOEhMWG4yMnBrUEdyQ09MVERNWkx0UDFmOFNIdV9NXzBON09NSFcyM2RlRmdnbUJvcGQ3RFhPNWJYeVlPbU5zRGp4NVU3VmJZNUZvTDZvRnc?oc=5
- **Reuters** · Trump Gaza board pitches $2.45 billion Gaza plan, implementation uncertain - Reuters
  - 2026-09-23 12:47 (ET) · https://news.google.com/rss/articles/CBMiwgFBVV95cUxPVEN3dTZ4OF80SGwwTXpoYTA1dks2bjlIZk5KbVJPVFdGYTJXM0s5YVZwbWRKYW93ODZ6OHlWRFpHYVlqUTdnSDlTYzFuZXhRbnM5bHhwX3RBVXZFS29nOG9rTWNyX0hVZE1FUmhrQ01MLU9XODg2MjR0azNMRmVOcUt4RU0zYTlDZjJYV3ZsYmFhdGxxbzhBX2dGT21qbGxEbHE1T253R3lSRDhYUm1HQnhUWENYTXJyczk0d3Z2RWNHUQ?oc=5
- **CNBC** · Meta is having a ChatGPT moment with Muse. What is it and what makes it so special
  - 2026-09-23 12:22 (ET) · https://www.cnbc.com/2026/09/23/meta-is-having-a-chatgpt-moment-with-muse-what-is-it-and-what-makes-it-so-special.html
- **Reuters** · Iran's Bank Melli shut out of UAE for regulatory breaches - Reuters
  - 2026-09-23 11:25 (ET) · https://news.google.com/rss/articles/CBMingFBVV95cUxNMS1kUGNJbExEU0FTbXR2bHVqa3hRSVlxRUlYU2tMQjFTd2txUHE2MUg0VGJ2WENkZUc2QW1yVWlhRFh3Rnk1MU1UZEhfYkpQSXF5eDN1ajRaR20ydEZCOEhqSjlQTFh0N3dndlprS1FQeTJaemxiWGtHMmc1RFFaa3R2SXZlYXFnUTBodG53Mk9PVHpRVkFvbXVwbUZSdw?oc=5
- **CNBC** · History rhymes for Meta, and our plan for Micron ahead of earnings
  - 2026-09-23 11:25 (ET) · https://www.cnbc.com/2026/09/23/history-rhymes-for-meta-and-our-plan-for-micron-ahead-of-earnings.html

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · How Qualcomm is targeting agentic AI with its 2 new smartphone chips
  - Yahoo · 2026-09-23 15:50 (ET) · https://finnhub.io/api/news?id=9b514b2b2e92ccff60d564b1e6c774f3f7ef3a67f6a4635adcda16bffb2ca133
- **NVDA** · Meta's Muse AI Agent Sees Fastest Adoption Since ChatGPT. Time to Buy Meta Stock?
  - Yahoo · 2026-09-23 15:38 (ET) · https://finnhub.io/api/news?id=beca19f3797ce7c57659a319b597d7208cbf7fc80593afa63e6098eaa64d6209
- **NVDA** · CoreWeave Just Scored Another Big AI Win
  - Yahoo · 2026-09-23 15:33 (ET) · https://finnhub.io/api/news?id=5a4868f0d5547abfec3e34fedcee0065f4886fde9d6889fb91c46e26f323aeff
- **AVGO** · Marvell Stock Ran, But Did It Tell You When?
  - Yahoo · 2026-09-23 15:05 (ET) · https://finnhub.io/api/news?id=2f7279522895398583ce232d85a3df7ffd88b1b184c3613735df6f4de2d36bfc
- **AVGO** · Broadcom Just Made a Move That Further Solidifies My Decision to Buy on Repeat
  - Yahoo · 2026-09-23 11:45 (ET) · https://finnhub.io/api/news?id=623010a7e650b172d6b11e5c67b799cd5097dd09e6271f81c105a41e123ee016
- **AVGO** · What Changed In AMD's Story?
  - Yahoo · 2026-09-23 11:00 (ET) · https://finnhub.io/api/news?id=a60be5a8fc971825ee0b45d3febf4b74c44861e002b00ca57bd63b80c08b71a8

### 금융

- **JPM** · Rollins, Inc. Announces Availability of Recorded Fireside Chat from J.P. Morgan Annual U.S. All Stars Conference
  - Yahoo · 2026-09-23 14:18 (ET) · https://finnhub.io/api/news?id=b0e9ec16ebca19f762242c485fa2db55a714c0df7abeb0c899ddf10bde9a21b4
- **JPM** · Why investors should learn to harness volatility
  - Yahoo · 2026-09-23 14:15 (ET) · https://finnhub.io/api/news?id=9065c5919e963e1523f981ce978c9d2fce3b9d08f213ff0bfa8b1a4c6b9b8a35
- **JPM** · Jamie Dimon Says AI Spending Could Hit $1 Trillion in 2027 But JPMorgan CEO Warns it Could Add 'Little Bit' to Inflation: 'That’s Like 1% Increase to GDP...'
  - Yahoo · 2026-09-23 11:00 (ET) · https://finnhub.io/api/news?id=dfa4b0fc7e9fcb1e73ba9e9fa1aa9aa29aebe211ed02710f9deb4d3764690e5e

### 에너지

- **XOM** · Lincoln Property to repurpose north Houston eyesore Greenspoint Mall into industrial park
  - Yahoo · 2026-09-23 14:45 (ET) · https://finnhub.io/api/news?id=5f8b1e4487e96d75b484a8d02d33bd9415376f5b28c9d57c4d00a722b6c956aa
- **XOM** · If Hormuz Stays Shut, How High Can Exxon Go?
  - Yahoo · 2026-09-23 11:50 (ET) · https://finnhub.io/api/news?id=d26c933aa682d30b5f91ddcbf13e8fa863edf1768a388e8982fb0b2d2027c5b8
- **XOM** · How ExxonMobil's Balance Sheet Helps Navigate Oil Volatility
  - Yahoo · 2026-09-23 11:08 (ET) · https://finnhub.io/api/news?id=7bdee30ec8a2726f6d66b346edcfc69b1c91a8a57b351a12bfe48cf9e3d1311e

### 헬스케어

- **UNH** · Wednesday's session: top gainers and losers in the dow jones index
  - ChartMill · 2026-09-23 15:10 (ET) · https://finnhub.io/api/news?id=bb4171ba2315271ffac02d3155801d13d6e8d838f8d2b0f43020c3b412215389
- **UNH** · Did UnitedHealth Name The Fix Before Its Stock Ran?
  - Yahoo · 2026-09-23 12:26 (ET) · https://finnhub.io/api/news?id=b94d47bbce0ea7953955a6a923c93c2c6a1272c92b020e9b95530b838666b05c
- **UNH** · UNH vs. MOH: Which Managed Care Stock Looks More Attractive?
  - Yahoo · 2026-09-23 11:16 (ET) · https://finnhub.io/api/news?id=55cd46b195e669b60c4214efaec765767195d4207f058c904f14248d3ed7b673

### 소비재·유통

- **AMZN** · Sector Update: Tech Stocks Fall Late Afternoon
  - Yahoo · 2026-09-23 15:43 (ET) · https://finnhub.io/api/news?id=3aa2d05dbfb9cccf295039bfda103476f6d1d985eb2b75caef6ed55770b1f407
- **AMZN** · AMZN Stock In Focus — Amazon Reportedly Taps Former Employees And Laid-Off Staff In Accelerated Push For AI Talent
  - Yahoo · 2026-09-23 15:28 (ET) · https://finnhub.io/api/news?id=196f924979804e276de84457bebd7237a094f763d82cb5905216e16fff10f6c4
- **AMZN** · Amazon blocks Meta's Muse but Shopify opens the door
  - Yahoo · 2026-09-23 15:13 (ET) · https://finnhub.io/api/news?id=1cae72a9d45d48d3f6f9c2c08042e8ed25382c22178574ae0cc46cbaceea1401

