---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [layer2, ethereum, nft, gaming, zk-rollup]
aliases: [IMX, Immutable, Immutable zkEVM]
---

# Immutable X

## 基本信息
- 类型: Ethereum L2 (Validium → ZK Rollup)
- 赛道: Web3 游戏基础设施 / NFT 扩容
- 成立时间: 2018年（公司 Immutable 成立）
- 创始团队: James Ferguson, Robbie Ferguson（兄弟）
- 总部: 澳大利亚悉尼
- 核心技术: 最初基于 StarkEx (StarkWare Validium)，后迁移至 Polygon zkEVM (Immutable zkEVM)
- 代币: IMX
- 融资: $200M+

## 核心业务/产品

- **Immutable X（StarkEx Validium）**: 以太坊上专门针对 NFT 的 Layer 2 扩容方案，通过 StarkWare 的 StarkEx Validium 技术实现免 Gas 铸造和交易 NFT，支持 ERC-721 和 ERC-1155 标准。数据可用性在链下存储（Validium 模式）。

- **Immutable zkEVM**: 2023 年与 Polygon 合作宣布的 ZK Rollup 方案，基于 Polygon 的 zkEVM 技术栈构建，兼容 EVM 的 Web3 游戏专用链。2024 年主网上线，代表从 Validium 向 ZK Rollup 的技术路线转向。

- **Immutable Marketplace**: NFT 交易市场，支持免 Gas 撮合交易。

- **Immutable SDK**: 面向游戏开发者的工具包，支持 Unity / Unreal 引擎集成，降低传统游戏开发者进入 Web3 的门槛。

- **Immutable Passport**: 面向玩家的一站式工具，支持一键登录、法币入金、资产管理等功能。

## 关键数据

- **公司累计融资**: $200M+（2022 年完成，估值 $2.5B，投资者包括 Temasek、Coinbase、King River Capital、腾讯等）
- **IMX 代币初始流通**: ~10%（TGE 首日流通率，与 OP/APE 等同期项目类似）
- **技术架构**: 最初采用 StarkWare 的 StarkEx（Validium 模式——数据可用性在链下，与 ZK Rollup 区别在于 DA 存储位置）
- **知名游戏**: Gods Unchained（卡牌游戏，Immutable 旗下开发）、Starfall Chronicles（AI RPG，Virtuals 生态游戏，计划上线 Immutable，ATH $5500 万市值）
- **生态定位**: 与 WAX、Flow、Oasys、Hive 并列为游戏专用 Appchain，在游戏公链"三分天下"格局中代表 Appchain 路线

## StarkEx 合作详情（2020-2022 年）
- **合作背景**：ImmutableX 最初通过 Gods Unchained 获得广泛应用，Gods Unchained Genesis 卖掉 600 万张卡牌总价值 $620 万，但 gas 成本高达 $600 万
- **能耗对比**：Gods Unchained 800 万张 NFT 卡牌在以太坊上消耗约 4.9 亿千瓦时，通过 zk rollup 压缩至仅 1,030 千瓦时，能耗降低 475,000 倍
- **TikTok 合作**：StarkEx 技术直接促成了 TikTok 与 ImmutableX 的合作，TikTok 特别提到"StarkWare 是首个碳中和 Layer2 扩容方案"
- **收入贡献**：据 Growjo 数据，StarkWare 从 ImmutableX 处获得约 $100 万/年 收入（2021），预计 2022 年 $300-500 万
- **后期转向**：2023 年 Immutable 宣布从 StarkEx 迁移至 Polygon zkEVM 技术栈（Immutable zkEVM），标志着 StarkWare 与 Immutable 的合作路线转向
- **代币解锁**: 2022 年币安上市 IMX，第一天的流通率为 10%，属于当时首批中低流通列表项目

## 竞争优势 / 护城河

- **先发优势**: 最早一批以太坊 L2 游戏扩容方案，2018 年即进入赛道，积累了知名游戏 IP 和开发者信任
- **StarkWare 技术背书**: 建立在经过审计的 StarkEx 引擎上，与 dYdX、Sorare 等共享技术栈，技术可靠性经过市场验证
- **Polygon zkEVM 迁移**: 通过合作获得 EVM 兼容性，降低传统以太坊开发者的迁移成本；迁移方向与 Rollup 技术演进趋势一致
- **免 Gas 体验**: 通过 Validium 架构，用户在 Immutable X 上铸造和交易 NFT 无需 Gas 费，降低 Web2 用户进入门槛
- **SDK 和工具链**: Unity / Unreal 引擎 SDK + Passport 工具，形成从开发到分发的完整闭环
- **监管合规**: 作为受机构投资者认可的澳大利亚公司，在合规和牌照上有较成熟布局

## 风险 / 争议

- **活跃用户增长乏力**: "IMX 珠玉在前，但并没有非常强力的 CP 带动活跃用户增长"——缺少爆款游戏带动生态活跃，用户增长不如 Ronin（Axie Infinity）等有强 IP 支撑的生态
- **流动性问题**: 独立游戏 L2 面临着生态流动性不足的问题，游戏内资产价格支撑依赖自建 DEX 和交易市场，不如共享以太坊主网或 Solana 主网流动性
- **技术路线切换风险**: 从 StarkEx Validium 到 Polygon zkEVM 的迁移意味着技术栈重构和战略转向，带来执行风险和时间成本
- **竞争激烈**: 游戏 L2 赛道竞争格局愈发拥挤——Ronin（Axie 生态）用强 IP 拉动 DAU，Sonic SVM（Solana 游戏 L2）打通 Solana 主网流动性 + TikTok 引流，WAX 在交易量上领先——Immutable 地位受到挑战

## 相关事件时间线

- **2018年**: Immutable 公司成立，创始团队 James Ferguson、Robbie Ferguson 等
- **2021年**: Immutable X 主网上线，基于 StarkEx Validium；Gods Unchained 上线
- **2021-2022年**: IMX 代币 TGE，上线中心化交易所
- **2022年**: 完成 $200M+ C 轮融资，估值 $2.5B
- **2023年**: 宣布与 Polygon 合作推出 Immutable zkEVM，从 Validium 迁移至 ZK Rollup
- **2024年**: Immutable zkEVM 主网上线

## 我的判断

Immutable X 是 Web3 游戏基础设施领域最早的探索者之一，先发优势和 StarkWare / Polygon 的技术合作为其构建了相对坚实的护城河。但其面临的核心矛盾是"技术先进但生态活跃度不足"——缺少像 Axie Infinity 之于 Ronin 那样的强 IP 驱动用户增长。从 StarkEx Validium 到 Polygon zkEVM 的迁移既是技术升级，也是应对竞争压力的被动调整。长期来看，Immutable 的成功取决于能否吸引到足够的优质游戏内容（特别是传统游戏大厂的 Web3 转型项目）并使用户活跃度持续增长。在 Sonic SVM、Ronin、WAX、Oasys 等多条游戏链的竞争中，最终胜出的将是能持续产出优质游戏内容的平台，而非技术最优者。

## 相关实体

- [[starkware]] — StarkEx 技术提供商，Immutable X 最初采用的扩容引擎
- [[sonic-svm]] — Solana 游戏 L2，直接竞品，代表"依托高性能 L1 共享流动性"的差异化路线
- [[oasys]] — 同为 EVM 兼容游戏专用链，零手续费定位
- [[ronin]] — Axie Infinity 生态专用链，通过强 IP 驱动用户增长
- [[virtuals]] — Freya / Starfall Chronicles 将上线 Immutable，代表 AI Agent + Web3 游戏跨界融合案例

## 相关概念

- [[layer2]] — Validium / ZK Rollup 分类中的代表项目
- [[nft]] — 核心应用场景
- [[gamefi]] — 所属赛道，游戏公链格局的重要组成部分

## 来源

- [[来源_2024-05_Web3游戏行业趋势_JLab]] — 游戏公链"三分天下"格局：Appchain 类别中包含 Immutable X，与 WAX/Flow/Oasys 并列
- [[来源_2025-01_Sonic_SVM_Web3游戏_Solana扩展_PANews]] — 竞品分析：Immutable X 是以太坊 NFT 游戏 L2 代表，有 Gods Unchained 等知名游戏
- [[来源_2023-05_SUI游戏生态9款潜力项目]] — Immutable 作为游戏专用链的参照对比
- [[来源_2025-01_VIRTUAL生态_50亿市值_叙事解析_odaily]] — Starfall Chronicles 即将上线 Immutable，代表 AI Agent 游戏入驻 Immutable 生态
- [[来源_2022-07_StarkWare_80亿美元估值_以太坊扩容]] — ImmutableX 与 StarkEx 原始合作数据：Gods Unchained 能耗降低 475,000x、StarkWare 年收入 $1M+（2021）、TikTok 合作背景、"首个碳中和 L2"声明
- [[来源_2021-11_Layer2介绍_ZK_OP_Rollup_Wayne]] — 早期（2021 年）IMX 基于 StarkEx Validium 的技术动机分析、"Volition"设计理念、作者对"把选择交给用户"的质疑
- [[来源_2023-02_ImmutableX_NFT_扩容_深潮TechFlow]] — 2023 年初 Immutable X 全景介绍：9000 TPS/零 Gas 费/45 万+ Gods Unchained 玩家/30 万+ GoG 玩家/$2400 万 GoG NFT 销售额/IMX 代币三功能（费用 20%/质押/治理）/API 抽象层和 Links 中间层设计

