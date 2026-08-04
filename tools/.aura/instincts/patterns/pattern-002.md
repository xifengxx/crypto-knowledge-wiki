---
id: pattern-002
category: deploy
language: unknown
score: 50
tags: [deploy]
---

## 컨텍스트
파일: CLAUDE.md (Edit 완료)

## 핵심 코드
```unknown
```
knowledge/
├── raw/           ← 原始素材（LLM 只读）
│   ├── articles/  · 网页文章、公众号、博客
│   ├── notes/     · 个人笔记、便签
│   ├── images/    · 截图、照片、独立图片
│   ├── reports/   · 研报、PDF（自动提取文字后存为 .md）
│   ├── audio/     · 🔜 音频 + 文字稿（后续）
│   ├── video/     · 🔜 视频 + 文字稿 + 关键帧（后续）
│   └── social/    · 🔜 推文/Thread 存档（后续）
├── wiki/          ← LLM 生成和维护的结构化知识
```

## 태그
- deploy