(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_source_module-scopes_mdx"],{56184:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var c=s("9880"),r=s("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",pre:"pre",img:"img",h4:"h4"},(0,r.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"Array<string | Regexp> | Function"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"undefined"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"打包工具："})," ",(0,c.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"限制源代码的引用路径。配置该选项后，所有源文件只能从约定的目录下引用代码，从其他目录引用代码会产生对应的报错提示。"}),"\n",(0,c.jsxs)(n.h3,{id:"示例",children:["示例",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["首先我们配置 ",(0,c.jsx)(n.code,{children:"moduleScopes"})," 仅包含 ",(0,c.jsx)(n.code,{children:"src"})," 目录："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: ['./src'],\n  },\n};\n"})})})}),"\n",(0,c.jsxs)(n.p,{children:["然后在 ",(0,c.jsx)(n.code,{children:"src/App.tsx"})," 中导入 ",(0,c.jsx)(n.code,{children:"src"})," 目录外部的 ",(0,c.jsx)(n.code,{children:"utils/a"})," 模块:"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"import a from '../utils/a';\n"})})})}),"\n",(0,c.jsx)(n.p,{children:"在编译时，会提示引用路径错误:"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/module-scopes-error.png",alt:"scopes-error"})}),"\n",(0,c.jsxs)(n.p,{children:["通过该选项配置 ",(0,c.jsx)(n.code,{children:"utils"})," 目录，再进行编译，则不会出现错误提示。"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: ['./src', './utils'],\n  },\n};\n"})})})}),"\n",(0,c.jsxs)(n.h4,{id:"array-类型",children:["Array 类型",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#array-类型",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["当 ",(0,c.jsx)(n.code,{children:"moduleScopes"})," 的值为 ",(0,c.jsx)(n.code,{children:"Array"})," 类型时，可以直接设置若干个代码路径，比如添加以下配置："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: ['./src', './shared', './utils'],\n  },\n};\n"})})})}),"\n",(0,c.jsxs)(n.h4,{id:"function-类型",children:["Function 类型",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-类型",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"moduleScopes"})," 也支持通过函数的形式来进行修改，避免覆盖默认值："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: scopes => {\n      scopes.push('./shared');\n    },\n  },\n};\n"})})})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(d,e)})):d(e)}},3179:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return o},title:function(){return i},toc:function(){return l},default:function(){return t}});var c=s("9880"),r=s("23169"),d=s.ir(s("56184")),o={sidebar_label:"moduleScopes"},i="source.moduleScopes",l=[];function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,r.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"sourcemodulescopes",children:["source.moduleScopes",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcemodulescopes",children:"#"})]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,c.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-source.html#sourcemodulescopes",target:"_blank",rel:"noopener noreferrer",children:"source.moduleScopes"}),"。\n"]})})]}),"\n","\n",(0,c.jsx)(d.default,{})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(a,e)})):a(e)}}}]);