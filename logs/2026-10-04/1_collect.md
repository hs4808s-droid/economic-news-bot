# 미국 시장 데일리 수집 결과 (Collect)
# 기준일: 2026-10-04 (일) · 미국 정규장 종가 기준(직전 거래일 2026-10-02 금) · 실행모드: 데일리
# 생성시각(KST): 2026-10-04 07:30

---

## [1] 미국 주요 지수 (2026-10-02 금 정규장 종가)

| 항목 | 종가/수치 | 등락률 | (보도된) 원인 | 출처+태그 |
|------|-----------|--------|----------------|-----------|
| S&P500 | 7,722.72 (+56.27pt) | +0.73% | 9월 비농업고용 +29,000명(예상 +84,000명 대폭 하회), 실업률 4.2%로 상승 → 연준 10월 추가 긴축 가능성 약화 기대 | AP via WTOP · "How major US stock indexes fared Friday 10/2/2026" · 2026-10-02 · https://wtop.com/news/2026/10/how-major-us-stock-indexes-fared-friday-10-2-2026 [P2] |
| 다우존스 | 51,176.96 (+250.40pt) | +0.49% | 상동(9월 고용 서프라이즈 하회) | AP via WTOP · 상동 · 2026-10-02 [P2] |
| 나스닥종합 | 27,190.86 (+319.27pt) | +1.19% | 상동 | AP via WTOP · 상동 · 2026-10-02 [P2] |
| 러셀2000 | 2,832.90 (+26.27pt) | +0.94% | 상동 | AP via WTOP · 상동 · 2026-10-02 [P2] |
| SOX (반도체) | 13,136.67 (+307.74pt) | +2.40% | 상동 + 반도체 개별 종목 강세(Teradyne·ON Semi 등) | Investing.com/Nasdaq Indexes · 2026-10-02 [P2] |
| Brent유 | $102.25(정규 마감, -0.06%) 또는 $102.70(집계치, +0.38%) — **출처 간 수치 상충, 확인 필요** | N/A | 걸프 수출 재개가 美 군사 동향 영향 상쇄 (보도) | OilPrice.com/EnergyNow · "Oil Ends Volatile Week Mixed" · 2026-10-02 [P2]; TradingEconomics 집계 [P3]; Fortune "Current price of oil as of Oct. 2 2026"(09:15 ET 장중 $103.37) [P2] |

> Brent는 정규마감가 보도가 매체 간 일치하지 않아 단일 수치를 확정하지 못함. WTI는 `0_data.md` 기준(CL=F 91.11, -1.90%)을 [1-A] 아님에도 매크로 섹션에 이미 수록되어 있어 여기서 반복하지 않음.

---

## [1-A] 선물·변동성 구조 (한국 아침 시점 · `0_data.md`에서 그대로 옮김)

**선물 (한국 아침 시점)** — ES · NQ · YM · RTY

| 항목 | 현재가 | 전일 대비 | 직전 종가 | 기준시각(ET) | 출처+태그 |
|------|--------|-----------|-----------|--------------|-----------|
| S&P500 선물 (ES) | 7,777.25 | +0.69% | 7,724 | 2026-10-02 17:00 | Yahoo chart API (CME 선물) [P1] |
| 나스닥100 선물 (NQ) | 31,061.75 | +0.98% | 30,760.5 | 2026-10-02 16:59 | Yahoo chart API (CME 선물) [P1] |
| 다우 선물 (YM) | 51,477 | +0.46% | 51,241 | 2026-10-02 16:59 | Yahoo chart API (CME 선물) [P1] |
| 러셀2000 선물 (RTY) | 2,850.9 | +0.85% | 2,826.9 | 2026-10-02 16:59 | Yahoo chart API (CME 선물) [P1] |

**변동성 구조** — VIX · VIX9D · VIX3M · VVIX · SKEW

| 항목 | 수치 | 전일 대비 | 출처+태그 |
|------|------|-----------|-----------|
| VIX (30일) | 15.31 | -6.59% | CBOE (Yahoo chart API 자동수집) [P1] |
| VIX9D (9일) | 12.06 | -13.86% | CBOE (Yahoo chart API 자동수집) [P1] |
| VIX3M (3개월) | 18.01 | -3.07% | CBOE (Yahoo chart API 자동수집) [P1] |
| VVIX (VIX의 변동성) | 87.02 | -5.42% | CBOE (Yahoo chart API 자동수집) [P1] |
| SKEW (테일리스크) | 144.88 | +1.48% | CBOE (Yahoo chart API 자동수집) [P1] |

**VIX 기간구조 (산출 비율)**

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.176 | 콘탱고 |
| VIX / VIX9D | 1.269 | 콘탱고 |

**Put/Call 비율** — SPX · QQQ (CBOE 옵션 체인 집계)

| 대상 | P/C(거래량) | P/C(미결제약정) | 콜 거래량 | 풋 거래량 | 출처+태그 |
|------|-------------|------------------|-----------|-----------|-----------|
| S&P500 지수옵션 (SPX) | 1.502 | 1.412 | 633,036 | 950,983 | CBOE (옵션 체인 직접 집계, 지연시세) [P1] |
| 나스닥100 ETF 옵션 (QQQ) | 1.551 | 1.414 | 1,112,076 | 1,725,259 | CBOE (옵션 체인 직접 집계, 지연시세) [P1] |

**매크로 (참고 — `0_data.md` 원문)**

| 항목 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) | 출처+태그 |
|------|-------------|-----------|-----------|--------------|-----------|
| 미 10년 국채선물 (ZN=F) | 104.36 | -0.28% | 104.66 | 2026-10-02 16:59 | Yahoo chart API [P1] |
| 금 (GC=F) | 4,162.3 | -0.95% | 4,202.3 | 2026-10-02 16:59 | Yahoo chart API [P1] |
| WTI (CL=F) | 91.11 | -1.90% | 92.87 | 2026-10-02 17:00 | Yahoo chart API [P1] |
| 달러지수 (DXY) | 101.92 | -0.17% | 102.1 | 2026-10-02 16:59 | Yahoo chart API [P1] |

---

## [2] 금리 / 연준

| 항목 | 사실 내용(발언·수치) | 출처+태그 |
|------|----------------------|-----------|
| Fed 부의장 Philip Jefferson 연설 | "최근 인플레이션은 에너지 가격·AI 투자 붐·무역정책 변화가 겹친 'cascade of shocks'(연쇄 충격)의 결과"라고 언급. 다음 통화정책 방향에 대해 "may need more time"(더 많은 시간이 필요할 수 있다)라고 발언 | Federal Reserve "Speech by Vice Chair Jefferson" · 2026-10-01 · https://www.federalreserve.gov/newsevents/speech/jefferson20261001a.htm [P1] |
| Fed 이사 Christopher Waller 연설 | "FRED Con 2026"에서 연준 경제데이터 관련 연설 (통화정책 방향에 대한 구체적 발언 확인 불가) | Federal Reserve · 2026-10-01 · https://www.federalreserve.gov/newsevents/speech/waller20261001a.htm [P1] |
| 미 10년물 국채수익률 | 약 5.27~5.28% (9/30 5.29%, 10/1 5.24%) — 2002년 4월 이후 최고 수준으로 복수 매체 보도 | Federal Reserve H.15 · https://www.federalreserve.gov/releases/h15/ [P1] |
| 미 2년물 국채수익률 | 4.78% | CNBC US2Y 쿼트 · https://www.cnbc.com/quotes/US2Y [P2]; FRED DGS2 [P1] |
| 10Y-2Y 스프레드 | 약 +0.49~0.50%p (약 49~50bp) | 상기 두 출처로부터 산출 [P1] |
| CME FedWatch (10/27~28 FOMC) | 동결 약 80%, 25bp 인상 약 17~21%, 인하 약 1~2%. 1주 전 인상확률 36%에서 9월 고용 서프라이즈 하회 이후 동결 쪽으로 이동 | CNBC "Traders now see little chance of a Fed rate hike in October after weak jobs report" · 2026-10-02 · https://www.cnbc.com/2026/10/02/fed-rate-hike-odds-decline-after-september-jobs-report.html [P2] |

> 참고: FOMC 정례회의 일자는 10월 27~28일(수)로 확인됨.

---

## [3] 주요 경제지표

| 지표 | 발표시각(ET·KST) | 발표치 | 예상치 | 이전치 | 서프라이즈(발표치−예상치) | 출처 |
|------|------------------|--------|--------|--------|----------------------------|------|
| 비농업고용(Payroll, 9월) | 2026-10-02 08:30 ET · 2026-10-02 21:30 KST | +29,000명 | +84,000명 | 8월 +133,000명(수정) | -55,000명 | Bloomberg "US Job Growth Misses Estimates, Unemployment Rate Edges Higher in September" · 2026-10-02 · https://www.bloomberg.com/news/articles/2026-10-02/us-firms-add-just-29-000-jobs-unemployment-rate-ticks-up [P2] |
| 실업률(9월) | 2026-10-02 08:30 ET | 4.2% | N/A | 이전월 대비 상승 | N/A | Bloomberg 상동 [P2] |
| 평균시간당임금(9월, 전월) | 2026-10-02 08:30 ET | +0.1% | 예상 하회 | N/A | N/A | Bloomberg 상동 [P2] |
| 평균시간당임금(9월, 전년) | 2026-10-02 08:30 ET | +3.0% (2021년 이후 최저) | N/A | N/A | N/A | Bloomberg 상동 [P2] |
| 7월 고용 (하향수정) | — | -10,000명 | — | — | — | Bloomberg 상동 [P2] |
| ISM 제조업/서비스업 PMI, 소매판매(9월) | — | N/A — 10/2~10/4 기간 내 발표 확인 불가 | N/A | N/A | N/A | N/A |

> 정부 셧다운으로 인한 BLS 발표 연기: **없음.** 2026-09-02 임시예산안(CR) 서명으로 연방정부 예산은 2026-12-11까지 확보되어 9월 고용보고서는 정상 발표됨. 출처: Breaking Defense "House passes funding stopgap, averting government shutdown in October" · https://breakingdefense.com/2026/09/house-passes-funding-stopgap-averting-government-shutdown-in-october/ [P3]

---

## [4] 특징 종목 (2026-10-02, ±5% 이상/거래량 급증)

| 종목 | 티커 | 등락률 | 거래량 | (보도된) 핵심 사실 | 출처+태그 |
|------|------|--------|--------|---------------------|-----------|
| Accenture | ACN | 급등(매체 간 16~20%대로 상충, 정확한 종가 기준 수치 확인 필요) | N/A | FY26 Q4 실적: EPS $3.29(예상 $3.19 상회), 매출 $187억, 연간 신규 북킹 $845억 | CNBC/Benzinga · 2026-10-01~02 [P2] |
| Synaptics | SYNA | +13.76% | N/A | ON Semiconductor의 인수조건이 전액 주식교환→전액 현금($123/주, 총 약 57억 달러)으로 변경, 제3자 비요청 경쟁제안이 계기 | Benzinga/Yahoo Finance · 2026-10-02 [P2] |
| ON Semiconductor | ON | +6.5% | N/A | 상동(Synaptics 인수조건 변경) | Benzinga/Yahoo Finance · 2026-10-02 [P2] |
| Teradyne | TER | 약 +6.4~8.4%(매체 간 상충) | N/A | 도쿄일렉트론과 AI 데이터센터용 테스트 솔루션 파트너십, 신제품(Magnum E2) 발표 | Yahoo Finance/TradingKey · 2026-10-02 [P2] |
| Tesla | TSLA | 약 +5.2% | N/A | Q3 인도량 486,532대(예상 461,974~463,761대 상회) | CNBC · 2026-10-02 [P2] |
| Credo | CRDO | 약 +7.1~7.9%(날짜 상충: 일부 자료는 10/1 FTSE All-World 편입 관련) | N/A | AI 데이터센터 수요·광학 커넥티비티 기대 | Yahoo Finance · 2026-10-01~02 [P2] |
| Stellantis | STLA | 약 -7% | N/A | Berenberg·모건스탠리 신용등급/목표가 하향, 프랑스 공장 EV 배터리 부족으로 10월 생산 중단 | Reuters/Benzinga · 2026-10-02 [P2] |
| 다수 소형주 (NIVF +24.65%, SCKT +27.8%, XRPNW +31.03%) | 각 | 급등 | 급증 | 구체적 호재 사유 확인 불가 | N/A — 사유 미확인 |

> Paramount Skydance(PSKY) 하락 보도는 실제로는 10/1(목) 발생으로 확인되어 10/2 단독 ±5% 변동은 확인 불가 — 본 표에서 제외.

---

## [4-A] 섹터별 뉴스 (`0_data.md` Finnhub 수집분 기준)

| 섹터 | 종목 | 사실 내용(무슨 일이) | 발행시각(ET) | 출처+태그 |
|------|------|----------------------|--------------|-----------|
| 반도체·AI | AVGO | Broadcom이 Anthropic에 최대 420억 달러 대출 제공, 이 자금으로 Anthropic이 Broadcom TPU 용량 리스. 전환가능노트 구조, Anthropic IPO 신청서 통해 확인. Anthropic의 5년 TPU 컴퓨팅 약정 총 1,252억 달러 중 약 1/3에 해당 | 2026-10-01 | Reuters(최초보도)/CNBC "Broadcom to lend Anthropic up to $42 billion to lease its chips, filing says" · https://www.cnbc.com/2026/10/01/broadcom-lending-anthropic-42-billion-chips-reuters.html [P2] (보강: Finnhub 수집 Yahoo 기사와 동일 사건) |
| 반도체·AI | AVGO | Skyworks-Qorvo 합병 관련, 이 딜이 투자케이스를 바꿀 수 있다는 분석 | 2026-10-03 03:47 | SeekingAlpha (Finnhub 수집) [P3] |
| 금융 | JPM(관련 기사) | 9월 고용 서프라이즈 하회로 Fed가 10월 금리인상을 건너뛸 가능성이 높아졌고 12월 인상은 여전히 가능성 있다는 내용 | 2026-10-03 08:47 | Yahoo (Finnhub 수집) [P3] |
| 금융 | JPM(관련 기사) | Jim Cramer가 Q3 '실적 쇄도' 시즌이 지난 분기보다 어려운 환경일 수 있다고 경고 | 2026-10-03 04:31 | Yahoo (Finnhub 수집) [P3] |
| 에너지 | XOM | ExxonMobil 관련, "전쟁 특수"로 기록적 고점에 근접할 수 있다는 분석 기사 | 2026-10-03 01:56 | SeekingAlpha (Finnhub 수집) [P3] |
| 에너지 | XOM | G7의 오일 관련 조치가 에너지주에 긍정적이라는 분석 기사 | 2026-10-02 12:38 | Yahoo (Finnhub 수집) [P3] |
| 헬스케어 | UNH | UnitedHealth 10/13 실적 발표 예정, 투자자가 주목할 지표 소개 | 2026-10-03 07:50 | Yahoo (Finnhub 수집) [P3] |
| 소비재·유통 | AMZN | AWS가 데이터센터 프로젝트 관련 정부기관과의 NDA를 더 이상 사용하지 않는다고 발표. 10억 달러 규모 "Built Together" 지역투자 프로그램 발표, 에너지/수자원 사용량 매년 공개 약속. 하원 법사위(Jamie Raskin) 데이터센터 NDA 조사 개시 직후 발표 | 2026-10-02 (TechCrunch 보도 2026-10-03) | TechCrunch "Amazon responds to data center backlash, says it no longer uses NDAs" · https://techcrunch.com/2026/10/03/amazon-responds-to-data-center-backlash-says-it-no-longer-uses-ndas/ [P2] (Finnhub Yahoo 기사와 동일 사건, 보강 출처 명시) |

---

## [5] AI 인프라 — 공급 측

| 기업 | 뉴스 제목 | 사실 내용(무슨 일이) | 출처일자 | 출처+태그 |
|------|-----------|----------------------|----------|-----------|
| AVGO | Broadcom to lend Anthropic up to $42 billion to lease its chips | Broadcom이 Anthropic에 최대 420억 달러 대출 제공(전환가능노트 구조), 이를 통해 Anthropic이 Broadcom TPU 용량 리스. Anthropic IPO 투자설명서에 "하드웨어 공급자"와 "대출자" 역할 동시수행에 따른 잠재적 이해상충 공시. AVGO 주가 9/30 $351.19 → 10/1 장중 $347.44(-1.1%) → 애프터마켓 $353.87(+0.8%) | 2026-10-01 | Reuters(최초)/CNBC · https://www.cnbc.com/2026/10/01/broadcom-lending-anthropic-42-billion-chips-reuters.html [P2] |
| NVDA | Nebius/CoreWeave GPU 임대료 인상 | GPU 임대가 16.9~21% 인상 보도 | 확인 필요(정확한 날짜 미확인) | 검색 결과 기반 — 출처 상세 미확인 [N/A] |
| NVDA | Amazon-Nvidia Grace Blackwell 리스백 협상설 | $80억 규모 협상설 — 양사 공식 확인 안 됨 | 확인 필요 | 루머 수준 — 미확인 [N/A] |
| AMD | 주가 상승 | 2026-10-01 주가 상승, 구체적 트리거 확인 불가 | 2026-10-01 | N/A — 사유 미확인 |
| TSM | 신규 뉴스 없음 | 10/1~10/3 특별 신규 뉴스 없음, Q3 실적 10/15 예정 | — | N/A |
| ANET | Bernstein 커버리지 개시 | Outperform 등급, 목표가 $250 | 확인 필요(정확한 날짜 미확인) | 출처 상세 미확인 [N/A] |
| CRDO | 임원 지분 처분(아래 [7-A] 참조) | 10b5-1 플랜에 따른 매도 | 2026-10-01~02 | 아래 [7-A] 참조 |
| CLS | CFO 교체 | Todd Ankenmann 신임 CFO 선임 | 2026-10-01 | 출처 상세 미확인 — 추가 검증 필요 [N/A] |
| VRT | King Environmental Services 인수 | Vertiv의 인수 발표 (정확한 발표일 확인 필요) | 확인 필요 | 출처 상세 미확인 [N/A] |
| SMCI | 주가 +4.2%(2026-10-02) | Nvidia Vera Rubin 랙스케일 서버 출하 시작 관련 | 2026-10-02 | 출처 상세 미확인 — 추가 검증 필요 [N/A] |
| APLD | Polaris Forge 1 가동 확대 | 총 250MW 가동, 리스매출 360억 달러로 확대 | 2026-10-02~03 | 출처 상세 미확인 — 추가 검증 필요 [N/A] |

> 위 표 중 "출처 상세 미확인[N/A]" 항목은 리서치 과정에서 사실 자체는 포착되었으나 1차 매체·정확한 타임스탬프까지는 검증하지 못한 항목이다. Analysis 단계 활용 시 주의.

---

## [5-A] AI 인프라 — 수요 측 / 하이퍼스케일러 CAPEX

> 실적시즌 외 — 신규 변동 없음. 직전 가이던스 유지.
- Microsoft: FY26 Q1(10/1 발표) 매출 $900.1억(+17.7%), Azure 연매출 $1000억 돌파 — 출처일자 2026-10-01, CAPEX 세부 수치는 확인 불가 [N/A 세부]
- Amazon·Alphabet·Meta: 10/1~10/3 기간 CAPEX 가이던스 신규 변경 발표 확인 안 됨 — "직전 가이던스 유지(최근 실적 발표 시점 기준)"

---

## [6] 시총 상위 10 — AI 무관 일반 이슈

| 기업 | 사실 내용 | 출처일자 | 출처+태그 |
|------|-----------|----------|-----------|
| AMZN | AWS 데이터센터 NDA 전면 폐지 발표, "Built Together" 10억 달러 지역투자 프로그램, 에너지·수자원 사용량 연례 공개 약속. 하원 법사위 NDA 조사 개시 직후 발표. Microsoft가 약 반년 전 유사 조치 선행 | 2026-10-02~03 | TechCrunch · https://techcrunch.com/2026/10/03/amazon-responds-to-data-center-backlash-says-it-no-longer-uses-ndas/ [P2] |
| MSFT | FY26 Q1 매출 $900.1억(+17.7% YoY), Azure 연매출 $1000억 돌파 | 2026-10-01 | 출처 상세 미확인 — 추가 검증 필요 [N/A] |
| AAPL | EU 앱스토어 규정 2026-10-01 시행 | 2026-10-01 | 출처 상세 미확인 [N/A] |
| GOOGL | Gemini 4("Argon") 공개 | 2026-10-01 | 출처 상세 미확인 [N/A] |
| META | EU WhatsApp 반독점 조사 관련 — 10월 신규 업데이트 확인 불가 | N/A | N/A |
| BRK | Berkshire, Lennar 지분을 22억 달러 규모로 확대 | 확인 필요(정확한 날짜 미확인) | 출처 상세 미확인 [N/A] |
| TSLA | Q3 인도량 486,532대(전년 대비 -2.1%, 컨센서스 461,974~463,761대 상회) | 2026-10-02 | CNBC [P2] |
| TSM | 텍사스 신규 캠퍼스 검토설 | 확인 필요 | 출처 상세 미확인 [N/A] |

---

## [7] 기관·대형 자금 수급

| 항목 | 종목 | 사실 내용 | 규모(수치) | 출처+태그 |
|------|------|-----------|------------|-----------|
| ETF 자금흐름 | SMH/SOXX/QQQ | 10/1~10/3 특정일 단위 순유입/유출 수치 확인 불가. 참고(기간 상이): 9/25 기준 QQQ 주간 +$3.14B(+0.6% AUM), 월간 -$6.72B(-1.4% AUM); SOXX 최근 3개월 +$8.23B(+18.8% AUM); 8월 한 주간 SOXX+SMH+SOXL 합산 $9.8B 유입(SOXX 약 $4.08B, SMH 약 $3.3B) | N/A — 날짜 불일치로 10/2 시점 수치 아님 | ETF.com "Daily ETF Flows" / ETF Trends · 날짜 상이(2026-08~09) [P3] |
| 블록딜 | N/A | 10/1~10/3 특정 블록트레이드 보도 확인 불가 | N/A | N/A — 확인 불가 |

---

## [7-A] Insider Trading (SEC Form 4)

| 기업 | 내부자 | 직책 | 매수/매도 | 거래유형 | 규모 | 거래일 | 출처 |
|------|--------|------|-----------|----------|------|--------|------|
| CRDO | Lam Yat Tung | COO | 증여(배우자) | 재량(증여) | 75,000주 | 2026-09-30 | SEC Form 4 (추정 출처, 세부 접수번호 미확인) [N/A 세부] |
| CRDO | Lam Yat Tung | COO | 매도 | 10b5-1 플랜(2026-04-15 채택) | 50,000주 @ $205.2175 | 2026-10-01 | SEC Form 4 (추정 출처, 세부 접수번호 미확인) [N/A 세부] |
| CRDO | Lam Yat Tung | COO | 매도(세금목적 처분) | 재량/세금목적 | 3,180주 @ $210.17 | 2026-10-02 | SEC Form 4 (추정 출처, 세부 접수번호 미확인) [N/A 세부] |
| NVDA / AVGO / CLS / APLD / VRT | — | — | — | — | — | — | N/A — 10/1~10/3 구간 신규 Form 4 공시 확인 불가 (가장 최근 확인된 거래는 모두 9월 중) |

---

## [8] 향후 14일 주요 일정 (2026-10-04 ~ 2026-10-18)

**경제 일정**

| 날짜 | 시각(ET·KST) | 이벤트 | 컨센서스 | 이전치 | 출처 |
|------|--------------|--------|----------|--------|------|
| 2026-10-14(수) | 08:30 ET · 21:30 KST | CPI(9월) | N/A — 확인 필요 | N/A | 일정만 확인, 컨센서스 수치 미확인 [N/A] |
| 2026-10-15(목) | 08:30 ET · 21:30 KST | PPI(9월) | N/A — 확인 필요 | N/A | 일정만 확인 [N/A] |
| 2026-10-15(목) | 08:30 ET · 21:30 KST | 소매판매(9월) | N/A — 확인 필요 | N/A | 일정만 확인 [N/A] |

> FOMC 금리결정(10/28 수)은 14일 범위(10/18까지) 밖이므로 본 표에 포함하지 않음. 참고: 10/27~28 FOMC, 발표 10/28 14:00 ET.

**기업 일정**

| 날짜 | 기업 | 이벤트 | 컨센서스 EPS | 컨센서스 매출 | 출처 |
|------|------|--------|--------------|---------------|------|
| 2026-10-13(화) | JPMorgan(JPM) | Q3 실적 발표 (약 07:00 ET) | N/A — 확인 필요 | N/A | 일정만 확인 [N/A] |
| 2026-10-13(화) | Wells Fargo(WFC) | Q3 실적 발표 (10:00 ET, 10/14 가능성도 일부 자료 존재 — 상충) | N/A | N/A | 일정만 확인, 날짜 상충 [N/A] |
| 2026-10-15(목) | TSMC | Q3 실적 컨퍼런스콜 | N/A | N/A | 일정만 확인 [N/A] |

---

## [9] 오늘의 사실 목록 (순위 없음)

```
[1] S&P500 7,722.72 (+0.73%), 다우 51,176.96 (+0.49%), 나스닥종합 27,190.86 (+1.19%), 러셀2000 2,832.90 (+0.94%), SOX 13,136.67 (+2.40%) · 2026-10-02 정규장 종가 · AP via WTOP [P2]
[1] 9월 비농업고용 +29,000명(예상 +84,000명 대폭 하회), 실업률 4.2% 상승 보도가 증시 상승 원인으로 지목됨 · Bloomberg [P2]
[1-A] ES 7,777.25(+0.69%), NQ 31,061.75(+0.98%), YM 51,477(+0.46%), RTY 2,850.9(+0.85%) · 한국 아침 시점 선물 · Yahoo chart API [P1]
[1-A] VIX 15.31(-6.59%), VIX9D 12.06(-13.86%), VIX3M 18.01(-3.07%), VVIX 87.02(-5.42%), SKEW 144.88(+1.48%) · CBOE [P1]
[1-A] VIX3M/VIX=1.176, VIX/VIX9D=1.269 — 둘 다 콘탱고 구조 · 산출치 [P1]
[1-A] SPX Put/Call(거래량) 1.502, QQQ Put/Call(거래량) 1.551 · CBOE 옵션 체인 [P1]
[2] Fed 부의장 Jefferson, "인플레이션은 연쇄 충격(cascade of shocks)의 결과"라며 다음 통화정책 결정에 "더 많은 시간 필요"하다고 발언(10/1) · Federal Reserve [P1]
[2] 미 10년물 국채수익률 약 5.27~5.28%(2002년 4월 이후 최고 수준), 2년물 4.78%, 10Y-2Y 스프레드 약 +49~50bp · Fed H.15 [P1]
[2] CME FedWatch 10월 27~28일 FOMC 동결확률 약 80%(1주 전 인상확률 36%에서 하락) · CNBC [P2]
[3] 9월 비농업고용 +29,000명(예상 +84,000명), 실업률 4.2%, 평균시간당임금 전년 +3.0%(2021년 이후 최저) · Bloomberg [P2]
[3] 정부 셧다운 없음 — 2026-09-02 CR 서명으로 예산 2026-12-11까지 확보, BLS 지표 발표 연기 없음 · Breaking Defense [P3]
[4] Synaptics(SYNA) +13.76%, ON Semiconductor(ON) +6.5% — ON의 Synaptics 인수조건이 전액 현금($123/주, 총 약 57억 달러)으로 변경 · Benzinga [P2]
[4] Tesla(TSLA) 약 +5.2%, Q3 인도량 486,532대(예상 상회) · CNBC [P2]
[4] Stellantis(STLA) 약 -7%, 신용등급/목표가 하향 및 프랑스 공장 EV 배터리 부족으로 10월 생산 중단 · Reuters [P2]
[4-A] Broadcom(AVGO), Anthropic에 최대 420억 달러 대출 제공해 자사 TPU 용량 리스하게 함(10/1) · Reuters/CNBC [P2]
[4-A] AWS(AMZN), 데이터센터 관련 정부기관과의 NDA 전면 폐지 발표, 10억 달러 지역투자 프로그램 공개(10/2~3) · TechCrunch [P2]
[5] Broadcom-Anthropic 420억 달러 대출 구조는 Anthropic IPO 신청서를 통해 확인됨, 하드웨어 공급자·대출자 역할 동시수행에 따른 이해상충 공시 포함 · Reuters/CNBC [P2]
[6] Amazon, AWS NDA 폐지 및 에너지·수자원 사용량 연례 공개 약속 발표(하원 법사위 조사 개시 직후) · TechCrunch [P2]
[6] Tesla Q3 인도량 486,532대(전년 대비 -2.1%, 컨센서스 상회) · CNBC [P2]
[7-A] Credo(CRDO) COO Lam Yat Tung, 10/1 10b5-1 플랜에 따라 50,000주 매도(@$205.2175), 10/2 세금목적 3,180주 처분(@$210.17) · SEC Form 4(세부 미확인) [N/A 세부]
[8] JPMorgan(JPM) 10/13 Q3 실적 발표, Wells Fargo(WFC) 10/13(또는 10/14, 상충) Q3 실적 발표, TSMC 10/15 Q3 컨퍼런스콜 예정 · 일정 확인 [N/A 컨센서스]
[8] CPI(9월) 10/14, PPI·소매판매(9월) 10/15 발표 예정 · 일정만 확인, 컨센서스 수치 미확인 [N/A]
```

---

## 수집 과정 메모 (자가점검용, 다음 단계 참고)

- SOX·Brent·ETF 자금흐름·Form 4 세부 접수번호 등 일부 항목은 매체 간 수치 상충 또는 1차 소스 미확인으로 `[N/A]` 또는 상충 명시 처리함. Analysis 단계에서는 이 불확실성을 감안할 것.
- "ON Semiconductor-Synaptics 인수조건 변경", "Broadcom-Anthropic $42B 대출", "Amazon AWS NDA 폐지"는 복수 매체 교차확인되어 신뢰도가 높음.
- FOMC 정례회의 날짜는 10월 27~28일로 확인됨(통상 알려진 "10/28-29"가 아님 — 참고용 수정 사실).
- ETF 일별 자금흐름(SMH/SOXX/QQQ)과 10/1~10/3 구간 Form 4(NVDA/AVGO/CLS/APLD/VRT)는 끝내 확인하지 못해 `N/A`로 남김 — 추정치로 메우지 않음.
