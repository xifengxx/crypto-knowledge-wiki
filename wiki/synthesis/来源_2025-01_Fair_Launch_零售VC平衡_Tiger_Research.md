---
type: source
source_type: article
url: https://reports.tiger-research.com/p/fair-launch-platform-eng
date: 2025-01
ingested: 2026-06-30
---

# 零售与风险投资：在 Web3 中寻找平衡

## 阅读证据
- 总行数: 136
- Q1 (前25%): Binance Research 数据显示，加密市场 MC/FDV 比率从 2022 年的 41.2% 持续下降至 2024 年的 12.3%，表明市场中活跃交易的代币占比持续萎缩，锁仓供应比例不断上升。
- Q3 (中后25%): Legion 通过 Legion Score 评估投资者，综合链上活动、社交影响力、GitHub 贡献和项目团队背书等多维度数据，而非仅凭资金实力筛选投资者。
- Q4 (最后25%): AI-Pool 使用 Trusted Execution Environment (TEE) 保护 AI 钱包私钥，让 AI Agent 自主运作，试图解决中心化运营和内幕交易导致的不公平问题。
- 图片: 7 张，均为 Substack CDN 外部图片（banner、Dune Analytics MC/FDV 图表、DRUGS VIP 名单、Legion 平台截图、Legion Score 评估界面、AI-Pool 截图），本地不可用。

## 核心要点
- Fair Launch 平台（如 Pump.fun、DAOS.Fun）试图通过无预售、无 VC 优先的公平启动模式解决加密市场散户与风投之间的投资机会失衡，但表面上创造了公平环境，实际上催生了新的失衡形式：TGE 狙击机器人抢跑交易、白名单和 Cabal（利益小团体）优先配售、缺乏 VC 尽职调查导致散户暴露于更高风险。
- 加密市场 MC/FDV 比率三年持续下降（41.2% → 12.3%），低流通高 FDV 代币让早期 VC 在代币解锁时获利，散户在价格上涨后入场、解锁抛压中承受最大损失，这是推动散户转向 Fair Launch 的核心动力。
- VC 不仅提供资金，还提供网络资源、人力物力、早期尽职调查和对项目稳定性与可靠性的验证——完全取消 VC 角色会导致项目跳过审查流程，散户面临更大风险且缩短了风险爆发周期。
- 文章提出"价值驱动参与者选择"（value-driven participant selection）作为中间路径：识别能为生态做出实质性贡献的参与者（而非仅凭资本量或投资者类型），并给予其适当的投资机会。
- Legion 通过量化投资者链上链下数据（链上活动、社交影响力、GitHub 贡献、项目团队背书）来筛选"有意义的贡献者"，投资者还需提交 Cover Letter 阐述能为项目做什么，以此建立双向信任关系。
- AI-Pool 是 Skely（X 用户，账号后被暂停）于 2024 年 12 月 24 日提出的实验性 Fair Launch 平台，使用 TEE 保护 AI 钱包私钥，让 AI Agent 自主透明管理所有流程，几小时内募资超 $500 万——但项目处于极早期实验阶段，Skely 本人账号因假账号举报被暂停。

## 关键数据
- MC/FDV 比率：2022 年 41.2% → 2024 年 12.3%（三年持续下降，Binance Research 数据）
- AI-Pool 募资规模：提案后几小时内募资超 $500 万（2024 年 12 月 24 日）
- Legion Score 评估维度：链上活动、社交影响力、GitHub 贡献、项目团队背书（四维量化）
- Tiger Research 订阅者规模：4,000+ 人（截至文章发布时）
- 2024 年新发代币 MC/FDV 比率为过去三年最低（Binance Research）

## 与已有知识的关系
- 补充 [[fundraising]] — 新增 Fair Launch 平台自身失效的机制分析（TGE 狙击/Cabal/白名单）以及 "价值驱动参与者选择" 作为 VC 与 Fair Launch 之间的第三条路径。本报告与 Binance Research 低流通高 FDV 分析和 Dragonfly Haseeb 数据反驳构成同一问题的三方对话。
- 补充 [[pumpfun]] — 明确 Pump.fun 面临的 TGE 狙击机器人和趋势机器人问题，揭示 Fair Launch 平台在实践中如何从"公平"滑向"另一种不公平"。
- 补充 [[tiger-research]] — 扩展研究覆盖范围：从税收/监管政策延伸至投资结构公平性和新发行机制分析。
- 新增实体 [[legion]] — Legion 作为社区驱动投资平台的详细机制（Legion Score + Cover Letter 系统）
- 新增实体 [[ai-pool]] — AI-Pool 作为实验性 AI Agent Fair Launch 平台的完整描述（TEE + 自主 AI Agent）

## 值得记住的引用
> "The MC/FDV ratio dropped steadily from 41.2% in 2022 to 12.3% in 2024. This indicates a decreasing proportion of tokens actively traded in the market and an increasing proportion of locked supply. The limited supply inflates token prices artificially, benefiting early investors like venture capitalists. However, when a large amount of locked supply enters the market during token unlocks, oversupply causes prices to drop. Retail investors bear the brunt of these losses."

> "What's worse is that this pattern now repeats in shorter cycles. Fair Launch platforms often skip the vetting processes previously handled by venture capitalists, exposing retail investors to greater risks."

> "The core value of the Web3 industry is to offer equal opportunities and a fair environment for all participants through decentralization. To achieve this, we must build a balanced ecosystem that is free from bias. We also need to create a collaborative structure where investors and projects can add value to each other."

## 我的笔记
这篇报告的真正价值不在于重复"散户 vs VC"的框架（这是 2024 年的主流叙事），而在于它指出了 Fair Launch 本身的悖论：取消 VC 门槛的同时也取消了 VC 的审查和筛选功能，散户从"被 VC 割"变成"被机器人和小团体割"，且割的频率更高、周期更短。这比单纯喊"VC 是坏人"的分析深刻一个层次。Legion 的"用数据筛选有贡献的参与者"思路实际上是从"资本民主化"（谁有钱谁投）转向"贡献民主化"（谁能贡献谁投），这是一个值得跟踪的实验方向——但如果 Legion Score 的权重设计不当，可能会制造比 VC 更隐蔽的准入偏见。
