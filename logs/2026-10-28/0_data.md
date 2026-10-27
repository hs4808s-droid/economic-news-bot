# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-28 · 미국 기준일(ET): 2026-10-27 · 생성시각(KST): 2026-10-28 06:30
# 출처: Yahoo Finance chart API · FRED(키 없는 CSV) · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.
> **금리 기준 통일:** 2년물·10년물·10Y-2Y 는 FRED 일별 값(같은 기준일)만 본문에 쓴다. Yahoo ^TNX·^TYX 는 당일 참고용이라 FRED 값과 섞어 인용하지 않는다.
> 금리·스프레드의 등락은 bp(1bp=0.01%p) 단위다. FRED 값은 영업일 기준 하루 늦게 확정될 수 있다(기준 열 참고).

## 미국 주요 지수

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| S&P500 | `^GSPC` | 7,722.6 | +0.60% | +0.13% | +0.51% | +12.81% | 7,676.77 | 2026-10-27 16:48 |
| 나스닥종합 | `^IXIC` | 26,477.81 | +1.18% | +0.20% | -1.28% | +13.92% | 26,169.38 | 2026-10-27 17:15 |
| 다우 | `^DJI` | 52,377.57 | +0.03% | -0.23% | +1.74% | +8.98% | 52,361.58 | 2026-10-27 16:48 |
| 러셀2000 | `^RUT` | 2,818.87 | +1.16% | +1.64% | +0.03% | +13.58% | 2,786.42 | 2026-10-27 16:30 |
| SOX (필라델피아 반도체) | `^SOX` | 11,482.51 | +3.60% | +1.76% | -7.88% | +62.11% | 11,083.47 | 2026-10-27 17:15 |

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,756.75 | +0.55% | 7,714.5 | 2026-10-27 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 29,803 | +1.24% | 29,437.25 | 2026-10-27 16:59 |
| 다우 선물 (YM) | `YM=F` | 52,574 | +0.05% | 52,550 | 2026-10-27 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,827.8 | +1.08% | 2,797.5 | 2026-10-27 16:59 |

## 금리

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 미 2년물 금리 (FRED·기준) | `FRED:DGS2` | 4.68 | -1.0bp | -9.0bp | -19.0bp | +121.0bp | 4.69 | 2026-10-26 (FRED) |
| 미 10년물 금리 (FRED·기준) | `FRED:DGS10` | 5 | +0.0bp | -15.0bp | -18.0bp | +82.0bp | 5 | 2026-10-26 (FRED) |
| 미 10년물 금리 (Yahoo 당일·참고) | `^TNX` | 4.993 | +0.7bp | -12.4bp | -24.7bp | +83.0bp | 4.986 | 2026-10-27 14:59 |
| 미 30년물 금리 (Yahoo 당일·참고) | `^TYX` | 5.305 | +0.4bp | -12.0bp | -25.6bp | +46.5bp | 5.301 | 2026-10-27 14:59 |

**10Y-2Y 스프레드 (FRED DGS10−DGS2, 2026-10-26): 0.32%p** (전일 대비 +1.0bp)

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 17.52 | -4.73% | 18.39 | 2026-10-27 16:15 |
| VIX9D (9일) | `^VIX9D` | 16.65 | -7.09% | 17.92 | 2026-10-27 16:15 |
| VIX3M (3개월) | `^VIX3M` | 19.57 | -1.86% | 19.94 | 2026-10-27 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 99.45 | -1.95% | 101.43 | 2026-10-27 16:15 |
| SKEW (테일리스크) | `^SKEW` | 149.22 | -1.16% | 150.97 | 2026-10-27 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 달러지수 (DXY) | `DX-Y.NYB` | 102.35 | +0.39% | 101.96 | 2026-10-27 17:20 |
| USD/KRW | `KRW=X` | 1,326.81 | +0.38% | 1,321.76 | 2026-10-27 17:19 |
| WTI | `CL=F` | 100.2 | -1.53% | 101.76 | 2026-10-27 16:59 |
| Brent | `BZ=F` | 109.74 | -5.24% | 115.81 | 2026-10-27 16:59 |
| 금 | `GC=F` | 4,073.1 | +0.86% | 4,038.4 | 2026-10-27 16:59 |
| 구리 | `HG=F` | 6.66 | +2.35% | 6.51 | 2026-10-27 16:59 |
| 비트코인 | `BTC-USD` | 80,640 | +0.79% | 80,006.66 | 2026-10-27 17:30 |
| 하이일드 스프레드 (OAS, %p) | `FRED:BAMLH0A0HYM2` | 3.3 | -8.0bp | 3.38 | 2026-10-26 (FRED) |

## 섹터 ETF

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 기술 | `XLK` | 189.49 | +1.70% | +2.18% | -2.59% | +31.62% | 186.32 | 2026-10-27 16:00 |
| 금융 | `XLF` | 55.88 | -0.25% | +0.29% | +3.12% | +2.03% | 56.02 | 2026-10-27 16:00 |
| 에너지 | `XLE` | 68.21 | -2.05% | +0.35% | +9.84% | +52.56% | 69.64 | 2026-10-27 16:00 |
| 헬스케어 | `XLV` | 179.18 | -0.06% | -0.36% | +4.62% | +15.75% | 179.28 | 2026-10-27 16:00 |
| 경기소비재 | `XLY` | 115.45 | +1.04% | -0.04% | +5.92% | -3.32% | 114.26 | 2026-10-27 16:00 |
| 필수소비재 | `XLP` | 87.15 | -0.92% | -0.68% | +5.92% | +12.19% | 87.96 | 2026-10-27 16:00 |
| 산업재 | `XLI` | 167.92 | +0.57% | +0.67% | -0.51% | +8.25% | 166.96 | 2026-10-27 16:00 |
| 소재 | `XLB` | 51.78 | +0.78% | +1.07% | +4.67% | +14.18% | 51.38 | 2026-10-27 16:00 |
| 유틸리티 | `XLU` | 42.85 | +0.71% | +2.32% | +9.17% | +0.37% | 42.55 | 2026-10-27 16:00 |
| 부동산 | `XLRE` | 42.44 | -0.84% | +0.14% | +2.64% | +5.18% | 42.8 | 2026-10-27 16:00 |
| 커뮤니케이션 | `XLC` | 103.58 | -0.26% | -6.00% | -6.84% | -12.01% | 103.85 | 2026-10-27 16:00 |
| 반도체 | `SMH` | 557.98 | +3.02% | +2.13% | -7.00% | +54.94% | 541.62 | 2026-10-27 16:00 |
| 소프트웨어 | `IGV` | 111.78 | +0.35% | +4.54% | +6.02% | +5.76% | 111.39 | 2026-10-27 16:00 |
| 지역은행 | `KRE` | 72.58 | -0.21% | +2.78% | +2.88% | +11.99% | 72.73 | 2026-10-27 16:00 |
| 바이오 | `XBI` | 154.84 | +2.90% | +1.04% | -1.13% | +26.99% | 150.47 | 2026-10-27 16:00 |

### 섹터 ETF 보조 지표 (1M 상대강도 vs SPY · 이동평균 위치)

| ETF | 1M vs SPY | 50일선 | 200일선 |
|---|---|---|---|
| 기술 (`XLK`) | -3.12% | 아래 | 위 |
| 금융 (`XLF`) | +2.59% | 아래 | 위 |
| 에너지 (`XLE`) | +9.31% | 위 | 위 |
| 헬스케어 (`XLV`) | +4.10% | 위 | 위 |
| 경기소비재 (`XLY`) | +5.39% | 위 | 아래 |
| 필수소비재 (`XLP`) | +5.39% | 위 | 위 |
| 산업재 (`XLI`) | -1.04% | 아래 | 아래 |
| 소재 (`XLB`) | +4.14% | 위 | 위 |
| 유틸리티 (`XLU`) | +8.64% | 위 | 아래 |
| 부동산 (`XLRE`) | +2.11% | 아래 | 아래 |
| 커뮤니케이션 (`XLC`) | -7.36% | 아래 | 아래 |
| 반도체 (`SMH`) | -7.53% | 아래 | 위 |
| 소프트웨어 (`IGV`) | +5.49% | 위 | 위 |
| 지역은행 (`KRE`) | +2.35% | 위 | 위 |
| 바이오 (`XBI`) | -1.66% | 아래 | 위 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.117 | 콘탱고 |
| VIX / VIX9D | 1.052 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.161 | 1.445 | 2,411,775 | 2,799,384 | 29,192 |
| 나스닥100 ETF 옵션 (QQQ) | 1.030 | 1.405 | 3,789,623 | 3,904,674 | 10,334 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **CNBC** · Robinhood quarterly revenue rises 12% as event contracts, options offset crypto slump
  - 2026-10-27 16:20 (ET) · https://www.cnbc.com/2026/10/27/robinhood-hood-q3-2026-earnings.html
- **CNBC** · AI debt fears ease ahead of Oracle, Alphabet and Amazon updates. Here's what to watch.
  - 2026-10-27 15:57 (ET) · https://www.cnbc.com/2026/10/27/ai-debt-hyperscaler-earnings.html
- **Reuters** · Yemen's Houthis say they hit Saudi Ras Tanura oil refinery with missile - Reuters
  - 2026-10-27 15:17 (ET) · https://news.google.com/rss/articles/CBMiwgFBVV95cUxPMU9tRHdmbzQ2ZHlsQzBDVmpqUEhlTk9meXgzN1VMOWlUMnlKOU1ibFRMQ1VQNDNjTkloUG9lb054S2JXZ2YwMS1MMXM4b1pwczl2clNyTHM5RGZVdnd6bzJXTVl4bW4yZ0pGTEV2aEV4dlR2cDNkc0lvNjVMN2ZScklvRDE3S1VyS0FoaC02Z3BqTHJPeTJrekxhM0dONmN0VzdXTmE5QjNfM0pIZ1Q2SHMtSkZzbFNqSThaN2RybDFBdw?oc=5
- **Reuters** · Food and household brands warn of more price hikes as Iran war costs bite - Reuters
  - 2026-10-27 14:29 (ET) · https://news.google.com/rss/articles/CBMiwgFBVV95cUxOUXRiWWdvUGZ0dTBiY2t4aWlWZlNWSlVlYUV4VXR6c25vRFJ0QUJ2NEJ6WTJTSW93cWFhb2xDYURhY2gydkQyRHhvMEFJYkh0S1JjVTVOLWlTbEVOQW83UUZZam5TTnBtV1ZoS2NaV3REUXF6andpWUZfcXpwdzRMQjJmZkxkdUs0eDVFSF94TjN5Tl9INFZ1WVFiUm8wSzBvbHlEQVJJT25TMlBWRVZneE01NGl6ekNHVGhYb2ZqNTRHdw?oc=5
- **CNBC** · What's behind the AI trade comeback — plus, our take on Intel's latest deal
  - 2026-10-27 14:13 (ET) · https://www.cnbc.com/investingclub/2026/10/27/the-ai-trade-comeback-plus-our-take-on-latest-intel-deal.html
- **CNBC** · Anthropic's IPO could be 'speculative fiction' or a 'generational moment' — investors are split
  - 2026-10-27 13:26 (ET) · https://www.cnbc.com/2026/10/27/-anthropic-ipo-investors-growth-losses-s-1.html
- **Reuters** · AI investment boom powers US business spending on equipment in September - Reuters
  - 2026-10-27 12:59 (ET) · https://news.google.com/rss/articles/CBMipAFBVV95cUxPNlJmQ1NMeEVTRlJIWjMxUGJPOXNBMXRLR0VnVlBkVDQwUFlUNkFKOTRnaWFUc2U5YVhxYWF0UnBVWFVkMXd3c2Juclh5a0FnOHMzeUpaOE1NVWhfYWYtVUc2MHBzVXhESFc3RXRpcTM0R3I3V2tpcFVpSE5aTkNtaEh4LXZpRjlmMUdHcHMzWUFtdjNzY2hIbmt1WThYSUg4OGVlVA?oc=5
- **CNBC** · As holiday shopping approaches, seasonal hiring gives 'mixed signals,' experts say
  - 2026-10-27 12:40 (ET) · https://www.cnbc.com/make-it/2026/10/27/seasonal-hiring-2026-holiday-jobs.html
- **Reuters** · Rights' monitors raise concerns over senior UAE diplomat bid for next UN boss - Reuters
  - 2026-10-27 12:40 (ET) · https://news.google.com/rss/articles/CBMixAFBVV95cUxOVEo2NDgyNjdJcHpxNTlUcGpCRURGc2JWTjhjSUx0aHBYUEhCcVlTajg1QjRhczNUeVBRS0JURTlMYU9VMGtUVks5MnBCal8wOWI5TTA1eFA4SU8xZDBHanZ2eUZSTVMwbWVVQTRpS2VWNW5STjRVYjBsVHBKRGZEaG1nRERnS1ExTGxad1NfUllEc28tc2k2NnpiU0l6V0h5dF83WmswWUV5YWpaM1Z0UENqTlpFVFFRanI0Z21aaFZ5cGpD?oc=5
- **Reuters** · Two men charged in UK over RAF Fairford incident allegedly linked to Iran - Reuters
  - 2026-10-27 12:34 (ET) · https://news.google.com/rss/articles/CBMiuwFBVV95cUxOQTFPZl9fajZtLVJ5V3dXM00xVHAtT2p6VUF5X1loNWtHZ2hSZl9CY1ZtdW01SHgxalNGbXpRVTdkZ09LanNSdVBhZ2YtRzJabk1JdFdEU25pWVMyRU40UmhnZ1UwcXpmMG4yVGJzZ1Y5QWlZYVViWVpvMVJUdGlvU0tUYnRuZUhhRHFzNkpsLURLd0w0dXBocjktUXo0Y1IxOWNMOHdGT29kcFBra2NrT2UySTNNbHNXZGFF?oc=5
- **Reuters** · Edison, Pakistan gas buyers face QatarEnergy supply halt until year-end - Reuters
  - 2026-10-27 12:20 (ET) · https://news.google.com/rss/articles/CBMiwgFBVV95cUxNZWRlZmpfTjMzTk8wb2tLV1hzbFprenNTR2JMcDVlWmFUQ3hkemhVVzd3X0loUXlGeHRENDd0Nll3cTh2eUpOSVJNVU53MThUaC1HYjJwSkFpa1BreXRxdm0teFoyZGJpaXowcXgtUmE0OTdSYXdDVzhuV0hCSlZqUjdpMHRNUjJxbDAzNDBfbDRjZjFpZUU2djNfV3RPaENwb1M2TzNUV0xIRUZFTVMtSDVhWmpFQU1ZaG0zZzhEa29Udw?oc=5
- **Reuters** · Israel's shekel jumps to 5-week high amid record election turnout - Reuters
  - 2026-10-27 12:20 (ET) · https://news.google.com/rss/articles/CBMiswFBVV95cUxOVEF1eVg2dldmWWJjaXJHTkxTeWlrU080UldSdDNCazJpWnFMbDIwa2pmN0JhOTJfbFJKS0tqNWVwRDExUEtKZUJIb3kzNGJoM2h1UFFiMzIzcWprMm94eW9qMVVfSC1jX2V4N25xRzlydkQ4aklQaGtLdVhrNF9jX2tFVXh2SlE2cjd0bTZ0R3FXOFp1dFE4bWJROHpGNDMwdW5GX2FwcmQtV25FN0FOSi1ETQ?oc=5
- **CNBC** · Cramer says something is missing in Tuesday's market rally and he's not eager to jump in
  - 2026-10-27 12:13 (ET) · https://www.cnbc.com/investingclub/2026/10/27/cramer-says-something-is-missing-in-tuesdays-market-rally-and-hes-not-eager-to-jump-in.html
- **Reuters** · Netanyahu warns of Arab voter surge in Israel's election; Arab leaders call tactic racist - Reuters
  - 2026-10-27 11:57 (ET) · https://news.google.com/rss/articles/CBMixwFBVV95cUxQbkV3Umx6VUg4THl2S240YVdZcy1jOUNXQThnN1VpQnRMQWxmblRWS3NmYjYyMUNmNTVHRGtIZC1ZUUlHaUItaWVMUzJ1REcxODVmdXA3RkxtdTM3TTdzT21taFdrSll2eFhhMXZrZjQ1blQzSkxTZmpZVmZuYWhKbll2QndUY0RkdlFtR3dhQ0REV1hhMmRwc284RTRXYklZcTlrR1VIWTY5RGM3TUpmaloxMlFqa2VBX3JHN3QtVXlNV3ZyWW9Z?oc=5
- **CNBC** · American Airlines hikes annual fees on rewards cards for first time since 2018
  - 2026-10-27 11:39 (ET) · https://www.cnbc.com/2026/10/27/american-airlines-citi-aadvantage-card-fee.html

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · RTX Has a $340 Billion Backlog and Trades at 32 Times Earnings. Is It the Best Defense Stock to Buy Right Now?
  - Yahoo · 2026-10-27 15:42 (ET) · https://finnhub.io/api/news?id=d4283a5fd984184ad21127bef5d033f98b9e113c3a4e351a910ab901f0e64dff
- **NVDA** · S&P 500 Sell-Off: Is Now the Right Time to Buy the Dip?
  - Yahoo · 2026-10-27 15:33 (ET) · https://finnhub.io/api/news?id=d8a0d895973f588d52cafc367a35346f0fdb5c985c6b0702ac195bc06ab73205
- **NVDA** · Why Shares of Corning Are Tumbling Lower Today
  - Yahoo · 2026-10-27 15:17 (ET) · https://finnhub.io/api/news?id=c5f9b4b3a521e7ebe590b4a7e34b6200eb6866e01acbeaad62172584600e7f63
- **AVGO** · Sector Update: Tech Stocks Gain Late Afternoon
  - Yahoo · 2026-10-27 15:50 (ET) · https://finnhub.io/api/news?id=2830252f60e12bc56dd0699ae2c9b3fe6b26332dd8f1aa165cfb19c4de360a37
- **AVGO** · Update: Technology, Consumer Discretionary Push US Equity Indexes Higher
  - Yahoo · 2026-10-27 15:44 (ET) · https://finnhub.io/api/news?id=26a350f5b52175d3930f5bd1d5d8d9d313e9ff26abda028a4cf6e8852633e553
- **AVGO** · Intel, Oracle, IBM Join Objections to OKX-ICE Tokenized Stock Venue, Bringing Total to 26
  - Yahoo · 2026-10-27 14:46 (ET) · https://finnhub.io/api/news?id=c6a7556c6173bb894e29cb5d494ed7949e64d5905d0c3208797a77c208301a09

### 금융

- **JPM** · JPMorgan CEO Warns of 5 Risks Threatening US Stocks and Bonds
  - Yahoo · 2026-10-27 11:32 (ET) · https://finnhub.io/api/news?id=91d71343f7b83f7aec8df74398c7cc0dfdf1ec88e5d3528073422c84a9c50bec
- **JPM** · Can AI Adoption Sustain Morgan Stanley's Wealth Management Growth?
  - Yahoo · 2026-10-27 10:49 (ET) · https://finnhub.io/api/news?id=e028412f3b48bde6b6b6c68380e83229f9df6d055c97491eee600df0a8a44dfc
- **JPM** · AstraZeneca offers compelling risk-reward into 2027 pipeline readouts, says JPMorgan
  - Yahoo · 2026-10-27 10:30 (ET) · https://finnhub.io/api/news?id=d4918d7a43f583408d8f7c0c148bd726cd1d69e8bd8123cd2444984c3add64f4

### 에너지

- **XOM** · The Events That Matter Most For Chevron Stock
  - Yahoo · 2026-10-27 13:33 (ET) · https://finnhub.io/api/news?id=350fcf89cfd9bb4f7a4cf66584328a30916025a38dd9519193c64864a997f27d
- **XOM** · Is Texas Pacific Land Stock About To Rebound?
  - Yahoo · 2026-10-27 11:34 (ET) · https://finnhub.io/api/news?id=eb834c350f604736a7ca40b9ebdd09bbe0d400a257f18dcf6f0f7bc3c9f2f3e2
- **XOM** · ExxonMobil (XOM) Wins Dismissal Of Kazakhstan’s $12 Billion Kashagan Claim
  - Yahoo · 2026-10-27 11:16 (ET) · https://finnhub.io/api/news?id=79a7c16d2cd4cec9ad04c239da2048daf8cbd436577520e867ea36c3a66ae2d2

### 헬스케어

- **UNH** · Intel, Oracle, IBM Join Objections to OKX-ICE Tokenized Stock Venue, Bringing Total to 26
  - Yahoo · 2026-10-27 14:46 (ET) · https://finnhub.io/api/news?id=c6a7556c6173bb894e29cb5d494ed7949e64d5905d0c3208797a77c208301a09
- **UNH** · Beyond Claims Data: Codoxo and UnitedHealth Group to Present Innovative Strategies for Uncovering Healthcare Fraud at NHCAA 2026
  - Yahoo · 2026-10-27 10:00 (ET) · https://finnhub.io/api/news?id=ac6783c840ff19ef23e45077dd516fa9264e42f224c8a75d49a952f9ebc8c6e8
- **UNH** · Final Trades: Delta Air Lines, American Tower, UnitedHealth and Apple
  - CNBC · 2026-10-27 09:05 (ET) · https://finnhub.io/api/news?id=ace50282b8e5f7b2638412a8601faf6d0c6d9b029a85b82dec0a42583aa3ebb4

### 소비재·유통

- **AMZN** · Is Amazon.com (AMZN) Undervalued As Investors Eye Q3 2026 Earnings?
  - Yahoo · 2026-10-27 14:09 (ET) · https://finnhub.io/api/news?id=48b0a4e99f32c605741f5c5633b0b2055139a898afd6084b78efdcaa332f4127
- **AMZN** · Sorry, Trump. More Russian Oil Won’t Take Down Energy Prices. Here’s What Will.
  - Yahoo · 2026-10-27 14:09 (ET) · https://finnhub.io/api/news?id=9c73beb8e8cc9ebc1346dcd4aa9148f9ee93fd251fbde1c0cac108b6f7f24b0c
- **AMZN** · United Parcel Service, Inc. Q3 2026 Earnings Call Summary
  - Yahoo · 2026-10-27 13:58 (ET) · https://finnhub.io/api/news?id=492a734c1b16a6d3e0a178836ffe9a6087735423e84ed87368998bc114560951

