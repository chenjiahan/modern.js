(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_output_convert-to-rem_mdx"],{65008:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var d,t=r("15169"),s=r("43932"),c=r("9880"),o=r("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"boolean | object"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["通过设置 ",(0,c.jsx)(n.code,{children:"output.convertToRem"}),"，Builder 可进行如下处理："]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"将 CSS 中的 px 转成 rem"}),"\n",(0,c.jsx)(n.li,{children:"在 HTML 模版中插入运行时代码，对根元素 fontSize 进行设置"}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"boolean-类型",children:["Boolean 类型",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-类型",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["当设置 ",(0,c.jsx)(n.code,{children:"output.convertToRem"})," 为 ",(0,c.jsx)(n.code,{children:"true"}),"，将开启 rem 处理能力。"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    convertToRem: true,\n  },\n};\n"})}),"\n",(0,c.jsx)(n.p,{children:"此时，rem 配置默认如下："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"{\n  enableRuntime: true,\n  rootFontSize: 50,\n  screenWidth: 375,\n  rootFontSize: 50,\n  maxRootFontSize: 64,\n  widthQueryKey: '',\n  excludeEntries: [],\n  supportLandscape: false,\n  useRootFontSizeBeyondMax: false,\n  pxtorem: {\n    rootValue: 50,\n    unitPrecision: 5,\n    propList: ['*'],\n  }\n}\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"object-类型",children:["Object 类型",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-类型",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["当 ",(0,c.jsx)(n.code,{children:"output.convertToRem"})," 的值为 ",(0,c.jsx)(n.code,{children:"object"})," 类型时，Builder 会根据当前配置进行 rem 处理。"]}),"\n",(0,c.jsx)(n.p,{children:"选项："}),"\n",(0,c.jsxs)(n.table,{children:["\n",(0,c.jsxs)(n.thead,{children:["\n",(0,c.jsxs)(n.tr,{children:["\n",(0,c.jsx)(n.th,{children:"名称"}),"\n",(0,c.jsx)(n.th,{children:"类型"}),"\n",(0,c.jsx)(n.th,{children:"默认值"}),"\n",(0,c.jsx)(n.th,{children:"描述"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.tbody,{children:["\n",(0,c.jsxs)(n.tr,{children:["\n",(0,c.jsx)(n.td,{children:"enableRuntime"}),"\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"boolean"})}),"\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"true"})}),"\n",(0,c.jsx)(n.td,{children:"是否自动生成 runtime 代码来动态计算根元素字体大小"}),"\n"]}),"\n",(0,c.jsxs)(n.tr,{children:["\n",(0,c.jsx)(n.td,{children:"inlineRuntime"}),"\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"boolean"})}),"\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"true"})}),"\n",(0,c.jsxs)(n.td,{children:["是否将 runtime 代码内联到 HTML 文件中。如果设置为 ",(0,c.jsx)(n.code,{children:"false"}),"，运行时代码会被抽取为一个独立的 ",(0,c.jsx)(n.code,{children:"convert-rem.[version].js"})," 文件，并输出到产物目录下"]}),"\n"]}),"\n",(0,c.jsxs)(n.tr,{children:["\n",(0,c.jsx)(n.td,{children:"rootFontSize"}),"\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"number"})}),"\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"50"})}),"\n",(0,c.jsx)(n.td,{children:"根元素字体值"}),"\n"]}),"\n",(0,c.jsxs)(n.tr,{children:["\n",(0,c.jsx)(n.td,{children:"maxRootFontSize"}),"\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"number"})}),"\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"64"})}),"\n",(0,c.jsx)(n.td,{children:"最大根元素字体值"}),"\n"]}),"\n",(0,c.jsxs)(n.tr,{children:["\n",(0,c.jsx)(n.td,{children:"widthQueryKey"}),"\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"string"})}),"\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"'' "})}),"\n",(0,c.jsx)(n.td,{children:"根据 widthQueryKey 的值去 url query 中取 client width"}),"\n"]}),"\n",(0,c.jsxs)(n.tr,{children:["\n",(0,c.jsx)(n.td,{children:"screenWidth"}),"\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"number"})}),"\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"375"})}),"\n",(0,c.jsx)(n.td,{children:"UI 设计图宽度"}),"\n"]}),"\n",(0,c.jsxs)(n.tr,{children:["\n",(0,c.jsx)(n.td,{children:"excludeEntries"}),"\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"string[]"})}),"\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"[]"})}),"\n",(0,c.jsxs)(n.td,{children:["设置不注入 runtime 代码的页面入口，通常需要配合 ",(0,c.jsx)(n.code,{children:"pxtorem.exclude"})," 使用"]}),"\n"]}),"\n",(0,c.jsxs)(n.tr,{children:["\n",(0,c.jsx)(n.td,{children:"supportLandscape"}),"\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"boolean"})}),"\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"false"})}),"\n",(0,c.jsx)(n.td,{children:"横屏时使用 height 计算 rem"}),"\n"]}),"\n",(0,c.jsxs)(n.tr,{children:["\n",(0,c.jsx)(n.td,{children:"useRootFontSizeBeyondMax"}),"\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"boolean"})}),"\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"false"})}),"\n",(0,c.jsx)(n.td,{children:"超过 maxRootFontSize 时，是否使用 rootFontSize"}),"\n"]}),"\n",(0,c.jsxs)(n.tr,{children:["\n",(0,c.jsx)(n.td,{children:"pxtorem"}),"\n",(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"object"})}),"\n",(0,c.jsxs)(n.td,{children:["rootValue。默认与 rootFontSize 相同 ","unitPrecision: 5。精确位数 ","propList: ['*']。支持转换的 CSS 属性"]}),"\n",(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.a,{href:"https://github.com/cuth/postcss-pxtorem#options",target:"_blank",rel:"noopener noreferrer",children:"postcss-pxtorem"})," 插件属性"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"示例",children:["示例",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    convertToRem: {\n      rootFontSize: 30,\n      excludeEntries: ['404', 'page2'],\n      pxtorem: {\n        propList: ['font-size'],\n      },\n    },\n  },\n};\n"})})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Foutput%2FconvertToRem.md"]={toc:[{text:"Boolean 类型",id:"boolean-类型",depth:3},{text:"Object 类型",id:"object-类型",depth:3},{text:"示例",id:"示例",depth:3}],title:"",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,s._)((0,t._)({},e),{children:(0,c.jsx)(i,(0,t._)({},e))})):i(e)}},92293:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return h}});var d,t=r("15169"),s=r("43932"),c=r("9880"),o=r("23169"),i=r("65008");function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,o.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"outputconverttorem",children:["output.convertToRem",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputconverttorem",children:"#"})]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,c.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputconverttorem",target:"_blank",rel:"noopener noreferrer",children:"output.convertToRem"}),"。\n"]})})]}),"\n","\n",(0,c.jsx)(i.default,{})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fmain-doc%2Fdocs%2Fzh%2Fconfigure%2Fapp%2Foutput%2Fconvert-to-rem.mdx"]={toc:[],title:"output.convertToRem",frontmatter:{sidebar_label:"convertToRem"}};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,s._)((0,t._)({},e),{children:(0,c.jsx)(l,(0,t._)({},e))})):l(e)}}}]);