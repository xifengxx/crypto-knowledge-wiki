---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [oracle, eigenlayer, avs, restaking]
---

# Eoracle

## 基本信息
- 类型: protocol
- 赛道: 去中心化预言机（Oracle）
- 定位: EigenLayer AVS，首个以太坊"原生"预言机
- 名称由来: (E)thereum + oracle 的合成词
- 主网上线: 2024年首批 EigenLayer AVS 之一
- 代币模型: 双代币模式（ETH 保证安全性 + 原生代币激励节点）

## 核心业务/产品

Eoracle 是基于 [[eigenlayer|EigenLayer]] 再质押机制的预言机协议，是首批上线主网的 6 个 AVS 之一（与 [[altlayer|AltLayer]]、[[lagrange|Lagrange]]、Brevis、Witness Chain、Xterio 并列）。

**核心创新**：Eoracle 自称是"以太坊第一个原生预言机"——其安全性由质押的 ETH 保证（通过 EigenLayer 再质押机制），而非像 [[chainlink|Chainlink]] 那样依赖节点网络和 LINK 代币来保证安全。安全假设的根本差异使其在安全性上与以太坊自身的安全预算直接绑定。

**商业模式**：采用双代币模式——
1. **Restaked ETH**：用于保证网络安全（利用 EigenLayer 的再质押机制）
2. **原生代币**：用于激励节点参与、促进网络参与度、确保公平价值分配（按代币分配收入）、以及协议去中心化治理

**商业闭环**（典型 AVS 模式）：
终端用户付费 → 产品向 AVS 付费 → AVS 分配给节点运营商和 Restaking 用户 → 再质押者获得收益

## 关键数据
- 首批 6 个 EigenLayer AVS 之一，覆盖预言机赛道
- 明确采用双代币模式（ETH 安全 + 原生代币激励）
- 预言机赛道在 DeFi/RWA 生态中需求最明确、商业模式最成熟
- 与 Chainlink 构成不同的安全范式：ETH 再质押安全性 vs LINK 节点网络安全性

## 竞争优势 / 护城河

1. **以太坊原生安全**：利用 EigenLayer 的 Restaking 机制，由质押 ETH 提供经济安全性，安全预算与以太坊共识安全挂钩，理论上比独立代币节点网络更可靠
2. **EigenLayer 生态红利**：作为首批 AVS 获得 EigenLayer 生态先发优势和网络效应，能直接接触庞大的 ETH 再质押者池
3. **双代币灵活激励**：ETH 承担安全功能释放原生代币的激励/治理功能，避免类似 Chainlink 的"安全代币"产生的权衡
4. **预言机需求明确**：DeFi、RWA、跨链等领域对链外数据的需求持续增长，预言机是刚性需求

## 风险 / 争议

1. **与 Chainlink 竞争**：预言机市场竞争激烈，[[chainlink|Chainlink]] 作为龙头已建立极深的集成网络和品牌信任，新进入者需要差异化证明
2. **AVS 需求端验证不足**：到 2026 年，EigenLayer AVS 生态供给侧增长远快于需求侧（实际付费用户增长缓慢），Eoracle 的 PMF 尚待验证
3. **EigenLayer 系统性风险**：EigenLayer 绕过智能合约直接接管以太坊节点生态带来的系统性风险——若 EigenLayer 出现安全问题，Eoracle 的安全基础也将动摇
4. **双代币经济模型设计**：原生代币的具体用途和价值捕获机制尚未充分披露，需验证代币经济设计的可持续性
5. **赛道早期**：作为一种新型预言机范式（ETH 再质押安全），其安全模型在极端市场条件下的表现尚无历史数据验证

## 相关实体
- [[eigenlayer]] — 基础再质押协议，Eoracle 依赖其安全机制
- [[chainlink]] — 竞争性预言机网络，使用 LINK 代币安全模型
- [[altlayer]] — 同批首批 EigenLayer AVS，RaaS 赛道
- [[lagrange]] — 同批首批 EigenLayer AVS，ZK 协处理器赛道
- [[witness-chain]] — 同批首批 EigenLayer AVS，DePIN 赛道
- [[restaking]] — Eoracle 依赖的再质押安全机制

## 来源
- [[来源_2024_EigenLayer_第一批AVS真实用例分析_ChainFeeds]]
- [[来源_2024_EigenLayer_第一批AVS真实用例]]

