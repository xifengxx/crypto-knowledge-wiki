# LLM-Wiki 网站运维手册

> 本文档记录 `crypto-knowledge-wiki` 网站从知识库到线上展示的**完整流程、操作与方法**。
> 适用对象：本机维护者（即 Claude Code / 使用者）。

---

## 一、整体架构

```
┌─────────────┐   生成器(generator/)   ┌─────────────┐   部署   ┌─────────────────┐
│  wiki/      │ ───────────────────▶ │  site/       │ ──────▶ │  GitHub Pages    │
│  知识层      │   markdown → 静态站   │  构建产物      │  push   │  github.io 线上  │
│  (2452 页)  │                      │  (2460 html) │  +Action │                  │
└─────────────┘                      └─────────────┘         └─────────────────┘
    内容（人/LLM 维护）                  生成（脚本）               托管（自动）
```

**三层关系**：
- `wiki/` 是**内容源**（Concepts/Entities/Theses/Synthesis 四个目录 + index.md + log.md）
- `generator/` 是**生成器**（Node 脚本，把 wiki 转成静态网站）
- GitHub Pages 是**托管**（提交后自动构建部署，免费）

---

## 二、生成器（generator/）内部流程

### 技术栈
- **Node v24** + `markdown-it`（Markdown 渲染）+ `gray-matter`（frontmatter 解析）+ `d3-force`（图谱布局）
- 前端零框架：原生 JS + Canvas，无打包器

### 模块清单（generator/src/）
| 文件 | 职责 |
|------|------|
| `config.js` | 分类定义、解析优先级、站点标题、图谱配色 |
| `fs-utils.js` | 扫描、路径、相对 URL 计算 |
| `frontmatter.js` | 容错 frontmatter 解析 + 字段归一化 |
| `model.js` | 页面模型 + 摘要提取 |
| `indexer.js` | 短名→页面全局索引、别名映射、冲突审计 |
| `wikilinks.js` | 双链提取与解析（两遍法） |
| `render.js` | markdown-it 渲染 + wikilink 转换 + TOC |
| `page.js` | 页面模板（导航/元信息栏/TOC/反链） |
| `home.js` | 首页（模块化卡片） |
| `listings.js` | 四类索引页 + 总索引 |
| `search.js` | 搜索索引 + 搜索页 |
| `graph.js` | 图谱数据 + 图谱页 |
| `build.js` | 构建流水线入口 |

### 构建流水线（build.js 10 步）
```
scan（扫 wiki 文件）→ parse（frontmatter）→ index（建短名/别名索引）
→ wikilink（两遍法解析+反链）→ render（渲染内容页）→ pages-static（首页+列表）
→ search（搜索索引）→ graph（图谱数据）→ write（写出 site/）→ 报告
```

### 关键实现细节
- **双链解析**：`[[目标]]`/`[[目标|显示名]]`/`[[前缀/目标]]` 全部支持；未收录目标渲染为占位（不报错）
- **相对链接**：所有内部 href 用 `relUrl()` 计算相对路径，对 GitHub Pages 子路径与本地 `file://` 预览免疫
- **URL 编码**：只在 `relUrl` 统一编码一次（历史 bug：双重编码导致中文文件名链接 404）
- **首页摘要**：`pageSnippet()` 优先取概念页「一句话定义」小节，截断 ~90 字

---

## 三、知识图谱（graph/）设计

### 布局
- **中心辐射式力导布局**：节点互相排斥 + 向中心聚合 + 关联节点拉近，自然放射分布
- 客户端按**当前可见节点**重算布局（滑块/分类变化时），布局参数保证紧凑不重叠
- 默认只显示重要节点（被引≥15，约 175 个骨架），滑块可展开到全部 2452 个

### 悬停交互
- 悬停节点 → **放大 + 白圈高亮**，橙色连线向外延伸连接到所有关联节点
- 关联节点**显示名称标签**，其余节点/连线变暗
- 点击节点 → 跳转对应页面

### 其他交互
- 滚轮缩放（相对适配比例，可放大 8 倍）、拖拽平移、拖动节点
- 分类开关（概念/实体/论点/来源）、重要度阈值滑块、重置视图
- 加载状态 + 失败重试

### 依赖
- 前端需加载 `d3-force` 及其依赖（`d3-dispatch`/`d3-quadtree`/`d3-timer`），构建时从 node_modules 拷贝到 `site/assets/vendor/`

---

## 四、搜索（search/）设计

- **索引**：`search-index.json`（每页 slug/cat/title/aliases/tags/摘要），构建时生成
- **匹配**：自写打分器——中文子串 + 拉丁前缀，标题×5 > 别名×4 > 标签×3 > 摘要×1
- **入口**：顶栏 ⌘K 快捷键 + 浮层面板 + `/search/` 全页版
- **关键**：结果链接用构建期注入的 `window.SITE_PREFIX` 计算相对路径（从 `/search/` 页正确跳转）

---

## 五、设计系统

- **配色**：暖纸质感（bg `#FAF8F5`）+ 琥珀强调（`#B45309`）+ 深色模式自适应（`prefers-color-scheme`）
- **分类色**：概念 `#2563EB` / 实体 `#059669` / 论点 `#B45309` / 来源 `#6B7280`
- **字体**：系统中文栈（PingFang SC / Noto Sans CJK SC），零 webfont
- **组件**：卡片（悬浮抬升 + 顶部高亮条）、统计条（渐变数字）、目录 scrollspy、胶囊徽章、圆角分栏表格
- **首页**：模块化排列——概念(9卡3×3)/实体(6卡)/投资论点(3卡)/最近综述(6卡)，每模块有标题+解释+卡片

---

## 六、部署流程（GitHub Actions）

### 触发条件
推送到 `main` 分支，且变更涉及以下路径：
```
wiki/**  generator/**  .github/**
```
或手动触发（仓库 Actions 页 → workflow_dispatch）。

### 流水线（.github/workflows/deploy.yml）
```
checkout → setup-node 24 → npm ci → node src/build.js
→ configure-pages → upload-pages-artifact(generator/site) → deploy-pages
```
全官方 actions，免费，产物含 `.nojekyll` 与 `404.html`。

### 一次完整的发布流程
```bash
cd ~/knowledge
# 1. 更新知识库内容（wiki/ 下）
# 2. 本地预览（可选）
cd generator && npm run build && python3 -m http.server -d site
# 3. 提交并推送（触发自动部署，约 3-5 分钟后生效）
cd ~/knowledge
git add -A && git commit -m "update" && git push origin main
```

---

## 七、日常维护操作

### 新增/修改知识后发布
```bash
cd ~/knowledge
git add -A && git commit -m "update" && git push origin main
```

### 本地预览网站
```bash
cd ~/knowledge/generator
npm run build              # 重新生成 site/
python3 -m http.server -d site    # 打开 http://localhost:8000
```

### 仅重装生成器依赖（网络变动后）
```bash
cd ~/knowledge/generator && npm install
```

### 检查线上是否更新
```bash
open https://xifengxx.github.io/crypto-knowledge-wiki/
# 或查看 Actions：https://github.com/xifengxx/crypto-knowledge-wiki/actions
```

### git 仓库注意事项
- `raw/`、`source/`、`tools/node_modules`、`generator/site`、`generator/node_modules` 已被 `.gitignore` 排除，**不会**进入公开仓库
- 提交前可用 `git status` 确认无误入

---

## 八、常见问题与排错

| 现象 | 根因 | 解决 |
|------|------|------|
| 中文文件名链接 404 | URL 双重编码（`encodeURIComponent` 执行两次） | 已在 `fs-utils.js` 统一为单次编码；勿在此处再加编码 |
| 搜索/图谱点击 404 | 结果链接用根路径，从 `/search/` `/graph/` 页解析错误 | 已注入 `window.SITE_PREFIX`（构建期 `relUrl` 计算）；勿改 |
| 图谱无法放大 | 缩放上限被写死为 20，小于适配比例 | 已改为相对 `fitScale` 的缩放范围（×8 / ÷50） |
| 图谱空白/加载失败 | graph.json 体积大 + 慢网络 | 已压缩为索引对格式（419KB）+ 加载状态 + 重试按钮 |
| 图谱节点过远 | 力导斥力过强 | 布局参数：`distance(16)` `charge(-10)` `collide(2.5)` |
| 首页卡片无摘要 | `pageSnippet()` 未匹配到段落 | 检查页面是否有「一句话定义」小节或首个正文段落 |

### 修改设计/布局后必须做
1. 改 `generator/assets/style.css` 或 `generator/src/*.js`
2. `cd generator && npm run build`
3. 本地预览 + 截图视觉检查（如布局明显变化）
4. 全站链接扫描确认无 404（见下文脚本）
5. 提交推送

### 全站链接扫描（发布前建议跑一次）
```bash
cd ~/knowledge/generator
python3 -c "
import os, re, glob, urllib.parse
site='site'
broken=[]
for f in glob.glob(site+'/**/*.html', recursive=True):
    for m in re.finditer(r'href=\"([^\"]+)\"', open(f).read()):
        href=m.group(1)
        if href.startswith('#') or href.startswith('http') or href.startswith('mailto'): continue
        if href.endswith(('.css','.js','.json')): continue
        base=os.path.dirname(f); path=urllib.parse.unquote(href.split('#')[0])
        t=os.path.normpath(os.path.join(base, path, 'index.html')) if (not path or path.endswith('/')) else os.path.normpath(os.path.join(base, path))
        if not os.path.exists(t): broken.append(href)
print('404 链接数:', len(broken))
"
```

---

## 九、安全注意事项

- 网站仓库是**公开**的：不要提交任何 API Key、Token、私密配置
- `wiki/` 是公开展示内容；`raw/`（素材）不入库
- 修改生成器时遵循：密钥走环境变量、不硬编码（参考根目录 AuraKit 安全规则）
- GitHub Actions 对公开仓库免费，但**私有仓库**有分钟数限制

---

## 十、命令行速查表

| 操作 | 命令 |
|------|------|
| 本地构建 | `cd ~/knowledge/generator && npm run build` |
| 本地预览 | `python3 -m http.server -d ~/knowledge/generator/site` |
| 发布上线 | `cd ~/knowledge && git add -A && git commit -m "update" && git push origin main` |
| 查部署状态 | `open https://github.com/xifengxx/crypto-knowledge-wiki/actions` |
| 看线上 | `open https://xifengxx.github.io/crypto-knowledge-wiki/` |
| 链接扫描 | 见第八节脚本 |
