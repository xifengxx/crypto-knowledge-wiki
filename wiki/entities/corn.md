---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-30
tags: [l2, ethereum, bitcoin, btc-fi, defi]
---

# Corn

## 基本信息
- 类型：以太坊 L2
- 成立/公布时间：2024 年 8 月 20 日
- 核心创新：第一个用比特币映射代币（BTCN）作为网络原生 Gas 的以太坊 L2
- 代币：$CORN（基础代币）、$popCORN（治理代币，ve 模型）
- 融资：$6.7M 种子轮（2024.08.20），Polychain Capital 领投

## 核心业务/产品
- **BTCN**：ERC-20 格式的比特币映射代币，作为 Corn 网络原生 Gas 代币，与 BTC 1:1 锚定
- **Crop Circle 生态**：用户质押 BTCN 获得网络收益 + 流动性挖矿 + 与以太坊 DeFi（借贷/衍生品/收益聚合器）深度集成
- **双代币 ve 模型**：$CORN 锁定获得 $popCORN 治理权，权重随时间衰减，内置 Bribe Marketplace

## 关键数据
- 种子轮：$6.7M（2024.08.20）
- 投资方：Polychain Capital、Binance Labs、Framework Ventures、ABCDE、Symbolic Capital、HTX Ventures、Relayer Capital
- 个人投资者：Polygon 和 Berachain 开发者
- BTCN 与 BTC 锚定比例：1:1

## 技术架构（推测，白皮书未完全公开）
- BTCN 铸造：多方托管 + 桥接协议（非单一托管方）
- 智能合约管理铸造/销毁/转账
- 流动性池确保 BTCN 与其他资产间的流动性
- 验证机制推测涉及多签钱包 + 时间锁定

## 竞争优势 / 护城河
- 叙事差异化：以太坊 L2 赛道 60+ 条链中唯一以 BTC 映射资产为 Gas 的项目
- 双生态桥接：同时面向 BTC 持有者（收益需求）和 ETH DeFi 用户（流动性深度）
- 豪华投资阵容：Polychain + Binance Labs 双重背书

## 风险 / 争议
- 白皮书和技术细节完全未公开，桥接机制的安全模型不明
- BTCN 的多方托管模式面临与 wBTC 类似的中心化风险争议
- 以太坊 L2 赛道极度拥挤（2024 年 60+ 链），差异化叙事能否转化为 TVL 存疑
- 测试网和代币均未上线，项目处于极早期
- "BTC 当 Gas" 在 BEVM 等独立侧链已有先例，非完全首创

## 相关事件时间线
- 2024-08-20: 宣布完成 $6.7M 种子轮融资，公开项目信息
- 2024-08-21: X Space 披露主网代币空投细节
- 2024-08-20~23: Galxe 社媒传播活动

## 我的判断
叙事设计精巧——在极度拥挤的以太坊 L2 赛道找到了"BTC 为 Gas"的差异化切入点。但项目处于极早期，白皮书未公开，桥接机制的安全模型是核心不确定性。豪华融资阵容在 2024 年已成标配，不足以支撑投资决策。需要等待白皮书和测试网数据验证后再做判断。如果 BTCN 的桥接机制能解决 wBTC 的中心化托管问题，Corn 可能成为 BTCFi 的重要基础设施；但如果只是 wBTC + veTokenomics 的缝合，天花板有限。

## 相关实体
- [[curve]] — ve 模型的原型，Corn 的代币经济直接借鉴
- [[berachain]] — 投资者/思想交叉，均采用多代币治理模型
- [[babylon]] — BTC 收益赛道竞争对手，路径不同（质押安全 vs DeFi 收益）
- [[bevm]] — 同样以 BTC 为 Gas 的 L2 先行者，但 BEVM 是独立侧链而非以太坊 L2

## 来源
- [[来源_2024-08_Corn_BTCN_Gas_以太坊L2_深潮TechFlow]]
