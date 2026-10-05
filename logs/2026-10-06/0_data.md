# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-06 · 생성시각(KST): 2026-10-06 06:35
# 출처: Yahoo Finance chart API · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,830 | +0.68% | 7,777.25 | 2026-10-05 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 31,339.5 | +0.89% | 31,061.75 | 2026-10-05 16:59 |
| 다우 선물 (YM) | `YM=F` | 51,598 | +0.24% | 51,477 | 2026-10-05 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,868.5 | +0.62% | 2,850.9 | 2026-10-05 16:59 |

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 15.52 | +1.37% | 15.31 | 2026-10-05 16:15 |
| VIX9D (9일) | `^VIX9D` | 12.85 | +6.55% | 12.06 | 2026-10-05 16:15 |
| VIX3M (3개월) | `^VIX3M` | 18 | -0.06% | 18.01 | 2026-10-05 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 85.46 | -1.79% | 87.02 | 2026-10-05 16:15 |
| SKEW (테일리스크) | `^SKEW` | 143.04 | -1.27% | 144.88 | 2026-10-05 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 미 10년 국채선물 | `ZN=F` | 104.25 | -0.10% | 104.36 | 2026-10-05 16:59 |
| 금 | `GC=F` | 4,167.6 | +0.13% | 4,162.3 | 2026-10-05 17:00 |
| WTI | `CL=F` | 89.3 | -1.99% | 91.11 | 2026-10-05 16:59 |
| 달러지수 (DXY) | `DX-Y.NYB` | 102.12 | +0.19% | 101.93 | 2026-10-05 17:25 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.160 | 콘탱고 |
| VIX / VIX9D | 1.208 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.034 | 1.419 | 2,574,027 | 2,661,255 | 29,282 |
| 나스닥100 ETF 옵션 (QQQ) | 1.570 | 1.440 | 3,078,886 | 4,835,158 | 11,416 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **CNBC** · Wall Street rewards Microsoft's AI pivot. A longtime skeptic says it's just the beginning
  - 2026-10-05 14:43 (ET) · https://www.cnbc.com/investingclub/2026/10/05/wall-street-rewards-microsofts-ai-pivot-a-longtime-skeptic-flips-bullish.html
- **CNBC** · Nvidia looks to take out its record high close — plus, don't worry about Intel's dip
  - 2026-10-05 14:25 (ET) · https://www.cnbc.com/investingclub/2026/10/05/nvidia-looks-to-take-out-its-record-high-close-plus-dont-worry-about-intels-dip.html
- **CNBC** · Cramer is closely watching Nvidia's massive buyback. Here's what he wants to see
  - 2026-10-05 12:29 (ET) · https://www.cnbc.com/investingclub/2026/10/05/cramer-is-closely-watching-nvidias-buyback-heres-what-he-wants-to-see.html
- **CNBC** · These are the cheapest and most expensive U.S. flights this November
  - 2026-10-05 11:38 (ET) · https://www.cnbc.com/2026/10/05/cheapest-most-expensive-us-flights-in-november.html
- **CNBC** · Why airfare could rise even more, but airline profits won't
  - 2026-10-05 07:00 (ET) · https://www.cnbc.com/2026/10/05/airfare-prices-airline-profits.html
- **CNBC** · It's time for us to put cash to work in this ugly market. Here's where we will do our buying
  - 2026-10-04 16:32 (ET) · https://www.cnbc.com/investingclub/2026/10/04/its-time-for-us-to-put-cash-to-work-in-this-ugly-market-heres-where-we-will-do-our-buying.html
- **CNBC** · Supreme Court Justice Alito said he's 'thought about' retirement as Senate control hangs in balance
  - 2026-10-04 13:53 (ET) · https://www.cnbc.com/2026/10/04/supreme-court-justice-alito-thought-about-retiring.html
- **CNBC** · This NYC startup requires 4 days in office but just let everyone work remote for a whole month
  - 2026-10-04 10:00 (ET) · https://www.cnbc.com/2026/10/04/work-from-anywhere-month.html
- **CNBC** · Starting a watch collection? What beginners should know before buying
  - 2026-10-04 09:44 (ET) · https://www.cnbc.com/2026/10/04/watch-collecting-beginners.html
- **Bloomberg** · OpenAI safety employee quits, calls for nuclear-level safeguards
  - 2026-10-03 10:40 (ET) · https://www.bloomberg.com/news/articles/2026-10-03/openai-safety-employee-quits-calls-for-nuclear-level-safeguards
- **CNBC** · Gen Alpha kids are earning money. Here's how parents can help them save and invest
  - 2026-10-03 10:00 (ET) · https://www.cnbc.com/2026/10/03/investing-for-kids-accounts.html
- **Reuters** · Portugal prosecutors probe legality of US use of Lajes base in Iran war - Reuters
  - 2026-10-03 09:55 (ET) · https://news.google.com/rss/articles/CBMipwFBVV95cUxPalVaWllxS1FsVThCWHF3bXZTLXVRNWNhMTdNaERvemRJSWRtZU1iRHNTN19WSGt5THpaRjZpZkE5OGtMYkZPY3JOSG95ZlF3TU10M05VYkdCMHJ0bW93dlk5THJmYm9pM2daU1VteXJKWnp1bm5GSDBobkZyUDBzNDNkaExRSElQSG9zR3hfNFFtazQ4Y2ZtWk92a1NXZXRRbUd1Y0ZQOA?oc=5
- **Reuters** · Fire, smoke seen near Aramco facility in Riyadh, witness says - Reuters
  - 2026-10-03 09:38 (ET) · https://news.google.com/rss/articles/CBMirAFBVV95cUxOUmVOVEVCTVdITFV4aHd1aWM4aC1lZzBQTUIxcG9zSkU0ZXJKbHVRdTRWTUVsRWVsRmZHYlI2ZW01dnp3NlQ4WEV3Wnp0YXpVV2VCQ2RmeVBQQ3BUN0E3S1ZrRkw0ODdkVVJsSnFWWVM5YWVZZExacUlwdGRrc3h1LVJkNHNWY1dZS1F2UE1aR1JHYzNkX0ktS0RIQW4zX3RJUWV4eVBqVFd6X0t1?oc=5
- **CNBC** · Novig credits Sydney Sweeney-backed campaign for platform’s surge in growth
  - 2026-10-03 09:30 (ET) · https://www.cnbc.com/2026/10/03/novig-credits-sydney-sweeney-backed-campaign-for-platforms-surge-in-growth.html
- **CNBC** · Private capital is reshaping Hollywood moviemaking
  - 2026-10-03 08:00 (ET) · https://www.cnbc.com/2026/10/03/private-capital-hollywood-film-financing.html

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · If the Stock Market Crashes in 2026, I'm Making This 1 Investing Move Immediately
  - Yahoo · 2026-10-05 15:50 (ET) · https://finnhub.io/api/news?id=4e0ba59dd71528a62b6c5ddcefcd7311c53861fe9652f4228d63ad7a2ce31b9e
- **NVDA** · Could Nvidia reach a $6T market cap by the end of October?
  - Yahoo · 2026-10-05 15:41 (ET) · https://finnhub.io/api/news?id=c3c7d42a1a0e583333852fb3de6ed3d657bfafbff0f6034ecc8674a7121a5598
- **NVDA** · Why I Think These Are the 2 Smartest Stocks to Buy With $5,000 in October
  - Yahoo · 2026-10-05 15:35 (ET) · https://finnhub.io/api/news?id=f67e2b4e34bae463f7b6e958597b4c300db91a1576378fb816d545ce10673f37
- **AVGO** · China is 'fully' catching up on one part of the AI race, but the US has nothing to fear
  - Yahoo · 2026-10-05 15:00 (ET) · https://finnhub.io/api/news?id=7594b99f6d131dc4be0175996517a50857e4e65255bced5a2fed86cb5107ac47
- **AVGO** · Nvidia, Broadcom May Be Surprisingly Safe From a 32-GW Hole in the AI Boom, Morgan Stanley Says
  - Yahoo · 2026-10-05 14:51 (ET) · https://finnhub.io/api/news?id=a06d38c2adb48ff3109e7132ee60fa6cf971bad4d2b9885679f1754c197079f0
- **AVGO** · The Highest-Beta Name in Big Tech Just Ran. Here’s the Risk
  - Yahoo · 2026-10-05 13:30 (ET) · https://finnhub.io/api/news?id=51b71121a7dca22ef6f0f2586b20f4b4f7142e3ca532aaa315747febfd76ec5d

### 금융

- **JPM** · Wells Fargo Stock Rises as Morgan Stanley Sees Margin Pressure Easing
  - Yahoo · 2026-10-05 11:53 (ET) · https://finnhub.io/api/news?id=4208b52d2d7b03be15d4f9d980a60b5c13d217e81a902302a4da80f81e290ac5
- **JPM** · Citigroup's Japan & UAE Token Push: A Growth Catalyst for Services?
  - Yahoo · 2026-10-05 11:08 (ET) · https://finnhub.io/api/news?id=5fe2b8a7b75c2f80493b1899a1f37f8b48d9600f640b1cb1a16d3caddcc2f200
- **JPM** · Synopsys Initiates $1 Billion Accelerated Share Repurchase Agreement
  - Yahoo · 2026-10-05 09:00 (ET) · https://finnhub.io/api/news?id=ac32b87e3eb80b9e3c4bbe4d1a2452163c4a7902dcaef91eb1cfce102884238a

### 에너지

- **XOM** · Has The Story Under ExxonMobil Stock Run Out?
  - Yahoo · 2026-10-05 11:54 (ET) · https://finnhub.io/api/news?id=7d0b63513a0ae30653492643eef87d6f80cb06671a4ae014e323a8d3a52c8050
- **XOM** · Empower Appoints Former ExxonMobil Veteran Andrew Sinclair as Chief Public and Government Affairs Officer
  - Yahoo · 2026-10-05 11:33 (ET) · https://finnhub.io/api/news?id=2192dcd82635cae93510deeec8e149fc41511769d2564f3eb5ca95507481b5b3
- **XOM** · ExxonMobil Holdings Corporation (XOM) Is a Trending Stock: Facts to Know Before Betting on It
  - Yahoo · 2026-10-05 08:00 (ET) · https://finnhub.io/api/news?id=6da3e53af17a276d2a874a91db09c8be19359a350124e169e3303d61739784ee

### 헬스케어

- **UNH** · Monday's session: top gainers and losers in the dow jones index
  - ChartMill · 2026-10-05 15:10 (ET) · https://finnhub.io/api/news?id=0e88a10f0ad90454a5ff9c1b9d8c6be70f11a0beeaf98797fe4fc38372abaa20
- **UNH** · Elizabeth Warren, Josh Hawley Launch Probe Into Insurance Giants Over Claims That End With $0 Payouts — State Farm, Allstate Face Tough Questions: Report
  - Yahoo · 2026-10-05 14:01 (ET) · https://finnhub.io/api/news?id=700ce2a78502c26deb9e2246ff434bfceeae582c14ed71642cf1f41b657858b8
- **UNH** · UNH Exits Select Medicare Advantage Plans for 2027 Amid Cost Pressure
  - Yahoo · 2026-10-05 10:48 (ET) · https://finnhub.io/api/news?id=e5de032ddfcb0fdbf2c3348f48f71c794a031187f2b158070a007e9417f129df

### 소비재·유통

- **AMZN** · Could Nvidia reach a $6T market cap by the end of October?
  - Yahoo · 2026-10-05 15:41 (ET) · https://finnhub.io/api/news?id=c3c7d42a1a0e583333852fb3de6ed3d657bfafbff0f6034ecc8674a7121a5598
- **AMZN** · Monday's session: top gainers and losers in the dow jones index
  - ChartMill · 2026-10-05 15:10 (ET) · https://finnhub.io/api/news?id=0e88a10f0ad90454a5ff9c1b9d8c6be70f11a0beeaf98797fe4fc38372abaa20
- **AMZN** · Update: Equity Markets Rise Intraday Despite Higher Yields
  - Yahoo · 2026-10-05 14:14 (ET) · https://finnhub.io/api/news?id=be7f281847b240432fa54378d280bcc48e4724a298cbe9004e03e357e23cb47d

