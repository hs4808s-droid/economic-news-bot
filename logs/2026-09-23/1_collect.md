# 미국 시장 데일리 수집 결과 (Collect)
# 기준일: 2026-09-22 (화) · 미국 정규장 종가 기준 · 실행모드: 데일리
# 생성시각(KST): 2026-09-23 12:05

---

## [1] 미국 주요 지수 〔데일리〕

| 항목 | 종가/수치 | 등락률 | (보도된) 원인 | 출처+태그 |
|------|-----------|--------|----------------|-----------|
| S&P500 | 7,764.64 | 보합 (약 -0.04%) | 유가 급락이 장기 국채금리 상단을 눌렀고, 기술주 강세와 금융·금리민감주 약세가 상쇄되며 보합 마감 | CNBC/Yahoo Finance 계열 후속보도 · 2026-09-22 [P2] / TheStreet [P3] |
| NASDAQ 종합 | 27,244.28 (사상 최고 종가, 장중 27,288.79 사상 최고치) | +0.45% (+122.18pt) | 반도체·메모리주(Micron 등) 강세, Meta 'Muse' AI 에이전트 흥행이 기술주 랠리 견인, 유가·국채금리 하락도 우호적 | Yahoo Finance/CNBC 계열 · "Stock market today: Dow slips, Nasdaq posts fresh record" · 2026-09-22 [P2] |
| Dow | 51,863.69 | -0.36% (-185.14pt) | 금리민감주(브로커리지·은행) 약세, Fed 인상 여파 및 Vanguard-Altruist 인수發 자산관리업계 AI 경쟁 우려로 Schwab 등 하락이 지수 압박 | Yahoo Finance/Bloomberg/TheStreet 계열 · 2026-09-22 [P2] |
| Russell2000 | 2,880.53 | +0.70% (+20.13pt) | 유가 하락과 국채금리 안정에 소형주 매수세 유입 | TheStreet · "Stock Market Today (Sept. 22, 2026): Russell 2000, Nasdaq rise as oil prices sink" · 2026-09-22 [P3] |
| SOX (필라델피아반도체지수) | N/A — 9/22 당일 정확한 종가 수치 확인 불가 | 참고: 직전일(9/21)은 +4.3%(또는 매체별 +3%대)로 8/4 이후 최대 상승폭 보도됨. Micron 주가 강세(HBM 완판·DRAM 현물가 급등)가 반도체 업종 전반 랠리를 견인했다는 서술 존재 | TradeStation Insights · "Is the Market's Leading Industry Breaking Out?" · 2026-09-22 [P3] / [N/A] (9/22 당일 SOX 종가) |
| Brent유 | 약 $98.4~99.3/배럴 (매체별 소폭 차이, Fortune은 $98.47 -1.87% 보도) | 하락 (5거래일 연속 약세) | 미-이란 외교 협상 기대(트럼프 UN 연설) 및 걸프 지역 공급 확대·호르무즈 재개방 신호가 유가 압박 | Fortune · "Current price of oil as of September 22, 2026" [P2] / CNBC 계열 후속기사 · 2026-09-22 [P2] |

> SOX 종가 수치는 Yahoo Finance/Investing.com/Nasdaq Indexes 등에서 9/22 당일 특정치를 찾지 못해 N/A 처리. 9/21 기준 급등(+3~4.3%) 보도만 참고용으로 병기.

---

## [1-A] 선물·변동성 구조 〔0_data.md 그대로 인용 — 검색 안 함〕

### 선물 (한국 아침 시점, 기준시각 ET)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,831.5 | -0.03% | 7,833.5 | 2026-09-22 20:42 |
| 나스닥100 선물 (NQ) | `NQ=F` | 31,046.5 | +0.85% | 30,784.75 | 2026-09-22 20:42 |
| 다우 선물 (YM) | `YM=F` | 52,269 | -0.39% | 52,475 | 2026-09-22 20:41 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,912.9 | +0.53% | 2,897.4 | 2026-09-22 20:42 |

### 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 14.21 | -4.44% | 14.87 | 2026-09-22 16:15 |
| VIX9D (9일) | `^VIX9D` | 12.13 | -7.69% | 13.14 | 2026-09-22 16:15 |
| VIX3M (3개월) | `^VIX3M` | 17.61 | -2.60% | 18.08 | 2026-09-22 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 83.17 | -3.03% | 85.77 | 2026-09-22 16:15 |
| SKEW (테일리스크) | `^SKEW` | 144.8 | +1.84% | 142.19 | 2026-09-22 17:00 |

### 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 미 10년 국채선물 | `ZN=F` | 106.08 | -0.24% | 106.33 | 2026-09-22 20:41 |
| 금 | `GC=F` | 4,394.1 | +0.23% | 4,383.9 | 2026-09-22 20:42 |
| WTI | `CL=F` | 90.09 | -5.94% | 95.78 | 2026-09-22 20:42 |
| 달러지수 (DXY) | `DX-Y.NYB` | 100.56 | +0.13% | 100.43 | 2026-09-22 20:42 |

### VIX 기간구조 (산출 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.239 | 콘탱고 |
| VIX / VIX9D | 1.171 | 콘탱고 |

### Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.052 | 1.410 | 2,224,538 | 2,340,225 | 30,470 |
| 나스닥100 ETF 옵션 (QQQ) | 0.877 | 1.390 | 4,547,953 | 3,986,300 | 10,826 |

출처: CBOE / CME (Yahoo chart API 자동수집) [P1]

---

## [2] 금리 / 연준 〔데일리〕

| 항목 | 사실 내용(발언·수치) | 출처+태그 |
|------|----------------------|-----------|
| FOMC 정책금리 (직전 회의, 9/15~16) | FOMC가 12-0 만장일치로 기준금리를 25bp 인상, 목표 레인지 3.75%~4.00%로 결정. 2023년 이후 첫 인상 | CNBC · "Fed rate decision September 2026" · 2026-09-16 [P2] / Federal Reserve 성명서 [P1] |
| FOMC 성명 문구 | "Inflation remains elevated" / "Today's policy action will support a timelier return to the Committee's 2 percent goal. The Committee will deliver price stability." | Federal Reserve, FOMC 9/16 프레스컨퍼런스 자료 [P1] |
| Warsh 의장 발언 (9/16 회의 관련) | Fed 독립성 관련 질문에 "We stay in our lane"이라고 답하며 정책 영역을 벗어난 언급을 자제하겠다는 취지로 발언. 물가안정이 "금융자산·주택자산이 없는 미국인들에게도 좋은 소식"이라는 취지로 언급 | Yahoo Finance · Federal Reserve meeting live updates [P2] |
| 점도표(SEP) | 공개된 전망에서 18명 참석자 중 16명이 연내 추가 25bp 인상 가능성을 시사, 이 중 4명은 추가 2회 인상 전망 | 보도 종합(Kiplinger 등) · 2026-09-16 [P2] |
| Warsh 의장 최근 공개 발언 (Jackson Hole, 8/28) | "이번 여름의 양호한 물가지표가 인플레이션의 '의미 있는' 개선을 뜻하지는 않는다"고 언급, 기조적 인플레이션 추세가 개선되지 않은 신호에 우려 표명 | Federal Reserve · Warsh Jackson Hole 연설문 · 2026-08-28 [P1] |
| 9/22 당일 Fed 관련 신규 발언 | 검색 결과 9/22 당일 별도 신규 Fed 인사 발언 확인되지 않음 | [N/A] |
| 10년물 국채 수익률 | 약 4.95~4.96% 수준 (매체별 소폭 상이) | CNBC · "Treasury yields are little changed as traders await Fed comments" · 2026-09-22 [P2] |
| 2년물 국채 수익률 | 약 4.74~4.76% 수준 (매체별 소폭 상이) | CNBC · 2026-09-22 [P2] / Forbes Advisor [P3] |
| 10Y-2Y 스프레드 | 약 +0.20~0.22%p (상기 두 수치 기반 산술값, 소스 간 소폭 차이로 범위 표기) | 상기 두 수치 기반 산출 |
| CME FedWatch (10/28 차기 FOMC) | 10/28 FOMC에서 25bp 추가 인상 확률 약 56~59.7%로 집계 (매체별 소폭 차이) | MacroMicro/centralbank.watch 계열 집계 · 2026-09-22 기준 [P3] |
| 다음 FOMC 일정 | 2026-10-27~28, 금리 발표 10/28 14:00 ET, 기자회견 14:30 ET, SEP 동반 발표 | Federal Reserve 캘린더 [P1] / Finance Calendar [P3] |

---

## [3] 주요 경제지표 〔조건부〕

N/A — 2026-09-22~23 (ET) 구간 CPI·PPI·GDP·Payroll·실업률·실업수당·소매판매·ISM 등 정규 발표 지표 없음. 검색 결과 해당 주간은 "지표 발표는 적고 연준 인사 발언이 다수"인 주간으로 확인됨 [P3].

---

## [4] 특징 종목 〔데일리〕

| 종목 | 티커 | 등락률 | 거래량 | (보도된) 핵심 사실 | 출처+태그 |
|------|------|--------|--------|----------------------|-----------|
| JPMorgan Chase | JPM | -3.34%~-4.0% (매체별 상이, $338.65대 마감 보도) | N/A(확인 못함) | ① JPMorgan이 중국向 AI서버용 PCB 제조사 Victory Giant Technology의 약 26억 달러 규모 홍콩 상장을 주선한 사실이 미중 지정학적 긴장 속 부각되며 매도 압력. ② Vanguard의 Altruist(AI 세금·재무플래닝 툴) 인수 발표로 자산관리업계 AI 경쟁 우려가 확산되며 금융주 전반 동반 하락 | Gurufocus/Reuters 계열 · "JPMorgan Drops 3.8% as $2.6 Billion AI Deal Meets Geopolitics" · 2026-09-22 [P2] / Yahoo Finance · "Why Charles Schwab (SCHW) Shares Are Sliding Today" [P3] |
| Charles Schwab | SCHW | -4.4%~-6.1% (매체별 상이) | N/A | Vanguard가 Altruist(AI 기반 세금 최적화·재무플래닝 툴 보유 스타트업) 인수를 발표하며 RIA 커스터디 시장에 AI 경쟁 위협이 부각. Schwab·LPL Financial·Raymond James·Stifel 등 자산관리·브로커리지주 동반 하락. Schwab이 Anthropic과 파트너십을 맺고 AI 대응에 나섰다는 보도 있으나 투자자들은 충분한 대응으로 보지 않는 분위기로 전해짐 | Yahoo Finance/GuruFocus/goldesel.de 계열 종합 · 2026-09-22 [P3] |
| Cisco Systems | CSCO | -3.3%~-5% (매체별 상이, 종가 $107.17 보도도 존재) | N/A | Piper Sandler 애널리스트 James Fish가 목표주가를 $132→$125로 하향(Neutral 유지). 성장 둔화 우려에 따른 밸류에이션(P/E 배수) 눈높이 하향이 근거로 제시됨 | CNBC · "Cisco stock sinks 5% after Piper Sandler cuts price target on growth concerns" · 2026-09-22 [P2] |
| Micron Technology | MU | +3.29% (매체 보도 기준, 사상 첫 주당 $1,000 돌파는 9/21) | N/A | 2026년 HBM 공급 물량이 가격·수량 계약 기준 전량 확정(사실상 완판), DRAM 현물가는 연초 대비 큰 폭 상승. 시가총액 1조 달러 돌파 관련 보도 존재 | TradingKey · "Micron Technology Inc Stock (MU) Moved Up by 3.29% on Sep 22" [P3] |

> ±5% 기준 충족 여부가 매체마다 다소 엇갈리는 종목(SCHW·CSCO)이 있어 등락률을 범위로 표기. JPM·SCHW의 배경 사실(Vanguard-Altruist 인수)은 본 섹션에 통합 기재하고 [4-A]에서 중복 기재하지 않음.

---

## [4-A] 섹터별 뉴스 〔0_data.md Finnhub 수집분 기반〕

| 섹터 | 종목 | 사실 내용(무슨 일이) | 발행시각(ET) | 출처+태그 |
|------|------|------------------------|--------------|-----------|
| 반도체·AI | NVDA (Google 전력계약) | Google이 Georgia Power와 계약 체결, Plant Vogtle·Hatch 원전 "업레이트(uprate)"를 지원해 약 96MW 신규 발전용량 확보 지원. Georgia Power는 고객 대상 약 9억 달러 편익 예상 발표. 규제당국 승인 필요 | 2026-09-22 19:35 (Finnhub 수집), 원 보도는 9/21 | AJC · "Georgia Power is upgrading its nuclear reactors, and Google is buying the electricity" [P2] |
| 반도체·AI | AVGO (Apple 중국 칩 계약 압박) | 신임 Apple CEO John Ternus가 전임 Tim Cook 때 체결된 중국 CXMT向 DRAM 공급계약을 두고 워싱턴發 철회 압박에 직면했다는 보도 | 2026-09-22 14:48 | Yahoo(Finnhub) [P3] / 24/7 Wall St 보강 [P3] |
| 반도체·AI | NVDA/AVGO (애널리스트 코멘트) | Bernstein(애널리스트 Stacy Rasgon)이 Broadcom 목표주가 $575(9/22 종가 $365 대비), Nvidia 목표주가 $400(9/22 종가 $229 대비) 제시하며 두 종목 모두 Outperform 의견 유지 | 2026-09-22 16:43 | CNBC · "A top chip stock analyst sees big things for Nvidia, Broadcom" [P2] |
| 반도체·AI | NVDA (옵션시장) | Nvidia 옵션의 내재변동성이 최근 1년래 최저 수준에 근접. 9/25(목) Trump-Xi 국빈 만찬에 Jensen Huang CEO 참석 예정 등 이번 주 복수 촉매를 앞두고 옵션가격이 상대적으로 저렴하게 형성됨 | 2026-09-22 12:58 | CNBC · "Nvidia options are doing something unusual ahead of two catalysts" [P2] |
| 금융 | JPM/SCHW | [4]에서 다룸 (Vanguard-Altruist 인수發 AI 경쟁 우려로 금융주 동반 하락) — 중복 생략 | — | — |
| 에너지 | XOM | Exxon이 2030년 LNG 판매 목표를 5,000만 톤 규모로 설정했다고 보도됨(0_data.md 수집 기사 제목 기준). 세부 수치·시점은 별도 IR 확인 필요 | 2026-09-22 12:05 | Yahoo(Finnhub) [P3] |
| 헬스케어 | UNH | UnitedHealth 주가 -1.26% 변동 보도. 매출 정체 속 이익 성장 지속 가능성에 대한 서술형 기사 존재, 구체 수치는 확인 안 됨 | 2026-09-22 17:50 / 14:09 | Yahoo(Finnhub)/Zacks 계열 [P3] |
| 소비재·유통 | AMZN | Amazon이 자사 플랫폼에서 Meta의 AI 쇼핑 에이전트 Muse의 접근을 차단(9/21 밤부터)했다는 보도. Meta가 삭제 요청을 거부한 데 따른 조치로 전해짐 | 2026-09-22 17:14 | Yahoo(Finnhub) [P3] |

> [4]·[5]·[6]과 중복되는 JPM·SCHW·AVGO(Apple 관련) 내용은 해당 섹션에서만 본문 작성.

---

## [5] AI 인프라 — 공급 측 〔데일리〕

| 기업 | 뉴스 제목 | 사실 내용 | 출처일자 | 출처+태그 |
|------|-----------|-----------|----------|-----------|
| MU (Micron) | Micron 주가 사상 첫 $1,000 돌파(9/21), 9/22도 강세 지속(+3.29%) | 2026년 HBM(HBM4 포함) 공급 물량이 가격·수량 확정 계약 기준 전량 소진(완판). DRAM 현물가는 연초 대비 큰 폭 상승. 시가총액 1조 달러 돌파 관련 보도 존재. Micron 실적 발표는 9/30 예정 | 2026-09-21~22 | TradingKey [P3] / Investing.com · "Micron's Sold-Out HBM Supply Makes the Bull Case Hard to Dismiss" [P3] |
| NVDA | Google-Georgia Power 원전 업레이트 계약 | [4-A] 참고 — Nvidia GPU向 데이터센터 전력 확보 목적의 인프라 계약으로 보도됨 | 2026-09-21 | AJC [P2] |
| NVDA/AVGO | Bernstein 목표주가 제시 | [4-A] 참고 — "제약적 환경에서도 강한 성장 가시성이 있다"는 평가로 매수 관점 유지 | 2026-09-22 | CNBC [P2] |
| NVDA | Jensen Huang CEO, 9/25 Trump-Xi 국빈 만찬 참석 예정 | AI 관련 논의가 만찬 주요 의제 중 하나로 예상된다고 보도 | 2026-09-22 | CNBC [P2] |

> Nvidia-OpenAI 오하이오 데이터센터 최대 1,050억 달러 자금지원 건, Broadcom-OpenAI 커스텀칩 딜 등은 각각 2026-08-17, 이전 시점에 기 발표된 뉴스로 금일 신규 사실이 아니므로 반복 기재하지 않음(참고: 신규 변동 없음, 직전 발표 유지).

---

## [5-A] AI 인프라 — 수요측/하이퍼스케일러 CAPEX 〔실적시즌 아님 — 1줄 + 참고〕

신규 변동 없음 — 직전 가이던스 유지. Microsoft 2026 연간 캐펙스 가이던스 약 1,900억 달러, Alphabet 약 1,900억 달러(상향), Meta 2026 연간 캐펙스 가이던스 1,150억~1,350억 달러로 사상 최대 인프라 투자 규모 제시(각 사 Q2 2026 실적 발표 기준). 9/22 당일 신규 캐펙스 관련 공시·수정 발표는 확인되지 않음. [출처: 각 사 Q2 2026 실적 발표 자료 종합 보도, 2026-07~08월 [P2]]

---

## [6] 시총상위10 — AI무관 일반이슈 〔이슈 있으면 반영〕

| 기업 | 사실 내용 | 출처일자 | 출처+태그 |
|------|-----------|----------|-----------|
| AAPL | 신임 CEO John Ternus가 전임 Tim Cook이 체결한 중국 CXMT向 DRAM 공급계약(저가 칩, 마진 압박 요인으로 거론)을 두고 워싱턴發 철회 압박에 직면. Apple은 별도로 Broadcom과 대규모 美 제조 관련 다년 계약을 체결한 상태(AI 인프라 성격이 아닌 공급망 이슈로 분류) | 2026-09-22 | 24/7 Wall St · "Apple's New CEO Is Already Being Pressured to Drop the Chinese Chip Deal" [P3] |

> MSFT·NVDA·AMZN·GOOGL·META·AVGO·BRK·TSLA·TSM 관련 그 외 AI 무관 일반 이슈는 금일 수집 범위에서 추가로 확인되지 않음.

---

## [7] 기관·대형 자금 수급 〔데일리〕

| 항목 | 종목 | 사실 내용 | 규모(수치) | 출처+태그 |
|------|------|-----------|------------|-----------|
| 반도체 ETF 자금 유입(기간 누적, 9/22 당일 단일수치 아님) | SOXX | 최근 1개월 누적 순유입 — 정확한 기준일자 불명, 9월 중순 이전 데이터 포함 가능성 있어 신선도 주의 | 약 $9.43B (1개월 누적, 자산의 20.5%) | Trefis/ETFDB 집계 [P3] — 참고용, 9/22 당일치 아님 |
| 반도체 ETF 자금 유입(기간 누적) | SMH | 5일·1개월 누적 순유입, 정확한 기준일 불명 | 약 $1.64B(5일) / $527.43M(1개월) | Trefis 집계 [P3] — 참고용, 9/22 당일치 아님 |
| Nvidia 옵션 포지셔닝 | NVDA | 한 트레이더가 10/16 만기 210/220 풋스프레드 + 235/245 콜스프레드 조합(역방향 아이언 콘도르 구조)을 매수, 방향성과 무관하게 대형 변동성 확대에 베팅한 것으로 보도 | 순지출 약 $4.86/계약 | CNBC · "Nvidia options are doing something unusual ahead of two catalysts" · 2026-09-22 [P2] |

> QQQ 자금흐름·블록딜 등은 9/22 당일 기준 신뢰 가능한 수치를 확보하지 못해 N/A.

---

## [7-A] Insider Trading (Form 4) 〔조건부〕

N/A — 2026-09-22 당일 기준 신규 Form 4 공시 확인되지 않음.

참고(직전 주 공시, 금일 신규 아님): NVDA CEO Jensen Huang이 2026-09-19 RSU 세금원천징수 목적으로 45,728주(주당 $212.17, 약 970만 달러 상당) 처분. CFO Colette Kress는 2026-06-16 채택된 Rule 10b5-1 사전매매계획에 따라 2026-09-18 34,918주(가중평균 $217.42~$219.865, 약 765만 달러)를 공개시장에서 매도. 두 건 모두 Form 4로 공시됨. VRT 이사 Edward L. Monser는 2026-09-01 파생증권 전환(15,287주, 행사가 $11.50) 후 공개시장 매도(약 $249.43~$256.36) 진행. 이상 모두 9/22 기준 최소 며칠~3주 이상 과거 공시로 "금일 신규"에 해당하지 않아 참고용으로만 표기.
출처: GuruFocus/MarketBeat/StockTitan 계열 · "NVIDIA Executives Sell Shares..." [P3] / SEC Form 4 원문(개별 XML) [P1]

---

## [8] 향후 14일 주요 일정 〔2026-09-23~10-07〕

### 경제 일정

| 날짜 | 시각(ET·KST) | 이벤트 | 컨센서스 | 이전치 | 출처 |
|------|--------------|--------|----------|--------|------|
| 2026-09-24 (목) | 08:30 ET · 21:30 KST | 주간 신규 실업수당 청구건수(Initial Jobless Claims) | N/A(확인 못함) | 직전 발표치(9월 첫째 주) 약 206,000건, 둘째 주 약 196,000건 | tradingeconomics.com [P3] |
| 2026-09-25 (금) | 10:00 ET · 23:00 KST | 미시간대 소비자심리지수(확정치) | N/A | N/A | tradingeconomics.com [P3] |
| 2026-09-25 (금) | N/A | 내구재수주(Durable Goods Orders) | N/A | N/A | Kiplinger · This Week's Economic Calendar [P3] |
| 2026-10-02 (금, 범위 밖 참고) | N/A | 9월 고용보고서(Nonfarm Payrolls, 실업률) | N/A | N/A | FedRateCalc [P3] |

> ⚠ CPI(9월분)는 10/14 발표 예정으로 본 14일 구간(9/23~10/7) 밖. 다수 Fed 인사 연설이 예정되어 있으나 개별 일정·연사명은 이번 검색에서 구체 확정하지 못해 N/A 처리.

### 기업 일정

| 날짜 | 기업 | 이벤트 | 컨센서스 EPS | 컨센서스 매출 | 출처 |
|------|------|--------|--------------|----------------|------|
| 2026-09-25 (금) | (백악관 행사, 개별 기업 아님) | Trump-Xi 국빈 만찬, Jensen Huang(NVDA) 등 AI 업계 인사 참석 예정 | N/A | N/A | CNBC [P2] |
| 2026-09-30 (수) | Micron (MU) | 장 마감 후 실적 발표(회계연도 2026 4분기) | N/A(확인 못함) | N/A | TipRanks/TradingKey [P3] |
| 2026-10-01 (목) | Nike (NKE) | FY2027 1분기 실적 발표 (오후 1:15 PT / 4:15 ET) | N/A | N/A | Nike IR · "NIKE, Inc. Announces First Quarter Fiscal 2027 Earnings and Conference Call" [P1] |

> FedEx 실적일은 매체 간 상충 보도(9/17 vs 10/28)로 확정하지 못해 N/A. Microsoft·Amazon·Alphabet·Meta 등 대형 실적 발표일(통상 10월 말~11월 초)은 본 14일 구간 밖이거나 확정 날짜를 확보하지 못해 미기재.

---

## [9] 오늘의 사실 목록 (순위 없음)

`[1] S&P500 7,764.64 보합 마감(약 -0.04%) · CNBC/Yahoo [P2]`
`[1] NASDAQ 종합 27,244.28 사상 최고 종가, +0.45%(+122.18pt) · Yahoo/CNBC [P2]`
`[1] Dow 51,863.69, -0.36%(-185.14pt) 마감 · Yahoo/Bloomberg [P2]`
`[1] Russell2000 2,880.53, +0.70%(+20.13pt) 마감 · TheStreet [P3]`
`[1] SOX 지수 9/22 당일 구체 종가 확인 불가, 직전일(9/21) 급등(+3~4.3%, 8/4 이후 최대) 보도만 존재 · TradeStation [P3]/[N/A]`
`[1] Brent유 약 $98.4~99.3/배럴로 5거래일 연속 하락 · Fortune/CNBC [P2]`
`[1-A] VIX 14.21(-4.44%), VIX9D 12.13(-7.69%), VIX3M 17.61(-2.60%), VVIX 83.17(-3.03%), SKEW 144.8(+1.84%) · CBOE/CME [P1]`
`[1-A] VIX 기간구조: VIX3M/VIX 1.239(콘탱고), VIX/VIX9D 1.171(콘탱고) · CBOE/CME [P1]`
`[1-A] SPX Put/Call 거래량비 1.052, QQQ Put/Call 거래량비 0.877 · CBOE [P1]`
`[2] FOMC가 9/16 25bp 인상 결정, 기준금리 3.75~4.00%로 2023년 이후 첫 인상, 만장일치(12-0) · CNBC/Fed [P1][P2]`
`[2] FOMC 성명 "Inflation remains elevated" 문구 포함 · Fed [P1]`
`[2] SEP 점도표상 18명 중 16명이 연내 추가 인상 가능성 시사, 4명은 2회 추가 인상 전망 · 보도 종합 [P2]`
`[2] Warsh 의장 "We stay in our lane" 발언(9/16) · Yahoo Finance [P2]`
`[2] Warsh 의장 8/28 Jackson Hole 연설에서 인플레 개선 미흡 우려 표명 · Fed [P1]`
`[2] 10년물 국채수익률 약 4.95~4.96%, 2년물 약 4.74~4.76% · CNBC [P2]`
`[2] CME FedWatch 10/28 FOMC 추가 25bp 인상 확률 약 56~59.7% · MacroMicro 등 [P3]`
`[3] 9/22~23 구간 CPI·PPI·GDP·Payroll 등 정규 경제지표 발표 없음 · [N/A]`
`[4] JPMorgan(JPM) -3.34%~-4.0%, Victory Giant Technology 26억 달러 홍콩 상장 주선 건 및 Vanguard-Altruist AI 경쟁 우려 겹악재 · Reuters/Gurufocus [P2]`
`[4] Charles Schwab(SCHW) -4.4%~-6.1%, Vanguard의 Altruist(AI 세금플래닝) 인수 발표로 RIA 경쟁 위협 부각 · Yahoo/GuruFocus [P3]`
`[4] Cisco(CSCO) -3.3%~-5%, Piper Sandler 목표주가 $132→$125 하향(성장 우려) · CNBC [P2]`
`[4] Micron(MU) +3.29%, 사상 첫 $1,000 돌파(9/21)·HBM 완판·DRAM 현물가 급등 · TradingKey [P3]`
`[4-A] Google-Georgia Power 원전 업레이트 계약, 96MW 증설·고객편익 9억 달러 추정 · AJC [P2]`
`[4-A] Apple 신임 CEO John Ternus, 중국 CXMT DRAM 공급계약 관련 정치적 압박 직면 · 24/7 Wall St [P3]`
`[4-A] Bernstein이 Broadcom 목표주가 $575, Nvidia 목표주가 $400 제시 · CNBC [P2]`
`[4-A] Nvidia 옵션 내재변동성 1년래 최저 근접, 이번주 복수 촉매(Jensen Huang 국빈만찬 참석 등) 대기 · CNBC [P2]`
`[4-A] Amazon, Meta의 AI 쇼핑 에이전트 Muse를 자사 플랫폼에서 차단 · Yahoo(Finnhub) [P3]`
`[5] Micron 2026년 HBM 공급 계약 기준 전량 소진(완판), DRAM 현물가 상승 지속 · TradingKey/Investing.com [P3]`
`[5] Nvidia CEO Jensen Huang, 9/25 Trump-Xi 국빈 만찬 참석 예정 · CNBC [P2]`
`[5-A] MSFT·GOOGL 2026 캐펙스 가이던스 각 약 1,900억 달러, META 1,150억~1,350억 달러 — 신규 변동 없음 · 각사 Q2 실적 [P2]`
`[6] Apple 신임 CEO 체제 하 중국 DRAM 공급계약 관련 정책 압박 지속(AI 인프라 무관 공급망 이슈) · 24/7 Wall St [P3]`
`[7] SOXX 1개월 누적 순유입 약 $9.43B, SMH 5일 누적 순유입 약 $1.64B(모두 9/22 당일 단일수치 아님) · Trefis [P3]`
`[7] Nvidia 옵션시장서 대형 변동성 베팅(역방향 아이언 콘도르 구조) 포착 · CNBC [P2]`
`[7-A] 금일 신규 Form 4 공시 없음. 참고: Huang 9/19 세금원천징수 처분, Kress 9/18 10b5-1 계획 매도 · GuruFocus [P3]`
`[8] 9/24 주간 신규 실업수당 청구건수 발표 예정 · tradingeconomics [P3]`
`[8] 9/25 미시간대 소비자심리지수 확정치·내구재수주 발표 예정 · tradingeconomics/Kiplinger [P3]`
`[8] 9/25 Trump-Xi 국빈 만찬, Jensen Huang 참석 예정 · CNBC [P2]`
`[8] 9/30 Micron 4분기 실적 발표 예정 · TipRanks [P3]`
`[8] 10/1 Nike FY2027 1분기 실적 발표 예정 · Nike IR [P1]`
`[8] 차기 FOMC 10/27~28 예정(SEP 동반), 25bp 추가 인상 확률 시장 반영 중 · Federal Reserve [P1]`
