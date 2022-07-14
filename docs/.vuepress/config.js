const { defaultTheme } = require("@vuepress/theme-default");

module.exports = {
  base: "/",
  head: [
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1.0",
      },
    ],
    [
      "link",
      { rel: "stylesheet", type: "text/css", href: "/static/css/font.css" },
    ],
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "icekylin's blog",
      description: "",
    },
  },
  theme: defaultTheme({
    logo: "/static/svg/arch-logo.svg",
    displayAllHeaders: true,
    sidebar: [
      {
        text: "🍻 写在前面",
        children: ["/overview.md"],
      },
      {
        text: "⛵ 学海无涯",
        children: [
          "/study/README.md",
          {
            text: "函数式编程",
            children: ["/study/fp/countdown.md"],
          },
          {
            text: "密码编码学与网络安全",
            children: [
              {
                text: "一. 概览",
                children: [
                  "/study/cryptography/1-overview/1-computer_and_network_security_concepts.md",
                  "/study/cryptography/1-overview/2-fundamentals_of_number_theory.md",
                ],
              },
            ],
          },
        ],
      },
      {
        text: "🥰 人生苦短",
        children: [
          "/life/README.md",
          {
            text: "🎣 钓鱼笔记",
            children: ["/life/fish/fish.md"],
          },
        ],
      },
    ],
    sidebarDepth: 1,
    smoothScroll: true,
    lastUpdatedText: "📑 最后更新",
    contributorsText: "🎨 参与贡献",
    repo: "https://github.com/ice-kylin/icekylin-blog",
    docsDir: "docs",
    docsBranch: "main",
    repoLabel: "🍺 Github",
    editLinks: true,
    editLinkText: "📝 编辑本文",
    notFound: ["👻 页面走丢了", "👻 这个页面不存在呢"],
    backToHome: "🏠 把我带回家",
    themePlugins: { activeHeaderLinks: false },
  }),
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "搜索",
          },
        },
      },
    ],
    "@vuepress/plugin-medium-zoom",
  ],
};
