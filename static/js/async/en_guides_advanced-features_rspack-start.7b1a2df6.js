"use strict";(self.webpackChunk_modern_js_main_doc_website=self.webpackChunk_modern_js_main_doc_website||[]).push([[47665],{56908:function(e,s,n){n.r(s),n.d(s,{default:function(){return d},frontmatter:function(){return l},title:function(){return c},toc:function(){return a}});var r=n(97458);function i(e){const s=Object.assign({div:"div",button:"button",pre:"pre",code:"code",span:"span"},e.components);return(0,r.jsxs)(s.div,{className:"language-bash",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"$ npx @modern-js/create myapp"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Please "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"select"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" the solution you want to create: Web App Solution"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Development Language: TS"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Package Management Tool: pnpm"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Build Tools: Rspack"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]})}var o=function(e={}){const{wrapper:s}=e.components||{};return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)};const l={title:"Rspack Start",sidebar_position:1},a=[{id:"initializing-an-rspack-project",text:"Initializing an Rspack project",depth:2},{id:"migrating-from-webpack-to-rspack",text:"Migrating from webpack to Rspack",depth:2}],c="Rspack Start";function t(e){const s=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",h2:"h2",strong:"strong",code:"code",div:"div",button:"button",pre:"pre",span:"span"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"rspack-start",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#rspack-start",children:"#"}),"Rspack Start"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"nofollow",children:"Rspack"})," is a Rust-based web bundler developed by the ByteDance Web Infra team. The core architecture of Rspack is aligned with the implementation of webpack, and provides out-of-the-box support for commonly used build features."]}),"\n",(0,r.jsx)(s.p,{children:"Rspack optimizes compilation performance by:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Highly LTO optimized Native code."}),"\n",(0,r.jsx)(s.li,{children:"Take full advantage of multi-core, and the entire compilation process is fully optimized for multi-threading."}),"\n",(0,r.jsx)(s.li,{children:"On-demand compilation based on request (Lazy Compilation), reducing the number of modules per compilation to improve the speed of cold start."}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"initializing-an-rspack-project",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#initializing-an-rspack-project",children:"#"}),"Initializing an Rspack project"]}),"\n",(0,r.jsxs)(s.p,{children:["The Modern.js generator provides an interactive question-and-answer interface to initialize a project. To create an Rspack project, simply select the ",(0,r.jsx)(s.strong,{children:"Rspack"})," build tool by running:"]}),"\n","\n",(0,r.jsx)(o,{}),"\n",(0,r.jsxs)(s.p,{children:["After the project is created, you can experience the project by running ",(0,r.jsx)(s.code,{children:"pnpm run dev"}),". For more project information, please refer to ",(0,r.jsx)(s.a,{href:"/en/guides/get-started/quick-start.html",children:"Quick Start"}),"."]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive tip",children:[(0,r.jsx)(s.p,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(s.div,{className:"modern-directive-content",children:[(0,r.jsx)(s.p,{children:"\nWhen using Rspack as the bundler, the following features are currently not supported:"}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Server-side rendering (SSR)"}),"\n",(0,r.jsx)(s.li,{children:"Static Site Generation (SSG)"}),"\n",(0,r.jsx)(s.li,{children:"Micro Frontend."}),"\n",(0,r.jsx)(s.li,{children:"Storybook debugging."}),"\n"]})]})]}),"\n",(0,r.jsxs)(s.h2,{id:"migrating-from-webpack-to-rspack",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#migrating-from-webpack-to-rspack",children:"#"}),"Migrating from webpack to Rspack"]}),"\n",(0,r.jsxs)(s.p,{children:["You can enable Rspack build by running ",(0,r.jsx)(s.code,{children:"pnpm run new"}),":"]}),"\n",(0,r.jsxs)(s.div,{className:"language-bash",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"$ pnpm run new"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Action\uff1a Enable features"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Enable features\uff1a Enable Rspack Build"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["After executing the command, enable the Rspack build in ",(0,r.jsx)(s.code,{children:"modern.config.ts"}),":"]}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" appTools"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { defineConfig } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/app-tools'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'rspack'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">({"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  runtime"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    router"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  plugins"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"appTools"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      bundler"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'experimental-rspack'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    })"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  ]"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive tip",children:[(0,r.jsx)(s.p,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsxs)(s.p,{children:["\nMigrating from webpack to Rspack may have some differences in build and configuration capabilities. For more details, please refer to ",(0,r.jsx)(s.a,{href:"https://modernjs.dev/builder/en/guide/advanced/rspack-start.html#migrating-from-webpack-to-rspack",target:"_blank",rel:"nofollow",children:"Configuration Differences"}),"."]})})]})]})}var d=function(e={}){const{wrapper:s}=e.components||{};return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}}}]);