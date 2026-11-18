// 网站内容总入口。
// 新增或修改项目、文章、产品、视频、书籍时，优先只编辑这个文件。
window.HOU_SITE = {
  projects: [
    { name: 'AIBEEP', description: 'AI与企业增长资讯研究', status: '持续迭代', href: 'projects/aibeep.html', kind: 'lab' },
    { name: 'AI浏览器自动化', description: '在授权范围内探索重复网页操作的自动化。', status: '实验中', href: 'projects/browser-agent.html', kind: 'lab' },
    { name: '商业机会雷达', description: '整理需求、商业线索与验证思路。', status: '研究中', href: 'projects/opportunity-radar.html', kind: 'growth' },
    { name: '互联网生意研究看板', description: '把项目资料、渠道、成本与指标整理为档案。', status: '原型中', href: 'projects/business-atlas.html', kind: 'growth' },
    { name: '增长与数据诊断', description: '从素材、渠道到承接链路排查问题。', status: '长期实践', href: 'projects/growth-fieldwork.html', kind: 'growth' },
    { name: '内容档案', description: '记录真实项目、实验和复盘。', status: '持续整理', href: 'projects/field-notes.html', kind: 'notes' }
  ],

  notes: [
    {
      slug: 'xianyu',
      title: '我在闲鱼研究了几百个商品',
      description: '从商品背后的真实需求入手，观察可交付的小生意。',
      category: '商业探索',
      image: 'office.webp',
      body: [
        '研究问题：闲鱼上的商品究竟在解决什么具体需求？',
        '观察到设计、办公自动化、网站定制等服务的共同点，是客户往往有明确交付目标。下一步是选择一个需求，发布小规模服务，记录咨询、成交与交付成本。'
      ]
    },
    {
      slug: 'english',
      title: '我用AI搭建英语学习工具',
      description: '为自己的英语学习设计听说练习网页，记录开发和迭代过程。',
      category: 'AI实践',
      image: 'english.webp',
      body: [
        '我需要能在手机上使用的英语练习工具。',
        '已经尝试用 AI 开发个人学习网页，重点是发音、听力和复习。当前继续优化朗读速度与自然度，暂不提供未确认的公开体验地址。'
      ]
    },
    {
      slug: 'musk',
      title: '我用AI分析马斯克的公开发言',
      description: '用公开资料研究商业判断，区分原始信息和推论。',
      category: '商业研究',
      image: 'office.webp',
      body: [
        '研究对象是马斯克的公开发言、访谈与演讲。',
        '将资料整理为可检索的记录，再按主题分析其商业观点。公开言论不等于确定的未来，分析也需要保留来源与验证边界。'
      ]
    },
    {
      slug: 'growth',
      title: '广告投放的诊断思路',
      description: '从素材、流量、转化与线索质量逐项检查。',
      category: '商业增长',
      image: 'diagnosis.webp',
      body: [
        '广告成本变化往往是多个环节共同作用。',
        '先看消耗、素材表现，再检查落地页、线索质量和销售承接。通过小规模实验验证原因，而非盲目调整价格。'
      ]
    }
  ],

  products: [
    { id: 'workflow', category: 'AI 工具', name: 'AI 办公工作流', state: '开发计划', desc: '把重复操作梳理成可以复用的 AI 工作流。', detail: '适合需要重复整理资料、生成文档、处理表格的个人与小团队。当前尚处于产品规划阶段，未开放购买。', type: 'WORKFLOW', number: '01' },
    { id: 'ads', category: '效率模板', name: '广告投放诊断模板', state: '开发计划', desc: '从素材、成本、转化到线索质量，一步步排查问题。', detail: '基于实际广告投放经验设计的诊断模板。计划包含数据检查、问题记录和优化实验。尚未公开销售。', type: 'GROWTH', number: '02' },
    { id: 'english', category: '学习资料', name: '英语学习工具', state: '体验介绍', desc: '为自己的英语学习设计的听说练习工具。', detail: '已经做过个人学习网页实验；当前商城尚未配置可确认的在线体验地址。', type: 'LEARNING', number: '03' },
    { id: 'validation', category: '效率模板', name: '需求验证记录表', state: '免费下载', desc: '从发现需求到成交验证，记录真实数据和下一步。', detail: '适合在闲鱼、小红书等渠道尝试新品的人。包含需求来源、客户问题、曝光、询问、订单、成本和复盘字段。CSV 可用 Excel 或其他表格软件打开。', type: 'VALIDATE', number: '04', download: 'downloads/validation.csv' }
  ],

  featuredVideo: {
    eyebrow: '实践视频 · 内容筹备中',
    title: '用 AI 做一个自己的英语学习工具',
    description: '从想法、开发到手机端使用，记录真实的实践过程。',
    image: 'english.webp',
    href: '#note/english'
  },

  featuredBook: {
    eyebrow: '原创小说 · 已完稿，待上线',
    title: '今夜替我送葬',
    description: '我的悬疑小说创作实验，记录从写作到完稿的过程。',
    image: 'store-hero.webp'
  },

  externalLinks: [
    { name: 'Meta广告资料库', description: '研究正在投放的广告与创意。', href: 'https://www.facebook.com/ads/library/', category: '广告研究' },
    { name: 'TikTok Creative Center', description: '查看广告创意、趋势与案例。', href: 'https://ads.tiktok.com/business/creativecenter/', category: '广告研究' },
    { name: 'Upwork', description: '观察海外自由职业服务需求。', href: 'https://www.upwork.com/', category: '需求验证' },
    { name: 'Gumroad', description: '研究数字产品与产品分发渠道。', href: 'https://gumroad.com/', category: '数字产品' },
    { name: 'Product Hunt', description: '发现新产品与独立开发项目。', href: 'https://www.producthunt.com/', category: '产品研究' }
  ],

  validationTasks: [
    '收集10个海外客户真实需求',
    '制作一个可展示的最小交付样例',
    '向目标客户验证需求与愿付价格',
    '记录首批真实咨询与订单',
    '复盘交付成本，决定是否继续'
  ]
};
