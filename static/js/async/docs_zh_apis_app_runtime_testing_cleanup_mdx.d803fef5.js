(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_apis_app_runtime_testing_cleanup_mdx"],{28880:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return i},toc:function(){return l},title:function(){return a},default:function(){return o}});var r=n("12151");let i={title:"cleanup",sidebar_position:3},l=[{id:"使用姿势",text:"使用姿势",depth:2},{id:"函数签名",text:"函数签名",depth:2},{id:"示例",text:"示例",depth:2}],a="cleanup";function c(s){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",span:"span",strong:"strong"},s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"cleanup",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#cleanup",children:"#"}),"cleanup"]}),"\n",(0,r.jsx)(e.p,{children:"用于卸载掉当前已渲染的所有组件。"}),"\n",(0,r.jsxs)(e.h2,{id:"使用姿势",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"}),"使用姿势"]}),"\n",(0,r.jsxs)(e.div,{className:"language-ts",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { cleanup } "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modenr-js/runtime/testing'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.h2,{id:"函数签名",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#函数签名",children:"#"}),"函数签名"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"function cleanup(): void"})}),"\n",(0,r.jsxs)(e.h2,{id:"示例",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"}),"示例"]}),"\n",(0,r.jsxs)(e.div,{className:"modern-directive info",children:[(0,r.jsx)(e.p,{className:"modern-directive-title",children:"INFO"}),(0,r.jsx)(e.div,{className:"modern-directive-content",children:(0,r.jsxs)(e.p,{children:["\n请注意，如果你使用的测试框架支持 afterEach，并且它被注入到你的测试环境中（如 mocha、Jest 和 Jasmine），",(0,r.jsxs)(e.strong,{children:["会默认在 afterEach 钩子里执行 ",(0,r.jsx)(e.code,{children:"cleanup"})]}),"。否则，你将需要在每次测试后进行手动清理。"]})})]}),"\n",(0,r.jsxs)(e.p,{children:["例如，如果你使用",(0,r.jsx)(e.a,{href:"https://github.com/avajs/ava",target:"_blank",rel:"nofollow",children:"ava"}),"测试框架，那么你需要像这样使用 test.afterEach 钩子。"]}),"\n",(0,r.jsxs)(e.div,{className:"language-tsx",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { cleanup"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" render } "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime/testing'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" test "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ava'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"test"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".afterEach"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(cleanup);"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"test"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'renders into document'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"render"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(<"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" />);"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// ..."})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// ... more tests ..."})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]})]})}var o=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(c,s)})):c(s)}}}]);