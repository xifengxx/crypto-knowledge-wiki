---
type: source
source_type: article
url: https://followin.io/zh-Hans/feed/4008965
author: Binary Research
date: 2023-04
ingested: 2026-06-28
tags: [defi, derivatives, trading, arbitrum, gains-network]
---

# Binary Research：解读Gains Network (gTrade)

## 阅读证据
- 总行数: 120
- Q1 (前25%): gTrade累计交易量87万+笔/$340亿+。gDAI池$50M TVL实现$913M周交易量，Volume/TVL=18（GMX为4.7），资金效率超3倍
- Q3 (中后25%): gDAI三层保护：buffer→TVL→GNS铸造回补。gDAI为ERC20自动复利代币，抵押率<110%提款需等3个Epoch(9天)
- Q4 (最后25%): GNS质押者获平台收益36%，gDAI LP获18%（vs GMX质押者30%/LP 70%）。GNS铸造上限0.05%/天，年通胀上限18.25%，实际为通缩
- 图片: 0张已分析 / 1张装饰跳过 / 0张外部URL无法获取

## 核心要点
1. **gTrade = 去中心化杠杆交易平台**：部署在Arbitrum+Polygon，创始人独自完成除UI外全部开发。累计交易$340亿+/87万笔
2. **合成流动性池gDAI**：以DAI计价合成池作为交易者对手盘，支持91+交易对（加密货币/外汇/股票），外汇杠杆1000x/加密150x
3. **资金效率远超GMX**：Volume/TVL=18 vs GMX 4.7（3倍+），但高杠杆+多交易对也带来更高风险
4. **自制预言机DON**：Chainlink底层+7个交易所API+8个节点，链上获取价格并执行，防止插针
5. **四重保护机制**：Fixed Spread + Price Impact（GMX没有）+ Rollover Fee（波动性挂钩）+ Funding Fee（多空平衡）
6. **gDAI三层安全体系**：buffer吸收盈亏→TVL吸收亏损→GNS铸造卖成DAI回补池子

## 关键数据
- 累计交易量：**>$340亿**，87万+笔
- gDAI池 TVL：**$50M**，周交易量$913M
- Volume/TVL：**18**（GMX为4.7）
- 交易对：**91+**（唯一支持这么多的链上平台）
- 外汇杠杆：最高**1000x**，加密**150x**
- 收益分配：GNS质押者**36%**，gDAI LP **18%**
- GNS铸造上限：**0.05%/天**，年通胀上限18.25%
- 最大收益/亏损限制：**+900%**自动平仓 / **-90%**自动平仓

## 与已有知识的关系
- 补充 [[defi]] — 链上衍生品赛道：gTrade vs GMX vs dYdX对比（订单簿/GLP池/gDAI池三种模式）
- 对比 [[gmx]]（待创建）— 资金效率/保护机制/收益分配三维度差异

## 值得记住的引用
> "gTrade的50m gDAI池TVL实现了913m的交易量，Volume/TVL为18。而GMX则以466m的GLP池TVL实现了2.2b的交易量，Volume/TVL为4.7。"
> "Luna事件发生时，gTrade团队本着去中心化的原则，坚持不干预Luna的交易与下架，最后市场掏空了平台的流动性，项目几乎陷入绝境。"

## 我的笔记
Gains Network是2023年去中心化杠杆交易赛道的一匹黑马。最值得关注的是其合成流动性池设计——用单一gDAI池支持91+交易对，资金效率远超GMX的GLP多资产池。但Luna事件暴露了合成池的脆弱性：当市场极端波动时，交易者盈亏可能吞噬整个流动性池。三层保护体系（buffer→TVL→GNS铸造）是精巧的设计，但本质上是将尾部风险转移给GNS持有者（通过通胀稀释）。到2026年，Gains Network仍存活但未成为赛道第一——GMX凭借更保守的风险管理和更好的用户体验保持了领先。
