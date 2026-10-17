'use strict';
// 독자 화면(사이트·메일)에서 내부 작업 메모를 숨긴다: [P1]/[P2] 등급 태그, "Yahoo chart API 자동수집", "facts.json 이월값", "logs 폴더" 등.
// 원본 3_report.md 는 그대로 두고(검증·감사용), 렌더 직전에만 적용한다. 출처 URL 은 맨 아래 "출처" 목록으로 모은다.

const BANNERS = [/<!-- VALIDATION-BANNER -->[\s\S]*?<!-- \/VALIDATION-BANNER -->\n*/g, /<!-- CORRECTION-BANNER -->[\s\S]*?<!-- \/CORRECTION-BANNER -->\n*/g];

function readerMd(md) {
  let s = md;
  for (const re of BANNERS) s = s.replace(re, '');
  s = s
    .replace(/\s?\[P[1-4]\]/g, '')
    .replace(/\(?\s*Yahoo chart API\s?자동\s?수집\s*\)?/g, '')
    .replace(/\(?\s*내역:\s*logs\s?폴더의?\s?validate\.md\s*\)?/g, '')
    .replace(/facts\.json\s?이월값?/g, '직전 확인값 이월')
    .replace(/facts\.json(?:에|의)?\s?(?:등록된)?/g, '직전 확인값')
    .replace(/logs\s?폴더/g, '')
    .replace(/\b(?:0_data|1_collect|2_analysis)\.(?:md|json)\b/g, '수집 데이터')
    .replace(/\(\s*\)/g, '')
    .replace(/[ \t]+(?=\*?\n)/g, '');
  return s;
}

// 본문 URL 을 호스트별로 모은다(중복 제거). [{host, url}]
function sourcesOf(md) {
  const seen = new Map();
  for (const m of md.matchAll(/https?:\/\/[^\s)|>\]"'`<]+/g)) {
    const url = m[0].replace(/[.,;]+$/, '');
    let host; try { host = new URL(url).hostname.replace(/^www\./, ''); } catch { continue; }
    if (!seen.has(url)) seen.set(url, host);
  }
  return [...seen].map(([url, host]) => ({ host, url })).sort((a, b) => a.host.localeCompare(b.host));
}

module.exports = { readerMd, sourcesOf };
