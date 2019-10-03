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
然后一路enter键，无需输入信息，生成ssh key pair。
``` bash 
ssh-add ~/.ssh/id_rsa
cat ~/.ssh/id_rsa.pub
```
`add` 时如果出现 `Could not open a connection to your authentication agent.` 错误信息则

先执行 eval 命令，然后再执行 add 操作
``` bash 
eval `ssh-agent`
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
  error:  pathspec 'master' did not match any file(s) known to git.
  这是因为还没有文件被提交过。即没有commit过任何文件。当commit过以后就可以切换分支了。
  如果还不行，那就重新创建一下master分支，然后再切换就可以了。
  git checkout -b master
  git checkout master
  
## 一台机器操作多 github 账户

1. 首先右键 git bash here

2. 创建 id_rsa_新命名文件（一路enter键，无需输入信息）

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

4. ssh-agent -s 

``` bash 
ssh-agent -s
``` 

5. ssh-add id_rsa

``` bash 
ssh-add ~/.ssh/id_rsa_新命名文件名称
``` 

最后执行 `ssh-add -l` 验证是否有新添加的rsa

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