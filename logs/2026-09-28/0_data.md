# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-09-28 · 생성시각(KST): 2026-09-28 06:30
# 출처: Yahoo Finance chart API · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,803.75 | +0.47% | 7,767 | 2026-09-25 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 30,889.25 | +0.40% | 30,766.75 | 2026-09-25 17:00 |
| 다우 선물 (YM) | `YM=F` | 52,163 | +0.86% | 51,717 | 2026-09-25 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,859.3 | +0.09% | 2,856.8 | 2026-09-25 16:59 |

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 14.87 | -5.11% | 15.67 | 2026-09-25 16:15 |
| VIX9D (9일) | `^VIX9D` | 12.76 | -9.57% | 14.11 | 2026-09-25 16:15 |
| VIX3M (3개월) | `^VIX3M` | 17.93 | -2.71% | 18.43 | 2026-09-25 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 87.84 | -3.01% | 90.57 | 2026-09-25 16:15 |
| SKEW (테일리스크) | `^SKEW` | 144.91 | -0.77% | 146.04 | 2026-09-25 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 미 10년 국채선물 | `ZN=F` | 104.97 | +0.10% | 104.86 | 2026-09-25 16:59 |
| 금 | `GC=F` | 4,321.2 | +0.54% | 4,298 | 2026-09-25 16:59 |
| WTI | `CL=F` | 92.41 | -2.33% | 94.61 | 2026-09-25 16:59 |
| 달러지수 (DXY) | `DX-Y.NYB` | 101.04 | -0.25% | 101.29 | 2026-09-25 16:59 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.206 | 콘탱고 |
| VIX / VIX9D | 1.165 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.344 | 1.391 | 614,553 | 825,768 | 29,206 |
| 나스닥100 ETF 옵션 (QQQ) | 1.224 | 1.364 | 1,190,168 | 1,456,601 | 11,328 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **CNBC** · Trump to have dinner with Anthropic CEO Amodei at the White House, Axios reports
  - 2026-09-27 14:44 (ET) · https://www.cnbc.com/2026/09/27/trump-dinner-anthropic-ceo-amodei.html
- **Reuters** · Israel revokes diplomatic status of Dutch diplomats in Ramallah - Reuters
  - 2026-09-27 14:15 (ET) · https://news.google.com/rss/articles/CBMisAFBVV95cUxNN3pkY0Zia2l4Qm1yYmVVUzlQZWpYc1dnWkZJRllIREhJTy1PNWxPYXByWGdPNDVYNVN2bWx5cWxPNnFINDhIVWhEaW5BRk9qNjVJS3ExdVM5SW9MTmJ0UkJJTzFHS2Fvam5rMVhsZzZsVmZnWXFFVzFDTk05UW96V0IxNFpydV9nTEREeFJSamlqeTJWX0h0Mjl6U2ZWUG41eWtoekJiZE1Pa0dOaUZOaA?oc=5
- **Reuters** · Trump says men arrested at UK air base used by US were looking to do 'big damage' - Reuters
  - 2026-09-27 12:44 (ET) · https://news.google.com/rss/articles/CBMilwFBVV95cUxPOThaUHcwMHZuZEY2dldUNjhYQ29PeWRJdEYxWFBPV3NEUUdSc0l4MkdhN3liTGdyNG9XaEhwWG8xRk8xR29JVlA0ZEV2ZXM3RVZCRDlPSHhzU29Pek9tZVREdUdvOHRXS1ZuaTR0TXVGV253bkplU1lNbG85WXRjYzcwV2ZSekFCa1gtR1RtV09zM3NYeF93?oc=5
- **CNBC** · Here are the 4 big things we're watching in the stock market in the week ahead
  - 2026-09-27 12:16 (ET) · https://www.cnbc.com/2026/09/27/here-are-the-4-big-things-were-watching-in-the-stock-market-in-the-week-ahead.html
- **Reuters** · PODCAST: Iran-US diplomacy, RAF Fairford and Brazil elections - Reuters
  - 2026-09-27 12:01 (ET) · https://news.google.com/rss/articles/CBMilgFBVV95cUxQMEhHb1NVZ2VyRG1XTjdXS2hvVWVDem9lNERpM3hNWWstWjFrbjA5YXhHb0c5a0txQW1mT3IyWGFBa2FCQ19melMwVkh2S2xINWdOdXVrSDBHanRaeUU0d0N6aXk2LTJaQ3RZc3NRNmFFZi1PcWJzV29VU0pwcXBUR3pOZVFLUmhRMHBOajZtYlBua0diZEE?oc=5
- **CNBC** · At NFL games this season, drone defense tech aims to bring down disruptions
  - 2026-09-27 08:00 (ET) · https://www.cnbc.com/2026/09/27/nfl-drone-defense-tech-game-disruptions.html
- **CNBC** · Wall Street money takes back over from small investors as driving force of the stock market
  - 2026-09-27 07:32 (ET) · https://www.cnbc.com/2026/09/27/institutional-investors-stocks-treaurys-retail-traders.html
- **Reuters** · Deputy chair of Turkey's AK Party resigns after trading allegation amid funds crisis - Reuters
  - 2026-09-27 07:11 (ET) · https://news.google.com/rss/articles/CBMizwFBVV95cUxNcTYwUjZCOEZlU3ZxVDI1Q1Ytb2pqM1l1U2NLQUxoVU5nQzZ3ZDdkZ1U2LXF2MEZVSHFFR1NWdWlGek5aS1ZoelpVaG5wSjZaamVSVWM3alBqY3FqWmk0SXdmUjRmWEdvQ2ZKU3JTQ3M5TFpJeDFjdk82Y05aNmNYUWhrUzJhQ0x4enNDXy15WVp2VWJCNndSaG5oYWZpTHZxTEd4T1ZiTlJUYzVaemdnQWNpNUxZeFJFS2xiRENDR3R6aWFIWUVMQWp1RkJ2dVk?oc=5
- **Reuters** · Seven people killed in strike on market in Yemen, Houthi-run health ministry says - Reuters
  - 2026-09-27 07:04 (ET) · https://news.google.com/rss/articles/CBMiwwFBVV95cUxPQjI3MkxLdHM5cEZjNElqWk1FbnN6bnFnN2Rzdm0teV9IM3lBYnVkNUJuci0xS281b0dlTVJwalJpOEZmNGc0RmJLeUhreUV0QWtybE9YZU8waUNsM1BybjdUR1hSQ0lNWmpPZktPQ2k5VksyZ0dhd3p0QTVDOWhrUGgxQzhIU3A0Y0tiaUpWS0JoZlZqUnJZbXBpOUwxeWxESG1pR1RtYW9aSmhHTE1XN21POGIxa05xcHJ2SDQ3RkxQbGc?oc=5
- **Reuters** · Iranian tennis player savours refuge from war at Asian Games - Reuters
  - 2026-09-27 06:36 (ET) · https://news.google.com/rss/articles/CBMipAFBVV95cUxNUmY1bllrTGZaelFybmRMUUFvU180NGRmbWFYQkM4NVNhaE5MRndnbTRSSXVwQzZyVDVqZWlYZFZsNl9Ldnl0ZFpiUG5pcUZjMHJLQS03YV91blFEODlPbWVmNXhzUzBockJISmYzSjg0RmpsMjE5NmdMWmNkOUhFTGtzU05iSzN1dU9EeG5jMjQ5YUp5MDBIdjdnVmxtdnd0VDJFdg?oc=5
- **Reuters** · Iran's army voices readiness for potential renewed US attack - Reuters
  - 2026-09-27 05:40 (ET) · https://news.google.com/rss/articles/CBMingFBVV95cUxQbVBhbkluN19hdE9jdGtYdDdlZXNYWGd3T25HUGREMlVVb2ZZWmlrYU0tYTJreW9YcjlMeUhwdXp2UlNPMTFtUXFOWVh6enk2TG45VEtKNEw1bnZKdTUyQnhNdmZ1VmhEYXhYZkFObl9KcHROa1h0S2QyVE83MnQwMnp5bjN2UTM4NmpKeUM5eFNTQzg4RXRCWFNpZEhmdw?oc=5
- **Reuters** · Iran insists on diplomatic solution after Trump rejects peace plan - Reuters
  - 2026-09-26 18:36 (ET) · https://news.google.com/rss/articles/CBMiugFBVV95cUxPVF9ZM3dkR3ZQUWpnUVNzR0lsd0tkTTZkZ1AwN1RnZzVzQXo3WjZWY0VTNVo4dU9PM3ZfUnBKWUZuTWtRa01jNUxtVHhyZW1TakhIWlhCdl9UV0gxc3BWMUdTZ2x2Z2czNEVNV3JVYkJGOEYzSU5MREtHYldqdXZDXy1jdWlsTVZKR3pZTy1qS01IT1FpZDlkZVBLUHEzTXVDSDFlRWhva1Vsdld3cVhnUXZiYnNxTUhtb2c?oc=5
- **Reuters** · China, US agree to AI dialogue, tariff cuts on $30 billion in goods during Xi visit - Reuters
  - 2026-09-26 15:59 (ET) · https://news.google.com/rss/articles/CBMisgFBVV95cUxNT2FRVWRwSDZuWUZPYTRXcmNuNTFDR0hrQkVUZnpSdV9RdGhpUjV5R0hwN2V6MUNUS2hiTHpENFhwUFVDODBIeDhBSm5SdUJOeU1qSUhjekl2RzBDd0VBYi0tdmNDblQwV1RMTF9QMGFHdlFRcDRmalE3dWlhX0l6aUJjSGtsVjlsZXNnbmZWY3JzMEtwY3hxNEZHT3JjWXJEQlVRSFpSM0haSUROOUFRaWJB?oc=5
- **Reuters** · China pushes back against US on Iran and Cuba in UN speech - Reuters
  - 2026-09-26 15:14 (ET) · https://news.google.com/rss/articles/CBMinAFBVV95cUxQNmFyYk05dGVubEpsSTJ2dGwxcWtFNEx0ZDNybVVaMndCOUpzOTV5SHNjdmw0eHFCQzlsSHZONU91bHVjeU9lQ1RjSTJSM0pZRDhzUUNENHl1b1daMUxkajZ2QklCNTY5bXUxV0dEczRhZTJmU0VKWHhUeWN0OG5OYWRXdWRYUHJOaFJWbjlySGpEdUQtaDdDWThfTWk?oc=5
- **Bloomberg** · US 30-year yield tops 5.5% in ‘Vacuum’ after sentiment gauge
  - 2026-09-26 11:11 (ET) · https://www.bloomberg.com/news/articles/2026-09-25/us-30-year-yield-tops-5-5-in-vacuum-after-sentiment-gauge

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Nike Is Down 77% From Its Peak. Should You Buy Before It Reports Earnings on Oct. 1?
  - Yahoo · 2026-09-27 15:35 (ET) · https://finnhub.io/api/news?id=7911e559bc727e1b2070988138589d51ab3de8a03ed17c335f75d3b8f09b38be
- **NVDA** · History Says Intel's Best Years Have Been Hard to Follow. 2026 Is Its Best in More Than 4 Decades.
  - Yahoo · 2026-09-27 15:31 (ET) · https://finnhub.io/api/news?id=5aadfe09f010c16eecb25f80d7df3b4fe03773e679a318f78e8fa2303ff4d4fe
- **NVDA** · If You'd Invested $10,000 in Netflix (NFLX) 5 Years Ago, Here's How Much You'd Have Today
  - Yahoo · 2026-09-27 15:23 (ET) · https://finnhub.io/api/news?id=c4cf151faf3a8e88b0d5d3e9ef26100067bd6d88c0495b1b0aba8a27a109ef67
- **AVGO** · Qualcomm Stock Has an Opportunity Investors May Be Underestimating
  - Yahoo · 2026-09-27 13:00 (ET) · https://finnhub.io/api/news?id=bdd2775ac19e93f3c3e0fff7a86ac508490bf102e5c2d048f8148e1716943a18
- **AVGO** · Broadcom vs. Marvell: The AI Supercycle Is Big Enough for Both. Here's the Better Buy.
  - Yahoo · 2026-09-27 11:52 (ET) · https://finnhub.io/api/news?id=e74eeb9753af950d2475cdd7a2feeae150198ca2a6af67ca5a8af3150a066e4b
- **AVGO** · What Will Micron's Gross Margin Guide Be?
  - SeekingAlpha · 2026-09-27 01:00 (ET) · https://finnhub.io/api/news?id=67581fec95f390c66d92cb1294d8371b4254bbd1c43e2f401772c0993fd6aca9

### 금융

- **JPM** · JPMorgan doubles down on diesel as record prices test inflation
  - Yahoo · 2026-09-27 15:37 (ET) · https://finnhub.io/api/news?id=105c44ad6235c0352a278742dc7f108a617f1a54144ae711cdf7d3ce0ad3c14f
- **JPM** · This Is the No. 1 Move Investors Should Make Before Buying Stocks Right Now.
  - Yahoo · 2026-09-27 14:35 (ET) · https://finnhub.io/api/news?id=2c75be0b328997f339c1ddf74cc082ad7c5df1a1e12481b6546ee08591d3951b
- **JPM** · A Decade of JPMorgan Chase Delivered 572% Returns but This Year Tells a Different Story
  - Yahoo · 2026-09-27 11:28 (ET) · https://finnhub.io/api/news?id=cbff375a1861c734ca95a22c31e99ab6947d83e6cf00abcefc7a7cc781deae46

### 에너지

- **XOM** · For Retirees Who Want Oil Income: Chevron vs. ExxonMobil
  - Yahoo · 2026-09-26 10:30 (ET) · https://finnhub.io/api/news?id=e7a27fd793a99cfdc8c0ff918c6fd02dafcddfd659df16644bc1a821f9034ff0
- **XOM** · Why US Diesel Prices Could Stay High Even If Oil Tumbles: A Global Refinery Shortage
  - Benzinga · 2026-09-26 06:19 (ET) · https://finnhub.io/api/news?id=d913ccbfbe201d07e83ac640984196aae6164d61fdaadeed783121e357d6cbcf
- **XOM** · With Gas at $4.48 a Gallon, Here's How Much ExxonMobil Stock You Need to Buy to Fill Up Your Tank
  - Yahoo · 2026-09-26 02:50 (ET) · https://finnhub.io/api/news?id=ec0ec0f2e676031a1b5a7f85674c8e0bb49f1fabc835885226ec0c086b99e29b

### 헬스케어

- **UNH** · UnitedHealth Stock Is Up 14% in 2026. Time to Sell or Load Up?
  - Yahoo · 2026-09-27 07:33 (ET) · https://finnhub.io/api/news?id=e070ce0bf8c9b52f035f3c11ef42f001b89758a9bacfda9b65e16a82bc263fd7
- **UNH** · 3 U.S. Dividend Stocks Offering Defensive Income as Fed Rate Pressure Persists
  - Yahoo · 2026-09-27 01:12 (ET) · https://finnhub.io/api/news?id=baf528f100e1ef3465e778537c88f7af85008a24a49282b9dbc9af008aff8771
- **UNH** · Goldman Sachs Outweighs Microsoft in This Popular Dow ETF, and Share Price Is the Only Reason
  - Yahoo · 2026-09-25 18:00 (ET) · https://finnhub.io/api/news?id=9229f9cff1cf1f9cafcc30ab8fdcaddcf7e0ee292deb29f81fc02e715c985d7c

### 소비재·유통

- **AMZN** · Why the Nasdaq Refuses to Break Even With Treasury Yields Above Five Percent
  - Yahoo · 2026-09-27 15:15 (ET) · https://finnhub.io/api/news?id=e7b04b219bdb4304f2daf3e88e243a774a914db8d02a09aa8375d095b76a2c8f
- **AMZN** · AI’s $10 Trillion Buildout Will Reach 3.6% of GDP. Who’s Going to Pay for It?
  - Yahoo · 2026-09-27 13:51 (ET) · https://finnhub.io/api/news?id=4c130de69e9e413a4c5e83d1a0c533851c51ed925510f971df7f4a8493a59763
- **AMZN** · Michael Burry sends a stark warning to Big Tech stock investors
  - Yahoo · 2026-09-27 13:33 (ET) · https://finnhub.io/api/news?id=4aedc10a23791f458218d790acdcafff36bdbe453290209dc4865e95a6ad71cb

