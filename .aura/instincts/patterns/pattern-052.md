---
id: pattern-052
category: general
language: unknown
score: 50
tags: []
---

## 컨텍스트
파일: eigenlayer.md (Edit 완료)

## 핵심 코드
```unknown
## 核心业务
- **三方市场**：再质押者（LST/原生ETH）→ 节点运营商（验证者）→ 主动验证服务AVS（EigenDA/跨链桥/预言机/排序器等）
- **汇集安全性**：通过再质押的ETH保护新模块，使腐败成本(CoC)从最小质押量增加到质押总和
- **自由市场治理**：验证者自行权衡风险回报选择保护哪些AVS
- **AVS生态**：EigenDA（首个AVS/DA层）、Espresso（去中心化排序器）、AltLayer（RaaS+再质押汇总）、Lagrange（轻客户端）、Hyperlane（链间通信）、Near（快速最终确认层）、Omni（跨汇总通信）
- **再质押汇总（AltLayer）**：三个垂直整合AVS——VITAL（去中心化验证）+ MACH（快速最终确认+跨链互操作）+ SQUAD（去中心化排序）
- **分阶段上线**：阶段1质押者（2023.6启动/12种LST）→ 阶段2运营商+EigenDA（2024H1主网）→ 阶段3更多AVS+支付+罚没（2024H2）

## 市场数据
- TVL峰值：取消充值上限后5天内从$2B→$6B（+180%），截至2024年3月>$7.5B，成为第四大DeFi DApp
- ETH质押率：~25%（vs Solana/ADA/Avax >50%），再质押可能推动突破30%
- EigenDA合作：Arbitrum Orbit、OP Stack、8家汇总基础设施提供商启动合作伙伴计划

## 风险考量
- 验证者串通：同时攻击多个AVS可能经济可行
- 意外罚没：编程错误/智能合约安全问题
- 杠杆滑坡：用户可能借入资金→再质押→作为抵押品循环
- Vitalik立场："不要让以太坊共识过载"，以太坊不能对应用层事故负责
- 可持续性：空投挖矿驱动TVL占比？主网上线后资金会否回流？
```

## 태그
