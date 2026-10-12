# 미국 시장 데일리 수집 결과 (Collect)
# 기준일: 2026-10-12 (월) · 미국 정규장 종가 기준 · 실행모드: 데일리
# 생성시각(KST): 2026-10-13

## [1] 미국 주요 지수

| 항목 | 종가/수치 | 등락률(1D) | (보도된) 원인 | 출처+태그 |
|------|-----------|--------|----------------|-----------|
| S&P500 | 7,807.24 | -0.06% | 대형 기술주 약세가 지수를 끌어내렸고 블루칩 산업재·금융주가 상승분을 상쇄, 거의 보합 마감 | Yahoo chart API (자동수집) [P1] · CNBC·247wallst 보도로 원인 확인 [P2][P3] |
| 나스닥종합 | 27,245.9 | -0.44% | 반도체 등 기술주가 장중 내내 약세를 보이며 지수를 하락세로 묶어둠 | Yahoo chart API (자동수집) [P1] · Yahoo Finance "Dow gains, S&P 500 and Nasdaq slip" 보도 [P2] |
| 다우 | 51,850.55 | +0.38% | 블루칩 산업재·금융주 강세로 상승 마감 | Yahoo chart API (자동수집) [P1] · 위 동일 기사 [P2] |
| 러셀2000 | 2,794.48 | -0.45% | 개별 보도된 원인 확인되지 않음(일반 기술주·소형주 약세 분위기 외 구체적 사유 없음) | Yahoo chart API (자동수집) [P1] · [N/A] (원인 보도 미확인) |
| SOX (필라델피아 반도체) | 12,236.79 | -2.67% | 반도체주 전반 약세로 3주 최저치 기록, 광학부품주(Lumentum 등) 급락이 동반 | Yahoo chart API (자동수집) [P1] · ChainCatcher 보도 [P3] |
| Brent | 105.92 | +1.15% | 사우디 리야드 공항 재공격(후티 반군)에 따른 중동 공급 우려로 $106대 복귀, 러-우크라 에너지 휴전 주장과 상충되며 상승분 일부 상쇄 | Yahoo chart API (자동수집) [P1] · CNBC "Brent tops $106 after deadly Saudi airport attack" [P2] |

> 지수·Brent 수치는 `0_data.md` 원문을 그대로 인용(검색 없음). '원인' 열만 보도 확인.
> 참고: 2026-10-12(월)은 미국 컬럼버스데이(연방공휴일)로 채권시장·은행 휴장, 주식시장은 정상 거래. CNBC 보도 [P2]

---

## [1-A] 선물·변동성 구조 (`0_data.md` 그대로 인용)

**선물 (한국 아침 시점)**
| 항목 | 현재가 | 전일 대비 | 직전 종가 | 기준시각(ET) | 출처+태그 |
|------|--------|-----------|-----------|--------------|-----------|
| S&P500 선물 (ES) | 7,857 | -0.04% | 7,859.75 | 2026-10-12 16:59 | Yahoo chart API (자동수집) [P1] |
| 나스닥100 선물 (NQ) | 30,877.5 | -0.74% | 31,108.75 | 2026-10-12 16:59 | Yahoo chart API (자동수집) [P1] |
| 다우 선물 (YM) | 52,129 | +0.39% | 51,926 | 2026-10-12 16:59 | Yahoo chart API (자동수집) [P1] |
| 러셀2000 선물 (RTY) | 2,812.3 | -0.35% | 2,822.1 | 2026-10-12 16:59 | Yahoo chart API (자동수집) [P1] |

**변동성 구조**
| 항목 | 수치 | 전일 대비 | 출처+태그 |
|------|------|-----------|-----------|
| VIX (30일) | 15.21 | +2.49% | Yahoo chart API (자동수집) [P1] |
| VIX9D (9일) | 11.68 | +3.73% | Yahoo chart API (자동수집) [P1] |
| VIX3M (3개월) | 17.93 | +0.90% | Yahoo chart API (자동수집) [P1] |
| VVIX | 85.93 | +1.24% | Yahoo chart API (자동수집) [P1] |
| SKEW | 155.06 | +0.47% | Yahoo chart API (자동수집) [P1] |

기간구조: VIX3M/VIX = 1.179 (콘탱고) · VIX/VIX9D = 1.302 (콘탱고) — `0_data.md` 산출값 그대로.

**Put/Call 비율**
| 대상 | P/C(거래량) | P/C(미결제약정) | 콜 거래량 | 풋 거래량 | 출처+태그 |
|------|-------------|------------------|-----------|-----------|-----------|
| S&P500 지수옵션 (SPX) | 1.141 | 1.453 | 1,643,792 | 1,875,371 | CBOE 옵션체인 (자동수집) [P1] |
| 나스닥100 ETF 옵션 (QQQ) | 0.966 | 1.500 | 3,239,549 | 3,129,866 | CBOE 옵션체인 (자동수집) [P1] |

---

## [2] 금리 / 연준

| 항목 | 사실 내용(발언·수치) | 출처+태그 |
|------|----------------------|-----------|
| 10Y/2Y 금리 (FRED, 10/08 기준) | 10년물 5.22%(-6.0bp), 2년물 4.75%(-2.0bp), 10Y-2Y 스프레드 0.47%p(-4.0bp) | FRED DGS10/DGS2 (자동수집) [P1] |
| Yahoo 10Y/30Y (10/12 기준) | 10년물 5.24(-0.4bp), 30년물 5.598(-0.2bp) | Yahoo chart API (자동수집) [P1] |
| 연준 Waller 발언 (10/08) | Fed Governor Christopher Waller가 경제전망 연설에서 9월 금리 인상 배경을 설명 | Federal Reserve Board 공식 연설문 (federalreserve.gov/newsevents/speech/waller20261008a.htm) [P1] |
| 연준 Jefferson 발언 | Vice Chair Philip Jefferson: 향후 정책 조정은 데이터 추세를 면밀히 검토해 결정해야 한다는 취지로 언급 | Federal Reserve Board 공식 연설문 (federalreserve.gov/newsevents/speech/jefferson20261001a.htm) [P1] |
| 연준 Barr 발언 (인용, 날짜 미확인) | Vice Chair Michael Barr: "further policy adjustments are likely to be needed to ensure inflation comes down to target in a timely fashion" | [N/A] (발언 출처 1차 확인 불가, 보도 재인용) |
| 10/12 당일 Fed 발언 | 10/12(컬럼버스데이, 채권시장 휴장)에 신규 연준 인사 발언 검색되지 않음 | [N/A] (10/12 당일 발언 없음) |
| CME FedWatch (10/27-28 FOMC) | 동결 81.7~82.8% · 25bp 인상 18.3%(일부 소스 18%) · 인하 1% | CME FedWatch (centralbank.watch/predictionmarketspicks.com 재인용, 10/12 기준) [P3] — 직접 cmegroup.com 접근 불가, facts.json 값(동결 81%·인상 18%·인하 1%, 10/08 기준)과 수치 일치 확인 |
| 하이일드 스프레드 (OAS, 10/08 기준) | 3.15%p(+6.0bp) | FRED BAMLH0A0HYM2 (자동수집) [P1] |

> FedWatch 수치는 facts.json(최종확인 10/10) 값과 동일 범위로, 추가 변동 보도 없음. "(최종확인 10/12)"로 갱신.

---

## [3] 주요 경제지표

N/A — 10/12(컬럼버스데이)는 CPI/PPI/GDP/고용/실업수당/소매판매/ISM 등 주요 지표 발표 없음. 다음 발표: 9월 CPI 10/14(수) 08:30 ET, 소매판매·PPI 10/15(목) 08:30 ET [P2] (Scotiabank·fedratecalc.com 경제캘린더 [P3])

---

## [4] 특징 종목 (±5% 이상)

| 종목 | 티커 | 등락률 | 거래량 | (보도된) 핵심 사실 | 출처+태그 |
|------|------|--------|--------|---------------------|-----------|
| Lumentum Holdings | LITE | -9.8%~-9.71% | 약 627만주(1개월 평균의 약 1.25배) | AI 광학부품주 전반 매도, OCP Global Summit 이후 "뉴스에 팔기" 현상 및 업종 내 주요 CEO의 경계성 발언 뒤 섹터 전체 수익실현 매물 출회. 수주는 2029년 초까지 완전 예약된 상태였음 | Motley Fool "Why Lumentum Sank Today" [P2] · 247wallst [P3] |
| Applied Optoelectronics | AAOI | -7% | N/A | Lumentum발 광학부품 섹터 매도에 동반 하락 | 247wallst [P3] |
| Coherent | COHR | -7% | N/A | 동일 섹터 매도에 동반 하락 | 247wallst [P3] |

> 그 외 ±5% 이상 개별 종목 추가 확인 안 됨.

---

## [4-A] 섹터별 뉴스

| 섹터 | 종목 | 사실 내용(무슨 일이) | 발행시각(ET) | 출처+태그 |
|------|------|------------------------|--------------|-----------|
| 반도체·AI | MSFT | OCP Global Summit에서 차세대 자체 AI칩 Maia 300 공개, 2027년 출시 예정. 96개 가속기 랙 기준 전작(Maia 200) 대비 최대 7배 처리량, 리딩 GPU 시스템 대비 메가와트당 토큰처리량 40% 개선. 2027년 최대 100만개 배치 계획, TSMC 2나노 공정 사용 | Yahoo Finance "Microsoft just reclaimed its $4T market cap" 15:47 ET · UPI "Microsoft announces new AI chip Azure Maia 300" [P2] | 
| 반도체·AI | MSFT | 이 발표 당일 Microsoft 시가총액이 장중 약 4.01조 달러로 재진입, $4T 클럽 재가입(2025년 7월 최초 도달 후 이탈) | Yahoo Finance "Microsoft reclaims $4 trillion market cap" 14:22 ET [P2] |
| 반도체·AI | NVDA | Intel이 신규 데이터센터 GPU(코드명 Crescent Island, Xe3P 아키텍처, 최대 160GB 메모리, HBM4 탑재 예정)로 AI 턴어라운드를 추진 중이라고 보도. 2026년 하반기 고객 샘플링 시작 | Yahoo Finance "Intel aims to boost AI turnaround with new GPU chips" 15:29 ET [P2] · Intel Newsroom [P1] |
| 반도체·AI | AVGO | Broadcom-Samsung 칩 가격 계약이 Nvidia가 자사 메모리 공급사로부터 받는 조건과 유사한 수준으로 체결됐다고 보도. Google·Anthropic·OpenAI·Meta와 2029년까지의 기가와트급 XPU 공급계약 보유 | tech-insider.org "Broadcom-Samsung Chip Deal Matches Nvidia Pricing" [P3] |
| 금융 | JPM 외 은행주 | 실적 발표(10/13~14) 및 인플레이션 지표를 앞두고 월가가 리스크를 줄이는 모습 | Yahoo (Barron's) "Wall Street Is Shedding Risk Ahead of Earnings, Inflation Data" 14:33 ET [P2] |
| 에너지 | XOM | 사우디 공항 공격 이후 엑슨모빌 등 대형 석유주가 매수 포인트(buy point) 상회 보도 | Yahoo (Investor's Business Daily) "Exxon, Oil Giants Top Buy Points After Deadly Saudi Airport Attacks" 14:06 ET [P2] |
| 헬스케어 | UNH / HUM | CMS 2027 Star Ratings 발표 결과, Evercore 분석에 따르면 Humana가 관리형 케어 업계 최대 수혜주(2028년 보너스 지급액 약 48억 달러 추정, EPS 50달러 이상 가능), UnitedHealth는 최대 역풍(2028년 약 14억 달러 손실 추정, EPS 24.84달러로 하향) | Investing.com "Humana leads Managed Care winners in new CMS Star Ratings - Evercore" 15:45 ET [P2] |
| 소비재·유통 | AMZN | Microsoft $4T 재진입 기사에서 대형 기술주 전반 동향 언급되었으나 아마존 고유의 개별 사실 확인되지 않음 | Yahoo Finance 15:47 ET [N/A] (AMZN 고유 사실 미확인) |

---

## [5] AI 인프라 — 공급 측

| 기업 | 뉴스 제목 | 사실 내용(무슨 일이) | 출처일자 | 출처+태그 |
|------|-----------|------------------------|----------|-----------|
| MSFT | Microsoft Unveils Maia 300 AI Chip | OCP Global Summit(샌호제이)에서 Maia 300 공개. 추론 작업에 특화, 핵심 연산 칩렛은 TSMC 2나노, 데이터 이동용 칩렛은 3나노 사용. 96개 가속기 랙당 Maia 200 대비 최대 7배 처리량, 리딩 GPU 대비 메가와트당 토큰처리량 40% 개선. 2027년 최대 100만개 배치, Nvidia·AMD 의존도 완화 목적 | 2026-10-12 | HPCwire "Microsoft Announces Maia 300" [P2] · UPI [P2] · Yahoo Finance [P2] |
| NVDA / AMD / AVGO | Nvidia·Broadcom·AMD 각각 OpenAI와 공급계약 체결 보도 | 세 회사가 각각 OpenAI와 딜을 확보했다는 보도(세부 계약 규모는 본 검색에서 확인되지 않음) | 2026-10-12 | Yahoo Finance "Nvidia, Broadcom, and AMD Each Won Deals With OpenAI" [P2] |
| NVDA | Genesis Mission 연구 지원 | Nvidia가 트럼프 행정부의 Genesis Mission과 연계해 미국 과학연구에 10억 달러·5년 규모 지원을 공표했다는 보도(양자컴퓨팅·헬스케어·에너지 분야) | 2026-10-12 | WVU SMIF Portfolio Update [P3] (1차 확인 불가, 보도 재인용) |
| AVGO | Broadcom-Samsung 칩 가격 계약 | Broadcom이 Samsung Electronics와 체결한 칩 가격 계약이 Nvidia가 자사 메모리 공급사로부터 받는 조건과 유사. Google·Anthropic·OpenAI·Meta와 2029년까지 기가와트급 XPU 공급계약 다수 확보 | 2026-10-12 | tech-insider.org [P3] |
| INTC (참고: 공급측 경쟁사) | Intel 신규 AI GPU | 데이터센터용 신규 GPU "D-Series"(코드명 Crescent Island) 공개. Xe3P 아키텍처, 최대 160GB 메모리, HBM4 탑재 예정. PCIe 카드 형태로 Nvidia Blackwell과 다른 폼팩터. 2026년 하반기 고객 샘플링 시작 | 2026-10-12 | Yahoo Finance [P2] · Intel Newsroom [P1] |
| LITE / AAOI / COHR | AI 광학부품 섹터 매도 | Lumentum -9.8%, Applied Optoelectronics -7%, Coherent -7%. OCP Global Summit 이후 차익실현 매물, Lumentum 자체는 2029년 초까지 수주 완전 예약 상태였음에도 하락 | 2026-10-12 | Motley Fool [P2] · 247wallst [P3] |
| 메모리(HBM/DRAM/NAND) | 메모리 공급 부족 지속 | DDR4 1Gx8 현물가 $46.32/GB(10/6 기준 신고가), HBM3E AI 공급계약가 $12.00~12.80/GB, HBM3E 현물가 약 $2,100/36GB 모듈로 장기계약 대비 높은 수준. 2026년 DRAM·NAND·HBM 수급갭 각각 4.9%/4.2%/5.1%로 2011년 이후 최고 수준 추정 | 2026-10-06 (DDR4 현물가 기준) | capitalandcompute.net DRAM 가격 트래커 [P3] · tech-insider.org "2026 Memory Chip Shortage" [P3] (업계 추정치, 1차 공시 아님) |

---

## [5-A] AI 인프라 — 수요 측 / 하이퍼스케일러 CAPEX

N/A — 실적시즌 외, 직전 CAPEX 확인값 없음. MSFT/AMZN/GOOGL/META의 10/12 신규 CAPEX 가이던스 발표 확인되지 않음(은행 실적은 10/13부터 시작, 빅테크 실적은 이후 주차).

---

## [6] 시총 상위 10 — AI 무관 일반 이슈

| 기업 | 사실 내용 | 출처일자 | 출처+태그 |
|------|-----------|----------|-----------|
| META | 뉴멕시코주 배심원단이 Facebook(Meta)의 데이터 오용과 관련해 4,300만 건 이상의 위반에 대해 평결, 수십억 달러 규모 벌금 가능성. 최종 금액은 판사가 결정, 10월 말까지 결정 예정 | 2026-10-12 (보도 재인용) | pasqualepillitteri.it 재인용 보도 [P3] (1차 법원 문서 미확인) |
| TSLA | 애널리스트 목표가 상향, 중국 판매 호조, 로보택시 관련 규제 당국의 추가 점검 보도 | 2026-10-12 | 보도 종합 [P3] (구체적 매체/시각 미확인) |
| AAPL | 애플 온라인스토어가 iPhone Duo(가칭) 사전주문 준비를 위해 10/12(월) 재방문 안내 공지 | 2026-10-11/12 | theapplepost.com [P3] |
| GOOGL | Google Ads에 AI 기반 목표·자산 제안 기능 테스트 중, Google Search에 오타·검색결과 없음 상황에서 AI Overviews 노출 확대 | 2026-10-12 | seroundtable.com Daily Search Forum Recap [P3] |

---

## [7] 기관·대형 자금 수급

| 항목 | 종목 | 사실 내용 | 규모(수치) | 출처+태그 |
|------|------|-----------|------------|-----------|
| 반도체 ETF 자금흐름 | SOXX | 최근 1개월 순유입 +12.7억 달러(운용자산 대비 +2.9%) | +$1.27B(1개월) | Trefis SOXX 데이터 [P3] (10/12 당일 수치 아님, 최근월 누적) |
| 반도체 ETF 자금흐름 | SMH | 최근 거래일 중 한 번에 12.4억 달러 환매(redemption) 발생 | -$1.24B(단일일, 날짜 특정 안됨) | ETF Action/etfdb.com 재인용 [P3] |
| 대형 기술 ETF 자금흐름 | QQQ | 최근 1개월 순유출 -45.5억 달러(운용자산 대비 -0.9%) | -$4.55B(1개월) | Invesco/ETF Action 재인용 [P3] |
| 옵션 특이거래 | ABR (Arbor Realty Trust) | 10월 16일 만기 3.00 스트라이크 풋옵션에 대규모 블록매수 다수 포착, 총 41,168계약 | 41,168계약 | 옵션 모니터링 서비스 재인용 [P3] (구체적 매체 미확인) |

> SOXX/SMH/QQQ 수치는 10/12 당일 플로우가 아닌 최근 기간 누적치로, 당일 전용 데이터는 확인되지 않음.

---

## [7-A] Insider Trading (SEC Form 4)

| 기업 | 내부자 | 직책 | 매수/매도 | 거래유형 | 규모 | 거래일 | 출처 |
|------|--------|------|-----------|----------|------|--------|------|
| N/A | - | - | - | - | - | - | N/A — NVDA/AVGO/CRDO/CLS/APLD/VRT/SMCI 관련 2026-10-12 전후 신규 Form 4 공시 확인되지 않음 (SMCI 최근 공시는 7~8월 거래분, NVDA는 8월 이사 스톡옵션 부여가 최신) |

---

## [8] 향후 14일 주요 일정

**경제·연준 일정**
| 날짜(ET) | 시각(ET) | 구분 | 이벤트 | 직전값 | 예상값 | 출처 |
|----------|----------|------|--------|--------|--------|------|
| 2026-10-14 | 08:30 | macro | CPI (9월, CPI/Core CPI) | N/A | N/A | Scotiabank 경제캘린더 [P3] |
| 2026-10-14 | 14:00 | fed | 베이지북(Beige Book) 공개 | N/A | N/A | fedratecalc.com [P3] |
| 2026-10-15 | 08:30 | macro | 소매판매 (9월, Advance Retail Sales) | N/A | N/A | Scotiabank 경제캘린더 [P3] |
| 2026-10-15 | 08:30 | macro | PPI (9월) | N/A | N/A | Scotiabank 경제캘린더 [P3] |
| 2026-10-15 | 08:30 | macro | 신규 실업수당청구(주간, 10/10 마감주) | N/A | N/A | admiralmarkets.com [P3] |
| 2026-10-16 | N/A | macro | 산업생산(Industrial Production) | N/A | N/A | fedratecalc.com [P3] |
| 2026-10-27 | N/A | fed | FOMC 1일차 | - | - | sync2cal.com / fxnx.com [P3] |
| 2026-10-28 | 14:00 | fed | FOMC 금리결정 발표 + 기자회견(14:30) | 3.75~4.00% | 동결 우세(81.7~82.8%) | fedratecalc.com / xoomar.com [P3] |

**기업 이벤트**
| 날짜(ET) | 시각(ET) | 기업 | 티커 | 이벤트 | 출처 |
|----------|----------|------|------|--------|------|
| N/A | N/A | N/A | N/A | N/A — 실적 발표일 외 확정된 비실적 기업 이벤트(제품 출시·투자자 설명회 등) 소스 확인되지 않음 | N/A |

> 실적 발표일은 코드(캘린더 수집기)가 별도 처리하므로 본 섹션에서 제외.

---

## [9] 오늘의 사실 목록 (순위 없음)

```
[1] S&P500 7,807.24(-0.06%), 기술주 약세·블루칩 산업재·금융 강세로 거의 보합 마감 · 출처 [P1][P2]
[1] 나스닥종합 27,245.9(-0.44%), 반도체 등 기술주 약세 지속 · 출처 [P1][P2]
[1] 다우 51,850.55(+0.38%), 산업재·금융 강세로 상승 · 출처 [P1][P2]
[1] 러셀2000 2,794.48(-0.45%), 구체적 원인 보도 미확인 · 출처 [P1][N/A]
[1] SOX 12,236.79(-2.67%), 반도체 섹터 매도로 3주 최저 · 출처 [P1][P3]
[1] Brent 105.92(+1.15%), 사우디 리야드 공항 재공격에 따른 중동 공급 우려 · 출처 [P1][P2]
[1-A] VIX 15.21(+2.49%), VIX3M/VIX=1.179·VIX/VIX9D=1.302 모두 콘탱고 · 출처 [P1]
[1-A] SPX P/C(거래량) 1.141, QQQ P/C(거래량) 0.966 · 출처 [P1]
[2] 10/12 당일 Columbus Day로 채권시장 휴장, 신규 연준 발언 없음 · 출처 [N/A]
[2] Waller(10/08) 연설에서 9월 금리인상 배경 설명 · 출처 [P1]
[2] Jefferson: 향후 정책조정은 데이터 추세로 결정 · 출처 [P1]
[2] CME FedWatch 10/27-28 FOMC 동결 81.7~82.8%·인상 18.3%·인하 1% · 출처 [P3]
[3] 10/12 주요 경제지표 발표 없음(컬럼버스데이), 9월 CPI는 10/14 발표 예정 · 출처 [P2]
[4] Lumentum(LITE) -9.8%, AI 광학부품 섹터 매도·OCP 서밋 후 차익실현 · 출처 [P2][P3]
[4] Applied Optoelectronics -7%, Coherent -7%, 동일 섹터 매도 동반 · 출처 [P3]
[4-A] Microsoft, OCP Global Summit에서 Maia 300 AI칩 공개(2027년 출시) · 출처 [P2]
[4-A] Microsoft 시총 장중 약 4.01조 달러로 $4T 재진입 · 출처 [P2]
[4-A] Intel, 데이터센터 AI GPU 'Crescent Island(D-Series)' 공개, 2026년 하반기 샘플링 · 출처 [P2][P1]
[4-A] Humana, CMS 2027 Star Ratings에서 관리형 케어 최대 수혜주로 평가(Evercore) · 출처 [P2]
[4-A] UnitedHealth, 동일 Star Ratings에서 최대 역풍 평가(Evercore, 2028년 EPS 약 14억달러 손실 추정) · 출처 [P2]
[4-A] 월가, 실적시즌·인플레이션 지표를 앞두고 리스크 축소 중 · 출처 [P2]
[4-A] 사우디 공항 공격 이후 엑슨모빌 등 대형 석유주 매수포인트 상회 보도 · 출처 [P2]
[5] Nvidia·Broadcom·AMD 각각 OpenAI와 공급계약 체결 보도 · 출처 [P2]
[5] Broadcom-Samsung 칩 가격계약, Nvidia 유사 조건으로 체결 · 출처 [P3]
[5] 메모리 현물가 강세 지속: DDR4 $46.32/GB(10/6 신고가), HBM3E 공급계약가 $12.00~12.80/GB · 출처 [P3]
[5-A] 하이퍼스케일러 CAPEX 신규 가이던스 없음(실적시즌 외) · 출처 [N/A]
[6] Meta, 뉴멕시코 배심원 평결로 4,300만건 이상 위반 판정, 벌금 규모는 10월 말 판사 결정 예정 · 출처 [P3]
[6] Apple, iPhone Duo 사전주문 준비 안내(10/12 온라인스토어 공지) · 출처 [P3]
[7] SOXX 최근 1개월 순유입 +12.7억달러, QQQ 최근 1개월 순유출 -45.5억달러 · 출처 [P3]
[7] SMH 단일 거래일 12.4억달러 환매 발생(날짜 특정 안됨) · 출처 [P3]
[7] ABR 10/16 만기 3.00풋에 블록매수 41,168계약 포착 · 출처 [P3]
[7-A] NVDA/AVGO/CRDO/CLS/APLD/VRT/SMCI 관련 10/12 전후 신규 Form 4 공시 없음 · 출처 [N/A]
[8] 9월 CPI 10/14 08:30 ET 발표 예정 · 출처 [P3]
[8] 9월 소매판매·PPI 10/15 08:30 ET 발표 예정 · 출처 [P3]
[8] FOMC 10/27~28, 금리결정 10/28 14:00 ET 발표 예정 · 출처 [P3]
```
