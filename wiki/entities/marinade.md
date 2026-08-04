---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [solana, lst, liquid-staking, staking]
---

# Marinade Finance

## 基本信息
- 类型：Solana 流动性质押协议
- 区块链：Solana
- 代币：MNDE
- 成立时间：2021 年
- 定位：Solana 上最早（第一个）的流动性质押协议，以去中心化质押为核心理念

## 核心业务/产品
- **mSOL**：Solana 上的流动性质押代币（LST），用户存入 SOL 获得 mSOL，代表在 Marinade 非托管池中的质押头寸
- **Marinade Native**：去中心化原生质押产品，允许 SOL 持有者访问自动验证者分配策略（无需托管给单一验证者，无智能合约风险）
- **Stake Auction Marketplace (SAM)**：2024 年 6 月推出的市场驱动验证者委托竞争机制——验证者竞标承诺 APY 来吸引 Marinade 的 SOL 质押委托。拍卖期内，出价最高的验证者获得更多 Marinade 的委托，直到满额或被更高出价者超越

## Stake Auction Marketplace (SAM) 详情
SAM 的核心机制：
- **验证者竞标**：验证者提交承诺 APY 报价，本质上是承诺通过佣金回扣或收入补贴向 Marinade 委托者提供高于标准的收益
- **竞价结果**：早期结果显示取胜 APY 报价高达 13.73%，前十名报价区间达 18.27%，远超正常约 7-8% 的质押收益。这意味着验证者可能以亏损状态运营来获取 Marinade 的委托量
- **动机分析**：验证者愿意短期亏损的原因包括：积累大额委托后吸引有机委托、来自 MEV 收入的交叉补贴
- **风险管控**：Marinade 设立委托监督委员会，可黑名单恶意验证者并没收其保证金
- **意义**：SAM 是去中心化委托的创新机制，让市场力量而非中心化决策决定委托分配

## 关键数据（2025 Q1）
- 流动性质押规模：约 500 万 SOL 通过 Marinade 质押（mSOL + Native 合计），为 Solana 第三大 LST
- LST 市场份额：约 10-13%（落后于 Jito 和 bnSOL）
- SAM 获胜 APY 报价范围：13.73%-18.27%

## 竞争优势 / 护城河
- **首创 SAM 机制**：市场驱动的委托分配可能比传统中心化委托更有效率，也是 Marinade 区别于 Jito 和 Sanctum 的核心差异化
- **去中心化主张**：Marinade 长期以来将自己定位为 Solana 上"最去中心化的 LST 协议"，通过 SAM 进一步将委托决定权从内部团队转移至市场
- **无智能合约风险（Marinade Native）**：原生质押产品消除了智能合约风险，增加了对保守用户的吸引力

## 风险 / 争议
- **SAM 可持续性质疑**：验证者如果长期亏损运营，可能在 MEV 收入下降时退出，导致 Marinade 需要频繁调整委托分配
- **市场地位下滑**：从曾经的 Solana 最大 LST（2022-2023）下滑至第三名（2025 Q1），被 Jito 和 bnSOL 超越
- **利益冲突**：本报告由 Marinade Labs 资助，Marinade 的相关描述应审慎对待

## 相关事件时间线
- 2021: Marinade Finance 上线，成为 Solana 首个 LST 协议
- 2024年6月: 推出 Stake Auction Marketplace (SAM)
- 2025 Q1: SAM 早期数据显示验证者出价激进，APY 报价高达 18.27%

## 相关实体
- [[jito]] — Solana 最大的 LST（jitoSOL），Marinade 的直接竞争对手
- [[sanctum]] — Solana 第二大 LST 平台（Infinity 多池模式），与 Marinade 竞争
- [[solana]] — 底层 L1 区块链

## 来源
- [[来源_2025-03_Solana验证器_Staking_Blockworks]] — SAM 机制详述、竞标 APY 数据、市场格局
- [[来源_2024-12_Solana_Q4状况_Messari]] — Marinade Q4 2024 市场份额数据
