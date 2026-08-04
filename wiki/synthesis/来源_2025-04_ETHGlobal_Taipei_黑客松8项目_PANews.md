---
type: source
source_type: article
url: https://www.panewslab.com/zh/articledetails/3905jh9ijx6t.html
date: 2025-04-13
ingested: 2026-07-02
---

# ETHGlobal Taipei 2025 黑客松决赛入围8个项目全景

## 阅读证据
- 总行数: 188
- Q1 (前25%): ETHGlobal Taipei 2025 于4月4日至6日举行，共226个项目入选，8个入围决赛；BTC价格预测项目Signals采用多结果预测机制（非二元结果），Ethereum Fighter使用完全同态加密（FHE）确保链上对战隐私
- Q3 (中后25%): Solva通过邮箱/Google/Apple社交账号登录实现零门槛加密支付，对标Venmo，全程无Gas费提示；"How Doxxed Am I?"提供免费的链上隐私健康检测工具，类比"链上版Chainalysis"
- Q4 (最后25%): DynaVest跨链聚合Morpho借贷、EigenLayer再质押、Uniswap流动性于单一签名执行；Nomadia使用World ID进行身份验证的P2P本地货币兑换小程序
- 图片: 1张（外部CDN URL，不可用）

## 核心要点
- ETHGlobal Taipei 2025 黑客松共收到226个项目，8个项目入围决赛，涵盖加密货币价格预测、AI智能体、AI投资建议、隐私保护、链下支付和短信加密支付等多元赛道
- Signals 以多结果概率预测机制替代传统二元预测市场，通过群体情绪量化实现BTC价格区间的精细化预测
- Ethereum Fighter 和 cellfi 分别代表两个极端的技术场景：前者使用FHE全同态加密和Nillion secret LLM实现隐私链上对战，后者通过SMS短信为38亿无互联网用户提供USDC支付
- Solva 和 AskCiaShen 聚焦降低Web3使用门槛：Solva消除钱包、Gas费、加密术语等认知障碍；AskCiaShen通过动态UI生成技术为不同技能水平用户优化DeFi投资组合
- "How Doxxed Am I?" 揭示链上隐私风险，提供钱包卫生管理和链上足迹管控工具，定位为面向普通用户的免费隐私检测服务
- DynaVest 作为DeFAI智能体，通过Multicall3跨链聚合Morpho、EigenLayer、Uniswap等协议，用户一次签名即可自动执行多链DeFi策略
- Nomadia 结合World ID实名认证和MiniKit构建P2P本地货币兑换小程序，面向线下面对面交易场景

## 关键数据
- 226个项目入选，8个入围决赛
- ETHGlobal Taipei 2025 日期：2025年4月4日至6日
- cellfi 目标用户：全球38亿拥有手机但互联网访问受限或无法访问的人群
- cellfi 使用 USDC 稳定币进行基于短信的 P2P 支付
- Ethereum Fighter 使用 Nillion secret LLM 和 OpenRouter 运行 AI 代理
- Solva 对标 Venmo/PayPal，提供无钱包、无费用、无加密术语的支付体验
- DynaVest 聚合 Flow、Celo、Base 和以太坊四条链上的 Morpho 借贷、EigenLayer 再质押和 Uniswap 流动性

## 与已有知识的关系
- 补充 [[defai]] — DynaVest 作为 DeFAI agent 的 hackathon 实践案例，展示了一次签名跨链聚合 Morpho/EigenLayer/Uniswap 的简化路径
- 补充 [[prediction-market]] — Signals 的多结果概率预测机制为预测市场提供超越二元（是/否）结果的技术探索方向，适用于连续资产价格预测
- 补充 [[ai-agents]] — AskCiaShen 和 DynaVest 展示了 AI agent 在 DeFi 投资组合优化和自动策略执行中的具体应用场景
- 补充 [[privacy]] — Ethereum Fighter 的 FHE 全同态加密应用和 "How Doxxed Am I?" 的隐私健康检测，分别从技术实现和用户认知两个角度丰富了隐私赛道

## 值得记住的引用
> "cellfi 支持用户使用 USDC 稳定币进行基于短信（SMS）的点对点支付——无需互联网连接。它通过将短信指令转化为区块链交易，为全球 38 亿拥有手机但互联网访问受限或无法访问的人群提供加密货币支付服务。"

> "Signals 平台通过多结果结构解决了这一限制——用户可预测特定的 BTC 价格区间，从而从群体行为中提炼出更精细的洞察。因此，该平台不再局限于简单的「涨跌」模型，而是实时实现细分市场共识。"

> "'How Doxxed Am I?' 作为一款免费的实用公共服务提醒工具，可以显示用户的钱包活动可能泄露的身份信息，就像是链上版本的 Chainalysis，帮助他们在他人利用之前发现潜在风险并改善其隐私足迹。"

## 我的笔记
- 这8个项目高度代表了2025年以太坊黑客松的主流创新方向：AI Agent + DeFi 的融合（DeFAI）、隐私保护（FHE）、普惠金融（SMS支付）、用户体验简化（无钱包/无Gas费）。这些方向与当前Crypto市场的叙事高度一致。
- 值得注意的缺失方向：没有ZK相关项目（除了FHE）、没有Layer2扩展方案、没有跨链互操作项目。这可能是黑客松时间限制导致的选题偏向——在48小时内实现一个DeFAI agent或SMS支付网关，比构建ZK基础设施更可行。
- cellfi 的SMS支付理念具有真实的社会价值（服务38亿无互联网人群），但USDC依赖Circle SDK和互联网间接连接，实际落地仍面临基础设施挑战。Solva的"无钱包支付"同样面临合规和信任问题——用户不掌握私钥的"支付"本质上仍是托管模式。
