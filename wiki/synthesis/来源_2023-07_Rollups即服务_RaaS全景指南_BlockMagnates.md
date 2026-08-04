---
type: source
source_type: article
url: https://blog.blockmagnates.com/hitchhikers-guide-to-rollups-as-a-service-2e3438242ada
date: 2023-07-05
ingested: 2026-07-02
---

# Rollups-as-a-Service 全景指南：百万条应用链的未来图景

## 阅读证据
- 总行数: 186
- Q1 (前25%): 文章以"未来将有数百万条应用特定模块化链"开篇，将 RaaS 类比为 AWS 对服务器托管的抽象——RaaS 项目正在对区块链的搭建和维护做同样的事。过去6个月内涌现了大量低代码/无代码 RaaS 产品。
- Q3 (中后25%): Rollkit 拥有通用 DA 层接口，允许任意 DA 层插入，其中最具争议的是与 Bitcoin 的集成方案。
- Q4 (最后25%): 作者指出模块化中坚项目（Fuel、Celestia、ZK Rollup）当时仍未正式上线，大多数已公布的 RaaS 项目处于 alpha 阶段或仅支持手动配置的许可部署。
- 图片: 1 analyzed (RaaS 架构全景图) / 2 decorative skipped / 0 external URLs unavailable

## 核心要点
- RaaS 将 Rollup 部署抽象为按需服务，目标是让部署一条新链像创建网页或伸缩应用一样简单——类比 Docker/Kubernetes 对服务器运维的革命。
- 作者将 RaaS 项目分为四大阵营：The OGs（Cosmos SDK、Substrate SDK）；ETH Maxis（OPStack、Arbitrum Orbit、StarkNet Slush、zkSync Hyperchains、Caldera、Stackr、Conduit）；Cosmonauts（Dymension、Saga、Initia、Evmos、Berachain、Eclipse）；Celestians（Rollkit、Astria、Fractal、Sovereign Labs）。
- OP Labs 的愿景是将 RaaS L2 作为以太坊的"实验层"——开发者可快速启动新 Rollup 来测试新 ERC/EIP，而不必等待 L1 升级或已建立的 L2 更新。
- zkSync 的 Hyperchains 支持无许可部署，开发者可选择不同 VM（如 MoveVM）、不同排序器设计和 DA 方案（zkRollup/zkPorter/zkValidium），并设想了"临时执行环境"——快速启动 Rollup 铸造数百万 NFT，然后关闭。
- dApp 链的三大需求来源：游戏（最高频引用的用例，需要低安全性、高吞吐、高存储）、DeFi（支付、衍生品等独立金融应用）、创作者经济（社交、代币门控）。
- 作者坦承 RaaS 仍处于极早期，面临的核心挑战包括：离开共享状态机后丧失组合性和连接性、区块浏览器/钱包/RPC 等基础设施不成熟、流动性碎片化、需要从零建设社区。

## 关键数据
- 超过 20 个 RaaS 项目在文中被详尽列举，覆盖以太坊 L2、Cosmos 生态和 Celestia 生态三大阵营。
- 文章发布日期为 2023 年 7 月，此时以太坊 L2 基础设施关键项目（Fuel、Celestia、ZK Rollup）尚未正式主网上线。
- Arbitrum 在空投公告同一周发布了 Orbit，允许开发者在 Arbitrum 上启动 L3 链，支持通过 Stylus 用 C/C++/Rust 编写应用。
- Polygon Supernets 允许 dApp 团队利用现有 PoS 验证者质押创建独立的应用特定环境，未来将支持通过 Polygon ZK 技术创建 ZK Rollup。
- Avalanche 子网已被 Crabada 和 DeFi Kingdoms 等游戏采用，创建了游戏专用子网。

## 与已有知识的关系
- 补充 [[data-availability]] — 系统梳理 RaaS 生态中各项目对 DA 层的不同处理方式：Celestia 的 Rollkit 提供通用 DA 接口（含与 Bitcoin 的争议集成）、Arbitrum AnyTrust 使用链下 DAC 加以太坊 L1 故障回退、zkSync 提供 zkRollup/zkPorter/zkValidium 三种 DA 选择。
- 补充 [[layer2]] — 提供 2023 年中期以太坊 L2 RaaS 生态的完整快照，涵盖 OPStack（Base 的基础设施）、Arbitrum Orbit（L3 战略）、StarkNet Slush（zkVM L3 SDK）、zkSync Hyperchains（无许可分形扩展）等关键方案。
- 补充 [[gamefi]] — 解释为何游戏是 RaaS 最高频引用的用例：游戏需要与金融应用截然不同的参数配置（低安全性、高吞吐、高存储），RaaS 允许游戏团队获得定制化链上环境。
- 补充 [[chain-abstraction]] — 文章末尾将链抽象列为百万链未来必须解决的真正用户痛点之一。
- 补充 [[sequencer]] — 提及 OPStack 的"共享排序器"愿景，以在 Rollup 之间提供同步性和原子性。

## 值得记住的引用
> "In the near future, deploying a new chain will be like creating new web pages or scaling up and down an application — the same way we do now via Docker containers and Kubernetes."
> ——将 RaaS 的终极愿景类比为 Docker/Kubernetes 对 DevOps 的颠覆，是本文最常被引用的比喻。

> "In addition to robust developer tooling, the space needs marquee applications that will bring in a tidal wave of new users in the next bull run. They need to solve real user pain points that will arrive in the future of a million chains: issues around composability, moving value cross-chain, or even the abstraction of chains all together."
> ——作者在承认基础设施尚未成熟的同时，指出缺乏杀手级应用才是真正的瓶颈。

> "Modular stalwarts — like Fuel, Celestia, and the zk rollups — have still not launched. Most (announced) RaaS projects are either on in alpha or have manually-configured, permissioned deployments."
> ——2023 年 7 月时，RaaS 赛道的现实远不如叙事热闹，核心基础设施仍在开发中。

## 我的笔记
- 这篇文章写于 2023 年中，这正是 RaaS 叙事的早期爆发点。回头看 2024-2025 年的实际发展，OPStack 确实成为了最广泛采用的 RaaS 框架（Base、Worldcoin、Uniswap 等均基于它），而 Cosmos 生态的 RaaS 项目（Dymension、Saga）表现参差不齐，说明作者的分类框架虽有价值，但 Ethereum 阵营在生态引力上远超 Cosmos 阵营，这是文章中未充分讨论的结构性差异。
- 作者将 Caldera 和 Conduit 列为"一键部署"的未来之星，但两者定位在当时非常相似。到 2024 年两家确实都实现了显著增长，但 Conduit 更侧重 OPStack 的简化部署，Caldera 则走向多栈支持——这种早期的同质化竞争和后续的分化是 RaaS 赛道值得追踪的模式。文章缺少对 RaaS 提供商之间差异化护城河的深入分析，这恰好是后来市场关注的核心问题。
