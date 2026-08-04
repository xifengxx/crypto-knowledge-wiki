---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [nft, defi, fractional-ownership]
---

# Fractional (Fractional.art)

## 基本信息
- 类型: NFT碎片化协议 / 部分所有权协议
- 相关链接: https://fractional.art/
- 投资方: Delphi Digital, Paradigm 等

## 核心业务/产品
Fractional 是一个去中心化协议，允许NFT所有者铸造其NFT的代币化部分所有权。碎片化后的ERC20代币代表对原始NFT的部分所有权和治理权。

## 核心机制
1. **碎片化**：NFT所有者将NFT锁定到Fractional协议，铸造对应ERC20代币
2. **治理**：碎片化代币持有者对NFT的底价进行投票
3. **退出机制**：当第三方出价达到底价时，触发荷兰式拍卖；拍卖成功后所有碎片化代币持有者按比例兑现ETH
4. **应用场景**：分发给朋友、空投给社区、为DEX提供流动性

## 竞争优势
- 碎片化赛道龙头，先发优势明显
- 获得Delphi、Paradigm等顶级VC投资
- 降低高价值NFT（如Beeple作品、CryptoPunks）的参与门槛

## 局限
- 主要适用于高价值NFT
- 碎片化带来的权益分割（空投归属、治理权等）问题尚未完全解决
- 一级市场估值偏高，运营数据过了增长黄金期

## 相关概念
- [[nft]] — NFT流动性提升方案之一
- [[来源_2024-02_ERC404_SimpDoge_NFT分割所有权_BlockBeats]] — ERC404作为更新的NFT碎片化+流动性混合方案

## 来源
- [[来源_2022-07_NFT流动性_NFTFi_ViewDAO]]
- [[来源_2022-08_NFTfi_NFT借贷_市场全景_火币研究院]] — 与Unicly的对比分析：Fractional.art仅支持通过买断或全量代币方式完全索取金库，无法认领保险库中的单件，增加套利活动的流动性限制；Unicly在投票百分比设置上有所改善但根本原因未解决
