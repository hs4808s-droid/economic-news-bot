# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-26 · 미국 기준일(ET): 2026-10-23 · 생성시각(KST): 2026-10-26 06:30
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
| USD/KRW | `KRW=X` | 1,323.61 | -0.18% | 1,325.99 | 2026-10-25 17:00 |
| WTI | `CL=F` | 103.27 | +3.82% | 99.47 | 2026-10-23 16:59 |
| Brent | `BZ=F` | 111.7 | -1.30% | 113.17 | 2026-10-23 16:59 |
| 금 | `GC=F` | 4,007.9 | -1.29% | 4,060.4 | 2026-10-23 16:59 |
| 구리 | `HG=F` | 6.51 | +2.28% | 6.36 | 2026-10-23 16:59 |
| 비트코인 | `BTC-USD` | 80,389.02 | -0.50% | 80,790.84 | 2026-10-25 17:30 |
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

- **Reuters** · Sri Lanka rescues 40 Iranian sailors, spokesman says - Reuters
  - 2026-10-25 13:06 (ET) · https://news.google.com/rss/articles/CBMiqgFBVV95cUxNVlpiem5XSDBRRmZVd1BHdS1GaGppQVhLQkVhWkFaU3dvYTl6UkJ5MnZySmFpUkxfb2xZMy14V1pQTlRURmQ3eUNISklSZlVkMkVOZjBja1ZCNkxaaHo4c3IzYUk3VEczNWR0RzFSVEhfXzRUWEliODc2Y1hNSC0wbk5hdWFoUG9IYmxtMURiOHhtYVB1SHJRTWNEbDdBV3dvWXdKTF9lQ2s1Zw?oc=5
- **Reuters** · Billionaire Trump backer says Ben-Gvir, Smotrich should not serve in next Israeli government - Reuters
  - 2026-10-25 12:37 (ET) · https://news.google.com/rss/articles/CBMiywFBVV95cUxQSlk2VkFXVkdJWWhnUXFnSFNuN25YOHpiSHdWczV3X3BHQURLcVhtVzdIVXlRbE5CWU9KSG45dkNqemxwZXBSRHpMR2hkdmhRSFhrNkpHU2dZa2RNbm1hQ3dMTUQtWGlIbElrNHhrb2Zsem4xY19hOHoxNmNlMjJPb3BUd2YybklKZXREeVNKZVNBRGJHTW5jcG5LaVdzZUhLTExFT3ZBV0Nwc29NRXhZXzJFbkRQTjR5UDQ5dVo4b2Jhcm5oVzF3ekt0MA?oc=5
- **CNBC** · Here are 4 big things we're watching in the stock market this week
  - 2026-10-25 10:58 (ET) · https://www.cnbc.com/investingclub/2026/10/25/here-are-4-big-things-were-watching-in-the-stock-market-this-week.html
- **CNBC** · I paid off $11,000 of credit card debt in 18 months while still traveling, shopping and living my life
  - 2026-10-25 10:00 (ET) · https://www.cnbc.com/make-it/2026/10/25/pay-off-credit-card-debt.html
- **Reuters** · Most Gulf shares close lower as Saudi-Houthi fighting rages on - Reuters
  - 2026-10-25 09:20 (ET) · https://news.google.com/rss/articles/CBMirgFBVV95cUxOa3ZBWG5tbkZvcXJFc2xkcEs1SmhEcHAybDM1ZGN0T0ZCN3BIcTFyaF9laXlEYVA2N2ZsUmJjcmgxaS1aVW5jdFZSOFZrc2JnUWFJaFRwR25QS0pob0RTT0lONlJldzVxOFlidThrdm8zTVU4X1l4dFRPVUY5R0ZuX05aX2pibWg2VlNLUmlaVmFaWDg5bDlMQUVFWTh2bnZ3WFJ4MzA1RWVDMEtKOEE?oc=5
- **Reuters** · Jordan church attack survivor says her cousin died before her eyes - Reuters
  - 2026-10-25 08:45 (ET) · https://news.google.com/rss/articles/CBMivAFBVV95cUxPVTFxbDBEOEdFZFEwX29PZzd0QTNuYm11VXE5ekQ1bUgtQjVGeU1lbHdjVG9BR21DcENBLU5BeWFCeERYd2Y4bWp4OHFEclBuWlRUQ3ltUkduNFlQOXNwSTV6ZHJ4Qi02ZGQyakE1a0lfNldTM2RBQ3dVbEJHcWpSWE96b3FKUWstUjh6aExqcTdPMmdhMkRpbEhjcEtpak5YMmFfOThiTmh4ZGd5Z2lGMk1Ucjh0U2lDQjlRZQ?oc=5
- **Reuters** · Disenchanted Netanyahu supporters are prize of Israel election campaign - Reuters
  - 2026-10-25 07:18 (ET) · https://news.google.com/rss/articles/CBMiwAFBVV95cUxORkR4bHJlcGYyMi1nYkI4Wm9SeThiSEh4ZUVrdHM1NnpJSjV4eWdVOUxOWS13NzhWZ3RLbXY4Skp2aVhhT0ZUOFR1a0pNYkZzRFRjVjEtSEttMjY1Z1RKMHNvZFI5RVZidV9ONzFuc1lfdjFnRlJlUG84Qy1SNmM5UFkwU0FGYmFLeXFiYTlqU2hsci01T2JwVW1PZFZKT0RCVlVpMTg5VVZDQktaTi01R1pDc2p3RVN3YmpWeWlER1I?oc=5
- **Reuters** · Four ways US foreign policy could change if Democrats win in November - Reuters
  - 2026-10-25 07:02 (ET) · https://news.google.com/rss/articles/CBMisAFBVV95cUxQYVRLMHJmdldMQ1h3TUZkbmpNUUZqUlVTY1VPaTNpU0JLc2xua051SmgtQUJzcFlnRjV3a3VaWVctNFM0dF80X2VKMlM5UTNIQkV4YmJ4TTAxdDFVS2EtdFN6R2pfTDVTVnNfZjJOYXdxbTV3eGxQeUFPZV85ZjBNb0I2dlpVdU9DQkhDaWI2Z214Wko2cUVLenFCYWUtLVY5WF9ydlJOTmlkdjN4RloxQQ?oc=5
- **Reuters** · Iranian army says it shot down US drone over Bandar Abbas, Tasnim reports - Reuters
  - 2026-10-25 03:22 (ET) · https://news.google.com/rss/articles/CBMixAFBVV95cUxNNjlxWUNjczg2SHFQamFEZDV0SVhZaHA5bFdqaVQzT1oxSjd0b2ZQQjd6MldHeEhKcUstbGJEa1QxMmFBMFhad2VnREVIa2xoT0tPWlFXVW5lcXVEYjMwdUd5NTRIYm0zTFpabXUxY2pCakRGM3JnWE1iNHc3MmtlbWduRno3ZWVGVWVpa2JtRjF4VDh5TEFHN21hUV9sQUhxOWpJMVVPNlhFMDd5SkJMekZkTFdtQzlnYnBQNkd2MG1TNzZy?oc=5
- **Reuters** · Saudi says Riyadh airport partly reopens despite renewed Houthi threats - Reuters
  - 2026-10-24 19:56 (ET) · https://news.google.com/rss/articles/CBMisAFBVV95cUxNT0JBTVByRUdVWnYzNWpyRUlfbGRFR2RnQzZpbTgzR05tX1AzU2VkVC10RUswYWthSGtJa2FZamVSa2E2ckdSeG5FN3VGTFU5SVJfbjY4NEZjR2tQSWJfZmxtbTJvUU5YSEpKWHRQQWpHMGRfR29xeFhkR1BwcHA5NlA3MnJmRnloYzF6Q0tBZG92ZDgzWmRubVNpNi1CajBmdXdNZmNTYnkzLWFnMldvaQ?oc=5
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

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Here's the Average Social Security Benefit at 62 vs. 70
  - Yahoo · 2026-10-25 15:20 (ET) · https://finnhub.io/api/news?id=df9f300f5bad080ae1181f16c03a289a07a4f329c2e3be7d96ecbb6ca10648cb
- **NVDA** · Vanguard flags a hidden AI risk in your value fund
  - Yahoo · 2026-10-25 15:13 (ET) · https://finnhub.io/api/news?id=4c50216e3305be9f6c8fc9561b157125e5fc8d18386a6c11023b2cf68dc28dbd
- **NVDA** · Nvidia (NVDA) Has Lost Its China AI Accelerator Market
  - Yahoo · 2026-10-25 15:06 (ET) · https://finnhub.io/api/news?id=dd6f88ca80d62bd095e800074702f69a0847fcc05d1420d6a89dbd434deca166
- **AVGO** · Wells Fargo, Cisco, Intuit Among 6 More Companies Objecting to Tokenized Stocks
  - Yahoo · 2026-10-25 12:01 (ET) · https://finnhub.io/api/news?id=5163ce18942b895f4e4b097d7595eb2c4b40eccba1b2953b30ce4795c2fbca01
- **AVGO** · Does enough capital exist to finance everyone’s ambitious AI spending plans?
  - Yahoo · 2026-10-25 11:57 (ET) · https://finnhub.io/api/news?id=ffdbd0659b514bbb7acd64327012a1f799f98b5682b669581e4f64e802f4d945
- **AVGO** · Here's What $10,000 Invested Equally in Nvidia, AMD, and Broadcom Could Be Worth by 2030
  - Yahoo · 2026-10-25 09:35 (ET) · https://finnhub.io/api/news?id=e79f7f843040d301b578346a1e7f88a5d68bfd0ca166081ed49d7be1c1b07875

### 금융

- **JPM** · JPMorgan Has Nearly $900 Million in Tokenized Funds on Ethereum and Solana. Which Chain Benefits More?
  - Yahoo · 2026-10-25 14:30 (ET) · https://finnhub.io/api/news?id=2333bec915c608f0ab9fa325e3a7a7baf851f8c9e94e14059df8a61d23c9f4f1
- **JPM** · Seven Answers to One Question: Who Decides Whether Your Agent Can Pay?
  - Yahoo · 2026-10-25 11:19 (ET) · https://finnhub.io/api/news?id=997e0d361a4de7172db8591cbd65ee58a05ad529f9bb9ed3d31888ae183b3e7d
- **JPM** · Could Stabilising Bond Yields Support Equities Through Year-End? JPMorgan Sees Scope for Recovery
  - Yahoo · 2026-10-25 10:57 (ET) · https://finnhub.io/api/news?id=d30189888356eec97879bfbb3f1ab2e049968329c9f354bc0d3570922e63841f

### 에너지

- **XOM** · Wall Street Week Ahead
  - SeekingAlpha · 2026-10-25 02:59 (ET) · https://finnhub.io/api/news?id=c445e63593ddae017438db65d785f64622a4901f01875a722b3d91243f3cb4d5
- **XOM** · XLE, VDE, IXC ETFs Hit Record Highs as Inflows Jump as Brent Crude Targets $120
  - Benzinga · 2026-10-24 08:30 (ET) · https://finnhub.io/api/news?id=5b87999428244d566e8689b6fe88db25036d0c02a23b980ac52c17baefe9ffeb
- **XOM** · Fed Decision, Microsoft, Alphabet Earnings Highlight Blockbuster Week
  - SeekingAlpha · 2026-10-24 08:00 (ET) · https://finnhub.io/api/news?id=53ac13576c8631a6302c4fb020ea5d83e6e1c2e792591ef99f429680b275bace

### 헬스케어

- **UNH** · Wells Fargo, Cisco, Intuit Among 6 More Companies Objecting to Tokenized Stocks
  - Yahoo · 2026-10-25 12:01 (ET) · https://finnhub.io/api/news?id=5163ce18942b895f4e4b097d7595eb2c4b40eccba1b2953b30ce4795c2fbca01
- **UNH** · Is UnitedHealth Group (UNH) Still A Bargain After Raised Guidance?
  - Yahoo · 2026-10-24 17:08 (ET) · https://finnhub.io/api/news?id=99a89e424f74028da6c699d6dc3e47e104ebc29d54c6c7a444c228bbfb7f7c47
- **UNH** · UnitedHealth Gains 3.5% on RBC’s $498 Price Target as Managed Care Stocks Rally
  - Yahoo · 2026-10-23 14:31 (ET) · https://finnhub.io/api/news?id=5b6d19898bcb8d6507e03c50e270817280ff739738c682749bc566efba9d0b0c

### 소비재·유통

- **AMZN** · Dow Jones Futures Due With Microsoft, Google, Amazon Ahead; Will Doom Or Bloom Control Market?
  - Yahoo · 2026-10-25 15:33 (ET) · https://finnhub.io/api/news?id=113cecb05a3df99f75cf890a02cbfd5909256fef04c79314b3e628fbf4ac126a
- **AMZN** · 'The world's super company': Wall Street weighs SpaceX earnings, company's likely Tesla tie-up
  - Yahoo · 2026-10-25 13:39 (ET) · https://finnhub.io/api/news?id=bd47ebc11459ee739b5b5e3989cb1390d6760cf307068cee0ff7f6b4f8e4add0
- **AMZN** · AI delivers ‘zero financial payoff’ to most companies, Apollo economist says
  - Yahoo · 2026-10-25 12:57 (ET) · https://finnhub.io/api/news?id=db7acea0797338438a6dd246b871843c590e068f95fe8f16c8dc429f2dcbcb84

