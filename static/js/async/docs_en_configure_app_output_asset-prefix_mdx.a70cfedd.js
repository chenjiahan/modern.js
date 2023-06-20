(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_output_asset-prefix_mdx"],{86182:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=s("9880"),r=s("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"boolean | string"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"'/'"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["When using CDN in the production environment, you can use this option to set the URL prefix of static assets, similar to the ",(0,t.jsx)(n.a,{href:"https://webpack.js.org/guides/public-path/",target:"_blank",rel:"noopener noreferrer",children:"output.publicPath"})," config of webpack."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"assetPrefix"})," will affect the URLs of most of the static assets, including JavaScript files, CSS files, images, videos, etc. If an incorrect value is specified, you'll receive 404 errors while loading these resources."]}),"\n",(0,t.jsxs)(n.p,{children:["This config is only used in the production environment. In the development environment, please use the ",(0,t.jsx)(n.code,{children:"dev.assetPrefix"})," to set the URL prefix."]}),"\n",(0,t.jsxs)(n.p,{children:["After setting, the URLs of JavaScript, CSS and other static files will be prefixed with ",(0,t.jsx)(n.code,{children:"output.assetPrefix"}),":"]}),"\n",(0,t.jsxs)(n.h3,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    assetPrefix: 'https://cdn.example.com/assets/',\n  },\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"After building, you can see that the JS files are loaded from:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<script\n  defer\n  src="https://cdn.example.com/assets/static/js/main.ebc4ff4f.js"\n></script>\n'})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},73503:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return o},title:function(){return a},toc:function(){return c},default:function(){return l}});var t=s("9880"),r=s("23169"),i=s.ir(s("86182")),o={sidebar_label:"assetPrefix"},a="output.assetPrefix",c=[];function d(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"outputassetprefix",children:["output.assetPrefix",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputassetprefix",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputassetprefix",target:"_blank",rel:"noopener noreferrer",children:"output.assetPrefix"}),".\n"]})})]}),"\n","\n",(0,t.jsx)(i.default,{})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}}}]);