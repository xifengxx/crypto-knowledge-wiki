---
type: entity
entity_type: company
created: 2026-07-02
updated: 2026-07-02
tags: [web3, data, analytics, sql]
aliases: [Dune, Dune Analytics, Dune.com]
---

# Dune Analytics

## 基本信息
- 类型: 综合型 Web3 数据平台
- 成立时间: 约 2019 年
- 融资: 2022 年 2 月完成 B 轮 6942 万美元融资，估值 10 亿美元
- 支持网络: Ethereum、Polygon、Binance Smart Chain、Optimism、Gnosis Chain（截至 2022 年）
- 域名: 已从 dune.xyz 跳转到 dune.com

## 核心业务/产品
Dune Analytics 是一个综合性 Web3 数据平台，定位为"平民版 Nansen"和"链上数据分析师神器"。它将键值数据库保存的链上原始交易数据（含 block_time、from、to、value、data 等字段）解析后录入 PostgreSQL 关系型数据库，用户只需使用类 SQL 语句（PostgreSQL 方言）即可查询。核心工作流分为三步：
1. **SQL 查询（Query）** — 使用 select/from/where/order by/limit 基本语法从数据仓库提取数据
2. **可视化（Visualization）** — 将查询结果转为 bar chart、counter 等图表
3. **数据看板（Dashboard）** — 将多个 Query 汇总为 Dashboard

提供三类数据表：
- 原始交易数据表（如 `ethereum.transactions`）
- 项目级数据表
- 聚合型数据表

## 零基础入门最佳实践
- **关键技能：Fork** — 新人应优先从大神已有的 Query 中 Fork 并修改合约地址等核心参数，而非从零编写复杂 SQL。此机制构成 Dune 生态的网络效应
- **单位换算** — 以太坊默认单位为 wei（1 ETH = 10^18 wei），查询时需 `value/1e18` 转换为 ETH
- **常用函数** — sum 求和、count 计数、avg 平均、date_trunc 截断日期、group by 分类汇总、累计求和（窗口函数）
- **数据表字段** — `ethereum.transactions` 含 block_time（区块时间）、from（发起地址）、to（转入地址）、value（转账金额）、data（附加数据）

## 社区模式
Dune 鼓励数据共享，默认情况下所有查询和数据集公开可见。用户可以 Fork 他人的 Dashboard 作为起点。一个社区作者的第一个 Syndicate Dashboard 曾被收录到官方 Dune Digest 第 29 期，体现了社区对新人贡献的开放性。

## 相关实体
- [[flipside-crypto]] — 同类竞品，同样使用 SQL 查询
- [[nansen]] — 侧重标签分析的封闭式数据平台（与 Dune 的开放社区模式形成对比）
- [[the-graph]] — 底层索引协议
- [[footprint-analytics]] — 同类数据分析平台
- [[debank]] — DeFi 组合跟踪器

## 来源
- [[来源_2022-05_Web3数据赛道_数据索引_SevenX]]
- [[来源_2022-06_Dune_Analytics_入门指南]]
