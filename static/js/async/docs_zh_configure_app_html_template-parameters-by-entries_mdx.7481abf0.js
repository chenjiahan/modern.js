(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_html_template-parameters-by-entries_mdx"],{20693:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var t=r("9880"),s=r("23169");function a(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"类型："})," ",(0,t.jsx)(n.code,{children:"Object"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"默认值："})," ",(0,t.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"用于在多页面的场景下，为不同的页面设置不同的模板参数。"}),"\n",(0,t.jsxs)(n.p,{children:["整体用法与 ",(0,t.jsx)(n.code,{children:"templateParameters"})," 一致，并且可以使用「入口名称」作为 key ，对各个页面进行单独设置。"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"templateParametersByEntries"})," 的优先级高于 ",(0,t.jsx)(n.code,{children:"templateParameters"}),"，因此会覆盖 ",(0,t.jsx)(n.code,{children:"templateParameters"})," 中设置的值。"]}),"\n",(0,t.jsxs)(n.h3,{id:"示例",children:["示例",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    templateParametersByEntries: {\n      foo: {\n        type: 'a',\n      },\n      bar: {\n        type: 'b',\n      },\n    },\n  },\n};\n"})})})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},25531:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return c},toc:function(){return l},default:function(){return o}});var t=r("9880"),s=r("23169"),a=r.ir(r("20693")),i={sidebar_label:"templateParametersByEntries"},c="html.templateParametersByEntries",l=[];function d(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"htmltemplateparametersbyentries",children:["html.templateParametersByEntries",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmltemplateparametersbyentries",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-html.html#htmltemplateparametersbyentries",target:"_blank",rel:"noopener noreferrer",children:"html.templateParametersByEntries"}),"。\n"]})})]}),"\n","\n",(0,t.jsx)(a.default,{})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}}}]);