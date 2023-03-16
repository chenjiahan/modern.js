(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_shared_nodeVersion_md"],{1589:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return c},toc:function(){return r},default:function(){return i}});var l=n("12151");let c=void 0,r=[];function a(s){let e=Object.assign({p:"p",a:"a",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",span:"span"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.p,{children:["在开始使用前，你需要安装 ",(0,l.jsx)(e.a,{href:"https://nodejs.org/",target:"_blank",rel:"nofollow",children:"Node.js"}),"，并保证 Node.js 版本不低于 14.17.6，",(0,l.jsx)(e.strong,{children:"我们推荐使用 Node.js 16 的 LTS 版本"}),"。"]}),"\n",(0,l.jsx)(e.p,{children:"你可以通过以下命令检查当前使用的 Node.js 版本："}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"node -v"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# v16.19.1"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["如果你当前的环境中尚未安装 Node.js，或是安装的版本低于 14.17.6，可以通过 ",(0,l.jsx)(e.a,{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"nofollow",children:"nvm"})," 或 ",(0,l.jsx)(e.a,{href:"https://github.com/Schniz/fnm",target:"_blank",rel:"nofollow",children:"fnm"})," 安装需要的版本。"]}),"\n",(0,l.jsx)(e.p,{children:"下面是通过 nvm 安装 Node.js 16 LTS 版本的例子："}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 安装 Node.js 16 的长期支持版本"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"nvm install 16 --lts"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 将刚安装的 Node.js 16 设置为默认版本"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"nvm "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"alias"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" default 16"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 切换到刚安装的 Node.js 16"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"nvm use 16"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive tip",children:[(0,l.jsx)(e.p,{className:"modern-directive-title",children:"nvm 和 fnm"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsx)(e.p,{children:"\nnvm 和 fnm 都是 Node.js 版本管理工具。相对来说，nvm 较为成熟和稳定，而 fnm 是使用 Rust 实现的，比 nvm 提供了更好的性能。"})})]}),"\n",(0,l.jsxs)(e.p,{children:["此外，在安装 nvm 或 fnm 后，然后只要仓库根目录下有内容为 ",(0,l.jsx)(e.code,{children:"lts/gallium"})," 的 ",(0,l.jsx)(e.code,{children:".nvmrc"})," 文件，进入这个仓库时就会自动安装或切换到正确的 Node.js 版本。"]})]})}var i=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(a,s)})):a(s)}}}]);