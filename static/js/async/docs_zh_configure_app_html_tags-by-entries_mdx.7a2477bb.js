(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_html_tags-by-entries_mdx"],{88902:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var r,t=s("15169"),i=s("43932"),c=s("9880"),d=s("23169");function a(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre"},(0,d.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"Record<string, ArrayOrNot<HtmlInjectTag | HtmlInjectTagHandler>>"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"用于在多页面的场景下，为不同的页面注入不同的标签。"}),"\n",(0,c.jsxs)(n.p,{children:["整体用法与 ",(0,c.jsx)(n.code,{children:"tags"})," 一致，并且可以使用「入口名称」作为 key ，对各个页面进行单独设置。"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"tagsByEntries"})," 的优先级高于 ",(0,c.jsx)(n.code,{children:"tags"}),"，因此会覆盖 ",(0,c.jsx)(n.code,{children:"tags"})," 中设置的值。"]}),"\n",(0,c.jsxs)(n.h3,{id:"示例",children:["示例",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    tags: [{ tag: 'script', attrs: { src: 'a.js' } }],\n    tagsByEntries: {\n      foo: [{ tag: 'script', attrs: { src: 'b.js' } }],\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.p,{children:["编译后，可以看到页面 ",(0,c.jsx)(n.code,{children:"foo"})," 注入标签："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-html",children:'<script src="b.js"></script>\n'})}),"\n",(0,c.jsx)(n.p,{children:"其他页面则注入了："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-html",children:'<script src="a.js"></script>\n'})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Fhtml%2FtagsByEntries.md"]={toc:[{text:"示例",id:"示例",depth:3}],title:"",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,i._)((0,t._)({},e),{children:(0,c.jsx)(a,(0,t._)({},e))})):a(e)}},12220:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return o}});var r,t=s("15169"),i=s("43932"),c=s("9880"),d=s("23169"),a=s("88902");function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,d.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"htmltagsbyentries",children:["html.tagsByEntries",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmltagsbyentries",children:"#"})]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,c.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-html.html#htmltagsbyentries",target:"_blank",rel:"noopener noreferrer",children:"html.tagsByEntries"}),"。\n"]})})]}),"\n","\n",(0,c.jsx)(a.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fmain-doc%2Fdocs%2Fzh%2Fconfigure%2Fapp%2Fhtml%2Ftags-by-entries.mdx"]={toc:[],title:"html.tagsByEntries",frontmatter:{sidebar_label:"tagsByEntries"}};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,i._)((0,t._)({},e),{children:(0,c.jsx)(l,(0,t._)({},e))})):l(e)}}}]);