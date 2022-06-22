"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[4516],{54852:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,f=m["".concat(d,".").concat(c)]||m[c]||u[c]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86797:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(91528),a=n(2854),i=(n(49231),n(54852)),o=["components"],l={sidebar_position:2,title:"\u5b50\u5e94\u7528\u8c03\u8bd5"},d=void 0,p={unversionedId:"guides/features/micro-frontend/debugging",id:"guides/features/micro-frontend/debugging",title:"\u5b50\u5e94\u7528\u8c03\u8bd5",description:"\u6839\u636e\u7814\u53d1\u7684\u4e0d\u540c\u9636\u6bb5\uff0c\u6211\u4eec\u5c06\u5b50\u5e94\u7528\u8c03\u8bd5\u5206\u4e3a\u5982\u4e0b\u4e24\u79cd\u65b9\u5f0f\uff1a",source:"@site/docs/guides/features/micro-frontend/debugging.md",sourceDirName:"guides/features/micro-frontend",slug:"/guides/features/micro-frontend/debugging",permalink:"/docs/guides/features/micro-frontend/debugging",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u5b50\u5e94\u7528\u8c03\u8bd5"},sidebar:"guidesSidebar",previous:{title:"\u5fae\u524d\u7aef\u4ecb\u7ecd",permalink:"/docs/guides/features/micro-frontend/introduction"},next:{title:"\u4e3b\u5b50\u5e94\u7528\u901a\u4fe1",permalink:"/docs/guides/features/micro-frontend/communicate"}},s={},u=[{value:"\u4f7f\u7528\u672c\u5730\u4e3b\u5e94\u7528\u8c03\u8bd5",id:"\u4f7f\u7528\u672c\u5730\u4e3b\u5e94\u7528\u8c03\u8bd5",level:2},{value:"\u4e3b\u5e94\u7528",id:"\u4e3b\u5e94\u7528",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:4},{value:"\u52a0\u8f7d\u5b50\u5e94\u7528",id:"\u52a0\u8f7d\u5b50\u5e94\u7528",level:4},{value:"\u5b50\u5e94\u7528",id:"\u5b50\u5e94\u7528",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e-1",level:4},{value:"\u5b50\u5e94\u7528\u4ee3\u7801",id:"\u5b50\u5e94\u7528\u4ee3\u7801",level:4},{value:"\u4f7f\u7528\u7ebf\u4e0a\u4e3b\u5e94\u7528\u8c03\u8bd5",id:"\u4f7f\u7528\u7ebf\u4e0a\u4e3b\u5e94\u7528\u8c03\u8bd5",level:2},{value:"\u4e3b\u5e94\u7528",id:"\u4e3b\u5e94\u7528-1",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e-2",level:4},{value:"\u5b50\u5e94\u7528",id:"\u5b50\u5e94\u7528-1",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e-3",level:4},{value:"Query \u6a21\u5f0f\u8c03\u8bd5",id:"query-\u6a21\u5f0f\u8c03\u8bd5",level:3},{value:"Header \u6a21\u5f0f\u8c03\u8bd5\uff08\u63a8\u8350\uff09",id:"header-\u6a21\u5f0f\u8c03\u8bd5\u63a8\u8350",level:3},{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",level:4},{value:"\u914d\u7f6e Header",id:"\u914d\u7f6e-header",level:4}],m={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6839\u636e\u7814\u53d1\u7684\u4e0d\u540c\u9636\u6bb5\uff0c\u6211\u4eec\u5c06\u5b50\u5e94\u7528\u8c03\u8bd5\u5206\u4e3a\u5982\u4e0b\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u672c\u5730\u4e3b\u5e94\u7528\u8c03\u8bd5\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u7ebf\u4e0a\u4e3b\u5e94\u7528\u8c03\u8bd5\u3002")),(0,i.kt)("h2",{id:"\u4f7f\u7528\u672c\u5730\u4e3b\u5e94\u7528\u8c03\u8bd5"},"\u4f7f\u7528\u672c\u5730\u4e3b\u5e94\u7528\u8c03\u8bd5"),(0,i.kt)("p",null,"\u9879\u76ee\u521d\u671f\uff0c\u4e3b\u5e94\u7528\u672a\u90e8\u7f72\uff0c\u53ef\u4ee5\u4f7f\u7528\u672c\u5730\u5206\u522b\u542f\u52a8\u4e3b\u5e94\u7528\u3001\u5b50\u5e94\u7528\u7684\u65b9\u5f0f\u8fdb\u884c\u8c03\u8bd5\u3002"),(0,i.kt)("h3",{id:"\u4e3b\u5e94\u7528"},"\u4e3b\u5e94\u7528"),(0,i.kt)("h4",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  runtime: {\n    router: true,\n    masterApp: {\n      manifest: {\n        modules: [\n          {\n            name: 'Dashboard',\n            entry: 'http://localhost:8081',\n          },\n        ],\n      },\n    },\n  },\n});\n")),(0,i.kt)("p",null,"\u5047\u8bbe\u672c\u5730\u7684\u5b50\u5e94\u7528\u7684\u540d\u5b57\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"DashBoard")," \u4e14\u542f\u52a8\u670d\u52a1\u7684\u5730\u5740\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8081"),"\u3002\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"runtime.masterApp.modules")," \u5b57\u6bb5\u6307\u5b9a\u5b50\u5e94\u7528\u7684\u76f8\u5173\u4fe1\u606f\u3002"),(0,i.kt)("h4",{id:"\u52a0\u8f7d\u5b50\u5e94\u7528"},"\u52a0\u8f7d\u5b50\u5e94\u7528"),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/runtime/app/use-module-apps"},"useModuleApps")," API \u83b7\u53d6\u5b50\u5e94\u7528\u7ec4\u4ef6\uff0c\u5e76\u52a0\u8f7d\u5b50\u5e94\u7528\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=App.tsx",title:"App.tsx"},"import { useModuleApps } from '@modern-js/plugin-garfish';\n\nfunction App() {\n  const { Dashboard } = useModuleApps();\n\n  return (\n    <div>\n      Master APP\n      <Route path=\"/dashboard\">\n        <Dashboard />\n      </Route>\n    </div>\n  );\n}\n")),(0,i.kt)("h3",{id:"\u5b50\u5e94\u7528"},"\u5b50\u5e94\u7528"),(0,i.kt)("h4",{id:"\u914d\u7f6e-1"},"\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  deploy: {\n    microFrontend: true,\n  },\n});\n")),(0,i.kt)("p",null,"\u5f53 ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy.microFrontend")," \u5b57\u6bb5\u914d\u7f6e\u4e3a true \u7684\u65f6\u5019\uff0cModern.js \u5c06\u8ba4\u4e3a\u5f53\u524d\u5e94\u7528\u662f\u4e00\u4e2a\u5fae\u524d\u7aef\u5b50\u5e94\u7528\uff0c\u5e76\u5c06\u5176\u7f16\u8bd1\u4e3a\u7b26\u5408 Garfish \u5b50\u5e94\u7528\u89c4\u8303\u7684\u4ea7\u7269\u3002"),(0,i.kt)("h4",{id:"\u5b50\u5e94\u7528\u4ee3\u7801"},"\u5b50\u5e94\u7528\u4ee3\u7801"),(0,i.kt)("p",null,"\u5b50\u5e94\u7528\u5728\u4ee3\u7801\u5c42\u9762\u548c MWA \u662f\u5b8c\u5168\u4e00\u81f4\u7684\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=src/App.tsx",title:"src/App.tsx"},"function App() {\n  return <div>dashboard</div>;\n}\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u76ee\u524d\u4e0d\u652f\u6301\u5728\u5b50\u5e94\u7528\u4e2d\u4f7f\u7528 BFF \u529f\u80fd\u3002"))),(0,i.kt)("p",null,"\u7136\u540e\u5206\u522b\u542f\u52a8\u4e3b\u5e94\u7528\u548c\u5b50\u5e94\u7528\uff08\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm dev"),"\uff09\uff0c\u4e3b\u5e94\u7528\u8bbf\u95ee ",(0,i.kt)("inlineCode",{parentName:"p"},"8080")," \u7aef\u53e3\uff0c\u5b50\u5e94\u7528\u8bbf\u95ee ",(0,i.kt)("inlineCode",{parentName:"p"},"8081")," \u7aef\u53e3\u3002\u6d4f\u89c8\u5668\u6253\u5f00 ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/dashboard")," \u5c31\u80fd\u770b\u5230\u52a0\u8f7d\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"Dashboard")," \u5b50\u5e94\u7528\u7684\u6548\u679c\u4e86\u3002"),(0,i.kt)("h2",{id:"\u4f7f\u7528\u7ebf\u4e0a\u4e3b\u5e94\u7528\u8c03\u8bd5"},"\u4f7f\u7528\u7ebf\u4e0a\u4e3b\u5e94\u7528\u8c03\u8bd5"),(0,i.kt)("p",null,"\u5f53\u4e3b\u5e94\u7528\u9879\u76ee\u90e8\u7f72\u4e4b\u540e\uff0cModern.js \u63d0\u4f9b\u4e86\u7528\u7ebf\u4e0a\u4e3b\u5e94\u7528\u8c03\u8bd5\u672c\u5730\u5b50\u5e94\u7528\u7684\u65b9\u5f0f\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u672c\u5c0f\u8282\u6240\u7528\u7ebf\u4e0a\u5730\u5740\u5747\u662f\u865a\u6784\uff0c\u53ea\u4e3a\u6f14\u793a\u65b9\u4fbf\u3002"))),(0,i.kt)("h3",{id:"\u4e3b\u5e94\u7528-1"},"\u4e3b\u5e94\u7528"),(0,i.kt)("h4",{id:"\u914d\u7f6e-2"},"\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  server: {\n    enableMicroFrontendDebug: true,\n  },\n  runtime: {\n    router: true,\n    masterApp: {\n      manifest: {\n        modules: [\n          {\n            name: 'Dashboard',\n            entry: 'http://modern-js.dev/dashboard',\n          },\n        ],\n      },\n    },\n  },\n});\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"enableMicroFrontendDebug")," \u4f1a\u5728\u7ebf\u4e0a\u5f00\u542f \u5fae\u524d\u7aef Debug \u6a21\u5f0f\uff0c\u5982\u62c5\u5fc3\u5b89\u5168\u9690\u60a3\uff0c\u53ef\u53ea\u5728\u7ebf\u4e0a\u6d4b\u8bd5\u73af\u5883\u5f00\u542f\uff0c\u7ebf\u4e0a\u6b63\u5f0f\u73af\u5883\u5173\u6389\u8be5\u914d\u7f6e\u3002"))),(0,i.kt)("h3",{id:"\u5b50\u5e94\u7528-1"},"\u5b50\u5e94\u7528"),(0,i.kt)("h4",{id:"\u914d\u7f6e-3"},"\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  deploy: {\n    microFrontend: true,\n  },\n});\n")),(0,i.kt)("p",null,"\u672c\u5730\u542f\u52a8\u5b50\u5e94\u7528\uff0c\u5176\u7aef\u53e3\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"8080"),"\u3002"),(0,i.kt)("h3",{id:"query-\u6a21\u5f0f\u8c03\u8bd5"},"Query \u6a21\u5f0f\u8c03\u8bd5"),(0,i.kt)("p",null,"\u8bbf\u95ee\u4e3b\u5e94\u7528\u5730\u5740 ",(0,i.kt)("inlineCode",{parentName:"p"},"http://master.example.com/")," \u5e76\u5728 URL \u540e\u52a0\u4e0a Query ",(0,i.kt)("inlineCode",{parentName:"p"},"?__debug__micro-frontend-debug-name=TableList&__debug__micro-frontend-debug-entry=http://localhost:8080"),"\u3002"),(0,i.kt)("p",null,"\u6b64\u65f6\u8bbf\u95ee\u4e3b\u5e94\u7528\u540e\uff0c\u670d\u52a1\u7aef\u6ce8\u5165\u7684\u5b50\u5e94\u7528\u6a21\u5757\u4fe1\u606f\u5c06\u88ab\u66ff\u6362\u4e3a\u6211\u4eec Query \u91cc\u7684\u4fe1\u606f\u3002\u5373 ",(0,i.kt)("inlineCode",{parentName:"p"},"TableList")," \u5b50\u5e94\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"entry")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),"\u3002\u7ebf\u4e0a\u4e3b\u5e94\u7528\u5207\u6362\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"/tablelist")," \u8def\u7531\u540e\u5c06\u4f1a\u52a0\u8f7d\u672c\u5730\u7684\u5b50\u5e94\u7528\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/query-debug.png",alt:"query-debug"})),(0,i.kt)("h3",{id:"header-\u6a21\u5f0f\u8c03\u8bd5\u63a8\u8350"},"Header \u6a21\u5f0f\u8c03\u8bd5\uff08\u63a8\u8350\uff09"),(0,i.kt)("p",null,"Query \u8c03\u8bd5\u65f6\uff0c\u5f53\u8def\u900f\u8df3\u8f6c\u7684\u65f6\u5019\uff0cQuery \u53c2\u6570\u4f1a\u4e22\u5931\uff0creload \u9875\u9762\u540e\uff0c\u670d\u52a1\u7aef\u8fd4\u56de\u7684\u5b50\u5e94\u7528\u4fe1\u606f\u91cc\u5c06\u4e0d\u4f1a\u6ce8\u5165\u672c\u5730\u7684\u5b50\u5e94\u7528\u4fe1\u606f\u3002\u53ef\u4ee5\u4f7f\u7528 Header \u6a21\u5f0f\u6765\u8c03\u8bd5\uff0c\u83b7\u53d6\u66f4\u7a33\u5b9a\u7684\u8c03\u8bd5\u5f00\u53d1\u4f53\u9a8c\u3002"),(0,i.kt)("h4",{id:"\u73af\u5883\u8981\u6c42"},"\u73af\u5883\u8981\u6c42"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://modheader.com/install"},"ModHeader")," \u662f\u7528\u4e8e Mock \u6d4f\u89c8\u5668\u8bf7\u6c42/\u8fd4\u56de Header \u7684\u6d4f\u89c8\u5668\u63d2\u4ef6\u3002\u4f7f\u7528 ModHeader \u652f\u6301\u7684\u6d4f\u89c8\u5668\uff08Chrome\u3001Firefox\u3001Opera\u3001Edge\uff09\uff0c\u5e76\u5b89\u88c5 ModHeader \u63d2\u4ef6\u3002"),(0,i.kt)("h4",{id:"\u914d\u7f6e-header"},"\u914d\u7f6e Header"),(0,i.kt)("p",null,"\u914d\u7f6e\u5982\u4e0b Header:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x-micro-frontend-module-name TableList")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x-micro-frontend-module-entry http://localhost:8080"))),(0,i.kt)("p",null,"\u8bbf\u95ee\u4e3b\u5e94\u7528\u5730\u5740\u5982\u4e0b\u6240\u793a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/header-debug.png",alt:"header-debug"})),(0,i.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u6b64\u65f6\u670d\u52a1\u7aef\u8fd4\u56de\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"TableList")," \u5b50\u5e94\u7528\u4fe1\u606f\u662f Header \u91cc\u9762\u6307\u5b9a\u7684\u672c\u5730\u57df\u540d ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8080")))}c.isMDXComponent=!0}}]);