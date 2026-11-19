// Carry only the known campaign source into the public feedback draft.
const source = new URLSearchParams(location.search).get('utm_source');
const channel = source === 'wechat' ? '公众号' : source === 'douyin' ? '抖音' : '网站';
const feedbackLink = document.getElementById('sheet-feedback');
const draft = new URL(feedbackLink.href);
draft.searchParams.set('body', '我正在验证的项目：\n\n填写时卡住的一步：\n\n来源：' + channel);
feedbackLink.href = draft.href;
