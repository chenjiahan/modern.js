(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_guide_optimization_inline-assets_md"],{74158:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d}});var t,s=i("15169"),r=i("43932"),l=i("9880"),a=i("23169");function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",div:"div"},(0,a.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"inline-static-assets",children:["Inline Static Assets",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#inline-static-assets",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"Inline static assets refer to the practice of including the content of a static asset directly in a HTML or JS file, instead of linking to an external file. This can improve the performance of a website by reducing the number of HTTP requests that the browser has to make to load the page."}),"\n",(0,l.jsx)(n.p,{children:"However, static resource inlining also has some disadvantages, such as increasing the size of a single file, which may lead to slower loading. Therefore, in the actual scenario, it is necessary to decide whether to use static resource inlining according to the specific situation."}),"\n",(0,l.jsx)(n.p,{children:"Builder will automatically inline static assets that are less than 10KB, but sometimes you may need to manually control assets to force them to be inlined or not, and this document explains how to precisely control the inlining behavior of static assets."}),"\n",(0,l.jsxs)(n.h2,{id:"automatic-inlining",children:["Automatic Inlining",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#automatic-inlining",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"By default, Builder will inline assets when the file size of is less than a threshold (the default is 10KB). When inlined, the asset will be converted to a Base64 encoded string and will no longer send a separate HTTP request. When the file size is greater than this threshold, it is loaded as a separate file with a separate HTTP request."}),"\n",(0,l.jsxs)(n.p,{children:["The threshold can be modified with the ",(0,l.jsx)(n.a,{href:"/en/api/config-output#outputdataurilimit",children:"output.dataUriLimit"})," config. For example, set the threshold of images to 5000 Bytes, and set media assets not to be inlined:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    dataUriLimit: {\n      image: 5000,\n      media: 0,\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"force-inlining",children:["Force Inlining",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#force-inlining",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["You can force an asset to be inlined by adding the ",(0,l.jsx)(n.code,{children:"inline"})," query when importing the asset, regardless of whether the asset's size is smaller than the size threshold."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"import React from 'react';\nimport img from '. /foo.png?inline';\n\nexport default function Foo() {\n  return <img src={img} />;\n}\n"})}),"\n",(0,l.jsxs)(n.p,{children:["In the above example, the ",(0,l.jsx)(n.code,{children:"foo.png"})," image will always be inlined, regardless of whether the size of the image is larger than the threshold."]}),"\n",(0,l.jsxs)(n.p,{children:["In addition to the ",(0,l.jsx)(n.code,{children:"inline"})," query, you can also use the ",(0,l.jsx)(n.code,{children:"__inline"})," query to force inlining of the asset:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"import img from '. /foo.png?__inline';\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"referenced-from-css-file",children:["Referenced from CSS file",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#referenced-from-css-file",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["When you reference a static asset in your CSS file, you can also force inline the asset with the ",(0,l.jsx)(n.code,{children:"inline"})," or ",(0,l.jsx)(n.code,{children:"__inline"})," queries."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-css",children:".foo {\n  background-image: url('. /icon.png?inline');\n}\n"})}),"\n",(0,l.jsxs)(n.div,{className:"modern-directive tip",children:[(0,l.jsx)(n.div,{className:"modern-directive-title",children:"Do you really need to force inlining?"}),(0,l.jsx)(n.div,{className:"modern-directive-content",children:(0,l.jsx)(n.p,{children:"Inline large assets will significantly increase the first paint time or first contentful paint time of a page, which will hurt user experience. And when you inline a static asset multiple times into a CSS file, the base64 content will be repeatedly injected, causing the bundle size to grow . Please use forced inlining with caution."})})]}),"\n",(0,l.jsxs)(n.h2,{id:"force-no-inlining",children:["Force no inlining",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#force-no-inlining",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["When you want to always treat some assets as separate files, no matter how small the asset is, you can add the ",(0,l.jsx)(n.code,{children:"url"})," query to force the asset not to be inlined."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"import React from 'react';\nimport img from '. /foo.png?url';\n\nexport default function Foo() {\n  return <img src={img} />;\n}\n"})}),"\n",(0,l.jsxs)(n.p,{children:["In the above example, the ",(0,l.jsx)(n.code,{children:"foo.png"})," image will always be loaded as a separate file, even if the size of the image is smaller than the threshold."]}),"\n",(0,l.jsxs)(n.p,{children:["In addition to the ",(0,l.jsx)(n.code,{children:"url"})," query, you can also use the ",(0,l.jsx)(n.code,{children:"__inline=false"})," query to force the asset not to be inlined:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"import img from '. /foo.png?__inline=false';\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"referenced-from-css-file-1",children:["Referenced from CSS file",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#referenced-from-css-file-1",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["When you reference a static asset in your CSS file, you can also force the asset not to be inlined with ",(0,l.jsx)(n.code,{children:"url"})," or ",(0,l.jsx)(n.code,{children:"__inline=false"})," queries."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-css",children:".foo {\n  background-image: url('. /icon.png?url');\n}\n"})}),"\n",(0,l.jsxs)(n.div,{className:"modern-directive tip",children:[(0,l.jsx)(n.div,{className:"modern-directive-title",children:"Do you really need to exclude assets from inlining?"}),(0,l.jsxs)(n.div,{className:"modern-directive-content",children:[(0,l.jsx)(n.p,{children:"Excluding assets from inlining will increase the number of assets that the Web App needs to load. This will reduce the efficiency of loading assets in a weak network environment or in scenarios where HTTP2 is not enabled. Please use force no Inline with caution."}),"\n",(0,l.jsxs)(n.h2,{id:"inline-js-files",children:["Inline JS files",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#inline-js-files",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"In addition to inlining static resource files into JS files, Builder also supports inlining JS files into HTML files."}),"\n",(0,l.jsxs)(n.p,{children:["Just enable the ",(0,l.jsx)(n.a,{href:"/en/api/config-output#outputenableinlinescripts",children:"output.enableInlineScripts"})," config, and the generated JS files will not be written into the output directory, but will be directly inlined to the corresponding in the HTML file."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    enableInlineScripts: true,\n  },\n};\n"})}),"\n"]})]}),"\n",(0,l.jsxs)(n.h2,{id:"inline-css-files",children:["Inline CSS files",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#inline-css-files",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"You can also inline CSS files into HTML files."}),"\n",(0,l.jsxs)(n.p,{children:["Just enable the ",(0,l.jsx)(n.a,{href:"/en/api/config-output#outputenableinlinestyles",children:"output.enableInlineStyles"})," config, the generated CSS file will not be written into the output directory, but will be directly inlined to the corresponding in the HTML file."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    enableInlineStyles: true,\n  },\n};\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"add-type-declaration",children:["Add Type Declaration",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-type-declaration",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["When you use URL queries such as ",(0,l.jsx)(n.code,{children:"?inline"})," and ",(0,l.jsx)(n.code,{children:"?url"})," in TypeScript code, TypeScript may prompt that the module is missing a type definition:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"TS2307: Cannot find module './logo.png?inline' or its corresponding type declarations.\n"})}),"\n",(0,l.jsxs)(n.p,{children:["To fix this, you can add type declarations for these URL queries, please create ",(0,l.jsx)(n.code,{children:"src/global.d.ts"})," file and add the following type declarations:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"declare module '*?inline' {\n  const content: string;\n  export default content;\n}\n\ndeclare module '*?inline' {\n  const content: string;\n  export default content;\n}\n\ndeclare module '*?__inline' {\n  const content: string;\n  export default content;\n}\n\ndeclare module '*?inline=false' {\n  const content: string;\n  export default content;\n}\n"})})]})}(t=globalThis).__RSPRESS_PAGE_META||(t.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fen%2Fguide%2Foptimization%2Finline-assets.md"]={toc:[{text:"Automatic Inlining",id:"automatic-inlining",depth:2},{text:"Force Inlining",id:"force-inlining",depth:2},{text:"Referenced from CSS file",id:"referenced-from-css-file",depth:3},{text:"Force no inlining",id:"force-no-inlining",depth:2},{text:"Referenced from CSS file",id:"referenced-from-css-file-1",depth:3},{text:"Inline JS files",id:"inline-js-files",depth:2},{text:"Inline CSS files",id:"inline-css-files",depth:2},{text:"Add Type Declaration",id:"add-type-declaration",depth:2}],title:"Inline Static Assets",frontmatter:{}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,r._(s._({},e),{children:(0,l.jsx)(o,s._({},e))})):o(e)}}}]);