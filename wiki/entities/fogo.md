---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [layer1, svm, high-performance, solana-ecosystem]
---

# Fogo

## 基本信息
- **类型**: Layer 1 区块链
- **赛道**: 高性能L1公链 / SVM生态
- **核心卖点**: 采用Jump Crypto开发的Firedancer作为唯一执行客户端，理论速度最高100万TPS
- **团队**: Doug Colkitt联合创始人，贡献者包括Douro Labs成员（Pyth预言机网络背后的开发团队）
- **融资历史**:
  - Echo平台代币发行：800万美元（估值1亿美元）
  - 种子轮：约550万美元（Distributed Global领投，CMS Holdings跟投）
- **主网进度**: 开发者网络2024年末上线，测试网即将推出，主网预计2025年年中启动

## 核心业务/产品
- 运行Solana虚拟机（SVM），Solana应用无需修改即可迁移到Fogo链上
- 采用Firedancer（Jump Crypto开发的高度优化版Solana验证器客户端）作为唯一执行客户端
- 多本地共识机制（"太阳公转"）：验证者划分为可半独立运作的地理"区域"，网络控制权定期轮转，防止单一验证者主导
- GAS费抽象化：支持使用任意代币支付网络手续费
- 启动时初始配备20-50个验证者

## 关键数据
- 理论速度：理想条件下最高100万TPS（出块时间20毫秒）
- 实际速度：已上线开发者网络约5.4万TPS
- 对比：Solana理论上限6.5万TPS，实际处理速度4300 TPS；MegaETH测试网10ms出块时间实现2万TPS
- 传统金融系统每秒约10万次操作，延迟亚秒级

## 竞争优势 / 护城河
- Firedancer作为唯一执行客户端避免了Solana"网络速度受限于最慢节点"的问题
- SVM兼容允许无缝迁移Solana生态已有应用和流动性（"锃亮的新代币如Jupiter、Kamino、Pumpfun将在Fogo链上出现"）
- Pyth/Douro Labs和Jump Crypto的技术背景为项目提供可信度

## 风险 / 争议
- Solana生态参与者对此不满——"挖走"Solana应用和流动性可能引发社区反弹
- 主网时间线多次推迟（原预计2025年年中），实际落地能力待验证
- 初始验证者仅20-50人，去中心化程度有限

## 相关实体
- [[solana]] — 兼容的L1生态，同为SVM链
- [[jump-crypto]] — Firedancer开发者
- [[pyth]] — Fogo贡献者包括Pyth核心团队（Douro Labs）
- [[megaeth]] — 同为高性能L1竞品（20K TPS vs Fogo 54K TPS）

## 来源
- [[来源_2025-03_新公链_稳定币_顶级项目_PANews]]
