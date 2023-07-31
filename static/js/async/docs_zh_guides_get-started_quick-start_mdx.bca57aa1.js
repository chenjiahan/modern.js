(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_get-started_quick-start_mdx"],{19161:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var r,d=s("15169"),i=s("43932"),t=s("9880"),c=s("23169");function a(e){var n=Object.assign({p:"p",code:"code"},(0,c.useMDXComponents)(),e.components);return(0,t.jsxs)(n.p,{children:["本地验证完成后，可以将 ",(0,t.jsx)(n.code,{children:"dist/"})," 下的产物整理成服务器需要的结构，进行部署。"]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fcomponents%2Fdeploy.mdx"]={toc:[],title:"",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,(0,i._)((0,d._)({},e),{children:(0,t.jsx)(a,(0,d._)({},e))})):a(e)}},18174:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return p}});var r,d=s("15169"),i=s("43932"),t=s("9880"),c=s("23169"),a=s("13581"),l=s("22461"),o=s("98736"),h=s("19161");function j(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",blockquote:"blockquote"},(0,c.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"快速上手",children:["快速上手",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#快速上手",children:"#"})]}),"\n",(0,t.jsxs)(n.h2,{id:"环境准备",children:["环境准备",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#环境准备",children:"#"})]}),"\n","\n",(0,t.jsx)(a.default,{}),"\n",(0,t.jsxs)(n.h2,{id:"安装",children:["安装",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#安装",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Modern.js 提供了 ",(0,t.jsx)(n.code,{children:"@modern-js/create"})," 工具来创建项目，不需要全局安装，直接使用 ",(0,t.jsx)(n.code,{children:"npx"})," 按需运行即可。"]}),"\n",(0,t.jsx)(n.p,{children:"你可以在已有的空目录来创建项目："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir myapp && cd myapp\nnpx @modern-js/create@latest\n"})}),"\n",(0,t.jsx)(n.p,{children:"也可以直接用新目录创建项目："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest myapp\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"初始化项目",children:["初始化项目",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#初始化项目",children:"#"})]}),"\n","\n",(0,t.jsx)(l.default,{}),"\n",(0,t.jsxs)(n.h2,{id:"启动项目",children:["启动项目",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#启动项目",children:"#"})]}),"\n","\n",(0,t.jsx)(o.default,{}),"\n",(0,t.jsxs)(n.h2,{id:"使用配置",children:["使用配置",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用配置",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["通过 ",(0,t.jsx)(n.code,{children:"@modern-js/create"})," 创建的 Modern.js 项目中，会默认生成 ",(0,t.jsx)(n.code,{children:"modern.config.ts"})," 文件。"]}),"\n",(0,t.jsx)(n.p,{children:"你可以通过该配置文件修改配置，覆盖 Modern.js 的默认行为。例如添加如下配置，开启 SSR："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  runtime: {\n    router: true,\n  },\n  server: {\n    ssr: true,\n  },\n  plugins: [appTools()],\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["重新执行 ",(0,t.jsx)(n.code,{children:"pnpm run dev"}),"，在浏览器 Network 菜单中，可以发现项目已经在服务端完成了页面渲染。"]}),"\n",(0,t.jsxs)(n.h2,{id:"核心-npm-包",children:["核心 npm 包",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#核心-npm-包",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["在新创建的工程中，默认会安装 ",(0,t.jsx)(n.code,{children:"@modern-js/app-tools"})," npm 包，它是 Modern.js 框架的核心包，主要提供以下能力："]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["提供 ",(0,t.jsx)(n.code,{children:"modern dev"}),", ",(0,t.jsx)(n.code,{children:"modern build"})," 等常用的 CLI 命令。"]}),"\n",(0,t.jsx)(n.li,{children:"集成 Modern.js Core，提供配置解析、插件加载等能力。"}),"\n",(0,t.jsx)(n.li,{children:"集成 Modern.js Builder，提供构建能力。"}),"\n",(0,t.jsx)(n.li,{children:"集成 Modern.js Server，提供开发和生产服务器相关能力。"}),"\n",(0,t.jsxs)(n.li,{children:["集成一些最为常用的插件，比如 ",(0,t.jsx)(n.code,{children:"plugin-lint"}),"、",(0,t.jsx)(n.code,{children:"plugin-data-loader"})," 等。"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@modern-js/app-tools"})," 是基于 Modern.js 的插件体系实现的，本质上是一个插件，因此你需要在配置文件的 ",(0,t.jsx)(n.code,{children:"plugins"})," 字段中注册 ",(0,t.jsx)(n.code,{children:"appTools"}),"："]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  plugins: [appTools()],\n});\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"构建项目",children:["构建项目",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#构建项目",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["在项目中执行 ",(0,t.jsx)(n.code,{children:"pnpm run build"})," 即可构建项目生产环境产物："]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ pnpm run build\n\n> modern build\n\ninfo    Create a production build...\n\ninfo    File sizes after production build:\n\n  File                                      Size         Gzipped\n  dist/static/js/lib-corejs.ffeb7fb8.js     214.96 kB    67.23 kB\n  dist/static/js/lib-react.09721b5c.js      152.61 kB    49.02 kB\n  dist/static/js/218.102e2f39.js            85.45 kB     28.5 kB\n  dist/static/js/lib-babel.a7bba875.js      11.93 kB     3.95 kB\n  dist/html/main/index.html                 5.84 kB      2.57 kB\n  dist/static/js/main.3568a38e.js           3.57 kB      1.44 kB\n  dist/static/css/async/304.c3c481a5.css    2.62 kB      874 B\n  dist/asset-manifest.json                  1.48 kB      349 B\n  dist/static/js/async/304.c45706bc.js      1.4 kB       575 B\n  dist/static/js/async/509.fcb06e14.js      283 B        230 B\n\n Client ✔ done in 3.57s\n"})}),"\n",(0,t.jsxs)(n.p,{children:["构建产物默认生成到 ",(0,t.jsx)(n.code,{children:"dist/"}),"，目录结构如下："]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"dist\n├── html\n│\xa0\xa0 └── main\n├── modern.config.json\n├── route.json\n├── routes-manifest.json\n└── static\n    ├── css\n    └── js\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["如果你需要自定义构建产物的目录，请参考 ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/guide/basic/output-files.html",target:"_blank",rel:"noopener noreferrer",children:"构建产物目录"}),"。"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"本地验证",children:["本地验证",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#本地验证",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["在项目中执行 ",(0,t.jsx)(n.code,{children:"pnpm run serve"})," 即可在本地验证构建产物是否正常运行："]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ pnpm run serve\n\n> modern serve\n\nStarting the modern server...\ninfo    App running at:\n\n  > Local:    http://localhost:8080/\n  > Network:  http://192.168.0.1:8080/\n"})}),"\n",(0,t.jsxs)(n.p,{children:["在浏览器中打开 ",(0,t.jsx)(n.code,{children:"http://localhost:8000/"}),"，内容应该和 ",(0,t.jsx)(n.code,{children:"pnpm run dev"})," 时一致。"]}),"\n",(0,t.jsxs)(n.h2,{id:"部署",children:["部署",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#部署",children:"#"})]}),"\n","\n",(0,t.jsx)(h.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguides%2Fget-started%2Fquick-start.mdx"]={toc:[{text:"环境准备",id:"环境准备",depth:2},{text:"安装",id:"安装",depth:2},{text:"初始化项目",id:"初始化项目",depth:2},{text:"启动项目",id:"启动项目",depth:2},{text:"使用配置",id:"使用配置",depth:2},{text:"核心 npm 包",id:"核心-npm-包",depth:2},{text:"构建项目",id:"构建项目",depth:2},{text:"本地验证",id:"本地验证",depth:2},{text:"部署",id:"部署",depth:2}],title:"快速上手",frontmatter:{title:"快速上手",sidebar_position:2}};var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,(0,i._)((0,d._)({},e),{children:(0,t.jsx)(j,(0,d._)({},e))})):j(e)}}}]);