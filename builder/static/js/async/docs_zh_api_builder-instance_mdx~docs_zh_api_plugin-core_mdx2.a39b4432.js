(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_api_builder-instance_mdx~docs_zh_api_plugin-core_mdx2"],{81855:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return o},toc:function(){return d},default:function(){return l}});var i=r("12151"),s=r("23169"),c={},o="",d=[];function t(e){var n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["获取归一化后的 Builder 配置，该方法必须在 ",(0,i.jsx)(n.code,{children:"modifyBuilderConfig"})," 钩子执行完成后才能被调用。"]}),"\n",(0,i.jsxs)(n.p,{children:["相较于 ",(0,i.jsx)(n.code,{children:"getBuilderConfig"})," 方法，该方法返回的配置经过了归一化处理，配置的类型定义会得到收敛，比如 ",(0,i.jsx)(n.code,{children:"config.html"})," 的 ",(0,i.jsx)(n.code,{children:"undefined"})," 类型将被移除。"]}),"\n",(0,i.jsx)(n.p,{children:"推荐优先使用该方法获取配置。"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"function GetNormalizedConfig(): Readonly<NormalizedConfig>;\n"})})]})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(t,e)})):t(e)}}}]);