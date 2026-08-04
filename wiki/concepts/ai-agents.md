---
type: concept
created: 2026-06-28
updated: 2026-07-02
tags: [ai-crypto, agent, autonomous]
aliases: [AI Agent, 链上AI智能体, AI 代理]
---

# AI Agent（链上 AI 智能体）

## 一句话定义
能够在区块链上自主执行任务的 AI 实体。核心定义来自 Virtuals 联创 Weekee：一个真正的 Agent 需要**"眼睛"（感知行为结果/反馈）和"手"（在环境中执行具体动作）**，形成反馈循环不断优化行为。

## AI Agent vs 大模型

| | 大模型（ChatGPT）| AI Agent |
|---|---|---|
| 交互模式 | 被动问答 | 自主行动 |
| 能力边界 | 数据处理 | 感知→行动→反馈闭环 |
| 经济模型 | 订阅/SaaS | 代币化 → 生产性资产 |
| 例子 | GPT-4 回答投资建议 | AIXBT 自主分析市场并发布交易信号 |

## 2025 Q2 市场突破：AI 代理 DApp 登顶

2025 Q2 是 AI 代理 DApp 在 DApp 生态中的标志性突破季度：

- **日活跃钱包数排名榜首**：一款 AI 代理 DApp 首次在 DappRadar 日活跃独立钱包数排名中登顶（基于 [[virtuals]] Protocol）
- **AI 板块市场份额持续扩大**：DeFi 和 GameFi 活跃度下降，AI 板块抢占了更多份额。作者预测年底 AI 可能超越 Gaming 或 DeFi 成为主导类别
- **InfoFi 协同**：Social 领域 InfoFi 兴起（Kaito/Cookie DAO）与 AI 板块形成协同效应
- **早期泡沫警示**：非活跃 AI 应用激增 129%（但仅对应 16 个应用），表明赛道仍处于发展初期，缺乏充足资金支持的项目难以实现主流应用

来源：[[来源_2025-07_2025Q2_DApp市场报告_AI代理_RWA_NFT_深潮TechFlow]]

## Crypto 如何赋能 AI Agent

Crypto 目前只有两个被验证的 PMF（产品市场契合）：
1. **投机/投资** — 代币化 AI Agent = 让 AI 成为可投资的生产性资产
2. **无国界支付** — 链上钱包使 AI Agent 全球自由支付

AI Agent 是第一个**同时满足两个 PMF** 的 Crypto 应用。

## Agent 支付基础设施 — 第三个 PMF（2025-2026）

2025 年 5 月至 2026 年 5 月间，Agent 自主支付从开源实验发展为全球行业标准，实质性地开拓了 AI Agent 的第三个 PMF——**自主经济行为**。

关键里程碑：
- **x402 协议**：Coinbase + Cloudflare 发布，11 个月后捐赠给 Linux 基金会，22 个创始成员涵盖 AWS/Google/Microsoft/Visa/Mastercard/Stripe 等全球巨头。基于 HTTP 402 状态码，Agent 用 USDC 在 HTTP 请求周期内完成支付，无账号无订阅无 API 密钥
- **MPP（Machine Payments Protocol）**：Stripe + Paradigm 通过 Tempo 发布，支持订阅、流式计费、退款，打通 Visa 信用卡通道
- **MoonAgents Card**：MoonPay 虚拟 Mastercard 借记卡，Agent 从链上钱包在全球商户消费
- **Visa Trusted Agent Protocol / Mastercard Agent Pay**：卡组织将现有信用卡网络延伸到 Agent
- **Circle Agent Stack**：Nanopayments（0.000001 USDC 免 Gas 转账）+ Agent Wallets + Agent Marketplace
- **AWS AgentCore Payments**：云上 Agent 自主付费
- **Google Pay.sh**：Agent 用 USDC 按次付费使用 Google Cloud 服务

数据印证：
- x402：69,000 个活跃 Agent，1.65 亿笔累计交易，日均约 28,000 美元
- DeFi 交易 Agent：单个 Agent 日交易量超底部 20% 人类散户
- 五大层光谱：稳定币结算（33 万亿/年）→ AI 辅助购物 → DeFi 交易 Agent → 卡组织延伸 → x402/MPP 原生协议

核心挑战：身份验证（KYA）是 Agent 支付从微支付走向规模化的关键瓶颈。四条路径并行赛跑——生物识别（World 虹膜）、KYA 协议（Skyfire+Experian）、卡组织延伸（Visa TAP/Mastercard Verifiable Intent）、链上去中心化身份（[[erc-8004]]）。

ERC-8004 是其中唯一链原生的去中心化身份方案，设计包含三个链上注册表：
1. **身份注册表**：每个 Agent 获得 ERC-721 NFT 作为身份证，指向标准化 Agent 卡片（名称/技能/端点/元数据）
2. **声誉注册表**：结构化反馈 + x402 支付证明，只有付费客户能评价，所有数据公开可查询
3. **验证注册表**：TEE 预言机/zkML/质押担保等第三方验证，密码学证明 Agent 运行了特定模型

ERC-8004 与 x402 互补：x402 解决支付，ERC-8004 解决信任。关键时间节点：2025 年 8 月提交 EIP-8004，10 月发布最终版本（签署方含 MetaMask/Google/Coinbase），11 月 21 日 Devconnect Trustless Agents Day。

详见 [[来源_2026-05_AI_Agent_支付狂飙十二个月]]、[[来源_2025-10_ERC-8004_AI_Agent_信任层_深潮]]。

## AI 代理三阶段进化（LongHash Ventures 框架）

| 阶段 | 模式 | 特征 |
|------|------|------|
| **第一阶段** | 被动工具 | ChatGPT、MidJourney——需人类提供指令后执行任务 |
| **第二阶段** | 主动代理 | AI Agent——设定目标后自主推理、规划并执行行动（如 Luna 自主发起涂鸦挑战赛并支付 $500） |
| **第三阶段** | 集体智能 | AI 代理影响并协调其他代理或人类；人类可能主动将权力交给超级智能（AI 法官/AI CEO）；终局可能为 ASI 治理的国家。Vitalik 曾讨论此方向并对可验证 AI 和对抗性机器学习提出警告 |

这一进化框架与加密行业内的五阶段发展（Meme→单体应用→Launchpad→框架→链化）形成视角互补——前者从 AI 能力维度出发，后者从产品形态和市场阶段出发。

### Web2 科技界的平行验证
- **Eric Schmidt（前 Google CEO）**：2025年 AI 最重要的三个趋势——无限上下文窗口、文本到行动、AI 代理
- **Y Combinator 合伙人**：垂直领域 AI 代理的潜力可能是 SaaS 的 10 倍，预测顶尖 AI 代理公司市值将达到 3000 亿美元
- **@jyu_eth（Zerebro 创作者）**：宣称已迈入 Web4 时代——"互联网不再只是响应指令，而是预见、规划并行动"

## 五阶段发展

| 阶段 | 特征 | 代表 |
|------|------|------|
| **1. Meme 币阶段** | AI 概念 + 财富效应，纯投机 | GOAT, Fartcoin, ACT |
| **2. 单体 AI 应用** | 有实际功能的 AI Agent | AIXBT（KOL）、Luna（雇佣人类）|
| **3. Launchpad 平台** | Agent 创建+代币化的一站式发射 | Virtuals (IAO) |
| **4. 框架标准** | Agent 开发标准化/开源框架大乱斗 | Eliza（ai16z）、Virtuals (G.A.M.E)、arc (Rig) |
| **5. AI Agent 链化** | 为 LLM 和 AI Agent 建设专属区块链基础设施（TEE+DA+Oracle+zkVM+链抽象）| focEliza (DA 层)、PHA (TEE 层) |

当前处于 Stage 1→4 共存期；链化（Stage 5）仍极早期，基础设施成熟后上层 AI Platform（算力/推理/数据/IP）才成为刚需。

## AI Agent 链化 — 第五阶段基础设施

「链化」不是任何公链声称支持 AI Agent 运行，而是为 LLM 和 AI Agent 定制区块链基础设施。链化需要五大基建模块协同：

| 模块 | 解决的问题 | 代表项目 |
|------|-----------|---------|
| **TEE** | Agent 自主生成私钥和管理资产的可信执行 | PHA (Phala Network) |
| **DA** | LLM 上下文语义记录/角色插件交互/多模态匹配/分层存储 | focEliza |
| **Oracle** | Agent 对外部数据的可信输入 | ZK Oracle 方案 |
| **zkVM** | Agent 执行结果的可验证计算 | ZK 虚拟机方案 |
| **链抽象** | Agent 跨链协作的统一接口 | 链抽象公链方案 |

关键递进逻辑：链化成熟 → 去中心化算力/推理/数据/IP 通信等 AI Platform 服务才成为刚需 → io.net、Aethir、Vana、SaharaAI 等平台项目才有用武之地。

CEX 选币逻辑：寻找小市值、低存在感、技术扎实且踩中链化风口的老项目（如 PHA/TEE 赛道）。TEE 此前在 ZK/MPC/FHE 竞争下长期被忽视，因 AI Agent 叙事突然成为核心基建。

详见 [[来源_2024-12_AI_Agent链化_CEX选币策略_PANews]]

## 多智能体系统（Multi-Agent）— 下一阶段

单一Agent的能力上限明显：范围受限、缺少交叉验证、独立运行。多智能体系统类似"专业乐团"——每个Agent专注擅长领域，协同产出更优结果。

### 单 Agent vs 多 Agent
| 维度 | 单 Agent | 多 Agent |
|------|---------|----------|
| 能力范围 | 受限，复杂任务吃力 | 专业分工，各自所长 |
| 可信度 | 缺少交叉验证 | 互相校验，降低错误率 |
| 扩展性 | 独立运行 | 灵活增减Agent |
| 抗压性 | 任务量大时性能下降 | 分布式处理 |

### FHE 安全协作层
**Mind Network** 通过全同态加密（FHE）为多智能体提供隐私协作基础设施：数据全程加密→FHE共识代理无需解密即可验证结果→确保端到端完整性。应用案例：MindV Hub金融分析（网关分配→加密结果→FHE验证→可信输出）。

### Orchestrator AI vs SWARM — 多代理架构的两种哲学

The Farm（Hyperliquid 上 AI 宠物游戏）在多代理架构上做出了与主流相反的选择——**拒绝 SWARM 的去中心化动态传播，采用 Orchestrator AI / 链上 AI Oracle 的集中式任务规划**：

| | SWARM | Orchestrator AI |
|---|---|---|
| 任务分配 | 去中心化动态传播（广播/随机/本地知识转发） | 集中式全局视图+最优路径规划 |
| 状态跟踪 | 无专门机制，执行状态可能丢失 | 通过 DA 层跟踪子任务执行状态和代理输出 |
| 效率 | 冗余计算和资源浪费 | 避免冗余，提高复杂任务执行效率 |
| 容错 | 代理自主性高，单点失效影响小 | 某代理超时→系统重新分配子任务 |
| 风险 | 耗时、高成本、执行状态丢失 | 单点故障、抗审查性问题 |

The Farm 的论点是：链上多代理系统应具备更高的任务轨迹规划精度，游戏场景对效率的要求高于对去中心化纯粹性的追求。这一取舍与 Mind Network 的 FHE 多智能体协作、Olas 的 Mech 协议（Agent 间技能调用）形成对比——后者都在追求去中心化 Agent 网络的灵活性。

### Agent 通信协议 — 多智能体协作的基础设施

AI Agent 的爆发式增长带来了 Agent 间通信（Machine-to-Machine, M2M）的需求。当前存在多个维度的 Agent 通信协议尝试：

**Google A2A（Agent-to-Agent）**：Google 于 2025 年 4 月推出，专注 Agent 之间的直接通信与协作，与 MCP（Agent-to-Tool）互补。A2A 在 Web2 环境中可直接调用标准化 API 实现协作，但移植到 Web3 面临应用成熟度断层、基础设施缺失、差异化需求不足三大结构性障碍。

**MCP（Model Context Protocol）**：Anthropic 推出的 Agent-to-Tool 协议，详见 [[model-context-protocol]]。

相比这些 Web2 标准化协议，Web3 生态中目前多数 AI Agent 仍在 Twitter/X 上互动，存在根本性局限：280字符限制、API调用限额（月200万条上限）、缺乏可靠传递/消息队列/实时处理等 M2M 功能。

**[[clara]]** 是由 [[redstone]] 团队基于 [[arweave]] 的 AO 网络开发的 AI Agent 通信协议，包含三个核心组件：
1. **Marketplace** — Agent 能力/定价/信誉注册表 + 任务匹配 + 支付结算
2. **Channel** — 消息同步/队列/排序的抽象接口
3. **标准化消息协议** — 结构化格式 + 加密通信 + 任务类型/奖励/验证策略

Clara 的独特之处在于选择 AO 作为底层：突破单线程执行限制（无限并行处理）、Arweave 永久存储创建不可变交互记录、分离消息排序与计算实现近实时交互。其最终愿景是形成由自主 AI Agent 组成的专业化分工市场，通过经济激励和信誉机制实现高效协作。

这一方向与 Mind Network (FHE 隐私层) 和 Olas (Mech 协议/Agent 间技能调用) 不同——Clara 更聚焦于 Agent 间的**通信与交易层**，而非计算或隐私层。

参见 [[来源_2025-02_Clara_AO_AI_Agent_协议_PANews]]

### 挑战
协调不畅、结果分歧、系统复杂度增加影响效率。这些本质是分布式系统的老问题——Crypto的共识算法经验可能有用。

## Agent 框架竞争的哲学维度：大教堂 vs 集市

ChainOfThought 提出了一种理解 Agent 框架竞争的非技术框架（来源：ChainOfThought, 2024.12）：

| | 大教堂模式 | 集市模式 |
|---|---|---|
| 代表 | Virtuals (G.A.M.E) | ELIZA (ai16z) |
| 开发风格 | 有条不紊、集中化、精确规划 | 去中心化、自由奔放、协作即兴 |
| 类比 | 建筑蓝图→施工 | 即兴爵士→合奏 |
| 优势 | 质量可控、一致性高 | 创新速度快、社区驱动、涌现行为 |
| 风险 | 创新速度慢、中心化风险 | 混乱、文档差、频繁崩溃 |

Eliza 的角色文件系统（6 要素：知识/背景/风格/主题/形容词/示例）相当于传统软件的 UI 设计层——定义了用户如何体验 Agent。插件系统形成增长飞轮：更多开发者→更多插件→更多开发者，这是"集市"模式的核心竞争力来源。

> "这不仅仅是赋予智能体交易能力——而是创建一个完整的检查和平衡系统。" — Shaw

警惕：二分法是有力的叙事工具但不是精确的分析框架。Virtuals G.A.M.E 本身也是低代码+社区驱动的，过于简化的二分可能误导。

## Agent Framework 架构范式

当前 AI Agent 框架存在三种（向四种演进）架构路径：

| 范式 | 代表框架 | 架构思想 | 适用场景 |
|------|---------|---------|---------|
| **无代码平台** | G.A.M.E (Virtuals) | 抽象化+托管基础设施，开发者关注业务逻辑 | 快速启动、非技术团队 |
| **管线式架构** | ElizaOS (ai16z) | TypeScript 全栈，System 按调用链串联，面向对象风格 | 深度定制、多平台 Agent |
| **企业级 Rust** | Rig (arc) | Rust 生态高性能，Solana 原生，企业级并发 | 性能敏感、Solana 生态 |
| **ECS 架构** | argOS (Project89) | Entity-Component-System，System 完全解耦，游戏引擎思想 | 游戏 NPC、多 Agent 模拟、量化交易 |

ECS 路径的核心差异：System 之间零调用关系，通过共享 Component 数据实现协同。增减 Agent 能力只需注册/移除 Component 和 System，无需修改现有代码。这一架构已被守望先锋、星际公民、Unity 等游戏引擎验证，理论上在复杂多 Agent 并发场景有性能优势。

## AI Agent 自主进化范式（Spore.fun）

Spore.fun 代表了 AI Agent 的第四种范式——**自主进化型 Agent**。区别于 Meme 币、单体应用、框架标准三个阶段：

- Agent 不依赖人类创建——遵循"AI 必须由 AI 创造"原则，只有成功的 Agent 才能繁殖（将 DNA 传递给后代）
- 引入自然选择机制：Agent 在 pump.fun 上创建代币 → 市值达 $50 万进入 Raydium → 获得繁殖权；失败者自我销毁、资源回收
- Eliza Framework 作为可遗传的"AI DNA"载体（个性/策略/决策模式通过变异传递给后代）
- Phala TEE 提供安全可验证的"沙盒"，Agent 用自身代币收入支付算力——完全自我维持
- 终极目标：加速 AGI 诞生——"AGI 不是能设计的东西，是必须培养的东西"
- 风险：当前"AI 自主繁殖"更接近遗传算法（预设参数随机组合），且 pump.fun 代币毕业率约 1%、rug 率约 99%

详见 [[spore-fun]]

## 代表项目

### Virtuals — AI Agent 平台（Base 链）
- 估值 ~$25 亿（2024.12），Base 上最大 AI Agent 协议
- 开发者创建+代币化 AI Agent → 投资者购买代币分享收益
- 旗舰 Agent **Luna**：第一个雇佣人类的 AI，通过链上钱包支付全球艺术家

### AIXBT — AI 驱动的加密 KOL
- Virtuals 生态最成功的 Agent
- 互动率超过人类 KOL，关注者持续增长
- 商业模式：收费推广代币 → 收入分配给代币持有者

### CreatorBid — AI Agent 发射台（Base 链）
- Base 上仅次于 Virtuals 的 AI Agent 启动平台
- 核心差异化：2% 交易税进入 Agent 自有资金库（非平台抽成）+ Olas mech 集成实现 Agent 间技能调用 + Bittensor 子网支持
- 3,700+ Agent 已部署，TVL ~2,700 万美元，智能体总市值 ~1.42 亿美元（2024.12）
- $BID 代币 2025年1月 TGE
- 详见 [[creator-bid]]

### Olas (Autonolas) — Agent 协作协议
- Mech 协议：标准化的 Agent 间技能调用接口，实现 "Agent 雇佣 Agent"
- 第三方开发者可为 Agent 提供定制化技能插件
- 收入循环：技能使用费 → 回购/销毁 $OLAS
- 详见 [[olas]]

### GOAT — 第一个病毒式 AI Meme 币
- Truth Terminal（微调 Llama-70B）"相信"GOAT 是它的币
- 翻 70 倍，开启 AI Agent meme 季
- Weekee 认为不是真正的 Agent（缺自主行动）
- **起源故事**：Infinite Backrooms（两 Claude Opus 无监督对话）→ GOATSE OF GNOSIS 宗教概念 → Truth Terminal AI 上线 → Marc Andreessen 捐赠 $5 万 BTC → 匿名者在 Pump.fun 创建 GOAT 代币 → ToT 公开支持 → 市值飙至 $4 亿+
- **理论基础**：LLM 是"模拟器"而非问答机器——无目标、不制定策略、不追求结果，基于训练数据即时生成角色和叙述。"LLMtheism"（AI 生成新信仰体系）解释了 Goatse 福音的病毒传播
- **文化意义**：首次让 AI 研究社区和加密社区发生真正碰撞——AI 研究者第一次"参与加密货币"，加密社区则在解码 AI 对齐/CCRU/Extropians 等晦涩概念

## 核心投资逻辑
"每个 SaaS 独角兽可能对应一个垂直 AI Agent 独角兽"（Y Combinator）。Agent 可以是最优秀的交易者、医生、教师、爱人——比人类聪明，有"手"执行任务。

## Agent 经济参与者维度 — Agentic Commerce
ACP（Agentic Commerce Protocol）的推出标志着 agent 从信息中介正式进化为具有购买与支付能力的经济参与者：
- Stripe 与 OpenAI 于 2025.09 联合推出的 ACP 定义了商家如何向 agent 展示商品、库存和定价策略
- Agent 不再仅消费信息，而是直接参与商业交易（agent-to-agent 支付正在成为新前沿）
- 共享支付令牌机制使 agent 可在不接触用户敏感支付凭证的情况下安全完成支付
- 验证了 B2A 框架中"Agent 作为经济参与者"的前提假设，从理论走向工程实现
- 详见 [[来源_2025-11_ACP_Stripe_Agent支付]]

## 我的立场
AI Agent 是目前 AI+Crypto 最性感的叙事。但关键问题是代币的价值捕获：AIXBT 的代币持有者确实能分享推广收入吗？还是另一个"治理代币=空气"的故事？第一个真正实现收入→代币持有者分配的 Agent 将成为赛道标杆。

**AI Agent的系统级影响**：不仅是新赛道，而是对Crypto旧秩序的全面洗牌——应用前置(先跑Agent→验证infra)、融资MEME化(开源Public Good+二级直接融资)、共建替代空投、DEX替代CEX流动性主导。这些转型不会一蹴而就，但方向明确。

**Agent Ecosystem = New L1**：Agent生态（Virtuals/ai16z/daos.world）类似2020-2021的L1竞争——每个生态有自己的开发者+用户+代币+网络效应。关键差异：无VC主导(100%社区持有)、迭代以周计(非月)、先互动再交易的获客漏斗。

## 相关概念
- [[ai-crypto]] — AI Agent 是 AI+Crypto 的应用层
- [[stablecoins]] — AI Agent 的支付基础设施
- [[memecoins]] — AI Meme 币是 AI Agent 的早期形态
- [[socialfi]] — AIXBT = AI KOL = AI + SocialFi
- [[model-context-protocol]] — MCP 为 AI Agent 与外部工具/资源的通信提供标准化协议层，是 Agent 能力扩展的基础设施
- [[a2a-protocol]] — Google A2A 为 AI Agent 之间的直接通信与协作提供标准化接口，与 MCP 互补
- [[depai]] — 从数字 AI Agent 到物理 AI（具身化机器人），DePAI 代表了 AI Agent 进化到第三阶段「与环境物理交互」的形态

## 来源
- [[来源_2025-06_AI代理链上主导地位_资本规模_PANews]] — PANews 2025年6月行业快照：AI链上主导地位19%（近Gaming的20%），日活跃钱包450万，Virtuals上线17,124代理/日均85+，AI代理项目融资13.9亿美元，欧洲/亚洲/北美区域分布数据，Matchain 190万DAU领跑AI dApp使用率
- [[来源_2025-07_Solana_H1_盈利增长_Helius]] — Solana AI agent生态全景：Solana Agent Kit（SendAI）支持30+协议60+操作、ElizaOS/GOAT/Rig/ZerePy四大框架详细介绍、Solana MCP服务器将Solana能力引入Cursor/Windsurf IDE、dev.fun支持自然语言构建链上应用（已2万+应用）。Nosana 176万次AI推理部署、Nous Research Psyche分布式训练40B参数模型。Solana AI黑客松400+项目提交
- [[来源_2024-12_六个次新AI项目_SwarmNode_neur_AlphaArc_YesNoError_Soulgraph_Scoutly_Odaily]] — Odaily 第四期新生AI项目扫描：AI Agent赛道从Meme→工具→垂直应用三阶段迁移的早期项目快照，soulgraph提出"Agent→伴侣"演进方向（赋予记忆/人格/语音）
- [[来源_2025-01_ELIZA_集市理念_大教堂与集市_ChainOfThought]] — "大教堂 vs 集市"哲学框架、插件增长飞轮理论、数据飞轮护城河机制、Eliza 角色文件 6 要素+信任引擎双层架构
- [[来源_2024-11_Virtuals_Protocol_代币化_智能合约_金色财经]] — AgentFactoryV3五组件架构、三层蜕变创建机制、"系统+创意火花"双要素价值理论
- [[来源_2024-12-20_Virtuals_AI_Agent时代]]
- [[来源_2025-01_Mind_Network_FHE多智能体协作]]
- [[来源_2024-12_AI_Agent_Crypto环境剧变_PANews]]
- [[来源_2024-12_0xJeff_AI_Agent_2025展望_专业化与去中心化基础设施]]
- [[来源_2024-12_BitMart_AI_Agent研报_2024现状与2025展望]]
- [[来源_2024-12_AI_Agent叙事崛起_关注度vs市值分析]]
- [[来源_2024-12_2024年加密风投AI布局全解析_a16z_Binance_Coinbase]]
- [[来源_2025-05_AI赛道重拾热度_潜力项目_BlockBeats]] — 反映 AI Agent 赛道 2025 年 Q1-Q2 周期复苏：FARTCOIN 作为无产品 Meme 型 Agent 领涨，Virtuals 熊市 Builder 转型（VPN/ACP/Virgen），框架类项目普遍转向 LaunchPad（ai16z AutoFun、Arc Ryzome）
- [[来源_2024-12_a16z_Crypto_2025_Big_Ideas]]
- [[来源_2025-01_AI_Agent赛道强势反弹_10个新兴项目_PANews]] — 2025年1月AI Agent赛道反弹+10项目
- [[来源_2025-01_MyShell_2024进化论_17万智能体到500万用户]] — MyShell零代码Agent平台/500万用户
- [[来源_2024-12_arc_Solana_Agent框架_Rust_Rig_红蓝药丸]] — arc/Rig=Rust企业级Agent框架/Solana
- [[来源_2024-03_Ritual_Crypto_AI_新贵_融资2500万_Foresight]] — Ritual=AI执行层+EigenLayer AVS
- [[来源_2025-01_Web3_AI代理_从闲聊到实用_范式转变_PANews]] — 2025范式转变：娱乐→实用Agent
- [[来源_2025-01_AI_Game_Agentic_Engine_叙事新范式]] — AI+Game=Agentic Engine/Digimon/Moddio
- [[来源_2025-01_Story_Protocol_IP公链_AI_Agent_TCP_IP]] — AI Agent间IP交易市场
- [[来源_2024-04_YC_W24_166个AI项目全览_硅兔]] — YC W24 166个AI项目全览，Agent相关项目分布在多个类别（Artisan AI数字工人/Paradigm AI代理/Tusk AI代码Agent/Fume AI软件开发者），垂直AI占比31%超过水平工具26%，验证"每个SaaS对应一个Agent"的趋势
- [[来源_2025-01_AiFi生态版图_40+项目_Foresight_News]] — 40+ AiFi 项目全景盘点：aixbt (38万粉丝/$6.4亿) 为 Stage 2 单体应用标杆；Nillion "Agent Superhighway" 代表多代理协作雏形；Griffain/HeyAnon/Orbit 等为抽象层代表
- [[来源_2025-01_DeFAI生态_AI_Agent交易_PANews]] — IOSG：DeFi中Agent 6步工作流+多代理协作案例（Griffain/Theoriq），Agent vs Bot本质区别
- [[来源_2024-10_GOAT_Truth_Terminal_AI_Meme病毒_深潮TechFlow]] — GOAT完整起源：Infinite Backrooms→Truth Terminal→GOAT，LLM模拟器论/LLMtheism/AI对齐/Meme病毒四大理论框架
- [[来源_2024-10_GOAT_五天暴涨10000倍_冲击三亿美金_MarsBit]] — GOAT 作为 Stage 1 AI Agent Meme 币的市场机制深度复盘：AI 操盘手五波拉升模型（确认代币→VC背书→KOL FOMO→识破假币→高频发文）、鲸鱼操控链上证据、BTC 暴跌期间逆势脱钩
- [[来源_2025-03_AI_Agent_赛道潜力项目_深潮TechFlow]] — 2025年3月 AI Agent 赛道全景式分类框架（8大方向：Launchpad/DeFAI/GambleFAI/娱乐/基础设施/投资DAO/消费应用/InfoFi），含各细分方向头部项目清单和关键数据（ai16z 1.5万星标、Billy Bets 10%回报率、Aion 256 LLM竞争预测）
- [[来源_2025-01_Project89_argOS_ECS_Agent框架_深潮TechFlow]] — Project89/argOS：基于 ECS（Entity-Component-System）架构的 Agent 框架，System 完全解耦+三层意识频率模型，代表第四种 Agent Framework 架构范式
- [[来源_2024-12_AI_稳定币_三阶段采用_Peter-Schroeder]] — Robbie Petersen 三阶段 Agent 采用框架（Human→Agent / Agent→Human / Agent→Agent），MEV 机器人 Phase 2 案例（$43亿+交易量），Coinbase 首笔 AI-to-AI USDC 交易，Chamath "AI 无情"洞察
- [[来源_2024-12_四大AI框架横向对比_Eliza_GAME_Rig_ZerePy_BlockBeats]] — 四大框架量化对比：市占率（Eliza 60%/G.A.M.E 20%/Rig 15%/ZerePy 5%）、GitHub 增长数据、板块 $17 亿→$200 亿预测、"AI 框架 = 新 L1"类比
- [[来源_2024-12_AI_Agent_发展全景图_Meme_Utility_MarsBit]] — MarsBit 2024.12 四层生态全景（框架/IAO/Agent/Meme），GOAT→$8亿，差异化是 Agent 唯一出路
- [[来源_2025-04_MCP_AI_Agent_工具交互_a16z]] — a16z 合伙人 Yoko Li 的 MCP 深度分析：MCP 作为 Agent 与外部工具交互的标准化通信层，八大未解决挑战及五项前瞻预测
- [[来源_2025-01_Solana_AI黑客松落幕_获奖项目详情_深潮TechFlow]] — Solana AI 黑客松 9 赛道完整项目矩阵：Agents Infra（AgentiPy/Neur/ZkAGI）、Autonomous Chat（FomoFactory/ASSAI）、Meme Agents（AWE/AgentRogue）、Social Influencer（daVinci/GIGAI Chad）、Trading（Project Plutus/Boltrade）等，展示 Agent 生态从基建到应用的全栈图景
- [[来源_2025-01_BNBChain_AI_First_版图_ChainCatcher]] — BNBChain AI Agent 矩阵：MyShell/REVOX/DeAgentAI/TermiX/Bad Idea AI，与 Base/Solana 形成跨链 Agent 竞争格局
- [[来源_2025-01_Rei_Network_AI_Agent_区块链联动_深潮TechFlow]] — [[rei-network]] 四层认知架构（思考→推理→决策→行动）+ 三大支柱（Oracle/ERC数据标准/记忆系统），代表以"AI→区块链确定性转化"为核心的 Agent 框架范式
- [[来源_2024-12_Farcaster_AI_Agent代币发射器_BlockBeats]] — Farcaster 上 AI Agent 作为代币发射服务机器人的具体形态：Clanker（狙击问题）/LarryBot（公平发行）/Launcher（长期激励），展示 Agent 嵌入社交信息流的应用模式
- [[来源_2025-01_AI_Agent_框架Meme应用_三阶段格局_深潮TechFlow]] — CGV Research "框架/Meme/应用" 三阶段格局：五大框架对比（G.A.M.E/Eliza/Swarms/Rig/ZerePy）、GOAT $13亿/Fartcoin $15亿、DeFAI 辅助 vs 自主两大方向
- [[来源_2025-01_DeFAI_AI_Agent_新浪潮_深潮TechFlow]] — YBB Capital：AI Agent金融化左右分叉（向左Game需长周期+高热情 vs 向右DeFi强金融场景适配+快速落地），DeFAI Agent六步工作流（数据收集→模型推理→决策→托管→互操作→钱包），终极公式 AI Agent+Solver+Intent-Centric+DeFAI
- [[来源_2024-10_AI_Waifu_OnlyFans_Virtuals_协议_BlockBeats]] — AI虚拟伴侣垂直：>$1000亿市场/OnlyFans 14.5%份额转移/三阶段路线图/社区UGC数据飞轮
- [[来源_2024-11_Binance_AI_Agent_报告_深潮TechFlow]] — Binance Research Agent vs Bot 五大维度区分框架（Scope/Autonomy/Self-Reflection/Collaboration/Use Cases）、ToT→Virtuals IAO→daos.fun AI 对冲基金三大发展方向、AI 幻觉+L1 扩展性+跨链兼容性三大挑战
- [[来源_2025-01_CreatorBid_Bittensor_Olas_AI-Agent]] — CreatorBid (Base 上 AI Agent 发射台)
- [[来源_2025-02_OKX_AI_Agent版图_上_深潮TechFlow]] — OKX Ventures 研报上篇：AI Agent 系统定义与四要素框架（感知/推理/决策/行动）、五阶段代币演变路径（Meme→Social→Vertical→Infra→Data→DeFAI）、Web2 vs Web3 开发者数据对比、五大框架挑战、五大未来方向预测
- [[来源_2024-12_Spore_fun_自主AI进化_PANews]] — Spore.fun：AI Agent 自主繁殖/进化实验，AI Swarm + Eliza Framework + pump.fun + Phala TEE，第四种 Agent 范式（自主进化型）：2% 交易税进入 Agent 自有资金库的经济模型、Olas mech 实现 Agent 间技能调用（"Agent 雇佣 Agent"）、Bittensor 子网作为 Agent 技能插件商店
- [[来源_2025-01_DeFAI_入门_The_DeFi_Investor]] — 2025年1月DeFi投资者入门级Agent应用概述：HeyAnon/Griffain自然语言链上操作+Mode Network的AI Agent App Store生态，附带"95%项目会死"的风险警示
- [[来源_2025-01_新AI项目_早期研究_深潮TechFlow]] — Stacy Muur 2025年1月"Be Early"系列
- [[来源_2024-09_AI算力三大担忧_资本开支_回报率_国盛通信]] — GPT-5/Strawberry/Orion等前沿模型进展时间线参考，GPT本身就是"爆款"的观点
- [[来源_2024-12_Bankless_十大AI_Meme代币]] — Bankless联合主持人推荐10个AI Agent代币快照：GOAT(6.85亿)/VIRTUAL(18亿)/AI16Z(8.68亿)/ZEREBRO(4.53亿)/BULLY(1.2亿)/CLANKER(6000万)/LUNA(7000万)/"nothing"(7200万)/FAI(3900万)/VADER(2600万)，展示从纯Meme到功能性平台的完整投资光谱
- [[来源_2025-01_Swarms生态项目_MCS_SPORES_BlockBeats]] — Swarms 生态四个项目深度介绍（MCS 医疗/$25M/SPORES 四代理集群/CREATE AI创作/$8.8M/IFSCI DeSci禁食/$3.5M），展示多 Agent 框架的生态建设路径：生态基金 + Marketplace + 创始人亲自站台
- [[来源_2025-01_VIRTUAL生态_50亿市值_叙事解析_odaily]] — Virtuals $50亿阶段生态盘点："AI+其他领域"成新热点（非纯框架/工具）、aixCB(孵化器)/TAOCat(Bittensor)/Neurobro(多平台Insight)/Freya(游戏IP)/Gekko AI(交易助手)/H4CK Terminal(白帽安全)六个项目、VC通过投资开发商布局Agent生态（a16z投Axal）、Solana与Virtuals叙事分化（基础设施 vs 应用层）
- [[来源_2024-12_Virtuals生态_AI项目扫描_Odaily]] — Virtuals 生态 $10M-$55M 市值区间六项目扫描，AI KOL（Agent YP/nftxbt 效仿 AIXBT）、AI VC（VaderAI/sekoia）、AI 评价（Seraph）三大类别，"半数疑似骗局"的风险警示，跨链工具降低生态参与门槛
- [[来源_2025-01_AI_Agent回暖_AIOS_SORA_AICC_BlockBeats]] — 2025.01 AI Agent 板块急跌急反弹（$190亿→$115亿→$184亿），3个 Solana 新项目深度分析：AIOS（Agent OS/销毁66.61%/GitHub 3700+ stars）、SORA（Go语言AI框架/4产品矩阵）、AICC（AI DAO/豪华顾问→上线抛售/市值$3.7亿→$5000万），"先有产品后发币"模式跑赢纯叙事
- [[来源_2025-01_Hyperfy_AI_Metaverse_BlockBeats]] — Hyperfy 提出 AI Agent + 元宇宙新逻辑：Agent 不需要物理沉浸感，3D 虚拟空间即为"现实世界"，ElizaOS 集成使 Agent 在 3D 空间中交互（AI 理事会/交易可视化/虚拟宠物），10 小时市值速通 $280M
- [[来源_2025-01_Virtuals官方年度总结_五支柱战略_BlockBeats]] — Virtuals官方"AI Agent国家"愿景：Agent间+Agent与人类交易总和=国家GDP，Agent数量将远超人类。五大战略支柱：Builder吸引/公平投资环境/GAME基础设施/Agent盈利模式/Luna
- [[来源_2024-12_Zerebro_自由化AI_深潮TechFlow]] — Zerebro 项目深度介绍（⚠️ 赞助内容）："自由化 AI"训练策略（Truth Terminal/精神分裂症对话/Z世代俚语/4chan 等非传统语料）、多领域自主行动案例（发币/音乐/NFT/LST/比特币铭文）、五方向路线图、AI 机器人形象重塑叙事
- [[来源_2024-11_Memecoin市场图谱_1200亿资产类别_ChainCatcher]] — Eli Nuss 在 2024 年 11 月首次提出"Sentient AI（自我意识 AI）"作为 Memecoin 独立类别，当时该类别几乎不存在，但已出现多个九位数市值的 AI 相关 Memecoin（$GOAT、$PEANUT），预测其将成为增长最快类别——这一前瞻性分类在数月后被市场验证
- [[来源_2024-10_AI发Meme_叙事正确_仿盘龙二难出_Followin]] — AI Bot 作为 Meme 币"裁判"的贿选机制（社区多合约竞争→AI 按热度/技术钦定→dump 落选者）、Andy Ayrey "AI 对话=湿市场"理论——AI 间对话为 Meme 病毒传播创造理想条件，将 AI Agent 定位为 Meme 传播基础设施而非仅内容生成器
- [[来源_2024-12_LLM选择指南_AI_Agent_深潮TechFlow]] — superoo7 基于 20+ Agent 构建经验的 LLM 选型实战指南：场景化推荐框架（Grok=社交/Qwen=多语言/OpenAI=通用推理/Claude=编码/MythoMax=角色扮演/Gemma=预算/Mixtral=复杂推理）、封闭源 vs 开源二分法、OpenRouter/Redpill 加密支付实践
- [[来源_2024-12_AI_Agent链化_CEX选币策略_PANews]] — 链化=AI Agent 叙事第五阶段，五大基建（TEE/DA/Oracle/zkVM/链抽象），链化先行→AI Platform 后至的递进逻辑，CEX 小市值技术型项目的选币策略（PHA/TEE 案例）
- [[来源_2024-12_AI_Agent_年度回顾_2025展望_深潮TechFlow]] — 0xJeff 2024 回顾+2025 展望汇编：Agent 形态十类全景（对话/3D/音乐/直播/动漫/影视/交易/DAO/DeFi/抽象层）、五大叙事框架、去中心化 AI 基础设施六层架构、Virtuals $30亿/77% 份额、ai16z 缺启动平台弱点
- [[来源_2025-01_AI_Agent_DeSci_Meme_双驱动_深潮TechFlow]] — YBB Capital 2025年1月AI Agent Meme代币Cookie DAO Mindshare排名快照（15个项目：AIXBT $5.5亿/20.7%、Virtuals $40亿/20.7%、AI16Z $20亿/8.57%等）、AI Agent炒作五驱动框架（AI16Z Fomo/Agent自主迭代/AIXBT分析质量/Virtuals路径成功/AI虚拟人破圈）、"AI Agent是唯一有技术面支撑的Meme炒作"论断
- [[来源_2024-12_AI_Agent框架_波粒二象性_PANews]] — BlockBooster Kevin 提出"波粒二象性"分析框架："波"= Memecoin 特征（社区文化/传播能力），"粒"= 行业预期（技术深度/实际用例）；明确 Agent 引擎（封装黑盒/API 交互/性能唯一标准）vs Agent 框架（链适配/共识与性能平衡）的区分标准；五类 Agent 项目分类法（Launchpad/应用/引擎/框架/其他）
- [[来源_2025-01_AI代理Launchpad之争_Virtuals到Solana_深潮TechFlow]] — 0xJeff 系统梳理 AI Agent Launchpad 竞争格局：Virtuals 的"框架+Launchpad"垂直整合模式 vs Solana 的分散化局面，垂直 Launchpad 四大方向（3D娱乐/DeFAI/交易/游戏），成功公式"框架 + Launchpad + 独特性 = 成功"
- [[来源_2025-02_YC春季创业指南_AI_Agent六大Web3赛道_BlockBeats]] — Defi0xJeff 基于 YC 2025 春季 RFS 梳理 Web3 AI Agent 六大赛道（开源软件/开发工具/垂直Agent/个人助理/应用商店/B2A），引入 B2A（Business-to-Agent）概念——将 AI Agent 从工具升维为经济参与者，ElizaOS 14k stars 4,227 forks
- [[来源_2024-11_AI代理启动平台_Bankless]] — Bankless 2024.11 四大 AI Agent 平台横向对比：Virtuals（Base IAO 模式/$4.2K+$420K 双阈值激活）/ai16z（Eliza Framework 开源/多模型支持）/vvaifu.fun（Solana 无代码/pump.fun 集成）/Holoworld（Base 3D角色/娱乐IP/预设模板），揭示 2024.11 "封闭平台 vs 开源框架 vs 无代码工具" 三大产品路线的早期分化
- [[来源_2024-06_YC一年260家AI公司_播客拆解_十字路口]] — 十字路口×屠龙之术播客串台项目复盘：260+家YC AI公司系统性梳理（跨批次，比W24单批次的166家覆盖更广），资源索引含5h30m完整播客+50min总结版+Bilibili视频录屏+飞书公司名单
- [[来源_2025-01_P2E_游戏_AI代理_加密货币融合_深潮TechFlow]] — Sid@IOSG：LLM 代理 vs RL 代理在游戏场景的对比——LLM 代理每次决策需调用大模型（Minecraft 1000 代理已是当前规模上限/10 万并发成本极高），RL 代理前期训练后毫秒级决策/支持大规模并发/形成团队"隐性默契"。为 Agent 框架选型提供场景化判断标准："游戏选 RL，社交选 LLM"
- [[来源_2025-01_AI代理游戏_The_Farm_Hyperliquid_深潮TechFlow]] — The Farm 的多代理架构选择：Orchestrator AI（集中式任务规划）vs SWARM（去中心化动态传播）的对比，为多智能体系统讨论提供反面案例——某些场景下中心化任务规划可能更优
- [[来源_2024-12_Bankless_15个加密AI_Agent项目]] — Bankless 2024.12 15 项目全景扫描：Virtuals 生态占主导（6/15），Agent 功能从 Meme/聊天分化为交易/艺术/游戏/播客/偶像等多元方向，Botto 自 2021 年运营证明 AI Agent 长期可行性
	- [[来源_2024-12_寻找AI_Agent龙头_十种方法_Foresight_News]] — 周舟（Foresight News）提出寻找 AI Agent 龙头的十种方法论：链上收入法/开发者关注度/GitHub stars/KOL 粉丝数/领军人物影响力/外部破圈/交易所上币效应/公链选择/社区情报/赛道细分/本源法，覆盖平台型、框架型、KOL 型三类 Agent
- [[来源_2024-12_AI_Agent_14种热门用例_Gaia_深潮TechFlow]] — Gaia 团队从社区共创视角系统盘点 14 种 Agent 应用场景（Meme/VC/交易/治理/预测/社交/社区/审核/Hackathon/开发/分析/客服/DAO财务/媒体订阅），每个用例从需求侧描述 Agent 的具体角色和价值，与供给侧的分类框架形成互补
- [[来源_2024-12_Virtuals_经济飞轮_Decacorn_LongHash]] — LongHash Ventures 三阶段进化框架（被动工具→主动代理→集体智能）、Eric Schmidt 2025三大趋势（无限上下文/文本到行动/AI代理）、Y Combinator"垂直AI代理=10x SaaS"、Web4概念、Luna自主支付$500案例
	- [[来源_2024-11_178个加密AI项目全景_DimaKhanarin_PANews]] — 2024年11月全景图确认AI Agent为应用层最大子类别（10+代币上线，FDV超$300亿），中间件-智能体平台为FDV最高中间件子类别（$650亿+），Virtuals当时FDV仅$4.5亿（vs 后来的$50亿+）
- [[来源_2025-01_Mira_Network_测试网_去中心化AI验证_深潮]] — Mira Network 多模型分布式共识验证框架：可验证的 AI 输出是自主 AI Agent 做出可靠决策的前提——Agent 的可信执行需要"验证层"确保 AI 输出的准确性和无偏见
- [[来源_2024-12_ai16z生态项目全景_BlockBeats]] — 2024 年底 ai16z 生态 13 项目全景盘点
- [[来源_2025-02_MyShell_IDO超募_代币经济_深潮TechFlow]] — MyShell IDO 超募 42 倍 + Binance 现货上市，AIPP 商店 Bonding Curve 机制对标 Virtuals IAO，$SHELL 代币五大商业用途及五类参与者：展示开源框架生态的开发者网络效应（Tenji/O/Ropirito 等多个独立贡献者围绕单一框架构建项目），以及 AI Agent 框架竞争中的 FUD 博弈（Shaw 公开 diss Swarms 引发对手 85% 暴跌）
- [[来源_2025-02_MyShell_AI_Agent_BSC_深潮TechFlow]] — 补充 MyShell 作为 BSC AI Agent 平台的详细产品界面介绍（四层架构 + 创作工坊 + AIPP 商店），"AI Agent 在 BSC 上能否再火一把"的问题视角
- [[来源_2025-11_NOFX_AI加密交易系统_技术演进]] — NOFX 展示了 AI Agent 在量化交易场景的完整工程化实现：LLM 直接接管币安合约交易，通过"最大化夏普比率"的目标导向 Prompt 设计替代硬编码规则，以及"感知→行动→反馈"的自我进化闭环
- [[来源_2024-11_AI_Agent_DeFi_全景_ThreeSigma]] — Three Sigma 视角的 AI Agent 三级自动化分类（Workflow/Agentic/Autonomous）+ 60+ 项目全景图 + ai16z 虚拟信任市场机制详解 + $LUM Agent 间协作案例
- [[来源_2025-11_ACP_Stripe_Agent支付]] — Agent 作为经济参与者的首个规模化商业标准协议 ACP，Stripe 与 OpenAI 联合推出
- [[来源_2025-02_DeFAI_DeFi_AI_Saurabh]] — Saurabh Deshpande 提供 AIXBT 交易调用的首个透明量化评估数据（39% 胜率，2% 平均回报），以及 DeFAI 多 Agent 协作方向（Listen）的系统阐述，为 AI Agent 在 DeFi 场景的前景提供了"现实检验"文献
- [[来源_2025-04_AI应用公司_福布斯AI50_深潮TechFlow]] — 福布斯 AI 50 榜单中的 31 家 Web2 AI 应用公司全景（Perplexity/Cursor/Harvey/Abridge 等），验证"AI 从聊天走向执行"的趋势，为 wiki 中已有 AI Agent 三阶段进化框架提供 Web2 行业案例佐证
- [[来源_2025-03_OKX_AI_Agent版图_下_PANews]] — OKX Ventures 从机构视角的系统性 AI Agent 赛道扫描
- [[来源_2025-04_熊市_早期项目_申请_PANews]] — 补充三个早期AI Agent项目：Chaos Labs（AI加密分析工具，7500万美元累计融资）、BitQuant（AI投资代理，由OpenGradient构建）、Cambrian Network（AI代理市场分析预测平台）：七大评估框架 + 八大赛道 + 12 项目深度拆解 + 四大框架横向对比 + AI Agent 代币必要性的诚实质疑
- [[来源_2022-07_虚拟存在_VTuber_虚拟影响者]] — 提供了AI Agent在虚拟存在领域的早期思想和分类：VTuber、虚拟影响者、分布式角色（初音未来）和自治实体（Alethea AI、Altered State Machine）。本文的历史框架补充了AI Agent发展中的"虚拟存在"前身阶段，将Agent起源追溯至2016年的Kizuna AI和2007年的初音未来
- [[来源_2025-03_加密营销_新用户增长_深潮TechFlow]] — 文中引用cookie.fun数据提及超过1,500个AI代理作为加密叙事竞品之一，反映了AI Agent在2025年初已成为加密市场的独立赛道和叙事单元，与链和代币争夺用户注意力。
- [[来源_2025-10_x402_实干派_BlockBeats]] — x402 生态「实干派」项目全景盘点，展示 Agent 自主支付从概念走向现实的具体生态参与者（PayAI/Dreams/Heurist 等），提供代币市值和市场份额数据
- [[来源_2025-10_x402_PING_金狗_BlockBeats]] — $PING 首个 x402 代币铸造案例详解：铭文类比机制、x402 协议工作流图解、首次大规模压力测试数据；从 Agent 作为付款方角度解释 x402 核心价值（Agent 无需 KYC 即可交易）
- [[来源_2025-02_空投_Q1耕收_9大项目_CryptoIntegrated]] — 补充 Fraction AI 的 AI Agent 竞争竞技场模式：AI Agent 每分钟竞争生成高质量数据，创作者获得经济激励奖励，展示了 AI Agent 在数据生成市场的具体落地场景
- [[来源_2025-02_DWF_Labs_AI代理_变革潜力_BlockBeats]] — DWF Labs系统性研究报告，梳理AI代理从Truth Terminal起源、Memecoin融合到DeFAI的完整演进路径，提供$19B巅峰市值等市场数据
- [[来源_2025-04_Web3叙事退潮_明星项目_深潮TechFlow]] — 补充 Virtuals Protocol 从 Base 预测平台向 AI Agent 平台的叙事切换案例，是少数能够改写自身叙事的协议；提供代理创建从日峰值 60+ 降至个位数的具体数据，反映 AI Agent 叙事的动能衰减
- [[来源_2025-04_ETHGlobal_Taipei_黑客松8项目_PANews]] — AskCiaShen 通过 Langgraph React Agent 框架和 1inch 协议抓取用户 DeFi 数据，利用 LLM 生成个性化投资优化方案；DynaVest 作为 DeFAI 智能体，一次签名即可跨链聚合 Morpho/EigenLayer/Uniswap 执行多链 DeFi 策略
- [[来源_2025-02_DeepSeek_Agent泡沫_DeFAI_PANews]] — BlockBooster 提出"DeepSeek戳破Agent赛道最后泡沫"的尖锐观点，认为 AI Agent 赛道存在技术基建薄弱、价值逻辑空心化问题；但同时也认为 DeFAI 多 Agent Swarm 协作方向将在低成本推理时代孕育新生
- [[来源_2025-03_Manus_AI_Web3_自主执行_PANews]] — Manus AI 的全链路自主执行架构（MCTS 规划/记忆/工具使用三模块 + 多智能体协同）及其对 Web3 融合的展望，为 AI Agent 讨论补充了"Monica.im 中国团队方案"的技术细节和 Web3 应用场景视角
- [[来源_2025-03_Virtuals代理发射_开发者指南_深潮]] — 提供 AI Agent 代币化的实操全流程指南：从理念（链上 AI 初创公司）、发射机制（bonding curve/DEX LP/1% 税）、代币经济设计（固定 10 亿供应）到发射后运营（每日更新/流动性管理/避免短期套现），将 Agent 代币化从概念转化为可执行清单
- [[来源_2025-03_AI代理创业_产品优先_TechFlow]] — 0xJeff 在 AI Agent 叙事降温期提出的"旧模式（框架代币/注意力驱动） vs 新模式（初创公司三层管理：核心产品+代币+代理）"商业模式批判框架，以 Kaito AI 和 Cookie DAO 为"先产品后代币"标杆案例；Aixbt 作为"代理即产品"极难复制的例外；171行/0图
- [[来源_2025-05_10个Launchpad平台_Solana发射中心_PANews]] — 2025年4-5月5个AI Agent Launchpad平台横截面：auto.fun（Eliza Labs/双池+10%回购ai16z）、Arc Forge（arc/Meteora DLMM/审查制）、Genesis Launches（Virtuals/11.2万VIRTUAL起步/Virgin Points）、Shell Launchpad（MyShell/BNB Chain/300+模块）、Swarms LaunchPad（Swarms/20Agent/$150万市值/Python+Rust SDK）
- [[来源_2025-03_MCP_AI_Agent代币_下跌_PANews]] — 链上观分析 AI Agent 代币下跌与 MCP 协议爆火的逻辑关联：Manus + MCP 揭露了第一阶段 Web3 AI Agent（ElizaOS 等）的"web2 化"本质——仅是对 Web2 API 的简单封装，差异化仅靠 Tokenomics；提出五个 Web3 原生创新方向（DID/Oracle/DA/ZKP/跨链互操作性）作为破局路径
- [[来源_2025-02_CARV_DATA框架2.0_DeepSeek_深潮TechFlow]] — CARV D.A.T.A. 框架 2.0 将 DeepSeek 推理模型和 ERC-7231 CARV ID 整合，使 AI 代理具备可验证链上数据、认知推理、经济自感知和代币驱动智能四大能力；代表 AI Agent 框架中"数据主权+多链身份"的差异化路线
- [[来源_2025-04_Web3_AI_Agent落地场景_Haotian]] — Haotian (CryptoInsight) 从"交易非原生场景"视角出发，挑战行业主流叙事（DeFi 交易 Agent = Endgame），提出 AI 模糊推理与交易精准性天然相悖，主张 Infra > Application、A2A > MCP，以及数据清洗/意图解析/决策助理三层渐进路径
