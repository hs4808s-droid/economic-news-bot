# 미국 시장 데일리 수집 결과 (Collect)
# 기준일: 2026-09-28 (월) · 미국 정규장 종가 기준(2026-09-25 금) · 실행모드: 데일리
# 생성시각(KST): 2026-09-28 06:35

---

## [1] 미국 주요 지수 〔데일리〕

| 항목 | 종가/수치 | 등락률 | (보도된) 원인 | 출처+태그 |
|------|-----------|--------|----------------|-----------|
| S&P500 | 7,743.41 | +0.51% (+39.38pt) | 기술주 낙관론 확산 속 주간 상승 마감(국채금리 급등에도 불구) | CNBC · "Stock market news for Sept. 25, 2026" · cnbc.com/2026/09/24/stock-market-today-live-updates.html [P2] |
| NASDAQ 종합 | 27,068.72 | +0.48% (+129.34pt) | Meta Platforms의 AI 에이전트 "Muse" 관련 랠리가 주간 상승(약 +2%)의 주된 촉매로 보도됨 | CNBC 동일 기사 [P2]; Yahoo Finance "S&P 500 and Nasdaq end the week higher as fresh tech optimism lifts market" [P2] |
| Dow | 51,828.62 | +0.93% (+478.64pt) | 국채 수익률 급등에도 3주 연속 하락 후 반등. Akamai가 Anthropic 계약 발표로 +3%대 상승해 기여 | CNBC 동일 기사 [P2] |
| Russell2000 | N/A — 확인 필요 | N/A | 검색 시점마다 2,839.47 / 2,833.85(-0.06%) 등 서로 다른 수치가 나와 단일 신뢰 출처로 확정 불가 | [N/A] |
| SOX | N/A — 확인 필요 | N/A | 특정 수치(12,668.93 +1.41%)가 검색 요약에 등장했으나 기사 제목·매체명이 특정되지 않아 재현 불가 | [N/A] |
| Brent | $104.32 | -2.1% (-$2.28) | 미국·이란 뉴욕 협상(호르무즈 해협 재개방 ↔ 대이란 봉쇄 해제) 낙관론. 후티 반군의 사우디 공격 우려가 하락폭 제한 요인으로 동시 보도 | Reuters(Yahoo Finance/BOE Report 인용) · "Oil prices slide about 2% as US, Iran explore path out of war" [P2] |

---

## [1-A] 선물·변동성 구조 〔`0_data.md` 원본 그대로〕

**선물 (한국 아침 시점)**

| 항목 | 현재가 | 전일 대비 | 직전 종가 | 기준시각(ET) | 출처+태그 |
|------|--------|-----------|-----------|--------------|-----------|
| S&P500 선물 (ES) | 7,803.75 | +0.47% | 7,767 | 2026-09-25 16:59 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 나스닥100 선물 (NQ) | 30,889.25 | +0.40% | 30,766.75 | 2026-09-25 17:00 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 다우 선물 (YM) | 52,163 | +0.86% | 51,717 | 2026-09-25 16:59 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 러셀2000 선물 (RTY) | 2,859.3 | +0.09% | 2,856.8 | 2026-09-25 16:59 | CBOE / CME (Yahoo chart API 자동수집) [P1] |

**변동성 구조**

| 항목 | 수치 | 전일 대비 | 출처+태그 |
|------|------|-----------|-----------|
| VIX (30일) | 14.87 | -5.11% | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| VIX9D (9일) | 12.76 | -9.57% | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| VIX3M (3개월) | 17.93 | -2.71% | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| VVIX | 87.84 | -3.01% | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| SKEW | 144.91 | -0.77% | CBOE / CME (Yahoo chart API 자동수집) [P1] |

기간구조: VIX3M/VIX = 1.206 (콘탱고) · VIX/VIX9D = 1.165 (콘탱고)

**Put/Call 비율** (CBOE 옵션 체인 직접 집계, 직전 정규장 기준)

| 대상 | P/C(거래량) | P/C(미결제약정) | 콜 거래량 | 풋 거래량 | 출처+태그 |
|------|-------------|------------------|-----------|-----------|-----------|
| SPX | 1.344 | 1.391 | 614,553 | 825,768 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| QQQ | 1.224 | 1.364 | 1,190,168 | 1,456,601 | CBOE / CME (Yahoo chart API 자동수집) [P1] |

참고 매크로: 미 10년 국채선물(ZN=F) 104.97(+0.10%) · 금(GC=F) 4,321.2(+0.54%) · WTI(CL=F) 92.41(-2.33%) · DXY 101.04(-0.25%) — 기준시각 2026-09-25 16:59 ET [P1]

---

## [2] 금리 / 연준 〔데일리〕

| 항목 | 사실 내용(발언·수치) | 출처+태그 |
|------|----------------------|-----------|
| Fed 발언 (Jefferson) | Philip N. Jefferson 부의장, 2026 US Treasury Market Conference(뉴욕 연준) 연설 "Discount Window Modernization and Treasury Market Functioning" — 재할인창구를 "no questions asked" 유동성 창구로 설명 | 연준(Fed) 홈페이지, federalreserve.gov/newsevents/speech/jefferson20260922a.htm (2026-09-22) [P1] |
| Fed 발언 (Barr) | Michael S. Barr 이사, 시카고 연준 주택정책 컨퍼런스 연설: "In my view, given changes to the economy, we were out of position, and we made an adjustment in the right direction. In my base case, further policy adjustments are likely to be needed to ensure inflation comes down to target in a timely fashion." | 연준 홈페이지, federalreserve.gov/newsevents/speech/barr20260923a.htm (2026-09-23) [P1]; CNBC 후속보도 [P2] |
| Fed 발언 (Williams) | John C. Williams 뉴욕 연준 총재: "it's likely that another rate hike may be appropriate by the end of the year... But we have to see. We're going to collect the data and do what we did between July and September." 명시적 포워드가이던스 시대는 "끝났다"고 발언 | CNBC · "New York Fed's Williams says it's 'reasonable' to expect another rate hike by year-end" (2026-09-24) [P2] |
| 미 2년물 국채금리 | 4.856% (2026-09-25 종가, 전일 대비 3bp 이상 하락) | CNBC · "10-year Treasury yield is little changed to end a volatile week" (2026-09-25) [P2] |
| 미 10년물 국채금리 | 5.163% (2026-09-25 종가, 전일 대비 1bp 미만 상승; 전날 장중 2007년 6월 이후 최고치 기록) | CNBC 동일 기사 (2026-09-25) [P2] |
| 10Y-2Y 스프레드 | +0.307%p (+30.7bp) — 위 두 수치의 산술 차이 | 산출값 (원 수치 출처: CNBC [P2]) |
| CME FedWatch (차기 FOMC, 10/27-28) | 2026-09-23 기준 25bp 추가 인상 확률 약 73% | CNBC · "Market sees next Fed hike in October following Barr comments, hot inflation" (2026-09-23) [P2] |
| CME FedWatch (보조 수치) | 2026-09-25 기준 75.8%로 보도한 2차 집계처 존재 — CME 자체 페이지로 직접 교차검증 불가, 신뢰도 낮음 | 2차 애그리게이터 [P3, 확인 필요] |

---

## [3] 주요 경제지표 〔9/28 당일 발표 없음 · 직전 발표분 참고〕

> 2026-09-28(월) 발표 예정인 CPI·PPI·GDP·Payroll·ISM 등 주요 지표 없음. 직전 정규장(9/25) 이전 발표분은 아래와 같다.

| 지표 | 발표일(ET) | 발표치 | 예상치 | 이전치 | 서프라이즈(발표치-예상치) | 출처 |
|------|------------|--------|--------|--------|---------------------------|------|
| 신규 실업수당 청구건수 | 2026-09-24 | 197,000 | 201,000 | 198,000(수정) | -4,000 | Reuters/Yahoo Finance (2026-09-25) [P2] |
| 내구재 주문(속보치, 8월) | 2026-09-25 | -0.1% (MoM) | N/A — 확인 필요 | +0.9%(수정) | N/A — 확인 필요 | US Census Bureau [P1]; 후속보도 Keys News (2026-09-25) [P2] |
| 미시간대 소비자심리지수(확정치, 9월) | 2026-09-25 | 48.1 | 47.5~47.6 | 51.7(8월 확정치) | +0.5~0.6 | Univ. of Michigan Surveys of Consumers, 후속보도 MarketScreener/Breitbart (2026-09-25) [P2] |

N/A — 2026-09-28 금일 지표 발표 없음. 다음 주요 지표: GDP 3차 추정치·PCE(9/30, BEA) [P1], ISM 제조업 PMI(10/1) [확인 필요], 9월 고용보고서(10/2 전후, 날짜 확인 필요).

---

## [4] 특징 종목 〔데일리 · 2026-09-25 정규장〕

| 종목 | 티커 | 등락률 | 거래량 | (보도된) 핵심 사실 | 출처+태그 |
|------|------|--------|--------|---------------------|-----------|
| Leslie's | LESL | 약 -17% | N/A | 파산법 11장(Chapter 11) 신청 준비 보도. 부채 약 $7.5억을 자본으로 전환, DIP 자금 약 $1억 확보 | Benzinga (2026-09-25) [P2] |
| Akamai Technologies | AKAM | +3%~+8.78% (시점별 상이) | N/A | Anthropic과 7년간 총 $116억 규모 클라우드 서비스 계약 체결 발표 | CNBC · "Stocks making the biggest moves midday" (2026-09-25) [P2] |
| People Inc. | PPLI | +6.5%~+11% (시점별 상이) | N/A | WSJ 보도: MGM Resorts가 People Inc. 인수를 검토 중. 9/23 People Inc.가 MGM 잔여 지분에 대한 자사의 $48.30/주 현금 인수 제안을 철회한 데 이은 상황 | CNBC 동일 기사 [P2]; GuruFocus (2026-09-25) [P2] |
| Genius Sports | GENI | 장중 +10%~+13% | N/A | JPMorgan이 Overweight 등급·2027년 12월 목표가 $8로 커버리지 개시 | The Motley Fool (2026-09-25) [P2] |
| Datadog | DDOG | +7.28% | N/A | 원인 특정 출처 확인 불가 — 애그리게이터 집계치만 확인됨 | [N/A, 확인 필요] |
| Zscaler | ZS | -8.64%~-9% | N/A | CRO 교체 발표(Mike Rich 사임, Ross Tackett이 10/1부로 승계) — FY2027 성장 가이던스 관련 실행력 우려 재부각 | Yahoo Finance (2026-09-25) [P2] |
| Bloom Energy | BE | +6.4%~+8.66% | N/A | S&P500 신규 편입(9/21), 분기 매출 약 $10.65억(+166% YoY), UBS·Clear Street·Mizuho 목표가 상향 등 복수 요인 동시 보도 | TradingKey (2026-09-25) [P3] |

---

## [4-A] 섹터별 뉴스 〔`0_data.md` Finnhub 수집분 중 선별〕

| 섹터 | 종목 | 사실 내용(무슨 일이) | 발행시각(ET) | 출처+태그 |
|------|------|----------------------|--------------|-----------|
| 금융 | JPM | JPMorgan이 디젤유 관련 포지션 확대 — 디젤 가격 사상 최고 수준이 인플레이션 압력 시험대라고 보도 | 2026-09-27 15:37 | Yahoo (Finnhub 수집) [P3] |
| 에너지 | XOM | 미국 디젤 가격 강세가 정유 능력 부족(글로벌 리파이너리 shortage)으로 오일 가격 하락에도 유지될 수 있다고 보도 | 2026-09-26 06:19 | Benzinga (Finnhub 수집) [P2] |

> 그 외 Finnhub 수집분(NVDA·AVGO·UNH·AMZN 관련)은 "매수해야 하나" 식 개별 종목 분석·리스트형 콘텐츠로, 그날의 구체적 시장 이벤트(사실)에 해당하지 않아 제외함. [5]·[6]과 중복되는 항목 없음.

---

## [5] AI 인프라 — 공급 측 〔데일리〕

| 기업 | 뉴스 제목 | 사실 내용(무슨 일이) | 출처일자 | 출처+태그 |
|------|-----------|----------------------|----------|-----------|
| VRT | King Environmental Services 인수 합의 | Vertiv가 아일랜드 소재 King Environmental Services Ltd.(액체냉각 데이터센터용 유체관리 서비스) 인수 계약 체결. 4분기 중 종결 예정, 재무조건 비공개 | 2026-09-24 | PRNewswire/Vertiv 공식 발표 [P1] |
| APLD | Wells Fargo Top Idea 선정 후속보도 | Wells Fargo가 Overweight·목표가 $50로 커버리지 개시(9/17). 계약 백로그(base-term) 약 $360억, 갱신 시 최대 $860억, 계약 용량 약 1.4GW로 분석사가 평가. 70% 이상이 Meta·Oracle과 직접 계약 | 2026-09-17 (후속보도 09-23~25) | Benzinga/Yahoo Finance [P2] |
| APLD | UBS 신규 커버리지 | UBS가 Buy 등급 부여(9/23) | 2026-09-23 | TipRanks 집계 [P3] |
| ANET | S&P100 지수 편입 | Arista Networks가 Dell·Palo Alto Networks·SanDisk와 함께 2026-09-21 장 개시 전 S&P100 지수 정식 편입 | 2026-09-21 | S&P Dow Jones Indices [P2] |
| CRDO | 1.6T ZeroFlap 광트랜시버 출시 | Credo가 224G 기반 1.6T ZeroFlap 광트랜시버를 AI 네트워크용으로 출시, ECOC 2026(스페인 말라가, 9/21~23)에서 시연 | 2026-09-21~23 | 회사 발표 [P1] |
| CLS | 경영진 개편 | Mandeep Chawla를 Group President, Global Markets로, Todd Ankenmann을 신임 CFO로 임명 | 2026-09-11 | 회사 발표 [P3] |
| SMCI | NVIDIA Vera Rubin NVL72 랙 출하 개시 | Super Micro가 NVIDIA Vera Rubin NVL72 랙(Rubin GPU 72개+Vera CPU 36개, 직접액체냉각) 출하 시작 발표 | 2026-09-25 전후 | 24/7 Wall St [P2] |
| AVGO | Anthropic向 TPU 공급 재확인 (배경) | 9/2 실적콜에서 CEO Hock Tan이 Anthropic向 Ironwood(TPU v7) 1GW 2026년 배치, 2027년 TPU v8i 5GW 등 언급 — 9/24~28 신규 업데이트 없음 | 2026-09-02 | Benzinga [P1] |
| NVDA | 로보틱스/피지컬 AI 발표 | 로보틱스 애플리케이션용 물리 AI 모델·툴 관련 발표 진행 | 2026-09-22 | NVIDIA Newsroom [P3] |
| AMD | N/A — 신규 소식 없음 | 9/24~28 구간 신규 발표 확인 안됨 | - | [N/A] |
| TSM | N/A — 신규 소식 없음 | 9/24~28 구간 신규 발표 확인 안됨. 8월 매출 전년비 +53.3%는 9월 초 배경 정보 | - | [N/A] |

**크로스커팅 시그널**

| 주제 | 사실 내용 | 출처일자 | 출처+태그 |
|------|-----------|----------|-----------|
| HBM 스팟가격 | HBM3E 36GB 스택 스팟가격 US$2,100(8/31 기준), 장기계약가 대비 4~5배 | 2026-08-31 | siliconanalysts.com [P3, 확인 필요] |
| HBM4 공급 | SK hynix가 NVIDIA Vera Rubin向 48GB 16-layer HBM4 양산 출하 중. Micron은 샘플 단계. Samsung, SK hynix와 HBM 점유율 격차 17%p로 축소 | 2026-09-21 | Seoul Economic Daily [P3] |
| Micron 실적 예고 | Micron 9/30 FY26 Q4 실적 발표 예정. 시장 평균 매출 예상 약 $510억(+365% YoY) | 2026-09-26~27 | Investing.com [P2] |
| NAND 가격 | NAND 가격 상승세 둔화 국면 진입(분기 대비 8~13% 상승 전망, 직전 분기 70~75%↑ 대비 둔화) | 2026-09-16 | TrendForce [P3] |

---

## [5-A] AI 인프라 — 수요 측 / 하이퍼스케일러 CAPEX 〔실적시즌 아님 — 직전 가이던스 유지〕

| 항목 | 사실 내용(발표 수치·문구) | 전분기 대비 | 출처일자 | 출처+태그 |
|------|---------------------------|--------------|----------|-----------|
| Microsoft | CY2026 CAPEX 가이던스 약 $1,900억 — 직전 가이던스 유지 | N/A | 2026-07-29 (Q4 FY26 실적콜) | 회사 발표 [P1] |
| Amazon | FY2026 CAPEX 가이던스 약 $2,200억(기존 $2,000억에서 상향) — 직전 가이던스 유지 | N/A | 2026-07-30 (Q2 실적콜) | 회사 발표 [P1] |
| Alphabet | FY2026 CAPEX 가이던스 $1,950억~$2,050억(기존 $1,800~1,900억에서 상향) — 직전 가이던스 유지 | N/A | 2026-07-22 (Q2 실적콜) | 회사 발표 [P1] |
| Meta | FY2026 CAPEX 가이던스 $1,300억~$1,450억(범위 축소) — 직전 가이던스 유지 | N/A | 2026-07-29 (Q2 실적콜) | 회사 발표 [P1] |

> 4개사 모두 9/14~10/12 구간 실적 발표 없음(다음 실적 전부 10월 하순 예정, 정확 일자 확인 필요).

---

## [6] 시총 상위 10 — AI 무관 일반 이슈 〔실적시즌/이슈시〕

| 기업 | 사실 내용 | 출처일자 | 출처+태그 |
|------|-----------|----------|-----------|
| MSFT | FTC의 클라우드 라이선싱/Entra ID 번들링 관련 반독점 조사 진행 중(정확한 9월 일자 확인 필요) | 확인 필요 | US Cloud [P3] |
| NVDA | Jensen Huang·CFO Colette Kress가 RSU 세금 납부 목적으로 주식 매도(Huang 약 45,728주 @$212.17, Kress 약 34,918주, 사전예정 계획) | 2026-09-19 | GuruFocus [P3] |
| AAPL | iPhone 18 Pro/Pro Max 출시(9/18), 자체 C2 모뎀 탑재로 Qualcomm 의존도 축소. 폴더블 iPhone Duo 예약주문 10/16, 출시 10/23 예정 | 2026-09-18 | MacRumors/CNBC [P2] |
| AMZN | FTC가 2026-08-31 광고주 대상 체계적 과다청구 혐의로 22개 주 검찰총장과 함께 아마존 제소, $200억+ 규모 청구 | 2026-08-31 | CNBC [P2] |
| GOOGL | 연방판사 Brinkema, DOJ의 AdX 광고거래소 매각 강제 요구 기각(9/2). 106페이지 구제조치 의견서 9/16 공개(상호운용성 의무, 입찰데이터 공유, 6년 준수 모니터) | 2026-09-02, 09-16 | Al Jazeera/AdExchanger [P2] |
| META | 51개 주 검찰총장과 청소년 중독 관련 소송 최대 $171억 규모 합의(8/26) | 2026-08-26 | NPR [P2] |
| AVGO | FQ3 2026 실적: 매출 $295.9억(+85.5% YoY), 희석EPS $2.68. 분기 배당 $0.65/주(기준일 9/21, 지급일 9/30) | 2026-09-04 | Broadcom IR [P1] |
| BRK.B | Warren Buffett가 2026-09-18 회장직에서 물러나 명예회장 취임, 아들 Howard G. Buffett가 신임 회장으로 선임(CEO는 Greg Abel 유지) | 2026-09-18 | Berkshire Hathaway 공식 발표 [P1] |
| TSLA | Cybercab 로보택시 오스틴 상업 서비스 개시(9/3). NHTSA가 자율인증(스티어링휠·페달·미러 없음) 관련 공식 조사(Audit Query) 개시(9/4) | 2026-09-03, 09-04 | NHTSA 공식 발표 [P1] |
| TSM | 8월 매출 NT$5,148.1억(+53.3% YoY, 사상 최대) | 확인 필요(9월 초 발표) | 회사 발표 [P1] |

---

## [7] 기관·대형 자금 수급 〔데일리〕

| 항목 | 종목 | 사실 내용 | 규모(수치) | 출처+태그 |
|------|------|-----------|------------|-----------|
| ETF 순자산 | SMH | AUM $746.2억 (2026-09-25 기준) | $746.2억 | VanEck 공식 [P1] |
| ETF 순자산 | SOXX | AUM $489.0억 (2026-09-24 기준) | $489.0억 | 운용사 공식/ETF Action [P2] |
| ETF 자금흐름 | QQQ | 8월 월간 순유입 $128.44억 (9/24~28 구간 내 구체 수치는 확인 불가) | $128.44억(8월) | ETF Action [P2] |

> 9/24~28 구간에 특정된 블록딜·이례적 옵션거래는 검색으로 확인되지 않음 — N/A.

---

## [7-A] Insider Trading (SEC Form 4) 〔신규 공시 있음〕

| 기업 | 내부자 | 직책 | 매수/매도 | 거래유형 | 규모 | 거래일 | 출처 |
|------|--------|------|-----------|----------|------|--------|------|
| CLS | Robert Mionis | CEO | 매도 | 확인 필요(10b5-1 여부 미확인) | 약 23,396주 @$364.22(약 $852만) | 2026-09-23 | SEC Form 4 경유 보도 [P2] |
| CLS | Todd C. Cooper | President | 매도 | 10b5-1 (2026-06-04 채택) | 20,118주 @$360.00(약 $724만) | 2026-09-23 | SEC Form 4 경유 보도 [P2] |
| CRDO | Cheng Chi Fung | CTO/Director | 매도(가족신탁 경유) | 10b5-1 (2025-09-05 채택) | 27,500주 @$190.03~$195.68(약 $520만) | 2026-09-23 | SEC EDGAR [P1] |

> NVDA·AVGO·SMCI·APLD·VRT: 2026-09-22~09-28 구간 신규 Form 4 공시 확인 안됨 — N/A.

---

## [8] 향후 14일 주요 일정 〔2026-09-28~2026-10-12〕

**경제 일정**

| 날짜 | 시각(ET·KST) | 이벤트 | 컨센서스 | 이전치 | 출처 |
|------|--------------|--------|----------|--------|------|
| 09-30 | 8:30 ET / 21:30 KST | GDP 3차 추정치 (Q2 2026) | 확인 필요 | 확인 필요 | BEA [P1] |
| 09-30 | 확인 필요 | PCE / Core PCE (8월) | 확인 필요 | 확인 필요 | BEA [P1] |
| 10-01 | 10:00 ET / 23:00 KST | ISM 제조업 PMI (9월) | 확인 필요 | 확인 필요 | ISM [P1] |
| 10-02 | 8:30 ET / 21:30 KST | 비농업고용지표 (9월, 날짜 확인 필요) | +5만~9만 범위 | 8월 +16.2만 | Bloomberg/BLS [P2] |
| 10-05 | 10:00 ET / 23:00 KST | ISM 서비스업 PMI (9월) | 확인 필요 | 55.4%(8월) | ISM [P1] |

> 이번 14일 구간 내 FOMC 회의 없음(다음 회의 10/27~28). 정부 예산은 2026-12-11까지 임시예산(CR)으로 확보돼 셧다운發 지표 지연 가능성은 현재로선 낮음.

**기업 일정**

| 날짜 | 기업 | 이벤트 | 컨센서스 EPS | 컨센서스 매출 | 출처 |
|------|------|--------|--------------|---------------|------|
| 10-01 | Nike (NKE) | FQ1 FY2027 실적(장마감 후) | 확인 필요 | 확인 필요 | TipRanks [P3] |
| 09-30 | Micron (MU) | FY26 Q4 실적 | 확인 필요 | 시장 평균 약 $510억 | Investing.com [P2] |

---

## [9] 오늘의 사실 목록 (순위 없음)

```
[1] S&P500 7,743.41 +0.51% (2026-09-25 종가) · CNBC [P2]
[1] NASDAQ 27,068.72 +0.48%, Meta AI 에이전트 "Muse" 랠리 보도 · CNBC [P2]
[1] Dow 51,828.62 +0.93%, Akamai +3%대 상승 기여 · CNBC [P2]
[1] Russell2000·SOX 종가 수치 검증 불가(출처 상충) · [N/A]
[1] Brent $104.32 -2.1%, 美-이란 협상 낙관론 · Reuters [P2]
[1-A] VIX 14.87(-5.11%), VIX3M/VIX 1.206 콘탱고 · CBOE/CME [P1]
[1-A] SPX P/C(거래량) 1.344, QQQ P/C(거래량) 1.224 · CBOE [P1]
[2] Fed Barr: "further policy adjustments are likely to be needed" (2026-09-23) · Fed [P1]
[2] Fed Williams: "another rate hike may be appropriate by the end of the year" (2026-09-24) · CNBC [P2]
[2] 미 10년물 5.163%, 2년물 4.856%, 스프레드 +30.7bp (2026-09-25) · CNBC [P2]
[2] CME FedWatch: 10/27-28 FOMC 25bp 인상 확률 약 73%(9/23 기준) · CNBC [P2]
[3] 신규 실업수당청구 197,000건(예상 201,000) · Reuters [P2]
[3] 미시간대 소비자심리지수 확정치 48.1(예상 47.5~47.6) · Univ. of Michigan [P2]
[4] Leslie's(LESL) 약 -17%, Chapter 11 신청 준비 보도 · Benzinga [P2]
[4] Akamai(AKAM) +3%~8.78%, Anthropic 7년 $116억 계약 · CNBC [P2]
[4] People Inc.(PPLI) +6.5%~11%, MGM 인수 검토설 · CNBC [P2]
[4] Zscaler(ZS) -8.64%~9%, CRO 교체 발표 · Yahoo Finance [P2]
[4] Bloom Energy(BE) +6.4%~8.66%, S&P500 편입·실적 호조 · TradingKey [P3]
[4-A] JPM, 디젤 관련 포지션 확대 보도 · Yahoo [P3]
[4-A] XOM, 정유 능력 부족으로 디젤가 강세 지속 가능성 · Benzinga [P2]
[5] VRT, King Environmental Services 인수 계약(9/24) · PRNewswire [P1]
[5] APLD, Wells Fargo Overweight·목표가 $50(백로그 $360억) · Benzinga [P2]
[5] ANET, S&P100 지수 편입(9/21) · S&P DJI [P2]
[5] CRDO, 1.6T ZeroFlap 광트랜시버 출시·ECOC 2026 시연 · 회사 발표 [P1]
[5] SMCI, NVIDIA Vera Rubin NVL72 랙 출하 개시 · 24/7 Wall St [P2]
[5] HBM4: SK hynix 양산 출하 중, Samsung 격차 17%p로 축소(9/21) · Seoul Economic Daily [P3]
[5-A] MSFT/AMZN/GOOGL/META 실적시즌 아님 — 7월 CAPEX 가이던스 유지 · 각사 발표 [P1]
[6] BRK.B, Buffett 회장직 사임·명예회장 취임(9/18) · Berkshire 공식 [P1]
[6] TSLA, Cybercab 오스틴 상업 서비스 개시(9/3)·NHTSA 조사 개시(9/4) · NHTSA [P1]
[6] AVGO, FQ3 매출 $295.9억(+85.5% YoY)(9/4) · Broadcom IR [P1]
[6] META, 청소년 중독 소송 최대 $171억 합의(8/26) · NPR [P2]
[7] SMH ETF AUM $746.2억(9/25 기준) · VanEck [P1]
[7-A] CLS CEO Robert Mionis 약 $852만 규모 매도(9/23) · SEC Form 4 경유 보도 [P2]
[7-A] CRDO CTO Cheng Chi Fung 약 $520만 규모 매도, 10b5-1(9/23) · SEC EDGAR [P1]
[8] GDP 3차추정치·PCE 9/30, ISM 제조업 PMI 10/1, 9월 고용보고서 10/2 전후(확인 필요) · BEA/ISM/BLS [P1]
```
