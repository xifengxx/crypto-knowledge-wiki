---
type: entity
entity_type: project
created: 2026-06-29
updated: 2026-07-01
tags: [gamefi, telegram, ton, tap-to-earn, mini-dapp]
---

# Hamster Kombat

## 基本信息
- 类型：Telegram Tap-to-Earn 小游戏
- 赛道：GameFi / mini dApp
- 链：TON
- 成立时间：约2024年4月
- 核心机制：点击卡通仓鼠赚取金币 → 购买交易所升级 → 被动收入
- 游戏设定：玩家扮演一家新兴加密货币交易所的CEO

## 核心业务/产品
Telegram 内嵌的点赚（Tap-to-Earn）小游戏，是 Notcoin 爆火后最大规模的模仿者。游戏通过简单的点击机制和"CEO模拟器"叙事吸引用户，每次升级增加被动收入（每小时产出更多金币）。

## 空投与 Mintless Jettons

Hamster Kombat 于 **2024 年 9 月 26 日** 执行空投，成为 Mintless Jettons 标准的首次实战测试：

- **Mintless Jettons 机制**：基于 Merkle proofs——生成包含全部接收人及额度的 Merkle tree，仅将 merkle_hash 存入链上 Jetton Master 合约，Merkle tree 数据在链下存储。用户钱包立即显示代币，但链上合约仅在用户首次交互时生成
- **优势**：降低负载（无需逐笔 mint）、降低成本、用户体验友好（代币自动出现在钱包）
- **局限**：必须在代币部署前锁定全部接收人名单，后加入者无法通过此方案获得代币
- **组合方案**：Hamster Kombat 同时使用 GigaDrop（认领范式）覆盖未提供地址的用户
- **实际表现**：负载"substantial but not record-breaking"，区块链未中断出块；API 服务在高峰期 overloaded 但当天恢复；Tonkeeper 提前警告用户可能受影响
- **实际占比**：Mintless Jettons 覆盖的参与者比例相对较小（大部分用户未提前提供钱包地址），新标准帮助有限但未出现重大问题

## 关键数据（截至2024年7月）
- 注册用户：2.39亿（3个月内）
- MAU：9.5亿（Tiger Research 引用，2025年报告；注意与注册用户口径差异，9.5亿可能为累积下载或夸大表述）
- YouTube订阅：一周破1000万，申请吉尼斯世界纪录
- 计划首次空投：2024年7月，分配依据为每小时利润和活动参数（非代币余额）
- 影响力：引起伊朗政要和学者关注与讨伐
- 创始人：对The Block表示乐观，计划未来两年内进行第二季和第二次空投

## 竞争优势 / 护城河
- Notcoin之后最大的Tap-to-Earn用户规模
- 游戏化程度高于纯点击（有升级系统、被动收入、交易所叙事）
- Telegram创始人Pavel Durov公开称之为"最新的互联网现象"

## 风险 / 争议
- Tap-to-Earn模式可持续性存疑（Notcoin创始人自认为不可持续）
- 空投后用户留存未知
- 机器人账户占比不透明
- 伊朗官方对其"西方软文化入侵"的批评

## 相关实体
- [[notcoin]] — Tap-to-Earn 鼻祖，模仿对象
- [[tapswap]] — 同赛道竞争对手，60M+用户
- [[ton]] — 部署链
- [[telegram]] — 分发平台

## 来源
- [[来源_2024-07_点赚小游戏_内冷外热_TGE延迟]]
- [[来源_2025-06_Web3游戏_Tiger_Research]] — 950M MAU数据 + T2E游戏降低进入门槛/结合简单点击与营销工具
- [[来源_2024-06_Delphi_TON游戏炒作]] — Delphi 2024年6月：2亿+注册用户/30M DAU/YouTube 2800万订阅+4.61亿观看/CEO模拟器叙事/Youtube教育内容策略
- [[来源_2024-12_TON大规模铸造历史_四阶段演进]] — Mintless Jettons 首次实战（2024.09.26）：Merkle proofs 机制、GigaDrop 组合方案、API 过载但链未中断
