(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_topic-detail_generator_plugin_api_input_addInputBefore_mdx"],{13305:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return d},title:function(){return t},toc:function(){return c},default:function(){return l}});var i=r("12151"),s=r("21447");let d={sidebar_position:2},t="addInputBefore",c=[{text:"key",depth:2,id:"key"},{text:"input",depth:2,id:"input"},{text:"示例",depth:2,id:"示例"}];function a(e){let n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",button:"button",pre:"pre",code:"code",h2:"h2",ol:"ol",li:"li"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"addinputbefore",children:["addInputBefore",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addinputbefore",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"在默认输入前添加输入问题。"}),"\n",(0,i.jsx)(n.p,{children:"该方法可直接在 context 上获取。"}),"\n",(0,i.jsx)(n.p,{children:"其类型定义为："}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"export interface IPluginContext {\n  addInputBefore: (key: string, input: Schema) => void;\n  ...\n}\n"})})]})}),"\n",(0,i.jsxs)(n.h2,{id:"key",children:["key",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#key",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Modern.js 工程方案的配置的问题关键字，具体配置可查看",(0,i.jsx)(n.a,{href:"/guides/topic-detail/generator/config/common",children:"生成器配置"}),"。"]}),"\n",(0,i.jsxs)(n.h2,{id:"input",children:["input",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["需要添加的问题，具体类型定义可查看",(0,i.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/api/input/type",children:"自定义输入相关类型定义"}),"。"]}),"\n",(0,i.jsxs)(n.h2,{id:"示例",children:["示例",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"在包管理工具后面添加输入："}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"context.addInputBefore('packageManager', {\n  type: 'object',\n  properties: {\n    language: {\n      type: 'string',\n      title: '开发语言',\n      enum: [\n        { label: 'TS', value: 'ts' },\n        { label: 'ES6+', value: 'js' },\n      ],\n    },\n  },\n});\n"})})]})}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.p,{className:"modern-directive-title",children:"注意事项"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"添加问题的 key 不能和 Modern.js 提供的项目类型自身的问题的 key 重复"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["添加问题 ",(0,i.jsx)(n.code,{children:"addInputAfter"})," 的优先级高于 ",(0,i.jsx)(n.code,{children:"addInputBefore"}),"，当同时对一个 ",(0,i.jsx)(n.code,{children:"key"})," 添加 After 问题和对其后一个 key 添加 Before 问题时，After 问题会在 Before 之前。"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["当需要在相同 ",(0,i.jsx)(n.code,{children:"key"})," 前面或者后面添加多个问题时，可多次调用该方法，问题的顺序会按照调用顺序进行排列。"]}),"\n"]}),"\n"]}),"\n"]})]})]})}var l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}}}]);