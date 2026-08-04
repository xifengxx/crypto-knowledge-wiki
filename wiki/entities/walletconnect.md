---
type: entity
entity_type: protocol
created: 2026-06-29
updated: 2026-07-02
tags: [wallet, infrastructure, communication, did]
---

# WalletConnect

## 基本信息
- 类型：钱包-DApp 通信协议
- 赛道：Web3 基础设施 / 钱包连接层
- 定位：连接任意钱包与任意 DApp 之间的简约、无偏见、端到端加密通信协议，类比为"钱包界的 Signal"
- 创始时间：2018 年，由 Pedro Gomes 构建原型
- 团队规模：12 人（截至 2022 年 3 月）
- 发布方：[[1kx]] 于 2022 年 3 月发布投资论文

## 核心业务/产品
- **钱包-DApp 连接**：通过二维码扫描或深度链接（deep-linking）建立会话，生成密钥配对，实现端到端加密通信
- **平台无关**：不仅支持桌面到移动端连接，也支持移动端到移动端、桌面到桌面的连接
- **WalletConnect V2.0**（2022 年发布）：
  - **多链支持**：新增 Cosmos、Polkadot、Celo、Solana、Near；DApp 可同时在多个链上请求权限，无需手动切换链
  - **推送通知**：DApp 可在会话建立后通过 WalletConnect 推送通知给用户（如清算预警、NFT 出价、DAO 提案投票）
  - **去中心化消息中继**：基于 [[Waku]] 去中心化消息中继网络，支持多个中继服务器并通过 Waku 同步消息
  - **钱包间加密通信**：用户对自己的消息接收有完全控制权，可自定义垃圾过滤
- **WalletConnect Cloud**：白手套低延迟服务，使用 WalletConnect 自有托管代理服务器运行在 Waku 网络上；是未来完全去中心化 WalletConnect Network 的前身
- **中继网络（Relay Network）**："云邮箱"机制——消息存储在中继网络中，当钱包重新上线时推送

## 关键数据
- 每周 npm 安装量一年内增长 900%+：从 13,000 增长到 140,000+（截至 2022 年 3 月）
- 生态规模：从 2018 年起步时的 2 个钱包 + 2 个 DApp 增长到超过 200 个 DApp 和超过 100 个钱包
- 5 大 Android 钱包（Trust、MetaMask、Crypto.com、imToken、bitpay）均集成 WalletConnect，累计超过 2000 万安装量
- 服务数百万加密用户（另有 2022 年 12 月估算数据）

## 竞争优势 / 护城河
- **网络效应飞轮**：生态越大，新钱包和 DApp 越有动力集成——DApp 可触及所有钱包用户，钱包无需为每个新 DApp 做额外兼容
- **可信中立**：简约、无偏见的协议设计，不绑定特定钱包、链或公司利益
- **社区驱动**：获得 Gnosis Safe、Rainbow、Zerion、Trust Wallet 等团队的早期贡献和持续支持，代表生态系统多元利益相关者的共识
- **先发优势**：2018 年即起步，已成为 Web3 钱包连接的事实标准

## 风险 / 争议
- 中继网络的去中心化程度存疑——V2 虽转向 Waku，但 WalletConnect Cloud 仍是中心化服务
- 协议费用机制不清晰，缺乏明确的代币经济模型
- 面临 MetaMask 自带连接功能等替代方案的潜在竞争
- 协议偏向加密钱包场景，扩展到更广泛身份场景需额外工作

## 历史/路线图
- **2018**：Pedro Gomes 构建 WalletConnect 原型
- **2018-2021**：迭代开发，参加以太坊会议演示和收集社区反馈；获得 Zerion、Rainbow、Trust Wallet、Gnosis 等早期贡献
- **2021-2022**：用户群从技术人员/收益农夫扩展到创作者、收藏家和游戏玩家；采用量爆发
- **2022**：发布 V2.0（多链 + 推送 + Waku 中继）和 WalletConnect Cloud

## 我的判断
WalletConnect 的"窄腰协议"定位有坚实逻辑：如同 TCP/IP 统一异构网络，WalletConnect 统一了碎片化的钱包-DApp 连接方式。但其真正的护城河是网络效应，而非技术壁垒。V2.0 引入去中心化中继和钱包间通信是正确方向，但代币经济缺失让其长期价值捕获能力存疑。关键观察指标：能否在被 MetaMask 等大钱包自有连接方案替代前，利用网络效应锁定生态。

## 相关实体
- [[metamask]] — 主要集成钱包之一
- [[gnosis]] — 早期贡献团队之一（Gnosis Safe）
- [[zerion]] — 早期贡献团队之一
- [[1kx]] — 2022 年发布此投资论文

## 相关概念
- [[decentralized-identity]] — WalletConnect 是身份堆栈中钱包层的关键通信协议
- [[chain-abstraction]] — V2 多链支持属于链抽象基础设施

## 来源
- [[来源_2022-03_WalletConnect_窄腰协议_1kx]] — 本文（1kx 投资论文）
- [[来源_2022-12_Web3身份堆栈_去中心化身份_DID_Web3Caff]] — WalletConnect 在身份堆栈中的定位和与 DIDComm 的对比
