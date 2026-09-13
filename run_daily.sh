#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")"

DATE=$(date +%F)
LOG_DIR="logs/$DATE"
mkdir -p "$LOG_DIR"

run_step() {
  local prompt_file="$1"
  local out_file="$2"

  claude -p "$(cat "$prompt_file")" \
    --allowedTools "WebSearch" "Read" "Write" \
    > "$out_file" 2> "${out_file%.md}.err.log"
}

run_step "prompts/1_collect.md" "$LOG_DIR/1_collect.run.log"
run_step "prompts/2_analyze.md" "$LOG_DIR/2_analyze.run.log"
run_step "prompts/3_report.md" "$LOG_DIR/3_report.run.log"
run_step "prompts/4_email.md" "$LOG_DIR/4_email.run.log"

# 실제 발송은 Claude가 아니라 Gmail API를 직접 호출하는 스크립트가 담당한다.
if node send_email.js "$LOG_DIR/email_to_send.txt" > "$LOG_DIR/5_send.log" 2> "$LOG_DIR/5_send.err.log"; then
  echo "메일 발송 성공" >> "$LOG_DIR/5_send.log"
else
  echo "메일 발송 실패 - $LOG_DIR/5_send.err.log 확인" >&2
fi

echo "완료: $LOG_DIR"
