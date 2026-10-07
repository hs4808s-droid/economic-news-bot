# 미국 시장 데일리 수집 결과 (Collect)
# 기준일: 2026-10-07 (수) · 미국 정규장 종가 기준 · 실행모드: [데일리]
# 생성시각(KST): 2026-10-08 07:30

---

## [1] 미국 주요 지수

| 항목 | 종가/수치 | 등락률 | (보도된) 원인 | 출처+태그 |
|------|-----------|--------|----------------|-----------|
| S&P500 | 7,801.77 | -0.22% (-17.16pt) | 국채금리 상승(30년물 2002년 이후 최고치)과 유가 재상승에 따른 인플레이션 우려. FOMC 9월 의사록 발표(14:00 ET) 대기 속 매물 출회. 10년물 국채 입찰($390억 규모) 이후 금리가 고점에서 후퇴하며 장중 저점에서 일부 회복 | CNBC · "Stock market today" · 2026-10-07 · https://www.cnbc.com/2026/10/06/stock-market-today-live-updates.html [P2] (참고: Yahoo Finance 동일 수치 교차확인 · https://finance.yahoo.com/markets/live/stock-market-today-wednesday-october-7-dow-sp-500-nasdaq-080241833.html [P2]) |
| NASDAQ Composite | 27,538.69 | -0.22% (-61.20pt) | 전날(10/6) 사상 최고치(27,599.79)에서 후퇴. 금리 상승에 따른 차입비용 증가가 AI 투자 확대를 제약할 수 있다는 우려로 기술주 매도(CrowdStrike 약 -5%, Palo Alto Networks·Meta 각각 -3%대·-2%대) | CNBC (상동) · 2026-10-07 [P2] |
| Dow Jones Industrial Average | 51,179.87 | -0.66% (-341.41pt) | 금리 상승에 따른 대출 둔화 우려로 은행주 약세(Goldman Sachs 약 -1%, BofA·Wells Fargo·Citigroup·JPMorgan 동반 하락). 30년물 국채수익률 종가 5.66%로 2002년 이후 최고 | CNBC (상동) · 2026-10-07 [P2] (참고: Yahoo Finance · "Stock Market Midday, Oct. 7: Rising Treasury Yields Pressure Stocks, Caterpillar tumbles over 6%" [P2]) |
| Russell 2000 | 2,792.89 | -1.31% (-37.41pt) | 대형 기술주·바이오주 대비 중소형주 상대적 부진. 구체적 단일 원인을 명시한 기사는 확인 안 됨 | Investing.com 계열 집계 · 2026-10-07 [P3] (주의: 검색 결과 중 일부는 2,800.26(-1.06%) 수치도 제시해 소폭 불일치 — 특징주 담당 교차조사에서 -1.31%가 재확인되어 이를 채택) |
| SOX (PHLX Semiconductor) | N/A | N/A | N/A — 2026-10-07 종가를 확인 가능한 1차/2차 출처에서 찾지 못함(검색 결과는 10/6 종가 13,248.23(+0.57%)만 반환) | 확인 필요 [N/A] |
| Brent 원유 (USD/bbl) | 확인 필요 — 출처 간 수치 불일치: TradingEconomics 100.87(+0.29%) / 특징주 교차조사 100.20(-0.4%) — 범위 약 $100.2~100.9, 방향성은 거의 변동 없음(소폭 등락) | 확인 필요 | 중동 지정학적 긴장(사우디 파이프라인 관련 보도) 및 멕시코만 폭풍 공급 우려가 언급되나 10/7 종가 단일값 확정 불가 | TradingEconomics [P3] / 특징주 교차조사(CNBC·TheStreet 종합) [P2] — 확인 필요 [N/A] |

---

## [1-A] 선물·변동성 구조 (`0_data.md` 원본 그대로 인용)

**선물 (한국 아침 시점)**

| 항목 | 현재가 | 전일 대비 | 직전 종가 | 기준시각(ET) | 출처+태그 |
|------|--------|-----------|-----------|--------------|-----------|
| S&P500 선물 (ES) | 7,850.25 | -0.30% | 7,874 | 2026-10-07 16:59 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 나스닥100 선물 (NQ) | 31,403.75 | -0.25% | 31,483.25 | 2026-10-07 16:59 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 다우 선물 (YM) | 51,421 | -0.76% | 51,816 | 2026-10-07 16:59 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 러셀2000 선물 (RTY) | 2,812.3 | -1.26% | 2,848.2 | 2026-10-07 16:59 | CBOE / CME (Yahoo chart API 자동수집) [P1] |

**변동성 구조**

| 항목 | 수치 | 전일 대비 | 출처+태그 |
|------|------|-----------|-----------|
| VIX (30일) | 15.08 | +0.47% | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| VIX9D (9일) | 11.78 | -2.08% | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| VIX3M (3개월) | 17.72 | +0.45% | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| VVIX | 83.18 | +0.71% | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| SKEW | 141.84 | +0.45% | CBOE / CME (Yahoo chart API 자동수집) [P1] |

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.175 | 콘탱고 |
| VIX / VIX9D | 1.280 | 콘탱고 |

**Put/Call 비율 (CBOE 옵션 체인 집계)**

| 대상 | P/C(거래량) | P/C(미결제약정) | 콜 거래량 | 풋 거래량 | 출처+태그 |
|------|-------------|------------------|-----------|-----------|-----------|
| S&P500 지수옵션 (SPX) | 1.101 | 1.419 | 2,311,793 | 2,544,351 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 나스닥100 ETF 옵션 (QQQ) | 1.212 | 1.469 | 3,135,474 | 3,801,413 | CBOE / CME (Yahoo chart API 자동수집) [P1] |

참고: 매크로(10년물 국채선물 ZN=F 104.42 -0.07%, 금 GC=F 4,136.7 -1.20%, WTI CL=F 88.94 -0.56%, DXY 102.28 +0.44%)는 `0_data.md` 원본 수치임 — CBOE / CME (Yahoo chart API 자동수집) [P1].

---

## [2] 금리 / 연준

| 항목 | 사실 내용(발언·수치) | 출처+태그 |
|------|----------------------|-----------|
| FOMC 9월 의사록 공개 | 2026-10-07 14:00 ET(한국시간 10-08 03:00) 공개. 9/15~16 회의에서 연방기금금리 목표범위를 3.75~4.00%로 25bp 인상하는 데 전원(12-0) 찬성. 다수 위원이 "연내 추가 인상이 적절할 것"이라 평가했으나 구체적 시점은 명시 안 됨. 2027년 경로는 위원 간 견해 분산(8명 2회 이상 추가 인상 전망, 6명 1회, 4명 인하 전망) | Federal Reserve · "Minutes of the FOMC, September 15-16, 2026" · 2026-10-07 · federalreserve.gov/newsevents/pressreleases/monetary20261007a.htm [P1] (참고: FXStreet · 2026-10-07 [P2]) |
| Fed 발언 — Jeffrey Schmid(캔자스시티 연은 총재) | 2026-10-06 오클라호마 Enid Regional Development Alliance 간담회에서 "노동시장은 양호한 상태(labor force remains in a good place)" / 인플레이션 "불만스럽다, 반드시 잡아야 한다(frustrating, must be fixed)" / 신뢰도가 "인플레이션 대응에 달려 있다" / 2% 목표까지 "갈 길이 남았다(a way to go)" 발언 | FXStreet · "Fed's Schmid warns inflation fight has a 'way to go'" · 2026-10-06 18:22 ET · https://www.fxstreet.com/news/feds-schmid-warns-inflation-fight-has-a-way-to-go-202610061822 [P2] |
| Fed 발언 — Powell / Waller / Williams / Bowman / Barkin | 2026-10-06~07(ET) 구간 공개 발언 확인 안 됨 | 확인 필요 [N/A] |
| 미 10년물 국채수익률 | 2026-10-07 종가 약 5.365%(2002년 4월 이후 최고 수준), 전일(10/6, 5.275%) 대비 약 +9.0bp | Yahoo Finance/TheStreet · 2026-10-07 [P2] |
| 미 2년물 국채수익률 | 2026-10-07 종가 확인 안 됨(검색 결과가 10/6·10/7 수치를 혼재 — 10/6 종가는 직전 수집에서 4.791%로 확인됨) | 확인 필요 [N/A] |
| 10Y-2Y 스프레드 | 2년물 10/7 종가 미확정으로 산출 보류 | 확인 필요 [N/A] |
| CME FedWatch (10/28 FOMC) | 가장 최근 조회치(2026-10-07): 동결(Hold) 78.4% / 25bp 인상 21.6% / 인하 0% | Benzinga · "Jim Cramer Says 'Interest Rates Can Fall, Too!!' as October Fed Hike Odds Fall to 21.6%" · 2026-10 [P2] |

---

## [3] 주요 경제지표

N/A — 2026-10-06~10-07(ET) 구간 CPI·Core CPI·PPI·GDP·비농업고용·실업률·신규실업수당청구·소매판매·ISM 제조/서비스업PMI 발표 없음. (9월 비농업고용 29,000명(예상 84,000명 하회)은 2026-10-02 발표로 이번 수집 구간 밖)

참고: 2026-09-02 서명된 임시예산안(CR)으로 연방정부는 2026-12-11까지 자금 지원 확정 상태 — 10/6~10/7 당시 셧다운 아님. 출처: 종합보도 · 2026-09 [P2]

---

## [4] 특징 종목

| 종목 | 티커 | 등락률 | 거래량 | (보도된) 핵심 사실 | 출처+태그 |
|------|------|--------|--------|---------------------|-----------|
| Skydance (Paramount Skydance) | SKYD | -7% ($9.51→$8.89) | N/A | Warner Bros. Discovery 인수(약 $110B) 완료 후 NYSE 데뷔 이틀째도 하락. $80B 규모 부채 부담·레버리지·$6B 비용 시너지 달성 가능성 우려. 전날 Fitch가 신용등급 하향(선형방송 매출 구조적 압박, 스트리밍 경쟁, 콘텐츠 리스크 명시) | Invezz / Variety · 2026-10-07 [P2] |
| Allegion | ALLE | -6% | N/A | 거시경제 불안·산업주 전반 위험회피(risk-off) 심리로 하락. 기업 고유 뉴스는 확인 안 됨 | Yahoo Finance via TheStreet · 2026-10-07 [P2] |
| Comfort Systems USA | FIX | 약 -6% | N/A | Zacks Research가 등급을 "Strong Buy"→"Hold"로 하향 | MarketBeat / ad-hoc-news · 2026-10-07 [P2] |

참고(제외): Option Care Health(OPCH, McKesson·CD&R 인수 발표)·Vistra(VST, DOE 대출 관련 급등)는 2026-10-06(화) 발생 이벤트로 확인되어 10/7(수) 특징주에서 제외함.

---

## [4-A] 섹터별 뉴스 ([4]·[5]·[6] 중복 제외, `0_data.md` Finnhub 수집분 기반)

| 섹터 | 종목 | 사실 내용(무슨 일이) | 발행시각(ET) | 출처+태그 |
|------|------|----------------------|--------------|-----------|
| 반도체·AI | MU (Finnhub 원문 태그는 AVGO, 실제 내용은 Micron) | "At $1,069, Is Micron Stock Going to Split?" — Micron 경영진이 최근 실적 콜에서 주식분할 대신 자사주 매입에 집중한다고 밝혔으며 분할 계획 없음 | 15:35 | Fool.com (Finnhub 수집) [P1] |
| 반도체·AI | MRVL (Finnhub 원문 태그는 AVGO, 실제 내용은 Marvell) | "Is There A Risk Hiding In Marvell Stock's Rapid Growth?" — Marvell 2026년 주가 약 233% 상승, 선행 PER 약 62배(S&P500 20배)로 고평가·소수 하이퍼스케일러 고객 의존 리스크 지적 | 15:34 | Trefis via TradingView (Finnhub 수집) [P2] |
| 금융 | JPM | 10/7 금융주 전반 셀오프 속 JPM 종가 약 $328.22(-0.9% 추정). "다른 해석을 내놓았다"는 기사의 구체적 코멘트 원문은 확인 안 됨 | 14:07 | 확인 필요 [N/A] |
| 에너지 | XOM | 10/7 장중 $163.54~$166.85 범위 거래. 최근 1년 +44.3% 상승(업계 평균 +42.4% 상회), 고유가·업스트림 실적이 상승 배경으로 거론 | 10:48 | TradingView/Zacks (Finnhub 수집) [P2] |
| 헬스케어 | UNH | Suze Orman이 10/4 팟캐스트에서 UnitedHealth Medicare Advantage 플랜 약 39만 명분 종료 경고. 이틀 뒤 CNBC 하프타임리포트에서 케빈 심슨이 UNH를 "턴어라운드 스토리"로 평가. UNH Medicare Advantage 가입자는 2025년 말 이후 약 96.5만 명 감소, 2분기 medical care ratio 89%→87%로 개선(보도된 수치) | 13:42 | 24/7 Wall St / AOL (Finnhub 수집) [P1] |
| 소비재·유통 | DUK (Finnhub 원문 태그는 AMZN, 데이터센터 고객 관련) | Duke Energy 노스캐롤라이나 자회사가 NC Public Staff와 10/7 합의(settlement) 도달 — Amazon·Google·Meta·Microsoft 등 대형 데이터센터 고객에 "High Load Factor" 별도 요금제 적용 및 전용설비 선납 의무화로 기존 고객에 비용 전가 방지 | 15:53 | Unite.ai / QC News (Finnhub 수집) [P1] |

---

## [5] AI 인프라 — 공급 측

| 기업 | 뉴스 제목 | 사실 내용(무슨 일이) | 출처일자 | 출처+태그 |
|------|-----------|----------------------|----------|-----------|
| NVDA | Microsoft와 RTX Spark 탑재 Windows AI PC 공동 발표 | 샌프란시스코 행사에서 Nvidia RTX Spark 칩 탑재 "Surface Laptop Ultra"($2,600~$5,900) 공개. 로컬 AI 모델 구동 속도가 MacBook Pro M5보다 2배 빠르다고 발표. Asus·Dell·HP·Lenovo 동급 제품과 함께 10/16 출시 예정 | 2026-10-07 | TechCrunch / Bloomberg [P1] |
| NVDA | SpaceX, Nvidia 칩 구매용 $400억 자금조달 추진 | SpaceX가 Nvidia AI칩 구매를 위해 은행대출 $100억 + 투자등급채권 $300억 조달을 협의 중(PIMCO 검토, Apollo Global 주선 보도) | 2026-10-07 | FX Leaders / Yahoo Finance [P3] |
| AVGO | 해당 구간(10/6~10/7) 신규 공급망 뉴스 확인되지 않음 | — | — |
| AMD | Lisa Su, 2027년 AI칩 공급 대폭 확대 계획 발표(대만에서 발표, 3~5년 선행 계획) | 2026-10-06 | Reuters (Investing.com 재게재) [P2] |
| AMD | Acer·ASUS·Foxconn·Quanta 등과 CPU·GPU·AI컴퓨팅 생산능력 확대 논의 중 | 2026-10-06 | Benzinga/Gurufocus [P3] |
| TSM | 9월 매출 10/8 발표, 3분기 실적 컨퍼런스 10/15 예정(구간 내 신규 수치 발표 없음) | 확인(발표예정일) | Barchart/TradingKey [P3] |
| ANET | AMD·Arm·Broadcom·d-Matrix·Meta·Microsoft·Qualcomm과 공동 개발한 오픈 이더넷 랙스케일 AI 포트폴리오 발표. 랙당 최대 144개 가속기 지원(크로스랙 최대 1,024개), 액체냉각 지원 | 2026-10-07 | Gurufocus [P3] |
| ANET | 2026년 3분기(9월 마감) 실적을 11/3(화) 발표한다고 공지 | 2026-10-06 | BusinessWire [P1] |
| CRDO | 해당 구간 신규 공급망 뉴스 확인되지 않음 | — | — |
| CLS | 2026년 3분기 실적(10/26 장마감 후) 및 Investor and Analyst Day를 10/27(화) 개최한다고 공지 | 2026-10-06 | GlobeNewswire(기업 보도자료) [P1] |
| VRT | AI 데이터센터 전력 공급 가속화를 위해 UtilityInnovation Group(UIG)을 현금 약 $14.5억(최대 $11.5억 추가 마일스톤 조건 포함)에 인수하는 계약 체결 | 확인(구간 내 보도, 정확한 발표일 N/A) | Vertiv 공식 발표 [P1] |
| VRT | BMO Capital(Outperform·목표가 $329, 10/5)과 GLJ Research(Sell·목표가 $188, 10/6)가 엇갈린 신규 커버리지 개시 | 2026-10-05~06 | Investing.com [P3] |
| SMCI | Mizuho가 목표가를 $35→$43로 상향, 주가 3.4% 상승 | 2026-10-07 | MarketBeat [P3] |
| APLD | 핀란드에서 최대 1GW 전력용량 확보(노르딕 지역 첫 해외 개발) | 2026-10-06 | TradingKey [P3] |
| APLD | 1분기(FY2027) 실적: 매출 $3.419억(전년비 +322%), 서비스 매출 $2.628억(+225%), 데이터센터 임대·호스팅 매출 $7,910만. 부채 $64억으로 확대, 발표 후 주가 6% 하락 | 2026-10-07 | MoneyCheck/StocksToTrade [P3] |

**추가 시그널(HBM·DRAM·NAND·AI서버·GPU·광모듈)**: 2026-10-06~10-07 구간에 특정되는 1차 출처를 확인하지 못함 — 가장 근접한 TrendForce DRAM/NAND 계약가 전망(4Q26 DRAM +10~15%, NAND +15~20%)은 2026-09-30 발표로 구간 직전이며, AI서버 출하 전망 상향(28%→31%)·광모듈 성장 전망 등은 정확한 발표일 확인 불가 — 모두 N/A(확인 필요)로 처리.

---

## [5-A] AI 인프라 — 수요 측 / 하이퍼스케일러 CAPEX

신규 변동 없음 — 직전 가이던스 유지. Microsoft·Amazon·Alphabet·Meta 모두 실적시즌 전이며, 다음 실적발표 예정일은 각각 Microsoft 2026-10-27(미확정), Alphabet 2026-10-28, Meta 2026-10-28, Amazon 2026-10-29(출처: 복수 소스 교차확인, 각 사 공식 확정 공지 전) [P3].

---

## [6] 시총 상위 10 — AI 무관 일반 이슈

| 기업 | 사실 내용 | 출처일자 | 출처+태그 |
|------|-----------|----------|-----------|
| MSFT | 해당 구간(10/5~10/7) 신규 일반 이슈 확인 안 됨 | 확인 필요 | [N/A] |
| NVDA | 전직 Groq 엔지니어 2명(Benjamin Serebrin, Joshua Rubin)이 Nvidia의 Groq 인수(약 $20B, $17B 라이선스+$3B 주식보너스풀 구조)에 대해 주주승인 절차 누락·가치 저평가를 주장하며 델라웨어 법원에 소송 제기 | 2026-10-05 | CNBC · "Nvidia's $20 billion Groq deal faces lawsuit alleging startup's stockholders were shortchanged" [P2] |
| NVDA | 美 DOJ가 Nvidia 반독점 혐의(AI 칩 시장 경쟁제한 여부) 조사 확대, Nvidia 및 제3자 기업에 추가 서브포이나 발송(정확한 발송일자 확인 안 됨) | 확인 필요 | Legal500 보도 [N/A] |
| AAPL | 연방판사(James V. Selna)가 Apple에 Masimo Corp.와의 Apple Watch 심박모니터링 특허소송 관련 추가 이자 $1.84억 지급 명령(기존 배상금 $6.34억에 추가, 총 $8.18억) | 2026-10-05~06 | Bloomberg Law / 9to5Mac / AppleInsider [P2]/[P3] |
| AMZN | Amazon·FTC가 2027년 예정 복수 소송(광고가격 책정 소송 등) 일정 조정을 두고 워싱턴 연방법원에서 공방 — 3월 재판 개시 유지 여부 쟁점 | 2026-10-07 | Law360 · "Scheduling 'Cascade' Hangs Over Amazon's FTC, Calif. Trials" [P3] |
| GOOGL | Alphabet 상대 증권사기 집단소송 다수 신규 제기(복수 로펌). Gemini 3.5 Pro 훈련 결과 부진·출시 지연 조기 미공시 주장, 공시 후 주가 4.4% 하락 관련(매수기간 2026-05-19~07-16) | 2026-10-05~06 | GlobeNewswire/PR Newswire 로펌 보도자료 [P3] (법원 공식 확인 아님, 원고측 로펌 홍보성 보도자료) |
| META | FTC가 항소법원에 Meta 반독점(개인 소셜네트워킹 독점) 소송 부활 요청 — Boasberg 판사의 2025-11-18 Meta 승소 판결에 대한 항소 절차 | 2026-10-06 | MediaPost · "FTC Presses To Revive Antitrust Case Against Meta" [P3] |
| AVGO | 해당 구간 신규 일반 이슈 확인 안 됨 | 확인 필요 | [N/A] |
| BRK.B | Berkshire Hathaway가 10/1~10/2 거래로 Lennar(LEN) 주식 약 $1.926억 규모 추가 매수, 지분율 약 12%로 확대 | 2026-10-01~03 | CNBC · "Berkshire buys more Lennar shares, but pace of purchases slows" [P2] |
| TSLA | FSD v14.3.11(AI4 하드웨어용)·v14.3 Lite(AI3/HW3용) 신규 소프트웨어 업데이트 배포 시작(Start Self-Driving from Park, Speed Profiles, Arrival Options 기능 포함) | 2026-10-07 | Not a Tesla App(릴리스 노트) [P3] |
| TSM | 미 ITC의 Longitude Licensing/Marlin Semiconductor 특허침해 조사는 2026-08-06 합의로 종결(구간 이전 사안, 신규 변동 없음) | 확인 필요 | [N/A] |

---

## [7] 기관·대형 자금 수급

| 항목 | 종목 | 사실 내용 | 규모(수치) | 출처+태그 |
|------|------|-----------|------------|-----------|
| ETF 자금흐름 | SOXX (iShares Semiconductor) | 2026-10-06 보도 기준 주간 유출(발행주식수 8,520만→8,290만주로 감소) | 약 -14억 달러, 발행주식수 -2.7% | ETF Channel · "SOXX Sees $1.4 Billion ETF Outflow" · 2026-10-06 [P3] |
| ETF 자금흐름 | SMH (VanEck Semiconductor) | 2026-10-05 기준 순자산총액(AUM). 일간 유출입액(달러)은 확인 안 됨 | 순자산 775.1억 달러(AUM, 10/5) | VanEck 공식 페이지 [P2] / 일간 유출입액 N/A |
| ETF 자금흐름 | QQQ (Invesco QQQ Trust) | 2026-10-05~07 구간 일간 자금흐름 확인 안 됨 | N/A | 확인 필요 [N/A] |
| 옵션시장 가격반영 | NVDA | 옵션 마켓메이커 프라이싱 기준 10월 말까지 시총 $6조 도달확률 약 50%, 12/18까지 약 67%로 반영. 콜옵션이 등가 풋옵션보다 높은 내재변동성(콜 스큐) | $6조 도달확률(10월말)≈50%, (12/18)≈67%; 30일 IV 44.58 | Bloomberg · "Nvidia Heads for $6 Trillion..." · 2026-10-06 [P2] |
| Nvidia 시가총액 | NVDA | 2026-10-07 종가 기준 추정(거래소 공식 종가 재확인 필요) | 종가 약 $237.47~237.53, 시총 약 5.78조 달러 | stockanalysis.com / companiesmarketcap.com [P3] — 확인 필요 |
| 블록딜·대량거래 | NVDA, AVGO | 2026-10-05~07 구간 블록딜·대량거래 보도 확인 안 됨 | N/A | 확인 필요 [N/A] |
| 옵션 이상거래 | AVGO, NVDA | 날짜가 10/5~10/7 구간으로 특정되지 않는 참고치만 확인(AVGO P/C 거래량비율 0.45, NVDA OI P/C 0.87·거래량 P/C 0.54) — 구간 특정 불가로 참고용 | — | Barchart/Fintel 종합 [P3] — 확인 필요 |

---

## [7-A] Insider Trading (SEC Form 4)

| 기업 | 내부자 | 직책 | 매수/매도 | 거래유형 | 규모 | 거래일 | 출처 |
|------|--------|------|-----------|-----------|------|--------|------|
| CRDO | Lam Yat Tung | COO | 매도 | 10b5-1 사전계획에 따른 공개시장 매도 | 50,000주 @ $205.22 | 2026-10-01 | StockTitan(SEC Form 4 인용) [P3] |
| CRDO | Lam Yat Tung | COO | 처분 | RSU 베스팅 세금원천징수 처분(매도 아님) | 3,180주 @ $210.17 | 2026-10-02 | SEC EDGAR Form 4 재인용 [P3] |
| CRDO | Lam Yat Tung | COO | 처분 | 증여(Gift, 매도 아님) | 75,000주 | 2026-09-30(10/2 제출) | SEC EDGAR Form 4 재인용 [P3] |
| CRDO | Daniel W. Fleming | CFO | 처분 | RSU 베스팅 세금원천징수 처분(매도 아님) | 2,460주 @ $218.64 | 2026-10-05 | StockTitan [P3] |
| CRDO | Cheng Chi Fung | CTO | 매도 | 공개시장 매도 및 세금원천징수 처분(혼합) — 세부 유형 구분 재확인 필요 | 수량 확인 필요 | 2026-10-05~06 | SEC EDGAR Form 4 재인용 [P3] — 확인 필요 |
| VRT | Michael Resha | EVP (Logistics & Op Ex) | 취득 | RSU 신규 부여(매매 아님) | 2,503주+690주=3,193주 @ $253.62 | 2026-10-05 | SEC EDGAR Form 4 [P1] |
| NVDA | — | — | — | — | — | — | N/A — 2026-10-04~07 구간 신규 공시 확인 안 됨 |
| AVGO | — | — | — | — | — | — | N/A — 2026-10-04~07 구간 신규 공시 확인 안 됨 |
| SMCI | — | — | — | — | — | — | N/A — 2026-10-04~07 구간 신규 공시 확인 안 됨 |
| APLD | — | — | — | — | — | — | N/A — 2026-10-04~07 구간 신규 공시 확인 안 됨 |
| CLS | — | — | — | RSU 베스팅 세금원천징수 처분(추정) — 구체적 인물·수량 확인 안 됨 | 확인 필요 | 2026-10-01 | StockTitan [P3] — 확인 필요(정보 불충분) |

---

## [8] 향후 14일 주요 일정 (2026-10-08 ~ 2026-10-22)

**경제 일정**

| 날짜 | 시각(ET·KST) | 이벤트 | 컨센서스 | 이전치 | 출처 |
|------|--------------|--------|----------|--------|------|
| 10/14 (수) | 08:30 ET / 21:30 KST | CPI (9월) | 확인 필요 | 확인 필요 | BLS [P1] |
| 10/14 (수) | 08:30 ET / 21:30 KST | 실질임금 (9월) | — | — | BLS [P1] |
| 10/15 (목) | 08:30 ET / 21:30 KST | PPI (9월) | 확인 필요 | 확인 필요 | BLS [P1] |
| 10/15 (목) | 08:30 ET / 21:30 KST | 소매판매 (9월, Advance) | 확인 필요 | 확인 필요 | Census Bureau [P1] |
| 10/16 (금) | 08:30 ET / 21:30 KST | 수입·수출물가지수 (9월) | — | — | BLS [P1] |
| 10/20 (화) | 10:00 ET / 23:00 KST | 주별 고용·실업(9월, 州단위) | — | — | BLS [P1] |
| 10/21 (수) | 10:00 ET / 23:00 KST | 임금근로자 주간소득(3Q) | — | — | BLS [P1] |
| 10/17~10/29 | — | FOMC 블랙아웃 기간 시작(10/17부터, Fed 인사 공개발언 중단) | — | — | Fed 관행 [P2] |

참고: 10/27~28 FOMC 회의(금리결정 10/28 14:00 ET)는 이번 14일 창(10/22까지) 밖.

**기업 일정**

| 날짜 | 기업 | 이벤트 | 컨센서스 EPS | 컨센서스 매출 | 출처 |
|------|------|--------|--------------|---------------|------|
| 10/13 (화) | JPMorgan Chase (JPM) | 3분기 실적발표(개장 전) | $5.90 | 약 $51.19B | MarketBeat/TradingView [P3] |
| 10/13 (화) | Wells Fargo (WFC) | 3분기 실적발표(개장 전) | $1.84 | 약 $22.31B | MarketBeat [P3] |
| 10/13 (화) | Goldman Sachs (GS) | 3분기 실적발표(개장 전) | $13.87~$15.39(출처 간 편차) | $17.02B~$17.42B | MarketBeat/scanx [P3] |
| 10/13 (화) | Citigroup (C) | 3분기 실적발표(개장 전) | $2.64~$2.68 | $23.70B~$23.76B | MarketBeat/TradingView [P3] |
| 10/14 (수) | Bank of America (BAC) | 3분기 실적발표(개장 전) | $1.16~$1.19 | $30.65B~$31.2B | MarketBeat/Yahoo Finance [P3] |
| 10/14 (수) | Morgan Stanley (MS) | 3분기 실적발표 | $2.95~$3.10 | $19.97B~$20.66B | MarketBeat/TradingView/scanx [P3] |
| 10/15 (목) | TSMC (TSM) | 3분기 실적 컨퍼런스(대만 14:00/02:00 ET) | $4.39~$4.46 | $45.36B~$45.8B | TSMC IR/MarketBeat [P1/P3] |
| 10/20 (화) | Netflix (NFLX) | 3분기 실적발표(16:01 ET) | $0.822 | 약 $12.88B | Netflix IR/Yahoo Finance [P1/P3] |

창(10/8~10/22) 내 NVDA·AVGO·AMD·MSFT·GOOGL·META·AAPL·AMZN 실적발표는 확인되지 않음(모두 10월 말~11월 초로 추정).

---

## [9] 오늘의 사실 목록 (순위 없음)

```
[1] S&P500 7,801.77(-0.22%), NASDAQ 27,538.69(-0.22%), Dow 51,179.87(-0.66%) · 10년물 금리상승+유가 재상승 배경 보도 · [P2]
[1] Russell2000 2,792.89(-1.31%) · [P3]
[1] SOX 10/7 종가 확인 불가 · [N/A]
[1] Brent 10/7 종가 출처 간 불일치($100.2~100.9 범위) · [N/A]
[1-A] VIX 15.08(+0.47%), VIX9D 11.78(-2.08%) · VIX3M/VIX 1.175·VIX/VIX9D 1.280(콘탱고) · [P1]
[1-A] SPX P/C(거래량) 1.101 · QQQ P/C(거래량) 1.212 · [P1]
[2] FOMC 9월 의사록 공개(10/7 14:00 ET), 9/16 회의 25bp 인상 12-0 찬성, "연내 추가 인상 적절" 다수 의견 · [P1]
[2] Fed Schmid(KC연은), "inflation is frustrating, must be fixed" 발언(10/6) · [P2]
[2] 미 10년물 국채수익률 10/7 약 5.365%(2002년 4월 이후 최고) · [P2]
[2] CME FedWatch 10/28 FOMC 동결확률 78.4% / 인상 21.6% · [P2]
[3] 10/6~10/7 구간 CPI·PPI·GDP·고용 등 지표 발표 없음 · [N/A]
[3] 미 연방정부 2026-12-11까지 자금지원 확정, 셧다운 아님 · [P2]
[4] Skydance -7%, WBD 인수 완료 후 부채부담 우려+Fitch 신용등급 하향 영향 지속 · [P2]
[4] Allegion -6%, 위험회피 심리(기업 고유뉴스 없음) · [P2]
[4] Comfort Systems USA -6%, Zacks "Strong Buy"→"Hold" 하향 · [P2]
[4-A] Micron, 주식분할 계획 없음(자사주매입 집중 발표) · [P1]
[4-A] Marvell, 선행PER 약 62배로 고평가·고객집중 리스크 지적(Trefis) · [P2]
[4-A] Duke Energy, 데이터센터 고객 전용 요금제 합의(10/7, NC) · [P1]
[5] Nvidia-Microsoft, RTX Spark 탑재 Surface Laptop Ultra 공동발표(10/16 출시예정) · [P1]
[5] SpaceX, Nvidia 칩 구매용 $400억 자금조달 추진(은행대출$100억+채권$300억) · [P3]
[5] AMD Lisa Su, 2027년 AI칩 공급 대폭 확대 계획 발표 · [P2]
[5] Arista Networks, 오픈 이더넷 랙스케일 AI 포트폴리오 발표(랙당 최대144개 가속기) · [P3]
[5] Vertiv, UtilityInnovation Group 약 $14.5억 인수계약 · [P1]
[5] Super Micro, Mizuho 목표가 $35→$43 상향(+3.4%) · [P3]
[5] Applied Digital, 핀란드 1GW 전력확보(해외 첫 진출) + FY27 1Q 매출 +322%YoY, 부채 $64억 확대 · [P3]
[5-A] 하이퍼스케일러 CAPEX 가이던스 변동 없음(실적발표 10/27~29 추정) · [P3]
[6] Nvidia, 전직 Groq 엔지니어들이 $20B 거래 관련 주주소송 제기(10/5) · [P2]
[6] Nvidia, DOJ 반독점 조사 확대 보도(서브포이나 추가발송) · [N/A]
[6] Apple, Masimo 특허소송 추가이자 $1.84억 지급명령(총 $8.18억) · [P2]
[6] Alphabet, Gemini 3.5 Pro 지연 관련 증권사기 집단소송 다수 제기(원고측 로펌 보도) · [P3]
[6] Meta, FTC가 항소법원에 반독점소송 부활 요청 · [P3]
[6] Berkshire Hathaway, Lennar 지분 10/1~2 $1.926억 추가매입(지분 약12%) · [P2]
[6] Tesla, FSD v14.3.11/v14.3 Lite 신규 업데이트 배포 시작(10/7) · [P3]
[7] Nvidia 옵션시장, 10월말까지 시총 $6조 도달확률 약50% 가격반영(10/6 기준) · [P2]
[7] SOXX ETF 주간 유출 약 $14억(10/6 보도) · [P3]
[7] 블록딜·대량거래 10/5~10/7 구간 확인 불가 · [N/A]
[7-A] Credo COO Lam Yat Tung, 10b5-1 매도 50,000주(10/1)+RSU세금처분 3,180주(10/2)+증여 75,000주 · [P3]
[7-A] Credo CFO Daniel Fleming, RSU세금처분 2,460주(10/5) · [P3]
[7-A] Vertiv EVP Michael Resha, RSU 3,193주 신규부여(10/5, 매매 아님) · [P1]
[7-A] NVDA·AVGO·SMCI·APLD 10/4~10/7 구간 Form4 신규공시 없음 · [N/A]
[8] CPI 10/14, PPI 10/15, 소매판매 10/15, FOMC 블랙아웃 10/17 시작 · [P1]
[8] 대형은행 실적 10/13(JPM·WFC·GS·C)·10/14(BAC·MS), TSMC 실적 10/15, Netflix 실적 10/20 · [P1/P3]
[8] 빅테크(MSFT·GOOGL·META·AAPL·AMZN)·NVDA·AVGO·AMD 실적은 모두 10/22 이후(10월말~11월초 추정) · [P3]
```
