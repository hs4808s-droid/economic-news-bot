# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-18 · 미국 기준일(ET): 2026-10-16 · 생성시각(KST): 2026-10-18 06:30
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
| USD/KRW | `KRW=X` | 1,329.6 | -0.85% | 1,340.95 | 2026-10-16 23:30 |
| WTI | `CL=F` | 99.02 | +1.07% | 97.97 | 2026-10-16 16:59 |
| Brent | `BZ=F` | 109.86 | +3.72% | 105.92 | 2026-10-16 16:59 |
| 금 | `GC=F` | 4,181.1 | +0.26% | 4,170.1 | 2026-10-16 16:59 |
| 구리 | `HG=F` | 6.57 | +0.95% | 6.51 | 2026-10-16 16:59 |
| 비트코인 | `BTC-USD` | 81,131.4 | -0.45% | 81,500.8 | 2026-10-17 17:30 |
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

- **Reuters** · Explosion at Iraqi paramilitary alliance base kills one member, sources say - Reuters
  - 2026-10-17 12:35 (ET) · https://news.google.com/rss/articles/CBMiwwFBVV95cUxOMFdrc1I4NnJ2Z0NQeUM2c25pYzF4ekRXcFVHRHlYVWVVYXhhV0hDXzhVUWtUc2JCRnZmU0lZRkJlRkZudWNzUzJINWpDWWdFcG13SG5YVHJnMk9tcEE2Z3BtdHJ1VHdJcXA4eGNQYXVfcE1VX293QjhYQ0YtaVJUOU1kYjJoR2hPeUJJNlNDUzVfVnlxVUhINGJEV2UzTllWRWVrRmpuNG5ZVGY2SFFvcFpySlJsNUEtYmF6LVNEcEpnck0?oc=5
- **Reuters** · Iran's Guards say two tankers hit mines in Strait of Hormuz - Reuters
  - 2026-10-17 09:36 (ET) · https://news.google.com/rss/articles/CBMiqgFBVV95cUxNZWFxZjNZNnY5cVR3VDhKUnNnV1JOcG1vOVB5dEZGdWRybEtqdE9YRWgwY0ZVSXZ0bHYzTWRpX2duSkxpTENtY0s0WW5jMzFUZlZIME16d0FpUXluV2ZGbFJ3alNZaDh0VVVSVFhOMWVIbEZTNVgyTVdwaXNLNXRrMjE4SjZvQXZtblNUNVVHSjFIUmlIaU41TGRHYmIzOUxoa25BODFKaG1FZw?oc=5
- **CNBC** · 'Everyone laughed' when he started a pumpkin farm—now it brings in $2 million a year
  - 2026-10-17 09:00 (ET) · https://www.cnbc.com/make-it/2026/10/17/great-pumpkin-farm-new-york-2-million-revenue.html
- **Reuters** · Zelenskiy criticizes Trump's waiver of sanctions on Russia as 'wrong' - Reuters
  - 2026-10-16 21:17 (ET) · https://news.google.com/rss/articles/CBMixwFBVV95cUxQUWRsWXNvbUVMb01QdTFTbEhpSGhZLVZYVXZramJkQjg2RXUzbXRaZjZlcnY1QTNoeU1zQzhhOEhwOFZVSkRySFFZNWI3RjZtUHJLaDhybEhWVzFBTF9uVlZjWlNSQk5aX25iZ0EySjRQYjR5aVRiM1VERjVFWmpTOTR0Y1ZhNUtaTHpTaWdZZVRPUmppTUJtYl9IZlhGQnM3WkVSNmRreVBjaDF5anFfSHhqN1ZUc2p3cjRoU0pyUzRkZjlBM05B?oc=5
- **Reuters** · Trump mocks popularity of the name Mohammad, common among Muslims - Reuters
  - 2026-10-16 19:52 (ET) · https://news.google.com/rss/articles/CBMipAFBVV95cUxQQ2c4Mjd3MjA4UFF3cXBJTVZKNkFCOXdERDN0YjY3NHNydFFzR1hXZ2V6dWljeGJYaUNNR3dEV1VXVHdXU3FhaTRtc21MSF8yZmRUd1lma0wzWU03S1pZR3E5NllSZVctYlJpSTJrLVMyekNHY0F0QkRBVEVLcVM3bnVTbzhLcDcya1d1ZzVsR0MwQ0psblVBenZnYl9IRjV4ZGl6Qg?oc=5
- **Reuters** · Missiles hit Aden airport as Saudi-led coalition intercepts missile headed for Yanbu - Reuters
  - 2026-10-16 17:51 (ET) · https://news.google.com/rss/articles/CBMiywFBVV95cUxPelJ6OUp1VFpwTmJ0Qm85TzRUS2ppU0swVFMydlJuTDZiS1Q1V2R6M1N4bmpfeTZ0aWNqd29XbGdDMm9IVllmLTZUazAxQWFzX3lsVlJBbHI4TVRfQVFrZlk5MkNqVzVCMU5XYkFwM3Fyb0pkbDk0bGo5N1dwQWJMMEo5aEhIeXpaS1J5TkRLVFZTem93Rl9rM2trUHZlaDQwSzVIQTB4UG1xelRQSU5wZ2I4X1N1V0VPUElsWHBIYVZvckhpYk9RZVhZaw?oc=5
- **Reuters** · US solicits exchange of up to 17 million barrels of oil from strategic reserve - Reuters
  - 2026-10-16 17:36 (ET) · https://news.google.com/rss/articles/CBMitwFBVV95cUxQeFNXdnRkamV3Q2plZzU5UHl3LUlPa2hxTVY1VTA5dXU2UXUxWG5DekxOY0ZrWlNobFBDNTRQR2xrTHRZbEJMZUd1dzRQSUd0ZmQ1TDRtTE9YcmRoRVEzUkhrQjhUX01DVk8zdU5saFJEc1NDUWFXcFhsbmFZRlQ0b1FGdm9nTnFGSDAwWUxVMDVJeHZXalROYmNNdlVJLWxxaEloOWtLWUsxOWlzbTFmSWhHMHVaRGM?oc=5
- **CNBC** · Why did CoreWeave stock get crushed this week? Look to this corner of the debt market for clues
  - 2026-10-16 16:33 (ET) · https://www.cnbc.com/investingclub/2026/10/16/coreweave-credit-default-swaps.html
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

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Is Micron's Incredible Run About to End?
  - Yahoo · 2026-10-17 15:27 (ET) · https://finnhub.io/api/news?id=3dc01020fc481fb70d96de3e8a1a115bf506442a29c3b53ffb679a11451eb418
- **NVDA** · As Chip Stocks Sell Off, This Is the Flight-to-Safety Play I Would Choose
  - Yahoo · 2026-10-17 15:05 (ET) · https://finnhub.io/api/news?id=1c0e03f0aaa4a27240f64a512f7edff6f642b257c3759b92317dc31c95b334e5
- **NVDA** · Oracle's Real Growth Story Is Hiding in Its $664 Billion Backlog
  - Yahoo · 2026-10-17 14:20 (ET) · https://finnhub.io/api/news?id=3bf160a07b0efddd7ca2c23af90823ea07e2c4e7790c02d2ebcc1feb29badd16
- **AVGO** · Chip Stocks Just Fell 8 Days in a Row, Their Longest Losing Streak Since 2008
  - Yahoo · 2026-10-17 12:15 (ET) · https://finnhub.io/api/news?id=b0308c55fd23bc832f262feec8d6517334c5036b1d4acba500cbd84b186e5b08
- **AVGO** · Here's What $10,000 Invested in Broadcom Will Be Worth by 2028
  - Yahoo · 2026-10-17 12:08 (ET) · https://finnhub.io/api/news?id=45a3448716324098d8e591a655907a4334752a37a76b822f4a93cfd1075a0b82
- **AVGO** · Nvidia’s CEO Says “All of This Is Going to Pass” After Tech Lost $1 Trillion in a Day
  - Yahoo · 2026-10-17 07:15 (ET) · https://finnhub.io/api/news?id=1bfea888cc709b0e748fdc8e86dfb642734641995b777747e1d4bb25e0edade8

### 금융

- **JPM** · MSCI Is Moving to Drop Strategy From Its Indexes. Could That Hit Bitcoin?
  - Yahoo · 2026-10-17 03:13 (ET) · https://finnhub.io/api/news?id=d7456ee981aed8a3b04a81bd3dc0971052929e9bcd47876a85ba5cbf305e9f11
- **JPM** · A kidney transplant milestone has Wall Street excited about Biogen
  - Yahoo · 2026-10-16 20:37 (ET) · https://finnhub.io/api/news?id=566b777de47cf4258a817a60d513bcb7ddc7645f2b14d60abe037a9814ff7172
- **JPM** · Goldman vs. JPMorgan: Both Raised Their Dividends. Which Bank Is the Better Buy?
  - Yahoo · 2026-10-16 19:00 (ET) · https://finnhub.io/api/news?id=89298c1915ae7dc7ffcf0b78240478d8164a8533fabc920e9cbcd97c1caea630

### 에너지

- **XOM** · ExxonMobil Is Up 49% in 2026 With Brent Near $110. Here’s What the Stock Could Be Worth When Oil Cools
  - Yahoo · 2026-10-17 10:14 (ET) · https://finnhub.io/api/news?id=b6cf70924ea2ce8e3062441cfa1ecd3ef85137e928a898bc57a2c5f41ea4f054
- **XOM** · Oil Topped $110 as Tech Stocks Lost $1 Trillion in a Day
  - Yahoo · 2026-10-17 08:45 (ET) · https://finnhub.io/api/news?id=2548d237b28b100b33c096d31bbbf2cbdafc39449b1f510fd8270b98d7052def
- **XOM** · Meta, Tesla Headline Earnings In Busy Week For Markets
  - SeekingAlpha · 2026-10-17 07:00 (ET) · https://finnhub.io/api/news?id=3dcbe5a8689c76a628f51ae4c5084970467aab6b7f0f374e353ded8fe09592d4

### 헬스케어

- **UNH** · UnitedHealth: 3 Key Takeaways for Long-Term Investors
  - Yahoo · 2026-10-17 15:07 (ET) · https://finnhub.io/api/news?id=8ee16e15ed2fc0b2932a806b0049bc00765746f314a92e62051a3b6e02c1a9d0
- **UNH** · 3 US Dividend Stocks Worth Watching As Treasury Yields Climb
  - Yahoo · 2026-10-16 20:14 (ET) · https://finnhub.io/api/news?id=55289d523a3833a386828de25328617e55dad3323026dffd1400574588ee602c
- **UNH** · Review & Preview: AI Bloodbath
  - Yahoo · 2026-10-16 19:55 (ET) · https://finnhub.io/api/news?id=6e360dbe8240c530a1b3dea8c6f947726d680634b72fe4083419c677cf26113e

### 소비재·유통

- **AMZN** · Discount grocery chain closing all stores as bargain grocers struggle
  - Yahoo · 2026-10-17 13:56 (ET) · https://finnhub.io/api/news?id=c92b0ec586b198d340fba90990d47fcae50d8995f1f9da9129b96e5b8b147a62
- **AMZN** · Level Up Your Life In 2026 | Shaan Puri
  - Yahoo · 2026-10-17 13:31 (ET) · https://finnhub.io/api/news?id=3a61d239e11e7d14344bc867f216691d1879c37b9804870835f1272570407bec
- **AMZN** · Twenty Hours a Week at an Amazon Warehouse for Health Insurance at 60? Here Is the Math a Retired Paralegal Will Run
  - Yahoo · 2026-10-17 13:22 (ET) · https://finnhub.io/api/news?id=3d1f74d7ccf641e5a3f0aba92111c3e3f91685f7431a8066e41d96d90670ff8a

