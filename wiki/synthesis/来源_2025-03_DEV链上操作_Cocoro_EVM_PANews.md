---
type: source
source_type: article
url: https://www.panewslab.com/zh/articledetails/1zofj3cg.html
date: 2025-03
ingested: 2026-07-02
---

# DEV如何进行链上操作？以Cocoro为例详解EVM链上活动追踪方法

## 阅读证据
- 总行数: 160
- Q1 (前25%): Cocoro部署在BASE链,合约地址0x937a1cFAF0A3d9f5Dc4D0927F72ee5e3e5F82a00,代币经济学为75% LP + 20% 社区空投 + 5% DAO储备金,可通过OKX网页版查看资金池变化验证分配
- Q3 (中后25%): dev将两个Uniswap V3单边池的NFT(Token ID分别为2256046和2256052)转移给地址0x735A2Ea69997e668dD0f4b2a30fFa9f01e045072,用于验证LP归属
- Q4 (最后25%): impersonator.xyz是一个开源项目,可通过WalletConnect或iFrame模拟任意以太坊地址登录dapp,支持Base链和Solana链(仅WalletConnect)
- 图片: 12 analyzed / 0 decorative skipped / 0 external URLs unavailable (全部来自PANews CDN,均为操作截图)

## 核心要点
- 以Cocoro($cocoro)在BASE链上的发行为例,系统讲解了如何利用区块浏览器(Basescan)追踪EVM链上dev(项目方)的完整操作链条:从合约创建、代币铸造、单边池添加到LP所有权转移
- 介绍了三种查看Uniswap V3 LP池详细信息的方法:官方APP(原生支持但需下载)、直接构造URL(需提前获取NFT Token ID)、impersonator.xyz模拟登录(两套方案:WalletConnect和iFrame)
- 实操演示了代币经济学验证方法:通过OKX的"资金池变化"和"持币地址"功能交叉核验dev是否按公开比例分配代币
- 揭示了重要安全实践:Own The Doge官方声称75% LP永久锁定,但通过区块浏览器核查发现相关地址并未执行任何锁池子操作,仅可见一笔约170万u的手续费领取
- 讲解了Uniswap V3 LP所有权机制:添加流动性时自动铸造NFT记录池子详情,转让NFT即转让池子所有权,锁池子也通过对NFT操作实现

## 关键数据
- Cocoro一小时市值最高突破100M美元
- 初始代币分配:75% LP(两笔各375M单边池) + 20% 社区空投 + 5% DAO储备金 = 总量1B代币
- 截至分析时,两个Uniswap V3池中未领取手续费分别为12万u和11.9万u,已领取手续费约170万u,项目方手续费总收入约194万u
- dev地址:0x319C399d3D7d7A2972a6A59646A060Bb29d82A29

## 与已有知识的关系
- 补充 [[base]] — BASE链上的具体meme代币发行案例和链上操作追踪方法
- 补充 [[uniswap]] — Uniswap V3单边池的实际操作细节(铸造NFT作为LP凭证、通过NFT转移转让池子所有权)

## 值得记住的引用
> "dev在初始时加了两个单边池,并不是双边池。在下面部分可以看到此池子对应NFT的Token ID为2256046"
> "目前两个池子中未领取的手续费分别为12万u和11.9万u,通过第二章第4节内容知已领取的手续费为170万u,项目方目前在手续费上收入总共194万u"

## 我的笔记
- 这是一篇非常实用的操教程,适合新人快速上手链上分析,但也说明当前EVM生态的工具碎片化问题——OKX/Basescan/Uniswap App/impersonator每个工具各有专长但都不完整。实测发现OWN THE DOGE声称锁池子但实际并未执行,这说明meme代币社区获取的信息与链上真相之间往往存在差距,仅靠项目方声明是不够的。
- 文章选择的工具和方法较为基础(依赖中心化交易所OKX和区块浏览器),对BASE链的支持有限。对专业链上分析师而言,可能更倾向于使用Dune Analytics或Nansen等专业工具,但作为入门教程其步骤清晰、实操性强。
