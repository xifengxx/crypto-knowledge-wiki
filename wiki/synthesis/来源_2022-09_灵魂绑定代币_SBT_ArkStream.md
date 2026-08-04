---
type: source
source_type: article
url: https://mp.weixin.qq.com/s/TH4Z9nlF7x5DEoqhgi36kw
author: Larissa / ArkStream Capital
date: 2022-09-02
ingested: 2026-07-02
---

# ArkStream Capital：灵魂绑定代币现状和未来方向全解析

## 阅读证据
- 总行数: 318
- Q1 (前25%): 截至2022/8/1，已有916,332个钱包持有POAP徽章，Vitalik在ETHCC 2022称"POAP将是Web3中区分真人与机器人的方式"
- Q3 (中后25%): Farcaster采用半中心化的混合存储方案，被文章视为当前环境下可行的妥协方案——将高优先级信息上链，不重要数据链下保存或委托统一存储服务
- Q4 (最后25%): SBT可以通过构建链上信用积分，再决定不同档位的小额借贷可以无抵押借贷的额度——时间长久、深度参与社群、关系网复杂的账号可以获得更高额度
- 图片: 0 analyzed / 0 decorative / 9 external URLs unavailable（全部来自微信CDN mmbiz.qpic.cn）

## 核心要点
- SBT（灵魂绑定代币）是"关系证明"而非"权威证明"——参与某个活动只证明"参与过"，真正的意义在于大量数据的长期积累形成可信的链上身份画像
- 文章以OSI模型为框架，将SBT的完整链路拆解为三个步骤：信息收集和处理（应用层+表示层）、传输和存储（会话层+传输层）、绑定（网络层+数据链路层+物理层），逐一分析现有项目及存在的问题
- SBT核心应用方向：链上信用借贷（无抵押/低抵押小额贷）、替代部分KYC场景、钱包社交找回、DAO成员贡献量化
- 当前SBT项目的主要问题：数据格式不统一、缺乏时间维度、无统一的协议标准、信息预处理和分级机制缺失
- 隐私被定义为"奢侈品"——提出可编辑隐私（access/editing/cashflow三层分开）和分级收费体系，认为消费隐私会是未来主流
- 绑定关键在于增加"身份更换成本"而非"地址更换成本"——通过时间和金钱投入增加沉没成本，实现自然人与链上身份的强绑定
- 未来四大方向：协议为王（统一标准）、万物上链（行为即证明）、链上信用和DeFi可组合性、隐私编辑再赋能

## 关键数据
- 截至2022/8/1，916,332个钱包持有POAP徽章
- 图2展示POAP的mint数量和钱包持有趋势
- SBT最早概念来源于Vitalik在《Decentralized Society: Finding Web3's Soul》（2022年5月发表）中的描述
- 文章列举了POAP、Quest3、Noox、Project Galaxy、DeQuest、CarvIO、Marry3、DAOU、Burn My Wallet、Farcaster、Flamingle Labs、DefNetwork、IdentDeFi、KNN3、NFTPlay等15+个SBT相关项目
- SBT的合约类型包括EIP-4973（Account-bound Tokens）、EIP-6114（Soulbound Nadges）、ERC721S（Soulbond），均以ERC-721为基础

## 与已有知识的关系
- 补充 [[decentralized-identity]] — 本文从SBT的特定角度深入分析了DID赛道中的灵魂绑定代币，提出了OSI模型分析框架和隐私分级收费的新视角，补充了现有DID概念中关于"绑定机制"和"数据积累"的讨论
- 补充 [[socialfi]] — 本文详细分析了社交图谱（Lens Protocol、CyberConnect）与SBT的结合方式，认为SBT技术可以"事半功倍"地赋能SocialFi
- 补充 [[arkstream-capital]] — 本文是ArkStream Capital的研究产出，展示了其在基础设施/DID赛道的分析框架
- 补充 [[privacy]] — 提出"可编辑隐私"（access/editing/cashflow三层）概念，将隐私分层和定价，是现有隐私公链概念中未涉及的新角度
- 补充 [[galxe]] — 详细说明Project Galaxy（Galxe前身）在SBT语境下的定位：构建数据凭证网络，给链上链下行为发放链上凭证
- 补充 [[farcaster]] — 文中将Farcaster的半中心化混合存储方案作为SBT存储问题的典型参考案例

## 值得记住的引用
> SBT是一个关系证明而不是权威证明，其价值在于数据的大量积累，复杂、丰富和多样性会是SBT数据源的核心竞争力。

> 隐私是奢侈品，可编辑隐私是一个有巨大需求但又充满挑战的赛道。

> 去中心化社会的形成需要自然人与链上身份进行强绑定，增加身份的替换成本，产生身份依赖。

> 整个行业都离不开的共同问题是扩容、存储、安全性、隐私以及去中心化，任何一个底层方向的重大突破足够支撑应用层的蓬勃发展。

## 我的笔记
- 本文写于2022年9月，正值Vitalik DeSoc论文发表后不久。回顾来看，三年后SBT赛道并未如文章预期爆发——核心障碍仍是"数据积累需要时间"和"统一的协议标准缺乏"这两个文章自己也指出的问题。
- 文章对SBT"连接现实身份与链上身份"的愿景在实操层面受到极大挑战：用户对链上隐私的重视程度远高于文章预期的"消费隐私"意愿，且KYC合规化趋势反而加强了对中心化身份验证的需求而非去中心化链上身份。
- 文章提出的"可编辑隐私"（access/editing/cashflow三层分离）概念前瞻性很高，但至今仍无成熟产品落地，说明这个方向的实践难度远超理论框架描述。
- OSI模型分析框架是本文最有原创性的贡献，将复杂的SBT生态分层梳理的思路适用于其他Web3赛道的分析。
