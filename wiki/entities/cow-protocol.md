---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [defi, dex, mev, intent]
---

# CoW Protocol (CoW Swap / CoW AMM)

## 基本信息
- 定位：意图驱动的去中心化交易协议，通过批量拍卖 + Solver 竞争实现 MEV 保护和最优执行
- 核心产品：CoW Swap（交易聚合器）、CoW AMM（MEV 捕获型 AMM）
- 治理：CoW DAO
- 名字来源：Coincidence of Wants（需求巧合）——当两个用户正好需要彼此的交易对时可无需外部流动性直接撮合

## 核心业务/产品

### CoW Swap
意图驱动 DEX：用户签署交易意图（Intent）链下提交 → Solver 竞争最优执行路径 → 批量拍卖统一清算价 → 单笔交易链上结算。保护交易者免受前置交易、后置交易和三明治攻击。

### CoW AMM（2024 年推出）
MEV 捕获型 AMM，核心创新是将套利者从 LP 的对手方变为 LP 的收益来源：
- 采用功能最大化 AMM（FM-AMM）设计
- 当出现套利机会时，Solvers 竞价以获得重新平衡池的权利
- 出价最高（为 LP 留下最多盈余）的 Solver 胜出
- LP 获得盈余作为提供流动性的额外激励，而不仅靠交易手续费
- 一个批次形成一个区块，从根本上阻止基于价格差异的 MEV

## 关键数据
- 月交易量：超 35 亿美元（排除路由至聚合器的交易）
- 与 Uniswap X、1inch Fusion 合计占以太坊 DEX 交易量约 12%（2025年1月超 105 亿美元）

## 关键机制
- **CoW Swap 批量拍卖流程**：（1）用户提交订单为意图（链下）→（2）分组为批次发送给 solver 网络 →（3）Solvers 竞争寻找最优执行路径 →（4）匹配意图链下撮合结算 →（5）未匹配订单通过 AMM/DEX 聚合器执行 →（6）协议排名 solver 方案，执行最优方案上链
- **Solver 网络**：第三方实体竞争寻找最优交易路径，需质押可罚没保证金，由 CoW DAO 管理白名单。Solver 获胜者获得 COW 代币激励，行为不端罚没质押金。计划引入无需许可 solver 模型（智能合约验证 + 资产质押）
- **统一清算价**：同一批次内同代币对的所有交易以相同价格执行，消除滑点差异
- **LVR 消除**：不向外部套利者提供过时的 AMM 价格，将 MEV 内部化为 LP 收入

## 竞争优势
- 批量拍卖 + 统一清算价天然免疫三明治攻击
- CoW AMM 将 MEV 从成本项变为收入项
- 意图架构使用户无需关心执行路径

## 风险/争议
- Solver 网络的中心化程度——Solver 白名单由 DAO 管理
- 批量拍卖的延迟 vs 即时成交的体验权衡

## 相关实体
- [[balancer]] — CoW AMM 与 Balancer 联合开发
- [[uniswap]] — CoW Swap 将 Uniswap V2/V3 作为外部流动性来源
- [[bunni]] — 同为 2024 年 LP 盈利能力创新的代表项目

## 来源
- [[来源_2024_CoW_协议_现代DEX]] — CoW Protocol 技术架构与 Solver 竞争机制详解
- [[来源_2024-08_LP盈利_DEX存活_LVR_深潮TechFlow]] — CoW AMM 作为 MEV 捕获 AMM 解决 LVR 问题的案例分析
- [[来源_2025-02_AMM_订单簿_意图_ThreeSigma]] — CoW Swap 批量拍卖六步流程详解、Solver 激励与质押机制、月交易量 35 亿美元数据
