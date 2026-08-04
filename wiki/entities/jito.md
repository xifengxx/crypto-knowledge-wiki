---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-29
tags: [jito, solana, mev, lsd, restaking]
---

# Jito

## 基本信息
- 类型：Solana MEV 基础设施 + 流动性质押协议
- 区块链：Solana
- 代币：$JTO (2023年12月空投)
- 定位：Solana 生态最大的 LSD + MEV 解决方案

## 核心业务/产品
- **JitoSOL**：Solana 最大流动性质押代币 (LST)，市场份额接近50%
- **Jito Block Engine**：Solana MEV 拍卖系统（类似以太坊 Flashbots）
- **Jito Restaking**（2024年7月推出）：Solana 生态的 EigenLayer，支持混合质押、再质押和LRT模块 + AVS，与 Solayer 竞争

## 关键数据
- JTO 空投：2023年12月（Solana 生态最大空投之一）
- jitoSOL 市场份额：约35%（Blockworks 2025年2月报告）→ 34%（Messari Q4 2024报告），Solana最大LST
- jitoSOL 总 SOL 量：约 1,700 万 SOL（Blockworks 2025年2月数据）
- Q4 2024 应用收入：$21.4M（Solana生态第10名，QoQ +398%，最高非Meme应用）
- 定位：Solana DeFi 核心基础设施
- Jito-Solana客户端：约80% Solana验证者使用（Leo所述），占网络质押的 92%（2025年1月，Blockworks数据），是 Solana 客户端集中度的核心来源
- Jito收入分配结构：90%+MEV收益分配给staker、约5%归Jito基金会、剩余分配给JitoSOL持有者（LST持有者）；Jito 实际 MEV 回扣率为 94%（TipRouter 3% + Jito Labs 3% 手续费后净得）
- 最新提案：将JitoSOL收入的0.15%分配给JTO代币持有者（受限于证券法监管考量）
- JitoSOL委托策略：自动委托给网络排名前200的验证者（投票率>99%），MEV收益随网络活跃度增长（占网络收入从~1%升至~3%）

## 2024年估值变化
- PE估值路径：Q1 534（刚完成空投+Solana火热）→ Q2 153（市场冷静）→ 当前稳定在120上下
- Solana流动性质押比例：从2023年上半年的2%增长至2024年中的6%
- JitoSOL在Solana LST市场份额接近50%（Lido退出Solana后后来居上）
- 2024年7月28日费用收入$327万，超越Lido（$294万）成为当日所有区块链中费用收入最高的协议
- Jito Labs价值分配占比仅约2%

## 竞争优势 / 护城河
- Solana 最大 LST (JitoSOL) 的先发优势
- MEV 基础设施深度绑定 Solana 验证者——Block Engine 对交易打包排序，Bundle 小费机制优先处理带小费交易，searcher 订阅服务提供套利机会发现
- Restaking 布局 (内源性 AVS → Solana 生态 EigenLayer)
- Jito Restaking架构：Vault Program（管理Liquid Restaking Token VRT）+ Restaking Program（管理NCN和Operator）
- 从支付给Solana验证者的MEV小费中抽取5%，部分分配给JitoSOL质押者（额外MEV奖励）
- JitoSOL委托代理机制：自动委托给排名前200的验证者（投票率>99%才能入选），形成验证者质量激励机制
- MEV保护功能：Jupiter集成Jito的MEV Protection——用户加小费（Tips）即可通过Block Engine优先处理，避免三明治攻击

## 风险 / 争议
- Solayer 直接竞争 (Solana Restaking)
- MEV 中心化争议 (类似以太坊 Flashbots 审查抗性讨论)
- 2024年3月暂停伪内存池功能
- JTO治理代币价值捕获能力有限（PE超100，仅$300万年化收益能否合理化估值？）

## 相关实体
- [[solana]] — 底层 L1
- [[solayer]] — Solana Restaking 竞争对手
- [[eigenlayer]] — 对标 (ETH Restaking)

## 来源
- [[来源_2024-12_Solana节点运营_MEV盈利_Jito_Raydium_PANews]] — Leo（Jito中文社区贡献者）自述：Block Engine机制/收入分配结构（90%+给staker/5%基金会）/JitoSOL委托前200验证者/MEV收入从1%升至3%/JTO分红提案与证券法风险
- [[来源_2024-10_Solana去中心化程度_中本聪系数_验证者分布_Helius]] — Jito 客户端 88% 质押份额
- [[来源_2024-10_Finding_the_Next_Solana_L1竞争分析]]
- [[来源_2024-12_Solana_Q4状况_Messari]]
- [[来源_2024-08_DeFi_PE市盈率_估值分析_BlockBeats]]
- [[来源_2024-09_Solana生态系统全景_融资历史_技术机制_深潮TechFlow]] — Jito客户端协议外区块空间拍卖机制详述：通过小费优先于标准交易费用，显著提升验证者奖励，推动Jito客户端在Solana网络中广泛应用
