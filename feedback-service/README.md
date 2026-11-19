# 私密反馈与渠道统计

独立部署 worker.mjs 到站点所有者的 Cloudflare Workers，绑定其私有 D1 数据库为 DB，先执行 schema.sql。可按流量在 Cloudflare 设置提交频率限制。此服务只有写入接口；反馈内容仅在账户内查看。产品运行在 GitHub Pages；不要把数据库密钥放进仓库。

将公开 HTTPS 服务 origin 填入 assets/site-data.js 对应产品的 feedbackApi 字段，运行 node scripts/build-products.mjs 并发布。启用前通过真实域名测试跨域请求和数据库落库。成功提交仅在 D1 事务完成后计数。访问与下载按事件次数累计；站内文章和视频入口单独标记。经营查看可在 D1 查询 SELECT * FROM counts ORDER BY day DESC。
