(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_core_use-runtime-context_mdx"],{60321:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s,t=r("15169"),i=r("43932"),d=r("9880"),o=r("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,o.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"useruntimecontext",children:["useRuntimeContext",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useruntimecontext",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"该函数主要用于获取 Runtime 上下文，只能在函数组件中使用。"}),"\n",(0,d.jsxs)(n.h2,{id:"使用姿势",children:["使用姿势",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:"import { useRuntimeContext } from '@modern-js/runtime';\n\nexport function App() {\n  const runtimeContext = useRuntimeContext();\n  return <div>Hello World</div>;\n}\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"函数签名",children:["函数签名",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数签名",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type RuntimeContext = {\n  request: {\n    params: Record<string, string>;\n    pathname: string;\n    query: Record<string, string>;\n    headers: IncomingHttpHeaders;\n    cookie: string;\n  };\n  store: ReduckStore;\n  router: RemixRouter;\n};\n\nfunction useRuntimeContext(): RuntimeContext;\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"返回值",children:["返回值",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#返回值",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"request"}),"：请求上下文中的附加信息。","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"params"}),"：请求路径中的动态参数。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"pathname"}),"：请求的 pathname。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"query"}),"：请求的查询字符串对象。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"headers"}),"：请求头信息。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"cookie"}),"：请求的 cookie 信息。"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"store"}),"：在开启了 state 插件的时候，该值为 Reduck 全局 ",(0,d.jsx)(n.code,{children:"store"}),"。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"router"}),"：在开启 router 插件的时候存在。","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"location"}),"：当前路由对应的位置信息。同 ",(0,d.jsx)(n.a,{href:"/apis/app/runtime/router/router#uselocation",children:(0,d.jsx)(n.code,{children:"useLocation"})})," 返回值。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"navigate"}),"：导航到给定路径。同 ",(0,d.jsx)(n.a,{href:"/apis/app/runtime/router/router#usenavigate",children:(0,d.jsx)(n.code,{children:"useNavigate"})})," 返回值。"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"示例",children:["示例",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:"import { useRuntimeContext } from '@modern-js/runtime';\nimport { fooModel } from '@/common/models';\n\nfunction App() {\n  const { store } = useRuntimeContext();\n\n  const [state, actions] = store.use(fooModel);\n\n  return <div>state: {state}</div>;\n}\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fmain-doc%2Fdocs%2Fzh%2Fapis%2Fapp%2Fruntime%2Fcore%2Fuse-runtime-context.mdx"]={toc:[{text:"使用姿势",id:"使用姿势",depth:2},{text:"函数签名",id:"函数签名",depth:2},{text:"返回值",id:"返回值",depth:3},{text:"示例",id:"示例",depth:2}],title:"useRuntimeContext",frontmatter:{title:"useRuntimeContext"}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,i._)((0,t._)({},e),{children:(0,d.jsx)(c,(0,t._)({},e))})):c(e)}}}]);