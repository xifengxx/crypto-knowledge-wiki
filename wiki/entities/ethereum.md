---
type: entity
entity_type: protocol
created: 2026-07-01
updated: 2026-07-02
tags: [ethereum, l1, smart-contract-platform, rwa]
aliases: [ETH, 以太坊]
---

# 以太坊（Ethereum）

## 基本信息
- 类型 / 赛道: L1 智能合约平台
- 成立时间: 2015 年 7 月（创世区块）
- 创始人: Vitalik Buterin、Gavin Wood 等
- 共识机制: PoS（2022 年 9 月 The Merge 后）
- 原生代币: ETH

## 核心架构与路线图

以太坊的扩展策略是以 Rollup 为中心的路线图（Rollup-Centric Roadmap），核心分工：L1 作为去中心化基础层（类比法院系统——保护合同和财产权），L2 承担生态扩展任务（类比创业者——在基础层之上建设）。

### 路线图六大阶段

| 阶段 | 英文 | 核心目标 |
|------|------|---------|
| The Merge | 合并 | 从 PoW 转向 PoS |
| **The Surge** | 激增 | L1+L2 扩展至 10 万+ TPS |
| The Scourge | 清算 | 抗审查、解决 MEV 风险 |
| The Verge | 边界 | Verkle 树、轻客户端验证 |
| The Purge | 清除 | 历史过期、状态清理 |
| The Splurge | 挥霍 | EVM 改进、账户抽象等 |

### The Surge 关键目标（2024.10 Vitalik 最新阐述）
1. L2 达到 10 万以上 TPS
2. 保持 L1 的去中心化和鲁棒性
3. 至少部分 L2 完全继承以太坊核心属性（去信任、开放、抗审查）
4. 以太坊生态应感觉像一个统一整体，而非 34 条不同区块链

### 扩展技术栈
- **数据可用性采样（DAS）**: PeerDAS（1D）→ 2D 采样，中期目标每 slot 16 MB
- **数据压缩**: 签名聚合（BLS）、地址指针替换、交易值自定义序列化
- **Plasma**: SNARK 增强的 Generalized Plasma，与 Rollup 互补
- **L2 证明成熟度**: Stage 0/1/2 三阶段框架，目标全部 L2 达到 Stage 2
- **跨 L2 互操作性**: 链特定地址、跨链兑换标准、轻客户端、Keystore 钱包
- **L1 执行扩展**: EOF 字节码、多维 Gas 定价、EVM-MAX/SIMD、原生 Rollups

## 关键数据
- **稳定币 AUM**: $127b，远超 Solana 的 $13b，主网占据稳定币 TVL 绝对主导地位（Keyrock 2025.06）
- **RWA 市场份额**: 超过 50%，占据 RWA 代币化市场主导地位（2025 年中）
- **早期机构 RWA 实验**: JPMorgan Quorum（2016-2017）、Societe Generale €100M 担保债券（2019）、EIB €100M 数字债券（2021）
- **RWA 生态流动性**: Ondo Finance $600M+ TVL、Spark Protocol $2.4B+ 国债、Ethena 合成稳定币——均建立在以太坊上
- Dencun 升级（2024.03.13）后：每 12 秒 slot 3 个 ~125 kB blob ≈ 375 kB/slot
- 仅 blob 数据带宽下 L2 最大 TPS: ~173.6（ERC20 转账），加 calldata 约 607
- PeerDAS（8-16 blob）可为 calldata 提供 463-926 TPS
- 中期目标 16 MB/slot → 结合压缩后约 58,000 TPS
- **2024年8月 30日收入快照**: Gas 费 $99.89M/30d（三链第一），日活地址 31.6 万（三链最低）
- **Gas 费用结构（EIP-1559 后）**: 基础费（Base Fee，系统自动销毁）+ 小费（Tips，支付给验证者）。近 30 日销毁 ~$47M ETH
- **Gas 消耗分布**: DeFi 60% / ETH 转账 12% / MEV 8% / NFT 8% / L2 6% / 合约创建 2%
- **DEX 赛道**: 占 DeFi 超 40%、生态超 25%。Uniswap 贡献生态 Gas 的 17.3%（$8.15M 燃烧），1inch 贡献 $1.21M
- **Dex Trading Bot**: Banana Gun $1.73M + Maestro $1.51M = 生态占比 6.9%，头部两项目占赛道 90%+
- **稳定币转账**: 近一月燃烧 $4.01M（占总燃烧 8.5%），由 USDT/USDC 主导
- **钱包赛道**: MetaMask 30 日贡献 $2.91M Gas（燃烧 $0.94M），生态占比 ~2%
- **收入质量特征**: 收入来源最均衡——四大类（DeFi+转账+MEV+NFT）合计 88%，无单一赛道过度集中
- **2025年2月结构性恶化**: 收入份额从55%（2024.02）降至24%（2025.02），Gas价格年降88%，收入年降93%。ETH不再通缩，gas价格创2024年中以来最低

## L2 证明系统三阶段

| 阶段 | 证明系统 | 安全委员会 | 升级机制 |
|------|---------|-----------|---------|
| Stage 0 | 可完全信任/中心化 | — | — |
| Stage 1 | 无信任证明系统 | 可推翻，需 75% 投票，26%+ 外部成员 | 有延迟的 DAO，用户可提前退出 |
| Stage 2 | 双冗余无信任证明系统 | 仅代码可证明错误时干预 | 极长延迟 |

## 竞争优势 / 护城河
- 最强的去中心化和安全性（数千个独立验证节点）
- 最成熟的 L2 生态（Arbitrum、Optimism、Base 等）
- 最强的开发者网络效应（Solidity/EVM 标准）
- 作为"法院系统"的 L1 定位——终局性和不可篡改性不可替代

## 风险 / 争议
- L2 碎片化导致用户体验割裂（"34 条不同的区块链"）
- L1 扩展速度争议：Gas 上限提高与去中心化的权衡
- DA 收入外流至 Celestia 等替代 DA 层的风险
- L2 证明系统成熟度不足——大多数 Rollup 仍依赖安全委员会
- **ETH 不再通缩**：由于L2和竞争链分流交易量，Gas价格年降88%，ETH燃烧量大幅下降，削弱了"ultrasound money"叙事
- **收入份额持续萎缩**：从55%（2024.02）降至24%（2025.02），主链不再是交易活动的中心。DeFi收入暴跌80%
- **竞争劣势加剧**：以太坊最大记录TPS仅~63，远低于Solana的~4000和Firedancer的10万+预期。Vitalik已呼吁10x gas容量提升，但这可能牺牲去中心化
- **RWA 竞争加剧**：虽然以太坊在 RWA 市场保持超过 50% 份额，但结构性局限（TPS、Gas 费波动、最终确认时间 3 分钟）促使 Securitize 等核心 RWA 基础设施商扩展到 Solana/Polygon 并开发自有链 Converage（[[来源_2025-06_以太坊_RWA_主导地位_TigerResearch]]）
- **生态迁徙**：Uniswap（占以太坊11%收入）、Ondo（~$1B资产）、ENS等核心项目正在迁移至自有链，侵蚀以太坊的经济基础
- **PoS安全性质疑**：前以太坊爱好者核心研究者[[a-jian]]系统论证PoS存在权益研磨攻击、长程攻击和旧私钥攻击等根本性缺陷，以太坊依赖"弱主观性"概念——节点掉线超4个月后需信任数据提供者，无法达到PoW的客观可验证性。认为以太坊Merge在可扩展性上未带来实质改善，共识验证开销反而更大（[[来源_2022-09_PoW_PoS_阿剑_ForkIt]]）
- **治理危机**：EIP-1559的推进过程中反对声音被压制，以太坊被批评为"没有技术共识的政治共识"，只能通过硬分叉推行变更，不支持用户选择不升级（[[来源_2022-09_PoW_PoS_阿剑_ForkIt]]）
- **Vitalik 的 BDFL 悖论（2025年3月分析）**：Vitalik 拒绝承担 BDFL（终身仁慈独裁者）之名，但保留对 EF 一切事务的最终决定权。文章将这种状态描述为"混沌中立"——"既不想名正言顺领导 EF 的一切，又希望保留对 EF 的最终决定权"。这一悖论导致以太坊处于"严格意义上的低速失控状态"，要么慢慢沉寂，要么被夺舍（[[来源_2025-03_以太坊_Solana_BNBChain_三链对比_深潮TechFlow]]）
- **EF 结构性矛盾**：与 Linux/RISC-V 等纯技术基金会不同，EF 不必考虑盈利，但下游 EVM 生态必须盈利，形成"Vitalik--EF--EVM"的三层别扭——Vitalik 以个人意志主导，EF 执行，EVM 生态承担盈利压力但无决策权。Aya 被提升至 EF 主席被解读为"确保 EF 众人能遵循 Vitalik 意志的唯一选择"，而非治理民主化信号（[[来源_2025-03_以太坊_Solana_BNBChain_三链对比_深潮TechFlow]]）
- **Pectra 升级关注度危机**：2025年初 Pectra 升级的关注度已"降低到无人关心的可怕境地"，被认为是以太坊沉寂的前兆，非 ETH 拉盘或 Meme 能解决（[[来源_2025-03_以太坊_Solana_BNBChain_三链对比_深潮TechFlow]]）

## Pectra 升级（计划 2025 Q1）

Pectra 升级横跨 The Surge 和 The Splurge 两阶段，是对以太坊扩展性和用户体验的双重推进：

| EIP | 领域 | 内容 |
|-----|------|------|
| **EIP-7702** | 账户抽象 | 允许所有 EOA 临时转换为智能合约账户（单签名多事务/零 Gas）。安全风险：签名钓鱼。需要钱包产品适配 |
| **EIP-7691** | 扩展性 | Blob 目标 3→6、上限 6→9，降本 Rollup 并优化 Gas 费弹性曲线 |
| **EIP-7251** | 质押效率 | 质押上限 32→2,048 ETH（64倍），允许质押服务商/鲸鱼合并单节点，减少验证者总数 |

## DevCon 关键讨论
- **Beam Chain（"以太坊 3.0"）**：引入 Snark 技术、区块生成和质押优化，路线图跨度约 5 年，属于长期愿景而非短期重点
- **Rollup 互操作性**：流动性碎片化为核心痛点，两大竞争方案——基于 L1 的 Rollup（Spire Labs Based Stack，2025 Q1 上线）vs 共享排序器（Astria/Espresso/Polygon AggLayer）
- **L2 成熟度现状**：仅 Optimism 和 Arbitrum 达 Stage 1（许可欺诈证明），大多数 L2 停留 Stage 0（中心化升级，无欺诈证明）

## 相关事件时间线
- 2015-07: 创世区块
- 2019: 分片与 L2 路径融合，形成以 Rollup 为中心的路线图；Societe Generale FORGE 在以太坊主网发行 €100M 担保债券
- 2021-04: EIB 在以太坊发行 €100M 数字债券，由 Goldman Sachs、Santander、Societe Generale 合作
- 2022-09: The Merge（PoW → PoS）；同期发生ETH PoW分叉硬分叉事件，但以太坊正统性争议——ETH PoW也是从原始PoW链分叉出的新链，原始链因难度炸弹消亡（[[来源_2022-08_ETH_PoW_分叉_正统性_0xTodd]]）
- 2022-11-05: Vitalik 发布更新版路线图，六大阶段正式成型（新增 The Scourge，重新定义 The Verge），单槽确定性列为 Merge 第二阶段里程碑
- 2024-03-13: Dencun 升级（EIP-4844 blob 上线）
- 2024-10: Vitalik 发布 The Surge 完整愿景文章
- **2025.02**: 验证者将gas限制从30M提升至36M（+20%）；以太坊区块链收入份额降至24%（一年前55%）；Vitalik呼吁10x gas提升
- 2025-Q1: Pectra 升级（EIP-7702/7691/7251）计划上线，blob容量翻倍至6/12

## 相关实体
- [[arbitrum]] — 最大 TVL 的 EVM Rollup
- [[optimism]] — OP Stack 生态，Superchain 愿景
- [[fuel]] — 应用特定 Rollup，已实现 Stage 1 去信任
- [[taiko]] — 计划使用多证明系统
- [[scroll]] — Keystore 钱包设计
- [[celestia]] — 替代 DA 层竞争者
- [[eigenlayer]] — 再质押基础设施，EigenDA

## 来源
- [[来源_2022-08_ETH_PoW_分叉_正统性_0xTodd]] — 以太坊Merge期间PoW分叉的正统性缺陷分析：ETH PoW和PoS都是原始PoW链的硬分叉，原始链因难度炸弹消亡；区块链分叉完整分类学；比特币与以太坊在软/硬分叉路线上的根本哲学差异
- [[来源_2025-07_以太坊十年_世界计算机_PoS转型_BlockBeats]] — 以太坊十年叙事完整回顾（2015-2025）：The Merge能耗降99%/发行降90%、Dencun升级后净供应减30万ETH、L2分流致主链价值捕获被侵蚀（渣打估Base仅一条L2"拿走"500亿市值）、Tron USDT超800亿枚超越以太坊成为最大稳定币网络、Lido占约25%/币安8.3%/Coinbase6.9%质押市场格局、超112万验证者/3611万ETH锁定/29.17%质押率、2025年7月ETH日销毁不足50枚创新低、EF 2025年7月四大支柱改革设立2.5年资金缓冲、Vitalik The Surge 10万TPS愿景
- [[来源_2025-01_以太坊路线图_Pectra升级_DevCon_PANews]] — Pectra 升级三大 EIP（7702/7691/7251）参数、DevCon 互操作性讨论、Beam Chain 长期愿景、Tornado Cash 制裁驳回
- [[来源_2024-10_The_Surge_以太坊扩容_Rollup_Vitalik]] — The Surge 完整路线图：DAS/数据压缩/Plasma/L2 证明/跨 L2 互操作/L1 扩展
- [[来源_2025-01_以太坊Gas限制之争_区块上限_验证器_MEV_深潮TechFlow]] — Gas 上限提高辩论：3000万→3600万→6000万三步走、EIP-7623/4444 缓解方案、执行时间>4000ms 重组率 3x+、验证者存储 1.5-1.6TB、MEV 收入差距风险
- [[来源_2024-08_三大公链收入可持续性_Ethereum_Solana_Tron_odaily]] — 2024年8月三链收入对比：Ethereum 最均衡（DeFi 60%/ETH转账 12%/MEV 8%/NFT 8%），收入质量最高
- [[来源_2022-12_胖应用_Fat_App_范式转移_BlockBeats]] — 将以太坊类比为"中世纪天主教廷"：胖协议时代的价值中心，但面临超级应用（民族国家）崛起的挑战——应用将通过控制用户接触点和订单流来虹吸底层协议的价值
- [[来源_2023-04_NFT发行指南_从零构建NFT项目_深潮TechFlow]] — 2023年4月数据显示超过 90% 的 NFT 销售和交易仍发生在以太坊主网上，尽管存在 Gas 问题，以太坊仍是 NFT 生态的绝对主导链
- [[来源_2025-02_VanEck_加密货币月度回顾]] — 2025年2月以太坊结构性恶化数据：收入份额55%→24%、Gas费年降88%、收入年降93%
- [[来源_2025-02_ETH卷土重来_DeFi投资者]] — 2025年2月市场情绪快照：ETH严重跑输（ETC都跑赢了ETH）、L2碎片化（100+条L2）被认为是最紧迫问题、EF年烧$100M+但交付速度慢于竞对、Pectra升级确认、Ondo Summit同日举行
- [[来源_2022-11_V神更新以太坊路线图_Scourge阶段_BlockBeats]] — 2022年11月 Vitalik 发布更新版路线图（六大阶段正式成型）：新增 The Scourge 应对 MEV、The Verge 重新定义为"完全 SNARK 化的以太坊"、单槽确定性列为 Merge 第二阶段里程碑
- [[来源_2024-08_做市商视角_85急跌_Jump背锅侠_odaily]] — 2024年85暴跌中ETH作为山寨币代表跌幅超20%，验证ETH在宏观冲击下仍被市场归类为高风险资产而非避险资产；做市商同行判断Jump的ETH转移实为自有持仓调整而非砸盘
- [[来源_2022-09_PoW_PoS_阿剑_ForkIt]] — 来自前以太坊爱好者核心研究者的深度批判：PoS安全性缺陷系统分析（权益研磨/长程攻击/弱主观性）、以太坊Merge本质是大区块路线、EIP-1559治理过程反对声音被压制、"没有技术共识只有政治共识"
- [[来源_2021-09_加密初学者指南_PeterYang]] — 记录以太坊向Eth2.0 PoS转型初期的行业共识和Gas费用矛盾（平均$3.8/笔）；介绍Ether/Gas/Smart Contract/Dapp四层架构，2021年代表性dapps（OpenSea/Uniswap/Decentraland）
- [[来源_2022-01_智能合约开发工具_十大工具_Medium]] — 2022年初以太坊智能开发生态全景：前10 DeFi项目9个使用Solidity，大部分基于EVM，Solidity市场份额约90%，Hardhat/Brownie/DappTools为三大明星框架
- [[来源_2022-07_ETH合并_正向灰犀牛_投资机会]] — Merge前的前瞻供需模型分析：预测日均发行从14,500降至1,800 ETH（-90%）、合并后质押收益率可达7.5%、二级市场卖压减少95%以上；作者将ETH重新定义为"永续债"型生息资产，用传统金融框架（市盈率13倍/现金流折现）评估合并后的ETH资产属性
- [[来源_2025-06_以太坊_RWA_主导地位_TigerResearch]] — Tiger Research 分析以太坊在 RWA 市场超过 50% 份额的结构性原因（先发优势/机构信任/深层流动性/去中心化）和挑战者威胁
- [[来源_2025-03_以太坊_Solana_BNBChain_三链对比_深潮TechFlow]] — 三链对比分析：Vitalik 治理悖论、EF 结构性矛盾、Pectra 关注度危机、"低速失控状态"判断
- [[来源_2025-06_稳定币_DeFi收入_Keyrock]] — 补充以太坊 $127b 稳定币 AUM 数据，以及 Keyrock 预测其 AUM 主导地位将因高 Gas 费用而逐渐下降的预判
- [[来源_2025-02_传统大公司_以太坊_RWA_NFT_深潮TechFlow]] — Galaxy Research 副总裁 Christine Kim 调查报告
- [[来源_2025-07_ETH储备公司_四家企业_深潮TechFlow]] — 补充ETH作为上市公司金库储备资产的新兴用例：四家上市公司通过"ETH储备策略"实现股价暴涨，以及ETH生态资本网络广泛触角作为以太坊网络强健性的例证
- [[来源_2022-07_Web3_收入_价值捕获_FutureMoney]] — 2022年Q2数据：Ethereum半年总收入46亿美元，在所有Web3协议中遥遥领先；EIP-1559上线后已燃烧约238万个ETH，是销毁力度最大的L1；收入来源为"出售区块空间"模式，占Web3总收入近一半：超过50家非加密原生公司在以太坊/L2上构建产品——55家公司中23家发行NFT、13家金融机构发行RWA；以太坊RWA总值是第二名Stellar的十倍；索尼推出Soneium L2、德意志银行开发DAMA 2 L2（ZKsync）；Atari/Lamborghini/Lotte在Base/Arbitrum上开展链游；以太坊稳定币供应量年增70%、市场份额超50%；SEC委员Peirce声明第9项强调代币化现代化
- [[来源_2025-04_Crypto估值_梅特卡夫_DCF_深潮TechFlow]] — 补充以太坊的梅特卡夫定律估值参数：V=3000*N^1.43（N为每日活跃用户数），西方学者实证该公式与ETH市值走势具有相关性
- [[来源_2025-07_公链数据_以太坊_Base_Hyperliquid_PANews]] — 2025年Q2 8条主流公链横向对比：以太坊ETF净增50亿美元、价格暴涨130%+、但TVL中ETH数量下降21%
