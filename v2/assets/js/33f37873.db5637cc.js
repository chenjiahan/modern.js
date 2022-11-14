"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3613],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(18249),r=(n(52983),n(44993));const i={sidebar_position:1},o="\u8ba4\u8bc6 Changesets",p={unversionedId:"guides/topic-detail/changesets/introduce",id:"guides/topic-detail/changesets/introduce",title:"\u8ba4\u8bc6 Changesets",description:"Modern.js \u9ed8\u8ba4\u96c6\u6210\u4e86 Changesets \u7528\u4e8e\u6a21\u5757\u548c Monorepo \u5de5\u7a0b\u65b9\u6848\u9879\u76ee\u4e2d\u7684\u5305\u7248\u672c\u7ba1\u7406\u3002",source:"@site/docs/guides/topic-detail/changesets/introduce.md",sourceDirName:"guides/topic-detail/changesets",slug:"/guides/topic-detail/changesets/introduce",permalink:"/v2/docs/guides/topic-detail/changesets/introduce",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"\u5e94\u7528\u9879\u76ee\u7684\u90e8\u7f72",permalink:"/v2/docs/guides/topic-detail/monorepo/deploy"},next:{title:"\u6dfb\u52a0\u4e00\u4e2a changeset",permalink:"/v2/docs/guides/topic-detail/changesets/add"}},s={},l=[{value:"\u7279\u70b9",id:"\u7279\u70b9",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u8ba4\u8bc6-changesets"},"\u8ba4\u8bc6 Changesets"),(0,r.kt)("p",null,"Modern.js \u9ed8\u8ba4\u96c6\u6210\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/changesets/changesets"},"Changesets")," \u7528\u4e8e\u6a21\u5757\u548c Monorepo \u5de5\u7a0b\u65b9\u6848\u9879\u76ee\u4e2d\u7684\u5305\u7248\u672c\u7ba1\u7406\u3002"),(0,r.kt)("h2",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,r.kt)("p",null,"Changesets \u5177\u6709\u4ee5\u4e0b\u51e0\u4e2a\u7279\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u5f00\u53d1\u65f6\uff0c\u9700\u8981\u5f00\u53d1\u8005\u63d0\u4f9b\u672c\u6b21\u53d8\u66f4\u6d89\u53ca\u7684\u5305\u540d\u79f0\u3001\u5347\u7ea7\u7248\u672c\u7c7b\u578b(",(0,r.kt)("inlineCode",{parentName:"p"},"pathch"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"minor"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"major"),")\u53ca\u53d8\u66f4\u4fe1\u606f\uff0c\u5373 changeset\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u53d1\u5e03\u7248\u672c\u65f6\uff0c\u4f1a\u6839\u636e changeset \u81ea\u52a8\u5347\u7ea7\u5bf9\u5e94\u5305\u7684\u7248\u672c\u53f7\uff0c\u5e76\u5728\u5bf9\u5e94\u7684\u5305\u4e2d\u751f\u6210 Changelog \u4fe1\u606f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728 Monorepo \u573a\u666f\u4e2d\uff0cchangeset \u4f1a\u81ea\u52a8\u751f\u6210\u4ed3\u5e93\u4f9d\u8d56\u56fe\uff0c\u5347\u7ea7\u65f6\u53ea\u4f1a\u5347\u7ea7\u53d8\u66f4\u5305\u53ca\u76f8\u5173\u4f9d\u8d56\u5305\u7684\u7248\u672c\u53f7\u3002"))),(0,r.kt)("h2",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,r.kt)("p",null,"Modern.js \u9ed8\u8ba4\u521b\u5efa\u7684\u6a21\u5757\u548c Monorepo \u5de5\u7a0b\u65b9\u6848\u9879\u76ee\u5df2\u7ecf\u521d\u59cb\u5316\u5b8c\u6210 Changesets\uff0c\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4f1a\u81ea\u52a8\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},".changeset")," \u76ee\u5f55\uff0c\u53ca ",(0,r.kt)("inlineCode",{parentName:"p"},".changeset/config.json")," \u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u5e76\u4e14\uff0cModern.js \u5728\u5176\u5bf9\u5e94\u7684\u5de5\u7a0b\u65b9\u6848\u5de5\u5177 ",(0,r.kt)("inlineCode",{parentName:"p"},"@modern-js/module-tools")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"@modern-js/monorepo-tools")," \u63d0\u4f9b\u4e86 Changesets \u76f8\u5e94\u7684\u547d\u4ee4\uff0c\u65e0\u9700\u518d\u624b\u52a8\u5b89\u88c5 Changesets \u76f8\u5173\u4f9d\u8d56\u3002"),(0,r.kt)("p",null,"Changesets \u9ed8\u8ba4\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".changeset/config.json"',title:'".changeset/config.json"'},'{\n  "$schema": "https://unpkg.com/@changesets/config@2.0.0/schema.json",\n  "changelog": "@changesets/cli/changelog",\n  "commit": false,\n  "linked": [],\n  "access": "restricted",\n  "baseBranch": "main",\n  "updateInternalDependencies": "patch",\n  "ignore": []\n}\n')),(0,r.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u63d0\u4f9b\u4e86\u751f\u6210 Changesets \u7684\u4e00\u4e9b\u57fa\u672c\u914d\u7f6e\uff0c\u5b57\u6bb5\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u53c2\u8003\u540e\u7eed\u7ae0\u8282\uff1a ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/changesets/config"},"Changesets \u914d\u7f6e\u6587\u4ef6"),"\u3002"),(0,r.kt)("h2",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"change")," \u521b\u5efa\u4e00\u4e2a changeset\uff0c\u6267\u884c\u5b8c\u6210\u8be5\u547d\u4ee4\u540e\u4f1a\u81ea\u52a8\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},".changeset")," \u76ee\u5f55\u751f\u6210\u4e00\u4e2a changeset \u6587\u4ef6\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bump")," \u6839\u636e\u5f53\u524d changeset \u5347\u7ea7\u5bf9\u5e94\u5305\u7248\u672c\u53f7\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"pre")," \u6807\u8bb0\u8fdb\u5165\u548c\u9000\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"pre release")," \u6a21\u5f0f\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"pre release")," \u6a21\u5f0f\u4e0b\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"bump")," \u547d\u4ee4\uff0c\u5c06\u4f1a\u751f\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"x.x.x-${pre-tag}.x")," \u7684\u7248\u672c\u53f7\u683c\u5f0f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"release")," \u53d1\u5e03\u5305\u5230 NPM\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status")," \u67e5\u770b\u5f53\u524d changeset \u72b6\u6001\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"gen-release-note")," \u6839\u636e\u5f53\u524d\u7684 chagneset \u72b6\u6001\u751f\u6210 Release Note \u4fe1\u606f\u3002"))),(0,r.kt)("p",null,"\u5177\u4f53\u547d\u4ee4\u652f\u6301\u7684\u53c2\u6570\u53ef\u4ee5\u67e5\u770b\u540e\u7eed\u5bf9\u5e94\u7ae0\u8282\u4ecb\u7ecd\u3002"))}u.isMDXComponent=!0}}]);