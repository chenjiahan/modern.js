"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[4579],{54852:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(49231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(86215),r=(n(49231),n(54852));const i={sidebar_position:6},l="\u6784\u5efa\u53ef\u590d\u7528\u6a21\u5757",o={unversionedId:"guides/features/modules/build",id:"guides/features/modules/build",title:"\u6784\u5efa\u53ef\u590d\u7528\u6a21\u5757",description:"\u672c\u7ae0\u5c06\u8981\u8bb2\u89e3\u5728\u53ef\u590d\u7528\u6a21\u5757\u9879\u76ee\u4e2d\u7f16\u8bd1\u6784\u5efa\u7684\u76f8\u5173\u5185\u5bb9\u3002",source:"@site/docs/guides/features/modules/build.md",sourceDirName:"guides/features/modules",slug:"/guides/features/modules/build",permalink:"/docs/guides/features/modules/build",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"guidesSidebar",previous:{title:"\u4f7f\u7528 Runtime API",permalink:"/docs/guides/features/modules/use-runtime-api"},next:{title:"\u6a21\u5757\u7684\u5165\u53e3\u6587\u4ef6\u914d\u7f6e",permalink:"/docs/guides/features/modules/exports"}},p={},s=[{value:"\u8fd0\u884c\u6784\u5efa\u4efb\u52a1",id:"\u8fd0\u884c\u6784\u5efa\u4efb\u52a1",level:2},{value:"\u6784\u5efa\u4ea7\u7269\u7684\u76ee\u5f55\u7ed3\u6784",id:"\u6784\u5efa\u4ea7\u7269\u7684\u76ee\u5f55\u7ed3\u6784",level:2},{value:"\u6784\u5efa JS(X)\u3001TS(X) \u6e90\u7801",id:"\u6784\u5efa-jsxtsx-\u6e90\u7801",level:3},{value:"\u7c7b\u578b\u6587\u4ef6\u751f\u6210",id:"\u7c7b\u578b\u6587\u4ef6\u751f\u6210",level:3},{value:"\u6784\u5efa\u6837\u5f0f",id:"\u6784\u5efa\u6837\u5f0f",level:3},{value:"\u9759\u6001\u8d44\u6e90\u6587\u4ef6\u5904\u7406",id:"\u9759\u6001\u8d44\u6e90\u6587\u4ef6\u5904\u7406",level:3}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6784\u5efa\u53ef\u590d\u7528\u6a21\u5757"},"\u6784\u5efa\u53ef\u590d\u7528\u6a21\u5757"),(0,r.kt)("p",null,"\u672c\u7ae0\u5c06\u8981\u8bb2\u89e3\u5728\u53ef\u590d\u7528\u6a21\u5757\u9879\u76ee\u4e2d\u7f16\u8bd1\u6784\u5efa\u7684\u76f8\u5173\u5185\u5bb9\u3002"),(0,r.kt)("h2",{id:"\u8fd0\u884c\u6784\u5efa\u4efb\u52a1"},"\u8fd0\u884c\u6784\u5efa\u4efb\u52a1"),(0,r.kt)("p",null,"\u5728\u53ef\u590d\u7528\u6a21\u5757\u9879\u76ee\u4e2d\uff0c\u53ef\u4ee5\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u8fd0\u884c\u6784\u5efa\u4efb\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pnpm run build\n")),(0,r.kt)("h2",{id:"\u6784\u5efa\u4ea7\u7269\u7684\u76ee\u5f55\u7ed3\u6784"},"\u6784\u5efa\u4ea7\u7269\u7684\u76ee\u5f55\u7ed3\u6784"),(0,r.kt)("p",null,"\u5047\u8bbe\u9879\u76ee\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},".\n\u251c\u2500\u2500 src/\n|   \u251c\u2500\u2500 index.css\n\u2502   \u2514\u2500\u2500 index.ts\n\u251c\u2500\u2500 styles/\n|   \u2514\u2500\u2500 index.css\n| ...\n")),(0,r.kt)("p",null,"\u5f53\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run build")," \u6784\u5efa\u6210\u529f\u540e ",(0,r.kt)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u7684\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/guides/dist-struct.png",alt:null})),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u9488\u5bf9\u6784\u5efa\u4ea7\u7269\u8bb2\u89e3\u4e00\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"dist")," \u5404\u4e2a\u76ee\u5f55\u7684\u7528\u9014\u4ee5\u53ca\u5728\u6784\u5efa\u8fc7\u7a0b\u4e2d\u505a\u4e86\u54ea\u4e9b\u4e8b\u60c5\u3002"),(0,r.kt)("h3",{id:"\u6784\u5efa-jsxtsx-\u6e90\u7801"},"\u6784\u5efa JS(X)\u3001TS(X) \u6e90\u7801"),(0,r.kt)("p",null,"\u5728\u53ef\u590d\u7528\u6a21\u5757\u7684\u6784\u5efa\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u4e0b\u7684 JS(X)\u3001TS(X) \u6587\u4ef6\u8fdb\u884c\u6784\u5efa\uff0c\u6784\u5efa\u7684\u4ea7\u7269\u4f1a\u8f93\u51fa\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"dist/js/modern"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"dist/js/treeshaking"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"dist/js/node")," \u8fd9\u4e09\u79cd\u76ee\u5f55\u4e0b\u3002\u6bcf\u79cd\u76ee\u5f55\u53ef\u80fd\u4f1a\u5305\u542b\u652f\u6301\u4e0d\u540c JS \u8bed\u6cd5\u4ee5\u53ca\u6a21\u5757\u5316\u7cfb\u7edf\u7684\u4ee3\u7801\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e09\u4e2a\u76ee\u5f55\u5bf9\u5e94\u7684\u8bed\u6cd5\u4ee5\u53ca\u6a21\u5757\u5316\u7cfb\u7edf\u6620\u5c04\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dist/js/modern")," \u5bf9\u5e94 ",(0,r.kt)("inlineCode",{parentName:"li"},"ES6"),"\u7684\u8bed\u6cd5\u4ee5\u53ca\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"ES Module")," \u6a21\u5757\u5316\u7cfb\u7edf\u7684\u6784\u5efa\u4ea7\u7269\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dist/js/treeshaking")," \u5bf9\u5e94 ",(0,r.kt)("inlineCode",{parentName:"li"},"ES5"),"\u7684\u8bed\u6cd5\u4ee5\u53ca\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"ES Module")," \u6a21\u5757\u5316\u7cfb\u7edf\u7684\u6784\u5efa\u4ea7\u7269\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dist/js/modern")," \u5bf9\u5e94 ",(0,r.kt)("inlineCode",{parentName:"li"},"ES6"),"\u7684\u8bed\u6cd5\u4ee5\u53ca\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"CommonJS")," \u6a21\u5757\u5316\u7cfb\u7edf\u7684\u6784\u5efa\u4ea7\u7269\u3002")),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u4fee\u6539\u751f\u6210\u4ea7\u7269\u7684\u8bed\u6cd5\u548c\u4f7f\u7528\u7684\u6a21\u5757\u5316\u7cfb\u7edf\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/config/output/package-mode"},"output.packageMode")," \u4ee5\u53ca ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/config/output/package-fields"},"output.packageFields")," \u914d\u7f6e\u6765\u4fee\u6539\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u867d\u7136\u9ed8\u8ba4\u751f\u6210\u4e09\u79cd\u6784\u5efa\u4ea7\u7269\uff0c\u4f46\u662f\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u53ef\u4ee5\u751f\u6210\u4e24\u79cd\uff0c\u751a\u81f3\u4e00\u79cd\u6784\u5efa\u4ea7\u7269\u3002\u6839\u636e\u914d\u7f6e\u4e0d\u540c\uff0c\u751f\u6210\u7684\u4ea7\u7269\u7ed3\u6784\u4e5f\u4f1a\u6709\u6240\u4e0d\u540c\u3002\u4f8b\u5982\u5f53\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"output.packageMode = 'node-js'")," \u7684\u65f6\u5019\uff0c\u6784\u5efa\u4ea7\u7269\u4e2d\u53ea\u4f1a\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"dist/js/modern")," \u4ee5\u53ca ",(0,r.kt)("inlineCode",{parentName:"p"},"dist/js/node")," \u4e24\u4e2a\u76ee\u5f55\u3002"))),(0,r.kt)("h3",{id:"\u7c7b\u578b\u6587\u4ef6\u751f\u6210"},"\u7c7b\u578b\u6587\u4ef6\u751f\u6210"),(0,r.kt)("p",null,"\u5728\u53ef\u590d\u7528\u6a21\u5757\u7684\u6784\u5efa\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u9879\u76ee\u662f\u4e00\u4e2a TypeScript \u9879\u76ee\uff0c\u90a3\u4e48\u4f1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"dist/types")," \u76ee\u5f55\u4e0b\u751f\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u91cc TS \u6587\u4ef6\u5bf9\u5e94\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"*.d.ts")," \u7c7b\u578b\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728\u9879\u76ee\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"types")," \u5b57\u6bb5\u4f7f\u7528\u5b83\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "types": "./dist/types/index.d.ts",\n}\n')),(0,r.kt)("h3",{id:"\u6784\u5efa\u6837\u5f0f"},"\u6784\u5efa\u6837\u5f0f"),(0,r.kt)("p",null,"\u5728\u53ef\u590d\u7528\u6a21\u5757\u7684\u6784\u5efa\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"src"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"styles"),"\uff08\u5982\u679c\u5b58\u5728\u7684\u8bdd\uff09 \u76ee\u5f55\u4e0b\u7684\u6837\u5f0f\u4ee3\u7801\u8fdb\u884c\u7f16\u8bd1\u5904\u7406\u3002"),(0,r.kt)("p",null,"\u6784\u5efa\u6210\u529f\u540e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"li"},"src")," \u76ee\u5f55\u4e0b\u7684\u6837\u5f0f\u4ee3\u7801\u5176\u6784\u5efa\u4ea7\u7269\u4f1a\u88ab\u8f93\u51fa\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"dist/js/styles")," \u76ee\u5f55\u4e0b"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"li"},"styles")," \u76ee\u5f55\u4e0b\u7684\u6837\u5f0f\u4ee3\u7801\u5176\u6784\u5efa\u4ea7\u7269\u4f1a\u88ab\u8f93\u51fa\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"dist/styles")," \u76ee\u5f55\u4e0b\u3002")),(0,r.kt)("h3",{id:"\u9759\u6001\u8d44\u6e90\u6587\u4ef6\u5904\u7406"},"\u9759\u6001\u8d44\u6e90\u6587\u4ef6\u5904\u7406"),(0,r.kt)("p",null,"\u5728\u53ef\u590d\u7528\u6a21\u5757\u7684\u6784\u5efa\u8fc7\u7a0b\u4e2d\uff0c\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u4e0b\u7684\u975e\u6e90\u7801\u6587\u4ef6\u4f1a\u8fdb\u884c\u590d\u5236\u5904\u7406\uff0c\u5b83\u4eec\u4f1a\u88ab\u590d\u5236\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"dist/js/styles")," \u76ee\u5f55\u4e0b\u9762\u3002\u5982\u679c\u5728 JS(X)\u3001TS(X) \u4ee3\u7801\u4e2d\u5bfc\u5165\u4e86\u8fd9\u4e9b\u9759\u6001\u6587\u4ef6\uff0c\u5219\u4f1a\u4fee\u6539\u539f\u672c\u7684\u6307\u5411\u8def\u5f84\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6240\u8c13\u6e90\u7801\u6587\u4ef6\u662f\u6307 JS\u3001CSS \u8fd9\u7c7b\u6587\u4ef6\u3002")),(0,r.kt)("p",null,"\u4f8b\u5982\u6709\u5982\u4e0b\u9879\u76ee\u7ed3\u6784\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},".\n\u251c\u2500\u2500 src/\n|   \u251c\u2500\u2500 mock.json\n\u2502   \u2514\u2500\u2500 index.ts\n| ...\n")),(0,r.kt)("p",null,"\u5982\u679c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"./src/index.ts")," \u6587\u4ef6\u7684\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import mock from './mock.json';\n\nexport default function () {\n  console.info(mock);\n  return 'hello world';\n}\n")),(0,r.kt)("p",null,"\u5219\u5728\u6784\u5efa\u6210\u529f\u540e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"dist")," \u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/guides/assets-dist.png",alt:null})),(0,r.kt)("p",null,"\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"./dist/js/modern/index.js")," \u6587\u4ef6\u7684\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import mock from \"../styles/mock.json\";\nexport default function () {\n  console.info(mock);\n  return 'hello world';\n}\n")))}u.isMDXComponent=!0}}]);