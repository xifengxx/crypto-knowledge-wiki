---
type: source
source_type: article
url: https://www.paradigm.xyz/2022/08/vrgda
date: 2022-08-24
ingested: 2026-07-02
---

# VRGDA（可变利率 GDA）：Paradigm 提出的自定义 NFT 发行时间表机制

## 阅读证据
- 总行数: 179
- Q1 (前25%): 销售提前2天 → 价格提高 2^2 = 4倍（从1 token变为4 token）
- Q3 (中后25%): 物流发放计划（Logistic issuance）在不强制实施无限通货膨胀机制的情况下引导初始增长，比线性/平方根计划更复杂
- Q4 (最后25%): 逻辑函数中选择时间参数后，约46%的NFT在该时间点发行；例如100个时间单位后发行46%的NFT
- 图片: 0 analyzed / 5 decorative skipped / 0 external URLs unavailable（5张外部URL图片均为发行时间表示意图，全部在 paradigm.xyz 静态域名上，未下载到本地）

## 核心要点
- VRGDA（Variable Rate Gradual Dutch Auction）是 Paradigm 对 GDA（Gradual Dutch Auction）的泛化，支持任意自定义 NFT/代币发行时间表，而非标准 GDA 的统一线性发行
- 核心机制：销售领先于计划时提高价格，落后于计划时降低价格，使用指数曲线确定调整幅度
- 三种发行时间表详细推导：线性（与标准 GDA 同构）、平方根（先快后慢永不停）、逻辑/Logistic（S形曲线引导初始增长后趋于上限，避免无限通胀）
- 专为 Art Gobblers 和 0xMonaco 设计，已在实践中验证：Art Gobblers 用于社区增长和 UGC 动态，0xMonaco 用于创造竞争性的游戏循环
- 提供 MIT 许可的生产级 Solidity 开源实现，由 transmissions11 维护在 GitHub 上

## 关键数据
- 销售提前2天 → 价格从 1 token 提升至 4 token（2^2 = 4倍）
- 销售落后3天 → 价格调整至原来的 1/8（2^(-3)）
- 线性发行与 GDA 同构，是 VRGDA 的特例
- 逻辑函数发行：约 46% 的 NFT 在选定的时间参数点发行
- 核心参数：目标价格（target price）、衰减率（per-time-unit price decay）、发行时间表函数

## 与已有知识的关系
- 补充 [[paradigm]] — 本文是 Paradigm 研究驱动的又一具体案例，补充了 Paradigm 在 NFT 发行机制设计方面的原创性技术贡献（VRGDA 和 GDA），与现有 Paradigm 页面的"研究驱动"定位一致
- 补充 [[nft]] — VRGDA 是 NFT 发行/铸造机制的创新，扩展了 NFT 经济模型的设计空间，提供了不同于传统荷兰拍和固定价格发行的新范式

## 值得记住的引用
> VRGDA 提供了一种使用几乎任何您想要的时间表发行 NFT 的方法，同时仍然允许用户随时无缝地购买它们。

> 在销售提前时提高价格并在销售落后时降低价格，让您随着时间的推移接近自定义时间表销售代币 - GDA 的概括机制。

> 物流发放计划提供了一种在不强制实施无限通货膨胀机制的情况下引导初始增长的方法。

## 我的笔记
- VRGDA 的核心贡献在于将 NFT/代币发行从"固定时间表/固定价格"的二元选择中解放出来，通过价格信号的动态调整实现"自适应发行"。这个思路与 AMM 的自动做市有哲学相似性——用价格发现替代人为调度。
- 不过，VRGDA 的实际采用情况有限：除了 Paradigm 自己的项目（Art Gobblers、0xMonaco）外，鲜有其他项目大规模使用。这可能是因为大多数 NFT 项目更倾向于传统荷兰式拍卖或固定价格 mint 这种简单模式，而非需要提前设计发行时间表的复杂机制。
- 文中对三种发行时间表的数学推导展示 Paradigm 作为研究驱动型机构的技术深度，但 logistic 函数的实际激励效果仍然取决于社区对时间表参数的接受度和信任度——这与 VC 代币经济学中高 FDV 低流通模式的争议有相似之处：社区是否愿意接受"预设发行曲线"是一个信任问题。
