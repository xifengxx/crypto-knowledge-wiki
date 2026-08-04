---
type: entity
entity_type: protocol
created: 2026-06-29
updated: 2026-06-29
tags: [privacy, mpc, access-control, infrastructure, identity]
---

# Lit Protocol

## 基本信息
- 类型：去中心化密钥管理和访问控制协议
- 赛道：Web3 身份基础设施 / 隐私与访问控制
- 核心技术：MPC（安全多方计算）在 Lit 网络节点之间分配私钥份额
- 密钥表示：公钥/私钥对由 PKP（可编程密钥对）NFT 表示，所有者是密钥对的唯一控制者

## 核心业务/产品
- **PKP（可编程密钥对）**：NFT 形式存在的密钥对，拥有者触发网络聚合密钥份额以代表他们解密文件或签署信息
- **Lit Actions**：部署在 IPFS 上的代码，在签署证书之前执行可编程检查；课程创建者可将"通过测试"的条件部署为 Lit Action
- **访问控制**：用户定义链上条件（如 NFT 所有权），合格钱包签署消息后节点检查区块链，若符合条件则聚合密钥份额解密文件
- **跨域应用**：同基础设施可用于解锁 Shopify 折扣、上锁的 Zoom 房间、Gathertown 空间、现场直播和 Google Drive 访问

## 关键数据
- 利用 MPC 技术在网络节点间分配私钥"份额"，需满足任意定义的条件才能触发份额聚合
- 与 Orbis 集成：私信在存储前首先通过 Lit 进行加密
- 与 Tableland 组合：可使用 Lit 作为去中心化加密系统委托解密权限
- Lit PKPs 可让应用"拥有"Ceramic 流，授予 Lit Actions 在满足任意条件下签署和更新数据库的能力

## 竞争优势 / 护城河
- 链上条件 → 链下资源访问的独特桥接能力
- 可编程性：Lit Actions 允许将任意逻辑嵌入加密/解密流程
- 跨生态组合性：与 Ceramic、Tableland、Kepler 等身份堆栈项目深度集成
- 不仅限于 Crypto 场景：可解锁 web2 体验（Shopify、Zoom、Google Drive）

## 风险 / 争议
- MPC 技术的安全性假设和节点网络的去中心化程度待验证
- 解决方案复杂度可能限制开发者采用

## 相关实体
- [[ceramic]] — 组合使用：应用拥有 Ceramic 流，Lit Actions 在满足条件下签署和更新数据库
- Kepler — 互补项目，用户控制数据库
- Orbis — 集成案例：私信通过 Lit 加密后存储在 Ceramic

## 来源
- [[来源_2022-12_Web3身份堆栈_去中心化身份_DID_Web3Caff]] — Lit 在访问控制层的详细机制和组合案例
- [[来源_2022-05_代币商业_Shopify_NotBoring]] — 被列为Shopify四大代币化应用合作伙伴之一（2022年5月），为Shopify商家提供代币门控支持
