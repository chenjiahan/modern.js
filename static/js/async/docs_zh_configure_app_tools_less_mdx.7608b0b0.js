(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_tools_less_mdx"],{4929:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return d}});var r=n("12151"),c=n("23169");function l(e){var s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",div:"div",button:"button",pre:"pre",p:"p",a:"a",h3:"h3",h4:"h4"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"类型："})," ",(0,r.jsx)(s.code,{children:"Object | Function"})]}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"默认值："})}),"\n"]}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-js",children:"const defaultOptions = {\n  lessOptions: {\n    javascriptEnabled: true,\n  },\n  // 默认在开发环境下启用 CSS 的 Source Map\n  sourceMap: isDev,\n};\n"})})]})}),"\n",(0,r.jsxs)(s.p,{children:["你可以通过 ",(0,r.jsx)(s.code,{children:"tools.less"})," 修改 ",(0,r.jsx)(s.a,{href:"https://github.com/webpack-contrib/less-loader",target:"_blank",rel:"noopener noreferrer",children:"less-loader"})," 的配置。"]}),"\n",(0,r.jsxs)(s.h3,{id:"object-类型",children:["Object 类型",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#object-类型",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["当 ",(0,r.jsx)(s.code,{children:"tools.less"})," 的值为 ",(0,r.jsx)(s.code,{children:"Object"})," 类型时，会与默认配置通过 Object.assign 进行浅层合并，值得注意的是，",(0,r.jsx)(s.code,{children:"lessOptions"})," 会通过 deepMerge 进行深层合并。"]}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    less: {\n      lessOptions: {\n        javascriptEnabled: false,\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(s.h3,{id:"function-类型",children:["Function 类型",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#function-类型",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["当 ",(0,r.jsx)(s.code,{children:"tools.less"})," 为 Function 类型时，默认配置作为第一个参数传入，可以直接修改配置对象，也可以返回一个值作为最终结果，第二个参数提供了一些可以直接调用的工具函数："]}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    less(config) {\n      // 修改 lessOptions 配置\n      config.lessOptions = {\n        javascriptEnabled: false,\n      };\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(s.h3,{id:"工具函数",children:["工具函数",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#工具函数",children:"#"})]}),"\n",(0,r.jsxs)(s.h4,{id:"addexcludes",children:["addExcludes",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#addexcludes",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"类型："})," ",(0,r.jsx)(s.code,{children:"(excludes: RegExp | RegExp[]) => void"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["用来指定 ",(0,r.jsx)(s.code,{children:"less-loader"})," 不编译哪些文件，你可以传入一个或多个正则表达式来匹配 less 文件的路径。例如："]}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    less(config, { addExcludes }) {\n      addExcludes(/node_modules/);\n    },\n  },\n};\n"})})]})})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},8169:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return d},title:function(){return a},toc:function(){return o},default:function(){return t}});var r=n("12151"),c=n("23169"),l=n.ir(n("4929")),d={sidebar_label:"less"},a="tools.less",o=[];function i(e){var s=Object.assign({h1:"h1",a:"a",div:"div"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"tools.less",children:["tools.less",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#tools.less",children:"#"})]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive tip",children:[(0,r.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(s.div,{className:"modern-directive-content",children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,r.jsx)(s.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolsless",target:"_blank",rel:"noopener noreferrer",children:"tools.less"}),"。\n"]})]}),"\n","\n",(0,r.jsx)(l.default,{})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}}}]);