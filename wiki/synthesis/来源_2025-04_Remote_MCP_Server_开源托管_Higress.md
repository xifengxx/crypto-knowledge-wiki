---
type: source
source_type: article
url: https://mp.weixin.qq.com/s/fDnOQA1jzOLZQJ5aVEIuvg
date: 2025-04-02
ingested: 2026-07-02
---

# 阿里云 Higress 开源 Remote MCP Server 一站式托管方案解读

## 阅读证据
- 总行数: 183
- Q1 (前25%): OpenAI CEO Sam Altman 在社交媒体上确认，OpenAI 将在旗下产品（包括 ChatGPT 桌面应用）中集成 Anthropic 的 MCP 协议；截至 2025 年 2 月，已有超过 1000 个社区构建的 MCP Server 可用。
- Q3 (中后25%): Higress 支持三种 MCP Server 接入方式：1）通过 Wasm 插件在 Higress 内部实现内置 MCP Server；2）直接转发给外部已支持 MCP 协议的服务；3）通过 Nacos 服务注册中心动态发现外部 MCP Server。Higress 可在同一接入点上同时支持 MCP 20241105 和 20250326 两个版本。
- Q4 (最后25%): Higress 托管的 MCP Server 可以处理每秒数十万次的工具调用请求，保持毫秒级响应时间；企业级 MCP 市场将提供 99.99% 的 SLA 服务可用性承诺。
- 图片: 0 analyzed / 6 decorative WeChat CDN images skipped / 6 external URLs unavailable

## 核心要点
1. **MCP 协议加速成为行业标准**：OpenAI 正式宣布跟进 Anthropic 的 MCP 协议，Anthropic 于 2025 年 3 月 26 日发布新版本（Streamable HTTP 传输机制），两大事件叠加加速 MCP 生态繁荣，MCP 有望成为连接 AI 模型与外部世界的通用标准（如 USB/HTTP/ODBC 的地位）。
2. **从 Local 到 Remote MCP Server 的趋势**：Local MCP Server 存在本地环境依赖、安全风险（敏感凭证分散到每个员工本地）、一致性问题和维护成本高等局限；Remote MCP Server 通过集中化部署解决了这些问题，是面向企业场景的必然演进方向。
3. **Higress 作为 AI 原生 API 网关的 MCP 托管方案**：Higress（基于 Envoy 构建）提供完整的分层架构，包括 MCP 会话保持、OAuth2 认证、审计日志、速率限制和 MCP 路由。该方案已被 Anthropic 官方 MCP Server 项目文档收录。
4. **Wasm 插件机制带来的灵活扩展**：Higress 支持通过 WebAssembly (Wasm) 插件动态扩展 MCP Server，支持多种语言开发（已提供 Go 语言 SDK），每个插件在独立沙箱中运行，可热更新不中断流量。
5. **协议卸载屏蔽版本差异**：Higress 在网关层屏蔽 MCP 20241105 和 20250326 两个版本的协议差异，支持 POST+SSE 和 Streamable HTTP 两种传输模式，并原生支持 WebSocket 全双工通信。
6. **开放的 MCP 市场生态**：Higress 计划 2025 年 4 月中旬在 higress.ai 提供公开 MCP 市场，同时阿里云 API 网关将推出企业级 MCP 市场（99.99% SLA、7x24 支持）；社区提供开发者 MCP Server 上架机制。

## 关键数据
- **1000+** — 截至 2025 年 2 月社区构建的 MCP Server 数量
- **2025 年 3 月 26 日** — Anthropic 发布新版 MCP 协议（Streamable HTTP 传输机制）
- **每秒数十万次** — Higress 托管 MCP Server 可处理的工具调用请求量级
- **毫秒级** — Higress 托管 MCP Server 的典型响应时间
- **99.99%** — 阿里云企业级 MCP 市场承诺的服务可用性 SLA
- **3 种** — Higress 支持的 MCP Server 接入方式（Wasm 内置/外部转发/Nacos 动态发现）
- **2 个** — Higress 同时支持的 MCP 协议版本（20241105 / 20250326）

## 与已有知识的关系
- 补充 [[model-context-protocol]] — 本文提供了之前 MCP 概念页和合成页中未覆盖的多个新信息：OpenAI 的正式表态、2025-03-26 协议修订细节（Streamable HTTP、Mcp-Session-Id、批量请求/响应）、Local vs Remote MCP Server 的系统性对比、以及 Higress 作为具体的开源托管方案实现。
- 补充 [[openai]] — 补充了 OpenAI 宣布支持 MCP 协议的事件（可在 OpenAI 实体页的"相关事件时间线"中添加）。
- 补充 [[anthropic]] — 补充了 Anthropic 2025 年 3 月 26 日发布 MCP 新版本协议的细节。
- 补充 [[来源_2025-04_MCP_AI_Agent_工具交互_a16z]] — a16z Yoko Li 的文章提出了 MCP 面临的八大挑战（如多租户、认证、Gateway），本文展示的 Higress 方案正是针对这些挑战的落地实现，特别是 Gateway 层的认证授权、限流和可观测性。
- 补充 [[来源_2025-04_MCP_起源_架构_未来_深潮TechFlow]] — 该文讨论 MCP 的起源和设计理念，本文补充了 Remote MCP Server 企业级部署的实际方案。

## 值得记住的引用
> "MCP 的市场反响很好，我们也很高兴能在自家产品中支持这项协议。目前此协议已经在 Agents SDK 中开放，对于 ChatGPT 桌面版应用以及 Responses API 的支持也即将推出！" —— OpenAI CEO Sam Altman

> "据统计，截至 2025 年 2 月，已有超过 1000 个社区构建的 MCP Server 可用。随着 OpenAI 的加入，MCP 协议有望成为连接 AI 模型与外部世界的通用标准，就像 USB、HTTP 或 ODBC 在各自领域中的地位一样。"

> "目前 MCP 一共有两个版本的协议，分别是 20241105 版本和 20250326 版本，从协议发展来看，标准的沉淀和优化速度，难以跟上迅猛发展的 MCP Server 生态。这也为 MCP 的早期采用者埋下隐患，当构建了大量 MCP Server，面对未来协议版本升级，需要进行繁重的升级改造工作。" —— 指出协议版本碎片化风险，以及网关层协议卸载的价值。

## 我的笔记
1. 这篇文章本质上是阿里云 Higress 项目的 PR 文章（"阿里妹导读"），虽然提供了有价值的 Remote MCP Server 技术细节，但对 Higress 方案的分析是单方面的，缺乏与其他方案（如 Cloudflare Smithery、Toolbase）的对比。需要看到更多独立评测才能判断 Higress 方案在实际企业部署中的优劣势。
2. 文章提到 MCP 协议有望成为"USB/HTTP/ODBC 在各自领域中的地位一样"的通用标准——这个类比有一定道理，但 MCP 目前仍高度依赖 Anthropic 的治理，且生态远不及这些成熟标准那样普适。OpenAI 的加入是积极信号，但要让 MCP 真正成为行业标准，还需要更广泛的厂商中立治理和更深入的标准化工作。
3. 关于 Local MCP Server 的安全风险批评（"企业不可能将敏感数据库凭证、API 密钥或其他关键访问令牌配置给每个员工的本地环境"）很中肯，这确实是推动 Remote MCP Server 的最强动力。但 Remote 方案又把敏感凭证集中到了网关层——安全风险从"分散但可控"变成了"集中但高危"，对 Higress 自身的安全性要求极高。
