(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_html_favicon_mdx"],{75914:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var i=a("9880"),r=a("23169");function s(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Set the favicon icon path for all pages, can be set as:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"a URL."}),"\n",(0,i.jsx)(n.li,{children:"an absolute path to the file."}),"\n",(0,i.jsx)(n.li,{children:"a relative path relative to the project root directory."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["After config this option, the favicon will be automatically copied to the dist directory during the compilation, and the corresponding ",(0,i.jsx)(n.code,{children:"link"})," tag will be added to the HTML."]}),"\n",(0,i.jsxs)(n.h3,{id:"example",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Set as a relative path:"}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    favicon: './src/assets/icon.png',\n  },\n};\n"})})})}),"\n",(0,i.jsx)(n.p,{children:"Set to an absolute path:"}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-js",children:"import path from 'path';\n\nexport default {\n  html: {\n    favicon: path.resolve(__dirname, './src/assets/icon.png'),\n  },\n};\n"})})})}),"\n",(0,i.jsx)(n.p,{children:"Set to a URL:"}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-js",children:"import path from 'path';\n\nexport default {\n  html: {\n    favicon: 'https://foo.com/favicon.ico',\n  },\n};\n"})})})}),"\n",(0,i.jsx)(n.p,{children:"After recompiling, the following tags are automatically generated in the HTML:"}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-html",children:'<link rel="icon" href="/favicon.ico" />\n'})})})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(s,e)})):s(e)}},33489:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var a in n)Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}(n,{frontmatter:function(){return t},title:function(){return c},toc:function(){return l},default:function(){return d}});var i=a("9880"),r=a("23169"),s=a.ir(a("75914")),t={sidebar_label:"favicon"},c="html.favicon",l=[];function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"htmlfavicon",children:["html.favicon",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlfavicon",children:"#"})]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-html.html#htmlfavicon",target:"_blank",rel:"noopener noreferrer",children:"html.favicon"}),".\n"]})})]}),"\n","\n",(0,i.jsx)(s.default,{})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}}}]);