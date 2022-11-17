"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6714],{44993:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(52983);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(18249),i=(n(52983),n(44993));const l={toc:[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4}]};function o(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Record<string, string>")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,i.kt)("p",null,"\u7528\u4e8e\u5728\u591a\u9875\u9762\u7684\u573a\u666f\u4e0b\uff0c\u4e3a\u4e0d\u540c\u7684\u9875\u9762\u8bbe\u7f6e\u4e0d\u540c\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"title"),"\u3002"),(0,i.kt)("p",null,"\u6574\u4f53\u7528\u6cd5\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," \u4e00\u81f4\uff0c\u5e76\u4e14\u53ef\u4ee5\u4f7f\u7528\u300c\u5165\u53e3\u540d\u79f0\u300d\u4f5c\u4e3a key \uff0c\u5bf9\u5404\u4e2a\u9875\u9762\u8fdb\u884c\u5355\u72ec\u8bbe\u7f6e\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"titleByEntries")," \u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"title"),"\uff0c\u56e0\u6b64\u4f1a\u8986\u76d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," \u4e2d\u8bbe\u7f6e\u7684\u503c\u3002"),(0,i.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  html: {\n    title: 'ByteDance',\n    titleByEntries: {\n      foo: 'Tiktok',\n    },\n  },\n};\n")),(0,i.kt)("p",null,"\u91cd\u65b0\u7f16\u8bd1\u540e\uff0c\u53ef\u4ee5\u770b\u5230:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9875\u9762 ",(0,i.kt)("inlineCode",{parentName:"li"},"foo")," \u7684 title \u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"Tiktok"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u9875\u9762\u7684 title \u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"ByteDance"),"\u3002")))}o.isMDXComponent=!0;const a={title:"html.titleByEntries",sidebar_label:"titleByEntries",sidebar_position:1},p=void 0,c={unversionedId:"configure/app/html/title-by-entries",id:"configure/app/html/title-by-entries",title:"html.titleByEntries",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u8df3\u8f6c\u7684\u94fe\u63a5\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 html.titleByEntries\u3002",source:"@site/docs/configure/app/html/title-by-entries.md",sourceDirName:"configure/app/html",slug:"/configure/app/html/title-by-entries",permalink:"/v2/docs/configure/app/html/title-by-entries",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"html.titleByEntries",sidebar_label:"titleByEntries",sidebar_position:1},sidebar:"configsAppSidebar",previous:{title:"template",permalink:"/v2/docs/configure/app/html/template"},next:{title:"title",permalink:"/v2/docs/configure/app/html/title"}},s={},u=[],m={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"BUILDER",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u8df3\u8f6c\u7684\u94fe\u63a5\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-html.html#html-titlebyentries"},"html.titleByEntries"),"\u3002")),(0,i.kt)(o,{mdxType:"Main"}))}d.isMDXComponent=!0}}]);