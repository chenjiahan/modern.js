(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_zh_api_config-output_mdx7"],{34716:function(n,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(n,e){for(var s in e)Object.defineProperty(n,s,{enumerable:!0,get:e[s]})}(e,{frontmatter:function(){return i},title:function(){return r},toc:function(){return a},default:function(){return l}});var c=s("12151"),t=s("23169"),i={},r="",a=[{text:"示例",depth:3,id:"示例"}];function d(n){var e=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",button:"button",pre:"pre"},(0,t.useMDXComponents)(),n.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"类型："})," ",(0,c.jsx)(e.code,{children:"boolean"})]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"默认值："})," ",(0,c.jsx)(e.code,{children:"false"})]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"打包工具："})," ",(0,c.jsx)(e.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:"是否生成 manifest 文件，该文件包含所有构建产物的信息。"}),"\n",(0,c.jsxs)(e.h3,{id:"示例",children:["示例",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,c.jsx)(e.p,{children:"添加以下配置来开启："}),"\n",(0,c.jsx)(e.div,{className:"language-",children:(0,c.jsxs)(e.div,{className:"modern-code-content",children:[(0,c.jsx)(e.button,{className:"copy"}),(0,c.jsx)(e.pre,{className:"code",children:(0,c.jsx)(e.code,{className:"language-js",children:"export default {\n  output: {\n    enableAssetManifest: true,\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(e.p,{children:["开启后，当编译完成时，会自动生成 ",(0,c.jsx)(e.code,{children:"dist/manifest.json"})," 文件："]}),"\n",(0,c.jsx)(e.div,{className:"language-",children:(0,c.jsxs)(e.div,{className:"modern-code-content",children:[(0,c.jsx)(e.button,{className:"copy"}),(0,c.jsx)(e.pre,{className:"code",children:(0,c.jsx)(e.code,{className:"language-json",children:'{\n  "files": {\n    "main.css": "/static/css/main.45b01211.css",\n    "main.js": "/static/js/main.52fd298f.js",\n    "html/main/index.html": "/html/main/index.html"\n  },\n  "entrypoints": ["static/css/main.45b01211.css", "static/js/main.52fd298f.js"]\n}\n'})})]})})]})}var l=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,t.useMDXComponents)(),n.components).wrapper;return e?(0,c.jsx)(e,Object.assign({},n,{children:(0,c.jsx)(d,n)})):d(n)}}}]);