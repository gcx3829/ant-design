webpackJsonp([197],{

/***/ 1798:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。"
    ],
    [
      "h2",
      "何时使用"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。"
        ]
      ],
      [
        "li",
        [
          "p",
          "当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。"
        ]
      ]
    ]
  ],
  "meta": {
    "type": "Feedback",
    "category": "Components",
    "subtitle": "抽屉",
    "title": "Drawer",
    "filename": "components/drawer/index.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#何时使用",
          "title": "何时使用"
        },
        "何时使用"
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
            "closable"
          ],
          [
            "td",
            "是否显示右上角的关闭按钮"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "true"
          ]
        ],
        [
          "tr",
          [
            "td",
            "destroyOnClose"
          ],
          [
            "td",
            "关闭时销毁 Drawer 里的子元素"
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
            "getContainer"
          ],
          [
            "td",
            "指定 Drawer 挂载的 HTML 节点"
          ],
          [
            "td",
            "HTMLElement ",
            "|",
            " ",
            [
              "code",
              "() => HTMLElement"
            ],
            " ",
            "|",
            " selectors \b"
          ],
          [
            "td",
            "'body'"
          ]
        ],
        [
          "tr",
          [
            "td",
            "maskClosable"
          ],
          [
            "td",
            "点击蒙层是否允许关闭"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "true"
          ]
        ],
        [
          "tr",
          [
            "td",
            "mask"
          ],
          [
            "td",
            "是否展示遮罩"
          ],
          [
            "td",
            "Boolean"
          ],
          [
            "td",
            "true"
          ]
        ],
        [
          "tr",
          [
            "td",
            "maskStyle"
          ],
          [
            "td",
            "遮罩样式"
          ],
          [
            "td",
            "object"
          ],
          [
            "td",
            "{}"
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
            "可用于设置 Drawer 的样式，调整浮层位置等"
          ],
          [
            "td",
            "object"
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
            "title"
          ],
          [
            "td",
            "标题"
          ],
          [
            "td",
            "string ",
            "|",
            " ReactNode"
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
            "visible"
          ],
          [
            "td",
            "Drawer 是否可见"
          ],
          [
            "td",
            "boolean"
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
            "width"
          ],
          [
            "td",
            "宽度"
          ],
          [
            "td",
            "string ",
            "|",
            " number"
          ],
          [
            "td",
            "256"
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
            "高度, 在 ",
            [
              "code",
              "placement"
            ],
            " 为 ",
            [
              "code",
              "top"
            ],
            " 或 ",
            [
              "code",
              "bottom"
            ],
            " 时使用"
          ],
          [
            "td",
            "string ",
            "|",
            " number"
          ],
          [
            "td",
            "256"
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
            "对话框外层容器的类名"
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
            "zIndex"
          ],
          [
            "td",
            "设置 Drawer 的 ",
            [
              "code",
              "z-index"
            ]
          ],
          [
            "td",
            "Number"
          ],
          [
            "td",
            "1000"
          ]
        ],
        [
          "tr",
          [
            "td",
            "placement"
          ],
          [
            "td",
            "抽屉的方向"
          ],
          [
            "td",
            "'top'  ",
            "|",
            " 'right' ",
            "|",
            " 'bottom' ",
            "|",
            " 'left'"
          ],
          [
            "td",
            "'right'"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onClose"
          ],
          [
            "td",
            "点击遮罩层或右上角叉或取消按钮的回调"
          ],
          [
            "td",
            "function(e)"
          ],
          [
            "td",
            "无"
          ]
        ]
      ]
    ],
    [
      "style",
      "\n#_hj_feedback_container {\n  display: none;\n}\n"
    ]
  ]
};

/***/ })

});