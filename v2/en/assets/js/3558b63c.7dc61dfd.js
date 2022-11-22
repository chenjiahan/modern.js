"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1326],{44993:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(52983);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6255:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(18249),o=(r(52983),r(44993));const i={toc:[{value:"Priority",id:"priority",level:4},{value:"Default Value",id:"default-value",level:4},{value:"Example",id:"example",level:4}]};function a(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string[]")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,o.kt)("p",null,"Specifies the range of target browsers that the project is compatible with. This value will be used by ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-env"},"@babel/preset-env")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/postcss/autoprefixer"},"autoprefixer")," to identify the JavaScript syntax that need to be transformed and the CSS browser prefixes that need to be added."),(0,o.kt)("h4",{id:"priority"},"Priority"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"overrideBrowserslist")," config will override the ",(0,o.kt)("inlineCode",{parentName:"p"},".browserslistrc")," config file in the project and the ",(0,o.kt)("inlineCode",{parentName:"p"},"browserslist")," field in package.json."),(0,o.kt)("p",null,"In most cases, it is recommended to use the ",(0,o.kt)("inlineCode",{parentName:"p"},".browserslistrc")," file rather than the ",(0,o.kt)("inlineCode",{parentName:"p"},"overrideBrowserslist")," config. Because the ",(0,o.kt)("inlineCode",{parentName:"p"},".browserslistrc")," file is the official config file, it is more general and can be recognized by other libraries in the community."),(0,o.kt)("h4",{id:"default-value"},"Default Value"),(0,o.kt)("p",null,"If there is no ",(0,o.kt)("inlineCode",{parentName:"p"},"browserslist")," configs defined in the project, nor ",(0,o.kt)("inlineCode",{parentName:"p"},"overrideBrowserslist")," defined, then Builder will set the default browserslist to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"['> 0.01%', 'not dead', 'not op_mini all'];\n")),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("p",null,"An example compatible with mobile scenarios:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    overrideBrowserslist: [\n      'iOS 9',\n      'Android 4.4',\n      'last 2 versions',\n      '> 0.2%',\n      'not dead',\n    ],\n  },\n};\n")),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/browserslist/browserslist"},"browserslist documentation")," to learn more about browserslist."))}a.isMDXComponent=!0;const l={title:"output.overrideBrowserslist",sidebar_label:"overrideBrowserslist"},s=void 0,p={unversionedId:"configure/app/output/override-browserslist",id:"configure/app/output/override-browserslist",title:"output.overrideBrowserslist",description:"This configuration is Modern.js Builder configuration, there may be links that cannot be redirected. for details, please refer to output.overrideBrowserslist\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/output/override-browserslist.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/override-browserslist",permalink:"/v2/en/docs/configure/app/output/override-browserslist",draft:!1,tags:[],version:"current",frontMatter:{title:"output.overrideBrowserslist",sidebar_label:"overrideBrowserslist"},sidebar:"configsAppSidebar",previous:{title:"legalComments",permalink:"/v2/en/docs/configure/app/output/legal-comments"},next:{title:"polyfill",permalink:"/v2/en/docs/configure/app/output/polyfill"}},u={},c=[],d={toc:c};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"BUILDER",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, there may be links that cannot be redirected. for details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-output.html#output-overridebrowserslist"},"output.overrideBrowserslist"),"\u3002")),(0,o.kt)(a,{mdxType:"Main"}))}f.isMDXComponent=!0}}]);