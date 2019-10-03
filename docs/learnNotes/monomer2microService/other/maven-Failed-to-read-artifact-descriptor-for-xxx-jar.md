# Maven报错：Failed to read artifact descriptor for xxx:jar

错误原因：大多是由于依赖包没有被正确地下载和安装到指定的路径。

解决方案：

1. 根据报错提示到本地仓库下找到下载出错的jar包，在这个文件夹下会发现有个 xxxx.pom.lastUpdated 文件，例如：H:\mvn_repo\org\springframework\boot\spring-boot-configuration-processor\2.1.7.RELEASE文件夹下的spring-boot-configuration-processor-2.1.7.RELEASE.pom.lastUpdated，其实就这个文件出错了。

2. 放心大胆的删除这个文件 xxxx.pom.lastUpdated

3. Idea上Reimport一下：工程目录->鼠标右键->Maven->Reimport