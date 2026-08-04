---
type: entity
entity_type: project
created: 2026-06-30
updated: 2026-06-30
tags: [wallet, account-abstraction, ethereum, safe]
---

# Safe (原 Gnosis Safe)

## 基本信息
- 类型：智能合约钱包 / 账户抽象基础设施
- 前身：Gnosis Safe（多签钱包先驱）
- 赛道：账户抽象（AA）基础设施
- 定位：模块化智能钱包标准，EVM 生态基础设施核心组件

## 核心业务/产品
- **Safe{Core}**：经过实战考验的核心合约堆栈
- **Safe 模块**：类似 Uniswap v4 hooks 的插件系统，开发者可创建/集成自定义模块（如密码键认证、额度管理）
- **ERC-4337 兼容模块**：使 Safe 与新一代 AA 标准打通

## 关键数据
- 部署近 1000 万个钱包
- 保护约 900 亿美元资产
- 覆盖各种 EVM 链和 rollup
- 是 Worldcoin 后台默认使用的智能钱包（Optimism 上为每个 World ID 用户自动生成）

## 架构特点
模块化架构——核心安全层与扩展功能解耦。类似 Uniswap v4 的 hook 设计哲学：核心层保证安全性，模块层提供定制化。

## 已知攻击事件（前端/UI层面）
Safe合约本身经过严格审计无已知关键漏洞，但Safe多签钱包的前端交互环节已被Lazarus Group系统性攻击，核心弱点在于人类操作者依赖UI显示的信息做签名决策：

- **Bybit黑客（2025.02.21, 损失$14.6亿）**：黑客通过社会工程学入侵Safe{Wallet} AWS S3基础设施，篡改JavaScript脚本，使签名者在Safe界面上看到正确的地址和URL，但实际签署的却是恶意交易（盲签攻击）。黑客提前两天部署恶意实现合约，通过三个Owner签名、DELEGATECALL写入STORAGE 0存储替换合约逻辑。
- **WazirX黑客（损失$2.3亿）**：攻击手法与Bybit完全相同——预部署恶意实现合约、三个Owner签名、DELEGATECALL替换逻辑——硬编码owner权限检查，错误信息也与Bybit黑客一致。
- **Radiant Capital黑客（损失$5,000万）**：攻击者利用复杂方法使签名验证者在前端看到看似合法的交易，与Bybit攻击信息披露相似。权限检查方式（硬编码owner地址）和错误信息与Bybit、WazirX一致。
- **DMM Bitcoin黑客（损失$3.05亿）**：虽然使用的是Gnosis多签而非Safe，但攻击思路相同。

## 风险/局限
- ERC-4337 等新标准的兴起可能分流 Safe 的市场份额
- 模块化增加了攻击面（恶意模块风险）
- **前端/UI攻击面**：Safe合约本身无漏洞，但Safe的前端界面、托管基础设施（AWS S3）、API等非合约部分可被社会工程学攻破。签名者在受感染的UI上看到合法信息但实际签署恶意交易——这是当前Safe生态面临的最大实际威胁
- **盲签问题**：硬件钱包与Safe UI的交互中，签名者无法独立验证正在签署的交易数据的完整性，依赖被篡改的前端进行决策

## 相关实体
- [[coinbase]] — Coinbase Smart Wallet 采用 ERC-4337，与 Safe 形成竞争
- [[world-network]] — Worldcoin 使用 Safe 作为后台智能钱包
- [[bybit]] — 2025年2月因Safe前端被篡改而损失$14.6亿
- [[lazarus-group]] — 系统性攻击Safe多签钱包的黑客组织
- [[slowmist]] — 识别并公开了Safe多签被系统性攻击的模式

## 来源
- [[来源_2024-07_链抽象_Thanefield研报_深潮TechFlow]]
- [[来源_2022-03_DAO冷启动_工具清单_实践者自述]] — 实操案例：小型学习型DAO采用Gnosis Safe作为金库/保险库多签钱包，配合MetaMask热钱包实现资产管理；与Utopia Labs集成实现贡献者薪酬支付和多钱包记账
- [[来源_2025-02_Bybit被盗_Safe多签攻击_深潮TechFlow]] — SlowMist安全团队分析Bybit黑客事件，揭示Safe多签钱包前端被篡改的攻击模式和工程化威胁
