---
type: entity
entity_type: project
created: 2026-06-29
updated: 2026-07-02
tags: [l2, ai-crypto, defai, bittensor, op-stack]
aliases: [Mode Network]
---

# Mode

## 基本信息
- **类型**: 基于 OP Stack 的以太坊 Layer 2 (L2)，Optimism Superchain 成员
- **代币**: $MODE（初始供应 13 亿枚）
- **主网上线**: 2024 年 1 月（正式推出）/ 2024 年 2 月（主网上线）
- **定位**: 全栈 DeFAI 链——从协议层为 AI 智能体提供优化执行环境和激励，构建自治链上经济
- **战略重心**: 2024 年下半年将资源集中在 DeFi 和 AI 交叉点（DeFAI）

## 核心数据（截至 2025 年初）
- 超 5900 万笔交易
- 部署 73 个 DeFi 协议
- 超 40 万用户
- TVL 4 亿美元（Superchain L2 排名第三）
- 桥接超 7 亿美元跨链资金
- 已部署超 7300 个 AI 智能体 / 处理 12,800 笔 AI 交易
- AI Agent App Store 上线后管理超 $332K 资产
- 约 4.32 亿枚 $MODE 质押（流通供应量 17.28%）

## 全栈 DeFAI 架构

### 1. 交互层 (Interface Layer)
**AI Terminal**: GPT 技术驱动的 DeFi 智能助手，支持管理跨链投资组合、部署智能合约、分发 Token、启动 NFT 项目、执行质押和收益农业策略。与 Synth 子网深度集成，提供市场概率分析。预计 2025 年 1 月向 $MODE 质押者开放测试版。

**AI Agent App Store**: 专为用户提供 DeFi 策略 AI 智能体的集成平台。自 2024 年 11 月上线以来部署 7349+ 个 AI 智能体（运行于 Giza 和 Olas），管理超 $332K 资产。提供预构建 AI 智能体完成特定的 DeFi 任务。未来发布自动治理、跨链策略和自主协议部署新智能体。

### 2. 数据层 (Data Layer)
**Synth 子网 SN50**: 在 Bittensor 上创建的合成数据子网，提供高质量合成价格数据，支持 AI 智能体和 LLM 运行。关键创新：
- 生成价格变动的**完整概率分布**而非单一结果预测
- 采用连续排名概率分数（CRPS）评估预测准确性，从锐度（Sharpness）和校准度（Calibration）两个维度衡量
- 支持优化 AMM 流动性范围、基于概率模型的期权定价、多路径模拟 AI 驱动交易策略
- 2025 年初主网上线，使 DeFAI 智能体实时获取概率预测功能

### 3. 基础设施层 (Infrastructure Layer)
**AI 安全排序器 (AI Secured Sequencer)**:
- 与 Forta Firewall 技术集成，实时分析交易识别潜在风险
- 可疑交易被标记、拦截或延迟审查，恶意活动在源头阻止
- 检测准确率：可检测 99% 漏洞，误报率 <0.001%，响应时间 50 毫秒
- 当前处于测试网阶段

**Superchain 互操作性**: 作为 Superchain 核心成员，接入多种 DeFi 协议，支持跨链桥接和跨链策略执行。

## 代币经济

### $MODE 初始分配
- 总供应量：13 亿枚
- 用户和开发者：35%（赛季 1 5.5% / 赛季 2 5% / 赛季 3 积分时代结束 / 剩余 24.5%）
- 核心贡献者：19%（12 个月锁仓 + 24 个月线性解锁）
- 投资者：19%（12 个月锁仓 + 24 个月线性解锁）
- 基金会和链上国库：27%（生态计划 + 用户激励）

### 赛季演进
- **赛季 1**（2024 年 5 月结束）：向早期参与者空投 5.5% 总供应量
- **赛季 2**（2024 年 5 月 - 10 月）：激励活动分发 5% $MODE + 1,000,000 枚 $OP
- **赛季 3**（2024 年 10 月 - 2025 年 1 月）：引入 veMODE/veBPT 投票托管模型，结束积分时代
- **赛季 4**（2025 年 1 月 20 日启动 - 当前进行中）：引入 Hidden Hand 集成贿赂市场 + AI 智能体代理质押/投票功能

### veToken 模型
- **veMODE**: 质押 $MODE 获取，投票权随质押时间延长增加
- **veBPT**: 质押 Balancer 80/20 MODE/ETH LP 获取，投票权规则与 veMODE 类似
- 激励按 veMODE:veBPT = 10:1 比例分配
- 解除质押触发 3-6 天冷却期，期间累积投票权和奖励清零
- 投票每两周一次，持续六个周期

### $MODE 效用
- 质押获得 AI 智能体项目白名单资格
- 参与 AI 智能体项目融资（以 $MODE 计价）
- AI 项目流动性池在 Velodrome 上与 $MODE 独家配对
- 拨款申请和激励分配的治理决策
- 参与贿赂市场获取激励（初期 $OP，后续链上国库支持）
- 提前体验 DeFAI 工具（如 AI Terminal）
- AI 智能体项目空投资格

### 生态增长飞轮
用户购买并质押 $MODE → 获取 veMODE → 优先参与 AI 智能体启动平台（Chirper/DAAO/Arcaid）→ AI 项目以 $MODE 融资 → 新 AI 项目在 Velodrome 建立 $MODE 唯一配对流动性池 → 高质量项目提升 $MODE 需求 → 更多用户参与质押。

## 生态系统与应用

### DeFi 生态
- 250+ dApp 在其网络上开发
- 涵盖借贷（Ionic/LayerBank/Ironclad）、DEX（Velodrome/Balancer）、收益优化等场景

### 生态建设计划
- **DeFAI 加速器**（2024 年 10 月启动）：$100K 奖金，为期两个月，每季度招收一批团队。首批 9 支团队专注 AI Agent 基础设施（Talus Network/Intentify）、训练平台（Almanak）、资产管理（Amplifi）、安全（QuillAI）、AI 前端（FortyTwo）、可验证计算（Inference Labs/Aizel Network）、无代码训练（Cerbo AI）。通过 Mode 天使和风投网络可获得 $10M 早期基金支持，Optimism 审计补贴，无需交出代币股权。
- **AI 智能体黑客松**（第一轮 2024 年 12 月 17-23 日）：698 名注册者，6 天五大主题（DeFi/BTCFi/社交/游戏/Wildcard）。三种框架支持（GOAT/Eliza/Olas）。五个获奖项目：Midas（聊天驱动 DeFi 操作）、MoDAS（多智能体 DeFi 自动化）、Memex（AI Meme 币部署）、Mode Mind（深度 Token 分析/推特分享见解）、Research Idea Generator（NFT+语音笔记）。
- **AI 智能体创始人学校**（2025 年推出）：简化 AI 智能体在 Mode 上的开发与部署。
- **资助**: 已资助 5 个项目，通过 AIFI 加速器帮助 9 个团队。

### 关键案例研究
**Giza ARMA**: 自主收益优化智能体，最大化 USDT/USDC 存款收益。通过 Mode 借贷协议持续评估利率，动态分配资金到最高收益池。自托管智能账户（账户抽象）/自动再平衡/自动复利。管理超 $30 万资产，7400+ 智能体，20,000+ 自主交易，APR 9.69%。

**Amplifi**: AI 驱动的 BTC 和稳定币收益策略。一键式金库消除 Gas/兑换/跨链操作。利用 Polyhedra zkBridge 实现无缝跨链。账户抽象支持无 Gas 交易和 Web2 社交登录。AI 引擎动态调整流动性池间资金分配防止收益衰减。封闭测试阶段，2025 Q1 公开测试，Q4 v1 发布，未来整合 Superchain/Cardano/Bitlayer/SVM/Move。

**Modius / BabyDegen (Autonolas)**: 自动化投资组合管理工具。利用 AI 模型和实时市场数据（CoinGecko）在 Mode 上自主交易。分析价格趋势，根据市场动态选择最佳策略（买卖/持有）。支持 USDC 和 ETH，在 Balancer 和 Sturdy 上运行。Alpha 版已开源。

## 竞争优势 / 护城河
- **L2 原生 DeFAI**: 唯一从 L2 协议层提供完整 DeFAI 基础设施（交互+数据+安全排序器）的链
- **Bittensor 集成**: Synth 子网 SN50 在 Bittensor 主网上线，提供去中心化概率预测数据
- **生态增长飞轮**: AI Agent App Store + 加速器 + 黑客松 + 创始人学校形成完整的开发者增长循环
- **veToken 经济**: 10:1 veMODE:veBPT 激励比例 + Hidden Hand 集成贿赂市场，构建治理经济基础
- **Superchain 互操作性**: 跨链桥接和跨链策略执行能力
- AI 智能体数量（7300+）超过 Base（5900+），但 AUA（$33.2 万）仍极低，产品-市场匹配远未验证

## 风险 / 争议
- **智能体 AUA 极低**: 7300+ 智能体仅管理 $33.2 万（平均 ~$45/智能体），显示大规模部署≠实际使用
- **veToken 模型风险**: 参考 Curve Wars 教训，投票托管模型长期可能带来治理疲劳和贿赂依赖
- **叙事 > 基本面**: 独立验证的 AUA 数据（1,684 代理/$30.4 万，来自 [[来源_2025-01_特朗普MEME币吸血_DeFAI抄底_50项目盘点_BlockBeats]]）与官方宣传口径存在差异
- 代币供应通胀压力（35%分配用户/开发者仍在持续解锁）

## 竞争对手
- [[base]] — 同为 Superchain L2，生态覆盖更广但 DeFAI 不够专注，AI 智能体数量 5900+（低于 Mode 的 7300+）
- Orbit / Anon / Thales — DeFAI 协议层面竞品，但非全栈 L2 链

## 相关事件时间线
- 2024 年 1 月：Mode 主网上线
- 2024 年 5 月：$MODE 代币推出 / 赛季 1 空投结束
- 2024 年 5 月 - 10 月：赛季 2 激励活动
- 2024 年 10 月：DeFAI 加速器启动 / 赛季 3 开始（引入 veMODE/veBPT）
- 2024 年 11 月：AI Agent App Store 上线
- 2024 年 12 月 17-23 日：AI Agent 黑客松第一轮
- 2025 年 1 月：赛季 4 启动（贿赂市场 + AI 代理质押/投票）
- 2025 年 1 月：AI Terminal 向 $MODE 质押者开放测试版
- 2025 年初：Synth 子网 SN50 主网上线

## 相关实体
- [[bittensor]] — Mode 运行 Bittensor 子网 Synth SN50，接入去中心化 AI 网络
- [[optimism]] — OP Stack 和 Superchain 生态基础设施提供者
- [[giza]] — Giza ARMA 在 Mode 上运行自主收益优化智能体（APR 9.69%/管理 $30 万+）
- [[amplifi]] — Mode DeFAI 加速器成员，提供 AI 驱动 BTC/稳定币收益策略
- [[olas]] — Autonolas 在 Mode 上运行 BabyDegen 自动化投资组合管理工具
- [[velodrome]] — AI 项目流动性池与 $MODE 独家配对平台
- [[balancer]] — veBPT 通过质押 MODE/ETH 80/20 LP 获得
- [[forta]] — Mode AI 安全排序器的 AI 防火墙技术合作伙伴
- [[virtuals]] — Base 链的 AI Agent 平台（L2 竞品对比）

## 来源
- [[来源_2025-02_Mode_Network_DeFAI_L2_深潮TechFlow]] — **本文档的主要来源**：Memento Research 深度研报，完整覆盖 Mode 的 DeFAI 三层层级架构、代币经济赛季分解、veModel 详细机制、生态案例研究
- [[来源_2025-01_AiFi生态版图_40+项目_Foresight_News]] — 2025 年 1 月 AiFi 生态版图快照：Mode 市值 $3.8 亿
- [[来源_2025-01_DeFAI_入门_The_DeFi_Investor]] — 2025 年 1 月 The DeFi Investor：确认 Mode 为"在 AI Agent 叙事存在前就开始押注"的 L2，核心 AI Agent 包括 Modius/ARMA/AmpliFi，已推出 AI Agent App Store
- [[来源_2025-01_特朗普MEME币吸血_DeFAI抄底_50项目盘点_BlockBeats]] — 2025-01-20 快照：市值 $1.02 亿，1,684 个代理部署/完成 4,066 次交易/管理资金仅 $30.4 万——实际使用量与市值形成巨大反差
- [[来源_2025-01_AI代理Launchpad之争_Virtuals到Solana_深潮TechFlow]] — Mode 作为 DeFAI L2 推出 Mode Terminal 抽象层
- [[来源_2025-01_DeFAI三大方向_0xJeff_BlockBeats]] — 0xJeff 详细列举 Mode 生态三个 AI 驱动 dApp（ARMA/Modius/Amplifi）
