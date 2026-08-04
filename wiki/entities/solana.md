---
type: entity
entity_type: protocol
created: 2026-06-29
updated: 2026-07-02
tags: [l1, solana, pos, high-performance, svm]
---

# Solana

## 基本信息
- 类型：Layer 1 区块链
- 共识机制：Proof of History (PoH) + Proof of Stake (PoS)
- 定位：高性能公链，互联网级交易吞吐量
- 执行环境：SVM (Solana Virtual Machine) / Sealevel 超并行事务处理引擎
- 客户端：Agave V2.0（Anza维护，90%+验证者运行）、Jito-Solana（Agave MEV优化分支）、Firedancer/Frankendancer（Jump Crypto C语言重写）、Mithril（Golang重写）、Tinydancer（轻客户端SPV）

## 核心业务/产品
- **高性能 L1**：并行事务处理，日均非投票交易8150万笔（Q4 2024）
- **交易生命周期**：用户通过钱包发起交易 → 无公共内存池，直接发送给当前及下两位提议者 → 提议者基于PoH打包区块（400毫秒出块） → Sealevel确定性并行执行（需提前声明读写集合） → BFT共识快速确认。无内存池设计避免了排队瓶颈，但网络过载时交易可能被丢弃需重新提交
- **Sealevel 确定性并行**：交易广播前需声明读写集合，Sealevel引擎根据声明并行处理无冲突交易，冲突交易串行执行。优点是高效，缺点是硬件需求高（需提前声明依赖）
- **SVM 生态**：Solana 虚拟机成为独立执行标准 → Eclipse（SVM L2）/ Neon EVM（EVM 兼容）
- **重点赛道**：Meme（Pump.fun）、DePIN、PayFi、RWA、Restaking（Solayer/Jito）
- **Solana Blinks（2024.06推出）**：通过 URL/二维码直接触发链上操作（swap/mint/捐赠/投票/预测），消除"进入网站"步骤，目前支持 X 平台（Phantom/Backpack/Solflare 钱包），终极目标是所有能显示 URL 的平台都支持 Solana 支付——类比 Web3 版微信小程序
- **Solana 手机（第一代 Saga）**：2022年6月23日，Solana Labs宣布开发首款智能手机Saga，内置Solana Mobile Stack（移动钱包适配器、种子库和Solana Pay），成本约1000美元，计划2023年初交付。CGV Research分析认为此举可能联合移动运营商开展"充值并质押SOL，免费使用手机"等市场活动，开启Solana生态的新篇章
- **Solana 手机（Seeker，第二代）**：Seeker（第二代，108+32MP镜头、6.36寸屏、128GB存储、8GB内存、内置硬件钱包，预计2025年中发货，14.5万+预售）

## 关键数据（Q4 2024, Messari）
- **Chain GDP（应用总收入）**：$840M（QoQ +213%），连续三季度超过REV
- **DeFi TVL**：$86亿（QoQ +64%），全网排名第二，超越Tron
- **日均DEX现货交易量**：$33亿（QoQ +150%）
- **稳定币市值**：$51亿（QoQ +36%），USDC主导（75%）
- **稳定币 AUM vs 以太坊**：$13b（Solana）vs $127b（以太坊主网），差距近 10 倍，反映 Solana 在非原生稳定币资产发行和留存方面的结构性弱势（Keyrock 2025.06）
- **SOL市值**：$910亿（QoQ +27%），11月曾触及$1200亿
- **REV（真实经济价值）**：$819M（QoQ +211%），48%交易费+52% MEV小费
- **质押率**：66%合格SOL已质押，质押总量3.89亿SOL（$740亿）
- **流动性质押率**：11.2%，活跃验证者1404个（40国、272数据中心）
- **稳定币 PYUSD（PayPal）支持 Solana**
- **2024 Memecoin 手续费**：$30.93 亿（Solana 生态）
- **2024年8月 收入快照**: Gas 费 $46.21M/30d（三链第二），日活地址 110 万（三链居中）
- **Meme 依赖度**: 约 80% 链上交易由 Meme 币贡献，DEX 占互动量 86%，Meme 币占生态 Gas 费超 55%
- **Meme 玩家月成本结构**（2024.08）: MEV 优先费 $30M + Dex Trading Bot $30M + DEX 交易费 $50M = 月亏损预估 $110M，年化 $1.3B
- **MEV 使用率**: 82.45% 交易携带优先费，MEV 费用占手续费 80%（$30M+/30d）
- **DEX 格局**: Raydium 30d 费用 $52.37M（90% 来自 Meme）/ Orca $12.25M（60%+ 来自 Meme）/ 两者占 DEX 市场 70%
- **Dex Trading Bot**: Photon $18.96M + Bonkbot $3.35M + Trojan $11.36M = 合计 $33.67M/30d
- **可持续性警告**: Meme 驱动的收入不可持续——年化玩家亏损 $1.3B，一旦市场情绪逆转收入可能断崖式下跌

## 竞争优势 / 护城河
- **性能优势**：单线程 EVM 的 10-100x 吞吐量
- **swQoS 机制**（stake-weighted Quality of Service，质押加权服务质量）：2024年4月客户端升级后正式生效，区块生产者依据质押金额确定交易优先级——质押全网 x% 的 SOL 最多可提交 x% 的交易。大幅提升交易成功率（3月 meme 热潮期间网络卡顿问题得到解决）。体现 Solana "性能优先"的实用主义，但也存在中心化倾向（头部质押者优势自我强化）。这是 Solayer 内源性 AVS 的技术基础
- **质押市场规模超越以太坊**：尽管 SOL 市值仅为 ETH 的 1/4，但 Solana 的 PoS 增发奖励（6.5% vs 2.8%）和交易排序收益（1.5% vs 0.5%）均持续高于以太坊，Solana REV 已于 2024 年超过以太坊。staked SOL 市值已达 staked ETH 市值的 60%，质押相关协议事实上有更大的可寻址市场
- **Meme 生态**：Pump.fun 成为 Memecoin 发行首选 → 链上资产大爆发；但Pump.fun累计售出约340.3万枚SOL（约6.29亿美元），成为FTX/Alameda后Solana第二大卖压来源（来源：[[来源_2025-05_发币平台_竞争_MemeLaunchpad_BlockBeats]]）
- **SVM 标准化**：Eclipse/Neon EVM → SVM 成为与 EVM 并行的执行标准
- **美国资金偏好**：相对以太坊更受美国机构认可
- **客户端多样性**：5+独立客户端实现并行开发，Firedancer C语言重写提升性能上限
- **RWA 生态崛起**：TVL $4.18 亿（YTD +140.6%），BlackRock/Apollo/Franklin Templeton/VanEck 均已在 Solana 部署。Token-2022 合规扩展 + 低费用 + 高吞吐量吸引机构 RWA 发行方
- **首个代币化公募基金**：2025年8月，招银国际CMBMINT成为Solana首个代币化公募基金产品，OnChain基于Token-2022标准构建合规架构，消息公布后SOL价格突破200美元（24小时+15%，叠加+5%），详见[[来源_2025-08_招银国际_基金代币化_CMBMINT_DigiFT_BlockBeats]]
- **App RCR >100%**：应用层收入超过底层协议收入，预示"胖应用"可能

## 2025年2月 Memecoin 崩溃与冲击

2025年2月，Solana Meme币驱动的增长遭遇重创：

- **链上交易量**：Memecoin交易量暴跌80%（MoM），Gas使用量降65%（MoM）
- **稳定币转账**（链上交易核心基础设施）：从1月水平暴跌80%
- **价格损失**：SOL月跌37%，DEX交易量降55%，费用收入降63%，MEV活动降63%
- **根本原因**：$TRUMP/$MELANIA的争议性发行后，$LIBRA（疑似与阿根廷总统Milei相关）代币从$40亿市值崩盘98%，暴露Meme币市场操纵
- **结构性反思**：Solana约80%收入来自Meme币，I/O高度单一化。此次崩溃验证了[[memecoins]]概念页中「Meme驱动的L1可持续性危机」的判断

尽管短期低迷，Solana仍展现了生态韧性：2024年全年SOL价格上涨191%，链上收入（不含MEV）增长700%，稳定币供应增长291%。

## SOL ETF 申请热潮（2024-2025）

截至2025年4月，已有6家机构向SEC提交Solana现货ETF申请：

| 机构 | 提交日期 | 详情 |
|------|---------|------|
| VanEck Solana Trust | 2024年6月 | 美国首个SOL现货ETF申请（S-1） |
| 21Shares Core Solana ETF | 2024年6月 | Cboe BZX上市 |
| Bitwise Solana ETF | 2024年11月 | 特拉华州注册后正式提交S-1 |
| Grayscale Solana ETF | 2025年1月 | 现有GSOL信托（$1.34亿AUM）转现货ETF，NYSE Arca上市 |
| Canary Solana ETF | 2024末~2025初 | 特朗普胜选后提交 |
| Franklin Templeton Solana ETF | 2025年3月 | 管理超$1.5万亿资产，提交S-1和19b-4 |

**监管基础设施进展**：
- DTCC已上市两只Solana期货ETF（SOLZ、SOLT）
- CME准备于2025年推出SOL期货合约
- Solana是否被认定为证券仍是关键监管障碍

**获批概率与影响预测**：
- 彭博行业研究：SOL ETF获批可能性高（75%）
- 分析师预计：若获批将带来30亿至60亿美元资金流入

来源：[[来源_2025-04_山寨ETF_加密ETF申请_PANews]]

## SIMD 系列提案（2025年2-3月）

### SIMD 096 — 优先费用全归验证者（2025.02.12通过）
将优先费用的销毁比例从50%降至0%，**100%的优先费用归验证者**。此前50%销毁的制度是为了防止验证者与交易者达成链下交易绕过链上费用，但实际效果不佳。新规激励验证者确保交易在链上完成，提高经济透明度。优先费用占Solana所有费用的约40%。

### SIMD 0123 — 优先费用分配给质押者（待投票）
要求验证者基于链上可验证的佣金率，将优先费用（占Solana总费用40%）分配给质押者。当前验证者只需与质押者分享投票奖励和MEV，大多数验证者保留大部分优先费用。

### 验证者经济数据（Blockworks Research 2025年3月）
- **验证者数量与质押**：1,332 个活跃验证者，3.809 亿 SOL 参与质押（供应量的 63.9%）
- **验证者收入构成**（2025年2月）：通胀奖励 76%、Jito 小费 14%、优先费 9%、基础费不足 1%。2025年1月链上活跃度高时曾达：通胀 55%、Jito 小费 30%、优先费 24%
- **运营成本**：硬件 $350-700/月；投票费用约 1.08 SOL/天（约 30-33 SOL/月 ≈ $5,000），是最大单项开支。每个验证者每 epoch 需持续对已确认区块投票，每票 0.000005 SOL，约 21.6 万 slot/天
- **额外收入来源**：出售 shreds（高质押验证者比低质押者更快收到区块信息）、出售 swQoS 连接、在自己的 leader slot 做 MEV
- **Jito 客户端**：占 92% 的质押权重（2025年1月），较 2024 年 10 月的 88% 继续上升

### SIMD-0228 通胀机制改革提案（2025年3月）
SIMD-0228 提案由 Multicoin Capital 联合创始人 Tushar Jain、投资合伙人 Vishal Kankani 和 Anza 工程师 Max Resnick 共同提出，是 Solana 历史上最具争议的经济参数调整提案之一：

- **提案核心**：将当前固定下降通胀模型（8%起始，每年降15%，目标1.5%）替换为基于质押率的市场驱动动态模型，通胀降至约 0.96%（基于 62.5% 质押率，Blockworks 数据）或 0.87%（基于 65.7% 质押率）。
- **公式机制**：通胀率 = f(质押率)，使用平方根函数设计——质押率高于65%时通胀大幅降低，低于33.3%时通胀显著提高，33.3%为平衡点。
- **关键辩论**：
  - **支持方（Multicoin/Max Resnick）**：固定通胀总是偏离最优值，"市场是最好的定价机制"。REV 已足够维持网络安全，继续高通胀是"过度支付安全成本"
  - **反对方（Lily Liu）**：通胀补贴机构分销渠道——ETP 发行商和托管人按名义收益率抽取佣金，高名义收益激励他们推广 SOL 产品。通胀不是"漏桶"而是"营销支出"。在 Solana ETF 即将上市前改变发行规则是战略错误
- **利益格局**：大投资者和非质押持币者支持（减少稀释），中小验证者反对（收益下降），大型验证者支持（MEV能力强可弥补）。
- **验证者影响**：高质押率情景下约3.4%（40-55个）验证者可能退出，质押率或从65.7%降至45-55%。当前Solana有1,323验证者，但仅458个在盈利门槛以上
- **"漏桶效应"**：年发行$3.82B中$955M（25%）通过税收和交易所抽成流失，提案预计年留存约$783M。
- 提案于2025年1月提出，最终以74%创纪录投票率未通过（见 [[来源_2025-07_Solana_H1_盈利增长_Helius]]）

## SPI / Project Open 监管推动

Solana 对代币化股票（RWA 重要子类）极为重视，通过 Solana 政策研究所（Solana Policy Institute, SPI）推动合规链上证券交易框架：

### 背景
- Solana 成立 SPI，旨在"教育政策制定者为何像 Solana 这样的分散网络是数字经济的未来基础设施"
- 推出 Project Open 项目，目标："实现合规的基于区块链的证券发行和交易"

### Project Open 框架
- 与 Orca、Superstate 及律所 Lowenstein Sandler LLP 共同推进
- 2025年4月起多次向 SEC 加密工作组提交书面意见
- 2025年6月12日，SEC 加密工作组与 Project Open 项目组开会讨论

### 核心流程
1. 发行人需预先获得 SEC 认可
2. 用户需完成 KYC 后可用加密货币购买代币化美股
3. SEC 注册的过户代理（Transfer Agent）在链上记录份额流转
4. 特别申请允许通过智能合约进行的点对点交易（即 AMM 交易）

### 关键特征
- 在 Backed Finance 现有模式基础上补充了 KYC 要求
- 所有持有者必须完成 KYC
- 申请对多项操作给予 18 个月的**豁免救济或解释指南**（Exemptive Relief or Confirmatory Guidance）
- 作者判断：在当前友好的 SEC 任内通过是大概率事件，疑问仅为时间

### 成员代币情况
- Phantom、Superstate 尚未发行代币
- Orca 已发行代币
- 合作方包括 Jupiter、Raydium、Kamino 等 Solana 生态头部 DeFi 协议

## 去中心化度量（2024年10月，Helius）
- **Nakamoto 系数**: 19（历史峰值 34，2023年8月），在 PoS L1 中排名中等；实体可匿名运行多验证者，真实 NC 可能更低
- **质押分布**: 4,514 节点（1,414 验证者 + 3,100 RPC），最大单一验证者 3.2%（Helius、Galaxy）；前 1/3 超级少数派需 440 万 SOL
- **地理分布**: 37 国家/地区、121 城市；美国 508 验证者（37%）但仅 18.3% 质押；68% 质押在欧洲，50.5% 在欧盟
- **托管服务商**: 135 家，Teraswitch 24% + Latitude.sh 19% = 前两名 43.4% 质押集中度
- **客户端多样性**: Jito 88% 质押份额；Firedancer/Frankendancer 逐步引入中，预期 12 个月内改善
- **开发者**: Agave 357 贡献者 + Firedancer 57 贡献者；Radar 黑客松 13,672 人/156 国
- **治理**: 3 次验证者投票（参与率 14.3%→53%），CCData ESG 评级 AA 级、L1 中第 4
- **压力测试**: 2022年 Hetzner 移除 20%+ 活跃质押验证者，网络未出现活性故障，数周内恢复

## 稳定币支付基础设施优势（2025 Q1）

Squads博客2025年3月的分析将Solana定位为长期主导稳定币支付的基础设施，核心论据：

### 本地费用市场（Local Fee Markets）
与Ethereum L1/L2不同，Solana通过分区数据库热点（partitioning database hot spots）实现本地费用市场，结合Jito交易分割引擎，使普通用户交易费用可预测且低廉——这对稳定币支付场景至关重要。

### Firedancer
Jump Crypto开发的独立Solana验证者客户端Firedancer在测试环境中已实现1M TPS，预计分阶段渐进部署。这为Solana的支付吞吐量提供了一个巨大的性能上限。

### 费用归属
Solana的费用流向去中心化验证者集，而Base的费用直接归Coinbase（2024年Coinbase从排序器获取至少$5600万收入）。费用结构的去中心化使Solana在可信中立性上占优。

### REV和生态规模
- Solana 2024年Q4 REV达$7.51亿，所有公链第一
- pump.fun自2024年3月推出以来已产生超$4.5亿费用
- 稳定币TVL达$107亿（2025年1月，历史新高）
- 2025年1月15-21日一周内约$30亿稳定币在Solana上铸造
- 稳定币支付垂直领域已涵盖跨境支付、POS、借记卡、收益生成等

来源：[[来源_2025-03_Solana_Base_稳定币支付_Squads]]

## Agent 支付关键地位（2025-2026）
Solana 在 AI Agent 支付基础设施中占据了一个结构性位置，这是其叙事从 Meme/DePIN 之外的新维度：

- **Google Pay.sh 结算层**：2026 年 5 月，Google 和 Solana 基金会联合发布 Pay.sh——一个让 Agent 用 USDC 按需付费使用 Google Cloud 服务（Gemini、BigQuery、Vertex AI）的开源网关。没有账号、没有订阅，付款即凭证。Google 没有选以太坊或 Base，选 Solana 做结算层
- **x402 交易量主力**：Solana 承载了 x402 协议近 65% 的交易量
- **双协议兼容层**：Pay.sh 兼容 x402 和 MPP 两套竞争协议，不选边做管道
- **x402 基金会治理**：Solana 基金会是 22 个创始成员之一，参与标准治理
- 在 Agent 经济基础设施中卡位，从"Meme 链"向"Agent 经济结算层"叙事扩展

## DePIN 生态主导地位（2025 Q1）

Solana 已被公认为 DePIN 项目的首选平台，其 DePIN 生态在规模和多样性上远超其他公链：

### 2025 年 3 月全景数据
- **项目数量**：约 78 个 DePIN 项目
- **总市值**：250 多亿美元
- **头部项目 FDV**：Helium、Render Network、Hivemapper 等完全稀释估值超 100 亿美元
- **生态覆盖**：无线通信（Helium）、计算资源（Render Network）、地理定位（Hivemapper）、云存储（GenesysGo SHDWDrive）、宽带（Dabba Network）等多个子领域

### 2025 Q1 新晋重要项目
- **[[doublezero]]**：分布式带宽 DePIN，由 Solana 基金会前战略主管 Austin Federa 创立，Dragonfly 和 Multicoin Capital 领投 2800 万美元。Solana 联合创始人 Anatoly Yakovenko 和 Raj Gokal 天使参投，被视为 Solana 基金会 DePIN 战略后的第一个明牌投资
- **[[roam]]**：全球 WiFi 共享网络（前身 MetaBlox 2018），2024 年品牌升级并迁移至 Solana。230 万用户、200 万 WiFi 节点覆盖 190+ 国家，硬件节点数 DePIN 赛道第一

### Solana 的 DePIN 竞争优势
- **性能/成本**：理论 50,000 TPS、每笔交易约 $0.00025，对需要频繁交易的 DePIN 项目（微支付激励、IoT 通信）尤为友好
- **生态支持**：Solana 基金会设立 DePIN 专项基金，通过资助和黑客松积极推动项目发展
- **对比优势**：相比 Ethereum 等公链，低 Gas 费使 DePIN 项目的微支付和硬件网络经济模型可行

详见 [[来源_2025-03_Solana_DePIN帝国_DoubleZero_Roam_BlockBeats]]

## MEME文化生态特征

PANews 2025年3月的分析将Solana MEME生态定性为社区驱动的"野生"文化熔炉。来源：[[来源_2025-03_Solana_BNBChain_MEME对比_PANews]]

### 五大MEME类型
1. **动物主题**（最具辨识度）：Bonk（反抗中心化压力）、WIF（戴帽子的柴犬，纯社区自发创意）、POPCAT（网红Oatmeal猫咪表情，互联网文化链上延续）
2. **PolitiFi类**：TRUMP（特朗普支持者创建）、PNUT（纽约松鼠事件，对抗政府过度监管象征）
3. **名人背书类**：马斯克、特朗普等名人推动，形成"名人+社区共创"传播模式
4. **技术梗类**：LLM、Solana Killer、TPS等，伴随技术讨论吸引开发者和技术爱好者
5. **互联网文化类**：Fartcoin、BOME、Gigachad等，强烈的视觉冲击和病毒式增长

### 核心特征
- **全民造币**（Pump.fun）：低门槛发币使任何创意迅速转化为链上资产，生态像一个开放的创意集市
- **副作用**：项目质量参差不齐，大多MEME短期炒作后归零，真正有文化价值的项目被噪音淹没
- **基础设施优势**：多种DEX（Raydium/Jupiter/Orca）+ 用户友好钱包（Phantom/Solflare）+ 发射工具（Pump.fun/Moonshot）+ 第三方分析工具（GMGN/Dexscreener/RugCheck），形成全链条生态
- **市场时机**：精准抓住2023年底熊市触底反弹的MEME热潮上升期，早期现象级项目（Silly/BOME等）创造示范效应点燃社区情绪

## 文化定位与治理特征

外部观察者将 Solana 定性为"区块链世界仅存的主动阴谋集团"和"发币集团"——不同于 Ethereum 的无政府主义自由意志或 BNB Chain 的公司化运作，Solana 从诞生起就在"阴暗面成长"，拥抱极致的资本效率:

- **Labs 与 Foundation 两分**：Labs 负责技术进步，Foundation（Lily Liu 主导）负责营销和生态推广。这一架构与 Ethereum 的 Vitalik 个人主导形成对比——Solana 的决策体系更接近商业组织，没有 Ethereum 的"名实不符"困境（[[来源_2025-03_以太坊_Solana_BNBChain_三链对比_深潮TechFlow]]）
- **"发币集团"网络**：从早期 Jump/SBF 高度控盘到 Meme 时代的 Jupiter DeFi 小团体，Solana 的生态参与者被认为具有"PayPal 黑帮"色彩——追求极致的资本效率，以去中心化的名义，"发币集团的原数奉还，散户群体的二八开"（[[来源_2025-03_以太坊_Solana_BNBChain_三链对比_深潮TechFlow]]）
- **人效比最高**：以以太坊 1/4 的开发者规模，在活跃地址和 dApp 收入上反超以太坊——尽管 DeFi TVL 和稳定币发行量大幅落后。这一数据主要受 PumpFun 主导的 memecoin 发行驱动，不能代表 Solana DeFi 全面超越以太坊（[[来源_2025-03_以太坊_Solana_BNBChain_三链对比_深潮TechFlow]]）

## 风险 / 争议
- 宕机历史（多次网络中断）
- 节点硬件要求高（24核/512GB内存/PCIe Gen3 NVMe），家用运行不现实
- 客户端集中度：Jito 88% 份额是最大单点故障风险，取决于 Firedancer 采纳进度
- 过度依赖 Meme → 前5大应用收入全与Meme交易相关，叙事单一风险
- FTX Estate解锁风险：约1120万SOL在2025年3月解锁（~$25亿），平均解锁日在Q4'25

## 相关实体
- [[eclipse-l2]] — 首个 SVM 以太坊 L2
- [[sonic-svm]] — Solana 首个 SVM Layer 2，专攻 Web3 游戏，HyperGrid 多网格架构
- [[solayer]] — Solana Restaking 内源性 AVS
- [[jito]] — Solana MEV + Restaking + 最大LST
- [[jupiter]] — Solana 最大 DEX 聚合器，正通过收购转型为生态基建运营商
- [[moonshot]] — Solana Meme 交易平台+法币入金，2025.1 被 Jupiter 收购多数股权
- [[pumpfun]] — Solana 最大 Meme 币发行平台
- [[ondo-finance]] — Solana 上最大 RWA 发行方（USDY $1.75 亿）
- [[blackrock-buidl]] — 贝莱德代币化基金已部署到 Solana
- [[securitize]] — RWA 合规基础设施，支持 Apollo/VanEck 在 Solana 上发行
- [[apollo-acred]] — Solana 上代币化私募信贷基金
- [[backed]] — 代币化股票 xStocks 在 Solana 上发行
- [[okay-bears]] — 2022年 Solana NFT 标杆项目，被称为"Solana 上的 BAYC"，在熊市中凭借品牌叙事和中性画风创下销售记录

## 运营策略（2023年初观察）
- **The Collective 大使计划**: 配置精神激励 + 物质激励，培养用户布道者
- **Blockchain and Solana 101**: 因 Solana 开发语言（Rust）的差异性，专门打造的开发者入门课程，降低 onboarding 门槛
- **技术创新叙事**: PoH（Proof of History）+ PoS，突出 "Super Fast" 定位；与 BNB Chain 很少聊技术形成鲜明对比
- **开发者工具展示**: 清晰分类展示各类型开发工具，方便开发者选型

## 来源
- [[来源_2024-10_Solana去中心化程度_中本聪系数_验证者分布_Helius]] — 六维度去中心化量化分析
- [[来源_2024-03_Eclipse_首个SVM_Layer2_以太坊Solana_Celestia三者结合]]
- [[来源_2024-08_4Alpha_Research_PayFi_Solana新叙事]]
- [[来源_2024_Solayer_Solana_Restaking商业分析]]
- [[来源_2024_Memecoin年度消费报告]]
- [[来源_2024-12_Solana_Q4状况_Messari]]
- [[来源_2025-07_Messari_Solana_RWA_赛道]] — Solana RWA 生态全景：$4.18 亿 TVL/四大资产类别/机构部署
- [[来源_2025-06_Solana_RWA_全面概述_Helius]] — Solana RWA 生态完整全景：7 大赛道 20+ 项目详细拆解/R3-Corda 集成/代币化股票三条路径/各协议具体链上发行量
- [[来源_2024-09_Folius_Jason_VC币_攒局项目_劣币驱逐良币]] — Jason评价：Solana基金会（Lily团队）在推动应用落地方面非常扎实，商业落地和UX方面表现最出色，以太坊若不努力可能在下周期失去竞争力
- [[来源_2024-11_以太坊_Solana_Staking商业模式差异_MintVentures]] — swQoS机制细节、质押市场规模对比（ETH vs SOL）、"性能优先"实用主义 vs 以太坊去中心化意识形态的制度差异
- [[来源_2025-01_Solana_AI黑客松落幕_获奖项目详情_深潮TechFlow]] — SendAI 主办 Solana AI 黑客松：400+ 项目/9 赛道/21 获奖项目，Solana 已成为 AI Agent 创业首选公链
- [[来源_2024-12_David_Sacks_白宫加密负责人_投资组合_BlockBeats]] — 白宫加密负责人 David Sacks 公开持有 SOL、自称「SOL Maxi」；FTX 暴雷后未抛售；通过 Multicoin 间接参与 Solana 2019 年 $2000 万融资轮
- [[来源_2024-08_以太坊VC基建痴迷_EBOLA_Solana_BlockBeats]] — Solana 低启动成本+社区支持+快速交付理念使其成为用户导向型创始人最优选；memecoin 仅占 DEX 交易量 25%；80%+ 主要 DePIN 项目在 Solana 上构建；VS Ethereum VC 基础设施痴迷结构性批判
- [[来源_2024-08_各链PumpFun仿盘_跨链对比_ForesightNews]] — Solana拥有Pump.fun+MakeNow.Meme+Moonshot三个Meme发行平台（链内竞争），Pump.fun累积收入超$1亿为所有仿盘标杆
- [[来源_2025-01_Jupiter收购时间线_DEX基建_深潮TechFlow]] — Jupiter 收购全景：SolanaFM/Coinhall/Sonarwatch/Ultimate Wallet/Moonshot，从 DEX 聚合器进化为生态基建运营商；Meteora 作为 Solana 收益层的生态位；Jupnet 全链网络布局
- [[来源_2024-12_Solana节点运营_MEV盈利_Jito_Raydium_PANews]] — Leo从节点运营者视角：POH时钟机制消除内存池/MEV比拼低延迟而非gas竞价/1.18升级swQoS前身/FTX后社区自救/Sonic作为Solana首个L2专攻游戏/Memecoin LP可持续盈利模式
- [[来源_2025-03_Solana_DePIN帝国_DoubleZero_Roam_BlockBeats]] — Solana DePIN 生态全景：78 个项目/250 亿市值/DoubleZero 2800 万/Roam 全球 WiFi 230 万用户/DePIN 专项基金
- [[来源_2024-09_L2_Solana_Appchain_应用部署选择_Web3Caff]] — 从开发者部署选择角度分析 Solana：优势为极高性能/统一可组合体验/生态网络效应（Kamino+Jupiter），劣势为中心化风险/网络中断历史，在三种部署方案中与通用 L2 和应用链形成三角权衡
- [[来源_2024-07_Solana_Blinks_Web3大规模采用_PANews]] — Solana Blinks 技术解析：Blockchain Links 将链上操作转化为可分享 URL/二维码，与 TON Telegram Mini App 形成"跨平台通用协议 vs 单一超级App"两种社交+链上路径竞争
- [[来源_2024-07_Solana_Blinks_22个用例_BlockBeats]] — Blinks推出7天内22+用例枚举：预测市场/多签/空投检查/迷你游戏/NFT铸造/付费留言/活动准入/内容付费/私信交易/支付结算/钱包清理/Meme工具/验证者质押/平台Actions/GitHub打赏/交互式NFT/YouTube/Telegram/Apple NFC
- [[来源_2024-08_三大公链收入可持续性_Ethereum_Solana_Tron_odaily]] — 2024年8月三链收入对比：Solana 高度依赖 Meme（80% 交易/Meme 玩家月亏 $110M），模式不可持续
- [[来源_2024-11_Memecoin市场图谱_1200亿资产类别_ChainCatcher]] — Eli Nuss 确认 Bonk 和 Wif（2023 年末）奠定 Solana 作为主导 Memecoin 链地位的历史节点，随后 pump.fun 加速催化，Solana 成为 2024 年 Memecoin 主战场
- [[来源_2024-09_Solana生态系统全景_融资历史_技术机制_深潮TechFlow]] — Insight VC 尽调级全景报告
- [[来源_2025-01_Sonic_SVM_Web3游戏_Solana扩展_PANews]] — Sonic SVM：Solana 首个 SVM Layer 2 游戏扩展方案，HyperGrid 架构，$SONIC 代币经济学：$3.59亿融资历史（种子$0.04→ICO $0.22→a16z $3.14亿共7轮）、通胀参数四种情景量化模拟（8年内供应量最大减少12.2%）、PoH/Tower BFT/Turbine/SVM技术架构完整拆解、FTX遗产$10亿+SOL风险、生态项目分类列表
- [[来源_2025-01_TRUMP发行细节_SOL历史新高_PANews]] — TRUMP 代币选择 Solana 而非以太坊 → 市场解读为总统"钦定"Solana → SOL 突破 $295 ATH；Moonshot 单日新增 40 万用户/$4 亿交易量，验证 Solana 作为新兴代币首选发行平台的马太效应
- [[来源_2025-08_a16z_银行_资管_Fintech_区块链转型_深潮TechFlow]] — Solana 代币扩展功能提供隐私合规特性，可实现合规性功能；R3 Corda宣布与Solana合作结算资产；Solana被列为速度快于以太坊的代表方案之一（交易费用低于$0.01，亚秒级延迟）
- [[来源_2024-11_链上入门指南_从二级到链上_0xWizard]] — 从用户视角展示 Solana meme 交易全流程：Phantom 钱包+GMGN+Raydium 工具链，Solana 作为 meme 主战场的生态实践
- [[来源_2025-01_Trump加密图谱_七大类_Layergg]] — TRUMP 在 Solana 发行后 SOL 上涨 40%、SOL/ETH 或创历史新高 + Meteora/Jupiter 合作 + 2025 年 SOL ETF 预期升温
- [[来源_2025-03_Meteora_DLMM_单边池_价格区间_深潮TechFlow]] — Meteora DLMM 单边池教程：Solana 链上 Dev 通过 DLMM 单边池在指定价格区间自动出货/吸筹的操作原理与链上数据验证方法
- [[来源_2024-10_MEME流动性博弈_多方获利_PANews]] — Solana MEME市值近$120亿（占整体市场27.4%）、日交易手续费$550K创2024年5月以来最高（MEME炒作驱动）、确认Solana是"这波MEME热潮的沃土"且新MEME币价格爆发力优于以太坊
- [[来源_2022-05_SOLANA_NFT图腾_OkayBears_匿名达摩院]] — 2022 年 Solana NFT 标杆项目 Okay Bears 深度研报，含项目基本面/团队/路线图/画风分析/估值框架，反映 Solana 早期 NFT 生态的竞争态势
- [[来源_2025-03_SIMD-0228_Solana通胀_深层博弈]] — SIMD-0228 提案机制分析、利益博弈与数据量化、"漏桶效应"、验证者经济模型冲击
- [[来源_2025-02_VanEck_加密货币月度回顾]] — 2025年2月Solana Meme崩溃数据（交易量降80%/SOL跌37%/SIMD进展）
- [[来源_2025-04_Web3消费者应用_投资理论_IOSG]] — IOSG Ventures 明确 Solana 比 EVM 生态更有利于 Consumer 应用成功，列出四大原因：更具活力的社区、更强生态资源支持、更快低成本基础设施、非 EVM 技术选型带来的产品竞争壁垒
- [[来源_2025-07_代币化美股_现状前景_MintVentures]] — Solana 政策研究所（SPI）和 Project Open 框架详细机制：与 SEC 加密工作组互动进程、18 个月豁免救济申请、代币化美股 KYC 流程、成员代币情况（仅 Orca 发币）
- [[来源_2022-06_周期_加密市场_下一轮_tolks]] — 2022 年中作者将 SOL 评为非 ETH 智能合约平台"最可能赢家"：最高吞吐量交易链、CLOB Serum 驱动创新 DeFi、预测 SOL 将成为 GameFi 和 DeFi 大型项目所在地、NFT 生态持续扩展；预测 SOL 在解决其问题后到 Q4 可能复刻 ETH 此前走势从两位数涨至四位数（事后看未实现，因 FTX 崩溃完全颠覆）
- [[来源_2026-05_AI_Agent_支付狂飙十二个月]] — Google Pay.sh 选择 Solana 做结算层、65% x402 交易量、基金会参与 x402 治理
- [[来源_2025-04_山寨ETF_加密ETF申请_PANews]] — SOL ETF 6家申请机构全景、DTCC/CME基础设施进展、75%获批概率、$3-6B预期流入
- [[来源_2025-07_山寨币ETF_72份_价值投机_深潮TechFlow]] — 补充：SOL ETF申请机构增至9家（含Invesco Galaxy QSOL），彭博获批概率上调至90%以上；质押条款详细披露（50-70%持仓质押+可信质押服务商），质押净收益约1.9-2.2%
- [[来源_2025-03_Solana_Base_稳定币支付_Squads]] — Solana与Base稳定币支付公链选型对比：本地费用市场/Firedancer/Q4 2024 REV $7.51亿/可信中立性论据
- [[来源_2025-03_以太坊_Solana_BNBChain_三链对比_深潮TechFlow]] — 三链对比分析：Solana "阴谋集团"文化定位、Labs/Foundation 两分架构、人效比（1/4 开发者超越 ETH 活跃地址和 dApp 收入）
- [[来源_2025-03_Solana_BNBChain_MEME对比_PANews]] — Solana MEME生态五种类型分类（动物/PolitiFi/名人背书/技术梗/互联网文化）、"野生"社区驱动文化特质、"全民造币"模式的优劣势、全链条基础设施优势（多DEX/钱包/发射/分析工具）
- [[来源_2025-06_稳定币_DeFi收入_Keyrock]] — 补充 Solana $13b vs 以太坊 $127b 稳定币 AUM 对比，Raydium >80% 收入来自波动性交易对的结构性特征分析
- [[来源_2025-03_交易生命周期_以太坊_Solana_Aptos_PANews]] — 交易生命周期视角对比Solana与Aptos/Ethereum：无内存池设计、PoH 400ms出块、Sealevel确定性并行执行及与Aptos乐观并行的技术分化分析
- [[来源_2025-02_Dapp报告_用户活动降温_AI增长_PANews]] — DappRadar 2025年2月报告：Solana TVL降33%至$15.4B（跌幅最大），或归因于1月强劲后获利回吐和流动性迁移；Jupiter UAW降10%，Raydium UAW降39%
- [[来源_2025-07_公链数据_以太坊_Base_Hyperliquid_PANews]] — 2025年Q2 8链横向对比：Solana价格反弹但资金净流出1.12亿、日活降14%、稳定币减15亿、Pump.fun日新代币从9-10万降至4-5万
