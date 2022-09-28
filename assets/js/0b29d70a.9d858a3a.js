"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7751],{57522:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var a=t(29901);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=r,v=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return t?a.createElement(v,o(o({ref:n},m),{},{components:t})):a.createElement(v,o({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9730:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(18249),r=(t(29901),t(57522));const i={sidebar_position:3},o="\u5173\u95ed\u7a97\u53e3",l={unversionedId:"guides/features/electron/win-manager/close-window",id:"guides/features/electron/win-manager/close-window",title:"\u5173\u95ed\u7a97\u53e3",description:"\u4ee5\u4e0b\u793a\u4f8b\u4e2d\uff0c\u7a97\u53e3\u5747\u91c7\u7528\uff1a\u5173\u95ed Node\u65b9\u5f0f\u8fdb\u884c\u5f00\u53d1\u3002",source:"@site/docs/guides/features/electron/win-manager/close-window.md",sourceDirName:"guides/features/electron/win-manager",slug:"/guides/features/electron/win-manager/close-window",permalink:"/docs/guides/features/electron/win-manager/close-window",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guidesSidebar",previous:{title:"\u6253\u5f00\u7a97\u53e3",permalink:"/docs/guides/features/electron/win-manager/open-window"},next:{title:"\u6784\u5efa",permalink:"/docs/guides/features/electron/pack"}},s={},p=[{value:"\u76f4\u63a5\u5173\u95ed\u7a97\u53e3",id:"\u76f4\u63a5\u5173\u95ed\u7a97\u53e3",level:2},{value:"\u5173\u95ed\u65f6\u4e8c\u6b21\u786e\u8ba4",id:"\u5173\u95ed\u65f6\u4e8c\u6b21\u786e\u8ba4",level:2},{value:"\u5173\u95ed\u65f6\u7684\u56de\u8c03\u51fd\u6570",id:"\u5173\u95ed\u65f6\u7684\u56de\u8c03\u51fd\u6570",level:2}],m={toc:p};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5173\u95ed\u7a97\u53e3"},"\u5173\u95ed\u7a97\u53e3"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u793a\u4f8b\u4e2d\uff0c\u7a97\u53e3\u5747\u91c7\u7528\uff1a",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/features/electron/develop#%E7%AA%97%E5%8F%A3%E4%B8%AD%E5%85%B3%E9%97%AD-node%E6%8E%A8%E8%8D%90"},(0,r.kt)("strong",{parentName:"a"},"\u5173\u95ed Node")),"\u65b9\u5f0f\u8fdb\u884c\u5f00\u53d1\u3002"))),(0,r.kt)("h2",{id:"\u76f4\u63a5\u5173\u95ed\u7a97\u53e3"},"\u76f4\u63a5\u5173\u95ed\u7a97\u53e3"),(0,r.kt)("p",null,"\u6211\u4eec\u6709\u7a97\u53e3\u7ba1\u7406\u670d\u52a1\uff0c\u56e0\u6b64\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"winService")," \u6765\u5173\u95ed\u7a97\u53e3\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// \u6e32\u67d3\u8fdb\u7a0b\u4e2d\nimport bridge from '@modern-js/runtime/electron-bridge';\n\n...\n// \u5173\u95ed\u5f53\u524d\u7a97\u53e3\nbridge.winService.closeCurrentWindow();\n\n// \u5173\u95ed\u6307\u5b9a\u7a97\u53e3\nbridge.winService.closeWindowByName('demo');\n")),(0,r.kt)("h2",{id:"\u5173\u95ed\u65f6\u4e8c\u6b21\u786e\u8ba4"},"\u5173\u95ed\u65f6\u4e8c\u6b21\u786e\u8ba4"),(0,r.kt)("p",null,"\u6709\u65f6\u5019\uff0c\u5728\u6211\u4eec\u5173\u95ed\u7a97\u53e3\u524d\uff0c\u671f\u671b\u8ba9\u7528\u6237\u786e\u8ba4\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u5373\u53ef\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7a97\u53e3\u914d\u7f6e\u3002"),(0,r.kt)("p",{parentName:"li"},"\u6bd4\u5982\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"demo")," \u7684\u7a97\u53e3\u914d\u7f6e\u4e2d\u589e\u52a0\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export const windowsConfig: WindowConfig[] = [\n  {\n    name: 'demo',\n    addBeforeCloseListener: true\n    ...\n  },\n]\n")),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u8fd9\u4e3b\u8981\u662f\u5728\u4e3b\u8fdb\u7a0b\u4e2d\uff0c\u7a97\u53e3\u6253\u5f00\u65f6\u5019\u6ce8\u518c\u76f8\u5173\u76d1\u542c\uff0c\u4fbf\u4e8e\u6e32\u67d3\u8fdb\u7a0b ",(0,r.kt)("inlineCode",{parentName:"p"},"registerBeforeClose")," \u89e6\u53d1\u3002")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6ce8\u518c\u786e\u8ba4\u56de\u8c03\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// \u6e32\u67d3\u8fdb\u7a0b\u4e2d\nconst onBeforeCloseListener = bridge.winService.registerBeforeClose(() => {\n    return true;\n  });\n\n// \u89e3\u9664\u76d1\u542c\nonBeforeCloseListener.dispose();\n")),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u4e0a\u8ff0 ",(0,r.kt)("inlineCode",{parentName:"li"},"registerBeforeClose")," \u56de\u8c03\u4e2d\uff0c\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," \u8868\u793a\u7ee7\u7eed\u5173\u95ed\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"false")," \u8868\u793a\u963b\u6b62\u5173\u95ed\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u56de\u8c03\u53ef\u4ee5\u662f\u5f02\u6b65\u7684\u3002"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5ffd\u7565\u6240\u6709\u56de\u8c03\uff0c\u76f4\u63a5\u5173\u95ed\u7a97\u53e3\u3002\n\u5f53\u6211\u4eec\u671f\u671b\u5f3a\u5236\u5173\u95ed\u7a97\u53e3\uff0c\u5ffd\u7565\u5173\u95ed\u786e\u8ba4\u5f39\u7a97\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u5173\u95ed\u7684\u65f6\u5019\u4f20\u53c2\u6570\uff0c\u6bd4\u5982\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// \u6e32\u67d3\u8fdb\u7a0b\u4e2d\nimport bridge from '@modern-js/runtime/electron-bridge';\n\n...\n// \u5173\u95ed\u5f53\u524d\u7a97\u53e3\nbridge.winService.closeCurrentWindow({\n    closeMode: 'close'\n  });\n\n// \u5173\u95ed\u6307\u5b9a\u7a97\u53e3\nbridge.winService.closeWindowByName('demo', {\n  closeMode: 'close'\n});\n")),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u5c06\u5ffd\u7565 ",(0,r.kt)("inlineCode",{parentName:"p"},"registerBeforeClose")," \u56de\u8c03\uff0c\u76f4\u63a5\u5173\u95ed\u7a97\u53e3\u3002"))),(0,r.kt)("h2",{id:"\u5173\u95ed\u65f6\u7684\u56de\u8c03\u51fd\u6570"},"\u5173\u95ed\u65f6\u7684\u56de\u8c03\u51fd\u6570"),(0,r.kt)("p",null,"\u6709\u65f6\u5019\uff0c\u6211\u4eec\u671f\u671b\u5728\u7a97\u53e3\u5173\u95ed\u4e4b\u524d\u505a\u4e00\u4e9b\u5de5\u4f5c\u3002\u6bd4\u5982\uff1a\u4fdd\u5b58\u4e00\u4e9b\u6570\u636e\uff0c\u6b64\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u505a\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7a97\u53e3\u914d\u7f6e\u3002"),(0,r.kt)("p",{parentName:"li"},"\u6bd4\u5982\u5728 demo \u7684\u7a97\u53e3\u914d\u7f6e\u4e2d\u589e\u52a0\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export const windowsConfig: WindowConfig[] = [\n  {\n    name: 'demo',\n    addBeforeCloseListener: true\n    ...\n  },\n]\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6e32\u67d3\u8fdb\u7a0b\u6ce8\u518c\u56de\u8c03\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// \u6e32\u67d3\u8fdb\u7a0b\u4e2d\nconst onWillCloseListener = bridge.winService.registerWillClose(() => {\n    console.log('do something before close');\n  });\n\n// \u89e3\u9664\u76d1\u542c\nonWillCloseListener.dispose();\n")),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u56de\u8c03\u53ef\u4ee5\u662f\u5f02\u6b65\u7684\u3002")))))))}d.isMDXComponent=!0}}]);