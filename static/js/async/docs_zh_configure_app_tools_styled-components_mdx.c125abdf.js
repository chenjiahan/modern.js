(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_tools_styled-components_mdx"],{19563:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var r=s("9880"),t=s("23169");function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"默认值："})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"{\n  displayName: true,\n  // 在 SSR 构建中 isSSR 为 true\n  ssr: isSSR,\n  // 在生产环境构建时启用 `pure` 来优化包体积\n  pure: isProd,\n  transpileTemplateLiterals: true,\n}\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"打包工具："})," ",(0,r.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["对应 ",(0,r.jsx)(n.a,{href:"https://github.com/styled-components/babel-plugin-styled-components",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-styled-components"})," 的配置。 值为 ",(0,r.jsx)(n.code,{children:"Object"})," 类型时，利用 Object.assign 函数与默认配置合并。比如:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    styledComponents: {\n      pure: false,\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["值为 ",(0,r.jsx)(n.code,{children:"Function"})," 类型时，第一个参数为默认配置，第二个参数提供了一些可以直接调用的工具函数："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    styledComponents(config) {\n      // 修改 pure 配置\n      config.pure = false;\n    },\n  },\n};\n"})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},61135:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return l},title:function(){return c},toc:function(){return i},default:function(){return a}});var r=s("9880"),t=s("23169"),o=s.ir(s("19563")),l={sidebar_label:"styledComponents"},c="tools.styledComponents",i=[];function d(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"toolsstyledcomponents",children:["tools.styledComponents",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsstyledcomponents",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolsstyledcomponents",target:"_blank",rel:"noopener noreferrer",children:"tools.styledComponents"}),"。\n"]})})]}),"\n","\n",(0,r.jsx)(o.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}}}]);