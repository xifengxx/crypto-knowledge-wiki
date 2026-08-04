---
type: entity
entity_type: protocol
created: 2026-06-29
updated: 2026-06-29
tags: [rwa, stablecoins, tron, yield]
---

# stUSDT

## 基本信息
- 生态：波场 TRON
- 上线时间：2023年7月3日
- 定位："Web3版余额宝"，RWA 稳定质押产品
- 核心机制：用户质押 USDT → 1:1 铸造 stUSDT → 通过 Rebase 分配现实世界资产收益

## 核心业务/产品
- **质押 USDT 获取 RWA 收益**：stUSDT 锚定现实世界资产（如国债），通过 stUSDT-RWA 智能合约的 Rebase 机制向持有者分配收益
- **设计参考 Lido stETH**：stUSDT 是封装过后的 TRC-20 代币，增强在 TRON 生态的可组合性
- **DeFi 乐高积木**：可在借贷、收益、合约等协议中使用，也可上线交易所交易

## 关键数据（2023年7月）
- 孙宇晨预期 stUSDT 将成为波场 TRON 链上 500 亿美元资产的基本收益锚定物

## 竞争优势 / 护城河
- TRON 生态的庞大 USDT 存量（链上 USDT 流通量最大）为 stUSDT 提供了天然需求基础
- Rebase 机制 + TRC-20 兼容性使其易于集成到现有 DeFi 协议

## 风险 / 争议
- 底层 RWA 资产的具体构成和托管安排透明度不足
- 孙宇晨个人因素带来的监管和声誉风险
- 波场 TRON 生态的中心化程度较高

## 相关实体
- [[lido]] — stUSDT 设计参考 stETH
- [[tether]] — USDT 是质押基础资产
- [[makerdao]] — 同为 RWA 收益 + 稳定币结合范式

## 来源
- [[来源_2023-08_RWA实现路径_OffChain-OnChain_美债代币化]]
