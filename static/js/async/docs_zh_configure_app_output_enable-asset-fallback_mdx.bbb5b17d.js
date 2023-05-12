(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_output_enable-asset-fallback_mdx"],{2132:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var r=s("9880"),a=s("23169");function c(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",pre:"pre"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"开启该选项后，当编译过程中遇到无法识别的文件类型时，会直接将该文件直接输出到产物目录；否则会抛出一个异常。"}),"\n",(0,r.jsxs)(n.h3,{id:"示例",children:["示例",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"开启配置项："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    enableAssetFallback: true,\n  },\n};\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"在代码中引用一个未知类型的模块："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"import './foo.xxx';\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["编译后，",(0,r.jsx)(n.code,{children:"foo.xxx"})," 会被自动输出到 ",(0,r.jsx)(n.code,{children:"dist/static/media"})," 目录下。"]}),"\n",(0,r.jsxs)(n.p,{children:["你可以通过 ",(0,r.jsx)(n.code,{children:"output.distPath.media"})," 和 ",(0,r.jsx)(n.code,{children:"output.filename.media"})," 配置项来控制 fallback 后的输出路径和文件名称。"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["开启该配置会导致 webpack 配置中的 rules 结构变化，增加一层额外的 ",(0,r.jsx)(n.code,{children:"oneOf"})," 嵌套结构。大多数情况下，我们不推荐你使用此配置。\n"]})})]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}},27686:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return t},title:function(){return i},toc:function(){return l},default:function(){return o}});var r=s("9880"),a=s("23169"),c=s.ir(s("2132")),t={sidebar_label:"enableAssetFallback"},i="output.enableAssetFallback",l=[];function d(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"outputenableassetfallback",children:["output.enableAssetFallback",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputenableassetfallback",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputenableassetfallback",target:"_blank",rel:"noopener noreferrer",children:"output.enableAssetFallback"}),"。\n"]})})]}),"\n","\n",(0,r.jsx)(c.default,{})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}}}]);