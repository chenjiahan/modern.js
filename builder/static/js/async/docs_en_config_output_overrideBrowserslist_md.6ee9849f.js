(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_config_output_overrideBrowserslist_md"],{3460:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{frontmatter:function(){return i},title:function(){return o},toc:function(){return d},default:function(){return c}});var s=n("12151"),t=n("21447");let i={},o="",d=[{text:"Priority",depth:4,id:"priority"},{text:"Default Value",depth:4,id:"default-value"},{text:"Example",depth:3,id:"example"},{text:"Set according to Targets",depth:4,id:"set-according-to-targets"}];function a(e){let r=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h4:"h4",div:"div",button:"button",pre:"pre",h3:"h3"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Type:"})," ",(0,s.jsx)(r.code,{children:"string[] | Record<BuilderTarget, string[]"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Default:"})," ",(0,s.jsx)(r.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["Specifies the range of target browsers that the project is compatible with. This value will be used by ",(0,s.jsx)(r.a,{href:"https://babeljs.io/docs/en/babel-preset-env",target:"_blank",rel:"noopener noreferrer",children:"@babel/preset-env"})," and ",(0,s.jsx)(r.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer",children:"autoprefixer"})," to identify the JavaScript syntax that need to be transformed and the CSS browser prefixes that need to be added."]}),"\n",(0,s.jsxs)(r.h4,{id:"priority",children:["Priority",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#priority",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"overrideBrowserslist"})," config will override the ",(0,s.jsx)(r.code,{children:".browserslistrc"})," config file in the project and the ",(0,s.jsx)(r.code,{children:"browserslist"})," field in package.json."]}),"\n",(0,s.jsxs)(r.p,{children:["In most cases, it is recommended to use the ",(0,s.jsx)(r.code,{children:".browserslistrc"})," file rather than the ",(0,s.jsx)(r.code,{children:"overrideBrowserslist"})," config. Because the ",(0,s.jsx)(r.code,{children:".browserslistrc"})," file is the official config file, it is more general and can be recognized by other libraries in the community."]}),"\n",(0,s.jsxs)(r.h4,{id:"default-value",children:["Default Value",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#default-value",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:["If there is no ",(0,s.jsx)(r.code,{children:"browserslist"})," configs defined in the project, nor ",(0,s.jsx)(r.code,{children:"overrideBrowserslist"})," defined, then Builder will set the default browserslist to:"]}),"\n",(0,s.jsx)(r.div,{className:"language-",children:(0,s.jsxs)(r.div,{className:"modern-code-content",children:[(0,s.jsx)(r.button,{className:"copy"}),(0,s.jsx)(r.pre,{className:"code",children:(0,s.jsx)(r.code,{className:"language-js",children:"['> 0.01%', 'not dead', 'not op_mini all'];\n"})})]})}),"\n",(0,s.jsxs)(r.h3,{id:"example",children:["Example",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"An example compatible with mobile scenarios:"}),"\n",(0,s.jsx)(r.div,{className:"language-",children:(0,s.jsxs)(r.div,{className:"modern-code-content",children:[(0,s.jsx)(r.button,{className:"copy"}),(0,s.jsx)(r.pre,{className:"code",children:(0,s.jsx)(r.code,{className:"language-js",children:"export default {\n  output: {\n    overrideBrowserslist: [\n      'iOS >= 9',\n      'Android >= 4.4',\n      'last 2 versions',\n      '> 0.2%',\n      'not dead',\n    ],\n  },\n};\n"})})]})}),"\n",(0,s.jsxs)(r.p,{children:["Check out the ",(0,s.jsx)(r.a,{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"noopener noreferrer",children:"browserslist documentation"})," to learn more about browserslist."]}),"\n",(0,s.jsxs)(r.h4,{id:"set-according-to-targets",children:["Set according to Targets",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#set-according-to-targets",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:["When you build multiple targets at the same time, you can set different browser ranges for different targets. At this point, you need to set ",(0,s.jsx)(r.code,{children:"overrideBrowserslist"})," to an object whose key is the corresponding build target."]}),"\n",(0,s.jsxs)(r.p,{children:["For example to set different ranges for ",(0,s.jsx)(r.code,{children:"web"})," and ",(0,s.jsx)(r.code,{children:"node"}),":"]}),"\n",(0,s.jsx)(r.div,{className:"language-",children:(0,s.jsxs)(r.div,{className:"modern-code-content",children:[(0,s.jsx)(r.button,{className:"copy"}),(0,s.jsx)(r.pre,{className:"code",children:(0,s.jsx)(r.code,{className:"language-js",children:"export default {\n  output: {\n    overrideBrowserslist: {\n      web: [\n        'iOS >= 9',\n        'Android >= 4.4',\n        'last 2 versions',\n        '> 0.2%',\n        'not dead',\n      ],\n      node: ['node >= 14'],\n    },\n  },\n};\n"})})]})})]})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,t.useMDXComponents)(),e.components);return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}}}]);