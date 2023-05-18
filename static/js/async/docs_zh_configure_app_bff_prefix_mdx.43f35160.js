(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_bff_prefix_mdx"],{63729:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return d},toc:function(){return l},default:function(){return o}});var i=s("9880"),r=s("23169"),c={sidebar_label:"prefix"},d="bff.prefix",l=[];function a(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",div:"div",p:"p",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"bffprefix",children:["bff.prefix",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bffprefix",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"类型："})," ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"默认值："})," ",(0,i.jsx)(n.code,{children:"/api"})]}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive caution",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"注意"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsxs)(n.p,{children:["请先在当前应用项目根目录使用【",(0,i.jsx)(n.a,{href:"/apis/app/commands#modern-new",children:"new"}),"】 启用 BFF 功能。"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.p,{children:["默认情况下，BFF API 目录下的路由访问前缀是 ",(0,i.jsx)(n.code,{children:"/api"}),", 如下目录结构："]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-bash",children:"api\n└── hello.ts\n"})})})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"api/hello.ts"})," 访问时对应的路由为 ",(0,i.jsx)(n.code,{children:"localhost:8080/api/hello"}),"。"]}),"\n",(0,i.jsx)(n.p,{children:"该配置选项可以修改默认的路由前缀："}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  bff: {\n    prefix: '/api-demo',\n  },\n});\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["对应的 ",(0,i.jsx)(n.code,{children:"api/hello.ts"})," 访问路由为 ",(0,i.jsx)(n.code,{children:"localhost:8080/api-demo/hello"}),"。"]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}}}]);