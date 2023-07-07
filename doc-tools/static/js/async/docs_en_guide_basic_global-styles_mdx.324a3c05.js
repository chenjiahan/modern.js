(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_guide_basic_global-styles_mdx"],{23187:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return c}});var s,d=o("15169"),l=o("43932"),r=o("9880"),t=o("23169");function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre",blockquote:"blockquote"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"custom-global-styles",children:["Custom Global Styles",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-global-styles",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["In some scenarios, you may need to add some global styles based on the theme UI. The framework provides a config param ",(0,r.jsx)(n.code,{children:"globalStyles"})," to implement it."]}),"\n",(0,r.jsxs)(n.h2,{id:"usage",children:["Usage",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Add the following config to ",(0,r.jsx)(n.code,{children:"modern.config.ts"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\nimport path from 'path';\n\nexport default defineConfig({\n  doc: {\n    globalStyles: path.join(__dirname, 'styles/index.css'),\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then you can add the following code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:"/* styles/index.css */\n:root {\n  --modern-c-brand: #f00;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"In this way, the framework will automatically collect all global styles and merge them into the final style file."}),"\n",(0,r.jsx)(n.p,{children:"Below are some commonly used global styles:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:"/* styles/index.css */\n\n:root {\n  /* Modify the theme color */\n  --modern-c-brand: #f00;\n  --modern-c-brand-dark: #ffa500;\n  --modern-c-brand-darker: #c26c1d;\n  --modern-c-brand-light: #f2a65a;\n  --modern-c-brand-lighter: #f2a65a;\n\n  /* Modify the width of the left sidebar */\n  --modern-sidebar-width: 280px;\n\n  /* Modify the width of the right outline column */\n  --modern-aside-width: 256px;\n\n  /* Modify the code block title background */\n  --modern-code-title-bg: rgba(250, 192, 61, 0.15);\n\n  /* Modify the code block content background */\n  --modern-code-block-bg: rgba(214, 188, 70, 0.05);\n}\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["If you want to know more about internal global styles, you can check ",(0,r.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern.js/blob/main/packages/cli/doc-core/src/theme-default/styles/vars.css",target:"_blank",rel:"noopener noreferrer",children:"vars.css"}),"."]}),"\n"]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fdoc-tools-doc%2Fdocs%2Fen%2Fguide%2Fbasic%2Fglobal-styles.mdx"]={toc:[{text:"Usage",id:"usage",depth:2}],title:"Custom Global Styles",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,(0,l._)((0,d._)({},e),{children:(0,r.jsx)(a,(0,d._)({},e))})):a(e)}}}]);