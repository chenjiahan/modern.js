(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_html_meta_mdx"],{38459:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r}});var t=s("12151"),a=s("23169");function c(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",div:"div",button:"button",pre:"pre",h3:"h3"},(0,a.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"Record<string, false | string | Record<string, string | boolean>>"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Configure the ",(0,t.jsx)(n.code,{children:"<meta>"})," tag of the HTML."]}),"\n",(0,t.jsxs)(n.h4,{id:"string-type",children:["String Type",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#string-type",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["When the ",(0,t.jsx)(n.code,{children:"value"})," of a ",(0,t.jsx)(n.code,{children:"meta"})," object is a string, the ",(0,t.jsx)(n.code,{children:"key"})," of the object is automatically mapped to ",(0,t.jsx)(n.code,{children:"name"}),", and the ",(0,t.jsx)(n.code,{children:"value"})," is mapped to ",(0,t.jsx)(n.code,{children:"content"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"For example to set description:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    meta: {\n      description: 'a description of the page',\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(n.p,{children:["The generated ",(0,t.jsx)(n.code,{children:"meta"})," tag in HTML is:"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-html",children:'<meta name="description" content="a description of the page" />\n'})})]})}),"\n",(0,t.jsxs)(n.h4,{id:"object-type",children:["Object Type",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["When the ",(0,t.jsx)(n.code,{children:"value"})," of a ",(0,t.jsx)(n.code,{children:"meta"})," object is an object, the ",(0,t.jsx)(n.code,{children:"key: value"})," of the object is mapped to the attribute of the ",(0,t.jsx)(n.code,{children:"meta"})," tag."]}),"\n",(0,t.jsxs)(n.p,{children:["In this case, the ",(0,t.jsx)(n.code,{children:"name"})," and ",(0,t.jsx)(n.code,{children:"content"})," properties will not be set by default."]}),"\n",(0,t.jsxs)(n.p,{children:["For example to set ",(0,t.jsx)(n.code,{children:"http-equiv"}),":"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    meta: {\n      'http-equiv': {\n        'http-equiv': 'x-ua-compatible',\n        content: 'ie=edge',\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"meta"})," tag in HTML is:"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-html",children:'<meta http-equiv="x-ua-compatible" content="ie=edge" />\n'})})]})}),"\n",(0,t.jsxs)(n.h3,{id:"remove-default-value",children:["Remove Default Value",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#remove-default-value",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Setting the ",(0,t.jsx)(n.code,{children:"value"})," of the ",(0,t.jsx)(n.code,{children:"meta"})," object to ",(0,t.jsx)(n.code,{children:"false"})," and the meta tag will not be generated."]}),"\n",(0,t.jsxs)(n.p,{children:["For example to remove the ",(0,t.jsx)(n.code,{children:"imagemode"}),":"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"export default {\n  html: {\n    meta: {\n      imagemode: false,\n    },\n  },\n};\n"})})]})})]})}var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}},75756:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return r},title:function(){return d},toc:function(){return i},default:function(){return o}});var t=s("12151"),a=s("23169"),c=s.ir(s("38459")),r={sidebar_label:"meta"},d="html.meta",i=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,a.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"html-meta",children:["html.meta",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#html-meta",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-html.html#htmlmeta",target:"_blank",rel:"noopener noreferrer",children:"html.meta"}),".\n"]})})]}),"\n","\n",(0,t.jsx)(c.default,{})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}}}]);