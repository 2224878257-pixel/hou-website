// Homepage presentation. Existing detail routes and product dialogs remain intact.
const homeSections = () => `
 <div class="marc-layout">
  <div class="marc-profile"><img src="assets/avatar.jpg" alt="侯同学本人" class="marc-avatar"><h1>侯同学呀</h1>
   <p>8年互联网广告营销经验，目前在研究 AI、商业增长和互联网生意。</p>
   <p>喜欢用 AI 做一些实用的工具，研究不同的商业项目，也会记录自己亲自尝试的过程和结果。</p>
   <p>欢迎交流，一起做点有意思的事。</p>
   <div class="marc-social"><a href="https://x.com/LaohouGrowth" target="_blank" rel="noopener">𝕏 Twitter</a><a href="https://github.com/2224878257-pixel" target="_blank" rel="noopener">GitHub ↗</a><a href="#about">关于我 ↗</a></div>
   <div class="marc-contact"><a href="#growth">商业合作</a><a href="#community">开张社</a></div>
  </div>
  <div class="marc-stream">
   <section class="marc-block"><div class="marc-heading"><h2>我做的产品</h2><a href="#lab">全部产品 →</a></div><div class="marc-products">
   ${projects.slice(0,4).map((p,i)=>`<a class="marc-product" href="${p[3]}"><div class="marc-product-top"><span class="marc-mark mark-${i}">${icon(p[4])}</span><strong>${p[0]}</strong><small>${p[2]}</small></div><p>${p[1]}</p><div class="marc-product-bottom">查看项目 <span>↗</span></div></a>`).join('')}
   ${products.filter(p=>['english','validation'].includes(p.id)).map((p,i)=>`<button class="marc-product" data-product="${p.id}"><div class="marc-product-top"><span class="marc-mark mark-${i+4}">${icon(i?'notes':'lab')}</span><strong>${p.name}</strong><small>${p.state}</small></div><p>${p.desc}</p><div class="marc-product-bottom">查看详情 <span>↗</span></div></button>`).join('')}
   </div><div class="marc-mini">${[['商业增长','#growth','广告诊断与增长实践','growth'],['出海探索','#global','研究海外产品与营销','globe'],['工具推荐','#tools','值得关注的实用工具','tools'],['数字商城','#store','模板与原创资源','store'],['创意设计','#design','广告素材与网站设计','design'],['品牌合作','#brand','内容与工具合作','link']].map(p=>`<a href="${p[1]}"><span>${icon(p[3])}</span><div><strong>${p[0]}</strong><p>${p[2]}</p></div></a>`).join('')}</div></section>
   <section class="marc-block marc-writing"><div><div class="marc-heading"><h2>公众号文章</h2><a href="#notes">所有文章 →</a></div><div class="marc-list"><a href="${featuredArticle.href}" target="_blank" rel="noopener"><img src="assets/${featuredArticle.image}" alt=""><div><small>${featuredArticle.category}</small><strong>${featuredArticle.title}</strong></div></a>${site.notes.slice(0,1).map(n=>`<a href="#note/${n.slug}"><img src="assets/${n.image}" alt=""><div><small>${n.category}</small><strong>${n.title}</strong></div></a>`).join('')}</div></div><div><div class="marc-heading"><h2>研究笔记</h2><a href="#research">更多研究 →</a></div><div class="marc-list">${site.notes.slice(1,3).map(n=>`<a href="#note/${n.slug}"><img src="assets/${n.image}" alt=""><div><small>${n.category}</small><strong>${n.title}</strong></div></a>`).join('')}</div></div></section>
   <section class="marc-block marc-video"><a class="marc-media" href="${featuredVideo.href}" target="_blank" rel="noopener"><img src="assets/${featuredVideo.image}" alt="${featuredVideo.title}"></a><div><small>${featuredVideo.eyebrow}</small><h2>${featuredVideo.title}</h2><p>${featuredVideo.description}</p><a href="${featuredVideo.href}" target="_blank" rel="noopener">前往抖音观看 ↗</a></div></section>
   <section class="marc-block marc-books"><div class="marc-heading"><h2>书籍与资源</h2><a href="#books">全部书籍 →</a></div><div class="marc-bookrow"><div class="marc-book-art"><img src="assets/${featuredBook.image}" alt="${featuredBook.title}"></div><div><small>${featuredBook.eyebrow}</small><h2>${featuredBook.title}</h2><p>${featuredBook.description}</p><div class="actions">${featuredBook.downloads.map(d=>`<a class="marc-button" href="${d.href}" download>${d.label}</a>`).join('')}</div></div></div><div class="marc-resource"><div><strong>需求验证记录表</strong><p>记录真实需求、订单与交付成本。</p></div><a class="marc-button" href="downloads/validation.csv" download>免费下载</a></div></section>
   <div class="marc-end">© 2026 侯同学呀 · <a href="#about">关于我</a> · <a href="#saved">我的收藏</a></div>
  </div>
 </div>`;
function presentHome(){const home=!location.hash||location.hash==='#home';document.body.classList.toggle('marc-home',home);if(home)document.getElementById('content').innerHTML=homeSections();}
window.addEventListener('hashchange',presentHome);presentHome();
