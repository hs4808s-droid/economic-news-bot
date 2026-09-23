# 미국 시장 데일리 수집 결과 (Collect)
# 기준일: 2026-09-24 (목) · 미국 정규장 종가 기준(2026-09-23) · 실행모드: [데일리]
# 생성시각(KST): 2026-09-24 07:30

---

## [1] 미국 주요 지수 〔데일리〕

| 항목 | 종가/수치 | 등락률 | (보도된) 원인 | 출처+태그 |
|------|-----------|--------|----------------|-----------|
| S&P500 | 7,706.03 | -0.75% | 국채금리 급등(10년물 19년래 최고 수준), 유가 상승, Fed 매파 발언 | Yahoo Finance · "Stock market today: Dow, S&P 500, Nasdaq tumble as 10-year Treasury yield surges to 2007 high" · 2026-09-23 (ET) · https://finance.yahoo.com/markets/live/stock-market-today-wednesday-september-23-dow-sp-500-nasdaq-080556640.html [P2] |
| NASDAQ 종합 | 26,936.04 | -1.13% | 상동(금리 급등에 따른 성장주 매도) | 상동 [P2] |
| Dow | 51,511.59 | -0.68% (-352.10p) | 상동 | 상동 [P2] |
| Russell2000 | 2,838 | -1.77% (-51.25p) | 상동(중소형주 금리 민감도) | Investrade · "Market Review: September 23, 2026" · 2026-09-23 (ET) · https://investrade.com/market-review-september-23-2026/ [P3] |
| SOX (필라델피아 반도체지수) | N/A(종가 수치 미확인) | 약 -1% | 금리 급등에 따른 성장/반도체주 조정 | Investrade · "Market Review: September 23, 2026" · 2026-09-23 (ET) [P3] — 정확 종가는 검색으로 확인 불가, N/A |
| Brent (리스크) | 종가 확인치 상이(103.08 또는 101.61 보도 혼재) | +2.4%~+3.9%(매체별 상이) | 이란 페제시키안 대통령 "항복하지 않겠다" 발언, 사우디 동-서 파이프라인 재가동 준비로 호르무즈 우회 공급 기대 혼재 | Reuters · "Oil settles up around 4% as Iran's president vows to never surrender" · 2026-09-23 14:48(ET) · https://news.google.com/rss/articles/CBMipgFBVV95cUxOeFhpNFFXWGZ2azRGVllBNXpwLXZQeTFySkY3Vi12SmpTNmMyY09oU3RMa3Rqb21pNUl0ZGhSbVBWQnZBOXdOb19xSlU3TnNra0F6OWowVHp5RHlSblJGTVhXandWeEFJaDBOTi1VcjdrSjVNeGVJZnVjeUJXM3NVYUgxZ28yQkVuWXNhc1pxd093NVVBTHZnWm40c01OS00zZHAwRWVR?oc=5 [P2] |

> ⚠️ Brent 종가는 매체 간 수치(101.61 vs 103.08)와 등락률(+2.37% vs +3.9%) 불일치가 확인되어 단일 값으로 확정하지 못함 — 두 보도치를 병기. 원인 서술(이란 관련)은 공통.

---

## [1-A] 선물·변동성 구조 〔0_data.md 그대로 인용〕

### 선물 (한국 아침 시점)

| 항목 | 현재가 | 전일 대비 | 직전 종가 | 기준시각(ET) | 출처+태그 |
|------|--------|-----------|-----------|--------------|-----------|
| S&P500 선물 (ES) | 7,772.75 | -0.75% | 7,831.75 | 2026-09-23 16:59 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 나스닥100 선물 (NQ) | 30,776 | -0.81% | 31,028.5 | 2026-09-23 16:59 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 다우 선물 (YM) | 51,868 | -0.79% | 52,279 | 2026-09-23 16:59 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 러셀2000 선물 (RTY) | 2,859.8 | -1.86% | 2,914.1 | 2026-09-23 16:59 | CBOE / CME (Yahoo chart API 자동수집) [P1] |

### 변동성 구조

| 항목 | 수치 | 전일 대비 | 출처+태그 |
|------|------|-----------|-----------|
| VIX (30일) | 15.18 | +2.08% | CBOE (Yahoo chart API 자동수집) [P1] |
| VIX9D (9일) | 13.45 | +2.36% | CBOE (Yahoo chart API 자동수집) [P1] |
| VIX3M (3개월) | 18.11 | +0.17% | CBOE (Yahoo chart API 자동수집) [P1] |
| VVIX | 88.6 | +3.30% | CBOE (Yahoo chart API 자동수집) [P1] |
| SKEW | 146.15 | +2.79% | CBOE (Yahoo chart API 자동수집) [P1] |

기간구조: VIX3M/VIX = 1.193 (콘탱고) · VIX/VIX9D = 1.129 (콘탱고) — CBOE (Yahoo chart API 자동수집) [P1]

### Put/Call 비율

| 대상 | P/C(거래량) | P/C(미결제약정) | 콜 거래량 | 풋 거래량 | 출처+태그 |
|------|-------------|------------------|-----------|-----------|-----------|
| S&P500 지수옵션 (SPX) | 1.052 | 1.410 | 2,226,198 | 2,341,329 | CBOE 옵션체인 직접집계 (자동수집) [P1] |
| 나스닥100 ETF 옵션 (QQQ) | 0.877 | 1.390 | 4,547,953 | 3,986,300 | CBOE 옵션체인 직접집계 (자동수집) [P1] |

### 기타 매크로 (0_data.md 수록)

| 항목 | 현재가 | 전일 대비 | 직전 종가 | 기준시각(ET) | 출처+태그 |
|------|--------|-----------|-----------|--------------|-----------|
| 미 10년 국채선물 (ZN=F) | 105.03 | -0.91% | 106 | 2026-09-23 16:59 | CBOE/CME (Yahoo chart API 자동수집) [P1] |
| 금 (GC=F) | 4,322.7 | -1.23% | 4,376.4 | 2026-09-23 17:00 | CBOE/CME (Yahoo chart API 자동수집) [P1] |
| WTI (CL=F) | 92.71 | -1.99% | 94.59 | 2026-09-23 16:59 | CBOE/CME (Yahoo chart API 자동수집) [P1] |
| 달러지수 (DXY) | 101.14 | +0.70% | 100.43 | 2026-09-23 17:20 | CBOE/CME (Yahoo chart API 자동수집) [P1] |

---

## [2] 금리 / 연준 〔데일리〕

| 항목 | 사실 내용(발언·수치) | 출처+태그 |
|------|----------------------|-----------|
| 미 10년물 국채수익률 | 5.104%(장중 5.093%~5.104% 보도), 전일比 +13bp 이상. 2007년 7월 이후 최고 수준. 18개월래 최대 일간 상승폭 | CNBC · "10-year Treasury yield rockets to 19-year high. Here's what's driving the spike" · 2026-09-23(ET) · https://www.cnbc.com/2026/09/23/treasury-yields-oil-inflation-fed.html [P2] |
| 미 2년물 국채수익률 | 4.889%, 전일比 +11bp 이상 | 상동 [P2] |
| 5년물 국채수익률 | 5.033%, 2007년 이후 최초 5% 상회 | Bloomberg · "US Treasury Five-Year Yields Breach 5% for First Time Since 2007" · 2026-09-23(ET) · https://www.bloomberg.com/news/articles/2026-09-23/us-treasury-five-year-yields-breach-5-for-first-time-since-2007 [P2] |
| 10Y-2Y 스프레드 | 5.104% - 4.889% ≈ +0.215%p (산술 계산치, 매체 미보도) | 산출 근거: 상기 CNBC 보도 수치 [P2] |
| 5년물 국채 입찰 결과 | 700억 달러 입찰, 낙찰금리 5.033%(직전 입찰 4.393% 대비 급등), 응찰률(bid-to-cover) 2.21배(평균 2.33배 하회), 간접입찰 54.3%·직접입찰 29.9%·딜러 15.8% | Bloomberg/관련보도 종합 · 2026-09-23(ET) [P2] |
| S&P Global 9월 플래시 종합 PMI | 58.4 (8월 56.0 대비 상승), 2021년 7월 이후 최고 확장세 | FXStreet · "Breaking: US S&P Global Composite PMI came in at 58.4 in September" · 2026-09-23 08:45(ET) · https://www.fxstreet.com/news/sp-global-pmis-expected-to-show-resilient-us-economic-growth-in-september-202609230845 [P2] |
| S&P Global 9월 플래시 제조업 PMI | 57.0 (8월 53.9) | 상동 [P2] |
| S&P Global 9월 플래시 서비스업 PMI | 58.7 (8월 54.6) | 상동 [P2] |
| Fed 발언(매파 해석 보도 대상 발언) | Fed 고위 인사의 매파적 코멘트가 국채 금리 급등 요인 중 하나로 보도됨(발언자 특정·직접 인용문 검색으로 확인 불가) | CNBC · 상기 기사 · 2026-09-23(ET) [P2] — 발언 원문은 N/A |
| 9월 FOMC 결정(직전 회의, 참고) | 2026-09-16 FOMC서 기준금리 0.25%p 인상(3.75~4.00%), 2023년 이후 첫 인상. 위원 전원 찬성. 성명문: "Today's policy action will support a timelier return to the Committee's 2 percent goal." | CNN · "What Kevin Warsh said about the Fed's first rate hike since 2023" · 2026-09-16(ET) · https://www.cnn.com/2026/09/16/economy/fed-rate-decision-september [P2] |
| Warsh 의장 발언(9/16 관련) | "removed a dose of accommodation from the economy"라는 표현 사용 | CNBC · "Three words from Kevin Warsh have Wall Street wondering how far the Fed will go with rate hikes" · 2026-09-18(ET) · https://www.cnbc.com/2026/09/18/three-words-from-kevin-warsh-have-wall-street-wondering-how-far-the-fed-will-go-with-rate-hikes.html [P2] |
| 향후 인상 전망(점도표, 참고) | 전망 제출한 18명 위원 중 16명이 연내 추가 1회 이상 인상 전망(9/16 SEP 기준) | Chase 리서치 · "Fed Raises Rates in September, Officials Signal One More Hike in 2026" [P3] |
| CME FedWatch (10/28 FOMC) | 수치 검색 결과 불충분 — 구체적 확률(%) 확인 불가 | N/A |

> ⚠️ 발언은 인용문만 기재. "비둘기적/매파적" 라벨은 매체가 기사 제목/본문에서 사용한 경우에 한해 그대로 옮겼으며, 자체 해석 아님.

---

## [3] 주요 경제지표 〔조건부〕

| 지표 | 발표시각(ET·KST) | 발표치 | 예상치 | 이전치 | 서프라이즈(산술) | 출처 |
|------|-------------------|--------|--------|--------|--------------------|------|
| 신규 실업수당 청구건수(Initial Jobless Claims, 9/19 마감주) | 2026-09-24 08:30 ET · 21:30 KST | N/A — 발표 전 시점 수집(한국 아침 기준) | 약 201K~215K(매체별 상이 보도) | 196K | 계산불가(발표 전) | Investech·econoday 종합 [P3] — 확정치는 발표 후 별도 확인 필요 |

> 9/24 미국 동부시각 08:30에 신규 실업수당 청구건수 발표 예정(오늘 발표 대상 지표). 본 수집 시점(KST 아침)은 미국 발표 전이므로 발표치는 N/A. 그 외 CPI·PPI·GDP·Payroll·소매판매·ISM 등은 금일(9/24) 발표 대상 아님 — N/A.
> 참고: 9/24 당일 다수 연은 총재 연설 일정 존재(구체 시각·발언 내용은 발표 전이라 N/A), 미시간대 소비자심리 확정치(9월, 최종치)는 지난 9/11 발표 당시 예비치 47.8(8월 대비 -7.5%, 1952년 통계 집계 이래 두 번째로 낮은 수준) — CNBC · "Consumer outlook plunges in September as inflation outlook worsens" · 2026-09-11(ET) [P2] (이 수치는 예비치이며 금일 발표 대상 최종치와는 별개일 수 있음, 확정 여부 N/A)

---

## [4] 특징 종목 〔데일리〕

| 종목 | 티커 | 등락률 | 거래량 | (보도된) 핵심 사실 | 출처+태그 |
|------|------|--------|--------|----------------------|-----------|
| Worthington Enterprises | WOR | 약 +16% | N/A | 1분기 조정 EPS·매출 컨센서스 상회, CEO는 데이터센터 액침냉각용 ASME 탱크 수요 급증 언급 | Benzinga · "Why Worthington Enterprises Shares Are Trading Higher By Around 16%" · 2026-09-23(ET) · https://www.benzinga.com/news/26/09/61939028/why-worthington-enterprises-shares-are-trading-higher-by-around-16-here-are-20-stocks-moving-premarket [P3] |
| IonQ | IONQ | 약 +12% | N/A | 업계 최초 실시간 양자 오류 디코더(quantum error decoder) 테스트 성공 발표 | Benzinga · "Stocks making the biggest moves premarket: IonQ, Maplebear, Worthington & more"(CNBC 재게재) · 2026-09-23(ET) [P3] |
| KB Home | KBH | 약 -1%대 | N/A | 4분기 주택인도 전망 예상 하회, 매출총이익률 가이던스 16~16.6%(컨센서스 17.2% 하회) | Investing.com · "After-Hours Movers: KBH, WOR, IONQ, TLSI, INNV" · 2026-09-23(ET) [P3] |

---

## [4-A] 섹터별 뉴스 (Finnhub 수집분) 〔데일리〕

| 섹터 | 종목 | 사실 내용(무슨 일이) | 발행시각(ET) | 출처+태그 |
|------|------|------------------------|---------------|-----------|
| 반도체·AI | NVDA(관련) | CoreWeave, 신규 다년 AI 인프라 고객사(과학 데이터셋 기업)와 계약 체결 — 모델 학습·파인튜닝·추론 워크로드를 Nvidia GPU 기반으로 운영 | 2026-09-23 15:33 | Yahoo(Finnhub 수집) [P3], 보강: Yahoo Finance · "CoreWeave (CRWV) Lands AI Cloud Deal As Data Center Rules Tighten" [P3] |
| 반도체·AI | AVGO | Broadcom 관련 보도(제목: "Broadcom Just Made a Move That Further Solidifies My Decision to Buy on Repeat") — 세부 내용 본문 미확인 | 2026-09-23 11:45 | Yahoo(Finnhub 수집) [N/A 매체 세부 미확인] |
| 반도체·AI | AVGO(관련, AMD) | "What Changed In AMD's Story?" 제하 기사 — 세부 내용 본문 미확인 | 2026-09-23 11:00 | Yahoo(Finnhub 수집) [N/A] |
| 금융 | JPM | Jamie Dimon, AI 지출이 2027년 1조 달러에 이를 수 있다고 언급하며 이것이 인플레이션에 "little bit"(GDP 대비 약 1% 수준) 더할 수 있다고 경고 | 2026-09-23 11:00 | Yahoo(Finnhub 수집) [P3] |
| 에너지 | XOM | 호르무즈 해협 봉쇄 지속 시나리오 하에서 엑슨모빌 주가 영향 분석 기사(제목만) — 세부 내용 본문 미확인 | 2026-09-23 11:50 | Yahoo(Finnhub 수집) [N/A] |
| 헬스케어 | UNH | UnitedHealth 관련 다우존스 지수 내 등락 상위/하위 종목 정리 기사(제목만) | 2026-09-23 15:10 | ChartMill(Finnhub 수집) [N/A] |
| 소비재·유통 | AMZN | Amazon, Meta의 신규 AI 에이전트 "Muse" 연동을 차단(block)했다고 보도, 반면 Shopify는 개방 | 2026-09-23 15:13 | Yahoo(Finnhub 수집) [P3] |
| 소비재·유통 | AMZN | Amazon, AI 인재 확보를 위해 전 직원·정리해고 인력을 재영입하는 방식으로 채용 가속화 중이라고 보도 | 2026-09-23 15:28 | Yahoo(Finnhub 수집) [P3] |

> 제목만으로 본문 확인이 불가능했던 항목은 [N/A]로 표기하고 보강 검색을 시도했으나 추가 확인되지 않음. [4]·[5]·[6]과 중복되는 종목·사건(Meta Muse 관련 CNBC 기사 등)은 여기서 반복하지 않음.

---

## [5] AI 인프라 — 공급 측 〔데일리〕

| 기업 | 뉴스 제목 | 사실 내용(무슨 일이) | 출처일자 | 출처+태그 |
|------|-----------|------------------------|-----------|-----------|
| CoreWeave (NVDA GPU 기반) | CoreWeave Just Scored Another Big AI Win | CoreWeave가 과학 데이터셋 기업(보도상 "Harell Data")과 다년 계약 체결, Nvidia GPU 기반 인프라 위에서 모델 학습·파인튜닝·추론 워크로드 운영 예정 | 2026-09-23 | Yahoo Finance · "CoreWeave (CRWV) Lands AI Cloud Deal As Data Center Rules Tighten" · https://finance.yahoo.com/technology/ai/articles/coreweave-crwv-lands-ai-cloud-151135672.html [P3] |
| Broadcom (AVGO) | (직전) FY2026 3분기 실적 | 3분기 매출 296억 달러(전년比 +86%), AI 반도체 매출 167억 달러(전년比 +221%, 전체 매출의 56%) — 직전 분기 실적 수치, 오늘 신규 발표 아님 | 실적 발표일(9월 초, 정확 일자 검색 재확인 필요 — N/A) | Yahoo Finance/24-7 Wall St 종합 보도 [P3] |
| AMD / Marvell | 주가 반응 | 9/23 커스텀 액셀러레이터 마진 우려로 AMD -2%, Marvell -0.6% 하락 보도(반도체 섹터 전반 조정 흐름 속) | 2026-09-23 | 24/7 Wall St 관련 보도 종합 [P3] |
| NVDA | Space Exploration Technologies(SpaceX), Nvidia 칩 전용 사용 방침 발표(일론 머스크) | 발표 정확 일자 검색으로 특정 못함 — N/A(9월 중 보도) | N/A | 검색 결과 종합, 1차 출처(SpaceX/Musk 공식 채널) 미확인 [N/A] |
| Micron (MU, HBM 관련) | FY26 4분기 실적 발표 예정 공지 | 2026-09-30(수) 미 마운틴시간 오후 2:30 실적 컨퍼런스콜 예정이라고 공식 공지 | 2026-09-23 | Micron IR · "Micron Technology to Report Fiscal Fourth Quarter Results on September 30, 2026" · https://investors.micron.com/news/press-release/2026/Micron-Technology-to-Report-Fiscal-Fourth-Quarter-Results-on-September-30-2026/default.aspx [P1] |
| ANET / CRDO / CLS / VRT / SMCI / APLD / TSM | — | 금일(9/23~24) 관련 개별 신규 뉴스 검색으로 확인 못함 | N/A | N/A — 검색 결과 없음 |

---

## [5-A] AI 인프라 — 수요 측 / 하이퍼스케일러 CAPEX 〔실적시즌 여부 확인〕

실적시즌 확인 결과: MSFT·AMZN·GOOGL·META의 3분기(캘린더 기준) 실적 발표는 통상 10월 말~11월 초로, 금일(9/24) 기준 실적 시즌 직전(비시즌)이다. 아래는 직전 발표된 가이던스 유지 확인.

| 항목 | 사실 내용(발표 수치·문구) | 전분기 대비(산술) | 출처일자 | 출처+태그 |
|------|----------------------------|----------------------|-----------|-----------|
| Microsoft FY26 CAPEX | 신규 변동 없음 — 직전 가이던스(FY26 총 약 1,900억 달러, FY26 4분기 약 400억 달러 수준) 유지 | N/A(신규 발표 없음) | 직전 실적발표(2026년 여름, 정확 일자 N/A) | GlobalDataCenterHub · "Microsoft Q3 FY2026: The $190B Capex Plan That Repriced AI" [P3] |
| Amazon 2026 CAPEX | 신규 변동 없음 — 직전 가이던스(약 2,000억 달러) 유지 | N/A | 직전 실적발표(정확 일자 N/A) | 종합 보도(Futurum/MLQ News 등) [P3] |
| Alphabet 2026 CAPEX | 신규 변동 없음 — 직전 가이던스(1,800억~1,900억 달러 구간, 매체별 1,750억~1,900억 달러 상이 보도) 유지 | N/A | 직전 실적발표(정확 일자 N/A) | 종합 보도 [P3] |
| Meta 2026 CAPEX | 신규 변동 없음 — 직전 가이던스(1,250억~1,450억 달러, 부품 단가·데이터센터 비용 상승 반영해 상향된 바 있음) 유지 | N/A | 직전 실적발표(정확 일자 N/A) | 종합 보도 [P3] |

> ⚠️ 위 수치는 여러 2차 매체(Futurum·MLQ News·GlobalDataCenterHub 등)가 인용한 값으로, 매체 간 범위가 다소 상이(예: Alphabet 1,750억~1,850억 vs 1,800억~1,900억). 기업 IR 1차 공시로 재확인되지 않아 [P3] 태그로 유지하며 참고용으로만 병기.

---

## [6] 시총 상위 10 — AI 무관 일반 이슈 〔이슈 확인〕

| 기업 | 사실 내용 | 출처일자 | 출처+태그 |
|------|-----------|-----------|-----------|
| Microsoft (MSFT) | 기존 약세(bear) 의견을 유지하던 애널리스트가 최근 관점을 상향 조정했다고 보도(구체 애널리스트명·목표주가는 본문 확인 필요 — N/A) | 2026-09-23 | CNBC · "A rare Microsoft bear warms up to the stock. Here's what changed their mind" · 2026-09-23 15:53(ET) · https://www.cnbc.com/2026/09/23/a-rare-microsoft-bear-warms-up-to-the-stock-heres-what-changed-their-mind.html [P2] |
| Tesla (TSLA) | Roadster 공개 행사가 옵션시장에서 특이 기회를 만들고 있다고 보도(Mike Khouw 코멘트) | 2026-09-23 14:52 | CNBC · "Tesla Roadster reveal is creating a unique options opportunity, says Mike Khouw" · https://www.cnbc.com/2026/09/23/tesla-roadster-reveal-is-creating-a-unique-options-opportunity-says-mike-khouw.html [P2] |
| Meta (META) | 신규 AI 에이전트 "Muse" 공개, ChatGPT급 초기 채택 속도를 보이고 있다고 보도 | 2026-09-23 12:22 | CNBC · "Meta is having a ChatGPT moment with Muse. What is it and what makes it so special" · https://www.cnbc.com/2026/09/23/meta-is-having-a-chatgpt-moment-with-muse-what-is-it-and-what-makes-it-so-special.html [P2] |
| Boeing (해당 없음, 참고용 원자료) | 실적시즌 외 — 시총 상위 10대 기업 목록에 미포함되어 본 섹션 대상 아님. 참고: 서플라이어 자동화 확대 유도 발표 보도 있음 | 2026-09-23 | 검색 종합 [P3] — 대상 기업 아님, 참고용만 |

> BRK·TSM·AAPL·AVGO·GOOGL·NVDA·AMZN: 금일 AI 무관 일반 이슈(규제·실적·제품) 신규 보도 검색으로 확인 못함 — N/A(신규 변동 없음).

---

## [7] 기관·대형 자금 수급 〔데일리〕

| 항목 | 종목 | 사실 내용 | 규모(수치) | 출처+태그 |
|------|------|-----------|-------------|-----------|
| 반도체 ETF 자금흐름(최근 1개월 누적) | SOXX | 최근 1개월 순유입 +94.3억 달러(자산의 +20.5%) | +$9.43B | ETF.com/etfdb.com 종합 · "Semiconductor ETFs Roar Back: SOXX Pulls In $5.4 Billion in a Single Day" 등 [P3] — 금일 단일 거래일 수치 아님, 최근 1개월 누적치 |
| 반도체 ETF 자금흐름(최근 1개월 누적) | SMH | 최근 1개월 순유출 -24.8억 달러(자산의 -3.5%) | -$2.48B | 상동 [P3] |
| 나스닥100 ETF 자금흐름 | QQQ | 일일 유입 약 10억 달러 규모로 보도(구체 일자 특정 못함) | 약 $1B | Yahoo Finance · "Daily ETF Flows: QQQ Inflows Total Nearly $1B" [P3] — 정확한 기준일 N/A |

> ⚠️ 위 ETF 자금흐름은 금일(9/23~24) 단일 거래일 데이터가 아니라 최근 기간 누적치로 보도된 것이며, 기준 시점이 명확하지 않은 항목은 그대로 병기함. 블록딜·대량거래·옵션 이상거래는 금일 관련 신규 보도 검색으로 확인 못함 — N/A.

---

## [7-A] Insider Trading (SEC Form 4)

N/A — Form 4 신규 공시 없음 (NVDA·AVGO·CRDO·CLS·APLD·VRT·SMCI 대상 검색 결과 금일/최근 신규 공시 확인 안 됨)

---

## [8] 향후 14일 주요 일정

### 경제 일정

| 날짜 | 시각(ET·KST) | 이벤트 | 컨센서스 | 이전치 | 출처 |
|------|---------------|--------|-----------|--------|------|
| 2026-09-24 | 08:30 ET·21:30 KST | 신규 실업수당 청구건수(주간) | 약 201K~215K(매체별 상이) | 196K | Investech 경제캘린더 [P3] |
| 2026-09-24 | 종일(다수 연은 총재 연설 예정) | Fed speakers(다수, 구체 명단·시각 미확정) | 해당없음 | 해당없음 | XTB 경제캘린더 종합 [P3] — 세부 시각 N/A |
| 2026-09-25 | N/A | GDP(2분기 3차 추정치) | N/A | N/A | 검색 종합 [P3] — 컨센서스·이전치 확인 못함 |
| 2026-10-14 | 08:30 ET | CPI(9월) | N/A | N/A | Nowflation · "CPI Release Dates 2026–2027: Next Report Oct 14" [P3] |
| 2026-10-15 | 08:30 ET | PPI(9월) | N/A | N/A | FedRateCalc · "PPI Release Dates 2026" [P3] |
| 2026-10-27~28 | 10/28 14:00 ET | FOMC 정례회의·금리결정 | N/A | 직전(9/16) 3.75~4.00%로 인상 | FinanceCalendar · "Next FOMC Meeting: October 28, 2026" [P3] |

### 기업 일정

| 날짜 | 기업 | 이벤트 | 컨센서스 EPS | 컨센서스 매출 | 출처 |
|------|------|--------|----------------|------------------|------|
| 2026-09-30 | Micron (MU) | FY26 4분기 실적 발표(오후 2:30 MT 컨퍼런스콜) | 약 $31.30(매체별 $31.16~$31.6 상이) | 약 $50.6B~$51.3B(매체별 상이) | Micron IR 공식 공지 [P1] + Benzinga/Seeking Alpha 컨센서스 보도 [P3] |

> ⚠️ Micron 컨센서스 EPS($31.30)는 전년동기($3.03) 대비 약 10배로 보도됨 — 액면분할 등 자본구조 변경 가능성이 있으나 검색으로 확인되지 않아 원문 그대로 병기. 수치의 이례적 배율은 사실 전달 목적으로만 기재하며 원인 추론은 하지 않음.
> Microsoft·Amazon·Alphabet·Meta 등 하이퍼스케일러 3분기 실적 발표일은 통상 10월 말~11월 초이나, 금일 기준 구체 확정 일자는 검색으로 특정하지 못함 — N/A.

---

## [9] 오늘의 사실 목록 (순위 없음)

- [1] S&P500 7,706.03(-0.75%), NASDAQ 26,936.04(-1.13%), Dow 51,511.59(-0.68%), Russell2000 2,838(-1.77%) 마감 · Yahoo Finance/Investrade [P2/P3]
- [1] SOX 약 -1% 조정 마감(정확 종가 N/A) · Investrade [P3]
- [1] Brent 등락률 매체 간 보도 상이(+2.4%~+3.9%), 이란 대통령 "항복 없다" 발언 인용 · Reuters [P2]
- [1-A] ES -0.75%, NQ -0.81%, YM -0.79%, RTY -1.86%(한국 아침 시점) · 자동수집 [P1]
- [1-A] VIX 15.18(+2.08%), VIX9D 13.45(+2.36%), VIX3M 18.11(+0.17%), VVIX 88.6(+3.30%), SKEW 146.15(+2.79%) · 자동수집 [P1]
- [1-A] VIX 기간구조 VIX3M/VIX 1.193, VIX/VIX9D 1.129, 둘 다 콘탱고 분류 · 자동수집 [P1]
- [1-A] SPX P/C 거래량 1.052·미결제 1.410, QQQ P/C 거래량 0.877·미결제 1.390 · CBOE 자동수집 [P1]
- [2] 미 10년물 5.104%(+13bp 이상, 2007년 7월 이후 최고), 2년물 4.889%(+11bp 이상), 5년물 5.033%(2007년 이후 첫 5% 상회) · CNBC/Bloomberg [P2]
- [2] 5년물 국채 700억 달러 입찰, 응찰률 2.21배(평균 2.33배 하회), 낙찰금리 5.033% · Bloomberg 종합 [P2]
- [2] S&P Global 9월 플래시 종합PMI 58.4(전월 56.0), 제조업 57.0(전월 53.9), 서비스업 58.7(전월 54.6) · FXStreet [P2]
- [2] 9/16 FOMC서 기준금리 0.25%p 인상(3.75~4.00%), 2023년 이후 첫 인상, 만장일치 · CNN [P2]
- [3] 신규 실업수당 청구건수(9/24 08:30ET 발표 예정) — 발표 전 시점으로 수치 N/A · Investech [P3]
- [4] Worthington Enterprises(WOR) 약 +16%, 1분기 실적 서프라이즈·데이터센터 액침냉각 탱크 수요 언급 · Benzinga [P3]
- [4] IonQ(IONQ) 약 +12%, 실시간 양자 오류 디코더 테스트 성공 발표 · Benzinga/CNBC 재게재 [P3]
- [4] KB Home(KBH) 약 -1%대, 4분기 인도 전망·마진 가이던스 컨센서스 하회 · Investing.com [P3]
- [4-A] CoreWeave, 신규 다년 AI 인프라 고객사 계약(Nvidia GPU 기반) · Finnhub/Yahoo [P3]
- [4-A] Amazon, Meta의 신규 AI 에이전트 "Muse" 연동 차단, Shopify는 개방 · Finnhub/Yahoo [P3]
- [4-A] JPMorgan CEO 다이먼, AI 지출 2027년 1조 달러 가능성 및 인플레이션 GDP 대비 약 1%p 영향 가능성 언급 · Finnhub/Yahoo [P3]
- [5] CoreWeave, 과학 데이터셋 기업과 다년 AI 인프라 계약 체결(Nvidia GPU 기반) · Yahoo Finance [P3]
- [5] Micron, 2026-09-30 FY26 4분기 실적발표 공식 공지 · Micron IR [P1]
- [5] AMD -2%, Marvell -0.6%(9/23, 커스텀 액셀러레이터 마진 우려 보도) · 24/7 Wall St 종합 [P3]
- [5-A] Microsoft·Amazon·Alphabet·Meta 2026 CAPEX 가이던스 신규 변동 없음(직전 가이던스 유지) · 종합 2차 보도 [P3]
- [6] Microsoft 약세론자였던 애널리스트가 최근 관점을 상향 조정했다고 보도 · CNBC [P2]
- [6] Meta AI 에이전트 "Muse" 공개, ChatGPT급 초기 채택 속도 보도 · CNBC [P2]
- [6] Tesla Roadster 공개 행사 관련 옵션시장 특이 동향 코멘트(Mike Khouw) · CNBC [P2]
- [7] SOXX 최근 1개월 순유입 +94.3억 달러, SMH 최근 1개월 순유출 -24.8억 달러 · ETF.com/etfdb.com [P3]
- [7-A] Form 4 신규 공시 없음 (대상 종목 검색 결과 확인 안 됨)
- [8] 다음 CPI 10/14, PPI 10/15, 차기 FOMC 10/27~28(10/28 14:00 ET 결정 발표) · Nowflation/FedRateCalc/FinanceCalendar [P3]
- [8] Micron FY26 4분기 실적 2026-09-30 발표 예정 · Micron IR [P1]

---

## ✅ 자가 점검 결과

0. 방화벽: 의견·전망·★·AI영향도·밸류체인·순위·다중추론 미포함 확인.
1. 날짜: 웹 검색으로 2026-09-24(목) 확정, 미국 정규장 기준일 2026-09-23(수) 종가로 앵커링.
2. 모든 수치·뉴스에 출처+태그 부여(불충분한 경우 [N/A] 명시).
3. 확인 못한 칸 전부 N/A 처리(SOX 정확 종가, Brent 정확 종가, Fed 발언자 특정, CME FedWatch 10월 확률, GDP 컨센서스 등).
4. 원인·영향은 보도된 문구만 인용, 본인 추론 배제.
5. 동일 사건(예: 오일 상승 이유, Meta Muse)은 대표 출처 1개로 통합, 중복 매체는 각 섹션 취지에 맞게 최소 인용.
6. [5]공급/[5-A]수요/[6]일반 분류 확인 완료.
7. CAPEX·가이던스 항목에 "직전 실적발표(정확 일자 N/A)" 형태로 출처일자 명시 시도, 정확 일자 미확인분은 N/A 표기.
8. Form 4: 검색 결과 신규 공시 확인 안 됨 → N/A로 명시, 추정 없음.
9. [9]는 섹션순 사실 나열이며 랭킹이 아님.
10. 0_data.md 수치를 변형 없이 [1-A]에 그대로 옮김(반올림·수치변경 없음).
11. VIX 기간구조·Put/Call에 "콘탱고라서 안정적", "풋 쏠림=공포" 등 해석 문구 미부착 — 분류명/숫자만 기재.
12. [4-A]는 [4]·[5]·[6]과 종목·사건 중복 없음(CoreWeave는 [5] 본문, [4-A]는 짧게만 언급하며 상호 참조).

### 데이터 품질 관련 주의사항
- Brent 종가·등락률은 매체 간 수치 불일치(101.61 vs 103.08 등)가 있어 단일 확정값 대신 범위·양쪽 보도를 병기함.
- SOX 정확 종가는 검색으로 확인하지 못해 N/A.
- Fed 매파 발언의 구체 발언자·인용문은 검색으로 특정하지 못해 N/A.
- CME FedWatch 10월 회의 확률은 최신치를 검색으로 확인하지 못해 N/A.
- 하이퍼스케일러 CAPEX 수치는 여러 2차 매체 간 범위가 상이해 매체별 값을 병기하고 [P3]로 유지(1차 IR 공시 재확인 못함).
- Micron 컨센서스 EPS의 전년 대비 배율(10배)은 이례적이나 원인 추론 없이 원문 그대로 병기.
