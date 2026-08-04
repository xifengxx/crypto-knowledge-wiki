---
id: pattern-071
category: general
language: unknown
score: 50
tags: []
---

## 컨텍스트
파일: 来源_2024_CoW_协议_现代DEX.md (Edit 완료)

## 핵심 코드
```unknown
## 阅读证据
- 总行数: 22 (raw为博客列表页) + WebFetch补充完整技术文章
- Q1 (前25%): CoW Protocol = "solvers"类DEX，混合CEX订单簿+链上结算。用户签署意图(Intent)链下提交→Solver竞争最优方案→胜出批次单笔交易链上结算
- Q3 (中后25%): Solver竞争机制：quality分数(盈余总和+费用总和)/奖励=observedQuality-referenceQuality差值。Solver需质押保证金，由CoW DAO管理白名单
- Q4 (最后25%): 链上结算GPv2Settlement.sol五阶段：Pre-interactions→Trade Execution→Transfer In→Intermediate→Transfer Out→Post-interactions。CoW AMM+Batch交易→防frontrunning+统一清算价
- 图片: 1张装饰跳过 / 0张外部URL无法获取

## 关键数据
- Solver奖励区间：0.010–0.012 ETH（cap函数限制）
- 支持外部DEX：Uniswap V2/V3, Balancer V2, 0x, CoW AMM
- CoW AMM与Balancer联合开发，支持批量统一价格结算
- 支持6种订单类型：Simple/Limit/TWAP/Programmatic/Milkman/CoW Hooks
- 链上结算单笔交易处理整批订单→大幅节省Gas

# 现代 DEX 是如何产生的：CoW 协议
```

## 태그
