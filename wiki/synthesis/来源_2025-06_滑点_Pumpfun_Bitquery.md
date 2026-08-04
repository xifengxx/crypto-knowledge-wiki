---
type: source
source_type: article
url: https://bitquery.io/blog/analyzing-slippage-pumpfun-trading-dynamics
date: 2025-06-09
ingested: 2026-07-02
---

# 滑点的定量研究：Pumpfun 交易动态的 Bitquery 链上分析

## 阅读证据
- 总行数: 197
- Q1 (前25%): 数据集描述——5,000笔 Pumpfun DEX 交易，跨越9个代币，包含时间戳、交易规模、报价价和实际成交价，滑点公式为 `slippage (bps) = ((realizedPrice / quotedPrice) - 1) x (-10000)`
- Q3 (中后25%): catwifmask 是最不稳定的代币，均值绝对滑点约 62 bps，远高于 moonpig 的 14.5 bps；且在 09:51 UTC 附近分钟均滑点飙至 +18.5 bps
- Q4 (最后25%): 4,844 笔有效交易中，2,294 笔出现负滑点（有利执行，45%），2,144 笔为正滑点（损失，47%），406 笔零滑点（8%）
- 图片: 0 analyzed / 1 decorative skipped（封面图）/ 2 external URLs unavailable（数据表格和图表均来自 Bitquery CDN）

## 核心要点
- Bitquery 分析了 5,000 笔 Pumpfun 链上交易（有效 4,844 笔），覆盖 9 个代币，采集自 2025 年 6 月 9 日约 11 分钟的交易窗口，系统量化了 memecoin 交易的滑点分布特征
- 中位滑点为 0 bps，75 分位约 +6 bps；约 8% 交易实现零滑点，47% 承受正滑点（损失），45% 获得负滑点（有利执行）——滑点分布大致对称，与 2021 年大型研究结果（约 50% 零滑点、33% 负滑点）存在差异
- 极端尾部风险显著：仅约 2% 交易滑点超过 100 bps，但最差交易（catwifmask）超过 +5000 bps（损失超过 50%），11 笔交易超过 +1000 bps，6 笔低于 -1000 bps
- 代币间差异巨大：moonpig 最稳定（均值绝对滑点约 14.5 bps），catwifmask 最不稳定（均值约 62 bps），流动性深度和交易活跃度是核心决定因素
- 数据中检测到 MEV/三明治攻击痕迹：catwifmask 池中观测到"小额买单损失 4711 bps → 中额交易收益 8951 bps → 后续交易再损失 3682 bps"的经典 sandwich 攻击时序模式
- Pumpfun 的 bonding curve 机制本质放大滑点——每次买入自动推高价格，mempool 公开性使机器人可抢跑交易，成为滑点的结构性来源

## 关键数据
- 数据集：5,000 笔原始交易过滤后 4,844 笔有效，9 个代币，采集窗口约 11 分钟（2025年6月9日 UTC）
- 滑点分布：中位 0 bps，75 分位 +6 bps；零滑点 406 笔（8.4%），正滑点 2,144 笔（44.3%），负滑点 2,294 笔（47.3%）
- 最差滑点：catwifmask 代币多笔交易超过 +5000 bps（价格偏差 >50%），所有交易金额均低于 $500
- 最稳定代币：moonpig（均值 |滑点| 14.5 bps，范围 ±50 bps 内）、President Vs Elon（17.1 bps）、OFFICIAL MUSK（26.5 bps）、Costco（31.2 bps）
- 最不稳定代币：catwifmask（均值 |滑点| ~62 bps，极值 +5000 bps 和 -1400 bps）
- 三明治攻击时序证据：09:42:55 UTC catwifmask 池中，$0 小额买单损失 +4711 bps → $72 中额买单收益 -8951 bps → 另一笔相似交易损失 +3682 bps

## 与已有知识的关系
- 补充 [[pumpfun]] — 首次从定量滑点分析角度量化 Pumpfun 交易执行质量，补充实体页中缺少的交易执行定量数据；现有页面覆盖了收入模型、竞争格局和直播功能，但缺乏对用户端交易执行质量的量化分析
- 补充 [[mev]] — 提供 Pumpfun/memecoin 场景下三明治攻击的实证时序数据，支持 MEV 页中关于 memecoin 驱动 MEV 的论述（Solana MEV 占手续费 80%，meme 交易是主要驱动）
- 补充 [[memecoins]] — 提供链上滑点量化证据（~45% 负滑点、最差 +5000 bps），支持 memecoin 交易作为"高波动 PvP 游戏"的论述，补充了现有 memecoins 页面中缺少的交易执行质量量化数据

## 值得记住的引用
> "Have you ever sent 1 SOL on Pumpfun only to receive far fewer tokens than you expected? That unwelcome surprise is known as slippage: the hidden cost of executing fast trades in volatile markets."

> "Our analysis of Pumpfun DEX trades shows: Most trades experienced small slippage within ±10 bps. Approximately equal proportions saw slight gains or losses relative to the quoted price. Some tokens exhibited stable slippage, while others showed extreme volatility and possible MEV exploitation."

> "In our 11-minute snapshot: Stable intervals: During most minutes, the minute-level average slippage hovers around 0 bps. Spikes aligned with large or illiquid-token trades."

## 我的笔记
1. 该文章提供了有价值的定量滑点数据，但样本量（4,844 笔交易，11 分钟窗口）太小且时间窗口极短，代表性有限——不足以概括 Pumpfun 长期或不同市场环境下的整体滑点特征，结论的外推需谨慎。
2. 约 45% 交易出现负滑点（有利执行）这个发现很有意思，挑战了"散户在 Pumpfun 必然被割"的简单叙事——但在高波动的 PvP 环境中，短期"有利"执行不等于长期盈利，且有利执行可能来自 bot 而非普通散户。
3. 文章对 MEV/三明治攻击的"证据"较为薄弱——仅靠交易时序模式推测，缺乏钱包地址验证来确认这些交易是否来自同一 MEV bot 或关联地址，不能排除正常多笔交易的时间顺序偶然性。
4. 滑点计算公式的符号约定（正滑点=损失，负滑点=收益）与市场惯例存在差异（通常正滑点=价格向有利方向移动），读者需注意转换。
