// 站点前端：全文搜索（中文包含匹配 + 拉丁前缀）· ⌘K 命令面板
(function () {
  'use strict';

  const CAT_LABELS = { concepts: '概念', entities: '实体', theses: '论点', synthesis: '来源' };
  let index = null;
  let indexPromise = null;

  function loadIndex() {
    if (indexPromise) return indexPromise;
    const url = window.SEARCH_INDEX_URL || 'search-index.json';
    indexPromise = fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then((d) => { index = d; return d; })
      .catch(() => { index = []; return []; });
    return indexPromise;
  }

  // 查询分词：拉丁词 + CJK 连续段
  function tokenize(q) {
    const t = q.toLowerCase().trim();
    if (!t) return [];
    return t.match(/[a-z0-9]+|[一-鿿]+/g) || [];
  }

  function hitField(text, tokens) {
    if (!text) return 0;
    const s = text.toLowerCase();
    let score = 0;
    for (const tk of tokens) {
      if (s.includes(tk)) score += 1;
    }
    return score;
  }

  function scoreEntry(e, tokens) {
    if (!tokens.length) return 0;
    let total = 0;
    let allHit = true;
    for (const tk of tokens) {
      let best = 0;
      // 标题（含拉丁前缀奖励）
      let s = 0;
      if (hitField(e.title, [tk])) s = 5;
      else if (tk.length >= 2 && e.title && e.title.toLowerCase().startsWith(tk)) s = 4;
      best = Math.max(best, s);
      if (hitField((e.aliases || []).join(' '), [tk])) best = Math.max(best, 4);
      if (hitField((e.tags || []).join(' '), [tk])) best = Math.max(best, 3);
      if (hitField(e.desc, [tk])) best = Math.max(best, 1);
      if (best === 0) { allHit = false; break; }
      total += best;
    }
    return allHit ? total : 0;
  }

  function highlight(text, tokens) {
    let s = String(text);
    for (const tk of tokens) {
      const i = s.toLowerCase().indexOf(tk);
      if (i >= 0) {
        s = s.slice(0, i) + '<mark>' + s.slice(i, i + tk.length) + '</mark>' + s.slice(i + tk.length);
      }
    }
    return s;
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function pageHref(e) {
    return e.cat + '/' + encodeURIComponent(e.slug) + '/';
  }

  function resultItem(e, tokens) {
    const cat = CAT_LABELS[e.cat] || e.cat;
    const title = highlight(esc(e.title), tokens);
    const extra = [];
    for (const a of (e.aliases || []).slice(0, 3)) extra.push(esc(a));
    for (const t of (e.tags || []).slice(0, 3)) extra.push('<span class="tag">' + esc(t) + '</span>');
    return '<a class="result" href="' + pageHref(e) + '">' +
      '<div class="result-title"><span class="badge cat-' + e.cat + '">' + cat + '</span> ' + title + '</div>' +
      (extra.length ? '<div class="result-extra">' + extra.join(' · ') + '</div>' : '') +
      '<div class="result-desc">' + highlight(esc(e.desc), tokens) + '</div>' +
      '</a>';
  }

  function runSearch(query, container, limit) {
    if (!index) return;
    const tokens = tokenize(query);
    const results = [];
    for (const e of index) {
      const s = scoreEntry(e, tokens);
      if (s > 0) results.push({ e, s });
    }
    results.sort((a, b) => b.s - a.s);
    const top = results.slice(0, limit || 30);
    if (!tokens.length || !top.length) {
      container.innerHTML = tokens.length ? '<div class="search-empty">未找到相关页面</div>' : '';
      return;
    }
    container.innerHTML = '<div class="search-count">' + results.length + ' 条结果</div>' + top.map((r) => resultItem(r.e, tokens)).join('');
  }

  // ── ⌘K 命令面板 ──
  function initOverlay() {
    const ov = document.createElement('div');
    ov.id = 'search-overlay';
    ov.className = 'search-overlay';
    ov.innerHTML = '<div class="overlay-box">' +
      '<input id="overlay-input" class="search-input" placeholder="搜索：稳定币、uni、defi…（Esc 关闭）" autocomplete="off">' +
      '<div id="overlay-results" class="search-results"></div>' +
      '</div>';
    document.body.appendChild(ov);

    const input = ov.querySelector('#overlay-input');
    const results = ov.querySelector('#overlay-results');
    let debounce = null;

    const open = () => {
      ov.classList.add('open');
      input.value = '';
      results.innerHTML = '';
      setTimeout(() => input.focus(), 30);
    };
    const close = () => ov.classList.remove('open');

    ov.addEventListener('click', (e) => { if (e.target === ov) close(); });
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); open(); }
      if (e.key === 'Escape' && ov.classList.contains('open')) close();
    });
    document.querySelector('[data-search-trigger]')?.addEventListener('click', open);

    input.addEventListener('input', () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        if (!index) loadIndex().then(() => runSearch(input.value, results, 30));
        else runSearch(input.value, results, 30);
      }, 150);
    });
    loadIndex();
  }

  // ── 全页搜索（/search/）──
  function initSearchPage() {
    const input = document.getElementById('search-input');
    if (!input) return;
    const results = document.getElementById('search-results');
    let debounce = null;
    loadIndex().then(() => {
      const params = new URLSearchParams(location.search);
      const q = params.get('q');
      if (q) { input.value = q; runSearch(q, results, 50); }
    });
    input.addEventListener('input', () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        if (!index) loadIndex().then(() => runSearch(input.value, results, 50));
        else runSearch(input.value, results, 50);
      }, 150);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initOverlay();
    initSearchPage();
  });
})();
