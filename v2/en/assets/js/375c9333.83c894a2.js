"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5263],{44993:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(18249),a=(n(52983),n(44993));const o={title:"IDE \u4e2d\u7684\u81ea\u52a8\u63d0\u793a"},i=void 0,s={unversionedId:"tutorials/first-app/c03-ide/3.2-hints-in-ide",id:"tutorials/first-app/c03-ide/3.2-hints-in-ide",title:"IDE \u4e2d\u7684\u81ea\u52a8\u63d0\u793a",description:"\u6253\u5f00\u4efb\u610f JS/TS \u6587\u4ef6\uff08\u6bd4\u5982 src/routes/page.tsx\uff09\uff0c\u5e95\u90e8\u72b6\u6001\u680f\u53f3\u4fa7\u5e94\u8be5\u6709\u663e\u793a ESLint\uff0c\u70b9\u51fb\u53ef\u4ee5\u770b\u5230\u8fd0\u884c log\uff0c\u5e94\u8be5\u6ca1\u6709\u62a5\u9519\u3002",source:"@site/../../packages/toolkit/main-doc/zh/tutorials/first-app/c03-ide/3.2-hints-in-ide.md",sourceDirName:"tutorials/first-app/c03-ide",slug:"/tutorials/first-app/c03-ide/3.2-hints-in-ide",permalink:"/v2/en/docs/tutorials/first-app/c03-ide/3.2-hints-in-ide",draft:!1,tags:[],version:"current",frontMatter:{title:"IDE \u4e2d\u7684\u81ea\u52a8\u63d0\u793a"},sidebar:"tutorialsSidebar",previous:{title:"\u200b\u521d\u59cb\u5316 IDE\u200b\u200b\u200b\u200b",permalink:"/v2/en/docs/tutorials/first-app/c03-ide/3.1-setting-up"},next:{title:"IDE \u4e2d\u7684\u81ea\u52a8\u4fee\u590d",permalink:"/v2/en/docs/tutorials/first-app/c03-ide/3.3-autofix-in-ide"}},c={},p=[],l={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6253\u5f00\u4efb\u610f JS/TS \u6587\u4ef6\uff08\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/routes/page.tsx"),"\uff09\uff0c\u5e95\u90e8\u72b6\u6001\u680f\u53f3\u4fa7\u5e94\u8be5\u6709\u663e\u793a ESLint\uff0c\u70b9\u51fb\u53ef\u4ee5\u770b\u5230\u8fd0\u884c log\uff0c\u5e94\u8be5\u6ca1\u6709\u62a5\u9519\u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"page.jsx")," \u4ee3\u7801\u505a\u5982\u4e0b\u4fee\u6539\uff08\u4fee\u6539\u8fc7\u7a0b\u4e2d\u4e0d\u8981\u4fdd\u5b58\uff09\uff0c\u589e\u52a0\u65e0\u7528\u7684\u51fd\u6570\u53c2\u6570\u3001\u53bb\u6389\u6362\u884c\u3001\u5355\u5f15\u53f7\u6539\u6210\u53cc\u5f15\u53f7\u3001\u589e\u52a0\u7f29\u8fdb\uff08\u53ef\u4ee5\u76f4\u63a5\u590d\u5236\u4e0b\u9762\u7684\u4ee3\u7801\u66ff\u6362 App.jsx \u7684\u5185\u5bb9\uff09\uff0c\u6ce8\u610f\u4fee\u6539\u8fc7\u7a0b\u4e2d",(0,a.kt)("strong",{parentName:"p"},"\u5148\u4e0d\u8981\u4fdd\u5b58\u6587\u4ef6"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import \'./index.css\';\n\nconst Index = (a) => (\n      <div className="container-box">\n    <main>\n      <div className=\'logo\'>\n        <img\n          src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ylaelkeh7nuhfnuhf/modernjs-cover.png"\n          width="300"\n          alt="Modern.js Logo"\n        />\n      </div>\n      <p className="description">\n        Get started by editing <code className="code">src/routes/page.tsx</code>\n      </p>\n      <div className="grid">\n        <a href="https://modernjs.dev/docs/start" className="card">\n          <h2>Quick Start</h2>\n        </a>\n        <a href="https://modernjs.dev/docs/guides" className="card">\n          <h2>Handbook</h2>\n        </a>\n        <a href="https://modernjs.dev/docs/apis/app/overview" className="card">\n          <h2>API Reference </h2>\n        </a>\n        <a\n          href="https://modernjs.dev/blog"\n          target="_blank"\n          rel="noopener noreferrer"\n          className="card"\n        >\n          <h2>Blog</h2>\n        </a>\n      </div>\n    </main>\n    <footer className="footer">\n      <a href="https://modernjs.dev" target="_blank" rel="noopener noreferrer">\n        Powered by Modern.js\n      </a>\n    </footer>\n  </div>\n);\n\nexport default Index;\n\n\n')),(0,a.kt)("p",null,"\u53ef\u4ee5\u5728 VS Code \u4e2d\u770b\u5230\u4fee\u6539\u8fc7\u7684\u4ee3\u7801\u51fa\u73b0\u4e86\u95ee\u9898\u63d0\u793a\uff0c\u70b9\u51fb\u5e95\u90e8\u754c\u9762\u4e2d\u7684 Problems \u4e00\u680f\uff0c\u53ef\u4ee5\u770b\u5230\u95ee\u9898\u5217\u8868\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/vsc-with-error.jpeg",alt:"vsc-with-error"})))}d.isMDXComponent=!0}}]);