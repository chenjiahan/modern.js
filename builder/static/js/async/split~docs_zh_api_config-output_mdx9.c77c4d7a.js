(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_zh_api_config-output_mdx9"],{41918:function(n,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(n,e){for(var s in e)Object.defineProperty(n,s,{enumerable:!0,get:e[s]})}(e,{frontmatter:function(){return r},title:function(){return t},toc:function(){return d},default:function(){return a}});var c=s("12151"),i=s("23169"),r={},t="",d=[{text:"示例",depth:3,id:"示例"}];function l(n){var e=Object.assign({ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",p:"p",h3:"h3",a:"a"},(0,i.useMDXComponents)(),n.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.strong,{children:"类型"})}),"\n"]}),"\n",(0,c.jsx)(e.div,{className:"language-",children:(0,c.jsxs)(e.div,{className:"modern-code-content",children:[(0,c.jsx)(e.button,{className:"copy"}),(0,c.jsx)(e.pre,{className:"code",children:(0,c.jsx)(e.code,{className:"language-ts",children:"type DistPathConfig = {\n  root?: string;\n  js?: string;\n  css?: string;\n  svg?: string;\n  font?: string;\n  html?: string;\n  image?: string;\n  media?: string;\n  server?: string;\n};\n"})})]})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.strong,{children:"默认值"})}),"\n"]}),"\n",(0,c.jsx)(e.div,{className:"language-",children:(0,c.jsxs)(e.div,{className:"modern-code-content",children:[(0,c.jsx)(e.button,{className:"copy"}),(0,c.jsx)(e.pre,{className:"code",children:(0,c.jsx)(e.code,{className:"language-js",children:"const defaultDistPath = {\n  root: 'dist',\n  html: 'html',\n  js: 'static/js',\n  css: 'static/css',\n  svg: 'static/svg',\n  font: 'static/font',\n  image: 'static/image',\n  media: 'static/media',\n  server: 'bundles',\n};\n"})})]})}),"\n",(0,c.jsx)(e.p,{children:"设置构建产物的输出目录，Builder 会根据产物的类型输出到对应的子目录下。"}),"\n",(0,c.jsx)(e.p,{children:"其中："}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"root"}),": 表示所有构建产物输出的根目录。"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"html"}),"：表示 HTML 文件的输出目录。"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"js"}),"：表示 JavaScript 文件的输出目录。"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"css"}),"：表示 CSS 样式文件的输出目录。"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"svg"}),"：表示 SVG 图片的输出目录。"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"font"}),"：表示字体文件的输出目录。"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"image"}),"：表示非 SVG 图片的输出目录。"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"media"}),"：表示视频等媒体资源的输出目录。"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"server"}),": 表示服务端产物的输出目录，仅在 target 为 ",(0,c.jsx)(e.code,{children:"node"})," 时有效。"]}),"\n"]}),"\n",(0,c.jsxs)(e.h3,{id:"示例",children:["示例",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,c.jsxs)(e.p,{children:["以 JavaScript 文件为例，会输出到 ",(0,c.jsx)(e.code,{children:"distPath.root"})," + ",(0,c.jsx)(e.code,{children:"distPath.js"})," 目录，即为 ",(0,c.jsx)(e.code,{children:"dist/static/js"}),"。"]}),"\n",(0,c.jsxs)(e.p,{children:["如果需要将 JavaScript 文件输出到 ",(0,c.jsx)(e.code,{children:"build/resource/js"})," 目录，可以这样设置："]}),"\n",(0,c.jsx)(e.div,{className:"language-",children:(0,c.jsxs)(e.div,{className:"modern-code-content",children:[(0,c.jsx)(e.button,{className:"copy"}),(0,c.jsx)(e.pre,{className:"code",children:(0,c.jsx)(e.code,{className:"language-js",children:"export default {\n  output: {\n    distPath: {\n      root: 'build',\n      js: 'resource/js',\n    },\n  },\n};\n"})})]})})]})}var a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,i.useMDXComponents)(),n.components).wrapper;return e?(0,c.jsx)(e,Object.assign({},n,{children:(0,c.jsx)(l,n)})):l(n)}}}]);