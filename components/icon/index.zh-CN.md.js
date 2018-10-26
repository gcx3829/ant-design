webpackJsonp([189],{

/***/ 1810:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "语义化的矢量图形。"
    ],
    [
      "h2",
      "设计师专属"
    ],
    [
      "p",
      "安装 ",
      [
        "a",
        {
          "title": null,
          "href": "https://kitchen.alipay.com"
        },
        "Kitchen Sketch 插件 💎"
      ],
      "，就可以一键拖拽使用 Ant Design 和 Iconfont 的海量图标，还可以关联自有项目。"
    ],
    [
      "h2",
      "图标列表"
    ],
    [
      "blockquote",
      [
        "p",
        "点击图标即可复制代码。"
      ]
    ],
    [
      "p",
      "新版图标可能略有缺失，我们还在持续补充中。"
    ],
    function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _IconDisplay = __webpack_require__(96);

  var _IconDisplay2 = _interopRequireDefault(_IconDisplay);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  return React.createElement(_IconDisplay2.default, null);
}
  ],
  "meta": {
    "category": "Components",
    "subtitle": "图标",
    "type": "General",
    "title": "Icon",
    "toc": false,
    "filename": "components/icon/index.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#设计师专属",
          "title": "设计师专属"
        },
        "设计师专属"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#图标列表",
          "title": "图标列表"
        },
        "图标列表"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#API",
          "title": "API"
        },
        "API"
      ]
    ]
  ],
  "api": [
    "section",
    [
      "h2",
      "API"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "参数"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "type"
          ],
          [
            "td",
            "图标类型。遵循图标的命名规范"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "style"
          ],
          [
            "td",
            "设置图标的样式，例如 ",
            [
              "code",
              "fontSize"
            ],
            " 和 ",
            [
              "code",
              "color"
            ]
          ],
          [
            "td",
            "CSSProperties"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "theme"
          ],
          [
            "td",
            "图标主题风格。可选实心、描线、双色等主题风格，适用于官方图标"
          ],
          [
            "td",
            "'filled' ",
            "|",
            " 'outlined' ",
            "|",
            " 'twoTone'"
          ],
          [
            "td",
            "'outlined'"
          ]
        ],
        [
          "tr",
          [
            "td",
            "spin"
          ],
          [
            "td",
            "是否有旋转动画"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "false"
          ]
        ],
        [
          "tr",
          [
            "td",
            "component"
          ],
          [
            "td",
            "控制如何渲染图标，通常是一个渲染根标签为 ",
            [
              "code",
              "<svg>"
            ],
            " 的 ",
            [
              "code",
              "React"
            ],
            " 组件，",
            [
              "strong",
              "会使 ",
              [
                "code",
                "type"
              ],
              " 属性失效"
            ]
          ],
          [
            "td",
            "ComponentType<CustomIconComponentProps",
            ">"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "twoToneColor"
          ],
          [
            "td",
            "仅适用双色图标。设置双色图标的主要颜色"
          ],
          [
            "td",
            "string (十六进制颜色)"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ],
    [
      "h3",
      "SVG 图标"
    ],
    [
      "p",
      "在 ",
      [
        "code",
        "3.9.0"
      ],
      " 之后，我们使用了 SVG 图标替换了原先的 font 图标，从而带来了以下优势："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "完全离线化使用，不需要从 CDN 下载字体文件，图标不会因为网络问题呈现方块，也无需字体文件本地部署。"
        ]
      ],
      [
        "li",
        [
          "p",
          "在低端设备上 SVG 有更好的清晰度。"
        ]
      ],
      [
        "li",
        [
          "p",
          "支持多色图标。"
        ]
      ],
      [
        "li",
        [
          "p",
          "对于内建图标的更换可以提供更多 API，而不需要进行样式覆盖。"
        ]
      ]
    ],
    [
      "p",
      "更多讨论可参考：",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/issues/10353"
        },
        "#10353"
      ],
      "。"
    ],
    [
      "blockquote",
      [
        "p",
        "⚠️ 3.9.0 之后我们全量引入了所有图标，导致 antd 默认的包体积有一定增加，我们会在不远的未来增加新的 API 来实现图标的按需使用，更多相关讨论可关注：",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/ant-design/ant-design/issues/12011"
          },
          "#12011"
        ],
        "。"
      ]
    ],
    [
      "p",
      "其中 ",
      [
        "code",
        "theme"
      ],
      ", ",
      [
        "code",
        "component"
      ],
      ", ",
      [
        "code",
        "twoToneColor"
      ],
      " 是 ",
      [
        "code",
        "3.9.x"
      ],
      " 版本新增加的属性。最佳实践是给使用的 ",
      [
        "code",
        "<Icon />"
      ],
      " 组件传入属性 ",
      [
        "code",
        "theme"
      ],
      " 以明确图标的主题风格。例如："
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>star<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>filled<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>"
      },
      [
        "code",
        "<Icon type=\"star\" theme=\"filled\" />"
      ]
    ],
    [
      "p",
      "所有的图标都会以 ",
      [
        "code",
        "<svg>"
      ],
      " 标签渲染，可以使用 ",
      [
        "code",
        "style"
      ],
      " 和 ",
      [
        "code",
        "className"
      ],
      " 设置图标的大小和单色图标的颜色。例如："
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>message<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> fontSize<span class=\"token punctuation\">:</span> <span class=\"token string\">'16px'</span><span class=\"token punctuation\">,</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">'#08c'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>"
      },
      [
        "code",
        "<Icon type=\"message\" style={{ fontSize: '16px', color: '#08c' }} />"
      ]
    ],
    [
      "h3",
      "双色图标主色"
    ],
    [
      "p",
      "对于双色图标，可以通过使用 ",
      [
        "code",
        "Icon.getTwoToneColor()"
      ],
      " 和 ",
      [
        "code",
        "Icon.setTwoToneColor(colorString)"
      ],
      " 来全局设置图标主色。"
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "Icon<span class=\"token punctuation\">.</span><span class=\"token function\">setTwoToneColor</span><span class=\"token punctuation\">(</span><span class=\"token string\">'#eb2f96'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nIcon<span class=\"token punctuation\">.</span><span class=\"token function\">getTwoToneColor</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// #eb2f96</span>"
      },
      [
        "code",
        "Icon.setTwoToneColor('#eb2f96');\nIcon.getTwoToneColor(); // #eb2f96"
      ]
    ],
    [
      "h3",
      "自定义 font 图标"
    ],
    [
      "p",
      "在 ",
      [
        "code",
        "3.9.0"
      ],
      " 之后，我们提供了一个 ",
      [
        "code",
        "createFromIconfontCN"
      ],
      " 方法，方便开发者调用在 ",
      [
        "a",
        {
          "title": null,
          "href": "http://iconfont.cn/"
        },
        "iconfont.cn"
      ],
      " 上自行管理的图标。"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">const</span> MyIcon <span class=\"token operator\">=</span> Icon<span class=\"token punctuation\">.</span><span class=\"token function\">createFromIconfontCN</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  scriptUrl<span class=\"token punctuation\">:</span> <span class=\"token string\">'//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'</span><span class=\"token punctuation\">,</span> <span class=\"token operator\">/</span><span class=\"token operator\">/</span> 在 iconfont<span class=\"token punctuation\">.</span>cn 上生成\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>MyIcon type<span class=\"token operator\">=</span><span class=\"token string\">\"icon-example\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountedNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "const MyIcon = Icon.createFromIconfontCN({\n  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js', // 在 iconfont.cn 上生成\n});\n\nReactDOM.render(<MyIcon type=\"icon-example\" />, mountedNode);"
      ]
    ],
    [
      "p",
      "其本质上是创建了一个使用 ",
      [
        "code",
        "<use>"
      ],
      " 标签来渲染图标的组件。"
    ],
    [
      "p",
      [
        "code",
        "options"
      ],
      " 的配置项如下："
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "参数"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "scriptUrl"
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "http://iconfont.cn/"
              },
              "iconfont.cn"
            ],
            " 项目在线生成的 ",
            [
              "code",
              "js"
            ],
            " 地址"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "extraCommonProps"
          ],
          [
            "td",
            "给所有的 ",
            [
              "code",
              "svg"
            ],
            " 图标 ",
            [
              "code",
              "<Icon />"
            ],
            " 组件设置额外的属性"
          ],
          [
            "td",
            [
              "code",
              "{ [key: string]: any }"
            ]
          ],
          [
            "td",
            "{}"
          ]
        ]
      ]
    ],
    [
      "p",
      "在 ",
      [
        "code",
        "scriptUrl"
      ],
      " 都设置有效的情况下，组件在渲染前会自动引入 ",
      [
        "a",
        {
          "title": null,
          "href": "http://iconfont.cn/"
        },
        "iconfont.cn"
      ],
      " 项目中的图标符号集，无需手动引入。"
    ],
    [
      "p",
      "见 ",
      [
        "a",
        {
          "title": null,
          "href": "http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&helptype=code"
        },
        "iconfont.cn 使用帮助"
      ],
      " 查看如何生成 ",
      [
        "code",
        "js"
      ],
      " 地址。"
    ],
    [
      "h3",
      "自定义 SVG 图标"
    ],
    [
      "p",
      "如果使用 ",
      [
        "code",
        "webpack"
      ],
      "，可以通过配置 ",
      [
        "a",
        {
          "title": null,
          "href": "https://www.npmjs.com/package/@svgr/webpack"
        },
        "@svgr/webpack"
      ],
      " 来将 ",
      [
        "code",
        "svg"
      ],
      " 图标作为 ",
      [
        "code",
        "React"
      ],
      " 组件导入。",
      [
        "code",
        "@svgr/webpack"
      ],
      " 的 ",
      [
        "code",
        "options"
      ],
      " 选项请参阅 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/smooth-code/svgr#options"
        },
        "svgr文档"
      ],
      "。"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// webpack.config.js</span>\n<span class=\"token punctuation\">{</span>\n  test<span class=\"token punctuation\">:</span> <span class=\"token regex\">/\\.svg(\\?v=\\d+\\.\\d+\\.\\d+)?$/</span><span class=\"token punctuation\">,</span>\n  use<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>\n      loader<span class=\"token punctuation\">:</span> <span class=\"token string\">'babel-loader'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>\n      loader<span class=\"token punctuation\">:</span> <span class=\"token string\">'@svgr/webpack'</span><span class=\"token punctuation\">,</span>\n      options<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        babel<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n        icon<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "// webpack.config.js\n{\n  test: /\\.svg(\\?v=\\d+\\.\\d+\\.\\d+)?$/,\n  use: [\n    {\n      loader: 'babel-loader',\n    },\n    {\n      loader: '@svgr/webpack',\n      options: {\n        babel: false,\n        icon: true,\n      },\n    },\n  ],\n}"
      ]
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> MessageSvg <span class=\"token keyword\">from</span> <span class=\"token string\">'path/to/message.svg'</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// path to your '*.svg' file.</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">component</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>MessageSvg<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import { Icon } from 'antd';\nimport MessageSvg from 'path/to/message.svg'; // path to your '*.svg' file.\n\nReactDOM.render(\n  <Icon component={MessageSvg} />,\n  mountNode\n);"
      ]
    ],
    [
      "p",
      [
        "code",
        "Icon"
      ],
      " 中的 ",
      [
        "code",
        "component"
      ],
      " 组件的接受的属性如下："
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "字段"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "只读值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "width"
          ],
          [
            "td",
            [
              "code",
              "svg"
            ],
            " 元素宽度"
          ],
          [
            "td",
            "string ",
            "|",
            " number"
          ],
          [
            "td",
            "'1em'"
          ]
        ],
        [
          "tr",
          [
            "td",
            "height"
          ],
          [
            "td",
            [
              "code",
              "svg"
            ],
            " 元素高度"
          ],
          [
            "td",
            "string ",
            "|",
            " number"
          ],
          [
            "td",
            "'1em'"
          ]
        ],
        [
          "tr",
          [
            "td",
            "fill"
          ],
          [
            "td",
            [
              "code",
              "svg"
            ],
            " 元素填充的颜色"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "'currentColor'"
          ]
        ],
        [
          "tr",
          [
            "td",
            "className"
          ],
          [
            "td",
            "计算后的 ",
            [
              "code",
              "svg"
            ],
            " 类名"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "style"
          ],
          [
            "td",
            "计算后的 ",
            [
              "code",
              "svg"
            ],
            " 元素样式"
          ],
          [
            "td",
            "CSSProperties"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ]
  ]
};

/***/ })

});