"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7018],{57522:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(29901);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(18249),a=(n(29901),n(57522));const l={sidebar_position:1},o="Electron \u7b80\u4ecb",p={unversionedId:"guides/features/electron/basic",id:"guides/features/electron/basic",title:"Electron \u7b80\u4ecb",description:"Electron \u662f\u4f7f\u7528 JavaScript\uff0cHTML \u548c CSS \u6784\u5efa\u8de8\u5e73\u53f0\u7684\u684c\u9762\u5e94\u7528\u7a0b\u5e8f\u7684\u6846\u67b6\u3002\u6362\u4e00\u4e2a\u89d2\u5ea6\u7406\u89e3\uff0c\u5176\u5b9e\u662f\u4e00\u4e2a\u53ef\u4ee5\u7528 JavaScript\u3001HTML \u548c CSS \u6784\u5efa\u684c\u9762\u5e94\u7528\u7a0b\u5e8f\u7684\u5e93\uff0c\u4e00\u4e2a JavaScript \u8fd0\u884c\u73af\u5883\u3002",source:"@site/docs/guides/features/electron/basic.md",sourceDirName:"guides/features/electron",slug:"/guides/features/electron/basic",permalink:"/docs/guides/features/electron/basic",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"\u6df7\u5408\u6280\u672f\u6808",permalink:"/docs/guides/features/micro-frontend/mixed-stack"},next:{title:"Modern Electron \u7b80\u4ecb",permalink:"/docs/guides/features/electron/modern-electron"}},i={},c=[{value:"\u4e3b\u8fdb\u7a0b",id:"\u4e3b\u8fdb\u7a0b",level:3},{value:"\u6e32\u67d3\u8fdb\u7a0b",id:"\u6e32\u67d3\u8fdb\u7a0b",level:3}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"electron-\u7b80\u4ecb"},"Electron \u7b80\u4ecb"),(0,a.kt)("p",null,"Electron \u662f\u4f7f\u7528 JavaScript\uff0cHTML \u548c CSS \u6784\u5efa\u8de8\u5e73\u53f0\u7684\u684c\u9762\u5e94\u7528\u7a0b\u5e8f\u7684\u6846\u67b6\u3002\u6362\u4e00\u4e2a\u89d2\u5ea6\u7406\u89e3\uff0c\u5176\u5b9e\u662f\u4e00\u4e2a\u53ef\u4ee5\u7528 ",(0,a.kt)("strong",{parentName:"p"},"JavaScript\u3001HTML \u548c CSS")," \u6784\u5efa\u684c\u9762\u5e94\u7528\u7a0b\u5e8f\u7684\u5e93\uff0c\u4e00\u4e2a JavaScript \u8fd0\u884c\u73af\u5883\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/electron/electron.png",alt:null})),(0,a.kt)("p",null,"\u5b83\u7531\u4e0a\u56fe\u6240\u793a Electron \u73af\u5883\u7531\uff1a\u6d4f\u89c8\u5668\u73af\u5883 + \xa0Node \u73af\u5883 + \u64cd\u4f5c\u7cfb\u7edf Native API \u5171\u540c\u7ec4\u6210\u3002"),(0,a.kt)("h3",{id:"\u4e3b\u8fdb\u7a0b"},"\u4e3b\u8fdb\u7a0b"),(0,a.kt)("p",null,"\u6211\u4eec\u5728\u542f\u52a8\u4efb\u4f55\u5e94\u7528\u7684\u65f6\u5019\uff0c\u90fd\u4f1a\u5f00\u542f\u4e00\u4e2a\u8fdb\u7a0b\uff0c\u8868\u793a\u5e94\u7528\u8fdb\u7a0b\uff0c\u7528\u4e8e\u548c\u64cd\u4f5c\u7cfb\u7edf\u6253\u4ea4\u9053\u3002\u6bd4\u5982\uff1a\u6253\u5f00\u4e00\u4e2a\u7cfb\u7edf\u7a97\u53e3\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u8fd9\u4e2a\u5e94\u7528\u8fdb\u7a0b\uff0c\u5728 Electron \u91cc\u9762\u4e3a\u505a\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u4e3b\u8fdb\u7a0b"),"\u3002"),(0,a.kt)("p",null,"\u5f53\u6211\u4eec\u4f7f\u7528\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"electron xxx.js")," \u542f\u52a8\u5e94\u7528\u7684\u65f6\u5019\uff08\u4e0d\u6253\u5f00\u4efb\u4f55\u7a97\u53e3\uff09\uff0c\u542f\u52a8\u4e86\u4e00\u4e2a\u8fdb\u7a0b\uff0c\u8fd9\u4e2a\u8fdb\u7a0b\u5c31\u662f",(0,a.kt)("strong",{parentName:"p"},"\u4e3b\u8fdb\u7a0b"),"\u3002"),(0,a.kt)("p",null,"\u9996\u5148\u65b0\u5efa\u4e00\u4e2a\u6d4b\u8bd5\u9879\u76ee\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir electron-process-test // \u65b0\u5efa\u6587\u4ef6\u5939 electron-process-test\ncd electron-process-test\nyarn init\nELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/ yarn add electron -D\n")),(0,a.kt)("p",null,"\u65b0\u5efa\u4e3b\u8fdb\u7a0b\u6587\u4ef6\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"main.js"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="main.js"',title:'"main.js"'},"// main.js\nconsole.log('this is main process');\n")),(0,a.kt)("p",null,"\u63a5\u7740\u8fd0\u884c\u8fd9\u4e2a JS\uff0c\u6b64\u5904\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"\u4e2d\u6dfb\u52a0\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'{\n\xa0 ...\n\xa0 "dev:main": "electron main.js",\n\xa0 ...\n}\n')),(0,a.kt)("p",null,"\u6700\u540e\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run dev:main"),"\uff0c \u6253\u51fa\u4e86 'hello'\uff0c\u6211\u4eec\u5728\u6d3b\u52a8\u76d1\u89c6\u5668\u53ef\u4ee5\u770b\u5230\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/electron/electron1.png",alt:null})),(0,a.kt)("p",null,"\u4e0a\u8ff0\u6b65\u9aa4\u542f\u52a8\u4e86\u4e00\u4e2a ",(0,a.kt)("strong",{parentName:"p"},"Electron \u4e3b\u8fdb\u7a0b"),"\uff0c\u5373\u56fe\u4e2d\u7684\u5e26\u56fe\u6807\u7684\u90a3\u4e2a Electron \u8fdb\u7a0b\u3002\u4ed6\u542f\u52a8\u4e86\u4e00\u4e2a\u989d\u5916\u7684\u8f85\u52a9\u8fdb\u7a0b\nElectron helper\uff0c\u662f GPU \u5904\u7406\u8fdb\u7a0b\u3002"),(0,a.kt)("h3",{id:"\u6e32\u67d3\u8fdb\u7a0b"},"\u6e32\u67d3\u8fdb\u7a0b"),(0,a.kt)("p",null,"\u5f53\u6211\u4eec\u6253\u5f00\u6d4f\u89c8\u5668\u7684\u4e00\u4e2a Tab \u5e76\u52a0\u8f7d\u4e86\u4e00\u4e2a\u9875\u9762\uff0c\u6b64\u65f6\u9875\u9762\u662f\u8fd0\u884c\u5728\u4e00\u4e2a\u65b0\u7684\u8fdb\u7a0b\u4e2d\u7684\u3002\u8fd9\u4e2a\u627f\u8f7d\u9875\u9762\u7684\u8fdb\u7a0b\uff0c\u5728 Electron \u91cc\u4e3a\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u6e32\u67d3\u8fdb\u7a0b"),"\u3002"),(0,a.kt)("p",null,"\u63a5\u7740\u4e0a\u8ff0\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='main.js'",title:"'main.js'"},"const { app, BrowserWindow } = require('electron');\napp.on('ready', () => {\n\xa0 const win = new BrowserWindow({\n\xa0 \xa0 \xa0width: 400,\n\xa0 \xa0 \xa0height: 400\n\xa0 });\n});\n")),(0,a.kt)("p",null,"\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run dev:main"),", \u67e5\u770b\u6d3b\u52a8\u76d1\u89c6\u5668\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/electron/electron2.png",alt:null})),(0,a.kt)("p",null,"\u542f\u52a8\u540e\uff0c\u6211\u4eec\u53d1\u73b0\u5e76\u672a\u65b0\u589e\u8fdb\u7a0b\u3002\u56e0\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u8fd9\u4e2a\u7a97\u53e3\u5728\u6ca1\u6709\u52a0\u8f7d\u9875\u9762"),"\uff08\u672c\u5730 HTML \u6587\u4ef6\u6216\u7f51\u9875\uff09\u7684\u65f6\u5019\uff0c\u4e0d\u4f1a\u65b0\u589e\u6e32\u67d3\u8fdb\u7a0b\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u9700\u8981\u52a0\u8f7d\u4e00\u4e2a\u9875\u9762\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='main.js'",title:"'main.js'"},"const { app, BrowserWindow } = require('electron');\napp.on('ready', () => {\n\xa0 const win = new BrowserWindow({\n\xa0 \xa0 \xa0width: 400,\n\xa0 \xa0 \xa0height: 400\n\xa0 });\n\xa0 win.loadURL('https://www.baidu.com');\n});\n")),(0,a.kt)("p",null,"\u8fd0\u884c\u5e76\u67e5\u770b\u6d3b\u52a8\u76d1\u89c6\u5668\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/electron/electron3.png",alt:null})),(0,a.kt)("p",null,"\u53d1\u73b0\u591a\u4e86\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"p"},"Electron Helper"),"\uff0c\u5176\u4e2d\u6709\u4e00\u4e2a\u65b0\u589e\u7684\uff0c\u5373\u4e3a\u52a0\u8f7d\u9875\u9762\u7684",(0,a.kt)("strong",{parentName:"p"},"\u6e32\u67d3\u8fdb\u7a0b"),"\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0a\u8fc7\u7a0b\uff0c\u6211\u4eec\u76f4\u89c2\u611f\u53d7\u5230\u4e86\u4ec0\u4e48\u662f",(0,a.kt)("strong",{parentName:"p"},"\u4e3b\u8fdb\u7a0b"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"\u6e32\u67d3\u8fdb\u7a0b"),"\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u8fdb\u7a0b\u5c31\u662f\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"electron main.js")," \u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u5f00\u542f\u4e00\u4e2a\u4e3b\u8fdb\u7a0b\uff1a",(0,a.kt)("strong",{parentName:"li"},"Electron"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6e32\u67d3\u8fdb\u7a0b\u4f1a\u5728\u65b0\u5efa\u7a97\u53e3\u540e\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"loadURL")," \u7684\u65f6\u5019\u5f00\u542f\u6e32\u67d3\u8fdb\u7a0b\uff1a",(0,a.kt)("strong",{parentName:"li"},"Electron Helper"),"\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"loadURL")," \u4e5f\u53ef\u4ee5\u52a0\u8f7d\u4e00\u4e2a HTML\uff0c\u4e0e\u6d4f\u89c8\u5668\u7684 Tab \u7c7b\u4f3c\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"win.loadURL(`file://${__dirname}/../index.html`);\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u8bb2\u89e3\u4e86 Electron \u4e3b\u8fdb\u7a0b\u548c\u6e32\u67d3\u8fdb\u7a0b\u7684\u6982\u5ff5\u3002"),(0,a.kt)("p",null,"\u4ece\u4e0a\u8ff0\u4f8b\u5b50\u4e5f\u53ef\u4ee5\u76f4\u89c2\u611f\u53d7\u5230\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u8fdb\u7a0b\u4e3b\u8981\u548c\u64cd\u4f5c\u7cfb\u7edf\u6253\u4ea4\u9053\uff0c\u6bd4\u5982\u6253\u5f00\u539f\u751f\u7a97\u53e3\uff0c\u5e94\u7528\u83dc\u5355\u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6e32\u67d3\u8fdb\u7a0b\u5219\u4e3b\u8981\u5c31\u662f\u6307\u7a97\u53e3\u4e2d\u52a0\u8f7d\u9875\u9762\u8fd0\u884c\u7684\u8fdb\u7a0b\uff0c\u53ef\u4ee5\u7b80\u5355\u7406\u89e3\u4e3a\u6d4f\u89c8\u5668\u7684 Tab \u8fdb\u7a0b\u3002")),(0,a.kt)("p",null,"\u4e0e\u6d4f\u89c8\u5668\u7684\u7f51\u9875\u73af\u5883\u4e0d\u540c\u7684\u662f\uff0c\u5728 Electron \u7684\u6e32\u67d3\u8fdb\u7a0b\u73af\u5883\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528 Node \u7684\u76f8\u5173\u80fd\u529b\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u6709\u4e00\u5f20\u56fe\uff0c\u5927\u5bb6\u53ef\u4ee5\u76f4\u89c2\u611f\u53d7\u5230",(0,a.kt)("strong",{parentName:"p"},"\u53ef\u4f7f\u7528"),"\u7684 API \u4e0a\u7684\u5dee\u5f02\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/electron/electron4.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6e32\u67d3\u8fdb\u7a0b\u548c\u4e3b\u8fdb\u7a0b\u5747\u53ef\u4ee5\u4f7f\u7528 Node\uff0c\u56e0\u6b64 Node \u73af\u5883\u5728\u6700\u5916\u5c42\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u8fdb\u7a0b\u4e3b\u8981\u8c03\u7528\u4e0e\u7cfb\u7edf\u76f8\u5173 API\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6e32\u67d3\u8fdb\u7a0b\u5219\u4e3b\u8981\u662f Web \u4e0a\u7684 API\u3002")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u53c2\u8003\u6587\u7ae0\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://cameronnokes.com/blog/deep-dive-into-electron's-main-and-renderer-processes/"},"\u6e32\u67d3\u8fdb\u7a0b\u3001\u4e3b\u8fdb\u7a0b"),"\u3001",(0,a.kt)("a",{parentName:"p",href:"http://jlord.us/essential-electron/"},"Electron\u672c\u8d28"),"\u3002"))))}u.isMDXComponent=!0}}]);