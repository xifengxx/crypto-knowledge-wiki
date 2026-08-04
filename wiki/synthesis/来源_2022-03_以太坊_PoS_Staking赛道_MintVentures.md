---
type: source
source_type: article
url: https://mp.weixin.qq.com/s/gtEgfhvJbRPt4SyahHohsw
date: 2022-03-25
ingested: 2026-07-02
---

# 以太坊转PoS在即：Staking赛道及代表项目深度解析

## 阅读证据
- 总行数: 456
- Q1 (前25%): 排名前十的PoS公链累计质押超1800亿美元，平均质押收益率超7%
- Q3 (中后25%): Lido保险基金累计3139枚stETH，但与已质押的270余万枚ETH相比仅覆盖0.11%
- Q4 (最后25%): JP Morgan预测，到2025年仅ETH质押就能产生400亿美元网络收入
- 图片: 0 analyzed / 0 decorative skipped / 18 external URLs unavailable（均为微信CDN外链图片）

## 核心要点
1. 区块链共识层正从PoW快速转向PoS，以太坊Merge（预计3-6个月内）将加速这一趋势，市值前十五公链中仅BTC/DOGE/LTC仍采用PoW
2. 流动性质押（Liquid Staking）通过发放质押衍生品解决了用户质押后丧失流动性的痛点，Lido凭stETH的稳定锚定和DeFi可组合性成为ETH质押流量入口，TVL超过165亿美元
3. Rocket Pool通过将32ETH分为普通用户16ETH（优先级）+节点运营商16ETH（劣后级）的设计，实现更去中心化的流动性质押，但为等待智能合约作为取款私钥导致主网上线延迟，落后Lido约140万ETH质押量
4. SSV Network基于DVT（分布式验证器技术）允许将验证器密钥拆分给多个节点运营商，消除单点风险，成为ETH质押底层基础设施层；与Lido/Rocket Pool非竞争关系而是上下游关系
5. Stader作为赛道新锐，上线不足3个月即在Terra生态获得超8亿美元TVL，计划拓展至Solana/Fantom/Polygon等链
6. 长期看，流动性质押赛道可能陷入类似DeFi之夏的补贴大战，品牌/安全/去中心化成为行业门槛，竞争焦点落在质押衍生品的流动性和可组合性上

## 关键数据
- 前十大PoS链累计质押超1800亿美元，平均收益率超7%
- Lido TVL超165亿美元，在所有DeFi协议中排名第3
- Lido stETH在Aave上线不到1个月内存款规模达13亿美元，成为以太坊主网第4大存款来源
- Lido保险基金累计3139枚stETH，仅覆盖已质押ETH的0.11%；通过UPslashed对20万枚stETH投保
- Rocket Pool主网质押超15万枚ETH，引入973个节点运营商（截至2022年3月）
- SSV测试网已有15000+验证器和3000+节点运营商
- Stader上线不足3个月TVL超8亿美元，Terra生态排名第4
- a16z向Lido投资7000万美元；Paradigm向Lido投资（7000万LDO约合7500万美元）
- JP Morgan预测2025年仅ETH质押即产生400亿美元网络收入

## 与已有知识的关系
- 补充 [[liquid-staking]] — 提供Lido、Rocket Pool、SSV Network在2022年初的详细业务数据和竞争格局，是理解LSD赛道早期发展的关键历史素材
- 补充 [[lido]] — 详细记载了Lido的早期融资历程（种子轮200万美元/Paradigm轮7500万美元/a16z 7000万美元）、stETH在Aave上线细节、MEV捕获研究参与等早期关键事件
- 补充 [[mev]] — 详细阐述了ETH转PoS后MEV的分配机制（Priority fee由质押者获得、Flashbots研究认为800万ETH质押时MEV可提升质押收益60%）
- 补充 [[restaking]] — 本文写作于EigenLayer出现之前，提供了无restaking时期的Staking赛道全景，可作为restaking叙事兴起前的"基准线"参考
- 新实体 [[rocket-pool]] — 本文详细介绍了Rocket Pool的分级资产管理设计（16ETH优先级+16ETH劣后级）、动态佣金机制、对去中心化的坚持
- 新实体 [[ssv-network]] — 本文是SSV Network在白皮书阶段后的早期深度介绍，包含DVT技术原理、经济模型、与Obol Network的进度对比
- 新实体 [[stader]] — 本文是Stader早期（TGE后不久）的全面介绍，包含Terra生态TVL数据、多链扩展计划、SD代币模型

## 值得记住的引用
> "在Staking赛道中，传统的玩家是节点运营商。而伴随着以太坊共识层对质押流动性的锁死，流动性质押的服务商横空出世。相比传统的仅提供节点运营的服务商而言，流动性质押服务商给质押用户提供了比普通的节点运营商更具有流动性和可组合性的选择。"

> "对于市值超过3400亿美元，并且在链上承载着超过1400亿美元TVL的以太坊而言，任何在PoS这种底层机制上的微小漏洞都可能对整个系统造成重大的打击，因而任何底层的安全冗余都弥足珍贵。"（关于SSV DVT技术的价值）

> "在未来的Staking赛道，品牌、安全以及去中心化将会成为行业的门槛...竞争的焦点会落在质押衍生品的流动性和可组合性上，而这两者本质上是通过补贴来建立的。"

## 我的笔记
- 本文发布于2022年3月，正值以太坊Merge前夕，是理解Staking赛道早期格局的关键历史文献。需注意Terra生态数据（Stader TVL $8亿/Lido Terra TVL $80亿）在2022年5月Terra崩溃后已归零，阅读时需区分历史事实与当前现实。
- 本文对"流动性质押赛道将陷入补贴大战"的预判极具前瞻性。文中将Lido与a16z投资/Paradigm支持的Uniswap在DeFi之夏中的竞争类比，暗示Lido虽领先但远非安全。这一判断在后续LRT协议（EtherFi/Puffer/Renzo等）通过空投积分和套娃补贴抢夺Lido市场份额的过程中得到验证。
- Mint Ventures在此文中的分析框架（三种类型服务商分类/ETH PoS特殊性/流动性质押vs节点运营商分层）质量很高，但缺少对Terra LUNA风险的任何讨论——这反映了2022年初市场对Terra风险的普遍低估。这也是机构研究固有的局限性：专注于协议分析而轻宏观尾部风险。
