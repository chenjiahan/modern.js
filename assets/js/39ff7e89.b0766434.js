"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[1855],{54852:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(49231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),m=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(n),c=r,f=u["".concat(d,".").concat(c)]||u[c]||p[c]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(86215),r=(n(49231),n(54852));const o={sidebar_position:1,title:"Model \u4ecb\u7ecd"},i=void 0,l={unversionedId:"guides/features/runtime/model/model-introduction",id:"guides/features/runtime/model/model-introduction",title:"Model \u4ecb\u7ecd",description:"Modern.js \u4e2d\u5f15\u5165 Model \u7684\u6982\u5ff5\u4f5c\u4e3a\u5e94\u7528\u72b6\u6001\u7ba1\u7406\u6a21\u578b\u3002Model \u7528\u6765\u5c01\u88c5\u4e1a\u52a1\u6570\u636e\u548c\u6570\u636e\u5904\u7406\u65b9\u6cd5\uff0c\u5728\u4ee3\u7801\u7ec4\u7ec7\u4e0a\u4e0e View\uff08\u89c6\u56fe\uff09\u5206\u79bb\u3002",source:"@site/docs/guides/features/runtime/model/model-introduction.md",sourceDirName:"guides/features/runtime/model",slug:"/guides/features/runtime/model/model-introduction",permalink:"/docs/guides/features/runtime/model/model-introduction",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Model \u4ecb\u7ecd"},sidebar:"guidesSidebar",previous:{title:"\u5b9a\u4e49 head \u4fe1\u606f",permalink:"/docs/guides/features/runtime/head"},next:{title:"\u4f7f\u7528 Model",permalink:"/docs/guides/features/runtime/model/use-model"}},d={},m=[{value:"\u4ee5 Mutable \u65b9\u5f0f\u66f4\u65b0 State",id:"\u4ee5-mutable-\u65b9\u5f0f\u66f4\u65b0-state",level:2}],s={toc:m};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Modern.js \u4e2d\u5f15\u5165 Model \u7684\u6982\u5ff5\u4f5c\u4e3a\u5e94\u7528\u72b6\u6001\u7ba1\u7406\u6a21\u578b\u3002Model \u7528\u6765\u5c01\u88c5\u4e1a\u52a1\u6570\u636e\u548c\u6570\u636e\u5904\u7406\u65b9\u6cd5\uff0c\u5728\u4ee3\u7801\u7ec4\u7ec7\u4e0a\u4e0e View\uff08\u89c6\u56fe\uff09\u5206\u79bb\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Modern.js \u7684 Model \u57fa\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://redux.js.org/"},"Redux")," \u5b9e\u73b0\uff0c\u63d0\u4f9b\u66f4\u9ad8\u5c42\u7ea7\u7684\u62bd\u8c61\uff0c\u5e76\u5b8c\u5168\u517c\u5bb9 Redux \u751f\u6001\u3002"))),(0,r.kt)("p",null,"\u4e0b\u6765\u6211\u4eec\u4ee5\u4e00\u4e2a\u57fa\u7840\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"countModel")," \u4e3a\u4f8b\uff0c\u6f14\u793a\u5982\u4f55\u521b\u5efa\u4e00\u4e2a Model\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { model } from '@modern-js/runtime/model';\n\nconst countModel = model(\"count\").define({\n  state: {\n    value: 1\n  },\n  actions: {\n    add(state) {\n      return {\n        ...state,\n        value: state.value + 1\n      };\n    }\n  }\n});\n\nexport default countModel;\n")),(0,r.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"model")," \u51fd\u6570\u521b\u5efa\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"count")," \u7684 Model\uff0cModel \u91cc\u5b9a\u4e49\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"actions"),"\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"state")," \u8868\u793a\u8ba1\u6570\u5668\u72b6\u6001\uff0c\u5b83\u662f\u4e1a\u52a1\u903b\u8f91\u76f8\u5173\u7684\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"actions")," \u91cc\u53ef\u4ee5\u6dfb\u52a0\u66f4\u65b0\u72b6\u6001\u7684\u7eaf\u51fd\u6570\uff0c\u5b83\u662f\u5bf9\u6570\u636e\u7684\u5904\u7406\u65b9\u6cd5\u3002\u5b83\u63a5\u6536\u5f53\u524d\u7684\u72b6\u6001 ",(0,r.kt)("inlineCode",{parentName:"li"},"state")," \u4f5c\u4e3a\u5165\u53c2\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u72b6\u6001\u3002")),(0,r.kt)("h2",{id:"\u4ee5-mutable-\u65b9\u5f0f\u66f4\u65b0-state"},"\u4ee5 Mutable \u65b9\u5f0f\u66f4\u65b0 State"),(0,r.kt)("p",null,"\u4e0a\u8ff0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," \u51fd\u6570\u662f\u4e00\u4e2a\u7eaf\u51fd\u6570\uff0c\u4e0d\u76f4\u63a5\u66f4\u65b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\uff0c\u800c\u662f\u8fd4\u56de\u65b0\u7684\u5bf9\u8c61\u3002\u8fd9\u5c31\u4fdd\u8bc1\u4e86 Model \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," \u662f ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Immutable_object"},"Immutable")," \u7684\u3002\nModern.js \u9ed8\u8ba4\u4e5f\u652f\u6301\u4e86\u4ee5 Mutable \u7684\u65b9\u5f0f\u64cd\u4f5c ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\uff08\u57fa\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/immerjs/immer"},"Immer")," \u5b9e\u73b0\uff09\u3002"),(0,r.kt)("p",null,"\u5982\u4e0b\u53ef\u4ee5\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," \u51fd\u6570\u6539\u9020\u6210 Mutable \u65b9\u5f0f\u64cd\u4f5c ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { model } from '@modern-js/runtime/model';\n\nconst countModel = model(\"count\").define({\n  state: {\n    value: 1\n  },\n  actions: {\n    add(state) {\n      state += 1;\n    }\n  }\n});\n\nexport default countModel;\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u5c31\u662f Model \u7684\u521b\u5efa\uff0c\u4f60\u53ef\u80fd\u8fd8\u60f3\u4e86\u89e3\uff1a",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/features/runtime/model/use-model"},"\u5982\u4f55\u4f7f\u7528 Model"),"\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u76f8\u5173 API \u7684\u66f4\u591a\u4ecb\u7ecd\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/runtime/model/model_"},"\u8fd9\u91cc"),"\u3002"))))}p.isMDXComponent=!0}}]);