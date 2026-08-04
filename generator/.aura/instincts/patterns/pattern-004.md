---
id: pattern-004
category: db
language: javascript
score: 50
tags: [db, javascript]
---

## 컨텍스트
파일: app.js (Write 완료)

## 핵심 코드
```javascript
// 站点前端脚本：搜索触发、⌘K 快捷键（搜索 UI 在 Phase 5 完整实现）
(function () {
  'use strict';
  const trigger = document.querySelector('[data-search-trigger]');
  const searchPath = trigger && trigger.getAttribute('data-search-path');
  const goSearch = () => {
    // 搜索路径由页面注入 data-search-path；缺省用同目录 search/
    const base = searchPath || './search/';
    window.location.href = base;
  };
  if (trigger) trigger.addEventListener('click', goSearch);
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      goSearch();
    }
  });
})();

```

## 태그
- db
- javascript