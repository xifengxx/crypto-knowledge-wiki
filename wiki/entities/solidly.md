---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [defi, dex, ve33, fantom]
---

# Solidly

## 基本信息
- **类型**: DEX（去中心化交易所）
- **赛道**: DeFi / DEX / 流动性市场
- **链**: Fantom
- **成立时间**: 2022 年 2 月
- **创始人**: Andre Cronje（Yearn Finance 创始人，DeFi 领域最知名的开发者之一）
- **创建背景**: Andre Cronje 在 Fantom 基金会支持下开发，作为 Fantom 生态的核心 DEX
- **代币**: SOLID（原生代币），veSOLID（锁仓治理代币，最长锁仓 4 年）
- **模型**: ve(3,3) — 融合 Curve 的 ve（投票托管）机制与 Olympus DAO 的 (3,3) 博弈论锁定激励

## 核心业务/产品

Solidly 是 Fantom 链上首创的 ve(3,3) DEX，由 Andre Cronje 打造，开创了"费用与 LP 分离、100% 收入归代币持有者"的 DEX 经济模型。

### ve(3,3) 模型（首创）

ve(3,3) 是 Solidly 最核心的创新，它结合了两个经典 DeFi 机制：

- **ve（vote-escrowed，投票托管）**：源自 Curve Finance，用户将 SOLID 锁定为 veSOLID（最长 4 年），获得投票权、交易费分成和贿赂收入
- **(3,3)**：源自 Olympus DAO 的博弈论概念，锁定行为被视为合作博弈的正向结果，集体锁仓带来飞轮效应

### 核心机制

- **仪表投票（Gauge Voting）**：veSOLID 持有者每周投票决定 SOLID 排放奖励流向哪些流动性池
- **贿赂市场**：外部协议可以通过贿赂 veSOLID 持有者，引导排放至自己的代币池
- **100% 收入归锁仓者**：所有交易费用和贿赂收入全部分配给 veSOLID 锁仓者，而非流动性提供者（LP 仅获得 SOLID 排放奖励）
- **递减排放**：每周 SOLID 排放量递减，控制通胀

### ve(3,3) 飞轮
更高 TVL → 更低滑点 → 更高交易量 → 更高费用 → 更高投票 APR → 更高排放 → 更高 LP APR → 重复循环。这是后续 [[aerodrome]]、[[velodrome]]、[[thena]] 等所有 ve(3,3) DEX 的核心驱动逻辑。

## 关键数据

- **TVL 峰值约 $23 亿**（2022 年 2 月上线后不久），是当时 Fantom 链上最大的 DeFi 协议
- **SOLID 代币在 2022 年 2 月上线后一度涨至 $30+**，随后因创始人离场事件暴跌超过 90%
- **3 个月生命周期**：从 2 月上线到 3 月 Andre Cronje 宣布退出 DeFi，Solidly 的 TVL 从 $23 亿峰值跌至接近零
- **500+ 分叉**：ve(3,3) 代码被大量 Fork，形成 DeFi 中最大的分叉家族之一，包括 [[velodrome]]（Optimism）、[[aerodrome]]（Base）、[[thena]]（BNB Chain）、Ramses（Arbitrum）、Equalizer（Fantom/Sonic）等

## 竞争优势 / 护城河

- **首创 ve(3,3) 模型**：首次将 Curve 的 ve 投票托管与 Olympus (3,3) 博弈论结合，创造了一个自增强的流动性激励飞轮
- **100% 收入归持有者**：开创性设计将交易费与 LP 激励分离，所有协议收入归 veSOLID 锁仓者，这在当时是颠覆性的（对比 Uniswap 0%）
- **Andre Cronje 光环**：AC 作为 DeFi 领域最有影响力的开发者之一，其项目和代码获得了极高的初始关注度
- **代码影响力**：Solidly 的 ve(3,3) 代码成为 DeFi 历史上 Fork 最多的代码库之一，间接影响了 [[berachain]] 的 Proof-of-Liquidity 共识设计（将 ve(3,3) 从应用层搬到 L1 共识层）

## 风险 / 争议

- **创始人单点风险**：Andre Cronje 于 2022 年 3 月宣布退出 DeFi/加密行业，导致 SOLID 代币暴跌超 90%，TVL 从 $23 亿几乎归零。这是 DeFi 史上最典型的"创始人风险"案例
- **原创性争议**：ve(3,3) 模型本身是对 Curve ve 和 Olympus (3,3) 的组合创新，并非完全原创，但组合方式确实具有独创性
- **分叉稀释**：Solidly 自己的 Fantom 版本失去了生态地位，而分叉项目（Velodrome、Aerodrome）在其他链上获得了更大的成功
- **排放通胀压力**：ve(3,3) 模型依赖持续的代币排放来激励流动性，如果飞轮减速，高排放可能反噬代币价格
- **Fantom 生态衰落**：Solidly 的成功与 Fantom 链高度绑定，Fantom 生态在 2022-2023 年的整体衰退加剧了 Solidly 的 TVL 流失

## 相关事件时间线

- **2022 年 2 月**：Solidly 在 Fantom 主网上线，TVL 迅速攀升至 $23 亿峰值，SOLID 代币价格大涨
- **2022 年 3 月**：Andre Cronje 宣布离开 DeFi/加密行业，Solidly TVL 暴跌至接近零
- **2022 年**：Velodrome 在 Optimism 上线，成为首个成功的 ve(3,3) 分叉，由后来 Aerodrome 的同一团队运营
- **2023-2024 年**：Aerodrome（Base）、Thena（BNB Chain）、Ramses（Arbitrum）等分叉陆续上线，ve(3,3) 成为多链 DEX 的主流模型之一
- **2024 年**：[[berachain]] 主网上线，其 Proof-of-Liquidity（PoL）共识机制将 ve(3,3) 的贿赂博弈从应用层搬到了 L1 共识层

## 我的判断

Solidly 是 DeFi 历史上最具影响力的"失败"项目之一。它本身在 Fantom 上最终归于沉寂（创始人离场 + Fantom 生态衰退），但其首创的 ve(3,3) 模型被证明是极其成功的 DEX 设计范式，通过 Aerodrome（年收入 $1 亿+，Base DEX 份额 79%）、Velodrome、Thena 等分叉实现了广泛采用。Solidly 的故事深刻地揭示了一个悖论：创始人的个人光环既是项目成功的关键催化剂（上线即 $23 亿 TVL），也是项目崩溃的单点故障（离场即归零）。从投资角度，ve(3,3) 模型本身的价值已由分叉项目验证，但 Solidly 原生代币 SOLID 由于 FUD 和生态衰退，恢复可能性极低。

## 相关实体

- [[velodrome]] — Optimism 上首个成功的 ve(3,3) 分叉，由同一团队后来创建了 Aerodrome
- [[aerodrome]] — Base 上最成功的 ve(3,3) DEX，年收入 $1 亿+，Base DEX 份额 79%，是 ve(3,3) 模型的最佳实践案例
- [[thena]] — BNB Chain 上的 ve(3,3) DEX 超级应用（现货+永续+社交交易+Launchpad），币安 HODLer 空投项目
- [[berachain]] — 将 ve(3,3) 从应用层搬到 L1 共识层，PoL 机制借鉴了 Solidly 的贿赂治理
- [[curve-finance]] — ve 投票托管机制的原始来源
- [[olympus-dao]] — (3,3) 博弈论锁仓机制的原始来源
- [[andre-cronje]] — 创始人，AC 的创始人单点风险是 Solidly 崩溃的直接原因
- [[yearn-finance]] — Andre Cronje 最知名的前作
- [[flying-tulip]] — AC 最新全栈交易所项目，也是 Solidly 流动性对齐理念的延伸
- [[fantom]] — Solidly 部署的 L1 公链
- [[shadow-exchange]] — Sonic链上的x(3,3) DEX，是ve(3,3)的进一步进化，新增随时退出、PVP Rebase、x33 LST三大创新

## 来源

- [[来源_2024-08_Aerodrome_ve33收入机制_100%回馈持有者_MarsBit]] — Aerodrome 深度分析中提及 Solidly 作为 ve(3,3) 原始来源，以及 Velodrome V2 完全重写 Solidly 前后端的事实
- [[来源_2024-11_Thena_币安HODLer空投_ve33_DEX_MarsBit]] — Thena 介绍中确认其 ve(3,3) 模型源自 Solidly/Aerodrome 一脉
- [[来源_2024_Berachain_技术社区与未来_CryptoSnap]] — Berachain 的 PoL 共识借鉴了 Solidly ve33 投票贿赂机制，将其从应用层搬到 L1 共识层
- [[来源_2024-02_Berachain_灵魂十三问_PANews]] — 提及 Curve ve(3,3) 在应用层的贿赂治理机制作为 Berachain PoL 的同类对比
- [[来源_2025-07_Shadow_x33_Sonic_深潮TechFlow]] — Shadow x(3,3) 作为 ve(3,3) 的直接继承和进化
