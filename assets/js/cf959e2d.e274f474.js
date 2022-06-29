"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[3201],{54852:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(49231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=o,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},72803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(86215),o=(n(49231),n(54852));const i={title:"useModel",sidebar_position:1},r=void 0,l={unversionedId:"apis/runtime/container/use-model",id:"apis/runtime/container/use-model",title:"useModel",description:"useModel \u7528\u4e8e\u4ece\u5168\u5c40\u7684 Store \u4e0a\u83b7\u53d6\u6240\u4f20\u5165 Model \u7684 state\u3001actions\u3002\u4e5f\u4f1a\u52a8\u6001\u6302\u8f7d\u76f8\u5e94 Model \u5230\u5168\u5c40 Store \u4e0a\u3002",source:"@site/docs/apis/runtime/container/use-model.md",sourceDirName:"apis/runtime/container",slug:"/apis/runtime/container/use-model",permalink:"/docs/apis/runtime/container/use-model",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"useModel",sidebar_position:1},sidebar:"apisSidebar",previous:{title:"query\u3010WIP\u3011",permalink:"/docs/apis/runtime/model/query"},next:{title:"useStaticModel",permalink:"/docs/apis/runtime/container/use-static-model"}},s={},d=[{value:"API",id:"api",level:2},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:4},{value:"selector \u7528\u6cd5",id:"selector-\u7528\u6cd5",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-1",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5-1",level:3},{value:"selector \u7528\u6cd5",id:"selector-\u7528\u6cd5-1",level:3},{value:"\u5fae\u524d\u7aef\u901a\u4fe1",id:"\u5fae\u524d\u7aef\u901a\u4fe1",level:3}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"useModel")," \u7528\u4e8e\u4ece\u5168\u5c40\u7684 ",(0,o.kt)("strong",{parentName:"p"},"Store")," \u4e0a\u83b7\u53d6\u6240\u4f20\u5165 ",(0,o.kt)("strong",{parentName:"p"},"Model")," \u7684 ",(0,o.kt)("strong",{parentName:"p"},"state"),"\u3001",(0,o.kt)("strong",{parentName:"p"},"actions"),"\u3002\u4e5f\u4f1a\u52a8\u6001\u6302\u8f7d\u76f8\u5e94 ",(0,o.kt)("strong",{parentName:"p"},"Model")," \u5230\u5168\u5c40 ",(0,o.kt)("strong",{parentName:"p"},"Store")," \u4e0a\u3002"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { useModel } from '@modern-js/runtime/model';\n")))),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useModel(models) => [ state, actions ]")),(0,o.kt)("p",null,"\u4f20\u5165\u4e00\u4e2a\u5230\u591a\u4e2a Model\u3002\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u6570\u7ec4\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e3a\u5408\u5e76\u64cd\u4f5c\u8fd4\u56de\u7684 ",(0,o.kt)("strong",{parentName:"p"},"state"),"\uff0c\u7b2c\u4e8c\u4e2a\u5143\u7d20\u4e3a\u5408\u5e76\u64cd\u4f5c\u8fd4\u56de\u7684 ",(0,o.kt)("strong",{parentName:"p"},"actions"),"\u3002"),(0,o.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"models\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"Model | Model[]"),"\uff0c\u4f20\u5165\u4e00\u4e2a Model \u6216 Model \u6570\u7ec4\u3002")),(0,o.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"state\uff1a",(0,o.kt)("a",{parentName:"li",href:"/docs/apis/runtime/model/state"},(0,o.kt)("inlineCode",{parentName:"a"},"State")),"\uff0c",(0,o.kt)("strong",{parentName:"li"},"Model")," \u7684 ",(0,o.kt)("strong",{parentName:"li"},"state"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"actions\uff1a",(0,o.kt)("a",{parentName:"li",href:"/docs/apis/runtime/model/actions"},(0,o.kt)("inlineCode",{parentName:"a"},"Actions")),"\uff0c",(0,o.kt)("strong",{parentName:"li"},"Model")," \u7684 ",(0,o.kt)("strong",{parentName:"li"},"actions"),"\u3002")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"state\u3001action \u505a\u5408\u5e76\u64cd\u4f5c\u65f6\uff0c\u5982\u679c\u6709\u540c\u540d\u5c5e\u6027\uff0c\u540e\u9762 Model\uff08state\u3001action\uff09 \u4f1a\u8986\u76d6\u524d\u4e00\u4e2a Model \u7684\u3002"))),(0,o.kt)("h3",{id:"selector-\u7528\u6cd5"},"selector \u7528\u6cd5"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useModel(models, [stateSelector], [actionSelector]) => [ state, actions ]")),(0,o.kt)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"models\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"Model[]"),"\uff0c\u524d n \u4e2a\u5143\u7d20\u4e3a Model\uff0c\u5c06 n \u4e2a Model \u7684 state \u4f9d\u6b21\u4f20\u5230\u7b2c\u4e8c\u4e2a\u53c2\u6570 SelectorState \u51fd\u6570\u4e2d\uff0c\u5c06 n \u4e2a Model \u7684 actions \u4f9d\u6b21\u4f20\u5230\u7b2c\u4e09\u4e2a\u53c2\u6570 SelectorActions \u51fd\u6570\u4e2d\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"[stateSelector]","\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"(mode1State1, modelState2, modelState3, /*modelState*/) => object"),"\uff0c\u524d n \u4e2a\u53c2\u6570\u4e3a n \u4e2a Model \u5bf9\u5e94\u7684 state\u3002\u8fd4\u56de\u7684\u6570\u636e\u4f5c\u4e3a useModel \u8fd4\u56de\u503c\u6570\u7ec4\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"[actionSelector]","\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"(modelActions1, modelActions2, modelActions3, /*modelActions1*/) => object"),"\uff0c\u524d n \u4e2a\u53c2\u6570\u4e3a n \u4e2a Model \u5bf9\u5e94\u7684 actions\u3002\u8fd4\u56de\u7684\u6570\u636e\u4f5c\u4e3a useModel \u8fd4\u56de\u503c\u6570\u7ec4\u7684\u7b2c\u4e8c\u4e2a\u5143\u7d20\u3002"))),(0,o.kt)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,o.kt)("p",null,"\u6b64\u65f6 ",(0,o.kt)("inlineCode",{parentName:"p"},"useModel")," \u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u6570\u7ec4\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e3a SelectorState \u8fd4\u56de\u503c\uff0c\u7b2c\u4e8c\u4e2a\u5143\u7d20\u4e3a SelectorActions \u8fd4\u56de\u503c\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"state\uff1a",(0,o.kt)("a",{parentName:"li",href:"/docs/apis/runtime/model/state"},(0,o.kt)("inlineCode",{parentName:"a"},"State")),"\uff0c",(0,o.kt)("strong",{parentName:"li"},"Model")," \u7684 ",(0,o.kt)("strong",{parentName:"li"},"state"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"actions\uff1a",(0,o.kt)("a",{parentName:"li",href:"/docs/apis/runtime/model/actions"},(0,o.kt)("inlineCode",{parentName:"a"},"Actions")),"\uff0c",(0,o.kt)("strong",{parentName:"li"},"Model")," \u7684 ",(0,o.kt)("strong",{parentName:"li"},"actions"),"\u3002")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5982\u679c\u5ffd\u7565\u8be5\u51fd\u6570\uff0c\u5219\u4f1a\u9ed8\u8ba4\u5c06\u6240\u6709 Model \u7684 actions \u5408\u5e76\u4f5c\u4e3a useModel \u8fd4\u56de\u503c\u6570\u7ec4\u7684\u7b2c\u4e8c\u4e2a\u5143\u7d20\u3002"))),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("h3",{id:"\u57fa\u672c\u7528\u6cd5-1"},"\u57fa\u672c\u7528\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import todoModel from 'models/todo';\nimport filterModel from 'models/filter';\n\nfunction Test(props) {\n  const [state, actions] = useModel([todoModel, filterModel]);\n  actions.add(); // \u8c03\u7528 todoModel add action\n  actions.setVisibleStatus(); // \u8c03\u7528 filterModel filterModel action\n\n  state.items; // \u83b7\u53d6 todoModel state items\n  state.visibleStatus;// \u83b7\u53d6 filterModel state visibleStatus\n}\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4e0a\u8ff0\u65b9\u5f0f\u82e5 todoModel\u3001filterModel \u5176\u4e2d\u4e00\u4e2a\u4efb\u4e00 model\u3001\u4efb\u4e00\u72b6\u6001\u6539\u53d8\uff0c\u90fd\u4f1a\u89e6\u53d1 ",(0,o.kt)("inlineCode",{parentName:"p"},"Test \u7ec4\u4ef6")," \u7684 rerender\u3002\n\u5bf9\u4e8e\u6027\u80fd\u654f\u611f\u7684\u5e94\u7528\u6216\u573a\u666f\u53ef\u4ee5\u501f\u52a9 ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," \u8fdb\u884c\u4f18\u5316\u3002"))),(0,o.kt)("h3",{id:"selector-\u7528\u6cd5-1"},"selector \u7528\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import todoModel from 'models/todo';\nimport filterModel from 'models/filter';\n\nfunction Test(props) {\n  const [state, actions] = useModel([\n    todoModel, filterModel,\n    (todoState, filterState) => ({\n      items: todoState.items,\n      visibleStatus: `${props.prefix}-${filterState.visibleStatus}`,\n    }),\n    (todoActions, filterActions) => ({\n      ...todoActions,\n      ...filterActions\n    }),\n  // NOTICE: SelectorState \u51fd\u6570\u4e2d\u4f9d\u8d56\u4e86 props.prefix\uff0c\u6240\u4ee5\u8981\u5c06\u8be5\u503c\u4f5c\u4e3a dep \u4f20\u5165\n  ], [props.prefix]);\n  actions.add(); // \u8c03\u7528 todoModel add action\n  actions.setVisibleStatus(); // \u8c03\u7528 filterModel filterModel action\n\n  state.items; // \u83b7\u53d6 todoModel state items\n  state.visibleStatus;\n}\n")),(0,o.kt)("h3",{id:"\u5fae\u524d\u7aef\u901a\u4fe1"},"\u5fae\u524d\u7aef\u901a\u4fe1"),(0,o.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u4e0e\u4e0a\u8ff0\u4f7f\u7528\u5f62\u5f0f\u76f8\u540c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { useModel } from '@modern-js/runtime/model';\nimport parentModel from '@MasterApp/models/todoModel';\n\nfunction SubModelApp() {\n  const [state, actions] = useModel(parentModel);\n\n  return <div>...</div>\n}\n")),(0,o.kt)("p",null,"\u5f53\u8be5 ",(0,o.kt)("strong",{parentName:"p"},"Model")," \u5728\u4e3b\u5e94\u7528 ",(0,o.kt)("strong",{parentName:"p"},"Store")," \u4e0a\u4e0d\u5b58\u5728\u7684\u65f6\u5019\uff0c\u4f1a\u81ea\u52a8\u6302\u8f7d\u5230\u5b50\u5e94\u7528\u81ea\u8eab\u7684 ",(0,o.kt)("strong",{parentName:"p"},"Store")," \u4e0a\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/mf-communicate.svg",alt:"\u5fae\u524d\u7aef\u901a\u4fe1\u6d41\u7a0b\u56fe"})),(0,o.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5b50\u5e94\u7528\u5728\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"useModel")," \u53bb\u8bbf\u95ee\u4e3b\u5e94\u7528 ",(0,o.kt)("strong",{parentName:"p"},"Model")," \u7684\u65f6\u5019\uff0c\u5982\u679c\u4e3b\u5e94\u7528 ",(0,o.kt)("strong",{parentName:"p"},"Model")," \u672a\u521d\u59cb\u5316\uff08\u8fd8\u672a\u6302\u8f7d\u5230 ",(0,o.kt)("strong",{parentName:"p"},"Store")," \u4e0a\uff09\uff0c\u4f1a\u81ea\u52a8\u964d\u7ea7\u6302\u8f7d\u5230\u5b50\u5e94\u7528\u81ea\u8eab\u7684 ",(0,o.kt)("strong",{parentName:"p"},"Store")," \u4e0a\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u907f\u514d\u610f\u5916\u964d\u7ea7\u6302\u8f7d\uff0c\u5efa\u8bae\u5c06\u4e3b\u5e94\u7528\u6240\u9700\u8981\u5171\u4eab\u7684 model \u9884\u5148\u6302\u8f7d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"App.models = [\n  sharedModel1,\n  sharedModel2\n]\n")))}m.isMDXComponent=!0}}]);