(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{388:function(s,a,t){"use strict";t.r(a);var r=t(42),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"pojo搬到龙目岛-lombok"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pojo搬到龙目岛-lombok"}},[s._v("#")]),s._v(" POJO搬到龙目岛——Lombok")]),s._v(" "),t("h2",{attrs:{id:"lombok介绍（官网）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lombok介绍（官网）"}},[s._v("#")]),s._v(" Lombok介绍"),t("a",{attrs:{href:"https://www.projectlombok.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("（官网）"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("一句话概括：通过简单注解来精简代码达到消除冗长代码的目的。")]),s._v(" "),t("h2",{attrs:{id:"lombok优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lombok优点"}},[s._v("#")]),s._v(" Lombok优点")]),s._v(" "),t("p",[s._v("提高编码效率、使代码简洁、消除冗长代码、避免修改字段名字时忘记修改方法名、提高逼格、Lombok本身支持了日志框架（我们省去了对log的声明）")]),s._v(" "),t("h2",{attrs:{id:"lombok缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lombok缺点"}},[s._v("#")]),s._v(" Lombok缺点")]),s._v(" "),t("p",[s._v("IDE上必须要支持Lombok，否则IDE会报错！")]),s._v(" "),t("h2",{attrs:{id:"lombok原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lombok原理"}},[s._v("#")]),s._v(" Lombok原理")]),s._v(" "),t("p",[s._v("JSR 269 Pluggable Annotation Processing API")]),s._v(" "),t("p",[s._v("javac从Java6开始支持“JSR 269 API”规范")]),s._v(" "),t("p",[s._v("只要程序实现了该API，就能在javac运行时得到调用")]),s._v(" "),t("p",[s._v("Lombok实现了“JSR 269 API”，在编译时，javac编译源码的具体流程如下：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Source File-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Parse-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("AST-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Lombok Annotation Processor-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">|")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                                 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                                 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("-—————————————————————————————"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("—"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n                    Lombok Annotation Handler—"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Modified AST—"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Aanlyze and Generate-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Byte Code\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("源码经过javac分析过程生成一棵抽象语法树，运行过程中调用实现了“JSR 269 API”规范的Lombok程序,然后处理器对刚刚生成的语法树AST进行处理，例如@Data会自动生成变量的getter、setter方法。Lombok Annotation Handler就负责找到对应的语法树，然后修改该语法树，输出一个修改过的语法树，那它修改了什么呢，例如上面例子中增加了对应变量的getter、setter方法相应的树节点，拿到修改后的抽象语法树进行解析和生成，这个时候就生成了字节码文件。")]),s._v(" "),t("h2",{attrs:{id:"lombok引入项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lombok引入项目"}},[s._v("#")]),s._v(" Lombok引入项目")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.projectlombok.org/setup/maven",target:"_blank",rel:"noopener noreferrer"}},[s._v("Maven引入Lombok"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("dependencies"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("dependency"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("groupId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("org.projectlombok"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/groupId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("artifactId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("lombok"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/artifactId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("version"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.18")]),s._v("."),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("8")]),s._v("<")]),s._v("/version"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("scope"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("provided"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/scope"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("-- scope说明了引用Lombok的范围，声明provided说明在编译时不会打进war包当中 --"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/dependency"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/dependencies"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"idea安装lombok插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#idea安装lombok插件"}},[s._v("#")]),s._v(" IDEA安装Lombok插件")]),s._v(" "),t("p",[s._v("File->Settings->Plugins->Browse Repositories->搜索 Lombok plugin->Install->Restart IDEA")]),s._v(" "),t("h2",{attrs:{id:"lombok实战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lombok实战"}},[s._v("#")]),s._v(" Lombok实战")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("@Data //加在类上（包含@Getter、@Setter、@ToString、@EqualsAndHashCode，没有无参和全参构造，并且默认所有字段）\n@Getter                        //自动生成getter方法\n@Getter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("AccessLevel.PROTECTED"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" //权限受保护，如果不需要加权限（public）直接@Data注解就可以\n@Setter                        //自动生成setter方法\n@Setter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("AccessLevel.PROTECTED"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" //权限受保护，如果不需要加权限（public）直接@Data注解就可以\n@NoArgsConstructor             //无参构造器\n@AllArgsConstructor            //全参构造器\n@ToString                      //把这个类声明的所有属性都进行ToString"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("重写ToString"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n@ToString"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("exclude "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"column"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  //排除掉不想ToString的属性\n@ToString"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("of "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"column"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("       //ToString方法只有column指定的字段\n@EqualsAndHashCode             //重写Equals、HashCode方法，它有默认的规则\n@EqualsAndHashCode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("exclude "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"column"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  //排除掉不加入重写Equals、HashCode的\n@Slf4j                         //logback日志框架使用\n@Log4j                         //log4j日志框架使用\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h2",{attrs:{id:"lombok使用须知"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lombok使用须知"}},[s._v("#")]),s._v(" Lombok使用须知")]),s._v(" "),t("p",[s._v("在类需要序列化、反序列化时详细控制字段时(例如：Jackson json序列化)，要考虑是否适用；")]),s._v(" "),t("p",[s._v("虽然提高了开发效率，省去了手动创建getter、setter，但是降低了源代码文件的可读性和完整性，降低了阅读源代码的舒适度；")]),s._v(" "),t("p",[s._v("选择适合的地方使用Lombok，例如POJO。")])])}),[],!1,null,null,null);a.default=e.exports}}]);