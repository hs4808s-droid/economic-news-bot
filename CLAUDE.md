# Economic News Bot

매일 미국 시장 중심 경제 뉴스를 수집·분석하여 한국어 리포트로 정리하고,
GitHub Pages 홈페이지에 게시 + 이메일로 발송하는 프로젝트.

## 고정 지침
- 대상 범위: 미국 시장 (증시 지수, 선물·변동성 구조, 연준/금리, 주요 경제지표, 섹터·특징 종목 뉴스)
- 출력 언어: 한국어
- 수신 이메일: hs4808s@gmail.com
- 추측이나 출처 불명 정보를 단정적으로 쓰지 말 것. 검색으로 확인되지 않은 수치는 생략하거나 "확인 필요"로 표시한다

## 실행 순서 (`run_daily.sh`가 전부 순서대로 실행)
| 단계 | 실행 주체 | 산출물 |
|------|-----------|--------|
| 0 | `fetch_market_data.js` (코드) | `logs/<날짜>/0_data.md`(LLM용) · `0_data.json`(검증·사이트용) · `docs/data/latest.json` — 지수·선물·금리(FRED 2Y 포함)·VIX 구조·매크로·섹터 ETF 15종(1D/5D/1M/YTD·스파크라인)·Put/Call·섹터 뉴스. 종목 목록은 `config/universe.json` |
| 중복 확인 | `scripts/should_run.js` (코드) | 0_data.json 의 미국 기준일이 직전 리포트와 같으면 1~3단계·메일을 건너뛰고 `logs/<날짜>/skip.md`만 남긴다 (파일명은 계속 KST 작성일) |
| 1 | `prompts/1_collect.md` (LLM) | `logs/<날짜>/1_collect.md` — 사실만. 0_data.md·`docs/data/facts.json`을 먼저 Read해 그대로 인용. [8]은 코드가 파싱하는 ISO 날짜 표 |
| 1b | `scripts/update_calendar.js` · `calendar_facts.js` · `update_facts.js` · `build_tickers.js` (코드) | `docs/data/calendar.json`(2주 일정 원장, 누적) · `logs/<날짜>/calendar_facts.md`(2·3단계 인용용) · `facts.json`(CAPEX·FedWatch) · `tickers.json`(티커 마스터) |
| 2 | `prompts/2_analyze.md` (LLM) | `logs/<날짜>/2_analysis.md` — ★ 등급·해석·섹터 카드·전일 판단 점검 (파일명 `analysis`) |
| 3 | `prompts/3_report.md` (LLM) | `logs/<날짜>/3_report.md` — `## 0.`~`## 9.` 고정 구조. 숫자 표 자리는 `<!-- DASHBOARD -->`·`<!-- CALENDAR -->` 마커 |
| 3b | `inject_dashboard.js` (코드) | 마커 자리에 0_data.json·calendar.json 기반 표 삽입 (메일·사이트가 같은 숫자를 받는다) |
| 3c | `scripts/validate_report.js` (코드) | 섹션·티커 표기·수치(↔0_data.json) 검증 → `logs/<날짜>/validate.md`. 실패해도 LLM 재호출 없이 상단 경고 배너만 달아 게시, 파이프라인은 계속 |
| 4 | `build_email.js` (코드) | `logs/<날짜>/email_to_send.txt` — 마크다운→plain text 변환 + URL 삽입 |
| 5 | `build_site.js` (코드) | `docs/reports/<날짜>.html` + `docs/index.html` + `docs/data/summaries.json` (스타일·스크립트는 `docs/assets/site.css`·`site.js`) |
| 6 | GitHub Actions | 커밋 & push → GitHub Pages 자동 반영 |
| 7 | `send_email.js` (코드) | Gmail API로 실제 발송 (하루 1통 — `.emailed` 마커로 중복 방지) |

- 각 단계는 이전 단계 파일을 입력으로 사용한다.
- **실제 메일 발송은 에이전트가 직접 하지 않는다.** 4단계는 텍스트 파일만 만들고, `send_email.js`가 Gmail API로 읽어 발송한다 (Gmail 공식 MCP 커넥터는 create_draft만 지원해 자동 발송이 불가능하기 때문).
- **Claude 세션 사용량 절약**: 1·2·3단계만 LLM(`claude -p`)을 쓰고, 나머지(수집·원장·삽입·검증·변환·빌드·발송)는 전부 코드다. 2·3단계는 자체 규칙상 검색이 필요 없어 `--allowedTools`에서 WebSearch를 아예 빼둔다. 새 LLM 단계를 추가하지 않는다.
- 0단계가 실패해도 파이프라인은 계속 간다. 해당 수치는 `null`+`error`(→ 리포트에서 `N/A`)로 남는다 — **추정치로 메우지 않는다.** non-zero 종료는 `--check`에서만 한다. 검증기는 JSON 값이 null이면 N/A를 허용하고, 값이 있는데 리포트가 N/A라고 쓰면 실패로 본다.
- **화면 변경은 `build_site.js`(템플릿)와 `docs/assets/`에서만 한다.** `docs/index.html`·`docs/reports/*.html`은 매일 통째로 재생성된다. 매일 갱신되는 원장은 `docs/data/`에 둔다(워크플로가 `docs logs`만 커밋한다). 사람이 커밋하는 설정은 `config/`.
- 리포트 파일명·폴더명 날짜는 **KST 작성일**이다. 미국 기준일은 `us_date`(summaries.json·카드)로 따로 표시한다.

## 경제지표 데이터 규칙 (2026-10-15 CPI 사고 이후 고정)
- **측정 기준 필수.** 원장(`docs/data/calendar.json`)의 macro 항목은 `metric`·`measure`(mom|yoy|qoq|level|index)·`unit`(%|K|index)·`seasonal`(sa|nsa)·`period`를 가진다. 원장 키는 `(발표일, metric, measure)` (`2026-10-14-CPI-yoy`). CPI·PCE는 헤드라인/근원 × MoM/YoY 4줄. 서프라이즈는 숫자(발표값−예상값)이며 %는 `%p`로 표시한다. 문자열 값("+0.6%")은 금지, 숫자+unit으로 저장한다.
- **발표값(actual)·직전값(prior)은 코드가 FRED에서 직접 채운다**(`lib/macro.js fredValue`, 규칙은 `config/macro_rules.json`). CPI 전월비=SA 지수(`CPIAUCSL`/`CPILFESL`), 전년비=NSA 지수(`CPIAUCNS`/`CPILFENS`) — BLS 공식 방식. LLM(Collect)은 일정·예상값·예상출처만 준다. LLM이 쓴 발표치는 원장에 들어가지 않는다.
- **예상값(consensus) 출처 우선순위 고정:** 1순위 시장 컨센서스(Reuters/Bloomberg/WSJ·Dow Jones/FactSet/Briefing/MarketWatch/CNBC 서베이). 클리블랜드 연은 nowcast·예측시장·개별 캘린더 값은 `consensus`에 쓰지 않고 `ref_consensus`(참고)로만 둔다. 1차 보도로 확인한 컨센서스는 `config/macro_consensus_verified.json`에 URL과 함께 둔다.
- **그럴듯함 검사(코드)와 비노출:** `lib/macro.js checkEvent`가 모든 원장 행을 검사한다(지표별 서프라이즈·직전값 이탈·범위 한도는 `config/macro_rules.json`; 실적은 서프라이즈 ±50%·EPS 기준(조정/GAAP) 불일치·매출 ±25%). 실패 행은 원장에 `hold`가 찍히고 사이트·리포트·메일에서 숫자 대신 `검증 대기`로 나온다. 실패해도 파이프라인은 계속된다.
- **실적:** 행마다 `eps_basis`(adjusted|gaap)와 출처(`src_url` 또는 "공급자(미검증)")를 표시하고, 실제 매출·매출 서프라이즈를 포함한다. 1차 출처(8-K Ex-99.1·IR)로 확인한 값은 `config/earnings_verified.json`이 덮어쓴다. 발표일이 지나면 예상치는 동결한다(발표 후 컨센서스 사후 갱신 방지).
- **검증 범위:** `verify_data.js`는 리포트가 아니라 원장 전체를 매일 검사하고, `validate_report.js`는 본문 CPI 수치를 원장과 대조한다. `npm test`의 회귀 테스트는 사고 케이스(MoM→YoY 칸·헤드라인/근원 혼합·중복·nowcast 출처)를 고정한다.

## 리포트 신뢰도·화면 규칙 (2026-10-17 점검 이후 고정)
- **마크다운 변환은 `lib/md.js`의 `marked`만 쓴다.** 취소선(`~`)을 끈 인스턴스다 — 범위 표기 `76.5~81센트`가 `76.581센트`로 깨지던 사고 방지. `build_site.js`·`build_email.js`가 직접 `require('marked')` 하지 않는다(회귀 테스트: `build_site.js`·`build_email.js --selftest`).
- **독자 화면(사이트·메일)은 `lib/sanitize.js readerMd()`를 거친다:** `[P1]`~`[P4]`·"Yahoo chart API 자동수집"·"facts.json 이월값"·"logs 폴더" 같은 내부 메모와 자동 검증 경고 배너를 지운다. 출처 URL은 리포트 맨 아래 "출처" 목록으로 모은다. 원본 `3_report.md`는 감사용으로 그대로 둔다. **자동 검증 경고는 독자 화면에 띄우지 않고 `validate.md`에만 남긴다**(`validate_report.js`는 배너를 달지 않는다).
- **실적 원장:** 같은 (티커, 분기)는 한 줄(`dedupeEarnings`). 날짜는 `config/earnings_dates.json`(회사 IR 확정)이 우선이고 확정 전 충돌은 `date_tbd`(날짜 미확정) 한 줄. 이미 발표된 종목은 `config/earnings_verified.json`(8-K/6-K/IR URL, 통화 `currency`, 기준 `eps_basis`·`eps_label`)이 덮어쓴다. 공급자 예상치를 못 믿으면 `cons_eps: null`로 비운다.
- **그럴듯함 검사 추가(`checkEarnings`):** 예상 EPS가 전년 동기의 3배 초과·1/3 미만, 전년 EPS 부호가 SEC XBRL 분기 이력(`lib/sec.js`)과 반대(BA 사례), 출처 간 예상 EPS 20% 초과 불일치(`cons_eps_alt`)면 `hold`(검증 대기). 서프라이즈가 실제 사건이라 한도를 넘는 지표는 BLS 등 1차 출처로 확인한 뒤 `macro_consensus_verified.json`에 `surprise_ok`로만 풀어 준다.
- **본문 ↔ 원장:** 2·3단계는 `logs/<날짜>/calendar_facts.md`(코드가 `calendar.json`에서 생성, `scripts/calendar_facts.js`)의 숫자·날짜만 인용한다. 이 파일은 "예상값이 없는 지표" 목록을 넘기고, 그 지표에는 "예상 상회/하회/부합/서프라이즈" 표현을 쓰지 못한다. `validate_report.js`가 본문 EPS·발표일(`checkEarningsBody`)과 해당 표현(`checkNoConsensusWords`)을 검사한다.
- **금리는 한 기준:** 2Y·10Y·10Y-2Y는 FRED 일별(같은 기준일). Yahoo `^TNX`·`^TYX`는 당일 참고용이라 본문에 FRED 값과 섞어 쓰지 않는다(검증기는 `Yahoo/장중` 라벨이 없으면 FRED 값만 허용). 사이트 타일의 10년물도 FRED.
- **Collect(2026-10-29 변경):** 토큰 절약을 위해 예상값(컨센서스)·직전값은 검색하지 않는다. [8]은 일자별 일정만 적고 해당 칸은 `N/A`. 발표값·직전값은 코드가 FRED에서 채운다. 따라서 예상값 없는 지표에는 '예상 상회/하회' 표현이 금지된다(기존 검증기 규칙 그대로).
- **LLM 입력 규칙(2026-10-29):** 2·3단계는 `docs/data/calendar.json`을 읽지 않는다(117KB). `calendar_facts.md`만 읽는다(지표·실적·연준·기업 이벤트 포함).
- **모델·사용량:** `run_daily.sh`가 `claude -p --model ${CLAUDE_MODEL:-sonnet} --output-format json`으로 실행한다. 단계별 토큰 사용량은 `logs/<날짜>/*.run.log`(JSON `usage`)에서 본다.
- **사이트 구조(`build_site.js` + `docs/assets/site.js`):** 홈 실적 탭 = 날짜·종목·예상·실제·서프라이즈 5열, 관심 종목(`config/watchlist.json`)·시총 4,000억 달러 이상(`featured`, `update_calendar.js markFeatured`)·최근 발표 검증 종목만. 지표·연준 탭 = 기본 ★★★, "전체 보기" 토글, 값 없는 일정은 한 줄 축약. 전체는 `docs/calendar.html`. 히트맵은 선택 기간 수익률 내림차순 5×3 고정 격자. 태그는 `config/tags.json` 고정 어휘·하루 최대 2개(코드가 점수로 계산, LLM 태그 줄은 무시). 정정은 `config/corrections.json` → 해당 리포트에만 7일 배너 + `docs/corrections.html`. 같은 미국 기준일 리포트는 목록에 가장 먼저 게시된 1건만 보이고 나머지 페이지는 삭제하지 않고 대표 리포트 안내를 단다. 미국 기준일이 작성일 이상이면 직전 미국 거래일로 보정한다.

## 실행 환경
- GitHub Actions(`.github/workflows/daily.yml`)에서 매 거래일 실행. 로컬 PC 불필요.
- 실행 트리거: 외부 cron-job.org가 KST 화~토 06:30에 `workflow_dispatch`를 호출한다(GitHub 자체 `schedule:`은 2시간 지연돼 제거함 — `daily.yml`에 `schedule:` 블록을 다시 추가하지 말 것). 러너 TZ는 `Asia/Seoul`로 고정.
- 자격증명은 전부 GitHub Secrets: `CLAUDE_CODE_OAUTH_TOKEN` · `FINNHUB_API_KEY` · `GMAIL_CLIENT_ID` · `GMAIL_CLIENT_SECRET` · `GMAIL_REFRESH_TOKEN`
- **저장소가 public이다.** 자격증명 파일(`gmail_*.json`)은 `.gitignore`로 차단돼 있다. 절대 커밋하지 말 것.

## 로컬 명령
```
npm run check     # 데이터 수집 자가 점검 (외부 API 연결·42개 심볼·FRED 파싱·기간 등락률 계산)
npm run data      # 0_data.md / 0_data.json / docs/data/latest.json 생성
npm run calendar  # docs/data/calendar.json 갱신 (Nasdaq/Finnhub + 1_collect [8])
npm run inject    # 3_report.md 의 DASHBOARD/CALENDAR 마커에 표 삽입
npm run validate  # 3_report.md 검증 (validate.md 작성, 실패 시 경고 배너)
npm run email     # email_to_send.txt만 재생성 (Claude 미사용, 발송 안 함)
npm run site      # docs/ HTML 재빌드
npm run verify    # DoD-1 데이터 정확성 검증 (시세·교차·원장 전체 검사·FRED 재계산·티커)
npm run e2e       # DoD-2 Playwright 클릭 테스트 (먼저: npx http-server docs -p 8080 -s) — 라이브: node scripts/e2e_site.js --base <URL> --tag live
npm test          # 코드 단계 단위 테스트(selftest) 전부
bash run_daily.sh # 전체 파이프라인 (테스트용: REPORT_DATE · LOG_NAME · RUN_STEPS 환경변수)
```
- Playwright(`playwright-core`)는 devDependency다. Actions 일일 실행은 `npm ci --omit=dev`라 설치하지 않는다. 브라우저는 로컬 캐시(`ms-playwright`) 또는 `CHROME_PATH`를 쓴다.
