(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_source_resolve-main-fields_mdx"],{82857:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var s=r("9880"),i=r("23169");function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",a:"a",h3:"h3",h4:"h4"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type Fields = (string | string[])[];\n\ntype ResolveMainFields = Fields | Record<BuilderTarget, Fields>;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This config will determine which field of ",(0,s.jsx)(n.code,{children:"package.json"})," you use to import the ",(0,s.jsx)(n.code,{children:"npm"})," module. Same as the ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/configuration/resolve/#resolvemainfields",target:"_blank",rel:"noopener noreferrer",children:"resolve.mainFields"})," config of webpack."]}),"\n",(0,s.jsxs)(n.h3,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    resolveMainFields: ['main', 'browser', 'exports'],\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"set-according-to-targets",children:["Set according to Targets",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#set-according-to-targets",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When you build multiple targets at the same time, you can set different mainFields for different targets. At this point, you need to set ",(0,s.jsx)(n.code,{children:"resolveMainFields"})," to an object whose key is the corresponding build target."]}),"\n",(0,s.jsxs)(n.p,{children:["For example to set different mainFields for ",(0,s.jsx)(n.code,{children:"web"})," and ",(0,s.jsx)(n.code,{children:"node"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    source: {\n      resolveMainFields: {\n        web: ['main', 'browser', 'exports'],\n        node: ['main', 'node', 'exports'],\n      },\n    },\n  },\n};\n"})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},57872:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return t},title:function(){return d},toc:function(){return a},default:function(){return c}});var s=r("9880"),i=r("23169"),o=r.ir(r("82857")),t={sidebar_label:"resolveMainFields"},d="source.resolveMainFields",a=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"sourceresolvemainfields",children:["source.resolveMainFields",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourceresolvemainfields",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-source.html#sourceresolvemainfields",target:"_blank",rel:"noopener noreferrer",children:"source.resolveMainFields"}),".\n"]})})]}),"\n","\n",(0,s.jsx)(o.default,{})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);