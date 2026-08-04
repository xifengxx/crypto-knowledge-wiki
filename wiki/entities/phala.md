---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
---

# Phala

## 基本信息
- 代币: PHA
- 类型: protocol
- 赛道: TEE（可信执行环境）去中心化计算
- 生态: 原生于 Polkadot/Substrate
- 定位: Privacy-preserving cloud on Polkadot；AI Agent 链化的 TEE 基础设施层
- 核心叙事: 为 AI Agent 提供可验证的可信执行环境（TEE），TEE 从密码学赛道中的「不起眼」角色因 AI Agent 自主资产管理需求升级为核心基建

## 核心业务/产品

- **TEE 去中心化计算网络**: 基于 Intel SGX 等 TEE 硬件的保密计算服务，智能合约和数据在可信硬件隔离环境中执行。TEE 此前在 ZK/MPC/FHE 竞争下长期不受关注，因 AI Agent 链化叙事而突然成为核心基建。
- **AI Agent 基础设施**: 为 AI Agent 提供自主私钥生成、资产管理的可信执行环境——Agent 可在 TEE 沙盒中安全运行而不暴露私钥。Phala 处理的是 Agent 单模态可验证性（私钥生成和程序执行可信），而共识层面的可验证性需依赖公链去中心化节点来补足。
- **Phat Contract**: 链下计算扩展方案，连接智能合约与外部数据源。
- **Spore.fun 合作实验**: 与 ai16z/Eliza 生态合作开发的 AI Agent 自主进化实验。Agent 用 pump.fun 代币收入租赁 Phala TEE 服务器，支付自身算力消耗，实现完全自我维持。被视为「AI Agent 链化」叙事的关键落地案例。

## 关键数据

- **CEX 叙事定位**: Phala 在 CEX 市场被归入「老叙事项目」（非本轮 AI 原生），市值区间约 300M-3B 美元；与之对比，DEX 市场 AI Agent 项目市值多在 10M-300M 美元（来源：来源_2024-12_AI_Agent链化_CEX选币策略_PANews）
- **TEE 赛道定位**: 与 Automata、Marlin 并列为 TEE 领域主要项目，在 IOSG 的 DeFAI 赛道 mapping 中被列为自主 Agent 隐私与验证层三选之一（来源：来源_2025-01_DeFAI生态_AI_Agent交易_PANews）
- **AI Agent 链化五模块之一**: TEE 被定义为 AI Agent 链化的 5 大基础设施模块之一（TEE + DA + Oracle + zkVM + 链抽象）。focEliza 做 DA 层，Phala 做 TEE 层（来源：来源_2024-12_AI_Agent链化_CEX选币策略_PANews）
- **B2A 基础设施六层之一**: 在 Defi0xJeff 的 B2A 框架中，Phala 属于「隐私与安全」层，与 Ora Protocol、brevis 并列（来源：来源_2025-02_YC春季创业指南_AI_Agent六大Web3赛道_BlockBeats）
- **去中心化 AI 基础设施七层之一**: 在 0xJeff 的七层分类中，Phala 被归入「可验证性(TEE)」层（来源：来源_2024-12_0xJeff_AI_Agent_2025展望_专业化与去中心化基础设施）
- **Spore.fun 底层信任层**: Phala TEE 提供安全可验证沙盒，Agent 用自身代币收入支付算力租金（来源：来源_2024-12_Spore_fun_自主AI进化_PANews）
- **ai16z 生态合作**: Kira 对冲基金 AI Agent 因与 Phala Network 合作进入 Eliza 架构（来源：来源_2024-12_ai16z生态项目全景_BlockBeats）

## 竞争优势 / 护城河

- **TEE 赛道先发优势**: 在 ZK/MPC/FHE 等密码学方案竞争中长期坚持 TEE 路线，积累了工程经验
- **AI Agent 叙事催化剂**: TEE 此前在密码学赛道中「不起眼」，因 AI Agent 需要自主资产管理而突然成为核心基建。PHA 作为 TEE 赛道主要 CEX 标的直接受益
- **CEX 流动性**: 代币已在主流中心化交易所流通，流动性好于纯链上 AI Agent 新项目
- **多生态系统整合**: 同时出现在 ai16z/Eliza 生态（Kira 合作）、Spore.fun 实验、DeFAI 验证层（IOSG mapping）、B2A 隐私基础设施（Defi0xJeff framework）、去中心化 AI 七层架构五个叙事框架中
- **链化叙事中的稀缺定位**: 在「AI Agent 链化」五模块中，Phala 是 TEE 模块的唯一明确标的

## 风险 / 争议

- **TEE 硬件单点失效风险**: Intel SGX 曾多次被爆破，TEE 安全性依赖硬件厂商安全承诺
- **TEE 执行程序缺乏共识可验证性**: 单点 TEE 硬件可被物理爆破、程序执行共识无法自证——需要区块链去中心化节点验证共识和智能合约协作调用环境来补足，Phala 本身不完全解决此问题
- **AI Agent 链化叙事仍极早期**: TEE 需求从「逻辑通顺」到「实际用量」有巨大不确定性
- **「老叙事项目」偏见**: 属于非本轮 AI 原生的项目，市场可能存在叙事陈旧带来的估值折扣
- **竞争压力**: ZK/MPC/FHE 等替代隐私计算方案可能在某天更适用于 Agent 场景

## 相关实体

- [[phala-network]] — 本实体同名扩展页，含更详细的技术与生态分析
- [[spore-fun]] — AI Agent 自主进化实验，使用 Phala TEE 提供安全沙盒，Agent 用代币收入支付计算租金
- [[eliza]] — Eliza Framework 与 Phala TEE 的集成（Kira 对冲基金 Agent 合作）
- [[ai16z]] — ai16z 生态中 Kira Agent 因与 Phala 合作进入 Eliza 架构
- [[hyperbolic]] — 同为 B2A 基础设施层中的去中心化算力管理，与 Phala 的 TEE 隐私层互补
- [[oasis-protocol]] — 同赛道隐私计算项目，Oasis 采用 Sapphire TEE EVM 兼容方案
- [[foceliza]] — AI Agent 链化的 DA 基础设施层，与 Phala（TEE 层）在同一链化基建栈中

## 相关概念

- [[b2a]] — Business-to-Agent 框架，Phala 是隐私与安全基础设施层的代表项目
- [[ai-crypto]] — AI+Crypto 交叉赛道，Phala TEE 是 AI Agent 信任基础设施
- [[ai-agents]] — AI Agent 链化的五大模块之一（TEE 层），Phala 的核心叙事
- [[defai]] — DeFAI 中 TEE+ZKP 提供自主代理的隐私与验证层
- [[privacy]] — TEE 是隐私计算三大路线之一，Phala 是 TEE 路线代表项目

## 来源

- [[来源_2024-12_AI_Agent链化_CEX选币策略_PANews]] — 将 Phala 定位为 CEX 选币案例：小市值、低存在感、技术扎实、踩中 TEE+AI Agent 新风口的潜在 Alpha
- [[来源_2024-12_Spore_fun_自主AI进化_PANews]] — Phala 创始人 marvin_tong 撰写的 Spore.fun 哲学框架，Phala TEE 作为 AI 自主进化的信任基础
- [[来源_2024-12_ai16z生态项目全景_BlockBeats]] — Kira Agent 因与 PhalaNetwork 合作进入 Eliza 架构
- [[来源_2024-12_AI代理新趋势_数字伴侣机器人]] — 0xJeff 将 Phala 列为 TEE 引领者，TEE 是实现完全自主 AI Agent 的关键技术
- [[来源_2024-12_0xJeff_AI_Agent_2025展望_专业化与去中心化基础设施]] — 七层去中心化AI基础设施中 Phala 归入「可验证性(TEE)」层
- [[来源_2025-02_YC春季创业指南_AI_Agent六大Web3赛道_BlockBeats]] — B2A 六层基础设施框架中 Phala 属于「隐私与安全」层
- [[来源_2025-01_DeFAI三大方向_0xJeff_BlockBeats]] — 0xJeff 将 Phala TEE 明确定位为 DeFAI 代理验证的核心基础设施
- [[来源_2025-01_DeFAI生态_AI_Agent交易_PANews]] — IOSG: TEE(Phala/Automata/Marlin) 为 AI Agent 隐私与验证层
