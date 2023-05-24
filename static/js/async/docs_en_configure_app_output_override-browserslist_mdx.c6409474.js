(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_output_override-browserslist_mdx"],{15460:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return o}});var s=n("9880"),t=n("23169");function i(e){var r=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h4:"h4",pre:"pre",h3:"h3"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Type:"})," ",(0,s.jsx)(r.code,{children:"string[] | Record<BuilderTarget, string[]"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Default:"})," ",(0,s.jsx)(r.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["Specifies the range of target browsers that the project is compatible with. This value will be used by ",(0,s.jsx)(r.a,{href:"https://babeljs.io/docs/en/babel-preset-env",target:"_blank",rel:"noopener noreferrer",children:"@babel/preset-env"})," and ",(0,s.jsx)(r.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer",children:"autoprefixer"})," to identify the JavaScript syntax that need to be transformed and the CSS browser prefixes that need to be added."]}),"\n",(0,s.jsxs)(r.h4,{id:"priority",children:["Priority",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#priority",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"overrideBrowserslist"})," config will override the ",(0,s.jsx)(r.code,{children:".browserslistrc"})," config file in the project and the ",(0,s.jsx)(r.code,{children:"browserslist"})," field in package.json."]}),"\n",(0,s.jsxs)(r.p,{children:["In most cases, it is recommended to use the ",(0,s.jsx)(r.code,{children:".browserslistrc"})," file rather than the ",(0,s.jsx)(r.code,{children:"overrideBrowserslist"})," config. Because the ",(0,s.jsx)(r.code,{children:".browserslistrc"})," file is the official config file, it is more general and can be recognized by other libraries in the community."]}),"\n",(0,s.jsxs)(r.h4,{id:"default-value",children:["Default Value",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#default-value",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:["If there is no ",(0,s.jsx)(r.code,{children:"browserslist"})," configs defined in the project, nor ",(0,s.jsx)(r.code,{children:"overrideBrowserslist"})," defined, then Builder will set the default browserslist to:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"['> 0.01%', 'not dead', 'not op_mini all'];\n"})}),"\n",(0,s.jsxs)(r.h3,{id:"example",children:["Example",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"An example compatible with mobile scenarios:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"export default {\n  output: {\n    overrideBrowserslist: [\n      'iOS >= 9',\n      'Android >= 4.4',\n      'last 2 versions',\n      '> 0.2%',\n      'not dead',\n    ],\n  },\n};\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Check out the ",(0,s.jsx)(r.a,{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"noopener noreferrer",children:"browserslist documentation"})," to learn more about browserslist."]}),"\n",(0,s.jsxs)(r.h4,{id:"set-according-to-targets",children:["Set according to Targets",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#set-according-to-targets",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:["When you build multiple targets at the same time, you can set different browser ranges for different targets. At this point, you need to set ",(0,s.jsx)(r.code,{children:"overrideBrowserslist"})," to an object whose key is the corresponding build target."]}),"\n",(0,s.jsxs)(r.p,{children:["For example to set different ranges for ",(0,s.jsx)(r.code,{children:"web"})," and ",(0,s.jsx)(r.code,{children:"node"}),":"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"export default {\n  output: {\n    overrideBrowserslist: {\n      web: [\n        'iOS >= 9',\n        'Android >= 4.4',\n        'last 2 versions',\n        '> 0.2%',\n        'not dead',\n      ],\n      node: ['node >= 14'],\n    },\n  },\n};\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}},47971:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{frontmatter:function(){return o},title:function(){return d},toc:function(){return a},default:function(){return c}});var s=n("9880"),t=n("23169"),i=n.ir(n("15460")),o={sidebar_label:"overrideBrowserslist"},d="output.overrideBrowserslist",a=[];function l(e){var r=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"outputoverridebrowserslist",children:["output.overrideBrowserslist",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#outputoverridebrowserslist",children:"#"})]}),"\n",(0,s.jsxs)(r.div,{className:"modern-directive tip",children:[(0,s.jsx)(r.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(r.div,{className:"modern-directive-content",children:(0,s.jsxs)(r.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,s.jsx)(r.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputoverridebrowserslist",target:"_blank",rel:"noopener noreferrer",children:"output.overrideBrowserslist"}),".\n"]})})]}),"\n","\n",(0,s.jsx)(i.default,{})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);