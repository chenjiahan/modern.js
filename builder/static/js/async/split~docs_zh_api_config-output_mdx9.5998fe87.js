(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_zh_api_config-output_mdx9"],{47651:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return r},title:function(){return l},toc:function(){return o},default:function(){return i}});var c=s("12151"),a=s("23169"),r={},l="",o=[];function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",p:"p"},(0,a.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"type DisableSourceMap =\n  | boolean\n  | {\n      js?: boolean;\n      css?: boolean;\n    };\n"})})]})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.strong,{children:"默认值："})}),"\n"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"const defaultDisableSourceMap = {\n  js: false,\n  css: process.env.NODE_ENV === 'production',\n};\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:"是否禁用 Source Map 生成。"}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"什么是 Source Map"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsx)(n.p,{children:"Source Map 是保存源代码映射关系的信息文件，它记录了编译后的代码的每一个位置，以及所对应的编译前的位置。通过 Source Map，可以在调试编译后的代码时，直接查看对应的源代码。"})})]}),"\n",(0,c.jsx)(n.p,{children:"默认情况下，Builder 的 Source Map 生成规则如下："}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"在开发环境构建时，会生成 JS 文件和 CSS 文件的 SourceMap，便于进行开发调试。"}),"\n",(0,c.jsx)(n.li,{children:"在生产环境构建时，会生成 JS 文件的 Source Map，用于调试和排查线上问题；不会生成 CSS 文件的 Source Map。"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"如果项目不需要 Source Map，可以关闭该功能，从而提升构建的速度。"}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableSourceMap: true,\n  },\n};\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:"如果需要开启开发环境的 Source Map，并在生产环境禁用，可以设置为："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableSourceMap: process.env.NODE_ENV === 'production',\n  },\n};\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:"如果需要单独控制 JS 文件或 CSS 文件的 Source Map，可以参考下方设置："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableSourceMap: {\n      js: false,\n      css: true,\n    },\n  },\n};\n"})})]})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(d,e)})):d(e)}}}]);