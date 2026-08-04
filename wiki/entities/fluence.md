---
type: entity
entity_type: project
created: 2026-07-02
updated: 2026-07-02
tags: [depin, compute, cloud, decentralized-infrastructure]
---

# Fluence

## 基本信息
- **赛道**: DePIN / 去中心化云计算（Cloudless 平台）
- **成立时间**: Tom Trowbridge（前 Hedera Hashgraph 联合创始人/总裁）联合创立
- **代币**: FLT
- **定位**: 企业级、低成本、高韧性的去中心化开放计算平台
- **创始人播客**: DePINed（领先的 DePIN 主题播客）
- **融资背景**: 创始团队由传统金融（Goldman Sachs）/ 科技公司背景组成

## 核心业务/产品
Fluence 构建"Cloudless"平台——一个去中心化、开源的计算平台，提供企业级的低成本和韧性计算服务。属于 Cloud DePIN 类别，与 [[ai-crypto]] 和 [[depin]] 赛道深度关联。

## 代币经济模型（本文核心贡献）

Fluence 的代币模型被 Tom Trowbridge 作为"最佳实践"标杆在报告中频繁引用，包含三大创新设计：

### 1. USD 计价奖励
- 网络参与者（CPU 提供者）每月获得以 FLT 支付的代币奖励，但奖励在系统中以美元计价
- 奖励标准：**$10/核/月**
- 当 FLT 价格波动时，每天调整发放的代币数量以抵消波动
- 优势：提供者对收入有更高确定性，吸引"类似公用事业"的机构提供者
- 代币升值时的通缩循环：FLT 升值 → 需发放更少代币 → 减少稀释 → 进一步推高价格

### 2. USD 计价质押（Fiat-Denominated Stake）
- 质押要求：**$12,000/CPU**，以 FLT 部署但以美元定价
- 质押期限：1 到 12 个月不等
- 当 FLT = $0.25 时需要 48,000 FLT；当 FLT = $1 时需要 12,000 FLT
- 可预测的 FLT 需求：每新增 10,000 个 CPU 就需要 $120M 的 FLT 用于质押
- 对安全模型的明确保障：无论 FLT 价格如何，每 CPU 始终有 $12,000 的质押价值做保障

### 3. 开放质押（Open Staking）
- 不仅硬件提供者可质押，任何代币持有者均可质押
- 已吸引 Parasail 液体质押协议参与，为小型/非专业质押者提供服务
- 将提供者和代币持有者的利益解耦：专业硬件提供者不必持有大量 FLT

### 4. 治理机制
- 去中心化 DAO 投票，但治理委员会有一周否决权
- 委员会每两年由 DAO 选举产生，防止委员会偏离社区利益

## 竞争优势 / 护城河
- 代币经济学的系统性创新：USD 计价质押+奖励是行业首创
- 创始团队经验：Hedera Hashgraph (HBAR, top 15 coin) 创始人背景
- 通过 DePINed 播客和 DePIN Day 峰会建立的行业影响力

## 相关实体
- [[parasail]] — Fluence 的液体质押合作伙伴
- [[filecoin]] — 同为 Cloud DePIN，但采用不同代币模型
- [[io-net]] — 同为去中心化计算，采用代币数量计价质押（200 IO/GPU）
- [[storj]] — 同为 USD 计价奖励模型的 Cloud DePIN

## 来源
- [[来源_2025-04_DePIN_代币经济_报告_Fluence]]
- [[来源_2025-03_Delphi_DePin生态项目_DelphiDigital]] — Delphi Digital 将其作为分布式计算代表项目纳入计算网络赛道关注列表
