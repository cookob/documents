(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{403:function(s,n,e){"use strict";e.r(n);var a=e(42),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"实战"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实战"}},[s._v("#")]),s._v(" 实战")]),s._v(" "),e("h2",{attrs:{id:"keystone的手动搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keystone的手动搭建"}},[s._v("#")]),s._v(" Keystone的手动搭建")]),s._v(" "),e("h3",{attrs:{id:"控制节点的安装配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#控制节点的安装配置"}},[s._v("#")]),s._v(" 控制节点的安装配置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("数据库相关操作：\nmysql -uroot -popenstack <<EOF\ncreate database keystone;\nGRANT ALL PRIVILEGES ON keystone.* TO 'keystone'@'localhost' IDENTIFIED BY 'openstack'; GRANT ALL PRIVILEGES ON keystone.* TO 'keystone'@'%'  IDENTIFIED BY 'openstack';\nEOF\n安装相关包并配置\nyum install openstack-keystone httpd mod_wsgi -y\n\n\nvim /etc/keystone/keystone.conf \n[database] \nconnection = mysql+pymysql://keystone:openstack@controller/keystone\n[token] \nprovider = fernet\n\n初始化数据库，创建数据结构：\nsu -s /bin/sh -c \"keystone-manage db_sync\" keystone\n\n初始化fernet密钥存储库\nkeystone-manage fernet_setup --keystone-user keystone --keystone-group keystone \nkeystone-manage credential_setup --keystone-user keystone --keystone-group keystone\n\n创建keystone的服务端口：\nkeystone-manage bootstrap --bootstrap-password openstack --bootstrap-admin-url http://controller1:35357/v3/  --bootstrap-internal-url http://controller1:5000/v3/ --bootstrap-public-url  http://controller1:5000/v3/  --bootstrap-region-id RegionOne\n\n配置http 服务\nvim /etc/httpd/conf/httpd.conf \nServerName  controller\n\n给/usr/share/keystone/wsgi-keystone.conf创建一个软连接\nln -s /usr/share/keystone/wsgi-keystone.conf /etc/httpd/conf.d/\n\n服务启动并设置开机自启\nsystemctl enable httpd.service &&  systemctl start httpd.service\n\n创建管理员账号\nvim admin-openrc\nexport OS_USERNAME=admin \nexport OS_PASSWORD=f4mtdycd \nexport OS_PROJECT_NAME=admin \nexport OS_USER_DOMAIN_NAME=Default \nexport OS_PROJECT_DOMAIN_NAME=Default \nexport OS_AUTH_URL=http://controller: 35357/v3 \nexport OS_IDENTITY_API_VERSION=3\n\n \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br")])]),e("h3",{attrs:{id:"创建域、项目、用户和角色"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建域、项目、用户和角色"}},[s._v("#")]),s._v(" 创建域、项目、用户和角色")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('openstack project create --domain default --description "Service Project" service\nopenstack project create --domain default --description "Demo Project" demo\n\n下面这句要分开执行，要输入密码：\nopenstack user create --domain default --password-prompt demo\n\nopenstack role create user \nopenstack role add --project demo --user demo user\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h3",{attrs:{id:"验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[s._v("#")]),s._v(" 验证")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("unset OS_AUTH_URL OS_PASSWORD\n下面这句要分开执行，要输入admin用户的密码：\nopenstack --os-auth-url http://controller1:35357/v3 \\\n--os-project-domain-name Default \\\n--os-user-domain-name Default \\\n--os-project-name admin  \\\n--os-username admin token issue\n\n下面这句要分开执行，要输入demo用户的密码：\nopenstack --os-auth-url http://controller1:5000/v3 \\\n--os-project-domain-name Default \\\n--os-user-domain-name Default \\\n--os-project-name demo --os-username demo token issue\n\n---------------------------------------\n\n创建管理员的账号\nvim admin-openrc \nexport OS_PROJECT_DOMAIN_NAME=Default \nexport OS_USER_DOMAIN_NAME=Default \nexport OS_PROJECT_NAME=admin \nexport OS_USERNAME=admin \nexport OS_PASSWORD=openstack\nexport OS_AUTH_URL=http://controller:35357/v3 \nexport OS_IDENTITY_API_VERSION=3\nexport OS_IMAGE_API_VERSION=2\n\n创建demo用户的账号\nexport OS_PROJECT_DOMAIN_NAME=Default\nexport OS_USER_DOMAIN_NAME=Default \nexport OS_PROJECT_NAME=demo \nexport OS_USERNAME=demo \nexport OS_PASSWORD=openstack\nexport OS_AUTH_URL=http://controller:5000/v3 \nexport OS_IDENTITY_API_VERSION=3\n export OS_IMAGE_API_VERSION=2\n\n使用脚本验证 \n\nsource admin-openrc \nopenstack token issue\n可获取token admin用户的token\n\nsource demo-openrc \nopenstack token issue\n可以获取token demo用户的token\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);