---
type: entity
entity_type: company
created: 2026-06-29
updated: 2026-06-29
tags: [payment, stablecoins, pyusd, web3]
---

# PayPal

## 基本信息
- 类型：全球支付巨头（NASDAQ: PYPL）
- 成立：1998 年（2002 年被 eBay 收购，2015 年独立上市）
- 全球用户：4.31 亿（2023 年）
- Web3 关键动作：2023 年 8 月 7 日推出 PYUSD 稳定币

## 核心业务/产品
- **传统支付**：PayPal 账户体系 + 第三方支付网络，覆盖全球 200+ 市场
- **PYUSD 稳定币**：由 Paxos 于2023年8月发行，作为 PayPal 生态中唯一支持的稳定币，连接 4.31 亿存量用户
  - 市值约8.8亿美元（截至2025年4月），稳定币市场排名第九
  - 历史峰值约10亿美元（2024年8月），此后受市场波动影响回落
  - 主要部署于以太坊和Berachain，其次是Solana
  - 24h交易量约1393万美元，交易量/市值比1.66%，市场流通活跃度偏低
  - 2025年4月推出针对美国用户的PYUSD存款计划，提供3.7%年化收益率（APY），存入PayPal或Venmo钱包即可获得PYUSD形式收益
- **Cryptocurrencies Hub**：PayPal 账户下的加密钱包（由 Paxos 托管），用户不持有私钥
- **出入金服务**：支持 MetaMask、Ledger 等加密钱包的入金；支持钱包/DApp/NFT 市场的出金

## Web3 支付架构
PayPal 将 PYUSD 作为法定货币与加密货币之间的桥梁，所有出入金和加密支付通过 **USD - PYUSD - Crypto Asset** 链路完成：
- 入金：USD → PYUSD → Crypto Asset
- 出金：Crypto Asset → PYUSD → USD → 银行账户
- 加密支付：Crypto Asset 先兑换为 PYUSD/USD，再向商家付款

## 竞争优势 / 护城河
- 4.31 亿存量用户，Web3 最大潜在用户入口
- 传统支付合规牌照积累（美国各州 MTL），Web3 支付合规壁垒极高
- 强大的支付渠道和商户网络
- 品牌信任（与传统科技巨头同等量级）

## 风险 / 争议
- 用户不掌握私钥（Paxos 托管），与 Web3 去中心化理念冲突
- PYUSD 初期仅限美国用户，全球化进度不确定
- 面临 Coinbase（USDC）、Tether（USDT）等已有稳定币网络的竞争
- 科技公司基因 vs 加密原生文化的适配

## 相关公司对比
| 公司 | 路径 | 稳定币 | 用户基础 |
|------|------|--------|---------|
| PayPal | 支付→稳定币→钱包 | PYUSD | 4.31 亿 |
| Coinbase | 交易→支付→托管 | USDC (合作) | 1.1 亿+ KYC |
| Stripe | 支付→入金 | 无自有 | 数百万商户 |

## 相关实体
- [[coinbase]] — 竞争对手/对比，交易所路径 vs 支付公司路径
- [[circle]] — PYUSD 发行方 Paxos 的竞争对手
- [[tether]] — USDT 是 PYUSD 在支付场景的主要竞争稳定币

- [[来源_2024-09_RWA六大核心资产_OKX_Ventures_深潮TechFlow]] — PYUSD发行量达$10亿/自5月进入Solana以来市值+155%/Solana链上供应量+4685%/大金融公司切入稳定币业务的典型案例
- [[来源_2025-05_稳定币_六路新锐_BlockBeats]] — PYUSD 2025年春季市场数据：$8.8亿市值排名第九、峰值$10亿（2024.8）、3.7% APY存款计划、交易量/市值比1.66%的流通活跃度问题

## 来源
- [[来源_2023-09_Web3支付_行业巨头_PANews]] — PayPal Web3 支付全面布局：PYUSD 桥梁机制、Cryptocurrencies Hub 托管钱包、出入金渠道
- [[来源_2024-12_David_Sacks_白宫加密负责人_投资组合_BlockBeats]] — David Sacks 曾任 PayPal 创始 COO，为「PayPal 黑帮」核心成员
- [[来源_2025-08_a16z_银行_资管_Fintech_区块链转型_深潮TechFlow]] — PayPal可基于OP Stack构建"支付超级链"优化PYUSD稳定币以支持实时场景；作为单一排序器运营者收取交易费；通过提供零成本开发者费用激励生态活动
