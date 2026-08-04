---
type: source
source_type: article
url: https://squads.so/blog/solana-base-stablecoin-payments
date: 2025-03
ingested: 2026-07-02
---

# Solana与Base公链对决：稳定币支付基础设施的选型之争

## 阅读证据
- 总行数: 172
- Q1 (前25%): Stripe以约11亿美元收购稳定币支付平台Bridge，为史上最大加密收购案；2024年稳定币支付公司获超3.09亿美元融资
- Q3 (中后25%): Solana在2024年Q4单季收入（REV）达7.51亿美元，位居所有公链之首，并成为全链REV榜首
- Q4 (最后25%): Base没有原生代币，未受SEC监管调查，但其中心化排序器设计使Coinbase可单方面执行地理围栏、KYC和钱包冻结
- 图片: 0 analyzed / 0 decorative skipped / 15 external URLs unavailable（全部来自Framer托管，无法访问）

## 核心要点
1. **稳定币市场的爆发式增长**：2024年稳定币年交易量从$5.7T飙升至$8.3T，活跃地址达2900万，占每日加密活动的32%，且Stripe以$11亿收购Bridge标志着行业拐点。
2. **区块链选型四大标准**：Squads提出评估支付区块链的四个维度——高性能架构、低且可预期的费用、市场需求、监管清晰度；只有Solana和Base同时满足四者。
3. **Solana的技术与生态优势**：Solana凭借本地费用市场（local fee markets）、Jito交易分割引擎、Firedancer（测试环境达1M TPS）、并行处理能力，在去中心化（1000+验证者）、费用可预测性和应用生态（pump.fun、Jupiter、Kamino、Drift、Moonshot）上占优。
4. **Base的合规与分销优势**：Base依托Coinbase美国45%市场份额的CEX用户基础、与Circle的USDC协同（免费Gas额度、折扣费用、零USDC入金费），以及OP Stack快速迭代能力，在北美市场具有独特优势。
5. **可信中立性（Credible Neutrality）——核心分水岭**：Solana的去中心化验证者网络确保抗审查，而Base的中心化排序器使其可被Coinbase单方面控制（地理围栏、KYC、黑名单），但这也让Base在监管合规上更为从容。
6. **长期判断**：文章认为Base将在美国市场发挥重要的新用户引导作用，但Solana因其中立性和分布式创新基础，将长期主导稳定币支付市场。

## 关键数据
- 稳定币年交易量：2023年$5.7T → 2024年$8.3T（增长46%）
- 活跃稳定币用户：2900万地址
- Stripe收购Bridge：$11亿，为史上最大加密收购案
- 2024年稳定币支付公司融资：超$3.09亿
- Solana Q4 2024 REV：$7.51亿，全链第一
- Pump.fun累计费用（至2025年1月）：超$4.5亿（2024年3月推出）
- Solana稳定币TVL（2025年1月）：$107亿（历史新高）
- Solana单周稳定币铸造量（2025年1月15-21日）：约$30亿
- Solana确认最终性：800ms（超级多数共识），完全最终性~13秒
- Base出块时间：2秒（预确认），真正最终性~15分钟（以太坊结算）
- Coinbase 2024年排序器收入：至少$5600万
- Jito交易分割引擎推动Base仅用8%费用收入完成以太坊结算
- Base消耗以太坊40%+的Blob空间
- Coinbase在美市场份额：45%

## 与已有知识的关系
- 补充 [[stablecoins]] — 提供从"支付公链选型"角度评估Solana和Base的四大框架（性能/费用/需求/监管），补充了Layer1竞争中的"稳定币支付基础设施"维度
- 补充 [[solana]] — 补充2025年1月最新数据（$107亿稳定币TVL、$7.51亿Q4 REV、pump.fun $4.5亿费用），以及本地费用市场和Firedancer对支付场景的意义
- 补充 [[base]] — 补充Base作为稳定币支付链的定位数据（Coinbase $5600万年排序器收入、45%美市场份额、与Circle/USDC的深度协同）
- 补充 [[l1-competition]] — 增加"稳定币支付基础设施竞争"作为L1竞争的新维度，区别于技术性能和Meme叙事
- 补充 [[sequencer]] — 补充Base中心化排序器在支付场景中的双重角色（快速迭代vs审查风险）
- 补充 [[payfi]] — 补充Solana和Base两条链在支付基础设施层面的具体对比
- 关联 [[tron]] — 文章解释了Tron被排除分析的原因：监管审查加剧、Circle停止USDC支持，不太可能成为新支付应用的基础

## 值得记住的引用
> "On Solana, fees are paid to a decentralized validator set, while on Base, they go directly to Coinbase. In 2024 alone, Coinbase generated at least $56M in revenue from fees paid to its sequencer."

> "The key differentiator is credible neutrality. We believe that Base will play a growing role in onboarding new companies and users, especially in the US. However, Solana will be the home of stablecoin payments in the long term."

> "Apps powering borderless money movement will gravitate toward Solana's neutral substrate, built on distributed innovation rather than dependence on centralized sequencers governed by isolated incentives."

> "Launching an appchain is akin to opening a Shopify store and attracting inbound traffic—but in the world of finance, where liquidity attracts more liquidity, the challenge is far greater."

## 我的笔记
1. 这篇文章来自Squads博客——Squads本身是Solana生态的多签钱包/DAO治理基础设施，所以其对Solana的倾向性需要辩证看待。文章在核心论点（Solana长期主导稳定币支付）上明显偏向Solana，对Base中心化风险的描述比对Coinbase合规优势的描述更有力度，这种倾向在结论部分最为明显。
2. 排除Ethereum、Tron和Celo的理由虽然合理，但略显简化。Ethereum的高Gas问题通过L2（如Base本身）已部分解决，而Tron的实际稳定币支付量仍主导新兴市场。文章将讨论限定为"适合新应用建设的区块链"而非"当前最活跃的支付链"，这个前提值得注意。
3. "可信中立性"确实是一个有力的分析视角，但也应认识到：对于受监管企业而言，Base的中心化设计可能反而是优势（合规可审计、可干预非法交易）。完全中立的链在合规要求下面临挑战。文章未充分讨论这一权衡。
