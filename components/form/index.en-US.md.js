webpackJsonp([194],{

/***/ 1803:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "Form is used to collect, validate, and submit the user input, usually contains various form items including checkbox, radio, input, select, and etc."
    ],
    [
      "h2",
      "Form"
    ],
    [
      "p",
      "You can align the controls of a ",
      [
        "code",
        "form"
      ],
      " using the ",
      [
        "code",
        "layout"
      ],
      " prop："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "code",
            "horizontal"
          ],
          "：to horizontally align the ",
          [
            "code",
            "label"
          ],
          "s and controls of the fields. (Default)"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "vertical"
          ],
          "：to vertically align the ",
          [
            "code",
            "label"
          ],
          "s and controls of the fields."
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "inline"
          ],
          "：to render form fields in one line."
        ]
      ]
    ],
    [
      "h2",
      "Form fields"
    ],
    [
      "p",
      "A form consists of one or more form fields whose type includes input, textarea, checkbox, radio, select, tag, and more.\nA form field is defined using ",
      [
        "code",
        "<Form.Item />"
      ],
      "."
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token operator\">&lt;</span>Form<span class=\"token punctuation\">.</span>Item <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n  <span class=\"token punctuation\">{</span>children<span class=\"token punctuation\">}</span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form.Item</span><span class=\"token punctuation\">></span></span>"
      },
      [
        "code",
        "<Form.Item {...props}>\n  {children}\n</Form.Item>"
      ]
    ]
  ],
  "meta": {
    "category": "Components",
    "type": "Data Entry",
    "cols": 1,
    "title": "Form",
    "filename": "components/form/index.en-US.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Form",
          "title": "Form"
        },
        "Form"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Form-fields",
          "title": "Form fields"
        },
        "Form fields"
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
          "href": "#Using-in-TypeScript",
          "title": "Using in TypeScript"
        },
        "Using in TypeScript"
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
      "h3",
      "Form"
    ],
    [
      "p",
      [
        "strong",
        "more example ",
        [
          "a",
          {
            "title": null,
            "href": "http://react-component.github.io/form/"
          },
          "rc-form"
        ]
      ],
      "。"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "Property"
          ],
          [
            "th",
            "Description"
          ],
          [
            "th",
            "Type"
          ],
          [
            "th",
            "Default Value"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "form"
          ],
          [
            "td",
            "Decorated by ",
            [
              "code",
              "Form.create()"
            ],
            " will be automatically set ",
            [
              "code",
              "this.props.form"
            ],
            " property"
          ],
          [
            "td",
            "object"
          ],
          [
            "td",
            "n/a"
          ]
        ],
        [
          "tr",
          [
            "td",
            "hideRequiredMark"
          ],
          [
            "td",
            "Hide required mark of all form items"
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
            "layout"
          ],
          [
            "td",
            "Define form layout"
          ],
          [
            "td",
            "'horizontal'",
            "|",
            "'vertical'",
            "|",
            "'inline'"
          ],
          [
            "td",
            "'horizontal'"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onSubmit"
          ],
          [
            "td",
            "Defines a function will be called if form data validation is successful."
          ],
          [
            "td",
            "Function(e:Event)"
          ],
          [
            "td"
          ]
        ]
      ]
    ],
    [
      "h3",
      "Form.create(options)"
    ],
    [
      "p",
      "How to use："
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">class</span> <span class=\"token class-name\">CustomizedForm</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span>\n\nCustomizedForm <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>CustomizedForm<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "class CustomizedForm extends React.Component {}\n\nCustomizedForm = Form.create({})(CustomizedForm);"
      ]
    ],
    [
      "p",
      "The following ",
      [
        "code",
        "options"
      ],
      " are available:"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "Property"
          ],
          [
            "th",
            "Description"
          ],
          [
            "th",
            "Type"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "mapPropsToFields"
          ],
          [
            "td",
            "Convert props to field value(e.g. reading the values from Redux store). And you must mark returned fields with ",
            [
              "a",
              {
                "title": null,
                "href": "#Form.createFormField"
              },
              [
                "code",
                "Form.createFormField"
              ]
            ]
          ],
          [
            "td",
            "(props) => ({ ",
            "[",
            "fieldName",
            "]",
            ": FormField { value } })"
          ]
        ],
        [
          "tr",
          [
            "td",
            "validateMessages"
          ],
          [
            "td",
            "Default validate message. And its format is similar with ",
            [
              "a",
              {
                "title": null,
                "href": "https://github.com/yiminghe/async-validator/blob/master/src/messages.js"
              },
              "newMessages"
            ],
            "'s returned value"
          ],
          [
            "td",
            "Object { ",
            [
              "span",
              "nested.path"
            ],
            ":",
            " String }"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onFieldsChange"
          ],
          [
            "td",
            "Specify a function that will be called when the value a ",
            [
              "code",
              "Form.Item"
            ],
            " gets changed. Usage example: saving the field's value to Redux store."
          ],
          [
            "td",
            "Function(props, fields)"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onValuesChange"
          ],
          [
            "td",
            "A handler while value of any field is changed"
          ],
          [
            "td",
            "(props, changedValues, allValues) => void"
          ]
        ]
      ]
    ],
    [
      "p",
      "If you want to get ",
      [
        "code",
        "ref"
      ],
      " after ",
      [
        "code",
        "Form.create"
      ],
      ", you can use ",
      [
        "code",
        "wrappedComponentRef"
      ],
      " provided by ",
      [
        "code",
        "rc-form"
      ],
      "，",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/react-component/form#note-use-wrappedcomponentref-instead-of-withref-after-rc-form140"
        },
        "details can be viewed here"
      ],
      "."
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">class</span> <span class=\"token class-name\">CustomizedForm</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span> <span class=\"token operator\">...</span> <span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// use wrappedComponentRef</span>\n<span class=\"token keyword\">const</span> EnhancedForm <span class=\"token operator\">=</span>  Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>CustomizedForm<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EnhancedForm</span> <span class=\"token attr-name\">wrappedComponentRef</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>form<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>form <span class=\"token operator\">=</span> form<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>form <span class=\"token comment\" spellcheck=\"true\">// => The instance of CustomizedForm</span>"
      },
      [
        "code",
        "class CustomizedForm extends React.Component { ... }\n\n// use wrappedComponentRef\nconst EnhancedForm =  Form.create()(CustomizedForm);\n<EnhancedForm wrappedComponentRef={(form) => this.form = form} />\nthis.form // => The instance of CustomizedForm"
      ]
    ],
    [
      "p",
      "If the form has been decorated by ",
      [
        "code",
        "Form.create"
      ],
      " then it has ",
      [
        "code",
        "this.props.form"
      ],
      " property. ",
      [
        "code",
        "this.props.form"
      ],
      " provides some APIs as follows:"
    ],
    [
      "blockquote",
      [
        "p",
        "Note: Before using ",
        [
          "code",
          "getFieldsValue"
        ],
        " ",
        [
          "code",
          "getFieldValue"
        ],
        " ",
        [
          "code",
          "setFieldsValue"
        ],
        " and so on, please make sure that corresponding field had been registered with ",
        [
          "code",
          "getFieldDecorator"
        ],
        "."
      ]
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "Method"
          ],
          [
            "th",
            "Description"
          ],
          [
            "th",
            "Type"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "getFieldDecorator"
          ],
          [
            "td",
            "Two-way binding for form, please read below for details."
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "getFieldError"
          ],
          [
            "td",
            "Get the error of a field."
          ],
          [
            "td",
            "Function(name)"
          ]
        ],
        [
          "tr",
          [
            "td",
            "getFieldsError"
          ],
          [
            "td",
            "Get the specified fields' error. If you don't specify a parameter, you will get all fields' error."
          ],
          [
            "td",
            "Function(",
            "[",
            "names: string",
            "[",
            "]])"
          ]
        ],
        [
          "tr",
          [
            "td",
            "getFieldsValue"
          ],
          [
            "td",
            "Get the specified fields' values. If you don't specify a parameter, you will get all fields' values."
          ],
          [
            "td",
            "Function(",
            "[",
            "fieldNames: string",
            "[",
            "]])"
          ]
        ],
        [
          "tr",
          [
            "td",
            "getFieldValue"
          ],
          [
            "td",
            "Get the value of a field."
          ],
          [
            "td",
            "Function(fieldName: string)"
          ]
        ],
        [
          "tr",
          [
            "td",
            "isFieldsTouched"
          ],
          [
            "td",
            "Check whether any of fields is touched by ",
            [
              "code",
              "getFieldDecorator"
            ],
            "'s ",
            [
              "code",
              "options.trigger"
            ],
            " event"
          ],
          [
            "td",
            "(names?: string",
            "[",
            "]) => boolean"
          ]
        ],
        [
          "tr",
          [
            "td",
            "isFieldTouched"
          ],
          [
            "td",
            "Check whether a field is touched by ",
            [
              "code",
              "getFieldDecorator"
            ],
            "'s ",
            [
              "code",
              "options.trigger"
            ],
            " event"
          ],
          [
            "td",
            "(name: string) => boolean"
          ]
        ],
        [
          "tr",
          [
            "td",
            "isFieldValidating"
          ],
          [
            "td",
            "Check if the specified field is being validated."
          ],
          [
            "td",
            "Function(name)"
          ]
        ],
        [
          "tr",
          [
            "td",
            "resetFields"
          ],
          [
            "td",
            "Reset the specified fields' value(to ",
            [
              "code",
              "initialValue"
            ],
            ") and status. If you don't specify a parameter, all the fields will be reset."
          ],
          [
            "td",
            "Function(",
            "[",
            "names: string",
            "[",
            "]])"
          ]
        ],
        [
          "tr",
          [
            "td",
            "setFields"
          ],
          [
            "td",
            "Set the value and error of a field. ",
            [
              "a",
              {
                "title": null,
                "href": "https://github.com/react-component/form/blob/3b9959b57ab30b41d8890ff30c79a7e7c383cad3/examples/server-validate.js#L74-L79"
              },
              "Code Sample"
            ]
          ],
          [
            "td",
            "Function({ ",
            [
              "span",
              "fieldName"
            ],
            ":",
            " { value: any, errors: ",
            [
              "span",
              "Error"
            ],
            " } })"
          ]
        ],
        [
          "tr",
          [
            "td",
            "setFields"
          ],
          [
            "td",
            "Set value and error state of fields"
          ],
          [
            "td",
            "({",
            [
              "br"
            ],
            " ",
            " ",
            "[",
            "fieldName",
            "]",
            ": {value: any, errors: ",
            "[",
            "Error",
            "]",
            " }",
            [
              "br"
            ],
            "}) => void"
          ]
        ],
        [
          "tr",
          [
            "td",
            "setFieldsValue"
          ],
          [
            "td",
            "Set the value of a field. (Note: please don't use it in ",
            [
              "code",
              "componentWillReceiveProps"
            ],
            ", otherwise, it will cause an endless loop, ",
            [
              "a",
              {
                "title": null,
                "href": "https://github.com/ant-design/ant-design/issues/2985"
              },
              "reason"
            ],
            ")"
          ],
          [
            "td",
            "({ ",
            "[",
            "fieldName",
            "]",
            ":",
            " value }) => void"
          ]
        ],
        [
          "tr",
          [
            "td",
            "validateFields"
          ],
          [
            "td",
            "Validate the specified fields and get theirs values and errors. If you don't specify the parameter of fieldNames, you will vaildate all fields."
          ],
          [
            "td",
            "(",
            [
              "br"
            ],
            " ",
            " ",
            "[",
            "fieldNames: string",
            "[",
            "]],",
            [
              "br"
            ],
            " ",
            " ",
            "[",
            "options: object",
            "]",
            ",",
            [
              "br"
            ],
            " ",
            " ",
            "callback(errors, values)",
            [
              "br"
            ],
            ") => void"
          ]
        ],
        [
          "tr",
          [
            "td",
            "validateFieldsAndScroll"
          ],
          [
            "td",
            "This function is similar to ",
            [
              "code",
              "validateFields"
            ],
            ", but after validation, if the target field is not in visible area of form, form will be automatically scrolled to the target field area."
          ],
          [
            "td",
            "same as ",
            [
              "code",
              "validateFields"
            ]
          ]
        ]
      ]
    ],
    [
      "h3",
      "validateFields/validateFieldsAndScroll"
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> form<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> validateFields <span class=\"token punctuation\">}</span> <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n<span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>errors<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\" spellcheck=\"true\">// ...</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span><span class=\"token string\">'field1'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'field2'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span>errors<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\" spellcheck=\"true\">// ...</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span><span class=\"token string\">'field1'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'field2'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> options<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span>errors<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\" spellcheck=\"true\">// ...</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "const { form: { validateFields } } = this.props;\nvalidateFields((errors, values) => {\n  // ...\n});\nvalidateFields(['field1', 'field2'], (errors, values) => {\n  // ...\n});\nvalidateFields(['field1', 'field2'], options, (errors, values) => {\n  // ...\n});"
      ]
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "Method"
          ],
          [
            "th",
            "Description"
          ],
          [
            "th",
            "Type"
          ],
          [
            "th",
            "Default"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "options.first"
          ],
          [
            "td",
            "If ",
            [
              "code",
              "true"
            ],
            ", every field will stop validation at first failed rule"
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
            "options.firstFields"
          ],
          [
            "td",
            "Those fields will stop validation at first failed rule"
          ],
          [
            "td",
            "String",
            "[",
            "]"
          ],
          [
            "td",
            "[",
            "]"
          ]
        ],
        [
          "tr",
          [
            "td",
            "options.force"
          ],
          [
            "td",
            "Should validate validated field again when ",
            [
              "code",
              "validateTrigger"
            ],
            " is been triggered again"
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
            "options.scroll"
          ],
          [
            "td",
            "Config scroll behavior of ",
            [
              "code",
              "validateFieldsAndScroll"
            ],
            ", more: ",
            [
              "a",
              {
                "title": null,
                "href": "https://github.com/yiminghe/dom-scroll-into-view#function-parameter"
              },
              "dom-scroll-into-view's config"
            ]
          ],
          [
            "td",
            "Object"
          ],
          [
            "td",
            "{}"
          ]
        ]
      ]
    ],
    [
      "h4",
      "Callback arguments example of validateFields"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "code",
            "errors"
          ],
          ":"
        ],
        [
          "pre",
          {
            "lang": "js",
            "highlighted": "<span class=\"token punctuation\">{</span>\n  <span class=\"token string\">\"userName\"</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token string\">\"errors\"</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">\"message\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"Please input your username!\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">\"field\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"userName\"</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"password\"</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token string\">\"errors\"</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">\"message\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"Please input your Password!\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">\"field\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"password\"</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>"
          },
          [
            "code",
            "{\n  \"userName\": {\n    \"errors\": [\n      {\n        \"message\": \"Please input your username!\",\n        \"field\": \"userName\"\n      }\n    ]\n  },\n  \"password\": {\n    \"errors\": [\n      {\n        \"message\": \"Please input your Password!\",\n        \"field\": \"password\"\n      }\n    ]\n  }\n}"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "values"
          ],
          ":"
        ],
        [
          "pre",
          {
            "lang": "js",
            "highlighted": "<span class=\"token punctuation\">{</span>\n  <span class=\"token string\">\"userName\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"username\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"password\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"password\"</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span>"
          },
          [
            "code",
            "{\n  \"userName\": \"username\",\n  \"password\": \"password\",\n}"
          ]
        ]
      ]
    ],
    [
      "h3",
      "Form.createFormField"
    ],
    [
      "p",
      "To mark the returned fields data in ",
      [
        "code",
        "mapPropsToFields"
      ],
      ", ",
      [
        "a",
        {
          "title": null,
          "href": "#components-form-demo-global-state"
        },
        "demo"
      ],
      "."
    ],
    [
      "h3",
      "this.props.form.getFieldDecorator(id, options)"
    ],
    [
      "p",
      "After wrapped by ",
      [
        "code",
        "getFieldDecorator"
      ],
      ", ",
      [
        "code",
        "value"
      ],
      "(or other property defined by ",
      [
        "code",
        "valuePropName"
      ],
      ") ",
      [
        "code",
        "onChange"
      ],
      "(or other property defined by ",
      [
        "code",
        "trigger"
      ],
      ") props will be added to form controls，the flow of form data will be handled by Form which will cause:"
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          "You shouldn't use ",
          [
            "code",
            "onChange"
          ],
          " to collect data, but you still can listen to ",
          [
            "code",
            "onChange"
          ],
          "(and so on) events."
        ]
      ],
      [
        "li",
        [
          "p",
          "You cannot set value of form control via ",
          [
            "code",
            "value"
          ],
          " ",
          [
            "code",
            "defaultValue"
          ],
          " prop, and you should set default value with ",
          [
            "code",
            "initialValue"
          ],
          " in ",
          [
            "code",
            "getFieldDecorator"
          ],
          " instead."
        ]
      ],
      [
        "li",
        [
          "p",
          "You shouldn't call ",
          [
            "code",
            "setState"
          ],
          " manually, please use ",
          [
            "code",
            "this.props.form.setFieldsValue"
          ],
          " to change value programmatically."
        ]
      ]
    ],
    [
      "h4",
      "Special attention"
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          [
            "code",
            "getFieldDecorator"
          ],
          " can not be used to decorate stateless component."
        ]
      ],
      [
        "li",
        [
          "p",
          "If you use ",
          [
            "code",
            "react@<15.3.0"
          ],
          ", then, you can't use ",
          [
            "code",
            "getFieldDecorator"
          ],
          " in stateless component: ",
          [
            "a",
            {
              "title": null,
              "href": "https://github.com/facebook/react/pull/6534"
            },
            "https://github.com/facebook/react/pull/6534"
          ]
        ]
      ]
    ],
    [
      "h4",
      "getFieldDecorator(id, options) parameters"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "Property"
          ],
          [
            "th",
            "Description"
          ],
          [
            "th",
            "Type"
          ],
          [
            "th",
            "Default Value"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "id"
          ],
          [
            "td",
            "The unique identifier is required. support ",
            [
              "a",
              {
                "title": null,
                "href": "https://github.com/react-component/form/pull/48"
              },
              "nested fields format"
            ],
            "."
          ],
          [
            "td",
            "string"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "options.getValueFromEvent"
          ],
          [
            "td",
            "Specify how to get value from event or other onChange arguments"
          ],
          [
            "td",
            "function(..args)"
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "https://github.com/react-component/form#option-object"
              },
              "reference"
            ]
          ]
        ],
        [
          "tr",
          [
            "td",
            "options.getValueProps"
          ],
          [
            "td",
            "Get the component props according to field value."
          ],
          [
            "td",
            "function(value): any"
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "https://github.com/react-component/form#option-object"
              },
              "reference"
            ]
          ]
        ],
        [
          "tr",
          [
            "td",
            "options.initialValue"
          ],
          [
            "td",
            "You can specify initial value, type, optional value of children node. (Note: Because ",
            [
              "code",
              "Form"
            ],
            " will test equality with ",
            [
              "code",
              "==="
            ],
            " internaly, we recommend to use vairable as ",
            [
              "code",
              "initialValue"
            ],
            ", instead of literal)"
          ],
          [
            "td"
          ],
          [
            "td",
            "n/a"
          ]
        ],
        [
          "tr",
          [
            "td",
            "options.normalize"
          ],
          [
            "td",
            "Normalize value to form component, ",
            [
              "a",
              {
                "title": null,
                "href": "https://codepen.io/afc163/pen/JJVXzG?editors=001"
              },
              "a select-all example"
            ]
          ],
          [
            "td",
            "function(value, prevValue, allValues): any"
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
            "options.rules"
          ],
          [
            "td",
            "Includes validation rules. Please refer to \"Validation Rules\" part for details."
          ],
          [
            "td",
            "object",
            "[",
            "]"
          ],
          [
            "td",
            "n/a"
          ]
        ],
        [
          "tr",
          [
            "td",
            "options.trigger"
          ],
          [
            "td",
            "When to collect the value of children node"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "'onChange'"
          ]
        ],
        [
          "tr",
          [
            "td",
            "options.validateFirst"
          ],
          [
            "td",
            "Whether stop validate on first rule of error for this field."
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
            "options.validateTrigger"
          ],
          [
            "td",
            "When to validate the value of children node."
          ],
          [
            "td",
            "string",
            "|",
            "string",
            "[",
            "]"
          ],
          [
            "td",
            "'onChange'"
          ]
        ],
        [
          "tr",
          [
            "td",
            "options.valuePropName"
          ],
          [
            "td",
            "Props of children node, for example, the prop of Switch is 'checked'."
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "'value'"
          ]
        ]
      ]
    ],
    [
      "p",
      "More option at ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/react-component/form#option-object"
        },
        "rc-form option"
      ],
      "。"
    ],
    [
      "h3",
      "Form.Item"
    ],
    [
      "p",
      "Note: if Form.Item has multiple children that had been decorated by ",
      [
        "code",
        "getFieldDecorator"
      ],
      ", ",
      [
        "code",
        "help"
      ],
      " and ",
      [
        "code",
        "required"
      ],
      " and ",
      [
        "code",
        "validateStatus"
      ],
      " can't be generated automatically."
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "Property"
          ],
          [
            "th",
            "Description"
          ],
          [
            "th",
            "Type"
          ],
          [
            "th",
            "Default Value"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "colon"
          ],
          [
            "td",
            "Used with ",
            [
              "code",
              "label"
            ],
            ", whether to display ",
            [
              "code",
              ":"
            ],
            " after label text."
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
            "extra"
          ],
          [
            "td",
            "The extra prompt message. It is similar to help. Usage example: to display error message and prompt message at the same time."
          ],
          [
            "td",
            "string",
            "|",
            "ReactNode"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "hasFeedback"
          ],
          [
            "td",
            "Used with ",
            [
              "code",
              "validateStatus"
            ],
            ", this option specifies the validation status icon. Recommended to be used only with ",
            [
              "code",
              "Input"
            ],
            "."
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
            "help"
          ],
          [
            "td",
            "The prompt message. If not provided, the prompt message will be generated by the validation rule."
          ],
          [
            "td",
            "string",
            "|",
            "ReactNode"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "label"
          ],
          [
            "td",
            "Label text"
          ],
          [
            "td",
            "string",
            "|",
            "ReactNode"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "labelCol"
          ],
          [
            "td",
            "The layout of label. You can set ",
            [
              "code",
              "span"
            ],
            " ",
            [
              "code",
              "offset"
            ],
            " to something like ",
            [
              "code",
              "{span: 3, offset: 12}"
            ],
            " or ",
            [
              "code",
              "sm: {span: 3, offset: 12}"
            ],
            " same as with ",
            [
              "code",
              "<Col>"
            ]
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "https://ant.design/components/grid/#Col"
              },
              "object"
            ]
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "required"
          ],
          [
            "td",
            "Whether provided or not, it will be generated by the validation rule."
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
            "validateStatus"
          ],
          [
            "td",
            "The validation status. If not provided, it will be generated by validation rule. options: 'success' 'warning' 'error' 'validating'"
          ],
          [
            "td",
            "string"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "wrapperCol"
          ],
          [
            "td",
            "The layout for input controls, same as ",
            [
              "code",
              "labelCol"
            ]
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "https://ant.design/components/grid/#Col"
              },
              "object"
            ]
          ],
          [
            "td"
          ]
        ]
      ]
    ],
    [
      "h3",
      "Validation Rules"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "Property"
          ],
          [
            "th",
            "Description"
          ],
          [
            "th",
            "Type"
          ],
          [
            "th",
            "Default Value"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "enum"
          ],
          [
            "td",
            "validate a value from a list of possible values"
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
            "len"
          ],
          [
            "td",
            "validate an exact length of a field"
          ],
          [
            "td",
            "number"
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
            "max"
          ],
          [
            "td",
            "validate a max length of a field"
          ],
          [
            "td",
            "number"
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
            "message"
          ],
          [
            "td",
            "validation error message"
          ],
          [
            "td",
            "string",
            "|",
            "ReactNode"
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
            "min"
          ],
          [
            "td",
            "validate a min length of a field"
          ],
          [
            "td",
            "number"
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
            "pattern"
          ],
          [
            "td",
            "validate from a regular expression"
          ],
          [
            "td",
            "RegExp"
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
            "required"
          ],
          [
            "td",
            "indicates whether field is required"
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
            "transform"
          ],
          [
            "td",
            "transform a value before validation"
          ],
          [
            "td",
            "function(value) => transformedValue:any"
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
            "type"
          ],
          [
            "td",
            "built-in validation type, ",
            [
              "a",
              {
                "title": null,
                "href": "https://github.com/yiminghe/async-validator#type"
              },
              "available options"
            ]
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "'string'"
          ]
        ],
        [
          "tr",
          [
            "td",
            "validator"
          ],
          [
            "td",
            "custom validate function (Note: ",
            [
              "a",
              {
                "title": null,
                "href": "https://github.com/ant-design/ant-design/issues/5155"
              },
              "callback must be called"
            ],
            ")"
          ],
          [
            "td",
            "function(rule, value, callback)"
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
            "whitespace"
          ],
          [
            "td",
            "treat required fields that only contain whitespace as errors"
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
        ]
      ]
    ],
    [
      "p",
      "See more advanced usage at ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/yiminghe/async-validator"
        },
        "async-validator"
      ],
      "."
    ],
    [
      "h2",
      "Using in TypeScript"
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> FormComponentProps <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd/lib/form'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">interface</span> <span class=\"token class-name\">UserFormProps</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">FormComponentProps</span> <span class=\"token punctuation\">{</span>\n  age<span class=\"token punctuation\">:</span> number<span class=\"token punctuation\">;</span>\n  name<span class=\"token punctuation\">:</span> string<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">UserForm</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span><span class=\"token operator\">&lt;</span>UserFormProps<span class=\"token punctuation\">,</span> any<span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\" spellcheck=\"true\">// ...</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "import { Form } from 'antd';\nimport { FormComponentProps } from 'antd/lib/form';\n\ninterface UserFormProps extends FormComponentProps {\n  age: number;\n  name: string;\n}\n\nclass UserForm extends React.Component<UserFormProps, any> {\n  // ...\n}"
      ]
    ],
    [
      "style",
      "\n.code-box-demo .ant-form:not(.ant-form-inline):not(.ant-form-vertical) {\n  max-width: 600px;\n}\n.markdown.api-container table td:last-child {\n  white-space: nowrap;\n  word-wrap: break-word;\n}\n"
    ]
  ]
};

/***/ })

});