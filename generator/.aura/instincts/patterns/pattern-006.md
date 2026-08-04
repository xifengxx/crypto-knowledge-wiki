---
id: pattern-006
category: test
language: javascript
score: 50
tags: [test, javascript]
---

## 컨텍스트
파일: graph.js (Edit 완료)

## 핵심 코드
```javascript
  function updateStats() {
    const vis = visibleNodes();
    statsEl.textContent = `${vis.length}/${graph.nodes.length} 节点 · 重要度≥${minRefs}`;
  }
```

## 태그
- test
- javascript