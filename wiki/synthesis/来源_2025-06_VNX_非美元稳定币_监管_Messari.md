---
type: source
source_type: article
url: https://messari.io/report/vnx-a-regulatory-grade-issuance-layer-for-non-usd-stablecoins
date: 2025-06
ingested: 2026-07-02
---

# VNX：非美元稳定币的监管级发行层 | Messari 研报

## 阅读证据
- 总行数: 117
- Q1 (前25%): 美元稳定币占 $2494 亿美元稳定币市场的 98% 以上，非美元稳定币面临"流动性鸡和蛋"问题 -- 低采用导致浅市场，进一步抑制使用
- Q3 (中后25%): VEUR 流通量 2,633,064 枚，市值 €2,630,058，其中仅 3,006 VEUR 被冻结。VNX 通过实时仪表盘公开每枚稳定币的流通量和市值
- Q4 (最后25%): VCHF 累计交易量 1.123 亿瑞士法郎，Solana 已成为主导网络，2024 年初开始交易量显著攀升并持续至 2025 年
- 图片: 0 analyzed / 0 decorative skipped / 2 external URL charts unavailable（来自 cdn.sanity.io 的 VNX 指标图表，未下载到本地）

## 核心要点
- VNX Commodities AG 是列支敦士登注册的合规发行平台，受列支敦士登金融市场管理局（FMA）依《区块链法案》监管，发行非美元稳定币（VCHF/VEUR/VGBP）和黄金代币 VNXAU
- 非美元稳定币的历史滞后源于美元作为全球储备货币的深层网络效应和流动性鸡蛋问题，但欧盟 MiCA 法规的出台正创造结构性拐点
- VNX 稳定币采用独特双层锚定：法币参考代币（FRT）最初由 VNX Gold 抵押支持，但实践中已转为银行账户中 1:1 法币全额支持，经 Areva General Auditing 和 Trust Company Limited 审计确认
- 平台支持多链发行（以太坊 ERC-20、Solana SPL、Stellar），通过销毁-铸造桥接实现跨链互操作，流动性主要集中在 Solana
- VNX 代币采用 ve-tokenomics 模型，锁定可获 veVNX 治理权和协议奖励，并设 KPI 解锁计划、与 SwissBorg 联合开发的底价保护机制
- VCHF 是采用最广泛的资产（112.3M 累计交易量），VEUR 已处理 120 万+笔交易，VGBP 是最新发行的英镑稳定币之一（79,523 笔交易），VNXAU 持有者 1,343 个独立钱包

## 关键数据
- 美元稳定币占 $2494 亿稳定币市场的 98%+（截至 2025 年 5 月 23 日）
- VCHF 累计交易量 1.123 亿瑞士法郎，130 万笔总交易，957 个独立持有者
- VEUR 累计交易量 1.036 亿欧元，120 万笔总交易，695 个独立持有者
- VGBP 累计交易量 270 万英镑，79,523 笔总交易，543 个独立持有者
- VNXAU 累计交易量 114,813 VNXAU，367,185 笔总交易，1,343 个独立持有者
- VEUR 流通量 2,633,064 枚，市值 €2,630,058（冻结仅 3,006 VEUR）

## 与已有知识的关系
- 补充 [[stablecoins]] — 这是 wiki 中首个专门覆盖非美元（CHF/EUR/GBP）稳定币发行平台的资料，填补了"98% 美元独大"叙事下非美元生态的系统性空白。VNX 的结构（欧盟 MiCA 合规 + 列支敦士登许可 + 多链发行 + 金本位演进到法币储备）为稳定币概念页增加了监管级非美元发行案例
- 补充 [[rwa]] — VNXAU 作为黄金代币化产品（1 代币 = 1/1000 公斤金条，直接合法所有权），可补充到 RWA 页面的代币化商品类别中（现有记录 PAXG/XAUT）
- 补充 [[genius-act]] — MiCA 作为欧盟对等监管框架，为理解 GENIUS Act 的全球监管竞赛提供了欧洲侧参照

## 值得记住的引用
> "Despite the proliferation of stablecoins as one of the most widely adopted applications in crypto, the market remains overwhelmingly concentrated in USD-denominated assets. As of May 23, 2025, over 98% of the $249.4 billion stablecoin market is concentrated in USD-pegged stablecoins like USDT, USDC, and USDS."

> "VNX's stablecoin model is underpinned by its gold-backed token, VNX Gold... Fiat-referenced tokens (FRTs) are not freely issued to the public. Instead, they are created upon customer request and are backed by a reserve held with VNX, typically composed of VNX Gold or equivalent assets."

> "Adoption trends point to early momentum. VCHF has surpassed 112 million in transaction volume, VEUR has processed over 1.2 million transactions, and VNXAU is held by more than 1,300 unique wallets. Solana has emerged as a key driver of VCHF growth."

## 我的笔记
- VNX 的商业模式本质上是对 Tether/Circle 的"小国合规套利"：选择列支敦士登（欧盟关联小国）注册，利用 MiCA 框架的合规红利，在 USDC/USDT 主导的美元稳定币之外寻找欧元/瑞郎/英镑的监管空白。这个定位聪明但天花板明显——欧元区 DeFi 规模远小于美元，且欧元稳定币面临央行直接发行数字欧元的长期竞争风险。
- 报告是 Messari 为 VNX 撰写的付费报告（开头明确标注"commissioned by VNX Commodities AG"），分析深度有限，更像产品说明而非独立第三方研究。关键信息（如 VCHF 交易量的真实终端用途——多少是真实支付、多少是内部转账或做市刷量）未披露，数据说服力打折。
