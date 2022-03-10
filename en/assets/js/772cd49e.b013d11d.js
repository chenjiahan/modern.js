"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[8349],{54852:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var i=t(49231);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(t),k=a,u=m["".concat(s,".").concat(k)]||m[k]||p[k]||r;return t?i.createElement(u,l(l({ref:n},c),{},{components:t})):i.createElement(u,l({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=t[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},28801:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var i=t(26260),a=t(23157),r=(t(49231),t(54852)),l=["components"],o={title:"winService",sidebar_position:4},s=void 0,d={unversionedId:"apis/runtime/electron/render-process/win-service",id:"apis/runtime/electron/render-process/win-service",isDocsHomePage:!1,title:"winService",description:"* \u7a97\u53e3\u7ba1\u7406\u670d\u52a1\u3002",source:"@site/docs/apis/runtime/electron/render-process/win-service.md",sourceDirName:"apis/runtime/electron/render-process",slug:"/apis/runtime/electron/render-process/win-service",permalink:"/en/docs/apis/runtime/electron/render-process/win-service",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"winService",sidebar_position:4},sidebar:"apisSidebar",previous:{title:"callMain",permalink:"/en/docs/apis/runtime/electron/render-process/call-main"},next:{title:"webviewService",permalink:"/en/docs/apis/runtime/electron/render-process/webview-service"}},c=[{value:"\u5b9e\u4f8b\u65b9\u6cd5",id:"\u5b9e\u4f8b\u65b9\u6cd5",children:[{value:"broadCast",id:"broadcast",children:[]},{value:"sendTo",id:"sendto",children:[]},{value:"closeWindowByName",id:"closewindowbyname",children:[]},{value:"closeWindowById",id:"closewindowbyid",children:[]},{value:"closeCurrentWindow",id:"closecurrentwindow",children:[]},{value:"callOtherWindow",id:"callotherwindow",children:[]},{value:"registerBeforeClose",id:"registerbeforeclose",children:[]},{value:"registerWillClose",id:"registerwillclose",children:[]},{value:"registerServices",id:"registerservices",children:[]},{value:"onMessage",id:"onmessage",children:[]},{value:"disposeWebviewConnection",id:"disposewebviewconnection",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}]}],p={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u7a97\u53e3\u7ba1\u7406\u670d\u52a1\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u8fdb\u7a0b\uff1a",(0,r.kt)("a",{parentName:"li",href:"/docs/guides/features/electron/basic#%E6%B8%B2%E6%9F%93%E8%BF%9B%E7%A8%8B"},"\u6e32\u67d3\u8fdb\u7a0b"),"\u3002")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { winService } from '@modern-js/runtime/electron-render';\n")))),(0,r.kt)("h2",{id:"\u5b9e\u4f8b\u65b9\u6cd5"},"\u5b9e\u4f8b\u65b9\u6cd5"),(0,r.kt)("h3",{id:"broadcast"},"broadCast"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"winService.broadcast(channel[,...args])")),(0,r.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"channel\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c \u5e7f\u64ad\u9891\u9053\u540d\u3002"),(0,r.kt)("li",{parentName:"ul"},"[args]","\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"any[]"),"\uff0c\u5e7f\u64ad\u53c2\u6570\u3002")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void"),"\u3002")),(0,r.kt)("p",null,"\u7ed9\u6240\u6709\u7a97\u53e3\u5728 channel \u9891\u9053\u4e0a\u53d1\u9001\u6d88\u606f\u3002"),(0,r.kt)("h3",{id:"sendto"},"sendTo"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"winService.sendTo(receiver,channel[,...args])")),(0,r.kt)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"receiver\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"number | string"),"\uff0c\u63a5\u6536\u7a97\u53e3 ID \u6216\u8005\u7a97\u53e3\u540d\u3002"),(0,r.kt)("li",{parentName:"ul"},"channel\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c \u901a\u4fe1\u9891\u9053\u540d\u3002"),(0,r.kt)("li",{parentName:"ul"},"[args]","\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"any[]")," \u8bbf\u95ee\u670d\u52a1\u51fd\u6570\u7684\u53c2\u6570\u3002")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void"),"\u3002")),(0,r.kt)("p",null,"\u6839\u636e\u7a97\u53e3\u540d\u5b57\u6216\u8005 ID \u53d1\u9001\u6d88\u606f\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"channel")," \u9891\u9053\u3002"),(0,r.kt)("h3",{id:"closewindowbyname"},"closeWindowByName"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"winService.closeWindowByName(name[,options])")),(0,r.kt)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"name\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u7a97\u53e3\u540d\u3002"),(0,r.kt)("li",{parentName:"ul"},"[options]","\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"object"),"\uff0c\u5173\u95ed\u6a21\u5f0f\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"[closeMode]","\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"'close' | 'confirmOrClose'"),"\uff0c\u5f53 ",(0,r.kt)("inlineCode",{parentName:"li"},"closeMode=close")," \u65f6\uff0c\u4f1a\u76f4\u63a5\u5173\u95ed\uff0c\u5ffd\u7565\u56de\u8c03\u3002\u5f53 ",(0,r.kt)("inlineCode",{parentName:"li"},"closeMode=confirmOrClose"),"\uff0c\u5982\u679c\u6709\u786e\u8ba4\u56de\u8c03\uff0c\u4f1a\u6267\u884c\u786e\u8ba4\u56de\u8c03\uff0c\u9ed8\u8ba4\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"confirmOrClose"),"\u3002")))),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c-2"},"\u8fd4\u56de\u503c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Promise<boolean>"),"\uff0c\u662f\u5426\u5173\u95ed\u6210\u529f\u3002")),(0,r.kt)("p",null,"\u6839\u636e\u7a97\u53e3\u540d\u5173\u95ed\u7a97\u53e3\u3002"),(0,r.kt)("h3",{id:"closewindowbyid"},"closeWindowById"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"winService.closeWindowById(id[,options])")),(0,r.kt)("h4",{id:"\u53c2\u6570-3"},"\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"id\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"number"),"\uff0c\u7a97\u53e3 ID\u3002"),(0,r.kt)("li",{parentName:"ul"},"[options]","\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"object"),"\uff0c\u5173\u95ed\u6a21\u5f0f\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"[closeMode]","\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"'close' | 'confirmOrClose'"),"\uff0c\u5f53 ",(0,r.kt)("inlineCode",{parentName:"li"},"closeMode=close")," \u65f6\uff0c\u4f1a\u76f4\u63a5\u5173\u95ed\uff0c\u5ffd\u7565\u56de\u8c03\u3002\u5f53 ",(0,r.kt)("inlineCode",{parentName:"li"},"closeMode=confirmOrClose"),"\uff0c\u5982\u679c\u6709\u786e\u8ba4\u56de\u8c03\uff0c\u4f1a\u6267\u884c\u786e\u8ba4\u56de\u8c03\uff0c\u9ed8\u8ba4\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"confirmOrClose"),"\u3002")))),(0,r.kt)("h4",{id:"\u9ed8\u8ba4\u503c"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Promise<boolean>"),"\uff0c\u662f\u5426\u5173\u95ed\u6210\u529f\u3002")),(0,r.kt)("p",null,"\u6839\u636e\u7a97\u53e3 ID \u5173\u95ed\u7a97\u53e3\u3002"),(0,r.kt)("h3",{id:"closecurrentwindow"},"closeCurrentWindow"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"winService.closeCurrentWindow()")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c-3"},"\u8fd4\u56de\u503c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Promise<boolean>"),"\uff0c\u662f\u5426\u5173\u95ed\u6210\u529f\u3002")),(0,r.kt)("p",null,"\u5173\u95ed\u5f53\u524d\u7a97\u53e3\u3002"),(0,r.kt)("h3",{id:"callotherwindow"},"callOtherWindow"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"winService.callOtherWindow(receiver,funcName[,...args])")),(0,r.kt)("h4",{id:"\u53c2\u6570-4"},"\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"receiver\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"string | number")," \u7a97\u53e3\u7684 ID \u6216\u8005\u7a97\u53e3\u7684\u540d\u5b57\u3002"),(0,r.kt)("li",{parentName:"ul"},"funcName\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"string")," \u8bbf\u95ee\u7684\u670d\u52a1\u7684\u51fd\u6570\u540d\u3002"),(0,r.kt)("li",{parentName:"ul"},"[args]","\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"any[]")," \u8bbf\u95ee\u670d\u52a1\u51fd\u6570\u7684\u53c2\u6570\u3002")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c-4"},"\u8fd4\u56de\u503c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Promise<any>")," \u670d\u52a1\u8bbf\u95ee\u7ed3\u679c\u3002")),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u8b66\u544a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"li"},"receiver")," \u4e3a\u7a97\u53e3\u540d\uff0c\u5e76\u4e14\u540c\u540d\u7a97\u53e3\u6253\u5f00\u591a\u4e2a\uff0c\u6b64\u65f6 ",(0,r.kt)("inlineCode",{parentName:"li"},"callBrowserWindow")," \u7684\u8fd4\u56de\u503c\u4e3a\u6570\u7ec4\uff0c\u6bcf\u4e00\u9879\u8868\u793a\u6bcf\u4e00\u4e2a\u7a97\u53e3\u7684\u6267\u884c\u7ed3\u679c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u6709\u4e14\u4ec5\u6709\u4e00\u4e2a\u7a97\u53e3\u7684\u65f6\u5019\uff0c\u8fd4\u56de\u7ed3\u679c\u4ec5\u4ec5\u4e3a\u8be5\u7a97\u53e3\u7684\u51fd\u6570\u6267\u884c\u7ed3\u679c\uff0c\u4e0d\u662f\u6570\u7ec4\u3002")))),(0,r.kt)("h3",{id:"registerbeforeclose"},"registerBeforeClose"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"winService.registerBeforeClose(callback)")),(0,r.kt)("h4",{id:"\u53c2\u6570-5"},"\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"callback\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"(reason: Object) => boolean | Promise<boolean>"),"\uff0c\u7a97\u53e3\u5173\u95ed\u524d\u786e\u8ba4\u56de\u8c03\uff0c\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," \u5219\u53d6\u6d88\u5173\u95ed\uff0c\u5426\u5219\u7ee7\u7eed\u5173\u95ed\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"reason\uff1aObject\uff0c\u5173\u95ed\u539f\u56e0\u3002")))),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c-5"},"\u8fd4\u56de\u503c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDisposable"),"\uff0c\u8fd4\u56de\u6d88\u606f\u76d1\u542c\u5f15\u7528\uff0c\u53ef\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},".dispose()")," \u89e3\u9664\u76d1\u542c\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export enum CloseReason {\n  /** Window is closed */\n  CLOSE = 1,\n\n  /** Application is quit */\n  QUIT = 2,\n\n  /** Window is reloaded */\n  RELOAD = 3,\n\n  /** Other configuration loaded into window */\n  LOAD = 4,\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7a97\u53e3\u5173\u95ed\u524d\uff0c\u53ef\u6ce8\u518c\u786e\u8ba4\u5173\u95ed\u51fd\u6570\uff0c\u6839\u636e\u8fd4\u56de\u7ed3\u679c\u51b3\u5b9a\u7a97\u53e3\u662f\u5426\u5173\u95ed\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u6ce8\u518c\u591a\u4e2a\u4e8b\u4ef6\uff0c\u82e5\u6709\u4e00\u4e2a\u4e8b\u4ef6\u53d6\u6d88\u5173\u95ed\uff0c\u5219\u7a97\u53e3\u4e0d\u518d\u5173\u95ed\u3002")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/docs/guides/features/electron/win-manager/close-window#%E5%BF%BD%E7%95%A5%E6%89%80%E6%9C%89%E5%9B%9E%E8%B0%83%E7%9B%B4%E6%8E%A5%E5%85%B3%E9%97%AD%E7%AA%97%E5%8F%A3"},(0,r.kt)("inlineCode",{parentName:"a"},"registerBeforeClose")," \u793a\u4f8b"),"\u3002"))),(0,r.kt)("h3",{id:"registerwillclose"},"registerWillClose"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"winService.registerWillClose(callback)")),(0,r.kt)("h4",{id:"\u53c2\u6570-6"},"\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"callback\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"(reason: CloseReason) => boolean | Promise<boolean>"),"\uff0c\u5373\u5c06\u5173\u95ed\u7a97\u53e3\u5904\u7406\u51fd\u6570\u3002")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c-6"},"\u8fd4\u56de\u503c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDisposable"),"\uff0c\u8fd4\u56de\u6d88\u606f\u76d1\u542c\u5f15\u7528\uff0c\u53ef\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},".dispose()")," \u89e3\u9664\u76d1\u542c\u3002")),(0,r.kt)("p",null,"\u7a97\u53e3\u5373\u5c06\u5173\u95ed\uff0c\u6ce8\u518c\u5173\u95ed\u524d\u6536\u5c3e\u5de5\u4f5c\u51fd\u6570\uff0c\u4e0d\u80fd\u963b\u6b62\u7a97\u53e3\u5173\u95ed\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/docs/guides/features/electron/win-manager/close-window#%E7%AA%97%E5%8F%A3%E5%85%B3%E9%97%AD%E5%89%8D%E5%81%9A%E4%B8%80%E4%BA%9B%E6%94%B6%E5%B0%BE%E5%B7%A5%E4%BD%9C"},(0,r.kt)("inlineCode",{parentName:"a"},"registerWillClose")," \u793a\u4f8b"),"\u3002"))),(0,r.kt)("h3",{id:"registerservices"},"registerServices"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"winService.registerServices(services)")),(0,r.kt)("h4",{id:"\u53c2\u6570-7"},"\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"services\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"{ [key: string]: unknown }"),"\uff0c\u9700\u8981\u6ce8\u518c\u7684\u670d\u52a1\u3002")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c-7"},"\u8fd4\u56de\u503c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void"),"\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"  registerServices(services: { [key: string]: unknown }): void;\n")),(0,r.kt)("p",null,"\u6ce8\u518c\u670d\u52a1\uff0c\u4f9b\u5176\u4f59\u7a97\u53e3\u8bbf\u95ee\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u66f4\u591a\u5173\u4e8e\u670d\u52a1\u6ce8\u518c\uff1a",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/features/electron/ipc/regist-services/render"},"\u53cc\u5411\u901a\u4fe1"),"\u3002"))),(0,r.kt)("h3",{id:"onmessage"},"onMessage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"winService.onMessage(channel)")),(0,r.kt)("h4",{id:"\u53c2\u6570-8"},"\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"channel\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u9891\u9053\u540d\u3002")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c-8"},"\u8fd4\u56de\u503c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"object"),"\uff0c\u8fd4\u56de\u4ec5\u76d1\u542c channel \u9891\u9053\u7684\u4e8b\u4ef6\u76d1\u542c\u5668\u3002")),(0,r.kt)("p",null,"\u8fd4\u56de\u4ec5\u76d1\u542c channel \u9891\u9053\u7684\u4e8b\u4ef6\u76d1\u542c\u5668\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u66f4\u591a\u5173\u4e8e\u670d\u52a1\u6ce8\u518c\uff1a",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/features/electron/ipc/regist-services/render"},"\u53cc\u5411\u901a\u4fe1"),"\u3002"))),(0,r.kt)("h3",{id:"disposewebviewconnection"},"disposeWebviewConnection"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"winService.disposeWebviewConnection(webviewIds)")),(0,r.kt)("h4",{id:"\u53c2\u6570-9"},"\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"webviewIds\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"string[]"),"\uff0c\u6240\u6709 webview \u7684 ID\u3002")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c-9"},"\u8fd4\u56de\u503c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Promise<void>"),"\u3002")),(0,r.kt)("p",null,"\u5173\u95ed\u6240\u6709 webview \u4e0e\u4e3b\u8fdb\u7a0b\u7684\u901a\u4fe1\u8fde\u63a5\u3002\u8fd9\u4e00\u822c\u4f1a\u5728\u7ec4\u4ef6\u5199\u5728\u524d\u6267\u884c\u3002\u7a97\u53e3\u5173\u95ed\u65f6\uff0c\u4f1a\u9ed8\u8ba4\u6267\u884c\u6b64\u903b\u8f91\u3002"),(0,r.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import  { winService } from '@modern-js/runtime/electron-render';\n...\n\n// \u5411\u7a97\u53e3 main \u53d1\u9001\u6d88\u606f `{data: \"hello\"}` \u5230 `msgChannel` \u9891\u9053\u3002\nwinService.callOtherWindow('main', 'msgChannel', {data: \"hello\"});\n\n// \u5411\u6240\u6709\u7a97\u53e3\u53d1\u9001\u6d88\u606f `{data: \"hello\"}` \u5230 `msgChannel` \u9891\u9053\u3002\nwinService.broadCast('msgChannel', {data: \"hello\"});\n\n// \u76d1\u542c 'ON_HELLO' \u9891\u9053\u6d88\u606f\nconst onHello = winService.onMessage('ON_HELLO');\nconst listener = onHello((msg) => { console.log('handle onHello ') });\n\n// \u6ce8\u518c\u670d\u52a1\nwinService.registerServices({\n  readFile: () => {\n    console.log('read file');\n  }\n});\n\n// \u5173\u95ed\u5f53\u524d\u7a97\u53e3\nwinService.closeCurrentWindow();\n\n")),(0,r.kt)("h4",{id:"\u7a97\u53e3\u5373\u5c06\u5173\u95ed\u662f\u5426\u7ee7\u7eed\u5173\u95ed"},"\u7a97\u53e3\u5373\u5c06\u5173\u95ed\uff0c\u662f\u5426\u7ee7\u7eed\u5173\u95ed\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// \u7a97\u53e3\u5373\u5c06\u5173\u95ed\uff0c\u662f\u5426\u7ee7\u7eed\u5173\u95ed\nconst onBeforeCloseListener = winService.registerBeforeClose(\n  () => {\n    return new Promise((resolve, reject) => {\n      Modal.confirm({\n        title: '\u786e\u5b9a\u8981\u9000\u51fa\u5e94\u7528\u5417',\n        okText: '\u9000\u51fa',\n        cancelText: '\u53d6\u6d88',\n        icon: null,\n        async onOk() {\n          return resolve(false);\n        },\n        onCancel() {\n          return resolve(true);\n        },\n      });\n    });\n  }\n);\n\nonBeforeCloseListener.dispose();\n\n")),(0,r.kt)("h4",{id:"\u7a97\u53e3\u5373\u5c06\u5173\u95ed\u4f60\u53ef\u4ee5\u505a\u4e00\u4e9b\u4e8b\u60c5\u5e76\u7b49\u5f85\u4f60\u5b8c\u6210\u540e\u4f1a\u5173\u95ed\u7a97\u53e3"},"\u7a97\u53e3\u5373\u5c06\u5173\u95ed\uff0c\u4f60\u53ef\u4ee5\u505a\u4e00\u4e9b\u4e8b\u60c5\uff0c\u5e76\u7b49\u5f85\u4f60\u5b8c\u6210\u540e\uff0c\u4f1a\u5173\u95ed\u7a97\u53e3\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const willCloseListener = windowService.registerWillClose(() => {\n    console.log('I can do something before close');\n    return Promise.resolve();\n});\n\nwillCloseListener.dispose();\n")))}m.isMDXComponent=!0}}]);