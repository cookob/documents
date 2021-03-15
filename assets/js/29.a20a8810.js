(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{389:function(s,a,t){"use strict";t.r(a);var n=t(42),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"git入门"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git入门"}},[s._v("#")]),s._v(" Git入门")]),s._v(" "),t("h2",{attrs:{id:"git-安装与配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-安装与配置"}},[s._v("#")]),s._v(" git 安装与配置")]),s._v(" "),t("p",[s._v("本机安装好git（详情简略）")]),s._v(" "),t("ol",[t("li",[s._v("配置用户名（提交时会引用）")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"起个名"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("配置邮箱（提交时会引用）")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("config --global user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"邮箱@邮箱.com"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("其他配置")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global merge.tool "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kdiff3"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 要是没装KDiff3就不需要设置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.autocrlf "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 让git不要管理Windows/Unix换行符转换的事")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("编码配置")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global gui.encoding utf-8\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 避免git gui中的中文乱码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.quotepath off\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 避免git status显示的中文文件名乱码")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("Windows还需要配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.ignorecase "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("git ssh key pair 配置")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ssh-keygen -t rsa -C "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"邮箱@邮箱.com"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后一路Enter键，无需输入信息，生成 ssh key pair 。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ssh-add ~/.ssh/id_rsa\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("add")]),s._v(" 时如果出现 "),t("code",[s._v("Could not open a connection to your authentication agent.")]),s._v(" 错误信息则")]),s._v(" "),t("p",[s._v("先执行 eval 命令，然后再执行 add 操作")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("ssh-agent"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("add")]),s._v(" 操作执行成功后，再执行 "),t("code",[s._v("cat")]),s._v("，然后将输出的公钥复制粘贴至个人SSH配置中。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.ssh/id_rsa.pub\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"常用的git命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用的git命令"}},[s._v("#")]),s._v(" 常用的git命令")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("remote_url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("      //克隆远程仓库项目到本地当前目录\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull                    //拉取服务器代码\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status                  //查看当前工作目录树的工作修改状态\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init                    //初始化\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("                   //将状态改变的代码提交至缓存\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m “注释部分”     //将代码提交到本地仓库中\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" //添加远程仓库\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push                    //将代码推送到服务器\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master   //将代码推送到服务器master分支，-u参数指定一个默认主机\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull --rebase origin master //代码合并，可解决failed to push some refs toGit的问题\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("分支名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("         //新建分支\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("分支名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("       //切换分支\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("分支名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("    //创建并切换分支\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("分支名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("    //推送到分支\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote show "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("origin默认名称可忽略"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  //查看远程仓库信息\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rename")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("oldname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("newname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" //重命名远程仓库在本地的简称\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("remote_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  //删除\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h2",{attrs:{id:"git提交代码步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git提交代码步骤"}},[s._v("#")]),s._v(" git提交代码步骤")]),s._v(" "),t("p",[s._v("git clone -> 工作区 -> git add -> 暂存区 -> git commit -> 版本库 -> git push -> 远程自己的仓库")]),s._v(" "),t("h2",{attrs:{id:"git操作常见错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git操作常见错误"}},[s._v("#")]),s._v(" git操作常见错误")]),s._v(" "),t("ul",[t("li",[s._v("git checkout master时出错"),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),t("p",[t("code",[s._v("error: pathspec 'master' did not match any file(s) known to git.")])])]),s._v("\n这是因为还没有文件被提交过。即没有"),t("code",[s._v("commit")]),s._v("过任何文件。当"),t("code",[s._v("commit")]),s._v("过以后就可以切换分支了。\n如果还不行，那就重新创建一下"),t("code",[s._v("master")]),s._v("分支，然后再切换就可以了。"),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b master\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"一台机器操作多-github-账户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一台机器操作多-github-账户"}},[s._v("#")]),s._v(" 一台机器操作多 github 账户")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("首先右键 git bash here")])]),s._v(" "),t("li",[t("p",[s._v("创建 id_rsa_新命名文件（一路Enter键，无需输入信息）")])])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ssh-keygen -t rsa -f ~/.ssh/id_rsa_自行命名但不要和本机已安装的idrsa重名 -C "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"邮箱@邮箱.com"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("执行命令后会在本机的 "),t("code",[s._v("/c/Users/Administrator/.ssh/")]),s._v(" 目录下（本机是Windows系统）生成 id_rsa_新命名 的文件")]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[s._v("在 "),t("code",[s._v(".ssh")]),s._v(" 目录下创建 "),t("code",[s._v("config")]),s._v(" 文件")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" config\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后添加如下内容：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#default")]),s._v("\nHost github.com\nHostName github.com\nUser "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\nIdentityFile ~/.ssh/id_rsa  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#add newname")]),s._v("\nHost newname.github.com  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#newname 自定义名称")]),s._v("\nHostName github.com\nUser "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\nIdentityFile ~/.ssh/id_rsa_newname "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#newname 刚才生成的新命名文件名称")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("这样做的目的在于后面使用时通过 "),t("code",[s._v("@newname.github.com")]),s._v(" 和 "),t("code",[s._v("@github.com")]),s._v(" 加以区分：")]),s._v(" "),t("p",[s._v("例如：git remote add origin git@XXX.github.com:cookob/documents.git "),t("code",[s._v("其中的XXX就是添加的新命名")])]),s._v(" "),t("p",[s._v("我们默认的写法是：git remote add origin git@github.com:cookob/documents.git")]),s._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[s._v("ssh-agent -s")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ssh-agent -s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("ssh-add id_rsa")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ssh-add ~/.ssh/id_rsa_新命名文件名称\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("add")]),s._v(" 时如果出现 "),t("code",[s._v("Could not open a connection to your authentication agent.")]),s._v(" 错误信息则")]),s._v(" "),t("p",[s._v("先执行 eval 命令，然后再执行 add 操作")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("ssh-agent"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("最后执行 "),t("code",[s._v("ssh-add -l")]),s._v(" 验证是否有新添加的 "),t("code",[s._v("rsa")])]),s._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[s._v("cat")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.ssh/id_rsa_新命名文件名称.pub\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("将输出的公钥复制粘贴至个人SSH配置中")]),s._v(" "),t("ol",{attrs:{start:"7"}},[t("li",[s._v("ssh -T 验证是否成功")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@新命名.github.com\n\n如果成功会输出信息： Hi 新命名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" You've successfully authenticated, but GitHub does not provide shell access.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"更新fork的代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新fork的代码"}},[s._v("#")]),s._v(" 更新fork的代码")]),s._v(" "),t("p",[s._v("1.增加源分支地址到你项目远程分支列表中(此处是关键)，先得将原来的仓库指定为upstream，命令为：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" upstream https://github.com/被fork的仓库.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("查看当前仓库的远程仓库地址和原仓库地址")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote -v\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("获取原仓库的更新:fetch源分支的新版本到本地，fetch后会被存储在一个本地分支upstream/master上。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch upstream\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("合并两个版本的代码(切换到本地master分支，合并upstream/master分支)")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge upstream/master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如需输入信息则键入"),t("code",[s._v("i")]),s._v("，输入内容后按"),t("code",[s._v("Esc")]),s._v("退出编辑，键入"),t("code",[s._v(":wq")]),s._v("保存退出")]),s._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[s._v("这时候使用git log就能看到原仓库的更新了。")])]),s._v(" "),t("p",[s._v("git log")]),s._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[s._v("如果需要自己github上的fork的仓库需要保持同步更新，执行git push进行推送")])])])}),[],!1,null,null,null);a.default=e.exports}}]);