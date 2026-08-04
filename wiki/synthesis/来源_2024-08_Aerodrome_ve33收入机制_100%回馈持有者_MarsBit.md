---
type: source
source_type: article
url: https://news.marsbit.co/20240809234734921056.html
date: 2024-08-09
ingested: 2026-06-30
---

# Aerodrome的创新机制：100%回馈代币持有者

## 阅读证据
- 总行数: 274
- Q1 (前25%): Aerodrome 在不到一年内向代币持有者支付了 1.1 亿美元收入，是 Base 上的 ve(3,3) METADex，整合了 Uniswap v2/v3、Curve Finance 和 Convex/Votium 的功能于一体
- Q3 (中后25%): 钱包 0xa60a...3259 的案例研究：早期 VELO 锁仓者获得约 $877k 总奖励（费用+贿赂），相对于 $81k 初始购买成本实现 10.8 倍 ROI；锁仓总价值 $305.7 万，总投资回报率（奖励+锁仓价值）/ 购买成本 = 48.3 倍
- Q4 (最后25%): CB Ventures 必须在公开市场购买 AERO 并且仍在持续买入；Velodrome V2 完全重写了 Solidly 的前端和后端；Andre Cronje 的 ve(3,3) 愿景的"杰作"是将费用与 LP 分离、让 100% 收入归持有者所有
- 图片: 0张已分析 / 约10张外部URL图表（Dune仪表板、TokenTerminal收益数据、Dexscreener交易量排名等，均为外部链接不可访问）

## 核心要点
- Aerodrome 是 Base 链上占主导地位的 DEX，采用 ve(3,3) 模型，整合了 Uniswap v2/v3、Curve 和 Convex 的功能，无中间层收取费用
- 100% 协议收入（交易费 + 贿赂/奖励）分配给 veAERO 锁仓者，这是与其他 DeFi 协议（如 Uniswap 0% 分配给代币持有者、PancakeSwap 70%）的根本区别
- ve(3,3) 飞轮效应：更高 TVL → 更低滑点 → 更高交易量 → 更高费用 → 更高投票 APR → 更高排放 → 更高 LP APR → 重复循环。Slipstream CL 池的费用/贿赂资本效率约 2 倍是关键加速器
- Aerodrome 是少数没有筹集风险资金的 DeFi 协议之一，完全由社区自力更生，却在 TokenTerminal 180 天收入排名中位列 Lido Finance、Ethena 和 Solana 之间
- Coinbase 生态深度绑定：CB Ventures 从公开市场购买 AERO；Coinbase 智能钱包可实现 Aerodrome 在前端的无缝集成；Base 不发币策略使 Aerodrome 成为生态激励引擎
- Flight School 锁仓激励计划已回购并锁定 3100 万 AERO 为 veAERO 分发给锁仓者；OP Superfest 分发 28 万 OP 作为锁仓奖励，使锁仓者从 1.5 万增至 2 万

## 关键数据
- Aerodrome 年收入超过 1 亿美元，已向代币持有者分配 1.1 亿美元（截至 2024 年 7-8 月）
- Aerodrome 在 Base 上占据 79% 的 DEX 交易量份额，远超 Uniswap
- 钱包 0xa60a...3259 早期锁仓案例：初始购买 $8,100，总奖励 $877k (10.8x ROI)，锁仓总价值 $305.7 万 (48.3x 总 ROI)，3 月峰值时接近 100 倍
- Flight School 回购 3100 万 AERO 并锁定为 veAERO；OP Superfest 分发 28 万 OP（7 万给个人锁仓者、21 万给协议）
- 第 47 周期 WETH/USDC 池奖励 $41.9 万，为下一周期带来约 $82 万奖励（2 倍资本效率）

## 与已有知识的关系
- 补充 [[defi]] — Aerodrome 是 ve(3,3) 模型最成功的实践案例，100% 收入分配给代币持有者的模式与 Uniswap（0%）形成极端对比，验证了"费用与 LP 分离、全部归持有者"的可行性
- 补充 [[base]] — Aerodrome 是 Base 生态的核心流动性引擎和 DEX 基础设施，Base 不发币的策略使 Aerodrome 成为事实上的生态激励层，Coinbase 通过 CB Ventures 公开市场购买 AERO 间接参与
- 补充 [[coinbase]] — CB Ventures 在公开市场购买 AERO 并持续买入，Coinbase 智能钱包可实现 Aerodrome 的无缝前端集成，揭示 Coinbase 通过"不发行 Base 代币 + 扶持生态 DEX"的策略曲线进入 DeFi
- 关联 [[uniswap]] — Aerodrome 在 Base 上以 79% 交易量份额碾压 Uniswap，且 100% vs 0% 的费用分配策略构成鲜明对比：Aerodrome = 持有者收入优先，Uniswap = LP 收入优先

## 值得记住的引用
> "Aerodrome 每年创造超过 1 亿美元的收入，全部分配给代币持有者。"
> "Aerodrome 与其他赚取巨额收入的协议之间的另一个主要区别是，Aerodrome 将 100% 的收入分配给其代币持有者（储物柜）。这是大多数协议根本不会做的事情。"
> "Andre Cronje 对 ve(3,3) 的愿景中的杰作是将费用与 LP 分开，并让 100% 的收入归持有者所有。当人们谈论 DeFi 是一个'拥有银行的一部分及其所有收入'的机会时，他们谈论的就是这个！"

## 我的笔记
Aerodrome 是当前周期 DeFi 赛道最值得深入研究的协议之一。它的核心创新不在于技术原创性（分叉 Solidly/Velodrome），而在于经济模型的极致设计——100% 收入给持有者、零VC融资、通过 ve(3,3) 飞轮实现自增强增长。这种模式的风险在于代币排放的持续性：如果飞轮减速，高排放可能反噬代币价格。但 Flight School 回购机制和 Relay 自动复投金库的设计部分对冲了这一风险。与 Coinbase 的共生关系是 Aerodrome 最大的护城河——Base 不发币意味着 Aerodrome 是 Base 生态唯一的"准原生代币"激励工具，这种定位使 Aerodrome 不仅仅是一个 DEX，而是 Base 生态的中央银行。
