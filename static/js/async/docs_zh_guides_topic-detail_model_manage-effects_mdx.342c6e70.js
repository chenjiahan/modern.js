(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_model_manage-effects_mdx"],{3160:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return l},title:function(){return i},toc:function(){return t},default:function(){return r}});var d=s("9880"),c=s("23169"),l={sidebar_position:5,title:"副作用管理"},i="副作用管理",t=[{text:"副作用对 State 修改",depth:2,id:"副作用对-state-修改"},{text:"副作用不影响 state",depth:2,id:"副作用不影响-state"},{text:"副作用函数返回值",depth:2,id:"副作用函数返回值"}];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",div:"div",pre:"pre",ul:"ul",li:"li"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"副作用管理",children:["副作用管理",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#副作用管理",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Model 中的 Action 必须是一个纯函数，执行过程中不会产生任何副作用。但在真实的业务中，我们会遇到很多副作用场景，如：请求 HTTP 接口获取状态数据，或者在更新状态的同时修改 localStorage、发送事件等。在 Reduck 中，是通过 Model 的 Effects 函数管理副作用的。"}),"\n",(0,d.jsxs)(n.h2,{id:"副作用对-state-修改",children:["副作用对 State 修改",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#副作用对-state-修改",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"副作用修改 State，最常见的场景就是请求 HTTP 接口，更新状态数据。"}),"\n",(0,d.jsxs)(n.p,{children:["我们以一个简单的 ",(0,d.jsx)(n.code,{children:"todoModel"})," 为例。其有一个 ",(0,d.jsx)(n.code,{children:"load"})," 的副作用函数，请求远端的 TODO 列表，请求成功之后更新 ",(0,d.jsx)(n.code,{children:"state.items"})," 字段。"]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"const todoModel = model('todo').define({\n  state: {\n    items: [],\n    loading: false,\n    error: null,\n  },\n  actions: {\n    load: {\n      pending(state) {\n        state.loading = true;\n      },\n      fulfilled(state, items) {\n        state.items = items;\n        state.loading = false;\n      },\n      rejected(state, error) {\n        state.error = error;\n        state.loading = false;\n      },\n    },\n  },\n  effects: {\n    // Promise 副作用\n    async load() {\n      return new Promise(resolve => {\n        setTimeout(() => resolve(['Learn Modern.js']), 2000);\n      });\n    },\n  },\n});\n"})})})}),"\n",(0,d.jsxs)(n.p,{children:["副作用函数统一定义在 ",(0,d.jsx)(n.code,{children:"effects"})," 字段下。这里我们写了一个 ",(0,d.jsx)(n.code,{children:"load"})," 函数，它返回一个 Promise，Promise 执行成功后，返回 TODO 列表 ",(0,d.jsx)(n.code,{children:'["Lerna Modern.js"]'}),"。"]}),"\n",(0,d.jsxs)(n.p,{children:["副作用函数需要和 actions 配合使用，才能完成状态的修改。因此，我们在 ",(0,d.jsx)(n.code,{children:"actions"})," 中定义了一个 ",(0,d.jsx)(n.code,{children:"load"}),"（命名需要和 ",(0,d.jsx)(n.code,{children:"effects"})," 下的副作用函数的名字保持一致）对象，包含 ",(0,d.jsx)(n.code,{children:"pending"}),"、",(0,d.jsx)(n.code,{children:"fulfilled"}),"、",(0,d.jsx)(n.code,{children:"rejected"})," 3 个 action，分别是对副作用函数 ",(0,d.jsx)(n.code,{children:"load"})," 返回的 ",(0,d.jsx)(n.code,{children:"Promise"})," 的三种状态（ pending、fulfilled、rejected ）的处理："]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"pending"}),"：接收当前状态 ",(0,d.jsx)(n.code,{children:"state"})," 作为参数，新的状态中 ",(0,d.jsx)(n.code,{children:"loading"})," 设为 ",(0,d.jsx)(n.code,{children:"true"}),"。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"fulfilled"}),"：接收当前状态 ",(0,d.jsx)(n.code,{children:"state"})," 和 Promise fulfilled 状态的值 ",(0,d.jsx)(n.code,{children:"items"})," 为参数，新的状态中 ",(0,d.jsx)(n.code,{children:"items"})," 等于参数 ",(0,d.jsx)(n.code,{children:"items"}),"、",(0,d.jsx)(n.code,{children:"loading"})," 设为 ",(0,d.jsx)(n.code,{children:"false"}),"。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"rejected"}),"：接收当前状态 ",(0,d.jsx)(n.code,{children:"state"})," 和 Promise rejected 状态的错误 ",(0,d.jsx)(n.code,{children:"error"})," 为参数，新的状态中 ",(0,d.jsx)(n.code,{children:"error"})," 等于参数 ",(0,d.jsx)(n.code,{children:"error"}),"、",(0,d.jsx)(n.code,{children:"loading"})," 设为 ",(0,d.jsx)(n.code,{children:"false"}),"。"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"组件中如何调用 effects 函数呢？ effects 函数会被合并到 actions 对象上，因此可以通过 actions 对象调用 effects 函数，如下所示："}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"function Todo() {\n  const [state, actions] = useModel(todoModel);\n\n  useEffect(() => {\n    // 调用 effects 函数\n    actions.load();\n  }, []);\n\n  if (state.loading) {\n    return <div>loading....</div>;\n  }\n\n  return (\n    <div>\n      <div>\n        {state.items.map((item, index) => (\n          <div key={index}>{item}</div>\n        ))}\n      </div>\n    </div>\n  );\n}\n"})})})}),"\n",(0,d.jsxs)(n.p,{children:["上面的示例中， ",(0,d.jsx)(n.code,{children:"pending"}),"、",(0,d.jsx)(n.code,{children:"fulfilled"}),"、",(0,d.jsx)(n.code,{children:"rejected"})," 3 个 action，对于用于获取数据的 HTTP 请求场景下，一般都是需要的。Reduck 提供了一个工具函数 ",(0,d.jsx)(n.code,{children:"handleEffect"}),"，用于简化这种场景下的 action 创建。"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"handleEffect"})," 约定这种副作用场景下， Model 的 State 结构包含 ",(0,d.jsx)(n.code,{children:"result"}),"、",(0,d.jsx)(n.code,{children:"error"}),"、",(0,d.jsx)(n.code,{children:"pending"})," 3 个字段，初始值为："]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"{\n  result: null,\n  error: null,\n  pending: false，\n}\n"})})})}),"\n",(0,d.jsxs)(n.p,{children:["调用 ",(0,d.jsx)(n.code,{children:"handleEffect"})," 会返回如下数据结构:"]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"{\n  pending() { // ... },\n  fulfilled() { // ... },\n  rejected() { // ... }\n}\n"})})})}),"\n",(0,d.jsxs)(n.p,{children:["这个数据结构和我们在 ",(0,d.jsx)(n.code,{children:"actions"})," 下的 ",(0,d.jsx)(n.code,{children:"load"})," 对象的数据结构是相同的。",(0,d.jsx)(n.code,{children:"handleEffect"})," 返回的对象，其实就是对应了 Effects 函数需要的 3 个 action。"]}),"\n",(0,d.jsxs)(n.p,{children:["利用 ",(0,d.jsx)(n.code,{children:"handleEffect"}),"，改写 ",(0,d.jsx)(n.code,{children:"todoModel"}),"："]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"const todoModel = model('todo').define({\n  state: {\n    items: [],\n    loading: false,\n    error: null,\n  },\n  actions: {\n    load: handleEffect({ result: 'items' }),\n  },\n  effects: {\n    // Promise 副作用\n    async load() {\n      return new Promise(resolve => {\n        setTimeout(() => resolve(['Learn Modern.js']), 2000);\n      });\n    },\n  },\n});\n"})})})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"handleEffect"})," 接收的参数对象，将 ",(0,d.jsx)(n.code,{children:"result"})," 设置为 ",(0,d.jsx)(n.code,{children:"item"}),"。因为 ",(0,d.jsx)(n.code,{children:"todoModel"})," 的 state，使用 ",(0,d.jsx)(n.code,{children:"items"})," 作为 key 保存 todo 列表数据，而不是使用 ",(0,d.jsx)(n.code,{children:"handleEffect"})," 默认的 ",(0,d.jsx)(n.code,{children:"result"})," 作为 key，所以这里需要进行配置。"]}),"\n",(0,d.jsxs)(n.p,{children:["明显可见，通过 ",(0,d.jsx)(n.code,{children:"handleEffect"})," 实现的 ",(0,d.jsx)(n.code,{children:"todoModel"})," 比之前的实现有了很大精简。"]}),"\n",(0,d.jsxs)(n.p,{children:["如果不希望 pending、fulfilled、rejected 3 种状态都被 ",(0,d.jsx)(n.code,{children:"handleEffect"})," 自动处理，例如 fulfilled 需要手动处理较复杂的数据类型，但是 pending、rejected 依旧想进行自动化处理，可以参考如下写法："]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"  actions: {\n    load: {\n      ...handleEffect(),\n      fulfilled(state, payload) {\n        // 手动处理\n      },\n    },\n  },\n"})})})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"补充信息"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"handleEffect"})," ",(0,d.jsx)(n.a,{href:"/apis/app/runtime/model/handle-effect",children:"API"}),"。"]}),"\n"]})]}),"\n",(0,d.jsx)(n.p,{children:"Effects 函数中，也支持手动调用 Actions，例如："}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"const todoModel = model('todo').define((context, utils) => ({\n  state: {\n    items: [],\n    loading: false,\n    error: null,\n  },\n  actions: {\n    pending(state) {\n      state.loading = true;\n    },\n    fulfilled(state, items) {\n      state.items = items;\n      state.loading = false;\n    },\n  },\n  effects: {\n    async load() {\n      // 通过 utils.use 获取当前 Model 对象的 actions\n      const [, actions] = utils.use(todoModel);\n      // 手动调用 action\n      actions.pending();\n\n      return new Promise(resolve => {\n        setTimeout(() => {\n          const items = ['Learn Modern.js'];\n          // 手动调用 action\n          actions.fulfilled(items);\n          resolve(items);\n        }, 2000);\n      });\n    },\n  },\n}));\n"})})})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:["可以使用 ",(0,d.jsx)(n.code,{children:"use"})," 函数加载其它 Model（包括 Model 自身），实现 ",(0,d.jsx)(n.a,{href:"/guides/topic-detail/model/model-communicate",children:"Model 间通信"}),"。"]}),"\n"]})]}),"\n",(0,d.jsxs)(n.h2,{id:"副作用不影响-state",children:["副作用不影响 state",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#副作用不影响-state",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"有些场景下，我们只需要读取 State，执行相关副作用逻辑，副作用不会修改 State。"}),"\n",(0,d.jsxs)(n.p,{children:["例如，存储某些 State 到 ",(0,d.jsx)(n.code,{children:"localStorage"}),"："]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"const fooModel = model('foo').define((context, utils) => ({\n  state: {\n    value: 'foo',\n  },\n  effects: {\n    setLocalStorage(key) {\n      const [state] = utils.use(fooModel);\n      localStorage.set(key, state.value);\n      return 'success';\n    },\n  },\n}));\n"})})})}),"\n",(0,d.jsx)(n.p,{children:"或者是向服务端发送数据："}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"const fooModel = model('foo').define({\n  state: {\n    value: 'foo',\n  },\n  effects: {\n    async sendData(data) {\n      const res = await fetch('url', {\n        method: 'POST',\n        body: data,\n      });\n      return res.json();\n    },\n  },\n});\n"})})})}),"\n",(0,d.jsxs)(n.h2,{id:"副作用函数返回值",children:["副作用函数返回值",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#副作用函数返回值",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"有时候，我们希望能根据副作用函数的执行结果，直接执行后续逻辑。这时候，就需要使用 Effects 函数的返回。"}),"\n",(0,d.jsx)(n.p,{children:"例如，当点击发送按钮，发送数据成功后，立即关闭当前的弹窗；如果失败，显示错误信息。我们可以通过如下代码实现："}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"// 代码仅做示意，不能执行\n// 组件内部 发送按钮 的响应函数\nconst handleClick = async () => {\n  // sendData 返回代表状态的字符串\n  const result = await actions.sendData('some data');\n  if (result === 'success') {\n    // 关闭弹窗\n    closeModal();\n  } else {\n    // 显示错误\n    showError(result);\n  }\n};\n"})})})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"补充信息"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern-js-examples/tree/main/series/tutorials/runtime-api/model/effects",target:"_blank",rel:"noopener noreferrer",children:"示例代码"})}),"\n"]})]})]})}var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(a,e)})):a(e)}}}]);