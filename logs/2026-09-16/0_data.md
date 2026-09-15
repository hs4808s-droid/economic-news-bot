# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-09-16 · 생성시각(KST): 2026-09-16 07:39
# 출처: Yahoo Finance chart API · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,663 | +0.50% | 7,625 | 2026-09-15 18:29 |
| 나스닥100 선물 (NQ) | `NQ=F` | 29,266.75 | +0.39% | 29,152.25 | 2026-09-15 18:29 |
| 다우 선물 (YM) | `YM=F` | 52,562 | +0.23% | 52,440 | 2026-09-15 18:29 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,896 | +0.07% | 2,894.1 | 2026-09-15 18:29 |

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 17.2 | +0.58% | 17.1 | 2026-09-15 16:15 |
| VIX9D (9일) | `^VIX9D` | 17.21 | +1.77% | 16.91 | 2026-09-15 16:15 |
| VIX3M (3개월) | `^VIX3M` | 19.36 | +0.41% | 19.28 | 2026-09-15 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 94.91 | +0.02% | 94.89 | 2026-09-15 16:15 |
| SKEW (테일리스크) | `^SKEW` | 146.61 | -3.60% | 152.09 | 2026-09-15 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 미 10년 국채선물 | `ZN=F` | 105.94 | -0.46% | 106.42 | 2026-09-15 18:28 |
| 금 | `GC=F` | 4,338.4 | -0.31% | 4,351.9 | 2026-09-15 18:29 |
| WTI | `CL=F` | 105.39 | +3.95% | 101.39 | 2026-09-15 18:29 |
| 달러지수 (DXY) | `DX-Y.NYB` | 99.61 | +0.15% | 99.46 | 2026-09-15 18:04 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.126 | 콘탱고 |
| VIX / VIX9D | 0.999 | 백워데이션 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.211 | 1.403 | 2,051,838 | 2,485,011 | 28,884 |
| 나스닥100 ETF 옵션 (QQQ) | 1.042 | 1.414 | 3,712,166 | 3,868,092 | 11,432 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **Reuters** · Iran war cost hits $38 billion, forecast to rise $3 billion a month, CBO says - Reuters
  - 2026-09-15 17:21 (ET) · https://news.google.com/rss/articles/CBMivwFBVV95cUxQNEs4SmV2UTYzblAwenVTemk5SWQtMTRPbkpoLTVxaEVrYzBYNDJfX0RrSmVVZVZadlFBVnF0WkJNeGc5czMxVWREeDFtS0dZeGJ2V2tqSVg5VWM5UUFtN1hsMXlPX3g4d1RMbk5BR1oxcVdyYjBIaHg0bFl1SXY1dDMzazVEZlNBOHdCWm8zRno2Vjc1TEJ6ekdnQ25COEVkS3FVNHJmeWEyRVZJd2p3aF80RFlhZmVtREhQbkpIdw?oc=5
- **Reuters** · Best of the Emmy Awards - Reuters
  - 2026-09-15 15:36 (ET) · https://news.google.com/rss/articles/CBMibkFVX3lxTE5yNlkzNUF6QXZ2YjkzclJJdWhjUUNoSTVGY1A2SV9QNzI2R3MzUHBfemhjTnRRRHFRcDZzc21hYThRem4wTW1OQ09udGZVaG5HVHNYaDV4TEVFYnpkT2s2Uk5fdzF4c3pDRHpOZWFn?oc=5
- **CNBC** · Wells Fargo sees improvement in a key metric — plus, Lilly gets praise beyond GLP-1s
  - 2026-09-15 15:09 (ET) · https://www.cnbc.com/2026/09/15/wells-fargo-sees-improvement-in-a-key-metric-plus-lilly-gets-praise-beyond-glp-1s.html
- **Reuters** · US Treasury's Bessent says bond yields reflect 'global issues' - Reuters
  - 2026-09-15 14:41 (ET) · https://news.google.com/rss/articles/CBMiqwFBVV95cUxORTlaeHpnSkMzSU5ieGJqNEpUTFdaYU8yTzc2OExDcElaWFVFclZyNkVNcThWaFRiM29ZNGhaY3dpWS1RbVh0NUhZczdVLUhLVFNjN3RCRFhZMlVmeU5ibVhCXy14VnItdkpzVHNJZXlxWmhxbzRLX3BjOTFzcE9yRVFteHcwS0Jaa19QaTVPdnh5WDFLcXdvTXBrNldnNVJDd0RvN1NRYllyRWM?oc=5
- **Reuters** · US Republican lawmaker seeks Hegseth's impeachment over Iran - Reuters
  - 2026-09-15 14:01 (ET) · https://news.google.com/rss/articles/CBMipwFBVV95cUxNRkdVNklYVkNGY3dIRmFVaWVhU2tpR0I2cG9XcVNZRmVSQ0h0VklFdGlMRVZ3VXVHMzA2RjJkWDBBdUY5bXRKU1MtQmlSWmpXcm54M3R3UkR2WS16VE9HRVM3Z2dndlVkMnNxd0E4TUFwS3JRREFETmxtaC05Vy1Zb0o1Rk5kMTVWLTRGSmxzbVBrMnNEQldDdVpXS1VpR3NNTzVNSlAyaw?oc=5
- **Reuters** · US energy chief says Saudi Arabia oil pipeline should be back online within days - Reuters
  - 2026-09-15 12:55 (ET) · https://news.google.com/rss/articles/CBMiwwFBVV95cUxNWjVqU3FIVkpudnZrWWI3ZndxaldTN2FtV0lXR0JuSnIweGhPRDFYS0FPUWxxVG5YS1Rmb3J0QlBRZ0hucFgxX3hWc3JBWllZbDZLWkJ4STd6X1lUekNXeUd6OXNRZTJ5dEFQRmwzY2M4bUlLSmlHTkZzUWFFRkJCWTZSRlJ1TGtQNnNydFdGZ01uQmVtNWplOG9yLTFidlV6aG5jaE51SXRSSGVMUmdJTGh2M3pVdG5sWWM4SzBQcFlOdzA?oc=5
- **Reuters** · UK, US and Netherlands issue advisory on Iran-linked spyware - Reuters
  - 2026-09-15 12:35 (ET) · https://news.google.com/rss/articles/CBMikAFBVV95cUxNWk93UklibjZvS0JuVFBwX2RiTFVTM3BEOExqM1dFYnM4cDZ0TFZsV3JjMkR5WThrN2ZJZkdoQ1R5amNsZF84ZFh6RzBjcmpjSmtma0VxbHBreVBNMDJZVXc2REhYVHVUWlQwVEVLX3ZYN1NFUkE0Y3A0VkFTSEIyY0h2RGNMbE1KRFBnM05YT1E?oc=5
- **CNBC** · We're buying the dip in one of our newest stocks
  - 2026-09-15 11:59 (ET) · https://www.cnbc.com/2026/09/15/were-buying-the-dip-in-one-of-our-newest-stocks.html
- **CNBC** · Airfares, gas and hotel prices were up this summer—Americans traveled anyway
  - 2026-09-15 10:30 (ET) · https://www.cnbc.com/2026/09/15/fall-travel-costs-vacation-demand.html
- **CNBC** · What to expect from stocks and bonds if interest rates remain higher for longer, according to investing pros
  - 2026-09-15 10:00 (ET) · https://www.cnbc.com/2026/09/15/what-higher-for-longer-interest-rates-mean-for-your-investments.html
- **Reuters** · EXCLUSIVE: ADNOC Trading buys millions of barrels of Iraqi crude, sources say - Reuters
  - 2026-09-15 09:46 (ET) · https://news.google.com/rss/articles/CBMirAFBVV95cUxPcVctVzBuTWtQU01oYjJyMGRQNDlnYktuTlItaFRidlFFX3VZRHVUamZMc2tyd1l4YkhTQndtZlNyeGlwN0xsT1c3QmhnaWhqeE1kZUJGZTBwMkFrQ2RtU0tOdldHQWRCUlpjcDFrYXhlclU4Y05SRldPb21uSExkUTJYR1I5OXJHdWhWSzZwVFVMZGdwTDJzUHliazNMSFh3ZUZ0Vk8xUV9TWE5y?oc=5
- **Reuters** · Most Gulf bourses in red on Houthi attack and Hormuz shipping slump - Reuters
  - 2026-09-15 09:16 (ET) · https://news.google.com/rss/articles/CBMirwFBVV95cUxPSExSUVU1Q05HQlpsVG5mSngtVTZFUkYtV1dhYVNqZDdFTTVvWWsxU0d5SUZWV1luUXJXMG9Hb1JKeU9MSTdzb3I5MDZEWVlzZWMzN3dQRHNMZk5nSzIxSW1KWGFvMkVHSlYxdnowc2x3c2xPamVScEhCYXhBS0VheDd6VFR6SkZ4SkROR1UwQi1BR0dCdUd3T1FZYnhrc2ZqTTdvMkRJZzhGZUluRHRJ?oc=5
- **CNBC** · Fed up with AI interviews, some job seekers are dropping out as candidates and blacklisting companies from consideration
  - 2026-09-15 09:05 (ET) · https://www.cnbc.com/2026/09/15/job-seekers-refusing-ai-interviews-blacklisting-employers.html
- **Reuters** · Amazon's AWS is unable to restore access to Bahrain, one UAE cloud data zone after war damage - Reuters
  - 2026-09-15 07:58 (ET) · https://news.google.com/rss/articles/CBMizAFBVV95cUxPcGhFMHZVNGthdVl1bjYza3ZOWVpRY3ZMS1JmZkgxVnJTWGRhZFdFS3JfYk1nX2Y1Nzl3RlZDN21lWFA3b0xUU1E3UkdZR0hPQXNXdG5seEhsQ0hUR1gxVnZCWHFpTXdQdGhGQkFKTFd0cW80QUNBdnpXYzdOX25zZEJpN2lkOW1IWVlnc0RZNDk0cGgzSTlNYXFaMS1EcUJTM0ZUUjlhS0FLV0NrbGtsM3BKOVlFOWdFUi1sbGQtWmRqX3ZsODdPczRYRUw?oc=5
- **CNBC** · No one and done: The Fed will hike at least two times over the next year, according to CNBC survey
  - 2026-09-15 07:10 (ET) · https://www.cnbc.com/2026/09/15/cnbc-fed-survey-two-rate-hikes-seen-ahead.html

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Why Rule Breakers Dig Stocks With Multiple Futures
  - Yahoo · 2026-09-15 17:54 (ET) · https://finnhub.io/api/news?id=466e78ea50f8b3e6ddd1e4737a81d9ece024ea527a25cbf5b74dce7a108c442d
- **NVDA** · TSMC’s 2nm Era Is Accelerating With MediaTek. Nvidia and Alphabet Already Have Money on the Table
  - Yahoo · 2026-09-15 17:48 (ET) · https://finnhub.io/api/news?id=86105b30bc518a119ef014f8b7c80f7f22eae6554c40f68f5a512b72d3a97b49
- **NVDA** · Nvidia Bought Hugging Face for $12.9 Billion. This Software Acquisition Changes Everything.
  - Yahoo · 2026-09-15 17:32 (ET) · https://finnhub.io/api/news?id=29e1a877db5d1cab280a1b2138a1b0719b33ff2eaa5d332ed85debe811c8eb94
- **AVGO** · Why Rule Breakers Dig Stocks With Multiple Futures
  - Yahoo · 2026-09-15 17:54 (ET) · https://finnhub.io/api/news?id=466e78ea50f8b3e6ddd1e4737a81d9ece024ea527a25cbf5b74dce7a108c442d
- **AVGO** · What Was Qualcomm Stock Telling You Before It Ran?
  - Yahoo · 2026-09-15 16:26 (ET) · https://finnhub.io/api/news?id=02658fc90610a07217de35ed7584ae21bb283fd70a982d7df81f1b5477de6cdf
- **AVGO** · Broadcom CEO Doubles Down on Massive AI Growth Target
  - Yahoo · 2026-09-15 15:28 (ET) · https://finnhub.io/api/news?id=63dccb9631750e024437480449f0881d253eb191af693ea1cbfebb29d52a2653

### 금융

- **JPM** · JPMorgan CEO sends strong warning to all Americans
  - Yahoo · 2026-09-15 17:03 (ET) · https://finnhub.io/api/news?id=610374c21eb13ad060961748a4f5a72b781a74a0e82ded3a7bac6f162372d18f
- **JPM** · JPMorgan Chase Sees Mid-Teens Growth in Q3 Banking Fees and Markets Revenue
  - Yahoo · 2026-09-15 17:02 (ET) · https://finnhub.io/api/news?id=151d5bbb929aabde1aa9cb6b91ecfae7dcaca663048ce9b8aba21d2144d184bd
- **JPM** · JPMorgan's Petno sees bank fees surging while warning the cycle feels 'too good'
  - Yahoo · 2026-09-15 16:53 (ET) · https://finnhub.io/api/news?id=c33360e66accee2b7e424483ec0a14dbdeebaa9cb9a7ee44d735142b3a9363bd

### 에너지

- **XOM** · Market Chatter: Exxon Mobil Wins Approval For Texas Carbon Capture Project
  - Yahoo · 2026-09-15 17:50 (ET) · https://finnhub.io/api/news?id=85a53b5243ca2d609738a6b5b219e94bc5af9e76887beed6bcc3cf823d81c86b
- **XOM** · Exxon Rises as $6 Diesel Meets a Refinery Shutdown
  - Yahoo · 2026-09-15 17:07 (ET) · https://finnhub.io/api/news?id=fa261727d14cbbdc73e652cc0acef80db955dd67357cebc924d969b7c6a27345
- **XOM** · Chevron CEO warns a global fuel crisis is already here
  - Yahoo · 2026-09-15 16:53 (ET) · https://finnhub.io/api/news?id=c02567864d7a13d3f9c713c146ef419642ad4afdae5eccfe68229b22ef58b424

### 헬스케어

- **UNH** · UnitedHealth Group Announces Earnings Release Date
  - Yahoo · 2026-09-15 16:10 (ET) · https://finnhub.io/api/news?id=909aca10a77996c4c7f96c28dd59ebf87e5a8997a4cf648773323aa33a1dcc8d
- **UNH** · Discover which dow jones stocks are making waves on Tuesday.
  - ChartMill · 2026-09-15 15:10 (ET) · https://finnhub.io/api/news?id=a2fd6ceef859ea3281feda9ce6737beeb691937977ad1252cfc372c6ed60226b
- **UNH** · Uncover the latest developments among dow jones stocks in today's session.
  - ChartMill · 2026-09-15 12:40 (ET) · https://finnhub.io/api/news?id=f01de47da9ecb6ffbb670635ec847d02217017e49e51ce48b43d44b20d656cc7

### 소비재·유통

- **AMZN** · Amazon (AMZN) Dips More Than Broader Market: What You Should Know
  - Yahoo · 2026-09-15 17:45 (ET) · https://finnhub.io/api/news?id=e2c40f2d2a69a8ff231d2ef64bd1a44afebd750f007011ca9119bb44abc7191e
- **AMZN** · Amazon sells luxury solar-powered watches from brands like Seiko and Citizen starting at $210
  - Yahoo · 2026-09-15 16:45 (ET) · https://finnhub.io/api/news?id=20b8abb945f1bc160f11fd987c7bc0f2ac4780df292f667a7d01dd82440d7f93
- **AMZN** · Stock Market Today: Dow Dives With Fed Seen Doing This; Senate Vote Hits These Crypto Stocks
  - Yahoo · 2026-09-15 16:38 (ET) · https://finnhub.io/api/news?id=a95b23d9616d1f85988b1597674f2c01d32653ec2a16a42c86f1b8ec2f49cec7

