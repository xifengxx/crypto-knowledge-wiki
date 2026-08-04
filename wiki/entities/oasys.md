---
type: entity
entity_type: project
created: 2026-06-30
updated: 2026-07-02
tags: [gaming, gamefi, l1, layer2, nft]
---

# Oasys

## 基本信息
- **类型**: 游戏专用公链（Hub Layer L1 + Verse Layer L2 模块化架构）
- **赛道**: GameFi / 区块链游戏基础设施
- **成立时间**: 主网 2022 年 10 月上线；团队从 Double Jump Tokyo 剥离
- **核心团队**: Gabby Dizon（YGG 联合创始人）、Hajime Nakatani（万代南梦宫总裁兼 CEO）、Hironobu Ueno（Double Jump Tokyo CEO）、Hironao Kunimitsu（Gumi 创始人兼 Thirdverse CEO）、Shuji Utsumi（世嘉执行副总裁）
- **初始验证者**: 包括育碧、世嘉、Com2uS 等游戏巨头
- **定位**: 日本游戏产业联合构建的 Web3 游戏专用基础设施，以"零 Gas + 高性能 + IP 保护"为核心卖点
- **融资**: 2022 年 7 月 Republic Capital 领投 2000 万美元 Token 私募轮（Jump Crypto、Crypto.com、Huobi、Kucoin、Bitbank、Mirana Ventures 参投）；2022 年 12 月 Galaxy Interactive、Nexon、Jets Capital、ChainGuardians 等参与新一轮战略融资（金额未公布）；同月 Republic 平台公募 100 万美元（$0.035/OAS，12 小时售罄）
- **代币**: OAS 总供应 100 亿个，主网启动 6 年后由 DAO 确定额外质押奖励供应量

## 核心业务/产品

### 三层网络架构
1. **Hub 层（L1）**: EVM 兼容，PoS 共识，负责安全地交换和存储数据、管理 FT/NFT、管理跨链桥、记录 Verse 层 Rollup 数据。质押 1000 万个 OAS 可成为验证者
2. **Verse 层（L2）**: 开发者构建 dApp（游戏）的专用 Optimistic Rollup L2。任何质押 100 万个 OAS 的开发商可创建定制 L2，设置 Gas 费用承担方等参数。核心差异——取消以太坊传统 Optimistic Rollup 的 7 天挑战期，由各 L2 指定验证者直接确认，实现快速最终确定
3. **dApp 层**: 用户使用 dApp 的应用层

### 五种 Verse L2 生态（截至 2023 年 7 月）
1. **MCH Verse**: Double Jump Tokyo 最初为《我的加密英雄》建立，后添加 6 款游戏（共 7 款）
2. **TCG Verse**: 专用于卡牌游戏的 L2，8 款卡牌策略游戏
3. **Home Verse**: Double Jump Tokyo 开发运营，接纳所有类别游戏，8 款游戏
4. **Chain Verse**: ChainGardians（DAO 驱动的游戏资产发行平台）运营，3 款独立游戏
5. **Saakuru Verse**: AAG（Web3 基础设施公司）运营，2 款小游戏

### 三种代币标准
- **vFT / vNFT（Verse 限定代币）**: 仅在特定 L2 内使用，不可跨链。典型用例：游戏内货币（vFT）和 IP 绑定 NFT（vNFT），vNFT 可防止被用于非预期目的或假冒
- **oFT / oNFT（全生态互操作代币）**: Hub 层发行，可在整个 Oasys 生态（所有 Verse + Hub）使用，也可跨链至以太坊等外部网络。适合需要跨游戏流通的资产（如土地、物品）
- **exFT / exNFT（外部代币）**: 在 Oasys 之外网络铸造，通过跨链桥进入 Oasys 生态

## 关键数据
- 主网上线时间: 2022 年 10 月 25 日
- 早期状态（2022 年 12 月）: 3 个 Verse、11 款游戏
- 截至 2023 年 7 月已上线链游: 28 款（7 个月内增长 155%）
- Verse L2 数量: 3 个（2022.12）→ 5 个（2023.07）
- Verse 层质押门槛: 100 万 OAS
- Hub 层验证者质押门槛: 1000 万 OAS
- OAS 总供应量: 100 亿个
- 第一批 21 个机构验证节点（2022.10 上线时）
- OAS 上市交易所（2022.12.12）: OKX、Huobi、Gate、KuCoin、Bybit
- 合作游戏巨头: 育碧（首款链游《Champions Tactics》）、世嘉（《三国志大战》Web3 重制版）、Com2uS（《Summoners War：Chronicles》）

## 竞争优势 / 护城河
- **产业联盟模式**: 验证者节点本身就是游戏巨头（育碧、世嘉等），利益深度绑定，与一般公链的"先建链后招商"模式截然不同
- **用户零 Gas**: Verse 层开发商可选择承担 Gas 费用，消除 Web2 玩家最大入门障碍
- **IP 保护机制**: 许可式 Verse 层 + vNFT 标准，使传统游戏公司的 IP 不会被滥用或假冒，解决巨头入场最大的顾虑
- **快速最终确定**: 取消挑战期的 Optimistic Rollup 设计，虽牺牲一定安全性但换取了链游所需的高速响应
- **日本游戏产业资源**: 万代南梦宫、世嘉等日本顶级游戏公司深度参与，在 IP 获取上具有天然优势

## 风险 / 争议
- **Verse 层中心化（"Web2.5"）**: 每款游戏上线需 L2 验证者批准，开发者无法自由部署，文章自称为"Web2.5 区块链"
- **验证者依赖风险**: 如果某个 L2 的开发商出现问题或停止运营，该 L2 上的用户资产将面临风险
- **去中心化承诺待兑现**: 路线图规划了 DAO 治理，但从 Web2.5 → DAO 的迁移在加密历史上成功案例极少
- **生态增长依赖巨头 IP**: 短期成功取决于能否持续引进游戏巨头的核心 IP，中小开发者的参与度和生态自生长能力存疑
- **与已有游戏链的竞争**: Ronin 已有 $43 亿 NFT 交易量的先发优势，Immutable X、Polygon 等也在争夺游戏开发者

## 相关事件时间线
- **2018**: Double Jump Tokyo 上线《我的加密英雄》于以太坊，因用户体验问题开始研发游戏专用公链
- **2021**: NFT 牛市巅峰，游戏巨头开始重点关注 Web3；育碧发布《对区块链的愿景》报告并在 Tezos 上试水 NFT
- **2022 年初**: 世嘉注册 "SEGA NFT" 商标
- **2022 年 7 月**: Republic Capital 领投 2000 万美元 Token 私募轮
- **2022 年 10 月 25 日**: Oasys 主网上线，首批 21 个机构验证节点部署
- **2022 年 12 月 6 日**: Galaxy Interactive、Nexon 等参与新一轮战略融资
- **2023 年 5 月**: 世嘉通过 Oasys NFT 市场 Oasy 发行首款 NFT（《虚拟战士》IP）
- **2023 年 6-7 月**: 日本区块链周 Oasys Special Event——育碧、世嘉宣布首款链游将基于 Oasys；Com2uS 宣布《Summoners War》上线 Oasys
- **2023 年末**: 世嘉《三国志大战》Web3 重制版计划上线（PC 端，日/英语）

## 相关实体
- [[ronin]] — 游戏专用 L1（Sky Mavis/Axie Infinity），Oasys 在游戏公链赛道最直接的竞争者；Ronin 自下而上（单一爆款衍生），Oasys 自上而下（巨头联盟共建）
- [[ygg]] — Yield Guild Games，联合创始人 Gabby Dizon 同时是 Oasys 核心团队成员
- [[klaytn]] — 韩国游戏公链（Kakao 旗下），同为亚洲传统游戏公司主导的公链方案，但架构不同（侧链生态 vs Hub+Verse 模块化）
- [[soneium]] — Sony L2（OP Stack），日本另一游戏巨头在 Web3 的布局，但走的是通用 L2 路线而非游戏专用链

## 来源
- [[来源_2022-12_Oasys_EVM兼容_零手续费_游戏公链_PANews]] — PANews 2022 年 12 月报道：Oasys 主网上线早期全貌（3 Verse/11 游戏）、融资历程（Republic Capital $2000 万领投+公募 $0.035/OAS）、创始团队构成、三代币标准（vFT/oFT/exFT）、代币经济学参数（100 亿总量/100 万创建 Verse/1000 万成为验证者）
- [[来源_2023-07_Oasys_游戏公链_育碧_世嘉]] — Followin 2023 年 7 月报道：Oasys 架构详解、育碧/世嘉首款链游分析、Oasys 团队与验证者构成、Verse 层生态全景（5 Verse/28 款游戏）
