import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "沈鑫的博客",
  description: "记录生活，分享技术",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '记录生活', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '记录生活',
        items: [
          { text: '2024-11-16', link: '/markdown-examples' },
          { text: '2024-11-17', link: '/xxx' },
         ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
