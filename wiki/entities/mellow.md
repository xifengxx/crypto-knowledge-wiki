---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [restaking, lrt, defi]
---

# Mellow

## 基本信息
- **类型**：无许可以LRT市场协议
- **赛道**：Restaking / 流动性再质押
- **官网**：https://docs.mellow.finance/

## 核心业务/产品
Mellow 正在建设一个无许可的LRT（流动性再质押代币）市场，旨在解决EigenLayer当前的中心化问题。其核心设计理念是"拉取模式"（Pull Model）替代EigenLayer的"推送模式"（Push Model）：

**EigenLayer的推送模式问题**：
- 资本提供者先存入LST，然后必须手动选择并委派给节点运营者
- 小节点运营者难以被发现（排在节点列表第100页）
- 低于大型LRT协议（如Etherfi）的利润门槛，无法被审核

**Mellow的拉取模式解决方案**：
- 节点运营者从资金池中请求委派，而非被动等待资本提供者选择
- 任何人可以构建自己的LRT，代表不同的风险偏好
- 系统中可以存在数百个风险谱系点，而非当前的约半打中心化LRT
- LRT的风险承保政策完全透明（当前中心化LRT的政策是不透明的）

## 关键数据
- 来源：[[来源_2025-03_代币经济学_代币化结构化产品_tokenomicsexplained]]

## 竞争优势 / 护城河
- 无许可架构允许更多节点运营者参与，降低AVS的节点运营集中化风险
- 支持多样化的风险谱系，满足不同资本提供者的风险偏好
- 透明化的风险承保政策，对比当前中心化LRT的不透明政策

## 风险 / 争议
- 需求端（AVS）的PMF尚未验证——Restaking生态目前的需求是否足以支撑数百个差异化LRT？
- Rocketpool的类比并不完美：Rocketpool仅服务ETH质押一种服务，而Mellow需要面对数百个AVS的多样化风险参数
- Rocketpool多年迭代后仍在大幅调整tokenomics，Mellow的复杂性远超Rocketpool

## 相关实体
- [[rocket-pool]] — 拉取模式的先驱，RPL质押作为节点运营者的安全保证金
- [[eigenlayer]] — 推送模式的代表，Mellow试图解决的集中化问题的根源
- [[ether-fi]] — 当前最大的中心化LRT协议之一

## 来源
- [[来源_2025-03_代币经济学_代币化结构化产品_tokenomicsexplained]] — Mellow正在建设无许可LRT市场
