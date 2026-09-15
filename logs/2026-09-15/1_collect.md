# 미국 시장 데일리 수집 결과 (Collect)
# 기준일: 2026-09-14 (월) · 미국 정규장 종가 기준 · 실행모드: 데일리
# 생성시각(KST): 2026-09-15 09:10

---

> 오늘은 2026-09-15(화, KST)이며 직전 미국 정규장은 2026-09-14(월, ET)이다.
> 0_data.md는 2026-09-15 09:07 KST(= 2026-09-14 19:57 ET, 야간 선물장) 스냅샷이다.
>
> ⚠️ **0_data 기준값 관련 사실 기록(해석 아님):** 0_data의 선물 `직전 종가`(ES 7,659.5 · YM 52,585 · NQ 29,387 · RTY 2,904.5)는 **직전 회차(2026-09-14 생성분)와 동일한 값**이며, 9/11(금) 선물 정산가에 해당한다. 9/14(월) 정규장 현물 종가(S&P500 7,621.54 · Dow 52,421)와는 한 세션 차이가 있다. 즉 0_data의 선물 `전일 대비 %`는 **9/11 정산가 대비 값**이다. 아래 [1-A]는 규칙대로 0_data 수치를 변형 없이 그대로 전재하며, 기준선 차이만 이 주석으로 남긴다.

---

## [1] 미국 주요 지수 + 리스크 지표 (9/14 월 종가)

| 항목 | 종가/수치 | 등락률 | (보도된) 원인 | 출처+태그 |
|------|-----------|--------|----------------|-----------|
| S&P500 | 7,621.54 (-35.44pt) | -0.46% | 반도체주 급락 · 유가 급등 · 10년물 금리 5% 터치 · FOMC 대기 | 24/7 Wall St. "S&P 500 Closes Down 35 Points as Rate-Hike Odds Take Center Stage" [P3](https://247wallst.com/cards/the-s-p-500-gave-up-35-points-to-close-at-7-621-54-twice-th-gspc-market-bell-01m2gr98zp1m5f1z5dydnx4wzv) |
| S&P500 (타 매체 기재치) | 7,619.98 | -0.5% | 상동 | TradingEconomics "US Equities" [P3](https://tradingeconomics.com/united-states/stock-market) |
| NASDAQ100 | N/A (지수 레벨 확인 실패) | -0.8% | 칩주 매도 주도 | TradingEconomics [P3](https://tradingeconomics.com/united-states/stock-market) |
| NASDAQ(종합) | N/A — 확인 실패 | N/A | — | [N/A] |
| Dow | 52,421 (-152pt) | -0.29% | 캐터필러·골드만삭스·엔비디아가 하락 주도 | TradingEconomics [P3](https://tradingeconomics.com/united-states/stock-market) |
| Russell2000 | N/A — 확인 실패 | N/A | — | [N/A] |
| SOX (필라델피아 반도체) | N/A (종가 레벨 확인 실패) | -5.9% | AI 개발 속도조절 촉구 발언에 반도체 전반 매도 | Bloomberg 인용(Fortune) "Wall Street's AI doomsday trade is here" [P2](https://fortune.com/2026/09/14/ai-slowdown-stocks-nvidia-meta/) |
| Brent | $107.54/bbl | +2.9% | 사우디 동-서 송유관 드론 피격 폐쇄 + 호르무즈 해협 통항 차질 | TradingEconomics [P3](https://tradingeconomics.com/commodity/brent-crude-oil) |

> S&P500 종가는 매체별로 7,621.54 / 7,619.98 두 값이 확인된다. 9/11 종가(7,656.98)에서 -35.44pt를 뺀 값이 7,621.54로 산술 일치한다. 두 값 모두 병기한다.
> SOX 9/11 종가는 11,824.00이었다(직전 회차 수집분). 9/14 종가 레벨은 검색으로 확인되지 않아 N/A로 둔다. **추정 계산하지 않는다.**
> Brent 장중 별도 보도: "이른 월요일 거래에서 약 +2% $106.69" (Insurance Journal 인용) [P3](https://www.insurancejournal.com/news/international/2026/09/14/884921.htm)
> ⚠️ 선물(ES·NQ·YM·RTY) · VIX 계열 · DXY · WTI · 금은 [1-A]에 있다.

---

## [1-A] 선물·변동성 구조 〔0_data.md 전재 — 검색 없음〕

**선물 (한국 아침 시점 · 2026-09-14 19:57 ET 스냅샷)**

| 항목 | 심볼 | 현재가 | 전일 대비 | 직전 종가 | 기준시각(ET) | 출처+태그 |
|------|------|--------|-----------|-----------|--------------|-----------|
| S&P500 선물 (ES) | `ES=F` | 7,695.25 | +0.47% | 7,659.5 | 2026-09-14 19:57 | CME (Yahoo chart API 자동수집) [P1] |
| 나스닥100 선물 (NQ) | `NQ=F` | 29,453.5 | +0.23% | 29,387 | 2026-09-14 19:57 | CME (Yahoo chart API 자동수집) [P1] |
| 다우 선물 (YM) | `YM=F` | 52,878 | +0.56% | 52,585 | 2026-09-14 19:56 | CME (Yahoo chart API 자동수집) [P1] |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,916.8 | +0.42% | 2,904.5 | 2026-09-14 19:57 | CME (Yahoo chart API 자동수집) [P1] |

**변동성 구조 (9/14 월 종가 기준)**

| 항목 | 심볼 | 수치 | 전일 대비 | 직전 종가 | 기준시각(ET) | 출처+태그 |
|------|------|------|-----------|-----------|--------------|-----------|
| VIX (30일) | `^VIX` | 17.1 | +7.95% | 15.84 | 2026-09-14 16:15 | CBOE (Yahoo chart API 자동수집) [P1] |
| VIX9D (9일) | `^VIX9D` | 16.91 | +16.86% | 14.47 | 2026-09-14 16:15 | CBOE (Yahoo chart API 자동수집) [P1] |
| VIX3M (3개월) | `^VIX3M` | 19.28 | +3.66% | 18.6 | 2026-09-14 16:15 | CBOE (Yahoo chart API 자동수집) [P1] |
| VVIX | `^VVIX` | 94.89 | +3.95% | 91.28 | 2026-09-14 16:15 | CBOE (Yahoo chart API 자동수집) [P1] |
| SKEW | `^SKEW` | 152.09 | -1.55% | 154.49 | 2026-09-14 17:00 | CBOE (Yahoo chart API 자동수집) [P1] |

**VIX 기간구조 (0_data.md 산출값 그대로)**

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.127 | 콘탱고 |
| VIX / VIX9D | 1.011 | 콘탱고 |

**매크로 (2026-09-14 19:57 ET 기준)**

| 항목 | 심볼 | 현재가 | 전일 대비 | 직전 종가 | 출처+태그 |
|------|------|--------|-----------|-----------|-----------|
| 미 10년 국채선물 | `ZN=F` | 106.03 | -0.31% | 106.36 | CME (Yahoo chart API 자동수집) [P1] |
| 금 | `GC=F` | 4,328.1 | -1.83% | 4,408.9 | COMEX (Yahoo chart API 자동수집) [P1] |
| WTI | `CL=F` | 102.1 | +2.05% | 100.05 | NYMEX (Yahoo chart API 자동수집) [P1] |
| 달러지수 (DXY) | `DX-Y.NYB` | 99.5 | +0.38% | 99.12 | ICE (Yahoo chart API 자동수집) [P1] |

**Put/Call 비율 (CBOE 옵션 체인 직접 집계 · 직전 정규장)**

| 대상 | P/C(거래량) | P/C(미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 | 출처+태그 |
|------|-------------|------------------|-----------|-----------|-------------|-----------|
| S&P500 지수옵션 (SPX) | 1.099 | 1.402 | 2,439,930 | 2,681,122 | 28,934 | CBOE 지연시세 API (자동수집) [P1] |
| 나스닥100 ETF 옵션 (QQQ) | 1.314 | 1.412 | 3,682,594 | 4,837,742 | 11,280 | CBOE 지연시세 API (자동수집) [P1] |

---

## [2] 금리 / 연준 (9/14 월 기준)

| 항목 | 사실 내용(발언·수치) | 출처+태그 |
|------|----------------------|-----------|
| 미 10년물 국채금리 | 4.987%. 장중 5.014%까지 상승 — 2023년 10월 이후 최고 | CNBC "10-year Treasury yield hits 5% before reversing as traders await Fed meeting" [P2](https://www.cnbc.com/2026/09/14/10-year-us-treasury-is-closing-in-on-5percent.html) |
| 미 10년물 (타 매체 기재치) | 5.01%(19년 최고) 테스트 후 4.96%로 하락 | Invezz "US 10-year yield tops 5%" [P3](https://invezz.com/in/news/2026/09/14/us-10-year-yield-tops-5percent-as-markets-price-fed-hike/) |
| 미 2년물 국채금리 | 4.66% — 2024년 중반 이후 최고 | TradingEconomics 2-year note yield [P3](https://tradingeconomics.com/united-states/2-year-note-yield) |
| 10Y-2Y 스프레드 | +32.7bp (4.987 − 4.66, 산술 계산값) | 위 두 출처에서 산출 |
| FOMC 일정 | 9/15(화)~9/16(수) 이틀 일정, 9/16 14:00 ET 결정 발표 | Kiplinger "September Fed Meeting" [P3](https://www.kiplinger.com/investing/live/fed-meeting-updates-and-commentary-september-2026) |
| CME FedWatch (차기 FOMC) | 25bp **인상** 확률 약 89% (9/14 기준) — 2023년 이후 첫 인상에 해당 | CNBC [P2](https://www.cnbc.com/2026/09/14/10-year-us-treasury-is-closing-in-on-5percent.html) |
| CME FedWatch (타 매체 기재치) | 25bp 인상 확률 93%, 인상 시 목표범위 3.75~4.00% | Kiplinger [P3](https://www.kiplinger.com/investing/live/fed-meeting-updates-and-commentary-september-2026) |
| 금리 상승 배경(보도) | 유가 급등이 인플레 압력을 더할 것이란 관측이 보도됨 | CNBC [P2] |
| 연준 인사 발언 | N/A — FOMC 블랙아웃 기간. 신규 발언 확인 없음 | [N/A] |

> FedWatch 확률은 매체·조회시점에 따라 89% / 93%로 다르게 보도됐다. 두 값 모두 병기한다.

---

## [3] 주요 경제지표 (조건부)

`N/A — 2026-09-14(월) 발표된 주요 미국 경제지표는 검색으로 확인되지 않음`

> 참고(직전 발표분, 신규 아님): 8월 CPI는 **2026-09-11(금) 08:30 ET** 발표. 헤드라인 YoY +3.4%(7월과 동일, 예상 부합), 근원 YoY +2.4%(전월 2.5%, 2021년 3월 이후 최저), MoM +0.4%(3개월 내 최대, 에너지가 주요 기여). 출처: TradingEconomics / usinflationcalculator [P3](https://tradingeconomics.com/united-states/inflation-cpi) · 8월 PPI는 2026-09-10 발표 [P2](https://www.cnbc.com/2026/09/10/ppi-inflation-report-august-2026.html)

---

## [4] 특징 종목 (9/14 월)

| 종목 | 티커 | 등락률 | 거래량 | (보도된) 핵심 사실 | 출처+태그 |
|------|------|--------|--------|---------------------|-----------|
| Caterpillar | CAT | -4.23% | N/A | 다우 최대 하락 종목 | TradingEconomics [P3](https://tradingeconomics.com/united-states/stock-market) |
| Goldman Sachs | GS | -3.99% | N/A | 다우 하락 2위 종목 | TradingEconomics [P3] |
| Intel | INTC | -5~6% 구간 | N/A | AI 개발 속도조절 발언 여파로 반도체 동반 매도 | Fortune(Bloomberg 인용) [P2](https://fortune.com/2026/09/14/ai-slowdown-stocks-nvidia-meta/) |
| AMD | AMD | -5~6% 구간 | N/A | 상동 | Fortune [P2] |
| Marvell | MRVL | -5~6% 구간 | N/A | 상동 | Fortune [P2] |
| SanDisk | SNDK | 약 -6% | N/A | 메모리주 동반 하락 | 24/7 Wall St. [P3](https://247wallst.com/investing/2026/09/14/memory-stocks-lead-ai-selloff-as-anthropic-and-openai-chiefs-urge-slower-development-micron-and-sandisk-sink-6-sk-hynix-drops-7/) |
| Salesforce | CRM | +4.73% | N/A | 다우 최대 상승 종목. 반도체·하드웨어 → 엔터프라이즈 소프트웨어로의 자금 이동이 보도됨 | TradingEconomics [P3] · TradingKey(+4.75% 기재) [P3](https://www.tradingkey.com/news/market-movers/262167041-market-movers-crm-20260914) |
| ServiceNow | NOW | +5% | N/A | AI 매도세를 소프트웨어가 비껴갔다고 보도 | 24/7 Wall St. [P3](https://247wallst.com/investing/2026/09/14/servicenow-climbs-5-as-software-sidesteps-ai-selloff-adobe-gains-4-salesforce-ticks-up/) |
| Adobe | ADBE | +4% | N/A | 상동 | 24/7 Wall St. [P3] |
| IBM | IBM | +2.36% | N/A | 다우 상승 2위 종목 | TradingEconomics [P3] |

> ⚠️ CRM은 24/7 Wall St. 기사 제목에 "Salesforce Ticks Up"(소폭 상승)으로 기재돼 있어 종가 기준 +4.73%와 차이가 있다. 기사 작성 시점(장중) 차이로 보이나 **확인 필요**. 종가 기준값은 TradingEconomics 수치를 기재했다.
> NVDA·MU 등 AI 인프라 종목은 [5]에서 다룬다.

---

## [4-A] 섹터별 뉴스

> ⚠️ `0_data.md`의 Finnhub 섹터 뉴스는 **`N/A — FINNHUB_API_KEY 미설정`**으로 수집되지 않았다. 아래는 전량 검색으로 확보한 보강분이며, 출처를 개별 표기한다.

| 섹터 | 종목 | 사실 내용(무슨 일이) | 발행시각(ET) | 출처+태그 |
|------|------|----------------------|--------------|-----------|
| 반도체·AI | (섹터 전반) | Anthropic·OpenAI·xAI 수뇌부가 프론티어 모델 개발 속도 조절을 지지했고, 월요일 Microsoft가 동참. 글로벌 AI·반도체주 동반 하락 | 2026-09-14 | Semafor "Calls for AI slowdown prompt chip selloff" [P2](https://www.semafor.com/article/09/14/2026/ai-slowdown-calls-prompt-chip-selloff) |
| 반도체·AI (해외) | SK하이닉스 / 삼성전자 | 한국 증시에서 각각 6%·4% 넘게 하락 마감 | 2026-09-14 | Fortune [P2](https://fortune.com/2026/09/14/ai-slowdown-stocks-nvidia-meta/) |
| 반도체·AI (해외) | 소프트뱅크 | 일본 증시에서 10% 하락 (OpenAI 최대 투자자 중 하나로 보도) | 2026-09-14 | Fortune [P2] |
| 반도체·AI (해외) | ASML / 인피니언 / 노키아 | 유럽 장 초반 각각 4%·6%·5% 내외 하락 | 2026-09-14 | Fortune [P2] |
| 소프트웨어 | CRM·NOW·ADBE | 반도체에서 엔터프라이즈 소프트웨어로 자금이 이동했다고 보도 | 2026-09-14 | 24/7 Wall St. [P3](https://247wallst.com/investing/2026/09/14/servicenow-climbs-5-as-software-sidesteps-ai-selloff-adobe-gains-4-salesforce-ticks-up/) |
| 에너지 | (섹터 전반) | 사우디 동-서 송유관(1,200km, 약 700만 b/d 우회 경로)이 9/11(금) 드론 피격 후 폐쇄. 위성사진으로 피해 규모 확인 보도. 최소 한 달 이상 가동 중단 전망 보도 | 2026-09-14 | CNBC [P2](https://www.cnbc.com/2026/09/14/iran-war-saudi-arabia-east-west-pipeline-oil.html) · Al Jazeera [P2](https://www.aljazeera.com/news/2026/9/12/saudi-arabia-shuts-critical-oil-pipeline-after-drone-attack-what-happened) |
| 에너지 | (섹터 전반) | 이란-걸프 국가 간 호르무즈 논의를 위한 오만 회담이 송유관 피격 후 연기됨 | 2026-09-14 | Insurance Journal [P3](https://www.insurancejournal.com/news/international/2026/09/14/884921.htm) |
| 금융 | GS | 상세 사유 보도 확인 안 됨 (하락 사실만 [4]에 기재) | — | [N/A] |
| 헬스케어 | — | N/A — 금일 수집분 없음 | — | [N/A] |
| 소비재·유통 | — | N/A — 금일 수집분 없음 | — | [N/A] |

---

## [5] AI 인프라 — 공급 측 (9/14 월)

| 기업 | 뉴스 제목 | 사실 내용(무슨 일이) | 출처일자 | 출처+태그 |
|------|-----------|----------------------|----------|-----------|
| NVDA | AI 개발 속도조절 발언에 반도체 매도 | 종가 -3.26%. 장중 3% 넘게 하락 보도 | 2026-09-14 | TradingEconomics [P3](https://tradingeconomics.com/united-states/stock-market) · Fortune [P2](https://fortune.com/2026/09/14/ai-slowdown-stocks-nvidia-meta/) |
| MU | 메모리주 AI 매도 주도 | 약 -5.6% (프리마켓 보도치 포함) | 2026-09-14 | 24/7 Wall St. [P3](https://247wallst.com/investing/2026/09/14/memory-stocks-lead-ai-selloff-as-anthropic-and-openai-chiefs-urge-slower-development-micron-and-sandisk-sink-6-sk-hynix-drops-7/) |
| AVGO | FY2026 3분기 실적(기발표) | AI 반도체 매출 $16.7B(+221% YoY), 4분기 가이던스 $21.7B(+236% YoY) 제시 | 2026-09-02 (실적 발표일) | 보도 인용 [P3](https://finance.yahoo.com/news/top-6-chipmaker-stocks-2026-235809352.html) — **원문 IR 확인 필요** |
| AMD·MRVL·INTC | 동반 하락 | [4] 참조 (-5~6% 구간) | 2026-09-14 | Fortune [P2] |
| TSM·ANET·CRDO·CLS·VRT·SMCI·APLD | — | N/A — 개별 신규 사실 확인 안 됨 | — | [N/A] |
| HBM·DRAM·NAND 현물가 | — | N/A — 금일 현물가 수치 확인 실패 | — | [N/A] |

> 반도체 하락의 보도된 논리: "학습(트레이닝) 프론티어 속도가 느려지면 AI 서버당 메모리 탑재량이 축소된다"는 약세 논리가 언급됐다 — Fortune [P2]. (이 문장은 **매체가 보도한 내용의 인용**이며 본 단계의 추론이 아니다)

---

## [5-A] AI 인프라 — 수요 측 / 하이퍼스케일러 CAPEX

| 항목 | 사실 내용(발표 수치·문구) | 전분기 대비(산술) | 출처일자 | 출처+태그 |
|------|---------------------------|--------------------|----------|-----------|
| MSFT·GOOGL·META 주가 | 9/14 상승 마감: GOOGL +2.15%(타 집계 +2.61%), MSFT +1.6%(타 집계 +2.18%), META 약 +1.4% | — | 2026-09-14 | TradingEconomics [P3] · Fortune [P2] |
| MSFT 입장 표명 | Microsoft가 9/14 OpenAI·Anthropic·xAI의 "신중한 개발 속도" 기조에 동참 의사 표명 | — | 2026-09-14 | Semafor [P2](https://www.semafor.com/article/09/14/2026/ai-slowdown-calls-prompt-chip-selloff) |
| OpenAI (비상장) | AI 안전 우려를 이유로 IPO를 2027년으로 연기 | — | 2026-09-14 | Fortune [P2](https://fortune.com/2026/09/14/ai-slowdown-stocks-nvidia-meta/) |
| CAPEX 가이던스 | **신규 변동 없음 — 직전 분기 가이던스 유지.** 실적시즌 외이며 9/14 신규 CAPEX 발표 확인 안 됨 | — | — | [N/A] |

> GOOGL·MSFT·META 상승률은 매체별 집계치가 달라 양쪽 모두 병기했다.
> 시중에 도는 "하이퍼스케일러 CAPEX $800B" 류 수치는 **기업 발표가 아닌 애널리스트 추정**이라 본 표에 수치로 넣지 않는다.

---

## [6] 시총 상위 10 — AI 무관 일반 이슈

`N/A — 9/14 기준 AI 무관 개별 이슈(규제·실적·제품)로 확인된 신규 사실 없음`

> MSFT·GOOGL·META·NVDA·AVGO 관련 9/14 사실은 전부 AI 관련이라 [5]·[5-A]에 기재했다.

---

## [7] 기관·대형 자금 수급

| 항목 | 종목 | 사실 내용 | 규모(수치) | 출처+태그 |
|------|------|-----------|------------|-----------|
| ETF 자금흐름 (일간) | SMH·SOXX·QQQ | N/A — 9/14 일간 순유출입 수치 확인 실패 | N/A | [N/A] |
| ETF 자금흐름 (월간, 참고) | SMH | 직전 1개월 순유출 (출처일자 기준 과거치) | -$24.8억 (자산의 -3.5%) | stockanalysis.com, 출처일자 2026-08-30 [P3](https://stockanalysis.com/etf/smh/) |
| 블록딜·대량거래 | — | N/A — 확인된 공시 없음 | N/A | [N/A] |
| 옵션 이상거래 | — | N/A — 별도 확인 실패. 지수옵션 P/C는 [1-A] 참조 | N/A | [N/A] |

---

## [7-A] Insider Trading (SEC Form 4)

`N/A — 신규 Form 4 공시를 검색으로 확인하지 못함 (공시 부재로 단정하지 않음)`

---

## [8] 향후 14일 주요 일정

**경제 일정**

| 날짜 | 시각(ET·KST) | 이벤트 | 컨센서스 | 이전치 | 출처 |
|------|--------------|--------|----------|--------|------|
| 2026-09-15(화) | — | FOMC 회의 1일차 | — | — | Kiplinger [P3](https://www.kiplinger.com/investing/live/fed-meeting-updates-and-commentary-september-2026) |
| 2026-09-16(수) | 14:00 ET · 9/17(목) 03:00 KST | FOMC 금리 결정 | 25bp 인상 확률 89~93% (CME FedWatch), 인상 시 목표범위 3.75~4.00% | 현행 목표범위 3.50~3.75% (인상 시 도달치 역산, **확인 필요**) | CNBC [P2] · Kiplinger [P3] |

**기업 일정**

| 날짜 | 기업 | 이벤트 | 컨센서스 EPS | 컨센서스 매출 | 출처 |
|------|------|--------|--------------|---------------|------|
| 2026-09-30(수) | Micron (MU) | 분기 실적 발표 | N/A | N/A | 보도 인용 [P3](https://finance.yahoo.com/news/top-6-chipmaker-stocks-2026-235809352.html) |

> 그 외 14일 내 일정은 검색으로 확정하지 못해 기재하지 않는다.

---

## [9] 오늘의 사실 목록 (순위 없음)

```
[1] S&P500 9/14 종가 7,621.54, -35.44pt (-0.46%) · 24/7 Wall St. [P3]
[1] Dow 9/14 종가 52,421, -152pt (-0.29%) · TradingEconomics [P3]
[1] NASDAQ100 9/14 -0.8% (지수 레벨 N/A) · TradingEconomics [P3]
[1] SOX 9/14 -5.9% (종가 레벨 N/A) · Bloomberg 인용(Fortune) [P2]
[1] Brent 9/14 $107.54/bbl, +2.9% · TradingEconomics [P3]
[1-A] ES 7,695.25 / NQ 29,453.5 / YM 52,878 / RTY 2,916.8 (9/14 19:57 ET) · CME 자동수집 [P1]
[1-A] VIX 17.1 (+7.95%) · VIX9D 16.91 (+16.86%) · VIX3M 19.28 (+3.66%) · CBOE 자동수집 [P1]
[1-A] VVIX 94.89 (+3.95%) · SKEW 152.09 (-1.55%) · CBOE 자동수집 [P1]
[1-A] VIX3M/VIX 1.127 콘탱고 · VIX/VIX9D 1.011 콘탱고 · 0_data 산출값 [P1]
[1-A] WTI 102.1 (+2.05%) · 금 4,328.1 (-1.83%) · DXY 99.5 (+0.38%) · ZN 106.03 (-0.31%) · 자동수집 [P1]
[1-A] SPX P/C 거래량 1.099 / 미결제 1.402 · QQQ P/C 거래량 1.314 / 미결제 1.412 · CBOE 자동수집 [P1]
[2] 미 10년물 4.987%, 장중 5.014% — 2023년 10월 이후 최고 · CNBC [P2]
[2] 미 2년물 4.66% — 2024년 중반 이후 최고 · TradingEconomics [P3]
[2] 10Y-2Y +32.7bp (산술 계산값)
[2] FOMC 9/15~9/16, 9/16 14:00 ET 결정 · Kiplinger [P3]
[2] CME FedWatch 25bp 인상 확률 89%(CNBC) / 93%(Kiplinger), 인상 시 3.75~4.00%
[3] 9/14 주요 경제지표 발표 없음 (8월 CPI는 9/11 발표: 헤드라인 +3.4% YoY, 근원 +2.4% YoY, MoM +0.4%)
[4] CAT -4.23% · GS -3.99% · IBM +2.36% · CRM +4.73% · TradingEconomics [P3]
[4] NOW +5% · ADBE +4% · 24/7 Wall St. [P3]
[4] INTC·AMD·MRVL -5~6% 구간 · Fortune [P2]
[4] SNDK 약 -6% · 24/7 Wall St. [P3]
[4-A] Anthropic·OpenAI·xAI 수뇌부, 프론티어 모델 개발 속도 조절 지지 발언 · Semafor [P2]
[4-A] Microsoft, 9/14 신중한 개발 속도 기조에 동참 · Semafor [P2]
[4-A] SK하이닉스 -6%대 · 삼성전자 -4%대 · 소프트뱅크 -10% · ASML -4%대 · Fortune [P2]
[4-A] 사우디 동-서 송유관(1,200km, 약 700만 b/d) 드론 피격 후 폐쇄, 위성사진 피해 확인 · CNBC [P2]
[4-A] 이란-걸프 호르무즈 오만 회담 연기 · Insurance Journal [P3]
[5] NVDA 9/14 -3.26% · TradingEconomics [P3]
[5] MU 약 -5.6% · 24/7 Wall St. [P3]
[5] AVGO FY26 Q3 AI 반도체 매출 $16.7B(+221% YoY), Q4 가이던스 $21.7B — 출처일자 2026-09-02, 원문 IR 확인 필요
[5-A] GOOGL +2.15%(타 집계 +2.61%) · MSFT +1.6%(타 집계 +2.18%) · META 약 +1.4%
[5-A] OpenAI, AI 안전 우려로 IPO를 2027년으로 연기 · Fortune [P2]
[5-A] 하이퍼스케일러 CAPEX 가이던스 신규 변동 없음 (실적시즌 외)
[6] AI 무관 시총상위 신규 이슈 없음
[7] SMH·SOXX·QQQ 일간 자금흐름 N/A (SMH 직전 1개월 -$24.8억, 출처일자 2026-08-30)
[7-A] Form 4 신규 공시 확인 불가
[8] 9/16 FOMC 결정 · 9/30 Micron 실적
```

---

## 수집 한계 기록 (다음 단계 참고)

- `FINNHUB_API_KEY` 미설정 → 0_data의 **시장 전반 뉴스·섹터 뉴스가 전량 N/A**. [4-A]는 검색 보강분으로만 채워졌다.
- 0_data 선물 `직전 종가`가 9/11 정산가로 고정돼 있어, 선물 `전일 대비 %`의 기준선이 9/14 현물 종가와 한 세션 어긋난다 (상단 주석 참조).
- 지수 레벨 중 NASDAQ 종합·Russell2000·SOX 종가는 검색으로 확인되지 않아 N/A. **추정 계산하지 않았다.**
- S&P500 종가·FedWatch 확률·GOOGL/MSFT 등락률은 매체별 수치가 달라 양쪽 병기했다.
