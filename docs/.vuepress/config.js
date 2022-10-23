module.exports = {
  title: 'demo',
  description: '完善img',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/candywuchu', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav: [{// 右上导航航条 docs/.vuepress 文件夹下
      text: '概述',
      link: '/'
    }, {
      text: 'Vue 常用UI框架',
      items: [
        // { text: 'element-ui', link: '/guide/vue/test01' }, // 可不写后缀 .md
        { text: 'element-ui', link: 'https://element.eleme.cn/#/zh-CN' },// 外部链接
        { text: 'vant', link: 'http://vant3.uihtm.com/#/zh-CN' }// 外部链接
      ]
    }, {
      text: '测试配置',
      items: [
        { text: 'test', link: '/guide/vue/test01' },// 以 ‘/’结束，默认读取 README.md
        { text: '其它链接', link: 'https://www.baidu.com/' } // 外部链接
      ]
    }],
    sidebar: {
      '/guide/vue/': [{ // 对应导航中的link文件夹路径，注意这里是 ‘/’结束
        title: 'test',
        collapsable: true,
        children: [{
          title: '测试01',
          path: 'test01'
        }, {
          title: '测试02',
          path: 'test02'
        }, {
          title: '测试03',
          path: 'test03'
        }]
      },{ // 对应导航中的link文件夹路径，注意这里是 ‘/’结束
        title: 'test2',
        collapsable: true,
        children: [{
          title: '测试01',
          path: 'test01'
        }, {
          title: '测试02',
          path: 'test02'
        }, {
          title: '测试03',
          path: 'test03'
        }]
      }],
      // '/guide/ts/': [{
      //   title: 'Typescript 学习',
      //   collapsable: false,
      //   children: [{
      //     title: '测试',
      //     path: 'test01'
      //   }]
      // }],
      // fallback 侧边栏被最后定义
      '/': [''], //不能放在数组第一个，否则会导致右侧栏无法使用 
    }, // 侧边栏配置
    sidebarDepth: 0,
  }
};