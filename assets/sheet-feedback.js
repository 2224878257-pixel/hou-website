// Carry only the known campaign source into the public feedback draft.
const source = new URLSearchParams(location.search).get('utm_source');
const entry = new URLSearchParams(location.search).get('entry');
const labels = {wechat:'公众号', douyin:'抖音', home_article:'首页文章', home_video:'首页视频', site:'网站'};
const key = ['wechat','douyin'].includes(source) ? source : ['home_article','home_video'].includes(entry) ? entry : 'site';
const channel = labels[key];
const feedbackLink = document.getElementById('sheet-feedback');
const draft = new URL(feedbackLink.href);
draft.searchParams.set('body', '我正在验证的项目：\n\n填写时卡住的一步：\n\n来源：' + channel);
feedbackLink.href = draft.href;

const form = document.getElementById('private-feedback');
if (form) {
  const post = (path, fields) => fetch(new URL(path,form.dataset.api), {
    method:'POST', headers:{'Content-Type':'application/json'}, credentials:'omit', keepalive:true,
    body:JSON.stringify({channel:key,...fields})
  });
  const record = event => post('/events',{event}).catch(()=>{});
  record('view');
  document.querySelectorAll('a[download]').forEach(a=>a.addEventListener('click',()=>record('download_click')));
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    const button=form.querySelector('button'), status=form.querySelector('[role=status]');
    if(button.disabled)return;
    button.disabled=true;
    try {
      const response=await post('/feedback',{message:form.elements.message.value.trim()});
      if(!response.ok)throw Error();
      form.reset(); status.textContent='反馈已收到，谢谢你。';
    } catch {status.textContent='提交失败，请稍后重试。';}
    finally {button.disabled=false;}
  });
}
