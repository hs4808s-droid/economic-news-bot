# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-09-19 · 생성시각(KST): 2026-09-19 08:25
# 출처: Yahoo Finance chart API · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,725 | +1.11% | 7,640 | 2026-09-18 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 29,955 | +1.73% | 29,446.75 | 2026-09-18 16:59 |
| 다우 선물 (YM) | `YM=F` | 52,138 | +0.64% | 51,807 | 2026-09-18 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,880.5 | +0.16% | 2,875.9 | 2026-09-18 16:59 |

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 14.81 | -4.08% | 15.44 | 2026-09-18 16:15 |
| VIX9D (9일) | `^VIX9D` | 12.27 | -8.36% | 13.39 | 2026-09-18 16:15 |
| VIX3M (3개월) | `^VIX3M` | 18.24 | -1.67% | 18.55 | 2026-09-18 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 87.38 | -0.39% | 87.72 | 2026-09-18 16:15 |
| SKEW (테일리스크) | `^SKEW` | 148.1 | +1.65% | 145.7 | 2026-09-18 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 미 10년 국채선물 | `ZN=F` | 105.83 | -0.54% | 106.41 | 2026-09-18 16:59 |
| 금 | `GC=F` | 4,415.9 | +0.37% | 4,399.7 | 2026-09-18 16:59 |
| WTI | `CL=F` | 95.47 | -6.32% | 101.91 | 2026-09-18 16:59 |
| 달러지수 (DXY) | `DX-Y.NYB` | 100.22 | -0.00% | 100.22 | 2026-09-18 16:59 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.232 | 콘탱고 |
| VIX / VIX9D | 1.207 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.134 | 1.404 | 2,363,758 | 2,681,040 | 29,886 |
| 나스닥100 ETF 옵션 (QQQ) | 1.064 | 1.381 | 3,560,283 | 3,787,516 | 10,970 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **Reuters** · US troop deaths during Iran war exceed Pentagon count by at least four, Washington Post reports - Reuters
  - 2026-09-18 18:08 (ET) · https://news.google.com/rss/articles/CBMiygFBVV95cUxNWTJWTFE3dlFIRDVOVDZiY01XQXNxNDI0Z1RiWlFybTFpaEFEQUtpcVRnaEVNUUxPSkl3eFpLc1JzakdRWHNFQWZSUHhQMmQ0T0MtOHBrUjFYTGIzM0dMUmFwNGZPdWhkZUdUSmR1Q29mTHZXNDJuY2d6MllvMXNTM3pGM1BHQmVvQkstdEd2SDE2ZjJ4dXpxdmVSa25KcWJxaUV5eUFrNGFLSUJoT21wNDRieGxuQjFzTXNxU1dFZFlCT3R3aEJESmRR?oc=5
- **Reuters** · Republican China committee chair urges tough Trump line with Xi - Reuters
  - 2026-09-18 15:34 (ET) · https://news.google.com/rss/articles/CBMirAFBVV95cUxNVHE0eGdjejdPVC0wcEJESG1KY3hhNU1DMUZmOHZJUTFjZHRpM1BsLVcwbzVlOUJpVHFxZnBPNzJlTldZelp1WlcwVU5fQ2d2MXZCZS1NSm9uWkQ4MlpHRUQwY21BdU5BRUs2a3ZBODhETlZNd1pTMk94a1NWN3BMaGNHMVl0MWVIeTdWQk9KWVFvS0ZnVnZ1RWJQSlFMcjNVRm1TYkFfMTRvSUY2?oc=5
- **CNBC** · What it will take for us to buy the dip in DuPont. Plus, profit-taking hits cyber stocks
  - 2026-09-18 14:32 (ET) · https://www.cnbc.com/2026/09/18/what-it-will-take-for-us-to-buy-the-dip-in-dupont-plus-profit-taking-hits-cyber-stocks.html
- **CNBC** · McDonald's is the new 'Value Meal,' says trader Mike Khouw
  - 2026-09-18 14:11 (ET) · https://www.cnbc.com/2026/09/18/mcdonalds-is-the-new-value-meal-says-trader-mike-khouw.html
- **Reuters** · Caviar and champagne: Air France's luxury shift helps ride out Iran war impact - Reuters
  - 2026-09-18 13:55 (ET) · https://news.google.com/rss/articles/CBMixAFBVV95cUxPRi1pY1Bqc1lTWGhEbU5ydjdqZFVDQ2RYb3NidmNYTTc4Mkw2WkZFbXNqWlEzS0FVN200UjgwWElaWFlWcTRPSXRIN2Z4YmVDZ2dJdGZ2cnJWMDA4NUNVUnoxS3RuV2IwNDBZVjRSaGFFMTZ6Q3hUeF9fdEg4MEg4VVBtT2hyLTllVmw2QmRCNlVJY3IyVTEzM2hwbnpKTVVnN2hwem9wZmpFQUpaTHpEQTJtUkxnRC1Jc1RFX2Znem1IVmth?oc=5
- **CNBC** · Nike parts ways with Kylian Mbappé, soccer superstar signs with On
  - 2026-09-18 12:42 (ET) · https://www.cnbc.com/2026/09/18/kylian-mbappe-signs-with-on-after-nike-parts-ways.html
- **CNBC** · We're buying more of this defensive stock ahead of an upcoming long-term catalyst
  - 2026-09-18 12:14 (ET) · https://www.cnbc.com/2026/09/18/were-buying-more-of-this-defensive-stock-ahead-of-an-upcoming-long-term-catalyst.html
- **CNBC** · Disney names CTO for the first time as media giant expands tech push
  - 2026-09-18 12:14 (ET) · https://www.cnbc.com/2026/09/18/disney-cto-tech.html
- **CNBC** · What Jim Cramer learned at NYC's flagship Apple Store for the iPhone 18 launch
  - 2026-09-18 11:53 (ET) · https://www.cnbc.com/2026/09/18/what-cramer-learned-at-nycs-flagship-apple-store-for-iphone-18-launch.html
- **CNBC** · Wendy's franchisee files for Chapter 11 bankruptcy protection as burger chain struggles
  - 2026-09-18 11:41 (ET) · https://www.cnbc.com/2026/09/18/wendys-franchisee-files-for-chapter-11-bankruptcy-protection.html
- **CNBC** · Ticket prices rise for Macklemore solo concert after Ed Sheeran tour removal
  - 2026-09-18 11:33 (ET) · https://www.cnbc.com/2026/09/18/macklemore-ticket-prices-rise-amid-ed-sheeran-tour-fallout.html
- **CNBC** · Sportsbooks remain king this football season, but upstarts are making a run for the money
  - 2026-09-18 11:16 (ET) · https://www.cnbc.com/2026/09/18/sportsbooks-remain-king-this-football-season-but-upstarts-are-making-a-run-for-the-money.html
- **Reuters** · Barefoot and terrified, Yemenis flee the Houthi advance - Reuters
  - 2026-09-18 09:07 (ET) · https://news.google.com/rss/articles/CBMiogFBVV95cUxNSFEzVUdGUG54cExaTHZXbTQxc0FKNndwcWh5V2RhakFnYTlESUY5dTVfM3B4clN4U3BTai12dE9HVXRkbzQ3QkJwazRNaVNjWkN0MVh4a0d6eW85Yk1INlJXSU5LZmNnSXd4bFlKLU5BaHUwRTQyT1M3TDdwdXVqNVZKbTZhSVZsc1Y0OWJxTXBETk55bUp5d1AyLTFkaUszUWc?oc=5
- **Reuters** · COMMENTARY: Global rates reset, AI angst and oil's long haul: The financial week in five charts - Reuters
  - 2026-09-18 08:32 (ET) · https://news.google.com/rss/articles/CBMi1AFBVV95cUxPcVJSOWZtYmJPZXkzZmtfazJwd0xSQ19KTXVYX095aFdSWXk2MnlueWRtR0NrZzdudF9objBxd1BUYjA1QkRwZHFWYUF4WjBfVXluYVJGSFRRM01veW56dVphanpjaDUzTHpSTE1ISDRnMTc4Y05VOF9SX0pZMC1LOHlESVNrOF9YbFlJQnZ0M19TcWt1a0ppVXh6LXRIOWljdEs1STg3ZlZDTWRWSzZjczkxRk1lbFYyaGN2MXdCQnMxa3M2enZGSFcydVFmNjI0amQtZQ?oc=5
- **Reuters** · Italy's minister calls for more ships to protect Red Sea navigation - Reuters
  - 2026-09-18 08:09 (ET) · https://news.google.com/rss/articles/CBMiswFBVV95cUxQd1ZpMF94eC1HRWJjbjQxRlhMcjdnQ3RTdjk4OERmeFdLdms5R1FCZzdybkU0Zl9NbzktTVk3aVUzcDdHSDBKSlJLUjU4TlVkX1lDaER5ODF6VV9LNFdmT3NSQWhCYXB4SnhTNU9DSGF0aG84WENEVlM0MFdDWXkzdDJ2VVRLZHMzZTUtODdrZ09zUE1uNzlVTWhUTUZtallJajhncmdUQjFhckxOVWdQZ0xyRQ?oc=5

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Why Gemini Space Station Stock Jumped 31.2% Today
  - Yahoo · 2026-09-18 17:54 (ET) · https://finnhub.io/api/news?id=c15840811b5281dd8acfc7b6f7e579f9ee045f0c06dfcd9b1649707c01f2a5c0
- **NVDA** · Micron Turned $10,000 Into About $130,000 in 5 Years. Most of It Came in the Past 12 Months.
  - Yahoo · 2026-09-18 17:51 (ET) · https://finnhub.io/api/news?id=cb149a1b9c53bb6aa2904326b09ad9f277e28f169bcf6f363ca6c719e2e90e0e
- **NVDA** · Nvidia-Backed Cloud Platform Nscale Files For IPO — NVDA Stock In Focus
  - Yahoo · 2026-09-18 17:31 (ET) · https://finnhub.io/api/news?id=50c1c34384df051ae4f5c121e78eeedff943bd3ad02020e5a77f55b71b84a5e2
- **AVGO** · This Little-Known Chip Stock Has Doubled. Wall Street Is Getting Bullish.
  - Yahoo · 2026-09-18 13:47 (ET) · https://finnhub.io/api/news?id=30a8b1e4bdd7b64d1f60ed9c883a5a74ebb2b0c7066eacda8ab0268bd4d767f7
- **AVGO** · Why XLK’s Next Rebalance Won’t Fix Its Massive Concentration Problem
  - Yahoo · 2026-09-18 13:25 (ET) · https://finnhub.io/api/news?id=4c46bb5bb25a9a305053016c76c3c821e7ee9c57c5f56549ae6ea9248f2eade4
- **AVGO** · Cisco Drops 8% in 3 Months: Should You Buy the Stock on the Dip?
  - Yahoo · 2026-09-18 12:55 (ET) · https://finnhub.io/api/news?id=2228853bbeb59258666739eb1c3f0f0b2a70a6b963eb625d9585b7a45b7b1903

### 금융

- **JPM** · IREN (IREN) Stock Fair Value Edges Lower As AI Cloud Wins Meet Build Out Risks
  - Yahoo · 2026-09-18 17:14 (ET) · https://finnhub.io/api/news?id=d43d18302ae4df46efeb3af588f427c96e887edfe2812150144ffffc5e3ad26a
- **JPM** · PG&E (PCG) Stock Fair Value Edges Lower As Analysts Split On Wildfire Risk
  - Yahoo · 2026-09-18 16:10 (ET) · https://finnhub.io/api/news?id=6d9e54613cab287254498725254e0fb44ee163e00127ee043e12f346e8ac2bdd
- **JPM** · 500th Episode: Investing Tips from 11 Years of Podcasting About Stocks
  - Yahoo · 2026-09-18 15:24 (ET) · https://finnhub.io/api/news?id=33ca26eca14acc1a9f058b0b6fcbc1d6a94bd88ff2e8a2b31c1a03b2653b01f3

### 에너지

- **XOM** · Ranking the Safest Dividend Stocks in the Energy Sector Right Now
  - Yahoo · 2026-09-18 16:35 (ET) · https://finnhub.io/api/news?id=da7300a1373f52d0e1d0409b7885de59e829f4e128129ac705920cef18a62e86
- **XOM** · 500th Episode: Investing Tips from 11 Years of Podcasting About Stocks
  - Yahoo · 2026-09-18 15:24 (ET) · https://finnhub.io/api/news?id=33ca26eca14acc1a9f058b0b6fcbc1d6a94bd88ff2e8a2b31c1a03b2653b01f3
- **XOM** · ExxonMobil's Advantaged Assets and Refining Strength Drive Outlook
  - Yahoo · 2026-09-18 13:08 (ET) · https://finnhub.io/api/news?id=b36990c925bad014aee57dd912ea1e7326bdc288f0e3608c1f7e9325ef554219

### 헬스케어

- **UNH** · Dividend Champion, Contender, And Challenger Highlights: Week September 20
  - SeekingAlpha · 2026-09-18 14:14 (ET) · https://finnhub.io/api/news?id=46fedd06c559ba8b3d63e97060c25dad3687b4ac45e0e46d0a2425c82202bb5e
- **UNH** · San Juan Regional Medical Center Teams with Oracle Health to Streamline Patient Flow
  - Yahoo · 2026-09-18 13:55 (ET) · https://finnhub.io/api/news?id=ad070befd4a15557feaca4c63337716e14ae5706195a1c13dacc46865bc857c4
- **UNH** · UnitedHealth: It's Time To Buy This Recovery
  - SeekingAlpha · 2026-09-18 13:07 (ET) · https://finnhub.io/api/news?id=8a1f59bbd063b702b0d001e456cf4b9de59de5c26f46a7ecc0ccd9b2709a126e

### 소비재·유통

- **AMZN** · The ARK Trade Watch: Cathie Wood Cuts Crypto Exposure, Then Reverses Course On CoreWeave
  - Yahoo · 2026-09-18 17:38 (ET) · https://finnhub.io/api/news?id=16d351dd26ced889084d4ef0584e7d0bece3548bebaa64a84fe6b8ff05044c7e
- **AMZN** · Sir Lynton Crosby, CT Group Executive Chairman, on the Case for Capitalism
  - Yahoo · 2026-09-18 17:06 (ET) · https://finnhub.io/api/news?id=f125c282aaf3fa35b7d503e47811e6597747a32bfdd61cab499b5e92e240e8e5
- **AMZN** · How Big A Swing In eBay Stock Are You Actually Holding?
  - Yahoo · 2026-09-18 16:26 (ET) · https://finnhub.io/api/news?id=053da4452cc1e6f496d635d0e0374e69dc1b8d724b324aee1f0d4f377f2e1d29

