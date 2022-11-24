"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6302],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(18249),a=(n(52983),n(44993));const o={sidebar_label:"routes"},i="server.routes",p={unversionedId:"configure/app/server/routes",id:"configure/app/server/routes",title:"server.routes",description:"* \u7c7b\u578b\uff1a Object",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/server/routes.md",sourceDirName:"configure/app/server",slug:"/configure/app/server/routes",permalink:"/v2/docs/configure/app/server/routes",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"routes"},sidebar:"configsAppSidebar",previous:{title:"publicRoutes",permalink:"/v2/docs/configure/app/server/public-routes"},next:{title:"ssrByEntries",permalink:"/v2/docs/configure/app/server/ssr-by-entries"}},l={},s=[{value:"\u81ea\u5b9a\u4e49\u8bbf\u95ee\u8def\u7531",id:"\u81ea\u5b9a\u4e49\u8bbf\u95ee\u8def\u7531",level:2},{value:"\u81ea\u5b9a\u4e49\u54cd\u5e94\u5934",id:"\u81ea\u5b9a\u4e49\u54cd\u5e94\u5934",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"serverroutes"},"server.routes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"Object")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a \u6839\u636e\u6587\u4ef6\u7ea6\u5b9a\u81ea\u52a8\u751f\u6210\u7684\u670d\u52a1\u7aef\u8def\u7531\u89c4\u5219\uff1a\u5e94\u7528\u7684\u6bcf\u4e2a\u5165\u53e3\u751f\u6210\u4e00\u6761\u8def\u7531\u89c4\u5219\uff0c\u5165\u53e3\u540d\u79f0\u7b49\u4e8e\u8def\u7531\u540d\u79f0\u3002")),(0,a.kt)("p",null,"\u8be5\u914d\u7f6e\u9009\u9879\u53ea\u4f5c\u7528\u4e8e\u670d\u52a1\u7aef\u8def\u7531\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5e94\u7528\u5165\u53e3\u7684\u670d\u52a1\u8bbf\u95ee\u914d\u7f6e\u3002"),(0,a.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u8bbf\u95ee\u8def\u7531"},"\u81ea\u5b9a\u4e49\u8bbf\u95ee\u8def\u7531"),(0,a.kt)("p",null,"\u5bf9\u8c61\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," \u4e3a\u5f53\u524d\u5e94\u7528\u7684\u5165\u53e3\u540d, \u503c\u53ef\u4ee5\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"string | Array<string>"),"\u3002"),(0,a.kt)("p",null,"\u5f53\u503c\u7c7b\u578b\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," \u65f6\uff0c\u5f53\u524d\u503c\u5373\u8868\u793a\u8bbf\u95ee\u8be5\u5165\u53e3\u7684\u8def\u7531\u540d\u79f0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  server: {\n    routes: {\n      // \u9ed8\u8ba4\u8def\u7531\u4e3a /entryName1\uff0c\u81ea\u5b9a\u4e49\u540e\u4e3a /p/test1\n      entryName1: '/p/test1'\n      // \u652f\u6301\u52a8\u6001\u670d\u52a1\u7aef\u8def\u7531\u914d\u7f6e\n      entryName2: '/detail/:id'\n    }\n  }\n});\n")),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"Array<string>")," \u4e3a\u5165\u53e3\u8bbe\u7f6e\u591a\u4e2a\u8bbf\u95ee\u8def\u7531:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  server: {\n    routes: {\n      'page-a': [`/a`, '/b'],\n    },\n  },\n});\n")),(0,a.kt)("p",null,"\u6b64\u65f6\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"/a"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"/b")," \u4e24\u4e2a\u8def\u7531\u90fd\u53ef\u4ee5\u8bbf\u95ee\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"page-a")," \u5165\u53e3\u3002"),(0,a.kt)("p",null,"\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," \u547d\u4ee4\u540e\uff0c\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"dist/route.json")," \u4e2d\u67e5\u770b\u5165\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"page-a")," \u5b58\u5728\u4e24\u6761\u8def\u7531\u8bb0\u5f55:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "routes": [\n    {\n      "urlPath": "/a",\n      "entryName": "page-a",\n      "entryPath": "html/page-a/index.html",\n      "isSPA": true,\n      "isSSR": false,\n      "enableModernMode": false\n    },\n    {\n      "urlPath": "/b",\n      "entryName": "page-a",\n      "entryPath": "html/page-a/index.html",\n      "isSPA": true,\n      "isSSR": false,\n      "enableModernMode": false\n    },\n  ]\n}\n')),(0,a.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u54cd\u5e94\u5934"},"\u81ea\u5b9a\u4e49\u54cd\u5e94\u5934"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u5165\u53e3\u7684 resHeaders \u8bbe\u7f6e\u54cd\u5e94\u5934\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  server: {\n    routes: {\n      'page-a': {\n        route: ['/a', '/b'],\n        resHeaders: {\n          'x-modern-test': '1',\n        },\n      },\n    },\n  },\n});\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u4e00\u914d\u7f6e\u5728\u751f\u4ea7\u73af\u5883\u4e0e\u5f00\u53d1\u73af\u5883\u90fd\u751f\u6548\uff0c\u53ef\u4ee5\u6839\u636e NODE_ENV \u533a\u5206\u73af\u5883\u8bbe\u7f6e\u4e0d\u540c\u7684\u54cd\u5e94\u5934\u3002\u4f46\u5982\u679c\u4f60\u53ea\u9700\u8981\u5728\u5f00\u53d1\u73af\u5883\u8bbe\u7f6e\u54cd\u5e94\u5934\uff0c\u63a8\u8350\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"tools.devServer.headers"),"\u3002")))}c.isMDXComponent=!0}}]);