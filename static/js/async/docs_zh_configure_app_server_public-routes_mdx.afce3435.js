(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_server_public-routes_mdx"],{23484:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var s,c=r("15169"),o=r("43932"),i=r("9880"),t=r("23169");function d(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"serverpublicroutes",children:["server.publicRoutes",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#serverpublicroutes",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"类型："})," ",(0,i.jsx)(n.code,{children:"Object"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"默认值："})," 根据文件约定自动生成的服务端路由规则，每个文件生成一条路由规则。"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["该配置选项只作用于服务端路由，可以自定义 ",(0,i.jsx)(n.code,{children:"config/public/"})," 下资源的访问路由。"]}),"\n",(0,i.jsxs)(n.p,{children:["对象的 ",(0,i.jsx)(n.code,{children:"key"})," 为 ",(0,i.jsx)(n.code,{children:"config/public/"})," 的相对文件路径（不使用 ",(0,i.jsx)(n.code,{children:"./"}),"）, 值可以是 ",(0,i.jsx)(n.code,{children:"string"}),"。"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    publicRoutes: {\n      // 设置一个长路由\n      'index.json': '/user-config/card-info/extra/help.json',\n\n      // 设置一个不带后缀的路由\n      'robot.txt': '/app/authentication',\n    },\n  },\n});\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fmain-doc%2Fdocs%2Fzh%2Fconfigure%2Fapp%2Fserver%2Fpublic-routes.mdx"]={toc:[],title:"server.publicRoutes",frontmatter:{sidebar_label:"publicRoutes"}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,o._)((0,c._)({},e),{children:(0,i.jsx)(d,(0,c._)({},e))})):d(e)}}}]);