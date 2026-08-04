---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [perpetual-dex, defi, bsc, memecoins, derivatives]
---

# Superp

## 基本信息
- 类型：去中心化衍生品协议（Perp DEX）
- 链：BNB Chain（BSC）
- 定位：「Meme 版 Hyperliquid」——专注 Meme 币的链上永续合约交易
- 前身：Vanilla Finance
- 成立时间：2023 年 Q2 立项
- 团队：核心成员来自 Huobi、HashKey 等交易所，拥有超 7 年 CEX 和 DEX 运营经验
- 融资：累计超 1500 万美元，领投方包括 UOB Venture、ABCDE Capital、Paper Ventures、Brooker Group，天使投资人包括 Scroll、Step'N、XAI 等项目的核心创始人
- 加速器：入选第 8 期 BNB Chain MVB 加速器计划，获 CoinMarketCap 孵化支持
- 代币：SUP（总供应量 10 亿，2025 年 8 月 5 日上线 Binance Alpha）

## 核心业务/产品

### NoLiquidation Perp (PSC)
定时结算的杠杆产品，提供最高 10000 倍杠杆，用户在合约到期日之前无论价格如何波动都不会被强制平仓。支持 10 分钟/1 小时/24 小时/48 小时等可选到期时间。覆盖 40 个主流币种。结算费为利润的 10%（当前限时免费）。

### Meme Perp (TRS)
Meme 项目上线后 10 分钟内即可支持做空交易。与 Hyperliquid 类似，用户质押 Meme 代币提供流动性（LP），从杠杆交易者费用中获取收益。采用仓位限制、动态杠杆（最高 10 倍）、自动清算系统等风控设计，汲取了 Hyperliquid JELLY 事件教训。

### Alpha Perp
专为币安上架的 Alpha 代币设计，提供更严格的风控、更精准的资产选择和更完善的激励机制，不同代币有独立 LTV 比率、利息上限和清算容忍度。

## 发展历程
- 2023 Q2：项目立项，前身 Vanilla Finance
- 2023 Q3：Vanilla Finance 在韩国上线，交易量迅速超 30 亿美元
- 2024 Q2：在 Scroll 和 Bitlayer 上线 30 天内交易量达 10 亿美元，链上用户达 7 万
- 2024 Q4：Telegram 版本上线 30 天内交易量达 100 亿美元，用户数达 300 万
- 2025 年 8 月 5 日：SUP 代币上线 Binance Alpha
- 2025 年 8 月（预计）：TGE 正式启动

## 关键数据
- 累计真实用户：超 600 万
- 总交易量：370.7 亿美元
- BSC 链活跃用户数和交易笔数均位列第一
- SUP 总供应量：10 亿
- 初始流通量：17.5%（TGE 时）
- 融资：超 1500 万美元

## 竞争优势 / 护城河
- 差异化定位：「Meme 版 Hyperliquid」填补了 Meme 币衍生品覆盖率不足 3% 的市场空白
- 产品创新：NoLiquidation Perp 以定时结算实现「永不爆仓」，解决了 Meme 币极端波动下的强制平仓痛点
- BSC 生态先发优势：BSC 链上 Perp DEX 龙头，用户数和交易笔数均第一
- 团队经验：来自 Huobi、HashKey 等传统交易所的核心团队

## 风险 / 争议
- NoLiquidation Perp 本质是定时结算期权而非传统永续合约，高杠杆下本金亏损风险并未消除——变成「到期归零」而非「中途爆仓」
- 与 Hyperliquid 存在基础设施代差（BSC 应用 vs 自建 L1）
- 本文为 TGE 前夕 PR 报道，数据缺乏第三方独立验证
- 万倍杠杆的可持续性存疑，利润 10% 结算费模型在低交易量环境下可能不足以覆盖成本

## 相关实体
- [[hyperliquid]] — 核心对标竞品，Perp DEX 赛道龙头
- [[bnbchain]] — 运行链和生态基础
- [[scroll]] — 天使投资人来源之一

## 来源
- [[来源_2025-08_Superp_链上永续合约_Meme_BlockBeats]]
