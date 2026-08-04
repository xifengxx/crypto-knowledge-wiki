---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-30T2
tags: [bitcoin, scaling, sidechain, pow]
---

# Fractal Bitcoin

## 基本信息
- 定位：基于 BTC 核心代码的原生扩展方案（侧链/PoW），非 L2
- 开发方：[[unisat]] 团队 + Block Space Force（Coinbase/CoinMarketCap/Cobo 联合创始人背景）
- 主网上线：2024 年 9 月 9 日 00:00 UTC
- 核心特性：30 秒出块、20 倍 BTC 吞吐量、递归分层、BTC 原生兼容、OP_CAT 智能合约

## 技术特点
| 特性 | 说明 |
|------|------|
| **共识** | PoW（与 BTC 相同），支持 ASIC/GPU 现有硬件 |
| **挖矿** | Cadence Mining：每 3 区块 1 周期，2 无许可 + 1 合并挖矿 |
| **扩展性** | 递归分层，每层 20x BTC，理论 400x→8000x |
| **智能合约** | OP_CAT 复活（Tapscript 520 字节限制后安全）+ OP_CAT 治理投票（BTC 生态首次） |
| **兼容性** | 100% 兼容 BRC-20/Ordinals，地址与 BTC 主网相同，OKX/UniSat 钱包直接切换网络 |

## 关键数据
| 指标 | 数值 |
|------|------|
| 上线 24h 合并挖矿算力 | BTC 总算力 40%+ |
| 上线 24h 自由挖矿算力 | BTC 算力 2%（超 BCH 总算力 3 倍） |
| 参与矿池 | F2Pool、Antpool、Spiderpool |
| FB 最大供应量 | 2.1 亿枚 |
| FB 流通供应量（上线时） | ~1,213,225 枚 |
| UniSat 周活用户 | ~1,000,000 |

## 代币经济学 (FB)
| 分配类别 | 比例 | 锁定/释放 |
|---------|------|---------|
| PoW 挖矿 | 50% | 持续释放 |
| 核心贡献者 | 15% | 7 月锁仓 + 5 月线性释放 |
| 生态系统储备金 | 15% | 10 年内每年最多 10% |
| 社区奖励 | 10% | 10 年内每年最多 10% |
| 预售 | 5% | 7 月锁仓 + 5 月线性释放 |
| 顾问 | 5% | 5 年内每年最多 20% |

- 主网上线空投：100 万 FB → 100,000+ 地址（OKX + UniSat 钱包）
- 北极星指标：交易量（非 TVL）

## 生态项目
- UniWorlds（元宇宙）、InfinityAI、Satspumpfun（Meme 发射）、Motoswap（DEX）
- **资助项目**：sCrypt（智能合约元协议）、F2Pool（矿池）、Nubit（DA 层）、DeTrading（原子交换）、UniWorlds（游戏/虚拟世界）、FractalEcosystem.io（社区目录）
- **资助模式**：事后回溯性资助（Retroactive Grants），按实际影响奖励

## 竞争定位
- vs Merlin/B²（EVM 兼容 BTC L2）：Fractal 是 BTC 原生 + PoW + 同地址，BTC 社区视 EVM L2 为"缝合怪"
- vs Bitcoin Cash（BCH）：Fractal 不创建独立链不强迫用户选择，而是拥抱 BTC 主网本地扩展
- vs Lightning Network：Fractal 提供完善智能合约，不需要通道管理和流动性锁
- 核心风险：（1）可编程性——BTC 脚本仅 1,071 月活开发者 vs ETH 7,864（7.3x 差距）；（2）BTC 极端主义者抵制；（3）BTC 持有者是否有真实需求使用侧链

## 团队
- [[unisat]]：领先 BTC 钱包，~100 万周活用户，Binance + OKX 投资，创始人 Lorenzo
- Block Space Force：Coinbase/CoinMarketCap/Cobo 联合创始人背景，美元 A9 退出经验

## 相关概念
- [[bitcoin-ecosystem]] — 所属赛道
- [[bitcoin]] — BTC 开发者生态数据与对比
- [[layer2]] — BTC L2 竞争格局中的"原生派"定位
- [[op-cat]] — Fractal 是 OP_CAT 在比特币中首个主网实现，OP_CAT 治理投票为 BTC 生态首次

## 来源
- [[来源_2024-08_Fractal_Bitcoin_Unisat扩容方案]]
- [[来源_2024-09_Fractal_Bitcoin_深度研究_RyzeLabs]]
- [[来源_2024-08_各链PumpFun仿盘_跨链对比_ForesightNews]] — Satspump.fun为Fractal Bitcoin上的Meme发行平台，主网未上线（2024年9月1日启动），已与UniWorlds合作+BRC-20空投计划
- [[来源_2024-08_BTC生态_重大变化_Odaily]] — 主网上线前最后一周生态全景：测试网 830 万日活、OP_CAT 8月13日激活、BRC-20 服务 8月19日上线、十几个生态项目入驻
- [[来源_2024-08_Fractal_Bitcoin_深潮TechFlow_入门介绍]] — 深潮TechFlow/Dr.DODO 入门科普+Cadence Mining详解+批判视角：文档过于简略、与Merlin/B²无明显差异化优势、质疑BTC功能化公链的真实需求
- [[来源_2024-09_OP_CAT_BIP347_比特币智能合约_ChainCatcher]] — OP_CAT 深度背景：Fractal 本质是 OP_CAT 代码实现，FB 3-4x + CAT20 Gas 5000+ + 闪电核心开发者集体站台的完整叙事图谱
