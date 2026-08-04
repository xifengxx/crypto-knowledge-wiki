---
type: source
source_type: article
url: https://paragraph.xyz/@archetype/cryptorails-superconductors-for-payments
date: 2025-02-16
ingested: 2026-07-02
---

# Cryptorails：加密支付轨道如何成为支付的"超导体"

## 阅读证据
- 总行数: 337
- Q1 (前25%): 美国信用卡交换费（Interchange）约为交易额的 ~1.2% 至 ~3%，欧盟上限 0.3%；开环网络（Visa/Mastercard）和闭环网络（Amex）的拓扑结构差异
- Q3 (中后25%): 2023 年全球汇款总额约 $6560 亿（World Bank），平均跨境汇款成本 6.4%，从土耳其转保加利亚可高达 47.6%
- Q4 (最后25%): 获取全美各州 Money Transmitter License（MTL）需 $50 万至 $200 万，耗时可达一年
- 图片: 0 analyzed / 1 decorative skipped（封面图）/ 11 external URLs unavailable（全部为 paragraph.xyz CDN 外部图片）

## 核心要点
1. **传统支付轨道的复杂性**：详解了卡组织（Visa/MC/Amex）的四方（商户/持卡人/发卡行/收单行）体系、ACH 批处理系统、Wire/RTGS 实时全额结算系统、以及 SWIFT 跨境消息网络的架构和费用结构。传统体系存在多重寻租中间人和陈旧基础设施。
2. **Cryptorails 的使用场景图谱**：系统分析了七大应用方向——商户收款（前端+后端）、加密借记卡、汇款、B2B 跨境支付、跨境供应商付款、跨境应收款、企业资金管理、外援支付、工资发放。加密轨道在"美元需求高但银行接入难"的新兴市场最具优势。
3. **出入金（On/Off-ramp）的市场结构**：出入金层是整个堆栈最关键的瓶颈——需要许可证（VASP/MTL/MSB）、当地银行伙伴、做市商流动性三层能力。P2P 代理模式在高通胀国家（苏丹、委内瑞拉、尼日利亚）提供了比银行汇率便宜 7-25% 的替代方案。
4. **稳定币三明治（Stablecoin Sandwich）架构**：法币→稳定币→区块链传输→法币的闭环是当前企业级密码支付的标准架构，但两端法币兑换成本抵消了中间层效率提升。终极目标是全链上闭环（去掉"面包"）。
5. **20 个 5 年预测框架**：从支付量（$2000-5000 亿/年）、银行支持（>25 家合作银行）、稳定币公链（~3 条支付专用链）、AI Agent 商业（99% 在链上结算）、CBDC 不会规模化等方面给出了具体预测。
6. **关键挑战**：鸡和蛋的网络效应问题（尚无一个"必须用稳定币"的杀手级场景）、监管许可证碎片化（全球需 100+ 种许可证）、银行关系稀缺（全美仅 4-6 家小银行支持加密支付公司）、链上隐私被忽视但会随规模化成为严重问题。

## 关键数据
- 全球跨境 B2B 支付市场：$2400 亿收入，$150 万亿交易量（2022，McKinsey）
- 2023 年全球汇款总额：约 $6560 亿，平均成本 6.4%，银行渠道约 12%
- 全球有 92 个 RTGS 系统，各自独立运作、互不通信
- SWIFT 跨境转账平均需约 18 小时完成
- Visa/Mastercard 结算期 2-3 天，Amex 5 天，巴西可达约 30 天
- 全美仅 4-6 家小银行支持加密支付公司
- 入金费用仍高达 5-10%，取决于提供商和地区
- P2P 出金在苏丹可提供 8-9% 汇率（vs 银行 25%），在加纳和委内瑞拉比银行便宜约 7%
- 获取全美各州 MTL 许可证：$50 万-$200 万，耗时一年；获全球全覆盖需 100+ 种许可证
- 5 年预测：Cryptorails 年支付量 $2000-5000 亿；80% 在线商户接受加密支付；>15 个汇款走廊多数交易走加密轨道；99% AI Agent 商业在链上结算

## 与已有知识的关系
- 补充 [[stablecoins]] — 本文提供了稳定币在支付领域的完整应用图谱（七大场景的详细流程拆解），将"稳定币三明治"从概念扩展到具体的商户收款/汇款/B2B 支付/外援等实战流程，并给出 20 个可验证的 5 年预测框架
- 补充 [[payfi]] — 本文重点覆盖了 B2B 跨境支付这一 PayFi 赛道的核心应用（$150T 交易量市场），给出了 Stripe 国际结算需一周、巴西支付受限等具体痛点数据，同时深入分析了出入金层的成本结构和市场分层
- 补充 [[stripe]] — 本文提供了 Stripe 在国际支付中的具体瓶颈数据（跨境结算需一周），以及 cryptorails 如何通过稳定币加速 T+0 结算的工作资本改善逻辑
- 补充 [[ripple]] — 本文预测 #5 明确提出"将出现约 3 条支付专用加密网络，精神上类似 Ripple 但技术栈和经济模型合理"，将 Ripple 定位为原型而非终局方案
- 补充 [[privy]] — 本文明确将 Privy 定位为"非托管嵌入式钱包的关键基础设施"，其在汇款场景中通过 Web2 级 UX 推动采用的作用
- 补充 [[rwa]] — 稳定币作为 RWA 最简单形态，在本文中作为加密支付轨道基础设施的结算媒介角色被深入剖析

## 值得记住的引用
> "Cryptorails are superconductors for payments. They form the substrate of a parallel financial system that offers faster settlement times, reduced fees, and the ability to operate seamlessly across borders." — Patrick Collison（Stripe CEO）引言，Conclusion 段落

> "A cross-border payment from Ghana to Nigeria, two bordering countries, can take weeks and cost up to 10% transfer fees." — B2B 支付章节，用于量化相邻国家的支付效率矛盾

> "Banking partners will take you if they get transaction volumes and will make money, but you need banks to get those volumes in the first place." — Challenges 章节，揭示加密支付公司面临的银行关系鸡和蛋问题

> "There will be serious negative consequences when malicious actors start to monitor payment activity for individuals, companies, and governments via their public keys." — Challenges 章节，关于被忽视的链上隐私问题

## 我的笔记
这篇文章是 Archetype 合伙人 Dan Berenzon 对"加密支付轨道"赛道的全景式综述，质量很高。最大的价值在于系统拆解了传统支付体系的四层费用结构（交换费/方案费/结算费/网络费），并将其与 cryptorails 的边际优势逐一对比——这种传统 vs 加密的逐层对标分析在现有素材中很少见，建议在未来的支付研究中重点引用。

20 个 5 年预测既有胆量也有可验证性（如 $2000-5000 亿年支付量、80% 商户接受率、99% AI Agent 商业在链上），值得在 2027、2028 年回溯验证。不过，文章作为 Archetype 的 VC 输出，存在天然的抬轿子动机——280 家已投和未投公司列表本身就是其投资论点的素材，读者应对部分乐观预测（如"80% 在线商户接受加密"——这个数字在传统卡组织网络花了几十年才达到）保持审慎。此外，文章对合规桥接（如 Lightspark UMA）的描写过于乐观，未充分讨论各国央行对支付主权的敏感性和监管地缘政治风险。
