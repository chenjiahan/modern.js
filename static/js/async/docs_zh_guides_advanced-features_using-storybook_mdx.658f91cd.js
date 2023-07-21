(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_advanced-features_using-storybook_mdx"],{93373:function(o,e,r){"use strict";r.r(e),r.d(e,{default:function(){return c}});var n,s=r("15169"),d=r("43932"),i=r("9880"),t=r("23169");function a(o){var e=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",h2:"h2",code:"code",pre:"pre"},(0,t.useMDXComponents)(),o.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.h1,{id:"使用-storybook",children:["使用 Storybook",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-storybook",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"https://storybook.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Storybook"})," 是一个专门用于组件调试的工具，它围绕着组件开发提供了："]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"丰富多样的调试能力"}),"\n",(0,i.jsx)(e.li,{children:"可与一些测试工具结合使用"}),"\n",(0,i.jsx)(e.li,{children:"可重复使用的文档内容"}),"\n",(0,i.jsx)(e.li,{children:"可分享能力"}),"\n",(0,i.jsx)(e.li,{children:"工作流程自动化"}),"\n"]}),"\n",(0,i.jsxs)(e.h2,{id:"开启-storybook-调试",children:["开启 Storybook 调试",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#开启-storybook-调试",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"Modern.js 默认集成了 Storybook 的调试能力。"}),"\n",(0,i.jsxs)(e.p,{children:["当我们想要对组件进行调试的时候，可以通过 ",(0,i.jsx)(e.code,{children:"pnpm run new"})," 启用 Storybook 调试功能。"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"$ npx modern new\n? 请选择你想要的操作 启用可选功能\n? 请选择功能名称 启用「Visual Testing (Storybook)」模式\n"})}),"\n",(0,i.jsxs)(e.p,{children:["执行完成后，你只需在 ",(0,i.jsx)(e.code,{children:"modern.config.ts"})," 文件中注册 Modern.js 的 Storybook 插件，即可启用 Storybook 调试能力。"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { storybookPlugin } from '@modern-js/plugin-storybook';\n\nexport default defineConfig({\n  plugins: [appTools(), storybookPlugin()],\n});\n"})}),"\n",(0,i.jsxs)(e.h2,{id:"调试代码",children:["调试代码",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#调试代码",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["Modern.js 默认识别项目源码目录 src/ 下 ",(0,i.jsx)(e.a,{href:"/apis/app/hooks/src/stories",children:"*.stories.(js|jsx|ts|tsx|mdx)"})," 格式的文件作为 Storybook 的调试文件。"]}),"\n",(0,i.jsxs)(e.h2,{id:"配置-storybook",children:["配置 Storybook",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#配置-storybook",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["在 Modern.js 中，可以在项目的 ",(0,i.jsx)(e.a,{href:"/apis/app/hooks/config/storybook",children:(0,i.jsx)(e.code,{children:"config/storybook"})})," 目录下增加 Storybook 配置文件。"]})]})}(n=globalThis).__RSPRESS_PAGE_META||(n.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fmain-doc%2Fdocs%2Fzh%2Fguides%2Fadvanced-features%2Fusing-storybook.mdx"]={toc:[{text:"开启 Storybook 调试",id:"开启-storybook-调试",depth:2},{text:"调试代码",id:"调试代码",depth:2},{text:"配置 Storybook",id:"配置-storybook",depth:2}],title:"使用 Storybook",frontmatter:{sidebar_position:20}};var c=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,t.useMDXComponents)(),o.components).wrapper;return e?(0,i.jsx)(e,(0,d._)((0,s._)({},o),{children:(0,i.jsx)(a,(0,s._)({},o))})):a(o)}}}]);