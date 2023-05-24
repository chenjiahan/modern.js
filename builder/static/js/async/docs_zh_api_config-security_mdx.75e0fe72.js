(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_api_config-security_mdx"],{45854:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return a},title:function(){return d},toc:function(){return l},default:function(){return h}});var s=r("9880"),c=r("23169"),i=r.ir(r("60014")),t=r.ir(r("4210")),a={extractApiHeaders:[2]},d="Security Config",l=[{text:"security.sri",depth:2,id:"securitysri"},{text:"security.checkSyntax",depth:2,id:"securitychecksyntax"}];function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"security-config",children:["Security Config",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#security-config",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"本章节描述了 Builder 中与安全有关的配置。"}),"\n",(0,s.jsxs)(n.h2,{id:"securitysri",children:["security.sri",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#securitysri",children:"#"})]}),"\n","\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsxs)(n.h2,{id:"securitychecksyntax",children:["security.checkSyntax",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#securitychecksyntax",children:"#"})]}),"\n","\n",(0,s.jsx)(t.default,{})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},4210:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var s=r("9880"),c=r("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h3:"h3",a:"a"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type CheckSyntax =\n  | boolean\n  | {\n      targets: string[];\n      exclude?: RegExp | Array<RegExp>;\n    };\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"分析构建产物中是否存在当前浏览器范围下不兼容的高级语法。如果存在，会将详细信息打印在终端。"}),"\n",(0,s.jsxs)(n.h3,{id:"示例",children:["示例",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  security: {\n    checkSyntax: true,\n    exclude: /node_modules\\/foo/,\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["如果将 ",(0,s.jsx)(n.code,{children:"security.checkSyntax"})," 指定为 ",(0,s.jsx)(n.code,{children:"true"})," 的话，则 targets 会被认定为项目设定的 browserslist，详情请参考 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/guide/advanced/browser-compatibility.html",target:"_blank",rel:"noopener noreferrer",children:"设置浏览器范围"}),"。"]}),"\n",(0,s.jsx)(n.p,{children:"开启后将在生产环境下进行检测，当检测到不兼容的高级语法后，会将错误日志打印在终端，并退出当前构建流程。"}),"\n",(0,s.jsxs)(n.h3,{id:"错误日志",children:["错误日志",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#错误日志",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"错误日志的格式如下所示，包含代码来源文件、产物位置、错误原因、源代码等信息："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"error   [Syntax Checker] Find some syntax errors after production build:\n\n  ERROR#1:\n  source - /node_modules/foo/index.js:1:0\n  output - /Project/dist/static/js/main.3f7a4d7e.js:2:39400\n  reason - The keyword 'const' is reserved (2:39400)\n  code   - const foo = 'bar';\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"解决方法",children:["解决方法",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#解决方法",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"当检测到语法错误后，你可以通过以下方式来处理："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["如果你希望降级该语法，以保证代码具备良好的兼容性，可以通过 ",(0,s.jsx)(n.code,{children:"source.include"})," 配置来编译相应的模块。"]}),"\n",(0,s.jsx)(n.li,{children:"如果你不希望降级该语法，可以调整项目的 browserslist 范围，调整至与该语法相匹配的范围。"}),"\n",(0,s.jsxs)(n.li,{children:["如果你不希望对某些产物进行语法检查，可用 ",(0,s.jsx)(n.code,{children:"checkSyntax.exclude"})," 配置排除要检查的文件。"]}),"\n"]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}},60014:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var s=r("9880"),c=r("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",a:"a",h4:"h4",h3:"h3"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type SRIOptions =\n  | {\n      hashFuncNames?: string[];\n      enabled?: 'auto' | boolean;\n      hashLoading?: 'eager' | 'lazy';\n    }\n  | boolean;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"打包工具："})," ",(0,s.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["为 HTML 所引入的子资源添加完整性属性 —— ",(0,s.jsx)(n.code,{children:"integrity"}),"，使浏览器能够验证引入资源的完整性，以此防止下载的资源被篡改。"]}),"\n",(0,s.jsxs)(n.p,{children:["启动该选项后会将 webpack 的 ",(0,s.jsx)(n.a,{href:"https://webpack.docschina.org/configuration/output/#outputcrossoriginloading",target:"_blank",rel:"noopener noreferrer",children:"output.crossOriginLoading"})," 配置项设置为 ",(0,s.jsx)(n.code,{children:"anonymous"}),"。"]}),"\n",(0,s.jsxs)(n.h4,{id:"sri-介绍",children:["SRI 介绍",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sri-介绍",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"子资源完整性 Subresource Integrity（SRI）是专门用来校验资源的一种方案，它读取资源标签中的 integrity 属性，将其中的信息摘要值，和资源实际的信息摘要值进行对比，如果发现无法匹配，那么浏览器就会拒绝执行资源。"}),"\n",(0,s.jsx)(n.p,{children:"对于 script 标签来说，结果为拒绝执行其中的代码；对于 CSS link 来说，结果为不加载其中的样式。"}),"\n",(0,s.jsxs)(n.p,{children:["关于 SRI 的更多内容，可以查看 ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/Subresource_Integrity",target:"_blank",rel:"noopener noreferrer",children:"Subresource Integrity - MDN"}),"。"]}),"\n",(0,s.jsxs)(n.h3,{id:"示例",children:["示例",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["默认情况下，不会开启 ",(0,s.jsx)(n.code,{children:"SRI"}),"，当开启之后它的默认配置如下："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'{\n  hashFuncNames: [\'sha384\'];\n  enabled: "auto",\n  hashLoading: "eager",\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"你可以按照你自己的需求自定义配置项:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  security: {\n    sri: {\n      hashFuncNames: ['sha-256'],\n      enabled: true,\n      hashLoading: 'lazy',\n    },\n  },\n};\n"})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}}}]);