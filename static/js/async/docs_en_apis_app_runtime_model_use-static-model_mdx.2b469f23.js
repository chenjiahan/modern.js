(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_runtime_model_use-static-model_mdx"],{81438:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return c},title:function(){return a},toc:function(){return i},default:function(){return l}});var s=t("9880"),o=t("23169"),d=t.ir(t("56553")),c={sidebar_position:3,title:"useStaticModel"},a="useStaticModel",i=[{text:"Example",depth:2,id:"example"}];function r(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2",div:"div"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"usestaticmodel",children:["useStaticModel",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usestaticmodel",children:"#"})]}),"\n","\n",(0,s.jsx)(d.default,{}),"\n",(0,s.jsxs)(n.p,{children:["If want to consume a Model in the form of React Hook in the component, and can get the current latest state at any time, but you don't want the Model state to be updated, which will cause the component to be re-rendered, we can use ",(0,s.jsx)(n.code,{children:"useStaticModel"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useStaticModel"})," API is same as ",(0,s.jsx)(n.code,{children:"useModel"}),".For detail, see ",(0,s.jsx)(n.a,{href:"/en/apis/app/runtime/model/use-model",children:(0,s.jsx)(n.code,{children:"useModel"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["To ensure that the latest state is always available, be careful not to deconstruct the returned ",(0,s.jsx)(n.code,{children:"state"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"function App() {\n  // ❌ Do not deconstruct state, but can deconstruct actions.\n  const [{ username }, { logout }] = useStaticModel(userModel);\n\n  // ✅ True Usage.\n  const [state, { logout }] = useStaticModel(userModel);\n\n  useEffect(() => {\n    state.username;\n  }, []);\n}\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The following ",(0,s.jsx)(n.code,{children:"App"})," component consumes the ",(0,s.jsx)(n.code,{children:"userModel"})," state, but does not use it directly in JSX. It can be found that changes in the ",(0,s.jsx)(n.code,{children:"userModel"})," state do not necessarily cause the component to re-render. This situation can be optimized using ",(0,s.jsx)(n.code,{children:"useStaticModel"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"function App() {\n  const [state] = useStaticModel(userModel);\n\n  useEffect(() => {\n    // 统计 UV 数据\n    send('pageview', { user: state.user });\n  }, [state]);\n\n  return <div>Hello</div>;\n}\n"})}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"More"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/guides/topic-detail/model/use-model",children:"Use Model"}),"."]}),"\n"]})]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(r,e)})):r(e)}}}]);