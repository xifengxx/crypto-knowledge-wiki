---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [defi, stablecoin, lending, btc-l2, merlin]
---

# bitSmiley

## 基本信息
- 赛道：BTC 原生超额抵押稳定币 + 借贷
- 所属生态：Merlin Chain (BTC L2)
- 定位：比特币生态的 "MakerDAO + Compound"
- 投资方：OKX Ventures、ABCDE、CMS、ArkStream Capital、Foresight Ventures
- 测试网：2024年3月19日开启封闭内测

## 核心业务/产品

1. **BitUSD — 去中心化稳定币协议**：
   - 用户存入 BTC 作为抵押品，生成 BitUSD
   - 取回 BTC 需偿还 BitUSD + 费用
   - 抵押品价格低于阈值 → 触发清算，在 BTC L2 执行

2. **bitLending — 点对点借贷协议**：
   - 完全去中心化的借贷协议
   - 支持借出任何 bitRC-20 代币（包括 BitUSD）
   - 使用 BTC 等高价值/高流动性资产作为抵押

3. **bitDisc NFT 系列**：
   - bitDisc-Gold：总量 100，邀请制
   - bitDisc-Black：总量 10,000，Free Mint，作为早期参与者凭证
   - bitDisc-Black 已加入 Merlin Seal 质押挖矿

## 关键数据
- bitDisc-Black 地板价：$3,467.79（2024.03）
- bitDisc-Black 市值：$3,467 万
- bitDisc-Gold 总量仅 100 个（稀缺性极高）

## 竞争优势 / 护城河
- BTC 生态稳定币赛道先发优势
- OKX Ventures + ABCDE 等顶级机构背书
- 超额抵押机制天然适配 BTC（BTC 是最优质的抵押品）
- NFT 作为社区凭证 + 潜在空投，已积累活跃社区

## 风险 / 争议
- BTC L2 上的清算执行可靠吗？（BTC L1 无法原生验证 L2 状态）
- 稳定币协议的安全风险极高（代码漏洞 = 直接损失）
- 依赖 Merlin Chain 生态，跨链扩展能力待验证

## 相关实体
- [[merlin-chain]] — 所属 L2 网络
- [[makerdao]] — 以太坊生态对标项目

## 来源
- [[来源_2024-03_Merlin_Chain五个生态项目_BlockBeats]]
