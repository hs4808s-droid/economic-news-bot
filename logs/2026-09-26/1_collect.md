# 미국 시장 데일리 수집 결과 (Collect)
# 기준일: 2026-09-25 (금요일) · 미국 정규장 종가 기준 · 실행모드: 데일리
# 생성시각(KST): 2026-09-26 09:40

## [1] 미국 주요 지수 〔데일리〕

| 항목 | 종가/수치 | 등락률 | (보도된) 원인 | 출처+태그 |
|------|-----------|--------|----------------|-----------|
| S&P500 | 7,743.41 | +0.51% | 국채금리 급등이 진정되고 유가가 하락하며 한 주간의 변동성 장세를 마무리, 주간 기준 상승 마감 | CNBC · "Dow jumps more than 470 points Friday; stocks notch winning week despite Treasury yield surge" · 2026-09-25 (ET) · https://www.cnbc.com/2026/09/24/stock-market-today-live-updates.html [P2] |
| NASDAQ Composite | 27,068.72 | +0.5% | 상동 (국채금리 진정 + 유가 하락) | CNBC · 상동 · 2026-09-25 (ET) [P2] |
| Dow Jones | 51,828.62 (+478.64pt) | +0.93% | 상동. 3주 연속 주간 하락세 마감(스냅) | CNBC · 상동 · 2026-09-25 (ET) [P2] |
| Russell 2000 | 2,835.57 (-3.09pt) | -0.11% | 개별 보도 원인 명시 없음 | Yahoo Finance · "US stocks close lower led by declines in the small-cap Russell 2000 and Nasdaq indices" 참조 데이터 · 2026-09-25 (ET) [P3] |
| SOX (필라델피아 반도체지수) | N/A | N/A | 확인 필요 — 검색으로 2026-09-25 종가 확정 실패 | [N/A] |
| Brent (리스크 참고) | $104.32~105 부근 | -2.1%~-2.7%대 (매체별 차이) | 이란-미국 호르무즈 해협 재개 협상 기대감으로 유가 하락 | CNBC · "Dow jumps more than 470 points Friday..." · 2026-09-25 (ET) https://www.cnbc.com/2026/09/24/stock-market-today-live-updates.html [P2] |

> 참고: 검색 중 9/24(목)자 마감치(S&P 7,704.13/-0.02%, Dow 51,349.98/-0.31%, WTI 94.61)가 9/25자로 오인 표기된 매체가 있었으나, `0_data.md`의 WTI 직전종가(94.61→92.44, -2.29%)와 대조한 결과 이는 9/24(목) 종가였음을 확인. 본 표는 9/25(금) 종가로 교차검증된 수치만 채택.

## [1-A] 선물·변동성 구조 〔검색 금지 — 0_data.md에서 그대로 옮김〕

### 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | ES=F | 7,805.75 | +0.50% | 7,767 | 2026-09-25 16:59 |
| 나스닥100 선물 (NQ) | NQ=F | 30,921.75 | +0.50% | 30,766.75 | 2026-09-25 17:00 |
| 다우 선물 (YM) | YM=F | 52,180 | +0.90% | 51,717 | 2026-09-25 16:59 |
| 러셀2000 선물 (RTY) | RTY=F | 2,859.9 | +0.11% | 2,856.8 | 2026-09-25 16:59 |

### 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | ^VIX | 14.87 | -5.11% | 15.67 | 2026-09-25 16:15 |
| VIX9D (9일) | ^VIX9D | 12.76 | -9.57% | 14.11 | 2026-09-25 16:15 |
| VIX3M (3개월) | ^VIX3M | 17.93 | -2.71% | 18.43 | 2026-09-25 16:15 |
| VVIX (VIX의 변동성) | ^VVIX | 87.84 | -3.01% | 90.57 | 2026-09-25 16:15 |
| SKEW (테일리스크) | ^SKEW | 144.91 | -0.77% | 146.04 | 2026-09-25 17:00 |

### 매크로 (참고: DXY·금·WTI)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 미 10년 국채선물 | ZN=F | 104.97 | +0.10% | 104.86 | 2026-09-25 16:59 |
| 금 | GC=F | 4,320.5 | +0.52% | 4,298 | 2026-09-25 16:59 |
| WTI | CL=F | 92.44 | -2.29% | 94.61 | 2026-09-25 16:59 |
| 달러지수 (DXY) | DX-Y.NYB | 101.04 | -0.25% | 101.29 | 2026-09-25 16:59 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.206 | 콘탱고 |
| VIX / VIX9D | 1.165 | 콘탱고 |

### Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.062 | 1.414 | 2,413,921 | 2,563,535 | 29,858 |
| 나스닥100 ETF 옵션 (QQQ) | 0.984 | 1.405 | 4,386,939 | 4,317,399 | 11,710 |

출처: CBOE / CME (Yahoo chart API 자동수집) [P1]

## [2] 금리 / 연준 〔데일리〕

| 항목 | 사실 내용(발언·수치) | 출처+태그 |
|------|----------------------|-----------|
| 10년물 국채수익률 | 2026-09-25(금) 종가 기준 약 5.163%. 직전 3거래일간 23bp 급등 후 이날 소폭 진정 | CNBC · "10-year Treasury yield is little changed to end a volatile week" · 2026-09-25 (ET) · https://www.cnbc.com/2026/09/25/treasury-yields-bonds-debt.html [P2] |
| 2년물 국채수익률 | 2026-09-25(금) 종가 기준 약 4.856% (전일 대비 3bp 이상 하락) | CNBC · 상동 · 2026-09-25 (ET) [P2] |
| 10Y-2Y 스프레드 | 산술값 약 +0.307%p (5.163% - 4.856%) | 자체 산출 (CNBC 수치 기반) [P2] |
| 30년물 국채수익률 (참고, 최근 고점) | 이번 주 초 5.501%까지 상승, 2004년 6월 이후 최고 | Yahoo Finance · "Stock Market News for Sep 25, 2026" · 2026-09-25 (ET) https://sg.finance.yahoo.com/news/stock-market-news-sep-25-122000223.html [P3] |
| CME FedWatch (10/28 FOMC) | 10월 28일 차기 FOMC에서 25bp 추가 인상 확률 약 69~75.8%로 매체별 상이(동결 확률 약 24~31%). 단일 확정치로 통일 불가 | growbeansprout.com FedWatch 집계 / centralbank.watch · 2026-09-25 기준 [P3] |
| 9월 FOMC 결정 (배경, 9/16) | 연준은 2026-09-16 FOMC에서 기준금리를 25bp 인상해 3.75~4.00%로 결정(12-0 만장일치). 인플레이션 대응 목적의 2023년 7월 이후 첫 인상 | CNBC · "Fed approves interest rate hike, signals one more to come this year" · 2026-09-16 (ET) · https://www.cnbc.com/2026/09/16/fed-rate-decision-september-2026.html [P2] |
| 9월 SEP(점도표) | FOMC 위원 중위값은 2026년 내 25bp 추가 인상을 예상. 18명 위원 중 4명은 연말까지 50bp 추가 인상이 필요하다고 전망 | Chase.com · "Fed Raises Rates in September, Officials Signal One More Hike in 2026" [P3] |

## [3] 주요 경제지표 〔조건부〕

| 지표 | 발표시각(ET·KST) | 발표치 | 예상치 | 이전치 | 서프라이즈(산술값) | 출처 |
|------|-------------------|--------|--------|--------|----------------------|------|
| 내구재수주 (Durable Goods Orders MoM, 8월) | 2026-09-25 08:30 ET (2026-09-25 21:30 KST) | 0.0% | -0.4% | +1.1% | +0.4%p (발표치-예상치) | Investing.com Economic Calendar · 2026-09-25 [P3] |
| 미시간대 소비자심리지수 (확정치, 9월) | 2026-09-25 10:00 ET (2026-09-25 23:00 KST) | 48.1 | N/A (예비치 47.8 대비 소폭 상승) | 47.8(예비치) | +0.3 (확정치-예비치) | TradingEconomics · "United States Michigan Consumer Sentiment" · 2026-09-25 [P3] |
| 신규 실업수당청구건수 (9/19 마감 주간) | 발표일 확인 필요 — 주간 데이터, 통상 목요일 발표 | 197,000 | 201,000 | 198,000 | -4,000 (발표치-예상치) | Yahoo Finance · "U.S. jobless claims fall to 197,000, near 57-year low" [P3] |

## [4] 특징 종목 〔데일리〕

| 종목 | 티커 | 등락률 | 거래량 | (보도된) 핵심 사실 | 출처+태그 |
|------|------|--------|--------|----------------------|-----------|
| Humana | HUM | +7.0%~+7.9% (매체별 상이) | 확인 필요 | Barclays가 투자의견을 Neutral→Overweight로 상향하고 목표주가를 $515로 제시(직전 $407). UnitedHealth(UNH)는 +0.7% 소폭 상승에 그쳐 업종 전반이 아닌 Humana 개별 이슈로 보도됨 | 24/7 Wall St · "Humana Jumps 7% on Barclays Upgrade and $515 Target; UnitedHealth Nudges Higher" · 2026-09-25 (ET) · https://247wallst.com/investing/2026/09/25/humana-jumps-7-on-barclays-upgrade-and-515-target-unitedhealth-nudges-higher/ [P3] |
| Oracle | ORCL | -3%~-4% (매체별 상이) | 확인 필요 | 뉴멕시코 'Project Jupiter' 데이터센터(Stargate 프로젝트 일부) 관련, 개발사(Blue Owl Capital 자회사)에 force majeure(불가항력) 통지 발송 — 에너지 공급 지연(Energy Transfer 파이프라인 인허가 지연, 2027-02-01로 연기) 사유 | CNBC · "Oracle sends 'force majeure' notice about data center project — stock drops 3%" · 2026-09-24 (ET) · https://www.cnbc.com/2026/09/24/oracle-data-center-force-majeure.html [P2] |
| Akamai | AKAM | 시간외 약 +22% ($110.41→$134.64) | 확인 필요 | Anthropic과 7년간 $11.6B 규모 클라우드 서비스 계약 체결(최대 $9B 추가 확장 옵션 포함, 총 잠재 규모 약 $20B). Anthropic에 Akamai 보통주 약 5%에 해당하는 전환우선주 워런트 발행(행사가 $111.33). Akamai는 2026년 매출가이던스에는 영향 없음, 단 2026년 capex 약 $1.7B 증가 예상 | Akamai Newsroom · "Akamai Announces $11.6 Billion Multi-year Agreement with Anthropic" · 2026-09-24 · https://www.akamai.com/newsroom/press-release/akamai-announces-11-6-billion-multi-year-agreement-with-anthropic-to-support-growing-demand [P1] |
| Charles River Laboratories | CRL | +5% | 확인 필요 | 2026 회계연도 매출·조정EPS 가이던스를 기존 제시 범위의 상단에서 재확인(reaffirm) | AOL · "5 Things to Know Before the Stock Market Opens on Friday" · 2026-09-25 (ET) [P3] |
| Costco | COST | 목요일(9/24) 장마감 후 실적발표, 금요일 프리마켓 -0.2% | 확인 필요 | 2026 회계연도 4분기(FY26 Q4) 매출 $95.72B(전년 $86.16B), 순이익 $29.98억/EPS $6.75(예상 $6.48 상회). EPS 중 $0.15는 IEEPA 관세 환급에 따른 일회성 이익 | Yahoo Finance · "Costco Q4 2026 earnings beat expectations on tariff refund" · 2026-09-25 (ET) · https://finance.yahoo.com/markets/stocks/articles/costco-q4-2026-earnings-beat-110915037.html [P3] |

## [4-A] 섹터별 뉴스 〔0_data.md의 Finnhub 섹터 뉴스에서 선별〕

| 섹터 | 종목 | 사실 내용(무슨 일이) | 발행시각(ET) | 출처+태그 |
|------|------|------------------------|--------------|-----------|
| 헬스케어 | UNH/HUM | Barclays, Humana 투자의견 상향 및 목표주가 $515 제시. UnitedHealth는 소폭 동반 상승 | 2026-09-25 13:59 | Yahoo(Finnhub 수집) · "Humana Jumps 7% on Barclays Upgrade and $515 Target; UnitedHealth Nudges Higher" [P3] |
| 소비재·유통 | AMZN | Anthropic이 Akamai와 $11.6B 클라우드 계약을 체결하며 Amazon(AWS) 대신 타사를 택했다는 맥락에서 Amazon 주가가 하락 흐름으로 보도됨 | 2026-09-25 14:15 | Yahoo(Finnhub 수집) · "Amazon Stocks Move Lower as Anthropic Commits $11.6 Billion Elsewhere" [P3] — 배경 보강: Akamai Newsroom 2026-09-24 [P1] |

> 반도체·AI, 금융, 에너지 섹터 뉴스 항목들(NVDA 관련 배당·ETF 해설 기사, AVGO 관련 밸류에이션 비교 칼럼, JPM 소송·보안센터 뉴스, XOM 관련 정유사 원가절감·베트남 원유공급계약 뉴스)은 개별 종목의 당일 주가/거래량 급변과 직접 연결되는 속보성 사실이 확인되지 않아, 원문 제목 이상의 사실관계를 특정할 수 없음 — 본 절 제외, N/A 처리.

## [5] AI 인프라 — 공급 측 〔데일리〕

| 기업 | 뉴스 제목 | 사실 내용(무슨 일이) | 출처일자 | 출처+태그 |
|------|-----------|------------------------|-----------|-----------|
| AMD/AVGO/NVDA | Optical Scale-up Consortium 결성 | AMD, Broadcom, Meta, Microsoft, NVIDIA, OpenAI가 창립 멤버로 참여해 AI 인프라용 개방형 광통신 스케일업 규격 제정을 위한 컨소시엄을 결성 | 확인 필요 — 정확한 발표일자 미확정 | Motley Fool 관련 보도 참조 [P3] |
| AMD | AMD 시가총액 $1조 달성 | AMD 시가총액이 $1조를 돌파했다고 보도됨(2026-09-22) | 2026-09-22 | 매체 기사 제목("AMD Stock Hits $1 Trillion Valuation") [P3] — 원문 매체 미특정, 추가 검증 필요 |
| AVGO | 3분기(FY2026 Q3) 실적(배경, 9/2 발표분) | Broadcom AI 매출 전년비 +221%(약 $16.7B). 4분기 AI 매출 가이던스 약 $21.7B(+236% YoY) 제시, 2027 회계연도 AI 매출 약 $115B 전망. 6대 하이퍼스케일러 고객(Google·OpenAI·Meta·Anthropic 등)이 주요 앵커 고객으로 언급됨 | 2026-09-02 (실적발표일, 참고용 배경정보) | 24/7 Wall St · "Broadcom Falls 6% as Soft Guidance Overshadows 221% AI Revenue Surge" · 2026-09-03 [P3] |

> CRDO·CLS·VRT·SMCI·APLD·TSM·ANET 관련 2026-09-25 당일 신규 공급측 뉴스는 검색으로 확인되지 않음 — N/A.

## [5-A] AI 인프라 — 수요 측/하이퍼스케일러 CAPEX 〔실적시즌 아니면 1줄 처리〕

신규 변동 없음 — 현재 실적시즌 아님(메가캡 3분기 실적은 2026-10-27~10-29 주간 집중 예정). 직전 가이던스 유지. 단, Anthropic-Akamai $11.6B 클라우드 계약(2026-09-24)은 [4]/[4-A]에서 별도 기재.

## [6] 시총 상위 10 — AI 무관 일반 이슈 〔이슈 있을 시〕

| 기업 | 사실 내용 | 출처일자 | 출처+태그 |
|------|-----------|-----------|-----------|
| Microsoft (MSFT) | Copilot 대규모 개편 발표. CEO Satya Nadella는 "새로운 업무용 OS"로 표현. Home(Word·Excel·PowerPoint 통합)·Code(설명 기반 앱/대시보드 생성)·Autopilot(백그라운드 자동 작업 처리) 3개 신규 기능 출시 시작. 주가는 +4.00%(+$19.93) 상승해 $517.86 마감. Oppenheimer는 목표주가를 $515→$570로 상향 | 2026-09-25 (ET) | CNBC · "Microsoft gives Copilot a much-needed overhaul, and the stock deservedly soars" · 2026-09-25 14:38 (ET) · https://www.cnbc.com/2026/09/25/microsoft-gives-copilot-a-much-needed-overhaul-and-the-stock-deservedly-soars.html [P2] |
| Amazon (AMZN) | Amazon·Microsoft가 양자컴퓨팅 분야에 고객사로 참여 중이라는 업계 보도(Rigetti 등 언급 맥락). 향후 15년간 양자컴퓨팅 시장이 약 $850B 가치를 창출할 것이라는 업계 전망 인용 보도 — Amazon 자체의 신규 확정 사업계획은 확인되지 않음 | 확인 필요 | Yahoo(Finnhub 수집) · "Quantum Is a $850 Billion Dream. Microsoft and Amazon Are Betting Big on It." · 2026-09-25 14:02 (ET) [P3] |

> AAPL·GOOGL·META·BRK·TSLA·TSM 관련 2026-09-25 당일 AI 무관 일반 이슈는 검색으로 확인되지 않음 — N/A.

## [7] 기관·대형 자금 수급 〔데일리〕

| 항목 | 종목 | 사실 내용 | 규모(수치) | 출처+태그 |
|------|------|-----------|------------|-----------|
| ETF 자금흐름(월간, 참고) | SOXX | 최근 1개월간 순유입 약 +$9.43B(운용자산 대비 +20.5%) | +$9.43B (1개월) | Trefis 데이터 집계 페이지 · 기준일 명시 없음, 2026-09-25 검색 시점 확인 [P3] |
| ETF 자금흐름(월간, 참고) | SMH | 최근 1개월간 순유출 약 -$2.48B(운용자산 대비 -3.5%), 단 최근 5거래일은 +$1.64B 순유입으로 반전 | -$2.48B (1개월) / +$1.64B (5일) | Trefis 데이터 집계 페이지 · 기준일 명시 없음, 2026-09-25 검색 시점 확인 [P3] |

> SPX·QQQ·IWM 옵션 플로우, 대량 블록딜 등 2026-09-25 당일 구체적 종목·규모가 특정된 기관수급 뉴스는 검색으로 확인되지 않음 — 해당 항목 N/A.

## [7-A] Insider Trading (SEC Form 4) 〔신규공시 있을 시〕

N/A — 2026-09-25 당일 신규 Form 4 공시 확인 안 됨. 참고로 2026년 9월 중(9/3~9/21) NVDA에서 다음 공시가 있었음(2026-09-25 당일 건 아님, 배경 참고용):

| 기업 | 내부자 | 직책 | 매수/매도 | 거래유형 | 규모 | 거래일 | 출처 |
|------|--------|------|-----------|-----------|------|--------|------|
| NVDA | Mark A. Stevens | Director | 매도 | 확인 필요(신탁을 통한 간접보유분 처분) | 약 130만주, 평균 $219.72 (9/18); 약 90만주, $227.70~$234.00 (9/3~9/4) | 2026-09-18 / 2026-09-03~09-04 | SEC EDGAR Form 4 (wk-form4 관련 파일링) [P1] |
| NVDA | Colette Kress (CFO) | EVP & CFO | 매도 | 확인 필요 | 약 35,000주, $218~$219 | 2026-09-16~09-17 | SEC EDGAR Form 4 [P1] |
| NVDA | Timothy S. Teter | EVP, General Counsel | 매도 | 확인 필요 | 약 30,400주, $222~$224 | 2026-09-21 | SEC EDGAR Form 4 [P1] |

## [8] 향후 14일 주요 일정 〔변동 있을 시〕

### 경제 일정

| 날짜 | 시각(ET·KST) | 이벤트 | 컨센서스 | 이전치 | 출처 |
|------|--------------|--------|-----------|--------|------|
| 2026-10-02 | 확인 필요 | 9월 비농업고용지표(Nonfarm Payrolls, 통상 월 첫째 금요일) | N/A | N/A | 통상적 발표일정 기준 추정 — 정확한 컨센서스·이전치는 확인 필요 [N/A] |
| 2026-10-10 | 08:30 ET (21:30 KST) | 9월 PPI(생산자물가지수) | N/A | N/A | FedRateCalc "2026 U.S. Economic Calendar" [P3] — 컨센서스·이전치 확인 필요 |
| 2026-10-14 | 확인 필요 | 9월 CPI(소비자물가지수) | N/A | N/A | FedRateCalc "2026 U.S. Economic Calendar" [P3] — 시각·컨센서스·이전치 확인 필요 |
| 2026-10-27~10-28 | 10/28 14:30 ET (10/29 03:30 KST) 기자회견 | FOMC 정례회의 및 파월(의장) 기자회견 | 시장 반영 금리인상 확률 약 69~75.8%(위 [2] 참조) | 직전 3.75~4.00% | Federal Reserve · "October 2026" 일정 페이지 https://www.federalreserve.gov/newsevents/2026-october.htm [P1] |

### 기업 일정

| 날짜 | 기업 | 이벤트 | 컨센서스 EPS | 컨센서스 매출 | 출처 |
|------|------|--------|----------------|----------------|------|
| 2026-10-27 | Alphabet (GOOGL) | 3분기 실적발표(예정) | N/A | N/A | 업계 일정 취합 보도 — 확정 공시 아님, 확인 필요 [P3] |
| 2026-10-28 | Meta Platforms (META) | 3분기 실적발표(예정) | N/A | N/A | 상동 [P3] |
| 2026-10-29 | Apple (AAPL) | 3분기 실적발표(예정) | N/A | N/A | 상동 [P3] |

> Microsoft·Amazon 3분기 실적일은 "10월 말 2주 내 클러스터" 로만 보도되고 구체 일자는 확인되지 않음 — N/A.

## [9] 오늘의 사실 목록 (순위 없음) 〔데일리〕

- [1] S&P500 7,743.41 (+0.51%) · CNBC [P2]
- [1] NASDAQ 27,068.72 (+0.5%) · CNBC [P2]
- [1] Dow 51,828.62 (+478.64pt, +0.93%), 3주 연속 주간 하락 흐름 종료 · CNBC [P2]
- [1] Russell 2000 2,835.57 (-3.09pt, -0.11%) · Yahoo Finance [P3]
- [1] SOX 종가 확인 불가 · [N/A]
- [1] Brent $104.32~105 부근, 호르무즈 해협 재개 협상 기대로 하락 · CNBC [P2]
- [1-A] ES선물 7,805.75(+0.50%), NQ 30,921.75(+0.50%), YM 52,180(+0.90%), RTY 2,859.9(+0.11%) · Yahoo chart API [P1]
- [1-A] VIX 14.87(-5.11%), VIX9D 12.76(-9.57%), VIX3M 17.93(-2.71%), VVIX 87.84(-3.01%), SKEW 144.91(-0.77%) · CBOE/CME [P1]
- [1-A] VIX3M/VIX 1.206(콘탱고), VIX/VIX9D 1.165(콘탱고) · 산출값 [P1]
- [1-A] SPX P/C 거래량 1.062, 미결제 1.414 / QQQ P/C 거래량 0.984, 미결제 1.405 · CBOE [P1]
- [2] 10년물 국채수익률 약 5.163%, 2년물 약 4.856%, 스프레드 +0.307%p · CNBC [P2]
- [2] CME FedWatch, 10/28 FOMC 25bp 인상 확률 약 69~75.8%(매체별 상이) · growbeansprout/centralbank.watch [P3]
- [2] 연준은 2026-09-16 FOMC에서 25bp 인상해 3.75~4.00%로 결정(12-0 만장일치) · CNBC [P2]
- [3] 8월 내구재수주 0.0%(예상 -0.4%, 이전 +1.1%) · Investing.com [P3]
- [3] 9월 미시간대 소비자심리지수 확정치 48.1(예비치 47.8) · TradingEconomics [P3]
- [3] 9/19 마감 주간 신규 실업수당청구 197,000건(예상 201,000건) · Yahoo Finance [P3]
- [4] Humana(HUM) +7%대, Barclays 투자의견 상향(목표가 $515) · 24/7 Wall St [P3]
- [4] Oracle(ORCL) -3~4%대, 뉴멕시코 데이터센터 프로젝트에 force majeure 통지 발송 · CNBC [P2]
- [4] Akamai(AKAM) 시간외 +22%대, Anthropic과 7년 $11.6B 클라우드 계약 체결 · Akamai Newsroom [P1]
- [4] Charles River Laboratories(CRL) +5%, 2026 가이던스 상단 재확인 · AOL [P3]
- [4] Costco(COST) FY26 Q4 매출 $95.72B·EPS $6.75(예상 상회) · Yahoo Finance [P3]
- [4-A] Amazon 관련 뉴스, Anthropic이 Akamai를 택함에 따른 하락 흐름으로 보도 · Yahoo(Finnhub) [P3]
- [5] AMD·Broadcom·Meta·Microsoft·NVIDIA·OpenAI, Optical Scale-up Consortium 결성 · Motley Fool 관련 보도 [P3]
- [5] AMD 시가총액 $1조 달성 보도(9/22) · 매체 기사 [P3]
- [5-A] 메가캡 3분기 실적시즌은 10/27~10/29 집중, 현재는 비실적시즌으로 직전 가이던스 유지 · 업계 일정 취합 [P3]
- [6] Microsoft, Copilot 개편(Home·Code·Autopilot) 발표, 주가 +4.00% $517.86 · CNBC [P2]
- [7] SOXX 1개월 순유입 약 +$9.43B, SMH 1개월 순유출 약 -$2.48B(단 최근 5일 +$1.64B) · Trefis [P3]
- [7-A] 2026-09-25 당일 신규 Form 4 공시 없음(9월 중 NVDA 임원진 매도 건은 배경 참고) · SEC EDGAR [P1]
- [8] 차기 FOMC 2026-10-27~10-28(기자회견 10/28 14:30 ET) · Federal Reserve [P1]
- [8] 9월 CPI 10/14, PPI 10/10 발표 예정 · FedRateCalc [P3]
