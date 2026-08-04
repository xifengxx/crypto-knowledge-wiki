---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [layer1, payment, rwa, cross-border, financial-inclusion]
aliases: [XLM, Stellar Lumen, Stellar Network, Stellar Development Foundation]
---

# Stellar

## 基本信息
- 类型: protocol
- 成立时间: 2014 年
- 创始人: Jed McCaleb（前 Ripple 联合创始人）、Joyce Kim
- 运营主体: Stellar Development Foundation（SDF，非营利组织）
- 定位: L1 blockchain for payments，聚焦跨境支付和普惠金融
- 共识机制: Stellar Consensus Protocol（SCP）— 联邦拜占庭协议（FBA），非 PoW/PoS
- 代币: XLM（Lumen）
- 智能合约平台: Soroban（2024 年 3 月主网上线）
- 收购: 2018 年收购 Chain（Visa/纳斯达克/花旗投资的区块链基础设施公司）

## 核心业务/产品

### Stellar Network（核心支付 L1）
- 专注**跨境支付和普惠金融**，尤其服务于新兴市场无银行账户人群
- SCP 联邦拜占庭协议：验证者自行选择信任节点，达成共识速度 3-5 秒，交易费< $0.01
- **Anchor 网络**：全球 100+ Anchor 提供法币<->加密货币出入金通道，形成去中心化流动性网络
- 与 [[ripple]]（XRPL）同源（Jed McCaleb 为两项目联合创始人），但定位差异显著：Stellar 聚焦个人普惠金融，Ripple 聚焦银行间支付

### Soroban 智能合约平台（2024 年上线）
- 为 Stellar 带来全面的可编程性，支持 Rust 开发智能合约
- 对标 XRPL 的 Hooks/侧链方案，提供更灵活的链上编程能力
- 吸引新开发者：Electric Capital 2024 报告显示 StellarOrg 有 500+ 新开发者加入

### RWA 代币化
- **Franklin Templeton FOBXX**：2021 年推出，美国第一只 SEC 批准的链上货币市场基金，使用 Stellar 处理交易和所有权记录，管理资产（AUM）超 **$290 亿**，代表 BENJI 代币，年化收益 4.88%
- FOBXX 被 BlackRock BUIDL 基金超越的原因之一：BUIDL 部署在以太坊生态（与 DeFi 兼容性强），而 FOBXX 最初仅部署在 Stellar 链上，与主流 DeFi 生态连接较少

### 跨境支付与金融普惠
- **MoneyGram**：在 Stellar 区块链上使用 USDC 实现跨境美元流动，覆盖 180 国家兑现，30+ 国家 USDC 转换；2024 年推出 MoneyGram Wallet（非托管钱包），连接美国至巴西/墨西哥等通道
- **Felix Pago**：基于 WhatsApp 的即时转账服务，底层使用稳定币 + Bitso 在 Stellar 网络上运行
- **UNHCR + Circle**（2022 年 12 月）：联合国难民署与 Circle 合作，通过 Stellar 向乌克兰战争流离失所者分发 USDC 数字美元，支持智能手机数字钱包 + 完全集成的兑现方案
- **Stripe**（间接）：2024 年 Stripe 以 $11 亿收购 Bridge（稳定币支付基础设施），Bridge 的早期技术积累与 Stellar 生态相关

## 关键数据
| 指标 | 数据 | 说明 |
|------|------|------|
| 成立时间 | 2014 年 | — |
| 共识速度 | 3-5 秒 | SCP 联邦拜占庭协议 |
| 交易费 | < $0.01 | 极低费用，适合支付场景 |
| 市值排名 | 历史前 30-40 | — |
| 代币总供应 | 500 亿 XLM（固定上限） | 2019 年取消通胀机制，转为固定供应 |
| 流通供应 | ~290 亿 XLM | 持续释放中 |
| 新开发者 | 500+ | Electric Capital 2024 报告（StellarOrg） |
| FOBXX AUM | $290 亿+ | Franklin Templeton 链上货币市场基金 |
| XLM 涨幅（2024.12） | 1 个月 6x | 老牌公链复兴行情 |
| XLM 涨幅（山寨季 2024.11） | 4x | Trump 当选后山寨季 L1 轮动 |
| Anchor 数量 | 100+ 全球 | 法币出入金通道 |

## 竞争优势 / 护城河
1. **SCP 共识创新**：联邦拜占庭协议（FBA）在性能（3-5 秒确认）和去中心化之间取得独特平衡，节点自由选择信任集，无需全局矿工/PoS 验证
2. **合规先发优势**：FOBXX 作为 SEC 批准的首个链上货币基金（2021）说明 Stellar 的监管友好程度；UNHCR 人道主义援助场景验证了合规支付能力
3. **新兴市场基础设施**：180 国家兑现网络（通过 MoneyGram）+ 100+ Anchor → 法币出入金的全球覆盖是难复制的网络效应
4. **非营利治理**：SDF 的非营利结构降低了商业利益冲突的风险，有利于吸引金融机构和政府合作
5. **RWA 代币化的蓝筹背书**：Franklin Templeton（$290 亿+ AUM）选择 Stellar 作为首发链，是 L1 中少有的顶级资管公司直接部署案例

## 风险 / 争议
1. **与 Ripple 的同源竞争**：Jed McCaleb 离开 Ripple 创建 Stellar，两者在支付赛道长期竞争，Stellar 的社区规模和市场关注度远不及 XRP
2. **生态活跃度不足**：与 Solana、以太坊等生态相比，Stellar 的 DeFi/NFT/GameFi 生态薄弱；Soroban 智能合约上线后能否吸引开发者尚待验证
3. **Franklin Templeton 生态锁定**：FOBXX 虽然在 Stellar 发行，但用户需通过富兰克林官方 App 完成 KYC 后才能交互，链上 DeFi 组合性几乎为零——$290 亿 AUM 并未转化为链上活跃度
4. **Meme 驱动行情的可持续性**：2024 年 12 月 XLM 6x 涨幅主要跟随"老牌公链复兴"叙事和 Meme 发射平台概念，缺乏生态内在增长支撑
5. **BlackRock BUIDL 的竞争**：FOBXX 被 BUIDL 超越（以太坊生态优势），说明 Stellar 的链选择可能限制了头部 RWA 产品的可组合性

## 相关事件时间线
- 2014 年：Stellar 由 Jed McCaleb & Joyce Kim 创立
- 2015 年：Stripe 参与了 Stellar 的早期资助（$3M）
- 2018 年：收购 Chain（Visa/纳斯达克/花旗风投参投的区块链公司）
- 2019 年：取消通胀机制，XLM 转为固定供应 500 亿
- 2021 年：Franklin Templeton 在 Stellar 上推出 FOBXX（SEC 批准的首个链上货币基金）
- 2022 年 12 月：UNHCR + Circle 通过 Stellar 向乌克兰难民分发 USDC
- 2024 年 3 月：Soroban 智能合约主网上线
- 2024 年 12 月：XLM 1 个月 6x 涨幅（老牌公链复兴行情）

## 相关实体
- [[ripple]] — 同源竞争项目（两者均由 Jed McCaleb 参与创建），Stellar 定位个人普惠金融 vs Ripple 定位银行间支付
- [[huma]] — PayFi 协议，Stellar Development Foundation 为其 2024 年 $3800 万融资的投资者之一
- [[circle]] — USDC 发行商，与 Stellar 深度合作（UNHCR 援助 + MoneyGram 支付通道）
- [[franklin-templeton]] — 发行 FOBXX（$290 亿+ AUM）链上货币市场基金在 Stellar
- [[chain]] — 2018 年被 Stellar 收购
- [[moneygram]] — 使用 Stellar + USDC 的跨境支付合作伙伴（180 国兑现网络）
- [[solana]] — 支付赛道的竞争对手，Solana PayFi 叙事 vs Stellar 传统支付定位
- [[tron]] — 稳定币支付赛道的竞争对手（USDT 主导）

## 来源
- [[来源_2024-12_Pantera_Paul_2025年8大预测]] — Felix Pago 使用 Stellar 进行 WhatsApp 转账
- [[来源_2024-12_老牌公链狂拉_MEME发射平台_百倍机会_BlockBeats]] — XLM 1 个月 6x 涨幅
- [[来源_2024-12_Crypto的捡钱时间_山寨季分析]] — XLM 4x 涨幅
- [[来源_2024-12_XRP_500亿市值飙升_Ripple_RWA_ETF_insights4vc]] — Jed McCaleb 离开 Ripple 创建 Stellar
- [[来源_2024-12_DePayFi_智能美元_PayFi堆栈_IOSG]] — Stellar 支付定位的相关讨论
- [[来源_2023-04_Web3确定性_金字塔分析框架_The_Quibbler]] — Stellar 与 BTC/XRP 的支付定位对比
- [[来源_2024-09_Huma_Finance_3800万融资_PayFi_ChainCatcher]] — SDF 投资 Huma
