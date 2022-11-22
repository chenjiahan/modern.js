"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8838],{44993:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(52983);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(18249),i=(n(52983),n(44993));const o={title:"tools.tailwindcss",sidebar_label:"tailwindcss"},a=void 0,l={unversionedId:"configure/app/tools/tailwindcss",id:"configure/app/tools/tailwindcss",title:"tools.tailwindcss",description:"* \u7c7b\u578b\uff1a Object | Function",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/tools/tailwindcss.md",sourceDirName:"configure/app/tools",slug:"/configure/app/tools/tailwindcss",permalink:"/v2/docs/configure/app/tools/tailwindcss",draft:!1,tags:[],version:"current",frontMatter:{title:"tools.tailwindcss",sidebar_label:"tailwindcss"},sidebar:"configsAppSidebar",previous:{title:"styledComponents",permalink:"/v2/docs/configure/app/tools/styled-components"},next:{title:"terser",permalink:"/v2/docs/configure/app/tools/terser"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"Object | Function")),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u89c1\u4e0b\u65b9\u914d\u7f6e\u8be6\u60c5\u3002")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"TailwindCSS \u914d\u7f6e\u8be6\u60c5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  const tailwind = {\n    purge: {\n        enabled: options.env === 'production',\n        content: [\n          './config/html/**/*.html',\n          './config/html/**/*.ejs',\n          './config/html/**/*.hbs',\n          './src/**/*',\n        ],\n        layers: ['utilities'],\n    },\n    // https://tailwindcss.com/docs/upcoming-changes\n    future: {\n      removeDeprecatedGapUtilities: false,\n      purgeLayersByDefault: true,\n      defaultLineHeights: false,\n      standardFontWeights: false,\n    },\n    theme: source.designSystem // \u4f7f\u7528source.designSystem\u914d\u7f6e\u4f5c\u4e3aTailwind CSS Theme\u914d\u7f6e\n  }\n")),(0,i.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u66f4\u591a\u5173\u4e8e\uff1a",(0,i.kt)("a",{href:"https://tailwindcss.com/docs/configuration",target:"_blank"},"TailwindCSS \u914d\u7f6e"),"\u3002"))),(0,i.kt)("p",null,"\u5bf9\u5e94 ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/configuration"},"TailwindCSS")," \u7684\u914d\u7f6e\uff0c\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")," \u7c7b\u578b\u65f6\uff0c\u4e0e\u9ed8\u8ba4\u914d\u7f6e\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.assign")," \u5408\u5e76\u3002"),(0,i.kt)("p",null,"\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Function")," \u7c7b\u578b\u65f6\uff0c\u51fd\u6570\u8fd4\u56de\u7684\u5bf9\u8c61\u4e0e\u9ed8\u8ba4\u914d\u7f6e\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.assign")," \u5408\u5e76\u3002"),(0,i.kt)("p",null,"\u4e0d\u5141\u8bb8\u51fa\u73b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"theme")," \u5c5e\u6027\uff0c\u5426\u5219\u4f1a\u6784\u5efa\u5931\u8d25\u3002 Modern.js \u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/docs/configure/app/source/design-system"},(0,i.kt)("inlineCode",{parentName:"a"},"source.designSystem"))," \u4f5c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tailwind CSS Theme")," \u914d\u7f6e\u3002"),(0,i.kt)("p",null,"\u5176\u4ed6\u7684\u4f7f\u7528\u65b9\u5f0f\u548c Tailwind CSS \u4e00\u81f4: ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/configuration"},"\u5feb\u901f\u4f20\u9001\u95e8"),"\u3002"))}u.isMDXComponent=!0}}]);