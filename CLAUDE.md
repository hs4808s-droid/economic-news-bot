# Economic News Bot

매일 미국 시장 중심 경제 뉴스를 수집·분석하여 한국어 리포트로 정리하고 이메일로 발송하는 프로젝트.

## 고정 지침
- 대상 범위: 미국 시장 (증시 지수, 연준/금리, 주요 경제지표, 특징 종목·뉴스)
- 출력 언어: 한국어
- 수신 이메일: hs4808s@gmail.com
- 실행 순서: `prompts/1_collect.md` → `2_analyze.md` → `3_report.md` → `4_email.md`
- 각 단계 산출물은 `logs/<YYYY-MM-DD>/<단계번호>_<이름>.md`에 저장하고, 다음 단계는 이전 단계 파일을 입력으로 사용한다
- 실제 메일 발송은 Claude가 직접 하지 않는다. `4_email.md` 단계는 `logs/<날짜>/email_to_send.txt`(Subject 줄 + 빈 줄 + 본문)만 생성하고, `send_email.js`가 Gmail API로 그 파일을 읽어 발송한다 (Gmail 공식 MCP 커넥터는 create_draft만 지원해 자동 발송이 불가능하기 때문)
- 추측이나 출처 불명 정보를 단정적으로 쓰지 말 것. 검색으로 확인되지 않은 수치는 생략하거나 "확인 필요"로 표시한다
