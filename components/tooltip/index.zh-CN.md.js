webpackJsonp([133],{

/***/ 1894:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "简单的文字提示气泡框。"
    ],
    [
      "h2",
      "何时使用"
    ],
    [
      "p",
      "鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。"
    ],
    [
      "p",
      "可用来代替系统默认的 ",
      [
        "code",
        "title"
      ],
      " 提示，提供一个",
      [
        "code",
        "按钮/文字/操作"
      ],
      "的文案解释。"
    ]
  ],
  "meta": {
    "category": "Components",
    "subtitle": "文字提示",
    "type": "Data Display",
    "title": "Tooltip",
    "filename": "components/tooltip/index.zh-CN.md"
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
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#注意",
          "title": "注意"
        },
        "注意"
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
            "title"
          ],
          [
            "td",
            "提示文字"
          ],
          [
            "td",
            "string",
            "|",
            "ReactNode",
            "|",
            "() => ReactNode"
          ],
          [
            "td",
            "无"
          ]
        ]
      ]
    ],
    [
      "h3",
      "共同的 API"
    ],
    [
      "p",
      "以下 API 为 Tooltip、Popconfirm、Popover 共享的 API。"
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
            "arrowPointAtCenter"
          ],
          [
            "td",
            "箭头是否指向目标元素中心，",
            [
              "code",
              "antd@1.11+"
            ],
            " 支持"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            [
              "code",
              "false"
            ]
          ]
        ],
        [
          "tr",
          [
            "td",
            "autoAdjustOverflow"
          ],
          [
            "td",
            "气泡被遮挡时自动调整位置"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            [
              "code",
              "true"
            ]
          ]
        ],
        [
          "tr",
          [
            "td",
            "defaultVisible"
          ],
          [
            "td",
            "默认是否显隐"
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
            "getPopupContainer"
          ],
          [
            "td",
            "浮层渲染父节点，默认渲染到 body 上"
          ],
          [
            "td",
            "Function(triggerNode)"
          ],
          [
            "td",
            "() => document.body"
          ]
        ],
        [
          "tr",
          [
            "td",
            "mouseEnterDelay"
          ],
          [
            "td",
            "鼠标移入后延时多少才显示 Tooltip，单位：秒"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "mouseLeaveDelay"
          ],
          [
            "td",
            "鼠标移出后延时多少才隐藏 Tooltip，单位：秒"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "0.1"
          ]
        ],
        [
          "tr",
          [
            "td",
            "overlayClassName"
          ],
          [
            "td",
            "卡片类名"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "无"
          ]
        ],
        [
          "tr",
          [
            "td",
            "overlayStyle"
          ],
          [
            "td",
            "卡片样式"
          ],
          [
            "td",
            "object"
          ],
          [
            "td",
            "无"
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
            "气泡框位置，可选 ",
            [
              "code",
              "top"
            ],
            " ",
            [
              "code",
              "left"
            ],
            " ",
            [
              "code",
              "right"
            ],
            " ",
            [
              "code",
              "bottom"
            ],
            " ",
            [
              "code",
              "topLeft"
            ],
            " ",
            [
              "code",
              "topRight"
            ],
            " ",
            [
              "code",
              "bottomLeft"
            ],
            " ",
            [
              "code",
              "bottomRight"
            ],
            " ",
            [
              "code",
              "leftTop"
            ],
            " ",
            [
              "code",
              "leftBottom"
            ],
            " ",
            [
              "code",
              "rightTop"
            ],
            " ",
            [
              "code",
              "rightBottom"
            ]
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "top"
          ]
        ],
        [
          "tr",
          [
            "td",
            "trigger"
          ],
          [
            "td",
            "触发行为，可选 ",
            [
              "code",
              "hover/focus/click/contextMenu"
            ]
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "hover"
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
            "用于手动控制浮层显隐"
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
            "onVisibleChange"
          ],
          [
            "td",
            "显示隐藏的回调"
          ],
          [
            "td",
            "(visible) => void"
          ],
          [
            "td",
            "无"
          ]
        ],
        [
          "tr",
          [
            "td",
            "align"
          ],
          [
            "td",
            "该值将合并到 placement 的配置中，设置参考 ",
            [
              "a",
              {
                "title": null,
                "href": "https://github.com/react-component/tooltip"
              },
              "rc-tooltip"
            ]
          ],
          [
            "td",
            "Object"
          ],
          [
            "td",
            "无"
          ]
        ]
      ]
    ],
    [
      "h2",
      "注意"
    ],
    [
      "p",
      "请确保 ",
      [
        "code",
        "Tooltip"
      ],
      " 的子元素能接受 ",
      [
        "code",
        "onMouseEnter"
      ],
      "、",
      [
        "code",
        "onMouseLeave"
      ],
      "、",
      [
        "code",
        "onFocus"
      ],
      "、",
      [
        "code",
        "onClick"
      ],
      " 事件。"
    ]
  ]
};

/***/ })

});