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

// GitHub Actions에서는 Secrets가 환경변수로 들어오고, 로컬에서는 기존 파일을 쓴다.
function loadCredentials() {
  const env = {
    client_id: process.env.GMAIL_CLIENT_ID,
    client_secret: process.env.GMAIL_CLIENT_SECRET,
    refresh_token: process.env.GMAIL_REFRESH_TOKEN,
  };
  if (env.client_id && env.client_secret && env.refresh_token) return env;

  // 환경변수가 일부만 있으면 조용히 파일로 넘어가지 않는다 — 설정 실수를 숨기게 된다.
  const partial = Object.entries(env).filter(([, v]) => v).map(([k]) => k);
  if (partial.length) {
    throw new Error(
      `Gmail 환경변수가 일부만 설정됐습니다 (있는 것: ${partial.join(', ')}). ` +
        'GMAIL_CLIENT_ID · GMAIL_CLIENT_SECRET · GMAIL_REFRESH_TOKEN 세 개가 모두 필요합니다.'
    );
  }

  if (!fs.existsSync(CLIENT_FILE) || !fs.existsSync(TOKEN_FILE)) {
    throw new Error(
      'Gmail 자격증명이 없습니다. 환경변수(GMAIL_CLIENT_ID/SECRET/REFRESH_TOKEN)를 설정하거나, ' +
        'gmail_auth_setup.js를 실행해 gmail_oauth_client.json·gmail_token.json을 만드세요.'
    );
  }
  const { client_id, client_secret } = JSON.parse(fs.readFileSync(CLIENT_FILE, 'utf8'));
  const { refresh_token } = JSON.parse(fs.readFileSync(TOKEN_FILE, 'utf8'));
  if (!refresh_token) throw new Error('refresh_token이 없습니다. gmail_auth_setup.js를 먼저 실행하세요.');
  return { client_id, client_secret, refresh_token };
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
  // 자격증명: 환경변수 우선(GitHub Actions), 없으면 로컬 파일 fallback.
  const { client_id, client_secret, refresh_token } = loadCredentials();

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
