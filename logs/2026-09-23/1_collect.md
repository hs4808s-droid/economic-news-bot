# 미국 시장 데일리 수집 결과 (Collect)
# 기준일: 2026-09-22 (화) · 미국 정규장 종가 기준 · 실행모드: 데일리
# 생성시각(KST): 2026-09-23 08:44

---

## [1] 미국 주요 지수

| 항목 | 종가/수치 | 등락률 | (보도된) 원인 | 출처+태그 |
|------|-----------|--------|----------------|-----------|
| S&P500 | 약보합 마감(수치 소스 간 불일치 — 일부는 "flat", 일부는 +0.21% 보도) | 0.00%~+0.21% (혼재) | AI 트레이드 지속, 유가 급락, 국채금리 하락 | TheStreet · Stock Market Today (Sept. 22, 2026) · https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-sept-22-2026 [P2] / Trading Economics [P3] — **정확한 종가 확인 불가, N/A로 처리 권고** |
| NASDAQ Composite | 27,244 (사상 최고 마감) — 타 소스는 27,122.09(+2.26%, +599.55pt)로 보도, 수치 불일치 | +0.4%~+0.5%(TheStreet) / +2.26%(HDFC Sky 소스) | Meta Muse AI 에이전트 흥행, 반도체·메모리주(마이크론 등) 강세, 유가 하락, 국채금리 하락 | TheStreet [P2] · https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-sept-22-2026 / HDFC Sky [P3] · https://hdfcsky.com/news/nasdaq-rises-2-26percent-to-close-at-27122-09-as-ai-stocks-surge-oil-slides-below-100-september-22-2026 — **소스 간 등락률 불일치, 정확한 수치 N/A** |
| Dow Jones | 51,864 | -0.36% (-185pt) | 금리 민감주(은행·브로커리지) 약세, Fed 매파적 코멘트 여파 | TheStreet · Stock Market Today (Sept. 22, 2026) [P2] · https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-sept-22-2026 |
| Russell 2000 | N/A(정확한 종가 수치 확인 불가) | +0.52% | 소형주 전반 강세, 금리 하락 수혜 | TheStreet [P2] · https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-sept-22-2026 |
| SOX (필라델피아 반도체지수) | N/A — 9/22 정확한 종가 확인 불가 (9/18 종가 11,921.69만 확인됨, 9/21엔 +3% 이상 급등 보도) | N/A | 반도체·메모리 랠리, Trump-Xi 정상 만찬 기대감, Meta Muse發 서버 CPU 수요 재조명 | Yahoo Finance ^SOX Historical Data [P2] · https://finance.yahoo.com/quote/%5ESOX/history/ — **9/22 당일 수치 미확인** |
| Brent (리스크) | 98.47 달러/배럴 | -1.87% | 걸프 지역 공급 확대 전망, 이란의 호르무즈 해협 재개방 신호 | Fortune · Current price of oil as of September 22, 2026 [P2] · https://fortune.com/article/price-of-oil-09-22-2026/ |

> ⚠️ S&P500·나스닥 종가는 검색 소스 간 수치 불일치가 확인되어 단일 확정치를 적지 못했다. 방향성(나스닥 사상 최고 마감, 다우 하락, 러셀 상승)만 사실로 확인됨.

---

## [1-A] 선물·변동성 구조 (`0_data.md`에서 그대로 인용)

**선물 (한국 아침 시점)** — ES · NQ · YM · RTY

| 항목 | 현재가 | 전일 대비 | 직전 종가 | 기준시각(ET) | 출처+태그 |
|------|--------|-----------|-----------|--------------|-----------|
| S&P500 선물 (ES) | 7,832.75 | -0.01% | 7,833.5 | 2026-09-22 19:31 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 나스닥100 선물 (NQ) | 31,054 | +0.87% | 30,784.75 | 2026-09-22 19:31 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 다우 선물 (YM) | 52,268 | -0.39% | 52,475 | 2026-09-22 19:31 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 러셀2000 선물 (RTY) | 2,914.2 | +0.58% | 2,897.4 | 2026-09-22 19:31 | CBOE / CME (Yahoo chart API 자동수집) [P1] |

**변동성 구조** — VIX · VIX9D · VIX3M · VVIX · SKEW

| 항목 | 수치 | 전일 대비 | 출처+태그 |
|------|------|-----------|-----------|
| VIX (30일) | 14.21 | -4.44% | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| VIX9D (9일) | 12.13 | -7.69% | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| VIX3M (3개월) | 17.61 | -2.60% | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| VVIX | 83.17 | -3.03% | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| SKEW | 144.8 | +1.84% | CBOE / CME (Yahoo chart API 자동수집) [P1] |

**VIX 기간구조**

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.239 | 콘탱고 |
| VIX / VIX9D | 1.171 | 콘탱고 |

**Put/Call 비율** — SPX · QQQ

| 대상 | P/C(거래량) | P/C(미결제약정) | 콜 거래량 | 풋 거래량 | 출처+태그 |
|------|-------------|------------------|-----------|-----------|-----------|
| S&P500 지수옵션 (SPX) | 1.052 | 1.410 | 2,224,538 | 2,340,225 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 나스닥100 ETF 옵션 (QQQ) | 0.877 | 1.390 | 4,547,953 | 3,986,300 | CBOE / CME (Yahoo chart API 자동수집) [P1] |

기타 매크로(참고, `0_data.md` 원천): 10년 국채선물(ZN=F) 106.13(-0.19%) · 금(GC=F) 4,402.1(+0.42%) · WTI(CL=F) 89.67(-6.38%) · DXY 100.56(+0.13%) — CBOE / CME (Yahoo chart API 자동수집) [P1]

---

## [2] 금리 / 연준

| 항목 | 사실 내용(발언·수치) | 출처+태그 |
|------|----------------------|-----------|
| 10년물 국채금리 | 4.959% | CNBC · Treasury yields are little changed as traders await Fed comments · 2026-09-22 · https://www.cnbc.com/2026/09/22/treasury-yield-us-bond-market-trump.html [P2] |
| 2년물 국채금리 | 4.743% | CNBC · 2026-09-22 [P2] |
| 10Y-2Y 스프레드 | 약 +0.216%p (4.959% - 4.743%, 산술값) | 상기 두 수치 기반 산출 |
| FOMC 정책금리 결정 (9월 회의) | Fed가 정책금리를 3.75%~4.00%로 25bp 인상. 2023년 이후 첫 인상. 투표는 만장일치(12-0)로 보도됨 | Yahoo Finance · Federal Reserve meeting live updates [P2] · https://finance.yahoo.com/economy/policy/live/federal-reserve-meeting-live-updates-chairman-kevin-warsh-143452661.html / U.S. Bank · Fed raises rates to 3.75%-4.00%, first hike since 2023 [P2] · https://www.usbank.com/investing/financial-perspectives/market-news/federal-reserve-interest-rate.html |
| Fed 의장 Kevin Warsh 발언 | "We stay in our lane" — Fed 독립성 관련 질문에 정책 영역을 벗어난 언급은 하지 않겠다는 취지로 발언. 물가안정이 "금융자산·주택자산이 없는 미국인들에게도 좋은 소식"이라는 취지로 발언 | Yahoo Finance · Federal Reserve meeting live updates [P2] |
| SEP(점도표) | 18명 위원 중 16명이 연내 추가 25bp 인상 가능성을 열어둠, 그 중 4명은 추가 2회 인상 전망 | Kiplinger · September Fed Meeting: Updates and Commentary [P2] (WebFetch 접근 실패로 직접 본문 미확인, 검색 스니펫 기반) |
| CME FedWatch (10/28 FOMC) | 25bp 추가 인상 확률 약 59.7% (인상 가능성이 인하보다 높게 반영) | growbeansprout / centralbank.watch 등 집계 [P3] · 정확한 1차 CME 페이지 수치는 재확인 필요 — **참고용, 확정치 아님** |
| 다음 FOMC 일정 | 2026-10-27~28 (금리 발표 10/28 14:00 ET, 기자회견 14:30 ET, SEP 발표 동반) | Finance Calendar · Next FOMC Meeting [P3] · https://www.financecalendar.com/fomc-meetings/ |

> ⚠️ 위 Fed 인상 관련 내용은 CLAUDE.md 프로젝트 문맥(금리 인하 사이클 가정)과 배치될 수 있으나, 검색으로 확인된 사실을 그대로 기재한다. 확인 필요 시 원문 1차 출처(federalreserve.gov) 재검증 권고.

---

## [3] 주요 경제지표

N/A — 금일(2026-09-22) 발표된 최상위 경제지표 없음. 이번 주(9/21~9/27) 예정: 주택착공/허가, 신규 실업수당 청구건수, 내구재수주 등이나 9/22 당일 발표분은 확인되지 않음.

출처: Kiplinger · What to Look Out for in Economic Data This Week (September 21-25) [P3] · https://www.kiplinger.com/investing/economy/this-weeks-economic-calendar

---

## [4] 특징 종목 (±5% 이상 · 거래량 급증)

| 종목 | 티커 | 등락률 | 거래량 | (보도된) 핵심 사실 | 출처+태그 |
|------|------|--------|--------|---------------------|-----------|
| Micron Technology | MU | +3.29% (9/22 마감 기준 보도) | N/A | 사상 처음으로 주당 1,000달러 돌파(9/21), 9/22 장중 1,064달러까지 터치 후 약 1,044달러 부근 마감 추정. 2026년 HBM 공급 전량 Nvidia向 소진, DRAM 현물가 연초 대비 +52% | TradingKey · Micron Technology Inc Stock (MU) Moved Up by 3.29% on Sep 22 [P3] · https://www.tradingkey.com/news/market-movers/262180651-market-movers-mu-20260922 — **±5% 기준 미달 가능성, 확인 필요** |
| Charles Schwab | SCHW | -6.1%(GuruFocus) / -4.86%(TradingKey) | N/A | Fed 금리 인상 및 매파적 코멘트로 금리 민감 브로커리지주 약세. Vanguard의 Altruist 인수(AI 세금 최적화 툴 보유)發 경쟁 위협 우려도 배경으로 거론 | GuruFocus [P3] · https://www.gurufocus.com/news/9092404/charles-schwab-corp-schw-shares-fall-61-gf-value-says-still-overvalued / TradingKey [P3] · https://www.tradingkey.com/news/market-movers/262180650-market-movers-schw-20260922 — **정확한 등락률 소스 간 불일치** |
| Cisco Systems | CSCO | -3.85%(Ad Hoc News) / -3.32%(TradingKey) / 0단계 데이터는 "-5%" 헤드라인 | N/A | Piper Sandler가 목표주가를 132달러→125달러로 하향(투자의견 Neutral 유지). 업계 성장 정점 우려, 매출 성장률이 한 자릿수로 둔화할 것이라는 시각 | CNBC · Cisco stock sinks 5% after Piper Sandler cuts price target on growth concerns · 2026-09-22 [P2] · https://www.cnbc.com/2026/09/22/cisco-stock-piper-sandler-price-target.html |

> ±5% 기준을 명확히 충족하는지 소스마다 수치가 갈려 확인이 어려운 종목이 있음. Micron·Schwab·Cisco 모두 관련 뉴스는 명확히 존재하나 정확한 등락률 확정치는 원 소스(거래소/Yahoo Finance) 직접 대조 필요.

---

## [4-A] 섹터별 뉴스 (`0_data.md` Finnhub 수집분 기반)

| 섹터 | 종목 | 사실 내용(무슨 일이) | 발행시각(ET) | 출처+태그 |
|------|------|----------------------|--------------|-----------|
| 반도체·AI | AVGO | "Apple's New CEO Is Already Being Pressured to Drop the Chinese Chip Deal Tim Cook Fought to Keep" — 신임 CEO John Ternus가 중국 CXMT向 DRAM 공급 계약을 두고 워싱턴發 압박에 직면했다는 보도 | 2026-09-22 14:48 | Yahoo (Finnhub 수집) [P3] · https://finnhub.io/api/news?id=bf1a18ea6dcab46d1e9c1c3f888e64bef5e7c4199dd2146e2be063091114492f / 보강: 24/7 Wall St [P3] · https://247wallst.com/investing/2026/09/22/apples-new-ceo-is-already-being-pressured-to-drop-the-chinese-chip-deal-tim-cook-fought-to-keep/ |
| 반도체·AI | NVDA | Nvidia 옵션 내재변동성이 최근 1년래 최저 수준 근접. 9/25(목) Trump-Xi 국빈 만찬에 Jensen Huang 참석 예정 등 두 개 촉매를 앞두고 옵션시장에서 이례적 저가 프리미엄 형성 | 2026-09-22 12:58 | CNBC (Finnhub 수집) [P2] · https://www.cnbc.com/2026/09/22/nvidia-options-are-doing-something-unusual-ahead-of-two-catalysts-heres-how-one-trader-is-playing-it.html |
| 금융 | JPM, SCHW | "Charles Schwab, JPMorgan Chase Slide On Vanguard-Backed AI Threat" — Vanguard의 Altruist(AI 세금플래닝 툴 보유) 인수 이슈가 배경으로 거론됨. JPM -2.85%, SCHW 하락 | 2026-09-22 14:22 | Yahoo (Finnhub 수집) [P3] · https://finnhub.io/api/news?id=56dfba9ea80de5f3e1e45e5b3fd289e973770965e8e213b39bb580bfcb22daf9 |
| 에너지 | XOM | "Exxon Just Set a Bold 2030 Target for LNG Sales" — Exxon이 2030년까지 LNG 판매 5,000만 톤 목표를 설정했다는 보도(신규 수치, 출처일자 2026-09-22) | 2026-09-22 12:05 | Yahoo (Finnhub 수집) [P3] · https://finnhub.io/api/news?id=8e2a70bf6ae3dcd65bf656c250db94201ab6c91d73b4961a645d452c0e5b5864 |
| 헬스케어 | UNH | "Can UNH Stock Keep Growing Earnings While Its Sales Stall?" — UnitedHealth 매출 정체 속 이익 성장 지속 가능성에 대한 분석 기사. 주가 -1.26% | 2026-09-22 14:09 | Yahoo (Finnhub 수집) [P3] · https://finnhub.io/api/news?id=34b69edf2a74f0cb424507a082f3bdd474474b0b9314bc154e1fc4d76ca78ba1 |
| 소비재·유통 | AMZN | "Amazon.com Blocks Rival AI Shopping Agent On Its Platform" — Amazon이 Meta의 AI 쇼핑 에이전트 Muse를 자사 플랫폼에서 차단(9/21 일요일 밤부터). Meta가 삭제 요청을 거부한 데 따른 조치로 보도 | 2026-09-22 17:14 | Yahoo (Finnhub 수집) [P3] · https://finnhub.io/api/news?id=7d96e1f939a7d93111edee3ea421edb3a4bc9f031b1392f9a3a21031cd0ae943 |

---

## [5] AI 인프라 — 공급 측

| 기업 | 뉴스 제목 | 사실 내용(무슨 일이) | 출처일자 | 출처+태그 |
|------|-----------|----------------------|----------|-----------|
| MU (Micron) | Micron 주가 사상 첫 1,000달러 돌파 | 2026년 HBM 공급 물량 전량이 Nvidia向 AI 데이터센터 수요로 이미 소진(sold out). DRAM 현물가는 연초 대비 +52% 상승. Goldman Sachs는 2026년 글로벌 D RAM 공급부족률을 4.9%, 2027년 5.9%로 추정(GS 자체 추정치, Micron 공식 수치 아님) | 2026-09-21~22 | TradingKey [P3] · https://www.tradingkey.com/news/market-movers/262180651-market-movers-mu-20260922 / Startup Fortune [P3] · https://startupfortune.com/micron-stock-tops-1000-for-the-first-time-as-the-ai-memory-boom-rages-on/ — Micron 9/30 실적 발표 예정(출처일자 확인됨) |
| AVGO | "AMD Stock Just Sent a Huge AI Signal" / "AMD Stock Just Entered Rarefied Territory" | AMD 관련 AI 시그널 기사 2건이 Finnhub 수집분에 포함됨. 기사 본문 상세는 제목 수준에서만 확인, 추가 검증 없음 | 2026-09-22 14:04, 15:07 | Yahoo (Finnhub 수집) [P3] · https://finnhub.io/api/news?id=0a8e4d9f85eb3886d87d720ed8c87f443770bada2ce1f8dd2ccd85b5c0af282b — **본문 미검증, 제목만 확인** |
| NVDA | Jensen Huang, Trump-Xi 국빈 만찬 참석 예정(9/25 목요일) | AI 관련 논의가 만찬의 주요 의제 중 하나로 예상된다고 보도 | 2026-09-22 | CNBC (Finnhub 수집) [P2] · https://www.cnbc.com/2026/09/22/nvidia-options-are-doing-something-unusual-ahead-of-two-catalysts-heres-how-one-trader-is-playing-it.html |

> NVDA·AVGO의 대형 CAPEX·신규 수주(Nvidia-OpenAI $105B 파이낸싱, Broadcom-OpenAI 10GW 커스텀칩 딜 등)는 각각 2026-08-17, 2025년 10월경 발표된 기존 뉴스로, 금일(9/22) 신규 사실이 아니므로 본 섹션에 반복 기재하지 않음.

---

## [5-A] AI 인프라 — 수요 측 / 하이퍼스케일러 CAPEX

신규 변동 없음 — 직전 가이던스 유지. Microsoft·Amazon·Alphabet·Meta의 최신 CAPEX 가이던스 수치는 각 사 최근 실적 발표(3분기 실적 시즌 이전)에서 제시된 수준에서 변동 확인되지 않음. 정확한 직전 가이던스 수치는 이번 세션 검색 범위에서 재확인하지 못함 — N/A.

---

## [6] 시총 상위 10 — AI 무관 일반 이슈

| 기업 | 사실 내용 | 출처일자 | 출처+태그 |
|------|-----------|----------|-----------|
| AAPL | 신임 CEO John Ternus가 Tim Cook 때부터 이어진 중국 CXMT向 DRAM 공급계약(저가 칩, 애플 총마진 압박 요인으로 거론)을 두고 워싱턴發 철회 압박에 직면. Apple은 별도로 Broadcom과 300억 달러 규모 美 제조 관련 다년 계약을 체결한 상태 | 2026-09-22 | 24/7 Wall St [P3] · https://247wallst.com/investing/2026/09/22/apples-new-ceo-is-already-being-pressured-to-drop-the-chinese-chip-deal-tim-cook-fought-to-keep/ |

> MSFT·NVDA·AMZN·GOOGL·META·AVGO·BRK·TSLA·TSM 관련 AI 무관 일반 이슈는 금일 수집 범위에서 추가로 확인되지 않음 — N/A.

---

## [7] 기관·대형 자금 수급

| 항목 | 종목 | 사실 내용 | 규모(수치) | 출처+태그 |
|------|------|-----------|------------|-----------|
| 반도체 ETF 자금 유입 | SOXX | 최근 1개월 순유입 94.3억 달러(자산의 20.5%) — 정확한 기준일자 불명, 9월 중순 이전 데이터 포함 가능성 있음 | $9.43B (1개월 누적) | Trefis/ETFDB 집계 [P3] — **9/22 당일 단일 유입액 아님, 기간 누적치. 신선도 주의** |
| 반도체 ETF 자금 유입 | SMH | 5일 순유입 16.4억 달러, 1개월 순유입 5.27억 달러 | $1.64B(5일) / $527.43M(1개월) | Trefis 집계 [P3] — **정확한 기준일 불명** |
| Nvidia 옵션 포지셔닝 | NVDA | 한 트레이더가 10/16 만기 210/220 풋스프레드 + 235/245 콜스프레드(역방향 아이언 콘도르 구조)를 약 4.86달러 순지출로 매수 — 방향성 무관 대형 변동성 베팅 | 순지출 약 $4.86/계약 | CNBC [P2] · https://www.cnbc.com/2026/09/22/nvidia-options-are-doing-something-unusual-ahead-of-two-catalysts-heres-how-one-trader-is-playing-it.html |

> QQQ 자금흐름·블록딜 등 추가 항목은 9/22 당일 기준 신뢰 가능한 수치를 확보하지 못해 N/A로 남김.

---

## [7-A] Insider Trading (SEC Form 4)

N/A — 금일(2026-09-22) 기준 신규 Form 4 공시 확인되지 않음.

참고(과거 공시, 신규 아님): Nvidia CEO Jensen Huang이 2026-09-19 RSU 세금원천징수 목적으로 45,728주(주당 $212.17, 약 970만 달러) 처분, CFO Colette Kress는 사전 수립된 거래계획(10b5-1 추정)에 따라 2026-09-18 34,918주(약 765만 달러) 매도 — 이는 금일 신규 공시가 아니므로 참고용으로만 표기.
출처: GuruFocus [P3] · https://www.gurufocus.com/news/9088908/nvidia-executives-sell-shares-amid-sec-disclosure / KuCoin [P3] · https://www.kucoin.com/news/flash/nvidia-executives-sell-nearly-150-000-shares-including-46-000-by-jensen-huang — **거래유형(10b5-1/재량/옵션행사) 명확한 공시서류 원문 미확인, 보도 기반 추정**

---

## [8] 향후 14일 주요 일정

**경제 일정**

| 날짜 | 시각(ET·KST) | 이벤트 | 컨센서스 | 이전치 | 출처 |
|------|--------------|--------|----------|--------|------|
| 2026-09-25(목) | N/A | 신규 실업수당 청구건수(Initial Jobless Claims) | N/A | N/A | Kiplinger · This Week's Economic Calendar [P3] · https://www.kiplinger.com/investing/economy/this-weeks-economic-calendar |
| 2026-09-25(목) | N/A | 내구재수주(Durable Goods Orders) | N/A | N/A | Kiplinger [P3] |
| 2026-10-02(금) | N/A | 9월 고용보고서(Nonfarm Payrolls, 실업률) | N/A | N/A | FedRateCalc [P3] · https://fedratecalc.com/us-economic-calendar/september-2026/ |
| 2026-10-13(화) | 10:00 ET | 9월 기존주택판매(Existing-Home Sales) | N/A | 전월(8월) -2.0% | NAR / FRED [P1] |
| 2026-10-27~28(화~수) | 10/28 14:00 ET(발표) / 14:30 ET(기자회견) | FOMC 정례회의 · 금리 결정 · SEP(점도표) 발표 | N/A | 정책금리 3.75~4.00% (9월 결정) | Finance Calendar [P3] · https://www.financecalendar.com/fomc-meetings/ |

> CPI·PPI 등 구체적 발표일은 검색 범위에서 명확한 10월 초중순 일정까지는 확인했으나 정확한 날짜·컨센서스 수치는 확보하지 못해 N/A로 남김.

**기업 일정**

| 날짜 | 기업 | 이벤트 | 컨센서스 EPS | 컨센서스 매출 | 출처 |
|------|------|--------|--------------|---------------|------|
| 2026-09-30(수) | Micron Technology (MU) | 4분기(회계연도 2026) 실적 발표 | N/A | N/A | TradingKey · Micron 관련 기사 내 언급 [P3] · https://www.tradingkey.com/news/market-movers/262180651-market-movers-mu-20260922 |
| 2026-09-25(금) | (백악관 행사, 개별 기업 아님) | Trump-Xi 국빈 만찬, Jensen Huang(NVDA) 등 AI 업계 인사 참석 예정 | N/A | N/A | CNBC [P2] · https://www.cnbc.com/2026/09/22/nvidia-options-are-doing-something-unusual-ahead-of-two-catalysts-heres-how-one-trader-is-playing-it.html |

> Microsoft·Amazon·Alphabet·Meta 등 대형 실적 발표일(통상 10월 말~11월 초)은 이번 세션에서 확정 날짜를 확보하지 못해 N/A.

---

## [9] 오늘의 사실 목록 (순위 없음)

```
[1] 나스닥 종합지수 사상 최고 마감(방향성 확인, 정확 수치 소스 불일치) · TheStreet [P2]
[1] 다우존스 51,864 마감, -0.36%(-185pt) · TheStreet [P2]
[1] 러셀2000 +0.52% · TheStreet [P2]
[1] Brent유 98.47달러, -1.87%, 걸프 공급 확대·호르무즈 재개방 신호 · Fortune [P2]
[1-A] VIX 14.21(-4.44%), VIX9D 12.13(-7.69%) — 변동성 구조 전반 하락 · CBOE/CME [P1]
[1-A] VIX 기간구조: VIX3M/VIX 1.239, VIX/VIX9D 1.171 — 콘탱고 · CBOE/CME [P1]
[1-A] SPX Put/Call(거래량) 1.052, QQQ Put/Call(거래량) 0.877 · CBOE/CME [P1]
[2] Fed, 9월 FOMC에서 정책금리 3.75~4.00%로 25bp 인상(2023년 이후 첫 인상), 만장일치 결정 · Yahoo Finance/U.S. Bank [P2]
[2] 10년물 국채금리 4.959%, 2년물 4.743% · CNBC [P2]
[2] SEP상 18명 중 16명이 연내 추가 인상 가능성 시사, 4명은 2회 추가 인상 전망 · Kiplinger [P2]
[2] 차기 FOMC 2026-10-27~28 예정 · Finance Calendar [P3]
[3] 금일 최상위 경제지표 발표 없음 · Kiplinger [P3]
[4] Micron(MU) 사상 첫 주당 1,000달러 돌파, 장중 1,064달러 · TradingKey [P3]
[4] Charles Schwab(SCHW) 급락, Fed 금리 인상 및 Vanguard發 AI 경쟁 위협 우려 거론 · GuruFocus/TradingKey [P3]
[4] Cisco(CSCO) 하락, Piper Sandler 목표주가 132→125달러 하향 · CNBC [P2]
[4-A] Apple 신임 CEO John Ternus, 중국 CXMT DRAM 공급계약 관련 정치적 압박 직면 · 24/7 Wall St [P3]
[4-A] Nvidia 옵션 내재변동성 1년래 최저권, 9/25 Trump-Xi 만찬·반도체 섹터 촉매 대기 · CNBC [P2]
[4-A] JPMorgan·Charles Schwab, Vanguard의 Altruist 인수(AI 세금플래닝) 관련 우려로 동반 하락 · Yahoo(Finnhub) [P3]
[4-A] Amazon, Meta의 AI 쇼핑 에이전트 Muse를 자사 플랫폼에서 차단 · Yahoo(Finnhub) [P3]
[5] Micron 2026년 HBM 공급 전량 Nvidia向 AI 데이터센터 수요로 소진, DRAM 현물가 연초 대비 +52% · TradingKey [P3]
[5] Nvidia CEO Jensen Huang, 9/25 Trump-Xi 국빈 만찬 참석 예정 · CNBC [P2]
[5-A] 하이퍼스케일러 CAPEX 가이던스 신규 변동 없음(직전 가이던스 유지, 실적시즌 외) · N/A
[6] Apple 신임 CEO 체제 하 중국 DRAM 공급계약 관련 정책 압박 지속 · 24/7 Wall St [P3]
[7] SOXX 최근 1개월 순유입 94.3억달러(기준일 불명확) · Trefis [P3]
[7] Nvidia 옵션시장서 대형 변동성 베팅(역방향 아이언 콘도르) 포착 · CNBC [P2]
[7-A] 금일 신규 Form 4 공시 없음 · N/A
[8] 9/25 신규 실업수당 청구·내구재수주 발표 예정 · Kiplinger [P3]
[8] 10/2 9월 고용보고서 발표 예정 · FedRateCalc [P3]
[8] 10/13 9월 기존주택판매 발표 예정 · NAR [P1]
[8] 10/27~28 FOMC 정례회의(SEP 동반) 예정 · Finance Calendar [P3]
[8] 9/30 Micron 4분기 실적 발표 예정 · TradingKey [P3]
```
