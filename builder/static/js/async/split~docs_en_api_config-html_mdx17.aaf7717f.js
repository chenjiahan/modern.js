(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_en_api_config-html_mdx17"],{75001:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return l},toc:function(){return i},default:function(){return o}});var a=s("12151"),t=s("23169"),c={},l="",i=[{text:"Example",depth:3,id:"example"}];function r(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",button:"button",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Type:"})," ",(0,a.jsx)(n.code,{children:"string"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Default:"})," ",(0,a.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Set the favicon icon path for all pages, can be set as:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"a URL."}),"\n",(0,a.jsx)(n.li,{children:"an absolute path to the file."}),"\n",(0,a.jsx)(n.li,{children:"a relative path relative to the project root directory."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["After config this option, the favicon will be automatically copied to the dist directory during the compilation, and the corresponding ",(0,a.jsx)(n.code,{children:"link"})," tag will be added to the HTML."]}),"\n",(0,a.jsxs)(n.h3,{id:"example",children:["Example",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Set as a relative path:"}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    favicon: './src/assets/icon.png',\n  },\n};\n"})})]})}),"\n",(0,a.jsx)(n.p,{children:"Set to an absolute path:"}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-js",children:"import path from 'path';\n\nexport default {\n  html: {\n    favicon: path.resolve(__dirname, './src/assets/icon.png'),\n  },\n};\n"})})]})}),"\n",(0,a.jsx)(n.p,{children:"Set to a URL:"}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-js",children:"import path from 'path';\n\nexport default {\n  html: {\n    favicon: 'https://foo.com/favicon.ico',\n  },\n};\n"})})]})}),"\n",(0,a.jsx)(n.p,{children:"After recompiling, the following tags are automatically generated in the HTML:"}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-html",children:'<link rel="icon" href="/favicon.ico" />\n'})})]})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(r,e)})):r(e)}}}]);