(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_server_ssr-by-entries_mdx"],{35816:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return c},title:function(){return t},toc:function(){return d},default:function(){return a}});var r=n("12151"),i=n("23169"),c={sidebar_label:"ssrByEntries"},t="server.ssrByEntries",d=[];function o(e){var s=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"server-ssrbyentries",children:["server.ssrByEntries",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#server-ssrbyentries",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"类型："})," ",(0,r.jsx)(s.code,{children:"Object"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"默认值："})," ",(0,r.jsx)(s.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["按入口设置 ssr 选项，选项内的属性同 ",(0,r.jsx)(s.a,{href:"/zh/configure/app/server/ssr",children:"ssr"}),"，指定值会和 ssr 属性内容做替换合并操作，例如："]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive info",children:[(0,r.jsx)(s.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsxs)(s.div,{className:"modern-directive-content",children:[(0,r.jsxs)(s.p,{children:["「 入口名 」默认为目录名，少数情况下通过 ",(0,r.jsx)(s.code,{children:"source.entries"})," 自定义入口时，入口名为 ",(0,r.jsx)(s.code,{children:"source.entries"})," 对象的 ",(0,r.jsx)(s.code,{children:"key"}),"。"]}),"\n"]})]}),"\n",(0,r.jsxs)(s.div,{className:"language-",children:[(0,r.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    ssr: true,\n    ssrByEntries: {\n      // page-a 不启用 ssr\n      'page-a': false,\n    },\n  },\n});\n"})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["如上配置，项目整体启用了 ssr, 但是针对入口 ",(0,r.jsx)(s.code,{children:"page-a"})," 关闭了 ssr 渲染能力。"]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);