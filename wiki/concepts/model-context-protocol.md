---
type: concept
created: 2026-07-02
updated: 2026-07-02
tags: [ai, protocol, agent, llm]
aliases: [MCP, 模型上下文协议, Model Context Protocol]
---

# MCP（模型上下文协议）

## 一句话定义
MCP 是由 Anthropic 设计的开放协议，为 AI 应用（客户端）与外部扩展（MCP 服务器）提供标准化的通信接口，常被类比为"AI 应用程序的 USB-C 接口"。

## 核心原理
MCP 借鉴了 LSP（Language Server Protocol）解决"编辑器-语言"M×N 集成问题的思路，将场景换为"AI 应用-扩展"之间的对接。协议采用 JSON-RPC 和双向通信，定义了三个核心原语：

- **工具（Tool）**：由模型主动发起调用（类似函数调用），是最常用的原语（占比 >95%）
- **资源（Resource）**：可添加到模型上下文的数据/背景信息，由应用程序控制，通过 URI 唯一标识
- **提示（Prompt）**：用户驱动的交互文本/消息，类似斜杠命令或自动补全，支持多步骤提示

MCP 的核心设计原则是：工具由模型控制调用，但用户拥有完全的控制权。

## 为什么重要
1. **解决了 AI 应用的集成碎片化问题**：多个 AI 应用（IDE/聊天/Agent）与多种扩展之间的 M×N 问题，只需各自实现一次 MCP 即可互通
2. **AI 与外部世界交互的关键基础设施**：对于 AI 模型下一波能力提升"最大的瓶颈可能在于与外部世界交互的能力"——MCP 提供了标准化解决方案
3. **从 API 封装到全新 AI 能力的桥梁**：MCP 服务器不仅是 API 封装器，还可提供内存、顺序思维推理等模型本身不原生支持的能力
4. **开放治理的多公司协作项目**：已由 Anthropic 主导扩展为 Microsoft（C# SDK）、JetBrains（Kotlin SDK）、Spring AI（Java SDK）、Block、Pydantic、Shopify 等共同参与的大型项目

## 关键项目/案例
- [[anthropic]] — MCP 的发起者和主要维护者，Anthropic 的 MCP 团队由 David Soria Parra 和 Justin Spahr-Summers 领导
- [[sendai]] — Solana MCP 服务器，将 Solana 区块链能力引入 Cursor/Windsurf IDE
- [[openai]] — 2025 年 3-4 月期间，OpenAI CEO Sam Altman 正式宣布将在 ChatGPT 桌面应用等产品中集成 MCP 协议，标志着 MCP 从"Anthropic 协议"向行业标准迈出关键一步
- [[justin-spahr-summers]] — MCP 联合创造者
- [[david-soria-parra]] — MCP 联合创造者
- [[higress]] — 阿里云开源的 AI 原生 API 网关，提供完整的 Remote MCP Server 托管方案，已被 Anthropic 官方 MCP Server 项目文档收录。支持 Wasm 插件扩展、OAuth2 认证、协议版本卸载（同时支持 20241105 和 20250326 版本）

## 技术架构
- **传输层**：支持标准输入输出（stdin/stdout，本地进程）和服务器发送事件（SSE，HTTP 远程）
- **可流式 HTTP 传输**：支持循序渐进的增强——从普通 HTTP POST → 流式传输 → 服务器主动请求 → 会话恢复（Session Resumption）
- **认证**：远程场景采用 OAuth 2.1 子集；本地场景的认证方案仍在内部讨论中
- **简洁性**：约 100-200 行代码可启动一个 MCP 服务器，SDK 设计考虑了 LLM 辅助构建

## 与 OpenAPI 的关系
MCP 和 OpenAPI 并非对立而是互补：
- MCP 适合丰富的 AI 应用间交互（有状态、专为 AI 设计的基本概念）
- OpenAPI 适合模型直接读取和解释 API 规范（无状态、RESTful）
- 已有工具可以在两者之间相互转换

## Local MCP Server vs Remote MCP Server

随着 MCP 生态发展，从 Local 向 Remote 的演进已成为趋势：

**Local MCP Server**：在用户本地设备运行，通过 stdin/stdout 与客户端通信。适合个人开发者，但企业场景存在局限：需本地安装 Python/Docker 运行环境，难以为非技术用户使用；敏感凭证（数据库密码、API 密钥）需配置到每个员工本地，违反最小权限原则且有泄露风险；多用户配置难以保持一致；每个设备的维护和更新成本高。

**Remote MCP Server**：部署在云端，客户端通过 HTTP(S) 协议访问。优势包括：非技术用户可通过网页/移动应用随时随地使用；集中化安全管控和统一权限管理；中央化部署降低运维成本。但实施也带来了认证授权、服务可靠性和可观测性等新挑战——这正是 API 网关层的职责所在。

详见：[[来源_2025-04_Remote_MCP_Server_开源托管_Higress]]

## 协议版本演进

MCP 当前有两个主要协议版本：

- **20241125**（首个发布版本）：基于 HTTP+SSE 的传输机制
- **20250326**（新修订版本）：核心亮点是 Streamable HTTP 传输机制。新特性包括：单一 MCP 端点同时支持 HTTP POST 和 GET 请求；强制使用 `Mcp-Session-Id` 头实现会话管理；支持批量请求、响应和通知；SSE 流的可恢复性

协议版本快速迭代也给早期采用者带来升级负担。网关层（如 [[higress]]）可以在一个接入点上同时屏蔽多个版本差异，类似传统 API 网关统一卸载 HTTP/1.1、HTTP/2 和 HTTP/3。

## 相关概念
- [[ai-agents]] — AI Agent 是 MCP 的核心应用场景，MCP 提供 Agent 与外部工具/资源的通信基础层
- [[a2a-protocol]] — Google A2A（Agent-to-Agent）与 MCP（Agent-to-Tool）互补：MCP 解决 Agent 连接外部工具/数据，A2A 解决 Agent 之间的直接通信与协作
- [[b2a]] — Business-to-Agent，AI Agent 作为经济参与者的基础设施，MCP 可作为 Agent 能力的表达方式
- [[defai]] — DeFAI Agent 可能利用 MCP 协议与外部 DeFi 协议交互
- [[来源_2025-11_ACP_Stripe_Agent支付]] — ACP（Agentic Commerce Protocol）是面向 Agent 商业交互的协议（vs MCP 面向工具/数据交互），两者互补

## 未解决的挑战（a16z 合伙人 Yoko Li 分析视角）

a16z 合伙人 [[yoko-li]] 在 2025 年 4 月的分析中列出了 MCP 在企业级部署前必须解决的八大挑战：

1. **托管与多租户架构**：当前 MCP 支持"一个 agent 对多个工具"，但 SaaS 产品需要多用户同时访问同一 MCP server
2. **身份验证机制**：客户端认证（OAuth/API Token）、工具 API 认证辅助、多用户租户隔离验证——三层认证体系均未标准化
3. **权限控制**：当前仅 session-level（全开放或全禁用），缺乏细粒度权限模型
4. **Gateway/网关层**：统一管理认证、权限、流量调度、工具选择的关键中间层，多租户环境中最重要
5. **MCP server 发现与注册**：当前手动配置，Anthropic 已宣布即将推出标准化的注册与发现协议
6. **有状态执行**：多数 AI workflow 需依次调用多工具，但 MCP 没有内建工作流管理机制——将 stateful execution 作为 first-class concept 将极大优化执行模型
7. **标准化客户端体验**：无统一工具调用界面（slash commands vs 自然语言），缺乏标准化的工具发现/排序/调用层
8. **调试机制**：MCP server 跨客户端的兼容性困难，缺乏 remote MCP server 的调试工具链

详见：[[来源_2025-04_MCP_AI_Agent_工具交互_a16z]]

## 商业生态影响

Yoko Li 提出 MCP 对 AI 工具生态的五项颠覆性预测：

- **开发者为核心的公司面临新竞争维度**：不仅要设计优秀的 API，更要打造 agent-friendly 的高质量工具
- **新定价模式**：AI agent 基于速度/成本/相关性动态选择工具，催生市场驱动的工具选择机制
- **文档成为基础设施**：lms.txt 等机器可读格式成为默认开发产物，MCP server 由文档自动生成
- **API 从终点变为起点**：工具是比 API 更高层的抽象（从 send_email() 到 draft_email_and_send()），设计以场景/任务为核心
- **托管范式转变**：MCP client 的工作负载特征（多步骤交互/可恢复/自动重试/实时负载均衡）完全不同于传统网页托管

## 工具市场生态

Mintlify 的 mcpt、Smithery、OpenTools 等 MCP 工具市场正在形成，有望复制 npm 和 RapidAPI 的生态效应。Mintlify/Stainless/Speakeasy 降低创建门槛，Cloudflare/Smithery 解决托管与扩展，Toolbase 优化连接管理与密钥。

## 中文 Web3 社区视角：brucexu.eth 的去中心化解读

bgmi 在 2025 年 3 月，LXDAO 联合创始人 [[brucexu-eth]] 在中文 Web3 社区提出了对 MCP 的独特解读，将 MCP 定位为"AI 的去中心化革命"而非仅是互操作协议。其核心观点包括：

- **MCP Server 作为普通人参与 AI 经济的入口**：任何人都可以创建 MCP Server 提供自己的专有知识，LLM 按需调用时按 token 比例分成，让非技术人员也能从 AI 生态获得收入
- **OpenMCP.Network 设想**：基于以太坊智能合约的创作者激励网络，用智能合约自动化 MCP 创作者的支付结算
- **Slim LLM 架构**：LLM 只做语言处理和推理，具体能力由 MCP Server 分布式提供——这与 Google/OpenAI/Anthropic 当前"大一统模型"商业方向存在根本矛盾
- **d/acc（防御性加速/去中心化）**：MCP 天然去中心化 AI 知识和能力，降低单一公司控制风险

这一视角代表了"加密原教旨"对 MCP 的富有想象力的解读。但 OpenMCP.Network 目前仅是设想，Slim LLM 架构与当前主流 AI 厂商的商业方向相悖。

详见：[[来源_2025-03_MCP_去中心化_以太坊_brucexu]]

## 我的立场
MCP 在 AI 基础设施中的地位类似于 HTTP 在 Web 中的地位——它解决了一个根本性的互操作性问题。与 crypto 领域的协议竞争不同，MCP 在当前阶段获得了罕见的行业共识（Anthropic/OpenAI/Microsoft/Google/阿里云/腾讯云均支持），这是其最大的护城河。需要注意的风险：（1）AI 应用间的通信协议最终应由中立的基金会治理而非单一公司——Anthropic 目前的管理模式在初期保证了开发速度，但长期需要向真正的开放治理过渡；（2）Statefulness 和安全性的平衡仍然是一个未完全解决的问题；（3）如果模型本身的工具调用能力大幅提升（直接在模型层面解决 M×N 问题），MCP 的存在必要性可能减弱。

## 来源
- [[来源_2025-04_MCP_起源_架构_未来_深潮TechFlow]]
- [[来源_2025-04_MCP_AI_Agent_工具交互_a16z]]
- [[来源_2025-04_Remote_MCP_Server_开源托管_Higress]]
- [[来源_2025-03_MCP_AI_Agent代币_下跌_PANews]] — 从加密媒体视角分析 MCP 对 Web3 AI 生态的冲击：MCP + Manus 导致市场对 Web3 AI Agent 重新估值，揭露第一阶段 Web3 AI Agent 的"web2 化"本质
- [[来源_2025-04_A2A_MCP_Web3死亡盲区_PANews]] — 同一作者（链上观）进一步分析 MCP + A2A 两大协议在 Web3 环境的三大结构性障碍（应用成熟度断层、基础设施缺失、差异化需求），与前文形成连贯的批判性视角
- [[来源_2025-03_MCP_去中心化_以太坊_brucexu]] — LXDAO 联合创始人 brucexu.eth 从"加密原教旨"视角将 MCP 定位为 AI 的去中心化革命，提出 OpenMCP.Network、Slim LLM 架构和普通人参与 AI 经济的设想
- [[来源_2025-04_Web3_AI_Agent落地场景_Haotian]] — Haotian (CryptoInsight) 认为在 Web3 场景中 A2A 协议需求可能超过 MCP，因为 Web3 缺乏标准化 API 调用基础，但这一判断与 MCP 正获得的广泛行业共识形成张力
