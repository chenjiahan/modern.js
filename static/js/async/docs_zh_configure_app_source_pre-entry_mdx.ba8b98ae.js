(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_source_pre-entry_mdx"],{38555:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d}});var r=s("12151"),c=s("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",div:"div",button:"button",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"string | string[]"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"在每个页面的入口文件前添加一段代码，这段代码会早于页面的代码执行，因此可以用于执行一些全局的代码逻辑，比如注入 polyfill、设置全局样式等。"}),"\n",(0,r.jsxs)(n.h4,{id:"添加单个脚本",children:["添加单个脚本",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#添加单个脚本",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["首先创建一个 ",(0,r.jsx)(n.code,{children:"src/polyfill.ts"})," 文件："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"console.log('I am a polyfill');\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["然后将 ",(0,r.jsx)(n.code,{children:"src/polyfill.ts"})," 配置到 ",(0,r.jsx)(n.code,{children:"source.preEntry"})," 上："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    preEntry: './src/polyfill.ts',\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["重新运行编译并访问任意页面，可以看到 ",(0,r.jsx)(n.code,{children:"src/polyfill.ts"})," 中的代码已经执行，并在 console 中输出了对应的内容。"]}),"\n",(0,r.jsxs)(n.h4,{id:"添加全局样式",children:["添加全局样式",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#添加全局样式",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["你也可以通过 ",(0,r.jsx)(n.code,{children:"source.preEntry"})," 来配置全局样式，这段 CSS 代码会早于页面代码加载，比如引入一个 ",(0,r.jsx)(n.code,{children:"normalize.css"})," 文件："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    preEntry: './src/normalize.css',\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h4,{id:"添加多个脚本",children:["添加多个脚本",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#添加多个脚本",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["你可以将 ",(0,r.jsx)(n.code,{children:"preEntry"})," 设置为数组来添加多个脚本，它们会按数组顺序执行："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    preEntry: ['./src/polyfill-a.ts', './src/polyfill-b.ts'],\n  },\n};\n"})})]})})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},19899:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return d},title:function(){return i},toc:function(){return a},default:function(){return t}});var r=s("12151"),c=s("23169"),l=s.ir(s("38555")),d={sidebar_label:"preEntry"},i="source.preEntry",a=[];function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"source-preentry",children:["source.preEntry",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#source-preentry",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-source.html#sourcepreentry",target:"_blank",rel:"noopener noreferrer",children:"source.preEntry"}),"。\n"]})})]}),"\n","\n",(0,r.jsx)(l.default,{})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);