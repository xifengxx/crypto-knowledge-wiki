---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [web3, data, indexing, graphql]
aliases: [Graph Protocol, GRT]
---

# The Graph

## 基本信息
- 类型: 去中心化链上数据索引协议
- 主网上线: 2020年12月
- 代币: GRT
- 支持网络: 30+ 条区块链网络（包括 Ethereum、NEAR、Arbitrum、Optimism、Polygon、Avalanche、Celo、Fantom、Moonbeam、Arweave 等）

## 核心业务/产品
The Graph 是一个去中心化的链上数据索引协议，类似于去中心化版本的 API（与传统中心化云服务 API 相对）。用户通过 GraphQL API 和 subgraph（子图）直接访问链上数据，快速且节约资源。

## 经济模型
GRT 代币机制涉及四类参与者：
- 索引者（Indexer）：运行 The Graph 节点提供数据
- 委托人（Delegator）：向索引者质押 GRT 代币
- 策展人（Curator）：使用 GRT 指引哪些子图有查询价值
- 开发者（Developer）：构建和使用子图

## 相关实体
- [[infura]] — 底层节点服务商
- [[alchemy]] — 底层节点服务商
- [[covalent]] — 同类数据查询层，支持跨多链查询
- [[subquery]] — 面向 Polkadot/Substrate 的类似协议

## 来源
- [[来源_2022-05_Web3数据赛道_数据索引_SevenX]]
- [[来源_2022-07_Web3_DAO_基础设施_控制权]] — 2022年Q2收入是Q1的10倍；StreamingFast 加入后带来 Firehose 技术，Pancakeswap 的复杂 Subgraph 同步时间从数周降至六小时；Vitalik Buterin 认可 The Graph 创建激励市场的价值
