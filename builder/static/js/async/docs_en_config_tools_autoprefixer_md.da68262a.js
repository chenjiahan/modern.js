(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_config_tools_autoprefixer_md"],{1141:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return o},title:function(){return c},toc:function(){return i},default:function(){return l}});var t=s("12151"),r=s("21447");let o={},c="",i=[{text:"Object Type",depth:3,id:"object-type"},{text:"Function Type",depth:3,id:"function-type"}];function a(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",div:"div",button:"button",pre:"pre",p:"p",a:"a",h3:"h3"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-js",children:"{\n  flexbox: 'no-2009',\n  // Depends on the browserslist config in the project\n  // and the `output.overrideBrowserslist` (higher priority) config\n  overrideBrowserslist: browserslist,\n}\n"})})]})}),"\n",(0,t.jsxs)(n.p,{children:["You can modify the config of ",(0,t.jsx)(n.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer",children:"autoprefixer"})," by ",(0,t.jsx)(n.code,{children:"tools.autoprefixer"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"tools.autoprefixer"})," is configured as ",(0,t.jsx)(n.code,{children:"Object"})," type, it is merged with the default config through Object.assign. For example:"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    autoprefixer: {\n      flexbox: 'no-2009',\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"tools.autoprefixer"})," is a Function, the default config is passed as the first parameter and can be directly modified or returned as the final result. For example:"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    autoprefixer(config) {\n      // modify flexbox config\n      config.flexbox = 'no-2009';\n    },\n  },\n};\n"})})]})})]})}var l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}}}]);