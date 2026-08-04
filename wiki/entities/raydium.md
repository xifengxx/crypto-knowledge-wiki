---
type: entity
entity_type: protocol
created: 2026-07-01
updated: 2026-07-01
tags: [solana, defi, dex, amm, memecoins]
---

# Raydium

## 基本信息
- 类型：Solana 生态最大 AMM DEX + Launchpad
- 区块链：Solana
- 定位：Solana Memecoin 交易的核心流动性基础设施，Pump.fun 代币"毕业"后的默认交易池
- 代币：$RAY

## 核心业务/产品
- **AMM DEX**：Solana 上最早的 AMM 之一，支持标准 AMM 池和集中流动性池
- **Launchpad (AcceleRaytor)**：代币发行平台
- **与 Pump.fun 的深度绑定**：Pump.fun 代币市值达标 $69,000 后自动"毕业"进入 Raydium 流动性池，Raydium 是 Memecoin 交易的核心战场
- **LP 池**：支持 Memecoin-Memecoin、SOL-Memecoin 等多种 LP 组合
- **LaunchLab（2025年3月）**：Pump.fun 的直接竞品，一键发币平台，针对 Pump.fun 弱点进行定向优化

## 关键数据
- DeFiLlama 收入榜常居前五，与 Solana、Jito 一起是 Solana 生态"闷声发大财"三巨头
- 收入经常超过以太坊主网 gas 费用收入
- Q4 2024 季度收入：$74M（Solana 生态应用收入第3名，仅次于 Pump.fun $235M 和 Photon $140M）
- >80% 收入来自波动性交易对（Keyrock 2025.06 报告），Memecoin 投机驱动，与 Pump.Fun 代币配对 SOL 而非稳定币的结构性特征
- SOL-Memecoin LP 日收益可达 0.5%-3%（如 WIF+Popcat、SOL+GOAT 等蓝筹 Memecoin 池）
- Solana 月交易量约为以太坊主网的 2 倍，但 TVL 不到以太坊一半——低 TVL+高交易量=LP 手续费极高

## 竞争优势 / 护城河
- Solana 最大 AMM 的先发优势和流动性网络效应
- 与 Pump.fun 的"毕业管道"深度绑定——Pump.fun 每日发行近万代币，毕业代币直接进入 Raydium
- Solana 低交易成本（Gas 费几乎可忽略）使 LP 手续费能覆盖无常损失，这在以太坊上无法实现

## 风险 / 争议
- 高度依赖 Memecoin 交易热度，收入结构与 Memecoin 周期深度捆绑
- Memecoin LP 面临无常损失风险（尤其在单边行情中）

## 相关实体
- [[pumpfun]] — Pump.fun 代币"毕业"后默认进入 Raydium 池
- [[jito]] — 同在 Solana 生态"闷声发大财"三巨头
- [[jupiter]] — Solana DEX 聚合器，大量交易通过 Jupiter 路由到 Raydium
- [[solana]] — 底层 L1

## LaunchLab：Pump.fun 的直接反击（2025年3月）

2025年3月，Raydium 发布 LaunchLab，被视为对 Pump.fun 的正面反击。Pump.fun 此前为 Raydium 贡献了 41% 的 Swap 手续费收入，但自 Pump.fun 推出自有 AMM（PumpSwap）后，Raydium 流量和交易量受到显著冲击。

### LaunchLab 核心特性
- **支持多元定价曲线**：线性、对数或指数模型，项目方可按需选择
- **更低交易费率**：1%（Pump.fun 为 2%），无迁移额外费用
- **更低毕业门槛**：募集 85 SOL（约 $11,000）即可转入 Raydium AMM 池，可设定最低 30 SOL 的发射模式
- **创作者分润**：毕业代币创始人可额外申请获得最多 10% 手续费分润
- **RAY 回购机制**：25% 交易手续费用于回购平台币 RAY
- **生态整合**：支持 LP 锁仓、计价多样性等创新设计

### 市场影响
LaunchLab 发布当日 RAY 上涨 14%。截至2025年5月，LaunchLab 已成功吸引部分项目方转向，与 Pump.fun 市占率从垄断地位降至 57% 直接相关。

来源：[[来源_2025-05_发币平台_竞争_MemeLaunchpad_BlockBeats]]

## 与 Jupiter 的竞争关系
2024年Q2末，Raydium 借助 pump.fun 毕业管道在 Solana DeFi 中实现对 Jupiter 的超越：TVL 达 $9.91 亿成为 Solana DeFi 最大协议，日均交易量环比增长 77% 至 $8.67 亿。Jupiter 尽管仍占 DEX 交易量 51%，但市场份额季末被 Raydium 超越。Raydium 的核心优势在于与 pump.fun 的深度绑定——每日近万新代币发行，毕业代币直接进入 Raydium 池，而 Jupiter 的 LFG Launchpad 表现不佳进一步拉大了差距。来源：[[来源_2024-08_Jupiter_Launchpad社区失望_BlockBeats]]

## 来源
- [[来源_2024-12_Solana节点运营_MEV盈利_Jito_Raydium_PANews]] — Leo 自述 MOTHER LP 年化 36,500%/蓝筹 Memecoin LP 日收益 0.5%-3%/Raydium 收入常居前五
- [[来源_2024-12_Solana_Q4状况_Messari]] — Q4 Raydium 收入 $74M/Solana 生态应用收入第3
- [[来源_2024-08_Jupiter_Launchpad社区失望_BlockBeats]] — Q2 2024 末 Raydium TVL $9.91 亿超越 Jupiter 成 Solana DeFi 最大协议，日均交易量 QoQ +77%
- [[来源_2025-05_发币平台_竞争_MemeLaunchpad_BlockBeats]] — LaunchLab 产品细节（2025年3月推出）：1%费率、多元定价曲线、85 SOL毕业门槛、RAY回购25%、创作者10%分润、发布当日RAY涨14%
- [[来源_2025-02_Memecoin_CEX流动性_DEX竞争_TigerResearch]] — Tiger Research 确认 Raydium 2025 年 1 月占据 DEX 市场 27% 份额，超越 Uniswap（从 34.5% 降至 22%）；分析 Solana 低费用优势是 Memecoin 交易者选择 Raydium 的关键原因
- [[来源_2025-06_稳定币_DeFi收入_Keyrock]] — 补充 Raydium >80% 收入来自波动性交易对的数据，验证其收入结构与 Memecoin 投机高度绑定
- [[来源_2025-04_Crypto估值_梅特卡夫_DCF_深潮TechFlow]] — 以 Raydium 为 DeFi DCF 估值案例：2024年Revenue $98.9m，假设年增长率10%、贴现率15%、预测5年、永续增长率3%、FCF转换率90%，DCF总估值~$1.002B（TV $611.6m + FCF $390.3m），与实际市值$1.16B接近
- [[来源_2025-05_10个Launchpad平台_Solana发射中心_PANews]] — Raydium推出LaunchLab的完整数据：截至4月29日发行24,916代币/毕业率0.84%/1%费率（50%社区池+25%RAY回购+25%运营）/85 SOL毕业门槛/5万RAY奖池/Top 3毕业项目累计交易近3.5亿美元
- [[来源_2025-04_LaunchLab_Raydium_Pumpfun_深潮TechFlow]] — Raydium LaunchLab发布首日原始报道（2025年4月16日）：JustSendIt模式/85 SOL毕业门槛/1%费率三部分分配（50%社区+25%$RAY回购+25%运营）/推荐拉新0.1% SOL奖励/cook.meme作为LaunchLab基建设施龙头平台/$TIME市值$5.6M/GMGN合作/$RAY涨20%/三方利益相关者影响分析
