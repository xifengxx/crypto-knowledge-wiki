---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-07-02
tags: [layer2, ethereum, modular-blockchain]
---

# Fuel

## 基本信息
- 类型：以太坊 Layer 2（模块化执行层）
- 开发团队：Fuel Labs
- 联合创始人：John Adler（同时也是 Celestia 联合创始人，前 ConsenSys Layer2 可扩展性研究员）
- 定位：为模块化区块链堆栈设计的可验证计算系统（模块化执行层）
- 融资：以太坊基金会资助 + Gitcoin 社区捐赠（超 275 位贡献者）+ 2021 年 9 月 CoinFund 领投 150 万美元（Fenbushi Capital、Origin Capital 参投）
- 发展历程：2020 年底上线 V1（支付型 Rollup）→ V1 失败后全部重心转向 V2（模块化执行层）

## 核心业务/产品

### Fuel V1（2020 年底上线）
- 最早部署在以太坊主网上的 Optimistic Rollup
- 基于 UTXO 的高度可并行化最小执行系统，支持 ETH 和所有 ERC-20 代币
- 主要适用支付场景：支持 HTLC 原子兑换、OP_RETURN 式输出、多代币 Gas 费、快速提款
- **表现极差**：TVL 不到 10 美元，仅有 21 笔总交易

### Fuel V2（模块化执行层）
三大核心技术支柱：
- **并行事务执行**：基于 UTXO 模型的严格状态访问列表，支持并行交易执行，在计算、状态访问和吞吐量方面有优势，且通过可延展交易设计避免用户竞用问题
- **FuelVM（Fuel 虚拟机）**：减少传统区块链虚拟机架构的浪费处理，同时增加开发者设计空间
- **Sway 语言和 Forc 工具链**：受 Rust 启发的特定领域语言，保留 Solidity 优势的同时采用 Rust 工具生态范式

V2 新增功能：
- 图灵完备智能合约（V1 仅支持支付）
- 类似比特币的 Predicate 脚本
- 以太坊可互操作智能合约
- 快速提款：标准方案（两周延迟）和 HTLC 原子兑换快速方案（几分钟内完成）

### SwaySwap
2022 年 6 月下旬推出的 Uniswap 类 DEX（Fuel devnet 上运行的演示应用）：
- 兑换、转移、LP 资产均为原生资产而非代币，无需事先批准
- 提供流动性仅需 3-4 秒，Gas 费极低

## 关键数据
- Fuel V1 TVL < $10，21 笔总交易（L2BEAT 数据）
- 2021 年 9 月完成 $1.5M 种子轮（CoinFund 领投）
- 超 275 位 Gitcoin 贡献者捐赠
- 2023 年 4 月处于 Beta-3 测试网阶段

## 竞争优势 / 护城河
- 并行执行 + 定制 VM 的组合在 L2 赛道中独树一帜，非简单复刻 EVM
- 模块化设计使其可作为任意 DA 层的执行层
- 原生资产设计（SwaySwap）免去传统 DeFi 代币批准步骤，显著优化用户体验

## 风险 / 争议
- V1 上线后几乎零采用，说明非 EVM 兼容执行层在以太坊生态中面临巨大冷启动困难
- 使用非 EVM 虚拟机和自研语言 Sway 增加了开发者迁移门槛
- 2023 年以来 zkEVM 叙事主导市场，Fuel 的差异化路线面临用户获取挑战

## 相关实体
- [[celestia]] — 模块化 DA 层，John Adler 同为联合创始人，与 Fuel 的模块化执行层互补
- [[arbitrum]] — 同为 L2 但采用 Optimistic 路线
- [[eclipse-l2]] — 另一个模块化 L2（SVM 执行层）

## 相关事件时间线
- 2020 年底: Fuel V1 在以太坊主网上线（首个 Optimistic Rollup）
- 2021 年 9 月: Fuel Labs 完成 $1.5M 融资（CoinFund 领投）
- 2022 年 6 月: SwaySwap DEX 在 Fuel devnet 上运行
- 2022 年 7 月: 本文撰写时，Fuel V1 仅 21 笔交易、< $10 TVL
- 2023 年 4 月: Beta-3 测试网阶段

## 来源
- [[来源_2023-04_Bankless_五大新兴L2项目_交互指南]]
- [[来源_2022-07_模块化执行_Fuel_UTXO_并行交易]]
- [[来源_2025-02_空投市场_三大矛盾_深潮TechFlow]] — Fuel的NFT空投分配被引述为筹码集中可控盘、分配比例不合理的典型案例
