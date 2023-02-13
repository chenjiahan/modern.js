"use strict";(self.webpackChunk_modern_js_main_doc_website=self.webpackChunk_modern_js_main_doc_website||[]).push([[57259],{96545:(e,s,l)=>{l.r(s),l.d(s,{default:()=>c,frontmatter:()=>r,title:()=>n,toc:()=>o});var i=l(97458);const r={title:"Compatibility",sidebar_position:5},o=[{id:"browserslist",text:"Browserslist",depth:2},{id:"polyfill",text:"Polyfill",depth:2},{id:"polyfill-at-compile",text:"Polyfill At Compile",depth:3},{id:"polyfill-at-runtime",text:"Polyfill At Runtime",depth:3}],n="Compatibility";function t(e){const s=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",div:"div",button:"button",pre:"pre",span:"span",h3:"h3",ul:"ul",li:"li",img:"img"},e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h1,{id:"compatibility",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#compatibility",children:"#"}),"Compatibility"]}),"\n",(0,i.jsxs)(s.h2,{id:"browserslist",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#browserslist",children:"#"}),"Browserslist"]}),"\n",(0,i.jsxs)(s.p,{children:["Modern.js supports the ",(0,i.jsx)(s.code,{children:"browserslist"})," field in the ",(0,i.jsx)(s.code,{children:"package.json"})," file, or a ",(0,i.jsx)(s.code,{children:".browserslistrc"})," file to specify the target browser range covered by the project."]}),"\n",(0,i.jsxs)(s.p,{children:["This value is used by ['@babel/preset-env'] (",(0,i.jsx)(s.a,{href:"https://babeljs.io/docs/en/babel-preset-env",target:"_blank",rel:"nofollow",children:"https://babeljs.io/docs/en/babel-preset-env"}),") and ['autoprefixer'] (",(0,i.jsx)(s.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"nofollow",children:"https://github.com/postcss/autoprefixer"}),") to determine the JavaScript syntax features to be converted and the CSS browser prefix to be added."]}),"\n",(0,i.jsx)(s.p,{children:"The default value in Modern.js as follow:"}),"\n",(0,i.jsxs)(s.div,{className:"language-js",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"["}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'> 0.01%'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'not dead'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'not op_mini all'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"];"})]}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.p,{children:["You can learn how to customize the browserslist ",(0,i.jsx)(s.a,{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"nofollow",children:"here"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["See Modern.js Builder docs to learn more ",(0,i.jsx)(s.a,{href:"https://modernjs.dev/builder/en/guide/advanced/browserslist.html",target:"_blank",rel:"nofollow",children:"Browserslist"})," info."]}),"\n",(0,i.jsxs)(s.div,{className:"modern-directive note",children:[(0,i.jsx)(s.p,{className:"modern-directive-title",children:"NOTE"}),(0,i.jsx)(s.div,{className:"modern-directive-content",children:(0,i.jsxs)(s.p,{children:["\nModern.js also supports configuring ",(0,i.jsx)(s.a,{href:"/en/configure/app/output/override-browserslist.html",children:"output.override Browserslist"})," to override the default browserslist value."]})})]}),"\n",(0,i.jsxs)(s.h2,{id:"polyfill",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#polyfill",children:"#"}),"Polyfill"]}),"\n",(0,i.jsxs)(s.h3,{id:"polyfill-at-compile",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#polyfill-at-compile",children:"#"}),"Polyfill At Compile"]}),"\n",(0,i.jsxs)(s.p,{children:["Modern.js inject the Polyfill code via [core-js] (",(0,i.jsx)(s.a,{href:"https://github.com/zloirock/core-js",target:"_blank",rel:"nofollow",children:"https://github.com/zloirock/core-js"}),") at compile time by default."]}),"\n",(0,i.jsx)(s.p,{children:"By default, the required Polyfill code will be introduced according to the settings of the Browserslist, so there is no need to worry about the Polyfill problem of the project source code and third-party dependencies, but because it contains some Polyfill code that is not used, the final bundle size may be increased."}),"\n",(0,i.jsxs)(s.div,{className:"modern-directive info",children:[(0,i.jsx)(s.p,{className:"modern-directive-title",children:"INFO"}),(0,i.jsx)(s.div,{className:"modern-directive-content",children:(0,i.jsxs)(s.p,{children:["\nFor case where Polyfill is not required for third-party dependencies, you can set ",(0,i.jsx)(s.a,{href:"/en/configure/app/output/polyfill.html",children:"'output.polyfill'"})," to ",(0,i.jsx)(s.code,{children:"usage"}),", so that Babel compiles only Polyfill code based on the syntax used in the code."]})})]}),"\n",(0,i.jsxs)(s.h3,{id:"polyfill-at-runtime",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#polyfill-at-runtime",children:"#"}),"Polyfill At Runtime"]}),"\n",(0,i.jsxs)(s.p,{children:["Modern.js also provides a runtime Polyfill solution based on browser ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent",target:"_blank",rel:"nofollow",children:"UA"})," information, which has the following advantages over Babel:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"It will not be inserted into the code, reducing the code ."}),"\n",(0,i.jsx)(s.li,{children:"The same browser will share a Polyfill code. Therefore, with more and more projects, the UA-based Polyfill code will be delivered faster and faster."}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["exec ",(0,i.jsx)(s.code,{children:"pnpm run new"})," to enable this features\uff1a"]}),"\n",(0,i.jsxs)(s.div,{className:"language-bash",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c \u542f\u7528\u53ef\u9009\u529f\u80fd"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" \u542f\u7528\u53ef\u9009\u529f\u80fd \u542f\u7528\u300c\u57fa\u4e8e UA \u7684 Polyfill\u300d\u529f\u80fd"})]}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.p,{children:["After executing the command, register the Polyfill plugin in ",(0,i.jsx)(s.code,{children:"modern.config.ts"}),":"]}),"\n",(0,i.jsxs)(s.div,{className:"language-ts",children:[(0,i.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" polyfillPlugin "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/plugin-polyfill'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(s.span,{className:"line"}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// https://modernjs.dev/docs/apis/app/config"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  plugins"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"polyfillPlugin"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()]"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.p,{children:["After configuring ",(0,i.jsx)(s.code,{children:"output.polyfill"})," as ",(0,i.jsx)(s.code,{children:"ua"})," and executing ",(0,i.jsx)(s.code,{children:"pnpm run build & & pnpm run serve"})," to start the server, visiting the page can see that the HTML product contains the following script:"]}),"\n",(0,i.jsxs)(s.div,{className:"language-js",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"src"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"/__polyfill__"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"crossorigin"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"></"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.p,{children:["Visit the page ",(0,i.jsx)(s.code,{children:"http://localhost:8080/__polyfill__"})," on Chrome 51 to see:"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/ua-polyfill.png",alt:"ua-polyfill"})}),"\n",(0,i.jsxs)(s.div,{className:"modern-directive caution",children:[(0,i.jsx)(s.p,{className:"modern-directive-title",children:"CAUTION"}),(0,i.jsx)(s.div,{className:"modern-directive-content",children:(0,i.jsx)(s.p,{children:"\nThis feature only works when using Modern.js built-in Web Server."})})]})]})}const c=function(e={}){const{wrapper:s}=e.components||{};return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(t,e)})):t(e)}}}]);