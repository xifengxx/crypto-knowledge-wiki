---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-30
tags: [socialfi, social-graph, identity, did]
---

# CyberConnect

## 基本信息
- 类型：去中心化社交图谱协议
- 赛道：SocialFi 基础设施 / 社交图谱
- 活跃时期：2021年至今
- 代币：$CYBER（去中心化治理和代币激励模型）

## 核心业务/产品
- **社交图谱协议**：用户完全控制自己的社交连接（添加、删除和更新），与 Ceramic 合作使用其可变数据流存储系统，采用防篡改数据结构，每条以用户为中心的数据表示为一个数据流，只有数据所有者才能更新
- **数据索引器**：解决社交图谱数据查找问题，可轻松检索关注者列表并恢复对方关注者列表
- **CyberChat**：适用于所有区块链用户的无需信任的 Web3 聊天应用
- **Link3**：建立在社交图谱协议之上的信息与链接聚合服务，可将链上/链下的各种社交平台身份、链接、个人资料、学历以及 Web3 资料（钱包地址、NFT 等）聚合到一个主页中
- **Link3 Event Planner**：2022年9月推出，上线不到一个月内举行了 128 场 AMA

## 关键数据
- 种子轮：$1000 万，Multicoin Capital 和 Sky9 Capital 共同领投，Animoca Brands、Draper Dragon、Hashed、Zoo Capital、Smrti Lab 和 Mask Network 等参投
- A 轮：$1500 万，Animoca Brands 和 Sky9 Capital 共同领投，Delphi Digital、Protocol Labs、IOSG Ventures、Tribe Capital、GGV Capital、Spartan Group、Amber Group、Polygon Studios 和 SevenX Ventures 参投
- 协议不绑定到单个区块链，支持来自所有区块链的连接
- 社交图谱数据存储为单边连接（只在用户表中存储关注者列表），只有获得解密密钥的各方才能读取加密后的数据

## 竞争优势 / 护城河
- 跨链社交图谱：不同于单链绑定方案，CyberConnect 支持所有区块链
- 防篡改+加密的数据结构：用户完全控制数据，平台无法篡改
- 与 Ceramic 的深度集成：利用 Schema 实现跨应用数据可组合性
- 用户自己控制社交图谱，应用开发者可以利用用户连接扩展功能，但无权控制

## 风险 / 争议
- SocialFi 赛道整体处于早期阶段，用户增长存在瓶颈
- 社交图谱协议的"网络效应"需要在大量应用接入后才显现

## 相关实体
- [[ceramic]] — 底层数据存储：CyberConnect 使用 Ceramic 的可变数据流存储系统
- [[lens-protocol]] — 竞品/互补：Aave 团队打造的 Web3 社交协议，Profile NFT 方案

## 来源
- [[来源_2022-11_抢占SocialFi先机_Web3社交_资本布局_PANews]] — 社交图谱协议详细分析，含融资信息和技术架构
- [[来源_2022-12_Lens_Protocol_社交图谱_FirstVIP]] — 2022年12月竞争格局分析：CyberConnect定位于底层社交图谱技术与其他项目集成，相比于Lens Protocol更侧重生态孵化，CyberConnect在与外部项目的交互上表现更好；计划推出CyberChat即时通讯扩展社交图谱应用
- [[来源_2022-09_DID赛道全景_灵魂三问_A&T]] — 作为链上社交图谱信息聚合协议的代表项目，与KNN3 Network、RSS3并列为身份聚合层的信息聚合协议
- [[来源_2022-08_Web3投资创业_云九资本_牛凤轩]] — 云九资本作为种子轮和A轮领投方，补充投资背景
