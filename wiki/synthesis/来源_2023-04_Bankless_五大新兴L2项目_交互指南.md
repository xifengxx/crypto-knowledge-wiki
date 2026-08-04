---
type: source
source_type: article
url: https://www.bitpush.news/articles/4142370
author: Bankless（编译：比推BitpushNews Mary Liu）
date: 2023-04-27
ingested: 2026-06-30
---

# Bankless：探讨五大新兴L2项目及其交互指南

## 阅读证据
- 总行数: 152
- Q1 (前25%): 文章将 Arbitrum、Optimism、zkSync、StarkNet、Polygon zkEVM 合称为 L2"五巨头"，并指出以太坊的未来取决于一个丰富多样的 L2 生态系统
- Q3 (中后25%): Scroll 的架构由三个主要基础设施组件组成：Scroll Node（含 Sequencer/Coordinator/Relayer）、Roller Network 和 Rollup & Bridge Contracts
- Q4 (最后25%): Taiko 团队在最新一轮测试后已弃用 Alpha-2 测试网，当时没有可供试用的实时测试网
- 图片: 0 已分析 / 0 本地可用 / 9 张外部URL（bitpush.news CDN，无法访问）

## 核心要点
- Base 是 Coinbase 基于 OP Stack 构建的 Optimistic Rollup，Coinbase 拥有 1.1 亿经过验证的用户，团队当时没有推出 BASE 代币的计划但留有变数
- Fuel 采用模块化区块链堆栈设计，三大核心技术为并行事务执行、FuelVM 虚拟机以及 Sway 开发语言，目标是成为最快最高效的执行层
- Linea 是 ConsenSys 推出的 zkEVM，将原生集成 MetaMask 钱包和 Truffle 开发工具包，此前称为 ConsenSys zkEVM
- Scroll 是 zkEVM 赛道的新兴竞争者，通过 Scroll Node / Roller Network / Rollup & Bridge Contracts 三层架构实现原生 EVM 字节码执行
- Taiko 是另一个 zkEVM 项目，目标是无需任何代码修改即可运行以太坊智能合约，开发者在迁移 dApp 时无需重写代码

## 关键数据
- Coinbase 已验证用户数：1.1 亿（2023 年）
- 以太坊 L2 赛道"五巨头"（2023年）：Arbitrum、Optimism、zkSync、StarkNet、Polygon zkEVM
- Scroll Alpha 测试网上线时间：2023 年 2 月
- Linea 公共测试网上线时间：2023 年（私有测试网始于 2023 年 1 月）
- 截至文章发表时 Taiko 的测试网状态：Alpha-2 已被弃用，无可用测试网

## 与已有知识的关系
- 补充 [[layer2]] — 2023 年初新兴 L2 竞争格局的快照记录：Base/Fuel/Linea/Scroll/Taiko 五个项目的早期状态、技术路线和交互方法，是 L2 赛道从"五巨头"走向"百花齐放"的历史见证
- 补充 [[base]] — 记录了 Base 最早期的定位和交互方式：Goerli 测试网阶段、官方无代币计划但未完全排除、测试 NFT 合约地址
- 补充 [[以太坊生态]] — 当时(2023年初)正值 zkEVM 概念爆发期，ConsenSys(Linea)、Scroll、Taiko 三家的 zkEVM 几乎同时推进测试网
- ⚠️ 时效性提示：本文发表于 2023 年 4 月，所有项目测试网交互指引已过时。Base/Linea/Scroll 已上线主网多年，Fuel 和 Taiko 也已完成主网发布
- [[coinbase]] — Base 的母公司和排序器运营方，1.1 亿用户基础为 Base 的冷启动提供独特优势

## 值得记住的引用
> "以太坊的未来将取决于一个丰富多样的 L2 生态系统，这一点从未如此清晰。" — 文章开篇对 L2 赛道重要性的判断

> "Coinbase 拥有 1.1 亿经过验证的用户，其 L2 可以很好地随着时间的推移取得成功，虽然团队目前没有推出 BASE 代币的计划，但计划不总是一成不变的" — 关于 Base 不发币策略的早期报道，暗示了后续代币预期的可能性

> "Taiko 旨在无需任何更改即可运行以太坊智能合约代码，从而使开发人员可以轻松地将其现有应用程序迁移到 L2，而无需实施新代码。" — Taiko 的核心价值主张：零迁移成本的 zkEVM

## 我的笔记
这篇文章是 2023 年 4 月对新兴 L2 赛道的早期梳理，历史价值远大于实操价值。今天回头看，五个项目的发展路径截然不同：Base 凭借 Coinbase 的流量和品牌成为以太坊 TVL 第一 L2；Scroll 上线后表现中规中矩，生态建设仍在追赶；Linea 靠 ConsenSys 生态背书活跃度尚可；Fuel 和 Taiko 在 zkEVM 叙事退潮后声量显著下降。文章最有趣的地方是记录了当时社区对"空投交互"的狂热——每一个项目介绍下都紧跟"如何交互"指引，这种叙事在 2023-2024 年的空投牛市中达到了顶峰，但在 2025 年后随着 L2 代币纷纷兑现而逐渐冷却。从投资角度看，这篇快照提醒我们：早期 L2 叙事中脱颖而出的不是技术最强的，而是用户获取能力最强的。
