import { path } from "@vuepress/utils";
import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://jyxz.cc",
  author: {
    name: "金洋学长",
    url: "https://jyxz.cc",
  },
  iconAssets: "iconfont",
  logo: "/logo.png",
  repo: "https://github.com/jimyoung1024/jimyoung1024.github.io",
  repoDisplay: false,
  docsDir: "docs",
  navbar: navbar,
  sidebar: sidebar,
  displayFooter: true,
  // 是否展示文档贡献者
  contributors: false,
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
  blog: {
    name: "金洋学长",
    roundAvatar: true,
    description: "00后程序猿｜后端攻城狮",
    intro: "/intro.md",
    medias: {
      Bilibili: [
        "https://space.bilibili.com/125359767",
        path.resolve(__dirname, "public/bilibili.svg")
      ]
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },  
    mdEnhance: {
      footnote: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
