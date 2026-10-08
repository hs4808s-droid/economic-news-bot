#!/usr/bin/env node
'use strict';
// docs/data/facts.json 갱신 — 천천히 변하는 사실(CAPEX 가이던스, FedWatch)의 원장. LLM 미사용.
//   node scripts/update_facts.js [YYYY-MM-DD]   logs/<날짜>/1_collect.md 의 [2] FedWatch 행, [5-A] CAPEX 표를 읽는다.
// 규칙: 새로 확인된 값만 덮어쓰고 last_verified 를 오늘(KST)로 둔다. "변동 없음/유지" 행은 건드리지 않아
//       last_verified 가 과거로 남고, 리포트는 그 값을 "(최종확인 MM/DD)"로 표시한다. FedWatch 출처는 CME 하나로 고정.
//   node scripts/update_facts.js --selftest
const fs = require('fs');
const path = require('path');
const C = require('../lib/common');

const FACTS = path.join(C.ROOT, 'docs', 'data', 'facts.json');
const cells = (l) => l.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim().replace(/\*\*/g, ''));
const NOCHANGE = /변동 없음|유지|N\/A|확인 ?필요/;

function parse(md, today) {
  const out = {};
  const lines = md.split(/\r?\n/);
  // [2] FedWatch: "FedWatch" 가 들어간 표 행/불릿 중 퍼센트가 있는 첫 줄
  const fw = lines.find((l) => /fedwatch/i.test(l) && /\d+(\.\d+)?\s*%/.test(l) && !NOCHANGE.test(l));
  if (fw) {
    // 표 행이면 '사실 내용' 열(2번째)만 쓴다 — 뒤쪽 출처 열(매체 기사 제목 등)은 CME 고정 원칙과 섞이지 않게 버린다.
    const value = (/^\s*\|/.test(fw) ? cells(fw)[1] : fw.replace(/^[\s*-]+/, '').replace(/\*\*/g, '')).replace(/\s+/g, ' ').trim().slice(0, 200);
    out.fedwatch = { value, source: 'CME FedWatch', last_verified: today };
  }
  // [5-A] CAPEX: 기업명으로 시작하는 표 행. 열: 항목 | 사실 내용 | 전분기 대비 | 출처일자 | 출처
  const s = lines.findIndex((l) => /^#{2,4}\s*\[5-A\]/.test(l));
  const e = lines.findIndex((l, i) => i > s && /^#{2,4}\s*\[6\]/.test(l));
  if (s >= 0) {
    for (const l of lines.slice(s, e < 0 ? undefined : e)) {
      if (!/^\s*\|/.test(l) || /^\s*\|[\s:|-]+\|\s*$/.test(l)) continue;
      const c = cells(l);
      const m = /(microsoft|amazon|alphabet|meta|google)/i.exec(c[0] || '');
      if (!m || c.length < 5 || NOCHANGE.test(c[1])) continue;
      const srcDate = (c[3].match(/\d{4}-\d{2}-\d{2}/) || [])[0];
      if (!srcDate) continue; // 출처일자 없는 값은 기록하지 않는다
      out[`capex_${m[1].toLowerCase()}`] = { value: c[1].slice(0, 300), source: c[4] || null, source_date: srcDate, last_verified: today };
    }
  }
  return out;
}

function update(today, md) {
  const cur = C.readJson(FACTS, { facts: {} });
  const found = parse(md, today);
  Object.assign(cur.facts, found);
  cur.updated_at = new Date().toISOString();
  C.writeJson(FACTS, cur);
  return Object.keys(found);
}

function selftest() {
  const assert = require('assert');
  const md = `## [2]\n| CME FedWatch | 10/28 동결 78.4% / 인상 21.6% | CME |\n### [5-A]\n| 항목 | 사실 | 전분기 | 출처일자 | 출처 |\n|---|---|---|---|---|\n| Microsoft | FY27 CAPEX $80B | +5% | 2026-07-30 | MSFT IR |\n| Amazon | 신규 변동 없음 — 직전 가이던스 유지 | | 2026-07-30 | |\n### [6]\n`;
  const f = parse(md, '2026-10-08');
  assert.strictEqual(f.fedwatch.last_verified, '2026-10-08');
  assert(/78\.4/.test(f.fedwatch.value) && f.fedwatch.source === 'CME FedWatch');
  assert.strictEqual(f.capex_microsoft.source_date, '2026-07-30');
  assert(!f.capex_amazon, '유지 행은 갱신하지 않음');
  console.log('selftest 통과: FedWatch · CAPEX 파싱 · 유지 행 무시');
}

if (require.main === module && process.argv.includes('--selftest')) selftest();
else if (require.main === module) {
  const date = process.argv.slice(2).find((a) => /^\d{4}-\d{2}-\d{2}$/.test(a)) || C.kstDate();
  const f = path.join(C.ROOT, 'logs', process.env.LOG_NAME || date, '1_collect.md');
  if (!fs.existsSync(f)) { console.log('1_collect.md 없음 — facts 갱신 건너뜀'); process.exit(0); }
  console.log(`facts.json 갱신: ${update(date, fs.readFileSync(f, 'utf8')).join(', ') || '변경 없음'}`);
}
module.exports = { parse };
