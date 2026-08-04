---
type: source
source_type: article
url: https://www.panewslab.com/zh/articledetails/5uuyffma.html
author: Biteye 核心贡献者 Wilson Lee
date: 2024-04-15
ingested: 2026-07-02
---

# ZK 模块化新星 Lumoz：ZK-RaaS 平台的完整技术架构与市场定位

## 阅读证据
- 总行数: 289
- Q1 (前25%): ZK-Rollup 面临三大普及瓶颈——ZKP 计算成本高昂（zk-SNARK 证明生成时间是原始程序执行时间的数百到数千倍）、硬件门槛导致证明者中心化、zkEVM 需要为 EVM 每个操作码创建数学表示和证明逻辑极其复杂
- Q3 (中后25%): AltLayer 通过基于 EigenLayer 的重质押排序器为 RaaS 赋能，当前 MC 达 6.7 亿美金、FDV 超 53 亿美金，展现了 RaaS 赛道的高价值捕获能力
- Q4 (最后25%): Gala Event 激励测试网活动吸引接近 70 万社区用户、2.5 万 PoS 节点参与验证、145 个矿工实体贡献哈希算力、15 个 zkEVM 项目基于 Lumoz 链稳定运行；Dragon Slayer 第三期上线 24 小时内超 14.7 万用户参与
- 图片: 1 analyzed (logo1.jpg - 项目 logo，装饰性) / 0 decorative skipped / 0 external URLs unavailable

## 核心要点
- Lumoz 定位为去中心化 ZK-RaaS（ZK-Rollup as a Service）平台 + ZK-PoW 挖矿网络，核心目标是降低 ZK-Rollup 的开发和运维门槛，让开发者一分钟内启动 zkEVM 链
- Lumoz 的两大核心组件：ZK-PoW 云（激励矿工提供 ZKP 算力，解决硬件门槛和中心化问题）和 ZK-RaaS 发射台（一键部署多种 zkEVM 到多条基础链，无需了解 ZK 或链节点细节）
- ZK-PoW 采用创新的两步提交机制（先提交 proofhash 再提交 ZKP），实现 ZKP 并行计算和顺序提交，允许更多矿工参与而非仅奖励最快算力者；算法优化后平均交易确认时间从 5-6 分钟缩短至约 3 分钟，效率提升约 80%
- Lumoz 链采用 PoS + PoW 混合共识，区块提议者同时为 Rollup 层提议区块，提供标准化的去中心化排序器方案；验证者（PoS）充当排序器赚取 Gas 费，证明者（PoW）生成 ZK 证明
- 市场定位：RaaS 和模块化赛道同质化寡头化严重，Lumoz 以 ZK 算力 + RaaS 组合拳差异化切入，被类比为"ZK 赛道的 AltLayer"；AltLayer 通过再质押排序器赋能 RaaS，Lumoz 通过共享 ZK 算力赋能 RaaS
- Lumoz 前身为 Opside，团队此前参与过 6block 和 zk.Work 两个 ZK 挖矿项目，有深厚的 ZK 技术积累和 PoW 矿工资源；已助推 ZKFair 和 Merlin Chain 等新锐 L2 的诞生

## 关键数据
- ZKP 计算效率：使用 20 台机器组成的集群（每台 128 核 CPU + 1TB 内存），可在约 40 分钟内维持 27.8 TPS
- 效率提升：平均交易确认时间从约 5-6 分钟缩短到约 3 分钟，ZKP 生成效率提高约 80%
- 以太坊 PoW 矿机闲置规模：约 120 亿美元资本规模的矿机在 PoS 转型后失去应用场景
- Lumoz 融资：以 1.2 亿美元估值完成新一轮融资，OKX Ventures、HashKey Capital、KuCoin Ventures 等参投，累计融资金额 1000 万美元
- 可比估值：AltLayer MC 6.7 亿美金，FDV 超 53 亿美金
- 测试网数据：Gala Event 吸引近 70 万用户、2.5 万 PoS 节点、145 个矿工实体、15 个 zkEVM 运行
- Dragon Slayer 第三期激励：25M Lumoz 积分 + 超 8000 枚 USDC

## 与已有知识的关系
- 补充 [[layer2]] — 详细拆解 ZK-Rollup 的技术瓶颈（ZKP 计算成本/硬件门槛/zkEVM 复杂性）及 Lumoz 的 ZK-RaaS + ZK-PoW 解决方案，为 L2 概念页增加 ZK-Rollup 基础设施建设视角
- 关联 [[altlayer]] — AltLayer 与 Lumoz 同为"特性赋能的 RaaS 平台"（AltLayer 用再质押排序器，Lumoz 用共享 ZK 算力），AltLayer FDV 53 亿美金为 Lumoz 提供估值锚点
- 关联 [[merlin-chain]] — Merlin Chain 是 Lumoz 助推诞生的 BTC L2 案例，验证了 Lumoz ZK-RaaS 平台的技术可行性
- 关联 [[sequencer]] — Lumoz 链提供标准化的去中心化排序器机制（PoS 验证者即排序器），是对排序器概念页中"Rollup 自研方案"的技术补充
- ⚠️ 与 [[来源_2026-06_去中心化排序器_Rollup_Sequencer_Lumoz]] 的关系 — 两篇文章均涉及 Lumoz 但角度不同：本文是 Biteye 社区的 Lumoz 全景介绍（ZK-RaaS 平台 + 商业模式 + 项目进展），后者是 Lumoz 官方对去中心化排序器赛道的技术综述，两者互补且无冲突

## 值得记住的引用
> "生成一个 zk-SNARK 证明的时间，比执行原始程序（不包括证明过程）的时间要长得多。根据不同的实现和交易复杂性，生成证明的时间可能是原始计算时间的数百到数千倍。"

> "同质化和寡头化，是 RaaS 和模块化赛道较为明显的特征。新项目破局，需要有独特的切入点和前瞻性的布局。"

> "Lumoz 推出的算力模块和 RaaS 的组合拳能够一站式解决 ZK-Rollup 的一系列痛点，助推 ZK-Rollup 的快速普及。"

## 我的笔记
- Biteye 社区出品的研究带有明显的推广倾向——文章将 Lumoz 描述为"ZK-RaaS 赛道领头羊"时，市场上已有多个 ZK-RaaS 竞品（如 Caldera、AltLayer 的 ZK 支持），缺乏横向对比数据支撑这一结论。"一分钟启动 zkEVM"的说法也未经验证，需注意研究型软文与独立研报的区别
- Lumoz 的 ZK-PoW 核心叙事建立在"以太坊 PoW 矿机 120 亿美元闲置资产再利用"之上，这是一个有力的经济叙事，但实际执行面临矿工激励设计（代币价格波动 vs 电费成本）和 ZKP 计算需求是否可持续的问题。如果没有足够多的 ZK-Rollup 持续产生 ZKP 计算需求，矿工激励将不可持续
- 将 Lumoz 类比为 ZK 赛道的 AltLayer 是有效的市场沟通策略，但两者的竞争壁垒本质不同：AltLayer 依赖 EigenLayer 生态和再质押流动性网络效应，Lumoz 依赖 ZK 算法优化和矿工网络规模效应。前者的壁垒更偏向资本/生态层面，后者更偏向技术/硬件层面
