"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[8940],{54852:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(49231);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(t),f=o,m=s["".concat(l,".").concat(f)]||s[f]||d[f]||i;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},45077:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var r=t(26260),o=t(23157),i=(t(49231),t(54852)),a=["components"],p={sidebar_position:8},l="updateModernConfig",u={unversionedId:"apis/generator/plugin/file/updateModernConfig",id:"apis/generator/plugin/file/updateModernConfig",isDocsHomePage:!1,title:"updateModernConfig",description:"\u66f4\u65b0 package.json \u4e2d modernConfig \u5b57\u6bb5\u3002",source:"@site/docs/apis/generator/plugin/file/updateModernConfig.md",sourceDirName:"apis/generator/plugin/file",slug:"/apis/generator/plugin/file/updateModernConfig",permalink:"/docs/apis/generator/plugin/file/updateModernConfig",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"apisSidebar",previous:{title:"updateTextRawFile",permalink:"/docs/apis/generator/plugin/file/updateTextRawFile"},next:{title:"rmFile",permalink:"/docs/apis/generator/plugin/file/rmFile"}},c=[{value:"updateInfo",id:"updateinfo",children:[]}],d={toc:c};function s(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"updatemodernconfig"},"updateModernConfig"),(0,i.kt)("p",null,"\u66f4\u65b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"modernConfig")," \u5b57\u6bb5\u3002"),(0,i.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u5728 onForged \u751f\u547d\u5468\u671f\u7684 api \u53c2\u6570\u4e0a\u83b7\u53d6\u3002"),(0,i.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export type ForgedAPI = {\n  updateModernConfig: (updateInfo: Record<string, any>) => Promise<void>;\n  ...\n};\n")),(0,i.kt)("h2",{id:"updateinfo"},"updateInfo"),(0,i.kt)("p",null,"\u5b57\u6bb5\u66f4\u65b0\u4fe1\u606f\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8be5\u51fd\u6570\u4e3a updateJSONFile \u7684\u5c01\u88c5\uff0c\u5c06\u81ea\u52a8\u66f4\u65b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"modernConfig")," \u5b57\u6bb5 updateInfo \u4e2d\u53ea\u9700\u586b\u5199\u76f8\u5bf9\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"modernConfig")," \u7684\u66f4\u65b0\u4fe1\u606f\u5373\u53ef\u3002"))))}s.isMDXComponent=!0}}]);