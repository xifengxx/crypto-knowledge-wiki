---
type: entity
entity_type: company
created: 2026-07-02
updated: 2026-07-02
tags: [infrastructure, node-service, web3, ethereum, account-abstraction]
---

# Alchemy

## 基本信息
- 类型: company
- 定位: Web3 development platform（区块链节点即服务 + 开发者工具平台）
- 成立时间: 2017年
- 总部: 美国旧金山
- 创始团队: Nikil Viswanathan, Joe Lau
- 支持的链: Ethereum, Polygon, Optimism, Arbitrum, Solana 等主流公链

## 核心业务/产品

- **节点服务（Supernode/RPC）**: Alchemy 的核心业务，为开发者提供高性能区块链节点接入（HTTP + WebSocket）。与 Infura 并列为 Web3 两大核心节点服务商，"几乎没有用户运行自己的节点来交易，人们都依赖于 Infura、Alchemy 等中心化服务商。"（[[来源_2022-08_Web3参考架构_三层模型_路线图_登链社区]]）

- **Enhanced APIs**: 增强 API 套件，涵盖区块链转账、代币元数据、代币余额、交易收据、追踪、调试等使用场景。2022 Q3 请求量 YTD 增长 10 倍，确认了 DeFi、DAO、Gaming 等领域的基础设施需求扩张。（[[来源_2022-Q3_Alchemy_Web3开发者报告]]）

- **NFT API**: 提供 NFT 数据查询和分析接口。2022 年 YTD 请求量增长 10 倍，NFT 市场交易量虽跌近 90%，但 NFT 开发者活动仍然活跃。（[[来源_2022-Q3_Alchemy_Web3开发者报告]]）

- **账户抽象基础设施（ERC-4337）**: 开发 Bundler 和 Paymaster 服务，为账户抽象生态提供模块化、可定制的第三方基础设施。Alchemy 团队成员参与了 EIP-4337 标准的技术评审和文档撰写，该标准的工作流程示意图由 Alchemy 提供。与 Biconomy、Pimlico 并列为 ERC-4337 基础设施关键提供商。（[[来源_2022-08_Web3参考架构_三层模型_路线图_登链社区]] 引用的同名账号 AA 文章）

- **归档节点服务（Archive Node）**: 提供完整的以太坊历史链上数据。2022 年归档节点请求量翻倍，反映开发者对历史链上数据的需求持续增长。

- **Alchemy University**: Web3 开发者教育平台。上线不到 1 周即获超过 16,000 个 waitlist 注册。

## 关键数据

- 2022 年初以来，在 Alchemy 平台上构建的开发团队数量增长 3 倍，涵盖多条公链（来源：[[来源_2022-Q3_Alchemy_Web3开发者报告]]）
- Alchemy Enhanced API 请求量 2022 年 YTD 增长 10 倍（来源：同上）
- Alchemy NFT API 请求量 2022 年 YTD 增长 10 倍（来源：同上）
- Alchemy 归档节点请求量 2022 年 YTD 翻倍（来源：同上）
- Alchemy University 上线不到 1 周即获 16,000+ waitlist 注册（来源：同上）
- 2022 Q3 开始支持 Solana，Solana 上开发团队 YTD 增长超 1000%，API 消费增长 500%（来源：同上）
- 融资总额超 $200M，估值达 $102 亿（2022 年 Series C1）— 该数据来自训练知识，待来源确认
- 服务覆盖 70%+ 的头部 dApp — 该数据来自训练知识，待来源确认

## 竞争优势 / 护城河

1. **双寡头垄断地位**: 与 Infura 并列为 Web3 基础设施的双寡头，"几乎没有用户运行自己的节点"。Alchemy 在节点服务市场中占据主导份额，头部 dApp 和钱包几乎全部依赖其 RPC 服务，生态绑定极深。（[[来源_2022-08_Web3参考架构_三层模型_路线图_登链社区]]）

2. **抗周期业务模型**: "开发者服务，不论是测试工具、API、存储、安全分析、监控等，都可以不被币价或者周期影响"——Alchemy 的开发者工具业务与市场周期脱钩，熊市中开发者活跃度反而创新高，业务收入稳定性强。（[[来源_2022-08_Web3参考架构_三层模型_路线图_登链社区]] 引用的相关文章）

3. **全栈产品矩阵**: 从基础 RPC 节点到 Enhanced APIs、NFT API、账户抽象 Bundler/Paymaster、归档节点、开发者教育，覆盖 Web3 开发者从入门到生产的全生命周期需求。

4. **技术和行业影响力**: 通过发布《Web3 Developer Report》（与 Etherscan、DappRadar 等合作）建立行业数据标准，通过 Alchemy University 培养新一代开发者，通过参与 EIP-4337 标准制定展示技术领导力。

5. **用户增长飞轮**: 开发者团队数 3 倍增长、API 请求量 10 倍增长、多链支持扩展（Solana 等）构成了正向循环——更多链的支持吸引更多开发者，更多开发者贡献更多数据，更多数据反哺产品优化。

## 风险 / 争议

1. **中心化悖论**: "今天几乎所有对区块链协议层的调用都通过节点及浏览器服务进行，这破坏了 Web3 是去中心化的前提。" Alchemy 与 Infura 的节点服务垄断是 Web3 去中心化叙事中最突出的矛盾之一。（[[来源_2022-08_Web3参考架构_三层模型_路线图_登链社区]]）

2. **审查风险**: Alchemy 和 Infura 曾配合 OFAC 制裁，阻止向 Tornado Cash 相关的智能合约发送 RPC 请求。这一行为暴露了节点服务商对链上交易的审查能力，引发社区对"去中心化基础设施"定义的广泛讨论。

3. **单点故障风险**: 作为底层基础设施层，Alchemy 的宕机或性能故障会直接影响大量 dApp 的正常运行和用户体验。相比之下，轻客户端和去中心化 RPC 网络（如 POKT Network）正试图解决这一依赖。

4. **竞争加剧**: 新兴节点服务商不断涌现——ZAN（蚂蚁数科）、QuickNode、Moralis 正以差异化的定位（中文市场、Solana 生态等）争夺市场份额。账户抽象赛道中，Pimlico、Stackup 等专业化基础设施提供商也可能蚕食 Alchemy 的开发者生态。

## 相关实体
- [[infura]] — 直接竞争对手，同为 Web3 核心节点服务商，ConsenSys 旗下
- [[zan]] — 新兴竞争对手（蚂蚁数科旗下），面向中文开发者 + MEV searcher 市场
- [[ethereum]] — Alchemy 支持的核心公链
- [[account-abstraction]] — Alchemy 提供 ERC-4337 Bundler/Paymaster 基础设施
- [[alchemy-pay]] — 不同实体，Alchemy Pay 是加密支付公司，注意名称混淆
- [[layer2]] — Alchemy 为 Optimism、Arbitrum、Polygon 等 L2 提供节点支持

## 来源
- [[来源_2022-Q3_Alchemy_Web3开发者报告]] — Alchemy 发布的 Web3 开发者报告 Q3 2022，包含多项平台增长数据
- [[来源_2022-08_Web3参考架构_三层模型_路线图_登链社区]] — 将 Alchemy 归类为 Web3 基础设施层"前端赋能"的节点服务商，指出中心化风险
- [[来源_2024-12_MEV机器人_三明治攻击_夹子机器人_PANews]] — Alchemy 作为高性能节点服务与 ZAN、Infura 并列推荐给 MEV 开发者
- [[来源_2022_Web3_100工具_初创公司指南]] — 将 Alchemy 列为 Web3 初创公司推荐的一站式区块链开发后端，确认其 2022 年 100 亿美元估值

