# 미국 시장 데일리 수집 결과 (Collect)
# 기준일: 2026-10-29 (목) · 미국 정규장 종가 기준: 2026-10-28 (수) · 실행모드: 실적시즌
# 생성시각(KST): 2026-10-29 06:45

---

## [1] 미국 주요 지수

| 항목 | 종가/수치 | 1D | 5D | 1M | YTD | (보도된) 원인 | 출처+태그 |
|------|-----------|----|----|----|-----|----------------|-----------|
| S&P500 | 7,743.98 | +0.28% | -0.17% | +0.95% | +13.13% | FOMC 금리 동결(3.75~4.00%) 및 파월 후임 Warsh 의장 기자회견 이후 반등 | Yahoo Finance chart API (자동수집) [P1] |
| 나스닥종합 | 26,549.85 | +0.27% | -0.57% | -0.92% | +14.23% | 반도체·AI 관련주 강세(마이크론 급등 등) 속 혼조 | Yahoo Finance chart API (자동수집) [P1] |
| 다우 | 52,475.1 | +0.19% | -0.72% | +2.19% | +9.18% | N/A | Yahoo Finance chart API (자동수집) [P1] |
| 러셀2000 | 2,830.51 | +0.41% | +1.78% | +0.80% | +14.05% | N/A | Yahoo Finance chart API (자동수집) [P1] |
| SOX (필라델피아 반도체) | 11,684 | +1.75% | +1.55% | -7.48% | +64.96% | 마이크론 급등(SK하이닉스 실적 호조·메모리 공급부족 전망 보도 영향), AVGO·AMD 관련 AI 수주 뉴스 | Yahoo Finance chart API (자동수집) [P1]; CNBC "Fed chairman talks tough on inflation — plus, what's behind Micron's big rally" 2026-10-28 15:17 ET [P2] |
| Brent | 110.44 | -3.02% | N/A | N/A | N/A | N/A | Yahoo Finance chart API (자동수집) [P1] |

> 지수·Brent 수치는 `0_data.md`에서 검색 없이 그대로 옮김. '원인' 열은 보도된 사실만 기재(본인 추론 없음). 확인 안 된 원인은 N/A.

---

## [1-A] 선물·변동성 구조 (전부 `0_data.md`에서 옮김 — 검색 없음)

**선물 (한국 아침 시점)**

| 항목 | 현재가 | 전일 대비 | 직전 종가 | 기준시각(ET) | 출처+태그 |
|------|--------|-----------|-----------|--------------|-----------|
| S&P500 선물 (ES) | 7,760.75 | +0.03% | 7,758.25 | 2026-10-28 16:59 | Yahoo Finance chart API (자동수집) [P1] |
| 나스닥100 선물 (NQ) | 29,756.25 | -0.19% | 29,812 | 2026-10-28 16:59 | Yahoo Finance chart API (자동수집) [P1] |
| 다우 선물 (YM) | 52,771 | +0.37% | 52,579 | 2026-10-28 16:59 | Yahoo Finance chart API (자동수집) [P1] |
| 러셀2000 선물 (RTY) | 2,849.5 | +0.74% | 2,828.5 | 2026-10-28 16:59 | Yahoo Finance chart API (자동수집) [P1] |

**변동성 구조**

| 항목 | 수치 | 전일 대비 | 출처+태그 |
|------|------|-----------|-----------|
| VIX (30일) | 16.91 | -3.48% | CBOE 지연시세 API (자동수집) [P1] |
| VIX9D (9일) | 15.6 | -6.31% | CBOE 지연시세 API (자동수집) [P1] |
| VIX3M (3개월) | 19.22 | -1.79% | CBOE 지연시세 API (자동수집) [P1] |
| VVIX (VIX의 변동성) | 96.61 | -2.86% | CBOE 지연시세 API (자동수집) [P1] |
| SKEW (테일리스크) | 148.74 | -0.32% | CBOE 지연시세 API (자동수집) [P1] |

**VIX 기간구조 (산출 비율)**

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.137 | 콘탱고 |
| VIX / VIX9D | 1.084 | 콘탱고 |

**Put/Call 비율 (CBOE 옵션 체인 직접 집계)**

| 대상 | P/C(거래량) | P/C(미결제약정) | 콜 거래량 | 풋 거래량 | 출처+태그 |
|------|-------------|------------------|-----------|-----------|-----------|
| S&P500 지수옵션 (SPX) | 1.143 | 1.457 | 1,862,735 | 2,128,621 | CBOE 지연시세 API (자동수집) [P1] |
| 나스닥100 ETF 옵션 (QQQ) | 1.105 | 1.425 | 2,342,657 | 2,589,104 | CBOE 지연시세 API (자동수집) [P1] |

---

## [2] 금리 / 연준

| 항목 | 사실 내용(발언·수치) | 출처+태그 |
|------|------------------------|-----------|
| 미 2년물 금리 (FRED, 2026-10-27 기준) | 4.70% (전일 대비 +2.0bp, 5D -9.0bp, 1M -11.0bp, YTD +123.0bp) | FRED:DGS2 (자동수집) [P1] |
| 미 10년물 금리 (FRED, 2026-10-27 기준) | 4.99% (전일 대비 -1.0bp, 5D -13.0bp, 1M -18.0bp, YTD +81.0bp) | FRED:DGS10 (자동수집) [P1] |
| 미 10년물 금리 (Yahoo ^TNX, 당일 참고, 2026-10-28 14:59 ET) | 5.045% (전일 대비 +5.2bp) | Yahoo chart API (자동수집) [P1] |
| 미 30년물 금리 (Yahoo ^TYX, 당일 참고, 2026-10-28 14:59 ET) | 5.361% (전일 대비 +5.6bp) | Yahoo chart API (자동수집) [P1] |
| 10Y-2Y 스프레드 (FRED DGS10-DGS2, 2026-10-27 기준) | 0.29%p (전일 대비 -3.0bp) | FRED (자동수집) [P1] |
| FOMC 금리결정 (2026-10-27~28 회의, 10-28 14:00 ET 발표) | 연방기금금리 목표 범위 3.75~4.00%로 동결(직전과 동일). 12명 투표위원 중 2명(Fed 이사 Lisa Cook, 클리블랜드 연은 총재 Beth Hammack)이 25bp 인상에 반대표(동결 대신 인상 선호) | CNBC "Fed rate decision October 2026" 2026-10-28 [P2]; CNN "Fed keeps interest rates unchanged, but two officials dissented in favor of a rate hike" 2026-10-28 [P2] |
| 연준 의장 Kevin Warsh 발언 (2026-10-28 기자회견) | "2% — nothing higher"(인플레이션 목표), "There is no soft inflation target." 발언. 2027년부터 금리결정 회의 횟수를 축소하겠다고 발표(연 8회 유지하되 2027년 1회는 금리결정 없이 통화정책 전략 논의 전용, 2028년엔 2회로 확대) | CNBC "Fed meeting recap: Warsh says central bank will host fewer rate-setting meetings in future years" 2026-10-28 [P2] |
| 채권투자자 Jeff Gundlach(DoubleLine) 발언 (2026-10-28, CNBC 인터뷰) | "What are you waiting for? You just upgraded the economy right here." / "We're headed to 4% handle headline CPI. The commodity index is rising in a bull market, and I don't understand why the Fed is so reluctant to move." 9월 회의에서 25bp가 아닌 50bp 인상을 했어야 한다는 견해 및 12월 회의에서 인상이 "필요할 것"이라는 본인 전망을 밝힘(유가가 의미 있게 하락하지 않는 한) | CNBC "Bond investor Jeff Gundlach on Fed's rate pause: 'What are you waiting for?'" 2026-10-28 15:05 ET [P2] |
| CME FedWatch — 10/28 회의 동결 확률 (회의 전날 기준) | 89.7~90.6% 범위로 보도(CME FedWatch 집계 인용, 단일 확정값 아님) | Bloomingbit "Odds of Fed Rate Hold on Oct. 28 Rise to 90.6%" [P2] (최종확인 2026-10-28) |
| CME FedWatch — 12월(12/8~9) 회의 인상 확률 (10/28 기준 시장 반영) | "80% 초과"로 CNBC 보도, 별도로 81%로 보도한 매체도 있음(소스 간 소폭 차이) | CNBC 2026-10-28 [P2]; fnnews.com "U.S. Fed holds rates steady despite high inflation; odds of a December hike at 81%" 2026-10-29 [P3] |

> Fed 발언은 발언 자체만 인용. 해석 라벨(비둘기적/매파적 등) 미기재.

---

## [3] 주요 경제지표

N/A — 2026-10-28(ET) 발표된 CPI·Core CPI·PCE·Core PCE·PPI·GDP·고용·실업률·실업수당·소매판매·ISM 지표 없음. 해당일 유일한 주요 이벤트는 FOMC 금리결정([2] 참조)이었다. [P2] (경제캘린더 교차확인)

참고(발표 예정, 본문 수치 미기재 — [8] 일정표로 이동):
- 2026-11-02 10:00 ET 10월 ISM 제조업 PMI 예정 — 예상치(Reuters/Bloomberg/Dow Jones/FactSet/Briefing/MarketWatch/CNBC 서베이) 미확인 — N/A(확인 필요)
- 2026-11-06 8:30 ET 10월 비농업고용·실업률 예정 — 예상치 미확인 — N/A(확인 필요)
- 2026-11-10 8:30 ET 10월 CPI 예정(정상 일정, 지연 없음 확인) — 예상치 미확인 — N/A(확인 필요)
- 정부 셧다운 관련: 2026-10-28 기준 활성화된 연방정부 셧다운 없음. 직전 셧다운은 2025-10-01~2025-11-12(43일)로 이미 종료. FY2027 예산은 2026-09-02 서명으로 2026-12-11까지 자금 조달 확정. [P2] (복수 매체 교차확인)

---

## [4] 특징 종목 (±5% 이상·거래량 급증, [5]/[5-A]/[6] 전담 종목 제외)

| 종목 | 티커 | 등락률 | 거래량 | (보도된) 핵심 사실 | 출처+태그 |
|------|------|--------|--------|---------------------|-----------|
| Genmab | GMAB | +21%~+33%(매체별 상이) | N/A | 두경부암 Phase 3 데이터(petosemtamab+Keytruda 병용, 사망률 50% 감소) 발표 | Bloomberg/Investing.com 2026-10-28 [P2] |
| Axogen | AXGN | +32.9% | N/A | 3분기 실적 호조 + BioCircuit 인수 완료 | 2026-10-28 [P3] |
| Replimune | REPL | +22.8% | N/A | 손실 축소 + RP1 초기 처방 증가 | 2026-10-28 [P3] |
| Labcorp | LH | +9.1%(프리마켓) | N/A | 3분기 실적 호조 + 가이던스 상향 | 2026-10-28 [P3] |
| Enphase Energy | ENPH | -17%~-20%(프리마켓) | N/A | 3분기 실적 부진, 4분기 가이던스 약세, 주택용 태양광 수요 둔화, 6년 최저 수준 | 2026-10-28 [P3] |
| Brinker International | EAT | +8.6% | N/A | 칠리스 1분기 실적 호조 + 연간 가이던스 상향 | 2026-10-28 [P3] |
| Wingstop | WING | +11.2% | N/A | EPS 서프라이즈(매출은 예상 하회) | 2026-10-28 [P3] |
| Cheesecake Factory | CAKE | -7.7% | N/A | 3분기 실적 호조에도 밸류에이션·내부자 매도 우려, 보수적 4분기 톤 | 2026-10-28 [P3] |
| Ensign Group | ENSG | +7.3%~+9.9% | N/A | 3분기 실적 호조 + 가이던스 상향 | 2026-10-28 [P3] |
| Fortinet | FTNT | 정규장 -3.51%, 애프터마켓 -14%~-25.6%(소스 간 편차) | N/A | 실적 호조(beat-and-raise)에도 하락 — 구체적 사유 매체 간 불일치 | 2026-10-28 [P2]/[P3] |
| Phillips 66 | PSX | N/A(등락률 미확인) | N/A | 정제마진 호조로 분기 기준 사상 최대 이익 | Reuters 2026-10-28 15:35 ET [P2] |
| GE Vernova | GEV | -6% | N/A | 3분기 수주 290억달러(+96% YoY, 유기 기준), 매출 +27% YoY(유기 18%), 연간 매출 가이던스 +22~25%로 상향, 연말 수주잔고 2,000억달러 초과 전망에도 주가 하락 | GE Vernova Form 8-K(SEC) 2026-10-28 [P1]; 24/7 Wall St 2026-10-28 [P3] |
| F5 | FFIV | N/A(등락률 미확인, "10년래 최악의 하루"로 보도) | N/A | AI 투자 비용 부담 관련 우려로 급락 | Yahoo/매체 2026-10-28 [P3] |
| Frontier Airlines | ULCC | N/A(등락률 미확인) | N/A | 항공권 가격 71% 급등 보도 | CNBC 2026-10-28 09:50 ET [P2] |

---

## [4-A] 섹터별 뉴스 (`0_data.md` Finnhub 수집분, [4]/[5]/[6] 중복 제외)

| 섹터 | 종목 | 사실 내용(무슨 일이) | 발행시각(ET) | 출처+태그 |
|------|------|----------------------|--------------|-----------|
| 금융 | JPM | 고수익률 환경에서 채권 매력도 관련 보도 | 2026-10-28 15:29 | Yahoo (Finnhub 수집) [N/A 매체확인불가] |
| 금융 | JPM | 다우존스 편입 종목 중 펀더멘털 의문 제기 종목 관련 기사 | 2026-10-28 14:46 | Yahoo (Finnhub 수집) [N/A 매체확인불가] |
| 에너지 | XOM | 정유 대형사들의 현금 보유 증가 및 활용 계획 관련 기사 | 2026-10-28 14:28 | Yahoo (Finnhub 수집) [N/A 매체확인불가] |
| 에너지 | XOM | Valero 주가 하락 원인 분석 기사 | 2026-10-28 14:01 | Yahoo (Finnhub 수집) [N/A 매체확인불가] |
| 헬스케어 | UNH | 고금리 환경에서 저평가된 블루칩 2종 관련 기사(Fed 동결 가능성 전제) | 2026-10-28 11:23 | Yahoo (Finnhub 수집) [N/A 매체확인불가] |
| 헬스케어 | UNH | Molina Healthcare vs ELV·UNH 마진 회복·인수 비교 기사 | 2026-10-28 09:12 | Yahoo (Finnhub 수집) [N/A 매체확인불가] |
| 헬스케어 | UNH | CVS 3분기 실적 프리뷰(배당 수익률 약 3%) | 2026-10-28 08:15 | SeekingAlpha (Finnhub 수집) [P3] |
| 소비재·유통 | AMZN | Generac 3분기 실적콜 요약 | 2026-10-28 14:20 | Yahoo (Finnhub 수집) [N/A 매체확인불가] |
| 소비재·유통 | AMZN | Amazon 실적 프리뷰 — 클라우드 성장에 대한 월가의 긍정적 시각 보도 | 2026-10-28 13:50 | Yahoo (Finnhub 수집) [N/A 매체확인불가] |

> 반도체·AI 섹터의 Finnhub 수집분(NVDA/AVGO 관련)은 [5]에서 상세 기재하므로 여기서 반복하지 않음.

---

## [5] AI 인프라 — 공급 측

| 기업 | 뉴스 제목 | 사실 내용(무슨 일이) | 출처일자 | 출처+태그 |
|------|-----------|----------------------|----------|-----------|
| NVDA | DOJ probes Nvidia's $13B Hugging Face deal | 미 법무부(DOJ)가 Nvidia의 약 130억달러 규모 Hugging Face 인수 계약에 대해 AI 모델 시장 경쟁 영향을 조사 중이라는 보도 | 2026-10-28 | Bloomberg "DOJ Probes Nvidia's $13 Billion Hugging Face Deal Over AI Competition Concerns" [P2] |
| NVDA | NVIDIA Sets Conference Call for Third-Quarter Financial Results | FY2027 3분기(2026-10-25 마감) 실적 발표 컨퍼런스콜을 2026-11-17로 예정 발표 | 2026-10-28 | GlobeNewswire/Nvidia 보도자료 [P1] |
| AVGO | Broadcom stocks rise with Anthropic financing | Anthropic이 Broadcom 칩을 5년간 구매하는 것을 지원하는 630억달러 규모 금융 구조(Blackstone이 앵커) 보도. Anthropic의 Broadcom향 비취소 주문 1,610억달러 규모라는 보도(2차 매체, 1차 공시로 미확인). D.A. Davidson이 AVGO를 Buy로 상향, 목표가 400달러로 상향 | 2026-10-27~28 | TradingView/GuruFocus, 24/7 Wall St [P3] (금액은 2차 매체 보도, 1차 공시 미확인) |
| AMD | AMD, Meta Advance Strategic Partnership to power Meta's AI Infrastructure | AMD가 Meta 유상증자에 10억달러 투자 결정 발표. AMD Helios 랙스케일 솔루션이 Meta에 도입, AMD EPYC 프로세서가 Meta "Muse" AI 에이전트 구동에 사용 | 2026-10-27~28 | AMD Newsroom [P1] |
| AMD | AMD agrees to acquire World Labs | World Labs(Fei-Fei Li 설립) 전액 주식 인수 계약(약 82억달러 규모로 보도), 공간지능 모델을 AMD AI 하드웨어·소프트웨어에 통합 목적 | 2026-10-28 | 24/7 Wall St 등 2차 보도 [P3] (AMD 1차 공시 미확인) |
| AMD | AMD-Oracle 협력 | 6세대 AMD EPYC가 OCI Compute E7 인스턴스 구동에 사용, AMD Pensando가 Oracle Acceleron 컨버지드 NIC 구동 | 2026-10-27~28 | AMD Newsroom [P1] |
| TSM | TSMC 가격 인상 보도 | TSMC가 CoWoS 첨단 패키징 가격을 10~20% 인상할 가능성이 있다는 보도(고객사에 NVDA·AMD 포함). TSMC 1차 공시로는 미확인 | 2026-10-27~28 | GuruFocus/Yahoo Finance "TSMC Gains 3% on Reported 20% Price Hike for AI Chip Packaging" [P3] |
| ANET | Arista Networks (ANET) Raises 2026 Outlook Following Record Revenue | 3분기 사상 최대 매출 발표, 데이터센터향 AI 기반 이더넷 수요 증가를 근거로 연간 가이던스 추가 상향 | 2026-10-27 | Simply Wall St News [P2/P3] |
| CRDO | N/A | 2026-10-27~28 기간 CRDO 단독 신규 뉴스 확인되지 않음(직전 OCP Global Summit 관련 보도는 10/12~15로 수집 기간 이전) | N/A | N/A — 해당 기간 CRDO 단독 뉴스 없음 |
| CLS | Celestica Announces Third Quarter 2026 Financial Results | 3분기 매출 58.3억달러(+83% YoY), 조정 EPS 3.30달러(+109% YoY), 조정 마진 8.5%(사상 최대) 발표. 연간 매출 가이던스 210억달러로 상향, 2027년 매출 약 400억달러·조정영업마진 9%·조정EPS 21.50달러 목표 제시(하이퍼스케일러·프론티어 AI 랩 수요 근거) | 2026-10-27 | Celestica 실적 발표(StockTitan 경유) [P1/P2] |
| SMCI | Supermicro (SMCI) Stock Gains 7% as Argentum AI Pursues $5B AI Chip Financing | 파트너사 Argentum AI가 AI 칩 구매를 위해 50억달러 규모 금융 조달을 협의 중이라는 보도 | 2026-10-27~28 | GuruFocus [P2] |
| APLD | Applied Digital Jumps 10% as Data Center Stocks Rebound | 데이터센터 관련주 전반 반등(Riot +7%, Core Scientific +4% 동반) 속 APLD 포함 상승. 10/27~28 기간 APLD 단독 신규 수주·계약 발표는 확인되지 않음(섹터 전반 동반 상승으로 보도) | 2026-10-27 | 24/7 Wall St [P3] |
| HBM/DRAM/메모리 시그널 | Micron 급등 배경 | Micron(MU, 대상 티커 아님·맥락 참고) 주가 급등. 동시 발표된 SK하이닉스 3분기 실적(매출·영업이익 큰 폭 증가로 보도) 및 메모리 수요가 공급을 초과해 2030년까지 부족 지속 전망 발언이 메모리·HBM·DRAM·NAND 관련주 전반에 긍정적 영향을 준 것으로 보도 | 2026-10-28 | CNBC "Fed chairman talks tough on inflation — plus, what's behind Micron's big rally" 2026-10-28 15:17 ET [P2]; SK하이닉스 수치는 2차 매체 경유로 1차 공시 미확인 [P3] |

> '투자 의미'·'수혜/피해' 판정 없음. 사실만 기재.

---

## [5-A] AI 인프라 — 수요 측 / 하이퍼스케일러 CAPEX (실적시즌)

| 항목 | 사실 내용(발표 수치·문구) | 전분기 대비(산술) | 출처일자 | 출처+태그 |
|------|---------------------------|--------------------|----------|-----------|
| Alphabet(GOOGL) 3분기 2026 캡엑스 | 3분기 실제 캡엑스 514억달러(약 51.4억달러 오기 주의 — 514억달러 맞음). 2026년 연간 캡엑스 가이던스 1,950~2,050억달러 유지. CFO Anat Ashkenazi는 2027년 캡엑스가 "significantly" 증가해 3,000억달러를 초과할 것이라고 언급(세부사항은 4분기 콜에서 추가 예정) | 2분기(449억달러) 대비 +65억달러(약 +14~15%) | 2026-10-28 | Alphabet 3분기 실적(8-K Ex-99.1, SEC) [P1]; CNBC 2026-10-28 [P2] |
| Alphabet 클라우드/TPU 관련 | Google Cloud 매출 307억달러(+103% YoY). 실적콜에서 TPU 수요("광범위한 고객군에서 강한 수요")를 언급. 2026-10-28 Oracle Cloud를 통해 2027년부터 TPU를 외부에 최초로 제공한다고 발표(Anthropic 기존 최대 100만개 TPU 계약 보유, OpenAI도 TPU 구매 계획 언급). GB200·Blackwell(Nvidia 세대명) 관련 언급은 이번 콜에서 확인되지 않음 | N/A | 2026-10-28 | Google corporate blog(blog.google) [P1]; CNBC "Google alters its cloud playbook, enlisting partners to sell more AI chips" 2026-10-28 [P2] |
| Microsoft(MSFT) CAPEX | 2026년 캘린더 연도 캡엑스 가이던스 약 1,750억달러(4월 최초 전망 1,900억달러에서 하향, 데이터센터·건물 예상 사용연수 변경 반영분 포함). FY2027(2026.7~) 1분기 캡엑스는 500억달러 초과 전망. 10/27~28 기간 신규 변동 없음 — 직전 가이던스 유지 (최종확인 10/20) | N/A | 2026-10-20 | Reuters/사내 가이던스 보도 [P3] (facts.json 이월값) |
| Amazon(AMZN) CAPEX | 2026년 연간 캡엑스 약 2,200억달러 가이던스, 4대 빅테크 중 최대 규모. 최근 분기 프리캐시플로우 2023년來 첫 마이너스 전환. 10/27~28 기간 신규 변동 없음 — 직전 가이던스 유지 (최종확인 10/20). AMZN 3분기 실적은 2026-10-29(목) 장 마감 후 발표 예정(17:00 ET) — 아직 발표 전 | N/A | 2026-10-20 | 복수 매체(Business Insider 등) [P3] (facts.json 이월값); 실적 일정은 TipRanks/MarketBeat 등 복수 어그리게이터 수렴 [P3] |
| Meta(META) CAPEX | 3Q26 캡엑스 349억달러 집행. FY2026 연간 캡엑스 가이던스 1,350억~1,450억달러로 상향(기존 1,300억~1,450억달러, 하단 50억달러 상향). CFO Susan Li는 2027년 캡엑스 구체적 전망은 아직 제시하지 않음(10/21 실적콜). 10/27~28 기간 신규 변동 없음 — 직전 가이던스 유지 (최종확인 10/24). 별도로 Meta는 2026-10-28에 총 375억달러 규모(Class A 보통주+전환우선주) 유상증자를 발표(AMD 10억달러, NVDA 30억달러 참여분 포함) — 캡엑스 수치 자체의 변경은 아님 | N/A | 2026-10-21(Meta 8-K); 유상증자는 2026-10-28 | Meta 8-K Exhibit 99.1(SEC) [P1] (facts.json 이월값); 유상증자는 GuruFocus [P3] |

---

## [6] 시총 상위 10 — AI 무관 일반 이슈

| 기업 | 사실 내용 | 출처일자 | 출처+태그 |
|------|-----------|----------|-----------|
| MSFT | FY2027 1분기 실적: EPS 4.89달러(예상 4.73달러 상회), 매출 922.8억달러(+19% YoY, 예상 906.9억달러 상회), 순이익 366.3억달러, Azure +48% YoY(332억달러), 프리캐시플로우 -27% YoY. 애프터마켓 주가 약 +4% | 2026-10-28 | CNBC/Bloomberg [P2] |
| NVDA | 소비자용 RTX Spark Windows 노트북 출시 발표(2,599달러부터) | 2026-10-28 | GuruFocus [P3] |
| AAPL | 터치스크린 MacBook Pro(2,899달러) 공개, iMac·MacBook Pro M6 예약판매 개시 | 2026-10-28 | CNBC [P2] |
| AMZN | 3분기 실적 미발표(2026-10-29 장 마감 후 예정) — 해당 기간 특이 일반 이슈 확인되지 않음 | N/A | N/A |
| GOOGL | 3분기 실적(2026-10-28 장 마감 후, 1차 출처 SEC 8-K Ex-99.1 기준): 매출 1,275.8억달러(+25% YoY), GAAP 희석 EPS 2.12달러(전년동기 2.87달러에서 하락), 순이익 약 261.7억달러(전년동기 349.8억달러). Google Services +11% YoY(963억달러), Search +12%(5년래 최고 쿼리 성장), Google Cloud +103% YoY(307억달러, 사상 최대). 영업마진 31.8%. 프리캐시플로우 -90.7억달러(예상 -27.0억달러보다 악화). Gemini 앱 사용자 10억명 돌파. 매출·영업이익 모두 시장 예상(매출 약 1,279.6억~1,282.2억달러 범위, 매체별 상이) 하회로 보도 | 2026-10-28 | Alphabet 8-K Ex-99.1(SEC) [P1]; CNBC/Bloomberg [P2] |
| META | LA 소재 법원에서 미성년자 유해성 관련 Meta·Snap 대상 소송 배심원 선정 시작. 유상증자 규모 375억달러(Class A+전환우선주)로 확대, 5배 초과 청약(10/28). 정규장 주가 -1.24% | 2026-10-28 | ABC/CBS [P2/P3]; GuruFocus [P3] |
| AVGO | D.A. Davidson이 Buy 등급 유지하며 목표가 350달러→400달러로 상향(10/28) | 2026-10-28 | GuruFocus 등 [P3] |
| BRK | 2026-10-27~28 기간 특이 일반 이슈 확인되지 않음 | N/A | N/A |
| TSLA | 10/27 +4.04% 이후 10/28 -1.57%. 10/27 상승은 Cybercab 로보택시 차량 데이터 관련 보도와 연결된다는 2차 매체 보도 있으나 주요 와이어(Reuters/Bloomberg/CNBC) 교차확인 안 됨 | N/A(확인불가) | N/A — 2차 어그리게이터만, 미확인 |
| TSM | 주가 10/28 약 +3%, 대만 Commercial Times의 CoWoS 패키징 가격 10~20% 인상 가능성 보도가 배경으로 언급(AI 인프라 관련 — [5] 참조와 중복 배경) | 2026-10-28 | GuruFocus/Yahoo Finance [P3] |

---

## [7] 기관·대형 자금 수급

| 항목 | 종목 | 사실 내용 | 규모(수치) | 출처+태그 |
|------|------|-----------|------------|-----------|
| ETF 자금흐름 | SMH (반도체 ETF) | 2026-10-28 순유입 (10/26 순유출 -6.853억달러에서 반전) | +12.5억달러 | ETF Action [P2] |
| ETF 자금흐름 | SOXX | 10/28 특정 수치 확인 안 됨(검색된 1.969억달러 수치는 10/27로 추정되나 날짜 확정 불가) | N/A(확인 필요) | N/A |
| ETF 자금흐름 | QQQ | 10/28 특정 수치 확인 안 됨 | N/A | N/A |
| 옵션 이상거래 | AVGO | 10/30 만기 350달러 풋 스트라이크 베어리시 스윕 포착(보도) | 약 6.03만달러 | 2차 매체 [P3] |
| 옵션 이상거래 | AVGO | 11/20 만기 355달러 콜 스트라이크 불리시 거래 7,200계약 초과(기존 미결제약정 대비 약 22배) 보도 — 정확한 체결일자 10/28로 특정 불가 | N/A(날짜 미특정) | 2차 매체 [P2]/[P3] |
| 블록딜 | N/A | 10/28 반도체·기술주 관련 확인된 블록딜 프린트 없음 | N/A | N/A — 확인 안 됨 |

> 13F 등 분기·시차 데이터는 미기재(추정 금지). 일간 관측 가능한 프록시만 기재.

---

## [7-A] Insider Trading (SEC Form 4)

| 기업 | 내부자 | 직책 | 매수/매도 | 거래유형 | 규모 | 거래일 | 출처 |
|------|--------|------|-----------|----------|------|--------|------|
| N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A — Form 4 신규 공시 없음 (NVDA·AVGO·CRDO·CLS·APLD·VRT·SMCI 전체, 2026-10-27~28 기준 SEC EDGAR 확인) |

참고(수집기간 이전, 본문 미반영): NVDA 이사 증여 10/7, AVGO CEO 매도 10/7, CRDO 임원 매도 10/19~20, APLD CEO·사장 매수 10/16~19, VRT 이사 매도 9월초, SMCI CEO 배우자 매도 10/7경 — 모두 수집 대상 기간(10/27~28) 이전 공시로 본 섹션에 포함하지 않음.

---

## [8] 향후 14일 주요 일정 (2026-10-28 ~ 2026-11-11, ET)

**경제·연준 일정**

| 날짜(ET) | 시각(ET) | 구분 | 이벤트 | 직전값 | 예상값 | 예상출처 | 출처 |
|----------|----------|------|--------|--------|--------|----------|------|
| 2026-11-02 | 10:00 | macro | 10월 ISM 제조업 PMI | N/A | N/A | N/A | ISM https://www.ismworld.org/supply-management-news-and-reports/reports/rob-report-calendar/ |
| 2026-11-06 | 08:30 | macro | 10월 비농업고용 | N/A | N/A | N/A | BLS https://www.bls.gov/schedule/news_release/empsit.htm |
| 2026-11-06 | 08:30 | macro | 10월 실업률 | N/A | N/A | N/A | BLS https://www.bls.gov/schedule/news_release/empsit.htm |
| 2026-11-10 | 08:30 | macro | 10월 CPI (MoM) | N/A | N/A | N/A | BLS https://www.bls.gov/schedule/news_release/current_year.asp |
| 2026-11-10 | 08:30 | macro | 10월 CPI (YoY) | N/A | N/A | N/A | BLS https://www.bls.gov/schedule/news_release/current_year.asp |
| 2026-11-10 | 08:30 | macro | 10월 Core CPI (MoM) | N/A | N/A | N/A | BLS https://www.bls.gov/schedule/news_release/current_year.asp |
| 2026-11-10 | 08:30 | macro | 10월 Core CPI (YoY) | N/A | N/A | N/A | BLS https://www.bls.gov/schedule/news_release/current_year.asp |

> 다음 FOMC 회의는 2026-12-08~09로 수집 대상 14일 범위(2026-11-11까지) 밖이라 표에 포함하지 않음.
> ISM 제조업·비농업고용·CPI 모두 자격 있는 컨센서스 소스(Reuters/Bloomberg/Dow Jones/FactSet/Briefing/MarketWatch/CNBC 서베이)를 확인하지 못해 예상값·예상출처 N/A로 비움(코드가 값을 버림). 정부 셧다운에 따른 일정 지연은 확인되지 않음(2026-10-28 기준 활성 셧다운 없음, 차기 예산 시한 2026-12-11).

**기업 이벤트**

| 날짜(ET) | 시각(ET) | 기업 | 티커 | 이벤트 | 출처 |
|----------|----------|------|------|--------|------|
| 2026-10-29 | 17:00 | Amazon | AMZN | 3분기 2026 실적 발표(컨퍼런스콜) | TipRanks/MarketBeat 등 복수 어그리게이터 수렴 [P3] — IR 1차 확인 전 |
| 2026-11-17 | N/A | NVIDIA | NVDA | FY2027 3분기(2026-10-25 마감) 실적 발표 컨퍼런스콜 | GlobeNewswire/Nvidia 보도자료 2026-10-28 [P1] |

---

## [9] 오늘의 사실 목록 (순위 없음)

```
[2] FOMC, 2026-10-27~28 회의서 연방기금금리 3.75~4.00% 동결 발표(10-28 14:00 ET), 2명(Cook, Hammack) 인상 반대표 · CNBC/CNN [P2]
[2] 연준 의장 Kevin Warsh, 2027년부터 금리결정 회의 횟수 축소 계획 발표, "2% — nothing higher" 발언 · CNBC [P2]
[2] Jeff Gundlach(DoubleLine), Fed의 금리 동결 결정에 의문 제기하며 12월 인상 필요성 전망 발언 · CNBC [P2]
[2] CME FedWatch 10/28 회의 동결 확률 89.7~90.6% 보도(회의 전날 기준) · Bloomingbit [P2]
[3] 2026-10-28(ET) CPI·PCE·PPI·GDP·고용 등 주요 경제지표 발표 없음
[4] GE Vernova, 3분기 수주 290억달러(+96% YoY) 발표에도 주가 -6% · GE Vernova 8-K [P1]
[4] Phillips 66, 정제마진 호조로 분기 사상 최대 이익 발표 · Reuters [P2]
[4] Frontier Airlines, 항공권 가격 71% 급등 보도 · CNBC [P2]
[5] NVDA, DOJ가 Hugging Face 인수(약 130억달러) 관련 조사 중이라는 보도 · Bloomberg [P2]
[5] AVGO, Anthropic향 630억달러 금융 구조 보도 속 D.A. Davidson 목표가 400달러로 상향 · TradingView/GuruFocus [P3]
[5] AMD, Meta 유상증자에 10억달러 투자 결정 및 World Labs 인수 계약(약 82억달러) 발표 · AMD Newsroom [P1]
[5] TSM, CoWoS 패키징 가격 10~20% 인상 가능성 보도(TSMC 1차 미확인) · GuruFocus [P3]
[5] ANET, 3분기 사상 최대 매출로 연간 가이던스 추가 상향 · Simply Wall St [P2/P3]
[5] CLS, 3분기 매출 58.3억달러(+83% YoY), 2027년 매출 400억달러 목표 제시 · Celestica 실적발표 [P1/P2]
[5] Micron 급등, SK하이닉스 실적 호조 및 메모리 공급부족 전망 발언 배경 · CNBC [P2]
[5-A] Alphabet, 3분기 캡엑스 514억달러(전분기 대비 +14~15%), 2026 가이던스 1,950~2,050억달러 유지, 2027년 3,000억달러 초과 전망 언급 · Alphabet 8-K [P1]
[5-A] Alphabet, Oracle Cloud 통해 2027년부터 TPU 외부 제공 발표 · CNBC [P2]
[6] MSFT, FY27 1분기 EPS·매출 예상 상회, Azure +48% YoY · CNBC/Bloomberg [P2]
[6] GOOGL, 3분기 GAAP EPS 2.12달러(전년 2.87달러↓), 매출 1,275.8억달러(+25% YoY, 예상 하회로 보도) · Alphabet 8-K [P1]
[6] META, 유상증자 375억달러로 확대(5배 초과 청약), LA 법원서 미성년자 유해성 소송 배심원 선정 시작 · GuruFocus/ABC [P2/P3]
[7] SMH(반도체 ETF), 10/28 순유입 12.5억달러(10/26 순유출에서 반전) · ETF Action [P2]
[7-A] NVDA·AVGO·CRDO·CLS·APLD·VRT·SMCI 전체 Form 4 신규 공시 없음(2026-10-27~28)
[8] AMZN 3분기 실적 2026-10-29 17:00 ET 발표 예정 · 복수 어그리게이터 [P3]
[8] NVDA 3분기 실적 컨퍼런스콜 2026-11-17 예정 · Nvidia 보도자료 [P1]
[8] 10월 CPI 발표일 2026-11-10로 정상 일정 확인(지연 없음) · BLS 일정 [P2]
```
