# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-25 · 미국 기준일(ET): 2026-10-23 · 생성시각(KST): 2026-10-25 06:30
# 출처: Yahoo Finance chart API · FRED(키 없는 CSV) · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.
> **금리 기준 통일:** 2년물·10년물·10Y-2Y 는 FRED 일별 값(같은 기준일)만 본문에 쓴다. Yahoo ^TNX·^TYX 는 당일 참고용이라 FRED 값과 섞어 인용하지 않는다.
> 금리·스프레드의 등락은 bp(1bp=0.01%p) 단위다. FRED 값은 영업일 기준 하루 늦게 확정될 수 있다(기준 열 참고).

## 미국 주요 지수

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| S&P500 | `^GSPC` | 7,623.68 | -0.52% | -0.47% | -1.04% | +11.37% | 7,663.43 | 2026-10-23 16:38 |
| 나스닥종합 | `^IXIC` | 25,955.34 | -0.21% | -0.71% | -3.65% | +11.67% | 26,008.86 | 2026-10-23 17:15 |
| 다우 | `^DJI` | 52,215.16 | -1.23% | +0.41% | +1.68% | +8.64% | 52,867.98 | 2026-10-23 16:42 |
| 러셀2000 | `^RUT` | 2,775.9 | -0.29% | +2.00% | -2.10% | +11.85% | 2,784.03 | 2026-10-23 16:30 |
| SOX (필라델피아 반도체) | `^SOX` | 10,779.46 | +0.44% | -3.21% | -13.71% | +52.19% | 10,731.98 | 2026-10-23 17:15 |

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,659.75 | -0.58% | 7,704.5 | 2026-10-23 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 29,117.75 | -0.08% | 29,142 | 2026-10-23 16:59 |
| 다우 선물 (YM) | `YM=F` | 52,394 | -1.27% | 53,068 | 2026-10-23 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,784.5 | -0.41% | 2,796.1 | 2026-10-23 16:59 |

## 금리

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 미 2년물 금리 (FRED·기준) | `FRED:DGS2` | 4.65 | -16.0bp | -12.0bp | -6.0bp | +118.0bp | 4.81 | 2026-10-22 (FRED) |
| 미 10년물 금리 (FRED·기준) | `FRED:DGS10` | 4.96 | -17.0bp | -14.0bp | +0.0bp | +78.0bp | 5.13 | 2026-10-22 (FRED) |
| 미 10년물 금리 (Yahoo 당일·참고) | `^TNX` | 4.988 | +3.5bp | -11.0bp | -17.4bp | +82.5bp | 4.953 | 2026-10-23 14:59 |
| 미 30년물 금리 (Yahoo 당일·참고) | `^TYX` | 5.315 | +2.8bp | -12.1bp | -14.6bp | +47.5bp | 5.287 | 2026-10-23 14:59 |

**10Y-2Y 스프레드 (FRED DGS10−DGS2, 2026-10-22): 0.31%p** (전일 대비 -1.0bp)

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 19.45 | +2.21% | 19.03 | 2026-10-23 16:15 |
| VIX9D (9일) | `^VIX9D` | 18.7 | -0.85% | 18.86 | 2026-10-23 16:15 |
| VIX3M (3개월) | `^VIX3M` | 20.48 | +1.79% | 20.12 | 2026-10-23 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 109.7 | +1.63% | 107.94 | 2026-10-23 16:15 |
| SKEW (테일리스크) | `^SKEW` | 151.8 | -0.39% | 152.39 | 2026-10-23 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 달러지수 (DXY) | `DX-Y.NYB` | 101.75 | +0.14% | 101.61 | 2026-10-23 16:59 |
| USD/KRW | `KRW=X` | 1,325.4 | -0.04% | 1,325.99 | 2026-10-23 23:30 |
| WTI | `CL=F` | 103.27 | +3.82% | 99.47 | 2026-10-23 16:59 |
| Brent | `BZ=F` | 111.7 | -1.30% | 113.17 | 2026-10-23 16:59 |
| 금 | `GC=F` | 4,007.9 | -1.29% | 4,060.4 | 2026-10-23 16:59 |
| 구리 | `HG=F` | 6.51 | +2.29% | 6.36 | 2026-10-23 16:59 |
| 비트코인 | `BTC-USD` | 80,352.34 | -0.89% | 81,074.19 | 2026-10-24 17:30 |
| 하이일드 스프레드 (OAS, %p) | `FRED:BAMLH0A0HYM2` | 3.4 | +13.0bp | 3.27 | 2026-10-22 (FRED) |

## 섹터 ETF

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 기술 | `XLK` | 183.23 | +0.49% | -0.13% | -5.90% | +27.27% | 182.34 | 2026-10-23 16:00 |
| 금융 | `XLF` | 55.9 | -1.32% | +0.68% | +2.51% | +2.06% | 56.65 | 2026-10-23 16:00 |
| 에너지 | `XLE` | 69.33 | +2.60% | +1.60% | +10.75% | +55.07% | 67.57 | 2026-10-23 16:00 |
| 헬스케어 | `XLV` | 179.28 | -1.11% | +1.45% | +5.54% | +15.81% | 181.3 | 2026-10-23 16:00 |
| 경기소비재 | `XLY` | 113.1 | -1.66% | +0.57% | +2.52% | -5.28% | 115.01 | 2026-10-23 16:00 |
| 필수소비재 | `XLP` | 88.26 | -1.92% | +0.73% | +8.03% | +13.62% | 89.99 | 2026-10-23 16:00 |
| 산업재 | `XLI` | 164.62 | -1.27% | -1.87% | -2.49% | +6.12% | 166.73 | 2026-10-23 16:00 |
| 소재 | `XLB` | 51.31 | -0.74% | +0.77% | +3.28% | +13.14% | 51.69 | 2026-10-23 16:00 |
| 유틸리티 | `XLU` | 42.56 | -0.72% | +0.83% | +8.13% | -0.30% | 42.87 | 2026-10-23 16:00 |
| 부동산 | `XLRE` | 42.57 | +0.12% | +0.97% | +2.21% | +5.50% | 42.52 | 2026-10-23 16:00 |
| 커뮤니케이션 | `XLC` | 105.51 | -1.78% | -4.36% | -7.44% | -10.37% | 107.42 | 2026-10-23 16:00 |
| 반도체 | `SMH` | 527.2 | +0.74% | -2.33% | -12.21% | +46.39% | 523.35 | 2026-10-23 16:00 |
| 소프트웨어 | `IGV` | 110.59 | +1.72% | +5.99% | +3.21% | +4.64% | 108.72 | 2026-10-23 16:00 |
| 지역은행 | `KRE` | 72.46 | +0.07% | +3.80% | +2.14% | +11.80% | 72.41 | 2026-10-23 16:00 |
| 바이오 | `XBI` | 149.54 | -1.38% | +3.62% | -4.17% | +22.64% | 151.64 | 2026-10-23 16:00 |

### 섹터 ETF 보조 지표 (1M 상대강도 vs SPY · 이동평균 위치)

| ETF | 1M vs SPY | 50일선 | 200일선 |
|---|---|---|---|
| 기술 (`XLK`) | -4.96% | 아래 | 위 |
| 금융 (`XLF`) | +3.45% | 아래 | 위 |
| 에너지 (`XLE`) | +11.69% | 위 | 위 |
| 헬스케어 (`XLV`) | +6.48% | 위 | 위 |
| 경기소비재 (`XLY`) | +3.46% | 아래 | 아래 |
| 필수소비재 (`XLP`) | +8.97% | 위 | 위 |
| 산업재 (`XLI`) | -1.55% | 아래 | 아래 |
| 소재 (`XLB`) | +4.22% | 위 | 위 |
| 유틸리티 (`XLU`) | +9.07% | 위 | 아래 |
| 부동산 (`XLRE`) | +3.15% | 아래 | 아래 |
| 커뮤니케이션 (`XLC`) | -6.50% | 아래 | 아래 |
| 반도체 (`SMH`) | -11.27% | 아래 | 위 |
| 소프트웨어 (`IGV`) | +4.15% | 위 | 위 |
| 지역은행 (`KRE`) | +3.08% | 위 | 위 |
| 바이오 (`XBI`) | -3.23% | 아래 | 위 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.053 | 콘탱고 |
| VIX / VIX9D | 1.040 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.573 | 1.441 | 601,913 | 946,945 | 28,744 |
| 나스닥100 ETF 옵션 (QQQ) | 1.207 | 1.433 | 963,401 | 1,162,442 | 10,112 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **Reuters** · Houthis say they targeted Saudi oil sites; attacks reported in Aden - Reuters
  - 2026-10-24 15:24 (ET) · https://news.google.com/rss/articles/CBMiyAFBVV95cUxNU1JpTkpxd3RUSFgwb29mWkRuSmg5UFd5d1RMQkZMdE5tV3F4cEN6SXFOODhTQUZTbTZucHJGVnpxMWpGZVFuSXJzZ045Q0o1Uzh5NFNvVENFX1M2dFQ0NzRGYjUtWk9TYjBWcldGNS1hY21yS2IyOXBsX29hcFg5N2ZENUlIV2oyTE1OT3hJQUFaS1pjTHV3VnZUTkRWbVFnd0JqYV9iZmVwUW4xcGNVOUdUZmgtaWpkVGdsVzJ1SXR1U1hyWG5uWg?oc=5
- **CNBC** · AI funding fears rattle Wall Street. Here's how we're adjusting our portfolio
  - 2026-10-24 12:14 (ET) · https://www.cnbc.com/investingclub/2026/10/24/ai-funding-fears-rattle-wall-street-heres-how-were-adjusting-our-portfolio.html
- **Reuters** · Libya's Dbeibah says ready to address Egypt's maritime concerns - Reuters
  - 2026-10-24 12:04 (ET) · https://news.google.com/rss/articles/CBMisgFBVV95cUxPVmxsRWg3NGtsREw4YWtPYlZUcjJVN0FJcDJkbzY1ZjdycTZzVzNjVFpwajFzTk9pT1V5QW5JdmQyMWNaOTIxU1pGdHRQQ2ZXcnh2UnFFQTJjUUlrSlpTZVBkNHBvaGpVY3JZMjZoSkliSWYxWm44dEpaQTdsNmNrb0RMV1FfX0p5eUpSQWFCYkpQRWE4WXllX1FYTW1IbE01SDk2bjVpNHVLOHI5RnllbE93?oc=5
- **Reuters** · Iran has ramped up efforts to target US personnel, intelligence memo warns - Reuters
  - 2026-10-24 12:03 (ET) · https://news.google.com/rss/articles/CBMiwgFBVV95cUxPSnBGckdpTkdaSnNZeFIyenI0MVVDMHd6R2ZDcTlUX3I4OWNNMlRjd0FTXzhCY09zakU1MWx2RzBpRW1QYTRxY2M3UWpBZHR3S1JlNjQ0WlIyRlh3ZnhNaVZ0OVcwU21YMjUyVVF0RXB0VXFLMWpGdEVtak1DUktTdUdLWmQyWGRFQ0xmb2Z3WG1nSHdfVUxlbUlsc2RJRmNmWVRHS1Qtd0RCVU92d2t1S19HbjlFVzdoREJONTRNYk1iZw?oc=5
- **Reuters** · Around 1,200 Palestinians are displaced in Hebron as Israel begins military operation - Reuters
  - 2026-10-24 12:02 (ET) · https://news.google.com/rss/articles/CBMizAFBVV95cUxNU0lFZzBBODd6NDh2OUEyNmMwbFUyalpDRFpwVkVRVkR2VzlOLWdTU1N1ZmhEaFBzaUFmWUVEMFBrdDFDMVF3WVlQWHh5VVFVd2R6LVM5b3VxakFlNVhwQlNwcHVhaHV0dDZuYjgzSU5qUTdtalpZd2tmQlFxN3ZtcmNpaTdvM3hCUlhMck5ubkphU25lT2dFU0ZvSDVXNEE0amJ1X3IwLU82a2M3TWROaU1SYWhhdHJuQmpLTzZtckhsaVdwODdaOTNaNkk?oc=5
- **CNBC** · Retail investors are not more sophisticated than 30 years ago, says former hedge fund manager
  - 2026-10-24 11:00 (ET) · https://www.cnbc.com/2026/10/24/stock-picking-could-hurt-investors-warns-former-hedge-fund-manager.html
- **CNBC** · I quit my marketing job to walk dogs for 4 months: It's 'one of the most valuable professional experiences I've ever had'
  - 2026-10-24 10:36 (ET) · https://www.cnbc.com/make-it/2026/10/24/quit-marketing-job-walk-dogs.html
- **Reuters** · Jordan church attack survivor says assailant pointed handgun at him - Reuters
  - 2026-10-24 10:10 (ET) · https://news.google.com/rss/articles/CBMiugFBVV95cUxOZVhBcHBITVRDY2hGb1hueUEwVnhWbUhBc3dvc2NXTk5Yd3NybDQyUW15R3NfVnBmOHpJLVo5b2UyVmN5NjdURndGT2xQb05hSlE4UU52cnFYMDdjbnlQTm9LRHpBSkdLSDUtTlhKdGJYVjN1cGY3c2hEelZjN3FhRXM1X0ZYbVk1Q05lX3ZPdWtBRHE4U3BHUjJtNUpMemJTbXhRcEVERGFZTUt2QW1JbXlSWUpWOGZ6UWc?oc=5
- **CNBC** · An ex-bookkeeper spent $375 to launch a sewing business: 'I hadn't felt so sure about something like that in a long time'
  - 2026-10-24 10:00 (ET) · https://www.cnbc.com/make-it/2026/10/24/sewing-workshop-business-stitch-lab-atx.html
- **Reuters** · Iran's Pezeshkian blames US for interim deal failure, urges new try - Reuters
  - 2026-10-24 09:27 (ET) · https://news.google.com/rss/articles/CBMitgFBVV95cUxNd0xVa2UzLXppdXQ4c2xJaWNFcUlFWWswS3NYT0ZwQkZ3by1HNGJTakpQTDdUYzhSTUpwUHMzRnMtRzNEWmhieTJqTjZOdTlUN3c3YlNFMHVGd2V5RUZUcXNnbXFMMTlQLVBsRXNUT0ZndHM5SmswcFE5U0dCRlBnMndsNnRIQk00OXhIMnFzVDlSTWVVUjJGNkdnUFprRXBhY01RdnJFcnUzb1pzMDd4Ri1nUUdJdw?oc=5
- **Reuters** · As winter nears, heating oil emerges as hurdle for Republicans in US Senate races - Reuters
  - 2026-10-24 09:07 (ET) · https://news.google.com/rss/articles/CBMivAFBVV95cUxPWk5FamNJdG52SWx6b2FvaS1zcEFZZUJkbl9Kdl9DS2g2bGZadUJTcUZoMy03VWNrRlMtVFNnc2Q5clJJNVZ5eldDendydEU5b1lndTQ5TXViQW9uN2tTN185S1FkWnV3UHZxZkwtZE5zb0hZYm43ZG5sMHpIYWNGejQ3OWFNSjBjYUZfeEVoN1FvNk9zMmNDdEFrczJ1OEpadEM2U2RmdmtMMy1xUl9DWTkwVWd1ZFNIZjZ2Wg?oc=5
- **CNBC** · Fact vs. fiction: Doctors share whether peptides are safe and effective
  - 2026-10-24 09:05 (ET) · https://www.cnbc.com/make-it/2026/10/24/peptides-safety-risks-benefits.html
- **Reuters** · UAE's Ras Al Khaimah shuts all beaches as neighbours grapple with oil spill - Reuters
  - 2026-10-24 08:45 (ET) · https://news.google.com/rss/articles/CBMiwwFBVV95cUxPeDMwaHJxZFNJTlFkYnB5UDY2SEdRcnRvdGRMSUNDR0I3cmhHT0xkTHQ4QjR5d241bnMtTm44UFIzdTZJYUJwcXZTcVFwN2FSVm80aTBWNmpXQVhrSTdtMnZHbWJiZTV1WFl1cGVyOHlJSmZ2d3gxZ0ZpTkpVOW0xTWFrNEFlTDczUGY1TVl0SmVKSVQ5cnN3S2NhU2dwZGZuYldJZDB3WWpaQTYzQ1RQeUdqNS1acnNqY002emRQMHV0TFU?oc=5
- **CNBC** · Why popular airplanes are getting scrapped years early
  - 2026-10-24 08:00 (ET) · https://www.cnbc.com/2026/10/24/spirit-airlines-planes-scrapped-engine-shortage.html
- **Reuters** · Four Philippine Air Force pilots killed in training accident - Reuters
  - 2026-10-24 02:55 (ET) · https://news.google.com/rss/articles/CBMisgFBVV95cUxQUkZPOHk1VnhKNVhxNUVsNzg1VGdBWG1lYUFmLUptalZfVlJkMjJfVWU5MTh5TmhaZmZvRmZDbVNnRjZSb01GcV8tZWg1YlY2OVhZanBoV0NRMTZQbnd6eUhoOGlVekhkTkVrbXFCN1ZWTTF3UHVFRWdWZXdsWGkxUXhybVBhMlV6VDhGZ1JjcG5HNHRoWGhvRGxQSWYyVklyUkVsS01ZMGxyY0t6UlpkT3J3?oc=5

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · The Nasdaq Just Had Its Worst Day in 4 Months. Here's the Level That Would Signal a Correction, and What History Says Investors Can Do About It.
  - Yahoo · 2026-10-24 15:50 (ET) · https://finnhub.io/api/news?id=d8f7ba363444ed0ace0d46b0b74a292b9d84974892b02078381b6661a4c311d6
- **NVDA** · Oklo Is Down 61% This Year Despite a Real Technical Milestone. Here's the Disconnect Between the Stock and the Science.
  - Yahoo · 2026-10-24 15:47 (ET) · https://finnhub.io/api/news?id=d69fe8beeedf193eb9a9f6475dd40370088c40d178d0a584025dae1115b39416
- **NVDA** · Stock Market Sell-Off: History Says This Is the Best Move to Make Right Now
  - Yahoo · 2026-10-24 15:41 (ET) · https://finnhub.io/api/news?id=1544fb087a886561fb8856bcd11a0042833796e267fea50545e1daf943bd6ee9
- **AVGO** · Broadcom Stock Is Down 7% in a Year. Cheap for a Reason or Too Cheap to Ignore?
  - Yahoo · 2026-10-24 13:54 (ET) · https://finnhub.io/api/news?id=7b7a02c5e2d96788542778e3db38bff7062b38eb3cc1e82e81eada4fabc9b5bd
- **AVGO** · Broadcom vs. Dell Technologies: Which Stock Is AI Powering to Be a Better Buy in 2026?
  - Yahoo · 2026-10-24 13:40 (ET) · https://finnhub.io/api/news?id=95a5e9f09f9e4e6b6b9ca6f4f4af28515ec08ea91b72c0c1767a009d6001c1a1
- **AVGO** · 2 Unloved Stocks of 2026 to Consider Buying Now
  - Yahoo · 2026-10-24 05:43 (ET) · https://finnhub.io/api/news?id=3e8c0e3e93b8389eb3ec947af95880dbf0029eefa141288a8bc98b46ce1c6855

### 금융

- **JPM** · Can AI Fiber Still Deliver? Corning Faces High-Stakes Q3 Earnings Test Oct. 27 as Valuation Stretches
  - Yahoo · 2026-10-24 11:29 (ET) · https://finnhub.io/api/news?id=cb66459059ab4564f8498976c276e36465a96f998822f65e4843a28df6d172aa
- **JPM** · Wall Street Breakfast: What Moved Markets This Week
  - SeekingAlpha · 2026-10-24 04:10 (ET) · https://finnhub.io/api/news?id=2db318dc4a25c97d1a7494bbdf5136a328c2c69f069372f18733503ae2f3c653
- **JPM** · WEG (BOVESPA:WEGE3) Stock Fair Value Edges Higher After Analyst Target Changes
  - Yahoo · 2026-10-23 20:14 (ET) · https://finnhub.io/api/news?id=3898f501bdc900172b443604643d53b6dd36096cb1bfcf7ff6204ef4696632fe

### 에너지

- **XOM** · Fed Decision, Microsoft, Alphabet Earnings Highlight Blockbuster Week
  - SeekingAlpha · 2026-10-24 08:00 (ET) · https://finnhub.io/api/news?id=53ac13576c8631a6302c4fb020ea5d83e6e1c2e792591ef99f429680b275bace
- **XOM** · 3 Oil Stocks With Earnings Growth Over 5%
  - Yahoo · 2026-10-24 03:11 (ET) · https://finnhub.io/api/news?id=a9eadfb25105be572140a1434befe4d47dd6351b0a21a3730d9892a9181df8d9
- **XOM** · 3 Energy Stocks to Buy and Hold for the Next Decade, Starting With ExxonMobil
  - Yahoo · 2026-10-23 17:35 (ET) · https://finnhub.io/api/news?id=5235278a76063c973cc36ca4e8df3af5aaee22904a4943c9b3d2e8947d5b6b0e

### 헬스케어

- **UNH** · UnitedHealth Soars 11% in a Week After a Beat-and-Raise Quarter: “Discipline and Execution”
  - Yahoo · 2026-10-23 13:53 (ET) · https://finnhub.io/api/news?id=71fcce5a578d4cfc37f3f7ebd082656aa130478a51cb39a9c542cfcc890173bc
- **UNH** · 10 Health Care Stocks Whale Activity In Today’s Session
  - Benzinga · 2026-10-23 09:35 (ET) · https://finnhub.io/api/news?id=d174ca90034defae886831e386df4ea98868fbb7296e4c9f5deb4ea4237492dd
- **UNH** · Has Buying Cigna Stock At A High Paid Off?
  - Yahoo · 2026-10-23 06:35 (ET) · https://finnhub.io/api/news?id=a938323164f5b7f85952a00268f188351101d38dadbe0b65064ade9a6f3bdfc1

### 소비재·유통

- **AMZN** · Bro went from a 700-person village in Slovakia to Google then built an app that makes $2k/day
  - Yahoo · 2026-10-24 13:31 (ET) · https://finnhub.io/api/news?id=522babba2cb0e50f874d039b5d843e5320736608ca235ccf745872ba57df436c
- **AMZN** · Chamath: “$0.70-75 of Every Dollar” of AI Spend Is VC Money. The Real Winners Are Already Publicly Traded
  - Yahoo · 2026-10-24 12:18 (ET) · https://finnhub.io/api/news?id=c5ef94a85d3a914d0e0f4672b802279beee2eb6fe82d63d5e27c5cd332a81b8c
- **AMZN** · Amazon’s AWS Has Already Sold “a Good Chunk” of 2028 Capacity
  - Yahoo · 2026-10-24 12:15 (ET) · https://finnhub.io/api/news?id=a10be731883a4757811e3b41c1e7114d6600a64584744b0174b35f33c3a8ff10

