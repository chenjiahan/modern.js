"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8828],{44993:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,m=f["".concat(u,".").concat(d)]||f[d]||c[d]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},17055:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(18249),a=(n(52983),n(44993));const o={sidebar_position:7},i="setInputValue",p={unversionedId:"apis/generator/plugin/input/setInputValue",id:"apis/generator/plugin/input/setInputValue",title:"setInputValue",description:"\u8bbe\u7f6e\u8f93\u5165\u9ed8\u8ba4\u503c\u3002",source:"@site/docs/apis/generator/plugin/input/setInputValue.md",sourceDirName:"apis/generator/plugin/input",slug:"/apis/generator/plugin/input/setInputValue",permalink:"/v2/docs/apis/generator/plugin/input/setInputValue",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"apisGeneratorSidebar",previous:{title:"addOptionAfter",permalink:"/v2/docs/apis/generator/plugin/input/addOptionAfter"},next:{title:"locale",permalink:"/v2/docs/apis/generator/plugin/info/locale"}},u={},l=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],s={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setinputvalue"},"setInputValue"),(0,a.kt)("p",null,"\u8bbe\u7f6e\u8f93\u5165\u9ed8\u8ba4\u503c\u3002"),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u76f4\u63a5\u5728 context \u4e0a\u83b7\u53d6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IPluginContext {\n    setInputValue: (value: Record<string, unknown>) => void;\n  ...\n}\n")),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"context.setInputValue({\n  moduleRunWay: 'no',\n});\n")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"\u8be5\u65b9\u6cd5\u53ea\u652f\u6301\u8bbe\u7f6e\u751f\u6210\u5668\u63d2\u4ef6\u96c6\u6210\u7684\u5de5\u7a0b\u65b9\u6848\u5bf9\u5e94\u7684\u914d\u7f6e\u53c2\u6570\u503c\uff0c\u4e0d\u652f\u6301\u8bbe\u7f6e\u5de5\u7a0b\u65b9\u6848\u7c7b\u578b(solution)\u548c\u9879\u76ee\u573a\u666f(scenes)\uff0c\u8fd9\u4e24\u4e2a\u914d\u7f6e\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u65f6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"--config")," \u53c2\u6570\u8bbe\u7f6e\u9ed8\u8ba4\u503c\u3002")))}c.isMDXComponent=!0}}]);