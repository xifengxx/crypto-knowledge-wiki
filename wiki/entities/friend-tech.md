---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-07-02
tags: [socialfi, base, bonding-curve, paradigm]
---

# Friend.tech

## 基本信息
- 类型: 去中心化社交金融应用（SocialFi）
- 链: Base（OP Stack L2）
- 上线时间: 2023年8月
- 创始团队: 0xRacerAlt (Racer) 为核心开发者，此前创立过 TweetDAO（2022.4，Eggs NFT）和 Stealcam（2023.3，Arbitrum，图片NFT付费开图）
- 融资: Paradigm 种子轮（金额未披露，2023年8月公布）
- 当前状态: 已大幅衰退（2024年TVL从$30M峰值近乎归零，代币FRIEND价格暴跌95%+）

## 核心业务/产品
将社交网络代币化——用户通过ETH购买KOL的"share"（份额/Key）来加入其私密聊天室，卖出share则退出。核心机制：
- **Bonding Curve定价**: Price(ETH) = x² / 16000，x为当前总份额供应量
- **费用结构**: 每笔交易10%费用（5%分配给该KOL的所有share持有者 + 5%归Friend.tech国库）
- **积分系统**: 6个月测试期分发1亿积分，每周五空投，积分不上链（空投预期驱动）
- **产品特性**: 邀请制（仅邀请码注册）、PWA手机端独占（不支持PC）、自托管钱包（privy.io）、两层聊天室（房主+访客）

## 关键数据
- 10天初期数据（截至2023/08/19）: 交易量>11,000 ETH / 独立用户>39,000 / 交易>518,000笔
- 10天国库收入: 579 ETH（~$96万）
- 价格公式: y = x² / 16000（ETH计价）
- 买入-卖出价差: 买入后立刻卖出必亏损（以Cobie为例: 1.0080625 ETH买入→实际到手仅0.893025 ETH，秒亏0.115038 ETH）
- 盈利条件递推: 入场位置1~18→需+2人/19~36→+3人/37~55→+4人/56~73→+5人（示例: 位置127→需+8人至135份额才盈利0.00196 ETH）
- Paradigm融资公布后峰值: 单小时买家>1,700人（历史新高）
- 2024年衰退: TVL从~$30M暴跌至近乎归零，FRIEND代币跌95%+

## 隐私风险
Friend.tech存在两条主要隐私泄露链路:
1. **公开API暴露**: 查询API直接暴露任意Twitter ID与其FT钱包地址的绑定关系
2. **跨链追溯**: 用户从原始Ethereum钱包向FT钱包跨链转账→通过索引跨链交易信息可追溯到用户主链钱包→暴露所有链上活动

@0xfoobar最早发现该漏洞并开发了Friends Wrap合约（0x68250Bf6d105Fe33f3120C5AfF385160d54EB5F2），允许通过该合约直接从FT官方合约购买份额并ERC20化。

## 历史意义与评价
Friend.tech是2023年SocialFi最现象级产品，也是"纯金融化社交"的巅峰和墓碑:
- **开创性**: 首个将bonding curve大规模应用于社交的产品，群share定价机制被后来的pump.fun等大量借鉴
- **核心矛盾**: 金融属性（投机/空投/庞氏）远大于社交属性（群聊功能单一），空投结束后无留存抓手
- **教训**: 社交迁移成本高+中心化社交先发优势→历史上几乎无成功去中心化社交产品。当赚钱预期消退，社交留存归零

## 相关实体
- [[base]] — 运行所在公链，friend.tech是Base第一个破圈应用
- [[paradigm]] — 种子轮投资方（待创建）
- [[pumpfun]] — bonding curve定价机制的后继借鉴者
- [[farcaster]] — 同赛道竞争者，更强调社交功能本身

## 历史意义与评价补充（IOSG Ventures 2025视角）
IOSG Ventures 在 2025年4月的综述中补充了 Friend.Tech 失败的诊断角度：Bonding Curve 引入投机属性，短期内依靠财富效应吸引用户，但中长期提高了用户进入社区的门槛，且 Token 与产品实用性过度捆绑导致投机用户过多、脱离产品价值。同时提出"应用工厂模式"视角：Friend.Tech 虽然在意识形态上被视为失败，但其营收能力($24.3M Protocol Fee)和用户基数(918,888 traders)反而是下一阶段转型的资产。

## 来源
- [[来源_2023-08_FriendTech运作原理_套利策略_隐私风险_Bitget]] — bonding curve具体运作机制 + 套利策略数学边界 + 隐私泄露链路完整分析
- [[来源_2023-08_friend_tech深度解析_Paradigm加持_吴说]] — 创始人背景/Paradigm效应/初期市场数据
- [[来源_2023-08_FriendTech_SocialFi_LD_Capital]] — LD Capital 视角早期全景分析：62.6K 交易/4.4 万买方/1.6 万卖方/TVL $624 万/Base 链第 9、Cobie 空投 $55 万估值、A 轮 $5,000 万融资传闻、积分经济模型、10% 费用结构
- [[来源_2023-09_ABCDE_FriendTech_经济模型]] — 经济模型拓展：x² vs S曲线 vs 恒定价格曲线优劣分析
- [[来源_2023-09_FriendTech_Ponzi_社群设计_Sukie]] — 社群运营者视角：囚徒困境博弈设计/三层Ponzi运营框架/动态bonding curve设想/FT社交结构硬伤诊断（一对多沟通必然导致群死亡）
- [[来源_2024-08_各链预测市场现状_Polymarket_Azuro_PredX_MarsBit]] — 影响力外溢：PredX 采用类 FT 债券曲线票价系统设计先发优势，bonding curve 机制从 SocialFi 迁移至预测市场赛道
- [[来源_2025-04_Web3消费者应用_投资理论_IOSG]] — IOSG Ventures 进一步诊断 Friend.Tech 失败原因（过度 Token 捆绑导致用户脱离产品价值），并提出"应用工厂模式"视角重新评估 Friend.Tech 的转型潜力
- [[来源_2025-04_Web3叙事退潮_明星项目_深潮TechFlow]] — 确认 FriendTech 于 2024 年 9 月正式关闭；从"叙事动能"维度定义 FriendTech 为叙事、产品、使用数据同步消失的罕见案例
