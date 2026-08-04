---
type: entity
entity_type: project
created: 2026-07-01
updated: 2026-07-01
tags: [bitcoin, layer2, smart-contracts, defi, nft]
---

# Stacks

## 基本信息
- 类型: 比特币智能合约和去中心化计算平台（基于链的二层建设）
- 前身: Blockstack
- 提出时间: 2013年首次提出
- 代币发行: 2017年ICO（STX代币）
- 定位: 通过比特币安全性和稳定性支持去中心化应用（DApp）开发

## 核心机制
- **共识机制 — Stacking（转账证明/PoX）**: 持有STX代币的用户锁定代币并参与网络验证，获得BTC奖励（而非新铸造的STX）。这种机制将STX经济安全与比特币安全绑定。
- **Clarity智能合约语言**: 自研的可判定性智能合约语言，防止Solidity式的重入攻击等意外行为
- **去中心化身份和存储**: 提供Gaia去中心化存储和BNS（比特币域名系统）等配套基础设施
- **sBTC**: 计划中的去中心化BTC锚定资产（2024年开发中）

## 关键数据
- 提出时间: 2013（早于以太坊的大量DApp实践）
- ICO时间: 2017
- 代币: STX

## 竞争优势 / 护城河
- **BTC奖励机制**: Stacking让STX持有者获得的是BTC而非通胀代币，对BTC持有人有天然吸引力
- **Clarity语言**: 可判定性和安全性优于Solidity，适合高价值金融应用
- **完整的去中心化基础设施**: 身份+存储+计算一体化
- **最老牌的BTC智能合约平台**: 2013年至今积累了丰富的开发经验和社区基础

## 风险 / 争议
- **STX价格依赖**: STX代币价格直接影响网络经济安全性
- **sBTC落地延迟**: 去中心化BTC锚定方案多次推迟
- **竞争激烈**: 2024年大量EVM兼容BTC L2以更快速度抢占开发者
- **生态活力**: DApp数量和TVL与以太坊L2有较大差距
- **历史包袱**: 2019年SEC调查Blockstack ICO，虽已和解但留下合规阴影

## 相关实体
- [[bitcoin]] — 底层结算层，Stacking机制以BTC作为奖励
- [[rootstock]] — 同为BTC智能合约平台，RSK走EVM兼容+合并挖矿路线，Stacks走PoX+BTC奖励路线
- [[ordinals]] — Stacks生态中包含Ordinals/BRC-20相关应用

## Nakamoto 升级（2024年）
原计划2024年4月伴随比特币减半上线，实际于2024年10月上线（延迟约6个月）：
- **区块时间**: 从10-30分钟降至数秒
- **Subnet**: 支持EVM/Solidity，大幅消除开发者从以太坊的迁移成本（如OpenSea/Uniswap可更容易搭建在Stacks上）
- **sBTC**: Synthetic BTC在Stacks上诞生，直接刺激DeFi生态繁荣
- 升级将Stacks从相对缓慢的侧链转变为接近实时确认的L2

## 来源
- [[来源_2024-02_比特币二层Layer2_基础知识体系_BlockBeats]] — 付少庆介绍Stacks：2013提出→2017ICO、Stacking共识机制（锁定STX→获得BTC奖励）、去中心化身份验证/存储/智能合约
- [[来源_2024-01_BTC_L2_新形态_五类扩容方案_BlockBeats]] — YBB Capital五类扩容方案中的侧链类
- [[来源_2023-05_BTC生态重点项目盘点_Biteye]] — 2023年5月记录：Stacks 日活不足 4k（对比 Arbitrum 20 万）、Nakamoto 升级（Q4 上线预期）和 sBTC 的四项具体影响清单（BTC 最终确认/4-5s 出块/子网 Solidity 支持/链上 sBTC）、Stacking 机制中 STX 和 BTC 双代币质押挖矿细节
- [[来源_2024-01_比特币ETF预期_十大比特币生态项目_BlockBeats]] — 2024年1月数据：价格$2.01、市值$28.76亿、30d涨幅101.2%、Nakamoto升级预计4月上线、Subnet支持EVM/Solidity
- [[来源_2024-02_BTC衍生协议_正统性_炒作分析]] — 正统性争议：严格来说不是 BTC 原生协议，但由于占据话语权和良好流动性，在二级市场上成为"BTC 杠杆的好标的物"；SBTC 推出对生态发展可能没有太大影响
- [[来源_2023-05_币安研报_BTC生态_潜在机会]] — 币安研报早期系统介绍 Stacks：sBTC 信任最小化双向挂钩机制设计、Nakamoto 升级计划（100%比特币安全性确定最终性，2023年下半年预期）、Clarity 语言 vs Solidity 对比讨论
- [[来源_2023-05_BRC20_闪电网络_RGB_扩容_ChainCatcher]] — 2023年5月介绍：PoX共识机制详解（锁仓BTC获得STX、锁仓STX获得BTC的双代币交换）、Clarity语言追踪比特币链上行为的能力、Stacks生态应用（Hiro Wallet、Alex DEX、Gamma NFT市场、Arkadiko借贷平台）
- [[来源_2023-05_比特币生态_项目工具_ODaily]] — 补充 Stacks 生态钱包 [[hiro-wallet]] 和 [[xverse]] 在 2023 年 5 月的早期状态
- [[来源_2023-05_BTC_DeFi_ALEX_Arkadiko]] — 2023年5月 Stacks DeFi 微观快照：ALEX（26.7M/94.3%）和 Arkadiko（6.9M/仅7个交易对3种借贷资产）两个头部协议占 Stacks 链全部 TVL
