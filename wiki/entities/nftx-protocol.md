---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [nft, defi, liquidity, amm]
---

# NFTX

## 基本信息
- 类型: NFT流动性协议 / NFT-ERC20转换+AMM
- 成立时间: 2021年
- 相关链接: https://nftx.io/

## 核心业务/产品
NFTX 是一个将非流动性NFT转换为同质化代币（vToken）并引入AMM流动性的协议。用户将NFT存入保险库，铸造对应的ERC20代币（vToken），vToken可在SushiSwap等DEX上自由交易。

## 核心机制
1. **存入&铸造**：将特定系列的NFT存入保险库，铸造vToken（初始1:1，铸币费5%，实际获得0.95 vToken）
2. **交易**：vToken通过AMM（SushiSwap）实现自由交易
3. **随机赎回**：1个vToken可随机赎回保险库内的任意一个同系列NFT
4. **定向赎回**：1.05个vToken可定向赎回特定NFT（额外5%费用）

## 关键数据
- FDV: 57,741,271美元（2022年7月数据）
- 保险库质押金额: 39,338,863美元
- 未发行自己的代币经济学（截至2022年7月）

## 竞争优势
- 通过vToken为NFT提供即时流动性（"立即出售任何NFT"）
- 有助于NFT发现真正的地板价
- 释放NFT的长尾流动性

## 局限
- 主要对地板价附近的NFT有用，高价值NFT不适用（可通过设定高价值NFT专属保险库部分解决）
- 随机赎回机制使稀有NFT持有者不愿意存入
- 与非蓝筹低地板价NFT相比，交易动机弱于蓝筹NFT

## 相关实体
- [[sushiswap]] — 为NFTX提供AMM流动性
- [[olympus-dao]] — FloorDAO借鉴其债券模型为NFTX保险库提供深度流动性
- [[opensea]] — 作为NFT交易平台与NFTX互补
- [[nft20-protocol]] — NFT流动性池的另一代表，将NFT转换为100个ERC-20代币在DEX上交易

## 来源
- [[来源_2022-07_NFT流动性_NFTFi_ViewDAO]]
- [[来源_2022-08_NFTfi_NFT借贷_市场全景_火币研究院]] — 与NFT20的对比分析：流动性池以底价聚集同类NFT，相比分数NFT具有更高的共识度和流动性；但类别有限，以底价交易非蓝筹NFT的动机仍然很弱
- [[来源_2022-08_NFTfi赛道_XResearchDAO]] — 补充NFTX存入NFT获取vToken，与NFT20、Sudoswap构成2022年NFT流动性池三大方案
