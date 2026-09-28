# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-09-29 · 생성시각(KST): 2026-09-29 06:30
# 출처: Yahoo Finance chart API · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,746.25 | -0.74% | 7,803.75 | 2026-09-28 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 30,556.75 | -1.08% | 30,889.25 | 2026-09-28 16:59 |
| 다우 선물 (YM) | `YM=F` | 51,846 | -0.61% | 52,163 | 2026-09-28 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,839.6 | -0.69% | 2,859.3 | 2026-09-28 16:59 |

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 16.07 | +8.07% | 14.87 | 2026-09-28 16:15 |
| VIX9D (9일) | `^VIX9D` | 14.39 | +12.77% | 12.76 | 2026-09-28 16:15 |
| VIX3M (3개월) | `^VIX3M` | 18.23 | +1.67% | 17.93 | 2026-09-28 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 91.02 | +3.62% | 87.84 | 2026-09-28 16:15 |
| SKEW (테일리스크) | `^SKEW` | 146.25 | +0.92% | 144.91 | 2026-09-28 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 미 10년 국채선물 | `ZN=F` | 104.47 | -0.37% | 104.86 | 2026-09-28 17:00 |
| 금 | `GC=F` | 4,148.5 | -4.00% | 4,321.2 | 2026-09-28 16:59 |
| WTI | `CL=F` | 93.29 | +0.95% | 92.41 | 2026-09-28 16:59 |
| 달러지수 (DXY) | `DX-Y.NYB` | 101.2 | +0.22% | 100.97 | 2026-09-28 17:20 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.134 | 콘탱고 |
| VIX / VIX9D | 1.117 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.017 | 1.393 | 2,440,728 | 2,482,737 | 29,436 |
| 나스닥100 ETF 옵션 (QQQ) | 1.106 | 1.398 | 4,823,070 | 5,335,269 | 11,388 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **CNBC** · Michael Burry believes the AI bubble 'may burst' sooner than he first believed
  - 2026-09-28 16:43 (ET) · https://www.cnbc.com/2026/09/28/michael-burry-believes-the-ai-bubble-may-burst-sooner-than-he-first-believed.html
- **Reuters** · Stocks fall as higher oil prices, Treasury yields weigh - reuters.com
  - 2026-09-28 16:38 (ET) · https://news.google.com/rss/articles/CBMitwFBVV95cUxOMG5ieTU4M0RYMC1lQi0wbDVONnJJbW5NS3pya2xkLXUxSFF3ajh5ZWlER3B5ZW1IR0J3ZjRxZFFCTDd2ajh4ZnVHZ2xqY1U2c0pIamh2MGhzWVlIMVVieHpOXzg0bnJwRFlTaEg4dVdycUc1X25ZQlZkUUsxUGZ3TGc1RDlNWjg2U1RFQ3JEUWx2NGIxb0ZvZXJJb0F6MjcxOER2WHFIdmtSei1fZHdBS29YcGhvUFk?oc=5
- **Reuters** · EXCLUSIVE: US to grant sanctions waiver for flights between Iran and Iraq's Najaf, source says - reuters.com
  - 2026-09-28 16:31 (ET) · https://news.google.com/rss/articles/CBMiwgFBVV95cUxQOHIxYnY3TE1lQ1JIaWFqTGo2bE5IZ20wamRnZUhEMVdaZWdfWVRQVUpUQjFTSUg1elR2a1dMb1RwNTNnMmg1QXExOGthdmlQbkIweWwyS3JNaXVocWlPRU9kLWRQWmRQSlY1dHVWQ014b1cxT2dPY3pvUmNpMENwN29NV0E3VWpmaEU5N0h6WDFzcjBmNTBQSjlKRlRRQ2dpZEdHX3JUSGh5aTZiTjc0S0FTMmpfeUFld1VXZjd0LXloZw?oc=5
- **Reuters** · Trump says US will win Iran war 'very soon' - reuters.com
  - 2026-09-28 16:26 (ET) · https://news.google.com/rss/articles/CBMimwFBVV95cUxOTG94TG8yOEo5eWNpRUFIUkMta1JRQ2RPZUJiTWxVbXdfdENtbmJxOXZOYUgxRTY5YUJ5eW92Z2tSUWtoVGVobXhhUk5CTkVBMW1rMndfR2FldUZud05YSkZuSFZRSmZQTU1xbmhSTFQyd3ozTk5LYVp1OGZzWGRvWWt6clZ1UzViY2JhMVVlODhvSFNTQno0Y1ZKOA?oc=5
- **CNBC** · Meta's splashy new business AI hire offers yet another reason to bank on Zuckerberg
  - 2026-09-28 16:01 (ET) · https://www.cnbc.com/2026/09/28/metas-splashy-new-business-ai-hire-offers-yet-another-reason-to-bank-on-zuckerberg.html
- **CNBC** · Boeing 737 Max 10 certification delayed by software issue, FAA says
  - 2026-09-28 15:46 (ET) · https://www.cnbc.com/2026/09/28/faa-boeing-737-max-10-certification-delay-software-issue.html
- **Reuters** · Suspected plot to attack UK's Fairford airbase, used by US: What do we know? - reuters.com
  - 2026-09-28 15:12 (ET) · https://news.google.com/rss/articles/CBMilgFBVV95cUxPbnV2QWZzNUNIR09FaDEtTFBwU0g2SmZwZ0U3YVNNd0kyVGFQTDFLU2Y1T1FSOUFnSVNHNmtoc2hCYklVeHg4QVJ0UDJPRndqZVBiV3h1U3ZsZmpRQzdELWdMejhzazZMenlmT3FrdkVaM0dBRlBieGRlWG1DRDVnOTB0bjhiT3ppNzZSaWFwc2tGMU83U2c?oc=5
- **Reuters** · US, Iran set to hold separate talks with mediators on Monday or Tuesday, official says - reuters.com
  - 2026-09-28 15:11 (ET) · https://news.google.com/rss/articles/CBMizAFBVV95cUxQMmZHcTFrcTNwTDVHTi1veU9KdXk1SC11X1NDWHB3VnBhbUQyOXh6Y002MFJaN1cyb0pfLVRIZnE4RUgwR1pieG0zY05NajZrNmFIbl9CTmpGbENaa01VOGEwZVZURnphdVdmUHJ2cWxGMURSNXNrRzdGanlKdWhqc0NiMWlHRnhTWlN4dlZIMjlNSEhxVlpkNFI4N1VTWHZfYWZsNi1lcE9GYjFsWDVmRW1QbFk2WjBhTWpfUS1aSTBNc3dBYW90RDVadjg?oc=5
- **Reuters** · UK examines foreign state involvement in suspected airbase plot, releases suspects - reuters.com
  - 2026-09-28 15:11 (ET) · https://news.google.com/rss/articles/CBMirAFBVV95cUxQSXYwS1pBdDdVa1JYckZZdFNGeWpwdGRUR0hOX1NuMV9vOWFBYUlDbDAzdjFVbVZ1c2J1N0xrM0hPc2RvLVhlM2d5MlZ4WnJtOW9iSzJGNEw2UTJhR25tdWZKYzhucGVKZG1sRDYyZDZudmViaGRjMmdLNVdqS1NWZERRR3EyY1JxMG5tWUNDTTJpZFJxbHZkR0FqU3BPdFBpMTdGWmVWOGQzOEJq?oc=5
- **CNBC** · What the market needs to branch out beyond AI stocks. Plus, a win for CrowdStrike
  - 2026-09-28 14:54 (ET) · https://www.cnbc.com/2026/09/28/what-the-market-needs-to-branch-out-beyond-ai-stocks-plus-a-win-for-crowdstrike-.html
- **CNBC** · Feds can't withhold counterterrorism funds from states to force election admin changes, judge rules
  - 2026-09-28 14:41 (ET) · https://www.cnbc.com/2026/09/28/elections-dhs-counterterrorism.html
- **Reuters** · EXCLUSIVE: Russia raises 2027 military spending by 27%, budget documents show - Reuters
  - 2026-09-28 13:56 (ET) · https://news.google.com/rss/articles/CBMiqgFBVV95cUxPbHg0MGZvUkU3a2FULXNNc1pDUkE5VTZaZFptZ0R0dHhoc29SbmotRkg5SndfWk1rcy1hbzAxY2VKbDhzUVIxUlpoaVZCU0MwYmRub0FGR1VOaHpjaXBxTmhPcnJ5MDJUOExCTE56X3h6aDVRR2FRN1V1VWRJMmNnYTNBOXhxVjlJd1hHbnZfVWo1Rk55d04xM1FGOTdfbU1BVmZHYVgyb0tYUQ?oc=5
- **CNBC** · A key test looms for the AI trade this week. Here's how Mike Khouw is trading it
  - 2026-09-28 13:48 (ET) · https://www.cnbc.com/2026/09/28/a-key-test-looms-for-the-ai-trade-this-week-heres-how-mike-khouw-is-trading-it.html
- **Reuters** · Tether USDT aids Iran funding, Senate report says - reuters.com
  - 2026-09-28 13:31 (ET) · https://news.google.com/rss/articles/CBMimwFBVV95cUxQeTFWcFFUbzgwQjJVWElLM051dkpBTS0tcFBQdHNOb1V0VFh0XzROWjJWOXFxRjRfcUpmSnhNRFU3TDhnWDlSaDNlWDQxNUY2ZUFPeDZJZ0RmUVVPSURrdGRLaUM2VTFIYmtvV1NfTGhaU1BSakF5dFFTMEpTUUVtazVuOUtlYjRYc2ExZUZZQ1YwdkgxVGlFYjdOSQ?oc=5
- **CNBC** · Ex-Disney CEO Bob Chapek says he raised concerns with the board 'weekly' during Iger power battle
  - 2026-09-28 12:02 (ET) · https://www.cnbc.com/2026/09/28/disney-bob-chapek-bob-iger-power-battle-board.html

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Nvidia Drops Massive Number on Anthropic AI Spending
  - Yahoo · 2026-09-28 15:36 (ET) · https://finnhub.io/api/news?id=a196ababba6aa59da53bb9a26ff882d7e5b2f7ba14de51f0f27e3e192fdc9fa7
- **NVDA** · Why Shares of Perpetua Resources Are Falling Today
  - Yahoo · 2026-09-28 15:27 (ET) · https://finnhub.io/api/news?id=8aeba5459d58172d3d1a0f50acea530aa79740016fe933b1b99bd03cf07b893b
- **NVDA** · Stock Market Today: Dow Off Lows After Iran Report; Leisure Play Tests Entry, MongoDB Dives (Live Coverage)
  - Yahoo · 2026-09-28 15:21 (ET) · https://finnhub.io/api/news?id=70264a29e24365fb5c6be9aec79d18e27480789e8f75419c4829c491d4c98ba7
- **AVGO** · Broadcom Stock Slips Lower as $115 Billion Forecast Raises the Conversion Bar
  - Yahoo · 2026-09-28 15:35 (ET) · https://finnhub.io/api/news?id=acb1d609aa4809e9aea1a204f9b1f0a01c54c30f1eccebe9cd1c1752f7187026
- **AVGO** · When Should You Buy NVIDIA Stock After This Run?
  - Yahoo · 2026-09-28 13:24 (ET) · https://finnhub.io/api/news?id=c538610b3401de0da1d9f4e05e0b62fc909bea232630fa32243413b867fd623c
- **AVGO** · This Chip Giant's AI Revenue Grew 221% Last Quarter. It's Also Quietly Raised Its Dividend for 15 Straight Years.
  - Yahoo · 2026-09-28 12:20 (ET) · https://finnhub.io/api/news?id=a46d3214393c70390bd9802897d2f849148d788776e24979ee07b92622e87c1a

### 금융

- **JPM** · Top dow jones movers in Monday's session
  - ChartMill · 2026-09-28 15:10 (ET) · https://finnhub.io/api/news?id=e7314e47396ff982ffb99f585545511c858008d4c9e0017fe81912982ec663c9
- **JPM** · JPMorgan Stock Slips 1% as Bank Agents Get an Open Safety Layer
  - Yahoo · 2026-09-28 13:01 (ET) · https://finnhub.io/api/news?id=6b02a3f5b42a58d67432c97214734bd19bf99ef8ded0256d871ac308a4836a2f
- **JPM** · AZO Stock Gets A Target Reduction From JPMorgan – But Analyst Believes It’s Good Time To Add To Positions At Current Levels
  - Yahoo · 2026-09-28 12:55 (ET) · https://finnhub.io/api/news?id=785951bf421fcf2b21910a507803415554e479b03f867092a10ae016c7c0b61b

### 에너지

- **XOM** · TD Cowen highlights top oil stocks ahead of earnings season
  - Yahoo · 2026-09-28 14:19 (ET) · https://finnhub.io/api/news?id=38874fb42608aaa765b213064a5843f41d9f400722228a98814953e873d944f5
- **XOM** · Why Your Energy Bill Is About to Skyrocket $1,465 a Year Higher — Unless This Happens
  - Yahoo · 2026-09-28 11:14 (ET) · https://finnhub.io/api/news?id=e8abc9537b3f6be23d407dcc9457f10292b4ebe11a64f41652d1e49186d65279
- **XOM** · Nvidia, Meta, Kodiak Sciences, MongoDB, SpaceX, IonQ, and More Stocks That Explain Today’s Market
  - Yahoo · 2026-09-28 11:09 (ET) · https://finnhub.io/api/news?id=fdfb40cce8f6d87e54afa9f75537ce079cc9acea3ec7d68594b9de582c29f2ee

### 헬스케어

- **UNH** · 2 Healthcare Stocks to Target This Week and 1 We Avoid
  - Yahoo · 2026-09-28 06:38 (ET) · https://finnhub.io/api/news?id=755d2c372c9a61d3c7e7d4171d959a6953d7d8fb9e6d1302ea12d1028db6c15a
- **UNH** · 67-Year-Old Costs Himself $1,315 A Year In Taxes Using A Treasury Fund To Add $1,000 A Month In Income To His Social Security And Pension. If He’d Used SCHD Instead His Tax Bill Would Be Reduced By Over 60%
  - Yahoo · 2026-09-28 05:27 (ET) · https://finnhub.io/api/news?id=cbaefe9f2f33b433c3e2be0f065bd6309a549534ce6ac4c69f0fb9a0dbc5042a
- **UNH** · UnitedHealth: Quality Dividends From Health Insurance
  - SeekingAlpha · 2026-09-28 04:00 (ET) · https://finnhub.io/api/news?id=f463fa6e2bd37549916bd7ad3f74c4807150d991a9250b95f961c64e11e7275c

### 소비재·유통

- **AMZN** · Amazon Has a $10 Billion Holiday Catalyst Coming in October
  - Yahoo · 2026-09-28 15:44 (ET) · https://finnhub.io/api/news?id=1bef18267c1ed72aded04798b1ff3541022ddcc3b5db7536ea5a9fa7209ef25f
- **AMZN** · Amazon, Walmart Face Record $275 Billion Holiday Rush
  - Yahoo · 2026-09-28 15:43 (ET) · https://finnhub.io/api/news?id=6ef122efe459c5819ebdd9d711c712449ea820eacafd12a6523991e366cc3b60
- **AMZN** · How Has Alphabet Stock's Story Changed?
  - Yahoo · 2026-09-28 15:31 (ET) · https://finnhub.io/api/news?id=e889819364be642924cf9f77fb92061179e2e8b57136d062a75b9d417d1db01a

