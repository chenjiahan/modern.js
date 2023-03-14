(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["packages_toolkit_main-doc_zh_guides_advanced-features_bff_type_mdx"],{73334:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return i},toc:function(){return c},title:function(){return l},default:function(){return d}});var r=n("41660");let i={sidebar_position:2,title:"函数写法 & 框架写法"},c=[{id:"函数写法",text:"函数写法",depth:2},{id:"框架写法",text:"框架写法",depth:2}],l="函数写法 & 框架写法";function a(e){let s=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",div:"div",code:"code",h2:"h2",button:"button",pre:"pre",span:"span"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"函数写法--框架写法",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#函数写法--框架写法",children:"#"}),"函数写法 & 框架写法"]}),"\n",(0,r.jsxs)(s.p,{children:["运行时框架支持也是 ",(0,r.jsx)(s.strong,{children:"BFF"})," 中重要的一环。Modern.js 支持通过插件扩展 BFF 的运行时框架，并提供了一系列内置插件，开发者可以直接使用对应框架的约定和生态。"]}),"\n",(0,r.jsxs)(s.p,{children:["插件中兼容了这些框架大部分的规范，每一种框架都需要提供两类扩展写法 BFF 函数的方式，分别是",(0,r.jsx)(s.strong,{children:"函数写法"}),"和",(0,r.jsx)(s.strong,{children:"框架写法"}),"。"]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive note",children:[(0,r.jsx)(s.p,{className:"modern-directive-title",children:"NOTE"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsxs)(s.p,{children:["\n当前 ",(0,r.jsx)(s.code,{children:"api/"})," 目录结构是否为框架写法由对应的插件决定，Modern.js 并不关心。"]})})]}),"\n",(0,r.jsxs)(s.h2,{id:"函数写法",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#函数写法",children:"#"}),"函数写法"]}),"\n",(0,r.jsxs)(s.p,{children:["当插件认为当前为函数写法时，必须支持在 ",(0,r.jsx)(s.code,{children:"api/_app.ts"})," 中编写中间件，用来扩展 BFF 函数。"]}),"\n",(0,r.jsxs)(s.p,{children:["Modern.js 会收集 ",(0,r.jsx)(s.code,{children:"api/_app.ts"})," 中的中间件，并传递给插件，由插件将中间件注入运行时，例如："]}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { hook } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime/server'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"hook"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(({ addMiddleware }) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"addMiddleware"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(myMiddleware);"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive note",children:[(0,r.jsx)(s.p,{className:"modern-directive-title",children:"NOTE"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsxs)(s.p,{children:["\n不同插件的中间件的写法不一定相同，详情可见",(0,r.jsx)(s.a,{href:"/guides/advanced-features/bff/frameworks.html",children:"运行时框架"}),"。"]})})]}),"\n",(0,r.jsxs)(s.h2,{id:"框架写法",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#框架写法",children:"#"}),"框架写法"]}),"\n",(0,r.jsx)(s.p,{children:"框架写法是一种使用框架结构来扩展 BFF 函数的方式。和函数写法相比，框架写法虽然能够利用更多框架的结构，在复杂场景下让整个 BFF Server 更加清晰，但也相的更加复杂，需要关心更多框架层面的内容。"}),"\n",(0,r.jsxs)(s.p,{children:["框架写法中，所有的 BFF 函数都需要写在 ",(0,r.jsx)(s.code,{children:"api/lambda/"})," 目录下，并且无法使用钩子文件 ",(0,r.jsx)(s.code,{children:"_app.[tj]s"}),"。"]}),"\n",(0,r.jsx)(s.p,{children:"多数情况下，函数写法就能覆盖大多数 BFF 函数的定制需求。只有当你的项目服务端逻辑比较复杂，代码需要分层，或者需要使用更多框架的元素时，才需要使用框架写法。"}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive note",children:[(0,r.jsx)(s.p,{className:"modern-directive-title",children:"NOTE"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsxs)(s.p,{children:["\n不同插件框架写法的目录结构不一定相同，详情可见",(0,r.jsx)(s.a,{href:"/guides/advanced-features/bff/frameworks.html",children:"运行时框架"}),"。"]})})]})]})}var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=e.components||{};return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}}}]);