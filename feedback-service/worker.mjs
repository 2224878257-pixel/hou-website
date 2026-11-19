const channels = new Set(['wechat','douyin','site','home_article','home_video']);

export default {
  async fetch(request, env) {
    const origin = 'https://aibeep.cn';
    if (request.headers.get('Origin') !== origin) return new Response(null,{status:403});
    const headers = {'Access-Control-Allow-Origin':origin,'Access-Control-Allow-Methods':'POST, OPTIONS','Access-Control-Allow-Headers':'Content-Type','Cache-Control':'no-store'};
    const reply = status => new Response(null,{status,headers});
    if (request.method === 'OPTIONS') return reply(204);
    if (request.method !== 'POST') return reply(405);
    if (!request.headers.get('Content-Type')?.startsWith('application/json')) return reply(415);
    let data;
    try {
      const reader=request.body.getReader();
      const chunks=[]; let size=0;
      for (;;) {
        const {done,value}=await reader.read(); if(done)break;
        size+=value.length;
        if(size>10000){await reader.cancel();return reply(413)}
        chunks.push(value);
      }
      data=JSON.parse(await new Blob(chunks).text());
    } catch { return reply(400); }
    if (!channels.has(data?.channel)) return reply(400);
    const path=new URL(request.url).pathname;
    const count=event=>env.DB.prepare('INSERT INTO counts(day,channel,event,n) VALUES(date(\'now\'),?,?,1) ON CONFLICT(day,channel,event) DO UPDATE SET n=n+1').bind(data.channel,event);
    if(path==='/events' && ['view','download_click'].includes(data.event)) {
      await count(data.event).run();
    } else if(path==='/feedback' && typeof data.message==='string' && data.message.trim() && data.message.length<=1200) {
      await env.DB.batch([env.DB.prepare('INSERT INTO feedback(channel,message) VALUES(?,?)').bind(data.channel,data.message.trim()),count('feedback_saved')]);
    } else return reply(400);
    return reply(204);
  }
};
