# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-15 · 미국 기준일(ET): 2026-10-14 · 생성시각(KST): 2026-10-15 06:30
# 출처: Yahoo Finance chart API · FRED(키 없는 CSV) · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.
> 금리·스프레드의 등락은 bp(1bp=0.01%p) 단위다. FRED 값은 영업일 기준 하루 늦게 확정될 수 있다(기준 열 참고).

## 미국 주요 지수

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| S&P500 | `^GSPC` | 7,718.94 | -1.11% | -1.06% | +1.76% | +12.76% | 7,805.45 | 2026-10-14 16:36 |
| 나스닥종합 | `^IXIC` | 26,692.87 | -1.88% | -3.07% | +2.74% | +14.85% | 27,204.38 | 2026-10-14 17:15 |
| 다우 | `^DJI` | 51,621.48 | -0.09% | +0.86% | -0.91% | +7.40% | 51,670.1 | 2026-10-14 16:36 |
| 러셀2000 | `^RUT` | 2,729.53 | -1.93% | -2.28% | -4.90% | +9.98% | 2,783.37 | 2026-10-14 16:30 |
| SOX (필라델피아 반도체) | `^SOX` | 11,684.38 | -4.30% | -10.58% | +4.55% | +64.96% | 12,208.79 | 2026-10-14 17:15 |

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,765.25 | -1.15% | 7,855.75 | 2026-10-14 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 30,139.25 | -2.12% | 30,791.5 | 2026-10-14 16:59 |
| 다우 선물 (YM) | `YM=F` | 51,846 | -0.17% | 51,935 | 2026-10-14 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,744.8 | -1.97% | 2,800.1 | 2026-10-14 16:59 |

## 금리

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 미 10년물 금리 (Yahoo) | `^TNX` | 5.19 | -2.7bp | -8.7bp | +19.4bp | +102.7bp | 5.217 | 2026-10-14 14:59 |
| 미 30년물 금리 (Yahoo) | `^TYX` | 5.525 | -3.8bp | -13.6bp | +16.1bp | +68.5bp | 5.563 | 2026-10-14 14:59 |
| 미 2년물 금리 (FRED) | `FRED:DGS2` | 4.79 | -1.0bp | -5.0bp | +16.0bp | +132.0bp | 4.8 | 2026-10-13 (FRED) |
| 미 10년물 금리 (FRED) | `FRED:DGS10` | 5.21 | -3.0bp | -10.0bp | +25.0bp | +103.0bp | 5.24 | 2026-10-13 (FRED) |

**10Y-2Y 스프레드 (FRED DGS10−DGS2, 2026-10-13): 0.42%p** (전일 대비 -2.0bp)

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 16.87 | +10.48% | 15.27 | 2026-10-14 16:15 |
| VIX9D (9일) | `^VIX9D` | 14.59 | +21.68% | 11.99 | 2026-10-14 16:15 |
| VIX3M (3개월) | `^VIX3M` | 18.79 | +4.62% | 17.96 | 2026-10-14 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 94.45 | +10.62% | 85.38 | 2026-10-14 16:15 |
| SKEW (테일리스크) | `^SKEW` | 157.3 | +1.65% | 154.74 | 2026-10-14 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 달러지수 (DXY) | `DX-Y.NYB` | 102.55 | +0.36% | 102.18 | 2026-10-14 17:20 |
| USD/KRW | `KRW=X` | 1,341.14 | +0.53% | 1,334.13 | 2026-10-14 17:28 |
| WTI | `CL=F` | 95.17 | +1.09% | 94.14 | 2026-10-14 16:59 |
| Brent | `BZ=F` | 106.06 | +0.35% | 105.69 | 2026-10-14 16:59 |
| 금 | `GC=F` | 4,127.3 | -1.20% | 4,177.3 | 2026-10-14 16:59 |
| 구리 | `HG=F` | 6.62 | -0.94% | 6.68 | 2026-10-14 16:59 |
| 비트코인 | `BTC-USD` | 81,793.58 | -1.57% | 83,095.13 | 2026-10-14 17:30 |
| 하이일드 스프레드 (OAS, %p) | `FRED:BAMLH0A0HYM2` | 3.16 | +5.0bp | 3.11 | 2026-10-13 (FRED) |

## 섹터 ETF

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 기술 | `XLK` | 190.43 | -2.98% | -5.44% | +3.64% | +32.27% | 196.28 | 2026-10-14 16:00 |
| 금융 | `XLF` | 54.52 | -0.55% | +1.43% | -4.10% | -0.46% | 54.82 | 2026-10-14 16:00 |
| 에너지 | `XLE` | 67.63 | +0.64% | +6.74% | +2.58% | +51.26% | 67.2 | 2026-10-14 16:00 |
| 헬스케어 | `XLV` | 173.96 | +2.53% | +3.05% | +3.76% | +12.38% | 169.66 | 2026-10-14 16:00 |
| 경기소비재 | `XLY` | 111.5 | -0.77% | +0.13% | +0.56% | -6.62% | 112.36 | 2026-10-14 16:00 |
| 필수소비재 | `XLP` | 86.06 | +2.22% | +5.34% | +2.78% | +10.79% | 84.19 | 2026-10-14 16:00 |
| 산업재 | `XLI` | 167.04 | -0.97% | -0.48% | -1.07% | +7.68% | 168.67 | 2026-10-14 16:00 |
| 소재 | `XLB` | 49.67 | -0.10% | +1.41% | -2.09% | +9.53% | 49.72 | 2026-10-14 16:00 |
| 유틸리티 | `XLU` | 41.72 | -0.36% | +1.39% | +0.97% | -2.27% | 41.87 | 2026-10-14 16:00 |
| 부동산 | `XLRE` | 41.49 | -0.81% | +2.27% | -3.67% | +2.83% | 41.83 | 2026-10-14 16:00 |
| 커뮤니케이션 | `XLC` | 110.82 | -1.30% | -0.40% | -2.81% | -5.86% | 112.28 | 2026-10-14 16:00 |
| 반도체 | `SMH` | 564.74 | -3.98% | -9.65% | +4.17% | +56.82% | 588.12 | 2026-10-14 16:00 |
| 소프트웨어 | `IGV` | 107.65 | -3.00% | -1.99% | +1.99% | +1.85% | 110.98 | 2026-10-14 16:00 |
| 지역은행 | `KRE` | 68.54 | -0.75% | -0.51% | -7.44% | +5.76% | 69.06 | 2026-10-14 16:00 |
| 바이오 | `XBI` | 146.77 | -0.02% | -2.30% | -4.71% | +20.37% | 146.8 | 2026-10-14 16:00 |

### 섹터 ETF 보조 지표 (1M 상대강도 vs SPY · 이동평균 위치)

| ETF | 1M vs SPY | 50일선 | 200일선 |
|---|---|---|---|
| 기술 (`XLK`) | +2.03% | 위 | 위 |
| 금융 (`XLF`) | -5.71% | 아래 | 위 |
| 에너지 (`XLE`) | +0.97% | 위 | 위 |
| 헬스케어 (`XLV`) | +2.15% | 위 | 위 |
| 경기소비재 (`XLY`) | -1.05% | 아래 | 아래 |
| 필수소비재 (`XLP`) | +1.17% | 위 | 위 |
| 산업재 (`XLI`) | -2.68% | 아래 | 아래 |
| 소재 (`XLB`) | -3.70% | 아래 | 아래 |
| 유틸리티 (`XLU`) | -0.64% | 아래 | 아래 |
| 부동산 (`XLRE`) | -5.28% | 아래 | 아래 |
| 커뮤니케이션 (`XLC`) | -4.43% | 아래 | 아래 |
| 반도체 (`SMH`) | +2.56% | 아래 | 위 |
| 소프트웨어 (`IGV`) | +0.38% | 위 | 위 |
| 지역은행 (`KRE`) | -9.05% | 아래 | 아래 |
| 바이오 (`XBI`) | -6.33% | 아래 | 위 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.114 | 콘탱고 |
| VIX / VIX9D | 1.156 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.250 | 1.467 | 2,791,695 | 3,489,152 | 29,428 |
| 나스닥100 ETF 옵션 (QQQ) | 0.922 | 1.479 | 5,394,675 | 4,976,218 | 11,086 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **Reuters** · Ohio's working-class voters rethink support for Trump and the Republican Party - Reuters
  - 2026-10-14 15:28 (ET) · https://news.google.com/rss/articles/CBMirwFBVV95cUxQWno4ZFd2QmdMeXRMUWg2dk1IVGg1VmJ5U19nZVVaZFBueWhMT05PWFZLNnYxZktyVXB4cTlJeGxXdDBROURCazNsN2ZtcnNVcU5MbElLWUhrUklEVjJJcE4zaGFiRXhnVEV6N1ZhRUZlVGpld2pRWm8zNVlJdTJ5UmFYbkl5VXlyeGpOR1RDYXk2SnhiS05RYzJHbUlnaWxxVmU0SDdiR0NaMTFRaTZz?oc=5
- **CNBC** · AI infrastructure stocks tumble. Here's a few reasons for the sell-off
  - 2026-10-14 14:41 (ET) · https://www.cnbc.com/investingclub/2026/10/14/ai-infrastructure-stocks-tumble-heres-a-few-reasons-for-the-sell-off-.html
- **Reuters** · US inflation heats up in September; Fed rate hike this month back on table - Reuters
  - 2026-10-14 13:25 (ET) · https://news.google.com/rss/articles/CBMiugFBVV95cUxNX3hkV3J5em1xWWY4V0hQODFTamFtU3NvdkpPRUUzMGY0TnlKaVlneXZPc0J6bFpWdDZWb2hLRkZZaHhZVElDSXNFbGNYMVVBRGR6c1RlNDA4cEhkMEcwck5VMFRtZ1QxOFJqNTkyaGJzWWFLSXp2Z0l1Z19vMDh5bGd6N1FJSkJFR2tZUXd1UWUzeVlvZi1xNTVONk00ejJ5cE0xSGY4THFsaUo0RGxPV3dpaW4tbEZseUE?oc=5
- **CNBC** · Merck CEO tells CNBC he expects breakthrough cancer vaccine will become faster to make
  - 2026-10-14 13:24 (ET) · https://www.cnbc.com/2026/10/14/merck-moderna-cancer-vaccine-manufacturing-time.html
- **Reuters** · Two ships sink near Hormuz after being hit by projectiles amid surge in attacks - Reuters
  - 2026-10-14 13:22 (ET) · https://news.google.com/rss/articles/CBMiyAFBVV95cUxNVlQtcHJibXBpYWEwWTQ4dFdfWUFJbTVteGY0WThGcTFybEdUTERvVG9DcGdoY09vUjh0TG1QeG5zMWx0LTFvV09teVNXY1NLdXZVNlpuMVBIV3pndWJKWVBRdENjLVd0dnVwdUxPTHFPU002S0ZqR0lkcjgyNVl2ZFFXc05MdTJHenM3LVNUSlBUb1RyeDVxY3VTdUxEamxrbS1OXzJJR3o3SlltandncHAwVXFNSTFYcmJXblh2U25vN2xMMW1ibQ?oc=5
- **CNBC** · 'The power of shrink' — tour the little-known $25B company that chipmakers can't live without
  - 2026-10-14 13:04 (ET) · https://www.cnbc.com/investingclub/2026/10/14/the-power-of-shrink-tour-the-little-known-25b-company-that-chipmakers-cant-live-without.html
- **CNBC** · Abilene Christian University is giving Ivy League endowments a run for their money in the market
  - 2026-10-14 11:48 (ET) · https://www.cnbc.com/2026/10/14/abilene-christian-giving-ivy-endowment-billions-a-run-for-their-money.html
- **CNBC** · We're exiting our remaining stake in an industrial stock spin-off gone wrong
  - 2026-10-14 11:40 (ET) · https://www.cnbc.com/investingclub/2026/10/14/were-exiting-our-remaining-stake-in-an-industrial-stock-spin-off-gone-wrong.html
- **Reuters** · Yemen's Houthis vow more attacks on Saudi airports, oil facilities after Aramco HQ hit - Reuters
  - 2026-10-14 11:09 (ET) · https://news.google.com/rss/articles/CBMiyAFBVV95cUxNV3VzaTd1VDVxNXczQ2FRa2FsXzdOV0Y5ZlFoaUthcVJhUnlFMHROUUMtWWZzUGZNWFd5WVNZbnJyZ3A4azRaUzNabVQ1U2ZMMmNYTzM1R2ZoeDF5dVQ0Q3FldDNEMW5lVC1oaVQ3Rmdaei01eS1GaFVla0prYUVZeEtJZlBZV2hoUm8yVTJNR3RYSXlhZTBPVWswNmdTWE5nclRiSldzUE91cXNZbzRGZzVOSFpMX294VWs3UlFpV2Q1Z09xTnl4Rw?oc=5
- **Reuters** · Yemen fighting overwhelms hospitals, cuts aid to 800,000 people, relief agencies say - Reuters
  - 2026-10-14 10:39 (ET) · https://news.google.com/rss/articles/CBMivgFBVV95cUxPVVpzVDN0cmNMQUVHNkJaYWM0V2pOdXgzTGFrYWY3V1ZKNTd2WGhkY2JvdU1Vd2tOanRlRDdzY2JOTHZoLTlfcTdtcndRUGNFUlhqWFF6TWNhclZVeTcxY1pqX00ycm5Pb1JHaFQ2ekR6bEhsWTItbzJBOElETVZFMU9hdnVOc1BoQkgtMkVUNnRzUUJvQmlhR1puTk1COEZBSDYtODFYWVVUc0FTQ1IzWlBBNlFOeUFYSnZTYU5B?oc=5
- **Reuters** · Gulf markets mixed; Saudi stocks hardest hit on Aramco attack - Reuters
  - 2026-10-14 09:23 (ET) · https://news.google.com/rss/articles/CBMiuwFBVV95cUxNLXZwM3pfUE0yMVJsTzRjTkJmWFIwclNIamJ1Y2xFdmxWV2lpVHZWRDNqdkVLVGRvSV9rWEZXX0Q3cndEWXJNNnFWeVlYWkhzbFRjV19CSlV5M2phQVJSa2pWdXNob0RsSURPb0k2bVh2ZXJnMEJPeUdXYnhDV2FNLVN4QVdLVXpIWjJCTU5BYkVaMTlkQWlzeDI5bW9CU09sRUtsNlNtbjV6UklveDU4ZmNHcGQxT1VLb3BJ?oc=5
- **Reuters** · Netanyahu says he is not seeking to attack Iran again before Israel election - Reuters
  - 2026-10-14 09:05 (ET) · https://news.google.com/rss/articles/CBMixgFBVV95cUxOLWQySUR2MFRlc1ZmU2lEaFRLU0VVWU14UVZhNm1Jc05obTk2SFV6UzZwLWhySUlaTXJISmdnc00wWnpNZHd0WGlIeC03ZmVnbzJuOUV6Zm96OE9sdTExbU5LdzBoa0U1S2QtMlNoWWQ1VUQtM1FzZHBXTGFxMDczVVRoWjNZbjIzaUpwMGlSS0s0VDAtZ3J5M0laNVlrT09Mc3ZwcjQwbE9YSDN4c2V0UmpWZ1lhanNDdS1hU3BtSUJzQ2tfbXc?oc=5
- **Reuters** · Failure to activate Hormuz fertilizer plan could trigger food crisis, UN official says - Reuters
  - 2026-10-14 08:55 (ET) · https://news.google.com/rss/articles/CBMiywFBVV95cUxQb0hPc25RSlU2WFFVb2pGd01CVzlCeTQ1a2xpb2dVS3h6OGtGX1dSb3FPTlptLTIyZklOd3JBR2RZRjMyT193eUgwVVV2UkNKd3hnTTVGVjVFUVZHY3hRVmo1REN2ZTVGRENKa3NPUG82d3ZCcGlaTllUT0ZYNDQ2N19TdW9ybGNVaDJiZDNldDJ2VGdBQ09MQXRtYVpsOUxNdnFKUm5ndWtWMnpQV1gwRmhLc3lESlYzQTNLY3NSQl9NMFRzbkZjbC0zMA?oc=5
- **Reuters** · Saudi Aramco headquarters suffered extensive damage in Houthi attack, sources say - Reuters
  - 2026-10-14 07:43 (ET) · https://news.google.com/rss/articles/CBMixAFBVV95cUxQTEY0UDJsbGo1MXFVX1FoY1RIdkFLeW96R3hMOEkwQTNRTFpLby1wZEFGRy10SThxSkhSaXZKQ1psYmdiQVZQd19uaDFtZFBZa1pJZzZCT0dsd0lSdmV1UWV0dExiRmU2Y2lVUS1SaWs1UzNkZ25lUnRJaklfWnlOeEFVQTg2dDVQTWF4UWp1aTcyR2JsUWN5d0JzSWRqMlp1ZDY3OXpncUZDN2FuVk9tN0VuaGtIMVpXM1F4RU5QX00xek9q?oc=5
- **Reuters** · Iran's central bank governor dismisses claims of economic collapse amid US blockade - Reuters
  - 2026-10-14 07:26 (ET) · https://news.google.com/rss/articles/CBMizgFBVV95cUxPY09JZzRxS3I5eWpRNnAyUlFPU21LTlRFQkJPc1NUVGNBeE5hZzI3al9VUlRpU3lvQTN5a2t1bjNmTWozZVJSM0lTWEJnR05NSmlNRmRfQ2txcjY4RFVCWGpRT2d5WlNiZjRpVXdsUm1MY1pReG5Wb0dRb0xUandmMmRSNGY0aHI1bWprNFc0bEwwcDV2Tkd3V1BHYml1U3VWcUdHSFJqUVFxdGctc1A0TXZaYlhNcndIbWVjN0xCQzlNYVhpdV9hYm42Nl9jdw?oc=5

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Why Arm Holdings Stock Was Falling Today
  - Yahoo · 2026-10-14 15:52 (ET) · https://finnhub.io/api/news?id=1025744b7805365028fab6158e4d690dfc5546777e836708095e6144f586c036
- **NVDA** · Nvidia Talked Up Generative AI 2 Weeks Before ChatGPT. The Clues Hold Up.
  - Yahoo · 2026-10-14 15:39 (ET) · https://finnhub.io/api/news?id=9047d550b0fa5994cfc24310f3f1eaa828b5eb91f786518a30bddf3aa64a78bb
- **NVDA** · Why SandiskStock Keeps Going Down
  - Yahoo · 2026-10-14 15:21 (ET) · https://finnhub.io/api/news?id=50c962996d2f212c8039ad4c1d36daff08980c70f212cc13185610982b8ad4f3
- **AVGO** · TSM Earnings Tomorrow: Can Strong AI Demand Boost Q3 Results?
  - Yahoo · 2026-10-14 14:00 (ET) · https://finnhub.io/api/news?id=58628f64fcde2bbc075557a107d63d015efd2f40174ce566d161c785ce5e5298
- **AVGO** · TSMC Earnings Will Surge but Terafab and Texas Talks Are in Focus
  - Yahoo · 2026-10-14 13:00 (ET) · https://finnhub.io/api/news?id=2d38641dcff10e1d2f743ca9c2a32aa644a2df0cc922abdfe23bcab0fb646064
- **AVGO** · Broadcom is The Steady Hand The Market Keeps Discounting
  - Yahoo · 2026-10-14 12:45 (ET) · https://finnhub.io/api/news?id=71268d67dfa2714a9ef00b773b27546cde22038d6528d1ffda49d1979f7e024e

### 금융

- **JPM** · Givaudan (SWX:GIVN) Stock Gets Fair Value Bump After Higher Analyst Growth Views
  - Yahoo · 2026-10-14 15:18 (ET) · https://finnhub.io/api/news?id=9e2b304e48cf7596edba57d66977fccafc3030bd9cfb8a2afcfd726c39259a4c
- **JPM** · Citi Says the S&P 500 Hits 8,100. Half the Market Has to Cooperate First.
  - Yahoo · 2026-10-14 14:48 (ET) · https://finnhub.io/api/news?id=e402caca7390f2b01d7bf10159f468d2948818a646e3348ab5269ca1cb99c945
- **JPM** · This bank has more upside than JP Morgan: Stocks to buy after earnings
  - Yahoo · 2026-10-14 12:45 (ET) · https://finnhub.io/api/news?id=8442efdd203993b0f390d353ec238a9e11971a484cfd74353b1acad688a6ec84

### 에너지

- **XOM** · Stock Market Today: Nasdaq Hit As Inflation Runs Hot; Dell Slumps, But These Biotech Names Gain (Live Coverage)
  - Yahoo · 2026-10-14 15:08 (ET) · https://finnhub.io/api/news?id=3b9dea2a69b3fc425658f3f7c97088ad4174d1c9c84f442b341272d8f330253c
- **XOM** · What Did Valero Stock Investors Miss Before The Run?
  - Yahoo · 2026-10-14 11:35 (ET) · https://finnhub.io/api/news?id=45542ef98f52712de6811c92df48e7cff137c8370f1f2eddac90d21884ea7339
- **XOM** · ExxonMobil (XOM) Stock May Be 10% Undervalued As Kashagan Risk Looms
  - Yahoo · 2026-10-14 11:21 (ET) · https://finnhub.io/api/news?id=f99ce54c2e80d219a481c533aa21eaa3f745c97b4be6fb33f4dd20086f6c4fcf

### 헬스케어

- **UNH** · Discover which dow jones stocks are making waves on Wednesday.
  - ChartMill · 2026-10-14 15:10 (ET) · https://finnhub.io/api/news?id=0da62e5b5741f2c815f6c9d71ebb7308149769088a6488e233b3825b4510e5a1
- **UNH** · Top S&P500 movers in Wednesday's session
  - ChartMill · 2026-10-14 15:05 (ET) · https://finnhub.io/api/news?id=0b7c292179b56ca652306005b9567d0a0523eab678139849606472987ea2e20f
- **UNH** · Stocks making big moves yesterday: Bumble, Kontoor Brands, UnitedHealth, SentinelOne, and Flex
  - Yahoo · 2026-10-14 13:24 (ET) · https://finnhub.io/api/news?id=c7cc264862bc8ed7a078fab091430aeca72103375a1dce1f659c00990bd096f2

### 소비재·유통

- **AMZN** · IonQ vs. Nebius Group: Which Technology Stock Is a Better Buy in 2026?
  - Yahoo · 2026-10-14 15:40 (ET) · https://finnhub.io/api/news?id=ac37d2f420ed8a1958c8705720887c4bcc79e46407cdc8ad40ca2319873d6f24
- **AMZN** · Better High-Yield Dividend Stock: Pfizer vs. UPS
  - Yahoo · 2026-10-14 15:12 (ET) · https://finnhub.io/api/news?id=6749c3c62359b0a0c47f0efb52a4867735713390da08de110f47958dedfd4031
- **AMZN** · Discover which dow jones stocks are making waves on Wednesday.
  - ChartMill · 2026-10-14 15:10 (ET) · https://finnhub.io/api/news?id=0da62e5b5741f2c815f6c9d71ebb7308149769088a6488e233b3825b4510e5a1

