---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [defi, dex, amm, ethereum]
---

# Ambient Finance

## 基本信息
- 曾用名：Crocswap
- 定位：集成多种AMM模型（集中流动性/CPMM/Knockout流动性）的单一流动性池DEX
- 核心创新：单一合约架构降低Gas成本，双流动性模型
- 链：Ethereum

## 核心业务/产品

### 双流动性模型
- **集中流动性（Concentrated）**：LP可指定价格区间集中资金，类似Uniswap V3
- **全场流动性（Ambient/Full-range）**：传统全场流动性，手续费自动复投

### Knockout Liquidity
一种特殊范围流动性：击中价格边界后永久移除（不反悔），类似限价单但作用于固定范围而非单一点。机制触发后不会回退。

### 动态费率结构
- 策略预言机每60分钟监控Uniswap v3各费率层级的实际表现
- 自动切换至最优费率层级
- 根据其测算，动态费率模型对LP的盈利能力远高于固定30bps或100bps池

### 其他特性
- Permissionless + Permissioned双模式池
- 网格改进机制增强tick粒度
- 交易费按比例分配流动性提供者

## 相关实体
- [[uniswap]] — Ambient监控Uniswap v3费率层级作为动态调费的参考基准
- [[kyber-network]] — 同样采用动态费用模型的AMM

## 来源
- [[来源_2024-12_AMM自动化做市商指南_ThreeSigma]] — 详细介绍双流动性模型、动态费率和Knockout Liquidity
