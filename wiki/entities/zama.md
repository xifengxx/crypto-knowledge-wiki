---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [fhe, privacy, crypto, infrastructure]
aliases: [Zama.ai]
---

# Zama

## 基本信息
- 类型: protocol / company
- 赛道: 全同态加密（FHE）基础设施
- 成立时间: ~2020 (estimated)
- 定位: FHE cryptography company，开源全同态加密技术提供商
- 团队: 100+ 员工（含 37 位 PhD），CEO 为 Rand Hindi
- 总部: 法国巴黎

## 核心业务/产品

Zama 专注于**全同态加密（Fully Homomorphic Encryption, FHE）** 技术和产品，核心产品线包括：

1. **TFHE 库** — 业界最快的 FHE 实现，开源社区广泛使用的基础密码学库
2. **fhEVM** — 基于 FHE 的以太坊虚拟机，实现智能合约原生数据加密，交易数据在链上全程保持加密状态，仅合约所有者或授权方可以解密
3. **CBP（Confidential Blockchain Protocol）** — 机密区块链协议，2025 年中发布了以太坊上的公开测试网
4. **MPC 阈值解密库** — 基于安全多方计算的阈值解密方案，[[来源_2024-12_Equilibrium_2025年20个预测|Equilibrium Research]] 预测将成为行业事实标准
5. **全球首个机密 ICO** — 2026 年 1 月在以太坊主网上进行了首例密文密封投标荷兰拍

Zama 的 FHE 技术让区块链交易数据在计算全程（输入、处理、输出）保持加密状态——这与 ZKP（仅验证过程加密）和 MPC（多方协作但不隐藏计算逻辑）有本质区别。FHE 提供了最强的隐私保证，但代价是巨大的计算开销（通常为明文计算的 100-1000 倍）。

## 关键数据

1. **总融资 ~$1.3 亿**（两轮）：2024 年 3 月 A 轮 $7300 万（Multicoin Capital + Protocol Labs 领投），2025 年 6 月 B 轮 $5700 万（Blockchange Ventures + Pantera Capital 领投）
2. **首个 FHE 独角兽**：B 轮后估值 >$10 亿
3. **顶级 Angel 阵容**：Gavin Wood（以太坊/波卡联创）、Anatoly Yakovenko（Solana 联创）、Juan Benet（Filecoin 创始人）参投
4. **团队规模**：100+ 员工，其中 37 位密码学/数学 PhD
5. **性能提升**：产品发布以来 FHE 性能提升 100 倍，计划 5 年内再提升 100 倍
6. **生态位置**：在 [[来源_2024-11_178个加密AI项目全景_DimaKhanarin_PANews|178 个加密 AI 项目全景]] 中，Zama 以当时融资 $8230 万位居最高融资项目第二（仅次于 Story Protocol $1.343 亿）
7. **世界首创**：2026 年 1 月在以太坊主网上完成了全球首个密文密封投标 ICO

## 竞争优势 / 护城河

1. **先发 + 专注**：Zama 是唯一专注区块链 FHE（而非通用 FHE）的头部公司，相比 ZKP 和 MPC 领域的众多竞争者，FHE 赛道参与者极少
2. **顶级 VC 背书**：Multicoin、Pantera、Protocol Labs 等顶级 Crypto VC 加持，以及多位公链创始人的个人投资，赋予强大的生态连接能力
3. **开源社区**：TFHE 库已获广泛采用，成为 FHE 领域的事实标准底层库
4. **行业标准潜力**：[[来源_2024-12_Equilibrium_2025年20个预测|Equilibrium Research]] 预测 Zama 的 MPC 阈值解密库将成为行业标准，隐私区块链将迎来"ChatGPT 时刻"
5. **完整的隐私栈**：从底层密码学库（TFHE）到虚拟机（fhEVM）再到协议层（CBP），覆盖完整的 FHE 技术栈

## 风险 / 争议

1. **性能瓶颈**：FHE 计算开销极大（100-1000x），尽管有 FPGA/ASIC 加速计划，实际应用场景受限。[[privacy|隐私公链概念页]] 指出诸多隐私公链"多数生态贫瘠、估值偏高"
2. **替代方案竞争**：TEE（[[Phala Network]]、[[oasis-protocol]]）在性能上远优于 FHE；ZKP（[[aleo]]、[[Aztec]]）已更成熟，[[freysa]] 明确选择 TEE 而非 FHE，认为"TEE+zkTLS 是比 FHE 更务实的 Agent 安全方案"
3. **硬件依赖**：FHE 实用化高度依赖 FPGA/ASIC 硬件加速，需要大量资本开支和硬件供应链管理
4. **监管不确定性**：隐私技术面临 AML/KYC 合规压力，Tornado Cash 制裁虽被驳回但监管框架仍不明确
5. **代币尚未上线**：截至 2025 年中，Zama 尚未发行主网代币，估值完全依赖私募市场
6. **市场需求存疑**：[[privacy|隐私公链]] 概念页指出"多数隐私公链未能获得显著采用，隐私需求可能更适合作为功能模块而非独立公链"——FHE 同样面临"刚需是否真实"的质疑

## 相关实体

- [[Mind Network]] — 使用 Zama FHE 技术构建多智能体 AI 协作系统
- [[Phala Network]] — TEE 隐私计算路线，与 FHE 构成直接技术竞争
- [[oasis-protocol]] — TEE 隐私公链，同类隐私赛道不同技术路线
- [[Shutter Network]] — MEV 保护，使用阈值加密（技术上有交集）
- [[aleo]] — ZK 隐私公链，不同隐私技术路线
- [[Aztec]] — ZK-rollup 隐私方案
- [[freysa]] — AI Agent 框架，选择 TEE 而非 FHE，认为 TEE 更务实

## 相关概念

- [[privacy]] — FHE 是隐私技术栈的核心组成部分之一，与 ZKP、MPC、TEE 并列
- [[ai-crypto]] — FHE 在 AI 隐私计算中的潜在应用
- [[defai]] — FHE 为 DeFi + AI 提供数据隐私基础
- [[account-abstraction]] — fhEVM 与 AA 结合可实现原生隐私的智能账户

## 来源

- [[来源_2024-11_178个加密AI项目全景_DimaKhanarin_PANews]] — Zama 在 178 个 AI 项目中以 $8230 万融资位列第二
- [[来源_2024-12_Equilibrium_2025年20个预测]] — 预测 Zama MPC 阈值解密库成为行业标准 / 隐私"ChatGPT 时刻"
- [[来源_2024-12_L2IV_Research_2025加密前景展望]] — 将 FHE 列为 2025 关键基础设施之一
- [[来源_2024-01_HashKey_Capital_Web3投资赛道全解析_PANews]] — 提及 FHE 作为改善交易供应链的关键技术
- [[来源_2025-01_Mind_Network_FHE多智能体协作]] — FHE 在 AI 多智能体协作中的应用案例
- [[来源_2025-01_以太坊路线图_Pectra升级_DevCon_PANews]] — DevCon 讨论 ZKP/FHE/MPC 等多密码学组合应用
- [[来源_2025-01_Freysa_Base_AI_自主Agent框架]] — 对比分析 TEE vs FHE 的技术选型权衡
- [[来源_2024-12_AI_Agent链化_CEX选币策略_PANews]] — FHE 与 ZK/MPC/TEE 在 AI Agent 链化叙事中的竞争关系
