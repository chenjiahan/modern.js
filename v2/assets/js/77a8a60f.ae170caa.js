"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8439],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=m(n),s=o,f=d["".concat(l,".").concat(s)]||d[s]||c[s]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>p,metadata:()=>m,toc:()=>c});var r=n(18249),o=(n(52983),n(44993));const a={toc:[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4}]};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'root'"))),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cHTML \u6a21\u677f\u4e2d\u5305\u542b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," \u8282\u70b9\u7528\u4e8e\u7ec4\u4ef6\u6302\u8f7d\uff0c\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"mountId")," \u53ef\u4ee5\u4fee\u6539\u8be5\u8282\u70b9\u7684 id\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n  <div id="root"></div>\n</body>\n')),(0,o.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("p",null,"\u4fee\u6539 DOM \u6302\u8f7d\u8282\u70b9 ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," \u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"app"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  html: {\n    mountId: 'app',\n  },\n};\n")),(0,o.kt)("p",null,"\u7f16\u8bd1\u540e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n  <div id="app"></div>\n</body>\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u81ea\u5b9a\u4e49\u4e86 HTML \u6a21\u677f\uff0c\u8bf7\u786e\u4fdd\u6a21\u677f\u4e2d\u5305\u542b ",(0,o.kt)("inlineCode",{parentName:"p"},'<div id="<%= mountId %>"></div>'),"\uff0c\u5426\u5219\u8be5\u914d\u7f6e\u9879\u65e0\u6cd5\u751f\u6548\u3002")))}i.isMDXComponent=!0;const p={title:"html.mountId",sidebar_label:"mountId",sidebar_position:1},l=void 0,m={unversionedId:"configure/app/html/mount-id",id:"configure/app/html/mount-id",title:"html.mountId",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u8df3\u8f6c\u7684\u94fe\u63a5\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 html.mountId\u3002",source:"@site/docs/configure/app/html/mount-id.md",sourceDirName:"configure/app/html",slug:"/configure/app/html/mount-id",permalink:"/v2/docs/configure/app/html/mount-id",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"html.mountId",sidebar_label:"mountId",sidebar_position:1},sidebar:"configsAppSidebar",previous:{title:"meta",permalink:"/v2/docs/configure/app/html/meta"},next:{title:"templateByEntries",permalink:"/v2/docs/configure/app/html/template-by-entries"}},u={},c=[],d={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"BUILDER",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u8df3\u8f6c\u7684\u94fe\u63a5\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-html.html#html-mountid"},"html.mountId"),"\u3002")),(0,o.kt)(i,{mdxType:"Main"}))}s.isMDXComponent=!0}}]);