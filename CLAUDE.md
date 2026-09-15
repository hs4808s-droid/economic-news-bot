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
| 0 | `fetch_market_data.js` (코드) | `logs/<날짜>/0_data.md` — 선물·VIX 구조·Put/Call·섹터 뉴스 (API 기계 수집) |
| 1 | `prompts/1_collect.md` (LLM) | `logs/<날짜>/1_collect.md` — 사실만. 0_data.md를 먼저 Read해 그대로 인용 |
| 2 | `prompts/2_analyze.md` (LLM) | `logs/<날짜>/2_analysis.md` — ★ 등급·해석 (파일명 `analysis`) |
| 3 | `prompts/3_report.md` (LLM) | `logs/<날짜>/3_report.md` — 통합 리포트 |
| 4 | `build_email.js` (코드) | `logs/<날짜>/email_to_send.txt` — 마크다운→plain text 변환 + URL 삽입 |
| 5 | `build_site.js` (코드) | `docs/reports/<날짜>.html` + `docs/index.html` |
| 6 | GitHub Actions | 커밋 & push → GitHub Pages 자동 반영 |
| 7 | `send_email.js` (코드) | Gmail API로 실제 발송 (하루 1통 — `.emailed` 마커로 중복 방지) |

- 각 단계는 이전 단계 파일을 입력으로 사용한다.
- **실제 메일 발송은 Claude가 직접 하지 않는다.** 4단계는 텍스트 파일만 만들고, `send_email.js`가 Gmail API로 읽어 발송한다 (Gmail 공식 MCP 커넥터는 create_draft만 지원해 자동 발송이 불가능하기 때문).
- **Claude 세션 사용량 절약**: 1·2·3단계만 LLM(`claude -p`)을 쓰고, 판단이 필요 없는 4·5·7단계(형식 변환·사이트 빌드·발송)는 코드로 처리한다. 2·3단계는 자체 규칙상 검색이 필요 없어 `--allowedTools`에서 WebSearch를 아예 빼둔다.
- 0단계가 실패해도 파이프라인은 계속 간다. 해당 수치는 `N/A`로 남는다 — **추정치로 메우지 않는다.**

## 실행 환경
- GitHub Actions(`.github/workflows/daily.yml`)에서 매 거래일 실행. 로컬 PC 불필요.
- cron: `30 21 * * 1-5` UTC(월~금 21:30) = KST 화~토 06:30. 러너 TZ는 `Asia/Seoul`로 고정.
- 자격증명은 전부 GitHub Secrets: `CLAUDE_CODE_OAUTH_TOKEN` · `FINNHUB_API_KEY` · `GMAIL_CLIENT_ID` · `GMAIL_CLIENT_SECRET` · `GMAIL_REFRESH_TOKEN`
- **저장소가 public이다.** 자격증명 파일(`gmail_*.json`)은 `.gitignore`로 차단돼 있다. 절대 커밋하지 말 것.

## 로컬 명령
```
npm run check    # 데이터 수집 자가 점검 (외부 API 연결 확인)
npm run data     # 0_data.md만 생성
npm run email    # email_to_send.txt만 재생성 (Claude 미사용)
npm run site     # docs/ HTML 재빌드
bash run_daily.sh  # 전체 파이프라인
```
