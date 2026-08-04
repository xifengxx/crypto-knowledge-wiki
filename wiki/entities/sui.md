---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-30
tags: [l1, sui, move, high-performance, gaming]
---

# Sui

## 基本信息
- 类型：Layer 1 区块链
- 共识机制：Narwhal+Tusk (Mysten Labs 自研)
- 编程语言：Move (Diem 遗产)
- 定位：高性能 L1，面向游戏/DeFi/消费者应用
- 团队：Mysten Labs (Facebook Diem 团队背景)

## 核心业务/产品
- **高性能 L1**：低 Gas + 高扩展性 + Move 语言安全优势
- **DeFi 生态**：NAVI ($714M TVL/80万+用户/DEX聚合器+流动性质押+借贷)/ Suilend ($450M TVL/借贷+swap+桥)/ Cetus(swap+流动性池+DeepBook集成)/ Aftermath Finance(元聚合器)/ Scallop(全功能借贷)
- **DeepBook**：Sui 首个原生流动性层/社区治理公共品/DeFi 构建者基石
- **SuiNS**：@用户名/人类可读地址/子名支持
- **Walrus**：Mysten Labs 去中心化存储 (Devnet+Testnet)
- **Telegram 原生应用**：Wave Wallet(游戏+钱包)/ BIRDS (DeFi 游戏化)/ Fomo (PoW meme)
- **SuiLink**：灵魂绑定 NFT 跨链身份 (Sui↔ETH/SOL)

## 关键数据
- NAVI: $714M TVL / 80万+ 用户
- Suilend: $450M TVL (8个月)
- Aylab: 1.2亿广告 / 9500万交易
- 2024: 首个完整运营年度

## 竞争优势 / 护城河
- Move 语言比 Solidity 更安全/比 Rust 更易学
- 低 Gas+高扩展性=适合高频交互 (游戏/Telegram 应用)
- Mysten Labs 技术深度 (Narwhal+Tusk 共识)
- 差异化定位：游戏+消费应用 (vs Solana DeFi/Meme 定位)

## 风险 / 争议
- TVL 中有多少是真实用户 vs 空投农民尚未验证
- L1 竞争激烈 (Solana/Base/Aptos/Monad)
- 尚未产生不可替代的 Killer App (类似 Base 的 Virtuals)
- Move 生态开发者数量仍远少于 Solidity

## 相关实体
- [[solana]] — 主要 L1 竞争对手 (高吞吐 L1 定位重叠)
- [[aptos]] — Move 语言同源 L1 (Diem 遗产)
- [[base]] — L2 竞争对手 (消费者应用重叠)
- [[monad]] — 高性能 L1 竞争对手 (Parallel EVM)

## 社媒运营策略（2023年初观察）
- **每周 Discord AMA**: 定期更新技术进展 + 布道 Move 语言
- **全球线下见面会**: 美国、葡萄牙、韩国、越南、中国台湾等地举办 Happy Hour
- **内容偏向**: 技术文档和 Sui Move 布道为主，生态项目宣发相对较少
- **GameFi 侧重**: 生态主管 Koh Kim 在游戏方面经验资深，Sui 更强调 GameFi 赛道支持
- **与 Aptos 的关键差异**: Sui 社媒热度一直明显不足于 Aptos——Sui 侧重技术布道（受众=开发者，群体小），Aptos 侧重生态项目进展（受众=散户投资者，群体大）。"开发者在整个 Crypto 用户中所占的比例比散户投资者低许多"解释了 Sui 社媒不温不火的原因

## 早期生态状态（2023年5月底，主网上线一月）
- **TVL**: 仅$19.02m（峰值$36m），Cetus占据65%以上TVL
- **日活跃地址**: 约2.2万（呈下降趋势），总活跃地址57万
- **活动模式**: 完全由IDO事件驱动（Cetus/Turbos/Suia），活动峰值后迅速回落
- **流动性困境**: $SUI流通市值超$5亿但极少用于链上活动，IDO期间耗尽CEX借贷池
- **基础设施缺口**: 无LST方案、无原生稳定币、仅Wormhole一条跨链桥、手机钱包体验极差
- **Validator门槛**: 104个节点，新节点需30M $SUI质押，质押APY仅6%
- 来源: [[来源_2023-06_Sui生态现状_数据分析_链上基本面]]

## 2025年2月稳定币与流动性数据（补充本文）
- 稳定币总市值：$5.5515亿（2025年2月），一年内从$540万增长约100倍
- 总TVL：$12.6亿，Suilend $3.875亿领先
- 日活跃地址：170万，超过以太坊（44万），接近Aptos（110万）
- 主要稳定币：USDC（47.47%）、AUSD（算法+抵押）、USDY（高收益）、FDUSD（$1.2亿）、BUCK（$3900万）
- 关键协议利率：Suilend AUSD APY ~11.19%，Cetus USDY APY ~46.92%
- 持有者集中度：USDY两个钱包占94%，AUSD单一钱包占47.4%
- Sui交易量排名第7，超过Hyperliquid和Avalanche
- 来源: [[来源_2025-02_Sui流动性激增_稳定币_深潮TechFlow]]

## Sui 的 MEV 机制（2025年2月官方阐述）
Sui Network 在 PANews 发表官方文章详细阐述了 Sui 上的 MEV 运作机制（[[来源_2025-02_Sui_MEV_PANews]]）：

### 核心设计原则
- 用户交易保护 > 提取价值数量；优先较小滑点而非更大提取价值
- 网络透明度 > 与验证节点/中继的离线交易
- 通过优先 gas 拍卖（PGA）促进竞争，抑制垃圾邮件
- 鼓励将 MEV 奖励分配给验证节点、质押者、应用程序和用户

### 关键机制
- **SIP-19 软捆绑**: 通过链下拍卖（如 Shio）提交软捆绑交易，原始交易和后续交易可在同一共识提交中打包
- **SIP-45 共识放大**: gas 价格超过 k x RGP（k=5）的交易通过 n 个验证节点提交来放大共识提交，消除抖动；100 x RGP 可解锁下一回合领导者提交
- **PGA**: 修改同一共享对象的交易按 gas 价格排序，每秒 15 次共识提交下，70 毫秒优势决定成败；拥塞对象窗口可达常规提交的 10 倍
- **外部成员驱动前置保护**: 外部全节点驱动交易提交，验证节点若试图抢先会在证书组装中落后；前置攻击可在链上检测并损害 RPC 操作员声誉
- **本地费用市场**: 拥塞对象按 gas 价格排序，低价交易被推迟/取消

### 即将推出的机制
- **共识区块流式传输**: 设计阶段，预计 1-2 个月内发布 SIP，目标 160 毫秒延迟（2 个共识回合）
- **Mysticeti 快速路径**: 交易提交给单个验证节点收集和执行，理论上引入验证节点前置交易风险（目前无实证案例）

## 来源
- [[来源_2022-07_10个新Layer1_熊市布局_Odaily]] — 早期全覆盖：3600万A轮+$2B估值B轮推进中、Sui Move版本改良、12万TPS早期测试数据、SUI 100亿代币经济、激励测试网8月启动
- [[来源_2023-06_Sui生态现状_数据分析_链上基本面]]
- [[来源_2024_Sui社区热门项目汇总_DeFi_NFT_GameFi]]
- [[来源_2024-10_Finding_the_Next_Solana_L1竞争分析]]
- [[来源_2023-01_公链运营三大维度_差异化_PANews]]
- [[来源_2025-02_Sui流动性激增_稳定币_深潮TechFlow]]
- [[来源_2022-07_Libra新势力_Aptos_Sui_Linera]] — 2022年中Sui早期阶段全景：前Novi团队背景、a16z领投3600万A轮+FTX领投3亿B轮、SUI 100亿供应上限、Narwhal+Tusk共识、面向元宇宙NFT平台的规划、早期生态项目（Sui Wallet/Panzerdogs/SoWork）
- [[来源_2025-02_Sui_MEV_PANews]] — Sui Network 官方详解 Sui MEV 四机制：SIP-19/SIP-45/PGA/外部成员驱动保护 + Mysticeti 快速路径 MEV 风险
- [[来源_2025-07_公链数据_以太坊_Base_Hyperliquid_PANews]] — 2025年Q2 8链横向对比：SUI价格2.15→4.24美元（+97%）、TVL 12亿→22亿美元（+84%）、稳定币突破10亿美元、日活经历"过山车"
