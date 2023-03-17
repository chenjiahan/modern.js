(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_topic-detail_generator_plugin_api_hook_afterForged_mdx"],{58879:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var r in s)Object.defineProperty(e,r,{enumerable:!0,get:s[r]})}(s,{frontmatter:function(){return i},toc:function(){return o},title:function(){return l},default:function(){return c}});var n=r("12151");let i={sidebar_position:2},o=[{id:"func",text:"func",depth:2},{id:"api",text:"api",depth:3},{id:"inputdata",text:"inputData",depth:3}],l="AfterForged";function t(e){let s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",button:"button",pre:"pre",span:"span",h2:"h2",h3:"h3"},e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"afterforged",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#afterforged",children:"#"}),"AfterForged"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"afterForged"})," 函数为生成器插件生命周期函数，其通常用于定义安装依赖、Git 等操作，这些操作将会在 ",(0,n.jsx)(s.code,{children:"onForged"})," 函数执行完成后进行。"]}),"\n",(0,n.jsx)(s.p,{children:"该方法可直接在 context 上获取。"}),"\n",(0,n.jsx)(s.p,{children:"其类型定义为："}),"\n",(0,n.jsxs)(s.div,{className:"language-ts",children:[(0,n.jsx)(s.div,{className:""}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"PluginAfterForgedFunc"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  api"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"AfterForgedAPI"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  inputData"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Record"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"unknown"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Promise"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"void"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"IPluginContext"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"afterForged"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (func"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"PluginAfterForgedFunc"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"void"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(s.h2,{id:"func",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#func",children:"#"}),"func"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"afterForged"})," 参数是一个回调函数，函数参数为 ",(0,n.jsx)(s.code,{children:"api"})," 和 ",(0,n.jsx)(s.code,{children:"inputData。"})]}),"\n",(0,n.jsxs)(s.h3,{id:"api",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"}),"api"]}),"\n",(0,n.jsxs)(s.p,{children:["在 ",(0,n.jsx)(s.code,{children:"afterForged"})," 生命周期中支持的函数列表，具体可查看 ",(0,n.jsx)(s.a,{href:"/guides/topic-detail/generator/plugin/api/git/isInGitRepo.html",children:"Git API"})," 和 ",(0,n.jsx)(s.a,{href:"/guides/topic-detail/generator/plugin/api/npm/install.html",children:"NPM API"}),"。"]}),"\n",(0,n.jsxs)(s.h3,{id:"inputdata",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#inputdata",children:"#"}),"inputData"]}),"\n",(0,n.jsx)(s.p,{children:"当前用户输入，可用于获取用户当前的输入信息及配置信息。"})]})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=e.components||{};return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(t,e)})):t(e)}}}]);