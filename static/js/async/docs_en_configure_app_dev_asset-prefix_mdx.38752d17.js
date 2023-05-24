(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_dev_asset-prefix_mdx"],{72569:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return c}});var r=n("9880"),t=n("23169");function i(e){var s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h4:"h4",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Type:"})," ",(0,r.jsx)(s.code,{children:"boolean | string"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Default:"})," ",(0,r.jsx)(s.code,{children:"'/'"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Set the URL prefix of static assets in the development environment, similar to the ",(0,r.jsx)(s.a,{href:"https://webpack.js.org/guides/public-path/",target:"_blank",rel:"noopener noreferrer",children:"output.publicPath"})," config of webpack."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"assetPrefix"})," will affect the URLs of most of the static assets, including JavaScript files, CSS files, images, videos, etc. If an incorrect value is specified, you'll receive 404 errors while loading these resources."]}),"\n",(0,r.jsxs)(s.p,{children:["This config is only used in the development environment. In the production environment, please use the ",(0,r.jsx)(s.code,{children:"output.assetPrefix"})," to set the URL prefix."]}),"\n",(0,r.jsxs)(s.h4,{id:"boolean-type",children:["Boolean Type",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-type",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["If ",(0,r.jsx)(s.code,{children:"assetPrefix"})," is set to ",(0,r.jsx)(s.code,{children:"true"}),", the URL prefix will be ",(0,r.jsx)(s.code,{children:"http://localhost:port/"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  dev: {\n    assetPrefix: true,\n  },\n};\n"})}),"\n",(0,r.jsx)(s.p,{children:"The script URL will be:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:'<script defer src="http://localhost:8080/static/js/main.js"></script>\n'})}),"\n",(0,r.jsxs)(s.p,{children:["If ",(0,r.jsx)(s.code,{children:"assetPrefix"})," is set to ",(0,r.jsx)(s.code,{children:"false"})," or not set, ",(0,r.jsx)(s.code,{children:"/"})," is used as the default value."]}),"\n",(0,r.jsxs)(s.h4,{id:"string-type",children:["String type",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#string-type",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["When the value of ",(0,r.jsx)(s.code,{children:"assetPrefix"})," is ",(0,r.jsx)(s.code,{children:"string"})," type, the string will be used as the URL prefix:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  dev: {\n    assetPrefix: 'http://example.com/assets/',\n  },\n};\n"})}),"\n",(0,r.jsx)(s.p,{children:"The script URL will be:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:'<script defer src="http://example.com/assets/static/js/main.js"></script>\n'})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}},70049:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return c},title:function(){return a},toc:function(){return d},default:function(){return o}});var r=n("9880"),t=n("23169"),i=n.ir(n("72569")),c={sidebar_label:"assetPrefix"},a="dev.assetPrefix",d=[];function l(e){var s=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"devassetprefix",children:["dev.assetPrefix",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#devassetprefix",children:"#"})]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive tip",children:[(0,r.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsxs)(s.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,r.jsx)(s.a,{href:"https://modernjs.dev/builder/en/api/config-dev.html#devassetprefix",target:"_blank",rel:"noopener noreferrer",children:"dev.assetPrefix"}),".\n"]})})]}),"\n","\n",(0,r.jsx)(i.default,{})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);