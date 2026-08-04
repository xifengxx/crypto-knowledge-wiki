---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-30
tags: [chain-abstraction, infrastructure, cross-chain, cosmos]
---

# Particle Network

## 基本信息
- **类型**: 链抽象基础设施协议 / 模块化 L1
- **赛道**: [[chain-abstraction]]、跨链互操作
- **成立时间**: 2022 年
- **创始人**: Pengyu Wang、Tao Pan
- **团队规模**: 30+ 全职员工，全球分布
- **融资**: 种子轮 2500 万美元（Spartan Group、Gumi Crypto 领投），Binance Labs 投资
- **合作生态**: Berachain、Avalanche、Arbitrum、zkSync 等

## 核心产品 / 技术栈

### 进化路径
Particle 最初（2022 年）是钱包抽象服务商（MPC-TSS 技术 + 社交登录 + 嵌入式 DApp 钱包）。ERC-4337 出现后纳入账户抽象（AA）协议栈，推出 BTC Connect 为比特币生态带来 AA。随后演化为全面的链抽象堆栈，核心是自研 Particle L1。

### 三大支柱
1. **通用账户（Universal Accounts, UA）**: 附加到现有 EOA 的 ERC-4337 智能账户，通过自动路由和执行原子跨链交易统一多链代币余额。为用户提供单一界面管理资金和跨 dApp 交易。
2. **通用流动性（Universal Liquidity, UL）**: 分布式 Bundler 节点网络 + 去中心化消息传递网络（DMN）中继器节点。Bundler 执行 UserOp，DMN 监控目标链交易状态并回传结算状态。
3. **通用 Gas（Universal Gas）**: Gas 抽象层。允许用任何链上的任何代币支付 Gas，通过 Paymaster 合约自动处理。部分费用兑换为 PARTI 代币在 Particle L1 结算。

### Particle L1 架构
- **基础**: Cosmos SDK 构建的模块化 L1，EVM 兼容执行环境
- **共识与 DA**: 外包给模块化节点网络。采用聚合 DA 模型（AggDA），结合 Celestia、Avail、Near DA，分"选择性发布"和"冗余发布"两种方式
- **质押**: 双重质押模式 — 原生 PARTI 代币 + 通过 Babylon 质押比特币
- **三个关键模块**: Master Keystore Hub（主密钥存储枢纽，协调跨链合约部署和 UA 状态同步）、Decentralized Message Network（DMN，中继器节点网络传达交易执行状态）、Decentralized Bundler（捆绑节点网络启动和执行 UserOp）

### 通用 SDK
支持 EIP-1193 的登录流程，允许开发者创建无缝的 UA 登录体验。

## 关键数据
- L1 前积累（截至 2024 年中）: 1700 万+ 钱包激活、1000 万+ UserOp、900+ dApp 集成
- 测试网 V2: 130 万+ 区块、730 万+ 笔交易、日均 40 万+ 笔交易
- Pioneer 积分活动: 1.82 亿+ 交易、149 万+ 用户、273 亿总积分
- 主网上线: 计划 2024 年下半年

## 竞争优势 / 差异化
- EVM 兼容 + Cosmos SDK 的混合架构，兼顾性能与生态兼容
- 双代币质押（PARTI + BTC）降低单一代币波动风险
- AggDA 多 DA 提供商模型减少单点故障
- 从钱包抽象到链抽象的全栈进化路径，有 1700 万+ 用户基础

## 风险 / 待验证
- 分布式节点网络的去中心化程度未经验证——是否有足够多的独立节点运营商参与
- 作为跨链交易的结算和协调层，对其他区块链生态的经济影响和价值捕获模型尚不清晰
- 链抽象赛道竞争激烈（Near、Polygon AggLayer、Everclear、Socket），先发优势尚未确立
- 主网未上线，所有数据来自测试网

## 相关实体
- [[near-protocol]] — 链抽象赛道核心竞争对手，MPC Chain Signatures 方案
- [[polygon]] — AggLayer 聚合跨链桥方案
- [[celestia]] — AggDA 中使用的 DA 提供商之一
- [[avail]] — AggDA 中使用的 DA 提供商之一
- [[babylon]] — 双重质押中比特币质押的合作伙伴

## 来源
- [[来源_2024-08_Particle_Network_链抽象_通用账户]]
- [[来源_2025-01_Q1发币项目盘点_Berachain_Monad_OpenSea_PANews]] — TGE无官方公告；A轮$1500万，种子轮$700万估值$1.5亿；UniversalX交易平台12月4日上线，产品将升级至V2
- [[来源_2024-04_链抽象细分_六模块_主要参与者_SevenX]] — Rui (SevenX) 确认 Particle Network 用 Cosmos SDK 开发 L1，允许用户使用任何代币或 PARTI 作为跨 EVM/Solana/BTC 交易的 Gas
- [[来源_2025-03_链抽象_间接影响_Shoal]] — Shoal Research 链抽象间接影响综述，详细描述 UniversalX 作为首个链无关链上交易平台、Universal Accounts 使用 ERC-4337 智能钱包实现跨链统一余额的案例（"Alice 用 ETH 在 Avalanche 做 yield farming" 使用案例），以及 Universal Gas Paymaster 和 Universal Liquidity Layer 的技术细节；⚠️ 本文为 Particle Network 赞助内容
