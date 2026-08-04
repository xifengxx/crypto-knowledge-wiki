---
type: entity
entity_type: protocol
created: 2026-07-01
updated: 2026-07-02
tags: [bitcoin, ordinals, nft, btc-ecosystem]
---

# Ordinals 协议

## 基本信息
- 类型: 比特币链上协议 / NFT 标准
- 创始人: Casey Rodarmor
- 首次提出: 2022年12月
- 关键技术前提: Taproot 升级（2021年11月14日激活）
- 核心机制: 为每个聪（sat）编号并追踪，通过"记录"（inscription）附加数据，形成比特币原生 NFT

## 核心机制

### 顺序理论（Ordinal Theory）
为每个聪分配序列号，编号依据开采顺序（minting order），转移依据交易输入输出顺序。这使每个聪可被识别、追踪和收集。

### 记录（Inscription）
用户在聪上附加额外数据（图像、视频、文本等），该数据直接纳入比特币区块，完全驻留在链上——不需要侧链或单独的代币。与以太坊 NFT（通常依赖智能合约和链下存储）有根本性技术差异。

### 稀有度等级系统
基于比特币总供应量，将聪按稀有度分6级：
- **普通级**（Common）: 非区块第一个聪之外的任何聪，总量 2100 万亿
- **优良级**（Uncommon）: 每个区块的第一个聪，总量 6,929,999
- **稀有级**（Rare）: 每个难度调整期的第一个聪，总量 3,437
- **史诗级**（Epic）: 每次减半后的第一个聪，总量 32
- **传奇级**（Legendary）: 每个周期的第一个聪，总量 5（周期 = 减半与难度调整重合，预计首次发生在2032年）
- **神话级**（Mythic）: 创世区块的第一个聪，总量 1

## 技术前提
Ordinals 的记录功能依赖 2021年11月14日的 Taproot 升级（BIP340/BIP341/BIP342），该升级引入 Schnorr 签名和更灵活的脚本系统，使更大数据量的铭文写入成为可能。

## 影响与争议

### 正面影响
- 为比特币创造了价值转移之外的用例（NFT、代币铸造）
- 增加了矿工手续费收入（在网络手续费将成为主要激励来源的未来尤为重要）
- 将非零比特币地址数量推至历史新高
- 激发 BTC L2/扩展方案（BRC-20、Runes、Atomicals 等）的繁荣

### 争议
- 铭文数据与普通比特币交易竞争有限的区块空间，推高网络手续费
- 社区分裂：保守派认为比特币应保持简单（存储和转移价值），创新派认为比特币需要进化
- 索引器中心化问题（BRC-20 等衍生协议依赖链下索引器）
- 实际交易价值更多来自铭文内容和社区共识，而非聪本身的稀有度
- Casey Rodarmor 对基于 Ordinals 的 BRC-20 同质化代币标准不满，认为 BRC-20 造成的垃圾 UTXO 膨胀问题严重，要求币安从 ORDI 介绍中删除 Ordinals 关联

### 铭文技术细节
Ordinals 的铭文存放于 Taproot 脚本的输入（input）中，由链下索引节点识别和显示。这与早期的染色币（Colored Coin）类似（都将数据存储于交易中供链下程序索引），但铭文存放于输入的 Taproot 脚本中，而染色币存放于输出中。由于受限于索引而无法在链上操作，铭文功能的扩展依赖 ord 协议开发，如父子铭文（parent-child inscriptions）和诅咒铭文（cursed inscriptions）索引。

## 衍生协议
- [[brc-20]] — 基于 Ordinals 的同质化代币标准
- [[runes]] — Casey Rodarmor 开发的 UTXO 代币协议，比 BRC-20 更节省区块空间
- [[atomicals]] — 另一种比特币数字资产协议（ARC-20）
- [[ethscriptions]] — 以太坊上的铭文实验（calldata + 链下 Indexer 路线）
- [[ferc20]] — 以太坊上的公平 ERC20 实验，将 BRC20 公平发售精神移植到 EVM 链（标准 ERC20 合约 + 防女巫机制路线）

## 相关实体
- [[unisat]] — 比特币 Ordinals/BRC-20 钱包和市场
- [[magic-eden]] — 多链NFT市场，2023年3月首批支持比特币Ordinals交易
- [[fractal-bitcoin]] — UniSat 团队的 BTC 原生扩展方案
- [[rgb-protocol]] — 与 Ordinals 形成对比的比特币智能合约方案
- [[bitcoin]] — 底层区块链

## 相关概念
- [[bitcoin-ecosystem]] — Ordinals 是 BTC 生态最核心的元协议之一
- [[nft]] — Ordinals 是比特币 NFT 的技术基础

## 来源
- [[来源_2023-05_Ordinals是什么_TokenInsight]] — TokenInsight 技术详解：铭文代码实现、Ordinal 理论先进先出追踪规则、早期生态快照与前景判断
- [[来源_2023-05_币安研报_BTC生态_潜在机会]] — 币安研报系统性记录 Ordinals 初期的链上影响：累计费用超 150 BTC、平均块大小 1.2MB→2MB+、mempool 从 5000 笔增至近 25000 笔、1-3 月费用上涨 112%；以及社区"硬通货 vs 新用例"争论的最完整呈现
- [[来源_2023-04_Ordinals_比特币NFT_铭文_BinanceAcademy]] — 入门级科普：协议机制、稀有度系统、Taproot 前提、社区争议
- [[来源_2023-02_比特币铭文_Ordinals_Galaxy研究]] — TAM 建模、矿工经济影响量化
- [[来源_2023-03_比特币NFT交易体验_OrdinalsWallet_MagicEden_BlockBeats]] — 早期交易基础设施实操快照（2023.03）：PSBT 无信任交易、内置钱包 vs 外置钱包两种范式、Magic Eden/Hiro Wallet/Ordinals Wallet 实操对比
- [[来源_2023-05_RGB_vs_Ordinals_Kernel_Ventures]] — Ordinals vs RGB 技术对比
- [[来源_2023-06_FERC20_公平ERC20_jackygu]] — FERC20：将BRC20公平发售精神移植到以太坊的EVM链实验，展示了Ordinals/BRC20范式向智能合约平台的跨链迁移
- [[来源_2024-02_Runes协议细节_Casey_Hellmoneypod]] — Casey 在 hellmoneypod 首次详述 Runes 技术：UTXO 原生（与 Ordinals 无关）、名称渐进释放、Commit-Reveal 发行、前 10 个 Runes 硬编码 Open Mint
- [[来源_2024-02_BTC衍生协议_正统性_炒作分析]] — 正统性维度评价：Ordinals 使用 BTC 最基本功能（NFT 转移由 BTC 网络处理），符合社区理念但"发展潜力非常有限"（限于艺术作品）；BRC20 因依赖第三方分类器和两步交易未被 BTC 社区广泛接受
- [[来源_2023-12_LD_Capital_BRC20基建盘点_BlockBeats]] — LD Capital 盘点中所有 BRC20 基建项目均依赖 Ordinals 协议的 PSBT (BIP 174) 交易标准和铭文存储机制，展示了 Ordinals 作为 BTC DeFi 底层元协议的应用广度
- [[来源_2023-04_Ordinals生态_项目介绍_知乎]] — 2023年4月华语Ordinals OG撰写的生态全景指南：钱包（Unisat/Xverse/Hiro/Sparrow/Alby）/市场（OrdinalsWallet+MagicEden+Ordswap）/铸造/LP/分析工具五层架构，sub10k/TaprootWizards/BitcoinFrogs等早期NFT项目，ordi+meme龙头BRC-20格局，OrdinalsCN华语社区入口
- [[来源_2025-04_比特币生态_RWA赛道_Web3全景_PANews]] — Infinity Labs将Ordinals定位为比特币生态资产发行协议基础：BRC420基于Ordinals的递归组合铭文实现模块化元宇宙资产格式、BRC20粉尘攻击和高Gas费问题未解决使部分开发者和流动性转向Runes生态
- [[来源_2023-11_铭文赛道全扫描_MT资本_BlockBeats]] — MT Capital 2023年11月全景扫描：Casey Rodarmor 对 BRC-20 的不满和划清界限、铭文存放于 Taproot 输入脚本的技术细节、父子铭文/诅咒铭文索引扩展
- [[来源_2025-06_叙事评分_加密货币_NarrativeScore]] — Ignas 详细描述了 Ordinals 的四波投机浪潮（2022.12 → 2023.3 → 2023底-2024初 → 2024.4 Runes），并指出 Ordinals 作为零到一创新的可评分性
