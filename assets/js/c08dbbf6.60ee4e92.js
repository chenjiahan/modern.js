"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[9542,4119],{57522:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(29901);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||p;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<p;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},39625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(18249),a=(n(29901),n(57522)),p=n(8024);const o={sidebar_label:"metaByEntries"},i="output.metaByEntries",l={unversionedId:"apis/app/config/output/meta-by-entries",id:"apis/app/config/output/meta-by-entries",title:"output.metaByEntries",description:"- \u7c7b\u578b\uff1a Object",source:"@site/docs/apis/app/config/output/meta-by-entries.md",sourceDirName:"apis/app/config/output",slug:"/apis/app/config/output/meta-by-entries",permalink:"/docs/apis/app/config/output/meta-by-entries",tags:[],version:"current",frontMatter:{sidebar_label:"metaByEntries"},sidebar:"apisAppSidebar",previous:{title:"mediaPath",permalink:"/docs/apis/app/config/output/media-path"},next:{title:"meta",permalink:"/docs/apis/app/config/output/meta"}},c={},s=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"outputmetabyentries"},"output.metaByEntries"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"Object")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,a.kt)("p",null,"\u7528\u4e8e\u5728\u591a\u9875\u9762\u7684\u573a\u666f\u4e0b\uff0c\u4e3a\u4e0d\u540c\u7684\u9875\u9762\u8bbe\u7f6e\u4e0d\u540c\u7684 meta \u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u6574\u4f53\u7528\u6cd5\u4e0e ",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/config/output/meta"},"output.meta")," \u4e00\u81f4\uff0c\u4e3b\u8981\u533a\u522b\u5728\u4e8e\uff0c\u53ef\u4ee5\u4f7f\u7528\u300c\u5165\u53e3\u540d\u79f0\u300d\u4f5c\u4e3a key \u8fdb\u884c\u5355\u72ec\u8bbe\u7f6e\u3002"),(0,a.kt)(p.default,{mdxType:"EntryName"}),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  output: {\n    meta: {\n      viewport: 'width=device-width',\n      description: '\u4eca\u65e5\u5934\u6761',\n    },\n    metaByEntries: {\n      'page-a': {\n        description: '\u6296\u97f3',\n      },\n    },\n  },\n});\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dev")," \u4e4b\u540e\u53ef\u4ee5\u770b\u5230\u5165\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"page-a")," \u548c \u5165\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"page-b")," \u7684 meta \u4fe1\u606f\u5206\u522b\u5982\u4e0b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"page-a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<meta charset="utf-8" />\n<meta name="viewport" content="width=device-width" />\n//...\n<meta name="description" content="\u6296\u97f3" />\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"page-b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<meta charset="utf-8" />\n<meta name="viewport" content="width=device-width" />\n//...\n<meta name="description" content="\u4eca\u65e5\u5934\u6761" />\n')),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u5165\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"page-a")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"description")," meta \u6807\u7b7e\u88ab\u81ea\u5b9a\u4e49\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"\u6296\u97f3"),"\u3002 \u5165\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"page-a")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"page-b")," \u90fd\u4fee\u6539\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"viewport")," meta \u6807\u7b7e\u3002"))}u.isMDXComponent=!0},8024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var r=n(18249),a=(n(29901),n(57522));const p={},o=void 0,i={unversionedId:"components/entry-name",id:"components/entry-name",title:"entry-name",description:"\u5165\u53e3\u540d\u79f0",source:"@site/docs/components/entry-name.md",sourceDirName:"components",slug:"/components/entry-name",permalink:"/docs/components/entry-name",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"\u5165\u53e3\u540d\u79f0",id:"\u5165\u53e3\u540d\u79f0",level:2}],s={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5165\u53e3\u540d\u79f0"},"\u5165\u53e3\u540d\u79f0"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u300c\u5165\u53e3\u540d\u79f0\u300d\u4e3a\u9875\u9762\u5165\u53e3\u6240\u5728\u76ee\u5f55\u7684\u540d\u79f0\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u9879\u76ee\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\u65f6\uff0c\u5165\u53e3\u540d\u79f0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"page-a")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"page-b"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 page-a\n    \u2502\xa0\xa0 \u2514\u2500\u2500 App.jsx\n    \u2514\u2500\u2500 page-b\n        \u2514\u2500\u2500 App.jsx\n")),(0,a.kt)("p",null,"\u5982\u679c\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/config/source/entries"},"source.entries")," \u81ea\u5b9a\u4e49\u4e86\u9875\u9762\u5165\u53e3\uff0c\u5219\u300c\u5165\u53e3\u540d\u79f0\u300d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"source.entries")," \u5bf9\u8c61\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),"\u3002"))}m.isMDXComponent=!0}}]);