// Home-only view. The existing router continues to own all hash pages.
const heading = (title, href, label) => `<div class="folio-heading"><h2>${title}</h2><a href="${href}">${label} →</a></div>`;
const work = (image,title,category,href) => `<a class="work" href="${href}"><div class="work-art"><img src="assets/${image}" alt=""></div><small>${category}</small><h3>${title}</h3></a>`;
function homeSections(){
 const english=site.notes.find(n=>n.slug==='english'), market=site.notes.find(n=>n.slug==='xianyu');
 return `<div class="folio"><a class="studio-news" href="/products/build-a-business/">原创电子书 ·《造一门生意》免费下载 →</a>
 <section class="studio-stage"><nav class="studio-nav" aria-label="主页导航"><a class="studio-brand" href="#home">AIBEEP</a><div><a href="/products/">产品</a><a href="#notes">文章</a><a href="#videos">视频</a><a href="/lab/">实验室</a></div><a class="studio-about" href="#about">关于侯同学呀</a></nav>
 <h1>侯同学呀的工具、作品<br>与研究笔记</h1><a class="studio-cta" href="/products/">探索我的产品</a>
 <a class="studio-window" href="#note/english" aria-label="查看从零会英语项目"><img src="assets/research-english.webp" alt="从零会英语课程首页"></a></section>
 <section class="signature"><img src="assets/avatar.jpg" alt="侯同学呀"><div><h2>侯同学呀</h2><p>8年互联网广告营销经验。研究 AI 工具、商业增长与出海探索，把实践做成产品，也把过程写下来。</p></div></section>
 <section>${heading('精选作品','/lab/','看实验室')}<div class="works">${[english,market].filter(Boolean).map(n=>work(n.image,n.title,n.category,'#note/'+n.slug)).join('')}</div></section>
 <section>${heading('AI 工具与数字商品','/products/','全部产品')}<div class="rows">${site.catalog.map(p=>`<a href="/products/${p.slug}/"><b>${p.name}</b><span>${p.price}　↗</span></a>`).join('')}</div></section>
 <section>${heading('最新图文文章','#notes','文章与研究')}<div class="rows">${[featuredArticle,...site.notes].map(n=>`<a href="${n.href||'#note/'+n.slug}"><img loading="lazy" src="assets/${n.thumbnail||n.image}" alt=""><b>${n.title}</b><span>${n.category}</span></a>`).join('')}</div></section>
 <section>${heading('最近视频','#videos','视频')}<div class="marc-video"><a class="marc-media" href="${featuredVideo.href}" aria-label="在抖音播放"><img loading="lazy" src="assets/${featuredVideo.image}" alt=""><span class="video-play" aria-hidden="true">▶</span></a><div><small>抖音</small><h3>${featuredVideo.title}</h3><a href="${featuredVideo.href}">前往观看 ↗</a><p><a href="/products/demand-validation/?entry=home_video">配套需求验证表 →</a></p></div></div></section>
 <section>${heading('书籍与资料','#books','书架')}<div class="shelf"><img loading="lazy" src="assets/${featuredBook.image}" alt="书封"><div><h3>${featuredBook.title}</h3><p>${featuredBook.description}</p>${featuredBook.downloads.map(d=>`<a class="file" href="${d.href}" download>${d.label} ↓</a>`).join('')}</div></div></section>
 <section>${heading('商业服务','#growth','合作方式')}<div class="rows">${[['广告投放诊断','素材、渠道与转化问题清单'],['设计服务','广告素材与落地页设计'],['AI 自动化定制','流程梳理与工具原型']].map(([t,d])=>`<a href="#growth"><b>${t}</b><span>${d}</span></a>`).join('')}</div></section>
 <footer><a href="#about">关于侯同学呀</a><a href="https://x.com/LaohouGrowth">X ↗</a><a href="https://github.com/2224878257-pixel">GitHub ↗</a></footer></div>`;
}
function presentHome(){const home=!location.hash||location.hash==='#home';document.body.classList.toggle('marc-home',home);if(home)document.getElementById('content').innerHTML=homeSections();}
window.addEventListener('hashchange',presentHome);presentHome();
