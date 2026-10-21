# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-22 · 미국 기준일(ET): 2026-10-21 · 생성시각(KST): 2026-10-22 06:30
# 출처: Yahoo Finance chart API · FRED(키 없는 CSV) · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.
> **금리 기준 통일:** 2년물·10년물·10Y-2Y 는 FRED 일별 값(같은 기준일)만 본문에 쓴다. Yahoo ^TNX·^TYX 는 당일 참고용이라 FRED 값과 섞어 인용하지 않는다.
> 금리·스프레드의 등락은 bp(1bp=0.01%p) 단위다. FRED 값은 영업일 기준 하루 늦게 확정될 수 있다(기준 열 참고).

## 미국 주요 지수

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| S&P500 | `^GSPC` | 7,757.17 | +0.58% | +0.50% | -0.10% | +13.32% | 7,712.57 | 2026-10-21 16:31 |
| 나스닥종합 | `^IXIC` | 26,702.86 | +1.05% | +0.04% | -1.99% | +14.89% | 26,424.82 | 2026-10-21 17:15 |
| 다우 | `^DJI` | 52,856.09 | +0.69% | +2.39% | +1.91% | +9.97% | 52,495.88 | 2026-10-21 16:36 |
| 러셀2000 | `^RUT` | 2,781.02 | +0.27% | +1.89% | -3.77% | +12.05% | 2,773.42 | 2026-10-21 16:30 |
| SOX (필라델피아 반도체) | `^SOX` | 11,505.56 | +1.97% | -1.53% | -9.33% | +62.44% | 11,283.81 | 2026-10-21 17:15 |

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,800.25 | +0.58% | 7,755.25 | 2026-10-21 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 30,023.75 | +1.17% | 29,675.25 | 2026-10-21 16:59 |
| 다우 선물 (YM) | `YM=F` | 53,106 | +0.73% | 52,719 | 2026-10-21 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,792.3 | +0.19% | 2,786.9 | 2026-10-21 16:59 |

## 금리

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 미 2년물 금리 (FRED·기준) | `FRED:DGS2` | N/A | N/A | N/A | N/A | N/A | N/A | 수집 실패 |
| 미 10년물 금리 (FRED·기준) | `FRED:DGS10` | N/A | N/A | N/A | N/A | N/A | N/A | 수집 실패 |
| 미 10년물 금리 (Yahoo 당일·참고) | `^TNX` | 5.146 | +2.9bp | -4.4bp | +17.8bp | +98.3bp | 5.117 | 2026-10-21 14:59 |
| 미 30년물 금리 (Yahoo 당일·참고) | `^TYX` | 5.439 | +1.4bp | -8.6bp | +13.6bp | +59.9bp | 5.425 | 2026-10-21 14:59 |

**10Y-2Y 스프레드: N/A** (FRED 수집 실패)

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 16.68 | -3.64% | 17.31 | 2026-10-21 16:15 |
| VIX9D (9일) | `^VIX9D` | 15.49 | -4.79% | 16.27 | 2026-10-21 16:15 |
| VIX3M (3개월) | `^VIX3M` | 18.72 | -1.42% | 18.99 | 2026-10-21 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 94.55 | -2.68% | 97.15 | 2026-10-21 16:15 |
| SKEW (테일리스크) | `^SKEW` | 150.36 | -6.26% | 160.4 | 2026-10-21 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 달러지수 (DXY) | `DX-Y.NYB` | 101.7 | -0.03% | 101.73 | 2026-10-21 17:20 |
| USD/KRW | `KRW=X` | 1,326.63 | -0.25% | 1,330 | 2026-10-21 17:30 |
| WTI | `CL=F` | 97.71 | -4.01% | 101.79 | 2026-10-21 16:59 |
| Brent | `BZ=F` | 109.73 | +0.86% | 108.79 | 2026-10-21 16:59 |
| 금 | `GC=F` | 4,159.5 | +0.41% | 4,142.6 | 2026-10-21 16:59 |
| 구리 | `HG=F` | 6.58 | +0.15% | 6.57 | 2026-10-21 16:59 |
| 비트코인 | `BTC-USD` | 84,721.95 | +2.15% | 82,941 | 2026-10-21 17:30 |
| 하이일드 스프레드 (OAS, %p) | `FRED:BAMLH0A0HYM2` | N/A | N/A | N/A | 수집 실패 |

## 섹터 ETF

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 기술 | `XLK` | 188.54 | +1.67% | -0.99% | -3.94% | +30.96% | 185.44 | 2026-10-21 16:00 |
| 금융 | `XLF` | 56.04 | +0.57% | +2.79% | +2.26% | +2.32% | 55.72 | 2026-10-21 16:00 |
| 에너지 | `XLE` | 68.16 | +0.28% | +0.78% | +10.33% | +52.45% | 67.97 | 2026-10-21 16:00 |
| 헬스케어 | `XLV` | 178.94 | -0.49% | +2.86% | +5.33% | +15.59% | 179.82 | 2026-10-21 16:00 |
| 경기소비재 | `XLY` | 115.53 | +0.03% | +3.61% | +2.85% | -3.25% | 115.5 | 2026-10-21 16:00 |
| 필수소비재 | `XLP` | 87.11 | -0.73% | +1.22% | +5.29% | +12.14% | 87.75 | 2026-10-21 16:00 |
| 산업재 | `XLI` | 168.31 | +0.91% | +0.76% | -1.15% | +8.50% | 166.8 | 2026-10-21 16:00 |
| 소재 | `XLB` | 51.32 | +0.18% | +3.32% | +1.56% | +13.16% | 51.23 | 2026-10-21 16:00 |
| 유틸리티 | `XLU` | 42 | +0.29% | +0.67% | +3.63% | -1.62% | 41.88 | 2026-10-21 16:00 |
| 부동산 | `XLRE` | 42.06 | -0.76% | +1.37% | -1.04% | +4.24% | 42.38 | 2026-10-21 16:00 |
| 커뮤니케이션 | `XLC` | 108.97 | -1.11% | -1.67% | -4.02% | -7.43% | 110.19 | 2026-10-21 16:00 |
| 반도체 | `SMH` | 556.7 | +1.89% | -1.42% | -8.36% | +54.58% | 546.36 | 2026-10-21 16:00 |
| 소프트웨어 | `IGV` | 108.82 | +1.77% | +1.09% | +1.94% | +2.96% | 106.93 | 2026-10-21 16:00 |
| 지역은행 | `KRE` | 70.62 | +0.00% | +3.03% | -0.80% | +8.96% | 70.62 | 2026-10-21 16:00 |
| 바이오 | `XBI` | 152.78 | -0.30% | +4.09% | -5.62% | +25.30% | 153.24 | 2026-10-21 16:00 |

### 섹터 ETF 보조 지표 (1M 상대강도 vs SPY · 이동평균 위치)

| ETF | 1M vs SPY | 50일선 | 200일선 |
|---|---|---|---|
| 기술 (`XLK`) | -3.90% | 아래 | 위 |
| 금융 (`XLF`) | +2.30% | 아래 | 위 |
| 에너지 (`XLE`) | +10.36% | 위 | 위 |
| 헬스케어 (`XLV`) | +5.36% | 위 | 위 |
| 경기소비재 (`XLY`) | +2.89% | 위 | 아래 |
| 필수소비재 (`XLP`) | +5.33% | 위 | 위 |
| 산업재 (`XLI`) | -1.11% | 아래 | 아래 |
| 소재 (`XLB`) | +1.60% | 위 | 위 |
| 유틸리티 (`XLU`) | +3.66% | 위 | 아래 |
| 부동산 (`XLRE`) | -1.00% | 아래 | 아래 |
| 커뮤니케이션 (`XLC`) | -3.98% | 아래 | 아래 |
| 반도체 (`SMH`) | -8.32% | 아래 | 위 |
| 소프트웨어 (`IGV`) | +1.98% | 위 | 위 |
| 지역은행 (`KRE`) | -0.76% | 아래 | 아래 |
| 바이오 (`XBI`) | -5.58% | 아래 | 위 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.122 | 콘탱고 |
| VIX / VIX9D | 1.077 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.166 | 1.467 | 2,503,479 | 2,919,544 | 29,444 |
| 나스닥100 ETF 옵션 (QQQ) | 1.052 | 1.447 | 3,662,579 | 3,852,057 | 10,760 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **CNBC** · Southwest Airlines cuts 2026 profit forecast on higher fuel
  - 2026-10-21 16:36 (ET) · https://www.cnbc.com/2026/10/21/southwest-airlines-luv-3q-2026-earnings.html
- **Reuters** · EXCLUSIVE: US orders departure of diplomats from Saudi Arabia amid Houthi strikes - Reuters
  - 2026-10-21 16:11 (ET) · https://news.google.com/rss/articles/CBMizgFBVV95cUxONDg0WFNBeGFxeHpUVUsya2RYd0k3XzF6bXU3eGpZVnh2T25MWHVsQzVrbE9PNEdaWnpfN1dmRmtxajMtbl8yZ29EWUxYaXAxcnkxcFN1NEVDLVE3bUtkR0NwZDVPN2haVXFERXRUeHRnQ2QyVDhVdjBNa2FIUFVDOWFicGJOQVVWR0JFMnZSM0NLV09nZHk5UzA2LTgtbmFEVnlYZDI1Uk9ic1hyLTZ0Z2NKbWI5QWgtWWE3ZzV4eE11bmpCcGstTFAzQnVGUQ?oc=5
- **Reuters** · Putin agrees to resume 3-way peace talks with Ukraine and US - Reuters
  - 2026-10-21 15:27 (ET) · https://news.google.com/rss/articles/CBMiwwFBVV95cUxOQXZaYTY5blYzZWJWYkJaQnI2M2RSSGJUcnpzSF9OMldoZjZxckRDRzhyb2JReEVNbEE5bjdZcUZlNzJ2b0YzQkRIZjltamVxVHVSaElldGhNUmlFZzdmZHpPOFBOSDNhbFV0NEdpYXBBN0w3VjlHV0JkSVQ3NG1hMHJMay14MWNuNDdQTldXaVE2Z205bjFkN05lVUh4TkloZWFvSm5FcGp0aS1nQ2JKcmNGTHB1NDhqdWJCaEM2NnoyRUE?oc=5
- **CNBC** · SpaceX gives the AI trade a shot in the arm. What it means for our stocks
  - 2026-10-21 15:01 (ET) · https://www.cnbc.com/investingclub/2026/10/21/spacex-gives-the-ai-trade-a-shot-in-the-arm-what-it-means-for-our-stocks-.html
- **Reuters** · US sanctions Greece-, Panama-based law firm over aid to Iranian shipping - Reuters
  - 2026-10-21 14:37 (ET) · https://news.google.com/rss/articles/CBMitgFBVV95cUxPZFh4ZEdDSDhEcmZJWFR1VDVOUDVaYTR6aURwNjEzRnpsVGV4aTl1RFR3LVZpa1ZRZW5DY1ByTnBXZmk3RVl4VHRZM0x6UGRnUWp1dUJJUWItY3lYU3dmZ1RBYU1OLTdjc3JXOVB3V09mM051WGM1dEJsaW1WQXRmd3BmVXRaRUZMNzR4bkVBY3RTNWt1aXYxcGdWZVdUMy0xNUNzMlpJMkpyR0RaQVdKbUNENzFIdw?oc=5
- **Reuters** · Sisi says Egypt would defend Saudi territory but rules out attack on Yemen - Reuters
  - 2026-10-21 13:54 (ET) · https://news.google.com/rss/articles/CBMivAFBVV95cUxPaTVZLWNRalc0ZzFmaXlERE8ySDhISTVTVjV0c0o2ZzU1UThTS2RMd0RRaVlsdmlNcFZfR3BiRHAwejM0dGFaUVA2V2JtVW4zMFZUVm1JMnViVGI1M2ZQa2VySHo2M3pJemxlRmJBanJSOTgwZko5VjFoeEFpTndNRHF4TGZNT25MMmRTMDRDdENwa3ZsZ1ZkY2NGOUo4a04wNmMxNk5OUE5nSXQ1TWxuZTNsQWF6U1JuX0FHcw?oc=5
- **CNBC** · Trump-aligned super PACs pour millions into once-safe GOP House seats
  - 2026-10-21 13:51 (ET) · https://www.cnbc.com/2026/10/21/trump-pac-spending-midterm-election-house-republicans.html
- **Reuters** · UK's FTSE 100 ticks higher on energy boost; hot inflation report limits gains - Reuters
  - 2026-10-21 12:28 (ET) · https://news.google.com/rss/articles/CBMirAFBVV95cUxOMG9KdWFSdV90N2s0bHM3d0xsTVlOMGduRE1RZ1FvSi1SbnU4MFlRQUIteDlZTC03TmNHVFl3Z2lhV2FrN1NwQjV5Wk1rU096X1pUNXB4M2c2bS1MdXlSeEZHaTJobmFsQzlvYTN6WHpyd2FkRzFqOFdkbzZUdjZoNzJCa1B6c2RxMzBmemg3RnBWdldpM0x0VEtCR0F0YXE3N3V2YXppNnN6ejBs?oc=5
- **CNBC** · Meta stock advances ahead of after-the-bell earnings. What we're looking for
  - 2026-10-21 12:00 (ET) · https://www.cnbc.com/investingclub/2026/10/21/meta-stock-advances-ahead-of-after-the-bell-earnings-what-were-looking-for.html
- **Reuters** · How the Republican redistricting gambit faltered under Trump slump - Reuters
  - 2026-10-21 11:34 (ET) · https://news.google.com/rss/articles/CBMiqwFBVV95cUxQOWFMMElucW1ZWW1jdUI5Y1lCYzAzZXNNQVAxZ3NjVFZjaU5iVjYwUXN2dXpsNFFaLU1GM3ZnNnRMY2tES1J3b2ctM1JYU2xrMG1Ea21FUkpNcUIxMmxxTWljaFJIMUw4eENzZGhzNkpvOG1yMUo1RWFfV3NsQmloSWlFOVlOR2JkcjIyZ0N5NGJwWWV1M0lfQzM1ajVKTUxwZXpnNnR1WFZvZVU?oc=5
- **CNBC** · Salesforce goes back to the M&A well to fortify a weaker business. Why it's a smart move
  - 2026-10-21 11:27 (ET) · https://www.cnbc.com/investingclub/2026/10/21/salesforce-goes-back-to-the-ma-well-to-fortify-a-weaker-business-why-its-a-smart-move.html
- **CNBC** · The political ad wars are still being fought over the airwaves even as digital gains share
  - 2026-10-21 10:40 (ET) · https://www.cnbc.com/2026/10/21/why-broadcast-tv-still-dominates-political-ad-spending.html
- **Reuters** · Most Gulf bourses slip as Iran-US diplomacy hits a standstill - Reuters
  - 2026-10-21 09:30 (ET) · https://news.google.com/rss/articles/CBMipgFBVV95cUxOdGVfYlNJZFNZQ3pscG5sYjNSVGZITlhmSl9MbjJHWXVFVjJPWEFCU2FaMTZmeFFRVnM4LTdGNWFhTm1USllBY3FOeTRQaWdDaEp5NVNtb0c0Q1hrejNVbGR4a1hHc3hkUGJ1NU1TMlFBamlCaTJEWUJZQjlkVW94VGJUYzFQWm1UOE40RUlRMkZGTmY5bW5pb3dGM21YOTBFV1BKX1Fn?oc=5
- **Reuters** · Israel's election may change its leader, but not Iran war policy - Reuters
  - 2026-10-21 09:23 (ET) · https://news.google.com/rss/articles/CBMisgFBVV95cUxOZm1ibWE2TFE3M0JlejZpUkp2aHJkY1NBTFRUR2tvaVV5dmtrbkFjbTlYMGM5WkpOTUp6MXFka3pyX1FGeUthY1NlS25oamJ6R1kzdjR2NHJIWWJDay1VWm00WmJkNjhnWlBwNFp0RDhvdnBZbjMyZHNabGZPSjFhbzJ0eU5lRGpvZXFaN0pXb1F0aWVveW93WWw2a0k1eFg0anJWQllTODdPaDkyejZVNVF3?oc=5
- **CNBC** · OpenAI expands ChatGPT Ads to 26 new countries as diversification push accelerates
  - 2026-10-21 09:00 (ET) · https://www.cnbc.com/2026/10/21/openai-chatgpt-ads-26-countries.html

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Why Super Micro Computer Stock Popped Today
  - Yahoo · 2026-10-21 15:38 (ET) · https://finnhub.io/api/news?id=a448c7728c803953bb9dd43d35fc0a892a2b676b30b152bb31cb9ead482a8092
- **NVDA** · Stock Market Today: Nasdaq Vaults On SpaceX Report; Software Names Gain (Live Coverage)
  - Yahoo · 2026-10-21 15:29 (ET) · https://finnhub.io/api/news?id=18ceb7f9c9bfc0dd34ff0c6c627912be00a08d9b78ab20be862d24f053e77f55
- **NVDA** · Warren Buffett's Latest Warning Is Sending Shockwaves Through Wall Street. Here's What History Says Could Happen Next.
  - Yahoo · 2026-10-21 15:27 (ET) · https://finnhub.io/api/news?id=f9bb51fa2ca16a0c8e40da66e333e8a0221e449c917d77921fcf73172db1bbb6
- **AVGO** · The Cheapest NVIDIA Has Looked All Month: What the Price Target Says
  - Yahoo · 2026-10-21 13:00 (ET) · https://finnhub.io/api/news?id=7b73d9ea8d3c7531c399c4ca2de9558dbfa0b53ade2748f795f360a230778882
- **AVGO** · Broadcom’s AI Revenue Surges 221%, But is Growth Becoming Too Dependent on AI Spending?
  - Yahoo · 2026-10-21 11:25 (ET) · https://finnhub.io/api/news?id=1510f10c435ddefb59be5174e1d52338665809481f833ac0dab4fe5732ef73e3
- **AVGO** · The World’s Greatest Hedge Fund Investor Ken Griffin Just Said AI Is ‘Almost Certainly’ a Bubble. But He’s Not Betting Against it Long Term
  - Yahoo · 2026-10-21 10:55 (ET) · https://finnhub.io/api/news?id=0012155834be525b8a850f462178c65e761fbbb694ced7dea88fea7b37211fb4

### 금융

- **JPM** · ManpowerGroup to Participate in J.P. Morgan Ultimate Services Investor Conference
  - Yahoo · 2026-10-21 14:37 (ET) · https://finnhub.io/api/news?id=52400f57429f658c4ab68f712e2c7e31b05c08958f47a6892ae05ef3e2b82c33
- **JPM** · The simple reason JPMorgan thinks SpaceX will triple: It's going after a $28 trillion market
  - Yahoo · 2026-10-21 14:36 (ET) · https://finnhub.io/api/news?id=21285b2e3f87304ce8385fc26ab585fdb5cd64ffd537663b879bc32cbcc1a478
- **JPM** · Bank of America (BAC): Is Its Wealth Business More Valuable Than the Headline Bank Suggests?
  - Yahoo · 2026-10-21 10:57 (ET) · https://finnhub.io/api/news?id=7e9b4a6722bc2e5d724d9ef7c83cad42e8d1d1e32ff386058698e26fc79ec83a

### 에너지

- **XOM** · SpaceX earnings roundup, Meta earnings preview, and tech trade fears
  - Yahoo · 2026-10-21 10:06 (ET) · https://finnhub.io/api/news?id=76609308cca98e5095bb1be13805a13eb1102b42fe134ba83e8cd3213a109974
- **XOM** · The Barrel That Matters Most Right Now Is Diesel
  - Yahoo · 2026-10-21 10:00 (ET) · https://finnhub.io/api/news?id=847034ceac34a840bfccda608a571a22f6ba188e8e21c852013b01405eb13ab8
- **XOM** · Can ExxonMobil Strengthen Its Long-Term Upstream Production Capacity?
  - Yahoo · 2026-10-21 08:30 (ET) · https://finnhub.io/api/news?id=22108e61a71c9c2f5bfd482bb97cb449ccc15cdce368d9ae782129eaa100d19d

### 헬스케어

- **UNH** · Sector Update: Healthcare Stocks Softer Late Afternoon
  - Yahoo · 2026-10-21 15:49 (ET) · https://finnhub.io/api/news?id=d5137cc2453a014db14532c1d82dfcf34d6f9bbb1eea59f036ec1fdda3faa171
- **UNH** · What Elevance Health (ELV) Said on Its Q3 Earnings Call
  - Yahoo · 2026-10-21 12:04 (ET) · https://finnhub.io/api/news?id=65a51a245e9ae1ebccb5e82f2fa947d23ab7fc3ff8d093ca2f531b01f2e14aed
- **UNH** · UnitedHealth (UNH): Does Optum Truly Diversify Its Earnings Risk?
  - Yahoo · 2026-10-21 10:38 (ET) · https://finnhub.io/api/news?id=ecf9a08e2863c15382d94e3306f11286a3a3a14e42f78cc11f94dab03fe6d9e6

### 소비재·유통

- **AMZN** · Amazon logistics automation offers long-term margin gains, Jefferies says
  - Yahoo · 2026-10-21 15:43 (ET) · https://finnhub.io/api/news?id=cbefd013412e5c74ca19d4e09e4ccd2b7cca791d58366392af7481e08516344e
- **AMZN** · AI Boom Boosts Fortunes of Several Tech Leaders as Elon Musk Leads Gains, BestBrokers.com Says
  - Yahoo · 2026-10-21 15:24 (ET) · https://finnhub.io/api/news?id=7bee8b8b72294183be84d0a06ea82450890bb0644cb95d5b1e10a36b54ab7738
- **AMZN** · Anthropic Has Over $600 Billion in Compute Contracts — And It's Not Enough
  - Yahoo · 2026-10-21 14:55 (ET) · https://finnhub.io/api/news?id=f6c339943a493b4279318bfa9e808ab7ec79016770015c624cb93fb59f48374f

