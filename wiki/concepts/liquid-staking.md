---
type: concept
created: 2026-06-28
updated: 2026-06-30
tags: [defi, staking, ethereum]
aliases: [LSD, LSDFi, 流动性质押]
---

# 流动性质押 & LSDFi

## 一句话定义
流动性质押（Liquid Staking）允许用户在质押 ETH 获取 PoS 收益的同时，获得一个可交易的质押凭证代币（如 stETH），用于 DeFi 其他场景。LSDFi 是构建在 LSD 之上的 DeFi 协议层。

## 质押生态三种收益来源框架
任何 PoS 链上的质押相关协议，除去代币激励外，长期收益来自三个方面：

| 收益类型 | 来源 | 决定因素 | ETH 当前水平 | SOL 当前水平 |
|---------|------|---------|------------|------------|
| 1. PoS 底层收益 | 网络增发（维护共识） | 链的通胀计划/质押比率 | ~2.8% 年化（质押率↑→收益率↓） | ~6.5% 年化 |
| 2. 交易排序收益 | 优先费 + MEV | 链上活跃度 | ~0.5%（EIP-4844 后显著下降） | ~1.5%（波动较大） |
| 3. 质押资产出租收益 | Restaking/AVS 付费 | 需求端付费意愿 | 尚未成规模（靠代币激励） | 尚未成规模 |

- 以太坊 LST 协议（如 Lido）只能获取收益 1+2；Restaking 协议（如 Eigenlayer）只能获取收益 3；LRT 协议（如 Etherfi）理论上可获取全部三种
- Solana 无此限制：任何 LST 协议可做 restaking，任何 restaking 协议可发 LST，商业边界由市场竞争划定
- Solana 的收益 1 和 2 均持续高于以太坊，且差距仍在扩大（2024年11月），Solana REV 已超过以太坊

## 代表项目
| 层级 | 项目 | 说明 |
|------|------|------|
| LSD 层 | [[lido]] (stETH), Rocket Pool (rETH) | 质押 ETH → 获取 LSD 凭证 |
| BTC 质押层 | [[babylon]] | BTC 远程质押，信任最小化架构 |
| LSDFi 层 | [[eigenlayer]], Pendle | 再质押、收益拆分 |
| **LRT 层** | KelpDAO (rsETH), Renzo, Puffer, etherFi, Swell (rswETH) | 流动性再质押代币，三重收益：ETH质押+AVS收益+LRT利用 |

## LRT（Liquid Restaked Token）
- LSD 的进化版：LSD 仅为 PoS 安全质押，LRT 为多个 AVS 同时提供安全保障
- TVL 达 $87.87 亿（EigenLayer, 2024.02），a16z $100M 投资
- 三重收益源：ETH 质押奖励 + AVS 再质押奖励 + LRT 利用奖励
- 主要风险：多层智能合约复杂性、"易进难出"流动性风险、多AVS治理复杂度
- 跨链扩展：Babylon（BTC）、Picasso/Solayer（Solana）

### BTC 流动性质押：SAL 架构（Solv Protocol）
BTC 非 PoS 链，无法原生质押——BTC LST 需要通过 Babylon 等协议的远程质押或包装 BTC 的 DeFi 策略实现收益。[[solv-protocol]] 提出 SAL (Staking Abstraction Layer) 作为 BTC 质押的统一抽象层，将流程分解为四个角色：
- **质押协议**：PoS L1/L2、去中心化服务协议（预言机/跨链桥）、通用 DeFi 协议——提供底层收益源
- **LST 发行者**：发行流动性质押代币（如 SolvBTC.BBN），涉及 BTC 主网与 EVM 链的双向交互
- **质押守护者**（SAL 独创）：负责资产托管、交易验证、共同签署——确保质押流程透明和安全
- **收益分配者**：处理多链收益的归集、转换和分配（BTC 主网+EVM+其他生态）

SolvBTC 通过此架构实现 90% 利用率，四条 LST 产品（Babylon/CoreDAO/Ethena/Jupiter）APY 均值 ~15%，年化收益估算 ~$4 亿

### LRT 项目资金效率对比（2024.02）
| 项目 | TVL | APY | 套娃深度 | 可组合性 |
|------|-----|-----|---------|---------|
| etherFi | $12.8亿 | 4.1% | 3层 | Pendle/Gearbox/Gravita |
| Renzo | $3.5亿 | 3.7% | 2层 | Pendle/Gravita |
| Puffer | $10亿+ | 4.0% | 2层 | Pendle/Curve |
| KelpDAO | $4.9亿+ | 3.8% | 2层 | Pendle/Uniswap/Curve/Balancer |
| Swell | $3.5亿 | 3.5% | 2层 | Pendle/Gravita |

### LRT四大协议详细对比（2024.03 Binance Research）
| 维度 | [[ether-fi]] | Puffer Finance | Kelp DAO | Renzo |
|------|-------------|---------------|----------|-------|
| LRT | eETH | pufETH | rsETH | ezETH |
| 接受资产 | 仅ETH | stETH→ETH | ETH/stETH/ETHx/sfrxETH | ETH/stETH/wBETH |
| 差异化 | DVT独⽴质押者 | 防罚没Secure-Signer | Stader Labs团队 | BNB Chain再质押 |
| 融资 | $5.3M种子 | $5.5M种子 | — | $3.4M($25M估值) |
| 关键策略 | Operation Solo Staker | 吸血鬼攻击Lido stETH | 多链LRT(Polygon zkEVM) | 跨链再质押(Arbitrum) |
|------|-----|-----|:---:|------|
| **ether.fi (eETH)** | $16.21亿 | 3.81% | ⭐⭐⭐ | Pendle→weETH→Morpho Blue loop |
| **Puffer (pufETH)** | $11.39亿 | 3.3% | ⭐⭐ | Curve LP + Chapter 3积分 |
| **Mantle (mETH)** | 19.2万ETH | 7.2% | ⭐⭐ | INIT Capital loop |
| **Kelp (rsETH)** | $5.8亿 | — | ⭐ | Zircuit质押 |
| **Renzo (ezETH)** | $5.67亿 | — | ⭐ | Zircuit质押 |
| **EigenPie** | $3.03亿 | 0% | ✗ | 仅积分 |
| **Swell (rswETH)** | $0.96亿 | — | ⭐ | Zircuit质押 |

核心洞见：LRT竞争力 = 套娃深度（可组合性），而非单纯的APY。eETH胜出不是因为收益最高，而是能叠加最多的DeFi协议→最多的空投积分。

## 为什么重要
- Lido 是以太坊上 TVL 最大的协议
- EigenLayer 开创再质押（Restaking）范式
- LSD 资产（stETH $100 亿+）是 DeFi 最大的抵押品池之一

## 相关概念
- [[defi]] — LSDFi 是 DeFi 的重要子赛道
- [[layer2]] — L2 上 LSD 生态

## LSDfi 三层结构（Binance Research 2023.7）
| 层 | TVL | 龙头 | 说明 |
|---|------|------|------|
| **Lending** | $25.9 亿 | Aave (96.73%) | LST 作为抵押品借贷 |
| **CDP 稳定币** | $23.5 亿 | Maker (4.844 亿 DAI) | LST 抵押→铸造稳定币 |
| **DEXes** | $10.3 亿 | Curve (36.66% 交易量) | LST 流动性 |

## 三种 LST 模型
| 模型 | 代表 | 机制 | DeFi 兼容性 |
|------|------|------|:--:|
| 可重基代币 | stETH | 余额随奖励变化 | ⚠️ Uniswap 等不兼容 |
| 有奖励代币 | rETH, ankrETH | 价值增长，余额不变 | ✅ |
| 基础+奖励分离 | frxETH/sfrxETH | 1:1 基础 + 奖励代币 | ✅ 但流动性割裂 |

## Solana LST 生态（Q4 2024）
- **质押率**：66%合格SOL已质押，流动性质押率11.2%（QoQ +33%）
- **JitoSOL**：1470万SOL（34%市场份额）——Solana最大LST，StakeNet去中心化过渡中
- **bnSOL（Binance）**：650万SOL（15%，QoQ +1467%）——Q3底上线，快速抢占市场份额
- **mSOL（Marinade）**：560万SOL（13%），Marinade Native额外质押267万SOL，推出Stake Auction Marketplace
- **Sanctum**：100+种LST（14%市场份额），通过Infinity多LST流动性池实现小LST共享流动性
- **Jito Restaking**：推出Vault Program（管理VRT）和Restaking Program（管理NCN和Operator），Solana版EigenLayer

## 流动性质押代币平价机制差异（lido stETH vs BENQI sAVAX）
2022 年流动性紧缩期间，不同流动性质押协议的代币平价修复机制暴露了关键的结构性差异：

- **Lido stETH** — stETH 质押在以太坊信标链上，合并前禁止提款。因此即使在市场恐慌时价格大幅偏离 ETH，也无法通过"购买脱钩 stETH → 等待解质押 → 取回 ETH"来套利修复平价。这是 stETH 在 2022 年 5-6 月（Celsius/3AC 危机期间）大幅折价的原因
- **BENQI sAVAX** 和 **pSTAKE stkATOM** — 虽然也有解质押期，但任何愿意出售流动性的人都可以购买脱钩的流动质押代币，并等待解除质押期以获取风险溢价。因此具备自发的套利回归机制

这一对比说明：**提款锁定**是影响流动性质押代币价格稳定性的关键设计参数。锁定期越长、越不确定，流动性质押代币的抗冲击能力越弱。

来源：[[来源_2022-07_DeFi风险溢价_Treehouse]]

## 来源
- [[来源_2025-07_Solana_H1_盈利增长_Helius]] — Solana LST生态Q1 2025数据：JitoSOL保持39%市场份额主导、整体流动性质押率从9.1%升至11.32%（市值69.7亿美元）、bnSOL以18.9%市场份额快速增长超过Marinade（10.64%）。64% SOL流通供应参与质押，为所有主要公链最高
- [[来源_2023-08_RWA实现路径_OffChain-OnChain_美债代币化]] — U本位RWA生息资产 vs ETH本位LSD生息资产的对称逻辑框架；stUSDT参考stETH Rebase机制设计
- [[来源_2024-02_LRT套娃资金利用率对比]]
- [[来源_2024-02_GSR数字资产参考包_Web3入门指南_BlockBeats]] — LST两种奖励机制(价格累积vs余额累积)/以太坊vs Cosmos/Solana委托差异/Jito Marinade Stride
- [[来源_2024-12_Solana_Q4状况_Messari]] — Solana LST生态Q4数据：JitoSOL/bnSOL/mSOL/Sanctum市场份额，StakeNet去中心化，Jito Restaking架构
- [[来源_2024-08_DeFi_PE市盈率_估值分析_BlockBeats]] — Lido PE压缩31.6→13.7/LDO价值捕获困境/JitoSOL 50%市场份额/Pendle TVL腰斩与LRT依赖
- [[来源_2024-11_以太坊_Solana_Staking商业模式差异_MintVentures]] — 三种收益来源框架、以太坊vs Solana质押市场规模对比、监管约束vs商业自由的制度差异
- [[来源_2023-04_Web3用户增长_市场周期_新叙事_CoinVoice]] — "ETH国债化"（流动性质押衍生品）概念的早期表述，涵盖资产复用稳定币、超流质押DEX、债券贴现、固定收益和利率衍生品等方向
- [[来源_2025-01_Monad测试网_生态建设_参与策略_PANews]] — LSD 向新 L1 扩展：Monad 生态 aPriori（MEV 驱动架构，$1070 万融资）和 Kintsu（$400 万融资，Castle Island 领投）
- [[来源_2024-09_TON生态LSD赛道_Tonstakers_Bemo]] — TON 生态 LSD 赛道全景：五个项目对比（[[tonstakers]]/[[bemo]]/[[stakee]]/[[ton-whales]]/[[hipo]]），赛道总 TVL 4.08 亿美元，渗透率仅 11.5%
- [[来源_2023-06_Sui生态现状_数据分析_链上基本面]] — 2023年5月Sui主网上线时LST完全真空：质押APY仅6%无吸引力、无LST无法将质押资产作为抵押物撬动杠杆、大部分$SUI留在CEX。文章明确指出LST是Sui当时最紧迫的基础设施缺口
- [[来源_2024-12_Solv_Protocol_链上微策略_BTC_生息_BlockBeats]] — BTC 流动性质押的 SAL 四角色架构（质押协议/LST 发行者/质押守护者/收益分配者），SolvBTC 90% 利用率/四条 LST 产品/~15% APY
- [[来源_2024-12_Solana节点运营_MEV盈利_Jito_Raydium_PANews]] — JitoSOL委托策略具体机制：自动委托前200验证者（投票率>99%）、Jito收入分配结构（90%+MEV给staker/5%基金会/剩余LST持有者）、MEV收入随网络活跃度增长（1%→3%）
- [[来源_2024-09_Solana生态系统全景_融资历史_技术机制_深潮TechFlow]] — Solana三大LST协议功能定位：Marinade（mSOL流动质押）/Jito（MEV增强LST+协议外区块空间拍卖）/Sanctum（多LST共享流动性方案），Jito被Solana验证者广泛采用
- [[来源_2024-09_八大Babylon生态流动性质押协议_odaily]] — Babylon 生态八大 BTC LST 协议全景对比：Bedrock 297.8 BTC（30%）/Solv 250 BTC（25%）/Lorenzo 129.36 BTC（12.9%）/PumpBTC 118.43 BTC（11.8%）/pSTAKE 10 BTC（1%），Lombard+Chakra 委托失败，SatLayer BVS 再质押层
- [[来源_2022-03_以太坊_PoS_Staking赛道_MintVentures]] — LSD赛道早期全景文献：Lido/Rocket Pool/SSV Network/Stader四项目详解，包含ETH转PoS前的Staking赛道格局、PoS三种收益来源（共识奖励+MEV+未来AVS）、流动性质押 vs 传统STaaS竞争分析
- [[来源_2025-03_SIMD-0228_Solana通胀_深层博弈]] — SIMD-0228 对 Solana 流动性质押生态的潜在影响：质押率或从 65.7% 降至 45-55%，收益率从 7.03% 降至约 1.41%，质押者需重新评估策略并向 MEV 能力强的验证者集中
- [[来源_2025-03_Solana验证器_Staking_Blockworks]] — Blockworks Research 验证者经济深度分析：Solana LST 仅占 9-10%（远低于以太坊），Jito 主导（~35% LST 份额/1,700 万 SOL），Marinade SAM 市场驱动委托机制，Sanctum INF 多 LST 共池和自动 LST 创建模式
- [[来源_2025-08_美国政策_加密利好_BlockBeats]] — SEC公司财务部2025年8月5日声明明确流动性质押凭证(LST)不是证券；LST锁仓TVL从2025年4月的200亿美元飙升至8月的610亿美元；SEC确认ETH底层资产非证券则LST同样不构成证券
- [[来源_2022-07_ETH合并_正向灰犀牛_投资机会]] — 前Merge时代对Lido投资前景的前瞻分析，指出Merge后Lido的三重利好（质押参与率提升/质押收益率提升/ETH价格上涨）和费用端因Curve池激励减少而降低的逻辑
- [[来源_2025-03_币圈盈利者_CEX_MEV_做市商_深潮TechFlow]] — 补充各链具体质押收益率：以太坊4%-6%、Cosmos 8%-15%、Solana 4%-5%，Lido占据LSD市场份额超30%
- [[来源_2024_LRT_流动性再质押代币_速览]] — LRT作为LST的演进：从单任务PoS质押到多AVS再质押分配，9项目全景速览
