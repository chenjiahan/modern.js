"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6303],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(52983);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,f=d["".concat(l,".").concat(g)]||d[g]||s[g]||a;return n?r.createElement(f,p(p({ref:t},c),{},{components:n})):r.createElement(f,p({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var u=2;u<a;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(18249),i=(n(52983),n(44993));const a={sidebar_position:4},p="setInput",o={unversionedId:"guides/topic-detail/generator/plugin/api/input/setInput",id:"guides/topic-detail/generator/plugin/api/input/setInput",title:"setInput",description:"\u8bbe\u7f6e\u95ee\u9898\u5c5e\u6027\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/input/setInput.md",sourceDirName:"guides/topic-detail/generator/plugin/api/input",slug:"/guides/topic-detail/generator/plugin/api/input/setInput",permalink:"/v2/docs/guides/topic-detail/generator/plugin/api/input/setInput",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guidesSidebar",previous:{title:"addInputAfter",permalink:"/v2/docs/guides/topic-detail/generator/plugin/api/input/addInputAfter"},next:{title:"setInputValue",permalink:"/v2/docs/guides/topic-detail/generator/plugin/api/input/setInputValue"}},l={},u=[{value:"key",id:"key",level:2},{value:"filed",id:"filed",level:2},{value:"value",id:"value",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setinput"},"setInput"),(0,i.kt)("p",null,"\u8bbe\u7f6e\u95ee\u9898\u5c5e\u6027\u3002"),(0,i.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u76f4\u63a5\u5728 context \u4e0a\u83b7\u53d6\u3002"),(0,i.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IPluginContext {\n  setInput: (key: string, field: string, value: unknown) => void;\n  ...\n}\n")),(0,i.kt)("h2",{id:"key"},"key"),(0,i.kt)("p",null,"\u95ee\u9898\u5173\u952e\u5b57\uff0c\u53ef\u4ee5\u4e3a Modern.js \u5de5\u7a0b\u65b9\u6848\u7684\u95ee\u9898\u5173\u952e\u5b57\uff0c\u4e5f\u53ef\u4ee5\u4e3a\u751f\u6210\u5668\u63d2\u4ef6\u4e2d\u65b0\u589e\u95ee\u9898\u7684\u5173\u952e\u5b57\u3002"),(0,i.kt)("h2",{id:"filed"},"filed"),(0,i.kt)("p",null,"\u9700\u8bbe\u7f6e\u7684\u95ee\u9898\u5b57\u6bb5\uff0c\u53ef\u4fee\u6539\u9664\u4e86\u5f53\u524d Input \u9664 key \u4ee5\u5916\u7684\u5176\u4ed6\u5b57\u6bb5\uff0cInput \u5177\u4f53\u7c7b\u578b\u5b9a\u4e49\u53ef\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/generator/plugin/api/input/type"},"\u81ea\u5b9a\u4e49\u8f93\u5165\u76f8\u5173\u7c7b\u578b\u5b9a\u4e49"),"\u3002"),(0,i.kt)("h2",{id:"value"},"value"),(0,i.kt)("p",null,"\u9700\u8bbe\u7f6e\u7684\u95ee\u9898\u5b57\u6bb5\u503c\u3002value \u652f\u6301\u51fd\u6570\uff0c\u51fd\u6570\u53c2\u6570\u4e3a\u5f53\u524d\u5b57\u6bb5\u503c\uff0c\u8fd4\u56de\u503c\u9700\u8981\u4e3a\u5b8c\u6574\u7684\u65b0\u7684\u5b57\u6bb5\u503c\u3002"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e Modern.js \u5de5\u7a0b\u7c7b\u578b\u63d0\u4f9b\u7684\u8f93\u5165\u9009\u9879\uff0c\u6682\u65f6\u53ea\u652f\u6301\u5220\u9664\uff0c\u4e0d\u652f\u6301\u589e\u52a0\uff0c\u589e\u52a0\u4f1a\u9020\u6210\u4ee3\u7801\u4e2d\u7684\u903b\u8f91\u5224\u65ad\u5b58\u5728\u95ee\u9898\u3002")),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("p",null,"\u4fee\u6539 packageName \u7684\u5c55\u793a\u540d\u79f0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"context.setInput('packageName', 'title', \"\u5c55\u793a\u540d\u79f0\");\n")))}s.isMDXComponent=!0}}]);