(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_model_typescript-best-practice_mdx"],{84132:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{frontmatter:function(){return d},title:function(){return s},toc:function(){return i},default:function(){return c}});var o=n("9880"),a=n("23169"),d={sidebar_position:10,title:"TS 最佳实践"},s="TS 最佳实践",i=[{text:"定义 Model 的 State 类型",depth:2,id:"定义-model-的-state-类型"},{text:"衍生状态的依赖类型",depth:2,id:"衍生状态的依赖类型"},{text:"获取 Model 类型信息的 Hooks",depth:2,id:"获取-model-类型信息的-hooks"}];function r(e){var t=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li"},(0,a.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.h1,{id:"ts-最佳实践",children:["TS 最佳实践",(0,o.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#ts-最佳实践",children:"#"})]}),"\n",(0,o.jsx)(t.p,{children:"Reduck 对 TS 提供了良好的支持，大部分使用场景下，无需任何额外工作，就可以直接获得 API 的 TS 类型提示。本节，将对其他的一些使用场景，做补充介绍。"}),"\n",(0,o.jsxs)(t.h2,{id:"定义-model-的-state-类型",children:["定义 Model 的 State 类型",(0,o.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#定义-model-的-state-类型",children:"#"})]}),"\n",(0,o.jsx)(t.p,{children:"为 Model 的 State 声明类型信息，是在 TS 中使用 Reduck 的最佳实践。"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",meta:'title="示例"',children:"interface State {\n  data: string;\n}\n\nexport const foo = model<State>('foo').define({\n  state: {\n    data: '',\n  },\n  computed: {\n    withSuffix: state => state.data + 'suffix',\n  },\n  actions: {\n    setData: (state, payload: string) => {\n      state.data = payload;\n    },\n  },\n});\n"})}),"\n",(0,o.jsxs)(t.p,{children:["当为 Model 的 State 声明类型信息后，Model 的 ",(0,o.jsx)(t.code,{children:"computed"}),"、",(0,o.jsx)(t.code,{children:"actions"})," 都能获取正确的类型信息。事实上，上面的示例代码中，即使我们不定义 State 类型信息，也会根据 ",(0,o.jsx)(t.code,{children:"state"})," 的初始值信息自动推导出 State 的类型信息。不过，仍然建议你在定义 Model 时，声明 State 的类型信息，因为根据 ",(0,o.jsx)(t.code,{children:"state"})," 的初始值信息推导出的 State 类型信息可能不完整(缺少字段或字段的类型信息缺少)，而且当使用",(0,o.jsx)(t.a,{href:"/apis/app/runtime/model/model_#%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B",children:"函数类型"}),"定义 Model 时，State 的类型信息也是无法根据 ",(0,o.jsx)(t.code,{children:"state"})," 的初始值信息自动推导的。"]}),"\n",(0,o.jsxs)(t.h2,{id:"衍生状态的依赖类型",children:["衍生状态的依赖类型",(0,o.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#衍生状态的依赖类型",children:"#"})]}),"\n",(0,o.jsx)(t.p,{children:"当 Model 的衍生状态依赖其他 Model 时，需要手动指定其他 Model 的 State。"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",meta:'title="示例"',children:"interface State {\n  data: string;\n}\n\nexport const bar = model<State>('bar').define({\n  state: {\n    data: '',\n  },\n  computed: {\n    // 为 fooState 指定类型\n    withFoo: [foo, (state, fooState: FooState) => state.data + fooState.data],\n  },\n});\n"})}),"\n",(0,o.jsxs)(t.h2,{id:"获取-model-类型信息的-hooks",children:["获取 Model 类型信息的 Hooks",(0,o.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#获取-model-类型信息的-hooks",children:"#"})]}),"\n",(0,o.jsx)(t.p,{children:"Reduck 提供了一组用于获取 Model 类型信息的工具类型："}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"GetModelState"}),"： 获取 Model 的 State（包含衍生状态）类型信息。"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"GetModelActions"}),"：获取 Model 的 Actions（包含 Effects 函数）类型信息。"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",meta:'title="示例"',children:"export const foo = model<State2>('foo').define({\n  // 省略\n});\n\n// 获取 foo 的 State 类型\nlet fooActions: GetModelActions<typeof foo>;\n// 获取 foo 的 Actions 类型\nlet fooState: GetModelState<typeof foo>;\n"})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(r,e)})):r(e)}}}]);