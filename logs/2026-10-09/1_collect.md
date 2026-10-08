# 미국 시장 데일리 수집 결과 (Collect)
# 기준일: 2026-10-08 (수) · 미국 정규장 종가 기준 · 실행모드: [데일리]
# 생성시각(KST): 2026-10-09 07:30

---

## [1] 미국 주요 지수

| 항목 | 종가 | 1D | 5D | 1M | YTD | 원인 (2026-10-08 ET) |
|---|---|---|---|---|---|---|
| S&P500 | 7,765.36 | -0.47% | +1.29% | +1.69% | +13.44% | AI 관련주 약세가 지수 전반을 끌어내림. 2거래일 연속 하락 [P2] |
| 나스닥종합 | 27,193.34 | -1.25% | +1.20% | +3.58% | +17.00% | OpenAI 연환산매출이 이전에 알려진 $680억보다 약 $200억 낮은 $500억 수준이라는 보도(Financial Times)로 Nvidia·Oracle·CoreWeave 등 AI 관련주 동반 하락 — CNBC, "Nvidia, Oracle, CoreWeave and other AI stocks sink on OpenAI revenue report", 2026-10-08 [P2] https://www.cnbc.com/2026/10/08/open-ai-revenue-nvidia-oracle-coreweave.html |
| 다우 | 51,231.64 | +0.10% | +0.60% | -2.19% | +6.59% | 기술주 약세와 달리 소폭 상승 — 구체적 단일 원인 확인 필요 [N/A] |
| 러셀2000 | 2,794.13 | +0.03% | -0.45% | -4.35% | +12.58% | 거의 보합 — 구체적 원인 확인 필요 [N/A] |
| SOX (필라델피아 반도체) | 12,623.72 | -3.39% | -1.60% | +5.80% | +78.22% | 같은 OpenAI 매출 보도 영향으로 반도체주 급락: Arm -9%, Qualcomm -6%, Marvell 약 -5~-8%, Intel -5~-6%, Nvidia -3%, Broadcom -4%, AMD -4%, Super Micro 약 -5% — Yahoo Finance, "Arm Sinks 9% as Chip Selloff Deepens; Qualcomm Drops 6%, Marvell Slides 5%", 2026-10-08 [P2] / CNBC 상기 기사 [P2] |

> SOX·나스닥 급락은 동일한 단일 트리거(OpenAI 매출 재공시 보도)로 설명됨. 다우·러셀2000의 소폭 변동 원인은 개별 기사로 특정되지 않아 확인 필요로 남김.

---

## [1-A] 선물·변동성 구조 (0_data.md 그대로 인용, 검색 없음)

### 선물 (한국 아침 시점)

| 항목 | 현재가 | 전일 대비 | 직전 종가 | 기준(ET) |
|---|---|---|---|---|
| S&P500 선물 (ES) | 7,822.5 | -0.39% | 7,852.75 | 2026-10-08 16:59 |
| 나스닥100 선물 (NQ) | 31,021.25 | -1.21% | 31,402.25 | 2026-10-08 16:59 |
| 다우 선물 (YM) | 51,509 | +0.12% | 51,449 | 2026-10-08 16:59 |
| 러셀2000 선물 (RTY) | 2,811.9 | -0.01% | 2,812.2 | 2026-10-08 16:59 |

### 변동성 구조

| 항목 | 현재가 | 전일 대비 | 직전 종가 | 기준(ET) |
|---|---|---|---|---|
| VIX (30일) | 15.41 | +2.19% | 15.08 | 2026-10-08 16:15 |
| VIX9D (9일) | 12.21 | +3.65% | 11.78 | 2026-10-08 16:15 |
| VIX3M (3개월) | 18.08 | +2.03% | 17.72 | 2026-10-08 16:15 |
| VVIX | 87.66 | +5.39% | 83.18 | 2026-10-08 16:15 |
| SKEW | 149.19 | +5.18% | 141.84 | 2026-10-08 17:00 |

- VIX3M/VIX = 1.173 (콘탱고) · VIX/VIX9D = 1.262 (콘탱고)

### Put/Call 비율 (CBOE)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 |
|---|---|---|---|---|
| SPX | 1.187 | 1.424 | 2,526,477 | 2,999,960 |
| QQQ | 1.040 | 1.493 | 5,292,414 | 5,502,886 |

---

## [2] 금리/연준

### 금리 수치 (0_data.md 그대로, 검색 없음)

| 항목 | 현재가 | 1D | 5D | 1M | YTD | 기준 |
|---|---|---|---|---|---|---|
| 미 10년물 (Yahoo ^TNX) | 5.231 | -4.6bp | -0.6bp | +39.4bp | +106.8bp | 2026-10-08 |
| 미 30년물 (Yahoo ^TYX) | 5.606 | -5.5bp | +0.3bp | +32.0bp | +76.6bp | 2026-10-08 |
| 미 2년물 (FRED DGS2) | 4.77 | -2.0bp | -11.0bp | +38.0bp | +130.0bp | 2026-10-07 (FRED) |
| 미 10년물 (FRED DGS10) | 5.28 | +1.0bp | -1.0bp | +48.0bp | +110.0bp | 2026-10-07 (FRED) |
| 10Y-2Y 스프레드 | 0.51%p | +3.0bp | — | — | — | 2026-10-07 (FRED) |

### 연준 인사 발언 (2026-10-07~10-08 ET)

| 인사 | 날짜 | 발언 요지 | 출처 |
|---|---|---|---|
| Christopher Waller (Fed 이사) | 2026-10-08 | 터키 이스탄불 경제포럼 연설에서 "경제지표가 예상대로 나온다면 2% 목표로의 복귀를 더 신속히 하기 위해 추가 금리 인상이 필요할 것"이라고 언급. 다만 "인상 시점에는 유연성이 있다"며 "연속 회의마다 인상할 필요는 없다"고 발언 | Bloomberg, "Fed's Waller Says There Is Some Flexibility on Rate-Hike Timing", 2026-10-08 [P2] https://www.bloomberg.com/news/articles/2026-10-08/fed-s-waller-says-there-is-some-flexibility-on-rate-hike-timing / 연준 공식 연설문 [P1] https://www.federalreserve.gov/newsevents/speech/waller20261008a.htm |
| David Zervos (Bessent 신임 재무부 고문, Fed 소속 아님) | 2026-10-08 | CNBC "Power Lunch" 출연, "(실질)수익률이 역사적 기준으로 정말, 정말 높다. 앞으로 내려갈 여지가 있다고 본다"고 발언 | CNBC, "Treasury yields are 'really, really high' but can come down soon, Bessent's new advisor says", 2026-10-08 15:38 (ET) [P2] https://www.cnbc.com/2026/10/08/treasury-yields-david-zervos.html |

- Powell/Williams/Bowman/Barkin/Schmid의 10/7~10/8(ET) 발언은 검색으로 확인되지 않음 — 확인 필요 [N/A]
- 10/8(ET) 30년물 국채 입찰: $220억 규모, 간접낙찰자(indirect bidders) 비중 72.3%, 낙찰금리 5.618% — CNBC, "U.S. Treasury yields: investors await 30-year bond auction", 2026-10-08 [P2] https://www.cnbc.com/2026/10/08/us-treasury-yields-30-year-bond-auction.html

### CME FedWatch (10/28 FOMC 회의 기준)

- facts.json 직전 확인값(2026-10-07 조회): 동결(Hold) 78.4% / 25bp 인상 21.6% / 인하 0% [출처: CME FedWatch, last_verified 2026-10-08]
- 금번 검색 결과 상충: (a) "2026-10-08 기준 동결 확률 81.6%"라는 2차 집계 사이트 기술 확인 [P3, 출처 불명확 — longbridge.com 뉴스 요약], (b) 9/30 기준 CME 공식 기사에서는 "25bp 인상 확률 34%(days 전 72%에서 하락)"로 서술 — cmegroup.com 공식 페이지 직접 확인 안 됨, 2차 출처 혼재 [N/A]
- cmegroup.com FedWatch 페이지 자체(실시간 수치)는 이번 검색에서 직접 수치를 가져오지 못함 — **최종확인 10/08 기준 facts.json 값(동결 78.4%/인상 21.6%)으로 이월, 신뢰도 낮음(확인 필요) [N/A]**

---

## [3] 주요 경제지표

| 지표 | 수치 | 발표일(ET) | 비교 | 출처 |
|---|---|---|---|---|
| 신규 실업수당 청구건수(주간, 10/3 종료주) | 197,000건 (-2,000건, 전망 200,000건 하회) | 2026-10-08 | 7월 중순 이후 최저치. 4주 평균 198,000건(이전 200,500건) | Investing.com, "U.S. weekly initial jobless claims edge down to 197,000", 2026-10-08 [P2] |
| 연속 실업수당 청구건수 | 1,716,000건 (+17,000건) | 2026-10-08 | 다년간 저점 근방 | gurufocus.com, "Initial Jobless Claims Fall to Lowest Since July", 2026-10-08 [P3] |

- CPI/PPI/GDP/소매판매/ISM: 2026-10-08(ET) 발표 없음 — N/A. (CPI 9월분은 10/14, PPI·소매판매 9월분은 10/15 예정 — [8]에 별도 기재)

---

## [4] 특징 종목 (2026-10-08 ET, ±5% 이상 — [5]/[5-A]/[6] 대상 제외)

| 종목 | 등락 | 사실 | 출처 |
|---|---|---|---|
| Chipotle (CMG) | 약 +6% | Financial Times 보도: Starbucks가 Chipotle 인수를 검토·자문사와 협의한 바 있다는 보도. 공식 제안 여부는 불명 | Reuters/Investing.com, "Starbucks has explored Chipotle takeover, FT reports", 2026-10-08 [P2] / CNBC, "Starbucks Chipotle takeover: Why a deal could work", 2026-10-08 [P2] |
| Starbucks (SBUX) | 약 -3% | 동일 보도로 인수 주체측 주가는 하락 (※ ±5% 미달이나 동일 사건으로 함께 기재) | 상기 출처 동일 |
| CoreWeave (CRWV) | 약 -8~-10% | OpenAI 연환산매출 재공시 우려, 내부자 매도, 추가 자금조달 계획 등이 겹치며 하락 ($90선에서 $80선 부근으로) | FX Leaders, "CRWV Stock Falls 10% as OpenAI Concerns and Asian Chip Rout Spreads to Nasdaq", 2026-10-08 [P3] / CNBC 상기 기사 [P2] |
| Arm Holdings (ARM) | 약 -9% | 반도체 전반 매도세 심화 속 급락 | Yahoo Finance, "Arm Sinks 9% as Chip Selloff Deepens; Qualcomm Drops 6%, Marvell Slides 5%", 2026-10-08 [P2] |
| Qualcomm (QCOM) | 약 -6% | 상동 | 상기 출처 동일 |
| Intel (INTC) | 약 -5~-6% | OpenAI 매출 우려 확산에 따른 반도체주 동반 하락 | FX Leaders, "Intel Stock Faces $100 Level as OpenAI Revenue Concerns Hit INTC", 2026-10-08 [P3] |
| Marvell (MRVL) | 약 -4.6~-8% (출처 간 수치 상이, 확인 필요) | AI 자본지출 둔화 우려로 하락 | TradingKey, "Marvell Technology Inc Stock (MRVL) Moved Down by 4.60% on Oct 8", 2026-10-08 [P3] / Yahoo Finance "Marvell Drops 8%..." [P2] — 수치 불일치, 확인 필요 [N/A] |

- 다우존스 구성종목 중 Caterpillar(CAT)는 10/7(ET) 기준 약 -5.75% 보도(백로그·밸류에이션 논란) — 날짜가 10/7로 확인되어 본 리포트 기준일(10/8)과 다름, 참고용으로만 기재 [P3, 날짜 확인 필요]

---

## [4-A] 섹터별 뉴스 (0_data.md 기반, [4]/[5]/[6] 중복 제외)

| 섹터 | 종목 | 제목 | 사실 보강 | 출처·시각(ET) |
|---|---|---|---|---|
| 금융 | JPM(관련 섹터기사) | Citigroup 트랜스포메이션 관련 분석기사 | Citigroup은 비핵심사업 정리·비용절감·기술투자 등 다년간 전환작업 진행 중이라는 내용. 3Q26 실적 발표 예정(일정은 [8] 참고) 애널리스트 전망 조정 EPS $2.70 전망(전년 $2.24) | Yahoo Finance, "Citigroup's Transformation Can Lift the Stock by 30%. It's Time to Buy.", 2026-10-08 08:42 [P3] |
| 에너지 | XOM | XOM 강한 재무상태로 유가 변동성 대응 관련 기사 | 구체 수치 보강 검색 없음 — 제목 그대로만 확인 | Yahoo, 2026-10-08 09:38 [P3] |
| 헬스케어 | UNH | UNH 3분기 실적발표 예정일 | UnitedHealth는 2026-10-13(화) 개장 전 3분기 실적 발표 예정 | stockanalysis.com 등 종합 [P3] — 확인 필요(1차 출처 재확인 권장) |
| 헬스케어 | UNH | 텍사스주 검찰총장 조사 | 텍사스주 검찰총장이 UnitedHealth의 진료 접근 제한 관련 불법·기만적 관행 혐의를 조사 중이라는 보도 | 검색 결과 종합, 날짜·1차 출처 미확인 [N/A] |
| 헬스케어 | CVS | CVS Health Care Benefits 부문 가이던스 상향 | CVS는 Health Care Benefits 부문 연간 조정영업이익 전망을 $50.3억~$53.7억로 상향(기존 전망보다 $10억 이상 상향) | Yahoo Finance, "CVS' Health Care Benefits Arm Shows Better Core Trends", 날짜 확인 필요 [P3] |

---

## [5] AI 인프라 — 공급측 (NVDA/AVGO/AMD/TSM/ANET/CRDO/CLS/VRT/SMCI/APLD)

| 종목 | 사실 | 출처·일자(ET) |
|---|---|---|
| AVGO (Broadcom) | 2026-10-08 Oracle 주가 하락과 연계된 기사에서 거론: Oracle이 AI칩 구매 자금조달을 위해 부채를 추가로 조달 중이며, OpenAI 매출 공시가 겹치며 Broadcom 등 AI 밸류체인 종목도 동반 약세. Broadcom 자체 주가는 이날 약 -4% | Yahoo/CNBC, "Oracle stock falls on more debt to fund AI chip buying, OpenAI revenue disclosure", 2026-10-08 14:02 [P2] / CNBC "Nvidia, Oracle, CoreWeave..." 2026-10-08 [P2] |
| NVDA | OpenAI 매출 재공시 보도 이후 주가 약 -3% 하락. 별도 사업 뉴스(신규 수주·제품 발표 등)는 확인되지 않음 | CNBC, 2026-10-08 [P2] |
| AMD | 2026-10-07(ET) CEO Lisa Su가 대만 방문(Foxconn·TSMC 방문 포함) 중 "2027년 칩 생산을 크게 늘릴 것"이라고 언급. 같은 날 주가 +2.8% 보도 | TechRadar, "AMD CEO vows to increase chip supply in 2027...", 2026-10-07 [P3] — 1차 출처(기업 발표) 확인 필요 [N/A] |
| TSM | 상기 AMD CEO 대만 방문 관련 언급 외 별도 공급망 뉴스는 확인 안 됨 — 확인 필요 [N/A] |
| ANET (Arista) | 2026-10-07(ET) 스케일업·스케일아웃 AI 패브릭용 랙스케일 아키텍처 발표 — 제품 상세·공식 발표문 확인 필요 [N/A, 1차 출처 미확인] |
| CRDO (Credo) | 관련 신규 뉴스 확인 안 됨 — N/A |
| CLS (Celestica) | 관련 신규 뉴스 확인 안 됨 (10월 Form 4 공시는 [7-A] 참고) — N/A |
| VRT (Vertiv) | 신규 사업 발표는 확인 안 됨. Form 4 공시는 [7-A] 참고 — N/A |
| SMCI (Super Micro) | OpenAI 매출 우려 확산 속 주가 약 -5% 하락 보도 (CNBC 기사 내 언급) | CNBC, 2026-10-08 [P2] |
| APLD (Applied Digital) | 신규 사업 뉴스 확인 안 됨. Form 4 공시는 [7-A] 참고 — N/A |

**Oracle(ORCL)-OpenAI 매출 공시 핵심 사실 (검증됨):**
- OpenAI가 투자자들에게 9월 말 기준 연환산매출(annualized revenue)이 약 $500억이라고 공시, 이는 앞서 널리 보도된 $680억보다 약 $200억 낮은 수치 — Financial Times 보도 인용 [P2]
- Oracle 주가 2026-10-08 약 -6% 하락. Oracle의 장기부채는 최근 2년간 거의 2배로 증가해 $1,600억 이상, 현재 미국 회사채 시장에서 5번째로 큰 발행사로 거론됨. Oracle은 Apollo·Goldman Sachs와 추가 자금조달을 협의 중이라는 WSJ 보도 인용 — TradingKey, "Why Is Oracle Stock Down for Five Straight Days?..." [P3] / CNBC [P2]
- OpenAI는 Oracle의 최대 클라우드 고객 중 하나로, 지난 분기 기준 계약 백로그(contract backlog) $6,640억 — 출처 동일 [P3, 수치 1차 출처 미확인]

---

## [5-A] AI 인프라 — 수요측 CAPEX

- 실적시즌 아님 — 신규 분기 가이던스 공시 없음. 직전 가이던스 유지 여부는 아래 참고치로만 이월하며, **facts.json에는 아직 CAPEX 항목 기록이 없어 공식 확인 안 됨 (확인 필요)**.
- Microsoft: FY2027 1분기(9월 마감분) 실적 발표는 2026-10-28(ET) 예정. 최근 보도에 따르면 FY27 1분기 캐펙스는 "$500억 초과" 전망, CY2026 전체 캐펙스 기대치는 리스 회계방식 변경 영향 제외 시 기존과 동일하며 조정 후 약 $1,750억 수준으로 거론됨 — 공식 실적콜 인용인지 2차 가공인지 불명확, **출처일자 특정 안 됨 (확인 필요) [N/A]**
- Amazon/Google/Meta: 2026년 연간 캐펙스 가이던스 합산 약 $7,250억(전년 대비 +77%) 수준이 여러 시장분석 사이트에서 거론되나(Amazon 약 $2,200억, Google 약 $2,050억, Meta $1,300~1,450억), **모두 2차 집계 자료이며 각사 최신 실적콜 1차 출처·발표일자를 특정하지 못함 — 확인 필요 [N/A]**
- 결론: 신규 변동 없음 — 직전 가이던스 유지로 간주 (1차 출처 재확인 필요, facts.json 미기록)

---

## [6] 시총상위10 일반이슈 (AI 무관)

- MSFT/NVDA/AAPL/AMZN/GOOGL/META/AVGO/BRK/TSLA/TSM 관련 2026-10-07~08(ET) AI 무관 일반 이슈(규제/실적/제품) 검색 결과, 구체적 확인 가능한 신규 사실 없음 — N/A. (MSFT의 10/28 실적일정은 [5-A]·[8] 참고용으로만 기재, AI와 결부되어 있어 본 섹션 대상 아님)

---

## [7] 기관·대형 자금 수급

- QQQ: 2026-10-08(ET) 대형 옵션 스윕·블록 거래 포착 — 746 스트라이크 등에서 대량 풋 매수, 745 스트라이크 콜 매수 다수 체결(17:51~17:52 UTC 집중) — TrendSpider 옵션플로우 데이터 [P3, 집계 사이트 — 1차 거래소 데이터 재확인 안 됨]
- SMH/SOXX: 2026-10-08(ET) 당일 특정 블록딜·ETF 순유입/순유출 수치는 확인되지 않음. 참고로 SOXX는 최근 1주일 기준 약 $5.78억 순유출 보도가 있으나 날짜가 10/8로 특정되지 않음 — 확인 필요 [N/A]
- 결론: 10/8(ET) 당일로 명확히 날짜가 특정된 대량 기관 수급 이벤트는 확인되지 않음

---

## [7-A] Form 4

| 종목 | 내용 | 날짜 | 출처 |
|---|---|---|---|
| Applied Digital (APLD) | CFO가 RSU 전환으로 81,666주 취득, 세금 원천징수 목적으로 32,136주를 $25.38에 처분 | 2026-10-04 | SEC EDGAR Form 4 [P1] |
| Vertiv Holdings (VRT) | Form 4 신규 공시 존재(세부 매매 내역은 이번 검색에서 확인 안 됨) | 2026-10-06 | Investing.com, "Form 4 Vertiv Holdings Co For: 6 October" [P3] — 1차 출처(SEC) 직접 대조 필요 |
| Broadcom (AVGO) | 검색된 최신 공시는 2026-09-25 — 10/7~10/8(ET) 신규 공시 확인 안 됨 | 2026-09-25 (기간 밖) | Broadcom IR SEC Filings [P1] |
| Celestica (CLS) | Form 4 공시 존재 언급되나 이사 주식단위 지급 등으로 추정, 매도 여부 등 세부 확인 안 됨 | 날짜 미특정 | StockTitan [P3] |
| NVDA/CRDO/SMCI | 10/7~10/8(ET) 신규 Form 4 공시 확인 안 됨 | — | N/A |

---

## [8] 향후 14일 주요 일정 (2026-10-09 ~ 2026-10-23)

### 경제·연준 일정

| 날짜(ET) | 시각(ET) | 구분 | 이벤트 | 직전값 | 예상값 | 출처 |
|---|---|---|---|---|---|---|
| 2026-10-14 | | macro | 9월 CPI (YoY) | N/A | N/A | 다수 2차 캘린더 종합(fedratecalc.com, therighttrader.com) — 1차 출처(BLS) 미대조, 확인 필요 [P3] |
| 2026-10-15 | | macro | 9월 PPI | N/A | N/A | 상동 — 확인 필요 [P3] |
| 2026-10-15 | | macro | 9월 소매판매 | N/A | N/A | 상동 — 확인 필요 [P3] |

- JOLTS(구인·이직보고서): 다음 발표가 2026-12-01로 안내되어 본 14일 창(10/9~10/23) 안에는 없음 [P3]
- ISM 제조업/서비스업 PMI: 10월 데이터분은 각각 11/2, 11/4 발표로 본 14일 창 밖 [P3]
- FOMC 정례회의: 2026-10-28(ET) — 본 14일 창(10/23까지) 밖이라 표 밖 참고로만 기재 [P1, federalreserve.gov 일정]
- 위 CPI/PPI/소매판매 날짜는 다수 2차 캘린더가 일치하나 1차 출처(BLS/Census 공식 일정표) 직접 대조는 못함 — 정확한 예상치 수치는 확인 필요. 또한 최근 정부 셧다운 이력상 BLS 발표 일정이 변경된 전례가 있어 — **실제 발표일 변동 가능성 있음, 확인 필요 [N/A]**

### 기업 이벤트 (실적 제외)

- 10/9~10/23(ET) 구간에 출처가 확인된 제품출시/M&A/투자자의날/주총 등 기업 이벤트는 검색으로 특정하지 못함 — N/A (UnitedHealth 3분기 실적 발표일(10/13)·Microsoft 실적 발표일(10/28)은 실적 일정이라 본 표 제외)

---

## [9] 오늘의 사실 목록

- [1] S&P500 -0.47%(7,765.36), 나스닥 -1.25%(27,193.34), 다우 +0.10%(51,231.64), 러셀2000 +0.03%(2,794.13), SOX -3.39%(12,623.72) · 0_data.md [코드수집]
- [1] 나스닥·SOX 급락은 OpenAI 연환산매출이 기존 알려진 $680억보다 약 $200억 낮은 $500억이라는 Financial Times 보도發 AI 관련주 동반 매도가 원인 · CNBC, 2026-10-08 [P2]
- [1-A] VIX 15.41(+2.19%), VIX3M/VIX 1.173(콘탱고), SPX P/C(거래량) 1.187, QQQ P/C(거래량) 1.040 · 0_data.md [코드수집]
- [2] 10Y(FRED) 5.28%, 2Y(FRED) 4.77%, 10Y-2Y 스프레드 0.51%p(+3.0bp) · 0_data.md [코드수집]
- [2] Fed Waller, 2026-10-08 이스탄불 연설에서 "추가 금리 인상 필요, 다만 인상 시점엔 유연성" 발언 · Bloomberg/연준 공식, 2026-10-08 [P1/P2]
- [2] Bessent 신임 고문 David Zervos, "국채 실질수익률이 역사적으로 매우 높다, 향후 내려갈 여지 있다" 발언 · CNBC, 2026-10-08 15:38 [P2]
- [2] 10/8(ET) 30년물 국채 입찰 $220억, 간접낙찰자 72.3%, 낙찰금리 5.618% · CNBC, 2026-10-08 [P2]
- [2] CME FedWatch 10/28 FOMC 동결확률: facts.json 이월값 78.4%(10/7 조회) — 검색 결과 다른 수치(81.6%, 또는 25bp 인상확률 34%)와 상충, 최종 확정 못함 · [N/A, 확인 필요]
- [3] 신규 실업수당 청구 197,000건(-2,000건, 전망 하회, 7월 중순 이후 최저) · Investing.com, 2026-10-08 [P2]
- [3] CPI/PPI/GDP/소매판매/ISM 10/8(ET) 발표 없음 · [코드/검색 확인]
- [4] Chipotle +약6%, Starbucks -약3% — Starbucks가 Chipotle 인수를 검토했다는 FT 보도 · Reuters/CNBC, 2026-10-08 [P2]
- [4] CoreWeave 약 -8~10% — OpenAI 매출 우려·내부자 매도·자금조달 계획 겹침 · CNBC/FX Leaders, 2026-10-08 [P2/P3]
- [4] Arm -9%, Qualcomm -6%, Marvell 약 -5~8%(출처 간 수치 불일치), Intel -5~6% — 반도체주 동반 매도 · Yahoo Finance, 2026-10-08 [P2]
- [4-A] UnitedHealth 3분기 실적 발표 2026-10-13(화) 예정 · 2차 종합 [P3, 확인 필요]
- [4-A] CVS Health, Health Care Benefits 부문 연간 조정영업이익 전망 $50.3억~$53.7억로 상향(+$10억 이상) · Yahoo Finance [P3]
- [5] Oracle 주가 약 -6% — OpenAI 매출 재공시 + Oracle의 AI칩 구매 자금조달용 추가 부채조달(Apollo·Goldman Sachs 협의) 보도 겹침, 장기부채 $1,600억 이상 · CNBC/WSJ 인용 TradingKey, 2026-10-08 [P2/P3]
- [5] AMD CEO Lisa Su, 2026-10-07 대만 방문 중 "2027년 칩 생산 크게 확대" 발언(1차 출처 미확인) · TechRadar, 2026-10-07 [P3, 확인 필요]
- [5] Arista, 2026-10-07 스케일업/스케일아웃 AI 패브릭용 랙스케일 아키텍처 발표(세부 미확인) · [P3, 확인 필요]
- [5-A] 하이퍼스케일러 CAPEX 가이던스 — 신규 변동 없음, 직전 가이던스 유지로 간주(facts.json 미기록, 1차 출처 특정 못함) · [N/A, 확인 필요]
- [7] 10/8(ET) 당일로 날짜가 특정된 대량 기관 수급 이벤트 확인 안 됨 · [확인 필요]
- [7-A] Applied Digital CFO, 2026-10-04 RSU 전환 관련 81,666주 취득·32,136주 처분($25.38) · SEC EDGAR Form 4 [P1]
- [8] CPI(9월) 10/14, PPI·소매판매(9월) 10/15 발표 예정(2차 캘린더 종합, 1차 출처 미대조) · [P3, 확인 필요]
- [8] FOMC 정례회의 2026-10-28(ET) — 14일 창(10/23까지) 밖 참고 사항 · federalreserve.gov [P1]
- [8] 지정학 — 후티 반군이 리야드 킹칼리드 국제공항 등을 2026-10-08(ET) 재차 공격, 사우디아 소속 여객기 1대 파손, Lufthansa·Air India 리야드행 운항 중단 · Reuters/CNN, 2026-10-08 [P2]
