'use strict';
// marked 래퍼: 취소선(~, ~~)을 끈다. 리포트의 "76.5~81센트" 같은 범위 표기가 취소선으로 먹혀
// "76.581센트"로 깨지는 사고(2026-10)를 막는다. 사이트·메일 빌더는 반드시 이 모듈의 marked 를 쓴다.
const { Marked } = require('marked');

const md = new Marked({ tokenizer: { del() { return undefined; } } });

module.exports = { marked: md, parse: (s) => md.parse(s), lexer: (s) => md.lexer(s) };
