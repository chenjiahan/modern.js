(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_dev_proxy_mdx"],{5144:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var r=s("12151"),t=s("23169");function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",div:"div",h3:"h3",button:"button",pre:"pre",img:"img"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"string | Object"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"null"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When this option is configured, the development environment will start a global proxy, similar to ",(0,r.jsx)(n.a,{href:"https://www.telerik.com/fiddler",target:"_blank",rel:"noopener noreferrer",children:"Fiddler"}),", ",(0,r.jsx)(n.a,{href:"https://www.charlesproxy.com/",target:"_blank",rel:"noopener noreferrer",children:"Charles"})," and other web proxy debugging tools, which can be used to view, modify HTTP/HTTPS requests, responses, and can also be used as a proxy server."]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["Using this option requires advance installation ",(0,r.jsx)(n.code,{children:"@modern-js/plugin-proxy"}),"."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h3,{id:"object",children:["Object",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Using this option requires that the value of ",(0,r.jsx)(n.code,{children:"Object"})," be installed in advance, the ",(0,r.jsx)(n.code,{children:"key"})," of the object corresponds to the matching ",(0,r.jsx)(n.code,{children:"pattern"}),", and the ",(0,r.jsx)(n.code,{children:"value"})," of the object corresponds to the matching ",(0,r.jsx)(n.code,{children:"target"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  dev: {\n    proxy: {\n      'https://www.baidu.com': 'https://google.com.hk',\n      // Static files can be returned directly via the file protocol\n      'https://example.com/api': 'file://./data.json',\n    },\n  },\n});\n"})})]})]}),"\n",(0,r.jsxs)(n.h3,{id:"string",children:["String",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#string",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When the value is ",(0,r.jsx)(n.code,{children:"string"}),", it can be used to specify a separate proxy file, for example:"]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  dev: {\n    proxy: './proxy.js',\n  },\n});\n"})})]})]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"proxy.js"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",meta:'title="proxy.js"',children:"module.exports = {\n  name: 'my-app',\n  rules: `\n    ^example.com:8080/api/***   http://localhost:3001/api/$\n  `,\n};\n"})})]})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["Modern.js global proxy implementation is based on ",(0,r.jsx)(n.a,{href:"https://wproxy.org/whistle/",target:"_blank",rel:"noopener noreferrer",children:"whistle"}),", for more matching patterns, please refer to: ",(0,r.jsx)(n.a,{href:"https://wproxy.org/whistle/pattern.html",target:"_blank",rel:"noopener noreferrer",children:"Matching Patterns"})]}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["Execute ",(0,r.jsx)(n.code,{children:"dev"}),", when the prompt is as follows, the proxy server starts successfully:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"  App running at:\n\n  Local:    http://localhost:8080/\n  Network:  http://192.168.0.1:8080/\n\nℹ  info      Starting the proxy server.....\n✔  success   Proxy Server start on localhost:8899\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["Access the ",(0,r.jsx)(n.code,{children:"localhost:8899"})," to view the Network and configure proxy rules on the UI interface:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/dev-proxy.png",alt:"proxy UI"})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive caution",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"Caution"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsx)(n.p,{children:"The https agent automatically installs the certificate to obtain root privileges. Please enter the password as prompted. ** The password is only used when the certificate is trusted and will not be leaked or used for other links **."}),"\n"]})]})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},96914:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return i},title:function(){return c},toc:function(){return a},default:function(){return l}});var r=s("12151"),t=s("23169"),o=s.ir(s("5144")),i={sidebar_label:"proxy"},c="dev.proxy",a=[];function d(e){var n=Object.assign({h1:"h1",a:"a"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"dev-proxy",children:["dev.proxy",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dev-proxy",children:"#"})]}),"\n","\n",(0,r.jsx)(o.default,{})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}}}]);