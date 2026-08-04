---
type: entity
entity_type: company
created: 2026-07-02
updated: 2026-07-02
---

# Infura

## 基本信息
- 类型: company
- 赛道: Web3 节点基础设施（Node-as-a-Service）
- 成立时间: 2016 年（DevCon 2 正式发布）
- 母公司: [[consensys]]（2019 年正式收购）
- 创始人: Consensys 内部孵化（"spoke" project）
- 核心产品: Ethereum JSON-RPC API、IPFS API、NFT API、Gas API、Transaction Relay
- 支持的链: Ethereum、Arbitrum、Optimism、Polygon、StarkNet、[[linea]]、IPFS 等

## 核心业务/产品

1. **Ethereum RPC API** — Infura 的核心业务，为开发者提供远程以太坊节点接入（HTTP + WebSocket），免去自行运行全节点的技术负担。MetaMask 是其第一个客户，至今仍以 Infura 为主要基础设施后端。

2. **多链 API 套件（Enhanced APIs）** — 支持 Ethereum 主网、测试网（Sepolia、Holesky）以及多条 L2（Arbitrum、Optimism、Polygon、StarkNet、Linea），同时提供 IPFS 分布式存储 API。

3. **专业 API 产品线** — NFT API（代币数据查询与分析）、Gas API（实时 Gas 估算）、Transaction Relay（交易中继加速）等增值服务。

4. **Decentralized Infrastructure Network (DIN)** — 2023 年宣布的"去中心化基础设施网络"，与 18 家合作伙伴（包括 Microsoft 和 Tencent）共建联邦式 RPC 网络，旨在解决单点故障问题。DIN 定位是补充而非替代中心化服务。

## 关键数据

- **注册开发者**：400,000+ 人
- **每日请求量**：约 85 亿次区块链网络请求 / 130 亿次代码请求（不同统计口径）
- **运行时间**：99.99%（自成立以来）
- **2021年链上交易量**：Infura 的 Ethereum API 处理了约 $4.8 万亿的链上交易（大部分来自 MetaMask）
- **支持的链**：9+（Ethereum 主网及测试网、L2 链、IPFS）
- **定价区间**：免费套餐（每日约 10 万次请求）+ 付费套餐（$50 - $1,000/月）
- **收购时间**：2019 年 10 月被 Consensys 正式收购（此前为 Consensys 内部孵化项目，曾收到多家顶级 VC 投资意向但选择留在 Consensys）

## 竞争优势 / 护城河

1. **以太坊生态基础设施的"事实标准"** — Infura 与 [[alchemy]] 并列为 Web3 两大核心节点服务商，大量头部 dApp 和钱包（MetaMask、Uniswap、Compound、MakerDAO 等）依赖其 RPC 服务。社区中有"几乎没有用户运行自己的节点来交易，人们都依赖于 Infura、Alchemy 等中心化服务商"的说法。

2. **MetaMask 生态绑定** — MetaMask 是 Infura 的第一个客户和最重量级用户，3,000 万月活用户的日常交易全部经过 Infura 基础设施。这一深度绑定构成了极高的切换成本。

3. **Consensys 生态协同** — 与 MetaMask（钱包入口）+ Linea（L2）+ Truffle（开发者工具）的垂直整合，覆盖开发者从入门到生产的全生命周期。

4. **99.99% 运行时间 + 企业级可靠性** — 多年稳定运行记录和大量合作伙伴（Microsoft、Tencent 等）是其他新兴节点服务商短期难以复制的信任资产。

5. **DIN 去中心化战略的前瞻性** — 通过 DIN 回应中心化批评的同时，保持现有业务不受影响，为未来可能的去中心化 RPC 市场做准备。

## 风险 / 争议

1. **中心化悖论** — "今天几乎所有对区块链协议层的调用都通过节点及浏览器服务进行，这破坏了 Web3 是去中心化的前提。" Infura 和 Alchemy 对以太坊 RPC 层的寡头垄断是 Web3 去中心化叙事中最突出的矛盾之一。过去 Infura 的宕机曾导致 MetaMask 连接中断、以太坊 Gas 费暴跌。

2. **审查风险（Tornado Cash 事件）** — Infura 曾配合 OFAC 制裁，主动阻断向 Tornado Cash 相关智能合约发送的 RPC 请求。这一行为暴露了节点服务商对链上交易的审查能力，引发社区对"去中心化基础设施"定义的广泛讨论。[[consensys]] 页面也记录了此争议。

3. **单点故障风险** — 作为底层基础设施层，Infura 的故障直接影响大量 dApp 和钱包的正常运作。轻客户端（Light Client）和去中心化 RPC 网络（如 Pokt Network、Pocket、DIN 的替代路线）正试图解决这一依赖。

4. **市场竞争加剧** — 竞争者不断涌现：
   - [[alchemy]] — 在 dApp 开发者市场的份额快速增长，估值已达 $102 亿
   - [[zan]]（蚂蚁数科） — 面向中文开发者 + MEV searcher 市场
   - QuickNode、Moralis — 差异化定位争夺细分市场

## 相关实体

- [[consensys]] — 母公司，以太坊生态最深度的基础设施公司
- [[metamask]] — Infura 的第一个客户和最核心用户，3,000 万月活
- [[alchemy]] — 直接竞争对手，同为 Web3 核心节点服务商
- [[zan]] — 新兴竞争对手（蚂蚁数科旗下），面向中文市场
- [[linea]] — Consensys 旗下 zkEVM L2，与 Infura 协同
- [[ethereum]] — 核心支持的区块链
- [[mev]] — Infura 节点服务被 MEV searcher 用于 mempool 监听交易

## 来源

- [[来源_2024-12_MEV机器人_三明治攻击_夹子机器人_PANews]] — Infura 与 ZAN、Alchemy 并列被引为节点服务商，用于 MEV 机器人开发
- [[来源_2022-08_Web3参考架构_三层模型_路线图_登链社区]] — 指出 Infura/Alchemy 的节点服务集中化与 Web3 去中心化理念的矛盾
- [[来源_2024_以太坊10年权力更替_三次洗牌]] — 通过 [[consensys]] 页面关联，含 Infura 所属 Consensys 的估值与融资数据
- [[来源_2022_Web3_100工具_初创公司指南]] — 将 Infura 列为 Web3 创业公司推荐的以太坊 API 和 IPFS API 基础设施，与 Alchemy 并列
