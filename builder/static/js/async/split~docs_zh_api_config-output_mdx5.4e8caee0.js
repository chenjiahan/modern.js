(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_zh_api_config-output_mdx5"],{32951:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return c},toc:function(){return o},default:function(){return l}});var s=r("12151"),d=r("23169"),i={},c="",o=[{text:"优先级",depth:4,id:"优先级"},{text:"默认值",depth:4,id:"默认值"},{text:"示例",depth:3,id:"示例"},{text:"根据产物类型设置",depth:4,id:"根据产物类型设置"}];function t(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h4:"h4",div:"div",button:"button",pre:"pre",h3:"h3"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"string[] | Record<BuilderTarget, string[]>"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["指定项目兼容的目标浏览器范围。该值会被 ",(0,s.jsx)(n.a,{href:"https://babeljs.io/docs/en/babel-preset-env",target:"_blank",rel:"noopener noreferrer",children:"@babel/preset-env"})," 和 ",(0,s.jsx)(n.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer",children:"autoprefixer"})," 用来确定需要转换的 JavaScript 语法特性和需要添加的 CSS 浏览器前缀。"]}),"\n",(0,s.jsxs)(n.h4,{id:"优先级",children:["优先级",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#优先级",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"overrideBrowserslist"})," 配置的优先级高于项目中的 ",(0,s.jsx)(n.code,{children:".browserslistrc"})," 配置文件和 package.json 中的 ",(0,s.jsx)(n.code,{children:"browserslist"})," 字段。"]}),"\n",(0,s.jsxs)(n.p,{children:["大多数场景下，推荐优先使用 ",(0,s.jsx)(n.code,{children:".browserslistrc"})," 文件，而不是使用 ",(0,s.jsx)(n.code,{children:"overrideBrowserslist"})," 配置。因为 ",(0,s.jsx)(n.code,{children:".browserslistrc"})," 文件是官方定义的配置文件，通用性更强，可以被社区中的其他库识别。"]}),"\n",(0,s.jsxs)(n.h4,{id:"默认值",children:["默认值",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#默认值",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["如果项目中没有定义任何 ",(0,s.jsx)(n.code,{children:"browserslist"})," 相关的配置，也没有定义 ",(0,s.jsx)(n.code,{children:"overrideBrowserslist"}),"，那么 Builder 会设置默认值为："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"['> 0.01%', 'not dead', 'not op_mini all'];\n"})})]})}),"\n",(0,s.jsxs)(n.h3,{id:"示例",children:["示例",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"下面是兼容移动端 H5 场景的示例："}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    overrideBrowserslist: [\n      'iOS >= 9',\n      'Android >= 4.4',\n      'last 2 versions',\n      '> 0.2%',\n      'not dead',\n    ],\n  },\n};\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["可以查看 ",(0,s.jsx)(n.a,{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"noopener noreferrer",children:"browserslist 文档"})," 来了解如何自定义浏览器范围。"]}),"\n",(0,s.jsxs)(n.h4,{id:"根据产物类型设置",children:["根据产物类型设置",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#根据产物类型设置",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["当你同时构建多种类型的产物时，你可以为不同的产物类型设置不同的目标浏览器范围。此时，你需要把 ",(0,s.jsx)(n.code,{children:"overrideBrowserslist"})," 设置为一个对象，对象的 key 为对应的产物类型。"]}),"\n",(0,s.jsxs)(n.p,{children:["比如为 ",(0,s.jsx)(n.code,{children:"web"})," 和 ",(0,s.jsx)(n.code,{children:"node"})," 设置不同的范围："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    overrideBrowserslist: {\n      web: [\n        'iOS >= 9',\n        'Android >= 4.4',\n        'last 2 versions',\n        '> 0.2%',\n        'not dead',\n      ],\n      node: ['node >= 14'],\n    },\n  },\n};\n"})})]})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}}}]);