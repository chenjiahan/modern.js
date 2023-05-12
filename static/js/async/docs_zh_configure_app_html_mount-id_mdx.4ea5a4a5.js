(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_html_mount-id_mdx"],{34469:function(e,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var r=d("9880"),s=d("23169");function c(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",pre:"pre",h3:"h3",a:"a",h4:"h4"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"'root'"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["默认情况下，HTML 模板中包含了 ",(0,r.jsx)(n.code,{children:"root"})," 节点用于组件挂载，通过 ",(0,r.jsx)(n.code,{children:"mountId"})," 可以修改该节点的 id。"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-html",children:'<body>\n  <div id="root"></div>\n</body>\n'})})})}),"\n",(0,r.jsxs)(n.h3,{id:"示例",children:["示例",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["修改 DOM 挂载节点 ",(0,r.jsx)(n.code,{children:"id"})," 为 ",(0,r.jsx)(n.code,{children:"app"}),"："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    mountId: 'app',\n  },\n};\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"编译后："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-html",children:'<body>\n  <div id="app"></div>\n</body>\n'})})})}),"\n",(0,r.jsxs)(n.h3,{id:"注意事项",children:["注意事项",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注意事项",children:"#"})]}),"\n",(0,r.jsxs)(n.h4,{id:"更新相关代码",children:["更新相关代码",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#更新相关代码",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["在修改 ",(0,r.jsx)(n.code,{children:"mountId"})," 后，如果你的代码中有获取 ",(0,r.jsx)(n.code,{children:"root"})," 根节点的逻辑，请更新对应的值："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-diff",children:"- const domNode = document.getElementById('root');\n+ const domNode = document.getElementById('app');\n\nReactDOM.createRoot(domNode).render(<App />);\n"})})})}),"\n",(0,r.jsxs)(n.h4,{id:"自定义模板",children:["自定义模板",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义模板",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["如果你自定义了 HTML 模板，请确保模板中包含 ",(0,r.jsx)(n.code,{children:'<div id="<%= mountId %>"></div>'}),"，否则 ",(0,r.jsx)(n.code,{children:"mountId"})," 配置项无法生效。"]})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}},74738:function(e,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var d in n)Object.defineProperty(e,d,{enumerable:!0,get:n[d]})}(n,{frontmatter:function(){return i},title:function(){return a},toc:function(){return o},default:function(){return l}});var r=d("9880"),s=d("23169"),c=d.ir(d("34469")),i={sidebar_label:"mountId"},a="html.mountId",o=[];function t(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"htmlmountid",children:["html.mountId",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlmountid",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-html.html#htmlmountid",target:"_blank",rel:"noopener noreferrer",children:"html.mountId"}),"。\n"]})})]}),"\n","\n",(0,r.jsx)(c.default,{})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}}}]);