# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-29 · 미국 기준일(ET): 2026-10-28 · 생성시각(KST): 2026-10-29 06:30
# 출처: Yahoo Finance chart API · FRED(키 없는 CSV) · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.
> **금리 기준 통일:** 2년물·10년물·10Y-2Y 는 FRED 일별 값(같은 기준일)만 본문에 쓴다. Yahoo ^TNX·^TYX 는 당일 참고용이라 FRED 값과 섞어 인용하지 않는다.
> 금리·스프레드의 등락은 bp(1bp=0.01%p) 단위다. FRED 값은 영업일 기준 하루 늦게 확정될 수 있다(기준 열 참고).

## 미국 주요 지수

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| S&P500 | `^GSPC` | 7,743.98 | +0.28% | -0.17% | +0.95% | +13.13% | 7,722.6 | 2026-10-28 17:18 |
| 나스닥종합 | `^IXIC` | 26,549.85 | +0.27% | -0.57% | -0.92% | +14.23% | 26,477.81 | 2026-10-28 17:15 |
| 다우 | `^DJI` | 52,475.1 | +0.19% | -0.72% | +2.19% | +9.18% | 52,377.57 | 2026-10-28 17:18 |
| 러셀2000 | `^RUT` | 2,830.51 | +0.41% | +1.78% | +0.80% | +14.05% | 2,818.87 | 2026-10-28 16:30 |
| SOX (필라델피아 반도체) | `^SOX` | 11,684 | +1.75% | +1.55% | -7.48% | +64.96% | 11,482.5 | 2026-10-28 17:15 |

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,760.75 | +0.03% | 7,758.25 | 2026-10-28 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 29,756.25 | -0.19% | 29,812 | 2026-10-28 16:59 |
| 다우 선물 (YM) | `YM=F` | 52,771 | +0.37% | 52,579 | 2026-10-28 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,849.5 | +0.74% | 2,828.5 | 2026-10-28 16:59 |

## 금리

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 미 2년물 금리 (FRED·기준) | `FRED:DGS2` | 4.7 | +2.0bp | -9.0bp | -11.0bp | +123.0bp | 4.68 | 2026-10-27 (FRED) |
| 미 10년물 금리 (FRED·기준) | `FRED:DGS10` | 4.99 | -1.0bp | -13.0bp | -18.0bp | +81.0bp | 5 | 2026-10-27 (FRED) |
| 미 10년물 금리 (Yahoo 당일·참고) | `^TNX` | 5.045 | +5.2bp | -10.1bp | -21.0bp | +88.2bp | 4.993 | 2026-10-28 14:59 |
| 미 30년물 금리 (Yahoo 당일·참고) | `^TYX` | 5.361 | +5.6bp | -7.8bp | -23.3bp | +52.1bp | 5.305 | 2026-10-28 14:59 |

**10Y-2Y 스프레드 (FRED DGS10−DGS2, 2026-10-27): 0.29%p** (전일 대비 -3.0bp)

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 16.91 | -3.48% | 17.52 | 2026-10-28 16:15 |
| VIX9D (9일) | `^VIX9D` | 15.6 | -6.31% | 16.65 | 2026-10-28 16:15 |
| VIX3M (3개월) | `^VIX3M` | 19.22 | -1.79% | 19.57 | 2026-10-28 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 96.61 | -2.86% | 99.45 | 2026-10-28 16:15 |
| SKEW (테일리스크) | `^SKEW` | 148.74 | -0.32% | 149.22 | 2026-10-28 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 달러지수 (DXY) | `DX-Y.NYB` | 102.13 | -0.19% | 102.32 | 2026-10-28 17:20 |
| USD/KRW | `KRW=X` | 1,342.88 | +1.37% | 1,324.77 | 2026-10-28 17:30 |
| WTI | `CL=F` | 101.94 | +2.04% | 99.9 | 2026-10-28 16:59 |
| Brent | `BZ=F` | 110.44 | -3.02% | 113.88 | 2026-10-28 16:59 |
| 금 | `GC=F` | 4,081.2 | +0.16% | 4,074.6 | 2026-10-28 16:59 |
| 구리 | `HG=F` | 6.68 | +0.91% | 6.62 | 2026-10-28 16:59 |
| 비트코인 | `BTC-USD` | 81,102.05 | +0.37% | 80,805.08 | 2026-10-28 17:30 |
| 하이일드 스프레드 (OAS, %p) | `FRED:BAMLH0A0HYM2` | 3.18 | -12.0bp | 3.3 | 2026-10-27 (FRED) |

## 섹터 ETF

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 기술 | `XLK` | 191 | +0.80% | +1.30% | -1.80% | +32.67% | 189.49 | 2026-10-28 16:00 |
| 금융 | `XLF` | 56.13 | +0.45% | +0.16% | +3.93% | +2.48% | 55.88 | 2026-10-28 16:00 |
| 에너지 | `XLE` | 68.45 | +0.35% | +0.43% | +11.23% | +53.10% | 68.21 | 2026-10-28 16:00 |
| 헬스케어 | `XLV` | 179.72 | +0.30% | +0.44% | +5.27% | +16.10% | 179.18 | 2026-10-28 16:00 |
| 경기소비재 | `XLY` | 115.33 | -0.10% | -0.17% | +5.66% | -3.42% | 115.45 | 2026-10-28 16:00 |
| 필수소비재 | `XLP` | 86.84 | -0.36% | -0.31% | +6.10% | +11.79% | 87.15 | 2026-10-28 16:00 |
| 산업재 | `XLI` | 168.49 | +0.34% | +0.11% | -0.38% | +8.62% | 167.92 | 2026-10-28 16:00 |
| 소재 | `XLB` | 51.86 | +0.15% | +1.05% | +5.62% | +14.36% | 51.78 | 2026-10-28 16:00 |
| 유틸리티 | `XLU` | 42.49 | -0.84% | +1.17% | +7.00% | -0.47% | 42.85 | 2026-10-28 16:00 |
| 부동산 | `XLRE` | 42.13 | -0.73% | +0.17% | +1.91% | +4.41% | 42.44 | 2026-10-28 16:00 |
| 커뮤니케이션 | `XLC` | 103.14 | -0.42% | -5.35% | -7.47% | -12.39% | 103.58 | 2026-10-28 16:00 |
| 반도체 | `SMH` | 567.67 | +1.74% | +1.97% | -6.46% | +57.63% | 557.98 | 2026-10-28 16:00 |
| 소프트웨어 | `IGV` | 111.91 | +0.12% | +2.84% | +6.36% | +5.89% | 111.78 | 2026-10-28 16:00 |
| 지역은행 | `KRE` | 72.11 | -0.65% | +2.11% | +3.27% | +11.26% | 72.58 | 2026-10-28 16:00 |
| 바이오 | `XBI` | 157.51 | +1.72% | +3.10% | +0.45% | +29.18% | 154.84 | 2026-10-28 16:00 |

### 섹터 ETF 보조 지표 (1M 상대강도 vs SPY · 이동평균 위치)

| ETF | 1M vs SPY | 50일선 | 200일선 |
|---|---|---|---|
| 기술 (`XLK`) | -2.86% | 위 | 위 |
| 금융 (`XLF`) | +2.86% | 위 | 위 |
| 에너지 (`XLE`) | +10.17% | 위 | 위 |
| 헬스케어 (`XLV`) | +4.20% | 위 | 위 |
| 경기소비재 (`XLY`) | +4.60% | 위 | 아래 |
| 필수소비재 (`XLP`) | +5.04% | 위 | 위 |
| 산업재 (`XLI`) | -1.44% | 아래 | 아래 |
| 소재 (`XLB`) | +4.56% | 위 | 위 |
| 유틸리티 (`XLU`) | +5.94% | 위 | 아래 |
| 부동산 (`XLRE`) | +0.85% | 아래 | 아래 |
| 커뮤니케이션 (`XLC`) | -8.53% | 아래 | 아래 |
| 반도체 (`SMH`) | -7.53% | 아래 | 위 |
| 소프트웨어 (`IGV`) | +5.30% | 위 | 위 |
| 지역은행 (`KRE`) | +2.20% | 위 | 위 |
| 바이오 (`XBI`) | -0.61% | 위 | 위 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.137 | 콘탱고 |
| VIX / VIX9D | 1.084 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.143 | 1.457 | 1,862,735 | 2,128,621 | 28,948 |
| 나스닥100 ETF 옵션 (QQQ) | 1.105 | 1.425 | 2,342,657 | 2,589,104 | 10,092 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **Reuters** · Phillips 66 posts record quarterly profit on refining strength - Reuters
  - 2026-10-28 15:35 (ET) · https://news.google.com/rss/articles/CBMiugFBVV95cUxNcFlWNWowWHgxSWhPRVdoRGpud1VHdVdJUGVSMkhVQ0F2RTJZb09lVHNPVjhwdWl6VGU4NVJjUjdNR2pERHV1ci1ickdBVzdIbmlBbVdLWHlRQW85TjMwQzVrcXFRYmc5TG52Skl1YzUtMHg0THVoWVp0bUxpSFZZc01PeTdJM3pmaDZXaWM1Wm1jNEx1RmFtOWdFdTRVRk1FVVQ5bGZteS1fdEkxclFaM1BoZGJDZVQxVmc?oc=5
- **CNBC** · Fed chairman talks tough on inflation — plus, what's behind Micron's big rally
  - 2026-10-28 15:17 (ET) · https://www.cnbc.com/investingclub/2026/10/28/fed-chairman-talks-tough-on-inflation-plus-whats-behind-microns-big-rally.html
- **CNBC** · Bond investor Jeff Gundlach talks to CNBC about Fed's rate pause, Warsh reducing vote-setting meetings
  - 2026-10-28 15:05 (ET) · https://www.cnbc.com/2026/10/28/bond-investor-jeff-gundlach-talks-feds-rate-pause-with-cnbc.html
- **CNBC** · We're adding a new, high-profile AI play to our Bullpen stocks to watch list
  - 2026-10-28 14:33 (ET) · https://www.cnbc.com/investingclub/2026/10/28/were-adding-a-new-high-profile-ai-stock-to-our-bullpen.html
- **Reuters** · Cruise ship residents left stranded in Cambodia after fuel prices soar - Reuters
  - 2026-10-28 14:28 (ET) · https://news.google.com/rss/articles/CBMivwFBVV95cUxPb3J0MEVjUDYzWV9pcnBYVTBRcFd3SHZZVVF5d29naldtQjRmRGhlOGZkemtiUEdCWU0zUXFNR3FvLS05Mjc2SFRHSXU5SlZpSnRTenZOcFYxV3lyVFBXRmlKZHNxX0lOMXZkRUJHYXNHZGFxMVgzN3kySVRJU2ctb19hYUZYRElpQ1JYY2hmTkhyeFFJVy1GWVZZc08tUERFb3RhR0wwdGM3YnNxWTMzalJISUdJRTRiN3YtczZrRQ?oc=5
- **Reuters** · Israel's election gives survivor Netanyahu a path to keep power - Reuters
  - 2026-10-28 13:55 (ET) · https://news.google.com/rss/articles/CBMisAFBVV95cUxNaUowdTlPaUFzb0tCdUQ3UzdYalJsS2ZEYWNvMUVtUzdKams0b051VWNIcXNPdG5wYlFzaWZIZVJfcVFTb192M3ozWk1kcW8wY1NNd1FSMzAzQ2FGTm9Mb0tfU21BenhMSXg5bFYxcXZqRlkzdHdESlZYVFlnLW82eUNZeER2SFU5ZXNzdExzLWxBYmtRTDRiMVFQQk1BYjB5dUdGQUEwb0pWYlA3VWluaA?oc=5
- **CNBC** · GE Vernova shares slip despite a beat-and-raise. What the sellers are getting wrong
  - 2026-10-28 13:50 (ET) · https://www.cnbc.com/investingclub/2026/10/28/ge-vernova-shares-slip-despite-a-beat-and-raise-what-the-sellers-are-getting-wrong.html
- **Reuters** · Explainer: What's at stake for Trump in Israel's deadlocked election? - Reuters
  - 2026-10-28 13:23 (ET) · https://news.google.com/rss/articles/CBMioAFBVV95cUxPUlBfbXV3OGlSdDZTUTVyRzdDLTdBYVJRdUtIcUtfd0lOa3VlX0l4YnRnb1JycWZPMWdzUHUtS2l5bDZHVjAyRVV2NkkyLU1qaHBsaFhtc19CbERWUkRtY1J4MHQ0UE5RZmpObV90Q2hBT0xEVWFmZ3Fkems2aEJDaWxXWnUxNzRuWWg3S3hta2owR01wYXduMWQ1ZmhwZFY5?oc=5
- **Reuters** · Caretaker role could limit Netanyahu but not rule out war with Iran - Reuters
  - 2026-10-28 13:22 (ET) · https://news.google.com/rss/articles/CBMiuAFBVV95cUxPU1JMOG03aUh5UHZjRGhLalZmOVhWc0F4YjFJY3hnN0pQcUlFdHlJN0xKZF9PWmNOT1JtN1czaGV6d3JqWUNzdEs2cWtQWnc1eU4xclJBT0haR3R2dmx3TEhSRWo2X3VIY1U1UjBpY29mZ0hnUkdqRjlZUGJFMGtsREpUajdFM1dHM09hSzVEM1JreDBubzVuMUQ3aDJDbHJ5QndDaHNFazNkcFFwSlpQTVMzN1hPR3di?oc=5
- **Reuters** · Houthis strike Yemen's Aden airport after evacuation warning - Reuters
  - 2026-10-28 12:51 (ET) · https://news.google.com/rss/articles/CBMiqwFBVV95cUxQQWktallhRGk5Y3p6WmxxWktmYm5sVm5fUlRlWmE3S0t4ZE05QzNxRGFFanQ3c3pTSHpjZ1IzcDY2RUlSSlhaTjFENVExUzJ2Q0UxOGxieGlWZDVadnVsd3N0M0dBWjIxYUcwUGNfQlNVQW0wQjYyUFVubDgwY2JZV3BKa3JHRExXNW00T3lRWDVxLUJwRWVLay1HUjVVcU5wTU5xWlY5dGFxSFE?oc=5
- **Reuters** · Iran sees only unacceptable ideas in latest mediation to end war, official says - Reuters
  - 2026-10-28 12:02 (ET) · https://news.google.com/rss/articles/CBMivAFBVV95cUxQMTAtQ19McEJXRVg0bmN2S1JaMm9lX2VsbUpzSjZnZi1md09fZnBoREF1U2lKT25ybDRzR0lxcC13XzcxRU1UTFFFUXRzem9TVjdNMHA4cjVPel9Rdk02UHk4M1BDUXFZcGRyR0FqcnlhUDNtTFczdy1Nd0VNNktvM3V0bUEzNC1qdXNLQngwOE9HVGtydEFIa1hqdm5sWjRHVHNNaFVteUZSbnVwa2U0MWxvd2RleGJpaXIxeg?oc=5
- **CNBC** · Jim Cramer sees buying opportunities in these 2 beaten-down stocks
  - 2026-10-28 11:56 (ET) · https://www.cnbc.com/investingclub/2026/10/28/jim-cramer-sees-buying-opportunities-in-these-2-beaten-down-stocks.html
- **Reuters** · Iran's Revolutionary Court sentences director Panahi to jail term, travel ban - Reuters
  - 2026-10-28 10:18 (ET) · https://news.google.com/rss/articles/CBMiywFBVV95cUxNVzczN0VQaVNCellIWU1NczBXNzIyQTZIWjZLY1Z2aGFPNDN3amdLeEF5ZGxJU0MwTFBFeERGaEpnaVZnSVhwSzV3VnRyZXhqRG9UamEzUUdfd2E3TjUtZTNleFp0RHZYNDlyMEF0UXJpOHVGUXZ2WHVMZTdwbzEzVU96dVNEWWxGRm9mdHB3WkVNYXNzdGpCQm4zYXFrWDJfZlN2d1Fzak0wLVFKSFRlejZ0WWZKaVNjMmtBRjZHWGtZRjUzd0xyM1dZWQ?oc=5
- **CNBC** · Bearista cups are returning at Starbucks. Can the viral sensation boost holiday sales again?
  - 2026-10-28 10:04 (ET) · https://www.cnbc.com/investingclub/2026/10/28/bearista-cups-are-back-at-starbucks-can-they-boost-holiday-sales-again.html
- **CNBC** · America's largest budget airline reports 71% jump in airfare
  - 2026-10-28 09:50 (ET) · https://www.cnbc.com/2026/10/28/frontier-airlines-airfare-plane-tickets.html

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Vertiv Guides for 38% Growth, GE Vernova's Orders Jumped 96%. Which AI Power Stock Is the Better Buy After the Sell-off?
  - Yahoo · 2026-10-28 15:50 (ET) · https://finnhub.io/api/news?id=bcb3ba0e2712f369075122d6cf1d863a693f029ab21d49a1b7a9220a988d4267
- **NVDA** · Sector Update: Tech Stocks Rise Late Afternoon
  - Yahoo · 2026-10-28 15:47 (ET) · https://finnhub.io/api/news?id=ac7c84a2325c59de93643778c956920f1f868cc0132847665c03b6f5104fed03
- **NVDA** · Why Robinhood thinks we're at the beginning of a prediction market supercycle
  - Yahoo · 2026-10-28 15:46 (ET) · https://finnhub.io/api/news?id=877f89bbe839389c16091a2180692f211b404f1a0181104d7f704b2f025897f8
- **AVGO** · Chip Earnings Power Averages Higher as Nasdaq Volatility Cools Midweek
  - Yahoo · 2026-10-28 14:24 (ET) · https://finnhub.io/api/news?id=8cca93701c445fbd05ef06cb5b774bdb990789cddf3626317ce31c2df490756e
- **AVGO** · Lumentum Shares Jump 135% YTD: Can AI Momentum Sustain the Rally?
  - Yahoo · 2026-10-28 12:54 (ET) · https://finnhub.io/api/news?id=261ebe20bc2be22623851d3adeceff81d0dd5db5de296a372b1eb082d1a8e5f9
- **AVGO** · Wall Street May Be Underestimating This Magnificent Seven Stock
  - Yahoo · 2026-10-28 12:33 (ET) · https://finnhub.io/api/news?id=1f0c68bd14d3ab4e73d3b0495ad6191aa837400b0e70394c4e43b7053dc0c671

### 금융

- **JPM** · Why higher yields are making bonds attractive again
  - Yahoo · 2026-10-28 15:29 (ET) · https://finnhub.io/api/news?id=41c6a936d5faebec7673d02a7fc2821982a1797f1133c8b6662f85878fa371a5
- **JPM** · 3 Dow Jones stocks with questionable fundamentals
  - Yahoo · 2026-10-28 14:46 (ET) · https://finnhub.io/api/news?id=2fcac3bf71e54260f1e8c51197d25981281f2308a44ea5935d64cbcffeba66f5
- **JPM** · F5 Stock Is Having Its Worst Day in Over a Decade. Blame Its Costly AI Push.
  - Yahoo · 2026-10-28 13:03 (ET) · https://finnhub.io/api/news?id=47f2b734b38f4bfcebce4498e0bf1fdeeeb4b1d6b285357a34492d5cf146cba2

### 에너지

- **XOM** · The Oil Giants Are Raking in More Cash. Here’s What They’ll Do With It.
  - Yahoo · 2026-10-28 14:28 (ET) · https://finnhub.io/api/news?id=bef268419e00c6125c1806566d245f7b3ee656f5a72661f75c8cdb3ed14762c5
- **XOM** · Why Did Valero Stock Fall?
  - Yahoo · 2026-10-28 14:01 (ET) · https://finnhub.io/api/news?id=77aae55de5efe815f58c614f2661a36a7c3d1d9b62232f48dd30461c0fe8722f
- **XOM** · ExxonMobil (XOM) Stock Still Looks Undervalued On Its 231% Run
  - Yahoo · 2026-10-28 13:13 (ET) · https://finnhub.io/api/news?id=9d309d513cc2d99be999cd8bfaedd76efa6706b9f7067818c72d9031d1108a7d

### 헬스케어

- **UNH** · Fed on hold? Two discounted blue chips built for high rates
  - Yahoo · 2026-10-28 11:23 (ET) · https://finnhub.io/api/news?id=36c3492634dd2fbcb0014a4afaef6adfd7971718f5bb6d868a95c57a015b106b
- **UNH** · Molina Healthcare (MOH) vs. ELV and UNH: Can Margin Recovery and Acquisitions Unlock Long-Term Upside?
  - Yahoo · 2026-10-28 09:12 (ET) · https://finnhub.io/api/news?id=4f0e2bcd61edb26d05ca7a23be513168fde3865f65a7b69e6adec4d68387c9c8
- **UNH** · CVS Q3 Preview: Accelerating Growth, Near 3% Yield, Meaningful Upside Long-Term
  - SeekingAlpha · 2026-10-28 08:15 (ET) · https://finnhub.io/api/news?id=5927c2c997e335c10a9d27f2748c3451e6517ad922f72354b6ba5b9452de7d71

### 소비재·유통

- **AMZN** · Generac Holdings Inc. Q3 2026 Earnings Call Summary
  - Yahoo · 2026-10-28 14:20 (ET) · https://finnhub.io/api/news?id=794cbb064706152fc639f7deb2f98517313bea9e70c61a7abad1fcfab5e1ce97
- **AMZN** · What Generac (GNRC) Said on Its Q3 Earnings Call
  - Yahoo · 2026-10-28 14:04 (ET) · https://finnhub.io/api/news?id=76f00f125f6164b8fc9cbc5901fae1103e1f1fc38681468cfb1747da521b4fa5
- **AMZN** · Amazon Earnings Preview: Why Wall Street Is Bullish On Cloud Growth
  - Yahoo · 2026-10-28 13:50 (ET) · https://finnhub.io/api/news?id=8e22ca7f9cb84c98e4826a4d296909e88ea1b15ca750bfb46932d5452886380a

