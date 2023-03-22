(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guides_advanced-features_compatibility_mdx"],{26746:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var r in s)Object.defineProperty(e,r,{enumerable:!0,get:s[r]})}(s,{frontmatter:function(){return n},toc:function(){return o},title:function(){return t},default:function(){return a}});var l=r("12151"),i=r("21447");let n={title:"Compatibility",sidebar_position:5},o=[{id:"browserslist",text:"Browserslist",depth:2},{id:"polyfill",text:"Polyfill",depth:2},{id:"polyfill-at-compile",text:"Polyfill At Compile",depth:3},{id:"polyfill-at-runtime",text:"Polyfill At Runtime",depth:3}],t="Compatibility";function c(e){let s=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",div:"div",button:"button",pre:"pre",span:"span",h3:"h3",ul:"ul",li:"li",img:"img"},(0,i.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.h1,{id:"compatibility",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#compatibility",children:"#"}),"Compatibility"]}),"\n",(0,l.jsxs)(s.h2,{id:"browserslist",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#browserslist",children:"#"}),"Browserslist"]}),"\n",(0,l.jsxs)(s.p,{children:["Modern.js supports the ",(0,l.jsx)(s.code,{children:"browserslist"})," field in the ",(0,l.jsx)(s.code,{children:"package.json"})," file, or a ",(0,l.jsx)(s.code,{children:".browserslistrc"})," file to specify the target browser range covered by the project."]}),"\n",(0,l.jsxs)(s.p,{children:["This value is used by ['@babel/preset-env'] (",(0,l.jsx)(s.a,{href:"https://babeljs.io/docs/en/babel-preset-env",target:"_blank",rel:"noopener noreferrer",children:"https://babeljs.io/docs/en/babel-preset-env"}),") and ['autoprefixer'] (",(0,l.jsx)(s.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer",children:"https://github.com/postcss/autoprefixer"}),") to determine the JavaScript syntax features to be converted and the CSS browser prefix to be added."]}),"\n",(0,l.jsx)(s.p,{children:"The default value in Modern.js as follow:"}),"\n",(0,l.jsxs)(s.div,{className:"language-js",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"["}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'> 0.01%'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'not dead'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'not op_mini all'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"];"})]}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.p,{children:["You can learn how to customize the browserslist ",(0,l.jsx)(s.a,{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"noopener noreferrer",children:"here"}),"."]}),"\n",(0,l.jsxs)(s.p,{children:["See Modern.js Builder docs to learn more ",(0,l.jsx)(s.a,{href:"https://modernjs.dev/builder/en/guide/advanced/browserslist.html",target:"_blank",rel:"noopener noreferrer",children:"Browserslist"})," info."]}),"\n",(0,l.jsxs)(s.div,{className:"modern-directive note",children:[(0,l.jsx)(s.div,{className:"modern-directive-title",children:"NOTE"}),(0,l.jsx)(s.div,{className:"modern-directive-content",children:(0,l.jsxs)(s.p,{children:["\nModern.js also supports configuring ",(0,l.jsx)(s.a,{href:"/en/configure/app/output/override-browserslist.html",children:"output.override Browserslist"})," to override the default browserslist value."]})})]}),"\n",(0,l.jsxs)(s.h2,{id:"polyfill",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#polyfill",children:"#"}),"Polyfill"]}),"\n",(0,l.jsxs)(s.h3,{id:"polyfill-at-compile",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#polyfill-at-compile",children:"#"}),"Polyfill At Compile"]}),"\n",(0,l.jsxs)(s.p,{children:["Modern.js inject the Polyfill code via [core-js] (",(0,l.jsx)(s.a,{href:"https://github.com/zloirock/core-js",target:"_blank",rel:"noopener noreferrer",children:"https://github.com/zloirock/core-js"}),") at compile time by default."]}),"\n",(0,l.jsx)(s.p,{children:"By default, the required Polyfill code will be introduced according to the settings of the Browserslist, so there is no need to worry about the Polyfill problem of the project source code and third-party dependencies, but because it contains some Polyfill code that is not used, the final bundle size may be increased."}),"\n",(0,l.jsxs)(s.div,{className:"modern-directive info",children:[(0,l.jsx)(s.div,{className:"modern-directive-title",children:"INFO"}),(0,l.jsx)(s.div,{className:"modern-directive-content",children:(0,l.jsxs)(s.p,{children:["\nFor case where Polyfill is not required for third-party dependencies, you can set ",(0,l.jsx)(s.a,{href:"/en/configure/app/output/polyfill.html",children:"'output.polyfill'"})," to ",(0,l.jsx)(s.code,{children:"usage"}),", so that Babel compiles only Polyfill code based on the syntax used in the code."]})})]}),"\n",(0,l.jsxs)(s.h3,{id:"polyfill-at-runtime",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#polyfill-at-runtime",children:"#"}),"Polyfill At Runtime"]}),"\n",(0,l.jsxs)(s.p,{children:["Modern.js also provides a runtime Polyfill solution based on browser ",(0,l.jsx)(s.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent",target:"_blank",rel:"noopener noreferrer",children:"UA"})," information, which has the following advantages over Babel:"]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"It will not be inserted into the code, reducing the code ."}),"\n",(0,l.jsx)(s.li,{children:"The same browser will share a Polyfill code. Therefore, with more and more projects, the UA-based Polyfill code will be delivered faster and faster."}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["exec ",(0,l.jsx)(s.code,{children:"pnpm run new"})," to enable this features:"]}),"\n",(0,l.jsxs)(s.div,{className:"language-bash",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Action Enable features"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Enable features Enable UA-based Polyfill Feature"})]}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.p,{children:["After executing the command, register the Polyfill plugin in ",(0,l.jsx)(s.code,{children:"modern.config.ts"}),":"]}),"\n",(0,l.jsxs)(s.div,{className:"language-ts",children:[(0,l.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" polyfillPlugin "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/plugin-polyfill'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(s.span,{className:"line"}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  plugins"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"polyfillPlugin"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()]"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.p,{children:["After configuring ",(0,l.jsx)(s.code,{children:"output.polyfill"})," as ",(0,l.jsx)(s.code,{children:"ua"})," and executing ",(0,l.jsx)(s.code,{children:"pnpm run build & & pnpm run serve"})," to start the server, visiting the page can see that the HTML product contains the following script:"]}),"\n",(0,l.jsxs)(s.div,{className:"language-js",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"src"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"/__polyfill__"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"crossorigin"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"></"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.p,{children:["Visit the page ",(0,l.jsx)(s.code,{children:"http://localhost:8080/__polyfill__"})," on Chrome 51 to see:"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/ua-polyfill.png",alt:"ua-polyfill"})}),"\n",(0,l.jsxs)(s.div,{className:"modern-directive caution",children:[(0,l.jsx)(s.div,{className:"modern-directive-title",children:"CAUTION"}),(0,l.jsxs)(s.div,{className:"modern-directive-content",children:[(0,l.jsx)(s.p,{children:"\nThis feature only works when using Modern.js built-in Web Server."}),"If you need to customize the HTML template, please refer to ",(0,l.jsx)(s.a,{href:"/en/guides/basic-features/html.html",children:"HTML Template"}),(0,l.jsx)(s.p,{children:". Manually modifying the template through html.template / tools.html will cause this feature not work."})]})]})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.useMDXComponents)(),e.components);return s?(0,l.jsx)(s,Object.assign({},e,{children:(0,l.jsx)(c,e)})):c(e)}}}]);