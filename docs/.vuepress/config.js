module.exports = {
  base: '/',
  dest: 'docs/dist',
  // prot: 8090,
  serviceWorker: true,
  head: [
  ],
  plugins: [],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '盐课堂',
      description: '盐课堂多模板快速开发工具'
    }
  },
  themeConfig: {
    logo: '/jzjy.png',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        lastUpdated: '上次更新',
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用',
            buttonText: '刷新'
          }
        },
        nav: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/guide/design' },
          { text: '工具/组件', link: '/jzjy/index' },
          {
            text: '相关文档',
            items: [
              { text: '新人文档', link: '/code-standard/news' },
              { text: 'CSS规范', link: '/code-standard/css' },
              { text: 'JS规范', link: '/code-standard/js' },
              { text: '图片规范', link: '/code-standard/img' },
              { text: 'Vue 开发规范目录及说明', link: '/code-standard/vue' },
              { text: '项目组织规范', link: '/code-standard/docs' },
              { text: 'Git规范', link: '/code-standard/git' },
              { text: '性能规范', link: '/code-standard/performance' },
              { text: '技术设计文档', link: '/code-standard/design' }
            ]
          },
          { text: '关于我们', link: '/aboutus/' }
        ]
      }
    },
    sidebar: {
      '/jzjy/': [
        // {
        //   title: '指南',
        //   collapsable: false,
        //   children: [
        //   ]
        // },
        {
          title: '工具',
          collapsable: false,
          children: [
            'js/cli',
            'js/request',
            'js/storage'
          ]
        },
        {
          title: '组件',
          collapsable: false,
          children: [
            'components/verify'
          ]
        },
      ],
      //   '/jzjy-/': [
      //     {
      //       title: '开发指南',
      //       collapsable: false,
      //       children: [
      //         // 'introduction',
      //         // 'install',
      //         // 'quickstart',
      //         // 'changelog'
      //       ]
      //     },
      //     {
      //       title: '基础',
      //       collapsable: false,
      //       children: []
      //     },
      //     {
      //       title: '开发',
      //       collapsable: false,
      //       children: []
      //     }
      //   ],
      //   '/guide/': [ // 指南
      //     {
      //       collapsable: false,
      //       children: [
      //         'design',
      //         'note'
      //       ]
      //     }
      //   ],
      //   '/code-standard/': [
      //     {
      //       title: '基础规范',
      //       collapsable: false,
      //       children: [
      //         'base'
      //       ]
      //     },
      //     {
      //       title: 'Vue 开发规范目录及说明',
      //       collapsable: false,
      //       sidebarDepth: 4,
      //       children: [
      //         'vue'
      //       ]
      //     }
      //   ],
      //   '/abouts/': [ // 关于我们
      //     {
      //       title: '关于我们',
      //       collapsable: false,
      //       children: [
      //         // 'base',
      //         // 'html',
      //         // 'javascript',
      //         // 'vue'
      //       ]
      //     }
      //   ]
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://pigx-gateway:9999'
      }
    }
  }
}
