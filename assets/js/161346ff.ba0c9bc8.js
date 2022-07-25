"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[5984],{54852:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(49231);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=d(a),u=r,c=k["".concat(p,".").concat(u)]||k[u]||s[u]||l;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},36252:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(86215),r=(a(49231),a(54852));const l={sidebar_label:"devServer"},i="tools.devServer",o={unversionedId:"apis/config/tools/dev-server",id:"apis/config/tools/dev-server",title:"tools.devServer",description:"\u5e94\u7528\u5de5\u7a0b",source:"@site/docs/apis/config/tools/dev-server.md",sourceDirName:"apis/config/tools",slug:"/apis/config/tools/dev-server",permalink:"/docs/apis/config/tools/dev-server",tags:[],version:"current",frontMatter:{sidebar_label:"devServer"},sidebar:"apisSidebar",previous:{title:"babel",permalink:"/docs/apis/config/tools/babel"},next:{title:"esbuild",permalink:"/docs/apis/config/tools/esbuild"}},p={},d=[{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"\u652f\u6301\u7684\u914d\u7f6e\u9879",id:"\u652f\u6301\u7684\u914d\u7f6e\u9879",level:3},{value:"\u62e5\u6709\u66ff\u4ee3\u529f\u80fd\u7684\u914d\u7f6e\u9879",id:"\u62e5\u6709\u66ff\u4ee3\u529f\u80fd\u7684\u914d\u7f6e\u9879",level:3},{value:"API",id:"api",level:3},{value:"hot",id:"hot",level:4},{value:"liveReload",id:"livereload",level:4},{value:"before",id:"before",level:3},{value:"after",id:"after",level:3}],m={toc:d};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"toolsdevserver"},"tools.devServer"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u9002\u7528\u7684\u5de5\u7a0b\u65b9\u6848")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5e94\u7528\u5de5\u7a0b"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"Object")),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"))),(0,r.kt)("p",null,"\u5bf9\u5e94 DevServer \u7684\u914d\u7f6e\uff0c\u7528\u4e8e\u914d\u7f6e\u5f00\u53d1\u73af\u5883\u8fd0\u884c\u7684\u670d\u52a1\u5668\u7684\u9009\u9879\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  tools: {\n    devServer: {\n      hot: true,\n      https: false,\n      liveReload: true,\n    },\n  },\n});\n")),(0,r.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,r.kt)("p",null,"Modern.js \u57fa\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack-dev-middleware"},"webpack-dev-middleware")," \u5b9e\u73b0 DevServer\uff0c\u5927\u90e8\u5206\u914d\u7f6e\u4e0e ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/api/webpack-dev-server/"},"webpack-dev-server")," \u5b8c\u5168\u4e00\u81f4\uff0c\u5c11\u90e8\u5206\u914d\u7f6e\u5b58\u5728\u5dee\u5f02\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5b58\u5728\u5dee\u5f02\u7684\u914d\u7f6e\uff0c\u4e00\u90e8\u5206\u53ef\u4ee5\u4f7f\u7528 Modern.js \u4e2d\u7684\u5176\u4ed6\u914d\u7f6e\u9879\u4ee3\u66ff\uff0c\u4e5f\u6709\u4e00\u90e8\u5206\u914d\u7f6e\u8fd8\u672a\u5b9e\u73b0\u6216\u65e0\u9700\u5b9e\u73b0\uff0c\u4e0b\u65b9\u5b8c\u6574\u5217\u51fa\u4e86\u8fd9\u4e9b\u5185\u5bb9\u3002"),(0,r.kt)("h3",{id:"\u652f\u6301\u7684\u914d\u7f6e\u9879"},"\u652f\u6301\u7684\u914d\u7f6e\u9879"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"),(0,r.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u72b6\u6001"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e dev-server \u76f8\u5173\u529f\u80fd\uff0c\u5982\u65e5\u5fd7\u7b49"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"compress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f gzip \u538b\u7f29"),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"devMiddleware"),(0,r.kt)("td",{parentName:"tr",align:null},"webpack-dev-middleware \u76f8\u5173\u914d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"https"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f00\u542f https"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headers"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u54cd\u5e94\u5934"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hot"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u53ef\u4ee5\u4f7f\u7528 webpack \u70ed\u6a21\u5757\u66ff\u6362"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"liveReload"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u53ef\u4ee5 reload \u9875\u9762"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onListening"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76d1\u542c\u542f\u52a8"),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"open"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6784\u5efa\u5b8c\u6210\u540e\u81ea\u52a8\u6253\u5f00\u9875\u9762"),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proxy"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee3\u7406"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"watchFiles"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u76d1\u542c\u7684\u6587\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},"N")))),(0,r.kt)("h3",{id:"\u62e5\u6709\u66ff\u4ee3\u529f\u80fd\u7684\u914d\u7f6e\u9879"},"\u62e5\u6709\u66ff\u4ee3\u529f\u80fd\u7684\u914d\u7f6e\u9879"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"),(0,r.kt)("th",{parentName:"tr",align:null},"\u66ff\u4ee3\u65b9\u6848"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"historyApiFallback"),(0,r.kt)("td",{parentName:"tr",align:null},"\u91cd\u5b9a\u5411\u90e8\u5206 URL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/apis/config/server/routes"},"server.routes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onAfterSetupMiddleware"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728 webpack-dev-server internal middleware \u540e\u6267\u884c\uff0c\u53ef\u4ee5\u6dfb\u52a0\u540e\u7eed\u4e2d\u95f4\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},"devServer.after")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onBeforeSetupMiddleware"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728 webpack-dev-server internal middleware \u524d\u6267\u884c\uff0c\u53ef\u4ee5\u6dfb\u52a0\u524d\u7f6e\u4e2d\u95f4\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},"devServer.before")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"port"),(0,r.kt)("td",{parentName:"tr",align:null},"dev server \u76d1\u542c\u7aef\u53e3"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/apis/config/server/port"},"server.port"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"static"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6258\u7ba1\u9759\u6001\u8d44\u6e90\u6587\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/apis/hooks/mwa/config/public"},"config/public")," \u548c ",(0,r.kt)("a",{parentName:"td",href:"/docs/apis/config/server/public-routes"},"server.publicRoutes")," \u6216 ",(0,r.kt)("a",{parentName:"td",href:"/docs/apis/hooks/mwa/config/upload"},"config/upload"))))),(0,r.kt)("h3",{id:"api"},"API"),(0,r.kt)("h4",{id:"hot"},"hot"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"true"))),(0,r.kt)("p",null,"\u662f\u5426\u5f00\u542f webpack \u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/concepts/hot-module-replacement/"},"Hot Module Replacement")," \u70ed\u66f4\u65b0\u80fd\u529b\u3002"),(0,r.kt)("p",null,"\u5173\u95ed\u8fd9\u9879\u914d\u7f6e\u540e\uff0c\u4f1a\u79fb\u9664 ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/plugins/hot-module-replacement-plugin/"},"HotModuleReplacementPlugin")," \u4e0e ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pmmmwh/react-refresh-webpack-plugin"},"react-refresh-webpack-plugin"),"\u3002"),(0,r.kt)("h4",{id:"livereload"},"liveReload"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"true"))),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5f53\u76d1\u542c\u5230\u6587\u4ef6\u53d8\u5316\u65f6\uff0cdev server \u5c06\u4f1a\u5237\u65b0\u9875\u9762\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e2a\u914d\u7f6e\u9879\u53ef\u4ee5\u5173\u95ed\u8be5\u884c\u4e3a\u3002"),(0,r.kt)("h3",{id:"before"},"before"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5b9e\u9a8c\u6027\u7684")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u8fd9\u662f\u4e00\u4e2a\u5b9e\u9a8c\u6027\u529f\u80fd\u3002"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"Array")),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"null"))),(0,r.kt)("p",null,"\u5728\u6240\u6709\u5f00\u53d1\u73af\u5883\u4e2d\u95f4\u4ef6\u524d\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"devServer: {\n  before: [\n    async (req, res, next) => {\n      console.log('before dev middleware');\n      next();\n    },\n  ],\n},\n")),(0,r.kt)("h3",{id:"after"},"after"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5b9e\u9a8c\u6027\u7684")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u8fd9\u662f\u4e00\u4e2a\u5b9e\u9a8c\u6027\u529f\u80fd\u3002"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"Array")),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"null"))),(0,r.kt)("p",null,"\u5728\u6240\u6709\u5f00\u53d1\u73af\u5883\u4e2d\u95f4\u4ef6\u540e\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"devServer: {\n  after: [\n    async (req, res, next) => {\n      console.log('after dev middleware');\n      next();\n    },\n  ],\n},\n")))}s.isMDXComponent=!0}}]);