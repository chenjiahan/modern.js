(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_plugin_api_file_addPartial_mdx"],{33843:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var a in n)Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}(n,{frontmatter:function(){return s},title:function(){return d},toc:function(){return i},default:function(){return l}});var r=a("12151"),t=a("23169"),s={sidebar_position:3},d="addPartial",i=[{text:"name",depth:2,id:"name"},{text:"str",depth:2,id:"str"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",button:"button",pre:"pre",h2:"h2"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"addpartial",children:["addPartial",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addpartial",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["针对于文本类型文件，增加 Handlebars 的自定义 Partial 片段，具体可查看文档",(0,r.jsx)(n.a,{href:"https://handlebarsjs.com/guide/#partials",target:"_blank",rel:"noopener noreferrer",children:"Partials"}),"。"]}),"\n",(0,r.jsxs)(n.p,{children:["该方法可在 ",(0,r.jsx)(n.code,{children:"onForged"})," 生命周期的 api 参数上获取。"]}),"\n",(0,r.jsx)(n.p,{children:"其类型定义为："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export type ForgedAPI = {\n  addPartial: (name: string, str: Handlebars.Template) => void;\n  ...\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h2,{id:"name",children:["name",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#name",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"partial 名称。"}),"\n",(0,r.jsxs)(n.h2,{id:"str",children:["str",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#str",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"partial 模板字符串。"})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);