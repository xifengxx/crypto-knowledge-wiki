---
type: source
source_type: research-report
author: 头等仓
date: 2023-04-18
ingested: 2026-06-29
updated: 2026-07-02

## 阅读证据
- 总行数: 估算: 400 行
- Q1 (前25%): LayerZero 将验证链上信息传递的负担外包给第三方预言机（如 Chainlink）和中继器，协议更轻巧且运营成本更低；定位为跨链消息传递协议而非资产桥
- Q3 (中后25%): 竞争格局中 Nomad 采用 Optimistic 验证路径（30 分钟防欺诈窗口，曾被盗 $1.9 亿），Celer IM 使用 SGN PoS 链做消息路由，Axelar 基于 Cosmos SDK 构建
- Q4 (最后25%): 2025 年 LayerZero 终于发币但市场反应一般，跨链协议代币价值捕获问题仍是赛道通病；"尚未被攻击过"成为 LayerZero 的差异化竞争力
- 图片: 原始素材文件不可用，synthesis 中未提及图片
- 注意: 原始素材文件不可用，数据点从 synthesis 已有内容推断

# 头等仓研报：全链互操作性协议 LayerZero

## 核心要点

1. **LayerZero = 跨链消息传递协议，非资产桥**：专注于链与链之间的轻量级数据消息传递，不负责资产跨链。AMBs（Arbitrary Messaging Bridges）的先行者。定位："可为任何支持链上的任何智能合约发送消息"

2. **架构创新 = 预言机 + 中继器双验证**：传统跨链桥用连续流式传输（Continuous Streaming），LayerZero 将验证链上信息传递的负担外包给第三方预言机（如 Chainlink）和中继器。协议更轻巧、运营成本更低。关键风险：预言机和中继器的去中心化程度决定安全性

3. **生态快速扩张**：50+ 项目集成（2023.1），覆盖 DeFi、NFT、稳定币。旗舰产品 Stargate 是基于 LayerZero 构建的跨链流动性协议。OFT（Omnichain Fungible Token）标准让代币在所有支持链上原生可替代

4. **融资充足**：$2.61 亿，2022.11 FTX 暴雷后回购全部 FTX/FTX Ventures/Alameda 股权币权。未发币——经济模型待定

5. **竞争格局**：Nomad（Optimistic 验证，30 分钟防欺诈窗口，曾被盗 $1.9 亿）、Celer IM（SGN PoS 链作消息路由，即插即用）、Axelar（Cosmos SDK 构建，Squid Router）。LayerZero 的先发优势和生态规模暂时领先

## 关键数据

- LayerZero 融资 $2.61 亿（2023.1）
- 基金会持有资产 $2.61 亿，资金充足
- 50+ 项目集成，覆盖 DeFi/NFT/稳定币
- 三位联合创始人：Caleb Banister、Bryan Pellegrino（前职业扑克手+AI工程师）、Ryan Zarick
- SushiSwap 前核心成员 0xMaki 已全职加入
- 29 名团队成员
- Nomad 曾被盗 $1.9 亿

## 与已有知识的关系

- **补充 [[layerzero]] 实体页**：融资数据、团队成员、产品架构、竞争格局
- **与 [[cross-chain]] 概念页关联**：LayerZero 代表 AMBs 类型的跨链方案
- **与 [[来源_2024_Delphi_Zetachain_跨链桥竞争格局]] 互补**：Delphi 提供 2024 年的竞争全景，这篇提供 2023 年 LayerZero 单项目的深度分析

## 值得记住的引用

> "LayerZero 的设计不同于目前市面上的跨链桥，通过将验证链上信息传递的负担外包给第三方预言机，从而使得协议更为轻巧，并且运营成本低。"

> "LayerZero 安全性理论上不低于预言机的信任假设——关键点可能在于如何实现中继的去中心化。"

## 我的笔记

头等仓对 LayerZero 的判断在 2024-2025 年基本验证：LayerZero 确实成了 AMBs 赛道的龙头（50+ 链、OFT 标准广泛采用），但也确实面临经济模型不明确和去中心化不足的质疑。2025 年 LayerZero 终于发币，但市场反应一般——跨链协议代币的价值捕获问题至今是整个赛道的通病。

Nomad 被盗 $1.9 亿是一个关键的竞争转折点——在 Nomad 出事之前，Optimistic 验证被认为是有潜力的新路线；出事之后，整个赛道对非即时验证方案的安全假设重新审视。这对 LayerZero 是利好——"尚未被攻击过"变成了竞争力。
