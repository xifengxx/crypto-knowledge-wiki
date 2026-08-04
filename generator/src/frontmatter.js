import matter from 'gray-matter';

const VALID_STATUS = ['active', 'forming', 'invalidated', 'confirmed'];
const VALID_ENTITY_TYPES = ['company', 'protocol', 'project', 'person'];
const VALID_SOURCE_TYPES = ['article', 'report', 'tweet', 'podcast', 'video', 'note', 'unknown'];

/** 容错解析日期：接受 YYYY / YYYY-MM / YYYY-MM-DD；无效返回 null */
function parseDate(v) {
  if (v == null) return null;
  const s = String(v).trim();
  if (/^\d{4}$/.test(s)) return `${s}-01-01`;
  const m = s.match(/^(\d{4})-(\d{1,2})(?:-(\d{1,2}))?/);
  if (m) {
    const mm = m[2].padStart(2, '0');
    const dd = m[3] ? m[3].padStart(2, '0') : '01';
    return `${m[1]}-${mm}-${dd}`;
  }
  return null;
}

/** 归一化 tags/aliases：字符串或数组 → 字符串数组（去空） */
function toArray(v) {
  if (v == null) return [];
  if (Array.isArray(v)) return v.map((x) => String(x).trim()).filter(Boolean);
  if (typeof v === 'string') {
    // 处理 "a, b" 或 "[a, b]" 或 "a" 形式
    const cleaned = v.replace(/^\[|\]$/g, '');
    return cleaned.split(/[,，]/).map((x) => x.trim()).filter(Boolean);
  }
  return [];
}

/** 简易行式 YAML 解析（gray-matter 失败时的兜底） */
function fallbackParse(raw) {
  const m = raw.match(/^﻿?---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  const data = {};
  let body = raw;
  if (m) {
    const block = m[1];
    body = raw.slice(m[0].length);
    for (const line of block.split(/\r?\n/)) {
      const kv = line.match(/^([A-Za-z_][A-Za-z0-9_-]*)\s*:\s*(.*)$/);
      if (!kv) continue;
      let val = kv[2].trim();
      if (/^\[.*\]$/.test(val)) {
        data[kv[1]] = toArray(val);
      } else if (val === 'true' || val === 'false') {
        data[kv[1]] = val === 'true';
      } else if (/^\d+(\.\d+)?$/.test(val)) {
        data[kv[1]] = Number(val);
      } else if (/^".*"$/.test(val) || /^'.*'$/.test(val)) {
        data[kv[1]] = val.slice(1, -1);
      } else {
        data[kv[1]] = val;
      }
    }
  }
  return { data, body };
}

/**
 * 容错 frontmatter 解析 + 字段归一化。
 * 返回 { fm: 归一化字段对象, body: 正文, ok: 是否解析出 frontmatter }
 */
export function parseFrontmatter(raw) {
  let result;
  try {
    result = matter(raw);
  } catch {
    result = fallbackParse(raw);
  }

  const d = result.data || {};
  const fm = {};

  // type：可能是 "entity / concept" 等异常值，取第一个
  const typeRaw = String(d.type ?? '').trim();
  const type = typeRaw.split(/[\/\s]+/)[0]?.toLowerCase() || '';

  fm.type = type;
  if (type === 'entity') {
    const et = String(d.entity_type ?? '').toLowerCase();
    fm.entity_type = VALID_ENTITY_TYPES.includes(et) ? et : 'project';
  }
  if (type === 'thesis') {
    const st = String(d.status ?? '').toLowerCase();
    fm.status = VALID_STATUS.includes(st) ? st : 'forming';
    const conf = Number(d.confidence);
    fm.confidence = Number.isFinite(conf) ? Math.min(10, Math.max(1, Math.round(conf))) : null;
  }
  if (type === 'source') {
    const st = String(d.source_type ?? '').toLowerCase();
    fm.source_type = VALID_SOURCE_TYPES.includes(st) ? st : 'unknown';
    fm.url = typeof d.url === 'string' ? d.url : '';
    fm.author = typeof d.author === 'string' ? d.author : '';
  }

  for (const k of ['created', 'updated', 'date', 'ingested']) {
    const p = parseDate(d[k]);
    if (p) fm[k] = p;
  }

  const tags = toArray(d.tags);
  fm.tags = tags;
  const aliases = toArray(d.aliases);
  fm.aliases = aliases;

  return { fm, body: result.content ?? result.body ?? '', ok: Boolean(type) };
}
