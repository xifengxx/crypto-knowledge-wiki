---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [bitcoin, l2, op-stack, gaming, launchpad]
---

# Taproot Chain

## 基本信息
- 定位：支持 Taproot 资产发行和交易的比特币 Layer2 网络
- 开发者：Taproot Labs
- 技术框架：OP Stack（Optimism 技术栈）
- 扩容方案：OP-Rollup
- 主网状态：为数不多已完成主网上线并开始大规模部署应用的 BTC L2（截至2024年4月）

## 核心业务
Taproot Chain 基于 OP Stack 框架构建，通过 OP-Rollup 技术实现网络扩容并保持对 EVM 的无缝兼容。与市场上普遍采用的 POS/POA 侧链方案（依赖预言机上传数据至 L1，存在节点作弊风险和高存储成本）不同，OP-Rollup 将多个交易聚合后链下处理、链上验证，以此规避二层网络欺诈行为。

### Taproot Bridge（关键差异化组件）
整合三种 Taproot 升级技术实现去信任跨链：
- **Schnorr 签名**：提高签名效率、减少交易数据量、增强隐私和安全性
- **Tapscript**：引入更灵活的智能合约编程能力
- **比特币时间锁**：增加交易类型和策略多样性

资产锁定、转移、销毁全流程由智能合约控制，避免依赖中心化索引器（区别于 Nostr Assets 等依赖中心化辅助验证的方案）。

### 生态应用
- **Taproot Exchange**：首个应用，定位为支持比特币原生资产的去中心化交易平台。与 Nostr Assets 的三大差异：(1) 完全去中心化——用户资产由个人 L2 钱包保管，非集中式托管；(2) 支持碎片化拆分——降低优质铭文/NFT 参与门槛；(3) 多链支持——通过 Taproot Bridge 支持 BTC/ETH/BSC 跨链交易
- **Taproot Launchpad**：生态加速器，未正式上线已接到 40 个项目申请
- **GameFi 矩阵**：计划在 Launchpad 上线后两周内发布

## 融资
Negentropy Capital 领投，Digital Pacific Holding、Bitvalue Capital、Hussein Family Office、华尔街投资银行家 Patrick Bominton 等参与，融资额数百万美元。

值得注意的是，Waterdrip Capital 同时是 TaprootChain 和 [[merlin-chain]]（占据 BTC L2 赛道约 80% TVL）的投资方，显示头部投资方在 BTC L2 赛道采取多篮子布局策略。

## 竞争优势
- 已完成主网上线（在 2024 年 4 月时点是少有的里程碑）
- OP Stack 技术栈成熟度较高，生态兼容性好
- Launchpad + GameFi + Exchange 的差异化定位区别于纯 DeFi BTC L2
- Taproot Bridge 去信任跨链设计（Schnorr+Tapscript+时间锁三合一），区别于依赖中心化索引器的竞品

## 风险 / 争议
- BTC L1 不支持原生验证 L2 状态——Taproot Bridge 声称的"去信任跨链"并不能完全消除信任假设，BTC 主网无法原生验证 Rollup 的欺诈证明或有效性证明
- 投后 PR 文章的结论（"在 BTC L2 竞争中占据领先地位"）来自投资方，需打折看待
- 2024 年 8 月后 BTC L2 赛道整体降温，Merlin/B² 等项目被指未获真实玩家青睐，TaprootChain 的生态承诺是否兑现存疑

## 来源
- [[来源_2024-04_比特币L2项目盘点_BVM_Merlin_BlockBeats]]
- [[来源_2024-04_NegentropyCapital为什么投资TaprootChain_BlockBeat]]
