---
type: source
source_type: article
url: https://www.techflowpost.com/article/detail_23787.html
date: 2025-03-02
ingested: 2026-07-02
---

# 手把手教学：快速掌握 Meteora 流动性价格区间的查看方法

## 阅读证据
- 总行数: 297
- Q1 (前25%): Meteora 的 DLMM 池中 Bin Step 指相邻 Bin 之间的价格间隔，以基点（1基点=0.01%）计量。示例：Sol/USDC=$20，Bin Step=25bps时，下一个Bin价格为20x1.0025=$20.05
- Q3 (中后25%): 以 Trump/USDC 单边池为例的完整价格区间计算：Bin_Step=50，lower_Bin_id=1062，upper_Bin_id=1107，decimals_A=6，decimals_B=6，计算出 min_price≈199.69、max_price≈249.94（Trump对USDC价格），与 Meteora 界面显示完全一致
- Q4 (最后25%): 作者希望的工具改进：Debot 能识别转入转出但不能识别加/撤池子；GMGN 能识别加/撤池子但识别不到转入转出且在 Trump 币中完全未识别 Dev 操作；OKX 有资金池变化功能但同样未识别 Trump Dev 操作。建议工具应含每笔加/撤池子的价格区间、包含手续费的盈利统计
- 图片: 0 analyzed / 0 decorative skipped / 9 external URLs unavailable（techflowpost CDN 图床不可用）

## 核心要点
- Meteora 是 Solana 上的 DeFi 流动性层，核心产品为 DLMM（Dynamic Liquidity Market Maker）池和动态池，支持双边池和单边池
- Dev（项目方/做市商）可利用 DLMM 单边池实现自动出货和吸筹：价格上涨时在高位价格区间加单一代币池自动卖出，价格下跌时在低位加对手方代币池自动买入
- 价格区间通过链上数据计算：需获取池子地址的 Bin_Step、仓位 lower_Bin_id 和 upper_Bin_id、以及交易对中两种代币的精度位数，代入公式 (1 + Bin_Step/10000)^Bin_id / 10^(decimals_B - decimals_A)
- 价格区间查看有两种方法：钱包观察模式（Phantom 监视 Dev 地址后连接 Meteora Portfolio 查看，直观但流动性撤掉后不可查）和链上数据计算（Solscan 提取参数后手动计算，仓位不存在后仍可查）
- 文中以 Trump/Sol 交易对 Dev 地址 5e2qRc1DNEXmyxP8qwPwJhRWjef7usLyi7v5xjqLr5G7 为完整案例，展示了从 Debot 找 Dev 地址到链上计算的全流程
- 现有工具（Debot/GMGN/OKX）在 Dev 行为追踪上各有短板，缺乏统一的"操作识别 + 价格区间计算 + 盈利统计"功能

## 关键数据
- Bin Step 以基点为最小单位（1基点=0.01%），如 25bps=0.25%、50bps=0.50%
- Trump 和 USDC 两种代币的精度均为 6 位小数
- 示例仓位 lower_Bin_id=1062、upper_Bin_id=1107（宽度46个Bin），Bin_Step=50，计算出价格区间为 Trump/USDC 199.69~249.94
- (1 + Bin_Step/10000)^1062 = 199.6905832，当 decimals_A=decimals_B 时分母为 10^0=1，简化了计算

## 与已有知识的关系
- 补充 [[meteora]] — 本文提供 Meteora DLMM 技术细节（Bin Step/单边池价格区间计算），补足 Jupiter 收购时间线文章中仅提及 Meteora TVL 和大致定位而未深入机制的缺口
- 补充 [[jupiter]] — Meteora 由前 Jupiter 团队（原 Mercurial 团队转型）开发，是 Jupiter 生态的核心组件之一，本文展示了其作为 Solana 收益优化层的具体操作逻辑
- 补充 [[automated-market-maker]] — DLMM 是一种离散 Bin 结构的 AMM，与 Trader Joe Liquidity Book 同为第三代 AMM 模型，但 Meteora 的 DLMM 支持单边池（仅提供一种代币），是集中流动性 AMM 的实用创新
- 补充 [[memecoins]] — $LIBRA（阿根廷总统米莱发行的 Meme）也使用了 Meteora 单边池出货方法，说明单边池是 Meme 币 Dev 的常见盈利工具
- 补充 [[debot]] — 本文指出 Debot 无法识别加/撤池子交易，为 Debot 实体补充了功能限制信息

## 值得记住的引用
> "Dev 可以利用单边池进行出货和吸筹，比如 Trump/Sol 交易对，在价格上涨时，Dev 可以在某个更高的价格区间只加 $Trump 的单边池，当价格上涨到此价格区间时就会自动将 $Trump 换为 $Sol 用来出货，同时还能获得手续费"

> "价格区间的最小值：min_price = (1 + Bin_Step/10000) ^ lower_Bin_id/10^(decimals_B-decimals_A)"
> "价格区间的最大值：max_price = (1 + Bin_Step/10000) ^ upper_Bin_id/10^(decimals_B-decimals_A)"

> "结合着监控工具，当发现 Dev 或者其他大户在添加单边池子的时候，我们就可以用上面的方法计算出他准备出货或者吸筹的价格范围，然后再配合 K 线和其他数据做决策。"

## 我的笔记
- 本文是一篇实用的"捕猎"教程：教读者如何通过链上数据计算出 Dev（项目方/做市商）在 Meteora DLMM 上的真实出货/吸筹价格区间。本质上是将做市商的策略暴露在阳光下，让普通交易者可以预判 Dev 的买卖行为。这种"跟单 Dev"的策略在 Meme 币交易中极具实战价值。
- 值得注意的是，作者指出的三个工具（Debot/GMGN/OKX）各自的功能盲区正好说明了当前 Solana 链上分析工具的碎片化现状——没有单一工具能完整追踪"转入→加池子→撤池子→转出"的 Dev 全流程。这既是痛点也是机会。Trump 币这个高流动性标的尚且无法被 GMGN 和 OKX 正确识别 Dev 操作，说明更高频的长尾 Meme 币更是分析盲区。
- 价格区间计算公式基于 (1+Bin_Step/10000)^Bin_id，这是一个指数型增长函数，说明 Bin 间距随 Bin_id 增大而非线性扩大。当 decimals_A=decimals_B 时公式简化为纯指数函数，但大多数非稳定对需考虑精度差（10^(decimals_B-decimals_A)），增加了手动计算的复杂度。
