webpackJsonp([126],{

/***/ 1905:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "Upload file by selecting or dragging."
    ],
    [
      "h2",
      "When To Use"
    ],
    [
      "p",
      "Uploading is the process of publishing information (web pages, text, pictures, video, etc.) to a remote server via a web page or upload tool."
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "When you need to upload one or more files."
        ]
      ],
      [
        "li",
        [
          "p",
          "When you need to show the process of uploading."
        ]
      ],
      [
        "li",
        [
          "p",
          "When you need to upload files by dragging and dropping."
        ]
      ]
    ]
  ],
  "meta": {
    "category": "Components",
    "type": "Data Entry",
    "title": "Upload",
    "filename": "components/upload/index.en-US.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#When-To-Use",
          "title": "When To Use"
        },
        "When To Use"
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
          "href": "#show-download-links",
          "title": "show download links"
        },
        "show download links"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#customRequest",
          "title": "customRequest"
        },
        "customRequest"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#IE-note",
          "title": "IE note"
        },
        "IE note"
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
      "blockquote",
      [
        "p",
        "You can consult ",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/blueimp/jQuery-File-Upload/wiki"
          },
          "jQuery-File-Upload"
        ],
        " about how to implement server side upload interface."
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
            "accept"
          ],
          [
            "td",
            "File types that can be accepted. See ",
            [
              "a",
              {
                "title": null,
                "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept"
              },
              "input accept Attribute"
            ]
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
            "action"
          ],
          [
            "td",
            "Required. Uploading URL"
          ],
          [
            "td",
            "string",
            "|",
            "(file) => ",
            [
              "code",
              "Promise"
            ]
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
            "directory"
          ],
          [
            "td",
            "support upload whole directory (",
            [
              "a",
              {
                "title": null,
                "href": "https://caniuse.com/#feat=input-file-directory"
              },
              "caniuse"
            ],
            ")"
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
            "beforeUpload"
          ],
          [
            "td",
            "Hook function which will be executed before uploading. Uploading will be stopped with ",
            [
              "code",
              "false"
            ],
            " or a rejected Promise returned. ",
            [
              "strong",
              "Warning：this function is not supported in IE9"
            ],
            "。"
          ],
          [
            "td",
            "(file, fileList) => ",
            [
              "code",
              "boolean | Promise"
            ]
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
            "customRequest"
          ],
          [
            "td",
            "override for the default xhr behavior allowing for additional customization and ability to implement your own XMLHttpRequest"
          ],
          [
            "td",
            "Function"
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
            "data"
          ],
          [
            "td",
            "Uploading params or function which can return uploading params."
          ],
          [
            "td",
            "object",
            "|",
            "function(file)"
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
            "defaultFileList"
          ],
          [
            "td",
            "Default list of files that have been uploaded."
          ],
          [
            "td",
            "object",
            "[",
            "]"
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
            "disabled"
          ],
          [
            "td",
            "disable upload button"
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
            "fileList"
          ],
          [
            "td",
            "List of files that have been uploaded (controlled). Here is a common issue ",
            [
              "a",
              {
                "title": null,
                "href": "https://github.com/ant-design/ant-design/issues/2423"
              },
              "#2423"
            ],
            " when using it"
          ],
          [
            "td",
            "object",
            "[",
            "]"
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
            "headers"
          ],
          [
            "td",
            "Set request headers, valid above IE10."
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
            "listType"
          ],
          [
            "td",
            "Built-in stylesheets, support for three types: ",
            [
              "code",
              "text"
            ],
            ", ",
            [
              "code",
              "picture"
            ],
            " or ",
            [
              "code",
              "picture-card"
            ]
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "'text'"
          ]
        ],
        [
          "tr",
          [
            "td",
            "multiple"
          ],
          [
            "td",
            "Whether to support selected multiple file. ",
            [
              "code",
              "IE10+"
            ],
            " supported. You can select multiple files with CTRL holding down while multiple is set to be true"
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
            "name"
          ],
          [
            "td",
            "The name of uploading file"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "'file'"
          ]
        ],
        [
          "tr",
          [
            "td",
            "showUploadList"
          ],
          [
            "td",
            "Whether to show default upload list, could be an object to specify ",
            [
              "code",
              "showPreviewIcon"
            ],
            " and ",
            [
              "code",
              "showRemoveIcon"
            ],
            " individually"
          ],
          [
            "td",
            "Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: boolean }"
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
            "supportServerRender"
          ],
          [
            "td",
            "Need to be turned on while the server side is rendering."
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
            "withCredentials"
          ],
          [
            "td",
            "ajax upload with cookie sent"
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
            "openFileDialogOnClick"
          ],
          [
            "td",
            "click open file dialog"
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
            "onChange"
          ],
          [
            "td",
            "A callback function, can be executed when uploading state is changing. See ",
            [
              "a",
              {
                "title": null,
                "href": "#onChange"
              },
              "onChange"
            ]
          ],
          [
            "td",
            "Function"
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
            "onPreview"
          ],
          [
            "td",
            "A callback function, will be executed when file link or preview icon is clicked."
          ],
          [
            "td",
            "Function(file)"
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
            "onRemove"
          ],
          [
            "td",
            "A callback function, will be executed when removing file button is clicked, remove event will be prevented when return value is ",
            [
              "code",
              "false"
            ],
            " or a Promise which resolve(false) or reject."
          ],
          [
            "td",
            "Function(file): ",
            [
              "code",
              "boolean | Promise"
            ]
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
      "onChange"
    ],
    [
      "blockquote",
      [
        "p",
        "The function will be called when uploading is in progress, completed or failed"
      ]
    ],
    [
      "p",
      "When uploading state change, it returns:"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token punctuation\">{</span>\n  file<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> <span class=\"token comment\" spellcheck=\"true\">/* ... */</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  fileList<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span> <span class=\"token comment\" spellcheck=\"true\">/* ... */</span> <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  event<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> <span class=\"token comment\" spellcheck=\"true\">/* ... */</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "{\n  file: { /* ... */ },\n  fileList: [ /* ... */ ],\n  event: { /* ... */ },\n}"
      ]
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          [
            "code",
            "file"
          ],
          " File object for the current operation."
        ],
        [
          "pre",
          {
            "lang": "js",
            "highlighted": "<span class=\"token punctuation\">{</span>\n   uid<span class=\"token punctuation\">:</span> <span class=\"token string\">'uid'</span><span class=\"token punctuation\">,</span>      <span class=\"token comment\" spellcheck=\"true\">// unique identifier，negative is recommend，to prevent interference with internal generated id</span>\n   name<span class=\"token punctuation\">:</span> <span class=\"token string\">'xx.png'</span>   <span class=\"token comment\" spellcheck=\"true\">// file name</span>\n   status<span class=\"token punctuation\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// options：uploading, done, error, removed</span>\n   response<span class=\"token punctuation\">:</span> <span class=\"token string\">'{\"status\": \"success\"}'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// response from server</span>\n   linkProps<span class=\"token punctuation\">:</span> <span class=\"token string\">'{\"download\": \"image\"}'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// additional html props of file link</span>\n<span class=\"token punctuation\">}</span>"
          },
          [
            "code",
            "{\n   uid: 'uid',      // unique identifier，negative is recommend，to prevent interference with internal generated id\n   name: 'xx.png'   // file name\n   status: 'done', // options：uploading, done, error, removed\n   response: '{\"status\": \"success\"}', // response from server\n   linkProps: '{\"download\": \"image\"}', // additional html props of file link\n}"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "fileList"
          ],
          " current list of files"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "event"
          ],
          " response from server, including uploading progress, supported by advanced browsers."
        ]
      ]
    ],
    [
      "h2",
      "show download links"
    ],
    [
      "p",
      "Please set property ",
      [
        "code",
        "url"
      ],
      " of property ",
      [
        "code",
        "fileList"
      ],
      " to control content of link"
    ],
    [
      "h2",
      "customRequest"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "https://github.com/react-component/upload#customrequest"
            },
            "https://github.com/react-component/upload#customrequest"
          ]
        ]
      ]
    ],
    [
      "h2",
      "IE note"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "https://github.com/react-component/upload#ie89-note"
            },
            "https://github.com/react-component/upload#ie89-note"
          ]
        ]
      ]
    ]
  ]
};

/***/ })

});