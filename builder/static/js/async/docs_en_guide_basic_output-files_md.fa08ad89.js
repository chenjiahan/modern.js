(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guide_basic_output-files_md"],{43187:function(s,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var l in e)Object.defineProperty(s,l,{enumerable:!0,get:e[l]})}(e,{frontmatter:function(){return r},toc:function(){return o},title:function(){return t},default:function(){return c}});var n=l("12151"),i=l("21447");let r=void 0,o=[{id:"default-directory-structure",text:"Default Directory Structure",depth:2},{id:"modify-the-directory",text:"Modify the Directory",depth:2},{id:"static-assets",text:"Static Assets",depth:2},{id:"nodejs-output-directory",text:"Node.js Output Directory",depth:2},{id:"flatten-the-directory",text:"Flatten the Directory",depth:2},{id:"not-written-to-disk",text:"Not Written to Disk",depth:2}],t="Output Files";function a(s){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",div:"div",button:"button",pre:"pre",span:"span",ul:"ul",li:"li"},(0,i.useMDXComponents)(),s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.h1,{id:"output-files",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#output-files",children:"#"}),"Output Files"]}),"\n",(0,n.jsx)(e.p,{children:"This chapter will introduces the directory structure of output files and how to control the output directory of different types of files."}),"\n",(0,n.jsxs)(e.h2,{id:"default-directory-structure",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#default-directory-structure",children:"#"}),"Default Directory Structure"]}),"\n",(0,n.jsxs)(e.p,{children:["The following is a basic directory for output files. By default, the compiled files will be output in the ",(0,n.jsx)(e.code,{children:"dist"})," directory of current project."]}),"\n",(0,n.jsxs)(e.div,{className:"language-bash",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"dist"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"├── static"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│   ├── css"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│   │   ├── [name].[hash].css"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│   │   └── [name].[hash].css.map"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│   │"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│   └── js"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│       ├── [name].[hash].js"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│       ├── [name].[hash].js.LICENSE.txt"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│       └── [name].[hash].js.map"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"└── html"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    └── [name]"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        └── index.html"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsx)(e.p,{children:"The most common output files are HTML files, JS files, and CSS files:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["HTML files: default output to the ",(0,n.jsx)(e.code,{children:"html"})," directory."]}),"\n",(0,n.jsxs)(e.li,{children:["JS files: default output to ",(0,n.jsx)(e.code,{children:"static/js"})," directory,"]}),"\n",(0,n.jsxs)(e.li,{children:["CSS files: default output to the ",(0,n.jsx)(e.code,{children:"static/css"})," directory."]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"In addition, JS files and CSS files sometimes generate some related files:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["License files: contains open source license, which is output to the same level directory of the JS file, and adds ",(0,n.jsx)(e.code,{children:".LICENSE.txt"})," suffix."]}),"\n",(0,n.jsxs)(e.li,{children:["Source Map files: contains the source code mappings, which is output to the same level directory of JS files and CSS files, and adds a ",(0,n.jsx)(e.code,{children:".map"})," suffix."]}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["In the filename, ",(0,n.jsx)(e.code,{children:"[name]"})," represents the entry name corresponding to this file, such as ",(0,n.jsx)(e.code,{children:"index"}),", ",(0,n.jsx)(e.code,{children:"main"}),". ",(0,n.jsx)(e.code,{children:"[hash]"})," is the hash value generated based on the content of the file."]}),"\n",(0,n.jsxs)(e.h2,{id:"modify-the-directory",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#modify-the-directory",children:"#"}),"Modify the Directory"]}),"\n",(0,n.jsx)(e.p,{children:"Builder provides some configs to modify the directory or filename, you can:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["Modify the filename through ",(0,n.jsx)(e.a,{href:"/builder/en/api/config-output.html#outputfilename",children:"output.filename"}),"."]}),"\n",(0,n.jsxs)(e.li,{children:["Modify the output path of through ",(0,n.jsx)(e.a,{href:"/builder/en/api/config-output.html#outputdistpath",children:"output.distPath"}),"."]}),"\n",(0,n.jsxs)(e.li,{children:["Modify the license file through ",(0,n.jsx)(e.a,{href:"/builder/en/api/config-output.html#outputlegalcomments",children:"output.legalComments"}),"."]}),"\n",(0,n.jsxs)(e.li,{children:["Remove Source Map file through ",(0,n.jsx)(e.a,{href:"/builder/en/api/config-output.html#outputdisablesourcemap",children:"output.disableSourceMap"}),"."]}),"\n",(0,n.jsxs)(e.li,{children:["Remove the folder corresponding to the HTML files through ",(0,n.jsx)(e.a,{href:"/builder/en/api/config-html.html#htmldisablehtmlfolder",children:"html.disableHtmlFolder"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(e.h2,{id:"static-assets",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#static-assets",children:"#"}),"Static Assets"]}),"\n",(0,n.jsxs)(e.p,{children:["When you import static assets such as images, SVG, fonts, media, etc. in the code, they will also be output to the ",(0,n.jsx)(e.code,{children:"dist/static"})," directory, and automatically assigned to the corresponding subdirectories according to the file type:"]}),"\n",(0,n.jsxs)(e.div,{className:"language-bash",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"dist"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"└── static"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ├── image"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    │   └── foo.[hash].png"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    │"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ├── svg"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    │   └── bar.[hash].svg"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    │"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ├── font"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    │   └── baz.[hash].woff2"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    │"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    └── media"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        └── qux.[hash].mp4"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.p,{children:["You can use the ",(0,n.jsx)(e.a,{href:"/builder/en/api/config-output.html#outputdistpath",children:"output.distPath"})," config to uniformly input these static assets into a directory, for example, output to the ",(0,n.jsx)(e.code,{children:"assets"})," directory:"]}),"\n",(0,n.jsxs)(e.div,{className:"language-ts",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  output"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    distPath"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      image"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'assets'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      svg"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'assets'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      font"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'assets'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      media"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'assets'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsx)(e.p,{children:"The above config produces the following directory structure:"}),"\n",(0,n.jsxs)(e.div,{className:"language-bash",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"dist"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"└── assets"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ├── foo.[hash].png"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ├── bar.[hash].svg"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ├── baz.[hash].woff2"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    └── qux.[hash].mp4"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.h2,{id:"nodejs-output-directory",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#nodejs-output-directory",children:"#"}),"Node.js Output Directory"]}),"\n",(0,n.jsxs)(e.p,{children:["When the ",(0,n.jsx)(e.a,{href:"/builder/en/guide/basic/build-target.html",children:"Build Target"})," of Builder contains ",(0,n.jsx)(e.code,{children:"'node'"}),", or you have enabled server-side features such as SSR in the upper framework, Builder will generate some output files for Node.js and output them to the ",(0,n.jsx)(e.code,{children:"bundles"})," directory:"]}),"\n",(0,n.jsxs)(e.div,{className:"language-bash",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"dist"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"├── bundles"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│   └── [name].js"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"├── static"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"└── html"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsx)(e.p,{children:"Node.js files usually only contain JS files, no HTML or CSS. Also, JS file names will not contain hash."}),"\n",(0,n.jsxs)(e.p,{children:["You can modify the output path of Node.js files through the ",(0,n.jsx)(e.a,{href:"/builder/en/api/config-output.html#outputdistpath",children:"output.distPath.server"})," config."]}),"\n",(0,n.jsxs)(e.p,{children:["For example, output Node.js files to the ",(0,n.jsx)(e.code,{children:"server"})," directory:"]}),"\n",(0,n.jsxs)(e.div,{className:"language-ts",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  output"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    distPath"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      server"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'server'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.h2,{id:"flatten-the-directory",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#flatten-the-directory",children:"#"}),"Flatten the Directory"]}),"\n",(0,n.jsx)(e.p,{children:"Sometimes you don't want the dist directory to have too many levels, you can set the directory to an empty string to flatten the generated directory."}),"\n",(0,n.jsx)(e.p,{children:"See the example below:"}),"\n",(0,n.jsxs)(e.div,{className:"language-ts",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  output"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    distPath"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      js"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"''"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      css"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"''"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      html"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"''"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    disableHtmlFolder"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsx)(e.p,{children:"The above config produces the following directory structure:"}),"\n",(0,n.jsxs)(e.div,{className:"language-bash",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"dist"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"├── [name].[hash].css"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"├── [name].[hash].css.map"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"├── [name].[hash].js"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"├── [name].[hash].js.map"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"└── [name].html"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.h2,{id:"not-written-to-disk",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#not-written-to-disk",children:"#"}),"Not Written to Disk"]}),"\n",(0,n.jsx)(e.p,{children:"By default, Builder will write the generated files to disk, so developers can view the file content or configure proxy rules for static assets."}),"\n",(0,n.jsx)(e.p,{children:"In development, you can choose to keep the generated files in the Dev Server's memory to reduce the overhead of file operations."}),"\n",(0,n.jsxs)(e.p,{children:["Just set the ",(0,n.jsx)(e.code,{children:"dev.writeToDisk"})," config to ",(0,n.jsx)(e.code,{children:"false"}),":"]}),"\n",(0,n.jsxs)(e.div,{className:"language-ts",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  dev"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    writeToDisk"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]})]})}var c=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.useMDXComponents)(),s.components);return e?(0,n.jsx)(e,Object.assign({},s,{children:(0,n.jsx)(a,s)})):a(s)}}}]);