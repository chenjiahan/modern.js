(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_basic-features_proxy_mdx"],{62795:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var s=r("12151"),o=r("23169");function t(e){var n=Object.assign({p:"p",code:"code",a:"a",h3:"h3",div:"div",button:"button",pre:"pre",img:"img"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Modern.js provides out-of-the-box global proxy plugin ",(0,s.jsx)(n.code,{children:"@modern-js/plugin-proxy"}),", which is based on ",(0,s.jsx)(n.a,{href:"https://github.com/avwo/whistle",target:"_blank",rel:"noopener noreferrer",children:"whistle"})," and can be used to view and modify HTTP/HTTPS requests and responses, and can also be used as an HTTP proxy server."]}),"\n",(0,s.jsxs)(n.h3,{id:"set-proxy-rules",children:["Set Proxy Rules",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#set-proxy-rules",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["After install the proxy plugin and filling in the rules, execute ",(0,s.jsx)(n.code,{children:"pnpm run dev"}),", Modern.js will automatically enable the proxy server after the development server starts."]}),"\n",(0,s.jsxs)(n.p,{children:["Specific proxy rules can be set via the ",(0,s.jsx)(n.a,{href:"/en/configure/app/dev/proxy",children:(0,s.jsx)(n.code,{children:"dev.proxy"})})," or the ",(0,s.jsx)(n.code,{children:"config/proxy.js"})," file."]}),"\n",(0,s.jsxs)(n.h3,{id:"use-proxy-dashboard",children:["Use Proxy Dashboard",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-proxy-dashboard",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["After exec ",(0,s.jsx)(n.code,{children:"pnpm run dev"})," command:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:"  App running at:\n\n  Local:    http://localhost:8080/\n  Network:  http://192.168.0.1:8080/\n\nℹ  info      Starting the proxy server.....\n✔  success   Proxy Server start on localhost:8899\n"})})]})}),"\n",(0,s.jsx)(n.p,{children:"In the console you can see that the proxy server started successfully."}),"\n",(0,s.jsxs)(n.p,{children:["Accessing the ",(0,s.jsx)(n.code,{children:"http://localhost:8899"})," and, you can set the rules through the dashboard."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/debug/debug-proxy-ui.png",alt:"debug-proxy-ui"})})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}},24704:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return a},title:function(){return c},toc:function(){return i},default:function(){return l}});var s=r("12151"),o=r("23169"),t=r.ir(r("62795")),a={title:"Proxy",sidebar_position:5},c="Proxy",i=[{text:"Local Proxy",depth:2,id:"local-proxy"},{text:"Global Proxy",depth:2,id:"global-proxy"},{text:"BFF Proxy",depth:2,id:"bff-proxy"}];function d(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",div:"div",button:"button",pre:"pre",code:"code"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"proxy",children:["Proxy",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#proxy",children:"#"})]}),"\n",(0,s.jsxs)(n.h2,{id:"local-proxy",children:["Local Proxy",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#local-proxy",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js provides a way to configure the development proxy in ",(0,s.jsx)(n.a,{href:"/en/configure/app/tools/dev-server",children:"tools.devServer"}),". For example, to proxy the local interface to an online address:"]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  tools: {\n    devServer: {\n      proxy: {\n        '/go/api': {\n          target: 'http://www.example.com/',\n          changeOrigin: true,\n        },\n      },\n    },\n  },\n});\n"})})]})]}),"\n",(0,s.jsxs)(n.p,{children:["when access ",(0,s.jsx)(n.code,{children:"http://localhost:8080/go/api"}),", the response content is returned from ",(0,s.jsx)(n.a,{href:"http://www.example.com/",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(n.a,{href:"http://www.example.com/",target:"_blank",rel:"noopener noreferrer",children:"http://www.example.com/"})}),"."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:["For more detail, see ",(0,s.jsx)(n.a,{href:"https://github.com/chimurai/http-proxy-middleware",target:"_blank",rel:"noopener noreferrer",children:"http-proxy-middleware"}),".","\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"global-proxy",children:["Global Proxy",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#global-proxy",children:"#"})]}),"\n","\n",(0,s.jsx)(t.default,{}),"\n",(0,s.jsxs)(n.h2,{id:"bff-proxy",children:["BFF Proxy",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bff-proxy",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["By configuring ",(0,s.jsx)(n.a,{href:"/en/configure/app/bff/proxy",children:(0,s.jsx)(n.code,{children:"bff.proxy"})}),", you can proxy BFF API requests to specified services. Unlike other proxy above, it can also be used in the production environment:"]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  bff: {\n    proxy: {\n      '/api/v1': 'https://cnodejs.org',\n    },\n  },\n});\n"})})]})]}),"\n",(0,s.jsxs)(n.p,{children:["For example, when a BFF call is used in the code, the final request ",(0,s.jsx)(n.code,{children:"http://localhost:8080/api/v1/topics"})," will auto proxy to ",(0,s.jsx)(n.code,{children:"https://cnodejs.org/api/v1/topics"}),":"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"import getTopics from '@api/v1/topics';\n\ngetTopics();\n"})})]})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}}}]);