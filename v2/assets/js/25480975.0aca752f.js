"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3272],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(52983);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(o,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=n(18249),i=(n(52983),n(44993));const a={sidebar_position:1},l="\u81ea\u5b9a\u4e49\u8f93\u5165\u76f8\u5173\u7c7b\u578b\u5b9a\u4e49",p={unversionedId:"guides/topic-detail/generator/plugin/api/input/type",id:"guides/topic-detail/generator/plugin/api/input/type",title:"\u81ea\u5b9a\u4e49\u8f93\u5165\u76f8\u5173\u7c7b\u578b\u5b9a\u4e49",description:"Input",source:"@site/../../packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/input/type.md",sourceDirName:"guides/topic-detail/generator/plugin/api/input",slug:"/guides/topic-detail/generator/plugin/api/input/type",permalink:"/v2/docs/guides/topic-detail/generator/plugin/api/input/type",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"\u4ecb\u7ecd",permalink:"/v2/docs/guides/topic-detail/generator/plugin/api/introduce"},next:{title:"addInputBefore",permalink:"/v2/docs/guides/topic-detail/generator/plugin/api/input/addInputBefore"}},o={},u=[{value:"Input",id:"input",level:2},{value:"type",id:"type",level:3},{value:"name",id:"name",level:3},{value:"title",id:"title",level:3},{value:"default",id:"default",level:3},{value:"enum",id:"enum",level:3},{value:"x-validate",id:"x-validate",level:3},{value:"x-reactions",id:"x-reactions",level:3},{value:"properties",id:"properties",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u81ea\u5b9a\u4e49\u8f93\u5165\u76f8\u5173\u7c7b\u578b\u5b9a\u4e49"},"\u81ea\u5b9a\u4e49\u8f93\u5165\u76f8\u5173\u7c7b\u578b\u5b9a\u4e49"),(0,i.kt)("h2",{id:"input"},"Input"),(0,i.kt)("p",null,"Modern.js Input \u8f93\u5165\u7c7b\u578b\u91c7\u7528\u4e86\u5f00\u6e90\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://formilyjs.org/"},"Formily")," Schema \u7ed3\u679c\uff0c\u652f\u6301\u4e86\u90e8\u5206\u5176 Schema \u5b57\u6bb5\u3002"),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"schema \u7c7b\u578b\uff0c\u76ee\u524d\u751f\u6210\u5668\u63d2\u4ef6\u8f93\u5165\u652f\u6301\u7684\u7c7b\u578b\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"number")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"object")," \u7c7b\u578b\u3002\u5176\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"object")," \u7528\u4e8e\u5b9e\u73b0 schema \u5d4c\u5957\uff0c\u9700\u8981\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"properties")," \u914d\u5408\u4f7f\u7528\u3002"),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"schema \u7684\u5173\u952e\u5b57\u3002"),(0,i.kt)("h3",{id:"title"},"title"),(0,i.kt)("p",null,"schema \u7684\u5c55\u793a\u540d\u79f0\u3002"),(0,i.kt)("h3",{id:"default"},"default"),(0,i.kt)("p",null,"schema \u9ed8\u8ba4\u503c\u3002"),(0,i.kt)("h3",{id:"enum"},"enum"),(0,i.kt)("p",null,"schema \u5982\u679c\u4e3a\u9009\u62e9\u7c7b\u578b\uff0c\u8be5\u5b57\u6bb5\u7528\u4e8e\u5b9a\u4e49\u9009\u9879\u5185\u5bb9\u3002"),(0,i.kt)("p",null,"\u6bcf\u4e2a\u9009\u9879\u652f\u6301\u4e24\u4e2a\u5b57\u6bb5\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"value: \u9009\u9879\u503c\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"label: \u5c55\u793a\u540d\u79f0\u3002"))),(0,i.kt)("h3",{id:"x-validate"},"x-validate"),(0,i.kt)("p",null,"schema \u7684\u9a8c\u8bc1\u89c4\u5219\u3002\u8fd9\u91cc\u652f\u6301 Formily \u7684\u6821\u9a8c\u65b9\u5f0f\uff0c\u5177\u4f53\u53ef\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://formilyjs.org/zh-CN/guide/advanced/validate"},"Formily \u8868\u5355\u6821\u9a8c"),"\u3002"),(0,i.kt)("h3",{id:"x-reactions"},"x-reactions"),(0,i.kt)("p",null,"schema \u5b57\u6bb5\u8054\u52a8\u3002\u8fd9\u91cc\u652f\u6301 Formily \u7684\u8054\u52a8\u65b9\u5f0f\uff0c\u5177\u4f53\u53ef\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://formilyjs.org/zh-CN/guide/advanced/linkages"},"Formily \u5b9e\u73b0\u8054\u52a8\u903b\u8f91"),"\u3002"),(0,i.kt)("h3",{id:"properties"},"properties"),(0,i.kt)("p",null,"\u5f53 schema \u7c7b\u578b\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"object")," \u65f6\uff0c\u5b9a\u4e49\u5176\u5b50\u8868\u5355\u3002"),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const schema = {\n  type: 'object',\n  properties: {\n    language: {\n      type: 'string',\n      title: i18n.t(localeKeys.plugin_type.self),\n      enum: [\n        { label: 'TS', value: 'ts' },\n        { label: 'ES6+', value: 'js' },\n      ],\n    },\n  },\n};\n")))}s.isMDXComponent=!0}}]);