(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_tools_inspector_mdx"],{29998:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var s=r("9880"),c=r("23169");function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"Object | Function | undefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"打包工具："})," ",(0,s.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["你可以通过 ",(0,s.jsx)(n.code,{children:"tools.inspector"})," 开启或者配置 webpack 调试工具 ",(0,s.jsx)(n.a,{href:"https://github.com/web-infra-dev/webpack-inspector",target:"_blank",rel:"noopener noreferrer",children:"webpack inspector"}),"。"]}),"\n",(0,s.jsxs)(n.p,{children:["当配置不为 ",(0,s.jsx)(n.code,{children:"undefined"})," 时，则表示开启了 ",(0,s.jsx)(n.code,{children:"webpack-inspector"}),"，此时 ",(0,s.jsx)(n.code,{children:"tools.inspector"})," 的类型可以为 ",(0,s.jsx)(n.code,{children:"Object"})," 或者 ",(0,s.jsx)(n.code,{children:"Function"}),"。"]}),"\n",(0,s.jsxs)(n.h3,{id:"object-类型",children:["Object 类型",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-类型",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["当 ",(0,s.jsx)(n.code,{children:"tools.inspector"})," 的值为 ",(0,s.jsx)(n.code,{children:"Object"})," 类型时，会与默认配置通过 Object.assign 合并。比如："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    inspector: {\n      // 默认端口为 3333\n      port: 3334,\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"function-类型",children:["Function 类型",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-类型",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["当 ",(0,s.jsx)(n.code,{children:"tools.inspector"})," 为 Function 类型时，默认配置作为第一个参数传入，可以直接修改配置对象，也可以返回一个值作为最终结果。比如："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    inspector(config) {\n      // 修改端口号\n      config.port = 3333;\n    },\n  },\n};\n"})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},90440:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return t},toc:function(){return d},default:function(){return a}});var s=r("9880"),c=r("23169"),o=r.ir(r("29998")),i={sidebar_label:"inspector"},t="tools.inspector",d=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"toolsinspector",children:["tools.inspector",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsinspector",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolsinspector",target:"_blank",rel:"noopener noreferrer",children:"tools.inspector"}),"。\n"]})})]}),"\n","\n",(0,s.jsx)(o.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);