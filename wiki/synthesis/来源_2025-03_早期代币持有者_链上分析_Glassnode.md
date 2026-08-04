---
type: source
source_type: article
url: https://insights.glassnode.com/tracking-early-token-holder-behavior/
date: 2025-03
ingested: 2026-07-02
---

# 追踪早期代币持有者行为：四项链上指标框架

## 阅读证据
- 总行数: 149
- Q1 (前25%): SHIB 早期持有者在低价位积累了超过 20% 的总供应量，随后在价格飙升时大量抛售，触发价格急剧下跌
- Q3 (中后25%): SHIB 的 Herfindahl 指数在市场集中度高的早期阶段后，随着大额持有者分发代币而急剧下降，恰与价格峰值重合；NUPL 在代币生命周期早期的高值常对应价格顶点，预示获利回吐
- Q4 (最后25%): CBD 热力图显示 SHIB 早期持有者在 2021 年 1 月于低价位积累（红/黄色带），在 2021 年 10-11 月市场峰值附近大规模卖出，积累带消失
- 图片: 0 analyzed / 1 decorative skipped / 7 external URLs unavailable

## 核心要点
- 早期代币持有者通常控制大量供应，其买卖决策对价格有强烈影响——在价格发现阶段的第一个主要顶部，早期持有者的获利回吐是核心驱动因素
- Glassnode 提供了四项互补指标来追踪早期持有者行为：Early Holder Balance（早期持有者余额）、Herfindahl Index（赫芬达尔指数，衡量市场集中度）、NUPL（净未实现利润/亏损）、CBD（成本基础分布热力图）
- Early Holder Balance 直接追踪早期持有者的代币余额变化——余额下降对应价格高点的抛售压力；不同代币表现出不同模式（SHIB/PEPE 的急剧抛售、TSUKA 的渐进减持）
- Herfindahl Index 下降 + Early Holder Balance 下降的组合信号，强烈指示代币正在从集中持有向更广泛分布转移，预示可能的市场顶部
- NUPL 通过衡量所有持有者的未实现盈亏来检测市场情绪——早期 NUPL 峰值常预示获利回吐和价格顶点
- CBD 热力图可视化代币的获取成本基础分布，通过追踪低价积累带的消失来识别早期持有者的卖出行为，并能提前预测他们可能卖出的价格区域

## 关键数据
- SHIB 早期持有者曾积累超过 20% 的总供应量，随后在价格飙升时大量抛售
- SHIB 的早期积累发生在 2021 年 1 月（低价区域），大规模卖出发生在 2021 年 10-11 月市场峰值附近
- APW 早期持有者完成了两轮"积累-卖出"操作，分别在两个主要价格峰值附近抛售
- PEPE 早期持有者在首次价格上涨后立即卖出大部分代币（与 SHIB 类似），之后市场进入更有机的价格发现阶段

## 与已有知识的关系
- 补充 [[memecoins]] — 为 memecoin（SHIB、PEPE）的链上行为分析提供了系统化的四项指标框架，补充了现有 memecoin 页面中缺乏的早期持有者行为定量分析方法
- 补充 [[tokenomics]] — 早期持有者分布行为是代币经济模型的核心关注点，本文提供了具体的链上追踪方法论，从监控供应集中度变化的角度补充了代币分发后市场行为分析

## 值得记住的引用
> "Since early holders often control a large share of the supply, their buying and selling decisions can strongly influence price movements."

> "If the heatmap shows a substantial portion of low-cost holdings being sold near a price peak, it may indicate the market is reaching its top."

> "When multiple metrics align, the signal becomes much stronger, reducing uncertainty and improving decision-making."

## 我的笔记
- 这篇文章的方法论有明确价值，但局限也很明显：四项指标本质上是**描述性**而非**预测性**——它们只能在事后确认早期持有者已经在卖出，无法在卖出开始前预警。所谓"anticipating sell-offs before they happen"（CBD 热力图部分）实际上只是在价格已经大幅高于成本基础时提示风险，而非预测具体的触发时点。
- 所有案例（SHIB、APW、TSUKA、PEPE）均为 memecoin，且没有提供非 memecoin 或更成熟代币的对比分析。memecoin 的持仓结构（极高集中度）可能使这些指标在非 memecoin 上表现完全不同。缺乏对 ETH、SOL 等主流资产的应用验证，削弱了框架的通用性宣称。
