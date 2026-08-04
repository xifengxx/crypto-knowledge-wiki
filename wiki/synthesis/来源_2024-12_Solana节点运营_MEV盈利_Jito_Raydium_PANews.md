---
type: source
source_type: podcast
url: https://www.panewslab.com/zh/articledetails/vaza2lj2.html
date: 2024-12
ingested: 2026-07-01
---

# Solana 节点运营者自述：Jito、RPC 和 Memecoin LP 如何"闷声发大财"

## 阅读证据
- 总行数: 235
- Q1 (前25%): Solana 2023年1月Super Team月会时币价已跌95%但仍有一百多人参加，核心builders没有离开反而互相鼓励；Leo随后成为Jito中文社区贡献者
- Q3 (中后25%): 有人在Solana通过监听开发者发布新代币的地址赚了四五百万美金——利用bonding curve形式，最早买入的用户推高价格后套利，同一物理机房的服务器可领先1-2个slot
- Q4 (最后25%): Solana网络通胀约5.8%，但因并非所有SOL都被质押，实际staking激励约7.6%；MEV收入约占网络收入的3%，几个月前仅1%左右
- 图片: 0张已分析 / 1张装饰跳过（PANews题图，无独立信息价值）

## 核心要点
- Solana的技术护城河核心是POH带来的时钟概念——无共享内存池，交易通过slot时间轴处理，MEV与以太坊的gas抢跑模型根本不同，比拼的是网络延迟而非gas竞价
- Jito是Solana MEV基础设施的核心：43% LST市场份额 + 80%验证者使用其客户端 + Block Engine对交易进行打包排序。验证者安装Jito客户端可获额外MEV收入（90%+分给staker），MEV收入随网络活跃度增长（从1%升至3%）
- Solana Memecoin LP是可持续盈利模式而非"无偿损失陷阱"：低TVL + 高交易量 = 手续费覆盖无偿损失。Leo在MOTHER 24小时LP中年化APY达36,500%、一天赚50%手续费，WIF/Popcat蓝筹Memecoin LP日收益0.5%-3%
- Memecoin LP解释了Solana为何脱颖而出的结构性原因——不仅是"买持待售"的零和博弈，LP提供者仅靠手续费就能持续盈利，间接支撑蓝筹Memecoin价格，形成正反馈生态
- Solana MEV与传统以太坊MEV有本质差异：没有公共内存池无法提前获知交易信息，机器人需要更高硬件要求（同机房物理位置差1-2个slot即决定盈亏），Jito Bundle和searcher服务为套利者提供付费优先通道

## 关键数据
- Jito占Solana LST市场份额约43%，约80%的Solana验证者使用Jito客户端
- Solana staking基础收益约7.6%（通胀5.8%但部分SOL未质押），MEV额外贡献约3%（从几个月前的1%上升）
- Jito 5%的收入由Jito基金会获得，其余分配给LST持有者；近期提案将0.15%收入分配给JTO代币持有者
- MOTHER Memecoin LP 24小时APR 19,000+（APY 36,500%），一天赚50%手续费，Leo从一两千美元赚到近2万美元
- Solana月交易量比以太坊主网大约一倍，但TVL不到以太坊一半——低TVL + 高交易量 = LP手续费极高
- Solana每个slot时间约0.4-0.6秒，前30%验证者（按质押量排名）可优先获知交易信息
- DeFiLlama收入榜Solana、Jito、Raydium常居前五，收入经常超以太坊主网gas费

## 与已有知识的关系
- 补充 [[jito]] — 从节点运营者视角详解Jito盈利模式：Block Engine交易排序机制、Bundle小费优先处理、searcher订阅服务、收入分配结构（90%+给staker、5%给Jito基金会、剩余给LST持有者）、JitoSOL自动委托前200验证者的代理机制
- 补充 [[solana]] — swQoS机制的前身是1.18升级中引入的RPC节点质押加权处理能力（staked代币越多处理交易越多），以及Solana宕机修复机制从POH时钟不一致+DDOS攻击中迭代；FTX事件后社区自愈力（2023年1月Super Team月会百余人）
- 补充 [[memecoins]] — Solana Memecoin LP作为可持续盈利模式的新视角：低TVL+高交易量使AMM手续费覆盖无常损失，蓝筹Memecoin LP（WIF+Popcat、SOL+GOAT）日收益0.5%-3%，以太坊上无法实现
- 补充 [[liquid-staking]] — JitoSOL委托策略的具体机制：自动委托给排名前200的验证者（投票率>99%），额外MEV奖励使JitoSOL成为"直接产生收益的最佳选择"

## 值得记住的引用
> "Solana和以太坊最大的不同就是Solana引入了时钟的概念......Solana是没有内存池的，Solana的交易是通过时间来作为交易的轴心......而Solana的MEV与此有些不同，因为Solana采用了时钟概念，交易的比拼实际上是速度，是网络的低延迟。"
>
> "Solana一直在说它是一个全球可以实时同步的信息交换机，我觉得这真的是未来的趋势。"
>
> "Solana的低TVL和高交易量意味着手续费相对较高，完全可以覆盖成本......我举个最夸张的例子，去年在MOTHER这个Memecoin项目中，我是第一次在24小时内做LP......最初APR显示是19,000多，这个APY是36,500%。一天就能赚50%的手续费。"
>
> "我认为像PumpFun这样的项目，可能就是10后年轻人的社交加竞技方式。我觉得，社交的演变从最早的短信、QQ到微信，再到现在的抖音，可以看出电子社交对注意力的要求越来越高。下一代可能就是孩子们整天盯着PumpFun，看直播、冲代币。"

## 我的笔记
这是一篇极其珍贵的Solana生态"内部人视角"访谈——Leo既是Jito中文社区贡献者又运营自己的验证者节点，他对MEV收入分配、LST委托策略、LP实操数据的透露在其他二手研报中几乎看不到。但需清醒认识到：MOTHER的36,500% APY是不可复现的极端个例（爆发初期+低竞争窗口），不应将其推断为常态；WIF+Popcat蓝筹LP的0.5%-3%日收益在2024年Q4是可信的，但随着竞争加剧和TVL增长，LP收益率会向均值回归。Leo的"Solana=链上纳斯达克+赌场+电竞社交"三重隐喻很有穿透力——三种叙事完美覆盖了投机者（赌场）、传统金融人（纳斯达克）、年轻人（电竞社交），Solana的叙事包容性本身就是竞争壁垒。Sonic作为Solana首个L2专攻游戏，试图解决流动性割裂问题（游戏方仍可用Solana主网流动性），这个设计比独立的游戏L2更务实，但需等主网上线后验证。
