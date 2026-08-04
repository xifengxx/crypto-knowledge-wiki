---
type: concept
created: 2026-06-30
updated: 2026-06-30
tags: [infrastructure, cross-chain, ux, interoperability]
aliases: [意图, intent-based, 基于意图的设计]
---

# 意图（Intents）

## 一句话定义
基于意图的设计让用户只表达"想要什么结果"，而不需要指定"怎么做到"——执行路径由 Solver（求解器）网络竞标完成，与区块链传统"逐步指定操作"的范式根本不同。

## 核心原理

在传统区块链交互中，用户必须指定精确的执行路径（调用哪个合约、传什么参数、走哪条链）。基于意图的设计反转了这个逻辑：

1. **用户签名意图** — 表达期望的最终状态（如"用 1000 USDC 换尽可能多的 ETH"），而非执行步骤
2. **意图广播至 Solver 网络** — 链下实体竞标执行权
3. **Solver 竞争执行** — 通过部分匹配、自身库存填充或跨链路由找到最优方案
4. **链上结算** — Solver 提交执行结果，用户收到预期输出

## 关键优势
- **原生资产而非 IOU**：意图系统直接处理原生代币，不产生包装/桥接 IOU 风险
- **执行优化**：专业 Solver 的竞争压低用户成本
- **跨链统一**：意图不关心底层链，天然适合链抽象场景

## 代表项目/标准
| 类型 | 项目 | 说明 |
|------|------|------|
| 跨链意图标准 | ERC-7683 | Across + Uniswap 联合提出，首个统一跨链意图框架 |
| 意图中心 L1 | Anoma | 隐私+意图中心架构，去中心化撮合+原子多链结算 |
| 意图桥 | Across / Synapse | 基于意图的跨链资产转移 |
| 意图 DEX | Cow Swap / Uniswap X / 1inch Fusion | Solver 竞拍订单流 |
| 清算层 | Everclear (原 Connext) | 基于 EigenLayer 的 Optimistic Rollup，Solver 网络管理跨链流动性 |
| 意图+AI DeFi | [[aperture-finance]] | AI 自然语言界面 + Intents DSL + Solver DAO 网络 |

## 当前挑战
- 每个意图应用必须独立开发基础设施（聚合/匹配/拍卖模型），缺乏标准化导致碎片化
- 用户需要跨链智能账户才能使用意图系统
- Solver 集中化风险——少数专业做市商可能垄断执行
- **区块构建集中化风险**：以太坊合并后约 90% 区块通过 mev-boost 生产，三家实体控制 95.3% 区块生产份额（beaverbuild.org 44.9%、Titan Builder 39.9%、Vanilla Builders 10.5%）。意图的广泛采用若使某构建者独占订单流，可能形成垄断性中间商，引入审查风险并抑制竞争。此风险同样存在于 EIP-4337 格式，若既有信任中间商主导架构，可能阻止与自身业务模式竞争的新格式。
- **透明度和控制权丧失**：用户签名意图后，执行过程对外部不透明。在最坏情况下，用户的意图"消失在不明流程中，随后作为一笔交易出现，其创建过程毫无透明度"，给威胁监测和生态健康维护带来挑战。

## 跨领域：AI搜索中的"意图"
值得注意的是，"意图"（Intents）概念并不局限于区块链领域。AI搜索领域同样提出了"意图导向"（Intent-Oriented）的设计哲学：用户搜索"微博"需要的是寻址→内容消费，搜索"一直拉肚子怎么办"需要的是病因诊断→用药建议。不同意图需要不同的结果呈现格式。这种"用户表达目标、系统自动选择最优执行路径"的哲学与区块链意图系统中的"用户签名意图→Solver竞标执行"在抽象层面高度一致。来自 [[来源_2025_AI搜索_意图导向_场景分发]]

## 与 DeFAI 的关系
DeFAI（DeFi+AI）被 YBB Capital 定位为"意图的新添加路径"：AI Agent 是意图的完美执行者——用户表达意图（"以最优价格买入ETH"），AI Agent 通过 Solver 网络自动匹配执行路径，无需用户关心底层协议细节。终极愿景公式：AI Agent + Solver + Intent-Centric + DeFAI。

## 相关概念
- [[chain-abstraction]] — 意图是实现链抽象的关键技术路径之一
- [[account-abstraction]] — 意图系统依赖智能账户作为用户入口
- [[cross-chain]] — 意图是下一代跨链方案（从消息传递进化到意图驱动）
- [[defai]] — DeFAI 是意图的 AI 执行层，AI Agent 替代用户手动指定执行路径

## 来源
- [[来源_2024-07_链抽象_Thanefield研报_深潮TechFlow]]
- [[来源_2024-01_HashKey_Capital_Web3投资赛道全解析_PANews]] — HashKey 提出 Intents + MEV + AA 三套架构融合框架：Builder 和 Searcher 是最适合做 matching 和 solver 的角色；Telegram Bot 因订单流优势对 builder/SUAVE 有较大议价权
- [[来源_2025-01_DeFAI_AI_Agent_新浪潮_深潮TechFlow]] — YBB Capital 明确连接 DeFAI 与意图：DeFAI=意图的新添加路径，AI Agent+Solver+Intent-Centric+DeFAI 终极公式
- [[来源_2023-12_多Rollup世界_基础设施_SevenX]] — 意图为中心跨域桥接的结算预言机悖论：UniswapX 选择原生桥接（慢）vs 第三方桥接（信任问题）vs 轻客户端桥接（未成熟），陷入循环；求解器跨链库存再平衡可能导致求解器中心化，限制意图全部潜力
- [[来源_2024-08_十二大新公链_高估值速览_ChainCatcher]] — Anoma $3275 万融资详情（A 轮 $675 万 + 后续 $2600 万，Polychain 领投），核心设计"允许任何数字资产充当交换或支付手段"——用户可自由选择资产类别进行私人支付，而非引入特定资产用作货币，体现了意图中心架构在支付场景的激进设计
- [[来源_2024-04_链抽象细分_六模块_主要参与者_SevenX]] — 将"基于意图的系统"列为链抽象的四大交叉领域之一（钱包/意图/MEV/桥），UniswapX 在统一流动性模块中通过 Solver 网络处理跨链流动性
- [[来源_2025-02_AMM_订单簿_意图_ThreeSigma]] — 详细介绍了 CoW Swap 批量拍卖六步流程、Aperture Finance AI 意图架构、Across 三层意图桥系统；指出意图方案占以太坊 DEX 交易量约 12%（2025年1月超过 105 亿美元）；深入分析区块构建集中化风险
- [[来源_2024-12_AMM自动化做市商指南_ThreeSigma]] — 分析意图范式对AMM生态的潜在影响：主流资产订单流可能转向Solver竞拍协议（Uniswap X/CowSwap/1Inch），LP可能被迫退守长尾资产；提供Uniswap前端与Uniswap X的30天交易量对比数据（23亿 vs 5.87亿美元）
- [[来源_2025-03_链抽象_间接影响_Shoal]] — 明确区分 Intents 与 Chain Abstraction 两个概念：Intents = "用户不关心如何执行"（指定结果不指定路径），ChA = "用户不感知底层链"（隐藏多链复杂性）；跨链意图是两者的交汇点，Intents 是 ChA 的技术组件之一；同时指出意图系统面临中心化 Solver、缺乏 Gasless 交易、可扩展性瓶颈等挑战
