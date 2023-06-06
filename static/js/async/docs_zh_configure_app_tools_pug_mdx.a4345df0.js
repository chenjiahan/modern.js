(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_tools_pug_mdx"],{4445:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var s=r("9880"),o=r("23169");function t(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",pre:"pre"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"true | Object | Function | undefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["配置 ",(0,s.jsx)(n.a,{href:"https://pugjs.org/",target:"_blank",rel:"noopener noreferrer",children:"Pug"})," 模板引擎。"]}),"\n",(0,s.jsxs)(n.h3,{id:"boolean-类型",children:["Boolean 类型",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-类型",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Builder 默认不启用 Pug 模板引擎，你可以将 ",(0,s.jsx)(n.code,{children:"tools.pug"})," 设置为 ",(0,s.jsx)(n.code,{children:"true"})," 来启用它。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    pug: true,\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["启用后，你可以在 ",(0,s.jsx)(n.code,{children:"html.template"})," 中指定使用 ",(0,s.jsx)(n.code,{children:"index.pug"})," 作为模板文件。"]}),"\n",(0,s.jsxs)(n.h3,{id:"object-类型",children:["Object 类型",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-类型",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["当 ",(0,s.jsx)(n.code,{children:"tools.terser"})," 的值为 ",(0,s.jsx)(n.code,{children:"Object"})," 类型时，可以配置 Pug 模板引擎的选项："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    pug: {\n      doctype: 'xml',\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["详细参数请查看 ",(0,s.jsx)(n.a,{href:"https://pugjs.org/api/reference.html#options",target:"_blank",rel:"noopener noreferrer",children:"Pug API Reference"}),"。"]}),"\n",(0,s.jsxs)(n.h3,{id:"function-类型",children:["Function 类型",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-类型",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["当 ",(0,s.jsx)(n.code,{children:"tools.pug"})," 配置为 ",(0,s.jsx)(n.code,{children:"Function"})," 类型时，默认配置作为第一个参数传入，可以直接修改配置对象，也可以返回一个值作为最终结果。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    pug(config) {\n      config.doctype = 'xml';\n    },\n  },\n};\n"})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}},86504:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return i},toc:function(){return d},default:function(){return a}});var s=r("9880"),o=r("23169"),t=r.ir(r("4445")),c={sidebar_label:"pug"},i="tools.pug",d=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"toolspug",children:["tools.pug",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolspug",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolspug",target:"_blank",rel:"noopener noreferrer",children:"tools.pug"}),"。\n"]})})]}),"\n","\n",(0,s.jsx)(t.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);