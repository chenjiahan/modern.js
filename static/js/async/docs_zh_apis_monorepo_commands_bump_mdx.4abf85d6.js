(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_apis_monorepo_commands_bump_mdx"],{9503:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return c},toc:function(){return i},default:function(){return o}});var l=n("12151"),a=n("21447");let c={sidebar_position:4},i=[];function r(s){let e=Object.assign({div:"div",button:"button",pre:"pre",code:"code",span:"span",p:"p",a:"a"},(0,a.useMDXComponents)(),s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"Usage: modern bump [options]"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"使用变更集自动更新发布版本和变更日志"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"Options:"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  --canary       创建一个预发布版本进行测试 (default: false)"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  --preid "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"tag"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  在对预发布版本进行版本控制时指定标识符 (default: "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"next"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  --snapshot     创建一个特殊版本进行测试 (default: false)"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  -h, --help     display "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"help"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"command"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive info",children:[(0,l.jsx)(e.p,{className:"modern-directive-title",children:"INFO"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsxs)(e.p,{children:["\n",(0,l.jsx)(e.code,{children:"bump"})," 命令执行之前需要提前执行 ",(0,l.jsx)(e.a,{href:"/apis/monorepo/commands/change.html",children:(0,l.jsx)(e.code,{children:"change"})})," 命令添加 changeset。"]})})]}),"\n",(0,l.jsxs)(e.p,{children:["按 changeset 记录修改 ",(0,l.jsx)(e.code,{children:"package.json"})," 中的版本号， 同时生成 ",(0,l.jsx)(e.code,{children:"CHANGELOG.md"}),"："]}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"npx modern bump"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"\uD83E\uDD8B  All files have been updated. Review them and commit at your leisure"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"CHANGELOG.md"})," 示例内容如下："]}),"\n",(0,l.jsxs)(e.div,{className:"language-md",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)",fontStyle:"italic"},children:"# package-a"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)",fontStyle:"italic"},children:"## 0.1.1"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)",fontStyle:"italic"},children:"### Patch Changes"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"- test publish"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]})]})}var o=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,a.useMDXComponents)(),s.components);return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(r,s)})):r(s)}}}]);