import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/college/",
  {
    text: "软件操作技巧",
    icon: "type",
    children: [
      { 
        text: "电脑操作技巧",
        icon: "computer",
        link: "/computer/"
      },
      { 
        text: "手机操作技巧",
        icon: "mobile",
        link: "/phone/"
      },
    ],
  },
  "/code/",
  {
    text: "我的B站主页",
    icon: "safari",
    link: "https://space.bilibili.com/125359767",
  },
]);
