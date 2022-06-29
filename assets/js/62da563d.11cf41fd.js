"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[4732],{54852:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(49231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(r),f=a,m=u["".concat(p,".").concat(f)]||u[f]||c[f]||l;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},27752:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=r(86215),a=(r(49231),r(54852));const l={sidebar_position:4},i="addFile",o={unversionedId:"apis/generator/plugin/file/addFile",id:"apis/generator/plugin/file/addFile",title:"addFile",description:"\u6dfb\u52a0\u5355\u4e2a\u6587\u4ef6\u3002\u7528\u4e8e\u6dfb\u52a0 templates \u76ee\u5f55\u7684\u5355\u4e2a\u6a21\u677f\u6587\u4ef6\u6216\u8005\u76f4\u63a5\u4f7f\u7528\u6a21\u677f\u6dfb\u52a0\u5230\u6a21\u677f\u6587\u4ef6\u3002",source:"@site/docs/apis/generator/plugin/file/addFile.md",sourceDirName:"apis/generator/plugin/file",slug:"/apis/generator/plugin/file/addFile",permalink:"/docs/apis/generator/plugin/file/addFile",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"apisSidebar",previous:{title:"addPartial",permalink:"/docs/apis/generator/plugin/file/addPartial"},next:{title:"addManyFile",permalink:"/docs/apis/generator/plugin/file/addManyFile"}},p={},d=[{value:"type",id:"type",level:2},{value:"file",id:"file",level:2},{value:"template",id:"template",level:2},{value:"templateFile",id:"templatefile",level:2},{value:"force",id:"force",level:2},{value:"data",id:"data",level:2}],s={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"addfile"},"addFile"),(0,a.kt)("p",null,"\u6dfb\u52a0\u5355\u4e2a\u6587\u4ef6\u3002\u7528\u4e8e\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"templates")," \u76ee\u5f55\u7684\u5355\u4e2a\u6a21\u677f\u6587\u4ef6\u6216\u8005\u76f4\u63a5\u4f7f\u7528\u6a21\u677f\u6dfb\u52a0\u5230\u6a21\u677f\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u7528\u4e8e\u4efb\u4f55\u6587\u4ef6\u7c7b\u578b\uff0c\u5bf9\u4e8e\u4e8c\u8fdb\u5236\u4ee5\u5916\u7684\u6587\u4ef6\u7c7b\u578b\uff0c\u6dfb\u52a0\u6587\u4ef6\u65f6\u4f1a\u8fdb\u884c Handlebars \u6e32\u67d3\u3002"),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u5728 onForged \u751f\u547d\u5468\u671f\u7684 api \u53c2\u6570\u4e0a\u83b7\u53d6\u3002"),(0,a.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface AddFileParams {\n  type: FileType;\n  file: string;\n  template?: string;\n  templateFile?: string;\n  force?: boolean;\n  data?: Record<string, string>;\n}\nexport type ForgedAPI = {\n  addFile: (params: AddFileParams) => Promise<void>;\n  ...\n};\n")),(0,a.kt)("h2",{id:"type"},"type"),(0,a.kt)("p",null,"\u6587\u4ef6\u7c7b\u578b\uff0c\u5177\u4f53\u53ef\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/generator/plugin/file/introduce#%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B"},"\u6587\u4ef6\u7c7b\u578b"),"\u3002"),(0,a.kt)("h2",{id:"file"},"file"),(0,a.kt)("p",null,"\u521b\u5efa\u7684\u76ee\u6807\u6587\u4ef6\u8def\u5f84\u3002"),(0,a.kt)("h2",{id:"template"},"template"),(0,a.kt)("p",null,"\u6587\u4ef6\u6a21\u677f\uff0c\u914d\u7f6e\u8be5\u5b57\u6bb5\u503c\u53ef\u76f4\u63a5\u7528\u4e8e\u6a21\u677f\u6e32\u67d3\u6587\u4ef6\u3002\u4f18\u5148\u7ea7\u4f4e\u4e8e templateFile\u3002"),(0,a.kt)("h2",{id:"templatefile"},"templateFile"),(0,a.kt)("p",null,"\u6a21\u677f\u6587\u4ef6\uff0c\u7528\u4e8e\u6e32\u67d3\u7684\u6a21\u677f\u6587\u4ef6\u8def\u5f84\uff0c\u5176\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"templates")," \u7684\u76f8\u5bf9\u8def\u5f84\u5373\u53ef\u3002"),(0,a.kt)("h2",{id:"force"},"force"),(0,a.kt)("p",null,"\u662f\u5426\u5f3a\u5236\u8986\u76d6\uff0c\u5f53\u6dfb\u52a0\u7684\u6587\u4ef6\u5df2\u5b58\u5728\u65f6\uff0c\u9ed8\u8ba4\u4f1a\u51b2\u7a81\u62a5\u9519\uff0c\u8bbe\u7f6e\u8be5\u503c\u4e3a true \u65f6\uff0c\u53ef\u5f3a\u5236\u8986\u76d6\u3002"),(0,a.kt)("h2",{id:"data"},"data"),(0,a.kt)("p",null,"Handlebars \u6e32\u67d3\u6570\u636e\u3002"))}c.isMDXComponent=!0}}]);