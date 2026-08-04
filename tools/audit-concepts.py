#!/usr/bin/env python3
"""
Full Concept Audit (Plan B — v2)
真正的概念审计：读取每个实体的 frontmatter 标签 + 赛道关键词，
聚类后对比现有概念覆盖率，输出可操作的缺口清单。

Run: python3 ~/knowledge/tools/audit-concepts.py
"""

import os, re
from collections import Counter, defaultdict

WIKI_DIR = os.path.expanduser("~/knowledge/wiki")
ENTITY_DIR = os.path.join(WIKI_DIR, "entities")
CONCEPT_DIR = os.path.join(WIKI_DIR, "concepts")

# === Step 1: 读取所有实体和概念 ===
entities = {}
for fname in os.listdir(ENTITY_DIR):
    if not fname.endswith('.md'):
        continue
    ename = fname.replace('.md', '')
    path = os.path.join(ENTITY_DIR, fname)
    with open(path, 'r', errors='ignore') as f:
        content = f.read()
    # Parse frontmatter
    fm = {}
    m = re.match(r'^---\s*\n(.*?)\n---', content, re.DOTALL)
    if m:
        for line in m.group(1).split('\n'):
            if ':' in line:
                k, v = line.split(':', 1)
                fm[k.strip()] = v.strip()
    # Also read first 3 non-frontmatter lines for entity_type hints
    body = re.sub(r'^---.*?---\s*', '', content, flags=re.DOTALL).strip()
    entities[ename] = {'fm': fm, 'content': body[:3000]}

existing_concepts = set(f.replace('.md', '') for f in os.listdir(CONCEPT_DIR) if f.endswith('.md'))

# === Step 2: 基于 entity_type + tags 精确聚类 ===
# entity_type 是比全文关键词更可靠的分类依据
TYPE_MAP = {
    'protocol': ['defi', 'l1', 'l2', 'dex', 'lending', 'amm', 'oracle', 'cross-chain',
                 'derivatives', 'stablecoin', 'yield', 'insurance', 'privacy'],
    'company': ['cex', 'custody', 'payment', 'mining', 'media', 'data'],
    'project': ['nft', 'gaming', 'socialfi', 'launchpad', 'depin', 'dao', 'identity'],
    'person': ['analyst', 'founder', 'researcher', 'trader'],
    'community': ['dao', 'collective', 'foundation'],
    'fund': ['vc', 'venture', 'grant'],
    'tool': ['developer-tools', 'security', 'analytics', 'monitoring'],
}

def classify_entity(ename, data):
    """更精确的实体分类，结合 type/entity_type 和 tags"""
    fm = data['fm']
    etype = fm.get('entity_type', fm.get('type', '')).strip('[]"\'')
    tags_str = fm.get('tags', '')
    tags = [t.strip().strip('[]"\'') for t in tags_str.split(',')] if tags_str else []
    content_lower = data['content'].lower()[:1500]

    categories = set()

    # 方法 1: 基于 entity_type + tags 直接判断
    if 'l1' in tags or 'layer1' in tags or 'layer 1' in content_lower:
        categories.add('layer1-blockchain')
    if 'l2' in tags or 'layer2' in tags or 'layer 2' in content_lower or 'rollup' in content_lower:
        categories.add('layer2-solution')
    if 'cex' in tags or ('exchange' in etype and 'defi' not in tags):
        categories.add('centralized-exchange')
    if 'dex' in tags or 'amm' in tags:
        categories.add('dex-amm')
    if 'lending' in tags or 'borrowing' in tags:
        categories.add('defi-lending')
    if 'oracle' in tags:
        categories.add('oracle-provider')
    if 'wallet' in tags:
        categories.add('wallet-provider')
    if 'stablecoin' in tags:
        categories.add('stablecoin-project')
    if 'payment' in tags or 'payments' in tags or 'onramp' in tags:
        categories.add('payment-provider')
    if 'nft' in tags and 'gaming' not in tags:
        categories.add('nft-project')
    if 'gamefi' in tags or 'gaming' in tags:
        categories.add('gaming-project')
    if 'ai' in tags or 'agent' in tags:
        categories.add('ai-agent-project')
    if 'rwa' in tags:
        categories.add('rwa-project')
    if 'data' in tags or 'analytics' in tags:
        categories.add('data-analytics')
    if 'security' in tags or 'audit' in tags:
        categories.add('security-audit')
    if 'cross-chain' in tags or 'bridge' in tags:
        categories.add('cross-chain-protocol')
    if 'depin' in tags:
        categories.add('depin-project')
    if 'socialfi' in tags or 'social' in tags:
        categories.add('social-protocol')
    if 'vc' in tags or 'venture' in tags or 'investment' in tags:
        categories.add('venture-capital')
    if 'launchpad' in tags or 'launch' in tags:
        categories.add('launchpad-platform')
    if 'devtools' in tags or 'developer' in tags:
        categories.add('developer-tool')
    if 'derivatives' in tags or 'perpetual' in tags:
        categories.add('derivatives-protocol')
    if 'privacy' in tags or 'zero-knowledge' in tags or 'zk' in tags:
        categories.add('privacy-zk-protocol')

    # 方法 2: 对一些宽泛标签用 content 辅助验证
    if not categories:
        if 'uniswap' in ename or 'curve' in ename or 'balancer' in ename:
            categories.add('dex-amm')
        if 'aave' in ename or 'compound' in ename or 'morpho' in ename:
            categories.add('defi-lending')
        if 'chainlink' in ename or 'pyth' in ename or 'redstone' in ename:
            categories.add('oracle-provider')

    return categories

# === 执行分类 ===
entity_categories = defaultdict(set)
category_entities = defaultdict(list)

for ename, data in entities.items():
    cats = classify_entity(ename, data)
    for cat in cats:
        entity_categories[ename].add(cat)
        category_entities[cat].append(ename)

# === 概念覆盖映射（category -> 对应的概念页名）===
CONCEPT_COVERAGE = {
    'layer1-blockchain': ['l1-competition'],
    'layer2-solution': ['layer2', 'danksharding', 'data-availability', 'sequencer'],
    'centralized-exchange': ['cex', 'market-maker-ecosystem'],
    'dex-amm': ['defi', 'automated-market-maker'],
    'defi-lending': ['defi-lending', 'defi'],
    'oracle-provider': ['oracle-infrastructure'],
    'wallet-provider': ['wallet-ecosystem', 'decentralized-identity'],
    'stablecoin-project': ['stablecoins'],
    'payment-provider': ['payfi', 'stablecoins'],
    'nft-project': ['nft', 'ordinals'],
    'gaming-project': ['gamefi', 'metaverse'],
    'ai-agent-project': ['ai-agents', 'ai-crypto', 'defai'],
    'rwa-project': ['rwa', 'bitcoin-treasury'],
    'data-analytics': ['onchain-data'],
    'security-audit': ['security-infrastructure'],
    'cross-chain-protocol': ['cross-chain'],
    'depin-project': ['depin', 'depai'],
    'social-protocol': ['socialfi'],
    'venture-capital': ['vc-venture-capital', 'fundraising', 'vc-tokenomics-evolution'],
    'launchpad-platform': ['launchpad-ecosystem', 'memecoins'],
    'developer-tool': ['security-infrastructure'],  # partial overlap
    'derivatives-protocol': ['perp-dex', 'defi'],
    'privacy-zk-protocol': ['privacy'],
    'wallet-provider': ['wallet-ecosystem', 'decentralized-identity'],
}

# === 报告 ===
print("=" * 65)
print("📊 概念审计 v2 — 基于标签的精确聚类")
print("=" * 65)
print(f"\n总实体: {len(entities)} | 总概念: {len(existing_concepts)}")
print(f"比率: {len(entities)/max(len(existing_concepts),1):.1f}:1 (目标 5:1)")
print()

# 按聚类大小排序
all_categories = sorted(category_entities.keys(), key=lambda c: -len(category_entities[c]))

print(f"{'聚类':28s} {'实体数':>6s} {'概念覆盖':>30s}")
print("-" * 70)

fully_covered = []
partially_covered = []
not_covered = []

for cat in all_categories:
    count = len(category_entities[cat])
    expected = CONCEPT_COVERAGE.get(cat, [])
    covered = [c for c in expected if c in existing_concepts]
    missing_c = [c for c in expected if c not in existing_concepts]

    if not expected:
        status = "⚠️  无概念映射"
        not_covered.append((count, cat, category_entities[cat]))
    elif missing_c and not covered:
        status = f"🔴 缺: {', '.join(missing_c)}"
        not_covered.append((count, cat, category_entities[cat]))
    elif missing_c:
        status = f"🟡 部分({', '.join(covered)}) + 缺: {', '.join(missing_c)}"
        partially_covered.append((count, cat, missing_c, category_entities[cat]))
    else:
        status = f"✅ {', '.join(covered)}"
        fully_covered.append(cat)

    sample = category_entities[cat][:5]
    print(f"{cat:28s} {count:6d} 个 {status}")
    if count <= 5:
        print(f"{'':36s} 实体: {', '.join(sample)}")

# === 缺口详情 ===
if not_covered:
    print(f"\n{'='*65}")
    print("🔴 完全无概念覆盖的聚类（需创建概念页）")
    print("=" * 65)
    for count, cat, entities_list in sorted(not_covered, key=lambda x: -x[0]):
        print(f"\n  {cat} — {count} 个实体")
        print(f"  代表: {', '.join(entities_list[:8])}")
        expected = CONCEPT_COVERAGE.get(cat, [])
        if expected:
            print(f"  建议创建: concepts/{expected[0]}.md")

if partially_covered:
    print(f"\n{'='*65}")
    print("🟡 部分覆盖的聚类（概念存在但需要扩充）")
    print("=" * 65)
    for count, cat, missing, entities_list in sorted(partially_covered, key=lambda x: -x[0])[:5]:
        print(f"\n  {cat} — {count} 个实体, 缺概念: {', '.join(missing)}")
        print(f"  代表: {', '.join(entities_list[:5])}")

# === 统计 ===
total_entity_cats = sum(len(v) for v in category_entities.values())
total_entities_with_cats = len([e for e in entity_categories if entity_categories[e]])
print(f"\n{'='*65}")
print(f"📋 汇总")
print("=" * 65)
print(f"  已聚类实体: {total_entities_with_cats}/{len(entities)} ({total_entities_with_cats*100//len(entities)}%)")
print(f"  完全覆盖的聚类: {len(fully_covered)}")
print(f"  部分覆盖: {len(partially_covered)}")
print(f"  无覆盖: {len(not_covered)}")
print(f"  Entity/Concept 比: {len(entities)}/{len(existing_concepts)} = {len(entities)/max(len(existing_concepts),1):.1f}:1")
print(f"\n  当前 Concepts: {len(existing_concepts)}")
total_needed = sum(len(CONCEPT_COVERAGE.get(c, [])) for c, _ in not_covered)
total_needed += sum(len(m) for _, _, m, _ in partially_covered)
print(f"  需新增概念: ~{total_needed} 个")
print(f"  目标 Concepts: ~{len(existing_concepts) + total_needed}")
print(f"  目标比率: {len(entities)/max(len(existing_concepts)+total_needed,1):.1f}:1")
