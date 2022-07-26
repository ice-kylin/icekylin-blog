import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "@vuepress/cli";
import { defaultTheme } from "@vuepress/theme-default";
import { mediumZoomPlugin } from "@vuepress/plugin-medium-zoom";
import { searchPlugin } from "@vuepress/plugin-search";

import mathjax3 from "markdown-it-mathjax3";

const customElements = ["mjx-container"];

export default defineUserConfig({
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
    logo: "/static/pic/icekylin-logo.png",
    navbar: [
      {
        text: "🍻 写在前面",
        children: ["/overview.md", "/about-me.md"],
      },
      {
        text: "⛵ 学海无涯",
        children: [
          "/study/README.md",
          {
            text: "📚 杂七杂八",
            children: [
              "/study/latex/README.md",
              "/study/cryptography/README.md",
            ],
          },
          {
            text: "📐 数学",
            link: "/study/math/README.md",
            children: ["/study/math/linear-algebra/README.md"],
          },
          {
            text: "🐍 编程语言",
            children: ["/study/fp/README.md"],
          },
        ],
      },
      {
        text: "🥰 人生苦短",
        children: [
          "/life/README.md",
          {
            text: "🏝 冰の日常",
            link: "/life/daily/README.md",
            children: ["/life/daily/journal.md", "/life/daily/memorandum.md"],
          },
          {
            text: "🎣 钓鱼笔记",
            link: "/life/fish/README.md",
            children: [],
          },
          {
            text: "🍰 冰の厨房",
            link: "/life/kitchen/README.md",
            children: [],
          },
        ],
      },
    ],
    sidebar: {
      "/": ["/overview.md", "/about-me.md"],
      "/study/": [
        "/study/README.md",
        {
          text: "📚 杂七杂八",
          children: [
            {
              text: "排版系统",
              link: "/study/latex/README.md",
              children: ["/study/latex/latex.md", "/study/latex/katex.md"],
            },
            "/study/cryptography/README.md",
          ],
        },
        {
          text: "📐 数学",
          link: "/study/math/README.md",
          children: [
            {
              text: "线性代数",
              link: "/study/math/linear-algebra/README.md",
              children: [
                "/study/math/linear-algebra/1-geometric-interpretation.md",
                "/study/math/linear-algebra/2-matrix-elimination.md",
                "/study/math/linear-algebra/3-matrix-mul.md",
                "/study/math/linear-algebra/4-factorization.md",
              ],
            },
          ],
        },
        {
          text: "🐍 编程语言",
          children: [
            {
              text: "函数式编程",
              link: "/study/fp/README.md",
              children: ["/study/fp/countdown.md"],
            },
          ],
        },
      ],
      "/study/cryptography/": [
        "/study/cryptography/README.md",
        {
          text: "一. 概览",
          children: [
            "/study/cryptography/1-overview/1-computer_and_network_security_concepts.md",
            "/study/cryptography/1-overview/2-fundamentals_of_number_theory.md",
          ],
        },
        {
          text: "二. 对称密码",
          children: [
            "/study/cryptography/2-symmetric_cipher/3-traditional_encryption.md",
            "/study/cryptography/2-symmetric_cipher/4-block_ciphers.md",
            "/study/cryptography/2-symmetric_cipher/5-finite_field.md",
            "/study/cryptography/2-symmetric_cipher/6-advanced_encryption_standard.md",
            "/study/cryptography/2-symmetric_cipher/7-the_working_mode_of_block_encryption.md",
            "/study/cryptography/2-symmetric_cipher/8-pseudorandom_num.md",
          ],
        },
      ],
      "/life/": [
        "/life/README.md",
        {
          text: "🏝 冰の日常",
          link: "/life/daily/README.md",
          children: ["/life/daily/journal.md", "/life/daily/memorandum.md"],
        },
        {
          text: "🎣 钓鱼笔记",
          link: "/life/fish/README.md",
          children: [],
        },
        {
          text: "🍰 冰の厨房",
          link: "/life/kitchen/README.md",
          children: [],
        },
      ],
    },
    lastUpdatedText: "📑 最后更新",
    contributorsText: "🎨 本文作者",
    repo: "https://github.com/ice-kylin/icekylin-blog",
    docsDir: "docs",
    docsBranch: "main",
    repoLabel: "🍺 Github",
    editLinkText: "📝 编辑本文",
    notFound: ["👻 页面走丢了", "👻 这个页面不存在呢"],
    backToHome: "🏠 把我带回家",
    themePlugins: { activeHeaderLinks: true },
  }),
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),
    mediumZoomPlugin({}),
  ],
  extendsMarkdown: (md) => {
    md.use(mathjax3);
    md.linkify.set({ fuzzyEmail: false });
  },
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {
      template: {
        compilerOptions: {
          isCustomElement: (tag: string) => customElements.includes(tag),
        },
      },
    },
  }),
});
