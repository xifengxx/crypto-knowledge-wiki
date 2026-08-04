---
type: entity
entity_type: company
created: 2026-06-28
updated: 2026-07-02
tags: [rwa, compliance, infrastructure]
---

# Securitize

## 基本信息
- 定位：RWA 代币化平台 + 合规技术服务商
- 核心角色：代币化平台、转让代理（Transfer Agent）、配售代理、KYC/AML 网关
- 关键合作伙伴：[[blackrock-buidl]]、Apollo（ACRED）、VanEck（VBILL）
- 贝莱德已对 Securitize 进行战略投资，Joseph Chalom（贝莱德战略合作关系全球主管）加入董事会

## 核心业务
为传统金融机构提供资产代币化的一站式服务：
1. **代币化平台**：将基金份额数字化，管理链上发行/赎回/股息分配
2. **转让代理**：记录所有权变更，合规托管
3. **配售代理**：向合格投资者推广和销售代币化基金
4. **合规网关**：KYC/AML 审查 + 白名单维护
5. **稳定币合作**：与 [[ethena]] 联合开发 USDtb 稳定币，依托 [[blackrock-buidl]]，连接美元、短期国债和回购协议
6. **自有链 Converage**：因以太坊交易吞吐量、延迟和 Gas 费用等局限性，Securitize 已扩展至 Solana 和 Polygon，并正在开发自有区块链 [[converage]]（详见 Tiger Research 分析）

## sToken 框架
sToken 是 Securitize 的核心技术创新，将传统投资基金的份额转化为 DeFi 兼容资产而不失去监管保护。其工作机制：

1. 原生代币化证券（含嵌入式合规限制）不能直接用于 DeFi
2. 通过 sVault 技术存入后，铸造 DeFi 兼容的 sToken（基于 ERC-4626）
3. sToken 自动校准至底层资产 NAV（如 Apollo ACRED 的每日估值）
4. 交易执行仅对白名单投资者集启用，保持合规边界

已知 sToken 实例：sACRED（Apollo 信贷基金）、sBUIDL（BlackRock 代币化国债）。sACRED 已与 Gauntlet、Morpho、Kamino、Drift Institutional 集成实现杠杆策略。

## 关键数据
- 平台代币化资产 AUM：$40 亿+（2025 年 5 月），约 30% 代币化市场总份额
- 核心产品：BUIDL（$29 亿）、ACRED（Apollo $10 亿基金）、VBILL（VanEck）
- 贝莱德投资 + 董事会席位 = 深度战略绑定
- Solana 集成：ACRED 和 VBILL 均通过 Securitize 合规框架（sToken）在 Solana 上发行（2025.5）
- Drift Institutional 与 Securitize 合作将 ACRED 引入 Solana 机构流动性池
- SEC 注册转让代理、FINRA 成员经纪-交易商、自有替代交易系统（ATS）

## 我的判断
Securitize 是 RWA 赛道的"铲子商"——它不发行资产，但几乎所有机构级 RWA 产品都跑在它的合规框架上。它是「许可制 DeFi」的基础设施层。sToken 框架解决了 RWA 在合规和 DeFi 可组合性之间的核心矛盾，是目前最成熟的解决方案。Solana 上的 ACRED 和 VBILL 部署表明 Securitize 正在从以太坊单链扩展到多链。

## 相关实体
- [[blackrock-buidl]] — 最大客户和战略投资方
- [[circle]] — 同属合规金融基础设施层
- [[apollo-acred]] — Solana 上通过 Securitize 发行的代币化信贷基金
- [[solana]] — Securitize 多链扩展的重要目标网络
- [[converage]] — Securitize 正在开发的 RWA 自有链

## 来源
- [[来源_2025-04_RWA布局_10项目_PayFi_Biteye]] — 补充 BUIDL 2025 年规模突破 10 亿美元、获 CNMV 投资公司牌照、与 BlackRock/Apollo 合作细节
- [[来源_2023-03_花旗RWA_代币化_区块链十亿用户]] — KKR 于 2022 年底通过 Securitize 在 Avalanche 上代币化医疗保健基金
- [[来源_2025-07-13_贝莱德BUIDL基金深度拆解]]
- [[来源_2024-12_ArkStream_Ethena投资逻辑_深潮TechFlow]] — 与 Ethena 联合开发 USDtb 稳定币，依托 BlackRock BUIDL
- [[来源_2024-09_RWA六大核心资产_OKX_Ventures_深潮TechFlow]] — BUIDL通过Securitize发行达$510M(+74% QoQ)/Securitize为代币化国债市场第一大发行平台/贝莱德→Securitize→DeFi协议产业链
- [[来源_2025-06_链上金融_RWA_RedStone]] — sToken 框架技术架构详解、sVault 机制、$40 亿 AUM/30% 市场份额数据、sACRED/sBUIDL DeFi 集成策略
- [[来源_2025-05_Ondo_RWA龙头_代币估值_深潮TechFlow]] — 竞争对比：Securitize 42.11%市占率（$29.12亿 BUIDL）vs Ondo 17.01%（$11.7亿）；Securitize持ATS牌照但BUIDL仅工作日特定赎回，Ondo无牌照但全年无休即时赎回；Securitize侧重机构大客户，Ondo持有人数占市场90%+
- [[来源_2025-08_a16z_银行_资管_Fintech_区块链转型_深潮TechFlow]] — a16z详细介绍Securitize在代币化基金发行中的角色：帮助Apollo创建ERC-4626合规版本sACRED在Morpho上实现杠杆循环策略；作为数字化转让代理将传统转让代理的功能适配到区块链环境
- [[来源_2025-06_以太坊_RWA_主导地位_TigerResearch]] — Tiger Research 分析以太坊主导地位与挑战者，明确 Securitize 因以太坊限制扩展至 Solana/Polygon 并开发自有链 Converage
- [[来源_2025-06_以太坊RWA_监管变局_BUIDL_Etherealize_BlockBeats]] — 以太坊RWA协议维度排名中Securitize总价值显著超越FDUSD/USDC等部分稳定币项目跃居前列；sBUIDL进一步解锁DeFi集成场景
