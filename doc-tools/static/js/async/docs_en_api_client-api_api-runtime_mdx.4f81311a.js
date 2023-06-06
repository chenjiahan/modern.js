(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_api_client-api_api-runtime_mdx"],{78832:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return o},title:function(){return i},toc:function(){return d},default:function(){return u}});var a=r("9880"),t=r("23169"),s=r.ir(r("36979")),o={},i="Runtime API",d=[{text:"usePageData",depth:2,id:"usepagedata"},{text:"useLang",depth:2,id:"uselang"},{text:"useDark",depth:2,id:"usedark"},{text:"useI18n",depth:2,id:"usei18n"},{text:"Router Hook",depth:2,id:"router-hook"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code"},(0,t.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"runtime-api",children:["Runtime API",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#runtime-api",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Modern.js Doc exposes some runtime APIs, which is convenient for you to do some custom logic."}),"\n",(0,a.jsxs)(n.h2,{id:"usepagedata",children:["usePageData",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usepagedata",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Get the data of the current page, and the return value is an object, which contains all the data of the current page."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { usePageData } from '@modern-js/doc-tools/runtime';\n\nfunction MyComponent() {\n  const pageData = usePageData();\n  return <div>{pageData.page.title}</div>;\n}\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"uselang",children:["useLang",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#uselang",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Get the current language, the return value is a string, which is the current language."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { useLang } from '@modern-js/doc-tools/runtime';\n\nfunction MyComponent() {\n  const lang = useLang();\n  // lang === 'zh-CN'\n  return <div>{lang}</div>;\n}\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"usedark",children:["useDark",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usedark",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Whether it is dark mode currently, the return value is a boolean value."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { useDark } from '@modern-js/doc-tools/runtime';\n\nfunction MyComponent() {\n  const dark = useDark();\n  return <div>{dark}</div>;\n}\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"usei18n",children:["useI18n",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usei18n",children:"#"})]}),"\n","\n",(0,a.jsx)(s.default,{}),"\n",(0,a.jsxs)(n.h2,{id:"router-hook",children:["Router Hook",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#router-hook",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["The framework internally uses and re-exports all APIs of ",(0,a.jsx)(n.code,{children:"react-router-dom"}),", you can use it like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { useLocation } from '@modern-js/doc-tools/runtime';\n\nfunction MyComponent() {\n  const location = useLocation();\n  return <div>{location.pathname}</div>;\n}\n"})})]})}var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(c,e)})):c(e)}}}]);