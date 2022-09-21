"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[16887],{57522:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var a=t(29901);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),i=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=i(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=i(t),u=l,g=c["".concat(s,".").concat(u)]||c[u]||d[u]||r;return t?a.createElement(g,p(p({ref:n},m),{},{components:t})):a.createElement(g,p({ref:n},m))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,p[1]=o;for(var i=2;i<r;i++)p[i]=t[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},70702:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(29901);function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",hidden:t,className:l},n)}},189:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(18249),l=t(29901),r=t(78684),p=t(67167),o=t(25789);const s="tabItem_Uhzi";function i(e){var n,t,r;const{lazy:i,block:m,defaultValue:d,values:c,groupId:u,className:g}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=c?c:k.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),N=(0,p.lx)(h,((e,n)=>e.value===n.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===d?d:null!=(n=null!=d?d:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?n:null==(r=k[0])?void 0:r.props.value;if(null!==v&&!h.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:f,setTabGroupChoices:b}=(0,p.UB)(),[x,y]=(0,l.useState)(v),C=[],{blockElementScrollPositionUntilNextRender:j}=(0,p.o5)();if(null!=u){const e=f[u];null!=e&&e!==x&&h.some((n=>n.value===e))&&y(e)}const w=e=>{const n=e.currentTarget,t=C.indexOf(n),a=h[t].value;a!==x&&(j(n),y(a),null!=u&&b(u,a))},T=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]||C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]||C[C.length-1];break}}null==(n=t)||n.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},g)},h.map((e=>{let{value:n,label:t,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:e=>C.push(e),onKeyDown:T,onFocus:w,onClick:w},r,{className:(0,o.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),i?(0,l.cloneElement)(k.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},k.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==x})))))}function m(e){const n=(0,r.Z)();return l.createElement(i,(0,a.Z)({key:String(n)},e))}},60239:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=t(18249),l=(t(29901),t(57522)),r=t(189),p=t(70702);const o={title:"\u4f7f\u7528\u7ea6\u5b9a\u5f0f\u8def\u7531\u200b\u200b\u200b\u200b"},s=void 0,i={unversionedId:"guides/tutorials/c08-client-side-routing/8.2-file-based-routing",id:"guides/tutorials/c08-client-side-routing/8.2-file-based-routing",title:"\u4f7f\u7528\u7ea6\u5b9a\u5f0f\u8def\u7531\u200b\u200b\u200b\u200b",description:"\u4e0a\u4e00\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528\u3010 \u81ea\u63a7\u5f0f\u8def\u7531 \u3011\u65b9\u5f0f\u5b9e\u73b0\u5ba2\u6237\u7aef\u8def\u7531\u3002",source:"@site/docs/guides/tutorials/c08-client-side-routing/8.2-file-based-routing.md",sourceDirName:"guides/tutorials/c08-client-side-routing",slug:"/guides/tutorials/c08-client-side-routing/8.2-file-based-routing",permalink:"/docs/guides/tutorials/c08-client-side-routing/8.2-file-based-routing",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528\u7ea6\u5b9a\u5f0f\u8def\u7531\u200b\u200b\u200b\u200b"},sidebar:"guidesSidebar",previous:{title:"\u4f7f\u7528\u81ea\u63a7\u5f0f\u8def\u7531\u200b\u200b\u200b\u200b",permalink:"/docs/guides/tutorials/c08-client-side-routing/8.1-code-based-routing"},next:{title:"Serverless \u5f00\u53d1\u8303\u5f0f",permalink:"/docs/guides/tutorials/c09-bff/9.1-serverless"}},m={},d=[],c={toc:d};function u(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4e0a\u4e00\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528\u3010 \u81ea\u63a7\u5f0f\u8def\u7531 \u3011\u65b9\u5f0f\u5b9e\u73b0\u5ba2\u6237\u7aef\u8def\u7531\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e00\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u5728 landing-page \u5165\u53e3\u91cc\uff0c\u5b66\u4e60\u4f7f\u7528\u3010 \u7ea6\u5b9a\u5f0f\u8def\u7531 \u3011\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u9996\u5148\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"landing-page")," \u5165\u53e3\u7684",(0,l.kt)("strong",{parentName:"p"},"\u6807\u8bc6")," ",(0,l.kt)("inlineCode",{parentName:"p"},"App.tsx")," \u5220\u9664\uff0c\u6362\u6210\u53e6\u4e00\u79cd\u7b26\u5408\u7ea6\u5b9a\u7684",(0,l.kt)("strong",{parentName:"p"},"\u6807\u8bc6")," ",(0,l.kt)("inlineCode",{parentName:"p"},"pages/"),"\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u5728\u7ec8\u7aef\u6267\u884c\u4ee5\u4e0b\u4ee3\u7801\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"landing-page")," \u6587\u4ef6\u5185\u5bb9\uff1a"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rm src/landing-page/App.tsx src/landing-page/App.css\nmkdir -p src/landing-page/pages/\ntouch src/landing-page/pages/_app.tsx src/landing-page/pages/index.tsx src/landing-page/pages/docs.tsx\n"))),(0,l.kt)(p.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"rm src/landing-page/App.tsx\nrm src/landing-page/App.css\nmkdir -p src/landing-page/pages/\nni src/landing-page/pages/_app.tsx\nni src/landing-page/pages/index.tsx\nni src/landing-page/pages/docs.tsx\n")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pages/")," \u8ddf ",(0,l.kt)("inlineCode",{parentName:"p"},"App.tsx")," \u4e00\u6837\uff0c\u90fd\u8d77\u5230\u5165\u53e3",(0,l.kt)("strong",{parentName:"p"},"\u6807\u8bc6"),"\u7684\u4f5c\u7528\uff0c\u8ba9 ",(0,l.kt)("inlineCode",{parentName:"p"},"src/landing-page")," \u88ab\u8bc6\u522b\u4e3a\u5165\u53e3\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u5b58\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"App.tsx")," \u5219\u4f18\u5148\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"App.tsx")," \u4f5c\u4e3a\u7f16\u8bd1\u5165\u53e3\u3002\u800c ",(0,l.kt)("inlineCode",{parentName:"p"},"pages/")," \u5219\u9ed8\u8ba4\u542f\u7528\u3010 \u7ea6\u5b9a\u5f0f\u8def\u7531 \u3011\u7684\u5ba2\u6237\u7aef\u8def\u7531\u5b9e\u73b0\u65b9\u5f0f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"pages/")," \u4e2d\u7684\u6587\u4ef6\u8def\u5f84\u548c\u6587\u4ef6\u5185\u5bb9\uff0c\u5c06\u88ab\u81ea\u52a8\u81ea\u52a8\u8f6c\u6362\u6210\u5ba2\u6237\u7aef\u8def\u7531\u903b\u8f91\u3002"),(0,l.kt)("p",null,"\u6267\u884c\u547d\u4ee4\u540e\uff0c\u9879\u76ee\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},".\n\u251c\u2500\u2500 .vscode/\n\u2502   \u251c\u2500\u2500 extensions.json\n\u2502   \u2514\u2500\u2500 settings.json\n\u251c\u2500\u2500 src/\n\u2502   \u251c\u2500\u2500 contacts/\n\u2502   \u2502   \u251c\u2500\u2500 components/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Avatar/\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.stories.tsx\n\u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 index.tsx\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 Item/\n\u2502   \u2502   \u2502       \u251c\u2500\u2500 index.test.tsx\n\u2502   \u2502   \u2502       \u2514\u2500\u2500 index.tsx\n\u2502   \u2502   \u251c\u2500\u2500 styles/\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 utils.css\n\u2502   \u2502   \u251c\u2500\u2500 App.css\n\u2502   \u2502   \u2514\u2500\u2500 App.tsx\n\u2502   \u251c\u2500\u2500 landing-page/\n\u2502   \u2502   \u2514\u2500\u2500 pages/\n\u2502   \u2502       \u251c\u2500\u2500 _app.tsx\n\u2502   \u2502       \u251c\u2500\u2500 docs.tsx\n\u2502   \u2502       \u2514\u2500\u2500 index.tsx\n\u2502   \u251c\u2500\u2500 .eslintrc.json\n\u2502   \u2514\u2500\u2500 modern-app-env.d.ts\n\u251c\u2500\u2500 .editorconfig\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 .npmrc\n\u251c\u2500\u2500 .nvmrc\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 pnpm-lock.yaml\n\u2514\u2500\u2500 tsconfig.json\n")),(0,l.kt)("p",null,"\u6ce8\uff1a\u4ee5\u4e0a\u5c55\u793a\u7684\u662f\u624b\u52a8\u521b\u5efa\u5165\u53e3\u7684\u65b9\u5f0f\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u4ecb\u7ecd\u81ea\u52a8\u542f\u7528\u65b9\u5f0f\uff0c\u5f00\u53d1\u8005\u53ef\u5728\u81ea\u5df1\u7684\u9879\u76ee\u4e2d\u5c1d\u8bd5\uff1a"),(0,l.kt)("p",null,"\u5728 modern.js \u9879\u76ee\u4e2d\uff0c\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run new"),"\u547d\u4ee4, \u6309\u7167\u4ee5\u4e0b\u9009\u9879\u9009\u62e9\uff0c\u5b9e\u73b0\u521b\u5efa\u5165\u53e3\u65f6\uff0c\u81ea\u52a8\u542f\u7528\u3010 \u7ea6\u5b9a\u5f0f\u8def\u7531 \u3011\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c\uff1a\n\u276f \u65b0\u5efa\u300c\u5e94\u7528\u5165\u53e3\u300d\n\n#\u586b\u5199\u5165\u53e3\u540d\u79f0\uff1a\nlanding-page\n\n# \u662f\u5426\u9700\u8981\u8c03\u6574\u9ed8\u8ba4\u914d\u7f6e?\n\u276f \u662f\n\n# \u8bf7\u9009\u62e9\u5ba2\u6237\u7aef\u8def\u7531\u65b9\u5f0f\n  \u81ea\u63a7\u8def\u7531\n\u276f \u7ea6\u5b9a\u5f0f\u8def\u7531\n  \u4e0d\u542f\u7528\n")),(0,l.kt)("p",null,"\u5047\u8bbe\u8fd9\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"landing-page")," \u5165\u53e3\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u6709\u5bfc\u822a\u680f\u7684\u843d\u5730\u9875\uff0c\u5305\u542b\u4e24\u4e2a\u5b50\u9875\u9762\uff1a\u4e00\u4e2a\u9996\u9875\u548c\u4e00\u4e2a\u6587\u6863\u9875\uff0c\u6211\u4eec\u7528\u5ba2\u6237\u7aef\u8def\u7531\u7684\u65b9\u5f0f\u6765\u533a\u522b\u8fd9\u4e24\u4e2a\u5b50\u9875\u9762\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u5148\u5206\u522b\u5b9e\u73b0\u8fd9\u4e2a\u5165\u53e3\u4e24\u4e2a\u5b50\u9875\u9762\u7684\u5185\u5bb9\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"src/landing-page/pages/index.tsx")," \u662f\u9996\u9875\uff0c\u5185\u5bb9\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Helmet } from '@modern-js/runtime/head';\n\nconst Index = () => (\n  <>\n    <Helmet>\n      <title>Home</title>\n    </Helmet>\n    <p>\n      Welcome to <a href=\"/contacts\">Contact List</a>!\n    </p>\n  </>\n);\n\nexport default Index;\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"src/landing-page/pages/docs.tsx")," \u662f\u6587\u6863\u9875\uff0c\u5185\u5bb9\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Helmet } from '@modern-js/runtime/head';\n\nconst Docs = () => (\n  <>\n    <Helmet>\n      <title>Docs</title>\n    </Helmet>\n    <p>I am docs</p>\n  </>\n);\n\nexport default Docs;\n")),(0,l.kt)("p",null,"\u6700\u540e\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"src/landing-page/pages/_app.tsx")," \u662f\u4e0b\u5212\u7ebf\u5f00\u5934\u7684\uff0c\u4ee3\u8868\u8fd9\u662f\u3010 \u7ea6\u5b9a\u5f0f\u8def\u7531 \u3011\u4e2d\u4e00\u4e2a\u7279\u6b8a\u7684\u529f\u80fd\u6587\u4ef6\uff0c\u4e3a\u6574\u4e2a\u5165\u53e3\u63d0\u4f9b\u6839\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u7528\u4e8e\u5b9e\u73b0\u5168\u5c40\u5e03\u5c40\u3001\u516c\u5171 UI \u7b49\u3002"),(0,l.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u53ea\u5b9e\u73b0\u4e00\u4e2a\u7b80\u5355\u7684\u5bfc\u822a\u548c\u7ed3\u6784\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { ComponentType } from 'react';\nimport { NavLink } from '@modern-js/runtime/router';\n\nconst App = ({ Component, ...pageProps }: { Component: ComponentType }) => (\n  <div>\n    <h2>Nav:</h2>\n    <ul>\n      <li>\n        <NavLink\n          to=\"/\"\n          exact={true}\n          activeStyle={{\n            color: '#f60',\n          }}>\n          Home\n        </NavLink>\n      </li>\n      <li>\n        <NavLink\n          to=\"/docs\"\n          activeStyle={{\n            color: '#f60',\n          }}>\n          Docs\n        </NavLink>\n      </li>\n    </ul>\n    <h2>Content:</h2>\n    <Component {...pageProps} />\n  </div>\n);\n\nexport default App;\n")),(0,l.kt)("p",null,"\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u8bbf\u95ee ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/landing-page/"),"\uff0c\u53ef\u4ee5\u770b\u5230\u7ed3\u679c\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/08/result.png",alt:"result"})),(0,l.kt)("p",null,"\u70b9\u51fb Nav \u91cc\u7684\u94fe\u63a5\uff0cURL \u53d8\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/landing-page/docs"),"\uff0c\u5185\u5bb9\u4f1a\u53d8\u4e3a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/08/result1.png",alt:"result1"})),(0,l.kt)("p",null,"\u6211\u4eec\u540c\u6837\u53ef\u4ee5\u5f00\u542f/\u5173\u95ed SSR \u9009\u9879\uff08",(0,l.kt)("a",{parentName:"p",href:"/docs/apis/app/config/server/ssr"},"\u914d\u7f6e\u6559\u7a0b"),"\uff09\uff0c\u5e76\u67e5\u770b HTML \u6e90\u7801\u3002\u7ed3\u679c\u548c\u3010 \u81ea\u63a7\u5f0f\u8def\u7531 \u3011\u7684 contacts \u5165\u53e3\u4e00\u6837\u3002"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Modern.js Lint \u89c4\u5219\u96c6\u8981\u6c42 React \u7ec4\u4ef6\u7684\u6587\u4ef6\u540d\u6216\u76ee\u5f55\u540d\u90fd\u7528 Pascal \u547d\u540d\u98ce\u683c\uff0c\u8ddf\u7ec4\u4ef6\u672c\u8eab\u7684\u540d\u5b57\u4fdd\u6301\u4e00\u81f4\uff0c\u9996\u5b57\u6bcd\u5927\u5199\u3002"),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"pages/")," \u91cc\u9762\u7684\u6587\u4ef6\u867d\u7136\u4e5f\u662f React \u7ec4\u4ef6\uff0c\u4f46\u5b83\u4eec\u662f\u57fa\u4e8e\u7ea6\u5b9a\u7528\u4e8e\u6307\u5b9a\u8def\u7531\u7684\u7279\u6b8a\u7ec4\u4ef6\u6587\u4ef6\uff0c\u5bf9\u5e94\u7684\u662f URL \u4e2d\u7684\u8def\u5f84\uff0c\u6240\u4ee5\u8fd9\u91cc\u662f\u4e00\u79cd\u4f8b\u5916\u60c5\u51b5\uff0c\u6587\u4ef6\u540d/\u76ee\u5f55\u540d\u8ddf ",(0,l.kt)("a",{parentName:"p",href:"https://geemus.gitbooks.io/http-api-design/content/en/requests/downcase-paths-and-attributes.html"},"URL \u547d\u540d\u98ce\u683c"),"\u4fdd\u6301\u4e00\u81f4\u66f4\u597d\uff0c\u6700\u597d\u7528 dash \u547d\u540d\u98ce\u683c\uff08\u5168\u5c0f\u5199\uff0c- \u8fde\u5b57\u7b26\u5206\u9694\uff09\u3002"))),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u518d\u5b9e\u73b0\u4e00\u4e2a\u7b80\u5355\u7684\u8bc4\u8bba\u8be6\u60c5\u9875\uff0c\u56e0\u4e3a\u8bc4\u8bba\u4f1a\u6709\u5f88\u591a\u6761\uff0c\u6240\u4ee5\u8bc4\u8bba\u8be6\u60c5\u9875\u7684 URL \u5305\u542b\u52a8\u6001\u90e8\u5206\uff0c\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/landing-page/docs/comments/:commentTitle/")),(0,l.kt)("p",null,"\u5bf9\u4e8e\u50cf ",(0,l.kt)("inlineCode",{parentName:"p"},":commentTitle")," \u8fd9\u6837\u7684\u52a8\u6001\u90e8\u5206\uff0cModern.js \u63d0\u4f9b\u4e86\u4e00\u79cd\u7279\u6b8a\u7684\u6587\u4ef6\u547d\u540d\u65b9\u5f0f\u6765\u5b9e\u73b0\u3002"),(0,l.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u65b0\u5efa\u4ee5\u4e0b\u6587\u4ef6\uff1a"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p src/landing-page/pages/comments/\\[commentTitle\\]\ntouch src/landing-page/pages/comments/\\[commentTitle\\]/index.tsx\n"))),(0,l.kt)(p.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"mkdir -p src/landing-page/pages/comments/[commentTitle]\nni src/landing-page/pages/comments/[commentTitle\\/index.tsx\n")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"landing-page")," \u5165\u53e3\u4e2d\u7684\u6587\u4ef6\u7ed3\u6784\u53d8\u6210\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},".\n\u2514\u2500\u2500 pages/\n    \u251c\u2500\u2500 comments/\n    \u2502   \u2514\u2500\u2500 [commentTitle]/\n    \u2502       \u2514\u2500\u2500 index.tsx\n    \u251c\u2500\u2500 _app.tsx\n    \u251c\u2500\u2500 docs.tsx\n    \u2514\u2500\u2500 index.tsx\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"[commentTitle]")," \u5c06\u4f1a\u88ab Modern.js \u8f6c\u6362\u6210\u52a8\u6001\u8def\u7531\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u9996\u5148\u5b89\u88c5\u6587\u4ef6\u4e2d\u9700\u8981\u7684\u4f9d\u8d56\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add lodash\npnpm add -D @types/lodash\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pages/comments/[commentTitle]/index.tsx")," \u7684\u5185\u5bb9\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Helmet } from '@modern-js/runtime/head';\nimport { Link } from '@modern-js/runtime/router';\nimport _ from 'lodash';\n\nconst Index = ({ match: { params } }: any) => {\n  const title = _.startCase(params.commentTitle);\n  return (\n    <>\n      <Helmet>\n        <title>Comment: {title}</title>\n      </Helmet>\n      <p>\n        <Link to=\"/docs/\">{'< Back'}</Link>\n      </p>\n      <h1>Subject: {title}</h1>\n      <p>Post: I am a comment</p>\n    </>\n  );\n};\n\nexport default Index;\n")),(0,l.kt)("p",null,"\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"docs.tsx"),"\uff0c\u6dfb\u52a0\u8df3\u8f6c\u5230\u8bc4\u8bba\u9875\u7684\u94fe\u63a5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Helmet } from '@modern-js/runtime/head';\nimport { Link } from '@modern-js/runtime/router';\n\nconst Docs = () => (\n  <>\n    <Helmet>\n      <title>Docs</title>\n    </Helmet>\n    <p>I am docs</p>\n    <p>\n      <Link to=\"/comments/i-am-a-comment-title\">[Random comment]</Link>\n    </p>\n  </>\n);\n\nexport default Docs;\n")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"pages/")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"App.tsx")," \u4e00\u6837\uff0c\u5e94\u8be5\u4e13\u6ce8\u4e8e\u8def\u7531\u7684\u7ec4\u7ec7\uff0c\u5177\u4f53\u7684 UI \u5b9e\u73b0\u548c\u4e1a\u52a1\u903b\u8f91\uff0c\u4e00\u65e6\u590d\u6742\u5230\u8981\u62c6\u5206\u6210\u591a\u4e2a\u6587\u4ef6\u7684\u7a0b\u5ea6\uff0c\u5e94\u8be5\u653e\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"pages/")," \u5916\u9762\uff0c\u5728\u540c\u4e00\u4e2a\u5e94\u7528\u5165\u53e3\u76ee\u5f55\u4e2d\uff0c\u7528 ",(0,l.kt)("strong",{parentName:"p"},"feature \u76ee\u5f55"),"\u3001",(0,l.kt)("strong",{parentName:"p"},"role \u76ee\u5f55"),"\u7684\u65b9\u5f0f\u6765\u7ec4\u7ec7\u3002"),(0,l.kt)("p",{parentName:"div"},"\u4f8b\u5982\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"src/landing-page/docs/components/Article/index.tsx")," \u6765\u7ec4\u7ec7\u529f\u80fd\u7279\u6027\u3002"),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"landing-page/docs/")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"landing-page/pages/docs/")," \u4e0d\u540c\uff0c\u524d\u8005\u662f ",(0,l.kt)("strong",{parentName:"p"},"feature \u76ee\u5f55"),"\uff0c\u5c06\u4fee\u6539\u9891\u7387\u4e0d\u540c\u6216\u7531\u4e0d\u540c\u4eba\u8d1f\u8d23\u5f00\u53d1\u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u5c01\u88c5\u5728\u540c\u4e00\u4e2a\u9ed1\u76d2\u91cc\uff0c\u8fd9\u79cd\u76ee\u5f55\u4e0b\u7684\u95ee\u9898\u4e0e\u5177\u4f53\u8def\u7531\u89e3\u8026\u3002"),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"pages/")," \u76ee\u5f55\u91cc\u7684\u7ec4\u4ef6\u6587\u4ef6\uff0c\u8d1f\u8d23\u628a\u8fd9\u4e9b feature \u7ec4\u4ef6\u7ec4\u7ec7\u5230\u4e00\u8d77\uff0c\u901a\u8fc7\u7279\u5b9a\u7684\u8def\u7531\u7ed3\u6784\u63d0\u4f9b\u7ed9\u7528\u6237\u3002"),(0,l.kt)("p",{parentName:"div"},"\u56e0\u6b64 ",(0,l.kt)("inlineCode",{parentName:"p"},"pages/")," \u76ee\u5f55\u91cc\u57fa\u672c\u4e0a\u4e0d\u5e94\u8be5\u6709\u7ec4\u4ef6\u4e4b\u5916\u7684\u6587\u4ef6\uff0c\u4e5f\u4e0d\u5e94\u8be5\u6709\u8fc7\u4e8e\u590d\u6742\u548c\u5177\u4f53\u7684\u5b9e\u73b0\u3002"))),(0,l.kt)("p",null,"\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u8bbf\u95ee ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/landing-page/docs/"),"\uff0c\u53ef\u4ee5\u770b\u5230\u6548\u679c\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/08/result2.png",alt:"result2"})),(0,l.kt)("p",null,"\u70b9\u51fb\u8bc4\u8bba\u94fe\u63a5\uff0c\u8df3\u8f6c\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/landing-page/comments/i-am-a-comment-title"),"\uff0c\u6548\u679c\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/08/result3.png",alt:"result3"})),(0,l.kt)("p",null,"URL \u4e2d\u7684\u52a8\u6001\u90e8\u5206\uff0c\u5728\u4ee3\u7801\u4e2d\u88ab\u8f6c\u6362\u6210\u4e86\u6807\u9898\u5185\u5bb9\uff0c\u4fee\u6539\u6700\u540e\u90e8\u5206 URL \u540e\u91cd\u65b0\u8bbf\u95ee\uff0c\u6807\u9898\u5185\u5bb9\u540c\u6837\u53d1\u751f\u6539\u53d8\u3002"),(0,l.kt)("p",null,"\u672c\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u5b66\u4e60\u4e86\u57fa\u672c\u7684\u3010 \u7ea6\u5b9a\u5f0f\u8def\u7531 \u3011\u7528\u6cd5\uff0c\u9664\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"_app.tsx")," \u5916\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/docs/apis/app/hooks/src/pages#%E9%83%A8%E5%88%86-layout"},(0,l.kt)("inlineCode",{parentName:"a"},"_layout.tsx"))," \u5b9e\u73b0\u8fd9\u4e2a\u8bbf\u95ee\u8def\u5f84\u4e0b\u7684\u516c\u5171 UI\uff0c\u53ef\u4ee5\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/docs/apis/app/hooks/src/pages#404-%E8%B7%AF%E7%94%B1"},(0,l.kt)("inlineCode",{parentName:"a"},"404.tsx"))," \u81ea\u5b9a\u4e49 404 \u9875\u9762\u7b49\u3002"),(0,l.kt)("hr",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,l.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c08/hello-modern-2"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}u.isMDXComponent=!0}}]);