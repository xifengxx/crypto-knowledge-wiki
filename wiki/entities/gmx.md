---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-29
tags: [gmx, perp-dex, arbitrum, defi, trading]
---

# GMX

## 基本信息
- 类型：去中心化永续合约交易所 (Perp DEX)
- 区块链：Arbitrum (主) + Avalanche
- 代币：$GMX / $GLP (流动性提供者代币)
- 定位：Arbitrum 生态最大的 Perp DEX

## 核心业务/产品
- **GMX Perp**：去中心化永续合约交易 (Order Book 式)
- **GLP**：GMX 流动性池代币（用户存入 ETH/BTC/稳定币 → 获取交易手续费分成）
- **GMX V2**：2023 年 8 月 4 日上线——改进版（更低费用/更好预言机/更强风控）

## GMX v1 四大结构性缺陷（来源：OKX Ventures 全景分析）

1. **单边敞口风险**：GLP 作为所有交易的对手方，当多头或空头仓位长期失衡时，LP 面临单边敞口亏损风险——若多数用户做多且价格大涨，GLP 需支付用户盈利，可能导致 LP 大幅亏损甚至池子枯竭
2. **缺乏有效资金费率机制**：v1 仅通过多空双方均支付借贷费限制持仓时间，无法实现有效的多空仓平衡和套利校准
3. **预言机价格可被操纵**：2022 年 9 月有交易者利用 GMX 零滑点特性——先在 GMX 低价买入 AVAX，在外部 CEX 拉高 AVAC 价格，再按更高预言机价卖给 GMX，无风险套利约 $50-70 万；团队事后不得不设置持仓上限
4. **资产覆盖有限**：因风险模型限制，支持的交易资产种类非常有限

## GMX 机制详解（来源：WOO X Research 2025.03）

GMX 的 GLP 多资产指数池（BTC、ETH、USDC、DAI 等）作为统一对手方：

**核心机制**：
- 无订单簿，Chainlink 去中心化预言机报价，零滑点执行
- GLP 池作为统一做市商，配备价格冲击费机制

**清算机制**：
- 通过 Chainlink 指数价格自动清算，保证金率低于约 1.25x 初始保证金时触发
- 合约平仓，用户保证金优先覆盖池子损失，剩余退还或入保险

**费用结构**：
- 70% 交易手续费奖励给 GLP 持有者，激励 LP 承受亏损
- 借贷费（Borrowing Fee）：0.01%/小时，基于借用资产比例，直接支付给 GLP
- 利用率高时可年化超 50%，经济上惩罚拥挤的单边仓位

**风控**：
- 多源预言机降低操纵风险
- 易操纵资产的仓位上限（如 AVAX 上限 $2M）
- 动态费率
- 永续价格始终接近现货（零滑点）

来源：[[来源_2025-03_PerpDEX三大机制_Hyperliquid_Jupiter_GMX_PANews]]

## GMX v2 四大改进

1. **多池隔离模型**：打破单一 GLP 池模式，引入 GM Pool 多流动性池架构（每个池对应一个市场或资产），推出 GLV（GMX Liquidity Vault）做跨市场优化分配
2. **动态资金费率**：根据多空比率分段调整，当 dominant side 仓位达 70% 等阈值时资金费率陡增，引导套利资金平衡市场；保留借贷费做时间成本
3. **价格冲击费（Price Impact Fee）**：大额开仓额外收费，模拟订单簿滑点——保护 LP 免于"大单直接命中指数价"的损失
4. **高效预言机**：上线 Chainlink Data Streams 高频预言机服务

## GMX v2 为什么未能翻盘

- **市场环境**：v2 上线恰逢 perp DEX 新一轮竞争高潮——Synthetix/Kwenta、Vertex、MUX 等纷纷入局（空投预期、交易挖矿、更低手续费）；GMX 没有代币或新"故事"刺激，即使 volume 保持 weekly $2b 左右仍被稀释——不是 GMX v2 差而是竞品更激进
- **团队局限**：两个 anon dev（xdev and Saulius）加约 10 人开发团队，完全不公开露面或发言；从未做 fundraising（v1 全部协议收入分给 LP 和 token holder，v2 仅约 10% 做协议收入）；风格高度社区草根

## 关键数据（2024年8月更新）
- PE值近三个季度小幅下降，维持在10左右
- Q3未结束GMV已超Q2总额
- 交易量已集中在V2，但7日交易量位列衍生品市场第十位
- 生态：Arbitrum + Avalanche
- GLP: 流动性提供者池（Oracle-based 定价避免 AMM 滑点）
- 收入分配模式：27%给GMX质押者 / 63%给GLP提供者 / 8.2%给财库 / 1.2%给Chainlink

## 2024年7月收入分配模式变更
社区通过提案：将收入分配从"回购ETH并分发ETH"改为"回购GMX并分发GMX"。目的：通过持续买盘提升市场信心 + 减少流通中的GMX数量（僵尸质押账号休眠效应）。某种意义上"只有回购没有分红"。

## 竞争优势 / 护城河
- GLP 模型 = 交易对手方=流动性池（用户赚取对手亏损）
- Arbitrum DeFi 生态先发优势
- Oracle-based 定价 vs AMM → 更接近 CEX 体验

## 风险 / 争议
- Hyperliquid (自建 L1 + HLP) 直接竞争
- Perp DEX 赛道拥挤，交易量排名已跌至第十
- GLP 模型在极端行情下的风险（类似 2023年8月 事件）

## 相关实体
- [[hyperliquid]] — Perp DEX 龙头竞争
- [[jupiter]] — Solana DEX 聚合器（也做 Perp）
- [[uniswap]] — DEX 头牌（Unichain）
- [[curve]] — 同类 AMM 创新对比

## 来源
- [[来源_2024-11_Arkham进军Perp_DEX_AI跨界DeFi_BlockBeats]]
- [[来源_2024-08_DeFi_PE市盈率_估值分析_BlockBeats]]
- [[来源_2025-10_PerpDEX格局_Hyperliquid胜利_dYdX_GMX教训_OKXVentures]] — OKX Ventures 深度 GMX 分析：v1 四大结构性缺陷（单边敞口/缺乏资金费率/预言机可操纵/资产覆盖有限）、v2 四大改进（多池隔离/动态费率和资金费率/价格冲击费/高效预言机）、v2 未翻盘原因（新竞品激进/anon 团队草根/无 fundraising）
- [[来源_2024-08_永续合约DEX_应用模式_生态概览]] — GMX 作为预言机模式典型案例：通过 Chainlink 获取价格数据，为价格接受者创造友好交易环境，但面临无法主动进行价格发现的局限性
- [[来源_2025-07_Arbitrum_双产品_Messari]] — GMX 是 Arbitrum One 最大原生 DeFi 协议，TVL 4.172 亿美元，占 Arbitrum One 链上 GDP 的显著份额（Uniswap/GMX/Aave 合计占 40.5%）
- [[来源_2022-08_链上基金_DeFi资管_iZUMi]] — GLP 作为 DeFi 乐高组件被 Umami Finance 用于构建链上对冲基金：GLP 的结构（40+%波动资产+50+%稳定资产）、70%平台费以ETH形式分配给GLP持有者、Mint费用调节机制维持篮子比例等详细运作机制说明
