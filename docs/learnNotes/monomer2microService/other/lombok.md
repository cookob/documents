# POJO搬到龙目岛——Lombok

## Lombok介绍[（官网）](https://www.projectlombok.org/)
一句话概括：通过简单注解来精简代码达到消除冗长代码的目的。
## Lombok优点
提高编码效率、使代码简洁、消除冗长代码、避免修改字段名字时忘记修改方法名、提高逼格、Lombok本身支持了日志框架（我们省去了对log的声明）
## Lombok缺点
IDE上必须要支持Lombok，否则IDE会报错！
## Lombok原理
JSR 269 Pluggable Annotation Processing API

javac从Java6开始支持“JSR 269 API”规范

只要程序实现了该API，就能在javac运行时得到调用

Lombok实现了“JSR 269 API”，在编译时，javac编译源码的具体流程如下：
``` bash
Source File->Parse->AST->Lombok Annotation Processor->|
                    |                                 |
                    |                                 |
                    |<-—————————————————————————————<—|
                    Lombok Annotation Handler—>Modified AST—>Aanlyze and Generate->Byte Code
```
源码经过javac分析过程生成一棵抽象语法树，运行过程中调用实现了“JSR 269 API”规范的Lombok程序,然后处理器对刚刚生成的语法树AST进行处理，例如@Data会自动生成变量的getter、setter方法。Lombok Annotation Handler就负责找到对应的语法树，然后修改该语法树，输出一个修改过的语法树，那它修改了什么呢，例如上面例子中增加了对应变量的getter、setter方法相应的树节点，拿到修改后的抽象语法树进行解析和生成，这个时候就生成了字节码文件。
## Lombok引入项目
[Maven引入Lombok](https://www.projectlombok.org/setup/maven)
``` bash
<dependencies>
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <version>1.18.8</version>
        <scope>provided</scope>
        <!-- scope说明了引用Lombok的范围，声明provided说明在编译时不会打进war包当中 -->
    </dependency>
</dependencies>
```
## IDEA安装Lombok插件
File->Settings->Plugins->Browse Repositories->搜索 Lombok plugin->Install->Restart IDEA
## Lombok实战
``` bash
@Data //加在类上（包含@Getter、@Setter、@ToString、@EqualsAndHashCode，没有无参和全参构造，并且默认所有字段）
@Getter                        //自动生成getter方法
@Getter(AccessLevel.PROTECTED) //权限受保护，如果不需要加权限（public）直接@Data注解就可以
@Setter                        //自动生成setter方法
@Setter(AccessLevel.PROTECTED) //权限受保护，如果不需要加权限（public）直接@Data注解就可以
@NoArgsConstructor             //无参构造器
@AllArgsConstructor            //全参构造器
@ToString                      //把这个类声明的所有属性都进行ToString(重写ToString)
@ToString(exclude = "column")  //排除掉不想ToString的属性
@ToString(of = "column")       //ToString方法只有column指定的字段
@EqualsAndHashCode             //重写Equals、HashCode方法，它有默认的规则
@EqualsAndHashCode(exclude = "column")  //排除掉不加入重写Equals、HashCode的
@Slf4j                         //logback日志框架使用
@Log4j                         //log4j日志框架使用
```
## Lombok使用须知
在类需要序列化、反序列化时详细控制字段时(例如：Jackson json序列化)，要考虑是否适用；

虽然提高了开发效率，省去了手动创建getter、setter，但是降低了源代码文件的可读性和完整性，降低了阅读源代码的舒适度；

选择适合的地方使用Lombok，例如POJO。
