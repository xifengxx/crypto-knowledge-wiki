---
type: entity
entity_type: company
created: 2026-07-02
updated: 2026-07-02
tags: [mev, ethereum, infrastructure, research]
aliases: [Flashbots Research]
---

# Flashbots

## 基本信息
- **类型**: company
- **赛道**: MEV 基础设施与研究
- **创立时间**: 2020 年
- **关联机构**: Paradigm（投资组合公司）
- **定位**: 以太坊 MEV 生态的核心基础设施提供者，主导 MEV-Boost、Flashbots Protect、BuilderNet 等关键项目

## 核心业务/产品

### MEV-Boost
以太坊 PoS 时代的事实标准 PBS（提议者-构建者分离）实现。在 Merge 后通过链下协调实现，而非协议内嵌（enshrined）。工作流程：
1. 搜索者提交交易束给构建者
2. 多个构建者竞争组装最优区块
3. 通过中继网络（relay）进行区块拍卖
4. 验证者（提议者）选择最高出价的区块

### Flashbots Protect
面向 DEX 用户的 MEV 保护工具，通过私有 RPC 端点提交交易，防止三明治攻击和抢跑。将高达 90% 的套利机会价值返还给用户。

### MEV Blocker
另一 MEV 保护工具，为 DEX 用户提供预交易保护、Gas 退款和 MEV 返现。

### BuilderNet
与 Beaverbuild（大型区块构建者）和 Nethermind（以太坊研究和工程组织）共同开发的去中心化区块构建者网络。利用可信执行环境（TEE）实现多运营者共同运营同一个区块构建者，目标实现高效且完全去中心化的区块构建生态。

### Flashbots Relay
中继网络，在构建者和验证者之间传递区块头（不暴露完整内容）和出价，确保出价真实有效。

## 关键数据
- MEV-Boost 是以太坊 Merge 后的事实标准 PBS 机制
- Flashbots Protect 可将高达 90% 的套利价值返还给用户
- Flashbots 作为 Paradigm 投资组合公司在 Paradigm 的 SEC 政策回函中扮演重要角色

## 新论题：MEV 是区块链扩容的极限（2025年6月）

Flashbots 在 2025 年 6 月发布了一篇论文，提出全新的核心论题：**MEV 已成为限制区块链扩容的主导性经济瓶颈**，而非技术层面的 TPS 或 Gas 上限。方法论上使用自研的 `spam-inspect` Python 工具（基于 `trace_block` RPC）对 OP-Stack Rollup 进行系统性垃圾机器人分析。

### 量化发现
- 垃圾机器人在多个 OP-Stack Rollup 上消耗 >50% 的 Gas 但支付 <10% 的手续费（OP Mainnet: 57% vs 9%，6 倍效率差距）
- Base 2024年11月至2025年2月总吞吐量从 15 Mgas/s 增至 26 Mgas/s，但有效吞吐量（扣除垃圾后）恒定在约 12 Mgas/s——几乎所有新增容量被垃圾吞噬
- 仅 2 个实体控制了 Base 上 >80% 的垃圾交易（极度集中的市场结构）
- 650 倍效率差距：Uniswap V3 两笔套利仅需 ~200,000 Gas，Base 上实现同等结果消耗 ~1.3 亿 Gas
- 调研范围限 OP-Stack 系链（`trace_block` 端点可用性），但引用第三方数据证实 Solana 和 zkSync/Arbitrum 同样存在此问题

### 理论贡献：垃圾竞拍（Spam Auction）
提出"垃圾竞拍"理论框架——四种因素共同创造此低效机制：
1. **交易表达性**：条件逻辑可编码在链上交易中
2. **私密内存池**：用户免受抢跑但搜索者被蒙蔽
3. **低费用**：低成本使盲搜在经济上可行
4. **缺乏高效竞拍**：无正式出价机制，竞争退化为 Gas 消耗竞赛

### 解决方案方向
提出两组件方案——**可编程隐私**（通过 TEE 让搜索者离线读取交易流但可验证地禁止夹击和三明治攻击）和**显式竞拍**（搜索者直接出价购买特定排序权）。已通过 TEE 在以太坊 L1 上验证（搜索者在 TDX 环境中回跑交易数月）。

## 竞争优势 / 护城河
- 在 MEV 基础设施领域具有先发优势和事实标准地位
- MEV-Boost 被绝大多数以太坊验证者使用
- 从底层基础设施（MEV-Boost）到用户工具（Protect）到去中心化方案（BuilderNet）的完整产品矩阵
- 持续产出高水平研究论文（MEV 和扩容极限等），巩固思想领导地位
- 与 Paradigm 的深度资本和研究关联

## 相关事件时间线
- 2019: 以太坊研究者首次提出 "Miner Extractable Value" 概念
- 2020: Flashbots 成立；发布经典论文 "Flash Boys 2.0"
- 2022-09: 以太坊 Merge，MEV-Boost 成为事实标准 PBS 机制
- 2024-2025: 与 Beaverbuild、Nethermind 共同推出 BuilderNet
- 2025-06: 发布新论题 "MEV and The Limits of Scaling"，论证 MEV 已成为区块链扩容的主导性经济限制，并提出 TEE + 显式竞拍作为解决方案

## 相关实体
- [[paradigm]] — 投资方，Paradigm 的 SEC 政策论文中多次提及 Flashbots
- [[ethereum]] — 所在生态
- [[mev]] — 核心业务领域
- [[titan-builder]] — 竞争性区块构建者
- [[jito]] — Solana 生态的对应 MEV 基础设施；Jito-Solana 客户端在 Solana 上引入类似 PBS 的拍卖机制

## 来源
- [[来源_2025-04_MEV_底层市场_关键中立性_Paradigm]] — Flashbots 作为 Paradigm 投资组合公司被详细描述，包括 MEV-Boost 四步流程、Flashbots Protect、BuilderNet
- [[来源_2024-04_链抽象细分_六模块_主要参与者_SevenX]] — Flashbots 被列为链抽象四大交叉领域的关键参与者
- [[来源_2025-06_MEV_伸缩限制_垃圾机器人_Flashbots]] — Flashbots 最新研究论文，提出 MEV 是扩容极限的核心论题，量化垃圾机器人浪费数据，提出 TEE + 显式竞拍方案
- [[来源_2023_MEV_PBS_Flashbots_投资]] — 中文教育视角概述 Flashbots 全线产品：Auction、Protect RPC、MEV-Boost、MEV-Explore、SUAVE、Bundle
