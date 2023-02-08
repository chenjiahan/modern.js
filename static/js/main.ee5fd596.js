"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[40179],{

/***/ 74224:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: renderInBrowser

// EXTERNAL MODULE: ./src/index.ts + 58 modules
var src = __webpack_require__(12067);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(52983);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js
var client = __webpack_require__(78520);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router-dom@6.6.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(56564);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__(40600);
// EXTERNAL MODULE: ../../packages/cli/doc-core/node_modules/virtual-site-data
var virtual_site_data = __webpack_require__(68548);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@remix-run+router@1.2.0/node_modules/@remix-run/router/dist/router.js
var router = __webpack_require__(29133);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.6.0_react@18.2.0/node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(23517);
// EXTERNAL MODULE: ../../packages/cli/doc-core/node_modules/virtual-routes.js
var virtual_routes = __webpack_require__(63610);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-helmet-async@1.3.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-helmet-async/lib/index.module.js
var index_module = __webpack_require__(63744);
// EXTERNAL MODULE: ../../packages/cli/doc-core/src/theme-default/index.ts + 32 modules
var theme_default = __webpack_require__(92494);
// EXTERNAL MODULE: ../../packages/cli/doc-core/src/runtime/utils.ts
var utils = __webpack_require__(71837);
// EXTERNAL MODULE: ../../packages/cli/doc-core/src/runtime/hooks.ts
var hooks = __webpack_require__(36560);
// EXTERNAL MODULE: ../../packages/cli/doc-core/src/shared/utils/index.ts
var shared_utils = __webpack_require__(60205);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(97458);
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/runtime/App.tsx
async function initPageData(routePath){const matched=(0,router/* matchRoutes */.fp)(virtual_routes/* routes */._,routePath);if(matched){var _mod$frontmatter;// Preload route component
const matchedRoute=matched[0].route;const mod=await matchedRoute.preload();const pagePath=(0,shared_utils/* cleanUrl */.bw)(matched[0].route.filePath);const relativePagePath=(0,utils/* getRelativePagePath */.L3)(routePath,pagePath,(virtual_site_data/* default */.Z===null||virtual_site_data/* default */.Z===void 0?void 0:virtual_site_data/* default.base */.Z.base)||'/');return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({siteData: virtual_site_data/* default */.Z,pagePath,relativePagePath},(0,shared_utils/* omit */.CE)(mod,['default'])),{},{pageType:(mod===null||mod===void 0?void 0:(_mod$frontmatter=mod.frontmatter)===null||_mod$frontmatter===void 0?void 0:_mod$frontmatter.pageType)||'doc',routePath});}else{// 404 Page
return{siteData: virtual_site_data/* default */.Z,pagePath:'',relativePagePath:'',pageType:'404',routePath:'/404'};}}function App({helmetContext}){const{setData:setPageData}=(0,react.useContext)(hooks/* DataContext */.R);const{pathname}=(0,react_router_dist/* useLocation */.TH)();(0,react.useLayoutEffect)(()=>{async function refetchData(){try{const pageData=await initPageData((0,utils/* normalizeRoutePath */.Tm)(pathname));setPageData(pageData);}catch(e){// eslint-disable-next-line no-console
console.log(e);}}refetchData();},[pathname,setPageData]);return/*#__PURE__*/(0,jsx_runtime.jsx)(index_module/* HelmetProvider */.B6,{context:helmetContext,children:/*#__PURE__*/(0,jsx_runtime.jsx)(theme_default/* default.Layout */.ZP.Layout,{})});}
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/runtime/clientEntry.tsx
async function renderInBrowser(){const container=document.getElementById('root');const enhancedApp=async()=>{const initialPageData=await initPageData((0,utils/* normalizeRoutePath */.Tm)(window.location.pathname));return function RootApp(){const[data,setData]=(0,react.useState)(initialPageData);return/*#__PURE__*/(0,jsx_runtime.jsx)(hooks/* DataContext.Provider */.R.Provider,{value:{data,setData},children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* BrowserRouter */.VK,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(App,{})})});};};const RootApp=await enhancedApp();if((0,shared_utils/* isProduction */.yv)()){(0,client/* hydrateRoot */.a)(container,/*#__PURE__*/(0,jsx_runtime.jsx)(RootApp,{}));}else{(0,client/* createRoot */.s)(container).render(/*#__PURE__*/(0,jsx_runtime.jsx)(RootApp,{}));}}renderInBrowser().then(()=>{src/* default.setup */.ZP.setup();});

/***/ }),

/***/ 20190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r": () => (/* binding */ Link)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(52983);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.6.0_react@18.2.0/node_modules/react-router/dist/index.js
var dist = __webpack_require__(23517);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@remix-run+router@1.2.0/node_modules/@remix-run/router/dist/router.js
var router = __webpack_require__(29133);
// EXTERNAL MODULE: ../../packages/cli/doc-core/node_modules/virtual-routes.js
var virtual_routes = __webpack_require__(63610);
// EXTERNAL MODULE: ../../node_modules/.pnpm/nprogress@0.2.0/node_modules/nprogress/nprogress.js
var nprogress = __webpack_require__(66567);
var nprogress_default = /*#__PURE__*/__webpack_require__.n(nprogress);
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/Link/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const index_module = ({"link":"R5q4o"});
// EXTERNAL MODULE: ../../packages/cli/doc-core/src/runtime/utils.ts
var utils = __webpack_require__(71837);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(97458);
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/Link/index.tsx
nprogress_default().configure({showSpinner:false});const EXTERNAL_URL_RE=/^(https?:)?\/\//;function Link(props){const{href='/',children,className=''}=props;const isExternal=EXTERNAL_URL_RE.test(href);const target=isExternal?'_blank':'';const rel=isExternal?'noopener noreferrer':undefined;const withBaseUrl=isExternal?href:(0,utils/* withBase */.pJ)(href);const navigate=(0,dist/* useNavigate */.s0)();const handleNavigate=async e=>{e.preventDefault();const matchedRoutes=(0,router/* matchRoutes */.fp)(virtual_routes/* routes */._,(0,utils/* normalizeRoutePath */.Tm)(withBaseUrl));if(matchedRoutes!==null&&matchedRoutes!==void 0&&matchedRoutes.length){const timer=setTimeout(()=>{nprogress_default().start();},200);await matchedRoutes[0].route.preload();clearTimeout(timer);nprogress_default().done();}navigate(withBaseUrl,{replace:false});};if(!isExternal){return/*#__PURE__*/(0,jsx_runtime.jsx)("a",{className:`${index_module.link} ${className}`,rel:rel,target:target,onClick:handleNavigate,cursor:"pointer",href:withBaseUrl,children:children});}else{return/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:withBaseUrl,target:target,rel:rel,className:`${index_module.link} ${className}`,children:children});}}

/***/ }),

/***/ 36560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ DataContext),
/* harmony export */   "V": () => (/* binding */ usePageData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52983);
const DataContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});function usePageData(){const ctx=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DataContext);return ctx.data;}

/***/ }),

/***/ 71837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E9": () => (/* binding */ removeBase),
/* harmony export */   "L3": () => (/* binding */ getRelativePagePath),
/* harmony export */   "Tm": () => (/* binding */ normalizeRoutePath),
/* harmony export */   "pJ": () => (/* binding */ withBase)
/* harmony export */ });
/* harmony import */ var virtual_site_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68548);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60205);
const getRelativePagePath=(routePath,filePath,base)=>{const extname=filePath.split('.').pop();let pagePath=(0,_shared_utils__WEBPACK_IMPORTED_MODULE_0__/* .cleanUrl */ .bw)(routePath);if(pagePath.startsWith(base)){pagePath=pagePath.slice(base.length);}if(extname){pagePath+=`.${extname}`;}return pagePath.replace(/^\//,'');};function normalizeRoutePath(routePath){return routePath.replace(/\.html$/,'').replace(/\/index$/,'/');}function withBase(url='/'){return (0,_shared_utils__WEBPACK_IMPORTED_MODULE_0__/* .withBase */ .pJ)(url,virtual_site_data__WEBPACK_IMPORTED_MODULE_1__/* ["default"].base */ .Z.base);}function removeBase(url){return (0,_shared_utils__WEBPACK_IMPORTED_MODULE_0__/* .removeBase */ .E9)(url,virtual_site_data__WEBPACK_IMPORTED_MODULE_1__/* ["default"].base */ .Z.base);}

/***/ }),

/***/ 60205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$U": () => (/* binding */ replaceLang),
/* harmony export */   "CE": () => (/* binding */ omit),
/* harmony export */   "E9": () => (/* binding */ removeBase),
/* harmony export */   "FH": () => (/* binding */ withoutLang),
/* harmony export */   "Kw": () => (/* binding */ normalizeSlash),
/* harmony export */   "Zi": () => (/* binding */ SEARCH_INDEX_JSON),
/* harmony export */   "_f": () => (/* binding */ inBrowser),
/* harmony export */   "bw": () => (/* binding */ cleanUrl),
/* harmony export */   "pJ": () => (/* binding */ withBase),
/* harmony export */   "tz": () => (/* binding */ withoutBase),
/* harmony export */   "yc": () => (/* binding */ normalizeHref),
/* harmony export */   "yv": () => (/* binding */ isProduction)
/* harmony export */ });
/* unused harmony exports QUERY_REGEXP, HASH_REGEXP, MDX_REGEXP, externalLinkRE, addLeadingSlash, removeLeadingSlash, removeTrailingSlash, parseUrl */
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40600);
const QUERY_REGEXP=/\?[\s\S]*$/;const HASH_REGEXP=/#[\s\S]*$/;const MDX_REGEXP=/\.mdx?$/;const externalLinkRE=/^(https?:)/;const SEARCH_INDEX_JSON='search_index.json';const isProduction=()=>"production"==='production';const cleanUrl=url=>url.replace(HASH_REGEXP,'').replace(QUERY_REGEXP,'');const inBrowser=()=>typeof window!=='undefined';function addLeadingSlash(url){return url.charAt(0)==='/'||url.startsWith('https')?url:`/${url}`;}function removeLeadingSlash(url){return url.charAt(0)==='/'?url.slice(1):url;}function removeTrailingSlash(url){return url.charAt(url.length-1)==='/'?url.slice(0,-1):url;}function normalizeSlash(url){return removeTrailingSlash(addLeadingSlash(url));}function replaceLang(rawUrl,targetLang,defaultLang,langs,base=''){const url=removeBase(rawUrl,base);const originalLang=url.split('/')[1];const inDefaultLang=!langs.includes(originalLang);let result;if(inDefaultLang){if(targetLang===defaultLang){result=url;}else{result=addLeadingSlash(`${targetLang}${url}`);}}else if(targetLang===defaultLang){result=url.replace(`/${originalLang}`,'');}else{result=url.replace(originalLang,targetLang);}return withBase(result,base);}const omit=(obj,keys)=>{const ret=(0,_home_runner_work_modern_js_modern_js_node_modules_pnpm_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({},obj);for(const key of keys){delete ret[key];}return ret;};const parseUrl=url=>{const[withoutHash,hash='']=url.split('#');const[cleanedUrl,query='']=withoutHash.split('?');return{url:cleanedUrl,query,hash};};function normalizeHref(url){if(!url){return'/';}let cleanUrl=url;if(!cleanUrl.endsWith('.html')){if(cleanUrl.endsWith('/')){cleanUrl+='index.html';}else{cleanUrl+='.html';}}return addLeadingSlash(cleanUrl);}function withoutLang(path,langs){const langRegexp=new RegExp(`^\\/(${langs.join('|')})`);return addLeadingSlash(path).replace(langRegexp,'');}function withoutBase(path,base=''){return addLeadingSlash(path).replace(normalizeSlash(base),'');}function withBase(url='/',base=''){const normalizedUrl=addLeadingSlash(url);const normalizedBase=normalizeSlash(base);// Avoid adding base path repeatly
return normalizedUrl.startsWith(normalizedBase)?normalizedUrl:`${normalizedBase}${normalizedUrl}`;}function removeBase(url,base){return addLeadingSlash(url).replace(normalizeSlash(base),'');}

/***/ }),

/***/ 96934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RZ": () => (/* binding */ formatText),
/* harmony export */   "gS": () => (/* binding */ normalizeContent),
/* harmony export */   "is": () => (/* binding */ backTrackHeaders)
/* harmony export */ });
const MAX_TITLE_LENGTH=20;function backTrackHeaders(rawHeaders,index){let current=rawHeaders[index];let currentIndex=index;const res=[current];while(current&&current.depth>2){// If there is no parent header, we will stop the loop
let matchedParent=false;for(let i=currentIndex-1;i>=0;i--){const header=rawHeaders[i];if(header.depth>1&&header.depth===current.depth-1){current=header;currentIndex=i;res.unshift(current);matchedParent=true;break;}}if(!matchedParent){break;}}return res;}function normalizeContent(content){// Do not match the content in code block
// Do not match the frontmatter
return content.replace(/```([\s\S]*?)```/gm,'').replace(/\x2D\x2D\x2D([\s\S]*?)\x2D\x2D\x2D/gm,'');}function formatText(text){return text.length>MAX_TITLE_LENGTH?`${text.slice(0,MAX_TITLE_LENGTH)}...`:text;}

/***/ }),

/***/ 92494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ theme_default)
});

// UNUSED EXPORTS: Button, Link, Nav, Search, Tab, Tabs

// EXTERNAL MODULE: ../../packages/cli/doc-core/src/runtime/hooks.ts
var hooks = __webpack_require__(36560);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(97458);
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/layout/NotFountLayout/index.tsx
function NotFoundLayout(){const{siteData}=(0,hooks/* usePageData */.V)();const defaultLang=siteData.lang;// Consider the existing sites include the defaultLang in some links, such as '/zh/guide/quick-start'
// We need to redirect them to '/guide/quick-start'
// In the meanwhile, we will not show the 404 page for the user experience
if(defaultLang&&location.pathname.includes(`/${defaultLang}/`)&&typeof window!=='undefined'){const redirectUrl=location.pathname.replace(`/${defaultLang}/`,'/');window.location.replace(redirectUrl);return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{});}else{// The 404 page content
return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{m:"auto t-50",p:"t-16 x-6 b-24 sm:t-24 x-8 b-40",text:"center",flex:"center col",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",{text:"6xl",font:"semibold",children:"404"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{p:"t-3",text:"xl",className:"leading-5",font:"bold",children:"PAGE NOT FOUND"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{m:"t-6 x-auto b-4.5",w:"16",style:{height:'1px'},bg:"gray-light-1"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{p:"t-5",children:/*#__PURE__*/(0,jsx_runtime.jsx)("a",{"inline-block":"~",border:"1px solid brand",className:"rounded-2xl",p:"y-2 x-4",text:"sm brand","font-medium":"~",transition:"border-color duration-300 color duration-300",hover:"border-color-brand-dark color-brand-dark",href:siteData.base,"aria-label":"go to home",children:"Take me home"})})]});}}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__(40600);
;// CONCATENATED MODULE: ./virtual:windi.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ../../node_modules/.pnpm/nprogress@0.2.0/node_modules/nprogress/nprogress.css
var nprogress = __webpack_require__(33906);
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/index.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ../../packages/cli/doc-core/node_modules/virtual-global-styles.js
var virtual_global_styles = __webpack_require__(20456);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(52983);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-helmet-async@1.3.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-helmet-async/lib/index.module.js
var index_module = __webpack_require__(63744);
// EXTERNAL MODULE: ./src/index.ts + 58 modules
var src = __webpack_require__(12067);
// EXTERNAL MODULE: ../../packages/cli/doc-core/node_modules/virtual-global-components.js
var virtual_global_components = __webpack_require__(20714);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.6.0_react@18.2.0/node_modules/react-router/dist/index.js
var dist = __webpack_require__(23517);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/throttle.js + 5 modules
var throttle = __webpack_require__(67933);
// EXTERNAL MODULE: ../../node_modules/.pnpm/copy-to-clipboard@3.3.3/node_modules/copy-to-clipboard/index.js
var copy_to_clipboard = __webpack_require__(86724);
var copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard);
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/logic/copyCode.ts
function setupCopyCodeButton(){const timeoutIdMap=new Map();window.addEventListener('click',e=>{const el=e.target;if(el.matches('div[class*="language-"] .modern-code-content > button.copy')){const parent=el.parentElement;const sibling=el.nextElementSibling;if(!parent||!sibling){return;}const{innerText:text=''}=sibling;const isCopied=copy_to_clipboard_default()(text);if(isCopied){el.classList.add('copied');clearTimeout(timeoutIdMap.get(el));const timeoutId=setTimeout(()=>{el.classList.remove('copied');el.blur();timeoutIdMap.delete(el);},2000);timeoutIdMap.set(el,timeoutId);}}});}
// EXTERNAL MODULE: ../../packages/cli/doc-core/src/shared/utils/index.ts
var utils = __webpack_require__(60205);
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/logic/sideEffects.ts
const DEFAULT_NAV_HEIGHT=56;function scrollToTarget(target,isSmooth){const targetPadding=parseInt(window.getComputedStyle(target).paddingTop,10);const targetTop=window.scrollY+target.getBoundingClientRect().top-DEFAULT_NAV_HEIGHT+targetPadding;// Only scroll smoothly in page header anchor
window.scrollTo((0,objectSpread2/* default */.Z)({left:0,top:targetTop},isSmooth?{behavior:'smooth'}:{}));}// Control the scroll behavior of the browser when user clicks on a link
function bindingWindowScroll(){// Initial scroll position
function scrollTo(el,hash,isSmooth=false){let target=null;try{target=el.classList.contains('header-anchor')?el:document.getElementById(decodeURIComponent(hash.slice(1)));}catch(e){console.warn(e);}if(target){scrollToTarget(target,isSmooth);}}window.addEventListener('click',e=>{// Only handle a tag click
const link=e.target.closest('a');if(link){const{origin,hash,target,pathname,search}=link;const currentUrl=window.location;// only intercept inbound links
if(hash&&target!=='_blank'&&origin===currentUrl.origin){// scroll between hash anchors in the same page
if(pathname===currentUrl.pathname&&search===currentUrl.search&&hash&&link.classList.contains('header-anchor')){e.preventDefault();history.pushState(null,'',hash);// use smooth scroll when clicking on header anchor links
scrollTo(link,hash,true);// still emit the event so we can listen to it in themes
window.dispatchEvent(new Event('hashchange'));}}}},{capture:true});window.addEventListener('hashchange',e=>{e.preventDefault();});}// Binding the scroll event to the aside element
function bindingAsideScroll(){function isBottom(){return document.documentElement.scrollTop+window.innerHeight>=document.documentElement.scrollHeight;}const NAV_HEIGHT=56;const marker=document.getElementById('aside-marker');const aside=document.getElementById('aside-container');const links=Array.from(document.querySelectorAll('.modern-doc .header-anchor')).filter(item=>{var _item$parentElement;return((_item$parentElement=item.parentElement)===null||_item$parentElement===void 0?void 0:_item$parentElement.tagName)!=='H1';});if(!aside||!links.length){return;}let prevActiveLink=null;const headers=Array.from((aside===null||aside===void 0?void 0:aside.getElementsByTagName('a'))||[]).map(item=>decodeURIComponent(item.hash));if(marker&&!headers.length){marker.style.opacity='0';return;}// Util function to set dom ref after determining the active link
const activate=(links,index)=>{if(links[index]){links[index].classList.add('aside-active');const id=links[index].getAttribute('href');const tocIndex=headers.findIndex(item=>item===id);const currentLink=aside===null||aside===void 0?void 0:aside.querySelector(`a[href="#${id===null||id===void 0?void 0:id.slice(1)}"]`);if(currentLink){if(prevActiveLink){prevActiveLink.classList.remove('aside-active');}prevActiveLink=currentLink;// Activate the a link element in aside
prevActiveLink.classList.add('aside-active');// Activate the marker element
marker.style.top=`${33+tocIndex*28}px`;marker.style.opacity='1';}}};const setActiveLink=()=>{if(isBottom()){activate(links,links.length-1);}else{// Compute current index
for(let i=0;i<links.length;i++){const currentAnchor=links[i];const nextAnchor=links[i+1];const scrollTop=Math.ceil(window.scrollY);const currentAnchorTop=currentAnchor.parentElement.offsetTop-NAV_HEIGHT;if(i===0&&scrollTop<currentAnchorTop||scrollTop===0){activate(links,0);break;}if(!nextAnchor){activate(links,i);break;}const nextAnchorTop=nextAnchor.parentElement.offsetTop-NAV_HEIGHT;if(scrollTop>=currentAnchorTop&&scrollTop<nextAnchorTop){activate(links,i);break;}}}};const throttledSetLink=(0,throttle/* default */.Z)(setActiveLink,200);window.addEventListener('scroll',throttledSetLink);// eslint-disable-next-line consistent-return
return()=>{window.removeEventListener('scroll',throttledSetLink);};}function setup(){if(!(0,utils/* inBrowser */._f)()){return;}bindingWindowScroll();setupCopyCodeButton();}
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/Aside/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Aside_index_module = ({});
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/Aside/index.tsx
function Aside(props){var _headers$;const{headers}=props;const hasOutline=headers.length>0;// For outline text highlight
const markerRef=(0,react.useRef)(null);const baseHeaderLevel=((_headers$=headers[0])===null||_headers$===void 0?void 0:_headers$.depth)||2;(0,react.useEffect)(()=>{let unbinding;if(markerRef.current){markerRef.current.style.opacity='0';}setTimeout(()=>{unbinding=bindingAsideScroll();},100);const hash=decodeURIComponent(window.location.hash);if(!hash){window.scrollTo(0,0);}else{const target=document.getElementById(hash.slice(1));if(target){scrollToTarget(target,false);}}return()=>{if(unbinding){unbinding();}};},[headers]);// const handleHeaderClick = e => {};
const renderHeader=header=>{return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:`#${header.id}`,block:"~",text:"text-2",hover:"text-text-1",transition:"color duration-300",className:"leading-7",style:{fontSize:'13px',paddingLeft:(header.depth-baseHeaderLevel)*12,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'},onClick:e=>{e.preventDefault();window.location.hash=header.id;const target=document.getElementById(header.id);if(target){scrollToTarget(target,false);}},children:header.text})},header.id);};return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{flex:"~ col",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:hasOutline?`<lg:hidden`:'hidden',children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{p:"l-4",text:"sm","font-medium":"~",id:"aside-container",style:{borderLeft:'1px solid var(--modern-c-divider-light)'},className:"relative",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"absolute",opacity:"0",w:"1px",h:"18px",bg:"brand",ref:markerRef,style:{top:'33px',left:'-1px',transition:'top 0.25s cubic-bezier(0, 1, 0.5, 1), background-color 0.5s, opacity 0.25s'},id:"aside-marker"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{block:"~",className:"leading-7",text:"sm",font:"semibold",children:props.outlineTitle}),/*#__PURE__*/(0,jsx_runtime.jsx)("nav",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:"relative",children:headers.map(renderHeader)})})]})})});}
// EXTERNAL MODULE: ../../packages/cli/doc-core/src/theme-default/logic/useLocaleSiteData.ts
var useLocaleSiteData = __webpack_require__(35638);
// EXTERNAL MODULE: ../../packages/cli/doc-core/src/runtime/utils.ts
var runtime_utils = __webpack_require__(71837);
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/logic/utils.ts
function isEqualPath(a,b){return (0,runtime_utils/* withBase */.pJ)((0,utils/* normalizeHref */.yc)(a))===(0,runtime_utils/* withBase */.pJ)((0,utils/* normalizeHref */.yc)(b));}function isActive(currentPath,targetLink,strict=false){if(!targetLink){return false;}if(strict){return isEqualPath(currentPath,targetLink);}else{return isEqualPath(currentPath,targetLink)||currentPath.startsWith(targetLink);}}
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/logic/usePrevNextPage.ts
function usePrevNextPage(){const{pathname}=(0,dist/* useLocation */.TH)();const localesData=(0,useLocaleSiteData/* useLocaleSiteData */.M)();const sidebar=localesData.sidebar||{};const flattenTitles=[];const walkThroughSidebar=sidebar=>{const walk=sidebarItem=>{if('items'in sidebarItem){if(sidebarItem.link){flattenTitles.push({text:sidebarItem.text,link:sidebarItem.link});}sidebarItem.items.forEach(item=>{walk(item);});}else{flattenTitles.push(sidebarItem);}};Object.values(sidebar).forEach(sidebarItem=>{sidebarItem.forEach(item=>{walk(item);});});};walkThroughSidebar(sidebar);const pageIndex=flattenTitles.findIndex(item=>isEqualPath((0,runtime_utils/* withBase */.pJ)(item.link),pathname));const prevPage=flattenTitles[pageIndex-1]||null;const nextPage=flattenTitles[pageIndex+1]||null;return{prevPage,nextPage};}
// EXTERNAL MODULE: ../../packages/cli/doc-core/src/theme-default/components/Link/index.tsx + 1 modules
var Link = __webpack_require__(20190);
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/DocFooter/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const DocFooter_index_module = ({"pager":"C_zBL","has-next":"Ldy33","hasNext":"Ldy33","prev":"ajVjQ","next":"A2aco","pager-link":"pAnzs","pagerLink":"pAnzs","title":"jr5Zr","desc":"rVEMI"});
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/DocFooter/index.tsx
function DocFooter(){const{prevPage,nextPage}=usePrevNextPage();const{prevPageText='Previous Page',nextPageText='Next page'}=(0,useLocaleSiteData/* useLocaleSiteData */.M)();return/*#__PURE__*/(0,jsx_runtime.jsx)("footer",{m:"t-8",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{flex:"~ col sm:row",justify:"sm:around",gap:"2",p:"t-6",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{flex:"~ col",className:DocFooter_index_module.prev,children:prevPage?/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* Link */.r,{href:(0,utils/* normalizeHref */.yc)(prevPage.link),className:DocFooter_index_module.pagerLink,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:DocFooter_index_module.desc,children:prevPageText}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:DocFooter_index_module.title,children:prevPage.text})]}):null}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{flex:"~ col",className:DocFooter_index_module.next,children:nextPage?/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* Link */.r,{href:(0,utils/* normalizeHref */.yc)(nextPage.link),className:`${DocFooter_index_module.pagerLink} ${DocFooter_index_module.next}`,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:DocFooter_index_module.desc,children:nextPageText}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:DocFooter_index_module.title,children:nextPage.text})]}):null})]})});}
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/logic/useSidebarData.ts
function useSidebarData(){var _localeData$sidebar;const localeData=(0,useLocaleSiteData/* useLocaleSiteData */.M)();const sidebar=(_localeData$sidebar=localeData.sidebar)!==null&&_localeData$sidebar!==void 0?_localeData$sidebar:{};const location=(0,dist/* useLocation */.TH)();const computeSidebarData=()=>{const currentPathname=location.pathname;for(const name of Object.keys(sidebar)){// Such as `/api/`，it will return all the sidebar group
if(isEqualPath((0,runtime_utils/* withBase */.pJ)(name),currentPathname)){return{group:'',items:sidebar[name]};}// Such as `/guide/getting-started`, it will return the guide groups and the group name `Introduction`
const result=sidebar[name].find(group=>{const match=item=>{const equalFunc=()=>isEqualPath((0,runtime_utils/* withBase */.pJ)(item.link),currentPathname);if('items'in item){// If the current path is the same as the group link, return true
if(equalFunc()){return true;}return item.items.some(i=>match(i));}else{return equalFunc();}};return match(group);});if(result){const sidebarGroup=sidebar[name];return{group:result.text||'',items:sidebarGroup};}}return{group:'',items:[]};};const[sidebarData,setSidebarData]=(0,react.useState)(computeSidebarData());(0,react.useEffect)(()=>{setSidebarData(computeSidebarData());},[location.pathname]);return sidebarData;}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@remix-run+router@1.2.0/node_modules/@remix-run/router/dist/router.js
var router = __webpack_require__(29133);
// EXTERNAL MODULE: ../../packages/cli/doc-core/node_modules/virtual-routes.js
var virtual_routes = __webpack_require__(63610);
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/assets/arrow-right.svg
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgArrowRight = props => /*#__PURE__*/react.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 32 32"
}, props), _path || (_path = /*#__PURE__*/react.createElement("path", {
  fill: "currentColor",
  d: "M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z"
})));
/* harmony default export */ const arrow_right = (SvgArrowRight);
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/Siderbar/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Siderbar_index_module = ({"sidebar":"UroNu","open":"ackUn","menuLink":"EZlU3","menuItem":"r3Oz1","collapseContainer":"BgJSm","menuItemStatic":"Emnh1","menuItemActive":"RCb_U"});
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/Siderbar/index.tsx
const textEllipsisStyle={whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'};function SidebarItemComp(props){const{item,depth=0,activeMatcher,id,setSidebarData}=props;const active=item.link&&activeMatcher(item.link);if('items'in item){return/*#__PURE__*/(0,jsx_runtime.jsx)(SidebarGroupComp,{id:id,item:item,depth:depth,activeMatcher:activeMatcher,collapsed:item.collapsed,setSidebarData:setSidebarData,preloadLink:props.preloadLink},`${item.text}-${id}`);}else{return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* Link */.r,{href:(0,utils/* normalizeHref */.yc)(item.link),className:Siderbar_index_module.menuLink,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{m:"t-1",p:"y-1.5 x-2",block:"~",border:"rounded-md",onMouseEnter:()=>props.preloadLink(item.link),className:active?Siderbar_index_module.menuItemActive:Siderbar_index_module.menuItem,style:textEllipsisStyle,children:item.text})});}}function SidebarGroupComp(props){var _items;const{item,depth=0,activeMatcher,id,setSidebarData}=props;const navigate=(0,dist/* useNavigate */.s0)();const containerRef=(0,react.useRef)(null);const transitionRef=(0,react.useRef)(null);const innerRef=(0,react.useRef)(null);const initialRender=(0,react.useRef)(true);const initialState=(0,react.useRef)(item.collapsed);const active=item.link&&activeMatcher(item.link);const{collapsed,collapsible=true}=item;const collapsibleIcon=/*#__PURE__*/(0,jsx_runtime.jsx)("div",{"cursor-pointer":"~",style:{transition:'transform 0.2s ease-out',transform:collapsed?'rotate(0deg)':'rotate(90deg)'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_right,{})});(0,react.useEffect)(()=>{if(initialRender.current){return;}if(!containerRef.current||!innerRef.current){return;}if(transitionRef.current){clearTimeout(transitionRef.current);}const container=containerRef.current;const inner=innerRef.current;// We should add the margin-top(4px) of first item in list, which is a part of the height of the container
const contentHeight=inner.clientHeight+4;if(collapsed){container.style.maxHeight=`${contentHeight}px`;container.style.transitionDuration='0.5s';inner.style.opacity='0';transitionRef.current=setTimeout(()=>{if(containerRef.current){containerRef.current.style.maxHeight='0px';}},0);}else{container.style.maxHeight=`${contentHeight}px`;container.style.transitionDuration='0.3s';inner.style.opacity='1';transitionRef.current=setTimeout(()=>{if(containerRef.current){containerRef.current.style.removeProperty('max-height');}},300);}},[collapsed]);(0,react.useEffect)(()=>{initialRender.current=false;},[]);const toggleCollapse=e=>{e.stopPropagation();// update collapsed state
setSidebarData(sidebarData=>{const newSidebarData=[...sidebarData];const indexes=id.split('-').map(Number);const initialIndex=indexes.shift();const root=newSidebarData[initialIndex];let current=root;for(const index of indexes){current=current.items[index];}if('items'in current){current.collapsed=!current.collapsed;}return newSidebarData;});};return/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{block:"~",className:"mt-1",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{flex:"~",justify:"between","items-start":"~",cursor:collapsible?'pointer':'none',className:`items-center ${// eslint-disable-next-line no-nested-ternary
active?Siderbar_index_module.menuItemActive:collapsible?Siderbar_index_module.menuItem:Siderbar_index_module.menuItemStatic}`,onMouseEnter:()=>item.link&&props.preloadLink(item.link),onClick:e=>{if(item.link){navigate((0,utils/* normalizeHref */.yc)(item.link));collapsed&&toggleCollapse(e);}else{collapsible&&toggleCollapse(e);}},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{p:"y-1 x-2 h-8",text:"sm",font:"semibold",style:textEllipsisStyle,children:item.text}),collapsible&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{p:"2",className:Siderbar_index_module.collapseContainer,onClick:toggleCollapse,children:collapsibleIcon})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{ref:containerRef,className:"transition-all duration-300 ease-in-out",style:{overflow:'hidden',maxHeight:initialState.current?0:undefined},children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{ref:innerRef,className:"transition-opacity duration-500 ease-in-out",style:{opacity:initialState.current?0:1},children:item===null||item===void 0?void 0:(_items=item.items)===null||_items===void 0?void 0:_items.map((item,index)=>/*#__PURE__*/ // eslint-disable-next-line react/no-array-index-key
(0,jsx_runtime.jsx)("div",{m:"l-4",children:/*#__PURE__*/(0,jsx_runtime.jsx)(SidebarItemComp,(0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},props),{},{item:item,depth:depth+1,id:`${id}-${index}`,preloadLink:props.preloadLink}))},index))})})]},id);}function SideBar(props){const{isSidebarOpen,langRoutePrefix,pathname,sidebarData:rawSidebarData}=props;const[sidebarData,setSidebarData]=(0,react.useState)(rawSidebarData.filter(Boolean).flat());(0,react.useEffect)(()=>{// 1. Update sidebarData when pathname changes
// 2. For current active item, expand its parent group
// Cache, Avoid redundant calculation
const matchCache=new WeakMap();const match=item=>{if(matchCache.has(item)){return matchCache.get(item);}if(item.link&&activeMatcher(item.link)){matchCache.set(item,true);return true;}if('items'in item){const result=item.items.some(child=>match(child));if(result){matchCache.set(item,true);return true;}}matchCache.set(item,false);return false;};const traverse=item=>{if('items'in item){item.items.forEach(traverse);if(match(item)){item.collapsed=false;}}};sidebarData.forEach(traverse);setSidebarData(rawSidebarData.filter(Boolean).flat());},[props.sidebarData,pathname]);const removeLangPrefix=path=>{return path.replace(langRoutePrefix,'');};const activeMatcher=path=>isActive((0,runtime_utils/* removeBase */.E9)(removeLangPrefix(pathname)),removeLangPrefix(path),true);const preloadLink=link=>{const match=(0,router/* matchRoutes */.fp)(virtual_routes/* routes */._,link);if(match!==null&&match!==void 0&&match.length){const{route}=match[0];route.preload();}};return/*#__PURE__*/(0,jsx_runtime.jsx)("aside",{className:`modern-scrollbar ${Siderbar_index_module.sidebar} ${isSidebarOpen?Siderbar_index_module.open:''}`,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{m:"t-1",children:/*#__PURE__*/(0,jsx_runtime.jsx)("nav",{children:sidebarData.map((item,index)=>{var _collapsed;return/*#__PURE__*/(0,jsx_runtime.jsx)(SidebarItemComp,{id:String(index),item:item,depth:0,activeMatcher:activeMatcher// The siderbarData is stable, so it's safe to use index as key
// eslint-disable-next-line react/no-array-index-key
,collapsed:(_collapsed=item.collapsed)!==null&&_collapsed!==void 0?_collapsed:true,setSidebarData:setSidebarData,preloadLink:preloadLink},index);})})})});}
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/assets/menu.svg
var menu_path;
function menu_extends() { menu_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return menu_extends.apply(this, arguments); }

const SvgMenu = props => /*#__PURE__*/react.createElement("svg", menu_extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 32 32"
}, props), menu_path || (menu_path = /*#__PURE__*/react.createElement("path", {
  fill: "currentColor",
  d: "M4 6h24v2H4zm0 18h24v2H4zm0-12h24v2H4zm0 6h24v2H4z"
})));
/* harmony default export */ const menu = (SvgMenu);
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/LocalSideBar/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const LocalSideBar_index_module = ({"localNav":"_aGGP","menu":"wNUbj","backDrop":"wvTRL"});
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/LocalSideBar/index.tsx
function SideMenu(props){const{langRoutePrefix,pathname,sidebarData}=props;const[isSidebarOpen,setIsOpen]=(0,react.useState)(false);function openSidebar(){setIsOpen(true);}function closeSidebar(){setIsOpen(false);}return/*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:LocalSideBar_index_module.localNav,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{flex:"~ center",onClick:openSidebar,className:LocalSideBar_index_module.menu,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{text:"md",m:"r-2",children:/*#__PURE__*/(0,jsx_runtime.jsx)(menu,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{text:"sm",children:"Menu"})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(SideBar,{langRoutePrefix:langRoutePrefix,pathname:pathname,sidebarData:sidebarData,isSidebarOpen:isSidebarOpen}),isSidebarOpen?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{onClick:closeSidebar,className:LocalSideBar_index_module.backDrop}):null]});}
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/Overview/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Overview_index_module = ({"header-anchor":"mPqs2","headerAnchor":"mPqs2","overview-groups":"_ecV6","overviewGroups":"_ecV6","overview-group-li":"AhQcS","overviewGroupLi":"AhQcS","level-2":"EdouY","level2":"EdouY","overview-group":"mLD5f","overviewGroup":"mLD5f","header":"GBUJO"});
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/Overview/index.tsx
function Overview(){const{routePath,siteData}=(0,hooks/* usePageData */.V)();const{pages}=siteData;const overviewModules=pages.filter(page=>page.routePath.startsWith(routePath.replace(/overview$/,''))&&page.routePath!==routePath);const{items:overviewSidebarGroups}=useSidebarData();const groups=(0,react.useMemo)(()=>{return overviewSidebarGroups.filter(item=>'items'in item).map(sidebarGroup=>({name:sidebarGroup.text||'',items:sidebarGroup.items.map(item=>{var _pageModule$toc;const pageModule=overviewModules.find(m=>isEqualPath(m.routePath,(0,runtime_utils/* withBase */.pJ)(item.link||'')));const getChildLink=traverseItem=>{if(traverseItem.link){return traverseItem.link;}if('items'in traverseItem){return getChildLink(traverseItem.items[0]);}return'';};const link=getChildLink(item);return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},item),{},{link,headers:(pageModule===null||pageModule===void 0?void 0:(_pageModule$toc=pageModule.toc)===null||_pageModule$toc===void 0?void 0:_pageModule$toc.filter(header=>header.depth===2))||[]});})}));},[overviewSidebarGroups]);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"overview-index",m:"x-auto",p:"x-8",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{flex:"~","align-items-center":"~",justify:"between",children:/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{children:"Overview"})}),groups.map(group=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{m:"b-16",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{children:group.name}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Overview_index_module.overviewGroups,children:group.items.map(item=>{var _item$headers;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Overview_index_module.overviewGroup,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{flex:"~",children:/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{style:{marginBottom:8},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* Link */.r,{href:(0,utils/* normalizeHref */.yc)(item.link),children:item.text})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{list:"none",children:(_item$headers=item.headers)===null||_item$headers===void 0?void 0:_item$headers.map(header=>/*#__PURE__*/(0,jsx_runtime.jsx)("li",{m:"first:t-2",className:`${Overview_index_module.overviewGroupLi} ${Overview_index_module[`level${header.depth}`]}`,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* Link */.r,{href:`${(0,utils/* normalizeHref */.yc)(item.link)}#${header.id}`,children:header.text})},header.id))})]},item.link);})})]},group.name))]});}
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/layout/DocLayout/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const DocLayout_index_module = ({"aside-container":"RsCtL","asideContainer":"RsCtL","docLayout":"Q34AI","content":"TP8A7"});
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/runtime/Content.tsx
const Content=()=>{const{pathname}=(0,dist/* useLocation */.TH)();const matched=(0,router/* matchRoutes */.fp)(virtual_routes/* routes */._,(0,runtime_utils/* normalizeRoutePath */.Tm)(pathname));if(!matched){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{});}const routesElement=matched[0].route.element;return/*#__PURE__*/(0,jsx_runtime.jsx)(react.Suspense,{children:routesElement});};
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/layout/DocLayout/index.tsx
function DocLayout(props){var _ref,_frontmatter$outline,_frontmatter$overview;const{beforeDocFooter,beforeDoc,afterDoc,beforeOutline,afterOutline}=props;const{toc=[],siteData,frontmatter}=(0,hooks/* usePageData */.V)();const headers=toc;const{themeConfig}=siteData;const localesData=(0,useLocaleSiteData/* useLocaleSiteData */.M)();const sidebar=localesData.sidebar||[];const{pathname}=(0,dist/* useLocation */.TH)();const{items:sidebarData}=useSidebarData();const langRoutePrefix=(0,utils/* normalizeSlash */.Kw)(localesData.langRoutePrefix||'');// siderbar Priority
// 1. frontmatter.sidebar
// 2. themeConfig.locales.sidebar
// 3. themeConfig.sidebar
const hasSidebar=(frontmatter===null||frontmatter===void 0?void 0:frontmatter.sidebar)!==false&&Object.keys(sidebar).length>0;const outlineTitle=(localesData===null||localesData===void 0?void 0:localesData.outlineTitle)||(themeConfig===null||themeConfig===void 0?void 0:themeConfig.outlineTitle)||'ON THIS PAGE';const hasAside=headers.length>0&&((_ref=(_frontmatter$outline=frontmatter===null||frontmatter===void 0?void 0:frontmatter.outline)!==null&&_frontmatter$outline!==void 0?_frontmatter$outline:themeConfig===null||themeConfig===void 0?void 0:themeConfig.outline)!==null&&_ref!==void 0?_ref:true);const isOverviewPage=(_frontmatter$overview=frontmatter===null||frontmatter===void 0?void 0:frontmatter.overview)!==null&&_frontmatter$overview!==void 0?_frontmatter$overview:false;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{p:"t-0",m:"md:t-14",className:DocLayout_index_module.docLayout,children:[beforeDoc,hasSidebar?/*#__PURE__*/(0,jsx_runtime.jsx)(SideMenu,{pathname:pathname,langRoutePrefix:langRoutePrefix,sidebarData:sidebarData}):null,/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{flex:"~ shrink-0",className:`${DocLayout_index_module.content}`,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{w:"full",children:isOverviewPage?/*#__PURE__*/(0,jsx_runtime.jsx)(Overview,{}):/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"modern-doc",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Content,{}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[beforeDocFooter,/*#__PURE__*/(0,jsx_runtime.jsx)(DocFooter,{})]})]})}),hasAside?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:DocLayout_index_module.asideContainer,style:{minHeight:'calc(100vh - (var(--modern-nav-height) + 32px))'},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[beforeOutline,/*#__PURE__*/(0,jsx_runtime.jsx)(Aside,{headers:headers,outlineTitle:outlineTitle}),afterOutline]})}):null]}),afterDoc]});}
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/layout/Layout/index.tsx
const Layout=props=>{var _frontmatter$title;const{top,bottom,beforeDocFooter,beforeDoc,afterDoc,beforeOutline,afterOutline,beforeNavTitle,afterNavTitle}=props;const docProps={beforeDocFooter,beforeDoc,afterDoc,beforeOutline,afterOutline};const{// Inject by remark-plugin-toc
title:articleTitle,frontmatter,siteData,pageType}=(0,hooks/* usePageData */.V)();const localesData=(0,useLocaleSiteData/* useLocaleSiteData */.M)();// Priority: front matter title > h1 title
let title=(_frontmatter$title=frontmatter===null||frontmatter===void 0?void 0:frontmatter.title)!==null&&_frontmatter$title!==void 0?_frontmatter$title:articleTitle;const mainTitle=siteData.title||localesData.title;if(title){// append main title as a suffix
title=`${title} - ${mainTitle}`;}else{title=mainTitle;}const description=(frontmatter===null||frontmatter===void 0?void 0:frontmatter.description)||siteData.description||localesData.description;// Use doc layout by default
const getContentLayout=()=>{switch(pageType){case'home':return/*#__PURE__*/(0,jsx_runtime.jsx)(src/* default.HomeLayout */.ZP.HomeLayout,{});case'doc':return/*#__PURE__*/(0,jsx_runtime.jsx)(DocLayout,(0,objectSpread2/* default */.Z)({},docProps));case'404':return/*#__PURE__*/(0,jsx_runtime.jsx)(src/* default.NotFoundLayout */.ZP.NotFoundLayout,{});case'custom':return/*#__PURE__*/(0,jsx_runtime.jsx)(Content,{});default:return/*#__PURE__*/(0,jsx_runtime.jsx)(DocLayout,(0,objectSpread2/* default */.Z)({},docProps));}};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{height:'100%'},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(index_module/* Helmet */.ql,{children:[title?/*#__PURE__*/(0,jsx_runtime.jsx)("title",{children:title}):null,description?/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"description",content:description}):null]}),top,/*#__PURE__*/(0,jsx_runtime.jsx)(src/* Nav */.JL,{beforeNavTitle:beforeNavTitle,afterNavTitle:afterNavTitle}),/*#__PURE__*/(0,jsx_runtime.jsx)("section",{children:getContentLayout()}),bottom,// Global UI
virtual_global_components/* default.map */.Z.map((Component,index)=>/*#__PURE__*/ // The component order is stable
// eslint-disable-next-line react/no-array-index-key
(0,jsx_runtime.jsx)(Component,{},index))]});};
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/Button/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Button_index_module = ({"button":"B0JQV","medium":"WNEsY","big":"U1msm","brand":"zXehA","alt":"ZSwJp"});
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/Button/index.tsx
function Button(props){var _type;const{theme='brand',size='big',href='/',external=false,className=''}=props;let type=null;if(props.type==='button'){type='button';}else if(props.type==='a'){// Will be tree shaking in production in modern mode.
type=external?'a':Link/* Link */.r;}return/*#__PURE__*/react.createElement((_type=type)!==null&&_type!==void 0?_type:'a',{className:`${Button_index_module.button} ${Button_index_module[theme]} ${Button_index_module[size]} ${className}`,href},props.text);}
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/HomeHero/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const HomeHero_index_module = ({"clip":"QG9Rc"});
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/HomeHero/index.tsx
const DEFAULT_HERO={name:'modern',text:'modern ssg',tagline:'modern ssg',actions:[],image:undefined};function HomeHero(){var _hero$image,_hero$image2;const{frontmatter}=(0,hooks/* usePageData */.V)();const hero=(frontmatter===null||frontmatter===void 0?void 0:frontmatter.hero)||DEFAULT_HERO;const hasImage=hero.image!==undefined;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{m:"auto",p:"t-12 x-6 b-12 sm:t-0 sm:x-8 sm:x-16 md:t-20 md:x-16 md:b-28",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"max-w-1152px",m:"auto",flex:"~ col md:row",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{m:"auto md:0",order:"2 md:1",text:"center md:left",flex:"~ col lt-sm:c",className:"max-w-592px",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{font:"bold",text:"3xl sm:5xl md:6xl",m:"auto md:0",p:"b-3",className:"max-w-392px sm:max-w-576px",children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:HomeHero_index_module.clip,children:hero.name})}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{m:"x-auto md:0",text:"3xl sm:5xl md:6xl",font:"bold",className:"max-w-392px sm:max-w-576px",children:hero.text}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{p:"t-4",m:"auto md:0",text:"sm sm:xl md:2xl text-2",font:"medium",className:"whitespace-pre-wrap max-w-392px sm:max-w-576px",children:hero.tagline}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{flex:"~ wrap",justify:"center md:start",m:"-1.5",p:"t-8",children:hero.actions.map(action=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{p:"1",flex:"shrink-0",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Button,{type:"a",text:action.text,href:(0,utils/* normalizeHref */.yc)(action.link),theme:action.theme})},action.link))})]}),hasImage?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{w:"sm:max-60",h:"sm:max-60",flex:"md:center",m:"auto",order:"1 md:2",display:"flex sm:flex md:none lg:flex",children:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:(_hero$image=hero.image)===null||_hero$image===void 0?void 0:_hero$image.src,alt:(_hero$image2=hero.image)===null||_hero$image2===void 0?void 0:_hero$image2.alt})}):null]})});}
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/HomeFeatures/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const HomeFeatures_index_module = ({"grid-2":"m2JAU","grid2":"m2JAU","grid-4":"cKq0u","grid4":"cKq0u","grid-6":"zyyfo","grid6":"zyyfo","grid-3":"FTep1","grid3":"FTep1"});
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/HomeFeatures/index.tsx
const PRESET_COUNT=[2,3,4];const getGridClass=count=>{if(!count){return'';}else if(PRESET_COUNT.includes(count)){return`grid-${12/count}`;}else if(count%3===0){return'grid-4';}else if(count%2===0){return'grid-6';}return'';};function HomeFeature(){const{frontmatter}=(0,hooks/* usePageData */.V)();const features=frontmatter===null||frontmatter===void 0?void 0:frontmatter.features;const gridClass=getGridClass(features===null||features===void 0?void 0:features.length);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"max-w-1152px",m:"auto",flex:"~ wrap",justify:"between",children:features===null||features===void 0?void 0:features.map(feature=>{const{icon,title,details}=feature;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{border:"rounded-md",p:"r-0 md:r-4 b-4",className:`${gridClass?HomeFeatures_index_module[gridClass]:'w-full'}`,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{h:"full",p:"6",bg:"soft",border:"~ bg-soft solid rounded-xl",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{flex:"~ center",m:"b-5",w:"12",h:"12",text:"3xl",bg:"gray-light-4 dark:bg-white",border:"rounded-md",children:icon}),/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{font:"bold",children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{p:"t-2",text:"sm text-2",font:"medium",className:"leading-6",children:details})]},title)},title);})});}
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/HomeFooter/index.tsx
function Footer(){const{siteData}=(0,hooks/* usePageData */.V)();const{message}=siteData.themeConfig.footer||{};return/*#__PURE__*/(0,jsx_runtime.jsx)("footer",{p:"y-8 x-6 sm:8",bg:"white",pos:"relative",border:"t-1 b-0 solid divider-light",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{m:"auto",w:"full",text:"center",children:message&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{font:"medium",text:"sm text-2",children:message})})});}
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/layout/HomeLayout/index.tsx
function HomeLayout(props){const{beforeHero,afterHero,beforeFeatures,afterFeatures}=props;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"mt-14 pb-12",children:[beforeHero,/*#__PURE__*/(0,jsx_runtime.jsx)(HomeHero,{}),afterHero,beforeFeatures,/*#__PURE__*/(0,jsx_runtime.jsx)(HomeFeature,{}),afterFeatures]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Footer,{})]});}
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/index.ts
/* harmony default export */ const theme_default = ({Layout: Layout,NotFoundLayout: NotFoundLayout,HomeLayout: HomeLayout,setup: setup});

/***/ }),

/***/ 35638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ useLocaleSiteData)
/* harmony export */ });
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40600);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23517);
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36560);
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71837);
/* harmony import */ var _shared_utils_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60205);
function useLocaleSiteData(){var _pageData$siteData$th,_pageData$siteData,_pageData$siteData$la;const pageData=(0,_runtime__WEBPACK_IMPORTED_MODULE_0__/* .usePageData */ .V)();const{pathname}=// eslint-disable-next-line react-hooks/rules-of-hooks
 true?(0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__/* .useLocation */ .TH)():0;const themeConfig=(_pageData$siteData$th=pageData===null||pageData===void 0?void 0:(_pageData$siteData=pageData.siteData)===null||_pageData$siteData===void 0?void 0:_pageData$siteData.themeConfig)!==null&&_pageData$siteData$th!==void 0?_pageData$siteData$th:{};const defaultLang=(_pageData$siteData$la=pageData.siteData.lang)!==null&&_pageData$siteData$la!==void 0?_pageData$siteData$la:'zh';const locales=themeConfig===null||themeConfig===void 0?void 0:themeConfig.locales;if(!locales||locales.length===0){return{nav:themeConfig.nav,sidebar:themeConfig.sidebar,prevPageText:themeConfig.prevPageText,nextPageText:themeConfig.nextPageText};}const localeKeys=locales.map(locale=>locale.lang);const localeKey=localeKeys.find(locale=>{const normalizedLocalePrefix=(0,_runtime__WEBPACK_IMPORTED_MODULE_2__/* .withBase */ .pJ)((0,_shared_utils_index__WEBPACK_IMPORTED_MODULE_3__/* .normalizeSlash */ .Kw)(locale));return pathname.startsWith(normalizedLocalePrefix);})||localeKeys[0];const localeInfo=locales.find(locale=>locale.lang===localeKey);return (0,_home_runner_work_modern_js_modern_js_node_modules_pnpm_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)((0,_home_runner_work_modern_js_modern_js_node_modules_pnpm_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({},localeInfo),{},{langRoutePrefix:localeKey===defaultLang?'/':localeKey});}

/***/ }),

/***/ 12067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "JL": () => (/* reexport */ Nav),
  "ol": () => (/* reexport */ Search),
  "OK": () => (/* reexport */ Tab),
  "mQ": () => (/* reexport */ Tabs),
  "ZP": () => (/* binding */ src)
});

// UNUSED EXPORTS: Button, Link

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__(40600);
// EXTERNAL MODULE: ../../packages/cli/doc-core/src/theme-default/index.ts + 32 modules
var theme_default = __webpack_require__(92494);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(52983);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(14517);
// EXTERNAL MODULE: ../../packages/cli/doc-core/src/runtime/utils.ts
var utils = __webpack_require__(71837);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.6.0_react@18.2.0/node_modules/react-router/dist/index.js
var dist = __webpack_require__(23517);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(97458);
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/runtime/NoSSR.tsx
function NoSSR(props){const{children}=props;const[isMounted,setIsMounted]=(0,react.useState)(false);(0,react.useEffect)(()=>{setIsMounted(true);},[]);if(!isMounted){return null;}else{return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:children});}}
;// CONCATENATED MODULE: ./static/img/features/unity.svg
var _title, _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgUnity = props => /*#__PURE__*/react.createElement("svg", _extends({
  height: "100px",
  width: "100px",
  fill: "#000000",
  xmlns: "http://www.w3.org/2000/svg",
  "data-name": "Layer 1",
  viewBox: "0 0 512 512",
  x: "0px",
  y: "0px"
}, props), _title || (_title = /*#__PURE__*/react.createElement("title", null, "N_P_030Artboard 1")), _path || (_path = /*#__PURE__*/react.createElement("path", {
  d: "M444.72,128.78H441.2a16.45,16.45,0,0,0-14-25.21H396.57a16.47,16.47,0,0,0-14-25.22H334.4c-1.94,0-48-.81-64.48,20.85-13.45,17.69-51.52,17.09-55.19,17V113a16.45,16.45,0,0,0-25.21-14v-8.3a16.47,16.47,0,0,0-25.22-14v-8.4a16.49,16.49,0,1,0-33,0v3.52a16.47,16.47,0,0,0-25.22,14v30.66A16.34,16.34,0,0,0,97.39,114,16.51,16.51,0,0,0,80.9,130.53v48.21c0,1.95-.81,48,20.85,64.48,18.47,14,17,54.89,17,55.47v1.83h-6.81a16.46,16.46,0,0,0-14,25.21h-8.3a16.45,16.45,0,0,0-14,25.22h-8.4a16.49,16.49,0,1,0,0,33H70.8a16.45,16.45,0,0,0,14,25.21h30.67a16.47,16.47,0,0,0,14,25.22H179c8.14,0,48-1,63.08-20.86,14-18.47,54.9-17,55.47-17h1.6V399a16.45,16.45,0,0,0,25.21,14v8.3a16.47,16.47,0,0,0,25.22,14v8.4a16.49,16.49,0,1,0,33,0v-3.52a16.47,16.47,0,0,0,25.22-14V395.44a16.34,16.34,0,0,0,8.72,2.52A16.51,16.51,0,0,0,433,381.47V333.26c0-1.95.81-48-20.85-64.48-18.47-14-17-54.89-17-55.47v-1.13h4.93a16.46,16.46,0,0,0,14-25.21h8.3a16.45,16.45,0,0,0,14-25.21h8.4a16.49,16.49,0,0,0,0-33Zm-127.07,83.4V216c-.55,12.36-3.34,46.44-9.5,55.53-8.7,12.81-9,33.21-9,34.11V319h-4.27c-12.36-.56-46.44-3.34-55.53-9.51-12.81-8.69-33.21-9-34.11-9h-9V296c.56-12.36,3.34-46.44,9.51-55.53,8.69-12.81,9-33.21,9-34.11V193.68h2.39c12.36.55,46.44,3.33,55.53,9.5,12.81,8.69,33.21,9,34.11,9ZM126.48,298.85c.08-1.84,1.67-45.32-20-61.82C87.93,223,88.65,179.34,88.66,178.82V130.53a8.73,8.73,0,1,1,17.45,0v32a3.89,3.89,0,0,0,7.77,0V85.9a8.73,8.73,0,1,1,17.45,0v68.62a3.88,3.88,0,0,0,7.76,0V68.41a8.73,8.73,0,1,1,17.45,0v79.81a3.88,3.88,0,0,0,7.76,0V90.78a8.73,8.73,0,1,1,17.46,0v64.05a3.88,3.88,0,0,0,7.76,0V113A8.73,8.73,0,0,1,207,113v93.29c0,.19-.28,18.9-7.67,29.79-8.5,12.54-10.62,54.77-10.83,59.72v4.68h-62Zm171.24,89.92c-1.84-.08-45.33-1.67-61.82,20-14.07,18.51-57.68,17.78-58.21,17.79h-48.3a8.73,8.73,0,0,1,0-17.46h32a3.88,3.88,0,1,0,0-7.76H84.76a8.73,8.73,0,0,1,0-17.45h68.63a3.88,3.88,0,1,0,0-7.76H67.28a8.73,8.73,0,1,1,0-17.45h79.8a3.88,3.88,0,1,0,0-7.76H89.64a8.73,8.73,0,0,1,0-17.46h64.05a3.88,3.88,0,0,0,0-7.76H111.91a8.73,8.73,0,1,1,0-17.45H205.2c.19,0,18.9.28,29.79,7.67,12.54,8.5,54.77,10.62,59.72,10.83h4.44v62ZM387.4,213.15c-.08,1.84-1.66,45.32,20,61.81,18.52,14.07,17.8,57.7,17.79,58.22v48.29a8.73,8.73,0,1,1-17.45,0v-32a3.89,3.89,0,0,0-7.77,0V426.1a8.73,8.73,0,1,1-17.45,0V357.48a3.88,3.88,0,0,0-7.76,0v86.11a8.73,8.73,0,1,1-17.45,0V363.78a3.88,3.88,0,0,0-7.76,0v57.44a8.73,8.73,0,1,1-17.45,0V357.17a3.89,3.89,0,0,0-7.77,0V399a8.73,8.73,0,0,1-17.45,0V305.67c0-.19.28-18.9,7.67-29.79,8.5-12.54,10.62-54.77,10.84-59.72v-4h62ZM444.72,154h-79.8a3.88,3.88,0,1,0,0,7.76h57.44a8.73,8.73,0,0,1,0,17.45H358.31a3.88,3.88,0,0,0,0,7.76h41.78a8.73,8.73,0,1,1,0,17.45H306.8c-.19,0-18.9-.27-29.79-7.66-12.54-8.51-54.77-10.62-59.72-10.84h-2.56V124c.53,0,1.46,0,2.73,0,10.61,0,44.52-1.51,58.64-20.09s57.7-17.77,58.21-17.78h48.3a8.73,8.73,0,0,1,0,17.45h-32a3.88,3.88,0,1,0,0,7.76h76.66a8.73,8.73,0,0,1,0,17.45H358.61a3.88,3.88,0,0,0,0,7.76h86.11a8.73,8.73,0,0,1,0,17.46Z"
})));
/* harmony default export */ const unity = (SvgUnity);
;// CONCATENATED MODULE: ./static/img/features/dynamic.svg
var _g;
function dynamic_extends() { dynamic_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return dynamic_extends.apply(this, arguments); }

const SvgDynamic = props => /*#__PURE__*/react.createElement("svg", dynamic_extends({
  height: "100px",
  width: "100px",
  fill: "#000000",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 64 64",
  style: {
    enableBackground: "new 0 0 64 64"
  },
  xmlSpace: "preserve"
}, props), _g || (_g = /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
  d: "M63,23V9.586L54.414,1H29v12H8c-2.757,0-5,2.243-5,5v35H1v1c0,4.963,4.038,9,9,9h44c4.962,0,9-4.037,9-9v-1h-2V23H63z    M55,4.414L59.586,9H55V4.414z M31.414,29c0.645,0,1.251-0.251,1.707-0.707L38.414,23H55v26H9V19h20v7.586   C29,27.917,30.083,29,31.414,29z M5,18c0-1.654,1.346-3,3-3h21v2H9c-1.103,0-2,0.897-2,2v30c0,1.103,0.897,2,2,2h46   c1.103,0,2-0.897,2-2V23h2v30H5V18z M39.816,55c-0.414,1.161-1.514,2-2.816,2H27c-1.302,0-2.402-0.839-2.816-2H39.816z M54,61H10   c-3.521,0-6.442-2.612-6.929-6h19.03c0.465,2.279,2.484,4,4.899,4h10c2.414,0,4.434-1.721,4.899-4h19.03   C60.442,58.388,57.521,61,54,61z M37.586,21l-5.879,5.879C31.469,27.117,31,26.924,31,26.586V3h22v8h8v10H37.586z"
}), /*#__PURE__*/react.createElement("path", {
  d: "M43,5H33v6h10V5z M41,9h-6V7h6V9z"
}), /*#__PURE__*/react.createElement("rect", {
  x: 45,
  y: 5,
  width: 6,
  height: 2
}), /*#__PURE__*/react.createElement("rect", {
  x: 45,
  y: 9,
  width: 6,
  height: 2
}), /*#__PURE__*/react.createElement("rect", {
  x: 33,
  y: 13,
  width: 2,
  height: 2
}), /*#__PURE__*/react.createElement("rect", {
  x: 37,
  y: 13,
  width: 22,
  height: 2
}), /*#__PURE__*/react.createElement("rect", {
  x: 33,
  y: 17,
  width: 26,
  height: 2
}), /*#__PURE__*/react.createElement("path", {
  d: "M11,35h16V21H11V35z M13,23h12v10H13V23z"
}), /*#__PURE__*/react.createElement("path", {
  d: "M29,47h24V35H29V47z M31,37h20v8H31V37z"
}), /*#__PURE__*/react.createElement("rect", {
  x: 51,
  y: 31,
  width: 2,
  height: 2
}), /*#__PURE__*/react.createElement("rect", {
  x: 37,
  y: 31,
  width: 12,
  height: 2
}), /*#__PURE__*/react.createElement("rect", {
  x: 37,
  y: 27,
  width: 16,
  height: 2
}), /*#__PURE__*/react.createElement("rect", {
  x: 11,
  y: 37,
  width: 2,
  height: 2
}), /*#__PURE__*/react.createElement("rect", {
  x: 15,
  y: 37,
  width: 12,
  height: 2
}), /*#__PURE__*/react.createElement("rect", {
  x: 11,
  y: 41,
  width: 16,
  height: 2
}), /*#__PURE__*/react.createElement("rect", {
  x: 11,
  y: 45,
  width: 16,
  height: 2
}))));
/* harmony default export */ const dynamic = (SvgDynamic);
;// CONCATENATED MODULE: ./static/img/features/api.svg
var api_title, api_path, _path2, _path3, _path4, _path5, _path6;
function api_extends() { api_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return api_extends.apply(this, arguments); }

const SvgApi = props => /*#__PURE__*/react.createElement("svg", api_extends({
  height: "100px",
  width: "100px",
  fill: "#000000",
  xmlns: "http://www.w3.org/2000/svg",
  "data-name": "\\u0421\\u043B\\u043E\\u0439 1",
  viewBox: "0 0 128 128",
  x: "0px",
  y: "0px"
}, props), api_title || (api_title = /*#__PURE__*/react.createElement("title", null, "ic_api_gears")), api_path || (api_path = /*#__PURE__*/react.createElement("path", {
  d: "M86,86a15.76,15.76,0,1,0,22.29,0A15.77,15.77,0,0,0,86,86ZM105.5,105.5a11.75,11.75,0,0,1-16.63,0,11.76,11.76,0,1,1,16.63,0Z"
})), _path2 || (_path2 = /*#__PURE__*/react.createElement("path", {
  d: "M126.65,99.51a2,2,0,0,0-1.25-1l-3.16-.85q0-.5,0-1l3.16-.85a2,2,0,0,0,1.25-1c.31-.58,1.82-3.57,1.2-5.89s-3.43-4.15-4-4.5a2,2,0,0,0-1.57-.23l-3.15.85c-.16-.29-.33-.58-.5-.86L121,81.92a2,2,0,0,0,.59-1.48c0-.65-.21-4-1.91-5.7s-5-1.88-5.7-1.9a1.92,1.92,0,0,0-1.47.58l-2.31,2.31-.86-.5.84-3.15a2,2,0,0,0-.23-1.57c-.34-.56-2.18-3.36-4.5-4s-5.31.89-5.89,1.2a2,2,0,0,0-1,1.24l-.85,3.16h-1L95.84,69a2,2,0,0,0-1-1.24c-.58-.31-3.57-1.83-5.89-1.2s-4.16,3.42-4.5,4a2,2,0,0,0-.23,1.57l.85,3.15-.86.5-2.31-2.31a2,2,0,0,0-1.48-.58c-.65,0-4,.2-5.7,1.9s-1.88,5.05-1.9,5.7a2,2,0,0,0,.58,1.48l2.31,2.31c-.17.28-.34.57-.5.86l-3.15-.85a2,2,0,0,0-1.57.23c-.56.35-3.36,2.18-4,4.5s.89,5.31,1.2,5.89a2,2,0,0,0,1.24,1l3.16.85q0,.5,0,1L69,98.53a2,2,0,0,0-1.24,1c-.31.58-1.83,3.57-1.21,5.89s3.43,4.16,4,4.5a2,2,0,0,0,1.57.23l3.15-.84c.16.29.33.57.5.86l-2.31,2.31a2,2,0,0,0-.58,1.47c0,.65.2,4,1.9,5.7s5.05,1.89,5.7,1.91a2,2,0,0,0,1.48-.59l2.31-2.31.86.5-.85,3.15a2,2,0,0,0,.23,1.57c.34.56,2.18,3.36,4.5,4a4.89,4.89,0,0,0,1.21.15,11.27,11.27,0,0,0,4.68-1.35,2,2,0,0,0,1-1.25l.85-3.16q.5,0,1,0l.85,3.16a2,2,0,0,0,1,1.25c.58.31,3.57,1.82,5.89,1.2s4.16-3.43,4.5-4a2,2,0,0,0,.23-1.57l-.84-3.15.86-.5,2.31,2.31a1.93,1.93,0,0,0,1.47.59c.65,0,4-.21,5.7-1.91s1.89-5,1.91-5.7a2,2,0,0,0-.59-1.47l-2.31-2.31c.17-.29.34-.57.5-.86l3.15.84a2,2,0,0,0,1.57-.23c.56-.34,3.36-2.18,4-4.5S127,100.09,126.65,99.51ZM124,104.37a5,5,0,0,1-1.55,1.66l-3.82-1a2,2,0,0,0-2.33,1.09,21.56,21.56,0,0,1-1.84,3.17,2,2,0,0,0,.22,2.57l2.81,2.8a5.06,5.06,0,0,1-.67,2.17,5,5,0,0,1-2.17.67l-2.8-2.81a2,2,0,0,0-2.57-.22,19.91,19.91,0,0,1-3.17,1.84,2,2,0,0,0-1.09,2.33l1,3.82a5,5,0,0,1-1.66,1.55,4.86,4.86,0,0,1-2.22-.51l-1-3.83A2,2,0,0,0,99,118.17a22.49,22.49,0,0,1-3.67,0,2,2,0,0,0-2.1,1.47l-1,3.83A5,5,0,0,1,90,124a4.9,4.9,0,0,1-1.67-1.55l1-3.82a2,2,0,0,0-1.09-2.33,20.36,20.36,0,0,1-3.17-1.84,2,2,0,0,0-2.56.22l-2.81,2.81a5.11,5.11,0,0,1-2.17-.67,5,5,0,0,1-.67-2.17l2.81-2.8a2,2,0,0,0,.22-2.57,21.05,21.05,0,0,1-1.84-3.17A2,2,0,0,0,75.76,105l-3.82,1a5.08,5.08,0,0,1-1.55-1.66,5,5,0,0,1,.51-2.22l3.83-1A2,2,0,0,0,76.21,99a20.45,20.45,0,0,1,0-3.67,2,2,0,0,0-1.48-2.1l-3.83-1A5,5,0,0,1,70.39,90a4.9,4.9,0,0,1,1.55-1.67l3.82,1a2,2,0,0,0,2.33-1.09,22.09,22.09,0,0,1,1.84-3.17,2,2,0,0,0-.22-2.56L76.9,79.74a5.11,5.11,0,0,1,.67-2.17,5,5,0,0,1,2.17-.67l2.81,2.81a2,2,0,0,0,2.56.22,22.09,22.09,0,0,1,3.17-1.84,2,2,0,0,0,1.09-2.33l-1-3.82A5,5,0,0,1,90,70.39a5,5,0,0,1,2.21.51l1,3.83a2,2,0,0,0,2.1,1.48,20.45,20.45,0,0,1,3.67,0,2,2,0,0,0,2.11-1.48l1-3.83a5.11,5.11,0,0,1,2.22-.51A5,5,0,0,1,106,71.94l-1,3.82a2,2,0,0,0,1.09,2.33,21.56,21.56,0,0,1,3.17,1.84,2,2,0,0,0,2.57-.22l2.8-2.81a5,5,0,0,1,2.17.67,4.86,4.86,0,0,1,.67,2.17l-2.81,2.81a2,2,0,0,0-.22,2.56,21.19,21.19,0,0,1,1.84,3.17,2,2,0,0,0,2.33,1.09l3.82-1A4.9,4.9,0,0,1,124,90a4.83,4.83,0,0,1-.51,2.21l-3.83,1a2,2,0,0,0-1.47,2.1,22.49,22.49,0,0,1,0,3.67,2,2,0,0,0,1.47,2.11l3.83,1A4.94,4.94,0,0,1,124,104.37Z"
})), _path3 || (_path3 = /*#__PURE__*/react.createElement("path", {
  d: "M69.71,74.69a2,2,0,0,0-.26-.76l-.91-1.59a35.88,35.88,0,0,0,3.8-3.8l1.59.91a2,2,0,0,0,.76.26c3.63.43,8.24.44,9.62-1.94s-1-6.37-3.14-9.3a2,2,0,0,0-.6-.53L79,57a35,35,0,0,0,1.39-5.2h1.83a2.14,2.14,0,0,0,.79-.16c3.36-1.44,7.36-3.74,7.36-6.49s-4-5-7.36-6.48a2,2,0,0,0-.79-.16H80.38A34.8,34.8,0,0,0,79,33.33l1.58-.91a1.91,1.91,0,0,0,.6-.53c2.19-2.93,4.51-6.92,3.14-9.3s-6-2.37-9.62-1.93a2,2,0,0,0-.76.25l-1.59.92A35.14,35.14,0,0,0,68.53,18l.92-1.59a2,2,0,0,0,.26-.76c.43-3.63.44-8.24-1.94-9.62s-6.37,1-9.3,3.14a2,2,0,0,0-.53.6L57,11.37A35,35,0,0,0,51.83,10V8.15a2.14,2.14,0,0,0-.16-.79C50.23,4,47.93,0,45.18,0s-5,4-6.48,7.36a2,2,0,0,0-.17.79V10a35,35,0,0,0-5.2,1.39l-.91-1.58a1.91,1.91,0,0,0-.53-.6C29,7,25,4.68,22.59,6.05s-2.37,6-1.93,9.62a1.85,1.85,0,0,0,.25.76L21.83,18A36.07,36.07,0,0,0,18,21.83l-1.59-.92a2,2,0,0,0-.76-.25c-3.63-.44-8.24-.45-9.62,1.93S7,29,9.19,31.89a1.91,1.91,0,0,0,.6.53l1.58.91A34.8,34.8,0,0,0,10,38.54H8.15a2,2,0,0,0-.79.16C4,40.14,0,42.43,0,45.18s4,5,7.36,6.49a2.14,2.14,0,0,0,.79.16H10A35,35,0,0,0,11.37,57l-1.58.91a2,2,0,0,0-.6.53C7,61.4,4.68,65.39,6.05,67.77s6,2.37,9.62,1.94a2,2,0,0,0,.76-.26L18,68.54a36,36,0,0,0,3.81,3.8l-.92,1.59a1.85,1.85,0,0,0-.25.76c-.44,3.63-.45,8.24,1.93,9.62s6.37-1,9.3-3.14a1.91,1.91,0,0,0,.53-.6L33.33,79a35,35,0,0,0,5.2,1.39v1.83a2,2,0,0,0,.17.79c1.44,3.36,3.73,7.36,6.48,7.36s5-4,6.49-7.36a2.14,2.14,0,0,0,.16-.79V80.38A34.36,34.36,0,0,0,57,79l.91,1.58a2,2,0,0,0,.53.6c2.93,2.19,6.92,4.51,9.3,3.14S70.14,78.32,69.71,74.69Zm-5-4.4a2,2,0,0,0-.5,2.58l1.56,2.69a18.23,18.23,0,0,1-.1,5.12,18,18,0,0,1-4.49-2.47l-1.55-2.69a2,2,0,0,0-2.48-.85,31.56,31.56,0,0,1-7.61,2,2,2,0,0,0-1.72,2v3.11a17.91,17.91,0,0,1-2.65,4.38,18.56,18.56,0,0,1-2.65-4.38V78.68a2,2,0,0,0-1.72-2,31.56,31.56,0,0,1-7.61-2,2,2,0,0,0-2.48.85l-1.55,2.69a18.12,18.12,0,0,1-4.48,2.47,17.78,17.78,0,0,1-.11-5.12l1.56-2.69a2,2,0,0,0-.5-2.58,31.92,31.92,0,0,1-5.57-5.57,2,2,0,0,0-2.58-.5L14.8,65.78a17.79,17.79,0,0,1-5.12-.11,18.12,18.12,0,0,1,2.47-4.48l2.69-1.55a2,2,0,0,0,.85-2.48,31.69,31.69,0,0,1-2-7.61,2,2,0,0,0-2-1.72H8.57a17.91,17.91,0,0,1-4.38-2.65,18.26,18.26,0,0,1,4.38-2.64h3.11a2,2,0,0,0,2-1.73,31.81,31.81,0,0,1,2-7.61,2,2,0,0,0-.85-2.48l-2.69-1.55a18.12,18.12,0,0,1-2.47-4.48,17.79,17.79,0,0,1,5.12-.11l2.69,1.56a2,2,0,0,0,2.58-.5,31.92,31.92,0,0,1,5.57-5.57,2,2,0,0,0,.5-2.58L24.58,14.8a17.79,17.79,0,0,1,.11-5.12,18.12,18.12,0,0,1,4.48,2.47l1.55,2.69a2,2,0,0,0,2.48.85,31.81,31.81,0,0,1,7.61-2,2,2,0,0,0,1.72-2V8.57a18.56,18.56,0,0,1,2.65-4.38,17.91,17.91,0,0,1,2.65,4.38v3.11a2,2,0,0,0,1.72,2,31.69,31.69,0,0,1,7.61,2,2,2,0,0,0,2.48-.85l1.55-2.69a18,18,0,0,1,4.49-2.47,18.24,18.24,0,0,1,.1,5.12l-1.56,2.69a2,2,0,0,0,.5,2.58,31.58,31.58,0,0,1,5.57,5.57,2,2,0,0,0,2.58.5l2.69-1.56a17.78,17.78,0,0,1,5.12.11,18.12,18.12,0,0,1-2.47,4.48l-2.69,1.55a2,2,0,0,0-.85,2.48,31.81,31.81,0,0,1,2,7.61,2,2,0,0,0,2,1.73h3.11a17.63,17.63,0,0,1,4.38,2.64,17.91,17.91,0,0,1-4.38,2.65H78.68a2,2,0,0,0-2,1.72,31.69,31.69,0,0,1-2,7.61,2,2,0,0,0,.85,2.48l2.69,1.55a18.12,18.12,0,0,1,2.47,4.48,17.78,17.78,0,0,1-5.12.11l-2.69-1.56a2,2,0,0,0-2.58.5A31.92,31.92,0,0,1,64.72,70.29Z"
})), _path4 || (_path4 = /*#__PURE__*/react.createElement("path", {
  d: "M72,54a2,2,0,0,0-2-2H68V36h2a2,2,0,0,0,0-4H62a2,2,0,0,0,0,4h2V52H62a2,2,0,0,0,0,4h8A2,2,0,0,0,72,54Z"
})), _path5 || (_path5 = /*#__PURE__*/react.createElement("path", {
  d: "M29.83,33.13A2,2,0,0,0,28,31.87h0a2,2,0,0,0-1.85,1.26l-8,20.17a2,2,0,0,0,1.12,2.6A1.94,1.94,0,0,0,20,56a2,2,0,0,0,1.86-1.26l2.24-5.67h7.79l2.25,5.67a2,2,0,0,0,3.72-1.48Zm-4.15,12L28,39.29l2.31,5.82Z"
})), _path6 || (_path6 = /*#__PURE__*/react.createElement("path", {
  d: "M49,32H44a2,2,0,0,0-2,2V54a2,2,0,0,0,4,0V49h3c5,0,9-3.73,9-8.5S54.05,32,49,32Zm0,13H46V36h3a4.72,4.72,0,0,1,5,4.5A4.72,4.72,0,0,1,49,45Z"
})));
/* harmony default export */ const api = (SvgApi);
;// CONCATENATED MODULE: ./static/img/features/html.svg
var html_title, html_path, _circle, html_path2, html_path3, html_path4, html_path5;
function html_extends() { html_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return html_extends.apply(this, arguments); }

const SvgHtml = props => /*#__PURE__*/react.createElement("svg", html_extends({
  height: "100px",
  width: "100px",
  fill: "#000000",
  xmlns: "http://www.w3.org/2000/svg",
  "data-name": "Layer 2",
  viewBox: "0 0 32 32",
  x: "0px",
  y: "0px"
}, props), html_title || (html_title = /*#__PURE__*/react.createElement("title", null, "development")), html_path || (html_path = /*#__PURE__*/react.createElement("path", {
  d: "M28.14,1.5H3.86A2.36,2.36,0,0,0,1.5,3.86V21.14A2.36,2.36,0,0,0,3.86,23.5H13.5v4H11a1.5,1.5,0,0,0,0,3H21a1.5,1.5,0,0,0,0-3H18.5v-4h9.64a2.36,2.36,0,0,0,2.36-2.36V3.86A2.36,2.36,0,0,0,28.14,1.5ZM3.86,2.5H28.14A1.36,1.36,0,0,1,29.5,3.86V18.5H2.5V3.86A1.36,1.36,0,0,1,3.86,2.5ZM21,28.5a.5.5,0,0,1,0,1H11a.5.5,0,0,1,0-1H21Zm-3.5-1h-3v-4h3Zm10.64-5H3.86A1.36,1.36,0,0,1,2.5,21.14V19.5h27v1.64A1.36,1.36,0,0,1,28.14,22.5Z"
})), _circle || (_circle = /*#__PURE__*/react.createElement("circle", {
  cx: 16,
  cy: 21,
  r: 0.71
})), html_path2 || (html_path2 = /*#__PURE__*/react.createElement("path", {
  d: "M5.5,14.5A.5.5,0,0,0,6,14V10.5H9V14a.5.5,0,0,0,1,0V7A.5.5,0,0,0,9,7V9.5H6V7A.5.5,0,0,0,5,7v7A.5.5,0,0,0,5.5,14.5Z"
})), html_path3 || (html_path3 = /*#__PURE__*/react.createElement("path", {
  d: "M11.5,7.5H13V14a.5.5,0,0,0,1,0V7.5h1.5a.5.5,0,0,0,0-1h-4a.5.5,0,0,0,0,1Z"
})), html_path4 || (html_path4 = /*#__PURE__*/react.createElement("path", {
  d: "M17.5,14.5A.5.5,0,0,0,18,14V8.21l1.15,1.14a.48.48,0,0,0,.7,0L21,8.21V14a.5.5,0,0,0,1,0V7a.5.5,0,0,0-.31-.46.47.47,0,0,0-.54.11L19.5,8.29,17.85,6.65a.47.47,0,0,0-.54-.11A.5.5,0,0,0,17,7v7A.5.5,0,0,0,17.5,14.5Z"
})), html_path5 || (html_path5 = /*#__PURE__*/react.createElement("path", {
  d: "M23.5,14.5h3a.5.5,0,0,0,0-1H24V7a.5.5,0,0,0-1,0v7A.5.5,0,0,0,23.5,14.5Z"
})));
/* harmony default export */ const html = (SvgHtml);
;// CONCATENATED MODULE: ./static/img/features/css-file.svg
var _defs, css_file_path;
function css_file_extends() { css_file_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return css_file_extends.apply(this, arguments); }

const SvgCssFile = props => /*#__PURE__*/react.createElement("svg", css_file_extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: 100,
  height: 100
}, props), _defs || (_defs = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("clipPath", {
  id: "a",
  clipPathUnits: "userSpaceOnUse"
}, /*#__PURE__*/react.createElement("path", {
  d: "M674.286 549.505a261.429 262.857 0 1 1-522.857 0 261.429 262.857 0 1 1 522.857 0z",
  transform: "matrix(.1836 0 0 .1826 190.372 664.377)"
})))), css_file_path || (css_file_path = /*#__PURE__*/react.createElement("path", {
  d: "M43.877 1012.23c-.828 0-1.61.143-2.314.44-.703.28-1.3.75-1.816 1.406-.516.656-.934 1.502-1.23 2.549-.282 1.047-.41 2.322-.41 3.838 0 2.969.507 5.17 1.523 6.592 1.015 1.422 2.459 2.139 4.365 2.139.765 0 1.443-.12 2.02-.323.595-.203 1.077-.422 1.436-.703l-.586-1.67c-.374.25-.765.46-1.171.616-.39.156-.912.234-1.553.234-1.344 0-2.306-.6-2.9-1.787-.594-1.188-.879-2.895-.879-5.098 0-2.188.258-3.803.82-4.834.563-1.047 1.475-1.553 2.725-1.553.562 0 1.072.078 1.494.234.437.157.826.366 1.2.616l.645-1.758c-.375-.266-.87-.502-1.464-.674-.594-.188-1.217-.264-1.905-.264zm9.756 0c-.641 0-1.225.09-1.787.293a4.334 4.334 0 0 0-1.436.88 4.17 4.17 0 0 0-.937 1.347c-.219.531-.323 1.13-.323 1.787 0 .672.09 1.258.293 1.758.204.5.479.943.791 1.318a6.15 6.15 0 0 0 1.055.967c.39.281.783.541 1.142.791.313.219.612.455.909.674.296.219.542.467.761.732.235.266.445.551.586.88.14.328.205.69.205 1.113 0 .797-.234 1.435-.703 1.904-.453.469-1.119.703-1.963.703-.562 0-1.056-.064-1.494-.205a6.963 6.963 0 0 1-1.23-.615l-.674 1.7c.438.28.961.501 1.524.673.562.172 1.212.264 1.962.264.813 0 1.516-.117 2.11-.352.609-.25 1.103-.59 1.493-.996.407-.422.692-.889.88-1.436a5.46 5.46 0 0 0 .292-1.758c0-.671-.09-1.244-.293-1.728-.187-.5-.449-.93-.761-1.29a5.303 5.303 0 0 0-.996-.966 21.306 21.306 0 0 0-1.114-.791c-.359-.234-.697-.455-1.025-.674a5.508 5.508 0 0 1-.85-.732 3.75 3.75 0 0 1-.585-.88c-.14-.327-.205-.704-.205-1.142 0-.797.22-1.41.673-1.816.47-.422 1.08-.645 1.846-.645.422 0 .826.08 1.201.205.39.11.756.28 1.084.498l.644-1.67c-.359-.219-.787-.4-1.318-.557a6.297 6.297 0 0 0-1.757-.234zm9.403 0c-.64 0-1.254.09-1.816.293a4.334 4.334 0 0 0-1.436.88 4.17 4.17 0 0 0-.937 1.347c-.219.531-.322 1.13-.322 1.787 0 .672.119 1.258.322 1.758s.45.943.762 1.318c.328.375.693.686 1.083.967.391.281.754.541 1.114.791.312.219.61.455.908.674.297.219.572.467.79.732.235.266.417.551.557.88.141.328.205.69.205 1.113 0 .797-.234 1.435-.703 1.904-.453.469-1.09.703-1.933.703-.563 0-1.057-.064-1.494-.205a7.21 7.21 0 0 1-1.26-.615l-.644 1.7c.437.28.931.501 1.494.673.562.172 1.213.264 1.962.264.813 0 1.516-.117 2.11-.352.609-.25 1.103-.59 1.494-.996.406-.422.72-.889.908-1.436.187-.547.263-1.148.264-1.758 0-.671-.09-1.244-.293-1.728-.188-.5-.45-.93-.762-1.29a5.303 5.303 0 0 0-.996-.966 21.306 21.306 0 0 0-1.113-.791c-.36-.234-.698-.455-1.026-.674a5.508 5.508 0 0 1-.85-.732 3.75 3.75 0 0 1-.585-.88c-.14-.327-.205-.704-.205-1.142 0-.797.22-1.41.674-1.816.468-.422 1.109-.645 1.875-.645.421 0 .796.08 1.171.205.39.11.756.28 1.084.498l.674-1.67c-.36-.219-.816-.4-1.348-.557a6.088 6.088 0 0 0-1.728-.234zm-28.123 14.122c-.422 0-.775.129-1.025.41-.25.281-.352.621-.352.996 0 .36.102.686.352.967.25.281.603.41 1.025.41.422 0 .746-.129.996-.41.266-.281.41-.608.41-.967 0-.375-.144-.715-.41-.996-.25-.281-.574-.41-.996-.41z",
  transform: "translate(0 -952.362)"
})), /*#__PURE__*/react.createElement("text", {
  xmlSpace: "preserve",
  x: 181.199,
  y: 1004.358,
  fontFamily: "Sans",
  fontSize: 37.499,
  style: {
    letterSpacing: 0,
    wordSpacing: 0
  },
  transform: "matrix(.99994 0 0 1.00006 0 -952.362)"
}), /*#__PURE__*/react.createElement("path", {
  d: "M49.998 957.362C25.154 957.348 5 977.524 5 1002.362c0 24.839 20.154 45 44.998 45 24.844 0 44.981-20.161 45.002-45 0-.51-.021-.961-.037-1.448-.754-23.586-19.666-42.563-43.216-43.508a44.61 44.61 0 0 0-1.749-.044zm0 1.87c.54 0 1.073.02 1.608.04.827.174 1.393.834 1.391 1.577a.938.938 0 1 0 1.873.003c.001-.49-.106-.955-.296-1.375 20.218 2.132 36.267 18.218 38.324 38.467a3.3 3.3 0 0 0-1.397-.306.938.938 0 1 0 .004 1.873c.746-.002 1.407.568 1.578 1.4.016.483.037.965.037 1.451 0 23.834-19.3 43.129-43.122 43.129S6.88 1026.196 6.88 1002.362c0-23.833 19.296-43.13 43.118-43.13z",
  overflow: "visible",
  style: {
    color: "#000",
    textIndent: 0,
    textDecorationLine: "none",
    textTransform: "none",
    direction: "ltr",
    blockProgression: "tb",
    baselineShift: "baseline",
    enableBackground: "accumulate"
  },
  transform: "translate(0 -952.362)"
}), /*#__PURE__*/react.createElement("path", {
  d: "M272.188 707.313c-3.976 0-7.22 3.243-7.22 7.218v44.157c0 3.975 3.244 7.218 7.22 7.218h46.687c3.975 0 7.219-3.243 7.219-7.218V714.53c0-3.975-3.244-7.218-7.219-7.218h-46.688zm0 2.375h46.687c2.695 0 4.813 2.148 4.813 4.843v44.157c0 2.695-2.118 4.843-4.813 4.843h-46.688c-2.695 0-4.812-2.148-4.812-4.843V714.53c0-2.695 2.117-4.843 4.813-4.843z",
  clipPath: "url(#a)",
  overflow: "visible",
  style: {
    color: "#000",
    textIndent: 0,
    textDecorationLine: "none",
    textTransform: "none",
    direction: "ltr",
    blockProgression: "tb",
    baselineShift: "baseline",
    enableBackground: "accumulate"
  },
  transform: "matrix(.78621 0 0 .78593 -155.325 -554.802)"
}));
/* harmony default export */ const css_file = (SvgCssFile);
;// CONCATENATED MODULE: ./static/img/features/framework-config.svg
var framework_config_g;
function framework_config_extends() { framework_config_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return framework_config_extends.apply(this, arguments); }

const SvgFrameworkConfig = props => /*#__PURE__*/react.createElement("svg", framework_config_extends({
  height: "100px",
  width: "100px",
  fill: "#000000",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 64 64",
  style: {
    enableBackground: "new 0 0 64 64"
  },
  xmlSpace: "preserve"
}, props), framework_config_g || (framework_config_g = /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
  d: "M60.02,20.942c0.128-0.291,0.375-0.502,0.703-0.586C62.063,20.015,63,18.811,63,17.427v-2.854   c0-1.385-0.937-2.59-2.301-2.936c-0.293-0.075-0.541-0.283-0.671-0.561l-0.023-0.057c-0.126-0.299-0.104-0.642,0.071-0.936   c0.707-1.19,0.518-2.704-0.461-3.683l-2.018-2.018c-0.979-0.979-2.494-1.168-3.702-0.449c-0.274,0.162-0.617,0.185-0.938,0.051   L52.942,3.98c-0.287-0.127-0.504-0.38-0.586-0.703C52.015,1.937,50.811,1,49.427,1h-2.854c-1.384,0-2.588,0.937-2.936,2.301   c-0.075,0.293-0.283,0.541-0.561,0.671l-0.056,0.023c-0.298,0.125-0.643,0.103-0.937-0.071c-1.188-0.708-2.704-0.518-3.683,0.461   l-2.018,2.018c-0.979,0.979-1.168,2.492-0.449,3.703c0.156,0.262,0.179,0.586,0.063,0.895H6c-2.757,0-5,2.243-5,5s2.243,5,5,5   h30.001c0.117,0.294,0.094,0.628-0.077,0.915c-0.707,1.19-0.518,2.704,0.461,3.683l2.018,2.018   c0.977,0.979,2.491,1.167,3.703,0.449c0.273-0.163,0.617-0.186,0.937-0.051l0.016,0.006c0.291,0.128,0.502,0.375,0.586,0.703   C43.985,30.063,45.189,31,46.573,31H47v4H9v6H1v22h18V41h-8v-4h20v4h-8v22h18V41h-8v-4h20v4h-8v22h18V41h-8v-6h-6v-4h0.427   c1.384,0,2.588-0.937,2.936-2.301c0.076-0.298,0.279-0.54,0.56-0.671l0.058-0.023c0.298-0.127,0.642-0.103,0.936,0.071   c1.188,0.707,2.704,0.518,3.683-0.461l2.018-2.018c0.979-0.979,1.168-2.492,0.449-3.703c-0.163-0.273-0.186-0.616-0.051-0.937   L60.02,20.942z M17,61H3V43h14V61z M39,61H25V43h14V61z M61,61H47V43h14V61z M15,19v-2h28v2H15z M13,19h-2v-6h2V19z M50.712,15.584   C50.884,15.649,51,15.816,51,16s-0.116,0.351-0.288,0.415L45,18.557v-5.114L50.712,15.584z M44.182,21l7.233-2.713   C52.363,17.931,53,17.012,53,16s-0.637-1.931-1.585-2.288L44.182,11h-1.063C44.411,9.74,46.159,9,48,9c3.859,0,7,3.141,7,7   s-3.141,7-7,7c-1.841,0-3.589-0.74-4.882-2H44.182z M43,13v2H15v-2H43z M3,16c0-1.654,1.346-3,3-3h3v6H6C4.346,19,3,17.654,3,16z    M58.167,20.188l-0.025,0.063c-0.349,0.871-0.273,1.865,0.216,2.686c0.239,0.403,0.175,0.916-0.156,1.247l-2.018,2.018   c-0.332,0.332-0.846,0.396-1.266,0.145c-0.803-0.478-1.797-0.551-2.666-0.204l-0.064,0.025c-0.872,0.365-1.531,1.128-1.769,2.062   C50.303,28.683,49.895,29,49.427,29h-2.854c-0.468,0-0.876-0.317-0.998-0.793c-0.231-0.912-0.891-1.675-1.763-2.04l-0.064-0.025   c-0.868-0.35-1.862-0.274-2.685,0.216c-0.402,0.239-0.916,0.176-1.247-0.156l-2.018-2.018c-0.331-0.331-0.396-0.844-0.145-1.266   c0.345-0.579,0.472-1.258,0.389-1.918h2.505c1.664,2.474,4.457,4,7.451,4c4.963,0,9-4.037,9-9s-4.037-9-9-9   c-2.994,0-5.787,1.526-7.451,4h-2.506c0.082-0.662-0.047-1.344-0.401-1.937c-0.239-0.403-0.175-0.916,0.156-1.247l2.018-2.018   c0.332-0.332,0.844-0.395,1.267-0.145c0.816,0.485,1.829,0.554,2.618,0.218l0.112-0.04c0.872-0.365,1.53-1.127,1.768-2.061   C45.697,3.317,46.105,3,46.573,3h2.854c0.468,0,0.876,0.317,0.998,0.793c0.231,0.912,0.89,1.674,1.78,2.046   c0.88,0.37,1.894,0.302,2.731-0.196c0.404-0.239,0.916-0.175,1.247,0.156l2.018,2.018c0.331,0.331,0.396,0.844,0.145,1.266   c-0.478,0.803-0.553,1.796-0.204,2.666l0.026,0.065c0.365,0.872,1.127,1.53,2.062,1.769C60.684,13.696,61,14.104,61,14.573v2.854   c0,0.468-0.317,0.876-0.793,0.998C59.295,18.656,58.532,19.315,58.167,20.188z"
}), /*#__PURE__*/react.createElement("rect", {
  x: 49,
  y: 45,
  width: 10,
  height: 2
}), /*#__PURE__*/react.createElement("path", {
  d: "M59,53H49v6h10V53z M57,57h-6v-2h6V57z"
}), /*#__PURE__*/react.createElement("rect", {
  x: 49,
  y: 49,
  width: 10,
  height: 2
}), /*#__PURE__*/react.createElement("rect", {
  x: 27,
  y: 45,
  width: 2,
  height: 2
}), /*#__PURE__*/react.createElement("rect", {
  x: 31,
  y: 45,
  width: 6,
  height: 2
}), /*#__PURE__*/react.createElement("rect", {
  x: 27,
  y: 49,
  width: 2,
  height: 2
}), /*#__PURE__*/react.createElement("rect", {
  x: 31,
  y: 49,
  width: 6,
  height: 2
}), /*#__PURE__*/react.createElement("rect", {
  x: 5,
  y: 45,
  width: 2,
  height: 2
}), /*#__PURE__*/react.createElement("rect", {
  x: 9,
  y: 45,
  width: 6,
  height: 2
}), /*#__PURE__*/react.createElement("rect", {
  x: 5,
  y: 49,
  width: 2,
  height: 2
}), /*#__PURE__*/react.createElement("rect", {
  x: 9,
  y: 49,
  width: 6,
  height: 2
}), /*#__PURE__*/react.createElement("rect", {
  x: 5,
  y: 53,
  width: 2,
  height: 2
}), /*#__PURE__*/react.createElement("rect", {
  x: 9,
  y: 53,
  width: 6,
  height: 2
}), /*#__PURE__*/react.createElement("rect", {
  x: 5,
  y: 57,
  width: 2,
  height: 2
}), /*#__PURE__*/react.createElement("rect", {
  x: 9,
  y: 57,
  width: 6,
  height: 2
}), /*#__PURE__*/react.createElement("path", {
  d: "M37,53H27v6h10V53z M35,57h-6v-2h6V57z"
}))));
/* harmony default export */ const framework_config = (SvgFrameworkConfig);
;// CONCATENATED MODULE: ./static/img/features/test.svg
var test_title, test_path, _rect, _polygon, _rect2, _polygon2;
function test_extends() { test_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return test_extends.apply(this, arguments); }

const SvgTest = props => /*#__PURE__*/react.createElement("svg", test_extends({
  height: "100px",
  width: "100px",
  fill: "#000000",
  xmlns: "http://www.w3.org/2000/svg",
  "data-name": "Layer 1",
  viewBox: "0 0 100 100",
  x: "0px",
  y: "0px"
}, props), test_title || (test_title = /*#__PURE__*/react.createElement("title", null, "118all")), test_path || (test_path = /*#__PURE__*/react.createElement("path", {
  d: "M86.56,11.32H59.48a10.53,10.53,0,0,0-19,0H13.44V94.63H86.56Zm-41.5,6,.51-2.37a4.54,4.54,0,0,1,8.87,0l.51,2.37h5.81v5.55H39.25V17.32Zm35.5,71.32H19.44V17.32H33.25V28.87h33.5V17.32H80.56Z"
})), _rect || (_rect = /*#__PURE__*/react.createElement("rect", {
  x: 50.95,
  y: 43.92,
  width: 23.65,
  height: 6
})), _polygon || (_polygon = /*#__PURE__*/react.createElement("polygon", {
  points: "34.07 46.58 29.96 43.25 26.18 47.92 34.82 54.91 46.8 40.98 42.25 37.07 34.07 46.58"
})), _rect2 || (_rect2 = /*#__PURE__*/react.createElement("rect", {
  x: 50.45,
  y: 67.49,
  width: 23.65,
  height: 6
})), _polygon2 || (_polygon2 = /*#__PURE__*/react.createElement("polygon", {
  points: "40.15 61.21 35.1 66.25 30.06 61.21 25.82 65.45 30.86 70.5 25.82 75.54 30.06 79.78 35.1 74.74 40.15 79.78 44.39 75.54 39.35 70.5 44.39 65.45 40.15 61.21"
})));
/* harmony default export */ const test = (SvgTest);
;// CONCATENATED MODULE: ./static/img/features/editor.svg
var editor_path, editor_path2, editor_path3;
function editor_extends() { editor_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return editor_extends.apply(this, arguments); }

const SvgEditor = props => /*#__PURE__*/react.createElement("svg", editor_extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlSpace: "preserve",
  width: 100,
  height: 100
}, props), editor_path || (editor_path = /*#__PURE__*/react.createElement("path", {
  d: "M3.75 76.25h32.5v10h-7.5v10h42.5v-10h-7.5v-10h32.5V3.75H3.75v72.5zm35 0h2.5v10h-2.5v-10zm17.5 10h-12.5v-10h12.5v10zm12.5 2.5v5h-37.5v-5h37.5zm-7.5-2.5h-2.5v-10h2.5v10zm-55-80h87.5v67.5H6.25V6.25z"
})), editor_path2 || (editor_path2 = /*#__PURE__*/react.createElement("path", {
  d: "M73.75 71.25v-5h7.73c.518 1.452 1.893 2.5 3.52 2.5 2.067 0 3.75-1.682 3.75-3.75s-1.683-3.75-3.75-3.75c-1.627 0-3.002 1.048-3.52 2.5h-7.73v-7.5h2.73c.518 1.452 1.893 2.5 3.52 2.5 2.067 0 3.75-1.682 3.75-3.75s-1.683-3.75-3.75-3.75c-1.627 0-3.002 1.048-3.52 2.5h-2.73v-7.5h7.73c.518 1.452 1.893 2.5 3.52 2.5 2.067 0 3.75-1.682 3.75-3.75s-1.683-3.75-3.75-3.75c-1.627 0-3.002 1.048-3.52 2.5h-7.73v-7.5h2.73c.518 1.452 1.893 2.5 3.52 2.5 2.067 0 3.75-1.682 3.75-3.75s-1.683-3.75-3.75-3.75c-1.627 0-3.002 1.048-3.52 2.5h-2.73v-7.5h7.73c.518 1.452 1.893 2.5 3.52 2.5 2.067 0 3.75-1.682 3.75-3.75s-1.683-3.75-3.75-3.75c-1.627 0-3.002 1.048-3.52 2.5h-7.73v-7.5h2.73c.518 1.452 1.893 2.5 3.52 2.5 2.067 0 3.75-1.682 3.75-3.75s-1.683-3.75-3.75-3.75c-1.627 0-3.002 1.048-3.52 2.5h-2.73v-5h-47.5v5h-2.73c-.518-1.452-1.893-2.5-3.52-2.5-2.067 0-3.75 1.682-3.75 3.75s1.683 3.75 3.75 3.75c1.627 0 3.002-1.048 3.52-2.5h2.73v7.5h-7.73c-.518-1.452-1.893-2.5-3.52-2.5-2.067 0-3.75 1.682-3.75 3.75s1.683 3.75 3.75 3.75c1.627 0 3.002-1.048 3.52-2.5h7.73v7.5h-2.73c-.518-1.452-1.893-2.5-3.52-2.5-2.067 0-3.75 1.682-3.75 3.75s1.683 3.75 3.75 3.75c1.627 0 3.002-1.048 3.52-2.5h2.73v7.5h-7.73c-.518-1.452-1.893-2.5-3.52-2.5-2.067 0-3.75 1.682-3.75 3.75s1.683 3.75 3.75 3.75c1.627 0 3.002-1.048 3.52-2.5h7.73v7.5h-2.73c-.518-1.452-1.893-2.5-3.52-2.5-2.067 0-3.75 1.682-3.75 3.75s1.683 3.75 3.75 3.75c1.627 0 3.002-1.048 3.52-2.5h2.73v7.5h-7.73c-.518-1.452-1.893-2.5-3.52-2.5-2.067 0-3.75 1.682-3.75 3.75s1.683 3.75 3.75 3.75c1.627 0 3.002-1.048 3.52-2.5h7.73v5h47.5zm-45-60h42.5v51.048L57.452 20.904 47.222 54.15l-7.276-14.552L28.75 64.23V11.25zm.69 57.5 10.614-23.348 7.723 15.448 9.77-31.754L70.767 68.75H29.44zm55.56-5a1.251 1.251 0 0 1 0 2.5 1.251 1.251 0 0 1 0-2.5zm-5-10a1.251 1.251 0 0 1 0 2.5 1.251 1.251 0 0 1 0-2.5zm5-10a1.251 1.251 0 0 1 0 2.5 1.251 1.251 0 0 1 0-2.5zm-5-10a1.251 1.251 0 0 1 0 2.5 1.251 1.251 0 0 1 0-2.5zm5-10a1.251 1.251 0 0 1 0 2.5 1.251 1.251 0 0 1 0-2.5zm-5-10a1.251 1.251 0 0 1 0 2.5 1.251 1.251 0 0 1 0-2.5zm-60 2.5a1.251 1.251 0 0 1 0-2.5 1.251 1.251 0 0 1 0 2.5zm-5 10a1.251 1.251 0 0 1 0-2.5 1.251 1.251 0 0 1 0 2.5zm5 10a1.251 1.251 0 0 1 0-2.5 1.251 1.251 0 0 1 0 2.5zm-5 10a1.251 1.251 0 0 1 0-2.5 1.251 1.251 0 0 1 0 2.5zm5 10a1.251 1.251 0 0 1 0-2.5 1.251 1.251 0 0 1 0 2.5zm-5 10a1.251 1.251 0 0 1 0-2.5 1.251 1.251 0 0 1 0 2.5z"
})), editor_path3 || (editor_path3 = /*#__PURE__*/react.createElement("path", {
  d: "M51.25 25c0-4.825-3.925-8.75-8.75-8.75s-8.75 3.925-8.75 8.75 3.925 8.75 8.75 8.75 8.75-3.925 8.75-8.75zm-15 0c0-3.446 2.804-6.25 6.25-6.25s6.25 2.804 6.25 6.25-2.804 6.25-6.25 6.25-6.25-2.804-6.25-6.25z"
})));
/* harmony default export */ const editor = (SvgEditor);
;// CONCATENATED MODULE: ./src/components/QuickStartCard/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const index_module = ({"quickStart":"xnoS0","title":"IelT2","quickStartBtn":"oPJh5"});
;// CONCATENATED MODULE: ./src/components/QuickStartCard/index.tsx
const QuickStart=()=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:index_module.quickStart,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:index_module.title,children:" Modern.js \u2014\u2014\u73B0\u4EE3 Web \u5DE5\u7A0B\u4F53\u7CFB "}),/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:(0,utils/* withBase */.pJ)('/guides/get-started/quick-start'),className:index_module.quickStartBtn,children:"\u5FEB\u901F\u5F00\u59CB"})]});/* harmony default export */ const QuickStartCard = (QuickStart);
;// CONCATENATED MODULE: ./src/components/FlowCard/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const FlowCard_index_module = ({"card":"fFkl4","rightDot":"vNaKe","leftDot":"YEVgn","title":"jyKpl","icon":"l51S_","desc":"kVJPN"});
;// CONCATENATED MODULE: ./src/components/FlowCard/index.tsx
const FlowCard=({img,title,cardStyle,href,direction})=>/*#__PURE__*/(0,jsx_runtime.jsxs)("a",{className:FlowCard_index_module.card,style:cardStyle,href:(0,utils/* withBase */.pJ)(href),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:FlowCard_index_module.title,style:{marginBottom:'16px'},children:title}),direction==='right'&&/*#__PURE__*/(0,jsx_runtime.jsx)("img",{className:FlowCard_index_module.leftDot,src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/right-dot.png",alt:"decoration"}),direction==='left'&&/*#__PURE__*/(0,jsx_runtime.jsx)("img",{className:FlowCard_index_module.rightDot,src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/left-dot.png",alt:"decoration"}),img&&/*#__PURE__*/(0,jsx_runtime.jsx)("img",{className:FlowCard_index_module.icon,src:img,alt:"img"})]});/* harmony default export */ const components_FlowCard = (FlowCard);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/components/ContentCard/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const ContentCard_index_module = ({"card":"UbPLz","swiperCard":"DiNEH","title":"lxKco","desc":"qHADN","icon":"wKjAE"});
;// CONCATENATED MODULE: ./src/components/ContentCard/index.tsx
const ContentCard=({img:Icon,title,desc,isSwiper:_isSwiper=false,href})=>/*#__PURE__*/(0,jsx_runtime.jsxs)("a",{href:(0,utils/* withBase */.pJ)(href),style:{textDecoration:'none'},className:classnames_default()(ContentCard_index_module.card,{[`${ContentCard_index_module.swiperCard}`]:_isSwiper}),children:[typeof Icon==='function'?/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{className:ContentCard_index_module.icon,width:"48",height:"48"}):/*#__PURE__*/(0,jsx_runtime.jsx)("img",{className:ContentCard_index_module.icon,src:Icon,alt:"img",width:"48",height:"48"}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:ContentCard_index_module.title,children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:ContentCard_index_module.desc,children:desc})]});/* harmony default export */ const components_ContentCard = (ContentCard);
;// CONCATENATED MODULE: ./src/components/SecondaryTitle/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const SecondaryTitle_index_module = ({"titleWrap":"U4TSS","title":"FZ2rD","seqNum":"EWFyz","seqImg":"mGR4D","rotate360":"vOKjf","num":"V4LF0"});
;// CONCATENATED MODULE: ./src/components/SecondaryTitle/index.tsx
const SecondaryTitle=({children,seqNum})=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:SecondaryTitle_index_module.titleWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{className:SecondaryTitle_index_module.title,children:children}),seqNum&&/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:SecondaryTitle_index_module.seqNum,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("img",{className:SecondaryTitle_index_module.seqImg,src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/seq-wrap.png",alt:""}),/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:SecondaryTitle_index_module.num,children:["0",seqNum]})]})]});/* harmony default export */ const components_SecondaryTitle = (SecondaryTitle);
;// CONCATENATED MODULE: ./src/components/FeatureLayout/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const FeatureLayout_index_module = ({"feature-layout":"fJeL1","featureLayout":"fJeL1"});
;// CONCATENATED MODULE: ./src/components/FeatureLayout/index.tsx
const Featurelayout=({children})=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:FeatureLayout_index_module["feature-layout"],children:children});/* harmony default export */ const FeatureLayout = ((/* unused pure expression or super */ null && (Featurelayout)));
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(52651);
// EXTERNAL MODULE: ../../packages/cli/doc-core/src/shared/utils/index.ts
var shared_utils = __webpack_require__(60205);
// EXTERNAL MODULE: ../../packages/cli/doc-core/src/runtime/hooks.ts
var hooks = __webpack_require__(36560);
;// CONCATENATED MODULE: ./src/theme/Footer/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"footerLogoLink":"fGS1E","footerItemIcons":"HvKDa","footerItemIcon":"qHB0o","active":"OmNpe","qrcodeWrap":"LDE8O"});
;// CONCATENATED MODULE: ./src/theme/Footer/index.tsx
const _excluded=["to","href","label","prependBaseUrlToHref"];/* eslint-disable eslint-comments/no-unlimited-disable */ /* eslint-disable */ // TODO: enable eslint
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const isExternalUrl=url=>{return url.startsWith('http://')||url.startsWith('https://');};function FooterLink(_ref){let{to,href,label,prependBaseUrlToHref}=_ref,props=(0,objectWithoutProperties/* default */.Z)(_ref,_excluded);const toUrl=(0,utils/* withBase */.pJ)(to);const normalizedHref=(0,shared_utils/* normalizeHref */.yc)(href);return/*#__PURE__*/(0,jsx_runtime.jsx)("a",(0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({className:"footer__link-item"},href?{href:prependBaseUrlToHref?normalizedHref:href}:{href:toUrl}),props),{},{children:href&&isExternalUrl(href)?/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:label}):label}));}function FooterItem(props){const[show,setShow]=(0,react.useState)(false);const mouseEnterHandler=e=>{e.preventDefault();if(window.innerWidth>966){setShow(true);}};const mouseLeaveHandler=e=>{e.preventDefault();if(window.innerWidth>966){setShow(false);}};if(props.html){return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{dangerouslySetInnerHTML:{__html:props.html}});}if(props.icon){if(!props.qrcode){return/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:props.to,className:`footer__item ${styles_module.footerItemIcon}`,children:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{width:"32",height:"32",src:props.icon,alt:props.alt})});}else{const classArr=['footer__item',styles_module.footerItemIcon,show?styles_module.active:''];return/*#__PURE__*/(0,jsx_runtime.jsxs)("a",{onClick:()=>setShow(!show),onMouseEnter:e=>mouseEnterHandler(e),onMouseLeave:e=>mouseLeaveHandler(e),className:classArr.join(' '),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("img",{width:"32",height:"32",src:props.icon,alt:props.alt}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:styles_module.qrcodeWrap,style:{display:show?'flex':'none'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{width:"108",height:"108",className:styles_module.qrcode,src:props.qrcode,alt:props.label})})]});}}return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:"my-1 hover:text-[var(--modern-c-brand)] transition-colors",children:/*#__PURE__*/(0,jsx_runtime.jsx)(FooterLink,(0,objectSpread2/* default */.Z)({},props))});}const renderFooterItems=items=>{if(items!=null&&Array.isArray(items)&&items.length>0){if(items[0].icon){return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:`footer__items ${styles_module.footerItemIcons}`,children:items.map((item,key)=>/*#__PURE__*/(0,react.createElement)(FooterItem,(0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},item),{},{key:item.icon||item.href||item.to||key})))});}else{return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:"footer__items",children:items.map((item,key)=>/*#__PURE__*/(0,react.createElement)(FooterItem,(0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},item),{},{key:item.icon||item.href||item.to||key})))});}}return null;};function Footer(){const{siteData}=(0,hooks/* usePageData */.V)();const{footer}=siteData.themeConfig||{};const{links=[]}=footer||{};if(!footer){return null;}return/*#__PURE__*/(0,jsx_runtime.jsx)("footer",{className:(0,clsx_m/* default */.Z)('footer',{'footer--dark':footer.style==='dark'}),children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"w-full",children:links&&links.length>0&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"m-4 flex justify-around",children:links.map((linkItem,i)=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[linkItem.title!=null?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"text-[var(--modern-c-brand)] my-2 font-semibold",children:linkItem.title}):null,linkItem.items!=null&&Array.isArray(linkItem.items)&&linkItem.items.length>0?/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{children:renderFooterItems(linkItem.items)}):null]},i))})})});}/* harmony default export */ const theme_Footer = (Footer);/* eslint-enable */
;// CONCATENATED MODULE: ./src/pages/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const pages_index_module = ({"heroBanner":"qdFlo","logo":"Uknsx","title":"GqtPc","buttons":"AeoNl","start":"RUNTs","doc-btn":"gVIPE","docBtn":"gVIPE","section-title":"Sf97l","sectionTitle":"Sf97l","swiper-container":"u11vL","swiperContainer":"u11vL","swiper":"cDqYQ","cardContainer":"z0Shy","homepage-main":"G9x4E","homepageMain":"G9x4E","start-arrow":"Vk1p9","startArrow":"Vk1p9","flowContainer":"cshuY","flowLine":"njLk7","flowLineMobile":"s0aut","singleImgWrap":"tgx9n","singleImg":"CCE4Q","singleImgCard":"S7iRm"});
// EXTERNAL MODULE: ../../node_modules/.pnpm/swiper@7.4.1/node_modules/swiper/swiper.min.css
var swiper_min = __webpack_require__(50482);
;// CONCATENATED MODULE: ./src/pages/index.tsx
/* eslint-disable eslint-comments/no-unlimited-disable */ /* eslint-disable */ // TODO: enable eslint
const bestPractice=[{title:'零配置运行',img:framework_config,href:'/tutorials/first-app/c01-start',desc:'直接启动你的应用，Modern.js 来管理其他的一切'},{img:unity,title:'基于文件的路由',href:'/guides/basic-features/routes',desc:'页面的自动路由，并支持代码拆分'},{title:'丰富的 CSS 解决方案',img:css_file,href:'/guides/basic-features/css/css-in-js',desc:'支持 Less、Sass、CSS Module、TailwindCSS'},{title:'数据获取',img:dynamic,href:'/guides/basic-features/data-fetch',desc:'在组件中获取应用数据，Modern.js 会自动并发优化，支持 SSR'},{title:'多种渲染模式',img:html,href:'/guides/advanced-features/ssr',desc:'使用 SSR、SSG、SPR 来优化应用'},{title:'一体化 BFF 开发',img:api,href:'/guides/advanced-features/bff/function',desc:'内置 BFF 支持，像调用函数一样请求 BFF 接口'},{title:'全量 ESLint 规则集',img:editor,href:'/guides/advanced-features/eslint',desc:'完备的 ESLint 规则，自动规范代码'},{title:'单元测试、集成测试',img:test,href:'/guides/advanced-features/testing',desc:'容器、组件、接口全功能测试支持'}];const flowCards=[{title:'搭建',img:'https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/modern-js-landing-pics.003.jpeg',href:'/guides/get-started/quick-start',top:53},{title:'编码',img:'https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/modern-js-landing-pics.004.jpeg',href:'/tutorials/first-app/c03-ide/3.1-setting-up',top:120},{title:'调试',href:'/guides/basic-features/mock',top:423},{title:'测试',href:'/guides/advanced-features/testing',top:490},{title:'构建',img:'https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/modern-js-landing-pics.005.jpeg',href:'/apis/app/commands/build',top:545},{title:'运行',img:'https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/modern-js-landing-pics.007.jpeg',href:'/apis/app/commands/start',top:610}];const HomepageHeader=()=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:pages_index_module["homepage-header"],children:/*#__PURE__*/(0,jsx_runtime.jsxs)("header",{className:(0,clsx_m/* default */.Z)('hero hero--primary',pages_index_module.heroBanner),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/modern-logo.svg?url",className:pages_index_module.logo}),/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{className:pages_index_module.title,children:"\u73B0\u4EE3 Web \u5DE5\u7A0B\u4F53\u7CFB"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:pages_index_module.buttons,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("a",{href:(0,utils/* withBase */.pJ)('/tutorials/foundations/introduction'),className:pages_index_module.start,children:["\u4ECB\u7ECD",' ',/*#__PURE__*/(0,jsx_runtime.jsx)("img",{width:"20",height:"20",className:pages_index_module["start-arrow"],src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/right-arrow.svg?url"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:(0,utils/* withBase */.pJ)('/guides/get-started/quick-start'),className:pages_index_module["doc-btn"],children:"\u5FEB\u901F\u5F00\u59CB"}),/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:(0,utils/* withBase */.pJ)('/guides/get-started/quick-start'),className:pages_index_module["doc-btn"],children:"\u6587\u6863"})]})]})});const FlowCards=props=>{const isWeb=window.innerWidth>1100;const flowLineImg=isWeb?'https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/flow-line-line.png':'https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/flow-line-mobile.png';let top1=53;let top2=120;const distance=530;const renderedWebCards=props.cards.map((card,cardIndex)=>{if(cardIndex%2!==0){const top=top2;top2+=distance;return/*#__PURE__*/(0,jsx_runtime.jsx)(components_FlowCard,{cardStyle:{right:0,top:`${card.top}px`,textDecoration:'none'},direction:"left",title:card.title,desc:card.desc,img:card.img,href:card.href},cardIndex);}else{const top=top1;top1+=distance;return/*#__PURE__*/(0,jsx_runtime.jsx)(components_FlowCard,{cardStyle:{left:0,top:`${card.top}px`,textDecoration:'none'},direction:"right",title:card.title,desc:card.desc,img:card.img,href:card.href},cardIndex);}});const renderedMobileCards=props.cards.map((card,cardIndex)=>{const left=53;const top=10;// const distance = cardIndex * 60;
const distance=cardIndex*65;return/*#__PURE__*/(0,jsx_runtime.jsx)(components_FlowCard,{cardStyle:{top:`calc(${top}px + ${distance}vw)`// left: `${left}px`,
},title:card.title,desc:card.desc,img:card.img},cardIndex);});return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:pages_index_module.flowContainer,children:[isWeb&&/*#__PURE__*/(0,jsx_runtime.jsx)("img",{className:`${pages_index_module.flowLine} ${isWeb?'':pages_index_module.flowLineMobile}`,src:flowLineImg,style:{width:'1px'},alt:"flow line"}),isWeb?renderedWebCards:renderedMobileCards]});};const renderContentCards=cards=>cards.map((card,cardIndex)=>/*#__PURE__*/(0,jsx_runtime.jsx)(components_ContentCard,{title:card.title,desc:card.desc,img:card.img,href:card.href},cardIndex));function initPageStyle(){if(typeof window!=='undefined'){document.documentElement.classList.add('dark');const navDom=document.querySelector('.dark .modern-doc-nav');const appearanceDom=document.querySelector('.modern-doc-appearance');if(navDom){navDom.style.backgroundColor='#000';}if(appearanceDom){appearanceDom.style.display='none';}return()=>{document.documentElement.classList.remove('dark');if(navDom){navDom.style.backgroundColor='';}if(appearanceDom){appearanceDom.style.display='block';}};}}function Home(){const bestPraticeCards=renderContentCards(bestPractice);let count=0;const{pathname}=(0,dist/* useLocation */.TH)();(0,react.useEffect)(()=>{const restore=initPageStyle();return()=>{restore===null||restore===void 0?void 0:restore();};},[pathname]);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HomepageHeader,{}),/*#__PURE__*/(0,jsx_runtime.jsxs)("main",{className:pages_index_module["homepage-main"],children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Featurelayout,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(components_SecondaryTitle,{seqNum:++count,children:"\u6781\u81F4\u7684\u5F00\u53D1\u8005\u4F53\u9A8C"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:pages_index_module.cardContainer,children:bestPraticeCards})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Featurelayout,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(components_SecondaryTitle,{seqNum:++count,children:"\u63D0\u4F9B Web \u5F00\u53D1\u5168\u6D41\u7A0B"}),/*#__PURE__*/(0,jsx_runtime.jsx)(NoSSR,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(FlowCards,{cards:flowCards})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(QuickStartCard,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(theme_Footer,{})]})]});}/* eslint-enable */
// EXTERNAL MODULE: ../../packages/cli/doc-core/src/theme-default/logic/useLocaleSiteData.ts
var useLocaleSiteData = __webpack_require__(35638);
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/Switch/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Switch_index_module = ({"switch":"DdK0_","check":"WLpap","icon":"Q_Ula","dark":"O_IZ5"});
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/Switch/index.tsx
function Switch(props){var _props$id;return/*#__PURE__*/(0,jsx_runtime.jsx)("button",(0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({className:`${Switch_index_module["switch"]} ${props.className}`,id:(_props$id=props.id)!==null&&_props$id!==void 0?_props$id:'',type:"button",role:"switch"},props.onClick?{onClick:props.onClick}:{}),{},{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:Switch_index_module.check,children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:Switch_index_module.icon,children:props.children})})}));}
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/assets/sun.svg
var sun_path, sun_path2, sun_path3, sun_path4, sun_path5, sun_path6, _path7, _path8, _path9;
function sun_extends() { sun_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return sun_extends.apply(this, arguments); }

const SvgSun = props => /*#__PURE__*/react.createElement("svg", sun_extends({
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
}, props), sun_path || (sun_path = /*#__PURE__*/react.createElement("path", {
  d: "M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"
})), sun_path2 || (sun_path2 = /*#__PURE__*/react.createElement("path", {
  d: "M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"
})), sun_path3 || (sun_path3 = /*#__PURE__*/react.createElement("path", {
  d: "M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"
})), sun_path4 || (sun_path4 = /*#__PURE__*/react.createElement("path", {
  d: "M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"
})), sun_path5 || (sun_path5 = /*#__PURE__*/react.createElement("path", {
  d: "M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"
})), sun_path6 || (sun_path6 = /*#__PURE__*/react.createElement("path", {
  d: "M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"
})), _path7 || (_path7 = /*#__PURE__*/react.createElement("path", {
  d: "M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"
})), _path8 || (_path8 = /*#__PURE__*/react.createElement("path", {
  d: "M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"
})), _path9 || (_path9 = /*#__PURE__*/react.createElement("path", {
  d: "M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"
})));
/* harmony default export */ const sun = (SvgSun);
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/assets/moon.svg
var moon_path;
function moon_extends() { moon_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return moon_extends.apply(this, arguments); }

const SvgMoon = props => /*#__PURE__*/react.createElement("svg", moon_extends({
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
}, props), moon_path || (moon_path = /*#__PURE__*/react.createElement("path", {
  d: "M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"
})));
/* harmony default export */ const moon = (SvgMoon);
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/logic/useAppearance.ts
const APPEARANCE_KEY='modern-theme-appearance';let classList;// Determine if the theme mode of the user's operating system is dark
let userPreference;let query;const setClass=dark=>{classList[dark?'add':'remove']('dark');};const updateAppearance=()=>{const userPreference=localStorage.getItem(APPEARANCE_KEY)||'auto';query=window.matchMedia('(prefers-color-scheme: dark)');setClass(userPreference==='auto'?query.matches:userPreference==='dark');};if(typeof window!=='undefined'&&typeof localStorage!=='undefined'){// When user preference is auto,the modern theme will change with the system user's operating system theme.
// eslint-disable-next-line prefer-destructuring
classList=document.documentElement.classList;updateAppearance();}const getToggle=()=>{if(typeof window!=='undefined'){window.addEventListener('storage',updateAppearance);}return()=>{const isDark=classList.contains('dark');if(typeof window!=='undefined'&&typeof localStorage!=='undefined'){setClass(!isDark);userPreference=isDark?'light':'dark';localStorage.setItem(APPEARANCE_KEY,userPreference);}};};
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/SwitchAppearance/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const SwitchAppearance_index_module = ({"sun":"JMkpU","moon":"tgdgB"});
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/SwitchAppearance/index.tsx
function SwitchAppearance(){const toggle=getToggle();return/*#__PURE__*/(0,jsx_runtime.jsxs)(Switch,{onClick:toggle,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(sun,{className:SwitchAppearance_index_module.sun}),/*#__PURE__*/(0,jsx_runtime.jsx)(moon,{className:SwitchAppearance_index_module.moon})]});}
// EXTERNAL MODULE: ../../node_modules/.pnpm/body-scroll-lock@4.0.0-beta.0/node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js
var bodyScrollLock_esm = __webpack_require__(35274);
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/assets/down.svg
var down_path;
function down_extends() { down_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return down_extends.apply(this, arguments); }

const SvgDown = props => /*#__PURE__*/react.createElement("svg", down_extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 32 32"
}, props), down_path || (down_path = /*#__PURE__*/react.createElement("path", {
  fill: "currentColor",
  d: "M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z"
})));
/* harmony default export */ const down = (SvgDown);
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/assets/right.svg
var right_path;
function right_extends() { right_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return right_extends.apply(this, arguments); }

const SvgRight = props => /*#__PURE__*/react.createElement("svg", right_extends({
  width: 32,
  height: 32,
  viewBox: "0 0 32 32"
}, props), right_path || (right_path = /*#__PURE__*/react.createElement("path", {
  fill: "currentColor",
  d: "M10 6v2h12.59L6 24.59L7.41 26L24 9.41V22h2V6H10z"
})));
/* harmony default export */ const right = (SvgRight);
// EXTERNAL MODULE: ../../packages/cli/doc-core/src/theme-default/components/Link/index.tsx + 1 modules
var Link = __webpack_require__(20190);
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/NavScreenMenuGroup/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const NavScreenMenuGroup_index_module = ({"navScreenMenuGroup":"Tk5bz","open":"SenqS","button":"X7ejb","buttonSpan":"IOfpr","items":"ciUdc","down":"uavm2"});
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/NavScreenMenuGroup/NavScreenMenuGroup.tsx
function NavScreenMenuGroup(item){const{activeIndex}=item;const[isOpen,setIsOpen]=(0,react.useState)(false);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{pos:"relative",className:`${isOpen?NavScreenMenuGroup_index_module.open:''} ${NavScreenMenuGroup_index_module.navScreenMenuGroup}`,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{className:NavScreenMenuGroup_index_module.button,onClick:()=>{setIsOpen(!isOpen);},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:NavScreenMenuGroup_index_module.buttonSpan,children:item.text}),/*#__PURE__*/(0,jsx_runtime.jsx)(down,{className:`${isOpen?NavScreenMenuGroup_index_module.open:''} ${NavScreenMenuGroup_index_module.down} `})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:NavScreenMenuGroup_index_module.items,children:item.items.map((child,index)=>{if(index===activeIndex){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"pa-1",children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{m:"r-1",text:"brand",children:child.text})},child.link);}else{return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"pa-1",font:"medium",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* Link */.r,{href:child.link,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{flex:"~",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{m:"r-1",children:child.text}),/*#__PURE__*/(0,jsx_runtime.jsx)(right,{w:"11px",h:"11px",text:"text-3",m:"t-1 r-1"})]})})})},child.link);}})})})]});}
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/Nav/NavMenuSingleItem.tsx
function NavMenuSingleItem(item){const{pathname,base,langs}=item;const isActive=new RegExp(item.activeMatch||item.link).test((0,shared_utils/* withoutLang */.FH)((0,shared_utils/* withoutBase */.tz)(pathname,base),langs));return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{text:"sm",font:"medium",m:"x-3",className:`${isActive?'text-brand-dark':''}`,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* Link */.r,{href:(0,shared_utils/* normalizeHref */.yc)(item.link),children:item.text})},item.text);}
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/assets/translator.svg
var translator_path;
function translator_extends() { translator_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return translator_extends.apply(this, arguments); }

const SvgTranslator = props => /*#__PURE__*/react.createElement("svg", translator_extends({
  width: 32,
  height: 32,
  viewBox: "0 0 32 32"
}, props), translator_path || (translator_path = /*#__PURE__*/react.createElement("path", {
  fill: "currentColor",
  d: "M27.85 29H30l-6-15h-2.35l-6 15h2.15l1.6-4h6.85zm-7.65-6l2.62-6.56L25.45 23zM18 7V5h-7V2H9v3H2v2h10.74a14.71 14.71 0 0 1-3.19 6.18A13.5 13.5 0 0 1 7.26 9h-2.1a16.47 16.47 0 0 0 3 5.58A16.84 16.84 0 0 1 3 18l.75 1.86A18.47 18.47 0 0 0 9.53 16a16.92 16.92 0 0 0 5.76 3.84L16 18a14.48 14.48 0 0 1-5.12-3.37A17.64 17.64 0 0 0 14.8 7z"
})));
/* harmony default export */ const translator = (SvgTranslator);
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/assets/arrow-down.svg
var arrow_down_path;
function arrow_down_extends() { arrow_down_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrow_down_extends.apply(this, arguments); }

const SvgArrowDown = props => /*#__PURE__*/react.createElement("svg", arrow_down_extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 32 32"
}, props), arrow_down_path || (arrow_down_path = /*#__PURE__*/react.createElement("path", {
  fill: "currentColor",
  d: "M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z"
})));
/* harmony default export */ const arrow_down = (SvgArrowDown);
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/SocialLinks/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const SocialLinks_index_module = ({"social-links-icon":"_8YjQ","socialLinksIcon":"_8YjQ","menu-item":"FU7nx","menuItem":"FU7nx"});
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/SocialLinks/presetIcons.tsx
/* harmony default export */ const presetIcons = ({discord:/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("title",{children:"Discord"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"})]}),facebook:/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("title",{children:"Facebook"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})]}),github:/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("title",{children:"GitHub"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]}),instagram:/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("title",{children:"Instagram"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"})]}),linkedin:/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("title",{children:"LinkedIn"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})]}),slack:/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("title",{children:"Slack"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"})]}),twitter:/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("title",{children:"Twitter"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"})]}),youtube:/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("title",{children:"YouTube"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})]}),juejin:/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{t:"1666949308602",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1858","data-spm-anchor-id":"a313x.7781069.0.i5",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M465.189 161.792c-22.967 18.14-44.325 35.109-47.397 37.742l-5.851 4.68 10.971 8.632c5.998 4.827 11.85 9.508 13.02 10.532 1.17 1.024 17.993 14.336 37.156 29.696l34.962 27.795 5.267-3.95c2.925-2.194 23.259-18.432 45.348-35.986 21.943-17.555 41.253-32.768 42.716-33.646 1.609-1.024 2.779-2.194 2.779-2.78 0-0.438-9.655-8.63-21.504-17.846-11.995-9.363-22.674-17.847-23.845-18.871-15.945-13.02-49.737-39.059-50.76-39.059-0.586 0.147-19.896 14.922-42.862 33.061z m233.325 180.37C507.465 493.275 508.928 492.105 505.417 489.911c-3.072-1.902-11.556-8.485-64.073-50.03-9.07-7.168-18.578-14.775-21.358-16.823-2.78-2.194-8.777-6.875-13.312-10.532-4.68-3.657-10.679-8.339-13.312-10.533-13.165-10.24-71.095-56.027-102.107-80.457-5.852-4.681-11.41-8.485-12.142-8.485-0.731 0-10.971 7.754-22.674 17.116-11.703 9.508-22.674 18.286-24.284 19.456-1.755 1.17-5.12 3.95-7.46 6.144-2.34 2.34-4.828 4.096-5.413 4.096-3.072 0-0.731 3.072 6.437 8.777 4.096 3.218 8.777 6.875 10.094 8.046 1.316 1.024 10.24 8.045 19.748 15.506s23.26 18.286 30.428 23.99c19.31 15.215 31.89 25.308 127.853 101.084 47.836 37.742 88.796 69.779 90.844 71.095 3.657 2.487 3.95 2.487 7.46-0.292a1041.42 1041.42 0 0 0 16.092-12.727c6.875-5.413 14.775-11.703 17.554-13.897 30.135-23.699 80.018-63.05 81.774-64.512 1.17-1.024 12.434-9.802 24.868-19.603s37.888-29.696 56.32-44.324c18.579-14.629 46.227-36.425 61.733-48.567 15.506-12.142 27.794-22.528 27.502-23.26-0.878-1.17-57.637-47.104-59.978-48.274-0.731-0.439-18.578 12.727-39.497 29.257z","p-id":"1859","data-spm-anchor-id":"a313x.7781069.0.i2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M57.93 489.326c-15.215 12.288-28.527 23.405-29.697 24.576-2.34 2.194-5.412-0.44 80.018 66.852 33.207 26.185 32.622 25.747 57.637 45.495 10.386 8.192 36.279 28.672 57.783 45.495 38.18 30.135 44.91 35.401 52.663 41.545 2.048 1.756 22.967 18.14 46.372 36.572 23.26 18.432 74.167 58.514 112.933 89.088 38.912 30.573 71.095 55.734 71.826 56.027 0.732 0.293 7.46-4.389 14.921-10.386 21.797-16.97 90.259-70.949 101.523-79.872 5.705-4.535 12.873-10.24 15.945-12.58 3.072-2.488 6.436-5.12 7.314-5.852 0.878-0.878 11.85-9.509 24.283-19.31 20.773-16.091 59.1-46.226 64.366-50.615 1.17-1.024 5.12-4.096 8.777-6.875 3.657-2.78 7.9-6.29 9.509-7.607 1.609-1.317 14.775-11.703 29.257-23.113 29.11-22.82 42.277-33.207 88.503-69.632 17.262-13.605 32.475-25.454 33.646-26.478 2.486-2.048 31.451-24.869 44.617-35.255 4.827-3.657 9.07-7.168 9.508-7.607 0.44-0.585 5.998-4.827 12.435-9.8 6.436-4.828 13.165-10.24 15.067-11.85l3.365-2.926-9.948-7.753c-5.412-4.388-10.24-8.192-10.679-8.63-1.17-1.317-22.381-18.433-30.135-24.284-3.95-3.072-7.314-5.998-7.606-6.73-1.317-3.071-6.73 0.147-29.258 17.994-13.458 10.532-25.746 20.187-27.355 21.504-1.61 1.463-10.533 8.338-19.749 15.652-9.216 7.168-17.115 13.459-17.554 13.898-0.439 0.438-6.583 5.412-13.897 10.971-7.168 5.559-15.214 11.703-17.7 13.75-4.974 4.097-5.413 4.39-20.334 16.239-5.56 4.388-11.264 8.777-12.435 9.8-1.17 1.025-20.333 16.092-42.422 33.354-22.09 17.408-41.546 32.768-43.155 34.084-1.609 1.463-14.482 11.557-28.525 22.528s-40.814 32.037-59.539 46.812c-18.578 14.775-42.276 33.353-52.516 41.399s-23.26 18.285-28.965 22.82l-10.386 8.339-4.389-3.072c-2.34-1.756-4.68-3.511-5.12-3.95-0.439-0.439-4.973-4.096-10.24-8.046-11.849-9.216-14.482-11.264-16.676-13.166-0.878-0.877-4.243-3.51-7.46-5.851-3.22-2.487-6.145-4.681-6.584-5.12-0.439-0.439-6.875-5.705-14.482-11.703-7.607-5.851-14.921-11.556-16.091-12.58-1.317-1.17-17.116-13.605-35.255-27.795-17.993-14.19-35.109-27.648-38.035-29.842-5.705-4.681-33.499-26.624-125.074-98.743-34.523-27.209-72.704-57.344-84.846-66.852-49.737-39.498-55.15-43.594-56.905-43.447-0.877 0-14.043 10.24-29.257 22.528z","p-id":"1860","data-spm-anchor-id":"a313x.7781069.0.i3"})]}),qq:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",className:"iconify iconify--ri",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M19.913 14.529a31.977 31.977 0 0 0-.675-1.886l-.91-2.246c0-.026.012-.468.012-.696C18.34 5.86 16.507 2 12 2S5.66 5.86 5.66 9.7c0 .229.011.671.012.697l-.91 2.246a32.777 32.777 0 0 0-.675 1.886c-.86 2.737-.581 3.87-.369 3.895c.455.054 1.771-2.06 1.771-2.06c0 1.224.637 2.822 2.016 3.976c-.515.157-1.147.399-1.554.695c-.365.267-.319.54-.253.65c.289.481 4.955.307 6.303.157c1.347.15 6.014.324 6.302-.158c.066-.11.112-.382-.253-.649c-.407-.296-1.039-.538-1.555-.696c1.379-1.153 2.016-2.751 2.016-3.976c0 0 1.316 2.115 1.771 2.06c.212-.025.49-1.157-.37-3.894"})}),wechat:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",className:"iconify iconify--ri",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M18.574 13.711a.91.91 0 0 0 .898-.898c0-.498-.399-.898-.898-.898s-.898.4-.898.898c0 .5.4.898.898.898zm-4.425 0a.91.91 0 0 0 .898-.898c0-.498-.4-.898-.898-.898c-.5 0-.898.4-.898.898c0 .5.399.898.898.898zm6.567 5.04a.347.347 0 0 0-.172.37c0 .048 0 .097.025.147c.098.417.294 1.081.294 1.106c0 .073.025.122.025.172a.22.22 0 0 1-.221.22c-.05 0-.074-.024-.123-.048l-1.449-.836a.799.799 0 0 0-.344-.098c-.073 0-.147 0-.196.024c-.688.197-1.4.295-2.161.295c-3.66 0-6.607-2.457-6.607-5.505c0-3.047 2.947-5.505 6.607-5.505c3.659 0 6.606 2.458 6.606 5.505c0 1.647-.884 3.146-2.284 4.154zM16.673 8.099a9.105 9.105 0 0 0-.28-.005c-4.174 0-7.606 2.86-7.606 6.505c0 .554.08 1.09.228 1.6h-.089a9.963 9.963 0 0 1-2.584-.368c-.074-.025-.148-.025-.222-.025a.832.832 0 0 0-.418.123l-1.748 1.005c-.05.025-.099.05-.148.05a.273.273 0 0 1-.27-.27c0-.074.024-.123.049-.197c.024-.024.246-.834.369-1.324c0-.05.024-.123.024-.172a.556.556 0 0 0-.221-.442C2.058 13.376 1 11.586 1 9.598C1 5.945 4.57 3 8.95 3c3.765 0 6.93 2.169 7.723 5.098zm-5.154.418c.573 0 1.026-.477 1.026-1.026c0-.573-.453-1.026-1.026-1.026s-1.026.453-1.026 1.026s.453 1.026 1.026 1.026zm-5.26 0c.573 0 1.027-.477 1.027-1.026c0-.573-.454-1.026-1.027-1.026c-.572 0-1.026.453-1.026 1.026s.454 1.026 1.026 1.026z"})}),weibo:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",className:"iconify iconify--ri",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M17.525 11.378c1.263.392 2.669 1.336 2.669 3.004c0 2.763-3.98 6.239-9.964 6.239c-4.565 0-9.23-2.213-9.23-5.852c0-1.902 1.204-4.102 3.277-6.177c2.773-2.77 6.004-4.033 7.219-2.816c.537.537.588 1.464.244 2.572c-.178.557.525.25.525.25c2.24-.938 4.196-.994 4.909.027c.38.543.343 1.306-.008 2.19c-.163.407.048.471.36.563zm-7.282 7.939c3.641-.362 6.401-2.592 6.167-4.983c-.237-2.391-3.382-4.038-7.023-3.677c-3.64.36-6.403 2.59-6.167 4.98c.237 2.394 3.382 4.039 7.023 3.68zM6.16 14.438c.754-1.527 2.712-2.39 4.446-1.94c1.793.463 2.707 2.154 1.976 3.8c-.744 1.682-2.882 2.578-4.695 1.993c-1.752-.566-2.493-2.294-1.727-3.853zm1.446 2.587c.568.257 1.325.013 1.676-.55c.346-.568.163-1.217-.407-1.459c-.563-.237-1.291.008-1.64.553c-.354.547-.189 1.202.371 1.456zm2.206-1.808c.219.092.501-.012.628-.231c.123-.22.044-.466-.178-.548c-.216-.084-.486.018-.613.232c-.123.214-.054.458.163.547zM19.873 9.5a.725.725 0 1 1-1.378-.451a1.38 1.38 0 0 0-.288-1.357a1.395 1.395 0 0 0-1.321-.425a.723.723 0 1 1-.303-1.416a2.836 2.836 0 0 1 3.29 3.649zm-3.916-6.575A5.831 5.831 0 0 1 21.5 4.72a5.836 5.836 0 0 1 1.22 5.704a.838.838 0 0 1-1.06.54a.844.844 0 0 1-.542-1.062a4.143 4.143 0 0 0-4.807-5.327a.845.845 0 0 1-.354-1.65z"})}),zhihu:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",className:"iconify iconify--ri",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"m12.344 17.963l-1.688 1.074l-2.131-3.35c-.44 1.402-1.172 2.665-2.139 3.825c-.402.483-.82.918-1.301 1.375c-.155.147-.775.717-.878.82l-1.414-1.414c.139-.139.787-.735.915-.856c.43-.408.795-.79 1.142-1.206c1.266-1.518 2.03-3.21 2.137-5.231H3v-2h4V7h-.868c-.689 1.266-1.558 2.222-2.618 2.857L2.486 8.143c1.395-.838 2.425-2.604 3.038-5.36l1.952.434c-.14.633-.303 1.227-.489 1.783H11.5v2H9v4h2.5v2H9.185l3.159 4.963zm3.838-.07L17.298 17H19V7h-4v10h.736l.446.893zM13 5h8v14h-3l-2.5 2l-1-2H13V5z"})}),bilibili:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",className:"iconify iconify--ri",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M18.223 3.086a1.25 1.25 0 0 1 0 1.768L17.08 5.996h1.17A3.75 3.75 0 0 1 22 9.747v7.5a3.75 3.75 0 0 1-3.75 3.75H5.75A3.75 3.75 0 0 1 2 17.247v-7.5a3.75 3.75 0 0 1 3.75-3.75h1.166L5.775 4.855a1.25 1.25 0 1 1 1.767-1.768l2.652 2.652c.079.079.145.165.198.257h3.213c.053-.092.12-.18.199-.258l2.651-2.652a1.25 1.25 0 0 1 1.768 0zm.027 5.42H5.75a1.25 1.25 0 0 0-1.247 1.157l-.003.094v7.5c0 .659.51 1.199 1.157 1.246l.093.004h12.5a1.25 1.25 0 0 0 1.247-1.157l.003-.093v-7.5c0-.69-.56-1.25-1.25-1.25zm-10 2.5c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25zm7.5 0c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25z"})})});
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/SocialLinks/LinkContent.tsx
const LinkContent=props=>{const{link,popperStyle={}}=props;const{icon,mode='link',content}=link;const IconComp=typeof icon==='object'?/*#__PURE__*/ // eslint-disable-next-line react/no-danger
(0,jsx_runtime.jsx)("div",{dangerouslySetInnerHTML:{__html:icon.svg}}):presetIcons[icon];const[contentVisible,setContentVisible]=(0,react.useState)(false);const mouseEnterIcon=()=>{setContentVisible(true);};const mouseLeavePopper=()=>{setContentVisible(false);};if(mode==='link'){return/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:content,target:"_blank",rel:"noopener noreferrer",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:`${SocialLinks_index_module.socialLinksIcon}`,children:IconComp})},content);}if(mode==='text'){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:`${SocialLinks_index_module.socialLinksIcon}`,cursor:"pointer",pos:"relative",onMouseEnter:mouseEnterIcon,onMouseLeave:mouseLeavePopper,children:[IconComp,contentVisible?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{z:"1",p:"3",w:"50",pos:"absolute right-0",border:"rounded-xl",bg:"white",style:(0,objectSpread2/* default */.Z)({boxShadow:'var(--modern-shadow-3)',border:'1px solid var(--modern-c-divider-light)'},popperStyle),children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{text:"ml",children:content})}):null]});}if(mode==='img'){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:`${SocialLinks_index_module.socialLinksIcon}`,cursor:"pointer",pos:"relative",onMouseEnter:mouseEnterIcon,onMouseLeave:mouseLeavePopper,children:[IconComp,contentVisible?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{z:"1",p:"3",w:"50",pos:"absolute right-0",border:"rounded-xl",bg:"white",className:"break-all",style:(0,objectSpread2/* default */.Z)({boxShadow:'var(--modern-shadow-3)'},popperStyle),children:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:content,alt:"img"})}):null]});}return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{});};
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/SocialLinks/ShownLinks.tsx
const ShownLinks=props=>{const{links,moreIconVisible=false,mouseEnter}=props;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{h:"full",flex:"~",gap:"x-4","align-items-center":"~",transition:"color duration-300",children:links.map((item,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(LinkContent,{link:item,popperStyle:{top:'2.5rem'}},index))}),moreIconVisible?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"ml-1",onMouseEnter:mouseEnter,children:/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_down,{})}):null]});};
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/SocialLinks/HiddenLinks.tsx
const HiddenLinks=props=>{const{links}=props;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{pos:"absolute top-13 right-0",z:"1",p:"3",w:"32",border:"rounded-xl",bg:"white",style:{boxShadow:'var(--modern-shadow-3)',marginRight:'-2px',border:'1px solid var(--modern-c-divider-light)'},flex:"~ wrap",gap:"4",children:links.map(item=>/*#__PURE__*/(0,jsx_runtime.jsx)(LinkContent,{link:item,popperStyle:{top:'1.25rem'}},item.content))});};
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/SocialLinks/index.tsx
const SocialLinks=({socialLinks})=>{const moreThanThree=socialLinks.length>3;const shownLinks=[];const hiddenLinks=[];socialLinks.forEach((item,index)=>{if(index<3){shownLinks.push(item);}else{hiddenLinks.push(item);}});const[moreLinksVisible,setMoreLinksVisible]=(0,react.useState)(false);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:`social-links ${SocialLinks_index_module.menuItem}`,"nav-h":"mobile sm:desktop",flex:"~","align-items-center":"~",pos:"relative",onMouseLeave:()=>setMoreLinksVisible(false),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ShownLinks,{links:shownLinks,moreIconVisible:moreThanThree,mouseEnter:()=>setMoreLinksVisible(true)}),moreLinksVisible?/*#__PURE__*/(0,jsx_runtime.jsx)(HiddenLinks,{links:hiddenLinks}):null]});};
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/NavScreen/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const NavScreen_index_module = ({"navScreen":"NeczB","active":"qQFFd","container":"WLObZ","navMenu":"_3YuLy","navMenuItem":"osgV9","navAppearance":"ctzdQ","socialAndAppearance":"rp9pY"});
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/NavScreen/index.tsx
const NavScreenTranslations=({translationMenuData})=>{return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:NavScreen_index_module.navTranslations,flex:"~",text:"sm",font:"bold",justify:"center",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{m:"x-1.5",children:/*#__PURE__*/(0,jsx_runtime.jsx)(NavScreenMenuGroup,(0,objectSpread2/* default */.Z)({},translationMenuData))})});};function NavScreen(props){var _siteData$themeConfig;const{isScreenOpen,localeData,siteData,pathname}=props;const screen=(0,react.useRef)(null);const localesData=siteData.themeConfig.locales||[];const hasMultiLanguage=localesData.length>1;const menuItems=localeData.nav||[];const hasAppearanceSwitch=siteData.themeConfig.darkMode!==false;const socialLinks=(siteData===null||siteData===void 0?void 0:(_siteData$themeConfig=siteData.themeConfig)===null||_siteData$themeConfig===void 0?void 0:_siteData$themeConfig.socialLinks)||[];const hasSocialLinks=socialLinks.length>0;const langs=localesData.map(item=>item.lang||'zh')||[];const{base}=siteData;const translationMenuData=hasMultiLanguage?{text:/*#__PURE__*/(0,jsx_runtime.jsx)(translator,{w:"18px",h:"18px"}),items:localesData.map(item=>({text:item.label,link:`/${item.lang}`})),activeIndex:localesData.findIndex(item=>item.lang===localeData.lang)}:null;const NavScreenAppearance=()=>{return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:`align-items-center appearance pa-2 ${NavScreen_index_module.navAppearance}`,flex:"~",justify:"center",children:/*#__PURE__*/(0,jsx_runtime.jsx)(SwitchAppearance,{})});};const NavScreenMenu=({menuItems})=>{return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:NavScreen_index_module.navMenu,children:menuItems.map((item,index)=>{return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{w:"full",className:NavScreen_index_module.navMenuItem,children:'link'in item?/*#__PURE__*/(0,jsx_runtime.jsx)(NavMenuSingleItem,(0,objectSpread2/* default */.Z)({pathname:pathname,base:base,langs:langs},item),index):/*#__PURE__*/(0,jsx_runtime.jsx)("div",{m:"x-3",last:"mr-0",children:/*#__PURE__*/(0,jsx_runtime.jsx)(NavScreenMenuGroup,(0,objectSpread2/* default */.Z)({},item))},index)},index);})});};(0,react.useEffect)(()=>{screen.current&&isScreenOpen&&(0,bodyScrollLock_esm/* disableBodyScroll */.Qp)(screen.current,{reserveScrollBarGap:true});return()=>{(0,bodyScrollLock_esm/* clearAllBodyScrollLocks */.tP)();};},[isScreenOpen]);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:`${NavScreen_index_module.navScreen} ${isScreenOpen?NavScreen_index_module.active:''}`,ref:screen,id:"navScreen",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:NavScreen_index_module.container,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(NavScreenMenu,{menuItems:menuItems}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:NavScreen_index_module.socialAndAppearance,flex:"~",justify:"center","align-items-center":"center",children:hasAppearanceSwitch&&/*#__PURE__*/(0,jsx_runtime.jsx)(NavScreenAppearance,{})}),hasMultiLanguage&&/*#__PURE__*/(0,jsx_runtime.jsx)(NavScreenTranslations,{translationMenuData:translationMenuData}),hasSocialLinks&&/*#__PURE__*/(0,jsx_runtime.jsx)(SocialLinks,{socialLinks:socialLinks})]})});}
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/logic/useNav.ts
function useNav(){const[isScreenOpen,setIsScreenOpen]=(0,react.useState)(false);function openScreen(){setIsScreenOpen(true);window.addEventListener('resize',closeScreenOnTabletWindow);}function closeScreen(){setIsScreenOpen(false);window.removeEventListener('resize',closeScreenOnTabletWindow);}function toggleScreen(){if(isScreenOpen){closeScreen();}else{openScreen();}}/**
   * Close screen when the user resizes the window wider than tablet size.
   */function closeScreenOnTabletWindow(){window.outerWidth>=768&&closeScreen();}return{isScreenOpen,openScreen,closeScreen,toggleScreen};}
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/NavHambmger/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const NavHambmger_index_module = ({"navHamburger":"wzxr1","container":"kECx4","top":"wzOB6","middle":"coO8e","bottom":"RrwJk","active":"hb8AN"});
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/NavHambmger/index.tsx
function NavHamburger(props){const{localeData,siteData,pathname}=props;const{isScreenOpen,toggleScreen}=useNav();return/*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:toggleScreen,className:`${isScreenOpen?NavHambmger_index_module.active:''} ${NavHambmger_index_module.navHamburger}`,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:NavHambmger_index_module.container,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:NavHambmger_index_module.top}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:NavHambmger_index_module.middle}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:NavHambmger_index_module.bottom})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(NavScreen,{isScreenOpen:isScreenOpen,localeData:localeData,siteData:siteData,pathname:pathname})]});}
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/Nav/NavMenuGroup.tsx
function NavMenuGroup(item){const{activeIndex,isTranslation}=item;const[isOpen,setIsOpen]=(0,react.useState)(false);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{h:"14",className:"relative",flex:"~ center",onMouseLeave:()=>setIsOpen(false),children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{onMouseEnter:()=>setIsOpen(true),flex:"~ center",align:"items-center",font:"medium",text:"sm text-1 hover:text-2",transition:"color duration-200",className:"nav-menu-group-button",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{m:"r-1",text:"sm",font:"medium",children:isTranslation?/*#__PURE__*/(0,jsx_runtime.jsx)(translator,{w:"18px",h:"18px"}):item.text}),/*#__PURE__*/(0,jsx_runtime.jsx)(down,{})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{pos:"top-13 right-0",m:"x-0.8",transition:"opacity duration-300",className:"nav-menu-group-content absolute",style:{opacity:isOpen?1:0,visibility:isOpen?'visible':'hidden'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{p:"3",w:"full",h:"full",className:"min-w-128px max-h-100vh rounded-xl whitespace-nowrap",bg:"white",style:{boxShadow:'var(--modern-shadow-3)',marginRight:'-1.5rem',zIndex:100,border:'1px solid var(--modern-c-divider-light)'},children:item.items.map((child,index)=>{if(index===activeIndex){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"rounded-md",p:"y-1.6 l-3",children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{m:"r-1",text:"brand",children:child.text})},child.link);}else{return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{font:"medium",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* Link */.r,{href:child.link,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"rounded-md",hover:"bg-mute",p:"y-1.6 l-3 r-6",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{flex:"~",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{m:"r-1",children:[child.text,/*#__PURE__*/(0,jsx_runtime.jsx)(right,{w:"11px",h:"11px",text:"text-3",m:"t-1 r-1 l-1",className:"inline-block align-text-top"})]})})})})},child.link);}})})})]});}
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/Nav/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Nav_index_module = ({"container":"Be7Bu","rightNav":"fxz4T","navContainer":"J5RhI","social-links-icon":"aVv_y","socialLinksIcon":"aVv_y","menu-item":"WjR05","menuItem":"WjR05"});
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/Nav/index.tsx
const NavBarTitle=({title,langRoutePrefix,logo})=>{return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:`${Nav_index_module.navBarTitle}`,children:/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:(0,utils/* withBase */.pJ)(langRoutePrefix),w:"full",h:"full",text:"1rem",font:"semibold",transition:"opacity duration-300",hover:"opacity-60",className:"flex items-center",children:logo?/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:logo,alt:"logo",id:"logo",m:"r-4",className:"w-24 modern-doc-logo"}):/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:title})})});};const NavTranslations=({translationMenuData})=>{return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{flex:"~",text:"sm",font:"bold",align:"items-center",className:`translation ${Nav_index_module.menuItem}`,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{m:"x-1.5",children:/*#__PURE__*/(0,jsx_runtime.jsx)(NavMenuGroup,(0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},translationMenuData),{},{isTranslation:true}))})});};function Nav(props){var _siteData$themeConfig,_siteData$themeConfig2,_localeData$title;const{beforeNavTitle,afterNavTitle}=props;const{siteData}=(0,hooks/* usePageData */.V)();const{pathname}=(0,dist/* useLocation */.TH)();const hasAppearanceSwitch=siteData.themeConfig.darkMode!==false;const localeData=(0,useLocaleSiteData/* useLocaleSiteData */.M)();const localeLanguages=Object.values(siteData.themeConfig.locales||{});const hasMultiLanguage=localeLanguages.length>1;const socialLinks=(siteData===null||siteData===void 0?void 0:(_siteData$themeConfig=siteData.themeConfig)===null||_siteData$themeConfig===void 0?void 0:_siteData$themeConfig.socialLinks)||[];const hasSocialLinks=socialLinks.length>0;const defaultLang=siteData.lang||'zh';const langs=localeLanguages.map(item=>item.lang||'zh')||[];const{logo,base}=siteData;const translationMenuData=hasMultiLanguage?{items:localeLanguages.map(item=>({text:item.label,link:(0,shared_utils/* replaceLang */.$U)(pathname,item.lang,defaultLang,langs,base)})),activeIndex:localeLanguages.findIndex(item=>item.lang===localeData.lang)}:null;const NavAppearance=()=>{return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:`${Nav_index_module.menuItem} modern-doc-appearance`,display:"none sm:flex","align-items-center":"center",children:/*#__PURE__*/(0,jsx_runtime.jsx)(SwitchAppearance,{})});};const NavMenu=({menuItems})=>{return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"menu",h:"14",children:menuItems.map(item=>'items'in item?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{m:"x-3",last:"mr-0",children:/*#__PURE__*/(0,jsx_runtime.jsx)(NavMenuGroup,(0,objectSpread2/* default */.Z)({},item))},item.text):/*#__PURE__*/(0,jsx_runtime.jsx)(NavMenuSingleItem,(0,objectSpread2/* default */.Z)({pathname:pathname,langs:langs,base:base},item),item.link))});};const menuItems=localeData.nav||[];const hasSearch=(siteData===null||siteData===void 0?void 0:(_siteData$themeConfig2=siteData.themeConfig)===null||_siteData$themeConfig2===void 0?void 0:_siteData$themeConfig2.search)!==false;const title=(_localeData$title=localeData.title)!==null&&_localeData$title!==void 0?_localeData$title:siteData.title;const rightNav=()=>{return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Nav_index_module.rightNav,children:[hasSearch&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"search",flex:"sm:1",p:"sm:l-8",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Search,{langRoutePrefix:localeData.langRoutePrefix||'',defaultLang:defaultLang,langs:langs})}),/*#__PURE__*/(0,jsx_runtime.jsx)(NavMenu,{menuItems:menuItems}),hasMultiLanguage&&/*#__PURE__*/(0,jsx_runtime.jsx)(NavTranslations,{translationMenuData:translationMenuData}),hasAppearanceSwitch&&/*#__PURE__*/(0,jsx_runtime.jsx)(NavAppearance,{}),hasSocialLinks&&/*#__PURE__*/(0,jsx_runtime.jsx)(SocialLinks,{socialLinks:socialLinks})]});};return/*#__PURE__*/(0,jsx_runtime.jsx)("header",{className:`top-0 left-0 relative md:fixed w-full`,style:{borderBottom:'1px solid var(--modern-c-divider-light)',zIndex:'var(--modern-z-index-nav)'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:`${Nav_index_module.navContainer} modern-doc-nav`,p:"x-6",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{flex:"~",justify:"between",align:"items-center",h:"full",className:`${Nav_index_module.container}`,children:[beforeNavTitle,/*#__PURE__*/(0,jsx_runtime.jsx)(NavBarTitle,{title:title,langRoutePrefix:localeData.langRoutePrefix||'/',logo:logo}),afterNavTitle,/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Nav_index_module.content,flex:"~ 1",justify:"end","align-items-center":"~",children:[rightNav(),/*#__PURE__*/(0,jsx_runtime.jsx)(NavHamburger,{localeData:localeData,siteData:siteData,pathname:pathname})]})]})})});}
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/Search/assets/search.svg
var search_path;
function search_extends() { search_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return search_extends.apply(this, arguments); }

const SvgSearch = props => /*#__PURE__*/react.createElement("svg", search_extends({
  width: 32,
  height: 32,
  viewBox: "0 0 32 32"
}, props), search_path || (search_path = /*#__PURE__*/react.createElement("path", {
  fill: "#888888",
  d: "m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"
})));
/* harmony default export */ const search = (SvgSearch);
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/Search/assets/loading.svg
var loading_g;
function loading_extends() { loading_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return loading_extends.apply(this, arguments); }

const SvgLoading = props => /*#__PURE__*/react.createElement("svg", loading_extends({
  width: 32,
  height: 32,
  viewBox: "0 0 24 24"
}, props), loading_g || (loading_g = /*#__PURE__*/react.createElement("g", {
  fill: "none",
  stroke: "var(--modern-c-brand)",
  strokeLinecap: "round",
  strokeWidth: 2
}, /*#__PURE__*/react.createElement("path", {
  strokeDasharray: 60,
  strokeDashoffset: 60,
  strokeOpacity: 0.3,
  d: "M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
}, /*#__PURE__*/react.createElement("animate", {
  fill: "freeze",
  attributeName: "stroke-dashoffset",
  dur: "1.3s",
  values: "60;0"
})), /*#__PURE__*/react.createElement("path", {
  strokeDasharray: 15,
  strokeDashoffset: 15,
  d: "M12 3C16.9706 3 21 7.02944 21 12"
}, /*#__PURE__*/react.createElement("animate", {
  fill: "freeze",
  attributeName: "stroke-dashoffset",
  dur: "0.3s",
  values: "15;0"
}), /*#__PURE__*/react.createElement("animateTransform", {
  attributeName: "transform",
  dur: "1.5s",
  repeatCount: "indefinite",
  type: "rotate",
  values: "0 12 12;360 12 12"
})))));
/* harmony default export */ const loading = (SvgLoading);
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/Search/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Search_index_module = ({"searchInput":"SjSZ2","suggestionItem":"ahvvD","focus":"HZkzZ","suggestionItemFirst":"Xu405","searchCommand":"iUJv9"});
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/Search/Suggestion.tsx
function SuggestionContent(props){const{suggestion,query}=props;const renderHeaderMatch=()=>{if(suggestion.type==='header'){const{header,headerHighlightIndex}=suggestion;const headerPrefix=header.slice(0,headerHighlightIndex);const headerSuffix=header.slice(headerHighlightIndex+query.length);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{font:"medium",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:headerPrefix}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{text:"brand-light",children:query}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:headerSuffix})]});}else{return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{font:"medium",children:suggestion.header});}};const renderStatementMatch=()=>{if(suggestion.type!=='content'){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{});}const{statementHighlightIndex,statement}=suggestion;const statementPrefix=statement.slice(0,statementHighlightIndex);const statementSuffix=statement.slice(statementHighlightIndex+query.length);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{font:"normal",text:"sm gray-light",w:"full",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:statementPrefix}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{text:"brand-light",children:query}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:statementSuffix})]});};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{"table-cell":"~",p:"x-3 y-2",text:"#2c3e50",className:`${props.isCurrent?Search_index_module.focus:'bg-white'} ${Search_index_module.suggestionItem} ${props.isFirst?Search_index_module.suggestionItemFirst:''}`,transition:"bg duration-200",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{font:"medium",text:"sm",children:renderHeaderMatch()}),suggestion.type==='content'&&renderStatementMatch()]});}
// EXTERNAL MODULE: ../../packages/cli/doc-core/src/theme-default/components/Search/logic/util.ts
var util = __webpack_require__(96934);
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/Search/index.tsx
const KEY_CODE={ARROW_UP:'ArrowUp',ARROW_DOWN:'ArrowDown',ENTER:'Enter',SEARCH:'KeyK'};function Search(props){const[query,setQuery]=(0,react.useState)('');const[suggestions,setSuggestions]=(0,react.useState)([]);const[initialized,setInitialized]=(0,react.useState)(false);const[searching,setSearching]=(0,react.useState)(false);const[focused,setFocused]=(0,react.useState)(false);const[currentSuggestionIndex,setCurrentSuggestionIndex]=(0,react.useState)(-1);const psRef=(0,react.useRef)();const initPageSearcherPromiseRef=(0,react.useRef)();const[disableInput,setDisableInput]=(0,react.useState)(true);const searchInputRef=(0,react.useRef)(null);// initializing or searching
const showLoading=!initialized||searching;// 1. page searcher has been initialized and finish searching
// 2. result is empty
const showNotFound=!showLoading&&suggestions.length===0;// eslint-disable-next-line consistent-return
const initPageSearcher=(0,react.useCallback)(async()=>{if(!psRef.current){const{PageSearcher}=await Promise.all(/* import() */[__webpack_require__.e(92986), __webpack_require__.e(87991), __webpack_require__.e(48652)]).then(__webpack_require__.bind(__webpack_require__, 48652));const{defaultLang,langs,langRoutePrefix}=props;psRef.current=new PageSearcher({defaultLang,langs,langRoutePrefix});await psRef.current.init();setInitialized(true);}else{return Promise.resolve();}},[props.langRoutePrefix]);const onQueryChanged=(0,react.useCallback)(async e=>{const newQuery=e.target.value;setQuery(newQuery);initPageSearcherPromiseRef.current=initPageSearcherPromiseRef.current||initPageSearcher();await initPageSearcherPromiseRef.current;setSearching(true);const matched=await psRef.current.match(newQuery);setSearching(false);setSuggestions(matched);},[initPageSearcher]);(0,react.useEffect)(()=>{const onKeyDown=e=>{switch(e.code){case KEY_CODE.SEARCH:if((e.ctrlKey||e.metaKey)&&searchInputRef.current){e.preventDefault();if(!focused){setFocused(true);searchInputRef.current.focus();}else{setFocused(false);searchInputRef.current.blur();}}break;case KEY_CODE.ARROW_DOWN:e.preventDefault();setCurrentSuggestionIndex((currentSuggestionIndex+1)%suggestions.length);break;case KEY_CODE.ARROW_UP:e.preventDefault();setCurrentSuggestionIndex((currentSuggestionIndex-1+suggestions.length)%suggestions.length);break;case KEY_CODE.ENTER:if(currentSuggestionIndex>=0){const suggestion=suggestions[currentSuggestionIndex];window.location.href=suggestion.link;}break;default:break;}};document.addEventListener('keydown',onKeyDown);return()=>{document.removeEventListener('keydown',onKeyDown);};},[currentSuggestionIndex,focused,suggestions]);(0,react.useEffect)(()=>{setDisableInput(false);},[]);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{flex:"~",align:"items-center",pos:"relative",m:"r-2",font:"semibold",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(search,{w:"5",h:"5",fill:"currentColor",onClick:()=>{var _searchInputRef$curre;setFocused(true);(_searchInputRef$curre=searchInputRef.current)===null||_searchInputRef$curre===void 0?void 0:_searchInputRef$curre.focus();}}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",{disabled:disableInput,cursor:"text focus:auto",placeholder:"Search",height:"8",border:"none",type:"text",text:"sm",p:"t-0 r-2 b-0 l-2",transition:"all duration-200 ease",className:`rounded-sm ${Search_index_module.searchInput} ${focused?Search_index_module.focus:''}`,"aria-label":"Search",autoComplete:"off",onChange:onQueryChanged,onBlur:()=>setTimeout(()=>setFocused(false),200),onFocus:()=>{setFocused(true);initPageSearcherPromiseRef.current=initPageSearcher();},ref:searchInputRef}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{m:"r-3",w:"10",h:"6",p:"x-1.5",border:"1px solid gray-light-3 rounded-md",text:"xs gray-light-3",flex:"~",align:"items-center",justify:"around",className:`${Search_index_module.searchCommand}`,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"\u2318"}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"K"})]}),focused&&query&&/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{pos:"fixed sm:absolute top-12 sm:top-8 right--10",z:"60",p:"2",list:"none",bg:"white",className:"w-full sm:min-w-600px sm:max-w-800px",style:{border:'1px solid var(--modern-c-divider-light)'},children:[suggestions.map((item,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)("li",{cursor:"pointer",w:"full",className:"border-collapse rounded-sm",children:/*#__PURE__*/(0,jsx_runtime.jsx)("a",{block:"~",href:item.link,className:"whitespace-normal",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{table:"~",w:"full",className:"border-collapse",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{"border-left":"none",display:"table-cell",p:"1.2",text:"sm right",font:"semibold",className:`align-middle`,style:{borderBottom:'1px solid var(--modern-c-divider-light)',width:'35%'},children:(0,util/* formatText */.RZ)(item.title)}),/*#__PURE__*/(0,jsx_runtime.jsx)(SuggestionContent,{suggestion:item,query:query,isCurrent:index===currentSuggestionIndex,isFirst:index===0})]})})},item.link)),showNotFound&&/*#__PURE__*/(0,jsx_runtime.jsx)("li",{flex:"~ center",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{p:"2",text:"sm #2c3e50",children:"No results found"})}),showLoading&&/*#__PURE__*/(0,jsx_runtime.jsx)("li",{flex:"~ center",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{p:"2",text:"sm",children:/*#__PURE__*/(0,jsx_runtime.jsx)(loading,{})})})]})]});}/* harmony default export */ const components_Search = ((/* unused pure expression or super */ null && (Search)));
// EXTERNAL MODULE: ../../node_modules/.pnpm/@headlessui+react@1.7.7_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/tabs/tabs.js + 16 modules
var tabs = __webpack_require__(38378);
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/Tabs/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Tabs_index_module = ({"tab":"lUaxE","not-selected":"O8LId","notSelected":"O8LId","selected":"PfRUQ"});
;// CONCATENATED MODULE: ../../packages/cli/doc-core/src/theme-default/components/Tabs/index.tsx
const Tabs_excluded=["children"];function isTabItem(item){if(item&&typeof item==='object'&&'label'in item){return true;}return false;}const renderTab=item=>{if(isTabItem(item)){return item.label||item.value;}return item;};function Tabs({values,defaultValue,onChange,children}){let tabValues=values||[];if(tabValues.length===0){tabValues=children.map(child=>child.props);}const defaultIndex=tabValues.findIndex(item=>{if(typeof item==='string'){return item===defaultValue;}else if(item&&typeof item==='object'&&'value'in item){return item.value===defaultValue;}return false;});return/*#__PURE__*/(0,jsx_runtime.jsxs)(tabs/* Tab.Group */.O.Group,{defaultIndex:defaultIndex,onChange:onChange,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* Tab.List */.O.List,{className:"mt-4 flex w-max min-w-full border-b border-gray-200",children:tabValues.map((item,index)=>{const disabled=Boolean(item&&typeof item==='object'&&'disabled'in item&&item.disabled);return/*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* Tab */.O,{disabled:disabled,className:({selected})=>`${Tabs_index_module.tab} ${selected?Tabs_index_module.selected:Tabs_index_module.notSelected}`,children:renderTab(item)},index);})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* Tab.Panels */.O.Panels,{children:children})]});}function Tab(_ref){let{children}=_ref,props=(0,objectWithoutProperties/* default */.Z)(_ref,Tabs_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* Tab.Panel */.O.Panel,(0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},props),{},{className:"rounded pt-4",children:children}));}
;// CONCATENATED MODULE: ./src/index.ts
/* harmony default export */ const src = ((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},theme_default/* default */.ZP),{},{HomeLayout: Home}));

/***/ }),

/***/ 76645:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47306);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17818);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_symbol_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39661);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_symbol_match_all_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29223);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_symbol_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13591);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_symbol_search_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18868);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_symbol_split_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54095);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24661);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_aggregate_error_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91876);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_aggregate_error_cause_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22943);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_array_at_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35078);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_array_find_last_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(87464);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(54297);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_array_flat_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(57640);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(18253);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(94841);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(78062);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(71920);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(89909);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5425);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(59882);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(75715);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_array_unscopables_flat_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(24560);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(14137);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_array_unshift_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(85289);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(2048);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(51072);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_global_this_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(90967);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(20704);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_math_hypot_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(91609);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_number_parse_float_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(80742);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(30403);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_number_to_exponential_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(79681);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(63411);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(19658);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_object_from_entries_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(47657);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_object_has_own_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(31732);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(22741);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(7116);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(70769);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_promise_all_settled_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(25679);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_promise_any_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(93167);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(94457);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_reflect_set_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(15371);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(77293);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(46933);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(79010);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(9883);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(76618);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(32765);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(16784);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_string_at_alternative_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(22424);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(46073);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(9944);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(8258);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_string_match_all_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(2450);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(29);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(50838);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(71867);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(64469);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(40387);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(58521);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_string_trim_end_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(19280);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_string_trim_start_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(62108);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_typed_array_float32_array_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(11662);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_typed_array_float64_array_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(78598);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_typed_array_int8_array_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(55806);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_typed_array_int16_array_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(27999);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_typed_array_int32_array_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(30146);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(44160);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_typed_array_uint8_clamped_array_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(21887);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_typed_array_uint16_array_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(17507);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_typed_array_uint32_array_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(22894);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(13222);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(61066);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(92828);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(96118);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_typed_array_from_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(58528);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_typed_array_of_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(74273);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(51850);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(72726);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(31368);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_array_from_async_js__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(93331);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_array_filter_out_js__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(18825);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_array_filter_reject_js__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(4071);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_array_group_js__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(42873);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_array_group_by_js__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(89383);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_array_group_by_to_map_js__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(47675);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_array_group_to_map_js__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(63779);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_array_is_template_object_js__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(50665);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_array_last_index_js__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(50451);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_array_last_item_js__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(28935);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(9248);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(89973);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_array_to_spliced_js__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(22876);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_array_unique_by_js__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(65041);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_array_with_js__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(57843);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_async_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(78713);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_async_iterator_as_indexed_pairs_js__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(98747);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_async_iterator_drop_js__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(15784);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_async_iterator_every_js__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(1988);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_async_iterator_filter_js__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(94818);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_async_iterator_find_js__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(60315);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_async_iterator_flat_map_js__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(6266);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_async_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(38296);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_async_iterator_from_js__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(69989);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_async_iterator_indexed_js__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(66110);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_async_iterator_map_js__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(25514);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_async_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(14974);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_async_iterator_some_js__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(75724);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_async_iterator_take_js__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(26444);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_async_iterator_to_array_js__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(52112);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_bigint_range_js__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(45595);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_composite_key_js__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(68547);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_composite_symbol_js__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(15603);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_function_is_callable_js__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(95107);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_function_is_constructor_js__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(20604);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_function_un_this_js__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(41099);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(32778);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_iterator_as_indexed_pairs_js__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(85648);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_iterator_drop_js__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(11227);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_iterator_every_js__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(75773);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(95236);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(62554);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_iterator_flat_map_js__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(49065);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(36987);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_iterator_from_js__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(6716);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_iterator_indexed_js__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(57029);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(76303);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(21600);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(18549);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_iterator_take_js__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(2892);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_iterator_to_array_js__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(90825);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_iterator_to_async_js__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(12477);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(78296);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_map_emplace_js__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(166);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(74566);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(99652);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(63594);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(2653);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_map_from_js__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(91559);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_map_group_by_js__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(21686);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(12881);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_map_key_by_js__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(85000);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(74546);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(61238);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(82493);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(93129);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_map_of_js__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(96310);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(13078);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(35295);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(64379);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_map_update_or_insert_js__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(92370);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_map_upsert_js__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(32247);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_math_clamp_js__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(12600);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_math_deg_per_rad_js__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(17124);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_math_degrees_js__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(78140);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_math_fscale_js__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(49758);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_math_iaddh_js__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(37804);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_math_imulh_js__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(91212);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_math_isubh_js__WEBPACK_IMPORTED_MODULE_160__ = __webpack_require__(74271);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_math_rad_per_deg_js__WEBPACK_IMPORTED_MODULE_161__ = __webpack_require__(11327);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_math_radians_js__WEBPACK_IMPORTED_MODULE_162__ = __webpack_require__(88991);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_math_scale_js__WEBPACK_IMPORTED_MODULE_163__ = __webpack_require__(92488);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_math_seeded_prng_js__WEBPACK_IMPORTED_MODULE_164__ = __webpack_require__(68066);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_math_signbit_js__WEBPACK_IMPORTED_MODULE_165__ = __webpack_require__(21542);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_math_umulh_js__WEBPACK_IMPORTED_MODULE_166__ = __webpack_require__(64183);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_number_from_string_js__WEBPACK_IMPORTED_MODULE_167__ = __webpack_require__(20753);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_number_range_js__WEBPACK_IMPORTED_MODULE_168__ = __webpack_require__(23719);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_object_iterate_entries_js__WEBPACK_IMPORTED_MODULE_169__ = __webpack_require__(12287);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_object_iterate_keys_js__WEBPACK_IMPORTED_MODULE_170__ = __webpack_require__(25927);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_object_iterate_values_js__WEBPACK_IMPORTED_MODULE_171__ = __webpack_require__(67182);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_observable_js__WEBPACK_IMPORTED_MODULE_172__ = __webpack_require__(71496);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_promise_try_js__WEBPACK_IMPORTED_MODULE_173__ = __webpack_require__(15982);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_reflect_define_metadata_js__WEBPACK_IMPORTED_MODULE_174__ = __webpack_require__(73837);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_reflect_delete_metadata_js__WEBPACK_IMPORTED_MODULE_175__ = __webpack_require__(16044);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_reflect_get_metadata_js__WEBPACK_IMPORTED_MODULE_176__ = __webpack_require__(55065);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_reflect_get_metadata_keys_js__WEBPACK_IMPORTED_MODULE_177__ = __webpack_require__(26099);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_reflect_get_own_metadata_js__WEBPACK_IMPORTED_MODULE_178__ = __webpack_require__(73867);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_reflect_get_own_metadata_keys_js__WEBPACK_IMPORTED_MODULE_179__ = __webpack_require__(45335);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_reflect_has_metadata_js__WEBPACK_IMPORTED_MODULE_180__ = __webpack_require__(76375);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_reflect_has_own_metadata_js__WEBPACK_IMPORTED_MODULE_181__ = __webpack_require__(82454);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_reflect_metadata_js__WEBPACK_IMPORTED_MODULE_182__ = __webpack_require__(77289);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_set_add_all_js__WEBPACK_IMPORTED_MODULE_183__ = __webpack_require__(54185);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_set_delete_all_js__WEBPACK_IMPORTED_MODULE_184__ = __webpack_require__(39943);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_set_difference_js__WEBPACK_IMPORTED_MODULE_185__ = __webpack_require__(57305);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_set_every_js__WEBPACK_IMPORTED_MODULE_186__ = __webpack_require__(31359);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_set_filter_js__WEBPACK_IMPORTED_MODULE_187__ = __webpack_require__(59258);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_set_find_js__WEBPACK_IMPORTED_MODULE_188__ = __webpack_require__(27030);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_set_from_js__WEBPACK_IMPORTED_MODULE_189__ = __webpack_require__(70344);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_set_intersection_js__WEBPACK_IMPORTED_MODULE_190__ = __webpack_require__(16638);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_set_is_disjoint_from_js__WEBPACK_IMPORTED_MODULE_191__ = __webpack_require__(69157);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_set_is_subset_of_js__WEBPACK_IMPORTED_MODULE_192__ = __webpack_require__(96048);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_set_is_superset_of_js__WEBPACK_IMPORTED_MODULE_193__ = __webpack_require__(6454);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_set_join_js__WEBPACK_IMPORTED_MODULE_194__ = __webpack_require__(4794);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_set_map_js__WEBPACK_IMPORTED_MODULE_195__ = __webpack_require__(36166);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_set_of_js__WEBPACK_IMPORTED_MODULE_196__ = __webpack_require__(16343);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_set_reduce_js__WEBPACK_IMPORTED_MODULE_197__ = __webpack_require__(33391);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_set_some_js__WEBPACK_IMPORTED_MODULE_198__ = __webpack_require__(28754);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_set_symmetric_difference_js__WEBPACK_IMPORTED_MODULE_199__ = __webpack_require__(73321);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_set_union_js__WEBPACK_IMPORTED_MODULE_200__ = __webpack_require__(40705);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_string_at_js__WEBPACK_IMPORTED_MODULE_201__ = __webpack_require__(29065);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_string_cooked_js__WEBPACK_IMPORTED_MODULE_202__ = __webpack_require__(27765);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_string_code_points_js__WEBPACK_IMPORTED_MODULE_203__ = __webpack_require__(66257);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_string_is_well_formed_js__WEBPACK_IMPORTED_MODULE_204__ = __webpack_require__(53269);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_string_to_well_formed_js__WEBPACK_IMPORTED_MODULE_205__ = __webpack_require__(3042);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_symbol_async_dispose_js__WEBPACK_IMPORTED_MODULE_206__ = __webpack_require__(53492);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_symbol_dispose_js__WEBPACK_IMPORTED_MODULE_207__ = __webpack_require__(71745);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_symbol_matcher_js__WEBPACK_IMPORTED_MODULE_208__ = __webpack_require__(3252);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_symbol_metadata_js__WEBPACK_IMPORTED_MODULE_209__ = __webpack_require__(14965);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_symbol_metadata_key_js__WEBPACK_IMPORTED_MODULE_210__ = __webpack_require__(27527);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_symbol_observable_js__WEBPACK_IMPORTED_MODULE_211__ = __webpack_require__(96400);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_symbol_pattern_match_js__WEBPACK_IMPORTED_MODULE_212__ = __webpack_require__(9978);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_symbol_replace_all_js__WEBPACK_IMPORTED_MODULE_213__ = __webpack_require__(41647);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_typed_array_from_async_js__WEBPACK_IMPORTED_MODULE_214__ = __webpack_require__(98164);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_typed_array_filter_out_js__WEBPACK_IMPORTED_MODULE_215__ = __webpack_require__(81329);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_typed_array_filter_reject_js__WEBPACK_IMPORTED_MODULE_216__ = __webpack_require__(71607);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_typed_array_group_by_js__WEBPACK_IMPORTED_MODULE_217__ = __webpack_require__(39837);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_218__ = __webpack_require__(4708);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_219__ = __webpack_require__(98415);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_typed_array_to_spliced_js__WEBPACK_IMPORTED_MODULE_220__ = __webpack_require__(73330);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_typed_array_unique_by_js__WEBPACK_IMPORTED_MODULE_221__ = __webpack_require__(24868);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_typed_array_with_js__WEBPACK_IMPORTED_MODULE_222__ = __webpack_require__(87486);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_weak_map_delete_all_js__WEBPACK_IMPORTED_MODULE_223__ = __webpack_require__(41583);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_weak_map_from_js__WEBPACK_IMPORTED_MODULE_224__ = __webpack_require__(36540);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_weak_map_of_js__WEBPACK_IMPORTED_MODULE_225__ = __webpack_require__(25651);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_weak_map_emplace_js__WEBPACK_IMPORTED_MODULE_226__ = __webpack_require__(56388);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_weak_map_upsert_js__WEBPACK_IMPORTED_MODULE_227__ = __webpack_require__(7294);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_weak_set_add_all_js__WEBPACK_IMPORTED_MODULE_228__ = __webpack_require__(61795);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_weak_set_delete_all_js__WEBPACK_IMPORTED_MODULE_229__ = __webpack_require__(70039);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_weak_set_from_js__WEBPACK_IMPORTED_MODULE_230__ = __webpack_require__(80676);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_esnext_weak_set_of_js__WEBPACK_IMPORTED_MODULE_231__ = __webpack_require__(78889);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_232__ = __webpack_require__(3346);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_web_dom_exception_constructor_js__WEBPACK_IMPORTED_MODULE_233__ = __webpack_require__(56054);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_234__ = __webpack_require__(6885);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_web_dom_exception_to_string_tag_js__WEBPACK_IMPORTED_MODULE_235__ = __webpack_require__(41050);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_web_immediate_js__WEBPACK_IMPORTED_MODULE_236__ = __webpack_require__(98720);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_web_queue_microtask_js__WEBPACK_IMPORTED_MODULE_237__ = __webpack_require__(39853);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_238__ = __webpack_require__(23821);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_web_structured_clone_js__WEBPACK_IMPORTED_MODULE_239__ = __webpack_require__(72125);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_240__ = __webpack_require__(57307);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_241__ = __webpack_require__(8711);
/* harmony import */ var _home_runner_work_modern_js_modern_js_node_modules_pnpm_core_js_3_26_0_node_modules_core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_242__ = __webpack_require__(73397);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [92986,87991,58193,26447], () => (__webpack_exec__(76645), __webpack_exec__(74224)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);