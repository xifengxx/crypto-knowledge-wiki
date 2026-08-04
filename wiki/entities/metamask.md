---
type: entity
entity_type: project
created: 2026-06-29
updated: 2026-06-29
tags: [wallet, ethereum, defi, web3]
---

# MetaMask

## 基本信息
- 类型：非托管加密钱包（浏览器插件 + 移动端）
- 开发方：Consensys
- 定位：以太坊生态最大钱包入口，正在进化为超级钱包流量平台
- 用户总量：1 亿（2023 年），月活近 3000 万

## 核心产品
- **MetaMask 钱包**：非托管钱包，用户独立控制私钥（不属 FinCEN 定义的 MSB）
- **Portfolio dApp**：聚合 Buy、Sell、Swap、Bridge、Stake、Dashboard 功能
- **Snaps**（2023 年 9 月上线）：开源 API，第三方开发者可扩展钱包功能，支持 Solana/Sui/Aptos/Cosmos/Starknet 等非 EVM 链
- **出入金**：Buy 功能（2023 年 4 月）+ Sell 功能（2023 年 9 月），通过 MoonPay/Transak/Sardine 等第三方 MSB 实现

## 关键数据
- 用户总量：**1 亿**（Consensys 披露）
- 月活用户：近 **3000 万**（2023 年）；**2100 万+**（2021 年 11 月数据）
- 关联 DApp：**1.7 万** 家
- 日交互量：**24.4 万** 次
- 下载量：**2266 万** 次（截至 2023 年 8 月，CoinGecko 报告）
- 出入金覆盖：Sell 功能仅限美国/英国/欧洲部分地区，支持 ETH/美元/欧元/英镑

### 互换（Swap）功能关键数据（2021 年 11 月）
- **互换费率**：0.85%（在聚合 DEX 报价上叠加）
- **月互换费用收入**：约 **$4000 万**（2021 年 11 月）
- **收入增长对比**：Metamask 互换收入增长明显超过 Sushiswap 和 Curve
- **主要流动性来源**：Uniswap 和 1inch（分别作为 DEX 和 DEX 聚合器）
- **潜在估值范围**：$105 亿 - $210 亿（按每 MAU $500-$1000 倍数计算）

## 监管地位
由于 MetaMask 是非托管钱包（Non-Hosted Wallet），用户独立控制私钥并直接与支付系统交互，仅提供通信或网络接入服务以支持货币传输服务，**不属于 FinCEN 监管下的 MSB**。而为其提供支付渠道的 MoonPay 等第三方属于 MSB。

## 竞争优势 / 护城河
- 以太坊生态最强钱包网络效应（1 亿用户 + 1.7 万 DApp 连接）
- 从钱包进化为流量分发平台：Portfolio 聚合多链操作 + Snaps 开放多链插件
- 非托管架构免于 MSB 监管，运营灵活性更高
- "超级钱包"战略：调配流量分发至各种 DApp，商业想象空间大（可比微信小程序平台模式）

## 风险 / 争议
- 收入模式依赖 Swap 手续费和出入金合作伙伴分成，尚未证明可持续盈利
- 用户体验仍偏技术向，Mass Adoption 门槛高
- 面临 OKX Wallet、Phantom 等竞品的功能追赶
- Consensys 作为商业公司的治理争议

## 相关实体
- [[coinbase]] — Coinbase Wallet 是直接竞品（非托管钱包），但 MetaMask 用户规模更大
- 待创建: MoonPay — 核心出入金合作伙伴，为其提供法币-加密货币兑换渠道

## 来源
- [[来源_2022-07_小狐狸钱包技巧_区块浏览器_maik2hello]] — 从实操角度补充 MetaMask 的日常使用技巧：滑点调节（1%-3%区间减少无常损失）、nonce 自定义解决链上卡顿、测试网络开关设置、EVM 网络自动添加（networks.vercel.app）
- [[来源_2022-07_Web3_收入_价值捕获_FutureMoney]] — 2022年Q2数据：Metamask半年总收入81 million USD，位列第三档，是"工具类王者"代表；作为中心化项目无Tokenomics，Protocol Revenue直接代表公司价值
- [[来源_2023-09_Web3支付_行业巨头_PANews]] — MetaMask 超级钱包战略：Portfolio dApp 聚合 + Snaps 多链扩展 + Sell 出金功能；1 亿用户/3000 万 MAU/1.7 万 DApp 数据
- [[来源_2022-11_加密钱包完整指南_Bitizen]] — 将 MetaMask 归类为浏览器插件钱包（安全层级第三档/共五档），指出其面临假扩展和钓鱼攻击风险。与 [[bitizen-wallet]] 的 MPC 无密钥方案从不同路径竞争"最安全钱包"的定位
- [[来源_2021-11_去中心化身份_DID_通行证_AmberGroup]] — 早期互换收入估算（$4000 万/月）、21M+ MAU、0.85% 费率、$105-210 亿估值分析、代币推出预期、ConsenSys $2 亿融资/$32 亿估值
