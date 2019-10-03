module.exports = [
    {
        text: '指南', link: '/guide/'
    },
    {
        text: '学习笔记', 
        items: [
			{text: '计算机基础', link: '/learnNotes/computerBasics/'},
			{text: '终端', link: '/learnNotes/terminal/'},
			{text: '单体->微服务', link: '/learnNotes/monomer2microService/'},
			{text: '微服务->服务网格', link: '/learnNotes/microService2serviceMesh/'},
        ]
    },
    {
        text: '资源共享',
        items: [
			{
                text: '在线工具',
				items: [
					{text: '图标徽章', link: 'https://shields.io/'},
                    {text: '图片压缩', link: 'https://tinypng.com/'},
                    {text: '图片放大', link: 'https://bigjpg.com/'},
					{text: 'CRON 表达式', link: 'http://cron.qqe2.com/'},
                    {text: 'MD 表格生成', link: 'https://tableconvert.com/'},                    
				]
            },
			{
                text: '在线服务',
				items: [
                    {text: 'Weixin CDN', link: 'https://qydev.weixin.qq.com/cdn/cdnjs.html'},
                    {text: 'Boot CDN', link: 'https://www.bootcdn.cn/'},
				]
            },
            {
                text: '前端大全',
                items: [
                    {text: 'IT网址导航', link: 'http://www.h-ui.net/site.shtml'},
                ]
            }
        ]
    }
]