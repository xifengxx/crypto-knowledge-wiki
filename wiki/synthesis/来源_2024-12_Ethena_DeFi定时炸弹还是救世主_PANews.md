---
type: source
source_type: article
url: https://www.panewslab.com/zh/articledetails/1mdh4830.html
author: DC | In SF (编译: Block Unicorn)
date: 2024-12-23
ingested: 2026-06-29
tags: [ethena, defi, stablecoins, systemic-risk, delta-neutral]
---

## 阅读证据
- 总行数: 约105行(含尾部推广)
- Q1 (前25%): Ethena=DeFi历史上最成功协议：TVL从<$10M→$5.5B/年。TVL前十协议中6个与Ethena合作或本身是Ethena。如Ethena失败→AAVE/Morpho/Maker将面临不同程度资不抵债
- Q3 (中后25%): AAVE和Morpho清算机制风险：用户将sUSDe作为抵押品借USDC→如果大量同时清算+市场剧烈波动→USDe脱钩→可能产生$10亿级坏账。解决方案=AAVE DAO可承担代币和头寸责任但不立即出售抵押品(类似stETH在Beacon Chain提款前的处理)
- Q4 (最后25%): "不使用Ethena的风险"=被抛在后面。Pendle 50%TVL归因Ethena/Maker 20%收入/Morpho 30%TVL。Ethena基准利率~10% vs FFR 4.25%。stETH整合教训：AAVE 2022年3月整合stETH→超越Compound(直到2024年7月才整合)。Ethena正努力整合DEX
- 图片: 4张(Ethena运作机制/托管结构/铸造赎回/风险框架)

# Ethena 对 DeFi 来说是"不定时炸弹"还是"救世主"？

## 核心要点
1. **Ethena = DeFi历史上增长最快的协议**：TVL一年内从<$10M→$5.5B。USDe机制=持有BTC/ETH现货+做空等量合约→Delta中性→赚取做多交易者支付的资金费率。本质=利用加密市场缺乏复杂投资者(更愿赚收益而非简单做多)的套利
2. **三层风险架构**：(1)资金费率为负→保险基金$50M可覆盖当前TVL约1%损失；(2)托管风险→Copper/Ceffu为破产隔离信托(综合钱包+治理+保险)，理论上交易所倒闭也不影响抵押品；(3)流动性风险→大规模赎回时需同时出售衍生品+现货头寸→如果Ethena占总未平仓合约比例过高→NAV可能下降几个百分点
3. **USDe流动性≠偿付能力**：流动性不足≠破产。类比：借$10万给有$100万房产的朋友→他可能明天拿不出现金但最终能还→贷款健康但缺乏流动性。链上USDe/sUSDe流动性约$7000万，大规模赎回时基于意图的流动性可能枯竭
4. **"AAVETHENA"协同效应**：AAVE整合sUSDe后TVL+$80亿(+80%)。Ethena基准利率~10%(>FFR 4.25%的2倍)→提升了整个DeFi的借贷均衡利率。不使用Ethena=被抛在后面(类比Compound拒绝stETH→被AAVE超越)
5. **最大系统性风险=清算级联**：用户将sUSDe作为抵押品借USDC→大量同时清算+流动性不足→sUSDe脱钩→AAVE/Morpho坏账。Morpho因独立金库结构隔离风险更好；AAVE的核心池模式可能面临全池受损

## 关键数据
- Ethena TVL: <$10M→$5.5B (~550x / 1年)
- TVL前十协议中6个与Ethena合作
- 保险基金: ~$50M(覆盖约1%TVL)
- 链上USDe/sUSDe流动性: ~$7000万
- Pendle TVL的50%归因Ethena | Maker/Sky收入的20% | Morpho TVL的30%
- Ethena基准利率: ~10% vs FFR 4.25%(无风险利率)
- AAVE整合sUSDe后TVL+$80亿

## 与已有知识的关系
- 补充 [[ethena]] 实体页 — USDe机制/风险架构/DeFi系统性重要程度
- 补充 [[defi]] — Ethena如何成为DeFi的新"基础资产"(类似stETH在2020-2022年的角色)
- 与 [[aave]] 关联 — sUSDe整合+清算风险+AAVETHENA协同
- 与 [[lido]] 对比 — stETH vs USDe：两者都是DeFi收益基座，但风险特征截然不同(流动性风险 vs 削减风险)
- 与 [[pendle]] 关联 — Pendle TVL 50%由Ethena驱动
- ⚠️ "新Luna"争议：作者明确反对这一类比(Luna是内生抵押螺旋死亡，Ethena是Delta中性套利)

## 值得记住的引用
> "Ethena 是 DeFi 历史上最成功的协议。大约一年前，其总锁仓量不到 1000 万美元，而如今已增长至 55 亿美元。"
> "不使用 Ethena 的协议可能会面临收益率较低、需求较低的风险……那些没有使用 Ethena 或以某种方式与其产品互动的知名平台，基本上已经被抛在了后面。"
> "破产本质上意味着流动性应该是不存在的，但有限的流动性并不意味着资产破产。"
> "Compound 更注重将风险降至最低，可能到了荒谬的极端程度……这个时间点正好是 AAVE 开始超越 Compound 的时候。"

## 我的笔记
这是目前关于Ethena最全面、最平衡的分析之一。作者明确区分了"Luna式内生螺旋"(抵押品即代币本身→价格下跌→更多铸造→更多下跌)和Ethena的Delta中性策略(现货+期货对冲→赚取资金费率)。核心框架"流动性风险≠偿付能力风险"非常有用——它解释了为什么Ethena在2024年8月的大规模提款(约$2B赎回)中存活并复原。但从投资角度：Ethena最大的风险不是它自身失败，而是它变得"太大而不能倒"后对整个DeFi的系统性风险。如果USDe市值增长到$20-30B并成为多个协议的核心抵押品，一次严重的资金费率反转(类似2022年熊市)可能触发连锁清算——Morpho的独立金库结构比AAVE的核心池更能承受这种冲击。另外值得注意的是作者对"不使用Ethena的风险"的分析：这本质上是DeFi的"采用FOMO"——就像早期拒绝stETH的Compound被AAVE超越一样。但历史也可能重复另一面：当stETH在2022年6月短暂脱钩至0.93 ETH时，过度依赖stETH的协议也承受了巨大压力。
