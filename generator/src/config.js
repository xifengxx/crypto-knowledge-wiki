import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const ROOT = path.resolve(__dirname, '../..');          // knowledge/
export const WIKI_DIR = path.join(ROOT, 'wiki');
export const GENERATOR_DIR = path.resolve(__dirname, '..');    // generator/
export const SITE_DIR = path.join(GENERATOR_DIR, 'site');
export const ASSETS_SRC = path.join(GENERATOR_DIR, 'assets');

/** 站点元信息 */
export const SITE = {
  title: '知识图谱 · 个人知识库',
  tagline: 'Crypto · AI · 宏观 · 投资 —— 一个可检索、可导航、可追溯的双链知识库',
  repo: 'https://github.com/',       // 部署时填写
  footer: '静态构建 · site-generator · GitHub Pages',
};

/** 分类定义：目录名 → 元信息。顺序即解析优先级（entities 优先于 concepts） */
export const CATEGORIES = {
  concepts: {
    label: '概念',
    labelEn: 'Concepts',
    color: '#2563EB',
    description: '核心概念页：一句话定义、原理、案例、立场',
  },
  entities: {
    label: '实体',
    labelEn: 'Entities',
    color: '#059669',
    description: '项目 / 人物 / 公司 / 协议 档案页',
  },
  theses: {
    label: '论点',
    labelEn: 'Theses',
    color: '#B45309',
    description: '投资论点与判断，含证据、反证、待验证假设',
  },
  synthesis: {
    label: '来源',
    labelEn: 'Sources',
    color: '#6B7280',
    description: '来源摘要：文章 / 研报 / 推文等素材提炼',
  },
};

/** wikilink 短名解析优先级（靠前者优先），entity_type 类别映射 */
export const RESOLVE_ORDER = ['entities', 'concepts', 'theses', 'synthesis'];
export const ENTITY_TYPES = ['company', 'protocol', 'project', 'person'];

/** 站点级静态页路由（不含内容页） */
export const STATIC_PAGES = ['', 'graph', 'search', 'concepts', 'entities', 'theses', 'synthesis', 'index'];
