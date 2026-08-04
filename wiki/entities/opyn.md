---
type: entity
entity_type: protocol
created: 2026-07-01
updated: 2026-07-01
tags: [defi, derivatives, perp, options, variance]
---

# Opyn

## 基本信息
- 类型：去中心化永续合约交易所，专注于方差永续合约（variance perpetuals）
- 赛道：DeFi 衍生品 / 波动率交易
- 核心创新：将方差（波动率）作为可交易标的，而非标的资产价格本身

## 核心业务/产品

Opyn 围绕方差永续合约构建了四条产品线，按波动率敞口递增排列：

| 产品 | 正式名称 | 特点 |
|------|---------|------|
| **0-perps** | Stable Perps | 零波动率敞口，为交易策略提供稳固基础 |
| **0.5-perps** | Uniswap LP Perps | 反映 LP 收益表现，无需直接提供流动性 |
| **1-perps** | Normal Perps | 标准永续合约，普通方向性敞口 |
| **2-perps** | Squared Perps (Squeeth) | 二次敞口，放大收益潜力 |

### 组合策略

通过组合以上四种产品，交易者可构建复杂策略：

- **螃蟹策略（Crab Strategy）**：做空 2-perps + 做多 1-perps → 在稳定市场中赚取资金费率，同时保持平衡的方向性敞口
- **禅牛策略（Zen Bull Strategy）**：做空 2-perps + 做多 1-perps + 做空 0-perps → 在稳定市场中保持多头敞口的同时赚取资金费率收益

## 竞争优势 / 护城河
- 波动率作为独立资产类别的先发优势——允许交易者对"价格波动剧烈程度"而非"价格方向"下注
- 产品矩阵构成了完整的波动率曲面，理论上可合成任意波动率策略
- 对冲功能：持有方差永续合约可在资产剧烈下跌时用合约收益抵消部分现货损失

## 风险 / 争议
- 产品复杂度高，面向专业交易者而非散户，市场规模天然受限
- 实际采用率和流动性数据不明——文章未提供任何量化指标

## 来源
- [[来源_2024-08_永续合约DEX_应用模式_生态概览]]
- [[来源_2022-08_链上基金_DeFi资管_iZUMi]] — Ribbon Finance 基于 Opyn 期权产品构建 Theta Vault（Covered Call + Put Selling 自动化策略），Opyn 的 Squeeth（2-perps）被用于构建 Crab Strategy 等链上基金产品，是 Opyn 作为 DeFi 乐高组件在结构化产品中的典型应用案例
- [[来源_2022-07_加密衍生品_CeFi_DeFi_Web3Caff]] — 2022年Opyn早期产品形态：T型报价期权（固定交割时间/行权价），V2版本包括提高保证金利用率、自动行权、无乘数看涨期权、闪电期权铸造、运算符功能等
