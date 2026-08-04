---
type: entity
entity_type: organization
created: 2026-07-02
updated: 2026-07-02
tags: [hacking, north-korea, security, cybercrime]
---

# Lazarus Group

## 基本信息
- 类型：国家背景黑客组织（朝鲜DPRK）
- 别名：APT38、Guardians of Peace、ZINC
- 归属：朝鲜侦察总局（RGB）
- 活跃时间：2009年至今
- 关注领域：加密货币盗窃、金融机构攻击、勒索软件

## 关键事件

### 加密盗窃年度数据
- **2023年**：20起事件，窃取$6.605亿
- **2024年**：47起事件，窃取$13.4亿
- **2025.02.21**：Bybit黑客（401,000 ETH，价值$14亿+），单次事件超过2024年全年总和

### Atomic Wallet 钓鱼攻击（2023.06）
史上最具破坏性的纯网络钓鱼攻击之一。攻击特点：
- **入侵 5,500+ 个非托管钱包**，盗取超过 **1 亿美元**的加密货币
- **无需用户签署任何恶意交易或与智能合约交互**——纯凭欺骗性界面和恶意软件提取助记词和私钥
- 攻击方式包括：伪装客户支持的虚假电子邮件、模仿钱包恢复/空投界面的钓鱼网站、通过 Discord/论坛分发的恶意更新
- Atomic Wallet 支持 500+ 加密货币的多链非托管性质扩大了攻击的覆盖面

### Bybit黑客（2025.02.21）
史上最大加密货币盗窃案（约14.6亿美元）。攻击路径：
- 通过社会工程学入侵Safe{Wallet}员工电脑
- 利用访问权限修改AWS S3上的JavaScript脚本
- 植入恶意代码以篡改多签交易细节
- 利用Bybit签名者的盲签（盲签硬件钱包数据，依赖已感染的Web前端）
- 执行后门函数（sweepETH/sweepERC20）从Bybit冷钱包转移资产

**技术细节（SlowMist分析）**：
- UTC 2025-02-19 07:15:23 预部署恶意实现合约（0xbDd077f651EBe7f7b3cE16fe5F2b025BE2969516）
- UTC 2025-02-21 14:13:35 通过三个Safe多签Owner签署交易，用DELEGATECALL将恶意逻辑合约写入STORAGE 0存储，替换Safe合约为恶意版本
- 权限检查方式与WazirX黑客、Radiant Capital黑客完全一致（合约中硬编码owner地址，错误信息相似），表明是同一工程化攻击方案
- 此模式已用于：WazirX（$230M, Safe多签）、Radiant Capital（$50M, Safe多签）、DMM Bitcoin（$305M, Gnosis多签）

## 攻击手法特征
- 多阶段社会工程学（非技术漏洞，而是基础设施层面入侵）
- 利用第三方安全基础设施（Safe{Wallet} AWS S3）作为跳板
- 盲签漏洞绕过硬件钱包安全设计
- 币安链上资产清洗与地址合并

## 相关实体
- [[bybit]] — 2025年2月遭Lazarus Group盗窃$14亿+
- [[gnosis]] — Safe{Wallet}背后的开发团队，其AWS S3基础设施被入侵作为攻击跳板
- [[slowmist]] — SlowMist安全团队识别出Bybit/WazirX/Radiant Capital攻击模式的一致性

## 来源
- [[来源_2025-02_VanEck_加密货币月度回顾]] — Bybit黑客详细技术分析、Lazarus Group 2023-2024年盗窃数据、Chainalysis链上分析
- [[来源_2025-06_加密安全指南_社会工程学_深潮TechFlow]] — Atomic Wallet 钓鱼攻击（2023.06，5,500 钱包，1 亿美元+）和 Ronin Bridge 社会工程学渗透细节
- [[来源_2025-07_加密犯罪年中报告_被盗资金_Chainalysis_深潮TechFlow]] — Chainalysis 2025 年中报告确认 Lazarus Group 的 Bybit 攻击为史上最大单次加密盗窃，2025 年朝鲜相关损失已远超此前最高年度纪录（2024 年 13 亿美元）
- [[来源_2025-02_Bybit被盗_Safe多签攻击_深潮TechFlow]] — SlowMist安全团队发布的Bybit黑客技术分析，确认Lazarus Group使用工程化攻击模式
