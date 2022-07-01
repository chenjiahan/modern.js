"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[6677],{54852:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(49231);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,p=function(e,n){if(null==e)return{};var t,a,p={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,p=e.mdxType,l=e.originalType,o=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=s(t),k=p,m=c["".concat(o,".").concat(k)]||c[k]||u[k]||l;return t?a.createElement(m,i(i({ref:n},d),{},{components:t})):a.createElement(m,i({ref:n},d))}));function k(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var l=t.length,i=new Array(l);i[0]=c;var r={};for(var o in n)hasOwnProperty.call(n,o)&&(r[o]=n[o]);r.originalType=e,r.mdxType="string"==typeof e?e:p,i[1]=r;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},42299:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var a=t(86215),p=(t(49231),t(54852));const l={sidebar_position:5},i="Changesets \u914d\u7f6e\u6587\u4ef6",r={unversionedId:"guides/features/changesets/config",id:"guides/features/changesets/config",title:"Changesets \u914d\u7f6e\u6587\u4ef6",description:"\u6211\u4eec\u524d\u9762\u4e86\u89e3\u5230\uff0c\u521d\u59cb\u5316 Modern.js \u4ed3\u5e93\u65f6\uff0c\u4f1a\u9ed8\u8ba4\u521d\u59cb\u5316 Changesets \u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5373 .changeset/config.json \u6587\u4ef6\uff0c\u4e0b\u9762\u6211\u4eec\u5c06\u8be6\u7ec6\u4e86\u89e3\u4e00\u4e0b\u8be5\u6587\u4ef6\u4e2d\u652f\u6301\u54ea\u4e9b\u914d\u7f6e\u3002",source:"@site/docs/guides/features/changesets/config.md",sourceDirName:"guides/features/changesets",slug:"/guides/features/changesets/config",permalink:"/docs/guides/features/changesets/config",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"guidesSidebar",previous:{title:"\u53d1\u5e03\u9884\u53d1\u5e03\u7248\u672c",permalink:"/docs/guides/features/changesets/release-pre"},next:{title:"\u81ea\u5b9a\u4e49 Changelog \u751f\u6210",permalink:"/docs/guides/features/changesets/changelog"}},o={},s=[{value:"\u914d\u7f6e\u4ecb\u7ecd",id:"\u914d\u7f6e\u4ecb\u7ecd",level:2},{value:"commit",id:"commit",level:3},{value:"access",id:"access",level:3},{value:"baseBranch",id:"basebranch",level:3},{value:"ignore",id:"ignore",level:3},{value:"fixed",id:"fixed",level:3},{value:"linked",id:"linked",level:3},{value:"updateInternalDependencies",id:"updateinternaldependencies",level:3},{value:"changelog",id:"changelog",level:3},{value:"___experimentalUnsafeOptions_WILL_CHANGE_IN_PATCH",id:"___experimentalunsafeoptions_will_change_in_patch",level:3},{value:"onlyUpdatePeerDependentsWhenOutOfRange",id:"onlyupdatepeerdependentswhenoutofrange",level:4},{value:"updateInternalDependents",id:"updateinternaldependents",level:4},{value:"useCalculatedVersionForSnapshots",id:"usecalculatedversionforsnapshots",level:4}],d={toc:s};function u(e){let{components:n,...t}=e;return(0,p.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"changesets-\u914d\u7f6e\u6587\u4ef6"},"Changesets \u914d\u7f6e\u6587\u4ef6"),(0,p.kt)("p",null,"\u6211\u4eec\u524d\u9762\u4e86\u89e3\u5230\uff0c\u521d\u59cb\u5316 Modern.js \u4ed3\u5e93\u65f6\uff0c\u4f1a\u9ed8\u8ba4\u521d\u59cb\u5316 Changesets \u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5373 ",(0,p.kt)("inlineCode",{parentName:"p"},".changeset/config.json")," \u6587\u4ef6\uff0c\u4e0b\u9762\u6211\u4eec\u5c06\u8be6\u7ec6\u4e86\u89e3\u4e00\u4e0b\u8be5\u6587\u4ef6\u4e2d\u652f\u6301\u54ea\u4e9b\u914d\u7f6e\u3002"),(0,p.kt)("h2",{id:"\u914d\u7f6e\u4ecb\u7ecd"},"\u914d\u7f6e\u4ecb\u7ecd"),(0,p.kt)("h3",{id:"commit"},"commit"),(0,p.kt)("p",null,"\u7c7b\u578b\uff1a ",(0,p.kt)("inlineCode",{parentName:"p"},"boolean")),(0,p.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a ",(0,p.kt)("inlineCode",{parentName:"p"},"false")),(0,p.kt)("p",null,"\u5f53\u914d\u7f6e\u8be5\u5b57\u6bb5\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c\u5728\u6267\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"change")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"bump")," \u547d\u4ee4\u65f6\uff0c\u5c06\u81ea\u52a8\u6267\u884c\u63d0\u4ea4\u4ee3\u7801\u64cd\u4f5c\u3002"),(0,p.kt)("p",null,"\u9ed8\u8ba4\u7684 commit \u4fe1\u606f\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-change-commit-info.png",alt:"change commit"}),"\n",(0,p.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-bump-commit-info.png",alt:"bump commit"})),(0,p.kt)("p",null,"\u8be5 commit \u4fe1\u606f\u652f\u6301\u81ea\u5b9a\u4e49\uff0c\u6211\u4eec\u5c06\u5728",(0,p.kt)("a",{parentName:"p",href:"/docs/guides/features/changesets/commit"},"\u81ea\u5b9a\u4e49\u63d0\u4ea4 commit \u4fe1\u606f"),"\u7ae0\u8282\u8fdb\u884c\u8be6\u7ec6\u4ecb\u7ecd\u3002"),(0,p.kt)("h3",{id:"access"},"access"),(0,p.kt)("p",null,"\u7c7b\u578b\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"restricted")," | ",(0,p.kt)("inlineCode",{parentName:"p"},"public")),(0,p.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"restricted")),(0,p.kt)("p",null,"\u7528\u4e8e\u914d\u7f6e\u5f53\u524d\u5305\u7684\u53d1\u5e03\u5f62\u5f0f\uff0c\u5982\u679c\u914d\u7f6e\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"restricted"),"\uff0c\u5c06\u4f5c\u4e3a\u79c1\u6709\u5305\u53d1\u5e03\uff0c\u5982\u679c\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"public"),"\uff0c\u5219\u53d1\u5e03\u516c\u5171\u8303\u56f4\u5305\u3002"),(0,p.kt)("p",null,"\u5bf9\u4e8e\u4ed3\u5e93\u4e2d\u5b58\u5728\u90e8\u5206\u5305\u9700\u8981\u914d\u7f6e access\uff0c\u53ef\u4ee5\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u914d\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},"publishConfig"),"\uff0c\u4f8b\u5982\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=package.json",title:"package.json"},'{\n  "publishConfig": {\n    "registry": "https://registry.npmjs.org/",\n    "access": "public"\n  }\n}\n')),(0,p.kt)("p",null,"\u5bf9\u4e8e\u4e0d\u9700\u8981\u53d1\u5e03\u7684\u5305\uff0c\u53ef\u4ee5\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u8bbe\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},"private")," \u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u963b\u6b62\u5176\u8fdb\u884c\u53d1\u5e03\u3002"),(0,p.kt)("h3",{id:"basebranch"},"baseBranch"),(0,p.kt)("p",null,"\u7c7b\u578b\uff1a ",(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a ",(0,p.kt)("inlineCode",{parentName:"p"},"main")),(0,p.kt)("p",null,"\u4ed3\u5e93\u4e3b\u5206\u652f\u3002\u8be5\u914d\u7f6e\u7528\u4e8e\u8ba1\u7b97\u5f53\u524d\u5206\u652f\u7684\u53d8\u66f4\u5305\u5e76\u8fdb\u884c\u5206\u7c7b\u3002"),(0,p.kt)("h3",{id:"ignore"},"ignore"),(0,p.kt)("p",null,"\u7c7b\u578b\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"string[]")),(0,p.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"[]")),(0,p.kt)("p",null,"\u7528\u4e8e\u58f0\u660e\u6267\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"bump")," \u547d\u4ee4\u65f6\u5ffd\u7565\u7684\u5305\uff0c\u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"bump")," \u547d\u4ee4\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"--ignore")," \u53c2\u6570\u7528\u6cd5\u4e00\u81f4\uff0c\u6ce8\u610f\u4e24\u8005\u4e0d\u80fd\u540c\u65f6\u4f7f\u7528\u3002"),(0,p.kt)("h3",{id:"fixed"},"fixed"),(0,p.kt)("p",null,"\u7c7b\u578b\uff1a ",(0,p.kt)("inlineCode",{parentName:"p"},"string[][]")),(0,p.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"[]")),(0,p.kt)("p",null,"\u7528\u4e8e monorepo \u4e2d\u5bf9\u5305\u8fdb\u884c\u5206\u7ec4\uff0c\u76f8\u540c\u5206\u7ec4\u4e2d\u7684\u5305\u7248\u672c\u53f7\u5c06\u8fdb\u884c\u7ed1\u5b9a\uff0c\u6bcf\u6b21\u6267\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"bump")," \u547d\u4ee4\u65f6\uff0c\u540c\u4e00\u5206\u7ec4\u4e2d\u7684\u5305\u53ea\u8981\u6709\u4e00\u4e2a\u5347\u7ea7\u7248\u672c\u53f7\uff0c\u5176\u4ed6\u4f1a\u4e00\u8d77\u5347\u7ea7\u3002\n\u652f\u6301\u4f7f\u7528\u6b63\u5219\u5339\u914d\u5305\u540d\u79f0\u3002"),(0,p.kt)("h3",{id:"linked"},"linked"),(0,p.kt)("p",null,"\u7c7b\u578b\uff1a ",(0,p.kt)("inlineCode",{parentName:"p"},"string[][]")),(0,p.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"[]")),(0,p.kt)("p",null,"\u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"fixed")," \u7c7b\u4f3c\uff0c\u4e5f\u662f\u5bf9 monorepo \u4e2d\u5bf9\u5305\u8fdb\u884c\u5206\u7ec4\uff0c\u4f46\u662f\u6bcf\u6b21\u6267\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"bump")," \u547d\u4ee4\u65f6\uff0c\u53ea\u6709\u548c changeset \u58f0\u660e\u7684\u53d8\u66f4\u76f8\u5173\u7684\u5305\u624d\u4f1a\u5347\u7ea7\u7248\u672c\u53f7\uff0c\u540c\u4e00\u5206\u7ec4\u7684\u53d8\u66f4\u5305\u7684\u7248\u672c\u53f7\u5c06\u4fdd\u6301\u4e00\u81f4\u3002\n\u652f\u6301\u4f7f\u7528\u6b63\u5219\u5339\u914d\u5305\u540d\u79f0\u3002"),(0,p.kt)("h3",{id:"updateinternaldependencies"},"updateInternalDependencies"),(0,p.kt)("p",null,"\u7c7b\u578b\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"patch")," | ",(0,p.kt)("inlineCode",{parentName:"p"},"minor")),(0,p.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"patch")),(0,p.kt)("p",null,"\u7528\u4e8e\u58f0\u660e\u66f4\u65b0\u5185\u90e8\u4f9d\u8d56\u7684\u7248\u672c\u53f7\u89c4\u5219\u3002"),(0,p.kt)("p",null,"\u5f53\u6267\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"bump")," \u547d\u4ee4\u5347\u7ea7\u7248\u672c\u53f7\u65f6\uff0c\u9ed8\u8ba4\u4f1a\u81ea\u52a8\u66f4\u65b0\u4ed3\u5e93\u4e2d\u4f7f\u7528\u8be5\u5305\u7684\u4f9d\u8d56\u58f0\u660e\u3002\u914d\u7f6e\u8be5\u5b57\u6bb5\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"minor")," \u540e\uff0c\u5982\u679c\u5347\u7ea7\u7248\u672c\u53f7\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"patch")," \u7c7b\u578b\uff0c\u5c06\u4e0d\u4f1a\u81ea\u52a8\u66f4\u65b0\u5f15\u7528\u4f9d\u8d56\u58f0\u660e\u3002"),(0,p.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pkg-a @ version 1.0.0\npkg-b @ version 1.0.0\n  depends on pkg-a at range `^1.0.0\n")),(0,p.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5347\u7ea7 ",(0,p.kt)("inlineCode",{parentName:"p"},"pkg-a")," \u81f3 ",(0,p.kt)("inlineCode",{parentName:"p"},"1.0.1")," \u65f6\uff0c\u4f1a\u66f4\u65b0 ",(0,p.kt)("inlineCode",{parentName:"p"},"pkg-b")," \u4e2d\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"pkg-a")," \u7684\u4f9d\u8d56\u7248\u672c\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"^1.0.1"),"\u3002"),(0,p.kt)("p",null,"\u5f53\u914d\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},"updateInternalDependencies")," \u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"minor")," \u65f6\uff0c\u5347\u7ea7 ",(0,p.kt)("inlineCode",{parentName:"p"},"pkg-a")," \u81f3 ",(0,p.kt)("inlineCode",{parentName:"p"},"1.0.1")," \u65f6\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"pkg-b")," \u4e2d\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"pkg-a")," \u7684\u4f9d\u8d56\u7248\u672c\u5c06\u4e0d\u4f1a\u66f4\u65b0\uff0c\u53ea\u6709 ",(0,p.kt)("inlineCode",{parentName:"p"},"pkg-a")," \u5347\u7ea7\u7248\u672c\u53f7\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"1.1.0")," \u6216\u8005 ",(0,p.kt)("inlineCode",{parentName:"p"},"2.0.0")," \u65f6\uff0c\u624d\u4f1a\u66f4\u65b0 ",(0,p.kt)("inlineCode",{parentName:"p"},"pkg-b")," \u4e2d\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"pkg-a")," \u7684\u4f9d\u8d56\u3002"),(0,p.kt)("h3",{id:"changelog"},"changelog"),(0,p.kt)("p",null,"\u7c7b\u578b\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"boolean")," | ",(0,p.kt)("inlineCode",{parentName:"p"},"string")," | ",(0,p.kt)("inlineCode",{parentName:"p"},"[string, unknow]")),(0,p.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"@changesets/cli/changelog")),(0,p.kt)("p",null,"\u751f\u6210 Changelog \u89c4\u5219\u3002"),(0,p.kt)("p",null,"\u914d\u7f6e\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"false")," \u65f6\uff0c\u6267\u884c bump \u547d\u4ee4\u65f6\uff0c\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"CHANGELOG.md")," \u6587\u4ef6\u4e2d\u53ea\u58f0\u660e\u7248\u672c\u53f7\uff0c\u4e0d\u58f0\u660e\u5176\u4ed6 Changelog \u4fe1\u606f\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-empty-changelog.png",alt:"\u5173\u95ed changelog \u914d\u7f6e"})),(0,p.kt)("p",null,"\u914d\u7f6e\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"@changesets/cli/changelog")," \u5c06\u4f7f\u7528\u5b98\u65b9\u63d0\u4f9b\u7684 Changlog \u751f\u6210\u89c4\u5219\uff0c\u5c06 changeset \u4fe1\u606f\u8f6c\u6362\u4e3a Changlog \u5185\u5bb9\u3002"),(0,p.kt)("p",null,"\u914d\u7f6e\u4e3a\u6570\u7ec4\u65f6\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u81ea\u5b9a\u4e49 NPM \u5305\u6216\u8005\u8def\u5f84\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u9700\u8981\u4f20\u5165\u7684\u9ed8\u8ba4\u53c2\u6570\u914d\u7f6e\uff0c\u81ea\u5b9a\u4e49\u683c\u5f0f\u6211\u4eec\u5c06\u5728\u540e\u7eed",(0,p.kt)("a",{parentName:"p",href:"/docs/guides/features/changesets/changelog"},"\u81ea\u5b9a\u4e49 Changelog")," \u7ae0\u8282\u8bb2\u89e3\u3002"),(0,p.kt)("h3",{id:"___experimentalunsafeoptions_will_change_in_patch"},"___experimentalUnsafeOptions_WILL_CHANGE_IN_PATCH"),(0,p.kt)("p",null,"\u4e00\u4e9b\u5b9e\u9a8c\u6027\u914d\u7f6e\u3002"),(0,p.kt)("h4",{id:"onlyupdatepeerdependentswhenoutofrange"},"onlyUpdatePeerDependentsWhenOutOfRange"),(0,p.kt)("p",null,"\u7c7b\u578b\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"boolean")),(0,p.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"false")),(0,p.kt)("p",null,"\u9488\u5bf9\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},"peerDependence")," \u4f9d\u8d56\u7684\u5347\u7ea7\u7b56\u7565\u914d\u7f6e\uff0c\u9ed8\u8ba4\u9488\u5bf9 ",(0,p.kt)("inlineCode",{parentName:"p"},"peerDependence")," \u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"minor")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"major")," \u7248\u672c\u5347\u7ea7\u65f6\uff0c\u5f53\u524d\u5305\u4f1a\u5347\u7ea7\u5927\u7248\u672c\u3002"),(0,p.kt)("p",null,"\u8be5\u914d\u7f6e\u8bbe\u7f6e\u4e3a true \u65f6\uff0c\u4ec5\u5f53 ",(0,p.kt)("inlineCode",{parentName:"p"},"peerDependence")," \u58f0\u660e\u5305\u4f9d\u8d56\u8d85\u51fa\u58f0\u660e\u8303\u56f4\u65f6\u624d\u66f4\u65b0\u7248\u672c\u3002"),(0,p.kt)("h4",{id:"updateinternaldependents"},"updateInternalDependents"),(0,p.kt)("p",null,"\u7c7b\u578b\uff1a ",(0,p.kt)("inlineCode",{parentName:"p"},"always")," | ",(0,p.kt)("inlineCode",{parentName:"p"},"out-of-range")),(0,p.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"always")),(0,p.kt)("p",null,"\u5f53\u6267\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"bump")," \u547d\u4ee4\u5347\u7ea7\u7248\u672c\u53f7\u65f6\uff0c\u9ed8\u8ba4\u4f1a\u81ea\u52a8\u66f4\u65b0\u4ed3\u5e93\u4e2d\u4f7f\u7528\u8be5\u5305\u7684\u4f9d\u8d56\u58f0\u660e\u3002\u5f53\u8bbe\u7f6e\u8be5\u53c2\u6570\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"out-of-range")," \u65f6\uff0c\u53ea\u6709\u5f53\u4f9d\u8d56\u58f0\u660e\u8d85\u51fa\u8303\u56f4\u65f6\u624d\u4f1a\u66f4\u65b0\u4ed3\u5e93\u4e2d\u4f7f\u7528\u8be5\u5305\u7684\u4f9d\u8d56\u58f0\u660e\u3002"),(0,p.kt)("h4",{id:"usecalculatedversionforsnapshots"},"useCalculatedVersionForSnapshots"),(0,p.kt)("p",null,"\u7c7b\u578b\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"boolean")),(0,p.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"false")),(0,p.kt)("p",null,"\u4f7f\u7528\u5feb\u7167\u53d1\u5e03\u65f6\uff0c\u9ed8\u8ba4\u4f1a\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"0.0.0-timestamp")," \u7684\u7248\u672c\u683c\u5f0f\uff0c\u4fdd\u8bc1\u7528\u6237\u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528\u9884\u53d1\u5e03\u7248\u672c\u3002\u5f53\u4f60\u9700\u8981\u5ffd\u7565\u4e0a\u8ff0\u95ee\u9898\uff0c\u4f7f\u7528\u6b63\u5e38\u7684\u7248\u672c\u53f7\u683c\u5f0f\u65f6\uff0c\u5373\u5f53\u524d\u7248\u672c\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"1.0.1")," \u5feb\u7167\u7248\u672c\u671f\u671b\u4f7f\u7528",(0,p.kt)("inlineCode",{parentName:"p"},"1.0.1-timestamp"),"\uff0c\u53ef\u914d\u7f6e\u8be5\u53c2\u6570\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"))}u.isMDXComponent=!0}}]);