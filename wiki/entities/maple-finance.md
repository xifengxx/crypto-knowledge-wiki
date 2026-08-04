---
type: entity
entity_type: protocol
created: 2026-06-29
updated: 2026-07-02
tags: [rwa, lending, private-credit, yield, solana, institutional]
---

# Maple Finance

## 基本信息
- syrupUSDC：收益型稳定币，市值约 $5.5 亿（来源：[[来源_2025-06_收益型稳定币_总清单_StacyMuur]]）
- 定位：链上资产管理平台（On-Chain Asset Manager），非简单 DeFi 借贷中介
- 成立时间：2019 年
- 核心产品：Maple Institutional（Blue Chip/High Yield 贷款）、BTC Yield（比特币收益产品）、syrupUSDC/USDT（零售收益池）
- 目标 APY：6-7%（syrupUSDC），示例贷款利率 12.5%
- 2025 年里程碑：TVL $4B+、协议收入 $25M+、TradFi 伙伴贷款 $100M+
- 2030 年目标：$1000 亿年贷款量（较当前 $22 亿增长约 45 倍）
- syrupUSDC 市值：$7,070 万（2025.7，Solana），但整体 syrup 池吸引约 $19 亿 USDC/USDT
- 底层资产：Maple 信贷池，向贸易公司、做市商和金融科技公司提供担保贷款

## 核心业务/产品

### Maple Institutional（贷款产品）
- **Blue Chip**：保守型，仅接受 BTC/ETH 作为抵押品，严格风险管理
- **High Yield**：进取型，通过主动管理抵押品（质押、二次借贷）产生额外收益
- 贷款流程：Maple Direct（内部咨询部门）进行信用评估后确定利率和条款
- 2025 年达成：首个 TradFi 合作伙伴贷款超 $1 亿

### BTC Yield（资产管理产品）
- 2025 年初推出，解决机构"持有 BTC 但不具备专业收益生成能力"的痛点
- 通过 Core DAO 双重质押运作：BTC 存放于 BitGo/Copper 等机构级托管方，锁定后获得质押收益
- 技术复杂度（托管合约、Core DAO 质押、$CORE 收益转换）是机构选择外包而非自管的核心理由

### syrupUSDC / syrupUSDT
- 零售侧收益池，面向非合格投资者
- 资金出借给 Blue Chip / High Yield 池中的机构借款人（经同样信用评估）
- Drips 奖励系统：每 4 小时累积积分，季末兑换 SYRUP 代币
- 整体 syrup 系列吸引约 $1.9B 资金
- 在 Solana 链上可组合：Kamino（$4,700 万）、Orca（DEX）、Spark（$3 亿分配）
- 集成 Pendle PT/YT 机制，允许用户自定义收益敞口

### $SYRUP 代币
- 治理代币，持币者承担类似"股东"的治理角色
- 获得协议收入资助的质押奖励
- 20% 协议收入用于代币回购

## 历史数据快照（2025 年 2 月）

根据 OurNetwork On-314 报告（2025.02）：

- **TVL**：突破 6 亿美元（2025 年初）
- **MPL → SYRUP 迁移**：2024 年 11 月启动，重新引入质押功能
- **SYRUP 质押率**：超过 50% 流通供应量已质押
- **回购力度**：1 月份收入的 20% 用于回购 SYRUP
- **收益对比**：Syrup 净收益率超过 Aave 的两倍，比 Ethena 的 sUSDE 高出 50%
- **抵押率**：平均抵押率超过 165%
- **市场波动表现**：2025 年 2 月初市场波动导致清算量创新高，但 Maple 和 Syrup 吸引近 4000 万美元新存款

## 竞争优势

### 机构级定位而非普通 DeFi
- Maple 自定位为"链上资产管理者"（On-Chain Asset Manager），执行结构化信用评估、主动抵押品管理、顺序提款等传统银行操作
- 团队由 TradFi+加密复合背景的专业人士组成，能获得机构信任

### 团队背景
- CEO Sidney Powell：NAB（National Australia Bank）和 Angle Finance 资产管理部门
- 联合创始人 Joe Flanagan：PwC 企业财务分析顾问，后任 Axsesstoday CFO
- CTO Matt Collum：Wave HQ 高级工程师，Every（金融科技）创始人
- COO Ryan O'Shea：Kraken 战略部门
- 资本市场主管 Sid Sheth：德意志银行机构销售
- 产品主管 Steven Liu：Amazon 产品管理 + Anchorage Digital 金融科技

### 差异化风控体系
- 贷前：Maple Direct 信用评估 + 超额抵押偏好
- 贷中：24 小时补充抵押品通知期（非即时清算）
- 清算：OTC 做市商交易减少市场影响，非公开市场抛售
- 提款：顺序/分批处理，给用户确定性的资金可用预期

### 生态合作伙伴
- [[spark-protocol]] — $3 亿分配至 syrupUSDC
- [[pendle]] — PT/YT 收益定制化集成
- Cantor Fitzgerald — 比特币融资合作，最高 $2B
- BitGo / Copper — BTC Yield 托管合作方
- Core DAO — 双重质押技术提供方

## 风险
- 私人信贷违约风险（Maple 历史上在以太坊上有过 $6,930 万违约事件，Three Arrows Capital/FTX 关联）
- 新兴产品，运营历史短
- 信贷池借款人集中在加密原生机构，集中度风险
- 本文章由 Maple Finance 部分资助（sponsored content），正面偏向需审慎对待

## 相关事件时间线
- 2019: Maple Finance 成立
- 2022-2023: Three Arrows Capital / FTX 影响导致 ~$5,200-$6,930 万坏账
- 2024年12月: 发布 2025 年战略路线图
- 2025年初: 推出 BTC Yield 产品
- 2025年6月: syrupUSDC 在 Solana 上线
- 2025年中: TVL $4B+、协议收入 $25M+、Cantor Fitzgerald $2B 合作宣布

## 相关实体
- [[kamino]] — syrupUSDC 最大 Solana 配置平台（$4,700 万）
- [[ondo-finance]] — 同为收益稳定币（USDY），竞争关系
- [[centrifuge]] — 同为私人信贷赛道
- [[spark-protocol]] — $3 亿分配至 syrupUSDC
- [[pendle]] — PT/YT 机制集成
- [[tiger-research]] — 发布本文分析报告
- [[michael-saylor]] / [[microstrategy]] — 文中引用为机构入场案例

## 来源
- [[来源_2025-04_链上借贷_低抵押贷款_Reflexivity]] — 1,600% 增长数据（$32M → $562M）、61 次保证金追缴平均 3 小时处理、委托代表制+奖金策略
- [[来源_2025-07_Maple_Finance_机构资本_链上资产管理_TigerResearch]] — 本文（主来源）：Maple 完整定位、团队详情、三项核心产品全景、2025 年里程碑、Cantor Fitzgerald 合作
- [[来源_2025-06_Solana_RWA_全面概述_Helius]] — syrupUSD 扩展至 Solana 的完整数据：$52.8M 发行（价值 $5850 万），6.52% APY，经 Chainlink CCIP 跨链，与 Kamino/Orca 集成；Maple 历史累计贷款 $33 亿，活跃贷款 $7.76 亿
- [[来源_2025-07_Messari_Solana_RWA_赛道]]
- [[来源_2023-04_RWA_大机构布局_币安高盛_ChainCatcher]] — 2023年因三箭资本/FTX暴雷出现5200万美元坏账/因KYC要求"不够去中心化"备受争议/专业信用审查人审核机制/已拓展真实资产抵押放贷模式降低风险
- [[来源_2024-09_RWA六大核心资产_OKX_Ventures_深潮TechFlow]] — 与TrueFi/Goldfinch并列为链上私人信贷代表项目/6大协议活跃贷款$88.8亿(+43% YoY)/同时提供美债+私人信贷双产品线
- [[来源_2023-07_RWA_底层资产_业务结构_潜在机遇]] — Maple Finance与Ondo Finance、MakerDAO并列为推出基于美国国债收益投资产品的代表项目，将KYC作为获客不可或缺流程，是RWA合规获客的先行案例
- [[来源_2025-02_RWA_链上资产_BUIDL_OurNetwork]] — 补充 2025 年 2 月数据：TVL $6 亿、SYRUP 质押率 >50%、收入 20% 回购、>2x Aave/yield 对比、165%+ 抵押率、$4000 万新存款
