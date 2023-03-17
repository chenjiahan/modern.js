(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_get-started_quick-start_mdx"],{72835:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i}});var l=n("12151");function r(s){let e=Object.assign({p:"p",a:"a",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",span:"span"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.p,{children:["在开始使用前，你需要安装 ",(0,l.jsx)(e.a,{href:"https://nodejs.org/",target:"_blank",rel:"nofollow",children:"Node.js"}),"，并保证 Node.js 版本不低于 14.17.6，",(0,l.jsx)(e.strong,{children:"我们推荐使用 Node.js 16 的 LTS 版本"}),"。"]}),"\n",(0,l.jsx)(e.p,{children:"你可以通过以下命令检查当前使用的 Node.js 版本："}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"node -v"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# v16.19.1"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["如果你当前的环境中尚未安装 Node.js，或是安装的版本低于 14.17.6，可以通过 ",(0,l.jsx)(e.a,{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"nofollow",children:"nvm"})," 或 ",(0,l.jsx)(e.a,{href:"https://github.com/Schniz/fnm",target:"_blank",rel:"nofollow",children:"fnm"})," 安装需要的版本。"]}),"\n",(0,l.jsx)(e.p,{children:"下面是通过 nvm 安装 Node.js 16 LTS 版本的例子："}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 安装 Node.js 16 的长期支持版本"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"nvm install 16 --lts"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 将刚安装的 Node.js 16 设置为默认版本"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"nvm "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"alias"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" default 16"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 切换到刚安装的 Node.js 16"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"nvm use 16"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive tip",children:[(0,l.jsx)(e.p,{className:"modern-directive-title",children:"nvm 和 fnm"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsx)(e.p,{children:"\nnvm 和 fnm 都是 Node.js 版本管理工具。相对来说，nvm 较为成熟和稳定，而 fnm 是使用 Rust 实现的，比 nvm 提供了更好的性能。"})})]}),"\n",(0,l.jsxs)(e.p,{children:["此外，在安装 nvm 或 fnm 后，然后只要仓库根目录下有内容为 ",(0,l.jsx)(e.code,{children:"lts/gallium"})," 的 ",(0,l.jsx)(e.code,{children:".nvmrc"})," 文件，进入这个仓库时就会自动安装或切换到正确的 Node.js 版本。"]})]})}var i=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(r,s)})):r(s)}},72700:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i}});var l=n("12151");function r(s){let e=Object.assign({p:"p",code:"code",div:"div",button:"button",pre:"pre",span:"span"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.p,{children:["在项目中执行 ",(0,l.jsx)(e.code,{children:"pnpm run dev"})," 即可启动项目："]}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"$ pnpm run dev"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" modern dev"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"info    Starting dev server..."})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"info    App running at:"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Local:    http://localhost:8080/"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Network:  http://192.168.0.1:8080/"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Client ✔ "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"done"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"in"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" 76.10ms"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["在浏览器中打开 ",(0,l.jsx)(e.code,{children:"http://localhost:8000/"}),"，可以看到页面内容。"]})]})}var i=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(r,s)})):r(s)}},71034:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i}});var l=n("12151");function r(s){let e=Object.assign({p:"p",code:"code"},s.components);return(0,l.jsxs)(e.p,{children:["本地验证完成后，可以将 ",(0,l.jsx)(e.code,{children:"dist/"})," 下的产物整理成服务器需要的结构，进行部署。"]})}var i=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(r,s)})):r(s)}},48934:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i}});var l=n("12151");function r(s){let e=Object.assign({p:"p",div:"div",button:"button",pre:"pre",code:"code",span:"span"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.p,{children:"Modern.js 生成器会提供一个可交互的问答界面，根据结果初始化项目，按照默认的选择进行初始化："}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" 请选择你想创建的工程类型：Web 应用"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" 请选择开发语言：TS"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" 请选择包管理工具：pnpm"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(e.p,{children:"在生成项目后，Modern.js 会自动安装依赖、创建 git 仓库。"}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"[INFO] 依赖自动安装成功"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"[INFO] git 仓库初始化成功"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"[INFO] 创建成功！"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"可在新项目的目录下运行以下命令："})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm run dev          "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 按开发环境的要求，运行和调试项目"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm run build        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 按生产环境的要求，构建项目"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm run serve        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 按生产环境的要求，运行项目"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm run lint         "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 检查和修复所有代码"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm run new          "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 继续创建更多项目要素，比如应用入口"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive note",children:[(0,l.jsx)(e.p,{className:"modern-directive-title",children:"NOTE"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsx)(e.p,{children:"\nModern.js 生成器除了在项目初始化时工作外，也能在后续研发中生成项目各种粒度的模块，并非一用即抛开。"})})]}),"\n",(0,l.jsx)(e.p,{children:"现在，项目结构如下："}),"\n",(0,l.jsxs)(e.div,{className:"language-text",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:".\n├── node_modules\n├── src\n│   ├── modern-app-env.d.ts\n│   └── routes\n│       ├── index.css\n│       ├── layout.tsx\n│       └── page.tsx\n├── modern.config.ts\n├── package.json\n├── pnpm-lock.yaml\n├── README.md\n└── tsconfig.json\n"})})]})]})]})}var i=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(r,s)})):r(s)}},84523:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return c}});var l=n("12151"),r=n.ir(n("72835"));function i(s){let e=Object.assign({h3:"h3",a:"a",p:"p",div:"div",button:"button",pre:"pre",code:"code",span:"span"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.h3,{id:"nodejs",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#nodejs",children:"#"}),"Node.js"]}),"\n","\n",(0,l.jsx)(r.default,{}),"\n",(0,l.jsxs)(e.h3,{id:"pnpm",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#pnpm",children:"#"}),"pnpm"]}),"\n",(0,l.jsxs)(e.p,{children:["推荐使用 ",(0,l.jsx)(e.a,{href:"https://pnpm.io/installation",target:"_blank",rel:"nofollow",children:"pnpm"})," 来管理依赖："]}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"npm install -g pnpm@7"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive note",children:[(0,l.jsx)(e.p,{className:"modern-directive-title",children:"NOTE"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsxs)(e.p,{children:["\nModern.js 同样支持使用 ",(0,l.jsx)(e.code,{children:"yarn"}),"、",(0,l.jsx)(e.code,{children:"npm"})," 进行依赖管理。"]})})]})]})}var c=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(i,s)})):i(s)}},7388:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return o},toc:function(){return t},title:function(){return d},default:function(){return x}});var l=n("12151"),r=n.ir(n("84523")),i=n.ir(n("48934")),c=n.ir(n("72700")),a=n.ir(n("71034"));let o={title:"快速上手",sidebar_position:2},t=[{id:"环境准备",text:"环境准备",depth:2},{id:"安装",text:"安装",depth:2},{id:"初始化项目",text:"初始化项目",depth:2},{id:"启动项目",text:"启动项目",depth:2},{id:"使用配置",text:"使用配置",depth:2},{id:"构建项目",text:"构建项目",depth:2},{id:"本地验证",text:"本地验证",depth:2},{id:"部署",text:"部署",depth:2}],d="快速上手";function h(s){let e=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",div:"div",button:"button",pre:"pre",span:"span"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.h1,{id:"快速上手",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#快速上手",children:"#"}),"快速上手"]}),"\n",(0,l.jsxs)(e.h2,{id:"环境准备",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#环境准备",children:"#"}),"环境准备"]}),"\n","\n",(0,l.jsx)(r.default,{}),"\n",(0,l.jsxs)(e.h2,{id:"安装",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#安装",children:"#"}),"安装"]}),"\n",(0,l.jsxs)(e.p,{children:["Modern.js 提供了 ",(0,l.jsx)(e.code,{children:"@modern-js/create"})," 生成器来创建项目，不要全局安装，使用 ",(0,l.jsx)(e.code,{children:"npx"})," 按需运行。"]}),"\n",(0,l.jsx)(e.p,{children:"可以使用已有的空目录来创建项目："}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"mkdir myapp "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" myapp"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"npx @modern-js/create"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(e.p,{children:"也可以直接用新目录创建项目："}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"npx @modern-js/create myapp"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h2,{id:"初始化项目",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#初始化项目",children:"#"}),"初始化项目"]}),"\n","\n",(0,l.jsx)(i.default,{}),"\n",(0,l.jsxs)(e.h2,{id:"启动项目",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#启动项目",children:"#"}),"启动项目"]}),"\n","\n",(0,l.jsx)(c.default,{}),"\n",(0,l.jsxs)(e.h2,{id:"使用配置",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用配置",children:"#"}),"使用配置"]}),"\n",(0,l.jsxs)(e.p,{children:["通过生成器创建的 Modern.js 项目中，存在 ",(0,l.jsx)(e.code,{children:"modern.config.ts"})," 文件。"]}),"\n",(0,l.jsx)(e.p,{children:"可以通过配置文件来开启功能，或覆盖 Modern.js 的默认行为。例如添加如下配置，开启 SSR："}),"\n",(0,l.jsxs)(e.div,{className:"language-ts",children:[(0,l.jsx)(e.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" appTools"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { defineConfig } "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/app-tools'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  runtime"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    router"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    state"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  server"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ssr"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  plugins"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"appTools"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()]"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["重新执行 ",(0,l.jsx)(e.code,{children:"pnpm run dev"}),"，在浏览器 Network 菜单中，可以发现项目已经在服务端完成了页面渲染。"]}),"\n",(0,l.jsxs)(e.h2,{id:"构建项目",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#构建项目",children:"#"}),"构建项目"]}),"\n",(0,l.jsxs)(e.p,{children:["在项目中执行 ",(0,l.jsx)(e.code,{children:"pnpm run build"})," 即可构建项目生产环境产物："]}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"$ pnpm run build"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" modern build"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"info    Create a production build..."})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"info    File sizes after production build:"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  File                                      Size         Gzipped"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  dist/static/js/lib-corejs.ffeb7fb8.js     214.96 kB    67.23 kB"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  dist/static/js/lib-react.09721b5c.js      152.61 kB    49.02 kB"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  dist/static/js/218.102e2f39.js            85.45 kB     28.5 kB"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  dist/static/js/lib-babel.a7bba875.js      11.93 kB     3.95 kB"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  dist/html/main/index.html                 5.84 kB      2.57 kB"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  dist/static/js/main.3568a38e.js           3.57 kB      1.44 kB"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  dist/static/css/async/304.c3c481a5.css    2.62 kB      874 B"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  dist/asset-manifest.json                  1.48 kB      349 B"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  dist/static/js/async/304.c45706bc.js      1.4 kB       575 B"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  dist/static/js/async/509.fcb06e14.js      283 B        230 B"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Client ✔ "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"done"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"in"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" 3.57s"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["构建产物默认生成到 ",(0,l.jsx)(e.code,{children:"dist/"}),"，目录结构如下："]}),"\n",(0,l.jsxs)(e.div,{className:"language-text",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:".\n├── asset-manifest.json\n├── html\n│   └── main\n├── loader-routes\n│   └── main\n├── modern.config.json\n├── route.json\n└── static\n    ├── css\n    └── js\n"})})]})]}),"\n",(0,l.jsxs)(e.h2,{id:"本地验证",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#本地验证",children:"#"}),"本地验证"]}),"\n",(0,l.jsxs)(e.p,{children:["在项目中执行 ",(0,l.jsx)(e.code,{children:"pnpm run serve"})," 即可在本地验证构建产物是否正常运行："]}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"$ pnpm run serve"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" modern serve"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"Starting the modern server..."})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"info    App running at:"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Local:    http://localhost:8080/"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Network:  http://192.168.0.1:8080/"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["在浏览器中打开 ",(0,l.jsx)(e.code,{children:"http://localhost:8000/"}),"，内容应该和 ",(0,l.jsx)(e.code,{children:"pnpm run dev"})," 时一致。"]}),"\n",(0,l.jsxs)(e.h2,{id:"部署",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#部署",children:"#"}),"部署"]}),"\n","\n",(0,l.jsx)(a.default,{})]})}var x=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(h,s)})):h(s)}}}]);