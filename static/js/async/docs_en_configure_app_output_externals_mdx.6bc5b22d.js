(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_configure_app_output_externals_mdx"],{74120:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var t=r("12151"),s=r("21447");function i(e){var n=Object.assign({ul:"ul",li:"li",p:"p",strong:"strong",code:"code",a:"a",div:"div",h3:"h3",button:"button",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"string | object | function | RegExp"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["At build time, prevent some ",(0,t.jsx)(n.code,{children:"import"})," dependencies from being packed into bundles in your code, and instead fetch them externally at runtime."]}),"\n",(0,t.jsxs)(n.p,{children:["For more information, please see: ",(0,t.jsx)(n.a,{href:"https://webpack.js.org/configuration/externals/",target:"_blank",rel:"noopener noreferrer",children:"webpack Externals"})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:["When using Rspack as the bundler, only the ",(0,t.jsx)(n.code,{children:"Record<string, string>"})," type is supported.\n"]})]}),"\n",(0,t.jsxs)(n.h3,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Exclude the ",(0,t.jsx)(n.code,{children:"react-dom"})," dependency from the build product. To get this module at runtime, the value of ",(0,t.jsx)(n.code,{children:"react-dom"})," will globally retrieve the ",(0,t.jsx)(n.code,{children:"ReactDOM"})," variable."]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    externals: {\n      'react-dom': 'ReactDOM',\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:"When the build target is Web Worker, externals will not take effect. This is because the Worker environment can not access global variables."})]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},39557:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return a},toc:function(){return d},default:function(){return o}});var t=r("12151"),s=r("21447"),i=r.ir(r("74120")),c={sidebar_label:"externals"},a="output.externals",d=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"output.externals",children:["output.externals",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#output.externals",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:["This config is provided by Modern.js Builder, more detail can see ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputexternals",target:"_blank",rel:"noopener noreferrer",children:"output.externals"}),".\n"]})]}),"\n","\n",(0,t.jsx)(i.default,{})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}}}]);