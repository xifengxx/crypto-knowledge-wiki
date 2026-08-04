---
type: source
source_type: article
url: https://www.odaily.news/post/5198173
date: 2024-09-05
ingested: 2026-06-30
---

# 盘点八大Babylon生态流动性质押协议，谁是TVL龙头？

## 阅读证据
- 总行数: 120
- Q1 (前25%): Babylon主网第一阶段质押于8月22日开启，仅7个区块便达到1000 BTC上限，网络Gas费飙升至上千聪/字节
- Q3 (中后25%): Solv Protocol在Babylon第一阶段质押中成功委托250枚BTC占比25%，solvBTC.BBN总铸造量已超3230枚
- Q4 (最后25%): SatLayer不将BTC存入Babylon，而是为LSD平台提供额外收益机会，目前质押量达132.54枚BTC其中75%以上是uniBTC
- 图片: 7张外部URL图片（piccdn.0daily.com），为协议数据面板截图/信息图表，无法本地访问

## 核心要点
- Babylon主网第一阶段质押（2024.8.22）是BTC质押生息叙事的关键里程碑：仅7区块即达1000 BTC上限，竞争异常激烈，多家LST协议为争夺委托份额展开Gas战
- 八大协议可分为三类：直接委托Babylon的LST协议（Lombard/Bedrock/PumpBTC/Lorenzo/Solv/pSTAKE）、未成功委托的协议（Chakra）、以及基于LST的再质押层（SatLayer）
- Babylon第一阶段质押的最大委托方是Bedrock（297.8 BTC，占比近30%），其次是Solv Protocol（250 BTC，25%）、Lorenzo（129.36 BTC，12.9%）、PumpBTC（118.43 BTC，11.8%）、pSTAKE（10 BTC，1%），Lombard因竞争过大临时决定不将BTC质押进Babylon
- BTC流动性质押的核心难点在于BTC非PoS链无法原生质押，各协议通过不同的托管方案（CubeSigner/安全联盟/Cobo/多重签名保险库）和跨链方案（wBTC/FBTC转换、以太坊铸造LST）解决资产安全与流动性问题
- SatLayer开创了Babylon生态的"再质押层"模式：不直接参与Babylon质押，而是为LBTC/pumpBTC/SolvBTC等LST提供BVS（比特币验证服务），类比EigenLayer的AVS
- Lombard因Gas竞争主动放弃Babylon首阶段质押、Chakra同样未成功委托——说明BTC质押赛道中"委托能力"（Gas策略、节点关系、技术准备）本身构成协议竞争力的重要维度

## 关键数据
- Babylon主网第一阶段质押上限：1000 BTC，7个区块即满
- Bedrock委托量：297.8枚BTC，占比约30%，为Babylon最大委托人
- Solv Protocol：委托250枚BTC（25%），solvBTC.BBN总铸造量3230+枚；总融资超1100万美元
- Lombard：LBTC供应量4400.3958枚，地址数4443；种子轮1600万美元（Polychain领投）
- Lorenzo Protocol：委托129.36枚BTC（12.9%），Cap 1 + Cap 2总质押超507枚BTC
- PumpBTC：委托118.4288枚BTC（11.8%），总供应量349.31枚，质押地址数2333个
- pSTAKE Finance：委托10枚BTC（1%），总融资超2000万美元，比特币总质押量约101枚
- SatLayer：Pre-Seed融资800万美元（Hack VC/Castle Island Ventures领投），质押量132.54枚BTC（超100 BTC上限），uniBTC占比75%+
- Bedrock uniBTC铸造量超501枚，Cap 2阶段预质押目标800枚
- Chakra比特币质押总量25.76枚，未成功委托至Babylon

## 与已有知识的关系
- 补充 [[babylon]] — 提供Babylon主网第一阶段质押的具体委托分布和Gas竞争细节，此前实体页仅描述协议原理
- 补充 [[liquid-staking]] — 为BTC流动性质押添加Babylon生态八大协议的定量比较：SAL架构（Solv）之外的具体竞品数据、委托成功率差异、再质押层（SatLayer BVS）的出现
- 补充 [[restaking]] — SatLayer作为BTC生态的"EigenLayer类比"：BVS（比特币验证服务）对应AVS，LBTC/pumpBTC/SolvBTC对应LST/LRT作为再质押抵押品
- 补充 [[bitcoin-ecosystem]] — 具体量化Babylon质押赛道的协议分布和TVL数据，确认Bedrock/Solv双龙头格局
- 补充 [[solv-protocol]] — Babylon第一阶段委托250 BTC占比25%的具体数据，solvBTC.BBN铸造量3230+枚，为用户承担所有Gas费用的差异化策略

## 值得记住的引用
> "Babylon 凭借其用户资产自托管、为 PoS 链共享比特币安全并获取质押收益等特点，成为了比特币质押生息叙事中的主流。"
> "但因为 Babylon 质押当天竞争过大，Lombard 决定暂时不将 BTC 质押进 Babylon，并将节省出来的费用投入到生态建设中。"
> "Bedrock 是 Babylon 主网第一阶段质押的最大委托人，委托了 297.8 枚 BTC，占比接近 30%。"
> "SatLayer 并不将 BTC 存入 Babylon，而是为 Babylon 上的 LSD 平台再提供额外的收益机会。"

## 我的笔记
这篇文章是Babylon主网上线一个月后的生态快照，提供了宝贵的"第一现场"委托分布数据。最值得注意的不是谁是第一，而是"谁能成功委托"本身就是一个竞争维度——Lombard和Chakra的委托失败说明BTC质押的门槛不仅是产品设计和流动性，还包括Gas策略和技术准备。这提醒我在评估BTC LST协议时，不能只看融资规模和团队背景，还要考察其在Babylon实际质押事件中的执行力。

另一个值得警惕的信号是收益来源的单一性：几乎所有协议的收益目前都严重依赖Babylon的质押收益+自身积分激励，缺乏独立的收益生成能力（除SatLayer尝试BVS外）。一旦Babylon积分预期落空或Babylon主网质押收益低于预期，整个LST生态可能面临流动性退潮。这与以太坊LST生态中Lido能够获取MEV+优先费等多元收益形成鲜明对比。
