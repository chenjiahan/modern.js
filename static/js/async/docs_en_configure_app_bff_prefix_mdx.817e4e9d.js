(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_bff_prefix_mdx"],{50443:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var s,i=r("15169"),o=r("43932"),c=r("9880"),d=r("23169"),l=r.ir(r("61781"));function t(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre"},(0,d.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"bffprefix",children:["bff.prefix",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bffprefix",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Type:"})," ",(0,c.jsx)(n.code,{children:"string"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Default:"})," ",(0,c.jsx)(n.code,{children:"/api"})]}),"\n"]}),"\n","\n",(0,c.jsx)(l.default,{}),"\n",(0,c.jsxs)(n.p,{children:["By default, the prefix for accessing routes in the BFF API directory is ",(0,c.jsx)(n.code,{children:"/api"}),", as shown in the following directory structure:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"api\n└── hello.ts\n"})}),"\n",(0,c.jsxs)(n.p,{children:["The route corresponding to ",(0,c.jsx)(n.code,{children:"api/hello.ts"})," when accessed is ",(0,c.jsx)(n.code,{children:"localhost:8080/api/hello"}),"."]}),"\n",(0,c.jsx)(n.p,{children:"This configuration option can modify the default route prefix:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  bff: {\n    prefix: '/api-demo',\n  },\n});\n"})}),"\n",(0,c.jsxs)(n.p,{children:["The corresponding route for ",(0,c.jsx)(n.code,{children:"api/hello.ts"})," when accessed is ",(0,c.jsx)(n.code,{children:"localhost:8080/api-demo/hello"}),"."]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/main-doc/docs/en/configure/app/bff/prefix.mdx"]={toc:[],title:"bff.prefix",frontmatter:{sidebar_label:"prefix"}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,o._(i._({},e),{children:(0,c.jsx)(t,i._({},e))})):t(e)}}}]);