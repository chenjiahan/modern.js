"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[8421],{61352:function(e,n,r){r.r(n),r.d(n,{content:function(){return t},frontmatter:function(){return d},title:function(){return o},toc:function(){return s}});var i=r(39980);const d=void 0,s=[{id:"bundler",text:"Bundler",depth:2},{id:"rspack",text:"Rspack",depth:2},{id:"builder",text:"Builder",depth:2},{id:"builder-provider",text:"Builder Provider",depth:2},{id:"modern_js",text:"MODERN_JS",depth:2},{id:"edenx",text:"EdenX",depth:2}],o="Glossary",t='"# Glossary\\n\\n## Bundler\\n\\nRefers to module bundlers such as `webpack`, `turbopack` and `rspack`.\\n\\nThe main goal of bundlers is to bundle JavaScript, CSS and other files together, and the bundled files can be used in the browser, Node.js or other environments. When bundler processes the Web application, it builds a dependency graph and then combines every module into one or more bundles.\\n\\n## Rspack\\n\\nA Rust Bundler developed by the ByteDance Web Infra team. The core architecture of rspack is aligned with the implementation of webpack, and provides out-of-the-box support for commonly used build features. In the long run, rspack will align the main APIs of webpack and be compatible with the mainstream webpack loaders and plugins to ensure that developers can smoothly migrate from webpack to rspack.\\n\\nRspack optimizes compilation performance by:\\n\\n- Highly LTO optimized Native code.\\n- Take full advantage of multi-core, and the entire compilation process is fully optimized for multi-threading.\\n- On-demand compilation based on request (Lazy Compilation), reducing the number of modules per compilation to improve the speed of cold start.\\n\\n:::tip\\nRspack is still in development and has not been open sourced yet.\\n:::\\n\\n## Builder\\n\\nBuild Engine. The goal of Builder is to \\"reuse the best practices of build tools\\".\\n\\nBundlers are low-level, if we build a project based on webpack, we need to fully understand the webpack config and many webpack plugins and loaders, then spend a lot of time to combine them.\\n\\nBuilder is a out-of-box build tools. By using Builder, you can quickly gain the ability to build a modern web application.\\n\\nThe layers inside the Builder are as follows:\\n\\n![](https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/builder-struct-10092.png)\\n\\n## Builder Provider\\n\\nBuilder Provider is a part of Builder. Providers implements corresponding build feature based on specific bundlers.\\n\\nCurrently there are two Providers:\\n\\n- `@modern-js/builder-webpack-provider`: Based on webpack.\\n- `@modern-js/builder-rspack-provider`: Based on rspack.\\n\\n## {MODERN_JS}\\n\\nWeb engineering system.\\n\\n{MODERN_JS} is open sourced by the ByteDance Web Infra team, provides a series of best practices for modern web development, such as integrated development of frontend and backend, conventional routing, building solutions, style solutions, etc.\\n\\n[{MODERN_JS} Repository](https://github.com/modern-js-dev/modern.js).\\n\\n## EdenX\\n\\nByteDance\'s internal web engineering system, implemented based on {MODERN_JS}.\\n"';function a(e){const n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",div:"div",img:"img"},e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"glossary",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#glossary",children:"#"}),"Glossary"]}),"\n",(0,i.jsxs)(n.h2,{id:"bundler",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bundler",children:"#"}),"Bundler"]}),"\n",(0,i.jsxs)(n.p,{children:["Refers to module bundlers such as ",(0,i.jsx)(n.code,{children:"webpack"}),", ",(0,i.jsx)(n.code,{children:"turbopack"})," and ",(0,i.jsx)(n.code,{children:"rspack"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The main goal of bundlers is to bundle JavaScript, CSS and other files together, and the bundled files can be used in the browser, Node.js or other environments. When bundler processes the Web application, it builds a dependency graph and then combines every module into one or more bundles."}),"\n",(0,i.jsxs)(n.h2,{id:"rspack",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rspack",children:"#"}),"Rspack"]}),"\n",(0,i.jsx)(n.p,{children:"A Rust Bundler developed by the ByteDance Web Infra team. The core architecture of rspack is aligned with the implementation of webpack, and provides out-of-the-box support for commonly used build features. In the long run, rspack will align the main APIs of webpack and be compatible with the mainstream webpack loaders and plugins to ensure that developers can smoothly migrate from webpack to rspack."}),"\n",(0,i.jsx)(n.p,{children:"Rspack optimizes compilation performance by:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Highly LTO optimized Native code."}),"\n",(0,i.jsx)(n.li,{children:"Take full advantage of multi-core, and the entire compilation process is fully optimized for multi-threading."}),"\n",(0,i.jsx)(n.li,{children:"On-demand compilation based on request (Lazy Compilation), reducing the number of modules per compilation to improve the speed of cold start."}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.p,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsx)(n.p,{children:"\nRspack is still in development and has not been open sourced yet."})})]}),"\n",(0,i.jsxs)(n.h2,{id:"builder",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builder",children:"#"}),"Builder"]}),"\n",(0,i.jsx)(n.p,{children:'Build Engine. The goal of Builder is to "reuse the best practices of build tools".'}),"\n",(0,i.jsx)(n.p,{children:"Bundlers are low-level, if we build a project based on webpack, we need to fully understand the webpack config and many webpack plugins and loaders, then spend a lot of time to combine them."}),"\n",(0,i.jsx)(n.p,{children:"Builder is a out-of-box build tools. By using Builder, you can quickly gain the ability to build a modern web application."}),"\n",(0,i.jsx)(n.p,{children:"The layers inside the Builder are as follows:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/builder-struct-10092.png",alt:""})}),"\n",(0,i.jsxs)(n.h2,{id:"builder-provider",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-provider",children:"#"}),"Builder Provider"]}),"\n",(0,i.jsx)(n.p,{children:"Builder Provider is a part of Builder. Providers implements corresponding build feature based on specific bundlers."}),"\n",(0,i.jsx)(n.p,{children:"Currently there are two Providers:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@modern-js/builder-webpack-provider"}),": Based on webpack."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@modern-js/builder-rspack-provider"}),": Based on rspack."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#",children:"#"}),"Modern.js"]}),"\n",(0,i.jsx)(n.p,{children:"Web engineering system."}),"\n",(0,i.jsxs)(n.p,{children:["Modern.js"," is open sourced by the ByteDance Web Infra team, provides a series of best practices for modern web development, such as integrated development of frontend and backend, conventional routing, building solutions, style solutions, etc."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.a,{href:"https://github.com/modern-js-dev/modern.js",target:"_blank",rel:"nofollow",children:["Modern.js"," Repository"]}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"edenx",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#edenx",children:"#"}),"EdenX"]}),"\n",(0,i.jsxs)(n.p,{children:["ByteDance's internal web engineering system, implemented based on ","Modern.js","."]})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}}}]);