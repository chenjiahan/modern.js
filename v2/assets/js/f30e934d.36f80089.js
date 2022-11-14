"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3069],{44993:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>g});var t=r(52983);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(r),g=o,f=d["".concat(l,".").concat(g)]||d[g]||s[g]||a;return r?t.createElement(f,i(i({ref:n},c),{},{components:r})):t.createElement(f,i({ref:n},c))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73891:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var t=r(18249),o=(r(52983),r(44993));const a={sidebar_position:1},i="OnForged",p={unversionedId:"apis/generator/plugin/hook/onForged",id:"apis/generator/plugin/hook/onForged",title:"OnForged",description:"onForged \u51fd\u6570\u4e3a\u751f\u6210\u5668\u63d2\u4ef6\u751f\u547d\u5468\u671f\u51fd\u6570\uff0c\u5176\u901a\u5e38\u7528\u4e8e\u5b9a\u4e49\u6587\u4ef6\u7c7b\u578b\u64cd\u4f5c\uff0c\u8fd9\u4e9b\u64cd\u4f5c\u5c06\u5728 base \u7684\u5de5\u7a0b\u65b9\u6848\u6587\u4ef6\u64cd\u4f5c\u5b8c\u6210\u540e\u8fdb\u884c\u3002",source:"@site/docs/apis/generator/plugin/hook/onForged.md",sourceDirName:"apis/generator/plugin/hook",slug:"/apis/generator/plugin/hook/onForged",permalink:"/v2/docs/apis/generator/plugin/hook/onForged",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"apisGeneratorSidebar",previous:{title:"readDir",permalink:"/v2/docs/apis/generator/plugin/info/readDir"},next:{title:"AfterForged",permalink:"/v2/docs/apis/generator/plugin/hook/afterForged"}},l={},u=[{value:"func",id:"func",level:2},{value:"api",id:"api",level:3},{value:"inputData",id:"inputdata",level:3}],c={toc:u};function s(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"onforged"},"OnForged"),(0,o.kt)("p",null,"onForged \u51fd\u6570\u4e3a\u751f\u6210\u5668\u63d2\u4ef6\u751f\u547d\u5468\u671f\u51fd\u6570\uff0c\u5176\u901a\u5e38\u7528\u4e8e\u5b9a\u4e49\u6587\u4ef6\u7c7b\u578b\u64cd\u4f5c\uff0c\u8fd9\u4e9b\u64cd\u4f5c\u5c06\u5728 base \u7684\u5de5\u7a0b\u65b9\u6848\u6587\u4ef6\u64cd\u4f5c\u5b8c\u6210\u540e\u8fdb\u884c\u3002"),(0,o.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u76f4\u63a5\u5728 context \u4e0a\u83b7\u53d6\u3002"),(0,o.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export type PluginForgedFunc = (\n  api: ForgedAPI,\n  inputData: Record<string, unknown>,\n) => void | Promise<void>;\n\nexport interface IPluginContext {\n  onForged: (func: PluginForgedFunc) => void;\n  ...\n}\n")),(0,o.kt)("h2",{id:"func"},"func"),(0,o.kt)("p",null,"onForged \u53c2\u6570\u662f\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u51fd\u6570\u53c2\u6570\u4e3a api \u548c inputData\u3002"),(0,o.kt)("h3",{id:"api"},"api"),(0,o.kt)("p",null,"\u5728 onForged \u751f\u547d\u5468\u671f\u4e2d\u652f\u6301\u7684\u51fd\u6570\u5217\u8868\uff0c\u5177\u4f53\u53ef\u67e5\u770b",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/generator/plugin/file/introduce"},"\u6587\u4ef6\u64cd\u4f5c API")," \u548c",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/generator/plugin/new/introduce"},"\u542f\u7528\u529f\u80fd API"),"\u3002"),(0,o.kt)("h3",{id:"inputdata"},"inputData"),(0,o.kt)("p",null,"\u5f53\u524d\u7528\u6237\u8f93\u5165\uff0c\u53ef\u7528\u4e8e\u83b7\u53d6\u7528\u6237\u5f53\u524d\u7684\u8f93\u5165\u4fe1\u606f\u53ca\u914d\u7f6e\u4fe1\u606f\u3002"))}s.isMDXComponent=!0}}]);