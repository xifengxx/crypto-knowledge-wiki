---
type: source
source_type: article
url: https://app.blockworksresearch.com/unlocked/solana-validator-and-staking-landscape
date: 2025-03-01
ingested: 2026-07-02
---

# Solana 验证器经济和 Staking 全景：从通胀驱动到费用驱动的结构性转型

## 阅读证据
- 总行数: 220
- Q1 (前25%): Solana 验证者网络当前有 1,332 个活跃验证者，3.809 亿 SOL 参与质押（占供应量 63.9%）。验证者收入构成：通胀奖励 76%、Jito 小费 14%、优先费 9%、基础费不足 1%（截至 2025 年 2 月）
- Q3 (中后25%): Marinade SAM 拍卖中获胜验证者的 APY 报价高达 13.73%-18.27%，远超正常质押收益（~7-8%），表明验证者愿意短期亏损运营以争夺 Marinade 的质押委托
- Q4 (最后25%): Lily Liu 反对 SIMD-228 的核心论点：SOL 通胀补贴了机构分销渠道——托管人和 ETP 发行商按名义收益率抽取佣金，高名义收益激励他们推广 SOL 产品。这是"漏桶"的另一面：不是泄漏而是营销支出
- 图片: 0 analyzed / 3 张外部 URL 图片不可用（头图 + 收入组成图 + SIMD-228 发行曲线图）

## 核心要点
- **Solana 验证者收入正从通胀奖励主导转向费用和小费驱动**：通胀奖励占比从 2025 年 1 月的 55% 回升至 76%，但优先费和 Jito 小费在链上活跃度高时曾占 54%。三项 SIMD 提案（SIMD-96/123/228）将决定这一转型的速度和分配方式
- **LST 渗透率仍远低于以太坊**：仅 9-10% 的质押 SOL 通过流动性质押协议（Jito/Marinade/Sanctum），远低于以太坊的 LST 占比。Jito 以约 35% 的 LST 市场份额领先（1700 万 SOL）
- **Marinade 的 Stake Auction Marketplace (SAM) 引入了创新性的市场驱动验证者委托竞争机制**：验证者竞标承诺 APY 来吸引 Marinade 的委托，竞标 APY 高达 18.27%，远超正常收益水平，暴露了中小验证者为获取质押量愿意承受短期亏损的竞争态势
- **SIMD-96/123/228 三项治理提案共同重塑 Solana 验证者经济**：SIMD-96（已激活，100% 优先费归验证者）、SIMD-123（将费用纳入佣金分配机制，让委托者共享费用收入）、SIMD-228（用质押率驱动的动态模型替代固定通胀衰减路径，目标从 4.6% 降至 0.96%）
- **Solana 客户端多样性取得实质进展但仍有集中风险**：Jito 客户端占 92% 的质押权重（截至 2025 年 1 月），Agave（Anza 维护）和 Frankendancer 已运行，Firedancer（Jump Crypto，C++ 实现）计划 2025 年底主网上线，Sig（Syndica，Zig 语言）在开发中
- **验证者运营成本主要来自投票费用**：硬件成本 $350-700/月，但投票费用高达约 108 SOL/天（每投票 0.000005 SOL），约 30-33 SOL/月（约 $5,000），使验证者需要大量委托才能盈亏平衡

## 关键数据
- **1,332** 个活跃验证者，**3.809 亿 SOL** 质押（供应量的 **63.9%**），截至 2025 年 3 月
- 2025 年 1 月验证者总收入：通胀 1.81M SOL（$3.899 亿）、Jito 小费 1.29M SOL（$2.308 亿）、优先费 1.03M SOL（$1.84 亿）、基础费 17.3K SOL（$310 万）
- SIMD-228 通过后，在 62.5% 当前质押率下，年化通胀率将从 4.6% 降至 **0.96%**（平滑过渡 50 个 epoch）
- Marinade SAM 获胜验证者 APY 报价 **13.73%-18.27%**，远超正常质押收益（~7-8%）
- 运行 Solana 验证者的推荐硬件成本 $350-700/月，投票费用约 **30-33 SOL/月**（约 $5,000）
- Jito 客户端占 **92%** 质押权重（截至 2025 年 1 月）
- LST 市场结构：Jito 约 1,700 万 SOL、Sanctum 约 740 万 SOL、Marinade 约 500 万 SOL
- Jito 的 MEV 回扣率为 94%（TipRouter 3% + Jito Labs 3% 费用后净得）

## 与已有知识的关系
- 补充 [[solana]] — 提供验证者经济学（收入/成本结构）的定量分析，补充客户端多样性和治理提案的最新进展
- 补充 [[jito]] — 新增 Jito 小费占验证者收入的具体占比（14% 目前 vs 30% 历史峰值），TipRouter 上线后的费用结构（6% 综合费率），以及 JitoSOL 1,700 万 SOL 的市场规模
- 补充 [[marinade]] — 此文章是 SAM（Stake Auction Marketplace）最详细的英文描述，包含竞标 APY 具体数据和竞争分析——该实体页面需新建
- 补充 [[sanctum]] — 新增 Infinity Pool 机制细节（多 LST 共池、INF 复合代币），以及验证者可通过 Sanctum 自动生成自己 LST 的"验证者为中心"模式
- 补充 [[liquid-staking]] — 提供 2025 Q1 的 Solana LST 市场结构数据（Jito 主导、Marinade SAM 创新、整体 9-10% 渗透率远低于以太坊），补充 Solana 三大 LST 协议的区别定位
- 补充 [[blockchain-governance]] — SIMD-96/123/228 三项治理提案的详细机制设计和利益相关方观点对比（Multicoin/Max Resnick 支持 vs Lily Liu 反对），是 Solana 链上治理的典型案例
- 补充 [[tokenomics]] — SIMD-228 代表的固定通胀向市场驱动通胀转型，是 PoS 代币经济模型的重要演进案例
- 补充 [[mev]] — Jito 小费占总验证者收入 14-30% 的量化数据，以及 Jito-Solana 客户端的 MEV 拍卖机制（bundles 提交 → Block Engine 竞标）
- ⚠️ 与 [[来源_2025-03_SIMD-0228_Solana通胀_深层博弈]] 的部分数据存在差异：本文称 SIMD-228 目标通胀率为 0.96%（基于 62.5% 质押率），而 SIMD-0228 文中称 0.87%（基于 65.7% 质押率），差异源于引用时点的质押率不同

## 值得记住的引用
> "Solana is currently overpaying for security, and an arbitrary fixed emission schedule will always be over- or underpaying for economic security. The most efficient token issuance is the lowest rate necessary to secure the network." —— Multicoin Capital 支持 SIMD-228 的核心论点

> "SOL inflation subsidizes institutional distribution. While it's true that token holders should care only about real yield, custodians and ETP issuers are the opposite. They are incentivized to have the highest possible nominal yield since they take a commission rate on nominal yield." —— Lily Liu 反对 SIMD-228 的核心论点，认为通胀是分销激励而非"漏桶"

> "However, the most expensive part of running a Solana validator are the voting fees - which are a significant recurring expense. On Solana, every validator must continuously vote on confirmed blocks, paying 0.000005 SOL per vote. With ~216k slots per day, this can total up to ~1.08 SOL per day in vote fees (about 30–33 SOL per month, i.e. approximately $5K at current prices)." —— Solana 验证者运行的特殊成本结构

## 我的笔记
- 这篇文章来自 Blockworks Research，由 Marinade Labs 资助，存在明确利益冲突声明。但数据质量很高（来源于链上数据和公开资料），分析框架完整。LST 协议资助的验证者经济报告天然有偏向——Marinade 希望展示其 SAM 机制的创新性和对验证者经济的改善，读者应对 Marinade 相关描述保持审慎乐观
- SIMD-228 的辩论（Multicoin 的"效率观" vs Lily Liu 的"分销观"）很有启发性：同一个通胀模型变化，反对者看到的是名义收益率下降导致机构渠道推广动力消失，支持者看到的是减少无效稀释。这不是事实分歧而是视角分歧——取决于你认为 SOL 的价值积累应该来自稀缺性还是机构覆盖。这种分歧在代币经济学中很常见但很少被如此清晰地呈现
- 一个重要但容易被忽略的洞察：Solana 验证者的投票费是其最大的运营成本项（~$5,000/月），这比其他 PoS 链（如以太坊）的验证者成本结构截然不同。这一机制本身构成了小型验证者的进入壁垒，也是支持 SIMD-228 反对者论点的一个结构性因素——降低通胀将直接挤压小型验证者的生存空间
