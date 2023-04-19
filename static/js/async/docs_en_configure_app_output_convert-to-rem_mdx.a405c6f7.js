(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_output_convert-to-rem_mdx"],{30949:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d}});var r=t("12151"),s=t("23169");function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",div:"div",button:"button",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean | object"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["By setting ",(0,r.jsx)(n.code,{children:"output.convertToRem"}),", the Builder can do the following things:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Convert px to rem in CSS."}),"\n",(0,r.jsx)(n.li,{children:"Insert runtime code into the HTML template to set the fontSize of the root element."}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"boolean-type",children:["Boolean Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-type",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"output.convertToRem"})," is set to ",(0,r.jsx)(n.code,{children:"true"}),", Rem processing capability will be turned on."]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    convertToRem: true,\n  },\n};\n"})})]})}),"\n",(0,r.jsx)(n.p,{children:"At this point, the rem configuration defaults as follows:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"{\n  enableRuntime: true,\n  rootFontSize: 50,\n  screenWidth: 375,\n  rootFontSize: 50,\n  maxRootFontSize: 64,\n  widthQueryKey: '',\n  excludeEntries: [],\n  supportLandscape: false,\n  useRootFontSizeBeyondMax: false,\n  pxtorem: {\n    rootValue: 50,\n    unitPrecision: 5,\n    propList: ['*'],\n  }\n}\n"})})]})}),"\n",(0,r.jsxs)(n.h4,{id:"object-type",children:["Object Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When the value of ",(0,r.jsx)(n.code,{children:"output.convertToRem"})," is ",(0,r.jsx)(n.code,{children:"object"})," type, The Builder will perform Rem processing based on the current configuration."]}),"\n",(0,r.jsx)(n.p,{children:"options:"}),"\n",(0,r.jsxs)(n.table,{children:["\n",(0,r.jsxs)(n.thead,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.th,{children:"Name"}),"\n",(0,r.jsx)(n.th,{children:"Type"}),"\n",(0,r.jsx)(n.th,{children:"Default"}),"\n",(0,r.jsx)(n.th,{children:"Description"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.tbody,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:"enableRuntime"}),"\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),"\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),"\n",(0,r.jsx)(n.td,{children:"Whether to inject runtime code into html templates, to support dynamic calculation of the font size of the root element"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:"rootFontSize"}),"\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),"\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"50"})}),"\n",(0,r.jsx)(n.td,{children:"The root element font size"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:"maxRootFontSize"}),"\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),"\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"64"})}),"\n",(0,r.jsx)(n.td,{children:"The root element max font size"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:"widthQueryKey"}),"\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),"\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"'' "})}),"\n",(0,r.jsx)(n.td,{children:"Get clientWidth from the url query based on widthQueryKey"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:"screenWidth"}),"\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),"\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"375"})}),"\n",(0,r.jsxs)(n.td,{children:["The screen width for UI design drawings (Usually, ",(0,r.jsx)(n.code,{children:"fontSize = (clientWidth * rootFontSize) / screenWidth"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:"excludeEntries"}),"\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string[]"})}),"\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"[]"})}),"\n",(0,r.jsx)(n.td,{children:"The entries to ignore"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:"supportLandscape"}),"\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),"\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})}),"\n",(0,r.jsx)(n.td,{children:"Use height to calculate rem in landscape"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:"useRootFontSizeBeyondMax"}),"\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),"\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})}),"\n",(0,r.jsx)(n.td,{children:"Whether to use rootFontSize when large than maxRootFontSize"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:"pxtorem"}),"\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"object"})}),"\n",(0,r.jsxs)(n.td,{children:["rootValue (Default is the same as rootFontSize) ","unitPrecision: 5 ","propList: ['*']"]}),"\n",(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"https://github.com/cuth/postcss-pxtorem#options",target:"_blank",rel:"noopener noreferrer",children:"postcss-pxtorem"})," options"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    convertToRem: {\n      rootFontSize: 30,\n      excludeEntries: ['404', 'page2'],\n      pxtorem: {\n        propList: ['font-size'],\n      },\n    },\n  },\n};\n"})})]})})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},17252:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return d},title:function(){return i},toc:function(){return c},default:function(){return h}});var r=t("12151"),s=t("23169"),o=t.ir(t("30949")),d={sidebar_label:"convertToRem"},i="output.convertToRem",c=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"output-converttorem",children:["output.convertToRem",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#output-converttorem",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputconverttorem",target:"_blank",rel:"noopener noreferrer",children:"output.convertToRem"}),".\n"]})})]}),"\n","\n",(0,r.jsx)(o.default,{})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);