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
      image: 'cover-xianyu-research.webp',
      thumbnail: 'cover-xianyu-research-thumb.webp',
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
      thumbnail: 'english-thumb.webp',
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
      image: 'cover-musk-analysis.webp',
      thumbnail: 'cover-musk-analysis-thumb.webp',
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
    { id: 'english', category: '学习资料', name: '英语学习工具', state: '体验介绍', desc: '为自己的英语学习设计的听说练习工具。', detail: '已经做过个人学习网页实验；当前商城尚未配置可确认的在线体验地址。', type: 'LEARNING', number: '03' },
    { id: 'validation', category: '效率模板', name: '需求验证记录表', state: '免费下载', desc: '从发现需求到成交验证，记录真实数据和下一步。', detail: '适合在闲鱼、小红书等渠道尝试新品的人。包含需求来源、客户问题、曝光、询问、订单、成本和复盘字段。CSV 可用 Excel 或其他表格软件打开。', type: 'VALIDATE', number: '04', download: 'downloads/validation.csv' }
  ],

  featuredVideo: {
    eyebrow: '视频 · 抖音',
    title: '我研究了373个赚钱项目，发现方向错了',
    description: '',
    image: 'douyin-7709504316477934857.jpg',
    href: 'https://www.douyin.com/video/7709504316477934857'
  },

  featuredArticle: {
    category: '微信公众号',
    title: '我让AI整理了373个赚钱方法，发现“能做”和“能赚钱”差得很远',
    description: '从项目清单回到真实需求、成交和交付，重新思考应该怎样选择项目。',
    image: 'cover-article-373-ideas.webp',
    thumbnail: 'cover-article-373-ideas-thumb.webp',
    href: 'https://mp.weixin.qq.com/s/qscCOEBJ2KiBs-fmlXdbVg'
  },

  featuredBook: {
    eyebrow: '原创电子书 · 免费下载',
    title: '造一门生意：从想法到第一笔收入',
    description: '把一个想法，变成能持续赚钱的小生意。',
    image: 'book-build-a-business.webp',
    downloads: [
      { label: '下载 PDF', href: 'downloads/build-a-business-first-income.pdf' },
      { label: '下载 EPUB', href: 'downloads/build-a-business-first-income.epub' }
    ]
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

// 正式发布目录。书籍和模板引用已有资料，避免重复维护下载链接。
{
  const site = window.HOU_SITE;
  const book = site.featuredBook;
  const sheet = site.products.find(item => item.id === 'validation');
  const defaults = {
    status: '已上线', pricing: '免费使用', price: '免费', featured: true,
    trial: '', purchase: '', apply: '', released: null, updated: null,
    feedback: 'https://x.com/LaohouGrowth', screenshots: [], changelog: []
  };
  site.catalog = [
    {
      ...defaults, id: 'book-business', slug: 'build-a-business', name: book.title,
      category: '数字商品', icon: '书', image: '/assets/' + book.image,
      summary: book.description, description: '围绕从想法到第一笔收入的过程，讨论如何选择并验证一个小生意。',
      features: ['PDF 固定版式阅读', 'EPUB 电子书阅读'], audience: '正在选择创业方向、准备验证第一个想法的读者。',
      tutorial: '按阅读设备选择格式。电脑可用 PDF 阅读器，手机或电子书阅读器可导入 EPUB。',
      downloads: book.downloads.map(d => ({ label: d.label, href: '/' + d.href })),
      rights: '两个格式均可免费下载。', changelog: ['已提供 PDF 和 EPUB 两种格式。'],
      faq: [['两种格式怎么选？','希望保留排版可选 PDF，希望调整字号可选 EPUB。']],
      seo: { title: book.title + ' · 电子书下载', description: book.description, image: '/assets/' + book.image }
    },
    {
      ...defaults, id: sheet.id, slug: 'demand-validation', name: sheet.name,
      feedbackQuestion: '你正在验证什么项目，填这张表时卡在哪一步？',
      feedbackApi: '',
      example: [
        '需求来源：闲鱼上的设计、办公自动化和网站定制服务。当前笔记记录的是商品观察。',
        '验证假设：客户更容易说清楚要交付什么。可以挑一个有明确交付物的需求进行测试。',
        '下一步：发布一次小规模服务，记录咨询、成交和交付成本。',
        '用户原话、订单量和成交金额：目前没有对应记录，先留空，待实际测试后填写。'
      ],
      category: '数据与商业研究', icon: '表', image: '/assets/validation-preview.png',
      screenshots: ['/assets/validation-preview.png'], summary: sheet.desc, description: sheet.detail,
      features: ['整理需求来源与用户原话','跟踪曝光、咨询、订单和直接成本','记录验证结论与下一步'],
      audience: '正在试卖商品、服务或数字产品的个人开发者与创业者。',
      tutorial: '下载 CSV，用表格软件按 UTF-8 打开，按测试动作逐行填写。',
      downloads: [{label: '下载 CSV', href: '/' + sheet.download}], rights: '免费获取完整 CSV 模板。',
      changelog: ['已提供包含 15 个字段的 CSV 模板。'],
      faq: [['下载后为什么只有表头？','这是空白记录表，从第二行开始填写自己的验证数据。']],
      seo: { title: sheet.name + ' · CSV 模板下载', description: sheet.desc, image: '/assets/validation-preview.png' }
    }
  ];
}
