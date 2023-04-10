(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_configure_app_html_tags_mdx"],{66572:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r}});var t=s("12151"),a=s("21447");function c(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",div:"div",button:"button",pre:"pre"},(0,a.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"ArrayOrNot<HtmlInjectTag | HtmlInjectTagHandler>"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Modifies the tags that are injected into the HTML page."}),"\n",(0,t.jsxs)(n.h4,{id:"tag-object",children:["Tag Object",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tag-object",children:"#"})]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"export interface HtmlInjectTag {\n  tag: string;\n  attrs?: Record<string, string | boolean | null | undefined>;\n  children?: string;\n  /** @default false */\n  hash?: boolean | string | ((url: string, hash: string) => string);\n  /** @default true */\n  publicPath?: boolean | string | ((url: string, publicPath: string) => string);\n  /** @default false */\n  append?: boolean;\n  /**\n   * Enable by default only for elements that are allowed to be included in the `head` tag.\n   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head#see_also}\n   */\n  head?: boolean;\n}\n"})})]})}),"\n",(0,t.jsx)(n.p,{children:"A tag object can be used to describe the tag to be injected and the location of the injection can be controlled by the parameters."}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    assetPrefix: '//example.com/',\n  },\n  html: {\n    tags: [\n      {\n        tag: 'script',\n        attrs: { src: 'a.js' },\n        head: true,\n        append: true,\n        publicPath: true,\n        hash: true,\n      },\n    ],\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(n.p,{children:["It will add a ",(0,t.jsx)(n.code,{children:"script"})," tag to the end of the ",(0,t.jsx)(n.code,{children:"head"})," of the HTML:"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    <!-- some other headTags... -->\n    <script src="//example.com/a.js?8327ec63"></script>\n  </head>\n  <body>\n    <!-- some other bodyTags... -->\n  </body>\n</html>\n'})})]})}),"\n",(0,t.jsxs)(n.p,{children:["The final insertion position of the tag is determined by the ",(0,t.jsx)(n.code,{children:"head"})," and ",(0,t.jsx)(n.code,{children:"append"})," options, and two elements with the same configuration will be inserted into the same area and hold their relative positions to each other."]}),"\n",(0,t.jsxs)(n.p,{children:["Fields in the tag that indicate the path to the external resource file are affected by the ",(0,t.jsx)(n.code,{children:"publicPath"})," and ",(0,t.jsx)(n.code,{children:"hash"})," options.\nThese fields include ",(0,t.jsx)(n.code,{children:"src"})," for the ",(0,t.jsx)(n.code,{children:"script"})," tag and ",(0,t.jsx)(n.code,{children:"href"})," for the ",(0,t.jsx)(n.code,{children:"link"})," tag."]}),"\n",(0,t.jsxs)(n.p,{children:["Enabling ",(0,t.jsx)(n.code,{children:"publicPath"})," will splice the ",(0,t.jsx)(n.code,{children:"output.assetPrefix"})," field before the attribute representing the path in the tag.\nAnd the ",(0,t.jsx)(n.code,{children:"hash"})," field causes the filename to be followed by an additional hash query to control browser caching, with the same hash string as the HTML file product."]}),"\n",(0,t.jsx)(n.p,{children:"You can also pass functions to those fields to control the path joining."}),"\n",(0,t.jsxs)(n.h4,{id:"tags-handler",children:["Tags Handler",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tags-handler",children:"#"})]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"export type HtmlInjectTagUtils = {\n  outputName: string;\n  publicPath: string;\n  hash: string;\n};\n\nexport type HtmlInjectTagHandler = (\n  tags: HtmlInjectTag[],\n  utils: HtmlInjectTagUtils,\n) => HtmlInjectTag[] | void;\n"})})]})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"html.tags"})," can also accept functions that can arbitrarily modify tags by writing logic to the callback, often used to ensure the relative position of tags while inserting them."]}),"\n",(0,t.jsx)(n.p,{children:"The callback function accepts a tag list as an argument and needs to modify or return a new tag array directly."}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"export default {\n  html: {\n    tags: [\n      tags => {\n        tags.splice(0, 1);\n      },\n      /* ^?\n       *   { tag: 'script', attrs: { src: 'b.js' } },\n       *   ... some other headTags\n       *   { tag: 'script', attrs: { src: 'c.js' } },\n       *   ... some other bodyTags\n       *   { tag: 'script', attrs: { src: 'a.js' }, head: false },\n       */\n      { tag: 'script', attrs: { src: 'a.js' }, head: false },\n      { tag: 'script', attrs: { src: 'b.js' }, append: false },\n      { tag: 'script', attrs: { src: 'c.js' } },\n      tags => [...tags, { tag: 'script', attrs: { src: 'd.js' } }],\n      /* ^?\n       *   ... some other headTags\n       *   { tag: 'script', attrs: { src: 'c.js' } },\n       *   ... some other bodyTags\n       *   { tag: 'script', attrs: { src: 'a.js' }, head: false },\n       */\n    ],\n  },\n};\n"})})]})}),"\n",(0,t.jsx)(n.p,{children:"The function will be executed at the end of the HTML processing flow. In the example below, the 'tags' parameter will contain all tag objects that form config, regardless of the function's location in config."}),"\n",(0,t.jsxs)(n.p,{children:["Modifying the attributes ",(0,t.jsx)(n.code,{children:"append"}),", ",(0,t.jsx)(n.code,{children:"publicPath"}),", ",(0,t.jsx)(n.code,{children:"hash"})," in the callback will not take effect, because they have been applied to the tag's location and path attributes, respectively."]}),"\n",(0,t.jsx)(n.p,{children:"So the end product will look like:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    <!-- tags with `{ head: true, append: false }` here. -->\n    <!-- some other headTags... -->\n    <!-- tags with `{ head: true, append: true }` here. -->\n    <script src="//example.com/c.js"></script>\n    <script src="//example.com/d.js"></script>\n  </head>\n  <body>\n    <!-- tags with `{ head: false, append: false }` here. -->\n    <!-- some other bodyTags... -->\n    <!-- tags with `{ head: false, append: true }` here. -->\n    <script src="//example.com/a.js"></script>\n  </body>\n</html>\n'})})]})}),"\n",(0,t.jsxs)(n.h4,{id:"limitation",children:["Limitation",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#limitation",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["This configuration is used to modify the content of HTML files after Builder completes building, and does not resolve or parse new modules. It cannot be used to import uncompiled source code files. Also cannot replace configurations such as ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-source.html#source.preentry",target:"_blank",rel:"noopener noreferrer",children:"source.preEntry"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"For example, for the following project:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-plain",children:"web-app\n├── src\n│   ├── index.tsx\n│   └── polyfill.ts\n└── modern.config.ts\n"})})]})}),"\n",(0,t.jsxs)(n.div,{className:"language-",children:[(0,t.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default {\n  output: {\n    assetPrefix: '//example.com/',\n  },\n  html: {\n    tags: [\n      { tag: 'script', attrs: { src: './src/polyfill.ts' } },\n    ],\n  },\n};\n"})})]})]}),"\n",(0,t.jsxs)(n.p,{children:["The tag object here will be directly added to the HTML product after simple processing, but the ",(0,t.jsx)(n.code,{children:"polyfill.ts"})," will not be transpiled or bundled, so there will be a 404 error when processing this script in the application."]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-html",children:'<body>\n  <script src="//example.com/src/polyfill.ts"></script>\n</body>\n'})})]})}),"\n",(0,t.jsx)(n.p,{children:"Reasonable use cases include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Injecting static resources with ",(0,t.jsx)(n.strong,{children:"determined paths"})," on CDN."]}),"\n",(0,t.jsx)(n.li,{children:"Injecting inline scripts that need to be loaded on the first screen."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For example, the usage of the following example:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-plain",children:"web-app\n├── src\n│   └── index.tsx\n├── public\n│   └── service-worker.js\n└── modern.config.ts\n"})})]})}),"\n",(0,t.jsxs)(n.div,{className:"language-",children:[(0,t.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"function report() {\n  fetch('https://www.example.com/report')\n}\n\nexport default {\n  html: {\n    output: {\n      assetPrefix: '//example.com/',\n    },\n    tags: [\n      // Inject asset from the `public` directory.\n      { tag: 'script', attrs: { src: 'service-worker.js' } },\n      // Inject asset from other CDN url.\n      {\n        tag: 'script',\n        publicPath: false,\n        attrs: { src: 'https://cdn.example.com/foo.js' },\n      },\n      // Inject inline script.\n      {\n        tag: 'script',\n        children: report.toString() + '\\nreport()',\n      }\n    ],\n  },\n};\n"})})]})]}),"\n",(0,t.jsx)(n.p,{children:"The result will seems like:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-html",children:'<body>\n  <script src="//example.com/service-worker.js"></script>\n  <script src="https://cdn.example.com/foo.js"></script>\n  <script>\n    function report() {\n      fetch(\'https://www.example.com/report\')\n    }\n    report()\n  </script>\n</body>\n'})})]})})]})}var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}},65947:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return r},title:function(){return l},toc:function(){return i},default:function(){return d}});var t=s("12151"),a=s("21447"),c=s.ir(s("66572")),r={sidebar_label:"tags"},l="html.tags",i=[];function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div"},(0,a.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"html.tags",children:["html.tags",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#html.tags",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:["This config is provided by Modern.js Builder, more detail can see ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-html.html#htmltags",target:"_blank",rel:"noopener noreferrer",children:"html.tags"}),".\n"]})]}),"\n","\n",(0,t.jsx)(c.default,{})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}}}]);