(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_advanced_rem_md"],{77044:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return h}});var s,d=r("15169"),t=r("43932"),i=r("9880"),o=r("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",ol:"ol",li:"li",pre:"pre"},(0,o.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"开启-rem-适配",children:["开启 REM 适配",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#开启-rem-适配",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Builder 支持通过 ",(0,i.jsx)(n.a,{href:"/api/config-output#outputconverttorem",children:"output.convertToRem"})," 一键开启 REM 适配能力，能够根据屏幕大小来动态调整字体大小，让网页在不同大小的屏幕上都能够自适应显示。"]}),"\n",(0,i.jsxs)(n.h2,{id:"开启-rem-的适配能力",children:["开启 REM 的适配能力",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#开启-rem-的适配能力",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["开启 ",(0,i.jsx)(n.code,{children:"convertToRem"})," 后，会对页面进行如下两个操作："]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"将 CSS 属性中的 px 转成 rem。"}),"\n",(0,i.jsx)(n.li,{children:"对根元素的字体大小进行动态设置。"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    convertToRem: true,\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"css-属性值转换",children:["CSS 属性值转换",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#css-属性值转换",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"由于默认的 rootFontSize 为 50。开启 rem 转换后，会按照 1rem = 50px 的比例，对 CSS 样式做如下转换："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"/* input */\nh1 {\n  margin: 0 0 16px;\n  font-size: 32px;\n  line-height: 1.2;\n  letter-spacing: 1px;\n}\n\n/* output */\nh1 {\n  margin: 0 0 0.32rem;\n  font-size: 0.64rem;\n  line-height: 1.2;\n  letter-spacing: 0.02rem;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Builder 默认会对所有 CSS 属性进行转换，如果希望仅对 font-size 属性进行转换，可通过设置 pxtorem.propList 实现。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    convertToRem: {\n      pxtorem: {\n        propList: ['font-size'],\n      },\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"根元素字体大小计算",children:["根元素字体大小计算",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#根元素字体大小计算",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"页面根元素的字体大小的计算公式为："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"根元素字体大小 = 当前客户端屏幕宽度  * 根元素字体值 / UI 设计图宽度\n\n(即：pageRootFontSize = clientWidth * rootFontSize / screenWidth)\n"})}),"\n",(0,i.jsx)(n.p,{children:"以屏幕宽度为 390 的手机端浏览器为例，根元素字体值的默认值为 50， UI 设计图宽度为 375。"}),"\n",(0,i.jsxs)(n.p,{children:["此时计算出的页面根元素的字体大小为 52 (",(0,i.jsx)(n.code,{children:"390 * 50 / 375"}),")。\n此时 1 rem 为 52px，CSS 样式中的 32px（0.64 rem），实际页面效果为 33.28 px。"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    convertToRem: {\n      rootFontSize: 50,\n      screenWidth: 375,\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"自定义最大根元素字体值",children:["自定义最大根元素字体值",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义最大根元素字体值",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"在桌面浏览器端，根据计算公式得到的页面根元素字体值往往过大，当计算出的结果超出了默认的最大根元素字体值时，则采用当前设置的最大根元素字体值为当前根元素字体值。"}),"\n",(0,i.jsx)(n.p,{children:"以屏幕宽度为 1920 的桌面浏览器为例，此时计算出的根元素的字体大小为 349，超出了最大根元素字体值 64。则采用 64 为当前的根元素字体值。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    convertToRem: {\n      maxRootFontSize: 64,\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"如何判断-rem-是否生效？",children:["如何判断 REM 是否生效？",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#如何判断-rem-是否生效？",children:"#"})]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["CSS：查看生成的 ",(0,i.jsx)(n.code,{children:".css"})," 文件中对应属性的值是否从 px 转换成 rem。"]}),"\n",(0,i.jsxs)(n.li,{children:["HTML：打开页面控制台查看 ",(0,i.jsx)(n.code,{children:"document.documentElement.style.fontSize"})," 是否存在有效值。"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"如何获取页面实际生效的-rootfontsize-值？",children:["如何获取页面实际生效的 rootFontSize 值？",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#如何获取页面实际生效的-rootfontsize-值？",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["页面实际生效的 rootFontSize 会根据当前页面的情况动态计算。 可通过打印 ",(0,i.jsx)(n.code,{children:"document.documentElement.style.fontSize"})," 查看，也可通过 ",(0,i.jsx)(n.code,{children:"window.ROOT_FONT_SIZE"})," 获取。"]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fzh%2Fguide%2Fadvanced%2Frem.md"]={toc:[{text:"开启 REM 的适配能力",id:"开启-rem-的适配能力",depth:2},{text:"CSS 属性值转换",id:"css-属性值转换",depth:2},{text:"根元素字体大小计算",id:"根元素字体大小计算",depth:2},{text:"自定义最大根元素字体值",id:"自定义最大根元素字体值",depth:2},{text:"如何判断 REM 是否生效？",id:"如何判断-rem-是否生效？",depth:2},{text:"如何获取页面实际生效的 rootFontSize 值？",id:"如何获取页面实际生效的-rootfontsize-值？",depth:2}],title:"开启 REM 适配",frontmatter:{}};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,t._(d._({},e),{children:(0,i.jsx)(c,d._({},e))})):c(e)}}}]);