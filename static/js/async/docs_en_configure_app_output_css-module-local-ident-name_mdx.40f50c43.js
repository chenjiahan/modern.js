(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_output_css-module-local-ident-name_mdx"],{85701:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var a=s("12151"),t=s("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",div:"div",button:"button",pre:"pre",p:"p",h3:"h3",a:"a"},(0,t.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Type:"})," ",(0,a.jsx)(n.code,{children:"string"})]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"// isProd indicates that the production build\nconst localIdentName = isProd\n  ? '[hash:base64:5]'\n  : '[path][name]__[local]--[hash:base64:5]';\n"})})]})}),"\n",(0,a.jsx)(n.p,{children:"Sets the format of the className generated by CSS Modules after compilation."}),"\n",(0,a.jsxs)(n.h3,{id:"default-value",children:["Default Value",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default-value",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"cssModuleLocalIdentName"})," has different default values in development and production."]}),"\n",(0,a.jsx)(n.p,{children:"In a production, Builder will generate shorter class names to reduce the bundle size."}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"import styles from './index.module.scss';\n\n// In development, the value is `.src-index-module__header--xxxxx`\n// In production, the value is `.xxxxx`\nconsole.log(styles.header);\n"})})]})}),"\n",(0,a.jsxs)(n.h3,{id:"template-string",children:["Template String",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#template-string",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["You can use the following template strings in ",(0,a.jsx)(n.code,{children:"cssModuleLocalIdentName"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"[name]"})," - the basename of the asset."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"[local]"})," - original class."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"[hash]"})," - the hash of the string."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"[folder]"})," - the folder relative path."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"[path]"})," - the relative path."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"[file]"})," - filename and path."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"[ext]"})," - extension with leading dot."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"[hash:<hashDigest>:<hashDigestLength>]"}),": hash with hash settings."]}),"\n"]}),"\n",(0,a.jsxs)(n.div,{className:"modern-directive tip",children:[(0,a.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,a.jsxs)(n.div,{className:"modern-directive-content",children:["When using Rspack as the bundler, currently does not support custom ",(0,a.jsx)(n.code,{children:"<hashDigest>"}),".\n"]})]}),"\n",(0,a.jsxs)(n.h3,{id:"example",children:["Example",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"cssModuleLocalIdentName"})," to other value:"]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    cssModuleLocalIdentName: '[hash:base64:4]',\n  },\n};\n"})})]})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},38830:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return l},title:function(){return c},toc:function(){return r},default:function(){return o}});var a=s("12151"),t=s("23169"),d=s.ir(s("85701")),l={sidebar_label:"cssModuleLocalIdentName"},c="output.cssModuleLocalIdentName",r=[];function i(e){var n=Object.assign({h1:"h1",a:"a",div:"div"},(0,t.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"output.cssmodulelocalidentname",children:["output.cssModuleLocalIdentName",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#output.cssmodulelocalidentname",children:"#"})]}),"\n",(0,a.jsxs)(n.div,{className:"modern-directive tip",children:[(0,a.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,a.jsxs)(n.div,{className:"modern-directive-content",children:["This config is provided by Modern.js Builder, more detail can see ",(0,a.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputcssmodulelocalidentname",target:"_blank",rel:"noopener noreferrer",children:"output.cssModuleLocalIdentName"}),".\n"]})]}),"\n","\n",(0,a.jsx)(d.default,{})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(i,e)})):i(e)}}}]);