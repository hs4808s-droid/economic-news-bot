#!/usr/bin/env node
'use strict';
// docs/data/tickers.json 갱신: config/ticker_seed.json(사람 확정분) + 기존 tickers.json + 리포트·캘린더에서 추출한 신규 티커.
// 신규 티커는 sector '?', name_ko '?' 로 들어간다 (추측으로 채우지 않는다). 사람이 seed 에 확정분을 추가하면 다음 실행에 반영된다.
//   node scripts/build_tickers.js           logs/*/3_report.md 전체 + calendar.json
const fs = require('fs');
const path = require('path');
const C = require('../lib/common');
const { extractTickers } = require('./tickers_lib');

const OUT = path.join(C.ROOT, 'docs', 'data', 'tickers.json');
const seed = C.readJson(path.join(C.ROOT, 'config', 'ticker_seed.json'), {});
const prev = C.readJson(OUT, {});
const out = {};

for (const [t, v] of Object.entries(prev)) out[t] = v;
for (const [t, v] of Object.entries(seed)) {
  if (t.startsWith('_')) continue;
  out[t] = { name_ko: v[0], sector: v[1], ...(prev[t]?.verified ? { verified: true } : {}) };
}

const found = new Set();
const logs = path.join(C.ROOT, 'logs');
for (const d of fs.readdirSync(logs).filter((x) => /^\d{4}-\d{2}-\d{2}$/.test(x))) {
  const p = path.join(logs, d, '3_report.md');
  if (fs.existsSync(p)) extractTickers(fs.readFileSync(p, 'utf8')).forEach((t) => found.add(t));
}
for (const e of C.readJson(path.join(C.ROOT, 'docs', 'data', 'calendar.json'), { events: [] }).events) if (e.ticker) found.add(e.ticker);
for (const t of C.readJson(path.join(C.ROOT, 'config', 'watchlist.json'), { tickers: [] }).tickers) found.add(t);

let added = 0;
for (const t of found) if (!out[t]) { out[t] = { name_ko: '?', sector: '?' }; added++; }

const sorted = Object.fromEntries(Object.entries(out).sort(([a], [b]) => a.localeCompare(b)));
C.writeJson(OUT, sorted);
const unknown = Object.values(sorted).filter((v) => v.sector === '?').length;
console.log(`tickers.json: 총 ${Object.keys(sorted).length}개 (신규 ${added}, 미확정 '?' ${unknown})`);
