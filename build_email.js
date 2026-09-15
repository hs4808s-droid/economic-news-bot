#!/usr/bin/env node
'use strict';

// 4단계: logs/<날짜>/3_report.md → logs/<날짜>/email_to_send.txt
//
// 이 단계는 원래 claude -p(prompts/4_email.md)로 돌렸으나, 마크다운을
// plain text로 바꾸고 URL 한 줄을 앞에 붙이는 것뿐이라 LLM 판단이 필요
// 없다. 매일 도는 claude -p 호출을 하나 줄이기 위해 코드로 옮긴다.
// (Collect/Analyze/Report의 2단계 구조·★ 등급·해석은 그대로 LLM이 담당한다)
//
// 사용법: node build_email.js [YYYY-MM-DD]  (생략 시 오늘 KST)

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const ROOT = __dirname;
const kstDate = () => new Date().toLocaleDateString('sv-SE', { timeZone: 'Asia/Seoul' });

// 인라인 마크다운(굵게·코드·링크 등)을 plain text로.
function stripInline(md) {
  return md
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1') // 이미지
    .replace(/\[([^\]]*)\]\(([^)]*)\)/g, '$1 ($2)') // 링크
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .trim();
}

// marked 토큰 트리를 순회하며 plain text 줄 배열을 만든다.
// 표는 헤더/구분선/행을 " | "로 이어붙인 ASCII 표 형태로 남긴다 —
// 표마다 컬럼 의미가 달라 일반화된 규칙(헤더: 값)으로는 못 만들고,
// 이 방식이 정보 손실 없이 가장 간단하다.
function tokensToLines(tokens, out = []) {
  for (const t of tokens) {
    switch (t.type) {
      case 'heading':
        out.push('', stripInline(t.text), '');
        break;
      case 'paragraph':
        out.push(stripInline(t.text), '');
        break;
      case 'blockquote':
        for (const line of stripInline(t.text).split('\n')) out.push(`> ${line}`);
        out.push('');
        break;
      case 'list':
        t.items.forEach((item, i) => {
          const marker = t.ordered ? `${(t.start || 1) + i}.` : '-';
          out.push(`${marker} ${stripInline(item.text)}`);
        });
        out.push('');
        break;
      case 'table': {
        const header = t.header.map((c) => stripInline(c.text));
        out.push(header.join(' | '));
        out.push(header.map(() => '---').join(' | '));
        for (const row of t.rows) out.push(row.map((c) => stripInline(c.text)).join(' | '));
        out.push('');
        break;
      }
      case 'hr':
        out.push('----------------------------------------', '');
        break;
      case 'code':
        out.push(t.text, '');
        break;
      case 'space':
        break;
      default:
        if (t.raw) out.push(stripInline(t.raw));
    }
  }
  return out;
}

function markdownToPlainText(md) {
  const lines = tokensToLines(marked.lexer(md));
  // 연속 빈 줄은 하나로 정리.
  return lines.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

function main() {
  const date = process.argv[2] && /^\d{4}-\d{2}-\d{2}$/.test(process.argv[2]) ? process.argv[2] : kstDate();
  const logDir = path.join(ROOT, 'logs', date);
  const reportFile = path.join(logDir, '3_report.md');

  if (!fs.existsSync(reportFile)) {
    console.error(`3_report.md 없음: ${reportFile}`);
    process.exit(1);
  }

  const { homepage } = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
  const reportUrl = `${homepage}reports/${date}.html`;
  const body = markdownToPlainText(fs.readFileSync(reportFile, 'utf8'));

  const out = `Subject: [경제 뉴스 리포트] ${date} 미국 시장 요약\n\n전체 리포트: ${reportUrl}\n\n${body}\n`;
  fs.writeFileSync(path.join(logDir, 'email_to_send.txt'), out, 'utf8');
  console.log(`완료: logs/${date}/email_to_send.txt`);
}

main();
