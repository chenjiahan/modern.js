(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_apis_app_runtime_model_Provider_mdx"],{92348:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var r in s)Object.defineProperty(e,r,{enumerable:!0,get:s[r]})}(s,{frontmatter:function(){return c},toc:function(){return l},title:function(){return o},default:function(){return a}});var n=r("12151"),i=r.ir(r("3512"));let c={sidebar_position:8,title:"Provider"},l=[{id:"函数签名",text:"函数签名",depth:2},{id:"参数",text:"参数",depth:3},{id:"示例",text:"示例",depth:2}],o="Provider";function t(e){let s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",div:"div",button:"button",pre:"pre",span:"span",h3:"h3",ul:"ul",li:"li"},e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"provider",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#provider",children:"#"}),"Provider"]}),"\n","\n",(0,n.jsx)(i.default,{}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Provider"})," 是一个组件，它将 Reduck 的 Store 注入到应用的组件树中，使组件树内部的组件可以访问 Model。一般情况下，",(0,n.jsx)(s.code,{children:"Provider"})," 会定义在组件树的最顶层。"]}),"\n",(0,n.jsxs)(s.h2,{id:"函数签名",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#函数签名",children:"#"}),"函数签名"]}),"\n",(0,n.jsxs)(s.div,{className:"language-ts",children:[(0,n.jsx)(s.div,{className:""}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ProviderProps"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  store"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ReduckStore"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  config"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"AppConfig"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(s.h3,{id:"参数",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#参数",children:"#"}),"参数"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["store：",(0,n.jsx)(s.a,{href:"/apis/app/runtime/model/create-store.html",children:(0,n.jsx)(s.code,{children:"createStore"})})," 创建的 Store 对象。"]}),"\n",(0,n.jsxs)(s.li,{children:["config：创建 Reduck Store 的配置，同 ",(0,n.jsx)(s.a,{href:"/apis/app/runtime/model/create-app.html",children:(0,n.jsx)(s.code,{children:"createApp"})})," 的 ",(0,n.jsx)(s.code,{children:"config"})," 参数。"]}),"\n"]}),"\n",(0,n.jsxs)(s.h2,{id:"示例",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"}),"示例"]}),"\n",(0,n.jsxs)(s.div,{className:"language-tsx",children:[(0,n.jsx)(s.div,{className:"modern-code-title",children:"应用入口文件"}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ReactDOM"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".render"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Provider"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"App"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  </"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Provider"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"document"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".getElementById"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'root'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=e.components||{};return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(t,e)})):t(e)}},3512:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return c}});var n=r("12151");function i(e){let s=Object.assign({div:"div",p:"p",code:"code"},e.components);return(0,n.jsxs)(s.div,{className:"modern-directive info",children:[(0,n.jsx)(s.p,{className:"modern-directive-title",children:"补充信息"}),(0,n.jsxs)(s.div,{className:"modern-directive-content",children:[(0,n.jsxs)(s.p,{children:["\n默认情况下，本节所有 API 的导出包名为：",(0,n.jsx)(s.code,{children:"@modern-js/runtime/model"}),"。"]}),(0,n.jsxs)(s.p,{children:["如果是在 Modern.js 以外单独集成 Reduck，导出包名为：",(0,n.jsx)(s.code,{children:"@modern-js-reduck/react"}),"。"]})]})]})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=e.components||{};return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(i,e)})):i(e)}}}]);