---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [layer1, socialfi, farcaster, sharding]
---

# Snapchain

## 基本信息
- **类型**: Layer 1 区块链（社交专用）
- **赛道**: SocialFi / 社交L1公链
- **核心卖点**: 专为Farcaster社交网络打造的Layer1区块链，采用分片和账户级隔离解决社交网络扩展问题
- **开发主体**: Merkle Manufactory（构建Farcaster协议的公司）
- **融资**: Snapchain本身是技术组件而非独立实体；Merkle Manufactory在2024年5月完成1.5亿美元融资轮次，Paradigm领投，a16z crypto、Haun Ventures、USV、Variant、Standard Crypto参投
- **主网进度**: 创世区块已激活，主网计划2025年4月15日正式上线

## 核心业务/产品
- 专为去中心化社交网络（Farcaster）打造的L1，解决数据同步困难和实时更新延迟问题
- **分片技术**：受Near模型启发，将用户分散到多个分片中，每个分片仅处理其所属用户的事务；用户数量增长时分片数量增加，系统吞吐量随之提升
- **数据修剪**：旧数据（帖子、点赞、关注）一旦不再需要即可删除，为新交易腾出存储空间
- 用户每年支付2或3美元，可获得每小时500笔交易的处理速度和约1万笔交易的存储限制
- 最终层：一条将各分片打包并发布全局区块的主链

## 关键数据
- 主网启动时：9000+ TPS，可承载200万日活跃用户
- 当前Farcaster日活跃用户数：约5万（截至2025年3月）
- Farcaster总用户：90万
- 比较对象：Twitter拥有2亿日活跃用户，每秒钟处理事务数（TPS）达1万，状态数据日增长量在1TB到10TB之间
- Merkle Manufactory融资：1.5亿美元

## 竞争优势 / 护城河
- "先应用后发链"策略（与Hyperliquid类似）：先构建Farcaster实际应用场景，再为其添加区块链底层
- 社交行为足够简单（只影响发送者自身），使账户级分片变得可行，以太坊因共享状态无法轻易实现
- Coinbase钱包整合社交媒体信息流的计划——"这可是件大事"
- 数据删除功能（"发了表情包后悔了怎么办？它必须消失！"）解决了区块链上不适当内容不可删除的痛点

## 风险 / 争议
- Farcaster仅5万DAU和90万总用户，规模远小于Twitter等社交平台
- 去中心化社交网络能否获得大规模采用仍是未解之谜
- 代币详情尚未公布

## 相关实体
- [[farcaster]] — Snapchain为之构建的社交网络协议
- [[hyperliquid]] — 同为"先应用后发链"的成功案例
- [[paradigm]] — Farcaster/Snapchain领投方
- [[a16z]] — Farcaster/Snapchain参投方
- [[lens-protocol]] — 竞争对手（选择zkSync方案）

## 来源
- [[来源_2025-03_新公链_稳定币_顶级项目_PANews]]
