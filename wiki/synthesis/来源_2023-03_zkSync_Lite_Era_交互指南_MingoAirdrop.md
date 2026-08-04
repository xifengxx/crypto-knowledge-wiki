---
type: source
source_type: article
url: https://twitter.com/MingoAirdrop/status/1638178685999271940
date: 2023-03-21
ingested: 2026-07-02
---

# zkSync Lite 和 Era 空投交互指南

## 阅读证据
- 总行数: 51
- Q1 (前25%): zkSync 主网有两个版本——Lite 已对公众开放，Era 暂只供开发者使用，官方时间表为 Q2（2023年第二季度）向公众开放；当前可交互的是 Lite 和 Era 测试网
- Q3 (中后25%): zkSync Lite 已上线运行多年，用户通过「官方网页钱包」激活链地址，再用官方桥/Orbiter/Layerswap 存入 ETH，在 ZigZag 进行交易操作，在钱包内置的 NFT 功能界面铸造 NFT
- Q4 (最后25%): 生态内值得交互的项目包括 SyncSwap、Nexon Finance、Mes Protocol、Mute、OnChain.Trade
- 图片: 0 analyzed / 0 decorative skipped / 0 external URLs unavailable

## 核心要点
- zkSync 主网分为 Lite 和 Era 两个版本：Lite 是已运行多年的支付型 L2，Era 是 2023 年 Q2 面向公众的 zkEVM L2
- 交互策略建议：如果发币快则测试网交互可能被计入；如果主网上线后再发币，则主要考量主网行为
- 交互时尽量模拟正常用户行为，而非只做一笔交易就结束
- zkSync Lite 的交互流程：激活钱包 -> 跨链桥存入 ETH -> DEX 交易 -> 铸造 NFT
- 生态交互项目推荐：SyncSwap（DEX）、Nexon Finance（借贷）、Mes Protocol、Mute（DEX）、OnChain.Trade

## 关键数据
- zkSync 主网版本数：2 个（Lite + Era）
- Era 主网上线时间：2023 年 Q2（原文发布时间点的预计）
- 推荐的跨链桥工具：3 个（官方桥、Orbiter、Layerswap）
- 推荐的 DEX：ZigZag（订单簿模式）
- 生态交互推荐项目：5 个（SyncSwap、Nexon Finance、Mes Protocol、Mute、OnChain.Trade）
- 推荐 NFT 铸造路径：Pinata（上传图片获取 CID）-> zkSync 钱包 NFT 功能界面

## 与已有知识的关系
- 补充 [[zksync]] — 提供 2023 年初 zkSync 空投 farming 视角的实操指南，包含 Lite/Era 双版本交互方法和生态项目清单，这是现有 zkSync 实体页缺少的用户侧交互视角
- 补充 [[layer2]] — 展示了 L2 早期阶段用户如何通过测试网交互和生态项目使用来争取空投奖励的典型行为模式
- 补充 [[matter-labs]] — 从用户交互层面补充 Matter Labs 产品的实际使用流程

## 值得记住的引用
> "从历史看是如果发币比较快，那测试网的交互可能会被计算，如果主网上线之后再发，那主要考量的是主网上的行为"——空投策略的核心判断框架，基于对过往发币项目的行为模式总结
> "交互也不要说交易下就没了，尽量是按一个正常用户行为去使用"——空投 farming 的核心原则：模拟真实用户行为而非刷量

## 我的笔记
这篇教程属于 2023 年初典型的"撸空投"指南，目的是指导用户如何为潜在的 zkSync 空投做准备。文章本身信息密度不高，主要是操作流程和链接列表，但其价值在于记录了一个特定时间点（Era 主网上线前）的交互方法和市场预期。zkSync 后来（2024 年中）确实进行了空投，但策略非常严格（多重条件筛选），导致了大量"科学家的不满"，与此文中的乐观预期形成对比。另外，文中提到的生态项目如 SyncSwap 和 Mute 如今（2026 年）仍在运行但影响力有限，反映 L2 生态竞争残酷。
