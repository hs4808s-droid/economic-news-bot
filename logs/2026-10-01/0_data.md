# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-01 · 생성시각(KST): 2026-10-01 06:30
# 출처: Yahoo Finance chart API · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,721.5 | -0.14% | 7,732 | 2026-09-30 17:00 |
| 나스닥100 선물 (NQ) | `NQ=F` | 30,725.75 | +0.37% | 30,613.25 | 2026-09-30 16:59 |
| 다우 선물 (YM) | `YM=F` | 51,295 | -0.79% | 51,702 | 2026-09-30 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,819.2 | -0.35% | 2,829.2 | 2026-09-30 16:59 |

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 16.34 | +1.87% | 16.04 | 2026-09-30 16:15 |
| VIX9D (9일) | `^VIX9D` | 14.2 | -0.07% | 14.21 | 2026-09-30 16:15 |
| VIX3M (3개월) | `^VIX3M` | 18.37 | +1.55% | 18.09 | 2026-09-30 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 89.48 | -0.26% | 89.71 | 2026-09-30 16:15 |
| SKEW (테일리스크) | `^SKEW` | 141.92 | -1.84% | 144.58 | 2026-09-30 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 미 10년 국채선물 | `ZN=F` | 104.23 | -0.18% | 104.42 | 2026-09-30 16:59 |
| 금 | `GC=F` | 4,189.1 | +0.22% | 4,179.7 | 2026-09-30 16:59 |
| WTI | `CL=F` | 90.34 | +1.07% | 89.38 | 2026-09-30 16:59 |
| 달러지수 (DXY) | `DX-Y.NYB` | 101.45 | +0.08% | 101.37 | 2026-09-30 17:20 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.124 | 콘탱고 |
| VIX / VIX9D | 1.151 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.101 | 1.402 | 2,330,739 | 2,566,126 | 30,100 |
| 나스닥100 ETF 옵션 (QQQ) | 1.176 | 1.431 | 3,184,749 | 3,745,672 | 11,284 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **Reuters** · Passengers foil bid to crash Dubai-Tel Aviv flight, Israel says, after co-pilot-on-pilot stabbing - Reuters
  - 2026-09-30 15:49 (ET) · https://news.google.com/rss/articles/CBMixAFBVV95cUxOWnpLNmZJUXN6UzQ0RlhKSFhxT2xYMWZ1R1VwYVdZX3ZuZWFTYUZyV1VYTVhralA5Y0ROVjlNVl9XOGpTSWhEcGM3UE01WVA3clNKcm5KdDZ2dUY1U3FyODdsWkkzSWs2VW5NZUJWQXFYQ0dxamNudlljZl92REs3SnFXSEUzTEswdjh4NnRia2VWZGd2TGE2SmZ6VDBQTXpiRDM0SDZSZ29ubUZUd3Zsa0E4LTBoRmxpSDRjd0JkcmhYbkNV?oc=5
- **CNBC** · Why Jim Cramer isn't buying more Boeing despite its huge Navy contract win
  - 2026-09-30 15:47 (ET) · https://www.cnbc.com/2026/09/30/why-jim-cramer-isnt-buying-more-boeing-despite-its-huge-navy-contract-win-.html
- **Reuters** · Oil prices rise by about $1/bbl on stalled US-Iran talks and tight fuel markets - Reuters
  - 2026-09-30 15:16 (ET) · https://news.google.com/rss/articles/CBMitgFBVV95cUxPbEZNSGlvd0hfTjdOVTQxTEVYczRjUjdId3NlSGJDSV90UVVjTGhjaFF2OS1xckpOWElrcWRoUXNPa29WTHhsLW9yWVc2N1REdXZONl9iZ2ZUSkNOQ0xndE16LWpMa3c3T2FHWE0yajBlek1La3hVeTVnWkpLc2hhTTRNMnVILWY0RG9VbzVVZnZGV0JmM3VJWkNhVmlfNDlVMThOSVNtNlR3cFJUekNpMVZ3aE03Zw?oc=5
- **CNBC** · Wall Street is closing out a strong quarter. Plus, Lilly's mixed obesity drug trial data
  - 2026-09-30 14:57 (ET) · https://www.cnbc.com/2026/09/30/wall-streets-strong-quarter-plus-lillys-mixed-obesity-drug-trial-data.html
- **Reuters** · Israel to ramp up pilot checks after flydubai scare - Reuters
  - 2026-09-30 14:54 (ET) · https://news.google.com/rss/articles/CBMipAFBVV95cUxOX1J1a0RUdFZlOHpZY3RrM0FDaWVyamd4Rk5hUHZ4aVpMZHFwd0NpS1RYaGthT0NkOXNKRUlnam9PelFpUGM5V1RTN2hvMzY5X0EwWUlDa2xLUUp6SlNBRktQWE1JSERza004ellOTTFMaXR0N293VDl1WGxWRnd6eXVsN3BlZ1RwMkRNa1VJM05qc3RqS2k3OU15M1RrVEpTbnFwaA?oc=5
- **CNBC** · Two trades that just happened in 'Magnificent Seven' stocks point to big gains ahead
  - 2026-09-30 14:47 (ET) · https://www.cnbc.com/2026/09/30/two-trades-that-just-happened-in-magnificent-seven-stocks-point-to-big-gains-ahead.html
- **Reuters** · Israeli strikes kill seven people in Gaza, medics say - reuters.com
  - 2026-09-30 13:56 (ET) · https://news.google.com/rss/articles/CBMipAFBVV95cUxPamZFVnF3ODVXUkV4Q3ViOWR5aEpob1QzOVJWSTdQQ0otU2p0MkVTaWdJRXVfTU1hUng1eGZ3dkJqVk1JVjZlV0E0WVVUdGV4NzFZNF9OQ1FaRlFHdmJNRUJVNk84UUJNcDN5Nm41UzhhM21qV1NPaDgzMndCQVI1bG42OVBBWU5QWnJLUklLTHR3bmpGUEstano1Q1lwOVl1RDZZcg?oc=5
- **CNBC** · MGM CEO leaves door open to People Inc. bid as casino dealmaking heats up
  - 2026-09-30 13:50 (ET) · https://www.cnbc.com/2026/09/30/mgm-barry-diller-people-inc-casino-dealmaking.html
- **Reuters** · Saudi Arabia turned down Israeli request to allow its planes to pick up Israeli passengers, security sources say - Reuters
  - 2026-09-30 12:20 (ET) · https://news.google.com/rss/articles/CBMixgFBVV95cUxQbFpGNk5ZNkpKU3hHQ0JreW1HOGw0bzZhNVpoTXM3SnV5cmh3ZFBhNTctYUJVc3FXT3FzNUZHWmpfdlotRU9PdV8xQVZMZTRhMmhiNkZKcUcxa1QyT1FFYWwxWS1DaVRVZ01oSzJzaldkckNRTEl5M2Q3S1dPaERfcnVlemdwaDhTWUJhZGh4LXhaZVo1T3VfeTRZMmtaYmY4WnJmWUhfOTUzcjlfbE1aYUMtakIwNThoTkxldnlBWWZKZ1AxckE?oc=5
- **Reuters** · UK links Iran to suspected plot outside airbase used by US bombers - Reuters
  - 2026-09-30 12:19 (ET) · https://news.google.com/rss/articles/CBMilwFBVV95cUxPLXZwczdvclVqQk9CUG8tcG81SUlpdmZLcVUtcmxUWW1xLXFQU09BX3FhZ2NkRnlOMUNZaUJiOW4yT09PLVR4TGUxQW9yT2xuOTU5VzY3dVVoeXNhLVRpWTVIU01obUpZd1hKZElLMks0OGRydDRyMFZYTjZ6cWdnbElqbFpLQW5abGx2ZHZlck1ta0ZSNmxn?oc=5
- **Reuters** · EU aviation agency issues Saudi airspace advisory after Houthi attacks - Reuters
  - 2026-09-30 12:09 (ET) · https://news.google.com/rss/articles/CBMiwgFBVV95cUxOQWJfYXZITmYzSU9mUTRTTlBVdm5fWm5IUHE0dWxwY28wR2tqbUI4eGdNTU0tRDJvR2Y4SDFLWlUxUUY4dkdEdzlOcGoyWTcyN3Z0eXc3bzRkQWlEMUZyZE80cXpnZjg0VDZvZXNsRElURDdDTDROOFNEZTAydWRpQkJiX2hfNGQ0UmU1Y2Q2NF92REtqNVExeDFEZVotNmxLZXdRUVlXRzRsTFk2UWJ5REMxZXROSnRnUXI3UHNBQnVFdw?oc=5
- **CNBC** · Higher interest rates can be scary for stocks — but it's not that simple
  - 2026-09-30 11:43 (ET) · https://www.cnbc.com/2026/09/30/higher-interest-rates-can-be-scary-for-stocks-but-its-not-that-simple.html
- **CNBC** · Parents who want to help their kids in a tough job market should avoid this 1 move, says career expert
  - 2026-09-30 10:40 (ET) · https://www.cnbc.com/2026/09/30/parents-avoid-meddling-adult-kids-job-search.html
- **Reuters** · Bank of England sees growing risk that dangers from AI and debt will materialise - Reuters
  - 2026-09-30 10:26 (ET) · https://news.google.com/rss/articles/CBMivgFBVV95cUxNdDZxOXc0SzIwN2d4Z1p6eDRBOTNfaVlDdFVHSk9LWlZqNk5UUHFwaFEtWDM5VTJFUHFMTFN5bGpaRWZmUldDLW1fQTFTMDlQNGd0QlRHWWxkOFU2SUhUTUtYUUFLZkJhblEwd0xKTnpHLXFDSk1hb1Y0NGJqdzFBVWItVVZjLXd6OUpRbEtHcGRRQmFXZjdlM2tGYzJGaHAyQ0VuM3FkX2dNR1BKMEFQZmwxUkp0NDJxREJLSlhn?oc=5
- **CNBC** · Mattel names Roger Lynch as CEO, replacing Ynon Kreiz
  - 2026-09-30 08:45 (ET) · https://www.cnbc.com/2026/09/30/mattel-roger-lynch-ceo.html

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · AI spending will fuel wins for Micron, Nvidia, Intel, and other chip stocks: BofA analyst
  - Yahoo · 2026-09-30 15:39 (ET) · https://finnhub.io/api/news?id=ef48d45c35218cde3a95f90f53e85f83fbec82d6e84677bb184d8ab378a3f949
- **NVDA** · Retired and Worried About a Recession? Here's Your Game Plan.
  - Yahoo · 2026-09-30 15:38 (ET) · https://finnhub.io/api/news?id=03926c3839d7f68a0fe4bf4ebea6c824f7911420948cb78a88720bd0d935ae88
- **NVDA** · Amazon Signs $1 Billion Synopsys Deal as AWS Steps Up Nvidia Challenge
  - Yahoo · 2026-09-30 15:33 (ET) · https://finnhub.io/api/news?id=e8c26ba3bfc024599a5097724a731007e9c0dc6e84685e84e1218a807becf787
- **AVGO** · Anthropic’s $11.6 Billion Quarter Just Changed How the Market Should Read the S-1
  - Yahoo · 2026-09-30 15:44 (ET) · https://finnhub.io/api/news?id=4677091277950a52cdb9944d8f512973180b6fb701f1efdcd03288dd7b8cc520
- **AVGO** · Is Cerebras' Next Big Thing Already Here?
  - Yahoo · 2026-09-30 15:15 (ET) · https://finnhub.io/api/news?id=c6da1bced8a63d3a5d035e6b5cb5c9f3b59a533b12e952216dc3009c9ccc871c
- **AVGO** · What Is The Case For Waiting On Qualcomm Stock?
  - Yahoo · 2026-09-30 14:51 (ET) · https://finnhub.io/api/news?id=aabf53418ee4821a01d0435e9eb0313fc7949e476e15f00ff28c97fba0c2ccbf

### 금융

- **JPM** · GGP Lines Up $400M Loan To Refinance New England's Largest Mall
  - Yahoo · 2026-09-30 14:29 (ET) · https://finnhub.io/api/news?id=e7a4273a6eed0c588e4c9b0a974d03df99400489df6f3eba84adb306f99e2099
- **JPM** · JPM vs. BAC: The Bank Built to Sustain Dividend Growth When Markets Turn
  - Yahoo · 2026-09-30 14:15 (ET) · https://finnhub.io/api/news?id=144dd0610d3477b5ecc774e0bdc52dca04238bbdfa1fc58f86dab3e26bf1151a
- **JPM** · J.P. Morgan Snags £1B Loan For Spitalfields Office Redevelopment
  - Yahoo · 2026-09-30 13:18 (ET) · https://finnhub.io/api/news?id=f748c4114cd04cdafcaf6d82f24fc65c93046cca5e48c00089cf607919d9c8a1

### 에너지

- **XOM** · Why The Metals Company Stock Is Soaring Today
  - Yahoo · 2026-09-30 12:30 (ET) · https://finnhub.io/api/news?id=2db8961530817e54d02f251bfa55dc4f0cc0028de9f6a8780ff58dff75efca15
- **XOM** · America’s Strategic Oil Reserves Are at 44-Year Lows — And Trump Just Gave Away Another 40 Million Barrels
  - Yahoo · 2026-09-30 11:41 (ET) · https://finnhub.io/api/news?id=44d33fc42532cdeb278f063bff74bee051fa1261e68643db0366bef2cc3abf93
- **XOM** · European Stocks Close Lower in Wednesday Trading; UK GDP Growth Slows Slightly in Q2
  - Yahoo · 2026-09-30 11:36 (ET) · https://finnhub.io/api/news?id=e81fc2dc4bba43e085cbb35871ccc976ccf583688804bc622ead1c5c1d428519

### 헬스케어

- **UNH** · Stay informed with the top movers within the dow jones index on Wednesday.
  - ChartMill · 2026-09-30 15:10 (ET) · https://finnhub.io/api/news?id=0093b0cd464267ac6c1513a5f23552a3363364456c7f26595de3332df4bb8e51
- **UNH** · Judge Denies In Part UnitedHealth's Motion to Dismiss CalPERS Suit
  - Yahoo · 2026-09-30 14:24 (ET) · https://finnhub.io/api/news?id=ac9559a0cda7a599962af6eff8a93ae40e9348cd4165fd0be97e32750f6211a7
- **UNH** · Uncover the latest developments among dow jones stocks in today's session.
  - ChartMill · 2026-09-30 12:40 (ET) · https://finnhub.io/api/news?id=77ef1c904bb3386988b017a5a99d23d7af9be8d6552ba602ebe18ed579b59213

### 소비재·유통

- **AMZN** · Anthropic’s $11.6 Billion Quarter Just Changed How the Market Should Read the S-1
  - Yahoo · 2026-09-30 15:44 (ET) · https://finnhub.io/api/news?id=4677091277950a52cdb9944d8f512973180b6fb701f1efdcd03288dd7b8cc520
- **AMZN** · Amazon Signs $1 Billion Synopsys Deal as AWS Steps Up Nvidia Challenge
  - Yahoo · 2026-09-30 15:33 (ET) · https://finnhub.io/api/news?id=e8c26ba3bfc024599a5097724a731007e9c0dc6e84685e84e1218a807becf787
- **AMZN** · Was There Any Sign Palantir Stock Would Run?
  - Yahoo · 2026-09-30 15:23 (ET) · https://finnhub.io/api/news?id=f2ae93e6291a58a5a4a8b2a4c4cd6f8c6ee3a9038cfdc413cead7447478ea89c

