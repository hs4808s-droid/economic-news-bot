#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")"

# 날짜는 항상 KST 기준. (GitHub Actions 러너는 UTC라 그냥 date를 쓰면 하루가 어긋난다)
DATE=$(TZ=Asia/Seoul date +%F)
LOG_DIR="logs/$DATE"
mkdir -p "$LOG_DIR"

echo "=== 기준일 $DATE ==="

run_step() {
  local prompt_file="$1"
  local out_file="$2"

  claude -p "$(cat "$prompt_file")" \
    --allowedTools "WebSearch" "Read" "Write" \
    > "$out_file" 2> "${out_file%.md}.err.log"
}

# 0단계: API에서 시장 수치를 기계 수집한다. 실패해도 파이프라인은 계속 간다
# (1단계 프롬프트가 0_data.md 부재를 N/A로 처리하도록 되어 있다).
echo "[0/5] 시장 데이터 수집"
if ! node fetch_market_data.js "$DATE" > "$LOG_DIR/0_data.run.log" 2>&1; then
  echo "  경고: 시장 데이터 수집 실패 — $LOG_DIR/0_data.run.log 확인. 검색 기반으로 계속 진행." >&2
fi

echo "[1/5] 수집(Collect)"
run_step "prompts/1_collect.md" "$LOG_DIR/1_collect.run.log"
echo "[2/5] 분석(Analysis)"
run_step "prompts/2_analyze.md" "$LOG_DIR/2_analyze.run.log"
echo "[3/5] 리포트 통합"
run_step "prompts/3_report.md" "$LOG_DIR/3_report.run.log"
echo "[4/5] 발송용 텍스트 생성"
run_step "prompts/4_email.md" "$LOG_DIR/4_email.run.log"

# 5단계: 리포트를 HTML로 빌드한다. GitHub Pages가 docs/를 서빙한다.
echo "[5/5] HTML 사이트 빌드"
node build_site.js

# 실제 발송은 Claude가 아니라 Gmail API를 직접 호출하는 스크립트가 담당한다.
# 메일 실패가 리포트 게시를 막아서는 안 되므로 종료코드를 전파하지 않는다.
if node send_email.js "$LOG_DIR/email_to_send.txt" > "$LOG_DIR/5_send.log" 2> "$LOG_DIR/5_send.err.log"; then
  echo "메일 발송 성공" >> "$LOG_DIR/5_send.log"
else
  echo "메일 발송 실패 - $LOG_DIR/5_send.err.log 확인" >&2
fi

echo "완료: $LOG_DIR"
