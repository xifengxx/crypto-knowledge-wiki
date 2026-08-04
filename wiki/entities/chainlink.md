---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-30
tags: [oracle, cross-chain, infrastructure]
---

# Chainlink

## 基本信息
- **类型**: 去中心化预言机网络 + 跨链互操作性协议
- **赛道**: 基础设施（预言机 / 跨链消息传递）
- **代币**: LINK
- **核心产品**: Chainlink Price Feeds（价格预言机，含 Market and Data Feeds 推送式 + Data Streams 拉取式）、CCIP（跨链互操作性协议）、VRF（可验证随机函数）、Automation（自动化合约执行）、L2 Sequencer Uptime Feeds（L2 排序器运行状态监控）
- **定位**: Web3 基础设施标准，连接链上智能合约与链下数据/其它区块链/传统系统
- **团队**: Sergey Nazarov (联合创始人), Steve Ellis (联合创始人兼CTO), Giovana Totini (CPO), Johann Eid (CBO)
- **ICO**: 2017 年 9 月通过 ICO 融资 $32M，28 家投资机构参与（含 Framework Ventures、Outlier Ventures 等）

## 核心业务/产品

### Chainlink 在全链游戏中的基础设施角色
Chainlink 将自己定位为全链游戏（FOCG）不可或缺的中间件，逐一映射产品到 FOCG 的技术瓶颈：
- **Chainlink VRF（可验证随机函数）**：解决链上随机数被验证者/矿工操纵的问题——几乎所有全链游戏都需要防篡改的随机数
- **Chainlink Automation**：解决智能合约无法自动触发执行的问题——例如玩家收获资产后需要自动调用收获操作
- **Chainlink Price Feeds / 预言机网络**：为链上游戏提供安全的链下数据访问

### Chainlink Price Feeds（预言机）
去中心化价格数据喂价服务，是 DeFi 协议最广泛使用的预言机。保障数百亿美元资产安全，实现超过 8 万亿美元链上交易价值。

**两种数据交付模式：**
- **Market and Data Feeds（推送模式）**：按预设间隔将价格数据推送到链上，覆盖加密货币、大宗商品、股票、利率/波动率、L2 排序器运行状态等
- **Data Streams（拉取模式）**：2023 年 10 月推出，按需获取高频价格数据，为高频交易应用降低冗余交易成本

### Chainlink CCIP（跨链互操作性协议）
跨链消息传递和通证转移协议，定位为"最安全可靠的互操作性标准"。
- **Arbitrary Messaging**：任意消息发送，开发者可灵活构建跨链解决方案
- **Simplified Token Transfer**：简化通证转移，使用已审计的通证池合约，无需定制化代码
- **Risk Management Network**：独立风控网络，监控所有跨链交易有效性
- **速率限制**：可灵活设置跨链通证金额上限

### 关键差异化
CCIP 与 Chainlink 现有 Price Feeds 共享同一套去中心化预言机网络基础设施，几乎不添加新的信任假设。已有 Price Feeds 集成的 dApp 可无缝使用 CCIP。

### 传统支付网络集成（2025.06 Mastercard 合作）

2025年6月24日，Chainlink 与 [[mastercard]] 宣布战略合作，允许全球超过30亿万事达卡持卡人通过信用卡直接在区块链上购买加密货币。在该服务体系中：

- Chainlink 的 **去中心化预言机网络** 和 **CCIP（跨链互操作性协议）** 确保链上交易的安全性和数据可靠性
- Chainlink 生态 DEX **XSwap** 利用 Uniswap 等协议获取流动性，完成加密货币的链上交换
- 这是 Chainlink 从 DeFi 基础设施向 **传统支付网络与链上金融桥梁** 角色扩展的重要里程碑

该合作在技术层面使 Chainlink 走出了加密原生圈子，直接服务于传统金融巨头的加密支付基础设施需求。

## 关键数据
- 预言机网络保障资产规模：数百亿美元
- 链上交易价值：超过 8 万亿美元
- CCIP 首批合作：Synthetix（跨链合成资产）、Aave（跨链治理）

## 竞争优势 / 护城河
- **已证实的网络安全性**：预言机网络经过多年实战检验，这是其他纯跨链协议无法复制的信任基础
- **基础设施网络效应**：大量 DeFi 协议已集成 Price Feeds → 切换到 CCIP 零额外信任假设
- **风控机制独特**：独立的 Risk Management Network 提供额外安全层

## 风险 / 争议
- CCIP 推出时间晚于 LayerZero 和 Wormhole，面临先发者网络效应
- 跨链赛道竞争激烈，CCIP 在同质化功能上无明显技术优势
- 文章本身承认 CCIP 并未与其他跨链方案做任何对比——市场定位是否成立待验证

## 相关事件时间线
- 2023-07: CCIP 早期访问版上线（Avalanche、Ethereum、Optimism、Polygon）
- 2023 年中: Synthetix 和 Aave 宣布为 CCIP 首批合作伙伴
- 持续: Price Feeds 作为 DeFi 基础设施持续运行多年

## 相关实体
- [[layerzero]] — 跨链互操作性赛道的直接竞争者
- [[wormhole]] — 跨链消息传递协议，被 BlackRock BUIDL 采用
- [[synthetix]] — CCIP 首批合作伙伴（跨链合成资产）
- [[aave]] — CCIP 首批合作伙伴（跨链治理）
- [[circle]] — USDC CCTP 为跨链稳定币转移竞争方案

## 来源
- [[来源_2023-07_跨链DeFi_Chainlink_CCIP]]
- [[来源_2023-06_全链游戏_Chainlink科普]] — Chainlink 官方科普全链游戏：将 VRF/Automation/预言机定位为 FOCG 基础设施，强调全链游戏是 zk/同态加密等前沿技术的低风险试验场
- [[来源_2022-01_智能合约开发工具_十大工具_Medium]] — 2022年初Chainlink开发者倡导者撰写的行业全景：预言机安全定位为DeFi基础设施核心，不少于50%顶级DeFi项目将预言机作为关键组件，半數DeFi黑客攻击可通过安全预言机预防
- [[来源_2025-02_预言机_机构信任_Chainlink]] — insights4.vc 三大预言机横向对比：Chainlink ICO 明细（$32M/28 家机构）、数据流双模式（推送+拉取）、质押模型早期局限、CCIP 作为 RWA 代币化关键基础设施的战略定位
- [[来源_2025-03_zkTLS原理_潜在应用场景_PANews]] — zkTLS技术对Chainlink等预言机巨头的冲击：Chainlink正在积极跟进zkTLS研究，商业模式可能从按时间收费转向按用量收费或Compute as a Service
- [[来源_2025-06_万事达卡_链上买币_Chainlink_PANews]] — Mastercard与Chainlink战略合作：链上加密货币直接购买通道，传统金融巨头采用CCIP和预言机的重要里程碑
