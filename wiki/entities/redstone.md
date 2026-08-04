---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [oracle, rwa, defi, infrastructure]
---

# RedStone

## 基本信息
- 类型：模块化区块链预言机（Oracle）
- 专长：收益率资产（yield-bearing assets）数据喂价，尤其适用于RWA、LST、LRT
- 覆盖链数：100+（文章时点 70+ 条链，含 Starknet/Fuel/NEAR/TON/Tron/Casper/Stacks 等非 EVM 链）
- 客户数：130+
- 代币: RED（ERC-20，最大供应 10 亿枚，TGE 初始流通 30%，70% 锁仓 4 年；2025年2月12日公布代币经济学，尚未上线）
- 核心合作伙伴：[[securitize]]（主预言机提供商）、[[ethena]]、[[morpho]]、Drift、Compound、ether.fi、Lombard、Pendle
- **团队**: Jakub Wojciechowski (联合创始人兼CEO), Marcin Kazmierczak (联合创始人兼COO), Alex Suvorov (联合创始人), Matt Gurbiel (Head of BD)
- **融资**: 累计 $22M（种子轮 $7M 2022.08 由 Coinbase Ventures/Blockchain Capital 领投；Series A $15M 2024.07 由 Spartan Group 领投，IOSG Ventures/Amber Group/Arrington Capital 等参投）
- 官网：https://redstone.finance
- 社交媒体：https://x.com/redstone_defi

## 核心业务/产品
1. **RWA/NAV预言机**：为代币化资产提供NAV（净资产价值）为基础的定价机制，处理日频更新的定价、合规检查、流动性折扣等复杂场景。与传统DeFi实时价格预言机不同，RWA预言机依赖单一权威来源（如基金管理员）的每日NAV估值，并面临T+1清算节奏等独特挑战
2. **RedStone BOLT**：为MegaETH等高速区块链设计的毫秒级预言机（2025年4月发布），"the fastest blockchain oracle to date"
3. **标准DeFi预言机**：为100+链上的DeFi协议提供价格数据
4. **混合拉取-推送架构**：2022年1月首创拉取式预言机（Pull Oracle），比 Chainlink（2023年10月）和 Pyth（2022年12月）领先，支持 dApp 按需获取链下数据而非被动接收推送，显著降低 Gas 成本和链上拥堵。Push 模式作为可选项供需要持续更新的协议使用
5. **数据分发层（DDL）**：聚合 CEX（Binance/Coinbase/Bybit）、DEX（Uniswap/Trader Joe/Sushiswap）和聚合器（CoinGecko/CoinMarketCap）数据，使用 TWAP 和 LWAP 方法论验证，签名后存储于链下，历史数据归档至 Arweave 实现不可篡改审计追踪

6. **[[clara]]（AI Agent 通信协议）**：基于 Arweave 的 AO 计算层开发的 AI Agent 互通信协议，突破了传统区块链单线程执行限制，支持无限并行处理。Clara 包含 Marketplace（任务匹配与结算）、Channel（消息同步/队列/排序）、标准化消息协议三大组件，目标是为 AI Agent 打造专用的 M2M 通信基础设施。

## 2025年6月RWA报告
2025年6月26日，RedStone 发布《Real-World Assets in Onchain Finance Report》，与 Gauntlet 和 RWA.xyz 联合制作，是行业最全面的 RWA 全景研报之一。报告覆盖 RWA 市场 $240 亿规模、代币化国债/私募信贷/大宗商品/股票/另类基金各细分赛道、预言机技术架构、跨链部署对比（7条公链+5条机构链）、关键协议深度分析（Securitize sToken、Morpho v2、Ethena USDtb 等）。

## 竞争优势 / 护城河
- RWA预言机技术领先性：RWA定价需要混合NAV计算、合规验证、非流动性调整等传统预言机不支持的能力
- 与Securitize的深度绑定：作为Securitize的"primary blockchain oracle provider"，支持所有sToken用例
- 技术储备：在 ZK-proofs、Web Proofs 等下一代预言机验证技术上持续研究，计划推出新的RWA预言机标准
- 模块化架构：跨100+链部署
- 极端行情性能优势：2024年2月20亿美元清算事件中24小时推送11.9万次更新（ETH/USDC更新超Chainlink 30个点）；2024年4月ezETH脱钩事件中3个区块内发布约40次价格更新（Chainlink同期约20次）
- Pull+Push双模式提供灵活性：项目可选用经过过滤验证的标准价格喂价或定制化原始数据流
- AVS链下验证降低Gas成本：通过EigenLayer AVS框架在链下完成大部分计算工作，同时保持信任和可验证性

## 关键数据
- 覆盖 100+ 区块链网络（文章时点 70+ 条链，130+ 客户）
- TVS 排名通用预言机第三（仅次于 Chainlink 和 Pyth）
- 集成 EigenLayer AVS + Symbiotic 再质押，支持 RED 质押者赚取 ETH/BTC/SOL/USDC
- 当前（文章时点）仍有 5 个许可节点运行，计划通过 RED 代币和 EigenLayer AVS 实现完全去中心化
- 历史价格数据存档在 Arweave 上
- Securitize首选预言机合作伙伴（2025年3月）
- 自称"the market leading RWA oracle solutions"
- RED 代币经济学：2025 年 2 月 12 日公布，最大供应 10 亿枚，初始流通 30%，70% 锁仓 12 个月，随后 36 个月逐步解锁
- RED 代币分配：48.3% 社区增长（空投+激励），20% 核心贡献者
- 2024年TVS超68亿美元，与超100个新客户合作，覆盖超30条链，成为第二大多链预言机提供商
- 2024年2月20亿美元清算事件中24小时推送11.9万次更新
- 2024年4月ezETH脱钩事件中3个区块内发布约40次价格更新（Chainlink同期约20次）
- 以Pyth 20亿美元FDV为基准，预计RED美元交易价格约为2美元
- RED 支持再质押版本（LRT），可在DeFi协议中使用获取额外收益
- 2025年6月联合发布行业最大RWA全景研报

## 相关事件时间线
- 2024-07: 完成1500万美元A轮融资，由Spartan Group领投，IOSG Ventures/Amber Group/Arrington Capital等参投
- 2025-02-12: 公布RED代币经济学（总供应10亿枚，48.3%社区增长，70%锁仓12个月）
- 2025-02-23: KOL Poopman发布RedStone五角度分析文章（即本文），以Pyth $2B FDV为基准预测RED=$2
- 2025-03-12: 被Securitize选为首要区块链预言机合作伙伴
- 2025-04-08: 发布RedStone BOLT——"the fastest blockchain oracle to date"
- 2025-06-26: 发布《Real-World Assets in Onchain Finance Report》，与Gauntlet和RWA.xyz联合制作

## 安全与去中心化路线图
文章指出 RedStone 当前架构仍存在中心化元素，但有三项去中心化推进计划：
1. RED 代币上线：用于预言机支付、质押激励和争议治理
2. RedStone AVS：利用 EigenLayer 加密经济安全模型增强信任最小化
3. 无需许可节点：将数据验证责任分散至更广泛的网络

## 风险 / 争议
- RWA预言机的单一权威定价源（如Apollo的基金管理员）构成中心化风险，日频NAV更新无法捕捉日内信用事件
- 当前 5 个许可节点的架构仍不够去中心化，缺乏对不准确数据提交的即时惩罚
- RedStone在报告中对自己的技术评价缺乏第三方独立验证，有明显的自我推广动机
- RWA预言机作为新兴赛道，尚缺乏市场验证和大规模压力测试
- RED 代币尚未上线，代币经济模型的实际效果有待验证

## 相关实体
- [[securitize]] — 首要合作伙伴，sToken框架的预言机提供商
- [[ethena]] — USDtb/BUIDL的预言机支持
- [[morpho]] — 杠杆RWA策略的预言机支持
- [[gauntlet]] — RWA策略风险管理合作
- [[chainlink]] — 主要竞争对手，同样在布局RWA预言机

## 来源
- [[来源_2025-06_链上金融_RWA_RedStone]]
- [[来源_2025-02_预言机_机构信任_Chainlink]] — insights4.vc 三大预言机横向对比：RedStone 融资明细（$22M 累计）、RED 代币经济学（10 亿供应/30% 初始流通/4 年解锁）、混合拉取-推送架构/DDL/Arweave 存档、5 个许可节点的中心化现状及去中心化路线图、全球拉取式预言机领先（2022 年 1 月首创 vs Chainlink 2023 年 10 月）
- [[来源_2025-02_预言机_RedStone_TGE_代币经济_深潮TechFlow]] — 2025年2月预言机项目RedStone五角度深度分析：模块化架构与AVS优势、市场占据（68亿美元TVS/超100客户/超30条链/第二大多链预言机）、三大预言机横向对比（Chainlink/Pyth/RedStone）、极端行情性能数据、RED代币经济与估值预测
