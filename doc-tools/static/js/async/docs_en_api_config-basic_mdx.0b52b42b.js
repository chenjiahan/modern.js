(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_api_config-basic_mdx"],{98416:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return d},toc:function(){return l},title:function(){return c},default:function(){return a}});var o=s("9880"),i=s("23169"),d=void 0,l=[{id:"base",text:"base",depth:2},{id:"title",text:"title",depth:2},{id:"description",text:"description",depth:2},{id:"icon",text:"icon",depth:2},{id:"logo",text:"logo",depth:2},{id:"outdir",text:"outDir",depth:2},{id:"locales",text:"locales",depth:2},{id:"mediumzoom",text:"mediumZoom",depth:2}],c="Basic Config";function r(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",p:"p",div:"div",pre:"pre",blockquote:"blockquote"},(0,i.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"basic-config",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#basic-config",children:"#"}),"Basic Config"]}),"\n",(0,o.jsxs)(n.h2,{id:"base",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#base",children:"#"}),"base"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"string"})]}),"\n",(0,o.jsxs)(n.li,{children:["Default: ",(0,o.jsx)(n.code,{children:"/"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Deployment base path. For example, if you plan to deploy your site to ",(0,o.jsx)(n.code,{children:"https://foo.github.io/bar/"}),", then you should set ",(0,o.jsx)(n.code,{children:"base"})," to ",(0,o.jsx)(n.code,{children:'"/bar/"'}),":"]}),"\n",(0,o.jsxs)(n.div,{className:"language-ts",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    base: '/bar/',\n  },\n  plugins: [docTools()],\n});\n"})})})]}),"\n",(0,o.jsxs)(n.h2,{id:"title",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#title",children:"#"}),"title"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"string"})]}),"\n",(0,o.jsxs)(n.li,{children:["Default: ",(0,o.jsx)(n.code,{children:'"Island"'})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Site title. This parameter will be used as the title of the HTML page. For example:"}),"\n",(0,o.jsxs)(n.div,{className:"language-ts",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    title: 'My Site',\n  },\n  plugins: [docTools()],\n});\n"})})})]}),"\n",(0,o.jsxs)(n.h2,{id:"description",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#description",children:"#"}),"description"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"string"})]}),"\n",(0,o.jsxs)(n.li,{children:["Default: ",(0,o.jsx)(n.code,{children:'""'})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Site description. This will be used as the description of the HTML page. For example:"}),"\n",(0,o.jsxs)(n.div,{className:"language-ts",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    description: 'My Site Description',\n  },\n  plugins: [docTools()],\n});\n"})})})]}),"\n",(0,o.jsxs)(n.h2,{id:"icon",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#icon",children:"#"}),"icon"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"string"})]}),"\n",(0,o.jsxs)(n.li,{children:["Default: ",(0,o.jsx)(n.code,{children:'""'})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Site icon. This path will be used as the icon path for the HTML page. For example:"}),"\n",(0,o.jsxs)(n.div,{className:"language-ts",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    icon: '/favicon.ico',\n  },\n  plugins: [docTools()],\n});\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["The framework will find your icon in the ",(0,o.jsx)(n.code,{children:"public"})," directory, of course you can also set it to a CDN address."]}),"\n",(0,o.jsxs)(n.h2,{id:"logo",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#logo",children:"#"}),"logo"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"string | { dark: string; light: string }"})]}),"\n",(0,o.jsxs)(n.li,{children:["Default: ",(0,o.jsx)(n.code,{children:'""'})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Site logo. This path will be used as the logo path in the upper left corner of the navbar. For example:"}),"\n",(0,o.jsxs)(n.div,{className:"language-ts",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    logo: '/logo.png',\n  },\n  plugins: [docTools()],\n});\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["The framework will find your icon in the ",(0,o.jsx)(n.code,{children:"public"})," directory, you can also set it to a CDN address."]}),"\n",(0,o.jsx)(n.p,{children:"Of course you can set different logos for dark/light mode:"}),"\n",(0,o.jsxs)(n.div,{className:"language-ts",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    logo: {\n      dark: '/logo-dark.png',\n      light: '/logo-light.png',\n    },\n  },\n  plugins: [docTools()],\n});\n"})})})]}),"\n",(0,o.jsxs)(n.h2,{id:"outdir",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outdir",children:"#"}),"outDir"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"string"})]}),"\n",(0,o.jsxs)(n.li,{children:["Default: ",(0,o.jsx)(n.code,{children:"doc_build"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Custom output directory for built sites. for example:"}),"\n",(0,o.jsxs)(n.div,{className:"language-ts",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    outDir: 'doc_build',\n  },\n  plugins: [docTools()],\n});\n"})})})]}),"\n",(0,o.jsxs)(n.h2,{id:"locales",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#locales",children:"#"}),"locales"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"Locale[]"})]}),"\n"]}),"\n",(0,o.jsxs)(n.div,{className:"language-ts",children:[(0,o.jsx)(n.div,{className:""}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",children:"export interface Locale {\n  lang: string;\n  label: string;\n  title?: string;\n  description?: string;\n}\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"I18n config of the site. for example:"}),"\n",(0,o.jsxs)(n.div,{className:"language-ts",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    locales: [\n      {\n        lang: 'en-US',\n        label: 'English',\n        title: 'Doc Tools',\n        description: 'Doc Tools',\n      },\n      {\n        lang: 'zh-CN',\n        label: '简体中文',\n        title: '文档框架',\n        description: '文档框架',\n      },\n    ],\n  },\n  plugins: [docTools()],\n});\n"})})})]}),"\n",(0,o.jsxs)(n.h2,{id:"mediumzoom",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#mediumzoom",children:"#"}),"mediumZoom"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"boolean"})," | ",(0,o.jsx)(n.code,{children:"{ selector?: string }"})]}),"\n",(0,o.jsxs)(n.li,{children:["Default: ",(0,o.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Whether to enable the image zoom function. It is enabled by default, you can disable it by setting ",(0,o.jsx)(n.code,{children:"mediumZoom"})," to ",(0,o.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["The bottom layer is implemented using the ",(0,o.jsx)(n.a,{href:"https://github.com/francoischalifour/medium-zoom",target:"_blank",rel:"noopener noreferrer",children:"medium-zoom"})," library."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Example usage:"}),"\n",(0,o.jsxs)(n.div,{className:"language-ts",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    // Turn off image zoom\n    mediumZoom: false,\n    // Configure the CSS selector to customize the picture to be zoomed, the default is '.modern-doc img'\n    mediumZoom: {\n      selector: '.modern-doc img',\n    },\n  },\n  plugins: [docTools()],\n});\n"})})})]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(r,e)})):r(e)}}}]);