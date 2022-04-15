"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7215],{54852:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return c}});var a=t(49231);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(t),c=i,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||r;return t?a.createElement(k,l(l({ref:n},s),{},{components:t})):a.createElement(k,l({ref:n},s))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12619:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var a=t(14380),i=t(8240),r=(t(49231),t(54852)),l=["components"],o={sidebar_position:6},p="\u6784\u5efa",d={unversionedId:"guides/features/electron/pack",id:"guides/features/electron/pack",title:"\u6784\u5efa",description:"\u5728 Electron \u4e2d\uff0c\u4e00\u822c\u6784\u5efa\u6d41\u7a0b\u5982\u4e0b\uff1a\u6784\u5efa\u6e32\u67d3\u8fdb\u7a0b\u3001\u6784\u5efa\u4e3b\u8fdb\u7a0b\u3001\u6784\u5efa\u5e94\u7528\u3002",source:"@site/docs/guides/features/electron/pack.md",sourceDirName:"guides/features/electron",slug:"/guides/features/electron/pack",permalink:"/docs/guides/features/electron/pack",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"guidesSidebar",previous:{title:"\u5173\u95ed\u7a97\u53e3",permalink:"/docs/guides/features/electron/win-manager/close-window"},next:{title:"\u5347\u7ea7",permalink:"/docs/guides/features/electron/upgrade"}},s={},u=[{value:"\u6784\u5efa\u4e3b\u8fdb\u7a0b",id:"\u6784\u5efa\u4e3b\u8fdb\u7a0b",level:2},{value:"\u6784\u5efa\u547d\u4ee4",id:"\u6784\u5efa\u547d\u4ee4",level:3},{value:"\u5173\u4e8e\u4e3b\u8fdb\u7a0b\u7684\u6784\u5efa",id:"\u5173\u4e8e\u4e3b\u8fdb\u7a0b\u7684\u6784\u5efa",level:3},{value:"\u6784\u5efa\u6e32\u67d3\u8fdb\u7a0b",id:"\u6784\u5efa\u6e32\u67d3\u8fdb\u7a0b",level:2},{value:"\u6784\u5efa\u547d\u4ee4",id:"\u6784\u5efa\u547d\u4ee4-1",level:3},{value:"\u5173\u4e8e\u6e32\u67d3\u8fdb\u7a0b\u6784\u5efa",id:"\u5173\u4e8e\u6e32\u67d3\u8fdb\u7a0b\u6784\u5efa",level:3},{value:"\u6784\u5efa\u5e94\u7528",id:"\u6784\u5efa\u5e94\u7528",level:2},{value:"\u6784\u5efa\u547d\u4ee4",id:"\u6784\u5efa\u547d\u4ee4-2",level:3},{value:"\u6784\u5efa\u914d\u7f6e",id:"\u6784\u5efa\u914d\u7f6e",level:3},{value:"\u6784\u5efa\u57fa\u7840\u914d\u7f6e\u8bb2\u89e3",id:"\u6784\u5efa\u57fa\u7840\u914d\u7f6e\u8bb2\u89e3",level:3},{value:"<code>extraMetadata</code>",id:"extrametadata",level:4},{value:"<code>appId</code>",id:"appid",level:4},{value:"<code>artifactName</code>",id:"artifactname",level:4},{value:"<code>directories.app</code>",id:"directoriesapp",level:4},{value:"<code>files</code>",id:"files",level:4}],m={toc:u};function c(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6784\u5efa"},"\u6784\u5efa"),(0,r.kt)("p",null,"\u5728 Electron \u4e2d\uff0c\u4e00\u822c\u6784\u5efa\u6d41\u7a0b\u5982\u4e0b\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u6784\u5efa\u6e32\u67d3\u8fdb\u7a0b"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"\u6784\u5efa\u4e3b\u8fdb\u7a0b"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"\u6784\u5efa\u5e94\u7528"),"\u3002"),(0,r.kt)("h2",{id:"\u6784\u5efa\u4e3b\u8fdb\u7a0b"},"\u6784\u5efa\u4e3b\u8fdb\u7a0b"),(0,r.kt)("h3",{id:"\u6784\u5efa\u547d\u4ee4"},"\u6784\u5efa\u547d\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  "script": {\n    "build:main": "modern build electron-main"\n  }\n}\n')),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u8b66\u544a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u65e0\u8bba\u662f\u5728\u54ea\u79cd\u9879\u76ee\u4e2d\uff0c\u6211\u4eec\u90fd\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," \u4e2d\u914d\u7f6e\uff1amain \u5b57\u6bb5\uff0c\u6307\u5b9a\u6253\u5305\u540e\u4e3b\u8fdb\u7a0b\u5165\u53e3\u6587\u4ef6\u5730\u5740\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u6b64\u9879\u76ee\u4e2d\uff0c\u9ed8\u8ba4\u6784\u5efa\u540e\u7684\u4e3b\u8fdb\u7a0b\u5165\u53e3\u5730\u5740\u5728\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"electron/main.js"),"\u3002")))),(0,r.kt)("h3",{id:"\u5173\u4e8e\u4e3b\u8fdb\u7a0b\u7684\u6784\u5efa"},"\u5173\u4e8e\u4e3b\u8fdb\u7a0b\u7684\u6784\u5efa"),(0,r.kt)("p",null,"\u4e3b\u8fdb\u7a0b\u7684\u6784\u5efa\u4e0d\u4f1a\u91c7\u7528 Webpack \u6253\u5305\u538b\u7f29\u6210\u5355\u4e2a bundle, \u4e3b\u8981\u539f\u56e0\u662f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u7ef4\u6301\u6587\u4ef6\u7ed3\u6784\u4f1a\u5e26\u6765\u5f88\u591a\u8def\u5f84\u95ee\u9898\u3002\u6bd4\u5982\uff1a\u5f53\u4f60\u4f7f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"li"},".node")," \u6587\u4ef6\uff0c\u5219\u53ef\u80fd\u9700\u8981\u81ea\u5df1\u5199 Webpack \u63d2\u4ef6\u6765\u5904\u7406\u76f8\u5173\u7684 Node \u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"require(xxx)"),"\u52a8\u6001\u5f15\u5165\u5728\u5355\u6587\u4ef6 bundle \u7684\u5f62\u5f0f\u4e0b\uff0c\u5c06\u4f1a\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\u3002")),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u4eec\u7ef4\u6301\u4e86\u4e3b\u8fdb\u7a0b\u7684\u6587\u4ef6\u7ed3\u6784\uff0c\u5e76\u4e14\u4f1a\u5bf9\u5176\u4e2d\u7684\u4ee3\u7801\u8fdb\u884c\uff1aBabel \u7f16\u8bd1\u3001\u6df7\u6dc6\u3001\u538b\u7f29\u5904\u7406\uff0c\u540c\u65f6\u4e5f\u4fdd\u7559\u4e86\u5bf9\u73af\u5883\u53d8\u91cf\u7684\u652f\u6301\u3002"),(0,r.kt)("p",null,"\u8fd9\u6837\uff0c\u7ef4\u6301\u4e86 Node \u9879\u76ee\u7684\u6587\u4ef6\u7ed3\u6784\uff0c\u6784\u5efa\u524d\u540e\u7684\u4ee3\u7801\u65e0\u9700\u505a\u7279\u6b8a\u5904\u7406\u3001\u51cf\u5c11\u4e86\u5f00\u53d1\u8005\u7684\u5fc3\u667a\u8d1f\u62c5\u3001\u66f4\u6709\u5229\u4e8e\u4ee3\u7801\u7684\u7ef4\u62a4\u3002"),(0,r.kt)("h2",{id:"\u6784\u5efa\u6e32\u67d3\u8fdb\u7a0b"},"\u6784\u5efa\u6e32\u67d3\u8fdb\u7a0b"),(0,r.kt)("h3",{id:"\u6784\u5efa\u547d\u4ee4-1"},"\u6784\u5efa\u547d\u4ee4"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6b64\u5904\u4ec5\u4ee5 Modern.js \u4e3a\u4f8b\uff0c\u5176\u4f59\u8bf7\u770b\u4e0b\u9762\u7684\u201c\u5173\u4e8e\u6e32\u67d3\u8fdb\u7a0b\u7684\u6784\u5efa\u201d\u8bb2\u89e3\u3002"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5173\u95ed Node \u96c6\u6210\u7684\u6784\u5efa\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  "script": {\n    "build:": "modern build"\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f00\u542f Node \u96c6\u6210\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  "script": {\n    "build:": "modern build electron-render"\n  }\n}\n')),(0,r.kt)("h3",{id:"\u5173\u4e8e\u6e32\u67d3\u8fdb\u7a0b\u6784\u5efa"},"\u5173\u4e8e\u6e32\u67d3\u8fdb\u7a0b\u6784\u5efa"),(0,r.kt)("p",null,"\u5728\u6e32\u67d3\u8fdb\u7a0b\u7684\u6784\u5efa\u4e2d\u6709\u4e24\u79cd\u6a21\u5f0f\uff0c\u6bd4\u5982\u4f60\u4f7f\u7528 Webpack \u6784\u5efa\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5173\u95ed Node \u96c6\u6210\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5f00\u542f Node \u96c6\u6210\u3002")),(0,r.kt)("p",null,"\u65e0\u8bba\u54ea\u79cd\u6a21\u5f0f\uff0c\u90fd\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u51e0\u4e2a\u914d\u7f6e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6253\u5305\u540e\u4e00\u822c\u4f1a\u4f7f\u7528\u6587\u4ef6\u534f\u8bae\uff0c\u56e0\u6b64\uff0c\u5efa\u8bae\u6e32\u67d3\u8fdb\u7a0b\u8def\u7531\u5207\u6362\u4e3a\uff1a\u54c8\u5e0c\u8def\u7531\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6253\u5305\u540e\u7684\u9759\u6001\u8d44\u6e90\u975e CDN\uff0c\u56e0\u6b64\uff0c\u5728\u914d\u7f6e\u9759\u6001\u8d44\u6e90\u5730\u5740\u7684\u65f6\u5019\uff0c\u6ce8\u610f\u76f8\u5bf9\u8def\u5f84\u3002\u4e00\u822c\u4f1a\u662f\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"'../../'"),"\u3002")),(0,r.kt)("p",null,"\u5bf9\u4e8e",(0,r.kt)("strong",{parentName:"p"},"\u5f00\u542f Node \u96c6\u6210"),"\uff0c\u4ecd\u7136\u9700\u8981\u505a\u989d\u5916\u7684\u4e8b\u60c5\uff0c\u6bd4\u5982\u4f60\u4f7f\u7528 Webpack\uff0c\u5219\u9700\u8981\u505a\u76f8\u5173\u7684\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'  {\n    "target": "electron-renderer",\n    "node": {\n      "__dirname": false,\n      "__filename": false\n    }\n  }\n')),(0,r.kt)("h2",{id:"\u6784\u5efa\u5e94\u7528"},"\u6784\u5efa\u5e94\u7528"),(0,r.kt)("h3",{id:"\u6784\u5efa\u547d\u4ee4-2"},"\u6784\u5efa\u547d\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  "script": {\n    "build:app": "modern build electron-app"\n  }\n}\n')),(0,r.kt)("h3",{id:"\u6784\u5efa\u914d\u7f6e"},"\u6784\u5efa\u914d\u7f6e"),(0,r.kt)("p",null,"\u4e0e\u6784\u5efa\u76f8\u5173\u7684\u914d\u7f6e\uff0c\u90fd\u5b58\u653e\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"config.electron.build")," \u5b57\u6bb5\u4e2d\u3002"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"builder")," \u8fd9\u4e2a\u914d\u7f6e\u4e0b\u6709\u5982\u4e0b\u4e00\u4e9b\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Configuration } from 'electron-builder';\n\nexport type BuildConfig = {\n  baseConfig: Configuration;\n  macConfig?: Configuration;\n  winConfig?: Configuration;\n  win64Config?: Configuration;\n  linuxConfig?: Configuration;\n};\n")),(0,r.kt)("p",null,"\u6839\u636e\u4e0a\u8ff0\u793a\u4f8b\uff0c\u6211\u4eec\u5bf9 electron-builder \u7684\u914d\u7f6e\u672c\u8eab\u505a\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u6574\u5408\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6240\u6709\u5e73\u53f0\uff08mac\u3001win\u3001linux\uff09\u901a\u7528\u7684 electron-builder \u914d\u7f6e\uff0c\u6211\u4eec\u653e\u5230\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"electron.baseConfig")," \u4e0b\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u4e0d\u540c\u5e73\u53f0\u5404\u81ea\u7279\u6709\u7684\u914d\u7f6e\uff0c\u6211\u4eec\u5206\u522b\u5728\u5bf9\u5e94\u7684 key \u4e0b\u914d\u7f6e\u5373\u53ef\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u4e00\u4e2a key \u4e0b\u9762\u5bf9\u5e94\u7684\uff0c\u90fd\u662f electron-builder \u672c\u8eab\u7684\u914d\u7f6e\uff0c \u8be6\u7ec6\u53ef\u89c1\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://www.electron.build/configuration/configuration"},"Electron Builder \u914d\u7f6e"),"\u3002")),(0,r.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u4f1a\u6839\u636e\u8fd9\u4e9b\u914d\u7f6e\uff0c\u518d\u7ed3\u5408\u6846\u67b6\u5185\u90e8\u9ed8\u8ba4\u7684\u4e00\u4e9b\u7528\u6237\u4e0d\u9700\u8981\u6539\u7684\u914d\u7f6e\uff08\u82e5\u9700\u8981\u4fee\u6539\uff0c\u5219\u76f4\u63a5\u914d\u7f6e\u5c31\u53ef\u8986\u76d6\uff09\uff0c\u8fdb\u884c\u5408\u5e76\u6210\u6700\u7ec8\nelectron-builder \u7684\u914d\u7f6e\u3002"),(0,r.kt)("h3",{id:"\u6784\u5efa\u57fa\u7840\u914d\u7f6e\u8bb2\u89e3"},"\u6784\u5efa\u57fa\u7840\u914d\u7f6e\u8bb2\u89e3"),(0,r.kt)("p",null,"\u5728\u9879\u76ee\u521b\u5efa\u4e4b\u521d\uff0c\u6211\u4eec\u9ed8\u8ba4\u4e86\u6253\u5305\u9700\u8981\u7684\u4e00\u4e9b\u6700\u57fa\u672c\u7684\u914d\u7f6e\uff0c\u653e\u5728\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"baseConfig")," \u91cc\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"  baseConfig: {\n    extraMetadata: {\n      name: 'Demo',\n    },\n    appId: 'com.bytedance.demo',\n    artifactName: 'demo_${env.VERSION}.${ext}',\n    files: [\n      { from: '../assets', to: 'assets' },\n      {\n        from: '.',\n        to: '.',\n        filter: [\n          '!**/*.map',\n          '!**/*.d.ts',\n          '!*.log',\n          '!*.lock'\n          ]\n      },\n    ],\n    directories: {\n      app: 'dist',\n    },\n  }\n")),(0,r.kt)("h4",{id:"extrametadata"},(0,r.kt)("inlineCode",{parentName:"h4"},"extraMetadata")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u914d\u7f6e\u4e0b\u7684\u5b57\u6bb5\uff0c\u6700\u7ec8\u4f1a\u751f\u653e\u5230\u5e94\u7528\u91cc\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u3002\u5176\u4e2d\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," \u5b57\u6bb5\u4f1a\u4f5c\u4e3a\u5e94\u7528\u7684\u540d\u5b57\u3002")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"extraMetadata")," \u5e76\u4e0d\u662f\u5fc5\u987b\u7684\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u628a\u8fd9\u4e9b\u914d\u7f6e\u5199\u5728\u9879\u76ee\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u4e5f\u53ef\u4ee5\u3002"))),(0,r.kt)("h4",{id:"appid"},(0,r.kt)("inlineCode",{parentName:"h4"},"appId")),(0,r.kt)("p",null,"\u5bf9\u4e8e\u6bcf\u4e00\u4e2a\u5e94\u7528\u6765\u8bf4\uff0c\u90fd\u4f1a\u6709\u4e00\u4e2a\u76f8\u5bf9\u552f\u4e00\u7684\u5e94\u7528 ID\uff0c\u5fc5\u987b\u5f97\u914d\u7f6e\uff0c\u4e00\u822c\u9ed8\u8ba4\u7ed3\u6784\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'appId: "com.example.app"\n')),(0,r.kt)("h4",{id:"artifactname"},(0,r.kt)("inlineCode",{parentName:"h4"},"artifactName")),(0,r.kt)("p",null,"\u8fd9\u662f\u5e94\u7528\u7684\u5b89\u88c5\u7a0b\u5e8f\u540d\uff0c\u4e00\u822c\u7ed3\u6784\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"\u5e94\u7528\u540d_\u7248\u672c\u53f7.\u6587\u4ef6\u540e\u7f00"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"${productName} Web Setup ${version}.${ext}\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u4e0a\u8ff0\u793a\u4f8b\uff0c\u5176\u4e2d\u6709\u4e09\u4e2a\u53d8\u91cf\u4e3a electron-builder \u7684\u53d8\u91cf\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"${productName} \u4ea7\u54c1\u540d"),(0,r.kt)("li",{parentName:"ul"},"${version} \u7248\u672c\u53f7"),(0,r.kt)("li",{parentName:"ul"},"${ext}")),(0,r.kt)("p",null,"\u4ee5\u4e0a\u90fd\u4f1a\u6839\u636e\u7528\u6237\u914d\u7f6e\uff0c\u5728\u6784\u5efa\u65f6\u81ea\u52a8\u586b\u5145\uff0c\u56e0\u6b64\uff0c\u8fd9\u91cc\u5927\u5bb6\u76f4\u63a5\u5199\u53d8\u91cf\u5373\u53ef\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u66f4\u591a\u53d8\u91cf\u8bf7\u53c2\u8003: ",(0,r.kt)("a",{parentName:"p",href:"https://www.electron.build/configuration/configuration#artifact-file-name-template"},"Electron-builder \u914d\u7f6e\u6587\u6863"),"\u3002")),(0,r.kt)("h4",{id:"directoriesapp"},(0,r.kt)("inlineCode",{parentName:"h4"},"directories.app")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"  directories: {\n    app: 'dist',\n  },\n")),(0,r.kt)("p",null,"\u6b64\u5b57\u6bb5\u8868\u793a\u5f53\u524d",(0,r.kt)("strong",{parentName:"p"},"\u6784\u5efa"),"\u7684\u5de5\u4f5c\u76ee\u5f55\u9ed8\u8ba4\u662f\uff1a\u9879\u76ee\u7684\u6839\u76ee\u5f55\u3002\u56e0\u6b64\uff0c\u6240\u586b\u5199\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"files")," \u4e2d\u7684\u8def\u5f84\uff0c\u5747\u662f\u76f8\u5bf9\u4e8e\u6839\u76ee\u5f55\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u6784\u5efa\u65b9\u4fbf\uff0c\u6211\u4eec\u8c03\u6574\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"dist"),"\u3002\u8fd9\u5c31\u8868\u660e\uff0c\u6240\u586b\u5199\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"files")," \u4e2d\u7684\u8def\u5f84\uff0c\u5747\u662f\u76f8\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u3002"),(0,r.kt)("h4",{id:"files"},(0,r.kt)("inlineCode",{parentName:"h4"},"files")),(0,r.kt)("p",null,"\u6b64\u5b57\u6bb5\u8868\u793a\u9700\u8981\u590d\u5236\u5230\u5e94\u7528\u4e2d\u7684\u6587\u4ef6\u5185\u5bb9\uff0c\u76f8\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"directories.app")," \u6240\u914d\u7f6e\u7684\u8def\u5f84\u3002\u82e5\u672a\u914d\u7f6e\uff0c\u5219\u76f8\u5bf9\u4e8e\u9879\u76ee\u6839\u76ee\u5f55\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u4f1a\u5728\u6253\u5305\u7684\u65f6\u5019\uff0c\u5c06\u5fc5\u987b\u7684\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u524d\u7aef\u6784\u5efa\u4ea7\u7269\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u8fdb\u7a0b\u6784\u5efa\u4ea7\u7269\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5e94\u7528\u5904\u7406\u540e\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json"),"\u3002")),(0,r.kt)("p",null,"\u5747\u9ed8\u8ba4\u653e\u5230\u4e86\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u4e0b\u3002\u8fd9\u6837\uff0c\u5728\u6211\u4eec\u8fdb\u884c\u5e94\u7528\u6784\u5efa\u7684\u65f6\u5019\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u5c06\u5fc5\u987b\u7684\u4ea7\u7269\uff0c\u5168\u90e8\u62f7\u8d1d\u5230\u5e94\u7528\u4e2d\u3002"),(0,r.kt)("p",null,"\u5f53\u7136\uff0c\u5e94\u7528\u7684\u4e00\u4e9b\u9759\u6001\u8d44\u6e90\uff0c\u6bd4\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"assets"),"\uff0c \u6211\u4eec\u4e5f\u9700\u8981\u62f7\u8d1d\uff0c\u4e00\u822c\u653e\u5728\u9879\u76ee\u6839\u76ee\u5f55\u3002\u56e0\u6b64\uff0c\u76f8\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"dist")," \u8def\u5f84\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"../assets"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"files: [\n  { from: '../assets', to: 'assets' },\n  {\n    from: '.',\n    to: '.',\n    filter: [\n      '!**/*.map',\n      '!**/*.d.ts',\n      '!*.log',\n      '!*.lock'\n      ]\n  },\n  ],\n")),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u8b66\u544a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"  \u5728\u8fdb\u884c\u4e3b\u8fdb\u7a0b\u3001\u6e32\u67d3\u8fdb\u7a0b\u6784\u5efa\u4ea7\u7269\u62f7\u8d1d\u7684\u65f6\u5019\uff0c\u5343\u4e07\u4e0d\u8981\u62f7\u8d1d\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"*.map")," \u6587\u4ef6\uff0c\u8fd9\u5c06\u4f1a\u4e3a\u53cd\u7f16\u8bd1\u63d0\u4f9b\u4fbf\u5229\uff0c\u5e26\u6765\u6781\u5927\u7684\u5b89\u5168\u9690\u60a3\u3002"))))}c.isMDXComponent=!0}}]);