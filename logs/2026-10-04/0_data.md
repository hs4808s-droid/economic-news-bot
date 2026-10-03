# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-04 · 생성시각(KST): 2026-10-04 06:30
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
- **Reuters** · Two Iranians charged in UK over alleged terrorism plot targeting Jewish community - Reuters
  - 2026-10-02 17:11 (ET) · https://news.google.com/rss/articles/CBMiugFBVV95cUxPN1pSQkNGMThITHRzNldaeUlFYjFYWk5Bckx6cllZZkJXU0R5ZEtkTGpxcDdxX3B5c1pQZFlzN0hvOGNjUjMtR2tMRW5iVDg0bVRERkk4RXBKT2dmUEJmdDJjZWNpSXVJTHhqdGp2SzdPSkVMY3pkM0xaVnBoTXZyZi1EaF9uRGtkWTlYenhvSDVKU1BXUEZ4cFA4SWlOWHVhSDBjeExKZ2ZnTVB1M281WUdWd3NvM1hJenc?oc=5
- **Reuters** · What do we know about flydubai flight 1073? - Reuters
  - 2026-10-02 14:58 (ET) · https://news.google.com/rss/articles/CBMinAFBVV95cUxOVlJGRkhlVDNVaGt3ekU3cFNoQzExQVRHTkFZc0lPWkhrQXFaWXFDMGJTdzNKMmF4T0JMcHRTQkxYRGhMbTZJNWt5WVZPNFM5MElvUGlYaHNLMU1kUVd1N2xkR3RaS0ppYll2a3hFZ1Y2N1k3bnpGUXI5T0JNclZpb0Mwdy11TTI1NzR5Ni1lS0ZZcl9IczM4LWExaG4?oc=5
- **Reuters** · Saudis plan assault on Houthis to break Red Sea chokehold - Reuters
  - 2026-10-02 14:13 (ET) · https://news.google.com/rss/articles/CBMiqgFBVV95cUxPUVJialJyWHg0VzlHXzBiaTU3elZhbWEtQzd0TjhNOGNsWFFZNTYyMGFqODJGcVc3aVBaYVY3QkRzWWpEZDlQNEpJeVp6ZjMxYkZKYi1nZ0FUenFUSFRFRTNCb3NaTmdCaTJ1WWV1RmlqcmhSZGtsZWZobE5jSHp3RkJiVXpueWdVOHJmbDhzUEEzVXB6OF9jYkJHcnpfQklTNDVHZ20yS1J6QQ?oc=5
- **CNBC** · Friday's rally in the S&P 500 might not be enough, but Linde is out of this world
  - 2026-10-02 14:03 (ET) · https://www.cnbc.com/2026/10/02/fridays-rally-in-the-sp-500-might-not-be-enough-but-linde-is-out-of-this-world.html
- **Reuters** · IEA's Birol says oil prices starting to fall after reserve release decision - Reuters
  - 2026-10-02 13:36 (ET) · https://news.google.com/rss/articles/CBMiwAFBVV95cUxNcHZzWUw2YjVHbmx6SmNmYURKOGxkcy0zbndDQnpTMnRSc0JLOEpIaWw0MzVmeGRzNGZPeUFZQlM4aGduVEV5cVRCYlFwSk53RUQxYzhoZHd2UFhwX25mZlJKbmFzR2Zza3E3OGRVRVN4M0lvV2w3bTQwb1FzQ0s5eUhvQ3VjZTBZbW11QzVKTWctQ3FYQk9GZ2VYRVdKMEo1RVp2S3Z0LTVVMV9OZE15ZURBejNCWVkteVdzZDRsMHc?oc=5

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · 3 Trends That Will Push Copper Higher in 2028
  - Yahoo · 2026-10-03 15:50 (ET) · https://finnhub.io/api/news?id=21df14319b7e7103f168cbafaf4c6cf433fb4d86298165e320739f7850264f5d
- **NVDA** · Berkshire Hathaway Is Buying Up Shares of This Beaten-Down Stock. Should You Invest Too?
  - Yahoo · 2026-10-03 15:36 (ET) · https://finnhub.io/api/news?id=68345a1daae76e2d4ca5c7a5428221c21f14f1895c32d2cfd87ac0b6b647d7dd
- **NVDA** · Dell Raised Its Quarterly Dividend by 20% This Year After Only Initiating Its Dividend Program in 2023. Can Passive Income Investors Trust the Stock?
  - Yahoo · 2026-10-03 15:20 (ET) · https://finnhub.io/api/news?id=868667daf30aa2606783ded81a5a7a798a019189729693ed3000f20d6f0a6440
- **AVGO** · If You'd Invested $1,000 in Broadcom's 2009 IPO, Here's How Much You'd Have Today
  - Yahoo · 2026-10-03 06:35 (ET) · https://finnhub.io/api/news?id=de6f4ce86dda1edc47278627dde91333c4e95c639dffff81f77b0de5e4686a17
- **AVGO** · Skyworks: The Qorvo Deal Could Finally Change The Investment Case
  - SeekingAlpha · 2026-10-03 03:47 (ET) · https://finnhub.io/api/news?id=84c6b97a573c7b1e05a87d1ef5799a3ab3bba145cff7aa48badde4f304d41389
- **AVGO** · Broadcom’s $42 Billion Loan to Anthropic Turns the Chipmaker Into Its Customer’s Bank
  - Yahoo · 2026-10-03 03:38 (ET) · https://finnhub.io/api/news?id=0abd9abfa2ae1bcdb75673375a1ae02548e1165c3de123394c9ee29021f55200

### 금융

- **JPM** · The Fed May Now Skip October Rate Hike — but December Is Still Very Much in Play
  - Yahoo · 2026-10-03 08:47 (ET) · https://finnhub.io/api/news?id=312204ff21771f91f7ea66dd73bc1b90b481b724409f2237ee516aedc92ee30a
- **JPM** · Jim Cramer Warns Q3 ‘Earnings Deluge’ May Not Be As Strong As Previous Quarter — ‘Much More Difficult Backdrop’
  - Yahoo · 2026-10-03 04:31 (ET) · https://finnhub.io/api/news?id=d03e238be3a81b552e5e9ad04401a3e74f63b8113dde1a4abc0878272c7b62eb
- **JPM** · Why So Many Wealthy Retirees Hoard Their Nest Eggs
  - Yahoo · 2026-10-03 03:30 (ET) · https://finnhub.io/api/news?id=c2e0a328aa19b0ac7a4d6c1ff8609ffd353f2b5ea9d72bb2922b0a2ec91a5955

### 에너지

- **XOM** · ExxonMobil: Set For Record Highs As War Profits Boom
  - SeekingAlpha · 2026-10-03 01:56 (ET) · https://finnhub.io/api/news?id=6a8e001eb0726f6e42728787309c0d142d15b48e25acc1293c5fc251ec046a93
- **XOM** · AI and Oil Shape Market Leadership in the First Nine Months of 2026
  - Yahoo · 2026-10-02 14:00 (ET) · https://finnhub.io/api/news?id=7c4c3874a60a96923407a06ce526d430149bb57fc8e4d0dfa35f05f7bed728ac
- **XOM** · The G-7 Oil Bailout Is Surprisingly Good News for Energy Stocks
  - Yahoo · 2026-10-02 12:38 (ET) · https://finnhub.io/api/news?id=9f0a871c58736fa90d7ad811caa1bde6d45ffe6aef226af782ef562988ee36cd

### 헬스케어

- **UNH** · UnitedHealth Reports on Oct. 13. Here's the 1 Number I'm Watching.
  - Yahoo · 2026-10-03 07:50 (ET) · https://finnhub.io/api/news?id=d1cc0b23a1dde919e129df302fc5231d3dbb68d3513b13ea945abaae69a35659
- **UNH** · UnitedHealth Group (UNH) Surpasses Market Returns: Some Facts Worth Knowing
  - Yahoo · 2026-10-02 16:45 (ET) · https://finnhub.io/api/news?id=30117f051ea478b83fffc33520e72768a7e1512fc9644027a325ff5f89f0fcac
- **UNH** · Friday's session: top gainers and losers in the dow jones index
  - ChartMill · 2026-10-02 15:10 (ET) · https://finnhub.io/api/news?id=d3c7a24ec996d4e6f3ea43028242317d0d3e49cd31ec72a434e469e2479a6725

### 소비재·유통

- **AMZN** · Amazon responds to data center backlash, says it no longer uses NDAs
  - Yahoo · 2026-10-03 14:43 (ET) · https://finnhub.io/api/news?id=b750d450728a5af20e921e8522aabab198da92df9bc7210a5607d461d343e5b1
- **AMZN** · The S&P 500 Is Not Enough: My 3-Stock Starter Portfolio for New Investors
  - Yahoo · 2026-10-03 13:35 (ET) · https://finnhub.io/api/news?id=1808834a7d9308a7a154d508d24cd51f3a2a5c1e021d54fa4ef43aedd91d1b3f
- **AMZN** · This Stock Posted the Best Performance in the “Magnificent Seven” in September. (Hint: It’s Not Nvidia.)
  - Yahoo · 2026-10-03 09:30 (ET) · https://finnhub.io/api/news?id=284602e45d1ad9c65269f1aa8700a068da02e30cd374a7b4dfbdf8b4e1940659

