---
type: source
source_type: research-report
url: https://members.delphidigital.io/reports/zetachain-part-1
author: Delphi Digital
date: 2024-01
ingested: 2026-06-29
updated: 2026-07-02
---

# Delphi Digital：区块链桥梁竞争格局

## 阅读证据
- 总行数: 508
- Q1 (前25%): Stargate 桥 $12.46b 交易量、$395m TVL、$8.35m 手续费，约 2.1% 有机 APY（无需通胀激励的实际收益率）
- Q3 (中后25%): Synthetix 贡献了 Chainlink CCIP 超过 90% 的收入，CCIP 夏季收入约 $1k/天
- Q4 (最后25%): THORChain 有 260 个流动性提供者贡献超过 $100k 的流动性
- 图片: 29 张（均为架构图/数据图，无装饰性图片）

## 核心要点

1. **ZetaChain = "THORChain + 智能合约"或"Axelar + EVM"**。基于 Cosmos SDK + CometBFT 的 PoS L1，ZETA 代币用于 Gas + 质押 + 跨链路由。独特之处：支持 Omnichain 智能合约（zEVM）

2. **跨链桥竞争格局**：LayerZero（轻量消息层，OFT 标准，Stargate）→ Axelar（GMP+Squid Router，wstETH 进入 Cosmos 的通道）→ IBC（Cosmos 原生，路径依赖问题）→ THORChain（流动性池模型，RUNE 路由）→ Wormhole（资产桥，BUIDL 采用）→ Chainlink CCIP → ZetaChain

3. **Delphi 核心判断**：ZetaChain 的跨链消息传递（CCMP）不是主要优势——这个市场极其拥挤。真正的差异化在于 Omnichain 智能合约：让开发者编写一次合约就可以在所有链上运行

4. **Circle CCTP 是跨链桥的最大颠覆者**：原生 USDC 销毁/铸造消除了对包装 USDC 的需求。axlUSDC、wUSDC 等包装资产将被逐步淘汰，影响所有依赖包装资产的跨链协议

## 与已有知识的关系
- 补充 [[cross-chain]] 概念页的竞争格局
- 与 [[layerzero]]、[[blackrock-buidl]]（Wormhole 用于 BUIDL 多链）关联

## 关键数据
- ZetaChain 基于 Cosmos SDK + CometBFT，ZETA 用于 Gas + 质押 + 跨链路由
- Circle CCTP 逐步淘汰 axlUSDC/wUSDC 等包装资产
- LayerZero OFT 标准最广泛采用；Axelar 与 Lido 合作推 wstETH 进入 Cosmos

## 值得记住的引用
> "Zeta should be the place users stay, not merely a tool they use to pass through."

> "Circle CCTP is the biggest disruptor for cross-chain bridges — native USDC burn/mint eliminates the need for wrapped USDC."

## 我的笔记
跨链桥赛道可能是 Crypto 最拥挤的基础设施赛道——LayerZero、Axelar、IBC、Wormhole、THORChain、ZetaChain、CCIP 都在竞争，但 Circle CCTP 可能对所有人构成威胁。原生 USDC 消除了包装资产的需求，而包装资产是大多数跨链桥的商业模式基础。Delphi 的判断一针见血：Zeta 的 CCMP 没有竞争力，Omnichain 智能合约才是差异化所在。
