# 미국 시장 데일리 수집 결과 (Collect)
# 기준일: 2026-10-22 (목) · 미국 정규장 종가 기준 · 실행모드: 데일리 코어 + 지표발표일([3]) + 실적시즌([5-A]·[6])
# 생성시각(KST): 2026-10-23 06:39

> `0_data.md`·`docs/data/facts.json`을 먼저 Read하여 반영함. [1]·[1-A]·[2]의 지수·선물·변동성·금리 수치는 검색 없이 `0_data.md`를 그대로 인용했다.

---

## [1] 미국 주요 지수

| 항목 | 종가/수치 | 등락률 | (보도된) 원인 | 출처+태그 |
|------|-----------|--------|----------------|-----------|
| S&P500 | 7,663.43 | -1.21% | 메타·테슬라 실적 발표 이후 AI 지출(캡엑스) 우려 재부각, 빅테크의 채권 발행을 통한 AI 투자 확대 우려로 기술주 매도 | Yahoo Finance(Bloomberg/Reuters 종합) · "S&P 500, Nasdaq end sharply lower as revived AI doubts ignite tech selloff" · 2026-10-22 · https://finance.yahoo.com/markets/stocks/articles/nasdaq-futures-drop-over-1-093849296.html [P2] |
| 나스닥종합 | 26,008.86 | -2.60% | 상동(AI 지출 우려 재부각에 따른 기술주 매도). 국채로의 안전자산 선호 동반 | NBC News · "Markets tumble as concerns about Iran war and high AI spending collide" · 2026-10-22 · https://www.nbcnews.com/business/markets/iran-war-ai-spending-oil-prices-selloff-rcna604994 [P2] |
| 다우 | 52,867.98 | +0.02% | N/A — 다우가 보합을 유지한 구체적 보도 원인 확인 안 됨(매도가 기술·반도체주에 집중됐다는 서술만 존재) | — [N/A] |
| 러셀2000 | 2,784.03 | +0.11% | N/A — 러셀2000 강세의 구체적 보도 원인 확인 안 됨 | — [N/A] |
| SOX (필라델피아 반도체) | 10,731.98 | -6.72% | 반도체 장비업체 Lam Research의 실적 콜에서 CFO가 차기 분기 가이던스($86억)와 관련해 "일부 단기 공급망 제약"을 언급, 반도체 섹터 전반 매도로 확산 | Yahoo Finance(Reuters 종합) · "Chip stocks fall as equipment maker Lam Research cites 'supply chain constraints'" · 2026-10-22 · https://finance.yahoo.com/markets/article/chip-stocks-fall-as-equipment-maker-lam-research-cites-supply-chain-constraints-130648719.html [P2] |
| Brent | 112.87 | +3.72% | 후티 반군의 사우디 공격(다맘 공항·유전 등, 사망 3명·부상 8명 보도), 사우디 아람코의 다란 본사 직원 대피, 미국의 사우디 내 비필수 공무원 철수 조치, 트럼프 대통령의 이란 대응 시사 발언 | CNBC · "Brent crude tops $113, highest level since May, after Trump hints at action on Iran" · 2026-10-22 · https://www.cnbc.com/2026/10/22/oil-prices-today-wti-brent-saudi-arabia.html [P2] |

---

## [1-A] 선물·변동성 구조 (검색 없이 `0_data.md` 그대로 인용)

**선물 (한국 아침 시점)**

| 항목 | 현재가 | 전일 대비 | 직전 종가 | 기준시각(ET) | 출처+태그 |
|------|--------|-----------|-----------|--------------|-----------|
| S&P500 선물 (ES) | 7,703.75 | -1.24% | 7,800.25 | 2026-10-22 16:59 | Yahoo chart API 자동수집 [P1] |
| 나스닥100 선물 (NQ) | 29,094.75 | -3.04% | 30,007 | 2026-10-22 16:59 | Yahoo chart API 자동수집 [P1] |
| 다우 선물 (YM) | 53,085 | +0.05% | 53,059 | 2026-10-22 16:59 | Yahoo chart API 자동수집 [P1] |
| 러셀2000 선물 (RTY) | 2,792.6 | -0.06% | 2,794.2 | 2026-10-22 16:59 | Yahoo chart API 자동수집 [P1] |

**변동성 구조**

| 항목 | 수치 | 전일 대비 | 출처+태그 |
|------|------|-----------|-----------|
| VIX (30일) | 19.03 | +14.09% | CBOE 지연시세 API 자동수집 [P1] |
| VIX9D (9일) | 18.86 | +21.76% | CBOE 지연시세 API 자동수집 [P1] |
| VIX3M (3개월) | 20.12 | +7.48% | CBOE 지연시세 API 자동수집 [P1] |
| VVIX | 107.94 | +14.16% | CBOE 지연시세 API 자동수집 [P1] |
| SKEW | 152.39 | +1.35% | CBOE 지연시세 API 자동수집 [P1] |

기간구조(산출값): VIX3M/VIX = 1.057(콘탱고), VIX/VIX9D = 1.009(콘탱고). 분류명일 뿐 해석 없음.

**Put/Call 비율 (CBOE 옵션 체인 직접 집계)**

| 대상 | P/C(거래량) | P/C(미결제약정) | 콜 거래량 | 풋 거래량 | 출처+태그 |
|------|-------------|------------------|-----------|-----------|-----------|
| S&P500 지수옵션 (SPX) | 1.240 | 1.469 | 2,531,838 | 3,140,429 | CBOE 지연시세 API [P1] |
| 나스닥100 ETF 옵션 (QQQ) | 1.006 | 1.446 | 5,304,410 | 5,337,500 | CBOE 지연시세 API [P1] |

---

## [2] 금리 / 연준

| 항목 | 사실 내용(발언·수치) | 출처+태그 |
|------|----------------------|-----------|
| 미 2년물 금리 (FRED) | 4.81%, 전일 대비 +2.0bp, 1M +5.0bp, YTD +134.0bp (기준일 2026-10-21) | FRED DGS2 [P1] |
| 미 10년물 금리 (FRED) | 5.13%, 전일 대비 +1.0bp, 1M +17.0bp, YTD +95.0bp (기준일 2026-10-21) | FRED DGS10 [P1] |
| 10Y-2Y 스프레드 (FRED) | 0.32%p, 전일 대비 -1.0bp (기준일 2026-10-21) | FRED DGS10-DGS2 [P1] |
| 미 10년물 금리 (Yahoo 당일·참고) | 4.953%, 전일 대비 -19.3bp | Yahoo `^TNX` [P1] |
| 미 30년물 금리 (Yahoo 당일·참고) | 5.287%, 전일 대비 -15.2bp | Yahoo `^TYX` [P1] |
| Fed 발언 | 2026-10-22 당일 공개 발언 확인 안 됨(N/A). FOMC(10/27~28)를 앞두고 블랙아웃 기간에 해당하는 것으로 보임(이사·총재는 통상 회의 2주 전 토요일 0시~회의 익일까지 공개 발언 자제) | 애틀랜타 연은 "Blackout Periods" 안내 [P1] / 기간 자체 교차확인은 2차 종합 자료에 의존 [P3] |
| CME FedWatch (차기 FOMC, 10/28) | 이번 수집에서 cmegroup.com 실시간 수치를 직접 재확인하지 못함(N/A). `facts.json` 직전값 이월: 동결(인상 없음) 확률 약 84~88%, 25bp 인상 확률 약 12~16% (최종확인 10/22) | CME FedWatch [P1, 이월] |

---

## [3] 주요 경제지표 — 신규 실업수당 청구 (지표발표일)

| 지표(측정 기준) | 발표시각(ET·KST) | 발표치 | 예상치 | 이전치 | 서프라이즈 | 출처 |
|------|------------------|--------|--------|--------|------------|------|
| 신규 실업수당 청구 (Level, 주간, 10/17 종료주) | 08:30 ET · 21:30 KST (2026-10-22) | 194K | 200K | 200K | -6K | Reuters · "US weekly jobless claims near 57-year lows, underscore labor market stability" · 2026-10-22 · https://lufkindailynews.com/news_reuters/business/us-weekly-jobless-claims-near-57-year-lows-underscore-labor-market-stability/article_88ff0c22-7f5f-595c-b8f7-bdd8c7bb0eac.html [P2] |

> 참고(동일 발표, 별도 지표): 계속 실업수당 청구(10/4~10 종료주)는 172.8만명으로 전주 대비 +2.5만명 증가, 4주 이동평균은 19.775만명(1969년 이후 최저)으로 보도됨 [P2]. 이 발표치는 사람이 읽는 참고용이며, 원장·사이트의 실제 수치는 코드가 BLS/FRED에서 직접 수집한다.

---

## [4] 특징 종목 (±5% 이상, 2026-10-22)

| 종목 | 티커 | 등락률 | 거래량 | (보도된) 핵심 사실 | 출처+태그 |
|------|------|--------|--------|---------------------|-----------|
| 메타 플랫폼스 | META | 약 -7% | N/A | 3Q26 실적(매출 646억달러, +26% YoY)에 98.9억달러 법적 비용 반영으로 영업이익 둔화, FCF -21.2억달러, FY26 캡엑스 가이던스 상향(135억~145억달러) 발표 후 급락 | CNBC · "Meta stock sinks nearly 7% as AI spend pushes free cash flow negative" · 2026-10-22 · https://www.cnbc.com/2026/10/22/meta-stock-q3-earnings-free-cash-flow.html [P2] |
| IBM | IBM | 약 -7%(프리마켓 -5% 보도도 존재) | N/A | 3Q26 매출·EPS 모두 컨센서스 상회했으나, CEO가 기업 고객의 AI 투자수익에 대한 회의적 반응을 언급하고 매출성장 가이던스를 유지(상향 없음)한 데 따른 하락 | 24/7 Wall St. · "IBM Sinks 7% as CEO's AI Spending Caution Overshadows Earnings Beat" · 2026-10-22 · https://247wallst.com/investing/2026/10/22/ibm-sinks-7-as-ceos-ai-spending-caution-overshadows-earnings-beat-accenture-and-infosys-ease-back/ [P3] |
| 램리서치 | LRCX | 약 -9.4%(장중 최대 -11% 보도) | N/A | 기록적 3Q 매출($82.2억, 컨센서스 상회) 발표했으나 차기 분기 가이던스($86억)가 "일부 공급망 제약"으로 기대치에 못 미쳐 하락 | Invezz · "Lam Research stock falls 9% despite record results" · 2026-10-22 · https://invezz.com/news/2026/10/22/lam-research-stock-falls-9-despite-record-results-this-analyst-sees-stock-doubling/ [P3] |
| 마벨 테크놀로지 | MRVL | 약 -9.44% | N/A | 자체 실적 발표 없었음. Lam Research의 공급망 제약 발언에 따른 반도체 섹터 동반 매도 | TradingKey · "Marvell Technology Inc Stock (MRVL) Moved Down by 9.44% on Oct 22" · 2026-10-22 · https://www.tradingkey.com/news/market-movers/262233052-market-movers-mrvl-20261022 [P3] |
| 인텔 | INTC | 약 -7% | N/A | Lam Research발 반도체 섹터 동반 매도. 같은 날 Susquehanna가 목표가를 115달러→105달러로 하향(중립 유지) | Yahoo Finance · "Chip Stocks Fall as Supply Warning Deepens AI Selloff: Marvell and AMD Sink 8%, Intel Drops 7%" · 2026-10-22 · https://finance.yahoo.com/technology/articles/chip-stocks-fall-supply-warning-deepens-ai-selloff-154508313.html [P2] |
| GE 버노바 | GEV | 약 -11% | N/A | 메타의 캡엑스 지출 전망이 AI 전력·데이터센터 장비 공급업체들의 자금조달 우려를 촉발하며 동반 매도(기사 상 GE 버노바 고유 공시는 확인 안 됨) | 24/7 Wall St. · "GE Vernova Slumps 11% as Meta's Spending Outlook Stokes AI Financing Worries" · 2026-10-22 · https://247wallst.com/investing/2026/10/22/ge-vernova-slumps-11-as-metas-spending-outlook-stokes-ai-financing-worries-vertiv-holdings-drops-7-eaton-slides-6/ [P3] |
| 네비우스 그룹 | NBIS | 약 -6% | N/A | Citi로부터 신규 신용공여(만기 1년 미만)를 받아 데이터센터·GPU 구매 자금에 사용한다고 발표, 부채 기반 AI 인프라 확장 우려로 하락 | 24/7 Wall St. · "Nebius Declines 6% Despite Fresh Citi Financing" · 2026-10-22 · https://247wallst.com/investing/2026/10/22/nebius-declines-6-despite-fresh-citi-financing-coreweave-drops-5-cloudflare-edges-higher/ [P3] |
| IREN | IREN | 약 -8.4%(52주 신저가) | N/A | 네오클라우드 업종 전반의 부채 지속가능성 우려에 따른 동반 매도(고유 공시는 확인 안 됨). 숏 인터레스트가 연초 15.78%에서 21.34%로 상승했다는 보도 | Investing.com · "Iren stock hits 52-week low at 25.58 USD" · 2026-10-22 · https://www.investing.com/news/company-news/iren-stock-hits-52week-low-at-2558-usd-93CH-4966718 [P3] |
| 스포티파이 | SPOT | 약 +9%(장중) | N/A | 3Q26 실적: 유료구독자 3.06억명(+9% YoY), 프리미엄 매출 50.3억달러(+17%), 광고 매출 5.4억달러(+10%), 영업이익 컨센서스 상회 | GuruFocus · "Spotify (SPOT) Shares Rise 5.2% Premarket After Q3 Earnings Beat" · 2026-10-22 · https://www.gurufocus.com/news/9136352/spotify-spot-shares-rise-52-premarket-after-q3-earnings-beat-on-operating-income [P3] |

---

## [4-A] 섹터별 뉴스 (`0_data.md` Finnhub 수집분 중 사건성 기사만 추림)

| 섹터 | 종목 | 사실 내용(무슨 일이) | 발행시각(ET) | 출처+태그 |
|------|------|----------------------|--------------|-----------|
| 금융 | JPM | JP모건이 장기(10~15년) 60/40 포트폴리오 성과 전망을 상향 조정하는 리서치 노트를 발표 | 2026-10-22 14:22 | Yahoo(Finnhub 수집) [P3] |

> 반도체·AI·에너지·헬스케어·소비재 섹션의 나머지 Finnhub 수집 기사는 분석/전망형 칼럼(리스트형 "매수해야 하나" 류)으로 구체적 사건 사실이 없어 제외함. 반도체·AI 섹션의 엔비디아·버티브 냉각 협력 기사는 [5]에서, 메타 관련 기사는 [4]에서 각각 다뤘으므로 중복 기재하지 않음.

---

## [5] AI 인프라 — 공급 측

| 기업 | 뉴스 제목 | 사실 내용(무슨 일이) | 출처일자 | 출처+태그 |
|------|-----------|----------------------|----------|-----------|
| NVDA | Huang: 네오클라우드 수요 "차트를 벗어날 정도" | GTC 베를린(2026-10-22)에서 CEO 젠슨 황이 CNBC에 "네오클라우드 컴퓨팅 수요는 차트를 벗어날 정도로 높지만 이를 뒷받침할 자본이 부족하다"고 발언, "자본 수요가 가용 자본보다 훨씬 크다"고 언급. CoreWeave에 대한 엔비디아의 금융 백스톱은 필요 없었다고도 언급 | 2026-10-22 | CNBC · "Nvidia CEO Jensen Huang says neocloud demand is 'off the charts' but capital is scarce" · https://www.cnbc.com/2026/10/22/nvidia-jensen-huang-neocloud-demand-capital.html [P2] |
| NVDA | "Minerva" AI 데이터센터 관측 도구 공개 | GTC 베를린에서 AI 데이터센터용 관측(observability) 도구 "Minerva"를 공개 | 2026-10-22 | Bloomberg/NVIDIA 뉴스룸 종합 [P2] |
| NVDA / VRT | 버티브-엔비디아, AI 전력·냉각 구축 기간 10주 단축 목표 | 버티브와 엔비디아가 AI 데이터센터의 전력·냉각 설비 구축 기간을 10주 단축하는 것을 목표로 한다고 보도 | 2026-10-22 15:47 | Yahoo(Finnhub 수집) [P3] |
| AVGO | TSMC 기록적 AI 분기 발표에도 브로드컴 주가 하락 | 브로드컴 주가가 2026-10-22 -2.2% 하락. TSMC의 기록적 AI 매출 분기 실적 발표에도 동반 상승하지 못함 | 2026-10-22 | Yahoo Finance · "Broadcom Stocks Fall 2.2% Despite TSMC's Record AI Quarter" · https://finance.yahoo.com/markets/stocks/articles/broadcom-stocks-fall-2-2-204636444.html [P3] |
| AMD | 신규 공급측 발표 없음, 섹터 동반 매도로 약 -8% | 자체 공시 없이 Lam Research 공급망 제약 발언에 따른 반도체 섹터 동반 매도로 하락. 차기 실적발표는 2026-11-03 예정 | 2026-10-22 | Yahoo Finance [P2] |
| VRT | 버티브, AI 전력장비 섹터 동반 매도로 약 -7% | 메타의 캡엑스 지출 전망이 자금조달 우려를 촉발하며 AI 전력·냉각 장비 공급업체들과 함께 하락(고유 공시는 확인 안 됨) | 2026-10-22 | 24/7 Wall St. [P3] |
| SMCI | "AI 공급 우려"로 최근 랠리 이후 되돌림, 약 -5% | 최근 랠리 이후 장중 약 -5% 하락. 구체적 신규 공시·사건은 단일 출처에서만 "AI 공급 우려"로 언급되어 교차검증 안 됨 | 2026-10-22 | Benzinga · "Stock Drops 5% After Big Rally, Super Micro Computer Pulls Back During AI Supply Fears" · https://www.benzinga.com/markets/tech/26/10/62536780/stock-drops-5-after-big-rally-super-micro-computer-pulls-back-during-ai-supply-fears [N/A, 단일 2차 소스] |
| TSM / ANET / CRDO / CLS / APLD | 이번 수집 기간 내 신규 공급측 발표 없음 | N/A — 2026-10-21~22 구간에 해당 기업들의 신규 수주·가이던스·M&A 뉴스 확인 안 됨(가장 최근 자료는 모두 수집 기간 이전 실적 발표분) | — | — [N/A] |
| HBM·DRAM·NAND 현물가 | N/A | 이번 수집에서 1차/2차 유력매체(Bloomberg·Reuters·TrendForce 등)로 확인된 수치 없음. 검색된 자료는 전부 2차 애그리게이터 사이트로 교차검증 불가해 작성 보류 | — | — [N/A] |

---

## [5-A] AI 인프라 — 수요 측 / 하이퍼스케일러 CAPEX (실적시즌)

| 항목 | 사실 내용(발표 수치·문구) | 전분기 대비(산술) | 출처일자 | 출처+태그 |
|------|---------------------------|--------------------|----------|-----------|
| Meta | 3Q26 캡엑스 349억달러 집행. FY2026 연간 캡엑스 가이던스를 1,350억~1,450억달러로 상향(기존 1,300억~1,450억달러, 하단 50억달러 상향). 캡엑스가 분기 영업현금흐름(328억달러)을 처음으로 초과, FCF -21.2억달러. CFO Susan Li는 실적콜에서 "현재로서는 2027년 캡엑스에 대한 구체적 전망을 제시하지 않는다"고 언급 | 전분기(2Q26) 310억달러 대비 +12.6%, 전년동기(3Q25) 194억달러 대비 +80% | 2026-10-21 | Meta 8-K Exhibit 99.1(SEC) [P1], Bloomberg · "Meta Raises Capex Guidance as Its AI Bet Pays Off" [P2] |
| Microsoft | 신규 변동 없음 — 직전 가이던스 유지. CY2026 캡엑스 가이던스 약 1,750억달러, FY2027 1분기 캡엑스 500억달러 초과 전망 (최종확인 10/20). 차기 실적발표 2026-10-28(장 마감 후) 예정 | — | 2026-10-20 | Reuters/사내 가이던스 보도 [P3] |
| Amazon | 신규 변동 없음 — 직전 가이던스 유지. 2026년 연간 캡엑스 약 2,200억달러 가이던스 (최종확인 10/20). 차기 실적발표 2026-10-29(장 마감 후) 예정 | — | 2026-10-20 | 복수 매체 종합 [P3] |
| Alphabet | 신규 변동 없음 — 직전 가이던스 유지. 2026년 연간 캡엑스 가이던스 1,950억~2,050억달러 (최종확인 10/20). 차기 실적발표 2026-10-28(장 마감 후) 예정 | — | 2026-10-20 | 복수 매체 종합 [P3] |

---

## [6] 시총 상위 10 — AI 무관 일반 이슈 (실적시즌)

| 기업 | 사실 내용 | 출처일자 | 출처+태그 |
|------|-----------|----------|-----------|
| AAPL | "American Manufacturing Program" 파트너십 확대 발표(아이폰 Duo·18 Pro용 부품 공급사 관련) | 2026-10-20 | Apple Newsroom [P1] |
| AMZN | FTC·주정부 반독점 소송에서 아마존이 약식판결(summary judgment) 신청서를 제출, Prime 배지·FBA 요건이 시장 전반의 반경쟁 효과를 낳지 않았다고 주장 | 2026-10-20 | 법률전문매체(MLex 등) 보도 [P3] |
| META | Class C 무의결권 보통주 신설 및 기존 주주 대상 1:1 배당 발표(2027-01-19 시행 예정, AI 자본조달·보상·M&A 재원 확보 목적이며 저커버그의 과반 의결권은 유지). 인스타그램 청소년 안전 관련 52개 주 법무장관과의 합의(최대 185.9억달러)로 98.9억달러 비용을 반영, 영업이익이 매출 26% 증가에도 전년 대비 약 37% 감소 | 2026-10-21 | Meta 8-K(SEC) [P1], Reuters/CNBC 등 종합 [P2] |
| BRK.B | 클래스B 종가 기준 신고가 경신(버핏 퇴진 이후 최고치 상회). 약 3,600억달러 현금 보유에 따른 이자수익 및 AI·반도체주 대비 자금 로테이션이 배경으로 보도됨(SOXX는 10/6~10/20 사이 약 -15.17%) | 2026-10-21~22 | Bloomberg · "Berkshire Hathaway Shares Hit Record as Investors Move Past Buffett's Exit" [P2] |
| TSLA | 3Q26 실적 발표: 매출 280.5억달러(컨센서스 277.8억달러 상회), 비GAAP EPS 0.48달러(컨센서스 0.45달러 상회). FY2026 캡엑스 가이던스를 "250억달러 초과"에서 약 200억달러로 하향(효율적 자본배분이 이유로 언급). FSD(Supervised) 구독자 174만명(+67% YoY). 실적 호조에도 캡엑스 하향 발언 이후 장외 -3%대 하락 | 2026-10-21 | Tesla 8-K/IR [P1], CNBC/Electrek 종합 [P2] |
| TSM | 대만 가오슝 공장에서 강구조물 인양 작업 중 사고로 근로자 4명 사망(10/20), 대만 내 전체 사업장의 동일 공정(강구조물 공사) 작업을 중단하고 조사 착수 | 2026-10-20~21 | Bloomberg 종합 [P2] |
| MSFT / NVDA / GOOGL / AVGO | 이번 수집 기간 내 AI 무관 신규 일반 이슈 확인 안 됨 | — | — [N/A] |

---

## [7] 기관·대형 자금 수급

| 항목 | 종목 | 사실 내용 | 규모(수치) | 출처+태그 |
|------|------|-----------|------------|-----------|
| ETF 자금흐름 | SMH | 순유입 | 약 3.564억달러(운용자산 대비 +0.53%), 기준일 2026-10-21 | etf.com/Yahoo Finance "Daily ETF Flows" 신디케이션 [P3] |
| ETF 자금흐름 | SOXX | 두 출처 간 방향 상충(확인 필요) — (A) 순유입 약 14.06억달러(+3.34% AUM, 기준일 10/21) 보도 vs (B) 발행주식수 8,520만→8,290만주 감소에 따른 순유출 약 14억달러 추정 보도(반도체 매도 심화 시점 전후) | $1.4B 규모(방향 불일치) | (A) etf.com/Yahoo Finance [P3] / (B) ETF Channel · "SOXX Sees $1.4 Billion ETF Outflow" [P3] |
| ETF 자금흐름 | QQQ | 순유입(10/19) 이후 순유출(10/21) 전환 | 10/19 +49.5억달러 → 10/21 -21.189억달러(-0.44% AUM) | Yahoo Finance "ETF Activity" / "Daily ETF Flows" [P3] |
| 옵션 이상거래 | TSEM (Tower Semiconductor) | 콜옵션 거래량이 일일 평균 대비 급증 | 9,060계약(평균 4,571계약 대비 약 98% 상회) | Defense World · "Tower Semiconductor Sees Unusually Large Options Volume" · 2026-10-22 [P3] |
| 블록딜/대량거래 | — | N/A — 확인된 대량거래 없음 | — | — [N/A] |

---

## [7-A] Insider Trading (SEC Form 4)

| 기업 | 내부자 | 직책 | 매수/매도 | 거래유형 | 규모 | 거래일 | 출처 |
|------|--------|------|-----------|----------|------|--------|------|
| NVDA | 확인 안 됨 | 확인 안 됨 | 확인 안 됨 | 확인 안 됨 | 확인 안 됨 | 2026-10-20~22 중 | SEC EDGAR 색인상 Form 4 신규 공시 존재는 확인되었으나(복수 건), 제출자 성명·직책·거래유형·규모 세부사항은 이번 수집에서 확보하지 못함 — 확인 필요 [P1, 세부 미확인] |
| AVGO | 확인 안 됨 | 확인 안 됨 | 확인 안 됨 | 확인 안 됨 | 확인 안 됨 | 2026-10-20 | SEC EDGAR 색인상 Form 4 신규 공시 존재 확인(1건), 세부사항 미확인 — 확인 필요 [P1, 세부 미확인] |
| CRDO / CLS / APLD / VRT / SMCI | — | — | — | — | — | — | N/A — Form 4 신규 공시 없음(수집기간 2026-10-18~22 기준) |

---

## [8] 향후 14일 주요 일정

이번 수집에서 기존 원장(`docs/data/calendar.json`)에 반영된 일정(FOMC 10/27~28, 빅테크 실적주간 10/27~29 등) 외에 추가로 확인·변경된 경제·연준 일정 또는 출처가 확인된 기업 이벤트는 없음(일정 변경 없음 — 신규 행 없음). 참고: OPEC+ 산유국은 2026-11-01 정례회의를 개최할 예정이나(CNBC·OPEC.org, 2026-10-04 [P2]), 이는 macro/fed 분류 체계에 해당하지 않아 원장 표에는 포함하지 않고 [9]에 사실로만 남긴다.

---

## [9] 오늘의 사실 목록 (순위 없음)

```
[1] S&P500 -1.21%(7,663.43), 나스닥 -2.60%(26,008.86) — 메타·테슬라 실적 이후 AI 캡엑스 우려 재부각 · Yahoo Finance [P2]
[1] 다우 +0.02%(52,867.98), 러셀2000 +0.11%(2,784.03) — 구체적 보도 원인 N/A
[1] SOX -6.72%(10,731.98) — Lam Research CFO "공급망 제약" 발언 이후 반도체 섹터 동반 매도 · Yahoo Finance [P2]
[1] Brent +3.72%($112.87) — 후티 반군의 사우디 공격, 아람코 다란 본사 대피, 트럼프 이란 대응 시사 · CNBC [P2]
[1-A] VIX +14.09%(19.03), VVIX +14.16%(107.94) · CBOE API [P1]
[1-A] VIX 기간구조 VIX3M/VIX 1.057·VIX/VIX9D 1.009, 모두 콘탱고 · CBOE API [P1]
[1-A] SPX P/C(거래량) 1.240, QQQ P/C(거래량) 1.006 · CBOE API [P1]
[2] 2년물 4.81%(+2.0bp), 10년물 5.13%(+1.0bp), 10Y-2Y 0.32%p(-1.0bp), 기준일 10/21 · FRED [P1]
[2] 2026-10-22 당일 Fed 공개 발언 N/A — FOMC(10/27~28) 블랙아웃 기간으로 추정 · 애틀랜타 연은 [P1]
[2] CME FedWatch 라이브 수치 재확인 안 됨 — facts.json 직전값(동결 84~88%) 이월(최종확인 10/22) [이월]
[3] 신규 실업수당 청구(10/17 종료주) 194K, 예상 200K, 이전 200K, 서프라이즈 -6K · Reuters [P2]
[4] 메타 약 -7% — 3Q26 실적, FY26 캡엑스 가이던스 135억~145억달러로 상향 · CNBC [P2]
[4] IBM 약 -7% — 실적 호조에도 CEO의 AI 투자수익 회의론 언급으로 하락 · 24/7 Wall St. [P3]
[4] 램리서치 약 -9.4%, 마벨 약 -9.44%, 인텔 약 -7% — Lam Research "공급망 제약" 가이던스발 반도체 동반 매도 · 복수 매체 [P2/P3]
[4] GE버노바 약 -11%, 네비우스 약 -6%, IREN 약 -8.4% — AI 전력·데이터센터 자금조달 우려 동반 매도 · 24/7 Wall St. [P3]
[4] 스포티파이 약 +9% — 3Q26 구독자·매출 증가 · GuruFocus [P3]
[4-A] JP모건, 장기 60/40 포트폴리오 성과 전망 상향 리서치 발표 · Yahoo(Finnhub) [P3]
[5] 젠슨 황(GTC 베를린), "네오클라우드 수요는 차트를 벗어날 정도지만 자본이 부족" 발언 · CNBC [P2]
[5] 엔비디아, "Minerva" AI 데이터센터 관측 도구 공개 · Bloomberg/NVIDIA [P2]
[5] 버티브-엔비디아, AI 전력·냉각 구축 기간 10주 단축 목표 · Yahoo(Finnhub) [P3]
[5] 브로드컴 -2.2% — TSMC 기록적 AI 분기에도 동반 상승 실패 · Yahoo Finance [P3]
[5] AMD·TSM·ANET·CRDO·CLS·APLD 신규 공급측 발표 N/A(수집 기간 내)
[5-A] 메타 3Q26 캡엑스 349억달러(전분기 310억달러), FY26 가이던스 135억~145억달러로 상향 · Meta 8-K [P1]
[5-A] MSFT·AMZN·GOOGL 신규 캡엑스 변동 없음, 차기 실적 10/28~29 예정
[6] 애플, American Manufacturing Program 공급사 확대 발표(아이폰 Duo·18 Pro) · Apple Newsroom [P1]
[6] 아마존, FTC·주정부 반독점 소송서 약식판결 신청 제출 · 법률전문매체 [P3]
[6] 메타, Class C 무의결권주 신설·1:1 배당(2027-01-19) 및 인스타그램 청소년 안전 합의금 98.9억달러 반영 · Meta 8-K [P1]
[6] 버크셔 클래스B, 종가 기준 신고가 경신(현금 이자수익·AI주 대비 자금 로테이션 배경 보도) · Bloomberg [P2]
[6] 테슬라 3Q26 실적 매출·EPS 컨센서스 상회, FY26 캡엑스 가이던스 하향(250억달러 초과→약 200억달러) · Tesla 8-K [P1]
[6] TSM, 가오슝 공장 인양사고로 근로자 4명 사망, 대만 전역 동일공정 공사 중단 · Bloomberg [P2]
[7] SMH 순유입 3.564억달러(10/21 기준) · etf.com/Yahoo [P3]
[7] SOXX 자금흐름 방향 상충(순유입 14.06억달러 보도 vs 순유출 14억달러 추정 보도) — 확인 필요
[7] QQQ 10/19 순유입 49.5억달러 → 10/21 순유출 21.189억달러 · Yahoo Finance [P3]
[7] Tower Semiconductor(TSEM) 콜옵션 거래량 평균 대비 약 98% 급증 · Defense World [P3]
[7-A] NVDA·AVGO Form 4 신규 공시 존재 확인, 세부사항 미확인 — 확인 필요
[7-A] CRDO·CLS·APLD·VRT·SMCI Form 4 신규 공시 없음
[8] 기존 원장 외 신규 경제·연준·기업 일정 변경 없음. OPEC+ 정례회의 2026-11-01 예정(참고) · CNBC/OPEC.org [P2]
```
