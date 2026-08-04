---
type: entity
entity_type: project
created: 2026-06-29
updated: 2026-06-29
tags: [gaming, l1, nft, gamefi]
---

# Ronin

## 基本信息
- **类型**: Layer-1 区块链（EVM 兼容）
- **赛道**: 游戏 & NFT 专用链
- **成立时间**: 主网 2021 年 2 月 1 日上线
- **开发团队**: Sky Mavis（创始人 Trung Nguyen、Aleksander Leonard Larsen、Jeffrey Zirlin）
- **融资**: 未在文章中详述
- **定位**: 链上游戏的主要中心，EVM 兼容的游戏/NFT 专用 L1

## 核心业务/产品
Ronin 是为游戏和 NFT 优化的 EVM 兼容 L1 区块链，由 Sky Mavis 最初为 Axie Infinity 创建，现已发展为多游戏生态系统。

核心组件：
- **Ronin L1**: DPoS 共识机制，24 个验证者（含轮换），Nakamoto 系数 7
- **Katana**: 原生 DEX，支持 12 种 ERC-20 代币（RON/AXS/SLP/PIXEL/APRS 等）
- **Mavis Market**: Sky Mavis 官方 NFT 市场
- **Ronin Bridge**: 跨链桥，用于与其他 EVM 网络的资产转移
- **Mavis Hub**: 游戏分发平台，含 Greenlight 早期游戏投票系统
- **Ronin Launchpad**: 由 Impossible Finance 提供支持的游戏资产发行平台
- **Ronin Forge**: Web3 游戏工作室加速器（最高 $50,000 RON 资助）
- **zkEVM (计划中)**: 2025 年 Q1 前启用，允许游戏用 Polygon CDK 在 Ronin 上部署 L2

## 关键数据
- 累计 NFT 交易量: $43 亿
- Katana DEX 累计交易量: $114 亿
- 2024 年 DAA 峰值: 160 万
- 共质押: 2.09 亿 RON（$4.9 亿，占流通供应 62.3%）
- DPoS 质押年化收益: 10%-13%（2024 年 6 月）
- Nakamoto 系数: 7（高于 MultiverseX 6、Polygon 4、以太坊 1）
- 验证者最低质押: 250,000 RON（约 $390,000）
- RON 总供应: 10 亿枚（固定）
- 生态系统游戏数: 12+ 款（2024 年 7 月）

## 网络安全事件
**2022 年 3 月 29 日 Ronin Bridge 黑客攻击**:
- 损失: 173,600 ETH + 2,550 万 USDC（价值超 $6 亿）
- 攻击方式（技术面）: 利用无 gas RPC 节点后门——Axie DAO 验证器此前被列入白名单允许免费交易，白名单于 2021 年 12 月停止但 IP 地址仍在允许列表中
- 攻击方式（社会工程学入口）: 攻击者（朝鲜 Lazarus 集团）在 LinkedIn 上冒充虚构公司招聘人员，锁定 Sky Mavis 高级工程师。经过多轮虚假面试建立信任后，发送内含远控木马（RAT）的 PDF 工作邀请——工程师在公司电脑下载打开后，黑客获得内部系统访问权限，进而操纵跨链桥（[[来源_2025-06_加密安全指南_社会工程学_深潮TechFlow]]）
- 攻击者: [[lazarus-group]]
- 资金追回: 币安 $580 万 + Chainalysis $3,000 万 + 挪威 Økokrim $570 万（2024 年 6 月），另冻结 $4,000 万

## 共识机制演化
1. **PoA（2021）**: 权威证明，Sky Mavis 指定有限验证者，高速但集中化
2. **DPoS（2023）**: 委托权益证明，任何人可注册为验证者候选人，质押+委托排名前 10 当选
3. **Goda 升级 + DPoS（2024 年 7 月）**: 分离最终投票（85% 奖励）和区块生产（15% 奖励），VRF 随机选择轮换验证者，每 epoch（~10 分钟）轮换一次

## 生态关键游戏
- **Axie Infinity**: P2E 鼻祖，累计 NFT 交易量 $43 亿
- **Pixels**: 免费农业 MMO，2023 年 10 月从 Polygon 迁移，DAA 增长 7 倍
- **Apeiron**: 神级模拟+RTS+ARPG，代币 APRS 发行 3 分 30 秒筹 $1,800 万
- **Ragnarok: Monster World**: 仙境传说 IP，所有游戏累计 6,800 万玩家，2024 年 Q3 上线
- **Lumiterra**: 跨平台 MMORPG，集成 Lumi Finance DeFi
- **Forgotten Runiverse**: Web3 奇幻 MMORPG，2024 年 7 月入驻

## 竞争力/护城河
- **游戏专用链定位**: 为游戏优化的 EVM L1，非通用链，gas 低、吞吐高
- **Axie Infinity 的先发优势**: Web3 游戏领域最成功的 IP 之一
- **Ronin 效应**: 可扩展性 + 强大社区带来的游戏迁移增长飞轮
- **Web2 桥接**: 与 Ragnarok（6,800 万传统玩家）等 IP 合作，吸引非加密用户
- **zkEVM L2 布局**: 从单一链升级为结算层，支持游戏特定 L2 的无许可部署

## 风险/争议
- 对 Axie Infinity 的经济依赖程度仍然很高（$43 亿 NFT 交易量大部分来自 Axie）
- 2022 年 $6 亿黑客攻击的历史阴影（注：有来源报告为约 $7 亿，如 [[来源_2022-08_跨链桥_五大维度_评估框架]] 称约 7 亿美元，可能含其他相关损失；精确链上损失为 173,600 ETH + 2,550 万 USDC ≈ 超 6 亿美元）
- 验证者集中度：Nakamoto 系数 7 好于其他链但仍相对集中
- RON 代币通胀压力：9 年线性解锁，团队和基金会分配占 45%

## 相关实体
- [[solana]] — 通用 L1，在游戏赛道与 Ronin 构成竞争；Solana 链上也有多个游戏项目
- [[sui]] — 通用 L1 以游戏为差异化切入点
- [[avalanche]] — 子网架构的游戏链方案（如 DeFi Kingdoms）

## 来源
- [[来源_2024-08_Ronin生态图谱_DPoS迁移_MarsBit]] — Messari 全面投研报告（MarsBit 编译），Ronin 技术架构/Tokenomics/生态/路线图全覆盖
