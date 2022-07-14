---
home: true
heroImage: "/static/svg/arch.svg"
heroText: icekylin's blog
tagline: 有朋自远方来，不亦乐乎？
actions:
  - text: 🍕 开始阅读
    link: "/overview.html"
    type: primary
  - text: 🍺 Github
    link: "https://github.com/ice-kylin/icekylin-blog"
    type: secondary
navbar: true
features:
  - title: ⛵ 学海无涯
    details: 学习笔记
  - title: 🥰 人生苦短
    details: 生活分享
footer: '<p style="font-size: 8px">
  Code licensed under MIT, documentation under
  <a
    href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh"
    class="grabient-text"
    target="_blank"
    rel="noopener noreferrer"
    >CC BY-SA 4.0</a
  >. Made with ❤️️ love by
  <a
    href="https://github.com/NakanoMikuOrg/arch-guide/graphs/contributors"
    class="grabient-text"
    target="_blank"
    rel="noopener noreferrer"
    >ALL volunteers</a
  >.
</p>'
footerHtml: true
---

# 有朋自远方来

## 💻 本地运行

:::: code-group
::: code-group-item Pacman

```bash{4-5}
sudo pacman -S nodejs yarn # 安装 nodejs 和 yarn
git clone https://github.com/NakanoMikuOrg/arch-guide.git
cd ./arch-guide
yarn install
yarn docs:dev
```

:::
::: code-group-item HomeBrew

```zsh{4-5}
brew install yarn # 安装 yarn
git clone https://github.com/NakanoMikuOrg/arch-guide.git
cd ./arch-guide
yarn install
yarn docs:dev
```

:::
::: code-group-item Scoop

```bat{5-6}
scoop install nodejs # 安装 nodejs
scoop install yarn # 安装 yarn
git clone https://github.com/NakanoMikuOrg/arch-guide.git
cd ./arch-guide
yarn install
yarn docs:dev
```

:::
::::

其它系统请参阅 [Yarn 中文文档](https://yarn.bootcss.com/docs/install/) 安装 `Yarn`。

## 🔔 隐私提醒

本站使用百度统计和 Google Analytics 分析流量。访问即同意它们的隐私政策。

## 💎 版权说明

[![by-sa](./static/svg/by-sa.svg)](https://creativecommons.org/licenses/by-sa/4.0/deed.zh)

网站源代码采用 MIT 许可证；未经特殊说明，本作品采用 [知识共享署名-相同方式共享 4.0 国际许可协议](https://creativecommons.org/licenses/by-sa/4.0/deed.zh) 进行许可。

更多信息请参阅 [版权说明](/postscript/copyright.md)。
