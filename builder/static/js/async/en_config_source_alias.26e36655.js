"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[5386],{57446:function(s,e,n){n.r(e),n.d(e,{content:function(){return r},frontmatter:function(){return i},toc:function(){return l}});var o=n(39980);const i=void 0,l=[{id:"object-type",text:"Object Type",depth:4},{id:"function-type",text:"Function Type",depth:4}],r="\"- **Type:** `Record<string, string | string[]> | Function`\\n- **Default:** `undefined`\\n\\nCreate aliases to import or require certain modules, same as the [resolve.alias](https://webpack.js.org/configuration/resolve/#resolvealias) config of webpack.\\n\\n:::tip\\nFor TypeScript projects, you only need to configure [compilerOptions.paths](https://www.typescriptlang.org/tsconfig#paths) in `tsconfig.json`, Builder will automatically recognize the aliases in `tsconfig.json`, so the `alias` config is unnecessary.\\n:::\\n\\n#### Object Type\\n\\nThe `alias` can be an Object, and the relative path will be automatically converted to absolute path.\\n\\n```js\\nexport default {\\n  source: {\\n    alias: {\\n      '@common': './src/common',\\n    },\\n  },\\n};\\n```\\n\\nWith above configuration, if `@common/Foo.tsx` is import in the code, it will be mapped to the `<root>/src/common/Foo.tsx` path.\\n\\n#### Function Type\\n\\nThe `alias` can be a function, it will accept the previous alias object, and you can modify it.\\n\\n```js\\nexport default {\\n  source: {\\n    alias: alias => {\\n      alias['@common'] = './src/common';\\n    },\\n  },\\n};\\n```\\n\\nYou can also return a new object as the final result in the function, which will replace the previous alias object.\\n\\n```js\\nexport default {\\n  source: {\\n    alias: alias => {\\n      return {\\n        '@common': './src/common',\\n      };\\n    },\\n  },\\n};\\n```\\n\"";function c(s){const e=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",div:"div",h4:"h4",button:"button",pre:"pre",span:"span"},s.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Type:"})," ",(0,o.jsx)(e.code,{children:"Record<string, string | string[]> | Function"})]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Default:"})," ",(0,o.jsx)(e.code,{children:"undefined"})]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["Create aliases to import or require certain modules, same as the ",(0,o.jsx)(e.a,{href:"https://webpack.js.org/configuration/resolve/#resolvealias",target:"_blank",rel:"nofollow",children:"resolve.alias"})," config of webpack."]}),"\n",(0,o.jsxs)(e.div,{className:"modern-directive tip",children:[(0,o.jsx)(e.p,{className:"modern-directive-title",children:"TIP"}),(0,o.jsx)(e.div,{className:"modern-directive-content",children:(0,o.jsxs)(e.p,{children:["\nFor TypeScript projects, you only need to configure ",(0,o.jsx)(e.a,{href:"https://www.typescriptlang.org/tsconfig#paths",target:"_blank",rel:"nofollow",children:"compilerOptions.paths"})," in ",(0,o.jsx)(e.code,{children:"tsconfig.json"}),", Builder will automatically recognize the aliases in ",(0,o.jsx)(e.code,{children:"tsconfig.json"}),", so the ",(0,o.jsx)(e.code,{children:"alias"}),"config is unnecessary."]})})]}),"\n",(0,o.jsxs)(e.h4,{id:"object-type",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"}),"Object Type"]}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"alias"})," can be an Object, and the relative path will be automatically converted to absolute path."]}),"\n",(0,o.jsxs)(e.div,{className:"language-js",children:[(0,o.jsx)(e.div,{className:""}),(0,o.jsxs)(e.div,{className:"modern-code-content",children:[(0,o.jsx)(e.button,{className:"copy"}),(0,o.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(e.code,{children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  source"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    alias"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@common'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./src/common'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,o.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(e.p,{children:["With above configuration, if ",(0,o.jsx)(e.code,{children:"@common/Foo.tsx"})," is import in the code, it will be mapped to the ",(0,o.jsx)(e.code,{children:"<root>/src/common/Foo.tsx"})," path."]}),"\n",(0,o.jsxs)(e.h4,{id:"function-type",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"}),"Function Type"]}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"alias"})," can be a function, it will accept the previous alias object, and you can modify it."]}),"\n",(0,o.jsxs)(e.div,{className:"language-js",children:[(0,o.jsx)(e.div,{className:""}),(0,o.jsxs)(e.div,{className:"modern-code-content",children:[(0,o.jsx)(e.button,{className:"copy"}),(0,o.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(e.code,{children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  source"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"alias"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" alias "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      alias["}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@common'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./src/common'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,o.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,o.jsx)(e.p,{children:"You can also return a new object as the final result in the function, which will replace the previous alias object."}),"\n",(0,o.jsxs)(e.div,{className:"language-js",children:[(0,o.jsx)(e.div,{className:""}),(0,o.jsxs)(e.div,{className:"modern-code-content",children:[(0,o.jsx)(e.button,{className:"copy"}),(0,o.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(e.code,{children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  source"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"alias"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" alias "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@common'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./src/common'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      };"})}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,o.jsx)(e.span,{className:"line"})]})})]})]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,o.jsx)(e,Object.assign({},s,{children:(0,o.jsx)(c,s)})):c(s)}}}]);