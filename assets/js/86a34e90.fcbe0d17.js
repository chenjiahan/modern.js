"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[515],{54852:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(49231);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(86215),i=(n(49231),n(54852));const o={title:"config/public/",sidebar_position:3},a=void 0,p={unversionedId:"apis/hooks/mwa/config/public",id:"apis/hooks/mwa/config/public",title:"config/public/",description:"\u5e94\u7528\u5de5\u7a0b\u65b9\u6848\u9759\u6001\u8d44\u6e90\u6587\u4ef6\u3002",source:"@site/docs/apis/hooks/mwa/config/public.md",sourceDirName:"apis/hooks/mwa/config",slug:"/apis/hooks/mwa/config/public",permalink:"/docs/apis/hooks/mwa/config/public",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"config/public/",sidebar_position:3},sidebar:"apisSidebar",previous:{title:"config/icon.png",permalink:"/docs/apis/hooks/mwa/config/icon"},next:{title:"config/upload/",permalink:"/docs/apis/hooks/mwa/config/upload"}},l={},c=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u573a\u666f",id:"\u573a\u666f",level:2},{value:"\u4ee3\u7801\u538b\u7f29",id:"\u4ee3\u7801\u538b\u7f29",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5e94\u7528\u5de5\u7a0b\u65b9\u6848\u9759\u6001\u8d44\u6e90\u6587\u4ef6\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"public/")," \u76ee\u5f55\u4e2d\u53ef\u4ee5\u653e\u7f6e\u4efb\u610f\u683c\u5f0f\u7684\u9759\u6001\u8d44\u6e90\u6587\u4ef6\uff0c\u6587\u4ef6\u4f1a\u88ab Serve \u5728 Web \u5e94\u7528\u57df\u540d\u4e0b\u3002"),(0,i.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,i.kt)("p",null,"\u88ab Serve \u7684\u6587\u4ef6\u8def\u7531\u57fa\u4e8e\u76ee\u5f55\u7ed3\u6784\u7684\u7ea6\u5b9a\uff0c\u5176\u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"public/")," \u4e3a\u6839\u76ee\u5f55\uff0c\u5bf9\u5e94 Web \u5e94\u7528\u6839\u57df\u540d\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"config/public/sdk/index.js")," \u6587\u4ef6\uff0c\u5728\u90e8\u7f72\u540e\u5c06\u4f1a\u88ab Serve \u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"${domain}/sdk/index.js")," \u4e0b\u3002"),(0,i.kt)("h2",{id:"\u573a\u666f"},"\u573a\u666f"),(0,i.kt)("p",null,"\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"robots.txt"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"auth.xml")," \u7b49\u7b2c\u4e09\u65b9\u7cfb\u7edf\u9700\u8981\u7684\u8ba4\u8bc1\u6587\u4ef6\u3002"),(0,i.kt)("p",null,"\u6216\u8005\u662f\u7ed9\u5176\u4ed6\u4e1a\u52a1\u65b9\uff08\u8981\u6c42\u8def\u7531\u4e0d\u53d8\uff09\u7684 SDK\uff0c\u4e5f\u53ef\u4ee5\u662f\u65e0\u9700\u5165\u53e3\u7684 HTML \u6587\u4ef6\u7b49\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5bf9\u4e8e\u9700\u8981\u5728\u6e90\u7801\u4e2d\u901a\u8fc7 import \u5f15\u7528\u7684\u9759\u6001\u8d44\u6e90\uff08\u6bd4\u5982 SVG \u56fe\u7247\uff09\uff0c\u5efa\u8bae\u653e\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/assets")," \u76ee\u5f55\u4e0b\u8fdb\u884c\u7ba1\u7406\u3002"))),(0,i.kt)("h2",{id:"\u4ee3\u7801\u538b\u7f29"},"\u4ee3\u7801\u538b\u7f29"),(0,i.kt)("p",null,"\u5982\u679c\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u662f\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},".js")," \u6587\u4ef6\uff0c\u5728\u751f\u4ea7\u73af\u5883\u6784\u5efa\u65f6\uff0c\u4f1a\u81ea\u52a8\u5bf9\u5176\u8fdb\u884c\u4ee3\u7801\u538b\u7f29\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u8be5\u6587\u4ef6\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},".min.js")," \u7ed3\u5c3e\uff0c\u5219\u4e0d\u4f1a\u7ecf\u8fc7\u4ee3\u7801\u538b\u7f29\u5904\u7406\u3002"))}u.isMDXComponent=!0}}]);