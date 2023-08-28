(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["docs_zh_guide_best-practices_components_mdx"],{28020:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return a}});var r,l=n("15169"),i=n("43932"),c=n("9880"),d=n("23169");function o(e){var s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ol:"ol",li:"li",code:"code",pre:"pre",ul:"ul",h3:"h3",blockquote:"blockquote",strong:"strong"},(0,d.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.h1,{id:"开发组件",children:["开发组件",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#开发组件",children:"#"})]}),"\n",(0,c.jsx)(s.p,{children:"本章将要介绍如何使用模块工程解决方案开发组件项目。"}),"\n",(0,c.jsxs)(s.h2,{id:"初始化项目",children:["初始化项目",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#初始化项目",children:"#"})]}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["推荐使用 ",(0,c.jsx)(s.code,{children:"@modern-js/create"})," 命令来初始化一个 npm 项目。"]}),"\n"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-text",meta:'title="交互式问题"',children:"npx @modern-js/create@latest components-project\n\n? 请选择你想创建的工程类型：Npm 模块\n? 请填写项目名称：components-demo\n? 请选择开发语言：TS\n? 请选择包管理工具：pnpm\n"})}),"\n",(0,c.jsxs)(s.ol,{start:"2",children:["\n",(0,c.jsx)(s.li,{children:"初始化的目录结构如下："}),"\n"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:".\n├── README.md\n├── node_modules/\n├── dist/\n├── modern.config.ts\n├── package.json\n├── pnpm-lock.yaml\n├── src\n│   ├── index.ts\n│   └── modern-app-env.d.ts\n└── tsconfig.json\n"})}),"\n",(0,c.jsxs)(s.ol,{start:"3",children:["\n",(0,c.jsxs)(s.li,{children:["最后修改 ",(0,c.jsx)(s.code,{children:"./src/index.ts"})," 文件后缀和内容如下，就完成了组件项目的初始化。"]}),"\n"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-tsx",meta:'title="./src/index.tsx"',children:"export default () => {\n  return <div>hello world</div>;\n};\n"})}),"\n",(0,c.jsxs)(s.h2,{id:"使用-storybook-调试代码",children:["使用 Storybook 调试代码",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-storybook-调试代码",children:"#"})]}),"\n",(0,c.jsxs)(s.p,{children:["请参考 ",(0,c.jsx)(s.a,{href:"/guide/basic/using-storybook",children:"「使用 Storybook」"})," 来使用 Storybook 调试代码。"]}),"\n",(0,c.jsxs)(s.h2,{id:"开发样式",children:["开发样式",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#开发样式",children:"#"})]}),"\n",(0,c.jsx)(s.p,{children:"接下来我们可以给组件添加样式。"}),"\n",(0,c.jsx)(s.p,{children:"目前支持开发样式的能力有："}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"CSS/PostCSS"}),"\n",(0,c.jsx)(s.li,{children:"Less"}),"\n",(0,c.jsx)(s.li,{children:"Scss/Sass"}),"\n",(0,c.jsx)(s.li,{children:"Tailwind CSS"}),"\n",(0,c.jsx)(s.li,{children:"CSS Modules"}),"\n"]}),"\n",(0,c.jsxs)(s.h3,{id:"csspostcss",children:["CSS/PostCSS",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#csspostcss",children:"#"})]}),"\n",(0,c.jsx)(s.p,{children:"模块工程支持 PostCSS，并且内置了以下 PostCSS 插件："}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"https://github.com/luisrudge/postcss-flexbugs-fixes",target:"_blank",rel:"noopener noreferrer",children:"flexbugs-fixes"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"https://github.com/postcss/postcss-custom-properties",target:"_blank",rel:"noopener noreferrer",children:"custom-properties"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"https://github.com/maximkoretskiy/postcss-initial",target:"_blank",rel:"noopener noreferrer",children:"initial"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"https://github.com/shrpne/postcss-page-break",target:"_blank",rel:"noopener noreferrer",children:"page-break"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"https://github.com/postcss/postcss-font-variant",target:"_blank",rel:"noopener noreferrer",children:"font-variant"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"https://github.com/postcss/postcss-media-minmax",target:"_blank",rel:"noopener noreferrer",children:"media-minmax"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting#readme",target:"_blank",rel:"noopener noreferrer",children:"nesting"})}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["因此我们可以在项目中创建 ",(0,c.jsx)(s.code,{children:".css"})," 文件，并且可以直接在 css 文件中使用这些插件提供的语法支持和能力。"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"源代码："}),"\n"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-less",meta:'title="./src/index.css"',children:'a,\nb {\n  color: red;\n\n  /* "&" comes first */\n  & c,\n  & d {\n    color: white;\n  }\n\n  /* "&" comes later, requiring "@nest" */\n  @nest e & {\n    color: yellow;\n  }\n}\n'})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"CSS 产物："}),"\n"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-css",meta:'title="./dist/es/index.css"',children:"a,\nb {\n  color: red;\n}\na c,\nb c,\na d,\nb d {\n  color: white;\n}\ne a,\ne b {\n  color: yellow;\n}\n"})}),"\n",(0,c.jsxs)(s.h3,{id:"less",children:["Less",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#less",children:"#"})]}),"\n",(0,c.jsx)(s.p,{children:"模块工程支持使用 Less 开发样式。"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"目前内置的 Less 版本为 v4.1.3"}),"\n"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"源代码："}),"\n"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-less",meta:'title="./src/common.less"',children:"@bg: black;\n@bg-light: boolean(luma(@bg) > 50%);\n\ndiv {\n  background: @bg;\n  color: if(@bg-light, black, white);\n}\n"})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"Less 产物："}),"\n"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-css",meta:'title="./dist/es/common.css"',children:"div {\n  background: black;\n  color: white;\n}\n"})}),"\n",(0,c.jsxs)(s.h3,{id:"sassscss",children:["Sass/Scss",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#sassscss",children:"#"})]}),"\n",(0,c.jsx)(s.p,{children:"模块工程支持使用 Scss/Sass 开发样式。"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"目前内置的 Sass 版本为 v1.54.4"}),"\n"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"源代码："}),"\n"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-scss",meta:'title="./src/common.sass"',children:"$font-stack: Helvetica, sans-serif;\n$primary-color: #333;\n\nbody {\n  font: 100% $font-stack;\n  color: $primary-color;\n}\n"})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"Sass 产物："}),"\n"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-css",meta:'title="./dist/es/common.css"',children:"body {\n  font: 100% Helvetica, sans-serif;\n  color: #333;\n}\n"})}),"\n",(0,c.jsxs)(s.h3,{id:"tailwind-css",children:["Tailwind CSS",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#tailwind-css",children:"#"})]}),"\n",(0,c.jsxs)(s.p,{children:["请参考 ",(0,c.jsx)(s.a,{href:"/guide/best-practices/use-tailwindcss",children:"「使用 Tailwind CSS」"})," 来了解相关用法。"]}),"\n",(0,c.jsxs)(s.h3,{id:"css-modules",children:["CSS Modules",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#css-modules",children:"#"})]}),"\n",(0,c.jsx)(s.p,{children:"模块工程支持使用 CSS Module 开发样式。默认情况下会将以下文件识别为 CSS Module 文件："}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.code,{children:".module.css"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.code,{children:".module.less"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.code,{children:".module.scss"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.code,{children:".module.sass"})}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"如果需要对 CSS Modules 进行配置，可以查看以下 API："}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/api/config/build-config#styleautomodules",children:"style.autoModules"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/api/config/build-config#stylemodules",children:"style.modules"})}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"下面是一个代码示例："}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-tsx",meta:'title="./src/index.tsx"',children:"import style from './index.module.css';\n\nexport default () => {\n  return <div className={style.btn}>hello world</div>;\n};\n"})}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-css",meta:'title="./src/index.module.css"',children:".btn {\n  color: blue;\n}\n"})}),"\n",(0,c.jsxs)(s.h2,{id:"配置构建产物",children:["配置构建产物",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#配置构建产物",children:"#"})]}),"\n",(0,c.jsxs)(s.p,{children:["根据组件项目使用的多数场景，",(0,c.jsxs)(s.strong,{children:["推荐使用 ",(0,c.jsx)(s.code,{children:"npm-component"})," 构建预设"]}),"。该预设得到的产物目录结构为："]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:".\n├── dist\n│   ├── es\n│   ├── lib\n│   └── types\n"})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"./dist/es"}),": 包含了支持 es6 语法的 ES modules 格式的 bundleless 产物。"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"./dist/lib"}),": 包含了支持 es6 语法的 CommonJS 格式的 bundleless 产物。"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"./dist/types"}),": 包含了类型文件。"]}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["如果对使用语法支持有要求，可以手动配置 ",(0,c.jsx)(s.a,{href:"/api/config/build-preset",children:(0,c.jsx)(s.code,{children:"buildPreset"})}),"，并且支持在 ",(0,c.jsx)(s.code,{children:"npm-component"})," 基础上增加后缀的方式修改支持的语法："]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-tsx",children:"export default defineConfig({\n  buildPreset: 'npm-component-es2019',\n});\n"})}),"\n",(0,c.jsxs)(s.p,{children:["如果对构建产物目录结构有特殊需求，则可以使用 ",(0,c.jsxs)(s.a,{href:"/api/config/build-config",children:[(0,c.jsx)(s.code,{children:"buildConfig"})," API"]}),"，可以通过以下文档来了解使用方式："]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/guide/basic/modify-output-product#%E6%9E%84%E5%BB%BA%E9%85%8D%E7%BD%AE%E5%AF%B9%E8%B1%A1",children:"修改输出产物"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/guide/advance/in-depth-about-build",children:"深入理解构建"})}),"\n"]}),"\n",(0,c.jsxs)(s.h2,{id:"测试组件",children:["测试组件",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#测试组件",children:"#"})]}),"\n",(0,c.jsxs)(s.p,{children:["关于如何对组件进行测试，可以参考 ",(0,c.jsx)(s.a,{href:"/guide/basic/test-your-project",children:"「测试项目」"}),"。"]}),"\n",(0,c.jsxs)(s.h2,{id:"发布组件",children:["发布组件",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#发布组件",children:"#"})]}),"\n",(0,c.jsxs)(s.p,{children:["推荐使用模块工程提供版本发布功能，可以参考 ",(0,c.jsx)(s.a,{href:"/guide/basic/publish-your-project",children:"「版本管理与发布」"}),"。"]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguide%2Fbest-practices%2Fcomponents.mdx"]={toc:[{text:"初始化项目",id:"初始化项目",depth:2},{text:"使用 Storybook 调试代码",id:"使用-storybook-调试代码",depth:2},{text:"开发样式",id:"开发样式",depth:2},{text:"CSS/PostCSS",id:"csspostcss",depth:3},{text:"Less",id:"less",depth:3},{text:"Sass/Scss",id:"sassscss",depth:3},{text:"Tailwind CSS",id:"tailwind-css",depth:3},{text:"CSS Modules",id:"css-modules",depth:3},{text:"配置构建产物",id:"配置构建产物",depth:2},{text:"测试组件",id:"测试组件",depth:2},{text:"发布组件",id:"发布组件",depth:2}],title:"开发组件",frontmatter:{sidebar_position:1}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return s?(0,c.jsx)(s,(0,i._)((0,l._)({},e),{children:(0,c.jsx)(o,(0,l._)({},e))})):o(e)}}}]);