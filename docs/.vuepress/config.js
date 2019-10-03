module.exports = {
    title: 'CMINI777',
    description: '人皆可以为尧舜',
    dest: './dist',
    port: '7777',
	base: '/documents/',
    head: [
		['meta', { name: 'keywords', content: 'cookob,cmini777' }],
        ['link', {rel: 'icon', href: '/img/favicon.ico'}],
		['link', {rel: 'stylesheet', href: '/css/style.css'}]
    ],
    markdown: {
        lineNumbers: true
    },
	locales: {
		'/': {
		  lang: 'zh-CN'
		}
	},
    themeConfig: {
        nav: require("./nav.js"),
        sidebar: require("./sidebar.js"),
        sidebarDepth: 2,
        lastUpdated: '上次更新',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容",
                buttonText: '更新'
            }
        },
		repo: 'cookob/documents',
		repoLabel: '查看源码',
		docsDir: 'docs',
        editLinks: true,
        editLinkText: '编辑文档！'
    }
}