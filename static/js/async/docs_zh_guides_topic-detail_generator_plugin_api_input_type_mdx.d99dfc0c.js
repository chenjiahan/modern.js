(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_topic-detail_generator_plugin_api_input_type_mdx"],{65124:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var r in s)Object.defineProperty(e,r,{enumerable:!0,get:s[r]})}(s,{frontmatter:function(){return i},toc:function(){return l},title:function(){return a},default:function(){return o}});var n=r("12151");let i={sidebar_position:1},l=[{id:"input",text:"Input",depth:2},{id:"type",text:"type",depth:3},{id:"name",text:"name",depth:3},{id:"title",text:"title",depth:3},{id:"default",text:"default",depth:3},{id:"enum",text:"enum",depth:3},{id:"x-validate",text:"x-validate",depth:3},{id:"x-reactions",text:"x-reactions",depth:3},{id:"properties",text:"properties",depth:3},{id:"示例",text:"示例",depth:2}],a="自定义输入相关类型定义";function t(e){let s=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",h3:"h3",code:"code",ul:"ul",li:"li",div:"div",button:"button",pre:"pre",span:"span"},e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"自定义输入相关类型定义",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义输入相关类型定义",children:"#"}),"自定义输入相关类型定义"]}),"\n",(0,n.jsxs)(s.h2,{id:"input",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"}),"Input"]}),"\n",(0,n.jsxs)(s.p,{children:["Modern.js Input 输入类型采用了开源的 ",(0,n.jsx)(s.a,{href:"https://formilyjs.org/",target:"_blank",rel:"nofollow",children:"Formily"})," Schema 结果，支持了部分其 Schema 字段。"]}),"\n",(0,n.jsxs)(s.h3,{id:"type",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#type",children:"#"}),"type"]}),"\n",(0,n.jsxs)(s.p,{children:["schema 类型，目前生成器插件输入支持的类型为 ",(0,n.jsx)(s.code,{children:"string"}),"、",(0,n.jsx)(s.code,{children:"number"})," 和 ",(0,n.jsx)(s.code,{children:"object"})," 类型。其中 ",(0,n.jsx)(s.code,{children:"object"})," 用于实现 schema 嵌套，需要和 ",(0,n.jsx)(s.code,{children:"properties"})," 配合使用。"]}),"\n",(0,n.jsxs)(s.h3,{id:"name",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#name",children:"#"}),"name"]}),"\n",(0,n.jsx)(s.p,{children:"schema 的关键字。"}),"\n",(0,n.jsxs)(s.h3,{id:"title",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#title",children:"#"}),"title"]}),"\n",(0,n.jsx)(s.p,{children:"schema 的展示名称。"}),"\n",(0,n.jsxs)(s.h3,{id:"default",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#default",children:"#"}),"default"]}),"\n",(0,n.jsx)(s.p,{children:"schema 默认值。"}),"\n",(0,n.jsxs)(s.h3,{id:"enum",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#enum",children:"#"}),"enum"]}),"\n",(0,n.jsx)(s.p,{children:"schema 如果为选择类型，该字段用于定义选项内容。"}),"\n",(0,n.jsx)(s.p,{children:"每个选项支持两个字段："}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"value: 选项值。"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"label: 展示名称。"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.h3,{id:"x-validate",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#x-validate",children:"#"}),"x-validate"]}),"\n",(0,n.jsxs)(s.p,{children:["schema 的验证规则。这里支持 Formily 的校验方式，具体可参考 ",(0,n.jsx)(s.a,{href:"https://formilyjs.org/zh-CN/guide/advanced/validate",target:"_blank",rel:"nofollow",children:"Formily 表单校验"}),"。"]}),"\n",(0,n.jsxs)(s.h3,{id:"x-reactions",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#x-reactions",children:"#"}),"x-reactions"]}),"\n",(0,n.jsxs)(s.p,{children:["schema 字段联动。这里支持 Formily 的联动方式，具体可参考 ",(0,n.jsx)(s.a,{href:"https://formilyjs.org/zh-CN/guide/advanced/linkages",target:"_blank",rel:"nofollow",children:"Formily 实现联动逻辑"}),"。"]}),"\n",(0,n.jsxs)(s.h3,{id:"properties",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#properties",children:"#"}),"properties"]}),"\n",(0,n.jsxs)(s.p,{children:["当 schema 类型为 ",(0,n.jsx)(s.code,{children:"object"})," 时，定义其子表单。"]}),"\n",(0,n.jsxs)(s.h2,{id:"示例",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"}),"示例"]}),"\n",(0,n.jsxs)(s.div,{className:"language-ts",children:[(0,n.jsx)(s.div,{className:""}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"schema"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  type"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'object'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  properties"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    language"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      type"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'string'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      title"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'开发语言'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      enum"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        { label"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'TS'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" value"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ts'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" }"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        { label"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ES6+'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" value"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'js'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" }"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      ]"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]})]})}var o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=e.components||{};return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(t,e)})):t(e)}}}]);