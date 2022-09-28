"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7666],{57522:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(29901);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(t),m=i,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return t?n.createElement(d,a(a({ref:r},s),{},{components:t})):n.createElement(d,a({ref:r},s))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},76780:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(18249),i=(t(29901),t(57522));const o={sidebar_position:9},a="rmFile",l={unversionedId:"apis/generator/plugin/file/rmFile",id:"apis/generator/plugin/file/rmFile",title:"rmFile",description:"\u5220\u9664\u6587\u4ef6\u3002",source:"@site/docs/apis/generator/plugin/file/rmFile.md",sourceDirName:"apis/generator/plugin/file",slug:"/apis/generator/plugin/file/rmFile",permalink:"/docs/apis/generator/plugin/file/rmFile",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"apisGeneratorSidebar",previous:{title:"updateModernConfig",permalink:"/docs/apis/generator/plugin/file/updateModernConfig"},next:{title:"rmDir",permalink:"/docs/apis/generator/plugin/file/rmDir"}},p={},c=[{value:"fileName",id:"filename",level:2}],s={toc:c};function u(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rmfile"},"rmFile"),(0,i.kt)("p",null,"\u5220\u9664\u6587\u4ef6\u3002"),(0,i.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u7528\u4e8e\u4efb\u4f55\u6587\u4ef6\u7c7b\u578b\u3002"),(0,i.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u5728 onForged \u751f\u547d\u5468\u671f\u7684 api \u53c2\u6570\u4e0a\u83b7\u53d6\u3002"),(0,i.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export type ForgedAPI = {\n  rmFile: (fileName: string) => Promise<void>;\n  ...\n};\n")),(0,i.kt)("h2",{id:"filename"},"fileName"),(0,i.kt)("p",null,"\u9700\u5220\u9664\u7684\u6587\u4ef6\u540d\u79f0\u6216\u6587\u4ef6\u8def\u5f84\u3002"))}u.isMDXComponent=!0}}]);