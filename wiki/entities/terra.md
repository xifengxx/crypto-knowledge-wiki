---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [stablecoins, defi, algorithmic, terra, failed-protocol]
aliases: [Terra, LUNA, UST, TerraUSD]
---

# Terra (Luna/UST)

## 基本信息
- 产品：TerraUSD (UST，算法稳定币) + LUNA（治理/支撑代币）
- 创始人：Do Kwon（Terraform Labs）
- 类型：算法稳定币（双代币套利锚定机制）
- 状态：2022年5月崩溃，Terra 2.0于2022年5月28日分叉，原链改称Terra Classic
- 崩溃规模：约180亿美元市值蒸发

## 核心机制
UST是算法稳定币，通过UST与LUNA之间的套利关系维持$1锚定：
- UST < $1：用户用UST兑换等值$1的LUNA（减少UST供应，推升价格）
- UST > $1：用户用等值$1的LUNA兑换新铸造的UST（增加供应，压低价格）
- 依赖Anchor Protocol提供20%固定年化收益吸引UST存款需求

## 崩溃过程（2022年5月）
- 触发因素：广泛加密市场抛售叠加信心危机，大型持有者开始抛售UST
- 死亡螺旋：算法大量铸造LUNA以吸收UST抛压 → LUNA供应暴增导致价格暴跌99%+ → UST持有者恐慌性逃离 → 进一步抛压 UST → 持续铸造LUNA → 循环直至两者归零
- 使用BTC储备回购UST的尝试未能阻止崩盘
- 缺乏紧急熔断机制或安全退出通道

### Jump / Tai Mo Shan 的角色
[[tai-mo-shan]] 是 Jump Trading 在开曼群岛的子公司，负责：2021 年 5 月 UST 首次脱锚时，Jump 通过 Tai Mo Shan 秘密买入大量 UST 制造需求繁荣假象，将 UST 价值拉回 1 美元，该交易让 Jump 赚取约 10 亿美元。2024 年 12 月，Tai Mo Shan 同意支付约 1.23 亿美元与美国 SEC 和解，结束了持续三年多的法律纠纷。SEC 指控文件指出 Tai Mo Shan 参与了 Terra UST 的做市，涉嫌操纵 UST 币价。该提案由当时仅 26 岁的 Kanav Kariya（Jump Crypto 首任总裁）提出。

## 结果与影响
- UST从$1跌至几分钱，始终未恢复锚定（现交易为USTC，远低于$1）
- 约180亿美元市值蒸发
- Terra区块链暂停运行
- 对整个算法稳定币品类造成毁灭性打击——失去监管和市场的集体信任
- 推动Frax等部分算法稳定币转型为完全抵押型
- 促进USDe等Delta-Neutral合成美元的兴起（强调真实收益来源而非补贴模型）

## 关键教训
- 算法稳定币的死亡螺旋是结构性缺陷而非偶发事件：依赖二级代币维持锚定的设计，在信心丧失时必然陷入自强化崩溃
- Anchor Protocol的20%固定收益是不可持续的补贴模型（无真实利差支撑），类似Ponzi结构
- 缺乏应急机制（电路熔断/全局清算）是致命设计缺陷

## 相关实体
- [[tron]] — USDD在Terra崩溃后也面临类似脱锚考验，但通过主动干预度过危机
- [[frax]] — 从部分算法型转为完全抵押型，作为对Terra崩溃的回应

## 来源
- [[来源_2025-05_稳定币分类_脱锚风险_Cork]] — 系统性分析UST崩溃的因果机制及对整个算法稳定币品类的影响
- [[来源_2022-05_Luna崩盘_虚市值_江卓尔]] — 从资金易手角度追踪崩盘过程，提出"虚市值"概念解释Luna归零数学机制，详细追踪Do Kwon套现路径（40亿UST→8万BTC→约34亿美元），并用皮尔曲线论证Do Kwon未真实救市
- [[来源_2025-06_新加坡_Web3_DTSP监管_TigerResearch]] — Terraform Labs注册新加坡/实际运营海外的模式是MAS实施DTSP监管紧缩的关键催化剂，补充了Terra崩溃的监管政策影响视角
