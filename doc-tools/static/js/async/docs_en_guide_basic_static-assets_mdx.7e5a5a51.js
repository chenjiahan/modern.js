(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_guide_basic_static-assets_mdx"],{37028:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return a}});var o,r=n("15169"),d=n("43932"),c=n("9880"),i=n("23169");function t(e){var s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.h1,{id:"static-assets",children:["Static Assets",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#static-assets",children:"#"})]}),"\n",(0,c.jsxs)(s.p,{children:["You can import static assets in ",(0,c.jsx)(s.code,{children:"markdown"})," (or ",(0,c.jsx)(s.code,{children:"mdx"}),") files. Both relative and absolute paths are supported. For example, if you have an image in the same directory as markdown, you can reference it like this:"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-mdx",children:"![](./demo.png)\n"})}),"\n",(0,c.jsxs)(s.p,{children:["Of course, you can also directly use the img tag in ",(0,c.jsx)(s.code,{children:".mdx"})," files:"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-mdx",children:'<img src="./demo.png" />\n'})}),"\n",(0,c.jsxs)(s.p,{children:["Modern.js Doc will automatically find the image and respond to the browser according to the ",(0,c.jsx)(s.code,{children:".mdx"})," file path and image path."]}),"\n",(0,c.jsxs)(s.p,{children:["On the other hand, static resources can also be imported using absolute paths. In this way, Modern.js Doc will look for resources in the ",(0,c.jsx)(s.code,{children:"public"})," folder under the root directory of the project, which is the directory specified by the ",(0,c.jsx)(s.code,{children:"doc.root"})," field in ",(0,c.jsx)(s.code,{children:"modern.config.ts"}),"."]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/doc-tools';\nimport path from 'path';\nexport default defineConfig({\n  doc: {\n    root: path.join(__dirname, 'docs'),\n  },\n});\n"})}),"\n",(0,c.jsxs)(s.p,{children:["For example, if the root directory is ",(0,c.jsx)(s.code,{children:"docs"})," and the directory structure is as follows:"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"docs\n├── public\n│   └── demo.png\n├── index.mdx\n"})}),"\n",(0,c.jsxs)(s.p,{children:["In the ",(0,c.jsx)(s.code,{children:"index.mdx"})," file above, you can reference ",(0,c.jsx)(s.code,{children:"demo.png"})," like this:"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-mdx",children:"![](./public/demo.png)\n"})}),"\n",(0,c.jsx)(s.p,{children:"Or refer to it with an absolute path:"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-mdx",children:"![](/demo.png)\n"})})]})}(o=globalThis).__RSPRESS_PAGE_META||(o.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fdoc-tools-doc%2Fdocs%2Fen%2Fguide%2Fbasic%2Fstatic-assets.mdx"]={toc:[],title:"Static Assets",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return s?(0,c.jsx)(s,(0,d._)((0,r._)({},e),{children:(0,c.jsx)(t,(0,r._)({},e))})):t(e)}}}]);