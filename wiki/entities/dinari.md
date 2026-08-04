---
type: entity
entity_type: company
created: 2026-07-02
updated: 2026-07-02
tags: [rwa, tokenized-equities, stocks, trad-fi]
---

# Dinari（代币化股票发行方）

## 基本信息
- 定位：受美国监管的代币化股票发行平台，专注合规框架下进行股票代币化
- 注册地：美国（其他绝大多数竞争对手注册在欧洲）
- 成立时间：2021年
- 融资：2023年种子轮 $1000 万；2024年 A轮 $1270 万
- 主要投资者：Hack VC、Blockchange Ventures、Coinbase CTO Balaji Srinivasan、F Prime Capital（富达旗下）、VanEck Ventures、Blizzard（Avalanche Fund）
- 核心链：Arbitrum、Base、以太坊主网

## 核心业务/产品

### dShares 代币化股票
- 面向非美国用户（需 KYC），dShares 与真实股票 1:1 对应
- 用户通过稳定币支付，Dinari 通过合作券商（Alpaca Securities 或 Interactive Brokers）完成订单，股份托管于银行
- 支持股息分配和股票分割
- **关键限制：dShares 不能在链上自由交易/转账**，卖出只能通过 Dinari 官网（购买流程的反向）；交易时间也须遵循美国交易时段
- 支持输出股票交易 API 与其他交易前端合作

### 国债产品
- 浮动利率国债产品贡献了 Dinari 的绝大部分 TVL

## 关键数据
- 代币化股票市值较小：仅 MSTR 一支超过 $100 万；超过 $10 万的 dShares 仅 5 支
- 与 Backed Finance 对比，TVL 差距约 10 倍（Dinari 约 Backed 的 1/10）
- 自建储备证明透明度页面

## 竞争策略
- **合规优先定位**：公司注册在美国，产品受 SEC 监管框架认可。前任 SEC 主席 Gary Gensler 都未能对其业务模式挑出毛病；新任 SEC 主席 Paul Atkins 上任后 SEC 曾专门约谈 Dinari 演示系统（来源：SEC 会议备忘录）
- 加密货币的角色仅为入口和支付方式，产品功能与传统券商（富途、Robinhood）区别不大

## 弱点 / 劣势
- 链上可组合性完全丧失：dShares 无法在链上交易、质押、做 LP，与传统股票交易体验无实质区别
- 对比竞争对手（如 Backed Finance 支持无限制 ERC-20 链上自由交易），用户体验和 TVL 显著落后
- 对目标用户（非美国人）而言，交易体验不优于富途等传统券商，甚至可能手续费更高
- 无法使用融资融券等高级交易功能

## 竞争格局
- [[backed]] — 瑞士注册，支持无限制 ERC-20 代币链上自由交易，TVL 约为 Dinari 的 10 倍
- [[robinhood]] — 2025年6月在欧盟推出代币化股票产品（Arbitrum 链），但为差价合约而非真实代币化股票
- [[kraken]] xStocks — 2025年6月上线，与 Backed Finance 架构一致，拥有 200+ 股票产品

## 相关事件时间线
- 2021: Dinari 成立
- 2023: 完成 $1000 万种子轮融资，代币化股票产品正式上线
- 2024: 完成 $1270 万 A轮融资；SEC 前任主席 Gensler 未对其模式提出异议
- 2025: 新任 SEC 主席 Paul Atkins 上任后约谈 Dinari 要求演示系统

## 我的判断
Dinari 代表了"合规优先但牺牲链上价值"的路径，虽然监管认证无懈可击，但其 dShares 无法链上交易/质押使其对 web3 用户毫无吸引力。当前 TVL 数据已证明该模式的市场接受度有限。除非监管环境变化导致其他方案被禁，否则 Dinari 的竞争地位将持续弱化。

## 相关实体
- [[backed]] — 直接竞争对手，瑞士同类型公司，支持链上交易
- [[robinhood]] — 竞争对手，面向欧盟的代币化股票产品
- [[kraken]] — xStocks 合作方
- [[mystonks]] — 社区项目，类似模式的 meme stonks 代币（储备超 $5000 万）

## 来源
- [[来源_2025-04_RWA布局_10项目_PayFi_Biteye]] — 补充 Dinari 2024 年推出近百种 dShares、USD+ 稳定币、跨链支持与 API 合作方案；dShares 股息自动兑换为 USDC 发放
- [[来源_2025-07_代币化美股_现状前景_MintVentures]]
