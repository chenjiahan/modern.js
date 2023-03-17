(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_configure_app_output_enable-asset-fallback_mdx"],{94545:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return i}});var l=n("12151");function r(e){let s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",button:"button",pre:"pre",span:"span"},e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"类型："})," ",(0,l.jsx)(s.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"默认值："})," ",(0,l.jsx)(s.code,{children:"false"})]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"开启该选项后，当编译过程中遇到无法识别的文件类型时，会直接将该文件直接输出到产物目录；否则会抛出一个异常。"}),"\n",(0,l.jsxs)(s.h3,{id:"示例",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"}),"示例"]}),"\n",(0,l.jsx)(s.p,{children:"开启配置项："}),"\n",(0,l.jsxs)(s.div,{className:"language-js",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  output"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    enableAssetFallback"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(s.p,{children:"在代码中引用一个未知类型的模块："}),"\n",(0,l.jsxs)(s.div,{className:"language-js",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./foo.xxx'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.p,{children:["编译后，",(0,l.jsx)(s.code,{children:"foo.xxx"})," 会被自动输出到 ",(0,l.jsx)(s.code,{children:"dist/static/media"})," 目录下。"]}),"\n",(0,l.jsxs)(s.p,{children:["你可以通过 ",(0,l.jsx)(s.code,{children:"output.distPath.media"})," 和 ",(0,l.jsx)(s.code,{children:"output.filename.media"})," 配置项来控制 fallback 后的输出路径和文件名称。"]}),"\n",(0,l.jsxs)(s.div,{className:"modern-directive tip",children:[(0,l.jsx)(s.p,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(s.div,{className:"modern-directive-content",children:(0,l.jsxs)(s.p,{children:["\n开启该配置会导致 webpack 配置中的 rules 结构变化，增加一层额外的 ",(0,l.jsx)(s.code,{children:"oneOf"}),"嵌套结构。大多数情况下，我们不推荐你使用此配置。"]})})]})]})}var i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=e.components||{};return s?(0,l.jsx)(s,Object.assign({},e,{children:(0,l.jsx)(r,e)})):r(e)}},31394:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return i},toc:function(){return c},title:function(){return a},default:function(){return o}});var l=n("12151"),r=n.ir(n("94545"));let i={sidebar_label:"enableAssetFallback"},c=[],a="output.enableAssetFallback";function t(e){let s=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.h1,{id:"outputenableassetfallback",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#outputenableassetfallback",children:"#"}),"output.enableAssetFallback"]}),"\n",(0,l.jsxs)(s.div,{className:"modern-directive tip",children:[(0,l.jsx)(s.p,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(s.div,{className:"modern-directive-content",children:(0,l.jsxs)(s.p,{children:["\n该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,l.jsx)(s.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputenableassetfallback",target:"_blank",rel:"nofollow",children:"output.enableAssetFallback"}),"。"]})})]}),"\n","\n",(0,l.jsx)(r.default,{})]})}var o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=e.components||{};return s?(0,l.jsx)(s,Object.assign({},e,{children:(0,l.jsx)(t,e)})):t(e)}}}]);