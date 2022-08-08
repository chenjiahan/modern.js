"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[301],{30010:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"release-windows-deploy","metadata":{"permalink":"/blog/release-windows-deploy","source":"@site/blog/2021-11.19-release.md","title":"\u8fd1\u671f\u66f4\u65b0\uff1a\u652f\u6301 Windows\u3001\u521d\u6b65\u63d0\u4f9b\u90e8\u7f72\u529f\u80fd","description":"1. \u652f\u6301 Windows \u5e73\u53f0","date":"2022-08-02T08:38:44.000Z","formattedDate":"2022\u5e748\u67082\u65e5","tags":[],"readingTime":6.8,"truncated":false,"authors":[],"frontMatter":{"title":"\u8fd1\u671f\u66f4\u65b0\uff1a\u652f\u6301 Windows\u3001\u521d\u6b65\u63d0\u4f9b\u90e8\u7f72\u529f\u80fd","slug":"release-windows-deploy"}},"content":":::info \u91cd\u70b9\\n1. \u652f\u6301 Windows \u5e73\u53f0\\n2. \u521d\u6b65\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u90e8\u7f72\u529f\u80fd\\n:::\\n\\n## \u652f\u6301 Windows \u5e73\u53f0\\n\\n\u5728\u672c\u6b21\u66f4\u65b0\u4e2d\uff0c\u652f\u6301\u5728 Windows \u5e73\u53f0\u5f00\u53d1\u548c\u4f7f\u7528 Modern.js\u3002\\n\\n\u5176\u4e2d\uff0cUnbundled \u6a21\u5f0f\u6682\u4e0d\u652f\u6301\u5728 Windows \u5e73\u53f0\u4f7f\u7528\uff0c\u652f\u6301\u5373\u5c06\u4e0a\u7ebf\u3002\\n\\n### \u793a\u4f8b\uff1a\u5e94\u7528\u5de5\u7a0b\uff08MWA\uff09\\n\\n\u5728 Windows \u5e73\u53f0\u4e0a\uff0c\u53ef\u4f7f\u7528 `npx @modern-js/create` \u521b\u5efa\u5e94\u7528\u9879\u76ee\uff1a\\n\\n<video controls width=\\"100%\\" src=\\"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/media/create-mwa-windows.mp4\\" type=\\"video/mp4\\"></video>\\n\\n\u5728\u9879\u76ee\u76ee\u5f55\u6267\u884c `pnpm run dev` \u547d\u4ee4\u53ef\u8fdb\u884c\u9879\u76ee\u5f00\u53d1\u548c\u8c03\u8bd5\uff1a\\n\\n<video controls width=\\"100%\\" src=\\"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/media/mwa-dev-windows.mp4\\" type=\\"video/mp4\\" ></video>\\n\\n\u5728\u9879\u76ee\u76ee\u5f55\u6267\u884c `pnpm run build` \u547d\u4ee4\u53ef\u8fdb\u884c\u9879\u76ee\u6253\u5305\uff1a\\n\\n<video controls width=\\"100%\\" src=\\"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/media/mwa-build-windows.mp4\\" type=\\"video/mp4\\" ></video>\\n\\n\u5728\u9879\u76ee\u76ee\u5f55\u6267\u884c `pnpm run new` \u547d\u4ee4\u53ef\u5f00\u542f\u9879\u76ee\u6269\u5c55\u529f\u80fd\uff0c\u5982\u5f00\u542f BFF\uff1a\\n\\n<video controls width=\\"100%\\" src=\\"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/media/mwa-new-windows.mp4\\" type=\\"video/mp4\\" ></video>\\n\\n\u5728\u9879\u76ee\u76ee\u5f55\u6267\u884c `pnpm run test` \u547d\u4ee4\uff0c\u53ef\u8fd0\u884c\u5355\u5143\u6d4b\u8bd5\u548c\u96c6\u6210\u6d4b\u8bd5\uff1a\\n\\n<video controls width=\\"100%\\" src=\\"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/media/mwa-test-windows.mp4\\" type=\\"video/mp4\\" ></video>\\n\\n### \u793a\u4f8b\uff1aMonorepo \u5de5\u7a0b\\n\\n\u5728 Windows \u5e73\u53f0\u4e0a\uff0c\u53ef\u4f7f\u7528 `npx @modern-js/create` \u521b\u5efa Monorepo\uff1a\\n\\n<video controls width=\\"100%\\" src=\\"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/media/create-monorepo-windows.mp4\\" type=\\"video/mp4\\" ></video>\\n\\n\u5728 Monorepo \u4e2d\u6267\u884c `pnpm run new` \u53ef\u521b\u5efa\u5b50\u9879\u76ee\uff0c\u4f8b\u5982\u521b\u5efa\u6a21\u5757\u5b50\u9879\u76ee\uff1a\\n\\n<video controls width=\\"100%\\" src=\\"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/media/monorepo-create-module-windows.mp4\\" type=\\"video/mp4\\" ></video>\\n\\n\u5728\u6a21\u5757\u5b50\u9879\u76ee\u76ee\u5f55\u6267\u884c `pnpm run new` \u53ef\u5f00\u542f\u6a21\u5757\u6269\u5c55\u529f\u80fd\uff0c\u4f8b\u5982 Storybook\uff1a\\n\\n<video controls width=\\"100%\\" src=\\"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/media/monorepo-module-storybook-windows.mp4\\" type=\\"video/mp4\\" ></video>\\n\\n\u53e6\u5916\uff0cModern.js \u5b98\u7f51\u4e0a\uff0c\u9488\u5bf9 Windows \u548c macOS \u4e0a\u4e0d\u540c\u7684\u547d\u4ee4\uff0c\u5c06\u4f1a\u4f7f\u7528\u4ee5\u4e0b\u5f62\u5f0f\u5c55\u793a\uff1a\\n\\n![Windows \u547d\u4ee4\u6587\u6863\u5c55\u793a\u5f62\u5f0f](https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/media/doc-windows.png)\\n\\n## \u521d\u6b65\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u90e8\u7f72\u529f\u80fd\\n\\n\u672c\u6b21\u66f4\u65b0\u4e2d\uff0cModern.js \u63d0\u4f9b\u4e86\u90e8\u7f72\u76f8\u5173\u7684\u652f\u6301\uff0c\u5305\u62ec\uff1a\\n1. \u4f7f\u7528[\u5185\u7f6e\u7684\u4ea7\u54c1\u7ea7 Web \u670d\u52a1\u5668](https://modernjs.dev/docs/guides/features/server-side/deploy/modern-server/web-server)\u3002\\n2. \u63d0\u4f9b [CDN \u4e0a\u4f20\u80fd\u529b](https://modernjs.dev/docs/guides/features/server-side/deploy/upload-cdn/oss)\uff0c\u5c06\u8d44\u6e90\u6587\u4ef6\u4e0a\u4f20\u5230\u963f\u91cc\u4e91 OSS \u6216\u817e\u8baf\u4e91 COS \u4e2d\u3002\\n3. \u7528[\u7b2c\u4e09\u65b9\u7684\u9759\u6001 Web \u670d\u52a1\u5668\uff08\u5305\u62ec CDN\uff09](https://modernjs.dev/docs/guides/features/server-side/deploy/static-hosting)\u6765\u6258\u7ba1\u5e94\u7528\u4ea7\u7269\u3002\\n\\n\u4f7f\u7528 Modern.js \u751f\u6210\u5668\u5f00\u542f\u5bf9\u5e94\u529f\u80fd\u540e\uff0c\u53ea\u9700\u8981\u7b80\u5355\u914d\u7f6e\u4e91\u5e73\u53f0\u6240\u9700\u7684\u57fa\u672c\u4fe1\u606f\uff08\u4f8b\u5982 SecretID\uff0cSecretKey\uff0cBucketName \u7b49\uff09\u5c31\u53ef\u4ee5\u76f4\u63a5\u90e8\u7f72\u5230\u4e91\u5e73\u53f0\u3002\\n\\n\u5728\u5e94\u7528\u6839\u76ee\u5f55\u4e0b\u521b\u5efa .env \u6587\u4ef6\uff0c\u6216\u53d1\u5e03\u5e73\u53f0\uff08\u4f8b\u5982 GitHub CI\uff09\u4e2d\u914d\u7f6e\u90a3\u4e9b\u65e0\u9700\u4fdd\u5bc6\u7684\u4fe1\u606f\uff0c\u4f8b\u5982\uff1a\\n\\n```text\\n# \u963f\u91cc\u4e91\u8d26\u53f7 ID\uff08\u817e\u8baf\u4e91\u65e0\u9700\u8be5\u914d\u7f6e\uff09\\nCLOUD_ACCOUNT_ID\\n# Bucket \u540d\u79f0\\nCLOUD_BUCKET_NAME\\n# \u4e91\u5e73\u53f0\u90e8\u7f72\u533a\u57df\\nCLOUD_REGION\\n```\\n\\n\u800c\u4e0e\u8d26\u53f7\u9274\u6743\u76f8\u5173\u7684\u4fe1\u606f\u52a1\u5fc5\u5728\u5e73\u53f0\u4e0a\u914d\u7f6e\uff0c\u4f8b\u5982\uff1a\\n\\n```text\\n# \u4e91\u5e73\u53f0 AccessKey\\nCLOUD_SECRET_ID\\n# \u4e91\u5e73\u53f0 Secret Key\\nCLOUD_SECRET_KEY\\n```\\n\\n### \u793a\u4f8b\\n\\n\u5728\u9879\u76ee\u4e2d\u6267\u884c `pnpm run new` \u542f\u7528\u90e8\u7f72\u529f\u80fd\uff1a\\n\\n<video controls width=\\"100%\\" src=\\"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/media/enable-deploy.mp4\\" type=\\"video/mp4\\" ></video>\\n\\n\u4f7f\u7528\u963f\u91cc\u4e91 FC + \u90e8\u7f72\u5e94\u7528\uff1a\\n\\n<video controls width=\\"100%\\" src=\\"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/media/deploy-aliyun.mp4\\" type=\\"video/mp4\\" ></video>\\n\\n> [\u4e86\u89e3\u66f4\u591a](https://modernjs.dev/docs/guides/features/server-side/deploy/modern-server/use-lambda/aliyun-fc)\\n\\n\u4f7f\u7528\u817e\u8baf\u4e91 SCF + COS \u90e8\u7f72\u5e94\u7528\uff1a\\n\\n<video controls width=\\"100%\\" src=\\"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/media/deploy-tencent.mp4\\" type=\\"video/mp4\\" ></video>\\n\\n> [\u4e86\u89e3\u66f4\u591a](https://modernjs.dev/docs/guides/features/server-side/deploy/modern-server/use-lambda/tencent-scf)\\n\\n\u4f7f\u7528\u9759\u6001 Web \u670d\u52a1\u5668\u6258\u7ba1\u4ea7\u7269\uff1a\\n\\n\\n<video controls width=\\"100%\\" src=\\"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/media/deploy-static.mp4\\" type=\\"video/mp4\\" ></video>\\n\\n> [\u4e86\u89e3\u66f4\u591a](https://modernjs.dev/docs/guides/features/server-side/deploy/static-hosting)\\n\\n\u76ee\u524d\u6682\u4e0d\u652f\u6301\u4e0d\u540c\u4e91\u5e73\u53f0\u95f4\u4ea7\u54c1\u6df7\u5408\u4f7f\u7528\u3002\u53e6\u5916\uff0cMonorepo \u90e8\u7f72\u652f\u6301\u5c06\u5728\u540e\u7eed\u4e0a\u7ebf\uff0c\u656c\u8bf7\u671f\u5f85\u3002\u66f4\u591a\u5185\u5bb9\u53ef\u4ee5\u524d\u5f80\u5b98\u7f51\u4e86\u89e3\u3002\\n\\n## Changelog\\n\\n-   \u751f\u6210\u5668\u6a21\u677f\u66f4\u65b0 [#176](https://github.com/modern-js-dev/modern.js/pull/176) [#177](https://github.com/modern-js-dev/modern.js/pull/177) [#183](https://github.com/modern-js-dev/modern.js/pull/183) [#190](https://github.com/modern-js-dev/modern.js/pull/190) [#185](https://github.com/modern-js-dev/modern.js/pull/185) [#260](https://github.com/modern-js-dev/modern.js/pull/260) [#259](https://github.com/modern-js-dev/modern.js/pull/259) [#285](https://github.com/modern-js-dev/modern.js/pull/285) [#300](https://github.com/modern-js-dev/modern.js/pull/300)\\n-   \u4fee\u590d\u521d\u59cb\u5316\u9879\u76ee lint \u62a5\u9519 [#194](https://github.com/modern-js-dev/modern.js/pull/194) [#258](https://github.com/modern-js-dev/modern.js/pull/258)\\n-   \u5e94\u7528\u9879\u76ee\u542f\u7528 Electron \u529f\u80fd\u540e\u589e\u52a0\u63d0\u793a\u4fe1\u606f [#181](https://github.com/modern-js-dev/modern.js/pull/181)\\n-   \u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u8c03\u6574\u6e05\u9664 dist \u76ee\u5f55\u65f6\u673a [#202](https://github.com/modern-js-dev/modern.js/pull/202)\\n-   \u4e00\u4f53\u5316\u8c03\u7528\u751f\u6210\u4ee3\u7801\u51fd\u6570\u589e\u52a0 requireResolve \u53c2\u6570 [#201](https://github.com/modern-js-dev/modern.js/pull/201)\\n-   \u4fee\u590d\u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u9879\u76ee\u521d\u59cb\u5316\u672a\u751f\u6210 .npmignore[ #209](https://github.com/modern-js-dev/modern.js/pull/209) / [#198](https://github.com/modern-js-dev/modern.js/issues/198)\\n-   \u4fee\u590d\u5e94\u7528\u5de5\u7a0b\u5728 Node.js 17 \u73af\u5883 dev \u547d\u4ee4\u62a5\u9519 [#214](https://github.com/modern-js-dev/modern.js/pull/214)\\n-   \u4f18\u5316 node-bundler-require \u7684 external \u6b63\u5219\u5339\u914d\u89c4\u5219 [#218](https://github.com/modern-js-dev/modern.js/pull/218) [#275](https://github.com/modern-js-dev/modern.js/pull/275)\\n-   \u4fee\u590d babel \u914d\u7f6e\u7248\u672c\u53f7 [#246](https://github.com/modern-js-dev/modern.js/pull/246)\\n-   test \u547d\u4ee4\u652f\u6301\u5339\u914d Windows \u5e73\u53f0\u6587\u4ef6\u8def\u5f84 [#247](https://github.com/modern-js-dev/modern.js/pull/247)\\n-   \u4fee\u590d unbundle \u6a21\u5f0f\u6d4b\u8bd5\u62a5\u9519 [#226](https://github.com/modern-js-dev/modern.js/pull/226) / [#224](https://github.com/modern-js-dev/modern.js/issues/224) [#225](https://github.com/modern-js-dev/modern.js/issues/225)\\n-   \u4fee\u590d path \u8def\u5f84\u5f15\u7528\u95ee\u9898 [#253](https://github.com/modern-js-dev/modern.js/pull/253)\\n-   Windows \u5e73\u53f0\u652f\u6301 [#249](https://github.com/modern-js-dev/modern.js/pull/249) [#263](https://github.com/modern-js-dev/modern.js/pull/263) [#268](https://github.com/modern-js-dev/modern.js/pull/268) [#270](https://github.com/modern-js-dev/modern.js/pull/270) [#273](https://github.com/modern-js-dev/modern.js/pull/273) [#276](https://github.com/modern-js-dev/modern.js/pull/276) [#219](https://github.com/modern-js-dev/modern.js/pull/219) [#286](https://github.com/modern-js-dev/modern.js/pull/286) [#290](https://github.com/modern-js-dev/modern.js/pull/290) / [#180](https://github.com/modern-js-dev/modern.js/issues/180) [#182](https://github.com/modern-js-dev/modern.js/issues/182) [#236](https://github.com/modern-js-dev/modern.js/issues/236)\\n-   Storybook \u4f7f\u7528 esbuild \u751f\u6210\u9884\u89c8\u6587\u4ef6 [#254](https://github.com/modern-js-dev/modern.js/pull/254) / [#228](https://github.com/modern-js-dev/modern.js/issues/228)\\n-   \u4fee\u590d\u4f7f\u7528 declare class \u65f6 babel \u7f16\u8bd1\u62a5\u9519 [#245](https://github.com/modern-js-dev/modern.js/pull/245)\\n-   \u4fee\u590d\u542f\u7528\u529f\u80fd\u5b89\u88c5\u4f9d\u8d56\u7248\u672c\u53f7 [#267](https://github.com/modern-js-dev/modern.js/pull/267)\\n-   \u4fee\u590d unbundled \u6a21\u5f0f\u5728 js \u9879\u76ee\u62a5\u9519 [#262](https://github.com/modern-js-dev/modern.js/pull/262) / [#262](https://github.com/modern-js-dev/modern.js/issues/262)\\n-   Egg \u548c Koa \u8bf7\u6c42\u8fd4\u56de\u7c7b\u578b\u6539\u4e3a JSON [#266](https://github.com/modern-js-dev/modern.js/pull/266)\\n-   new \u547d\u4ee4\u652f\u6301\u542f\u7528 SSG [#265](https://github.com/modern-js-dev/modern.js/pull/265) [#299](https://github.com/modern-js-dev/modern.js/pull/299) / [#298](https://github.com/modern-js-dev/modern.js/issues/298)\\n-   \u4fee\u590d unbundled \u6a21\u5f0f\u4e0d\u652f\u6301\u4f7f\u7528 BFF [#271](https://github.com/modern-js-dev/modern.js/pull/271) [#](https://github.com/modern-js-dev/modern.js/pull/269)[269](https://github.com/modern-js-dev/modern.js/pull/269) / [#235](https://github.com/modern-js-dev/modern.js/issues/235) [#257](https://github.com/modern-js-dev/modern.js/issues/257)\\n-   Egg \u6846\u67b6 body \u89e3\u6790\u914d\u7f6e [#272](https://github.com/modern-js-dev/modern.js/pull/272)\\n-   \u4f18\u5316 unbundled \u70ed\u66f4\u65b0\u63d0\u793a [#264](https://github.com/modern-js-dev/modern.js/pull/264) / [#186](https://github.com/modern-js-dev/modern.js/issues/186)\\n-   \u79fb\u9664\u65e0\u7528\u7684\u4e2d\u95f4\u4ef6 [#239](https://github.com/modern-js-dev/modern.js/pull/239)\\n-   \u79fb\u9664 useHeaders API [#279](https://github.com/modern-js-dev/modern.js/pull/279)\\n-   \u652f\u6301 SSG \u914d\u7f6e [#207](https://github.com/modern-js-dev/modern.js/pull/207)\\n-   \u4fee\u590d HTML \u6a21\u677f [#277](https://github.com/modern-js-dev/modern.js/pull/277)\\n-   \u8c03\u6574 webpack peerDependence \u4f9d\u8d56 [#293](https://github.com/modern-js-dev/modern.js/pull/293)\\n-   \u4fee\u6539\u521d\u59cb\u5316\u9879\u76ee\u9ed8\u8ba4\u5206\u652f [#306](https://github.com/modern-js-dev/modern.js/pull/306) [#23](https://github.com/modern-js-dev/codesmith/pull/23)\\n-   \u4f7f\u7528 Egg \u6846\u67b6\u65f6\uff0c\u6839\u636e\u9879\u76ee\u4ee3\u7801\uff1b\u751f\u6210\u7c7b\u578b\u6587\u4ef6 [#284](https://github.com/modern-js-dev/modern.js/pull/284)\\n-   \u5c06\u5e95\u5c42\u63d2\u4ef6\u5b9e\u73b0\u6539\u4e3a\u57fa\u4e8e Farrow [#305](https://github.com/modern-js-dev/modern.js/pull/305)\\n-   \u4fee\u590d Storybook \u8def\u5f84\u95ee\u9898 [#308](https://github.com/modern-js-dev/modern.js/pull/308) / [#291](https://github.com/modern-js-dev/modern.js/issues/291)\\n-   \u4fee\u590d\u6a21\u5757\u5de5\u7a0b\u65b9\u6848 new \u547d\u4ee4\u62a5\u9519\u95ee\u9898 [#316](https://github.com/modern-js-dev/modern.js/pull/316) / [#314](https://github.com/modern-js-dev/modern.js/issues/314)\\n-   \u4fee\u590d Tailwind CSS \u914d\u7f6e\u95ee\u9898 [#317](https://github.com/modern-js-dev/modern.js/pull/317)\\n-   \u4fee\u590d\u542f\u7528 unbundled \u6a21\u5f0f\u4f9d\u8d56\u5b89\u88c5\u95ee\u9898 [#12](https://github.com/modern-js-dev/codesmith/pull/12) / [#238](https://github.com/modern-js-dev/modern.js/issues/238)\\n-   \u5b89\u88c5\u4f9d\u8d56\u548c\u9879\u76ee git \u521d\u59cb\u5316\u5931\u8d25\u4ec5\u5c55\u793a\u8b66\u544a [#17](https://github.com/modern-js-dev/codesmith/pull/17)\\n-   @electron/remote \u5347\u7ea7 2.0 \u7248\u672c [#30](https://github.com/modern-js-dev/electron-sprout/pull/30)\\n-   Electron \u4e3b\u8fdb\u7a0b\u652f\u6301\u9664\u4e3b\u76ee\u5f55\uff08electron\uff09\u5916\u5176\u4f59\u76ee\u5f55\u7684\u7f16\u8bd1\uff0c\u6bd4\u5982\uff1ashared \u76ee\u5f55[#44](https://github.com/modern-js-dev/electron-sprout/pull/44)\\n-   Electron \u4fee\u590d linux arm64 \u6784\u5efa\u95ee\u9898\u3002[#47](https://github.com/modern-js-dev/electron-sprout/pull/47)\\n-   \u4fee\u590d useModel \u52a0\u8f7d\u591a\u4e2a Model \u7684\u65f6\u5019 actions \u7c7b\u578b\u5408\u5e76\u95ee\u9898 [#31](https://github.com/modern-js-dev/reduck/pull/31) / [#30](https://github.com/modern-js-dev/reduck/issues/30)\\n-   \u4fee\u590d SourceMap \u8def\u5f84\u95ee\u9898 [#309](https://github.com/modern-js-dev/modern.js/pull/309)\\n-   \u5e94\u7528\u9879\u76ee\u90e8\u7f72\u529f\u80fd[ #320](https://github.com/modern-js-dev/modern.js/pull/320)\\n\\n## \u5347\u7ea7\u6307\u5357\\n\\n\u672c\u6b21\u66f4\u65b0\u53ef\u901a\u8fc7\u5220\u9664\u9879\u76ee pnpm-lock.yaml \u6216 yarn.lock \u91cd\u65b0\u5b89\u88c5\u4f9d\u8d56\u5373\u53ef\u4f7f\u7528 Modern.js \u6700\u65b0\u7248\u672c\u3002\\nModern.js \u5c06\u63d0\u4f9b\u81ea\u52a8\u5347\u7ea7\u5de5\u5177\uff0c\u540e\u7eed\u5347\u7ea7\u53ef\u4f7f\u7528\u5347\u7ea7\u5de5\u5177\u8fdb\u884c\uff0c\u656c\u8bf7\u671f\u5f85\u3002"}]}')}}]);