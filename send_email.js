#!/usr/bin/env node
'use strict';

// Gmail API로 실제 메일을 발송한다.
// 사용법: node send_email.js <Subject:/본문 형식의 텍스트 파일>

const fs = require('fs');
const path = require('path');

const CLIENT_FILE = path.join(__dirname, 'gmail_oauth_client.json');
const TOKEN_FILE = path.join(__dirname, 'gmail_token.json');
const TO = 'hs4808s@gmail.com';

function b64url(str) {
  return Buffer.from(str, 'utf8')
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function encodeSubject(subject) {
  if (!/[^\x00-\x7F]/.test(subject)) return subject;
  return `=?UTF-8?B?${Buffer.from(subject, 'utf8').toString('base64')}?=`;
}

function parseEmailFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const lines = raw.split(/\r?\n/);
  let subject = '(제목 없음)';
  let bodyStartIndex = 0;

  if (lines[0] && lines[0].startsWith('Subject:')) {
    subject = lines[0].slice('Subject:'.length).trim();
    bodyStartIndex = lines[1] === '' ? 2 : 1;
  }
  return { subject, body: lines.slice(bodyStartIndex).join('\n') };
}

async function getAccessToken(client_id, client_secret, refresh_token) {
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ client_id, client_secret, refresh_token, grant_type: 'refresh_token' }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`access token 갱신 실패: ${JSON.stringify(json)}`);
  return json.access_token;
}

async function main() {
  const inputFile = process.argv[2];
  if (!inputFile) {
    console.error('사용법: node send_email.js <발송할 텍스트 파일>');
    process.exit(1);
  }
  if (!fs.existsSync(CLIENT_FILE) || !fs.existsSync(TOKEN_FILE)) {
    throw new Error('gmail_oauth_client.json 또는 gmail_token.json이 없습니다. gmail_auth_setup.js를 먼저 실행하세요.');
  }

  const { client_id, client_secret } = JSON.parse(fs.readFileSync(CLIENT_FILE, 'utf8'));
  const { refresh_token } = JSON.parse(fs.readFileSync(TOKEN_FILE, 'utf8'));
  if (!refresh_token) throw new Error('refresh_token이 없습니다. gmail_auth_setup.js를 먼저 실행하세요.');

  const { subject, body } = parseEmailFile(inputFile);
  const accessToken = await getAccessToken(client_id, client_secret, refresh_token);

  const message = [
    `To: ${TO}`,
    `Subject: ${encodeSubject(subject)}`,
    'Content-Type: text/plain; charset=utf-8',
    'MIME-Version: 1.0',
    '',
    body,
  ].join('\r\n');

  const res = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ raw: b64url(message) }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`발송 실패: ${JSON.stringify(json)}`);

  console.log(`발송 성공: messageId=${json.id}`);
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
