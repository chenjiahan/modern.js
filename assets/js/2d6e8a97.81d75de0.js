"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[9788],{57522:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(29901);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(18249),o=(n(29901),n(57522));const a={sidebar_position:9,title:"\u6d4b\u8bd5 Model"},i=void 0,s={unversionedId:"guides/features/model/test-model",id:"guides/features/model/test-model",title:"\u6d4b\u8bd5 Model",description:"\u597d\u7684\u6d4b\u8bd5\u5bf9\u4ee3\u7801\u7684\u7a33\u5065\u6027\u81f3\u5173\u91cd\u8981\u3002\u4e0b\u9762\u4ee5 \u5feb\u901f\u4e0a\u624b \u7684 countModel \u4e3a\u4f8b\uff0c\u6f14\u793a\u5728 Modern.js \u4e2d\uff0c\u5982\u4f55\u5bf9 Model \u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\u3002",source:"@site/docs/guides/features/model/test-model.md",sourceDirName:"guides/features/model",slug:"/guides/features/model/test-model",permalink:"/docs/guides/features/model/test-model",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"\u6d4b\u8bd5 Model"},sidebar:"guidesSidebar",previous:{title:"\u6027\u80fd\u4f18\u5316",permalink:"/docs/guides/features/model/performance"},next:{title:"TS \u6700\u4f73\u5b9e\u8df5",permalink:"/docs/guides/features/model/typescript-best-practice"}},l={},p=[],d={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u597d\u7684\u6d4b\u8bd5\u5bf9\u4ee3\u7801\u7684\u7a33\u5065\u6027\u81f3\u5173\u91cd\u8981\u3002\u4e0b\u9762\u4ee5 ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/features/model/quick-start"},"\u5feb\u901f\u4e0a\u624b")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"countModel")," \u4e3a\u4f8b\uff0c\u6f14\u793a\u5728 Modern.js \u4e2d\uff0c\u5982\u4f55\u5bf9 Model \u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u6d4b\u8bd5\u529f\u80fd\uff0c\u9700\u8981\u5148\u5f00\u542f\u8be5\u529f\u80fd\u3002\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\uff0c\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run new"),"\uff0c\u8fdb\u884c\u5982\u4e0b\u9009\u62e9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c\uff1a \u542f\u7528\u53ef\u9009\u529f\u80fd\n? \u542f\u7528\u53ef\u9009\u529f\u80fd\uff1a \u542f\u7528\u300c\u5355\u5143\u6d4b\u8bd5 / \u96c6\u6210\u6d4b\u8bd5\u300d\u529f\u80fd\n")),(0,o.kt)("p",null,"\u5373\u53ef\u5f00\u542f\u6d4b\u8bd5\u529f\u80fd\u652f\u6301\u3002"),(0,o.kt)("p",null,"\u65b0\u589e ",(0,o.kt)("inlineCode",{parentName:"p"},"count.test.ts")," \u6587\u4ef6\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { createStore } from '@modern-js/runtime/testing';\nimport countModel from './count';\n\ndescribe('test model', () => {\n  it('count value should plus one after add', () => {\n    const store = createStore();\n    const [state, { add }] = store.use(countModel);\n\n    expect(state).toEqual({ value: 1 });\n\n    add();\n\n    expect(store.use(countModel)[0]).toEqual({ value: 2 });\n  });\n});\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u8fd9\u91cc\u4f7f\u7528\u7684 ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/model/create-store"},(0,o.kt)("inlineCode",{parentName:"a"},"createStore"))," \u662f\u4ece ",(0,o.kt)("inlineCode",{parentName:"p"},"@modern-js/runtime/testing")," \u5bfc\u5165\u7684\uff0c\u5185\u90e8\u4f1a\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/app/config/runtime/state"},(0,o.kt)("inlineCode",{parentName:"a"},"runtime.state"))," \u7684\u914d\u7f6e\u53bb\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"store"),"\u3002"))),(0,o.kt)("p",null,"\u5728\u6d4b\u8bd5\u7528\u4f8b\u91cc\uff0c\u6211\u4eec\u65b0\u5efa\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"store")," \u6765\u6302\u8f7d ",(0,o.kt)("inlineCode",{parentName:"p"},"countModel"),"\uff0c\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"store.use")," \u83b7\u53d6 ",(0,o.kt)("inlineCode",{parentName:"p"},"countModel")," \u7684 State \u548c Actions\u3002\u7136\u540e\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," Action \u66f4\u65b0\u72b6\u6001\uff0c\u5e76\u65ad\u8a00\u66f4\u65b0\u540e\u7684\u72b6\u6001\u503c\u3002"),(0,o.kt)("p",null,"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run test")," \u547d\u4ee4\uff0c\u89e6\u53d1\u6d4b\u8bd5\u7528\u4f8b\u7684\u6267\u884c\u3002"))}c.isMDXComponent=!0}}]);