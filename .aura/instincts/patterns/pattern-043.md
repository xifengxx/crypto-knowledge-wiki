---
id: pattern-043
category: general
language: unknown
score: 50
tags: []
---

## 컨텍스트
파일: fractal-bitcoin.md (Write 완료)

## 핵심 코드
```unknown
---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-30
tags: [bitcoin, scaling, sidechain, pow]
---

# Fractal Bitcoin

## 基本信息
- 定位：基于 BTC 核心代码的原生扩展方案（侧链/PoW），非 L2
- 开发方：UniSat 团队（Binance + OKX 共同投资）
- 主网上线：2024 年 9 月
- 核心特性：30 秒出块、20 倍 BTC 吞吐量、递归分层、BTC 原生兼容

## 技术特点
| 特性 | 说明 |
|------|------|
| **共识** | PoW（与 BTC 相同），支持 ASIC/GPU 现有硬件 |
| **挖矿** | Cadence Mining：每 3 区块 1 周期，2 无许可 + 1 合并挖矿 |
| **扩展性** | 递归分层，每层 20x BTC，理论 400x→8000x |
| **智能合约** | OP_CAT 复活（Tapscript 520 字节限制后安全） |
| **兼容性** | 100% 兼容 BRC-20/Ordinals，地址与 BTC 主网相同 |

## 生态项目
- UniWorlds（元宇宙）、InfinityAI、Satspumpfun（Meme 发射）、Motoswap（DEX）

## 竞争定位
- vs Merlin/B²（EVM 兼容 BTC L2）：Fractal 是 BTC 原生 + PoW，不是"又一个 EVM 贴 BTC 标签"
- vs Lightning Network：Fractal 提供完善智能合约支持，不需要通道管理
- 风险：BTC 持有者是否有真实需求将 BTC 转到侧链使用？

## 相关概念
- [[bitcoin-ecosystem]] — 所属赛道

## 来源
- [[来源_2024-08_Fractal_Bitcoin_Unisat扩容方案]]

```

## 태그
