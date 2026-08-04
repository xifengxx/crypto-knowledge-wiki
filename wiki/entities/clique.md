---
type: entity
entity_type: project
created: 2026-07-02
updated: 2026-07-02
tags: [identity, data, analytics, infrastructure, gamefi]
---

# Clique

## 基本信息
- **类型**: Web3 身份预言机 / 数据分析平台
- **赛道**: Identity Oracle, User Analytics, Sybil Resistance
- **成立时间**: 2022 年 1 月
- **创始人**: Kevin Yu
- **总部**: 旧金山湾区 + 新加坡
- **融资**: 种子轮 $300 万（2022.10，GGV Capital / Qiming Venture Partners / Alliance DAO / SevenX Ventures）+ A 轮 $800 万（2024.03，Polychain Capital / Robot Ventures 领投），总计 $1100 万
- **官网**: clique.tech

## 核心产品/技术
通过 ZKP（零知识证明）、TEE（可信执行环境）、MPC（多方计算）将链下用户行为数据桥接至链上，在保护隐私的前提下实现：

1. **Social Oracle**：分析 Twitter 等社交媒体的链下影响力、忠诚度、贡献
2. **Sybil 防御**：检测并防止女巫攻击，验证唯一用户身份
3. **用户细分**：为协议提供高价值用户识别和精准画像（购买力、游戏偏好、社交影响力等维度）
4. **链上证明（Attestation）**：Optimism AttestationStation 上约 90% 的证明（125 万条）来自 Clique
5. **游戏分析**：通过 TEE 安全分析 Steam 等平台的游戏行为数据

## 关键数据
- Optimism AttestationStation 中约 90% (112.5 万+条) 证明由 Clique 生成
- OP Army 项目为每个合作协议拉动约 12,000 新增用户，在 OP 生态 DAU 排名第二持续 5 周以上
- 服务生态：Optimism, Arbitrum, Linea, Ronin, Mantle 等主流 L1/L2
- 2023 年 7 月发表的 GameFi 玩家洞察报告是 Clique 数据在增长黑客场景的标杆应用

## 竞争优势 / 护城河
- **隐私保护技术栈**：ZKP + TEE + MPC 三重技术，区别于竞争对的手动数据授权模式
- **先发优势与网络效应**：Optimism 生态中已建立 attestation 基础设施地位，大量协议依赖其数据层
- **跨平台游戏数据**：可获取 Steam 等 Web2 游戏平台的脱敏行为数据，这是纯链上分析工具无法触及的维度

## 风险 / 争议
- **数据偏差风险**：Clique 商业模式依赖于证明「Web3 用户高价值」，其用户画像数据可能存在正向选择偏差——只捕获到了已经使用 Clique 集成协议的高参与度用户
- **隐私权衡**：尽管使用 ZKP/TEE/MPC，链下数据上链本质上是一种用户监控行为，可能引发隐私社区的反对
- **竞争者**：Cookie3、Masa Finance、Web3 Pro 等在用户画像和身份验证赛道的直接竞争

## 相关事件时间线
- 2022-01: 公司成立
- 2022-10: 完成 $300 万种子轮（GGV Capital 等）
- 2023-07: 与 Cube Labs 合作发布「Web3 增长黑客系列之如何深度洞察 GameFi 玩家？」— 基于 Clique 数据的 GameFi 玩家画像
- 2024-03: 完成 $800 万 A 轮（Polychain Capital / Robot Ventures 领投）

## 相关实体
- [[ronin]] — Sky Mavis 游戏生态的身份营销合作方
- [[optimism]] — AttestationStation 证明基础设施深度绑定

## 来源
- [[来源_2023-07_GameFi玩家洞察_增长黑客_CubeLabs]]
