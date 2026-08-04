---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [nft, defi, lending, chainlink]
---

# JPEG'd

## 基本信息
- 类型: 去中心化NFT借贷协议
- 代币: $JPEG（治理代币，无经济价值）
- 总供应量: 69,420,000,000枚
- 相关链接: https://jpegd.io/

## 核心业务/产品
JPEG'd 允许NFT持有者将NFT作为抵押品借出稳定币PUSd，同时保留NFT所有权。协议完全去中心化，由$JPEG持有者治理。

## 定价机制
- 使用Chainlink构建的自定义价格预言机
- 基于ETH计算地板价（TWAP平滑）

## 借贷参数
- 初始利率: 2%
- 提款费: 0.5%
- 最高借出比例: 抵押品价值的32%
- 清算阈值: 33% 债务/股权比率
- 清算由DAO执行，可选择持有、二级市场或OTC出售

## 创新点
- **保险机制**：用户可选支付1%费用购买不可退还保险；清算时可在偿还债务+利息+25%罚款后从DAO回购NFT
- **与多个DeFi协议合作**：Olympus Pro债券、Tokemak流动性、Abracadabra MIM池、Dopex链上期权

## 关键数据（2022年7月）
- 接受捐赠: 72,440,876美元
- 均价: 0.000378美元
- FDV: 141,843,590美元（价格0.002043美元）

## 竞争优势
- Chainlink价格预言机是NFT借贷领域较少见的方案
- 保险清算机制降低了用户被清算时永久失去NFT的风险

## 相关实体
- [[chainlink]] — 提供NFT价格预言机基础设施
- [[olympus-dao]] — 合作推出Olympus Pro债券
- [[opensea]] — NFT市场

## 来源
- [[来源_2022-07_NFT流动性_NFTFi_ViewDAO]]
