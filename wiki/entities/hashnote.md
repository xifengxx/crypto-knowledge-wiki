---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [rwa, tokenized-fund, stablecoins, circle]
aliases: [USYC, US Yield Coin, Hashnote USYC]
---

# Hashnote

## 基本信息
- **类型**: RWA tokenization protocol / tokenized money market fund
- **产品**: USYC（US Yield Coin）— 代币化货币市场基金
- **母公司**: Circle（2025年1月收购），原由 Cumberland Labs 孵化
- **成立时间**: 约2024年
- **定位**: 代币化短期美国国债收益产品，全球最大的代币化国债基金

## 核心业务/产品

Hashnote 发行 **USYC（US Yield Coin）**，一种生息型 ERC-20 代币，代表 Hashnote Short Duration Yield Fund（SDYF）的份额。基金底层资产为短期美国国债和回购协议（reverse repurchase agreements），产生的收益通过代币价格升值（NAV 上涨）传递给持有者，而非 rebase 或分红模式。

**关键特性**：
- **收益率**: 约 3.93% APY（7 日年化，2026 年），挂钩短期联邦基金利率
- **赎回**: T+0 即时赎回，24/7/365，赎回为 USDC
- **准入**: 仅限非美国机构投资者（KYC/KYB 白名单），最低投资 $100,000
- **托管**: 在主要经纪商处设置隔离账户
- **收益机制**: 代币价格随底层资产利息累积自然升值，无需质押或锁仓

**已部署网络**：Ethereum（ERC-20）、BNB Chain（2025 年 11 月上线）、Canton Network（隐私合规版本）

**主要用途**：
1. **生息抵押品** — 在 Deribit（交叉保证金）、Binance（机构端）等平台作为生息抵押品，持仓同时继续产生收益
2. **稳定币准备金** — 作为 Usual Money 的 USD0 稳定币的单一准备金来源
3. **Circle 生态整合** — 与 USDC 无缝转换，实现现金与生息抵押品的即时互换

## 关键数据

| 数据点 | 数值 | 时间 |
|--------|------|------|
| AUM | ~$221M（+156% QoQ） | 2024 年 8 月 |
| AUM | ~$1.52B（全球最大代币化国债基金） | 2025 年 1 月 |
| AUM | ~$2.2B | 2026 年 3 月 |
| 收益率 | ~3.93% APY（7 日年化） | 2026 年 |
| 最低投资额 | $100,000 | 持续 |
| 赎回方式 | T+0，24/7/365 即时赎回为 USDC | 持续 |
| 已部署网络 | Ethereum / BNB Chain / Canton | 持续 |
| 准入条件 | 非美国机构投资者，KYC/KYB | 持续 |

AUM 增长轨迹：$221M（2024.8）→ ~$1.52B（2025.1，被 Circle 收购时）→ ~$2.2B（2026.3），已成为全球最大的代币化国债产品，超越贝莱德 BUIDL。

## 竞争优势 / 护城河

1. **Circle 生态整合**：被 Circle 收购后，USYC 与 USDC 深度绑定，实现现金与生息资产的无缝互换。Circle 作为全球第二大稳定币发行方，拥有广泛的分销网络
2. **规模优势**：全球最大代币化国债基金，AUM 显著领先竞争对手（对比 BUIDL ~$29 亿 / 2025 年中为代币化国债 ~34% 份额，USYC 更大）
3. **T+0 即时赎回**：24/7/365 即时赎回为 USDC，解决传统 MMF 的 T+2 结算与 DeFi 即时流动性需求之间的矛盾
4. **合规架构**：SEC 注册基金，定期审计和公开披露，机构级安全
5. **生息抵押品场景**：在 Deribit、Binance 等平台作为生息抵押品，开辟"持仓生息+交易"的双重用途场景
6. **DRW/Cumberland 合作**：战略合作伙伴 DRW（Cumberland）是全球最大的机构加密货币流动性提供商之一，为 USYC/USDC 提供深度流动性

## 风险 / 争议

1. **利率敏感度**：收益率挂钩短期联邦基金利率，美联储降息周期中收益率将持续走低。2024 年底已进入降息周期，USYC 的吸引力将随利率下降而减弱
2. **机构围墙**：仅限非美国机构投资者，$100K 最低投资额排除了零售用户——这限制了市场规模和流动性深度
3. **监管风险**：处于 Crypto 与 TradFi 交叉点，面临双重监管不确定性；Genius Act 等法案可能影响生息稳定币的合规框架
4. **智能合约/操作风险**：链上合约漏洞、白名单机制的单点故障风险
5. **竞争对手**：贝莱德 BUIDL（$29 亿+ AUM，品牌+Circle USDC 通道）、Franklin Templeton BENJI、Ondo USDY 等持续追赶

## 相关事件时间线

- **约 2024**: Cumberland Labs 孵化 Hashnote，推出 USYC 代币化国债产品
- **2024.08**: USYC AUM $221M（+156% QoQ），在代币化国债市场中排名靠前
- **2024.12**: 作为 Usual Money USD0 的单一准备金来源，成为 DeFi 生态中 RWA 收益资产的核心组件
- **2025.01.21**: Circle 宣布收购 Hashnote，同时宣布与 DRW（Cumberland）建立战略合作伙伴关系；USYC AUM 达 ~$1.52B，成为"全球最大代币化国债和货币市场基金"
- **2025.11**: Circle 将 USYC 部署至 BNB Chain，扩展至 BSC 生态
- **2026.03**: USYC AUM 增长至约 $2.2B，巩固代币化国债赛道龙头地位
- **待补充**: USYC 与 Circle Arc（稳定币 L1）的整合进展、Canton Network 上更广泛的应用

## 我的判断

Hashnote/USYC 在 Circle 收购后进入了全新的发展阶段。如果说 BUIDL 是"贝莱德把 TradFi 搬上链"的标杆，那么 USYC 就是"Crypto 原生稳定币发行方反向整合传统收益资产"的标志性案例。Circle 收购 Hashnote 的战略意图非常明确：让 USDC 成为"现金层"，USYC 成为"收益层"，两者组合构成完整的链上金融基础设施。

与 BUIDL 相比，USYC 的优势在于与 USDC 的原生整合（同一个发行人生态），劣势在于 Circle 的机构信用不如贝莱德。但 USYC 的 T+0 USDC 赎回和已经验证的 DeFi 协议采用（Usual Money 等）说明其在 Crypto 原生场景中的实用性可能超过 BUIDL。

关键看后续：Circle 能否通过 Arc L1 进一步将 USYC 嵌入稳定币结算层的核心架构？如果能，USYC 将成为链上经济中"生息储备资产"的默认选项。

## 相关实体
- [[circle]] — 母公司，USDC 发行方，2025 年 1 月收购 Hashnote
- [[blackrock-buidl]] — 竞品，贝莱德代币化 MMF，$29 亿+ AUM
- [[usual-money]] — USYC 作为 USD0 稳定币的准备金来源
- [[securitize]] — 竞品代币化平台，BUIDL 的技术与合规伙伴
- [[rwa]] — RWA 概念页，代币化国债赛道的宏观框架
- [[stablecoins]] — 稳定币概念页，USYC 作为生息稳定币的一种形态

## 来源
- [[来源_2024-12_Usual_Money_USD0++_流动性蜜罐_PANews]] — USYC 作为 USD0 准备金来源的机制说明
- [[来源_2024-09_RWA六大核心资产_OKX_Ventures_深潮TechFlow]] — 2024 年 8 月 USYC AUM $221M 数据
- [[来源_2025-07-13_贝莱德BUIDL基金深度拆解]] — 竞品对比，RWA 代币化赛道竞争格局
- [[来源_2025-08_稳定币公链_分销_收益_Arc_Tempo_深潮TechFlow]] — USYC 作为"收益稳定币暗推"策略的分析
- [[来源_2025-01_USD0++脱锚_循环贷爆仓_Morpho清算_PANews]] — USYC 作为 USD0 准备金在脱锚事件中的相关分析
- [[来源_2024-08_Usual_Money_USD0_Pills活动_MarsBit]] — 2024 年 8 月 Usual 早期状态，USYC 作为单一准备金来源
