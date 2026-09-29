# 미국 시장 데일리 수집 결과 (Collect)
# 기준일: 2026-09-29 (화) · 미국 정규장 종가 기준 · 실행모드: 데일리
# 생성시각(KST): 2026-09-30 06:30

## [1] 미국 주요 지수 (데일리)

| 항목 | 종가/수치 | 등락률 | (보도된) 원인 | 출처+태그 |
|------|-----------|--------|----------------|-----------|
| S&P500 | N/A — 확인 필요 | N/A — 확인 필요 | N/A | N/A — 검색 결과 간 수치 불일치(7,670.84/-0.16% · 7,683.69/-0.8% · 7,697.91/-0.17% · +0.09% 등 자료마다 상이, 단정 불가) |
| 나스닥종합 | 26,797.54 | -0.09% | 국채금리 고공행진, 소비자심리 약세 지속 | Yahoo Finance / TheStreet · Stock Market News for Sep 29, 2026 · 2026-09-29 (ET) · https://finance.yahoo.com/markets/stocks/articles/stock-market-news-sep-29-083000758.html [P3] |
| 다우존스 | 51,349.92 | -0.26% (-131.59pt) | 국채금리 고공행진, 소비자심리 약세 지속 | Yahoo Finance / TheStreet · Stock Market News for Sep 29, 2026 · 2026-09-29 (ET) · https://finance.yahoo.com/markets/stocks/articles/stock-market-news-sep-29-083000758.html [P3] |
| 러셀2000 | N/A — 확인 필요 | N/A — 확인 필요 | N/A | N/A — 검색 결과 간 수치 불일치(2,807.92/-0.35% · -0.71% 등 자료마다 상이, 단정 불가) |
| 필라델피아 반도체지수 (SOX) | N/A | N/A | N/A | N/A — 검색으로 종가 확인 불가 |
| 브렌트유 | 105.31 (달러/배럴) | +0.03% | N/A — 보도상 별도 원인 언급 없음 | Trading Economics · Brent crude oil historical data · 2026-09-29 · https://tradingeconomics.com/commodity/brent-crude-oil [P3] |

> 비고: S&P500·러셀2000 종가는 검색 결과 간 수치가 자료마다 크게 달라(WebFetch로 1차 대조 불가) 창작 금지 원칙에 따라 N/A 처리했다. 다우·나스닥은 서로 다른 두 매체(Yahoo Finance, TheStreet)에서 동일 수치가 재현되어 채택했다.

## [1-A] 선물·변동성 구조 (0_data.md 원문 그대로 인용)

### 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,738.25 | -0.11% | 7,746.75 | 2026-09-29 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 30,652.75 | +0.28% | 30,566.25 | 2026-09-29 16:59 |
| 다우 선물 (YM) | `YM=F` | 51,755 | -0.16% | 51,837 | 2026-09-29 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,831.4 | -0.31% | 2,840.1 | 2026-09-29 16:59 |

### 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 16.04 | -0.19% | 16.07 | 2026-09-29 16:15 |
| VIX9D (9일) | `^VIX9D` | 14.21 | -1.25% | 14.39 | 2026-09-29 16:15 |
| VIX3M (3개월) | `^VIX3M` | 18.09 | -0.77% | 18.23 | 2026-09-29 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 89.71 | -1.44% | 91.02 | 2026-09-29 16:15 |
| SKEW (테일리스크) | `^SKEW` | 144.58 | -1.14% | 146.25 | 2026-09-29 17:00 |

### 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 미 10년 국채선물 | `ZN=F` | 104.53 | +0.04% | 104.48 | 2026-09-29 16:59 |
| 금 | `GC=F` | 4,215 | -2.46% | 4,321.2 | 2026-09-29 16:59 |
| WTI | `CL=F` | 88.94 | -3.95% | 92.6 | 2026-09-29 16:59 |
| 달러지수 (DXY) | `DX-Y.NYB` | 101.39 | +0.19% | 101.2 | 2026-09-29 17:20 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.128 | 콘탱고 |
| VIX / VIX9D | 1.129 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. 분류명일 뿐 해석이 아니다.

### Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.101 | 1.390 | 2,319,181 | 2,552,817 | 30,110 |
| 나스닥100 ETF 옵션 (QQQ) | 1.077 | 1.416 | 4,095,888 | 4,411,717 | 11,330 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## [2] 금리/연준 (데일리)

| 항목 | 사실 내용(발언·수치) | 출처+태그 |
|------|----------------------|-----------|
| 존 윌리엄스 (NY 연은 총재, FOMC 부의장) 발언 | "With the policy action we took at our September meeting, there is no need for urgency" — 9월 회의 이후 추가 인상 서두르지 않겠다는 취지 발언 (버팔로대학교 연설) | Reuters (via Investing.com) · Fed's Williams sees no urgency for next Fed rate hike · 2026-09-29 (ET) · https://www.investing.com/news/economy-news/feds-williams-sees-no-urgency-for-next-fed-rate-hike-4923302 [P2] |
| 윌리엄스 향후 전망 발언 | "If the economy evolves in a manner broadly consistent with my forecast, one further upward adjustment of the federal funds target range may be appropriate late this year" | Bloomberg · Fed's Williams Sees One More Interest Rate Hike in Late 2026 · 2026-09-29 (ET) · https://www.bloomberg.com/news/articles/2026-09-29/fed-s-williams-sees-one-more-interest-rate-hike-in-late-2026 [P2] |
| 윌리엄스 인플레이션 전망 발언 | 연내 인플레이션 3.5%로 마무리, 2028년까지 2% 목표 도달 전망이라고 발언 | FXStreet · Fed's Williams says worst inflation shocks have passed · 2026-09-29 (ET) · https://www.fxstreet.com/news/feds-williams-says-worst-inflation-shocks-have-passed-202609291918 [P3] |
| 9월 FOMC 정책금리 (배경) | 9월 15-16일 FOMC에서 25bp 인상, 목표범위 3.75~4.00%로 결정 (2023년 이후 첫 인상) | FXStreet / Bloomberg 보도 종합 · 2026-09-29 (ET) [P2] |
| 미 2년물 국채금리 | 4.935% | Bloomberg · US 30-Year Treasury Yield Rises to Highest Level Since 2002 · 2026-09-29 (ET) · https://www.bloomberg.com/news/articles/2026-09-29/us-30-year-treasury-yield-approaches-highest-level-since-2002 [P2] |
| 미 10년물 국채금리 | 5.276~5.282% (자료 간 소폭 편차, 상승) | Bloomberg / Investrade Market Review · 2026-09-29 (ET) · https://www.bloomberg.com/news/articles/2026-09-29/us-30-year-treasury-yield-approaches-highest-level-since-2002 [P2] |
| 10Y-2Y 스프레드 | 약 +0.34%p (10년 5.276~5.282% - 2년 4.935%, 산술 계산치) | 위 두 출처 수치로부터 산출 [P2] |
| 미 30년물 국채금리 | 5.612%, 2002년 6월 이후 24년 만에 최고치 | Bloomberg · US 30-Year Treasury Yield Rises to Highest Level Since 2002 · 2026-09-29 (ET) · https://www.bloomberg.com/news/articles/2026-09-29/us-30-year-treasury-yield-approaches-highest-level-since-2002 [P2] |
| CME FedWatch (10/28 FOMC) | N/A — 확인 필요 (검색 결과 간 확률 수치 불일치: 68%/72.3%/51% 등 자료마다 상이, 기준시점도 불명확하여 단정 불가) | N/A |

## [3] 주요 경제지표 (데일리, 조건부)

| 지표 | 발표시각(ET·KST) | 발표치 | 예상치 | 이전치 | 서프라이즈(산술값) | 출처 |
|------|-------------------|--------|--------|--------|----------------------|------|
| Conference Board 소비자신뢰지수 (9월) | 2026-09-29 10:00 ET · 2026-09-29 23:00 KST | 81.9 | 89~90 (다우존스 설문 컨센서스 89) | 88.6 | -7.1~-8.1pt (서프라이즈, 산술) | Reuters (via Investing.com) · US consumer confidence dives to more than 12-year low in September · 2026-09-29 (ET) · https://www.investing.com/news/economic-indicators/us-consumer-confidence-dives-to-more-than-12year-low-in-september-4923037 [P2] |
| JOLTS 구인건수 (8월) | 2026-09-29 (발표시각 N/A) | 707.9만 건 | 723만 건 | 733.5만 건 | -15.1만 건 (서프라이즈, 산술) | Investing.com · JOLTs job openings and consumer confidence among data due Tuesday · 2026-09-29 (ET) · https://www.investing.com/news/stock-market-news/jolts-job-openings-and-consumer-confidence-among-data-due-tuesday-93CH-4920970 [P3] |

## [4] 특징 종목 (데일리)

| 종목 | 티커 | 등락률 | 거래량 | (보도된) 핵심 사실 | 출처+태그 |
|------|------|--------|--------|----------------------|-----------|
| Carnival | CCL | +11.65% | N/A | 3분기 실적이 월가 예상치 상회 | Motley Fool · Stock Market Midday, Sept. 29 · 2026-09-29 (ET) [P3] |
| Summit Therapeutics | N/A | +18% | N/A | 아스트라제네카로부터 20억 달러 투자 발표 | Motley Fool · Stock Market Midday, Sept. 29 · 2026-09-29 (ET) [P3] |
| Bloom Energy | BE | +10.89% | N/A | 전일 급락분 회복, Jefferies가 목표주가 상향 | Motley Fool · Stock Market Midday, Sept. 29 · 2026-09-29 (ET) [P3] |
| Plug Power | PLUG | +5.34% | N/A | 280메가와트 규모 전해조(electrolyzer) 공급계약 체결 발표 | Motley Fool · Stock Market Midday, Sept. 29 · 2026-09-29 (ET) [P3] |
| Fair Isaac | FICO | -21.63% | N/A | 연방주택금융청(FHFA)이 모기지 신용평가 가격정책 변경 발표, FICO의 모기지 신용점수 독점적 지위에 경쟁 도입 | Motley Fool · Stock Market Midday, Sept. 29 · 2026-09-29 (ET) [P3] |
| Lamar Advertising | LAMR | -5.04% | N/A | 미 국채금리 급등 및 거시 여건 부담 | Motley Fool · Stock Market Midday, Sept. 29 · 2026-09-29 (ET) [P3] |
| Iovance Biotherapeutics | IOVA | +31.48% | N/A | 2026 회계연도 매출 가이던스를 중간값 기준 5,500만 달러 상향한 4.1억~4.2억 달러로 상향 | Vistapglobal · Daily Stock Market Summary, Sept. 29, 2026 · 2026-09-29 (ET) [P3] |

## [4-A] 섹터별 뉴스 (0_data.md Finnhub 수집분, [4]/[5]/[6] 중복 제외)

| 섹터 | 종목 | 사실 내용 | 발행시각(ET) | 출처+태그 |
|------|------|-----------|---------------|-----------|
| 반도체·AI | AVGO | "Broadcom Stock Jumps Nearly 3.2% as $16.7 Billion AI Engine Faces Margin Test" 제하 기사 게재 | 2026-09-29 14:46 | Yahoo (Finnhub 수집) [P3] |
| 금융 | JPM | "Michigan LIFT Launches to Accelerate Industrial Innovation, Scale Manufacturing Growth and Strengthen U.S. Competitiveness" 제하 기사에서 JPM 언급 | 2026-09-29 11:30 | Yahoo (Finnhub 수집) [P3] |
| 에너지 | XOM | ExxonMobil, 아프리카 대형 LNG 프로젝트 관련 SLB 합작사와 계약 체결 보도 | 2026-09-29 13:45 | Yahoo (Finnhub 수집) [P3] |
| 에너지 | XOM | Exxon 베테랑 임원 Liam Mallon, 심해저 채굴 추진을 앞두고 TMC 이사회 합류 | 2026-09-29 13:40 / 11:24 | Yahoo / Reuters (Finnhub 수집) [P3] |
| 헬스케어 | UNH | UNH 주가 관련 투자자 동향 기사 게재 (다우존스 구성종목 중 변동 종목으로 언급) | 2026-09-29 15:10 / 14:25 / 12:40 | ChartMill / Yahoo (Finnhub 수집) [P3] |
| 소비재·유통 | AMZN | "SpaceX Briefly Passed Amazon and Microsoft in Market Cap After Its IPO. Could It Get There Again?" 제하 기사 게재 | 2026-09-29 15:19 | Yahoo (Finnhub 수집) [P3] |

> 반도체·AI 섹터의 NVDA 관련 항목(Sector Update, Trump-Jensen Huang 회동 등)은 [5]/[9] 중복을 피하기 위해 본 섹션에서는 생략했다.

## [5] AI 인프라 — 공급 측 (데일리)

| 기업 | 뉴스 제목 | 사실 내용 | 출처일자 | 출처+태그 |
|------|-----------|-----------|-----------|-----------|
| Broadcom (AVGO) | Broadcom Stock Jumps Nearly 3.2% as $16.7 Billion AI Engine Faces Margin Test | 브로드컴 주가 약 3.2% 상승, "167억 달러 규모 AI 엔진"과 마진 관련 내용을 다룬 기사 게재 (수치는 기사 제목 인용, 세부 내용 추가 확인 필요) | 2026-09-29 | Yahoo Finance (Finnhub 수집) · 2026-09-29 14:46 (ET) [P3] |
| TSMC (TSM) | TSMC Just Shared Fantastic News for Nvidia and Broadcom Investors | TSMC 월간 매출 데이터가 3분기 반도체 수요가 예상보다 견조함을 시사한다고 보도 | 2026-09-29 무렵 | Yahoo Finance · https://finance.yahoo.com/news/tsmc-just-shared-fantastic-news-103000487.html [P3] |
| Credo Technology (CRDO) | ECOC 2026 참가 및 ZeroFlap 광트랜시버 제품군 발표 | 9월 21~23일 스페인 말라가 ECOC 2026에서 광연결·실리콘포토닉스 기술 시연, 9월 중순 ZeroFlap 광트랜시버 제품군 발표. Mizuho는 9월 20일 목표주가를 290달러에서 245달러로 하향 | 2026-09-20~23 | Credo Technology IR / Mizuho 리포트 보도 종합 [P2] |
| Vertiv (VRT) | UtilityInnovation Group / King Environmental Services 인수 | AI 데이터센터 전력 공급 시간 단축을 위해 UtilityInnovation Group 인수 계약(9/2), 유체관리 서비스 확장을 위해 King Environmental Services 인수 계약(9/24) 체결 발표 | 2026-09-02, 2026-09-24 | Vertiv (CNBC 시세 페이지 경유 확인) [P1] |
| Micron (MU) | 9/30 4분기 실적발표 예정 (9/29 기준 아직 미발표) | 9월 30일 장 마감 후 실적발표 예정. 가이던스: 매출 500억 달러(±10억), GAAP EPS 30.73달러(±1달러). 4분기 설비투자 약 100억 달러, FY26 전체 설비투자 약 270억 달러 전망(직전 가이던스) | 가이던스 발표일 기준, 발표 예정일 2026-09-30 | Micron Technology IR (8-K) / Micron 투자자 공지 · https://investors.micron.com/news/press-release/2026/Micron-Technology-to-Report-Fiscal-Fourth-Quarter-Results-on-September-30-2026/default.aspx [P1] |
| Anthropic (비상장, AI 인프라 발주사) | IPO 신청서: 10년간 518억 달러 규모 AI 인프라 지출 계획 공개 | Anthropic이 SEC IPO 서류에서 6개 파트너와 10년간 최소 5,180억 달러 규모 AI 인프라 지출 계획을 공개. 이 중 약 80%가 사용량과 무관하게 취소 불가능한 계약. 세부: Google 1,111억 달러, Amazon 1,100억 달러, Microsoft 314억 달러 규모의 장기 인프라 서비스 의무, Broadcom 관련 장비 리스 의무 약 1,612억 달러 | 2026-09-29 | Reuters (via CNBC) · Anthropic warns of AI's 'existential risk to humanity' in IPO filing · 2026-09-29 (ET) · https://www.cnbc.com/2026/09/29/anthropic-warns-ai-existential-risks-ipo-filing-reuters.html [P2]; 추가출처: PYMNTS · Anthropic IPO Plans Show $518 Billion in Projected Spending [P3] |
| HBM/DRAM 현물가 | DDR4 현물가 45달러선 돌파(9/11 기준), HBM3E 36GB 스택 리셀 가격 2,100달러(8/31 기준, 장기계약가 대비 4~5배) | 반도체 메모리 현물가 상승 추세 지속 보도 (9/29 당일 신규 수치 아님, 최근 보도된 값) | 2026-09-11 (DDR4), 2026-08-31 (HBM3E) | TrendForce DRAMeXchange / Seoul Economic Daily 보도 인용 · https://www.trendforce.com/presscenter/news/20260616-13102.html [P3] |
| NVDA | Trump-Jensen Huang 등 AI 리더 회동 관련 보도 | 트럼프 대통령과 Alex Karp(팔란티어), Jensen Huang(엔비디아) 등 AI 업계 리더들의 회동 관련 내용 보도 (세부 의제 확인 필요) | 2026-09-29 | Yahoo (Finnhub 수집) · 2026-09-29 15:40 (ET) [P3] |

## [5-A] AI 인프라 — 수요 측/하이퍼스케일러 CAPEX (실적시즌 조건부)

신규 변동 없음 — 직전 가이던스 유지(2026-07~08 실적발표 시점 가이던스 기준, 실적시즌 아님)

## [6] 시총 상위 10 — AI 무관 일반 이슈 (조건부)

| 기업 | 사실 내용 | 출처일자 | 출처+태그 |
|------|-----------|-----------|-----------|
| Apple (AAPL) | "John Ternus' vision for Apple is coming into view" 제하 기사에서 애플 COO 존 터너스 관련 내용 보도 (세부 내용 확인 필요) | 2026-09-29 | CNBC · https://www.cnbc.com/2026/09/29/john-ternus-vision-for-apple-is-coming-into-view-and-we-like-what-we-see.html [P2] |
| Amazon (AMZN) | "SpaceX Briefly Passed Amazon and Microsoft in Market Cap After Its IPO. Could It Get There Again?" 제하 기사에서 스페이스X IPO 이후 시가총액 비교 보도 | 2026-09-29 | Yahoo Finance (Finnhub 수집) · 2026-09-29 15:19 (ET) [P3] |

## [7] 기관·대형 자금 수급 (데일리)

| 항목 | 종목 | 사실 내용 | 규모(수치) | 출처+태그 |
|------|------|-----------|-------------|-----------|
| 반도체 ETF 자금흐름 | SMH (VanEck Semiconductor ETF) | 최근 1개월(9/26 기준) 순유출 | -1억 7,600만 달러 (운용자산의 -0.3%) | ETF 자금흐름 집계 보도 · 기준일 2026-09-26 [P3] |
| 반도체 ETF 자금흐름 | SOXX / QQQ | N/A — 9/29 당일 기준 구체적 자금흐름 수치 검색으로 확인 불가 | N/A | N/A |
| 대량거래/블록트레이드 | NVDA, AVGO | N/A — 9/29 당일 특정 대량거래·비정상 옵션 거래 내역 검색으로 확인 불가 | N/A | N/A |

## [7-A] Insider Trading (SEC Form 4, 조건부)

N/A — Form 4 신규 공시 없음 (NVDA·AVGO·CRDO·CLS·APLD·VRT·SMCI 대상 2026-09-29 당일 신규 공시 검색 결과 없음. 참고: NVDA는 9/2, 9/16~17에 별도 Form 4 공시가 있었으나 기준일과 무관하여 본 항목에서는 제외)

## [8] 향후 14일 주요 일정 (2026-09-30 ~ 2026-10-14)

### 경제 일정

| 날짜 | 시각(ET·KST) | 이벤트 | 컨센서스 | 이전치 | 출처 |
|------|---------------|--------|----------|--------|------|
| 2026-10-02 | 08:30 ET · 21:30 KST | 미 고용상황보고서(9월, Employment Situation) | N/A — 확인 필요 | N/A — 확인 필요 | BLS 일정 · https://www.bls.gov/schedule/2026/10_sched_list.htm [P1] |
| 2026-10-14 | 08:30 ET · 21:30 KST | 소비자물가지수(CPI, 9월) | N/A — 확인 필요 | N/A — 확인 필요 | 경제캘린더 종합 (FedRateCalc 등) [P3] |
| 2026-10-15 | 08:30 ET · 21:30 KST | 생산자물가지수(PPI, 9월) | N/A — 확인 필요 | N/A — 확인 필요 | 경제캘린더 종합 (FedRateCalc 등) [P3] — 참고: 14일 범위(10/14)를 하루 초과하나 근접 일정으로 병기 |
| 2026-10-27~28 | 발표: 10/28 14:00 ET · 10/29 03:00 KST | FOMC 정례회의 및 정책금리 발표 | N/A — 확인 필요 | 3.75~4.00% (9월 결정치) | 경제캘린더 종합 (FedRateCalc 등) [P3] — 참고: 14일 범위를 초과하나 근접 주요 일정으로 병기 |

> 10/2 고용보고서 외 10일~14일 구간의 소매판매, 산업생산 등 세부 지표는 검색으로 개별 확인하지 못해 생략했다. 컨센서스·이전치 수치는 발표 임박 전까지 다수 자료에서 확정치가 부재하여 N/A로 표기했다.

### 기업 일정

| 날짜 | 기업 | 이벤트 | 컨센서스 EPS | 컨센서스 매출 | 출처 |
|------|------|--------|----------------|----------------|------|
| 2026-09-30 | Micron (MU) | FY2026 4분기 실적발표 (장 마감 후) | 가이던스 기준 GAAP EPS 30.73달러(±1달러) | 가이던스 기준 약 500억 달러(±10억), Zacks 컨센서스 508.6억 달러 | Micron IR · https://investors.micron.com/news/press-release/2026/Micron-Technology-to-Report-Fiscal-Fourth-Quarter-Results-on-September-30-2026/default.aspx [P1] |
| 2026-10-13 | JPMorgan Chase (JPM) | 3분기 실적발표 (장 개장 전) | N/A — 확인 필요 | N/A — 확인 필요 | 실적캘린더 보도 종합 [P3] |
| 2026-10-15 | TSMC (TSM) | 3분기 실적발표 | N/A — 확인 필요 | N/A — 확인 필요 | TSMC 투자자 캘린더 · https://investor.tsmc.com/english/financial-calendar [P1] — 참고: 14일 범위를 하루 초과 |

> 대형 은행(JPM 등) 및 TSMC 실적은 10월 둘째~셋째 주에 집중되며, 아마존(10/29)·테슬라(10/28) 등 빅테크 실적은 14일 범위(10/14) 밖이라 제외했다. 범위 내 확인된 주요 기업 이벤트는 Micron 실적발표가 유일하다.

## [9] 오늘의 사실 목록 (순위 없음)

- [1] S&P500 종가 N/A — 검색 결과 간 수치 불일치로 확인 필요
- [1] 나스닥종합 26,797.54, -0.09% · Yahoo Finance/TheStreet [P3]
- [1] 다우존스 51,349.92, -0.26%(-131.59pt) · Yahoo Finance/TheStreet [P3]
- [1] 러셀2000 종가 N/A — 검색 결과 간 수치 불일치로 확인 필요
- [1] 브렌트유 105.31달러, +0.03% · Trading Economics [P3]
- [1-A] VIX 16.04(-0.19%), VIX3M/VIX=1.128(콘탱고), VIX/VIX9D=1.129(콘탱고) · CBOE/Yahoo (0_data.md)
- [1-A] SPX Put/Call(거래량) 1.101, QQQ Put/Call(거래량) 1.077 · CBOE (0_data.md)
- [2] 뉴욕연은 총재 존 윌리엄스, "9월 조치 이후 서두를 필요 없다" 발언 · Reuters [P2]
- [2] 윌리엄스, "연내 추가 한 차례 인상이 적절할 수 있다"는 전망 제시 · Bloomberg [P2]
- [2] 미 10년물 국채금리 5.276~5.282%, 2년물 4.935%, 30년물 5.612%(2002년 6월 이후 최고) · Bloomberg [P2]
- [3] 9월 컨퍼런스보드 소비자신뢰지수 81.9(예상 89~90, 전월 88.6), 2014년 이후 최저 · Reuters [P2]
- [3] 8월 JOLTS 구인건수 707.9만 건(예상 723만 건, 전월 733.5만 건) · Investing.com [P3]
- [4] Carnival(CCL) +11.65%, 3분기 실적 예상치 상회 · Motley Fool [P3]
- [4] Summit Therapeutics +18%, 아스트라제네카 20억 달러 투자 발표 · Motley Fool [P3]
- [4] Fair Isaac(FICO) -21.63%, FHFA 모기지 신용평가 가격정책 변경 발표 · Motley Fool [P3]
- [4] Iovance Biotherapeutics(IOVA) +31.48%, 2026년 매출 가이던스 4.1억~4.2억 달러로 상향 · Vistapglobal [P3]
- [4-A] 브로드컴(AVGO) 주가 약 3.2% 상승, "167억 달러 AI 엔진" 마진 관련 기사 게재 · Yahoo (Finnhub) [P3]
- [4-A] ExxonMobil(XOM), 아프리카 LNG 프로젝트 관련 SLB 합작사와 계약 보도 · Yahoo (Finnhub) [P3]
- [5] TSMC 월간 매출 데이터, 3분기 반도체 수요 견조 시사 보도 · Yahoo Finance [P3]
- [5] Credo Technology, ECOC 2026에서 ZeroFlap 광트랜시버 제품군 발표(9/21~23) · Credo IR [P2]
- [5] Vertiv, UtilityInnovation Group(9/2)·King Environmental Services(9/24) 인수 계약 발표 · Vertiv [P1]
- [5] Micron, 9/30 4분기 실적발표 예정, 가이던스 매출 500억 달러(±10억) · Micron IR [P1]
- [5] Anthropic IPO 서류, 10년간 5,180억 달러 AI 인프라 지출 계획 공개(Google 1,111억·Amazon 1,100억·Microsoft 314억 달러 등) · Reuters(CNBC) [P2]
- [5-A] AI 인프라 수요 측(MSFT/AMZN/GOOGL/META) 신규 변동 없음 — 직전 가이던스 유지
- [6] 애플, "존 터너스의 비전" 관련 기사 게재 · CNBC [P2]
- [6] 아마존, 스페이스X IPO 이후 시가총액 비교 기사 게재 · Yahoo Finance (Finnhub) [P3]
- [7] SMH(반도체 ETF), 최근 1개월(9/26 기준) 순유출 1억 7,600만 달러 · ETF 자금흐름 보도 [P3]
- [7-A] Form 4 신규 공시 없음(대상 종목 기준일 당일 기준)
- [8] 10/2 미 9월 고용상황보고서 발표 예정 · BLS [P1]
- [8] 10/14 9월 CPI, 10/15 9월 PPI 발표 예정 · 경제캘린더 종합 [P3]
- [8] 10/27~28 FOMC 정례회의, 10/28 정책금리 발표 예정 · 경제캘린더 종합 [P3]
- [8] Micron, 9/30 장 마감 후 FY26 4분기 실적발표 예정 · Micron IR [P1]
