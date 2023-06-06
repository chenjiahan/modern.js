(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_api_config_config-basic_mdx"],{26400:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var o in n)Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}(n,{frontmatter:function(){return s},title:function(){return l},toc:function(){return r},default:function(){return t}});var i=o("9880"),d=o("23169"),s={},l="基础配置",r=[{text:"base",depth:2,id:"base"},{text:"title",depth:2,id:"title"},{text:"description",depth:2,id:"description"},{text:"icon",depth:2,id:"icon"},{text:"logo",depth:2,id:"logo"},{text:"outDir",depth:2,id:"outdir"},{text:"locales",depth:2,id:"locales"},{text:"mediumZoom",depth:2,id:"mediumzoom"}];function c(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",p:"p",pre:"pre",blockquote:"blockquote"},(0,d.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"基础配置",children:["基础配置",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#基础配置",children:"#"})]}),"\n",(0,i.jsxs)(n.h2,{id:"base",children:["base",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#base",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"/"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["部署基准路径。比如，如果你计划将你的站点部署到 ",(0,i.jsx)(n.code,{children:"https://foo.github.io/bar/"}),"，那么你应该将 ",(0,i.jsx)(n.code,{children:"base"})," 设置为 ",(0,i.jsx)(n.code,{children:'"/bar/"'}),"："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    base: '/bar/',\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"title",children:["title",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#title",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:'"Island"'})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"站点标题。这个参数将被用作 HTML 页面的标题。例如："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    title: '我的站点',\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"description",children:["description",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#description",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:'""'})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"站点描述。这将用作 HTML 页面的描述。例如："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    description: '我的站点描述',\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"icon",children:["icon",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#icon",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:'""'})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"站点图标。这个路径将用作 HTML 页面的图标路径。例如："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    icon: '/favicon.ico',\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["框架会在 ",(0,i.jsx)(n.code,{children:"public"})," 目录中找到你的图标，当然你也可以设置成一个 CDN 地址。"]}),"\n",(0,i.jsxs)(n.h2,{id:"logo",children:["logo",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#logo",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string | { dark: string; light: string }"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:'""'})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"站点 logo。这个路径将用作导航栏左上角的 logo 路径。例如："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    logo: '/logo.png',\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["框架会在 ",(0,i.jsx)(n.code,{children:"public"})," 目录中找到你的图标，当然你也可以设置成一个 CDN 地址。"]}),"\n",(0,i.jsx)(n.p,{children:"当然你可以针对浅色/暗黑模式设置不同的 logo："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    logo: {\n      dark: '/logo-dark.png',\n      light: '/logo-light.png',\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"outdir",children:["outDir",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outdir",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"doc_build"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"自定义构建站点的输出目录。比如:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    outDir: 'doc_build',\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"locales",children:["locales",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#locales",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"Locale[]"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export interface Locale {\n  lang: string;\n  label: string;\n  title?: string;\n  description?: string;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"站点的多语言配置。比如："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    locales: [\n      {\n        lang: 'en-US',\n        label: 'English',\n        title: 'Doc Tools',\n        description: 'Doc Tools',\n      },\n      {\n        lang: 'zh-CN',\n        label: '简体中文',\n        title: '文档框架',\n        description: '文档框架',\n      },\n    ],\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"mediumzoom",children:["mediumZoom",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#mediumzoom",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"boolean"})," | ",(0,i.jsx)(n.code,{children:"{ selector?: string }"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["是否开启图片放大功能。默认开启，你可以通过设置 ",(0,i.jsx)(n.code,{children:"mediumZoom"})," 为 ",(0,i.jsx)(n.code,{children:"false"})," 来关闭。"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["底层使用的是 ",(0,i.jsx)(n.a,{href:"https://github.com/francoischalifour/medium-zoom",target:"_blank",rel:"noopener noreferrer",children:"medium-zoom"})," 库来实现的。"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"使用示例："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    // 关闭图片放大功能\n    mediumZoom: false,\n    // 配置 CSS 选择器，自定义要放大的图片，默认为 '.modern-doc img'\n    mediumZoom: {\n      selector: '.modern-doc img',\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}}}]);