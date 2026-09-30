# 미국 시장 데일리 수집 결과 (Collect)
# 기준일: 2026-09-30 (수) · 미국 정규장 종가 기준 · 실행모드: 데일리
# 생성시각(KST): 2026-10-01 07:10

## [1] 미국 주요 지수 (데일리)

| 항목 | 종가/수치 | 등락률 | (보도된) 원인 | 출처+태그 |
|------|-----------|--------|----------------|-----------|
| S&P500 | 7,652.03 | -0.25% (-18.82pt) | 8월 PCE 물가지수가 예상치를 하회해 장중 한때 +0.7%까지 올랐으나 9월 마지막 거래일 장 후반 상승분을 반납하며 하락 마감 | TheStreet · Stock Market Today (Sept. 30, 2026): Nasdaq, S&P 500 rise as PCE inflation lands below expectations · 2026-09-30 (ET) · https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-sept-30-2026 [P3] |
| 나스닥종합 | 26,861.06 | +0.24% (+63.52pt) | 8월 PCE 물가지수 예상치 하회로 금리인상 기대 완화 | TheStreet · 상동 · 2026-09-30 (ET) [P3] |
| 다우존스 | 50,914.09 | -0.86% (-441.03pt) | 국채금리 상승 및 개별 종목(Fair Isaac 급락 등) 여파 | TheStreet · 상동 · 2026-09-30 (ET) [P3] |
| 러셀2000 | 2,796.88 | -0.39% (-11.04pt) | N/A — 보도상 별도 원인 언급 없음 | TheStreet · 상동 · 2026-09-30 (ET) [P3] |
| 필라델피아 반도체지수 (SOX) | 12,616.00 | -0.10% (-13.16pt) | N/A — 보도상 별도 원인 언급 없음 | Investing.com · PHLX Semiconductor Historical Data · 2026-09-30 (ET) · https://www.investing.com/indices/phlx-semiconductor-historical-data [P3] |
| 브렌트유 | N/A — 확인 필요 | N/A — 확인 필요 | N/A | N/A — 0_data.md에 브렌트유 수치 없음, 검색으로도 9/30 종가 확인 불가 |

> 비고: 9월 월간 성과(참고, 확정 보도 기준) — 다우 -4.29%, S&P500 -0.45%, 나스닥종합 +1.86%, 러셀2000 -5.39% (TheStreet, 2026-09-30 [P3]).

## [1-A] 선물·변동성 구조 (0_data.md 원문 그대로 인용)

### 선물 (한국 아침 시점)

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| S&P500 선물 (ES) | `ES=F` | 7,721.5 | -0.14% | 7,732 | 2026-09-30 17:00 |
| 나스닥100 선물 (NQ) | `NQ=F` | 30,725.75 | +0.37% | 30,613.25 | 2026-09-30 16:59 |
| 다우 선물 (YM) | `YM=F` | 51,295 | -0.79% | 51,702 | 2026-09-30 16:59 |
| 러셀2000 선물 (RTY) | `RTY=F` | 2,819.2 | -0.35% | 2,829.2 | 2026-09-30 16:59 |

### 변동성 구조

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| VIX (30일) | `^VIX` | 16.34 | +1.87% | 16.04 | 2026-09-30 16:15 |
| VIX9D (9일) | `^VIX9D` | 14.2 | -0.07% | 14.21 | 2026-09-30 16:15 |
| VIX3M (3개월) | `^VIX3M` | 18.37 | +1.55% | 18.09 | 2026-09-30 16:15 |
| VVIX (VIX의 변동성) | `^VVIX` | 89.48 | -0.26% | 89.71 | 2026-09-30 16:15 |
| SKEW (테일리스크) | `^SKEW` | 141.92 | -1.84% | 144.58 | 2026-09-30 17:00 |

### 매크로

| 항목 | 심볼 | 현재가/종가 | 전일 대비 | 직전 종가 | 기준시각(ET) |
|------|------|-------------|-----------|-----------|--------------|
| 미 10년 국채선물 | `ZN=F` | 104.23 | -0.18% | 104.42 | 2026-09-30 16:59 |
| 금 | `GC=F` | 4,189.1 | +0.22% | 4,179.7 | 2026-09-30 16:59 |
| WTI | `CL=F` | 90.34 | +1.07% | 89.38 | 2026-09-30 16:59 |
| 달러지수 (DXY) | `DX-Y.NYB` | 101.45 | +0.08% | 101.37 | 2026-09-30 17:20 |

### VIX 기간구조 (위 수치에서 산출한 비율)

| 비율 | 값 | 구조 |
|------|----|------|
| VIX3M / VIX | 1.124 | 콘탱고 |
| VIX / VIX9D | 1.151 | 콘탱고 |

> 1 초과 = 콘탱고(원월물이 비쌈), 1 미만 = 백워데이션. 분류명일 뿐 해석이 아니다.

### Put/Call 비율 (CBOE 옵션 체인 직접 집계)

| 대상 | P/C (거래량) | P/C (미결제약정) | 콜 거래량 | 풋 거래량 | 집계 계약수 |
|------|--------------|------------------|-----------|-----------|-------------|
| S&P500 지수옵션 (SPX) | 1.101 | 1.402 | 2,330,739 | 2,566,126 | 30,100 |
| 나스닥100 ETF 옵션 (QQQ) | 1.176 | 1.431 | 3,184,749 | 3,745,672 | 11,284 |

> CBOE 지연 시세 기준. 직전 정규장 집계값이다.

## [2] 금리 / 연준 (데일리)

| 항목 | 사실 내용(발언·수치) | 출처+태그 |
|------|----------------------|-----------|
| 마이클 바 (Fed 이사) 발언 | 지속적 인플레이션 위험을 강조하며 추가 금리인상이 2% 목표로의 시의적절한 복귀를 위해 필요할 가능성이 높다고 발언, 현 정책금리를 "여전히 완화적(accommodative)"이라 언급, 근원 인플레이션이 목표보다 약 1%포인트 높고 나쁜 방향으로 움직이고 있다고 발언 | InvestingLive · Fed officials lean hawkish, though Williams sees no urgency for another hike · 2026-09-29~30 (ET) · https://investinglive.com/central-banks/fed-officials-lean-hawkish-though-williams-sees-no-urgency-for-another-hike [P3] |
| 존 윌리엄스 (NY 연은 총재) 발언 (9/29, 배경) | "9월 회의에서 취한 정책 조치를 고려할 때 서두를 필요가 없다"는 취지 발언, "경제가 내 전망과 대체로 부합하게 전개된다면 연내 한 차례 추가 정책금리 상향 조정이 적절할 수 있다" | Bloomberg / Reuters(Investing.com) · 2026-09-29 (ET) [P2] |
| 8월 개인소비지출(PCE) 물가지수 발표 | 헤드라인 PCE 전년비 +3.4%(전월 3.7%, 예상 3.7%), 근원 PCE 전년비 +3.0%(전월 3.3%, 예상 3.3%), 근원 PCE 전월비 +0.2%(예상 +0.3%), 개인소비지출은 전월비 +0.9%(1,908억 달러 증가) | BEA · Personal Income and Outlays, August 2026 · 2026-09-30 08:30 (ET) · https://www.bea.gov/news/2026/personal-income-and-outlays-august-2026 [P1] |
| 미 2년물 국채금리 | 4.895% (소폭 보합) | CNBC · 10-year Treasury yield is higher as traders look past inflation data, await jobs report · 2026-09-30 (ET) · https://www.cnbc.com/2026/09/30/treasury-yields-bonds-selloff.html [P2] |
| 미 10년물 국채금리 | 5.23~5.298% (자료 간 소폭 편차, TradingEconomics 5.23%/CNBC 5.298% 보도) | TradingEconomics / CNBC · 2026-09-30 (ET) · https://tradingeconomics.com/united-states/government-bond-yield ; https://www.cnbc.com/2026/09/30/treasury-yields-bonds-selloff.html [P2/P3] |
| 10Y-2Y 스프레드 | 약 +0.34~0.40%p (10년 5.23~5.298% - 2년 4.895%, 산술 계산치) | 위 출처 수치로부터 산출 [P2] |
| CME FedWatch (10/28 FOMC, PCE 발표 후 갱신치) | 금리동결 확률 52.9%, 25bp 인상 확률 47.1% (8월 PCE 서프라이즈 하회 이후 갱신) | Phemex · Fed Rate Odds: 52.9% Hold Probability for October After PCE · 2026-09-30 (ET) · https://phemex.com/news/article/cme-fedwatch-529-chance-fed-holds-rates-in-october-after-pce-data-98336 [P3] |
| CME FedWatch (PCE 발표 전 참고치) | PCE 발표 이전(9/29 기준) 10월 인상 확률 72.5%로 형성 | admiralmarkets.com · Fed Williams Speech September 29 2026: Treasury Yields and October Hike Odds · 2026-09-29 (ET) [P3] |

## [3] 주요 경제지표 (데일리)

| 지표 | 발표시각(ET·KST) | 발표치 | 예상치 | 이전치 | 서프라이즈(산술값) | 출처 |
|------|-------------------|--------|--------|--------|----------------------|------|
| 개인소비지출(PCE) 물가지수 (헤드라인, 8월) | 2026-09-30 08:30 ET · 2026-09-30 21:30 KST | +3.4% (전년비) | +3.7% | +3.7% (7월) | -0.3%p (서프라이즈, 산술) | BEA · Personal Income and Outlays, August 2026 · https://www.bea.gov/news/2026/personal-income-and-outlays-august-2026 [P1] |
| 근원 PCE 물가지수 (8월) | 2026-09-30 08:30 ET · 2026-09-30 21:30 KST | +3.0% (전년비) | +3.3% | +3.3% (7월) | -0.3%p (서프라이즈, 산술) | BEA · 상동 [P1] |
| ADP 민간고용 (9월) | 2026-09-30 (ET, 발표시각 N/A) | +90,000명 | N/A — 확인 필요 | N/A — 확인 필요 | N/A | CNBC · Private sector jobs rose by 90,000 in September, better than expected, ADP reports · 2026-09-30 (ET) · https://www.cnbc.com/2026/09/30/private-sector-jobs-rose-by-90000-in-september-better-than-expected-adp-reports.html [P2] |

## [4] 특징 종목 (데일리)

| 종목 | 티커 | 등락률 | 거래량 | (보도된) 핵심 사실 | 출처+태그 |
|------|------|--------|--------|----------------------|-----------|
| United Therapeutics | UTHR | +15% (CNBC 보도, 다른 매체는 +12.20% 보도) | N/A | FDA가 네뷸라이즈드 Tyvaso의 특발성 폐섬유증(IPF) 적응증 추가 보충신약승인신청(sNDA)을 접수, 자사주 매입 프로그램 완료를 위한 가속 자사주매입계약(ASR) 체결 | CNBC · Stocks making the biggest moves midday: Rogers, United Therapeutics, Moderna, FormFactor & more · 2026-09-30 (ET) · https://www.cnbc.com/2026/09/30/stocks-making-the-biggest-moves-midday-rog-uthr-mrna-form.html [P2] |
| Fair Isaac | FICO | -26.5% | N/A | 연방주택금융청(FHFA) 국장이 모기지 신용평가에 단일 가격정책(single pricing grid)을 도입한다고 발표 | CNBC · 상동 [P2] |
| MongoDB | MDB | -21.2% | N/A | CEO 치란탄 데사이가 사전 통보 없이 사임하고 메타 고위직으로 이동한다고 발표, 투자자의 날을 앞둔 시점 | CNBC · 상동 (인용 보도) [P2] |
| Hewlett Packard Enterprise | HPE | +3.96%~4.5% (자료 간 소폭 편차) | N/A | 클라우드 업체 Vultr와 12억 달러 규모 AI 시스템 공급계약 체결(AMD Helios AI랙 기반, 랙당 AMD Instinct MI455X GPU 72개 탑재), 네트워킹 부문 장기 매출 전망 상향 | Yahoo Finance · HPE shares surge on upgraded networking outlook and $1.2B Vultr AI deal · 2026-09-30 (ET) · https://finance.yahoo.com/technology/ai/articles/hpe-shares-surge-upgraded-networking-123235739.html [P3] |
| Rogers Corporation | ROG | +10% | N/A | 연간 실적 가이던스를 주당 약 3.80달러(일부 항목 제외)로 제시, FactSet 컨센서스(3.65달러) 상회 | CNBC · 상동 [P2] |
| CarMax | KMX | +4.7% (CNBC) / 일부 매체 -5% 보도로 수치 상이 | N/A | 2027 회계연도 2분기 조정 EPS 1.16달러 발표(Zacks 컨센서스 0.68달러 상회), 매출 79억 달러(+19%) | Investing.com(Zacks) / Benzinga · 2026-09-30 (ET) [P3] — 비고: 등락률이 매체 간 +4.7%/-5%로 상이해 단정 불가, 두 수치 병기 |
| Cboe Global Markets | CBOE | +4.38% | N/A | S&P Dow Jones Indices와 독점 라이선스 계약을 25년 연장한다고 공동 발표 | 검색 종합 보도(매체명 확인 필요) · 2026-09-30 (ET) [P3] |
| Jabil | JBL | -7%대 | N/A | 2026 회계연도 4분기 매출 106억 달러, GAAP 희석 EPS 3.76달러(핵심 EPS 4.40달러)로 시장 예상치 상회했음에도 주가 하락. 2027 회계연도 매출 가이던스 445억 달러(+24%) 제시 | Jabil IR (8-K) · 2026-09-30 · https://www.sec.gov/Archives/edgar/data/0000898293/000162828026063890/jbl-20260930ex991.htm [P1] |
| Moderna | MRNA | -6.35% | N/A | Citi가 투자의견을 매도(Sell)로 하향 | CNBC · 상동 [P2] |

## [4-A] 섹터별 뉴스 (0_data.md Finnhub 수집분, [4]/[5]/[6] 중복 제외)

| 섹터 | 종목 | 사실 내용 | 발행시각(ET) | 출처+태그 |
|------|------|-----------|---------------|-----------|
| 반도체·AI | NVDA | "AI spending will fuel wins for Micron, Nvidia, Intel, and other chip stocks" 제하 기사에서 BofA 애널리스트 코멘트 인용 게재 | 2026-09-30 15:39 | Yahoo (Finnhub 수집) [P3] |
| 금융 | JPM | "GGP Lines Up $400M Loan To Refinance New England's Largest Mall" 제하 기사에서 JPM 대출 주선 관련 보도 | 2026-09-30 14:29 | Yahoo (Finnhub 수집) [P3] |
| 금융 | JPM | "J.P. Morgan Snags £1B Loan For Spitalfields Office Redevelopment" 제하 기사, 런던 오피스 재개발 관련 10억 파운드 대출 주선 보도 | 2026-09-30 13:18 | Yahoo (Finnhub 수집) [P3] |
| 에너지 | XOM | "America's Strategic Oil Reserves Are at 44-Year Lows — And Trump Just Gave Away Another 40 Million Barrels" 제하 기사에서 미 전략비축유 관련 보도 (XOM 언급) | 2026-09-30 11:41 | Yahoo (Finnhub 수집) [P3] |
| 헬스케어 | UNH | "Judge Denies In Part UnitedHealth's Motion to Dismiss CalPERS Suit" 제하 기사, CalPERS 소송 관련 법원이 UnitedHealth의 기각 신청을 일부 기각했다고 보도 | 2026-09-30 14:24 | Yahoo (Finnhub 수집) [P3] |
| 소비재·유통 | AMZN | "Amazon Signs $1 Billion Synopsys Deal as AWS Steps Up Nvidia Challenge" 제하 기사, 아마존이 시높시스와 10억 달러 규모 계약을 체결했다고 보도 | 2026-09-30 15:33 | Yahoo (Finnhub 수집) [P3] |

> 반도체·AI 섹터의 AVGO 관련 항목(Anthropic 분기 실적/S-1 연계 기사)은 [5]와 중복되어 본 섹션에서는 생략했다.

## [5] AI 인프라 — 공급 측 (데일리)

| 기업 | 뉴스 제목 | 사실 내용(무슨 일이) | 출처일자 | 출처+태그 |
|------|-----------|-----------|-----------|-----------|
| Micron (MU) | FY2026 4분기 실적발표 | 매출 542.3억 달러(예상 510.7억 달러 상회), 조정 EPS 33.42달러(예상 31.61달러 상회), 조정 총마진 87.0%(예상 86.1%). 4분기 DRAM 매출 전년비 +343%인 398억 달러(전체 매출의 73%), AI 인프라·HBM 수요가 견인. FY2026 전체 매출 1,331.9억 달러(+256% YoY), 조정 EPS 75.52달러(+811% YoY). FY2027 1분기 가이던스: 매출 약 615억 달러, 조정 EPS 38.15달러, 조정 총마진 약 86.25% | 2026-09-30 (실적발표, 장 마감 후) | Micron Technology IR (Form 8-K) · https://www.sec.gov/Archives/edgar/data/0000723125/000072312526000018/a2026q4ex991-pressrelease.htm [P1] |
| Hewlett Packard Enterprise (HPE, 참고 — AI 인프라 공급망 관련) | Vultr와 12억 달러 AI 시스템 공급계약 | 클라우드 업체 Vultr와 12억 달러 규모 AI 시스템 계약 체결(AMD Helios AI랙 기반, 랙당 AMD Instinct MI455X GPU 72개), 또 다른 하이퍼스케일 클라우드 고객과 35억 달러 규모 추론(inferencing) 계약 체결 사실 보도. 네트워킹 부문 장기 매출 전망 상향, FY26 EPS 가이던스 3.75~3.85달러로 상향 | 2026-09-30 | Yahoo Finance · https://finance.yahoo.com/technology/ai/articles/hpe-shares-surge-upgraded-networking-123235739.html [P3] |
| Celestica (CLS) | Bernstein 커버리지 개시 및 2026년 매출 가이던스 상향 | 2026-09-30 Bernstein이 "Outperform" 등급·목표주가 520달러로 커버리지 개시. 2026년 매출 가이던스를 기존 190억 달러에서 205억 달러로 상향(전년비 +65% 전망). AMD와 랙스케일 AI 플랫폼 'Helios' 공동 개발 협력 진행 중 | 2026-09-30 | Kalkine / GuruFocus 보도 종합 · https://kalkine.ca/news/technology/why-is-celestica-stock-up-345-as-tsxcls-gains-fresh-attention-from-ai-infrastructure-growth-tsxcls [P3] |
| Credo Technology (CRDO) | FY2027 1분기 실적(참고, 발표일 9월 초) 및 광트랜시버 수요 | 회계연도 2027 1분기 매출 4.79억 달러(전년비 +114.7%), 경영진은 FY2027 광통신(optical) 매출 6억 달러 이상 가이던스 제시. 1.6T 광트랜시버 및 AI 데이터센터向 수요 지속 보도 | 실적발표일 확인 필요(FY27 1Q, 9월 초순 추정) | 검색 종합 보도(정확 발표일·매체명 확인 필요) [P3] |
| Jabil (JBL, 참고 — AI 인프라 EMS 밸류체인) | FY2026 4분기 실적, AI 인프라 확장 언급 | 4분기 매출 106억 달러, GAAP EPS 3.76달러(핵심 EPS 4.40달러)로 예상 상회에도 주가 하락. FY2027 매출 가이던스 445억 달러(+24%), AI 인프라·자동차·방위·항공우주 부문 성장 기대 언급 | 2026-09-30 | Jabil IR (Form 8-K) · https://www.sec.gov/Archives/edgar/data/0000898293/000162828026063890/jbl-20260930ex991.htm [P1] |
| TSMC (TSM) | CEO C.C. Wei, AI 빌드아웃 수요 발언 | TSMC CEO가 AI 빌드아웃의 긴급성을 언급하며 2029~2030년까지 견조한 수요가 지속될 것으로 본다고 발언 | 2026-09-29~30 무렵 | Yahoo Finance · TSMC: The Foundry Behind Nvidia, AMD and Apple Is Setting AI On Fire [P3] |
| Broadcom (AVGO) | Anthropic $11.6B 분기 실적 관련 기사에서 AVGO 언급 | "Anthropic's $11.6 Billion Quarter Just Changed How the Market Should Read the S-1" 제하 기사 게재 (AVGO는 Anthropic의 맞춤형 AI칩 고객사 중 하나로 기사에서 다뤄짐, 세부 확인 필요) | 2026-09-30 | Yahoo (Finnhub 수집) · 2026-09-30 15:44 (ET) [P3] |
| Anthropic (비상장, AI 인프라 발주사) | IPO 프로스펙터스 유출/공개 관련 후속 보도 | 2026년 2분기 매출 115억 달러, 2025년 매출 약 46억 달러, 영업손실 80억 달러 이상, 순손실 420억 달러(이 중 약 340억 달러는 비현금성 회계처리) 수치가 담긴 프로스펙터스 초안이 9/28 유출 보도됨. 9/29 정식 공개(전일자 [5] 참조 — 10년간 5,180억 달러 AI 인프라 지출 계획). 9/30 기준 EDGAR에는 아직 공개 S-1 미등록 상태 | 2026-09-28~29 (유출/공개), 2026-09-30 (EDGAR 미등록 확인) | SiliconANGLE · Leaked Anthropic IPO filing reveals $8B operating loss, rapid revenue growth · 2026-09-29 (ET) [P3] |

## [5-A] AI 인프라 — 수요 측/하이퍼스케일러 CAPEX (실적시즌 조건부)

신규 변동 없음 — 직전 가이던스 유지(Microsoft·Amazon·Alphabet·Meta 모두 2026년 7~8월 실적발표 시점 가이던스 기준, 현재 실적시즌 아님).

## [6] 시총 상위 10 — AI 무관 일반 이슈 (조건부)

N/A — 검색 결과 9/30 당일 MSFT·NVDA·AAPL·AMZN·GOOGL·META·AVGO·BRK·TSLA·TSM 대상 AI 인프라 무관 규제·실적·제품 관련 신규 사실 확인되지 않음 ([4-A]의 AMZN/JPM 등은 해당 섹션에서 다룸, 중복 배제).

## [7] 기관·대형 자금 수급 (데일리)

| 항목 | 종목 | 사실 내용 | 규모(수치) | 출처+태그 |
|------|------|-----------|-------------|-----------|
| 반도체 ETF 순자산 | SMH (VanEck Semiconductor ETF) | 9/29 기준 총 순자산 748.2억 달러 (당일 자금흐름 수치는 검색으로 확인 불가) | 748.2억 달러 (순자산, 유출입액 아님) | VanEck · SMH: VanEck Semiconductor ETF · 2026-09-29 기준 · https://www.vaneck.com/offshore/en/investments/semiconductor-etf-smh/ [P1] |
| 반도체 ETF 자금흐름 | SOXX / QQQ | N/A — 9/30 당일 기준 구체적 자금흐름 수치 검색으로 확인 불가 | N/A | N/A |
| 옵션 블록트레이드 | NVDA | 9/29 NVDA 콜옵션(행사가 230달러, 9/30 만기)에서 1,035계약 규모 블록트레이드 포착(미결제약정 12,848계약) | 1,035계약 | Barchart/TrendSpider 보도 종합 · 2026-09-29 (ET) [P3] |
| 옵션 이상거래 | AVGO | N/A — 9/30 당일 특정 대량거래·비정상 옵션 거래 구체 수치 검색으로 확인 불가 | N/A | N/A |

## [7-A] Insider Trading (SEC Form 4, 조건부)

N/A — Form 4 신규 공시 없음 (NVDA·AVGO·CRDO·CLS·APLD·VRT·SMCI 대상 2026-09-30 당일 신규 공시 검색 결과 없음. 참고: NVDA는 9/21에 Timothy S. Teter(EVP, 법률자문)의 매도 공시가 있었으나 기준일과 무관하여 본 항목에서는 제외)

## [8] 향후 14일 주요 일정 (2026-10-01 ~ 2026-10-15)

### 경제 일정

| 날짜 | 시각(ET·KST) | 이벤트 | 컨센서스 | 이전치 | 출처 |
|------|---------------|--------|----------|--------|------|
| 2026-10-01 | ISM 제조업 09:00 ET(약)·22:00 KST / 제조업 PMI 08:45 ET·21:45 KST / 신규 실업수당청구 07:30 ET·20:30 KST | ISM 제조업 PMI(9월) / S&P Global 제조업 PMI / 주간 신규 실업수당청구 | ISM 54.8, 제조업 PMI 57.0 | ISM 54.6, 제조업 PMI 53.9 | financecalendar.com · https://www.financecalendar.com/us-ism-manufacturing-pmi/ [P3] |
| 2026-10-02 | 08:30 ET · 21:30 KST | 미 고용상황보고서(9월, 비농업고용) | 비농업고용 +84,000~90,000명(자료 간 편차), 실업률 4.1% | 비농업고용 +162,000명(8월), 실업률 4.1% | Bloomberg / TradingEconomics 보도 종합 · https://www.bloomberg.com/news/articles/2026-09-26/us-jobs-report-seen-showing-90-000-payrolls-4-1-unemployment-rate [P2] |
| 2026-10-07 | 시각 N/A | FOMC 의사록(9월 회의) 공개 | N/A | N/A | 경제캘린더 종합 [P3] |
| 2026-10-14 | 08:30 ET · 21:30 KST | 소비자물가지수(CPI, 9월) | N/A — 확인 필요 | N/A — 확인 필요 | 경제캘린더 종합 [P3] |
| 2026-10-15 | 08:30 ET · 21:30 KST | 생산자물가지수(PPI, 9월) | N/A — 확인 필요 | N/A — 확인 필요 | 경제캘린더 종합 [P3] |

> 10/27~28 FOMC(정책금리 발표 10/28)는 14일 범위를 벗어나 참고로만 병기: 직전 결정치 3.75~4.00%(9월).

### 기업 일정

| 날짜 | 기업 | 이벤트 | 컨센서스 EPS | 컨센서스 매출 | 출처 |
|------|------|--------|----------------|----------------|------|
| 2026-10-07 | Applied Digital (APLD) | FY2027 1분기 실적발표 컨퍼런스콜 (17:00 ET) | N/A — 확인 필요 | N/A — 확인 필요 | Applied Digital IR 공지 · 2026-09-28 발표 [P1] |
| 2026-10-08 | PepsiCo (PEP) | 3분기 실적발표 | N/A — 확인 필요 | N/A — 확인 필요 | MarketBeat 실적캘린더 [P3] |
| 2026-10-09 | Delta Air Lines (DAL) | 3분기 실적발표 | N/A — 확인 필요 | N/A — 확인 필요 | 실적캘린더 보도 종합 [P3] |
| 2026-10-13 | JPMorgan Chase (JPM) | 3분기 실적발표 (장 개장 전) | N/A — 확인 필요 | N/A — 확인 필요 | 실적캘린더 보도 종합 [P3] |
| 2026-10-15 | TSMC (TSM) | 3분기 실적발표 | N/A — 확인 필요 | N/A — 확인 필요 | TSMC 투자자 캘린더 · https://investor.tsmc.com/english/financial-calendar [P1] |

## [9] 오늘의 사실 목록 (순위 없음)

- [1] S&P500 7,652.03, -0.25%(-18.82pt) · TheStreet [P3]
- [1] 나스닥종합 26,861.06, +0.24%(+63.52pt) · TheStreet [P3]
- [1] 다우존스 50,914.09, -0.86%(-441.03pt) · TheStreet [P3]
- [1] 러셀2000 2,796.88, -0.39%(-11.04pt) · TheStreet [P3]
- [1] SOX 12,616.00, -0.10%(-13.16pt) · Investing.com [P3]
- [1-A] VIX 16.34(+1.87%), VIX3M/VIX=1.124(콘탱고), VIX/VIX9D=1.151(콘탱고) · CBOE/Yahoo (0_data.md)
- [1-A] SPX Put/Call(거래량) 1.101, QQQ Put/Call(거래량) 1.176 · CBOE (0_data.md)
- [2] Fed 이사 마이클 바, 추가 금리인상 필요 가능성·현 정책금리 여전히 완화적이라 발언 · InvestingLive [P3]
- [2] 8월 PCE 헤드라인 +3.4%(예상 3.7%), 근원 PCE +3.0%(예상 3.3%) · BEA [P1]
- [2] 미 10년물 국채금리 5.23~5.298%, 2년물 4.895% · TradingEconomics/CNBC [P2/P3]
- [2] CME FedWatch 10월 FOMC 동결확률 52.9%(인상확률 47.1%), PCE 발표 후 갱신 · Phemex [P3]
- [3] 8월 PCE 물가지수: 헤드라인 3.4%(예상 3.7%, 전월 3.7%), 근원 3.0%(예상 3.3%, 전월 3.3%) · BEA [P1]
- [3] 9월 ADP 민간고용 +90,000명 · CNBC [P2]
- [4] United Therapeutics(UTHR) +15%(또는 +12.20%, 매체 간 편차), FDA가 Tyvaso IPF 적응증 sNDA 접수, 가속 자사주매입 체결 · CNBC [P2]
- [4] Fair Isaac(FICO) -26.5%, FHFA 모기지 신용평가 단일 가격정책 도입 발표 · CNBC [P2]
- [4] MongoDB(MDB) -21.2%, CEO 치란탄 데사이 사전통보 없이 사임, 메타로 이동 · CNBC [P2]
- [4] HPE +3.96~4.5%, Vultr와 12억 달러 AI 시스템 공급계약 체결, 네트워킹 전망 상향 · Yahoo Finance [P3]
- [4] Rogers(ROG) +10%, 연간 EPS 가이던스 약 3.80달러로 컨센서스(3.65달러) 상회 제시 · CNBC [P2]
- [4] Jabil(JBL) 4분기 매출 106억 달러·EPS 시장예상 상회에도 주가 약 -7%대, FY27 매출 가이던스 445억 달러(+24%) · Jabil IR [P1]
- [4-A] 아마존, 시높시스와 10억 달러 규모 계약 체결 보도(AWS 관련) · Yahoo(Finnhub) [P3]
- [4-A] UnitedHealth, CalPERS 소송 관련 법원이 기각신청 일부 기각 · Yahoo(Finnhub) [P3]
- [5] Micron 4분기 매출 542.3억 달러(예상 상회), DRAM 매출 전년비 +343%(398억 달러), FY27 1분기 가이던스 매출 약 615억 달러 · Micron IR [P1]
- [5] HPE, Vultr 12억 달러 AI시스템 계약 및 하이퍼스케일 고객 35억 달러 추론 계약 체결 · Yahoo Finance [P3]
- [5] Celestica, Bernstein "Outperform" 커버리지 개시(목표주가 520달러), 2026년 매출 가이던스 190억→205억 달러로 상향 · Kalkine/GuruFocus [P3]
- [5] TSMC CEO, AI 빌드아웃 수요가 2029~2030년까지 견조할 것으로 전망 발언 · Yahoo Finance [P3]
- [5] Anthropic IPO 프로스펙터스 유출: 2025년 매출 약 46억 달러, 2026년 2분기 매출 115억 달러, 순손실 420억 달러. 9/30 기준 EDGAR 미등록 · SiliconANGLE [P3]
- [5-A] AI 인프라 수요 측(MSFT/AMZN/GOOGL/META) 신규 변동 없음 — 직전 가이던스 유지
- [6] N/A — AI 무관 시총상위 10개사 관련 9/30 당일 신규 사실 확인 안됨
- [7] SMH 순자산 748.2억 달러(9/29 기준), 당일 자금흐름 수치 확인 불가 · VanEck [P1]
- [7] NVDA 콜옵션(행사가 230달러) 블록트레이드 1,035계약 포착(9/29) · Barchart/TrendSpider [P3]
- [7-A] Form 4 신규 공시 없음(대상 종목 기준일 당일 기준)
- [8] 10/1 ISM 제조업 PMI(예상 54.8, 전월 54.6), 신규 실업수당청구 발표 예정 · financecalendar.com [P3]
- [8] 10/2 미 9월 고용상황보고서 발표 예정(비농업고용 컨센서스 84,000~90,000명, 실업률 4.1%) · Bloomberg [P2]
- [8] 10/7 FOMC 9월 의사록 공개 예정, Applied Digital FY27 1분기 실적콜 예정 · 경제캘린더/Applied Digital IR [P3/P1]
- [8] 10/14 9월 CPI, 10/15 9월 PPI·TSMC 3분기 실적 발표 예정 · 경제캘린더/TSMC IR [P3/P1]
- [8] 10/13 JPMorgan 3분기 실적발표(장 개장 전) 예정 · 실적캘린더 종합 [P3]
