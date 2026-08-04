---
type: entity
entity_type: project
created: 2026-07-01
updated: 2026-07-01
tags: [memecoin, ton, telegram, airdrop, gamefi]
aliases: [DOGS, $DOGS, DOGS token]
---

# DOGS

## 基本信息
- 类型：Telegram Memecoin / 社交代币
- 赛道：Memecoin / SocialFi
- 链：TON
- 上线时间：2024 年夏季（空投）
- 核心机制：基于 Telegram 账户年龄的积分分配——账户越老，获得积分越多
- 起源：由 TON 生态社群自发推动的 Memecoin 项目

## 核心业务/产品
DOGS 是 2024 年 TON 生态中现象级的 Memecoin 空投项目。与 Notcoin 需要用户主动玩游戏不同，DOGS 的分配逻辑极为简单：用户 Telegram 账户的年龄决定其获得的代币数量。这个设计利用了 Telegram 作为通讯工具长达十年的用户积累——老用户"凭空"获得了空投奖励，制造了极强的病毒式传播效应。

DOGS 同时实现了 TON 历史上最大规模的一次链上空投——超过 1000 万链上持有者，是 Solana 最大规模空投（Grass，约 150 万地址）的 5 倍以上，也是 2024 年持有者数量增长最快的代币（超过 Notcoin 和 Hamster Kombat）。

## 关键数据
- 用户总量：5000 万
- 链上领取：约 1000 万用户
- CEX/托管钱包领取：约 1000 万用户
- 持有者数量：1700 万（TON 生态最高）
- 日交易峰值：1440 万笔
- 空投期间导致 TON 区块链宕机（首次出现大规模出块中断）

## 空投执行与事故
DOGS 最初选择 TokenTable 作为分发方案（用户认领模式），但遭遇了多个问题：
- 验证者错误配置（此前在小数据量下未暴露）
- TokenTable 初版 TVM 实现产生过多交易
- 部分验证者未及时应用紧急更新，延长宕机时间
- DEX 中心化合约为单一瓶颈

团队紧急切换至 Mass Sender（发送模式），在空投进行中完成了分发方法切换，同时处理了部分用户已领取/部分交易被回滚的数据一致性问题。

## 竞争优势 / 护城河
- **分配公平性叙事**：基于账户年龄而非资金量/游戏活跃度，创造"老用户自然受益"的公平感
- **持有者数量先发优势**：1700 万持有者远超同类项目，形成网络效应
- **Memecoin 定位清晰**：与 Notcoin（游戏代币）和 Hamster Kombat（游戏积分）形成差异化

## 风险 / 争议
- Memecoin 无内在效用，完全依赖社区情绪和叙事
- 空投导致区块链宕机暴露出 TON 在超大规模事件下的不稳定性
- 机器人账户占比不明（基于账户年龄的分配可能被大量注册的老号利用）

## 相关事件时间线
- 2024 年夏：DOGS 空投，5000 万用户参与
- 空投期间：TON 区块链宕机，TokenTable → Mass Sender 紧急切换
- 空投后：TokenTable 重构（减少交易量、traffic control、多分片 fee wallet）

## 相关实体
- [[ton]] — 部署链
- [[notcoin]] — TON 首个大规模空投项目（对比范式：发送 vs 认领）
- [[hamster-kombat]] — 同期 TON 游戏项目
- [[telegram]] — 分发平台 + 账户年龄数据来源

## 来源
- [[来源_2024-12_TON大规模铸造历史_四阶段演进]] — DOGS 空投技术细节、TokenTable 方案切换、宕机原因分析
- [[来源_2024-08_DOGS空投_Telegram_Meme币安Launchpool]]
