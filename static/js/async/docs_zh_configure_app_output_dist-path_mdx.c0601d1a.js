(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_output_dist-path_mdx"],{28534:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var r,t=s("15169"),i=s("43932"),d=s("9880"),c=s("23169");function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h3:"h3",a:"a"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type DistPathConfig = {\n  root?: string;\n  html?: string;\n  js?: string;\n  css?: string;\n  svg?: string;\n  font?: string;\n  wasm?: string;\n  image?: string;\n  media?: string;\n  server?: string;\n  worker?: string;\n};\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"默认值："})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"const defaultDistPath = {\n  root: 'dist',\n  html: 'html',\n  js: 'static/js',\n  css: 'static/css',\n  svg: 'static/svg',\n  font: 'static/font',\n  wasm: 'static/wasm',\n  image: 'static/image',\n  media: 'static/media',\n  server: 'bundles',\n  worker: 'worker',\n};\n"})}),"\n",(0,d.jsx)(n.p,{children:"设置构建产物的输出目录，Builder 会根据产物的类型输出到对应的子目录下。"}),"\n",(0,d.jsx)(n.p,{children:"其中："}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"root"}),": 表示所有构建产物输出的根目录。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"html"}),"：表示 HTML 文件的输出目录。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"js"}),"：表示 JavaScript 文件的输出目录。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"css"}),"：表示 CSS 样式文件的输出目录。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"svg"}),"：表示 SVG 图片的输出目录。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"font"}),"：表示字体文件的输出目录。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"wasm"}),"：表示 WebAssembly 文件的输出目录。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"image"}),"：表示非 SVG 图片的输出目录。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"media"}),"：表示视频等媒体资源的输出目录。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"server"}),": 表示服务端产物的输出目录，仅在 target 为 ",(0,d.jsx)(n.code,{children:"node"})," 时有效。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"worker"}),": 表示 worker 产物的输出目录，仅在 target 为 ",(0,d.jsx)(n.code,{children:"service-worker"})," 时有效。"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"示例",children:["示例",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["以 JavaScript 文件为例，会输出到 ",(0,d.jsx)(n.code,{children:"distPath.root"})," + ",(0,d.jsx)(n.code,{children:"distPath.js"})," 目录，即为 ",(0,d.jsx)(n.code,{children:"dist/static/js"}),"。"]}),"\n",(0,d.jsxs)(n.p,{children:["如果需要将 JavaScript 文件输出到 ",(0,d.jsx)(n.code,{children:"build/resource/js"})," 目录，可以这样设置："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    distPath: {\n      root: 'build',\n      js: 'resource/js',\n    },\n  },\n};\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/builder-doc/docs/zh/config/output/distPath.md"]={toc:[{text:"示例",id:"示例",depth:3}],title:"",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,i._(t._({},e),{children:(0,d.jsx)(o,t._({},e))})):o(e)}},7149:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var r,t=s("15169"),i=s("43932"),d=s("9880"),c=s("23169"),o=s.ir(s("28534"));function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"outputdistpath",children:["output.distPath",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputdistpath",children:"#"})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,d.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputdistpath",target:"_blank",rel:"noopener noreferrer",children:"output.distPath"}),"。\n"]})})]}),"\n","\n",(0,d.jsx)(o.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/main-doc/docs/zh/configure/app/output/dist-path.mdx"]={toc:[],title:"output.distPath",frontmatter:{sidebar_label:"distPath"}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,i._(t._({},e),{children:(0,d.jsx)(l,t._({},e))})):l(e)}}}]);