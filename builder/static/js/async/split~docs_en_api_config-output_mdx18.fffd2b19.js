(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_en_api_config-output_mdx18"],{66025:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},title:function(){return d},toc:function(){return c},default:function(){return r}});var i=s("12151"),t=s("23169"),a={},d="",c=[{text:"Example",depth:3,id:"example"}];function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",p:"p",h3:"h3",a:"a"},(0,t.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"type DataUriLimitConfig = {\n  svg?: number;\n  font?: number;\n  image?: number;\n  media?: number;\n};\n"})})]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Default"})}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-js",children:"const defaultDatUriLimit = {\n  svg: 10000,\n  font: 10000,\n  image: 10000,\n  media: 10000,\n};\n"})})]})}),"\n",(0,i.jsx)(n.p,{children:"Set the size threshold to inline static assets such as images and fonts."}),"\n",(0,i.jsx)(n.p,{children:"By default, static assets will be Base64 encoded and inline into the page if the size is less than 10KB."}),"\n",(0,i.jsxs)(n.p,{children:["You can adjust the threshold by setting the ",(0,i.jsx)(n.code,{children:"dataUriLimit"})," config."]}),"\n",(0,i.jsx)(n.p,{children:"Detail:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"svg"}),": The threshold of the SVG image."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"font"}),": The threshold of the font file."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"image"}),": The threshold of non-SVG images."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"media"}),": The threshold of media assets such as videos."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"example",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Set the threshold of images to 5000 Bytes, and set media assets not to be inlined:"}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    dataUriLimit: {\n      image: 5000,\n      media: 0,\n    },\n  },\n};\n"})})]})})]})}var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}}}]);