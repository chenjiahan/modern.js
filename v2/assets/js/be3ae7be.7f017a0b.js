"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2973],{44993:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(52983);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),k=l,m=c["".concat(p,".").concat(k)]||c[k]||u[k]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},65253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(18249),l=(n(52983),n(44993));const a={toc:[{value:"\u9009\u9879",id:"\u9009\u9879",level:3},{value:"after",id:"after",level:4},{value:"before",id:"before",level:4},{value:"client",id:"client",level:4},{value:"devMiddleware",id:"devmiddleware",level:4},{value:"headers",id:"headers",level:4},{value:"historyApiFallback",id:"historyapifallback",level:4},{value:"hot",id:"hot",level:4},{value:"https",id:"https",level:4},{value:"liveReload",id:"livereload",level:4},{value:"setupMiddlewares",id:"setupmiddlewares",level:4},{value:"proxy",id:"proxy",level:4},{value:"watch",id:"watch",level:4}]};function i(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"Object")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"))),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"tools.devServer")," \u53ef\u4ee5\u4fee\u6539\u5f00\u53d1\u73af\u5883\u670d\u52a1\u5668\u7684\u914d\u7f6e\u3002"),(0,l.kt)("h3",{id:"\u9009\u9879"},"\u9009\u9879"),(0,l.kt)("h4",{id:"after"},"after"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"Array")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"))),(0,l.kt)("p",null,"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6\uff0c\u5728\u6240\u6709\u5f00\u53d1\u73af\u5883\u4e2d\u95f4\u4ef6\u540e\u6267\u884c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    devServer: {\n      after: [\n        async (req, res, next) => {\n          console.log('after dev middleware');\n          next();\n        },\n      ],\n    },\n  },\n};\n")),(0,l.kt)("h4",{id:"before"},"before"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"Array")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"))),(0,l.kt)("p",null,"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6\uff0c\u5728\u6240\u6709\u5f00\u53d1\u73af\u5883\u4e2d\u95f4\u4ef6\u524d\u6267\u884c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    devServer: {\n      before: [\n        async (req, res, next) => {\n          console.log('before dev middleware');\n          next();\n        },\n      ],\n    },\n  },\n};\n")),(0,l.kt)("h4",{id:"client"},"client"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"{\n    /** \u4e8b\u4ef6\u6d41\u8def\u5f84 */\n    path?: string;\n    /** \u6307\u5b9a\u76d1\u542c\u8bf7\u6c42\u7684\u7aef\u53e3\u53f7 */\n    port?: string;\n    /** \u6307\u5b9a\u8981\u4f7f\u7528\u7684 host */\n    host?: string;\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n    path: '/webpack-hmr',\n    port: '8080',\n    host: networkAddress || 'localhost',\n}\n")),(0,l.kt)("p",null,"\u914d\u7f6e hmr \u5ba2\u6237\u7aef\u76f8\u5173\u529f\u80fd\u3002"),(0,l.kt)("h4",{id:"devmiddleware"},"devMiddleware"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n  writeToDisk: boolean | ((filename: string) => boolean);\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n  writeToDisk: (file: string) => !file.includes('.hot-update.') && !file.endsWith('.map'),\n}\n")),(0,l.kt)("p",null,"devMiddleware \u914d\u7f6e\u9879\u3002\u5f53\u524d\u914d\u7f6e\u662f ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack-dev-middleware"},"webpack-dev-middleware")," \u914d\u7f6e\u9879\u7684\u5b50\u96c6."),(0,l.kt)("h4",{id:"headers"},"headers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"Record<string, string>")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,l.kt)("p",null,"\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u54cd\u5e94\u5934\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    devServer: {\n      headers: {\n        'X-Custom-Foo': 'bar',\n      },\n    },\n  },\n};\n")),(0,l.kt)("h4",{id:"historyapifallback"},"historyApiFallback"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean | ConnectHistoryApiFallbackOptions")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"))),(0,l.kt)("p",null,"\u5728\u9700\u8981\u5bf9\u4e00\u4e9b 404 \u54cd\u5e94\u6216\u5176\u4ed6\u8bf7\u6c42\u63d0\u4f9b\u66ff\u4ee3\u9875\u9762\u7684\u573a\u666f\uff0c\u53ef\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"devServer.historyApiFallback")," \u8fdb\u884c\u8bbe\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    devServer: {\n      historyApiFallback: true,\n    },\n  },\n};\n")),(0,l.kt)("p",null,"\u66f4\u591a\u9009\u9879\u548c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bripkens/connect-history-api-fallback"},"connect-history-api-fallback")," \u6587\u6863\u3002"),(0,l.kt)("h4",{id:"hot"},"hot"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"))),(0,l.kt)("p",null,"\u662f\u5426\u5f00\u542f ",(0,l.kt)("a",{parentName:"p",href:"https://webpack.js.org/concepts/hot-module-replacement/"},"Hot Module Replacement")," \u70ed\u66f4\u65b0\u80fd\u529b\u3002"),(0,l.kt)("h4",{id:"https"},"https"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean | { key: string; cert: string }")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"))),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cDevServer \u4f1a\u542f\u7528 HTTP \u670d\u52a1\u5668\u3002\u901a\u8fc7\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"devServer.https")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u5c06\u5f00\u542f\u5bf9 HTTPS \u7684\u652f\u6301\uff0c\u540c\u65f6\u4f1a\u7981\u7528 HTTP \u670d\u52a1\u5668\u3002"),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u624b\u52a8\u4f20\u5165 HTTPS \u670d\u52a1\u5668\u6240\u9700\u8981\u7684\u8bc1\u4e66\u548c\u5bf9\u5e94\u7684\u79c1\u94a5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    devServer: {\n      https: {\n        key: fs.readFileSync('certificates/private.pem'),\n        cert: fs.readFileSync('certificates/public.pem'),\n      },\n    },\n  },\n};\n")),(0,l.kt)("h4",{id:"livereload"},"liveReload"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"))),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5f53\u76d1\u542c\u5230\u6587\u4ef6\u53d8\u5316\u65f6\uff0cDevServer \u5c06\u4f1a\u5237\u65b0\u9875\u9762\uff08\u4e3a\u4f7f liveReload \u80fd\u591f\u751f\u6548\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"devServer.hot")," \u914d\u7f6e\u9879\u5e94\u5f53\u7981\u7528\uff09\u3002\u901a\u8fc7\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"devServer.liveReload")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," \u53ef\u4ee5\u5173\u95ed\u8be5\u884c\u4e3a\u3002"),(0,l.kt)("h4",{id:"setupmiddlewares"},"setupMiddlewares"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Array<\n  (\n    middlewares: {\n      unshift: (...handlers: RequestHandler[]) => void;\n      push: (...handlers: RequestHandler[]) => void;\n    },\n    server: {\n      sockWrite: (\n        type: string,\n        data?: string | boolean | Record<string, any>,\n      ) => void;\n    },\n  ) => void\n>;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,l.kt)("p",null,"\u63d0\u4f9b\u6267\u884c\u81ea\u5b9a\u4e49\u51fd\u6570\u548c\u5e94\u7528\u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6\u7684\u80fd\u529b\u3002"),(0,l.kt)("p",null,"\u51e0\u79cd\u4e0d\u540c\u4e2d\u95f4\u4ef6\u4e4b\u95f4\u7684\u6267\u884c\u987a\u5e8f\u662f: ",(0,l.kt)("inlineCode",{parentName:"p"},"devServer.before")," => ",(0,l.kt)("inlineCode",{parentName:"p"},"unshift")," => \u5185\u7f6e\u4e2d\u95f4\u4ef6 => ",(0,l.kt)("inlineCode",{parentName:"p"},"push")," => ",(0,l.kt)("inlineCode",{parentName:"p"},"devServer.after"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    devServer: {\n      setupMiddlewares: [\n        (middlewares, server) => {\n          middlewares.unshift((req, res, next) => {\n            next();\n          });\n\n          middlewares.push((req, res, next) => {\n            next();\n          });\n        },\n      ],\n    },\n  },\n};\n")),(0,l.kt)("p",null,"\u4e00\u4e9b\u7279\u6b8a\u573a\u666f\u9700\u6c42\u53ef\u80fd\u9700\u8981\u4f7f\u7528\u670d\u52a1\u5668 API\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'sockWrite\u3002\u5141\u8bb8\u5411 hmr \u5ba2\u6237\u7aef\u4f20\u9012\u4e00\u4e9b\u6d88\u606f\uff0chmr \u5ba2\u6237\u7aef\u5c06\u6839\u636e\u63a5\u6536\u5230\u7684\u6d88\u606f\u7c7b\u578b\u8fdb\u884c\u4e0d\u540c\u7684\u5904\u7406\u3002\u5982\u679c\u4f60\u53d1\u9001\u4e00\u4e2a "content-changed " \u7684\u6d88\u606f\uff0c\u9875\u9762\u5c06\u4f1a\u91cd\u65b0\u52a0\u8f7d\u3002')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    devServer: {\n      setupMiddlewares: [\n        (middlewares, server) => {\n          // \u6dfb\u52a0\u81ea\u5b9a\u4e49 watcher \u5e76\u5728\u6587\u4ef6\u66f4\u65b0\u65f6\u89e6\u53d1\u9875\u9762\u5237\u65b0\n          watcher.on('change', changed => {\n            server.sockWrite('content-changed');\n          });\n        },\n      ],\n    },\n  },\n};\n")),(0,l.kt)("h4",{id:"proxy"},"proxy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"Record<string, string> | Record<string, ProxyDetail>")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,l.kt)("p",null,"\u4ee3\u7406\u8bf7\u6c42\u5230\u6307\u5b9a\u7684\u670d\u52a1\u4e0a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    devServer: {\n      proxy: {\n        '/api': 'http://localhost:3000',\n      },\n    },\n  },\n};\n")),(0,l.kt)("p",null,"\u6b64\u65f6\uff0c/api/users \u8bf7\u6c42\u5c06\u4f1a\u4ee3\u7406\u5230 http://localhost:3000/api/users\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u60f3\u4f20\u9012 /api\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"pathRewrite")," \u91cd\u5199\u8bf7\u6c42\u8def\u5f84\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    devServer: {\n      proxy: {\n        '/api': {\n          target: 'http://localhost:3000',\n          pathRewrite: { '^/api': '' },\n        },\n      },\n    },\n  },\n};\n")),(0,l.kt)("p",null,"DevServer Proxy \u57fa\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/chimurai/http-proxy-middleware"},"http-proxy-middleware")," \u5b9e\u73b0\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 http-proxy-middleware \u7684\u6240\u6709\u914d\u7f6e\u9879\uff0c\u5177\u4f53\u53ef\u4ee5\u67e5\u770b\u6587\u6863\u3002"),(0,l.kt)("p",null,"DevServer Proxy \u5b8c\u6574\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Options as HttpProxyOptions } from 'http-proxy-middleware';\n\ntype ProxyDetail = HttpProxyOptions & {\n  bypass?: (\n    req: IncomingMessage,\n    res: ServerResponse,\n    proxyOptions: ProxyOptions,\n  ) => string | undefined | null | false;\n  context?: string | string[];\n};\n\ntype ProxyOptions =\n  | Record<string, string>\n  | Record<string, ProxyDetail>\n  | ProxyDetail[]\n  | ProxyDetail;\n")),(0,l.kt)("p",null,"\u9664\u4e86 http-proxy-middleware \u7684\u9009\u9879\u5916\uff0c\u8fd8\u652f\u6301 bypass \u548c context \u4e24\u4e2a\u914d\u7f6e\u9879\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"bypass\uff1a\u6839\u636e\u51fd\u6570\u7684\u8fd4\u56de\u503c\u7ed5\u8fc7\u4ee3\u7406\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"li"},"null")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined")," \u4f1a\u7ee7\u7eed\u7528\u4ee3\u7406\u5904\u7406\u8bf7\u6c42\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"li"},"false")," \u4f1a\u8fd4\u56de 404 \u9519\u8bef\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u4e00\u4e2a\u5177\u4f53\u7684\u670d\u52a1\u8def\u5f84\uff0c\u5c06\u4f1a\u4f7f\u7528\u6b64\u8def\u5f84\u66ff\u4ee3\u539f\u8bf7\u6c42\u8def\u5f84\u3002"))),(0,l.kt)("li",{parentName:"ul"},"context\uff1a\u5982\u679c\u4f60\u60f3\u4ee3\u7406\u591a\u4e2a\u7279\u5b9a\u7684\u8def\u5f84\u5230\u540c\u4e00\u4e2a\u76ee\u6807\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 context \u914d\u7f6e\u9879\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u81ea\u5b9a\u4e49 bypass \u65b9\u6cd5\nexport default {\n  tools: {\n    devServer: {\n      proxy: {\n        '/api': {\n          target: 'http://localhost:3000',\n          bypass: function (req, res, proxyOptions) {\n            if (req.headers.accept.indexOf('html') !== -1) {\n              console.log('Skipping proxy for browser request.');\n              return '/index.html';\n            }\n          },\n        },\n      },\n    },\n  },\n};\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u4ee3\u7406\u591a\u4e2a\u8def\u5f84\u5230\u540c\u4e00\u4e2a\u76ee\u6807\nexport default {\n  tools: {\n    devServer: {\n      proxy: [\n        {\n          context: ['/auth', '/api'],\n          target: 'http://localhost:3000',\n        },\n      ],\n    },\n  },\n};\n")),(0,l.kt)("h4",{id:"watch"},"watch"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"))),(0,l.kt)("p",null,"\u662f\u5426\u76d1\u542c ",(0,l.kt)("inlineCode",{parentName:"p"},"mock/"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"server/"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"api/")," \u7b49\u76ee\u5f55\u7684\u6587\u4ef6\u53d8\u5316\u3002"))}i.isMDXComponent=!0;const o={title:"tools.devServer",sidebar_label:"devServer",sidebar_position:1},p=void 0,s={unversionedId:"configure/app/tools/dev-server",id:"configure/app/tools/dev-server",title:"tools.devServer",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u8df3\u8f6c\u7684\u94fe\u63a5\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 tools.devServer\u3002",source:"@site/docs/configure/app/tools/dev-server.md",sourceDirName:"configure/app/tools",slug:"/configure/app/tools/dev-server",permalink:"/v2/docs/configure/app/tools/dev-server",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"tools.devServer",sidebar_label:"devServer",sidebar_position:1},sidebar:"configsAppSidebar",previous:{title:"cssLoader",permalink:"/v2/docs/configure/app/tools/css-loader"},next:{title:"htmlPlugin",permalink:"/v2/docs/configure/app/tools/html-plugin"}},d={},u=[],c={toc:u};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"BUILDER",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u8df3\u8f6c\u7684\u94fe\u63a5\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-tools.html#tools-devserver"},"tools.devServer"),"\u3002")),(0,l.kt)(i,{mdxType:"Main"}))}k.isMDXComponent=!0}}]);