(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_html_favicon-by-entries_mdx"],{3220:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var s=r("9880"),i=r("23169");function t(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"Record<string, string>"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Set different favicon for different pages."}),"\n",(0,s.jsxs)(n.p,{children:["The usage is same as ",(0,s.jsx)(n.code,{children:"favicon"}),', and you can use the "entry name" as the key to set each page individually.']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"faviconByEntries"})," will overrides the value set in ",(0,s.jsx)(n.code,{children:"favicon"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    favicon: './src/assets/default.png',\n    faviconByEntries: {\n      foo: './src/assets/foo.png',\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"After recompiling, you will see:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The favicon for page ",(0,s.jsx)(n.code,{children:"foo"})," is ",(0,s.jsx)(n.code,{children:"./src/assets/foo.png"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The favicon for other pages is ",(0,s.jsx)(n.code,{children:"./src/assets/default.png"}),"."]}),"\n"]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}},30609:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return o},toc:function(){return a},default:function(){return l}});var s=r("9880"),i=r("23169"),t=r.ir(r("3220")),c={sidebar_label:"faviconByEntries"},o="html.faviconByEntries",a=[];function d(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"htmlfaviconbyentries",children:["html.faviconByEntries",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlfaviconbyentries",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-html.html#htmlfaviconbyentries",target:"_blank",rel:"noopener noreferrer",children:"html.faviconByEntries"}),".\n"]})})]}),"\n","\n",(0,s.jsx)(t.default,{})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}}}]);