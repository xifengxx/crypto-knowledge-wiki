---
type: source
source_type: article
url: https://www.panewslab.com/zh/articledetails/a5vxp3ot.html
date: 2024-01
ingested: 2026-06-30
---

# HashKey Capital：2024 Web3投资赛道全解析

## 阅读证据
- 总行数: 225
- Q1 (前25%): zkEVM 按 type0/type1/type2 分类进展各异，type0 完全等效以太坊但出块速度和验证状态存在技术挑战，type1 在操作码兼容性上最为突出
- Q3 (中后25%): 近 22% 的 ETH 已被质押，Lido 占 ETH staking 市场份额约 32%，流动性质押代币是最大的 DeFi 赛道（200 亿美元 TVL）
- Q4 (最后25%): DePIN 赛道按硬件类型分为三类判断——关注 ToC 场景（可穿戴设备等）、谨慎看待改善类硬件（路由器等已有大厂赛道）、观望特有矿机方向（日常可有可无的硬件）
- 图片: 1 张游戏 Studio 分类表格（已文字化），文末 1 张活动海报（装饰性，跳过），0 张外部图片下载

## 核心要点
- ZK 赛道在 2023 年从扩容/跨链进一步扩展到 zkEVM、zkVM（zkWASM/RISC V/zkLLVM 三条路线）、ZK Mining（ASIC 芯片分化、Prover DAO 增多）、ZK Middleware（Coprocessor/zkML/证明共享）四个子赛道
- MEV 赛道关注重心从交易执行阶段前移到意图阶段（Intent-based），下一代 DEX 将围绕解决 LVR 和改进 LP 设计，私人拍卖/交易池 + FHE/MPC/ZKP 是改善交易供应链的关键技术
- AA（账户抽象）基建已基本搭好，截至 2023 年 11 月已有超过 600 万次 UserOp 和约 200K MAU，L2 的 AA 发展优于 L1，但 DApp 不支持 AA 和跨 Rollup 账户实现仍是瓶颈
- Intents 很适合与 MEV、AA 架构结合——Builder 和 Searcher 是最适合做 matching 和 solver 的角色；Telegram Bot 因订单流优势对 builder 和 SUAVE 有较大议价权
- DA 赛道头部效应明显，Celestia 上线拉高整体估值，但 DA 本质是 to B 业务，收入和生态项目数量质量直接相关；EigenDA 定位独特，可能吸收以太坊和替代 DA 之间的中间客户
- 游戏赛道整体质量和团队专业度比上个周期大幅提升，HashKey 更看重团队对 web3 的理解深度和学习速度而非 web3 经验；持续关注 UGC，去中心化可解决 Web2 UGC 的中心化激励不透明问题
- DePIN 是牛市容易起量的赛道，投资需先看机制设计，再看时机和行业基本面；ToC 高频硬件（可穿戴）可能通过代币激励实现硬件普及的革命性变革
- 比特币生态建设需要与以太坊不同的思路（非全局共享状态），值得关注 Taproot Assets、Rollup、闪电网络、客户端验证（RGB）、DLC 等方向

## 关键数据
- AA 赛道：截至 2023 年 11 月超 600 万次 UserOp，约 200K MAU，用户钱包数自 6 月起开始起量
- ETH 质押率：近 22% 的 ETH 已被质押，Lido 占市场份额约 32%，流动性质押代币 TVL 达 200 亿美元
- RaaS 市场：至少 30 多个 VC 支持的 RaaS 项目及基础设施提供商正在进入市场
- 永续 DEX 费用在各细分赛道中占比最高（据 Messari 报告，包括 dYdX、GMX、Drift、Jupiter 等）

## 与已有知识的关系
- 补充 [[account-abstraction]] — 更新 2023 年底 AA 采用数据（600 万 UserOp / 200K MAU），揭示 DApp 不支持 AA 和跨 Rollup 账户实现两大瓶颈
- 补充 [[bitcoin-ecosystem]] — HashKey 对比特币生态的技术路线判断：侧链/客户端验证/闪电网络/BRC20/DLC 五线并行，强调比特币非全局共享状态的根本差异
- 补充 [[intents]] — HashKey 提出 Intents + MEV + AA 三套架构融合的框架，Builder 和 Searcher 是天然的 matching/solver 角色
- 补充 [[data-availability]] — 2024 年初 DA 赛道竞争格局（Celestia/EigenDA/Avail），EigenDA 定位特殊，DA to B 属性决定收入依赖生态项目
- 补充 [[depin]] — HashKey DePIN 投资框架：三类硬件判断（ToC 高频/改善类/矿机），机制优先于时机的分析逻辑
- 补充 [[gamefi]] — 2024 年游戏品类分类框架（Casual/大型/Casual-mid-core/IP Building/AI feature），UGC 去中心化的价值主张

## 值得记住的引用
> "整体游戏质量和团队专业度水平都比上个周期有大幅度提升...我们会更看重团队的想法和思路是否符合 web3，以及学习速度快，而不是有丰富的 web3 经验。"
> "作为 Crypto 基金，我们会更多关注 ZKML、有 crypto 垂直领域数据优势的项目、或与 AI 结合紧密的 to C 产品，而非不擅长的大语言模型等基础设施。"
> "在 DePIN 的世界里，因为有明确的 token 激励，所以用户购买硬件的动力会更强（很快回本），商家甚至可以先预售再生产...尤其对于欠发达地区，如果没有 DePIN 可能永远也不会购买某些硬件。"
> "DA 本质上是个 to B 业务，DA 项目方的收入和生态项目的数量质量息息相关。"

## 我的笔记
HashKey 这篇文章的独特价值在于它是一个活跃 VC 的内部赛道判断框架的"开源"，而非事后总结的研报。这意味着它反映的是机构在 2024 年初实际配置资金时的真实思路，比学术性研报更有实战参考意义。文章对每个赛道的判断都带有明确的"我们怎么看"——不是在客观描述，而是在为投资决策提供依据。

文章一个很有洞察力的观点被大多数人忽略：比特币链上不是全局共享状态的，和以太坊的整个思路差别很大，所以中长期来看比特币基础设施建设需要采用不太一样的思路。这解释了为什么以太坊的 L2 范式不能简单复制到比特币——但 2024 年大量项目恰恰在做这种"复制粘贴"。

另一个值得警惕的信号：HashKey 提到 RaaS 市场已经有 30 多个 VC 支持的项目进入，rollup 市场"基本饱和"。当一个 VC 自己都说赛道饱和时，说明他们已经很难在这个方向找到 alpha——这对后来者是明显的预警。
