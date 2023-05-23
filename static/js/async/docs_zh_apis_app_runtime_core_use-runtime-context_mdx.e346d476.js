(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_core_use-runtime-context_mdx"],{8246:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return i},title:function(){return c},toc:function(){return d},default:function(){return a}});var r=s("9880"),t=s("23169"),i={title:"useRuntimeContext"},c="useRuntimeContext",d=[{text:"使用姿势",depth:2,id:"使用姿势"},{text:"函数签名",depth:2,id:"函数签名"},{text:"返回值",depth:3,id:"返回值"},{text:"示例",depth:2,id:"示例"}];function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"useruntimecontext",children:["useRuntimeContext",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useruntimecontext",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"该函数主要用于获取 Runtime 上下文，只能在函数组件中使用。"}),"\n",(0,r.jsxs)(n.h2,{id:"使用姿势",children:["使用姿势",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useRuntimeContext } from '@modern-js/runtime';\n\nexport function App() {\n  const runtimeContext = useRuntimeContext();\n  return <div>Hello World</div>;\n}\n"})})})}),"\n",(0,r.jsxs)(n.h2,{id:"函数签名",children:["函数签名",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数签名",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type RuntimeContext = {\n  request: {\n    params: Record<string, string>;\n    pathname: string;\n    query: Record<string, string>;\n    headers: IncomingHttpHeaders;\n    cookie: string;\n  };\n  store: ReduckStore;\n};\n\nfunction useRuntimeContext(): RuntimeContext;\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"返回值",children:["返回值",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#返回值",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"request"}),"：请求上下文中的附加信息。","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"params"}),"：请求路径中的动态参数。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pathname"}),"：请求的 pathname。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"query"}),"：请求的查询字符串对象。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"headers"}),"：请求头信息。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cookie"}),"：请求的 cookie 信息。"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"store"}),"：在开启了 state 插件的时候，该值为 reduck 全局 ",(0,r.jsx)(n.code,{children:"store"}),"。"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"示例",children:["示例",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useRuntimeContext } from '@modern-js/runtime';\nimport { fooModel } from '@/common/models';\n\nfunction App() {\n  const { store } = useRuntimeContext();\n\n  const [state, actions] = store.use(fooModel);\n\n  return <div>state: {state}</div>;\n}\n"})})})})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);