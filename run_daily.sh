#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")"

# 날짜는 항상 KST 기준. (GitHub Actions 러너는 UTC라 그냥 date를 쓰면 하루가 어긋난다)
DATE=$(TZ=Asia/Seoul date +%F)
# 테스트용 오버라이드(실서비스에서는 쓰지 않는다):
#   REPORT_DATE   기준일 텍스트를 바꾼다
#   LOG_NAME      logs/ 아래 폴더명을 바꾼다 (예: _rerun — 실제 게시 이력을 건드리지 않고 LLM 단계를 시험)
#   RUN_STEPS     실행할 단계만 지정 (예: "2 3 inject validate") — 비우면 전부
DATE="${REPORT_DATE:-$DATE}"
LOG_NAME="${LOG_NAME:-$DATE}"
LOG_DIR="logs/$LOG_NAME"
mkdir -p "$LOG_DIR"

want() { [ -z "${RUN_STEPS:-}" ] || [[ " $RUN_STEPS " == *" $1 "* ]]; }

echo "=== 기준일 $DATE (logs/$LOG_NAME) ==="

# Claude 세션 사용량을 아끼기 위해 단계별로 정말 필요한 도구만 허용한다.
# (2·3단계는 자체 규칙상 "새 사실을 지어내지 않는다/검색하지 않는다"이므로
#  WebSearch를 애초에 주지 않아 어길 여지 자체를 없앤다.)
# Edit은 세 단계 모두 허용한다 — Write로 초안을 쓴 뒤 스스로 발견한 실수를
# 고치려다 Edit 권한이 없어 막히는 사고가 실제로 있었다(2026-09-16).
#
# 2026-09-16 사고: prompts/2_analyze.md 내용을 그대로 -p 인자로 넘겼더니
# "이건 그냥 기존 파일을 보여준 거 아니냐"고 되묻기만 하고 아무것도 안 만든
# 채로 끝났다(문서 대 지시 구분에서 헷갈린 것으로 보임). 그 결과 3단계도
# 입력이 없어 실패, 이메일도 발송되지 못했다. 앞에 실행 지시를 명시적으로
# 박아 "이건 참고자료가 아니라 지금 실행할 지침"임을 못박는다.
#
# EXTRA_CONTEXT: 프롬프트 앞에 붙이는 실행 정보(오늘 폴더명, 직전 리포트 경로 등).
run_step() {
  local prompt_file="$1"
  local out_file="$2"
  local expected_output="$3"
  shift 3
  local tools=("$@")

  claude -p "아래는 참고자료가 아니라 네가 지금 바로 실행할 지침이다. 되묻지 말고, 지침에 명시된 출력 파일을 실제로 생성/저장하는 것으로 끝까지 완료하라.
실행 정보: 기준일(KST 작성일)은 $DATE 이고, 지침의 \`logs/<오늘날짜 YYYY-MM-DD>\` 자리에는 \`logs/$LOG_NAME\` 폴더를 쓴다.
${EXTRA_CONTEXT:-}

---
$(cat "$prompt_file")" \
    --allowedTools "${tools[@]}" \
    > "$out_file" 2> "${out_file%.md}.err.log"

  # claude -p가 exit 0으로 끝나도 파일을 안 만들고 되묻기만 하고 끝날 수 있다
  # (실제로 있었던 사고). 다음 단계가 빈 입력으로 헛돌지 않도록 여기서 바로 끊는다.
  if [ ! -s "$expected_output" ]; then
    echo "오류: $prompt_file 실행 후에도 $expected_output 이 생성되지 않음 — $out_file 확인" >&2
    exit 1
  fi
}

# 0단계: API에서 시장 수치를 기계 수집한다. 실패해도 파이프라인은 계속 간다
# (1단계 프롬프트가 0_data.md 부재를 N/A로 처리하도록 되어 있다).
# 산출물: 0_data.md(LLM용) · 0_data.json(검증·사이트용) · docs/data/latest.json
if want 0; then
  echo "[0/6] 시장 데이터 수집"
  if ! node fetch_market_data.js "$DATE" --out "$LOG_DIR" > "$LOG_DIR/0_data.run.log" 2>&1; then
    echo "  경고: 시장 데이터 수집 실패 — $LOG_DIR/0_data.run.log 확인. 검색 기반으로 계속 진행." >&2
  fi
fi

# 중복 리포트 방지: 미국 기준일이 직전 리포트와 같으면(새 거래일 없음) 1~3단계·메일을 건너뛴다.
# 0단계 데이터(latest.json)와 로그는 남는다. 사이트는 아래 5단계에서 그대로 다시 빌드한다.
SKIP_REPORT=0
if [ -z "${RUN_STEPS:-}" ]; then
  set +e
  LOG_NAME="$LOG_NAME" node scripts/should_run.js "$DATE" > "$LOG_DIR/dup_check.log" 2>&1
  rc=$?
  set -e
  cat "$LOG_DIR/dup_check.log"
  if [ "$rc" -eq 10 ]; then
    SKIP_REPORT=1
    {
      echo "# 리포트 생성 건너뜀 ($DATE)"
      echo
      echo "$(cat "$LOG_DIR/dup_check.log")"
      echo
      echo "새 미국 거래일이 없어 1~3단계(LLM)와 메일 발송을 생략했다. (scripts/should_run.js, 지시서 C9)"
    } > "$LOG_DIR/skip.md"
  fi
fi

if [ "$SKIP_REPORT" -eq 0 ]; then
  # 직전 리포트 경로 — 2단계가 "전일 판단 점검"에 쓴다. LLM은 디렉터리를 나열할 수 없으므로 여기서 넘겨준다.
  PREV_DATE=$(ls logs | grep -E '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' | grep -v "^$DATE$" | sort | while read -r d; do
    if [ -s "logs/$d/3_report.md" ] && [[ "$d" < "$DATE" ]]; then echo "$d"; fi; done | tail -1 || true)
  if [ -n "$PREV_DATE" ]; then PREV_NOTE="직전 리포트 경로: logs/$PREV_DATE/3_report.md"; else PREV_NOTE="직전 리포트 없음"; fi

  if want 1; then
    echo "[1/6] 수집(Collect)"
    EXTRA_CONTEXT="" run_step "prompts/1_collect.md" "$LOG_DIR/1_collect.run.log" "$LOG_DIR/1_collect.md" WebSearch Read Write Edit
  fi

  # 코드 단계(LLM 미사용): 일정 원장·facts 갱신, 티커 마스터 확장. 실패해도 파이프라인은 계속 간다.
  if want ledger; then
    echo "[1b] 일정 원장·facts·티커 마스터 갱신 (코드)"
    node scripts/update_calendar.js "$DATE" || echo "  경고: 캘린더 갱신 실패 — 기존 원장 유지" >&2
    node scripts/update_facts.js "$DATE" || echo "  경고: facts 갱신 실패 — 기존 값 유지" >&2
    node scripts/build_tickers.js || echo "  경고: 티커 마스터 갱신 실패" >&2
  fi

  if want 2; then
    echo "[2/6] 분석(Analysis)"
    EXTRA_CONTEXT="$PREV_NOTE" run_step "prompts/2_analyze.md" "$LOG_DIR/2_analyze.run.log" "$LOG_DIR/2_analysis.md" Read Write Edit
  fi
  if want 3; then
    echo "[3/6] 리포트 통합"
    EXTRA_CONTEXT="" run_step "prompts/3_report.md" "$LOG_DIR/3_report.run.log" "$LOG_DIR/3_report.md" Read Write Edit
  fi

  # 3단계 직후(코드): 대시보드·일정 표를 0_data.json / calendar.json 에서 끼워 넣고, 형식·수치를 검증한다.
  # 검증 실패 시 LLM을 다시 부르지 않고 상단에 경고 배너를 달아 게시한다. 둘 다 실패해도 멈추지 않는다.
  if want inject; then
    echo "[3b] 대시보드·일정 표 삽입 (코드)"
    node inject_dashboard.js "$DATE" || echo "  경고: 표 삽입 실패 — 마커가 그대로 남는다" >&2
  fi
  if want validate; then
    echo "[3c] 리포트 검증 (코드)"
    node scripts/validate_report.js "$DATE" > "$LOG_DIR/validate.run.log" 2>&1 || echo "  경고: 검증 실패 — 경고 배너를 달아 게시한다 ($LOG_DIR/validate.md)" >&2
    node scripts/build_tickers.js || true
  fi

  # 4단계: 발송용 텍스트 생성 — 마크다운 제거 + URL 삽입뿐이라 판단이 필요 없다.
  # claude -p 호출 없이 코드로 처리해 하루 4번 중 1번의 Claude 세션 사용을 없앤다.
  if want 4; then
    echo "[4/6] 발송용 텍스트 생성 (코드 변환, Claude 미사용)"
    node build_email.js "$DATE"
  fi
fi

# 5단계: 리포트를 HTML로 빌드한다. GitHub Pages가 docs/를 서빙한다.
if want 5; then
  echo "[5/6] HTML 사이트 빌드"
  node build_site.js
fi

# 실제 발송은 Claude가 아니라 Gmail API를 직접 호출하는 스크립트가 담당한다.
# 메일 실패가 리포트 게시를 막아서는 안 되므로 종료코드를 전파하지 않는다.
#
# 하루 1통 제한: 같은 날짜에 이미 발송했다면 다시 보내지 않는다.
# 마커 파일(.emailed)은 git에 커밋된다 — GitHub Actions는 매번 새 VM에서 시작해
# 로컬 파일이 안 남으므로, 커밋된 마커만이 "오늘 이미 보냈다"를 다음 실행에 전달할 수 있다.
# (수동 재실행 시 이미 있는 산출물을 그대로 중복 발송하는 사고를 막기 위함.
#  일부러 다시 보내고 싶으면 "$LOG_DIR/.emailed"를 지우고 커밋한 뒤 재실행한다.)
if want 7 && [ "$SKIP_REPORT" -eq 0 ]; then
  if [ -f "$LOG_DIR/.emailed" ]; then
    echo "메일 발송 건너뜀 — 오늘 이미 발송함 ($LOG_DIR/.emailed 존재)"
  elif node send_email.js "$LOG_DIR/email_to_send.txt" > "$LOG_DIR/5_send.log" 2> "$LOG_DIR/5_send.err.log"; then
    echo "메일 발송 성공" >> "$LOG_DIR/5_send.log"
    touch "$LOG_DIR/.emailed"
  else
    echo "메일 발송 실패 - $LOG_DIR/5_send.err.log 확인" >&2
    # 이 실패는 스크립트를 죽이지 않아(set -e를 우회) 파이프라인 전체는
    # "성공"으로 끝난다. GitHub Actions 요약 화면에 바로 보이는 경고를 남겨
    # 로그를 따로 안 열어봐도 놓치지 않게 한다.
    echo "::warning::메일 발송 실패 — $LOG_DIR/5_send.err.log 확인 (GMAIL_* Secrets 재확인 필요할 수 있음)"
  fi
elif [ "$SKIP_REPORT" -eq 1 ]; then
  echo "메일 발송 건너뜀 — 새 거래일 없음 (skip.md)"
fi

echo "[6/6] 완료: $LOG_DIR"
