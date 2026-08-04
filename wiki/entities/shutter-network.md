---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [mev, privacy, infrastructure]
---

# Shutter Network

## 基本信息
- 类型: protocol
- 赛道: MEV 保护 / 加密内存池
- 定位: 基于阈值加密的 MEV 保护协议
- 核心开发团队: brainbot GmbH（德国美因茨）
- 上线时间: 2022年10月（生产环境）
- 代币: SHU（治理代币，最大供应量 10亿）

## 核心业务/产品

Shutter Network 是一个基于阈值加密的 "encryption-as-a-service" 协议，核心能力是创建**加密内存池（encrypted mempool）**，从根本上防止抢先交易（frontrunning）、三明治攻击（sandwich attacks）和实时审查。

### 核心机制
用户交易在提交到内存池之前使用公钥加密，验证者、机器人和区块构建者无法读取交易内容。一组去中心化的 **Keyper** 节点共同持有解密密钥的分片——只有达到阈值数量的 Keyper 协作才能解密。交易在区块确认、排序锁定后才被解密，从而消除排序者利用交易内容提取 MEV 的能力。

### 产品形态
- **Shutter API** — 为 dApp 集成加密交易流程
- **加密 RPC 端点** — 钱包可直接配置使用，自动加密交易
- **Shielded Voting（屏蔽投票）** — 用于 DAO 治理的隐私投票
- **Sealed-bid Auctions** — 密封投标拍卖

### 重要部署
- **Gnosis Chain（Shutterized Gnosis Chain）** — 2024年7月上线，EVM 兼容公链首次在协议层集成阈值加密，用户通过加密 RPC 端点提交交易
- **Chiado 测试网** — 2024年3月上线
- **BNB Chain（提案阶段）** — 2025年5月提交 BEP 提案，获 Binance "Good Will Alliance" 支持
- **Ethereum 主网（探索中）** — Vitalik Buterin 公开支持加密内存池方案

## 关键数据

- **ICO 融资**: 2024年2月通过 ICO 筹集 ~$524万，投后估值 ~$698万（Tracxn 数据）
- **DAO 金库**: ~$630万资产，已分配 $370万资助金
- **DAO 社区**: ~2,500 成员，共通过 75 项提案中的 41 项
- **SHU 代币**: 流通量 ~3.785亿枚，市值为 ~$100万，总供应量上限 10亿枚（FDV ~$260万）
- **开发者资助**: brainbot 团队月均获 DAO 资助 $23.3万（2024年8月→2025年7月），后逐步降至 ~$10.7万/月（2026年6月）
- **运营时间**: 自2022年10月起持续运行

## 竞争优势 / 护城河

- **阈值加密 vs TEE**: 不同于 SUAVE 的 TEE（可信执行环境，依赖硬件信任假设），Shutter 的阈值加密完全基于密码学，不依赖特定硬件，安全性假设更纯粹
- **已落地生产**: 是少数在主流公链（Gnosis Chain）上实际部署的加密内存池方案
- **Vitalik 背书**: 加密内存池作为以太坊路线图中 MEV 治理的重要组成部分，获得社区领导者支持
- **去中心化 Keyper 网络**: 没有单点故障，Keyper 由 DAO 选举产生
- **Opt-in 兼容**: 加密交易与普通交易可并行存在，无需全网络升级

## 风险 / 争议

- **采用率挑战**: Equilibrium Research 在2025年预测中认为，加密内存池的采用率将保持在总交易量的 <10%，外部协议（如 Shutter）可能难以获得广泛采用——采用取决于更广泛产品的成功或核心协议的纳入
- **DAO 资助依赖**: 开发团队 brainbot 的运营资金完全依赖 DAO 的月度资助，2026年资助已从 $23.3万/月降至 ~$10.7万/月，社区内存在对资助效果的质疑和叫停讨论
- **技术局限**: 学术研究（BEAT-MEV, TU Darmstadt, 2024）指出 Shutter 的批量阈值加密存在"待处理交易隐私"问题——同一 epoch 内的所有交易（包括尚未确定最终状态的待处理交易）都可能被解密
- **竞争激烈**: SUAVE（Flashbots）的 TEE 方案、Radius 的 PVDE 加密内存池、Zama/Fhenix 的 FHE 方案都在争夺同一 MEV 保护市场
- **SHU 流动性低**: 代币日交易量仅 $134–$8,700，距离 ATH 下跌约 72%，市场关注度有限

## 相关实体
- [[suave]] — Flashbots 的 TEE 方案，与 Shutter 的阈值加密是竞争技术路线
- [[gnosis-chain]] — Shutterized Gnosis Chain 是当前最主要的实际部署
- [[flashbots]] — SUAVE 开发者，MEV 基础设施领域的头部竞争者
- [[mev]] — Shutter 试图解决的问题领域
- [[radius]] — 同类加密内存池方案（共享排序器 + 隐私保护）
- [[privacy]] — 隐私计算赛道，Shutter 属于 MEV 保护隐私子集
- [[sequencer]] — 去中心化排序器生态中加密内存池是关键组成部分

## 来源
- [[来源_2023-12_多Rollup世界_基础设施_SevenX]] — 文章将阈值加密列为三大 MEV 保护技术之一，专门提及"Shutter Network 正在研究此项技术"
- [[来源_2024-12_Equilibrium_2025年20个预测]] — 预测15指外部加密内存池协议（以 Shutter 为例）采用率可能低于 10%
