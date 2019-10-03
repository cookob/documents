# IDEA中devtools热部署未生效

当我们修改了java类后，IDEA默认是不自动编译的，而spring-boot-devtools又是监测classpath下的文件发生变化才会重启应用，所以需要设置IDEA的自动编译：

（1）File->Settings->Compiler->勾选Build Project automatically

（2）ctrl + shift + alt + /,选择Registry,勾上 Compiler autoMake allow when app running

（3）重启IDEA
