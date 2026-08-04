---
type: entity
entity_type: project
created: 2026-07-02
updated: 2026-07-02
tags: [content, creator-economy, nft, writing, dao]
---

# Mirror

## 基本信息
- 类型：去中心化内容发布平台
- 赛道：创作者经济 / 内容发布
- 定位：Web3 版 Medium，通过 Token 发行工具帮助创作者众筹
- 创始人：Denis Nazarov（前 a16z 加密合伙人）
- 官方：https://mirror.xyz/

## 核心业务/产品
- **钱包连接写作**：任何人都可连接自己的钱包并开始写作
- **Token 发行工具**：为创作者提供 Token 发行能力，实现内容众筹
- **WRITE Token 门控**：只有燃烧过 WRITE Token 的成员才能获得子域（subdomain），表示其成员身份
- **NFT 化内容**：文章可作为 NFT 铸造和收藏

## 技术架构：Arweave 集成
Mirror.xyz 深度集成 Arweave 进行内容存储。用户发布文章的技术流程：
1. 点击发布时，Mirror 通过 API 将文章文件内容直接上传至 Arweave
2. 返回的 Arweave 链接可直接访问已发布内容
3. **图片数据特殊处理**：图片并不保存在 Arweave，而是保存在 Mirror 自己的服务器上——这是出于数据上传和下载时耗的考虑，也是为了节省存储费用（当时 Mirror 承担文章的存储费用）

Mirror 是 Arweave 生态中内容存储的代表性应用场景。来源：[[来源_2022-05_NFT_代币协议_元数据存储_匿名达摩院]]

## 竞争优势 / 护城河
- Denis Nazarov 的 a16z 背景带来强大的行业资源
- 内容+NFT+Token 三位一体的创作者经济模型
- 去中心化博客/文章的早期开拓者

## 风险 / 争议
- 写作平台的网络效应需要大量优质创作者和读者，冷启动难度大
- WRITE Token 燃烧门槛可能限制新用户进入

## 来源
- [[来源_2022-11_Web2到Web3_15个实用项目_BlockBeats]] — 作为 Web3 版 Medium 的类比介绍
- [[来源_2023-04_反女巫_资金归集_空投农场_zksyncc]] — 发布于 Mirror.xyz 的空投农场实操教程，展示了该平台内容的多样性（从创作者经济到灰色操作教程）
- [[来源_2022-05_NFT_代币协议_元数据存储_匿名达摩院]] — Mirror 的 Arweave 集成技术细节：文章内容上传至 Arweave 但图片保留在自有服务器
- [[来源_2022_Web3_100工具_初创公司指南]] — 将 Mirror 定位为 Web3 创业公司的白皮书和社区更新发布平台，突破在线写作的边界
