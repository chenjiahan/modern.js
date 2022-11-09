(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{247:function(t,e,a){"use strict";a.r(e);var s=a(4),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"build-target"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-target"}},[t._v("#")]),t._v(" Build Target")]),t._v(" "),e("p",[t._v("Builder support build multiple targets for different environments. You can set the type through the "),e("code",[t._v("target")]),t._v(" parameter of the "),e("RouterLink",{attrs:{to:"/en/api/builder-core.html#createbuilder"}},[t._v("createBuilder")]),t._v(" method.")],1),t._v(" "),e("h2",{attrs:{id:"default-target"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#default-target"}},[t._v("#")]),t._v(" Default Target")]),t._v(" "),e("p",[t._v("By default, the build target is "),e("code",[t._v("'web'")]),t._v(", and the build result can run in a browser environment.")]),t._v(" "),e("p",[t._v("the Builder will read the "),e("a",{attrs:{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"noopener noreferrer"}},[t._v("Browserslist config"),e("OutboundLink")],1),t._v(" in the project to determine the range of browsers.")]),t._v(" "),e("h2",{attrs:{id:"optional-targets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#optional-targets"}},[t._v("#")]),t._v(" Optional Targets")]),t._v(" "),e("p",[e("code",[t._v("target")]),t._v(" can also be set to the following values:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("'node'")]),t._v(": Build for Node.js environment, usually used in SSR and other scenarios.")]),t._v(" "),e("li",[e("code",[t._v("'web-worker'")]),t._v(": Build for Web Worker environment.")]),t._v(" "),e("li",[e("code",[t._v("'modern-web'")]),t._v(": Build for modern browsers.")])]),t._v(" "),e("p",[t._v("For example, to build for the Node.js environment:")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" builder "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBuilder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("provider"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  target"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"multiple-targets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multiple-targets"}},[t._v("#")]),t._v(" Multiple Targets")]),t._v(" "),e("p",[t._v("When target is an array containing multiple values, Builder will perform multiple builds at the same time.")]),t._v(" "),e("p",[t._v("For example, we can build a browser target and an node target at the same time:")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" builder "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBuilder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("provider"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  target"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'web'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"node-target"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-target"}},[t._v("#")]),t._v(" Node Target")]),t._v(" "),e("p",[t._v("Refers to the build target running in the Node.js environment, usually used in scenarios such as SSR.")]),t._v(" "),e("p",[t._v("When "),e("code",[t._v("target")]),t._v(" is set to "),e("code",[t._v("'node'")]),t._v(", Builder will:")]),t._v(" "),e("ul",[e("li",[t._v("No HTML files will be generated, and HTML-related logic will not be executed, since HTML is not required by the Node.js environment.")]),t._v(" "),e("li",[t._v("CSS code will not be bundled or extracted, but the id information of CSS Modules will be included in the bundle.")]),t._v(" "),e("li",[t._v("The default code split strategy will be disabled, but dynamic import can still work.")]),t._v(" "),e("li",[t._v("Disable the HMR.")]),t._v(" "),e("li",[t._v("Adjust the default value of Browserslist to "),e("code",[t._v("['node >= 12']")]),t._v("。")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("If target is an array, such as building web and node targets at the same time, then the above processing will not affect the web target, The HTML, CSS and other files required for the web target will still be generated correctly.")])]),t._v(" "),e("h2",{attrs:{id:"web-worker-target"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web-worker-target"}},[t._v("#")]),t._v(" Web Worker Target")]),t._v(" "),e("p",[t._v("Refers to the build target running in the "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web Worker"),e("OutboundLink")],1),t._v(" environment.")]),t._v(" "),e("p",[t._v("When "),e("code",[t._v("target")]),t._v(" is set to "),e("code",[t._v("'web-worker'")]),t._v(", Builder will:")]),t._v(" "),e("ul",[e("li",[t._v("No HTML files will be generated, and HTML-related logic will not be executed, since HTML is not required by the Web Worker environment.")]),t._v(" "),e("li",[t._v("CSS code will not be bundled or extracted, but the id information of CSS Modules will be included in the bundle.")]),t._v(" "),e("li",[t._v("The default code split strategy will be disabled, and "),e("strong",[t._v("dynamic import can not work")]),t._v(", because the Web Worker only runs a single JavaScript file.")]),t._v(" "),e("li",[t._v("Disable the HMR.")])]),t._v(" "),e("h2",{attrs:{id:"modern-web-target"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#modern-web-target"}},[t._v("#")]),t._v(" Modern Web Target")]),t._v(" "),e("p",[t._v("Refers to the build target running in the modern browsers.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("What are modern browsers?")]),t._v(" "),e("p",[t._v("Modern browsers are one of our conventions to refer to browsers that support "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("native ES Modules"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("p",[t._v("When "),e("code",[t._v("target")]),t._v(" is set to "),e("code",[t._v("'modern-web'")]),t._v(", Builder will:")]),t._v(" "),e("ul",[e("li",[t._v("Adjust the default value of Browserslist to：")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" browserslist "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chrome > 61'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'edge > 16'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'firefox > 60'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'safari > 11'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ios_saf > 11'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);