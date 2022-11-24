"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4014],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(n),s=o,f=d["".concat(p,".").concat(s)]||d[s]||u[s]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3627:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>m,toc:()=>u});var r=n(18249),o=(n(52983),n(44993));const a={toc:[{value:"Example",id:"example",level:4}]};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'root'"))),(0,o.kt)("p",null,"By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," element is included in the HTML template for component mounting, and the element id can be modified through ",(0,o.kt)("inlineCode",{parentName:"p"},"mountId"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n  <div id="root"></div>\n</body>\n')),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("p",null,"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"app"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  html: {\n    mountId: 'app',\n  },\n};\n")),(0,o.kt)("p",null,"After compilation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n  <div id="app"></div>\n</body>\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you customized the HTML template, please make sure that the template contains ",(0,o.kt)("inlineCode",{parentName:"p"},'<div id="<%= mountId %>"></div>'),", otherwise this config will not take effect.")))}i.isMDXComponent=!0;const l={title:"html.mountId",sidebar_label:"mountId"},p=void 0,m={unversionedId:"configure/app/html/mount-id",id:"configure/app/html/mount-id",title:"html.mountId",description:"This configuration is Modern.js Builder configuration, there may be links that cannot be redirected. for details, please refer to html.mountId\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/html/mount-id.md",sourceDirName:"configure/app/html",slug:"/configure/app/html/mount-id",permalink:"/v2/en/docs/configure/app/html/mount-id",draft:!1,tags:[],version:"current",frontMatter:{title:"html.mountId",sidebar_label:"mountId"},sidebar:"configsAppSidebar",previous:{title:"meta",permalink:"/v2/en/docs/configure/app/html/meta"},next:{title:"templateByEntries",permalink:"/v2/en/docs/configure/app/html/template-by-entries"}},c={},u=[],d={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"BUILDER",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, there may be links that cannot be redirected. for details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-html.html#html-mountid"},"html.mountId"),"\u3002")),(0,o.kt)(i,{mdxType:"Main"}))}s.isMDXComponent=!0}}]);