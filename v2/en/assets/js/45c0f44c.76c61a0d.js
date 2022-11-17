"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6219,2899],{44993:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(52983);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},l=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),l=s(t),u=o,k=l["".concat(i,".").concat(u)]||l[u]||d[u]||p;return t?a.createElement(k,r(r({ref:n},c),{},{components:t})):a.createElement(k,r({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,r=new Array(p);r[0]=l;var m={};for(var i in n)hasOwnProperty.call(n,i)&&(m[i]=n[i]);m.originalType=e,m.mdxType="string"==typeof e?e:o,r[1]=m;for(var s=2;s<p;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},73714:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>m,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(18249),o=(t(52983),t(44993)),p=t(66740);const r={sidebar_position:4},m=void 0,i={unversionedId:"apis/monorepo/commands/bump",id:"apis/monorepo/commands/bump",title:"bump",description:"bump \u547d\u4ee4\u6267\u884c\u4e4b\u524d\u9700\u8981\u63d0\u524d\u6267\u884c change \u547d\u4ee4\u6dfb\u52a0 changeset\u3002",source:"@site/docs/apis/monorepo/commands/bump.md",sourceDirName:"apis/monorepo/commands",slug:"/apis/monorepo/commands/bump",permalink:"/v2/en/docs/apis/monorepo/commands/bump",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"apisMonorepoSidebar",previous:{title:"pre",permalink:"/v2/en/docs/apis/monorepo/commands/pre"},next:{title:"release",permalink:"/v2/en/docs/apis/monorepo/commands/release"}},s={},c=[],d={toc:c};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Usage: modern bump [options]\n\n\u4f7f\u7528\u53d8\u66f4\u96c6\u81ea\u52a8\u66f4\u65b0\u53d1\u5e03\u7248\u672c\u548c\u53d8\u66f4\u65e5\u5fd7\n\nOptions:\n  --canary       \u521b\u5efa\u4e00\u4e2a\u9884\u53d1\u5e03\u7248\u672c\u8fdb\u884c\u6d4b\u8bd5 (default: false)\n  --preid <tag>  \u5728\u5bf9\u9884\u53d1\u5e03\u7248\u672c\u8fdb\u884c\u7248\u672c\u63a7\u5236\u65f6\u6307\u5b9a\u6807\u8bc6\u7b26 (default: "next")\n  --snapshot     \u521b\u5efa\u4e00\u4e2a\u7279\u6b8a\u7248\u672c\u8fdb\u884c\u6d4b\u8bd5 (default: false)\n  -h, --help     display help for command\n')),(0,o.kt)("admonition",{title:"\u6ce8",type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"bump")," \u547d\u4ee4\u6267\u884c\u4e4b\u524d\u9700\u8981\u63d0\u524d\u6267\u884c ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/monorepo/commands/change"},(0,o.kt)("inlineCode",{parentName:"a"},"change"))," \u547d\u4ee4\u6dfb\u52a0 changeset\u3002")),(0,o.kt)("p",null,"\u6309 changeset \u8bb0\u5f55\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684\u7248\u672c\u53f7\uff0c \u540c\u65f6\u751f\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"CHANGELOG.md"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx modern bump\n\ud83e\udd8b  All files have been updated. Review them and commit at your leisure\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CHANGELOG.md")," \u793a\u4f8b\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"# package-a\n\n## 0.1.1\n### Patch Changes\n\n- test publish\n\n")),(0,o.kt)(p.default,{mdxType:"CommandTip"}))}l.isMDXComponent=!0},66740:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>p,metadata:()=>m,toc:()=>s});var a=t(18249),o=(t(52983),t(44993));const p={},r=void 0,m={unversionedId:"components/command-tip",id:"components/command-tip",title:"command-tip",description:"pnpm v6 \u548c pnpm v7 \u7248\u672c\u5728\u6267\u884c\u547d\u4ee4\u65f6\u4f7f\u7528\u59ff\u52bf\u4e0d\u5b8c\u5168\u4e00\u81f4\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e8b\u9879\uff1a",source:"@site/docs/components/command-tip.md",sourceDirName:"components",slug:"/components/command-tip",permalink:"/v2/en/docs/components/command-tip",draft:!1,tags:[],version:"current",frontMatter:{}},i={},s=[],c={toc:s};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"pnpm v6 \u548c pnpm v7 \u7248\u672c\u5728\u6267\u884c\u547d\u4ee4\u65f6\u4f7f\u7528\u59ff\u52bf\u4e0d\u5b8c\u5168\u4e00\u81f4\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e8b\u9879\uff1a"),(0,o.kt)("p",{parentName:"admonition"},"pnpm v7\uff1a"),(0,o.kt)("p",{parentName:"admonition"},"\u5728\u4f7f\u7528 pnpm \u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684\u547d\u4ee4\u65f6\uff0c\u5982\u679c\u9700\u8981\u4f20\u9012\u53c2\u6570\u81f3 pnpm\uff0c\u9700\u8981\u5c06\u53c2\u6570\u653e\u5230\u547d\u4ee4\u524d\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u4f8b\u5982\u4f7f\u7528 pnpm ",(0,o.kt)("inlineCode",{parentName:"p"},"--filter")," \u53c2\u6570\u6267\u884c prepare \u547d\u4ee4\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pnpm run --filter "./packages/**" prepare\n')),(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9700\u8981\u4f20\u9012\u53c2\u6570\u81f3\u547d\u4ee4\uff0c\u9700\u8981\u5c06\u53c2\u6570\u653e\u5230\u547d\u4ee4\u540e\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u4f8b\u5982\uff0c\u5728\u5982\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e\u4e2d\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n')),(0,o.kt)("p",{parentName:"admonition"},"\u6267\u884c command \u547d\u4ee4\u65f6\u643a\u5e26\u53c2\u6570\u65b9\u5f0f\u4e3a\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run command --options\n")),(0,o.kt)("p",{parentName:"admonition"},"pnpm v6:"),(0,o.kt)("p",{parentName:"admonition"},"\u5728\u5982\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e\u4e2d\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n')),(0,o.kt)("p",{parentName:"admonition"},"\u5f53\u9700\u8981\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"modern command --option"),"\uff1a"),(0,o.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 pnpm \u65f6\uff0c\u9700\u8981\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run command -- --option"),"\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u662f\u56e0\u4e3a pnpm \u5bf9\u4e8e\u547d\u4ee4\u53c2\u6570\u7684\u5904\u7406\u4e0e Yarn \u5e76\u4e0d\u76f8\u540c\uff0c\u4f46\u662f\u4e0e npm \u7c7b\u4f3c\uff1a\u5728\u4e0d\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f pnpm \u7684\u53c2\u6570\uff1b\u5728\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f\u6267\u884c\u811a\u672c\u7684\u53c2\u6570\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u5728\u4e0a\u8ff0\u4f8b\u5b50\u91cc\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"--option")," \u4f20\u9012\u7ed9\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern command"),"\u3002\u5982\u679c\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run command --option"),"\uff0c\u5219\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"--option")," \u5c06\u4f20\u9012\u7ed9 pnpm\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u603b\u7ed3\u6765\u8bf4\uff1a"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"\u5728\u4f7f\u7528 pnpm v7 \u65f6\uff0c\u5982\u679c\u4f20\u9012\u53c2\u6570\u7ed9 pnpm\uff0c\u9700\u8981\u5c06\u53c2\u6570\u653e\u7f6e\u5230\u547d\u4ee4\u524d")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"\u5728\u4f7f\u7528 pnpm v6 \u65f6\uff0c\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u7ed9 pnpm\uff0c\u4e0d\u9700\u8981\u52a0 ",(0,o.kt)("inlineCode",{parentName:"strong"},"--"),"\uff1b\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u662f\u7ed9\u811a\u672c\u4f7f\u7528\uff0c\u9700\u8981\u589e\u52a0 ",(0,o.kt)("inlineCode",{parentName:"strong"},"--")," \u5b57\u7b26\u4e32"),"\u3002")))}d.isMDXComponent=!0}}]);