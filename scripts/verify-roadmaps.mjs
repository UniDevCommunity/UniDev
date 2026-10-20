import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cache = new Map();
function load(relative) {
  const filename = path.join(root, relative);
  if (cache.has(filename)) return cache.get(filename);
  const exports = {};
  cache.set(filename, exports);
  const compiled = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  new Function('exports', 'require', compiled)(exports, specifier => {
    assert(specifier.startsWith('@/data/'), `Unexpected data dependency: ${specifier}`);
    return load(`src/${specifier.slice(2)}.ts`);
  });
  return exports;
}
const { ROADMAPS } = load('src/data/roadmaps.ts');
const ids = new Set();
for (const roadmap of ROADMAPS) {
  for (const id of [roadmap.id, ...roadmap.steps.flatMap(s => [s.id, ...s.topics.map(t => t.id)])]) {
    assert(!ids.has(id), `Duplicate ID: ${id}`);
    ids.add(id);
  }
  roadmap.steps.forEach((step, index) => {
    assert.equal(step.stepNumber, index + (roadmap.learningMode === 'modular' ? 0 : 1));
    assert(step.topics.length && step.resources.length, `Empty module: ${step.id}`);
    for (const resource of step.resources) {
      assert.equal(new URL(resource.url).protocol, 'https:');
      assert(resource.title && resource.description && resource.platform);
    }
    for (const id of step.prerequisiteIds || []) assert(roadmap.steps.some(s => s.id === id));
  });
  function walk(id, ancestors = new Set()) {
    assert(!ancestors.has(id), `Prerequisite cycle: ${id}`);
    const next = new Set([...ancestors, id]);
    for (const parent of roadmap.steps.find(s => s.id === id)?.prerequisiteIds || []) walk(parent, next);
  }
  for (const step of roadmap.steps) walk(step.id);
}
const frontend = ROADMAPS.find(r => r.id === 'frontend');
assert(frontend);
const normalize = text => text.replace(/`|\*\*/g, '').replace(/\s+/g, ' ').trim();
const source = fs.readFileSync(path.join(root, 'public/roadmaps/frontend/source-fa.md'), 'utf8').replace(/^-{5,}\s*$/gm, '');
const modules = source.split(/^## /m).filter(b => b.startsWith('ماژول ') || b.startsWith('پیش از شروع:'));
assert.equal(frontend.steps.length, modules.length);
for (const [index, block] of modules.entries()) {
  const step = frontend.steps[index];
  const [, ...body] = block.split('\n');
  const fields = body.join('\n').split(/\*\*([^*]+)\*\*/);
  const serialized = normalize(JSON.stringify(step));
  for (const introduction of fields[0].split(/\s+-\s+/)) {
    const expected = normalize(introduction).replace(/^- /, '');
    if (expected) assert(serialized.includes(expected), `Source introduction or specialization omitted: ${step.id}`);
  }
  for (let n = 1; n < fields.length; n += 2) {
    const label = fields[n];
    for (const item of fields[n + 1].split(/\s+-\s+/)) {
      const expected = normalize(item).replace(/^- /, '');
      if (!expected) continue;
      assert(serialized.includes(expected), `Source content omitted: ${step.id} / ${label} / ${expected}`);
    }
  }
}
assert.equal(frontend.references.length, 3);
assert.equal(frontend.guide.find(s => s.title.includes('معیارهای آمادگی')).items.length, 7);
assert(source.includes('## برای بازبینی این نسخه'), 'Editorial prompts remain available in the unmodified source document');
for (const download of frontend.downloads) assert(fs.existsSync(path.join(root, 'public', download.url)));
console.log(`PASS: ${ROADMAPS.length} roadmaps, unique identifiers, resource structure and valid prerequisite graph.`);
console.log(`PASS: All Markdown module fields retained across ${modules.length} frontend sections; 3 original references and all source files present.`);
