(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guide_basic_svg-assets_md"],{89862:function(s,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var o in e)Object.defineProperty(s,o,{enumerable:!0,get:e[o]})}(e,{frontmatter:function(){return l},toc:function(){return i},title:function(){return t},default:function(){return c}});var r=o("12151"),n=o("21447");let l=void 0,i=[{id:"import-svg-in-js-file",text:"Import SVG in JS file",depth:2},{id:"modify-the-default-export",text:"Modify the Default Export",depth:2},{id:"import-svg-in-css-file",text:"Import SVG in CSS file",depth:2},{id:"assets-processing",text:"Assets Processing",depth:2},{id:"add-type-declaration",text:"Add type declaration",depth:2}],t="Import SVG Assets";function a(s){let e=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h2:"h2",code:"code",button:"button",pre:"pre",span:"span"},(0,n.useMDXComponents)(),s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"import-svg-assets",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#import-svg-assets",children:"#"}),"Import SVG Assets"]}),"\n",(0,r.jsx)(e.p,{children:"Builder supports import SVG assets and transform SVG into React components or URLs."}),"\n",(0,r.jsxs)(e.div,{className:"modern-directive tip",children:[(0,r.jsx)(e.div,{className:"modern-directive-title",children:"What is SVG"}),(0,r.jsx)(e.div,{className:"modern-directive-content",children:(0,r.jsx)(e.p,{children:"\nSVG stands for Scalable Vector Graphics. It is a type of image format that uses vector graphics to represent images. Vector graphics are different from raster graphics, which are made up of pixels. Instead, vector graphics use geometric shapes, lines, and curves to represent images. Because vector graphics are not made up of pixels, they can be scaled to any size without losing resolution or quality."})})]}),"\n",(0,r.jsxs)(e.h2,{id:"import-svg-in-js-file",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#import-svg-in-js-file",children:"#"}),"Import SVG in JS file"]}),"\n",(0,r.jsxs)(e.p,{children:["When import an SVG in a JS file, if you import ",(0,r.jsx)(e.code,{children:"ReactComponent"}),", Builder will call ",(0,r.jsx)(e.a,{href:"https://react-svgr.com/",target:"_blank",rel:"noopener noreferrer",children:"SVGR"})," to convert the SVG into a React component."]}),"\n",(0,r.jsxs)(e.div,{className:"language-tsx",children:[(0,r.jsx)(e.div,{className:"modern-code-title",children:"src/component/Logo.tsx"}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { ReactComponent "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"as"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Logo } "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./static/logo.svg'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Logo"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" />;"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsx)(e.p,{children:"If you use the default import, then the SVG will be treated as a normal static asset and you will get a URL:"}),"\n",(0,r.jsxs)(e.div,{className:"language-tsx",children:[(0,r.jsx)(e.div,{className:"modern-code-title",children:"src/component/Logo.tsx"}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" logoURL "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./static/logo.svg'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(logoURL); "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:'// => "/static/logo.6c12aba3.png"'})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.h2,{id:"modify-the-default-export",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#modify-the-default-export",children:"#"}),"Modify the Default Export"]}),"\n",(0,r.jsxs)(e.p,{children:["You can modify the default export of SVG files through the ",(0,r.jsx)(e.a,{href:"/builder/en/api/config-output.html#outputsvgdefaultexport",children:"output.svgDefaultExport"})," config. For example, set the default export as a React component:"]}),"\n",(0,r.jsxs)(e.div,{className:"language-ts",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  output"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    svgDefaultExport"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'component'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsx)(e.p,{children:"Then import the SVG, you'll get a React component instead of a URL:"}),"\n",(0,r.jsxs)(e.div,{className:"language-tsx",children:[(0,r.jsx)(e.div,{className:"modern-code-title",children:"src/component/Logo.tsx"}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Logo "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./static/logo.svg'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Logo"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" />;"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.h2,{id:"import-svg-in-css-file",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#import-svg-in-css-file",children:"#"}),"Import SVG in CSS file"]}),"\n",(0,r.jsx)(e.p,{children:"When import an SVG in a CSS file, the SVG is treated as a normal static resource and you will get a URL:"}),"\n",(0,r.jsxs)(e.div,{className:"language-css",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".logo"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"background-image"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"url"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'../static/logo.svg'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:")"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.h2,{id:"assets-processing",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#assets-processing",children:"#"}),"Assets Processing"]}),"\n",(0,r.jsx)(e.p,{children:"When SVG is imported not as a React component but as a normal static resource, it is processed exactly the same as other static assets, and it is also affected by rules such as assets inlining and URL prefixing."}),"\n",(0,r.jsxs)(e.p,{children:["Please read the ",(0,r.jsx)(e.a,{href:"/builder/en/guide/basic/static-assets.html",children:"Import Static Assets"})," section to understand the processing rules for static assets."]}),"\n",(0,r.jsxs)(e.h2,{id:"add-type-declaration",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#add-type-declaration",children:"#"}),"Add type declaration"]}),"\n",(0,r.jsx)(e.p,{children:"When you reference an SVG asset in TypeScript code, TypeScript may prompt that the module is missing a type definition:"}),"\n",(0,r.jsxs)(e.div,{className:"language-text",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"TS2307: Cannot find module './logo.svg' or its corresponding type declarations.\n"})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["To fix this, you need to add a type declaration file for the SVG asset, please create a ",(0,r.jsx)(e.code,{children:"src/global.d.ts"})," file, and add the following type declaration:"]}),"\n",(0,r.jsxs)(e.div,{className:"language-ts",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"declare"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"module"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'*.svg'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"ReactComponent"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"React"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"FunctionComponent"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"React"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"SVGProps"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"SVGSVGElement"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  >;"})}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"content"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" content;"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["If you set ",(0,r.jsx)(e.code,{children:"svgDefaultExport"})," to ",(0,r.jsx)(e.code,{children:"'component'"}),", then change the type declaration to:"]}),"\n",(0,r.jsxs)(e.div,{className:"language-ts",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"declare"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"module"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'*.svg'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"ReactComponent"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"React"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"FunctionComponent"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"React"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"SVGProps"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"SVGSVGElement"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  >;"})}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ReactComponent;"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["After adding the type declaration, if the type error still exists, you can try to restart the current IDE, or adjust the directory where ",(0,r.jsx)(e.code,{children:"global.d.ts"})," is located, making sure the TypeScript can correctly identify the type definition."]})]})}var c=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,n.useMDXComponents)(),s.components);return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(a,s)})):a(s)}}}]);