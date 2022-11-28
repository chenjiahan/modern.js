"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9936],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(52983);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),f=i,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},67902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(18249),i=(n(52983),n(44993));const a={sidebar_position:7},o="updateTextRawFile",l={unversionedId:"guides/topic-detail/generator/plugin/api/file/updateTextRawFile",id:"guides/topic-detail/generator/plugin/api/file/updateTextRawFile",title:"updateTextRawFile",description:"Update the text list file content.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/topic-detail/generator/plugin/api/file/updateTextRawFile.md",sourceDirName:"guides/topic-detail/generator/plugin/api/file",slug:"/guides/topic-detail/generator/plugin/api/file/updateTextRawFile",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/file/updateTextRawFile",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"guidesSidebar",previous:{title:"updateJSONFile",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/file/updateJSONFile"},next:{title:"updateModernConfig",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/file/updateModernConfig"}},p={},u=[{value:"fileName",id:"filename",level:2},{value:"update",id:"update",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"updatetextrawfile"},"updateTextRawFile"),(0,i.kt)("p",null,"Update the text list file content."),(0,i.kt)("p",null,"This method works with the text list file type."),(0,i.kt)("p",null,"This method is available on the ",(0,i.kt)("inlineCode",{parentName:"p"},"onForged")," time to live API parameter."),(0,i.kt)("p",null,"Its type is defined as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export type ForgedAPI = {\nupdateTextRawFile: (\n    fileName: string,\n    update: (content: string[]) => string[],\n  ) => Promise<void>;\n  ...\n};\n")),(0,i.kt)("h2",{id:"filename"},"fileName"),(0,i.kt)("p",null,"The filename or file path of the text list file."),(0,i.kt)("h2",{id:"update"},"update"),(0,i.kt)("p",null,"Update function."),(0,i.kt)("p",null,"The function parameter is the current file content. The content will be divided by ",(0,i.kt)("inlineCode",{parentName:"p"},"\\n")," and passed into function in the form of array. The return value of function is also array. The internal will be automatically merged with ",(0,i.kt)("inlineCode",{parentName:"p"},"\\n")," and written to the source file."))}d.isMDXComponent=!0}}]);