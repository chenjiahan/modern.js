(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["split~docs_en_api_config-tools_mdx11"],{51232:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return d},title:function(){return a},toc:function(){return l},default:function(){return o}});var c=s("12151"),t=s("21447"),d={},a="",l=[{text:"Object Type",depth:3,id:"object-type"},{text:"Function Type",depth:3,id:"function-type"},{text:"Util Function",depth:3,id:"util-function"},{text:"addExcludes",depth:4,id:"addexcludes"}];function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",div:"div",button:"button",pre:"pre",p:"p",a:"a",h3:"h3",h4:"h4"},(0,t.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Type:"})," ",(0,c.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"const defaultOptions = {\n  lessOptions: {\n    javascriptEnabled: true,\n  },\n  // CSS Source Map enabled by default in development environment\n  sourceMap: isDev,\n};\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["You can modify the config of ",(0,c.jsx)(n.a,{href:"https://github.com/webpack-contrib/less-loader",target:"_blank",rel:"noopener noreferrer",children:"less-loader"})," via ",(0,c.jsx)(n.code,{children:"tools.less"}),"."]}),"\n",(0,c.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["When ",(0,c.jsx)(n.code,{children:"tools.less"})," is configured as ",(0,c.jsx)(n.code,{children:"Object"})," type, it is merged with the default config through Object.assign in a shallow way. It should be noted that ",(0,c.jsx)(n.code,{children:"lessOptions"})," is merged through deepMerge in a deep way. For example:"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    less: {\n      lessOptions: {\n        javascriptEnabled: false,\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["When ",(0,c.jsx)(n.code,{children:"tools.less"})," is a Function, the default config is passed as the first parameter, which can be directly modified or returned as the final result. The second parameter provides some utility functions that can be called directly. For example:"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    less(config) {\n      // Modify the config of lessOptions\n      config.lessOptions = {\n        javascriptEnabled: false,\n      };\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.h3,{id:"util-function",children:["Util Function",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#util-function",children:"#"})]}),"\n",(0,c.jsxs)(n.h4,{id:"addexcludes",children:["addExcludes",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addexcludes",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Type:"})," ",(0,c.jsx)(n.code,{children:"(excludes: RegExp | RegExp[]) => void"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Used to specify which files ",(0,c.jsx)(n.code,{children:"less-loader"})," does not compile, You can pass in one or more regular expressions to match the path of less files, for example:"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    less(config, { addExcludes }) {\n      addExcludes(/node_modules/);\n    },\n  },\n};\n"})})]})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(i,e)})):i(e)}}}]);