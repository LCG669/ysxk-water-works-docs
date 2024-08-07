// 基本配置

module.exports = {
    theme: '',
    title: 'ysxk-water-works-docs',
    description: '云昇新控水厂UI',
    base: '/ysxk-water-works-docs/',
    port: '778',
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
    themeConfig: {
        sidebarDepth: 2,
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '组件',
                link: '/quickStart.md'
            },
        ],
        sidebar: [
            {
                title: '快速开始',   // 必要的
                path: '/quickStart.md',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
            },
            {
                title: '组件',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                children: [
                    '/components/YSXK-TimeUpda.md',
                    '/components/YSXK-ScaleDiv.md',
                    '/components/YSXK-DataFrame.md',
                    '/components/YSXK-DataFrameArea.md',
                ]
            },
        ]
    },
    head: [],
    plugins: ['demo-container'],
    markdown: {}
}