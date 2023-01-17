"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5920],{44993:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var a=t(52983);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return t?a.createElement(k,i(i({ref:n},p),{},{components:t})):a.createElement(k,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},27889:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=t(18249),r=(t(52983),t(44993));const o={title:"router",sidebar_position:1},i=void 0,l={unversionedId:"apis/app/runtime/router/router",id:"apis/app/runtime/router/router",title:"router",description:"\u57fa\u4e8e react-router \u7684\u8def\u7531\u89e3\u51b3\u65b9\u6848\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/app/runtime/router/router.md",sourceDirName:"apis/app/runtime/router",slug:"/apis/app/runtime/router/",permalink:"/v2/docs/apis/app/runtime/router/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"router",sidebar_position:1},sidebar:"apisAppSidebar",previous:{title:"defineConfig",permalink:"/v2/docs/apis/app/runtime/app/define-config"},next:{title:"model",permalink:"/v2/docs/apis/app/runtime/model/model_"}},s={},u=[{value:"hooks",id:"hooks",level:2},{value:"useNavigate",id:"usenavigate",level:3},{value:"useLocation",id:"uselocation",level:3},{value:"useParams",id:"useparams",level:3},{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",level:2},{value:"Link",id:"link",level:3},{value:"NavLink",id:"navlink",level:3},{value:"Outlet",id:"outlet",level:3},{value:"Route",id:"route",level:3},{value:"\u66f4\u591a API",id:"\u66f4\u591a-api",level:2}],p={toc:u};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u57fa\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://reactrouter.com/"},"react-router")," \u7684\u8def\u7531\u89e3\u51b3\u65b9\u6848\u3002")),(0,r.kt)("h2",{id:"hooks"},"hooks"),(0,r.kt)("h3",{id:"usenavigate"},"useNavigate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"declare function useNavigate(): NavigateFunction;\n\ninterface NavigateFunction {\n  (\n    to: To,\n    options?: {\n      replace?: boolean;\n      state?: any;\n      relative?: RelativeRoutingType;\n    },\n  ): void;\n  (delta: number): void;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useNavigate")," \u8fd4\u56de\u4e00\u4e2a\u53ef\u4ee5\u7528\u4e8e\u6267\u884c\u5bfc\u822a\u64cd\u4f5c\u7684\u51fd\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useNavigate } from '@modern-js/runtime/router';\n\nexport function HomeButton() {\n  let navigate = useNavigate();\n\n  function handleClick() {\n    navigate('/home');\n  }\n\n  return (\n    <button type=\"button\" onClick={handleClick}>\n      Go home\n    </button>\n  );\n}\n")),(0,r.kt)("h3",{id:"uselocation"},"useLocation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"declare function useLocation(): Location;\n\ninterface Location extends Path {\n  state: unknown;\n  key: Key;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useLocation")," \u8fd4\u56de\u5f53\u524d url \u5bf9\u5e94\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://reactrouter.com/web/api/location"},"location")," \u5bf9\u8c61\u3002\u6bcf\u5f53\u8def\u7531\u66f4\u65b0\u7684\u65f6\u5019\uff0c\u90fd\u4f1a\u62ff\u5230\u4e00\u4e2a\u65b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"location")," \u5bf9\u8c61\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { useLocation } from "@modern-js/runtime/router";\n\nfunction usePageViews() {\n  let location = useLocation();\n  React.useEffect(() => {\n    ga.send(["pageview", location.pathname]);\n  }, [location]);\n}\n\nfunction App() {\n  usePageViews();\n  return (\n    //...\n  );\n}\n')),(0,r.kt)("h3",{id:"useparams"},"useParams"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"declare function useParams<K extends string = string>(): Readonly<Params<K>>;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useParams")," \u8fd4\u56de\u4e00\u4e2a key/value \u7684\u952e\u503c\u5bf9\uff0c\u8868\u793a\u5f53\u524d\u5339\u914d\u7684\u8def\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"<Route path>")," \u4e2d\u7684\u53c2\u6570\u4fe1\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Switch, Route, useParams } from \'@modern-js/runtime/router\';\n\nfunction BlogPost() {\n  const { slug } = useParams();\n  return <div>Now showing post {slug}</div>;\n}\n\nfunction App() {\n  return (\n    <Routes>\n      <Route path="/" element={<div>home</div>} />\n      <Route path="/blog/:slug" element={<BlogPost />} />\n    </Routes>\n  );\n}\n')),(0,r.kt)("h2",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),(0,r.kt)("h3",{id:"link"},"Link"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"declare function Link(props: LinkProps): React.ReactElement;\n\ninterface LinkProps\n  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {\n  replace?: boolean;\n  state?: any;\n  to: To;\n  reloadDocument?: boolean;\n}\n\ntype To = string | Partial<Path>;\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," \u7ec4\u4ef6\u8fdb\u884c\u8def\u7531\u8df3\u8f6c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'<Link to="/about">About</Link>\n')),(0,r.kt)("h3",{id:"navlink"},"NavLink"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"declare function NavLink(props: NavLinkProps): React.ReactElement;\n\ninterface NavLinkProps\n  extends Omit<LinkProps, 'className' | 'style' | 'children'> {\n  caseSensitive?: boolean;\n  children?:\n    | React.ReactNode\n    | ((props: { isActive: boolean }) => React.ReactNode);\n  className?: string | ((props: { isActive: boolean }) => string | undefined);\n  end?: boolean;\n  style?:\n    | React.CSSProperties\n    | ((props: { isActive: boolean }) => React.CSSProperties);\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<NavLink>")," \u662f\u4e00\u79cd\u7279\u6b8a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"<Link>"),"\uff0c\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"<NavLink>")," \u5bf9\u5e94\u7684\u94fe\u63a5\u548c\u5f53\u524d URL \u5339\u914d\u65f6\uff0c\u4f1a\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"<NavLink>")," \u6240\u6e32\u67d3\u7684\u5143\u7d20\u6dfb\u52a0\u201c\u6fc0\u6d3b\u201d\u6001\u6837\u5f0f\u3002"),(0,r.kt)("h3",{id:"outlet"},"Outlet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface OutletProps {\n  context?: unknown;\n}\ndeclare function Outlet(props: OutletProps): React.ReactElement | null;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<Outlet>")," \u7528\u4e8e\u5d4c\u5957\u8def\u7531\u573a\u666f\u3002\u5728\u7236\u8def\u7531\u7684\u5143\u7d20\u4e2d\u4f7f\u7528\uff0c\u4ee3\u8868\u5f85\u6e32\u67d3\u7684\u5b50\u8def\u7531\u7684\u5143\u7d20\u5728\u7236\u7ec4\u4ef6\u4e2d\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'function Dashboard() {\n  return (\n    <div>\n      <h1>Dashboard</h1>\n\n      {/* This element will render either <DashboardMessages> when the URL is\n          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"\n      */}\n      <Outlet />\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <Routes>\n      <Route path="/" element={<Dashboard />}>\n        <Route path="messages" element={<DashboardMessages />} />\n        <Route path="tasks" element={<DashboardTasks />} />\n      </Route>\n    </Routes>\n  );\n}\n')),(0,r.kt)("h3",{id:"route"},"Route"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface RouteObject {\n  path?: string;\n  index?: boolean;\n  children?: React.ReactNode;\n  caseSensitive?: boolean;\n  id?: string;\n  loader?: LoaderFunction;\n  action?: ActionFunction;\n  element?: React.ReactNode | null;\n  errorElement?: React.ReactNode | null;\n  handle?: RouteObject['handle'];\n  shouldRevalidate?: ShouldRevalidateFunction;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Route")," \u7528\u4e8e\u5b9a\u4e49\u8def\u7531\u3002\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Route")," \u5bf9\u8c61\uff0c\u5c06 URL \u7247\u6bb5\u548c\u7ec4\u4ef6\u3001\u6570\u636e\u83b7\u53d6\u5173\u8054\u8d77\u6765\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Route")," \u53ef\u4ee5\u4f5c\u4e3a\u666e\u901a\u5bf9\u8c61\uff0c\u4f20\u7ed9\u521b\u5efa router \u7684\u51fd\u6570\u7684\u53c2\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const router = createBrowserRouter([\n  {\n    // it renders this element\n    element: <Team />,\n\n    // when the URL matches this segment\n    path: 'teams/:teamId',\n\n    // with this data loaded before rendering\n    loader: async ({ request, params }) => {\n      return fetch(`/fake/api/teams/${params.teamId}.json`, {\n        signal: request.signal,\n      });\n    },\n\n    // performing this mutation when data is submitted to it\n    action: async ({ request }) => {\n      return updateFakeTeam(await request.formData());\n    },\n\n    // and renders this element in case something went wrong\n    errorElement: <ErrorBoundary />,\n  },\n]);\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Route")," \u8fd8\u53ef\u4ee5\u4f5c\u4e3a\u7ec4\u4ef6\u4f7f\u7528\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"createRoutesFromElements")," \u8f6c\u6362\u540e\uff0c\u518d\u4f20\u7ed9\u521b\u5efa router \u7684\u51fd\u6570\u7684\u53c2\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const router = createBrowserRouter(\n  createRoutesFromElements(\n    <Route\n      element={<Team />}\n      path="teams/:teamId"\n      loader={async ({ params }) => {\n        return fetch(`/fake/api/teams/${params.teamId}.json`);\n      }}\n      action={async ({ request }) => {\n        return updateFakeTeam(await request.formData());\n      }}\n      errorElement={<ErrorBoundary />}\n    />,\n  ),\n);\n')),(0,r.kt)("h2",{id:"\u66f4\u591a-api"},"\u66f4\u591a API"),(0,r.kt)("p",null,"\u82e5\u60f3\u8981\u4e86\u89e3\u5b8c\u6574\u7684\u8def\u7531 API \u4fe1\u606f\uff0c\u53ef\u81f3 ",(0,r.kt)("a",{parentName:"p",href:"https://reactrouter.com/web/guides/start"},"react-router \u5b98\u7f51")," \u67e5\u770b\u3002"))}c.isMDXComponent=!0}}]);