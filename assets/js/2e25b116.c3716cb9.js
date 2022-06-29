"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7371],{54852:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var r=t(49231);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(t),c=a,g=m["".concat(l,".").concat(c)]||m[c]||s[c]||i;return t?r.createElement(g,p(p({ref:n},u),{},{components:t})):r.createElement(g,p({ref:n},u))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var d=2;d<i;d++)p[d]=t[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},67945:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(86215),a=(t(49231),t(54852));const i={sidebar_position:3},p="\u5982\u4f55\u5f00\u53d1\u751f\u6210\u5668\u63d2\u4ef6",o={unversionedId:"guides/features/generator-plugin/develop",id:"guides/features/generator-plugin/develop",title:"\u5982\u4f55\u5f00\u53d1\u751f\u6210\u5668\u63d2\u4ef6",description:"\u521b\u5efa\u9879\u76ee",source:"@site/docs/guides/features/generator-plugin/develop.md",sourceDirName:"guides/features/generator-plugin",slug:"/guides/features/generator-plugin/develop",permalink:"/docs/guides/features/generator-plugin/develop",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guidesSidebar",previous:{title:"\u5982\u4f55\u4f7f\u7528\u751f\u6210\u5668\u63d2\u4ef6",permalink:"/docs/guides/features/generator-plugin/use"},next:{title:"\u6982\u89c8",permalink:"/docs/guides/usages/overview"}},l={},d=[{value:"\u521b\u5efa\u9879\u76ee",id:"\u521b\u5efa\u9879\u76ee",level:2},{value:"\u5f00\u53d1\u63d2\u4ef6\u903b\u8f91",id:"\u5f00\u53d1\u63d2\u4ef6\u903b\u8f91",level:2},{value:"\u81ea\u5b9a\u4e49\u8f93\u5165",id:"\u81ea\u5b9a\u4e49\u8f93\u5165",level:3},{value:"onForged",id:"onforged",level:3},{value:"afterForged",id:"afterforged",level:3}],u={toc:d};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5982\u4f55\u5f00\u53d1\u751f\u6210\u5668\u63d2\u4ef6"},"\u5982\u4f55\u5f00\u53d1\u751f\u6210\u5668\u63d2\u4ef6"),(0,a.kt)("h2",{id:"\u521b\u5efa\u9879\u76ee"},"\u521b\u5efa\u9879\u76ee"),(0,a.kt)("p",null,"Modern.js \u63d0\u4f9b\u4e86\u521b\u5efa\u751f\u6210\u5668\u63d2\u4ef6\u9879\u76ee\u7684\u751f\u6210\u5668\u63d2\u4ef6\u7528\u4e8e\u521b\u5efa\u9879\u76ee\uff0c\u53ef\u76f4\u63a5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx @modern-js/create plugin --plugin @modern-js/generator-plugin-plugin\n")),(0,a.kt)("p",null,"\u63d2\u4ef6\u7c7b\u578b\u4e0d\u540c\uff0c\u4f1a\u63d0\u95ee\u4e0d\u540c\u7684\u95ee\u9898\uff0c\u53ef\u6839\u636e\u9700\u6c42\u9009\u62e9\u63d2\u4ef6\u7c7b\u578b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6269\u5c55\u7c7b\u578b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u521b\u5efa\u7684\u5de5\u7a0b\u7c7b\u578b \u6a21\u5757\n? \u8bf7\u9009\u62e9\u9879\u76ee\u573a\u666f \u751f\u6210\u5668\u63d2\u4ef6\n? \u63d2\u4ef6\u5305\u540d plugin\n? \u8bf7\u9009\u62e9\u5f00\u53d1\u8bed\u8a00 TS\n? \u8bf7\u9009\u62e9\u5305\u7ba1\u7406\u5de5\u5177 pnpm\n? \u63d2\u4ef6\u7c7b\u578b \u6269\u5c55\n? \u63d2\u4ef6\u57fa\u7840\u7c7b\u578b \u5e94\u7528\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u7c7b\u578b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u521b\u5efa\u7684\u5de5\u7a0b\u7c7b\u578b \u6a21\u5757\n? \u8bf7\u9009\u62e9\u9879\u76ee\u573a\u666f \u751f\u6210\u5668\u63d2\u4ef6\n? \u63d2\u4ef6\u5305\u540d plugin\n? \u8bf7\u9009\u62e9\u5f00\u53d1\u8bed\u8a00 TS\n? \u8bf7\u9009\u62e9\u5305\u7ba1\u7406\u5de5\u5177 pnpm\n? \u63d2\u4ef6\u7c7b\u578b \u81ea\u5b9a\u4e49\n? \u63d2\u4ef6\u5173\u952e\u5b57 mobile-app\n? \u63d2\u4ef6\u5c55\u793a\u540d\u79f0 \u79fb\u52a8\u5e94\u7528\n? \u63d2\u4ef6\u57fa\u7840\u7c7b\u578b \u5e94\u7528\n")),(0,a.kt)("p",null,"\u521b\u5efa\u9879\u76ee\u547d\u4ee4\u6267\u884c\u5b8c\u6210\u540e\uff0c\u4f1a\u5bf9\u5e94\u7684\u751f\u6210\u4e00\u4e2a\u5f00\u53d1\u751f\u6210\u5668\u63d2\u4ef6\u7684\u9879\u76ee\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u4e5f\u4f1a\u6839\u636e\u4f60\u7684\u9009\u62e9\u5bf9\u5e94\u7684\u751f\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," \u4fe1\u606f\u3002"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u751f\u6210\u5668\u63d2\u4ef6\u5f00\u53d1\u53ef\u53c2\u8003 @modern-js/generator-plugin-plugin ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern.js/tree/main/packages/generator/plugins/generator-plugin"},"\u6e90\u7801\u5730\u5740")))),(0,a.kt)("h2",{id:"\u5f00\u53d1\u63d2\u4ef6\u903b\u8f91"},"\u5f00\u53d1\u63d2\u4ef6\u903b\u8f91"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/index.ts")," \u4e2d\u5b8c\u6210\u63d2\u4ef6\u903b\u8f91\u5f00\u53d1\u3002"),(0,a.kt)("p",null,"\u63d2\u4ef6\u9ed8\u8ba4\u5bfc\u51fa\u4e00\u4e2a\u51fd\u6570\uff0c\u51fd\u6570\u53c2\u6570\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"context"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"context")," \u4e0a\u63d0\u4f9b\u4e00\u4e9b\u65b9\u6cd5\u53ef\u76f4\u63a5\u5bf9\u5f53\u524d\u9879\u76ee\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u7b80\u5355\u4ecb\u7ecd\u4e00\u4e0b\u63d0\u4f9b\u7684\u65b9\u6cd5\uff0c\u5b8c\u6574\u7684 API \u5217\u8868\u53ef\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/generator/overview"},"\u751f\u6210\u5668\u63d2\u4ef6API"),"\u3002"),(0,a.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u8f93\u5165"},"\u81ea\u5b9a\u4e49\u8f93\u5165"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"addInputBefore")),(0,a.kt)("p",null,"\u5728\u9ed8\u8ba4\u7684\u8f93\u5165\u524d\u6dfb\u52a0\u8f93\u5165\uff0c\u6bd4\u5982\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"\u9009\u62e9\u5305\u7ba1\u7406\u5de5\u5177"),"\u95ee\u9898\u524d\u6dfb\u52a0\u95ee\u9898\uff0c\u5177\u4f53 Modern.js \u6bcf\u4e2a\u95ee\u9898\u7684\u914d\u7f6e\u53ef\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/generator/config/introduce"},"\u751f\u6210\u5668\u914d\u7f6e"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"context.addInputBefore('packageManager', {\n    key: 'test',\n    name: '\u6d4b\u8bd5\u8f93\u5165',\n    type: 'input'\n})\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"setInput")),(0,a.kt)("p",null,"\u8bbe\u7f6e\u5df2\u7ecf\u5b58\u5728\u95ee\u9898\u7684\u5c5e\u6027"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"context.setInput('test', 'type', 'radio')\ncontext.setInput('test', 'options', [{ key: 'option1', name: '\u9009\u9879\u4e00' }])\n")),(0,a.kt)("h3",{id:"onforged"},"onForged"),(0,a.kt)("p",null,"\u5de5\u7a0b\u65b9\u6848\u7c7b\u578b\u6587\u4ef6\u76f8\u5173\u64cd\u4f5c\u6267\u884c\u5b8c\u6210\u540e\u94a9\u5b50\uff0c\u591a\u4e2a\u6269\u5c55\u4ea7\u68c0\u5c06\u6309\u7167 ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin")," \u53c2\u6570\u987a\u5e8f\u4f9d\u6b21\u6267\u884c\u5176 ",(0,a.kt)("inlineCode",{parentName:"p"},"onForged")," \u51fd\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"onForged")," \u53c2\u6570\u662f\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u51fd\u6570\u53c2\u6570\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"api")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"input"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"api")," \u4e0a\u4f1a\u63d0\u4f9b\u4e00\u4e9b\u6587\u4ef6\u64cd\u4f5c\u76f8\u5173\u7684\u65b9\u6cd5\uff0c\u53ef\u5728\u8be5\u94a9\u5b50\u4e2d\u5bf9\u5f53\u524d\u7684\u6a21\u677f\u6587\u4ef6\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"input")," \u4e3a\u5f53\u524d\u7528\u6237\u8f93\u5165\uff0c\u53ef\u7528\u4e8e\u83b7\u53d6\u7528\u6237\u5f53\u524d\u7684\u8f93\u5165\u4fe1\u606f\u53ca\u914d\u7f6e\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u65b0\u7684\u6a21\u677f\u6587\u4ef6\u65f6\uff0c\u53ef\u76f4\u63a5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"templates")," \u76ee\u5f55\u6dfb\u52a0\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"onForged")," \u51fd\u6570\u4e2d\u53ef\u76f4\u63a5\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"templates")," \u76ee\u5f55\u6587\u4ef6\u8fdb\u884c\u64cd\u4f5c\uff0c\u6bd4\u5982\u4e0b\u65b9\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"addFile")," \u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"templateFile")," \u53c2\u6570\u5c31\u4e3a templates \u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u3002\u8fd9\u91cc\u4e0d\u9700\u8981\u663e\u793a\u7684\u751f\u547d ",(0,a.kt)("inlineCode",{parentName:"p"},"templates"),"\uff0c\u76f4\u63a5\u5199\u5176\u4e0b\u65b9\u8def\u5f84\u5373\u53ef\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"onForged")," \u4e2d\u652f\u6301\u7684 API \u51fd\u6570\u4e5f\u53ef\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/generator/overview"},"\u751f\u6210\u5668\u63d2\u4ef6API"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"context.onForged(async (api: ForgedAPI, input: Record<string, unknown>) => {\n    const { language } = input;\n    api.addFile({\n        type: FileType.Text,\n        file: `src/index.${language as string}`,\n        templateFile: `index.${language as string}.handlebars`,\n        force: true,\n    });\n})\n")),(0,a.kt)("h3",{id:"afterforged"},"afterForged"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"onForged")," \u51fd\u6570\u6267\u884c\u5b8c\u6210\u540e\u94a9\u5b50\uff0c\u8fd9\u91cc\u4e3b\u8981\u53ef\u8fdb\u884c\u5b89\u88c5\u4f9d\u8d56\uff0cGit \u64cd\u4f5c\u7b49\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u7684\u5de5\u7a0b\u65b9\u6848\u662f\u57fa\u4e8e Modern.js \u63d0\u4f9b\u7684\u4e09\u79cd\u5de5\u7a0b\u65b9\u6848\u8fdb\u884c\u7684\uff0c\u8fd9\u4e2a\u94a9\u5b50\u51fd\u6570\u662f\u53ef\u4ee5\u4e0d\u9700\u8981\u7684\u3002\u9ed8\u8ba4\u7684\u5de5\u7a0b\u65b9\u6848\u4e2d\u4f1a\u81ea\u52a8\u5305\u542b\u5b89\u88c5\u4f9d\u8d56\u3001\u63d0\u4ea4\u4ee3\u7801\u903b\u8f91\u3002"),(0,a.kt)("p",null,"\u751f\u6210\u5668\u63d2\u4ef6\u8fd8\u652f\u6301\u4e86\u4e00\u79cd\u81ea\u5b9a\u4e49\u7684 base \u7c7b\u578b\uff0c\u8fd9\u79cd\u7c7b\u578b\u53ea\u63d0\u4f9b\u4e86\u5c11\u91cf\u7684\u5f00\u53d1\u5c42\u9762\u7684\u6700\u4f73\u5b9e\u8df5\u7684\u4ee3\u7801\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},".editorConfig")," \u7b49\u6587\u4ef6\uff0c\u8fd9\u65f6\u5219\u9700\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"afterForged")," \u51fd\u6570\u4e2d\u624b\u52a8\u8865\u5145\u5b89\u88c5\u4f9d\u8d56\u548c git \u64cd\u4f5c\u903b\u8f91\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"afterForged")," \u53c2\u6570\u4e5f\u662f\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u51fd\u6570\u53c2\u6570\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"api")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"input"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"api")," \u4e0a\u4f1a\u63d0\u4f9b\u4e00\u4e9b npm\u3001Git \u7b49\u65b9\u6cd5\uff0c\u53ef\u5728\u8be5\u94a9\u5b50\u4e2d\u8fdb\u884c\u5b89\u88c5\u4f9d\u8d56\uff0cGit \u64cd\u4f5c\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"input")," \u4e3a\u5f53\u524d\u7528\u6237\u8f93\u5165\uff0c\u53ef\u7528\u4e8e\u83b7\u53d6\u7528\u6237\u5f53\u524d\u7684\u8f93\u5165\u4fe1\u606f\u53ca\u914d\u7f6e\u4fe1\u606f\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"afterForged")," \u4e2d\u652f\u6301\u7684 API \u51fd\u6570\u4e5f\u53ef\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/generator/overview"},"\u751f\u6210\u5668\u63d2\u4ef6API"),"\u3002"))}s.isMDXComponent=!0}}]);