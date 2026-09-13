#!/usr/bin/env node
'use strict';

// 1회용 OAuth 인증 스크립트. gmail_oauth_client.json을 먼저 만든 뒤 실행한다.
// 브라우저에서 로그인/승인하면 refresh_token을 gmail_token.json에 저장한다.

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const CLIENT_FILE = path.join(__dirname, 'gmail_oauth_client.json');
const TOKEN_FILE = path.join(__dirname, 'gmail_token.json');
const SCOPE = 'https://www.googleapis.com/auth/gmail.send';

if (!fs.existsSync(CLIENT_FILE)) {
  console.error(
    `'${CLIENT_FILE}' 파일이 없습니다.\n` +
      `gmail_oauth_client.json.example을 복사해 client_id/client_secret을 채운 gmail_oauth_client.json을 먼저 만들어 주세요.`
  );
  process.exit(1);
}

const { client_id, client_secret } = JSON.parse(fs.readFileSync(CLIENT_FILE, 'utf8'));
let port;

const server = http.createServer(async (req, res) => {
  if (!req.url.startsWith('/oauth2callback')) {
    res.writeHead(404);
    res.end();
    return;
  }

  const url = new URL(req.url, `http://127.0.0.1:${port}`);
  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');

  if (error) {
    res.end(`인증 실패: ${error}. 터미널을 확인하세요.`);
    console.error('OAuth error:', error);
    server.close(() => process.exit(1));
    return;
  }

  res.end('인증 완료. 이 창은 닫아도 됩니다.');

  try {
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id,
        client_secret,
        redirect_uri: `http://127.0.0.1:${port}/oauth2callback`,
        grant_type: 'authorization_code',
      }),
    });
    const tokenJson = await tokenRes.json();
    if (!tokenRes.ok) {
      console.error('토큰 교환 실패:', tokenJson);
      server.close(() => process.exit(1));
      return;
    }
    fs.writeFileSync(TOKEN_FILE, JSON.stringify(tokenJson, null, 2));
    console.log(`저장 완료: ${TOKEN_FILE}`);
    console.log('이제 send_email.js로 실제 발송 테스트를 할 수 있습니다.');
  } catch (e) {
    console.error('토큰 교환 중 오류:', e);
  } finally {
    server.close();
  }
});

server.listen(0, '127.0.0.1', () => {
  port = server.address().port;
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?${new URLSearchParams({
    client_id,
    redirect_uri: `http://127.0.0.1:${port}/oauth2callback`,
    response_type: 'code',
    scope: SCOPE,
    access_type: 'offline',
    prompt: 'consent',
  })}`;

  console.log('아래 URL을 브라우저에서 열어 Google 계정으로 로그인하고 권한을 승인하세요:\n');
  console.log(authUrl, '\n');
  console.log('승인 후 자동으로 토큰이 저장됩니다. (대기 중...)');

  const opener = process.platform === 'win32' ? 'start ""' : process.platform === 'darwin' ? 'open' : 'xdg-open';
  exec(`${opener} "${authUrl}"`, () => {});
});
