#!/usr/bin/env node
'use strict';
// 중복 리포트 방지 (지시서 C9). run_daily.sh 가 0단계 직후 호출한다.
//   종료코드 0 = 진행(1~3단계 실행), 10 = 건너뜀(직전 리포트와 같은 미국 거래일), 그 외 = 판단 불가(진행)
// 규칙: 0_data.json 의 미국 기준일(us_date)이 "직전 리포트의 기준일"과 같으면 새 리포트를 만들지 않는다.
//       (KST 일요일/월요일 실행이나 휴장 다음 날처럼 새 거래일이 없는 날 — 예: 10/03·10/04 중복)
//       파일명은 KST 작성일 체계를 그대로 두므로 요일로 건너뛰지 않는다: 토요일 실행분은 미국 금요일 장 리포트다.
//   node scripts/should_run.js <KST날짜> [--selftest]
const fs = require('fs');
const path = require('path');
const C = require('../lib/common');

// 리포트 본문 머리의 "기준일: 2026-10-07 (수)" 에서 미국 기준일을 읽는다.
function reportUsDate(md) {
  const m = /기준일[^\d\n]{0,30}(\d{4})[-년.\s]+(\d{1,2})[-월.\s]+(\d{1,2})/.exec(md.slice(0, 600));
  return m ? `${m[1]}-${m[2].padStart(2, '0')}-${m[3].padStart(2, '0')}` : null;
}

function decide(usDate, prevUsDate) {
  if (!usDate) return { run: true, why: '미국 기준일을 알 수 없어 진행 (판단 불가)' };
  if (!prevUsDate) return { run: true, why: '직전 리포트의 기준일을 알 수 없어 진행' };
  if (usDate === prevUsDate) return { run: false, why: `미국 기준일 ${usDate} 은 직전 리포트와 같음 — 새 거래일 없음` };
  return { run: true, why: `신규 거래일 ${usDate} (직전 리포트 ${prevUsDate})` };
}

function previousReport(date, logsDir = path.join(C.ROOT, 'logs')) {
  const dirs = fs.readdirSync(logsDir).filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d) && d < date).sort().reverse();
  for (const d of dirs) {
    const f = path.join(logsDir, d, '3_report.md');
    if (fs.existsSync(f) && fs.readFileSync(f, 'utf8').trim()) return { date: d, usDate: reportUsDate(fs.readFileSync(f, 'utf8')), file: f };
  }
  return null;
}

function selftest() {
  const assert = require('assert');
  assert.strictEqual(reportUsDate('# 리포트\n\n- **기준일**: 2026-10-07 (수) 미국'), '2026-10-07');
  assert.strictEqual(reportUsDate('# x\n기준일: 2026-06-18(목)'), '2026-06-18');
  assert.strictEqual(reportUsDate('# x\n**기준일**: 2026년 7월 1일 (화)'), '2026-07-01');
  assert.strictEqual(decide('2026-10-03', '2026-10-03').run, false, '같은 거래일은 건너뜀');
  assert.strictEqual(decide('2026-10-06', '2026-10-05').run, true);
  assert.strictEqual(decide(null, '2026-10-05').run, true, '판단 불가면 진행');
  // 실제 데이터: 10/03(토 KST)과 10/04(일 KST)가 중복이었던 사례
  const prev = previousReport('2026-10-04');
  assert(prev && prev.usDate, '실제 로그에서 직전 리포트 기준일 추출');
  console.log(`selftest 통과 (2026-10-04 직전 리포트: ${prev.date}, 기준일 ${prev.usDate})`);
}

if (require.main === module && process.argv.includes('--selftest')) selftest();
else if (require.main === module) {
  const date = process.argv[2];
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date || '')) { console.error('사용법: should_run.js <YYYY-MM-DD>'); process.exit(2); }
  const logName = process.env.LOG_NAME || date;
  const data = C.readJson(path.join(C.ROOT, 'logs', logName, '0_data.json'), null);
  const prev = previousReport(date);
  const d = decide(data?.us_date || null, prev?.usDate || null);
  console.log(d.why);
  process.exit(d.run ? 0 : 10);
}
module.exports = { decide, reportUsDate, previousReport };
