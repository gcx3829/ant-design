webpackJsonp([162],{

/***/ 1851:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "Display the current progress of an operation flow."
    ],
    [
      "h2",
      "When To Use"
    ],
    [
      "p",
      "If it will take a long time to complete an operation, you can use ",
      [
        "code",
        "Progress"
      ],
      " to show the current progress and status."
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "When an operation will interrupt the current interface, or it needs to run in the background for more than 2 seconds."
        ]
      ],
      [
        "li",
        [
          "p",
          "When you need to display the completion percentage of an operation."
        ]
      ]
    ]
  ],
  "meta": {
    "category": "Components",
    "type": "Feedback",
    "title": "Progress",
    "filename": "components/progress/index.en-US.md"
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
            "format"
          ],
          [
            "td",
            "template function of the content"
          ],
          [
            "td",
            "function(percent, successPercent)"
          ],
          [
            "td",
            [
              "code",
              "percent => percent + '%'"
            ]
          ]
        ],
        [
          "tr",
          [
            "td",
            "gapDegree ",
            [
              "code",
              "(type=circle)"
            ]
          ],
          [
            "td",
            "the gap degree of half circle, 0 ~ 360"
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
            "gapPosition ",
            [
              "code",
              "(type=circle)"
            ]
          ],
          [
            "td",
            "the gap position, options: ",
            [
              "code",
              "top"
            ],
            " ",
            [
              "code",
              "bottom"
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
            ]
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            [
              "code",
              "top"
            ]
          ]
        ],
        [
          "tr",
          [
            "td",
            "percent"
          ],
          [
            "td",
            "to set the completion percentage"
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
            "showInfo"
          ],
          [
            "td",
            "whether to display the progress value and the status icon"
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
            "status"
          ],
          [
            "td",
            "to set the status of the Progress, options: ",
            [
              "code",
              "success"
            ],
            " ",
            [
              "code",
              "exception"
            ],
            " ",
            [
              "code",
              "active"
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
            "strokeWidth ",
            [
              "code",
              "(type=line)"
            ]
          ],
          [
            "td",
            "to set the width of the progress bar, unit: ",
            [
              "code",
              "px"
            ]
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "10"
          ]
        ],
        [
          "tr",
          [
            "td",
            "strokeWidth ",
            [
              "code",
              "(type=circle)"
            ]
          ],
          [
            "td",
            "to set the width of the circular progress bar, unit: percentage of the canvas width"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "6"
          ]
        ],
        [
          "tr",
          [
            "td",
            "strokeLinecap"
          ],
          [
            "td",
            "to set the style of the progress linecap"
          ],
          [
            "td",
            "Enum{ 'round', 'square' }"
          ],
          [
            "td",
            [
              "code",
              "round"
            ]
          ]
        ],
        [
          "tr",
          [
            "td",
            "strokeColor"
          ],
          [
            "td",
            "color of progress bar"
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
            "successPercent"
          ],
          [
            "td",
            "segmented success percent, works when ",
            [
              "code",
              "type=\"line\""
            ]
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
            "type"
          ],
          [
            "td",
            "to set the type, options: ",
            [
              "code",
              "line"
            ],
            " ",
            [
              "code",
              "circle"
            ],
            " ",
            [
              "code",
              "dashboard"
            ]
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            [
              "code",
              "line"
            ]
          ]
        ],
        [
          "tr",
          [
            "td",
            "width ",
            [
              "code",
              "(type=circle)"
            ]
          ],
          [
            "td",
            "to set the canvas width of the circular progress bar, unit: ",
            [
              "code",
              "px"
            ]
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "132"
          ]
        ]
      ]
    ]
  ]
};

/***/ })

});