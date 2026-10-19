# 미국 시장 데일리 수집 결과 (Collect)
# 기준일: 2026-10-19 (월) · 미국 정규장 종가 기준 · 실행모드: 데일리
# 생성시각(KST): 2026-10-20 07:40

---

## [1] 미국 주요 지수

> 지수·Brent 수치는 `0_data.md`에서 그대로 옮김(검색하지 않음). '원인'만 보도된 사실로 채움.

| 항목 | 종가/수치 | 등락률(1D) | (보도된) 원인 | 출처+태그 |
|------|-----------|------------|----------------|-----------|
| S&P500 | 7,690.73 | +0.41% | 전주 낙폭에 대한 기술주 중심 반발 매수(아래 나스닥 참고) | CBOE/CME(Yahoo chart API 자동수집) [P1] |
| 나스닥종합 | 26,430.89 | +1.11% | "지난주 과매도 상태였던 기술주의 반등" — Meta·Tesla 등 이번 주 실적 발표가 진위를 가를 것이라고 보도 | CNBC · "Tech stocks had a nice oversold bounce on Monday..." · 2026-10-19 16:57 ET · https://www.cnbc.com/2026/10/19/tech-stocks-rebound-meta-tesla-earnings.html [P2] |
| 다우 | 51,966.03 | -0.07% | 보도된 구체적 원인 확인 안 됨(기술주 중심 반등과 달리 다우는 보합) | N/A |
| 러셀2000 | 2,728.3 | +0.25% | 보도된 구체적 원인 확인 안 됨 | N/A |
| SOX (필라델피아 반도체) | 11,316.34 | +1.61% | 반도체 섹터 전반 반등 — VanEck 반도체 ETF(SMH)가 9거래일 연속 하락을 끊고 약 3% 상승했다고 보도 | CNBC · "Stocks making the biggest moves midday: SNDK, MRVL, DDOG, CLF, AMZN" · 2026-10-19 · https://www.cnbc.com/2026/10/19/stocks-making-the-biggest-moves-midday-sndk-mrvl-ddog-clf-amzn.html [P2] |
| Brent | 109.21 | -0.59%(전일대비) | 보도된 구체적 원인 확인 안 됨 | CBOE/CME(Yahoo chart API 자동수집) [P1] |

---

## [1-A] 선물·변동성 구조 〔`0_data.md`에서 그대로 옮김 — 검색 안 함〕

**선물 (한국 아침 시점)**

| 항목 | 현재가 | 전일 대비 | 직전 종가 | 기준시각(ET) | 출처+태그 |
|------|--------|-----------|-----------|--------------|-----------|
| S&P500 선물 (ES) | 7,739.75 | +0.46% | 7,704.25 | 2026-10-19 17:00 | Yahoo chart API 자동수집 [P1] |
| 나스닥100 선물 (NQ) | 29,743.75 | +1.20% | 29,391.5 | 2026-10-19 16:59 | Yahoo chart API 자동수집 [P1] |
| 다우 선물 (YM) | 52,227 | +0.02% | 52,214 | 2026-10-19 16:59 | Yahoo chart API 자동수집 [P1] |
| 러셀2000 선물 (RTY) | 2,744.7 | +0.34% | 2,735.5 | 2026-10-19 16:59 | Yahoo chart API 자동수집 [P1] |

**변동성 구조**

| 항목 | 수치 | 전일 대비 | 출처+태그 |
|------|------|-----------|-----------|
| VIX (30일) | 18.44 | -7.75% | Yahoo chart API 자동수집 [P1] |
| VIX9D (9일) | 17.93 | -10.88% | Yahoo chart API 자동수집 [P1] |
| VIX3M (3개월) | 19.6 | -4.39% | Yahoo chart API 자동수집 [P1] |
| VVIX | 106.93 | -2.71% | Yahoo chart API 자동수집 [P1] |
| SKEW | 161.86 | -3.99% | Yahoo chart API 자동수집 [P1] |

기간구조(0_data.md 산출값 그대로): VIX3M/VIX = 1.063(콘탱고), VIX/VIX9D = 1.028(콘탱고). 분류명까지만 기재.

**Put/Call 비율 (CBOE 옵션 체인 직접 집계)**

| 대상 | P/C(거래량) | P/C(미결제약정) | 콜 거래량 | 풋 거래량 | 출처+태그 |
|------|-------------|------------------|-----------|-----------|-----------|
| S&P500 지수옵션 (SPX) | 1.196 | 1.467 | 2,069,195 | 2,474,083 | CBOE 지연시세 [P1] |
| 나스닥100 ETF 옵션 (QQQ) | 1.172 | 1.400 | 4,103,102 | 4,809,926 | CBOE 지연시세 [P1] |

---

## [2] 금리 / 연준

| 항목 | 사실 내용(발언·수치) | 출처+태그 |
|------|----------------------|-----------|
| 미 2년물(FRED, 기준일 2026-10-16) | 4.74% (전일대비 -3.0bp) | FRED DGS2 [P1] |
| 미 10년물(FRED, 기준일 2026-10-16) | 5.09% (전일대비 -1.0bp) | FRED DGS10 [P1] |
| 10Y-2Y 스프레드(FRED, 기준일 2026-10-16) | 0.35%p (전일대비 +2.0bp) | FRED [P1] |
| 미 30년물(Yahoo·장중 참고, 기준 2026-10-19 14:59 ET) | 5.472% (전일대비 +3.6bp) | Yahoo `^TYX` [P1] |
| CME FedWatch — 10/28 FOMC 확률(최종확인 2026-10-17 이월, facts.json) | 동결(hold) 약 87.3%, 25bp 인상 약 12.7%. 10/19자 일부 매체(Forbes 등)가 CME FedWatch를 인용해 "약 85% 동결/15% 인상"이라고 보도했으나 cmegroup.com 원 페이지를 직접 확인하지 못해 facts.json 이월값을 유지함 | CME FedWatch (docs/data/facts.json 이월) [P1] |
| Fed 블랙아웃 기간 | 2026-10-17부터 10/28 FOMC까지 공식 발언 없음(관례). 10/17~10/19 사이 Fed 인사 공개 발언 확인 안 됨 | Fed 관례(블랙아웃 기간) [P1] |
| 직전 공개 발언 — Kevin Warsh 연준 의장, 2026-10-16(블랙아웃 직전), 방콕 IMF/WB 연차총회 기조대담 | "I don't prejudge meetings. I don't believe in saying now what I might do at the meetings that we have in the balance of this year" · "we're not in that business anymore"(포워드 가이던스 관련) · AI 투자 확산을 "근단기 수요 충격(near-term demand shock)"으로 표현, "probably the most important thing that's happening in the global economy on the upside"라면서도 경로는 "very bumpy"일 것이라 언급 · 글로벌 통화긴축에 대해 "synchronous tightening... there's no free riders" | CNBC · 2026-10-16 · https://www.cnbc.com/2026/10/16/feds-warsh-says-ai-development-path-will-be-very-bumpy-.html [P2] |
| 차기 FOMC 일정 | 2026-10-27(비공개 회의) / 2026-10-28 14:00 ET 금리결정 발표, 14:30 ET 기자회견. 이번 회의엔 SEP(점도표) 없음 | Fed 공식 일정(다수 매체 교차확인) [P1] |
| 배경(직전 회의) | 2026-09-16 FOMC에서 기준금리 25bp 인상(3.75~4.00%) — 2023년 이후 첫 인상. 대다수 위원이 2026년 추가 1회 인상을 전망(일부는 2회) | CNN · 2026-09-16 · https://www.cnn.com/2026/09/16/economy/fed-rate-decision-september [P2] |

---

## [3] 주요 경제지표

> 2026-10-19(월, ET) 기준 CPI·Core CPI·PCE·Core PCE·PPI·GDP·Payroll·실업률·실업수당·소매판매·ISM 제조/서비스 **발표 없음**.

N/A — 금일 지표 발표 없음

참고(목록 외 지표, 참고용): NAHB/Wells Fargo 주택시장지수(10월) — 발표 2026-10-19 09:00 ET, 실제 29 / 예상 31 / 이전 32, 2012년 6월 이후 최저치. 출처: NAHB 보도자료 https://www.nahb.org/news-and-economics/press-releases/2026/10/builder-sentiment-falls-on-rising-rates [P1]

---

## [4] 특징 종목 〔±5% 이상 또는 거래량 급증, [5]/[5-A]/[6] 전담 종목 제외〕

| 종목 | 티커 | 등락률 | 거래량 | (보도된) 핵심 사실 | 출처+태그 |
|------|------|--------|--------|---------------------|-----------|
| Cleveland-Cliffs | CLF | +15.7%(GuruFocus) / +10~12%(Benzinga, 매체별 상이) | N/A | Q3 2026 실적 서프라이즈 — 조정 EPS $0.28(컨센서스 $0.22) · 조정 EBITDA $612M(자체 가이던스 $575M 상회, 전분기 $286M 대비 2배 이상) · 매출 $5.61B(+18.5% YoY) · Q4 EBITDA 가이던스 $700M 이상 제시 | GuruFocus · 2026-10-19 · https://www.gurufocus.com/news/9130084 [P3] ; Benzinga · 2026-10-19 · https://www.benzinga.com/markets/earnings/26/10/62437967 [P2] |
| SanDisk | SNDK | +5.7~7.4%(매체별 상이) | N/A | 전주 급락했던 반도체·메모리 섹터 반등, NAND 가격 강세 보도 | CNBC · 2026-10-19 · https://www.cnbc.com/2026/10/19/stocks-making-the-biggest-moves-midday-sndk-mrvl-ddog-clf-amzn.html [P2] |
| Marvell Technology | MRVL | +6.2~7.3%(매체별 상이) | N/A | 반도체 섹터 전반 반등에 동반 상승(VanEck 반도체 ETF 9거래일 연속 하락 종료) — 개별 기업 뉴스 보도 없음 | CNBC · 2026-10-19 · 상동 [P2] |
| Datadog | DDOG | +4.7~6.98%(매체별 상이) | N/A | Bernstein SocGen이 투자의견 상향(Outperform), 목표가 $237→$350 상향 — 엔터프라이즈 AI 토큰 소비가 분기 대비 50% 이상 증가했다는 대체 데이터 인용 | GuruFocus · 2026-10-19 · https://www.gurufocus.com/news/9130081 [P3] |

> 비고: Teradyne(TER, +4.3~6.0%)·Ciena(CIEN, +5.7%)도 유사 범위 등락이 보도됐으나, 개별 촉발 요인을 명확히 확인하지 못해(섹터 전반 반등 외) 이번 표에는 제외함.

---

## [4-A] 섹터별 뉴스 〔`0_data.md` Finnhub 수집분〕

| 섹터 | 종목 | 사실 내용(무슨 일이) | 발행시각(ET) | 출처+태그 |
|------|------|----------------------|--------------|-----------|
| 금융 | JPM | JPMorgan이 JPM Coin(기관용 스테이블코인)을 이더리움 메인넷에 배포, 멀티체인 기관 스테이블코인 결제로 확장 | 2026-10-19 15:41 | Yahoo(Finnhub 수집) [P3] |
| 헬스케어 | UNH | UNH 등 다수 상장사가 OKX-ICE 토큰화 상장(tokenized listing) 계획에 공식 반대 의사 표명 | 2026-10-19 12:29 | Yahoo(Finnhub 수집) [P3] |

> 그 외 Finnhub 수집분(에너지 XOM, 소비재 AMZN 등)은 개별 기업 비교·추천 성격의 칼럼이라 사실 보도로 분류하기 어려워 제외함.

---

## [5] AI 인프라 — 공급 측

| 기업 | 뉴스 제목 | 사실 내용(무슨 일이) | 출처일자 | 출처+태그 |
|------|-----------|----------------------|----------|-----------|
| NVDA | Nscale-Anthropic 2차 컴퓨팅 계약 협의 | Nvidia 반도체 기반 AI 클라우드 업체 Nscale이 Anthropic에 약 $45B 규모의 2차 컴퓨팅 공급 계약을 협의 중(West Virginia Monarch 캠퍼스 2동 증설, 460MW, Vera Rubin 칩 사용). 양사 모두 확인 거부, 미확정 | 2026-10-19 | Bloomberg · https://www.bloomberg.com/news/articles/2026-10-19/nscale-anthropic-in-talks-for-45-billion-cloud-computing-deal [P2] |
| NVDA | Microsoft, 英 Nscale 데이터센터 계약 철회 | Microsoft가 영국 Essex·Loughton 소재 Nscale 데이터센터에서 Nvidia AI 가속기 약 23,000개를 임차하기로 한 계약에서 철수. 사유는 UK Power Networks가 2030년대 초중반까지 해당 부지에 전력 공급이 불가하다고 통보했기 때문. Microsoft는 해당 1개 사이트에만 적용되며 Nscale과의 파트너십(노르웨이 Narvik·포르투갈·미국 등)은 유지된다고 밝힘 | 2026-10-19(보도, Reuters) | Yahoo Finance(Reuters) · https://finance.yahoo.com/technology/ai/articles/microsoft-pulls-uk-nscale-data-135037959.html [P2] |
| AVGO | 주가 변동 | 10/19 종가 $328.75, 당일 -4.52%. 매체는 특정 기업 뉴스보다 AI 반도체 섹터 전반 약세 맥락에서 보도 | 2026-10-19 | 2차 보도(가격 집계) https://en.cryptonomist.ch/2026/10/19/broadcom-stock-analysis-closes-32875 [P3] |
| AMD | Helion Agentic AI Rack 발표 | 최대 32,768개 Zen 6 CPU 코어, Instinct MI350P 가속기 16개 탑재 모듈형 데이터센터 랙 공개, FP4 기준 74페타플롭스, 네트워킹 대역폭 102Tbps(공식 발표 정확한 일자 미상 — 10/17 전후 보도 기준) | 2026-10-17(보도 기준, 발표일 미상) | EE Times · https://www.eetimes.com/warning-shots-fired-as-amd-announces-new-data-center-gpus-at-advancing-ai-event/ [P3] |
| AMD | Q3 2026 실적 일정 확정 | 2026-11-03 장마감 후 실적 발표, 컨콜 17:00 ET. 컨센서스 EPS $1.94 / 매출 $13.06B(전년동기 $1.20 / $9.25B) | 확정일 미상(집계 기준) | MarketBeat · https://www.marketbeat.com/earnings/reports/2026-11-3-advanced-micro-devices-inc-stock/ [P3] |
| TSM | Q3 2026 실적(직전 주 발표, 참고) | 2026-10-15 발표 — 순이익 NT$763.06B(+68.7% YoY, 6분기 연속 최대), 매출 NT$1,494.24B(약 $46.72B, +50.9% YoY, 자사 가이던스 상회). HPC 매출 비중 68%, 3nm 33%·5nm 28%. Q4 매출 가이던스 $52.3~54.3B 제시, 2nm 램프 지속 언급 | 2026-10-15 | Benzinga · https://www.benzinga.com/markets/tech/26/10/62373268 [P2] |
| TSM | 2026년 Capex 재확인 | CFO Wendell Huang, 2026년 capex $60~64B 지출 계획을 재확인하며 에이전틱 AI 칩 수요 등 장기 수요와 연계해 언급. 텍사스 투자 확대 및 Elon Musk의 "Terafab" 복합단지 협력 가능성 검토 중이라고 보도 | 2026-10-15(실적콜 기준), 2026-10-18(해설 기사) | Washington Times · https://www.washingtontimes.com/news/2026/oct/15/taiwan-chipmaker-tsmc-explores-texas-investment-increase-production/ [P2] |
| ANET | Open Ethernet rack-scale 포트폴리오 | AMD·Arm·Broadcom·d-Matrix·Meta·Microsoft·Qualcomm과 공동으로 "Ethernet for Scale-up Networks(ESUN)" 이니셔티브 하에 고밀도 scale-up/scale-out AI 인프라용 오픈 이더넷 랙스케일 포트폴리오 발표(발표일 10/7, 10/17~19 보도 지속) | 2026-10-07(발표), 10/17~19(지속 보도) | Arista 보도자료 · https://www.arista.com/en/company/news/press-release [P1] |
| ANET | Q3 2026 실적 일정 | 2026-11-03(화) 장마감 후 발표 예정 | — | 회사 IR [P1] |
| CRDO | 1.6T ZeroFlap Active Light Cable 공개 | AI 데이터센터용 row-scale 광학 인터커넥트로 업계 최초 주장 — SENKO와 공동 개발한 마이크로 에미터 블라인드메이트 광학 백플레인 아키텍처로 기존 구리 백플레인 대비 최대 10배 대역폭 주장. 50m 도달거리, MTBF 1억 시간 | 2026-10월 중순(정확 일자는 IR 페이지 기준 확인 필요) | Credo IR · https://investors.credosemi.com/news-events/news/news-details/2026/Credo-Unveils-1-6T-ZeroFlap-Active-Light-Cable... [P1] |
| CRDO | 차기 실적 일정 | 2026-12-02(FY2027 2분기) 실적 발표 예정 | — | 회사 IR/stockanalysis.com [P1] |
| CLS | DS6005 데이터센터 스위치 출시 | 공동패키지 광학(Co-Packaged Optics) 적용 데이터센터 스위치 출시(전력 효율 개선 주장) | 2026-10-12 | Kalkine · https://kalkine.ca/news/technology/celesticas-ai-data-centre-switch-launch-meets-a-sudden-semiconductor-pullback-tsxcls [P3] |
| CLS | FY2026 가이던스 상향 | 매출 가이던스 ~$19B→~$20.5B, 조정 EPS 가이던스 ~$10.15→~$11.30, 조정 영업이익률 가이던스 8.1%→8.4%로 상향. 하이퍼스케일러 고객向 고속 네트워킹 프로그램 양산 확대가 배경으로 보도됨. 10/27 실적발표·투자자의 날 예정 | 2026-10-16(보도) | Kalkine · https://kalkine.ca/news/technology/celestica-inc-tsxcls-why-this-toronto-stock-exchange-stock-is-drawing-investor-attention-on-16-october-2026 [P3] |
| VRT | FY2026 가이던스 상향(직전 분기 발표분, 참고) | 매출 가이던스 $13.80~14.20B, 조정 EPS $6.65~6.75. 수주잔고(backlog) $15B 이상, 2027년까지 매출 가시성 확보라고 CEO 언급 | 보도일 2026-10-19(해설), 원 가이던스는 직전 분기 발표분 | Motley Fool · https://www.fool.com/investing/2026/10/19/where-will-vertiv-stock-be-in-1-year/ [P3] |
| VRT | Q3 2026 실적 일정 | 2026-10-28 장시작 전 발표 예정, 자체 가이던스는 매출 $3.65~3.85B | — | 상동 [P3] |
| SMCI | CFO 신규 선임 | Mark Long을 SVP 겸 CFO로 선임, CEO Charles Liang에게 직접 보고 | 2026-10-15 | 2차 집계(MarketBeat/StockTitan) [P3] |
| SMCI | 증권 소송 각하 | 법원이 SMCI 증권 소송을 각하하되 투자자에 소장 수정 기회를 부여 | 2026-10-16 | 2차 집계 [P3] |
| APLD | FY2027 1분기 실적 발표 | 매출 $341.9M(+322% YoY). 발표 후 주가 +9.67% | 2026-10-19 | StocksToTrade · https://stockstotrade.com/news/applied-digital-corp-apld-news-2026_10_19/ [P3] ; Benzinga(CEO 코멘트) [P2] |
| APLD | CEO 코멘트(리스 가격) | CEO Wes Cummins, 연말까지 250MW 규모 AI 데이터센터 확장 리스 계약을 기존 계약 대비 15% 이상 높은 단가로 확보할 것으로 예상한다고 언급(전력 제약에 따른 "희소가치" 설명) | 2026-10-19 | Benzinga · https://www.benzinga.com/markets/earnings/26/10/62241095 [P2] |
| APLD | JPMorgan 채권 등급 하향 | JPMorgan이 Applied Digital의 프로젝트 파이낸스 채권 등급을 Overweight→Neutral로 하향, 공급 과잉 우려를 사유로 제시. 하향 발표 당일 주가 -4% | 2026-10-17 | Foreign Policy Journal · https://www.foreignpolicyjournal.com/2026/10/17/applied-digital-nasdaq-apld-stock-slides-4-as-jpmorgan-bond-downgrade-deepens-debt-funded-ai-builder-selloff/ [P3] |

> 메모리(HBM/DRAM/NAND) 공급망 관련 수치(HBM 현물가, GPU 렌탈 가격 급등 등)는 1차 와이어 통신사가 아닌 업계 트래커(substack 등) 출처만 확인되어 이번 회차에는 싣지 않음 — 확인 필요.

---

## [5-A] AI 인프라 — 수요 측 / 하이퍼스케일러 CAPEX 〔실적시즌 임박, 신규 확정 가이던스 없음〕

신규 변동 없음 — docs/data/facts.json에 직전 CAPEX 확인값 보유하지 않음. Microsoft·Alphabet·Meta·Amazon 4사 모두 차기(2026년 3분기) 실적을 10/21~10/29 사이 발표 예정이며, 그 전까지 공식 CAPEX 가이던스 갱신 없음.

| 기업 | 차기 실적 발표일(확정) | 출처+태그 |
|------|--------------------------|-----------|
| Meta | 2026-10-21(수) 장마감 후, 컨콜 16:30 ET | StockTitan · https://www.stocktitan.net/news/META/meta-to-announce-third-quarter-2026-xthjv1vpcuwo.html [P1] |
| Microsoft | 2026-10-28(수) 장마감 후, 16:00 ET | SEC 8-K/IR 자료 기반 2차 집계 [P3] |
| Alphabet | 2026-10-28(수) 장마감 후, 컨콜 16:30 ET | MarketBeat · https://www.marketbeat.com/earnings/reports/2026-10-28-alphabet-inc-stock/ [P2] |
| Amazon | 2026-10-29(목) | 2차 집계 [P3] |

> 직전(2026년 7월, Q2 2026) 실적에서 제시된 CAPEX 가이던스 수치는 이번 조사에서 2차 집계 출처(aggregator)만 확인되어 1차 IR/8-K 대조 전까지 구체적 금액은 싣지 않음 — 확인 필요.

---

## [6] 시총 상위 10 — AI 무관 일반 이슈

| 기업 | 사실 내용 | 출처일자 | 출처+태그 |
|------|-----------|----------|-----------|
| MSFT | 2026년 10월 Patch Tuesday — 1,411건 취약점 패치, 제로데이 3건(1건 활발히 악용, 2건 공개됨 비공개 악용 미확인), "Critical" 등급 70건(RCE 57·권한상승 11·스푸핑 2) | 2026-10월 | BleepingComputer · https://www.bleepingcomputer.com/news/microsoft/microsoft-october-2026-patch-tuesday-fixes-1-411-flaws-3-zero-days/ [P3] |
| MSFT | Windows 11 24H2 Home/Pro, Windows 10 Enterprise LTSB 2016 지원 종료. Exchange Server 2016/2019 Period-2 ESU 고객 보안 업데이트 제공 마지막 달 | 2026-10월 | Microsoft Tech Community · https://techcommunity.microsoft.com/blog/exchange/released-october-2026-exchange-server-security-updates/4563014 [P1] |
| AAPL | iPhone Duo 10/23 출시를 앞두고 공급 제약이 심해 매장 직원들에게 워크인 구매 자제를 안내하도록 지시, 다만 사전예약은 그대로 진행 | 2026-10-17 | MacRumors · https://www.macrumors.com/2026/10/17/staff-warn-against-iphone-duo-walk-ins/ [P3] |
| AAPL | Greg Joswiak가 SNS에 "Pro and Tell" 신제품 행사를 다음 주로 예고(신형 OLED 터치스크린 MacBook Pro, M6 보급형 MacBook Pro, M6 iMac 등 루머) | 2026-10-19 | MacRumors · https://www.macrumors.com/2026/10/19/apple-pro-and-tell/ [P3] |
| AMZN | 2025년 말 이후 누적 약 3만 명 규모 구조조정이 10월에도 계속됨(고객서비스·셀링파트너 지원·리테일 엔지니어링 등 영향, 미국·인도·영국 포함) | 2026-10월 | 2차 집계 https://beinsure.com/news/amazon-layoffs-continue-in-october-after-30k-job-cuts/ [P3] |
| AMZN | Morgan Stanley가 AMZN을 top pick으로 재확인, 목표주가 $335→$350로 상향 | 2026-10-19 | CNBC · https://www.cnbc.com/2026/10/18/stock-market-today-live-updates.html [P2] |
| META | 자동화 보안 시스템이 전국 "No Kings" 시위를 앞두고 "No Kings Coalition" 인스타그램 계정을 오탐으로 정지시킨 것으로 확인, Meta가 사과 | 2026-10-18 | Bloomberg · https://www.bloomberg.com/news/articles/2026-10-18/meta-says-claude-ai-tool-triggered-no-kings-instagram-suspension [P2] |
| META | 광고주·퍼블리셔 대상 신규 이용약관에 대해 매체·법조계가 "데이터 그랩"이라고 비판, AI 라이선스 비용 회피 목적이라는 지적도 보도됨 | 2026-10-19 | AdExchanger · https://adexchanger.com/daily-news-roundup/monday-19102026 [P3] |
| BRK | 버핏의 CEO 퇴임 발표 이후 최고 주가로 반등. 버핏(10/18)은 버크셔의 미래에 대해 "최고로 느낀다"고 언급 | 2026-10-17~18 | CNBC · https://www.cnbc.com/2026/10/17/berkshire-rally-to-highest-since-buffett-announcement.html [P2] |
| BRK | Bending Spoons 지분을 주당 $33에 신주 1,000만 주(약 $330M) 추가 매입해 지분율 약 4%로 확대(7월 나스닥 상장 당시 $600M 투자에 추가) | 2026-10-17 | CNBC · https://www.cnbc.com/2026/10/17/bending-spoons-wants-to-revive-software-castoffs-berkshire-investing.html [P2] |
| TSLA | 신형 로드스터 생산 발표(2028년), SpaceX 유래 압축가스 추진 기술로 0→60mph 1초 미만 가속 주장. 발표 후 프리마켓 주가 +5% | 2026-10-17 | GuruFocus · https://www.gurufocus.com/news/9128994 [P3] |
| TSLA | 위임장(proxy) 공시에서 Tesla-SpaceX 합병 가능성을 시사하는 정황 다수 확인(겸임 이사, 3개 안건 투표, 자동투표 프로그램, 거래가 기준 머스크 보수 조건 등) | 2026-10-19 | Electrek · https://electrek.co/2026/10/19/tesla-tsla-proxy-annual-meeting-spacex-merger/ [P3] |
| TSLA | Q3 2026 실적 발표 2026-10-21(수) 예정. 연례 주주총회는 2026-12-03 기가팩토리 텍사스에서 개최(기준일 10/13) | 2026-10-19 | 2차 집계(다수 매체) [P3] |
| NVDA/AVGO/TSM | [5]에서 다룬 AI 인프라 관련 외 비AI 일반 이슈 확인 안 됨 | — | N/A |

---

## [7] 기관·대형 자금 수급

| 항목 | 종목 | 사실 내용 | 규모(수치) | 출처+태그 |
|------|------|-----------|------------|-----------|
| ETF 자금흐름 | SMH | 2026-10-14 기준 +$617.7M 유입(10/17~19 구간 공식 수치는 집계 지연으로 미확인) | +$617.7M(10/14 기준) | ETF.com 신디케이션(Yahoo Finance) · https://finance.yahoo.com/markets/options/articles/etf-fund-flows-semiconductors-leveraged-210004370.html [P3] |
| ETF 자금흐름 | QQQ | 10/19자 기사에서 인용된 수치가 실제로는 10/14 기준 유입액(+$1.66B)이라고 본문에 명시됨 — 10/17~19 구간 공식 수치 미확인 | +$1.66B(10/14 기준, 10/19 보도) | 24/7 Wall St · https://247wallst.com/investing/etf/2026/10/19/qqq-pulled-in-1-66-billion-the-same-index-trades-under-a-cheaper-ticker/ [P3] |
| ETF 자금흐름 | SOXX | N/A — 10/17~19 구간 공식 수치 확인 안 됨(상이한 기사 간 날짜 불일치로 신뢰도 낮음) | N/A | N/A |
| 옵션/블록딜 | SPX/QQQ/반도체 | N/A — 10/19 관련 구체적 계약 단위 수치는 매체 간 불일치(일부는 날짜가 10/2·10/6 등으로 과거 캐시 자료로 추정)로 신뢰 확인 안 됨 | N/A | N/A |

> SMH·SOXX·QQQ는 13F 시차 밖의 일간 프록시로 제공되는 보도 기준 수치이며, 추정으로 메우지 않음.

---

## [7-A] Insider Trading (SEC Form 4)

N/A — Form 4 신규 공시 없음(2026-10-17~10-19 구간, NVDA·AVGO·CRDO·CLS·APLD·VRT·SMCI 대상 확인). 가장 근접한 공시는 10/4~10/16 사이로 조사 구간 밖임(예: APLD 대표이사 Wes Cummins 10/16 자사주 매입 55,803주 @$18.04, SMCI CEO Charles Liang 10/7 10b5-1 계획에 따른 매도 10만주 @$45.02 등 — 전부 조사 구간 이전 공시).

---

## [8] 향후 14일 주요 일정 (2026-10-20 ~ 2026-11-03)

**경제·연준 일정**

| 날짜(ET) | 시각(ET) | 구분 | 이벤트 | 직전값 | 예상값 | 예상출처 | 출처 |
|----------|----------|------|--------|--------|--------|----------|------|
| 2026-10-20 | 08:30 | macro | 9월 주택착공(Housing Starts, 연율) | 1.275M | N/A | N/A(승인 출처 미확인) | Investing.com 주간전망 https://www.investing.com/news/stock-market-news/us-economic-calendar-preview-key-releases-for-the-week-of-oct-1923-2026-93CH-4958178 |
| 2026-10-22 | 08:30 | macro | 신규 실업수당 청구(주간, 10/17 종료주) | | N/A | N/A(승인 출처 미확인) | 상동 |
| 2026-10-23 | 09:45 | macro | 10월 S&P Global 제조업 PMI(속보치) | 55.9 | N/A | N/A(승인 출처 미확인) | 상동 |
| 2026-10-23 | 09:45 | macro | 10월 S&P Global 서비스업 PMI(속보치) | 58.8 | N/A | N/A(승인 출처 미확인) | 상동 |
| 2026-10-23 | 10:00 | macro | 10월 미시간대 소비자심리지수(확정치) | | N/A | N/A | Econoday 일정(날짜만 확인) |
| 2026-10-27 | 08:30 | macro | 9월 내구재수주(속보치, MoM) | | N/A | N/A(비승인 출처만 확인) | N/A |
| 2026-10-27 | 14:00(10/27)~14:30(10/28) | fed | FOMC 회의(10/27 비공개) 및 금리결정 발표(10/28 14:00 ET)·기자회견(14:30 ET). 이번 회의 SEP(점도표) 없음 | — | 동결 우세(CME FedWatch 인용 보도, [2] 참고) | Fed 공식 일정 | 다수 매체 교차확인 |
| 2026-10-27 | 10:00 | macro | 9월 신규주택판매 | | N/A | N/A | N/A |
| 2026-10-27 | 10:00 | macro | 10월 컨퍼런스보드 소비자신뢰지수 | | N/A | N/A | FinanceCalendar(날짜만) https://www.financecalendar.com/event/us-consumer-confidence-october-2026/ |
| 2026-10-29 | 08:30 | macro | 2026년 3분기 GDP(속보치, QoQ 연율) | | N/A | N/A | N/A(날짜만 확인, macrobullseye) |
| 2026-10-29 | 08:30 | macro | 신규 실업수당 청구(주간, 10/24 종료주) | | N/A | N/A | N/A |
| 2026-11-03 | 10:00 | macro | 9월 JOLTS 구인건수 | | N/A | N/A | FinanceCalendar(날짜만) |

> 예상값 승인 출처(Reuters/Bloomberg/WSJ·Dow Jones/FactSet/Briefing/MarketWatch/CNBC)로 확인된 컨센서스가 없어 전부 N/A 처리함 — 이번 주 CPI·PCE·고용보고서 등 ★★ 이상 지표 발표 자체가 없어 3일 전 컨센서스 선수집 대상도 해당 없음.
> 금일(10/19) 기준 정부 셧다운 없음 — 2026-09-02 서명된 임시예산안으로 2026-12-11까지 정부 자금 조달 확정, 통상 BLS/BEA 일정 그대로 적용됨.

**기업 이벤트**

| 날짜(ET) | 시각(ET) | 기업 | 티커 | 이벤트 | 출처 |
|----------|----------|------|------|--------|------|
| 2026-10-28 | 09:00 | Parker-Hannifin | PH | 연례 주주총회(클리블랜드 본사, 웹캐스트) | Parker-Hannifin IR https://investors.parker.com/news-events/ir-calendar/detail/20261028-parker-hannifin-2026-annual-meeting-of-shareholders [P1] |
| 2026-12-03 | — | Tesla | TSLA | 연례 주주총회(기가팩토리 텍사스, 기준일 10/13) | 2차 집계(다수 매체) [P3] |

> 실적 일정(Meta 10/21, MSFT·Alphabet 10/28, Amazon 10/29, AMD 11/3, Arista 11/3, Vertiv 10/28 등)은 [5]/[5-A]에 이미 기재했으며 여기서 반복하지 않음.

---

## [9] 오늘의 사실 목록 (순위 없음)

```
[1] S&P500 7,690.73(+0.41%), 나스닥 26,430.89(+1.11%), 다우 51,966.03(-0.07%), 러셀2000 2,728.3(+0.25%), SOX 11,316.34(+1.61%) · Yahoo chart API [P1]
[1] 나스닥·SOX 반등은 "전주 과매도 기술주 반등" 및 반도체 ETF(SMH) 9거래일 연속 하락 종료로 보도됨 · CNBC [P2]
[1-A] VIX 18.44(-7.75%), VIX9D 17.93(-10.88%), VIX3M 19.6(-4.39%), VVIX 106.93(-2.71%), SKEW 161.86(-3.99%) — 기간구조 콘탱고(VIX3M/VIX 1.063, VIX/VIX9D 1.028) · Yahoo chart API [P1]
[1-A] SPX P/C(거래량) 1.196 / QQQ P/C(거래량) 1.172 · CBOE 지연시세 [P1]
[2] FRED 기준(10/16) 2년물 4.74%(-3.0bp), 10년물 5.09%(-1.0bp), 10Y-2Y 0.35%p(+2.0bp) · FRED [P1]
[2] CME FedWatch(10/28 FOMC): 동결 약 87.3% / 25bp 인상 약 12.7%(최종확인 10/17 이월) · CME FedWatch [P1]
[2] Fed 의장 Kevin Warsh, 10/16 방콕 발언 — AI 투자 확산을 "근단기 수요 충격"으로 평가, 차기 회의 사전 신호 거부 · CNBC [P2]
[2] 10/27~28 FOMC 회의, 10/28 14:00 ET 금리결정 발표(이번 회의 SEP 없음) · Fed 공식 일정 [P1]
[3] 금일 CPI·PCE·PPI·GDP·고용지표 등 발표 없음 · N/A
[3] NAHB 주택시장지수 10월 29(예상 31, 이전 32) — 2012년 6월 이후 최저치 · NAHB [P1]
[4] Cleveland-Cliffs +15.7%(GuruFocus) — Q3 실적 서프라이즈 · GuruFocus [P3]
[4] SanDisk +5.7~7.4%, Marvell +6.2~7.3% — 반도체·메모리 섹터 반등 동반 상승 · CNBC [P2]
[4] Datadog +4.7~6.98% — Bernstein SocGen 투자의견 상향 · GuruFocus [P3]
[4-A] JPMorgan, JPM Coin 이더리움 메인넷 배포 · Yahoo(Finnhub) [P3]
[4-A] UNH 등 다수 상장사, OKX-ICE 토큰화 상장 계획에 반대 표명 · Yahoo(Finnhub) [P3]
[5] Nscale-Anthropic 2차 ~$45B 컴퓨팅 계약 협의(미확정) · Bloomberg [P2]
[5] Microsoft, 英 Essex Nscale 데이터센터 계약(Nvidia 칩 2.3만개) 철회 — 전력 공급 불가 사유 · Yahoo(Reuters) [P2]
[5] TSMC Q3 2026 순이익 +68.7% YoY, 매출 +50.9% YoY(10/15 발표, 참고) · Benzinga [P2]
[5] TSMC 2026 capex $60~64B 재확인, 텍사스 투자 확대 검토 · Washington Times [P2]
[5] Credo, 1.6T ZeroFlap Active Light Cable 공개 · Credo IR [P1]
[5] Celestica, FY2026 매출 가이던스 ~$19B→~$20.5B 상향 · Kalkine [P3]
[5] Applied Digital FY27 1Q 매출 +322% YoY, JPMorgan 채권 등급 하향(10/17) · Benzinga/Foreign Policy Journal [P2/P3]
[5-A] Meta·MSFT·Alphabet·Amazon 4사 모두 10/21~10/29 사이 Q3 실적 발표 예정, 신규 CAPEX 가이던스는 발표 전까지 없음 · 2차 집계 [P3]
[6] Tesla, 2028년형 로드스터 생산 발표(SpaceX 추진기술) · GuruFocus [P3]
[6] Tesla 위임장에서 SpaceX 합병 가능성 시사 정황 다수 확인 · Electrek [P3]
[6] Berkshire, 버핏 퇴임 발표 후 최고가 경신, Bending Spoons 지분 추가매입($330M) · CNBC [P2]
[6] Meta, "No Kings" 인스타그램 계정 오탐 정지 후 사과 · Bloomberg [P2]
[7] SMH ETF +$617.7M 유입(10/14 기준), QQQ +$1.66B 유입(10/14 기준) — 10/17~19 구간 공식 수치는 미확인 · ETF.com/24-7 Wall St [P3]
[7-A] NVDA·AVGO·CRDO·CLS·APLD·VRT·SMCI Form 4 신규 공시 없음(조사 구간 내) · N/A
[8] 10/27~28 FOMC, 10/23 플래시 PMI, 10/29 GDP 속보치, 11/3 JOLTS 등 일정 확인 · 다수 매체 교차확인 [P2/P3]
```
