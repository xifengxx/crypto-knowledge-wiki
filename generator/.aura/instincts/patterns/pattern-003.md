---
id: pattern-003
category: auth
language: javascript
score: 50
tags: [auth, javascript]
---

## 컨텍스트
파일: render.js (Write 완료)

## 핵심 코드
```javascript
import MarkdownIt from 'markdown-it';
import { relHref, pageSitePath } from './fs-utils.js';

/** 标题 slug：保留中英文与数字，其余转连字符；用于 TOC 锚点 */
function slugifyHeading(text) {
  return String(text)
    .toLowerCase()
    .replace(/[\s　]+/g, '-')
    .replace(/[^\p{L}\p{N}-]/gu, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * 创建渲染器。返回 { render(body) → { html, toc } }。
 * toc 为 [{ level, text, id }]。
 */
export function createRenderer() {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: false,
  });
  const seen = {};
  const toc = [];
  const getHeadingId = (text) => {
    let id = slugifyHeading(text) || 'h';
    let base = id;
    let n = 2;
    while (seen[id]) id = `${base}-${n++}`;
    seen[id] = true;
    return id;
  };
  md.renderer.rules.heading_open = (tokens, idx) => {
    const tok = tokens[idx];
    const inline = tokens[idx + 1];
    const text = inline ? inline.content : '';
    const id = getHeadingId(text);
    toc.push({ level: Number(tok.tag[1]), text, id });
    return `<h${tok.tag[1]} id="${id}">`;
  };

  return {
    render(body) {
      toc.length = 0;
      const html = md.render(body);
      return { html, toc: toc.slice() };
    },
  };
}
```

## 태그
- auth
- javascript