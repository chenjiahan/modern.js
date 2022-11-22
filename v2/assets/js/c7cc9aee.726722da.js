"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5319],{44993:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(18249),o=(n(52983),n(44993));const a={sidebar_label:"proxy"},p="dev.proxy",i={unversionedId:"configure/app/dev/proxy",id:"configure/app/dev/proxy",title:"dev.proxy",description:"* \u7c7b\u578b\uff1a string | Object",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/dev/proxy.md",sourceDirName:"configure/app/dev",slug:"/configure/app/dev/proxy",permalink:"/v2/docs/configure/app/dev/proxy",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"proxy"},sidebar:"configsAppSidebar",previous:{title:"progressBar",permalink:"/v2/docs/configure/app/dev/progress-bar"},next:{title:"startUrl",permalink:"/v2/docs/configure/app/dev/start-url"}},l={},c=[],s={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"devproxy"},"dev.proxy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"string | Object")),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"null"))),(0,o.kt)("p",null,"\u914d\u7f6e\u8be5\u9009\u9879\u540e\uff0c\u5f00\u53d1\u73af\u5883\u65f6\u4f1a\u542f\u52a8\u5168\u5c40\u4ee3\u7406\uff0c\u7c7b\u4f3c ",(0,o.kt)("a",{parentName:"p",href:"https://www.telerik.com/fiddler"},"Fiddler"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.charlesproxy.com/"},"Charles")," \u7b49 web \u4ee3\u7406\u8c03\u8bd5\u5de5\u5177\uff0c\u53ef\u4ee5\u7528\u6765\u67e5\u770b\u3001\u4fee\u6539 HTTP/HTTPS \u8bf7\u6c42\u3001\u54cd\u5e94\u3001\u4e5f\u53ef\u4ee5\u7528\u4f5c\u4ee3\u7406\u670d\u52a1\u5668\u3002"),(0,o.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u4f7f\u7528\u8be5\u9009\u9879\u9700\u8981\u63d0\u524d\u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"p"},"@modern-js/plugin-proxy"),"\u3002")),(0,o.kt)("p",null,"\u503c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"Object")," \u65f6\uff0c\u5bf9\u8c61\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," \u5bf9\u5e94\u5339\u914d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"pattern"),"\uff0c\u5bf9\u8c61\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," \u5bf9\u5e94\u5339\u914d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"target"),"\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  dev: {\n    proxy: {\n      'https://www.baidu.com': 'https://google.com.hk',\n      //\u53ef\u4ee5\u901a\u8fc7 file \u534f\u8bae\u76f4\u63a5\u8fd4\u56de\u9759\u6001\u6587\u4ef6\u3002\n      'https://example.com/api': 'file://./data.json',\n    }\n  }\n});\n")),(0,o.kt)("p",null,"\u503c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," \u65f6\uff0c \u53ef\u4ee5\u7528\u6765\u6307\u5b9a\u5355\u72ec\u7684\u4ee3\u7406\u6587\u4ef6\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  dev: {\n    proxy: './proxy.js',\n  },\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="proxy.js"',title:'"proxy.js"'},"module.exports = {\n  name: 'my-app',\n  rules: `\n    ^example.com:8080/api/***   http://localhost:3001/api/$\n  `,\n};\n")),(0,o.kt)("admonition",{title:"\u6ce8",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Modern.js \u5168\u5c40\u4ee3\u7406\u5b9e\u73b0\u5e95\u5c42\u57fa\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"https://wproxy.org/whistle/"},"whistle"),", \u66f4\u591a\u5339\u914d\u6a21\u5f0f\u8bf7\u53c2\u8003: ",(0,o.kt)("a",{parentName:"p",href:"https://wproxy.org/whistle/pattern.html"},"\u5339\u914d\u6a21\u5f0f"))),(0,o.kt)("p",null,"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"dev"),", \u63d0\u793a\u5982\u4e0b\u65f6\uff0c\u5373\u4ee3\u7406\u670d\u52a1\u5668\u542f\u52a8\u6210\u529f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  App running at:\n\n  Local:    http://localhost:8080/\n  Network:  http://192.168.0.1:8080/\n\n\u2139  info      Starting the proxy server.....\n\u2714  success   Proxy Server start on localhost:8899\n")),(0,o.kt)("p",null,"\u8bbf\u95ee ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8899"),", \u53ef\u4ee5\u5728 UI \u754c\u9762\u4e0a\u67e5\u770b Network \u4ee5\u53ca\u914d\u7f6e\u4ee3\u7406\u89c4\u5219\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/dev-proxy.png",alt:"proxy ui \u754c\u9762"})),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"https \u4ee3\u7406\u81ea\u52a8\u5b89\u88c5\u8bc1\u4e66\u9700\u8981\u83b7\u53d6 root \u6743\u9650, \u8bf7\u6839\u636e\u63d0\u793a\u8f93\u5165\u5bc6\u7801\u5373\u53ef\u3002",(0,o.kt)("strong",{parentName:"p"},"\u5bc6\u7801\u4ec5\u5728\u4fe1\u4efb\u8bc1\u4e66\u65f6\u4f7f\u7528\uff0c\u4e0d\u4f1a\u6cc4\u6f0f\u6216\u8005\u7528\u4e8e\u5176\u4ed6\u73af\u8282"),"\u3002")))}m.isMDXComponent=!0}}]);