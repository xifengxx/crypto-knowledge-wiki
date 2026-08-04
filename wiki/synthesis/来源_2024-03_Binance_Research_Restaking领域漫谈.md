---
type: source
source_type: report
url: https://www.techflowpost.com/article/detail_16784.html
author: Binance Research
date: 2024-03
ingested: 2026-06-28
tags: [restaking, eigenlayer, lrt, eth, babylon]
---

# Binance Research：Restaking 领域漫谈

## 阅读证据
- 总行数: 557
- Q1 (前25%): EigenLayer TVL超$7.5B，取消充值上限后从$2B飙升至$6B（+180%）。再质押=汇集以太坊安全性提供给其他协议，解决安全分散化问题
- Q3 (中后25%): Ether.fi最大LRT协议TVL $1.2B+，Puffer Finance $1B+（Secure-Signer防罚没），Kelp DAO $490M（rsETH），Renzo $350M（ezETH），各自融资$3.4M-$5.5M
- Q4 (最后25%): 风险考量：验证者串通/意外罚没/杠杆滑坡效应。Vitalik"不要让以太坊共识过载"警告。以太坊质押率~25% vs Solana/ADA/Avax >50%
- 图片: 0张已分析 / 1张装饰跳过 / 0张外部URL无法获取

## 核心要点
1. **再质押核心逻辑**：汇集以太坊等大型链的安全性提供给其他协议（安全即服务），消除新协议自建加密经济安全性的巨额资本成本
2. **EigenLayer三方市场**：再质押者（LST/原生ETH）→ 节点运营商（验证者）→ 主动验证服务AVS（EigenDA/跨链桥/预言机等）
3. **EigenLayer分阶段上线**：阶段1质押者（2023.6启动，支持12种LST）→ 阶段2运营商+EigenDA（2024H1主网）→ 阶段3更多AVS+支付+罚没（2024H2）
4. **跨链再质押格局**：Babylon（BTC质押，$18M融资，45+Cosmos链集成）+ Picasso（Solana再质押+IBC桥接）
5. **LRT四大协议对比**：Ether.fi（$1.2B+/eETH/DVT）+ Puffer（$1B+/pufETH/防罚没）+ Kelp（$490M/rsETH）+ Renzo（$350M/ezETH/BNB Chain再质押）
6. **核心风险**：验证者串通攻击/意外罚没/杠杆循环/Vitalik反对以太坊共识过载/协议可持续性

## 关键数据
- EigenLayer TVL：**>$7.5B**（2024年3月），取消上限后从$2B→$6B（+180%）
- 支持LST类型：**12种**
- EigenLayer充值上限期间TVL增长：**180%+**（5天内$2B→$6B）
- ETH质押率：**~25%**（vs Solana/ADA/Avax >50%）
- Babylon测试网集成：**45+** Cosmos链，总市值**$7.4B+**
- Babylon融资：**$18M**（2023年12月）
- Ether.fi TVL：**$1.2B+**，融资**$5.3M**（种子轮）
- Puffer Finance TVL：**$1B+**，融资**$5.5M**（种子轮）
- Kelp DAO TVL：**$490M+**
- Renzo TVL：**$350M+**，融资**$3.4M**（估值$25M）
- 2024-2030年解锁代币：**$155B**（需$80B需求匹配）

## 与已有知识的关系
- 大幅补充 [[eigenlayer]] — 三方市场结构/分阶段上线/AVS生态/风险考量
- 补充 [[liquid-staking]] — LRT四大协议对比表+LRT vs LST区别
- 补充 [[babylon]] — BTC时间戳协议/三部分架构/45+Cosmos链集成
- 关联 [[data-availability]] — EigenDA作为首个AVS，与Celestia/Avail竞争DA市场
- 关联 [[bitcoin-ecosystem]] — Babylon BTC质押（非桥接方式，BTC锁定在比特币链上）

## 值得记住的引用
> "再质押试图汇集以太坊等大型链的安全性并将其提供给其他应用程序使用。"
> "EigenLayer 的 TVL 增长了 180% 以上，从约 20 亿美元飙升超 60 亿美元，成为第四大 DeFi DApp。"
> "Vitalik 认为，以太坊不能对任何应用程序层面上的事故负责。"
> "按照目前市场对 EigenLayer 和 Liquid 再质押协议的需求来看，我们可能会经历一段有趣的旅程。"

## 我的笔记
这是Binance Research 2024年3月的再质押全景报告，覆盖EigenLayer/Babylon/Picasso/四大LRT协议。最值得记住的框架：①EigenLayer = 以太坊安全的Airbnb（汇集+出租安全性），②LRT是LST的升级版——在质押收益之上叠加再质押收益+积分预期。核心矛盾：再质押为AVS提供了低成本安全启动，但导致以太坊共识层的风险积累（Vitalik的观点值得重视）。到2026年中回顾，EigenLayer主网已全面上线，LRT赛道经历了爆发式增长和自然淘汰，Ether.fi成为赢家之一。
