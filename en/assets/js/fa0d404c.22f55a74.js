"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[2297],{54852:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),f=a,m=c["".concat(p,".").concat(f)]||c[f]||u[f]||i;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},63090:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var r=n(26260),a=n(23157),i=(n(49231),n(54852)),l=["components"],o={sidebar_position:5},p="addManyFile",s={unversionedId:"apis/generator/plugin/file/addManyFile",id:"apis/generator/plugin/file/addManyFile",isDocsHomePage:!1,title:"addManyFile",description:"\u6279\u91cf\u6dfb\u52a0\u6587\u4ef6\u3002\u7528\u4e8e\u6dfb\u52a0 templates \u76ee\u5f55\u7684\u591a\u4e2a\u6587\u4ef6\u3002",source:"@site/docs/apis/generator/plugin/file/addManyFile.md",sourceDirName:"apis/generator/plugin/file",slug:"/apis/generator/plugin/file/addManyFile",permalink:"/en/docs/apis/generator/plugin/file/addManyFile",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"apisSidebar",previous:{title:"addFile",permalink:"/en/docs/apis/generator/plugin/file/addFile"},next:{title:"updateJSONFile",permalink:"/en/docs/apis/generator/plugin/file/updateJSONFile"}},d=[{value:"type",id:"type",children:[]},{value:"destination",id:"destination",children:[]},{value:"templateFiles",id:"templatefiles",children:[]},{value:"templateBase",id:"templatebase",children:[]},{value:"fileNameFunc",id:"filenamefunc",children:[]},{value:"data",id:"data",children:[]}],u={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"addmanyfile"},"addManyFile"),(0,i.kt)("p",null,"\u6279\u91cf\u6dfb\u52a0\u6587\u4ef6\u3002\u7528\u4e8e\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"templates")," \u76ee\u5f55\u7684\u591a\u4e2a\u6587\u4ef6\u3002"),(0,i.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u7528\u4e8e\u4efb\u4f55\u6587\u4ef6\u7c7b\u578b\uff0c\u5bf9\u4e8e\u4e8c\u8fdb\u5236\u4ee5\u5916\u7684\u6587\u4ef6\u7c7b\u578b\uff0c\u6dfb\u52a0\u6587\u4ef6\u65f6\u4f1a\u8fdb\u884c Handlebars \u6e32\u67d3\u3002"),(0,i.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u5728 onForged \u751f\u547d\u5468\u671f\u7684 api \u53c2\u6570\u4e0a\u83b7\u53d6\u3002"),(0,i.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface AddManyFilesParams {\n  type: FileType;\n  destination: string;\n  templateFiles: string[] | (() => string[]);\n  templateBase?: string;\n  fileNameFunc?: (name: string) => string;\n  data?: Record<string, string>; // template data\n}\nexport type ForgedAPI = {\n  addManyFiles: (params: AddManyFilesParams) => Promise<void>;\n  ...\n};\n")),(0,i.kt)("h2",{id:"type"},"type"),(0,i.kt)("p",null,"\u6587\u4ef6\u7c7b\u578b\uff0c\u5177\u4f53\u53ef\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/generator/plugin/file/introduce#%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B"},"\u6587\u4ef6\u7c7b\u578b"),"\u3002"),(0,i.kt)("h2",{id:"destination"},"destination"),(0,i.kt)("p",null,"\u521b\u5efa\u7684\u76ee\u6807\u6587\u4ef6\u5939\u8def\u5f84\u3002\u7531\u4e8e\u662f\u6279\u91cf\u6dfb\u52a0\u6587\u4ef6\uff0c\u8fd9\u91cc\u586b\u5199\u9700\u8981\u5199\u5165\u7684\u6587\u4ef6\u5939\u8def\u5f84\u5373\u53ef\u3002"),(0,i.kt)("h2",{id:"templatefiles"},"templateFiles"),(0,i.kt)("p",null,"\u6a21\u677f\u6587\u4ef6\u5217\u8868\u3002\n\u8be5\u53c2\u6570\u652f\u6301\u51fd\u6570\u53c2\u6570\uff0c\u4e5f\u652f\u6301",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/globby"},"globby \u6b63\u5219"),"\u3002"),(0,i.kt)("h2",{id:"templatebase"},"templateBase"),(0,i.kt)("p",null,"\u6a21\u677f\u57fa\u7840\u8def\u5f84\u3002\n\u6a21\u677f\u8def\u5f84\u901a\u5e38\u4e3a\u540c\u4e00\u4e2a\u76ee\u5f55\u4e0b\u7684\u6a21\u677f\u6587\u4ef6\uff0c\u5982\u679c\u6e32\u67d3\u7ed3\u679c\u9700\u8981\u53bb\u9664\u6389\u6a21\u677f\u6587\u4ef6\u524d\u7f00\u76ee\u5f55\uff0c\u53ef\u4f7f\u7528\u8be5\u5b57\u6bb5\u3002\n\u6a21\u677f\u6e32\u67d3\u6587\u4ef6\u5185\u5bb9\u5c06\u7b49\u4e8e templateFiles - templateBase"),(0,i.kt)("h2",{id:"filenamefunc"},"fileNameFunc"),(0,i.kt)("p",null,"\u91cd\u547d\u540d\u6587\u4ef6\u51fd\u6570\uff0c\u5728\u8be5\u51fd\u6570\u4e2d\u5c06\u4e00\u6b21\u4f20\u5165\u6e32\u67d3\u7684\u6587\u4ef6\u540d\u79f0\uff0c\u53ef\u5728\u8be5\u51fd\u6570\u4e2d\u8fdb\u884c\u91cd\u547d\u540d\u3002"),(0,i.kt)("h2",{id:"data"},"data"),(0,i.kt)("p",null,"Handlebars \u6e32\u67d3\u6570\u636e\u3002"))}c.isMDXComponent=!0}}]);