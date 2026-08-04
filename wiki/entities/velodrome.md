---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [defi, dex, ve33, optimism]
---

# Velodrome

## 基本信息
- **类型**: DEX（去中心化交易所）
- **赛道**: DeFi / DEX / 流动性市场
- **链**: Optimism（OP Mainnet）
- **成立时间**: 2022 年（Solidly 分叉后不久上线）
- **团队**: 与后来 Aerodrome（Base）同一团队运营
- **代币**: $VELO，veVELO（锁仓后的治理代币，最长锁仓 4 年）
- **模型**: ve(3,3) — 首个成功的 Solidly 分叉，将 Curve 的 ve 投票托管与 Olympus (3,3) 博弈论结合
- **前身**: [[solidly]] — Andre Cronje 在 Fantom 上首创的 ve(3,3) DEX
- **继承者**: [[aerodrome]] — 同一团队在 Base 上部署的 ve(3,3) DEX，全部 AERO 供应空投给 veVELO 持有者

## 核心业务/产品

Velodrome 是 Optimism 链上首个且最成功的 ve(3,3) DEX，采用"费用与 LP 分离、100% 收入归代币持有者"的经济模型。它衍生自 Andre Cronje 的 [[solidly]]，是 ve(3,3) 分叉家族中最早获得广泛采用的项目。

### ve(3,3) 经济模型
- 用户将 $VELO 锁定为 veVELO（最长 4 年），获得投票权、交易费分成和贿赂收入
- veVELO 持有者每周投票决定 $VELO 排放奖励流向哪些流动性池
- 外部协议通过贿赂 veVELO 持有者，引导排放至自己的代币池
- **100% 收入归锁仓者**：所有交易费和贿赂收入全部分配给 veVELO 锁定者

### Velodrome V2
- V2 版本完全重写了 Solidly 的前端和后端，不再依赖原始代码库
- 实现了更高的资本效率，Slipstream 集中流动性池的资本效率约为 2 倍

### 团队后续：Aerodrome 迁移
- Velodrome 团队后来在 Base 链上部署了 [[aerodrome]]，本质上是对 Velodrome 的继承
- Aerodrome 在发布时将全部 $AERO 供应空投给 veVELO 持有者，完成了从 Optimism 到 Base 的流动性迁移
- Aerodrome 继承了 Velodrome 的所有核心机制，并深度绑定了 Coinbase 生态

## 关键数据

- **TVL $77.14M**（2023 年 3 月数据），FDV 仅 **$9.46M**，**FDV/TVL 比率 0.21**，在当时被认为是估值偏低的 DEX
- **早期 VELO 锁仓者案例**：钱包 0xa60a...3259 以约 $81k 初始成本购买 VELO，累计获得约 $877k 总奖励（费用+贿赂，10.8 倍 ROI），锁仓总价值达 $305.7 万，总投资回报率 48.3 倍
- **Aerodrome 全部 AERO 供应空投给 veVELO 持有者**，完成 ve(3,3) 流动性从 Optimism 向 Base 的历史性迁移
- 是 Optimism 链上最早的自然语言（Grants Council 通过 RetroPGF 资助）

## 竞争优势 / 护城河

- **首个成功的 ve(3,3) 分叉**：在 Solidly 因创始人 Andre Cronje 离场而崩溃后，Velodrome 是第一个成功继承并改进其模型的 DEX，证明了 ve(3,3) 模式的跨链可移植性
- **Optimism 生态先行者优势**：作为 Optimism 上的原生 DEX，在早期获得了 OP 生态的流动性激励和用户基础
- **团队持续迭代能力**：Velodrome V2 完全重写了 Solidly 的前后端代码，展示了团队不仅会分叉还会深度优化的技术能力
- **团队后来通过 Aerodrome 在 Base 上获得更大成功**：Velodrome 团队在 Base 上部署 Aerodrome 后，年收入超过 $1 亿，Base DEX 份额达 79%，验证了同一团队运营 ve(3,3) DEX 的范式

## 风险 / 争议

- **流动性迁移至 Base**：Aerodrome 上线后，大量流动性从 Velodrome 迁移至 Base，导致 Velodrome 在 Optimism 上的 TVL 和交易量显著下降
- **分叉争议**：基于 Solidly 代码，原创性存疑（虽然后续 V2 已完全重写）
- **排放通胀压力**：ve(3,3) 模型依赖持续代币排放激励流动性，如果飞轮减速，高排放可能反噬代币价格
- **Optimism 生态增长不确定性**：在 OP 生态整体增长乏力的背景下，Velodrome 面临 TVL 增长停滞的风险

## 相关事件时间线

- **2022 年初**：Solidly 在 Fantom 上线后迅速达到 $23 亿 TVL 峰值，随后 Andre Cronje 宣布退出 DeFi，Solidly TVL 暴跌
- **2022 年**：Velodrome 在 Optimism 上线，成为首个成功的 ve(3,3) 分叉
- **2023 年 3 月**：根据火必研究院报告，Velodrome TVL 约 $77M，FDV $9.46M，FDV/TVL 0.21
- **2023 年**：Base 主网上线，Aerodrome 由同一团队在 Base 上部署
- **2023-2024 年**：全部 AERO 供应空投给 veVELO 持有者，流动性从 Optimism 迁移至 Base
- **2024 年**：Velodrome V2 上线，完全重写前后端

## 我的判断

Velodrome 在 ve(3,3) 发展史上占据承上启下的关键位置：它是 Solidly 之后第一个证明 ve(3,3) 模型可以跨链复制的项目，也是同一团队后来在 Base 上打造 Aerodrome 的训练场。从投资角度，Velodrome 代币 $VELO 的吸引力已被 Aerodrome 的 $AERO 大幅稀释——团队的战略重心显然已从 Optimism 转移至 Base（Aerodrome 年收入 $1 亿+ vs 原 Velodrome 的较小规模）。$VELO 的价值更多体现在历史意义和对 OP 生态的暴露上，而非增长潜力。

## 相关实体
- [[solidly]] — ve(3,3) 模型原始来源（Andre Cronje 首创），Velodrome 的前身
- [[aerodrome]] — 同一团队在 Base 上的 ve(3,3) DEX，全部 AERO 空投给 veVELO 持有者，年收入 $1 亿+
- [[thena]] — BNB Chain 上的 ve(3,3) DEX 超级应用，同属 Solidly 分叉体系
- [[optimism]] — 所在 L2，OP 生态的核心 DEX 基础设施
- [[curve]] — ve 投票托管机制的原始来源

## 来源
- [[来源_2024-08_Aerodrome_ve33收入机制_100%回馈持有者_MarsBit]] — 涉及 VELO 早期锁仓者案例（$81k → $877k 奖励/48.3x ROI），Velodrome V2 完全重写 Solidly 前后端
- [[来源_2023-03_Arbitrum详解_Optimistic_Rollup_火币研究院]] — 2023 年 3 月数据：Velodrome TVL $77.14M，FDV $9.46M，FDV/TVL 0.21
- [[来源_2024-11_Thena_币安HODLer空投_ve33_DEX_MarsBit]] — 提及 Velodrome 作为 ve(3,3) DEX 竞品对比的参照系
- [[来源_2024-12_AI_稳定币_三阶段采用_Peter-Schroeder]] — 提及 Velodrome/Aerodrome ve-token 模型作为 AI 动态优化的 DeFi 基础设施
- [[来源_2025-06_叙事评分_加密货币_NarrativeScore]] — Ignas 将 Velodrome 的 ve3.3 模型（Bribing builds liquidity）列为流动性启动机制的典型案例
