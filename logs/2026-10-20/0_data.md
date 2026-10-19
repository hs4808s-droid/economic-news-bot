# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-20 · 미국 기준일(ET): 2026-10-19 · 생성시각(KST): 2026-10-20 06:30
# 출처: Yahoo Finance chart API · FRED(키 없는 CSV) · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.
> **금리 기준 통일:** 2년물·10년물·10Y-2Y 는 FRED 일별 값(같은 기준일)만 본문에 쓴다. Yahoo ^TNX·^TYX 는 당일 참고용이라 FRED 값과 섞어 인용하지 않는다.
> 금리·스프레드의 등락은 bp(1bp=0.01%p) 단위다. FRED 값은 영업일 기준 하루 늦게 확정될 수 있다(기준 열 참고).

## 미국 주요 지수

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| S&P500 | `^GSPC` | 7,690.73 | +0.41% | -1.49% | +0.53% | +12.35% | 7,659.44 | 2026-10-19 16:44 |
| 나스닥종합 | `^IXIC` | 26,430.89 | +1.11% | -2.99% | -0.35% | +13.72% | 26,140.03 | 2026-10-19 17:15 |
| 다우 | `^DJI` | 51,966.03 | -0.07% | +0.22% | +0.55% | +8.12% | 52,002.41 | 2026-10-19 16:44 |
| 러셀2000 | `^RUT` | 2,728.3 | +0.25% | -2.37% | -4.62% | +9.93% | 2,721.37 | 2026-10-19 16:30 |
| SOX (필라델피아 반도체) | `^SOX` | 11,316.34 | +1.61% | -7.52% | -5.08% | +59.76% | 11,137.29 | 2026-10-19 17:15 |

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,739.75 | +0.46% | 7,704.25 | 2026-10-19 17:00 |
| 나스닥100 선물 (NQ) | `NQ=F` | 29,743.75 | +1.20% | 29,391.5 | 2026-10-19 16:59 |
| 다우 선물 (YM) | `YM=F` | 52,227 | +0.02% | 52,214 | 2026-10-19 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,744.7 | +0.34% | 2,735.5 | 2026-10-19 16:59 |

## 금리

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 미 2년물 금리 (FRED·기준) | `FRED:DGS2` | 4.74 | -3.0bp | -1.0bp | +0.0bp | +127.0bp | 4.77 | 2026-10-16 (FRED) |
| 미 10년물 금리 (FRED·기준) | `FRED:DGS10` | 5.09 | -1.0bp | -13.0bp | +8.0bp | +91.0bp | 5.1 | 2026-10-16 (FRED) |
| 미 10년물 금리 (Yahoo 당일·참고) | `^TNX` | 5.136 | +3.8bp | -10.4bp | +13.8bp | +97.3bp | 5.098 | 2026-10-19 14:59 |
| 미 30년물 금리 (Yahoo 당일·참고) | `^TYX` | 5.472 | +3.6bp | -12.6bp | +14.1bp | +63.2bp | 5.436 | 2026-10-19 14:59 |

**10Y-2Y 스프레드 (FRED DGS10−DGS2, 2026-10-16): 0.35%p** (전일 대비 +2.0bp)

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 18.44 | -7.75% | 19.99 | 2026-10-19 16:15 |
| VIX9D (9일) | `^VIX9D` | 17.93 | -10.88% | 20.12 | 2026-10-19 16:15 |
| VIX3M (3개월) | `^VIX3M` | 19.6 | -4.39% | 20.5 | 2026-10-19 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 106.93 | -2.71% | 109.91 | 2026-10-19 16:15 |
| SKEW (테일리스크) | `^SKEW` | 161.86 | -3.99% | 168.59 | 2026-10-19 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 달러지수 (DXY) | `DX-Y.NYB` | 101.99 | +0.14% | 101.84 | 2026-10-19 17:20 |
| USD/KRW | `KRW=X` | 1,332.35 | -0.64% | 1,340.95 | 2026-10-19 17:17 |
| WTI | `CL=F` | 98.24 | -3.13% | 101.41 | 2026-10-19 16:59 |
| Brent | `BZ=F` | 109.21 | -0.59% | 109.86 | 2026-10-19 16:59 |
| 금 | `GC=F` | 4,160.3 | -0.50% | 4,181.1 | 2026-10-19 16:59 |
| 구리 | `HG=F` | 6.58 | +0.81% | 6.53 | 2026-10-19 16:59 |
| 비트코인 | `BTC-USD` | 81,974.46 | -0.05% | 82,017.6 | 2026-10-19 17:30 |
| 하이일드 스프레드 (OAS, %p) | `FRED:BAMLH0A0HYM2` | 3.31 | +8.0bp | 3.23 | 2026-10-16 (FRED) |

## 섹터 ETF

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 기술 | `XLK` | 185.96 | +1.36% | -5.30% | -1.92% | +29.17% | 183.47 | 2026-10-19 16:00 |
| 금융 | `XLF` | 55.06 | -0.83% | +0.02% | -1.43% | +0.53% | 55.52 | 2026-10-19 16:00 |
| 에너지 | `XLE` | 67.8 | -0.64% | +2.71% | +5.43% | +51.64% | 68.24 | 2026-10-19 16:00 |
| 헬스케어 | `XLV` | 175.65 | -0.60% | +2.13% | +4.31% | +13.47% | 176.71 | 2026-10-19 16:00 |
| 경기소비재 | `XLY` | 114.46 | +1.78% | +1.95% | +3.09% | -4.15% | 112.46 | 2026-10-19 16:00 |
| 필수소비재 | `XLP` | 87.21 | -0.47% | +3.32% | +5.33% | +12.27% | 87.62 | 2026-10-19 16:00 |
| 산업재 | `XLI` | 166.68 | -0.64% | -1.46% | -1.81% | +7.45% | 167.76 | 2026-10-19 16:00 |
| 소재 | `XLB` | 50.95 | +0.06% | +3.05% | +1.92% | +12.35% | 50.92 | 2026-10-19 16:00 |
| 유틸리티 | `XLU` | 41.36 | -2.01% | -0.65% | +0.63% | -3.12% | 42.21 | 2026-10-19 16:00 |
| 부동산 | `XLRE` | 41.67 | -1.16% | -0.60% | -2.02% | +3.27% | 42.16 | 2026-10-19 16:00 |
| 커뮤니케이션 | `XLC` | 110.09 | -0.21% | -1.22% | -0.65% | -6.48% | 110.32 | 2026-10-19 16:00 |
| 반도체 | `SMH` | 548.46 | +1.61% | -7.20% | -4.28% | +52.30% | 539.79 | 2026-10-19 16:00 |
| 소프트웨어 | `IGV` | 105.99 | +1.58% | -4.75% | +1.57% | +0.28% | 104.34 | 2026-10-19 16:00 |
| 지역은행 | `KRE` | 69.26 | -0.79% | -0.43% | -4.80% | +6.87% | 69.81 | 2026-10-19 16:00 |
| 바이오 | `XBI` | 147.86 | +2.45% | -2.34% | -5.65% | +21.27% | 144.32 | 2026-10-19 16:00 |

### 섹터 ETF 보조 지표 (1M 상대강도 vs SPY · 이동평균 위치)

| ETF | 1M vs SPY | 50일선 | 200일선 |
|---|---|---|---|
| 기술 (`XLK`) | -2.55% | 아래 | 위 |
| 금융 (`XLF`) | -2.06% | 아래 | 위 |
| 에너지 (`XLE`) | +4.80% | 위 | 위 |
| 헬스케어 (`XLV`) | +3.68% | 위 | 위 |
| 경기소비재 (`XLY`) | +2.46% | 위 | 아래 |
| 필수소비재 (`XLP`) | +4.70% | 위 | 위 |
| 산업재 (`XLI`) | -2.44% | 아래 | 아래 |
| 소재 (`XLB`) | +1.29% | 아래 | 위 |
| 유틸리티 (`XLU`) | +0.00% | 아래 | 아래 |
| 부동산 (`XLRE`) | -2.65% | 아래 | 아래 |
| 커뮤니케이션 (`XLC`) | -1.28% | 아래 | 아래 |
| 반도체 (`SMH`) | -4.91% | 아래 | 위 |
| 소프트웨어 (`IGV`) | +0.94% | 위 | 위 |
| 지역은행 (`KRE`) | -5.43% | 아래 | 아래 |
| 바이오 (`XBI`) | -6.28% | 아래 | 위 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.063 | 콘탱고 |
| VIX / VIX9D | 1.028 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.196 | 1.467 | 2,069,195 | 2,474,083 | 29,650 |
| 나스닥100 ETF 옵션 (QQQ) | 1.172 | 1.400 | 4,103,102 | 4,809,926 | 10,876 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **Reuters** · Every look from the Victoria's Secret Fashion Show - Reuters
  - 2026-10-19 17:27 (ET) · https://news.google.com/rss/articles/CBMikAFBVV95cUxNa2lPVEdrVzBfenM5SXI3MVNXTDdLQ1R5Si12OHFWQzF1TUtJaUZYdjl6SmZjSkdZeS1FSWV2a2JzeXc5TEFGdkliY09WTFE2SWYwRUQwVUJaWWsxV2dSNGZwYWlOMFMyd0kzaTZoN0xJZmJTRm9NUjdmdmhPeG9sYlJ5d05PVDREcWlFbF9YZ0U?oc=5
- **CNBC** · Tech stocks had a nice oversold bounce on Monday. Earnings this week will determine if it's for real
  - 2026-10-19 16:57 (ET) · https://www.cnbc.com/2026/10/19/tech-stocks-rebound-meta-tesla-earnings.html
- **Reuters** · Pakistan army chief Asim Munir to visit Tehran on Tuesday - Reuters
  - 2026-10-19 15:54 (ET) · https://news.google.com/rss/articles/CBMiqgFBVV95cUxNNU5NeHoza1RQRlByV2lvS2dQTDZXOExwUktiVjJnaUE2YUJoVE1BN3N4VlhMNm1wd25CanBNSGlUeGhuSzZMTDlLUUdsMEtka0x5aWNBNGNpUEpwd1AxMnowV3RIYnZHZGxzb1ZNNGZqenFkbHNQLWlCcUxuekpVZ09UYUVlaWVsVjNmNjJpMHpjLVJiTnFiSnJLaVgyM1FlMEZuYnBUOXVhQQ?oc=5
- **CNBC** · Crushed tech stocks bounce — plus, new doctor survey keeps us positive on Lilly
  - 2026-10-19 14:52 (ET) · https://www.cnbc.com/investingclub/2026/10/19/crushed-tech-stocks-bounce-new-doctor-survey-keeps-us-positive-on-lilly.html
- **Reuters** · Germany summons Iranian envoy over plot to kill Jewish community leader - Reuters
  - 2026-10-19 13:45 (ET) · https://news.google.com/rss/articles/CBMiuAFBVV95cUxPMTBxMkF3RnVSeWFVMnUwOEZFYVAyeFRhRE9IVll1Q2czRDV3aWEtNzdvcV81TFZ1YzNjNDRkSHloSUFCUW9va0NyNEtSa1k0Wm9MeG9ZVE1sYkFpd0JoUjNXYm96NFdyY1FjNUFnNlljcEZQR3ByMUdXYVZOY2RDdnk3cEZXVHlfaTMzV19Xc0JTMDdPQmJlNHRrUE1Ua1ZtM0E5Umc2T3FrVmpXa3o3U29pZWdoSjNl?oc=5
- **Reuters** · Saudi Arabia postpones its 'Davos in the Desert' conference after attacks - Reuters
  - 2026-10-19 13:34 (ET) · https://news.google.com/rss/articles/CBMipwFBVV95cUxPaXJvV3ktdmE4WU9ZNjVBcDRBYW9yNXJVYVI3MV83aWtIV0pYN0lGNzM4UlNRZDdpRGs1bGsxR18wcjY5STVhU1Q1VEZJUmRKWFZPUnoxSlpFaThtMzhjRlVIZGl2VVVYYTlYM181N0Jyb0h4ZWRrM2FVZFZsSFRBT1haU0QtdEp5QlZ6dVg2VVpyX2RsaDEzbnN2Q1NvSFc5WW5jT2VmVQ?oc=5
- **Reuters** · Christiane Amanpour to leave CNN after four decades as Ellison era begins - Reuters
  - 2026-10-19 13:12 (ET) · https://news.google.com/rss/articles/CBMixAFBVV95cUxQb1RuM0JKcU9Qaks5eThna1hYUlptN2YyRWlqc2dDX1kySU51MWZPNFd6bXpCVnVPZXptVl80VmlwLU9NbTVrVmNjeWpNUEs4WFFKekVFRGU2NTZJQlZxeEFINFJRa3RmTEVJbnhvUm83R2gyMDVEb3V5cmgxNHFBWnd6OVN5ZlBKQ09HcWJnSlhvM0FxTm9ORkNBdzg4RzJSZzhVWHdROU1oT0d6VEY3LXdLdUV5VkwzZGkxWlVjOTlqcG1l?oc=5
- **CNBC** · Gartner analyst behind tech rout: AI returns are not yet large enough to justify neocloud build-out
  - 2026-10-19 12:57 (ET) · https://www.cnbc.com/2026/10/19/gartner-analyst-warns-about-ai-neccloud-build-out.html
- **Reuters** · Rubio seeks to expand Central Asia ties with pomp-filled Uzbekistan visit - Reuters
  - 2026-10-19 12:16 (ET) · https://news.google.com/rss/articles/CBMiwwFBVV95cUxNRjBMUkU1SEVNclFaMVR1SnljVENrS3N5RUdNcnV5UFZkdlB3RHdiWTFoSFRxcVRBVkRSOEowM0h4bHZyYmd4dDhKYlJQSzUzTUJ2QmxzaGtha2lxUldoLXRPSmczQndXbTNHRWxwRHBhZF9vdDdZRVl4WXJ0M3B0dEJrOWh1SkVzTXhIUTVydk11cEFPaXc3dGZBX0JnMk9hYlpOdkpXc3R3cllKTllGRG5MVC01QkZHNl9Td3J1VHhSckE?oc=5
- **Reuters** · Explainer: What's behind Egypt's move towards possible military involvement in Saudi-Yemen conflict? - Reuters
  - 2026-10-19 11:53 (ET) · https://news.google.com/rss/articles/CBMixwFBVV95cUxQVEFCaTJXdXlZR1NxZkpndXE3d0hRYWpmRUtBOXpXeTI3M2hUVnFSVVJrQm1NS29LLWlobDd4enF2OWxOY1h1SmJidXVlUksxeDdZdVMyZF9tVklTdWJiQzJZZzRNVnFEX0tMQUdCTW04WHhmdWdhQW42cERybkd1QzBDTHgxMklXU3dvbF9mbUt3a3RSb3NhZlpNbkpWcFNaWXZhMWE5TUkzTTVFMlI1YWV3NXJjb0lSMTRQVFNqbzFsRmZwRmtB?oc=5
- **Reuters** · Israel to resume commercial shipments to Gaza after Hamas fee dispute - Reuters
  - 2026-10-19 11:48 (ET) · https://news.google.com/rss/articles/CBMiuAFBVV95cUxQTE16ZHdCQXFFa1VvMzZRSFhtMER6Mmh2WVltcWZHcE9MYTByYXRIMWJvV2RJb1B4RXpoekFiTDV5Z1lyU1BmQ2FtUnZxT3ZqTnJwWEhSSnZUSmlobGRXcUYwYWxycU5NRjlNYWF0elNBR0FJUnRLZHJGeDRuSWNaXzI2aWhxbHpjNnFtbkN2N1lZa3luUHlXaHNVTnV3TzNjbmVnQVdsWnFIRGRCU2JDamM0SVZHTng0?oc=5
- **Reuters** · Egypt delays vote on military support for Saudi Arabia until October 26 - Reuters
  - 2026-10-19 11:47 (ET) · https://news.google.com/rss/articles/CBMiugFBVV95cUxOWHFMcmFaWmtRSEtzRmtXSnVKVzRKRGVaMXY4dDJ4TmZDU3JPZHlkWFZOdWViVDJvbk1lVUlCQ0dHT1BwZGQ2VVl3LUdHc1hDS2tpZlBfeXYxSDNCS3JuZzNBWEpnekVrcWxmY2wzNFBLUUxQV05tT1dlNlg2ZWRNbkZ3bDZFbU93U2NTV0VSVTc4NjZIcHE3SEdoeXBZZ3ItRHNaa19yYXZ5V1lZaTEtZXpPQUNHbkJhblE?oc=5
- **CNBC** · We're buying more of a beaten-up stock before another overhang is lifted
  - 2026-10-19 11:43 (ET) · https://www.cnbc.com/investingclub/2026/10/19/were-buying-more-of-a-beaten-up-stock-before-another-overhang-is-lifted.html
- **Reuters** · France in turmoil after riots and looting: What we know - Reuters
  - 2026-10-19 11:42 (ET) · https://news.google.com/rss/articles/CBMingFBVV95cUxQdnU5M25aUmFwSHBYZjhkMFl5RlU1dkZMVTVuSlBWeHZPX01SUGVZUGF3Wm94U2wwUlYzdWxxbGowVXhMM09ON3NFbjV0WElKTFVsZVlGQkprLTZQTGxkaEYwSDBxcHNUMWVDQmczLVlJWHd5Ym5Id2ozZDRENTBvWURQekl2NW9ablROeHI4Z0c4ZFlZM0x0Y2V3ZEFJUQ?oc=5
- **Reuters** · Meta apologizes after suspending "No Kings" Instagram account - Reuters
  - 2026-10-19 11:07 (ET) · https://news.google.com/rss/articles/CBMiqgFBVV95cUxQRS0zZWNoLW9WajlJVDROa1puZGVHU0FTMGhMOWNXWGVieWUzM2ZWekUxcWlBX2tjb0sxOEVRYnozR0l3TW90YmlRV2FodkJENFZYY0Y2VVdLelM1MHFlc1FHUVFXdUVLeUpURHFFTjU3ZmZ1RGsyZzYtZmVIeUFxc0JEYm02LU5SRzVGQmx3VEdGd1lza19TZlk0alFEaU5LeHNPUDFNSlpKdw?oc=5

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · 3 Unstoppable Dow Stocks to Buy Before October Ends
  - Yahoo · 2026-10-19 15:50 (ET) · https://finnhub.io/api/news?id=a568826caf6f56c7b6846d96216767a93e1ccc12283b7ff1be516d340a310a8f
- **NVDA** · NVIDIA's Price Implies Less Growth Than Its History
  - Yahoo · 2026-10-19 15:28 (ET) · https://finnhub.io/api/news?id=e1cf68919ecf72707adb2d33940c25edecdce6be84b2d86826bf1e56839fdb1a
- **NVDA** · Amazon (AMZN) Stock Costs $250 a Share. Here's Why I'd Still Buy It.
  - Yahoo · 2026-10-19 15:25 (ET) · https://finnhub.io/api/news?id=a47c0239d66477228f31d9c8526cdee7e3557a3bd12625f96f15015a8c20faa8
- **AVGO** · Companies object to tokenized listings on OKX-ICE platform
  - Yahoo · 2026-10-19 15:00 (ET) · https://finnhub.io/api/news?id=1fadcc65cffb60276d17ee821d38e56f29d490f1ae2d51475fa46665722b8ae4
- **AVGO** · Broadcom (AVGO) vs. Texas Instruments (TXN): Higher Income or Stronger Dividend Coverage?
  - Yahoo · 2026-10-19 14:57 (ET) · https://finnhub.io/api/news?id=454e47d91d5fd21acf448868707b822ffa0c1b22fb0316e68a661209dd03da96
- **AVGO** · Broadcom vs. Applied Materials: Which Buybacks Are Actually Shrinking the Share Count?
  - Yahoo · 2026-10-19 14:57 (ET) · https://finnhub.io/api/news?id=990bb730158de625359e55ca897d8e70bc3f9aa916e94bc4c5447511b2e2a1d1

### 금융

- **JPM** · JPMorgan Deploys JPM Coin on Ethereum Mainnet — Institutional Stablecoin Payments Go Multi-Chain
  - Yahoo · 2026-10-19 15:41 (ET) · https://finnhub.io/api/news?id=1f71b3860c32174cf5d2561bd3bc3ea2e48d05581581dd8c85ca005d40dd73ea
- **JPM** · J.P. Morgan Stays Top of Extel’s All-America Equities Research Table
  - Yahoo · 2026-10-19 15:17 (ET) · https://finnhub.io/api/news?id=c0b393f09360c93ec7afb8d75ddfc6972b4f01a03f45b5335af893cf9442b499
- **JPM** · Chase Launches Fraud & Scam Prevention Month
  - Yahoo · 2026-10-19 13:35 (ET) · https://finnhub.io/api/news?id=44549e94da09e5fb82120818b4d729b90c215dccf83b27f3882fcd9d0e81d00f

### 에너지

- **XOM** · Better Oil Stock: Chevron (CVX) vs. ExxonMobil (XOM)
  - Yahoo · 2026-10-19 15:15 (ET) · https://finnhub.io/api/news?id=392077190a878712c8ae958ebdb23d702c351007cf7027d3dcdfd8d896881996
- **XOM** · Is Chevron Stock Worth More Than Its Competitors?
  - Yahoo · 2026-10-19 13:53 (ET) · https://finnhub.io/api/news?id=78225f5d72b2c6b2286c736f152ac9ff42afbd26ed544039b1a019f8c74eebc5
- **XOM** · Exxon just showed why gas prices didn't fall with oil
  - Yahoo · 2026-10-19 12:33 (ET) · https://finnhub.io/api/news?id=a6666e56dafed89e7414ca0516cec186ae9ccac1f8200338f748706995357a2b

### 헬스케어

- **UNH** · Why Some of America’s Biggest Companies Are Objecting to Tokenized Shares
  - Yahoo · 2026-10-19 14:46 (ET) · https://finnhub.io/api/news?id=6b696838ce199f88a1f3bdc8550aedad41ae9110c59d1cfc5aa9169fc5568371
- **UNH** · Nine Public Companies Object to OKX-ICE Tokenized Stock Plans
  - Yahoo · 2026-10-19 12:29 (ET) · https://finnhub.io/api/news?id=955434f5e6e47215b21ab196357894dc9fea2253d4f3842136ca8b609a2650f0
- **UNH** · UnitedHealth Group (UNH) Has The Market Asking A Bigger Question
  - Yahoo · 2026-10-19 11:15 (ET) · https://finnhub.io/api/news?id=b04b05c8faff532da56bc2d4cd35c6c4eb2d9f54fcdd06b054afe8f201afaae0

### 소비재·유통

- **AMZN** · 3 Unstoppable Dow Stocks to Buy Before October Ends
  - Yahoo · 2026-10-19 15:50 (ET) · https://finnhub.io/api/news?id=a568826caf6f56c7b6846d96216767a93e1ccc12283b7ff1be516d340a310a8f
- **AMZN** · Sector Update: Tech Stocks Rise Late Afternoon
  - Yahoo · 2026-10-19 15:46 (ET) · https://finnhub.io/api/news?id=3de7006c404a02abe84ed0a390bbfeb500e86b524026545c03a4ca76a719f421
- **AMZN** · Amazon (AMZN) Stock Costs $250 a Share. Here's Why I'd Still Buy It.
  - Yahoo · 2026-10-19 15:25 (ET) · https://finnhub.io/api/news?id=a47c0239d66477228f31d9c8526cdee7e3557a3bd12625f96f15015a8c20faa8

