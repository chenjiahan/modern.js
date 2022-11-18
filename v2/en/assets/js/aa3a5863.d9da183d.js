"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2685],{44993:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>u});var a=t(52983);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=a.createContext({}),r=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=r(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),d=r(t),u=l,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||i;return t?a.createElement(m,o(o({ref:n},g),{},{components:t})):a.createElement(m,o({ref:n},g))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var r=2;r<i;r++)o[r]=t[r];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},86096:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>r});var a=t(18249),l=(t(52983),t(44993));const i={sidebar_position:6},o="\u81ea\u5b9a\u4e49 Changelog \u751f\u6210",s={unversionedId:"guides/topic-detail/changesets/changelog",id:"guides/topic-detail/changesets/changelog",title:"\u81ea\u5b9a\u4e49 Changelog \u751f\u6210",description:"Changesets \u9ed8\u8ba4\u4f1a\u4f7f\u7528 @changesets/cli/changelog \u751f\u6210 Changelog \u4fe1\u606f\uff0c\u5982\u679c\u9ed8\u8ba4\u7684 Changelog \u4fe1\u606f\u4e0d\u80fd\u6ee1\u8db3\u9700\u6c42\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49 Changelog \u7684\u751f\u6210\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/topic-detail/changesets/changelog.md",sourceDirName:"guides/topic-detail/changesets",slug:"/guides/topic-detail/changesets/changelog",permalink:"/v2/en/docs/guides/topic-detail/changesets/changelog",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"guidesSidebar",previous:{title:"Changesets \u914d\u7f6e\u6587\u4ef6",permalink:"/v2/en/docs/guides/topic-detail/changesets/config"},next:{title:"\u81ea\u5b9a\u4e49\u63d0\u4ea4 commit \u4fe1\u606f",permalink:"/v2/en/docs/guides/topic-detail/changesets/commit"}},c={},r=[{value:"\u81ea\u5b9a\u4e49 Changlog \u5185\u5bb9",id:"\u81ea\u5b9a\u4e49-changlog-\u5185\u5bb9",level:2},{value:"getReleaseLine",id:"getreleaseline",level:3},{value:"Params",id:"params",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:4},{value:"\u9ed8\u8ba4\u5b9e\u73b0",id:"\u9ed8\u8ba4\u5b9e\u73b0",level:4},{value:"getDependencyReleaseLine",id:"getdependencyreleaseline",level:3},{value:"Params",id:"params-1",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-1",level:4},{value:"\u9ed8\u8ba4\u5b9e\u73b0",id:"\u9ed8\u8ba4\u5b9e\u73b0-1",level:4},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u914d\u7f6e\u76f8\u5bf9\u8def\u5f84",id:"\u914d\u7f6e\u76f8\u5bf9\u8def\u5f84",level:3},{value:"\u4f7f\u7528\u6a21\u5757\u5de5\u7a0b\u65b9\u6848",id:"\u4f7f\u7528\u6a21\u5757\u5de5\u7a0b\u65b9\u6848",level:3},{value:"\u4f7f\u7528 <code>npx @modern-js/create</code> \u521b\u5efa\u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u3002",id:"\u4f7f\u7528-npx-modern-jscreate-\u521b\u5efa\u6a21\u5757\u5de5\u7a0b\u65b9\u6848",level:4},{value:"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5185\u5bb9\u3002",id:"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5185\u5bb9",level:4},{value:"\u5c06\u6a21\u5757\u53d1\u5e03\u5230 NPM\u3002",id:"\u5c06\u6a21\u5757\u53d1\u5e03\u5230-npm",level:4},{value:"\u5728\u76ee\u6807\u4ed3\u5e93\u6839\u76ee\u5f55\u5b89\u88c5\u5bf9\u5e94\u6a21\u5757\uff0c\u4f8b\u5982 <code>custom-changelog</code>\u3002",id:"\u5728\u76ee\u6807\u4ed3\u5e93\u6839\u76ee\u5f55\u5b89\u88c5\u5bf9\u5e94\u6a21\u5757\u4f8b\u5982-custom-changelog",level:4},{value:"\u914d\u7f6e changeset \u7684 changelog \u914d\u7f6e\u4e3a\u5305\u540d\u79f0\u3002",id:"\u914d\u7f6e-changeset-\u7684-changelog-\u914d\u7f6e\u4e3a\u5305\u540d\u79f0",level:4},{value:"\u4f7f\u7528 Monorepo \u5de5\u7a0b\u65b9\u6848",id:"\u4f7f\u7528-monorepo-\u5de5\u7a0b\u65b9\u6848",level:3},{value:"\u6267\u884c <code>pnpm run new</code> \u521b\u5efa\u6a21\u5757\u5b50\u9879\u76ee\u3002",id:"\u6267\u884c-pnpm-run-new-\u521b\u5efa\u6a21\u5757\u5b50\u9879\u76ee",level:4},{value:"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5185\u5bb9\u3002",id:"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5185\u5bb9-1",level:4},{value:"\u5728 Monorepo \u6839\u76ee\u5f55\u6dfb\u52a0\u5b50\u9879\u76ee\u6a21\u5757\u4f9d\u8d56\uff0c\u4f8b\u5982 <code>custom-changelog</code>\u3002",id:"\u5728-monorepo-\u6839\u76ee\u5f55\u6dfb\u52a0\u5b50\u9879\u76ee\u6a21\u5757\u4f9d\u8d56\u4f8b\u5982-custom-changelog",level:4},{value:"\u914d\u7f6e changeset \u7684 changelog \u914d\u7f6e\u4e3a\u5305\u540d\u79f0\u3002",id:"\u914d\u7f6e-changeset-\u7684-changelog-\u914d\u7f6e\u4e3a\u5305\u540d\u79f0-1",level:4}],g={toc:r};function p(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u81ea\u5b9a\u4e49-changelog-\u751f\u6210"},"\u81ea\u5b9a\u4e49 Changelog \u751f\u6210"),(0,l.kt)("p",null,"Changesets \u9ed8\u8ba4\u4f1a\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"@changesets/cli/changelog")," \u751f\u6210 Changelog \u4fe1\u606f\uff0c\u5982\u679c\u9ed8\u8ba4\u7684 Changelog \u4fe1\u606f\u4e0d\u80fd\u6ee1\u8db3\u9700\u6c42\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49 Changelog \u7684\u751f\u6210\u3002"),(0,l.kt)("h2",{id:"\u81ea\u5b9a\u4e49-changlog-\u5185\u5bb9"},"\u81ea\u5b9a\u4e49 Changlog \u5185\u5bb9"),(0,l.kt)("p",null,"Changelog \u4fe1\u606f\u4e3b\u8981\u5305\u542b\u4ee5\u4e0b\u4e24\u79cd\u4fe1\u606f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"changeset \u4e2d\u5199\u5165\u7684 Changelog \u4fe1\u606f\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u672c\u6b21\u7248\u672c\u5347\u7ea7\u5173\u8054\u5305\u7684\u7248\u672c\u53d8\u66f4\u4fe1\u606f\u3002"))),(0,l.kt)("p",null,"\u81ea\u5b9a\u4e49\u903b\u8f91\u4e3b\u8981\u5b9e\u73b0\u4e24\u4e2a\u51fd\u6570\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"getReleaseLine")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"getDependencyReleaseLine"),"\uff0c\u5206\u522b\u7528\u6765\u5b9a\u4e49\u4e0a\u8ff0\u8fd9\u4e24\u79cd\u4fe1\u606f\u3002"),(0,l.kt)("h3",{id:"getreleaseline"},"getReleaseLine"),(0,l.kt)("h4",{id:"params"},"Params"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"changeset")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'export type VersionType = "major" | "minor" | "patch" | "none";\n\nexport type Release = { name: string; type: VersionType };\n\nexport type Changeset = {\n  id: string; // changeset \u7684\u6587\u4ef6\u540d\u79f0\n  commit?: string; // changeset \u63d0\u4ea4\u65f6\u7684 commit id \u4fe1\u606f\n  summary: string; // changeset \u5185\u5bb9\u4fe1\u606f\n  releases: Array<Release>; // \u5f53\u524d\u8ba1\u7b97\u51fa\u7684 changeset \u5347\u7ea7\u5305\u540d\u79f0\u53ca\u7c7b\u578b\u4fe1\u606f\n};\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type")),(0,l.kt)("p",null,"\u5f53\u524d\u5305\u5bf9\u5e94\u7684\u5347\u7ea7\u7248\u672c\u7c7b\u578b\uff0c\u7c7b\u578b\u4e3a\u4e0a\u8ff0 ",(0,l.kt)("inlineCode",{parentName:"p"},"VersionType"),"\u3002"),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,l.kt)("p",null,"Changelog \u5185\u5bb9\u3002"),(0,l.kt)("h4",{id:"\u9ed8\u8ba4\u5b9e\u73b0"},"\u9ed8\u8ba4\u5b9e\u73b0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@changesets/cli/changelog")," \u9ed8\u8ba4\u5904\u7406\u903b\u8f91\u4e3a\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"summary")," \u4fe1\u606f\u6309\u7167\u6362\u884c\u7b26 ",(0,l.kt)("inlineCode",{parentName:"p"},"\\n")," \u5206\u5272\uff0c\u7b2c\u4e00\u6837\u524d\u9762\u589e\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"-")," \u4f5c\u4e3a\u5217\u8868\u5f00\u5934\uff0c\u5176\u4ed6\u5185\u5bb9\u4f5c\u4e3a\u7b2c\u4e00\u884c\u5185\u5bb9\u7684\u8865\u5145\u6574\u7406\u5728\u5217\u8868\u4e0b\u65b9\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"async function getReleaseLine(changeset, type) {\n  const [firstLine, ...futureLines] = changeset.summary\n    .split('\\n')\n    .map(l => l.trimRight());\n\n  let returnVal = `- ${\n    changeset.commit ? `${changeset.commit}: ` : ''\n  }${firstLine}`;\n\n  if (futureLines.length > 0) {\n    returnVal += `\\n${futureLines.map(l => `  ${l}`).join('\\n')}`;\n  }\n\n  return returnVal;\n}\n")),(0,l.kt)("h3",{id:"getdependencyreleaseline"},"getDependencyReleaseLine"),(0,l.kt)("h4",{id:"params-1"},"Params"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"changesets")),(0,l.kt)("p",null,"\u5f53\u524d\u5173\u8054\u7684\u6240\u6709 changeset \u4fe1\u606f\uff0c\u7c7b\u578b\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"getReleaseLine")," changeset \u7c7b\u578b\u6570\u7ec4\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"dependenciesUpdated")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"type ModCompWithPackage = {\n    name: string; // \u4f9d\u8d56\u6a21\u5757\u540d\u79f0\n    type: VersionType; // \u4f9d\u8d56\u6a21\u5757\u7684\u5347\u7ea7\u7c7b\u578b\n    oldVersion: string; // \u4f9d\u8d56\u6a21\u5757\u5f53\u524d\u7248\u672c\u53f7\n    newVersion: string; // \u4f9d\u8d56\u6a21\u5757\u65b0\u7248\u672c\u53f7\n    changesets: string[]; // \u5173\u8054\u7684 changeset id \u5217\u8868\n    packageJson: PackageJSON; // \u4f9d\u8d56\u6a21\u5757\u5b8c\u6574\u7684 package.json \u5185\u5bb9\n    dir: string; // \u4f9d\u8d56\u6a21\u5757\u7684\u8def\u5f84(\u7edd\u5bf9\u8def\u5f84)\n};\n\ntype DependenciesUpdated = ModCompWithPackage[]\n")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,l.kt)("p",null,"Changelog \u5185\u5bb9\u3002"),(0,l.kt)("h4",{id:"\u9ed8\u8ba4\u5b9e\u73b0-1"},"\u9ed8\u8ba4\u5b9e\u73b0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@changesets/cli/changelog")," \u9ed8\u8ba4\u4f1a\u4f7f\u7528 changesets \u4fe1\u606f\u5c55\u793a\u5bf9\u5e94\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Updated dependencies + commit id"),"\uff0c\u4ee5\u5217\u8868\u5f62\u5f0f\u5c55\u793a\u3002\u7136\u540e\u6839\u636e ",(0,l.kt)("inlineCode",{parentName:"p"},"dependenciesUpdated")," \u4fe1\u606f\u5c55\u793a\u5bf9\u5e94\u7684\u4f9d\u8d56\u5305\u5305\u540d\u548c\u65b0\u7248\u672c\u53f7\uff0c\u4f5c\u4e3a\u5217\u8868\u7684\u5b50\u5217\u8868\u9879\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'async function getDependencyReleaseLine(changesets, dependenciesUpdated) {\n    console.log("getDependencyReleaseLine", changesets, dependenciesUpdated)\n    if (dependenciesUpdated.length === 0) return "";\n\n    const changesetLinks = changesets.map(\n      changeset =>\n        `- Updated dependencies${\n          changeset.commit ? ` [${changeset.commit}]` : ""\n        }`\n    );\n\n    const updatedDepenenciesList = dependenciesUpdated.map(\n      dependency => `  - ${dependency.name}@${dependency.newVersion}`\n    );\n\n    return [...changesetLinks, ...updatedDepenenciesList].join("\\n");\n}\n')),(0,l.kt)("p",null,"\u5c55\u793a\u6548\u679c\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"- Updated dependencies [f0438ab]\n- Updated dependencies [f0438ab]\n  - module-3@2.0.0\n  - module-1@0.2.0\n")),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("p",null,"Changesets \u914d\u7f6e\u6587\u4ef6\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"changelog")," \u5b57\u6bb5\uff0c\u8be5\u5b57\u6bb5\u7528\u4e8e\u6807\u8bb0 Changelog \u4fe1\u606f\u7684\u83b7\u53d6\u9014\u5f84\u3002"),(0,l.kt)("p",null,"\u8be5\u914d\u7f6e\u53ef\u4ee5\u4e3a\u5b57\u7b26\u4e32\uff0c\u76f4\u63a5\u58f0\u660e\u83b7\u53d6 Changelog \u4fe1\u606f\u6a21\u5757\u7684\u6a21\u5757\u540d\u79f0\u6216\u8005\u8def\u5f84\u3002"),(0,l.kt)("p",null,"\u8be5\u914d\u7f6e\u8fd8\u652f\u6301\u914d\u7f6e\u6570\u7ec4\uff0c\u6570\u7ec4\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e3a\u83b7\u53d6 Changelog \u4fe1\u606f\u6a21\u5757\u7684\u6a21\u5757\u540d\u79f0\u6216\u8005\u8def\u5f84\uff0c\u7b2c\u4e8c\u4e2a\u5143\u7d20\u4e3a\u4f20\u5165\u5bf9\u5e94\u51fd\u6570\u7684\u53c2\u6570\u503c\uff0c\u4f1a\u4f5c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"getReleaseLine")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"getDependencyReleaseLine")," \u51fd\u6570\u7684\u7b2c\u4e09\u4e2a\u53c2\u6570\u4f20\u5165\u3002"),(0,l.kt)("h3",{id:"\u914d\u7f6e\u76f8\u5bf9\u8def\u5f84"},"\u914d\u7f6e\u76f8\u5bf9\u8def\u5f84"),(0,l.kt)("p",null,"changelog \u914d\u7f6e\u5982\u679c\u4e3a\u76f8\u5bf9\u8def\u5f84\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},".changesets")," \u76ee\u5f55\u4e0b\u7684\u76f8\u5bf9\u8def\u5f84\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},".changeset/my-changelog-config.js")," \u6587\u4ef6\uff0c\u5b9a\u4e49\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title=".changeset/my-changelog-config.js"',title:'".changeset/my-changelog-config.js"'},"async function getReleaseLine(changeset, type) {}\n\nasync function getDependencyReleaseLine(changesets, dependenciesUpdated) {}\n\nmodule.exports = {\n  getReleaseLine,\n  getDependencyReleaseLine,\n};\n\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"changlog")," \u914d\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"./my-changelog-config.js")," \u5373\u53ef:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".changesets/config.json"',title:'".changesets/config.json"'},'{\n  "changelog": "./my-changelog-config.js",\n   ...\n}\n')),(0,l.kt)("h3",{id:"\u4f7f\u7528\u6a21\u5757\u5de5\u7a0b\u65b9\u6848"},"\u4f7f\u7528\u6a21\u5757\u5de5\u7a0b\u65b9\u6848"),(0,l.kt)("p",null,"\u81ea\u5b9a\u4e49 Changelog \u8fd8\u53ef\u4ee5\u4f7f\u7528\u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u8fdb\u884c\u7ba1\u7406\uff0c\u63d0\u4f9b\u901a\u7528\u65b9\u6848\u3002"),(0,l.kt)("h4",{id:"\u4f7f\u7528-npx-modern-jscreate-\u521b\u5efa\u6a21\u5757\u5de5\u7a0b\u65b9\u6848"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"h4"},"npx @modern-js/create")," \u521b\u5efa\u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u521b\u5efa\u7684\u5de5\u7a0b\u7c7b\u578b \u6a21\u5757\n? \u8bf7\u586b\u5199\u9879\u76ee\u540d\u79f0 custom-changelog\n? \u8bf7\u9009\u62e9\u5f00\u53d1\u8bed\u8a00 TS\n? \u8bf7\u9009\u62e9\u5305\u7ba1\u7406\u5de5\u5177 pnpm\n")),(0,l.kt)("h4",{id:"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5185\u5bb9"},"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5185\u5bb9\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/index.ts"',title:'"src/index.ts"'},"export async function getReleaseLine() {}\n\nexport async function getDependencyReleaseLine() {}\n")),(0,l.kt)("h4",{id:"\u5c06\u6a21\u5757\u53d1\u5e03\u5230-npm"},"\u5c06\u6a21\u5757\u53d1\u5e03\u5230 NPM\u3002"),(0,l.kt)("h4",{id:"\u5728\u76ee\u6807\u4ed3\u5e93\u6839\u76ee\u5f55\u5b89\u88c5\u5bf9\u5e94\u6a21\u5757\u4f8b\u5982-custom-changelog"},"\u5728\u76ee\u6807\u4ed3\u5e93\u6839\u76ee\u5f55\u5b89\u88c5\u5bf9\u5e94\u6a21\u5757\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"h4"},"custom-changelog"),"\u3002"),(0,l.kt)("h4",{id:"\u914d\u7f6e-changeset-\u7684-changelog-\u914d\u7f6e\u4e3a\u5305\u540d\u79f0"},"\u914d\u7f6e changeset \u7684 changelog \u914d\u7f6e\u4e3a\u5305\u540d\u79f0\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".changesets/config.json"',title:'".changesets/config.json"'},'{\n  "changelog": "custom-changelog",\n   ...\n}\n')),(0,l.kt)("h3",{id:"\u4f7f\u7528-monorepo-\u5de5\u7a0b\u65b9\u6848"},"\u4f7f\u7528 Monorepo \u5de5\u7a0b\u65b9\u6848"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5f53\u524d\u4ed3\u5e93\u4e3a Monorepo \u5de5\u7a0b\u65b9\u6848\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u6a21\u5757\u5b50\u9879\u76ee\u8fdb\u884c\u7ba1\u7406\u3002"),(0,l.kt)("h4",{id:"\u6267\u884c-pnpm-run-new-\u521b\u5efa\u6a21\u5757\u5b50\u9879\u76ee"},"\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"h4"},"pnpm run new")," \u521b\u5efa\u6a21\u5757\u5b50\u9879\u76ee\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u521b\u5efa\u7684\u5de5\u7a0b\u7c7b\u578b \u6a21\u5757\n? \u8bf7\u586b\u5199\u5b50\u9879\u76ee\u540d\u79f0 custom-changelog\n? \u8bf7\u586b\u5199\u5b50\u9879\u76ee\u76ee\u5f55\u540d\u79f0 custom-changelog\n? \u8bf7\u9009\u62e9\u5f00\u53d1\u8bed\u8a00 TS\n")),(0,l.kt)("h4",{id:"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5185\u5bb9-1"},"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5185\u5bb9\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/index.ts"',title:'"src/index.ts"'},"export async function getReleaseLine() {}\n\nexport async function getDependencyReleaseLine() {}\n")),(0,l.kt)("h4",{id:"\u5728-monorepo-\u6839\u76ee\u5f55\u6dfb\u52a0\u5b50\u9879\u76ee\u6a21\u5757\u4f9d\u8d56\u4f8b\u5982-custom-changelog"},"\u5728 Monorepo \u6839\u76ee\u5f55\u6dfb\u52a0\u5b50\u9879\u76ee\u6a21\u5757\u4f9d\u8d56\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"h4"},"custom-changelog"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "devDependencies": {\n    "custom-changelog": "workspace: *",\n    ...\n  }\n}\n')),(0,l.kt)("h4",{id:"\u914d\u7f6e-changeset-\u7684-changelog-\u914d\u7f6e\u4e3a\u5305\u540d\u79f0-1"},"\u914d\u7f6e changeset \u7684 changelog \u914d\u7f6e\u4e3a\u5305\u540d\u79f0\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".changesets/config.json"',title:'".changesets/config.json"'},'{\n  "changelog": "custom-changelog",\n   ...\n}\n')),(0,l.kt)("p",null,"\u8be5\u6a21\u5757\u53d1\u5e03\u5230 NPM \u540e\uff0c\u4f9d\u7136\u53ef\u4ee5\u548c\u6a21\u5757\u7c7b\u578b\u4e00\u6837\u4f9b\u5176\u4ed6\u4ed3\u5e93\u4f7f\u7528\u3002"))}p.isMDXComponent=!0}}]);