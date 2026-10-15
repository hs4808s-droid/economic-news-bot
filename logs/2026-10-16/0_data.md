# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-16 · 미국 기준일(ET): 2026-10-15 · 생성시각(KST): 2026-10-16 06:30
# 출처: Yahoo Finance chart API · FRED(키 없는 CSV) · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.
> 금리·스프레드의 등락은 bp(1bp=0.01%p) 단위다. FRED 값은 영업일 기준 하루 늦게 확정될 수 있다(기준 열 참고).

## 미국 주요 지수

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| S&P500 | `^GSPC` | 7,744.06 | +0.33% | -0.27% | +2.55% | +13.13% | 7,718.94 | 2026-10-15 16:33 |
| 나스닥종합 | `^IXIC` | 26,713.03 | +0.08% | -1.77% | +2.83% | +14.93% | 26,692.87 | 2026-10-15 17:15 |
| 다우 | `^DJI` | 52,177.69 | +1.08% | +1.85% | +1.39% | +8.56% | 51,621.48 | 2026-10-15 16:34 |
| 러셀2000 | `^RUT` | 2,767.27 | +1.38% | -0.96% | -3.20% | +11.50% | 2,729.53 | 2026-10-15 16:30 |
| SOX (필라델피아 반도체) | `^SOX` | 11,581.22 | -0.88% | -8.26% | +2.98% | +63.50% | 11,684.38 | 2026-10-15 17:15 |

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,786 | +0.20% | 7,770.25 | 2026-10-15 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 30,078.25 | -0.35% | 30,182.75 | 2026-10-15 16:59 |
| 다우 선물 (YM) | `YM=F` | 52,438 | +1.12% | 51,858 | 2026-10-15 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,782.6 | +1.37% | 2,745 | 2026-10-15 16:59 |

## 금리

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 미 10년물 금리 (Yahoo) | `^TNX` | 5.089 | -10.1bp | -14.2bp | +8.3bp | +92.6bp | 5.19 | 2026-10-15 14:59 |
| 미 30년물 금리 (Yahoo) | `^TYX` | 5.429 | -9.6bp | -17.7bp | +8.0bp | +58.9bp | 5.525 | 2026-10-15 14:59 |
| 미 2년물 금리 (FRED) | `FRED:DGS2` | 4.82 | +3.0bp | +3.0bp | +17.0bp | +135.0bp | 4.79 | 2026-10-14 (FRED) |
| 미 10년물 금리 (FRED) | `FRED:DGS10` | 5.19 | -2.0bp | -8.0bp | +22.0bp | +101.0bp | 5.21 | 2026-10-14 (FRED) |

**10Y-2Y 스프레드 (FRED DGS10−DGS2, 2026-10-14): 0.37%p** (전일 대비 -5.0bp)

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 16.46 | -2.43% | 16.87 | 2026-10-15 16:15 |
| VIX9D (9일) | `^VIX9D` | 13.97 | -4.25% | 14.59 | 2026-10-15 16:15 |
| VIX3M (3개월) | `^VIX3M` | 18.49 | -1.60% | 18.79 | 2026-10-15 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 92.57 | -1.99% | 94.45 | 2026-10-15 16:15 |
| SKEW (테일리스크) | `^SKEW` | 160.45 | +2.00% | 157.3 | 2026-10-15 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 달러지수 (DXY) | `DX-Y.NYB` | 102.01 | -0.53% | 102.55 | 2026-10-15 17:20 |
| USD/KRW | `KRW=X` | 1,341.34 | +0.08% | 1,340.31 | 2026-10-15 17:27 |
| WTI | `CL=F` | 96.12 | +1.08% | 95.09 | 2026-10-15 16:59 |
| Brent | `BZ=F` | 105.73 | -0.31% | 106.06 | 2026-10-15 16:59 |
| 금 | `GC=F` | 4,192.5 | +2.06% | 4,107.9 | 2026-10-15 16:59 |
| 구리 | `HG=F` | 6.56 | -0.74% | 6.61 | 2026-10-15 16:59 |
| 비트코인 | `BTC-USD` | 82,236.99 | +0.83% | 81,562.49 | 2026-10-15 17:30 |
| 하이일드 스프레드 (OAS, %p) | `FRED:BAMLH0A0HYM2` | 3.25 | +9.0bp | 3.16 | 2026-10-14 (FRED) |

## 섹터 ETF

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 기술 | `XLK` | 189.19 | -0.65% | -4.34% | +2.86% | +31.41% | 190.43 | 2026-10-15 16:00 |
| 금융 | `XLF` | 55.27 | +1.38% | +1.92% | -1.18% | +0.91% | 54.52 | 2026-10-15 16:00 |
| 에너지 | `XLE` | 66.56 | -1.58% | +2.02% | +3.95% | +48.87% | 67.63 | 2026-10-15 16:00 |
| 헬스케어 | `XLV` | 177.19 | +1.86% | +5.37% | +5.61% | +14.46% | 173.96 | 2026-10-15 16:00 |
| 경기소비재 | `XLY` | 113.41 | +1.71% | +1.52% | +2.93% | -5.02% | 111.5 | 2026-10-15 16:00 |
| 필수소비재 | `XLP` | 86.68 | +0.72% | +3.91% | +4.02% | +11.59% | 86.06 | 2026-10-15 16:00 |
| 산업재 | `XLI` | 167.89 | +0.51% | -0.30% | -0.49% | +8.23% | 167.04 | 2026-10-15 16:00 |
| 소재 | `XLB` | 50.56 | +1.79% | +2.62% | +0.40% | +11.49% | 49.67 | 2026-10-15 16:00 |
| 유틸리티 | `XLU` | 41.65 | -0.17% | +1.41% | +0.80% | -2.44% | 41.72 | 2026-10-15 16:00 |
| 부동산 | `XLRE` | 41.99 | +1.21% | +2.79% | -1.92% | +4.06% | 41.49 | 2026-10-15 16:00 |
| 커뮤니케이션 | `XLC` | 112.44 | +1.46% | +0.33% | -0.50% | -4.49% | 110.82 | 2026-10-15 16:00 |
| 반도체 | `SMH` | 558.84 | -1.04% | -7.97% | +2.43% | +55.18% | 564.74 | 2026-10-15 16:00 |
| 소프트웨어 | `IGV` | 109.6 | +1.81% | +0.01% | +4.42% | +3.70% | 107.65 | 2026-10-15 16:00 |
| 지역은행 | `KRE` | 69.75 | +1.77% | +0.23% | -4.11% | +7.62% | 68.54 | 2026-10-15 16:00 |
| 바이오 | `XBI` | 149.78 | +2.05% | +0.33% | -2.85% | +22.84% | 146.77 | 2026-10-15 16:00 |

### 섹터 ETF 보조 지표 (1M 상대강도 vs SPY · 이동평균 위치)

| ETF | 1M vs SPY | 50일선 | 200일선 |
|---|---|---|---|
| 기술 (`XLK`) | +0.51% | 아래 | 위 |
| 금융 (`XLF`) | -3.53% | 아래 | 위 |
| 에너지 (`XLE`) | +1.60% | 위 | 위 |
| 헬스케어 (`XLV`) | +3.26% | 위 | 위 |
| 경기소비재 (`XLY`) | +0.58% | 아래 | 아래 |
| 필수소비재 (`XLP`) | +1.67% | 위 | 위 |
| 산업재 (`XLI`) | -2.84% | 아래 | 아래 |
| 소재 (`XLB`) | -1.96% | 아래 | 아래 |
| 유틸리티 (`XLU`) | -1.55% | 아래 | 아래 |
| 부동산 (`XLRE`) | -4.27% | 아래 | 아래 |
| 커뮤니케이션 (`XLC`) | -2.85% | 위 | 아래 |
| 반도체 (`SMH`) | +0.08% | 아래 | 위 |
| 소프트웨어 (`IGV`) | +2.07% | 위 | 위 |
| 지역은행 (`KRE`) | -6.46% | 아래 | 아래 |
| 바이오 (`XBI`) | -5.21% | 아래 | 위 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.123 | 콘탱고 |
| VIX / VIX9D | 1.178 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.151 | 1.483 | 2,556,488 | 2,942,307 | 30,470 |
| 나스닥100 ETF 옵션 (QQQ) | 1.109 | 1.458 | 4,872,118 | 5,401,594 | 11,058 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **Reuters** · Yemen's Houthis hit palace in Aden, coalition details attacks on Saudi infrastructure - Reuters
  - 2026-10-15 16:43 (ET) · https://news.google.com/rss/articles/CBMixgFBVV95cUxQODZXb0UtbHJiTHdmLTZhUENYcXNNeVptZDFGV1pUUEpuS3A0RzROVlBWSGw2V2tvdjNabmlnX1llVmh1Tno5TW5jUjhLWm5BY3VOREdYTnd5Q2RpdmdyVnVzR0lFTlp4SDV4a3JzNWo0US1xdER1eUkybkRtOHlBT2U4RE43NFI2dGVnb29fSmdPVmVPaDY3NG5fNXRabFR5dkJBU0pwNDFZSkN0NkxaU2lEd2c1Mk9HbUNUYTROV3BJUnh3TEE?oc=5
- **CNBC** · KFC to switch to Coca-Cola beverages in U.S. restaurants for the first time in decades
  - 2026-10-15 15:53 (ET) · https://www.cnbc.com/2026/10/15/kfc-coca-cola-pepsi-switch.html
- **CNBC** · Nvidia and Cisco confirm multimillion-dollar donations to Trump's White House ballroom
  - 2026-10-15 15:43 (ET) · https://www.cnbc.com/2026/10/15/trump-ballroom-nvidia-cisco-donations.html
- **CNBC** · Some 'classic' money advice is actually pretty new—and not all of it is worthwhile, says historian
  - 2026-10-15 15:30 (ET) · https://www.cnbc.com/make-it/2026/10/15/money-advice-history-joseph-moore.html
- **Reuters** · Hezbollah says it owned confiscated explosives, meant to attack Israel - Reuters
  - 2026-10-15 13:45 (ET) · https://news.google.com/rss/articles/CBMivAFBVV95cUxPQUNqWTJxemdBVVByYW9Cc0N3NlU2UW9zczJReDZOeWdKMENNbUZjQmF1bE9IQ1VEOXNrcXpQU192ZUhHTVZ0cDN1N3IzS2lxY0ZTOXdGY3RvWlVObFZ2RjAyVF93ZUNCWVJKSlBpNDVINmxBNGRORXRYZUt1blF2RzFLV2VjZWJZMUg4X2tGMjd5VlpOVExvbFIxN1ExS1lMMnJXUXJPOWhfcnVXZEl2aUpDeHNqcnFSeUJ3NQ?oc=5
- **CNBC** · Anduril CEO defends Trump administration contracts: 'We've done incredibly well under Biden'
  - 2026-10-15 13:42 (ET) · https://www.cnbc.com/2026/10/15/anduril-ceo-contracts-palmer-luckey-ethics.html
- **Reuters** · How the Houthis are helping Iran turn Saudi Arabia into a pressure point - Reuters
  - 2026-10-15 13:42 (ET) · https://news.google.com/rss/articles/CBMivAFBVV95cUxOdGVvZWRvRzA4MGlxRTRTLU95S2ZWTnB2LVZ1ZDBPQTdxbW53SmViQk96X3FpTlVXNEtZaTRvMld4akRJUm9vOU56NjJfSnROV3pCeURHQ3BCcTBYbW1KVVZyLVBaT0VXaE55WGc0WGI5c2RRdC1RaVZiT092ZU9RaTBRdmluamFTQ0JuRWRWNTNYdzhOa1dfNWVBNV9RcVMydFZoaHpFMlJnSHhrckl2cnRyZC0xc0xMcW5Idw?oc=5
- **CNBC** · How to weather the current AI stock storm that we were all dreading
  - 2026-10-15 13:06 (ET) · https://www.cnbc.com/investingclub/2026/10/15/cramer-how-to-weather-the-current-ai-stock-storm-that-we-were-all-dreading.html
- **Reuters** · US issues fresh Iran-related sanctions, Treasury website shows - Reuters
  - 2026-10-15 12:45 (ET) · https://news.google.com/rss/articles/CBMitgFBVV95cUxONEJZZXJmaFZ1b2c5eDlJMjhKMFRXX3JkNVJha1J1N29IWUJHRGphZ1M1czQ0Z1EtQzBub3gxNk5iT3FnNEdRM3dEbjVvdGhac2JjOGdmNGVCVFJMZW9GZzVGeEFCOEFualphSFJVNEM0eUZmVGhDdC1oaU9UR2lzRmltQVJ6RUtTZGJVV29pZ2tKZ3pBT2o0RU5lQzlYNzdZOWFfdENZNS13LVNhMEJSSGRfXzRXQQ?oc=5
- **Reuters** · Israel says commercial goods no longer entering Gaza after merchants suspend coordination - Reuters
  - 2026-10-15 12:33 (ET) · https://news.google.com/rss/articles/CBMiygFBVV95cUxOcjRlbUN2V1haV3l1dVJUekRyOW5XcEszX0JtWlkwcHRRLXRkcjhBOXpXNW1rX01hLVZXVGJCZEFyUkdINUplbV9zaDJmWWlKSk1aWHhXU1BfOVJ5T3liLUFKLU9vUlpncDZnRmF3MmxrU3lNNkZ6ZTVTU283R01JOGxkaG41aTNTLU9jdUVOMUtONnh3aUxrNEp5YXpiOTFvQTdac1M5X1VPNV9adm5mMThqbUgzMjRRenB1RGRDcTdPUG5JZTZXYlpn?oc=5
- **Reuters** · How are Yemen’s Houthis attacking Saudi Arabia so effectively? - Reuters
  - 2026-10-15 12:13 (ET) · https://news.google.com/rss/articles/CBMitAFBVV95cUxPZWFHTEc0MTZnaUdvM3VtaW8zVFgyc2tmemRfV2l0N3VhaDVCc2hCb3N5UEtJZE84Qi1fTWFadXZfNm1WS092aW1heFM1YVlVQnp3aTd2dHQ4T2stMWVoTTJNMmRtcnNxbGdxMG9kNTV2QTFkeXFfcjhTVUxhTkVVNHBxTTBrSlA2QkpHcHVqUFNQNXp5UmlJb1JzQXBZZFlhSUNfTzRyS19zYXZNczJPUWhETDc?oc=5
- **CNBC** · JetBlue’s new domestic first class, BlueFirst, is now on sale
  - 2026-10-15 12:13 (ET) · https://www.cnbc.com/2026/10/15/jetblue-bluefirst-first-class.html
- **Reuters** · Seven sailors missing after drones hit two ships near Romania - Reuters
  - 2026-10-15 11:59 (ET) · https://news.google.com/rss/articles/CBMipAFBVV95cUxNWTNEdUVjS3dseHk5amh0VGlyX180YWx6MEZobS1ySVhHSnFzbVYtSFFRTUtqRU12M3pGTnRPOEIyOTg0VnRiUkoyRkJxMmJiYlpZamFOLTVYVXJXbmhCa2J0a1BxbmlaUDF4X1hsNW5rOWVpaEtzTUo5dGZSclVwWUpBSHdOdXZFa2h6TWp6b1piY1VqN18wVlY0dFFNOUtLcFlJcA?oc=5
- **Reuters** · Houthis attack presidential palace complex in Yemen's Aden, PM unharmed, officials say - Reuters
  - 2026-10-15 11:36 (ET) · https://news.google.com/rss/articles/CBMivgFBVV95cUxPenN5Nk5reEJ3bHZicV9oSUR2N04zWUlyczJ1REFSbjFmZ0RPNEl1QzBKUUZjMnFrbzFvbE9YWjRCbVl1clRtNXFPZm9UanlhVmxUS09qYXhOYjJyeVRNRzZtdkVfeU5DalRNT1V4Q0E2MDU0Zno2ZWl5VERHd1BsZS0ya2lWQ0EtTngxbzVGdHNhc1RkZnhGRGxiSllsZzJqUjliamhmWmt3cVBfM1lzbS1vcmRPVHZkYVNhYTRB?oc=5
- **CNBC** · We're trimming a rallying defensive stock and buying other on a muted earnings move
  - 2026-10-15 11:17 (ET) · https://www.cnbc.com/investingclub/2026/10/15/were-trimming-a-rallying-defensive-stock-and-buying-other-on-a-muted-earnings-move.html

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Does Paul Tudor Jones Know Something Wall Street Doesn't? The Billionaire Says It's 1999 All Over and That 2027 Is Going to Be 'Really, Really Challenging' for the Market.
  - Yahoo · 2026-10-15 15:50 (ET) · https://finnhub.io/api/news?id=a33e819123c6ee2214f88bcef5e648724cb68c11752ffa3bc98f9a881f944e5a
- **NVDA** · Warren Buffett Has Championed This 1 Investment for Decades, and It Could Turn $200 per Month Into $1.2 Million
  - Yahoo · 2026-10-15 15:37 (ET) · https://finnhub.io/api/news?id=c2e8173c71e1a7f29e92464cde7cc6fac94a056cd44454cc04db3198921696cc
- **NVDA** · Tesla's Cybercab Robotaxi Fleet Jumped Eightfold in a Month to More Than 300 Vehicles in Austin, With Dallas Up Next. Is Elon Musk's Robotaxi Bet Finally Scaling?
  - Yahoo · 2026-10-15 15:25 (ET) · https://finnhub.io/api/news?id=67b0782d8034f7c2929f76f450f739ebc8e5270d9f4e9206861338c52627f737
- **AVGO** · This AI rout is just another scare for investors
  - Yahoo · 2026-10-15 15:22 (ET) · https://finnhub.io/api/news?id=b051688628c53b16eac79d22654015658fbaa567b12c28393735809ceebc7786
- **AVGO** · DRAM ETF Heads For Longest Weekly Losing Streak Since Inception, Roundhill CEO Says ‘Investor Sentiment Has Turned’
  - Yahoo · 2026-10-15 13:48 (ET) · https://finnhub.io/api/news?id=e25aace9dd13c4c94c18711b7612335b1d1f3882838e933bc344db1abfa830ea
- **AVGO** · Broadcom CEO Hock Tan Echoes Warren Buffett in Warning About "Casino"-Like Investing
  - Yahoo · 2026-10-15 13:37 (ET) · https://finnhub.io/api/news?id=f1fa5d153a583acbb6df403e0217eb79973ba043bf2b62d11dface4d5e46d04c

### 금융

- **JPM** · Discover which dow jones stocks are making waves on Thursday.
  - ChartMill · 2026-10-15 15:10 (ET) · https://finnhub.io/api/news?id=545db4733871e90a22820d700146d007479454afeb887e72faa3fb5e27048e68
- **JPM** · Ranking America's 4 Biggest Banks From Best Buy to Worst
  - Yahoo · 2026-10-15 13:50 (ET) · https://finnhub.io/api/news?id=974bc6a06a40a9c6e25cbf15960f6f81039be27d6dcbb9a86d84b8c4ab1f0c31
- **JPM** · Goldman and Berkshire Stand Out After Big Bank Earnings: What the Charts Show
  - Yahoo · 2026-10-15 13:37 (ET) · https://finnhub.io/api/news?id=9b2eacaf11fa851b447052933b8a0055c88de4bdc0e061807616fadaebd5906e

### 에너지

- **XOM** · Gasoline Alone Drove More Than Half of September’s Inflation Jump
  - Yahoo · 2026-10-15 12:13 (ET) · https://finnhub.io/api/news?id=59e55ed5bab314e20e8e13d61c2f1146c752ba6cfc9e8e3107e5a8952d348c14
- **XOM** · Exxon’s Dividend Stays Safe Even if Oil Crashes to $79 a Barrel
  - Yahoo · 2026-10-15 09:45 (ET) · https://finnhub.io/api/news?id=c521801c60302f191bfba468b5e8d22155e0775f054f19c51b145677be468173
- **XOM** · Energy Stocks Aren't Running Out Of Gas
  - Yahoo · 2026-10-15 08:00 (ET) · https://finnhub.io/api/news?id=a059773a10a4639f8b30a8cca3307f71997a1d76df2b7f5cd5e354820a576fd1

### 헬스케어

- **UNH** · Discover which dow jones stocks are making waves on Thursday.
  - ChartMill · 2026-10-15 15:10 (ET) · https://finnhub.io/api/news?id=545db4733871e90a22820d700146d007479454afeb887e72faa3fb5e27048e68
- **UNH** · 3 Low-Beta Defensive Stocks to Buy as Inflation Continues to Surge
  - Yahoo · 2026-10-15 14:32 (ET) · https://finnhub.io/api/news?id=abb5ce5c48a5a67fcbbfc9d5515d0db9a0a3c0bf15d473facce8f6a61f2b43fe
- **UNH** · Stock Market Today: Nasdaq Pares Loss As Yields Dive; Drug Giant Hits All-Time High (Live Coverage)
  - Yahoo · 2026-10-15 13:50 (ET) · https://finnhub.io/api/news?id=9470d8afc1c4b5713644076d1029bc7f031d28b7a207c1af6f3465cfcf67eb52

### 소비재·유통

- **AMZN** · Michael Dell Loses Title of World’s Fourth Richest Person After $36 Billion Drop in Net Worth in Two Days
  - Yahoo · 2026-10-15 15:31 (ET) · https://finnhub.io/api/news?id=f3e9b2fbcf581226f98e9929692d04c6337386d847a4ff806c26b26480751a9a
- **AMZN** · What Changed In eBay's Story?
  - Yahoo · 2026-10-15 15:24 (ET) · https://finnhub.io/api/news?id=5e02a069dcd2f702eb8b64b54a9f0fb855b4d5cd1bae221b430d595d2a8d7907
- **AMZN** · Discover which dow jones stocks are making waves on Thursday.
  - ChartMill · 2026-10-15 15:10 (ET) · https://finnhub.io/api/news?id=545db4733871e90a22820d700146d007479454afeb887e72faa3fb5e27048e68

