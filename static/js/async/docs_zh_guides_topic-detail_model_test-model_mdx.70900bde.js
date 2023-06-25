(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_model_test-model_mdx"],{1374:function(e,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var s,t=d("15169"),o=d("43932"),r=d("9880"),c=d("23169");function i(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",div:"div"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"测试-model",children:["测试 Model",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#测试-model",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["好的测试对代码的稳健性至关重要。下面以 ",(0,r.jsx)(n.a,{href:"/guides/topic-detail/model/quick-start",children:"快速上手"})," 的 ",(0,r.jsx)(n.code,{children:"countModel"})," 为例，演示在 Modern.js 中，如何对 Model 进行单元测试。"]}),"\n",(0,r.jsxs)(n.p,{children:["使用测试功能，需要先开启该功能。在项目根目录下，执行 ",(0,r.jsx)(n.code,{children:"pnpm run new"}),"，进行如下选择："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"? 请选择你想要的操作 启用可选功能\n? 请选择功能名称 启用「单元测试 / 集成测试」功能\n"})}),"\n",(0,r.jsx)(n.p,{children:"即可开启测试功能支持。"}),"\n",(0,r.jsxs)(n.p,{children:["新增 ",(0,r.jsx)(n.code,{children:"count.test.ts"})," 文件，代码如下："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { createStore } from '@modern-js/runtime/testing';\nimport countModel from './count';\n\ndescribe('test model', () => {\n  it('count value should plus one after add', () => {\n    const store = createStore();\n    const [state, { add }] = store.use(countModel);\n\n    expect(state).toEqual({ value: 1 });\n\n    add();\n\n    expect(store.use(countModel)[0]).toEqual({ value: 2 });\n  });\n});\n"})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["这里使用的 ",(0,r.jsx)(n.a,{href:"/apis/app/runtime/model/create-store",children:(0,r.jsx)(n.code,{children:"createStore"})})," 是从 ",(0,r.jsx)(n.code,{children:"@modern-js/runtime/testing"})," 导入的，内部会使用 ",(0,r.jsx)(n.a,{href:"/configure/app/runtime/state",children:(0,r.jsx)(n.code,{children:"runtime.state"})})," 的配置去创建 ",(0,r.jsx)(n.code,{children:"store"}),"。"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["在测试用例里，我们新建一个 ",(0,r.jsx)(n.code,{children:"store"})," 来挂载 ",(0,r.jsx)(n.code,{children:"countModel"}),"，通过 ",(0,r.jsx)(n.code,{children:"store.use"})," 获取 ",(0,r.jsx)(n.code,{children:"countModel"})," 的 State 和 Actions。然后调用 ",(0,r.jsx)(n.code,{children:"add"})," Action 更新状态，并断言更新后的状态值。"]}),"\n",(0,r.jsxs)(n.p,{children:["执行 ",(0,r.jsx)(n.code,{children:"pnpm run test"})," 命令，触发测试用例的执行。"]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/main-doc/docs/zh/guides/topic-detail/model/test-model.mdx"]={toc:[],title:"测试 Model",frontmatter:{sidebar_position:9,title:"测试 Model"}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,o._(t._({},e),{children:(0,r.jsx)(i,t._({},e))})):i(e)}}}]);