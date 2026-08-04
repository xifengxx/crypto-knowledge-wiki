---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-30
tags: [defi, derivatives, options, dex, layer2]
aliases: [Ribbon Finance, Ribbon, AEVO]
---

# Aevo

## 基本信息
- 类型: 去中心化衍生品交易所（期权+永续合约）
- 前身: Ribbon Finance（链上结构化产品，2023年7月社区投票并入）
- 上线时间: 2023年4月7日主网上线
- 区块链: 基于 OP Stack 的自定义 L2（Aevo Rollup，由 Conduit 运营排序器）
- 代币: $AEVO（治理代币），由 $RBN 1:1 迁移；sAEVO（质押版本，3个月锁定期，不可转让，2倍投票权）
- 团队: 来自 Coinbase、Kraken、Goldman Sachs，以及斯坦福、MIT、康奈尔等机构
- 融资: Ribbon Finance 于 2022 年 3 月完成 Paradigm 领投的 875 万美元 B 轮融资

## 核心业务/产品

### Aevo 交易所
- 订单簿+保证金模型，专注期权和永续合约交易
- Pre-Launch 代币期货：在代币正式上线前提供永续合约交易（已上线 SEI、JTO、PYTH、MEME、BLAST 等）
- 总交易量 > $1 亿，未平仓量 > $5000 万（2023 年 12 月）
- TVL > $2300 万（近一半来自 2023 年 11-12 月）

### Theta Vaults
- 自动化虚值期权卖出策略，每周收取权利金
- Gas 费由所有存款人分摊（一次执行服务数千用户）
- 用户可自由暂停/恢复参与每周策略

### Earn Vaults
- 本金保护型收益产品，风险配置与 Theta Vaults 互补
- 通过借贷+异国期权组合利用 ETH 周内波动性
- 全天候收益产品

### Aevo OTC
- 链上机构级山寨币期权 RFQ 交易
- LP 需提供 30% USDC 初始保证金 + 动态保证金系统
- 支持 13 种加密货币，每月轮换
- 解决山寨币期权市场碎片化和信息不透明问题

### aeUSD
- 加密衍生品交易所首个收益稳定计价抵押资产
- ERC-4626 资产，USDC + sDAI 组合（收益来自 MakerDAO DSR 模块）
- 4.75% 年化收益率，100% 抵押因子
- 支持 20 倍杠杆同时赚取保证金收益

### Spot Swaps（2023 年 12 月上线）
- 应用内直接兑换抵押品，无需先提取到外部 DEX

## 技术架构

### L2：Aevo Rollup
- 基于 OP Stack 的以太坊乐观汇总（Optimistic Rollup）
- 由 Conduit 运营排序器
- 每 1 小时将成批交易发布到以太坊主网
- 提款确认: 2-3 小时；存款确认: ~10 分钟
- Gas 费以 ETH 支付，结算交易 Gas 费由交易所补贴

### 链下订单簿 + 链上结算
- 挂单和吃单在链下匹配，匹配成功后发布到 L2 智能合约
- 链下风险引擎在订单上簿前检查保证金充足性
- 所有资金和头寸始终保持在链上智能合约中

### 清算机制
- 全仓保证金模式，清算评估整个投资组合
- 触发条件: AB - OO - MM > 0（AB=账户余额、OO=未结订单总价值、MM=维持保证金）
- 清算引擎接管账户，分步清算，每步后重新评估账户健康度

## 代币经济学
- $RBN → $AEVO 1:1 迁移
- DAO 原持有 45% RBN 全部迁移为 AEVO
- 分配: 16% 激励（含空投），9% DEX/CEX 流动性，5% 社区增长，16% 未指定（保留 DAO 支出）
- sAEVO: 质押版代币，3 个月锁定期，1:1 质押，每 3 个月需重新质押
- sAEVO 权益: 佣金折扣、奖励乘数、新产品优先体验、2 倍投票权
- 治理: Ribbon Labs Foundation（Aevo DAO），交易所和金库费用统一管理

## 关键数据
- Aevo TVL: $2300 万+（2023 年 12 月）
- Ribbon Finance 历史最高 TVL: $3 亿（2022 年 4 月）
- Ribbon B 轮: $875 万（Paradigm 领投，2022 年 3 月）
- Aevo 总交易量: >$1 亿；未平仓量: >$5000 万

## 历史事件
- 2022 年 3 月: Ribbon Finance 完成 Paradigm 领投的 $875 万 B 轮
- 2022 年 4 月: Ribbon TVL 突破 $3 亿创历史新高
- 2022 年 6 月: Ribbon Finance 遭受 DNS 劫持攻击，TVL 跌至不足 $8000 万
- 2022 年 9 月 8 日: Aevo 项目首次公开
- 2023 年 4 月 7 日: Aevo 主网上线
- 2023 年 7 月: 社区投票通过 Ribbon 并入 Aevo 提案
- 2023 年 8 月: 推出 Pre-Launch 代币期货，首期上线 SEI
- 2023 年 11 月 24 日: 上线 BLAST 期货，5 小时涨近 400%
- 2023 年 12 月 2 日: 推出 Spot Swaps 功能
- 2023 年 12 月 6 日: 上线 aeUSD 收益抵押资产
- 2023 年 12 月: 上线 JTO 期货，两日涨幅超 300%

## 竞争优势 / 护城河
- Pre-Launch 期货的先发优势（代币上线前的价格发现机制）
- 期权+永续合约一站式交易体验
- 自有 L2 带来高性能和可控的交易体验
- aeUSD 作为收益抵押资产的创新（交易+收益双功能）
- Paradigm 背书和成熟团队

## 风险 / 争议
- Pre-Launch 期货高度依赖热点事件流，缺乏持续性需求
- Ribbon 历史 TVL 从 $3 亿跌至 $2000 万，品牌信任受损
- 衍生品 DEX 赛道竞争激烈（dYdX、GMX、Hyperliquid）
- DNS 劫持攻击史暴露安全薄弱环节
- L2 提款需 2-3 小时，用户体验受限于 Optimistic Rollup 挑战期

## 相关实体
- [[dydx]] — 永续合约 DEX 龙头竞品
- [[gmx]] — 衍生品 DEX 竞品
- [[hyperliquid]] — Perp DEX 新锐竞品
- [[jito]] — JTO 期货在 Aevo 上线，Pre-Launch 期货案例
- [[bnbchain]] — Binance Launchpool 上线方

## 来源
- [[来源_2023-12_Aevo_去中心化衍生品_Ribbon_BlockBeats]]
- [[来源_2024-08_永续合约DEX_应用模式_生态概览]] — Aevo 作为链下订单簿+链上结算混合模式和 Pre-Launch 合约的开创者之一，与 dYdX v3、Paradex 并列为混合模式代表
