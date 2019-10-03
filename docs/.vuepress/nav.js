module.exports = [
    {
        text: '指南', link: '/guide/'
    },
    {
        text: '学习笔记', 
        items: [
			{
                text: '计算机基础',
				items: [
					{text: '数据结构与算法', link: '/learnNotes/computerBasics/algorithm/'},
                    {text: '操作系统', link: '/learnNotes/computerBasics/OS/'},
                    {text: '计算机网络', link: '/learnNotes/computerBasics/network/'},
					{text: '编译原理', link: '/learnNotes/computerBasics/compilationPrinciple/'},                 
				]
            },
            {
                text: '终端',
				items: [
                    {text: 'Vue', link: '/learnNotes/terminal/vue/'},
                    {text: 'React', link: '/learnNotes/terminal/react/'},
                    {text: 'Ant Design Pro', link: '/learnNotes/terminal/antd/'},
					{text: 'Android', link: '/learnNotes/terminal/android/'},					
				]
            },
            {
                text: '单体-->微服务',
				items: [
					{text: 'Spring 全家桶', link: '/learnNotes/monomer2microService/springAll/'},
					{text: 'Dubbo', link: '/learnNotes/monomer2microService/dubbo/'},
					{text: 'Zookeeper', link: '/learnNotes/monomer2microService/zookeeper/'},
					{text: 'Docker', link: '/learnNotes/monomer2microService/docker/'},
				]
            },
            {
                text: '微服务-->服务网格',
				items: [
					{text: 'Kubernetes', link: '/learnNotes/microService2serviceMesh/kubernetes/'},
					{text: 'Istio', link: '/learnNotes/microService2serviceMesh/istio/'},
				]
            },
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