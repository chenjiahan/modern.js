(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_ssr_no-ssr_mdx"],{60248:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var s,d=r("15169"),a=r("43932"),o=r("9880"),i=r("23169");function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code"},(0,i.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"nossr",children:["NoSSR",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#nossr",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"被 NoSSR 包裹的内容在服务端不会进行渲染，在客户端 hydrate 阶段也不会渲染，等到整个 App 渲染完成后便会立即渲染。"}),"\n",(0,o.jsxs)(n.h2,{id:"使用姿势",children:["使用姿势",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { NoSSR } from '@modern-js/runtime';\n\nexport default () => <NoSSR>...</NoSSR>;\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"示例",children:["示例",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["下列代码中，",(0,o.jsx)(n.code,{children:"Time"})," 组件用于展示当前的时间，由于服务端渲染和客户端 hydrate 时获取到的时间是不一致的，React 就会抛出异常。针对这种情况可以使用 ",(0,o.jsx)(n.code,{children:"NoSSR"})," 进行优化："]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { NoSSR } from '@modern-js/runtime';\n\nfunction Time() {\n  return (\n    <NoSSR>\n      <div>Time: {Date.now()}</div>\n    </NoSSR>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"使用场景",children:["使用场景",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用场景",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"在 CSR 中，常常需要根据当前浏览器 UA，或是当前页面 URL 的某个参数的不同，来渲染不同的内容。如果此时应用直接切换到 SSR，很有可能出现不符合预期的结果。"}),"\n",(0,o.jsx)(n.p,{children:"Modern.js 在 SSR 上下文中提供了完整的浏览器端信息，可以利用上下文信息来决定组件在服务端的渲染结果。"}),"\n",(0,o.jsx)(n.p,{children:"即便如此，如果应用里有太多的判断，开发者希望以后再使用上下文，或者不希望某些内容在服务端被渲染，可以使用 NoSSR 组件将这一部分剔除在服务端渲染外。"})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/main-doc/docs/zh/apis/app/runtime/ssr/no-ssr.mdx"]={toc:[{text:"使用姿势",id:"使用姿势",depth:2},{text:"示例",id:"示例",depth:2},{text:"使用场景",id:"使用场景",depth:2}],title:"NoSSR",frontmatter:{title:"NoSSR"}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,a._(d._({},e),{children:(0,o.jsx)(t,d._({},e))})):t(e)}}}]);