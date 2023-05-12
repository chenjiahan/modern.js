(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_guide_global-styles_mdx"],{54966:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},toc:function(){return c},title:function(){return l},default:function(){return t}});var o=s("9880"),d=s("23169"),a=void 0,c=[{id:"usage",text:"Usage",depth:2}],l="Custom Global Styles";function r(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",div:"div",pre:"pre",blockquote:"blockquote"},(0,d.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"custom-global-styles",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-global-styles",children:"#"}),"Custom Global Styles"]}),"\n",(0,o.jsxs)(n.p,{children:["In some scenarios, you may need to add some global styles based on the theme UI. The framework provides a config param ",(0,o.jsx)(n.code,{children:"globalStyles"})," to implement it."]}),"\n",(0,o.jsxs)(n.h2,{id:"usage",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"}),"Usage"]}),"\n",(0,o.jsxs)(n.p,{children:["Add the following config to ",(0,o.jsx)(n.code,{children:"modern.config.ts"}),":"]}),"\n",(0,o.jsxs)(n.div,{className:"language-ts",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\nimport path from 'path';\n\nexport default defineConfig({\n  doc: {\n    globalStyles: [path.join(__dirname, 'styles/index.css')],\n  },\n  plugins: [docTools()],\n});\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"Then you can add the following code:"}),"\n",(0,o.jsxs)(n.div,{className:"language-css",children:[(0,o.jsx)(n.div,{className:""}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-css",children:"/* styles/index.css */\n:root {\n  --modern-c-brand: #f00;\n}\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"In this way, the framework will automatically collect all global styles and merge them into the final style file."}),"\n",(0,o.jsx)(n.p,{children:"Below are some commonly used global styles:"}),"\n",(0,o.jsxs)(n.div,{className:"language-css",children:[(0,o.jsx)(n.div,{className:""}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-css",children:"/* styles/index.css */\n\n:root {\n  /* Modify the theme color */\n  --modern-c-brand: #f00;\n  --modern-c-brand-dark: #ffa500;\n  --modern-c-brand-darker: #c26c1d;\n  --modern-c-brand-light: #f2a65a;\n  --modern-c-brand-lighter: #f2a65a;\n\n  /* Modify the width of the left sidebar */\n  --modern-sidebar-width: 280px;\n\n  /* Modify the width of the right outline column */\n  --modern-aside-width: 256px;\n\n  /* Modify the code block title background */\n  --modern-code-title-bg: rgba(250, 192, 61, 0.15);\n\n  /* Modify the code block content background */\n  --modern-code-block-bg: rgba(214, 188, 70, 0.05);\n}\n"})})})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["If you want to know more about internal global styles, you can check ",(0,o.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern.js/blob/main/packages/cli/doc-core/src/theme-default/styles/vars.css",target:"_blank",rel:"noopener noreferrer",children:"vars.css"}),"."]}),"\n"]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(r,e)})):r(e)}}}]);