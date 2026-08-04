---
type: entity
entity_type: protocol
created: 2026-06-28
updated: 2026-07-02
tags: [ai-crypto, depin, compute]
---

# Bittensor (TAO)

## 基本信息
- 产品：去中心化 AI 算力 + 算法市场
- 代币：TAO（基于 Substrate 的独立 L1，非 EVM 兼容）
- 定位：让 AI 模型和算力变得可组合的"AI 乐高"
- 市值峰值：~$40 亿（2024.03）
- 链：波卡生态 Substrate 独立链

## 核心业务
用代币激励构建分布式 AI 网络——矿工贡献算力和模型，验证者评估输出质量，代币奖励按贡献分配。本质上是用加密经济机制解决 AI 推理的去中心化问题。

在 AI 技术栈中的定位：聚焦**下游推理**（让已训练模型生成输出），而非上游训练（提供 GPU 算力）。与 Akash/Render 的"卖铲子"逻辑形成上下游互补。核心设计包括专家混合（Mixture-of-Experts）机制——矿工和验证者之间不仅做评估，还交换知识和共享参数，使网络能整合多个 AI 模型产生最优输出。

Teng Yan（2023.11）将 Bittensor 定性为"技术驱动的商业模式创新"而非纯技术突破：它让专有数据和 AI 模型可以在不开源的情况下被更广泛的受众使用。定位是**面向企业的 API 基础设施**，而非终端消费者产品。

## 子网机制
- 2023 年 10 月 Revolution 升级引入子网概念，任何人都能创建专攻特定 AI 任务的子网并定义独立激励机制
- 每日 7200 枚 TAO 由 ROOT 网络分配给 32 个子网、矿工和验证者
- 子网竞争激烈：注册成本从不到 200 TAO 飙升至 10281 TAO（~$700 万/2024.03），三个月百倍增长
- 新子网有 7 天保护免疫期，之后代币分配最低的子网将被注销淘汰
- 每日分配：82% 归验证者和矿工平分，18% 归子网所有者
- 验证者门槛：仅各子网中权益排名前 64 的验证者获得许可证

## 关键数据
- 总量 2100 万 TAO，4 年减半，256 年挖完
- 每日排放 7200 TAO（按 $700 计约合 $504 万/日）
- 质押率：流通 TAO 的 87% 被质押（2024.03），真实流通量远小于市值
- 验证者集中度：前 5 大验证者掌控超过 65% 被质押的 TAO
- 子网分布（2024.03）：Cortex(子网18) 稳定占 ~10%，Vision(子网19) 7.96%→8.85%，Time Series Prediction(子网08) 8.49%→6.75%
- 知名子网：子网 18 来自开源 AI 研究组织 Nous Research，子网 9 性能据称超过 GPT-2

## 散户参与困境（2024.03 BlockBeats 分析）
- TAO 是非 EVM 代币，主流钱包不支持，需 Polkadot 兼容钱包
- wTAO 跨链桥由匿名开发者 CreativeBuilds 一人维护且闭源，存在跑路风险
- 子网注册门槛极高（$700 万+），验证者/矿工需遵循复杂的 GitHub 部署要求
- 散户只能质押 TAO（APY ~15%）或买入生态投机代币
- 结果：催生了大量寄生在 Bittensor 品牌上的"土狗项目"（2024.03 五天内 10 个 TAO 主题代币上线以太坊）
- Vitalik 曾用 Bittensor 案例解释如何用加密激励机制创造更好的 AI 产品

## Dynamic TAO (BIT001) 提案
- 2024 年 1 月由 Opentensor Foundation 提交
- 核心改革：引入双代币机制（TAO + 子网代币），子网代币可与 TAO 交易
- 目的：让子网价值受市场因素影响，降低投机门槛，提升 TAO 持有者参与区块奖励分配的权力
- 影响：生态将更有活力但更复杂——子网价值不再仅与验证者/矿工有关

## Meme 寄生现象
- 2024 年 3 月出现大量名称含 TAO 的代币（Taτsu 35 倍、Tao Bank 8 倍、TAS 8 倍、Tao Ceτi 15 倍）
- 项目特征：无团队信息、无官方认可、非正式子网、仅凭产品前端页面拉盘
- 从"三天出 1 个"加速到"一天出 3 个"，寿命越来越短（TAOx: 4 天涨 3 倍，再 2 天跌 90%）
- 核心驱动力：散户看好 Bittensor 但无法参与正经生态 → 买入寄生性替代品
- 团队可通过交易税获利，持有者能否分润取决于团队良心

## 相关概念
- [[depin]] — TAO 是 AI 算力的 DePIN 特化
- [[ai-crypto]] — TAO 是赛道龙头之一
- [[memecoins]] — Bittensor 生态催生了"AI 项目品牌寄生型"meme 币子类别

## 应用案例
- [[creator-bid]] — 首个在 Bittensor 子网上部署 AI Agent 的平台，子网为 Agent 提供技能扩展 + TAO 排放奖励，展示了子网从"算力挖矿"到"Agent 技能市场"的用例演进
- [[taocat]] — Masa（$1765万融资）+ Virtuals联合推出的AI代理，基于Bittensor子网42（X推文数据）和子网19（个性化），展示了子网用于Virtuals生态Agent技能增强的用例

## 风险 / 争议
- 散户排斥：高门槛设计使 TAO 持有者难以参与生态实际运转，沦为被动持币者
- wTAO 桥风险：匿名开发者、闭源、一人维护——市值 $40 亿项目的基础设施单点故障
- 验证者中心化：前 5 大验证者掌控 >65% 质押 TAO，且存在显著偏向性
- meme 寄生风险：正经生态无法吸纳的散户流动性外溢为低质量投机品，损害品牌

## 子网案例：Synth SN50（Mode Network）

Mode Network 在 Bittensor 上创建了 **Synth 子网 SN50**，专门提供高质量的合成价格数据，支持 AI 智能体和 LLM 的概率推理。这是 Bittensor 子网机制在 DeFAI 数据层方向的具体落地案例：

- **功能**: 生成价格变动的完整概率分布（而非单一结果预测），捕捉真实市场动态包括极端波动和价格变化
- **评估指标**: 采用连续排名概率分数（Continuous Ranked Probability Score, CRPS）评估预测准确性，从锐度（Sharpness — 价格范围预测精确程度）和校准度（Calibration — 预测与实际市场变化的匹配程度）两个维度衡量
- **应用场景**: 优化 AMM 流动性范围、基于概率模型的期权定价、多路径模拟 AI 驱动交易策略
- **集成**: 与 Mode 的 AI Terminal 深度集成，提供其他 LLM 或 AI 智能体不具备的市场概率分析能力
- **状态**: 2025 年初主网上线，DeFAI 智能体已可实时获取概率预测功能

Mode 的 Synth 子网案例展示了 Bittensor 子网从"通用 AI 推理/算力"向"垂直 DeFAI 数据层"的演进方向，也验证了子网机制支持特定加密金融场景的能力（参见 [[mode]]）。

## 来源
- [[来源_2023-11_去中心化AI_Bittensor_TAO_TengYan]] — 最早独立研究员分析之一（Teng Yan），以 Altman 被解雇为引子阐述去中心化 AI 必要性，首次提出 Bittensor 是"商业模式创新"、定位为企业 API 基础设施、TAO 仿比特币经济模型反映团队非 VC 动机
- [[来源_2025-03_AI_Layer1_Bittensor_Vana_Nillion_Sahara_Kite_BlockBeats]] — 2025年3月时间切片：dTAO 升级后 Alpha 代币机制细节（初始池 1 TAO + 1 Alpha 代币，价格驱动排放分配），4 个最活跃子网最新信息（Targon 4号/Chutes 64号/PTN 8号/Dojo 52号），子网 64+，活跃用户 14 万，日交易量 4500 万美元
- [[来源_2024-02_Bittensor_TAO_AI乐高]]
- [[来源_2024-03_Bittensor_市值40亿_AI以太坊_meme工厂_BlockBeats]]
- [[来源_2025-01_CreatorBid_Bittensor_Olas_AI-Agent]]
- [[来源_2025-01_VIRTUAL生态_50亿市值_叙事解析_odaily]]
- [[来源_2025-01_AI代理Launchpad之争_Virtuals到Solana_深潮TechFlow]] — Launchpad 集成 Bittensor Subnets 增强能力的趋势：CreatorBid 是典型案例
- [[来源_2025-01_Mira_Network_测试网_去中心化AI验证_深潮]] — Mira Network 多模型共识验证 vs Bittensor 子网竞争择优：两者在去中心化 AI 技术栈中处于不同层级——Bittensor 做推理分发（选最优模型），Mira 做输出验证（多模型交叉确认）
- [[来源_2025-05_AI赛道重拾热度_潜力项目_BlockBeats]] — 补充 dTAO 子网流动性优势（滑点 0.05%-0.1% vs Virtuals 的 3%-7%）吸引 VC 和大资金；SN28 子网漏洞被利用为 MemeCoin 引发基金会中心化干预争议；前 Messari 分析师 Sami Kassab 成立 Bittensor 专项流动性基金；Rayon Labs 的三个子网产品（SN64 Chutes/SN56 Gradients/SN19 Nineteen）
- [[来源_2025-03_Bittensor_AI比特币_子网减半_PANews]] — 补充 Bitcoin 类比叙事框架（减半 13,125 倍对比、Yuma 共识流动性）；70 子网仅 7250 万美元合计市值 vs 根子网 20.9 亿美元的结构性失衡数据；12 个代理使用 Bittensor 子网的低采用率；动态 TAO 2025 年 2 月 13 日精确上线时间
