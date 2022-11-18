"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6324],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},58524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var r=n(18249),a=(n(52983),n(44993));const i={toc:[{value:"Boolean Type",id:"boolean-type",level:4},{value:"String type",id:"string-type",level:4}]};function o(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean | string")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'/'"))),(0,a.kt)("p",null,"Set the URL prefix of static assets in the development environment, similar to the ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/public-path/"},"output.publicPath")," config of webpack."),(0,a.kt)("p",null,"This config is only used in the development environment. In the production environment, please use the ",(0,a.kt)("inlineCode",{parentName:"p"},"output.assetPrefix")," to set the URL prefix."),(0,a.kt)("h4",{id:"boolean-type"},"Boolean Type"),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"assetPrefix")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", the URL prefix will be ",(0,a.kt)("inlineCode",{parentName:"p"},"//ip:port/"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  dev: {\n    assetPrefix: true,\n  },\n};\n")),(0,a.kt)("p",null,"The script URL will be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<script defer src="//${ip}:8080/static/js/main.js"><\/script>\n')),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"assetPrefix")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," or not set, ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," is used as the default value."),(0,a.kt)("h4",{id:"string-type"},"String type"),(0,a.kt)("p",null,"When the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"assetPrefix")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," type, the string will be used as the URL prefix:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  dev: {\n    assetPrefix: 'http://example.com/assets/',\n  },\n};\n")),(0,a.kt)("p",null,"The script URL will be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<script defer src="http://example.com/assets/static/js/main.js"><\/script>\n')))}o.isMDXComponent=!0;const p={title:"dev.assetPrefix",sidebar_label:"assetPrefix",sidebar_position:1},s=void 0,l={unversionedId:"configure/app/dev/asset-prefix",id:"configure/app/dev/asset-prefix",title:"dev.assetPrefix",description:"This configuration is Modern.js Builder configuration, there may be links that cannot be redirected. for details, please refer to dev.assetPrefix\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/dev/asset-prefix.md",sourceDirName:"configure/app/dev",slug:"/configure/app/dev/asset-prefix",permalink:"/v2/en/docs/configure/app/dev/asset-prefix",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"dev.assetPrefix",sidebar_label:"assetPrefix",sidebar_position:1},sidebar:"configsAppSidebar",previous:{title:"fetcher",permalink:"/v2/en/docs/configure/app/bff/fetcher"},next:{title:"hmr",permalink:"/v2/en/docs/configure/app/dev/hmr"}},c={},u=[],f={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"BUILDER",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, there may be links that cannot be redirected. for details, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-dev.html#dev-assetprefix"},"dev.assetPrefix"),"\u3002")),(0,a.kt)(o,{mdxType:"Main"}))}d.isMDXComponent=!0}}]);