(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_config_html_disableHtmlFolder_md"],{50929:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return i},toc:function(){return d},default:function(){return a}});var t=s("12151"),l=s("21447");let c={},i="",d=[{text:"Example",depth:3,id:"example"}];function r(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",button:"button",pre:"pre",blockquote:"blockquote"},(0,l.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Remove the folder of the HTML files. When this option is enabled, the generated HTML file path will change from ",(0,t.jsx)(n.code,{children:"[name]/index.html"})," to ",(0,t.jsx)(n.code,{children:"[name].html"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["By default, the structure of HTML files in the ",(0,t.jsx)(n.code,{children:"dist"})," directory is:"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-bash",children:"/dist\n└── html\n    └── main\n        └── index.html\n"})})]})}),"\n",(0,t.jsxs)(n.p,{children:["Enable the ",(0,t.jsx)(n.code,{children:"html.disableHtmlFolder"})," config:"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    disableHtmlFolder: true,\n  },\n};\n"})})]})}),"\n",(0,t.jsx)(n.p,{children:"After recompiling, the directory structure of the HTML files in dist is:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-bash",children:"/dist\n└── html\n    └── main.html\n"})})]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["If you want to set the path of the HTML files, use the ",(0,t.jsx)(n.code,{children:"output.distPath.html"})," config."]}),"\n"]})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(r,e)})):r(e)}}}]);