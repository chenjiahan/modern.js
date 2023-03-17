(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_advanced-features_rspack-start_mdx"],{5638:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return i}});var r=n("12151"),c=n("21447");function a(e){let s=Object.assign({div:"div",p:"p",a:"a"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(s.div,{className:"modern-directive tip",children:[(0,r.jsx)(s.p,{className:"modern-directive-title",children:"什么是 Rspack"}),(0,r.jsxs)(s.div,{className:"modern-directive-content",children:[(0,r.jsxs)(s.p,{children:["\n",(0,r.jsx)(s.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack"})," 是一个基于 Rust 的高性能 Web 构建工具，具备与 Webpack 生态系统的互操作性，可以被 Webpack 项目低成本集成，并提供更好的构建性能。"]}),(0,r.jsx)(s.p,{children:"相较于 Webpack，Rspack 的构建性能有明显提升，除了 Rust 带来的语言优势，这也来自于它的并行架构和增量编译等特性。经过 benchmark 验证，Rspack 可以带来 5 ～ 10 倍编译性能的提升。"})]})]})}var i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,c.useMDXComponents)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},43856:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return i}});var r=n("12151"),c=n("21447");function a(e){let s=Object.assign({div:"div",button:"button",pre:"pre",code:"code",span:"span"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(s.div,{className:"language-bash",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"$ npx @modern-js/create myapp"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" 请选择你想创建的工程类型：Web 应用"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" 请选择开发语言：TS"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" 请选择包管理工具：pnpm"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" 请选择构建工具：Rspack"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]})}var i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,c.useMDXComponents)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},34084:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return l},toc:function(){return t},title:function(){return o},default:function(){return p}});var r=n("12151"),c=n("21447"),a=n.ir(n("5638")),i=n.ir(n("43856"));let l={title:"使用 Rspack",sidebar_position:1},t=[{id:"初始化-rspack-项目",text:"初始化 Rspack 项目",depth:2},{id:"从-webpack-迁移至-rspack",text:"从 webpack 迁移至 Rspack",depth:2}],o="使用 Rspack";function d(e){let s=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",h2:"h2",code:"code",div:"div",ul:"ul",li:"li",button:"button",pre:"pre",span:"span"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"使用-rspack",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-rspack",children:"#"}),"使用 Rspack"]}),"\n","\n",(0,r.jsx)(a.default,{}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Modern.js 提供开箱即用的 Rspack 支持"}),"，你可以在成熟的 Webpack 和更快的 Rspack 之间进行切换。"]}),"\n",(0,r.jsx)(s.p,{children:"这篇文档会向你介绍如何在 Modern.js 中开启 Rspack 构建模式。"}),"\n",(0,r.jsxs)(s.h2,{id:"初始化-rspack-项目",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#初始化-rspack-项目",children:"#"}),"初始化 Rspack 项目"]}),"\n",(0,r.jsxs)(s.p,{children:["Modern.js 生成器会提供一个可交互的问答界面，只需将构建工具选择为 ",(0,r.jsx)(s.strong,{children:"Rspack"}),"，即可创建一个 Rspack 项目:"]}),"\n","\n",(0,r.jsx)(i.default,{}),"\n",(0,r.jsxs)(s.p,{children:["项目创建完成后，在项目中执行 ",(0,r.jsx)(s.code,{children:"pnpm run dev"})," 即可体验项目，更多信息可参考",(0,r.jsx)(s.a,{href:"/guides/get-started/quick-start.html",children:"快速上手"}),"。"]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive tip",children:[(0,r.jsx)(s.p,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(s.div,{className:"modern-directive-content",children:[(0,r.jsx)(s.p,{children:"\n在使用 Rspack 作为打包工具时，由于部分能力尚在开发中，以下 features 暂时无法使用，我们将在未来提供支持："}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"微前端（Micro Frontend）"}),"\n",(0,r.jsx)(s.li,{children:"Storybook 调试"}),"\n",(0,r.jsx)(s.li,{children:"同时使用服务端渲染（SSR）和约定式路由的场景"}),"\n",(0,r.jsx)(s.li,{children:"同时使用静态站点生成（SSG）和约定式路由的场景"}),"\n"]})]})]}),"\n",(0,r.jsxs)(s.h2,{id:"从-webpack-迁移至-rspack",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#从-webpack-迁移至-rspack",children:"#"}),"从 webpack 迁移至 Rspack"]}),"\n",(0,r.jsxs)(s.p,{children:["在一个已有的 Modern.js 项目中，你可以通过执行 ",(0,r.jsx)(s.code,{children:"pnpm run new"})," 来启用 Rspack 构建："]}),"\n",(0,r.jsxs)(s.div,{className:"language-bash",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"$ pnpm run new"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" 请选择你想要的操作：启用可选功能"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" 启用可选功能：启用「Rspack 构建」"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["执行以上命令后，在 ",(0,r.jsx)(s.code,{children:"modern.config.ts"})," 中添加 Rspack 相关配置即可："]}),"\n",(0,r.jsxs)(s.div,{className:"language-diff",children:[(0,r.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"import appTools, { defineConfig } from '@modern-js/app-tools';"})}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"#4AB576"},children:"+ export default defineConfig<'rspack'>({"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  plugins: ["})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    appTools({"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"#4AB576"},children:"+     bundler: 'experimental-rspack',"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }),"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  ],"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive tip",children:[(0,r.jsx)(s.p,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsxs)(s.p,{children:["\n从 webpack 迁移至 Rspack 时，存在一些构建能力和配置上的差异，详情可参考：",(0,r.jsx)(s.a,{href:"https://modernjs.dev/builder/guide/advanced/rspack-start.html#%E4%BB%8E-webpack-%E8%BF%81%E7%A7%BB%E5%88%B0-rspack",target:"_blank",rel:"noopener noreferrer",children:"配置差异"})]})})]})]})}var p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,c.useMDXComponents)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}}}]);