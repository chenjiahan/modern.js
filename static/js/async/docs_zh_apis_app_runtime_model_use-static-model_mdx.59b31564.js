(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_apis_app_runtime_model_use-static-model_mdx"],{10338:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return o},toc:function(){return i},title:function(){return c},default:function(){return a}});var l=n("12151"),r=n.ir(n("3512"));let o={sidebar_position:3,title:"useStaticModel"},i=[{id:"示例",text:"示例",depth:4}],c="useStaticModel";function t(s){let e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",button:"button",pre:"pre",span:"span",h4:"h4"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.h1,{id:"usestaticmodel",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#usestaticmodel",children:"#"}),"useStaticModel"]}),"\n","\n",(0,l.jsx)(r.default,{}),"\n",(0,l.jsxs)(e.p,{children:["如果想在组件里以 React Hook 的形式消费某个 Model，并能随时获取到当前最新的状态，但又不希望 Model 状态更新的时候，引起组件的重新渲染，可以使用 ",(0,l.jsx)(e.code,{children:"useStaticModel"}),"。",(0,l.jsx)(e.code,{children:"useStaticModel"})," API 形式上与 ",(0,l.jsx)(e.code,{children:"useModel"})," 完全一致。具体使用请参考 ",(0,l.jsx)(e.a,{href:"/apis/app/runtime/model/use-model.html",children:(0,l.jsx)(e.code,{children:"useModel"})}),"。"]}),"\n",(0,l.jsxs)(e.p,{children:["为了保证总是能获取到最新状态，注意不要对返回的 ",(0,l.jsx)(e.code,{children:"state"})," 解构。"]}),"\n",(0,l.jsxs)(e.div,{className:"language-tsx",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"App"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// ❌ 不能解构 state，但可以解构 actions。"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" [{ "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"username"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"logout"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" }] "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"useStaticModel"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(userModel);"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// ✅ 这才是正确使用姿势。"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"logout"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" }] "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"useStaticModel"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(userModel);"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"useEffect"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(() "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".username;"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" []);"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h4,{id:"示例",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"}),"示例"]}),"\n",(0,l.jsxs)(e.p,{children:["如下 ",(0,l.jsx)(e.code,{children:"App"})," 组件消费了 ",(0,l.jsx)(e.code,{children:"userModel"})," 的状态，但没有直接在 JSX 里使用。可以发现，",(0,l.jsx)(e.code,{children:"userModel"})," 状态的改变没有必要引起组件重新渲染，这种情况可以使用 ",(0,l.jsx)(e.code,{children:"useStaticModel"})," 进行优化。"]}),"\n",(0,l.jsxs)(e.div,{className:"language-tsx",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"App"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"useStaticModel"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(userModel);"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"useEffect"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(() "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 统计 UV 数据"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"send"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'pageview'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { user"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".user });"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" [state]);"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">Hello</"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive info",children:[(0,l.jsx)(e.p,{className:"modern-directive-title",children:"更多参考"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsxs)(e.p,{children:["\n",(0,l.jsx)(e.a,{href:"/guides/topic-detail/model/use-model.html",children:"使用 Model"})]})})]})]})}var a=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(t,s)})):t(s)}},3512:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o}});var l=n("12151");function r(s){let e=Object.assign({div:"div",p:"p",code:"code"},s.components);return(0,l.jsxs)(e.div,{className:"modern-directive info",children:[(0,l.jsx)(e.p,{className:"modern-directive-title",children:"补充信息"}),(0,l.jsxs)(e.div,{className:"modern-directive-content",children:[(0,l.jsxs)(e.p,{children:["\n默认情况下，本节所有 API 的导出包名为：",(0,l.jsx)(e.code,{children:"@modern-js/runtime/model"}),"。"]}),(0,l.jsxs)(e.p,{children:["如果是在 Modern.js 以外单独集成 Reduck，导出包名为：",(0,l.jsx)(e.code,{children:"@modern-js-reduck/react"}),"。"]})]})]})}var o=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(r,s)})):r(s)}}}]);