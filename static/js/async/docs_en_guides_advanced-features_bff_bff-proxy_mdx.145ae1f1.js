(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guides_advanced-features_bff_bff-proxy_mdx"],{45323:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return t},title:function(){return o},toc:function(){return c},default:function(){return a}});var s=r("12151"),i=r("21447"),t={sidebar_position:5,title:"Use Proxy"},o="Use Proxy",c=[];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",code:"code",button:"button",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"use-proxy",children:["Use Proxy",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-proxy",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"By configuring the BFF proxy, API requests can be forwarded without manual coding"}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive caution",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"CAUTION"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:["Using a BFF proxy ensures that requests can enter the BFF handler. (eg the request path must contain a bff prefix)","\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["Writing the following BFF proxy configuration in the ",(0,s.jsx)(n.code,{children:"modern.server-runtime.config.js"})," file will proxy requests sent to ",(0,s.jsx)(n.code,{children:"http://localhost:8080/api/v1/topics"})," to ",(0,s.jsx)(n.code,{children:"https://cnodejs.org/api/v1/topics"}),"."]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.server-runtime.config.js"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="modern.server-runtime.config.js"',children:"import { defineConfig } from '@modern-js/app-tools/server';\nexport default defineConfig({\n  bff: {\n    proxy: {\n      '/api/v1/topics': 'https://cnodejs.org',\n    },\n  },\n};\n"})})]})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive note",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:["For more detail, see ",(0,s.jsx)(n.a,{href:"/en/configure/app/bff/proxy",children:"bff.proxy"}),". For more proxy info, see ",(0,s.jsx)(n.a,{href:"/en/guides/basic-features/proxy",children:"Proxy"}),".","\n"]})]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}}}]);