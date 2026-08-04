---
type: entity
entity_type: company
created: 2026-06-30
updated: 2026-07-02
tags: [payment, stablecoins, payfi, ai, agent]
---

# Stripe

## 基本信息
- 类型：全球支付处理公司（私有），估值 ~$1,060 亿（2025.11）
- 总部：旧金山 / 都柏林（双总部）
- 创始人：Patrick Collison & John Collison
- 核心业务：支付处理 API + 增值金融服务
- Head of Data & AI: Emily Glassberg Sands

## 核心业务/产品
提供在线支付基础设施，处理信用卡、借记卡、ACH 及多种本地支付方式。2024 年重新整合加密支付，通过 Phantom 钱包在 Solana 上演示加密交易。核心创新是 Stablecoin Sandwich 方案：用户在 Stripe 端用法币支付 → Stripe 内部将法币兑换为 USDC → 通过区块链网络传输 USDC → 将 USDC 兑换回法币 → 商户收到法币。用户和商户均无需接触加密货币，所有链上操作封装在 Stripe 内部。

## 稳定币支付流程（Stripe + USDC）

以 $6 咖啡交易为例：

1. **用户支付阶段**：用户向 Stripe 发起 $6 支付请求 → Stripe 调用发卡行接口扣款 → 资金进入发卡行清算账户
2. **银行清算阶段**（费用合计 $0.135）：Interchange $0.108 (1.8%) + 卡组织网络费 $0.009 (0.15%) + 收单行费 $0.018 (0.3%)
3. **Stripe 内部处理**：收到清算金额 $5.865 → 兑换为等值 USDC → 区块链网络传输（几秒内确认）→ USDC 兑回美元
4. **商户收款**：商户收到 $5.865，全过程技术上可在 1 分钟内完成（传统模式需 T+1 或 T+2）

## 关键数据
- 收购 Bridge：$11 亿（2024 年 10 月），押注稳定币支付基础设施
- 收购 OpenNode：深化加密货币支付基础设施（时间未披露），与Bridge形成互补
- 稳定币支付授权速度：1 分钟内（vs 传统 T+2）
- 传统银行卡清算费用：$6 交易约 $0.135（2.25%）

## 竞争优势 / 护城河
- 全球最大的在线支付处理平台之一，拥有庞大的商户网络
- 通过收购 Bridge 获得稳定币支付基础设施，构建"防御性 + 进攻性"战略：即使传统支付手续费不变，通过加快结算速度提升商户体验
- Stablecoin Sandwich 架构保持与传统支付系统的兼容性，降低用户/商户迁移成本
- 为未来全 USDC 闭环支付留下扩展空间

## Agentic Commerce Protocol (ACP) — 与 OpenAI 联合推出
- 2025 年 9 月与 OpenAI 联合推出 ACP（Agentic Commerce Protocol），面向 Agent 经济的开放商业标准
- **不是产品而是协议**：Stripe 将其定位为开放共享标准，不绑定 Stripe 支付体系，意在促进整个互联网商业生态增长
- **核心功能**：定义商家如何向 AI agent 展示商品、库存、品牌形象与定价策略；agent 无需针对每个平台定制化开发
- **共享支付令牌（Shared Payment Token）**：agent 在不接触用户敏感支付凭证情况下安全完成支付
- **欺诈检测机制**：风险评分体系，区分"善意机器人"和"恶意机器人"，针对票务囤货等新型滥用场景
- **首批合作伙伴**：Etsy、Shopify 商家（Glossier）、Salesforce、Walmart、Sam's Club
- **ChatGPT Instant Checkout**：首批验证场景，用户可通过 ChatGPT 直接完成购买

## Storage Balance（存储余额）
- 商家在 Stripe 内部预先存放的资金，可用于未来付款或全球代发（Global Payouts）
- 资金可从银行账户或 Stripe 收款余额转入，加快支付执行速度
- 在微交易领域有望发挥关键作用：购买 5-10 美分的 AI 推理或内容服务时，传统卡片支付效率低

## AI 公司专属计费模式
- **Token Billing**：通过 API 实时追踪底层 LLM 推理成本并动态定价，帮助 AI 公司在模型成本波动中维持健康单位经济
- **Outcome-based Billing**：按成功业务成果计费（如 Intercom 按 AI 成功解决的案例数量收费），降低企业客户采用门槛
- 几乎所有领先 AI 公司都在使用 Stripe 计费套件

## AI 内部应用
- 约 1 万员工中每天约 8,500 人使用 AI 工具
- LPM（Local Payment Methods）团队：新支付方式集成从 2 个月缩短至 2 周（借助 LLM）
- 65-70% 工程师日常使用 AI coding 助手
- Hubert：自然语言数据查询工具，约 900 员工每周使用，从自然语言生成 SQL 并解释逻辑
- 内部 MCP 服务器正在开发：集中管理内部工具（Slack、Google Drive、Git、数据目录等）
- 向语义事件基础设施转型，计划未来六个月内重构支付和计费流程

## Agent 支付布局（2025-2026）
Stripe 在 Agent 支付领域的布局是巨头中最多角度的：它不下注单一路线，而是在竞争协议的每一个关键位置都布下了棋子。

- **MPP（Machine Payments Protocol）**：2026 年 3 月 18 日发布，由 Stripe 和 Paradigm 共同投资的支付专用 L1 区块链 Tempo 推出。与 x402 共享 HTTP 402 底层签名机制，但额外支持订阅、流式计费、取消和退款，并打通 Visa 信用卡通道。发布当天超过 100 个服务接入，包括 Anthropic、OpenAI、Shopify
- **x402 基金会治理成员**：2026 年 4 月 x402 捐赠给 Linux 基金会后，Stripe 作为三个治理方之一（另两个为 Coinbase 和 Cloudflare）
- **AWS AgentCore 钱包服务**：通过 Privy 为 AWS AgentCore Payments 提供钱包基础设施
- **Sessions 2026 产品大爆发**：一口气推出 288 个新产品和功能，包括 Agent 专属虚拟借记卡发卡服务——企业和 Agent 平台可程序化批量发行一次性虚拟借记卡，绑定特定消费规则和额度限制，无需稳定币直接走 Stripe 法币结算网络
- **CEO Patrick Collison 的判断**：「Stripe 在为 AI 构建经济基础设施」
- **稳定币基础设施**：2024 年 10 月以 11 亿美元收购 Bridge，打造稳定币支付能力
- **Privy 收购**：2025 年 6 月 12 日收购嵌入式钱包基础设施提供商 Privy（此前估值 2.3 亿美元），补全链上自托管钱包能力。Privy 团队将继续独立运营，已支持 1000+ 开发团队的 7500 万+ 账户。与 Bridge 形成互补：Bridge（法币通道+101 国稳定币账户）+ Privy（链上非托管钱包）= 完整稳定币堆栈

## 关键数据（a16z Fintech 指南补充）
- **稳定币金融账户**：Stripe允许企业用户在101个国家以稳定币持有账户余额，是全球最大规模的稳定币支付基础设施之一
- **支付费率和结算**：传统支付3-5天结算周期，稳定币方案可缩短至即时
- 与Revolut虚拟卡让用户用加密货币日常消费的模式形成互补

## 优化空间与远景
- 如果用户使用借记卡/ACH 支付：Interchange 费用大幅降低（0.05% + $0.22）
- 如果商户接受直接 USDC 支付：可跳过银行清算环节，费用降至 0.5% 以内
- 全 USDC 闭环远景：参与方 5→3、费率 2.5-3%→0.5-1%、结算 T+2→即时

## 相关实体
- [[circle]] — USDC 发行方，Stripe 稳定币支付方案的核心结算媒介
- [[paypal]] — 支付赛道竞争对手，PYUSD 稳定币
- [[bridge]] — 被 Stripe $11 亿收购的稳定币支付基础设施公司
- [[tempo]] — Stripe 自建的稳定币专用 L1，Matt Huang（Paradigm 联合创始人）任 CEO
- [[privy]] — 2025 年 6 月被 Stripe 收购的嵌入式钱包基础设施提供商，补全链上自托管钱包能力

## 相关概念
- [[stablecoins]] — Stripe 稳定币支付方案的底层概念
- [[payfi]] — Stripe 稳定币方案是 PayFi 在企业级支付场景的重要实践

## 来源
- [[来源_2025-07_Stripe_L1_传闻_深潮TechFlow]] — 本文记录了Stripe L1传闻的早期源头（2025年7月），在Tempo正式公开前系统分析了可能的战略逻辑和用例场景，具有"预言文档"的历史价值
- [[来源_2024-10_AI一小时研报_支付赛道_5个Prompt_Web3Brand]] — Stripe 稳定币支付完整流程拆解 + Bridge 收购分析
- [[来源_2025-07-13_稳定币四大未来方向]] — Stripe收购Privy和Bridge（稳定币支付基础设施布局）；Shopify通过Stripe接受USDC支付；稳定币支付可提升处理方利润率
- [[来源_2025-08_a16z_银行_资管_Fintech_区块链转型_深潮TechFlow]] — Stripe稳定币金融账户支持101个国家以稳定币持有账户余额；Stripe为代表的企业级Fintech利用代币化将实时全球支付直接嵌入链上；可编程代币支持原生功能（质押/借贷/流动性供应）
- [[来源_2025-08_稳定币公链_分销_收益_Arc_Tempo_深潮TechFlow]] — Tempo 稳定币 L1 战略分析：Stripe 收购 Bridge+Privy 后完成技术闭环，Matt Huang（Paradigm 联合创始人）任 CEO；从终端网络出发向上游整合，与 Circle Arc 形成对照
- [[来源_2025-02_Cryptorails_支付超导体_Archetype]] — 本文定位 Stripe 在国际结算中的具体瓶颈：跨境商户结算需一周，并说明如果通过 cryptorails 可将 XB 结算压缩至 T+0，释放大量营运资金；同时 Stripe CEO Patrick Collison 的"cryptorails are superconductors for payments"是全文核心隐喻
- [[来源_2025-06_区块链重塑七行业_代币化_insights4vc]] — Stripe收购Bridge（$11亿，2025年2月）的战略背景：Stripe的交易轨道已触及约1%的全球GDP，Bridge使其商户可直接接受和持有美元稳定币。Stripe的稳定币战略是区块链在金融支付领域进入主流的关键信号
- [[来源_2025-11_ACP_Stripe_Agent支付]] — Stripe 与 OpenAI 联合推出 ACP（Agentic Commerce Protocol），Agent 支付战略全景，Emily Glassberg Sands 深度访谈
- [[来源_2025-06_Stripe收购Privy_稳定币钱包_深潮TechFlow]] — Stripe 收购 Privy 的完整报道：战略动机、Privy 基本面数据（7500 万+ 账户/1000+ 团队）、Bridge 协同（101 国稳定币账户）、未来方向预测
- [[来源_2025-05_加密并购_买现成还是自己建_PANews]] — 本文记录Stripe收购OpenNode以深化加密支付基础设施，并记载Stripe 2024年自由现金流超$20亿
- [[来源_2026-05_AI_Agent_支付狂飙十二个月]] — Stripe MPP 协议、Sessions 2026 虚拟借记卡、x402 基金会治理、Agent 支付多角度布局全景
