"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[4855],{54852:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1810:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(26260),a=n(23157),o=(n(49231),n(54852)),i=["components"],s={title:"\u542f\u7528 SSR"},c=void 0,l={unversionedId:"guides/tutorials/c01-getting-started/1.4-enable-ssr",id:"guides/tutorials/c01-getting-started/1.4-enable-ssr",isDocsHomePage:!1,title:"\u542f\u7528 SSR",description:"\u4e0a\u4e00\u5c0f\u8282\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528 Modern.js \u8c03\u8bd5\u9879\u76ee\uff0c\u672c\u5c0f\u8282\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u5feb\u901f\u5f00\u542f SSR\uff08\u670d\u52a1\u7aef\u6e32\u67d3\uff09\u3002",source:"@site/docs/guides/tutorials/c01-getting-started/1.4-enable-ssr.md",sourceDirName:"guides/tutorials/c01-getting-started",slug:"/guides/tutorials/c01-getting-started/1.4-enable-ssr",permalink:"/docs/guides/tutorials/c01-getting-started/1.4-enable-ssr",tags:[],version:"current",frontMatter:{title:"\u542f\u7528 SSR"},sidebar:"guidesSidebar",previous:{title:"\u8c03\u8bd5\u9879\u76ee",permalink:"/docs/guides/tutorials/c01-getting-started/1.3-dev-command"},next:{title:"\u8fd0\u884c\u9879\u76ee",permalink:"/docs/guides/tutorials/c01-getting-started/1.5-start-command"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4e0a\u4e00\u5c0f\u8282\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528 Modern.js \u8c03\u8bd5\u9879\u76ee\uff0c\u672c\u5c0f\u8282\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u5feb\u901f\u5f00\u542f SSR\uff08\u670d\u52a1\u7aef\u6e32\u67d3\uff09\u3002"),(0,o.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e0b\uff0c\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"modernConfig")," \u5b57\u6bb5\uff1a"),(0,o.kt)("p",null,"\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="package.json"',title:'"package.json"'},'"modernConfig": {\n  "server": {\n    "ssr": true\n  }\n}\n')),(0,o.kt)("p",null,"\u8fd9\u6837\u9879\u76ee\u7684 SSR \u5c31\u5df2\u7ecf\u5f00\u542f\u4e86\uff0c\u91cd\u65b0\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run dev")," \u770b\u770b\u6548\u679c\u5427\u3002"),(0,o.kt)("p",null,"\u7528 Chrome \u6253\u5f00 ",(0,o.kt)("inlineCode",{parentName:"p"},"view-source:http://localhost:8080/"),"\uff0c\u67e5\u770b HTML \u6587\u4ef6\u6e90\u4ee3\u7801\uff0c\u53ef\u4ee5\u770b\u5230 root \u6839\u5143\u7d20\u4e0b\u5b58\u5728\u5df2\u7ecf\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u597d\u7684 HTML\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Modern.js \u6846\u67b6\u652f\u6301 Serverless SSR\uff0c\u4e0d\u9700\u8981\u81ea\u5efa server \u548c\u90e8\u7f72\u8fd0\u7ef4\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u4e13\u6ce8\u4e8e App \u7684\u5f00\u53d1\u3002\n\u9664\u6b64\u4e4b\u5916\uff0cModern.js \u4e5f\u652f\u6301 Serverless BFF\uff0c\u4e24\u8005\u90fd\u4f1a\u5728\u540e\u9762\u7684\u7ae0\u8282\u8be6\u7ec6\u4ecb\u7ecd\u3002"))))}d.isMDXComponent=!0}}]);