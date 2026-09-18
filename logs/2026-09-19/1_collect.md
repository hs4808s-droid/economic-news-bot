# 미국 시장 데일리 수집 결과 (Collect)
# 기준일: 2026-09-18 (금) · 미국 정규장 종가 기준 · 실행모드: 데일리
# 생성시각(KST): 2026-09-19 09:40

> 참고: 실행 시점(KST) 기준 최신 완결 미국 정규장은 2026-09-18(금) 종가다. 0_data.md 타임스탬프(2026-09-18 16:59 ET 등)와 동일 기준.

---

## [1] 미국 주요 지수 (데일리)

| 항목 | 종가/수치 | 등락률 | (보도된) 원인 | 출처+태그 |
|------|-----------|--------|----------------|-----------|
| S&P500 | 7,650.50 | +0.17% | 국채금리 급등(10년물 5% 상회)·유가 상승 속에서도 반도체주 강세가 지수 하방을 방어 | Reuters(Yahoo Finance 게재) · Stock market today: Dow, S&P 500 post weekly losses as 10-year Treasury yield hovers near 5% · 2026-09-18 (ET) · https://finance.yahoo.com/markets/live/stock-market-today-friday-september-18-dow-sp-500-nasdaq-080504071.html [P2] |
| NASDAQ 종합 | 26,522.55 | +0.39% | 반도체주 랠리 | 상동 [P2] |
| Dow | 51,682.64 | -0.18% (95.40포인트 하락) | 국채금리 상승 및 고유가 부담 | 상동 [P2] |
| Russell2000 | N/A (등락률만 확인: +0.39%) | +0.39% | 확인 필요 | TheStreet · Stock Market Today (Sept. 18, 2026) · 2026-09-18 (ET) · https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-sept-18-2026 [P3] |
| SOX (필라델피아 반도체지수) | N/A — 정확한 종가 확인 불가 | N/A | 확인 필요 | N/A [N/A] |
| Brent 원유 | 103.87달러/배럴 (종가 기준) | -0.9% | 미 해군의 호르무즈해협 대규모 유조선단 호위 등 공급 우려 완화 보도 | CNBC · Oil prices today: Brent, WTI, Saudi Arabia, Houthi · 2026-09-18 (ET) · https://www.cnbc.com/2026/09/18/oil-prices-today-brent-wti-saudi-arabia-houthi.html [P2] |

비고: 10년물 국채금리는 이번 주 중 한때 5%를 상회(2007년 7월 이후 최고 수준)했다가 목요일 하락 후 금요일 재차 5.006%까지 반등 — Yahoo Finance(Reuters 소스) [P2]. (금리 상세 수치는 [2]에서 재정리)

---

## [1-A] 선물·변동성 구조 (0_data.md 원본 그대로)

### 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,725 | +1.11% | 7,640 | 2026-09-18 16:59 |
| 나스닥100 선물 (NQ) | `NQ=F` | 29,955 | +1.73% | 29,446.75 | 2026-09-18 16:59 |
| 다우 선물 (YM) | `YM=F` | 52,138 | +0.64% | 51,807 | 2026-09-18 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,880.5 | +0.16% | 2,875.9 | 2026-09-18 16:59 |

### 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 14.81 | -4.08% | 15.44 | 2026-09-18 16:15 |
| VIX9D (9일) | `^VIX9D` | 12.27 | -8.36% | 13.39 | 2026-09-18 16:15 |
| VIX3M (3개월) | `^VIX3M` | 18.24 | -1.67% | 18.55 | 2026-09-18 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 87.38 | -0.39% | 87.72 | 2026-09-18 16:15 |
| SKEW (테일리스크) | `^SKEW` | 148.1 | +1.65% | 145.7 | 2026-09-18 17:00 |

### 매크로 (0_data.md 원본)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 미 10년 국채선물 | `ZN=F` | 105.83 | -0.54% | 106.41 | 2026-09-18 16:59 |
| 금 | `GC=F` | 4,415.9 | +0.37% | 4,399.7 | 2026-09-18 16:59 |
| WTI | `CL=F` | 95.47 | -6.32% | 101.91 | 2026-09-18 16:59 |
| 달러지수 (DXY) | `DX-Y.NYB` | 100.22 | -0.00% | 100.22 | 2026-09-18 16:59 |

### VIX 기간구조 (0_data.md 산출값)

| 비율 | 값 | 구조(분류명) |
|------|----|----|
| VIX3M / VIX | 1.232 | 콘탱고 |
| VIX / VIX9D | 1.207 | 콘탱고 |

### Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.134 | 1.404 | 2,363,758 | 2,681,040 | 29,886 |
| 나스닥100 ETF 옵션 (QQQ) | 1.064 | 1.381 | 3,560,283 | 3,787,516 | 10,970 |

출처(전체): CBOE / CME (Yahoo chart API 자동수집) [P1]

---

## [2] 금리/연준 (데일리)

| 항목 | 수치/내용 | 출처+태그 |
|------|-----------|-----------|
| FOMC 정책 결정 (2026-09-16) | 연방기금금리 목표범위 25bp 인상, 3.75~4.00%로 상향. 2023년 7월 이후 첫 인상 | CNBC · Fed rate decision September 2026: Rates rise to 3.75%-4% · 2026-09-16 (ET) · https://www.cnbc.com/2026/09/16/fed-rate-decision-september-2026.html [P2] |
| 점도표(dot plot) | 참가자 18명 중 16명이 연내 추가 1회 인상 전망, 4명은 2회 인상 전망(중복 응답 있을 수 있음, 원문 표현 그대로). 연말 기준금리 중위값 전망 4.1% | 상동 [P2] |
| Warsh 의장 발언 (2026-09-16 기자회견) | "This summer's inflation readings do not tell me that underlying trends have meaningfully improved." / "We must be confident that underlying inflation is moving to our objective, clearly and at sufficient speed... Today, the FOMC decided that this standard has not been satisfied." | CNBC · Fed meeting recap: Warsh says inflation is still too high as Fed hikes for the first time since 2023 · 2026-09-16 (ET) · https://www.cnbc.com/2026/09/16/fed-meeting-today-live-updates.html [P2]; 연준 기자회견 원문 · Federal Reserve · September 16, 2026 Chairman Warsh's Press Conference (Preliminary) · https://www.federalreserve.gov/mediacenter/files/FOMCpresconf20260916.pdf [P1] |
| 10년물 국채금리 | 4.94%~5.006% 사이 (2026-09-18 중 변동, 종가 기준 약 4.94%) | Trading Economics / Yahoo Finance(Reuters) · 2026-09-18 (ET) [P2] |
| 2년물 국채금리 | 4.737%→일중 4.73%로 하락 | 상동 [P2] |
| 10Y-2Y 스프레드 | N/A — 직접 계산 시 약 +0.2%p대로 추정되나 매체가 명시적으로 보도한 스프레드 수치는 확인 안 됨 → N/A 처리 | N/A [N/A] |
| CME FedWatch (차기 FOMC, 2026-10-28) | 2026-09-17 기준 25bp 추가 인상 확률 55.1%; 다른 소스는 인상 확률 95%로 제시 — 소스 간 수치 상이, 재확인 필요 | growbeansprout.com/MacroMicro 기반 집계 · 2026-09-17 [P3] — 수치 상이로 "확인 필요" 표기 |

---

## [3] 주요 경제지표

오늘(2026-09-18) 발표된 지표: CPI·PPI·GDP·Payroll·실업률 없음. 대신 아래 지표가 발표됨.

| 지표 | 발표치 | 예상치 | 서프라이즈(발표-예상) | 출처+태그 |
|------|--------|--------|------------------------|-----------|
| 신규 실업수당 청구건수 (주간) | N/A — 확정치 확인 안 됨 | 309,000 (컨센서스) | N/A | Kiplinger · What to Look Out for in Economic Data This Week (Sept 14-18) · 2026-09-18 이전 게재 [P3] |
| 시카고 연은 국가활동지수(8월) | N/A | 0.50 (예상) | N/A | 상동 [P3] |
| S&P 글로벌 플래시 종합 PMI(9월) | N/A | 제조업 60.8 / 서비스업 55.1 (예상) | N/A | 상동 [P3] |
| 경기선행지수(LEI, 8월) | N/A | +0.6% (예상, 전월 +0.9%) | N/A | 상동 [P3] |

비고: 위 지표들은 예상치만 확인되고 실제 발표치(액추얼)는 검색으로 확정하지 못해 전부 N/A 처리함.

---

## [4] 특징 종목 (±5% 등락 또는 거래량 급증)

| 종목 | 티커 | 등락률 | 거래량 | (보도된) 핵심 사실 | 출처+태그 |
|------|------|--------|--------|----------------------|-----------|
| Xenon Pharmaceuticals | XENE | -29% (프리마켓) | N/A | 뇌전증 치료제 azetukalner 3상 임상시험의 신규 환자 등록을 자발적으로 중단한다고 발표 | Benzinga(집계 인용) · Premarket Movers · 2026-09-18 (ET) [P3] |
| Robinhood Markets | HOOD | +5.94% (프리마켓) | N/A | SEC로부터 5년 조건부 "혁신 예외(Innovation Exemption)" 부여 | 상동 [P3] |
| Coinbase Global | COIN | +5.8% | N/A | SEC의 신규 토큰화 규정 발표에 암호화폐 관련주 동반 상승 | 상동 [P3] |
| Nucor | NUE | -5.33% (프리마켓) | N/A | 3분기 이익 가이던스가 월가 예상치를 하회 | 상동 [P3] |
| Netflix | NFLX | -5% 안팎 (일부 보도 -3%대) | N/A | Wells Fargo가 투자의견을 Underweight로 하향, 시청 참여도(engagement) 우려 | Yahoo Finance(집계) · Company News for Sep 18, 2026 · 2026-09-18 (ET) [P3] |

비고: Sandisk(SNDK, +4.93%), Palo Alto Networks(PANW, -4.14%) 등은 ±5% 기준에 근접하나 미달 또는 소스 간 수치 편차가 있어 표에서 제외.

---

## [4-A] 섹터별 뉴스 (0_data.md Finnhub 수집분 기반)

| 섹터 | 종목 | 제목 | 사실 요약 | 출처+태그 |
|------|------|------|-----------|-----------|
| 반도체·AI | NVDA | Nvidia-Backed Cloud Platform Nscale Files For IPO | Nvidia가 투자한 클라우드 플랫폼 Nscale이 IPO를 신청 | Yahoo(Finnhub 수집) · 2026-09-18 17:31 (ET) [P3] |
| 반도체·AI | AVGO | This Little-Known Chip Stock Has Doubled. Wall Street Is Getting Bullish. | 특정 소형 반도체주 주가가 2배 상승, 월가 투자의견 긍정적으로 전환(제목 기준) | Yahoo(Finnhub 수집) · 2026-09-18 13:47 (ET) [P3] |
| 금융 | JPM(태그 기준) | IREN Stock Fair Value Edges Lower As AI Cloud Wins Meet Build Out Risks | IREN의 공정가치 추정치가 하향 조정됨(제목 기준, 상세 미확인) | Yahoo(Finnhub 수집) · 2026-09-18 17:14 (ET) [P3] |
| 헬스케어 | UNH | San Juan Regional Medical Center Teams with Oracle Health to Streamline Patient Flow | 산후안 지역 의료센터가 Oracle Health와 제휴해 환자 흐름 관리 시스템 도입 | Yahoo(Finnhub 수집) · 2026-09-18 13:55 (ET) [P3] |
| 소비재·유통 | AMZN | The ARK Trade Watch: Cathie Wood Cuts Crypto Exposure, Then Reverses Course On CoreWeave | ARK Invest(Cathie Wood)가 암호화폐 익스포저를 축소했다가 CoreWeave 관련 포지션은 다시 확대(제목 기준) | Yahoo(Finnhub 수집) · 2026-09-18 17:38 (ET) [P3] |

비고: 나머지 Finnhub 수집 항목(에너지 배당주 랭킹, 팟캐스트 에피소드 소개 등)은 시장 관련성이 낮거나 단순 홍보성 콘텐츠로 판단되어 제외.

---

## [5] AI 인프라 — 공급 측

| 기업 | 뉴스 제목 | 사실 내용 | 출처일자 | 출처+태그 |
|------|-----------|-----------|----------|-----------|
| NVDA / GOOGL | Nvidia and Google push new power deal for AI data centers | Nvidia, Google, Emerald AI가 "AI Energy Management Alliance"를 결성. AI 데이터센터의 신속한 전력망 연결을 촉진하고, 피크 수요 시 전력 사용을 낮추는 대가로 유연한 데이터센터 운영을 추진한다고 발표 | 2026-09-18 | TechBriefly · Nvidia and Google push new power deal for AI data centers · 2026-09-18 · https://techbriefly.com/2026/09/18/nvidia-and-google-push-new-power-deal-for-ai-data-centers/ [P3] |
| AVGO / OpenAI / MSFT | Broadcom-OpenAI 10GW 커스텀 AI칩 공급 협력 | OpenAI가 Broadcom과 최대 10GW 규모 커스텀 AI칩 배치를 위한 전략적 협력을 발표했으며, 최초 1.3GW(약 180억 달러 규모) 물량의 자금조달 방식을 두고 협상 중. Broadcom은 Microsoft가 해당 칩의 40%를 구매해 자사 데이터센터에 설치 후 OpenAI에 재임대하는 조건에 동의해야 진행한다는 조건을 제시 | 확인 필요(구체 발표일 미확인, 배경 보도) | Yahoo Finance(집계) · Best AI Chip Stocks in 2026 관련 기사 [P3] — 세부 1차 출처(기업 발표) 미확인, N/A 표기 |
| AMD / OpenAI | AMD-OpenAI 복수년 파트너십 | AMD가 OpenAI와 복수년 파트너십을 체결, AMD 프로세서로 AI 데이터센터에 전력 공급. OpenAI는 차세대 모델을 위한 AMD 고성능 GPU에 대한 지속적 접근권을 확보하고, AMD는 신규 MI450 시설(2026년 가동 예정)을 통한 장기 매출원을 확보 | 확인 필요(구체 발표일 미확인, 배경 보도) | Yahoo Finance(집계) [P3] — 세부 1차 출처 미확인 |
| 메모리 반도체(HBM/DRAM) | DDR4 현물가 45달러 돌파 | 2026-09-11 기준 DDR4 1Gx8 3200 현물가가 45.214달러로 45달러선을 상회 | 2026-09-11 | siliconanalysts.com · DRAM Spot Price 2026 [P3] |
| 메모리 반도체(HBM) | HBM3E 36GB 스택 리세일 가격 | 2026-08-31 기준 HBM3E 36GB 스택 리세일가가 약 2,100달러로, 장기 계약가 대비 4~5배 수준(HBM은 공개 현물시장이 없어 업계 추정치임을 명시) | 2026-08-31 | siliconanalysts.com · HBM Pricing & Market Share (2026) [P3] |

---

## [5-A] AI 인프라 — 수요측/하이퍼스케일러 CAPEX

MSFT·AMZN·GOOGL·META의 최근 분기 실적 발표는 2026년 1~2분기(1~4월 및 7월경)에 집중됐고, 다음 정기 실적(3분기)은 아직 발표되지 않은 것으로 확인됨. 3분기 실적 발표 정확한 일자는 검색으로 확정하지 못함(N/A). 따라서 현재는 실적시즌이 아님.

→ 신규 변동 없음 — 직전 가이던스 유지. 참고치(2026년 연간 CAPEX 가이던스, 확정일자 미확인): MSFT 약 1,900억 달러, AMZN 약 2,000억 달러, GOOGL 1,750억~1,850억 달러, META 1,150억~1,350억 달러 — Meta는 "2026년 CAPEX가 2025년 대비 큰 폭으로 증가할 것"이라고 언급 [출처: 업계 집계 기사, 1차 공시 원문 미확인 — P3, 구체 수치는 확인 필요로 참고용]

---

## [6] 시총상위 10 — AI무관 일반 이슈

N/A — 특이 이슈 없음 (실적시즌 아님, 검색된 시총상위 10대 기업 관련 AI무관 주요 이슈 없음)

---

## [7] 기관·대형 자금 수급

| 항목 | 내용 | 출처+태그 |
|------|------|-----------|
| SMH (VanEck 반도체 ETF) | 최근 1개월 순유출 약 -24.8억 달러(-3.5% of AUM) — 단, 데이터 기준 시점이 2026년 8월 말로 추정되어 최신성 확인 필요 | etfedgelab.com · $2.3B Outflow: Rebalancing SMH & SOXX · [P3] — 시점 확인 필요 |
| SOXX (iShares 반도체 ETF) | 최근 1개월 순유입 약 +94.3억 달러(+20.5% of AUM) — 데이터 기준 시점이 2026년 6월 말~7월 초로 추정되어 최신성 확인 필요 | 상동 [P3] — 시점 확인 필요 |
| QQQ | 구체적 최신 자금흐름 수치 확인 불가 | N/A [N/A] |
| 옵션 시장 특이사항 | 2026-09-18은 옵션 만기일(트리플위칭 관련 추정)로 거래량이 평소 대비 급증했다고 보도됨 (구체 계약수·금액 미확인) | Investrade · Mid-Morning Look: September 18, 2026 [P3] |
| 블록딜/대량거래 | N/A — 검색으로 특정 확인된 블록딜 없음 | N/A [N/A] |

---

## [7-A] Insider Trading

- NVDA: 2026-09-09, EVP(Worldwide Field Ops) Nicholas P. Parker에게 제한주식(RSU) 172,507주 부여(Form 4). 2026-09-02, 이사(Director) Tench Coxe가 Rule 10b5-1(c) 매매계획(2026-03-19 수립)에 따라 50만주를 증여(gift) 처리(Form 4). — SEC EDGAR Form 4 필링 [P1]
- AVGO·CRDO·CLS·APLD·VRT·SMCI: N/A — Form 4 신규 공시 확인 안 됨 (검색 범위 내 미확인)

---

## [8] 향후 14일 주요 일정

| 날짜 | 유형 | 항목 | 컨센서스/비고 |
|------|------|------|----------------|
| 2026-10-02 | 경제지표 | 9월 비농업고용지표(Nonfarm Payrolls), 08:30 ET | 컨센서스 수치 확인 필요(N/A) |
| 2026-10-14 | 경제지표 | 9월 CPI 발표 | 컨센서스 확인 필요(N/A) |
| 2026-10-15 | 경제지표 | 9월 PPI 발표, 08:30 ET | 컨센서스 확인 필요(N/A) |
| 2026-10-27~28 | 연준 | FOMC 정례회의(이틀 일정), 10-28 14:00 ET 기자회견 | 정책금리 결정 예정 |

비고: 검색 범위(향후 14일, 2026-09-19~2026-10-03) 내에는 위 일정 중 10월 2일 고용지표만 해당하며, CPI·PPI·FOMC는 14일 이후 일정이나 참고용으로 병기함. 기업 실적(Investor Day 등) 일정은 검색으로 확정된 항목 없음 — N/A.

---

## [9] 오늘의 사실 목록 (순위 없음)

- [1] S&P500 7,650.50 (+0.17%), 나스닥종합 26,522.55 (+0.39%), 다우 51,682.64 (-0.18%, -95.40pt), 러셀2000 +0.39% · Reuters/Yahoo Finance [P2]
- [1] SOX 정확한 종가 확인 불가 · N/A
- [1] Brent 원유 103.87달러/배럴, -0.9% · CNBC [P2]
- [1] 10년물 국채금리 주중 5% 상회 후 금요일 5.006%까지 반등 · Yahoo Finance(Reuters) [P2]
- [1-A] ES선물 7,725(+1.11%), NQ선물 29,955(+1.73%), YM선물 52,138(+0.64%), RTY선물 2,880.5(+0.16%) · CBOE/CME(Yahoo chart API) [P1]
- [1-A] VIX 14.81(-4.08%), VIX9D 12.27(-8.36%), VIX3M 18.24(-1.67%), VVIX 87.38(-0.39%), SKEW 148.1(+1.65%) · CBOE/CME(Yahoo chart API) [P1]
- [1-A] VIX3M/VIX 1.232(콘탱고), VIX/VIX9D 1.207(콘탱고) · CBOE/CME(Yahoo chart API) [P1]
- [1-A] SPX P/C 거래량비 1.134, QQQ P/C 거래량비 1.064 · CBOE/CME(Yahoo chart API) [P1]
- [2] FOMC가 2026-09-16 기준금리 25bp 인상, 3.75~4.00%로 상향(2023년 7월 이후 첫 인상) · CNBC [P2]
- [2] 점도표: 참가자 18명 중 16명 연내 추가 1회 인상 전망, 4명 2회 인상 전망, 연말 중위 전망 4.1% · CNBC [P2]
- [2] Warsh 의장 "This summer's inflation readings do not tell me that underlying trends have meaningfully improved" 발언 · CNBC/연준 기자회견 원문 [P2/P1]
- [2] 10년물 4.94~5.006%, 2년물 4.73~4.737% · Trading Economics/Yahoo Finance [P2]
- [2] CME FedWatch 10/28 FOMC 추가 인상 확률 소스 간 55.1%~95%로 상이 · 확인 필요 [P3]
- [3] 2026-09-18 CPI·PPI·GDP·Payroll·실업률 발표 없음. 신규 실업수당청구·시카고연은지수·플래시PMI·LEI 예상치만 확인, 실제 발표치 N/A · Kiplinger [P3]
- [4] Xenon Pharmaceuticals(XENE) 프리마켓 -29%, 뇌전증 치료제 3상 신규 환자 등록 중단 발표 · Benzinga 집계 [P3]
- [4] Robinhood(HOOD) 프리마켓 +5.94%, SEC 5년 조건부 혁신 예외 부여 · Benzinga 집계 [P3]
- [4] Nucor(NUE) 프리마켓 -5.33%, 3분기 이익 가이던스 월가 예상 하회 · Benzinga 집계 [P3]
- [4] Netflix(NFLX) 약 -5%, Wells Fargo Underweight 하향 · Yahoo Finance 집계 [P3]
- [4-A] Nvidia 투자 클라우드 플랫폼 Nscale IPO 신청 · Yahoo(Finnhub) [P3]
- [4-A] IREN 공정가치 추정치 하향 조정(제목 기준) · Yahoo(Finnhub) [P3]
- [5] NVDA·GOOGL·Emerald AI, AI Energy Management Alliance 결성 발표(2026-09-18) · TechBriefly [P3]
- [5] Broadcom-OpenAI 최대 10GW 커스텀 AI칩 공급 협력, 최초 1.3GW(180억달러) 자금조달 관련 MSFT 40% 구매 조건 협상 중(구체 발표일 미확인) · Yahoo Finance 집계 [P3]
- [5] AMD-OpenAI 복수년 파트너십, MI450 시설 2026년 가동 예정(구체 발표일 미확인) · Yahoo Finance 집계 [P3]
- [5] DDR4 1Gx8 3200 현물가 45.214달러(2026-09-11 기준) · siliconanalysts.com [P3]
- [5] HBM3E 36GB 스택 리세일가 약 2,100달러(2026-08-31 기준, 업계 추정치) · siliconanalysts.com [P3]
- [5-A] MSFT·AMZN·GOOGL·META 3분기 실적 미발표, 현재 실적시즌 아님 → 직전 가이던스 유지 · N/A(정확 일자 미확인) [N/A]
- [6] 시총상위 10 AI무관 특이 이슈 N/A
- [7] SOXX 최근 1개월 순유입 +94.3억달러(시점 확인 필요), SMH 순유출 -24.8억달러(시점 확인 필요) · etfedgelab.com [P3]
- [7] 2026-09-18 옵션 만기 관련 거래량 급증 보도(구체 수치 미확인) · Investrade [P3]
- [7-A] NVDA Form 4: EVP Nicholas P. Parker RSU 172,507주 부여(09-09), Director Tench Coxe 50만주 증여 처리(09-02) · SEC EDGAR [P1]
- [7-A] AVGO·CRDO·CLS·APLD·VRT·SMCI Form 4 신규 공시 확인 안 됨 · N/A
- [8] 10/2 비농업고용지표, 10/14 CPI, 10/15 PPI, 10/27~28 FOMC 정례회의 · 각 경제캘린더 소스 [P3]
