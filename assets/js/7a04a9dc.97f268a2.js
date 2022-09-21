"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[47067],{57522:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(29901);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,m=u["".concat(s,".").concat(f)]||u[f]||c[f]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(18249),r=(n(29901),n(57522));const a={sidebar_position:10,title:"TS \u6700\u4f73\u5b9e\u8df5"},i=void 0,l={unversionedId:"guides/features/model/typescript-best-practice",id:"guides/features/model/typescript-best-practice",title:"TS \u6700\u4f73\u5b9e\u8df5",description:"Reduck \u5bf9 TS \u63d0\u4f9b\u4e86\u826f\u597d\u7684\u652f\u6301\uff0c\u5927\u90e8\u5206\u4f7f\u7528\u573a\u666f\u4e0b\uff0c\u65e0\u9700\u4efb\u4f55\u989d\u5916\u5de5\u4f5c\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u83b7\u5f97 API \u7684 TS \u7c7b\u578b\u63d0\u793a\u3002\u672c\u8282\uff0c\u5c06\u5bf9\u5176\u4ed6\u7684\u4e00\u4e9b\u4f7f\u7528\u573a\u666f\uff0c\u505a\u8865\u5145\u4ecb\u7ecd\u3002",source:"@site/docs/guides/features/model/typescript-best-practice.md",sourceDirName:"guides/features/model",slug:"/guides/features/model/typescript-best-practice",permalink:"/docs/guides/features/model/typescript-best-practice",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"TS \u6700\u4f73\u5b9e\u8df5"},sidebar:"guidesSidebar",previous:{title:"\u6d4b\u8bd5 Model",permalink:"/docs/guides/features/model/test-model"},next:{title:"Redux \u751f\u6001\u96c6\u6210",permalink:"/docs/guides/features/model/redux-integration"}},s={},d=[{value:"\u5b9a\u4e49 Model \u7684 State \u7c7b\u578b",id:"\u5b9a\u4e49-model-\u7684-state-\u7c7b\u578b",level:2},{value:"\u884d\u751f\u72b6\u6001\u7684\u4f9d\u8d56\u7c7b\u578b",id:"\u884d\u751f\u72b6\u6001\u7684\u4f9d\u8d56\u7c7b\u578b",level:2},{value:"\u83b7\u53d6 Model \u7c7b\u578b\u4fe1\u606f\u7684 Hooks",id:"\u83b7\u53d6-model-\u7c7b\u578b\u4fe1\u606f\u7684-hooks",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Reduck \u5bf9 TS \u63d0\u4f9b\u4e86\u826f\u597d\u7684\u652f\u6301\uff0c\u5927\u90e8\u5206\u4f7f\u7528\u573a\u666f\u4e0b\uff0c\u65e0\u9700\u4efb\u4f55\u989d\u5916\u5de5\u4f5c\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u83b7\u5f97 API \u7684 TS \u7c7b\u578b\u63d0\u793a\u3002\u672c\u8282\uff0c\u5c06\u5bf9\u5176\u4ed6\u7684\u4e00\u4e9b\u4f7f\u7528\u573a\u666f\uff0c\u505a\u8865\u5145\u4ecb\u7ecd\u3002"),(0,r.kt)("h2",{id:"\u5b9a\u4e49-model-\u7684-state-\u7c7b\u578b"},"\u5b9a\u4e49 Model \u7684 State \u7c7b\u578b"),(0,r.kt)("p",null,"\u4e3a Model \u7684 State \u58f0\u660e\u7c7b\u578b\u4fe1\u606f\uff0c\u662f\u5728 TS \u4e2d\u4f7f\u7528 Reduck \u7684\u6700\u4f73\u5b9e\u8df5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="\u793a\u4f8b"',title:'"\u793a\u4f8b"'},"interface State {\n  data: string\n}\n\nexport const foo = model<State>('foo').define({\n  state: {\n    data: ''\n  },\n  computed: {\n    withSuffix: (state) => state.data + 'suffix'\n  },\n  actions: {\n    setData: (state, payload:string) => {\n      state.data = payload\n    }\n  }\n})\n")),(0,r.kt)("p",null,"\u5f53\u4e3a Model \u7684 State \u58f0\u660e\u7c7b\u578b\u4fe1\u606f\u540e\uff0cModel \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"computed"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"actions")," \u90fd\u80fd\u83b7\u53d6\u6b63\u786e\u7684\u7c7b\u578b\u4fe1\u606f\u3002\u4e8b\u5b9e\u4e0a\uff0c\u4e0a\u9762\u7684\u793a\u4f8b\u4ee3\u7801\u4e2d\uff0c\u5373\u4f7f\u6211\u4eec\u4e0d\u5b9a\u4e49 State \u7c7b\u578b\u4fe1\u606f\uff0c\u4e5f\u4f1a\u6839\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," \u7684\u521d\u59cb\u503c\u4fe1\u606f\u81ea\u52a8\u63a8\u5bfc\u51fa State \u7684\u7c7b\u578b\u4fe1\u606f\u3002\u4e0d\u8fc7\uff0c\u4ecd\u7136\u5efa\u8bae\u4f60\u5728\u5b9a\u4e49 Model \u65f6\uff0c\u58f0\u660e State \u7684\u7c7b\u578b\u4fe1\u606f\uff0c\u56e0\u4e3a\u6839\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," \u7684\u521d\u59cb\u503c\u4fe1\u606f\u63a8\u5bfc\u51fa\u7684 State \u7c7b\u578b\u4fe1\u606f\u53ef\u80fd\u4e0d\u5b8c\u6574(\u7f3a\u5c11\u5b57\u6bb5\u6216\u5b57\u6bb5\u7684\u7c7b\u578b\u4fe1\u606f\u7f3a\u5c11)\uff0c\u800c\u4e14\u5f53\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/model/model_#%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B"},"\u51fd\u6570\u7c7b\u578b"),"\u5b9a\u4e49 Model \u65f6\uff0cState \u7684\u7c7b\u578b\u4fe1\u606f\u4e5f\u662f\u65e0\u6cd5\u6839\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," \u7684\u521d\u59cb\u503c\u4fe1\u606f\u81ea\u52a8\u63a8\u5bfc\u7684\u3002"),(0,r.kt)("h2",{id:"\u884d\u751f\u72b6\u6001\u7684\u4f9d\u8d56\u7c7b\u578b"},"\u884d\u751f\u72b6\u6001\u7684\u4f9d\u8d56\u7c7b\u578b"),(0,r.kt)("p",null,"\u5f53 Model \u7684\u884d\u751f\u72b6\u6001\u4f9d\u8d56\u5176\u4ed6 Model \u65f6\uff0c\u9700\u8981\u624b\u52a8\u6307\u5b9a\u5176\u4ed6 Model \u7684 State\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="\u793a\u4f8b"',title:'"\u793a\u4f8b"'},"interface State {\n  data: string\n}\n\nexport const bar = model<State>('bar').define({\n  state: {\n    data: ''\n  },\n  computed: {\n    // \u4e3a fooState \u6307\u5b9a\u7c7b\u578b\n    withFoo: [foo, (state, fooState: FooState) => state.data + fooState.data]\n  },\n})\n")),(0,r.kt)("h2",{id:"\u83b7\u53d6-model-\u7c7b\u578b\u4fe1\u606f\u7684-hooks"},"\u83b7\u53d6 Model \u7c7b\u578b\u4fe1\u606f\u7684 Hooks"),(0,r.kt)("p",null,"Reduck \u63d0\u4f9b\u4e86\u4e00\u7ec4\u7528\u4e8e\u83b7\u53d6 Model \u7c7b\u578b\u4fe1\u606f\u7684\u5de5\u5177\u7c7b\u578b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GetModelState"),"\uff1a \u83b7\u53d6 Model \u7684 State\uff08\u5305\u542b\u884d\u751f\u72b6\u6001\uff09\u7c7b\u578b\u4fe1\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GetModelActions"),"\uff1a\u83b7\u53d6 Model \u7684 Actions\uff08\u5305\u542b Effects \u51fd\u6570\uff09\u7c7b\u578b\u4fe1\u606f\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="\u793a\u4f8b"',title:'"\u793a\u4f8b"'},"export const foo = model<State2>('foo').define({\n  // \u7701\u7565\n})\n\n// \u83b7\u53d6 foo \u7684 State \u7c7b\u578b\nlet fooActions: GetModelActions<typeof foo>;\n// \u83b7\u53d6 foo \u7684 Actions \u7c7b\u578b\nlet fooState: GetModelState<typeof foo>;\n")))}c.isMDXComponent=!0}}]);