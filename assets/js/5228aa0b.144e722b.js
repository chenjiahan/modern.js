"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[1403],{54852:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var r=t(49231);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(t),u=a,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3305:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var r=t(91528),a=t(2854),i=(t(49231),t(54852)),o=["components"],p={title:"\u7ba1\u7406\u5e94\u7528\u5165\u53e3\u200b\u200b\u200b"},l=void 0,s={unversionedId:"guides/tutorials/c07-app-entry/7.3-manage-entries-by-hand",id:"guides/tutorials/c07-app-entry/7.3-manage-entries-by-hand",title:"\u7ba1\u7406\u5e94\u7528\u5165\u53e3\u200b\u200b\u200b",description:"\u4e0a\u4e00\u4e2a\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u5b66\u4e60\u4e86\u4f7f\u7528\u547d\u4ee4\u884c\u624b\u52a8\u521b\u5efa\u65b0\u7684\u5165\u53e3\u3002",source:"@site/docs/guides/tutorials/c07-app-entry/7.3-manage-entries-by-hand.md",sourceDirName:"guides/tutorials/c07-app-entry",slug:"/guides/tutorials/c07-app-entry/7.3-manage-entries-by-hand",permalink:"/docs/guides/tutorials/c07-app-entry/7.3-manage-entries-by-hand",tags:[],version:"current",frontMatter:{title:"\u7ba1\u7406\u5e94\u7528\u5165\u53e3\u200b\u200b\u200b"},sidebar:"guidesSidebar",previous:{title:"\u7528 new \u547d\u4ee4\u521b\u5efa\u5165\u53e3\u200b\u200b\u200b",permalink:"/docs/guides/tutorials/c07-app-entry/7.2-add-entry-in-cli"},next:{title:"\u7528 CSS in JS \u5199\u7ec4\u4ef6",permalink:"/docs/guides/tutorials/c06-css-and-component/6.1-css-in-js"}},c={},d=[],m={toc:d};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4e0a\u4e00\u4e2a\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u5b66\u4e60\u4e86\u4f7f\u7528\u547d\u4ee4\u884c\u624b\u52a8\u521b\u5efa\u65b0\u7684\u5165\u53e3\u3002"),(0,i.kt)("p",null,"\u5728\u8fd9\u4e00\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u901a\u8fc7\u914d\u7f6e\u9879\u6765\u5bf9\u5165\u53e3\u8fdb\u884c\u7ba1\u7406\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"modernConfig"),"\uff0c\u6216\u662f\u5728\u7b26\u5408",(0,i.kt)("a",{parentName:"p",href:"https://github.com/davidtheclark/cosmiconfig"},"\u4e1a\u754c\u4e3b\u6d41\u60ef\u4f8b"),"\u7684 Modern.js \u914d\u7f6e\u6587\u4ef6\u91cc\uff0c\u81ea\u5df1\u5199\u4ee3\u7801\u6765\u63a7\u5236\u9879\u76ee\u7684\u914d\u7f6e\u3002"),(0,i.kt)("p",null,"\u4e4b\u524d\u7684\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u90fd\u662f\u76f4\u63a5\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"modernConfig")," \u5b57\u6bb5\u6765\u5b9e\u73b0\u4fee\u6539\u914d\u7f6e\u3002"),(0,i.kt)("p",null,"\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u5728\u9879\u76ee\u76ee\u5f55\u4e0b\uff0c\u65b0\u5efa\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config.js"),"\uff08\u82e5\u5df2\u65b0\u5efa\u53ef\u5ffd\u7565\uff09\uff0c\u5e76\u5728\u91cc\u9762\u6dfb\u52a0\u5185\u5bb9\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  server: {\n    ssr: true,\n    ssrByEntries: {\n      'landing-page': false,\n    },\n  },\n};\n")),(0,i.kt)("p",null,"\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u518d\u7528\u6d4f\u89c8\u5668\u6253\u5f00 ",(0,i.kt)("inlineCode",{parentName:"p"},"view-source:http://localhost:8080/landing-page"),"\uff0c\u53ef\u4ee5\u770b\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"landing-page")," \u7f51\u9875\u5185\u5bb9\u662f\u901a\u8fc7 js \u52a8\u6001\u52a0\u8f7d\u7684\uff0c\u4e14\u6b64\u9875\u9762\u7684 SSR \u529f\u80fd\u88ab\u5173\u95ed\u3002"),(0,i.kt)("p",null,"\u6ce8\uff1a\u6b64\u65f6\uff0c\u5176\u4ed6\u9875\u9762\u7684 SSR \u529f\u80fd\u4ecd\u7136\u6b63\u5e38\u5f00\u542f\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u6ce8\u91ca\u6389 ",(0,i.kt)("inlineCode",{parentName:"p"},"ssrByEntries")," \u548c\u5b83\u7684\u503c\uff0clanding-page \u7684 SSR \u529f\u80fd\u5c31\u6062\u590d\u5f00\u542f\u4e86\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5f53\u76f8\u540c\u914d\u7f6e\u5b57\u6bb5\u51fa\u73b0\u4e8e\u4e24\u4e2a\u6587\u4ef6\u4e2d\u65f6\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"modernConfig")," \u5b57\u6bb5\u91cc\u7684\u914d\u7f6e\u4f1a\u4f18\u5148\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u4e2d\u7684\u914d\u7f6e\u3002"))),(0,i.kt)("p",null,"\u5f53\u9700\u8981\u914d\u7f6e\u5305\u542b\u590d\u6742\u903b\u8f91\u7684\u9009\u9879\u65f6\uff0c\u6bd4\u5982\uff0c\u5f00\u53d1\u8005\u60f3\u5728\u9879\u76ee\u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"*.myext")," \u6587\u4ef6\uff0c\u8fd9\u662f\u4e00\u79cd\u975e\u4e3b\u6d41\u7684\u6587\u4ef6\u7c7b\u578b\uff0cModern.js \u6ca1\u6709\u9ed8\u8ba4\u96c6\u6210\u5bf9\u5b83\u7684\u652f\u6301\u3002"),(0,i.kt)("p",null,"\u6240\u4ee5\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u91cc\u589e\u52a0\u5bf9\u5b83\u7684\u652f\u6301\uff08\u901a\u8fc7webpack\u914d\u7f6e\uff09\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u66f4\u591a webpack \u914d\u7f6e\u76f8\u5173\u53ef\u4ee5\u67e5\u770b ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/config/tools/webpack"},"Webpack \u914d\u7f6e\u6587\u6863"),"\u3002"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \u6ce8\uff1a\u4ee5\u4e0b\u4e3a\u4f2a\u4ee3\u7801\uff0cloader\u7b49\u540d\u5b57\u7686\u4e3a\u865a\u6784\uff0c\u4ec5\u505a\u6f14\u793a\u4f7f\u7528\nexport default defineConfig({\n  tools: {\n    webpackChain: (chain) => {\n      chain.module\n        .rule('my-loader')\n        .test(/\\.myext$/)\n        .use('custom-loader')\n        .loader('myext-loader')\n        .options({});\n    },\n  },\n};\n")),(0,i.kt)("p",null,"\u8fd9\u4e2a\u9700\u6c42\u8981\u4fee\u6539 webpack \u914d\u7f6e\uff0c\u7528 Modern.js \u914d\u7f6e\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"tools.webpack"),"\u9009\u9879\u6765\u5b9e\u73b0\u663e\u7136\u662f\u66f4\u65b9\u4fbf\u7684\u3002"),(0,i.kt)("p",null,"\u8fd8\u6709\u4e00\u4e9b\u65f6\u5019\uff0c\u9700\u8981\u4e00\u4e9b\u66f4\u590d\u6742\u7684\u903b\u8f91\u6765\u505a\u8bbe\u7f6e\uff0c\u6bd4\u5982\u9700\u8981 JS \u53d8\u91cf\u3001\u8868\u8fbe\u5f0f\u3001\u5bfc\u5165\u6a21\u5757\u7b49\uff0c\u8fd9\u79cd\u65f6\u5019\u4e5f\u9002\u5408\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u6765\u624b\u52a8\u914d\u7f6e\uff0c\u6bd4\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default defineConfig({\n  server: {\n    ssrByEntries: {\n      'landing-page': process.env.NODE_ENV !== 'production',\n    },\n  },\n};\n")),(0,i.kt)("p",null,"\u4ee5\u4e0a\u4ee3\u7801\u5b9e\u73b0\u8868\u793a\u53ea\u5728\u5f00\u53d1\u73af\u5883\u91cc\u5f00\u542f SSR\u3002"))}u.isMDXComponent=!0}}]);