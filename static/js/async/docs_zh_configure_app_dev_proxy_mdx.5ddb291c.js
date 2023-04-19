(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_dev_proxy_mdx"],{338:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var r=s("12151"),c=s("23169");function t(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",div:"div",button:"button",pre:"pre",img:"img"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"string | Object"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"null"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["配置该选项后，开发环境时会启动全局代理，类似 ",(0,r.jsx)(n.a,{href:"https://www.telerik.com/fiddler",target:"_blank",rel:"noopener noreferrer",children:"Fiddler"}),", ",(0,r.jsx)(n.a,{href:"https://www.charlesproxy.com/",target:"_blank",rel:"noopener noreferrer",children:"Charles"})," 等 web 代理调试工具，可以用来查看、修改 HTTP/HTTPS 请求、响应、也可以用作代理服务器。"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"提示"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["使用该选项需要提前安装 ",(0,r.jsx)(n.code,{children:"@modern-js/plugin-proxy"}),"。"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["值为 ",(0,r.jsx)(n.code,{children:"Object"})," 时，对象的 ",(0,r.jsx)(n.code,{children:"key"})," 对应匹配的 ",(0,r.jsx)(n.code,{children:"pattern"}),"，对象的 ",(0,r.jsx)(n.code,{children:"value"})," 对应匹配的 ",(0,r.jsx)(n.code,{children:"target"}),"。"]}),"\n",(0,r.jsx)(n.p,{children:"例如："}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  dev: {\n    proxy: {\n      'https://www.baidu.com': 'https://google.com.hk',\n      //可以通过 file 协议直接返回静态文件。\n      'https://example.com/api': 'file://./data.json',\n    },\n  },\n});\n"})})]})]}),"\n",(0,r.jsxs)(n.p,{children:["值为 ",(0,r.jsx)(n.code,{children:"string"})," 时， 可以用来指定单独的代理文件，例如："]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  dev: {\n    proxy: './proxy.js',\n  },\n});\n"})})]})]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"proxy.js"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",meta:'title="proxy.js"',children:"module.exports = {\n  name: 'my-app',\n  rules: `\n    ^example.com:8080/api/***   http://localhost:3001/api/$\n  `,\n};\n"})})]})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["Modern.js 全局代理实现底层基于 ",(0,r.jsx)(n.a,{href:"https://wproxy.org/whistle/",target:"_blank",rel:"noopener noreferrer",children:"whistle"}),", 更多匹配模式请参考: ",(0,r.jsx)(n.a,{href:"https://wproxy.org/whistle/pattern.html",target:"_blank",rel:"noopener noreferrer",children:"匹配模式"})]}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["执行 ",(0,r.jsx)(n.code,{children:"dev"}),", 提示如下时，即代理服务器启动成功："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"  App running at:\n\n  Local:    http://localhost:8080/\n  Network:  http://192.168.0.1:8080/\n\nℹ  info      Starting the proxy server.....\n✔  success   Proxy Server start on localhost:8899\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["访问 ",(0,r.jsx)(n.code,{children:"localhost:8899"}),", 可以在 UI 界面上查看 Network 以及配置代理规则："]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/dev-proxy.png",alt:"proxy ui 界面"})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive caution",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"注意"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["https 代理自动安装证书需要获取 root 权限, 请根据提示输入密码即可。",(0,r.jsx)(n.strong,{children:"密码仅在信任证书时使用，不会泄漏或者用于其他环节"}),"。"]}),"\n"]})]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}},53541:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return o},title:function(){return d},toc:function(){return i},default:function(){return a}});var r=s("12151"),c=s("23169"),t=s.ir(s("338")),o={sidebar_label:"proxy"},d="dev.proxy",i=[];function l(e){var n=Object.assign({h1:"h1",a:"a"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"dev-proxy",children:["dev.proxy",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dev-proxy",children:"#"})]}),"\n","\n",(0,r.jsx)(t.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);