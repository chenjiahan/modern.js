(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_topic-detail_model_test-model_mdx"],{57358:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return o},toc:function(){return l},title:function(){return i},default:function(){return t}});var r=n("12151");let o={sidebar_position:9,title:"测试 Model"},l=[],i="测试 Model";function c(s){let e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",button:"button",pre:"pre",span:"span"},s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"测试-model",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#测试-model",children:"#"}),"测试 Model"]}),"\n",(0,r.jsxs)(e.p,{children:["好的测试对代码的稳健性至关重要。下面以 ",(0,r.jsx)(e.a,{href:"/guides/topic-detail/model/quick-start.html",children:"快速上手"})," 的 ",(0,r.jsx)(e.code,{children:"countModel"})," 为例，演示在 Modern.js 中，如何对 Model 进行单元测试。"]}),"\n",(0,r.jsxs)(e.p,{children:["使用测试功能，需要先开启该功能。在项目根目录下，执行 ",(0,r.jsx)(e.code,{children:"pnpm run new"}),"，进行如下选择："]}),"\n",(0,r.jsxs)(e.div,{className:"language-bash",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" 请选择你想要的操作 启用可选功能"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" 启用可选功能 启用「单元测试 / 集成测试」功能"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsx)(e.p,{children:"即可开启测试功能支持。"}),"\n",(0,r.jsxs)(e.p,{children:["新增 ",(0,r.jsx)(e.code,{children:"count.test.ts"})," 文件，代码如下："]}),"\n",(0,r.jsxs)(e.div,{className:"language-ts",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { createStore } "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime/testing'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" countModel "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./count'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"describe"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'test model'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"it"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'count value should plus one after add'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"store"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"createStore"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"add"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" }] "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"store"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".use"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(countModel);"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"expect"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(state)"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".toEqual"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({ value"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" });"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"add"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"expect"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"store"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".use"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(countModel)["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"])"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".toEqual"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({ value"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" });"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  });"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.div,{className:"modern-directive info",children:[(0,r.jsx)(e.p,{className:"modern-directive-title",children:"INFO"}),(0,r.jsx)(e.div,{className:"modern-directive-content",children:(0,r.jsxs)(e.p,{children:["\n这里使用的 ",(0,r.jsx)(e.a,{href:"/apis/app/runtime/model/create-store.html",children:(0,r.jsx)(e.code,{children:"createStore"})})," 是从 ",(0,r.jsx)(e.code,{children:"@modern-js/runtime/testing"})," 导入的，内部会使用 ",(0,r.jsx)(e.a,{href:"/configure/app/runtime/state.html",children:(0,r.jsx)(e.code,{children:"runtime.state"})})," 的配置去创建 ",(0,r.jsx)(e.code,{children:"store"}),"。"]})})]}),"\n",(0,r.jsxs)(e.p,{children:["在测试用例里，我们新建一个 ",(0,r.jsx)(e.code,{children:"store"})," 来挂载 ",(0,r.jsx)(e.code,{children:"countModel"}),"，通过 ",(0,r.jsx)(e.code,{children:"store.use"})," 获取 ",(0,r.jsx)(e.code,{children:"countModel"})," 的 State 和 Actions。然后调用 ",(0,r.jsx)(e.code,{children:"add"})," Action 更新状态，并断言更新后的状态值。"]}),"\n",(0,r.jsxs)(e.p,{children:["执行 ",(0,r.jsx)(e.code,{children:"pnpm run test"})," 命令，触发测试用例的执行。"]})]})}var t=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(c,s)})):c(s)}}}]);