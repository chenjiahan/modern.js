"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9390],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(52983);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=i,d=f["".concat(p,".").concat(m)]||f[m]||c[m]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},51033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(18249),i=(n(52983),n(44993));const a={toc:[{value:"Example",id:"example",level:4}]};function o(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean | string")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'/'"))),(0,i.kt)("p",null,"When using CDN in the production environment, you can use this option to set the URL prefix of static assets, similar to the ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/public-path/"},"output.publicPath")," config of webpack."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"assetPrefix")," will affect the URLs of most of the static assets, including JavaScript files, CSS files, images, videos, etc. If an incorrect value is specified, you'll receive 404 errors while loading these resources."),(0,i.kt)("p",null,"This config is only used in the production environment. In the development environment, please use the ",(0,i.kt)("inlineCode",{parentName:"p"},"dev.assetPrefix")," to set the URL prefix."),(0,i.kt)("p",null,"After setting, the URLs of JavaScript, CSS and other static files will be prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"output.assetPrefix"),":"),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    assetPrefix: 'https://cdn.example.com/assets/',\n  },\n};\n")),(0,i.kt)("p",null,"After building, you can see that the JS files are loaded from:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script\n  defer\n  src="https://cdn.example.com/assets/static/js/main.ebc4ff4f.js"\n><\/script>\n')))}o.isMDXComponent=!0;const s={title:"output.assetPrefix",sidebar_label:"assetPrefix"},p=void 0,l={unversionedId:"configure/app/output/asset-prefix",id:"configure/app/output/asset-prefix",title:"output.assetPrefix",description:"This configuration is Modern.js Builder configuration, more detail can see output.assetPrefix\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/output/asset-prefix.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/asset-prefix",permalink:"/v2/en/docs/configure/app/output/asset-prefix",draft:!1,tags:[],version:"current",frontMatter:{title:"output.assetPrefix",sidebar_label:"assetPrefix"},sidebar:"configsAppSidebar",previous:{title:"title",permalink:"/v2/en/docs/configure/app/html/title"},next:{title:"assetsRetry",permalink:"/v2/en/docs/configure/app/output/assets-retry"}},u={},c=[],f={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"BUILDER",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, more detail can see ",(0,i.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/en/api/config-output.html#output-assetprefix"},"output.assetPrefix"),"\u3002")),(0,i.kt)(o,{mdxType:"Main"}))}m.isMDXComponent=!0}}]);