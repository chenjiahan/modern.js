(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_configure_app_output_polyfill_mdx"],{75597:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var r=i("12151"),s=i("21447");function t(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",h4:"h4",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"'entry' | 'usage' | 'ua' | 'off'"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"'entry'"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Via ",(0,r.jsx)(n.code,{children:"output.polyfill"})," you can configure how the polyfill is injected."]}),"\n",(0,r.jsxs)(n.h3,{id:"config",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"}),"Config"]}),"\n",(0,r.jsxs)(n.h4,{id:"entry",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entry",children:"#"}),"entry"]}),"\n",(0,r.jsxs)(n.p,{children:["Polyfill is injected in every entry file when ",(0,r.jsx)(n.code,{children:"output.polyfill"})," is configured as ",(0,r.jsx)(n.code,{children:"'entry'"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Equivalent to ",(0,r.jsx)(n.code,{children:"useBuiltIns: 'entry'"})," configuration in ",(0,r.jsx)(n.code,{children:"@babel/preset-env"}),"."]}),"\n",(0,r.jsxs)(n.h4,{id:"usage",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"}),"usage"]}),"\n",(0,r.jsx)(n.p,{children:"Polyfill is injected in each file based on the API used in the code."}),"\n",(0,r.jsxs)(n.p,{children:["Equivalent to ",(0,r.jsx)(n.code,{children:"useBuiltIns: 'usage'"})," configuration in ",(0,r.jsx)(n.code,{children:"@babel/preset-env"}),"."]}),"\n",(0,r.jsxs)(n.h4,{id:"ua",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ua",children:"#"}),"ua"]}),"\n",(0,r.jsx)(n.p,{children:"The Polyfill code is dynamically delivered according to the currently requested UA information."}),"\n",(0,r.jsxs)(n.h4,{id:"off",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#off",children:"#"}),"off"]}),"\n",(0,r.jsx)(n.p,{children:"Polyfill is not injected. When using this option, you need to ensure code compatibility yourself."}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.p,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["\nWhen using Rspack as the bundler, the ",(0,r.jsx)(n.code,{children:"usage"}),"configuration item is not currently supported."]})})]})]})}var l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}},48771:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return l},toc:function(){return c},title:function(){return d},default:function(){return a}});var r=i("12151"),s=i("21447"),t=i.ir(i("75597"));let l={sidebar_label:"polyfill"},c=[],d="output.polyfill";function o(e){let n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"outputpolyfill",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputpolyfill",children:"#"}),"output.polyfill"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.p,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["\nThis config is provided by Modern.js Builder, more detail can see ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputpolyfill",target:"_blank",rel:"noopener noreferrer",children:"output.polyfill"}),"."]})})]}),"\n","\n",(0,r.jsx)(t.default,{})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);