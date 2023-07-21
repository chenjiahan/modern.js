(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_source_module-scopes_mdx"],{58470:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return a}});var r,c=n("15169"),d=n("43932"),o=n("9880"),i=n("23169");function l(e){var s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre",img:"img"},(0,i.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"类型："})," ",(0,o.jsx)(s.code,{children:"Array<string | Regexp> | Function"})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"默认值："})," ",(0,o.jsx)(s.code,{children:"undefined"})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"打包工具："})," ",(0,o.jsx)(s.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"限制源代码的引用路径。配置该选项后，所有源文件只能从约定的目录下引用代码，从其他目录引用代码会产生对应的报错提示。"}),"\n",(0,o.jsxs)(s.h3,{id:"示例",children:["示例",(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,o.jsxs)(s.p,{children:["首先我们配置 ",(0,o.jsx)(s.code,{children:"moduleScopes"})," 仅包含 ",(0,o.jsx)(s.code,{children:"src"})," 目录："]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: ['./src'],\n  },\n};\n"})}),"\n",(0,o.jsxs)(s.p,{children:["然后在 ",(0,o.jsx)(s.code,{children:"src/App.tsx"})," 中导入 ",(0,o.jsx)(s.code,{children:"src"})," 目录外部的 ",(0,o.jsx)(s.code,{children:"utils/a"})," 模块:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:"import a from '../utils/a';\n"})}),"\n",(0,o.jsx)(s.p,{children:"在编译时，会提示引用路径错误:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/module-scopes-error.png",alt:"scopes-error"})}),"\n",(0,o.jsxs)(s.p,{children:["通过该选项配置 ",(0,o.jsx)(s.code,{children:"utils"})," 目录，再进行编译，则不会出现错误提示。"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: ['./src', './utils'],\n  },\n};\n"})}),"\n",(0,o.jsxs)(s.h3,{id:"array-类型",children:["Array 类型",(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#array-类型",children:"#"})]}),"\n",(0,o.jsxs)(s.p,{children:["当 ",(0,o.jsx)(s.code,{children:"moduleScopes"})," 的值为 ",(0,o.jsx)(s.code,{children:"Array"})," 类型时，可以直接设置若干个代码路径，比如添加以下配置："]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: ['./src', './shared', './utils'],\n  },\n};\n"})}),"\n",(0,o.jsxs)(s.h3,{id:"function-类型",children:["Function 类型",(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#function-类型",children:"#"})]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"moduleScopes"})," 也支持通过函数的形式来进行修改，避免覆盖默认值："]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: scopes => {\n      scopes.push('./shared');\n    },\n  },\n};\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Fsource%2FmoduleScopes.md"]={toc:[{text:"示例",id:"示例",depth:3},{text:"Array 类型",id:"array-类型",depth:3},{text:"Function 类型",id:"function-类型",depth:3}],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return s?(0,o.jsx)(s,(0,d._)((0,c._)({},e),{children:(0,o.jsx)(l,(0,c._)({},e))})):l(e)}},2874:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return t}});var r,c=n("15169"),d=n("43932"),o=n("9880"),i=n("23169"),l=n("58470");function a(e){var s=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.h1,{id:"sourcemodulescopes",children:["source.moduleScopes",(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcemodulescopes",children:"#"})]}),"\n",(0,o.jsxs)(s.div,{className:"modern-directive tip",children:[(0,o.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,o.jsx)(s.div,{className:"modern-directive-content",children:(0,o.jsxs)(s.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,o.jsx)(s.a,{href:"https://modernjs.dev/builder/api/config-source.html#sourcemodulescopes",target:"_blank",rel:"noopener noreferrer",children:"source.moduleScopes"}),"。\n"]})})]}),"\n","\n",(0,o.jsx)(l.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fmain-doc%2Fdocs%2Fzh%2Fconfigure%2Fapp%2Fsource%2Fmodule-scopes.mdx"]={toc:[],title:"source.moduleScopes",frontmatter:{sidebar_label:"moduleScopes"}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return s?(0,o.jsx)(s,(0,d._)((0,c._)({},e),{children:(0,o.jsx)(a,(0,c._)({},e))})):a(e)}}}]);