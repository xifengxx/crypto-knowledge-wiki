---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [l1, parallel-evm, cosmos, defi, cosmwasm]
---

# Sei

## 基本信息
- 类型：Layer 1 区块链（Cosmos 生态，Parallel EVM）
- 初始定位：DeFi 特化链（CosmWASM），后升级为并行 EVM
- 升级：Sei V2 是重大升级，目标成为首个完全并行的 EVM
- 技术栈：Cosmos SDK + 导入 Geth（以太坊虚拟机的 Go 实现）

## 早期历史与战略转型

- **创立**：2022 年由 Jay Jog 和 Jeff Feng 创办，团队成员来自 Robinhood/Airbnb 等互联网公司 + Cosmos 生态 OG + 高盛/投资机构
- **原始定位**（2022-2023）：基于 Cosmos SDK 的"DeFi 特化 L1"，使用 CosmWASM 智能合约，定位在通用链（以太坊/Solana）和应用特定链（dYdX/Osmosis）之间
- **Twin Turbo 共识**（原始架构）：优化 ABCI 实现可编程共识步骤——优化区块生产（600ms 常规 → 500ms）+ 智能区块广播（只广播交易哈希而非完整数据），吞吐量提升 80%+
- **并行执行**（原始架构）：DeliverTx 并行化（所有交易类型）+ Endblock 并行化（订单交易），区块时间较顺序处理减少 75-90%
- **关键融资**（2023年）：3000 万美元股权融资（估值 8 亿美元）+ 5000 万生态基金 + MEXC 2000 万专项基金，生态资金总规模超 1.2 亿美元，为 2023 年截至 4 月融资最多的 L1
- **战略转型**：约 2024 年从 CosmWASM DeFi 特化链转向并行 EVM（Sei V2），导入 Geth 实现 EVM 兼容，放弃纯 CosmWASM 路线
- **Sei 基金会**：2023 年 3 月成立，处理代币赠款、空投、产品请求、倡议和委托计划

## 核心业务/产品
- **Sei V2 三大升级**：
  1. **后向兼容 EVM 智能合约**：导入 Geth 处理 EVM 交易，通过 Sei 为 EVM 创建的特殊接口实现状态更新，开发者可将其他 EVM 链上的已审计合约直接移植而无需改代码
  2. **Optimistic 并行化**：与 Monad 相同路线，同时执行交易无需开发者定义依赖项。发生冲突时跟踪每个交易触及的存储部分，按顺序重新运行冲突交易，递归直至所有冲突解决
  3. **Sei DB**：双组件数据结构，将状态存储与状态提交分离，替代传统单 IAVL 树设计，减少延迟和磁盘使用，提高多线程读写性能

## 竞争优势 / 护城河
- 先发优势：比 Monad 更早推出，已有流通代币和用户基础
- Cosmos 生态互操作性的天然优势（IBC）
- DeFi 特化定位带来明确的差异化赛道

## 风险 / 争议
- 因为先作为 CosmWASM 链推出、代币已流通一段时间，"失去了新鲜感"
- Cosmos 背景使以太坊社区成员不将其视为以太坊生态项目——叙事势能弱于 Monad
- Monad 社区活跃度更高（Twitter Space 参与人数是 Sei 的 3 倍），虽然后者性能指标更高

## 相关实体
- [[monad]] — 并行 EVM 主要竞争对手
- [[cosmos]] — 底层生态

## 来源
- [[来源_2023-04_Sei_Network融资_生态版图_MarsBit]] — 早期融资（估值 8 亿）、Twin Turbo 共识、120 项目生态版图、前 V2 时代原始定位
- [[来源_2024-03_并行EVM四杰_Monad_Sei_Neon_Eclipse_Foresight]] — Sei V2 并行 EVM 升级详情
- [[来源_2024_Finding_Next_Solana_L1竞争格局]] — L1 竞争格局中的 Sei 定位
