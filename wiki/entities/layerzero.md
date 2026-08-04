---
type: entity
entity_type: protocol
created: 2026-06-28
updated: 2026-06-30
tags: [cross-chain, interoperability, infrastructure]
---

# LayerZero

## 基本信息
- 定位：全链互操作性协议
- 功能：跨链消息传递，连接 50+ 区块链（2023.4 已覆盖 40+ 公链，包括非 EVM 链 Aptos、Solana）
- 类型：通用跨链消息协议（非资产桥）
- 团队：Bryan Pellegrino、Ryan Zarick（CTO）、Caleb Banister、Ari Litan、Irene Wu 等
- 融资时间线：
  - 种子轮 $2M（2021年4月）
  - A轮 $6M-$6.3M（2021年9月，Multicoin + Binance Labs 领投，Sino Global Capital、Defiance 等参投）
  - A+轮 $135M（2022年3月，FTX Ventures + 红杉 + a16z 共同领投，Coinbase Ventures、PayPal Ventures、Tiger Global、Uniswap Labs 等参投）
- 估值变化：A+轮后估值 $1B（2022.3）→ $3B（2022.10，写作时"超 Aptos"）
- ZRO 代币最早痕迹：2022年10月官方代码库中已出现 ZRO 令牌引用

## 核心业务
提供跨链消息传递基础设施，允许不同区块链之间互相发送消息和资产。不同于传统跨链桥，LayerZero 是一个通用的消息层，开发者可以在此基础上构建各种跨链应用。核心技术架构为 Oracle（当前为 Chainlink）+ Relayer 双验证机制，任何主体均可无许可地承担两个角色。

## 关键特征
- 超轻节点（Ultra Light Node）架构：通过部署"LayerZero Endpoints"轻量级智能合约实现沟通、验证和网络功能
- 预言机 + 中继器双验证机制：Oracle 发布源链区块头到目标链，Relayer 发布交易数据和验证交易证明，两者独立
- OFT（Omnichain Fungible Token）标准：代币在所有支持链上原生可替代，避免包装资产的流动性碎片化
- ONFT（Omnichain Non-Fungible Token）标准：NFT 跨链移动，不再孤立于原生生态

## 生态系统关键应用场景
- **Stargate** — LayerZero 上旗舰跨链桥，首个解决"跨链不可能三角"的协议：统一流动性池 + 即时交易最终性。超 100 万次转账、超 45 亿美元交易量（2023.4）。支持原生资产跨链 + 源链 Gas 代币支付多链 Gas 费。STG 已发币
- **OFT 案例**：Trader Joe（JOE 代币在 Avalanche/Arbitrum/BNB 多链原生可替代）、Pendle（全链 veTokenomics，跨链同步 vePENDLE 余额）
- **ONFT 案例**：Pudgy Penguins 子系列 Lil Pudgys 在 Polygon/BNB Smart Chain/Arbitrum 间跨链（2023.1）
- **衍生品**：Rage Trade 利用其他链的 LP tokens 在 Arbitrum 提供循环流动性
- **借贷**：Radiant Capital 实现 A 链抵押、B 链借出的全链借贷（RDNT 已发币）
- **DEX**：Sushiswap 部署在 Stargate 上，支持原生资产跨链交换（SushiXSwap，SUSHI 已发币）
- **全链 DEX**：Hashflow（零滑点 MEV 保护跨链 DEX，HFT 已发币）、InterSwap（首个完全可组合原生资产跨链 AMM）
- **全链 NFT 基础设施**：Holograph（全链 NFT 铸造桥）、Omni X（全链 NFT 协议和市场）、gh0stlygh0sts（首个 Omnichain NFT）、ParakeetDAO（跨链 NFT 聚合器）、TrantorNetwork（NFT 跨链通信）、OpenLuck（NFT 全链交易）
- **稳定币**：Angle Protocol（agEUR 欧元稳定币，ANGLE 已发币）
- **游戏**：0DayProject（LayerZero 游戏）、Catddle（Web3 宠物游戏）
- **其他**：OmniBTC（Sui/Aptos 上 DEX+Lend+Bridge）、Mugen Finance（多链收益聚合器）、CashmereLabs（全链 MEV 抗性 DEX 聚合器）、omnisea（多链 NFT 发布平台）、LzDomains（LayerZero 域名服务）、Cedro Finance（跨链借贷）
- **跨链 Demo**：LayerZero 官方 USDC 全链桥测试 Demo（usdcdemo.layerzero.network）

## 相关实体
- [[stargate]] — LayerZero 上旗舰跨链桥协议，统一流动性 + 即时最终性
- [[ondo-finance]] — USDY 通过 LayerZero 实现跨链
- [[portal]] — Portal Web3 游戏生态系统基于 LayerZero 构建，Portal 节点结合 Web3 引擎+LayerZero Oracle/Relayer 提供跨链交易第二层验证
- [[pendle]] — 通过 LayerZero 实现全链 veTokenomics
- [[trader-joe]] — JOE 作为 Omnichain Token 部署
- Wormhole — 竞争对手，被 BUIDL 采用

## 关键数据
- 融资 $2.61 亿（2023.1），资金充足
- 50+ 项目集成（2023.1），覆盖 DeFi/NFT/稳定币
- 已发送超 300 万条消息（2023.4），覆盖 40+ 条公链（含 Aptos、Solana 等非 EVM 链）
- OFT 标准：代币在所有支持链上原生可替代
- 团队：Bryan Pellegrino、Ryan Zarick、Caleb Banister、Ari Litan、Irene Wu
- SushiSwap 前核心 0xMaki 全职加入

## 风险与争议
- **Relayer+Oracle 中心化风险**（Shoal Research 2025）：LayerZero 依赖"Relayer & Oracle"系统由可信实体传递跨链消息，虽确保效率，但引入潜在中心化风险。竞争对手方案如 EigenLayer 共享安全和 Babylon 比特币质押验证在去中心化程度上更进一步。此风险在链抽象（隐藏多链复杂性）推广中尤为关键——若跨链执行基础设施被少数实体控制，链抽象可能成为"授权门控生态系统"而非真正去中心化协议。

## 来源
- [[来源_2023-04_头等仓_LayerZero_全链互操作性]] — 架构/融资/竞争格局深度分析
- [[来源_2023-04_LayerZero_全链野心_应用场景_BixinVentures]] — 应用场景全景分析：OFT/ONFT/Pendle/Rage Trade/Radiant Capital
- [[来源_2024_Delphi_Zetachain_跨链桥竞争格局]]
- [[来源_2024-02_Portal_Binance_Launchpool_Web3游戏_BlockBeats]] — Portal 基于 LayerZero 构建游戏生态系统案例
- [[来源_2025-03_链抽象_间接影响_Shoal]] — 提出 LayerZero 的 Relayer+Oracle 系统存在中心化风险，EigenLayer/Babylon 的共享安全模型是更去中心化的替代方案
- [[来源_2025-02_空投市场_三大矛盾_深潮TechFlow]] — 提供LayerZero空投具体数据：80.3万地址被判定为女巫，快照完成后链上活跃地址断崖式下降
