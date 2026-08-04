---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [defi, intents, ai, dex]
---

# Aperture Finance

## 基本信息
- 类型：基于意图的 DeFi 协议
- 定位：用户通过自然语言表达交易意图，AI + Solver 网络自动执行
- 关键组件：Orchestrator、Solver、Sequencer、Fulfiller
- 核心技术：Intents DSL（领域特定语言）、ZKP（零知识证明）验证、Solver DAO 网络
- 代币：APTR
- 支持链：EVM 和非 EVM 链（通过 L2 方案）

## 核心业务/产品
- **GPT 式聊天界面**：用户用自然语言描述交易目标（如"将我的 ETH-DAI 头寸在 Optimism 和 Ethereum 上重新平衡，60% 分配给表现最好的池，40% 平均分配给其他池"），Aperture 通过 Intents DSL 将其转化为可执行的链上逻辑。
- **Intents DSL**：专用编程语言，设计用于高效解释和处理用户意图为区块链事件。
- **Solver DAO 网络**：专业求解器通过质押 APTR 和 ETH 接入 Aperture 清算所，竞争执行用户意图。Solver DAO 可以是大型专业 solver 到小型 solver 网络，通过 Aperture 的 ZK Verification 在不暴露专有方法的情况下建立信任。
- **Solver 众筹机制**：Solver 可通过金库（vaults）向社区众筹质押资金，提供收益分成模式吸引利益相关者。
- **Layer 2 方案**：建设中，旨在跨 EVM 和非 EVM 链支持意图。

## 关键数据
- 累计结算量：约 50 亿美元
- 代币 APTR 用于质押和治理
- Solver DAO 获得 $APTR 拨款支持创新

## 竞争优势 / 护城河
- **AI + 意图深度整合**：利用现代 LLM 将自然语言直接转化为区块链逻辑，降低用户入门门槛，是 DeFAI 方向的代表性实现。
- **Solver DAO 生态**：通过 Solver DAO 而非单一 Solver 网络运行，结合众筹质押和 ZK 验证，在去中心化和执行效率间寻求平衡。
- **通用性**：不限于兑换，可处理流动性管理、再平衡等复杂 DeFi 操作。

## 风险 / 争议
- 自然语言处理依赖 LLM，存在意图理解偏差风险
- Solver DAO 网络的去中心化程度取决于实际参与者的分布
- 跨链意图执行依赖建设中的 L2 方案，尚未完全落地

## 相关实体
- [[cow-protocol]] — 同为基于意图的协议，CoW Swap 侧重 DEX 兑换批量拍卖
- [[across-protocol]] — 同为基于意图的协议，Across 侧重跨链桥接
- [[anoma]] — 意图中心 L1，提供更底层的意图基础设施
- [[uniswap]] — Uniswap X 是意图 DEX 的主要竞争者

## 来源
- [[来源_2025-02_AMM_订单簿_意图_ThreeSigma]]
