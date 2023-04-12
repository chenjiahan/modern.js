(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_server_port_mdx"],{40194:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{frontmatter:function(){return c},title:function(){return o},toc:function(){return t},default:function(){return l}});var s=n("12151"),d=n("23169"),c={sidebar_label:"port"},o="server.port",t=[{text:"与 dev.port 的区别",depth:3,id:"与-dev.port-的区别"}];function i(e){var r=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre",h3:"h3"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"server.port",children:["server.port",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#server.port",children:"#"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"类型："})," ",(0,s.jsx)(r.code,{children:"number"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"默认值："})," ",(0,s.jsx)(r.code,{children:"8080"})]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["Modern.js 在执行 ",(0,s.jsx)(r.code,{children:"dev"}),", ",(0,s.jsx)(r.code,{children:"start"})," 和 ",(0,s.jsx)(r.code,{children:"serve"})," 命令时，会以 ",(0,s.jsx)(r.code,{children:"8080"})," 为默认端口启动，并会在端口被占用时自动递增端口号。你可以通过该配置来修改 Server 启动的端口号："]}),"\n",(0,s.jsxs)(r.div,{className:"language-",children:[(0,s.jsx)(r.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,s.jsxs)(r.div,{className:"modern-code-content",children:[(0,s.jsx)(r.button,{className:"copy"}),(0,s.jsx)(r.pre,{className:"code",children:(0,s.jsx)(r.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    port: 3000,\n  },\n});\n"})})]})]}),"\n",(0,s.jsxs)(r.h3,{id:"与-dev.port-的区别",children:["与 dev.port 的区别",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#与-dev.port-的区别",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:["大多数情况下，我们推荐使用 ",(0,s.jsx)(r.code,{children:"server.port"})," 而不是 ",(0,s.jsx)(r.code,{children:"dev.port"})," 来设置端口号，他们之间的区别如下："]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"dev.port"})," 仅在开发环境下生效，",(0,s.jsx)(r.code,{children:"server.port"})," 在开发环境和生产环境下均能生效。"]}),"\n",(0,s.jsxs)(r.li,{children:["在开发环境下，",(0,s.jsx)(r.code,{children:"dev.port"})," 的优先级高于 ",(0,s.jsx)(r.code,{children:"server.port"}),"。"]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["当你同时设置 ",(0,s.jsx)(r.code,{children:"dev.port"})," 和 ",(0,s.jsx)(r.code,{children:"server.port"})," 时，",(0,s.jsx)(r.code,{children:"dev.port"})," 会在开发环境下生效，",(0,s.jsx)(r.code,{children:"server.port"})," 会在生产环境下生效。比如以下例子，在开发环境下监听的端口号为 ",(0,s.jsx)(r.code,{children:"3001"}),"，在生产环境下监听的端口号为 ",(0,s.jsx)(r.code,{children:"3002"}),"。"]}),"\n",(0,s.jsxs)(r.div,{className:"language-",children:[(0,s.jsx)(r.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,s.jsxs)(r.div,{className:"modern-code-content",children:[(0,s.jsx)(r.button,{className:"copy"}),(0,s.jsx)(r.pre,{className:"code",children:(0,s.jsx)(r.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  dev: {\n    port: 3001,\n  },\n  server: {\n    port: 3002,\n  },\n});\n"})})]})]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}}}]);