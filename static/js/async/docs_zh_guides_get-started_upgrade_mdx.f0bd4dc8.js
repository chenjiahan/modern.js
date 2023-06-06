(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_get-started_upgrade_mdx"],{3606:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var s=r("9880"),d=r("23169");function a(e){var n=Object.assign({p:"p",a:"a"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(n.p,{children:["根据官网 ",(0,s.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern.js/releases",target:"_blank",rel:"noopener noreferrer",children:"Release Note"}),"，开发者也可以手动将项目升级到想要的版本。"]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},418:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return c},toc:function(){return t},default:function(){return h}});var s=r("9880"),d=r("23169"),a=r.ir(r("3606")),i={title:"升级",sidebar_position:3},c="升级",t=[{text:"通过命令行升级",depth:2,id:"通过命令行升级"},{text:"指定版本升级",depth:2,id:"指定版本升级"},{text:"锁定子依赖",depth:2,id:"锁定子依赖"},{text:"pnpm",depth:3,id:"pnpm"},{text:"Yarn",depth:3,id:"yarn"},{text:"Npm",depth:3,id:"npm"}];function o(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre",strong:"strong",div:"div",h3:"h3"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"升级",children:["升级",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#升级",children:"#"})]}),"\n",(0,s.jsxs)(n.h2,{id:"通过命令行升级",children:["通过命令行升级",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#通过命令行升级",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js 提供了 ",(0,s.jsx)(n.code,{children:"upgrade"})," 命令支持项目升级到最新的 Modern.js 版本。"]}),"\n",(0,s.jsxs)(n.p,{children:["在项目中执行 ",(0,s.jsx)(n.code,{children:"pnpm run upgrade"}),"："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ pnpm run upgrade\n\n> modern upgrade\n\n[INFO] [项目类型]: 应用\n[INFO] [Modern.js 最新版本]: 2.0.0\n[INFO] 已更新 Modern.js 依赖至最新版本!\n"})}),"\n",(0,s.jsxs)(n.p,{children:["可以看到项目 ",(0,s.jsx)(n.code,{children:"package.json"})," 中的依赖已经更改到最新。"]}),"\n",(0,s.jsxs)(n.h2,{id:"指定版本升级",children:["指定版本升级",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#指定版本升级",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js 所有的官方包目前都使用",(0,s.jsx)(n.strong,{children:"统一版本号"}),"进行发布。"]}),"\n","\n",(0,s.jsx)(a.default,{}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsx)(n.p,{children:"当升级时，需要对 Modern.js 官方提供的所有包做统一升级，而不是升级单个依赖。"}),"\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"锁定子依赖",children:["锁定子依赖",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#锁定子依赖",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"当项目某个子依赖出现问题，而 Modern.js 无法立即更新时，可以使用包管理器锁定子依赖版本。"}),"\n",(0,s.jsxs)(n.h3,{id:"pnpm",children:["pnpm",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pnpm",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["对于使用 pnpm 的项目，请在",(0,s.jsx)(n.strong,{children:"项目根目录"}),"的 ",(0,s.jsx)(n.code,{children:"package.json"})," 中添加以下配置，然后重新执行 ",(0,s.jsx)(n.code,{children:"pnpm install"}),"："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "pnpm": {\n    "overrides": {\n      "package-name": "^1.0.0"\n    }\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"yarn",children:["Yarn",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#yarn",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["对于使用 Yarn 的项目，请在",(0,s.jsx)(n.strong,{children:"项目根目录"}),"的 ",(0,s.jsx)(n.code,{children:"package.json"})," 中添加以下配置，然后重新执行 ",(0,s.jsx)(n.code,{children:"yarn install"}),"："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "resolutions": {\n    "package-name": "^1.0.0"\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"npm",children:["Npm",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#npm",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["对于使用 Npm 的项目，请在",(0,s.jsx)(n.strong,{children:"项目根目录"}),"的 ",(0,s.jsx)(n.code,{children:"package.json"})," 中添加以下配置，然后重新执行 ",(0,s.jsx)(n.code,{children:"npm install"}),"："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "overrides": {\n    "package-name": "^1.0.0"\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["对于 Monorepo 仓库，只能在项目根目录的 ",(0,s.jsx)(n.code,{children:"package.json"})," 中锁定依赖版本，并且会影响 Monorepo 中的所有 package。"]}),"\n"]})]})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);