---
type: source
source_type: research-report
url: https://www.hellobtc.com/kp/du/07/4311.html
author: Binance Research
date: 2023-07-06
ingested: 2026-06-29
updated: 2026-07-02
---

## 阅读证据
- 总行数: 321
- Q1 (前25%): ETH质押率16.70%、BNB质押率14.55%，均远低于前十大PoS链平均质押率49.67%，表明质押增长空间巨大（原文第47行）
- Q3 (中后25%): Lending以25.9亿美元TVL领先LSDfi各类别，Aave占借贷市场96.73%份额；Lybra Finance TVL自5月中旬飙升1,059.20%（原文第207-219行）
- Q4 (最后25%): EigenLayer于2023年6月14日启动主网，支持rETH/stETH/cbETH三个LST池（各限制3,200 LST）均瞬间满额；总融资6,450万美元（A轮5,000万），估值2.5亿美元（原文第289-293行）
- 图片: 14张（本地文件引用，未实际下载，未分析）

# Binance 研究院：LSDFi 数据洞察

## 核心要点

1. **流动性质押超越 DEX 成为 DeFi TVL 第一**：$184.8 亿 TVL（+131.67% YTD 2023）。Shapella 升级消除提款不确定性后，质押 ETH 指数级增长。但 ETH 质押率 16.7% 远低于前十大 PoS 链均值 49.67%——仍有巨大空间

2. **Lido 的 32% 市场份额是系统性风险**：市场共识——超过 1/3 的关键阈值可能导致以太坊被操纵或攻击。Lido 社区投票否决了自我限制存款的提案。鼓励替代竞争者和去中心化方案是必要对冲

3. **三种 LST 模型**：(a) 可重基代币（stETH）——余额随质押奖励变化，但部分 DeFi 协议不兼容；(b) 有奖励代币（rETH/ankrETH）——价值增长而非余额变化，更 DeFi 友好；(c) 基础+奖励分离（Frax frxETH/sfrxETH、StakeWise sETH2/rETH2）——更灵活但流动性割裂

4. **LSDfi 三层结构**：Lending $25.9 亿 TVL（Aave 占 96.73%）→ CDP 稳定币 $23.5 亿（Maker 龙头，Lybra 新星 TVL +1,059% 但可持续性存疑）→ DEXes $10.3 亿（Curve 交易量 36.66%，Maverick 资本效率 106.78%）

5. **Pendle + EigenLayer 是 LSDfi 的两个关键基础设施**：Pendle = 收益代币化（PT/YT 分离），让用户以折扣价锁定固定收益或杠杆押注收益。EigenLayer = 再质押，让 LST 持有者用同一笔资产为其他协议提供安全——2023 年 6 月刚上线主网，已 $6450 万融资/$2.5 亿估值

## 关键数据

- 流动性质押 TVL：$184.8 亿（2023.6），超越 DEX 成为 #1 DeFi 赛道
- Lido 市场份额 32%，30d 平均 APR 4.91%（Frax 最高）
- 质押的 ETH：流通量 16.70%，前十大 PoS 链平均 49.67%
- LSDfi Lending TVL：$25.9 亿（Aave 96.73%）
- LSDfi CDP 稳定币 TVL：$23.5 亿（Maker 4.844 亿 DAI）
- LSDfi DEXes TVL：$10.3 亿
- Pendle TVL：$107.95M，stETH 占总存款 45.76%
- EigenLayer：$6450 万融资，估值 $2.5 亿（2023.3 A 轮 $5000 万），三个 LST 池均瞬间满额
- Lybra Finance：eUSD 存币即可获 8% APY，TVL 自 5 月中 +1,059%
- 单独质押者仅占以太坊活跃验证者 ~6.5%，新验证者需排队 46 天
- PancakeSwap rETH-WETH 最高 30d 平均 APY 26.13%
- Convex frxETH-CVX 最高 30d 平均 APY 27.75%

## 与已有知识的关系

- **补充 [[liquid-staking]] 概念页**：新增 LSDfi 三层结构、三种 LST 模型对比、EigenLayer 数据
- **更新 [[lido]] 实体页**：32% 市场份额 + 中心化风险的具体量化
- **与 [[eigenlayer]] 实体页关联**：2023 年 6 月主网上线时的初始数据——三个 LST 池瞬间满额说明市场对再质押的强需求
- **与 [[defi]] 概念页关联**：LSDfi 是 DeFi 最大的细分赛道（超越 DEX），lending 又是 LSDfi 中最大类别

## 值得记住的引用

> "Lido 的进一步增长可能会带来系统性风险，并允许区块空间的卡特尔化。"

> "对 ETH 质押来说，太高的主导地位并不完全健康。超过 1/3、1/2 和 2/3 的关键共识阈值可能导致以太坊很容易被操纵或攻击。"

> "EigenLayer 引入了 restaking 的概念，允许用户通过加密经济安全性的扩展来重新获取他们的 LST 或 ETH 来保护其他应用程序。"

## 我的笔记

这是 2023 年 7 月的数据快照，非常宝贵——可以看到 LSDfi 爆发前的基线。18 个月后（2025 年初），ETH 质押率从 16.7% 涨到了 ~27%，LSDfi TVL 从 $60 亿扩张到 $300 亿+，EigenLayer 从刚上线变成了 Restaking 赛道的定义者。

最值得关注的是 Lido 中心化问题——2023 年 7 月就已经是"房间里的大象"，但至今没有根本性解决方案（Lido 自己投反对票否决了存款限制）。如果 Lido 突破 33% 份额，以太坊社区将面临真正的治理危机。

Pendle 和 EigenLayer 被 Binance 在 2023 年就重点提及的事实，验证了这两者的长期价值——它们不是一时的叙事炒作，而是 LSDfi 赛道真正的基础设施层。
