---
type: entity
entity_type: company
created: 2026-07-02
updated: 2026-07-02
tags: [payment, card-network, traditional-finance, ai-agent, stablecoins]
aliases: [Mastercard, 万事达, Banknet]
---

# Mastercard

## 基本信息
- 类型：全球卡支付网络（卡组织）
- CEO：未在文中提及
- 定位：传统支付巨头中没有从零开始建新系统，而是把现有信用卡网络延伸到 Agent

## Agent 支付相关产品/项目
- **Agent Pay**：Mastercard 专门为 Agent 打造的支付产品。2026 年 4 月底与 Rabobank 完成荷兰首笔 Agent 支付——在 ChatGPT 里发一句提示词，Agent 通过 Mastercard Agent Pay 预订了一场咖啡品鉴体验，全程不接触卡号数据。2026 年 5 月在东盟正式上线
- **Verifiable Intent 标准**：与 Google 联合开发，把消费者身份、指令和交易结果打包成防篡改记录
- 2026 年 3 月与 Santander 完成欧洲首笔受监管银行环境中的 AI Agent 支付

## 稳定币/区块链支付基础设施（2025.04 端到端方案）

2025 年 4 月 28 日，Mastercard 发布端到端稳定币基础设施路线图，同样聚焦四大领域：

1. **加密钱包卡发行**：与 [[metamask]] + Baanx 推出 MetaMask Card（加密资产→法币→商户结算），首批支持阿根廷、巴西、哥伦比亚、墨西哥、瑞士、英国、美国。与 Kraken、Gemini、Bybit、[[crypto-com]]、[[binance]]、OKX 等交易所合作稳定币卡
2. **USDC 商户结算**：通过 Nuvei、[[circle]]（USDC）和 Paxos（Paxos 稳定币）支持商户以稳定币结算。若商户愿意，可直接用 USDC 收款
3. **链上汇款（Crypto Credential）**：为加密货币交易所用户创建别名（替代复杂钱包地址），自动交换 Travel Rule 合规数据。支持交易所包括 Wirex、Bit2Me、Mercado Bitcoin。可用地区：阿根廷、巴西、智利、墨西哥、秘鲁、西班牙、瑞士、法国
4. **机构代币化平台（Multi-Token Network / MTN）**：私有区块链平台，支持金融和企业机构发行、销毁和管理代币，实时跨境交易。已集成 [[ondo-finance]]（OUSG 短期美债基金）、[[jpmorgan]] 旗下的 Kinexys 支付系统、[[standard-chartered]] 碳信用代币化试点（2024.05）

### 链上加密货币直接购买通道（2025.06 Chainlink 合作）

2025年6月24日，Mastercard 与 [[chainlink]] 宣布战略合作，允许全球超过30亿持卡人通过信用卡直接在区块链上购买加密货币。这是传统金融与DeFi深度融合的里程碑：

- **服务架构**：Swapper Finance（用户前端入口）→ Shift4 Payments（卡支付处理）→ ZeroHash（法币转加密货币）→ Chainlink CCIP/预言机（链上安全）→ XSwap DEX/Uniswap（流动性 + 链上交换）
- **无需**注册CEX账户、操作链上桥接、了解Gas费或滑点参数
- **本质**：与前一年MetaMask Card等加密借记卡不同——不是"链上资产→法币消费"，而是"法币→链上资产"的正向入金通道

### 2025年三大战略重点

Mastercard 加密与区块链业务主管 Raj Dhamodharan 明确2025年战略聚焦三大领域：

1. **链上/链下出入金（On/Off-Ramp）**：打通法币与链上资产的双向通道，上述Chainlink合作即该战略的核心落地
2. **Crypto Credential 推广**：用易用的别名替换复杂钱包地址，自动交换 Travel Rule 合规数据
3. **稳定币应用**：已支持金融机构使用稳定币进行交易结算，密集推出多款稳定币支付产品（见下）

### 稳定币支付产品矩阵（2025年上半年密集推进）

- 加入Paxos等发起的 **Global Dollar Network**，共同铸造并分享与美债挂钩的稳定币USDG利息收益
- 支持 **PayPal PYUSD** 和 **Fiserv FIUSD** 稳定币，整合进 Mastercard Move 跨境支付网络
- 联手 [[moonpay]] 推出稳定币支付卡，支持全球超过 **1.5亿商户** 处进行稳定币支付（自动兑换法币）
- 与 [[circle]]（USDC）、[[nuvei]]、[[paxos]] 合作推出全方位稳定币支付解决方案，商户可直接用 USDC 结算
- 与 [[okx]] 合作推出 **OKX Card**，支持稳定币支付
- 与前 Revolut 员工创立的 **Bleap** 达成战略合作，推进稳定币融入传统金融基础设施

## 关键数据
- CEO 在 2025 年 10 月确认网络上发生了「第一笔 Agentic 交易」
- 2026 年 3 月：Santander 完成欧洲首笔受监管银行环境中的 Agent 支付
- 2026 年 4 月底：Rabobank 完成荷兰首笔 Agent 支付
- 2026 年 5 月：Agent Pay 在东盟正式上线
- x402 基金会创始成员

## 竞争优势 / 护城河
- 全球最大卡支付网络之一，商户接受度极高
- 在 Agent 支付领域比 Visa 更早完成公开的实际交易（欧洲首笔受监管 Agent 支付）
- Agent Pay 产品化程度高，从试点到东盟上线仅用约 2 个月
- MoonPay 的 MoonAgents Card 是一张虚拟 Mastercard 借记卡，说明 Mastercard 网络已在 Agent 支付中被第三方直接利用

## 风险 / 争议
- Agent 支付仍处于极早期阶段，交易量极小
- 面临 Visa、Stripe、加密原生协议的多重竞争

## 相关实体
- [[visa]] — 直接竞争对手
- [[x402]] — x402 基金会创始成员
- [[coinbase]] — x402 生态合作伙伴
- [[moonpay]] — MoonAgents Card 使用 Mastercard 网络
- [[solana]] — 通过 x402 和 Agent 支付生态间接关联

## 来源
- [[来源_2026-05_AI_Agent_支付狂飙十二个月]]
- [[来源_2025-05_Visa_Mastercard_稳定币支付_四大支柱]]
- [[来源_2025-06_万事达卡_链上买币_Chainlink_PANews]]
