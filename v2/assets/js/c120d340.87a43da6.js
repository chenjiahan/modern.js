"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6439,1010],{44993:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>k});var t=a(52983);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function p(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?p(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function m(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},p=Object.keys(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=t.createContext({}),c=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},s=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},l=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),l=c(a),k=o,u=l["".concat(i,".").concat(k)]||l[k]||d[k]||p;return a?t.createElement(u,r(r({ref:n},s),{},{components:a})):t.createElement(u,r({ref:n},s))}));function k(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=a.length,r=new Array(p);r[0]=l;var m={};for(var i in n)hasOwnProperty.call(n,i)&&(m[i]=n[i]);m.originalType=e,m.mdxType="string"==typeof e?e:o,r[1]=m;for(var c=2;c<p;c++)r[c]=a[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}l.displayName="MDXCreateElement"},26811:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>m,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var t=a(18249),o=(a(52983),a(44993)),p=a(39005);const r={sidebar_position:2},m=void 0,i={unversionedId:"apis/monorepo/commands/change",id:"apis/monorepo/commands/change",title:"change",description:"change\u3001pre\u3001bump\u3001release \u547d\u4ee4\u96c6\u6210\u4e86\u5de5\u5177 changesets \u7ba1\u7406\u7248\u672c\u53d8\u66f4\u548c Changelog\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/monorepo/commands/change.md",sourceDirName:"apis/monorepo/commands",slug:"/apis/monorepo/commands/change",permalink:"/v2/docs/apis/monorepo/commands/change",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"apisMonorepoSidebar",previous:{title:"new",permalink:"/v2/docs/apis/monorepo/commands/new"},next:{title:"pre",permalink:"/v2/docs/apis/monorepo/commands/pre"}},c={},s=[],d={toc:s};function l(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: modern change [options]\n\n\u521b\u5efa\u53d8\u66f4\u96c6\n\nOptions:\n  --empty     \u521b\u5efa\u7a7a\u53d8\u66f4\u96c6 (default: false)\n  --open      \u4f7f\u7528\u7f16\u8f91\u5668\u4e2d\u6253\u5f00\u521b\u5efa\u7684\u53d8\u66f4\u96c6 (default: false)\n  -h, --help  display help for command\n")),(0,o.kt)("admonition",{title:"\u6ce8",type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/docs/apis/monorepo/commands/change"},(0,o.kt)("inlineCode",{parentName:"a"},"change")),"\u3001",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/monorepo/commands/pre"},(0,o.kt)("inlineCode",{parentName:"a"},"pre")),"\u3001",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/monorepo/commands/bump"},(0,o.kt)("inlineCode",{parentName:"a"},"bump")),"\u3001",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/monorepo/commands/release"},(0,o.kt)("inlineCode",{parentName:"a"},"release"))," \u547d\u4ee4\u96c6\u6210\u4e86\u5de5\u5177 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/atlassian/changesets"},(0,o.kt)("inlineCode",{parentName:"a"},"changesets"))," \u7ba1\u7406\u7248\u672c\u53d8\u66f4\u548c Changelog\u3002")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"modern change")," \u547d\u4ee4\u6dfb\u52a0 changeset\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx modern change\n\ud83e\udd8b  Which packages would you like to include? \xb7 package-a, package-b\n\ud83e\udd8b  Which packages should have a major bump? \xb7 No items were selected\n\ud83e\udd8b  Which packages should have a minor bump? \xb7 No items were selected\n\ud83e\udd8b  The following packages will be patch bumped:\n\ud83e\udd8b  package-a@0.1.0\n\ud83e\udd8b  package-b@0.1.0\n\ud83e\udd8b  Please enter a summary for this change (this will be in the changelogs). Submit empty line to open external editor\n\ud83e\udd8b  Summary \xb7 test publish\n\ud83e\udd8b  === Releasing the following packages ===\n\ud83e\udd8b  [Patch]\n\ud83e\udd8b    package-a, package-b\n\ud83e\udd8b  \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n\ud83e\udd8b  \u2551                                                      ========= NOTE ========                                                       \u2551\n\ud83e\udd8b  \u2551All dependents of these packages that will be incompatible with the new version will be patch bumped when this changeset is applied.\u2551\n\ud83e\udd8b  \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d\n\ud83e\udd8b  Is this your desired changeset? (Y/n) \xb7 true\n\ud83e\udd8b  Changeset added! - you can now commit it\n\ud83e\udd8b\n\ud83e\udd8b  If you want to modify or expand on the changeset summary, you can find it here\n\ud83e\udd8b  info /xxxx/monorepo/.changeset/long-lizards-talk.md\n")),(0,o.kt)("p",null,"\u4e0a\u9762\u6211\u4eec\u7ed9 ",(0,o.kt)("inlineCode",{parentName:"p"},"package-a")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"package-b")," \u90fd\u9009\u62e9\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"patch")," \u53d8\u66f4\uff0c\u5177\u4f53\u7684\u53d8\u66f4\u4fe1\u606f\u5728 monorepo \u6839\u76ee\u5f55\u4e0b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},".changeset/long-lizards-talk.md")," \u4e2d:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},'---\n"package-a": patch\n"package-b": patch\n---\n\ntest publish\n')),(0,o.kt)(p.default,{mdxType:"CommandTip"}))}l.isMDXComponent=!0},39005:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>p,metadata:()=>m,toc:()=>c});var t=a(18249),o=(a(52983),a(44993));const p={},r=void 0,m={unversionedId:"components/command-tip",id:"components/command-tip",title:"command-tip",description:"pnpm v6 \u548c pnpm v7 \u7248\u672c\u5728\u6267\u884c\u547d\u4ee4\u65f6\u4f7f\u7528\u59ff\u52bf\u4e0d\u5b8c\u5168\u4e00\u81f4\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e8b\u9879\uff1a",source:"@site/../../packages/toolkit/main-doc/zh/components/command-tip.md",sourceDirName:"components",slug:"/components/command-tip",permalink:"/v2/docs/components/command-tip",draft:!1,tags:[],version:"current",frontMatter:{}},i={},c=[],s={toc:c};function d(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"pnpm v6 \u548c pnpm v7 \u7248\u672c\u5728\u6267\u884c\u547d\u4ee4\u65f6\u4f7f\u7528\u59ff\u52bf\u4e0d\u5b8c\u5168\u4e00\u81f4\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e8b\u9879\uff1a"),(0,o.kt)("p",{parentName:"admonition"},"pnpm v7\uff1a"),(0,o.kt)("p",{parentName:"admonition"},"\u5728\u4f7f\u7528 pnpm \u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684\u547d\u4ee4\u65f6\uff0c\u5982\u679c\u9700\u8981\u4f20\u9012\u53c2\u6570\u81f3 pnpm\uff0c\u9700\u8981\u5c06\u53c2\u6570\u653e\u5230\u547d\u4ee4\u524d\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u4f8b\u5982\u4f7f\u7528 pnpm ",(0,o.kt)("inlineCode",{parentName:"p"},"--filter")," \u53c2\u6570\u6267\u884c prepare \u547d\u4ee4\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pnpm run --filter "./packages/**" prepare\n')),(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9700\u8981\u4f20\u9012\u53c2\u6570\u81f3\u547d\u4ee4\uff0c\u9700\u8981\u5c06\u53c2\u6570\u653e\u5230\u547d\u4ee4\u540e\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u4f8b\u5982\uff0c\u5728\u5982\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e\u4e2d\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n')),(0,o.kt)("p",{parentName:"admonition"},"\u6267\u884c command \u547d\u4ee4\u65f6\u643a\u5e26\u53c2\u6570\u65b9\u5f0f\u4e3a\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run command --options\n")),(0,o.kt)("p",{parentName:"admonition"},"pnpm v6:"),(0,o.kt)("p",{parentName:"admonition"},"\u5728\u5982\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e\u4e2d\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n')),(0,o.kt)("p",{parentName:"admonition"},"\u5f53\u9700\u8981\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"modern command --option"),"\uff1a"),(0,o.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 pnpm \u65f6\uff0c\u9700\u8981\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run command -- --option"),"\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u662f\u56e0\u4e3a pnpm \u5bf9\u4e8e\u547d\u4ee4\u53c2\u6570\u7684\u5904\u7406\u4e0e Yarn \u5e76\u4e0d\u76f8\u540c\uff0c\u4f46\u662f\u4e0e npm \u7c7b\u4f3c\uff1a\u5728\u4e0d\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f pnpm \u7684\u53c2\u6570\uff1b\u5728\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f\u6267\u884c\u811a\u672c\u7684\u53c2\u6570\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u5728\u4e0a\u8ff0\u4f8b\u5b50\u91cc\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"--option")," \u4f20\u9012\u7ed9\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern command"),"\u3002\u5982\u679c\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run command --option"),"\uff0c\u5219\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"--option")," \u5c06\u4f20\u9012\u7ed9 pnpm\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u603b\u7ed3\u6765\u8bf4\uff1a"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"\u5728\u4f7f\u7528 pnpm v7 \u65f6\uff0c\u5982\u679c\u4f20\u9012\u53c2\u6570\u7ed9 pnpm\uff0c\u9700\u8981\u5c06\u53c2\u6570\u653e\u7f6e\u5230\u547d\u4ee4\u524d")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"\u5728\u4f7f\u7528 pnpm v6 \u65f6\uff0c\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u7ed9 pnpm\uff0c\u4e0d\u9700\u8981\u52a0 ",(0,o.kt)("inlineCode",{parentName:"strong"},"--"),"\uff1b\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u662f\u7ed9\u811a\u672c\u4f7f\u7528\uff0c\u9700\u8981\u589e\u52a0 ",(0,o.kt)("inlineCode",{parentName:"strong"},"--")," \u5b57\u7b26\u4e32"),"\u3002")))}d.isMDXComponent=!0}}]);