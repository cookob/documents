# Git入门

## git 安装与配置 

本机安装好git（详情简略）

1. 配置用户名（提交时会引用）
``` bash
git config --global user.name "起个名"
```
2. 配置邮箱（提交时会引用）
``` bash
config --global user.email "邮箱@邮箱.com"
```
3. 其他配置
``` bash
git config --global merge.tool "kdiff3"
# 要是没装KDiff3就不需要设置
git config --global core.autocrlf false
# 让git不要管理Windows/Unix换行符转换的事
```
4. 编码配置
``` bash
git config --global gui.encoding utf-8
# 避免git gui中的中文乱码
git config --global core.quotepath off
# 避免git status显示的中文文件名乱码
```
Windows还需要配置
``` bash
git config --global core.ignorecase false
```
5. git ssh key pair 配置
``` bash 
ssh-keygen -t rsa -C "邮箱@邮箱.com"
``` 
然后一路Enter键，无需输入信息，生成 ssh key pair 。
``` bash 
ssh-add ~/.ssh/id_rsa
```
`add` 时如果出现 `Could not open a connection to your authentication agent.` 错误信息则

先执行 eval 命令，然后再执行 add 操作
``` bash 
eval `ssh-agent`
```
`add` 操作执行成功后，再执行 `cat`，然后将输出的公钥复制粘贴至个人SSH配置中。
``` bash 
cat ~/.ssh/id_rsa.pub
``` 

## 常用的git命令
``` bash
git clone [remote_url]      //克隆远程仓库项目到本地当前目录
git pull                    //拉取服务器代码
git status                  //查看当前工作目录树的工作修改状态
git init                    //初始化
git add .                   //将状态改变的代码提交至缓存
git commit -m “注释部分”     //将代码提交到本地仓库中
git remote add origin [url] //添加远程仓库
git push                    //将代码推送到服务器
git push -u origin master   //将代码推送到服务器master分支，-u参数指定一个默认主机
git pull --rebase origin master //代码合并，可解决failed to push some refs toGit的问题
git branch <分支名>         //新建分支
git checkout <分支名>       //切换分支
git checkout -b <分支名>    //创建并切换分支
git push origin <分支名>    //推送到分支
git remote show [origin默认名称可忽略]  //查看远程仓库信息
git remote rename [oldname] [newname] //重命名远程仓库在本地的简称
git remote rm [remote_name]  //删除
```
## git提交代码步骤
git clone -> 工作区 -> git add -> 暂存区 -> git commit -> 版本库 -> git push -> 远程自己的仓库

## git操作常见错误

- git checkout master时出错
  ::: danger
  `error:  pathspec 'master' did not match any file(s) known to git.`
  :::
  这是因为还没有文件被提交过。即没有`commit`过任何文件。当`commit`过以后就可以切换分支了。
  如果还不行，那就重新创建一下`master`分支，然后再切换就可以了。
  ``` bash
  git checkout -b master
  git checkout master
  ``` 
  
## 一台机器操作多 github 账户

1. 首先右键 git bash here

2. 创建 id_rsa_新命名文件（一路Enter键，无需输入信息）

``` bash 
ssh-keygen -t rsa -f ~/.ssh/id_rsa_自行命名但不要和本机已安装的idrsa重名 -C "邮箱@邮箱.com"
``` 

执行命令后会在本机的 `/c/Users/Administrator/.ssh/` 目录下（本机是Windows系统）生成 id_rsa_新命名 的文件

3. 在 `.ssh` 目录下创建 `config` 文件

``` bash 
touch config
``` 

然后添加如下内容：

``` bash 
#default
Host github.com
HostName github.com
User git
IdentityFile ~/.ssh/id_rsa  
#add newname
Host newname.github.com  #newname 自定义名称
HostName github.com
User git
IdentityFile ~/.ssh/id_rsa_newname #newname 刚才生成的新命名文件名称
``` 
这样做的目的在于后面使用时通过 `@newname.github.com` 和 `@github.com` 加以区分：

例如：git remote add origin git@XXX.github.com:cookob/documents.git `其中的XXX就是添加的新命名`

我们默认的写法是：git remote add origin git@github.com:cookob/documents.git

4. ssh-agent -s 

``` bash 
ssh-agent -s
``` 

5. ssh-add id_rsa

``` bash 
ssh-add ~/.ssh/id_rsa_新命名文件名称
``` 
`add` 时如果出现 `Could not open a connection to your authentication agent.` 错误信息则

先执行 eval 命令，然后再执行 add 操作
``` bash 
eval `ssh-agent`
```

最后执行 `ssh-add -l` 验证是否有新添加的 `rsa`

6. cat

``` bash 
cat ~/.ssh/id_rsa_新命名文件名称.pub
``` 

将输出的公钥复制粘贴至个人SSH配置中

7. ssh -T 验证是否成功

``` bash 
ssh -T git@新命名.github.com

如果成功会输出信息： Hi 新命名! You've successfully authenticated, but GitHub does not provide shell access.
``` 

## 更新fork的代码

1.增加源分支地址到你项目远程分支列表中(此处是关键)，先得将原来的仓库指定为upstream，命令为：

``` bash  
git remote add upstream https://github.com/被fork的仓库.git
```

2. 查看当前仓库的远程仓库地址和原仓库地址

``` bash 
git remote -v
```

3. 获取原仓库的更新:fetch源分支的新版本到本地，fetch后会被存储在一个本地分支upstream/master上。

``` bash 
git fetch upstream
```

4. 合并两个版本的代码(切换到本地master分支，合并upstream/master分支)

``` bash 
git merge upstream/master
```

如需输入信息则键入`i`，输入内容后按`Esc`退出编辑，键入`:wq`保存退出

5. 这时候使用git log就能看到原仓库的更新了。

git log

6. 如果需要自己github上的fork的仓库需要保持同步更新，执行git push进行推送