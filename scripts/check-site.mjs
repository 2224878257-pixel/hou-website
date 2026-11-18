import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import vm from 'node:vm';

const root = resolve(import.meta.dirname, '..');
const failures = [];

function filesIn(dir) {
  return readdirSync(dir).flatMap(name => {
    const full = join(dir, name);
    return statSync(full).isDirectory() && name !== '.git' ? filesIn(full) : [full];
  });
}

function checkLocalReference(source, value) {
  if (!value || /^(#|https?:|mailto:|tel:|data:|javascript:)/i.test(value)) return;
  const clean = decodeURI(value.split(/[?#]/)[0]);
  if (!clean) return;
  const target = clean.startsWith('/') ? join(root, clean.slice(1)) : resolve(dirname(source), clean);
  if (!existsSync(target)) failures.push(`${relative(root, source)} -> ${value}`);
}

for (const file of filesIn(root).filter(file => file.endsWith('.html'))) {
  const html = readFileSync(file, 'utf8');
  for (const match of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)) {
    checkLocalReference(file, match[1]);
  }
}

const dataFile = join(root, 'assets', 'site-data.js');
const context = { window: {} };
vm.runInNewContext(readFileSync(dataFile, 'utf8'), context, { filename: dataFile });
const data = context.window.HOU_SITE;

for (const project of data.projects) checkLocalReference(join(root, 'index.html'), project.href);
for (const note of data.notes) checkLocalReference(join(root, 'index.html'), `assets/${note.image}`);
for (const product of data.products) if (product.download) checkLocalReference(join(root, 'index.html'), product.download);
checkLocalReference(join(root, 'index.html'), `assets/${data.featuredVideo.image}`);
checkLocalReference(join(root, 'index.html'), `assets/${data.featuredArticle.image}`);
checkLocalReference(join(root, 'index.html'), `assets/${data.featuredBook.image}`);
for (const download of data.featuredBook.downloads) checkLocalReference(join(root, 'index.html'), download.href);

if (failures.length) {
  console.error('发现失效的本地链接或资源：\n' + failures.map(item => `- ${item}`).join('\n'));
  process.exit(1);
}

console.log('站点检查通过：HTML 与内容数据中的本地链接均存在。');
