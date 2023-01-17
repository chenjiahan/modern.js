"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[9929,5688,4395,3059,2855],{90695:function(e,n,s){s.r(n),s.d(n,{content:function(){return x},frontmatter:function(){return p},title:function(){return j},toc:function(){return h}});var l=s(39980),r=s(90428),c=s(21366),o=s(210),a=s(54114),i=s(30659),t=s(33567),d=s(82603);const p={extractApiHeaders:[2]},h=[{id:"performancebuildcache",text:"performance.buildCache",depth:2},{id:"performancebundleanalyze",text:"performance.bundleAnalyze",depth:2},{id:"performancechunksplit",text:"performance.chunkSplit",depth:2},{id:"performanceprintfilesize",text:"performance.printFileSize",depth:2},{id:"performanceprofile",text:"performance.profile",depth:2},{id:"performanceremoveconsole",text:"performance.removeConsole",depth:2},{id:"performanceremovemomentlocale",text:"performance.removeMomentLocale",depth:2}],j="Performance Config",x="\"---\\nextractApiHeaders: [2]\\n---\\n\\n# Performance Config\\n\\n\u672c\u7ae0\u8282\u63cf\u8ff0\u4e86 Builder \u4e2d\u4e0e\u6027\u80fd\u6709\u5173\u7684\u914d\u7f6e\u3002\\n\\n## performance.buildCache\\n\\nimport BuildCache from '@zh/config/performance/buildCache.md';\\n\\n<BuildCache />\\n\\n## performance.bundleAnalyze\\n\\nimport BundleAnalyze from '@zh/config/performance/bundleAnalyze.md';\\n\\n<BundleAnalyze />\\n\\n## performance.chunkSplit\\n\\nimport ChunkSplit from '@zh/config/performance/chunkSplit.md';\\n\\n<ChunkSplit />\\n\\n## performance.printFileSize\\n\\nimport PrintFileSize from '@zh/config/performance/printFileSize.md';\\n\\n<PrintFileSize />\\n\\n## performance.profile\\n\\nimport Profile from '@zh/config/performance/profile.md';\\n\\n<Profile />\\n\\n## performance.removeConsole\\n\\nimport RemoveConsole from '@zh/config/performance/removeConsole.md';\\n\\n<RemoveConsole />\\n\\n## performance.removeMomentLocale\\n\\nimport RemoveMomentLocale from '@zh/config/performance/removeMomentLocale.md';\\n\\n<RemoveMomentLocale />\\n\"";function m(e){const n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2"},e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"performance-config",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performance-config",children:"#"}),"Performance Config"]}),"\n",(0,l.jsx)(n.p,{children:"\u672c\u7ae0\u8282\u63cf\u8ff0\u4e86 Builder \u4e2d\u4e0e\u6027\u80fd\u6709\u5173\u7684\u914d\u7f6e\u3002"}),"\n",(0,l.jsxs)(n.h2,{id:"performancebuildcache",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performancebuildcache",children:"#"}),"performance.buildCache"]}),"\n","\n",(0,l.jsx)(r.default,{}),"\n",(0,l.jsxs)(n.h2,{id:"performancebundleanalyze",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performancebundleanalyze",children:"#"}),"performance.bundleAnalyze"]}),"\n","\n",(0,l.jsx)(c.default,{}),"\n",(0,l.jsxs)(n.h2,{id:"performancechunksplit",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performancechunksplit",children:"#"}),"performance.chunkSplit"]}),"\n","\n",(0,l.jsx)(o.default,{}),"\n",(0,l.jsxs)(n.h2,{id:"performanceprintfilesize",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performanceprintfilesize",children:"#"}),"performance.printFileSize"]}),"\n","\n",(0,l.jsx)(a.default,{}),"\n",(0,l.jsxs)(n.h2,{id:"performanceprofile",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performanceprofile",children:"#"}),"performance.profile"]}),"\n","\n",(0,l.jsx)(i.default,{}),"\n",(0,l.jsxs)(n.h2,{id:"performanceremoveconsole",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performanceremoveconsole",children:"#"}),"performance.removeConsole"]}),"\n","\n",(0,l.jsx)(t.default,{}),"\n",(0,l.jsxs)(n.h2,{id:"performanceremovemomentlocale",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performanceremovemomentlocale",children:"#"}),"performance.removeMomentLocale"]}),"\n","\n",(0,l.jsx)(d.default,{})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(m,e)})):m(e)}},21366:function(e,n,s){s.r(n),s.d(n,{content:function(){return o},frontmatter:function(){return r},toc:function(){return c}});var l=s(39980);const r=void 0,c=[],o="\"- Type: `Object | undefined`\\n\\n\u4f60\u6709\u4e24\u79cd\u65b9\u5f0f\u5f00\u542f `webpack-bundle-analyzer` \u6765\u5206\u6790\u6784\u5efa\u4ea7\u7269\u7684\u4f53\u79ef:\\n\\n- \u6dfb\u52a0\u73af\u5883\u53d8\u91cf `BUNDLE_ANALYZE=true`\uff1b\\n- \u914d\u7f6e `performance.bundleAnalyze`\u3002\\n\\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e0d\u4f1a\u5f00\u542f `webpack-bundle-analyzer`\uff0c\u5f53\u5f00\u542f\u4e4b\u540e\u5b83\u7684\u914d\u7f6e\u5982\u4e0b:\\n\\n```js\\n{\\n  analyzerMode: 'static',\\n  openAnalyzer: false,\\n  // target \u4e3a\u7f16\u8bd1\u76ee\u6807\uff0c\u5982 `web`\u3001`node` \u7b49\\n  reportFilename: `report-${target}.html`,\\n}\\n```\\n\\n\u4f60\u53ef\u4ee5\u901a\u8fc7 `performance.bundleAnalyze` \u6765\u8986\u76d6\u9ed8\u8ba4\u914d\u7f6e\uff0c\u6bd4\u5982\uff1a\\n\\n```js\\nexport default {\\n  performance: {\\n    bundleAnalyze: {\\n      analyzerMode: 'server',\\n      openAnalyzer: true,\\n    },\\n  },\\n};\\n```\\n\"";function a(e){const n=Object.assign({ul:"ul",li:"li",code:"code",p:"p",div:"div",button:"button",pre:"pre",span:"span"},e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Type: ",(0,l.jsx)(n.code,{children:"Object | undefined"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4f60\u6709\u4e24\u79cd\u65b9\u5f0f\u5f00\u542f ",(0,l.jsx)(n.code,{children:"webpack-bundle-analyzer"})," \u6765\u5206\u6790\u6784\u5efa\u4ea7\u7269\u7684\u4f53\u79ef:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u6dfb\u52a0\u73af\u5883\u53d8\u91cf ",(0,l.jsx)(n.code,{children:"BUNDLE_ANALYZE=true"}),"\uff1b"]}),"\n",(0,l.jsxs)(n.li,{children:["\u914d\u7f6e ",(0,l.jsx)(n.code,{children:"performance.bundleAnalyze"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e0d\u4f1a\u5f00\u542f ",(0,l.jsx)(n.code,{children:"webpack-bundle-analyzer"}),"\uff0c\u5f53\u5f00\u542f\u4e4b\u540e\u5b83\u7684\u914d\u7f6e\u5982\u4e0b:"]}),"\n",(0,l.jsxs)(n.div,{className:"language-js",children:[(0,l.jsx)(n.div,{className:""}),(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(n.code,{children:[(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  analyzerMode"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#A3BE8C"},children:"static"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  openAnalyzer"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"false"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"#616E88"},children:"// target \u4e3a\u7f16\u8bd1\u76ee\u6807\uff0c\u5982 `web`\u3001`node` \u7b49"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  reportFilename"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"`"}),(0,l.jsx)(n.span,{style:{color:"#A3BE8C"},children:"report-"}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"${"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9"},children:"target"}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"}"}),(0,l.jsx)(n.span,{style:{color:"#A3BE8C"},children:".html"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"`"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"}"})}),"\n",(0,l.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:"performance.bundleAnalyze"})," \u6765\u8986\u76d6\u9ed8\u8ba4\u914d\u7f6e\uff0c\u6bd4\u5982\uff1a"]}),"\n",(0,l.jsxs)(n.div,{className:"language-js",children:[(0,l.jsx)(n.div,{className:""}),(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(n.code,{children:[(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"#88C0D0"},children:"performance"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"#88C0D0"},children:"bundleAnalyze"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(n.span,{style:{color:"#88C0D0"},children:"analyzerMode"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#A3BE8C"},children:"server"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(n.span,{style:{color:"#88C0D0"},children:"openAnalyzer"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"true"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(n.span,{className:"line"})]})})]})]})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(a,e)})):a(e)}},54114:function(e,n,s){s.r(n),s.d(n,{content:function(){return o},frontmatter:function(){return r},toc:function(){return c}});var l=s(39980);const r=void 0,c=[{id:"\u793a\u4f8b",text:"\u793a\u4f8b",depth:4}],o='"- Type: `boolean`\\n- Default: `true`\\n\\n\u662f\u5426\u5728\u751f\u4ea7\u73af\u5883\u6784\u5efa\u540e\u8f93\u51fa\u6240\u6709\u9759\u6001\u8d44\u6e90\u6587\u4ef6\u7684\u4f53\u79ef\u3002\\n\\n```bash\\ninfo    File sizes after production build:\\n\\n  File                                     Size         Gzipped\\n  dist/static/js/lib-corejs.1c836fe7.js    212.89 kB    66.57 kB\\n  dist/static/js/lib-react.fcafbc5c.js     134.65 kB    43.45 kB\\n  dist/static/js/main.6ff06f70.js          8.93 kB      3.73 kB\\n  dist/static/css/main.9f48031b.css        2.64 kB      927 B\\n  dist/html/main/index.html                1.64 kB      874 B\\n```\\n\\n#### \u793a\u4f8b\\n\\n\u7981\u7528\u76f8\u5173\u65e5\u5fd7\uff1a\\n\\n```ts\\nexport default {\\n  performance: {\\n    printFileSize: false,\\n  },\\n};\\n```\\n"';function a(e){const n=Object.assign({ul:"ul",li:"li",code:"code",p:"p",div:"div",button:"button",pre:"pre",span:"span",h4:"h4",a:"a"},e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Type: ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(n.li,{children:["Default: ",(0,l.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u662f\u5426\u5728\u751f\u4ea7\u73af\u5883\u6784\u5efa\u540e\u8f93\u51fa\u6240\u6709\u9759\u6001\u8d44\u6e90\u6587\u4ef6\u7684\u4f53\u79ef\u3002"}),"\n",(0,l.jsxs)(n.div,{className:"language-bash",children:[(0,l.jsx)(n.div,{className:""}),(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(n.code,{children:[(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"info    File sizes after production build:"})}),"\n",(0,l.jsx)(n.span,{className:"line"}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  File                                     Size         Gzipped"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  dist/static/js/lib-corejs.1c836fe7.js    212.89 kB    66.57 kB"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  dist/static/js/lib-react.fcafbc5c.js     134.65 kB    43.45 kB"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  dist/static/js/main.6ff06f70.js          8.93 kB      3.73 kB"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  dist/static/css/main.9f48031b.css        2.64 kB      927 B"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  dist/html/main/index.html                1.64 kB      874 B"})}),"\n",(0,l.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(n.h4,{id:"\u793a\u4f8b",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793a\u4f8b",children:"#"}),"\u793a\u4f8b"]}),"\n",(0,l.jsx)(n.p,{children:"\u7981\u7528\u76f8\u5173\u65e5\u5fd7\uff1a"}),"\n",(0,l.jsxs)(n.div,{className:"language-ts",children:[(0,l.jsx)(n.div,{className:""}),(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(n.code,{children:[(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9"},children:"performance"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9"},children:"printFileSize"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"false"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(n.span,{className:"line"})]})})]})]})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(a,e)})):a(e)}},30659:function(e,n,s){s.r(n),s.d(n,{content:function(){return o},frontmatter:function(){return r},toc:function(){return c}});var l=s(39980);const r=void 0,c=[{id:"\u793a\u4f8b",text:"\u793a\u4f8b",depth:4}],o='"- Type: `boolean`\\n- Default: `false`\\n\\n\u662f\u5426\u6355\u83b7\u6bcf\u4e2a\u6a21\u5757\u7684\u8017\u65f6\u4fe1\u606f\uff0c\u5bf9\u5e94 webpack \u7684 [profile](https://webpack.js.org/configuration/other-options/#profile) \u914d\u7f6e\u3002\\n\\n#### \u793a\u4f8b\\n\\n```js\\nexport default {\\n  performance: {\\n    profile: true,\\n  },\\n};\\n```\\n\\n\u5f00\u542f\u540e\uff0cWebpack \u751f\u6210\u4e00\u4e9b\u6709\u5173\u6a21\u5757\u7684\u7edf\u8ba1\u6570\u636e\u7684 JSON \u6587\u4ef6\u4f1a\u5c06\u6a21\u5757\u6784\u5efa\u7684\u8017\u65f6\u4fe1\u606f\u4e5f\u5305\u542b\u8fdb\u53bb\u3002\\n"';function a(e){const n=Object.assign({ul:"ul",li:"li",code:"code",p:"p",a:"a",h4:"h4",div:"div",button:"button",pre:"pre",span:"span"},e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Type: ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(n.li,{children:["Default: ",(0,l.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u662f\u5426\u6355\u83b7\u6bcf\u4e2a\u6a21\u5757\u7684\u8017\u65f6\u4fe1\u606f\uff0c\u5bf9\u5e94 webpack \u7684 ",(0,l.jsx)(n.a,{href:"https://webpack.js.org/configuration/other-options/#profile-2",target:"_blank",rel:"nofollow",children:"profile"})," \u914d\u7f6e\u3002"]}),"\n",(0,l.jsxs)(n.h4,{id:"\u793a\u4f8b",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793a\u4f8b",children:"#"}),"\u793a\u4f8b"]}),"\n",(0,l.jsxs)(n.div,{className:"language-js",children:[(0,l.jsx)(n.div,{className:""}),(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(n.code,{children:[(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"#88C0D0"},children:"performance"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"#88C0D0"},children:"profile"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"true"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(n.p,{children:"\u5f00\u542f\u540e\uff0cWebpack \u751f\u6210\u4e00\u4e9b\u6709\u5173\u6a21\u5757\u7684\u7edf\u8ba1\u6570\u636e\u7684 JSON \u6587\u4ef6\u4f1a\u5c06\u6a21\u5757\u6784\u5efa\u7684\u8017\u65f6\u4fe1\u606f\u4e5f\u5305\u542b\u8fdb\u53bb\u3002"})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(a,e)})):a(e)}},82603:function(e,n,s){s.r(n),s.d(n,{content:function(){return o},frontmatter:function(){return r},toc:function(){return c}});var l=s(39980);const r=void 0,c=[],o="\"- Type: `boolean`\\n- Default: `false`\\n\\n\u662f\u5426\u79fb\u9664 [moment.js](https://momentjs.com/) \u7684\u8bed\u8a00\u5305\u6587\u4ef6\u3002\\n\\n`moment.js` \u9ed8\u8ba4\u5305\u542b\u4e86\u5927\u91cf\u7684\u8bed\u8a00\u5305\u6587\u4ef6\uff0c\u4f1a\u5bfc\u81f4\u6253\u5305\u540e\u7684\u5305\u4f53\u79ef\u589e\u5927\u3002\\n\\n\u5f53\u9879\u76ee\u4e2d\u4f7f\u7528\u4e86 `moment.js` \u65f6\uff0c\u63a8\u8350\u5f00\u542f\u6b64\u9009\u9879\uff0c\u81ea\u52a8\u6392\u9664\u6240\u6709\u7684\u8bed\u8a00\u5305\u6587\u4ef6\uff1a\\n\\n```js\\nexport default {\\n  performance: {\\n    removeMomentLocale: true,\\n  },\\n};\\n```\\n\\n\u5f00\u542f\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u6765\u52a0\u8f7d\u8bed\u8a00\u5305\u6587\u4ef6\uff1a\\n\\n```js\\nimport moment from 'moment';\\nimport 'moment/locale/zh-cn';\\n\\nmoment.locale('zh-cn');\\n```\\n\"";function a(e){const n=Object.assign({ul:"ul",li:"li",code:"code",p:"p",a:"a",div:"div",button:"button",pre:"pre",span:"span"},e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Type: ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(n.li,{children:["Default: ",(0,l.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u662f\u5426\u79fb\u9664 ",(0,l.jsx)(n.a,{href:"https://momentjs.com/",target:"_blank",rel:"nofollow",children:"moment.js"})," \u7684\u8bed\u8a00\u5305\u6587\u4ef6\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"moment.js"})," \u9ed8\u8ba4\u5305\u542b\u4e86\u5927\u91cf\u7684\u8bed\u8a00\u5305\u6587\u4ef6\uff0c\u4f1a\u5bfc\u81f4\u6253\u5305\u540e\u7684\u5305\u4f53\u79ef\u589e\u5927\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5f53\u9879\u76ee\u4e2d\u4f7f\u7528\u4e86 ",(0,l.jsx)(n.code,{children:"moment.js"})," \u65f6\uff0c\u63a8\u8350\u5f00\u542f\u6b64\u9009\u9879\uff0c\u81ea\u52a8\u6392\u9664\u6240\u6709\u7684\u8bed\u8a00\u5305\u6587\u4ef6\uff1a"]}),"\n",(0,l.jsxs)(n.div,{className:"language-js",children:[(0,l.jsx)(n.div,{className:""}),(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(n.code,{children:[(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"#88C0D0"},children:"performance"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"#88C0D0"},children:"removeMomentLocale"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"true"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(n.p,{children:"\u5f00\u542f\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u6765\u52a0\u8f7d\u8bed\u8a00\u5305\u6587\u4ef6\uff1a"}),"\n",(0,l.jsxs)(n.div,{className:"language-js",children:[(0,l.jsx)(n.div,{className:""}),(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(n.code,{children:[(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"import"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#8FBCBB"},children:"moment"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"from"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#A3BE8C"},children:"moment"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"import"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#A3BE8C"},children:"moment/locale/zh-cn"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(n.span,{className:"line"}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9"},children:"moment"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"."}),(0,l.jsx)(n.span,{style:{color:"#88C0D0"},children:"locale"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#A3BE8C"},children:"zh-cn"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(n.span,{className:"line"})]})})]})]})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(a,e)})):a(e)}}}]);