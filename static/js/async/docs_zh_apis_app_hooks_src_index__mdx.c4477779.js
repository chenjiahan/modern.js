(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_hooks_src_index__mdx"],{84449:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return i}});var s,t=r("15169"),o=r("43932"),a=r("9880"),c=r("23169");function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"indextjs",children:["index.[tj]s",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#indextjs",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["应用使用自定义 ",(0,a.jsx)(n.code,{children:"bootstrap"})," 时的入口标识。"]}),"\n",(0,a.jsxs)(n.p,{children:["通常情况下 ",(0,a.jsx)(n.a,{href:"/apis/app/hooks/src/app",children:(0,a.jsx)(n.code,{children:"App.[tj]sx"})})," 钩子文件已经能满足我们的需求，当我们需要在 ",(0,a.jsx)(n.code,{children:"bootstrap"})," 之前添加自定义行为或者完全接管 webpack 打包入口时，可以在 ",(0,a.jsx)(n.code,{children:"src"})," 或者入口目录下放置 ",(0,a.jsx)(n.code,{children:"index.[tj]s"}),"。 下面有分两种情况进行讨论："]}),"\n",(0,a.jsxs)(n.h2,{id:"在-bootstrap-之前添加自定义行为",children:["在 bootstrap 之前添加自定义行为",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在-bootstrap-之前添加自定义行为",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["只需要 ",(0,a.jsx)(n.code,{children:"src/index.[tj]s"})," 默认导出函数："]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:"title=src/index.js",children:"import ReactDOM from 'react-dom/client';\nimport { bootstrap } from '@modern-js/runtime';\n\nexport default (App: React.ComponentType) => {\n  // do something before bootstrap...\n  bootstrap(App, 'root', undefined, ReactDOM);\n};\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"完全接管-webpack-入口",children:["完全接管 webpack 入口",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#完全接管-webpack-入口",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["当 ",(0,a.jsx)(n.code,{children:"src/index.[tj]sx?"})," 下没有默认导出函数时，该文件即为真正的 webpack 打包入口文件, 可以直接像使用 create-react-app 等脚手架一样组织代码："]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:"title=src/index.jsx",children:"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\n\nReactDOM.createRoot(document.getElementById('root')!).render(<App />);\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fapis%2Fapp%2Fhooks%2Fsrc%2Findex_.mdx"]={toc:[{text:"在 bootstrap 之前添加自定义行为",id:"在-bootstrap-之前添加自定义行为",depth:2},{text:"完全接管 webpack 入口",id:"完全接管-webpack-入口",depth:2}],title:"index.[tj]s",frontmatter:{title:"index.[tj]s",sidebar_position:4}};var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,(0,o._)((0,t._)({},e),{children:(0,a.jsx)(d,(0,t._)({},e))})):d(e)}}}]);