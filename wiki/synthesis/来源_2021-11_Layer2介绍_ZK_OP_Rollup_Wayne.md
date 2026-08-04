---
type: source
source_type: article
url: https://wayneti.substack.com/p/-layer2-
date: 2021-11
ingested: 2026-07-02
---

# Lay2 科普：理解 ZK Rollup、Optimistic Rollup、Plasma 与数据可用性

## 阅读证据
- 总行数: 195
- Q1 (前25%): Layer2 没有区块概念，没有节点，也不需要共识机制；Layer2 运营者只负责把交易排序后拿去处理，而区块链的关键在于对交易的排序工作。
- Q3 (中后25%): StarkEx 总锁仓额已超过十亿美元，交易超过 5100 万笔，累计交易量超过 2150 亿美元。
- Q4 (最后25%): Validium 完全抛弃数据可用性——像老师批改试卷只传分数不传试卷照片；IMX 引入"Volition"系统让用户在 Validium 和 ZK-Rollup 之间自行选择。
- 图片: 0 analyzed / 7 decorative skipped (所有图片均为外部 substack 链接，无可用的本地截图资源)

## 核心要点
- Layer2 不是链，没有节点/共识/区块；运营者（排序器）负责排序交易，而排序本身就是区块链安全的核心（如三明治攻击就是排序攻击）。
- ZK Rollup：先证明再上传数据到主链（"先查后干"）；Optimistic Rollup：先处理再留挑战期供人质疑（"干完再查"），挑战期一周。
- Plasma 历史是理解 L2 设计取舍的前置知识：Plasma MVP 失败于挑战时需要验证全部交易；Plasma Cash 用 NFT 化改善但要求用户在线证明所有权并自行存储所有数据。
- OP 内部竞争（2021 年 11 月）：Arbitrum 以 300 万+ 笔交易领先 Optimism 的 20 万+，但 Optimism 的浏览器 UI 更用心（明确指出交易批次而非区块）。
- ZK 内部竞争（2021 年 11 月）：Matter Labs 的 zkSync 侧重支付，StarkWare 的 StarkEx 已上线 dYdX/ImmutableX/Sorare 四个应用，TVL 超十亿。
- Immutable X 使用 Validium（StarkEx）抛弃数据可用性以支持大规模 NFT 游戏场景，通过"Volition"让用户选择普通 ZK-Rollup 或 Validium 模式——但也引发中心化风险质疑。

## 关键数据
- Arbitrum 在 2021 年 11 月前累计处理 300 万+ 笔交易；Optimism 同期仅 20 万+ 笔交易。
- Optimism 追溯性奖励计划：60 个项目获得总计 100 万美元奖励。
- StarkEx TVL 超 10 亿美元，交易超 5100 万笔，累计交易量超 2150 亿美元。
- ZK-Rollup 理论 TPS 上限约 2000；Validium 模式可达 9000+。
- 挑战窗口期：Optimistic Rollup 固定为一周。

## 与已有知识的关系
- 补充 [[layer2]] — 提供了 2021 年 11 月的早期 L2 竞争格局快照（Arbitrum 3M tx vs Optimism 200K tx），以及链下排序器/操作员角色的通俗解释，补充了现有 L2 概念页缺乏的早期视角
- 补充 [[data-availability]] — "老师批改试卷"类比为 Validium（只传分数不传试卷照片）提供了一种大众化理解的框架，丰富了 DA 概念页的可视化比喻
- 补充 [[sequencer]] — 将排序器角色比喻为"负责批改试卷的操作员"，通俗解释了排序中心的攻击向量（三明治攻击即排序攻击），补充了排序器概念页关于排序重要性的论述
- 补充 [[immutable-x]] — 记录 IMX 最早期（2021 年）基于 StarkEx Validium 的技术动机、Volition 设计理念，以及作者对"把选择交给用户"的质疑
- 补充 [[plasma-chain]] — Plasma MVP 和 Plasma Cash 失败原因分析：前者挑战时需验证全部交易，后者要求用户定期在线证明所有权
- 对比 [[来源_2023-03_Arbitrum详解_Optimistic_Rollup_火币研究院]] — 本文比火币研究院文章早约 16 个月，提供了更原始的竞争起点，可以对比看到 L2 赛道从萌芽到成熟的演变

## 值得记住的引用
> "侧链是一条链，二层协议没有链。侧链也是链，所以有节点，有共识机制，有存储板块，有区块。二层协议不是链，所以没有节点，没有共识机制，没有区块的概念。"

> "Zk 是零知识证明，先证明是没问题，然后再把数据传到主链。先查后干。Op 是乐观接受，先把数据处理了传到主链，再等人来挑战，一周时间内没人证明是错的，那就是对的。干完再查。"

> "对于主网来说，是找不到试卷在哪里的，如果有意见，也没办法申诉，因为没有试卷不知道错在哪里。再说一遍，这个就是抛弃了数据可用性，Data Availability。"

> "讲实话，虽然能够理解这样的妥协。但是用户知道个啥啊，交给用户不一定是个好的选择。" —— 对 IMX Volition 设计的批判

## 我的笔记
- 作为 2021 年底的科普文，这篇文章最大的价值是 L2 早期竞争格局的历史快照——Arbitrum 当时以 15 倍的交易量碾压 Optimism，StarkEx 远领先于 zkSync。今天回头看这些数据，能清晰看到"先发优势并不等于终局"在 L2 赛道的体现。
- 文章用通俗类比（先查后干 vs 干完再查、试卷批改）是优秀的科普写作参考，但这些简化也牺牲了精度。例如把 ZK 描述为"每笔留下一个证明"忽略了 batch proof 的批处理本质，容易误导读者。
- 作者对 IMX Validium 的质疑（"用户知道个啥啊"）在 2024-2025 年 EigenDA/模块化 DA 兴起的背景下显得有远见——选择性 DA 模式确实增加了用户需要理解的安全假设，而市场最终选择了 Celestia/EigenDA 等专业化 DA 层而非 Validium 模式。
