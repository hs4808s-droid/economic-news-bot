# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-24 · 미국 기준일(ET): 2026-10-23 · 생성시각(KST): 2026-10-24 06:30
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
| S&P500 선물 (ES) | `ES=F` | 7,672.5 | -0.42% | 7,704.5 | 2026-10-23 17:00 |
| 나스닥100 선물 (NQ) | `NQ=F` | 29,175 | +0.11% | 29,142 | 2026-10-23 16:59 |
| 다우 선물 (YM) | `YM=F` | 52,451 | -1.16% | 53,068 | 2026-10-23 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,788.7 | -0.26% | 2,796.1 | 2026-10-23 16:59 |

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
| USD/KRW | `KRW=X` | 1,323.66 | -0.15% | 1,325.59 | 2026-10-23 17:29 |
| WTI | `CL=F` | 103.44 | +3.99% | 99.47 | 2026-10-23 16:59 |
| Brent | `BZ=F` | 111.66 | -1.33% | 113.17 | 2026-10-23 16:59 |
| 금 | `GC=F` | 4,010 | -1.24% | 4,060.4 | 2026-10-23 16:59 |
| 구리 | `HG=F` | 6.5 | +2.11% | 6.36 | 2026-10-23 16:59 |
| 비트코인 | `BTC-USD` | 81,273.74 | -0.05% | 81,311.89 | 2026-10-23 17:30 |
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
| S&P500 지수옵션 (SPX) | 1.238 | 1.476 | 2,095,869 | 2,594,453 | 29,380 |
| 나스닥100 ETF 옵션 (QQQ) | 1.133 | 1.428 | 3,347,982 | 3,794,670 | 10,540 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **Reuters** · Trump says US may do another military operation against Iran - Reuters
  - 2026-10-23 16:05 (ET) · https://news.google.com/rss/articles/CBMitAFBVV95cUxOZjhrQTB6UmEzUzQ0N1RPV1BiZXhoaGdyWmhCTVpTTWgydnE3aEd0WHJHXzlpR09JXzh0SVpGSHkzc0JJR2g4M21MbVM1dUljQzd4UWNrSnlDWkw2SlgzOHlITmpJNHpuTTAtMmdPMXdXR0JGQlF4LUtHMTUxSWdWeVRoZVhMRlJtY0NmNHp4enJ2NzVwdE5xUm1zdVRfZ0pYdE0wRGFpU0k0eGpMZTlpNEl2bmQ?oc=5
- **Reuters** · Iran has detailed plans to hit Gulf undersea cables if war resumes, officials say - Reuters
  - 2026-10-23 16:04 (ET) · https://news.google.com/rss/articles/CBMiywFBVV95cUxOc28yS2Z0aVExaE1CeEZtYURTUG5NMDBhZnVidVctdjJZak1tMk5oQy1aU0dlQzBJbEV2SWlUdUdxNC1YMngyZEhLM0l3ZmI5dEliUjRPNVdsSnV2QWV2TS1TNVhaN2RTYlpSaEFCMjFHRGs5Z29Cek10c1BfUEZROHpjd2NIRHFfNEhLUGdhbDBXQ2hfXzUtc0daeHZPRlpoTXo5TjlvTVZuWXgwVmtEbG5jemZUWDRvRDJvWVQxb3VKdzZucnBlUEhPZw?oc=5
- **Reuters** · Seven killed as gunmen open fire at church in Jordan, authorities say - Reuters
  - 2026-10-23 15:38 (ET) · https://news.google.com/rss/articles/CBMiygFBVV95cUxNd2lOTkU3cVRlN2NTOWxzMWZYZnZUSjBZeWV6VHprNk44Q0pWLXdaMjF6QU1iS1JjV2RLdkFkM2NyVUtTOXpDdHg3SThHN2tFZFozTGZIdlVaVzBqUFV2STZCMXcwbjMycDNTNWppUDdSTVZBaWxqTTR4dk5kWkFrTDM2TzVkYi1oNTNwTjluU2NmTmY5cHkxbEhhWGR4VUt5QTJub2hkalo1WExtNVc2MEoybC1YWkQxbnNoZ3l6QzB6c1lOdGJhZTdB?oc=5
- **Reuters** · POLL Bank of Canada to raise rates to 2.50% on October 28 and once again by end-March - Reuters
  - 2026-10-23 14:54 (ET) · https://news.google.com/rss/articles/CBMiswFBVV95cUxNcXBVcldURXc1c3hRcmpNWXdhcWRVR1hibkVqNF9YM1V4NzIzdmlDUzlGZHpjaVJWQlp3M1N2ckpRMzlSdlZZRTRJcVloUTNnR0l4UE1fSXlhTXpZWFlqVGdYWEljWG9DdWpXRGQyaUlvVkdyNUlhZjF0TS1iRWNLYTZjZjNZZXc0Zi1fUzdvWm0xYWk4VmNiaU9WdHhVUno5WTBxMGhkNWpkZWVJUXA4bVdtYw?oc=5
- **CNBC** · CrowdStrike CEO's alarming prediction — plus, the sell-off spreads beyond tech
  - 2026-10-23 14:49 (ET) · https://www.cnbc.com/investingclub/2026/10/23/crowdstrikes-alarming-prediction-plus-sell-off-spreads-beyond-tech.html
- **CNBC** · Investors are starting to find opportunities in the battered bond market
  - 2026-10-23 13:40 (ET) · https://www.cnbc.com/2026/10/23/investors-are-starting-to-find-opportunities-in-the-battered-bond-market.html
- **Reuters** · Building collapses in Kenyan capital, rescuers on the scene - Reuters
  - 2026-10-23 13:17 (ET) · https://news.google.com/rss/articles/CBMingFBVV95cUxOYVpLTzd4NkFaVmRUa3lENmlHdGxvZmJuWHN0TG1DeXVNbXhlSkVDc3RxeV91MkNLYjJtdUlQY1BlUXo0TlFuOXZNTGpFd1JoWVRFMERXTVlYZEpqb2Y5WTFqd1ptMVd0ZmVjM0hWLWxtWmMtQWpyd0dhYVpaTlJZbDVfS0VQY1hMTTdZWXdtUjdmc0tENjFUMUlWNHY3QQ?oc=5
- **Reuters** · EXCLUSIVE: Saudi missile plant expansion may produce more powerful missiles, study says - Reuters
  - 2026-10-23 13:08 (ET) · https://news.google.com/rss/articles/CBMiyAFBVV95cUxQUTNudHNub01PQk1mQ1pIc3I0d2N5TGJPTG5lSlkwSWZKc05VMHpaNGtRTmpmd1pDblNPYjZGbEw3d05QeThxdjNJWDhYX09KMDdPeTlOeWxhX0txVTVrVzRvdWwzMEFfN01jYUNoN1dEVkRQMjlrUENUNVcxMkNuZDlyTnVQMlBkNmhJRzRjRkRESDVJZmdWYzJFMUtzUzBMdFpXVWNoM0hzOTBaajZhRDJtQ0U5ZFlzMkdaZ3BZa2ZPN0RwUHR6cQ?oc=5
- **CNBC** · College campuses have (largely) gone silent. Can practicing small talk and phone-free spaces change that?
  - 2026-10-23 12:44 (ET) · https://www.cnbc.com/make-it/2026/10/23/college-students-socializing-less-campus-life.html
- **Reuters** · US fines Air France, KLM over flights in prohibited Iraqi airspace - Reuters
  - 2026-10-23 12:41 (ET) · https://news.google.com/rss/articles/CBMitwFBVV95cUxQRmlDdXhrR2VhUFlYLXFkR3JtSzlGYTZ2Sng0SUNucWQ3bmt3bGtyLUNoYnFOR3luc1FhdFFTTG5NdVAzdm1nay1iSE1RU3FKd0pmZ2JrYURHcV9XYWJwd3h1cjZxUURqRXl3RWxZUkplOU9vWU1lQUY2ai1zOUc1T010V2oxak1xSmJLR1ZNRk9Sd1NtRFFfNWFQR214UF9TN1R5UDFNOWl4aF93T0kwRi1nbTFwUU0?oc=5
- **CNBC** · What we want to see when this data center stock reports earnings next week
  - 2026-10-23 12:15 (ET) · https://www.cnbc.com/investingclub/2026/10/23/what-we-want-to-see-when-this-data-center-stock-reports-earnings-next-week.html
- **Reuters** · Turkey says renewed attack on Iran would expand conflict, diplomacy only way - Reuters
  - 2026-10-23 12:09 (ET) · https://news.google.com/rss/articles/CBMixgFBVV95cUxNMXkzbk1uOGZSVDB3cUp6M2VmZjlpOHBBVnVkOHlRNUhvQmxmTG9pcWhSckhyaHg0c21DTUdTMGw4bkZIbk9YYWZvOV9EQ1lZM1g1YVpqUXJuVWlwVkh4SkFmRFRES3dNUnIyTmRPOFFoSXZKcXlRUmQwUGlZWndITG1nYnBYRU5POU5XTWp4aHF0aUxxdms5endGVGpNb0hhNGQ4MzNldWhLZkJUNEFzdzBaUG9jNHREWUpvOWd2dC05ellnRUE?oc=5
- **Reuters** · Trump weighs quick end to Iran war against letting conflict ‘wither’ - Reuters
  - 2026-10-23 11:53 (ET) · https://news.google.com/rss/articles/CBMiqAFBVV95cUxQeGt4QW93RlZCRmRnTV9pMzVTeG55Ty1EbG1wcGU5M0VONm9wM3lEX0lvOEpVcW05OWNSWjJoOTJUSDF5cU1DSFhmZmp2OWdOc1ZPNURIRFF0M3ZzVGxteTRDd2ROZGplLUdWcjJSdUdNUkFoSzYwdDN0dy1yMmttWEdyWGVKeVNmRGE1ODRrcWMzRW9lQTVmMjdsT052QmVFN0Z2cmlRWWM?oc=5
- **Reuters** · Carney dismisses US accusations of Canadian election interference - Reuters
  - 2026-10-23 11:49 (ET) · https://news.google.com/rss/articles/CBMiswFBVV95cUxOY1R2aTl5dkhkWnQ0LXBfNUN4aktLbmNJNlFJZHJYRTI5bVZLUWZfSHpxOWR5RlVOYnRmQ1RWS0RhUTl1NjRsREdzWWJzSzIxNW1TVnBmSU5tMDAzejB6VFp3YkcyOU9ZSnNPTEFkQzV2aWxIODZmcURZRjFDNDl0Tlk2SVY4cEtjZVZkc29OMXNUU3Jta0pvc3RJdjJoLTNNV2hlazZVZktIdk44RE95TlF4Yw?oc=5
- **CNBC** · We're exiting our position in this chipmaker and right-sizing another winner
  - 2026-10-23 11:48 (ET) · https://www.cnbc.com/investingclub/2026/10/23/were-exiting-our-position-in-this-chipmaker-and-right-sizing-another-winner.html

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Not Starlink. Not Starship. Not Grok. $561 Million of SpaceX's $4.4 Billion Profit Came From an Unexpected Source.
  - Yahoo · 2026-10-23 15:50 (ET) · https://finnhub.io/api/news?id=f2e3f3803eeaa4ca085cac58baaec60c6c72077b9a94eb9667a3efee5a90354a
- **NVDA** · CoreWeave Heads for Third Weekly Loss, Weighing on Stocks and Bitcoin Over AI Financing Fears
  - Yahoo · 2026-10-23 15:44 (ET) · https://finnhub.io/api/news?id=67963642d8c1bee44ed63ed9acf1189c1d97ea4414cb066b73262b8dad05da72
- **NVDA** · Why Comfort Systems Plunged Today
  - Yahoo · 2026-10-23 15:39 (ET) · https://finnhub.io/api/news?id=3972a3fed9cc96a1baeb1ca80cf58dac748712896fdfbc49a2afc1a18bfd3e0c
- **AVGO** · Taiwan Semiconductor (TSMC) Posted Record Profit and the Stock Still Fell. Here's What the Market Is Worried About.
  - Yahoo · 2026-10-23 13:35 (ET) · https://finnhub.io/api/news?id=bbc49cb5517d4801b8399f740d13de056ad70ebea77ddefb967c8866f3281ab6
- **AVGO** · Marvell Technology Faces a Multi-Front War Against Taiwan’s Custom Silicon Ecosystem
  - Yahoo · 2026-10-23 12:45 (ET) · https://finnhub.io/api/news?id=72bda33fa34a1a399917ea1cd84f4e7e0e44c6793edc57c665f6cf3cfe8b03b9
- **AVGO** · 3 Magnificent AI Chip Stocks That Could Help Set You Up for Life
  - Yahoo · 2026-10-23 12:35 (ET) · https://finnhub.io/api/news?id=9277118bcf4c0e7ed3fc38e27c469b17bc40133f333bfe598d8a21d5de4972c7

### 금융

- **JPM** · XRP News: Ripple Joined DTCC’s Tokenization Push This Week. Can It Pull XRP Out of Its October Slide?
  - Yahoo · 2026-10-23 12:33 (ET) · https://finnhub.io/api/news?id=2faca97527639578977855331c94a62baeeb7e832fbc95baf74abf8b98bba311
- **JPM** · Week’s Best: JPMorgan Chase Teams Overseeing $18 Billion Go Indie
  - Yahoo · 2026-10-23 11:41 (ET) · https://finnhub.io/api/news?id=f1cf447c71e1ca24ea7351a84f8e23fa21301cb715707acbe631f0ad9f4bf8fe
- **JPM** · American Express Plans to Cut 5% of Global Jobs. The Stock Is Falling on Earnings.
  - Yahoo · 2026-10-23 10:55 (ET) · https://finnhub.io/api/news?id=59f55abd254ac4a81e8767dfa50337e5ba9acbb64274c7ed96a4d2b99fef53f1

### 에너지

- **XOM** · Chevron vs. ExxonMobil: Which Stock Has the Edge at 52-Week Highs?
  - Yahoo · 2026-10-23 09:43 (ET) · https://finnhub.io/api/news?id=c02c90981f62e96f0a1932197aa22153e851a3328ac4923b07b2923ad01a2993
- **XOM** · Exxon Mobil Holdings (XOM) Reports Next Week: Wall Street Expects Earnings Growth
  - Yahoo · 2026-10-23 09:00 (ET) · https://finnhub.io/api/news?id=cc2b234bf5c69582f0ecb167d9ace04cf2c7adc0748e2b2df4a51ade1dbce5a1
- **XOM** · Can Baker Hughes Keep Its Winning Streak Alive in Q3 Earnings?
  - Yahoo · 2026-10-23 08:39 (ET) · https://finnhub.io/api/news?id=174ac86d77bfea030f8e79d81044cb086883801115b9a58fe18c55400f6e5cd2

### 헬스케어

- **UNH** · UnitedHealth Soars 11% in a Week After a Beat-and-Raise Quarter: “Discipline and Execution”
  - Yahoo · 2026-10-23 13:53 (ET) · https://finnhub.io/api/news?id=71fcce5a578d4cfc37f3f7ebd082656aa130478a51cb39a9c542cfcc890173bc
- **UNH** · Has Buying Cigna Stock At A High Paid Off?
  - Yahoo · 2026-10-23 06:35 (ET) · https://finnhub.io/api/news?id=a938323164f5b7f85952a00268f188351101d38dadbe0b65064ade9a6f3bdfc1
- **UNH** · What Will Decide UnitedHealth Group Stock Over The Next Six Months?
  - Yahoo · 2026-10-23 04:24 (ET) · https://finnhub.io/api/news?id=ce4705ab6d4a3f3daa74f4a329b34cbba09af3bba6240cca7ba9703740a89e22

### 소비재·유통

- **AMZN** · Post-it Notes maker 3M eyes AI gold rush in major Amazon deal
  - Yahoo · 2026-10-23 15:37 (ET) · https://finnhub.io/api/news?id=bda1f3e7e7e0d3eedc776f170bf5c181bc393017908c4d1feab41a24a755ce28
- **AMZN** · Amazon Survived a 50% Crash. Here’s What a $1,000 Investment Became
  - Yahoo · 2026-10-23 14:45 (ET) · https://finnhub.io/api/news?id=e753bff91a6049a6b0d5781611603af2c84d3bef66a84fa86105692297390015
- **AMZN** · Amazon CEO Andy Jassy Says AI Inference Is Still 10 Times Too Expensive, Claims Amazon Chips Offer Answer
  - Yahoo · 2026-10-23 14:28 (ET) · https://finnhub.io/api/news?id=9cc2c365f4e89e57ee28f3769117b36329832578322e91e7cdf59bedfd3013e4

