# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-09-23 · 생성시각(KST): 2026-09-23 08:41
# 출처: Yahoo Finance chart API · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,832.75 | -0.01% | 7,833.5 | 2026-09-22 19:31 |
| 나스닥100 선물 (NQ) | `NQ=F` | 31,054 | +0.87% | 30,784.75 | 2026-09-22 19:31 |
| 다우 선물 (YM) | `YM=F` | 52,268 | -0.39% | 52,475 | 2026-09-22 19:31 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,914.2 | +0.58% | 2,897.4 | 2026-09-22 19:31 |

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 14.21 | -4.44% | 14.87 | 2026-09-22 16:15 |
| VIX9D (9일) | `^VIX9D` | 12.13 | -7.69% | 13.14 | 2026-09-22 16:15 |
| VIX3M (3개월) | `^VIX3M` | 17.61 | -2.60% | 18.08 | 2026-09-22 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 83.17 | -3.03% | 85.77 | 2026-09-22 16:15 |
| SKEW (테일리스크) | `^SKEW` | 144.8 | +1.84% | 142.19 | 2026-09-22 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 미 10년 국채선물 | `ZN=F` | 106.13 | -0.19% | 106.33 | 2026-09-22 19:29 |
| 금 | `GC=F` | 4,402.1 | +0.42% | 4,383.9 | 2026-09-22 19:31 |
| WTI | `CL=F` | 89.67 | -6.38% | 95.78 | 2026-09-22 19:31 |
| 달러지수 (DXY) | `DX-Y.NYB` | 100.56 | +0.13% | 100.43 | 2026-09-22 19:31 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.239 | 콘탱고 |
| VIX / VIX9D | 1.171 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.052 | 1.410 | 2,224,538 | 2,340,225 | 30,470 |
| 나스닥100 ETF 옵션 (QQQ) | 0.877 | 1.390 | 4,547,953 | 3,986,300 | 10,826 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **CNBC** · Qantas to start selling tickets next year for its New York to Sydney nonstop flight
  - 2026-09-22 19:00 (ET) · https://www.cnbc.com/2026/09/22/qantas-flight-new-york-sydney-nonstop.html
- **Reuters** · Trump threatens to annihilate Iran as diplomats push for deal at UN - Reuters
  - 2026-09-22 17:55 (ET) · https://news.google.com/rss/articles/CBMiqAFBVV95cUxPMHFVWHVmRkJDV09JMHNSQ2RvNk5zS2NwN3lwZ3lNOFNLd0tUdjZHS09lMUhZdHBCWXZUQ1NJUHh5cUxmYlU4NjNTRGRtWDJ3UkFpb05jS1U2R2huempndzFvVEtqZmV1RjN2cTRJWWYybEpQSkptR2NjLWFySUtUeDdXMmdBd0N4dktqeGN6WjdTOGVfQXZJLVgyX2k1RTlzbDZncmktWlI?oc=5
- **CNBC** · A top chip stock analyst sees big things for Nvidia, Broadcom. How his case aligns with ours
  - 2026-09-22 16:43 (ET) · https://www.cnbc.com/2026/09/22/a-top-chip-stock-analyst-sees-big-things-for-nvidia-broadcom-how-his-case-aligns-with-ours.html
- **Reuters** · PODCAST: Trump's UN speech, ICC sanctions and Turkey's LGBTQ+ crackdown (Updated) - Reuters
  - 2026-09-22 16:31 (ET) · https://news.google.com/rss/articles/CBMinwFBVV95cUxNSUdQTWg2T1FqNWc5SHhjOFdROWIyQjBQUkViWUpjYjhvWFM4V1V2LWJDQzZuRnVmYkVGdDVhUVBkUGYxdWV5bDNSTUNKZThUdjRHZ2VsbDFVeHNzcDdmVjdPRC14cnMzT2xVOEFnMUw4ai00VmRWZHFUWlZvd29oR0gwWWdNcEJwdi1OcGFHVWNNdHRCNmFvdzA5SjhEdFk?oc=5
- **Reuters** · Trump warns in UN speech he could 'annihilate' Iran without peace deal - Reuters
  - 2026-09-22 16:20 (ET) · https://news.google.com/rss/articles/CBMisgFBVV95cUxOOFdkQk9aWHdzT0hrcFhDNDZPSmlwQVBUUm12TGd4SUVPUURUMVo4Y3I0WHZBSTIxdjdKTWZ4WkF3cVUzUnlrWmNrbTA5T21UN3R0Z0JnekdrZm5ReC1ZS2JmUWVQRXRVNzhaYmNucDI5YVh6d2JxeHp5Yi00Y3p2d0loRTY5YXNiWGRHTlJZb1ZiX1paMVh3UU1XVThfUXR2NHF3T0pod3BBS3VpU3AyTDB3?oc=5
- **Reuters** · Iran submits conditions for reopening of Hormuz to U.S. representative, state media says - Reuters
  - 2026-09-22 15:46 (ET) · https://news.google.com/rss/articles/CBMiyAFBVV95cUxOYVI5Zk1aX3RhYUR3djFoUE4wTGo1cEJscDJwelUwamFLQV9WVEh3OU1BcFhkOGJKWWtCVXFPSndFUUpFV2xvWWctLTQxVWFlWmE0d3ctNmJuYzVDLXJSdjdwaktKWFREMVBQeUlZakZvalZOQTAtSlQ5UzZFQkFlUVZPblc2bEE5dzNVRV9pTzM2ZkxURHlFMzVlamZCWG50RUlkaVd5MDc4MzZTbWp1N1J1Y3NnQnUwMnFNRjhWMnd6Y0Z1LWp5NA?oc=5
- **CNBC** · Royal Caribbean nears $3 billion deal to take 50% equity stake in Sandals
  - 2026-09-22 15:33 (ET) · https://www.cnbc.com/2026/09/22/royal-caribbean-sandals.html
- **CNBC** · Cisco stock sinks 5% after Piper Sandler cuts price target on growth concerns
  - 2026-09-22 15:21 (ET) · https://www.cnbc.com/2026/09/22/cisco-stock-piper-sandler-price-target.html
- **Reuters** · Trump at UN: Threats, diplomacy and 'super intelligence' - Reuters
  - 2026-09-22 15:09 (ET) · https://news.google.com/rss/articles/CBMilAFBVV95cUxPb05jNXUydzFHZ2tRUzBGUndIZFAxTW1jYUtVU3U5NzI1ZjRsckp2YXJuOG9KRE9hOTg1Q3B3b3U1ZC1jWmN1d2J0VU1OMkVfbElFRGhONElJd3I4UklnbVZHTExmT1g2dHFESmJhQWplNWlYUzZsU1ctMW9HRVBXVDJGazNhd1JDbWltQ0hEYmttU2hh?oc=5
- **Reuters** · EU renews Russia sanctions, drops Russian billionaires Usmanov and Fridman - Reuters
  - 2026-09-22 13:37 (ET) · https://news.google.com/rss/articles/CBMisAFBVV95cUxNMnhFeHB1dlJzNUFaZkYzM0d3cFNyaDI3bFo3VjJFYW5wc0dhandneXlLVkstbVhfd0REaXJrUmx2TF9tRTd0QzdoTExocDNHSFhwVTlVRkZ6RzhKMU4yckMwNzEzS0xtalhQQl9vSkpBdjRxbUFVczFVc1NEQVJQM3R0NEdaQThjX0owTkdxbUcxb3JuM1c3XzNCVGN4dXV4OTNBeEQ3bURQWGxnRmdaVw?oc=5
- **Reuters** · Trump says talks with Iran continue and he thinks settlement will be reached - Reuters
  - 2026-09-22 13:09 (ET) · https://news.google.com/rss/articles/CBMixAFBVV95cUxPN3J1Q19pcFNqX1dZdk1GNllCTzNBWWlmWHB3bF9nMGNrcEdvUjc2anM1bndiLWFOYlVjRl9qeTBKby1qaW1zaWY1ZEU1ZEFnM3RTWXB5WUFwNTczcjlOT2ZXc3pfdW1nNFJzY185Wkkxc0UzcEstaHhxNVhHMk0zbERBc2lQTGtKY0dyaGhTWHg5LW5TZUZITXFwTklFcmZadVh4eks3Q1VZeGFGUm1QTW5yV3MzOVZBeFp6SGp1U09NNThl?oc=5
- **CNBC** · Nvidia options are doing something unusual ahead of two catalysts. Here's how one trader is playing it
  - 2026-09-22 12:58 (ET) · https://www.cnbc.com/2026/09/22/nvidia-options-are-doing-something-unusual-ahead-of-two-catalysts-heres-how-one-trader-is-playing-it.html
- **Reuters** · Turkey's Erdogan urges UN reform, wider recognition of Palestinian state - Reuters
  - 2026-09-22 12:39 (ET) · https://news.google.com/rss/articles/CBMivgFBVV95cUxNSThYSHV3S2NvRFpqMU1uTkFwSEFLYVJXLUZMQ0kyM0hhNGJ6N3RMNS0tYVRTVWczMGVZaldiLUF0VDRLOEhUdXJNN3hEMTBmYm13aDlhU3Bqbm1YMFBlMVhxcGozUmZLWFJhV2NqeVE0NmFRb1dEellicGhxTFZza0VkN2xjS0NVUE5PTE5EWWlGUEx5T3p3ZmpoLVV4RGJOZzRFUUtqWFlsX0RyZGhGMmlUcDhxQk01QS1GVHFB?oc=5
- **Reuters** · Nasdaq hits intraday record high on tech boost, Mideast negotiation hopes - Reuters
  - 2026-09-22 12:27 (ET) · https://news.google.com/rss/articles/CBMipwFBVV95cUxOOUI2bTZ5ZFhnZUozYjg5LXM1WHhuT24xUS0zYmRRZkViWVBreE05ZTNMWFBDSGhHTXUyQ3ZyMWhsUFdxSUlxUXVUUXVHWGRVelg3Z2RuVXo3bndwaXJfRXhEUEFERFNSUVZoaDNERnFxdnhuNkxLdVhnNDRpRGhxYndETzVJdVNnZXJESmpMNmw5QVFQODFGY2w2NzVCcFl0bXBSNjRaTQ?oc=5
- **Reuters** · Banks, telecoms weigh on FTSE 100; focus on US-Iran talks - Reuters
  - 2026-09-22 12:11 (ET) · https://news.google.com/rss/articles/CBMiqgFBVV95cUxQZ3JCUDhubW1Yb0o4bFpaMFdtVE9oYVVuUll5R0tpVS1YNXpjd285eWxWa1ZDUklJd0ZBNnZJdnJQdEVnZmJ6czA1TEYtMmFhNjlUcWZGeDdhMFdpNXRJd21TaWlmcjRiWTBHNEpDVmg2U0RicWlnUWNWRFkyUy01WXA4c09OREpKM2JNWUk5dHEyNDQ0SWM1U3BudkhJUENDWXVjdlUyRl9nZw?oc=5

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · 3 Monthly Income ETFs to Buy Once That Have Paid You Every Single Month for More Than a Decade
  - Yahoo · 2026-09-22 17:45 (ET) · https://finnhub.io/api/news?id=49523b64032dbd62d2f615ba6397c253636bb19be6ef3602f3e5329db83ddbd2
- **NVDA** · JEPI’s 4.42% Gain Looks Modest Next to FYEE’s 12.4% Run in 2026
  - Yahoo · 2026-09-22 17:35 (ET) · https://finnhub.io/api/news?id=98f0833cf12dd65e061b16ff846203e0db1310ceab52f159a5eda56cdc169e52
- **NVDA** · Micron vs. SanDisk: Comparing Two Red-Hot AI Memory Stocks
  - Yahoo · 2026-09-22 16:57 (ET) · https://finnhub.io/api/news?id=0dc3b45bc78fe147c4dbcad938b62700559a26eaa41bd0fc28e272cbaf8caa1e
- **AVGO** · AMD Stock Just Sent a Huge AI Signal
  - Yahoo · 2026-09-22 15:07 (ET) · https://finnhub.io/api/news?id=0a8e4d9f85eb3886d87d720ed8c87f443770bada2ce1f8dd2ccd85b5c0af282b
- **AVGO** · Apple’s New CEO Is Already Being Pressured to Drop the Chinese Chip Deal Tim Cook Fought to Keep
  - Yahoo · 2026-09-22 14:48 (ET) · https://finnhub.io/api/news?id=bf1a18ea6dcab46d1e9c1c3f888e64bef5e7c4199dd2146e2be063091114492f
- **AVGO** · AMD Stock Just Entered Rarefied Territory
  - Yahoo · 2026-09-22 14:04 (ET) · https://finnhub.io/api/news?id=70c546de870271bf888ccf8c1b8739d461f06a925a9ede3bf59e52fe4069ed05

### 금융

- **JPM** · JPMorgan Chase & Co. (JPM) Stock Moves -3.34%: What You Should Know
  - Yahoo · 2026-09-22 17:45 (ET) · https://finnhub.io/api/news?id=8c236832d9da0a78bc6284e524df643d1373065f4438890eaf78965c57b2ec7a
- **JPM** · Tuesday's session: top gainers and losers in the dow jones index
  - ChartMill · 2026-09-22 15:10 (ET) · https://finnhub.io/api/news?id=d1a0fa717a3205c82feb1b910304a2237ef6e5907fe442d635e0bf4fae4efbd3
- **JPM** · Charles Schwab, JPMorgan Chase Slide On Vanguard-Backed AI Threat
  - Yahoo · 2026-09-22 14:22 (ET) · https://finnhub.io/api/news?id=56dfba9ea80de5f3e1e45e5b3fd289e973770965e8e213b39bb580bfcb22daf9

### 에너지

- **XOM** · 3 High-Yielding Dividend Stocks That Are No-Brainer Buys for Retirees and Risk-Averse Investors
  - Yahoo · 2026-09-22 13:23 (ET) · https://finnhub.io/api/news?id=4608eaaf06be6e2560b32568e717851e67c0a20ca4cb05674dec02b71777f328
- **XOM** · 4 Integrated Energy Stocks to Benefit From Industry Tailwinds
  - Yahoo · 2026-09-22 12:06 (ET) · https://finnhub.io/api/news?id=1665d862e52e1ad8791e2c35b5ab0fe5f8e2590d9e2ce4903f5f891db4d3bd7a
- **XOM** · Exxon Just Set a Bold 2030 Target for LNG Sales. Here's What 50 Million Tons Actually Means.
  - Yahoo · 2026-09-22 12:05 (ET) · https://finnhub.io/api/news?id=8e2a70bf6ae3dcd65bf656c250db94201ab6c91d73b4961a645d452c0e5b5864

### 헬스케어

- **UNH** · UnitedHealth Group (UNH) Stock Moves -1.26%: What You Should Know
  - Yahoo · 2026-09-22 17:50 (ET) · https://finnhub.io/api/news?id=95cb009595e3fad16f113b2ed8bdb2f91aa05d40fc1b740af40b22f0cda02f1e
- **UNH** · Tuesday's session: top gainers and losers in the dow jones index
  - ChartMill · 2026-09-22 15:10 (ET) · https://finnhub.io/api/news?id=d1a0fa717a3205c82feb1b910304a2237ef6e5907fe442d635e0bf4fae4efbd3
- **UNH** · Can UNH Stock Keep Growing Earnings While Its Sales Stall?
  - Yahoo · 2026-09-22 14:09 (ET) · https://finnhub.io/api/news?id=34b69edf2a74f0cb424507a082f3bdd474474b0b9314bc154e1fc4d76ca78ba1

### 소비재·유통

- **AMZN** · Amazon.com (AMZN) Blocks Rival AI Shopping Agent On Its Platform
  - Yahoo · 2026-09-22 17:14 (ET) · https://finnhub.io/api/news?id=7d96e1f939a7d93111edee3ea421edb3a4bc9f031b1392f9a3a21031cd0ae943
- **AMZN** · How Much Upside Is Left In eBay Stock?
  - Yahoo · 2026-09-22 17:10 (ET) · https://finnhub.io/api/news?id=03325dbe4b893c52a67cdb22b127fcf3172519a39fac67a8fef43b165b6a8922
- **AMZN** · GREEN FUEL FORWARD EXPANDS INDUSTRY ALLIANCE TO SUPPORT SUSTAINABLE AVIATION FUEL ADOPTION IN ASIA
  - Yahoo · 2026-09-22 17:00 (ET) · https://finnhub.io/api/news?id=5c93470d3a6fedadd6dcb542d890ba9eae197563c46d8520a158699dba9015fa

