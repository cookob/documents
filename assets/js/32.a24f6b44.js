(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{386:function(s,n,a){"use strict";a.r(n);var e=a(42),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux下使用nginx配置https出错-emerg-unknown-directive-ssl-in"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux下使用nginx配置https出错-emerg-unknown-directive-ssl-in"}},[s._v("#")]),s._v(' linux下使用nginx配置https出错: [emerg] unknown directive "ssl" in ...')]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v('错误信息｛nginx: [emerg] unknown directive "ssl" in ...｝')])]),s._v(" "),a("h2",{attrs:{id:"首先进入nginx初始的安装目录下执行命令："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首先进入nginx初始的安装目录下执行命令："}},[s._v("#")]),s._v(" 首先进入nginx初始的安装目录下执行命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./configure --prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"再执行make"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#再执行make"}},[s._v("#")]),s._v(" 再执行make")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"然后备份旧的nginx程序，并把新的nginx程序覆盖旧的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#然后备份旧的nginx程序，并把新的nginx程序覆盖旧的"}},[s._v("#")]),s._v(" 然后备份旧的nginx程序，并把新的nginx程序覆盖旧的")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/local/nginx/sbin/nginx /usr/local/nginx/sbin/nginx.bak\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" objs/nginx /usr/local/nginx/sbin/nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("此时如果提示“cp:cannot create regular file '/usr/local/nginx/sbin/nginx': Text file busy”,可以使用如下语句")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -rfp objs/nginx /usr/local/nginx/sbin/nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"测试新的nginx程序是否正确"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试新的nginx程序是否正确"}},[s._v("#")]),s._v(" 测试新的nginx程序是否正确")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("/usr/local/nginx/sbin/nginx -t\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"查看nginx版本编译参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看nginx版本编译参数"}},[s._v("#")]),s._v(" 查看nginx版本编译参数")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("/usr/local/nginx/sbin/nginx -V\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"平滑重启nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#平滑重启nginx"}},[s._v("#")]),s._v(" 平滑重启nginx")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("/usr/local/nginx/sbin/nginx -s reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);