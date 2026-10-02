# 미국 시장 데일리 수집 결과 (Collect)
# 기준일: 2026-10-03 (토) · 미국 정규장 종가 기준(2026-10-02 금) · 실행모드: 데일리
# 생성시각(KST): 2026-10-03 06:33

---

## [1] 미국 주요 지수 〔데일리〕

| 항목 | 종가/수치 | 등락률 | (보도된) 원인 | 출처+태그 |
|------|-----------|--------|----------------|-----------|
| S&P500 | 7,722.72 | +0.73% (+56.27pt) | 9월 비농업고용 예상 하회(2.9만 명) → 연준 추가 긴축 가능성 후퇴 기대가 기술주 매수로 이어졌다고 보도 | CNBC · "Labor market faltered in September as jobs increased by just 29,000, unemployment rate rose to 4.2%" · 2026-10-02 · https://www.cnbc.com/2026/10/02/jobs-report-september-2026.html [P2] |
| NASDAQ 종합 | 27,190.86 | +1.19% (+319.27pt) | 고용 서프라이즈 미스 이후 금리 상승 베팅 축소, 엔비디아 사상 최고가 경신이 지수 견인 | Yahoo Finance · "Dow, S&P 500, Nasdaq rally as Fed rate-hike expectations fade, tech gains" · 2026-10-02 · https://finance.yahoo.com/markets/live/stock-market-today-friday-october-2-dow-sp-500-nasdaq-september-jobs-report-080623878.html [P2] |
| Dow Jones 산업평균 | 51,176.96 | +0.49% (+250.40pt) | 위와 동일(고용지표 발표 후 금리 상승 기대 후퇴) | CNBC · 상동 · 2026-10-02 [P2] |
| Russell 2000 | 2,835.03 | +1.01% (+28.41pt) | 개별 보도된 원인 확인 안 됨 | Yahoo Finance · "Russell 2000 Index (^RUT)" 시세 페이지 · 2026-10-02 [P2] — 주: 타 매체(24/7wallst 계열) 집계치는 2,833~2,835 구간으로 소폭 상이, 본 표는 Yahoo Finance 값 채택 |
| SOX (필라델피아 반도체지수) | N/A | N/A | — | 검색으로 2026-10-02 종가 확정 불가(확인된 자료는 10-01 종가 12,829.00까지만 존재) [N/A] |
| Brent유 | $102.25/bbl | -$0.06 (약보합) | G7의 디젤·원유 비축분 방출 합의로 공급 우려 완화 | CNBC · "Oil prices lower as G7 nations to release diesel stocks, Saudis reportedly plan attack on Houthis" · 2026-10-02 · https://www.cnbc.com/2026/10/02/oil-wti-brent-diesel-stock-release-europe.html [P2] |

---

## [1-A] 선물·변동성 구조 〔0_data.md 그대로 인용, 검색 없음〕

### 선물 (한국 아침 시점, 기준시각 2026-10-02 16:59 ET)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 |
|------|------|-------------|-----------|-----------|
| S&P500 선물 (ES) | `ES=F` | 7,776.5 | +0.68% | 7,724 |
| 나스닥100 선물 (NQ) | `NQ=F` | 31,049 | +0.94% | 30,760.5 |
| 다우 선물 (YM) | `YM=F` | 51,485 | +0.48% | 51,241 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,851.8 | +0.88% | 2,826.9 |

출처: CBOE / CME (Yahoo chart API 자동수집) [P1]

### 변동성 구조 (기준시각 2026-10-02 16:15~17:00 ET)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 |
|------|------|-------------|-----------|-----------|
| VIX (30일) | `^VIX` | 15.31 | -6.59% | 16.39 |
| VIX9D (9일) | `^VIX9D` | 12.06 | -13.86% | 14 |
| VIX3M (3개월) | `^VIX3M` | 18.01 | -3.07% | 18.58 |
| VVIX | `^VVIX` | 87.02 | -5.42% | 92.01 |
| SKEW | `^SKEW` | 144.88 | +1.48% | 142.77 |

출처: CBOE / CME (Yahoo chart API 자동수집) [P1]

기간구조 비율: VIX3M/VIX = 1.176(콘탱고) · VIX/VIX9D = 1.269(콘탱고) — 분류명일 뿐, 해석 없음.

### Put/Call 비율 (CBOE 옵션 체인 직접 집계, 직전 정규장 기준)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.155 | 1.426 | 2,415,022 | 2,790,016 | 29,292 |
| 나스닥100 ETF 옵션 (QQQ) | 1.058 | 1.452 | 4,523,424 | 4,785,487 | 11,432 |

출처: CBOE 지연 시세 (자동수집) [P1]

---

## [2] 금리 / 연준 〔데일리〕

| 항목 | 사실 내용(발언·수치) | 출처+태그 |
|------|----------------------|-----------|
| 미 10년물 국채금리 | 5bp 상승, 5.281% | CNBC · "10-year Treasury yield ticks higher despite weaker-than-expected jobs report" · 2026-10-02 · https://www.cnbc.com/2026/10/02/treasury-yields-bonds-nonfarm-payrolls.html [P2] |
| 미 2년물 국채금리 | 5bp 상승, 4.839% | CNBC · 상동 · 2026-10-02 [P2] |
| 10Y-2Y 스프레드 | 5.281% - 4.839% = +0.442%p (산술 계산치) | 산출: 상기 두 수치 기반 [P2] |
| 차기 FOMC(2026-10-28) 금리 동결 확률 | 약 74%(동결), 인상 약 25~26%, 인하 0% — 현재 기준금리 3.75~4.00% | CME FedWatch 기반 집계 사이트(quadesto.com/growbeansprout.com 등 복수 소스 교차 확인) · 2026-10-02 기준 [P3] |
| 최근 FOMC(2026-09) 결과 | FOMC가 만장일치로 기준금리 0.25%p 인상, 3.75~4.00%로 설정 | Federal Reserve · FOMC statement · 2026-09-17 · https://www.federalreserve.gov/newsevents/pressreleases/monetary20260617a.htm [P1] — 주: 보도 인용 날짜 표기가 자료마다 상이해 정확한 9월 회의일자는 "확인 필요" |
| Fed 의장 발언(9월 회의 후 기자회견) | Kevin Warsh 의장: "인플레이션이 너무 높고, 너무 오래 지속되고 있다" | 검색 집계 자료(1차 회견 원문 링크 미확보, 인용출처 2차) [P3] |

---

## [3] 주요 경제지표 〔조건부 — 발표 있었음〕

| 지표 | 발표시각(ET·KST) | 발표치 | 예상치 | 이전치 | 서프라이즈(산술값) | 출처 |
|------|------------------|--------|--------|--------|---------------------|------|
| 비농업고용(NFP, 9월) | 2026-10-02 08:30 ET · 2026-10-02 21:30 KST | +29,000명 | +84,000명 | 7월 -10,000(수정) · 8월 +133,000(수정) | -55,000 (발표치-예상치) | CNBC · "Labor market faltered in September as jobs increased by just 29,000, unemployment rate rose to 4.2%" · 2026-10-02 · https://www.cnbc.com/2026/10/02/jobs-report-september-2026.html [P2]; BLS Employment Situation · https://www.bls.gov/news.release/empsit.nr0.htm [P1] |
| 실업률(9월) | 2026-10-02 08:30 ET | 4.2% | 4.1% | 4.1%(8월) | +0.1%p | 상동 [P1][P2] |
| 평균시간당임금(9월, MoM) | 2026-10-02 08:30 ET | +0.1%($37.81) | N/A | N/A | N/A | Yahoo Finance · "U.S. September 2026 jobs report: payrolls miss forecasts badly" · 2026-10-02 [P2] |
| 평균시간당임금(9월, YoY) | 2026-10-02 08:30 ET | +3.0% | N/A | N/A | N/A | 상동 [P2] |

※ CPI·PPI·소매판매·ISM: 10/2~10/3 사이 발표 없음(다음 CPI는 10/14, PPI 10/15 예정 — [8] 참조).

---

## [4] 특징 종목 〔데일리, ±5% 이상 또는 거래량 급증 — [5]/[5-A]/[6] 제외〕

| 종목 | 티커 | 등락률 | 거래량 | (보도된) 핵심 사실 | 출처+태그 |
|------|------|--------|--------|----------------------|-----------|
| Seagate Technology | STX | -16% (장중) | 급증(보도 기준, 정확 수치 N/A) | Toshiba가 필리핀 공장에 약 4억 달러(600억 엔) 투자해 HDD 생산능력을 2027회계연도까지 2배로 늘린다는 닛케이아시아 보도 이후 급락 | Benzinga/24·7wallst 교차 확인 · "Seagate Tumbles 10%, Western Digital Drops 7% as Toshiba Moves to Double Hard Disk Output" · 2026-10-02 · https://247wallst.com/investing/2026/10/02/seagate-tumbles-10-western-digital-drops-7-as-toshiba-moves-to-double-hard-disk-output/ [P3] — 주: 하락폭이 자료별로 -10%~-16%로 상이, 정확한 종가 기준 등락률은 확인 필요 |
| Western Digital | WDC | -7%~-10% (장중, 자료별 상이) | 급증(정확 수치 N/A) | 상동(Toshiba HDD 증설 보도) | 상동 [P3] |
| McCormick | MKC | 약 +5% | N/A | 3분기 실적이 시장 예상치를 상회해 발표 후 상승 | 검색 집계(1차 실적자료 미확보) [P3] — 주: 구체 EPS·매출 수치 확인 필요 |

※ Synaptics(SYNA)·ChipMOS(IMOS)·MaxLinear(MXL)·Vishay(VSH)·Penguin Solutions(PENG) 등 반도체 소형주 두 자릿수 등락 보도가 있었으나, 발생 일자·보도 매체가 명확히 교차검증되지 않아 본 표에서 제외(N/A 처리).

---

## [4-A] 섹터별 뉴스 〔0_data.md Finnhub 수집분 활용, [4]/[5]/[6]과 비중복〕

| 섹터 | 종목 | 사실 내용 | 발행시각(ET) | 출처+태그 |
|------|------|-----------|--------------|-----------|
| 금융 | JPM | JPMorgan이 아직 발생하지 않은 손실에 대비한 대손충당금(reserve)을 쌓고 있다는 분석 보도. 3분기 실적은 10월 13일 예정 | 2026-10-02 14:30 | Yahoo(Finnhub 수집) · "JPMorgan (JPM) Reserves for Losses That Have Not Arrived" [P3]; 보강 — Insider Monkey 동일기사 교차확인 [P3] |
| 금융 | JPM(업종 전체) | 은행주가 최근 한 달간 S&P500 대비 1990년 이후 최대폭으로 underperform. KBW Nasdaq Bank Index 8월 중순 고점 대비 -13% | 2026-10-02 13:38 | Yahoo(Finnhub 수집) · "Bank Stocks Are Lagging the S&P 500 by the Most Since 1990" [P3]; 보강 — 24/7 Wall St. 동일기사 · 2026-10-02 · https://247wallst.com/investing/etf/2026/10/02/bank-stocks-are-lagging-the-sp-500-by-the-most-since-1990/ [P3] |
| 헬스케어 | UNH, HUM | UnitedHealth(약 39만 명 영향)와 Humana(약 60만 명 영향)가 2027년 메디케어 어드밴티지(Medicare Advantage) 플랜 일부를 종료. UnitedHealthcare는 10월 2일자로 비갱신 통지 발송 | 2026-10-02 13:26 | Yahoo(Finnhub 수집) · "UnitedHealth and Humana cutting Medicare Advantage plans in 2027" · 보강 — Axios · "Medicare Advantage benefit cuts 2027" · 2026-09-10 [P3] |
| 에너지 | XOM | G7의 디젤·원유 비축분 방출 합의가 에너지주에 미치는 영향 분석 보도 (가격은 [1]에 기재) | 2026-10-02 12:38 | Yahoo(Finnhub 수집) · "The G-7 Oil Bailout Is Surprisingly Good News for Energy Stocks" [P3] |
| 소비재·유통 | AMZN | AWS 투자 대비 수익성에 대한 투자자 분석 기사(신규 수치 공시 아님) | 2026-10-02 14:26 | Yahoo(Finnhub 수집) · "What Are Amazon Investors Paying for AWS Without Investment Gains?" [P3] |

---

## [5] AI 인프라 — 공급측 〔데일리〕

| 기업 | 뉴스 제목 | 사실 내용 | 출처일자 | 출처+태그 |
|------|-----------|-----------|----------|-----------|
| NVDA | Nvidia 사상 최고가 경신, 시총 5.7조 달러 돌파 | 장중 최대 +2.8%, 한때 237.88달러까지 상승하며 5월 이후 처음 사상 최고가 경신. 시총 5.7조 달러 돌파(블룸버그는 "6조 달러 근접"으로 보도). 이사회가 자사주 매입 한도를 1,500억 달러 늘려 2028회계연도까지 총 2,350억 달러로 확대(사상 최대 증액 규모)한 점, Nvidia와 SoftBank가 OpenAI 투자 각 300억 달러 공약 중 마지막 100억 달러 트랜치를 완료한 점이 거론됨 | 2026-10-02 | Bloomberg · "Nvidia Shares Hit Record High, Market Value Approaches $6 Trillion" · 2026-10-02 · https://www.bloomberg.com/news/articles/2026-10-02/nvidia-hits-first-record-since-may-as-value-nears-6-trillion [P2]; 보강 — StocksToTrade · 2026-10-02 [P3] |
| AVGO | Broadcom, Anthropic에 최대 420억 달러 칩 리스 자금 대출 | Broadcom이 Anthropic의 TPU 컴퓨팅 리스를 위해 최대 420억 달러를 대출하는 방안을 추진 중이라고 Reuters가 단독 보도(SEC 신고서 기반). 여기에 별도로 최대 600~700억 달러 규모 칩 생산자금 조달 계획이 추가로 보도되어 합산 시 최대 약 1,020억 달러 규모로 언급됨 | 2026-10-01~10-02 | CNBC · "Broadcom to lend Anthropic up to $42 billion to lease its chips, filing says" · 2026-10-01 · https://www.cnbc.com/2026/10/01/broadcom-lending-anthropic-42-billion-chips-reuters.html [P2]; 보강 — Yahoo Finance · "Broadcom Bets $102 Billion on Anthropic Chips" · 2026-10-02 [P3] |
| AMD | 프리마켓 상승 | 10/2 프리마켓에서 +4.1% 상승 보도(구체 촉매는 개별 확인 안 됨) | 2026-10-02 | 검색 집계(1차 출처 미확보) [N/A] — 주: 상승률 수치의 1차 출처 미확인으로 참고용 |
| TSM | 프리마켓 상승 | 10/2 프리마켓에서 +2.4% 상승 보도(구체 촉매는 개별 확인 안 됨) | 2026-10-02 | 검색 집계(1차 출처 미확보) [N/A] — 주: 상승률 수치의 1차 출처 미확인으로 참고용 |
| ANET, CRDO, CLS, VRT, SMCI, APLD | — | 2026-10-02 관련 개별 뉴스 검색으로 확인 안 됨 | — | [N/A] |

---

## [5-A] AI 인프라 — 수요측/하이퍼스케일러 CAPEX

신규 변동 없음 — 하이퍼스케일러(MSFT·AMZN·GOOGL·META) 실적 발표 전(3분기 실적 시즌은 10월 중순 이후 본격화, 빅테크는 대부분 10월 말 발표 예정). 직전 가이던스 유지.

---

## [6] 시총상위10 — AI무관 일반이슈

신규 변동 없음 — 실적시즌 본격 시작 전(JPMorgan 등 대형은행 실적은 2026-10-13 예정, PepsiCo 2026-10-08, Delta 2026-10-09).

---

## [7] 기관·대형 자금 수급 〔데일리〕

| 항목 | 종목 | 사실 내용 | 규모(수치) | 출처+태그 |
|------|------|-----------|-------------|-----------|
| ETF 자산 규모 | SMH (VanEck 반도체 ETF) | 2026-10-01 기준 순자산 규모 | 757.5억 달러 | 검색 집계(VanEck 공식 페이지 간접 인용) · 2026-10-01 기준 [P3] |
| ETF 자금 유출입(최근 1개월, 10/2 기준 아님) | QQQ (Invesco) | 최근 1개월 순유출, 단 최근 1주는 순유입 전환 | 1개월 -67.2억 달러 / 1주 +31.4억 달러 | 검색 집계 · 일자 특정 불가 [N/A] — 10/2 당일 수치 아님, 참고용 |
| ETF 자금 유입(과거 사례, 10/2 아님) | SOXX (iShares 반도체 ETF) | 최근 3개월 누적 유입 | 82.3억 달러(자산의 18.8%) | 검색 집계 · 기준일 불명확 [N/A] — 10/2 당일 수치 아님 |

※ 10/2 당일 블록딜·대량거래·옵션 이상거래에 대한 구체적 사실은 검색으로 확인되지 않음. 위 ETF 수치는 모두 10/2 당일 플로우가 아닌 최근 기간 누적치로, 당일 수급 근거로 사용 불가함을 명시.

---

## [7-A] Insider Trading (Form 4) 〔조건부〕

| 기업 | 공시일 | 내부자 | 거래유형 | 사실 내용 | 출처+태그 |
|------|--------|--------|----------|-----------|-----------|
| NVDA | 2026-09-18 | Mark A. Stevens (이사, 신탁) | 매도(Rule 10b5-1 플랜) | 신탁을 통해 136.6만 주 매도(약 2.2억 달러 상당, 주당 약 220달러) | SEC Form 4 · https://www.sec.gov/Archives/edgar/data/0001045810/ [P1] |
| NVDA | 2026-09-21 | Timothy S. Teter (EVP·법무총괄) | 매도(Rule 10b5-1 플랜) | 12,483주(@$222.19)·13,478주(@$223.05)·4,499주(@$223.75) 매도 | SEC Form 4 [P1] |
| AVGO | 2026-09-15 | Mark David Brazeal (최고법무책임자) | 매도 | 8,059주 매도(주당 $339.27) | SEC Form 4 · https://www.sec.gov/Archives/edgar/data/0001730168/000173016826000082/wk-form4_1789682754.xml [P1] |
| AVGO | 2026-09-15 | Amie Thuener O'Toole (CFO) | 매도 | 1,554주 매도(주당 $339.27) | SEC Form 4 [P1] |
| CRDO, CLS, APLD, VRT, SMCI | — | — | — | 2026-10-02 전후 신규 Form 4 공시 검색으로 확인 안 됨 | [N/A] |

※ 위 NVDA·AVGO 공시는 모두 9월 중순~하순 공시로, 10/2 당일 신규 공시는 아님 — 가장 최근 확인된 공시로 참고 제시.

---

## [8] 향후 14일 주요 일정 (2026-10-03 ~ 2026-10-17)

### 경제 일정

| 날짜(ET) | 지표/이벤트 | 컨센서스 |
|----------|-------------|----------|
| 2026-10-07 | FOMC 9월 의사록(2:00 PM ET) | N/A |
| 2026-10-14 | 9월 CPI | N/A(확인 필요) |
| 2026-10-15 | 9월 PPI | N/A(확인 필요) |
| 2026-10-15 | 9월 소매판매(Advance Retail Sales) | N/A(확인 필요) |
| 2026-10-27~28 | FOMC 정례회의(10/28 결과 발표) | 동결(3.75~4.00%) 확률 약 74%(CME FedWatch 교차 집계) [P3] |
| 2026-10-29 | 9월 PCE 물가지수 | N/A(확인 필요) |

### 기업 일정

| 날짜 | 기업 | 이벤트 | 컨센서스 |
|------|------|--------|----------|
| 2026-10-08 | PepsiCo (PEP) | 3분기 실적 | EPS 2.30달러, 매출 250억 달러(컨센서스) |
| 2026-10-09 | Delta Air Lines (DAL) | 3분기 실적 | EPS 2.01달러, 매출 175.9억 달러(컨센서스) |
| 2026-10-13 | JPMorgan Chase, Wells Fargo, Citigroup, Goldman Sachs | 3분기 실적 | N/A(확인 필요) |
| 2026-10-14 | Bank of America, Morgan Stanley | 3분기 실적 | N/A(확인 필요) |

---

## [9] 오늘의 사실 목록 (순위 없음, 섹션순)

- [1] S&P500 7,722.72 마감 +0.73% · CNBC [P2]
- [1] NASDAQ 종합 27,190.86 마감 +1.19% · Yahoo Finance [P2]
- [1] Dow 51,176.96 마감 +0.49% · CNBC [P2]
- [1] Russell 2000 2,835.03 마감 +1.01% · Yahoo Finance [P2]
- [1] Brent유 $102.25/bbl 약보합, G7 디젤·원유 비축분 방출 합의 보도 · CNBC [P2]
- [1-A] VIX 15.31(-6.59%), VIX9D 12.06(-13.86%), VIX3M 18.01(-3.07%) · CBOE/CME 자동수집 [P1]
- [1-A] SPX Put/Call(거래량) 1.155, QQQ Put/Call(거래량) 1.058 · CBOE 자동수집 [P1]
- [2] 미 10년물 5.281%(+5bp), 2년물 4.839%(+5bp) · CNBC [P2]
- [2] 차기 FOMC(10/28) 동결 확률 약 74%(CME FedWatch 기반) [P3]
- [2] 직전 FOMC(9월)에서 기준금리 0.25%p 인상해 3.75~4.00%로 설정 · Federal Reserve [P1]
- [3] 9월 비농업고용 +2.9만 명(예상 +8.4만 명 대비 -5.5만 명 미스), 실업률 4.2%(예상 4.1%) · BLS/CNBC [P1][P2]
- [3] 7월 고용 -1.0만 명, 8월 +13.3만 명으로 하향 수정 · Yahoo Finance [P2]
- [4] Seagate(STX)·Western Digital(WDC) 급락, Toshiba HDD 증설 계획 보도가 촉매 · 24/7 Wall St. [P3]
- [4-A] UnitedHealth(약 39만 명)·Humana(약 60만 명) 2027년 메디케어 어드밴티지 플랜 종료, 10/2자 비갱신 통지 발송 · Yahoo Finance/Axios [P3]
- [4-A] 은행주, 최근 1개월간 S&P500 대비 1990년 이후 최대 낙폭으로 underperform · 24/7 Wall St. [P3]
- [5] Nvidia 장중 사상 최고가 경신(최대 +2.8%, $237.88), 시총 5.7조 달러 돌파, 자사주 매입 한도 1,500억 달러 증액(총 2,350억 달러) · Bloomberg [P2]
- [5] Broadcom, Anthropic에 최대 420억 달러 칩 리스 자금 대출 추진(별도 최대 600~700억 달러 조달 계획 보도) · CNBC [P2]
- [7-A] NVDA 이사 Mark A. Stevens, 2026-09-18 136.6만 주 매도(약 2.2억 달러) · SEC Form 4 [P1]
- [8] 다음 CPI 10/14, PPI 10/15, FOMC 10/27~28 예정 · 검색 집계 [P3]
- [8] JPMorgan 등 대형은행 3분기 실적 10/13 예정 · 검색 집계 [P3]
