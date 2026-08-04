---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-30
tags: [defi, dex, ve33, base]
---

# Aerodrome

## 基本信息
- **类型**: DEX（去中心化交易所）/ ve(3,3) METADex
- **赛道**: DeFi / DEX / 流动性市场
- **链**: Base（Coinbase L2）
- **成立时间**: 2023-2024 年（Base 上线后不久）
- **团队**: 与 Velodrome（Optimism 上）同一团队运营，Aerodrome 是 Velodrome 的分叉
- **融资**: 零外部融资，完全由社区自力更生
- **代币**: AERO（治理+锁仓代币），veAERO（锁仓后的 NFT 治理代币，最长锁仓 4 年）
- **前身**: Velodrome（Optimism 上的 ve(3,3) DEX），Velodrome 又基于 Andre Cronje 的 Solidly

## 核心业务/产品

Aerodrome 是 Base 链上的中央交易和流动性市场，将 Uniswap v2/v3、Curve Finance 和 Convex/Votium 的功能整合到一个协议中，无中间层收取费用。

### 三种 AMM 池类型
- **sAMM**: 基于 Curve 稳定池的稳定币交换
- **vAMM**: 基于 Uniswap v2 的可变资产交换
- **Slipstream**: 集中流动性 AMM，基于 Uniswap v3，使用可配置费用设置和 2 倍更大的 tick 间隔，AERO 奖励始终流向 LP（不依赖交易量）

### ve(3,3) 经济模型
- 锁定 AERO 获得 veAERO（NFT，最长 4 年），获得投票权
- veAERO 可转让、可在 NFT 市场出售、可永久锁定不衰减
- 投票者将 AERO 排放导向指定计量器（池），获得该池 100% 交易费 + 100% 贿赂奖励
- 协议可通过贿赂（激励）引导排放至自己的代币池，获得约 2 倍排放价值（存 $1 万激励 → 获 $2 万排放）
- 每周运行一个周期：周三 23:00 UTC 前投票，周四 00:00 UTC 更新排放，周四 01:00 UTC 可领取贿赂

### 收入分配（核心差异化）
- **100% 交易费**分配给 veAERO 锁仓者
- **100% 贿赂/奖励**分配给 veAERO 锁仓者
- 对比：Uniswap 0%、PancakeSwap 70% 分配给代币持有者

### 辅助功能
- **Flight School**: 锁仓激励计划，用 10% veAERO 供应量的收入从市场回购 AERO 并锁定，分发给最大锁仓者（已回购 3100 万 AERO）
- **Relay**: 自动复投金库，优化投票以获得最大奖励，自动购买并锁定 veAERO 复合头寸
- **Rebase**: 反稀释保护，部分 AERO 发行分配给 veAERO 锁仓者

## 关键数据
- 年收入超过 $1 亿（2024 年）
- 已向代币持有者分配 $1.1 亿收入（不到一年）
- Base 链上 DEX 交易量份额：79%（2024 年 8 月，远超 Uniswap）
- TVL 当前约 $5.2 亿，ATH 约 $7 亿（2024 年 3 月）
- 约 20% TVL 在 Slipstream 集中流动性池中
- TokenTerminal 180 天收入排名：DEX 类别第一，全部协议中位列 Lido Finance、Ethena 和 Solana 之间
- Flight School 回购 3100 万 AERO 锁定为 veAERO
- 锁仓地址从 1.5 万增至 2 万（OP Superfest 激励期间）

## 竞争优势 / 护城河
- **100% 收入回馈持有者**：与几乎所有其他 DeFi 协议的收入分配模式形成极端差异
- **Coinbase 生态绑定**：CB Ventures 公开市场买入 AERO；Coinbase 智能钱包可前端集成；Base 不发币使 Aerodrome 成为生态事实上的激励引擎
- **ve(3,3) 飞轮自增强**：费用/贿赂约 2 倍资本效率驱动 TVL → 交易量 → 费用 → APR 的正向循环
- **零 VC 抛压**：无私募/预售代币解锁风险，供给完全由社区和协议控制
- **Relay 自动复投金库**：降低用户操作门槛，协议级 veAERO 锁仓产生持续回购压力

## 风险 / 争议
- **代币排放通胀**：每周大量 AERO 排放以激励流动性，净收益可能为负（虽然排放量在减少、奖励在增加）
- **ve(3,3) 模型复杂性**：锁仓 4 年对普通用户门槛高，流动性 vs 收益的权衡
- **锁仓价值波动**：早期锁仓者 ROI 从峰值 ~100 倍降至 ~48 倍（依赖 AERO 代币价格）
- **分叉争议**：基于 Solidly/Velodrome 代码，原创性存疑（但 V2 已完全重写前后端）
- **Base 依赖性**：严重依赖 Base 生态增长，Base 失败则 Aerodrome 受重创

## 相关事件时间线
- 约 2022 年：Velodrome 在 Optimism 上线（基于 Solidly）
- 2023 年：Base 主网上线，Aerodrome 在 Base 上部署
- 2023-2024 年：AERO 全部供应空投给 veVELO 持有者（发布时约 1/3 veAERO 锁定量）
- 2024 年 3 月：TVL 达 $7 亿 ATH，AERO 价格峰值
- 2024 年 8 月：Base 上 DEX 交易量份额达 79%，年收入超 $1 亿，累计分配 $1.1 亿

## 我的判断
Aerodrome 是当前周期 DeFi 赛道最具研究价值的协议之一。100% 收入分配给代币持有者的极致设计使其成为"DeFi 银行股"的最佳代表。最大护城河不是技术而是与 Coinbase/Base 的共生关系——Base 不发币使 Aerodrome 成为 Base 生态唯一的准原生代币激励层，这是其他 DEX 无法复制的结构性优势。风险在于 ve(3,3) 模型依赖持续增长，一旦飞轮减速，高排放可能反噬。与 Uniswap 的竞争值得持续跟踪：如果 Uniswap 开启费用开关，Aerodrome 的差异化将被削弱。

## 相关实体
- [[velodrome]] — 前身/姊妹协议（Optimism 上），同团队运营
- [[base]] — 所在链，Coinbase L2，不发币策略
- [[coinbase]] — 生态合作伙伴，CB Ventures 持有 AERO
- [[uniswap]] — 主要竞争对手，0% 费用分配给持有者
- [[solidly]] — ve(3,3) 模型原始来源（Andre Cronje）

## 来源
- [[来源_2024-08_Aerodrome_ve33收入机制_100%回馈持有者_MarsBit]] — Aerodrome 深度分析：ve(3,3) 飞轮机制、100% 收入回馈、案例研究
- [[来源_2025-07-13_稳定币四大未来方向]] — USDC/EURC兑换比Wise便宜30bp（含滑点和交易费），验证链上AMM在外汇市场的竞争力
