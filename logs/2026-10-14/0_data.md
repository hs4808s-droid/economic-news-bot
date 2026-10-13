# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-14 · 미국 기준일(ET): 2026-10-13 · 생성시각(KST): 2026-10-14 06:30
# 출처: Yahoo Finance chart API · FRED(키 없는 CSV) · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.
> 금리·스프레드의 등락은 bp(1bp=0.01%p) 단위다. FRED 값은 영업일 기준 하루 늦게 확정될 수 있다(기준 열 참고).

## 미국 주요 지수

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| S&P500 | `^GSPC` | 7,805.45 | -0.02% | -0.17% | +2.43% | +14.02% | 7,807.24 | 2026-10-13 16:33 |
| 나스닥종합 | `^IXIC` | 27,204.38 | -0.15% | -1.43% | +3.89% | +17.05% | 27,245.9 | 2026-10-13 17:15 |
| 다우 | `^DJI` | 51,670.1 | -0.35% | +0.29% | -1.43% | +7.50% | 51,850.55 | 2026-10-13 16:41 |
| 러셀2000 | `^RUT` | 2,783.37 | -0.40% | -1.66% | -3.76% | +12.15% | 2,794.48 | 2026-10-13 16:30 |
| SOX (필라델피아 반도체) | `^SOX` | 12,208.8 | -0.23% | -7.63% | +9.68% | +72.36% | 12,236.79 | 2026-10-13 17:15 |

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,855.5 | -0.03% | 7,858 | 2026-10-13 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 30,782 | -0.38% | 30,898.25 | 2026-10-13 16:59 |
| 다우 선물 (YM) | `YM=F` | 51,922 | -0.36% | 52,110 | 2026-10-13 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,800.9 | -0.40% | 2,812.2 | 2026-10-13 16:59 |

## 금리

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 미 10년물 금리 (Yahoo) | `^TNX` | 5.217 | -2.3bp | -5.2bp | +25.6bp | +105.4bp | 5.24 | 2026-10-13 14:59 |
| 미 30년물 금리 (Yahoo) | `^TYX` | 5.563 | -3.5bp | -7.8bp | +23.4bp | +72.3bp | 5.598 | 2026-10-13 14:59 |
| 미 2년물 금리 (FRED) | `FRED:DGS2` | 4.8 | +5.0bp | -3.0bp | +24.0bp | +133.0bp | 4.75 | 2026-10-09 (FRED) |
| 미 10년물 금리 (FRED) | `FRED:DGS10` | 5.24 | +2.0bp | -4.0bp | +29.0bp | +106.0bp | 5.22 | 2026-10-09 (FRED) |

**10Y-2Y 스프레드 (FRED DGS10−DGS2, 2026-10-09): 0.44%p** (전일 대비 -3.0bp)

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 15.27 | +0.39% | 15.21 | 2026-10-13 16:15 |
| VIX9D (9일) | `^VIX9D` | 11.99 | +2.65% | 11.68 | 2026-10-13 16:15 |
| VIX3M (3개월) | `^VIX3M` | 17.96 | +0.17% | 17.93 | 2026-10-13 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 85.38 | -0.64% | 85.93 | 2026-10-13 16:15 |
| SKEW (테일리스크) | `^SKEW` | 154.74 | -0.21% | 155.06 | 2026-10-13 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 달러지수 (DXY) | `DX-Y.NYB` | 102.19 | -0.38% | 102.58 | 2026-10-13 17:20 |
| USD/KRW | `KRW=X` | 1,340.13 | -0.05% | 1,340.84 | 2026-10-13 17:24 |
| WTI | `CL=F` | 94.79 | +1.12% | 93.74 | 2026-10-13 16:59 |
| Brent | `BZ=F` | 106.36 | -0.27% | 106.65 | 2026-10-13 16:59 |
| 금 | `GC=F` | 4,184.2 | -0.15% | 4,190.6 | 2026-10-13 17:00 |
| 구리 | `HG=F` | 6.73 | +0.43% | 6.7 | 2026-10-13 16:59 |
| 비트코인 | `BTC-USD` | 83,276.42 | +1.85% | 81,762.56 | 2026-10-13 17:30 |
| 하이일드 스프레드 (OAS, %p) | `FRED:BAMLH0A0HYM2` | 3.11 | +0.0bp | 3.11 | 2026-10-12 (FRED) |

## 섹터 ETF

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 기술 | `XLK` | 196.28 | -0.04% | -2.83% | +6.51% | +36.33% | 196.36 | 2026-10-13 16:00 |
| 금융 | `XLF` | 54.82 | -0.42% | +1.50% | -3.88% | +0.09% | 55.05 | 2026-10-13 16:00 |
| 에너지 | `XLE` | 67.2 | +1.80% | +5.41% | +4.14% | +50.30% | 66.01 | 2026-10-13 16:00 |
| 헬스케어 | `XLV` | 169.66 | -1.35% | +1.54% | +1.14% | +9.60% | 171.99 | 2026-10-13 16:00 |
| 경기소비재 | `XLY` | 112.36 | +0.08% | +0.57% | -0.43% | -5.90% | 112.27 | 2026-10-13 16:00 |
| 필수소비재 | `XLP` | 84.19 | -0.26% | +2.92% | -0.27% | +8.38% | 84.41 | 2026-10-13 16:00 |
| 산업재 | `XLI` | 168.67 | -0.28% | -1.70% | -0.74% | +8.74% | 169.15 | 2026-10-13 16:00 |
| 소재 | `XLB` | 49.72 | +0.57% | -0.02% | -1.53% | +9.64% | 49.44 | 2026-10-13 16:00 |
| 유틸리티 | `XLU` | 41.87 | +0.58% | +1.73% | +0.12% | -1.92% | 41.63 | 2026-10-13 16:00 |
| 부동산 | `XLRE` | 41.83 | -0.21% | +1.78% | -2.99% | +3.67% | 41.92 | 2026-10-13 16:00 |
| 커뮤니케이션 | `XLC` | 112.28 | +0.74% | +0.56% | -2.42% | -4.62% | 111.45 | 2026-10-13 16:00 |
| 반도체 | `SMH` | 588.12 | -0.49% | -7.02% | +8.61% | +63.31% | 590.99 | 2026-10-13 16:00 |
| 소프트웨어 | `IGV` | 110.98 | -0.27% | -0.16% | +4.07% | +5.01% | 111.28 | 2026-10-13 16:00 |
| 지역은행 | `KRE` | 69.06 | -0.72% | -1.44% | -6.81% | +6.56% | 69.56 | 2026-10-13 16:00 |
| 바이오 | `XBI` | 146.8 | -3.04% | -2.72% | -6.85% | +20.40% | 151.4 | 2026-10-13 16:00 |

### 섹터 ETF 보조 지표 (1M 상대강도 vs SPY · 이동평균 위치)

| ETF | 1M vs SPY | 50일선 | 200일선 |
|---|---|---|---|
| 기술 (`XLK`) | +4.26% | 위 | 위 |
| 금융 (`XLF`) | -6.13% | 아래 | 위 |
| 에너지 (`XLE`) | +1.89% | 위 | 위 |
| 헬스케어 (`XLV`) | -1.11% | 위 | 위 |
| 경기소비재 (`XLY`) | -2.69% | 아래 | 아래 |
| 필수소비재 (`XLP`) | -2.52% | 위 | 위 |
| 산업재 (`XLI`) | -2.99% | 아래 | 아래 |
| 소재 (`XLB`) | -3.78% | 아래 | 아래 |
| 유틸리티 (`XLU`) | -2.13% | 아래 | 아래 |
| 부동산 (`XLRE`) | -5.24% | 아래 | 아래 |
| 커뮤니케이션 (`XLC`) | -4.68% | 위 | 아래 |
| 반도체 (`SMH`) | +6.36% | 위 | 위 |
| 소프트웨어 (`IGV`) | +1.82% | 위 | 위 |
| 지역은행 (`KRE`) | -9.07% | 아래 | 아래 |
| 바이오 (`XBI`) | -9.10% | 아래 | 위 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.176 | 콘탱고 |
| VIX / VIX9D | 1.274 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.238 | 1.454 | 2,008,447 | 2,485,583 | 29,668 |
| 나스닥100 ETF 옵션 (QQQ) | 1.021 | 1.488 | 4,091,467 | 4,179,251 | 11,108 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **CNBC** · United Airlines is making it harder to reach its top frequent flyer status in 2027
  - 2026-10-13 17:02 (ET) · https://www.cnbc.com/2026/10/13/united-flight-segments-earn-elite-status.html
- **CNBC** · Judge says Musk engaged in intimidation of ex-FEMA CFO Mary Comans, clears her name
  - 2026-10-13 16:28 (ET) · https://www.cnbc.com/2026/10/13/judge-says-elon-musk-engaged-intimidation-of-ex-fema-cfo-mary-comans.html
- **Reuters** · Loud booms heard near Saudi Aramco headquarters in Dhahran, sources say - Reuters
  - 2026-10-13 15:14 (ET) · https://news.google.com/rss/articles/CBMivgFBVV95cUxQWWJ1bWRqeFpzOUpDR0ZNRTB3cnlsY0gyMGxVcnY2U3VZX0Q1bnc4eFlZZldDem9uQ3dNUzBORU1rak0wWVpIcURXNEJJQ1ZMbXRpZUF1QTJZbU9Vd2gxN3A1YW5QWko0M1JnUXRlM1Y4T0JLdENPWUJUcjZsMHJDeGlDTGtpZ3R2cVowc01oOC1GRVVOUktNZTZCRWQtRUhOMDFyVURaNDZOOS10TURrcEpvQWdGYnR1WjJkRFdB?oc=5
- **CNBC** · Meta shares rise for a second straight day as new AI model family impresses
  - 2026-10-13 14:55 (ET) · https://www.cnbc.com/investingclub/2026/10/13/meta-shares-rise-for-a-second-straight-day-as-new-ai-model-family-impresses.html
- **Reuters** · Saudi Arabia strikes Yemen capital as Houthis vow to retaliate - Reuters
  - 2026-10-13 14:50 (ET) · https://news.google.com/rss/articles/CBMiygFBVV95cUxPUHZtMnk3dUVFWmVkT2FmZVRqNWNrUUc5YkNkWVJMOEhWMmo1dnc2S3FlUlExbjFscTdlY3NQcExPejdxUlF1clZ5S1BKQ1JLdjhzaFdXT2l1YVBmN2VVSkFOSlJNNmlTR2w5d082MDR2b3RkY1VrTTlwWFhuclBteVRaTmtMRUczY0VPaWxBeVV1RE9vUE9kRFZaUlZEX0NnOXZqVnNtNlJIcFU3cnE2VVFTNzhfNVZ0TzZiQWFtSUJCdXJXYU5rU0JB?oc=5
- **CNBC** · Airport attacks put aviation in crosshairs of geopolitical conflicts
  - 2026-10-13 14:33 (ET) · https://www.cnbc.com/2026/10/13/riyadh-airport-attacks-aviation.html
- **Reuters** · Iran and Russia are stepping up hybrid campaigns in Britain, UK spy chief says - Reuters
  - 2026-10-13 14:14 (ET) · https://news.google.com/rss/articles/CBMirwFBVV95cUxOel94VDNzeEx1LXhzdm9vX0xSSUhyQUswNTAwUWhsVklGcEtQRm1KYlpUWXhKOUo5cE1tdTJXQV85eVZic05iV3gyVXNIZTJwV2xCRmo0QkFtMDFXMWNWR3lhaS05dHN2UVNtREJodXZLMllfOTBYdUpHelFKS1JQbUVxUFU4NzhTTUswVVlvX21QcXByY0F4akJ1ZGNtSDZ0aExrZHBYVlR4aGlCYTJz?oc=5
- **Reuters** · EXCLUSIVE: Saudi Arabia plans hybrid format for marquee FII conference after attacks, sources say - Reuters
  - 2026-10-13 13:47 (ET) · https://news.google.com/rss/articles/CBMiywFBVV95cUxPUnMtSVRHNldwaFdHWWx4NlBQbHZLYjZvUVdHMWExSHFfVzNXLU9wQi1wblgwOE9jZlFaUjlzbDlxb2tFV085eUYwM2dyVkpkVHBVTjIzM2wtRlhUcjBmQ1I0YVNnUU53MEJTOGlWOE5SZ2xkdWRrVmlIZHNacjlfZWRJak51OWQ0OXFLWGlnWVpnd1haY3FRRXhfcGMtR3dlTVJTQ1FuOGxUaHZFY2NkcHVBMzFlcUV1WG5CTTVmM0F3dTlqam1qT2VvWQ?oc=5
- **Reuters** · Citi profit tops estimates on higher investment banking, services and wealth revenue - Reuters
  - 2026-10-13 13:05 (ET) · https://news.google.com/rss/articles/CBMixwFBVV95cUxOaEV6WWM3S2pfSzdheVNtbFZLdnBvTk1jQWl3Z0xGQ1R6RHByTUxVVl91U01wYTFUMWVQNGl5WmZzenJIRHhJMVczUWxGOGREVF9zV2wtX2w1a0tIM3RMZ2M1T3VBRFd1YmpPLUtqM2lmc3YzTVhKdW1QeGt0WkVLTjk4UXJMMlhQSVVnd1NnQm5PRklkZngwemJfRTdxa0JFU2syRkJfZ3hnbXoxcVlXcmhIeWg3ZjltTU41eUZCSkYxU3gxSjZF?oc=5
- **Reuters** · US blockade keeps Iranian crude exports at zero in October, report says - Reuters
  - 2026-10-13 12:53 (ET) · https://news.google.com/rss/articles/CBMitwFBVV95cUxQSmFzZDZiY3ExNTlsMjFjTDcxaHlMTHhtcWlyQzhoNzZGZk52bDVFUGQyZnlPTy1vVmNWdVRucFdqU0JBVi1JclRCaGFNVy1JMjFxQzhvcy11TllRWTdpV20zWDM3d1lXNTRTNWl4N2w1ZEJNZ2d2U3pBSkVKeklCNlRITmN1eG5CejQzdU56N3oyeXVidVd0TEVIQklXVWtNZlJ4Y3hCOTVrR1ZiQnNCaUc2cjlLcEE?oc=5
- **Reuters** · In Yemen's Taiz, shelling worsens and prices spiral - Reuters
  - 2026-10-13 12:40 (ET) · https://news.google.com/rss/articles/CBMinAFBVV95cUxNN2FlSHhCeHdBNFJVdTB4TndzdEgweWtZcktCbmVrOTRpOGNzRXVlLUplRUFqX0QzU1dCcjJQX3hHdVVFeHdHOWVjM0o1VG5FcXdwSGE2Y0pFRmpBb19lbml2T3FqY0x4VEs0NThJdFJRZVAteGlvRjhkRE1JUm0xdEZZaTE0akRfbjhQb1d4RHluWHRHeVdyZWg4MnY?oc=5
- **Reuters** · Trump says Houthis trying to drive up oil prices ahead of US midterm elections - Reuters
  - 2026-10-13 12:38 (ET) · https://news.google.com/rss/articles/CBMipgFBVV95cUxPUjJueXpwNnRLbk1Db0NkZzBZS0tqUGF4NHU3ZWYxcWRHdVU0WW9uYVZJeUlpUVR2amR3Q0dyd1ZwYTFwZjRkUXU2VWRmX2otWUh5dHBmTW1Tak1iczg5a3pzR21oZTk3S3lzN0NfWmZ4TWRFalFNLVBsdU5vVTFkSDQ4TnNGVDZOcnVTS2FWTzBTbW1pN0ZoamZrRG5fQlc2QXpZWjV3?oc=5
- **CNBC** · Jim Cramer bucks all the stock market negativity with 3 buy recommendations
  - 2026-10-13 12:07 (ET) · https://www.cnbc.com/investingclub/2026/10/13/jim-cramer-bucks-all-the-stock-market-negativity-with-3-buy-recommendations.html
- **CNBC** · We're adding to a consumer staples stock in advance of a big catalyst
  - 2026-10-13 11:40 (ET) · https://www.cnbc.com/investingclub/2026/10/13/were-adding-to-a-consumer-staples-stock-in-advance-of-a-big-catalyst.html
- **Reuters** · Wells Fargo beats profit estimates, but net interest income, revenue fall short - Reuters
  - 2026-10-13 11:39 (ET) · https://news.google.com/rss/articles/CBMisgFBVV95cUxPZ3h0SU11NWFMTHJPeWw2ZGlmZlJ5RzNzRm9FZWZ3MURpVmtwajFQV2RnRDkxeVJVXzZGcEduYzF1RFdtT0RKYkRub1pfazFCbUNiWHllejh6V3Y2TVZnU1gzNV9qSkExVGhoWk1WampqaHduYjVoNGRVQ2NBb3lueThEZExQaTlQb1J0SmpLdUg5akhSY1NXNFNjY1d5dmx3SEhscjd4MFFyTFZtR0FtNkRB?oc=5

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · History Says This 1 Simple Strategy Could Build Life-Changing Wealth, and It Requires Next to No Effort
  - Yahoo · 2026-10-13 15:34 (ET) · https://finnhub.io/api/news?id=79b3070a39c4fcf6fad96a55c4bde17ccfad50b34ce193718623d9bf356dcf70
- **NVDA** · Oklo Stock Hits a New 52-Week Low: Time to Buy?
  - Yahoo · 2026-10-13 15:30 (ET) · https://finnhub.io/api/news?id=554e9935994772e1c2f9f4ea5bad83ec609bcc2c24c3d636d61096c9293046b3
- **NVDA** · What Is Next For Micron Stock?
  - Yahoo · 2026-10-13 15:06 (ET) · https://finnhub.io/api/news?id=c7dd6f08d6d026874fc81826252e7aa9b277727048eb00a7affc82507f0fa670
- **AVGO** · Marvell Is Up 214% in 2026 While Broadcom Is Only Up 3%: Take Profits on MRVL Stock, or Hold On for the Ride?
  - Yahoo · 2026-10-13 15:00 (ET) · https://finnhub.io/api/news?id=af07cd734a7b14d9bed832d5fb9445710fad8ea2bc841e5998a4204959ada643
- **AVGO** · The Five Largest Holdings in the RANK ETF After Its Latest Rebalance
  - Yahoo · 2026-10-13 15:00 (ET) · https://finnhub.io/api/news?id=567de157dc5959bc72fbaf24453fcb5b90c56837a4b89a235c014dfebf7272d6
- **AVGO** · Seagate and Western Digital Shares Plummet, What You Need To Know
  - Yahoo · 2026-10-13 14:35 (ET) · https://finnhub.io/api/news?id=31083b2ceaa142ed7dd3a1b9d595819e8fb4fe156d0ed64f80f2bf654bead588

### 금융

- **JPM** · Explore the top gainers and losers within the dow jones index in today's session.
  - ChartMill · 2026-10-13 15:10 (ET) · https://finnhub.io/api/news?id=239f1ec0bd6003c75b83346777ebb77ec584c75f68f4c78fd3f43f5a7e2d2574
- **JPM** · JPMorgan CEO sends stern warning on the next credit cycle
  - Yahoo · 2026-10-13 14:03 (ET) · https://finnhub.io/api/news?id=c1af13427cbac5b975ea6f899e55ed21b0b1545e0e54c71498693165a70ffd19
- **JPM** · Update: Equities Edge Down Following Big Bank Earnings
  - Yahoo · 2026-10-13 13:56 (ET) · https://finnhub.io/api/news?id=45519fc4dadabb548df2fe9094656b24e44f2294ecaf2613f86b283b12dab6b7

### 에너지

- **XOM** · Is Occidental Petroleum Stock A Good Fit For Your Portfolio?
  - Yahoo · 2026-10-13 13:55 (ET) · https://finnhub.io/api/news?id=63dbe88f799811fe3138e19a7382d94116d112fc36effdfcb181b6470513c979
- **XOM** · How Has Chevron's Story Changed?
  - Yahoo · 2026-10-13 10:36 (ET) · https://finnhub.io/api/news?id=a49d8f8f4697280507b57619760ac326848943d464a2a762ecdfdd4cc07b922c
- **XOM** · Will Elevated Crude Prices Enhance ExxonMobil's Cash Flows?
  - Yahoo · 2026-10-13 10:02 (ET) · https://finnhub.io/api/news?id=e37c2727bb63e93b93ac2e181a9d0e7f67fed3d2ba303d81737ae6552181e6df

### 헬스케어

- **UNH** · Sector Update: Healthcare Stocks Fall Late Afternoon
  - Yahoo · 2026-10-13 15:47 (ET) · https://finnhub.io/api/news?id=006e35c542e5af0d0e245a224630268b9a4f84a5ff8cad6e9c0eb2da96c5d9de
- **UNH** · UnitedHealth Raises Full-Year Earnings Outlook Following Third-Quarter Beat
  - Yahoo · 2026-10-13 14:07 (ET) · https://finnhub.io/api/news?id=acb354035e6b56c4e8e87692e544bcae892c02ce0854a6d8214cbaf77a363089
- **UNH** · UnitedHealth (UNH) Stock Trades Up, Here Is Why
  - Yahoo · 2026-10-13 13:55 (ET) · https://finnhub.io/api/news?id=443344951df440101489b0e1ea36915604763f0fb4058f0e0af9fb5141700fb8

### 소비재·유통

- **AMZN** · Apple may have a way to dominate the smart home space
  - Yahoo · 2026-10-13 15:46 (ET) · https://finnhub.io/api/news?id=c0b714d07ac3ac243ef9849e9a95fc14d7ba5989951f0209a8ec4188790e057c
- **AMZN** · Is Snowflake Stock Riskier Than It Looks?
  - Yahoo · 2026-10-13 15:12 (ET) · https://finnhub.io/api/news?id=c8cbac5682ddf94c74e3bb1ed5204b3fba5b0e217fbc754b361211c319b8f7e5
- **AMZN** · Explore the top gainers and losers within the dow jones index in today's session.
  - ChartMill · 2026-10-13 15:10 (ET) · https://finnhub.io/api/news?id=239f1ec0bd6003c75b83346777ebb77ec584c75f68f4c78fd3f43f5a7e2d2574

