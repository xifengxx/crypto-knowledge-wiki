---
type: concept
created: 2026-07-02
updated: 2026-07-02
tags: [defi, lending, credit]
aliases: [DeFi借贷, 链上借贷]
---

# DeFi 借贷 (DeFi Lending)

## 一句话定义
在链上通过超额抵押智能合约实现的去中心化借贷市场，是 DeFi 最大的子赛道。

## 协议对比
| 协议 | 总锁仓 | 核心创新 | 风险 |
|------|-------|---------|------|
| [[aave]] | $180 亿 | 闪电贷/可变利率/GHO 稳定币 | 预言机攻击 |
| [[makerdao]] | $80 亿 | DAI 稳定币/Sky 品牌升级 | 抵押品风险 |
| [[compound]] | $30 亿 | cToken/Comet 升级 | 治理攻击风险 |
| [[morpho]] | $50 亿 | P2P 优化借贷池利率 | 智能合约风险 |
| [[euler]] | $10 亿 | 无许可借贷市场 | 2023 年遭攻击 |
| [[spark]] | $30 亿 | Maker 借贷前端/sDAI | 依赖 Maker |

## 关键的机制创新
- **闪电贷 (Flash Loan)**：Aave 首创，在同一交易中借-用-还，零抵押
- **隔离模式 (Isolation Mode)**：Aave v3 隔离高风险资产
- **P2P 匹配 (Morpho)**：MetaMorpho 在借贷池之间 P2P 匹配提升利率效率
- **低抵押贷款探索**：基于信用评分/声誉的低抵押借贷（TrueFi/Goldfinch）

## 收入来源
DeFi 借贷协议的收入主要通过：贷款利率价差、清算罚金、协议代币排放、闪电贷费用。其中清算罚金是波动时期的主要收入来源（Aave 2022 年 $8600 万清算收入）。

## 相关概念
- [[defi]] — DeFi 借贷是 DeFi 最大的子类别
- [[stablecoins]] — 借贷协议是稳定币最大的需求方
- [[tokenomics]] — Aave/Compound 的代币经济模型

## 来源
- [[来源_2024-09_AAVE链上数据深度报告_日月小楚]]
- [[来源_2022-07_Aave_V3_多链扩张_GHO_Web3Caff]]
