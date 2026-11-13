# 侯同学呀 · Personal Field Notes

一个以「互联网实验档案」为概念的个人网站，参考 Progress 的章节导航、彩色作品文件夹和交互式落幕方式，但使用侯同学呀自己的项目与文字。

## 运行

项目是纯静态网站，不需要 Node.js、数据库或 API Key。直接打开根目录 `index.html` 就能查看；建议本地预览：

```bash
python -m http.server 8000
```

浏览器打开 `http://localhost:8000`。

## 上传 GitHub 并发布

1. 创建一个 **公开** GitHub 仓库（例如 `hou-personal-site`）。
2. 把仓库里的**所有文件与文件夹**一起上传，特别是根目录 `index.html`、`assets/` 和 `.github/workflows/pages.yml`。
3. 在 GitHub 仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
4. 推送到 `main` 分支后，工作流会发布网站；查看仓库的 **Actions** 页面确认发布成功。
5. GitHub Pages 地址通常为 `https://<用户名>.github.io/<仓库名>/`，具体以 Pages 页面生成的地址为准。

若你使用其他默认分支，请修改 `.github/workflows/pages.yml` 中的 `branches: [main]`。

## 修改网站内容

- 文案与个人介绍：`index.html`。
- 项目名称、项目进度、五个项目展示内容：`assets/main.js` 中的 `projects` 数组、`mockVisual()`。
- 样式、颜色、字号、动效：`assets/styles.css`。
- 头像：当前是「侯」字视觉占位，等有真实且授权的图片再替换。
- 合作方式：当前使用「复制合作来信」，因为尚未配置真实邮箱/表单服务。请不要误以为消息会自动送达。
- 留言墙：当前内容**仅存在访问者的本地浏览器**，不会成为所有访客共享的公开留言；正式上线前如需公开留言，需要后端与反垃圾机制。

## 说明与验收

项目卡片中的仪表盘、浏览器运行日志等为**设计示意**，不代表真实线上数据或已交付成果。AIBEEP 等项目状态按页面文字为准。

本项目不使用跟踪脚本和后端，不采集访客填写的合作信息。Google Fonts 可能向字体服务发起请求，网络不通时使用系统字体。

建议上线前逐项检查：桌面和手机浏览、全部导航锚点、五个项目弹窗、明暗主题、复制合作信、个人留言（仅本地）、底部小游戏、键盘访问、浏览器控制台无错误。
