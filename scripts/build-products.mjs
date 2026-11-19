// Run from any directory: node scripts/build-products.mjs
import {readFileSync, writeFileSync, mkdirSync, existsSync} from 'node:fs';
import {resolve, dirname} from 'node:path';
import vm from 'node:vm';
const root = resolve(import.meta.dirname,'..');
const read = f => readFileSync(resolve(root,f),'utf8');
const save = (f,s) => { const path=resolve(root,f); mkdirSync(dirname(path),{recursive:true}); writeFileSync(path,s); };
const context={window:{}};
vm.runInNewContext(read('assets/site-data.js'),context);
const site=context.window.HOU_SITE;
const origin='https://aibeep.cn';
const categories=['AI工具','在线工具','效率软件','浏览器插件','自动化工作流','数字商品','数据与商业研究'];
const statuses=['已上线','内测中','即将上线','持续更新','停止维护'];
const models=['免费使用','一次性买断','按次收费','积分充值','月度订阅','年度订阅','软件授权','团队授权'];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const urls=[];
function page(path,title,description,body,image='/assets/avatar.jpg'){
  urls.push(path);
  save(path.slice(1)+'index.html',`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}｜AIBEEP</title><meta name="description" content="${esc(description)}"><link rel="canonical" href="${origin+path}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:type" content="website"><meta property="og:url" content="${origin+path}"><meta property="og:image" content="${origin+image}"><meta name="twitter:card" content="summary_large_image"><link rel="icon" href="/assets/favicon.svg"><link rel="stylesheet" href="/assets/catalog.css"></head><body><header><a class="brand" href="/"><img src="/assets/avatar.jpg" alt="">侯同学呀</a><nav aria-label="网站导航"><a href="/products/">产品</a><a href="/lab/">实验室</a><a href="/articles/">文章</a><a href="/resources/">资源</a><a href="/about/">关于我</a></nav></header><main>${body}</main><footer>侯同学呀 · AIBEEP</footer></body></html>`);
}
const link=(url,label,download=false)=>`<a class="action" href="${esc(url)}"${download?' download':''}>${esc(label)}</a>`;
function actions(p){
  if(['停止维护','即将上线'].includes(p.status))return '';
  if(p.status==='内测中')return p.apply?link(p.apply,'申请体验'):'';
  return [p.trial&&link(p.trial,p.pricing==='免费使用'?'免费使用':'免费体验'),p.purchase&&link(p.purchase,'购买 · '+p.price),...(p.downloads||[]).map(d=>link(d.href,d.label,true))].filter(Boolean).join('');
}
const section=(title,html)=>html?`<section><h2>${title}</h2>${html}</section>`:'';
const list=xs=>xs?.length?`<ul>${xs.map(s=>'<li>'+esc(s)+'</li>').join('')}</ul>`:'';
const cards=[];
const slugs=new Set();
for(const p of site.catalog){
  if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug)||slugs.has(p.slug)||!categories.includes(p.category)||!statuses.includes(p.status)||!models.includes(p.pricing)||!p.price)throw Error('产品字段错误 '+p.slug);
  slugs.add(p.slug);
  for(const url of [p.purchase,p.apply,p.trial,p.feedback,p.image,p.seo.image,...p.screenshots,...(p.downloads||[]).map(d=>d.href)].filter(Boolean)){
    if(!/^https:\/\//.test(url)&&(!/^\/(?!\/)/.test(url)||!existsSync(resolve(root,'.'+url))))throw Error('产品地址错误 '+url);
  }
  const path='/products/'+p.slug+'/';
  const meta=`<small>${esc(p.category)} · ${esc(p.status)}</small>`;
  cards.push(`<article data-category="${p.category}"><span class="icon">${esc(p.icon)}</span>${meta}<h2><a href="${path}">${esc(p.name)}</a></h2><p>${esc(p.summary)}</p><strong>${esc(p.price)}</strong><div class="actions">${link(path,'查看详情')}${actions(p)}</div></article>`);
  const feedbackPrompt = p.feedbackQuestion ? `<p>${esc(p.feedbackQuestion)}</p>${p.feedbackApi ? `<form id="private-feedback" data-api="${esc(p.feedbackApi)}"><label>你的反馈（仅站长可见）<textarea name="message" rows="4" maxlength="1200" required></textarea></label><button class="action">提交反馈</button><p role="status"></p></form>` : ''}<a id="sheet-feedback" href="https://github.com/2224878257-pixel/hou-website/issues/new?title=需求验证记录表使用反馈">在 GitHub 公开反馈 ↗</a><small>（登录 GitHub 后公开提交）</small><script defer src="/assets/sheet-feedback.js"></script>` : '';
  page(path,p.seo.title,p.seo.description,`<a href="/products/">← 全部产品</a><div class="hero"><div>${meta}<h1>${esc(p.name)}</h1><p>${esc(p.summary)}</p><strong>${esc(p.price)}</strong><div class="actions">${actions(p)}</div>${feedbackPrompt}</div><img src="${p.image}" alt="${esc(p.name)}预览"></div>${section('解决的问题','<p>'+esc(p.description)+'</p>')}${section('核心功能',list(p.features))}${section('适用人群','<p>'+esc(p.audience)+'</p>')}${section('使用方法','<p>'+esc(p.tutorial)+'</p>')}${p.example ? section('填写示例 · 闲鱼服务观察',list(p.example)+'<a href="/#note/xianyu">阅读原始研究笔记 →</a>') : ''}${section('价格与版本权益','<p>'+esc(p.price)+' · '+esc(p.rights)+'</p>')}${section('产品截图',(p.screenshots||[]).filter(s=>s!==p.image).map(s=>'<img class="shot" alt="产品界面" src="'+esc(s)+'">').join(''))}${section('更新日志',list(p.changelog))}${section('常见问题',p.faq.map(([q,a])=>'<details><summary>'+esc(q)+'</summary><p>'+esc(a)+'</p></details>').join(''))}${section('用户反馈',link(p.feedback,'联系侯同学呀 ↗'))}`,p.seo.image);
}
page('/products/','AIBEEP 产品中心','用AI创造实用产品，解决真实问题。',`<h1>AIBEEP 产品中心</h1><p>用AI创造实用产品，解决真实问题。</p><div class="filters" aria-label="产品分类">${['全部产品',...categories].map((c,i)=>`<button type="button" aria-pressed="${!i}">${c}</button>`).join('')}</div><div class="grid">${cards.join('')}</div><p hidden id="empty" role="status">这个分类暂时没有已发布的产品。</p><script src="/assets/catalog-filter.js" defer></script>`);
page('/lab/','AI 实验室','商业研究、开发中的工具与项目原型。','<h1>AI 实验室</h1><p>商业研究、开发中的工具与项目原型。</p><div class="grid">'+site.projects.map(p=>`<article><small>${esc(p.status)}</small><h2><a href="/${p.href}">${esc(p.name)}</a></h2><p>${esc(p.description)}</p></article>`).join('')+'<article><small>个人工具实验</small><h2><a href="/#note/english">英语学习工具</a></h2><p>听说练习工具的开发记录。</p></article></div>');
for(const [slug,hash,title] of [['articles','notes','文章与研究'],['resources','store','资源下载'],['about','about','关于我']]){
  save(slug+'/index.html',`<!doctype html><html lang="zh-CN"><meta charset="utf-8"><title>${title}｜侯同学呀</title><meta http-equiv="refresh" content="0;url=/#${hash}"><a href="/#${hash}">${title}</a></html>`);
}
const existing=read('sitemap.xml').replace(/\s*<!-- catalog -->[\s\S]*?<!-- end catalog -->/,'');
save('sitemap.xml',existing.replace('</urlset>','  <!-- catalog -->\n'+urls.map(u=>'  <url><loc>'+origin+u+'</loc></url>').join('\n')+'\n  <!-- end catalog -->\n</urlset>'));
