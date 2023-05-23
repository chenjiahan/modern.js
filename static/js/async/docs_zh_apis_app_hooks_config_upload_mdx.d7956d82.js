(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_hooks_config_upload_mdx"],{48833:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return i},toc:function(){return a},default:function(){return h}});var d=s("9880"),r=s("23169"),c={title:"upload/",sidebar_position:4},i="upload/",a=[{text:"说明",depth:2,id:"说明"},{text:"场景",depth:2,id:"场景"},{text:"代码压缩",depth:2,id:"代码压缩"},{text:"更多用法",depth:2,id:"更多用法"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",div:"div",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"upload/",children:["upload/",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#upload/",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"upload/"})," 目录中可以放置任意格式的静态资源文件。"]}),"\n",(0,d.jsxs)(n.h2,{id:"说明",children:["说明",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#说明",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["在开发环境下，该目录下的静态资源文件会被托管在 ",(0,d.jsx)(n.code,{children:"/upload"})," 路径下。构建应用产物后，该目录下的文件会被复制到产物目录中。"]}),"\n",(0,d.jsx)(n.p,{children:"该文件约定主要用于开发者使用插件，主动上传静态资源文件到 CDN。"}),"\n",(0,d.jsxs)(n.h2,{id:"场景",children:["场景",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#场景",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["例如 ",(0,d.jsx)(n.code,{children:"google-analysis.js"})," 等项目自用的 SDK（通常需要 http 缓存）。"]}),"\n",(0,d.jsx)(n.p,{children:"图片、字体文件、通用 CSS 等。"}),"\n",(0,d.jsxs)(n.h2,{id:"代码压缩",children:["代码压缩",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#代码压缩",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["如果目录下的文件是一个 ",(0,d.jsx)(n.code,{children:".js"})," 文件，在生产环境构建时，会自动对其进行代码压缩。"]}),"\n",(0,d.jsxs)(n.p,{children:["如果该文件以 ",(0,d.jsx)(n.code,{children:".min.js"})," 结尾，则不会经过代码压缩处理。"]}),"\n",(0,d.jsxs)(n.h2,{id:"更多用法",children:["更多用法",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#更多用法",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["在 React 组件中，可以通过",(0,d.jsx)(n.a,{href:"/guides/basic-features/env-vars#asset_prefix",children:"内置环境变量"}),"来添加该前缀："]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-tsx",children:"export default () => {\n  return (\n    <img src={`${process.env.ASSET_PREFIX}/upload/banner.png`}></img>\n  );\n};\n"})})})}),"\n",(0,d.jsxs)(n.p,{children:["另外，不论是在",(0,d.jsx)(n.a,{href:"/guides/basic-features/html",children:"自定义 HTML"})," 中，或是在 ",(0,d.jsx)(n.a,{href:"/apis/app/hooks/config/public",children:(0,d.jsx)(n.code,{children:"config/public/"})})," 下的任意 HTML 文件中，都可以直接使用 HTML 标签引用 ",(0,d.jsx)(n.code,{children:"config/upload/"})," 目录下的资源："]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-html",children:'<script src="/upload/index.js"></script>\n'})})})}),"\n",(0,d.jsxs)(n.p,{children:["如果设置了 ",(0,d.jsx)(n.a,{href:"/configure/app/dev/asset-prefix",children:(0,d.jsx)(n.code,{children:"dev.assetPrefix"})})," 或 ",(0,d.jsx)(n.a,{href:"/configure/app/output/asset-prefix",children:(0,d.jsx)(n.code,{children:"output.assetPrefix"})})," 前缀，也可以直接使用模板语法添加该前缀："]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-html",children:'<script src="<%=assetPrefix %>/upload/index.js"></script>\n'})})})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:["Modern.js 没有支持在 ",(0,d.jsx)(n.code,{children:"config/public/*.css"}),"（例如 background-image）中通过 URL 使用 ",(0,d.jsx)(n.code,{children:"config/upload/"})," 下的文件。"]}),"\n"]})]})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(l,e)})):l(e)}}}]);