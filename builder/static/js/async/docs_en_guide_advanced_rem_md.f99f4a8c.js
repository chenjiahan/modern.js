(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_guide_advanced_rem_md"],{28318:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{frontmatter:function(){return s},title:function(){return a},toc:function(){return r},default:function(){return d}});var o=n("12151"),i=n("23169"),s={},a="REM adaptation",r=[{text:"Enabling REM adaptability",depth:2,id:"enabling-rem-adaptability"},{text:"CSS conversion properties",depth:2,id:"css-conversion-properties"},{text:"Setting the page rootFontSize",depth:2,id:"setting-the-page-rootfontsize"},{text:"Customize maxRootFontSize",depth:2,id:"customize-maxrootfontsize"},{text:"How to determine if REM is in effect？",depth:2,id:"how-to-determine-if-rem-is-in-effect？"},{text:"How to get the rootFontSize value that is actually in effect on the page?",depth:2,id:"how-to-get-the-rootfontsize-value-that-is-actually-in-effect-on-the-page?"}];function c(e){var t=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",div:"div",button:"button",pre:"pre",ol:"ol"},(0,i.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.h1,{id:"rem-adaptation",children:["REM adaptation",(0,o.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#rem-adaptation",children:"#"})]}),"\n",(0,o.jsxs)(t.p,{children:["Builder supports REM adaptation via ",(0,o.jsx)(t.a,{href:"/en/api/config-output",children:"output.convertToRem"}),", which can dynamically adjusts the font size according to the screen size, so that the page will be displayed correctly on different screen sizes."]}),"\n",(0,o.jsxs)(t.h2,{id:"enabling-rem-adaptability",children:["Enabling REM adaptability",(0,o.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#enabling-rem-adaptability",children:"#"})]}),"\n",(0,o.jsxs)(t.p,{children:["By setting ",(0,o.jsx)(t.code,{children:"output.convertToRem"}),", the Builder can do the following things:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Convert px to rem in CSS."}),"\n",(0,o.jsx)(t.li,{children:"Dynamic setting the fontSize of the root element."}),"\n"]}),"\n",(0,o.jsx)(t.div,{className:"language-",children:(0,o.jsxs)(t.div,{className:"modern-code-content",children:[(0,o.jsx)(t.button,{className:"copy"}),(0,o.jsx)(t.pre,{className:"code",children:(0,o.jsx)(t.code,{className:"language-ts",children:"export default {\n  output: {\n    convertToRem: true,\n  },\n};\n"})})]})}),"\n",(0,o.jsxs)(t.h2,{id:"css-conversion-properties",children:["CSS conversion properties",(0,o.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#css-conversion-properties",children:"#"})]}),"\n",(0,o.jsxs)(t.p,{children:["By default, rootFontSize is 50. So the CSS styles value are converted according to the ratio of ",(0,o.jsx)(t.code,{children:"1rem : 50px"}),"."]}),"\n",(0,o.jsx)(t.div,{className:"language-",children:(0,o.jsxs)(t.div,{className:"modern-code-content",children:[(0,o.jsx)(t.button,{className:"copy"}),(0,o.jsx)(t.pre,{className:"code",children:(0,o.jsx)(t.code,{className:"language-css",children:"/* input */\nh1 {\n  margin: 0 0 16px;\n  font-size: 32px;\n  line-height: 1.2;\n  letter-spacing: 1px;\n}\n\n/* output */\nh1 {\n  margin: 0 0 0.32rem;\n  font-size: 0.64rem;\n  line-height: 1.2;\n  letter-spacing: 0.02rem;\n}\n"})})]})}),"\n",(0,o.jsxs)(t.p,{children:["By default, builder converts all CSS properties from px to rem. If you want to convert only the ",(0,o.jsx)(t.code,{children:"font-size"})," property, you can setting pxtorem.propList is ",(0,o.jsx)(t.code,{children:"['font-size']"}),"."]}),"\n",(0,o.jsx)(t.div,{className:"language-",children:(0,o.jsxs)(t.div,{className:"modern-code-content",children:[(0,o.jsx)(t.button,{className:"copy"}),(0,o.jsx)(t.pre,{className:"code",children:(0,o.jsx)(t.code,{className:"language-ts",children:"export default {\n  output: {\n    convertToRem: {\n      pxtorem: {\n        propList: ['font-size'],\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,o.jsxs)(t.h2,{id:"setting-the-page-rootfontsize",children:["Setting the page rootFontSize",(0,o.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#setting-the-page-rootfontsize",children:"#"})]}),"\n",(0,o.jsx)(t.p,{children:"The formula for calculating the font size of the page root element is:"}),"\n",(0,o.jsx)(t.div,{className:"language-",children:(0,o.jsxs)(t.div,{className:"modern-code-content",children:[(0,o.jsx)(t.button,{className:"copy"}),(0,o.jsx)(t.pre,{className:"code",children:(0,o.jsx)(t.code,{children:"pageRootFontSize = clientWidth * rootFontSize / screenWidth\n"})})]})}),"\n",(0,o.jsx)(t.p,{children:"In a mobile browser with a screen width of 390, the default value for rootFontSize is 50 and the screenWidth of the UI design is 375."}),"\n",(0,o.jsxs)(t.p,{children:["The calculated font size for the root element of the page is 52 (",(0,o.jsx)(t.code,{children:"390 * 50 / 375"}),")."]}),"\n",(0,o.jsx)(t.p,{children:"At this point, 1 rem is 52px, 32px (0.64 rem) in the CSS style, the actual size in page is 33.28 px."}),"\n",(0,o.jsx)(t.div,{className:"language-",children:(0,o.jsxs)(t.div,{className:"modern-code-content",children:[(0,o.jsx)(t.button,{className:"copy"}),(0,o.jsx)(t.pre,{className:"code",children:(0,o.jsx)(t.code,{className:"language-ts",children:"export default {\n  output: {\n    convertToRem: {\n      rootFontSize: 50,\n      screenWidth: 375,\n    },\n  },\n};\n"})})]})}),"\n",(0,o.jsxs)(t.h2,{id:"customize-maxrootfontsize",children:["Customize maxRootFontSize",(0,o.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#customize-maxrootfontsize",children:"#"})]}),"\n",(0,o.jsx)(t.p,{children:"In the desktop browser, the page rootFontSize obtained from the calculation formula is often too large. When the calculated result large than the maxRootFontSize, the maxRootFontSize will used as the page rootFontSize."}),"\n",(0,o.jsx)(t.p,{children:"In the desktop browser with a screen width of 1920, the calculated rootFontSize is 349, which exceeds the default maxRootFontSize of 64. 64 is used as the current root element font value."}),"\n",(0,o.jsx)(t.div,{className:"language-",children:(0,o.jsxs)(t.div,{className:"modern-code-content",children:[(0,o.jsx)(t.button,{className:"copy"}),(0,o.jsx)(t.pre,{className:"code",children:(0,o.jsx)(t.code,{className:"language-ts",children:"export default {\n  output: {\n    convertToRem: {\n      maxRootFontSize: 64,\n    },\n  },\n};\n"})})]})}),"\n",(0,o.jsxs)(t.h2,{id:"how-to-determine-if-rem-is-in-effect？",children:["How to determine if REM is in effect？",(0,o.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-determine-if-rem-is-in-effect？",children:"#"})]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["CSS: Check the generated ",(0,o.jsx)(t.code,{children:".css"})," file to see if the value of the corresponding property is converted from px to rem."]}),"\n",(0,o.jsxs)(t.li,{children:["HTML: Open the Page Console to see if a valid value exists for ",(0,o.jsx)(t.code,{children:"document.documentElement.style.fontSize"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.h2,{id:"how-to-get-the-rootfontsize-value-that-is-actually-in-effect-on-the-page?",children:["How to get the rootFontSize value that is actually in effect on the page?",(0,o.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-get-the-rootfontsize-value-that-is-actually-in-effect-on-the-page?",children:"#"})]}),"\n",(0,o.jsxs)(t.p,{children:["The actual rootFontSize in effect for the page is calculated dynamically based on the current page. It can be seen by printing ",(0,o.jsx)(t.code,{children:"document.documentElement.style.fontSize"})," or obtained by ",(0,o.jsx)(t.code,{children:"window.ROOT_FONT_SIZE"}),"."]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(c,e)})):c(e)}}}]);