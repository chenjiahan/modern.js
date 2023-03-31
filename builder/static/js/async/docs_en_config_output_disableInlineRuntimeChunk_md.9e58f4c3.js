(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_config_output_disableInlineRuntimeChunk_md"],{3687:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return r},title:function(){return c},toc:function(){return l},default:function(){return a}});var t=i("12151"),s=i("21447");let r={},c="",l=[{text:"Disable Inlining",depth:3,id:"disable-inlining"},{text:"Merge Into Page Chunk",depth:3,id:"merge-into-page-chunk"}];function o(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",a:"a",h3:"h3",button:"button",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Used to control whether to inline the bundler's runtime code into HTML."}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.p,{className:"modern-directive-title",children:"What is runtimeChunk"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:["Builder will generate a ",(0,t.jsx)(n.code,{children:"builder-runtime.js"})," file in the dist directory, which is the runtime code of webpack or Rspack.","\n",(0,t.jsxs)(n.p,{children:["runtimeChunk is a piece of runtime code, which is provided by webpack or Rspack, that contains the necessary module processing logic, such as module loading, module parsing, etc. See ",(0,t.jsx)(n.a,{href:"https://webpack.js.org/concepts/manifest/#runtime",target:"_blank",rel:"noopener noreferrer",children:"Runtime"})," for details."]}),"\n"]})]}),"\n",(0,t.jsx)(n.p,{children:"In the production environment, Builder will inline the runtimeChunk file into the HTML file by default instead of writing it to the dist directory. This is done to reduce the number of file requests."}),"\n",(0,t.jsxs)(n.h3,{id:"disable-inlining",children:["Disable Inlining",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#disable-inlining",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["If you don't want the runtimeChunk file to be inlined into the HTML file, you can set ",(0,t.jsx)(n.code,{children:"disableInlineRuntimeChunk"})," to ",(0,t.jsx)(n.code,{children:"true"})," and a separate ",(0,t.jsx)(n.code,{children:"builder-runtime.js"})," file will be generated."]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableInlineRuntimeChunk: true,\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(n.h3,{id:"merge-into-page-chunk",children:["Merge Into Page Chunk",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#merge-into-page-chunk",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"If you don't want to generate a separate runtimeChunk file, but want the runtimeChunk code to be bundled into the page chunk, you can set the config like this:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: {\n      optimization: {\n        runtimeChunk: false,\n      },\n    },\n  },\n};\n"})})]})})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}}}]);