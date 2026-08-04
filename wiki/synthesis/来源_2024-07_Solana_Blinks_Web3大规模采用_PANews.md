---
type: source
source_type: article
url: https://www.panewslab.com/zh/articledetails/93518vc5s603.html
date: 2024-07
ingested: 2026-07-01
---

# Solana Blinks：被吹上天的区块链链接能引起Web3大规模采用吗？

## 阅读证据
- 总行数: 129
- Q1 (前25%): Blinks即Blockchain Links，核心创新是跳过进入网页的步骤，允许用户直接通过一个URL/二维码进行链上操作。技术架构由URL方案、GET路由和POST路由三部分组成，分别负责识别Action Provider、向客户端返回可读信息、构建交易并进行签名提交
- Q3 (中后25%): Phantom、Backpack 和 Solflare 三大原生钱包已支持 Blinks（需在设置中开启"Solana Actions on X.com"实验性功能），也可下载 Dialect Blinks Chrome 插件
- Q4 (最后25%): Google via TipLink 通过谷歌账号创建托管钱包，一个谷歌账号对应一个钱包地址，对 Web2 用户操作友好，代表了打通传统互联网账户与链上钱包的重要一步
- 图片: 11 张（全部为 PANews CDN 外部 URL，包括工作流程图、Raydium/Jupiter支持截图、投票/捐赠/铸造/Swap应用截图、Phantom设置截图、Dialect GitHub截图、Dial.to搜索截图、Google TipLink截图、TipLink捐赠链接截图——均未本地下载）

## 核心要点
- Blinks = Blockchain Links，是 Solana Actions 的应用之一，将链上操作（交易签名、代币交换、NFT铸造、捐赠、投票等）转化为可分享的 URL 或二维码
- 与传统 Web3 交互相比，Blinks 的核心突破是消除"进入网站"的必要步骤——用户可在 X 平台（推特）信息流中直接完成链上操作，无需跳转到独立网站
- 目前仅支持 X 平台（通过浏览器插件），且绝大多数 X 用户使用手机端，移动端支持不足是当前主要瓶颈
- Raydium 已支持通过 Blinks 对所有币种提供 1% 返佣，将返佣与链上行为即时绑定，减少传统返佣链接与用户行为之间的时间割裂
- 安全方面，Blinks 项目需通过 Dialect 注册表审核且必须开源（放入 Dialect GitHub 仓库），但文章也承认新的骗术不可避免，"具体的安全问题还需要在实践中进一步探索"
- 与 TON 对比：TON 的优势在于通过 Telegram Mini App 将 Web2 用户丝滑带入 Web3，但受限于 Telegram 单一平台；Blinks 理论上适用于"任何能显示 URL 的 Web 界面"，终极目标是所有支持链接/二维码的平台都支持 Solana 网络支付

## 关键数据
- Raydium Blinks 返佣比例：所有币种 1%
- 原生支持 Blinks 的钱包数量：3 个（Phantom、Backpack、Solflare），需在设置中开启实验性功能"Solana Actions on X.com"
- Blinks 支持平台数（截至文章发布）：仅 X 平台（通过 Chrome 插件），Dial.to 测试中发现还支持 Google via TipLink 等渠道
- Dialect 注册表审核要求：代码开源并放入 Dialect GitHub 仓库（github.com/dialectlabs/actions），完成后还需在 Airtable 登记
- TipLink 托管钱包映射：1 个谷歌账号 = 1 个 Solana 钱包地址
- Solana Blinks 终极愿景：任何能显示 URL / 二维码的平台都支持 Solana 网络支付（类比微信小程序的全场景覆盖）

## 与已有知识的关系
- 补充 [[solana]] — 新增 Blinks 作为 Solana 生态的创新支付/交互层，是 Solana"商业落地和UX出色"的又一例证；Blinks 技术架构（Solana Actions）体现 Solana 生态的开发者工具丰富度
- 补充 [[socialfi]] — Blinks 是 SocialFi 的基础设施创新：将链上操作（swap/mint/捐赠/投票/预测）嵌入社交信息流，降低 Web2→Web3 转化的操作摩擦，与 TON/Telegram Mini App 形成直接竞争路径
- 补充 [[jupiter]] — Jupiter 已支持 Blinks，是 DEX 聚合器通过新型交互方式扩展用户触达面的案例
- 与 [[来源_2024-05_Notcoin_mini_dApp_Mass_Adoption转折点]] 和 [[来源_2024-12_TON生态研报_链上交易量_Telegram双赢]] 形成对比参照——两种不同的"社交+链上"路径：TON 绑定单一超级App（Telegram），Blinks 追求跨平台通用协议
- [[defi]] — Blinks 将 DeFi 操作（swap/限价单/流动性提供）从独立网站解绑到社交信息流，代表 DeFi 交互界面的一次范式探索

## 值得记住的引用
> "想像一下你在微信就可以通过二维码和链接邀请你的朋友一起打土狗，又或是付款给你的家人们去买个奶茶，所有微信 mini app 能做到的事情，发生在 Web3 会怎么样？那就是 Solana Blinks 所带来的革命。"

> "Blinks 提供了一种更加便捷的支付方式，是一种创新支付方式，毫无疑问是值得尝试的。目前 meme 的主要用户活跃平台也是 X 上，所以将 X 选择为第一站无疑是正确的，至少在重 meme 生态的 Solana 网络上的确能激起千层浪花。"

> "Ton Chain 的优势在于能把 Web2 的用户透过通讯软件中的 mini app 丝滑的带入 Web3 的复杂网络中，但载体受限于「Telegram」，然而 solana blink 则适用于「任何的通讯软体」只要透过二维码跟连结即可将 Web2 和 Web3 的桥梁打开。"

## 我的笔记
- 这篇文章的技术分析深度一般，但对 Blinks 与 TON 的对比很有价值——指出了两种"社交+链上"路径的本质差异：TON 绑定单一超级App（Telegram），Blinks 追求跨平台通用协议。如果 Blinks 真的实现"所有能显示 URL 的平台都支持 Solana 支付"，其 TAM 将远大于 TON。但关键问题是：跨平台零散的 URL 分享是否真的能形成网络效应？微信小程序的强大恰恰来自于它在一个超级App内部的闭环体验，而非跨平台链接的散落分布。
- 文章标题问"真的能引起Web3大规模采用吗？"但回答相当谨慎——承认仅支持X平台远远不够、手机端体验缺失、安全问题待验证。这种谨慎是对的。Blinks 在2024年中被"吹上天"更多是叙事层面的炒作，真正的产品-市场匹配需要在更多平台（Telegram/Discord/移动端）验证。如果到2025年底 Blinks 仍只支持X网页端，这个叙事基本就证伪了。Solana Breakpoint 2024 的"Blinks 时刻"能否转化为实际用户增长，取决于跨平台落地的执行速度。
