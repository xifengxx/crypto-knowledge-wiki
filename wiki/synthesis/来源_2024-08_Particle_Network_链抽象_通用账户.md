---
type: source
source_type: article
url: https://followin.io/zh-Hans/feed/12367719/ZnJvbT13ZWJzaGFyZSZpYz1kYXl1JnN1PTQwNzU2NjY5MDgmdGltZXpvbmU9OCZ0cz0xNzIzMzQxMzkxNTAw
date: 2024-08-11
ingested: 2026-06-30
---

# 详解 Particle Network：通过多元化堆栈实现「通用」链抽象

## 阅读证据
- 总行数: 174
- Q1 (前25%): Particle Network 由 Pengyu Wang 和 Tao Pan 于 2022 年推出，最初作为钱包抽象服务商，利用 MPC-TSS 技术实现社交登录。后在 ERC-4337 出现后纳入 AA 协议栈，推出 BTC Connect 为比特币生态带来 AA 服务。团队 30 多名全职员工，种子轮融资 2500 万美元（Spartan Group 和 Gumi Crypto 领投），并获 Binance Labs 投资。
- Q3 (中后25%): Particle 采用聚合数据可用性模型（AggDA），将 DA 外包给 Celestia、Avail 和 Near DA，使用两种方式：选择性发布（每个区块分配给单独的 DA 提供商）和冗余发布（每个区块发送给每个 DA 提供商），以减少单点故障。
- Q4 (最后25%): Zee Prime Capital 指出"没有产品，链抽象就不能真正解决实际问题"。尽管智能钱包带来了创新，但迄今未获大规模采用。2023 Q4/2024 Q1 的 memecoin 狂潮中，Phantom 等传统钱包下载量创历史新高——只要能买到新一代"狗狗币"，人们暂时愿意忍受助记词和难用的 UI。
- 图片: 0（纯文字文章，无内嵌图片）

## 核心要点
- Particle Network 从 2022 年的钱包抽象服务商进化为全面的链抽象堆栈，核心是其自研 L1 区块链（基于 Cosmos SDK 的模块化 L1，EVM 兼容执行环境）
- 链抽象堆栈由三大支柱组成：通用账户（UA, ERC-4337 智能账户，统一多链余额）、通用流动性（UL, 分布式 Bundler 节点网络自动执行原子跨链交易）、通用 Gas（允许用任何代币在任何链上支付 Gas）
- UA 的工作流涉及 Bundler 节点处理 UserOp → 中继器节点监控执行状态 → 最终结算到 Particle L1，用户无需与资产所在链交互
- Particle 的双重质押模式允许质押原生 PARTI 代币和通过 Babylon 质押比特币，旨在降低单一代币价格波动对网络安全的影响
- 文章在链抽象乐观叙事中加入了冷静视角：基础设施已经就位（200+ L1/L2），但成功的产品和服务仍然匮乏；监管不明确和激励结构错位才是阻碍强大加密应用出现的真正瓶颈
- 竞争格局涵盖 Near（MPC Chain Signatures + 账户聚合）、Polygon AggLayer（ZK 证明聚合 + 统一跨链桥）、Everclear（清算层 + 荷兰式拍卖）、Socket 2.0（MOFA 模块化订单流拍卖）

## 关键数据
- 融资：2500 万美元种子轮（Spartan Group、Gumi Crypto 领投），另有 Binance Labs 投资
- 开发团队：30+ 全职员工，全球分布
- L1 开发前积累：1700 万+ 钱包激活、1000 万+ UserOp、900+ dApp 集成（截至 2024 年中）
- 测试网 V2 数据：130 万个区块、730 万+ 笔交易、日均 40 万+ 笔交易
- Pioneer 积分活动：1.82 亿+ 笔交易、149 万+ 用户、273 亿总积分、人均 1.83 万积分
- 主网上线计划：2024 年下半年

## 与已有知识的关系
- 补充 [[chain-abstraction]] — 提供了 Particle Network 作为"通用账户层"方案的技术深度的第一手资料：具体解释了 UA/UL/UG 三层架构的工作流、AggDA 模型、双重质押模式。与已有 Thanefield 三层框架中的"账户抽象层"和"互操作性与意图层"对应，同时展示了 Particle 如何将两者统一到单一 L1。
- 补充 [[account-abstraction]] — 展示了 ERC-4337 智能账户（UA）在链抽象场景中的实际产品化路径：UA 附加到现有 EOA、通过 Bundler + 中继器网络处理 UserOp、利用 Paymaster 实现通用 Gas。
- 补充 [[intents]] — Particle 的 UserOp 机制本质上是一种意图实现：用户签名表达需求，Bundler 网络竞标执行，与 Solver 网络逻辑一致。通用流动性层的分布式节点网络就是 Particle 的 Solver 实现。
- ⚠️ 轻微张力：文章引用 Zee Prime Capital 和 Mert 的观点，挑战了链抽象基础设施优先论的逻辑——如果真正的瓶颈是监管和产品，堆更多基础设施可能不是最优路径。这为 [[chain-abstraction]] 概念页的"持久战"框架提供了新的论据。

## 值得记住的引用
> "没有产品，链抽象就不能真正解决实际问题。" — Zee Prime Capital 对链抽象基础设施热潮的冷静提醒

> "尽管智能钱包带来了创新，但迄今为止，它们在很大程度上都未获得大规模采用。随着 2023 年第四季度 /2024 年第一季度 memecoin 狂潮的袭来，Phantom 等现有应用的下载量创下了历史新高，这表明只要能买到新一代的'狗狗币'，人们暂时还愿意忍受纷繁的助记词和难用的 UI。"

> "链抽象旨在解决缺乏无缝跨链功能这一根本问题，而目前缺乏可用产品和服务的情况并不会使其变得无效。" — 作者 Paul Timofeev 对链抽象价值的辩护

> Vitalik 称，行业内的 builder 们有"大量精力和意愿"来实现无缝链上用户体验。

## 我的笔记
这篇文章的价值在于用 Particle Network 作为完整案例研究，拆解了一个链抽象方案从钱包工具到自建 L1 的进化路径，特别是 UA/UL/UG 三层架构的设计逻辑讲得很清楚。但最值得记住的反而是后半段的自我怀疑——基础设施堆了 200+ 条链，用户却为了一只狗币宁愿忍受助记词。链抽象的悖论在于：它解决的问题（跨链摩擦）可能是我们先造出来的——如果没有这么多链，也就不需要链抽象。与其说链抽象是 web3 的 TCP/IP 时刻，不如说它是在链爆炸后的止血方案。
