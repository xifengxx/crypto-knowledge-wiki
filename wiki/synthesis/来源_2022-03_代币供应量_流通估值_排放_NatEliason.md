---
type: source
source_type: article
url: https://crypto.nateliason.com/p/tokenomics-102-supply?s=r
date: 2022-03-05
ingested: 2026-07-02
---

# 代币经济学 102：深入挖掘代币供应量 — 从流通量/FDV比率到排放曲线的实战分析方法

## 阅读证据
- 总行数: 178
- Q1 (前25%): Bitcoin当前流通供应量18,973,506枚，最大供应量21,000,000枚，最后9.6%要到约2140年才能完全释放——比特币的供应是固定的、可预测的。
- Q3 (中后25%): JonesDAO在2022年4月30日至10月30日期间，私募投资者代币线性解锁导致月通胀率从1.36%翻倍至约3%，且新增代币全部流向以大幅折扣入场的投资者。
- Q4 (最后25%): JPEG'd初始释放30%，团队/顾问35%分18个月线性解锁（6个月cliff），供应量15个月翻倍；但如果初始仅释放10%，供应量将在5个月内翻倍——起始流通比例对感知通胀影响巨大。
- 图片: 9张分析图，全部为外部Substack CDN链接（URLs unavailable for local download）

## 核心要点
- **市值的幻觉**：Market Cap（流通量x价格）和FDV（最大供应量x价格）的比率是第一个诊断工具。如果MC仅为FDV的10%且一年内全部解锁，项目需要增长10倍（1000%）才能维持当前价格；如果MC为FDV的25%且分4年释放，仅需约40%年化增长。
- **流通供应量可能被低估**：Coingecko等数据源会将质押/锁仓的代币从流通供应量中扣除。Crypto Raiders实际释放了16%（1600万枚），但Coingecko只显示6.7%（672万枚），因为950万枚被质押锁定。Curve的类似情况更严重：vote-locked CRV应算作流通，市场实际暴露的供应量远高于表面数字。
- **排放曲线决定速度和方向**：代币进入市场的速度比总量更重要。JonesDAO的私募解锁期使月通胀率翻倍，且解锁对象全是折扣价入场的投资者——有更强的抛售动机。Convex的排放量取决于平台CRV收入，通胀率持续下降。
- **起始流动性比例放大通胀感知**：JPEG'd起始30%流通时，35%额外供应分18个月释放（月增2%），供应量15个月翻倍。如果起始只有10%流通，同样35%供应量将在5个月内翻倍——起始越低，新解锁对价格的冲击越大。
- **初始分配可能隐藏内幕优势**：LooksRare的farming奖励中一半流向了代币仍然锁仓的早期投资者。团队/投资者代币立即解锁的场景下，他们可以用解锁代币进行流动性挖矿，进一步扩大份额。
- **批量解锁事件可预测**：Convex的ve式锁仓机制下，首批大量锁仓（9月）的CVX在17周后（1月）同时解锁，与价格下跌高度相关。

## 关键数据
- **Market Cap vs FDV示例**：价格$10、流通1000万、最大供应1亿 → MC=$1亿、FDV=$10亿，相差10倍。
- **Crypto Raiders流通偏差**：实际释放1600万/1亿（16%），但Coingecko报告672万（6.7%），差异源于950万枚质押代币被排除。
- **JonesDAO月通胀率**：私募解锁期前1.36%/月，解锁期约3%/月（翻倍），持续6个月。
- **JPEG'd释放节奏**：起始30%流通，35%额外供应分18个月释放（月均约2%），供应量15个月翻倍。对比场景：起始10%流通→5个月翻倍。
- **Convex锁仓与解锁**：首批CVX锁仓（9月）→17周后（1月）批量解锁，与价格下跌走势重合。
- **Curve MC/FDV比率**：FDV约9倍MC，表面仅11%流通，但vote-locked CRV使实际"可暴露"供应量更高——2.12b vs 974m。

## 与已有知识的关系
- 补充 [[tokenomics]] — 从供应端分析角度补充了MC/FDV比率诊断、排放曲线解读、起始流动性影响、批量解锁预测等具体分析方法论。与现有tokenomics页面主要关注代币分配模式（VC/空投/LLBA）形成方法论互补——前者回答"代币怎么分的"，本文回答"代币供应量怎么看"。
- 补充 [[curve]] — 提供了Curve作为"流通量被低估"的典型案例：表面FDV 9倍MC、11%流通，但vote-locked CRV使实际市场暴露供应量远高。本文撰写于2022年3月，反映了Curve War时期的代币供给动态。
- 补充 [[jpeg-d]] — 提供了JPEG'd在2022年3月代币启动时的具体供应参数：30%公募初始流通、35%团队/顾问分18个月解锁（6个月cliff），作为"合理起始流通比例"的正面案例。
- 补充 [[crypto-raiders]] — 提供了该项目的代币供应数据（总供应1亿、初始释放1600万、950万质押锁定）以及Coingecko流通量偏差的实际案例。
- 补充 [[looksrare]] — 补充了LooksRare初始分配争议的另一视角：farming奖励一半流向锁仓的早期投资者。
- 引用 [[来源_2021-03_加密游戏_困局_突破_NatEliason]] — 同一作者（Nat Eliason）的早期文章，作者也是Crypto Raiders的经济顾问。
- 引用 [[来源_2024-05_Binance_Research_低流通高FDV代币趋势分析]] — Binance Research（2024）验证了本文提出的MC/FDV问题在两年后成为行业级危机：2024-2030年预计$1,550亿代币解锁。

## 值得记住的引用
> "If the market cap is 10% of the FDV and the tokens are all released in the next year, the project needs to grow 10x, or 1000%, in a year just to maintain its current price."

> "For that 6 month period, the inflation rate will be more than doubled. And the new tokens entering the market will exclusively be going to people who got in at a heavily discounted price, who have much more of a financial incentive to sell even if the price doesn't move between now and then."

> "Compare that to if only 10% of the tokens were initially released. Then the token supply would double in 5 months instead of 15! The early buyers would be much more impacted by the unlocks, and the token price would have a harder time keeping up with the new inflation."

> "What you want to see are at least three to six month lockups for teams and investors, with linear vesting after that."

## 我的笔记
这篇2022年3月的文章在"低流通高FDV"成为行业公认问题之前就系统性地阐述了供应端分析框架，具有前瞻性。作者Nat Eliason同时是链游Crypto Raiders的经济顾问，提供了项目方的第一手视角——Coingecko流通量偏差的案例来自他自己的项目，这种"元视角"让文章的可信度高于纯外部分析。

不过文章的局限性也很明显：(1) 所有项目案例（JonesDAO、JPEG'd、LooksRare、Convex）都是DeFi/NFT领域的2021-2022年项目，没有覆盖更广泛的应用场景；(2) 对需求侧的分析几乎没有（明确属于系列文章的上半部分），因而无法独立评估代币价值；(3) "MV=PQ"等更结构化的估值框架没有涉及；(4) 2022-2024年"低流通高FDV"模式的恶化程度远超本文的温和警告——Binance Research 2024年数据显示$1,550亿代币将在2024-2030年解锁，MC/FDV比率创历史新低，本文准确预见了问题方向但低估了规模。
