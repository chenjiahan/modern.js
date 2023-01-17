"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4110],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},94463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var r=n(18249),o=(n(52983),n(44993));const i={toc:[{value:"Example",id:"example",level:4},{value:"Set according to Targets",id:"set-according-to-targets",level:4}]};function a(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string | Record<BuilderTarget, string>")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,o.kt)("p",null,"Add a prefix to ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/resolve/#resolveextensions"},"resolve.extensions"),"."),(0,o.kt)("p",null,"If multiple files share the same name but have different extensions, Builder will resolve the one with the extension listed first in the array and skip the rest."),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  source: {\n    resolveExtensionPrefix: '.web',\n  },\n};\n")),(0,o.kt)("p",null,"With the configuration above, the extensions array will become:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// before\nconst extensions = ['.js', '.ts', ...];\n\n// after\nconst extensions = ['.web.js', '.js', '.web.ts' , '.ts', ...];\n")),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"import './foo'")," in the code, the ",(0,o.kt)("inlineCode",{parentName:"p"},"foo.web.js")," file will be resolved first, then the ",(0,o.kt)("inlineCode",{parentName:"p"},"foo.js")," file."),(0,o.kt)("h4",{id:"set-according-to-targets"},"Set according to Targets"),(0,o.kt)("p",null,"When you build multiple targets at the same time, you can set different extension prefix for different targets. At this point, you need to set ",(0,o.kt)("inlineCode",{parentName:"p"},"resolveExtensionPrefix")," to an object whose key is the corresponding build target."),(0,o.kt)("p",null,"For example to set different extension prefix for ",(0,o.kt)("inlineCode",{parentName:"p"},"web")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"node"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    source: {\n      resolveExtensionPrefix: {\n        web: '.web',\n        node: '.node',\n      },\n    },\n  },\n};\n")),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"import './foo'")," in the code, the ",(0,o.kt)("inlineCode",{parentName:"p"},"foo.node.js")," file will be resolved for node target, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"foo.web.js")," file will be resolved for web target."))}a.isMDXComponent=!0;const s={title:"source.resolveExtensionPrefix",sidebar_label:"resolveExtensionPrefix"},l=void 0,p={unversionedId:"configure/app/source/resolve-extension-prefix",id:"configure/app/source/resolve-extension-prefix",title:"source.resolveExtensionPrefix",description:"This configuration is Modern.js Builder configuration, more detail can see source.resolveExtensionPrefix\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/source/resolve-extension-prefix.md",sourceDirName:"configure/app/source",slug:"/configure/app/source/resolve-extension-prefix",permalink:"/v2/en/docs/configure/app/source/resolve-extension-prefix",draft:!1,tags:[],version:"current",frontMatter:{title:"source.resolveExtensionPrefix",sidebar_label:"resolveExtensionPrefix"},sidebar:"configsAppSidebar",previous:{title:"preEntry",permalink:"/v2/en/docs/configure/app/source/pre-entry"},next:{title:"resolveMainFields",permalink:"/v2/en/docs/configure/app/source/resolve-main-fields"}},c={},u=[],f={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"BUILDER",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, more detail can see ",(0,o.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/en/api/config-source.html#source-resolveextensionprefix"},"source.resolveExtensionPrefix"),"\u3002")),(0,o.kt)(a,{mdxType:"Main"}))}d.isMDXComponent=!0}}]);