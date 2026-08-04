---
type: entity
entity_type: project
created: 2026-06-30
updated: 2026-06-30
tags: [infrastructure, cross-chain, domain, ux]
---

# Clusters

## 基本信息
- 赛道：全链域名服务（All-Chain Name Service）
- 底层技术：基于 LayerZero 跨链协议
- 创始人：delegate.xyz 创始人（有充分的行业履历和资源）
- 定位：一个账户名管理多链地址——"Web3 的统一收款账户"

## 核心业务/产品
Clusters 提供全链域名解析服务：
- 用户注册一个 `用户名/` 账户（如 `jamesx/`），绑定主钱包
- 一键生成 8 条公链的对应地址：`/evm` `/sol` `/btc` `/ripple` `/aptos` `/doge` `/tron` `/cosmos`
- 收款时直接输入 `用户名/链名`（如 `jamesx/sol`），被集成应用自动解析为对应链地址
- 底层依赖 LayerZero 的跨链消息传递

## 关键数据
- 注册费：最低 **0.01 ETH**（约 $30，2024 年 9 月）
- 支持链数：**8 条**主流公链
- 对比：DeBank Web3ID 注册费接近 **$100**（且要求先将资产存入 DeBank L2）

## 竞争优势 / 护城河
- **价格优势**：0.01 ETH vs 逐个注册 .eth/.sol/.bnb 等域名的总费用
- **管理统一**：一个账户名管理 8 条链地址 vs 多条链分别管理
- **创始人资源**：delegate.xyz 创始人 + LayerZero 背书，有利于行业集成推广
- **体验简洁**：`用户名/链名` 模式直观，类似 Web2 的"用户名@平台"

## 风险 / 争议
- 依赖 LayerZero 跨链协议的安全性和可用性
- 需要足够多的协议集成才能发挥网络效应——当前仍处于早期
- 与 ENS 等已有域名系统存在竞争关系（ENS 也在探索多链支持）

## 相关概念
- [[cross-chain]] — 底层依赖跨链技术
- [[chain-abstraction]] — Clusters 是链抽象在地址管理层的重要落地产品
- [[account-abstraction]] — 地址抽象 + 账户抽象 = 完整的 Web3 UX 解决方案

## 我的判断
Clusters 的 `用户名/链名` 模式是最直观的多链地址管理方案之一——比 ENS 的单一链绑定模式更贴合多链现实。创始人来自 delegate.xyz + LayerZero 背景意味着集成推广不会太慢。但域名服务的网络效应很强，ENS 的先发优势不容低估。关键变量是：头部钱包（MetaMask/OKX/Phantom）和应用（Uniswap/Aave）是否会集成 Clusters 的地址解析。

## 来源
- [[来源_2024-09_Web3_Mass_Adoption_Web2.5_深潮TechFlow]]
