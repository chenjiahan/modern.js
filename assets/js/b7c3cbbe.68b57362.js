"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[3079],{57522:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(29901);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,p(p({ref:t},c),{},{components:n})):r.createElement(m,p({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var u=2;u<a;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(18249),o=(n(29901),n(57522));const a={sidebar_label:"enableModernMode"},p="output.enableModernMode",i={unversionedId:"apis/app/config/output/enable-modern-mode",id:"apis/app/config/output/enable-modern-mode",title:"output.enableModernMode",description:"* \u7c7b\u578b\uff1a boolean",source:"@site/docs/apis/app/config/output/enable-modern-mode.md",sourceDirName:"apis/app/config/output",slug:"/apis/app/config/output/enable-modern-mode",permalink:"/docs/apis/app/config/output/enable-modern-mode",tags:[],version:"current",frontMatter:{sidebar_label:"enableModernMode"},sidebar:"apisAppSidebar",previous:{title:"enableInlineStyles",permalink:"/docs/apis/app/config/output/enable-inline-styles"},next:{title:"enableTsLoader",permalink:"/docs/apis/app/config/output/enable-ts-loader"}},l={},u=[],c={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"outputenablemodernmode"},"output.enableModernMode"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"false"))),(0,o.kt)("p",null,"\u7528\u4e8e\u914d\u7f6e\u5165\u53e3\u4ea7\u7269\u5f62\u6001\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  output: {\n    enableModernMode: true,\n  },\n});\n")),(0,o.kt)("p",null,"\u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"output.enableModernMode")," \u540e\uff0c \u751f\u4ea7\u73af\u5883\u4f1a\u81ea\u52a8\u6784\u5efa\u51fa\u9488\u5bf9\u73b0\u4ee3\u6d4f\u89c8\u5668\u8bed\u6cd5\u672a\u964d\u7ea7\u7684 js \u4ea7\u7269\u548c\u9488\u5bf9\u65e7\u7248\u672c\u6d4f\u89c8\u5668\u5e26\u6709 Polyfill \u7684 js \u4ea7\u7269:"),(0,o.kt)("p",null,"\u66f4\u591a\u5185\u5bb9\u53ef\u4ee5\u67e5\u770b",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/usages/compatibility"},"\u5ba2\u6237\u7aef\u517c\u5bb9\u6027"),"\u3002"))}s.isMDXComponent=!0}}]);