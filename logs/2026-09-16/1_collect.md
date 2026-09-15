# 미국 시장 데일리 수집 결과 (Collect)
# 기준일: 2026-09-16 (수) · 미국 정규장 종가 기준 · 실행모드: [데일리]
# 생성시각(KST): 2026-09-16 08:36

## [1] 미국 주요 지수 (데일리)

기준: 2026-09-15(화) 미국 정규장 종가 (직전 완결 세션)

| 항목 | 종가/수치 | 등락률 | (보도된) 원인 | 출처+태그 |
|------|-----------|--------|----------------|-----------|
| S&P500 | 7,585.73 | -0.45% | FOMC 정책 발표(9/16)를 앞둔 관망, 국채 금리 다년 최고치 급등 | CNBC · Stock market news for Sept. 15, 2026 · 2026-09-14 게재(익일장 반영) · https://www.cnbc.com/2026/09/14/stock-market-today-live-updates.html [P2] |
| NASDAQ 종합 | 25,981.57 | -0.78% | 상동(금리 급등·Fed 결정 대기) | CNBC · Stock market news for Sept. 15, 2026 · https://www.cnbc.com/2026/09/14/stock-market-today-live-updates.html [P2] |
| Dow 30 | 52,093.11 (-328.09pt) | -0.63% | 상동(금리 급등·Fed 결정 대기, 유가 상승에 따른 인플레이션 우려) | CNBC · Stock market news for Sept. 15, 2026 · https://www.cnbc.com/2026/09/14/stock-market-today-live-updates.html [P2] |
| Russell2000 | N/A | N/A | N/A | N/A — 9/15 정규장 종가 검색 확인 불가(9/11 종가 2,903.94만 확인됨, 사용 안 함) [N/A] |
| SOX (필라델피아 반도체지수) | N/A | N/A | N/A | N/A — 9/15 종가 수치 검색 확인 불가 [N/A] |
| Brent 원유 | 약 $109 (배럴) | N/A(등락률 확인 불가) | 이란 관련 공급 차질 우려 지속 | Yahoo Finance · Stock market today: Dow, S&P 500, Nasdaq fall as 10-year Treasury yield touches 2007 high ahead of Fed decision day · 2026-09-15 · https://finance.yahoo.com/markets/live/stock-market-today-tuesday-september-15-dow-sp-500-nasdaq-081307838.html [P2] |

## [1-A] 선물·변동성 구조 (0_data.md 원문 인용, 재검색 없음)

### 선물

| 항목 | 현재가 | 전일 대비 | 직전 종가 | 기준시각(ET) | 출처+태그 |
|------|--------|-----------|-----------|--------------|-----------|
| S&P500 선물 (ES) | 7,663.5 | +0.50% | 7,625 | 2026-09-15 19:24 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 나스닥100 선물 (NQ) | 29,275 | +0.42% | 29,152.25 | 2026-09-15 19:24 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 다우 선물 (YM) | 52,575 | +0.26% | 52,440 | 2026-09-15 19:24 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 러셀2000 선물 (RTY) | 2,896.3 | +0.08% | 2,894.1 | 2026-09-15 19:24 | CBOE / CME (Yahoo chart API 자동수집) [P1] |

### 변동성 구조

| 항목 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) | 출처+태그 |
|------|-------------|-----------|-----------|--------------|-----------|
| VIX (30일) | 17.2 | +0.58% | 17.1 | 2026-09-15 16:15 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| VIX9D (9일) | 17.21 | +1.77% | 16.91 | 2026-09-15 16:15 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| VIX3M (3개월) | 19.36 | +0.41% | 19.28 | 2026-09-15 16:15 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| VVIX (VIX의 변동성) | 94.91 | +0.02% | 94.89 | 2026-09-15 16:15 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| SKEW (테일리스크) | 146.61 | -3.60% | 152.09 | 2026-09-15 17:00 | CBOE / CME (Yahoo chart API 자동수집) [P1] |

VIX 기간구조 비율(산출값): VIX3M/VIX = 1.126 (콘탱고), VIX/VIX9D = 0.999 (백워데이션). 출처: CBOE / CME (Yahoo chart API 자동수집) [P1]

**매크로 (2026-09-15 19:24 ET 기준, DXY는 18:04 ET)**

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 출처+태그 |
|------|------|-------------|-----------|-----------|-----------|
| 미 10년 국채선물 | `ZN=F` | 105.97 | -0.43% | 106.42 | CME (Yahoo chart API 자동수집) [P1] |
| 금 | `GC=F` | 4,325.1 | -0.62% | 4,351.9 | COMEX (Yahoo chart API 자동수집) [P1] |
| WTI | `CL=F` | 105.44 | +3.99% | 101.39 | NYMEX (Yahoo chart API 자동수집) [P1] |
| 달러지수 (DXY) | `DX-Y.NYB` | 99.61 | +0.15% | 99.46 | ICE (Yahoo chart API 자동수집) [P1] |

### Put/Call 비율

| 대상 | P/C(거래량) | P/C(미결제약정) | 콜거래량 | 풋거래량 | 출처+태그 |
|------|-------------|------------------|----------|----------|-----------|
| S&P500 지수옵션 (SPX) | 1.211 | 1.403 | 2,051,838 | 2,485,011 | CBOE 옵션 체인 직접 집계 [P1] |
| 나스닥100 ETF 옵션 (QQQ) | 1.042 | 1.414 | 3,712,166 | 3,868,092 | CBOE 옵션 체인 직접 집계 [P1] |

## [2] 금리/연준 (데일리)

| 항목 | 사실 내용(발언·수치) | 출처+태그 |
|------|----------------------|-----------|
| FOMC 정책결정 일정 | FOMC는 2026-09-15~16 양일간 회의, 정책 결정 발표는 2026-09-16(수) 오후 2:00(ET) | Kiplinger · September Fed Meeting: Live Updates and Commentary · https://www.kiplinger.com/investing/live/fed-meeting-updates-and-commentary-september-2026 [P3] |
| CME FedWatch (25bp 인상 확률) | 2026-09-14 기준 84.1%가 반영 | KuCoin (CME FedWatch 데이터 인용) · CME FedWatch Shows 61.4%... (본문 내 갱신치 84.1% 인용) · https://www.kucoin.com/news/flash/cme-fedwatch-shows-61-4-probability-of-25-basis-point-rate-hike-in-september [P3] |
| 10년물 국채 수익률 | 2026-09-15(화) 장중 5.041%까지 상승, 2007년 7월 이후 최고치. 마감 기준 4.996% 부근(전일 대비 +3bp 이상) | CNBC · 10-year Treasury yield hits highest level since 2007 as traders bet a Fed rate hike is coming · 2026-09-15 · https://www.cnbc.com/2026/09/15/10-year-treasury-yield-rises-to-highest-since-2007.html [P2] |
| 2년물 국채 수익률 | 2026-09-15(화) 4.656%(전일 대비 +2bp 이상), 장중 4.688%까지 상승(2024년 7월 이후 최고치) | CNBC · 10-year Treasury yield hits highest level since 2007 as traders bet a Fed rate hike is coming · 2026-09-15 · https://www.cnbc.com/2026/09/15/10-year-treasury-yield-rises-to-highest-since-2007.html [P2] |
| 10Y-2Y 스프레드 | N/A — 개별 산출 확인 불가(10Y 4.996%, 2Y 4.656% 보도치 기준 산술상 약 +0.34%p이나, 동일 시각 스냅샷 여부 불명확하여 별도 확인 필요) | N/A |
| Fed 의장 Warsh 발언(잭슨홀, 8/28) | "I'm impressed by the overall appearance of the economy, which appears to have strengthened." / "While this summer's [inflation] readings were better than expected, they do not tell me that underlying trends have meaningfully improved." / "I stand here today committed to a discipline, not to a decision." | Federal Reserve Board · Keynote remarks by Chairman Warsh at the 2026 Jackson Hole Economic Policy Symposium · 2026-08-28 · https://www.federalreserve.gov/newsevents/speech/warsh20260828a.htm [P1] |
| 재무부 장관 Bessent 발언 | "bond yields reflect 'global issues'" | Reuters · US Treasury's Bessent says bond yields reflect 'global issues' · 2026-09-15 14:41(ET) · https://news.google.com/rss/articles/CBMiqwFBVV95cUxORTlaeHpnSkMzSU5ieGJqNEpUTFdaYU8yTzc2OExDcElaWFVFclZyNkVNcThWaFRiM29ZNGhaY3dpWS1RbVh0NUhZczdVLUhLVFNjN3RCRFhZMlVmeU5ibVhCXy14VnItdkpzVHNJZXlxWmhxbzRLX3BjOTFzcE9yRVFteHcwS0Jaa19QaTVPdnh5WDFLcXdvTXBrNldnNVJDd0RvN1NRYllyRWM?oc=5 [P2] |

## [3] 주요 경제지표 (조건부)

| 지표 | 발표시각(ET·KST) | 발표치 | 예상치 | 이전치 | 서프라이즈(산술값) | 출처 |
|------|-------------------|--------|--------|--------|----------------------|------|
| 8월 소매판매 | 2026-09-16 08:30 ET · 2026-09-16 21:30 KST(발표 예정, 본 문서 작성 시점 기준 발표 전) | N/A — 발표 전 | N/A | N/A | N/A | ts2.tech · U.S. Retail Sales Arrive Wednesday, 5½ Hours Before the Fed Decides · https://ts2.tech/en/u-s-retail-sales-arrive-wednesday-5%C2%BD-hours-before-the-fed-decides/ [P3] |
| 8월 CPI(전월, 참고) | 2026-09-11 08:30(ET) | 전월비 +0.4%, 전년비 +3.4%; 근원 전월비 +0.3%, 근원 전년비 +2.4% | 전월비 +0.4%/전년비 +3.4%(컨센서스 부합) | 전월 근원 전년비 +2.5% | 0(헤드라인 컨센서스 부합) | CNBC · CPI inflation report August 2026 · 2026-09-11 · https://www.cnbc.com/2026/09/11/cpi-inflation-report-august-2026.html [P2] |

비고: 2026-09-16 FOMC 정책결정(오후 2:00 ET)은 [2]에 기재. 8월 소매판매는 FOMC 발표보다 5시간 30분 앞서 발표되나, 본 수집 시점(KST 오전)에는 아직 발표 전이라 수치는 N/A.

## [4] 특징 종목 (데일리)

| 종목 | 티커 | 등락률 | 거래량 | (보도된) 핵심 사실 | 출처+태그 |
|------|------|--------|--------|----------------------|-----------|
| Skyworks Solutions | SWKS | +10% | N/A | Qorvo와의 220억달러 합병 규제 통과 기대감 및 Apple 신제품 발표 후광으로 급등 | Yahoo Finance(Investopedia 재인용 기사) · Stock market today 기사 종합 · 2026-09-15 · https://finance.yahoo.com/markets/live/stock-market-today-tuesday-september-15-dow-sp-500-nasdaq-081307838.html [P2] |
| Dave & Buster's Entertainment | PLAY | -17% | N/A | 2분기 매출 5억4,410만달러로 FactSet 컨센서스(5억5,680만달러) 하회, 순손실 1,250만달러(EPS -0.36달러) | StockTitan · Dave & Buster's Reports Second Quarter 2026 Financial... · 2026-09-15 · https://www.stocktitan.net/news/PLAY/dave-buster-s-reports-second-quarter-2026-financial-gwo3pahunut5.html [P3] |
| Dell Technologies | DELL | +5.65% | N/A | AI 최적화 서버 수요 지속 및 950억달러 규모 수주잔고(backlog) 언급 | Yahoo Finance · Dell's AI Backlog Just Hit a Record $95 Billion · 2026-09 · https://finance.yahoo.com/technology/ai/articles/dells-ai-backlog-just-hit-122102567.html [P2] |
| Revvity | RVTY | +5.56% | N/A | 2026 Global Healthcare Conference에서 경영진이 진단(diagnostics) 부문 성장 및 AI 관련 포지셔닝 강조 | Yahoo Finance · Stock market today 기사 종합 · 2026-09-15 · https://finance.yahoo.com/markets/live/stock-market-today-tuesday-september-15-dow-sp-500-nasdaq-081307838.html [P2] |
| Qualcomm | QCOM | +4%대 | N/A | 구체적 촉발 뉴스 본문 확인 불가(Skyworks/Qorvo 합병 관련 섹터 훈풍으로 추정 보도되었으나 원인 명시 기사 미확인) | Yahoo Finance · Stock market today 기사 종합 · 2026-09-15 · https://finance.yahoo.com/markets/live/stock-market-today-tuesday-september-15-dow-sp-500-nasdaq-081307838.html [P2] |

## [4-A] 섹터별 뉴스 (0_data.md Finnhub 기반 + 보충 검색)

| 섹터 | 종목 | 사실 내용(무슨 일이) | 발행시각(ET) | 출처+태그 |
|------|------|------------------------|--------------|-----------|
| 반도체·AI | AVGO | Broadcom CEO Hock Tan, AI 반도체 매출 목표(FY2027 1,150억달러 → FY2028 2,300억달러)를 재확인하며 "No, not at all"이라고 슬로다운론에 반박. "demand actually exceeds this outlook" 발언 | 2026-09-14~15 (컨퍼런스콜 9/2, 인터뷰 9/14~15 재인용) | CNBC · Broadcom CEO addresses Anthropic's slowdown push, says AI revenue targets haven't changed · 2026-09-14 · https://www.cnbc.com/2026/09/14/broadcom-ceo-on-anthropics-slowdown-push-ai-revenue-targets-havent-changed.html [P2] |
| 금융 | JPM | JPMorgan, 3분기 은행 수수료 및 마켓 부문 매출 두 자릿수(mid-teens) 성장 전망 제시 | 2026-09-15 17:02(ET) | Yahoo(Finnhub 수집) · JPMorgan Chase Sees Mid-Teens Growth in Q3 Banking Fees and Markets Revenue · 2026-09-15 · https://finnhub.io/api/news?id=151d5bbb929aabde1aa9cb6b91ecfae7dcaca663048ce9b8aba21d2144d184bd [P3] |
| 에너지 | XOM | Exxon Mobil, 텍사스 탄소포집 프로젝트 승인 획득 | 2026-09-15 17:50(ET) | Yahoo(Finnhub 수집) · Market Chatter: Exxon Mobil Wins Approval For Texas Carbon Capture Project · 2026-09-15 · https://finnhub.io/api/news?id=85a53b5243ca2d609738a6b5b219e94bc5af9e76887beed6bcc3cf823d81c86b [P3] |
| 헬스케어 | UNH | UnitedHealth Group, 실적 발표일 공지 | 2026-09-15 16:10(ET) | Yahoo(Finnhub 수집) · UnitedHealth Group Announces Earnings Release Date · 2026-09-15 · https://finnhub.io/api/news?id=909aca10a77996c4c7f96c28dd59ebf87e5a8997a4cf648773323aa33a1dcc8d [P3] |
| 소비재·유통 | AMZN | Amazon 주가, 전체 시장 대비 낙폭 확대(개별 하락 요인 기사 내 별도 명시 없음) | 2026-09-15 17:45(ET) | Yahoo(Finnhub 수집) · Amazon (AMZN) Dips More Than Broader Market: What You Should Know · 2026-09-15 · https://finnhub.io/api/news?id=e2c40f2d2a69a8ff231d2ef64bd1a44afebd750f007011ca9119bb44abc7191e [P3] |

## [5] AI 인프라 — 공급 측 (데일리)

| 기업 | 뉴스 제목 | 사실 내용(무슨 일이) | 출처일자 | 출처+태그 |
|------|-----------|------------------------|----------|-----------|
| DELL | Dell's AI Server Backlog Reaches $95 Billion | Dell, 회계 2분기 말 AI 서버 수주잔고 950억달러(전분기 513억달러에서 급증), 분기 신규 수주 609억달러. AI 최적화 서버 매출 164억달러(전년 대비 2배). FY2027 매출 전망을 1,920억달러로, AI 서버 매출은 740억달러로 전망 상향 | 2026-09(2분기 실적 발표 기반) | Yahoo Finance · Dell's AI Backlog Just Hit a Record $95 Billion · https://finance.yahoo.com/technology/ai/articles/dells-ai-backlog-just-hit-122102567.html [P2] |
| AVGO | Broadcom CEO addresses Anthropic's slowdown push | Broadcom CEO Hock Tan, AI 반도체 매출 전망(FY2027 1,150억달러, FY2028 2,300억달러) 유지 및 상향 가능성 언급. "I don't know about training, but when you want to productize inference, I see it continuing to be very, very strong" | 2026-09-14 | CNBC · Broadcom CEO addresses Anthropic's slowdown push, says AI revenue targets haven't changed · https://www.cnbc.com/2026/09/14/broadcom-ceo-on-anthropics-slowdown-push-ai-revenue-targets-havent-changed.html [P2] |
| NVDA | (섹터뉴스 원문) TSMC's 2nm Era Is Accelerating With MediaTek. Nvidia and Alphabet Already Have Money on the Table | TSMC 2나노 공정에 MediaTek 합류 가속, Nvidia·Alphabet이 선주문 형태로 자금 투입했다는 보도(세부 금액 기사 내 미확인) | 2026-09-15 17:48(ET) | Yahoo(Finnhub 수집) · https://finnhub.io/api/news?id=86105b30bc518a119ef014f8b7c80f7f22eae6554c40f68f5a512b72d3a97b49 [P3] |
| HBM/DRAM/NAND 현물가, AI 서버 출하량, GPU 공급, 광통신 수요 | N/A | N/A — 별도 수치 검색 확인 불가 | N/A | N/A |

## [5-A] AI 인프라 — 수요측/하이퍼스케일러 CAPEX (조건부)

신규 변동 없음 — MSFT/AMZN/GOOGL/META는 실적 시즌이 아니며(직전 실적 발표 이후 신규 가이던스 갱신 확인 불가), 직전 가이던스 유지로 판단(2026-09-16 기준, 출처: 각 사 최근 분기 실적자료 — 본 수집에서 재검색·갱신 확인 안 됨). N/A — 확인 필요.

## [6] 시총 상위 10 — AI 무관 일반 이슈 (조건부/이슈시)

N/A — 금일(2026-09-15~16) MSFT/NVDA/AAPL/AMZN/GOOGL/META/AVGO/BRK/TSLA/TSM 관련 AI 무관 규제·실적·제품 뉴스 검색상 확인되지 않음 (TSM 배당 공시 등은 정기적 사안으로 특기사항 아님).

## [7] 기관·대형 자금 수급 (데일리)

| 항목 | 종목 | 사실 내용 | 규모(수치) | 출처+태그 |
|------|------|-----------|------------|-----------|
| ETF 자금 흐름(SMH/SOXX/QQQ) | N/A | N/A — 2026-09-15 당일 자금 유출입 수치 검색 확인 불가 | N/A | N/A |
| 대량매매/블록트레이드 | N/A | N/A — 확인 가능한 개별 메가캡 블록트레이드 보도 없음 | N/A | N/A |
| 비정상 옵션 활동 | N/A | 2026-09-15 기준 확인된 비정상 옵션활동은 SHOE(Shoe Station Group), IE(Ivanhoe Electric) 등으로, 본 리포트의 우선 종목군(AI 인프라·시총상위)과 무관하여 게재 대상 아님 | N/A | N/A |

## [7-A] Insider Trading SEC Form 4 (조건부)

| 기업 | 내부자 | 직책 | 매수/매도 | 거래유형 | 규모 | 거래일 | 출처 |
|------|--------|------|-----------|-----------|------|--------|------|
| NVDA | Nicholas P. Parker | EVP, Worldwide Field Ops | 취득(무상, RSU) | 옵션행사/RSU 부여(대가 없음) | 172,507주(RSU) | 2026-09-09 | SEC EDGAR · NVIDIA CORP Form 4 · https://www.sec.gov/Archives/edgar/data/0001045810/000169684126000010/wk-form4_1788386836.xml [P1] |
| NVDA | Mark A. Stevens | Director | 매도 | 재량(구체적 유형 기사상 미명시) | 다수 거래, 주당 약 $220~$234 | 2026-08-31~2026-09-04 | SEC EDGAR · NVIDIA CORP Form 4 · https://www.sec.gov/Archives/edgar/data/0001045810/000215218826000005/wk-form4_1789160684.xml [P1] |
| NVDA | Timothy S. Teter | EVP, General Counsel and Secretary | 매도 | 10b5-1 | 30,000주(3건 분할, 주당 약 $216.84~$218.53) | 2026-08-31 | SEC EDGAR · NVIDIA CORP Form 4 · https://www.sec.gov/Archives/edgar/data/0001045810/000119903926000012/wk-form4_1788387031.xml [P1] |
| AVGO/CRDO/CLS/APLD/VRT/SMCI | — | — | — | — | — | — | N/A — 해당 종목 신규 Form 4 공시 검색 확인 안 됨 |

## [8] 향후 14일 주요 일정 (2026-09-16 ~ 2026-09-30)

### 경제 캘린더

| 일자(ET) | 지표/이벤트 | 출처 |
|----------|-------------|------|
| 2026-09-16 08:30 | 8월 소매판매(Advance Retail Sales) | ts2.tech · U.S. Retail Sales Arrive Wednesday, 5½ Hours Before the Fed Decides · https://ts2.tech/en/u-s-retail-sales-arrive-wednesday-5%C2%BD-hours-before-the-fed-decides/ [P3] |
| 2026-09-16 14:00 | FOMC 정책결정 발표 + 점도표(SEP) + 파월 이후 신임 의장 Warsh 기자회견 | Kiplinger · September Fed Meeting: Live Updates and Commentary · https://www.kiplinger.com/investing/live/fed-meeting-updates-and-commentary-september-2026 [P3] |
| 2026-09-29 10:00 | JOLTS(구인·이직보고서) | FedRateCalc · September 2026 U.S. Economic Calendar · https://fedratecalc.com/us-economic-calendar/september-2026/ [P3] |

### 기업 캘린더

| 일자 | 기업/이벤트 | 출처 |
|------|-------------|------|
| 2026-09-30 | Micron Technology(MU) 회계 4분기 실적 발표 | StockTitan · Micron sets Sept. 30 date for its next quarterly earnings call · https://www.stocktitan.net/news/MU/micron-technology-to-report-fiscal-fourth-quarter-results-on-db9s7g1vizzp.html [P3] |

## [9] 오늘의 사실 목록 (순위 없음)

- [1] S&P500 7,585.73, -0.45% (2026-09-15 종가) · CNBC [P2]
- [1] NASDAQ 종합 25,981.57, -0.78% (2026-09-15 종가) · CNBC [P2]
- [1] Dow 30 52,093.11, -328.09pt(-0.63%) (2026-09-15 종가) · CNBC [P2]
- [1] Russell2000, SOX 9/15 종가 수치 검색 확인 불가 · N/A
- [1] Brent 원유 약 $109/배럴, 이란 관련 공급 차질 우려 반영 · Yahoo Finance [P2]
- [1-A] ES선물 7,663.5(+0.50%), NQ선물 29,275(+0.42%), YM선물 52,575(+0.26%), RTY선물 2,896.3(+0.08%), 2026-09-15 19:24(ET) 기준 · CBOE/CME(Yahoo) [P1]
- [1-A] VIX 17.2(+0.58%), VIX9D 17.21, VIX3M 19.36, VVIX 94.91, SKEW 146.61(-3.60%) · CBOE/CME(Yahoo) [P1]
- [1-A] VIX3M/VIX 1.126(콘탱고), VIX/VIX9D 0.999(백워데이션) · CBOE/CME(Yahoo) [P1]
- [1-A] SPX Put/Call 거래량비 1.211, QQQ Put/Call 거래량비 1.042 · CBOE 옵션체인 [P1]
- [1-A] WTI 105.44(+3.99%) · 금 4,325.1(-0.62%) · DXY 99.61(+0.15%) · ZN 105.97(-0.43%), 2026-09-15 19:24(ET) 기준(DXY는 18:04 ET) · CBOE/CME(Yahoo) [P1]
- [2] FOMC 정책결정 발표는 2026-09-16 오후 2:00(ET) 예정 · Kiplinger [P3]
- [2] CME FedWatch, 25bp 인상 확률 84.1%(2026-09-14 기준) · KuCoin(CME FedWatch 인용) [P3]
- [2] 10년물 국채 수익률 장중 5.041%(2007년 7월 이후 최고), 2년물 4.656% · CNBC [P2]
- [2] Fed 의장 Warsh, 8/28 잭슨홀에서 "underlying trends have meaningfully improved"는 아니라고 발언 · Fed 공식 발언록 [P1]
- [2] 재무장관 Bessent, 국채 금리가 "global issues"를 반영한다고 발언 · Reuters [P2]
- [3] 8월 소매판매는 2026-09-16 08:30(ET) 발표 예정, 본 수집 시점 기준 발표 전 · ts2.tech [P3]
- [3] 8월 CPI 전월비 +0.4%/전년비 +3.4%, 근원 전월비 +0.3%/전년비 +2.4%(컨센서스 부합) · CNBC [P2]
- [4] Skyworks Solutions(SWKS) +10%, Qorvo 220억달러 합병 규제 통과 기대 · Yahoo Finance [P2]
- [4] Dave & Buster's(PLAY) -17%, 2분기 매출 컨센서스 하회 및 순손실 1,250만달러 · StockTitan [P3]
- [4] Dell Technologies(DELL) +5.65%, AI 서버 수주잔고 950억달러 언급 · Yahoo Finance [P2]
- [4] Revvity(RVTY) +5.56%, 헬스케어 컨퍼런스 경영진 코멘트 · Yahoo Finance [P2]
- [4-A] Broadcom CEO, AI 반도체 매출 목표(FY2027 1,150억달러→FY2028 2,300억달러) 재확인 · CNBC [P2]
- [4-A] JPMorgan, 3분기 은행 수수료·마켓 매출 두 자릿수 성장 전망 · Yahoo(Finnhub) [P3]
- [4-A] Exxon Mobil, 텍사스 탄소포집 프로젝트 승인 획득 · Yahoo(Finnhub) [P3]
- [5] Dell, AI 서버 수주잔고 950억달러(전분기 513억달러 대비 급증), FY2027 매출 전망 1,920억달러로 상향 · Yahoo Finance [P2]
- [5] Broadcom CEO, "demand actually exceeds this outlook" 발언(AI 반도체 수요) · CNBC [P2]
- [5-A] MSFT/AMZN/GOOGL/META 실적 시즌 아님, 신규 CAPEX 가이던스 갱신 확인 안 됨 · N/A
- [6] 시총 상위 10 AI 무관 특기 뉴스 없음 · N/A
- [7] ETF 자금 흐름·블록트레이드·비정상 옵션활동 우선종목군 관련 확인 가능한 수치 없음 · N/A
- [7-A] NVDA 내부자, Parker(RSU 취득 172,507주 9/9), Stevens(매도, 8/31~9/4), Teter(10b5-1 매도 30,000주, 8/31) · SEC EDGAR [P1]
- [8] 2026-09-16 08:30(ET) 8월 소매판매, 14:00(ET) FOMC 정책결정 발표 · 각 출처 [P3]
- [8] Micron Technology, 2026-09-30 회계 4분기 실적 발표 예정 · StockTitan [P3]
