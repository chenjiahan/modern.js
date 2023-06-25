(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_create_use_mdx"],{58437:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return h}});var d,s=r("15169"),a=r("43932"),o=r("9880"),c=r("23169"),i=r.ir(r("16935"));function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre",div:"div",h3:"h3"},(0,c.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"使用",children:["使用",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Modern.js 提供了 ",(0,o.jsx)(n.code,{children:"@modern-js/create"})," 工具用于创建 Modern.js 提供的工程方案项目，例如 ",(0,o.jsx)(n.a,{href:"https://modernjs.dev/",target:"_blank",rel:"noopener noreferrer",children:"Web 应用"}),"、",(0,o.jsx)(n.a,{href:"https://modernjs.dev/module-tools",target:"_blank",rel:"noopener noreferrer",children:"Npm 模块"}),"、",(0,o.jsx)(n.a,{href:"https://modernjs.dev/doc-tools",target:"_blank",rel:"noopener noreferrer",children:"文档站"}),"、",(0,o.jsx)(n.a,{href:"/guides/topic-detail/monorepo/intro",children:"Monorepo"})," 等。"]}),"\n",(0,o.jsxs)(n.p,{children:["下面将介绍 ",(0,o.jsx)(n.code,{children:"@modern-js/create"})," 的使用姿势。"]}),"\n",(0,o.jsxs)(n.h2,{id:"环境准备",children:["环境准备",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#环境准备",children:"#"})]}),"\n","\n",(0,o.jsx)(i.default,{}),"\n",(0,o.jsxs)(n.h2,{id:"使用-@modern-js/create-创建项目",children:["使用 ",(0,o.jsx)(n.code,{children:"@modern-js/create"})," 创建项目",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-@modern-js/create-创建项目",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["不需要全局安装 ",(0,o.jsx)(n.code,{children:"@modern-js/create"}),"，直接使用 npx 执行即可："]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest [projectDir]\n"})}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive info",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,o.jsx)(n.div,{className:"modern-directive-content",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"[projectDir]"})," 为项目目录名称，不填写将会在当前目录创建项目。\n"]})})]}),"\n",(0,o.jsx)(n.p,{children:"执行过程中需要根据提示完成交互，创建符合需求的项目。"}),"\n",(0,o.jsxs)(n.h3,{id:"创建-web-应用项目",children:["创建 Web 应用项目",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#创建-web-应用项目",children:"#"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest web-app\n? 请选择你想创建的工程类型 Web 应用\n? 请选择开发语言 TS\n? 请选择包管理工具 pnpm\n? 请选择构建工具 webpack\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"创建-npm-模块项目",children:["创建 Npm 模块项目",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#创建-npm-模块项目",children:"#"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest npm-module\n? 请选择你想创建的工程类型 Npm 模块\n? 请填写项目名称 npm-module\n? 请选择开发语言 TS\n? 请选择包管理工具 pnpm\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"创建文档站项目",children:["创建文档站项目",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#创建文档站项目",children:"#"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest doc-website\n? 请选择你想创建的工程类型 文档站\n? 请选择包管理工具 pnpm\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"创建-monorepo",children:["创建 Monorepo",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#创建-monorepo",children:"#"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest monorepo\n? 请选择你想创建的工程类型 Monorepo\n? 请选择包管理工具 pnpm\n"})})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/main-doc/docs/zh/guides/topic-detail/generator/create/use.mdx"]={toc:[{text:"环境准备",id:"环境准备",depth:2},{text:"使用 @modern-js/create 创建项目",id:"使用-@modern-js/create-创建项目",depth:2},{text:"创建 Web 应用项目",id:"创建-web-应用项目",depth:3},{text:"创建 Npm 模块项目",id:"创建-npm-模块项目",depth:3},{text:"创建文档站项目",id:"创建文档站项目",depth:3},{text:"创建 Monorepo",id:"创建-monorepo",depth:3}],title:"使用",frontmatter:{sidebar_position:1}};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,a._(s._({},e),{children:(0,o.jsx)(t,s._({},e))})):t(e)}}}]);