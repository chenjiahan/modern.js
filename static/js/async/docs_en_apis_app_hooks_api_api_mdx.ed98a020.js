(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_hooks_api_api_mdx"],{9451:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return d},title:function(){return r},toc:function(){return c},default:function(){return l}});var s=i("9880"),t=i("23169"),d={title:"**/*.[tj]s",sidebar_position:1},r="**/*.[tj]s",c=[{text:"Routing File Convention",depth:2,id:"routing-file-convention"},{text:"Default Routing",depth:3,id:"default-routing"},{text:"Nested Routing",depth:3,id:"nested-routing"},{text:"Dynamic Routing",depth:3,id:"dynamic-routing"},{text:"Allow List",depth:3,id:"allow-list"},{text:"Function Definition",depth:2,id:"function-definition"}];function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",h2:"h2",h3:"h3",ul:"ul",li:"li",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"**/*[tj]s",children:["**/*.[tj]s",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#**/*[tj]s",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Files that declare API routes in the ",(0,s.jsx)(n.a,{href:"/guides/advanced-features/bff/type#function-mode",children:"BFF Function Mode"}),". Except for some ",(0,s.jsx)(n.a,{href:"/apis/app/hooks/api/api#allow-list",children:"convention files"}),", files in the ",(0,s.jsx)(n.code,{children:"api"})," directory will be registered as the routes."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["Using the ",(0,s.jsx)(n.code,{children:"api"})," directory requires enabling the BFF feature, and you need to run the ",(0,s.jsx)(n.code,{children:"new"}),' command in the project to enable the "BFF" feature.']}),"\n",(0,s.jsxs)(n.p,{children:["This file supports using the ",(0,s.jsx)(n.code,{children:"js"})," or ",(0,s.jsx)(n.code,{children:"ts"})," language, but you must use ",(0,s.jsx)(n.code,{children:"esm"})," syntax to export functions."]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"routing-file-convention",children:["Routing File Convention",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#routing-file-convention",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"default-routing",children:["Default Routing",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default-routing",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The routing system will map files named ",(0,s.jsx)(n.code,{children:"index"})," to the previous directory."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"api/index.ts"})," -> ",(0,s.jsx)(n.code,{children:"$BASENAME/"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"api/user/index.ts"})," -> ",(0,s.jsx)(n.code,{children:"$BASENAME/user"})]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"nested-routing",children:["Nested Routing",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#nested-routing",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"The routing system also supports parsing nested files. If you create a nested folder structure, the files will still automatically resolve routes in the same way."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"api/hello.ts"})," -> ",(0,s.jsx)(n.code,{children:"$BASENAME/hello"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"api/user/list.ts"})," -> ",(0,s.jsx)(n.code,{children:"$BASENAME/user/list"})]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"dynamic-routing",children:["Dynamic Routing",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dynamic-routing",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The routing system supports generating dynamic routes through file directories named with ",(0,s.jsx)(n.code,{children:"[]"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"api/user/[username]/info.ts"})," -> ",(0,s.jsx)(n.code,{children:"$BASENAME/user/:username/info"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"api/user/[username]/delete.ts"})," -> ",(0,s.jsx)(n.code,{children:"$BASENAME/user/:username/delete"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"api/article/[id]/info.ts"})," -> ",(0,s.jsx)(n.code,{children:"$BASENAME/article/:id/info"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"$BASENAME"})," can be configured in ",(0,s.jsx)(n.code,{children:"modern.config.js"}),", and the default value is ",(0,s.jsx)(n.code,{children:"/api"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"allow-list",children:["Allow List",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#allow-list",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["By default, all files in the ",(0,s.jsx)(n.code,{children:"api"})," directory will be parsed as BFF function files, but we also set a white list for these files that are not parsed:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Files whose names start with ",(0,s.jsx)(n.code,{children:"_"}),". For example: ",(0,s.jsx)(n.code,{children:"_utils.ts"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["All files in folders whose names start with ",(0,s.jsx)(n.code,{children:"_"}),". For example: ",(0,s.jsx)(n.code,{children:"_utils/index.ts"}),", ",(0,s.jsx)(n.code,{children:"_utils/cp.ts"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Test files. For example: ",(0,s.jsx)(n.code,{children:"foo.test.ts"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["TypeScript type files. For example: ",(0,s.jsx)(n.code,{children:"hello.d.ts"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Files under ",(0,s.jsx)(n.code,{children:"node_modules"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"function-definition",children:["Function Definition",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-definition",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"In addition to the routing rules above, there are also conventions for function definitions and exports in the code."}),"\n",(0,s.jsx)(n.p,{children:"Functions are exported by name, and the name of the exported function is the HTTP method accepted by the corresponding interface, that is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export const get = async () => {\n  return {\n    name: 'Modern.js',\n    desc: 'Modern web Solutions',\n  };\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By exporting functions in this way, you will get a ",(0,s.jsx)(n.code,{children:"GET"})," interface."]}),"\n",(0,s.jsxs)(n.p,{children:["The application project supports 9 Method definitions, namely: ",(0,s.jsx)(n.code,{children:"GET"}),", ",(0,s.jsx)(n.code,{children:"POST"}),", ",(0,s.jsx)(n.code,{children:"PUT"}),", ",(0,s.jsx)(n.code,{children:"DELETE"}),", ",(0,s.jsx)(n.code,{children:"CONNECT"}),", ",(0,s.jsx)(n.code,{children:"TRACE"}),", ",(0,s.jsx)(n.code,{children:"PATCH"}),", ",(0,s.jsx)(n.code,{children:"OPTION"}),", ",(0,s.jsx)(n.code,{children:"HEAD"}),", that is, these Methods can be used as the names of the exported functions."]}),"\n",(0,s.jsxs)(n.p,{children:["The name is case-insensitive, that is, if it is ",(0,s.jsx)(n.code,{children:"GET"}),", it can be written as ",(0,s.jsx)(n.code,{children:"get"}),", ",(0,s.jsx)(n.code,{children:"Get"}),", ",(0,s.jsx)(n.code,{children:"GEt"}),", ",(0,s.jsx)(n.code,{children:"GET"}),", all of which can be accurately recognized. The default export, that is, ",(0,s.jsx)(n.code,{children:"export default xxx"}),", will be mapped to ",(0,s.jsx)(n.code,{children:"Get"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Because ",(0,s.jsx)(n.code,{children:"delete"})," is a keyword in JavaScript, you can use ",(0,s.jsx)(n.code,{children:"del"})," or ",(0,s.jsx)(n.code,{children:"DELETE"})," instead."]}),"\n",(0,s.jsx)(n.p,{children:"Multiple functions with different Methods can be defined in one file, but if multiple functions with the same Method are defined, only the first one will take effect."}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsx)(n.p,{children:"It should be noted that the defined functions should all be asynchronous, which is related to the type when calling the function."}),"\n"]})]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);