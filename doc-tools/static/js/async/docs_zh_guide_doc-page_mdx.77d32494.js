(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_guide_doc-page_mdx"],{17011:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return s},title:function(){return c},toc:function(){return i},default:function(){return a}});var d=r("9880"),o=r("23169"),s={},c="正文页面",i=[{text:"页面类型",depth:2,id:"页面类型"},{text:"侧边栏",depth:2,id:"侧边栏"},{text:"大纲栏标题",depth:2,id:"大纲栏标题"},{text:"上一页/下一页文本",depth:2,id:"上一页/下一页文本"}];function t(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre"},(0,o.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"正文页面",children:["正文页面",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#正文页面",children:"#"})]}),"\n",(0,d.jsxs)(n.h2,{id:"页面类型",children:["页面类型",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#页面类型",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["你可以在 ",(0,d.jsx)(n.code,{children:"frontmatter"})," 元数据中指定 pageType，以便在页面中使用不同的布局。默认情况下，文档的 pageType 是 ",(0,d.jsx)(n.code,{children:"doc"}),"，这样会默认出现左边的",(0,d.jsx)(n.code,{children:"侧边栏"}),"和右侧的",(0,d.jsx)(n.code,{children:"大纲栏"}),"。如果你不需要这些，可以将 pageType 设置为 ",(0,d.jsx)(n.code,{children:"custom"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-yaml",children:"---\npageType: custom\n---\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"侧边栏",children:["侧边栏",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#侧边栏",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["在 ",(0,d.jsx)(n.code,{children:"modern.config.ts"})," 中，你可以配置侧边栏的内容，具体可参考 ",(0,d.jsx)(n.a,{href:"/api/config-theme#sidebar",children:"API-侧边栏配置"}),"。"]}),"\n",(0,d.jsxs)(n.h2,{id:"大纲栏标题",children:["大纲栏标题",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#大纲栏标题",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["通过 ",(0,d.jsx)(n.code,{children:"outlineTitle"})," 配置项，你可以设置大纲栏的标题。"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\nimport path from 'path';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      outlineTitle: '目录',\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"上一页/下一页文本",children:["上一页/下一页文本",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#上一页/下一页文本",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["通过 ",(0,d.jsx)(n.code,{children:"prevText"})," 和 ",(0,d.jsx)(n.code,{children:"nextText"})," 配置项，你可以设置上一页/下一页的文本。"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      prevPageText: '上一页',\n      nextPageText: '下一页',\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(t,e)})):t(e)}}}]);