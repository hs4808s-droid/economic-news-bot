#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")"

# 날짜는 항상 KST 기준. (GitHub Actions 러너는 UTC라 그냥 date를 쓰면 하루가 어긋난다)
DATE=$(TZ=Asia/Seoul date +%F)
LOG_DIR="logs/$DATE"
mkdir -p "$LOG_DIR"

echo "=== 기준일 $DATE ==="

# Claude 세션 사용량을 아끼기 위해 단계별로 정말 필요한 도구만 허용한다.
# (2·3단계는 자체 규칙상 "새 사실을 지어내지 않는다/검색하지 않는다"이므로
#  WebSearch를 애초에 주지 않아 어길 여지 자체를 없앤다.)
run_step() {
  local prompt_file="$1"
  local out_file="$2"
  shift 2
  local tools=("$@")

  claude -p "$(cat "$prompt_file")" \
    --allowedTools "${tools[@]}" \
    > "$out_file" 2> "${out_file%.md}.err.log"
}

# 0단계: API에서 시장 수치를 기계 수집한다. 실패해도 파이프라인은 계속 간다
# (1단계 프롬프트가 0_data.md 부재를 N/A로 처리하도록 되어 있다).
echo "[0/6] 시장 데이터 수집"
if ! node fetch_market_data.js "$DATE" > "$LOG_DIR/0_data.run.log" 2>&1; then
  echo "  경고: 시장 데이터 수집 실패 — $LOG_DIR/0_data.run.log 확인. 검색 기반으로 계속 진행." >&2
fi

echo "[1/6] 수집(Collect)"
run_step "prompts/1_collect.md" "$LOG_DIR/1_collect.run.log" WebSearch Read Write
echo "[2/6] 분석(Analysis)"
run_step "prompts/2_analyze.md" "$LOG_DIR/2_analyze.run.log" Read Write
echo "[3/6] 리포트 통합"
run_step "prompts/3_report.md" "$LOG_DIR/3_report.run.log" Read Write

# 4단계: 발송용 텍스트 생성 — 마크다운 제거 + URL 삽입뿐이라 판단이 필요 없다.
# claude -p 호출 없이 코드로 처리해 하루 4번 중 1번의 Claude 세션 사용을 없앤다.
echo "[4/6] 발송용 텍스트 생성 (코드 변환, Claude 미사용)"
node build_email.js "$DATE"

# 5단계: 리포트를 HTML로 빌드한다. GitHub Pages가 docs/를 서빙한다.
echo "[5/6] HTML 사이트 빌드"
node build_site.js

# 실제 발송은 Claude가 아니라 Gmail API를 직접 호출하는 스크립트가 담당한다.
# 메일 실패가 리포트 게시를 막아서는 안 되므로 종료코드를 전파하지 않는다.
#
# 하루 1통 제한: 같은 날짜에 이미 발송했다면 다시 보내지 않는다.
# 마커 파일(.emailed)은 git에 커밋된다 — GitHub Actions는 매번 새 VM에서 시작해
# 로컬 파일이 안 남으므로, 커밋된 마커만이 "오늘 이미 보냈다"를 다음 실행에 전달할 수 있다.
# (수동 재실행 시 이미 있는 산출물을 그대로 중복 발송하는 사고를 막기 위함.
#  일부러 다시 보내고 싶으면 "$LOG_DIR/.emailed"를 지우고 커밋한 뒤 재실행한다.)
if [ -f "$LOG_DIR/.emailed" ]; then
  echo "메일 발송 건너뜀 — 오늘 이미 발송함 ($LOG_DIR/.emailed 존재)"
elif node send_email.js "$LOG_DIR/email_to_send.txt" > "$LOG_DIR/5_send.log" 2> "$LOG_DIR/5_send.err.log"; then
  echo "메일 발송 성공" >> "$LOG_DIR/5_send.log"
  touch "$LOG_DIR/.emailed"
else
  echo "메일 발송 실패 - $LOG_DIR/5_send.err.log 확인" >&2
fi

echo "[6/6] 완료: $LOG_DIR"
