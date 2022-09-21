"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[63970],{57522:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(29901);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,s=u["".concat(p,".").concat(b)]||u[b]||m[b]||l;return n?a.createElement(s,o(o({ref:t},c),{},{components:n})):a.createElement(s,o({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(18249),r=(n(29901),n(57522));const l={title:"LoadableLibrary",sidebar_position:4},o=void 0,i={unversionedId:"apis/app/runtime/utility/loadable/loadable-library",id:"apis/app/runtime/utility/loadable/loadable-library",title:"LoadableLibrary",description:"lazy.lib \u548c loadable.lib \u51fd\u6570\u8fd4\u56de LoadableLibrary \u5bf9\u8c61",source:"@site/docs/apis/app/runtime/utility/loadable/loadable-library.md",sourceDirName:"apis/app/runtime/utility/loadable",slug:"/apis/app/runtime/utility/loadable/loadable-library",permalink:"/docs/apis/app/runtime/utility/loadable/loadable-library",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"LoadableLibrary",sidebar_position:4},sidebar:"apisAppSidebar",previous:{title:"LoadableComponent",permalink:"/docs/apis/app/runtime/utility/loadable/loadable-component"},next:{title:"\u4ecb\u7ecd",permalink:"/docs/apis/app/runtime/electron/overview"}},p={},d=[{value:"LoadableLibrary \u7c7b\u578b",id:"loadablelibrary-\u7c7b\u578b",level:2},{value:"fallback",id:"fallback",level:3},{value:"children",id:"children",level:3},{value:"ref",id:"ref",level:3}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"lazy.lib")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"loadable.lib")," \u51fd\u6570\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadableLibrary")," \u5bf9\u8c61"),(0,r.kt)("h2",{id:"loadablelibrary-\u7c7b\u578b"},"LoadableLibrary \u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type LoadableLibrary = React.ComponentType<{\n  fallback?: JSX.Element;\n  children?: (module: Module) => React.ReactNode;\n  ref?: React.Ref<Module>;\n}>\n")),(0,r.kt)("h3",{id:"fallback"},"fallback"),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"JSX.Element")),(0,r.kt)("p",null,"\u7ec4\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"loading")," \u9636\u6bb5\u663e\u793a ",(0,r.kt)("inlineCode",{parentName:"p"},"fallback")," \u5185\u5bb9\u3002"),(0,r.kt)("h3",{id:"children"},"children"),(0,r.kt)("p",null,"\u5e93\u52a0\u8f7d\u5b8c\u6210\u53ea\u6709\u7684\u56de\u8c03\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import loadable from '@modern-js/runtime/loadable'\nconst Moment = loadable.lib(() => import('moment'))\nfunction FromNow({ date }) {\n  return (\n    <div>\n      <Moment fallback={date.toLocaleDateString()}>\n        {({ default: moment }) => moment(date).fromNow()}\n      </Moment>\n    </div>\n  )\n}\n")),(0,r.kt)("h3",{id:"ref"},"ref"),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"React.Ref<Module>")),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," \u62ff\u5230\u6240\u52a0\u8f7d\u5e93\u7684\u5b9e\u4f8b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import loadable from '@modern-js/runtime/loadable'\nconst Moment = loadable.lib(() => import('moment'))\nclass MyComponent {\n  moment = React.createRef()\n  handleClick = () => {\n    if (this.moment.current) {\n      return alert(this.moment.current.default.format('HH:mm'))\n    }\n  }\n  render() {\n    return (\n      <div>\n        <button onClick={this.handleClick}>What time is it?</button>\n        <Moment ref={this.moment} />\n      </div>\n    )\n  }\n}\n")))}m.isMDXComponent=!0}}]);