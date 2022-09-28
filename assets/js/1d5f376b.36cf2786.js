"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7130],{57522:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(29901);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=l(n),k=r,u=c["".concat(s,".").concat(k)]||c[k]||m[k]||p;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<p;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41011:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>l});var a=n(18249),r=(n(29901),n(57522));const p={sidebar_position:1,title:"\u5b9a\u4e49\u8def\u7531"},i=void 0,o={unversionedId:"guides/features/server-side/web/routes",id:"guides/features/server-side/web/routes",title:"\u5b9a\u4e49\u8def\u7531",description:"Modern.js \u5728\u8fd0\u884c\u65f6\u662f\u4e00\u4e2a Universal App\uff08\u5927\u7edf\u4e00\u5e94\u7528\uff09\u2014\u2014\u2014 \u65e2\u6709\u5ba2\u6237\u7aef\u90e8\u5206\uff0c\u53c8\u6709\u670d\u52a1\u7aef\u90e8\u5206\u3002\u4f46\u662f\u5f00\u53d1\u8005\u5bf9\u670d\u52a1\u7aef\u90e8\u5206\u662f\u65e0\u611f\u77e5\u7684\uff0c\u4e0d\u9700\u8981\u4e13\u95e8\u53bb\u4e3a Server \u90e8\u5206\u7f16\u5199\u4ee3\u7801\uff0c\u53ea\u9700\u8981\u4e13\u6ce8\u4ea7\u54c1\u672c\u8eab\u7684\u4e1a\u52a1\u903b\u8f91\u5f00\u53d1\u5373\u53ef\u3002",source:"@site/docs/guides/features/server-side/web/routes.md",sourceDirName:"guides/features/server-side/web",slug:"/guides/features/server-side/web/routes",permalink:"/docs/guides/features/server-side/web/routes",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5b9a\u4e49\u8def\u7531"},sidebar:"guidesSidebar",previous:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/docs/guides/features/model/faq"},next:{title:"\u4e00\u4f53\u5316 SSG",permalink:"/docs/guides/features/server-side/web/ssg"}},s={},l=[{value:"\u670d\u52a1\u7aef\u8def\u7531",id:"\u670d\u52a1\u7aef\u8def\u7531",level:2},{value:"\u5ba2\u6237\u7aef\u8def\u7531",id:"\u5ba2\u6237\u7aef\u8def\u7531",level:2},{value:"\u81ea\u63a7\u5f0f\u8def\u7531",id:"\u81ea\u63a7\u5f0f\u8def\u7531",level:3},{value:"\u7ea6\u5b9a\u5f0f\u8def\u7531",id:"\u7ea6\u5b9a\u5f0f\u8def\u7531",level:3}],d={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Modern.js \u5728\u8fd0\u884c\u65f6\u662f\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},"Universal App\uff08\u5927\u7edf\u4e00\u5e94\u7528\uff09"),"\u2014\u2014\u2014 \u65e2\u6709\u5ba2\u6237\u7aef\u90e8\u5206\uff0c\u53c8\u6709\u670d\u52a1\u7aef\u90e8\u5206\u3002\u4f46\u662f\u5f00\u53d1\u8005\u5bf9\u670d\u52a1\u7aef\u90e8\u5206\u662f\u65e0\u611f\u77e5\u7684\uff0c\u4e0d\u9700\u8981\u4e13\u95e8\u53bb\u4e3a Server \u90e8\u5206\u7f16\u5199\u4ee3\u7801\uff0c\u53ea\u9700\u8981\u4e13\u6ce8\u4ea7\u54c1\u672c\u8eab\u7684\u4e1a\u52a1\u903b\u8f91\u5f00\u53d1\u5373\u53ef\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528 Modern.js\uff0c\u5f00\u53d1\u8005\u65e0\u9700\u50cf\u4f20\u7edf\u7684\u4ee5\u670d\u52a1\u7aef\u4e3a\u4e2d\u5fc3\u7684\u6846\u67b6\u90a3\u6837\uff0c\u624b\u52a8\u5b9a\u4e49\u8def\u7531\u6620\u5c04\u5173\u7cfb\u3002Modern.js \u4f1a\u81ea\u52a8\u4e3a\u6bcf\u4e00\u4e2a",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/tutorials/c07-app-entry/7.1-intro"},"\u5165\u53e3")," \u751f\u6210\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},"\u670d\u52a1\u7aef\u8def\u7531"),"\u3002\u540c\u65f6\uff0c\u5728\u6bcf\u4e00\u4e2a\u5165\u53e3\u4e0b\uff0c\u5f00\u53d1\u8005\u8fd8\u53ef\u4ee5\u5b9a\u4e49 ",(0,r.kt)("strong",{parentName:"p"},"\u5ba2\u6237\u7aef\u8def\u7531"),"\uff0c\u4f7f\u6bcf\u4e00\u4e2a\u5165\u53e3\u90fd\u6210\u4e3a\u4e00\u4e2a\u72ec\u7acb\u7684\u5355\u9875 Web \u5e94\u7528( SPA )\u3002"),(0,r.kt)("h2",{id:"\u670d\u52a1\u7aef\u8def\u7531"},"\u670d\u52a1\u7aef\u8def\u7531"),(0,r.kt)("p",null,"\u670d\u52a1\u7aef\u8def\u7531\u662f\u7531 Modern.js \u6839\u636e\u5165\u53e3\u4ee5\u53ca\u914d\u7f6e\u751f\u6210\u7684\u8def\u7531\u3002Modern.js \u4f1a\u6839\u636e\u57fa\u4e8e\u6587\u4ef6\u7ea6\u5b9a\u7684",(0,r.kt)("strong",{parentName:"p"},"\u6807\u8bc6"),"\uff0c\u81ea\u52a8\u751f\u6210\u5165\u53e3\u3002Modern.js \u652f\u63013\u79cd",(0,r.kt)("strong",{parentName:"p"},"\u6807\u8bc6"),"\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/apis/app/hooks/src/app"},(0,r.kt)("inlineCode",{parentName:"a"},"App.[tj]sx")," \u6587\u4ef6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/apis/app/hooks/src/pages"},(0,r.kt)("inlineCode",{parentName:"a"},"pages/")," \u76ee\u5f55")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/apis/app/hooks/src/index"},(0,r.kt)("inlineCode",{parentName:"a"},"index.[tj]sx")," \u6587\u4ef6"))),(0,r.kt)("p",null,"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/")," \u76ee\u5f55\u4e0b\u6709",(0,r.kt)("strong",{parentName:"p"},"\u5165\u53e3\u6807\u8bc6"),"\uff0c\u5c31\u8ba4\u4e3a\u8fd9\u4e2a\u5e94\u7528\u662f\u5355\u5165\u53e3\u7684\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"src/")," \u4e0b\u7684\u5176\u4ed6\u6587\u4ef6\u548c\u76ee\u5f55\uff0c\u90fd\u4f1a\u88ab\u89c6\u4e3a\u5165\u53e3\u5185\u90e8\u7684\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"src/")," \u76ee\u5f55\u4e0b\u6ca1\u6709",(0,r.kt)("strong",{parentName:"p"},"\u5165\u53e3\u6807\u8bc6"),"\uff0c\u90a3\u4e48 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/")," \u76ee\u5f55\u7684",(0,r.kt)("strong",{parentName:"p"},"\u4e0b\u4e00\u7ea7"),"\u76ee\u5f55\u91cc\uff0c\u5982\u679c\u6709",(0,r.kt)("strong",{parentName:"p"},"\u5165\u53e3\u6807\u8bc6"),"\uff0c\u8fd9\u4e2a\u76ee\u5f55\u5c31\u4f1a\u88ab\u89c6\u4e3a\u4e00\u4e2a\u5e94\u7528\u5165\u53e3\uff0c\u8fd9\u4e2a\u76ee\u5f55\u4e0b\u7684\u5176\u4ed6\u6587\u4ef6\u548c\u76ee\u5f55\uff0c\u90fd\u4f1a\u88ab\u89c6\u4e3a\u5165\u53e3\u5185\u90e8\u7684\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u4ee5\u4e0b\u76ee\u5f55\u7ed3\u6784\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 src/\n\u2502   \u251c\u2500\u2500 .eslintrc.json\n\u2502   \u251c\u2500\u2500 App.css\n\u2502   \u2514\u2500\u2500 App.tsx\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"src/")," \u76ee\u5f55\u4e0b\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," \u8fd9\u4e2a",(0,r.kt)("strong",{parentName:"p"},"\u5165\u53e3\u6807\u8bc6"),"\uff0c\u5c06\u4f1a\u751f\u6210\u4e00\u4e2a\u5355\u5165\u53e3\u5e94\u7528\uff0c\u5bf9\u5e94\u7684\u670d\u52a1\u7aef\u8def\u7531\u4e3a\u6839\u8def\u5f84 ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),"\u3002"),(0,r.kt)("p",null,"\u800c\u4ee5\u4e0b\u76ee\u5f55\u7ed3\u6784\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 src/\n\u2502   \u251c\u2500\u2500 contacts/\n\u2502   \u2502   \u251c\u2500\u2500 App.css\n\u2502   \u2502   \u2514\u2500\u2500 App.tsx\n\u2502   \u251c\u2500\u2500 landing-page/\n\u2502   \u2502   \u251c\u2500\u2500 App.css\n\u2502   \u2502   \u2514\u2500\u2500 App.tsx\n\u2502   \u2514\u2500\u2500 .eslintrc.json\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"src/contacts/")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"src/landing-page/")," \u76ee\u5f55\u4e0b\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," \u8fd9\u4e2a",(0,r.kt)("strong",{parentName:"p"},"\u5165\u53e3\u6807\u8bc6"),"\uff0c\u5c06\u4f1a\u751f\u6210\u7531\u5165\u53e3\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"contacts")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"landing-page")," \u7ec4\u6210\u7684\u591a\u5165\u53e3\u5e94\u7528\uff0c\u4e24\u4e2a\u5165\u53e3\u5bf9\u5e94\u7684\u670d\u52a1\u7aef\u8def\u7531\u5206\u522b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"/contacts")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"/landing-page"),"\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5f53",(0,r.kt)("strong",{parentName:"p"},"\u5165\u53e3\u540d"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u9879\u76ee\u540d"),"\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u91cc\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"\uff09\u76f8\u540c\u65f6\uff0c\u4f1a\u88ab\u8ba4\u4e3a\u662f\u5e94\u7528\u4e3b\u5165\u53e3\uff0c\u5bf9\u5e94\u7684\u670d\u52a1\u7aef\u8def\u7531\u4e3a\u6839\u8def\u5f84 ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),"\uff0c\u5373\u4e3b\u5165\u53e3\u5bf9\u5e94\u7684\u670d\u52a1\u7aef\u8def\u7531\u4e0d\u9700\u8981\u5305\u542b",(0,r.kt)("strong",{parentName:"p"},"\u5165\u53e3\u540d"),"\u8fd9\u90e8\u5206\u8def\u5f84\u3002"))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u9879\u3010",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/app/config/server/routes"},"server.routes"),"\u3011\u6765\u4fee\u6539\u9ed8\u8ba4\u751f\u6210\u7684\u670d\u52a1\u7aef\u8def\u7531\u3002"))),(0,r.kt)("h2",{id:"\u5ba2\u6237\u7aef\u8def\u7531"},"\u5ba2\u6237\u7aef\u8def\u7531"),(0,r.kt)("p",null,"Modern.js \u7684\u5ba2\u6237\u7aef\u8def\u7531\u57fa\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://reactrouter.com/"},"React Router")," \u5b9e\u73b0\uff0c\u652f\u6301",(0,r.kt)("strong",{parentName:"p"},"\u81ea\u63a7\u5f0f\u8def\u7531"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u7ea6\u5b9a\u5f0f\u8def\u7531"),"\u4e24\u79cd\u5199\u6cd5\u3002"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4f7f\u7528\u5ba2\u6237\u7aef\u8def\u7531\uff0c\u9700\u8981\u5148\u786e\u8ba4 ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/app/config/runtime/state"},(0,r.kt)("inlineCode",{parentName:"a"},"runtime.state"))," \u914d\u7f6e\u5df2\u5f00\u542f\u3002"))),(0,r.kt)("h3",{id:"\u81ea\u63a7\u5f0f\u8def\u7531"},"\u81ea\u63a7\u5f0f\u8def\u7531"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"App.jsx")," \u4f5c\u4e3a",(0,r.kt)("strong",{parentName:"p"},"\u5165\u53e3\u6807\u8bc6"),"\u7684\u5165\u53e3\uff0c\u9700\u8981\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"\u81ea\u63a7\u5f0f\u8def\u7531"),"\u3002\u6b64\u65f6\uff0c\u5f00\u53d1\u4eba\u5458\u9700\u8981\u624b\u52a8\u5f15\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"Route")," \u7b49\u8def\u7531\u7ec4\u4ef6\u5b9a\u4e49\u8def\u7531\uff0c\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Switch, Route } from \'@modern-js/runtime/router\'\n\nexport default () => (\n  <Switch>\n    <Route path="/" exact={true}>\n      <div>Hello Modern.js</div>\n    </Route>\n    <Route path="/info" exact={true}>\n      <div>User info</div>\n    </Route>\n    <Route path="*">\n      <div>404</div>\n    </Route>\n  </Switch>\n)\n')),(0,r.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u5c06\u4f1a\u751f\u6210\u4e24\u6761\u5ba2\u6237\u7aef\u8def\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"/info"),"\uff0c\u5176\u4f59\u6240\u6709\u672a\u5339\u914d\u7684 URL \u90fd\u4f1a\u8fd4\u56de 404\u3002"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u548c\u76f4\u63a5\u4f7f\u7528 React Router \u4e0d\u540c\uff0c\u8fd9\u91cc\u4e0d\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Route")," \u7ec4\u4ef6\u5916\u5305\u88f9 ",(0,r.kt)("inlineCode",{parentName:"p"},"Router")," \u7ec4\u4ef6\uff0c\u56e0\u4e3a Modern.js \u4f1a\u81ea\u52a8\u5728\u6839\u7ec4\u4ef6\u5305\u88f9 ",(0,r.kt)("inlineCode",{parentName:"p"},"Router")," \u7ec4\u4ef6\u3002"))),(0,r.kt)("h3",{id:"\u7ea6\u5b9a\u5f0f\u8def\u7531"},"\u7ea6\u5b9a\u5f0f\u8def\u7531"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"pages/")," \u76ee\u5f55\u4f5c\u4e3a",(0,r.kt)("strong",{parentName:"p"},"\u5165\u53e3\u6807\u8bc6"),"\u7684\u5165\u53e3\uff0c\u5ba2\u6237\u7aef\u8def\u7531\u91c7\u7528\u7684\u662f",(0,r.kt)("strong",{parentName:"p"},"\u7ea6\u5b9a\u5f0f\u8def\u7531"),"\uff1a\u57fa\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"pages/")," \u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u540d\u53ca\u6587\u4ef6\u8def\u5f84\u81ea\u52a8\u751f\u6210\u8def\u7531\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u4e0b\u9762\u7684\u76ee\u5f55\u7ed3\u6784\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 src/\n\u2502\xa0\xa0 \u251c\u2500\u2500 pages/\n\u2502   \u2502   \u251c\u2500\u2500 _app.tsx\n\u2502   \u2502   \u251c\u2500\u2500 docs.tsx\n\u2502   \u2502   \u2514\u2500\u2500 index.tsx\n\u2502\xa0\xa0 \u2514\u2500\u2500 .eslintrc.json\n")),(0,r.kt)("p",null,"\u5c06\u4f1a\u81ea\u52a8\u751f\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs")," \u4e24\u6761\u5ba2\u6237\u7aef\u8def\u7531\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"/")," \u5bf9\u5e94\u6e32\u67d3\u7684\u7ec4\u4ef6\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"index.tsx")," \u9ed8\u8ba4\u5bfc\u51fa\u7684\u7ec4\u4ef6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"/docs")," \u5bf9\u5e94\u6e32\u67d3\u7684\u7ec4\u4ef6\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"docs.tsx")," \u9ed8\u8ba4\u5bfc\u51fa\u7684\u7ec4\u4ef6\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"_app.tsx")," \u662f\u4e0b\u5212\u7ebf\u5f00\u5934\u7684\u6587\u4ef6\uff0c\u4ee3\u8868",(0,r.kt)("strong",{parentName:"p"},"\u7ea6\u5b9a\u5f0f\u8def\u7531"),"\u4e2d\u7684\u4e00\u4e2a\u7279\u6b8a\u6587\u4ef6\uff0c\u4e3a\u6574\u4e2a\u5165\u53e3\u63d0\u4f9b\u6839\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u7528\u4e8e\u5b9e\u73b0\u5168\u5c40\u5e03\u5c40\u3001\u516c\u5171 UI \u7b49\uff0c\u8be6\u7ec6\u4f7f\u7528\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/app/hooks/src/pages#%E5%85%A8%E5%B1%80-layout"},"\u8fd9\u91cc"),"\u3002"),(0,r.kt)("p",null,"\u53c8\u4f8b\u5982\u4ee5\u4e0b\u591a\u5165\u53e3\u7684\u60c5\u51b5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 src/\n\u2502   \u251c\u2500\u2500 contacts/\n\u2502   \u2502   \u2514\u2500\u2500 pages/\n\u2502   \u2502       \u251c\u2500\u2500 _app.tsx\n\u2502   \u2502       \u251c\u2500\u2500 docs.tsx\n\u2502   \u2502       \u2514\u2500\u2500 home.tsx\n\u2502   \u251c\u2500\u2500 landing-page/\n\u2502   \u2502   \u2514\u2500\u2500 pages/\n\u2502   \u2502       \u251c\u2500\u2500 _app.tsx\n\u2502   \u2502       \u251c\u2500\u2500 docs.tsx\n\u2502   \u2502       \u2514\u2500\u2500 index.tsx\n\u2502   \u251c\u2500\u2500 .eslintrc.json\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"contacts")," \u5165\u53e3\u751f\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"/contacts/home"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"/contacts/docs")," \u4e24\u6761\u8def\u7531\uff1b",(0,r.kt)("inlineCode",{parentName:"p"},"landing-page")," \u5165\u53e3\u751f\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"/landing-page"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"/landing-page/docs")," \u4e24\u6761\u8def\u7531\u3002"))}m.isMDXComponent=!0}}]);