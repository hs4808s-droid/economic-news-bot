# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-17 · 미국 기준일(ET): 2026-10-16 · 생성시각(KST): 2026-10-17 06:30
# 출처: Yahoo Finance chart API · FRED(키 없는 CSV) · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.
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
| S&P500 선물 (ES) | `ES=F` | 7,703 | -1.13% | 7,791 | 2026-10-16 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 29,391.25 | -2.50% | 30,143.75 | 2026-10-16 16:59 |
| 다우 선물 (YM) | `YM=F` | 52,200 | -0.44% | 52,430 | 2026-10-16 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,737 | -1.61% | 2,781.8 | 2026-10-16 16:59 |

## 금리

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 미 10년물 금리 (Yahoo) | `^TNX` | 5.098 | +0.9bp | -14.6bp | +15.1bp | +93.5bp | 5.089 | 2026-10-16 14:59 |
| 미 30년물 금리 (Yahoo) | `^TYX` | 5.436 | +0.7bp | -16.4bp | +14.0bp | +59.6bp | 5.429 | 2026-10-16 14:59 |
| 미 2년물 금리 (FRED) | `FRED:DGS2` | 4.77 | -5.0bp | +0.0bp | +10.0bp | +130.0bp | 4.82 | 2026-10-15 (FRED) |
| 미 10년물 금리 (FRED) | `FRED:DGS10` | 5.1 | -9.0bp | -18.0bp | +10.0bp | +92.0bp | 5.19 | 2026-10-15 (FRED) |

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
| USD/KRW | `KRW=X` | 1,334.2 | -0.38% | 1,339.35 | 2026-10-16 17:00 |
| WTI | `CL=F` | 99.04 | +1.09% | 97.97 | 2026-10-16 16:59 |
| Brent | `BZ=F` | 109.69 | +3.56% | 105.92 | 2026-10-16 16:59 |
| 금 | `GC=F` | 4,186.7 | +0.40% | 4,170.1 | 2026-10-16 16:59 |
| 구리 | `HG=F` | 6.56 | +0.78% | 6.51 | 2026-10-16 16:59 |
| 비트코인 | `BTC-USD` | 81,618.82 | -0.64% | 82,141.46 | 2026-10-16 17:30 |
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
| S&P500 지수옵션 (SPX) | 1.464 | 1.485 | 2,931,069 | 4,290,262 | 30,360 |
| 나스닥100 ETF 옵션 (QQQ) | 1.054 | 1.444 | 6,151,042 | 6,485,309 | 10,954 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **CNBC** · Why did CoreWeave stock get crushed this week? Look to this corner of the debt market for clues
  - 2026-10-16 16:33 (ET) · https://www.cnbc.com/investingclub/2026/10/16/coreweave-credit-default-swaps.html
- **Reuters** · US solicits exchange of up to 17 million barrels of oil from strategic reserve - Reuters
  - 2026-10-16 16:25 (ET) · https://news.google.com/rss/articles/CBMitwFBVV95cUxQeFNXdnRkamV3Q2plZzU5UHl3LUlPa2hxTVY1VTA5dXU2UXUxWG5DekxOY0ZrWlNobFBDNTRQR2xrTHRZbEJMZUd1dzRQSUd0ZmQ1TDRtTE9YcmRoRVEzUkhrQjhUX01DVk8zdU5saFJEc1NDUWFXcFhsbmFZRlQ0b1FGdm9nTnFGSDAwWUxVMDVJeHZXalROYmNNdlVJLWxxaEloOWtLWUsxOWlzbTFmSWhHMHVaRGM?oc=5
- **Reuters** · Israeli settlers attack Palestinians during West Bank olive harvest - Reuters
  - 2026-10-16 16:13 (ET) · https://news.google.com/rss/articles/CBMisgFBVV95cUxPczd6aXNWNkdjZTNxV0V1MXhjQm5YTUtZT2JEUXY4dm81UFNlMVprd01ZdDI0VDI2ZEducHJha09yTkRIaWZMLVpmanQ0dVRBWm56cVBxLWFCOEZkekdCU0ZISkhWeEFxTWRDaGtmR3NPRjc1MVkyQnVhdjZRSzZxWm9OODE2RmxSY19CclZ1WThuWTZrOG15SUtmSlZJd0tfZkwtcmVsQlltc0VNZnMtMWdB?oc=5
- **Reuters** · EXCLUSIVE: Trump move to restart direct US flights with Lebanon hits roadblock - Reuters
  - 2026-10-16 15:37 (ET) · https://news.google.com/rss/articles/CBMiugFBVV95cUxPNjlHdlpLN0M4ZWJ5WmRvaUkyX2p0V0RNcnBqMmFaWVhqRzVUY2l6YlJkb2xpWXNXWXBZUlRXNzUyRHVhOXl2Wlh2bHROTWdQc1BYVkdjTVR3aFNaazVxOXR1REMtdW9HM0g3R3I0SW42T05qV3pOcDA0R2d3eC0xLWlxVS1MOFRiWHhyeFNzR0ZCWVl3dVplLU9wWmNNS3JhSGRBNjBTZjduSVp5TnlDd1pQN3ljajFBMHc?oc=5
- **CNBC** · Wall Street's fear gauge is ripping. Traders see it going even higher
  - 2026-10-16 15:28 (ET) · https://www.cnbc.com/2026/10/16/wall-streets-fear-gauge-is-ripping-traders-see-it-going-even-higher.html
- **Reuters** · In Yemen's besieged Taiz, families take shelter as Houthis close in - Reuters
  - 2026-10-16 14:51 (ET) · https://news.google.com/rss/articles/CBMirwFBVV95cUxPOHpQQlcxQ3FCakZ6YUIzOU83eUZHcFluRjU0TDRTb0RRdU9JM0xPQUZRSDUyUm9ZcjlpWFRvR1l3bmlxemxqV0ZsTmxEVk14RV9GTkxNc1pCNUUwcmRKdFJmU2dmbHBHaEQ5WHVDRGVDVXBnb2xQYnF1eUMybVJ2U2FLcGM1MXc0MHlyTW51RnNJSVJZbzA1U05nLUJLcS0tcFVoRVN0OXpOTlR2RTJr?oc=5
- **CNBC** · We're downgrading this retail stock after a big comeback. Plus, AI names slide again
  - 2026-10-16 14:46 (ET) · https://www.cnbc.com/investingclub/2026/10/16/were-downgrading-this-retail-stock-after-a-big-comeback-plus-ai-names-slide-again.html
- **CNBC** · NBA tightens betting rules, develops AI to flag suspicious wagers
  - 2026-10-16 13:50 (ET) · https://www.cnbc.com/2026/10/16/nba-tightens-betting-rules-develops-ai-to-flag-suspicious-wagers.html
- **CNBC** · Here's who Netflix just brought in to run content — and what it means for the streamer
  - 2026-10-16 13:02 (ET) · https://www.cnbc.com/2026/10/16/netflix-peter-rice-chief-content-officer.html
- **CNBC** · Schwab to create 'tax-aware' strategy that's been attracting billions from wealthy investors
  - 2026-10-16 12:21 (ET) · https://www.cnbc.com/2026/10/16/tax-strategies-capital-gains-wealthy-investors-schwab.html
- **CNBC** · What we want to see when Capital One and Meta report earnings next week
  - 2026-10-16 12:06 (ET) · https://www.cnbc.com/investingclub/2026/10/16/what-we-want-to-see-when-capital-one-and-meta-report-earnings-next-week-.html
- **CNBC** · Kimberly-Clark is having its best week in four years. Here's what is propelling shares higher
  - 2026-10-16 11:12 (ET) · https://www.cnbc.com/investingclub/2026/10/16/kimberly-clark-stock-q3-kenvue-deal-cramer.html
- **Reuters** · Italy names senior Israelis, Katz in probe over Gaza flotilla activists - Reuters
  - 2026-10-16 10:21 (ET) · https://news.google.com/rss/articles/CBMivgFBVV95cUxOTjVCUjhWQ05fM0dEYS1oR29yb3RhREZxYkUyX2hTeS1xQlVHSjk3SWZSZHVNb2Zla0lsTmhKLXNsYXBQNlBHTkdiQ1AzYW5rdWp0SEtiZWNUZk5lMDlKallXUEZKT0xROWpJS3JzaFRTaGV0SmdwQmw1VVluWlYyRjFjT1FKWWJldWo5RUNNQlN3YWd3c3daOURld0NjNEczVlU5cUhtc2NPNUJzcVFwVWVqdzdXSlZmNTViWmNR?oc=5
- **Reuters** · Norwegian teen jailed for 20 years for UK murder plot after being recruited online - Reuters
  - 2026-10-16 10:14 (ET) · https://news.google.com/rss/articles/CBMiygFBVV95cUxQNmZOcW5JOVBKWUFDdmZYUWpCbUJndTRTUHlkOVBUOUtIQUF3MzFBQm5yQkJCX3lFRVpydU5tOGdfaFFhSWt4alFxNWZSeDl3dDQzZGxleDRpT0xEQUZqYU5KRTR6THFBWGxlOHBoZ3FrV0RYUnZjbVV4YU9CN1JsaXFuMUZRSWk0cllaYWp4dzJHaTBLU3BtQTVnNlJYOGlTeEdmQzlELVFoeXFEX2hnVUVBR1RmVGJGUXc2bnNXR2ZlT1p5Ri1Oc3l3?oc=5
- **Reuters** · Italian airports controller fixes network failure that caused flight delays - Reuters
  - 2026-10-16 10:02 (ET) · https://news.google.com/rss/articles/CBMirwFBVV95cUxQM2ZBSmFBTmI3c3pYWTF2Z1NvTF9zVUZodUdvNTh2MGxlUWxCUGtQN2pBYnlhLTNnNzhWTGc3S1BYQWVnX2paSTZ5Y0Vwd3FzaGVVckZfeU1PR1RqSm9hZUNQU0ZuSUhrYTAwRjZlMndCM3hNeV9Qb0FCRHhUMWNrR1lrRXRkYUJRWUc1YzFaa1NiaENwNHliY3JxSGJ0QzR2clBqSGhhODNGYmZKYUVn?oc=5

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Warren Buffett's Berkshire Compounded at 19.7% a Year Between 1965 and 2025, Nearly Double the S&P 500's 10.5% Annual Return. Can Investors Still Apply That Playbook Today?
  - Yahoo · 2026-10-16 15:43 (ET) · https://finnhub.io/api/news?id=5d0ce1c95e471bd1fffad26403c4cf9a5a7818132a63ae3186971e3988af22f6
- **NVDA** · CoreWeave, Nebius, and Neoclouds Sink as Market Fear Index Closes in on ‘Extreme Fear’
  - Yahoo · 2026-10-16 15:37 (ET) · https://finnhub.io/api/news?id=3e1dd7d5aa52dad50d8ae42da26c552ed208b0e542829709be3fcb1896f6a8ef
- **NVDA** · Danaher (DHR) Teams Up To Bring AI Into Scientific Research Workflows
  - Yahoo · 2026-10-16 15:15 (ET) · https://finnhub.io/api/news?id=6466d6491b083c5061bd3f30374e0548e88146a43ab68b01188d444967ffcb03
- **AVGO** · Not Nvidia. Not TSMC. This Equipment Maker Is the Real Bottleneck in AI Chip Production.
  - Yahoo · 2026-10-16 15:15 (ET) · https://finnhub.io/api/news?id=7979460cfc3853b228cfe1ea57200761ae9f166876b5352460e5b22d8f6f39f2
- **AVGO** · Companies Are Saying No to Tokenized Stocks—and Testing Wall Street’s Crypto Push
  - Yahoo · 2026-10-16 14:35 (ET) · https://finnhub.io/api/news?id=5f5653665d8d4b534ae7288f882c121a1992e1674596b30cf8ee4eaa14117f79
- **AVGO** · Broadcom Falls 4% as CEO Hock Tan’s Capital Warning Hangs Over AI Chips; Marvell Drops 4%
  - Yahoo · 2026-10-16 14:02 (ET) · https://finnhub.io/api/news?id=f226da1fb9242f2f25b332efff142284396aa7b074fb80a3a4ef5c0f932de0c8

### 금융

- **JPM** · Why the Diesel Crisis Lifting Inflation Is Here to Stay
  - Yahoo · 2026-10-16 13:48 (ET) · https://finnhub.io/api/news?id=4c03f29685af5e112230fd86445bc9efa731a328e7ce6a3790190d8efad65ade
- **JPM** · AI Has Driven Bond Yields Higher, Says JPMorgan's Priya Misra — Sees Bonds As Hedge Against AI Trade
  - Yahoo · 2026-10-16 13:43 (ET) · https://finnhub.io/api/news?id=18d9c9353151f7f5f64af8c0dd29edbe65c8fdf65e07aeb49c5e046628de2257
- **JPM** · JPMorgan Chase: The Place To Be When Storm Clouds Gather
  - SeekingAlpha · 2026-10-16 13:03 (ET) · https://finnhub.io/api/news?id=5a2fcc4b8bdd43908760a75606d67a5ef82421d9eee30ea20b02754f6e6264dd

### 에너지

- **XOM** · ExxonMobil’s Refining Profits Are Set to Jump $4.5 Billion. Here’s What XOM Investors Need to Know.
  - Yahoo · 2026-10-16 15:05 (ET) · https://finnhub.io/api/news?id=f2c2e353c2e925d060464adaa6ab04bcbfbf446bb72000d65aaf0b55fe0b40d5
- **XOM** · XOM Stock Climbs On $4.5B Refining Lift Estimate; Goldman Sees Q3 EPS Exceeding Wall Street Expectations
  - Yahoo · 2026-10-16 14:06 (ET) · https://finnhub.io/api/news?id=bc825332b740a2f1306285a9898425ab7d23dc26452f62f8b38692fdabb33cc9
- **XOM** · Sector Update: Energy Stocks Rise Friday Afternoon
  - Yahoo · 2026-10-16 14:06 (ET) · https://finnhub.io/api/news?id=9d3a150c56a1d3e8016810293a0ac11d51f5b40d4d909e4eaca1cfc1b3d8668d

### 헬스케어

- **UNH** · Companies Are Saying No to Tokenized Stocks—and Testing Wall Street’s Crypto Push
  - Yahoo · 2026-10-16 14:35 (ET) · https://finnhub.io/api/news?id=5f5653665d8d4b534ae7288f882c121a1992e1674596b30cf8ee4eaa14117f79
- **UNH** · UnitedHealth's Q3 Margins Improve, But Membership Falls: Time to Buy?
  - Yahoo · 2026-10-16 12:01 (ET) · https://finnhub.io/api/news?id=76895a04b0eef87f6cf0fcf4c9fa4eabd96cc615a0a7b4ae4a0bef09650d22da
- **UNH** · Where Could UnitedHealth's Next Growth Come From?
  - Yahoo · 2026-10-16 10:54 (ET) · https://finnhub.io/api/news?id=1dff82e13e499eb42ddf9203860dcb18bf07186f7f1a435fbf60251da9abe8e0

### 소비재·유통

- **AMZN** · Equity Indexes Slide Intraday Amid Tech Sell-Off
  - Yahoo · 2026-10-16 13:57 (ET) · https://finnhub.io/api/news?id=29d4097f4b5eaad4bf8a0f925ae3ffff98d666fc8bfa96a7a4e407a5cf701c06
- **AMZN** · Amazon's $70 screenless fitness band improves physical and mental health
  - Yahoo · 2026-10-16 13:45 (ET) · https://finnhub.io/api/news?id=8eb3835791e6667a1f395ff16824ec1e4035548c2cc856928a516267c8ff4958
- **AMZN** · Sector Update: Tech Stocks Fall Friday Afternoon
  - Yahoo · 2026-10-16 13:42 (ET) · https://finnhub.io/api/news?id=081334083fa9581ad9c3e3843e1d046f909af74b34f8b26e693d69ee3fb5c8ea

