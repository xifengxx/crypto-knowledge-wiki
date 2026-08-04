---
type: entity
entity_type: project
created: 2026-07-02
updated: 2026-07-02
tags: [infrastructure, node-service, blockchain, mev]
---

# ZAN

## 基本信息
- 类型：区块链节点服务（Node-as-a-Service）
- 所属：蚂蚁数科（Ant Digital Technologies）
- 定位：面向开发者的Web3基础设施平台，提供节点RPC、合约审计等服务
- 官方文档：https://docs.zan.top
- X账号：[@zan_team](https://x.com/zan_team)

## 核心业务/产品
- **节点服务（Node RPC）**: 提供以太坊等主流公链的WebSocket和HTTP节点接入，支持mempool实时交易监听
- **合约审计（AI Scan）**: AI驱动的智能合约安全审计工具（https://zan.top/home/ai-scan）
- **独立节点支持**: 为专业用户（如MEV searcher）提供独立节点部署

## 竞争优势
- 蚂蚁数科品牌背书，企业级稳定性和合规性
- 面向中文开发者社区的内容营销策略：通过技术教程（如MEV机器人编写指南）引流开发者
- 产品矩阵覆盖"节点+安全"两个开发者核心需求

## 风险 / 争议
- 与Infura、Alchemy等老牌节点服务商相比，市场份额和生态整合深度尚待验证
- 内容营销中的产品推广与实际服务质量之间可能存在落差
- 蚂蚁集团的监管风险可能影响区块链业务的合规边界

## 相关实体
- [[ant-digital-technologies]] — 母公司蚂蚁数科，全面布局RWA（Jovay L2、两链一桥、DTVM）
- [[infura]] — 以太坊节点服务龙头（ConsenSys旗下）
- [[alchemy]] — 主流Web3节点服务商

## 来源
- [[来源_2024-12_MEV机器人_三明治攻击_夹子机器人_PANews]] — ZAN Team KenLee 撰写MEV机器人教程，代码示例中直接使用ZAN WSS节点地址（`wss://api.zan.top/node/ws/v1/eth/mainnet/`），并推荐ZAN独立节点和合约审计服务
