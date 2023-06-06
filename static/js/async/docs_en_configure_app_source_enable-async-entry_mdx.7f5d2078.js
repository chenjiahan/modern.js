(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_source_enable-async-entry_mdx"],{45244:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return a},title:function(){return i},toc:function(){return t},default:function(){return c}});var s=r("9880"),o=r("23169"),a={sidebar_label:"enableAsyncEntry"},i="source.enableAsyncEntry",t=[{text:"Background",depth:2,id:"background"},{text:"Example",depth:2,id:"example"}];function d(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2",pre:"pre",div:"div"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"sourceenableasyncentry",children:["source.enableAsyncEntry",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourceenableasyncentry",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This option is used for webpack Module Federation scenario."}),"\n",(0,s.jsx)(n.p,{children:"When this option is enabled, Modern.js will wrap the automatically generated entry files with Dynamic Imports (Asynchronous Boundaries), allowing page code to consume remote modules generated by Module Federation."}),"\n",(0,s.jsxs)(n.h2,{id:"background",children:["Background",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#background",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["If you are not familiar with webpack Module Federation, please read the ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/concepts/module-federation/",target:"_blank",rel:"noopener noreferrer",children:"Module Federation documentation"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"First, enable this option in the configuration file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    enableAsyncEntry: true,\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then run the ",(0,s.jsx)(n.code,{children:"dev"})," or ",(0,s.jsx)(n.code,{children:"build"})," command, and you will see that the files automatically generated by Modern.js have the following structure:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"node_modules\n  └─ .modern-js\n     └─ main\n        ├─ bootstrap.jsx  #  real entry code\n        ├─ index.js      # asynchronous entry file\n        └─ index.html\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The contents of ",(0,s.jsx)(n.code,{children:"index.js"})," are as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import('./bootstrap.jsx');\n"})}),"\n",(0,s.jsx)(n.p,{children:"At this point, you can consume any remote module in the current page."}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["Modern.js does not have webpack's ModuleFederationPlugin plugin built in. Please configure the ModuleFederationPlugin yourself via ",(0,s.jsx)(n.a,{href:"/configure/app/tools/webpack-chain",children:"tools.webpackChain"}),"."]}),"\n"]})]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}}}]);