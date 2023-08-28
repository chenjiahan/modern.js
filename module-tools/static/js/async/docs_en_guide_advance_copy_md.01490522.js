(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["docs_en_guide_advance_copy_md"],{62157:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return l}});var o,t=i("15169"),r=i("43932"),s=i("9880"),c=i("23169");function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",pre:"pre",blockquote:"blockquote",h3:"h3"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"use-the-copy-tools",children:["Use the Copy Tools",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-the-copy-tools",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"The Module Project provides the Copy utility for copying already existing individual files or entire directories into the output directory. Next we learn how to use it."}),"\n",(0,s.jsxs)(n.h2,{id:"understanding-the-copy-api",children:["Understanding the Copy API",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#understanding-the-copy-api",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["We can use the Copy tool via the ",(0,s.jsx)(n.a,{href:"/en/api/config/build-config#copy",children:(0,s.jsx)(n.code,{children:"buildConfig.copy"})})," API, which contains the following two main configurations."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/en/api/config/build-config#copypatterns",children:(0,s.jsx)(n.code,{children:"patterns"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/en/api/config/build-config#copyoptions",children:(0,s.jsx)(n.code,{children:"options"})})}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"api-description",children:["API Description",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#api-description",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"copy.patterns"})," is used to find files to be copied and configure the output path."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"patterns.from"})," parameter is used to specify the file or directory to be copied. It accepts either a Glob pattern string or a specific path. A Glob pattern string refers to the ",(0,s.jsx)(n.a,{href:"https://github.com/mrmlnc/fast-glob#pattern-syntax",target:"_blank",rel:"noopener noreferrer",children:"fast-glob pattern syntax"}),". Therefore, we can use it in two ways as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default defineConfig({\n  buildConfig: {\n    copy: {\n      patterns: [\n        { from: './index.html', to: '' },\n        { from: './*.html', to: '' },\n      ],\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"patterns.context"})," parameter is generally used in conjunction with ",(0,s.jsx)(n.code,{children:"patterns.from"}),". By default, its value is the same as ",(0,s.jsx)(n.a,{href:"/api/config/build-config#sourcedir",children:(0,s.jsx)(n.code,{children:"buildConfig.sourceDir"})}),". Therefore, we can specify the file ",(0,s.jsx)(n.code,{children:"src/data.json"})," to be copied in the following way:"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["By default, ",(0,s.jsx)(n.code,{children:"buildConfig.sourceDir"})," is set to ",(0,s.jsx)(n.code,{children:"src"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default defineConfig({\n  buildConfig: {\n    copy: {\n      patterns: [\n        { from: './data.json' to: ''},\n      ],\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When the specified file is not in the source code directory, you can modify the ",(0,s.jsx)(n.code,{children:"context"})," configuration. For example, to specify the file ",(0,s.jsx)(n.code,{children:"temp/index.html"})," in the project directory to be copied:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import path from 'path';\n\nexport default defineConfig({\n  buildConfig: {\n    copy: {\n      patterns: [\n        {\n          from: './index.html',\n          context: path.join(__dirname, './temp')\n          to: '',\n        }\n      ],\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"patterns.to"})," parameter is used to specify the output path for the copied files. By default, its value corresponds to ",(0,s.jsx)(n.a,{href:"/api/config/build-config#outDir",children:"buildConfig.outDir"}),". Therefore, we can copy ",(0,s.jsx)(n.code,{children:"src/index.html"})," to the ",(0,s.jsx)(n.code,{children:"dist"})," directory as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default defineConfig({\n  buildConfig: {\n    copy: {\n      patterns: [{ from: './index.html' }],\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When we configure ",(0,s.jsx)(n.code,{children:"patterns.to"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If it is a relative path, the path will be calculated relative to ",(0,s.jsx)(n.code,{children:"buildConfig.outDir"})," to determine the absolute path for copying the files."]}),"\n",(0,s.jsx)(n.li,{children:"If it is an absolute path, the value will be used directly."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Finally, ",(0,s.jsx)(n.code,{children:"patterns.globOptions"})," is used to configure the ",(0,s.jsx)(n.a,{href:"https://github.com/sindresorhus/globby",target:"_blank",rel:"noopener noreferrer",children:"globby"})," object for finding files to copy. Its configuration can be referenced from:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/sindresorhus/globby#options",target:"_blank",rel:"noopener noreferrer",children:"globby.options"})}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"examples-of-different-scenarios",children:["Examples of Different Scenarios",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#examples-of-different-scenarios",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"copying-files",children:["Copying Files",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#copying-files",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default defineConfig({\n  buildConfig: [\n    {\n      outDir: 'dist',\n      copy: {\n        patterns: [\n          /**\n           * copy file to file\n           */\n          {\n            from: './temp-1/a.png',\n            context: __dirname,\n            to: './temp-1/b.png',\n          },\n        ],\n      },\n    },\n  ],\n});\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"copying-files-to-a-directory",children:["Copying Files to a Directory",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#copying-files-to-a-directory",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default defineConfig({\n  buildConfig: [\n    {\n      outDir: 'dist',\n      copy: {\n        patterns: [\n          /**\n           * copy file to dir\n           */\n          {\n            from: './temp-2/a.png',\n            context: __dirname,\n            to: './temp-2',\n          },\n        ],\n      },\n    },\n  ],\n});\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"copying-from-directory-to-directory",children:["Copying from Directory to Directory",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#copying-from-directory-to-directory",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default defineConfig({\n  buildConfig: [\n    {\n      outDir: 'dist',\n      copy: {\n        patterns: [\n          /**\n           * copy dir to dir\n           */\n          {\n            from: './temp-3/',\n            to: './temp-3',\n            context: __dirname,\n          },\n        ],\n        options: {\n          enableCopySync: true,\n        },\n      },\n    },\n  ],\n});\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"copying-from-directory-to-file",children:["Copying from Directory to File",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#copying-from-directory-to-file",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default defineConfig({\n  buildConfig: [\n    {\n      outDir: 'dist',\n      copy: {\n        patterns: [\n          /**\n           * copy dir to file\n           */\n          {\n            from: './temp-4/',\n            context: __dirname,\n            to: './temp-4/_index.html',\n          },\n        ],\n        options: {\n          enableCopySync: true,\n        },\n      },\n    },\n  ],\n});\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"using-glob",children:["Using Glob",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-glob",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default defineConfig({\n  buildConfig: [\n    {\n      outDir: 'dist',\n      copy: {\n        patterns: [\n          /**\n           * copy glob to dir\n           */\n          {\n            from: './*.html',\n            to: './temp-5',\n          },\n        ],\n        options: {\n          enableCopySync: true,\n        },\n      },\n    },\n    {\n      copy: {\n        patterns: [\n          /**\n           * copy glob to file\n           */\n          {\n            from: './*.html',\n            to: './temp-6/index.html',\n          },\n        ],\n        options: {\n          enableCopySync: true,\n        },\n      },\n    },\n  ],\n});\n"})})]})}(o=globalThis).__RSPRESS_PAGE_META||(o.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fguide%2Fadvance%2Fcopy.md"]={toc:[{text:"Understanding the Copy API",id:"understanding-the-copy-api",depth:2},{text:"API Description",id:"api-description",depth:2},{text:"Examples of Different Scenarios",id:"examples-of-different-scenarios",depth:2},{text:"Copying Files",id:"copying-files",depth:3},{text:"Copying Files to a Directory",id:"copying-files-to-a-directory",depth:3},{text:"Copying from Directory to Directory",id:"copying-from-directory-to-directory",depth:3},{text:"Copying from Directory to File",id:"copying-from-directory-to-file",depth:3},{text:"Using Glob",id:"using-glob",depth:3}],title:"Use the Copy Tools",frontmatter:{sidebar_position:3}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,(0,r._)((0,t._)({},e),{children:(0,s.jsx)(d,(0,t._)({},e))})):d(e)}}}]);