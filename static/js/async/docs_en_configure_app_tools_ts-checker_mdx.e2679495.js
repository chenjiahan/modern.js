(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_configure_app_tools_ts-checker_mdx"],{259:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var t=s("12151"),r=s("21447");function c(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",div:"div",button:"button",pre:"pre",p:"p",a:"a",h3:"h3"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-js",children:"const defaultOptions = {\n  typescript: {\n    // avoid OOM issue\n    memoryLimit: 8192,\n    // use tsconfig of user project\n    configFile: tsconfigPath,\n    // use typescript of user project\n    typescriptPath: require.resolve('typescript'),\n  },\n  issue: {\n    exclude: [\n      { file: '**/*.(spec|test).ts' },\n      { file: '**/node_modules/**/*' },\n    ],\n  },\n  logger: {\n    log() {\n      // do nothing\n      // we only want to display error messages\n    },\n    error(message: string) {\n      console.error(message.replace(/ERROR/g, 'Type Error'));\n    },\n  },\n},\n"})})]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Bundler:"})," ",(0,t.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["By default, the ",(0,t.jsx)(n.a,{href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"fork-ts-checker-webpack-plugin"})," is enabled for type checking. You can use ",(0,t.jsx)(n.code,{children:"output.disableTsChecker"})," config to disable it."]}),"\n",(0,t.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"When this value is an Object, it is merged with the default config via Object.assign."}),"\n",(0,t.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"When the value is a Function, the default config is passed in as the first parameter. You can modify the config object directly, or return an object as the final config."})]})}var i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}},37397:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return i},title:function(){return o},toc:function(){return l},default:function(){return d}});var t=s("12151"),r=s("21447"),c=s.ir(s("259"));let i={sidebar_label:"tsChecker"},o="tools.tsChecker",l=[];function a(e){let n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"tools.tschecker",children:["tools.tsChecker",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tools.tschecker",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.p,{className:"modern-directive-title",children:"TIP"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:["This config is provided by Modern.js Builder, more detail can see ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolstschecker",target:"_blank",rel:"noopener noreferrer",children:"tools.tsChecker"}),".\n"]})]}),"\n","\n",(0,t.jsx)(c.default,{})]})}var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}}}]);