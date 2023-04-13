(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_en_api_config-output_mdx14"],{56969:function(e,n,l){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var l in n)Object.defineProperty(e,l,{enumerable:!0,get:n[l]})}(n,{frontmatter:function(){return o},title:function(){return i},toc:function(){return r},default:function(){return a}});var t=l("12151"),s=l("23169"),o={},i="",r=[{text:"Example",depth:3,id:"example"}];function c(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",button:"button",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"'linked' | 'inline' | 'none'"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"'linked'"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Bundler:"})," ",(0,t.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Configure how to handle the legal comment."}),"\n",(0,t.jsx)(n.p,{children:'A "legal comment" is considered to be any statement-level comment in JS or rule-level comment in CSS that contains @license or @preserve or that starts with //! or /*!. These comments are preserved in output files by default since that follows the intent of the original authors of the code.'}),"\n",(0,t.jsx)(n.p,{children:"This behavior can be configured by using one of the following options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"linked"}),": Extract all legal comments to a .LEGAL.txt file and link to them with a comment."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"inline"}),": Preserve all legal comments in original position."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"none"}),": Remove all legal comments."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Remove all legal comments:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    legalComments: 'none',\n  },\n};\n"})})]})})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}}}]);