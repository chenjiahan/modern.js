(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_tools_tailwindcss_mdx"],{85490:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var i,t=s("15169"),c=s("43932"),r=s("9880"),o=s("23169");function a(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",h3:"h3",p:"p"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"toolstailwindcss",children:["tools.tailwindcss",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolstailwindcss",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const tailwind = {\n  content: [\n    './config/html/**/*.html',\n    './config/html/**/*.ejs',\n    './config/html/**/*.hbs',\n    './src/**/*.js',\n    './src/**/*.jsx',\n    './src/**/*.ts',\n    './src/**/*.tsx',\n    './storybook/**/*',\n  ],\n  // Use source.design System config as Tailwind CSS theme config\n  theme: source.designSystem,\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"tools.tailwindcss"}),"'s type is Function, the default tailwindcss config will be passed in as the first parameter, the config object can be modified directly, or a value can be returned as the final result."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default {\n  tools: {\n    tailwindcss(config) {\n      config.content.push('./some-folder/**/*.{js,ts}');\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"tools.tailwindcss"}),"'s type is ",(0,r.jsx)(n.code,{children:"Object"}),", the config will be shallow merged with default config by ",(0,r.jsx)(n.code,{children:"Object.assign"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default {\n  tools: {\n    tailwindcss: {\n      plugins: [\n        require('@tailwindcss/forms'),\n        require('@tailwindcss/aspect-ratio'),\n        require('@tailwindcss/typography'),\n      ],\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"limitations",children:["Limitations",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#limitations",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"theme"})," attribute is not allowed, otherwise the build will fail. Modern.js use ",(0,r.jsx)(n.a,{href:"/configure/app/source/design-system",children:"source.designSystem"})," as the Tailwind CSS Theme configuration."]}),"\n",(0,r.jsxs)(n.p,{children:["Other uses are consistent with ",(0,r.jsx)(n.a,{href:"https://tailwindcss.com/docs/configuration",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS"}),"."]})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fmain-doc%2Fdocs%2Fen%2Fconfigure%2Fapp%2Ftools%2Ftailwindcss.mdx"]={toc:[{text:"Function Type",id:"function-type",depth:3},{text:"Object Type",id:"object-type",depth:3},{text:"Limitations",id:"limitations",depth:3}],title:"tools.tailwindcss",frontmatter:{sidebar_label:"tailwindcss"}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,(0,c._)((0,t._)({},e),{children:(0,r.jsx)(a,(0,t._)({},e))})):a(e)}}}]);