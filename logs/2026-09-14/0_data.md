# 자동 수집 시장 데이터 (0_data)
# 기준일: 2026-09-14 · 생성시각(KST): 2026-09-14 09:01
# 출처: Yahoo Finance chart API · CBOE 지연시세 API · Finnhub (전부 기계 수집, 사람 해석 없음)

> 이 파일의 수치는 **이미 검증된 사실**이다. 1_collect 단계에서 다시 검색하지 말고 그대로 인용한다.
> 값이 `N/A`인 항목은 수집에 실패한 것이다. 추정치로 메우지 않는다.

## 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,616.5 | -0.56% | 7,659.5 | 2026-09-13 19:51 |
| 나스닥100 선물 (NQ) | `NQ=F` | 29,012.75 | -1.27% | 29,387 | 2026-09-13 19:51 |
| 다우 선물 (YM) | `YM=F` | 52,440 | -0.28% | 52,585 | 2026-09-13 19:50 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,894.3 | -0.35% | 2,904.5 | 2026-09-13 19:49 |

## 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 15.84 | -11.21% | 17.84 | 2026-09-11 16:15 |
| VIX9D (9일) | `^VIX9D` | 14.47 | -18.25% | 17.7 | 2026-09-11 16:15 |
| VIX3M (3개월) | `^VIX3M` | 18.6 | -5.73% | 19.73 | 2026-09-11 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 91.28 | -11.09% | 102.66 | 2026-09-11 16:15 |
| SKEW (테일리스크) | `^SKEW` | 154.49 | +5.08% | 147.02 | 2026-09-11 17:00 |

## 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 미 10년 국채선물 | `ZN=F` | 106.27 | -0.09% | 106.36 | 2026-09-13 19:50 |
| 금 | `GC=F` | 4,373.3 | +0.16% | 4,366.2 | 2026-09-13 19:51 |
| WTI | `CL=F` | 102.4 | +2.35% | 100.05 | 2026-09-13 19:51 |
| 달러지수 (DXY) | `DX-Y.NYB` | 99.13 | +0.01% | 99.12 | 2026-09-13 19:51 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.174 | 콘탱고 |
| VIX / VIX9D | 1.095 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. **분류명일 뿐 해석이 아니다.**

## Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.628 | 1.402 | 692,205 | 1,126,841 | 28,934 |
| 나스닥100 ETF 옵션 (QQQ) | 1.793 | 1.375 | 724,129 | 1,298,474 | 11,162 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## 시장 전반 뉴스 (Finnhub · 와이어 매체)

- **Reuters** · Houthis' Yemen advance leaves Gulf states with uncomfortable choice - Reuters
  - 2026-09-13 18:51 (ET) · https://news.google.com/rss/articles/CBMivAFBVV95cUxOX0JoY2VGb08xV0N2bWR6cnNzaFZoVm9MMGZ4WW1aa292SHNWTVBoVERfLW96ZVllX2thQjdUU1RMOTBvRkRoMGpDd2ZyMXVyb0t2bEFabVBJczM2SnhwM0w5c3diVnZiT1E4QnBxZ3YxaEVnYjE1cVJndExhaUloWENHQjlWdmtvUHRmNG1sSWtWQ3ZIRTJQUU5wQTFDaEw0MDVIdThHdnl5NnVCSTdHUmUwR3RPU0tXalFfSA?oc=5
- **Reuters** · Oman meeting between Gulf states and Iran postponed, Omani foreign minister says - Reuters
  - 2026-09-13 15:14 (ET) · https://news.google.com/rss/articles/CBMiyAFBVV95cUxPT01mN2pHSkgtLWNGSFhGWm9vSDBvNjlLVVB5N2lFRnczZ012SW1pZDdxTXRmY2NZWmw2MmRiOEJPZ1ZNdklvMkgxbXlEQXd6a3ozbWNrLTNaLWlMekNhalBBQjZTSXhEZEItM0s5WUM2cGN5akN6SXRVZVJseUR1M2Q1X2RoM2VBMEFMZHNrdVU0VUZyU2k5eWEtalNvbGVjQk5sS1NkbUV1QThfaUxocWV5NkVmRDBLQmdrNXJBQmp1ckhHTDBOdQ?oc=5
- **CNBC** · Here are the 2 big things we're watching in this week's stock market
  - 2026-09-13 12:57 (ET) · https://www.cnbc.com/2026/09/13/here-are-the-2-big-things-were-watching-in-this-weeks-stock-market.html
- **CNBC** · Washington scrambles to meet calls for AI guardrails while the window to act closes
  - 2026-09-13 12:56 (ET) · https://www.cnbc.com/2026/09/13/ai-congress-anthropic-openai-crisis.html
- **Reuters** · Trump says US could stay in Iran and keep oil, like Venezuela deal - Reuters
  - 2026-09-13 11:28 (ET) · https://news.google.com/rss/articles/CBMirwFBVV95cUxOc3NKNXdjMkx2Q2ZXOWVWU25Oa1hXRGFZcWJLRktNQWdoclBWVEJQdXhLMS1ZQV9TWHhmNlZSMTlIVXlSZWlWRGdrWXN2a2gxNzZiOWJlTUtVd2xIbW5tb0pJVVNGNFdmNWdEZktuV0JuT3pmaUF3VHYtZXotVklQWGt2YlEzN2Uwa21ac1I1bjlHRi1iM1VpMF90bFhJZk5wNl9aaG9rVmNsVkpUUUdF?oc=5
- **Reuters** · Turkey detains dozens after sweeping raids targeting LGBTQ+ groups - Reuters
  - 2026-09-13 09:37 (ET) · https://news.google.com/rss/articles/CBMiswFBVV95cUxOSmw3N3gxSDF1TmZtV1BQY2s3cVUxZGRjbW1FdlBMelhLbUYtblpJc3dDa2thTjNUUkJCdXFINm96VVl3dlh5QWFYVlp2cjVnUnowTVJYWmhlUGlOZEtYUzNBOUlpM3o2MUJPNDBySDh5VFBic2Mta3R1YTJKNFkyUFBMcXZOd1hVaXZDMTVHaGxVZW96WkJzem8wR3pSY3EwQzBVTEVhUi1waTlfQl9KQVVfYw?oc=5
- **CNBC** · I'm a psychologist who studies couples: Emotionally intelligent partners ask 1 question every morning—that most neglect
  - 2026-09-13 09:07 (ET) · https://www.cnbc.com/2026/09/13/emotionally-intelligent-couples-ask-question-every-morning-psychologist.html
- **Reuters** · New attacks in Hormuz and Saudi test nerves as war's spread worsens oil disruption - Reuters
  - 2026-09-12 22:22 (ET) · https://news.google.com/rss/articles/CBMiwgFBVV95cUxOUGctZFpGTW5Zd0h2OFl3V0FMR3o0MHVxNW5uSmN6cHpfNWRYRS1Sd0dibnUwUDRCY3VHejJlbUdNVkx6VmN3WTJQVGYtRjRHX1dWQllyQWl3TzEyWWoxY0JRaU45U0RMUTd0SHBvYmRLZmN4bjl3VF82emtKY1JiQzlsN3NqLThWcDk0UEdmaTlHWjJWd0k1b1VtVmVVUFpSZnFhSEZPUk9oeFlTeU5ZcTJKUlJUZjd6d3d2QWJiYmR2UQ?oc=5
- **Reuters** · Xi urges BRICS peace role in Middle East, courts Modi on India visit - Reuters
  - 2026-09-12 15:16 (ET) · https://news.google.com/rss/articles/CBMiqwFBVV95cUxQb2hwaW9IeTRsWlZUMXI0TnRSYUhSM0ZNZVRXUHpQM0NKMHJIMlhJaFZZUUJYRE5PbEpvSjg4bDFxT0FVQUp1X0hHSUhOcXJjOFZpaDY3RmRMeFpFT0VaZVlQWG12ZlZJQ3BjdF9MMVJXYUxHV0xwQjVJWGstZWpJYWxlM2pmMzBCdFc5d1NCeE5IWENOUC1Id1ZfZGJDMkMwckY5Y082T2NLOEk?oc=5
- **Reuters** · Iran and UAE back joint BRICS statement urging restraint in war - Reuters
  - 2026-09-12 15:11 (ET) · https://news.google.com/rss/articles/CBMiyAFBVV95cUxNb0hxYi1hRXRlN01ldlJFSmk4ZDVnS1c0NE8xMm5PWXJFT3Vpd2prTWI4TGl5UTd6c1JKS24xVXpvOGpRY1VsYUUxQVk0TDVmNElEMUxLYnB4c2NfUWxmQWN0N21LWUY1TkZNc1pQWHczRUdhYTVJbEpiZXZPVi16SnZCdVN5eWotZ2dJaGt3UkNFdGF2NzUtTTFMU1dsR2EzcEpiQVRvRFFmaE1HdWZXSko1bVl3d2YyTGZPRUpGTEE5MW92SjJJNA?oc=5
- **Reuters** · Iran-Oman understanding does not provide for immediate reopening of Strait of Hormuz, Tasnim reports - Reuters
  - 2026-09-12 12:45 (ET) · https://news.google.com/rss/articles/CBMixwFBVV95cUxNXzF6RlhPNHFNSGk2RzFzNnNVc3ZaT0RWYldmaWNGaDNQWkE1ZTl2MDQ2VnpKN0xuMENvc05KaG1xdjFVaEpPQWN1cXFjMk1IdVcxRkN0YzI5cEtHdjNUeUVfUUxHTVVfbGxfejVnZVFnVHZTWjNTa0RiQWhud2F0RmZJZExhOEZBa0xmaUxoaHF4YXk4bWN5VllHRFlSQ21wekM0Ri1aR1p5V2pEbkYyLTJzQWxBa0p6Ri1IVktiVnE1MkZieXpR?oc=5
- **Reuters** · No signed Hormuz deal expected yet from Oman meeting on Monday, Iranian official says - Reuters
  - 2026-09-12 09:44 (ET) · https://news.google.com/rss/articles/CBMiygFBVV95cUxNeXF6bE9PTlU2N3Q2TTc1VEkzbUdNRXlDNVJTVTNhX2ZHRmJuSEx2OHI5MEhGVUs1Mjc4TElRZXdFRlplRlF3WDBoMjhSQXdHN3RYOWpvb25SRE14OUEtMXhTOVhVMWJLeTdpNmNsT0NIR0pPOGxFZnVwMEFMQ2tubTJxUTdpQXdaVkNna2JrLWFCODA2cGxhaktEOUtVQ1lxVXM1YnFnUjhxUFFKbGVYV3h3WVlIVHZlZVBxcnoyVTVUSFR0bTIwd193?oc=5
- **Reuters** · Houthi advance in Yemen puts U.S. in a new bind - Reuters
  - 2026-09-12 09:15 (ET) · https://news.google.com/rss/articles/CBMilgFBVV95cUxQNkd2T3JFYkQtX1BpRFMwdUY5V0tXY0xuX1JpY3cwa2hEZmxKRWVSdGtNQkR5dFBIT2JPanlxM0N3WjA5YVVpZExUOFJIWG1MZTNLUXNrTXZaZDRLRnFac2Vkclp3eWhkaTFUNEZrdGk4RzBYTmVVV1kwMHRJWHdXbGs3Z3U5VlZ1eldGOGJXLTU5d3B2NUE?oc=5
- **CNBC** · I worked with Gloria Steinem for 30 years—This was her No. 1 antidote to fear
  - 2026-09-12 09:00 (ET) · https://www.cnbc.com/2026/09/12/i-worked-with-gloria-steinem-for-30-years-this-was-her-no-1-antidote-to-fear.html
- **CNBC** · Oil's roundtrip back to $100. Why China could determine what happens next
  - 2026-09-12 08:40 (ET) · https://www.cnbc.com/2026/09/12/oils-roundtrip-back-to-100-why-china-could-determine-what-happens-next.html

## 섹터별 뉴스 (Finnhub)

### 반도체·AI

- **NVDA** · Dow Jones Futures: Will Anthropic-Led Call For Slowdown Hit AI Stocks? Fed Meeting Ahead
  - Yahoo · 2026-09-13 17:29 (ET) · https://finnhub.io/api/news?id=dd80b18bcf77f72a2c791b70467075c72e54e007af6985e4ab985da070c6abfc
- **NVDA** · Jeff Bezos Built Amazon Into a $1.8 Trillion Company. Here's How Andy Jassy Is Making It Worth Even More.
  - Yahoo · 2026-09-13 16:28 (ET) · https://finnhub.io/api/news?id=7e92251399084f9ee155293eda917252f7dcf6de6f0a4bfe77fe867c0dcc6aca
- **NVDA** · Apple Bought Back More Than $880 Billion of Its Own Stock During Tim Cook's 15 Years as CEO. Here's How That Reshaped Shareholder Returns.
  - Yahoo · 2026-09-13 16:05 (ET) · https://finnhub.io/api/news?id=1ca93bc4f865de46febfde8e5cf8190ca5a6a41f10782501dd6dfad695d62aa8
- **AVGO** · Goldman Sachs Says AI Is Driving Half of S&P 500 Earnings Growth. That Number Cuts Both Ways.
  - Yahoo · 2026-09-13 14:00 (ET) · https://finnhub.io/api/news?id=af678d9eee32dcdeb85c86c3dae9cc235cfa295730d0d1cc1612180b9a5a41db
- **AVGO** · Nvidia vs. Broadcom: Which Trillion-Dollar AI Chip Stock Has More Upside After Their Latest Earnings?
  - Yahoo · 2026-09-13 13:27 (ET) · https://finnhub.io/api/news?id=99a0a7d560641299354330c6b8697f0729b8a0eb4fbdd064f27eeff597908e7c
- **AVGO** · Dreamforce Will Pitch Unified Agent Trust. The Market Is Still Stitching Together Three Separate Layers
  - Yahoo · 2026-09-13 13:24 (ET) · https://finnhub.io/api/news?id=df52652abe5cc06d944b0dfa7a102757eea24764ee239a085e645e8300dc8e60

### 금융

- **JPM** · Jamie Dimon Called Mark Carney’s ‘Middle Powers’ Plan a ‘Fantasy’—‘They Did That, It’s Called Europe’
  - Benzinga · 2026-09-12 22:14 (ET) · https://finnhub.io/api/news?id=a2a6a1c1f53781a2320e1b8ff96f3d248006bd2fa9ee73cbbd997de9eaa8f879
- **JPM** · J.P. Morgan Closes $1.1B US Industrial Net Lease Fund
  - Yahoo · 2026-09-12 17:31 (ET) · https://finnhub.io/api/news?id=d6f283a56b6cff72d3d8e5b50e9dcdfc0cdfe1ca9435c12c622ad97d8eef41c5
- **JPM** · 3 High-Yield Dividend Stocks Worth Loading Up On This Month
  - Yahoo · 2026-09-12 10:35 (ET) · https://finnhub.io/api/news?id=85999f876d67980e1aff11f45d51a0b5b10aa1cb40064b2abf60b76a7c57aeef

### 에너지

- **XOM** · Oil Above $100 Is Creating a New Opportunity Beyond the Major Producers
  - Yahoo · 2026-09-12 09:45 (ET) · https://finnhub.io/api/news?id=63cab8c517de898d6a75adca70cbda1856df4082bafdceaebc464c95dceac63e
- **XOM** · Chevron Already Committed $7 Billion to Venezuela. Trump Says Exxon Is Next. Here's the Big Difference Between the 2.
  - Yahoo · 2026-09-12 08:35 (ET) · https://finnhub.io/api/news?id=f2d4e018138cd27e6a92fde104d1e3aba5fe130bec57eb4c852d1a7822810bfd
- **XOM** · How Much Do You Really Need Invested in Dividend Stocks to Replace a $25,000 Income?
  - Yahoo · 2026-09-12 07:50 (ET) · https://finnhub.io/api/news?id=eb1368e08a08d838dbe026f78f220cd81139c8f6b3621603617cfdadb1500b1b

### 헬스케어

- **UNH** · Five Dividend Stocks Crushing Inflation With Consistent Dividend Payout Growth
  - Yahoo · 2026-09-13 11:26 (ET) · https://finnhub.io/api/news?id=5fe2e567a19ae28f78e3c41199be697e0b46c06b60262fa9680f7c0b49b25ff3
- **UNH** · Dear UnitedHealth Stock Fans, Mark Your Calendars for October 1
  - Yahoo · 2026-09-12 14:30 (ET) · https://finnhub.io/api/news?id=ba54ee2541ee9b879955526007d175d8d0e96fa3e1e75ad69e1ca1f4204ebe00
- **UNH** · FOMC Meeting Takes Center Stage As Earnings Fade
  - SeekingAlpha · 2026-09-12 07:00 (ET) · https://finnhub.io/api/news?id=4920c27e7caa767a3724fb38b8f13a28f1b3db5ca04cb15d5f069d28073d7516

### 소비재·유통

- **AMZN** · Jeff Bezos Built Amazon Into a $1.8 Trillion Company. Here's How Andy Jassy Is Making It Worth Even More.
  - Yahoo · 2026-09-13 16:28 (ET) · https://finnhub.io/api/news?id=7e92251399084f9ee155293eda917252f7dcf6de6f0a4bfe77fe867c0dcc6aca
- **AMZN** · Billionaire Bill Ackman Trimmed This Big Tech Position to Back These 2 AI Contenders
  - Yahoo · 2026-09-13 12:50 (ET) · https://finnhub.io/api/news?id=2eaa5dbc845c565644de45665b35b3a95161a7587828070179c17f4b8f0403f5
- **AMZN** · Anthropic Locks Down $517 Billion in Compute Ahead of IPO — and It’s Still Not Enough
  - Yahoo · 2026-09-13 11:36 (ET) · https://finnhub.io/api/news?id=26ebbb3d0826ee8d4122ec51c0cb942fd44407a09ce9117eedde57e2ab6bf3a8

