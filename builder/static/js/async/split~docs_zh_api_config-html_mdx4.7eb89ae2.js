(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_zh_api_config-html_mdx4"],{10856:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},title:function(){return r},toc:function(){return l},default:function(){return t}});var c=s("12151"),d=s("23169"),a={},r="",l=[{text:"字符串用法",depth:4,id:"字符串用法"},{text:"对象用法",depth:4,id:"对象用法"},{text:"移除默认值",depth:3,id:"移除默认值"}];function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",div:"div",button:"button",pre:"pre",h3:"h3"},(0,d.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"Record<string, false | string | Record<string, string | boolean>>"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["配置 HTML 页面的 ",(0,c.jsx)(n.code,{children:"<meta>"})," 标签。"]}),"\n",(0,c.jsxs)(n.h4,{id:"字符串用法",children:["字符串用法",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#字符串用法",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["当 ",(0,c.jsx)(n.code,{children:"meta"})," 对象的 ",(0,c.jsx)(n.code,{children:"value"})," 为字符串时，会自动将对象的 ",(0,c.jsx)(n.code,{children:"key"})," 映射为 ",(0,c.jsx)(n.code,{children:"name"}),"，",(0,c.jsx)(n.code,{children:"value"})," 映射为 ",(0,c.jsx)(n.code,{children:"content"}),"。"]}),"\n",(0,c.jsxs)(n.p,{children:["比如设置 ",(0,c.jsx)(n.code,{children:"description"}),"："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    meta: {\n      description: 'a description of the page',\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["最终在 HTML 中生成的 ",(0,c.jsx)(n.code,{children:"meta"})," 标签为："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-html",children:'<meta name="description" content="a description of the page" />\n'})})]})}),"\n",(0,c.jsxs)(n.h4,{id:"对象用法",children:["对象用法",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#对象用法",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["当 ",(0,c.jsx)(n.code,{children:"meta"})," 对象的 ",(0,c.jsx)(n.code,{children:"value"})," 为对象时，会将该对象的 ",(0,c.jsx)(n.code,{children:"key: value"})," 映射为 ",(0,c.jsx)(n.code,{children:"meta"})," 标签的属性。"]}),"\n",(0,c.jsxs)(n.p,{children:["这种情况下默认不会设置 ",(0,c.jsx)(n.code,{children:"name"})," 和 ",(0,c.jsx)(n.code,{children:"content"})," 属性。"]}),"\n",(0,c.jsxs)(n.p,{children:["比如设置 ",(0,c.jsx)(n.code,{children:"http-equiv"}),"："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    meta: {\n      'http-equiv': {\n        'http-equiv': 'x-ua-compatible',\n        content: 'ie=edge',\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["最终在 HTML 中生成的 ",(0,c.jsx)(n.code,{children:"meta"})," 标签为："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-html",children:'<meta http-equiv="x-ua-compatible" content="ie=edge" />\n'})})]})}),"\n",(0,c.jsxs)(n.h3,{id:"移除默认值",children:["移除默认值",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#移除默认值",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["将 ",(0,c.jsx)(n.code,{children:"meta"})," 对象的 ",(0,c.jsx)(n.code,{children:"value"})," 设置为 ",(0,c.jsx)(n.code,{children:"false"}),"，则表示不生成对应的 meta 标签。"]}),"\n",(0,c.jsxs)(n.p,{children:["比如移除框架预设的 ",(0,c.jsx)(n.code,{children:"imagemode"}),"："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  html: {\n    meta: {\n      imagemode: false,\n    },\n  },\n};\n"})})]})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(i,e)})):i(e)}}}]);