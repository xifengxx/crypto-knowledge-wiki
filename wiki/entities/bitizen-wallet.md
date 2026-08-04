---
type: entity
entity_type: project
created: 2026-06-30
updated: 2026-06-30
tags: [wallet, mpc, keyless, web3]
---

# Bitizen Wallet

## 基本信息
- 类型：Keyless & Seedless 加密钱包（MPC/SMPC 架构）
- 官网：https://bitizen.org/
- 赛道：Web3 钱包基础设施
- 成立时间：约 2022 年前后（基于 Medium 文章发布时间）

## 核心技术：三方 MPC

Bitizen 使用 **安全多方计算（MPC/SMPC）** 实现无密钥、无种子的钱包架构。

### 密钥生成（MPC KeyGen / DKG）
不生成完整私钥。三个独立方（服务器、用户手机、用户第二设备）协同运行分布式密钥生成协议，各自生成独立的**密钥分片（Key Shares）**，任何时刻都不存在完整私钥。

### 交易签名
用户有两个签名选项：
- 手机 + Bitizen 服务器共同签名
- 手机 + 第二设备（第二手机/电脑/iPad）共同签名

后一选项让用户可脱离 Bitizen 服务器独立操作，实现"完全抗审查"。

## 账户恢复：3FA 方案
不使用助记词。三层恢复机制：
1. 生物识别/人脸识别
2. 邮箱验证
3. 个人云存储备份

还有离线 2FA 恢复方案，无需连接 Bitizen 服务器即可恢复。任何一层不可用时，可通过其他子选项恢复。Bitizen 声称在任何情况下均无法访问用户资金或私密信息。

## 安全定位
Bitizen 将自己定位为安全性最高的钱包类别——高于 Web Wallets、Browser Extension、Mobile App 和 Hardware Wallets，因为在 MPC 架构中不存在私钥/助记词这个单点故障。

## 风险 / 待验证
- MPC 消除了私钥单点故障，但引入新的信任假设：三方参与者的合谋风险、3FA 各层的社会工程攻击面
- "完全抗审查"依赖于脱离 Bitizen 服务器的签名路径是否真正去中心化
- 项目 2022 年后的发展情况、用户规模、融资信息尚待补充
- 依赖多方协同签名的架构是否会影响交易确认速度和用户体验

## 相关实体
- [[metamask]] — 传统浏览器插件钱包代表，Bitizen 的竞争/替代对象
- [[safe]] — 基于 AA 智能合约的多签钱包，与 Bitizen 从不同技术路径解决同一问题

## 相关概念
- [[account-abstraction]] — ERC-4337/智能钱包，与 MPC 钱包从不同路径消除私钥
- [[decentralized-identity]] — 钱包是 Web3 DID 的基础设施层

## 来源
- [[来源_2022-11_加密钱包完整指南_Bitizen]]
