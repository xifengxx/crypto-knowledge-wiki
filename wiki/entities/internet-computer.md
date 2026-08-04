---
type: entity
entity_type: project
created: 2026-07-02
updated: 2026-07-02
tags: [bitcoin, layer2, smart-contracts, cross-chain, defi]
---

# Internet Computer (ICP)

## 基本信息
- 类型: 去中心化计算平台 / 公链
- 开发商: DFINITY Foundation
- 代币: ICP
- 比特币集成: 2022年12月主网与比特币完成集成

## 核心产品：ckBTC
2023年4月正式推出Chain-Key Bitcoin（ckBTC），是一种"孪生"Token方案，为比特币带来Layer 2功能。

### 技术架构
ckBTC通过两个核心部件实现：

1. **ckBTC铸币机**: 负责ckBTC的铸造和销毁。用户将BTC转入铸币机控制的特定BTC地址→铸币机等待大量确认（因BTC缺乏最终确定性）→铸造ckBTC并与发送者关联。检索时销毁ckBTC→通过常规BTC交易转回等量BTC（扣除费用）。

2. **ckBTC账本**: 维护账户余额、账户间转移ckBTC，并授权铸币机铸造和销毁。

### 与其他封装BTC的区别
ckBTC不是跨链桥方案——它利用ICP的去中心化计算能力直接在协议层处理BTC，实现更快、更便宜的交易，同时声称不影响安全性。

## 关键数据
- 2024年1月9日ICP价格: $13.41
- 2024年1月9日市值: $60.56亿（10个项目中最大）
- Binance 50倍BSV永续合约上线: 2023年10月20日

## 风险 / 争议
- DFINITY在2017年ICO融资$1.95亿后长期交付延迟，社区信任度受损
- ckBTC市场份额极小——与WBTC（$100亿+）和cbBTC（随后推出）差距巨大
- ICP代币从$700高点暴跌95%+，代币经济模型曾受质疑

## 相关实体
- [[bitcoin]] — ckBTC作为BTC在ICP上的"孪生"Token
- [[ethereum]] — ckBTC的竞争场景是ETH上的WBTC/cbBTC/tBTC，而非直接在BTC链上竞争

## 来源
- [[来源_2024-01_比特币ETF预期_十大比特币生态项目_BlockBeats]] — 2024年1月项目详情：ICP 2022年12月集成BTC、2023年4月推出ckBTC，双部件架构（铸币机+账本）
