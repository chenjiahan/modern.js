(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_configure_app_experiments_lazy-compilation_mdx"],{56607:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return r}});var l=n("12151"),i=n("21447");function o(e){let s=Object.assign({ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",span:"span",p:"p",h3:"h3",a:"a",h4:"h4"},(0,i.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.strong,{children:"Type:"})}),"\n"]}),"\n",(0,l.jsxs)(s.div,{className:"language-ts",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"LazyCompilationOptions"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Whether to enable lazy compilation for entries"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      entries"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Whether to enable lazy compilation for dynamic imports"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      imports"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    };"})}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"Default:"})," ",(0,l.jsx)(s.code,{children:"false"})]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"Bundler:"})," ",(0,l.jsx)(s.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"Used to enable the lazy compilation (i.e. compile on demand). When this config is enabled, Builder will compile entrypoints and dynamic imports only when they are used. It will improve the compilation startup time of the project."}),"\n",(0,l.jsx)(s.p,{children:"Lazy compilation only takes effect in the development."}),"\n",(0,l.jsxs)(s.h3,{id:"lazy-compilation-for-dynamic-imports",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#lazy-compilation-for-dynamic-imports",children:"#"}),"Lazy Compilation for Dynamic Imports"]}),"\n",(0,l.jsxs)(s.p,{children:["Lazy compile async modules introduced by ",(0,l.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import",target:"_blank",rel:"noopener noreferrer",children:"Dynamic Import"}),":"]}),"\n",(0,l.jsxs)(s.div,{className:"language-ts",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  experiments"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    lazyCompilation"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      imports"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      entries"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.p,{children:["When ",(0,l.jsx)(s.code,{children:"imports"})," option is enabled, all async modules will only be compiled when requested. If your project is a single-page application, and routing is split through Dynamic Import, there will be a significant effect of speeding up compilation."]}),"\n",(0,l.jsxs)(s.h3,{id:"lazy-compilation-for-entires",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#lazy-compilation-for-entires",children:"#"}),"Lazy Compilation for Entires"]}),"\n",(0,l.jsx)(s.p,{children:"In addition to lazy compilation for async modules, you can also choose to lazily compile both entries and async modules at the same time."}),"\n",(0,l.jsxs)(s.div,{className:"language-ts",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  experiments"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    lazyCompilation"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      imports"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      entries"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(s.p,{children:"The above config can also be simplified to:"}),"\n",(0,l.jsxs)(s.div,{className:"language-ts",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  experiments"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    lazyCompilation"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.p,{children:["When ",(0,l.jsx)(s.code,{children:"entries"})," option is enabled, all pages will not be compiled when the compilation is started, and the page will be compiled only when you visit it."]}),"\n",(0,l.jsx)(s.p,{children:"When using lazy compilation for entries, there are some considerations:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Only work for multi-page applications, no work for single-page applications."}),"\n",(0,l.jsx)(s.li,{children:"when you visit a page, there will be a white screen for a period of time due to waiting for the page to be compiled."}),"\n"]}),"\n",(0,l.jsxs)(s.h3,{id:"limitations",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#limitations",children:"#"}),"Limitations"]}),"\n",(0,l.jsxs)(s.h4,{id:"disable-split-chunks",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#disable-split-chunks",children:"#"}),"Disable split chunks"]}),"\n",(0,l.jsx)(s.p,{children:"When you enable lazy compilation, in order to ensure the compilation results, Builder will disable split chunks in the development. This will not affect the build results in the production, but will cause a difference between the build results of the development and production."}),"\n",(0,l.jsxs)(s.h4,{id:"use-proxy",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#use-proxy",children:"#"}),"Use proxy"]}),"\n",(0,l.jsx)(s.p,{children:"Lazy Compilation relies on the local development server of webpack. When you proxy a domain name to localhost, Lazy Compilation will not work properly. Therefore, if you need to develop with proxy, please disable Lazy Compilation."})]})}var r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.useMDXComponents)(),e.components);return s?(0,l.jsx)(s,Object.assign({},e,{children:(0,l.jsx)(o,e)})):o(e)}},11163:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return r},toc:function(){return a},title:function(){return t},default:function(){return h}});var l=n("12151"),i=n("21447"),o=n.ir(n("56607"));let r={sidebar_label:"lazyCompilation"},a=[],t="experiments.lazyCompilation";function c(e){let s=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.h1,{id:"experimentslazycompilation",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#experimentslazycompilation",children:"#"}),"experiments.lazyCompilation"]}),"\n",(0,l.jsxs)(s.div,{className:"modern-directive tip",children:[(0,l.jsx)(s.p,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(s.div,{className:"modern-directive-content",children:(0,l.jsxs)(s.p,{children:["\nThis config is provided by Modern.js Builder, more detail can see ",(0,l.jsx)(s.a,{href:"https://modernjs.dev/builder/en/api/config-experiments.html#experimentslazycompilation",target:"_blank",rel:"noopener noreferrer",children:"experiments.lazyCompilation"}),"."]})})]}),"\n","\n",(0,l.jsx)(o.default,{})]})}var h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.useMDXComponents)(),e.components);return s?(0,l.jsx)(s,Object.assign({},e,{children:(0,l.jsx)(c,e)})):c(e)}}}]);