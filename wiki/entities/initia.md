---
type: entity
entity_type: protocol
created: 2026-07-01
updated: 2026-07-02
tags: [layer1, cosmos, rollup, interoperability]
---

# Initia

## 基本信息
- **类型**: Layer 1 区块链
- **赛道**: L1 公链 / 模块化互操作
- **技术架构**: Cosmos SDK + Rollup互操作层
- **融资历史**:
  - 种子轮：750万美元
  - A轮：1400万美元，估值3.5亿美元
  - 社区轮：250万美元，估值2.5亿美元
  - Binance Labs：金额未披露
- **主网进度**: 截至2024年12月19日，官方公告进度为78%，正在进行安全审计

## 核心业务/产品
- 构建"L1 + 交错的L2 Rollup"架构（Interwoven Rollups），L2网络被称为"Minitias"
- 目标：在Cosmos生态内实现统一的流动性和用户体验
- 与Avalanche子网类似，但采用OPinit堆栈同时支持EVM、MoveVM和WasmVM三大虚拟机架构——开发者可选择最熟悉的编程语言
- 原生去中心化交易所InitiaDEX（基于Move编程语言构建在Layer1），作为交织经济（Interwoven Economy）的流动性基石和跨Rollup交换的主路由引擎
- 原生跨链桥Minitswap，支持不同L2之间的资产转移
- **Enshrined Liquidity（内置流动性）**：核心机制。用户在Initia DEX上为白名单交易对（必须包含INIT）提供流动性，获得的LP代币可质押给验证者。同一笔INIT同时贡献流动性和网络安全，实现"更高资本效率 → 更具吸引力收益 → 更多LP → 更强网络安全性和更深度流动性"的良性循环。Y单位INIT可创造2Y的价值
- **Vote Lock（投票锁定）**：质押可选择锁定1个月至4年获取投票权倍增，公式为`(3×月数/48)+1`，锁定4年可获最高4倍投票权
- **Vested Interest Program（VIP）**：每两周举行VIP Gauge Vote，投票权持有者决定哪些Rollup获得激励增强。各Rollup需向投票者证明价值
- 链上流动性机制允许单独质押INIT代币，或使用经批准的INIT-X流动性池代币通过DPoS获取收益；强制白名单交易对必须包含INIT
- 测试网活动包括XP、Swap、Sake和VIP四个模块
- 参考以太坊L2流动性碎片化教训，Initia L1被设计为交织经济的中心化流动性枢纽
- **JIT Gas 抽象**：用户支付 Gas 时可以使用任意代币，无需持有 INIT 原生代币。系统通过 Just-In-Time 兑换机制将用户持有代币转换为 INIT 支付 Gas，大幅降低新用户的入门门槛
- **.init 用户名**：类 ENS 的链上命名系统，Initia 地址可绑定简短用户名
- **Initia Scan 和 Initia App**：分别作为区块链浏览器和资产组合仪表盘，提供完整的工具套件
- **Cabal 治理**：Rollup 可通过向 INIT 持有者"行贿"（提供代币、特权等）吸引他们在治理中投票。投票越多的 Rollup 从 VIP 获得的 esINIT 越多，形成"越好的应用→越多的用户→越多的投票→越高的回报"的飞轮效应
- **Connect 原生预言机**：内置于 Initia 堆栈的预言机模块，无需依赖外部预言机服务
- **Skip POB（Protocol Owned Builder）+ Protorev**：集成 Skip 协议的 MEV 基础设施——POB 支持 MEV 提取，Protorev 实现非恶意 MEV 提取，使 Rollup 和验证者可从 MEV 中获益
- **Single Slot Finality（单槽最终性）**：L1 和 L2 之间可实现极速确认
- **生态应用**：包括 Blackwing（杠杆交易）、Milkyway（流动性质押/再质押市场）、Civitia（链上社交/土地收益游戏）、Echelon（多 VM 借贷协议）、Intergaze（NFT 发射台，由 Stargaze 开发）

## 关键数据
- 主网开发进度：78%（2024年12月19日官方公告）
- 累计融资：约3150万美元（不含Binance Labs未披露金额）
- 融资轮次：种子轮 750 万美元 → A 轮 1400 万美元（Delphi Ventures、Theory Ventures、Hack VC 参与），估值 3.5 亿美元 → Echo 平台公开销售 250 万美元（估值 2.5 亿美元）
- A轮：1400万美元，估值3.5亿美元FDY；投资方包括Theory Ventures、Delphi Ventures、Hack VC
- 估值范围：社区轮2.5亿美元 → A轮3.5亿美元（估值上升，体现一级市场信心）
- Binance Labs投资（金额未披露），在11个Q1项目中属于较高机构认可度
- 代币供应分配：50%给VIP及预留流动性池、15%归属投资者、社区轮享受约30%折扣
- 在Cobie的Echo募资平台上完成了首笔销售（Echo至今仅完成过三次项目融资）
- 技术规格：CometBFT 共识 + 10,000+ TPS + 500ms 出块时间 + Celestia 数据可用性层
- 固定组件：Connect 原生预言机 + InitiaDEX（含 Minitswap）+ IBC + LayerZero + Celestia DA

## 竞争优势 / 护城河
- 主网进度公开透明（唯一明确披露百分比的Q1项目），不同于其他项目的信息模糊策略
- Binance Labs背书提供潜在的上币预期
- Cosmos生态内"L1+Rollup"架构差异化于Monad/Berachain等纯L1方案
- "意见性堆栈"（Opinionated Stack）策略：固定高质量默认组件（预言机/桥/DEX/DA）+ 灵活执行层（3 种 VM），降低开发者决策负担同时保证跨 Rollup 互操作性
- "世界编排层"（World Orchestrator）叙事定位：不同于以太坊"世界计算机"或 Solana"全球状态机"，Initia 强调协调而非执行

## 风险 / 争议
- 主网虽进度78%，但安全审计可能延长上线时间
- 赛道竞争激烈：同时期Berachain、Monad、Abstract等多个新L1争夺注意力和流动性
- 社区轮估值（$2.5亿）显著低于A轮（$3.5亿），可能引发社区轮投资者的抛售压力
- Initia 的 VIP + Cabal 经济飞轮理论上自洽，但 INIT 代币通胀率是否足以长期维持"贿赂市场"的激励水平尚未经过主网验证
- 主网原定 2025 年 3 月上线，实际进度存在延迟风险

## 相关实体
- [[berachain]] — 同期竞争L1，POL共识 vs Initia互操作Rollup架构
- [[monad]] — 同期竞争L1，Parallel EVM vs Initia Cosmos路线
- [[delphi-digital]] — Delphi Ventures 是 Initia A 轮投资方，Delphi Research 发布了 Initia 深度研报

## 来源
- [[来源_2025-01_Q1发币项目盘点_Berachain_Monad_OpenSea_PANews]]
- [[来源_2025-03_新公链_稳定币_顶级项目_PANews]]
- [[来源_2025-02_Initia_内置流动性_深潮TechFlow]]
- [[来源_2025-02_Initia_德尔福_交织Rollup_StacyMuur]]
