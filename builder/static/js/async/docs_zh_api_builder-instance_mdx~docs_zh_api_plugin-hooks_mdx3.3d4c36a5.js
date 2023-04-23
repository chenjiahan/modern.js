(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_api_builder-instance_mdx~docs_zh_api_plugin-hooks_mdx3"],{23101:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return i},toc:function(){return t},default:function(){return l}});var s=r("12151"),o=r("23169"),c={},i="",t=[];function d(e){var n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["在创建 compiler 实例前调用，当你执行 ",(0,s.jsx)(n.code,{children:"builder.startDevServer"}),"、",(0,s.jsx)(n.code,{children:"builder.build"})," 或 ",(0,s.jsx)(n.code,{children:"builder.createCompiler"})," 时，都会调用此钩子。你可以通过 ",(0,s.jsx)(n.code,{children:"bundlerConfigs"})," 参数获取到底层打包工具的最终配置对象。"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"function OnBeforeCreateCompiler(\n  callback: (params: {\n    bundlerConfigs: WebpackConfig[] | RspackConfig[];\n  }) => Promise<void> | void,\n): void;\n"})})]})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}}}]);