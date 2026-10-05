# 미국 시장 데일리 수집 결과 (Collect)
# 기준일: 2026-10-05 (월) · 미국 정규장 종가 기준 · 실행모드: [데일리]
# 생성시각(KST): 2026-10-06 06:40

---

## [1] 미국 주요 지수

| 항목 | 종가/수치 | 등락률 | (보도된) 원인 | 출처+태그 |
|------|-----------|--------|----------------|-----------|
| S&P500 | 7,773.99 | +0.66% (+51.27pt) | Nvidia의 추가 바이백 승인(총 235억 달러 규모)을 계기로 AI·반도체 관련 대형 기술주 중심 랠리 | TheStreet · "Stock Market Today (Oct. 5, 2026)" · 2026-10-05 · https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-oct-05-2026 [P2] |
| NASDAQ Composite | 27,477.31 | +1.05% (+286.45pt) | Nvidia 신고가 경신 및 대규모 바이백 발표, 반도체 강세가 나스닥100 신고가를 주도 | Yahoo Finance · "Stock market today: Nasdaq, Nvidia post record highs as tech strength outshines bond weakness" · 2026-10-05 · https://finance.yahoo.com/markets/live/stock-market-today-monday-october-5-dow-sp-500-nasdaq-081220790.html [P2] |
| Dow Jones Industrial Average | 51,267.90 | +0.18% (+90.94pt) | N/A — 다우 자체에 대한 별도 원인 보도 확인되지 않음 | TheStreet (상동) · 2026-10-05 [P2] |
| Russell 2000 | N/A | N/A | N/A — 출처 간 수치 불일치(2,853 / 2,833 / 2,932 / 2,847 등)로 단일 종가 확정 불가, 추정치로 메우지 않음 | 확인 필요 [N/A] |
| SOX (PHLX Semiconductor) | N/A | N/A | N/A — 10/5 종가 검색 실패(10/2 종가 13,136.67만 확인됨, 날짜 불일치) | 확인 필요 [N/A] |
| Brent 원유 | 101.31 (USD/bbl) | -0.92% | N/A — 하락에 대한 명시적 보도 없음 | TradingEconomics 집계 · 2026-10-05 [P3] |

---

## [1-A] 선물·변동성 구조 (`0_data.md` 원본 그대로 인용)

**선물 (한국 아침 시점)**

| 항목 | 현재가 | 전일 대비 | 직전 종가 | 기준시각(ET) | 출처+태그 |
|------|--------|-----------|-----------|--------------|-----------|
| S&P500 선물 (ES) | 7,830 | +0.68% | 7,777.25 | 2026-10-05 16:59 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 나스닥100 선물 (NQ) | 31,339.5 | +0.89% | 31,061.75 | 2026-10-05 16:59 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 다우 선물 (YM) | 51,598 | +0.24% | 51,477 | 2026-10-05 16:59 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 러셀2000 선물 (RTY) | 2,868.5 | +0.62% | 2,850.9 | 2026-10-05 16:59 | CBOE / CME (Yahoo chart API 자동수집) [P1] |

**변동성 구조**

| 항목 | 수치 | 전일 대비 | 출처+태그 |
|------|------|-----------|-----------|
| VIX (30일) | 15.52 | +1.37% | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| VIX9D (9일) | 12.85 | +6.55% | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| VIX3M (3개월) | 18 | -0.06% | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| VVIX | 85.46 | -1.79% | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| SKEW | 143.04 | -1.27% | CBOE / CME (Yahoo chart API 자동수집) [P1] |

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.160 | 콘탱고 |
| VIX / VIX9D | 1.208 | 콘탱고 |

**Put/Call 비율 (CBOE 옵션 체인 집계)**

| 대상 | P/C(거래량) | P/C(미결제약정) | 콜 거래량 | 풋 거래량 | 출처+태그 |
|------|-------------|------------------|-----------|-----------|-----------|
| S&P500 지수옵션 (SPX) | 1.034 | 1.419 | 2,574,027 | 2,661,255 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 나스닥100 ETF 옵션 (QQQ) | 1.570 | 1.440 | 3,078,886 | 4,835,158 | CBOE / CME (Yahoo chart API 자동수집) [P1] |

참고: 매크로(10년물 국채선물 ZN=F 104.25 -0.10%, 금 GC=F 4,167.6 +0.13%, WTI CL=F 89.3 -1.99%, DXY 102.12 +0.19%)는 `0_data.md` 원본 수치임 — CBOE / CME (Yahoo chart API 자동수집) [P1].

---

## [2] 금리 / 연준

| 항목 | 사실 내용(발언·수치) | 출처+태그 |
|------|----------------------|-----------|
| Fed 발언 (10/4~10/5 구간) | N/A — 해당 구간 내 검증 가능한 발언 인용문 확인되지 않음. (시카고 Fed 총재 Goolsbee가 10/4 시카고 Fed 금융시장그룹 가을 컨퍼런스에서 Raghuram Rajan과 대담을 진행했으나 인용 가능한 발언 텍스트 미확인) | 확인 필요 [N/A] |
| 미 10년물 국채수익률 | 5.307% (전일대비 +3bp), 장중 한때 5.349%까지 상승 — 2002년 4월 이후 최고치 | CNBC · "10-year Treasury yield rises to fresh 2002 high to start the week" · 2026-10-05 · https://www.cnbc.com/2026/10/05/treasury-yields-bonds-fed-rates.html [P2] |
| 미 2년물 국채수익률 | N/A — 10/5 종가 단일 신뢰 출처로 확정 불가 (가장 최근 확인된 값은 10/2 기준 4.839%) | 확인 필요 [N/A] |
| 10Y-2Y 스프레드 | N/A — 2년물 10/5 종가 미확인으로 산출 불가 | 확인 필요 [N/A] |
| CME FedWatch (10/28 FOMC) | 금리 동결(유지) 확률 약 82% (페드펀드 선물 가격 기반) | CNBC · 2026-10-05 [P2] |

---

## [3] 주요 경제지표

| 지표 | 발표시각(ET·KST) | 발표치 | 예상치 | 이전치 | 서프라이즈(발표치−예상치) | 출처 |
|------|------------------|--------|--------|--------|----------------------------|------|
| ISM 서비스업 PMI (9월) | 2026-10-05 10:00 ET / 10-05 23:00 KST | 54.9 | N/A — 출처 간 불일치(55.0~55.7)로 확정 불가 | 55.4 | N/A — 예상치 미확정으로 산출 불가 | ISM · "Services PMI® at 54.9%; September 2026 ISM® Services PMI® Report" · 2026-10-05 · https://www.prnewswire.com/news-releases/services-pmi-at-54-9-september-2026-ism-services-pmi-report-302898421.html [P1] |

그 외 CPI·PPI·GDP·비농업고용·실업률·실업수당청구·소매판매·ISM 제조업은 10/5~10/6(ET) 구간 내 발표 없음(해당 지표들의 가장 근접한 발표일은 이 구간 밖: 고용지표 10/2, 실업수당청구 10/1, ISM 제조업 10/1, PPI 10/15 예정).

참고: 2026년 10월 기준 미 연방정부 셧다운은 발생하지 않음(2026-09-02 임시예산안으로 2026-12-11까지 자금 지원 확정) — 지표 지연의 원인 아님. 출처: govtschemes.org, 2026-10 [P3]

---

## [4] 특징 종목

| 종목 | 티커 | 등락률 | 거래량 | (보도된) 핵심 사실 | 출처+태그 |
|------|------|--------|--------|---------------------|-----------|
| RXO | RXO | +23% | N/A | C.H. Robinson이 RXO를 현금 57%/주식 43% 구조로 총 58억 달러에 인수하는 합병계약 체결(주당 현금 17.25달러 + C.H. Robinson 주식 0.0856주, 전일 종가 대비 29% 프리미엄) | CNBC · "C.H. Robinson to buy freight broker RXO" · 2026-10-05 · https://www.cnbc.com/2026/10/05/ch-robinson-buy-freight-broker-rxo.html [P2] |
| C.H. Robinson | CHRW | -10% | N/A | 위 RXO 인수 발표 직후 급락 | Bloomberg · "CH Robinson to Acquire RXO in $5.8 Billion Deal" · 2026-10-05 [P2] |
| PTC | PTC | +34.76% | N/A | Schneider Electric이 PTC를 주당 205달러(전일 종가 대비 42.3% 프리미엄), 총 226억 달러 전액 현금으로 인수하는 definitive agreement 체결 | Axios · "Schneider Electric buying PTC for $22.6 billion" · 2026-10-05 · https://www.axios.com/2026/10/05/schneider-electric-ptc [P2] |
| XP Inc. | XP | +34% | N/A | N/A — 보도에 구체적 촉발 요인 명시 없음 | Seeking Alpha · "Biggest stock movers Monday" · 2026-10-05 [P3] |
| Leslie's | LESL | -23% 이상(프리마켓) | N/A | 9/30 Chapter 11(파산보호) 신청, 나스닥 상장폐지 절차 진행 중(10/6 거래정지 예정), 기존 보통주 전액 무상소각 예정 | Investing.com · "Why is Leslie's stock collapsing over 20% today?" · 2026-10-05 [P3] |
| Itaú Unibanco | ITUB | +17.46% | N/A | 브라질 대선 1차 투표에서 우파 성향 후보가 여론조사 대비 선전, 브라질 관련주 동반 강세 | 247wallst.com · 2026-10-05 [P3] |
| Petrobras | PBR / PBR.A | +11% 내외 | N/A | 위와 동일한 브라질 대선 결과에 따른 동반 급등 | 247wallst.com · 2026-10-05 [P3] |
| Penguin Solutions | PENG | +11.6% | N/A | 10/6 예정 4분기 실적발표를 앞두고 AI 인프라 관련 수주잔고 기대 확산 | Quiverquant · 2026-10-05 [P3] |
| SpaceX(2차시장) | 비상장 | +7.63% | N/A | N/A — 구체적 촉발 요인 미확인, 확인 필요 | TheStreet · 2026-10-05 [P2] |
| Moderna | MRNA | +6.95% | N/A | N/A — 구체적 촉발 요인 미확인, 확인 필요 | TheStreet · 2026-10-05 [P2] |

---

## [4-A] 섹터별 뉴스 ([4]·[5]·[6] 중복 제외, `0_data.md` Finnhub 수집분 기반)

| 섹터 | 종목 | 사실 내용(무슨 일이) | 발행시각(ET) | 출처+태그 |
|------|------|----------------------|--------------|-----------|
| 금융 | WFC | Morgan Stanley가 마진 압박 완화를 전망하는 노트를 내면서 Wells Fargo 주가 상승 | 2026-10-05 11:53 | Yahoo (Finnhub 수집) [P3] |
| 금융 | C | Citigroup이 일본·UAE에서 토큰화 사업을 확대 | 2026-10-05 11:08 | Yahoo (Finnhub 수집) [P3] |
| 금융/기술 | SNPS | Synopsys가 10억 달러 규모 가속주식환매(ASR) 계약 체결 | 2026-10-05 09:00 | Yahoo (Finnhub 수집) [P3] |
| 헬스케어 | UNH | UnitedHealth가 비용 압박을 이유로 2027년 일부 Medicare Advantage 플랜에서 철수 | 2026-10-05 10:48 | Yahoo (Finnhub 수집) [P3] |
| 헬스케어 | UNH | Elizabeth Warren·Josh Hawley 상원의원이 보험사들의 '0달러 지급' 클레임 관행에 대한 조사를 개시(State Farm·Allstate 포함) | 2026-10-05 14:01 | Yahoo (Finnhub 수집) [P3] |
| 에너지 | XOM | Empower가 前 ExxonMobil 임원 Andrew Sinclair를 Chief Public and Government Affairs Officer로 선임 | 2026-10-05 11:33 | Yahoo (Finnhub 수집) [P3] |

---

## [5] AI 인프라 — 공급 측

| 기업 | 뉴스 제목 | 사실 내용(무슨 일이) | 출처일자 | 출처+태그 |
|------|-----------|----------------------|----------|-----------|
| AVGO | Broadcom's Anthropic 대출 계약 | Anthropic에 최대 420억 달러 대출 계약 체결(지분 전환 옵션 포함). Broadcom은 칩 공급사·장비 리스사·대출기관 역할을 동시 수행. 회사는 AI 매출 전망으로 FY2027 약 1,150억 달러, FY2028 약 2,300억 달러 제시 | 2026-10-04 | 24/7 Wall St · https://247wallst.com/investing/2026/10/04/broadcoms-massive-42-billion-chip-buying-deal-with-anthropic-raises-circular-financing-worries/ [P3] |
| AMD | World Labs 인수 | Fei-Fei Li가 창업한 World Labs를 82억 달러에 인수하는 계약 체결(2026년말 종료 목표, 규제승인 조건). Fei-Fei Li는 AMD 수석부사장 겸 최고과학책임자로 합류 예정 | 2026-10-05 | ad-hoc-news.de · https://ad-hoc-news.de/boerse/news/corporate-news/amd-agrees-to-buy-world-labs-amd-stock-sits-0-13-percent-below-its-high/70231968 [P3] |
| TSM | Terafab 협의 확인 | 일론 머스크가 TSMC와의 "Terafab" 초기 협의를 공식 확인(텍사스 반도체 생산 관련 협력 가능성, 최종 합의 아님) | 2026-10-05 | Yahoo Finance · "TSMC stock hits all-time high after Elon Musk confirms early Terafab talks" [P2] |
| TSM | 파운드리 가격 인상 | TSMC가 고객사(Nvidia·Apple·AMD 포함)에 3~7nm 공정 웨이퍼 가격을 5~10% 인상 통보. 2027년 1분기 2nm 공정 대상 추가 3~6% 인상 검토 중 | 2026-10-05 | Digitimes/Yahoo Finance · https://finance.yahoo.com/markets/stocks/articles/tsm-stock-jumps-overnight-reports-052844936.html [P3] |
| SMCI | Vera Rubin 서버랙 출하 시작 | NVIDIA Vera Rubin NVL72 서버랙 출하 시작 발표, FY26 4분기 신규 수주 600억 달러 초과 확보 | 2026-10-04 | Foreign Policy Journal · https://www.foreignpolicyjournal.com/2026/10/04/super-micro-computer-nasdaq-smci-stock-price-jumps-4-after-beginning-shipments-of-nvidia-vera-rubin-ai-server-racks/ [P3] |
| VRT | BMO 커버리지 개시 | BMO Capital이 신규 커버리지 개시(목표가 329달러). 수주잔고 150억 달러, FY2026 매출 가이던스 140억 달러(+37%)로 상향 제시 | 2026-10-04 | Investing.com [P3] |
| CRDO | 주가 하락 | 10/5 주가 3.4% 하락. 회사측 공식 발표 없이 임원들의 사전예정 10b5-1 매도 계획에 따른 내부자 매도가 원인으로 보도됨(최근 1년 내부자 매도 총 4.623억 달러) | 2026-10-05 | Quiverquant [P3] |
| 광모듈(옵틱) | Lumentum/Coherent 공급 상황 | Lumentum의 200G 레이저가 완전 매진 상태이며 평균판매가가 전세대 대비 약 2배로 보도. NVIDIA가 Coherent·Lumentum 각각에 20억 달러 투자 및 다년 구매 계약 체결 | 2026-10-01(Deutsche Bank 노트 인용) | FinanceFeeds [P3] |
| HBM/DRAM | 현물가 급등 | HBM3E 36GB 스팟가 약 2,100달러로 장기계약가(300~400달러) 대비 4~5배 수준(9월 기준). 2026년 HBM 생산 전량 선판매 완료, 신규 주문 거절 상태 | 2026년 9월 기준 | siliconanalysts.com/Digitimes [P3] |
| APLD | 데이터센터 증설 | Polaris Forge 1 캠퍼스 25MW 데이터홀 3개 추가 완공으로 가동용량 250MW 도달, Building 2 2단계 가동으로 75MW 추가. 완공 시 총 400MW 규모(완전 임대 완료) | 2026-10-02 | Applied Digital IR · https://ir.applieddigital.com/news-events/press-releases/detail/161/ [P1] |

ANET·CLS·NVDA(제품/수주 관련)는 해당 기간 신규 공급망 뉴스 확인되지 않음.

---

## [5-A] AI 인프라 — 수요 측 / 하이퍼스케일러 CAPEX

신규 변동 없음 — 직전 가이던스 유지. MSFT·AMZN·GOOGL·META의 다음 실적발표는 모두 10/20 이후(10/28~29 전후 추정, 공식 미확정)로 이번 수집 구간 밖.

---

## [6] 시총 상위 10 — AI 무관 일반 이슈

| 기업 | 사실 내용 | 출처일자 | 출처+태그 |
|------|-----------|----------|-----------|
| MSFT | Melius Research가 목표가를 665달러로 상향(Buy). Scotiabank도 목표가를 510→615달러로 상향. Microsoft와 SpaceX가 올여름 컴퓨팅 용량 임대 관련 논의를 진행했다고 The Information 보도(현재 진행 상태 불명) | 2026-10-05 | fxleaders.com/9to5mac 등 [P3] |
| NVDA | 150억 달러 규모 바이백 추가 승인(기존 잔여분 포함 총 235억 달러 규모, 2028 회계연도까지 완료 목표). 전직 Groq 엔지니어들이 Nvidia-Groq 200억 달러 딜 관련 델라웨어 법원에 주주 소송 제기(10/2 제소) | 2026-10-05 | Reuters/CNBC · https://www.cnbc.com/2026/10/05/nvidia-groq-deal-stockholder-lawsuit.html [P2] |
| AAPL | Apple가 10/13 행사에서 스크린 탑재 스마트홈 허브, 신형 HomePod mini, 신형 Apple TV를 공개할 예정이라고 Bloomberg(Mark Gurman) 보도. 일부 iPhone 18 Pro Max 미국 판매분에서 연결성 문제 발생. Mac의 'Full Disk Access' 권한 통제 강화 발표 | 2026-10-04~05 | Bloomberg/9to5mac [P2] |
| AMZN | Amazon Prime Big Deal Days(10월 세일) 진행 중, 최대 80% 할인 | 2026-10-05 | NBC News [P3] |
| GOOGL | 폴란드 경쟁당국(UOKiK)이 Google을 퍼블리셔 콘텐츠 대가 협상에서 지배적 지위 남용 혐의로 기소(최대 벌금 매출의 10%). 미 연방판사는 Chegg·Penske Media가 제기한 반독점 소송 2건에 대한 Google의 기각 신청을 인용 | 2026-10-05 | Yahoo Finance/MarketScreener [P2] |
| META | FTC가 2025년 11월 반독점 소송 패소(Meta 승소, Instagram·WhatsApp 분리매각 불필요 판결) 후 2026-01-20 항소장을 제출해 항소심 진행 중 — 날짜상 이번 수집 구간 밖의 진행 사안이므로 참고용 | 확인 필요(기존 진행 사안) | CBS News/JD Supra [P2] |
| AVGO | AI 인프라 관련 사안([5] 참조) 외 일반 이슈 신규 변동 없음 | — | — |
| BRK.B | Berkshire Hathaway가 1년간 중단 이후 자사주 매입 재개(올해 총 매입액 100억 달러 상회 가능성 분석). Warren Buffett은 2025-12-31 CEO직, 이후 회장직에서도 물러났으며 아들 Howard Buffett이 회장직 승계 | 2026-10-05 | Yahoo Finance/247wallst.com [P3] |
| TSLA | 2026년 3분기 차량 인도량 486,532대 발표(시장 예상치 상회). JPMorgan은 인도량 호조에도 목표가를 445→415달러로 하향(Neutral 유지) | 2026-10-05 | 다수 매체 [P2] |
| TSM | 3분기 실적발표 2026-10-15 예정. 가이던스: 매출 446억~458억 달러, 매출총이익률 65~67%, 영업이익률 56~58% | 2026-10-05 | Investing.com/TipRanks [P3] |

---

## [7] 기관·대형 자금 수급

| 항목 | 종목 | 사실 내용 | 규모(수치) | 출처+태그 |
|------|------|-----------|------------|-----------|
| ETF 자금흐름 | SMH/SOXX/QQQ | N/A — 출처 간 날짜 라벨이 불명확해 10/5 당일 단일 수치로 확정 불가(확인 필요) | N/A | 확인 필요 [N/A] |
| 옵션 이상거래 | SPY/QQQ 등 | 10/5 기준 이상거래(unusual option volume) 종목 86개 포착, 스윕/블록 주문 다수 — 개별 종목·금액·방향 구체 수치 미확인 | N/A | MarketChameleon/TipRanks [P3] |

---

## [7-A] Insider Trading (SEC Form 4)

N/A — Form 4 신규 공시 없음 (2026-10-03~10-05 구간, NVDA·AVGO·CRDO·CLS·APLD·VRT·SMCI 대상 확인 결과).

---

## [8] 향후 14일 주요 일정 (2026-10-06 ~ 2026-10-20)

**경제 일정**

| 날짜 | 시각(ET·KST) | 이벤트 | 컨센서스 | 이전치 | 출처 |
|------|--------------|--------|----------|--------|------|
| 10/7 (수) | 14:00 ET / 10/8 03:00 KST | FOMC 9/15~16 회의 의사록 공개 | — | — | fedratecalc.com [P3] |
| 10/14 (수) | 08:30 ET | CPI (소비자물가지수, 9월) | 확인 필요 | 확인 필요 | fedratecalc.com [P3] |
| 10/15 (목) | 08:30 ET | PPI (생산자물가지수, 9월) | 확인 필요 | 확인 필요 | fedratecalc.com [P3] |

참고: 10월 FOMC 정례회의(10/27~28, 금리결정 10/28 14:00 ET)는 이번 14일 창(10/20까지) 밖.

**기업 일정**

| 날짜 | 기업 | 이벤트 | 컨센서스 EPS | 컨센서스 매출 | 출처 |
|------|------|--------|--------------|---------------|------|
| 10/5~10/14 | TSM | 침묵기간(Quiet Period) | — | — | TSMC IR [P1] |
| 10/15 (목) | TSM | 3분기 실적발표 | 4.45달러(전년동기 +52.4%) | 456.2억 달러(+37.8%) | Investing.com/TipRanks [P3] |

MSFT·META·GOOGL·AAPL·AMZN·AVGO·TSLA의 다음 실적발표는 모두 10/20 이후로, 이번 14일 창 내 빅테크 실적발표 없음.

---

## [9] 오늘의 사실 목록 (순위 없음)

```
[1] S&P500 7,773.99 (+0.66%), NASDAQ 27,477.31 (+1.05%), Dow 51,267.90 (+0.18%) · Nvidia 바이백 확대가 랠리 배경으로 보도 · [P2]
[1] Russell2000·SOX 10/5 종가 출처 불일치로 확인 불가 · [N/A]
[1] Brent 101.31 (-0.92%) · [P3]
[1-A] VIX 15.52(+1.37%), VIX9D 12.85(+6.55%) · VIX3M/VIX 1.160·VIX/VIX9D 1.208 (콘탱고) · [P1]
[1-A] SPX P/C(거래량) 1.034 · QQQ P/C(거래량) 1.570 · [P1]
[2] 미 10년물 국채수익률 5.307%(+3bp), 장중 5.349% (2002년 4월 이후 최고) · [P2]
[2] CME FedWatch 10/28 FOMC 동결 확률 약 82% · [P2]
[2] 2년물 국채수익률·10Y-2Y 스프레드 10/5 확정치 확인 불가 · [N/A]
[3] ISM 서비스업 PMI(9월) 54.9, 전월 55.4 · [P1]
[3] 10/5~10/6 구간 CPI·PPI·GDP·고용지표 발표 없음 · [N/A]
[4] RXO +23%, C.H. Robinson이 58억 달러에 인수 합병계약 체결 · [P2]
[4] PTC +34.76%, Schneider Electric이 226억 달러 전액현금 인수 · [P2]
[4] Leslie's 프리마켓 -23%+, Chapter 11 신청 후 상장폐지 절차 · [P3]
[4] Itaú Unibanco +17.46%·Petrobras +11%, 브라질 대선 1차 투표 결과 · [P3]
[4-A] UnitedHealth, 2027년 일부 Medicare Advantage 플랜 철수 · [P3]
[4-A] Warren·Hawley 상원의원, 보험사 '0달러 지급' 클레임 관행 조사 개시 · [P3]
[5] Broadcom, Anthropic에 최대 420억 달러 대출 계약 체결 · [P3]
[5] AMD, World Labs 82억 달러 인수계약(Fei-Fei Li 합류) · [P3]
[5] TSMC, 머스크와 Terafab 초기 협의 확인 + 웨이퍼 가격 5~10% 인상 통보 · [P3]
[5] Super Micro, NVIDIA Vera Rubin NVL72 서버랙 출하 시작, FY26 4Q 신규수주 600억달러 초과 · [P3]
[5] HBM3E 36GB 스팟가 약 2,100달러(장기계약가 대비 4~5배), 2026년 생산 전량 선판매 완료 · [P3]
[5] Applied Digital, Polaris Forge 1 가동용량 250MW 도달 · [P1]
[5-A] 하이퍼스케일러 CAPEX 가이던스 변동 없음(10/20 이후 실적발표 전까지 유지) · [P3]
[6] Nvidia, 150억 달러 바이백 추가 승인(총 235억 달러) · [P2]
[6] Nvidia-Groq 200억 달러 딜 관련 델라웨어 법원 주주소송 제기 · [P2]
[6] Apple, 10/13 행사에서 스마트홈 허브·HomePod mini·Apple TV 공개 예정(Bloomberg 보도) · [P2]
[6] Google, 폴란드 경쟁당국으로부터 지배적지위 남용 혐의 기소 · [P2]
[6] Tesla, 3분기 인도량 486,532대(예상 상회), JPMorgan은 목표가 445→415달러 하향 · [P2]
[6] Berkshire Hathaway, 1년 중단 후 자사주 매입 재개, Howard Buffett 회장직 승계 · [P3]
[7] ETF 자금흐름(SMH/SOXX/QQQ) 10/5 확정 수치 확인 불가 · [N/A]
[7] 옵션 이상거래 86개 종목 포착, 세부 수치 미확인 · [P3]
[7-A] 대상 7개 종목 Form 4 신규 공시 없음 · [N/A]
[8] FOMC 9월 의사록 공개 10/7, CPI 10/14, PPI 10/15 · [P3]
[8] TSMC 3분기 실적발표 10/15, 가이던스 매출 446억~458억 달러 · [P3]
[8] 빅테크(MSFT·AAPL·AMZN·GOOGL·META·AVGO·TSLA) 실적발표 전부 10/20 이후 · [P3]
```
