---
type: source
source_type: article
url: https://hivetech.medium.com/dydx%E5%87%BA%E8%B5%B0%E4%BB%A5%E5%A4%AA%E5%9D%8A-dapp%E9%80%A0%E9%93%BE%E5%B0%86%E6%88%90%E8%B6%8B%E5%8A%BF-5b67949b3e4b
date: 2022-06
ingested: 2026-07-02
---

# dYdX出走以太坊 DApp造链将成趋势？

## 阅读证据
- 总行数: 175
- Q1 (前25%): dYdX过去24小时内的交易量超4亿美元，是目前最大的去中心化衍生品交易所
- Q3 (中后25%): THORChain用跨链DEX流动池的方式实现跨链，通过流动池直接让不同链上原生资产实现彼此兑换，RUNE充当所有交易对的兑换媒介
- Q4 (最后25%): THORChain因代码问题被黑客成功攻击3次，损失上千万美元；Compound Chain（Gateway）2021年3月上线测试网后即无下文
- 图片: 0 analyzed / 0 decorative skipped / 1 external URL unavailable

## 核心要点
- dYdX于2022年6月23日宣布将从以太坊Layer2（StarkEx）迁移至基于Cosmos SDK的独立应用链，创始人Antonio表示"不在乎dYdX建立在什么链上，只关心能否提供最好的产品体验"
- 文章将DApp造链定位为头部DApp的下一个主要叙事线，预言未来区块链格局将分为三层：核心层（比特币/以太坊）、中间层（Solana/BSC/AVAX/Polkadot/Cosmos等Layer1及Layer2）、最外层（各DApp应用链）
- 应用链的驱动力来自个性化需求：高频交易场景（衍生品/GameFi）对公链性能的苛求，以及让DApp原生代币捕获链上Gas费和MEV价值的渴望——以Uniswap为例，如果构建UniChain，UNI持有人可将代币质押到节点中获得Gas费收益
- 三大DApp造链基础设施对比：Cosmos（Tendermint共识/Cosmos SDK开发框架/IBC跨链通信）、Avalanche子网Subnet（雪崩共识/三链结构/横向扩容）、Polkadot平行链（中继链+平行链+插槽机制/Substrate开发框架）
- 代表性应用链案例：Osmosis（定制化AMM DEX）、THORChain（跨链原生资产兑换）、Compound Chain/Gateway（跨链抵押借贷）、Axie Infinity的Ronin（游戏链）、DeFi Kingdom的DFK Chain（GameFi）
- DAppChain面临的核心挑战：可组合性受限（DeFi"乐高组合"不复存在）、链维护成本高、独立应用链代码漏洞风险（THORChain三次攻击实例）、资产安全性和市场接受度存疑

## 关键数据
- dYdX当时24小时交易量超4亿美元，是最大的去中心化衍生品交易所（CoinGecko数据）
- THORChain因代码漏洞被黑客成功攻击3次，损失高达上千万美元
- Acala波卡平行链插槽拍卖获1640万枚DOT投票支持，总锁仓DOT价值超7.6亿美元
- Avalanche运行节点需质押2000 AVAX以获得区块奖励
- Compound Chain（Gateway）于2021年3月上线测试网后即停滞

## 与已有知识的关系
- 补充 [[fat-protocols-fat-apps]] — 本文是2022年6月从实践者角度对"胖应用/应用链"论点的早期系统阐述，早于ZeePrime Capital于2022年底发表的经典胖应用文章，提供了更技术性的基础设施对比（Cosmos SDK vs Avalanche Subnet vs Polkadot Substrate）
- 补充 [[dydx]] — 提供dYdX宣布迁移Cosmos时的当代语境（2022年6月），与后续的失败归因形成完整时间线；本文记录了Antonio关于"不在乎链只在乎体验"的原始表态
- 补充 [[cosmos]] — 详细介绍了Osmosis定制化AMM、THORChain跨链RUNE机制、Juno Network的WASM智能合约、Evmos的EVM兼容桥等Cosmos生态应用链案例
- 补充 [[avalanche]] — 阐述了Avalanche子网Subnet作为DApp造链的另一条技术路径，以DFK Chain为案例
- 补充 [[polkadot]] — 记录了波卡平行链的高插槽成本（Acala获1640万DOT/7.6亿美元锁仓）阻碍DApp开发者选择

## 值得记住的引用
> "不在乎dYdX建立在什么链上，只关心能否提供最好的产品体验，如果有更好的技术可以构建，我们将使用它。" — dYdX创始人Antonio

> "未来，如果把区块链市场格局看为一个圆形从内向外辐射，最终间的核心层会是比特币、以太坊；紧接着向外一层会是Solana、BSC、AVAX、波卡、Cosmos等Layer1公链及Layer2层公链；最外层将是各种DApp应用链，最终区块链世界将形成公链和应用链并存的格局。"

## 我的笔记
- 本文是2022年中"应用链热潮"的代表性观点：当时正值dYdX/Cosmos叙事的高峰期，但事后看（Hyperliquid在L1自建链的成功 vs dYdX的持续衰落），造链本身并不能保证成功，产品-市场匹配和执行质量才是决定性因素。本文对造链的乐观预期后来被证实在多个项目（Gateway、DFK Chain）上落空。
- 本文的一个有价值贡献是对Uniswap构建UniChain的假想推演：将Gas费和MEV从外部化转为协议内部价值捕获，这一思路后来被Unichain（2024年10月宣布）部分验证，但Uniswap选择的是OP Stack L2而非独立应用链——说明应用链路径本身也在演化（从独立链到L2）。
- 文章没有深入讨论的一个关键问题是：应用链虽然在理论上为代币增加了价值捕获渠道，但也增加了系统的攻击面和维护负担。THORChain的三次黑客攻击就是这个权衡的早期警示。
