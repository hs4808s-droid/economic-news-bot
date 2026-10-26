# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-27 · 미국 기준일(ET): 2026-10-26 · 생성시각(KST): 2026-10-27 06:30
# 출처: Yahoo Finance chart API · FRED(키 없는 CSV) · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.
> **금리 기준 통일:** 2년물·10년물·10Y-2Y 는 FRED 일별 값(같은 기준일)만 본문에 쓴다. Yahoo ^TNX·^TYX 는 당일 참고용이라 FRED 값과 섞어 인용하지 않는다.
> 금리·스프레드의 등락은 bp(1bp=0.01%p) 단위다. FRED 값은 영업일 기준 하루 늦게 확정될 수 있다(기준 열 참고).

## 미국 주요 지수

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| S&P500 | `^GSPC` | 7,676.77 | +0.70% | -0.18% | -0.86% | +12.14% | 7,623.68 | 2026-10-26 16:43 |
| 나스닥종합 | `^IXIC` | 26,169.38 | +0.82% | -0.99% | -3.32% | +12.60% | 25,955.34 | 2026-10-26 17:15 |
| 다우 | `^DJI` | 52,361.58 | +0.28% | +0.76% | +1.03% | +8.94% | 52,215.16 | 2026-10-26 16:43 |
| 러셀2000 | `^RUT` | 2,786.42 | +0.38% | +2.13% | -1.80% | +12.27% | 2,775.9 | 2026-10-26 16:30 |
| SOX (필라델피아 반도체) | `^SOX` | 11,083.47 | +2.82% | -2.06% | -12.51% | +56.48% | 10,779.46 | 2026-10-26 17:16 |

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,714.5 | +0.71% | 7,659.75 | 2026-10-26 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 29,467.5 | +1.20% | 29,117.75 | 2026-10-26 16:59 |
| 다우 선물 (YM) | `YM=F` | 52,528 | +0.26% | 52,394 | 2026-10-26 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,795 | +0.38% | 2,784.5 | 2026-10-26 16:59 |

## 금리

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 미 2년물 금리 (FRED·기준) | `FRED:DGS2` | 4.69 | +4.0bp | -5.0bp | -16.0bp | +122.0bp | 4.65 | 2026-10-23 (FRED) |
| 미 10년물 금리 (FRED·기준) | `FRED:DGS10` | 5 | +4.0bp | -9.0bp | -11.0bp | +82.0bp | 4.96 | 2026-10-23 (FRED) |
| 미 10년물 금리 (Yahoo 당일·참고) | `^TNX` | 4.986 | -0.2bp | -15.0bp | -19.8bp | +82.3bp | 4.988 | 2026-10-26 14:59 |
| 미 30년물 금리 (Yahoo 당일·참고) | `^TYX` | 5.301 | -1.4bp | -17.1bp | -20.3bp | +46.1bp | 5.315 | 2026-10-26 14:59 |

**10Y-2Y 스프레드 (FRED DGS10−DGS2, 2026-10-23): 0.31%p** (전일 대비 +0.0bp)

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 18.39 | -5.45% | 19.45 | 2026-10-26 16:15 |
| VIX9D (9일) | `^VIX9D` | 17.92 | -4.17% | 18.7 | 2026-10-26 16:15 |
| VIX3M (3개월) | `^VIX3M` | 19.94 | -2.64% | 20.48 | 2026-10-26 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 101.43 | -7.54% | 109.7 | 2026-10-26 16:15 |
| SKEW (테일리스크) | `^SKEW` | 150.97 | -0.55% | 151.8 | 2026-10-26 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 달러지수 (DXY) | `DX-Y.NYB` | 102 | +0.19% | 101.81 | 2026-10-26 17:20 |
| USD/KRW | `KRW=X` | 1,325.17 | -0.06% | 1,325.99 | 2026-10-26 17:23 |
| WTI | `CL=F` | 101.25 | -1.96% | 103.27 | 2026-10-26 16:59 |
| Brent | `BZ=F` | 110.27 | -5.53% | 116.72 | 2026-10-26 16:59 |
| 금 | `GC=F` | 4,031 | +0.58% | 4,007.9 | 2026-10-26 16:59 |
| 구리 | `HG=F` | 6.54 | +1.06% | 6.48 | 2026-10-26 16:59 |
| 비트코인 | `BTC-USD` | 79,912.94 | -0.14% | 80,024.01 | 2026-10-26 17:30 |
| 하이일드 스프레드 (OAS, %p) | `FRED:BAMLH0A0HYM2` | 3.38 | -2.0bp | 3.4 | 2026-10-23 (FRED) |

## 섹터 ETF

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 기술 | `XLK` | 186.32 | +1.69% | +0.19% | -5.07% | +29.42% | 183.23 | 2026-10-26 16:00 |
| 금융 | `XLF` | 56.02 | +0.21% | +1.74% | +2.15% | +2.28% | 55.9 | 2026-10-26 16:00 |
| 에너지 | `XLE` | 69.64 | +0.45% | +2.71% | +12.25% | +55.76% | 69.33 | 2026-10-26 16:00 |
| 헬스케어 | `XLV` | 179.28 | +0.00% | +2.07% | +5.03% | +15.81% | 179.28 | 2026-10-26 16:00 |
| 경기소비재 | `XLY` | 114.26 | +1.03% | -0.17% | +3.35% | -4.31% | 113.1 | 2026-10-26 16:00 |
| 필수소비재 | `XLP` | 87.96 | -0.34% | +0.86% | +7.19% | +13.23% | 88.26 | 2026-10-26 16:00 |
| 산업재 | `XLI` | 166.96 | +1.42% | +0.17% | -2.04% | +7.63% | 164.62 | 2026-10-26 16:00 |
| 소재 | `XLB` | 51.38 | +0.14% | +0.84% | +3.17% | +13.30% | 51.31 | 2026-10-26 16:00 |
| 유틸리티 | `XLU` | 42.55 | -0.02% | +2.88% | +7.69% | -0.33% | 42.56 | 2026-10-26 16:00 |
| 부동산 | `XLRE` | 42.8 | +0.54% | +2.71% | +2.98% | +6.07% | 42.57 | 2026-10-26 16:00 |
| 커뮤니케이션 | `XLC` | 103.85 | -1.57% | -5.67% | -8.06% | -11.78% | 105.51 | 2026-10-26 16:00 |
| 반도체 | `SMH` | 541.62 | +2.74% | -1.25% | -10.71% | +50.40% | 527.2 | 2026-10-26 16:00 |
| 소프트웨어 | `IGV` | 111.39 | +0.72% | +5.09% | +5.08% | +5.39% | 110.59 | 2026-10-26 16:00 |
| 지역은행 | `KRE` | 72.73 | +0.37% | +5.01% | +1.65% | +12.22% | 72.46 | 2026-10-26 16:00 |
| 바이오 | `XBI` | 150.47 | +0.62% | +1.77% | -2.94% | +23.41% | 149.54 | 2026-10-26 16:00 |

### 섹터 ETF 보조 지표 (1M 상대강도 vs SPY · 이동평균 위치)

| ETF | 1M vs SPY | 50일선 | 200일선 |
|---|---|---|---|
| 기술 (`XLK`) | -4.29% | 아래 | 위 |
| 금융 (`XLF`) | +2.93% | 아래 | 위 |
| 에너지 (`XLE`) | +13.03% | 위 | 위 |
| 헬스케어 (`XLV`) | +5.80% | 위 | 위 |
| 경기소비재 (`XLY`) | +4.12% | 위 | 아래 |
| 필수소비재 (`XLP`) | +7.97% | 위 | 위 |
| 산업재 (`XLI`) | -1.26% | 아래 | 아래 |
| 소재 (`XLB`) | +3.95% | 위 | 위 |
| 유틸리티 (`XLU`) | +8.47% | 위 | 아래 |
| 부동산 (`XLRE`) | +3.76% | 아래 | 아래 |
| 커뮤니케이션 (`XLC`) | -7.29% | 아래 | 아래 |
| 반도체 (`SMH`) | -9.93% | 아래 | 위 |
| 소프트웨어 (`IGV`) | +5.85% | 위 | 위 |
| 지역은행 (`KRE`) | +2.42% | 위 | 위 |
| 바이오 (`XBI`) | -2.17% | 아래 | 위 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.084 | 콘탱고 |
| VIX / VIX9D | 1.026 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.105 | 1.456 | 2,207,041 | 2,439,714 | 29,424 |
| 나스닥100 ETF 옵션 (QQQ) | 1.187 | 1.415 | 3,501,163 | 4,154,409 | 10,172 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **CNBC** · JetBlue posts bigger loss on fuel costs, but CEO says margins improving
  - 2026-10-26 16:39 (ET) · https://www.cnbc.com/2026/10/26/jetblue-jblu-3q-2026-earnings.html
- **Reuters** · Netanyahu touts Trump endorsement on eve of vote, suggests they may restart war on Iran - Reuters
  - 2026-10-26 16:00 (ET) · https://news.google.com/rss/articles/CBMiywFBVV95cUxQUUluTlhFbGtJMWMtZ09ieVhSblh2b0Y4cWpleDVwWUVfUWVyanZIOHFhenFqaWRYZ0U0cEd6MFVjQk5xSXZkWjJNRmM4ZWdPa01KTHBRRjVHRnJPRWtlbGRwWFBNOFJnQ3F5Z2JZbjVFVE5ERUxDdmozN0FPUjRkaUpVNGIwRUFTVXhROU95dC1wby0wX2xzTlg2ODlZeDR2cmM3bHFFaHItbGJ6X3gxT2lwX0FONW11aGtoeWFXQmhmc00tWnlQZEhHQQ?oc=5
- **Reuters** · Egypt approves military support for Saudi Arabia after Houthi attacks escalate - Reuters
  - 2026-10-26 15:18 (ET) · https://news.google.com/rss/articles/CBMixwFBVV95cUxOaFIxVXVVYl90WFZodTB6bHpqOWN3aktZSHNDYTlaM3I5S1FoeU14U1NRVE1mVTJtSDV3ZHk1cHRiWDh6elBNamVIeE5tN2VvRDEyWXBPT1dyNW5KSXFyaE5PVEFOS1NyQW1CNkVVblN6SW1PeVg3aHQxY3B6WmhHU3cxM0gtdTNRLTY1NWo0R284RzQtSmVtTnRxVnR6MTVkNWVsU3djY1d2SURPNmo0N05CUFJZekpIUklNTmRxazZHVTNrbEFN?oc=5
- **Reuters** · Mindful of the markets, UK's Healey is set to deliver a careful budget - Reuters
  - 2026-10-26 14:58 (ET) · https://news.google.com/rss/articles/CBMiowFBVV95cUxOd1FFNVNXLU1fbUd1NzRQT2wxeWUwRWlQU1M2X21RSGhMMzB1dzl2NmpZVG1HQ0I4RzZHRHA5elBfSHRvUmFDdWZLb1AyTERDVkxmdXJsR1ZORkQyZ29LVjZrWVl1TzcxNXFqNTRXOGp4cDZiSllBY1UzRnFsNWM2bkJwd1FUSlZDUzFoS2RRWE9XZHExUUUtSzBrcWNIUDVpZjRZ?oc=5
- **CNBC** · J&J's potential 'game-changer' drug — plus, what Microsoft's mass buyouts mean
  - 2026-10-26 14:45 (ET) · https://www.cnbc.com/investingclub/2026/10/26/jjs-potential-game-changer-drug-plus-what-microsofts-buyouts-mean.html
- **Reuters** · UN inquiry says Israel kept committing genocide in Gaza after truce - Reuters
  - 2026-10-26 14:27 (ET) · https://news.google.com/rss/articles/CBMiugFBVV95cUxQN2xxeTlxYThOMDR2al9fZldibDQ4bUJBczVwTEJsRGJxQUJZeWZzZWphQTlzd3pqaW1rUFJvU2VLUElyOGduUDVNYXh2eFFzNHQzU2x0OTRZMGxldlA5bXVtcWcySTdUOS1KOTBVLXNjc1JGcy0tdnFnUjRNM1RyVzk3ZFZza2dhQkhSUkE4TTFBM2RfeF9OTzRLcExrOEw0S25vMjR3aFlRcExuWE83V3dCUGQtSE5Fanc?oc=5
- **Reuters** · Galp, Moeve scrap downstream merger as Iran war boosts refinery valuations - Reuters
  - 2026-10-26 11:51 (ET) · https://news.google.com/rss/articles/CBMitAFBVV95cUxOcUdmRHBJcVJmcko1NVpEVHRETC1hVFI2NFhYLXdvcFBuVFJxRFA3X0FmWWR2ZWFEelRWbHJfdDc5b3RhNFI4SzB1OXBLWkcwbnF0amRmTXJYVXFKa1Z1eFV5T3FZSzV6SWlxUUpMenZ1WG5hbzAybGFWb1luMU10NjVFbHBrM0d3UlEwVWVqanVfLThBTXRNbWxhZ0ZodjZRZHFsTXhkMUVaMVVaaS1xdzJQNXY?oc=5
- **CNBC** · Trump DOJ unlawfully fired Epstein prosecutor Maurene Comey, judge rules
  - 2026-10-26 11:28 (ET) · https://www.cnbc.com/2026/10/26/maurene-comey-firing-unlawful-trump.html
- **Reuters** · 'No fuel to keep babies warm': shortages push hospitals in Yemen's Taiz to brink - Reuters
  - 2026-10-26 11:21 (ET) · https://news.google.com/rss/articles/CBMivgFBVV95cUxNckIwZ1pHUU1CZ1VHMmpaR3NBZmJkZkJwRlBvUjJzVTFGbXFySzkybTUxV2Jqa1R3S0dGbGhJdDNmRVdtTkRfVU5pcU1HVjVNNU51NGZHamZhdGxIUjJOS0lRYTNPejFYTHNrMVFHRjRpMTF5aWRST1JTSEpIN3ZKZUVCbXpwUjU1UXdrbGpWR21vVGN0RkVDUzVNaFpmbE1FTkRlSlNnOHQ0MVVFZ1VnWkRBSDNLZjhkY3JzME1B?oc=5
- **Reuters** · Hezbollah readies for new regional war with funds from Iran, sources say - Reuters
  - 2026-10-26 10:53 (ET) · https://news.google.com/rss/articles/CBMitwFBVV95cUxQajh2NzdqZUljUEFSTWFPOV9odmZYWE5sRkVLbUhzRndmN0dxSGRwM09CbVpZRjBXZTJrckJHRFV6RzBUTThlQ3pHQ0hWNWZuaFhCc2wwWGRwSDVmb2d1ME9UMmt0ZUVkTlA0WnpjY1o0R2Z2RzhvQXl3MHNHdEQ3YXdsMi0zTHFFTlBJekI1bnY4M3VRUFhzUnMzcGdVeHBPTm90MDFabFpnalo0RThZdENtMEVHSFU?oc=5
- **Reuters** · Apollo deepens Abu Dhabi ties with investment in Mubadala Capital - Reuters
  - 2026-10-26 10:33 (ET) · https://news.google.com/rss/articles/CBMixAFBVV95cUxPcEE4ZE9DeXU0LWNqVVVWRUxKTXFzbmN2ZHlUXzY1czFSZ1VWemlWUkx5N0RfZnlJZGNNeHcxY0ZkRUJkaTZXdzZDWm9FMjl1SXhlVFdSbXVBWnZaRUYzcmhweDVPeldraGJiQW1ueXJBM1pBUUExVHpSMDN1b1lpb3dacU5vNWJna0xJZVBlaWhGWkhWbWxadFF2Q0tTV0RVYjdySjlxTVdGX2p1OUJkdm1vd2pGdmVLY2dic1RnWDNycE5K?oc=5
- **CNBC** · Mortgage rates above 7% are the 'new normal'—here's why
  - 2026-10-26 10:00 (ET) · https://www.cnbc.com/make-it/2026/10/26/mortgage-rates-above-7percent-are-the-new-normalheres-why.html
- **Reuters** · Most Gulf bourses rebound on Iran diplomacy hopes; Egypt falls ahead of Saudi defence vote - Reuters
  - 2026-10-26 09:12 (ET) · https://news.google.com/rss/articles/CBMixgFBVV95cUxNaDhPSnA1U2M2cUI1ajJYZy1COWI1WG1mNUx1ajhqR0ZaZWw2OHhTZGxISHFCa01lZUlNMlFpMFktREVjQ0NUTGNWbGF6V2hOSndpWm10djdnNHpwa01ObUc4ZjBHQzU3ZnNkSm5HTDBlOTFPLXJVejlvalhOOEZRY3Y2b3JzdjRJNnRBZHFyTXo2Zmo0UHBzRVFRcmJFS0NlMjdxazZFZEJoREtRcmJjZENtay1Xd1VraWdSQ1BYQ0pYSUhVWFE?oc=5
- **Reuters** · Netanyahu faces reckoning for October 7 in Israel's first vote since attack - Reuters
  - 2026-10-26 08:59 (ET) · https://news.google.com/rss/articles/CBMivgFBVV95cUxQcFFqSzVtdXZSUFloUUFMWE1MNV9hV2dFamJyWkdGcnRzdExxcXBGYlZTbUJBZ3J4d2FjcVZ6OE1ZRGR1RDlzcWU5RWpKMlA5eDlrelpnQ0hoaThNSHc2ejFZNlg0elBvMWNpYjRoYndhdjFBQk0wTWNPbXNWeGY5cndJZU55R0ZUN3dJR1BsR3BycjlMMU5oSnRJdkI2OUgxcmM1VjhCLXZkRzlEdkFIUWVVU255MTZFd2dmaVF3?oc=5
- **Reuters** · Oil spill off UAE widens, satellite images show, prompting more beach closures - Reuters
  - 2026-10-26 08:53 (ET) · https://news.google.com/rss/articles/CBMiygFBVV95cUxQbHhFSkdqM0dlc3lWWVViWVlQMDNlNnRVQkxSUWttcWR5R19wV3dvclAyOGtmNVFZMEI2YVVheGVlLUlJNTB3bzZGeDlqRTEtMGZiRk5ZN0x1dWs4a2VNaElUUW1Yd0lxaFRpTjhtVDdael9uaEpHa2kxTllSWVRHSjVIMUVLQmJSNUlGZDF5S0JEOXJ0Rk5GR1lFN0thcWNqSW15RmVsMUFrOUpGeE9lMm1oNVZVNFdjaVQ2VFJielNUM29rMG1BZUd3?oc=5

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Retiring by the End of 2026? 4 Key Questions to Ask Yourself First
  - Yahoo · 2026-10-26 15:56 (ET) · https://finnhub.io/api/news?id=e00be6ff14249118306e7150dae3b36466cec18b1f1377379837fcf528e18c9e
- **NVDA** · 3 Cheap Dividend Stocks I'd Buy Without Any Hesitation
  - Yahoo · 2026-10-26 15:35 (ET) · https://finnhub.io/api/news?id=3a8884a7f1bd1ac95ddcd40718b120ee782a180b200d5fac6892cc697680ec46
- **NVDA** · Will Bitcoin Hit $100,000 Before the End of 2026?
  - Yahoo · 2026-10-26 15:25 (ET) · https://finnhub.io/api/news?id=16e4b1cdc520f05f01eea3d7c08d580c8fd8cd425eaab056f181c3ce3766281b
- **AVGO** · Vertiv to Report Q3 Earnings: Should You Buy, Sell, or Hold the Stock?
  - Yahoo · 2026-10-26 13:11 (ET) · https://finnhub.io/api/news?id=e6beb19dbd9f7a8ee0b5312890dcaddb02aa7daa3f46967943fb4f8598cb009d
- **AVGO** · SpaceX Isn’t Even Anthropic’s Biggest Partner. Here’s Who Is, Plus More of Its Biggest Deals
  - Yahoo · 2026-10-26 13:01 (ET) · https://finnhub.io/api/news?id=88391f3feeaf2c16d491180e586f762f7a6546f135f5cfde2f1472160051df78
- **AVGO** · SpaceX strikes $40B GPU leasing deal with private credit players
  - Yahoo · 2026-10-26 12:19 (ET) · https://finnhub.io/api/news?id=ce2fab0389b6b439b193ae854946ef1c75a17dea5feda40afab811fa586b5350

### 금융

- **JPM** · Rockefeller Adds J.P. Morgan Team in Houston
  - Yahoo · 2026-10-26 14:30 (ET) · https://finnhub.io/api/news?id=d47d16a30686afa23633314fa732e852cde4faf6d03f6ab593147516f53bbeaf
- **JPM** · Embraer (BOVESPA:EMBR3) Stock Sees Modest Fair Value Lift After Q2 Analyst Revisions
  - Yahoo · 2026-10-26 14:10 (ET) · https://finnhub.io/api/news?id=cb064b9683611172dad90b789f91e6a9b84f1ea5bb0846ba76b09a983afea40b
- **JPM** · Transforming the Credit Experience: Taktile CEO & Co-Founder Maik Taro Wehmeyer, Live from Money 20/20 2026
  - Yahoo · 2026-10-26 12:29 (ET) · https://finnhub.io/api/news?id=abbe52afa7308b8fb34de2a23aca666b4007de58e224c36f48a0be591ffbf154

### 에너지

- **XOM** · Trump’s Treasury Says Gulf Oil Is “Roaring Back” as Exxon Heads Into Earnings Near a Record
  - Yahoo · 2026-10-26 14:21 (ET) · https://finnhub.io/api/news?id=c4e7684a9795404a4ac28384c407c8450790cd827e810421fc8fb94b6ec72863
- **XOM** · What Is The One Risk Every Venture Global Investor Should Know?
  - Yahoo · 2026-10-26 14:15 (ET) · https://finnhub.io/api/news?id=b36b042af12d21cfc8aa41d47fe7a1a5be7dd42a8ef00d16775cc5ea259888bd
- **XOM** · ConocoPhillips Vs EOG Resources: Which Stock Is The Better Buy?
  - Yahoo · 2026-10-26 11:04 (ET) · https://finnhub.io/api/news?id=1e5a5d4379b56dc535c9e6e489333d86a31b97772fd64633f9c3af9709c6167f

### 헬스케어

- **UNH** · How Much Should This Move Change Your View Of Centene Stock?
  - Yahoo · 2026-10-26 13:59 (ET) · https://finnhub.io/api/news?id=2b2b1b972d6c6d2994216111c88c4005d65d8fa2b0c74b3918b1df50dbd8e4d3
- **UNH** · Bretton Fund’s Views on Mobility Global (MBGL)
  - Yahoo · 2026-10-26 10:56 (ET) · https://finnhub.io/api/news?id=7442f82f2ee31a03bca881a451ab6e3e3a85d94b20c36590ac25befb07e9b9dc
- **UNH** · The One Number CVS Health Stock Investors Should Watch
  - Yahoo · 2026-10-26 08:48 (ET) · https://finnhub.io/api/news?id=a4ffd1d26d0ec214bea670f03a243aba086d4d889a9196489eff002d108a2b19

### 소비재·유통

- **AMZN** · Microsoft offers buyouts to 60,000 workers as it looks to trim costs
  - Yahoo · 2026-10-26 15:04 (ET) · https://finnhub.io/api/news?id=74658feefa6d0e3f19e6eb2c42ee4f81ce3d5f95ec6ea991db58e6936481a80a
- **AMZN** · Warner Bros. Pictures Animation and Amazon Ads Invite Audiences to Play Inside the World of The Cat in the Hat Ahead of Film's Premiere
  - Yahoo · 2026-10-26 14:46 (ET) · https://finnhub.io/api/news?id=4472eb825a2219d803b04e0b01b60ff074c8042da89dfde67858db632fe7ba6e
- **AMZN** · Shopify “Has Not Grown Into Its Multiple at All” as Investors Pay 112 Times Profits
  - Yahoo · 2026-10-26 14:26 (ET) · https://finnhub.io/api/news?id=71d566b30ae73e0ea0202cb484629f994073ada5dc592dc10c73a6ebe2be3a65

