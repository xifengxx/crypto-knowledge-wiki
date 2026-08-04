---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [dao, compensation, tooling, nft]
---

# Hedgey

## 基本信息
- 类型：DAO 补偿工具 / 代币锁仓分发协议
- 定位：通过 NFT 包装器实现时间锁定代币的分发，使贡献者在锁仓期内保留治理投票权
- 链：Gnosis Chain（早期）/ 多链
- 核心产品：Hedgey Snapshot Strategy（锁定代币保留投票权）、Time-Locked Distribution Boost（批量发送 NFT 包裹代币）

## 核心业务/产品
- **NFT 包装器锁仓**：将原生代币锁定在 NFT 包装器中分发给贡献者，NFT 显示锁定代币数量和可赎回日期，贡献者可查看但无法提前解锁
- **Hedgey Snapshot 策略**：锁定代币保留与流动代币相同的投票权，可与其他 Snapshot 策略合并，实现"锁仓不丧失治理权"
- **Time-Locked Distribution Boost**：DAOhaus Boosts Marketplace 上的插件，允许任何使用 DAOhaus 平台的 DAO 向多个贡献者发送包裹在 NFT 中的时间锁定代币

## 关键数据
- 2022 年已被 DAOhaus（首个用户）和 ShapeShift 用于月度薪酬分配
- ShapeShift 通过 Hedgey 实现贡献者在 FOX 中选择薪酬部分 + 时间锁定奖金（锁仓越长红利越大）
- DAOhaus 贡献者锁定 HAUS 一年可赚取双倍 HAUS

## 竞争优势 / 护城河
- 解决"锁仓 = 放弃治理"的根本矛盾：锁定代币通过 Snapshot 策略保留完全投票权
- 将抽象的锁仓机制转化为可视化 NFT，贡献者可直观看到锁定资产和到期日
- 作为 DAOhaus Boost 市场的一部分，获得 DAOhaus 生态的天然分发渠道
- 混合薪酬模型（稳定币 + 锁仓原生代币）的支付层基础设施

## 风险 / 争议
- 依赖 DAO 代币市场价值——如果代币价格归零，锁仓"奖励"失去意义
- 2022 年熊市后 DAO 叙事整体降温，可能影响 Hedgey 的用户增长
- 在更广泛的代币分发场景中可能面临 Streamflow、Sablier 等持续支付协议的竞争

## 相关实体
- [[daohaus]] — 首个采用 Hedgey 的 DAO，也是 Hedgey 的分发渠道
- [[shapeshift]] — Hedgey 的另一个主要采用者，通过月度薪酬分配使用
- [[coordinape]] — 互补工具：Coordinape 决定薪酬分配权重，Hedgey 执行锁仓分发

## 来源
- [[来源_2022-08_DAO补偿_Coordinape_Hedgey]]
