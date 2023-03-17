(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_configure_app_html_disable-html-folder_mdx"],{80319:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return c}});var l=n("12151"),r=n("21447");function i(e){let s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",button:"button",pre:"pre",span:"span",blockquote:"blockquote"},(0,r.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"类型："})," ",(0,l.jsx)(s.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"默认值："})," ",(0,l.jsx)(s.code,{children:"false"})]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["移除 HTML 产物对应的文件夹。开启该选项后，生成的 HTML 文件目录会从 ",(0,l.jsx)(s.code,{children:"[name]/index.html"})," 变为 ",(0,l.jsx)(s.code,{children:"[name].html"}),"。"]}),"\n",(0,l.jsxs)(s.h3,{id:"示例",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"}),"示例"]}),"\n",(0,l.jsxs)(s.p,{children:["默认情况下，HTML 产物在 ",(0,l.jsx)(s.code,{children:"dist"})," 目录下的结构为："]}),"\n",(0,l.jsxs)(s.div,{className:"language-bash",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"/dist"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"└── html"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    └── main"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        └── index.html"})}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.p,{children:["开启 ",(0,l.jsx)(s.code,{children:"html.disableHtmlFolder"})," 配置:"]}),"\n",(0,l.jsxs)(s.div,{className:"language-js",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  html"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    disableHtmlFolder"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(s.p,{children:"重新编译后，HTML 产物在 dist 中的目录结构如下："}),"\n",(0,l.jsxs)(s.div,{className:"language-bash",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"/dist"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"└── html"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    └── main.html"})}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsxs)(s.p,{children:["如果需要设置 HTML 文件在 dist 目录中的路径，请使用 ",(0,l.jsx)(s.code,{children:"output.distPath.html"})," 配置。"]}),"\n"]})]})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.useMDXComponents)(),e.components);return s?(0,l.jsx)(s,Object.assign({},e,{children:(0,l.jsx)(i,e)})):i(e)}},37896:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return c},toc:function(){return a},title:function(){return o},default:function(){return d}});var l=n("12151"),r=n("21447"),i=n.ir(n("80319"));let c={sidebar_label:"disableHtmlFolder"},a=[],o="html.disableHtmlFolder";function t(e){let s=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,r.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.h1,{id:"htmldisablehtmlfolder",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#htmldisablehtmlfolder",children:"#"}),"html.disableHtmlFolder"]}),"\n",(0,l.jsxs)(s.div,{className:"modern-directive tip",children:[(0,l.jsx)(s.p,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(s.div,{className:"modern-directive-content",children:(0,l.jsxs)(s.p,{children:["\n该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,l.jsx)(s.a,{href:"https://modernjs.dev/builder/api/config-html.html#htmldisablehtmlfolder",target:"_blank",rel:"noopener noreferrer",children:"html.disableHtmlFolder"}),"。"]})})]}),"\n","\n",(0,l.jsx)(i.default,{})]})}var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.useMDXComponents)(),e.components);return s?(0,l.jsx)(s,Object.assign({},e,{children:(0,l.jsx)(t,e)})):t(e)}}}]);