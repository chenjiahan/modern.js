"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[3379],{57522:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var s=n(29901);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=s.createContext({}),l=function(e){var t=s.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return s.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(a,".").concat(f)]||d[f]||u[f]||r;return n?s.createElement(m,i(i({ref:t},c),{},{components:n})):s.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var s=n(18249),o=(n(29901),n(57522));const r={title:"tools.postcss",sidebar_label:"postcss"},i=void 0,p={unversionedId:"apis/app/config/tools/postcss",id:"apis/app/config/tools/postcss",title:"tools.postcss",description:"- \u7c7b\u578b\uff1a Object | Function",source:"@site/docs/apis/app/config/tools/postcss.md",sourceDirName:"apis/app/config/tools",slug:"/apis/app/config/tools/postcss",permalink:"/docs/apis/app/config/tools/postcss",tags:[],version:"current",frontMatter:{title:"tools.postcss",sidebar_label:"postcss"},sidebar:"apisAppSidebar",previous:{title:"minifyCss",permalink:"/docs/apis/app/config/tools/minify-css"},next:{title:"sass",permalink:"/docs/apis/app/config/tools/sass"}},a={},l=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"Object \u7c7b\u578b",id:"object-\u7c7b\u578b",level:3},{value:"Function \u7c7b\u578b",id:"function-\u7c7b\u578b",level:3},{value:"\u5de5\u5177\u51fd\u6570",id:"\u5de5\u5177\u51fd\u6570",level:2},{value:"addPlugins",id:"addplugins",level:3}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"Object | Function")),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u89c1\u4e0b\u65b9\u9ed8\u8ba4\u914d\u7f6e\u3002")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"PostCSS \u9ed8\u8ba4\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const defaultOptions = {\n  postcssOptions: {\n    plugins: [\n      require('postcss-flexbugs-fixes'),\n      require('postcss-custom-properties'),\n      require('postcss-initial'),\n      require('postcss-page-break'),\n      require('postcss-font-variant'),\n      require('postcss-media-minmax'),\n      require('postcss-nesting'),\n      require('autoprefixer')({\n        flexbox: 'no-2009',\n      }),\n    ],\n    // \u53d6\u51b3\u4e8e\u751f\u4ea7\u73af\u5883\uff0c\u4ee5\u53ca\u662f\u5426\u8bbe\u7f6e output.disableSourceMap\n    sourceMap: isEnvProduction && shouldUseSourceMap,\n  },\n};\n"))),(0,o.kt)("p",null,"Modern.js \u9ed8\u8ba4\u96c6\u6210\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"https://postcss.org/"},"PostCSS"),"\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"tools.postcss")," \u5bf9\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/postcss/postcss-loader"},"postcss-loader")," \u8fdb\u884c\u914d\u7f6e\u3002"),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("h3",{id:"object-\u7c7b\u578b"},"Object \u7c7b\u578b"),(0,o.kt)("p",null,"\u5f53\u6b64\u503c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"Object")," \u7c7b\u578b\u65f6\uff0c\u4f1a\u4e0e\u9ed8\u8ba4\u914d\u7f6e\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.assign")," \u5408\u5e76\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  tools: {\n    postcss: {\n      // \u7531\u4e8e\u4f7f\u7528 `Object.assign` \u5408\u5e76\uff0c\u56e0\u6b64\u9ed8\u8ba4\u7684 postcssOptions \u4f1a\u88ab\u8986\u76d6\u3002\n      postcssOptions: {\n        plugins: [require('postcss-px-to-viewport')],\n      },\n    },\n  },\n});\n")),(0,o.kt)("h3",{id:"function-\u7c7b\u578b"},"Function \u7c7b\u578b"),(0,o.kt)("p",null,"\u503c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"Function")," \u7c7b\u578b\u65f6\uff0c\u5185\u90e8\u9ed8\u8ba4\u914d\u7f6e\u4f5c\u4e3a\u7b2c\u4e00\u53c2\u6570\u4f20\u5165\uff0c\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u914d\u7f6e\u5bf9\u8c61\u4e0d\u505a\u8fd4\u56de\uff0c\u4e5f\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\u4f5c\u4e3a\u6700\u7ec8\u7ed3\u679c\uff1b\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"postcss-loader")," \u914d\u7f6e\u7684\u5de5\u5177\u51fd\u6570\u96c6\u5408\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u9700\u8981\u5728\u539f\u6709\u63d2\u4ef6\u7684\u57fa\u7840\u4e0a\u65b0\u589e\u4e00\u4e2a PostCSS \u63d2\u4ef6\uff0c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"postcssOptions.plugins")," \u6570\u7ec4\u4e2d push \u4e00\u4e2a\u65b0\u7684\u63d2\u4ef6\u5373\u53ef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  tools: {\n    postcss: opts => {\n      opts.postcssOptions.plugins.push(require('postcss-px-to-viewport'));\n    },\n  },\n});\n")),(0,o.kt)("p",null,"\u9700\u8981\u7ed9 PostCSS \u63d2\u4ef6\u4f20\u9012\u53c2\u6570\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u51fd\u6570\u53c2\u6570\u7684\u5f62\u5f0f\u8fdb\u884c\u4f20\u5165\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  tools: {\n    postcss: opts => {\n      const viewportPlugin = require('postcss-px-to-viewport')({\n        viewportWidth: 375,\n      });\n      opts.postcssOptions.plugins.push(viewportPlugin);\n    },\n  },\n});\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tools.postcss")," \u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u914d\u7f6e\u5bf9\u8c61\uff0c\u5e76\u5b8c\u5168\u66ff\u6362\u9ed8\u8ba4\u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  tools: {\n    postcss: () => {\n      return {\n        postcssOptions: {\n          plugins: [require('postcss-px-to-viewport')],\n        },\n      };\n    },\n  },\n});\n")),(0,o.kt)("h2",{id:"\u5de5\u5177\u51fd\u6570"},"\u5de5\u5177\u51fd\u6570"),(0,o.kt)("h3",{id:"addplugins"},"addPlugins"),(0,o.kt)("p",null,"\u7528\u4e8e\u6dfb\u52a0\u989d\u5916\u7684 PostCSS \u63d2\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  tools: {\n    postcss: (config, { addPlugins }) => {\n      // \u6dfb\u52a0\u4e00\u4e2a\u63d2\u4ef6\n      addPlugins(require('postcss-preset-env'));\n\n      // \u6279\u91cf\u6dfb\u52a0\u63d2\u4ef6\n      addPlugins([require('postcss-preset-env'), require('postcss-import')]);\n    },\n  },\n});\n")))}u.isMDXComponent=!0}}]);