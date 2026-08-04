---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [layer2, ethereum, zk-rollup, stark, scaling]
aliases: [StarkNet, StarkEx, STARK]
---

# StarkWare

## 基本信息
- **类型**: Ethereum Layer 2（ZK Rollup / Validium / 分形扩展）
- **核心技术**: STARK 证明（可扩展透明知识论证）
- **产品线**: StarkEx（定制化扩容引擎）+ StarkNet（通用 ZK Rollup 网络）
- **编程语言**: Cairo（自研的图灵完备语言，专为 STARK 证明优化）

## 核心架构

### 多层解决方案
StarkWare 提出分层扩展模型：
- **L2**: 用于通用扩展（StarkNet）
- **L3**: 用于定制扩展——针对特定应用需求的自定义链

### 分形扩展（Fractal Scaling）
多层网络概念：应用特定的 L3 在 L2 上递归构建。这一概念后来被 zkSync 的超级扩展理论继承和发展。

### Recursive STARKs
关键技术创新：允许将多个交易证明捆绑成一个单一证明，大幅提升 L2 扩展能力。依赖于：
- **Cairo 编程语言**: 专为证明生成优化
- **SHARP**: 共享证明器，支持从多个应用聚合交易到一个 STARK 证明

通过 Recursive STARKs 优化成本、延迟和计算资源，以支持在公共 StarkNet 网络上的 L3 解决方案开发。

## 商业模式与财务（2022 年视角）

### 双产品双商业模式
- **StarkEx**：向有扩容需求的客户收取技术服务费（2B 定制化服务），被称为"扩容即服务（scaling as a service）"
- **StarkNet**：去中心化 L2 网络，通过用户交易费、sequencer MEV、未来发币驱动生态发展

### 客户与收入结构
- dYdX 一度占 StarkWare 总收入的 90%，是绝对的核心收入来源
- StarkWare 从 dYdX 单一客户一年内获得超 5000 万美元收入，帮助 dYdX 节约约 3 亿美元 gas 成本（合作前 gas 费占收入 90-100%，合作后降至 3-5%，即从 $405-450M 降至 $13.5-22.5M）
- ImmutableX 年收入约 100 万美元（2021），预计 2022 年 300-500 万美元
- DeversiFi 年收入约 63 万美元
- StarkEx 六个客户中分为去中心化交易所（dYdX、DeversiFi）和 NFT 市场（Sorare、ImmutableX）两类

### 关键运营数据（截至 2022 年中）
- 总锁仓量 10 亿美元
- 累计处理 1.73 亿笔交易
- 累计交易额 6020 亿美元
- Minted NFT 价值超 5620 万美元
- 团队 80 人

### 融资历程
- 种子轮获 Pantera、Vitalik、Elad Gil、Naval 等支持
- 以太坊基金会捐赠 1200 万美元
- 后续 Paradigm、Sequoia、Multicoin 等顶级风投加入
- 最新一轮估值 80 亿美元（所有扩容项目中估值最高）

## 生态发展
- **Slush**: 正在开发 SDK，用于在 StarkNet 上构建 zkVM L3
- **StarkEx**: 已为 dYdX、Immutable X、Sorare、DeversiFi、Celer 等应用提供定制化扩容服务

## 关键事件时间线
- **2020 年 6 月**: StarkEx 产品正式上线
- **2020 年底**: dYdX 推出 zk Rollup 版（gas 费降至 1/50，业务增长 500 倍）
- **2022 年 6 月 22 日**: dYdX 宣布 V4 将基于 Cosmos SDK 开发独立区块链，直接冲击 StarkWare 收入基本面
- **2022 年 7 月**: 本文发表时公司估值 80 亿美元，P/S 约 160 倍

## 行业影响力
- 分形扩展概念启发了 zkSync 的 Hyperchain 和超级扩展理论
- Recursive STARKs 被广泛引述为 ZK 扩展的前沿方案
- StarkEx 业务的退出（dYdX）引发对整个 L2 叙事信心的下调

## 竞争格局（2022 年中）
StarkWare 有 4 类竞争对手：
1. **Polygon**（all-in-one 方案，估值 $20B，1.9 万 dApp，社区 10 分 vs StarkWare 2 分）
2. **Arbitrum**（Optimistic rollup，TVL 占 L2 53.54%，团队来自普林斯顿，估值 $1.2B）
3. **Optimism**（EVM 等效，估值 $1.65B，a16z/Pantera 支持，年收入约 $24.5M）
4. **zkSync**（SNARK 技术 + EVM 兼容，Matter Labs 开发，70+ 项目生态）和 **Scroll**（zkEVM，估值 $2B）
5. **Cosmos**（SDK 支持 appchain，dYdX 迁移事件助长趋势）

## 风险（完整清单）
1. **收入集中度风险**: dYdX 占收入 90%，迁移 Cosmos 已应验
2. **产品完成度**: StarkNet 极早期，费用模型不清晰，去中心化版本未发布
3. **社区建设严重不足**: 技术强（10 分）但社区弱（2 分）；Cairo 语言新且不兼容 EVM，开发者稀缺；核心节点仍中心化运营
4. **Rollup 体验名不副实**: "假上链"（临时 soft confirmation）、tps 实际约 30 而非 1000+、MEV 竞价可能推高 gas
5. **zk 赛道白热化**: 原本不走 zk 路线的团队也加入竞争
6. **行业周期风险**: $8B 估值处于行业泡沫高点
7. **Key person risk**: 如果 Vitalik 对 L2 的判断错了？

## 估值分析
### PS 倍数法
- 估计年收入 $50M（dYdX 占 >$50M），$8B 估值对应 P/S 约 160x
- 头部 L2 项目平均 P/S 约 198x，160x 属于"很贵但不最高"

### 去中心化云计算类比
- 如果 StarkWare 作为 L2 第一名占 50% 市场 → 市值达以太坊一半，约千亿美元
- 如果不是第一名但仍是核心提供商 → 占 ETH 10-20%，约 $200-500B
- 结论：短期内 $8B 估值很可能高估，但长期有 1x+ 增长空间

## 相关实体
- [[zksync]] — 同为 ZK 路线，超级扩展理论继承自分形扩展概念
- [[arbitrum]] — L3 概念在 Arbitrum Orbit 中得到不同实现，2022 年 L2 市场份额 53.54%
- [[optimism]] — EVM 等效，估值 $1.65B
- [[polygon]] — all-in-one，社区 10 分，2022 年估值 $20B
- [[scroll]] — zkEVM，估值 $2B
- [[cosmos]] — SDK 支持 appchain，受益于 dYdX 出走
- [[dydx]] — 最大客户（占 90% 收入），后迁移至 Cosmos
- [[immutable-x]] — StarkEx 客户，年收入 $1M+
- [[celestia]] — 替代 DA 层

## 比特币生态布局

StarkWare 也在积极拓展比特币生态：
- 2022 年 7 月发起 **100 万美元 OP_CAT 研究基金**，资助研究在比特币上安全有效实现 [[op-cat]] 的利弊
- 在 Bitcoin Signet 上展示利用 OP_CAT 实现**零知识证明**的潜力，证明可在比特币网络上实现复杂操作
- 与 sCrypt 建立合作伙伴关系，共同探索基于 OP_CAT 和 ZK magic 构建的 **PoC 桥**设计
- 暗示可能在不久的将来推出 OP_CAT 相关协议

## 相关概念
- [[layer2]] — ZK Rollup 技术路线代表
- [[privacy]] — STARK 证明的隐私保护潜力
- [[op-cat]] — 比特币生态核心研究方向，$100 万基金 + Signet ZK PoC
- [[sequencer]] — StarkWare 早期中心化运营模式及其风险

## 来源
- [[来源_2023-08_L2进化趋势_Superchain_L3_Hyperchain_币安研究院]] — 币安研究院 L2 进化报告：分形扩展/Recursive STARKs/SHARP 详解
- [[来源_2024-09_OP_CAT_BIP347_比特币智能合约_ChainCatcher]] — StarkWare $100 万 OP_CAT 研究基金 + Bitcoin Signet ZK 证明 PoC + sCrypt 合作桥设计
- [[来源_2022-07_StarkWare_80亿美元估值_以太坊扩容]] — 完整商业模式、财务状况（$50M+ 年收入/160x P/S）、dYdX 迁移 Cosmos 背景、竞争格局量化数据、七大风险清单、去中心化云计算估值框架
- [[来源_2022-07_以太坊_L2_Rollup扩容方案_综述]] — 2022 年中 StarkWare 在 L2 全景中的定位：$8B 估值（L2 赛道最高）、StarkEx 累计处理 1.73 亿笔交易/$6020 亿交易额、StarkEx vs StarkNet 双产品商业模式对比
