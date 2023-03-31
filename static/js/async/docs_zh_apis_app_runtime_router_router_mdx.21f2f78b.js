(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_apis_app_runtime_router_router_mdx"],{93220:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var a in n)Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}(n,{frontmatter:function(){return r},title:function(){return c},toc:function(){return o},default:function(){return d}});var s=a("12151"),t=a("21447");let r={title:"router",sidebar_position:1},c="router",o=[{text:"hooks",depth:2,id:"hooks"},{text:"useNavigate",depth:3,id:"usenavigate"},{text:"useLocation",depth:3,id:"uselocation"},{text:"useParams",depth:3,id:"useparams"},{text:"组件",depth:2,id:"组件"},{text:"Link",depth:3,id:"link"},{text:"NavLink",depth:3,id:"navlink"},{text:"Outlet",depth:3,id:"outlet"},{text:"Route",depth:3,id:"route"},{text:"更多 API",depth:2,id:"更多-api"}];function i(e){let n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",h3:"h3",button:"button",pre:"pre",code:"code"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"router",children:["router",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#router",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.p,{className:"modern-directive-title",children:"补充信息"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:["基于 ",(0,s.jsx)(n.a,{href:"https://reactrouter.com/",target:"_blank",rel:"noopener noreferrer",children:"react-router"})," 的路由解决方案。","\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"hooks",children:["hooks",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hooks",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"usenavigate",children:["useNavigate",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usenavigate",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"declare function useNavigate(): NavigateFunction;\n\ninterface NavigateFunction {\n  (\n    to: To,\n    options?: {\n      replace?: boolean;\n      state?: any;\n      relative?: RelativeRoutingType;\n    },\n  ): void;\n  (delta: number): void;\n}\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useNavigate"})," 返回一个可以用于执行导航操作的函数。"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useNavigate } from '@modern-js/runtime/router';\n\nexport function HomeButton() {\n  let navigate = useNavigate();\n\n  function handleClick() {\n    navigate('/home');\n  }\n\n  return (\n    <button type=\"button\" onClick={handleClick}>\n      Go home\n    </button>\n  );\n}\n"})})]})}),"\n",(0,s.jsxs)(n.h3,{id:"uselocation",children:["useLocation",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#uselocation",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"declare function useLocation(): Location;\n\ninterface Location extends Path {\n  state: unknown;\n  key: Key;\n}\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useLocation"})," 返回当前 url 对应的 ",(0,s.jsx)(n.a,{href:"https://reactrouter.com/web/api/location",target:"_blank",rel:"noopener noreferrer",children:"location"})," 对象。每当路由更新的时候，都会拿到一个新的 ",(0,s.jsx)(n.code,{children:"location"})," 对象。"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { useLocation } from "@modern-js/runtime/router";\n\nfunction usePageViews() {\n  let location = useLocation();\n  React.useEffect(() => {\n    ga.send(["pageview", location.pathname]);\n  }, [location]);\n}\n\nfunction App() {\n  usePageViews();\n  return (\n    //...\n  );\n}\n'})})]})}),"\n",(0,s.jsxs)(n.h3,{id:"useparams",children:["useParams",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useparams",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"declare function useParams<K extends string = string>(): Readonly<Params<K>>;\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useParams"})," 返回一个 key/value 的键值对，表示当前匹配的路由 ",(0,s.jsx)(n.code,{children:"<Route path>"})," 中的参数信息。"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",children:'import { Switch, Route, useParams } from \'@modern-js/runtime/router\';\n\nfunction BlogPost() {\n  const { slug } = useParams();\n  return <div>Now showing post {slug}</div>;\n}\n\nfunction App() {\n  return (\n    <Routes>\n      <Route path="/" element={<div>home</div>} />\n      <Route path="/blog/:slug" element={<BlogPost />} />\n    </Routes>\n  );\n}\n'})})]})}),"\n",(0,s.jsxs)(n.h2,{id:"组件",children:["组件",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#组件",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"link",children:["Link",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#link",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"declare function Link(props: LinkProps): React.ReactElement;\n\ninterface LinkProps\n  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {\n  replace?: boolean;\n  state?: any;\n  to: To;\n  reloadDocument?: boolean;\n}\n\ntype To = string | Partial<Path>;\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["可以使用 ",(0,s.jsx)(n.code,{children:"Link"})," 组件进行路由跳转。"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:'<Link to="/about">About</Link>\n'})})]})}),"\n",(0,s.jsxs)(n.h3,{id:"navlink",children:["NavLink",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#navlink",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"declare function NavLink(props: NavLinkProps): React.ReactElement;\n\ninterface NavLinkProps\n  extends Omit<LinkProps, 'className' | 'style' | 'children'> {\n  caseSensitive?: boolean;\n  children?:\n    | React.ReactNode\n    | ((props: { isActive: boolean }) => React.ReactNode);\n  className?: string | ((props: { isActive: boolean }) => string | undefined);\n  end?: boolean;\n  style?:\n    | React.CSSProperties\n    | ((props: { isActive: boolean }) => React.CSSProperties);\n}\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<NavLink>"})," 是一种特殊的 ",(0,s.jsx)(n.code,{children:"<Link>"}),"，当 ",(0,s.jsx)(n.code,{children:"<NavLink>"})," 对应的链接和当前 URL 匹配时，会给 ",(0,s.jsx)(n.code,{children:"<NavLink>"})," 所渲染的元素添加“激活”态样式。"]}),"\n",(0,s.jsxs)(n.h3,{id:"outlet",children:["Outlet",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outlet",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface OutletProps {\n  context?: unknown;\n}\ndeclare function Outlet(props: OutletProps): React.ReactElement | null;\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<Outlet>"})," 用于嵌套路由场景。在父路由的元素中使用，代表待渲染的子路由的元素在父组件中的位置。"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",children:'function Dashboard() {\n  return (\n    <div>\n      <h1>Dashboard</h1>\n\n      {/* This element will render either <DashboardMessages> when the URL is\n          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"\n      */}\n      <Outlet />\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <Routes>\n      <Route path="/" element={<Dashboard />}>\n        <Route path="messages" element={<DashboardMessages />} />\n        <Route path="tasks" element={<DashboardTasks />} />\n      </Route>\n    </Routes>\n  );\n}\n'})})]})}),"\n",(0,s.jsxs)(n.h3,{id:"route",children:["Route",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#route",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface RouteObject {\n  path?: string;\n  index?: boolean;\n  children?: React.ReactNode;\n  caseSensitive?: boolean;\n  id?: string;\n  loader?: LoaderFunction;\n  action?: ActionFunction;\n  element?: React.ReactNode | null;\n  errorElement?: React.ReactNode | null;\n  handle?: RouteObject['handle'];\n  shouldRevalidate?: ShouldRevalidateFunction;\n}\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Route"})," 用于定义路由。一个 ",(0,s.jsx)(n.code,{children:"Route"})," 对象，将 URL 片段和组件、数据获取关联起来。"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Route"})," 可以作为普通对象，传给创建 router 的函数的参数："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"const router = createBrowserRouter([\n  {\n    // it renders this element\n    element: <Team />,\n\n    // when the URL matches this segment\n    path: 'teams/:teamId',\n\n    // with this data loaded before rendering\n    loader: async ({ request, params }) => {\n      return fetch(`/fake/api/teams/${params.teamId}.json`, {\n        signal: request.signal,\n      });\n    },\n\n    // performing this mutation when data is submitted to it\n    action: async ({ request }) => {\n      return updateFakeTeam(await request.formData());\n    },\n\n    // and renders this element in case something went wrong\n    errorElement: <ErrorBoundary />,\n  },\n]);\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Route"})," 还可以作为组件使用，通过 ",(0,s.jsx)(n.code,{children:"createRoutesFromElements"})," 转换后，再传给创建 router 的函数的参数："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:'const router = createBrowserRouter(\n  createRoutesFromElements(\n    <Route\n      element={<Team />}\n      path="teams/:teamId"\n      loader={async ({ params }) => {\n        return fetch(`/fake/api/teams/${params.teamId}.json`);\n      }}\n      action={async ({ request }) => {\n        return updateFakeTeam(await request.formData());\n      }}\n      errorElement={<ErrorBoundary />}\n    />,\n  ),\n);\n'})})]})}),"\n",(0,s.jsxs)(n.h2,{id:"更多-api",children:["更多 API",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#更多-api",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["若想要了解完整的路由 API 信息，可至 ",(0,s.jsx)(n.a,{href:"https://reactrouter.com/web/guides/start",target:"_blank",rel:"noopener noreferrer",children:"react-router 官网"})," 查看。"]})]})}var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}}}]);