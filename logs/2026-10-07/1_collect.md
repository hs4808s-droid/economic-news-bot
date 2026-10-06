# 미국 시장 데일리 수집 결과 (Collect)
# 기준일: 2026-10-06 (화) · 미국 정규장 종가 기준 · 실행모드: [데일리]
# 생성시각(KST): 2026-10-07 06:50

---

## [1] 미국 주요 지수

| 항목 | 종가/수치 | 등락률 | (보도된) 원인 | 출처+태그 |
|------|-----------|--------|----------------|-----------|
| S&P500 | 7,818.93 (사상 최고) | +0.58% (+44.96pt) | 기술주 강세(Nvidia·AMD 신고가) + 국채수익률 하락("cooler yields") + 유가 안정 | investingLive · "Americas FX news wrap 6 Oct: S&P/Nasdaq set records as oil rebounds" · 2026-10-06 · https://investinglive.com/news/investinglive-americas-fx-news-wrap-6-oct-s-p-nasdaq-set-records-as-oil-rebounds-and-the-u-s-trade-deficit-widens/ [P3] (참고: TheStreet 동일 수치, Reuters 재게재판은 7,817.12로 소폭 차이) |
| NASDAQ Composite | 27,599.79 (사상 최고) | +0.45% (+122.48pt) | Nvidia·AMD 사상 최고가 경신이 기술주 랠리 견인 | Yahoo Finance · "Stock market today: S&P 500, Nasdaq hit record highs as Nvidia, AMD lead tech higher" · 2026-10-06 · https://finance.yahoo.com/markets/live/stock-market-today-tuesday-october-6-dow-sp-500-nasdaq-080526166.html [P2] |
| Dow Jones Industrial Average | 51,521.28 | +0.49% (+253.38pt) | N/A — 다우 개별 등락 원인에 대한 별도 보도 없음(전체 시장 랠리 맥락에서만 언급) | TheStreet · "Stock Market Today (Oct. 6, 2026): S&P 500 sets new record as oil prices, Treasury yields settle" · 2026-10-06 [P2] (참고: investingLive는 51,526.14로 약 5pt 차이, 등락률은 +0.49%로 일치) |
| Russell 2000 | 2,830.30 | -0.59% (-16.84pt) | 헬스케어 섹터 약세(458개 구성종목 중 48개만 상승)가 하락 견인. 대형 3대 지수 신고가 기록일에 유일하게 하락 | investingLive (상동) · 2026-10-06 [P3] (발행시각 ET 확인 안 됨) |
| SOX (PHLX Semiconductor) | 13,248.23 | +0.57% (+75.50pt) | N/A — 등락 원인을 명시한 기사 확인 안 됨 (지수 데이터만 확인) | Nasdaq Indexes · "Overview for SOX" · https://indexes.nasdaq.com/Index/Overview/sox [P3] |
| Brent 원유 (USD/bbl) | N/A | N/A | N/A | 확인 필요 — 교차검증 결과 출처 간 수치 불일치 심함($100.32=10/5 수치로 재확인, $100.58~$104.82까지 4개 이상 상충값). 방향성(소폭 상승 +0.3~0.5%대)에는 다수 소스가 동의하나 단일 종가 확정 불가 [N/A] |

---

## [1-A] 선물·변동성 구조 (`0_data.md` 원본 그대로 인용)

**선물 (한국 아침 시점)**

| 항목 | 현재가 | 전일 대비 | 직전 종가 | 기준시각(ET) | 출처+태그 |
|------|--------|-----------|-----------|--------------|-----------|
| S&P500 선물 (ES) | 7,880.5 | +0.69% | 7,826.25 | 2026-10-06 16:59 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 나스닥100 선물 (NQ) | 31,501 | +0.59% | 31,317.75 | 2026-10-06 17:00 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 다우 선물 (YM) | 51,850 | +0.57% | 51,558 | 2026-10-06 16:59 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 러셀2000 선물 (RTY) | 2,849.2 | -0.65% | 2,867.8 | 2026-10-06 16:59 | CBOE / CME (Yahoo chart API 자동수집) [P1] |

**변동성 구조**

| 항목 | 수치 | 전일 대비 | 출처+태그 |
|------|------|-----------|-----------|
| VIX (30일) | 15.01 | -3.29% | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| VIX9D (9일) | 12.03 | -6.38% | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| VIX3M (3개월) | 17.64 | -2.00% | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| VVIX | 82.59 | -3.36% | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| SKEW | 141.21 | -1.28% | CBOE / CME (Yahoo chart API 자동수집) [P1] |

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.175 | 콘탱고 |
| VIX / VIX9D | 1.248 | 콘탱고 |

**Put/Call 비율 (CBOE 옵션 체인 집계)**

| 대상 | P/C(거래량) | P/C(미결제약정) | 콜 거래량 | 풋 거래량 | 출처+태그 |
|------|-------------|------------------|-----------|-----------|-----------|
| S&P500 지수옵션 (SPX) | 1.039 | 1.392 | 2,701,425 | 2,806,738 | CBOE / CME (Yahoo chart API 자동수집) [P1] |
| 나스닥100 ETF 옵션 (QQQ) | 1.103 | 1.464 | 3,554,693 | 3,919,064 | CBOE / CME (Yahoo chart API 자동수집) [P1] |

참고: 매크로(10년물 국채선물 ZN=F 104.44 +0.21%, 금 GC=F 4,192.7 +0.86%, WTI CL=F 89.91 +0.54%, DXY 101.86 -0.30%)는 `0_data.md` 원본 수치임 — CBOE / CME (Yahoo chart API 자동수집) [P1].

---

## [2] 금리 / 연준

| 항목 | 사실 내용(발언·수치) | 출처+태그 |
|------|----------------------|-----------|
| Fed 발언 — Jeffrey Schmid (캔자스시티 연은 총재) | "inflation is frustrating, must be fixed" / 인플레이션과의 싸움에서 연준의 신뢰성이 "at stake"라고 언급 / 2% 목표 달성까지 "a way to go" | FXStreet · "Fed's Schmid warns inflation fight has a 'way to go'" · 2026-10-06 18:22 ET · https://www.fxstreet.com/news/feds-schmid-warns-inflation-fight-has-a-way-to-go-202610061822 [P2] |
| Fed 발언 — Jeffrey Schmid (추가 보도) | 장기 국채금리 상승이 일부 부문에 부담을 주고 있음을 인정하면서도, 연준은 단기 정책금리에 초점을 둔다는 취지로 언급(간접화법 보도, 직접 인용구 제한적) | Investing.com · "Fed's Schmid says more rate hikes needed despite higher yields" · 2026-10-06 · https://www.investing.com/news/economy-news/feds-schmid-says-more-rate-hikes-needed-despite-higher-yields-93CH-4935068 [P2] |
| Fed 발언 — Michelle Bowman(부의장) 10/6 연설 | N/A — 연설 일정 자체는 포착되나 원문 인용구 확인 안 됨 | 확인 필요 [N/A] |
| Fed 발언 — Jerome Powell 의장 | N/A — 10/5~10/6 구간 공개 발언 확인 안 됨 | 확인 필요 [N/A] |
| 미 10년물 국채수익률 | 5.275% (전일 10/5 대비 -3.6bp). 10/5 장중에는 2002년 이후 최고 수준까지 상승한 뒤 10/6 하락 전환 | CNBC · "Treasury yields slide as surge to multiyear highs cools" · 2026-10-06 · https://www.cnbc.com/2026/10/06/treasury-yields-fed-fomc-minutes.html [P2] |
| 미 2년물 국채수익률 | 4.791% (전일 대비 -4.2bp) | CNBC/TheStreet · 2026-10-06 [P2] |
| 10Y-2Y 스프레드 | +48.4bp (양(+)의 스프레드, 역전 아님) — 상기 10Y·2Y 수치 기반 산술 계산값 | 계산값 (CNBC/TheStreet 수치 기반) [P2] |
| CME FedWatch (10/28 FOMC) | 동결(Hold) 78.4% / 25bp 인상 21.6% (인하 확률은 1~2% 수준으로 미미) — 조회 시점별로 77.9~82% 범위에서 변동 보도됨(실시간 변동 지표) | Benzinga · "Jim Cramer says interest rates can fall too as October Fed hike odds fall to 21.6%" · 2026-10-06 [P2] |
| 배경 참고 | 연준은 2026-09-16 FOMC에서 기준금리를 25bp 인상해 목표범위 3.75~4.00%로 설정. 10/28 회의 쟁점은 인하가 아닌 "추가 인상 여부" | CNBC · 2026-09-16 [P2] |

---

## [3] 주요 경제지표

N/A — 2026-10-05~10-06(ET) 구간 CPI·Core CPI·PPI·GDP·비농업고용·실업률·신규실업수당청구·소매판매·ISM 제조업PMI 발표 없음(각 지표 정규 발표일이 이 구간 밖). ISM 서비스업PMI(54.9%, 예상 55.1% 대비 -0.2%p)는 전일(10/5) 발표분으로 직전 수집 구간에서 이미 다뤄짐.

참고: 2026년 10월 현재 미 연방정부 shutdown 상태 아님(2026-09-02 트럼프 대통령이 서명한 임시예산안으로 2026-12-11까지 자금 지원 확정) — 지표 지연의 원인 아님. 출처: The Hill/Washington Post, 2026-09-01 [P2]

---

## [4] 특징 종목

| 종목 | 티커 | 등락률 | 거래량 | (보도된) 핵심 사실 | 출처+태그 |
|------|------|--------|--------|---------------------|-----------|
| Option Care Health | OPCH | +약 20~33% | N/A | CD&R와 McKesson이 주당 $32.05(총 기업가치 약 58억 달러)에 인수하는 definitive agreement 체결, CD&R 약 51%·McKesson 약 49% 지분 구조, 2027년 상반기 종료 예정 | CD&R 보도자료 · 2026-10-06 · https://www.cdr.com/news/cd-and-r-and-mckesson-corporation-sign-agreement-to-acquire-option-care-health [P1] (참고: GuruFocus 보도 동일) |
| Constellation Energy | CEG | +약 12~15% | N/A | Google과 20년 전력구매계약(PPA) 체결. 890MW 신규 원자력 용량 업그레이드(11개 원자로, 일리노이·펜실베이니아·뉴저지) + 기존 원전 15년간 2,700MW 공급, 투자 43억 달러 이상, PJM 그리드 공급 2028년부터 | Bloomberg · "Google, Constellation Energy Strike Deal for Nuclear Power" · 2026-10-06 · https://www.bloomberg.com/news/articles/2026-10-06/google-constellation-near-billion-dollar-deal-for-nuclear-power [P2] |
| Seagate Technology | STX | -약 8% | N/A | 도시바가 필리핀 공장 HDD 생산능력을 약 3.8억 달러 투자로 2배 확대(점유율 목표 10%→30%) 발표 — 저장장치 공급과잉 우려로 하락 | Yahoo Finance · "Seagate tumbles 10%, Western Digital..." · 2026-10-06 · https://finance.yahoo.com/markets/stocks/articles/seagate-tumbles-10-western-digital-125250923.html [P3] |
| Western Digital | WDC | -약 6% | N/A | 상동(도시바 HDD 증설 발표 영향 동반 하락) | Yahoo Finance (상동) · 2026-10-06 [P3] |
| Novavax | NVAX | -약 9~12% | N/A | WHO가 러시아 흑사병(페스트) 연구소 근무자 사망 관련 "유행 위험 낮음" 발표. 전일(10/5) 백신 비축 기대감 급등(+20%)분이 되돌림. 노바백스는 페스트 백신 미생산으로 수혜 기대 희석 | Yahoo Finance · "Novavax, Moderna stocks fall after WHO calls plague risk 'low'" · 2026-10-06 [P3] |
| Moderna | MRNA | -약 5~6% | N/A | 상동 WHO 발표 영향, 전일(10/5) +7% 급등 되돌림 | Yahoo Finance (상동) · 2026-10-06 [P3] |
| Lamb Weston | LW | +약 12% | N/A | 2027 회계연도 1분기 실적: 매출 16.7억 달러(예상 16.5억 상회), 조정 EBITDA 2.856억 달러(예상 상회). GAAP EPS는 일회성 비용(5,100만 달러)으로 예상 하회했으나 연간 조정 EPS 가이던스($2.95~$3.25)로 상향 | StockStory · "Lamb Weston Surprises With Q3 CY2026 Sales" · 2026-10-06 [P3] |
| Apogee Enterprises | APOG | +약 21% | N/A | 2027 회계연도 2분기 실적: 매출 +9.2% YoY(3.911억 달러), 조정 EPS $1.17. 연간 조정 EPS 가이던스 $2.70~$3.25 → $3.00~$3.40 상향. Kalwall·Groglass 인수 진행 중 | SEC 8-K · 2026-10-06 · https://www.sec.gov/Archives/edgar/data/0000006845/000000684526000100/a82926fy27q2results.htm [P1] |

참고: PTC(Schneider Electric 인수)·RXO/C.H. Robinson(합병)의 대형 급등락은 10/5(월) 발생 건으로 확인되어 10/6 특징주에서 제외함.

---

## [4-A] 섹터별 뉴스 ([4]·[5]·[6] 중복 제외, `0_data.md` Finnhub 수집분 기반)

| 섹터 | 종목 | 사실 내용(무슨 일이) | 발행시각(ET) | 출처+태그 |
|------|------|----------------------|--------------|-----------|
| 반도체·AI | MRVL (Finnhub 원문은 AMZN 태그, 실제 내용은 Marvell) | Marvell이 Investor Day에서 AI 매출 전망으로 2031 회계연도까지 900억 달러 목표 제시 | 2026-10-06 15:26 | Yahoo (Finnhub 수집) [P3] |
| 반도체·AI | TSM | TSMC 3분기 실적발표를 앞두고 AI 수요 강세가 성장 기준치를 높인다는 분석 보도 | 2026-10-06 14:00 | Yahoo (Finnhub 수집) [P3] |
| 금융 | JPM | Jamie Dimon, AI 붐이 정부 차입과 자본 조달을 두고 경쟁하고 있다며 "금리가 오르고 있다"고 발언 | 2026-10-06 15:00 | Yahoo (Finnhub 수집) [P3] |
| 금융 | JPM | JPMorgan이 Evident AI 뱅킹 지수에서 5년 연속 1위 기록 | 2026-10-06 13:21 | Yahoo (Finnhub 수집) [P3] |
| 헬스케어 | UNH | UnitedHealth 3분기 실적발표를 앞두고 투자자들이 주목할 두 가지 핵심 질문 관련 보도 | 2026-10-06 12:27 | Yahoo (Finnhub 수집) [P3] |

---

## [5] AI 인프라 — 공급 측

| 기업 | 뉴스 제목 | 사실 내용(무슨 일이) | 출처일자 | 출처+태그 |
|------|-----------|----------------------|----------|-----------|
| NVDA | Groq $20억 거래 주주소송 봉인 해제 | 전직 Groq 엔지니어 2인이 2026-10-02 델라웨어 챈서리 법원에 제기한 소송이 10/5 봉인 해제됨. 2025년 12월 Nvidia-Groq 라이선싱·고용 구조 거래에서 일반 주주가 부당하게 적은 보상을 받았다는 주장. DOJ가 거래 구조의 반독점 회피 여부를 조사 중이라는 보도 포함 | 2026-10-05 | Bloomberg Law/Law.com [P2/P3] |
| NVDA | DGX Spark 64GB 발표 | Nvidia 공식 뉴스룸이 로컬 AI 구축·확장용 DGX Spark 64GB 제품을 공지 | 2026-10-06 | nvidianews.nvidia.com [P1] |
| AVGO | UBS 노트 — 구글 TPU 설계 파트너십 | UBS가 Broadcom의 구글 TPU 설계 파트너십이 장기적으로 지속된다고 확인하는 노트 발행 | 2026-10-05 | GuruFocus 인용(원 출처 UBS 리서치 노트) [P3] |
| AVGO | Morgan Stanley 노트 — 전력난 절연 평가 | Morgan Stanley가 Broadcom을 미국 데이터센터 전력 공급 제약으로부터 상대적으로 절연된 기업으로 평가 | 2026-10-05 | GuruFocus 인용(원 출처 Morgan Stanley 리서치 노트) [P3] |
| TSM | Terafab(Elon Musk) 협력 논의 | TSMC가 Elon Musk의 Terafab과 텍사스 공장 운영 지원 관련 협력을 논의 중이라고 보도. ADR $485.80 사상 최고가(+2.75%) | 2026-10-06 | Fool.com/GuruFocus [P3] |
| ANET | 사상 최고가 경신 | 주가 $214.97로 사상 최고치 기록 | 2026-10-06 | Investing.com [P3] |
| CRDO | ZeroFlap 광트랜시버 라인 출시 | 400G/800G/1.6T 네트워크 속도를 지원하는 ZeroFlap 광트랜시버 제품 라인 출시(정확한 일자 확인 안 됨, 2026년 10월) | 확인 필요(2026-10) | 100gmodules.com [P3] |
| CLS | Q3 실적발표·투자자의 날 공지 | Celestica가 2026-10-27 Q3 실적 발표(10/26 종가 후) 및 Investor/Analyst Day 개최를 공식 공지 | 2026-10-06 | GlobeNewswire(기업 보도자료) [P1] |
| VRT | BMO Capital 신규 커버리지 | BMO Capital이 Outperform 등급·목표가 $329로 신규 커버리지 개시, 데이터센터 인프라 시장 연 16~18% 성장 전망 언급 | 2026-10-05 | Investing.com/GuruFocus [P3] |
| VRT | GLJ Research 신규 커버리지 | GLJ Research가 Sell 등급·목표가 $188로 신규 커버리지 개시(정확한 일자 확인 안 됨) | 확인 필요(2026-10 초) | Investing.com [P3] |
| APLD | 핀란드 1GW 전력 확보 계약 | Applied Digital이 핀란드에서 최대 1GW 전력 용량 확보 계약 체결, 미국 외 첫 사업. 발표 후 주가 3% 상승($25.43) | 2026-10-06 | 24/7 Wall St/Investing.com [P3] |
| SMCI | 신규 수주 $60B 초과 | Super Micro가 Nvidia Vera Rubin NVL72 랙 출하 중이며 신규 수주 총액 $60B 초과 보도(정확한 발표 일자 확인 안 됨) | 확인 필요(2026-10 초) | 출처 미확정 [P3] |

AMD: 10/5~10/6 구간 신규 공급망 뉴스 확인되지 않음.

**추가 시그널(HBM·DRAM·NAND·AI서버·GPU·광모듈)**: 검색된 수치(DRAM/HBM 현물가, AI서버 출하 전망 TrendForce 28%→31% 상향 등)는 모두 10/5~10/6 구간에 특정되는 1차 출처를 확인하지 못해 N/A — 확인 필요로 처리.

---

## [5-A] AI 인프라 — 수요 측 / 하이퍼스케일러 CAPEX

신규 변동 없음 — 직전 가이던스 유지. MSFT·GOOGL·META의 다음 실적발표는 10/28 전후로 추정(미확정), AAPL·AMZN은 10/29 전후로 추정(미확정) — 모두 이번 수집 구간 밖.

---

## [6] 시총 상위 10 — AI 무관 일반 이슈

| 기업 | 사실 내용 | 출처일자 | 출처+태그 |
|------|-----------|----------|-----------|
| MSFT | 영국 경쟁심판소(CAT)가 ValueLicensing 제기 2.7억 파운드 소송 관련 임원 미공개 문서("Second-Hand Software" 내부 프레젠테이션) 공개 사유 설명을 10/31까지 명령. Microsoft·OpenAI 상대 저작권 관련 신규 주주대표소송 2건 제기 | 2026-10-05~06 | CIO.com/chatgptiseatingtheworld.com [P2/P3] |
| NVDA | 전직 Groq 엔지니어들이 Groq 이사회 상대로 소송 제기(Nvidia $200억 자산 라이선스 거래가 주주 표결 없이 헐값에 이뤄졌다는 주장, Nvidia는 거래 상대방) | 2026-10-05 | CNBC [P1] |
| AAPL | 전직 Apple Watch 엔지니어 상대 영업비밀 침해 소송에서 Apple의 각하 신청 기각, 소송 계속. Apple Cash 충전 시 신원 확인 요구로 정책 변경 예정 보도 | 2026-10월(보도 10-06) | AppleWorld.Today [P3] |
| AMZN | 반품/환불 처리 미흡 관련 집단소송에서 3.095억 달러 규모 합의 동의. Amazon Prime Big Deal Days 10/6~7 개최 | 2026-10-05~06 | TopClassActions/AboutAmazon(공식) [P3/P1] |
| GOOGL | 뉴욕 연방법원, USA Today Co. 등 퍼블리셔 집단이 Google 광고기술 독점 피해로 32억 달러 이상 손배청구 가능 판결. 워싱턴 연방법원은 Chegg·PMC의 Google AI Overviews 관련 반독점 소송 기각(10/2) | 2026-10-02~05 | Insurance Journal/Mobilesyrup [P1/P2] |
| META | FTC가 D.C. 항소법원에 Meta 반독점 소송(개인 소셜네트워킹 독점) 부활 요청 서류 제출. Meta는 기업용 엔터프라이즈 플랫폼 사업부를 신설하고 전직 MongoDB CEO CJ Desai를 책임자로 임명(Zuckerberg 직보고) | 2026-10-06(일부 9-28 보도) | MediaPost/TradingView [P2] |
| AVGO | AI 인프라 관련 사안([5] 참조) 외 일반 이슈 신규 변동 없음 | — | — |
| BRK.B | SEC Form 4 공시: Berkshire가 10/1~2 Lennar 주식 약 1.93억 달러 추가 매입(보유 2,843만8,045주), 3분기 중 Lennar 지분 94% 확대 — Taylor Morrison 68억 달러 인수와 함께 미국 4위 주택건설업체 지위 보도 | 2026-10-05 | Investing.com/Fool.com [P2] |
| TSLA | 2026년형 Model Y 일부 차량 전방 서스펜션 볼트 미체결로 리콜(NHTSA 26V558000, 소유주 통지 10/30 예정). 소프트웨어 업데이트 2026.38.3 배포. 3분기 인도량 486,532대 발표, 실적발표 10/21 예정 | 2026-09-01~10-06 | NHTSA/TeslaOracle [P2] |
| TSM | 10/5~10/6 구간 AI 공급 관련 외 일반 이슈 신규 변동 없음 | — | — |

---

## [7] 기관·대형 자금 수급

| 항목 | 종목 | 사실 내용 | 규모(수치) | 출처+태그 |
|------|------|-----------|------------|-----------|
| 옵션시장 가격반영 | NVDA | 옵션 시장가격(market-maker pricing) 기준 Nvidia가 10월 말까지 시가총액 $6조 도달 확률 약 50%, 12/18까지 약 67%로 가격에 반영(해당 보도는 10/5 기준) | $6조 도달 필요 주가 $248 | CNBC · "Nvidia's $6 trillion milestone looms" · 2026-10-05 [P1] |
| 실제 종가 | NVDA | 10/6 종가 $241.53(+1.10%), 시가총액 약 $5.82조로 $6조 미도달 | 시총 $5.82조 | 시세 집계 사이트 · 2026-10-06 [P2] |
| 블록딜/다크풀 | — | 10/6 당일 특정 블록딜·다크풀 이상거래 보도 확인 안 됨 | N/A | 확인 필요 [N/A] |
| ETF 자금흐름(SMH/SOXX/QQQ) | — | 10/6 단일일 수치는 검색 결과 간 날짜 귀속 불일치(동일 수치가 10/5·10/6에 중복 귀속)로 신뢰 불가 — 확정 보류 | N/A | 확인 필요 [N/A] |
| 옵션 이상거래 | AVGO 등 | 10/6 특정 이상거래 데이터 확인 안 됨 | N/A | 확인 필요 [N/A] |

---

## [7-A] Insider Trading (SEC Form 4)

| 기업 | 내부자 | 직책 | 매수/매도 | 거래유형 | 규모 | 거래일 | 출처 |
|------|--------|------|-----------|-----------|------|--------|------|
| APLD | Mohammad Saidal LaVanway Mohmand | CFO | 매도 | 세금 원천징수 목적 처분(RSU 베스팅 81,666주 전환 후 32,136주 처분, 재량적 공개시장 매도 아님) | 32,136주 @ $25.38 | 2026-10-04 | StockTitan(SEC Form 4 인용) [P2] |
| VRT | Michael Resha | EVP (Logistics & Op Ex) | 취득 | RSU 신규 부여(매매 아님, 2027~2029년 베스팅 예정) | 2,503주+690주 = 3,193주 | 2026-10-05 | SEC EDGAR Form 4 [P1] |
| NVDA | — | — | — | — | — | — | N/A — 10/4~10/6 구간 신규 공시 확인 안 됨 |
| AVGO | — | — | — | — | — | — | N/A — 10/4~10/6 구간 신규 공시 확인 안 됨 |
| CRDO | — | — | — | — | — | — | N/A — 10/4~10/6 구간 신규 공시 확인 안 됨(가장 근접 건은 10/1, 구간 밖) |
| CLS | — | — | — | — | — | — | N/A — 10/4~10/6 구간 신규 공시 확인 안 됨 |
| SMCI | — | — | — | — | — | — | N/A — 10/4~10/6 구간 신규 공시 확인 안 됨 |

---

## [8] 향후 14일 주요 일정 (2026-10-07 ~ 2026-10-21)

**경제 일정**

| 날짜 | 시각(ET·KST) | 이벤트 | 컨센서스 | 이전치 | 출처 |
|------|--------------|--------|----------|--------|------|
| 10/7 (수) | 14:00 ET / 10/8 03:00 KST | FOMC 9/15~16 회의 의사록 공개 | — | — | Federal Reserve [P1] |
| 10/8 (목) | 확인 필요 | Fed 월러(Waller) 이사, "Economic Outlook" 연설(이스탄불 TCMB 포럼) | — | — | Federal Reserve 10월 캘린더 [P1] |
| 10/14 (수) | 08:30 ET / 21:30 KST | CPI (소비자물가지수, 9월) | 확인 필요 | 확인 필요 | BLS [P1] |
| 10/15 (목) | 08:30 ET / 21:30 KST | PPI (생산자물가지수, 9월) | 확인 필요 | 확인 필요 | BLS [P1] |

참고: 10월 FOMC 정례회의(10/27~28, 금리결정 10/28 14:00 ET)는 이번 14일 창(10/21까지) 밖. 비농업고용(9월, 10/2 기발표)·Q3 GDP 속보치(10/29 예정)도 이번 창 밖.

**기업 일정**

| 날짜 | 기업 | 이벤트 | 컨센서스 EPS | 컨센서스 매출 | 출처 |
|------|------|--------|--------------|---------------|------|
| 10/13 (화) | JPMorgan Chase (JPM) | 3분기 실적발표 | $5.90 | 약 $51.19B | MarketBeat [P3] |
| 10/13 (화) | Wells Fargo (WFC) | 3분기 실적발표 | 확인 필요 | 확인 필요 | Businesswire(기업 발표) [P1] |
| 10/13 (화) | Goldman Sachs (GS) | 3분기 실적발표 | 확인 필요 | 확인 필요 | Capital.com [P3] |
| 10/13 (화) | Citigroup (C) | 3분기 실적발표 | 확인 필요 | 확인 필요 | Citigroup 보도자료 [P1] |
| 10/14 (수) | Bank of America (BAC) | 3분기 실적발표 | $1.17~$1.19(자료 간 소폭 차이) | 확인 필요 | BofA 뉴스룸 [P1] |
| 10/14 (수) | Morgan Stanley (MS) | 3분기 실적발표 | 확인 필요 | 확인 필요 | Capital.com [P3] |
| 10/15 (목) | TSMC (TSM) | 3분기 실적 컨퍼런스 | 약 $4.41~$4.46(환산) | 약 $45.36B(가이던스 $44.6B~$45.8B) | TSMC IR/TipRanks [P1/P3] |
| 10/21 (수) | Tesla (TSLA) | 3분기 실적발표(장마감 후) | 확인 필요 | 확인 필요 | Tesla Oracle(기업 공지) [P1] |

MSFT·GOOGL·META(10/28 추정, 미확정)·AAPL·AMZN(10/29 추정, 미확정)·NVDA(11월 추정)·AVGO(12월 추정)의 실적발표는 모두 이번 14일 창 밖.

---

## [9] 오늘의 사실 목록 (순위 없음)

```
[1] S&P500 7,818.93(+0.58%, 사상최고), NASDAQ 27,599.79(+0.45%, 사상최고), Dow 51,521.28(+0.49%) · 기술주 강세+금리하락이 배경으로 보도 · [P2]
[1] Russell2000 2,830.30(-0.59%), 헬스케어 약세가 하락 원인으로 보도 · [P3]
[1] SOX 13,248.23(+0.57%), 등락 원인 보도 없음 · [P3]
[1] Brent 원유 10/6 종가 출처 간 불일치로 확정 불가 · [N/A]
[1-A] VIX 15.01(-3.29%), VIX9D 12.03(-6.38%) · VIX3M/VIX 1.175·VIX/VIX9D 1.248(콘탱고) · [P1]
[1-A] SPX P/C(거래량) 1.039 · QQQ P/C(거래량) 1.103 · [P1]
[2] Fed Schmid(KC연은), "inflation is frustrating, must be fixed" · 추가 금리인상 필요 시사 · [P2]
[2] 미 10년물 국채수익률 5.275%(-3.6bp), 2년물 4.791%(-4.2bp), 10Y-2Y +48.4bp · [P2]
[2] CME FedWatch 10/28 FOMC 동결 확률 78.4% / 인상 21.6% · [P2]
[2] 배경: 9/16 FOMC에서 기준금리 25bp 인상, 목표범위 3.75~4.00% · [P2]
[3] 10/5~10/6 구간 CPI·PPI·GDP·고용 등 지표 발표 없음 · [N/A]
[3] 미 연방정부 shutdown 아님(12/11까지 자금 지원 확정) · [P2]
[4] Option Care Health +20~33%, CD&R·McKesson 58억달러 인수계약 · [P1]
[4] Constellation Energy +12~15%, Google과 20년 원전 전력구매계약(890MW 업그레이드+43억달러 투자) · [P2]
[4] Seagate -8%·Western Digital -6%, 도시바 HDD 증설 발표로 공급과잉 우려 · [P3]
[4] Novavax -9~12%·Moderna -5~6%, WHO 흑사병 위험 "낮음" 발표로 전일 급등분 되돌림 · [P3]
[4] Lamb Weston +12%·Apogee Enterprises +21%, 실적 서프라이즈 및 가이던스 상향 · [P1/P3]
[4-A] Marvell, Investor Day서 FY2031까지 매출 900억달러 목표 제시 · [P3]
[4-A] Jamie Dimon, "AI 붐이 정부차입과 자본조달 경쟁, 금리가 오르고 있다" 발언 · [P3]
[5] Nvidia, Groq $20억 거래 관련 주주소송 봉인해제(DOJ 반독점 회피여부 조사 보도) · [P2/P3]
[5] Nvidia DGX Spark 64GB 발표 · [P1]
[5] TSMC, Musk의 Terafab과 텍사스 공장 협력 논의, ADR 사상최고 $485.80 · [P3]
[5] Arista Networks 사상최고가 $214.97 · [P3]
[5] Celestica, 10/27 Q3실적+투자자의날 공지 · [P1]
[5] Applied Digital, 핀란드 1GW 전력계약(해외 첫 진출) · [P3]
[5] Vertiv, BMO Capital 신규커버리지(Outperform,목표가329) vs GLJ Research(Sell,목표가188) · [P3]
[5-A] 하이퍼스케일러 CAPEX 가이던스 변동 없음(빅테크 실적 10/28~29 추정, 이번 구간 밖) · [P3]
[6] MSFT, 영국 CAT가 임원 문서 공개사유 설명 명령(10/31 기한) · [P2]
[6] Nvidia, 전직 Groq 엔지니어들이 이사회 상대 추가소송 제기 · [P1]
[6] Google, 퍼블리셔 집단 32억달러대 손배청구 가능 판결(광고기술 독점) · [P1]
[6] Meta, FTC가 반독점소송 부활 요청서 항소법원 제출 · [P2]
[6] Berkshire Hathaway, Lennar 지분 10/1~2 1.93억달러 추가매입(3분기 지분 94%확대) · [P2]
[6] Tesla, Model Y 일부 차량 서스펜션 볼트 리콜(NHTSA), 3분기 인도량 486,532대 · [P2]
[7] Nvidia 옵션시장, 10월말까지 시총 $6조 도달확률 약 50% 가격반영(10/5 기준) · [P1]
[7] Nvidia 10/6 종가 $241.53, 시총 $5.82조로 $6조 미도달 · [P2]
[7] ETF자금흐름(SMH/SOXX/QQQ)·블록딜 10/6 단일일 수치 확인 불가 · [N/A]
[7-A] Applied Digital CFO, RSU베스팅분 세금원천징수 목적 32,136주 처분(10/4) · [P2]
[7-A] Vertiv EVP, RSU 3,193주 신규부여(10/5, 매매 아님) · [P1]
[7-A] NVDA·AVGO·CRDO·CLS·SMCI 10/4~10/6 구간 Form4 신규공시 없음 · [N/A]
[8] FOMC 9월 의사록 공개 10/7, Fed Waller 연설 10/8, CPI 10/14, PPI 10/15 · [P1]
[8] 대형은행 실적 10/13(JPM·WFC·GS·C)·10/14(BAC·MS), TSMC 실적 10/15 · [P1/P3]
[8] 빅테크(MSFT·GOOGL·META·AAPL·AMZN)·NVDA·AVGO 실적은 모두 10/21 이후(10/28~12월 추정) · [P3]
```
