# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-09-25 · 생성시각(KST): 2026-09-25 06:30
# 출처: Yahoo Finance chart API · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,759.5 | -0.17% | 7,772.5 | 2026-09-24 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 30,736.25 | -0.09% | 30,764.75 | 2026-09-24 16:59 |
| 다우 선물 (YM) | `YM=F` | 51,670 | -0.39% | 51,873 | 2026-09-24 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,854.4 | -0.20% | 2,860.2 | 2026-09-24 16:59 |

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 15.67 | +3.23% | 15.18 | 2026-09-24 16:15 |
| VIX9D (9일) | `^VIX9D` | 14.11 | +4.91% | 13.45 | 2026-09-24 16:15 |
| VIX3M (3개월) | `^VIX3M` | 18.43 | +1.77% | 18.11 | 2026-09-24 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 90.57 | +2.22% | 88.6 | 2026-09-24 16:15 |
| SKEW (테일리스크) | `^SKEW` | 146.04 | -0.08% | 146.15 | 2026-09-24 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 미 10년 국채선물 | `ZN=F` | 104.61 | -0.40% | 105.03 | 2026-09-24 16:59 |
| 금 | `GC=F` | 4,310.1 | -0.19% | 4,318.4 | 2026-09-24 16:59 |
| WTI | `CL=F` | 94.76 | +2.82% | 92.16 | 2026-09-24 16:59 |
| 달러지수 (DXY) | `DX-Y.NYB` | 101.27 | +0.17% | 101.1 | 2026-09-24 17:20 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.176 | 콘탱고 |
| VIX / VIX9D | 1.111 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 0.968 | 1.426 | 2,588,947 | 2,505,517 | 30,182 |
| 나스닥100 ETF 옵션 (QQQ) | 0.937 | 1.430 | 4,912,093 | 4,603,167 | 11,566 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **CNBC** · History shows financial calamities occur when rates rise rapidly like this: 'Something always breaks'
  - 2026-09-24 16:57 (ET) · https://www.cnbc.com/2026/09/24/history-shows-financial-calamities-occur-when-rates-rise-rapidly-like-this-something-always-breaks.html
- **Reuters** · US Senate rejects Democratic-led resolution to curb Trump's Iran war powers - reuters.com
  - 2026-09-24 16:34 (ET) · https://news.google.com/rss/articles/CBMivgFBVV95cUxNMU45a3FvODBzSXpndWg1QUVuQzlqUmVJWjZEWUFXNWltVUx0Sm4zbDE1X3lFSnFYd2hQeGotT1YtejB1NU9lZDJKcnJjeEZqNkJtZkQ0anhFUG92V3pWLXlyQzhIalFwTzRuVnVvd3BGQ2tfYTJ3RUxMRlhlWTdTUFE3MnAzMUxmallxcE9SZU5ldmxJeE1fYnhyT0c5eG9lVXVydVg2TFhnbnFJYUFsOE56U194eTltTnc2bGFR?oc=5
- **Reuters** · S&P 500 ends marginally lower as investors focus on US-Iran war - reuters.com
  - 2026-09-24 16:17 (ET) · https://news.google.com/rss/articles/CBMisgFBVV95cUxNdkxPUUdXbDkwcTdtbC1yM0NWMldPb2lpeExQRVh2SVFWQUl4Q3haSlp4U04yU1BoanNVeWF5bTIwbWJRQXVEQkIwMm0taFZ4eDJ3dUVjOTVuSWhEMVRZNV9vdUNab01CS1o4aUpoQVE5TmFqV1BMTFVaZVJzVEFES3Y4S1BLZFQ1TDFtR2dLZklJRkdFN3hTaENjVDhSc05sT1BVZ09idlU1ZGkwdTZLRi1n?oc=5
- **Reuters** · Netanyahu's fleeting visit to New York mirrors strained US ties - reuters.com
  - 2026-09-24 15:43 (ET) · https://news.google.com/rss/articles/CBMiswFBVV95cUxOU0dMX1dTN0FUMTNHM3B6Yi0zelh2NDZKR2toOTJlYmZlRktKVW91TVV2YlJ2M1E4Qy1BTmlGb2Y4NUJURWstS1J0OEhaRWg0LWt6eHBDV21hYTNfS2F3M3BUNDkzQVAwV3g1WUJxWVZZa0xfRWlUeXptSzNNTUxZenBaMEtYcXYwU1pQck1qT2NZcmw3bTFWVkJhV3lMM2w0SzNaZVMtZWFFdHY4U1o2V1UwWQ?oc=5
- **CNBC** · What must happen for Boeing stock to get unstuck. The company needs, at least, to do its part
  - 2026-09-24 15:27 (ET) · https://www.cnbc.com/2026/09/24/what-must-happen-for-boeing-stock-to-get-unstuck-the-company-needs-to-do-its-part.html
- **Reuters** · Houthis say they attacked Riyadh and Aramco facilities in Yanbu - reuters.com
  - 2026-09-24 15:24 (ET) · https://news.google.com/rss/articles/CBMirwFBVV95cUxQMWlXS0IwYk9WRDdxeGk1MmxybUpOa2lqYWN5Zm8wckN4ZVJJQUlCNXBJUkpsdXdTT240ZDhHMmJOWEszcHJUZDZscy1ibVkyZjlEUm03c3ZXZHlEanBFcE5Wa3A3QjVabTdPRTgtcnd5bWRhcVB0M0hEbW5QTUN0R2R3clB2OV9YblRYREFsY0NLU3ItMTFqRlFoRDVyV00zWnVoTUNzQ1ZDXzV1aUVN?oc=5
- **Reuters** · Dozens of delegates walk out of UN hall at start of Netanyahu speech - reuters.com
  - 2026-09-24 15:23 (ET) · https://news.google.com/rss/articles/CBMirwFBVV95cUxPekk0eU1sNTF4VFZQZ0diQ1d2R05UZVN3a011d1JBeDJRemY1SGU2eHQwemxHcnNQa0JkLXpReklrN0FZR19pcW80NkFCMU1JTmptX3Y0UUVzWWI4YTlhMklyQ2dzbFZEaDRodUk2NTNPYVB6ZF84TkxJa3VMcUduOEtMdkdaa3ZUTS02QVFlWmhwYi1ubEtDbFRHa19Xc0hHREp2SHU5dTVyaHFxeTgw?oc=5
- **Reuters** · US Senate rejects resolution curbing Trump's Iran war powers - reuters.com
  - 2026-09-24 14:51 (ET) · https://news.google.com/rss/articles/CBMipwFBVV95cUxNODVQSjliMlBWTFZPaHV3aXY5Y3hMVGl0dWc0bTRDdGxOU1NhOXZJVmx1eWh2Q3VmX0h3UWZnOVZlODRXcEU1LVNtWHpVSDNVOGpmU3BWVVNzUzd1T1d5UlRLcktuVENkeGpMem1FcmJkUWVoR1dpMFY0QnZ1ZDZZV0pHczRpOWI4ZnZtRS1CdGUzQlZMUlRzazU5dk9yZUl6NjdlMlNFSQ?oc=5
- **Reuters** · US and Iran discuss phased deal to reopen Hormuz and end US blockade, sources say - reuters.com
  - 2026-09-24 13:52 (ET) · https://news.google.com/rss/articles/CBMiwgFBVV95cUxNYXMwQlBmRVM4WXVFeXhQVkcyYnpaUzE3dk1wUWswS3pZWDBKTGNWVEpqdFNsWXZEYm5PQ3pSVmRhVFl1empQN3p6SFY0YTVHRmxxNWpxbXFNWVlCOEF5T0tBLVp0MzNyWVlyQnpkbUtyVzNTeGtxQXZVc3hhb0E4aVV6bU5QVEdHMFhCaXRhV3hxQVJ3MWRXNF9tNG5EeUVzcTdEOUhGSExiS3F2SUlkS2xzRk1mNlg4bkRhR0FoaE5QZw?oc=5
- **Reuters** · New US sanctions shut down Iranian flights - reuters.com
  - 2026-09-24 13:27 (ET) · https://news.google.com/rss/articles/CBMiygFBVV95cUxORXFRdU50SU1neUhFbzk2V2JmSXRiRDFJbm5BR1VFaWp6NXhaZ2hRcExwUjJNeHRwVlFNd0xKY2tBWnI4N0c3Tk0zWTFyUHNCSnZJRUw3Znp3bU1UREd5OHo5anJLY21GdkVTa2V1TnQ2ZTVxOGRXSHRfUmIxN0dCRzFSaXJFVWRJOHQzVWE4dTdjcXRZNk5nSVg0eFBEYWd4akJGNWVzbE5rNEhwSVowcUp5SXhHZzV3OVBsUkp3UkQ1RTZvWHNwWTdn?oc=5
- **CNBC** · Meta nears first new high in a year as Muse success showcases winning AI strategy
  - 2026-09-24 13:07 (ET) · https://www.cnbc.com/2026/09/24/meta-nears-first-new-high-in-a-year-as-muse-success-showcases-winning-ai-strategy.html
- **Reuters** · Saudi oil export strategy hits new hurdle as Red Sea insurance costs soar - reuters.com
  - 2026-09-24 12:57 (ET) · https://news.google.com/rss/articles/CBMivwFBVV95cUxQZTRXRkRnZzBpWmo3VklXUlM4NzZOUXZKTjlndXgydERQalUwdHZDV2loS1F4YnRreHRWYlhUb1RnWGt3Nm1NaERsMC1Gb3QxSlZaTWZGWllwbnVwOWhtRkNlc0JFQUdNYTU2X1lTRGxweTBqTk1Gdk5RdTY0NldlUmlSbDgxbGFfM2NqVWk5UHRCTVZCb3NBSS1BcnF4ZHVqVUNlU3Zpd1lyM1BVWkhzT1h0cVZmX0ozQlZUdUFEYw?oc=5
- **Reuters** · At UN, 80 countries demand reopening of Hormuz, condemn Iran, Houthi attacks - reuters.com
  - 2026-09-24 12:50 (ET) · https://news.google.com/rss/articles/CBMivgFBVV95cUxQM2FqSjI2ZndQbE1wOTJFTDVWcmtEdUdiTE9Db0NuOEw0ZkJrWFpkSzdLR25SS3JlWV9qNU0wWDFFUGZpTGFza2hfM1g4d2dxWWlMbVE3MWJDWWM1aXRnU1R6aDhwbmpfdFFiaW5ESUx4N0lfajNjUmZIWVVZRnc2c0hOTDZKc2gxdTdHb1NXS0RFUWJSTzRCUGxUeGotNTNQQWxjZkRJZUUtUTNSNDRqUTFRR0Y0dnZqblJyWV9R?oc=5
- **CNBC** · New York sues Polymarket U.S., two months after filing lawsuit against Kalshi
  - 2026-09-24 12:37 (ET) · https://www.cnbc.com/2026/09/24/new-york-sues-polymarket-us-two-months-after-filing-suit-against-kalshi-.html
- **Reuters** · UK stocks fall as lack of progress in US-Iran talks lifts oil prices - reuters.com
  - 2026-09-24 12:08 (ET) · https://news.google.com/rss/articles/CBMipwFBVV95cUxORHdHT0VLakV1eGx5V2lEejBTV2hZdC02WXdYM3ctdVNtNXA1SURvX25YZjFQeUJfUFVocEFQZ1dUc3RjVnJnX1pTaUxPcEpHdUFkYVYxU01zTGp3bG5yRlRZNmxmcnI3V3JwSUE1VFBWTThOQzVqZHlhWE54bXhhZU85R1FaTkhJNEdTV3ExN1I1YjJqVzZlN0Y3V3dSczVWdE42a1hPVQ?oc=5

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Why The New York Times Company Plunged This Week
  - Yahoo · 2026-09-24 15:43 (ET) · https://finnhub.io/api/news?id=6464902260b076d461eb4b83c8e8db8d013e49b6f0fecc5b808e348e486d160b
- **NVDA** · 5 AI Semiconductor Stocks to Buy and Hold Through 2031
  - Yahoo · 2026-09-24 15:20 (ET) · https://finnhub.io/api/news?id=54a4a4183ec3311ede6a1706d57b429d2ba117c34a2ad67b5e6fe4c50f913d49
- **NVDA** · Berkshire Hathaway CEO Greg Abel Calls AI Data Center Demand a Significant Opportunity for Berkshire Energy. Here's What That Means for the Stock.
  - Yahoo · 2026-09-24 15:20 (ET) · https://finnhub.io/api/news?id=202fcf4ca916b8760b8e947f334288da90b4168db9ef52b70978f7e8cd3ae79b
- **AVGO** · Broadcom Falls 2% as $230 Billion AI Target Doubles the Delivery Test
  - Yahoo · 2026-09-24 15:20 (ET) · https://finnhub.io/api/news?id=8e0cfe0ff85cee3be766c38a3654f8748f5b04025b067857716b511d1ab9a7ed
- **AVGO** · NVIDIA Stock Looks Expensive Until You Price The Vera Rubin Ramp
  - Yahoo · 2026-09-24 12:09 (ET) · https://finnhub.io/api/news?id=b2cec0f0c8333b446c11655aa85db6859126e1e6b45ba6a647111b808895bcc9
- **AVGO** · Venture Capital and PE: A California Perspective on Governance: 2nd LA CorpGov Forum
  - Yahoo · 2026-09-24 12:08 (ET) · https://finnhub.io/api/news?id=49b74febe4335e83ddcd54b304bbf528d667853855da8cd5a6066f2eda1e740d

### 금융

- **JPM** · Office of the President of the Republic of Paraguay and J.P. Morgan Asset Management Announce $200 Million Investment in Sustainable Forestry in Paraguay
  - Yahoo · 2026-09-24 15:00 (ET) · https://finnhub.io/api/news?id=20fbfa18bc7d33a5bfca71b89658be012527c12565ed2196f08b58e20c7b90f5
- **JPM** · Quanta Services Stock Rises on Upgrade. Here’s Why Labor Is the Key.
  - Yahoo · 2026-09-24 13:25 (ET) · https://finnhub.io/api/news?id=60a300c48a45a7db2a5b963c2eafe5b25504023c71fcf7fff611f6d10d510890
- **JPM** · JPMorgan Resets CoreWeave Stock Price Target for 2026
  - Yahoo · 2026-09-24 12:29 (ET) · https://finnhub.io/api/news?id=16811afcfc607c398e27723445348857d41c4f55f002031fd4dfbde89badabc9

### 에너지

- **XOM** · Did ExxonMobil’s (XOM) 2076 Floating‑Rate Notes Just Quietly Redefine Its Long‑Term Funding Playbook?
  - Yahoo · 2026-09-24 12:14 (ET) · https://finnhub.io/api/news?id=d71d14d1d9982ab0cfac5f8c39ea1ee20cde0f347b5e65019b8ff718e465e858
- **XOM** · Caterpillar or Exxon: Which Dividend Has More Room to Grow?
  - Yahoo · 2026-09-24 09:25 (ET) · https://finnhub.io/api/news?id=b38aedaf5a3ae842055603f34f473450e3c137418add7392d2e31ed0eb91355e
- **XOM** · Shale Tycoon Claims Exxon CEO ‘Betrayed’ Him in $60 Billion Deal
  - Yahoo · 2026-09-24 08:43 (ET) · https://finnhub.io/api/news?id=0bb0a2a7ce449e6777c968d9d53c932d9f556c4d69b94f3ea3f978ecff54c218

### 헬스케어

- **UNH** · Stay informed with the top movers within the dow jones index on Thursday.
  - ChartMill · 2026-09-24 15:10 (ET) · https://finnhub.io/api/news?id=39315ae599bd174ef47d4654149a800f3939b9271d7fc496d8612dfacb99059d
- **UNH** · Q2 Earnings Outperformers: UnitedHealth (NYSE:UNH) And The Rest Of The Health Insurance Providers Stocks
  - Yahoo · 2026-09-24 12:56 (ET) · https://finnhub.io/api/news?id=a3b9570b21704737a8da2d51514632fef72358e0a921f5f1c0ece66f58978883
- **UNH** · What Should CVS Stock Investors Be Watching Now?
  - Yahoo · 2026-09-24 12:34 (ET) · https://finnhub.io/api/news?id=c21395e30aacf5f3bd20fbf13e9006f0d6a4e0d20793588da316f5b79e250925

### 소비재·유통

- **AMZN** · Europe misses out on €120 billion in investment a year, report finds
  - Yahoo · 2026-09-24 14:51 (ET) · https://finnhub.io/api/news?id=fb1714bc32819eab978de31d982abc7c0920b098b36e37ab85e3624a40d94d89
- **AMZN** · Amazon rolls out safety tech, pay bump for delivery providers
  - Yahoo · 2026-09-24 14:24 (ET) · https://finnhub.io/api/news?id=34614fbb7f0929df6a3d8face4ee8d325e032ab660a8ed1eef2b55cc52c1b52d
- **AMZN** · Kraft Heinz launches mac and cheese cream soda in Canada
  - Yahoo · 2026-09-24 14:11 (ET) · https://finnhub.io/api/news?id=3b50ce500f20a38c81e7e0eaad6f7aa1d44703e78e5cd0822f9c9916afe42ee9

