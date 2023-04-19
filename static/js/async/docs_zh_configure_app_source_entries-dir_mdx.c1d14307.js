(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_source_entries-dir_mdx"],{93993:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return i},title:function(){return d},toc:function(){return a},default:function(){return o}});var r=s("12151"),c=s("23169"),i={sidebar_label:"entriesDir"},d="source.entriesDir",a=[];function t(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"source-entriesdir",children:["source.entriesDir",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#source-entriesdir",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"./src"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js 默认会扫描 ",(0,r.jsx)(n.code,{children:"src"})," 目录来识别页面入口，你可以通过该选项自定义页面入口的识别目录。"]}),"\n",(0,r.jsx)(n.p,{children:"例如，当配置与目录结构如下时："}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    entriesDir: './src/pages',\n  },\n});\n"})})]})]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"项目目录结构"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",meta:'title="项目目录结构"',children:".\n└── src\n    └── pages\n        ├── a\n        │   └── App.tsx\n        └── b\n            └── App.tsx\n"})})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js 会扫描 ",(0,r.jsx)(n.code,{children:"./src/pages"})," 目录，自动生成构建入口 ",(0,r.jsx)(n.code,{children:"a"})," 和入口 ",(0,r.jsx)(n.code,{children:"b"}),"，结果如下："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"const entry = {\n  a: './src/pages/a/App.tsx',\n  b: './src/pages/b/App.tsx',\n};\n"})})]})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}}}]);