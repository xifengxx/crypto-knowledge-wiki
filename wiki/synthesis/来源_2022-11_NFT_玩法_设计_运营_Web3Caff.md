---
type: source
source_type: article
url: https://web3caff.com/zh/archives/36570
date: 2022-11-07
ingested: 2026-07-02
---

# NFT 玩法及应用调研：如何系统性设计与运营 NFT？

## 阅读证据
- 总行数: 257
- Q1 (前25%): Moonbirds 共10,000个NFT，其中2,000个免费空投给Proof Collective持有者、125个团队分配、7,825个以2.5 ETH公开Mint（当时约6,600万美元）。Mint价格2.5 ETH，峰值成交超30 ETH，地板价仍维持在10 ETH。
- Q3 (中后25%): Zerion DNA 是动态NFT，其展示效果随钱包操作链变化——如操作BNB链资产多则呈黄色，操作Polygon多则呈紫色。NFT属性反映钱包年龄、余额、Gas消耗等。
- Q4 (最后25%): NFT盲盒设计的核心思想是Metadata更新替换。NFT本身不携带多媒体数据，而是通过ERC-721的tokenURI()返回一个JSON格式元数据链接，该链接若指向中心化存储则可随时更改图片内容。
- 图片: 3 analyzed / 1 decorative skipped / 5 unavailable (3 vision analysis failed, 1 external URL inaccessible, 1 not analyzed)

## 核心要点
- 系统性总结了NFT的五大概念玩法分类（艺术品/PFP、身份识别Utility、销售凭证、品牌营销、元宇宙/游戏）和五大发售方式（Mint、ERC20 Mint、盲盒、白名单、空投），为项目方提供了从0到1的NFT玩法设计框架。
- 详细拆解了Moonbirds的案例：空投Proof Collective持有者作为种子用户、Nesting（Staking）机制使NFT可质押升级并获取分层奖励、NFC作为会员凭证解锁私人Discord和Project Highrise元宇宙先行访问权。
- 详细拆解了Azuki的三阶段发售策略：荷兰拍卖（起始1ETH，以0.05ETH/20分钟速率降至0.15ETH用于价格发现）、白名单批量Mint（价格为荷兰拍卖最终价一半，且通过Twitter私信主动筛选目标用户）、公开销售（价格为荷兰拍卖中最后一个Azuki的价格）。
- 分析了Zerion的两个NFT产品：Zerion DNA（动态NFT，颜色随钱包主要交易链变化）和Zerion Genesis Collection（稀有度+世代标记的功能性NFT，Legendary/Rare可永久减免100%手续费）。
- 阐述了NFT盲盒设计的核心原理——Metadata更新替换机制，并指出大多数知名NFT项目并未采用去中心化存储，采用去中心化存储的项目一般也不选择盲盒方式。
- 提供了NFT Collection制作的实操指南：合成NFT制作工具（nft-generator）、批量上传OpenSea的GitHub源码、以及ThirdWeb一站式无代码部署解决方案。

## 关键数据
- Moonbirds: 10,000总量，2.5 ETH Mint价，峰值>30 ETH，地板价10 ETH，其中7,825个公开Mint价值约6,600万美元
- Azuki: 起始拍卖价1 ETH，以0.05ETH/20分钟速率下降至0.15 ETH，白名单铸造价为荷兰拍卖最终价的一半，8800个Azuki在拍卖阶段提供
- Azuki上线不到6天跃升至OpenSea近7天成交量前三，约11,670 ETH（超3,860万美元，ETH价格约3,300美元）
- Zerion Genesis Collection通过稀有度（Legendary/Rare/Common）区分手续费减免力度，Legendary和Rare可永久减免100%手续费，Common限时减免

## 与已有知识的关系
- 补充 [[moonbirds]] — 本文提供了Moonbirds Nesting质押机制的细节：青铜→白银→黄金三级巢穴升级系统、奖励随时间和等级递增、Project Highrise先行访问权、私人俱乐部会员资格，这些是现有Moonbirds页面未涵盖的。
- 补充 [[azuki]] — 本文提供了Azuki发售策略的完整解析：荷兰拍卖+白名单Mint+公开销售三阶段机制、Twitter私信主动筛选白名单用户策略、Bean NFT空投配对玩法、Bobu碎片化计划、元宇宙部署和线上线下融合路线。
- 补充 [[zerion]] — 本文提供了Zerion DNA（动态NFT随钱包操作变化）和Zerion Genesis Collection（稀有度驱动的功能性NFT）的具体产品设计细节，现有Zerion页面聚焦钱包业务，未覆盖NFT产品。
- 补充 [[nft]] — 本文从"项目方如何系统性设计和运营NFT"的实践角度提供了新内容：发售方式选择框架、合成NFT制作工具、盲盒设计原理、ThirdWeb等无代码工具，填补了现有NFT概念页侧重协议标准和存储方案的视角。
- 补充 [[opensea]] — 本文指出OpenSea为保持市场整洁未提供批量上传功能，需通过智能合约批量上传，并列出三个开源批量上传GitHub仓库。

## 值得记住的引用
> "NFT 的唯一性表达为「合约 + id」，这个组合指向的 URL 一旦上传就不能更改。如果我想更改图片内容，只能更改 URL 指向的文件内容。而中心化存储方案可以方便的做到这一点。"

> "Azuki 的白名单筛选非常有目标性，而非随机分配。首先 Azuki 会通过社交媒体做活动，除了点赞，转发，评论外，Azuki 官方还会非常认真的筛选调查符合他们的目标用户（比如防止科学家等投机者）。最后通过 Twitter 私信主动联系白名单用户，防止各种欺诈团队对白名单获得者产生干扰。"

> "荷兰式拍卖的结果会影响后续的 Mint 价格以及公开销售价格。通过这种方式提供起始的价格发现，也让团队有依据对今后的市场动作进行调整。"

## 我的笔记
- 这篇文章的最大价值在于它是一份面向项目方的"NFT实操手册"，而非面向投资者的分析。它将Moonbirds、Azuki、Zerion等行业最佳实践从发行机制角度做了系统拆解，覆盖了从概念设计到发售执行到技术实现的完整链路，这种系统性在2022年的中文NFT内容中较为稀缺。但也正因如此，文章侧重于"怎么做"而较少讨论"为什么这么做"或"什么情况下不该这么做"——缺乏对NFT市场崩盘风险、监管合规、项目失败案例的深入分析。
- 文章在NFT发行数量设定依据上坦言"并没有找到相关资料"，这是一个诚实的空白点。NFT供应量经济学确实远不如FT成熟——缺乏对持有者分布、流通速度、通胀率等关键指标的量化模型。这个缺口至今（2026年）仍然存在，值得后续深入研究。
- 值得注意的是，文章发表于2022年11月的熊市中期（FTX暴雷后一个月），但全文几乎未提及市场下行风险。Blind box的"盲目抬高价格→普通卡价格下跌"虽然隐含了风险警示，但整体语调偏乐观，未预见到NFT市场此后90%以上的交易量萎缩。这提醒我们在处理旧素材时需保持时间边界意识。
