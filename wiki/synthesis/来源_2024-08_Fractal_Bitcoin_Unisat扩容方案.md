---
type: source
source_type: article
url: https://followin.io/zh-Hans/feed/12410035
author: Followin
date: 2024-08
ingested: 2026-06-30
---

# Fractal Bitcoin — UniSat 基于 BTC 核心代码的原生扩展

## 阅读证据
- 总行数: ~80
- Q1 (前25%): Fractal由UniSat支持，基于BTC核心代码的原生扩展方案。特性：30秒区块确认、20倍BTC吞吐量、原生兼容BTC钱包/工具/矿机、动态调整扩展层数量
- Q3 (中后25%): Cadence Mining（节奏挖矿）：每3区块1周期，2个无许可挖矿+1个合并挖矿。OP_CAT重新启用——早期被禁用的字符串连接操作码，Tapscript 520字节限制后安全性可保障，释放智能合约能力
- Q4 (最后25%): 小结：UniSat由Binance+OKX共同投资，$PIZZA代币表现优良。但文档过于简便，未透露运行细节。BTC L2公链需求存疑——之前Merlin/B²等未获真实用户青睐。期待Fractal玩出不一样玩法
- 图片: 0张已分析 / 1张头像图跳过

## 核心要点
1. **Fractal = BTC原生扩展，非L2**：使用BTC核心代码创建树状递归扩展层，更像侧链（自有PoW挖矿）而非L2。每个Fractal层=20x BTC吞吐量，理论上可无限分层（400x→8000x）
2. **Cadence Mining混合挖矿机制**：每3区块=2个无许可挖矿（任何矿工可参与）+1个合并挖矿（BTC矿工同时挖BTC+FB区块，不占额外算力）。去中心化与安全性兼顾
3. **OP_CAT复活**：BTC早期被禁用的操作码经Tapscript 520字节限制后重新安全，使BTC具备图灵完备智能合约——DeFi/NFT/复杂dApp在BTC上变得可能
4. **UniSat团队背书**：Binance+OKX共同投资，UniSat钱包约100万周活用户提供冷启动优势

## 关键数据
- 区块确认时间：30秒（BTC主网10分钟）
- 交易处理能力：BTC主链的20倍（单层）
- 挖矿周期：每3区块为1周期
- UniSat钱包周活用户：约1,000,000

## 与已有知识的关系
- [[bitcoin-ecosystem]] — Fractal是BTC扩容方案矩阵的新成员（侧链/PoW/原生兼容），与Stacks(L2)、Babylon(质押)、Lightning(支付)形成互补
- [[layer2]] — Fractal自称非L2而是递归扩展（更像侧链）。BTC扩容方案的"正统性"争议：L2 vs 侧链 vs 原生扩展，哪个才是BTC社区愿意接受的方向？
- [[l1-competition]] — Fractal如果成功="BTC生态有了自己的高性能执行层"，可能分流ETH L2的需求

## 值得记住的引用
> "Fractal Bitcoin 最大的亮点肯定是因其来自于由 Binance 与 OKX 两大交易所共同投资的 Unisat 团队之手。"
> "比特币是否真的需要一条公链达功能化这件事情，笔者认为至今仍未拥有此需求的产生。"

## 我的笔记
Fractal的定位很微妙——不是L2，是"基于BTC核心代码的侧链+PoW"。这避免了与Stacks/Merlin等BTC L2的直接对比。最大的资产是UniSat团队+OKX/Binance投资+PIZZA代币的成功记录。但核心矛盾在于：BTC生态玩家真的需要"更快的链"吗？过去Merlin/B²失败了因为它们只是"又一个EVM链贴上BTC标签"。Fractal的不同在于它尊重BTC原生（同地址、同PoW、同工具），但最终也要回答同一个问题：BTC持有者并不想把BTC从冷钱包里拿出来用。OP_CAT的复活是技术亮点但也是双刃剑——如果图灵完备智能合约真的在BTC上跑起来，BTC的安全模型是否需要重新评估？
