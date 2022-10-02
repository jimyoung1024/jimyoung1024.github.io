import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "金洋学长",
  description: "金洋学长个人博客",
  base: "/",
  theme,
});
