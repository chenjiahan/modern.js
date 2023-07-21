(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_advanced-features_bff_bff-proxy_mdx"],{49947:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s,i=r("15169"),o=r("43932"),t=r("9880"),d=r("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",code:"code",pre:"pre"},(0,d.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"use-proxy",children:["Use Proxy",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-proxy",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"By configuring the BFF proxy, API requests can be forwarded without manual coding"}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive caution",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"CAUTION"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsx)(n.p,{children:"Using a BFF proxy ensures that requests can enter the BFF handler. (eg the request path must contain a bff prefix)"}),"\n"]})]}),"\n",(0,t.jsxs)(n.p,{children:["Writing the following BFF proxy configuration in the ",(0,t.jsx)(n.code,{children:"modern.server-runtime.config.js"})," file will proxy requests sent to ",(0,t.jsx)(n.code,{children:"http://localhost:8080/api/v1/topics"})," to ",(0,t.jsx)(n.code,{children:"https://cnodejs.org/api/v1/topics"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:'title="modern.server-runtime.config.js"',children:"import { defineConfig } from '@modern-js/app-tools/server';\nexport default defineConfig({\n  bff: {\n    proxy: {\n      '/api/v1/topics': 'https://cnodejs.org',\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive note",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:["For more detail, see ",(0,t.jsx)(n.a,{href:"/configure/app/bff/proxy",children:"bff.proxy"}),". For more proxy info, see ",(0,t.jsx)(n.a,{href:"/guides/basic-features/proxy",children:"Proxy"}),"."]}),"\n"]})]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fmain-doc%2Fdocs%2Fen%2Fguides%2Fadvanced-features%2Fbff%2Fbff-proxy.mdx"]={toc:[],title:"Use Proxy",frontmatter:{sidebar_position:5,title:"Use Proxy"}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,(0,o._)((0,i._)({},e),{children:(0,t.jsx)(c,(0,i._)({},e))})):c(e)}}}]);