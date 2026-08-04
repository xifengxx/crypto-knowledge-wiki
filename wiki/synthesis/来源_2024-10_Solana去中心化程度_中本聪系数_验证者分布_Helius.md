---
type: source
source_type: article
url: https://www.helius.dev/blog/solana-decentralization-facts-and-figures
date: 2024-10-01
ingested: 2026-06-29
---

# 衡量 Solana 的去中心化程度：事实和数据

## 阅读证据
- 总行数: 485
- Q1 (前25%): 最大的两个验证者 Helius 和 Galaxy 各持有约 3.2% 的质押，进入前 1/3 超级少数派需要 440 万 SOL 委托质押
- Q3 (中后25%): Agave 客户端有 357 个独立贡献者和 26,408 次提交；Firedancer 客户端有 57 个贡献者和 3,722 次提交
- Q4 (最后25%): Solana 基金会（2019年6月成立，瑞士非营利组织）仅有 60-65 名全职员工，负责资助、质押计划、开发者工具和品牌资产管理
- 图片: 1 张头图 + 约 15 张数据可视化图表（验证者排序、质押分组、Nakamoto 系数历史、多链 NC 对比、大洲/国家/城市分布、托管服务商质押、客户端多样性、贡献者提交、黑客松注册、ESG 评级），全部为外部 URL（cdn.prod.website-files.com），本地不可用

## 核心要点
- Solana 网络共 4,514 个节点（1,414 验证者 + 3,100 RPC，epoch 685），无单一验证者质押超 3.2%，运行验证者完全无需许可且最低只需 1 SOL
- Nakamoto 系数目前为 19（历史上 34 至 19 之间波动），在 PoS L1 中排名中等；由于实体可匿名运行多个验证者，真实 NC 可能更低
- 验证者分布于 37 个国家和地区、121 个城市、135 个托管服务商；68% 质押委托给欧洲验证者，50.5% 集中在欧盟；美国 508 个验证者（37%）、18.3% 质押
- 客户端多样性是去中心化短板：Jito 客户端占 88% 网络质押；Firedancer（C 语言重写）和 Frankendancer 正在逐步引入，预期 12 个月内显著改变版图
- 开发者社区地理多样性强：Agave 357 个贡献者（少数核心开发者主导）、Radar 黑客松 13,672 人/156 个国家、SuperTeam 1,300 成员/16 国
- 治理通过 SIMD 提案流程和质押加权验证者投票执行，迄今完成 3 次投票（参与率从 14.3% 升至 53%）；CCData ESG 评级中 Solana 为 AA 级，L1 中排名第 4

## 关键数据
- **4,514** 个节点（1,414 验证者 + 3,100 RPC，epoch 685），无单一验证者质押超 **3.2%**
- **Nakamoto 系数 19**（历史峰值 34，2023年8月13日），在 PoS L1 中排名中等
- **68%** 质押委托给欧洲验证者，**50.5%** 集中在欧盟；美国 **18.3%**、荷兰和英国各 **13.7%**、德国 **13.2%**
- **135** 个托管服务商，Teraswitch 托管 **24%** 质押、Latitude.sh **19%**；2022 年 Hetzner 移除 Solana 验证者导致 **20%+ 活跃质押**下线，但网络未出现活性故障
- Jito 客户端 **88%** 网络质押份额；Agave 客户端 **357** 个贡献者、26,408 次提交；Firedancer **57** 个贡献者、3,722 次提交
- Radar 黑客松 **13,672** 名参与者 / **156** 个国家；Solana 基金会 **60-65** 名员工，初始财库 1.67 亿 SOL
- 3 次治理投票：2023年10月（14.3% 参与）、2024年4月（53%）、2024年5月（51%）

## 与已有知识的关系
- 补充 [[solana]] — 提供去中心化六个维度的量化数据（质押分布、地理分布、托管服务商、客户端多样性、开发者多样性、治理），缓解 Solana 实体页中"去中心化程度争议"条目仅有定性描述的不足
- 补充 [[jito]] — Jito 客户端占 88% 网络质押，远超此前页面中暗示的"承载大部分网络质押"的模糊表述，是 Solana 客户端集中度的核心风险点
- 补充 [[l1-competition]] — 提供 PoS L1 间 Nakamoto 系数可比较数据，以及 Solana 与以太坊在地理分布、客户端多样性上的对标基准

## 值得记住的引用
> "The Solana network is distributed across 4,514 nodes, including 1,414 validators and 3,100 RPCs (epoch 685). No single validator controls more than 3.2% of the total stake." —— 文章开篇对 Solana 质押分布的核心结论

> "Solana and Ethereum are the only Layer 1 networks offering multiple client implementations. ... On Solana, the Jito client currently has an 88% share of the network's stake. However, this landscape is expected to change considerably over the next twelve months as new clients — Frankendancer and Firedancer — are gradually introduced." —— 客户端多样性是当前 Solana 最显著的集中化向量，但也是正在积极改善的领域

> "Our job is to work ourselves out of a job. Find scalable ways to support the network and ecosystem and then get out of their way." —— Solana 基金会执行董事 Dan Albert 在 Breakpoint 2024 辩论中的表态，暗示基金会的长期自我削弱目标

> "When you look back at the Bitcoin whitepaper, I think what you see is an adversarial approach to the system ... Solana, are taking good ideas and going, well, what if we just centralized everything?" —— Edward Snowden 在 Token2049 上的批评（文章以此作为引入，但指出 Snowden 未提供任何数据支撑）

## 我的笔记
- 这篇文章的框架价值大于其数据的新颖性：它将去中心化拆解为 6 个可量化维度（质押分布、地理分布、托管商、客户端、开发者、治理），这套框架本身可作为评估任何 PoS L1 去中心化程度的模板。Helius 作为 Solana 生态核心基础设施方（其验证者是最大质押者之一），立场上必然偏向辩护，但数据来源（validators.app、GitHub、公开数据集）是可验证的。
- 客户端集中度（Jito 88%）和托管商集中度（前两名 43.4%）是两个最严重的单点故障风险，远比 Nakamoto 系数 19 更值得关注。文章自己也承认"真实 NC 可能更低"，因为实体可匿名运行多验证者。如果 Firedancer 成功分流 Jito 的份额，Solana 的去中心化叙事将大幅改善；反之，如果 Firedancer 引入新 bug 或未能获得验证者采纳，这个短板会持续存在。
- 一个被低估的发现：2022 年 Hetzner 事件（20%+ 活跃质押被强制下线）中 Solana 网络未出现活性故障，这本身就是一次压力测试——说明即使存在托管商集中度问题，网络的韧性在实际冲击中得到了验证。这与 Solana 的宕机历史形成了有趣的张力：宕机多源于软件 bug 而非托管商集中度。
