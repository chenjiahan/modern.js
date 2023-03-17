(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_topic-detail_model_use-out-of-modernjs_mdx"],{17289:function(s,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var r in e)Object.defineProperty(s,r,{enumerable:!0,get:e[r]})}(e,{frontmatter:function(){return l},toc:function(){return o},title:function(){return c},default:function(){return t}});var n=r("12151");let l={sidebar_position:12,title:"单独使用 Reduck"},o=[],c="单独使用 Reduck";function i(s){let e=Object.assign({h1:"h1",a:"a",p:"p",ol:"ol",li:"li",code:"code",div:"div",button:"button",pre:"pre",span:"span"},s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.h1,{id:"单独使用-reduck",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#单独使用-reduck",children:"#"}),"单独使用 Reduck"]}),"\n",(0,n.jsx)(e.p,{children:"在 Modern.js 以外，单独集成 Reduck 使用时，主要需要做以下修改："}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"安装 Reduck 相关包"}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["在项目中安装 Reduck 包：",(0,n.jsx)(e.code,{children:"@modern-js-reduck/react"}),"。"]}),"\n",(0,n.jsxs)(e.ol,{start:"2",children:["\n",(0,n.jsx)(e.li,{children:"API 导入包名"}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["在 Modern.js 中使用时，Reduck 导出 API 的包名为：",(0,n.jsx)(e.code,{children:"@modern-js/runtime/model"}),"。单独使用 Reduck 时，导出包名为：",(0,n.jsx)(e.code,{children:"@modern-js-reduck/react"}),"。"]}),"\n",(0,n.jsxs)(e.ol,{start:"3",children:["\n",(0,n.jsxs)(e.li,{children:["包裹 ",(0,n.jsx)(e.code,{children:"Provider"})," 组件"]}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["Modern.js 自动在应用的入口组件上，包裹了用于注入 Reduck 全局 Store 的 ",(0,n.jsx)(e.a,{href:"/apis/app/runtime/model/Provider.html",children:(0,n.jsx)(e.code,{children:"Provider"})})," 组件。单独使用 Reduck 时，需要手动完成。"]}),"\n",(0,n.jsx)(e.p,{children:"示例："}),"\n",(0,n.jsxs)(e.div,{className:"language-tsx",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 根组件"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Root"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Provider"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      {"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"/* 应用入口组件 */"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"App"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Provider"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  );"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.ol,{start:"4",children:["\n",(0,n.jsx)(e.li,{children:"功能配置"}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["在 Modern.js 中使用时，可以通过 ",(0,n.jsx)(e.a,{href:"/configure/app/runtime/state.html",children:(0,n.jsx)(e.code,{children:"runtime.state"})})," 对 Reduck 功能进行配置。单独使用时，需要通过 ",(0,n.jsx)(e.a,{href:"/apis/app/runtime/model/Provider.html",children:(0,n.jsx)(e.code,{children:"Provider"})})," 的 ",(0,n.jsx)(e.code,{children:"config"})," 或 ",(0,n.jsx)(e.code,{children:"store"})," 参数配置。"]}),"\n",(0,n.jsx)(e.p,{children:"示例："}),"\n",(0,n.jsxs)(e.div,{className:"language-tsx",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Root"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    {"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"/* 关闭 Redux DevTools */"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Provider"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"config"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{{ devTools"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" }}>"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"App"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Provider"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  )"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]})]})}var t=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,n.jsx)(e,Object.assign({},s,{children:(0,n.jsx)(i,s)})):i(s)}}}]);