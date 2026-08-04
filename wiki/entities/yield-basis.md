---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [defi, btcfi, amm, yield, btc-ecosystem]
aliases: [YB, Yield Basis Protocol]
---

# Yield Basis

## 基本信息
- 类型: BTC收益层AMM协议
- 创始人: Michael Egorov（Curve Finance创始人）
- 推出时间: 2025年2月
- 融资: 以5000万美元代币估值募资500万美元
- 投资方: SevenX Ventures等（SevenX投资人Rui为分析文章作者）
- 底层资产: crvUSD（Curve原生稳定币）

## 核心业务/产品
Yield Basis是一个自动做市商（AMM），专注于最小化无常损失，为BTC LP、跨场套利和真实交易提供链上流动性场所。

**核心机制**："一个AMM嵌入另一个AMM"——BTC LP存款后，协议借用LP价值的一半并持续再杠杆，创建一个稳定币（crvUSD）到BTC的池，具有再平衡模型。借入利率和50%的池生产费用用于补贴池的再平衡。

**收益来源**：
- APR = 2倍池收益率（借入利率+再杠杆损失），固定成本为crvUSD借入利息
- 更高波动性增加再杠杆损失，但也增加池收入
- 参数选择至关重要：激进参数增收益率但也增加再杠杆损失风险
- 历史模拟（过去6年）平均20% APR（净利润），牛市更高

**LP收益选项**：
1. 赚取池费
2. 质押赚取YB代币

## 关键数据
- 募资: 500万美元（5000万美元FDV）
- 模拟APR: 过去6年平均20%
- BTC收益层定位: 与任何LST可组合，可与Pendle合作

## 竞争优势
- Curve创始人背书 + Curve生态系统（crvUSD）支持
- 解决BTC LP的核心痛点：无常损失
- 可组合性强：与LST、Pendle等协议配合
- 长期目标是为封装BTC创造最深的链上流动性，与CeFi交易竞争

## 风险 / 争议
- 项目刚推出，尚未经过市场验证，20% APR来自历史模拟而非实盘
- 机制复杂度高——"一个AMM嵌入另一个AMM"对普通用户理解门槛极高
- 依赖crvUSD和Curve生态的健康发展
- 精英量化团队的稀缺性：高频套利能力有限，顶级团队通常保留策略在内部
- 项目由投资者方撰写分析文章，存在利益冲突

## 相关实体
- [[curve]] — 创始人同一人，底层使用crvUSD
- [[pendle]] — YB可与其收益代币化合作
- [[sevenx-ventures]] — 投资方
- [[aave]] — 32.86亿美元WBTC借贷利率仅0.02%，YB有望提升借贷利率

## 来源
- [[来源_2025-03_YieldBasis_BTC收益层_BlockBeats]]
