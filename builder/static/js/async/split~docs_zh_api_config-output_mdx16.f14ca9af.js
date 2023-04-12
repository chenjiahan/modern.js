(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_zh_api_config-output_mdx16"],{96869:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return l},title:function(){return i},toc:function(){return t},default:function(){return r}});var c=s("12151"),d=s("23169"),l={},i="",t=[{text:"示例",depth:3,id:"示例"},{text:"通过正则匹配",depth:3,id:"通过正则匹配"}];function a(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",a:"a",h3:"h3",button:"button",pre:"pre"},(0,d.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"boolean | RegExp"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["用来控制生产环境中是否用 ",(0,c.jsx)(n.code,{children:"<style>"})," 标签将产物中的 style 文件（.css 文件）inline 到 HTML 中。"]}),"\n",(0,c.jsx)(n.p,{children:"注意，如果开启了这个选项，那么 style 文件将不会被写入产物目录中，而只会以 inline 样式的形式存在于 HTML 文件中。"}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:["当使用约定式路由时，如果开启了这个选项，需要将 ",(0,c.jsx)(n.a,{href:"https://modernjs.dev/configure/app/output/splitRouteChunks.html",target:"_blank",rel:"noopener noreferrer",children:(0,c.jsx)(n.code,{children:"output.splitRouteChunks"})})," 设置为 false。\n"]})]}),"\n",(0,c.jsxs)(n.h3,{id:"示例",children:["示例",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"默认情况下，我们有这样的产物文件："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-bash",children:"dist/html/main/index.html\ndist/static/css/style.css\ndist/static/js/main.js\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["开启 ",(0,c.jsx)(n.code,{children:"output.enableInlineStyles"})," 选项后："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    enableInlineStyles: true,\n  },\n};\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:"产物文件将变成："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-bash",children:"dist/html/main/index.html\ndist/static/js/main.js\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["同时，",(0,c.jsx)(n.code,{children:"dist/static/css/style.css"})," 文件将被 inline 到 ",(0,c.jsx)(n.code,{children:"index.html"})," 中："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-html",children:"<html>\n  <head>\n    <style>\n      /* content of dist/static/css/style.css */\n    </style>\n  </head>\n  <body></body>\n</html>\n"})})]})}),"\n",(0,c.jsxs)(n.h3,{id:"通过正则匹配",children:["通过正则匹配",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#通过正则匹配",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["当你需要内联产物中的一部分 CSS 文件时，你可以将 ",(0,c.jsx)(n.code,{children:"enableInlineStyles"})," 设置为一个正则表达式，匹配需要内联的 CSS 文件的 URL。"]}),"\n",(0,c.jsxs)(n.p,{children:["比如，将产物中的 ",(0,c.jsx)(n.code,{children:"main.css"})," 内联到 HTML 中，你可以添加如下配置："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    enableInlineStyles: /\\/main\\.\\w+\\.css$/,\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:["生产环境的文件名中默认包含了一个 hash 值，比如 ",(0,c.jsx)(n.code,{children:"/main.18a568e5.css"}),"。\n"]})]})]})}var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(a,e)})):a(e)}}}]);