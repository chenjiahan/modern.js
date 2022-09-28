"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[5006],{57522:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(29901);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||p;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,a=new Array(p);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<p;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>p,metadata:()=>i,toc:()=>u});var r=n(18249),o=(n(29901),n(57522));const p={sidebar_label:"copy"},a="output.copy",i={unversionedId:"apis/module/config/output/copy",id:"apis/module/config/output/copy",title:"output.copy",description:"* \u7c7b\u578b\uff1a Array",source:"@site/docs/apis/module/config/output/copy.md",sourceDirName:"apis/module/config/output",slug:"/apis/module/config/output/copy",permalink:"/docs/apis/module/config/output/copy",tags:[],version:"current",frontMatter:{sidebar_label:"copy"},sidebar:"apisModuleSidebar",previous:{title:"buildPreset",permalink:"/docs/apis/module/config/output/build-preset"},next:{title:"disableSourceMap",permalink:"/docs/apis/module/config/output/disable-source-map"}},c={},u=[],l={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"outputcopy"},"output.copy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"Array")),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,o.kt)("p",null,"\u5c06\u6307\u5b9a\u7684\u6587\u4ef6\u6216\u76ee\u5f55\u62f7\u8d1d\u5230\u6784\u5efa\u8f93\u51fa\u76ee\u5f55\u4e2d\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/assets")," \u4e0b\u7684\u6587\u4ef6\u76f4\u63a5\u62f7\u8d1d\u5230 dist \u76ee\u5f55\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"import { defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  output: {\n    copy: [{ from: './src/assets', to: '' }],\n  },\n});\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"output.copy")," \u6570\u7ec4\u8bbe\u7f6e\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/copy-webpack-plugin#patterns"},"copy-webpack-plugin patterns"),"\u3002"))}s.isMDXComponent=!0}}]);