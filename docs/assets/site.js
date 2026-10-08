/* 미국 시장 데일리 브리핑 — 클라이언트 스크립트. 외부 라이브러리 없음.
   · 모든 페이지: 테마(자동/라이트/다크)·상승/하락 색 설정 (localStorage, 실패해도 동작)
   · index: 대시보드(타일·히트맵·2주 일정) + 아카이브 필터/검색
   대시보드의 JSON 로드가 실패해도 아카이브 목록(서버 렌더링 HTML)은 그대로 보인다. */
(function () {
  'use strict';
  var root = document.documentElement;

  /* ---------- 설정 ---------- */
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  function applyTheme(t) { if (t === 'light' || t === 'dark') root.setAttribute('data-theme', t); else root.removeAttribute('data-theme'); }
  function applyColor(c) { if (c === 'us') root.setAttribute('data-color', 'us'); else root.removeAttribute('data-color'); }
  function syncButtons() {
    var t = store('enb.theme') || 'auto', c = store('enb.color') || 'kr';
    document.querySelectorAll('[data-set-theme]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-set-theme') === t)); });
    document.querySelectorAll('[data-set-color]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-set-color') === c)); });
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-set-theme],[data-set-color]');
    if (!b) return;
    if (b.hasAttribute('data-set-theme')) { var t = b.getAttribute('data-set-theme'); store('enb.theme', t); applyTheme(t); }
    else { var c = b.getAttribute('data-set-color'); store('enb.color', c); applyColor(c); }
    syncButtons();
  });
  applyTheme(store('enb.theme')); applyColor(store('enb.color')); syncButtons();

  /* ---------- 유틸 ---------- */
  function h(tag, attrs) {
    var el = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === 'class') el.className = attrs[k]; else if (k === 'text') el.textContent = attrs[k]; else el.setAttribute(k, attrs[k]);
    });
    (function add(list) { list.forEach(function (c) { if (c == null) return; if (Array.isArray(c)) return add(c); el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); }); })(Array.prototype.slice.call(arguments, 2));
    return el;
  }
  var isNum = function (v) { return typeof v === 'number' && isFinite(v); };
  function fmt(v, d) { return isNum(v) ? v.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d }) : 'N/A'; }
  function dir(v) { return !isNum(v) || Math.abs(v) < 0.005 ? 'flat' : v > 0 ? 'up' : 'down'; }
  function arrow(v) { return dir(v) === 'up' ? '▲' : dir(v) === 'down' ? '▼' : '–'; }
  function pct(v) { return isNum(v) ? arrow(v) + ' ' + (v > 0 ? '+' : '') + v.toFixed(2) + '%' : 'N/A'; }
  function bp(v) { return isNum(v) ? arrow(v) + ' ' + (v > 0 ? '+' : '') + (v * 100).toFixed(1) + 'bp' : 'N/A'; }
  function sparkline(arr, cls) {
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', '0 0 100 28'); svg.setAttribute('preserveAspectRatio', 'none'); svg.setAttribute('aria-hidden', 'true');
    if (!arr || arr.length < 2) return svg;
    var min = Math.min.apply(null, arr), max = Math.max.apply(null, arr), rng = max - min || 1;
    var pts = arr.map(function (v, i) { return (i / (arr.length - 1) * 100).toFixed(1) + ',' + (26 - (v - min) / rng * 24).toFixed(1); }).join(' ');
    var pl = document.createElementNS(ns, 'polyline');
    pl.setAttribute('points', pts); pl.setAttribute('class', 'spark ' + cls);
    svg.appendChild(pl);
    return svg;
  }
  function getJson(url) {
    return fetch(url, { cache: 'no-cache' }).then(function (r) { if (!r.ok) throw new Error(url + ' HTTP ' + r.status); return r.json(); });
  }
  function ymd(d) { return d.toISOString().slice(0, 10); }
  function addDays(s, n) { return ymd(new Date(new Date(s + 'T00:00:00Z').getTime() + n * 86400000)); }

  /* ---------- 대시보드 ---------- */
  var TILES = [
    ['지수', [['^GSPC', 'S&P500'], ['^IXIC', '나스닥'], ['^DJI', '다우'], ['^RUT', '러셀2000'], ['^SOX', 'SOX']]],
    ['금리', [['FRED:DGS2', '미 2년물'], ['^TNX', '미 10년물'], ['@spread', '10Y−2Y']]],
    ['변동성', [['^VIX', 'VIX']]],
    ['달러·환율', [['DX-Y.NYB', 'DXY'], ['KRW=X', 'USD/KRW']]],
    ['원자재·크립토', [['CL=F', 'WTI'], ['GC=F', '금'], ['BTC-USD', '비트코인']]],
  ];

  function tile(it, label) {
    var ok = it && !it.error && isNum(it.close);
    var yld = it && (it.kind === 'yield' || it.kind === 'spread');
    var d = ok ? (yld ? it.d_1d : it.chg_1d) : null;
    var cls = dir(d);
    var digits = !ok ? 2 : yld ? 3 : it.close >= 10000 ? 0 : 2;
    var asof = ok && it.asof ? String(it.asof).replace(/^\d{4}-/, '').replace(' (FRED)', ' FRED') + (/FRED/.test(it.asof) ? '' : ' ET') : '';
    return h('div', { class: 'tile', 'data-sym': label },
      h('div', { class: 'l', text: label }),
      h('div', { class: 'v num', text: ok ? fmt(it.close, digits) + (yld ? '%' : '') : 'N/A' }),
      h('div', { class: 'c ' + cls, text: ok ? (yld ? bp(d) : pct(d)) : '—' }),
      ok ? sparkline(it.spark_20d, cls) : h('svg'),
      h('div', { class: 'a', text: asof ? '기준 ' + asof : (it && it.error ? '수집 실패' : '') }));
  }

  function renderTiles(data, box) {
    box.textContent = '';
    TILES.forEach(function (g) {
      var wrap = h('div', { class: 'tiles' });
      g[1].forEach(function (p) {
        var it = p[0] === '@spread' ? (data.derived && data.derived.spread_10y_2y) : data.items[p[0]];
        wrap.appendChild(tile(it, p[1]));
      });
      box.appendChild(h('div', { class: 'tilegroup' }, h('h3', { text: g[0] }), wrap));
    });
  }

  var PERIODS = [['1d', '1D'], ['5d', '5D'], ['1m', '1M'], ['ytd', 'YTD']];
  function renderHeat(data, box, ctrl, period) {
    var cells = Object.keys(data.items).map(function (k) { return [k, data.items[k]]; })
      .filter(function (p) { return p[1].group === 'sector'; });
    var vals = cells.map(function (p) { return Math.abs(p[1]['chg_' + period]); }).filter(isNum);
    var max = Math.max.apply(null, vals.concat([0.01]));
    box.textContent = '';
    cells.forEach(function (p) {
      var it = p[1], v = it['chg_' + period], c = dir(v);
      var el = h('div', { class: 'cell ' + c, 'data-etf': p[0], 'data-v': isNum(v) ? v.toFixed(2) : '' },
        h('div', { class: 'n', text: it.label }),
        h('div', { class: 't', text: p[0] }),
        h('div', { class: 'p num ' + c, text: pct(v) }));
      el.style.setProperty('--a', isNum(v) ? (0.14 + 0.6 * Math.abs(v) / max).toFixed(2) : '0');
      box.appendChild(el);
    });
    ctrl.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-period') === period)); });
  }

  function td(txt, cls) { return h('td', { class: cls || '', text: txt == null || txt === '' ? '—' : String(txt) }); }
  function th(txt, cls) { return h('th', { class: cls || '', text: txt }); }
  function surpriseCell(v, f) {
    if (!isNum(v)) return td('—');
    var cell = td(arrow(v) + ' ' + (v > 0 ? '+' : '') + f(v), dir(v) + ' num');
    return cell;
  }
  function table(head, rows) {
    var t = h('table', null, h('thead', null, h('tr', null, head.map(function (x) { return th(x[0], x[1]); }))));
    var tb = h('tbody'); rows.forEach(function (r) { tb.appendChild(r); }); t.appendChild(tb);
    return h('div', { class: 'tablewrap' }, t);
  }
  var usd = function (v) { return isNum(v) ? '$' + v.toFixed(2) : '—'; };
  var usdB = function (v) { return isNum(v) ? '$' + (v / 1e9).toFixed(2) + 'B' : '—'; };
  var TIMING = { bmo: '장전', amc: '장후' };

  function calPanels(events, tickers, anchor) {
    var lo = addDays(anchor, -2), hi = addDays(anchor, 14);
    var evs = (events || []).filter(function (e) { return e.date_et >= lo && e.date_et <= hi; });
    var tk = function (t) { var m = tickers && tickers[t]; return t ? (m && m.name_ko && m.name_ko !== '?' ? t + ' ' + m.name_ko : t) : '—'; };
    var earn = evs.filter(function (e) { return e.type === 'earnings'; }).map(function (e) {
      return h('tr', null, td(e.date_et), td(tk(e.ticker)), td(TIMING[e.timing] || '—'), td(usd(e.prior_eps), 'r num'), td(usd(e.cons_eps), 'r num'),
        td(usd(e.actual_eps), 'r num'), surpriseCell(e.surprise_eps, function (v) { return v.toFixed(2); }), td(usdB(e.cons_rev), 'r num'), td(e.implied_move != null ? '±' + e.implied_move + '%' : '—', 'r'));
    });
    var macro = evs.filter(function (e) { return e.type === 'macro' || e.type === 'fed'; }).map(function (e) {
      return h('tr', null, td(e.date_et), td(e.time_et), td(e.title), td('★'.repeat(Math.max(1, Math.min(3, e.importance || 1)))),
        td(e.prior, 'r'), td(e.consensus, 'r'), td(e.actual, 'r'), surpriseCell(typeof e.surprise === 'number' ? e.surprise : null, function (v) { return String(v); }));
    });
    var corp = evs.filter(function (e) { return e.type === 'corporate'; }).map(function (e) {
      return h('tr', null, td(e.date_et), td(tk(e.ticker)), td(e.title), td(e.source));
    });
    return [
      ['earnings', '실적', earn, table([['날짜(ET)'], ['종목'], ['시점'], ['전년 EPS', 'r'], ['예상 EPS', 'r'], ['실제 EPS', 'r'], ['서프라이즈', 'r'], ['예상 매출', 'r'], ['예상 변동폭', 'r']], earn)],
      ['macro', '지표·연준', macro, table([['날짜(ET)'], ['시각'], ['이벤트'], ['중요도'], ['직전', 'r'], ['예상', 'r'], ['발표', 'r'], ['서프라이즈', 'r']], macro)],
      ['corporate', '기업 이벤트', corp, table([['날짜(ET)'], ['종목'], ['이벤트'], ['출처']], corp)],
    ];
  }

  function renderCalendar(cal, tickers, anchor, box) {
    var panels = calPanels(cal.events, tickers, anchor);
    box.textContent = '';
    var tabs = h('div', { class: 'tabs', role: 'tablist', 'aria-label': '2주 일정' });
    var body = h('div', { id: 'cal-panel', role: 'tabpanel' });
    function show(id) {
      tabs.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-selected', String(b.getAttribute('data-tab') === id)); });
      var p = panels.filter(function (x) { return x[0] === id; })[0];
      body.textContent = '';
      body.setAttribute('data-rows', String(p[2].length));
      body.appendChild(p[2].length ? p[3] : h('div', { class: 'empty', text: '예정 없음' }));
    }
    panels.forEach(function (p) {
      var b = h('button', { type: 'button', role: 'tab', 'data-tab': p[0], text: p[1] + ' (' + p[2].length + ')' });
      b.addEventListener('click', function () { show(p[0]); });
      tabs.appendChild(b);
    });
    box.appendChild(tabs); box.appendChild(body);
    show('earnings');
  }

  function initDashboard() {
    var dash = document.getElementById('dashboard');
    if (!dash) return;
    var base = dash.getAttribute('data-base') || '';
    var tilesBox = document.getElementById('tiles'), heatBox = document.getElementById('heatmap'), heatCtrl = document.getElementById('heat-ctrl'), calBox = document.getElementById('calendar');
    var fail = function (box, msg) { box.textContent = ''; box.appendChild(h('div', { class: 'error', text: msg || '데이터를 불러오지 못했습니다' })); };

    getJson(base + 'data/latest.json').then(function (data) {
      renderTiles(data, tilesBox);
      var period = '1d';
      renderHeat(data, heatBox, heatCtrl, period);
      heatCtrl.querySelectorAll('button').forEach(function (b) {
        b.addEventListener('click', function () { period = b.getAttribute('data-period'); renderHeat(data, heatBox, heatCtrl, period); });
      });
      var upd = document.getElementById('updated');
      if (upd) {
        var et = data.generated_at ? new Date(data.generated_at).toLocaleString('sv-SE', { timeZone: 'America/New_York' }).slice(0, 16) : '';
        upd.textContent = '최종 업데이트 ' + (data.generated_at_kst || '') + ' KST' + (et ? ' · ' + et + ' ET' : '') + (data.us_date ? ' · 미국 기준일 ' + data.us_date : '');
      }
      return Promise.all([getJson(base + 'data/calendar.json'), getJson(base + 'data/tickers.json').catch(function () { return {}; })]).then(function (r) {
        renderCalendar(r[0], r[1], data.us_date || ymd(new Date()), calBox);
      }).catch(function () { fail(calBox); });
    }).catch(function () {
      fail(tilesBox); fail(heatBox); fail(calBox);
      heatCtrl.hidden = true;
    });
  }

  /* ---------- 아카이브 필터·검색 ---------- */
  function initArchive() {
    var list = document.getElementById('archive');
    if (!list) return;
    var cards = Array.prototype.slice.call(list.querySelectorAll('li[data-tags]'));
    var q = document.getElementById('q'), count = document.getElementById('count'), none = document.getElementById('noresult');
    var chips = document.getElementById('tagchips');
    var tag = '';
    function apply() {
      var needle = (q.value || '').trim().toLowerCase(), n = 0;
      cards.forEach(function (li) {
        var okTag = !tag || li.getAttribute('data-tags').split(',').indexOf(tag) >= 0;
        var okQ = !needle || li.getAttribute('data-text').toLowerCase().indexOf(needle) >= 0;
        var show = okTag && okQ; li.hidden = !show; if (show) n++;
      });
      list.querySelectorAll('.month').forEach(function (m) { m.hidden = !m.querySelector('li:not([hidden])'); });
      count.textContent = n + '건';
      none.hidden = n > 0;
    }
    chips.querySelectorAll('button').forEach(function (b) {
      b.addEventListener('click', function () {
        tag = b.getAttribute('data-tag') || '';
        chips.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        apply();
      });
    });
    q.addEventListener('input', apply);
    apply();
  }

  function init() { initDashboard(); initArchive(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
