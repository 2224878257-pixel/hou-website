# AIBEEP 产品发布与后端接入

当前使用 GitHub Pages 的 main 分支根目录。产品页是可独立索引的静态 HTML，筛选在浏览器本地运行。

## 发布

1. 编辑 assets/site-data.js 中的 site.catalog。沿用现有条目结构，填写唯一 id、slug、分类、状态、pricing、实际展示价 price、介绍、功能、权益、教程、FAQ、截图和 SEO。released、updated 可填 ISO 日期，未知时留空。featured 控制首页推荐。
2. 下载文件放 downloads，图片放 assets。downloads 使用 label、href 数组；trial、apply、purchase、feedback 分别配置公开体验、内测申请、外部结账及反馈 URL。测试购买地址的实际商品、币种和金额后再公开。按次、积分、授权和订阅的计量单位写入 price 和 rights。
3. 运行 node scripts/build-products.mjs，再运行 node scripts/check-site.mjs。将配置、生成的 products、lab、兼容入口及 sitemap.xml 随素材一并提交。撤下产品时保留已分享的 slug，状态设为停止维护并清除交易入口。
4. 开发中的项目维护在 projects；有正式交付地址后加入 catalog。当前按数字商品、数据与商业研究发布两个免费产品。

## 商业化接口边界（第二阶段）

第一阶段的交易适配点是 purchase，指向卖家配置的外部交易页。后续 Web 服务独立部署，前端只发送用户选中的产品 ID、版本 ID、数量、渠道及 UTM 参数。服务端根据价格表重新计算金额与币种。

| 模块 | 后续接口与数据约定 |
|---|---|
| 商品与用户 | 管理端维护产品、版本、价格及上下架；用户登录后查询自己购买记录与权益。 |
| 下单 | POST /api/orders 创建待支付订单，保存用户、商品、版本、数量、价格快照、渠道与归因；返回订单号和 checkoutUrl。 |
| 支付适配 | 微信支付、支付宝、Paddle、Lemon Squeezy、Stripe 各自实现 createCheckout、verifyNotification、queryTransaction、refund。凭证仅注入服务端。 |
| 通知与交付 | POST /api/webhooks/{provider} 保留原始请求并按渠道验签；核实商户、交易号、订单、金额、币种及状态。数据库唯一约束 provider+eventId，订单状态转换与交付任务同一事务写入。交付按订单项与权益类型去重，支持重试、退款撤权与对账。 |
| 权益 | 登录后读取 GET /api/me/entitlements；根据版本发授权码、会员、积分、功能权限或限时下载地址，并发送交易通知。付费文件存私有存储。 |
| 经营 | 记录访问、体验、结账及经核实的支付与退款事件；保存推广链接、UTM、优惠券、邀请来源。按支付用户和产品核算转化、收入、API 成本、获客成本、退款、贡献利润、复购及留存。 |

这些服务端接口为接入约定，当前公开站没有部署订单、登录或支付通知服务。
