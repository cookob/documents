# 初始化VuePress

## 一、 安装初始化

### 1. 全局安装

```
npm install -g vuepress
```

### 2. 创建一个文件夹作为目录

```
mkdir vuepress-blog
```

### 3. 项目初始化（初始化后会生成一个package.json文件）

```
cd vuepress-blog
npm init -y
```

### 4. 在当前目录中创建一个docs目录

```
mkdir docs
```

### 5. 首页内容书写(采用默认主题)

```
---
home: true
heroImage: /img/logo.png
actionText: 爱我中华 →
actionLink: /guide/
features:
- title: 知行
  details: 心有所愿，行而成力。人生行知有力的时光不过二三十年，在行知有力的时间段明确好方向跨过每一个障碍，知行合一，大气大为，努力做最好的自己！
- title: 励练
  details: 能长成参天大树的一定是经历过无数次的风霜雨雪的励练。男人，就要风吹不动，浪打不摇！
- title: 境界
  details: 人在知道自己的所作所为后就会有明确的志向，然后才会内心宁静，内心宁静才会泰然安稳，泰然安稳才能行事思虑周祥，思虑周祥才能达到最好的人生境界。
footer: © Copyright 2019 MiniCHN - All Rights Reserved
---
```

## 二、 核心配置

### 1. 在docs目录下创建.vuepress目录

```
cd docs
mkdir .vuepress
# 主要存放配置
```

### 2. 新建总配置文件config.js

```
cd .vuepress
touch config.js
# config是整个项目的核心配置文件，所有菜单、栏目相关的配置均配置在该模块中
```

### 3. 在config.js中加入内容

``` js
module.exports = {
    title: 'MiniCHN',
    description: '迷你中华',
    dest: './dist',
    port: '7777',
	base: '/documents/',
    head: [
        ['link', {rel: 'icon', href: '/img/favicon.ico'}],
		['link', {rel: 'stylesheet', href: '/css/style.css'}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require("./nav.js"),
        sidebar: require("./sidebar.js"),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}
```

### 4. 导航栏配置

``` js
# (1) 在.vuepress目录下创建一个nav.js
touch nav.js
# (2) 编辑 nav.js
module.exports = [
    {
        text: '指南', link: '/guide/'
    },
    {
        text: '宝典', 
		items: [
            {text: '初级开发篇', link: '/baodian/zero/'},
            {text: '中高进阶篇', link: '/baodian/high/'},
        ]
    },
    {
        text: '个人',
        items: [
			{
                text: 'Git',
				items: [
					{text: 'Gitee', link: 'https://gitee.com/CMINI777'},
					{text: 'Github', link: 'https://github.com/CMINI777'}
				]
            },
			{
                text: '展示',
				items: [
					{text: 'Hexo博客', link: 'https://cmini777.gitee.io/'}
				]
            }
        ]
    }
]
# (3) 需要在docs目录下创建nav.js配置中所需要的目录
# eg：‘指南’对应的是/guide/，则需要在docs目录下创建一个guide目录
```

### 5. 侧边栏配置

``` js
# (1) 在.vuepress目录下创建一个sidebar.js
touch sidebar.js
# (2) 编辑 sidebar.js
module.exports = {
	'/guide/': require('../guide/sidebar'),

	'/baodian/zero': require('../baodian/zero/sidebar'),
	'/baodian/high': require('../baodian/high/sidebar'),
}	
# (3) 需要在require引用的sidebar.js中配置所需参数
# eg：‘指南’对应的/guide/sidebar.js
module.exports = [
		{
		  title:'新手指南',
		  collapsable: true,
		  children:[
			'/guide/notes/one',
		  ]
		},
		{
		  title:'更上一层楼',
		  collapsable: true,
		  children:[
			'/guide/notes/two',
		  ]
		}
	]
	
# --参数解析--
# title：表示侧边栏大标题
# collapsable：是否可收缩
# children：具体的.md文件，这里无需指定后缀

```

### 6. 静态资源配置

::: warning

vuepress程序默认的图片目录是/docs/.vuepress/public

:::

```
# (1) 在.vuepress目录下创建public目录
cd .vuepress
mkdir public
# (2) 在public目录下分别创建img、css、js目录，用来存放图片、样式文件、js文件
mkdir img
mkdir css
mkdir js
```

### 7. 运行

```
vuepress dev docs
```

## 三、 发布github

在vuepress-blog根目录下创建deploy.sh并添加以下内容，然后运行deploy.sh
```
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:CMINI777/documents.git master:gh-pages

cd -
```