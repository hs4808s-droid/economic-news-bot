# 미국 시장 데일리 수집 결과 (Collect)
# 기준일: 2026-10-05 (월) · 미국 정규장 종가 기준(2026-10-02, 금) · 실행모드: 데일리
# 생성시각(KST): 2026-10-05 06:36

---

## [1] 미국 주요 지수

| 항목 | 종가/수치 | 등락률 | (보도된) 원인 | 출처+태그 |
|------|-----------|--------|----------------|-----------|
| S&P500 | 7,722.72 | +0.73%(+56.27pt) (CNBC 요약 기사는 +0.7%로 표기, 소수점 상이) | 9월 비농업고용 부진으로 연준의 추가 긴축 우려가 완화됨(매체 보도) | CNBC · "How Nvidia, Micron and a surprising jobs report drove last week's stock action" · 2026-10-03 · https://www.cnbc.com/2026/10/03/how-nvidia-micron-and-a-surprising-jobs-report-drove-last-weeks-stock-action.html [P2] |
| 나스닥종합지수 | 27,190.86(기사 내 수치, 거래소 1차 확인은 못함) | +1.2%(+319.27pt), 장중 사상최고치 경신 | 고용지표 부진 + 엔비디아 사상최고 경신이 지수를 견인(매체 보도) | CNBC · "Stocks rise Friday after soft jobs data, Nvidia leads Nasdaq to intraday record" · 2026-10-02 · https://www.cnbc.com/2026/10/01/stock-market-today-live-updates-.html [P2] |
| Dow | 51,176.96 | +0.5%(+250.40pt) | 고용지표 부진으로 금리인상 우려 완화(매체 보도) | CNBC · 상동(2026-10-03) [P2] |
| Russell2000 | 2,832.89 | +0.94%(+26.27pt) | 지수 고유의 보도된 원인은 확인 안 됨 — 전반적 시장 상승 흐름에 동반 | Yahoo Finance 과거데이터 페이지 [P3] |
| SOX(필라델피아 반도체지수) | N/A — 출처 간 수치 불일치(동일 수치를 두고 등락률 +2.40%/0.00%로 표기한 출처 상충)로 확정 불가 | N/A | 확인 안 됨. 참고로 SOXX(ETF) +2.18%, 개별종목 AVGO +3.35%·AMD +2.95%·NVDA +1.34%(사상최고) 보도됨 | GuruFocus 등 2차 집계 · 2026-10-02 [P3] |
| Brent | $102.25/배럴 | -0.06% | 확인 안 됨(단일 출처, 교차검증 안 됨) | Fortune · "Current price of oil as of Oct. 2, 2026" · 2026-10-02 · https://fortune.com/article/price-of-oil-10-02-2026/ [P3, 단일출처] |

---

## [1-A] 선물·변동성 구조 (`0_data.md` 원문 그대로)

**선물 (한국 아침 시점)** — ES · NQ · YM · RTY

| 항목 | 현재가 | 전일 대비 | 직전 종가 | 기준시각(ET) | 출처+태그 |
|------|--------|-----------|-----------|--------------|-----------|
| S&P500 선물 (ES) | 7,777.25 | +0.69% | 7,724 | 2026-10-02 17:00 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 나스닥100 선물 (NQ) | 31,061.75 | +0.98% | 30,760.5 | 2026-10-02 16:59 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 다우 선물 (YM) | 51,477 | +0.46% | 51,241 | 2026-10-02 16:59 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 러셀2000 선물 (RTY) | 2,850.9 | +0.85% | 2,826.9 | 2026-10-02 16:59 | CBOE / CME (Yahoo chart API 자동수집) [P1] |

**변동성 구조** — VIX · VIX9D · VIX3M · VVIX · SKEW + 기간구조 비율

| 항목 | 수치 | 전일 대비 | 출처+태그 |
|------|------|-----------|-----------|
| VIX (30일) | 15.31 | -6.59% | CBOE (Yahoo chart API 자동수집) [P1] |
| VIX9D (9일) | 12.06 | -13.86% | CBOE (Yahoo chart API 자동수집) [P1] |
| VIX3M (3개월) | 18.01 | -3.07% | CBOE (Yahoo chart API 자동수집) [P1] |
| VVIX | 87.02 | -5.42% | CBOE (Yahoo chart API 자동수집) [P1] |
| SKEW | 144.88 | +1.48% | CBOE (Yahoo chart API 자동수집) [P1] |

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.176 | 콘탱고 |
| VIX / VIX9D | 1.269 | 콘탱고 |

**Put/Call 비율** — SPX · QQQ (CBOE 옵션 체인 집계)

| 대상 | P/C(거래량) | P/C(미결제약정) | 콜 거래량 | 풋 거래량 | 출처+태그 |
|------|-------------|------------------|-----------|-----------|-----------|
| S&P500 지수옵션 (SPX) | 1.502 | 1.412 | 633,036 | 950,983 | CBOE (옵션체인 자동집계) [P1] |
| 나스닥100 ETF 옵션 (QQQ) | 1.551 | 1.414 | 1,112,076 | 1,725,259 | CBOE (옵션체인 자동집계) [P1] |

매크로 참고(자동수집): 미 10년 국채선물(ZN=F) 104.36(-0.28%) · 금(GC=F) 4,162.3(-0.95%) · WTI(CL=F) 91.11(-1.90%) · 달러지수(DXY) 101.92(-0.17%) — 전부 2026-10-02 종가 기준, CBOE/CME(Yahoo chart API 자동수집) [P1]

---

## [2] 금리 / 연준

| 항목 | 사실 내용(발언·수치) | 출처+태그 |
|------|----------------------|-----------|
| 미 2년물 국채금리 | 4.839%, 전일 대비 약 +5bp | CNBC · "10-year Treasury yield ticks higher despite weaker-than-expected jobs report" · 2026-10-02 · https://www.cnbc.com/2026/10/02/treasury-yields-bonds-nonfarm-payrolls.html [P2] |
| 미 10년물 국채금리 | 5.281%, 전일 대비 약 +5bp | 상동 [P2] |
| 10Y-2Y 스프레드 | 약 +44bp (5.281%-4.839%, 산술값) | 상동 수치로 산출 [P2] |
| 미 30년물 국채금리(참고) | 5.629%, +2bp | 상동 [P2] |
| 금리 흐름 요약(보도) | "고용지표 발표 직후 금리가 하락했다가 장중 반등해 상승 마감"(매체 서술) | CNBC 상동 [P2] |
| Fed 부의장 Philip Jefferson 연설 | 2026-10-01, Darden School of Business(UVA)에서 "The U.S. Economy and Monetary Policy" 연설. "경제활동과 고용에 대한 리스크는 현재 대체로 균형 잡혀 있다고 본다"면서도 "인플레이션에는 상방 리스크가 있다"고 언급. "인플레이션이 2% 목표를 5년 넘게 초과한 상태"라고 발언. 상반기 GDP는 "연율 2.4% 성장"했고 기업투자는 "AI 관련 지출에 힘입어 매우 견조하다"고 언급 | 연준 · https://www.federalreserve.gov/newsevents/speech/jefferson20261001a.htm [P1] (단, 원문 전체 직접 대조는 못했고 2차 요약 인용 기반) |
| Fed Waller·Bowman 연설(2026-10-01) | 같은 날 Waller 이사(세인트루이스 연준, 경제데이터 주제)와 Bowman 부의장(금융규제 현대화 주제)도 연설한 것으로 확인되나 구체 발언 인용은 확인 안 됨 | 연준 연설 일정 페이지 https://www.federalreserve.gov/newsevents/2026-october.htm [P1, 제목만 확인] |
| CME FedWatch (10/27-28 FOMC) | 동결 확률 약 77%(CNBC)~78%(타 집계), 금리 인상 확률 약 21%, 인하 확률 약 1%. 현재 Fed funds 목표금리 3.75%~4.00% | CNBC · 상동(2026-10-02) [P2] / 보조출처 2차 집계 [P3] |

---

## [3] 주요 경제지표 〔발표일〕

| 지표 | 발표시각(ET·KST) | 발표치 | 예상치 | 이전치 | 서프라이즈(산술) | 출처 |
|------|------------------|--------|--------|--------|--------------------|------|
| 9월 비농업고용(Nonfarm Payrolls) | 2026-10-02 08:30 ET · 21:30 KST | +29,000명 | +84,000명 (서베이별 84K~95K로 다소 상이) | 8월 +133,000명(기존 +162,000명에서 하향수정) | -55,000명(발표치-예상치, 84K 기준) | BLS "Employment Situation Summary" USDL-26-1435 · https://www.bls.gov/news.release/empsit.nr0.htm [P1] |
| 실업률 | 상동 | 4.2% | 4.1% | 4.1%(8월) | +0.1%p | BLS 상동 [P1] |
| 평균시간당임금(전월대비) | 상동 | +0.1% | +0.3% | N/A | -0.2%p | BLS 상동 [P1] |
| 평균시간당임금(전년대비) | 상동 | +3.0% | N/A | +3.1%(8월) | N/A | BLS 상동 / CNBC 보도("2021년 5월 이후 최저 속도") [P1/P2] |
| 신규실업수당청구건수(주간) | 2026-10-01 08:30 ET · 21:30 KST (9/26일 종료주) | 197,000건 | 200,000건 | 198,000건 | -3,000건 | Bloomberg · "US Initial Jobless Claims Slip to 197,000, Lowest Since July" · 2026-10-01 · https://www.bloomberg.com/news/articles/2026-10-01/us-initial-jobless-claims-slip-to-197-000-lowest-since-july [P2] |
| ISM 제조업 PMI(9월) | 2026-10-01 10:00 ET · 23:00 KST | 54.5 | N/A(세부 하위지수만 추정치 존재) | 54.6(8월) | N/A | ISM(PRNewswire 배포) · "Manufacturing PMI at 54.5%" · 2026-10-01 [P1] |
| — 물가지불(Prices Paid) | 상동 | 77.9 | 73.0(추정) | 71.1 | +4.9 | 상동 [P1] |
| — 신규주문(New Orders) | 상동 | 55.3 | 54.7(추정) | 53.7 | +0.6 | 상동 [P1] |
| — 고용(Employment) | 상동 | 52.7 | 52.0(추정) | 51.2 | +0.7 | 상동 [P1] |
| ISM 서비스업 PMI(9월) | 2026-10-05(금일) 10:00 ET 발표 예정 | N/A — 아직 미발표 | 확인 필요 | 확인 필요 | N/A | financecalendar.com 경제캘린더 [P3] |
| CPI/Core CPI, PPI, GDP, 소매판매 | — | N/A — 금일(10/2 기준) 발표 없음. 각각 10/14(CPI), 10/15(PPI), 10/29(GDP 잠정), 10/15(소매판매) 예정 | — | — | — | 경제캘린더 집계(fedratecalc.com 등) [P3] |

> 참고: 검색 중 2026-10-01부터 시작된 미 연방정부 shutdown으로 10월 고용보고서·10월 CPI 등 향후 발표 일정이 변경될 수 있다는 보도(The Hill 등 [P2])가 확인됨. 9월 지표(위 표)는 예정대로 정상 발표됐으나, 10월 이후 지표 일정은 추가 확인 필요.

---

## [4] 특징 종목

| 종목 | 티커 | 등락률 | 거래량 | (보도된) 핵심 사실 | 출처+태그 |
|------|------|--------|--------|---------------------|-----------|
| Nike | NKE | 약 -9~10% (매체별 소폭 상이) | N/A | FY2027 1분기(8월 마감) 매출 전년대비 -4%($11.21B), 중화권 매출 환율조정 기준 -26%. FY2027 가이던스로 매출 한 자릿수 후반 감소, 조정EPS $1.15~1.35 제시(시장 예상 $1.69 하회). 'Pace' 구조조정 계획 하에 2031년까지 $2.5B 비용절감 목표 및 신규 인력감축 발표 | CNBC · "Nike stock falls 10% after revenue falls and layoff plans underway" · 2026-10-02 · https://www.cnbc.com/2026/10/02/nike-nke-stock-q1-earnings-layoffs.html [P2] |
| Western Digital / Seagate | WDC / STX | 약 -6%~-14%대(매체별 수치 상이, 정확한 수치 확인 필요) | N/A | 도시바가 AI데이터센터 수요를 겨냥해 HDD 생산능력을 약 6백억엔 투자해 2배로 늘리고, HDD 점유율을 10%에서 30%로 높이겠다고 발표 — 'AI 저장장치 공급부족' 테마에 대한 투자자 우려로 WDC·STX 동반 급락 | Benzinga · "Toshiba Wants to Double HDD Supply — Western Digital, Seagate Investors Don't Like It" · 2026-10-02 [P3] |
| Synaptics / onsemi | SYNA / ON | SYNA 약 +14~15%, ON 약 +6.7~7% | N/A | onsemi와 Synaptics가 2026-06-25 체결했던 전량 주식교환 방식(약 $7B) 인수합병 계약을, 경쟁 인수제안 등장 이후 전량 현금 방식(주당 $123, 총 약 $5.7B)으로 변경 체결. Morgan Stanley Senior Funding이 최대 $2.45B 텀론 제공 약정 | onsemi SEC 8-K · 2026-10 · https://www.sec.gov/Archives/edgar/data/0001097864/000114036126038294/ef20083030_ex99-1.htm [P1] |
| Accenture | ACN | 장중 최대 +22%, 종가 기준 약 +16~18%(10/1 발생, 10/2까지 시장에서 계속 언급) | N/A | FY2026 4분기(8/31 마감) 실적: 조정EPS $3.29(예상 $3.19), 매출 $18.7B(예상 $18.05B, +6%YoY). 분기 중 $11.5B 주주환원, 분기 역대 최다 수준인 $1억+ 수주 141건, FY2026 중 신규 AI 고객 400개사 이상 확보 언급 | CNBC · "Accenture rallies more than 20% after earnings beat, heads for best day ever" · 2026-10-01 · https://www.cnbc.com/2026/10/01/accenture-rallies-more-than-20percent-after-earnings-beat-heads-for-best-day-ever.html [P2] |
| Progress Software | PRGS | 약 -8.5% | N/A | FY2026 3분기 실적: EPS $1.69(예상 $1.52, 상회)이나 매출 $246.0M(예상 $246.7M, 소폭 미달). 4분기 가이던스 조정EPS $1.24~1.33 제시(시장 예상 $1.37 하회), 약 $400M 규모 Domo 인수 관련 통합 리스크 우려가 겹쳤다고 보도 | Investing.com · "Progress Software beats Q3 2026 EPS, shares slip after hours" [P3] |

---

## [4-A] 섹터별 뉴스 (`0_data.md` Finnhub 수집분 중 시장 관련분)

| 섹터 | 종목 | 사실 내용(무슨 일이) | 발행시각(ET) | 출처+태그 |
|------|------|----------------------|--------------|-----------|
| 반도체·AI | — | `0_data.md` 수집분 중 시장 관련 신규 사실 없음(나머지는 배당주 추천·시황 코멘트성 콘텐츠로 제외). AVGO 관련 Anthropic $42B 거래는 [5]에서 다룸 | — | — |
| 금융 | — | `0_data.md` 수집분(AAL 적정가치 분석, 소형주 ETF 비교, Fed 금리전망 코멘터리)은 전부 투자의견·시황 해설성 콘텐츠로 사실 수집 대상에서 제외 | — | — |
| 에너지 | XOM | OPEC+(사우디·러시아 등 7개국 그룹)가 11월 원유 생산 쿼터를 동결하기로 합의. 중동 분쟁(미국-이스라엘의 이란 관련 전쟁)으로 걸프 산유국들의 실제 생산량이 쿼터를 밑돌고 있다고 보도됨(8월 7개국 생산량 약 2,500만b/d로, 분쟁 전인 2월 대비 약 500만b/d 낮은 수준) | 2026-10-04 | Bloomberg · "OPEC+ Agrees to Keep Oil Output Targets Steady in November" · https://www.bloomberg.com/news/articles/2026-10-04/opec-has-deal-outline-for-steady-november-quotas-delegates-say [P2] |
| 헬스케어 | — | `0_data.md` 수집분(배당ETF 추천, Medicare Advantage 확장 관련 투자의견)은 시황 해설성 콘텐츠로 제외. UNH 실적발표 일정은 [8]에 기재 | — | — |
| 소비재·유통 | AMZN | AWS CEO Matt Garman이 데이터센터 신규 건설에 대한 지역사회 반대 움직임(전국적으로 약 100건의 데이터센터 모라토리엄 검토 중, 2026년 상반기에만 약 $198B 규모 프로젝트 120건 이상이 지연·무산)이 미국의 AI 경쟁력과 경제에 리스크가 될 수 있다고 발언. Amazon은 이에 대응해 데이터센터 입지 지역에 5년간 $1B 이상을 교육·직업훈련·에너지비용 지원 등에 투입하겠다고 밝힘 | 2026-10-04 | TheStreet · "Amazon AWS CEO reveals surprising risk to AI stocks and U.S. economy" · https://www.thestreet.com/investing/stocks/amazon-ai-data-center-backlash [P3] |

---

## [5] AI 인프라 — 공급 측

| 기업 | 뉴스 제목 | 사실 내용(무슨 일이) | 출처일자 | 출처+태그 |
|------|-----------|----------------------|----------|-----------|
| AVGO(Broadcom) | Broadcom, Anthropic에 최대 $42B 대출 — IPO 서류로 공개 | Anthropic의 IPO 등록서류(공시일 기준 2026-08-02 시점 정보)에 따르면 Broadcom이 Anthropic에 최대 $42B 규모의 전환사채 형태 대출을 제공하기로 합의. 자금은 Anthropic이 Google TPU 컴퓨팅 용량을 리스하는 비용(2026년 4월 발표된 5년 $125.2B 규모 리스 계약의 약 1/3)에만 사용 가능하도록 제한. 전환가격·만기·이자지급방식(현금/PIK)은 서류에 미공개. 공시 시점까지 실제 발행된 사채는 없었음 | 2026-10-01(보도일) | Reuters(CNBC 재게재) · "Broadcom to lend Anthropic up to $42 billion to lease its chips, filing says" · https://www.cnbc.com/2026/10/01/broadcom-lending-anthropic-42-billion-chips-reuters.html [P2] (원 출처는 Anthropic SEC 등록서류 [P1]이나 서류 원문 직접 확인은 못함) |
| AVGO(Broadcom) | Anthropic, IPO 서류에서 "이해상충 가능성" 명시 공개 | Anthropic은 자사 IPO 서류에서 Broadcom이 공급자·리스제공자·대출기관 역할을 동시에 수행하는 구조가 "잠재적 이해상충"을 야기할 수 있다고 명시. 지급 또는 이행 불이행 시 리스 의무가 즉시 가속화되는 동시에 $42B 대출 접근이 제한될 수 있다는 내용도 서류에 포함 | 2026-10-01(보도일) | Benzinga · "Anthropic's IPO Filing Reveals a $42 Billion Broadcom Lending Deal" · https://www.benzinga.com/markets/private-markets/26/10/62118633/anthropics-ipo-filing-reveals-a-42-billion-broadcom-lending-deal [P2] |
| AVGO(Broadcom) | 별도의 $60B 규모 자금조달 패키지 보도 | Broadcom이 Anthropic 등 고객의 AI 칩·인프라 구매를 지원하기 위해 $42B 선순위(Class A)+$18B 후순위(Class B, Blackstone 주도) 구조의 별도 $60B 자금조달 패키지를 조성 중이라고 보도됨 | 2026-09말~10월초(보도일) | Bloomberg(Seeking Alpha 재게재) · "Broadcom Gathers $60B Financing Package To Fund AI Chips For Anthropic" · https://seekingalpha.com/news/4649721-broadcom-gathers-60b-financing-package-to-fund-ai-chips-for-anthropic-report [P3, 2차보도] |
| AVGO(Broadcom) | Q3 FY2026(8/2 마감) 실적 — AI 매출 가이던스 상향 | 연결매출 $29.6B(+86%YoY), AI 반도체 매출 $16.7B(+221%YoY, 전체의 56%). FY2026 AI 매출 가이던스를 기존 $56B에서 $58B로 상향. 4분기 AI 반도체 매출 가이던스 $21.7B(+236%YoY) 제시, FY2027/FY2028 AI 매출 전망으로 각각 $115B/$230B 제시 | 2026-09월(실적발표일, 실적시즌 외 참고사항) | SEC 8-K · https://www.sec.gov/Archives/edgar/data/0001730168/000173016826000076/avgo-08022026x8kxex99.htm [P1] |
| SMCI(Super Micro) | 엔비디아 'Vera Rubin' 기반 서버랙 출하 개시 | Nvidia의 차세대 'Vera Rubin' 아키텍처용으로 설계된 서버랙 출하를 시작했다고 발표(보도 기준). 주가는 당일 약 4% 상승 | 2026-10-04 | Foreign Policy Journal · "Super Micro Computer (NASDAQ: SMCI) Stock Price Jumps 4% After Beginning Shipments Of Nvidia Vera Rubin AI Server Racks" · https://www.foreignpolicyjournal.com/2026/10/04/super-micro-computer-nasdaq-smci-stock-price-jumps-4-after-beginning-shipments-of-nvidia-vera-rubin-ai-server-racks/ [P3, 2차보도 — 1차 보도자료 직접확인 못함] |
| APLD(Applied Digital) | Polaris Forge 1 캠퍼스 가동용량 250MW 도달 | 노스다코타주 Polaris Forge 1 캠퍼스에 75MW를 추가 가동해 해당 사이트의 총 가동 중 IT 부하용량이 250MW에 도달했다고 발표(보도 기준). 주가는 당일 약 4.6% 상승 | 2026-10-04 | Foreign Policy Journal · "Applied Digital (NASDAQ: APLD) Stock Surges As Polaris Forge 1 Campus Hits 250 MW Operational Capacity" · https://www.foreignpolicyjournal.com/2026/10/04/applied-digital-nasdaq-apld-stock-surges-as-polaris-forge-1-campus-hits-250-mw-operational-capacity/ [P3, 2차보도 — 1차 보도자료 직접확인 못함] |
| CRDO(Credo Technology) | FTSE All-World 지수 편입 | FTSE All-World 지수에 편입된 것으로 보도됨(정확한 편입 발효일은 확인 안 됨) | 확인 필요 | Simply Wall St [P3] |
| NVDA, AMD, TSM, ANET, CLS, VRT | — | 2026-09-29~10-04 기간 중 신규 수주·공급계약·가이던스 변경 등 날짜가 명확히 확인되는 신규 사실 없음(애널리스트 코멘트·과거 발표된 계약의 재언급만 확인됨) | — | N/A — 금주 신규 변동 없음 |

---

## [5-A] AI 인프라 — 수요 측 / 하이퍼스케일러 CAPEX 〔실적시즌 외〕

실적시즌 외 — 신규 변동 없음, 직전 가이던스 유지. (MSFT·AMZN·GOOGL·META 모두 최근 분기 실적에서 제시한 CAPEX 가이던스에서 이번 주 기간 중 공식적인 변경 발표는 확인되지 않음)

---

## [6] 시총 상위 10 — AI 무관 일반 이슈

| 기업 | 사실 내용 | 출처일자 | 출처+태그 |
|------|-----------|----------|-----------|
| MSFT | Ryan Roslansky(전 LinkedIn CEO, 現 EVP) 연말까지 퇴사 발표. 과도기 동안 Satya Nadella 자문 역할 수행 예정. 같은 발표에서 Microsoft Research 리더 Peter Lee도 퇴사 예정 | 2026-10-01 | Microsoft 공식 블로그 · https://blogs.microsoft.com/blog/2026/10/01/microsoft-365-and-linkedin-leadership-update/ [P1] / CNBC [P2] |
| NVDA | 이사회가 $150B 규모의 추가 자사주 매입을 승인(기존 승인분 포함 총 $235B) — 미국 기업 단일 자사주매입 승인 규모로는 최대 규모로 보도됨 | 2026-09-28~29 | CNBC · "Nvidia share buyback plan gets $150 billion boost" · https://www.cnbc.com/2026/09/28/nvidia-share-buyback-plan-gets-150-billion-boost.html [P2] |
| NVDA | Jensen Huang 개인 자산이 $200B를 넘어선 것으로 추산됨(엔비디아 주가 사상최고 경신과 함께) | 2026-10-02 | Forbes · https://www.forbes.com/sites/conormurray/2026/10/02/jensen-huangs-fortune-breaks-200-billion-as-nvidia-stock-reaches-record-high/ [P2] |
| AAPL | 영국 경쟁항소법원(Competition Appeal Tribunal)이 Apple·Amazon을 상대로 한 반독점 소송(2018년 영국 아마존 마켓플레이스 내 Apple/Beats 판매자 제한 관련 담합 의혹) 중 일부 청구(최대 £289~306M 규모)의 진행을 허용. Apple은 "강하게 반박"하며 원 계약을 "가품 방지 조치"라고 주장, Amazon은 "근거 없다"고 반박 | 2026-09-28 | Reuters(9to5Mac·Investing.com 재게재) · https://9to5mac.com/2026/09/28/apple-and-amazon-face-renewed-uk-antitrust-lawsuit/ [P2] |
| AAPL | 美 연방대법원 2026년 신규 회기(10월) 중 Apple 관련 사건으로 Apple v. Epic Games(금지명령 '취지' 위반에 대한 민사 모독 인정 가능 여부)가 거론됨(변론기일 미확정). 같은 회기에 별도 사건으로 Exxon/Suncor v. Boulder(기후소송), Anderson v. Intel(ERISA 수탁의무 사건, 10/6 변론 예정)도 진행 — 세 사건은 서로 무관한 별개 사건 | 보도 2026-10-04 | U.S. News & World Report [P2] / SCOTUSblog [P3] (Apple v. Epic 변론기일 확정 여부는 확인 필요) |
| AAPL | (확인 필요) Bloomberg Mark Gurman 보도 기반 — 10/13경 Siri 탑재 스마트홈 허브·신형 HomePod mini·Apple TV 4K 공개, 10/23 'iPhone Duo' 출시설. Apple 공식 발표 아님 | 2026-09-28~30(보도일) | MacRumors(Bloomberg 인용) [P3, 미확정 루머성 보도] |
| AMZN | FTC의 Amazon 반독점(독점력 남용) 소송에서 워싱턴주 연방법원 John Chun 판사가 재판 기일을 2026-10-13로 지정 | 보도 2026-09월 | Bloomberg Law [P2] |
| AMZN | Prime Big Deal Days 2026 행사를 10/6~7 진행 예정(공식 발표) | 발표일 확인 필요 | Amazon 공식(aboutamazon.com) [P1] |
| TSLA | 2026년 3분기 차량 인도 486,532대(생산 464,391대) 발표. 전년동기 497,099대 대비 -2.1%이나 시장 예상(약 461,974대) 상회. Model3/Y가 478,237대, 에너지저장 배치 13.7GWh | 2026-10-02 | Tesla IR 공식 발표 · https://ir.tesla.com/press-release/tesla-third-quarter-2026-production-deliveries-and-deployments [P1] / CNBC [P2] |
| TSLA | NHTSA 리콜(No. 26V507) — Model3/Y 약 19,900대 대상, 로우빔 헤드라이트 눈부심 문제. 2026-09-30부터 소프트웨어 업데이트 2026.38 배포 시작(구형 HW3 차량용 Dynamic Headlight Leveling 기능 추가) | 2026-09-30 | Tesla Oracle(NHTSA 리콜 인용) [P3, NHTSA 1차 확인 필요] |
| GOOGL, BRK, TSM | 2026-09-29~10-04 기간 중 신규 확인된 비-AI인프라 이슈 없음 | — | N/A — 금주 신규 변동 없음 |

---

## [7] 기관·대형 자금 수급

| 항목 | 종목 | 사실 내용 | 규모(수치) | 출처+태그 |
|------|------|-----------|------------|-----------|
| ETF 자금흐름(SMH·SOXX·QQQ) | — | 2026-10-01~03 기간에 특정된 신뢰 가능한 일별 자금흐름 수치 확인 안 됨(검색된 대규모 유출입 수치는 각각 5월·7월·9월 중순 등 다른 시점의 것으로 확인되어 혼동 방지차 제외) | N/A | N/A — 확인 필요 |
| 옵션 이상거래(대량) | NVDA | 2026-09-29, NVDA 콜옵션 대량(스윕) 거래 2건 포착(9/30만기 $230행사가 1,035계약, 10/2만기 $232.5행사가 280계약, 각 프리미엄 $20,000 이상) | 1,035계약 / 280계약 | TrendSpider 옵션플로우 집계 [P3] |
| 블록딜/대량거래 | — | Oct 1~4 기간 중 Reuters·Bloomberg·WSJ 등 주요 매체가 보도한 개별 종목 대량 지분 매매(블록딜) 확인 안 됨 | N/A | N/A — 확인 필요 |
| 옵션 이상거래(섹터 전반) | — | 10/1~3 기간에 특정된 Reuters/Bloomberg/Barron's/CBOE의 반도체·AI 관련 이상 옵션거래 보도 확인 안 됨 | N/A | N/A — 확인 필요 |

---

## [7-A] Insider Trading (SEC Form 4)

| 기업 | 내부자 | 직책 | 매수/매도 | 거래유형 | 규모 | 거래일 | 출처 |
|------|--------|------|-----------|----------|------|--------|------|
| CRDO(Credo Technology) | Lam Yat Tung | COO | 매도 | 10b5-1 플랜(2026-04-15 수립) | 50,000주 @ $205.2175 | 2026-10-01 | StockTitan(SEC Form4 집계) · https://www.stocktitan.net/sec-filings/CRDO/ [P3, 1차 EDGAR 원문 직접확인 필요] |
| CRDO(Credo Technology) | Lam Yat Tung | COO | (세금원천징수) | 세금원천징수용 주식처분 | 3,180주 | 2026-10-02 | 상동 [P3] |
| CLS(Celestica) | Jill Kale 외 이사진 | Director | — | RSU 베스팅/주식단위 지급(재량매매 아님) | 소규모(건별 수십~수백 단위) | 2026-09-30~10-01 | Kalkine Media/StockTitan [P3] |
| NVDA, AVGO, APLD, VRT, SMCI | — | — | — | — | — | — | N/A — 10/1~4 기간 중 신규 Form 4 공시 확인 안 됨(NVDA Huang 관련 보도된 거래는 1차 EDGAR로 미확인돼 제외) |

---

## [8] 향후 14일 주요 일정 (2026-10-05~10-19)

**경제 일정**

| 날짜 | 시각(ET·KST) | 이벤트 | 컨센서스 | 이전치 | 출처 |
|------|--------------|--------|----------|--------|------|
| 2026-10-05(금일) | 10:00 ET · 23:00 KST | ISM 서비스업 PMI(9월) | 확인 필요 | 확인 필요 | financecalendar.com [P3] |
| 2026-10-14 | 08:30 ET | CPI / Core CPI(9월) | 확인 필요 | 확인 필요 | fedratecalc.com [P3] |
| 2026-10-15 | 08:30 ET | PPI(9월) | 확인 필요 | 확인 필요 | fedratecalc.com [P3] |
| 2026-10-15 | 08:30 ET | 소매판매(9월) | 확인 필요 | 확인 필요 | 경제캘린더 집계 [P3] |

> 참고: 2026-10-01부터 시작된 연방정부 shutdown으로 10월 이후 일부 지표 발표 일정이 변경될 수 있다는 보도가 있어(The Hill [P2]) 위 일정은 변경 가능성을 열어둬야 함. 10/27-28 FOMC는 14일 범위를 벗어나 본 표에서 제외(금리전망은 [2] 참조).

**기업 일정**

| 날짜 | 기업 | 이벤트 | 컨센서스 EPS | 컨센서스 매출 | 출처 |
|------|------|--------|--------------|---------------|------|
| 2026-10-06~07 | AMZN | Prime Big Deal Days 2026 쇼핑 행사 | — | — | Amazon 공식(aboutamazon.com) [P1] |
| 2026-10-13 | JPM, GS, WFC, C | 3분기 실적 발표 | JPM 약 $5.82~5.84(확인 필요) 등 — 1차 컨센서스 제공처 미확인, 확인 필요 | JPM 약 $50.6B(확인 필요) | 2차 집계(moneymorning.com, 2026-09-25) [P3] |
| 2026-10-13 | UNH | 실적 발표 예정 | 확인 필요 | 확인 필요 | 0_data.md Finnhub 수집분(Yahoo) [P3] |
| 2026-10-14 | BAC, MS | 3분기 실적 발표 | BAC 약 $1.17~1.18(확인 필요) | 확인 필요 | 2차 집계(moneymorning.com) [P3] |
| 2026-10-15경 | USB, SCHW | 3분기 실적 발표(일정 확인 필요) | 확인 필요 | 확인 필요 | 2차 집계(moneymorning.com) [P3] |

---

## [9] 오늘의 사실 목록 (순위 없음)

```
[1] S&P500 +0.73%(7,722.72), 9월 고용부진으로 긴축우려 완화 보도 · CNBC [P2]
[1] 나스닥종합 +1.2% 사상최고, 엔비디아 랠리 동반 보도 · CNBC [P2]
[1] Dow +0.5%(51,176.96) · CNBC [P2]
[1] SOX 등락률 출처 불일치로 N/A, SOXX +2.18% 참고 · GuruFocus [P3]
[1] Brent $102.25(-0.06%), 단일출처 · Fortune [P3]
[1-A] VIX 15.31(-6.59%), VIX3M/VIX 1.176(콘탱고) · CBOE [P1]
[1-A] SPX Put/Call(거래량) 1.502, QQQ Put/Call(거래량) 1.551 · CBOE [P1]
[2] 미 10년물 5.281%, 2년물 4.839%, 스프레드 +44bp · CNBC [P2]
[2] Fed 부의장 Jefferson, "인플레이션 상방 리스크" 언급(10/1 연설) · Fed [P1]
[2] CME FedWatch, 10월 FOMC 동결확률 약 77~78% · CNBC [P2]
[3] 9월 비농업고용 +29,000명(예상 +84,000명), 실업률 4.2% · BLS [P1]
[3] 신규실업수당청구 197,000건(예상 20만건) · Bloomberg [P2]
[3] ISM 제조업 PMI 54.5(전월 54.6) · ISM [P1]
[4] Nike 약 -9~10%, FY27 가이던스 부진 및 구조조정 발표 · CNBC [P2]
[4] WDC·STX 급락, 도시바 HDD 증설 발표가 배경 · Benzinga [P3]
[4] Synaptics·onsemi 인수구조 변경(전량현금 $123/주)에 SYNA 급등 · SEC 8-K [P1]
[4] Accenture 실적서프라이즈로 +16~22% · CNBC [P2]
[4-A] OPEC+, 11월 산유쿼터 동결 합의(중동분쟁 영향) · Bloomberg [P2]
[4-A] AWS CEO, 데이터센터 반대 확산이 AI 경쟁력 리스크라고 발언 · TheStreet [P3]
[5] Broadcom, Anthropic에 최대 $42B 대출(IPO서류 공개, 이해상충 명시) · Reuters [P2]
[5] SMCI, 엔비디아 Vera Rubin 기반 서버랙 출하 개시 · Foreign Policy Journal [P3]
[5] Applied Digital, Polaris Forge 1 가동용량 250MW 도달 · Foreign Policy Journal [P3]
[6] MSFT, Roslansky(前LinkedIn CEO) 연말 퇴사 발표 · MS블로그 [P1]
[6] NVDA 이사회, $150B 추가 자사주매입 승인(누적 $235B) · CNBC [P2]
[6] 영국법원, Apple·Amazon 반독점소송 일부 진행 허용 · Reuters [P2]
[6] FTC vs Amazon 반독점소송 재판기일 10/13 지정 · Bloomberg Law [P2]
[6] 테슬라 3분기 인도 486,532대, 시장예상 상회 · Tesla IR [P1]
[7-A] Credo COO, 10b5-1 플랜 따라 5만주 매도(10/1) · StockTitan [P3]
[8] 10/13~15 대형은행 3분기 실적 발표 예정 · 2차집계 [P3]
```
