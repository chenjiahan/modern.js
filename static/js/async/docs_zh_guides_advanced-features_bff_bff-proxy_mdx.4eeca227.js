(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_advanced-features_bff_bff-proxy_mdx"],{3547:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return d},toc:function(){return t},default:function(){return a}});var s=r("9880"),i=r("23169"),c={sidebar_position:5,title:"使用 BFF 代理"},d="使用 BFF 代理",t=[];function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",code:"code",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"使用-bff-代理",children:["使用 BFF 代理",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-bff-代理",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"通过配置 BFF 代理，无需手动写码，即可对 API 请求进行转发。"}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive caution",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"CAUTION"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsx)(n.p,{children:"使用 BFF 代理需确保请求能进入 BFF handler。（例如请求路径必须包含 bff prefix）"}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["在 ",(0,s.jsx)(n.code,{children:"modern.server-runtime.config.js"})," 文件中编写以下 BFF 代理配置，会将发送到 ",(0,s.jsx)(n.code,{children:"http://localhost:8080/api/v1/topics"})," 的请求代理到 ",(0,s.jsx)(n.code,{children:"https://cnodejs.org/api/v1/topics"}),"。"]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.server-runtime.config.js"}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="modern.server-runtime.config.js"',children:"import { defineConfig } from '@modern-js/app-tools/server';\nexport default defineConfig({\n  bff: {\n    proxy: {\n      '/api/v1/topics': 'https://cnodejs.org',\n    },\n  },\n};\n"})})})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive note",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["详细 API 请查看 ",(0,s.jsx)(n.a,{href:"/configure/app/bff/proxy",children:"BFF 代理"}),"。更多 Modern.js 代理的能力可查看",(0,s.jsx)(n.a,{href:"/guides/basic-features/proxy",children:"调试代理"}),"。"]}),"\n"]})]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);