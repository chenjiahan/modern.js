(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_output_polyfill_mdx"],{3290:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d}});var i=r("9880"),s=r("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",h4:"h4",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"类型："})," ",(0,i.jsx)(n.code,{children:"'entry' | 'usage' | 'ua' | 'off'"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"默认值："})," ",(0,i.jsx)(n.code,{children:"'entry'"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["通过 ",(0,i.jsx)(n.code,{children:"output.polyfill"})," 你可以配置 Polyfill 的注入方式。"]}),"\n",(0,i.jsxs)(n.h3,{id:"配置项",children:["配置项",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置项",children:"#"})]}),"\n",(0,i.jsxs)(n.h4,{id:"entry",children:["entry",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entry",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["当 ",(0,i.jsx)(n.code,{children:"output.polyfill"})," 配置为 ",(0,i.jsx)(n.code,{children:"'entry'"})," 时，会在每个入口文件中注入 Polyfill。"]}),"\n",(0,i.jsxs)(n.p,{children:["等价于 ",(0,i.jsx)(n.code,{children:"@babel/preset-env"})," 的 ",(0,i.jsx)(n.code,{children:"useBuiltIns: 'entry'"})," 配置。"]}),"\n",(0,i.jsxs)(n.h4,{id:"usage",children:["usage",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["当 ",(0,i.jsx)(n.code,{children:"output.polyfill"})," 配置为 ",(0,i.jsx)(n.code,{children:"'usage'"})," 时，会在每个文件中根据代码中使用的 API 注入 Polyfill。"]}),"\n",(0,i.jsxs)(n.p,{children:["等价于 ",(0,i.jsx)(n.code,{children:"@babel/preset-env"})," 的 ",(0,i.jsx)(n.code,{children:"useBuiltIns: 'usage'"})," 配置。"]}),"\n",(0,i.jsxs)(n.h4,{id:"ua",children:["ua",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ua",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"根据当前请求的 UA 信息，动态下发 Polyfill 代码。"}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["动态下发能力需要和 ",(0,i.jsx)(n.code,{children:"@modern-js/plugin-polyfill"})," 插件配合使用，详情可参考 ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/guides/advanced-features/compatibility.html#%E8%BF%90%E8%A1%8C%E6%97%B6%E6%8C%89%E9%9C%80-polyfill",target:"_blank",rel:"noopener noreferrer",children:"运行时按需 Polyfill"}),"。\n"]})})]}),"\n",(0,i.jsxs)(n.h4,{id:"off",children:["off",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#off",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"不注入 Polyfill。使用此选项时，需要自行保证代码的兼容性。"}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["在使用 Rspack 作为打包工具时，暂不支持 ",(0,i.jsx)(n.code,{children:"usage"})," 配置项。\n"]})})]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}},51292:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return d},title:function(){return c},toc:function(){return t},default:function(){return a}});var i=r("9880"),s=r("23169"),l=r.ir(r("3290")),d={sidebar_label:"polyfill"},c="output.polyfill",t=[];function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"outputpolyfill",children:["output.polyfill",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputpolyfill",children:"#"})]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputpolyfill",target:"_blank",rel:"noopener noreferrer",children:"output.polyfill"}),"。\n"]})})]}),"\n","\n",(0,i.jsx)(l.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}}}]);