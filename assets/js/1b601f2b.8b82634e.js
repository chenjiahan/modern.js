"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[2202],{57522:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(29901);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(18249),o=(n(29901),n(57522));const a={sidebar_position:13,title:"\u5e38\u89c1\u95ee\u9898"},i="\u5e38\u89c1\u95ee\u9898",l={unversionedId:"guides/features/model/faq",id:"guides/features/model/faq",title:"\u5e38\u89c1\u95ee\u9898",description:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027",source:"@site/docs/guides/features/model/faq.md",sourceDirName:"guides/features/model",slug:"/guides/features/model/faq",permalink:"/docs/guides/features/model/faq",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,title:"\u5e38\u89c1\u95ee\u9898"},sidebar:"guidesSidebar",previous:{title:"\u5355\u72ec\u4f7f\u7528 Reduck",permalink:"/docs/guides/features/model/use-out-of-modernjs"},next:{title:"\u5b9a\u4e49\u8def\u7531",permalink:"/docs/guides/features/server-side/web/routes"}},s={},d=[{value:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027",id:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027",level:2},{value:"\u5fae\u524d\u7aef\u5b50\u5e94\u7528 Model \u8bbf\u95ee\u4e3b\u5e94\u7528 Model",id:"\u5fae\u524d\u7aef\u5b50\u5e94\u7528-model-\u8bbf\u95ee\u4e3b\u5e94\u7528-model",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,o.kt)("h2",{id:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027"},"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027"),(0,o.kt)("p",null,"Reduck \u7684\u7f16\u8bd1\u6784\u5efa\u4ea7\u7269\u9ed8\u8ba4\u4f7f\u7528 ES6 \u8bed\u6cd5\uff0c\u5982\u679c\u4f60\u9700\u8981\u652f\u6301\u66f4\u4f4e\u7248\u672c\u7684\u6d4f\u89c8\u5668\uff0c\u8bf7\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"@modern-js-reduck")," \u547d\u540d\u7a7a\u95f4\u4e0b\u7684\u6240\u6709\u5305\u52a0\u5165\u5230\u5e94\u7528\u7684\u7f16\u8bd1\u8fc7\u7a0b\u3002"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Reduck \u4f7f\u7528\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-env"},(0,o.kt)("inlineCode",{parentName:"a"},"@babel/preset-env"))," \u7684\u8be6\u7ec6",(0,o.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/reduck/blob/main/common/config.js#L10~L17"},"\u914d\u7f6e"),"\u3002"))),(0,o.kt)("h2",{id:"\u5fae\u524d\u7aef\u5b50\u5e94\u7528-model-\u8bbf\u95ee\u4e3b\u5e94\u7528-model"},"\u5fae\u524d\u7aef\u5b50\u5e94\u7528 Model \u8bbf\u95ee\u4e3b\u5e94\u7528 Model"),(0,o.kt)("p",null,"\u5fae\u524d\u7aef\u5b50\u5e94\u7528 Model \u8bbf\u95ee\u4e3b\u5e94\u7528 Model \u65f6\uff0c\u5982\u679c\u8be5 ",(0,o.kt)("strong",{parentName:"p"},"Model")," \u5728\u4e3b\u5e94\u7528\u5c1a\u672a\u6302\u8f7d\uff0c\u4f1a\u81ea\u52a8\u6302\u8f7d\u5230\u5b50\u5e94\u7528\u4e0a\u3002"),(0,o.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { useModel } from '@modern-js/runtime/model';\nimport parentModel from '@MasterApp/models/todoModel';\n\nfunction SubModelApp() {\n  const [state, actions] = useModel(parentModel);\n\n  return <div>...</div>\n}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/mf-communicate.svg",alt:"\u5fae\u524d\u7aef\u901a\u4fe1\u6d41\u7a0b\u56fe"})),(0,o.kt)("p",null,"\u4e3a\u4e86\u907f\u514d\u610f\u5916\u964d\u7ea7\u6302\u8f7d\uff0c\u5efa\u8bae\u5c06\u4e3b\u5e94\u7528\u6240\u9700\u8981\u5171\u4eab\u7684 Model \u9884\u5148\u6302\u8f7d\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// App \u662f\u4e3b\u5e94\u7528\u7684\u5165\u53e3\u7ec4\u4ef6\uff0csharedModel1\u3001sharedModel2 \u662f\u9700\u8981\u5171\u4eab\u7684 Model\u3002\nApp.models = [\n  sharedModel1,\n  sharedModel2\n]\n")))}c.isMDXComponent=!0}}]);