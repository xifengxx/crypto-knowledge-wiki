---
type: source
source_type: article
url: https://www.theblockbeats.info/news/58820
date: 2025-07-06
ingested: 2026-07-02
---

# xStocks 十问全解：美股代币交易的运作原理、套利机会与争议

## 阅读证据
- 总行数: 128
- Q1 (前25%): xStocks 平台支持英伟达、Coinbase、伯克希尔哈撒韦、苹果、亚马逊、特斯拉等 61 种美股代币，具备 7×24 小时可交易、可自由转让、免交易费（仅限 Kraken 渠道）等优势。
- Q3 (中后25%): xStocks 服务不可用于美国、伊朗、朝鲜、叙利亚等高风险司法管辖区；持有代币没有投票权或分红权；买卖无需 KYC，但 Backed 平台本身需要 KYC。
- Q4 (最后25%): Backed 三位联合创始人 Adam Levi、Yehonatan Goldman、Roberto Klein 均为"归零"项目 DAOstack 核心成员，$GEN ICO 募资约 3000 万美元后放任代币归零；xStocks 暂无发币计划，但团队背景引发社区信任疑虑。
- 图片: 0 analyzed / 8 decorative external URLs unavailable

## 核心要点
- xStocks 由 RWA 资产发行商 Backed 与 Kraken 联合推出，在 Solana 上发行 1:1 美股代币（共 61 种），上线短短 2 天即引爆加密市场合作热情，Bybit、Raydium、Jupiter、Chainlink、AlchemyPay、GMGN、Backpack 等平台纷纷加入联盟阵营。
- 代币化的底层流程为：注册在瑞士的母公司控制泽西岛的 Backed Assets，通过盈透证券 IBKR Prime 通道在美股市场买入股票，转移至 Clearstream（德交所存管机构）的隔离账户，触发 Solana 链上合约 1:1 铸造代币。
- 托管机构为三家：Maerki Baumann & Co. AG（瑞士私人银行，1932 年成立）、InCore Bank AG（瑞士 FINMA 监管银行）、Alpaca Securities LLC（美国券商，2015 年成立）。
- 代币化股票不赋予持有人投票权或分红权；平台现阶段未设置做市商角色；买卖无需 KYC，但 Backed 平台本身需要 KYC。
- Jupiter 联合创始人 siong 指出经典 AMM 不适合股票代币，需要新的 AMM 设计；慢雾创始人余弦警示监管风险、价格操控风险和短时波动风险。
- Backed 团队的三位联合创始人上一段币圈经历为"归零"项目 DAOstack（$GEN ICO 募资约 3000 万美元后放任归零），引发社区对发行方长期信誉的担忧。xStocks 官方暂无发币计划。

## 关键数据
- xStocks 平台支持 61 种美股代币，包括英伟达、Coinbase、伯克希尔哈撒韦、苹果、亚马逊、特斯拉、标普 500 指数等。
- 赎回机制费用：当前不收取管理费（未来可能最高年化 0.25%），买入和赎回时最多收取投资价值的 0.50%（最低 100 美元），金额会因管理费、外汇对冲误差、货币转换等调整。
- DAOstack 通过 $GEN ICO 募资约 3000 万美元，项目 2020 年停止更新，代币逐步归零。
- Backed 明确不服务于美国、伊朗、朝鲜、叙利亚等高风险司法管辖区，声明"不向美国人士出售其代币"。
- 加密生态合作方完整名单：CEX 渠道 Kraken、Bybit、Crypto.com；Solana 生态 Raydium、Kamino、Jupiter；钱包 Solflare、FORDEFI；预言机 Chainlink；支付 AlchemyPay；其他 GMGN、Backpack。

## 与已有知识的关系
- 补充 [[backed]] — 提供 xStocks 的具体运营细节：61 种代币的精确数量、三家托管方（Maerki Baumann/InCore Bank/Alpaca Securities）、Clearstream 存管流程、IBKR Prime 交易通道、赎回费用结构（当前 0%，未来最高 0.25% 管理费，买卖 0.50% 最低 $100），以及"无做市商""买卖免 KYC""Backed 无发币计划"等此前未记录的信息。
- 补充 [[rwa]] — 美股代币化的 xStocks 具体实现案例：Solana 链上 SPL 代币、Clearstream 等受监管托管架构、"时区套利/跨市场套利/事件驱动套利"三种套利策略、经典 AMM 不适用于股票代币的业界判断。
- 关联 [[solana]] — xStocks 完全基于 Solana 发行和铸造，与 Solana 生态 DeFi 协议（Raydium、Jupiter、Kamino）深度集成。
- 关联 [[kraken]] — Kraken 作为 xStocks 核心 CEX 合作伙伴，提供免交易费等渠道优势。

## 值得记住的引用
> "（美股代币化）由注册在瑞士的母公司，控制着在泽西岛的 Backed Assets。它们通过盈透证券下 IBKR Prime 的通道，在美股市场买入股票，然后转移放置在 Clearstream 下的隔离账户。而 Clearstream 是德交所下的存管机构，帮助它们保存这些股票。"
> "持有美股代币是否拥有对应资产的投票权或分红？明确而言，没有。"
> "经典 AMM 不适合股票代币，需要一种新的 AMM 设计来实现更高的流动性。" — Jupiter 联合创始人 siong
> "股票代币化后，股市有了加密货币里新玩法，同样也有了加密货币里的新风险。如果流行起来，新旧世界里会有创新与冲突，你中有我，我中有你。" — 慢雾创始人余弦

## 我的笔记
- 这篇文章的价值在于用 10 个具体问题系统拆解了 xStocks 的运作流程，特别是对"代币铸造→托管→赎回"全链条的清晰描述，比大多数泛泛介绍更实用。相较于已有的 Robinhood/三种路径比较文章（URL 58809），本文更专注于 xStocks 的单平台实操层面，两者是互补关系。
- 文章对 Backed 团队的 DAOstack 背景做了详细披露，但引用来源为加密 KOL 的单方面爆料，且文中提到另有《深扒 xStocks 开发商 Backed》一文作为延伸阅读。尽管如此，三位联创的公开履历确实与 DAOstack 高度重合，这一信任风险是真实存在的——对于一个需要用户信任发行方信誉的赛道，这种背景记录是重大负面信号。
- Q7 提到的"时区套利、跨市场套利、事件驱动套利"是较为独特的论点——美股代币的可组合性确实提供了传统股票市场无法实现的套利策略，但实操门槛大、监管不确定性高。
- 文章定位为入门 Q&A，因此缺少对 bSTOCK 与 xStocks 在技术架构和合规层级上差异的分析，也缺少对 Backed 自身财务健康和运营稳定性的更深挖掘。
