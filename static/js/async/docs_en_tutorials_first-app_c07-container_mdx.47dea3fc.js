(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_tutorials_first-app_c07-container_mdx"],{64576:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return a},title:function(){return r},toc:function(){return c},default:function(){return l}});var s=t("9880"),o=t("23169"),i=t("78955"),a={title:"Add Container"},r="Add Container",c=[{text:"Use the full Model",depth:2,id:"use-the-full-model"},{text:"Withdraw container components",depth:2,id:"withdraw-container-components"}];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",code:"code",h2:"h2",div:"div",pre:"pre",img:"img"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"add-container",children:["Add Container",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-container",children:"#"})]}),"\n","\n",(0,s.jsxs)(n.p,{children:["In the previous chapter, we initially introduced the ",(0,s.jsx)(n.strong,{children:"model"})," to split this part of the logic from the UI component. The ",(0,s.jsx)(n.code,{children:"page.tsx"})," no longer contains UI-independent business logic implementation details, and only needs to use the Model to implement the same function."]}),"\n",(0,s.jsxs)(n.p,{children:["In this chapter, we will further use the business logic of implementation in Model to let ",(0,s.jsx)(n.code,{children:"page.tsx"})," and ",(0,s.jsx)(n.code,{children:"archived/page.tsx"})," get the same data. And implementation Archive button, click the button to display the point of contact archive only in the Archives list, not in the All list."]}),"\n",(0,s.jsxs)(n.h2,{id:"use-the-full-model",children:["Use the full Model",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-the-full-model",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Because the two pages need to share the same set of state (point of contact tabular data, point of contact is archived or not), both need to contain the logic to load the initial data, so we need to complete the data acquisition at a higher level."}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js support obtaining data through Data Loader in ",(0,s.jsx)(n.code,{children:"layout.tsx"}),", we first move the data acquisition part of the code to ",(0,s.jsx)(n.code,{children:"src/routes/layout.tsx"}),":"]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"src/routes/layout.loader.ts"}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="src/routes/layout.loader.ts"',children:"export type LoaderData = {\n  code: number;\n  data: {\n    name: string;\n    avatar: string;\n    email: string;\n  }[];\n};\n\nexport default async (): Promise<LoaderData> => {\n  const data = new Array(20).fill(0).map(() => {\n    const firstName = name.firstName();\n    return {\n      name: firstName,\n      avatar: `https://avatars.dicebear.com/api/identicon/${firstName}.svg`,\n      email: internet.email(),\n    };\n  });\n\n  return {\n    code: 200,\n    data,\n  };\n};\n"})})})]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"src/routes/layout.tsx"}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",meta:'title="src/routes/layout.tsx"',children:"import { name, internet } from 'faker';\nimport {\n  Outlet,\n  useLoaderData,\n  useLocation,\n  useNavigate,\n} from '@modern-js/runtime/router';\nimport { useState } from 'react';\nimport { Radio, RadioChangeEvent } from 'antd';\nimport { useModel } from '@modern-js/runtime/model';\nimport contacts from '../models/contacts';\nimport 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\nimport '../styles/utils.css';\nimport type { LoaderData } from './layout.loader';\n\nexport default function Layout() {\n  const { data } = useLoaderData() as LoaderData;\n  const [{ items }, { setItems }] = useModel(contacts);\n  if (items.length === 0) {\n    setItems(data);\n  }\n\n  const navigate = useNavigate();\n  ...\n}\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.code,{children:"src/routes/page.tsx"}),", use Model directly to get data:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { Helmet } from '@modern-js/runtime/head';\nimport { useModel } from '@modern-js/runtime/model';\nimport { List } from 'antd';\nimport Item from '../components/Item';\nimport contacts from '../models/contacts';\n\nfunction Index() {\n  const [{ items }, { archive }] = useModel(contacts);\n\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>All</title>\n      </Helmet>\n      <List\n        dataSource={items}\n        renderItem={info => (\n          <Item\n            key={info.name}\n            info={info}\n            onArchive={() => {\n              archive(info.email);\n            }}\n          />\n        )}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["Also in ",(0,s.jsx)(n.code,{children:"archived/page.tsx"}),", delete the original ",(0,s.jsx)(n.code,{children:"mockData"})," logic and use the ",(0,s.jsx)(n.code,{children:"archived"})," value computed in Model as the data source:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { Helmet } from '@modern-js/runtime/head';\nimport { useModel } from '@modern-js/runtime/model';\nimport { List } from 'antd';\nimport Item from '../../components/Item';\nimport contacts from '../../models/contacts';\n\nfunction Index() {\n  const [{ archived }, { archive }] = useModel(contacts);\n\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>Archives</title>\n      </Helmet>\n      <List\n        dataSource={archived}\n        renderItem={info => (\n          <Item\n            key={info.name}\n            info={info}\n            onArchive={() => {\n              archive(info.email);\n            }}\n          />\n        )}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["Execute ",(0,s.jsx)(n.code,{children:"pnpm run dev"}),", visit ",(0,s.jsx)(n.code,{children:"http://localhost:8080/"}),", click the Archive button, you can see the button grey out:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c07-contacts-all.png",alt:"display"})}),"\n",(0,s.jsxs)(n.p,{children:["Next, click the top navigation and switch to the Archives list. You can find that the point of contact of ",(0,s.jsx)(n.strong,{children:"Archive"})," just now has appeared in the list:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c07-contacts-archives.png",alt:"display"})}),"\n",(0,s.jsxs)(n.h2,{id:"withdraw-container-components",children:["Withdraw container components",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#withdraw-container-components",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["In the previous chapters, we split the business logic in the project into two layers, one is the ",(0,s.jsx)(n.strong,{children:"view component"}),", and the other is the ",(0,s.jsx)(n.strong,{children:"module"}),". The former is responsible for UI display, interaction, etc., and the latter is responsible for the implementation of UI-independent business logic, which specializes in managing state."]}),"\n",(0,s.jsxs)(n.p,{children:["Like ",(0,s.jsx)(n.code,{children:"src/routes/page.tsx"})," and ",(0,s.jsx)(n.code,{children:"src/routes/archives/page.tsx"})," use the component of the ",(0,s.jsx)(n.code,{children:"useModel"})," API, which is responsible for linking the two layers of View and Model, similar to the role of the Controller in the traditional MVC architecture. In the Modern.js, we follow the habit and call them ",(0,s.jsx)(n.strong,{children:"Container"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The container component is recommended to be placed in a special ",(0,s.jsx)(n.code,{children:"containers/"})," directory. We execute the following command to create a new file:"]}),"\n",(0,s.jsxs)(i.Tabs,{children:[(0,s.jsx)(i.Tab,{value:"macOS",label:"macOS",default:!0,children:(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir -p src/containers\ntouch src/containers/Contacts.tsx\n"})})})})}),(0,s.jsx)(i.Tab,{value:"Windows",label:"Windows",children:(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-powershell",children:"mkdir -p src/containers\nni src/containers/Contacts.tsx\n"})})})})})]}),"\n",(0,s.jsxs)(n.p,{children:["We extracted the common part of the original two ",(0,s.jsx)(n.code,{children:"page.tsx"}),", and the code of ",(0,s.jsx)(n.code,{children:"src/containers/Contacts.tsx"})," is as follows:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { Helmet } from '@modern-js/runtime/head';\nimport { useModel } from '@modern-js/runtime/model';\nimport { List } from 'antd';\nimport Item from '../components/Item';\nimport { Helmet } from '@modern-js/runtime/head';\nimport { useModel } from '@modern-js/runtime/model';\nimport { List } from 'antd';\nimport Item from '../components/Item';\nimport contacts from '../models/contacts';\n\nfunction Contacts({\n  title,\n  source,\n}: {\n  title: string;\n  source: 'items' | 'archived';\n}) {\n  const [state, { archive }] = useModel(contacts);\n\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>{title}</title>\n      </Helmet>\n      <List\n        dataSource={state[source]}\n        renderItem={info => (\n          <Item\n            key={info.name}\n            info={info}\n            onArchive={() => {\n              archive(info.email);\n            }}\n          />\n        )}\n      />\n    </div>\n  );\n}\n\nexport default Contacts;\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["Modify the code for ",(0,s.jsx)(n.code,{children:"src/routes/page.tsx"})," and ",(0,s.jsx)(n.code,{children:"src/routes/archives/page.tsx"}),":"]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"src/routes/page.tsx"}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",meta:'title="src/routes/page.tsx"',children:'import Contacts from \'../containers/Contacts\';\n\nfunction Index() {\n  return <Contacts title="All" source="items" />;\n}\n\nexport default Index;\n'})})})]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"src/routes/archives/page.tsx"}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",meta:'title="src/routes/archives/page.tsx"',children:'import Contacts from \'../../containers/Contacts\';\n\nfunction Index() {\n  return <Contacts title="Archives" source="archived" />;\n}\n\nexport default Index;\n'})})})]}),"\n",(0,s.jsx)(n.p,{children:"The refactoring is complete, and the current project structure is:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:".\n├── README.md\n├── dist\n├── modern.config.ts\n├── node_modules\n├── package.json\n├── pnpm-lock.yaml\n├── src\n│   ├── components\n│   │   ├── Avatar\n│   │   │   └── index.tsx\n│   │   └── Item\n│   │       └── index.tsx\n│   ├── containers\n│   │   └── Contacts.tsx\n│   ├── models\n│   │   └── contacts.ts\n│   ├── modern-app-env.d.ts\n│   ├── routes\n│   │   ├── archives\n│   │   │   └── page.tsx\n│   │   ├── layout.tsx\n│   │   └── page.tsx\n│   └── styles\n│       └── utils.css\n└── tsconfig.json\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"view components"})," in ",(0,s.jsx)(n.code,{children:"components/"})," dir are in the form of directories, such as ",(0,s.jsx)(n.code,{children:"Avatar/index.tsx"}),". And the ",(0,s.jsx)(n.strong,{children:"container components"})," in ",(0,s.jsx)(n.code,{children:"containers/"})," dir are in the form of single files, such as ",(0,s.jsx)(n.code,{children:"contacts.tsx"}),". ",(0,s.jsx)(n.strong,{children:"This is a best practice we recommend"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["As mentioned in the chapter ",(0,s.jsx)(n.a,{href:"/en/tutorials/first-app/c02-component",children:"Add UI component"}),", the view component is in the form of a directory, because the view component is responsible for the implementation of UI display and interaction details, and can evolve in complexity. In the form of a directory, it is convenient to add sub-files, including dedicated resources (pictures, etc.), dedicated sub-components, CSS files, etc. You can reconstruct at will within this directory, considering only the smallest parts."]}),"\n",(0,s.jsx)(n.p,{children:"The container component is only responsible for linkage and is a glue layer. The sophisticated business logic and implementation details are handed over to the View layer and the Model layer for implementation. The container component itself should be kept simple and clear, and should not contain complex implementation details, so there should be no internal structure. The single-file form is not only more concise, but also acts as a constraint, reminding developers not to write complicated container components."})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}}}]);