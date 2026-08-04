---
type: source
source_type: article
url: https://www.panewslab.com/zh/articledetails/88wx9b36a77g.html
date: 2023-04-07
ingested: 2026-06-30
---

# LayerZero 全链野心：Bixin Ventures 应用场景全景分析

## 阅读证据
- 总行数: 74
- Q1 (前25%): LayerZero 是一个通用的数据信息通信基础协议，通过部署"LayerZero Endpoints"轻量级智能合约实现跨链通信，使用 Oracle（当前为 Chainlink）和 Relayer 在目标链间传达信息，两者保持独立
- Q3 (中后25%): Pendle 利用 LayerZero 部署全链 veTokenomics——Pendle 用户可以在 Arbitrum 等链上同步以太坊上的 vePENDLE 余额，veToken 不再孤立于不同链
- Q4 (最后25%): LayerZero 已发送超 300 万条消息，扩展到包括 Aptos、Solana 等非 EVM 链在内的 40 多条公链；团队由 Bryan Pellegrino、Ryan Zarick、Caleb Banister、Ari Litan、Irene Wu 等带领
- 图片: 3 张外链图片（PANews 托管），均为架构示意图（Oracle+Relayer 双验证流程图×2、NFT 跨链示意图×1），本地未下载，外链 URL 不可用

## 核心要点
- **LayerZero 定位为通用跨链消息传递协议**（非资产桥）：通过 Oracle + Relayer 双验证机制，允许任何主体无许可地承担 Oracle 和 Relayer 角色，以安全和简单的方式实现应用间跨链通信
- **Stargate 是 LayerZero 旗舰跨链桥**：第一个解决"跨链不可能三角"的协议，使用统一流动性池 + 即时交易最终性，支持原生资产跨链 + 源链 Gas 代币支付多链交易 Gas 费。已处理超 100 万次转账、超 45 亿美元交易量
- **OFT 全链同质化代币标准**：解决包装资产导致的流动性碎片化和可组合性问题。Trader Joe 将 JOE 作为 Omnichain Token 部署到 Avalanche、Arbitrum、BNB 等多链
- **ONFT 全链非同质化代币**：Pudgy Penguins 子系列 Lil Pudgys 使用 LayerZero 技术在 Polygon、BNB Smart Chain、Arbitrum 间跨链，NFT 不再孤立于原生生态
- **全链 DeFi 应用场景已铺开**：Pendle 全链 veTokenomics（跨链同步 vePENDLE 余额）、Rage Trade 循环流动性（利用其他链的 LP tokens 在 Arbitrum 提供虚拟流动性）、Radiant Capital 跨链借贷（A 链抵押，B 链借出）
- **多链→全链是核心叙事转换**：愿景是用户使用 Dapp 时无需知道部署在哪条链上，类似 Web2 用户不需要知道 Instagram 托管在 AWS 还是 Azure

## 关键数据
- Stargate：超 100 万次转账，超 45 亿美元交易量（截至 2023 年 4 月）
- LayerZero：已发送超 300 万条消息，覆盖 40+ 条公链（含 Aptos、Solana 等非 EVM 链）
- Pudgy Penguins 子系列 Lil Pudgys 于 2023 年 1 月宣布使用 LayerZero 实现跨链
- 原文作者为 Bixin Ventures 团队：Henry Ang、Mustafa Yilham、Allen Zhao、Jermaine Wong
- 原文发表于 Bixin Ventures Medium，后由 PANews 转载（2023 年 4 月 7 日）

## 与已有知识的关系
- 补充 [[layerzero]] — 提供生态系统应用场景全景：OFT/ONFT/Pendle veTokenomics/Rage Trade/Radiant Capital 五大具体用例，补充明星团队成员名单（Ari Litan、Irene Wu），补充 300 万+ 消息和 40+ 链的规模数据
- 补充 [[cross-chain]] — OFT 和 ONFT 是跨链代币标准的两种范式，Lock-Mint 模式的具体替代方案
- 补充 [[chain-abstraction]] — 文章核心叙事"用户不需要知道 Dapp 部署在哪条链"是链抽象思想的早期表述（2023 年 4 月），LayerZero 是实现链抽象的关键基础设施层
- 与 [[来源_2023-04_头等仓_LayerZero_全链互操作性]] 互补 — 头等仓研报侧重架构/融资/竞争格局的深度分析，本文侧重应用场景和生态系统案例，两者覆盖 LayerZero 的不同切面

## 值得记住的引用
> "我们相信，未来用户使用 Dapps 的时候，无须知道它们部署在哪条区块链，这类似于用户在使用 Web2 世界里的 Instagram、Tiktok、Google 时，没必要知道它们是托管在 Amazon Web Services，还是 Microsoft Azure。LayerZero 正在开发的基础层希望实现真正的互操作性愿景，将所有的 Layer 1 连接起来，无论它们是 EVM 生态、IBC 生态，还是其他生态。"

> "有了 Stargate，用户和应用程序可以在跨链传输原生资产的同时，使用协议的统一流动性池，并获得即时的交易最终性。此外，基于 Stargate，用户和应用也无须处理封装资产，用户可以轻松地将以太坊上的 USDC 换成 Arbitrum 上的 USDT。"

## 我的笔记
Bixin Ventures 作为 LayerZero 的投资方，这篇文章带有明显的 portfolio 推广色彩，但仍提供了有价值的应用场景构图。文章最值得关注的是 OFT 标准的设计思路——让代币在所有支持链上"原生可替代"，这是对 Lock-Mint 包装资产模式的根本性改进。不过，OFT 的安全假设仍然落在 LayerZero 的 Oracle+Relayer 信任模型上，如果 Oracle 和 Relayer 合谋，OFT 代币的安全性同样会受到威胁。

另一个值得思考的点：文章将 LayerZero 愿景类比为"用户不需要知道 AWS vs Azure"，这在 2023 年是超前的。2024-2025 年链抽象叙事全面爆发（Particle Network、NEAR Chain Signatures、Polygon AggLayer），但核心思路与这篇文章的框架完全一致——LayerZero 作为底层消息传递层，链抽象作为上层用户体验层，两者是互补而非竞争关系。从这个角度看，Bixin Ventures 2023 年的投资 thesis 是正确的，只是落地时间比预期更长。
