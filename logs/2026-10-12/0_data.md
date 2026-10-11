# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-10-12 · 미국 기준일(ET): 2026-10-09 · 생성시각(KST): 2026-10-12 06:30
# 출처: Yahoo Finance chart API · FRED(키 없는 CSV) · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.
> 금리·스프레드의 등락은 bp(1bp=0.01%p) 단위다. FRED 값은 영업일 기준 하루 늦게 확정될 수 있다(기준 열 참고).

## 미국 주요 지수

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| S&P500 | `^GSPC` | 7,811.54 | +0.59% | +1.15% | +2.90% | +14.11% | 7,765.36 | 2026-10-09 17:29 |
| 나스닥종합 | `^IXIC` | 27,366.17 | +0.64% | +0.64% | +4.92% | +17.74% | 27,193.34 | 2026-10-09 17:15 |
| 다우 | `^DJI` | 51,654.95 | +0.83% | +0.93% | -0.79% | +7.47% | 51,231.64 | 2026-10-09 16:37 |
| 러셀2000 | `^RUT` | 2,806.98 | +0.46% | -0.91% | -2.90% | +13.10% | 2,794.13 | 2026-10-09 16:30 |
| SOX (필라델피아 반도체) | `^SOX` | 12,572.42 | -0.41% | -4.30% | +8.25% | +77.50% | 12,623.71 | 2026-10-09 17:15 |

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,859.75 | +0.56% | 7,816.25 | 2026-10-09 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 31,108.75 | +0.45% | 30,969.5 | 2026-10-09 16:59 |
| 다우 선물 (YM) | `YM=F` | 51,926 | +0.84% | 51,493 | 2026-10-09 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,822.1 | +0.44% | 2,809.6 | 2026-10-09 16:59 |

## 금리

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 미 10년물 금리 (Yahoo) | `^TNX` | 5.244 | +1.3bp | -3.3bp | +30.0bp | +108.1bp | 5.231 | 2026-10-09 14:59 |
| 미 30년물 금리 (Yahoo) | `^TYX` | 5.6 | -0.6bp | -3.0bp | +23.9bp | +76.0bp | 5.606 | 2026-10-09 14:59 |
| 미 2년물 금리 (FRED) | `FRED:DGS2` | 4.75 | -2.0bp | -3.0bp | +32.0bp | +128.0bp | 4.77 | 2026-10-08 (FRED) |
| 미 10년물 금리 (FRED) | `FRED:DGS10` | 5.22 | -6.0bp | -2.0bp | +39.0bp | +104.0bp | 5.28 | 2026-10-08 (FRED) |

**10Y-2Y 스프레드 (FRED DGS10−DGS2, 2026-10-08): 0.47%p** (전일 대비 -4.0bp)

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 14.84 | -3.70% | 15.41 | 2026-10-09 16:15 |
| VIX9D (9일) | `^VIX9D` | 11.26 | -7.78% | 12.21 | 2026-10-09 16:15 |
| VIX3M (3개월) | `^VIX3M` | 17.77 | -1.71% | 18.08 | 2026-10-09 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 84.88 | -3.17% | 87.66 | 2026-10-09 16:15 |
| SKEW (테일리스크) | `^SKEW` | 154.34 | +3.45% | 149.19 | 2026-10-09 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 달러지수 (DXY) | `DX-Y.NYB` | 102.23 | +0.09% | 102.14 | 2026-10-09 16:59 |
| USD/KRW | `KRW=X` | 1,340.98 | -0.15% | 1,342.99 | 2026-10-11 17:14 |
| WTI | `CL=F` | 91.85 | +0.39% | 91.49 | 2026-10-09 16:59 |
| Brent | `BZ=F` | 104.72 | +0.42% | 104.28 | 2026-10-09 16:59 |
| 금 | `GC=F` | 4,216.3 | +1.43% | 4,157 | 2026-10-09 16:59 |
| 구리 | `HG=F` | 6.69 | +2.65% | 6.52 | 2026-10-09 16:59 |
| 비트코인 | `BTC-USD` | 83,346.22 | +0.52% | 82,912.23 | 2026-10-11 17:30 |
| 하이일드 스프레드 (OAS, %p) | `FRED:BAMLH0A0HYM2` | 3.15 | +6.0bp | 3.09 | 2026-10-08 (FRED) |

## 섹터 ETF

| 항목 | 심볼 | 현재가/종가 | 1D | 5D | 1M | YTD | 직전 종가 | 기준(ET) |
|---|---|---|---|---|---|---|---|---|
| 기술 | `XLK` | 198.78 | +0.51% | -0.52% | +7.32% | +38.07% | 197.78 | 2026-10-09 16:00 |
| 금융 | `XLF` | 54.73 | +0.92% | +2.32% | -3.76% | -0.07% | 54.23 | 2026-10-09 16:00 |
| 에너지 | `XLE` | 65.08 | -0.25% | +3.60% | +0.23% | +45.56% | 65.24 | 2026-10-09 16:00 |
| 헬스케어 | `XLV` | 170.81 | +1.58% | +2.79% | +3.11% | +10.34% | 168.16 | 2026-10-09 16:00 |
| 경기소비재 | `XLY` | 112.85 | +1.02% | +2.55% | +0.79% | -5.49% | 111.71 | 2026-10-09 16:00 |
| 필수소비재 | `XLP` | 83.43 | +0.01% | +3.60% | +0.41% | +7.40% | 83.42 | 2026-10-09 16:00 |
| 산업재 | `XLI` | 169.25 | +0.50% | -0.41% | -0.76% | +9.11% | 168.4 | 2026-10-09 16:00 |
| 소재 | `XLB` | 49.43 | +0.32% | +1.17% | -2.62% | +9.00% | 49.27 | 2026-10-09 16:00 |
| 유틸리티 | `XLU` | 41.41 | +0.83% | +3.97% | -2.61% | -3.00% | 41.07 | 2026-10-09 16:00 |
| 부동산 | `XLRE` | 41.61 | +1.86% | +1.96% | -3.34% | +3.12% | 40.85 | 2026-10-09 16:00 |
| 커뮤니케이션 | `XLC` | 110.38 | -1.51% | +0.05% | -1.00% | -6.24% | 112.07 | 2026-10-09 16:00 |
| 반도체 | `SMH` | 603.33 | -0.65% | -4.32% | +7.68% | +67.53% | 607.27 | 2026-10-09 16:00 |
| 소프트웨어 | `IGV` | 112.67 | +2.81% | +3.91% | +11.33% | +6.60% | 109.59 | 2026-10-09 16:00 |
| 지역은행 | `KRE` | 69.01 | -0.83% | -2.50% | -6.50% | +6.48% | 69.59 | 2026-10-09 16:00 |
| 바이오 | `XBI` | 153.77 | +3.00% | -0.43% | -1.94% | +26.11% | 149.29 | 2026-10-09 16:00 |

### 섹터 ETF 보조 지표 (1M 상대강도 vs SPY · 이동평균 위치)

| ETF | 1M vs SPY | 50일선 | 200일선 |
|---|---|---|---|
| 기술 (`XLK`) | +4.58% | 위 | 위 |
| 금융 (`XLF`) | -6.50% | 아래 | 위 |
| 에너지 (`XLE`) | -2.51% | 위 | 위 |
| 헬스케어 (`XLV`) | +0.37% | 위 | 위 |
| 경기소비재 (`XLY`) | -1.94% | 아래 | 아래 |
| 필수소비재 (`XLP`) | -2.33% | 아래 | 아래 |
| 산업재 (`XLI`) | -3.50% | 아래 | 아래 |
| 소재 (`XLB`) | -5.36% | 아래 | 아래 |
| 유틸리티 (`XLU`) | -5.35% | 아래 | 아래 |
| 부동산 (`XLRE`) | -6.08% | 아래 | 아래 |
| 커뮤니케이션 (`XLC`) | -3.74% | 아래 | 아래 |
| 반도체 (`SMH`) | +4.95% | 위 | 위 |
| 소프트웨어 (`IGV`) | +8.60% | 위 | 위 |
| 지역은행 (`KRE`) | -9.24% | 아래 | 아래 |
| 바이오 (`XBI`) | -4.68% | 아래 | 위 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.197 | 콘탱고 |
| VIX / VIX9D | 1.318 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.884 | 1.429 | 534,642 | 1,007,481 | 29,288 |
| 나스닥100 ETF 옵션 (QQQ) | 1.187 | 1.481 | 986,656 | 1,171,286 | 11,106 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **Reuters** · Saudi Arabia reports injuries in new attack at Riyadh airport, day after strike kills 13 - Reuters
  - 2026-10-11 16:06 (ET) · https://news.google.com/rss/articles/CBMiyAFBVV95cUxQSEo0VkFTZkY2VzMzeFV0OVRVbWN4aHFzaXFjV0FBN05uaEFONHhQVTN2a3JJM09NdFBzY1R3MnRrUFZOeFZfUDItOUd1NkxiT3dfOWduTHJKTlBzSGsyN3VCYTNkWG1ZTWlZMUpzbDdrc1dOZUs3VDRwa0lHN21tNnFNdFhQYUxoNmdfN1Zyb3FMRm04RzRVei0zY3FKN0FoY2JYTGFodjYtemdITVpKVXk3NlR2QXFIMU9YMnUtX004QW1GZ0UzZA?oc=5
- **CNBC** · Here are the 6 big things we're watching in the stock market this week
  - 2026-10-11 15:46 (ET) · https://www.cnbc.com/investingclub/2026/10/11/here-are-the-6-big-things-were-watching-in-the-stock-market-this-week.html
- **Reuters** · Strike reported on Yemeni Sanaa airport, Houthi-run TV says - Reuters
  - 2026-10-11 09:43 (ET) · https://news.google.com/rss/articles/CBMirgFBVV95cUxOb2hZZTRZLXk2amlHSS1zWkYtUmkzdy1EUWRFZ3lRUzRLX2hOMkxkLXBSR1hnVmd1UkNrN0NpNXNneXgwcGJ2ZzgwRFRRUVo5QS1xSWlENjhWN1M0MGR5eFpPOVZQT0dMUGRWcTQ1YTN3aHhpTjZVVGVqSldfcDN3SFZTQTJSMTUyX1psaXpyb2VKTVU0OGIzeFViOXZGVnRGb0lvTDNVdERoX0tHaHc?oc=5
- **Reuters** · Most Gulf stocks in red after attack on Riyadh airport - Reuters
  - 2026-10-11 09:19 (ET) · https://news.google.com/rss/articles/CBMiogFBVV95cUxOOEliNzFKYlR3T0NNakk4TWxXWGJ0UlJfQ0JLdFVIRnlESENoRW4zdjNSWW02UjFJOFozRmlZdVZ2ZlFaOTFSdEc5RGd6QWVVaFFMNi1QRTdMSVg2dFQxaHROcjhjbnI4ekhnZUZVbXlmYVBQaDZ3TG1pcFQ5RnFaVXpfYUxWRG1acC1mYnR6d3ZtdXpxbTBBUFJkcU9ock1wbXc?oc=5
- **CNBC** · NBA commissioner Adam Silver says league could introduce ‘smart ball’ technology as soon as next year
  - 2026-10-11 08:00 (ET) · https://www.cnbc.com/2026/10/11/commissioner-adam-silver-nba-could-launch-smart-ball-tech-next-year.html
- **Reuters** · Yemen's Houthis renew warning to airlines, travellers against using Saudi airports - Reuters
  - 2026-10-11 03:34 (ET) · https://news.google.com/rss/articles/CBMiywFBVV95cUxNMUlyV0IybXFzanN6N1FSS3JuaEljNFhGMWtwXzJwR3g0S0NTVkNvUW1CSW4tSWxzY2txeTAxZGxvR2Y2RW53cklmbF8tNGVpaEFTRXlMeW15RkpkVGQ3clNwejJoOXBmQnhYd1ZXWGFJMVVBZ1hpUGFPWDdXeWV4LU1ORFVoekJleFlnOHFRenp4d29OVmV4U0c4eUJJY051RGFna01qMUJ2WFp3cGdHUm5kV0lSZ1hMMFJpdExQN21wMkJHcm1GU01yWQ?oc=5
- **Reuters** · Middle East war, high debt levels to dominate IMF-World Bank meetings in Bangkok - Reuters
  - 2026-10-11 00:03 (ET) · https://news.google.com/rss/articles/CBMivgFBVV95cUxQWlZqTVZkYlUxR2xKODRtSHFhLUI5ZVk4MWlwUURPZTRJSy1UYjdKak1ZbzdGMG80dmNOTVlVbUtvbW1zUU9hWE5QeU9xc19wWE50TnR4M05sQ0c0aFI0ZmYtTGN6Q0hwanJUajNzSlRfaVBQNXdPMUlfQlpfb1JHTGlQWkg5aVdOTE5SZ29NRXZLSW85enZHa2dCOVFSWmFpUEptcWMxa1JxVW15ZGhLLTRRcDEyeXBEWkw0RnJR?oc=5
- **Reuters** · US military says it disabled cargo vessel trying to run Iran blockade - Reuters
  - 2026-10-10 21:35 (ET) · https://news.google.com/rss/articles/CBMirAFBVV95cUxPV2Nqd2RXZnpaY3lzeHVxN2Y0VC1ZZEpTSlFVeFpYbW1nQUZqRE5kSGt1NXo0TTFQQmtLSnFFX045Qk1pc2lpMWxXaGxfVkxxazIwNVdVYl82TWJZa2VURkhNWllYX1I1Vk00OFZoNzNNRmRQLURKVFpKbVVaVzZ4SjloWnB0SE1WTi1MWEp3TWttQ1h3MkpDcktydGU4MzdvVDlJS0V3Zk8xRkpp?oc=5
- **CNBC** · Stocks saw new highs and big declines: How the volatile AI trade moved last week's market
  - 2026-10-10 11:28 (ET) · https://www.cnbc.com/investingclub/2026/10/10/stocks-saw-new-highs-and-big-declines-how-the-volatile-ai-trade-moved-last-weeks-market.html
- **Reuters** · Israeli strikes kill five people in Gaza, medics say - Reuters
  - 2026-10-10 11:24 (ET) · https://news.google.com/rss/articles/CBMipAFBVV95cUxPcUhRYkpDR0ViRnlSNjNpcl94N3RPOGdvUHBlaVU0MXU3V2EtX1QwV2NFbGZTX3FtUnlYLTdmNmFIMlgwaHM0a1Z2MjB2UUV2cUNadGRHa1ZwTDJPakJ3d3VONVVwZS1WNnNmLVlkOW0yMXc5VDYxY1F3czY0QlFGSnpremd5UG1IcUlXMEhwNFBSLU9rQ3daalo5b1RvVW5ZajV6Wg?oc=5
- **Reuters** · Houthi strike on Saudi airport kills 12, worst attack on kingdom in a decade - Reuters
  - 2026-10-10 10:13 (ET) · https://news.google.com/rss/articles/CBMitAFBVV95cUxQbV9hVGtMSXpTVDJ3c05vRW9SQ2lRLTg3cUlOeWxDc2w4amF5V2N2Ul9YazdxcHJGNDRwd3hlQi15a2ZGWWZoZnc1dlA5UkY3cU9PclVCNkh6SVkzQ25waEVRRlN2TVdES3lKV1VuVXN6QnJycWxtdkNOdUIwMTdTRE9fbko3Umt5d0huNVY1dW9ZcFpLSF9yczRGRHJfSWZhM1AtTkVzbVR4TlRUdzhIb19JN3o?oc=5
- **Bloomberg** · Wall Street’s rate shock spreads beneath AI-fueled market rally
  - 2026-10-10 10:03 (ET) · https://www.bloomberg.com/news/articles/2026-10-09/wall-street-s-rate-shock-spreads-beneath-ai-fueled-market-rally
- **CNBC** · Pokémon card values are soaring. What collectors should know before buying or selling
  - 2026-10-10 09:30 (ET) · https://www.cnbc.com/2026/10/10/pokemon-card-values-grading-guide.html
- **CNBC** · I work hard to stay close to my friends. A researcher says it’s good for my well-being—and these 3 habits can help
  - 2026-10-10 09:05 (ET) · https://www.cnbc.com/make-it/2026/10/10/how-to-maintain-close-friendships.html
- **CNBC** · How Supreme Court justices are leaning in major 401(k) case over private funds and underperformance
  - 2026-10-10 09:00 (ET) · https://www.cnbc.com/2026/10/10/supreme-court-case-401k-private-funds-intel.html

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · History Says This Will Happen to Palantir Stock by 2028
  - Yahoo · 2026-10-11 15:30 (ET) · https://finnhub.io/api/news?id=a49e2696a4583055214d9d061a13cf0a85d1a660fdd258cbdb0bfa24873bc6cc
- **NVDA** · Nvidia (NVDA) Stock May Be 27% Undervalued Despite Record Highs
  - Yahoo · 2026-10-11 15:09 (ET) · https://finnhub.io/api/news?id=0efb0897df473f4cda25506269ee72898eb0b899584589574ceda4b9edb9b190
- **NVDA** · USA Rare Earth's $2.8 Billion Brazil Deal vs. Its $1.2 Billion South Carolina Bet: Which One Actually Matters More?
  - Yahoo · 2026-10-11 15:04 (ET) · https://finnhub.io/api/news?id=703bbe998e6fe8d75be5181779dcda0c26eb69e874a1e906930a0aba4a4441b3
- **AVGO** · Qualcomm Doesn't Look Cheap Next to Its AI Chip Peers. Here's Why.
  - Yahoo · 2026-10-11 12:50 (ET) · https://finnhub.io/api/news?id=ca42ae2de9ac21427d83ba65727f005cbeea4cac4b575476276bfd195d7167b8
- **AVGO** · How Broadcom’s $42 Billion ‘Loan’ to Anthropic Is a Bet on a $2 Trillion IPO
  - Yahoo · 2026-10-11 09:45 (ET) · https://finnhub.io/api/news?id=eed9826ba2d1b873583dc3468d8e0505b669f90bf777148dfac5a09a9561f449
- **AVGO** · 3 Low-Cost ETFs Spreading Income Across Hundreds of Holdings. One Still Puts 7.35% Behind a Single Company
  - Yahoo · 2026-10-10 12:03 (ET) · https://finnhub.io/api/news?id=b9ef3a927a71c6291bd6495d9e2aa92b06954eb1c40d4e989078877a4fe76410

### 금융

- **JPM** · Stock Futures Kick Off New Week Ahead of Bank Reports
  - Yahoo · 2026-10-11 14:11 (ET) · https://finnhub.io/api/news?id=897ae336595f3def1045b424aa3d55b7597d53c70d2c7856f103bf44602da2eb
- **JPM** · JPMorgan's CEO sends a stern warning to corporate America
  - Yahoo · 2026-10-11 13:47 (ET) · https://finnhub.io/api/news?id=308e897d7633e213af182ed87baaa747a950836e5a649e25475ae94e3fc75291
- **JPM** · Savara Has Lost 30% Since December: JPMorgan Sees 146% Upside
  - Yahoo · 2026-10-11 12:43 (ET) · https://finnhub.io/api/news?id=3440b7046d265bbb888ac198c834098673b11cbb91767a1735b5924171237b4a

### 에너지

- **XOM** · Why ExxonMobil's Venezuela Warning Could Matter for Energy Investors Right Now
  - Yahoo · 2026-10-10 12:22 (ET) · https://finnhub.io/api/news?id=dbe3e25a0d40d0f3b762ac343e60b874a24d4f7bcbf388524c395dccb46c052c
- **XOM** · Chevron’s Dividend Has Survived Every Oil Crash. Can It Survive This One?
  - Yahoo · 2026-10-10 07:45 (ET) · https://finnhub.io/api/news?id=addeab99ab17728680895163d775065861043637e90237aec7390cc8acebfeb0
- **XOM** · ExxonMobil Holdings Corporation (XOM) Presents at Barclays 40th Annual Energy-Power Conference - Slideshow
  - SeekingAlpha · 2026-10-10 03:13 (ET) · https://finnhub.io/api/news?id=999fe2364622227b5b840d50f261738a9c3a142f92aa5fd21cbda1322198512b

### 헬스케어

- **UNH** · Suze Orman warns 390,000 seniors on Medicare plan exit
  - Yahoo · 2026-10-11 14:33 (ET) · https://finnhub.io/api/news?id=90ca36d611d7aa1dd8115050086740c46fc849ce2d3869cdf35f5d3948fe4662
- **UNH** · Wall Street Brunch: Start Your Earnings Engines
  - SeekingAlpha · 2026-10-11 09:29 (ET) · https://finnhub.io/api/news?id=0e1f88e32d684ef29a5ec2cd4b8e528f14b92837c8da37909f2d611a40cee4d4
- **UNH** · Welcome back to earnings season: What to watch this week
  - Yahoo · 2026-10-11 06:00 (ET) · https://finnhub.io/api/news?id=5e8f197db47b7b6d8bd38f3b4d9fa814ebd4707c80004e6fae294f092d1c515e

### 소비재·유통

- **AMZN** · It Now Takes $4.4B To Make the Forbes 400: See America's 10 Richest People
  - Yahoo · 2026-10-11 13:00 (ET) · https://finnhub.io/api/news?id=efeecc16c57e17c46d04074221da4494af5c4c2acfc5edb20566d9cdfd57eaf9
- **AMZN** · Jeff Bezos makes surprising prediction for workers as Amazon cuts jobs
  - Yahoo · 2026-10-11 10:07 (ET) · https://finnhub.io/api/news?id=344489c6a57fd738213f28dae284ec7dcef0e542d000c419b2c1eb9c194af6ef
- **AMZN** · S&P 500 Earnings Expected to Rise 31% in Q3 as AI-Related Companies Lead Growth
  - Yahoo · 2026-10-11 09:18 (ET) · https://finnhub.io/api/news?id=c6553d0c7b6a33aaa0eb8fe2f3b37d5a1a1fe6864438106b13c6caf8af86682a

