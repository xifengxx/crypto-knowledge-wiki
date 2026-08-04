---
type: source
source_type: article
url: https://stacymuur.substack.com/p/why-delphi-researchers-bet-on-initia
date: 2025-02
ingested: 2026-07-02
---

# 德尔福研究人员为何青睐 Initia？——从"裸应用链"困境到"世界编排层"愿景

## 阅读证据
- 总行数: 158
- Q1 (前25%): "Naked appchains"（裸应用链）缺乏预言机、跨链桥、索引器等关键基础设施，像"没有公用事业的都市"，表面光鲜但根本不可用
- Q3 (中后25%): Initia L1 充当中央枢纽，在所有 Rollup 之间标准化资产——从 EVM Rollup 发送 ETH 到 Cosmos 链会自动转换为正确的代币标准（ERC-20 ↔ CW-20），无需第三方桥
- Q4 (最后25%): Initia 通过 Echo 平台完成 250 万美元公开销售，A 轮估值 3.5 亿美元（Delphi Ventures 参与）；主网预计 2025 年 3 月上线
- 图片: 0 analyzed / 0 decorative skipped / 7 external URLs unavailable

## 核心要点
- 应用链（Appchains）存在根本性缺陷：碎片化导致流动性分散在 100+ 条链上，用户每周需桥接资产 3-4 次；Cosmos 虽有应用链理念但面临验证者引导成本高、IBC 代币碎片化、流动性分散三大问题；以太坊 Rollup 则受限于跨 Rollup 互动能力弱和对第三方桥的依赖
- Initia 提出"全栈解决方案"：L1 编排层负责安全、治理和流动性协调，L2 Rollup（Minitias）提供高速可扩展执行，实现"首个真正统一的应用链网络"
- **四大支柱**：(1) 用户体验优先——JIT Gas 抽象（用户可用任意代币付费）、原生 USDC 集成、.init 用户名、全工具套件；(2) 跨 Rollup 互操作——L1 作为中央资产枢纽、Minitswap 实现即时退出（无需等待 7 天）；(3) "意见性"交织堆栈——固定组件（Connect 预言机、InitiaDEX、IBC+LayerZero 桥、Celestia DA）+ 灵活执行（EVM/MoveVM/WasmVM）；(4) VIP 激励对齐——Rollup 通过 esINIT 赚取回报，Cabal 治理创造"应用越好→用户越多→投票越多→回报越高"的飞轮
- Initia 的经济学设计使 Rollup 不能随意退出——通过长期归属绑定，确保项目有财务激励留在生态内
- 生态首批应用包括 Blackwing（杠杆交易）、Milkyway（流动性质押）、Civitia（链上社交）、Echelon（借贷）和 Intergaze（NFT 发射台），形成"Infra → Apps → Users → Liquidity → Network Effects"战略循环
- 文章核心隐喻：如果以太坊是"世界计算机"，Initia 就是"世界编排层"——让应用链"和谐共唱"

## 关键数据
- 用户每周需跨链桥接资产 3-4 次才能访问基础服务（当前多链生态现状）
- 乐观 Rollup 的跨链提款需等待 7 天以上，Initia 通过 Minitswap 实现即时退出
- Initia 通过 Echo 平台完成 250 万美元公开销售，A 轮估值 3.5 亿美元（Delphi Ventures 参与）
- Initia 技术规格：CometBFT 共识 + 10,000+ TPS + 500ms 出块时间 + Celestia DA
- Initia 固定组件包括：Connect 原生预言机、InitiaDEX（含 Minitswap）、IBC + LayerZero 统一桥、Celestia 数据可用性层

## 与已有知识的关系
- 补充 [[initia]] — 新增细节：JIT Gas 抽象、.init 用户名、Initia Scan/App 工具套件、Cabal 治理机制、Skip POB + Protorev MEV 集成、Connect 原生预言机、Single Slot Finality；以 Delphi Research 视角补充了 Initia 的"四大支柱"分析框架和"世界编排层"定位
- 补充 [[delphi-digital]] — 记录了 Delphi Ventures 参与 Initia A 轮投资（估值 3.5 亿美元），以及 Delphi Research 发布 Initia 深度研报的事实，体现 Delphi 在 L1 基础设施赛道的研究覆盖和投资布局
- 补充 [[l1-competition]] — 提供了"以太坊=世界计算机 vs Initia=世界编排层"的分析框架，以及 Initia "固定组件+灵活执行"的差异化 L1 架构策略
- 补充 [[chain-abstraction]] — Initia 的统一跨 Rollup 体验（单钱包、JIT Gas 抽象、自动代币标准转换）是链抽象理念的 L1 原生实现案例
- 补充 [[cross-chain]] — Initia "One Token, Many Chains"（L1 作为中央资产枢纽，ERC-20↔CW-20 自动转换）提供了一种不同于纯跨链消息方案的交叉互操作方案

## 值得记住的引用
> "Even worse: 'Naked appchains.' These chains lack essential infrastructure like oracles, bridges, indexers, and more — they're like cities without utilities, impressive from the outside but fundamentally unusable."

> "Cosmos was right about the appchain thesis, but without strong incentives for collaboration, these chains ended up competing rather than forming a cohesive ecosystem."

> "If Ethereum is the 'World Computer,' Initia is the 'World Orchestrator' — the layer that lets appchains sing in unison."

> "Put simply, unicorns don't exist. By tying rewards to long-term vesting, Initia ensures projects are financially incentivized to stick around and grow the ecosystem."（关于 esINIT 归属机制——Rollup 不能"套现走人"）

## 我的笔记
- 这篇文章是 Stacy Muur 对 Delphi Digital Initia 研报的摘要+批注，本质上属于"研报的研报"——论述的说服力依赖于 Delphi 原始研报的质量。与深潮 TechFlow 编译的 Initia 文章相比，本文更侧重"为什么是 Initia"的叙事逻辑和 Delphi 视角，而非技术机制细节。
- 文章中的"四大支柱"框架（UX + 互操作 + 意见性堆栈 + VIP）比单纯描述 Enshrined Liquidity 更能体现 Initia 的整体设计哲学，但也掩盖了 Initia 面临的核心挑战：在 Berachain（POL 共识）、Monad（并行 EVM）、Solana 等强竞争对手环伺下，"世界编排层"叙事能否在实际主网运行中真正兑现。
- 值得注意的是，文章完全未提及 Initia 的代币分配比例和通胀模型——这对于评估 VIP 经济飞轮的长期可持续性是关键缺失。如果 INIT 排放速度不足以支撑 Cabal 贿赂市场，VIP 的激励效果可能有限。
