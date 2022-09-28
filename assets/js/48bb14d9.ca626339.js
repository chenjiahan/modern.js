"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[8914],{57522:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(29901);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},43728:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(18249),a=(t(29901),t(57522));const o={title:"source.enableAsyncEntry",sidebar_label:"enableAsyncEntry",sidebar_position:7},i=void 0,l={unversionedId:"apis/app/config/source/enable-async-entry",id:"apis/app/config/source/enable-async-entry",title:"source.enableAsyncEntry",description:"- \u7c7b\u578b\uff1a boolean",source:"@site/docs/apis/app/config/source/enable-async-entry.md",sourceDirName:"apis/app/config/source",slug:"/apis/app/config/source/enable-async-entry",permalink:"/docs/apis/app/config/source/enable-async-entry",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"source.enableAsyncEntry",sidebar_label:"enableAsyncEntry",sidebar_position:7},sidebar:"apisAppSidebar",previous:{title:"disableDefaultEntries",permalink:"/docs/apis/app/config/source/disable-default-entries"},next:{title:"configDir",permalink:"/docs/apis/app/config/source/config-dir"}},p={},s=[{value:"\u80cc\u666f\u77e5\u8bc6",id:"\u80cc\u666f\u77e5\u8bc6",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("p",null,"\u8be5\u9009\u9879\u7528\u4e8e webpack \u6a21\u5757\u8054\u90a6 (Module Federation\uff09\u573a\u666f\u3002"),(0,a.kt)("p",null,"\u5f00\u542f\u6b64\u9009\u9879\u540e\uff0cModern.js \u4f1a\u901a\u8fc7 Dynamic Import \u6765\u5305\u88f9\u81ea\u52a8\u751f\u6210\u7684\u5165\u53e3\u6587\u4ef6\uff08asynchronous boundary\uff09\uff0c\u4f7f\u9875\u9762\u4ee3\u7801\u53ef\u4ee5\u6d88\u8d39\u6a21\u5757\u8054\u90a6\u751f\u6210\u7684\u8fdc\u7a0b\u6a21\u5757\u3002"),(0,a.kt)("h2",{id:"\u80cc\u666f\u77e5\u8bc6"},"\u80cc\u666f\u77e5\u8bc6"),(0,a.kt)("p",null,"\u5982\u679c\u4e0d\u4e86\u89e3 webpack \u6a21\u5757\u8054\u90a6\uff0c\u8bf7\u5148\u9605\u8bfb Module Federation \u5b98\u65b9\u6587\u6863\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://webpack.docschina.org/concepts/module-federation/"},"\u4e2d\u6587\u6587\u6863")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://webpack.js.org/concepts/module-federation"},"\u82f1\u6587\u6587\u6863"))),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u5f00\u542f\u6b64\u9009\u9879\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  source: {\n    enableAsyncEntry: true,\n  },\n});\n")),(0,a.kt)("p",null,"\u7136\u540e\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," \u547d\u4ee4\uff0c\u53ef\u4ee5\u770b\u5230 Modern.js \u81ea\u52a8\u751f\u6210\u7684\u6587\u4ef6\u53d8\u4e3a\u4ee5\u4e0b\u7ed3\u6784\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"node_modules\n  \u2514\u2500 .modern-js\n     \u2514\u2500 main\n        \u251c\u2500 bootstrap.js  # \u771f\u6b63\u7684\u5165\u53e3\u4ee3\u7801\n        \u251c\u2500 index.js      # \u5f02\u6b65\u5165\u53e3\u6587\u4ef6\uff08asynchronous boundary\uff09\n        \u2514\u2500 index.html\n")),(0,a.kt)("p",null,"\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," \u7684\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import('./bootstrap.js');\n")),(0,a.kt)("p",null,"\u6b64\u65f6\uff0c\u5c31\u53ef\u4ee5\u5728\u5f53\u524d\u9875\u9762\u4e2d\u6d88\u8d39\u4efb\u610f\u7684\u8fdc\u7a0b\u6a21\u5757\u4e86\u3002"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Modern.js \u672a\u5bf9 webpack \u7684 ModuleFederationPlugin \u8fdb\u884c\u5c01\u88c5\uff0c\u8bf7\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/config/tools/webpack-chain"},"tools.webpackChain")," \u81ea\u884c\u914d\u7f6e ModuleFederationPlugin\u3002"))))}u.isMDXComponent=!0}}]);