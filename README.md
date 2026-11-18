# 侯同学呀 · 个人网站

纯 HTML / CSS / JavaScript 的静态网站，通过 GitHub Pages 发布。无构建工具、API、数据库和服务端账户。

## 日常更新

大多数更新只需要编辑 `assets/site-data.js`：

- `projects`：项目与案例；详情页放在 `projects/`。
- `notes`：文章和研究笔记；`slug` 必须唯一。
- `products`：工具、数字产品与下载资源。
- `featuredVideo`：首页与视频页的主推视频。
- `featuredBook`：首页与书籍页的主推书籍。
- `externalLinks`：工具推荐与外部研究入口。

图片放进 `assets/`，下载文件放进 `downloads/`。文件名建议使用小写英文、数字和连字符，避免空格与中文路径。

项目详情页仍是独立 HTML。新增项目时：

1. 复制 `projects/field-notes.html` 并重命名。
2. 修改标题、描述和正文。
3. 在 `assets/site-data.js` 的 `projects` 中新增一条记录，并填写同一个 `href`。

## 本地预览与检查

在仓库根目录运行：

```powershell
python -m http.server 8000
```

然后访问 <http://localhost:8000>。不要直接双击 `index.html`，浏览器对 `file://` 的行为与线上环境不同。

提交前运行：

```powershell
node scripts/check-site.mjs
```

该脚本会检查 HTML 和内容数据中的本地页面、图片与下载文件是否存在。GitHub Pages 工作流也会在部署前自动执行同一检查。

## 发布流程

GitHub Pages 使用 **Deploy from a branch → main / (root)**。推送到 `main` 后，Pages 会自动重新发布；`.github/workflows/site-check.yml` 只负责检查本地链接与资源，不执行第二套部署。

## 绑定自定义域名

正式域名为 `aibeep.cn`：

1. 在域名服务商处为根域名添加 GitHub Pages 的四条 A 记录：`185.199.108.153`、`185.199.109.153`、`185.199.110.153`、`185.199.111.153`。
2. 为 `www` 添加 CNAME，指向 `2224878257-pixel.github.io`，不要带仓库名。
3. 在仓库 **Settings → Pages → Custom domain** 填入 `aibeep.cn`。
4. 等待 DNS 校验成功后启用 **Enforce HTTPS**。
5. 保留仓库根目录的 `CNAME`、`robots.txt` 与 `sitemap.xml`。

## 上线前仍需确认

- 商务联系方式目前指向 X / Twitter，没有公开邮箱或表单。
- 项目中的真实网址、截图、源码与结果按实际进度补充，不用设计示意代替成果。
- 在 iPhone Safari 和 Android Chrome 各做一次真机检查。
- 当前没有统计分析、支付、订单、自动发货或用户账户功能。
