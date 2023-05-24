(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_advanced-features_compatibility_mdx"],{27098:function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return o}});var n=s("9880"),i=s("23169");function t(e){var r=Object.assign({h3:"h3",a:"a",p:"p",ul:"ul",li:"li",code:"code",pre:"pre",img:"img",div:"div"},(0,i.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.h3,{id:"polyfill-at-runtime",children:["Polyfill At Runtime",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#polyfill-at-runtime",children:"#"})]}),"\n",(0,n.jsxs)(r.p,{children:["Modern.js also provides a runtime Polyfill solution based on browser ",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent",target:"_blank",rel:"noopener noreferrer",children:"UA"})," information, which has the following advantages over Babel:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"It will not be inserted into the code, reducing the code ."}),"\n",(0,n.jsx)(r.li,{children:"The same browser will share a Polyfill code. Therefore, with more and more projects, the UA-based Polyfill code will be delivered faster and faster."}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["exec ",(0,n.jsx)(r.code,{children:"pnpm run new"})," to enable this features:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"? Action Enable features\n? Enable features Enable UA-based Polyfill Feature\n"})}),"\n",(0,n.jsxs)(r.p,{children:["After executing the command, register the Polyfill plugin in ",(0,n.jsx)(r.code,{children:"modern.config.ts"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import polyfillPlugin from '@modern-js/plugin-polyfill';\n\nexport default defineConfig({\n  plugins: [..., polyfillPlugin()],\n});\n"})}),"\n",(0,n.jsxs)(r.p,{children:["After configuring ",(0,n.jsx)(r.code,{children:"output.polyfill"})," as ",(0,n.jsx)(r.code,{children:"ua"})," and executing ",(0,n.jsx)(r.code,{children:"pnpm run build & & pnpm run serve"})," to start the server, visiting the page can see that the HTML product contains the following script:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'<script src="/__polyfill__" crossorigin></script>\n'})}),"\n",(0,n.jsxs)(r.p,{children:["Visit the page ",(0,n.jsx)(r.code,{children:"http://localhost:8080/__polyfill__"})," on Chrome 51 to see:"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/ua-polyfill.png",alt:"ua-polyfill"})}),"\n",(0,n.jsxs)(r.div,{className:"modern-directive caution",children:[(0,n.jsx)(r.div,{className:"modern-directive-title",children:"CAUTION"}),(0,n.jsxs)(r.div,{className:"modern-directive-content",children:[(0,n.jsx)(r.p,{children:"This feature only works when using Modern.js built-in Web Server."}),"\n",(0,n.jsxs)(r.p,{children:["If you need to customize the HTML template, please refer to ",(0,n.jsx)(r.a,{href:"/guides/basic-features/html",children:"HTML Template"}),". Manually modifying the template through html.template / tools.html will cause this feature not work.\n"]})]})]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(t,e)})):t(e)}},58269:function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var s in r)Object.defineProperty(e,s,{enumerable:!0,get:r[s]})}(r,{frontmatter:function(){return o},title:function(){return l},toc:function(){return d},default:function(){return c}});var n=s("9880"),i=s("23169"),t=s.ir(s("27098")),o={sidebar_position:5},l="Browser Compatibility",d=[{text:"Browserslist Configuration",depth:2,id:"browserslist-configuration"},{text:"Browserslist",depth:2,id:"browserslist"},{text:"Polyfill",depth:2,id:"polyfill"},{text:"Polyfill At Compile",depth:3,id:"polyfill-at-compile"}];function a(e){var r=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre",div:"div",h3:"h3"},(0,i.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.h1,{id:"browser-compatibility",children:["Browser Compatibility",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#browser-compatibility",children:"#"})]}),"\n",(0,n.jsxs)(r.h2,{id:"browserslist-configuration",children:["Browserslist Configuration",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#browserslist-configuration",children:"#"})]}),"\n",(0,n.jsxs)(r.p,{children:["Modern.js supports setting the browserslist for your web applications. You can set the ",(0,n.jsx)(r.a,{href:"https://browsersl.ist/",target:"_blank",rel:"noopener noreferrer",children:"Browserslist"})," in the ",(0,n.jsx)(r.code,{children:".browserslistrc"})," file."]}),"\n",(0,n.jsxs)(r.p,{children:["When you create a new Modern.js project, it includes a ",(0,n.jsx)(r.code,{children:".browserslistrc"})," configuration by default, which means that JavaScript code will be compiled to ES6."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",meta:'title=".browserslistrc"',children:"chrome >= 51\nedge >= 15\nfirefox >= 54\nsafari >= 10\nios_saf >= 10\n"})}),"\n",(0,n.jsxs)(r.div,{className:"modern-directive tip",children:[(0,n.jsx)(r.div,{className:"modern-directive-title",children:"TIP"}),(0,n.jsx)(r.div,{className:"modern-directive-content",children:(0,n.jsxs)(r.p,{children:["Please refer to ",(0,n.jsx)(r.a,{href:"https://modernjs.dev/builder/en/guide/advanced/browserslist",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - Browserslist"})," for more information.\n"]})})]}),"\n",(0,n.jsxs)(r.h2,{id:"browserslist",children:["Browserslist",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#browserslist",children:"#"})]}),"\n",(0,n.jsxs)(r.p,{children:["Modern.js supports the ",(0,n.jsx)(r.code,{children:"browserslist"})," field in the ",(0,n.jsx)(r.code,{children:"package.json"})," file, or a ",(0,n.jsx)(r.code,{children:".browserslistrc"})," file to specify the target browser range covered by the project."]}),"\n",(0,n.jsxs)(r.p,{children:["This value is used by ['@babel/preset-env'] (",(0,n.jsx)(r.a,{href:"https://babeljs.io/docs/en/babel-preset-env",target:"_blank",rel:"noopener noreferrer",children:"https://babeljs.io/docs/en/babel-preset-env"}),") and ['autoprefixer'] (",(0,n.jsx)(r.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer",children:"https://github.com/postcss/autoprefixer"}),") to determine the JavaScript syntax features to be converted and the CSS browser prefix to be added."]}),"\n",(0,n.jsx)(r.p,{children:"The default value in Modern.js as follow:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"['> 0.01%', 'not dead', 'not op_mini all'];\n"})}),"\n",(0,n.jsxs)(r.p,{children:["You can learn how to customize the browserslist ",(0,n.jsx)(r.a,{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"noopener noreferrer",children:"here"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["See Modern.js Builder docs to learn more ",(0,n.jsx)(r.a,{href:"https://modernjs.dev/builder/en/guide/advanced/browserslist.html",target:"_blank",rel:"noopener noreferrer",children:"Browserslist"})," info."]}),"\n",(0,n.jsxs)(r.div,{className:"modern-directive note",children:[(0,n.jsx)(r.div,{className:"modern-directive-title",children:"NOTE"}),(0,n.jsxs)(r.div,{className:"modern-directive-content",children:[(0,n.jsxs)(r.p,{children:["Modern.js also supports configuring ",(0,n.jsx)(r.a,{href:"/configure/app/output/override-browserslist",children:"output.override Browserslist"})," to override the default browserslist value."]}),"\n"]})]}),"\n",(0,n.jsxs)(r.h2,{id:"polyfill",children:["Polyfill",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#polyfill",children:"#"})]}),"\n",(0,n.jsxs)(r.h3,{id:"polyfill-at-compile",children:["Polyfill At Compile",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#polyfill-at-compile",children:"#"})]}),"\n",(0,n.jsxs)(r.p,{children:["Modern.js inject the Polyfill code via [core-js] (",(0,n.jsx)(r.a,{href:"https://github.com/zloirock/core-js",target:"_blank",rel:"noopener noreferrer",children:"https://github.com/zloirock/core-js"}),") at compile time by default."]}),"\n",(0,n.jsx)(r.p,{children:"By default, the required Polyfill code will be introduced according to the settings of the Browserslist, so there is no need to worry about the Polyfill problem of the project source code and third-party dependencies, but because it contains some Polyfill code that is not used, the final bundle size may be increased."}),"\n",(0,n.jsxs)(r.div,{className:"modern-directive info",children:[(0,n.jsx)(r.div,{className:"modern-directive-title",children:"INFO"}),(0,n.jsxs)(r.div,{className:"modern-directive-content",children:[(0,n.jsxs)(r.p,{children:["For case where Polyfill is not required for third-party dependencies, you can set ",(0,n.jsx)(r.a,{href:"/configure/app/output/polyfill",children:"'output.polyfill'"})," to ",(0,n.jsx)(r.code,{children:"usage"}),", so that Babel compiles only Polyfill code based on the syntax used in the code."]}),"\n"]})]}),"\n","\n",(0,n.jsx)(t.default,{})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}}}]);