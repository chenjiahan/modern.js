(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_tools_pug_mdx"],{10817:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var r=s("12151"),t=s("23169");function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",div:"div",button:"button",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"true | Object | Function | undefined"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"false"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Bundler:"})," ",(0,r.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Configure the ",(0,r.jsx)(n.a,{href:"https://pugjs.org/",target:"_blank",rel:"noopener noreferrer",children:"Pug"})," template engine."]}),"\n",(0,r.jsxs)(n.h3,{id:"boolean-type",children:["Boolean Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-type",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Pug template engine is not enabled by default, you can enable it by setting ",(0,r.jsx)(n.code,{children:"tools.pug"})," to ",(0,r.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    pug: true,\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["When enabled, you can use ",(0,r.jsx)(n.code,{children:"index.pug"})," as the template file in ",(0,r.jsx)(n.code,{children:"html.template"})," config."]}),"\n",(0,r.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"tools.terser"})," is ",(0,r.jsx)(n.code,{children:"Object"})," type, you can passing the Pug options:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    pug: {\n      doctype: 'xml',\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["For detailed options, please refer to ",(0,r.jsx)(n.a,{href:"https://pugjs.org/api/reference.html#options",target:"_blank",rel:"noopener noreferrer",children:"Pug API Reference"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"tools.pug"})," is ",(0,r.jsx)(n.code,{children:"Function"})," type, the default configuration is passed in as the first parameter, the configuration object can be modified directly, or a value can be returned as the final result."]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    pug(config) {\n      config.doctype = 'xml';\n    },\n  },\n};\n"})})]})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},30892:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return i},toc:function(){return a},default:function(){return d}});var r=s("12151"),t=s("23169"),o=s.ir(s("10817")),c={sidebar_label:"pug"},i="tools.pug",a=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"tools-pug",children:["tools.pug",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tools-pug",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolspug",target:"_blank",rel:"noopener noreferrer",children:"tools.pug"}),".\n"]})})]}),"\n","\n",(0,r.jsx)(o.default,{})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);