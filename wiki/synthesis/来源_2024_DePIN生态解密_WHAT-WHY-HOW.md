---
type: source
source_type: research-report
url: https://www.techflowpost.com/article/detail_18590.html
author: 0xFourStones, cryptoyzr
date: 2024
ingested: 2026-06-29
updated: 2026-07-02
---

# 解密 DePIN 生态：AI 算力的变革力量 — 深潮TechFlow

## 阅读证据
- 总行数: 1176
- Q1 (前25%): DePIN 命名投票：2022 年 11 月 Messari Twitter 投票，DePIN 以 31.6% 的选票获胜，击败 PoPW、TIPIN、EdgeFi 成为统一名称
- Q3 (中后25%): io.net 已验证 101,545 个 GPU、31,154 个 CPU；$IO 代币 8 亿固定总量，5 亿初始供应，剩余 3 亿分 20 年作为奖励发放
- Q4 (最后25%): Aethir ($ATH) 发行总量 420 亿枚，35% 分配给 GPU 提供者；Heurist (HUE) 最大供应量 10 亿枚
- 图片: 22 张内嵌图片（架构图、数据截图、对比表等），均为本地文件引用，无外部 URL

## 核心要点

1. **DePIN = 去中心化共享经济 2.0**：本质是用区块链代币激励替代中心化平台（如滴滴/AWS）的撮合层。供给方掌握定价权，平台方退化为协议。Messari 2022 年 11 月统一命名（之前的候选名：MachineFi、PoPW、EdgeFi）

2. **本轮周期核心在 AI 算力**：围绕 AI 三要素（数据、算法、算力）展开，算力类项目最耀眼。io.net（"聚合 100 万 GPU"）、Aethir、Heurist、Render、Akash 等是代表

3. **WHAT-WHY-HOW 分析框架**：What（识别核心业务——共享算力/存储/数据）→ Why（为什么需要去中心化？传统 CePIN 的三大困境：政企利益捆绑、创新不足、成本高）→ How（设备 → 代币激励 → 飞轮增长）

4. **io.net 深度案例**：Solana 上去中心化 GPU 算力网络，$3000 万 A 轮融资（Hack VC/OKX/Multicoin 参投）、估值 $10 亿。核心卖点：比 AWS 便宜一半以上、无需 KYC（只需 Solana 钱包）、高度定制化（GPU 型号/带宽/加密方式/计费方式自选）

5. **两种设备模式**：(a) 定制化专用硬件（Helium 热点盒子）——部署慢但质量可控；(b) 普适性硬件（io.net/Render 利用闲置 GPU）——供给弹性大但标准化难

## 关键数据

- DePIN 命名投票：Messari 2022.11 Twitter 投票，DePIN 以 31.6% 胜出（vs PoPW/TIPIN/EdgeFi）
- io.net：A 轮 $3000 万、估值 $10 亿（2024.3）、Solana CEO Anatoly 参投
- io.net 定价：NVIDIA A100-SXM4-80GB 香港 $1.58/小时，比 AWS/GCP 便宜 50%+
- Render Network (RNDR)：OTOY 旗下去中心化 GPU 渲染平台，2024.3 币价达峰
- DePIN 赛道代表项目：Helium（IoT→5G 迁移至 Solana）、DIMO（车辆数据）、Hivemapper（众包地图）、Akash（去中心化云计算）

## 与已有知识的关系

- **大幅更新 [[depin]] 概念页**：补充 WHAT-WHY-HOW 框架、发展历史、经济模型（Burn-Mint Equilibrium）、7 步分析框架、io.net 案例
- **与 [[ai-crypto]] 深度交叉**：DePIN 算力方向是 AI+Crypto 的基础设施层。Bittensor（TAO）= 算法激励，io.net/Render = 算力激励——二者互补
- **与 [[bitcoin-ecosystem]] 对比**：DePIN 的"物理工作证明"（PoPW）和比特币的 PoW 有精神血缘——都是用物理资源换代币奖励，但 DePIN 的物理资源是有用的（GPU 算力 vs 纯粹的哈希计算）
- **与 [[rwa]] 区分**：RWA = 金融资产上链，DePIN = 物理基础设施上链。二者都是"现实世界→链上"的桥梁，但方向不同

## 值得记住的引用

> "DePIN 是一种新的「共享经济」——定价权掌握在供给端手中，消除了中间商。这使得司机能够对他们每天帮助构建的网络产生影响，这是一种多方共赢的模式。"

> "io.net 的愿景是将 100 万个 GPU 组合在一起，形成世界上最大的 GPU 集群。"

> "当访问 io.net 时，你只需要一个 Solana 钱包即可快速便捷地获取网络的算力许可。而在传统云服务商，你需要提前出示银行卡和联系方式。"

## 我的笔记

这篇是目前关于 DePIN 最系统的中文分析。WHAT-WHY-HOW 框架简洁有力，可以直接套用到任何新 DePIN 项目的分析中。

但有一个关键问题文章没有深入讨论：去中心化 GPU 网络的供给可靠性。io.net 上闲置 GPU 的稳定性和 AWS 的 99.99% SLA 之间有多大差距？对于生产级 AI 训练任务，"便宜一半"是否足以补偿"可能随时掉线"的风险？这个问题决定了 DePIN 算力市场的天花板——是取代 AWS（大市场）还是吃 AWS 的残羹（可中断实例，小市场）。

另外，文章提到 io.net 的投资方包括 Solana CEO 和 Multicoin，加上 Solana 的高吞吐低费用特性，Solana 正在成为 DePIN 的首选链。这和以太坊在 DeFi 的统治地位形成对比——不同赛道聚集在不同链上，多链生态的分工正在形成。
