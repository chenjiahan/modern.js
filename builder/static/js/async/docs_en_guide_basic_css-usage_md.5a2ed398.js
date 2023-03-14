(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guide_basic_css-usage_md"],{65321:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return i},toc:function(){return o},title:function(){return r},default:function(){return a}});var l=n("12151");let i=void 0,o=[{id:"using-less-sass-and-stylus",text:"Using Less, Sass and Stylus",depth:2},{id:"using-postcss",text:"Using PostCSS",depth:2},{id:"builtin-postcss-plugins",text:"Builtin PostCSS plugins",depth:3},{id:"using-css-modules",text:"Using CSS Modules",depth:2},{id:"css-minify",text:"CSS Minify",depth:2},{id:"inline-css-files",text:"Inline CSS Files",depth:2},{id:"import-css-in-node_modules",text:"Import CSS in node_modules",depth:2}],r="CSS Usage";function t(s){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",span:"span",h3:"h3",ul:"ul",li:"li"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.h1,{id:"css-usage",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#css-usage",children:"#"}),"CSS Usage"]}),"\n",(0,l.jsx)(e.p,{children:"Builder has built-in multiple style resource processing capabilities, including Less / Sass preprocessor, PostCSS, CSS Modules, CSS inline and CSS compression."}),"\n",(0,l.jsx)(e.p,{children:"In addition, Builder also provides multiple configs to customize the compile rules of style resources."}),"\n",(0,l.jsxs)(e.h2,{id:"using-less-sass-and-stylus",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#using-less-sass-and-stylus",children:"#"}),"Using Less, Sass and Stylus"]}),"\n",(0,l.jsx)(e.p,{children:"The Builder has built-in community popular CSS preprocessors such as Less, Sass."}),"\n",(0,l.jsxs)(e.p,{children:["By default, you don't need to configure anything for Less and Sass. If you need to customize loader config, you can configure ",(0,l.jsx)(e.a,{href:"/builder/en/api/config-tools.html#toolsless",children:"tools.less"}),", ",(0,l.jsx)(e.a,{href:"/builder/en/api/config-tools.html#toolssass",children:"tools.sass"})," to set it up."]}),"\n",(0,l.jsxs)(e.p,{children:["You can also use Stylus in Builder, just install the Stylus plugin provided by Builder, please refer to ",(0,l.jsx)(e.a,{href:"/builder/en/plugins/plugin-stylus.html",children:"Stylus Plugin"})," for usage."]}),"\n",(0,l.jsxs)(e.h2,{id:"using-postcss",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#using-postcss",children:"#"}),"Using PostCSS"]}),"\n",(0,l.jsxs)(e.p,{children:["Builder has built-in ",(0,l.jsx)(e.a,{href:"https://postcss.org/",target:"_blank",rel:"nofollow",children:"PostCSS"})," to transform the CSS code. You can configure the postcss-loader via ",(0,l.jsx)(e.a,{href:"/builder/en/api/config-tools.html#toolspostcss",children:"tools.postcss"}),"."]}),"\n",(0,l.jsxs)(e.div,{className:"language-ts",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  tools"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"postcss"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" opts "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"viewportPlugin"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"require"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'postcss-px-to-viewport'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")({"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        viewportWidth"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"375"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      });"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"opts"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"postcssOptions"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"plugins"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".push"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(viewportPlugin);"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h3,{id:"builtin-postcss-plugins",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#builtin-postcss-plugins",children:"#"}),"Builtin PostCSS plugins"]}),"\n",(0,l.jsx)(e.p,{children:"Builder has some builtin PostCSS plugins, which will perform the following transformations on CSS:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"nofollow",children:"autoprefixer"}),": we have enabled ",(0,l.jsx)(e.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"nofollow",children:"autoprefixer"})," to add vendor prefixes to CSS rules. If you want to configure the target browser, you can use ",(0,l.jsx)(e.a,{href:"/builder/en/api/config-output.html#outputoverridebrowserslist",children:"output.overrideBrowserslist"})," config."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"https://www.npmjs.com/package/postcss-nested",target:"_blank",rel:"nofollow",children:"postcss-nesting"}),": Provide ",(0,l.jsx)(e.a,{href:"https://drafts.csswg.org/css-nesting-1/",target:"_blank",rel:"nofollow",children:"CSS Nesting"})," support, you can Use nested writing in CSS, such as:"]}),"\n"]}),"\n",(0,l.jsxs)(e.div,{className:"language-css",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".my-table"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  & "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"td"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"text-align"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"center"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    &."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"c"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"text-transform"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"uppercase"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"https://www.npmjs.com/package/postcss-flexbugs-fixes",target:"_blank",rel:"nofollow",children:"postcss-flexbugs-fixes"}),": Used to fix known ",(0,l.jsx)(e.a,{href:"https://github.com/philipwalton/flexbugs",target:"_blank",rel:"nofollow",children:"Flex Bugs"}),"."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"https://www.npmjs.com/package/postcss-initial",target:"_blank",rel:"nofollow",children:"postcss-initial"}),": Enabled only when it needs to be compatible with legacy browsers, providing the ",(0,l.jsxs)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/initial_value",target:"_blank",rel:"nofollow",children:[(0,l.jsx)(e.code,{children:"initial"})," attribute value"]})," compatible."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"https://www.npmjs.com/package/postcss-page-break",target:"_blank",rel:"nofollow",children:"postcss-page-break"}),": Enabled only when compatibility with legacy browsers is required, providing support for ",(0,l.jsxs)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/break-after",target:"_blank",rel:"nofollow",children:[(0,l.jsx)(e.code,{children:"break-"})," attribute"]}),"."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"https://www.npmjs.com/package/postcss-font-variant",target:"_blank",rel:"nofollow",children:"postcss-font-variant"}),": Enabled only when compatibility with legacy browsers is required, providing support for ",(0,l.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant",target:"_blank",rel:"nofollow",children:(0,l.jsx)(e.code,{children:"font-variant"})}),"."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"https://www.npmjs.com/package/postcss-media-minmax",target:"_blank",rel:"nofollow",children:"postcss-media-minmax"}),": Enabled only when compatibility with legacy browsers is required, providing support for ",(0,l.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#syntax_improvements_in_level_4",target:"_blank",rel:"nofollow",children:"Media Query Ranges"})," compatibility."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"https://www.npmjs.com/package/postcss-custom-properties",target:"_blank",rel:"nofollow",children:"postcss-custom-properties"}),": Only enabled when compatibility with legacy browsers is required, providing support for ",(0,l.jsx)(e.a,{href:"https://www.w3.org/TR/css-variables-1/",target:"_blank",rel:"nofollow",children:"Custom Properties"}),", you can define and use custom variables in CSS, such as:"]}),"\n"]}),"\n",(0,l.jsxs)(e.div,{className:"language-css",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:":root"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  --main-bg-color"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"pink"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"body"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"background-color"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"var"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"(--main-bg-color)"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h2,{id:"using-css-modules",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#using-css-modules",children:"#"}),"Using CSS Modules"]}),"\n",(0,l.jsxs)(e.p,{children:["Please read the ",(0,l.jsx)(e.a,{href:"/builder/en/guide/basic/css-modules.html",children:"Using CSS Modules"})," chapter for a complete usage of CSS Modules."]}),"\n",(0,l.jsxs)(e.h2,{id:"css-minify",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#css-minify",children:"#"}),"CSS Minify"]}),"\n",(0,l.jsx)(e.p,{children:"Usually, in production environments we compress static resources such as CSS, JS, etc. to achieve better transfer efficiency."}),"\n",(0,l.jsxs)(e.p,{children:["Builder automatically compresses CSS code at production build time with ",(0,l.jsx)(e.a,{href:"https://github.com/webpack-contrib/css-minimizer-webpack-plugin",target:"_blank",rel:"nofollow",children:"css-minimizer-webpack-plugin"})," (The compression tool used at the bottom is ",(0,l.jsx)(e.a,{href:"https://cssnano.co/",target:"_blank",rel:"nofollow",children:"cssnano"}),")."]}),"\n",(0,l.jsxs)(e.p,{children:["You can configure ",(0,l.jsx)(e.a,{href:"/builder/en/api/config-tools.html#toolsminifycss",children:"tools.minifyCss"})," to make it more customizable."]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive tip",children:[(0,l.jsx)(e.p,{className:"modern-directive-title",children:"About cssnano"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsx)(e.p,{children:"\ncssnano is a tool for optimizing and minifying CSS files. It reduces the size of CSS files by removing unused rules, merging similar rules, removing comments and whitespace, and converting length units, among other techniques, to improve the loading speed of websites."})})]}),"\n",(0,l.jsxs)(e.h2,{id:"inline-css-files",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#inline-css-files",children:"#"}),"Inline CSS Files"]}),"\n",(0,l.jsxs)(e.p,{children:["By default, Builder will extract CSS into a separate ",(0,l.jsx)(e.code,{children:".css"})," file and output it to the dist directory."]}),"\n",(0,l.jsxs)(e.p,{children:["If you want to inline styles into your JS file, you can set ",(0,l.jsx)(e.a,{href:"/builder/en/api/config-output.html#outputdisablecssextract",children:"output.disableCssExtract"})," to true to disable CSS extraction logic.When the JS file is requested by the browser, JS dynamically inserts the ",(0,l.jsx)(e.code,{children:"<style>"})," tag into the Html to load the CSS styles."]}),"\n",(0,l.jsxs)(e.div,{className:"language-ts",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  output"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    disableCssExtract"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(e.p,{children:"This will increase the size of your JS Bundle, so it is usually not recommended to disable the CSS extraction."}),"\n",(0,l.jsxs)(e.h2,{id:"import-css-in-node_modules",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#import-css-in-node_modules",children:"#"}),"Import CSS in node_modules"]}),"\n",(0,l.jsx)(e.p,{children:"You can directly import CSS files in node_modules."}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Import in a component:"}),"\n"]}),"\n",(0,l.jsxs)(e.div,{className:"language-ts",children:[(0,l.jsx)(e.div,{className:"modern-code-title",children:"src/App.tsx"}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// Import the Arco Design style:"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@arco-design/web-react/dist/css/arco.css'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Import in a style file:"}),"\n"]}),"\n",(0,l.jsxs)(e.div,{className:"language-css",children:[(0,l.jsx)(e.div,{className:"modern-code-title",children:"src/App.css"}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"/* reference normalize.css */"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"/* https://github.com/necolas/normalize.css */"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"@import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'normalize.css'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"body"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"/* */"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]})]})}var a=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(t,s)})):t(s)}}}]);