---
type: source
source_type: article
url: https://www.panewslab.com/zh/articledetails/6tnts21h.html
author: 茶馆小二儿（链茶馆）
date: 2024-02
ingested: 2026-06-30
---

# Berachain 灵魂十三问：读懂新公链 Berachain

## 阅读证据
- 总行数: 147
- Q1 (前25%): Berachain 是基于 Cosmos SDK 构建的 EVM 兼容 L1，采用 Proof of Liquidity 共识机制，三代币系统（BERA/Gas、HONEY/算法稳定币、BGT/不可转移治理代币），生态已有超过 2.5 亿美元承诺 TVL
- Q3 (中后25%): 项目列举五大风险类别——技术风险（安全性/可扩展性/性能）、法律和监管风险、市场竞争、市场流动性和代币价格波动、项目执行能力和团队稳定性风险
- Q4 (最后25%): 创始团队四人均使用化名（Smokey the Bera、Papa Bear、Homme Bera、Dev Bear），个人历史和此前项目经历无公开信息；Series A 融资 $42M，估值 $420M（4.2 亿美元）
- 图片: 1张装饰性图片(PANews评选活动横幅)已跳过 / 0张外链不可用

## 核心要点
- 此文以 13 个问答形式系统介绍 Berachain 基本面，覆盖赛道定位、技术原理、商业模式、团队、融资、风险、合作伙伴、技术创新等维度，属于入门级概览而非深度分析
- Berachain 定位为 EVM 兼容的高性能 L1，核心差异化是 Proof-of-Liquidity（PoL）共识——通过整合流动性提供者池、流动性挖矿、流动性证明和流动性治理四大机制，试图解决传统 PoS 的流动性闲置和权益中心化问题
- 技术架构基于 Cosmos SDK + Polaris EVM 框架，实现 EVM 运行时层的模块化分离，兼顾 Cosmos 生态的互操作性和以太坊的工具链兼容性
- 商业模式包含四个收入来源：流动性挖矿奖励抽成、区块链基础设施服务费、开发者工具和支持收费、生态合作伙伴收入——本质上仍以代币排放补贴为核心驱动
- 竞争定位模糊——文章将 Ethereum、BSC、Avalanche、Polygon 均列为"类似项目"，但实际上 Berachain 的 PoL 机制在 L1 层面是独特的，真正的同类对比应为 Curve ve(3,3) 在应用层的贿赂治理机制
- 文章由 ChatGPT 辅助生成（原文注明"用问答的形式结合 chatgpt"），信息密度较低，大量内容为通用区块链科普话术，关键细节（如 PoL 具体实现参数、飞轮数学逻辑、HONEY 抵押率）缺失

## 关键数据
- $250M+：文章发布时 Berachain 生态承诺总锁定价值（TVL），来源未注明
- $42M：累计融资总额，分 2 轮完成——第 1 轮 2022 年 12 月 1 日，A 轮 2023 年 4 月 21 日（后更正为 4 月 20 日披露）
- $420M：Series A 估值（4.2 亿美元），由 Polychain Capital 和 OKX Ventures 领投
- 4 位匿名创始人：Smokey the Bera、Papa Bear、Homme Bera、Dev Bear，均无公开背景履历
- 3 家机构投资者：Polychain、Agile Angel、Hack VC；天使投资者包括 Zaki Manian（Cosmos 生态知名开发者）
- 2 个已知合作伙伴：Stakin（验证节点运营商，已在公共测试网运行）、Polychain Capital + OKX Ventures（领投方）

## 与已有知识的关系
- 补充 [[berachain]] — 提供入门级基本面概览：赛道定位、商业模式、风险清单、合作伙伴、技术创新维度（这些在已有 CryptoSnap 深度分析中未覆盖的维度）
- 补充 [[l1-competition]] — Berachain 的竞争定位在文章中被过度泛化（与 ETH/BSC/Avax/Polygon 并列），实际上 PoL 机制使其成为 L1 竞赛中"代币经济学路线"的代表
- 补充 [[tokenomics]] — 三代币模型（BGT 治理/BERA Gas/HONEY 稳定币）是双币模型向三币模型的实践案例，BGT 不可转让+仅通过 LP 获得的设计是对治理代币金融化问题的回应
- ⚠️ 与 [[来源_2024-08_Berachain_POL_流动性证明_深潮TechFlow]] 存在信息精度差异——后者提供了 PoL 的数学细节和白名单机制分析，本文仅给出概念性描述

## 值得记住的引用
> "Berachain 是一个基于 Cosmos SDK 构建的兼容 EVM 的 Layer 1 区块链，并采用 Proof of Liquidity 共识机制保护。Berachain 代币经济首次引入三代币系统的 Bera 网络，拥有网络 gas 代币 BERA、生态算法稳定币 HONEY 和不可转移的 Bera 治理代币 BGT。"（文章开篇总结，原文如此，虽然是 ChatGPT 辅助生成的平铺直叙，但准确概括了 Berachain 的核心三要素）

> "Berachain 的创始团队成员以化名（Smokey the Bera、Papa Bear、Homme Bera 和 Dev Bear）的形式出现，因此他们的个人历史和之前的项目并没有公开的具体信息。"（原文关于团队透明度的自白——匿名团队在新公链项目中并非个例，但确实增加了尽职调查难度）

## 我的笔记
这篇文章的信息价值有限——它是典型的"ChatGPT+编辑"式行业科普稿，13 问中大量回答属于区块链通用知识（如"什么是 L1""什么是智能合约平台"），对 Berachain 真正独特的东西（PoL 如何数学上运行、白名单机制的去中心化张力、三币模型如何防止通胀螺旋）基本一笔带过。它的主要用途是作为中文读者的入门索引，而非深度研究素材。

从信息增量角度看，唯一的独特贡献是明确列出了 Berachain 的竞争定位（赛道同类项目）、收入模式假设、以及五个风险维度的框架——这些在更技术性的 CryptoSnap/深潮分析中没有展开。但注意：竞争定位把 BSC 和 Polygon 也列为"类似项目"是明显错误，说明 ChatGPT 生成的分类缺乏判断力。

另外值得注意的 meta 层面的问题：这篇文章本身证明了 Web3 中文媒体内容生产的普遍模式——ChatGPT 粗糙生成 + 人工微调 + 品牌包装。读者如果误以为这是深度研报可能被误导。
