import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/personal-blog/',
  title: "Shy's personal blog",
  description: "A VitePress Site",
  themeConfig: {
    logo: "/icon/程序代码.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      {
        text: "前端",
        items: [
          { text: "Html", link: "/docs/html/" },
          { text: "CSS", link: "/docs/css/" },
          { text: "JavaScript", link: "/docs/javascript/" },
          { text: "Vue", link: "/docs/vue/" },
          { text: "React", link: "/docs/react/" },
          { text: "Scss", link: "/docs/scss/" },
          { text: "TypeScript", link: "/docs/typescript/" },
        ],
      },
      {
        text: "后端",
        items: [
          { text: "Java", link: "/docs/java/" },
          { text: "Python" , link: "/docs/python/" },
        ]
      },
      {
        text: "数据库",
        items: [
          { text: "MySQL", link: "/docs/mysql/" },
          { text: "Redis", link: "/docs/redis/" },
        ]
      },
      { text: "UI框架",
        items: [
          { text: "Element-UI", link: "/docs/element-ui/" },
          { text: "Ant-Design-Vue", link: "/docs/ant-design-vue/" },
          { text: "Arco-Design", link: "/docs/arco-design/" },
          { text: "Naive-UI", link: "/docs/naive-ui/" },
        ]
      },
      { text: "部署",
        items: [
          { text: "阿里云", link: "/docs/ali-yun/" },
          { text: "宝塔", link: "/docs/baota/" },
        ]
      },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      // { icon: 'github', link: "https://gitee.com/shyzzw" },
      { icon: 'gitee', link: "https://gitee.com/shyzzw" },
    ],

    footer: {
      copyright: "Shy and Jiaojiao © 2024 We Study blog",
    },
  },
});
