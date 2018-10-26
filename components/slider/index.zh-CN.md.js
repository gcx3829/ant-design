webpackJsonp([151],{

/***/ 1867:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "滑动型输入器，展示当前值和可选范围。"
    ],
    [
      "h2",
      "何时使用"
    ],
    [
      "p",
      "当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。"
    ]
  ],
  "meta": {
    "category": "Components",
    "subtitle": "滑动输入条",
    "type": "Data Entry",
    "title": "Slider",
    "filename": "components/slider/index.zh-CN.md"
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
          "href": "#方法",
          "title": "方法"
        },
        "方法"
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
            "allowClear"
          ],
          [
            "td",
            "支持清除, 单选模式有效"
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
            "defaultValue"
          ],
          [
            "td",
            "设置初始取值。当 ",
            [
              "code",
              "range"
            ],
            " 为 ",
            [
              "code",
              "false"
            ],
            " 时，使用 ",
            [
              "code",
              "number"
            ],
            "，否则用 ",
            [
              "code",
              "[number, number]"
            ]
          ],
          [
            "td",
            "number",
            "|",
            "number",
            "[",
            "]"
          ],
          [
            "td",
            "0 or ",
            [
              "span",
              "0, 0"
            ]
          ]
        ],
        [
          "tr",
          [
            "td",
            "disabled"
          ],
          [
            "td",
            "值为 ",
            [
              "code",
              "true"
            ],
            " 时，滑块为禁用状态"
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
            "dots"
          ],
          [
            "td",
            "是否只能拖拽到刻度上"
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
            "included"
          ],
          [
            "td",
            [
              "code",
              "marks"
            ],
            " 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列"
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
            "marks"
          ],
          [
            "td",
            "刻度标记，key 的类型必须为 ",
            [
              "code",
              "number"
            ],
            " 且取值在闭区间 ",
            [
              "span",
              "min, max"
            ],
            " 内，每个标签可以单独设置样式"
          ],
          [
            "td",
            "object"
          ],
          [
            "td",
            "{ number: string",
            "|",
            "ReactNode } or { number: { style: object, label: string",
            "|",
            "ReactNode } }"
          ]
        ],
        [
          "tr",
          [
            "td",
            "max"
          ],
          [
            "td",
            "最大值"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "100"
          ]
        ],
        [
          "tr",
          [
            "td",
            "min"
          ],
          [
            "td",
            "最小值"
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
            "range"
          ],
          [
            "td",
            "双滑块模式"
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
            "step"
          ],
          [
            "td",
            "步长，取值必须大于 0，并且可被 (max - min) 整除。当 ",
            [
              "code",
              "marks"
            ],
            " 不为空对象时，可以设置 ",
            [
              "code",
              "step"
            ],
            " 为 ",
            [
              "code",
              "null"
            ],
            "，此时 Slider 的可选值仅有 marks 标出来的部分。"
          ],
          [
            "td",
            "number",
            "|",
            "null"
          ],
          [
            "td",
            "1"
          ]
        ],
        [
          "tr",
          [
            "td",
            "tipFormatter"
          ],
          [
            "td",
            "Slider 会把当前值传给 ",
            [
              "code",
              "tipFormatter"
            ],
            "，并在 Tooltip 中显示 ",
            [
              "code",
              "tipFormatter"
            ],
            " 的返回值，若为 null，则隐藏 Tooltip。"
          ],
          [
            "td",
            "Function",
            "|",
            "null"
          ],
          [
            "td",
            "IDENTITY"
          ]
        ],
        [
          "tr",
          [
            "td",
            "value"
          ],
          [
            "td",
            "设置当前取值。当 ",
            [
              "code",
              "range"
            ],
            " 为 ",
            [
              "code",
              "false"
            ],
            " 时，使用 ",
            [
              "code",
              "number"
            ],
            "，否则用 ",
            [
              "code",
              "[number, number]"
            ]
          ],
          [
            "td",
            "number",
            "|",
            "number",
            "[",
            "]"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "vertical"
          ],
          [
            "td",
            "值为 ",
            [
              "code",
              "true"
            ],
            " 时，Slider 为垂直方向"
          ],
          [
            "td",
            "Boolean"
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
            "onAfterChange"
          ],
          [
            "td",
            "与 ",
            [
              "code",
              "onmouseup"
            ],
            " 触发时机一致，把当前值作为参数传入。"
          ],
          [
            "td",
            "Function(value)"
          ],
          [
            "td",
            "NOOP"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onChange"
          ],
          [
            "td",
            "当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入。"
          ],
          [
            "td",
            "Function(value)"
          ],
          [
            "td",
            "NOOP"
          ]
        ]
      ]
    ],
    [
      "h2",
      "方法"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "名称"
          ],
          [
            "th",
            "描述"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "blur()"
          ],
          [
            "td",
            "移除焦点"
          ]
        ],
        [
          "tr",
          [
            "td",
            "focus()"
          ],
          [
            "td",
            "获取焦点"
          ]
        ]
      ]
    ]
  ]
};

/***/ })

});