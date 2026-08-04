---
type: source
source_type: article
url: https://mp.weixin.qq.com/s/GjkVgyZFNCOx7hXGRQ7DHw
date: 2026-05
ingested: 2026-07-02
---

# 给机器发银行卡：AI Agent 支付狂飙十二个月全纪录

## 阅读证据
- 总行数: 224
- Q1 (前25%): 2025 年全球稳定币交易量 33 万亿美元，同比增长 72%，总供应量突破 3000 亿美元，仅 USDC 单独处理了 18.3 万亿
- Q3 (中后25%): Step Finance 遭攻击，攻击者获取钱包权限后，AI 交易 Agent 自主执行大额转账，超过 26 万枚 SOL 被转走，价值近 3000 万美元，平台代币暴跌 97%
- Q4 (最后25%): ERC-8004 在 1 月底上线以太坊主网，每个 Agent 被铸造为 ERC-721 NFT，从 337 个注册 Agent 增长到约 13 万个
- 图片: 0 analyzed / 1 decorative skipped / 1 external URL unavailable（图片均为微信 CDN 外部链接，无法直接访问）

## 核心要点
- Agent 支付基础设施在 2025 年 5 月至 2026 年 5 月这十二个月间经历了从开源实验到全球联盟的爆发式发展。x402 协议从 Coinbase+Cloudflare 发布到 Linux 基金会接管仅用 11 个月，22 个创始成员涵盖 AWS、Google、Microsoft、Visa、Mastercard、American Express、Shopify、Solana 基金会、Circle、蚂蚁国际等全球巨头。
- Agent 支付按规模和技术成熟度可分为五层：稳定币结算层（33 万亿年交易量）→ AI 辅助购物（2090 亿美元，但人类付款）→ DeFi 交易 Agent（数十亿美元，真正自主）→卡组织 Agent 支付（Visa/Mastercard 延伸）→ x402/MPP 原生协议（日均仅 28,000 美元，但最具想象力）。
- Stripe 同时下注多轨竞争：联合发布 MPP（Machine Payments Protocol），参与 x402 基金会治理，11 亿美元收购稳定币基础设施 Bridge，通过 Privy 为 AWS AgentCore 提供钱包服务，在 Sessions 2026 上推出 288 个新产品。Coinbase 和 Google 分别选择不同的结算链（Base 的以太坊 vs Solana）。
- 身份验证是 Agent 支付从微支付走向规模化的关键瓶颈。四条路径在赛跑：生物识别（World 虹膜验证）、KYA 协议（Skyfire + Experian）、卡组织延伸（Visa TAP / Mastercard Verifiable Intent）、链上去中心化身份（ERC-8004）。
- 安全风险已经出现真实代价：Step Finance 3000 万美元损失 + LLM 路由器攻击导致 50 万美元钱包被盗。提示注入、权限失控、恶意诱导在 Agent 持有真实金融权限的世界里成为真金白银的风险。
- 共识判断：管道已通，等的是水。基础设施已经搭好但日均只有 28,000 美元真实商业流量。麦肯锡估计 2030 年 Agent 商业代表 3-5 万亿美元全球收入，但区分"AI 辅助""AI 发起""AI 自主完成"三个范畴是投资者建立判断的第一步。

## 关键数据
- x402 协议截至 4 月底：69,000 个活跃 Agent，1.65 亿笔累计交易，约 5000 万美元累计交易额，日均实际约 28,000 美元，平均每笔 0.20 美元
- 2025 年全球稳定币交易量 33 万亿美元（同比 +72%），总供应量破 3000 亿美元，USDC 单独处理 18.3 万亿
- MoonPay Agents 公测 14 周：1000+ 参与者创建 9500+ Agent，执行 187,000 笔自主加密交易
- x402 基金会 22 个创始成员：Coinbase、Cloudflare、Stripe、AWS、Google、Microsoft、Visa、Mastercard、American Express、Shopify、Solana 基金会、Circle、蚂蚁国际、Adyen、Fiserv、KakaoPay、Polygon Labs
- Step Finance 攻击：26 万枚 SOL（约 3000 万美元），平台代币跌 97%
- ERC-8004：从 337 个注册 Agent 增长到约 13 万个
- Visa 平均交易额：从 2015 年的 55 美元降到 2026 年的 45 美元，但交易笔数翻三倍达 3000 亿笔
- Circle Agent Stack + Nanopayments（低至 0.000001 美元免 Gas USDC 转账）+ $2.22 亿融资
- Solana 承载 x402 近 65% 的交易量
- OKX Agent Trade Kit 覆盖 60+ 条链、500+ DEX，每天处理 12 亿次 API 调用

## 与已有知识的关系
- 补充 [[ai-agents]] — 本文提供了 AI Agent 在支付基础设施维度最全面的演进记录，从 x402 协议到 Visa/Mastercard 卡组织延伸，填补了"Agent 如何真正花钱"这个空白
- 补充 [[b2a]] — B2A 概念框架的六层基础设施中"支付层"在此有了具体实现：x402、MPP、Agent Pay、Trusted Agent Protocol 等协议构成 B2A 支付层的实际产品
- 补充 [[stablecoins]] — Agent 经济被识别为稳定币的全新需求源（程序化、持续、高频的机器间支付），将结构性改变 USDC 需求曲线
- 补充 [[decentralized-identity]] — 引入 KYA（Know Your Agent）作为去中心化身份在 Agent 时代的新要求，四条身份验证路径并行赛跑
- 补充 [[coinbase]] — x402 协议创建者，Brian Armstrong 关于"Agent 数量将超过人类交易者"的判断
- 补充 [[stripe]] — MPP 协议发布 + Sessions 2026 密集产品发布
- 补充 [[solana]] — Pay.sh 结算层 + 65% x402 交易量 + 基金会参与治理
- 补充 [[circle]] — Agent Stack 产品线 + Nanopayments 协议
- 补充 [[moonpay]] — MoonAgents Card（虚拟 Mastercard 借记卡）+ Open Wallet Standard
- 与 [[来源_2025-11_ACP_Stripe_Agent支付]] 互补 — 该文聚焦 Stripe 的 ACP 协议，本文则给出整个 Agent 支付生态的全景图
- 与 [[来源_2025-02_Cryptorails_支付超导体_Archetype]] 互补 — 该文关注加密支付轨道技术架构，本文聚焦 Agent 支付这个垂直场景
- 与 [[来源_2024-12_AI_稳定币_三阶段采用_Peter-Schroeder]] 互补 — 该文提出三阶段采用框架，本文提供具体协议和商业落地证据

## 值得记住的引用
> Brian Armstrong（Coinbase 联合创始人）：「很快，做交易的 AI Agent 数量会超过人类。它们开不了银行账户，但可以拥有一个加密钱包。」

> Visa 首席产品和战略官 Jack Forestell：「我在支付行业二十多年，没有见过比 Agentic Commerce 更大的增长机会。」

> Coinbase x402 团队负责人 Erik Reppel：「支付是 Agentic Commerce 的『怎么做』，身份是『谁在做』。」

> MoonPay CEO Ivan Soto-Wright：「Agent 已经在管理钱包、执行交易、在链上转移价值。唯一做不到的是在商户处消费。现在可以了。」

> Visa CEO Ryan McInerney 在财报电话会上：Visa 平均交易额从 2015 年的 55 美元降到 2026 年的 45 美元，但交易笔数翻了三倍，达到 3000 亿笔。Agent 支付会把这个趋势推到极致。

## 我的笔记
这篇文章价值极高，原因在于它没有停留在概念推演，而是用时间线串联了 2025 年 5 月至 2026 年 5 月间几乎所有关键的产品发布和商业落地事件。它提出的"五层光谱"框架对于理解 Agent 支付的不同层次（从 33 万亿稳定币结算层到日均 28,000 美元的 x402 原生层）非常有用，避免了将"AI 辅助购物"和"Agent 自主支付"混为一谈的常见错误。

需要注意的是，文中对市场规模的预测区间极大（麦肯锡 3-5 万亿 vs 摩根士丹利 1900-3850 亿 vs Gartner 15 万亿），这本质上是"AI 辅助""AI 发起""AI 自主完成"定义口径不同造成的。文章自己指出了这一点，但未深入讨论各定义口径的比例关系——这是判断 Agent 支付真实市场规模时需要投资者自己补上的功课。另外，x402 日均仅 28,000 美元交易额中约一半是测试和刷量，说明真实商业场景仍在探索阶段，"管道已通，等的是水"的评估是客观的。
