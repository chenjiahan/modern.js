(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_source_entries-dir_mdx"],{30076:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return t},toc:function(){return d},default:function(){return a}});var s=r("9880"),c=r("23169"),i={sidebar_label:"entriesDir"},t="source.entriesDir",d=[];function o(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"sourceentriesdir",children:["source.entriesDir",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourceentriesdir",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"./src"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js 默认会扫描 ",(0,s.jsx)(n.code,{children:"src"})," 目录来识别页面入口，你可以通过该选项自定义页面入口的识别目录。"]}),"\n",(0,s.jsx)(n.p,{children:"例如，当配置与目录结构如下时："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    entriesDir: './src/pages',\n  },\n});\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",meta:'title="项目目录结构"',children:".\n└── src\n    └── pages\n        ├── a\n        │   └── App.tsx\n        └── b\n            └── App.tsx\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js 会扫描 ",(0,s.jsx)(n.code,{children:"./src/pages"})," 目录，自动生成构建入口 ",(0,s.jsx)(n.code,{children:"a"})," 和入口 ",(0,s.jsx)(n.code,{children:"b"}),"，结果如下："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const entry = {\n  a: './src/pages/a/App.tsx',\n  b: './src/pages/b/App.tsx',\n};\n"})})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);