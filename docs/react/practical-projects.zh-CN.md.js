webpackJsonp([111],{

/***/ 1920:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "在真实项目开发中，你可能会需要 Redux 或者 MobX 这样的数据流方案，Ant Design React 作为一个 UI 库，可以和任何 React 生态圈内的数据流方案以及应用框架搭配使用。我们基于 Redux 推出了自己的最佳实践 dva，以及可插拔的企业级应用框架 umi，推荐你在项目中使用。"
    ],
    [
      "p",
      [
        "a",
        {
          "title": null,
          "href": "http://dvajs.com/"
        },
        "dva"
      ],
      " 是一个基于 Redux 的 轻量级数据流方案，概念来自 elm，支持 side effects、热替换、动态加载、react-native、SSR 等，已在生产环境广泛应用。"
    ],
    [
      "p",
      [
        "a",
        {
          "title": null,
          "href": "http://umijs.org/"
        },
        "umi"
      ],
      " 则是一个可插拔的企业级 react 应用框架。umi 以路由为基础的，支持",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/zh/guide/router.html"
        },
        "类 next.js 的约定式路由"
      ],
      "，以及各种进阶的路由功能，并以此进行功能扩展，比如",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/zh/plugin/umi-plugin-react.html#dynamicimport"
        },
        "支持路由级的按需加载"
      ],
      "。然后配以完善的",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/zh/plugin/"
        },
        "插件体系"
      ],
      "，覆盖从源码到构建产物的每个生命周期，支持各种功能扩展和业务需求。"
    ],
    [
      "blockquote",
      [
        "p",
        "你可能也会对 ",
        [
          "a",
          {
            "title": null,
            "href": "https://pro.ant.design/"
          },
          "Ant Design Pro"
        ],
        " 感兴趣，这是一个基于 umi、dva 和 ant design 的开箱即用的中台前端/设计解决方案。"
      ]
    ],
    [
      "p",
      "本文会引导你使用 umi、dva 和 antd 从 0 开始创建一个简单应用。"
    ],
    [
      "h2",
      "创建新应用"
    ],
    [
      "p",
      "先创建一个空目录，"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">mkdir</span> myapp\n$ <span class=\"token function\">cd</span> myapp"
      },
      [
        "code",
        "$ mkdir myapp\n$ cd myapp"
      ]
    ],
    [
      "p",
      "推荐使用 yarn 创建应用，执行以下命令，"
    ],
    [
      "blockquote",
      [
        "p",
        "如果你坚持用 npm，可执行 ",
        [
          "code",
          "npm install -g create-umi && create-umi"
        ],
        "，效果一致。"
      ]
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ yarn create umi\n\nyarn create v1.12.0\n<span class=\"token punctuation\">[</span>1/4<span class=\"token punctuation\">]</span> 🔍  Resolving packages<span class=\"token punctuation\">..</span>.\n<span class=\"token punctuation\">[</span>2/4<span class=\"token punctuation\">]</span> 🚚  Fetching packages<span class=\"token punctuation\">..</span>.\n<span class=\"token punctuation\">[</span>3/4<span class=\"token punctuation\">]</span> 🔗  Linking dependencies<span class=\"token punctuation\">..</span>.\n<span class=\"token punctuation\">[</span>4/4<span class=\"token punctuation\">]</span> 📃  Building fresh packages<span class=\"token punctuation\">..</span>.\n\nsuccess Installed <span class=\"token string\">\"create-umi@0.3.1\"</span> with binaries:\n      - create-umi\n\n? What functionality <span class=\"token keyword\">do</span> you want to enable? <span class=\"token punctuation\">(</span>Press <span class=\"token operator\">&lt;</span>space<span class=\"token operator\">></span> to select, <span class=\"token operator\">&lt;</span>a<span class=\"token operator\">></span> to toggle all, <span class=\"token operator\">&lt;</span>i\n<span class=\"token operator\">></span> to invert selection<span class=\"token punctuation\">)</span>\n❯◯ antd\n ◯ dva\n ◯ code splitting\n ◯ pwa\n ◯ dll\n ◯ hard <span class=\"token function\">source</span>"
      },
      [
        "code",
        "$ yarn create umi\n\nyarn create v1.12.0\n[1/4] 🔍  Resolving packages...\n[2/4] 🚚  Fetching packages...\n[3/4] 🔗  Linking dependencies...\n[4/4] 📃  Building fresh packages...\n\nsuccess Installed \"create-umi@0.3.1\" with binaries:\n      - create-umi\n\n? What functionality do you want to enable? (Press <space> to select, <a> to toggle all, <i\n> to invert selection)\n❯◯ antd\n ◯ dva\n ◯ code splitting\n ◯ pwa\n ◯ dll\n ◯ hard source"
      ]
    ],
    [
      "p",
      "yarn 会先安装最新版的 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/umijs/create-umi"
        },
        "create-umi"
      ],
      "，然后提供交互式的提示来创建应用。"
    ],
    [
      "p",
      "选上 ",
      [
        "code",
        "antd"
      ],
      " 和 ",
      [
        "code",
        "dva"
      ],
      "，然后回车确认。"
    ],
    [
      "pre",
      {
        "lang": null,
        "highlighted": "   create package<span class=\"token punctuation\">.</span>json\n   create mock<span class=\"token operator\">/</span><span class=\"token punctuation\">.</span>gitkeep\n   create src<span class=\"token operator\">/</span>assets<span class=\"token operator\">/</span>yay<span class=\"token punctuation\">.</span>jpg\n   create src<span class=\"token operator\">/</span>layouts<span class=\"token operator\">/</span>index<span class=\"token punctuation\">.</span>css\n   create src<span class=\"token operator\">/</span>layouts<span class=\"token operator\">/</span>index<span class=\"token punctuation\">.</span>js\n   create src<span class=\"token operator\">/</span>pages<span class=\"token operator\">/</span>index<span class=\"token punctuation\">.</span>css\n   create src<span class=\"token operator\">/</span>pages<span class=\"token operator\">/</span>index<span class=\"token punctuation\">.</span>js\n   create src<span class=\"token operator\">/</span><span class=\"token keyword\">global</span><span class=\"token punctuation\">.</span>css\n   create <span class=\"token punctuation\">.</span>gitignore\n   create <span class=\"token punctuation\">.</span>editorconfig\n   create <span class=\"token punctuation\">.</span>env\n   create <span class=\"token punctuation\">.</span>umirc<span class=\"token punctuation\">.</span>js\n   create <span class=\"token punctuation\">.</span>eslintrc\n   create <span class=\"token punctuation\">.</span>prettierrc\n   create <span class=\"token punctuation\">.</span>prettierignore\n   create src<span class=\"token operator\">/</span>models<span class=\"token operator\">/</span><span class=\"token punctuation\">.</span>gitkeep\n   create src<span class=\"token operator\">/</span>dva<span class=\"token punctuation\">.</span>js\n✨  File Generate Done\n✨  Done <span class=\"token keyword\">in</span> <span class=\"token number\">966</span><span class=\"token punctuation\">.</span>73s<span class=\"token punctuation\">.</span>"
      },
      [
        "code",
        "   create package.json\n   create mock/.gitkeep\n   create src/assets/yay.jpg\n   create src/layouts/index.css\n   create src/layouts/index.js\n   create src/pages/index.css\n   create src/pages/index.js\n   create src/global.css\n   create .gitignore\n   create .editorconfig\n   create .env\n   create .umirc.js\n   create .eslintrc\n   create .prettierrc\n   create .prettierignore\n   create src/models/.gitkeep\n   create src/dva.js\n✨  File Generate Done\n✨  Done in 966.73s."
      ]
    ],
    [
      "p",
      "然后安装依赖，"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ yarn"
      },
      [
        "code",
        "$ yarn"
      ]
    ],
    [
      "p",
      "然后启动应用，"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ yarn start"
      },
      [
        "code",
        "$ yarn start"
      ]
    ],
    [
      "p",
      "几秒钟后，你会看到以下输出，"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": " DONE  Compiled successfully <span class=\"token keyword\">in</span> 212ms\n\n  App running at:\n  - Local:   http://localhost:8000/\n  - Network: http://<span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> YourIP <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span>:8000/"
      },
      [
        "code",
        " DONE  Compiled successfully in 212ms\n\n  App running at:\n  - Local:   http://localhost:8000/\n  - Network: http://{{ YourIP }}:8000/"
      ]
    ],
    [
      "p",
      "在浏览器里打开 ",
      [
        "a",
        {
          "title": null,
          "href": "http://localhost:8000"
        },
        "http://localhost:8000"
      ],
      "，你会看到 umi 的欢迎界面。"
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://gw.alipayobjects.com/zos/rmsportal/lewbQdlEHzuNDpaxykUP.png",
          "width": "718"
        }
      ]
    ],
    [
      "h2",
      "使用 antd"
    ],
    [
      "p",
      "前面选择 antd 之后，会自动处理 antd 的依赖以及按需加载。你可以检查 ",
      [
        "code",
        ".umirc.js"
      ],
      " 里的配置，确保 antd 已开启。"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// ref: https://umijs.org/config/</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  plugins<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token comment\" spellcheck=\"true\">// ref: https://umijs.org/plugin/umi-plugin-react.html</span>\n    <span class=\"token punctuation\">[</span><span class=\"token string\">'umi-plugin-react'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      antd<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n      dva<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "// ref: https://umijs.org/config/\nexport default {\n  plugins: [\n    // ref: https://umijs.org/plugin/umi-plugin-react.html\n    ['umi-plugin-react', {\n      antd: true,\n      dva: true,\n    }],\n  ],\n}"
      ]
    ],
    [
      "blockquote",
      [
        "p",
        "而如果要使用固定版本的 antd，你可以在项目里安装额外的 antd 依赖，package.json 里声明的 antd 依赖会被优先使用。"
      ]
    ],
    [
      "h2",
      "新建路由"
    ],
    [
      "p",
      "我们要写个应用来先显示产品列表。首先第一步是创建路由，路由可以想象成是组成应用的不同页面。"
    ],
    [
      "p",
      "如果你没有 npx，需要先安装他，用于执行 node_modules 下的命令，"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ yarn global add npx"
      },
      [
        "code",
        "$ yarn global add npx"
      ]
    ],
    [
      "p",
      "然后通过命令创建 ",
      [
        "code",
        "/products"
      ],
      " 路由，"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ npx umi g page products\n\n   create src/pages/products.js\n   create src/pages/products.css\n✔  success"
      },
      [
        "code",
        "$ npx umi g page products\n\n   create src/pages/products.js\n   create src/pages/products.css\n✔  success"
      ]
    ],
    [
      "p",
      "然后在浏览器里打开 ",
      [
        "a",
        {
          "title": null,
          "href": "http://localhost:8000/products"
        },
        "http://localhost:8000/products"
      ],
      "，你应该能看到对应的页面。"
    ],
    [
      "h2",
      "编写 UI Component"
    ],
    [
      "p",
      "随着应用的发展，你会需要在多个页面分享 UI 元素 (或在一个页面使用多次)，在 umi 里你可以把这部分抽成 component 。"
    ],
    [
      "p",
      "我们来编写一个 ",
      [
        "code",
        "ProductList"
      ],
      " component，这样就能在不同的地方显示产品列表了。"
    ],
    [
      "p",
      "新建 ",
      [
        "code",
        "src/components/ProductList.js"
      ],
      " 文件："
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table<span class=\"token punctuation\">,</span> Popconfirm<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> ProductList <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> onDelete<span class=\"token punctuation\">,</span> products <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n    dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Actions'</span><span class=\"token punctuation\">,</span>\n    render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n        <span class=\"token operator\">&lt;</span>Popconfirm title<span class=\"token operator\">=</span><span class=\"token string\">\"Delete?\"</span> onConfirm<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">onDelete</span><span class=\"token punctuation\">(</span>record<span class=\"token punctuation\">.</span>id<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>Delete<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popconfirm<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token operator\">&lt;</span>Table\n      dataSource<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>products<span class=\"token punctuation\">}</span>\n      columns<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> ProductList<span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import { Table, Popconfirm, Button } from 'antd';\n\nconst ProductList = ({ onDelete, products }) => {\n  const columns = [{\n    title: 'Name',\n    dataIndex: 'name',\n  }, {\n    title: 'Actions',\n    render: (text, record) => {\n      return (\n        <Popconfirm title=\"Delete?\" onConfirm={() => onDelete(record.id)}>\n    <Button>Delete</Button>\n      </Popconfirm>\n    );\n    },\n  }];\n  return (\n    <Table\n      dataSource={products}\n      columns={columns}\n    />\n  );\n};\n\nexport default ProductList;"
      ]
    ],
    [
      "h2",
      "定义 dva Model"
    ],
    [
      "p",
      "完成 UI 后，现在开始处理数据和逻辑。"
    ],
    [
      "p",
      "dva 通过 ",
      [
        "code",
        "model"
      ],
      " 的概念把一个领域的模型管理起来，包含同步更新 state 的 reducers，处理异步逻辑的 effects，订阅数据源的 subscriptions 。"
    ],
    [
      "p",
      "新建 model ",
      [
        "code",
        "src/models/products.js"
      ],
      "，"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  namespace<span class=\"token punctuation\">:</span> <span class=\"token string\">'products'</span><span class=\"token punctuation\">,</span>\n  state<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  reducers<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token string\">'delete'</span><span class=\"token punctuation\">(</span>state<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> payload<span class=\"token punctuation\">:</span> id <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span> state<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> item<span class=\"token punctuation\">.</span>id <span class=\"token operator\">!==</span> id<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "export default {\n  namespace: 'products',\n  state: [],\n  reducers: {\n    'delete'(state, { payload: id }) {\n      return state.filter(item => item.id !== id);\n    },\n  },\n};"
      ]
    ],
    [
      "p",
      "这个 model 里："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "code",
            "namespace"
          ],
          " 表示在全局 state 上的 key"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "state"
          ],
          " 是初始值，在这里是空数组"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "reducers"
          ],
          " 等同于 redux 里的 reducer，接收 action，同步更新 state"
        ]
      ]
    ],
    [
      "p",
      "umi 里约定 ",
      [
        "code",
        "src/models"
      ],
      " 下的 model 会被自动注入，你无需手动注入。"
    ],
    [
      "h2",
      "connect 起来"
    ],
    [
      "p",
      "到这里，我们已经单独完成了 model 和 component，那么他们如何串联起来呢?"
    ],
    [
      "p",
      "dva 提供了 ",
      [
        "code",
        "connect"
      ],
      " 方法。如果你熟悉 redux，这个 connect 来自 react-redux。"
    ],
    [
      "p",
      "编辑 ",
      [
        "code",
        "src/pages/products.js"
      ],
      "，替换为以下内容："
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> connect <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'dva'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> ProductList <span class=\"token keyword\">from</span> <span class=\"token string\">'../components/ProductList'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> Products <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> dispatch<span class=\"token punctuation\">,</span> products <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">function</span> <span class=\"token function\">handleDelete</span><span class=\"token punctuation\">(</span>id<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">dispatch</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      type<span class=\"token punctuation\">:</span> <span class=\"token string\">'products/delete'</span><span class=\"token punctuation\">,</span>\n      payload<span class=\"token punctuation\">:</span> id<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>h2<span class=\"token operator\">></span>List <span class=\"token keyword\">of</span> Products<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h2<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>ProductList onDelete<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>handleDelete<span class=\"token punctuation\">}</span> products<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>products<span class=\"token punctuation\">}</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token function\">connect</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> products <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  products<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>Products<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import { connect } from 'dva';\nimport ProductList from '../components/ProductList';\n\nconst Products = ({ dispatch, products }) => {\n  function handleDelete(id) {\n    dispatch({\n      type: 'products/delete',\n      payload: id,\n    });\n  }\n  return (\n    <div>\n      <h2>List of Products</h2>\n      <ProductList onDelete={handleDelete} products={products} />\n    </div>\n  );\n};\n\nexport default connect(({ products }) => ({\n  products,\n}))(Products);"
      ]
    ],
    [
      "p",
      "最后，我们还需要一些初始数据让这个应用 run 起来。编辑 ",
      [
        "code",
        "src/app.js"
      ],
      "："
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">export</span> <span class=\"token keyword\">const</span> dva <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  config<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">onError</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      err<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">.</span>message<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    initialState<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n      products<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'dva'</span><span class=\"token punctuation\">,</span> id<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">,</span> id<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "export const dva = {\n  config: {\n    onError(err) {\n      err.preventDefault();\n      console.error(err.message);\n    },\n    initialState: {\n      products: [\n        { name: 'dva', id: 1 },\n        { name: 'antd', id: 2 },\n      ],\n    },\n  },\n};"
      ]
    ],
    [
      "p",
      "刷新浏览器，应该能看到以下效果："
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://zos.alipayobjects.com/rmsportal/GQJeDDeUCSTRMMg.gif"
        }
      ]
    ],
    [
      "h2",
      "构建应用"
    ],
    [
      "p",
      "完成开发并且在开发环境验证之后，就需要部署给我们的用户了。先执行下面的命令，"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">npm</span> run build"
      },
      [
        "code",
        "$ npm run build"
      ]
    ],
    [
      "p",
      "几秒后，输出应该如下："
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "<span class=\"token operator\">></span> @ build /private/tmp/sorrycc-V0lLrF\n<span class=\"token operator\">></span> umi build\n\n<span class=\"token punctuation\">[</span>5:01:58 PM<span class=\"token punctuation\">]</span> webpack compiled <span class=\"token keyword\">in</span> 11s 615ms\n\n\n DONE  Compiled successfully <span class=\"token keyword\">in</span> 11622ms                                           5:01:58 PM\n\nFile sizes after gzip:\n\n  340.44 KB  dist/umi.js\n  17.82 KB   dist/umi.css"
      },
      [
        "code",
        "> @ build /private/tmp/sorrycc-V0lLrF\n> umi build\n\n[5:01:58 PM] webpack compiled in 11s 615ms\n\n\n DONE  Compiled successfully in 11622ms                                           5:01:58 PM\n\nFile sizes after gzip:\n\n  340.44 KB  dist/umi.js\n  17.82 KB   dist/umi.css"
      ]
    ],
    [
      "p",
      "build 命令会打包所有的资源，包含 JavaScript, CSS, web fonts, images, html 等。你可以在 ",
      [
        "code",
        "dist/"
      ],
      " 目录下找到这些文件。"
    ],
    [
      "h2",
      "下一步"
    ],
    [
      "p",
      "我们已经完成了一个简单应用，你可能还有很多疑问，比如："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "如何统一处理出错？"
        ]
      ],
      [
        "li",
        [
          "p",
          "如何处理更多路由，比如动态路由，嵌套路由，权限路由等？"
        ]
      ],
      [
        "li",
        [
          "p",
          "如何 mock 数据？"
        ]
      ],
      [
        "li",
        [
          "p",
          "如何部署？"
        ]
      ],
      [
        "li",
        [
          "p",
          "等等"
        ]
      ]
    ],
    [
      "p",
      "你可以："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "访问 ",
          [
            "a",
            {
              "title": null,
              "href": "https://umijs.org/"
            },
            "umi 官网"
          ],
          "和 ",
          [
            "a",
            {
              "title": null,
              "href": "https://dvajs.com/"
            },
            "dva 官网"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "理解 ",
          [
            "a",
            {
              "title": null,
              "href": "https://umijs.org/zh/guide/router.html"
            },
            "umi 的路由"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "理解 ",
          [
            "a",
            {
              "title": null,
              "href": "https://umijs.org/zh/guide/deploy.html"
            },
            "如何部署 umi 应用"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "查看 ",
          [
            "a",
            {
              "title": null,
              "href": "https://dvajs.com/knowledgemap/"
            },
            "dva 知识地图"
          ],
          "，包含 ES6, React, dva 等所有基础知识"
        ]
      ],
      [
        "li",
        [
          "p",
          "理解 ",
          [
            "a",
            {
              "title": null,
              "href": "https://dvajs.com/guide/concepts.html"
            },
            "dva 的 8 个概念"
          ],
          "，以及他们是如何串起来的"
        ]
      ]
    ]
  ],
  "meta": {
    "order": 3,
    "title": "项目实战",
    "filename": "docs/react/practical-projects.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#创建新应用",
          "title": "创建新应用"
        },
        "创建新应用"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#使用-antd",
          "title": "使用 antd"
        },
        "使用 antd"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#新建路由",
          "title": "新建路由"
        },
        "新建路由"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#编写-UI-Component",
          "title": "编写 UI Component"
        },
        "编写 UI Component"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#定义-dva-Model",
          "title": "定义 dva Model"
        },
        "定义 dva Model"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#connect-起来",
          "title": "connect 起来"
        },
        "connect 起来"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#构建应用",
          "title": "构建应用"
        },
        "构建应用"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#下一步",
          "title": "下一步"
        },
        "下一步"
      ]
    ]
  ]
};

/***/ })

});