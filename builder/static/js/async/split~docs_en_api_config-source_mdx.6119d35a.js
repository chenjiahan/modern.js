(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_en_api_config-source_mdx"],{46712:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return o},title:function(){return l},toc:function(){return r},default:function(){return t}});var a=s("12151"),c=s("23169"),o={},l="",r=[{text:"Example",depth:3,id:"example"}];function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",div:"div",button:"button",pre:"pre",p:"p",h3:"h3",a:"a"},(0,c.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Type:"})," ",(0,a.jsx)(n.code,{children:"Record<string, JSONValue>"})]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"const defaultGlobalVars = {\n  // The environment variable `process.env.NODE_ENV` will be added by default,\n  // so you don't need to set it in manually.\n  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),\n};\n"})})]})}),"\n",(0,a.jsxs)(n.p,{children:["Define global variables. It can replace expressions like ",(0,a.jsx)(n.code,{children:"process.env.FOO"})," in your code after compile. Such as:"]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-js",children:"console.log(process.env.NODE_ENV);\n\n// ⬇️ Turn into being...\nconsole.log('development');\n"})})]})}),"\n",(0,a.jsxs)(n.p,{children:["Doesn't works with destructuring assignment, because builder does not know if ",(0,a.jsx)(n.code,{children:"NODE_ENV"})," and ",(0,a.jsx)(n.code,{children:"process.env.NODE_ENV"})," are associated:"]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-js",children:"const { NODE_ENV } = process.env;\nconsole.log(NODE_ENV);\n// ❌ Won't get a string.\n"})})]})}),"\n",(0,a.jsxs)(n.p,{children:["You can take ",(0,a.jsx)(n.code,{children:"source.globalVars"})," as the syntax sugar of ",(0,a.jsx)(n.code,{children:"source.define"}),", the only difference is that ",(0,a.jsx)(n.code,{children:"source.globalVars"})," will automatically stringify the value, which makes it easier to set the value of global variables. The values of ",(0,a.jsx)(n.code,{children:"globalVars"})," should be JSON-safe to ensure it can be serialized."]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    globalVars: {\n      'process.env.BUILD_VERSION': '0.0.1',\n      'import.meta.foo': { bar: 42 },\n      'import.meta.baz': false,\n    },\n    define: {\n      'process.env.BUILD_VERSION': JSON.stringify('0.0.1'),\n      'import.meta': {\n        foo: JSON.stringify({ bar: 42 }),\n        baz: JSON.stringify(false),\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,a.jsxs)(n.h3,{id:"example",children:["Example",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Add the following config to use:"}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    globalVars: {\n      ENABLE_VCONSOLE: true,\n      APP_CONTEXT: { answer: 42 },\n    },\n  },\n};\n"})})]})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(i,e)})):i(e)}}}]);