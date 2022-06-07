"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[56,2899],{54852:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var a=t(49231);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),c=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(m.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},l=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=c(t),u=r,g=l["".concat(m,".").concat(u)]||l[u]||d[u]||o;return t?a.createElement(g,p(p({ref:n},s),{},{components:t})):a.createElement(g,p({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=l;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var c=2;c<o;c++)p[c]=t[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},90023:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return m},metadata:function(){return s},toc:function(){return l}});var a=t(91528),r=t(2854),o=(t(49231),t(54852)),p=t(739),i=["components"],m={sidebar_position:3},c=void 0,s={unversionedId:"apis/commands/monorepo/pre",id:"apis/commands/monorepo/pre",title:"pre",description:"\u53ef\u4ee5\u4f7f\u7528 modern pre \u547d\u4ee4\u5728\u6b63\u5f0f\u53d1\u5e03\u524d\u9884\u53d1\u5e03\u4e00\u4e2a\u7248\u672c\u3002",source:"@site/docs/apis/commands/monorepo/pre.md",sourceDirName:"apis/commands/monorepo",slug:"/apis/commands/monorepo/pre",permalink:"/docs/apis/commands/monorepo/pre",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apisSidebar",previous:{title:"change",permalink:"/docs/apis/commands/monorepo/change"},next:{title:"bump",permalink:"/docs/apis/commands/monorepo/bump"}},d={},l=[],u={toc:l};function g(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: modern pre [options] <enter|exit> [tag]\n\n\u8fdb\u5165\u548c\u9000\u51fa\u9884\u53d1\u5e03\u6a21\u5f0f\n\nOptions:\n  -h, --help  display help for command\n")),(0,o.kt)(p.default,{mdxType:"CommandTip"}),(0,o.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern pre")," \u547d\u4ee4\u5728\u6b63\u5f0f\u53d1\u5e03\u524d",(0,o.kt)("a",{parentName:"p",href:"https://github.com/atlassian/changesets/blob/main/docs/prereleases.md"},"\u9884\u53d1\u5e03"),"\u4e00\u4e2a\u7248\u672c\u3002"),(0,o.kt)("p",null,"\u9996\u5148 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern pre enter <tag>")," \u8fdb\u5165\u9884\u53d1\u5e03\u6a21\u5f0f:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx modern pre enter next\n\ud83e\udd8b  success Entered pre mode with tag next\n\ud83e\udd8b  info Run `changeset version` to version packages with prerelease versions\n")),(0,o.kt)("p",null,"\u4e4b\u540e\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern change")," \u547d\u4ee4\u6dfb\u52a0 changeset:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx modern change\n\ud83e\udd8b  Which packages would you like to include? \xb7 package-a, package-b\n\ud83e\udd8b  Which packages should have a major bump? \xb7 No items were selected\n\ud83e\udd8b  Which packages should have a minor bump? \xb7 No items were selected\n\ud83e\udd8b  The following packages will be patch bumped:\n\ud83e\udd8b  package-a@0.1.1\n\ud83e\udd8b  package-b@0.1.1\n\ud83e\udd8b  Please enter a summary for this change (this will be in the changelogs). Submit empty line to open external editor\n\ud83e\udd8b  Summary \xb7 test pre publish\n\ud83e\udd8b  === Releasing the following packages ===\n\ud83e\udd8b  [Patch]\n\ud83e\udd8b    package-a, package-b\n\ud83e\udd8b  \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n\ud83e\udd8b  \u2551                                                      ========= NOTE ========                                                       \u2551\n\ud83e\udd8b  \u2551All dependents of these packages that will be incompatible with the new version will be patch bumped when this changeset is applied.\u2551\n\ud83e\udd8b  \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d\n\ud83e\udd8b  Is this your desired changeset? (Y/n) \xb7 true\n\ud83e\udd8b  Changeset added! - you can now commit it\n\ud83e\udd8b\n\ud83e\udd8b  If you want to modify or expand on the changeset summary, you can find it here\n\ud83e\udd8b  info /xxxxxx/monorepo/.changeset/beige-paws-rule.md\n")),(0,o.kt)("p",null,"\u63a5\u7740\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern bump")," \u547d\u4ee4\u66f4\u65b0\u5177\u4f53\u7684\u7248\u672c\u53f7\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx modern bump\n\ud83e\udd8b  warn ===============================IMPORTANT!===============================\n\ud83e\udd8b  warn You are in prerelease mode\n\ud83e\udd8b  warn If you meant to do a normal release you should revert these changes and run `changeset pre exit`\n\ud83e\udd8b  warn You can then run `changeset version` again to do a normal release\n\ud83e\udd8b  warn ----------------------------------------------------------------------\n\ud83e\udd8b  All files have been updated. Review them and commit at your leisure\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u770b\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"package-a")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"package-b")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7248\u672c\u53f7\u5747\u5df2\u66f4\u65b0\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"0.1.2-next.0"),"\u3002"),(0,o.kt)("p",null,"\u63d0\u4ea4\u5b8c\u53d8\u66f4\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern pre exit")," \u547d\u4ee4\u9000\u51fa\u9884\u53d1\u5e03\u6a21\u5f0f\u3002"))}g.isMDXComponent=!0},739:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var a=t(91528),r=t(2854),o=(t(49231),t(54852)),p=["components"],i={},m=void 0,c={unversionedId:"components/command-tip",id:"components/command-tip",title:"command-tip",description:"Yarn \u548c pnpm \u8c03\u7528\u547d\u4ee4\u65f6\u63a5\u6536\u53c2\u6570\u7684\u65b9\u5f0f\u4e0d\u540c\uff0c\u4f8b\u5982\uff0c\u5728\u5982\u4e0b package.json \u914d\u7f6e\u4e2d\uff1a",source:"@site/docs/components/command-tip.md",sourceDirName:"components",slug:"/components/command-tip",permalink:"/docs/components/command-tip",tags:[],version:"current",frontMatter:{}},s={},d=[],l={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Yarn \u548c pnpm \u8c03\u7528\u547d\u4ee4\u65f6\u63a5\u6536\u53c2\u6570\u7684\u65b9\u5f0f\u4e0d\u540c\uff0c\u4f8b\u5982\uff0c\u5728\u5982\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e\u4e2d\uff1a"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n')),(0,o.kt)("p",{parentName:"div"},"\u5f53\u9700\u8981\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"modern command --option"),"\uff1a"),(0,o.kt)("p",{parentName:"div"},"\u4f7f\u7528 Yarn \u65f6\uff0c\u9700\u8981\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn command --option"),"\u3002"),(0,o.kt)("p",{parentName:"div"},"\u4f7f\u7528 pnpm \u65f6\uff0c\u9700\u8981\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run command -- --option"),"\u3002"),(0,o.kt)("p",{parentName:"div"},"\u8fd9\u662f\u56e0\u4e3a pnpm \u5bf9\u4e8e\u547d\u4ee4\u53c2\u6570\u7684\u5904\u7406\u4e0e Yarn \u5e76\u4e0d\u76f8\u540c\uff0c\u4f46\u662f\u4e0e npm \u7c7b\u4f3c\uff1a\u5728\u4e0d\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f pnpm \u7684\u53c2\u6570\uff1b\u5728\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f\u6267\u884c\u811a\u672c\u7684\u53c2\u6570\u3002"),(0,o.kt)("p",{parentName:"div"},"\u5728\u4e0a\u8ff0\u4f8b\u5b50\u91cc\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"--option")," \u4f20\u9012\u7ed9\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern command"),"\u3002\u5982\u679c\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run command --option"),"\uff0c\u5219\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"--option")," \u5c06\u4f20\u9012\u7ed9 pnpm\u3002"),(0,o.kt)("p",{parentName:"div"},"\u603b\u7ed3\u6765\u8bf4\uff1a"),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"\u5728\u4f7f\u7528 pnpm \u65f6\uff0c\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u7ed9 pnpm\uff0c\u4e0d\u9700\u8981\u52a0 ",(0,o.kt)("inlineCode",{parentName:"strong"},"--"),"\uff1b\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u662f\u7ed9\u811a\u672c\u4f7f\u7528\uff0c\u9700\u8981\u589e\u52a0 ",(0,o.kt)("inlineCode",{parentName:"strong"},"--")," \u5b57\u7b26\u4e32"),"\u3002"))))}u.isMDXComponent=!0}}]);