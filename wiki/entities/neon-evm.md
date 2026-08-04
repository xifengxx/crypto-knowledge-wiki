---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [evm, solana, cross-chain, compatibility]
---

# Neon EVM

## 基本信息
- 类型：Solana 上的 EVM 兼容层（作为 Solana 智能合约运行）
- 定位：让以太坊 DApp 无需重新配置即可在 Solana 上运行
- 兼容性：支持 Solidity、Vyper、MetaMask 等以太坊工具链

## 核心业务/产品
- 在 Solana 区块链内作为智能合约运行，使基于 Solidity/Vyper 的 DApp 能利用 Solana 的低费用、高交易速度和并行执行能力
- 宣称支持 Uniswap、SushiSwap、0x、MakerDAO 等头部以太坊应用的迁移
- 已被 Eclipse 集成，为 Eclipse 主网提供完整 EVM 兼容性（包括以太坊字节码和 JSON-RPC）
- 每个 Neon EVM 实例有独立本地费用市场，应用可部署自有合约获得应用链优势

## 关键困境
- **"无人真正感兴趣"的尴尬定位**：以太坊社区因对 Solana 安全性/去中心化的怀疑不愿迁移到 Solana；Solana 社区对 EVM 没有兴趣——两边不讨好
- 虽然比 Monad/Sei 更早推出主网，但早期采用率"非常令人失望"
- 潜在的转机：Firedancer 客户端上线后，Neon EVM 可借助 Solana 的性能优势获得相对于独立并行 EVM L1 的性能领先

## 相关实体
- [[solana]] — 底层区块链
- [[eclipse-l2]] — Eclipse 集成 Neon EVM 实现 EVM 兼容性
- [[monad]] — 并行 EVM 这个赛道的对比参照

## 来源
- [[来源_2024-03_并行EVM四杰_Monad_Sei_Neon_Eclipse_Foresight]]
