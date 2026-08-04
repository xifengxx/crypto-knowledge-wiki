---
type: source
source_type: article
url: https://mirror.xyz/gm365.eth/OE_CGx6BjCd-eQ441139sjsa3kTyUsmKVTclgMv09hY
date: 2022-06-16
ingested: 2026-07-02
---

# Dune Analytics 零基础极简入门指南

## 阅读证据
- 总行数: 355
- Q1 (前25%): Dune 经过 4 轮融资，目前估值已达 10 亿美元；用户通过类 SQL 的数据库查询语言从 Dune 缓存的区块链数据仓库中检索数据
- Q3 (中后25%): 使用 `sum(value/1e18)` 函数求和后，统计出 V 神钱包总对外转账金额为 83.25 万 ETH；作者介绍了 `date_trunc` 截断日期函数和 `group by` 分类汇总语法
- Q4 (最后25%): 作者的第一个 Syndicate Dashboard 被收录到第 29 期官方 Dune Digest 中；Dune 于 2022.2.2 完成最新一轮 6942 万美元融资
- 图片: 15 张，均为 Twitter/Mirror CDN 外部截图（Dune 界面截图、SQL 查询结果图），均为装饰性教学配图，本地不可用

## 核心要点
- Dune Analytics 定位为"平民版 Nansen"和"链上数据分析师神器"，将区块链原始交易数据解析后存入 PostgreSQL 关系型数据库，用户通过类 SQL 语句即可查询分析
- 核心工作流：SQL 查询（Query）→ 可视化图表（Visualization）→ 汇总为数据看板（Dashboard）；三步即可从原始数据到可交付的分析报告
- 文章以 V 神钱包地址为案例，演示了 select/from/where/order by/limit 基本 SQL 语法，以及 sum/count/group by/date_trunc 等聚合函数和累计求和（Cumulative Sum）
- 对零基础小白最重要的技能是 Fork：站在前辈大神肩膀上，复制其 Query 代码后仅需修改合约地址等核心参数，即可实现同类功能，无需从零编写复杂 SQL
- 以太坊单位默认为 wei，1 ETH = 10^18 wei，查询时需通过 `value/1e18` 转换为 ETH 单位
- Dune 所有查询和数据集默认公开可见，社区共享文化浓厚；Dune 已从 dune.xyz 跳转到 dune.com

## 关键数据
- Dune 估值：10 亿美元（截至 2022 年 2 月 B 轮 6942 万美元融资后）
- V 神钱包对外转账总额：83.25 万 ETH（文章演示数据）
- 大神 oxBi 的 ENS 每日持币人数 Query 代码长度：67 行
- 1 ETH = 10^18 wei（以太坊最小单位换算关系）
- 以太坊交易数据表包含字段：block_time、from、to、value、data

## 与已有知识的关系
- 补充 [[dune-analytics]] — 现有实体页仅有框架性描述，本文提供了具体的 SQL 使用教程、Fork 技能、可视化工作流等实操细节
- 补充 [[来源_2022-05_Web3数据赛道_数据索引_SevenX]] — SevenX 报告从投资和赛道宏观视角分析 Dune，本文则从零基础用户实操角度提供手把手教程，两者互补

## 值得记住的引用
> "Dune 作为一款链上数据研究分析的强大工具，经过4轮融资，目前估值已达10亿美元。用户通过类SQL的数据库查询语言，从 Dune 缓存的区块链数据仓库中检索、筛选、提取、聚合，形成一个个 Query，再对查询到的数据进行可视化，最终汇总而成一个个 Dashboard 面板。"

> "作为新人小白，我们一定要掌握的最重要的一门技能：fork 神技。站在前辈大神的肩膀之上，能让我们光速入门。越过陡峭的学习曲线，Fork 大神的代码与劳动成果，然后只需要简单修改核心参数，即可实现同类功能，获取心仪的数据（感恩大神与前辈的付出）"

## 我的笔记
- 这篇文章虽然是 2022 年的入门教程，但其核心 SQL 语法和 Dune 工作流至今仍然适用，是理解链上数据分析入门心智模型的优秀教材。文章的可贵之处在于它不假设读者有任何 SQL 或区块链背景，从"什么是数据表"讲起。
- "Fork 神技"其实是 Dune 生态一个被低估的网络效应——每个公开 Query 都成为下一个人的学习模板，数据公域 + 社交共享构成了类似 GitHub 的飞轮效应，这也是 Dune 相比 Nansen 这类封闭式数据平台的核心差异。
