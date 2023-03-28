(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_troubleshooting_dependencies_mdx"],{56319:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return c},toc:function(){return l},title:function(){return o},default:function(){return t}});var r=n("12151"),i=n("21447");let c={sidebar_position:1},l=[{id:"如何查看项目里某个依赖实际安装的版本",text:"如何查看项目里某个依赖实际安装的版本？",depth:3},{id:"安装依赖时提示-the-engine-node-is-incompatible",text:'安装依赖时提示 The engine "node" is incompatible？',depth:3},{id:"升级依赖后出现-reactnode-类型错误",text:"升级依赖后出现 ReactNode 类型错误？",depth:3},{id:"执行-pnpm-install-之后控制台出现-peer-dependencies-相关-warning",text:"执行 pnpm install 之后，控制台出现 peer dependencies 相关 warning？",depth:3}],o="依赖安装问题";function a(e){let s=Object.assign({h1:"h1",a:"a",h3:"h3",p:"p",code:"code",strong:"strong",div:"div",button:"button",pre:"pre",hr:"hr",span:"span"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"依赖安装问题",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#依赖安装问题",children:"#"}),"依赖安装问题"]}),"\n",(0,r.jsxs)(s.h3,{id:"如何查看项目里某个依赖实际安装的版本",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#如何查看项目里某个依赖实际安装的版本",children:"#"}),"如何查看项目里某个依赖实际安装的版本？"]}),"\n",(0,r.jsxs)(s.p,{children:["可以使用包管理器自带的 ",(0,r.jsx)(s.code,{children:"ls"})," 命令来查看项目里依赖的版本。"]}),"\n",(0,r.jsx)(s.p,{children:"下面是一些基本的示例，详细用法请查看各个包管理器的文档。"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"npm / yarn"})}),"\n",(0,r.jsxs)(s.p,{children:["对于使用 npm 或 yarn 的项目，可以使用 ",(0,r.jsx)(s.code,{children:"npm ls"})," 命令。"]}),"\n",(0,r.jsxs)(s.p,{children:["比如执行 ",(0,r.jsx)(s.code,{children:"npm ls @modern-js/core"}),"，可以看到如下结果："]}),"\n",(0,r.jsxs)(s.div,{className:"language-text",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"project\n└─┬ @modern-js/app-tools@1.6.10\n  └── @modern-js/core@1.12.4\n"})})]})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"pnpm"})}),"\n",(0,r.jsxs)(s.p,{children:["对于使用 pnpm 的项目，可以使用 ",(0,r.jsx)(s.code,{children:"pnpm ls"})," 命令。"]}),"\n",(0,r.jsxs)(s.p,{children:["比如执行 ",(0,r.jsx)(s.code,{children:"pnpm ls @modern-js/core --depth Infinity"}),"，可以看到如下结果："]}),"\n",(0,r.jsxs)(s.div,{className:"language-text",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"devDependencies:\n@modern-js/app-tools 1.7.0\n└── @modern-js/core 1.13.0\n"})})]})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsxs)(s.h3,{id:"安装依赖时提示-the-engine-node-is-incompatible",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#安装依赖时提示-the-engine-node-is-incompatible",children:"#"}),'安装依赖时提示 The engine "node" is incompatible？']}),"\n",(0,r.jsx)(s.p,{children:"安装依赖时如果出现以下报错提示，说明当前环境使用的 Node.js 版本过低，需要升级 Node.js 到更高版本。"}),"\n",(0,r.jsxs)(s.div,{className:"language-bash",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"The engine "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"node"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" is incompatible with this module."})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Expected version "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'">=14.17.6"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:". Got "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"12.20.1"'})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["使用 Modern.js 时，建议使用 ",(0,r.jsx)(s.a,{href:"https://nodejs.org/download/release/latest-v14.x/",target:"_blank",rel:"noopener noreferrer",children:"Node.js 14.x"})," 或 ",(0,r.jsx)(s.a,{href:"https://nodejs.org/download/release/latest-v16.x/",target:"_blank",rel:"noopener noreferrer",children:"Node.js 16.x"})," 的最新版本。"]}),"\n",(0,r.jsxs)(s.p,{children:["如果当前环境的 Node.js 版本低于上述要求的版本，则可以使用 ",(0,r.jsx)(s.a,{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer",children:"nvm"})," 或 ",(0,r.jsx)(s.a,{href:"https://github.com/Schniz/fnm",target:"_blank",rel:"noopener noreferrer",children:"fnm"})," 等工具进行版本切换。"]}),"\n",(0,r.jsx)(s.p,{children:"下面是使用 nvm 的示例："}),"\n",(0,r.jsxs)(s.div,{className:"language-text",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"# 安装 Node.js v14\nnvm install 14\n\n# 切换到 Node 14\nnvm use 14\n\n# 将 Node 14 设置为默认版本\nnvm default 14\n"})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["在本地开发环境推荐使用 ",(0,r.jsx)(s.a,{href:"https://github.com/Schniz/fnm",target:"_blank",rel:"noopener noreferrer",children:"fnm"}),"，它的用法与 nvm 相似，但拥有比 nvm 更好的性能。"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsxs)(s.h3,{id:"升级依赖后出现-reactnode-类型错误",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#升级依赖后出现-reactnode-类型错误",children:"#"}),"升级依赖后出现 ReactNode 类型错误？"]}),"\n",(0,r.jsxs)(s.p,{children:["升级项目的依赖后，如果出现以下类型报错，说明项目中安装了错误的 ",(0,r.jsx)(s.code,{children:"@types/react"})," 版本。"]}),"\n",(0,r.jsxs)(s.div,{className:"language-bash",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"The types returned by "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'render()'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" are incompatible between these types."})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Type "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'React.ReactNode'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" is not assignable to "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"type"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'import(\"/node_modules/@types/react/index\").ReactNode'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Type "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'{}'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" is not assignable to "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"type"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ReactNode'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["出现这个问题的原因是 React 18 与 React 16/17 中的 ReactNode 类型定义不同，如果项目中出现多个不同 ",(0,r.jsx)(s.code,{children:"@types/react"})," 版本，就会出现 ReactNode 类型冲突，导致以上报错。"]}),"\n",(0,r.jsxs)(s.p,{children:["解决方法为将项目中的 ",(0,r.jsx)(s.code,{children:"@types/react"})," 和 ",(0,r.jsx)(s.code,{children:"@types/react-dom"})," 锁定在统一的版本上，比如 ",(0,r.jsx)(s.code,{children:"v17"}),"。"]}),"\n",(0,r.jsxs)(s.div,{className:"language-json",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"@types/react"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"^17"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"@types/react-dom"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"^17"'})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["关于锁定依赖版本的方法，请参考上方的 ",(0,r.jsx)(s.code,{children:"如何锁定项目中的某个依赖版本？"}),"。"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsxs)(s.h3,{id:"执行-pnpm-install-之后控制台出现-peer-dependencies-相关-warning",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#执行-pnpm-install-之后控制台出现-peer-dependencies-相关-warning",children:"#"}),"执行 pnpm install 之后，控制台出现 peer dependencies 相关 warning？"]}),"\n",(0,r.jsx)(s.p,{children:"出现该警告的原因是，某些三方 npm 包声明的 peer dependencies 版本范围与 Modern.js 中安装的版本范围不一致。"}),"\n",(0,r.jsx)(s.p,{children:"绝大多数情况下，peer dependencies 的警告不会影响项目运行，不需要额外进行处理，请忽略相关 warning。"})]})}var t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.useMDXComponents)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}}}]);