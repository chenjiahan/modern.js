(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_model_typescript-best-practice_mdx"],{34148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{frontmatter:function(){return a},title:function(){return d},toc:function(){return s},default:function(){return c}});var o=n("9880"),i=n("23169"),a={sidebar_position:10,title:"TS Best Practices"},d="TS Best Practices",s=[{text:"Defining the State Type of the Model",depth:2,id:"defining-the-state-type-of-the-model"},{text:"Dependent types of Derived State",depth:2,id:"dependent-types-of-derived-state"},{text:"Hooks for Getting Model Type Information",depth:2,id:"hooks-for-getting-model-type-information"}];function r(e){var t=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",pre:"pre",code:"code",ul:"ul",li:"li"},(0,i.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.h1,{id:"ts-best-practices",children:["TS Best Practices",(0,o.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#ts-best-practices",children:"#"})]}),"\n",(0,o.jsx)(t.p,{children:"Reduck provides excellent support for TypeScript, and in most cases, you can get API type prompts directly without any extra work. In this section, we will provide additional information on other usage scenarios."}),"\n",(0,o.jsxs)(t.h2,{id:"defining-the-state-type-of-the-model",children:["Defining the State Type of the Model",(0,o.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#defining-the-state-type-of-the-model",children:"#"})]}),"\n",(0,o.jsx)(t.p,{children:"Declaring type information for the State of a Model is a best practice when using Reduck in TypeScript."}),"\n",(0,o.jsx)(t.div,{className:"language-",children:(0,o.jsx)(t.div,{className:"modern-code-content",children:(0,o.jsx)(t.pre,{className:"code",children:(0,o.jsx)(t.code,{className:"language-ts",children:"interface State {\n  data: string;\n}\n\nexport const foo = model<State>('foo').define({\n  state: {\n    data: '',\n  },\n  computed: {\n    withSuffix: state => state.data + 'suffix',\n  },\n  actions: {\n    setData: (state, payload: string) => {\n      state.data = payload;\n    },\n  },\n});\n"})})})}),"\n",(0,o.jsxs)(t.p,{children:["When you declare type information for the State of a Model, the ",(0,o.jsx)(t.code,{children:"computed"})," and ",(0,o.jsx)(t.code,{children:"actions"})," of the Model can get the correct type information. In fact, even if we don't define State type information in the example code above, the type information of State can be automatically inferred based on the initial value information of ",(0,o.jsx)(t.code,{children:"state"}),". However, we still recommend that you declare the type information of State when defining a Model because the type information of State inferred based on the initial value information of ",(0,o.jsx)(t.code,{children:"state"})," may be incomplete (missing fields or field type information), and the type information of State cannot be automatically inferred based on the initial value information of ",(0,o.jsx)(t.code,{children:"state"})," when using ",(0,o.jsx)(t.a,{href:"/apis/app/runtime/model/model_#%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B",children:"Function Type"})," to define the Model."]}),"\n",(0,o.jsxs)(t.h2,{id:"dependent-types-of-derived-state",children:["Dependent types of Derived State",(0,o.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#dependent-types-of-derived-state",children:"#"})]}),"\n",(0,o.jsx)(t.p,{children:"When the derived state of a Model depends on other Models, you need to manually specify the State of the other Models."}),"\n",(0,o.jsx)(t.div,{className:"language-",children:(0,o.jsx)(t.div,{className:"modern-code-content",children:(0,o.jsx)(t.pre,{className:"code",children:(0,o.jsx)(t.code,{className:"language-ts",children:"interface State {\n  data: string;\n}\n\nexport const bar = model<State>('bar').define({\n  state: {\n    data: '',\n  },\n  computed: {\n    // specify the type for fooState\n    withFoo: [foo, (state, fooState: FooState) => state.data + fooState.data],\n  },\n});\n"})})})}),"\n",(0,o.jsxs)(t.h2,{id:"hooks-for-getting-model-type-information",children:["Hooks for Getting Model Type Information",(0,o.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#hooks-for-getting-model-type-information",children:"#"})]}),"\n",(0,o.jsx)(t.p,{children:"Reduck provides a set of utility types for getting Model type information:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"GetModelState"}),": Get the type information of the State (including derived state) of the Model."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"GetModelActions"}),": Get the type information of the Actions (including Effects functions) of the Model."]}),"\n"]}),"\n",(0,o.jsx)(t.div,{className:"language-",children:(0,o.jsx)(t.div,{className:"modern-code-content",children:(0,o.jsx)(t.pre,{className:"code",children:(0,o.jsx)(t.code,{className:"language-ts",children:"export const foo = model<State2>('foo').define({\n  // skip some codes\n});\n\n// get the State type of foo\nlet fooActions: GetModelActions<typeof foo>;\n// get the Actions type of foo\nlet fooState: GetModelState<typeof foo>;\n"})})})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(r,e)})):r(e)}}}]);