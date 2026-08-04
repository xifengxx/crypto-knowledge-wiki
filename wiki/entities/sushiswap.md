---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [defi, dex, multichain]
---

# SushiSwap

## 基本信息
- 类型: protocol
- 赛道: Multi-chain DEX（去中心化交易所）
- 成立时间: 2020 年 8 月
- 创始人: Chef Nomi（匿名）
- 代币: SUSHI
- 定位: 以社区治理为核心的跨链 DEX，提供 AMM 交易、借贷、聚合收益等 DeFi 服务

## 核心业务/产品

SushiSwap 最初是 [[uniswap]] 的分叉，但通过在 AMM 基础上引入 SUSHI 代币流动性挖矿激励，开创了"吸血鬼攻击"（Vampire Attack）模式——用代币激励将流动性从竞争对手处迁移到自己的平台。此后发展为多链 DEX 聚合平台，主要产品包括：

- **SushiSwap AMM** — 多链自动做市商交易，部署在 Ethereum、Polygon、Arbitrum、Optimism、BNB Chain、Avalanche、Fantom、Sei、Solana（通过 Neon EVM）等多条链
- **Kashi Lending** — 隔离式借贷市场，支持任意代币对的自定义借贷池
- **BentoBox** — 代币金库，将闲置流动性与借贷市场对接提高资金效率
- **Miso** — 代币 launchpad，支持一级市场发行
- **Trident** — 新一代 AMM 框架（后逐步替换经典 AMM 池）
- **MasterChef** — 流动性挖矿奖励分配合约，SUSHI 发行核心机制

## 关键数据

- **吸血鬼攻击**：2020 年上线后几天内从 Uniswap 抽走超 10 亿美元流动性（[[来源_2025-08_Jupiter_Hyperliquid_聚合器战争_深潮TechFlow]])
- **用户占比巅峰**：Sushi 活跃用户一度达到 Uniswap 用户的 70%（[[来源_2023-06_X-to-Earn经济模型判断框架_veDAO_BlockBeats]])
- **流动性迁移速度**：上线两周即完成对 Uniswap 特定池子 LP Token 的流动性批量迁移（[[来源_2023-06_X-to-Earn经济模型判断框架_veDAO_BlockBeats]])
- **收入速度对比**：Sushi 达到 $1 亿累计收入用时 546 天，而 Pumpfun 仅用 217 天、Curve 用 350 天（[[来源_2024-11_Pumpfun深度解密_估值分析_MarsBit]])
- **生态地位**：BonkBot 的 7 天平均日活在 DEX 领域仅次于 Sushiswap（[[来源_2024-02_Telegram_Bot赛道_链上券商_Web3应用]])
- **多链覆盖**：部署在 20+ 条公链（包括 Sei、Neon EVM 等新兴公链），是跨链部署最广泛的 DEX 之一
- **历史 TVL 峰值**：超过 25 亿美元（2021 年牛市高点）
- **TVL 现状**：从峰值大幅回落（截至 2025-2026 年数据低于 5 亿美元），反映 DeFi 竞争激烈和流动性分散

## 竞争优势 / 护城河

- **吸血鬼攻击开创者**：SUSHI 代币激励模式首次证明了代币经济模型可以替代传统互联网"买量"策略，快速获取用户和流动性。这一模式被 LooksRare、Blur 等项目继承性使用
- **多链先行者**：最早大规模部署多链的 DEX 之一，品牌在多条链上有认知度
- **社区治理**：SushiSwap 以 SushiDAO 为核心的治理结构使其成为社区驱动的 DeFi 协议，曾吸引多位行业核心成员（如 0xMaki）
- **产品矩阵完整**：从 AMM 交易到借贷、launchpad、金库，覆盖 DeFi 多个赛道

## 风险 / 争议

- **Chef Nomi 抛售事件**：2020 年 9 月，创始人 Chef Nomi 抛售了开发者钱包中的约 $14M SUSHI 代币，导致币价暴跌，社区信任危机；随后 Chef Nomi 将控制权移交给 FTX 的 Sam Bankman-Fried，最终过渡到社区治理。这是 DeFi 历史上最早的创始团队 Rug 争议之一
- **团队动荡**：2021-2022 年多位核心成员（0xMaki、Joseph Delong 等）先后离职——0xMaki 于 2023 年全职加入 LayerZero（[[来源_2023-04_头等仓_LayerZero_全链互操作性]]）
- **市场地位下滑**：随着 Uniswap V3 专利保护、新兴 DEX（如 Trader Joe、Maverick、Aerodrome）及 ve(3,3) 模型 DEX 崛起，SushiSwap 在主流链和新兴链的 TVL 和交易量份额持续下降
- **营收效率滞后**：对比同期的 Curve（350 天达 $1 亿收入），Sushi 的 546 天速度反映了代币激励为主的增长模式在收入转化效率上的不足

## 相关实体

- [[uniswap]] — 被分叉对象，也是最大的竞争对手。Sushi 的吸血鬼攻击是 DeFi 历史上最具标志性的竞争事件
- [[layerzero]] — 前核心成员 0xMaki 于 2023 年全职加入
- [[stargate]] — LayerZero 的旗舰跨链流动性协议，SushiSwap 部署在 Stargate 上支持原生资产交换
- [[pumpfun]] — 对比基准中 Sushi 作为"传统 DeFi 项目"代表
- [[bonkbot]] — 日活在 DEX 领域对比基准
- [[sei]] — SushiSwap 宣布在 Sei 上推出永续期货交易所
- [[neon-evm]] — 支持 SushiSwap 等以太坊应用迁移到 Solana 生态
- [[curve]] — 同类 DeFi DEX，Sushi 的收入速度对比基准

## 来源

- [[来源_2025-08_Jupiter_Hyperliquid_聚合器战争_深潮TechFlow]] — 吸血鬼攻击 10 亿美元流动性数据
- [[来源_2023-06_X-to-Earn经济模型判断框架_veDAO_BlockBeats]] — 吸血鬼攻击细节、70% 用户占比、两周流动性迁移
- [[来源_2024-11_Pumpfun深度解密_估值分析_MarsBit]] — 收入速度对比（546 天）
- [[来源_2024-02_Telegram_Bot赛道_链上券商_Web3应用]] — BonkBot 日活对比基准
- [[来源_2024-02_Telegram_Bot赛道下_Banana_BonkBot_Unibot_BTCBot_BlockBeats]] — 可比估值分析中的 DEX 基准对比
- [[来源_2023-04_头等仓_LayerZero_全链互操作性]] — 0xMaki 全职加入 LayerZero 事件
- [[来源_2023-04_Sei_Network融资_生态版图_MarsBit]] — 在 Sei 上布局永续期货交易
- [[来源_2024-03_并行EVM四杰_Monad_Sei_Neon_Eclipse_Foresight]] — Neon EVM 对 SushiSwap 兼容性支持
- [[来源_2025-04_Web3叙事退潮_明星项目_深潮TechFlow]] — 补充 Sushiswap 交易量从巅峰 113 亿美元降至约 2 亿美元；指出碎片化、治理扩张及 CEX 竞争削弱先行者优势

