(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["splitted~docs_zh_api_config-output_mdx11"],{83466:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return l},toc:function(){return i},default:function(){return o}});var r=n("12151");let l=void 0,i=[{id:"示例",text:"示例",depth:3}];function c(s){let e=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",div:"div",button:"button",pre:"pre",span:"span"},s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"类型："})," ",(0,r.jsx)(e.code,{children:"boolean | string"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"默认值："})," ",(0,r.jsx)(e.code,{children:"'/'"})]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["在生产环境使用 CDN 部署时，可使用该选项设置静态资源的 URL 前缀，对应 webpack 的 ",(0,r.jsx)(e.a,{href:"https://webpack.js.org/guides/public-path/",target:"_blank",rel:"nofollow",children:"output.publicPath"})," 配置。"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"assetPrefix"})," 会影响构建产物中绝大部分静态资源的 URL，包括 JavaScript 文件、CSS 文件、图片、视频等。如果指定了一个错误的值，则在加载这些资源时可能会出现 404 错误。"]}),"\n",(0,r.jsxs)(e.p,{children:["该配置项仅用于生产环境。在开发环境下，请使用 ",(0,r.jsx)(e.code,{children:"dev.assetPrefix"})," 配置项进行设置。"]}),"\n",(0,r.jsxs)(e.p,{children:["设置后，项目的 JavaScript、CSS、图片等静态资源的 URL 都会加上 ",(0,r.jsx)(e.code,{children:"output.assetPrefix"})," 作为前缀："]}),"\n",(0,r.jsxs)(e.h3,{id:"示例",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"}),"示例"]}),"\n",(0,r.jsxs)(e.div,{className:"language-js",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  output"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    assetPrefix"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'https://cdn.example.com/assets/'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsx)(e.p,{children:"构建之后，可以看到 JS 文件从以下地址加载："}),"\n",(0,r.jsxs)(e.div,{className:"language-html",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defer"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"src"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"https://cdn.example.com/assets/static/js/main.ebc4ff4f.js"'})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"></"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]})]})}var o=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(c,s)})):c(s)}}}]);