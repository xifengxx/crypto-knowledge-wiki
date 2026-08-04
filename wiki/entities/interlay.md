---
type: entity
entity_type: project
created: 2026-07-02
updated: 2026-07-02
tags: [cross-chain, interoperability, bitcoin, defi]
---

# Interlay

## 基本信息
- 类型：跨链互操作性项目
- 创始人：Alexei Zamyatin
- 核心产品：跨链桥（Interlay Bridge）、BRC-21/BRC-42 代币标准提案
- 定位：为比特币网络构建完全去中心化的跨链资产桥接基础设施

## 核心业务/产品
Interlay 专注于将其他区块链的资产以去中心化方式引入比特币网络。2023年5月，Interlay 创始人 Alexei Zamyatin 提出 BRC-21 和 BRC-42 代币标准，作为 BRC-20 的跨链扩展：

- **BRC-21**：将外部链资产（ETH、DOT、ATOM、DAI 等）部署到比特币网络，通过锁定起始链上的资产生成对应的 BRC-20 版本代币
- **BRC-42**：将 BRC-20 代币部署到其他链（以太坊、Solana、Polkadot 等），以去中心化方式解锁 DeFi 场景

BRC-21 的跨链流程依赖三个组件：
1. 起始链智能合约：处理起始链上的铸币和赎回操作
2. 自定义索引器（Custom indexer）：验证比特币网络上的 BRC-21 铸币、转移、赎回等操作
3. 比特币中继器（BTC-Relay）：作为比特币网络上的轻客户端验证交易包含情况

## 关键数据
- BRC-21 标准 V 0.1 版本文档于 2023 年 5 月 7 日由 Interlay Labs 发布

## 竞争优势 / 护城河
- 提出"为比特币桥接资产而非为其构建编程协议"的差异化路径
- BRC-21 的部署方式与 BRC-20 高度兼容，降低开发者和用户学习成本
- 将去中心化稳定币引入闪电网络的应用场景定位具有实际支付价值

## 风险 / 争议
- BRC-21 的完全去中心化依赖于比特币中继器和自定义索引器的安全性，但文章未深入讨论其信任假设
- 面临 Taproot Assets（Lightning Labs）、Runes 协议等竞品的竞争
- 未提及 BRC-21 标准的实际采用情况和市场接受度

## 相关实体
- [[brc-20]] — BRC-21 基于 BRC-20 标准扩展，是其跨链版本
- [[makerdao]] — BRC-21 的核心用例是将 MakerDAO 的 DAI 稳定币引入比特币网络

## 来源
- [[来源_2023-05_BRC-21_跨链_ODAILY]]
- [[来源_2023-05_Ordinals家族_BRC20_协议对比_BlockBeats]]
- [[来源_2023-05_BTC_Ordinals生态_代币协议_全景指南]]
