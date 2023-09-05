(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_output_enable-inline-scripts_mdx"],{50314:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return a}});var i,r=s("15169"),t=s("43932"),c=s("9880"),l=s("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",div:"div",a:"a",h3:"h3"},(0,l.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"type EnableInlineScripts =\n  | boolean\n  | RegExp\n  | ((params: { size: number; name: string }) => boolean);\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"false"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"打包工具："})," ",(0,c.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["用来控制生产环境中是否用 ",(0,c.jsx)(n.code,{children:"<script>"})," 标签将产物中的 script 文件（.js 文件）inline 到 HTML 中。"]}),"\n",(0,c.jsx)(n.p,{children:"注意，如果开启了这个选项，那么 script 文件将不会被写入产物目录中，而只会以 inline 脚本的形式存在于 HTML 文件中。"}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["当使用约定式路由时，如果开启了这个选项，需要将 ",(0,c.jsx)(n.a,{href:"https://modernjs.dev/configure/app/output/splitRouteChunks.html",target:"_blank",rel:"noopener noreferrer",children:(0,c.jsx)(n.code,{children:"output.splitRouteChunks"})})," 设置为 false。\n"]})})]}),"\n",(0,c.jsxs)(n.h3,{id:"示例",children:["示例",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"默认情况下，我们有这样的产物文件："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"dist/html/main/index.html\ndist/static/css/style.css\ndist/static/js/main.js\n"})}),"\n",(0,c.jsxs)(n.p,{children:["开启 ",(0,c.jsx)(n.code,{children:"output.enableInlineScripts"})," 选项后："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    enableInlineScripts: true,\n  },\n};\n"})}),"\n",(0,c.jsx)(n.p,{children:"产物文件将变成："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"dist/html/main/index.html\ndist/static/css/style.css\n"})}),"\n",(0,c.jsxs)(n.p,{children:["同时，",(0,c.jsx)(n.code,{children:"dist/static/js/main.js"})," 文件将被 inline 到 ",(0,c.jsx)(n.code,{children:"index.html"})," 中："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-html",children:"<html>\n  <body>\n    <script>\n      // content of dist/static/js/main.js\n    </script>\n  </body>\n</html>\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"通过正则匹配",children:["通过正则匹配",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#通过正则匹配",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["当你需要内联产物中的一部分 JS 文件时，你可以将 ",(0,c.jsx)(n.code,{children:"enableInlineScripts"})," 设置为一个正则表达式，匹配需要内联的 JS 文件的 URL。"]}),"\n",(0,c.jsxs)(n.p,{children:["比如，将产物中的 ",(0,c.jsx)(n.code,{children:"main.js"})," 内联到 HTML 中，你可以添加如下配置："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    enableInlineScripts: /\\/main\\.\\w+\\.js$/,\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["生产环境的文件名中默认包含了一个 hash 值，比如 ",(0,c.jsx)(n.code,{children:"static/js/main.18a568e5.js"}),"。因此，在正则表达式中需要通过 ",(0,c.jsx)(n.code,{children:"\\w+"})," 来匹配 hash。\n"]})})]}),"\n",(0,c.jsxs)(n.h3,{id:"通过函数匹配",children:["通过函数匹配",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#通过函数匹配",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["你也可以将 ",(0,c.jsx)(n.code,{children:"output.enableInlineScripts"})," 设置为一个函数，函数接收以下参数："]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"name"}),"：文件名，比如 ",(0,c.jsx)(n.code,{children:"static/js/main.18a568e5.js"}),"。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"size"}),"：文件大小，单位为 byte。"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"比如，我们希望内联小于 10KB 的资源，可以添加如下配置："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    enableInlineScripts({ size }) {\n      return size < 10 * 1000;\n    },\n  },\n};\n"})})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Foutput%2FenableInlineScripts.md"]={toc:[{text:"示例",id:"示例",depth:3},{text:"通过正则匹配",id:"通过正则匹配",depth:3},{text:"通过函数匹配",id:"通过函数匹配",depth:3}],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,t._)((0,r._)({},e),{children:(0,c.jsx)(d,(0,r._)({},e))})):d(e)}},10673:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return h}});var i,r=s("15169"),t=s("43932"),c=s("9880"),l=s("23169"),d=s("50314");function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,l.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"outputenableinlinescripts",children:["output.enableInlineScripts",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputenableinlinescripts",children:"#"})]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,c.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputenableinlinescripts",target:"_blank",rel:"noopener noreferrer",children:"output.enableInlineScripts"}),"。\n"]})})]}),"\n","\n",(0,c.jsx)(d.default,{})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Foutput%2Fenable-inline-scripts.mdx"]={toc:[],title:"output.enableInlineScripts",frontmatter:{sidebar_label:"enableInlineScripts"}};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,t._)((0,r._)({},e),{children:(0,c.jsx)(a,(0,r._)({},e))})):a(e)}}}]);