(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_server_enable-framework-ext_mdx"],{80203:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return o}});var s,a=n("15169"),t=n("43932"),d=n("9880"),l=n("23169");function i(e){var r=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",h2:"h2",div:"div"},(0,l.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.h1,{id:"serverenableframeworkext",children:["server.enableFrameworkExt",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#serverenableframeworkext",children:"#"})]}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.strong,{children:"Type:"})," ",(0,d.jsx)(r.code,{children:"boolean"})]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.strong,{children:"Default:"})," ",(0,d.jsx)(r.code,{children:"false"})]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["By default, when the ",(0,d.jsx)(r.a,{href:"/guides/advanced-features/web-server",children:"custom Web Server feature"})," is enabled, the Middleware will use the Modern.js's syntax."]}),"\n",(0,d.jsxs)(r.p,{children:["Enabling ",(0,d.jsx)(r.code,{children:"server.enableFrameworkExt"})," allows the use of syntax extensions from other frameworks."]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    enableFrameworkExt: true,\n  },\n});\n"})}),"\n",(0,d.jsxs)(r.h2,{id:"example",children:["Example",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"Default usage:"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-ts",meta:'title="server/index.ts"',children:"import { Middleware } from '@modern-js/runtime/server';\n\nexport const middleware: Middleware = (ctx, next) => {\n  console.log(ctx.request.url);\n  next();\n};\n"})}),"\n",(0,d.jsx)(r.p,{children:"After enabling it, the Middleware type will be exported from other namespaces, and syntax extensions from frameworks can be used:"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-ts",meta:'title="server/index.ts"',children:"import { SomeType } from '@modern-js/runtime/{namespace}';\n\nexport const middleware: SomeType = (...args) => {\n  console.log(args[0].url);\n  next();\n};\n"})}),"\n",(0,d.jsxs)(r.div,{className:"modern-directive note",children:[(0,d.jsx)(r.div,{className:"modern-directive-title",children:"NOTE"}),(0,d.jsxs)(r.div,{className:"modern-directive-content",children:[(0,d.jsx)(r.p,{children:"The above code is pseudocode, and the specific usage needs to refer to the corresponding framework extension."}),"\n"]})]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fserver%2Fenable-framework-ext.mdx"]={toc:[{text:"Example",id:"example",depth:2}],title:"server.enableFrameworkExt",frontmatter:{sidebar_label:"enableFrameworkExt"}};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return r?(0,d.jsx)(r,(0,t._)((0,a._)({},e),{children:(0,d.jsx)(i,(0,a._)({},e))})):i(e)}}}]);