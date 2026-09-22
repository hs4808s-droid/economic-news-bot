# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-09-22 · 생성시각(KST): 2026-09-22 09:13
# 출처: Yahoo Finance chart API · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,837 | +2.35% | 7,657.35 | 2026-09-21 20:03 |
| 나스닥100 선물 (NQ) | `NQ=F` | 30,866.75 | +4.23% | 29,613.68 | 2026-09-21 20:03 |
| 다우 선물 (YM) | `YM=F` | 52,464 | +1.36% | 51,761 | 2026-09-21 20:03 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,900.1 | +0.94% | 2,873.23 | 2026-09-21 20:03 |

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 14.87 | +0.41% | 14.81 | 2026-09-21 16:15 |
| VIX9D (9일) | `^VIX9D` | 13.14 | +7.09% | 12.27 | 2026-09-21 16:15 |
| VIX3M (3개월) | `^VIX3M` | 18.08 | -0.88% | 18.24 | 2026-09-21 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 85.77 | -1.84% | 87.38 | 2026-09-21 16:15 |
| SKEW (테일리스크) | `^SKEW` | 142.19 | -3.99% | 148.1 | 2026-09-21 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 미 10년 국채선물 | `ZN=F` | 106.13 | +0.04% | 106.08 | 2026-09-21 20:02 |
| 금 | `GC=F` | 4,411.8 | -0.30% | 4,424.9 | 2026-09-21 20:03 |
| WTI | `CL=F` | 92.2 | -8.08% | 100.3 | 2026-09-21 20:03 |
| 달러지수 (DXY) | `DX-Y.NYB` | 100.41 | +0.19% | 100.22 | 2026-09-21 20:03 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.216 | 콘탱고 |
| VIX / VIX9D | 1.132 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 0.802 | 1.424 | 3,470,485 | 2,783,203 | 29,518 |
| 나스닥100 ETF 옵션 (QQQ) | 1.111 | 1.391 | 4,943,097 | 5,491,977 | 10,560 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **Reuters** · EXCLUSIVE: Trump approval falls to record low of 32% as high costs bite, Reuters/Ipsos poll finds - Reuters
  - 2026-09-21 19:25 (ET) · https://news.google.com/rss/articles/CBMiuwFBVV95cUxOa2xXN3ZZR05LSzJLYVpOTFZTVlJkLWhnZUxnRDVlckVJT0pDN3RDRFJoTnJObVJGY0RYMGJLYUpGT0pNVUlrUFlBTVlzS0hNbUhWNk1lYzBNUEdRYmQwNy04X3ZHQzAzY1NGZDZxVEhsOTl3LWFrcjFDMEJhaUxPS2hlbnlUMkRsYml0bnBkSVBUR3F0YUtXbWxDdnVScmE4dGw1LUhXelhOVVNyVm9YbWRJMXI1R2wybnNz?oc=5
- **CNBC** · Stocks had a great day on the surface. But something alarming occurred not seen since 1999
  - 2026-09-21 17:20 (ET) · https://www.cnbc.com/2026/09/21/stocks-had-a-great-day-on-the-surface-but-something-alarming-occurred-not-seen-since-1999.html
- **Reuters** · Trump administration proposes $5 billion to kickstart investment fund to rebuild Gulf energy sites, WSJ reports - Reuters
  - 2026-09-21 16:49 (ET) · https://news.google.com/rss/articles/CBMizAFBVV95cUxPQzdFZjM2QWJJQ0xUUE1Tb2llS3dpWkd3QU9lZWk1QjVCenN4VlE2RnVyUnVFRjhNd29mbWxVVVJDWWlCVnFDbFRfY1NldDQzOTg5UEN1UF9oWVZMS0FSeTZLT1NxZU5DN0lYbzgwNVktTjhrMGFtaUp0T3FsWjVQT1JsZFhQSmV2NU1Kd3hpVjdPdFhTbG8yaWFNV1RfeXNLQ1lvU2tkRmJzSnMtN2kzR2d6NDUtUzUwWDRRWkRQYURQMzl0Q0pLRS0tWVE?oc=5
- **Reuters** · PODCAST: Paramount deal, Germany elections and AI at the UN (Updated) - Reuters
  - 2026-09-21 16:22 (ET) · https://news.google.com/rss/articles/CBMijAFBVV95cUxOYkl4X2FBeTYxUnROWDVRbDFTcTk4MnByZWdwTHZWRWRSYmNpbXBtcXl4ck8xeTd4ZDhQX1k4TjZjU0hHdnE0LVdtai05UXFxTUNMX0J1ajdPRmxUYllsOVJUZldTREJoOTNpM3ZycTZXckxsbHBXY3hHRUJoZWtIWG1jQkRDYm1DYkh0Ug?oc=5
- **Reuters** · Wall Street ends sharply higher as AI optimism reignites and Treasury yields retreat - Reuters
  - 2026-09-21 16:01 (ET) · https://news.google.com/rss/articles/CBMingFBVV95cUxQbUY0bG1IQkExN3pxSFZoX1VGN0hTNkluZ1hFd1F6VzZwdWtPRExzOXRnS0prRjV1M0I3U2tfUnhZcmJSQkV6STFKbUo2YXB6S1RhNUkycUFJUXg3UXA0WW9CWkRYaVVVUGRqRmRtUERCU1I4M3ZMYXhETmY1Q3FZQU9Ob1MtMzRONFc3NVFrNzVpcTQySVRzd1dENmcxdw?oc=5
- **CNBC** · Intel surges 12% as CPU stocks rally. Here's what's driving the move
  - 2026-09-21 14:37 (ET) · https://www.cnbc.com/2026/09/21/intel-surges-12percent-as-cpu-stocks-rally-heres-whats-driving-the-move.html
- **Reuters** · Gaza students return to in-person schooling for first time in three years - Reuters
  - 2026-09-21 14:19 (ET) · https://news.google.com/rss/articles/CBMiuAFBVV95cUxPeWU4dWw2cjB2T1E3bV80M1JsUHpuZ3ZfUXNCak41UWx3T2kwdmgtY0RuOGd3Y3lWZzNmbGY3VU14SzJJRHpBTExyRmhLSDNfVlN3Uy1aRUZXaVduczlHajZ2WXBGVzBiY0J2US1zZFNEV3VzeHRaTXJWLXA3R1pGY2xnQ3hFcUw4WnVZczMxQ2U2M2czOGNJR29UZVA2VjBJMWtqQ1BHaUVtY3NxUTZXR0pRUEszN3Zq?oc=5
- **Reuters** · Qatar's wealth fund and JP Morgan Asset Management to launch $20 billion partnership - Reuters
  - 2026-09-21 14:05 (ET) · https://news.google.com/rss/articles/CBMiyAFBVV95cUxOczdRcTBZOTMtVlJTZ0ljR0lvX0VpdzJRbzAwaXdPN0tmVGJMNWJyRVY5d3ZsZUlENm9aWmdDN0dFellPVmMwc0JJdzA2a2dxTUVJNWdfZTJQQUhxUWJSalQyMC12UmxiR3NEZDBBQUpDdFE1V1dTQktKQUFqZ3JIc2N3SVkxMWxiTVhYYXdYelVxUU9XMGlDN3FOX0ZvSmc5dEVCdkJTNXE3dTFxUVVZQVQ4eTBhaG9EUmpWVG1FamY5UUkySGtFRQ?oc=5
- **Reuters** · COMMENTARY: Morning Bid: Summiteering - Reuters
  - 2026-09-21 12:46 (ET) · https://news.google.com/rss/articles/CBMilwFBVV95cUxQeEFPNUpOV29zcl9nZlFKaEJNS2tjMnN2OUNidVJvanpPRUE0RTVLNm1tOGZSQzMxLXAzVy1sWk1SM2hjNHQ1bU5GbzdxdGsxT09Ob3FNTEJMTnc2dTFPM1p2UHpQRndJVlRTb3ZzWS1UOHZpSjhpLVEwQVA1bU9ZTlduRVlVdUZwVlJpcjBlZTdiZ2pqXzlv?oc=5
- **Reuters** · Europe's STOXX 600 rallies on tech, banks strength as oil prices retreat - Reuters
  - 2026-09-21 12:40 (ET) · https://news.google.com/rss/articles/CBMisgFBVV95cUxNYWF0aU9mWUM0TjNtekhpT0I0NTM1RXoydldTZDlzNVM4Q0FnRXFCLTlaLUQxdEZfMS1qeU1XV0lsNHhvc09zMTBUQV9xVFhaakdCU196dW5sQ212UHdLVjVySHo5UWczV0dVS2dnY3d2Q2dTbWRkOWFRZ0g5aTlGaEtnQkFQcno2ZjdfdndQdGdSR1c3MjdEXzNCZlhRM216di1sdllQSl9OT3pkcWRSd3p3?oc=5
- **Reuters** · Global diesel prices hit record highs, further rises possible - Reuters
  - 2026-09-21 12:03 (ET) · https://news.google.com/rss/articles/CBMisgFBVV95cUxPbTJkVThNdEJxOWJFWkljaTdsVjJZbTJlUXU4M19XSm1fMFVQSUZ1VUxRYjV6dkNaTE5FZnkwWndvX2UzcTlYVU5IV1JEVGUwSXprOTJEMjI3eTlJWkJodFVhWDFsX1N2akxCMm1pQ2hWbVRhR3huTjlPSTg5cGtwMjJpQ2J5RUd0SlZ1RUJWeW1lMXB2VXd0NWdYLWk3bmw1T3ZTclRLazF0RW1MVUFHZThB?oc=5
- **Reuters** · Houthis push for control of Yemen highlands as Trump is said to have called off strikes - Reuters
  - 2026-09-21 11:26 (ET) · https://news.google.com/rss/articles/CBMizAFBVV95cUxNbHBmWjNkMFR2Skw0MWVFaENxamFwbXN0RGxRei1RenlFVk11R1loSlZtdm16SW5ITGFMalY1bkNBOUVONnVVdENtbDZSdzByT0l0NkJiZUlSSzBvRHBBNWxKd01ja09Eb1Nla205aW5oQkxGVGpiUjZQUTJVYy1EWGx6R2JPN2pGWXVUU29CQ1ZyQmpSMWlzQ1VYUzhidC1SZ3VSMFhyVndUYUZYTXItOGgyTktsQnV1QW1ETzN4NnI2eWhZMXhoZ1h4eEU?oc=5
- **CNBC** · Kind Snacks founder Daniel Lubetzky: The No.1 piece of advice I give my kids about failure
  - 2026-09-21 10:30 (ET) · https://www.cnbc.com/2026/09/21/kind-snacks-founder-daniel-lubetzky-the-advice-i-give-my-kids-about-failure.html
- **Reuters** · Czech government reinstates fuel margin caps, plans windfall tax on refineries - Reuters
  - 2026-09-21 10:01 (ET) · https://news.google.com/rss/articles/CBMixAFBVV95cUxPdVZJUm9nYjlBVDQ3d2R1bEQzVk5JRkFMTDE4a0RBa3dxclgzNE0wNDFJY2JHQjkxaEhVUkhKdllrb2dMWFliczdNNlV6U1pxLVlwSEpmZjFtem82aVBIS3h5M0tBMUtyVTBadzQzRjVJcEMxUFVaWERESm1RY21rRHoySTJKdUc3VHJnSDdhQWtJQUxLTWRIbEl4cWlxRE9VZTZFNFQ0UE1VSFlscXpUejhMdFdHeEZJV2U4ekFIOF9WZ0FN?oc=5
- **Reuters** · Trump, in call with Yemen president, did not pledge military support against Houthis, say sources - Reuters
  - 2026-09-21 09:57 (ET) · https://news.google.com/rss/articles/CBMizgFBVV95cUxNbWVNTGJMWUoxcU5nWjh1amVGM0MzcFN0allQZ0oxZm96SVEzZzRtUXM3c2ZvM0hYdDlvc19kS1VDQ1kwcmtOTUVBQkJOOFJzekl6d2FVNEdtcWMwNVV1UG5nNzBfSjY5QUxLUlQxWGxwRU12WnJnQ21rZWx3VHhWd3hKV2gzZHdHSHV6Zkw3czZUTlVhUHd2anl6X2YyZ19UckV2Y2ZVcjZTZEJfYlJkZnhDYjZUTXI3RlVuZDBUWUtPSGVBN0ppMU1xQjBzQQ?oc=5

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · 3 Chip Stocks Set to Win TSMC’s Packaging Boom
  - Yahoo · 2026-09-21 17:45 (ET) · https://finnhub.io/api/news?id=f275bd317b0b764600a2421b64c4269a9f7cb9b893845f90be3aa9d5a252b3bc
- **NVDA** · Inflation. The Iran War. A Hawkish Fed. Soaring Bond Yields. And Concerns About Artificial Intelligence. The Stock Market Faces Many Hurdles, But Only 1 Metric Truly Matters Right Now
  - Yahoo · 2026-09-21 17:35 (ET) · https://finnhub.io/api/news?id=060bb36df6b2d9ca737bed1fe002d3127c1c553c993d5f390394583688dce063
- **NVDA** · Dow Jones Futures: Falling Oil Prices, Yields Spark Market Rally; AMD, Intel, Micron, Nvidia, Sandisk Are Key Movers
  - Yahoo · 2026-09-21 17:13 (ET) · https://finnhub.io/api/news?id=2a965795bdbd096ed40eab32fa4f9c1b24ff1d694581a8ad0ef479a1e6ec4985
- **AVGO** · NVIDIA Or Micron: Which Gets Paid More Safely For The AI Shortage?
  - Yahoo · 2026-09-21 16:31 (ET) · https://finnhub.io/api/news?id=ef3bfcf8c1c19773033f33386d60055f91601912d3a8bd7d6b25e6f17fac7f7a
- **AVGO** · AMD Storms Into $1 Trillion Club as Chip Stocks Charge Higher
  - Yahoo · 2026-09-21 15:26 (ET) · https://finnhub.io/api/news?id=01a31ed77f910d06c6288b19ecfe240b997bc7e7ca18b7e4b70889e915cdb7b7
- **AVGO** · Beyond NVIDIA: 2 AI Data Center Stocks to Buy for More Upside
  - Yahoo · 2026-09-21 15:00 (ET) · https://finnhub.io/api/news?id=e1e9ab01e95482e261745e127e839b928b6d01eedaef77a0c64dcc2c2798915b

### 금융

- **JPM** · Chase Builds on Freedom Flex’s Everyday Rewards with More Travel Value
  - Yahoo · 2026-09-21 15:00 (ET) · https://finnhub.io/api/news?id=432f18352c3730cfbfcd4518abe4cb3c6435a375c31a7081b8dfe18dc9653bf9
- **JPM** · T-Mobile Stock Slips To More Than Two-Year Low — JPMorgan Cuts Target Ahead Of Q3 Citing Softer Service Revenue Outlook
  - Yahoo · 2026-09-21 12:18 (ET) · https://finnhub.io/api/news?id=5c853ae0a77e2c281b456522e17557dbc1939e005336ad4a342914d8dc364fe6
- **JPM** · Will AI Become BAC's Next Major Efficiency & Growth Lever?
  - Yahoo · 2026-09-21 11:41 (ET) · https://finnhub.io/api/news?id=30aad18c44d7f72cb66e8e95f649fad7797327b6e6943b4eaac39412ba3201a5

### 에너지

- **XOM** · Exxon Mobil Holdings (XOM) Stock Drops Despite Market Gains: Important Facts to Note
  - Yahoo · 2026-09-21 17:45 (ET) · https://finnhub.io/api/news?id=38d611a41b31019362f44430657ddf858212445bf98e55595de7aafa437f41af
- **XOM** · Exxon Could Return to the Venezuelan Field It Was Forced Out of in 2007. Here's What Changed.
  - Yahoo · 2026-09-21 16:50 (ET) · https://finnhub.io/api/news?id=e6cc6bff0924106d75f201fca66d25403ed7e1c48bf22353056454b1538fa2fc
- **XOM** · XLE Is 91% Oil and Gas. Investors Buying “Energy” May Own Less Than They Think
  - Yahoo · 2026-09-21 15:55 (ET) · https://finnhub.io/api/news?id=c5f6f8a6de1342e09e99bc73c32d19728a3c10598740b9d0d4fdf60040e1e3fa

### 헬스케어

- **UNH** · These dow jones stocks are moving in today's session
  - ChartMill · 2026-09-21 15:10 (ET) · https://finnhub.io/api/news?id=6d60da61cbd8368a9385e258e82f236ed4c21589fd290338e6e3784639a7853c
- **UNH** · Discover which dow jones stocks are making waves on Monday.
  - ChartMill · 2026-09-21 12:40 (ET) · https://finnhub.io/api/news?id=14e4cf65769e673f42a4d4281a5372e23d98a76970930436984c66e0099204fa

### 소비재·유통

- **AMZN** · Nasdaq Ends Nearly 3% Higher As AI Stocks Pop, AMD Enters $1 Trillion Club —  AMD, ARM, META, AMZN, PSKY In Focus
  - Yahoo · 2026-09-21 18:04 (ET) · https://finnhub.io/api/news?id=f590f157a45e9ede0b45e363e2fe2fa232850b082542c852b4d171af05ca41ea
- **AMZN** · Amazon (AMZN) Laps the Stock Market: Here's Why
  - Yahoo · 2026-09-21 17:45 (ET) · https://finnhub.io/api/news?id=ef7ead11de1754f42c2888e3111157cdd6da2660e9da0df17598ff203e39752c
- **AMZN** · Amazon kicks out Meta's Muse in split over AI shopping
  - Yahoo · 2026-09-21 17:33 (ET) · https://finnhub.io/api/news?id=74d01eb8a1a5d9a83df97648cecc5ff4d77a2ac97ce6fbb31359e564fb04ac98

