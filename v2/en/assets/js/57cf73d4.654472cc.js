"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1909],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(18249),r=(n(52983),n(44993));const i={title:"\u63d2\u4ef6\u4e4b\u95f4\u7684\u5173\u7cfb",sidebar_position:4},l=void 0,o={unversionedId:"guides/topic-detail/framework-plugin/relationship",id:"guides/topic-detail/framework-plugin/relationship",title:"\u63d2\u4ef6\u4e4b\u95f4\u7684\u5173\u7cfb",description:"Modern.js \u7684\u63d2\u4ef6\u914d\u7f6e\u5bf9\u8c61\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7684\u5b57\u6bb5\uff0c\u7528\u4e8e\u63a7\u5236\u63d2\u4ef6\u987a\u5e8f\u3001\u4e92\u65a5\u7b49\u80fd\u529b\uff0c\u53ef\u7528\u7684\u5b57\u6bb5\u5982\u4e0b\uff1a",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/topic-detail/framework-plugin/relationship.md",sourceDirName:"guides/topic-detail/framework-plugin",slug:"/guides/topic-detail/framework-plugin/relationship",permalink:"/v2/en/docs/guides/topic-detail/framework-plugin/relationship",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u63d2\u4ef6\u4e4b\u95f4\u7684\u5173\u7cfb",sidebar_position:4},sidebar:"guidesSidebar",previous:{title:"\u5982\u4f55\u7f16\u5199\u63d2\u4ef6",permalink:"/v2/en/docs/guides/topic-detail/framework-plugin/implement"},next:{title:"\u6269\u5c55\u63d2\u4ef6 Hook",permalink:"/v2/en/docs/guides/topic-detail/framework-plugin/extend"}},p={},s=[{value:"\u63d2\u4ef6\u6392\u5e8f",id:"\u63d2\u4ef6\u6392\u5e8f",level:2},{value:"\u524d\u7f6e\u63d2\u4ef6",id:"\u524d\u7f6e\u63d2\u4ef6",level:3},{value:"\u540e\u7f6e\u63d2\u4ef6",id:"\u540e\u7f6e\u63d2\u4ef6",level:3},{value:"\u4e92\u65a5\u63d2\u4ef6",id:"\u4e92\u65a5\u63d2\u4ef6",level:2},{value:"\u5fc5\u9700\u63d2\u4ef6",id:"\u5fc5\u9700\u63d2\u4ef6",level:2},{value:"\u6ce8\u518c\u63d2\u4ef6",id:"\u6ce8\u518c\u63d2\u4ef6",level:2}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Modern.js \u7684\u63d2\u4ef6\u914d\u7f6e\u5bf9\u8c61\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7684\u5b57\u6bb5\uff0c\u7528\u4e8e\u63a7\u5236\u63d2\u4ef6\u987a\u5e8f\u3001\u4e92\u65a5\u7b49\u80fd\u529b\uff0c\u53ef\u7528\u7684\u5b57\u6bb5\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u8bbe\u7f6e\u5f53\u524d\u63d2\u4ef6\u7684\u540d\u79f0\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pre"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string[]"),"\uff0c\u8fd9\u4e9b\u63d2\u4ef6\u6700\u7ec8\u4f1a\u8c03\u6574\u5230\u5f53\u524d\u63d2\u4ef6\u524d\u9762\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"post"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string[]"),"\uff0c\u8fd9\u4e9b\u63d2\u4ef6\u6700\u7ec8\u4f1a\u8c03\u6574\u5230\u5f53\u524d\u63d2\u4ef6\u540e\u9762\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rivals"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string[]"),"\uff0c\u4e92\u65a5\u63d2\u4ef6\uff0c\u9047\u5230\u8fd9\u4e9b\u63d2\u4ef6\u65f6\u4f1a\u62a5\u9519\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"required"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string[]"),"\uff0c\u5fc5\u9700\u63d2\u4ef6\uff0c\u63d2\u4ef6\u5217\u8868\u4e2d\u6ca1\u6709\u5bf9\u5e94\u7684\u63d2\u4ef6\u65f6\u4f1a\u62a5\u9519\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"usePlugin"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"CliPlugin[]"),"\uff0c\u6ce8\u518c\u5176\u4ed6\u63d2\u4ef6\u3002")),(0,r.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u53c2\u6570\u53ef\u4ee5\u5b9e\u73b0\u63d2\u4ef6\u7684\u524d\u7f6e\u3001\u540e\u7f6e\u3001\u4e92\u65a5\u3001\u5fc5\u9700\u7b49\u903b\u8f91\u3002"),(0,r.kt)("h2",{id:"\u63d2\u4ef6\u6392\u5e8f"},"\u63d2\u4ef6\u6392\u5e8f"),(0,r.kt)("p",null,"Modern.js \u7684\u63d2\u4ef6\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"pre"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"post")," \u53c2\u6570\u6765\u5b9e\u73b0\u4e86\u63d2\u4ef6\u6392\u5e8f\u7684\u529f\u80fd\u3002"),(0,r.kt)("h3",{id:"\u524d\u7f6e\u63d2\u4ef6"},"\u524d\u7f6e\u63d2\u4ef6"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u63d2\u4ef6\u4f1a\u6309\u7167\u6dfb\u52a0\u987a\u5e8f\u4f9d\u6b21\u6267\u884c\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"pre")," \u5b57\u6bb5\u53ef\u4ee5\u58f0\u660e\u524d\u7f6e\u6267\u884c\u7684\u63d2\u4ef6\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\u6709\u4e0b\u9762\u4e24\u4e2a\u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=foo.ts",title:"foo.ts"},"const foo = {\n  name: 'plugin-foo',\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=bar.ts",title:"bar.ts"},"const bar = {\n  name: 'plugin-bar',\n  pre: ['plugin-foo'],\n};\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bar")," \u63d2\u4ef6\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"pre")," \u5b57\u6bb5\u4e2d\u914d\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u63d2\u4ef6\uff0c\u56e0\u6b64 ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u63d2\u4ef6\u4e00\u5b9a\u4f1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," \u63d2\u4ef6\u4e4b\u524d\u6267\u884c\u3002"),(0,r.kt)("h3",{id:"\u540e\u7f6e\u63d2\u4ef6"},"\u540e\u7f6e\u63d2\u4ef6"),(0,r.kt)("p",null,"\u540c\u6837\u7684\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"post")," \u5b57\u6bb5\u53ef\u4ee5\u58f0\u660e\u540e\u7f6e\u6267\u884c\u7684\u63d2\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=foo.ts",title:"foo.ts"},"const foo = {\n  name: 'plugin-foo',\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=bar.ts",title:"bar.ts"},"const bar = {\n  name: 'plugin-bar',\n  post: ['plugin-foo'],\n};\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bar")," \u63d2\u4ef6\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"post")," \u5b57\u6bb5\u4e2d\u914d\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u63d2\u4ef6\uff0c\u56e0\u6b64 ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u63d2\u4ef6\u4e00\u5b9a\u4f1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," \u63d2\u4ef6\u4e4b\u540e\u6267\u884c\u3002"),(0,r.kt)("h2",{id:"\u4e92\u65a5\u63d2\u4ef6"},"\u4e92\u65a5\u63d2\u4ef6"),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"rivals")," \u5b57\u6bb5\u53ef\u4ee5\u58f0\u660e\u63d2\u4ef6\u95f4\u7684\u4e92\u65a5\u5173\u7cfb\u3002"),(0,r.kt)("p",null,"\u6709\u4e0b\u9762\u4e24\u4e2a\u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=foo.ts",title:"foo.ts"},"const foo = {\n  name: 'plugin-foo',\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=bar.ts",title:"bar.ts"},"const bar = {\n  name: 'plugin-bar',\n  rivals: ['plugin-foo'],\n};\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bar")," \u63d2\u4ef6\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"rivals")," \u5b57\u6bb5\u4e2d\u914d\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u63d2\u4ef6\uff0c\u56e0\u6b64\u540c\u65f6\u6dfb\u52a0\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u63d2\u4ef6\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," \u63d2\u4ef6\u5c31\u4f1a\u62a5\u9519\u3002"),(0,r.kt)("h2",{id:"\u5fc5\u9700\u63d2\u4ef6"},"\u5fc5\u9700\u63d2\u4ef6"),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"required")," \u5b57\u6bb5\u53ef\u4ee5\u58f0\u660e\u63d2\u4ef6\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\u3002"),(0,r.kt)("p",null,"\u6709\u4e0b\u9762\u4e24\u4e2a\u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=foo.ts",title:"foo.ts"},"const foo = {\n  name: 'plugin-foo',\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=bar.ts",title:"bar.ts"},"const bar = {\n  name: 'plugin-bar',\n  required: ['plugin-foo'],\n};\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bar")," \u63d2\u4ef6\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"required")," \u5b57\u6bb5\u4e2d\u914d\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u63d2\u4ef6\uff0c\u56e0\u6b64\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," \u63d2\u4ef6\u65f6\uff0c\u5982\u679c\u672a\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u63d2\u4ef6\u5c31\u4f1a\u62a5\u9519\u3002"),(0,r.kt)("h2",{id:"\u6ce8\u518c\u63d2\u4ef6"},"\u6ce8\u518c\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53\u63d2\u4ef6\u4e4b\u95f4\u5b58\u5728\u4f9d\u8d56\u5173\u7cfb\u65f6\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u5728\u4e00\u4e2a\u63d2\u4ef6\u4e2d\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"usePlugin")," \u4e3b\u52a8\u6ce8\u518c\u53e6\u4e00\u4e2a\u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=foo.ts",title:"foo.ts"},"const foo = () => ({\n  name: 'plugin-foo',\n});\n\nconst bar = () => ({\n  name: 'plugin-bar',\n  usePlugin: [foo()],\n});\n")),(0,r.kt)("p",null,"\u5f53\u4f7f\u7528\u8005\u914d\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," \u63d2\u4ef6\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u63d2\u4ef6\u4e5f\u4f1a\u81ea\u52a8\u6ce8\u518c\u751f\u6548\uff0c\u4f7f\u7528\u8005\u5c31\u4e0d\u9700\u8981\u53bb\u989d\u5916\u6ce8\u518c ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u63d2\u4ef6\u4e86\u3002"))}m.isMDXComponent=!0}}]);