(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_api_builder-instance_mdx~docs_zh_api_plugin-hooks_mdx6"],{41684:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return s},title:function(){return o},toc:function(){return t},default:function(){return d}});var c=r("12151"),i=r("21447"),s={},o="",t=[];function l(e){var n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:["在创建 compiler 实例后、执行构建前调用，当你执行 ",(0,c.jsx)(n.code,{children:"builder.startDevServer"}),"、",(0,c.jsx)(n.code,{children:"builder.build"})," 或 ",(0,c.jsx)(n.code,{children:"builder.createCompiler"})," 时，都会调用此钩子。你可以通过 ",(0,c.jsx)(n.code,{children:"compiler"})," 参数获取到 compiler 实例对象。"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"function OnAfterCreateCompiler(callback: (params: {\n  compiler: Compiler | MultiCompiler;\n}) => Promise<void> | void;): void;\n"})})]})})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(l,e)})):l(e)}}}]);