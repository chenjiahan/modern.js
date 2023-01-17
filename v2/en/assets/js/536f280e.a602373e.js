"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9221,5743],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,p(p({ref:t},c),{},{components:n})):r.createElement(f,p({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(18249),o=(n(52983),n(44993));const a={},p=void 0,i={unversionedId:"components/global-proxy-config",id:"components/global-proxy-config",title:"global-proxy-config",description:"- Type: string | Object",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/components/global-proxy-config.md",sourceDirName:"components",slug:"/components/global-proxy-config",permalink:"/v2/en/docs/components/global-proxy-config",draft:!1,tags:[],version:"current",frontMatter:{}},l={},s=[{value:"Object",id:"object",level:3},{value:"String",id:"string",level:3}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string | Object")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"null"))),(0,o.kt)("p",null,"When this option is configured, the development environment will start a global proxy, similar to ",(0,o.kt)("a",{parentName:"p",href:"https://www.telerik.com/fiddler"},"Fiddler"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.charlesproxy.com/"},"Charles")," and other web proxy debugging tools, which can be used to view, modify HTTP/HTTPS requests, responses, and can also be used as a proxy server."),(0,o.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Using this option requires advance installation ",(0,o.kt)("inlineCode",{parentName:"p"},"@modern-js/plugin-proxy"),"\u3002")),(0,o.kt)("h3",{id:"object"},"Object"),(0,o.kt)("p",null,"Using this option requires that the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"Object")," be installed in advance, the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," of the object corresponds to the matching ",(0,o.kt)("inlineCode",{parentName:"p"},"pattern"),", and the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," of the object corresponds to the matching ",(0,o.kt)("inlineCode",{parentName:"p"},"target"),"."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  dev: {\n    proxy: {\n      'https://www.baidu.com': 'https://google.com.hk',\n      //\u53ef\u4ee5\u901a\u8fc7 file \u534f\u8bae\u76f4\u63a5\u8fd4\u56de\u9759\u6001\u6587\u4ef6\u3002\n      'https://example.com/api': 'file://./data.json',\n    },\n  },\n});\n")),(0,o.kt)("h3",{id:"string"},"String"),(0,o.kt)("p",null,"When the value is ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", it can be used to specify a separate proxy file, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  dev: {\n    proxy: './proxy.js',\n  },\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="proxy.js"',title:'"proxy.js"'},"module.exports = {\n  name: 'my-app',\n  rules: `\n    ^example.com:8080/api/***   http://localhost:3001/api/$\n  `,\n};\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Modern.js global proxy implementation is based on ",(0,o.kt)("a",{parentName:"p",href:"https://wproxy.org/whistle/"},"whistle"),", for more matching patterns, please refer to: ",(0,o.kt)("a",{parentName:"p",href:"https://wproxy.org/whistle/pattern.html"},"Matching Patterns"))),(0,o.kt)("p",null,"Execute ",(0,o.kt)("inlineCode",{parentName:"p"},"dev"),", when the prompt is as follows, the proxy server starts successfully:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  App running at:\n\n  Local:    http://localhost:8080/\n  Network:  http://192.168.0.1:8080/\n\n\u2139  info      Starting the proxy server.....\n\u2714  success   Proxy Server start on localhost:8899\n")),(0,o.kt)("p",null,"Access the ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8899")," to view the Network and configure proxy rules on the UI interface:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/dev-proxy.png",alt:"proxy UI"})),(0,o.kt)("admonition",{title:"Caution",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The https agent automatically installs the certificate to obtain root privileges. Please enter the password as prompted. ",(0,o.kt)("strong",{parentName:"p"}," The password is only used when the certificate is trusted and will not be leaked or used for other links "),".")))}d.isMDXComponent=!0},64156:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var r=n(18249),o=(n(52983),n(44993)),a=n(586);const p={sidebar_label:"proxy"},i="dev.proxy",l={unversionedId:"configure/app/dev/proxy",id:"configure/app/dev/proxy",title:"dev.proxy",description:"",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/dev/proxy.md",sourceDirName:"configure/app/dev",slug:"/configure/app/dev/proxy",permalink:"/v2/en/docs/configure/app/dev/proxy",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"proxy"},sidebar:"configsAppSidebar",previous:{title:"progressBar",permalink:"/v2/en/docs/configure/app/dev/progress-bar"},next:{title:"startUrl",permalink:"/v2/en/docs/configure/app/dev/start-url"}},s={},c=[],d={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"devproxy"},"dev.proxy"),(0,o.kt)(a.default,{mdxType:"GlobalProxyConfig"}))}u.isMDXComponent=!0}}]);