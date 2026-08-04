---
type: source
source_type: article
url: https://www.techflowpost.com/article/detail_25192.html
date: 2025-04-23
ingested: 2026-07-02
---

# MCP 创造者谈 MCP 的起源、架构优势与未来——专访 Anthropic MCP 团队

## 阅读证据
- 总行数: 426
- Q1 (前25%): MCP 的灵感来自 LSP（Language Server Protocol）。David Soria Parra 在 2024 年 7 月加入 Anthropic 后，因 Claude Desktop 功能有限而 IDE 缺少其功能感到沮丧，意识到这是"多个应用程序与多种集成的 M×N 问题"，遂找到 Justin Spahr-Summers 共同构建 MCP
- Q3 (中后25%): Justin 指出对于 Claude 来说支持数百个工具比较稳妥，工具数量的上限取决于工具描述的重叠程度和模型清晰度；工具调用（Tool calling）在 MCP 集成中占比超 95%
- Q4 (最后25%): Justin 和 David 希望 MCP 成为一个真正的社区项目而非"Anthropic 的协议"——目前 Microsoft（C# SDK）、JetBrains（Kotlin SDK）、Spring AI（Java SDK）、Block、Pydantic 等公司已拥有 SDK 管理权限
- 图片: 0 analyzed / 1 decorative skipped / 1 external URL unavailable

## 核心要点
1. **MCP 的诞生**：2024 年 7 月由 David Soria Parra 从 LSP 获得灵感，与 Justin Spahr-Summers 共同构建，约一个半月完成首次集成，2024 年 11 月 25 日正式发布。起源于内部黑客松中 3D 打印机控制、记忆功能等原型的成功。
2. **三大核心原语**：Tool（工具，由模型主动发起调用，占比超 95%）、Resource（资源，可添加到上下文的数据/背景信息，由应用控制）、Prompt（提示，用户驱动的交互，类似斜杠命令）。三者设计从应用开发者角度出发，而非模型角度。
3. **MCP vs OpenAPI**：并非对立而是互补——MCP 适合 AI 应用之间丰富的交互，OpenAPI 适合模型直接读取和解释 API 规范。已有工具可以在两者之间转换。
4. **构建 MCP 服务器**：约 100-200 行代码即可启动，强烈推荐 AI 辅助编码；SDK 设计时特意考虑了让 LLM 能够参与构建。MCP 服务器不仅是 API 封装器，还可以提供全新能力（内存、顺序思维推理等）。
5. **Statefulness 争议**：团队内部最具争议的话题——AI 应用和 Agent 的未来倾向 Statefulness，但不能背离现有范式，需在 Statefulness 与操作简便性之间平衡。推出的可流式 HTTP 传输方案支持会话恢复（Session Resumption）。
6. **开放治理**：Anthropic 希望 MCP 成为真正的社区项目，目前已有 Microsoft、JetBrains、Spring AI、Block、Pydantic、Shopify 等多公司参与贡献。采用 OAuth 2.1 子集进行远程授权认证。

## 关键数据
- **2024 年 7 月**: David Soria Parra 产生 MCP 想法；**约 1.5 个月**: 从概念到首次集成完成
- **2024 年 11 月 25 日**: MCP 正式发布日期
- **100-200 行代码**: 启动一个 MCP 服务器所需代码量
- **250+ 工具**: Claude 百万 token 上下文理论上支持的工具数；实际数百个比较稳妥
- **工具调用占比 > 95%**: 当前所有 MCP 集成中工具调用的使用比例
- **6+ 公司**: 已拥有 MCP SDK 管理权限的非 Anthropic 公司（Microsoft, JetBrains, Spring AI, Block, Pydantic, Shopify）

## 与已有知识的关系
- 补充 [[anthropic]] — 本文提供了 Anthropic 在模型之外的重要产品战略——MCP 协议的完整起源、设计哲学和治理模式，是目前 Anthropic 实体页中缺失的核心信息
- 补充 [[ai-agents]] — MCP 作为"AI 应用的 USB-C 接口"，是 AI Agent 与外部工具/资源通信的基础协议层，与 ai-agents 概念页中 Agent 框架/链化基础设施形成互补
- 补充 [[sendai]] — SendAI 推出的 Solana MCP 服务器将 Solana 能力引入 Cursor/Windsurf IDE，是 MCP 生态在 Web3 领域的实例应用

## 值得记住的引用
> "工具由模型控制，指的是仅仅由模型来调用，而不是由用户主动指定使用某个工具（出于提示目的的情况除外）。" — David Soria Parra，解释 MCP 核心设计原则

> "目标是实现 AI 应用之间丰富的交互，那么 MCP 就更适合；如果希望模型能够轻松读取和解释 API 规范，开放 API 会是更好的选择。" — Justin/David，对比 MCP 与 OpenAPI

> "对于模型下一波能力的提升，最大的瓶颈可能在于与外部世界交互的能力，比如读取外部数据源、采取 Statefulness 的行动。" — David Soria Parra，阐释 MCP 的战略意义

> "我们不希望它仅仅被视为'Anthropic 的协议'。我们希望各个 AI 实验室和公司都能参与进来或者利用它。" — Justin/David，关于 MCP 的开放治理愿景

## 我的笔记
这份采访最独特的价值在于它来自 MCP 的创造者本人，而非第三方分析——因此对 MCP 的设计哲学（从 LSP 借鉴、三大原语的区分逻辑、工具由模型控制的原则）的阐述具有第一手的权威性。值得注意的是，MCP 从一开始就考虑了"让 LLM 能参与构建服务器"的设计目标，这意味着 MCP 的简化设计本身也是一种"AI 友好"的策略选择，而不仅仅是技术决策。最值得深思的是 Statefulness 的讨论——团队内部最大的争议在于协议应该在状态化程度上走多远，这种谨慎与 AI 行业普遍追求"更强大"的叙事形成了有趣的张力。对于 Web3 研究者来说，MCP 的开放治理演进（从 Anthropic 主导到多公司参与再到潜在的基金会化）与 blockchain 项目的治理演进有很强的类比价值。
