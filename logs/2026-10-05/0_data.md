# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-05 · 생성시각(KST): 2026-10-05 06:30
# 출처: Yahoo Finance chart API · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,777.25 | +0.69% | 7,724 | 2026-10-02 17:00 |
| 나스닥100 선물 (NQ) | `NQ=F` | 31,061.75 | +0.98% | 30,760.5 | 2026-10-02 16:59 |
| 다우 선물 (YM) | `YM=F` | 51,477 | +0.46% | 51,241 | 2026-10-02 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,850.9 | +0.85% | 2,826.9 | 2026-10-02 16:59 |

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 15.31 | -6.59% | 16.39 | 2026-10-02 16:15 |
| VIX9D (9일) | `^VIX9D` | 12.06 | -13.86% | 14 | 2026-10-02 16:15 |
| VIX3M (3개월) | `^VIX3M` | 18.01 | -3.07% | 18.58 | 2026-10-02 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 87.02 | -5.42% | 92.01 | 2026-10-02 16:15 |
| SKEW (테일리스크) | `^SKEW` | 144.88 | +1.48% | 142.77 | 2026-10-02 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 미 10년 국채선물 | `ZN=F` | 104.36 | -0.28% | 104.66 | 2026-10-02 16:59 |
| 금 | `GC=F` | 4,162.3 | -0.95% | 4,202.3 | 2026-10-02 16:59 |
| WTI | `CL=F` | 91.11 | -1.90% | 92.87 | 2026-10-02 17:00 |
| 달러지수 (DXY) | `DX-Y.NYB` | 101.92 | -0.17% | 102.1 | 2026-10-02 16:59 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.176 | 콘탱고 |
| VIX / VIX9D | 1.269 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.502 | 1.412 | 633,036 | 950,983 | 28,690 |
| 나스닥100 ETF 옵션 (QQQ) | 1.551 | 1.414 | 1,112,076 | 1,725,259 | 11,076 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

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
- **Reuters** · Two Iranians appear in UK court over alleged plot to target Jews - Reuters
  - 2026-10-03 07:42 (ET) · https://news.google.com/rss/articles/CBMipgFBVV95cUxOaEpZdXR4cjlWM01SNUpLcnVmZ2VyZm5uM0VjU0hPV0Fwc0F4RkRBSGlBRWR0OEdKcXNkUEtlQVJ6SUFoVHFlMGxES09mOFhSQnZGRFIzdnpzbmJfSTRQdWg5NFdGeGxuQWozUll2RVM0amlhN2NxbmRvLWY1bnlHVkVJX0tEdUpibHRSSUUwWXQzZTlMdkkyeVFqZ19JUlVHVlFnQ3ln?oc=5
- **Reuters** · Man arrested in Fairford air base investigation released on bail - Reuters
  - 2026-10-03 07:18 (ET) · https://news.google.com/rss/articles/CBMipgFBVV95cUxQZlM4THR1SEZQZDZfdFlpejVLZ2tuMk5qbTFiVjhNbEtpRW1tNjMwZHV0dlhKWjdXdU5TWTZ5dm5ZTW9jRjBjcV9YWUxWVGQ4cjRyN1pDd0I3bDhiSms3LTB6THluWTVfeFBRTUdNWjlJMkJnTEpXRTQ3SlR3bTlFSWFkM3lUd3pIUEVESkpHcWVLVWNMQmdRNzZlR01XNXZYd3Vtcjdn?oc=5
- **CNBC** · David Ellison just brought in a co-CEO to run his new empire: Meet Ynon Kreiz
  - 2026-10-03 07:00 (ET) · https://www.cnbc.com/2026/10/03/david-ellison-ynon-kreiz-skydance.html
- **Reuters** · Aboard the USS George Washington, young sailors adjust to war with Iran - Reuters
  - 2026-10-03 06:31 (ET) · https://news.google.com/rss/articles/CBMiuAFBVV95cUxPMmwtU1dvSVNubGRlbFl6OE9ObzN4MFVRYkUtMFVueTVRbE5KWGx5RTR4T1NFS2oyN1J3V0YxOEVhU3ZTeXAwX0ppOHNKRWE1S1NNYXl3UWt3WGQ2SWFJbkdHMmJLTVRNanp6THZ1R1VPUmRoR1lLSGRvYWtLRWk4bjJnTGJsLWlqMklpeVhPbUx2dTBpN2Z2YVpkOE83Rm8waTdaNmtDaWpxdTlHb0FzQkE5RnFiWFhk?oc=5
- **Reuters** · Iran executes detainee over January protests, judiciary says - Reuters
  - 2026-10-03 05:56 (ET) · https://news.google.com/rss/articles/CBMiswFBVV95cUxQWGdCTURnWkJyS1ZoczFjQWo3VF9BaXVrdm1tZV8wR0pwSmxYSFZMNVl0V19fU2NIWGRxNG0zSl9vM3BnRWVDUGpzRG5jM28tTmVibEZuNG5UeTZ1elJ1eVgzVFhQQ21GOXVVUFJqbEppZFMzTld0dExWXy16X245eTVrc2htcWl0dkxsNFMwQUdpSHEyTUFSX0Y4cEwyNXVHODdoUjV6VXF3QlR2bHNsYjFzVQ?oc=5

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Split $7,500 Evenly Across These 3 Dividend Stocks and Ignore Them Until 2046
  - Yahoo · 2026-10-04 15:21 (ET) · https://finnhub.io/api/news?id=7679ae9a0128f33acfaa9ec8e17bb0ddfb5b56d7d2f09976f43051e190f3af62
- **NVDA** · Cathie Wood Predicts This Cryptocurrency Could Surge 1,665% From Here
  - Yahoo · 2026-10-04 14:54 (ET) · https://finnhub.io/api/news?id=29e393914167af462cf8d106c0b7aa4e32f71b8fab1f2fb373e2cee60553b921
- **NVDA** · 'The market has had every reason to sell off' — and it hasn't
  - Yahoo · 2026-10-04 14:48 (ET) · https://finnhub.io/api/news?id=dab1e6f0961a5942faa64d0cbfe10c4b9969197b810fa82ed86fadc4b276190f
- **AVGO** · VFLO And CGDV: The Perfect Pairing For AI Growth
  - SeekingAlpha · 2026-10-04 12:03 (ET) · https://finnhub.io/api/news?id=1f51c558984ec226824455a50b00a46c9e2ddcacb6b7235dfdfca49a3f6fdf0e
- **AVGO** · Broadcom’s Massive $42 Billion Chip-Buying Deal with Anthropic Raises Circular Financing Worries
  - Yahoo · 2026-10-04 11:33 (ET) · https://finnhub.io/api/news?id=fa5a7e2ff4db3144d26d7401b8f1e3c66c64a9fe94fce1abfc45c0e57c65422d
- **AVGO** · Broadcom's 2028 Projection Makes the Stock a Screaming Buy
  - Yahoo · 2026-10-04 09:04 (ET) · https://finnhub.io/api/news?id=46eb16b4f50ecf58d11581d7dc3441c209f98cc083d422867edba0454ca2b493

### 금융

- **JPM** · American Airlines (AAL) Stock Fair Value Edges Lower As Analysts Reassess Fuel Costs
  - Yahoo · 2026-10-03 21:09 (ET) · https://finnhub.io/api/news?id=81800b8dabaf8034c9550eb2e49046506dad7f90aaf912d49c884dc847103e6f
- **JPM** · Better Small-Cap ETF: State Street SPSM vs. JPMorgan BBSC
  - Yahoo · 2026-10-03 17:28 (ET) · https://finnhub.io/api/news?id=63fba8b1f38916db97788f43fbe918e452c92bcc1c13b1e639a7fc2f07395377
- **JPM** · The Fed May Now Skip October Rate Hike — but December Is Still Very Much in Play
  - Yahoo · 2026-10-03 08:47 (ET) · https://finnhub.io/api/news?id=312204ff21771f91f7ea66dd73bc1b90b481b724409f2237ee516aedc92ee30a

### 에너지

- **XOM** · VFLO And CGDV: The Perfect Pairing For AI Growth
  - SeekingAlpha · 2026-10-04 12:03 (ET) · https://finnhub.io/api/news?id=1f51c558984ec226824455a50b00a46c9e2ddcacb6b7235dfdfca49a3f6fdf0e
- **XOM** · OPEC+ set to hold November oil quotas steady as Middle East conflict hits output
  - Yahoo · 2026-10-04 05:02 (ET) · https://finnhub.io/api/news?id=cb71081e7d2ef64a5d91b5fcf5462fec89280a7c5717f5ea752d0ffac33fc6ff
- **XOM** · How Supreme Court Battles Involving Apple, Exxon, and Intel Could Hit Your Portfolio
  - Yahoo · 2026-10-04 02:00 (ET) · https://finnhub.io/api/news?id=373c44d6fc49be76ea607f958fbfe30d5465f1570e39fcc873269cfa011e1063

### 헬스케어

- **UNH** · Here’s the Dividend ETF I’d Invest $100 a Month Into Starting in October
  - Yahoo · 2026-10-04 07:30 (ET) · https://finnhub.io/api/news?id=4b73a2ad0b39df113ddb1a4d1581785451292c9b19e757fabbd1842cf5675cfc
- **UNH** · UnitedHealth Group (UNH) Expands Medicare Advantage, Is It A Bargain?
  - Yahoo · 2026-10-04 01:07 (ET) · https://finnhub.io/api/news?id=33c0549845c6c576e2b6bebb375226c59644fb70fb2519fefda439518250c6b8
- **UNH** · UnitedHealth Reports on Oct. 13. Here's the 1 Number I'm Watching.
  - Yahoo · 2026-10-03 07:50 (ET) · https://finnhub.io/api/news?id=d1cc0b23a1dde919e129df302fc5231d3dbb68d3513b13ea945abaae69a35659

### 소비재·유통

- **AMZN** · Is Cognizant’s AI-Led Delivery Shift Altering The Investment Case For Cognizant Technology Solutions (CTSH)?
  - Yahoo · 2026-10-04 15:08 (ET) · https://finnhub.io/api/news?id=8c0014fc1f12f4fbfd59084ba22679de609fd1c41340ee442d1a1aa6689646e4
- **AMZN** · Pay Me While I Wait: 3 Turnaround Stocks That Keep Paying Investors Through the Rebuild
  - Yahoo · 2026-10-04 12:15 (ET) · https://finnhub.io/api/news?id=69e46293fa3cb0d1ab3cc9be8a9da6788e5458a715d05f7bb99c69cedb416105
- **AMZN** · Amazon AWS CEO reveals surprising risk to AI stocks and U.S. economy
  - Yahoo · 2026-10-04 12:03 (ET) · https://finnhub.io/api/news?id=51ce6115ae12ffa68bb342ae2e1fafe8632e7e2fe2aaaf54802b168522490f5b

