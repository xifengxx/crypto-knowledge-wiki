---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [web3, data, depin, polkadot, solana, indexer]
aliases: [SubQuery Network, SQT]
---

# SubQuery Network

## 基本信息
- 类型: 去中心化数据索引 + RPC 基础设施（多链 DePIN）
- 语言: GraphQL
- 代币: SQT
- 定位: 从 Polkadot/Substrate 数据索引器发展为多链去中心化基础设施网络
- 叙事: 将自身定位为 DePIN 项目，在 DePIN 成为主流叙事前就已构建去中心化基础设施

## 核心业务/产品
### 数据索引器
SubQuery 最初面向 Polkadot 和 Substrate 项目提供数据查询服务，允许开发人员专注于核心用例和前端，无需构建用于数据处理的定制后端。受 [[the-graph]] 启发，使用 GraphQL 语言。现已支持近 **300 条区块链**。

### 去中心化 RPC（2025 年新增）
2025 年 SubQuery Network 启动去中心化 RPC 服务：
- 节点运营商同时运行 RPC 和索引节点
- 消除对中心化中间件的依赖
- 支持安全、无需许可的数据访问
- 支持 EVM 链及非 EVM 链（[[solana]]、[[polkadot]]）

## 经济模型
与 The Graph 类似的三角色模型：
- 消费者：发布查询任务
- 索引者：提供数据服务
- 委托人：将空闲 SQT 代币委托给索引者，激励诚实参与

## DePIN 组件
SubQuery 在 DePIN 框架下发展了以下组件：
- **节点提供者**：运行 RPC 和索引节点，贡献去中心化数据基础设施
- **服务验证**：激励系统 + 争议解决机制
- **代币激励**：基于贡献质量和一致性发放 SQT 奖励

## 竞争优势
- 先发优势：在 DePIN 叙事流行前已建立数据索引网络
- 多链覆盖：近 300 条链，包括 EVM 和非 EVM 生态
- 完整的 DePIN 组件体系：激励系统、服务验证、争议解决

## 相关实体
- [[the-graph]] — 灵感来源和主要竞争对手（数据索引赛道）
- [[covalent]] — 同类多链数据查询协议
- [[helium]] — 同为 DePIN 项目，去中心化无线网络
- [[render-network]] — 同为 DePIN 项目，去中心化 GPU 渲染
- [[io-net]] — 同为 DePIN 项目，去中心化 GPU 算力市场

## 来源
- [[来源_2022-05_Web3数据赛道_数据索引_SevenX]]
- [[来源_2025-05_DePIN_值得关注_SubQuery]] — DePIN 视角下的 SubQuery 定位更新：300 链覆盖 + 去中心化 RPC + Solana/Polkadot 支持
