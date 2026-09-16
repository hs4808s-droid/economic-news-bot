# 미국 시장 데일리 수집 결과 (Collect)
# 기준일: 2026-09-17 (목) · 미국 정규장 종가 기준(2026-09-16 ET 세션) · 실행모드: 데일리 코어 (실적시즌 근접 — [5-A]/[6] 일부 참고 표기)
# 생성시각(KST): 2026-09-17 08:46

---

## [1] 미국 주요 지수 〔데일리〕

| 항목 | 종가/수치 | 등락률 | (보도된) 원인 | 출처+태그 |
|------|-----------|--------|----------------|-----------|
| S&P500 | 7,551.81 | -0.45% | 연준이 3년 만에 첫 금리 인상을 단행했고, 파월 후임 워시 의장이 인플레이션이 여전히 높다고 발언하며 국채금리가 상승한 영향 | CNBC · "Dow drops 600 points as Fed rate hike and Warsh's inflation talk unnerve investors" · 2026-09-16 · https://www.cnbc.com/2026/09/15/stock-market-today-live-updates.html [P2] |
| NASDAQ 종합 | 25,978.42 | -0.01% | 상동(연준 금리 인상 · 워시 인플레이션 발언) | Yahoo Finance · "Stock market today: Dow sinks 600 points, S&P 500 and Nasdaq fall as Fed hikes rates, bond yields rise" · 2026-09-16 · https://finance.yahoo.com/markets/live/stock-market-today-wednesday-september-16-dow-sp-500-nasdaq-fed-meeting-decision-080356525.html [P2] |
| Dow Jones 산업평균 | 51,461.90 | -1.21% (-631.21pt) | 상동 | CNBC · 상동 · 2026-09-16 [P2] |
| Russell 2000 | N/A | N/A | 검색으로 9/16 정규장 종가 확인 실패 (직전 거래일 값만 검색됨) | N/A — 확인 실패 |
| SOX (필라델피아 반도체지수) | N/A | N/A | 9/16 종가 자체는 검색으로 확인 실패. 단, 개별 종목 기준 AMD -5.7%, Intel -5.4%, NVDA -5.7% 하락이 보도됨(연준 금리 인상 발표 직후 반응) | 24/7 Wall St. 계열 보도 인용 검색 결과 · 2026-09-16 [P3] — 지수 자체는 [N/A] |
| Brent | 원유 자체는 WTI 기준 0_data.md에 있음(N/A는 Brent). 108.34 (참고: WTI와 별도) | +1.77 (전일대비, 오전 7시 ET 기준) | 지정학적 긴장(예멘·이란 관련 보도) 및 공급 우려 지속 | Fortune · "Current price of oil as of September 16, 2026" · 2026-09-16 07:00 (ET) · https://fortune.com/article/price-of-oil-09-16-2026/ [P3] |

> Russell 2000·SOX 종가는 검색 결과가 상충하거나(다른 날짜 데이터 혼입) 확정 수치를 찾지 못해 N/A 처리함. 추정치로 메우지 않음.

---

## [1-A] 선물·변동성 구조 〔`0_data.md` 그대로 인용 · 검색 없음〕

**선물 (한국 아침 시점)**

| 항목 | 현재가 | 전일 대비 | 직전 종가 | 기준시각(ET) | 출처+태그 |
|------|--------|-----------|-----------|--------------|-----------|
| S&P500 선물 (ES) | 7,647.25 | +0.76% | 7,589.25 | 2026-09-16 19:32 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 나스닥100 선물 (NQ) | 29,408.5 | +1.57% | 28,955 | 2026-09-16 19:32 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 다우 선물 (YM) | 52,038 | -0.15% | 52,115 | 2026-09-16 19:32 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 러셀2000 선물 (RTY) | 2,891.1 | +0.63% | 2,873.1 | 2026-09-16 19:32 | CBOE / CME (Yahoo chart API 자동수집) [P1] |

**변동성 구조**

| 항목 | 수치 | 전일 대비 | 출처+태그 |
|------|------|-----------|-----------|
| VIX (30일) | 17.71 | +2.97% | CBOE (Yahoo chart API 자동수집) [P1] |
| VIX9D (9일) | 17.4 | +1.10% | CBOE (Yahoo chart API 자동수집) [P1] |
| VIX3M (3개월) | 19.73 | +1.91% | CBOE (Yahoo chart API 자동수집) [P1] |
| VVIX (VIX의 변동성) | 95.41 | +0.53% | CBOE (Yahoo chart API 자동수집) [P1] |
| SKEW (테일리스크) | 145.95 | -0.45% | CBOE (Yahoo chart API 자동수집) [P1] |

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.114 | 콘탱고 |
| VIX / VIX9D | 1.018 | 콘탱고 |

**Put/Call 비율 (CBOE 옵션 체인 직접 집계)**

| 대상 | P/C(거래량) | P/C(미결제약정) | 콜 거래량 | 풋 거래량 | 출처+태그 |
|------|-------------|------------------|-----------|-----------|-----------|
| S&P500 지수옵션 (SPX) | 1.286 | 1.402 | 2,147,517 | 2,761,234 | CBOE 지연시세 API (자동수집) [P1] |
| 나스닥100 ETF 옵션 (QQQ) | 1.366 | 1.397 | 3,129,348 | 4,273,311 | CBOE 지연시세 API (자동수집) [P1] |

추가 매크로(참고, `0_data.md` 원자료):

| 항목 | 현재가 | 전일 대비 | 직전 종가 | 기준시각(ET) | 출처+태그 |
|------|--------|-----------|-----------|--------------|-----------|
| 미 10년 국채선물 (ZN=F) | 105.75 | -0.41% | 106.19 | 2026-09-16 19:32 | CME (Yahoo chart API 자동수집) [P1] |
| 금 (GC=F) | 4,310.2 | -0.52% | 4,332.8 | 2026-09-16 19:32 | CME (Yahoo chart API 자동수집) [P1] |
| WTI (CL=F) | 101.98 | -3.64% | 105.83 | 2026-09-16 19:32 | CME (Yahoo chart API 자동수집) [P1] |
| 달러지수 (DXY) | 100.34 | +0.69% | 99.65 | 2026-09-16 18:04 | ICE (Yahoo chart API 자동수집) [P1] |

---

## [2] 금리 / 연준 〔데일리〕

| 항목 | 사실 내용(발언·수치) | 출처+태그 |
|------|----------------------|-----------|
| FOMC 결정 | FOMC가 12-0 만장일치로 기준금리를 25bp 인상, 목표범위 3.75%~4.00%로 상향. 2023년 7월 이후 첫 인상 | CNBC · "Fed rate decision September 2026: Rates rise to 3.75%-4%" · 2026-09-16 · https://www.cnbc.com/2026/09/16/fed-rate-decision-september-2026.html [P2] |
| 점도표(SEP) | 참가자 18명 중 16명이 연내 추가 인상 가능성을 반영. 이 중 4명은 2회 추가 인상 가능성을 시사. 2028년·2029년에는 각 1회 인하가 표시됨. PCE 인플레이션 중앙값 전망치는 2026년·2027년 각 4.1% | Fed SEP 관련 검색 결과 종합(Kiplinger 등) · 2026-09-16 [P2] |
| Warsh 발언(인플레이션) | "The plain fact is inflation is too high, and has been for too long. Too many categories are still posting increases above three percent... on both a 6-month and 12-month basis." | CNBC · "Fed meeting recap: Warsh says inflation is still too high as Fed hikes for the first time since 2023" · 2026-09-16 · https://www.cnbc.com/2026/09/16/fed-meeting-today-live-updates.html [P2] |
| Warsh 발언(개별 가격 vs 2차 파급) | "We cannot affect any individual price," 라며 유가·식료품을 예로 들고, "what we can do and will do is ensure that any change in relative prices don't broaden out, don't have second and third order effects on the economy." | CNBC · 상동 · 2026-09-16 [P2] |
| 10년물 국채수익률 | 약 5.008%로 상승 (연준 발표 이후) | CNBC · "10-year Treasury yield climbs back to 5% after Fed hikes rates, Warsh highlights inflation risks" · 2026-09-16 · https://www.cnbc.com/2026/09/16/treasury-yield-bond-market-fed-decision.html [P2] |
| 2년물 국채수익률 | 4.717% (전일 대비 +5bp) | CNBC · 상동 · 2026-09-16 [P2] |
| 10Y-2Y 스프레드 | N/A — 검색 결과에 정확한 스프레드 수치가 명시되지 않음(10Y 5.008%, 2Y 4.717% 기준 산술 시 약 +29.1bp이나, 이는 본 수집단계에서 산출한 값이 아니라 원자료 병기 부족으로 N/A 처리) | N/A — 확인 필요 |
| CME FedWatch (차기 10/27-28 FOMC) | 10월 FOMC(10/27-28)에 대한 구체적 확률 수치는 검색으로 확인 실패. 참고로 9/14 시점 9월 인상 확률은 84.1%였음(이미 실현) | Forbes · "CME FedWatch Provides A 66% Chance Fed Will Hike Rates In September" (8/31 기준) 등 검색 결과 종합 · [P3] — 10월 확률 자체는 [N/A] |

---

## [3] 주요 경제지표 〔조건부〕

| 지표 | 발표시각(ET·KST) | 발표치 | 예상치 | 이전치 | 서프라이즈(발표치-예상치) | 출처 |
|------|------------------|--------|--------|--------|----------------------------|------|
| 소매판매 (8월, 전월대비) | 2026-09-16 08:30 ET · 21:30 KST | +1.2% | +0.5% | 7월 하향수정(감소) | +0.7%p | Local10/AP 계열 · "Retail sales rise a better-than-expected 1.2% in August" · 2026-09-16 [P3]; 원자료 US Census Bureau [P1] |

> CPI·PPI는 9/16 발표 대상 아님(PPI는 9/10 기발표, CPI는 10/14 예정). 9/17 발표 예정인 신규실업수당청구·필라델피아 연준 제조업지수·신규주택착공·펜딩홈세일즈는 아직 발표되지 않은 선행 일정이므로 본 섹션이 아닌 [8]에 별도 기재.

---

## [4] 특징 종목 〔데일리, ±5% 이상〕

| 종목 | 티커 | 등락률 | 거래량 | (보도된) 핵심 사실 | 출처+태그 |
|------|------|--------|--------|---------------------|-----------|
| J.B. Hunt Transport | JBHT | -12%(장중, 종가 기준 별도매체 -9~-13% 편차 보도) | N/A | 3분기 실적이 전분기 대비 5~10% 감소할 것이라 경고. 운전기사 관련 비용 2,500만 달러 증가, 연료비 순차 역풍 최소 1,000만 달러. 컨센서스 EPS $2.10 대비 중간값 $1.77로 약 16% 하회 시사 | CNBC · "J.B. Hunt stock plunges 10% after company warns third-quarter earnings will fall" · 2026-09-16 · https://www.cnbc.com/2026/09/16/jb-hunt-stock-jbht-earnings.html [P2] |
| Boeing | BA | -3.69%(TradingKey 집계) ~ 장중 한때 -5% 이상 보도 | N/A | CEO Kelly Ortberg가 737 MAX 월 47대 생산 안정화가 "예상보다 조금 더" 오래 걸린다고 언급. 렌턴 공장 동체 생산이 제약 요인. 안정화 후 월 52대로 증산 계획 | Reuters(Investing.com 경유) · "Boeing CEO says it is taking longer to stabilize 737 MAX output; shares slide" · 2026-09-16 [P2] |
| GE Vernova | GEV | +5.42% | N/A | Morgan Stanley 라구나 컨퍼런스에서 CEO Scott Strazik이 2027년 초 백로그 2,000억 달러 도달 전망 제시. 전력화·청정에너지 지출 강세, 온쇼어 풍력은 부진 | 24/7 Wall St. · "GE Vernova Climbs 5% as CEO Sees Backlog Hitting $200B Early" · 2026-09-16 [P3] |
| SpaceX | SPCX | +5% | N/A | 스타십 차기 궤도 시험 발사일이 9/22로 확정, Starlink V3 위성 탑재 계획 발표 | 24/7 Wall St. · "SpaceX Rises 5% as Starship's First Orbital Attempt Gets Launch Date" · 2026-09-16 [P3] |
| Lumentum | LITE | +8% | N/A | 실적 가이던스 호조로 AI 광학 부문에 대한 월가 낙관론 확산 | Timothy Sykes News · "LITE Stock Climbs As Wall Street Backs AI Optics Upside" · 2026-09-16 [P3] |
| AMD / Intel / NVDA | AMD/INTC/NVDA | AMD -5.7%, INTC -5.4%, NVDA -5.7% | N/A | 연준 금리 인상 발표 직후 고밸류에이션 AI 관련 반도체주 낙폭 확대 | 검색 결과 종합(24/7 Wall St. 계열) · 2026-09-16 [P3] — ±5% 기준 충족, 단일 1차 출처 확정 못해 [P3] |

---

## [4-A] 섹터별 뉴스 〔`0_data.md` Finnhub 수집분 기반〕

| 섹터 | 종목 | 사실 내용(무슨 일이) | 발행시각(ET) | 출처+태그 |
|------|------|----------------------|--------------|-----------|
| 반도체·AI | NVDA | Micron Technology 관련 긍정적 소식이 보도됨(구체 내용은 제목 수준, 본문 미확인) | 2026-09-16 14:04 | SeekingAlpha(Finnhub 수집) [P3] |
| 반도체·AI | AVGO | Hock Tan CEO가 브로드컴 AI 매출을 2028년까지 2,300억 달러로 가이던스 제시했다는 보도(0_data.md 수집). 보강검색 결과, 실제 회사 가이던스는 2026년 580억 달러 → 2027년 1,150억 달러 → 2028년 2,300억 달러 단계로 제시된 것으로 확인됨 | 2026-09-16 13:05 | Yahoo(Finnhub 수집) [P3]; 보강 — Seeking Alpha · "Broadcom forecasts $58B fiscal 2026 AI revenue and outlines $115B in 2027, $230B in 2028" [P2] |
| 반도체·AI | AVGO | OpenAI CFO가 "엔비디아가 더 이상 유일한 선택지가 아니다"라는 취지로 발언했다는 보도(제목 수준) | 2026-09-16 11:11 | Yahoo(Finnhub 수집) [P3] |
| 금융 | JPM | PNC의 자본시장 실적 페이스가 수수료 수익 전망을 뒷받침할 수 있는지에 대한 분석 기사(제목 수준) | 2026-09-16 13:15 | Yahoo(Finnhub 수집) [P3] |
| 에너지 | XOM | 엑슨모빌의 가이아나·퍼미안 자산이 업스트림 사업을 견인할 수 있는지에 대한 분석 기사(제목 수준) | 2026-09-16 11:06 | Yahoo(Finnhub 수집) [P3] |
| 헬스케어 | UNH | 237개 액티브 배당펀드 중 11개만 SCHD 지수를 상회했다는 분석(UNH 직접 관련성은 제목만으로 불충분) | 2026-09-16 13:35 | Yahoo(Finnhub 수집) [P3] |
| 소비재·유통 | AMZN | 아마존이 시급을 20달러로 인상하고 Whole Foods 할인 혜택을 추가한다고 발표 | 2026-09-16 13:43 | Yahoo(Finnhub 수집) [P3] |
| 소비재·유통 | AMZN | 코스트코가 Uber Eats 배달 파트너십을 47개 주로 확대(AMZN Whole Foods와 경쟁 구도로 섹터 뉴스에 포함) | 2026-09-16 13:55 | Yahoo(Finnhub 수집) [P3] |

> [1]·[4]에서 이미 다룬 NVDA/AMD/INTC 낙폭, Boeing, J.B. Hunt, GE Vernova는 여기서 반복하지 않음.

---

## [5] AI 인프라 — 공급 측 〔데일리〕

| 기업 | 뉴스 제목 | 사실 내용(무슨 일이) | 출처일자 | 출처+태그 |
|------|-----------|----------------------|----------|-----------|
| AVGO | Broadcom forecasts $58B fiscal 2026 AI revenue and outlines $115B in 2027, $230B in 2028 | Hock Tan CEO가 AI 반도체 매출 가이던스를 2026년 580억 달러, 2027년 1,150억 달러, 2028년 2,300억 달러로 제시. 3분기 AI 반도체 매출은 167억 달러(YoY +221%, QoQ +54%), Anthropic·OpenAI 등 고객사 확대 언급 | 2026-09-02(3분기 실적 발표일, 오늘자 재인용 보도 다수) | Seeking Alpha · "Broadcom forecasts $58B fiscal 2026 AI revenue and outlines $115B in 2027, $230B in 2028" [P2] |
| AVGO | Broadcom (AVGO) Shares Fell As Slower AI Development Raised Demand Concerns | 4분기 매출 가이던스 348억 달러가 컨센서스 350.5억 달러를 소폭 하회했고, 총마진이 전년 78%에서 73%로 압축되며 주가 약세 요인으로 보도됨(맞춤형 가속기·HBM 비중 확대에 따른 기계적 결과로 설명됨) | 2026-09-03 | 247wallst.com · "Broadcom Falls 6% as Soft Guidance Overshadows 221% AI Revenue Surge" [P3] |
| MU (Micron) | Micron Has Just Shared Great News (제목 수준, 0_data.md 수집) | 마이크론 관련 긍정적 소식이 보도됨(구체 내용 본문 미확인) | 2026-09-16 | SeekingAlpha(Finnhub 수집) [P3] |
| MU (Micron) | HBM4 12H 샘플 출하 및 HBM 용량 2026년까지 완판 | 마이크론이 HBM(고대역폭메모리), 고용량 DIMM, LP 서버 D램 결합 매출이 전년 대비 5배 이상 증가한 100억 달러에 도달했다고 보도됨. HBM4 12H는 대역폭 2.8TBps 이상, 핀 속도 11Gbps 이상 달성. 엔비디아 Vera Rubin 플랫폼向 36GB 12-high HBM4 양산 출하 시작 | 검색 결과 종합(연중 누적 보도, 구체 발표일 명시 안 됨) | 업계 매체 종합(Tom's Hardware 등) [P3] — 발표일 불명확으로 신선도 주의 |

---

## [5-A] AI 인프라 — 수요 측 / 하이퍼스케일러 CAPEX 〔실적시즌 아님〕

N/A — 신규 변동 없음. MSFT·AMZN·GOOGL·META의 CAPEX 가이던스는 각사 직전 분기 실적 발표분이 유지되는 것으로 추정되나, 오늘자 신규 검색 검증은 수행하지 않음(해당 기업들의 차기 실적 발표가 임박하지 않아 0_data.md에도 수집되지 않음). 직전 가이던스 수치를 이 자리에서 재인용하지 않음 — 출처일자 미상 데이터로 신선도 원칙 위반 소지가 있어 공란 처리.

---

## [6] 시총 상위 10 — AI 무관 일반 이슈 〔실적시즌 근접〕

| 기업 | 사실 내용 | 출처일자 | 출처+태그 |
|------|-----------|----------|-----------|
| N/A | 오늘자 검색에서 MSFT·NVDA·AAPL·AMZN·GOOGL·META·AVGO·BRK·TSLA·TSM의 AI 무관 일반 이슈(규제·제품·일반 실적) 관련 신규 보도를 확인하지 못함 | — | N/A — 금일 신규 확인 사항 없음 |

---

## [7] 기관·대형 자금 수급 〔데일리〕

| 항목 | 종목 | 사실 내용 | 규모(수치) | 출처+태그 |
|------|------|-----------|------------|-----------|
| ETF 자금흐름(월간, 참고) | SOXX | 최근 1개월 순유입 +94.3억 달러(자산대비 +20.5%)로 보도됨. 단, 정확한 기준일자가 명시되지 않아 "오늘" 수치로 단정 불가 | N/A(월간 누적, 기준일 불명) | 검색 결과 종합(Trefis 계열) [P3] — 일간 수치 아님, 참고용 |
| ETF 자금흐름(월간, 참고) | SMH | 최근 1개월 순유출 -24.8억 달러(자산대비 -3.5%)로 보도됨. 기준일자 불명 | N/A(월간 누적, 기준일 불명) | 검색 결과 종합 [P3] — 일간 수치 아님, 참고용 |
| ETF 자금흐름 | QQQ | 오늘자(9/16) 구체적 일간 순유출입 규모는 검색으로 확인 실패 | N/A | N/A — 확인 실패 |
| 옵션 이상거래 | QQQ | 옵션 프리미엄 기준 약 1,826만 달러 규모의 강세 포지셔닝 흐름이 보도됨(전체 QQQ 옵션 프리미엄은 약 4,236만 달러). 다만 매체가 "방향성 확신이라기보다 연준 발표를 앞둔 이벤트 포지셔닝"이라고 서술 | 2026-09-16 | swingtradenotes.substack.com · "Midday Options Flow — September 16, 2026" [P3] |
| 옵션 이상거래 | MU/INTC/SMH 등 반도체 복합 | 반도체·AI 관련 옵션 플로우에서 MU(1,714만 달러), INTC(920만 달러), SMH(500만 달러) 등이 거론됨. 국채·금 관련 자금 이동도 연준 발표를 앞두고 활발했다고 서술됨 | 2026-09-16 | 상동 [P3] |

---

## [7-A] Insider Trading (SEC Form 4) 〔조건부〕

| 기업 | 내부자 | 직책 | 매수/매도 | 거래유형 | 규모 | 거래일 | 출처 |
|------|--------|------|-----------|----------|------|--------|------|
| VRT (Vertiv) | Frank Poncheri | Chief Human Resources Officer | 매도(처분) | 세금원천징수 목적 주식 인도(옵션행사/RSU 정산에 따른 세금·행사가 납부) | 2,352주, 주당 $234.61 | 2026-09-15(신고 서명 09-16) | SEC EDGAR Form 4 · https://www.sec.gov/Archives/edgar/data/0001674101/... [P1] |

> CEO·CFO·COO·Director급 우선 대상(NVDA·AVGO·CRDO·CLS·APLD·VRT·SMCI) 중 오늘(9/15~9/16) 신규 공시로 확인된 것은 CHRO 1건뿐이며 이는 우선순위 직책(CEO/CFO/COO/Director)에 해당하지 않음. 나머지 기업(NVDA·AVGO·CRDO·SMCI 등)의 검색된 Form 4는 모두 8월~9월 초순 거래로 "오늘 신규 공시"가 아니어서 제외함.

---

## [8] 향후 14일 주요 일정 〔조건부〕

**경제 일정**

| 날짜 | 시각(ET·KST) | 이벤트 | 컨센서스 | 이전치 | 출처 |
|------|--------------|--------|----------|--------|------|
| 2026-09-17 | 08:30 ET · 21:30 KST | 신규 실업수당청구 | 20.7만 건 | 20.6만 건 | TradingEconomics 계열 검색 종합 [P3] |
| 2026-09-17 | 08:30 ET · 21:30 KST | 필라델피아 연준 제조업지수 | 31.3 | 47.4 | 상동 [P3] |
| 2026-09-17 | 08:30 ET · 21:30 KST | 신규주택착공 | N/A | N/A | 확인 필요 |
| 2026-09-17 | 10:00 ET · 23:00 KST | 펜딩홈세일즈(NAR) | N/A | N/A | 확인 필요 |
| 2026-10-14(예정) | N/A | CPI(9월) | N/A | N/A | 검색 결과 종합 [P3] — 발표일만 확인, 수치 없음 |
| 2026-10-27~28 | N/A | FOMC | N/A | 현재 3.75~4.00% | 2026년 FOMC 스케줄 검색 종합 [P3] |

**기업 일정**

| 날짜 | 기업 | 이벤트 | 컨센서스 EPS | 컨센서스 매출 | 출처 |
|------|------|--------|--------------|---------------|------|
| 2026-09-30 | Micron Technology (MU) | 2026 회계연도 4분기 실적 발표(장 마감 후) | N/A — 확인 필요 | N/A — 확인 필요 | Micron IR · "Micron Technology to Report Fiscal Fourth Quarter Results on September 30, 2026" · 2026-08-26 [P1] |

> 실적시즌 본격 개막(대형은행 등)은 10월 중순부터로 보도되어 향후 14일 범위를 벗어남 — 참고로만 기재하지 않음.

---

## [9] 오늘의 사실 목록 (순위 없음)

```
[1] S&P500 7,551.81 (-0.45%), 나스닥종합 25,978.42 (-0.01%), 다우 51,461.90 (-1.21%) · CNBC/Yahoo [P2]
[1] Russell2000·SOX 9/16 정규장 종가 검색 확인 실패 · N/A
[1] Brent 108.34달러(오전 7시 ET 기준, 전일대비 +1.77) · Fortune [P3]
[1-A] ES 7,647.25(+0.76%) · NQ 29,408.5(+1.57%) · YM 52,038(-0.15%) · RTY 2,891.1(+0.63%) · CME(자동수집) [P1]
[1-A] VIX 17.71(+2.97%), VIX3M/VIX 1.114 콘탱고, VIX/VIX9D 1.018 콘탱고 · CBOE(자동수집) [P1]
[1-A] SPX P/C(거래량) 1.286, QQQ P/C(거래량) 1.366 · CBOE(자동수집) [P1]
[2] FOMC 12-0 만장일치로 25bp 인상, 목표범위 3.75~4.00%로 상향, 2023년 7월 이후 첫 인상 · CNBC [P2]
[2] SEP 점도표: 18명 중 16명이 연내 추가 인상 시사, 4명은 2회 추가 인상 가능성 · 검색 종합 [P2]
[2] Warsh: "inflation is too high, and has been for too long" 발언 · CNBC [P2]
[2] 10년물 국채수익률 약 5.008%, 2년물 4.717%(+5bp) · CNBC [P2]
[3] 8월 소매판매 +1.2% (예상 +0.5%, 서프라이즈 +0.7%p) · Census Bureau/AP 계열 [P1/P3]
[4] J.B. Hunt(JBHT) 3분기 실적 경고로 주가 급락(-9~-13%대 보도), 운전기사·연료비 부담 언급 · CNBC [P2]
[4] Boeing(BA) CEO, 737 MAX 월 47대 생산 안정화가 예상보다 지연된다고 발언, 주가 하락 · Reuters [P2]
[4] GE Vernova(GEV) +5.42%, CEO가 2027년 초 백로그 2,000억 달러 전망 제시 · 247wallst [P3]
[4] SpaceX(SPCX) +5%, 스타십 궤도시험 발사일 9/22 확정 · 247wallst [P3]
[4] Lumentum(LITE) +8%, AI 광학 부문 가이던스 호조 · Timothy Sykes News [P3]
[4] AMD -5.7%, Intel -5.4%, NVDA -5.7%, 연준 금리 인상 발표 직후 낙폭 확대 · 검색 종합 [P3]
[4-A] Broadcom(AVGO) CEO, AI 반도체 매출 가이던스 2026년 580억→2027년 1,150억→2028년 2,300억 달러 제시 · Seeking Alpha [P2]
[4-A] 아마존, 시급 20달러로 인상 및 Whole Foods 할인 추가 · Yahoo(Finnhub) [P3]
[5] Broadcom 3분기 AI 반도체 매출 167억 달러(YoY +221%), 4분기 가이던스 컨센서스 소폭 하회로 총마진 73%로 압축 · Seeking Alpha/247wallst [P2/P3]
[5] Micron, HBM 관련 매출(HBM+고용량DIMM+LP서버D램) 전년비 5배 이상 증가한 100억 달러 도달 보도(발표일 불명확) · 업계매체 종합 [P3]
[7] QQQ 옵션 프리미엄 약 4,236만 달러 중 강세 포지셔닝 약 1,826만 달러, 연준 발표 앞둔 이벤트 포지셔닝으로 서술 · substack [P3]
[7-A] Vertiv(VRT) CHRO Frank Poncheri, 세금원천징수 목적 2,352주 처분(9/15) · SEC EDGAR [P1]
[8] 9/17 신규실업수당청구(예상 20.7만 건)·필라델피아 연준 제조업지수(예상 31.3) 발표 예정 · 검색 종합 [P3]
[8] Micron, 9/30 회계연도 4분기 실적 발표 예정(장 마감 후) · Micron IR [P1]
[8] 차기 FOMC 10/27~28 예정 · 검색 종합 [P3]
```
