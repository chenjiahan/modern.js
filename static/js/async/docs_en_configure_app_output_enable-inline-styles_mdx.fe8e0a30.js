(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_output_enable-inline-styles_mdx"],{77843:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return c}});var i,t=s("15169"),l=s("43932"),r=s("9880"),a=s("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",div:"div",a:"a",h3:"h3"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type EnableInlineStyles =\n  | boolean\n  | RegExp\n  | ((params: { size: number; name: string }) => boolean);\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Whether to inline output style files (.css files) into HTML with ",(0,r.jsx)(n.code,{children:"<style>"})," tags in production mode."]}),"\n",(0,r.jsx)(n.p,{children:"Note that, with this option on, the style files will no longer be written in dist directory, they will only exist inside the HTML file instead."}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["When using convention-based routing, you need to set ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/en/configure/app/output/splitRouteChunks.html",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.code,{children:"output.splitRouteChunks"})})," to false if this option is turned on.\n"]})})]}),"\n",(0,r.jsxs)(n.h3,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"By default, we have following output files:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"dist/html/main/index.html\ndist/static/css/style.css\ndist/static/js/main.js\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After turn on the ",(0,r.jsx)(n.code,{children:"output.enableInlineStyles"})," option:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    enableInlineStyles: true,\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"The output files will become:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"dist/html/main/index.html\ndist/static/js/main.js\n"})}),"\n",(0,r.jsxs)(n.p,{children:["And ",(0,r.jsx)(n.code,{children:"dist/static/css/style.css"})," will be inlined in ",(0,r.jsx)(n.code,{children:"index.html"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<html>\n  <head>\n    <style>\n      /* content of dist/static/css/style.css */\n    </style>\n  </head>\n  <body></body>\n</html>\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"using-regexp",children:["Using RegExp",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-regexp",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["If you need to inline part of the CSS files, you can set ",(0,r.jsx)(n.code,{children:"enableInlineStyles"})," to a regular expression that matches the URL of the CSS file that needs to be inlined."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, to inline ",(0,r.jsx)(n.code,{children:"main.css"})," into HTML, you can add the following configuration:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    enableInlineStyles: /\\/main\\.\\w+\\.css$/,\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["The production filename includes a hash value by default, such as ",(0,r.jsx)(n.code,{children:"static/css/main.18a568e5.css"}),". Therefore, in regular expressions, ",(0,r.jsx)(n.code,{children:"\\w+"})," is used to match the hash.\n"]})})]}),"\n",(0,r.jsxs)(n.h3,{id:"using-function",children:["Using Function",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-function",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["You can also set ",(0,r.jsx)(n.code,{children:"output.enableInlineStyles"})," to a function that accepts the following parameters:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"name"}),": The filename, such as ",(0,r.jsx)(n.code,{children:"static/css/main.18a568e5.css"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"size"}),": The file size in bytes."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For example, if we want to inline assets that are smaller than 10KB, we can add the following configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    enableInlineStyles({ size }) {\n      return size < 10 * 1000;\n    },\n  },\n};\n"})})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Foutput%2FenableInlineStyles.md"]={toc:[{text:"Example",id:"example",depth:3},{text:"Using RegExp",id:"using-regexp",depth:3},{text:"Using Function",id:"using-function",depth:3}],title:"",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,(0,l._)((0,t._)({},e),{children:(0,r.jsx)(d,(0,t._)({},e))})):d(e)}},45050:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return o}});var i,t=s("15169"),l=s("43932"),r=s("9880"),a=s("23169"),d=s("77843");function c(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"outputenableinlinestyles",children:["output.enableInlineStyles",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputenableinlinestyles",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputenableinlinestyles",target:"_blank",rel:"noopener noreferrer",children:"output.enableInlineStyles"}),".\n"]})})]}),"\n","\n",(0,r.jsx)(d.default,{})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Foutput%2Fenable-inline-styles.mdx"]={toc:[],title:"output.enableInlineStyles",frontmatter:{sidebar_label:"enableInlineStyles"}};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,(0,l._)((0,t._)({},e),{children:(0,r.jsx)(c,(0,t._)({},e))})):c(e)}}}]);