(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_troubleshooting_dependencies_mdx"],{99288:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return a},toc:function(){return i},default:function(){return t}});var r=s("12151"),d=s("23169"),c={sidebar_position:1},a="依赖安装问题",i=[{text:"如何查看项目里某个依赖实际安装的版本？",depth:3,id:"如何查看项目里某个依赖实际安装的版本？"},{text:'安装依赖时提示 The engine "node" is incompatible？',depth:3,id:'安装依赖时提示-the-engine-"node"-is-incompatible？'},{text:"升级依赖后出现 ReactNode 类型错误？",depth:3,id:"升级依赖后出现-reactnode-类型错误？"},{text:"执行 pnpm install 之后，控制台出现 peer dependencies 相关 warning？",depth:3,id:"执行-pnpm-install-之后，控制台出现-peer-dependencies-相关-warning？"}];function o(e){var n=Object.assign({h1:"h1",a:"a",h3:"h3",p:"p",code:"code",strong:"strong",div:"div",button:"button",pre:"pre",hr:"hr"},(0,d.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"依赖安装问题",children:["依赖安装问题",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#依赖安装问题",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"如何查看项目里某个依赖实际安装的版本？",children:["如何查看项目里某个依赖实际安装的版本？",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#如何查看项目里某个依赖实际安装的版本？",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["可以使用包管理器自带的 ",(0,r.jsx)(n.code,{children:"ls"})," 命令来查看项目里依赖的版本。"]}),"\n",(0,r.jsx)(n.p,{children:"下面是一些基本的示例，详细用法请查看各个包管理器的文档。"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"npm / yarn"})}),"\n",(0,r.jsxs)(n.p,{children:["对于使用 npm 或 yarn 的项目，可以使用 ",(0,r.jsx)(n.code,{children:"npm ls"})," 命令。"]}),"\n",(0,r.jsxs)(n.p,{children:["比如执行 ",(0,r.jsx)(n.code,{children:"npm ls @modern-js/core"}),"，可以看到如下结果："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{children:"project\n└─┬ @modern-js/app-tools@1.6.10\n  └── @modern-js/core@1.12.4\n"})})]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"pnpm"})}),"\n",(0,r.jsxs)(n.p,{children:["对于使用 pnpm 的项目，可以使用 ",(0,r.jsx)(n.code,{children:"pnpm ls"})," 命令。"]}),"\n",(0,r.jsxs)(n.p,{children:["比如执行 ",(0,r.jsx)(n.code,{children:"pnpm ls @modern-js/core --depth Infinity"}),"，可以看到如下结果："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{children:"devDependencies:\n@modern-js/app-tools 1.7.0\n└── @modern-js/core 1.13.0\n"})})]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:'安装依赖时提示-the-engine-\\"node\\"-is-incompatible？',children:['安装依赖时提示 The engine "node" is incompatible？',(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:'#安装依赖时提示-the-engine-\\"node\\"-is-incompatible？',children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"安装依赖时如果出现以下报错提示，说明当前环境使用的 Node.js 版本过低，需要升级 Node.js 到更高版本。"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:'The engine "node" is incompatible with this module.\n\nExpected version ">=14.17.6". Got "12.20.1"\n'})})]})}),"\n",(0,r.jsxs)(n.p,{children:["使用 Modern.js 时，建议使用 ",(0,r.jsx)(n.a,{href:"https://nodejs.org/download/release/latest-v14.x/",target:"_blank",rel:"noopener noreferrer",children:"Node.js 14.x"})," 或 ",(0,r.jsx)(n.a,{href:"https://nodejs.org/download/release/latest-v16.x/",target:"_blank",rel:"noopener noreferrer",children:"Node.js 16.x"})," 的最新版本。"]}),"\n",(0,r.jsxs)(n.p,{children:["如果当前环境的 Node.js 版本低于上述要求的版本，则可以使用 ",(0,r.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer",children:"nvm"})," 或 ",(0,r.jsx)(n.a,{href:"https://github.com/Schniz/fnm",target:"_blank",rel:"noopener noreferrer",children:"fnm"})," 等工具进行版本切换。"]}),"\n",(0,r.jsx)(n.p,{children:"下面是使用 nvm 的示例："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{children:"# 安装 Node.js v14\nnvm install 14\n\n# 切换到 Node 14\nnvm use 14\n\n# 将 Node 14 设置为默认版本\nnvm default 14\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["在本地开发环境推荐使用 ",(0,r.jsx)(n.a,{href:"https://github.com/Schniz/fnm",target:"_blank",rel:"noopener noreferrer",children:"fnm"}),"，它的用法与 nvm 相似，但拥有比 nvm 更好的性能。"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"升级依赖后出现-reactnode-类型错误？",children:["升级依赖后出现 ReactNode 类型错误？",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#升级依赖后出现-reactnode-类型错误？",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["升级项目的依赖后，如果出现以下类型报错，说明项目中安装了错误的 ",(0,r.jsx)(n.code,{children:"@types/react"})," 版本。"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"The types returned by 'render()' are incompatible between these types.\nType 'React.ReactNode' is not assignable to type 'import(\"/node_modules/@types/react/index\").ReactNode'.\nType '{}' is not assignable to type 'ReactNode'.\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["出现这个问题的原因是 React 18 与 React 16/17 中的 ReactNode 类型定义不同，如果项目中出现多个不同 ",(0,r.jsx)(n.code,{children:"@types/react"})," 版本，就会出现 ReactNode 类型冲突，导致以上报错。"]}),"\n",(0,r.jsxs)(n.p,{children:["解决方法为将项目中的 ",(0,r.jsx)(n.code,{children:"@types/react"})," 和 ",(0,r.jsx)(n.code,{children:"@types/react-dom"})," 锁定在统一的版本上，比如 ",(0,r.jsx)(n.code,{children:"v17"}),"。"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@types/react": "^17",\n  "@types/react-dom": "^17"\n}\n'})})]})}),"\n",(0,r.jsxs)(n.p,{children:["关于锁定依赖版本的方法，请参考上方的 ",(0,r.jsx)(n.code,{children:"如何锁定项目中的某个依赖版本？"}),"。"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"执行-pnpm-install-之后，控制台出现-peer-dependencies-相关-warning？",children:["执行 pnpm install 之后，控制台出现 peer dependencies 相关 warning？",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#执行-pnpm-install-之后，控制台出现-peer-dependencies-相关-warning？",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"出现该警告的原因是，某些三方 npm 包声明的 peer dependencies 版本范围与 Modern.js 中安装的版本范围不一致。"}),"\n",(0,r.jsx)(n.p,{children:"绝大多数情况下，peer dependencies 的警告不会影响项目运行，不需要额外进行处理，请忽略相关 warning。"})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);