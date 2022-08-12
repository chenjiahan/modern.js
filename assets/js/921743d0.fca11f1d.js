"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[67387],{54852:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var r=t(49231);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(t),c=a,v=m["".concat(o,".").concat(c)]||m[c]||d[c]||i;return t?r.createElement(v,l(l({ref:n},u),{},{components:t})):r.createElement(v,l({ref:n},u))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},10397:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=t(86215),a=(t(49231),t(54852));const i={title:"PreRender",sidebar_position:5},l=void 0,p={unversionedId:"apis/app/runtime/app/pre-render",id:"apis/app/runtime/app/pre-render",title:"PreRender",description:"\u65e0\u5c55\u793a\u5185\u5bb9\u7684\u9ad8\u9636\u7ec4\u4ef6\uff0c\u901a\u8fc7\u7c7b\u4f3c Helmet \u7684\u65b9\u5f0f\u5b9e\u73b0 SPA \u8def\u7531\u7ea7\u7684\u7f13\u5b58\uff0c\u65e0\u9700\u989d\u5916\u914d\u7f6e\u3002",source:"@site/docs/apis/app/runtime/app/pre-render.md",sourceDirName:"apis/app/runtime/app",slug:"/apis/app/runtime/app/pre-render",permalink:"/docs/apis/app/runtime/app/pre-render",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"PreRender",sidebar_position:5},sidebar:"apisAppSidebar",previous:{title:"NoSSR",permalink:"/docs/apis/app/runtime/app/no-ssr"},next:{title:"useModuleApp",permalink:"/docs/apis/app/runtime/app/use-module-app"}},o={},s=[{value:"API",id:"api",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],u={toc:s};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u65e0\u5c55\u793a\u5185\u5bb9\u7684\u9ad8\u9636\u7ec4\u4ef6\uff0c\u901a\u8fc7\u7c7b\u4f3c Helmet \u7684\u65b9\u5f0f\u5b9e\u73b0 SPA \u8def\u7531\u7ea7\u7684\u7f13\u5b58\uff0c\u65e0\u9700\u989d\u5916\u914d\u7f6e\u3002"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { PreRender } from '@modern-js/runtime/ssr';\n")))),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PreRender")," \u7ec4\u4ef6\u63d0\u4f9b\u4e86\u4e00\u5957\u5e38\u7528\u7684\u914d\u7f6e\u53c2\u6570\uff0c\u7528\u4e8e\u63a7\u5236\u7f13\u5b58\u7684\u89c4\u5219\u3001\u8fc7\u671f\u65f6\u95f4\u3001\u7f13\u5b58\u7b97\u6cd5\u7b49\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<PreRender></PreRender>\n")),(0,a.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"interval\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"number"),"\uff0c\u8bbe\u7f6e\u7f13\u5b58\u4fdd\u6301\u65b0\u9c9c\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\u3002\u5728\u8be5\u65f6\u95f4\u5185\uff0c\u5c06\u76f4\u63a5\u4f7f\u7528\u7f13\u5b58\uff0c\u5e76\u4e14\u4e0d\u505a\u5f02\u6b65\u6e32\u67d3\u3002"),(0,a.kt)("li",{parentName:"ul"},"[staleLimit]","\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"number"),"\uff0c\u8bbe\u7f6e\u7f13\u5b58\u5b8c\u5168\u8fc7\u671f\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\u3002\u5728\u8be5\u65f6\u95f4\u5185\uff0c\u7f13\u5b58\u53ef\u4ee5\u88ab\u8fd4\u56de\uff0c\u5426\u5219\u5fc5\u987b\u4f7f\u7528\u91cd\u65b0\u6e32\u67d3\u7684\u7ed3\u679c\u3002"),(0,a.kt)("li",{parentName:"ul"},"[level]","\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"number"),"\uff0c\u8bbe\u7f6e\u7f13\u5b58\u6807\u8bc6\u7684\u8ba1\u7b97\u89c4\u5219\u7b49\u7ea7\uff0c\u901a\u5e38\u914d\u5408 ",(0,a.kt)("inlineCode",{parentName:"li"},"includes")," \u4e0e ",(0,a.kt)("inlineCode",{parentName:"li"},"matches")," \u4f7f\u7528\u3002\u9ed8\u8ba4\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),"\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"0\uff1a\u8def\u7531\u8def\u5f84\n1\uff1a\u8def\u7531\u8def\u5f84 + \u67e5\u8be2\u5b57\u7b26\u4e32\n2\uff1a\u8def\u7531\u8def\u5f84 + \u8bf7\u6c42\u5934\n3\uff1a\u8def\u7531\u8def\u5f84 + \u67e5\u8be2\u5b57\u7b26\u4e32 + \u8bf7\u6c42\u5934\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[includes]","\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"{ header?: string[], query?: string[] }"),"\uff0c\u8bbe\u7f6e\u9700\u8981\u88ab\u7eb3\u5165\u7f13\u5b58\u6807\u8bc6\u7684\u5185\u5bb9\uff0c\u5728 level \u975e 0 \u65f6\u4f7f\u7528\u3002\u9ed8\u8ba4\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"[matches]","\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"{ header?: Record<string, any>, query?: Record<string, any> }"),"\uff0c\u8bbe\u7f6e query \u6216 header \u7684\u503c\u5728\u7f13\u5b58\u6807\u8bc6\u8ba1\u7b97\u4e2d\u7684\u91cd\u5199\u89c4\u5219\uff0c\u901a\u5e38\u7528\u5728\u7f13\u5b58\u5206\u7c7b\u65f6\uff0c\u652f\u6301\u6b63\u5219\u8868\u8fbe\u5f0f\u3002\u9ed8\u8ba4\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),"\u3002")),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { PreRender } from '@modern-js/runtime/ssr';\n\nexport default function App() {\n  return (\n    <>\n        <PreRender interval={10} />\n        <div>Hello Modern</div>\n    </>\n  )\n}\n")),(0,a.kt)("p",null,"\u4e0b\u9762\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u5c06 query\u3001header \u4e2d\u6307\u5b9a\u7684\u53c2\u6570\u7eb3\u5165\u7f13\u5b58\u8ba1\u7b97\u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'/* \u4f7f\u7528 query \u4e2d\u7684 channel \u548c header \u4e2d\u7684 language \u8ba1\u7b97\u7f13\u5b58\u6807\u8bc6 */\n<PreRender interval={10} level={2} includes={{\n    query: ["channel"],\n    header: ["language"]\n}} />\n')),(0,a.kt)("p",null,"\u4e0b\u9762\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u4e0d\u8ba9\u6d4b\u8bd5\u9891\u9053\u5f71\u54cd\u7ebf\u4e0a\u7f13\u5b58\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'/* \u5c06 query \u4e2d channel \u503c\u4e3a test_ \u5f00\u5934\u7684\u91cd\u5199\u4e3a testChannel\uff0c\u5426\u5219\u91cd\u5199\u4e3a otherChannel */\n<PreRender interval={10} level={2} includes={{\n    query: ["channel"],\n    header: ["language"]\n}} matches={{\n    query: {\n        channel: {\n            "testChannel", "^test_",\n            "otherChannel", ".*"\n        }\n    }\n}} />\n')))}d.isMDXComponent=!0}}]);