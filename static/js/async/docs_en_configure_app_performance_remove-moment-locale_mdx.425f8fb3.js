(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_performance_remove-moment-locale_mdx"],{93251:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var o=r("9880"),c=r("23169");function s(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type:"})," ",(0,o.jsx)(n.code,{children:"boolean"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Default:"})," ",(0,o.jsx)(n.code,{children:"false"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Bundler:"})," ",(0,o.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Whether to remove the locales of ",(0,o.jsx)(n.a,{href:"https://momentjs.com/",target:"_blank",rel:"noopener noreferrer",children:"moment.js"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"moment.js"})," contains a lot of locales by default, which will increase the bundle size."]}),"\n",(0,o.jsxs)(n.p,{children:["When ",(0,o.jsx)(n.code,{children:"moment.js"})," is used in the project, it is recommended to enable this option to automatically exclude all locales:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    removeMomentLocale: true,\n  },\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"Once enabled, you can load a specific locale via:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import moment from 'moment';\nimport 'moment/locale/zh-cn';\n\nmoment.locale('zh-cn');\n"})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(s,e)})):s(e)}},9172:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return t},title:function(){return l},toc:function(){return i},default:function(){return d}});var o=r("9880"),c=r("23169"),s=r.ir(r("93251")),t={sidebar_label:"removeMomentLocale"},l="performance.removeMomentLocale",i=[];function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"performanceremovemomentlocale",children:["performance.removeMomentLocale",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performanceremovemomentlocale",children:"#"})]}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive tip",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,o.jsx)(n.div,{className:"modern-directive-content",children:(0,o.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,o.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-performance.html#performanceremovemomentlocale",target:"_blank",rel:"noopener noreferrer",children:"performance.removeMomentLocale"}),".\n"]})})]}),"\n","\n",(0,o.jsx)(s.default,{})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(a,e)})):a(e)}}}]);