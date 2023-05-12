(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_runtime_core_use-loader_mdx"],{97327:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return a},title:function(){return d},toc:function(){return c},default:function(){return o}});var s=r("9880"),i=r("23169"),a={title:"useLoader"},d="useLoader",c=[{text:"Usage",depth:2,id:"usage"},{text:"Function Signature",depth:2,id:"function-signature"},{text:"Input",depth:3,id:"input"},{text:"Return Value",depth:3,id:"return-value"},{text:"Example",depth:2,id:"example"}];function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",h2:"h2",pre:"pre",h3:"h3",ul:"ul",li:"li"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"useloader",children:["useLoader",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useloader",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Isomorphic API, usually used to make asynchronous requests. When SSR, the server level uses ",(0,s.jsx)(n.code,{children:"useLoader"})," to prefetch the data, and the browser side also reuses this part of the data."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsx)(n.p,{children:"When using Rspack as the bundler, the useLoader API is not currently supported."})})]}),"\n",(0,s.jsxs)(n.h2,{id:"usage",children:["Usage",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { useLoader } from '@modern-js/runtime';\n"})})})}),"\n",(0,s.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"type LoaderFn = (context: runtimeContext) => Promise<unknow>;\ntype Options = {\n  onSuccess: (data: Record<string, any>) => void;\n  onError: (error: Error) => void;\n  initialData: Record<string, any>;\n  skip: boolean;\n  params: Record<string, any>;\n  static: boolean;\n};\ntype ReturnData = {\n  data: Record<string, any>;\n  loading: boolean;\n  error: Error;\n  reload: (params?: Record<string, any>) => Promise<any> | undefined;\n  reloading: boolean;\n};\n\nfunction useLoader(loaderFn: LoaderFn, options: Options): ReturnData;\n"})})})}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"runtimeContext"})," can refer to ",(0,s.jsx)(n.a,{href:"/apis/app/runtime/core/use-runtime-context",children:"useRuntimeContext"}),"."]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h3,{id:"input",children:["Input",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"loaderFn"}),": function for loading data, returning a Promise."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"options"}),": optional configuration.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"onSuccess"}),": successful callback."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"onError"}),": error callback."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"initialData"}),": the initial data before the first execution,."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"skip"}),": when the value is ",(0,s.jsx)(n.code,{children:"true"}),", the function does not execute."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"params"}),": when the result of the ",(0,s.jsx)(n.code,{children:"params"})," serialization changes, the function is re-executed. ",(0,s.jsx)(n.code,{children:"params"})," is also passed in as the second argument of the function."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"static"}),": when the value is ",(0,s.jsx)(n.code,{children:"true"}),", ",(0,s.jsx)(n.code,{children:"useLoader"})," is used for ",(0,s.jsx)(n.a,{href:"/guides/advanced-features/ssg",children:"SSG"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"return-value",children:["Return Value",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#return-value",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"data"}),": return data on successful execution."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"loading"}),": indicates whether the function is in execution."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"error"}),": error message when function execution fails."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"reload"}),": the function can be re-executed after the call.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"params"}),": when the value is ",(0,s.jsx)(n.code,{children:"undefined"}),", the last value will be reused; otherwise, the function will be re-executed with the new value."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"reloading"}),": during the execution of the call to ",(0,s.jsx)(n.code,{children:"reload"}),", the value of ",(0,s.jsx)(n.code,{children:"reloading"})," is ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"function Container() {\n  const { data, error, loading } = useLoader(\n    async (context, params) => {\n      console.log(params) // nicole\n      return fetch(user);\n    },\n    {\n      onSuccess: data => {\n        console.log('I did success:(',  data);\n      },\n      onError: error => {\n        console.log('I met error:)',  error);\n      },\n      initialData: { name: 'nicole', gender: 'female' },\n      params: 'nicole'\n    }\n  );\n\n  return ...;\n}\n"})})})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}}}]);