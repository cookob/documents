# linux下使用nginx配置https出错: [emerg] unknown directive "ssl" in ...

::: danger

错误信息｛nginx: [emerg] unknown directive "ssl" in ...｝

:::

## 首先进入nginx初始的安装目录下执行命令：
``` bash
./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module
```
## 再执行make
``` bash
make
```
## 然后备份旧的nginx程序，并把新的nginx程序覆盖旧的
``` bash
cp /usr/local/nginx/sbin/nginx /usr/local/nginx/sbin/nginx.bak
cp objs/nginx /usr/local/nginx/sbin/nginx
```
此时如果提示“cp:cannot create regular file '/usr/local/nginx/sbin/nginx': Text file busy”,可以使用如下语句
``` bash
cp -rfp objs/nginx /usr/local/nginx/sbin/nginx
```
## 测试新的nginx程序是否正确
``` bash
/usr/local/nginx/sbin/nginx -t
```
## 查看nginx版本编译参数
``` bash
/usr/local/nginx/sbin/nginx -V
```
## 平滑重启nginx
``` bash
/usr/local/nginx/sbin/nginx -s reload
```
