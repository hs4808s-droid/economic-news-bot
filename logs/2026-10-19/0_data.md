# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-19 · 미국 기준일(ET): 2026-10-16 · 생성시각(KST): 2026-10-19 06:30
# 출처: Yahoo Finance chart API · FRED(키 없는 CSV) · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.
> **금리 기준 통일:** 2년물·10년물·10Y-2Y 는 FRED 일별 값(같은 기준일)만 본문에 쓴다. Yahoo ^TNX·^TYX 는 당일 참고용이라 FRED 값과 섞어 인용하지 않는다.
> 금리·스프레드의 등락은 bp(1bp=0.01%p) 단위다. FRED 값은 영업일 기준 하루 늦게 확정될 수 있다(기준 열 참고).

## 미국 주요 지수

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| S&P500 | `^GSPC` | 7,659.44 | -1.09% | -1.95% | +0.28% | +11.89% | 7,744.06 | 2026-10-16 16:42 |
| 나스닥종합 | `^IXIC` | 26,140.03 | -2.15% | -4.48% | -1.05% | +12.47% | 26,713.03 | 2026-10-16 17:15 |
| 다우 | `^DJI` | 52,002.41 | -0.34% | +0.67% | +0.43% | +8.20% | 52,177.69 | 2026-10-16 16:42 |
| 러셀2000 | `^RUT` | 2,721.37 | -1.66% | -3.05% | -5.33% | +9.65% | 2,767.27 | 2026-10-16 16:30 |
| SOX (필라델피아 반도체) | `^SOX` | 11,137.29 | -3.83% | -11.41% | -3.98% | +57.24% | 11,581.21 | 2026-10-16 17:15 |

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,704.25 | -1.11% | 7,791 | 2026-10-16 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 29,391.5 | -2.50% | 30,143.75 | 2026-10-16 16:59 |
| 다우 선물 (YM) | `YM=F` | 52,214 | -0.41% | 52,430 | 2026-10-16 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,735.5 | -1.66% | 2,781.8 | 2026-10-16 16:59 |

## 금리

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 미 2년물 금리 (FRED·기준) | `FRED:DGS2` | 4.77 | -5.0bp | +0.0bp | +10.0bp | +130.0bp | 4.82 | 2026-10-15 (FRED) |
| 미 10년물 금리 (FRED·기준) | `FRED:DGS10` | 5.1 | -9.0bp | -18.0bp | +10.0bp | +92.0bp | 5.19 | 2026-10-15 (FRED) |
| 미 10년물 금리 (Yahoo 당일·참고) | `^TNX` | 5.098 | +0.9bp | -14.6bp | +15.1bp | +93.5bp | 5.089 | 2026-10-16 14:59 |
| 미 30년물 금리 (Yahoo 당일·참고) | `^TYX` | 5.436 | +0.7bp | -16.4bp | +14.0bp | +59.6bp | 5.429 | 2026-10-16 14:59 |

**10Y-2Y 스프레드 (FRED DGS10−DGS2, 2026-10-15): 0.33%p** (전일 대비 -4.0bp)

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 19.99 | +21.45% | 16.46 | 2026-10-16 16:15 |
| VIX9D (9일) | `^VIX9D` | 20.12 | +44.02% | 13.97 | 2026-10-16 16:15 |
| VIX3M (3개월) | `^VIX3M` | 20.5 | +10.87% | 18.49 | 2026-10-16 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 109.91 | +18.73% | 92.57 | 2026-10-16 16:15 |
| SKEW (테일리스크) | `^SKEW` | 168.59 | +5.07% | 160.45 | 2026-10-16 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 달러지수 (DXY) | `DX-Y.NYB` | 101.78 | -0.22% | 102 | 2026-10-16 16:59 |
| USD/KRW | `KRW=X` | 1,335.94 | -0.37% | 1,340.95 | 2026-10-18 17:23 |
| WTI | `CL=F` | 99.02 | +1.07% | 97.97 | 2026-10-16 16:59 |
| Brent | `BZ=F` | 109.86 | +3.72% | 105.92 | 2026-10-16 16:59 |
| 금 | `GC=F` | 4,181.1 | +0.26% | 4,170.1 | 2026-10-16 16:59 |
| 구리 | `HG=F` | 6.57 | +0.95% | 6.51 | 2026-10-16 16:59 |
| 비트코인 | `BTC-USD` | 80,932.6 | -0.55% | 81,382.15 | 2026-10-18 17:30 |
| 하이일드 스프레드 (OAS, %p) | `FRED:BAMLH0A0HYM2` | 3.23 | -2.0bp | 3.25 | 2026-10-15 (FRED) |

## 섹터 ETF

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 기술 | `XLK` | 183.47 | -3.02% | -7.70% | -2.44% | +27.44% | 189.19 | 2026-10-16 16:00 |
| 금융 | `XLF` | 55.52 | +0.45% | +1.44% | -0.64% | +1.37% | 55.27 | 2026-10-16 16:00 |
| 에너지 | `XLE` | 68.24 | +2.52% | +4.86% | +5.83% | +52.63% | 66.56 | 2026-10-16 16:00 |
| 헬스케어 | `XLV` | 176.71 | -0.27% | +3.45% | +4.68% | +14.15% | 177.19 | 2026-10-16 16:00 |
| 경기소비재 | `XLY` | 112.46 | -0.84% | -0.35% | +0.96% | -5.82% | 113.41 | 2026-10-16 16:00 |
| 필수소비재 | `XLP` | 87.62 | +1.08% | +5.02% | +4.95% | +12.80% | 86.68 | 2026-10-16 16:00 |
| 산업재 | `XLI` | 167.76 | -0.08% | -0.88% | -0.74% | +8.15% | 167.89 | 2026-10-16 16:00 |
| 소재 | `XLB` | 50.92 | +0.71% | +3.01% | +0.41% | +12.28% | 50.56 | 2026-10-16 16:00 |
| 유틸리티 | `XLU` | 42.21 | +1.34% | +1.93% | +1.25% | -1.12% | 41.65 | 2026-10-16 16:00 |
| 부동산 | `XLRE` | 42.16 | +0.40% | +1.32% | -1.82% | +4.49% | 41.99 | 2026-10-16 16:00 |
| 커뮤니케이션 | `XLC` | 110.32 | -1.89% | -0.05% | -1.81% | -6.29% | 112.44 | 2026-10-16 16:00 |
| 반도체 | `SMH` | 539.79 | -3.41% | -10.53% | -3.71% | +49.89% | 558.84 | 2026-10-16 16:00 |
| 소프트웨어 | `IGV` | 104.34 | -4.80% | -7.39% | -1.36% | -1.28% | 109.6 | 2026-10-16 16:00 |
| 지역은행 | `KRE` | 69.81 | +0.09% | +1.16% | -4.03% | +7.71% | 69.75 | 2026-10-16 16:00 |
| 바이오 | `XBI` | 144.32 | -3.65% | -6.15% | -8.80% | +18.36% | 149.78 | 2026-10-16 16:00 |

### 섹터 ETF 보조 지표 (1M 상대강도 vs SPY · 이동평균 위치)

| ETF | 1M vs SPY | 50일선 | 200일선 |
|---|---|---|---|
| 기술 (`XLK`) | -2.53% | 아래 | 위 |
| 금융 (`XLF`) | -0.73% | 아래 | 위 |
| 에너지 (`XLE`) | +5.75% | 위 | 위 |
| 헬스케어 (`XLV`) | +4.59% | 위 | 위 |
| 경기소비재 (`XLY`) | +0.88% | 아래 | 아래 |
| 필수소비재 (`XLP`) | +4.86% | 위 | 위 |
| 산업재 (`XLI`) | -0.82% | 아래 | 아래 |
| 소재 (`XLB`) | +0.33% | 아래 | 위 |
| 유틸리티 (`XLU`) | +1.16% | 위 | 아래 |
| 부동산 (`XLRE`) | -1.90% | 아래 | 아래 |
| 커뮤니케이션 (`XLC`) | -1.89% | 아래 | 아래 |
| 반도체 (`SMH`) | -3.80% | 아래 | 위 |
| 소프트웨어 (`IGV`) | -1.45% | 아래 | 위 |
| 지역은행 (`KRE`) | -4.11% | 아래 | 아래 |
| 바이오 (`XBI`) | -8.89% | 아래 | 위 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.026 | 콘탱고 |
| VIX / VIX9D | 0.994 | 백워데이션 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 2.016 | 1.441 | 914,767 | 1,844,420 | 28,300 |
| 나스닥100 ETF 옵션 (QQQ) | 1.328 | 1.410 | 2,053,520 | 2,727,378 | 10,360 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **Reuters** · Trump endorses Netanyahu in close Israeli election - Reuters
  - 2026-10-18 13:41 (ET) · https://news.google.com/rss/articles/CBMimwFBVV95cUxQeXNEX0FibmplMGVhLVA1TDdESTEzdk9PR1JYNWtsQzJkTG5ER1lrMkhfV05saHNXYndlOXFxdFJONU4zOEZhZUdtXzR0WGpVSHBuLUUyOExTWHktR3AtMjlnU08yNXpaUWFVOXE1Q3dNaDFkZG4yT0JFMmlkYzdvTXFudjFQOF9rcFBaM0VBbjBaOFQ5bndSNS1fZw?oc=5
- **Reuters** · Saudi-led coalition says helicopter crash in Najran kills two crew members - Reuters
  - 2026-10-18 11:54 (ET) · https://news.google.com/rss/articles/CBMiwwFBVV95cUxNbFZiZFozb1RWTzVBbk4wZU8xMHlSeHhuSmhkMi1FSVhqTTZ5U3BMbF9aaU5fVjRpWnI1MkJTMTZscVcxTWM0YnVFRXFWdXQ2SnpSdVNPVm5LR1QzbVhpQjliR3VNZFl4WXhjODUzbjNZRXg0S0l0al80ZDlwdjc5ejFRU0E3NlJBZm1iOWg3VjhybzNLbWpOelQ4ZDZBWTkxS3Y4Rm9MUm9vTjdfYk9iaVRJd29DSDhMUi1KOGZMcDhzZGs?oc=5
- **CNBC** · Here are the 3 big things we're watching in the stock market this week
  - 2026-10-18 11:24 (ET) · https://www.cnbc.com/investingclub/2026/10/18/here-are-the-3-big-things-were-watching-in-the-stock-market-this-week.html
- **Reuters** · Egypt says ready to give Saudi Arabia necessary support amid Houthi conflict - Reuters
  - 2026-10-18 10:31 (ET) · https://news.google.com/rss/articles/CBMixgFBVV95cUxNaUsxbVVqQ0FFUl81U25IbG1NaXhrNzFqZzIzaFpRUVhKbF9rYlZoMXg1Z3NzYjR1TEtkeHNCU1BrOWs4ZXR5VHFqMTBoX3VjSV9FRV9neGVDSkdUNWIxMlNhZWRJbldocDM5Q2hiMXYxUXpHVUJqWkkyOEF5OGNBNWduQXFPMXp6VXhYRjUyNmsxaV9pbXJhS29uVGh6Tm51emp4S3YtdmI5c21HZE9HeFkycENlNGxHRUlJd29YWkxwRF85eXc?oc=5
- **Reuters** · Oil lifts Saudi bourse; Egypt tumbles on regional tensions - Reuters
  - 2026-10-18 09:51 (ET) · https://news.google.com/rss/articles/CBMirAFBVV95cUxPdkJ2LXpMXzV0dEQ2b1NYcm9XT1FZMTUyZUlVQlZaZ2RYNFhvVFlnVFRJM1RJTU5CNzlDNVdKTmtzX2E0S0xvV2h6UEpOWFJtUlNGczZxeGR4a2NYQlU5NktIN0JQbE54SlRaS3QzRVVvWUdSRGpqWmNYWXlQSWtMbkM2R3lnRWtERTVLcTNadXMwbGxVQm9GXzVLRmVpZDY1OFFDVmI1ZlM3cGVZ?oc=5
- **CNBC** · I've studied over 200 kids—parents who raise resilient, successful children teach them these 6 lessons early on
  - 2026-10-18 09:37 (ET) · https://www.cnbc.com/make-it/2026/10/18/parenting-lessons-resilient-successful-well-adjusted.html
- **Reuters** · Turkey will get some diesel from US-Russia supply deal, energy minister says - Reuters
  - 2026-10-18 07:51 (ET) · https://news.google.com/rss/articles/CBMivwFBVV95cUxQYjdhZ0V0TGxFRVBoQWVSMVBlOXFvdm1rcFlmWm45dVdYS3FJdm5ZdExGM2xRd3hhb1hvWUJYdnVlRG50bm1CbjJubjRnM2JtVFp3UkdiU0QxcVJEbnZyNC1HSDhOYUM1THhiTm9heG9tTV9FTHpwMW1BOEhxN0Q0WjlocVJMZV9TSUlIN0RMZDdkQmpPQUhUQk40bkNDdzdMSVhEa3U5eUZKd2R1OVBqajZYTDI5cDhTT3FaUk5uZw?oc=5
- **Reuters** · Iran urges US to accept proposal to reopen Strait of Hormuz - Reuters
  - 2026-10-18 06:29 (ET) · https://news.google.com/rss/articles/CBMipwFBVV95cUxOWUh3Z1JyMmU4SkJ4ZXQ4Y0VaN3RMS1Vtcmg4S1lDMGlvUG1GeVY3Q1pkaWltSG5yOWhmcTBnNkk4U0ZiTVREVzd3RVRZNjZJTjhaTkg5bTFGX0J2Q0JzTUI4UlZIWmxHMmRDeVRRODZRYU1mbkNrVzFRX3piTnpDbllfUGc3NnJkSl9hWWRCQzlxZjFBYnE5bXJQMVBjMzNBUFlNcmRtcw?oc=5
- **Reuters** · Iran's parliament approves Mehrdad Akhlaqi as minister of defence - Reuters
  - 2026-10-18 05:08 (ET) · https://news.google.com/rss/articles/CBMiwgFBVV95cUxOUllscVFHdi1ER1I5djNzUWkwbXpXUGVTRkRVLUNWSWRBUU9lek5waWFCVjJwMXphLXFHaV9EUkF0SjdXVGMwNnpLYl9xZ2xrWDFvZzlrN2RwV2J4QUt1UUtiLTlzZTA1Qms2eTMtTjMyRXRGblJXVkF5NV9nTzEzTE1rbDFLUDdNOWRuQlhrS1BIVXFRdVJiQUtuT0lmODVRcVZ1dTRMeU11SkJuWlJvNGNJUjJhY1RBVGN1WWJGQ0JyZw?oc=5
- **Reuters** · Rubio arrives in Central Asia while other US officials hit foreign policy hot spots - Reuters
  - 2026-10-18 01:03 (ET) · https://news.google.com/rss/articles/CBMizgFBVV95cUxNMmFpc0NDcHNWM0tpSVFxYURNSGY4OTFCRlhISGVnLUZqUGtaWEpJUXhsTVpyNzZaRmV3R1JhRnRIdjJjS21DaVFjTDRHaEtIUXEySXNwd0U3el93cmNJeEtHblpNc2VhZERoMXliOUFxXzFMVHhnTUNpY1dRVHJEMGxVR1Uxb0ctRThOeGNxN0ZxaW8wQjhJVTJpSG5sSWVNWndGWWRTOW40TjFEa0d3MDVYcU1Id2tRekxlbURxS2gxcDQ5dlZYUnJ4UWlRUQ?oc=5
- **Reuters** · Lebanon says military delegation will press for halt to Israeli attacks at US talks - Reuters
  - 2026-10-17 16:31 (ET) · https://news.google.com/rss/articles/CBMixgFBVV95cUxQSVBXRnY2dGJybHo5d2JiMTlEbnE2SGNfX3FBbVIyazh3dFFPWjB6eWpQaTZwZGwxT3dKQTRfVHlTQ0hZaGJfWmZtOFZYSERiV1Q1QWNTeWdDcWpSMkdtci0zOHBvelNXYW9XaFB0ZHRadFN5Sy1Vb25PNU8yeXV5Q01IdEZIX1o2TEpXNS15ZDcxX0MxQ1JJeEJZQ3laeGpvZURhYVpkajZrTmcwQzZzLW9EUnhaOUlaRmd5WGxaVEhpdElCQVE?oc=5
- **Reuters** · Explosion at Iraqi paramilitary alliance base kills one member, sources say - Reuters
  - 2026-10-17 12:35 (ET) · https://news.google.com/rss/articles/CBMiwwFBVV95cUxOMFdrc1I4NnJ2Z0NQeUM2c25pYzF4ekRXcFVHRHlYVWVVYXhhV0hDXzhVUWtUc2JCRnZmU0lZRkJlRkZudWNzUzJINWpDWWdFcG13SG5YVHJnMk9tcEE2Z3BtdHJ1VHdJcXA4eGNQYXVfcE1VX293QjhYQ0YtaVJUOU1kYjJoR2hPeUJJNlNDUzVfVnlxVUhINGJEV2UzTllWRWVrRmpuNG5ZVGY2SFFvcFpySlJsNUEtYmF6LVNEcEpnck0?oc=5
- **Reuters** · Israeli settlers attack Palestinians, European diplomats in West Bank, Belgium says - Reuters
  - 2026-10-17 11:51 (ET) · https://news.google.com/rss/articles/CBMiwAFBVV95cUxNWXplRm9KdGNaY1RUZFA0UUFLbUxVWmx3TlBnRXRCQU5BUjBBRXNDcm9TSEQ2SUthUlpYMl92X052ZGdjMzFZLUd6amZ3UHdFNG5ic0k5LURwUDFOaDZQNE1CYWFlN1JRWDhlcFRWVVZTU0tzN0l5OHVaZXh0dkVFOFFwYkQ5WTIycElqQk5ZeHh3OTZVQWpVWHNkMDFDWk1ndEc5OHUtR2EzbV9iQVZHaWx4REljaTYxSFhsSkdDRkw?oc=5
- **Reuters** · Egypt's Sisi seeks parliament's backing to help defend Saudi Arabia if asked - Reuters
  - 2026-10-17 10:23 (ET) · https://news.google.com/rss/articles/CBMiwwFBVV95cUxOQ013QTYtQ0JudFVITVllWWh1Y3Y4WXVXOW80UmlXbEw1YXcxSG5RUkc4djV1X255M3BrWFl1ektoZU5vS1pMYzd4MW5jQ19wS3o4NEFDdHEyT3BsdGl6dDRTNXRDTGVKUnFlVkxSamlaVXRRaGhCeTBCblhQaDZUbHh2TlFRbHYzWUQtODRtVDFjdGlyRUxJR3A1OGdXWU1NalRGRnlhTExDbktfdHpWMmpoY1ZpdTlacmtiN0o1TEJaZ28?oc=5
- **Reuters** · Iran's Guards say two tankers hit mines in Strait of Hormuz - Reuters
  - 2026-10-17 09:36 (ET) · https://news.google.com/rss/articles/CBMiqgFBVV95cUxNZWFxZjNZNnY5cVR3VDhKUnNnV1JOcG1vOVB5dEZGdWRybEtqdE9YRWgwY0ZVSXZ0bHYzTWRpX2duSkxpTENtY0s0WW5jMzFUZlZIME16d0FpUXluV2ZGbFJ3alNZaDh0VVVSVFhOMWVIbEZTNVgyTVdwaXNLNXRrMjE4SjZvQXZtblNUNVVHSjFIUmlIaU41TGRHYmIzOUxoa25BODFKaG1FZw?oc=5

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Taiwan Semiconductor Just Proved Why It's a Top AI Investment
  - Yahoo · 2026-10-18 15:43 (ET) · https://finnhub.io/api/news?id=aa8f89ccfcc82cdd5533240900c42271d1d202512420920155fb3590ecca9420
- **NVDA** · Trump's Marijuana Order Is Stuck at the DEA. Here's What That Means for Canopy Growth.
  - Yahoo · 2026-10-18 14:35 (ET) · https://finnhub.io/api/news?id=25b006e94a799c4d3728be8022384b34bf74f7a946025ed2339ca9335d468bed
- **NVDA** · Wall Street's AI Boom Just Reached a Dangerous Milestone. History Says the Winners Could Change.
  - Yahoo · 2026-10-18 14:05 (ET) · https://finnhub.io/api/news?id=c5c6f3e490f1ca091e0d5ea3535ccabaafd7a41d0e501d867b9191849e18f0ae
- **AVGO** · Nine Companies, Including Broadcom and Verizon, Object to Their Shares Being Tokenized. Can They Stop It?
  - Yahoo · 2026-10-18 14:30 (ET) · https://finnhub.io/api/news?id=57f743c8f642271987dae6f5e86d7fcda59985d7b89227a395e3cb591f5c0007
- **AVGO** · What Does Broadcom (AVGO) Face As AI Chip Supply Turns Into A Bottleneck?
  - Yahoo · 2026-10-18 12:09 (ET) · https://finnhub.io/api/news?id=99ada1d69d367f1bd75eb62c3b665b465fed7b42122097d0c519a376c3167313
- **AVGO** · Broadcom (AVGO) Went Nowhere for a Year. Analysts Think It Is Worth 50% More
  - Yahoo · 2026-10-18 10:34 (ET) · https://finnhub.io/api/news?id=1532391aa5c0969c751fa1194019116d039c167e1aee3cf8d61c122e45fa5420

### 금융

- **JPM** · As borrowing costs spike, Jamie Dimon asks corporate America: 'Are you prepared?' You should ask yourself the same thing
  - Yahoo · 2026-10-18 06:40 (ET) · https://finnhub.io/api/news?id=8e4cf922a5acceaaa22703cf2a15c4d6ea52a3e366937bc857c138e59a2a0eb5
- **JPM** · What Does JPMorgan Chase (JPM) Face If Jamie Dimon Is Right On Rates?
  - Yahoo · 2026-10-18 05:15 (ET) · https://finnhub.io/api/news?id=f2e19f9aabe141ac0471d9ced087148b807c53b016401f99b96903f4054cd78d
- **JPM** · Big Banks Outperform Sector, But Risks Shine Bright
  - SeekingAlpha · 2026-10-18 05:00 (ET) · https://finnhub.io/api/news?id=055f3ee9597222a62dc95d2323f1bb5c5ed39a2c73dcca30af18abc700b7ba1f

### 에너지

- **XOM** · ExxonMobil Signals Massive Profit Boost From Rising Refining Margins
  - Yahoo · 2026-10-18 09:01 (ET) · https://finnhub.io/api/news?id=5db434e3c04c051305a642b18d0d141ae21e21c25c52a09bd794ef782975a3de
- **XOM** · ExxonMobil (XOM) Stock Fair Value Edges Higher As Analysts Rework Earnings Outlook
  - Yahoo · 2026-10-18 04:12 (ET) · https://finnhub.io/api/news?id=93c2861fb8f939027399915c231de603239b1083e07721165b81d215a3f8231d
- **XOM** · Venezuela expects $76 billion oil investment boost amid U.S. cooperation
  - Yahoo · 2026-10-17 21:55 (ET) · https://finnhub.io/api/news?id=fcc1812900c549017973141db41d0ec5d8d2798b32e4a4e9d07b6916b2be3333

### 헬스케어

- **UNH** · Nine Companies, Including Broadcom and Verizon, Object to Their Shares Being Tokenized. Can They Stop It?
  - Yahoo · 2026-10-18 14:30 (ET) · https://finnhub.io/api/news?id=57f743c8f642271987dae6f5e86d7fcda59985d7b89227a395e3cb591f5c0007
- **UNH** · UnitedHealth: 3 Key Takeaways for Long-Term Investors
  - Yahoo · 2026-10-17 15:07 (ET) · https://finnhub.io/api/news?id=8ee16e15ed2fc0b2932a806b0049bc00765746f314a92e62051a3b6e02c1a9d0
- **UNH** · 3 US Dividend Stocks Worth Watching As Treasury Yields Climb
  - Yahoo · 2026-10-16 20:14 (ET) · https://finnhub.io/api/news?id=55289d523a3833a386828de25328617e55dad3323026dffd1400574588ee602c

### 소비재·유통

- **AMZN** · UTES Vs. UTG: Why I Prefer The ETF As Rates Rise.
  - SeekingAlpha · 2026-10-18 11:31 (ET) · https://finnhub.io/api/news?id=e61831d34030ae481e8eb85df48f4bd2c7200c325497ba845f3bc118b4a43bab
- **AMZN** · Amazon (AMZN) Is A Proven Capital Allocator. But Can it Pass Its $220 Billion Test?
  - Yahoo · 2026-10-18 10:38 (ET) · https://finnhub.io/api/news?id=6d5512142e8f774ce7ec04d0a2c6b5309839367273e6287db8788cd1370ab948
- **AMZN** · 2 Retail Stocks to Buy Before the Holiday Shopping Season
  - Yahoo · 2026-10-18 06:39 (ET) · https://finnhub.io/api/news?id=1e2270f61245e1a5dee919fd217d62d610790904193d657283a334cb8bfcd1c8

