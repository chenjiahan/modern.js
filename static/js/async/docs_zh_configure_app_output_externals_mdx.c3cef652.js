(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_output_externals_mdx"],{44065:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var t,s=r("15169"),i=r("43932"),d=r("9880"),c=r("23169");function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",pre:"pre",div:"div"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"类型："})," ",(0,d.jsx)(n.code,{children:"string | object | function | RegExp"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"默认值："})," ",(0,d.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["在构建时，防止将代码中某些 ",(0,d.jsx)(n.code,{children:"import"})," 的依赖包打包到 bundle 中，而是在运行时再去从外部获取这些依赖。"]}),"\n",(0,d.jsxs)(n.p,{children:["详情请见: ",(0,d.jsx)(n.a,{href:"https://webpack.docschina.org/configuration/externals/",target:"_blank",rel:"noopener noreferrer",children:"webpack 外部扩展 (Externals)"})]}),"\n",(0,d.jsxs)(n.h3,{id:"示例",children:["示例",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["将 ",(0,d.jsx)(n.code,{children:"react-dom"})," 依赖从构建产物中剔除。为了在运行时获取这个模块, ",(0,d.jsx)(n.code,{children:"react-dom"})," 的值将全局检索 ",(0,d.jsx)(n.code,{children:"ReactDOM"})," 变量。"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    externals: {\n      'react-dom': 'ReactDOM',\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsx)(n.p,{children:"当构建 Web Worker 产物时，externals 将不会生效。这是因为 Worker 环境不支持通过访问全局变量。"})})]})]})}(t=globalThis).__RSPRESS_PAGE_META||(t.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Foutput%2Fexternals.md"]={toc:[{text:"示例",id:"示例",depth:3}],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,i._)((0,s._)({},e),{children:(0,d.jsx)(o,(0,s._)({},e))})):o(e)}},19826:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var t,s=r("15169"),i=r("43932"),d=r("9880"),c=r("23169"),o=r("44065");function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"outputexternals",children:["output.externals",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputexternals",children:"#"})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,d.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputexternals",target:"_blank",rel:"noopener noreferrer",children:"output.externals"}),"。\n"]})})]}),"\n","\n",(0,d.jsx)(o.default,{})]})}(t=globalThis).__RSPRESS_PAGE_META||(t.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Foutput%2Fexternals.mdx"]={toc:[],title:"output.externals",frontmatter:{sidebar_label:"externals"}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,i._)((0,s._)({},e),{children:(0,d.jsx)(a,(0,s._)({},e))})):a(e)}}}]);