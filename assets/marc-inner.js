/* Keep all existing routes and page content, share the personal navigation. */
(()=>{
 const primary=[['home','首页'],['lab','项目'],['notes','文章'],['videos','视频'],['books','书籍']];
 const extra=[['research','商业研究'],['store','资源下载'],['tools','工具推荐'],['growth','商业合作'],['about','关于我']];
 const navLinks=(items,prefix)=>items.map(([id,label])=>`<a href="${prefix}#${id}" data-route="${id}">${label}</a>`).join('');
 if(document.getElementById('content')){
   const header=document.querySelector('main>header');
   const brand=document.createElement('a');brand.className='inner-brand';brand.href='#home';brand.innerHTML='<img src="assets/avatar.jpg" alt="">侯同学呀';
   const nav=document.createElement('nav');nav.className='inner-nav';nav.setAttribute('aria-label','网站导航');nav.innerHTML=navLinks(primary,'')+`<details><summary>更多</summary><div class="inner-more">${navLinks(extra,'')}</div></details>`;
   header.prepend(brand,nav);
   function sync(){const hash=location.hash.slice(1)||'home';document.body.classList.toggle('marc-inner',hash!=='home');nav.querySelectorAll('a').forEach(a=>{if(a.dataset.route===hash||a.dataset.route==='notes'&&hash.startsWith('note/')||a.dataset.route==='global'&&hash.startsWith('global/'))a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});nav.querySelector('details').open=false;}
   addEventListener('hashchange',sync);sync();
 }else{
   document.body.classList.add('marc-static');const prefix=location.pathname.includes('/projects/')?'../':'./';const brand=document.querySelector('header .brand,header .wordmark');if(brand)brand.innerHTML=`<img src="${prefix}assets/avatar.jpg" alt="">侯同学呀`;
   const nav=document.querySelector('header nav');if(nav){nav.innerHTML=navLinks(primary,prefix+'index.html')+`<a href="${prefix}index.html#about">关于我</a>`;}
   const contact=document.querySelector('header .nav-cta');if(contact){contact.href=prefix+'index.html#growth';contact.textContent='合作 ↗';}
   document.querySelectorAll('.page-toplink,.case-back').forEach(a=>{a.href=prefix+'index.html#'+(location.pathname.includes('/projects/')?'lab':'home');a.textContent=location.pathname.includes('/projects/')?'← 返回项目':'← 返回首页';});
 }
})();
