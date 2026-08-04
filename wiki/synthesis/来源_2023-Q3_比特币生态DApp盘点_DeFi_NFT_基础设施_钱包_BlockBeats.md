---
type: source
source_type: article
url: https://www.theblockbeats.info/news/48218?search=1
date: 2023-09-30
ingested: 2026-06-30
tags: [bitcoin, ordinals, brc-20, defi, nft, wallet, infrastructure, layer2]
---

# 2023年Q3比特币生态DApp全景盘点：DeFi、NFT、基础设施和钱包

## 阅读证据
- 总行数: 224
- Q1 (前25%): Ordinals 协议由开发者 Casey Rodarmor 开发，普通序数只能容纳 4MB 数据，因此催生了"递归铭文"（调用先前铭文数据、可大量节省费用），有人称之为"比特币云计算"。BRC-20 使用 JSON 数据的序数铭文部署/铸造/转移代币，不使用智能合约。
- Q3 (中后25%): NFT/游戏赛道中，Ordinals Maxi Biz (OMB) 下限超过 0.2 BTC，在 Magic Eden 上总交易量超过 400 BTC。钱包赛道中，UniSat Wallet 是官方 Ordinal Protocol 钱包，开源 Chrome 扩展，支持 Ordinals NFT 和 BRC-20 代币，用户可随时随地进行铭刻而无需运行完整节点。
- Q4 (最后25%): "其他"赛道中，Hoseki 允许用户以证明所有权的方式添加比特币账户但不向平台提供资金托管权；Sustainable Bitcoin Protocol 创建新的环境商品，激励清洁能源比特币矿工；IBEX 是专门从事闪电网络企业解决方案的基础设施公司。
- 图片: 0 张已分析 / 0 张装饰跳过 / 2 张外部 URL 不可用（含 Q3 比特币 DApp 生态全景图）

## 核心要点
- 比特币开发生态长期处于休眠状态，但随着 2023 年初 Ordinals 协议启动，开发者和项目方开始大规模关注比特币生态。递归铭文的出现进一步扩展了可能性——代码库一次写入后可被其他开发者反复引用，引发人们对比特币上 DeFi 和去中心化存储的猜测。
- 比特币 DeFi 赛道（14 个项目）的核心技术路径是 DLC（谨慎日志合约）和 PSBT（部分签名比特币交易），而非以太坊式的智能合约。代表性项目包括 Liquidium（原生 Ordinal 抵押借贷）、Sovryn（基于 RSK 侧链的 DEX+借贷）、DLC.Link（链上托管由以太坊等智能合约链控制）、Deep Lake（DLC+PSBT API 套件供开发者在 L1 上构建）。
- 基础设施赛道（15 个项目）呈现百花齐放格局：Stacks（智能合约 L2）、BEVM（EVM 兼容 BTC L2 以 BTC 为 GAS）、Babylon（从比特币提取安全性与 Cosmos 等 PoS 链共享）、Botanix（以太坊 L2 虚拟机构建在比特币之上）、Bison Labs（原生比特币 zk-rollup）、RGB（智能合约层+链下协议+客户端验证）、Taproot Assets（通过闪电网络进行资产交易）。
- NFT/游戏赛道（17 个项目）的核心特点是中心化交易所和钱包成为 Ordinals 交易主战场：OKX 钱包首个支持闪电网络和 Ordinals 市场（2023.05）、币安 NFT 市场于 2023 年 5 月开始支持 Ordinals、Magic Eden 从 Solana 扩展至比特币成为最大跨链 NFT 平台之一。去中心化市场包括 Gamma.io、Ordinals Market、Ordswap、OpenOrdex（基于 PSBT 零费用）等。
- 钱包赛道（8 个项目）呈现非 KYC 趋势和多链兼容特征：Xverse（支持比特币+Stacks+闪电网络）、XDEFI Wallet（多链交换和跨链）、Hiro Wallet（Leather，支持 Ordinals/Stacks/DLC/BRC-20）、BitMask（支持 RGB 协议访问比特币 DApp）。
- 尽管项目数量庞大（共 60+ 项目），绝大多数处于早期阶段。比特币 DApp 与以太坊 DApp 的根本差异在于：前者依赖 PSBT/DLC/链下客户端验证等技术路径，而非智能合约执行层。BRC-20 不使用智能合约是其与 ERC-20 最本质的区别。

## 关键数据
- 普通序数铭文容量上限：4MB（导致递归铭文创新出现）
- Ordinals Maxi Biz (OMB) 地板价：超过 0.2 BTC，Magic Eden 总交易量超过 400 BTC
- 递归铭文：通过引用先前铭文数据来节省费用，被类比为"比特币云计算"
- BRC-20 使用 JSON 数据的序数铭文来部署、铸造和转移代币，不使用智能合约——与 ERC-20 有根本差异
- Ordinals 协议由开发者 Casey Rodarmor 开发，允许为各个 Satoshi (SAT) 分配唯一标识符并附加额外数据

## 与已有知识的关系
- 补充 [[bitcoin-ecosystem]] — 本文是 Q3 2023 比特币生态 DApp 的完整横截面快照，涵盖了 DeFi（14 个）/ 基础设施（15 个）/ NFT（17 个）/ 钱包（8 个）/ 其他（9 个）共 63 个项目的两句话级描述，为 BTC 生态提供了一份"目录级"全景图。与之前 ingest 的 [[来源_2024-01_BTC_L2_新形态_五类扩容方案_BlockBeats]]（技术方案分类）和 [[来源_2023-11_ABCDE_BTC生态项目路演日_7个项目获投]]（VC 视角）形成互补——本文是项目层面的地毯式扫描。
- 补充 [[defi]] — 揭示比特币 DeFi（BTCFi）与以太坊 DeFi 的技术路径根本差异：前者基于 DLC/PSBT/侧链而非智能合约。ATOMIC FINANCE 使用 DLC 实现"几乎无需信任"的 BTC 自我托管收益，DLC.Link 让以太坊智能合约链控制 BTC 链上托管。
- 补充 [[nft]] — 展示了比特币 NFT 生态的特殊性：中心化交易所（OKX/币安）成为 Ordinals 交易的主要入口，且有专门的"稀有 Satoshi 交易市场"（Sating.io、Magisat.io）这一比特币独有的 NFT 子类。
- 关联 [[rgb-protocol]] — RGB 在此文中被描述为"比特币区块链上的智能合约层和链下协议"，支持铸造稳定币、代币、NFT，并创建"经过客户验证的机密智能合约"。
- 关联 [[babylon]] — Babylon 被描述为"从比特币链中提取安全性与 Cosmos、BSC、Polkadot 等 PoS 链共享"，视角是比特币安全性输出方。
- 关联 [[unisat]] — UniSat 被标识为"官方 Ordinal Protocol 钱包"（2023 年 Q3 节点），Open source Chrome 扩展，支持 Ordinals NFT 和 BRC-20 代币。

## 值得记住的引用
> "作为开发者，过去很难说服他们在比特币上进行开发，因为在构建应用程序时，围绕开发体验的基础设施远不如智能合约链。将比特币桥接到另一个区块链并在那里构建应用程序要容易得多，就像 Stacks 或 Trustless Computer 所做的那样。但所有这一切都可能发生变化，随着今年早些时候 Ordinals 协议的启动，开发者和项目方便开始关注比特币生态。"
> 
> "与 ERC-20 不同，BRC-20 代币不使用智能合约。它利用 JSON 数据的序数铭文来部署、铸造和转移代币。这项创新满足了比特币网络上对可替代代币的需求，这是以前所缺乏的，但也有其局限性。"

## 我的笔记
这篇文章的价值不在于深度——对任何一个项目的描述都不超过两句话——而在于广度：它是 2023 年 Q3 时间点上的"比特币生态黄页"，帮你一次性看到谁在做什么、技术路线如何选择。63 个项目中，现在（2026 年）活下来的可能不到 20%，但这份清单本身就值得作为"生态墓碑"和时间胶囊来研究——你可以拿它对比后来的发展，看哪些路径被证实、哪些被证伪。尤其是 DeFi 赛道，14 个项目几乎清一色依赖 DLC 和 PSBT 技术路径，这与以太坊 DeFi 的"智能合约乐高"范式有根本差异——比特币 DeFi 更像是"条件支付"而非"可编程金融"，这个区别决定了 BTCFi 的上限和形态。另外值得注意：这篇文章来自 Web3CN 而非西方媒体，说明中文世界的 BTC 生态关注在 2023 年就已经非常系统化。
