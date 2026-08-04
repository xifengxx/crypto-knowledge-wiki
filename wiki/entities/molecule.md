---
type: entity
entity_type: company
created: 2026-07-02
updated: 2026-07-02
tags: [desci, biotech, ip, fundraising]
---

# Molecule

## 基本信息
- 定位: 去中心化科学（DeSci）基础设施平台，通过民主化资助和IP代币化推进科学研究
- 赛道: DeSci / 生物科技 / IP代币化
- 创始人/CEO: Paul Kohlhaas（同时是VitaDAO白皮书作者、BIO Protocol联合创始人兼CEO，前ConsenSys）
- 联合创始人: Tyler Golato（同时是VitaDAO、BIO Protocol联合创始人）
- 融资: 2022年6月 $13M种子轮（Northpond Ventures领投，Backed VC、Shine Capital、Speedinvest、Balaji Srinivasan参投）；2023年12月 Sora Ventures $1M

## 核心业务: 三大引擎架构

Molecule通过三个模块构建DeSci完整价值链：

### 1. Catalyst — 科学项目公平发行平台（IP层）
- **IP-NFT**: 将研发项目的潜在知识产权捆绑到一个NFT中，结合两个法律合约与一个智能合约，实现IP和研发数据权利的链上注册和管理
- **IPT (IP Token)**: IP-NFT的治理代币，持有者享有IP部分治理权、研发进展更新和详细报告的知晓权，但不赋予持有人从资产商业化中获得有保证的财务回报或收入分享的权利
- **融资机制**: 在Base上以ETH投入，价格遵循联合曲线；达到目标后进入谈判阶段（最多12周），完成后铸造IP-NFT并发行的IPT；若融资失败或谈判失败，全额退款；中途提取资金扣除5%费用
- **当前项目**: 阿尔茨海默病抗体、通过可移植组织恢复大脑功能、工程纤维、牙釉质侵蚀、针对炎症和衰老相关的酶等

### 2. BIO Protocol — 自下而上的DeSci新金融层（金融层）
详见 [[bio-protocol]]。BIO Protocol由Molecule团队创建，作为BioDAO的策展、资助、流动性和治理协议。

### 3. pump.science — 无门槛科学实验与筹资平台（用户层）
详见 [[pump-science]]。Solana基金会资助，基于Pump.fun构建，允许任何人提交长寿干预方案并为实验筹集资金。

## 三大引擎的关系
```
Catalyst（IP代币化+专业科研融资）
    ↓ 输出IP资产
BIO Protocol（BioDAO策展+流动性+元治理）
    ↓ 孵化BioDAO + 提供流动性
pump.science（实验代币化+大众参与）
    ↓ 用户直接参与科研实验
科研实验 → 数据反馈 → IP价值 → 代币价值
```

## 关键数据
- 种子轮: $13M（2022年6月）
- Sora Ventures追加: $1M（2023年12月）
- pump.science上两项实验市值: RIF $190M + URO $97M（2024年12月）
- BIO Protocol Genesis融资: $33.06M
- Molecule持有BIO分配: 5% + Molecule生态基金5% = 10%
- 回购承诺: 分别回购$100K RIF和$100K URO（2024年12月）

## 竞争优势 / 护城河
- **全栈DeSci布局**: 唯一覆盖IP代币化、金融层、用户实验层的DeSci基础设施——Catalyst → BIO → pump.science形成闭环
- **团队积累**: Paul Kohlhaas从ConsenSys到VitaDAO到Molecule到BIO Protocol，在DeSci领域深耕多年
- **Binance背书**: 关联项目BIO Protocol获Binance Labs首次DeSci投资，为Molecule生态带来顶级CEX的合规和流动性支持
- **Solana生态**: pump.science获Solana基金会直接资助，占据Solana DeSci生态位

## 风险 / 争议
- 三大引擎之间的治理和代币经济关系复杂（BIO、Molecule、各BioDAO代币间的价值捕获路径不清晰）
- IP-NFT的法律效力未经充分验证——链上IP权利能否在现实世界中获得专利保护仍是未知
- Catalyst上的融资机制（联合曲线+锁定）与pump.science上的投机机制（自由交易+PvP）存在内在张力
- ⚠️ 命名冲突: wiki中已有 `catalyst.md` 对应跨链流动性协议Catalyst（SevenX报告），与Molecule的Catalyst是完全不同的项目

## 相关实体
- [[bio-protocol]] — Molecule团队创建的DeSci金融层协议
- [[pump-science]] — Molecule旗下Solana生态实验代币化平台
- [[vita-dao]] — 由Paul Kohlhaas联合创建，Molecule/BIO生态中最大的BioDAO
- ⚠️ [[catalyst]] — **注意区分**: 本wiki的catalyst.md是跨链流动性协议，不是Molecule的Catalyst科学IP平台

## 来源
- [[来源_2024-12_RIF_URO飙升_Molecule三大引擎_BlockBeats]] — Molecule三大引擎架构详解、IP-NFT/IPT机制、融资历史、创始人背景、pump.science实验成本梯度
- [[来源_2024-12_DeSci_Meme价值之争_PANews]] — Pump.Science"Rif圣诞节"20天20个代币密集发行、平台AI交易机器人开发方向、Molecule旗下平台偏离严肃科研的质疑
- [[来源_2025-03_DeSci_科研革命_传统科学缺陷_PANews]] — 补充了 Molecule 的 Catalyst 平台全流程说明（研究提案→IP-NFT铸造→IP Token分配）、IP-NFT 两项法律协议架构（研究协议&转让协议）、Catalyst Bonding Curve 定价机制
- [[来源_2025-02_DeSci_Pump_制药业_PANews]] — 补充Catalyst/BIO/pump.science三层架构中的IP代币化机制（IP-NFT到IPT），BioDAO通过Molecule持有3300万通证化IPT，Big Pharmai作为ai16z对应方AUM超100万
