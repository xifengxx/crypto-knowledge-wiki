---
type: entity
entity_type: protocol
created: 2026-06-29
updated: 2026-06-29
tags: [defi, perp, dex, cosmos, ethereum]
---

# dYdX

## 基本信息
- 定位：去中心化永续合约交易所（Perp DEX）头部协议
- 代币：$DYDX
- V3：以太坊L2（StarkEx）
- V4（2023年10月启动）：迁移至Cosmos生态独立区块链（dYdX Chain），实现完全去中心化和社区运营
- 升级逻辑：DYDX从治理代币变为"真实收入代币（Real Yield Token）"

## 核心业务/产品
- 永续合约交易（主要产品）
- V4 dYdX Chain：独立应用链，费用收入已超过V3成为主要收益来源

## StarkEx 时期（2020-2022）
y 的 gas 费高达收入的 90-100%，于是选择 StarkEx 扩展引擎。
- **dYdX 与 StarkWare 的合作关系**：2020 年中，dYdX 的 gas fee 高达收入的 90-100%，于是选择 StarkEx 扩展引擎。2020 年底推出 zk Rollup 版后，gas 费降至原来的 1/50，业务增长 500 倍
- **经济贡献**：dYdX 曾占 StarkWare 总收入的 90%（约 $50M+/年），StarkWare 帮 dYdX 至少节约约 $300M gas 成本
- **迁移决策**：2022 年 6 月 22 日，dYdX 宣布 V4 版本将基于 Cosmos SDK 开发独立区块链。创始人 Antonio Juliano 公开表达："我们已经是 rollups 上最大的 dapp，非常了解它。尽管它有可能会是最终胜出的技术，但当下并不好用。" 他后来还吐槽 rollup 实际 tps 更像是 30 而非声称的 1000+
- **迁移深层原因**：Centrialized sequencer 限制了 dYdX 代币参与节点运营和价值捕获；开发进度受制于 StarkWare 节奏；合规考量（美国实体运营中心化 Sequencer 可能被认定为运营交易所）

## 关键数据（2024年8月）
- 协议收入：Q1 $139M → Q2 $75M → Q3仅过$25M（下跌态势未止）
- PE：39.5（当前）— 注意：收入在持续下降，PE分母缩小
- dYdX Chain和V3在8月产生的费用分别为$389万和$119万——迁徙计划在收入层面成功
- 当前日交易量仅约$4亿（高峰$60亿），真实交易量（去刷量）不到$3000万
- 市占率从2023年1月的73%跌至2024年底的7%，不到Perp DEX总量的20%
- 累计创造超$5.3亿收入
- 融资：$8500万（a16z、Paradigm、Polychain、Dragonfly）
- 空投初始价值：$20亿（超Hyperliquid的$16亿）
- DYDX未解锁代币：71.06%
- 解锁时间表：2023年12月起一次性解锁15%，其余35%每月分批解锁（6年释放完毕）
- 2024年7月起每月解锁量从3300万减至830万（减少75%）

## dYdX 为什么输掉竞争（OKX Ventures 全景分析）

基于五大归因：

### 一、庞氏流动性激励模型
使用原生代币支付做市商返佣奖励，导致负向循环：做市商为了代币做 wash trading/fake trading → 拿到代币后立即抛售（挖提卖）。Hyperliquid 不做代币返佣——大户更看重滑点和资金费率而非手续费，手续费可通过 VIP 等级解决。

> 2022 年数据已表明 dYdX 交易量中只有约 10% 来自有机需求，其余归因于代币激励。

### 二、僵化的产品策略
- 长达两年未上线任何一个新的交易市场
- Hyperliquid 紧跟市场热点不断上线新币种交易对
- Polynomial 创始人反驳"只有主流币重要"：perp 交易者经常在不同市场间切换，上线新市场是吸引交易者的重要手段——否则 GMX 或 Jupiter 早就成为赢家

### 三、错误的战略重心
将大量精力投入构建 Cosmos 应用链，但对交易者本身未带来真正的价值提升——社区普遍认为更多是为解决在美国的法律问题而非用户需求。

### 四、合规问题背景
v3（StarkEx）依赖中心化 Sequencer 由 dYdX Trading Inc.（美国实体）运营——从美国监管角度看，实体控制撮合核心即等同于运营交易所，可能被定义为向美国用户提供未许可的杠杆衍生品交易服务。迁移至 Cosmos 后，独立 validators 网络负责运行和处理交易，dYdX Trading Inc. 变为技术软件服务公司。

### 五、团队动荡
2023-2024 年经历大的内部人员变动，创始人 Antonio Juliano 卸任 CEO 随后半年后返回。他在后来的 podcast 中分享那段时间持续内耗、疲于处理 people issues 导致 burnout——这个时间点正是 Hyperliquid 抓住市场机会的窗口期。

## 风险 / 争议
- 代币持续下跌：距高点跌去77%
- 大额解锁抛压：投资者/创始人/顾问/员工份额占流通供应量的84.41%，6年解锁
- 竞争格局恶化：从绝对垄断地位退化，Hyperliquid等新兴产品抢占市场
- 除了解锁抛压问题，更需找到增量市场

## 相关实体
- [[gmx]] — Arbitrum Perp DEX竞争对手
- [[hyperliquid]] — 新一代Perp DEX龙头
- [[jupiter]] — Solana Perps竞争者

## 来源
- [[来源_2025-10_PerpDEX格局_Hyperliquid胜利_dYdX_GMX教训_OKXVentures]] — OKX Ventures 深度 dYdX 失败归因：Ponzi 激励模型（2022 年有机仅 10%）、未上线新市场 2 年、Cosmos 迁移为合规决策而非用户价值、$530M 累计收入、融资 $85M/空投 $2B、团队动荡与创始人 burnout
- [[来源_2023-10_DeFi发展史_Uniswap之前_BlockBeats]] — dYdX 2018 年 10 月上线、最高 TVL 突破 $10 亿、混合链上链下订单簿、最高 20 倍杠杆
- [[来源_2024-08_DeFi_PE市盈率_估值分析_BlockBeats]]
- [[来源_2024-12_David_Sacks_白宫加密负责人_投资组合_BlockBeats]] — Craft Ventures 投资方；David Sacks 任命消息公布后 DYDX 24h 涨幅 24.53%
- [[来源_2024-08_永续合约DEX_应用模式_生态概览]] — v3 链下订单簿+链上结算模式 vs v4 全链订单簿模式的设计理念对比；dYdX 生态覆盖从金融扩展到选举、体育等非金融场景
- [[来源_2022-12_胖应用_Fat_App_范式转移_BlockBeats]] — dYdX 从以太坊 StarkEx 迁移至 Cosmos 独立应用链被 ZeePrime Capital 视为"应用链路径"的典范：第二步"成功后启动自己的执行环境以获取更多价值"的代表案例
- [[来源_2022-07_StarkWare_80亿美元估值_以太坊扩容]] — dYdX-StarkWare 合作财务细节（gas 费从 90-100% 降至 3-5%、年技术服务费 $50M+、累计节省 $300M）、2022 年 6 月 22 日迁移 Cosmos 决策背景、Antonio Juliano 对 rollup 真实评价
- [[来源_2022-07_加密衍生品_CeFi_DeFi_Web3Caff]] — 2022年dYdX早期状态快照：V3 StarkEx L2、锁仓量5.5亿美元、日交易量11.7亿美元、宣布迁移Cosmos、DYDX代币50%分配社区
- [[来源_2022-06_dYdX_应用链_DApp造链_Medium]] — 提供dYdX宣布迁移Cosmos时的当代语境（2022年6月），记录Antonio原始表态"不在乎链只在乎产品体验"，以及当年市场对DApp造链叙事的乐观预期
