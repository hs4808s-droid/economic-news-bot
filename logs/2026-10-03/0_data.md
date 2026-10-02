# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-03 · 생성시각(KST): 2026-10-03 06:30
# 출처: Yahoo Finance chart API · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,776.5 | +0.68% | 7,724 | 2026-10-02 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 31,049 | +0.94% | 30,760.5 | 2026-10-02 16:59 |
| 다우 선물 (YM) | `YM=F` | 51,485 | +0.48% | 51,241 | 2026-10-02 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,851.8 | +0.88% | 2,826.9 | 2026-10-02 16:59 |

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
| 미 10년 국채선물 | `ZN=F` | 104.38 | -0.27% | 104.66 | 2026-10-02 16:59 |
| 금 | `GC=F` | 4,172.1 | -0.72% | 4,202.3 | 2026-10-02 16:59 |
| WTI | `CL=F` | 91.26 | -1.73% | 92.87 | 2026-10-02 16:59 |
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
| S&P500 지수옵션 (SPX) | 1.155 | 1.426 | 2,415,022 | 2,790,016 | 29,292 |
| 나스닥100 ETF 옵션 (QQQ) | 1.058 | 1.452 | 4,523,424 | 4,785,487 | 11,432 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **Reuters** · Israeli officials to question co-pilot of flydubai flight, source says - Reuters
  - 2026-10-02 16:20 (ET) · https://news.google.com/rss/articles/CBMiuAFBVV95cUxQVGxxTlpqUHE0NEg5VG14WnhFcU54UVJnSjV4SUdEdGxUVXlUSTVUMkNRQWtDand4UmUxdWtONDlfU2Z5QW5kSVc5NTJrekxscVdoQ0hvT2UyaWdFNHA0dnozZHVHcVViZkJxZmdhTE1zMDAyQlpXOERLMm1NU2pHckFpakUwRWR0V1NfTXRfSTlaQlBjSHNJdXVueGgzd2hUSUl3ZUtSZVA2ZDJ2QzBNdTdMeXdoUDVI?oc=5
- **Reuters** · Two Iranian nationals charged over alleged terrorism plot targeting Jewish community - Reuters
  - 2026-10-02 15:48 (ET) · https://news.google.com/rss/articles/CBMiugFBVV95cUxPN1pSQkNGMThITHRzNldaeUlFYjFYWk5Bckx6cllZZkJXU0R5ZEtkTGpxcDdxX3B5c1pQZFlzN0hvOGNjUjMtR2tMRW5iVDg0bVRERkk4RXBKT2dmUEJmdDJjZWNpSXVJTHhqdGp2SzdPSkVMY3pkM0xaVnBoTXZyZi1EaF9uRGtkWTlYenhvSDVKU1BXUEZ4cFA4SWlOWHVhSDBjeExKZ2ZnTVB1M281WUdWd3NvM1hJenc?oc=5
- **Reuters** · EXCLUSIVE: G7 countries agree on release of diesel and oil stocks after US pressure - reuters.com
  - 2026-10-02 14:22 (ET) · https://news.google.com/rss/articles/CBMixAFBVV95cUxQZnMyRFpEcDhNOHlnU2NJT3F1R2M5QkEzMjJPaGRUYlZ1S2RYYmNMZ1pERlZINEtxMkJDTktfMThYeHZ0U2FDZjVoQ3l3eHViLVkyajQ0S1RfSDJ4QS1xTEgxNVlaZzJSSkVjLTJYM04tX3ZHUEVSY0VHdjJHUU45RHBRajVxQzA3emVQNXpvRG9XRVVVZUtSdUtveUN2WUp6RzhBeVQwQ0JzVk8zWWYzS1FCVUtTZ3UtNTllVzJrbTJyUC00?oc=5
- **Reuters** · Saudis plan assault on Houthis to break Red Sea chokehold - Reuters
  - 2026-10-02 14:13 (ET) · https://news.google.com/rss/articles/CBMiqgFBVV95cUxPUVJialJyWHg0VzlHXzBiaTU3elZhbWEtQzd0TjhNOGNsWFFZNTYyMGFqODJGcVc3aVBaYVY3QkRzWWpEZDlQNEpJeVp6ZjMxYkZKYi1nZ0FUenFUSFRFRTNCb3NaTmdCaTJ1WWV1RmlqcmhSZGtsZWZobE5jSHp3RkJiVXpueWdVOHJmbDhzUEEzVXB6OF9jYkJHcnpfQklTNDVHZ20yS1J6QQ?oc=5
- **CNBC** · Friday's rally in the S&P 500 might not be enough, but Linde is out of this world
  - 2026-10-02 14:03 (ET) · https://www.cnbc.com/2026/10/02/fridays-rally-in-the-sp-500-might-not-be-enough-but-linde-is-out-of-this-world.html
- **Reuters** · Photos of the week - Reuters
  - 2026-10-02 13:57 (ET) · https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBST1Vlam5INGJkYkZwRklEdXp4bXlJOFpsRUxtR2M2UUt3Snd2dl9Cd3g1MUJQM0dvWWJUM3h5cjBxRkZRWjFoYUZuU1BfZEpzNGVHTTg3a3JzMVZtUnpjSHNwMjNjX2M?oc=5
- **Reuters** · Iraq says 40 daily Iranian flights cleared to fly to and from Najaf - Reuters
  - 2026-10-02 12:37 (ET) · https://news.google.com/rss/articles/CBMiqgFBVV95cUxNVkJSVEI3TWpXNlBROHk2RmowaVBxM0RhTlBEcmF0aVdwbnI5blc4R3hvV0J6QUo1UGxTMExXT0xtMnNqcXJrZEtjUG5fZGtnc1hSZjEtNWdSYTg4dGFxMlBneG5yMDhxTzdVVEdWenhsZmdnZl9WdFhqMEZVOEdiN0pINUp4djFQa0Y2SUV2R1MxRkdJbEwxTnVHN1JmTWVTb3B6RUMwMjVBZw?oc=5
- **CNBC** · 1.7 million skilled trade jobs will open annually through 2035, report says—experts don't know who will fill them
  - 2026-10-02 12:15 (ET) · https://www.cnbc.com/2026/10/02/1point7-million-skilled-trade-jobs-to-open-annually-through-2035-report-says.html
- **Reuters** · UK new car sales rise 12% in September as EVs and Chinese brands gain ground - Reuters
  - 2026-10-02 12:01 (ET) · https://news.google.com/rss/articles/CBMivgFBVV95cUxOeHZ6ZW1IM2ZoUVdSWTVLdVA3cHRxQmE1STZ5aXQ4akJGc3V6NExmVnpZOGtJUHhMajdvY2FwclpscEsxYzRqcnlSM3UwbXpoWW5iMjdjVWlMeFZ6THJCWWpMWkFpZ2k1UG1jTjd2V3JhVGZmb005MDlNQnRTT25ldHlCQUZuTTNIWkFnd3diQzNvZ0NYVWgyeVZZUkVtQkEtQ1lIclNndTVicXN5NF9haVZCZlJUaWZvLUpubWp3?oc=5
- **CNBC** · The sector in the cross hairs of the bond sell-off looks poised for a bounce, says Mike Khouw
  - 2026-10-02 11:34 (ET) · https://www.cnbc.com/2026/10/02/the-sector-in-the-cross-hairs-of-the-bond-sell-off-looks-poised-for-a-bounce-says-mike-khouw.html
- **CNBC** · Nvidia breaks through to new record highs. Plus, more good news for Boeing
  - 2026-10-02 11:31 (ET) · https://www.cnbc.com/2026/10/02/nvidia-breaks-through-to-new-record-highs-plus-more-good-news-for-boeing.html
- **CNBC** · American starts letting customers mix cash and miles for tickets
  - 2026-10-02 11:00 (ET) · https://www.cnbc.com/2026/10/02/american-airlines-tickets-cash-miles.html
- **Reuters** · US issues sanctions against Hamas financing network, Treasury says - Reuters
  - 2026-10-02 10:33 (ET) · https://news.google.com/rss/articles/CBMiuwFBVV95cUxOMkdRRkxGNHBqcFM5b0RNbjRMU2NXeXFWUXdselk3QVNzVkNqSWw1aWdJTjQyc0VWeFNqSjB3dGtjaWdpdHZuYzVxaVdKQmM4X0lMRC10UnlzRWFndmFWUVlrU2l4NG5nR2QyNnJ0Z3AwNE91QXlVV2IzNG5RcENFVTViWEw4ek5xank2YU80OGVGRWV5RGVOcXVwZi1xSXhzaElHMWxndFFqQXQ0Q01YeHFoSllfeTJ1TWJv?oc=5
- **Reuters** · Iran readies harder retaliation if attacked as diplomacy faces long odds - Reuters
  - 2026-10-02 10:32 (ET) · https://news.google.com/rss/articles/CBMiwAFBVV95cUxPQTk2ZFJ4YklNcjZMNEJ3aWlPSG9HZlZ5RzF1Q3o1RW16emhJWUQ3VVFkV3luT3FjSG9EaFVpR1VpYjRnMElVWFR0SFJ2Y1FRT0lNVHV6bHExMmJlbGI2U2FKMkRDakE5clVydmdkUkRXY3plNE16ZHVMZEhGNWtwQ25Nd2lQRndnM1lPTnJOSkx2ODNjeUloUGhaemlLMTR5NGY4ZmZnWnBpVG45RGwzcGVjcTU4SjNaRjdVd0ZSdlI?oc=5
- **CNBC** · Facebook whistleblower Frances Haugen questions whether AI companies can police themselves
  - 2026-10-02 10:22 (ET) · https://www.cnbc.com/2026/10/02/frances-haugen-ai-self-regulation.html

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Sector Update: Tech Stocks Gain Late Afternoon
  - Yahoo · 2026-10-02 15:52 (ET) · https://finnhub.io/api/news?id=aaad6fa5523ac6607e97cfb964e50b11a453375ea2f37862226a861e3f0d6720
- **NVDA** · Nvidia puts $500 billion on the table, challenges banking as we know it
  - Yahoo · 2026-10-02 15:47 (ET) · https://finnhub.io/api/news?id=5332621f0198188c687f5bf216273be9a4dc16c6b23377d4d6060070f2ad42eb
- **NVDA** · How Bloomin' Brands Stock Lost 24.8% Last Month
  - Yahoo · 2026-10-02 15:37 (ET) · https://finnhub.io/api/news?id=8dfae367b0553af224ba901acc17a754d6abd6431cbb0041c6804d6bc32a4c15
- **AVGO** · Broadcom Bets $102 Billion on Anthropic Chips
  - Yahoo · 2026-10-02 14:35 (ET) · https://finnhub.io/api/news?id=1cd84cf9278582a8a2d552adc88cb27bcd91e73379b8bff844d4a48fabd846ea
- **AVGO** · 4 Unexpected Dividend Payers Income Investors Completely Overlook
  - Yahoo · 2026-10-02 13:45 (ET) · https://finnhub.io/api/news?id=22018184f038ccee3ebc7f5886392db30cd5adffd920d125e2a1271497497a3c
- **AVGO** · Got $1,000? 2 Growth Stocks Building the Data Centers of the AI Infrastructure Supercycle.
  - Yahoo · 2026-10-02 13:03 (ET) · https://finnhub.io/api/news?id=386cfe521d6ef503072db9f1a16754edc08b9c47eea912b3ecbe62ac87da9bef

### 금융

- **JPM** · Friday's session: top gainers and losers in the dow jones index
  - ChartMill · 2026-10-02 15:10 (ET) · https://finnhub.io/api/news?id=d3c7a24ec996d4e6f3ea43028242317d0d3e49cd31ec72a434e469e2479a6725
- **JPM** · JPMorgan (JPM) Reserves for Losses That Have Not Arrived. What Is the Buffer Really For?
  - Yahoo · 2026-10-02 14:30 (ET) · https://finnhub.io/api/news?id=60605d22a9f0e7d6ed1eebd2d560dcbbef8e0640dec24bea28246567453d8cde
- **JPM** · Bank Stocks Are Lagging the S&P 500 by the Most Since 1990
  - Yahoo · 2026-10-02 13:38 (ET) · https://finnhub.io/api/news?id=7d4f23f546fccf9d0520388d2288d1e9913d660ca12ae8d50e0c1e159dca28a8

### 에너지

- **XOM** · AI and Oil Shape Market Leadership in the First Nine Months of 2026
  - Yahoo · 2026-10-02 14:00 (ET) · https://finnhub.io/api/news?id=7c4c3874a60a96923407a06ce526d430149bb57fc8e4d0dfa35f05f7bed728ac
- **XOM** · The G-7 Oil Bailout Is Surprisingly Good News for Energy Stocks
  - Yahoo · 2026-10-02 12:38 (ET) · https://finnhub.io/api/news?id=9f0a871c58736fa90d7ad811caa1bde6d45ffe6aef226af782ef562988ee36cd
- **XOM** · 4 Big Oil Dividends Ranked by What Matters When Crude Falls
  - Yahoo · 2026-10-02 12:15 (ET) · https://finnhub.io/api/news?id=a55c3f86e732054cfeef1912fa813c85f37655fe93977004a5cfc72b554c3921

### 헬스케어

- **UNH** · Friday's session: top gainers and losers in the dow jones index
  - ChartMill · 2026-10-02 15:10 (ET) · https://finnhub.io/api/news?id=d3c7a24ec996d4e6f3ea43028242317d0d3e49cd31ec72a434e469e2479a6725
- **UNH** · UnitedHealth and Humana cutting Medicare Advantage plans in 2027
  - Yahoo · 2026-10-02 13:26 (ET) · https://finnhub.io/api/news?id=95659ce457d3c5238beca1a4664dd95f6733e39c74c397a8f6dd45402365a0aa
- **UNH** · What's going on in today's session: dow jones movers
  - ChartMill · 2026-10-02 12:40 (ET) · https://finnhub.io/api/news?id=95613688eae498627faf1e9092765e34d9fd7c907f05ffb6d9f5ff73e0147392

### 소비재·유통

- **AMZN** · No Longer Complacent, Carter’s Finds a New Groove
  - Yahoo · 2026-10-02 15:49 (ET) · https://finnhub.io/api/news?id=da579ec0054f549b0184f779428ca9845c8ea8370c9986e294c104ad2e7d9745
- **AMZN** · Friday's session: top gainers and losers in the dow jones index
  - ChartMill · 2026-10-02 15:10 (ET) · https://finnhub.io/api/news?id=d3c7a24ec996d4e6f3ea43028242317d0d3e49cd31ec72a434e469e2479a6725
- **AMZN** · What Are Amazon Investors Paying for AWS Without Investment Gains?
  - Yahoo · 2026-10-02 14:26 (ET) · https://finnhub.io/api/news?id=766e0167896a74df11dbf31c39934a184506de85778df3fea96aa251a38368a9

