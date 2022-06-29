"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[2948],{54852:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(49231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},68998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(86215),o=(n(49231),n(54852));const a={sidebar_position:4,title:"\u5728 React \u7ec4\u4ef6\u5916\u4f7f\u7528 Model"},l=void 0,i={unversionedId:"guides/features/runtime/model/use-out-of-react",id:"guides/features/runtime/model/use-out-of-react",title:"\u5728 React \u7ec4\u4ef6\u5916\u4f7f\u7528 Model",description:"\u5728\u5b9e\u9645\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u53ef\u80fd\u9700\u8981\u5728 React \u7ec4\u4ef6\u5916\u6d88\u8d39 Model\u3002\u4f8b\u5982\u5728\u5de5\u5177\u51fd\u6570\u4e2d\u8bbf\u95ee state\u3001\u6267\u884c actions \u7b49\u3002\u8fd9\u4e00\u8282\u6211\u4eec\u5c06\u6f14\u793a\u5982\u4f55\u5728 React \u7ec4\u4ef6\u5916\u4f7f\u7528 Model\u3002",source:"@site/docs/guides/features/runtime/model/use-out-of-react.md",sourceDirName:"guides/features/runtime/model",slug:"/guides/features/runtime/model/use-out-of-react",permalink:"/docs/guides/features/runtime/model/use-out-of-react",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u5728 React \u7ec4\u4ef6\u5916\u4f7f\u7528 Model"},sidebar:"guidesSidebar",previous:{title:"\u5c40\u90e8\u72b6\u6001\u7ba1\u7406",permalink:"/docs/guides/features/runtime/model/local-model"},next:{title:"\u526f\u4f5c\u7528\u7ba1\u7406",permalink:"/docs/guides/features/runtime/model/manage-effects"}},s={},u=[{value:"\u521b\u5efa Store",id:"\u521b\u5efa-store",level:2},{value:"\u4f7f\u7528 Store \u52a0\u8f7d Model",id:"\u4f7f\u7528-store-\u52a0\u8f7d-model",level:2},{value:"\u5728\u8ba1\u6570\u5668\u5e94\u7528\u4e2d\u4f7f\u7528",id:"\u5728\u8ba1\u6570\u5668\u5e94\u7528\u4e2d\u4f7f\u7528",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u5b9e\u9645\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u53ef\u80fd\u9700\u8981\u5728 React \u7ec4\u4ef6\u5916\u6d88\u8d39 Model\u3002\u4f8b\u5982\u5728\u5de5\u5177\u51fd\u6570\u4e2d\u8bbf\u95ee ",(0,o.kt)("inlineCode",{parentName:"p"},"state"),"\u3001\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"actions")," \u7b49\u3002\u8fd9\u4e00\u8282\u6211\u4eec\u5c06\u6f14\u793a\u5982\u4f55\u5728 React \u7ec4\u4ef6\u5916\u4f7f\u7528 Model\u3002"),(0,o.kt)("h2",{id:"\u521b\u5efa-store"},"\u521b\u5efa Store"),(0,o.kt)("p",null,"\u9996\u5148\u9700\u8981\u521b\u5efa\u4e00\u4e2a Store \u5bf9\u8c61\uff0c\u7136\u540e\u901a\u8fc7 Store \u52a0\u8f7d Model\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const store = createStore();\n")),(0,o.kt)("p",null,"\u8fd9\u6837\u6211\u4eec\u5c31\u521b\u5efa\u4e86\u4e00\u4e2a Store\uff0c\u5e95\u5c42\u4f7f\u7528\u7684\u662f ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/api/store"},"Redux Store"),"\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b83\u7684\u4efb\u4f55\u65b9\u6cd5\uff0c\u5982 ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/api/store#getstate"},(0,o.kt)("inlineCode",{parentName:"a"},"getState")),"\u3002\n\u540c\u65f6\u6211\u4eec\u4e5f\u517c\u5bb9 Redux \u4e30\u5bcc\u7684\u4e2d\u95f4\u4ef6\u751f\u6001\uff0c\u53ef\u4ee5\u5728\u521b\u5efa Store \u7684\u65f6\u5019\u4f20\u5165 Redux \u4e2d\u95f4\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const store = createStore({\n  middlewares: [someMiddleware]\n});\n")),(0,o.kt)("h2",{id:"\u4f7f\u7528-store-\u52a0\u8f7d-model"},"\u4f7f\u7528 Store \u52a0\u8f7d Model"),(0,o.kt)("p",null,"\u4e0a\u9762\u6211\u4eec\u521b\u5efa\u4e86 Store\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"store.use")," \u51fd\u6570\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"countModel")," \u6302\u8f7d\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"store")," \u4e0a\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const [state, actions, subscribe] = store.use(countModel);\n\nsubscribe(() => {\n  console.log('state changed', store.use(countModel)[0]); // state changed {value: 2}\n});\n\nconsole.log(state); // {value: 1}\n\nactions.add();\n\nconsole.log(store.use(countModel)[0]); // {value: 2}\n")),(0,o.kt)("p",null,"\u4ee3\u7801\u4f9d\u6b21\u6253\u5370\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{value: 1}\nstate changed {value: 2}\n{value: 2}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"store.use")," \u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"p"},"state"),"\u3001 ",(0,o.kt)("inlineCode",{parentName:"p"},"actions"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"subscribe"),"\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state"),": \u8be5 Model \u7684\u72b6\u6001\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"actions"),": \u4fee\u6539 Model \u72b6\u6001\u7684\u64cd\u4f5c\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"subscribe"),": \u7528\u4e8e\u76d1\u542c Model \u66f4\u65b0\u7684\u51fd\u6570\u3002")),(0,o.kt)("h2",{id:"\u5728\u8ba1\u6570\u5668\u5e94\u7528\u4e2d\u4f7f\u7528"},"\u5728\u8ba1\u6570\u5668\u5e94\u7528\u4e2d\u4f7f\u7528"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5728\u8ba1\u6570\u5668\u5e94\u7528\u4e2d\uff0c\u6f14\u793a\u5982\u4f55\u5728\u7ec4\u4ef6\u5916\u4f7f\u7528 Model\u3002\u6211\u4eec\u5220\u9664\u624b\u52a8\u70b9\u51fb ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," \u6309\u94ae\u589e\u52a0\u8ba1\u6570\u5668\u503c\uff0c\u800c\u662f\u5728\u7ec4\u4ef6\u5916\u901a\u8fc7\u4e00\u4e2a\u5b9a\u65f6\u4efb\u52a1\u6bcf\u9694\u4e00\u79d2\u949f\u81ea\u589e\u4e00\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { useModel, createStore, Provider } from "@modern-js/runtime/model";\nimport countModel from "./models/count";\n\nconst store = createStore();\n\nconst [, actions] = store.use(countModel);\n\nsetInterval(() => {\n  actions.add();\n}, 1000)\n\nfunction Counter() {\n  const [state, actions] = useModel(countModel);\n\n  return (\n    <div>\n      <div>counter: {state.value}</div>\n    </div>\n  );\n}\n\nexport default function App() {\n  return (\n    <Provider store={store}>\n      <Counter />\n    </Provider>\n  );\n}\n')),(0,o.kt)("p",null,"\u4e3b\u8981\u6b65\u9aa4\u603b\u7ed3\u5982\u4e0b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"createStore")," \u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"li"},"store"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"store.use(countModel)")," \u6302\u8f7d ",(0,o.kt)("inlineCode",{parentName:"li"},"countModel"),"\uff0c\u5e76\u83b7\u53d6 ",(0,o.kt)("inlineCode",{parentName:"li"},"state")," \u548c ",(0,o.kt)("inlineCode",{parentName:"li"},"actions"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"Provider")," \u7ec4\u4ef6\u5305\u88f9 ",(0,o.kt)("inlineCode",{parentName:"li"},"Counter")," \u7ec4\u4ef6\uff0c\u5e76\u4f20\u5165\u4e0a\u9762\u521b\u5efa\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"store"),"\u3002")),(0,o.kt)("p",null,"\u6700\u7ec8\u6548\u679c\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/eueh7vhojuh/modern/model-outof-react.gif",alt:"counter-model-outof-react"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u672c\u8282\u5b8c\u6574\u7684\u793a\u4f8b\u4ee3\u7801\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/series/tutorials/runtime-api/model/counter-model-outof-react"},"\u7ae0\u8282\u793a\u4f8b\u4ee3\u7801"),"\u3002"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"\u76f8\u5173 API \u7684\u66f4\u591a\u4ecb\u7ecd\uff0c\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"li",href:"/docs/apis/runtime/model/create-store"},"\u8fd9\u91cc"),"\u3002")))))}p.isMDXComponent=!0}}]);