(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guides_advanced-features_eslint_mdx"],{83:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return r},toc:function(){return o},title:function(){return t},default:function(){return a}});var i=n("12151");let r={title:"ESLint",sidebar_position:8},o=[{id:"q-how-to-deal-with-lint",text:"Q: How To Deal With Lint",depth:2},{id:"automatic-fix",text:"Automatic Fix",depth:3},{id:"batch-automatic-fix",text:"Batch Automatic Fix",depth:3},{id:"manual-fix",text:"Manual Fix",depth:3},{id:"claim-exceptions",text:"Claim Exceptions",depth:3},{id:"q-how-to-customize-eslint-rules",text:"Q: How to customize ESLint rules",depth:2},{id:"the-eslintconfig-field-in-packagejson-in-the-root-directory",text:"The eslintConfig field in package.json in the root directory",depth:3},{id:"srceslintrcjs",text:"src/.eslintrc.js",depth:3},{id:"eslintignore-field-in-packagejson",text:"eslintIgnore field in package.json",depth:3},{id:"q-how-to-upgrade-the-version-of-the-eslint-plugin",text:"Q: How to upgrade the version of the ESLint plugin",depth:2},{id:"q-webstorm-sometimes-reports-eslint-errors",text:"Q: WebStorm sometimes reports ESLint errors",depth:2}],t="ESLint";function l(e){let s=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",code:"code",h2:"h2",h3:"h3",div:"div",button:"button",pre:"pre",span:"span",ul:"ul",li:"li",img:"img"},e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h1,{id:"eslint",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#eslint",children:"#"}),"ESLint"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Modern.js ESLint Rules"})," is the full set of ",(0,i.jsx)(s.strong,{children:"ESLint"})," rules，includes ",(0,i.jsx)(s.code,{children:"@modern-js"})," (Lint rules for Node.js projects) and ",(0,i.jsx)(s.code,{children:"@modern-js-app"})," (Lint rules for web projects)."]}),"\n",(0,i.jsx)(s.p,{children:"More ESLint usage is described below with specific questions."}),"\n",(0,i.jsxs)(s.h2,{id:"q-how-to-deal-with-lint",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#q-how-to-deal-with-lint",children:"#"}),"Q: How To Deal With Lint"]}),"\n",(0,i.jsxs)(s.h3,{id:"automatic-fix",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#automatic-fix",children:"#"}),"Automatic Fix"]}),"\n",(0,i.jsxs)(s.p,{children:["Most problems will be solved by the automatic fix of ESLint rules or the code formatting of ",(0,i.jsx)(s.a,{href:"https://prettier.io/",target:"_blank",rel:"nofollow",children:"Prettier"})," (which has been integrated into ESLint), and the developer does not need to care about the details of the problem and how to solve it."]}),"\n",(0,i.jsxs)(s.div,{className:"modern-directive info",children:[(0,i.jsx)(s.p,{className:"modern-directive-title",children:"INFO"}),(0,i.jsx)(s.div,{className:"modern-directive-content",children:(0,i.jsx)(s.p,{children:"\nThis kind of automatic fix is mainly performed when the IDE saves the file, and a few will be automatically fix on submit."})})]}),"\n",(0,i.jsxs)(s.h3,{id:"batch-automatic-fix",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#batch-automatic-fix",children:"#"}),"Batch Automatic Fix"]}),"\n",(0,i.jsx)(s.p,{children:"In rare cases, such as when an old project is migrated, the following commands can be executed to repair and inspect all files in bulk:"}),"\n",(0,i.jsxs)(s.div,{className:"language-bash",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm run lint:error"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.h3,{id:"manual-fix",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#manual-fix",children:"#"}),"Manual Fix"]}),"\n",(0,i.jsx)(s.p,{children:"For problems that cannot be automatically fixed, you can click the rule link in the problem prompt box in the IDE to open the document of this rule to view the explanation and solution of the problem."}),"\n",(0,i.jsxs)(s.h3,{id:"claim-exceptions",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#claim-exceptions",children:"#"}),"Claim Exceptions"]}),"\n",(0,i.jsx)(s.p,{children:"At this stage, some rules are not smart enough, and in most cases there will be great benefits, and in a few cases it may not apply. But if the entire rule is turned off or changed for these few cases, the gain is not worth the loss."}),"\n",(0,i.jsxs)(s.p,{children:["In this case, you can use the ",(0,i.jsx)(s.a,{href:"https://eslint.org/docs/user-guide/configuring/rules#disabling-rules",target:"_blank",rel:"nofollow",children:"eslint-disable"})," comment to mark the code blocks that meet the ",(0,i.jsx)(s.strong,{children:"rare case"}),", stating that this is an exception and should be ignored. For example:"]}),"\n",(0,i.jsxs)(s.div,{className:"language-js",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"/* eslint-disable filenames/match-exported */"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"/* eslint-enable filenames/match-exported */"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.div,{className:"modern-directive info",children:[(0,i.jsx)(s.p,{className:"modern-directive-title",children:"INFO"}),(0,i.jsx)(s.div,{className:"modern-directive-content",children:(0,i.jsxs)(s.p,{children:["\nEnter eslint in the VS Code editor, a prompt box about ",(0,i.jsx)(s.code,{children:"eslint-disable"}),"will automatically appear, select the prompt option to generate the corresponding comment pair."]})})]}),"\n",(0,i.jsxs)(s.p,{children:["[Modern.js ESLint Rule Set] requires that ",(0,i.jsx)(s.a,{href:"https://eslint.org/docs/user-guide/configuring/rules#disabling-rules",target:"_blank",rel:"nofollow",children:"eslint-disable"})," must be used in pairs, the scope to be affected must be clearly expressed, and what rules to disable within this scope must be clearly expressed, the purpose is to make ",(0,i.jsx)(s.strong,{children:"exceptions"})," Clear, minimized scope to avoid abuse of ",(0,i.jsx)(s.a,{href:"https://eslint.org/docs/user-guide/configuring/rules#disabling-rules",target:"_blank",rel:"nofollow",children:"eslint-disable"}),", resulting in code that does not belong to the exception being disabled by the rule."]}),"\n",(0,i.jsxs)(s.h2,{id:"q-how-to-customize-eslint-rules",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#q-how-to-customize-eslint-rules",children:"#"}),"Q: How to customize ESLint rules"]}),"\n",(0,i.jsxs)(s.h3,{id:"the-eslintconfig-field-in-packagejson-in-the-root-directory",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#the-eslintconfig-field-in-packagejson-in-the-root-directory",children:"#"}),"The ",(0,i.jsx)(s.code,{children:"eslintConfig"})," field in ",(0,i.jsx)(s.code,{children:"package.json"})," in the root directory"]}),"\n",(0,i.jsx)(s.p,{children:"This place is the default ESLint configuration for the entire repository and is designed for pure Node.js code (which can only run in Node.js)."}),"\n",(0,i.jsx)(s.p,{children:"If the project does have special requirements or inevitable compatibility issues with some rules (not exceptions), you can add rule configuration here. This configuration will take precedence over the default [Modern.js ESLint ruleset], such as:"}),"\n",(0,i.jsxs)(s.div,{className:"language-json",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"eslintConfig"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:": {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"extends"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"@modern-js"'})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    ]"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"rules"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"filenames/match-exported"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"off"'})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  },"})}),"\n",(0,i.jsx)(s.span,{className:"line"}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.h3,{id:"srceslintrcjs",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#srceslintrcjs",children:"#"}),(0,i.jsx)(s.code,{children:"src/.eslintrc.js"})]}),"\n",(0,i.jsx)(s.p,{children:"The application project and module project of Modern.js will have this configuration file by default in the source code directory, which is designed for Universal JS code."}),"\n",(0,i.jsxs)(s.div,{className:"modern-directive info",children:[(0,i.jsx)(s.p,{className:"modern-directive-title",children:"INFO"}),(0,i.jsx)(s.div,{className:"modern-directive-content",children:(0,i.jsx)(s.p,{children:"\nUniversal JS code is code that can run on both the browser side and the server side."})})]}),"\n",(0,i.jsx)(s.p,{children:"If the project does have special requirements or inevitable compatibility issues with some rules (not exceptions), you can add a rule configuration here, which will take precedence over the default [Modern.js ESLint ruleset], such as:"}),"\n",(0,i.jsxs)(s.div,{className:"language-js",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// eslint-disable-next-line import/no-commonjs"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"module"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"exports"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  root"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  extends"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js-app'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  parserOptions"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    tsconfigRootDir"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" __dirname"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    project"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'../tsconfig.json'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  rules"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'filenames/match-exported'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'off'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.p,{children:["If necessary, you can continue to add the ",(0,i.jsx)(s.code,{children:".eslintrc.js"})," file in different subdirectories, and make special configuration for the code in this subdirectory:"]}),"\n",(0,i.jsxs)(s.div,{className:"language-js",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"module"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"exports"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  rules"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'filenames/match-exported'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'off'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.div,{className:"modern-directive tip",children:[(0,i.jsx)(s.p,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(s.div,{className:"modern-directive-content",children:(0,i.jsxs)(s.p,{children:["\nNote: It is not necessary to use the ",(0,i.jsx)(s.code,{children:"extends"})," field, it will automatically inherit the configuration of the parent directory."]})})]}),"\n",(0,i.jsxs)(s.h3,{id:"eslintignore-field-in-packagejson",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#eslintignore-field-in-packagejson",children:"#"}),(0,i.jsx)(s.code,{children:"eslintIgnore"})," field in ",(0,i.jsx)(s.code,{children:"package.json"})]}),"\n",(0,i.jsxs)(s.p,{children:["Adding directories that contain ",(0,i.jsx)(s.code,{children:".js"}),", ",(0,i.jsx)(s.code,{children:".jsx"}),", ",(0,i.jsx)(s.code,{children:".ts"}),", ",(0,i.jsx)(s.code,{children:".tsx"})," files, but do not require code inspection and automatic repair, to ",(0,i.jsx)(s.code,{children:"eslintIgnore"})," can optimize the speed of ESLint inspection, such as:"]}),"\n",(0,i.jsxs)(s.div,{className:"language-json",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"eslintIgnore"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:": ["})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"node_modules"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"dist"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"output"'})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  ],"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.h2,{id:"q-how-to-upgrade-the-version-of-the-eslint-plugin",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#q-how-to-upgrade-the-version-of-the-eslint-plugin",children:"#"}),"Q: How to upgrade the version of the ESLint plugin"]}),"\n",(0,i.jsxs)(s.p,{children:['As long as it is not a change in the Major version (the "^" symbol that does not comply with the ',(0,i.jsx)(s.a,{href:"https://semver.org/",target:"_blank",rel:"nofollow",children:"Semver"})," rule), you can specify this dependency directly in the ",(0,i.jsx)(s.code,{children:"package.json"})," of the business project, delete the Lock file (or try to manually delete the Lock file). the contents of this package name in the file), execute ",(0,i.jsx)(s.code,{children:"pnpm install"})," to reinstall the dependency and generate a new Lock file."]}),"\n",(0,i.jsxs)(s.p,{children:["After doing this, the plugin should only exist in the ",(0,i.jsx)(s.code,{children:"./node_modules"})," directory of the business project and be upgraded to the version you specified."]}),"\n",(0,i.jsxs)(s.div,{className:"modern-directive tip",children:[(0,i.jsx)(s.p,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(s.div,{className:"modern-directive-content",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Major version is the major version number. For more information, please read [",(0,i.jsx)(s.a,{href:"https://semver.org/#summary",target:"_blank",rel:"nofollow",children:"Semantic Versioning"})," ]."]}),"\n",(0,i.jsxs)(s.li,{children:["All upstream projects encapsulated by Modern.js (such as ESLint, ",(0,i.jsx)(s.a,{href:"https://eslint.org/docs/user-guide/configuring/plugins#plugins",target:"_blank",rel:"nofollow",children:"ESLint plugin"}),", ",(0,i.jsx)(s.a,{href:"https://reactrouter.com/",target:"_blank",rel:"nofollow",children:"React Router"}),", etc.) can also be upgraded in this way."]}),"\n",(0,i.jsx)(s.li,{children:"Modern.js will also try to upgrade these upstream dependencies as timely as possible in each release."}),"\n",(0,i.jsx)(s.li,{children:"Major version upgrades need to be published by Modern.js."}),"\n"]})})]}),"\n",(0,i.jsxs)(s.h2,{id:"q-webstorm-sometimes-reports-eslint-errors",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#q-webstorm-sometimes-reports-eslint-errors",children:"#"}),"Q: WebStorm sometimes reports ESLint errors"]}),"\n",(0,i.jsxs)(s.p,{children:["Since WebStorm believes that the ESLint execution directory is determined based on the ",(0,i.jsx)(s.code,{children:".eslintrc'"})," file. Therefore, the placement of the ",(0,i.jsx)(s.code,{children:"src/.eslintrc"})," file location will cause the location specified by the ",(0,i.jsx)(s.code,{children:"tsconfig.json"})," file (in the project root directory) to not be found in the'src/'directory."]}),"\n",(0,i.jsx)(s.p,{children:"you need to configure it manually:"}),"\n",(0,i.jsxs)(s.div,{className:"language-json",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"--parser-options=project:../tsconfig.json"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/webstorm-lint-error.png",alt:"webstorm-lint-error"})})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=e.components||{};return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}}}]);