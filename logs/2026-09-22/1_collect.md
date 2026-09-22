# 미국 시장 데일리 수집 결과 (Collect)
# 기준일: 2026-09-21 (월) · 미국 정규장 종가 기준 · 실행모드: 데일리
# 생성시각(KST): 2026-09-22 09:15

> 참고: 실행 시점(KST 2026-09-22 화) 기준 최신 완결 미국 정규장은 2026-09-21(월) 종가다. 0_data.md 타임스탬프(2026-09-21 20:0x ET 등)와 동일 기준.

---

## [1] 미국 주요 지수 (데일리)

| 항목 | 종가/수치 | 등락률 | (보도된) 원인 | 출처+태그 |
|------|-----------|--------|----------------|-----------|
| S&P500 | 7,764.70 | +1.49% | AI 관련주 강세, 국채금리·유가 하락 | Reuters/Yahoo Finance · Stock Market Today (Sept. 21, 2026): Nasdaq surges as oil prices retreat · 2026-09-21 (ET) · https://finance.yahoo.com/markets/stocks/articles/stock-market-today-sept-21-135426827.html [P2] |
| NASDAQ 종합 | 27,122.09 | +2.26% (사상 최고 종가, 6월 이후 첫 기록 경신) | 반도체·AI 관련주 급등 | 상동 [P2] |
| Dow | 52,048.83 | +0.71% (+366.19pt) | 반도체주 랠리 동반 상승 | 상동 [P2] |
| Russell2000 | N/A — 정확한 종가 확인 불가(사상 최고 근접 보도만 확인, 수치 소스 간 불일치) | N/A | 확인 필요 | 확인 필요 [N/A] |
| SOX (필라델피아 반도체지수) | N/A — 정확한 종가 수치 확인 불가 | +4.3% (5거래일 연속 상승, 매체 보도치) | Trump-Xi 정상회담(9/24) 기대감 속 AI 밸류체인 랠리 | Yahoo Finance(AMD $1조 시총 관련 기사 중 인용) · 2026-09-21 (ET) · https://finance.yahoo.com/markets/stocks/articles/amd-hits-1-trillion-market-191855355.html [P2] |
| Brent 원유 | 100.06달러/배럴 | -3.67% (일부 소스 -2%대 보도) | 중동(이스라엘-하마스) 협상 진전 시그널, 4거래일 연속 하락 | TradingKey · Market Movers: UKOIL 2026-09-21 · 2026-09-21 (ET) · https://www.tradingkey.com/news/market-movers/262177275-market-movers-ukoil-20260921 [P3] |

비고: CNBC는 이날 지수가 큰 폭 상승했음에도 S&P500 구성종목 중 신규 52주 신저가(30개)가 신규 52주 신고가(7개)를 웃도는 현상이 나타났다고 보도. 지수가 1% 이상 상승해 52주 신고가 1% 이내로 근접한 상태에서 신저가가 신고가를 앞지른 사례는 1999-12-21 이후 처음, 그 이전 사례는 1929-07-23뿐이라고 보도됨 — CNBC · Stocks had a great day on the surface. But something alarming occurred not seen since 1999 · 2026-09-21 17:20 (ET) · https://www.cnbc.com/2026/09/21/stocks-had-a-great-day-on-the-surface-but-something-alarming-occurred-not-seen-since-1999.html [P2]

---

## [1-A] 선물·변동성 구조 (0_data.md 원본 그대로)

### 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,837 | +2.35% | 7,657.35 | 2026-09-21 20:03 |
| 나스닥100 선물 (NQ) | `NQ=F` | 30,866.75 | +4.23% | 29,613.68 | 2026-09-21 20:03 |
| 다우 선물 (YM) | `YM=F` | 52,464 | +1.36% | 51,761 | 2026-09-21 20:03 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,900.1 | +0.94% | 2,873.23 | 2026-09-21 20:03 |

### 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 14.87 | +0.41% | 14.81 | 2026-09-21 16:15 |
| VIX9D (9일) | `^VIX9D` | 13.14 | +7.09% | 12.27 | 2026-09-21 16:15 |
| VIX3M (3개월) | `^VIX3M` | 18.08 | -0.88% | 18.24 | 2026-09-21 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 85.77 | -1.84% | 87.38 | 2026-09-21 16:15 |
| SKEW (테일리스크) | `^SKEW` | 142.19 | -3.99% | 148.1 | 2026-09-21 17:00 |

### 매크로 (0_data.md 원본)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 미 10년 국채선물 | `ZN=F` | 106.13 | +0.04% | 106.08 | 2026-09-21 20:02 |
| 금 | `GC=F` | 4,411.8 | -0.30% | 4,424.9 | 2026-09-21 20:03 |
| WTI | `CL=F` | 92.2 | -8.08% | 100.3 | 2026-09-21 20:03 |
| 달러지수 (DXY) | `DX-Y.NYB` | 100.41 | +0.19% | 100.22 | 2026-09-21 20:03 |

### VIX 기간구조 (0_data.md 산출값)

| 비율 | 값 | 구조(분류명) |
|------|----|----|
| VIX3M / VIX | 1.216 | 콘탱고 |
| VIX / VIX9D | 1.132 | 콘탱고 |

### Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 0.802 | 1.424 | 3,470,485 | 2,783,203 | 29,518 |
| 나스닥100 ETF 옵션 (QQQ) | 1.111 | 1.391 | 4,943,097 | 5,491,977 | 10,560 |

출처(전체): CBOE / CME (Yahoo chart API 자동수집) [P1]

---

## [2] 금리/연준 (데일리)

| 항목 | 수치/내용 | 출처+태그 |
|------|-----------|-----------|
| 10년물 국채금리 | 4.96%~4.97% (전일 대비 -3~-4bp 하락) | TradingEconomics/Reuters 집계 · 2026-09-21 (ET) [P2] |
| 2년물 국채금리 | N/A — 09-21 종가 확정치 확인 불가(직전 확인치: 09-18 기준 4.75%) | 확인 필요 [N/A] |
| 10Y-2Y 스프레드 | N/A — 09-21 기준 양쪽 확정치 모두 확보되지 않아 계산 보류 | N/A [N/A] |
| 국채금리 하락 배경(보도) | 이번 주 다수 연준 인사 발언을 앞두고 금리 하락, 유가가 4거래일 연속 하락하며 인플레이션 우려 완화 | Reuters(Investing.com 게재) · Wall St opens higher as AI stocks advance, oil slides · 2026-09-21 (ET) · https://www.investing.com/news/stock-market-news/wall-st-opens-higher-as-ai-stocks-advance-oil-slides-4909214 [P2] |
| CME FedWatch (차기 FOMC, 2026-10-28) | 2026-09-20 기준 25bp 추가 인상 확률 59.7% (또 다른 소스는 56%로 제시 — 소스 간 수치 상이) | growbeansprout.com/투자기관 집계 · 2026-09-20 [P3] — 수치 상이로 확인 필요 |

비고: 직전 FOMC(2026-09-16)는 연방기금금리를 25bp 인상해 3.75~4.00%로 상향(2023년 7월 이후 첫 인상)했으며, Warsh 의장은 "underlying inflation이 목표로 뚜렷하고 충분한 속도로 수렴하고 있다는 확신이 없다"는 취지로 발언(2026-09-16, 기자회견) — 이번 주(09-21~09-25)에는 복수의 연준 인사 발언이 예정돼 있다고 보도되었으나(Reuters/Investing.com), 09-21 당일 개별 연준 인사의 구체 발언 내용은 검색으로 확인되지 않아 N/A.

---

## [3] 주요 경제지표

오늘(2026-09-21, 월요일) 발표된 CPI·Core CPI·PPI·GDP·Payroll·실업률·실업수당·소매판매·ISM 지표 없음 — N/A. (검색 범위 내 해당일 발표된 주요 지표 확인 안 됨. 이번 주 후반 발표 예정 지표는 [8] 참고)

---

## [4] 특징 종목 (±5% 등락 또는 거래량 급증)

| 종목 | 티커 | 등락률 | 거래량 | (보도된) 핵심 사실 | 출처+태그 |
|------|------|--------|--------|----------------------|-----------|
| Arm Holdings | ARM | +12.48%~+17% (소스 간 수치 편차, 종가 약 322.35~322.90달러) | N/A | Meta의 Muse AI 에이전트가 앱스토어 다운로드 1위에 오르며 CPU 수요 기대 재점화, 반도체 전반 강세 동반 | Yahoo Finance/TradingKey/GuruFocus 집계 · 2026-09-21 (ET) [P3] |
| Intel | INTC | +12% (종가 121.78달러, 7월 초 이후 최고) | N/A | Lip-Bu Tan CEO가 고객 수요의 50%만 충족 가능하다고 공개, Meta Muse發 CPU 수요 기대·Tigress Financial 목표주가 상향($118→$145)·Northland 투자의견 상향 등 겹침 | CNBC · Intel surges 12% as CPU stocks rally. Here's what's driving the move · 2026-09-21 14:37 (ET) · https://www.cnbc.com/2026/09/21/intel-surges-12percent-as-cpu-stocks-rally-heres-whats-driving-the-move.html [P2] |
| AMD | AMD | +8~10% (장중 최고 613.92~615.99달러) | N/A | 시가총액 처음으로 1조달러 돌파(엔비디아·브로드컴·마이크론에 이어 4번째 美 반도체기업), 5거래일 연속 상승(누적 약 +25%), Meta Muse 흥행에 따른 AI 반도체 수요 기대 확산 | CNBC · AMD hits $1 trillion market cap for the first time as stock rides 5-day rally · 2026-09-21 (ET) · https://www.cnbc.com/2026/09/21/amd-stock-1-trillion-value.html [P2] |
| Meta Platforms | META | +11% | N/A | Wells Fargo가 목표주가를 640달러→796달러로 상향, 신규 AI 개인비서 앱 "Muse"가 애플 앱스토어 다운로드 1위 기록(출시 13일 만) | Yahoo Finance · Meta stock soars 11% on price target increase, Muse AI downloads · 2026-09-21 (ET) · https://finance.yahoo.com/technology/article/meta-stock-soars-11-on-price-target-increase-muse-ai-downloads-180423756.html [P2] |

비고: Super Micro Computer(SMCI) +16%대 상승 보도가 일부 소스에서 검색됐으나 게재일(2026-09-21) 매칭이 불확실해 표에서 제외(확인 필요). Nvidia·Tesla가 이날 4% 하락했다는 일부 소스 보도도 다른 소스(NVDA +1.34%, TSLA -0.53%)와 상충해 채택하지 않음.

---

## [4-A] 섹터별 뉴스 (0_data.md Finnhub 수집분 기반)

| 섹터 | 종목 | 사실 내용(무슨 일이) | 발행시각(ET) | 출처+태그 |
|------|------|----------------------|--------------|-----------|
| 반도체·AI | NVDA | TSMC의 패키징(CoWoS 등) 증설 수혜가 예상되는 칩주 3종을 소개하는 기사 게재(제목 기준) | 2026-09-21 17:45 | Yahoo(Finnhub 수집) [P3] |
| 반도체·AI | AVGO | AMD가 시가총액 1조달러 클럽에 진입했다는 기사(반도체주 전반 강세 동반 보도) | 2026-09-21 15:26 | Yahoo(Finnhub 수집) [P3] |
| 금융 | JPM | Bank of America가 AI를 다음 효율성·성장 동력으로 삼을 수 있는지를 다룬 기사(제목 기준) | 2026-09-21 11:41 | Yahoo(Finnhub 수집) [P3] |
| 에너지 | XOM | Exxon Mobil이 2007년 강제 철수했던 베네수엘라 유전으로 복귀할 수 있다는 보도, 배경 변화를 설명 | 2026-09-21 16:50 | Yahoo(Finnhub 수집) [P3] |
| 헬스케어 | UNH | 다우존스 구성종목 중 이날 변동성이 큰 종목을 정리한 기사(UNH 포함, 제목 기준) | 2026-09-21 15:10 | ChartMill(Finnhub 수집) [P3] |
| 소비재·유통 | AMZN | Amazon이 AI 쇼핑 관련 제휴에서 Meta의 Muse를 배제하며 결별했다는 보도(제목 기준, 상세 미확인) | 2026-09-21 17:33 | Yahoo(Finnhub 수집) [P3] |

비고: [4]에서 이미 다룬 Intel·AMD·Arm·Meta 관련 세부 내용은 여기서 반복하지 않음. 나머지 Finnhub 수집 항목(JPM 카드 리워드 프로모션, T-Mobile 목표주가 하향, XLE 구성 설명 등)은 시장 전반과 관련성이 낮아 제외.

---

## [5] AI 인프라 — 공급 측

| 기업 | 뉴스 제목 | 사실 내용(무슨 일이) | 출처일자 | 출처+태그 |
|------|-----------|----------------------|----------|-----------|
| NVDA | Nvidia CEO Jensen Huang, 데이터센터 전력 공급 모니터링 관련 발언 | Jensen Huang이 AI 서버 운영의 핵심 병목으로 떠오른 전력 공급 문제에 대응해 글로벌 전력 자원 모니터링을 강화하고 있다고 언급, 데이터센터 부지 선정 시 토지·칩 조달보다 전력 접근성을 우선시한다고 설명 | 2026-09-21 | GuruFocus · NVIDIA (NVDA) Focuses on Power Supply for AI Data Centers Amid Shortages · 2026-09-21 · https://www.gurufocus.com/news/9089493/nvidia-nvda-focuses-on-power-supply-for-ai-data-centers-amid-shortages [P3] |
| ASML / TSM / NVDA / INTC / 삼성전자 / SK하이닉스 | ASML "High NA" EUV 장비 공동개발 협력 | ASML이 TSMC·Nvidia·Intel·삼성전자·SK하이닉스 등 주요 고객사와 함께 차세대 High NA EUV 노광장비가 더 큰 데이터센터용 칩을 인쇄할 수 있도록 개조하는 작업을 진행 중이라고 발표. ASML CTO Marco Pieters는 이를 통해 장비 생산성이 약 40% 개선될 수 있다고 언급 | 2026-09-08 | Reuters(집계 인용) · ASML and Chip Giants like TSMC Plot a Bigger Canvas for Building AI Chips · 2026-09-08 · https://finance.yahoo.com/technology/ai/articles/asml-asml-chip-giants-tsmc-214129428.html [P2] |
| TSM | TSMC 8월 매출·2026 CAPEX 가이던스 | TSMC 8월 매출이 전년 대비 53% 이상 급증해 사상 최고치 기록. 2026년 CAPEX 가이던스를 기존 대비 15% 상향해 600억~640억달러로 제시, 연간 매출 성장률 전망도 40%를 상회하도록 상향. 동시에 ASML이 TSMC에 리소그래피 장비 가격 10% 인상을 요구 중이며 TSMC는 이에 저항 중이라고 보도 | 2026-09-10(매출), 시점 확인 필요(CAPEX 가이던스 상향) | Reuters(집계 인용) · TSMC Just Delivered Incredible News for ASML Investors · https://www.nasdaq.com/articles/tsmc-just-delivered-incredible-news-asml-investors [P2] |
| VRT | Vertiv, UtilityInnovation Group 인수 | Vertiv가 AI 데이터센터용 전력 공급 확대를 위해 UtilityInnovation Group을 약 14.5억달러 현금에 인수하기로 합의. EBITDA 목표 달성 시 최대 11.5억달러의 추가 현금 언아웃(earnout) 조건 포함 | 확인 필요(공시일 미확인, 2026년 9월 중 보도) | SEC Form 8-K(집계 인용) [P1 원문/보도는 P3] — 구체 공시일자 확인 필요 |
| VRT | Vertiv 분기 배당 공시 | 2026-09-02 주당 0.0625달러 분기 현금배당 공시, 기준일 09-14, 지급일 09-24 | 2026-09-02 | SEC Form 8-K · https://www.sec.gov/Archives/edgar/data/0001674101/000162828026059961/exhibit991vrt-q32026divide.htm [P1] |
| ANET | Arista Networks, AI 랙스케일 패브릭용 스위치 신제품 | Arista가 대규모 AI 데이터센터용으로 설계된 7060XE7 시리즈 스위치 제품군을 출시(2026년 중, 구체 발표일 미확인) | 확인 필요 | Fool.com(집계 인용) · 2 Superior AI Infrastructure Stocks to Buy and Hold for 10 Years · 2026-09-20 [P3] |
| 메모리 반도체(DRAM) | DDR4 현물가 45달러 돌파 | 2026-09-11 기준 DDR4 1Gx8 3200 현물가 45.214달러로 45달러선 상회, 연초 대비 큰 폭 상승 | 2026-09-11 | siliconanalysts.com · DRAM Spot Price 2026 [P3] |
| 메모리 반도체(HBM) | HBM3E 36GB 스택 리세일 가격 | 2026-08-31 기준 HBM3E 36GB 스택 리세일가 약 2,100달러로, 장기계약가 대비 4~5배 수준(HBM은 공개 현물시장이 없어 업계 추정치임을 명시). 참고: HBM3E 장기계약가는 기가비트당 약 1.50~1.60달러, HBM4는 약 2.00달러 수준으로 별도 보도 | 2026-08-31 | siliconanalysts.com · HBM Pricing & Market Share (2026) [P3] |

---

## [5-A] AI 인프라 — 수요측/하이퍼스케일러 CAPEX

MSFT·AMZN·GOOGL·META의 차기(2026년 3분기) 정기 실적 발표 일자는 검색으로 확정하지 못함. 현재 시점(2026-09-22)은 해당 4개사 실적시즌이 아닌 것으로 판단됨.

→ 신규 변동 없음 — 직전 가이던스 유지. (구체 수치·확정일자는 검색으로 재확인하지 못해 본 회차에서는 생략)

---

## [6] 시총상위 10 — AI무관 일반 이슈

N/A — 검색 범위 내 시총상위 10대 기업의 AI 무관 일반 이슈(규제·실적·제품) 특이사항 확인 안 됨. 실적시즌 아님.

---

## [7] 기관·대형 자금 수급

| 항목 | 내용 | 출처+태그 |
|------|------|-----------|
| SMH (VanEck 반도체 ETF) | 최근 5거래일 순유입 약 +16.4억달러, 최근 1개월 순유입 약 +5.27억달러(시점: 2026년 9월 하순 기준) | etf 자금흐름 집계 매체(Yahoo Finance 등) · 2026-09-21 전후 [P3] |
| SOXX (iShares 반도체 ETF) | 최근 1개월 순유입 약 +94.3억달러(+20.5% of AUM) | etfedgelab.com 등 집계 · 시점 확인 필요(수 주 전 데이터일 가능성, 최신성 확인 필요) [P3] |
| QQQ | 2026-09-16 기준 일간 순유입 약 10억달러 — 09-21 당일 수치는 확인 안 됨 | Yahoo Finance · Daily ETF Flows: QQQ Inflows Total Nearly $1B · 2026-09-16 [P3] — 최신성 확인 필요 |
| 블록딜/대량거래 | N/A — 검색으로 특정 확인된 블록딜 없음 | N/A [N/A] |
| 옵션 시장 특이사항 | N/A — 09-21 당일 특이 옵션 거래 관련 보도 확인 안 됨(P/C 비율은 [1-A] 참고) | N/A [N/A] |

---

## [7-A] Insider Trading (SEC Form 4)

- NVDA: CFO Colette Kress, 2026-09-16 스톡페이먼트(stock payment) 방식으로 40,747주 처분(주당 212.17달러). 2026-09-17 장내 매도 3건 실행, 주당 218.01~219.59달러에 합계 약 34,918주 추가 처분 — SEC EDGAR Form 4 [P1]
- AVGO: N/A — 2026년 9월 신규 Form 4 공시 확인 안 됨(검색 범위 내 7월·3월 필링만 확인)
- CRDO·CLS·APLD·VRT·SMCI: N/A — Form 4 신규 공시 확인 안 됨(검색 범위 내 미확인)

---

## [8] 향후 14일 주요 일정

**경제 일정**

| 날짜 | 시각(ET·KST) | 이벤트 | 컨센서스 | 이전치 | 출처 |
|------|--------------|--------|----------|--------|------|
| 2026-09-29 | 확인 필요 | 펜딩홈세일즈, 댈러스 연은 제조업지수 | N/A | N/A | FXStreet · forecasting the upcoming week · [P3] |
| 2026-09-30 | 확인 필요 | JOLTs 구인건수, FHFA 주택가격지수, 시카고 PMI, CB 소비자신뢰지수 | N/A | N/A | 상동 [P3] |
| 2026-10-01 | 확인 필요 | ADP 민간고용, ISM 제조업 PMI, 건설지출 | N/A | N/A | 상동 [P3] |
| 2026-10-02 | 08:30 ET | 9월 비농업고용지표(Nonfarm Payrolls), 실업률, ISM 서비스업 PMI, 신규 실업수당청구, Challenger 감원, 공장주문 | N/A(확인 필요) | N/A | fedratecalc.com/FXStreet [P3] |

**기업 일정**

| 날짜 | 기업 | 이벤트 | 컨센서스 EPS | 컨센서스 매출 | 출처 |
|------|------|--------|--------------|---------------|------|
| 2026-09-23~25 | (정치 일정, 참고) | Trump-Xi 정상회담(워싱턴 D.C., 백악관), 9/24 본행사 · AI 관련 대화체 논의 포함 보도 | 해당없음 | 해당없음 | CNBC/CSIS 등 집계 · 2026-09-20 [P2/P3] |
| 2026-09-30 | Micron (MU) | 장 마감 후 실적 발표 | N/A(확인 필요) | N/A(확인 필요) | 업계 실적캘린더 집계 [P3] |

비고: FedEx·Nike의 정확한 실적 발표일은 검색으로 확정하지 못함(N/A). 10월 14일 9월 CPI, 10월 28일 FOMC는 14일(2026-10-06)을 넘어서는 일정이나 참고용으로 병기.

---

## [9] 오늘의 사실 목록 (순위 없음)

```
[1] S&P500 7,764.70(+1.49%), 나스닥종합 27,122.09(+2.26%, 사상 최고 종가), 다우 52,048.83(+0.71%, +366.19pt) · Reuters/Yahoo Finance [P2]
[1] SOX +4.3%(5거래일 연속 상승, 정확 종가 미확인), 러셀2000 종가 미확인(사상 최고 근접 보도) · Yahoo Finance [P2/N/A]
[1] Brent 원유 100.06달러/배럴, -3.67%(중동 협상 진전 시그널) · TradingKey [P3]
[1] S&P500 구성종목 중 신규 52주 신저가(30개) > 신규 52주 신고가(7개), 1999-12-21 이후 첫 사례 · CNBC [P2]
[1-A] ES선물 7,837(+2.35%), NQ선물 30,866.75(+4.23%), YM선물 52,464(+1.36%), RTY선물 2,900.1(+0.94%) · CBOE/CME(Yahoo chart API) [P1]
[1-A] VIX 14.87(+0.41%), VIX9D 13.14(+7.09%), VIX3M 18.08(-0.88%), VVIX 85.77(-1.84%), SKEW 142.19(-3.99%) · CBOE/CME(Yahoo chart API) [P1]
[1-A] VIX3M/VIX 1.216(콘탱고), VIX/VIX9D 1.132(콘탱고) · CBOE/CME(Yahoo chart API) [P1]
[1-A] SPX P/C 거래량비 0.802, QQQ P/C 거래량비 1.111 · CBOE/CME(Yahoo chart API) [P1]
[2] 10년물 국채금리 4.96~4.97%(-3~4bp), 2년물·10Y-2Y 스프레드는 09-21 확정치 미확인 · TradingEconomics/Reuters [P2/N/A]
[2] CME FedWatch 10/28 FOMC 추가 25bp 인상 확률 56~59.7%(소스 간 상이) · growbeansprout.com 등 [P3]
[2] 직전 FOMC(09-16) 25bp 인상 3.75~4.00%, Warsh 의장 인플레 미확신 발언(배경 정보) · CNBC [P2]
[3] 2026-09-21 CPI·PPI·GDP·Payroll·실업률 등 주요 지표 발표 없음 · 확인 필요 [N/A]
[4] Arm(ARM) +12.48~17%, Meta Muse發 CPU 수요 기대 재점화 · Yahoo/TradingKey [P3]
[4] Intel(INTC) +12%(종가 121.78달러), Lip-Bu Tan CEO "수요의 50%만 충족 가능" 발언·목표주가 상향 · CNBC [P2]
[4] AMD +8~10%, 시가총액 최초 1조달러 돌파(美 4번째 반도체기업), 5거래일 연속 상승 · CNBC [P2]
[4] Meta(META) +11%, Wells Fargo 목표주가 640→796달러 상향, Muse 앱스토어 1위 · Yahoo Finance [P2]
[4-A] NVDA 관련 TSMC 패키징 수혜주 소개 기사, AVGO 관련 AMD 1조달러 클럽 기사 · Yahoo(Finnhub) [P3]
[4-A] XOM 베네수엘라 유전 복귀 가능성 보도 · Yahoo(Finnhub) [P3]
[5] Jensen Huang, AI데이터센터 전력공급 모니터링 강화 발언(2026-09-21) · GuruFocus [P3]
[5] ASML-TSMC·Nvidia·Intel·삼성·SK하이닉스 High NA EUV 공동개조, 생산성 약 40% 개선 기대(2026-09-08) · Reuters(집계) [P2]
[5] TSMC 8월 매출 전년比 +53%(사상최고), 2026 CAPEX 가이던스 600~640억달러로 15% 상향, ASML 장비가 10% 인상 요구에 TSMC 저항 · Reuters(집계) [P2]
[5] Vertiv, UtilityInnovation Group 약 14.5억달러 현금 인수(전력 공급 확대 목적) · SEC 8-K(집계) [P1/P3]
[5] Vertiv 분기배당 주당 0.0625달러 공시(09-02) · SEC Form 8-K [P1]
[5] Arista, AI 랙스케일 패브릭용 7060XE7 스위치 시리즈 출시(2026년 중) · Fool.com(집계) [P3]
[5] DDR4 1Gx8 3200 현물가 45.214달러(09-11 기준) · siliconanalysts.com [P3]
[5] HBM3E 36GB 스택 리세일가 약 2,100달러(08-31 기준, 업계 추정치) · siliconanalysts.com [P3]
[5-A] MSFT·AMZN·GOOGL·META 3분기 실적 미발표, 현재 실적시즌 아님 → 직전 가이던스 유지 · N/A(정확 일자 미확인) [N/A]
[6] 시총상위 10 AI무관 특이 이슈 N/A
[7] SMH 5거래일 순유입 약 +16.4억달러·1개월 +5.27억달러, SOXX 1개월 순유입 약 +94.3억달러(최신성 확인 필요) · 집계 매체 [P3]
[7] QQQ 09-16 기준 일간 순유입 약 10억달러(09-21 당일치 미확인) · Yahoo Finance [P3]
[7-A] NVDA Form 4: CFO Colette Kress 스톡페이먼트 40,747주 처분(09-16)·장내매도 약 34,918주(09-17) · SEC EDGAR [P1]
[7-A] AVGO·CRDO·CLS·APLD·VRT·SMCI 09월 Form 4 신규 공시 확인 안 됨 · N/A
[8] Trump-Xi 정상회담 09-23~25(백악관, 09-24 본행사), AI 대화체 논의 포함 보도 · CNBC/CSIS [P2/P3]
[8] 09-29~10-02 펜딩홈세일즈·JOLTs·ISM제조업·비농업고용지표 등 경제일정, 09-30 Micron 실적 · FXStreet/업계 캘린더 [P3]
```
