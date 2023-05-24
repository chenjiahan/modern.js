(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_experiments_lazy-compilation_mdx"],{2049:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var i=r("9880"),s=r("23169");function a(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h3:"h3",a:"a",h4:"h4"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type LazyCompilationOptions =\n  | boolean\n  | {\n      // 是否为异步模块开启延迟编译\n      imports?: boolean;\n      // 是否为入口模块开启延迟编译\n      entries?: boolean;\n    };\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"默认值："})," ",(0,i.jsx)(n.code,{children:"false"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"打包工具："})," ",(0,i.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"用于开启延迟编译（即按需编译）的能力。当开启此配置项时，Builder 会进行延迟编译，提升项目的编译启动速度。"}),"\n",(0,i.jsx)(n.p,{children:"延迟编译只在开发环境下生效。"}),"\n",(0,i.jsxs)(n.h3,{id:"延迟编译异步模块",children:["延迟编译异步模块",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#延迟编译异步模块",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["延迟编译 ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import",target:"_blank",rel:"noopener noreferrer",children:"Dynamic Import"})," 引入的异步模块："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export default {\n  experiments: {\n    lazyCompilation: {\n      imports: true,\n      entries: false,\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["开启 ",(0,i.jsx)(n.code,{children:"imports"})," 选项后，所有的异步模块只有在被请求时才触发编译。如果你的项目是一个单页应用（SPA），并通过 Dynamic Import 进行了路由拆分，那么会有明显的编译提速效果。"]}),"\n",(0,i.jsxs)(n.h3,{id:"延迟编译入口模块",children:["延迟编译入口模块",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#延迟编译入口模块",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"除了延迟编译异步模块，你也可以选择同时延迟编译入口模块和异步模块。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export default {\n  experiments: {\n    lazyCompilation: {\n      imports: true,\n      entries: true,\n    },\n  },\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"以上配置也可以简化为："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export default {\n  experiments: {\n    lazyCompilation: true,\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["开启 ",(0,i.jsx)(n.code,{children:"entries"})," 选项后，当启动编译时，不会编译所有的页面，而是仅在路由跳转到对应的页面时，才对该页面进行编译。"]}),"\n",(0,i.jsx)(n.p,{children:"使用延迟编译入口模块时，有以下注意事项："}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"只适用于多页应用（MPA），对单页应用（SPA）没有优化效果。"}),"\n",(0,i.jsx)(n.li,{children:"当你访问一个页面时，由于要等待页面编译完成，会有一段时间的白屏。"}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"局限性",children:["局限性",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#局限性",children:"#"})]}),"\n",(0,i.jsxs)(n.h4,{id:"禁用拆包规则",children:["禁用拆包规则",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#禁用拆包规则",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"当你开启延迟编译时，为了保证编译结果正常，Builder 会在开发环境下禁用拆包规则。这不会影响生产环境的打包产物，但会导致开发环境和生产环境的打包产物有一定差异。"}),"\n",(0,i.jsxs)(n.h4,{id:"使用代理",children:["使用代理",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用代理",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Lazy Compilation 依赖 webpack 在本地启动的开发服务器，当你将某个域名代理到 localhost 进行开发时，Lazy Compilation 将无法正常工作。因此，如果你需要使用代理时，请禁用 Lazy Compilation。"})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}},78616:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return l},title:function(){return t},toc:function(){return c},default:function(){return d}});var i=r("9880"),s=r("23169"),a=r.ir(r("2049")),l={sidebar_label:"lazyCompilation"},t="experiments.lazyCompilation",c=[];function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"experimentslazycompilation",children:["experiments.lazyCompilation",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#experimentslazycompilation",children:"#"})]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-experiments.html#experimentslazycompilation",target:"_blank",rel:"noopener noreferrer",children:"experiments.lazyCompilation"}),"。\n"]})})]}),"\n","\n",(0,i.jsx)(a.default,{})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}}}]);