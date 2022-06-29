"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[3196],{54852:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(49231);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),k=i,c=u["".concat(o,".").concat(k)]||u[k]||m[k]||r;return n?a.createElement(c,l(l({ref:t},d),{},{components:n})):a.createElement(c,l({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(86215),i=(n(49231),n(54852));const r={sidebar_position:1,title:"BFF \u51fd\u6570"},l=void 0,p={unversionedId:"guides/features/server-side/bff/function",id:"guides/features/server-side/bff/function",title:"BFF \u51fd\u6570",description:"\u5728\u4e00\u4f53\u5316 Web \u4e13\u9898\u4e2d\uff0c\u4ecb\u7ecd\u8fc7 Modern.js \u7684 Serverless Web Development \u5f00\u53d1\u65b9\u5f0f\uff0c\u5305\u62ec\u81ea\u52a8\u5316\u8def\u7531\u3001\u5185\u7f6e Web Server\u3001\u4e00\u4f53\u5316 SSG/SSR/SPR \u7b49\u3002\u5176\u4e2d\u7684 SSR \u6280\u672f\uff0c\u53ef\u4ee5\u79f0\u4f5c Serverless SSR\uff0c\u5b9e\u73b0\u4e86 SSR \u5728\u5f00\u53d1\u3001\u8fd0\u884c\u3001\u90e8\u7f72\u5168\u6d41\u7a0b\u4e2d\u7684 Serverless\u3002",source:"@site/docs/guides/features/server-side/bff/function.md",sourceDirName:"guides/features/server-side/bff",slug:"/guides/features/server-side/bff/function",permalink:"/docs/guides/features/server-side/bff/function",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"BFF \u51fd\u6570"},sidebar:"guidesSidebar",previous:{title:"\u4e00\u4f53\u5316 SSR/SPR",permalink:"/docs/guides/features/server-side/web/ssr-and-spr"},next:{title:"\u643a\u5e26 Schema \u7684 BFF \u51fd\u6570",permalink:"/docs/guides/features/server-side/bff/schema"}},o={},s=[{value:"\u4e00\u4f53\u5316\u8c03\u7528",id:"\u4e00\u4f53\u5316\u8c03\u7528",level:2},{value:"\u51fd\u6570\u8def\u7531",id:"\u51fd\u6570\u8def\u7531",level:2},{value:"\u9ed8\u8ba4\u8def\u7531",id:"\u9ed8\u8ba4\u8def\u7531",level:3},{value:"\u5d4c\u5957\u8def\u7531",id:"\u5d4c\u5957\u8def\u7531",level:3},{value:"\u52a8\u6001\u8def\u7531",id:"\u52a8\u6001\u8def\u7531",level:3},{value:"\u767d\u540d\u5355",id:"\u767d\u540d\u5355",level:3},{value:"RESTful API",id:"restful-api",level:2},{value:"\u51fd\u6570\u5177\u540d\u5bfc\u51fa",id:"\u51fd\u6570\u5177\u540d\u5bfc\u51fa",level:3},{value:"\u51fd\u6570\u53c2\u6570\u89c4\u5219",id:"\u51fd\u6570\u53c2\u6570\u89c4\u5219",level:3},{value:"Dynamic Path",id:"dynamic-path",level:4},{value:"RequestOption",id:"requestoption",level:4}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/features/server-side/web/routes"},"\u4e00\u4f53\u5316 Web \u4e13\u9898"),"\u4e2d\uff0c\u4ecb\u7ecd\u8fc7 Modern.js \u7684 Serverless Web Development \u5f00\u53d1\u65b9\u5f0f\uff0c\u5305\u62ec\u81ea\u52a8\u5316\u8def\u7531\u3001\u5185\u7f6e Web Server\u3001\u4e00\u4f53\u5316 SSG/SSR/SPR \u7b49\u3002\u5176\u4e2d\u7684 SSR \u6280\u672f\uff0c\u53ef\u4ee5\u79f0\u4f5c Serverless SSR\uff0c\u5b9e\u73b0\u4e86 SSR \u5728\u5f00\u53d1\u3001\u8fd0\u884c\u3001\u90e8\u7f72\u5168\u6d41\u7a0b\u4e2d\u7684 Serverless\u3002"),(0,i.kt)("p",null,"\u8fd9\u4e00\u4e13\u9898\u4e2d\u4f1a\u8be6\u7ec6\u4ecb\u7ecd\u53e6\u4e00\u90e8\u5206\uff1aServerless BFF\u3002\u8ddf SSR \u4e00\u6837\uff0c\u80fd\u5b9e\u73b0 BFF\uff08Backends for Frontends\uff09\u5728\u5f00\u53d1\u3001\u8fd0\u884c\u3001\u90e8\u7f72\u5168\u6d41\u7a0b\u4e2d\u7684 Serverless\u3002"),(0,i.kt)("p",null,"\u5728",(0,i.kt)("strong",{parentName:"p"},"\u524d\u540e\u7aef\u5206\u79bb"),"\u6982\u5ff5\u51fa\u73b0\u540e\u4e00\u6bb5\u65f6\u95f4\u53d1\u5c55\u4e2d\uff0c\u524d\u7aef\u90e8\u5206\u80fd\u591f\u505a\u7684\u4e8b\u8d8a\u6765\u8d8a\u591a\uff0c\u524d\u7aef\u9700\u8981\u4e00\u4e9b\u9762\u5411 UI \u7684\u6570\u636e\u63a5\u53e3\uff0c\u56e0\u6b64\u4e1a\u754c\u5f15\u5165\u4e86 BFF \u8fd9\u4e00\u6982\u5ff5\u3002"),(0,i.kt)("p",null,"\u5b83\u4e3b\u8981\u4e3a\u4e86\u89e3\u51b3\u7684\u95ee\u9898\u5305\u62ec\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6839\u636e\u81ea\u8eab\u4e1a\u52a1\u9700\u6c42\uff0c\u5bf9\u66f4\u5e95\u5c42 API \u7684\u805a\u5408\u3001\u6620\u5c04\u3001\u88c1\u526a\u3001\u4ee3\u7406\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4e00\u4e9b\u7279\u5b9a\u573a\u666f\u7684\u6570\u636e\u8fdb\u884c\u7f13\u5b58\uff0c\u63d0\u9ad8\u6027\u80fd\uff0c\u8fdb\u800c\u63d0\u5347\u7528\u6237\u4f53\u9a8c\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6839\u636e\u5df2\u6709\u63a5\u53e3\u5feb\u901f\u5f00\u53d1\u65b0\u4ea7\u54c1\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e0e\u7b2c\u4e09\u65b9\u7cfb\u7edf\u5bf9\u63a5\uff0c\u4f8b\u5982\u767b\u9646\u9274\u6743\u3002")),(0,i.kt)("p",null,"Modern.js \u63d0\u4f9b\u4e86",(0,i.kt)("strong",{parentName:"p"},"\u4e00\u4f53\u5316 BFF \u65b9\u6848"),"\u6765\u8fdb\u4e00\u6b65\u5f3a\u5316 BFF \u80fd\u529b\uff0c\u4e3b\u8981\u5305\u62ec\u4ee5\u4e0b\u80fd\u529b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5feb\u901f\u5f00\u53d1\u8c03\u8bd5\u4e0a\u7ebf\uff0c\u5728\u540c\u4e00\u9879\u76ee\u4e2d\u8fd0\u884c\u3001\u6784\u5efa\u3001\u90e8\u7f72 BFF \u4ee3\u7801\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6781\u7b80\u7684\u7eaf\u51fd\u6570\u8c03\u7528\uff0c\u5728\u524d\u7aef\u76f4\u63a5 import BFF \u51fd\u6570\uff0c\u8c03\u7528\u65f6\u80fd\u81ea\u52a8\u8f6c\u6362\u6210 HTTP \u8bf7\u6c42\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u65e0\u79c1\u6709\u534f\u8bae\uff0c\u9075\u5faa RESTful API \u89c4\u8303\uff0c\u6240\u6709 BFF \u63a5\u53e3\u90fd\u662f\u6807\u51c6\u5316\u7684\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5b8c\u5584\u7684 TypeScript \u652f\u6301\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6ee1\u8db3\u7528\u6237\u4f7f\u7528\u504f\u597d\uff0c\u652f\u6301\u591a\u6846\u67b6\u6269\u5c55\u5199\u6cd5\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u8c03\u7528\u5b89\u5168\uff0c\u63d0\u4f9b schema \u7684\u63a5\u53e3\u5b9a\u4e49\u65b9\u5f0f\u3002")),(0,i.kt)("h2",{id:"\u4e00\u4f53\u5316\u8c03\u7528"},"\u4e00\u4f53\u5316\u8c03\u7528"),(0,i.kt)("p",null,"Modern.js \u5141\u8bb8\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u4e0b\u7684 React \u7ec4\u4ef6\u4e2d\u76f4\u63a5\u5f15\u5165\u5e76\u8c03\u7528\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," \u76ee\u5f55\u4e0b\u5b9a\u4e49\u597d\u51fd\u6570\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/guides/tutorials/c09-bff/9.2-enable-bff"},"\u5f00\u542f BFF \u529f\u80fd"),"\u4e4b\u540e\uff0c\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"api/hello.ts")," \u6587\u4ef6\uff0c\u8fd9\u91cc\u5b9a\u4e49\u4e00\u4e2a\u6700\u7b80\u5355\u7684 BFF \u51fd\u6570\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/hello.ts"',title:'"api/hello.ts"'},"export const get = async () => 'Hello Modern.js';\n")),(0,i.kt)("p",null,"\u63a5\u7740\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," \u4e0b\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"App.tsx")," \u4e2d\u76f4\u63a5 import \u51fd\u6570\u8c03\u7528\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=src/App.tsx",title:"src/App.tsx"},"import { useState, useEffect } from 'react';\nimport { get as hello } from '@api/hello';\n\nexport default () => {\n  const [text, setText] = useState('');\n\n  useEffect(() => {\n    hello().then(setText);\n  }, []);\n  return <div>{text}</div>;\n};\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Modern.js \u751f\u6210\u5668\u5df2\u7ecf\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u4e2d\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"@api")," \u522b\u540d\uff0c\u56e0\u6b64\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u522b\u540d\u7684\u65b9\u5f0f\u5f15\u5165\u51fd\u6570\u3002"))),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," \u4e2d\u5f15\u5165\u7684\u51fd\u6570\uff0c\u4f1a\u81ea\u52a8\u8f6c\u6362\u6210\u63a5\u53e3\u8c03\u7528\uff0c\u4e0d\u9700\u8981\u518d\u53bb\u901a\u8fc7 fetch \u53bb\u8c03\u7528\u63a5\u53e3\u3002"),(0,i.kt)("p",null,"\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run dev")," \u6253\u5f00 ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8080/"},"http://localhost:8080/")," \u53ef\u4ee5\u770b\u5230\u9875\u9762\u5df2\u7ecf\u5c55\u793a\u4e86 BFF \u51fd\u6570\u8fd4\u56de\u7684\u5185\u5bb9\uff0c\u5728Network\uff0c\u53ef\u4ee5\u770b\u5230\u9875\u9762\u5411 ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8080/api/hello"},"http://localhost:8080/api/hello")," \u53d1\u9001\u4e86\u8bf7\u6c42\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/hello-modern.png",alt:"Network"})),(0,i.kt)("h2",{id:"\u51fd\u6570\u8def\u7531"},"\u51fd\u6570\u8def\u7531"),(0,i.kt)("p",null,"Modern.js \u4e2d\uff0cBFF \u51fd\u6570\u5bf9\u5e94\u7684\u8def\u7531\u7cfb\u7edf\u662f\u57fa\u4e8e\u6587\u4ef6\u7cfb\u7edf\u5b9e\u73b0\u7684\uff0c\u4e5f\u662f\u4e00\u79cd",(0,i.kt)("strong",{parentName:"p"},"\u7ea6\u5b9a\u5f0f\u8def\u7531"),"\u3002"),(0,i.kt)("p",null,"\u51fd\u6570\u6a21\u5f0f\u4e0b ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," \u4e0b\u7684\u6240\u6709\u6587\u4ef6\u4e2d\u7684\u6bcf\u4e2a BFF \u51fd\u6570\u90fd\u4f1a\u6620\u5c04\u4e3a\u4e00\u4e2a\u63a5\u53e3\uff0c\u6846\u67b6\u6a21\u5f0f\u4e0b ",(0,i.kt)("inlineCode",{parentName:"p"},"api/lambda")," \u4e0b\u7684\u6240\u6709\u6587\u4ef6\u4e2d\u7684\u6bcf\u4e2a BFF \u51fd\u6570\u90fd\u4f1a\u6620\u5c04\u4e3a\u4e00\u4e2a\u63a5\u53e3\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"$BASENAME")," \u6307\u7684\u662f BFF \u51fd\u6570\u7684",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/config/bff/prefix"},"\u8def\u7531\u524d\u7f00"),"\uff0c\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u4e2d\u8fdb\u884c\u914d\u7f6e\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"/api"),"\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/config/bff/prefix"},"prefix")," \u8bbe\u7f6e\u516c\u5171\u8def\u7531\u7684\u524d\u7f00\u3002"))),(0,i.kt)("h3",{id:"\u9ed8\u8ba4\u8def\u7531"},"\u9ed8\u8ba4\u8def\u7531"),(0,i.kt)("p",null,"\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"index.[jt]s")," \u547d\u540d\u7684\u6587\u4ef6\u4f1a\u88ab\u6620\u5c04\u5230\u4e0a\u4e00\u5c42\u76ee\u5f55\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"api/index.ts")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"$BASENAME/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"api/user/index.ts")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"$BASENAME/user"))),(0,i.kt)("h3",{id:"\u5d4c\u5957\u8def\u7531"},"\u5d4c\u5957\u8def\u7531"),(0,i.kt)("p",null,"\u652f\u6301\u89e3\u6790\u5d4c\u5957\u7684\u6587\u4ef6\uff0c\u5982\u679c\u521b\u5efa\u5d4c\u5957\u6587\u4ef6\u5939\u7ed3\u6784\uff0c\u6587\u4ef6\u4ecd\u4f1a\u4ee5\u76f8\u540c\u65b9\u5f0f\u81ea\u52a8\u89e3\u6790\u8def\u7531\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"api/hello.ts")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"$BASENAME/hello")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"api/user/list.ts")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"$BASENAME/user/list"))),(0,i.kt)("h3",{id:"\u52a8\u6001\u8def\u7531"},"\u52a8\u6001\u8def\u7531"),(0,i.kt)("p",null,"\u540c\u6837\u7684\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u547d\u540d\u5e26\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"[xxx]")," \u7684\u6587\u4ef6\u5939\u6216\u8005\u6587\u4ef6\u6765\u652f\u6301\u52a8\u6001\u7684\u547d\u540d\u8def\u7531\u53c2\u6570\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"api/user/[username]/info.ts")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"$BASENAME/user/:username/info")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"api/user/username/[action].ts")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"$BASENAME/user/username/:action"))),(0,i.kt)("h3",{id:"\u767d\u540d\u5355"},"\u767d\u540d\u5355"),(0,i.kt)("p",null,"\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"p"},"api/")," \u76ee\u5f55\u4e0b\u6240\u6709\u6587\u4ef6\u90fd\u4f1a\u5f53\u4f5c BFF \u51fd\u6570\u6587\u4ef6\u53bb\u89e3\u6790\uff0c\u4f46\u4ee5\u4e0b\u6587\u4ef6\u4e0d\u4f1a\u88ab\u89e3\u6790\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u547d\u540d\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"li"},"_")," \u5f00\u5934\u7684\u6587\u4ef6\u3002\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"_utils.ts"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u547d\u540d\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"li"},"_")," \u5f00\u5934\u7684\u6587\u4ef6\u5939\u4e0b\u6240\u6709\u6587\u4ef6\u3002\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"_utils/index.ts"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"_utils/cp.ts"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u6587\u4ef6\u3002\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"foo.test.ts"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"TypeScript \u7c7b\u578b\u6587\u4ef6\u3002\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"hello.d.ts"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node_module")," \u4e0b\u7684\u6587\u4ef6\u3002")),(0,i.kt)("h2",{id:"restful-api"},"RESTful API"),(0,i.kt)("p",null,"Modern.js \u7684 BFF \u51fd\u6570\u9700\u8981\u9075\u5faa RESTful API \u6807\u51c6\u6765\u5b9a\u4e49, \u9075\u5faa HTTP Method \u89c4\u8303\uff0c\u5e76\u4e14\u4e0d\u5141\u8bb8\u81ea\u7531\u5b9a\u4e49\u53c2\u6570\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5047\u8bbe\u51fd\u6570\u5141\u8bb8\u81ea\u7531\u5b9a\u4e49\u53c2\u6570\uff0c\u4ea7\u51fa\u7684\u8def\u7531\u5fc5\u7136\u7531",(0,i.kt)("strong",{parentName:"p"},"\u79c1\u6709\u534f\u8bae"),"\u8fdb\u884c\u8c03\u7528\uff08\u539f\u56e0\u662f\u65e0\u6cd5\u533a\u5206\u8bf7\u6c42\u53c2\u6570\u4e0e\u8bf7\u6c42\u4f53\uff09\uff0c\u800c\u65e0\u6cd5\u5b9e\u73b0\u4efb\u610f\u7684 RESTful API\u3002"),(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u670d\u52a1\u4ec5\u7528\u4e8e\u5e94\u7528\u672c\u8eab\u4e0d\u5b58\u5728\u95ee\u9898\uff0c\u4f46\u5b83",(0,i.kt)("strong",{parentName:"p"},"\u4e0d\u6807\u51c6\u7684\u63a5\u53e3\u5b9a\u4e49"),"\u65e0\u6cd5\u878d\u5165\u66f4\u5927\u7684\u4f53\u7cfb\u3002 \u5728\u591a\u4e2a\u7cfb\u7edf\u5171\u540c\u5de5\u4f5c\u7684\u60c5\u51b5\u4e0b\uff08\u4f8b\u5982 BFF \u4f4e\u7801\u642d\u5efa\uff09\uff0c\u4f1a\u5bfc\u81f4\u5176\u4ed6\u7cfb\u7edf\u4e5f\u9700\u8981\u9075\u5faa",(0,i.kt)("strong",{parentName:"p"},"\u79c1\u6709\u534f\u8bae"),"\u3002"))),(0,i.kt)("h3",{id:"\u51fd\u6570\u5177\u540d\u5bfc\u51fa"},"\u51fd\u6570\u5177\u540d\u5bfc\u51fa"),(0,i.kt)("p",null,"Modern.js BFF \u51fd\u6570\u7684\u5bfc\u51fa\u540d\u51b3\u5b9a\u4e86\u51fd\u6570\u5bf9\u5e94\u63a5\u53e3\u7684 Method\uff0c\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"get"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"post"),"\u7b49\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u6309\u7167\u4ee5\u4e0b\u4f8b\u5b50\uff0c\u53ef\u5bfc\u51fa\u4e00\u4e2a GET \u63a5\u53e3\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export const get = async () => {\n  return {\n    name: 'Modern.js',\n    desc: '\u73b0\u4ee3 web \u5de5\u7a0b\u65b9\u6848',\n  };\n};\n")),(0,i.kt)("p",null,"\u6309\u7167\u4ee5\u4e0b\u4f8b\u5b50\uff0c\u5219\u53ef\u5bfc\u51fa\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," \u63a5\u53e3"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export const post = async () => {\n  return {\n    name: 'Modern.js',\n    desc: '\u73b0\u4ee3 web \u5de5\u7a0b\u65b9\u6848',\n  };\n};\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"MWA \u4e2d\u652f\u6301\u4e86 9 \u79cd Method \u5b9a\u4e49\uff0c\u5373\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"GET"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"POST"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"PUT"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"CONNECT"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"TRACE"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"PATCH"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"OPTION"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"HEAD"),"\uff0c\u5373\u53ef\u4ee5\u7528\u8fd9\u4e9b Method \u4f5c\u4e3a\u51fd\u6570\u5bfc\u51fa\u7684\u540d\u5b57\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u540d\u5b57\u662f\u5927\u5c0f\u4e0d\u654f\u611f\u7684\uff0c\u5c31\u662f\u8bf4\uff0c\u5982\u679c\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"GET"),"\uff0c\u5199\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Get"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"GEt"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"GET"),"\uff0c\u90fd\u53ef\u4ee5\u51c6\u786e\u8bc6\u522b\u3002\u800c\u9ed8\u8ba4\u5bfc\u51fa\uff0c\u5373 ",(0,i.kt)("inlineCode",{parentName:"p"},"export default xxx")," \u5219\u4f1a\u88ab\u6620\u5c04\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Get"),"\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u5728\u4e00\u4e2a\u6587\u4ef6\u4e2d\u5b9a\u4e49\u591a\u4e2a\u4e0d\u540c Method \u7684\u51fd\u6570\uff0c\u4f46\u5982\u679c\u5b9a\u4e49\u591a\u4e2a\u76f8\u540c Method \u7684\u51fd\u6570\uff0c\u5219\u53ea\u6709\u7b2c\u4e00\u4e2a\u4f1a\u751f\u6548\u3002"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5b9a\u4e49\u7684\u51fd\u6570\u90fd\u5e94\u8be5\u662f\u5f02\u6b65\u7684\uff0c\u4e0e\u51fd\u6570\u8c03\u7528\u65f6\u7c7b\u578b\u6709\u5173\uff0c\u540e\u9762\u4f1a\u63d0\u5230\u3002"))),(0,i.kt)("h3",{id:"\u51fd\u6570\u53c2\u6570\u89c4\u5219"},"\u51fd\u6570\u53c2\u6570\u89c4\u5219"),(0,i.kt)("p",null,"\u5982\u4e0a\u6240\u8ff0\uff0c\u4e3a\u4e86\u6ee1\u8db3 RESTful API \u7684\u8bbe\u8ba1\u6807\u51c6\uff0c\u56e0\u6b64 Modern.js \u4e2d BFF \u51fd\u6570\u9700\u8981\u9075\u5faa\u4e00\u5b9a\u7684\u5165\u53c2\u89c4\u5219\u3002"),(0,i.kt)("p",null,"Modern.js \u51fd\u6570\u5b9a\u4e49\u5206\u4e3a\u666e\u901a\u51fd\u6570\u4e0e\u5e26\u6709 schema \u7684\u51fd\u6570\uff0c\u8fd9\u4e00\u5c0f\u8282\u5148\u4ecb\u7ecd\u666e\u901a\u51fd\u6570\u3002"),(0,i.kt)("p",null,"\u666e\u901a\u51fd\u6570\u53c2\u6570\u5206\u4e3a\u4e24\u5757\uff0c\u5206\u522b\u662f\u8bf7\u6c42\u8def\u5f84\u4e2d\u7684\u52a8\u6001\u90e8\u5206\u548c\u8bf7\u6c42\u9009\u9879 ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestOption"),"\u3002"),(0,i.kt)("h4",{id:"dynamic-path"},"Dynamic Path"),(0,i.kt)("p",null,"\u52a8\u6001\u8def\u7531\u4f1a\u4f5c\u4e3a\u51fd\u6570\u7b2c\u4e00\u90e8\u5206\u7684\u5165\u53c2\uff0c\u6bcf\u4e2a\u5165\u53c2\u5bf9\u5e94\u4e00\u6bb5\u52a8\u6001\u8def\u7531\u3002\u4f8b\u5982\u4ee5\u4e0b\u793a\u4f8b\uff0cuid \u4f1a\u4f5c\u4e3a\u524d\u4e24\u4e2a\u53c2\u6570\u4f20\u9012\u5230\u51fd\u6570\u4e2d\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/[level]/[id].ts"',title:'"api/[level]/[id].ts"'},"export default async (level: number, id: number) => {\n  const userData = await queryUser(level, uid);\n  return userData\n}\n")),(0,i.kt)("p",null,"\u5728\u8c03\u7528\u65f6\u76f4\u63a5\u4f20\u5165\u52a8\u6001\u53c2\u6570\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="App.tsx"',title:'"App.tsx"'},"import { useState, useEffect } from 'react'\nimport { get as getUser } from '@api/[level]/[id]'\n\nexport default () => {\n  const [name, setName] = useState('')\n\n  useEffect(() => {\n    getUser(6, 001).then(\n      userData => setName(userData.name)\n    )\n  }, [])\n\n  return <div>{name}</div>\n}\n")),(0,i.kt)("h4",{id:"requestoption"},"RequestOption"),(0,i.kt)("p",null,"Dynamic Path \u4e4b\u540e\u7684\u53c2\u6570\u662f\u5305\u542b querystring\u3001request body \u7684\u5bf9\u8c61 ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestOption"),"\uff0c\u8fd9\u4e2a\u5b57\u6bb5\u7528\u6765\u5b9a\u4e49 ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," \u7684\u7c7b\u578b\u3002"),(0,i.kt)("p",null,"\u5728\u4e0d\u5b58\u5728\u52a8\u6001\u8def\u7531\u7684\u666e\u901a\u51fd\u6570\u4e2d\uff0c\u53ef\u4ee5\u4ece\u7b2c\u4e00\u4e2a\u5165\u53c2\u4e2d\u83b7\u53d6\u4f20\u5165\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"query"),"\uff0c\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/hello.ts"',title:'"api/hello.ts"'},"import type { RequestOption } from '@modern-js/runtime/server'\n\nexport async function post(\n  { query, data }: RequestOption<Record<string, string>, Record<string, string>>\n) {\n  // do somethings\n}\n")),(0,i.kt)("p",null,"\u5f53\u51fd\u6570\u6587\u4ef6\u4f7f\u7528\u52a8\u6001\u8def\u7531\u89c4\u5219\u65f6\uff0c\u52a8\u6001\u8def\u7531\u4f1a\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestOption")," \u5bf9\u8c61\u53c2\u6570\u524d\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/[sku]/[id]/item.ts"',title:'"api/[sku]/[id]/item.ts"'},"export async function post(\n  sku: string,\n  id: string,\n  { data, query }: RequestOption<Record<string, string>, Record<string, string>>\n) {\n  // do somethings\n}\n")),(0,i.kt)("p",null,"\u8c03\u7528\u65f6\u4e5f\u6309\u7167\u51fd\u6570\u5b9a\u4e49\uff0c\u4f20\u5165\u5bf9\u5e94\u7684\u53c2\u6570\u5373\u53ef\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="App.tsx"',title:'"App.tsx"'},"import { post } from '@api/[sku]/[id]/item'\n\nexport default () => {\n  const addSku = () => {\n    post('0001'/* sku */, '1234' /* id */, {\n      query: { /* ... */ },\n      data: { /* ... */ },\n    })\n  }\n\n  return <div onClick={addSku}>\u6dfb\u52a0 SKU</div>\n}\n")),(0,i.kt)("p",null,"\u4e4b\u524d\u63d0\u5230\uff0c\u5b9a\u4e49\u7684\u51fd\u6570\u90fd\u5e94\u8be5\u662f\u5f02\u6b65\u7684\uff0c\u662f\u56e0\u4e3a\u5728\u524d\u7aef\u8c03\u7528\u65f6\u4f1a\u81ea\u52a8\u8f6c\u6362\u6210 HTTP \u63a5\u53e3\u8c03\u7528\uff0c\u6240\u4ee5\u4e3a\u4e86\u4fdd\u6301\u7c7b\u578b\u5b9a\u4e49\u4e0e\u5b9e\u9645\u8c03\u7528\u4f53\u9a8c\u7edf\u4e00\uff0c\u9700\u8981\u5728\u5b9a\u4e49 BFF \u51fd\u6570\u65f6\u5c06\u5b83\u8bbe\u7f6e\u4e3a\u5f02\u6b65\u3002"))}m.isMDXComponent=!0}}]);