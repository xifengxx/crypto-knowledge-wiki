---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [defi, dex, amm, ethereum, multi-chain]
---

# DODO

## 基本信息
- 定位：采用主动做市商（PMM）模型的去中心化交易所
- 核心创新：PMM算法模仿传统做市商行为，集成外部预言机定价
- 链：多链部署（Ethereum、BNB Chain等）
- 代币：DODO

## 核心业务/产品

### PMM（Proactive Market Maker）
DODO的PMM是区别于传统CPMM的核心创新。算法整合外部价格预言机获取市场中间价，然后根据池内库存偏离目标水平的程度动态调价：
- 库存低于目标（买家占优）→ 提价抑制买入、鼓励卖出
- 库存高于目标（卖家占优）→ 降价鼓励买入、减少超额库存
- 滑点系数k控制价格对库存变化的敏感度，k越小流动性越集中在市场价附近
- 当k=1时，PMM回归CPMM公式

### DODO V3 双流动性架构
- **Vault（LP存款池）**：LP存入资产作为借贷池，资产供策略提供者（SP）借用，LP赚取动态利息
- **Pool（SP做市池）**：SP从Vault借用资产执行做市策略，需满足抵押率要求
- **杠杆做市**：SP可借入超出自有资本的资产进行杠杆做市
- **动态利率**：利率随借款使用率动态调整，供需自动平衡

## 竞争优势
- 单边流动性提供，降低LP管理复杂度
- 预言机驱动定价，减少与外部市场的价差和套利空间
- V3的双流动性架构（Vault+Pool）分离了资本提供和策略执行角色

## 相关实体
- [[uniswap]] — 传统CPMM代表，DODO PMM是对CPMM的重要改进
- [[kyber-network]] — 另一种动态AMM，Kyber DMM采用动态费用而非动态定价

## 来源
- [[来源_2024-12_AMM自动化做市商指南_ThreeSigma]] — 详细描述PMM算法公式和V3架构
