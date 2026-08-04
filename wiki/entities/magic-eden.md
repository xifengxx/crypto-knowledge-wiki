---
type: entity
entity_type: project
created: 2026-07-02
updated: 2026-07-02
tags: [nft, marketplace, bitcoin, solana, multichain]
---

# Magic Eden

## 基本信息
- 类型: 多链 NFT 交易市场
- 赛道: NFT 交易 / 数字藏品
- 成立时间: 2021年
- 起源: Solana 生态 NFT 市场
- 扩展: 2023年3月正式支持比特币 Ordinals NFT

## 比特币 NFT 交易架构 (2023年3月)
Magic Eden 在比特币 NFT 交易中采用 PSBT（部分签名比特币交易）技术，搭配外置浏览器钱包（Hiro Wallet / Xverse / UniSat）完成签名。交易流程：

1. 安装外置钱包浏览器插件（如 Hiro Wallet）
2. 向钱包充值比特币
3. 连接 Magic Eden → 选择钱包 → 弹窗确认连接地址
4. **Prepare your wallet**（首次必需）：创建隔离 UTXO 确保 NFT 不误转
5. 浏览 BTC NFT 系列 → 选择购买 → Hiro Wallet 弹窗 PSBT 签名 → 二次签名确认
6. 交易完成，可在 Profile 查看已购 NFT

与以太坊 NFT 交易的关键差异：
- 需要 **Prepare your wallet** 步骤（UTXO 模型下的特有安全需求）
- 每次交易需通过外置钱包完成 PSBT 签名（而非智能合约交互）
- 不支持聚合器 — 用户需在不同市场间手动比价

## 关键数据
- 2023年9月：在 Magic Eden 上 Ordinals Maxi Biz (OMB) 总交易量超过 400 BTC
- 2023年3月：已收录 Bitcoin Frog 等多个 BTC NFT 系列，但各系列流动性分布不均（Bitcoin Frog 在 Gamma 仅个位数挂单，在 Magic Eden 有大量挂单）
- 2024年：Portal 生态确认所有 NFT 可用 PORTAL 代币购买

## 竞争优势 / 护城河
- 多链 NFT 市场先发优势（Solana → Bitcoin → Ethereum）
- 在比特币 Ordinals NFT 交易中建立了完整的外置钱包+PSBT交易流程
- 品牌认知度：在 Solana NFT 生态占据主导地位后，自然延伸至比特币

## 风险 / 争议
- 比特币 NFT 无智能合约，每个系列需手动收录 → 收录速度可能赶不上新项目涌现
- 比特币 NFT 交易依赖外置钱包（Hiro/Xverse/UniSat），钱包体验不一致可能影响用户留存
- NFT 市场整体萎缩，Blur 等平台在以太坊端通过代币激励争夺流动性

## 相关实体
- [[opensea]] — 以太坊/多链 NFT 市场的对标参照
- [[ordinals]] — Magic Eden BTC 市场的底层协议
- [[unisat]] — 同为比特币 Ordinals 生态钱包+市场
- [[okay-bears]] — 2022 年 Solana NFT 标杆项目，与 Magic Eden 合作建立专属 NFT 市场

## 来源
- [[来源_2023-03_比特币NFT交易体验_OrdinalsWallet_MagicEden_BlockBeats]]
- [[来源_2023-Q3_比特币生态DApp盘点_DeFi_NFT_基础设施_钱包_BlockBeats]]
- [[来源_2023-05_比特币生态_项目工具_ODaily]] — 补充 Magic Eden 于 2023 年 3 月进入比特币 NFT 市场的时间节点，集成 Hiro Wallet 和 Xverse 钱包作为签名工具
- [[来源_2022-05_SOLANA_NFT图腾_OkayBears_匿名达摩院]] — 合作案例：Okay Bears 与 Magic Eden 共建"熊市场"，持有者可享会员专属特权
