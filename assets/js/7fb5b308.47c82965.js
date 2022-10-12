"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7915],{57522:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(29901);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2408:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(18249),o=(r(29901),r(57522));const a={sidebar_position:1},i="\u4e3a\u4ec0\u4e48\u9700\u8981\u751f\u6210\u5668\u63d2\u4ef6",p={unversionedId:"guides/features/generator-plugin/abstract",id:"guides/features/generator-plugin/abstract",title:"\u4e3a\u4ec0\u4e48\u9700\u8981\u751f\u6210\u5668\u63d2\u4ef6",description:"Modern.js \u63d0\u4f9b\u4e86\u5e94\u7528(MWA)\u3001\u6a21\u5757\u548c Monorepo \u4e09\u79cd\u5de5\u7a0b\u65b9\u6848\uff0c\u5e76\u901a\u8fc7\u4f7f\u7528 @modern-js/create \u5de5\u5177\u53ef\u4ee5\u521b\u5efa\u4e09\u79cd\u5de5\u7a0b\u65b9\u6848\u7684\u521d\u59cb\u9879\u76ee\u6a21\u677f\uff0c\u521d\u59cb\u9879\u76ee\u6a21\u677f\u4f1a\u63d0\u4f9b\u57fa\u672c\u7684\u4ee3\u7801\u5f00\u53d1\u73af\u5883\u3001\u7b80\u5355\u7684\u793a\u4f8b\u4ee3\u7801\u53ca\u914d\u7f6e\u7b49\u3002",source:"@site/docs/guides/features/generator-plugin/abstract.md",sourceDirName:"guides/features/generator-plugin",slug:"/guides/features/generator-plugin/abstract",permalink:"/docs/guides/features/generator-plugin/abstract",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"\u6269\u5c55\u63d2\u4ef6 Hook",permalink:"/docs/guides/features/framework-plugin/extend"},next:{title:"\u5982\u4f55\u4f7f\u7528\u751f\u6210\u5668\u63d2\u4ef6",permalink:"/docs/guides/features/generator-plugin/use"}},l={},s=[],u={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u751f\u6210\u5668\u63d2\u4ef6"},"\u4e3a\u4ec0\u4e48\u9700\u8981\u751f\u6210\u5668\u63d2\u4ef6"),(0,o.kt)("p",null,"Modern.js \u63d0\u4f9b\u4e86\u5e94\u7528(MWA)\u3001\u6a21\u5757\u548c Monorepo \u4e09\u79cd\u5de5\u7a0b\u65b9\u6848\uff0c\u5e76\u901a\u8fc7\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"@modern-js/create")," \u5de5\u5177\u53ef\u4ee5\u521b\u5efa\u4e09\u79cd\u5de5\u7a0b\u65b9\u6848\u7684\u521d\u59cb\u9879\u76ee\u6a21\u677f\uff0c\u521d\u59cb\u9879\u76ee\u6a21\u677f\u4f1a\u63d0\u4f9b\u57fa\u672c\u7684\u4ee3\u7801\u5f00\u53d1\u73af\u5883\u3001\u7b80\u5355\u7684\u793a\u4f8b\u4ee3\u7801\u53ca\u914d\u7f6e\u7b49\u3002"),(0,o.kt)("p",null,"Modern.js \u63d0\u4f9b\u7684\u521d\u59cb\u5316\u6a21\u677f\u5177\u6709\u901a\u7528\u6027\uff0c\u80fd\u6ee1\u8db3\u4e00\u4e9b\u901a\u7528\u7684\u9879\u76ee\u5f00\u53d1\u9700\u6c42\u3002"),(0,o.kt)("p",null,"\u5f53\u4f60\u6df1\u5ea6\u4f7f\u7528 Modern.js \u65f6\uff0c\u5fc5\u7136\u4f1a\u53d1\u73b0\u6bcf\u6b21\u521b\u5efa\u7684\u9879\u76ee\u90fd\u4f1a\u8fdb\u884c\u4e00\u4e9b\u9488\u5bf9\u81ea\u8eab\u9879\u76ee\u7684\u7279\u5b9a\u7684\u76f8\u4f3c\u6539\u52a8\uff0c\u6bd4\u5982\u4fee\u6539\u793a\u4f8b\u4ee3\u7801\u3001\u589e\u52a0\u4e00\u4e9b\u914d\u7f6e\u3001\u5f00\u542f\u67d0\u4e9b\u529f\u80fd\u7b49\u3002"),(0,o.kt)("p",null,"\u751f\u6210\u5668\u63d2\u4ef6\u53ef\u4ee5\u5e2e\u4f60\u5c06\u8fd9\u4e9b\u9488\u5bf9\u4e2a\u4eba\u6216\u56e2\u961f\u7279\u5b9a\u7684\u6539\u52a8\u6c89\u6dc0\u4e0b\u6765\uff0c\u5728\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"npx @modern-js/create")," \u53ea\u9700\u7b80\u5355\u7684\u5e26\u4e0a ",(0,o.kt)("inlineCode",{parentName:"p"},"--plugin")," \u53c2\u6570\u5373\u53ef\u907f\u514d\u6bcf\u6b21\u521b\u5efa\u5b8c\u9879\u76ee\u90fd\u9700\u91cd\u590d\u6027\u4fee\u6539\u9879\u76ee\u7684\u5de5\u4f5c\u3002"),(0,o.kt)("p",null,"\u751f\u6210\u5668\u63d2\u4ef6\u662f\u5728 Modern.js \u63d0\u4f9b\u7684\u521d\u59cb\u5316\u6a21\u677f\u9879\u76ee\u7684\u57fa\u7840\u4e0a\uff0c\u63d0\u4f9b\u5bf9\u6a21\u677f\u8fdb\u884c\u589e\u52a0\u3001\u5220\u9664\u3001\u4fee\u6539\u7684\u65b9\u6cd5\uff0c\u5e76\u901a\u8fc7\u5feb\u6377\u7684\u65b9\u5f0f\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"modernConfig")," \u914d\u7f6e\u548c\u5f00\u542f\u529f\u80fd\u7b49\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,"\u751f\u6210\u5668\u63d2\u4ef6\u63d0\u4f9b\u4e86\u4e24\u79cd\u5b9a\u5236\u5316\u65b9\u5f0f\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6269\u5c55\u5de5\u7a0b\u65b9\u6848\uff1a\u76f4\u63a5\u5bf9\u9ed8\u8ba4\u63d0\u4f9b\u7684\u4e09\u5927\u5de5\u7a0b\u65b9\u6848\u8fdb\u884c\u5b9a\u5236\u5316")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u521b\u5efa\u5de5\u7a0b\u65b9\u6848\u573a\u666f\uff1a\u57fa\u4e8e\u9ed8\u8ba4\u7684\u4e09\u5927\u5de5\u7a0b\u65b9\u6848\u521b\u5efa\u5bf9\u5e94\u7684\u5de5\u7a0b\u65b9\u6848\u573a\u666f"))),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u5c06\u4f1a\u9010\u6b65\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u548c\u5f00\u53d1\u751f\u6210\u5668\u63d2\u4ef6\u3002"))}c.isMDXComponent=!0}}]);