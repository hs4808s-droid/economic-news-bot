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
| 1b | `scripts/update_calendar.js` · `update_facts.js` · `build_tickers.js` (코드) | `docs/data/calendar.json`(2주 일정 원장, 누적) · `facts.json`(CAPEX·FedWatch) · `tickers.json`(티커 마스터) |
| 2 | `prompts/2_analyze.md` (LLM) | `logs/<날짜>/2_analysis.md` — ★ 등급·해석·섹터 카드·전일 판단 점검 (파일명 `analysis`) |
| 3 | `prompts/3_report.md` (LLM) | `logs/<날짜>/3_report.md` — `## 0.`~`## 9.` 고정 구조. 숫자 표 자리는 `<!-- DASHBOARD -->`·`<!-- CALENDAR -->` 마커 |
| 3b | `inject_dashboard.js` (코드) | 마커 자리에 0_data.json·calendar.json 기반 표 삽입 (메일·사이트가 같은 숫자를 받는다) |
| 3c | `scripts/validate_report.js` (코드) | 섹션·티커 표기·수치(↔0_data.json) 검증 → `logs/<날짜>/validate.md`. 실패해도 LLM 재호출 없이 상단 경고 배너만 달아 게시, 파이프라인은 계속 |
| 4 | `build_email.js` (코드) | `logs/<날짜>/email_to_send.txt` — 마크다운→plain text 변환 + URL 삽입 |
| 5 | `build_site.js` (코드) | `docs/reports/<날짜>.html` + `docs/index.html` + `docs/data/summaries.json` (스타일·스크립트는 `docs/assets/site.css`·`site.js`) |
| 6 | GitHub Actions | 커밋 & push → GitHub Pages 자동 반영 |
| 7 | `send_email.js` (코드) | Gmail API로 실제 발송 (하루 1통 — `.emailed` 마커로 중복 방지) |

- 각 단계는 이전 단계 파일을 입력으로 사용한다.
- **실제 메일 발송은 Codex가 직접 하지 않는다.** 4단계는 텍스트 파일만 만들고, `send_email.js`가 Gmail API로 읽어 발송한다 (Gmail 공식 MCP 커넥터는 create_draft만 지원해 자동 발송이 불가능하기 때문).
- **Claude 세션 사용량 절약**: 1·2·3단계만 LLM(`claude -p`)을 쓰고, 나머지(수집·원장·삽입·검증·변환·빌드·발송)는 전부 코드다. 2·3단계는 자체 규칙상 검색이 필요 없어 `--allowedTools`에서 WebSearch를 아예 빼둔다. 새 LLM 단계를 추가하지 않는다.
- 0단계가 실패해도 파이프라인은 계속 간다. 해당 수치는 `null`+`error`(→ 리포트에서 `N/A`)로 남는다 — **추정치로 메우지 않는다.** non-zero 종료는 `--check`에서만 한다. 검증기는 JSON 값이 null이면 N/A를 허용하고, 값이 있는데 리포트가 N/A라고 쓰면 실패로 본다.
- **화면 변경은 `build_site.js`(템플릿)와 `docs/assets/`에서만 한다.** `docs/index.html`·`docs/reports/*.html`은 매일 통째로 재생성된다. 매일 갱신되는 원장은 `docs/data/`에 둔다(워크플로가 `docs logs`만 커밋한다). 사람이 커밋하는 설정은 `config/`.
- 리포트 파일명·폴더명 날짜는 **KST 작성일**이다. 미국 기준일은 `us_date`(summaries.json·카드)로 따로 표시한다.

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
npm run verify    # DoD-1 데이터 정확성 검증 (시세·교차·캘린더·티커)
npm run e2e       # DoD-2 Playwright 클릭 테스트 (먼저: npx http-server docs -p 8080 -s) — 라이브: node scripts/e2e_site.js --base <URL> --tag live
npm test          # 코드 단계 단위 테스트(selftest) 전부
bash run_daily.sh # 전체 파이프라인 (테스트용: REPORT_DATE · LOG_NAME · RUN_STEPS 환경변수)
```
- Playwright(`playwright-core`)는 devDependency다. Actions 일일 실행은 `npm ci --omit=dev`라 설치하지 않는다. 브라우저는 로컬 캐시(`ms-playwright`) 또는 `CHROME_PATH`를 쓴다.
