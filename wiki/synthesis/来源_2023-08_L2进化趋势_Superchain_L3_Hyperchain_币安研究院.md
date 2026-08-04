---
type: source
source_type: article
url: https://www.theblockbeats.info/news/44346?from=telegram
author: 深潮 TechFlow（解读币安研究院报告）
date: 2023-08
ingested: 2026-07-02
---

# 币安研究院 L2 进化报告：Superchain、L3 与 Hyperchain 三路并进

## 阅读证据
- 总行数: 319
- Q1 (前25%): Optimism 的 OP Mainnet 于 2021 年 12 月上线，截至 2023 年 6 月 TVL 超过 22 亿美元，占以太坊 L2 市场份额 23% 以上
- Q3 (中后25%): zkSync Era 主网上线后 TVL 已超过 6.25 亿美元，成为最广泛使用的 zkEVM 解决方案之一，其终极目标为"超级可扩展性"
- Q4 (最后25%): Polygon L2 解决方案每天处理约 200-300 万笔交易，拥有 30-40 万持续活跃地址
- 图片: 0 analyzed / 15 decorative skipped / 0 external URLs unavailable

## 核心要点
- L2 赛道已从单纯的扩容竞争演进为三种差异化路线：Optimism 的 Superchain（超级链网络）、Arbitrum 的 L3（Orbit 应用链框架）、zkSync 的 Hyperchain（超级可扩展性），三者共同指向"定制化应用链 + 共享安全层"的未来
- Optimism 通过开源模块化 OP Stack 降低 L2 部署门槛，Bedrock 升级使每笔交易平均费用降低超过 77%，Coinbase 的 Base 链和 BNB Chain 的 opBNB 均基于 OP Stack 构建
- Arbitrum Orbit 提供无需许可的 L3 部署框架，允许开发者在 Arbitrum L2 之上定制隐私、权限、手续费代币、治理等组件，定位为"定制链"平台
- zkSync 的 Hyperchain 通过"超级桥"实现跨 L3 链的无缝资产转移，避免基链成为可扩展性瓶颈，理论上可支持无限数量的并行 ZK 链
- StarkWare 的分形扩展（Fractal Scaling）概念启发了其他 L2 项目，Recursive STARKs 技术可将多个交易证明捆绑为单一证明，L2 用于通用扩展、L3 用于定制扩展
- Polygon 2.0 通过 ZK 技术统一其 L2 产品套件（PoS、Supernets、zkEVM），目标创建"互联网的价值层"，预计 2024 年 Q1 前启动 zkEVM validium 主网

## 关键数据
- Arbitrum TVL 超过 59 亿美元，占 L2 市场份额 60% 以上（截至报告发布时）
- Optimism Bedrock 升级后每笔交易平均费用降低超过 77%，使其成为当时最便宜的以太坊 L2
- zkSync Era TVL 超过 6.25 亿美元
- Polygon 日处理约 200-300 万笔交易，活跃地址 30-40 万
- Zora Network 基于 OP Stack，铸币成本可低于 $0.50，交易确认时间数秒

## 与已有知识的关系
- 补充 [[arbitrum]] — 本文详细阐述了 Arbitrum Orbit 的 L3 战略和"定制链"定位，补充了现有页面中未覆盖的 Orbit 无许可部署框架细节
- 补充 [[polygon]] — 记录了 Polygon 2.0 转型愿景：从 PoS 侧链升级为 ZK L2 统一网络，引入跨链协调协议实现无限数量的链
- 补充 [[layer2]] — 记录了 2023 年中 L2 赛道的三大路线分化（Superchain / L3 / Hyperchain），以及各方案在软件可定制性、交易费用、排序器和治理代币三个维度的竞争分析
- 补充 [[cross-chain]] — zkSync 的超级桥机制是对跨链互操作性的新方案：通过在 L3 链之间建立本地桥，使跨链转移无需消耗第三链资源
- 与 [[来源_2024-12_Equilibrium_2025年20个预测]] 中"L2/L3 从 120 增至 2000+"的预测形成前后印证：本文描述的 Orbit/Hyperchain/Superchain 正是该预测的早期基础设施基础

## 值得记住的引用
> "新的 Rollup 模式可以实现基础设施的共享和互操作，减少资源冗余。目标是实现「一键式」部署 Rollup 链，就像创建一个网页一样简单。"

> "超级扩展通过引入超级桥进一步推进了这一点——这些是本地桥，将每个 L3 应用链连接在一起。这使得在超级链之间的转移不消耗第三链上的资源，并进一步确保基链不成为中央可扩展性瓶颈。"

> "尽管有许多不同的观点，但大家的共同目标是实现无限的可扩展性，希望 Web3 的世界能够像 Web2 那样无缝扩展。目前，这个领域仍然处于初级阶段，具体的方法和实践尚未完全确定。"

## 我的笔记
- 这份报告发布于 2023 年 8 月，恰好处于 L2 叙事从"扩容竞赛"向"生态平台战争"转型的节点。回头看，OP Stack 的"超市"策略（开源模块化、吸引第三方链加入 Superchain）是最成功的——2024 年 Base 已成为 ETH 第一大 L2，验证了"开源技术栈吸引生态"的模式。Arbitrum Orbit 的 L3 路线相对小众，而 zkSync 的 Hyperchain 愿景在 2024 年面临"从天王到天亡"的挑战。
- 报告隐含但未明说的一个关键矛盾：所有 L2 都在追求"无限可扩展性"，但如果以太坊 L1 本身的数据可用性带宽有限（即使 EIP-4844 后），这些 L2/L3 最终仍然受制于 L1 的物理上限。这是一个"顶层无限、底层有限"的结构性矛盾——Celestia 等替代 DA 层的崛起正是对此矛盾的回应。
- 值得注意的是，报告发表于 2023 年 8 月，仅列出了五个关键玩家（Optimism/Arbitrum/zkSync/StarkWare/Polygon），而到 2024 年底 L2 数量已超过 60 条。这种爆发式增长恰恰是 OP Stack 等开源框架降低了部署门槛的直接结果，但也导致了严重的流动性碎片化和同质化竞争——这正是 2024 年下半年 L2 淘汰赛的根源。
