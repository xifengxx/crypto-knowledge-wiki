---
type: source
source_type: article
url: https://substack.com/browse/recommendations/post/157078314
date: 2025-02
ingested: 2026-07-02
---

# 区块链预言机：机构信任的关键基础设施 — Chainlink/Pyth/RedStone 三大方案横向对比

## 阅读证据
- 总行数: 265
- Q1 (前25%): Chainlink 于 2017 年 9 月通过 ICO 融资 $32M，当前价格 $18.83，市值 $119.2 亿；预言机作为连接链上与链下数据的"信任层"，使用多重签名/MPC/共识验证确保数据可靠性
- Q3 (中后25%): Pyth Network 的 Oracle Integrity Staking (OIS) 机制要求数据发布者质押 PYTH 代币，截至 2025 年 1 月已有超过 $100M 被质押，偏差超过 250 基点持续 60 秒将由 Pythian Council 仲裁并执行罚没
- Q4 (最后25%): RedStone 于 2022 年 1 月首创拉取式预言机（Pull Oracle），比 Chainlink（2023年10月）和 Pyth（2022年12月）领先，已扩展至 60+ 条链（vs Chainlink 同赛道仅 5 条链），目前仍有 5 个许可节点运行，计划通过 RED 代币和 EigenLayer AVS 实现完全去中心化
- 图片: 0 analyzed / 2 decorative skipped / 4 analytical external URLs unavailable

## 核心要点
- 区块链预言机作为连接链上智能合约与链下数据的关键基础设施，通过去中心化预言机网络（DON）消除单点故障，确保数据完整性和安全性
- Chainlink 采用联盟式多节点推送模型，TVS 最高且拥有最广泛的 DeFi 集成，但质押模型仍处于早期阶段（仅 ETH/USD 喂价支持罚没），且主要局限于 EVM 生态
- Pyth Network 直接从第一方数据提供者（CEX、做市商、对冲基金）获取价格数据，通过 Pythnet（Solana 客户端独立链）+ Wormhole 跨链分发，OIS 质押机制已锁仓超 $100M
- RedStone 以模块化混合架构（拉取+推送）差异化竞争，首创拉取式预言机减少链上 Gas 成本，覆盖 70+ 条链，即将通过 RED 代币和 EigenLayer/Symbiotic 再质押实现经济安全
- 预言机架构四分法：输入预言机、输出预言机、跨链预言机、计算预言机；未来发展方向包括全同态加密（FHE）隐私计算、AI 驱动预测分析、多层治理框架
- 文章来自 insights4.vc 研究通讯，系统对比三大预言机的团队背景/融资/代币经济/架构/安全/生态覆盖，可作为预言机赛道入门级全景参考

## 关键数据
- Chainlink 2017 年 ICO 融资 $32M，当前（文章撰写时）市值 $119.2 亿，TVS 在所有预言机提供商中最高
- Pyth Network 2023 年 12 月战略轮融资未披露金额（Delphi Ventures/Multicoin Capital/Wintermute 等参投），代币 $PYTH 当前价格 $0.203，市值 $7.57 亿，OIS 已质押超 $100M
- RedStone 累计融资 $22M（种子轮 $7M + Series A $15M），RED 代币最大供应量 10 亿枚，TGE 初始流通 30%，70% 锁仓 4 年线性解锁
- RedStone 覆盖 130+ 客户、70+ 条链（包括 Starknet/Fuel/NEAR/TON/Tron/Casper/Stacks 等非 EVM 链），TVS 排名通用预言机第三
- RedStone 拉取式预言机模型于 2022 年 1 月上线，将历史数据归档至 Arweave 实现不可篡改审计追踪
- RedStone 的 RED 代币将集成 EigenLayer AVS，数据提供者和代币持有者可质押 RED 并赚取 ETH/BTC/SOL/USDC 奖励

## 与已有知识的关系
- 补充 [[chainlink]] — 文章提供了 Chainlink 2017 年 ICO 明细（$32M/28 家投资机构）、最新代币价格/市值、以及 CCIP 作为 RWA 代币化关键基础设施的战略定位
- 补充 [[pyth]] — 文章补充了 Pyth 的 Oracle Integrity Staking 机制细节（$100M+ 已质押/250 基点偏差阈值/60 秒仲裁窗口/Pythian Council 治理结构）
- 补充 [[redstone]] — 文章提供了 RED 代币完整经济模型、混合拉取-推送架构技术细节、以及 RedStone 被定位为"最快增长预言机"（130+ 客户/70+ 链）的竞争数据
- 补充 [[defi]] — 预言机作为 DeFi 基础设施的关键组件，本文补充了三大预言机在安全架构、数据验证机制、经济激励模型上的横向对比

## 值得记住的引用
> "Oracles are not primary data sources but instead serve as a trust layer, ensuring the accuracy and reliability of external inputs, such as market prices, real-world events, and IoT sensor readings."
> "Unlike push oracles, which continuously publish data on-chain regardless of demand, pull oracles enable dApps to retrieve off-chain data only when required. This model significantly optimizes cost-effectiveness by reducing unnecessary gas expenditures and on-chain congestion."

## 我的笔记
这篇文章看似是独立研究，但多处细节显示可能经过 RedStone 的 PR 投入：RedStone 部分占据全文近 40% 篇幅，而占 TVS 绝对主导地位的 Chainlink 反而被重点强调"质押模型早期/仅限于 EVM"等弱点，代币价格/市值也引用了较低快照值（$LINK $18.83 vs 2025 年高点 $30+）。Pyth 部分相对中立但篇幅最短。整体可作为 2025 年初三大预言机的入门对比参考，但读者应交叉验证数据时效性并留意叙事的 PR 倾向。文中关于 FHE、AI 驱动预言机的展望属于泛泛而谈，缺乏具体案例支撑。
