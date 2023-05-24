(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_tools_ts-loader_mdx"],{2953:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var r=s("9880"),d=s("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre",h4:"h4"},(0,d.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Object | Function | undefined"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Bundler:"})," ",(0,r.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ts-loader"})," is not enabled by default in the project. When ",(0,r.jsx)(n.code,{children:"tools.tsLoader"})," is not undefined, builder will use ts-loader instead of babel-loader to compile TypeScript code."]}),"\n",(0,r.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"When this value is an Object, it is merged with the default configuration via Object.assign."}),"\n",(0,r.jsx)(n.p,{children:"The default configuration is as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "target": "es5",\n    "module": "ESNext"\n  },\n  "transpileOnly": true,\n  "allowTsInNodeModules": true\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You can override the default configuration via the ",(0,r.jsx)(n.code,{children:"tools.tsLoader"})," configuration item:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsLoader: {\n      allowTsInNodeModules: false,\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When this value is a Function, the default configuration is passed in as the first parameter, the configuration object can be modified directly, or an object can be returned as the final configuration.The second parameter is the util functions to modify the ",(0,r.jsx)(n.code,{children:"ts-loader"})," configuration. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsLoader: opts => {\n      opts.allowTsInNodeModules = false;\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"util-functions",children:["Util Functions",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#util-functions",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When the value of ",(0,r.jsx)(n.code,{children:"tools.tsLoader"})," is a Function, the utils functions available for the second parameter are as follows:"]}),"\n",(0,r.jsxs)(n.h4,{id:"addincludes",children:["addIncludes",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addincludes",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"(includes: string | RegExp | Array<string | RegExp>) => void"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["By default, only the application code in the src directory will be compiled. Use ",(0,r.jsx)(n.code,{children:"addIncludes"})," to specify ts-loader to compile some files under ",(0,r.jsx)(n.code,{children:"node_modules"}),". For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsLoader: (config, { addIncludes }) => {\n      addIncludes([/node_modules\\/react/]);\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"addexcludes",children:["addExcludes",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addexcludes",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"(excludes: string | RegExp | Array<string | RegExp>) => void"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Contrary to ",(0,r.jsx)(n.code,{children:"addIncludes"}),", specify ",(0,r.jsx)(n.code,{children:"ts-loader"})," to exclude certain files when compiling."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, without compiling files in the ",(0,r.jsx)(n.code,{children:"src/example"})," directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsLoader: (config, { addExcludes }) => {\n      addExcludes([/src\\/example\\//]);\n    },\n  },\n};\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}},71842:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return o},title:function(){return t},toc:function(){return l},default:function(){return a}});var r=s("9880"),d=s("23169"),i=s.ir(s("2953")),o={sidebar_label:"tsLoader"},t="tools.tsLoader",l=[];function c(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,d.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"toolstsloader",children:["tools.tsLoader",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolstsloader",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolstsloader",target:"_blank",rel:"noopener noreferrer",children:"tools.tsLoader"}),".\n"]})})]}),"\n","\n",(0,r.jsx)(i.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);