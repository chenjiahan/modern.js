(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_testing_renderApp_mdx"],{18360:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return s},title:function(){return i},toc:function(){return c},default:function(){return a}});var d=r("9880"),t=r("23169"),s={title:"renderApp"},i="renderApp",c=[{text:"使用姿势",depth:2,id:"使用姿势"},{text:"函数签名",depth:2,id:"函数签名"},{text:"示例",depth:2,id:"示例"}];function p(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"renderapp",children:["renderApp",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#renderapp",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"render"})," 函数用于测试普通组件，",(0,d.jsx)(n.code,{children:"renderApp"})," 函数用于测试应用组件。"]}),"\n",(0,d.jsxs)(n.h2,{id:"使用姿势",children:["使用姿势",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"import { renderApp } from '@modern-js/runtime/testing';\n"})}),"\n",(0,d.jsxs)(n.p,{children:["应用组件指包含一些 Modern.js 上下文的组件，如 App 根组件，使用了 Model 的 Container 等。对于这类组件的测试，可以使用 ",(0,d.jsx)(n.code,{children:"renderApp"})," 函数，会自动按照当前 ",(0,d.jsx)(n.code,{children:"modern.config.js"})," 配置，包裹上对应的上下文信息。"]}),"\n",(0,d.jsxs)(n.h2,{id:"函数签名",children:["函数签名",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数签名",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"renderApp"})," 和 ",(0,d.jsx)(n.a,{href:"/zh/apis/app/runtime/testing/render",children:"render"})," 完全一致。"]}),"\n",(0,d.jsxs)(n.h2,{id:"示例",children:["示例",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"import { renderApp } from '@modern-js/runtime/testing';\nimport App from './App';\n\ndescribe('test', () => {\n  it('test App', () => {\n    const { getByText } = renderApp(<App />);\n    expect(getByText('Hello Modern!')).toBeInTheDocument();\n  });\n});\n"})})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(p,e)})):p(e)}}}]);