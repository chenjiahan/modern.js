(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_html_title-by-entries_mdx"],{4850:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var t=r("9880"),i=r("23169");function s(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"类型："})," ",(0,t.jsx)(n.code,{children:"Record<string, string>"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"默认值："})," ",(0,t.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["用于在多页面的场景下，为不同的页面设置不同的 ",(0,t.jsx)(n.code,{children:"title"}),"。"]}),"\n",(0,t.jsxs)(n.p,{children:["整体用法与 ",(0,t.jsx)(n.code,{children:"title"})," 一致，并且可以使用「入口名称」作为 key ，对各个页面进行单独设置。"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"titleByEntries"})," 的优先级高于 ",(0,t.jsx)(n.code,{children:"title"}),"，因此会覆盖 ",(0,t.jsx)(n.code,{children:"title"})," 中设置的值。"]}),"\n",(0,t.jsxs)(n.h3,{id:"示例",children:["示例",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    title: 'ByteDance',\n    titleByEntries: {\n      foo: 'TikTok',\n    },\n  },\n};\n"})})})}),"\n",(0,t.jsx)(n.p,{children:"重新编译后，可以看到:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["页面 ",(0,t.jsx)(n.code,{children:"foo"})," 的 title 为 ",(0,t.jsx)(n.code,{children:"TikTok"}),"。"]}),"\n",(0,t.jsxs)(n.li,{children:["其他页面的 title 为 ",(0,t.jsx)(n.code,{children:"ByteDance"}),"。"]}),"\n"]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(s,e)})):s(e)}},75035:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return l},toc:function(){return d},default:function(){return a}});var t=r("9880"),i=r("23169"),s=r.ir(r("4850")),c={sidebar_label:"titleByEntries"},l="html.titleByEntries",d=[];function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"htmltitlebyentries",children:["html.titleByEntries",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmltitlebyentries",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-html.html#htmltitlebyentries",target:"_blank",rel:"noopener noreferrer",children:"html.titleByEntries"}),"。\n"]})})]}),"\n","\n",(0,t.jsx)(s.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}}}]);