(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_zh_api_config-tools_mdx14"],{13438:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return o},title:function(){return t},toc:function(){return d},default:function(){return i}});var c=s("12151"),r=s("23169"),o={},t="",d=[{text:"Boolean 类型",depth:3,id:"boolean-类型"},{text:"Object 类型",depth:3,id:"object-类型"},{text:"Function 类型",depth:3,id:"function-类型"}];function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",div:"div",button:"button",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"true | Object | Function | undefined"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"false"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"打包工具："})," ",(0,c.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["配置 ",(0,c.jsx)(n.a,{href:"https://pugjs.org/",target:"_blank",rel:"noopener noreferrer",children:"Pug"})," 模板引擎。"]}),"\n",(0,c.jsxs)(n.h3,{id:"boolean-类型",children:["Boolean 类型",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-类型",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["Builder 默认不启用 Pug 模板引擎，你可以将 ",(0,c.jsx)(n.code,{children:"tools.pug"})," 设置为 ",(0,c.jsx)(n.code,{children:"true"})," 来启用它。"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    pug: true,\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["启用后，你可以在 ",(0,c.jsx)(n.code,{children:"html.template"})," 中指定使用 ",(0,c.jsx)(n.code,{children:"index.pug"})," 作为模板文件。"]}),"\n",(0,c.jsxs)(n.h3,{id:"object-类型",children:["Object 类型",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-类型",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["当 ",(0,c.jsx)(n.code,{children:"tools.terser"})," 的值为 ",(0,c.jsx)(n.code,{children:"Object"})," 类型时，可以配置 Pug 模板引擎的选项："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    pug: {\n      doctype: 'xml',\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["详细参数请查看 ",(0,c.jsx)(n.a,{href:"https://pugjs.org/api/reference.html#options",target:"_blank",rel:"noopener noreferrer",children:"Pug API Reference"}),"。"]}),"\n",(0,c.jsxs)(n.h3,{id:"function-类型",children:["Function 类型",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-类型",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["当 ",(0,c.jsx)(n.code,{children:"tools.pug"})," 配置为 ",(0,c.jsx)(n.code,{children:"Function"})," 类型时，默认配置作为第一个参数传入，可以直接修改配置对象，也可以返回一个值作为最终结果。"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    pug(config) {\n      config.doctype = 'xml';\n    },\n  },\n};\n"})})]})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(l,e)})):l(e)}}}]);