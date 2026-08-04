---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [zk, eigenlayer, avs, coprocessor]
---

# Lagrange

## 基本信息
- 类型: protocol
- 赛道: ZK 协处理器（ZK Coprocessor）
- 定位: 基于 [[eigenlayer|EigenLayer]] 的并行 ZK 协处理器，提供跨链状态证明
- 首批 EigenLayer AVS: 是（2024 年首批 6 个 AVS 之一）
- 核心特性: 并行化架构、水平扩展、跨链可验证计算
- LRT 委托: Renzo + Swell + Puffer 各委托 $5 亿 Restaked ETH（共 $15 亿）

## 核心业务/产品

Lagrange 是一个运行在 [[eigenlayer|EigenLayer]] 再质押基础设施上的 **ZK 协处理器**（ZK Coprocessor），作为首批 6 个 AVS 之一于 2024 年上线主网（与 [[altlayer|AltLayer]]、[[eoracle|Eoracle]]、Brevis、Witness Chain、Xterio 并列）。

**核心功能**：通过零知识证明，让 EVM 智能合约获取更多可验证的跨链/链下数据，并在链外执行复杂计算后以 ZK 证明的形式返回结果。这使得 DApp 能够在不牺牲去中心化安全的前提下扩展计算能力和数据访问范围。

**技术特色**：Lagrange 强调**并行化**和**水平扩展**架构，区别于同赛道的 Brevis（后者采用 coChain 设计：PoS 链 + 乐观 + ZK 混合机制）。并行架构意味着 Lagrange 可以同时处理多个证明任务，理论上具有更高的吞吐量和更低的延迟。

**EigenLayer 生态定位**：作为 AVS，Lagrange 利用 EigenLayer 的再质押 ETH 来保障其 ZK 证明网络的经济安全性。商业闭环遵循典型 AVS 模式：终端用户付费 → 产品向 AVS 付费 → AVS 分配给节点运营商和 Restaking 用户。

## 关键数据

- **ETH 委托（Restaked）**：$15 亿 — Renzo、Swell、Puffer 各委托 $5 亿 ETH 至 Lagrange 作为安全预算
- **首批 AVS 地位**：2024 年 EigenLayer 主网上线时首批 6 个 AVS 之一，覆盖 ZK 协处理器赛道
- **同赛道项目**：与 Brevis 被视为 ZK 协处理器赛道的两大代表，同时入选 EigenLayer 首批 AVS 说明 EigenLayer 生态看好该方向
- **商业模式**：双代币模式（ETH 保证安全 + 原生代币激励节点参与），为 ZK 协处理器 AVS 的标准模型

## 竞争优势 / 护城河

1. **并行化架构领先**：强调并行处理和水平扩展能力，理论上比同赛道的 Brevis 更适合大规模、高吞吐量的 ZK 证明场景
2. **EigenLayer 生态先发优势**：作为首批 AVS，直接获取 EigenLayer 全网再质押安全预算，LRT 大户（Renzo/Swell/Puffer）已通过委托背书
3. **巨大的安全预算**：$15 亿 ETH 委托意味着成本高昂的攻击，提供了极强的经济安全性 — 这是独立构建 ZK 证明网络难以比拟的
4. **ZK 协处理器赛道想象力**：作为新概念，ZK 协处理器代表了 EigenLayer 最有想象力的应用方向——让以太坊 L1 智能合约获得链外计算和状态证明的能力，而不改变 L1 本身
5. **跨链场景需求**：跨链桥、跨链借贷、全链应用等场景天然需要跨链状态证明，Lagrange 的定位直接切中这一需求

## 风险 / 争议

1. **AVS 需求端 PMF 未经充分验证**：到 2026 年，EigenLayer AVS 生态总体上面临供给侧（LRT）增长远快于需求侧（实际付费用户）的问题。Lagrange 的产品是否能在现实世界获得足够的付费用户尚待观察
2. **与 Brevis 的同赛道竞争**：Brevis 和 Lagrange 同为 ZK 协处理器 AVS，技术路线不同（Lagrange 并行 vs Brevis coChain），但面向的客户群体重叠，存在直接竞争
3. **ZK 协处理器概念新颖但教育成本高**：对于大多数 DApp 开发者，"ZK 协处理器"是一个陌生的概念 — 相比预言机（Eoracle）和 RaaS（AltLayer）的用例更直观，Lagrange 需要额外的时间和资源进行市场教育
4. **依赖 EigenLayer 生态**：Lagrange 的安全性建立在 EigenLayer 再质押机制之上——若 EigenLayer 出现系统性风险（如 slashing 代码缺陷、节点运营商串通等），Lagrange 的安全基础也将动摇
5. **技术风险**：并行 ZK 证明在工程实现上极具挑战性，跨链状态证明的延迟和成本是否能达到商用水平仍有待长期验证

## 相关实体
- [[eigenlayer]] — 基础再质押协议，Lagrange 的核心安全来源
- [[brevis]] — 同赛道 ZK 协处理器 AVS（竞争关系，不同技术路线）
- [[eoracle]] — 同批首批 EigenLayer AVS，预言机赛道
- [[altlayer]] — 同批首批 EigenLayer AVS，RaaS 赛道
- [[witness-chain]] — 同批首批 EigenLayer AVS，DePIN 赛道
- [[restaking]] — Lagrange 依赖的再质押安全机制
- [[renzo]] — 委托 $5 亿 ETH 至 Lagrange 的 LRT 协议
- [[swell]] — 委托 $5 亿 ETH 至 Lagrange 的 LRT 协议
- [[puffer]] — 委托 $5 亿 ETH 至 Lagrange 的 LRT 协议

## 来源
- [[来源_2024_EigenLayer_第一批AVS真实用例分析_ChainFeeds]]
- [[来源_2024_EigenLayer_第一批AVS真实用例]]
