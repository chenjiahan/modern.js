(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guides_topic-detail_generator_codesmith_api_json_mdx"],{50530:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return o},toc:function(){return i},title:function(){return l},default:function(){return c}});var r=n("12151");let o={sidebar_position:2},i=[{id:"use",text:"Use",depth:2},{id:"api",text:"API",depth:2},{id:"get",text:"get",depth:3},{id:"extend",text:"extend",depth:3},{id:"update",text:"update",depth:3}],l="@modern-js/codesmith-api-json";function t(e){let s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",h3:"h3"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"modern-jscodesmith-api-json",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-jscodesmith-api-json",children:"#"}),"@modern-js/codesmith-api-json"]}),"\n",(0,r.jsx)(s.p,{children:"The JSON API encapsulation in the microgenerator provides common JSON file operation methods."}),"\n",(0,r.jsxs)(s.h2,{id:"use",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#use",children:"#"}),"Use"]}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { JsonAPI } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/codesmith-api-json'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (context"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GeneratorContext"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" generator"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GeneratorCore"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"jsonAPI"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"JsonAPI"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(generator);"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"jsonAPI"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".update"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"context"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"materials"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"default"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".get"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'package.json'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    query"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {}"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    update"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      $set"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'dependencies.@modern-js/plugin-bff'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`^2.0.0`"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  });"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Create JsonAPI instance, the parameter is the generator of the microgenerator function parameter, please see the composition of the microgenerator project for details."}),"\n",(0,r.jsx)(s.li,{children:"Just call the API on its example."}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"api",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"}),"API"]}),"\n",(0,r.jsxs)(s.h3,{id:"get",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#get",children:"#"}),"get"]}),"\n",(0,r.jsx)(s.p,{children:"Get the JSON file content."}),"\n",(0,r.jsx)(s.p,{children:"Parameter:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["resource: ",(0,r.jsx)(s.code,{children:"FsResource"}),". A file resource，get by ",(0,r.jsx)(s.code,{children:"context.materials.default.get(<filename>)"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"extend",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#extend",children:"#"}),"extend"]}),"\n",(0,r.jsx)(s.p,{children:"Merge objects into a JSON file."}),"\n",(0,r.jsx)(s.p,{children:"Parameter:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["resource: ",(0,r.jsx)(s.code,{children:"FsResource"}),". A file resource，get by ",(0,r.jsx)(s.code,{children:"context.materials.default.get(<filename>)"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["obj: ",(0,r.jsx)(s.code,{children:"Record<string, any>"}),". Object to be merged."]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"update",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#update",children:"#"}),"update"]}),"\n",(0,r.jsx)(s.p,{children:"pdate object fields to JSON file."}),"\n",(0,r.jsx)(s.p,{children:"Parameter:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["resource: ",(0,r.jsx)(s.code,{children:"FsResource"}),". A file resource，get by ",(0,r.jsx)(s.code,{children:"context.materials.default.get(<filename>)"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["operation: ",(0,r.jsx)(s.code,{children:"{ query: Record<string, any>; update: Record<string, any> }"}),". Update operation, use gesture to view ",(0,r.jsx)(s.a,{href:"https://www.npmjs.com/package/declaration-update",target:"_blank",rel:"nofollow",children:"declaration-update"})," in detail."]}),"\n"]})]})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=e.components||{};return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}}}]);