(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_plugin_api_new_createElement_mdx"],{46629:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return s},title:function(){return i},toc:function(){return c},default:function(){return d}});var t=r("12151"),a=r("23169"),s={sidebar_position:2},i="createElement",c=[{text:"element",depth:2,id:"element"},{text:"params",depth:2,id:"params"}];function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",button:"button",pre:"pre",h2:"h2"},(0,a.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"createelement",children:["createElement",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#createelement",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Create engineering elements that only support application engineering solutions."}),"\n",(0,t.jsxs)(n.p,{children:["This method is available on the ",(0,t.jsx)(n.code,{children:"onForged"})," API parameter."]}),"\n",(0,t.jsx)(n.p,{children:"Its type is defined as:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"export enum ActionElement {\n  Entry = 'entry',\n  Server = 'server',\n}\nexport type ForgedAPI = {\n  createElement: (\n    element: ActionElement,\n    params: Record<string, unknown>,\n  ) => Promise<void>;\n  ...\n};\n"})})]})}),"\n",(0,t.jsxs)(n.h2,{id:"element",children:["element",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#element",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Project element type, supports entry and server."}),"\n",(0,t.jsxs)(n.h2,{id:"params",children:["params",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#params",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["For other parameters of creating elements, please refer to",(0,t.jsx)(n.a,{href:"/guides/topic-detail/generator/config/app",children:"App New Command"}),"."]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}}}]);