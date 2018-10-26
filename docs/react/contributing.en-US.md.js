webpackJsonp([124],{

/***/ 1907:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "The following is a set of guidelines for contributing to Ant Design. Please spend several minutes in reading these guidelines before you create an issue or pull request."
    ],
    [
      "h2",
      "Code of Conduct"
    ],
    [
      "p",
      "We have adopted a ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/blob/master/CODE_OF_CONDUCT.md"
        },
        "Code of Conduct"
      ],
      " that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated."
    ],
    [
      "h2",
      "Open Development"
    ],
    [
      "p",
      "All work on Ant Design happens directly on ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design"
        },
        "GitHub"
      ],
      ". Both core team members and external contributors send pull requests which go through the same review process."
    ],
    [
      "h2",
      "Branch Organization"
    ],
    [
      "p",
      "According to our ",
      [
        "a",
        {
          "title": null,
          "href": "changelog#Release-Schedule"
        },
        "release schedule"
      ],
      ", we maintain two branches, ",
      [
        "code",
        "master"
      ],
      " and ",
      [
        "code",
        "feature"
      ],
      ". If you send a bugfix pull request, please do it against the ",
      [
        "code",
        "master"
      ],
      " branch, if it's a feature pull request, please do it against the ",
      [
        "code",
        "feature"
      ],
      " branch."
    ],
    [
      "h2",
      "Bugs"
    ],
    [
      "p",
      "We are using ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/issues"
        },
        "GitHub Issues"
      ],
      " for bug tracing. The best way to get your bug fixed is using our ",
      [
        "a",
        {
          "title": null,
          "href": "http://new-issue.ant.design"
        },
        "issue helper"
      ],
      " and provide a reprduction with this ",
      [
        "a",
        {
          "title": null,
          "href": "https://u.ant.design/codesandbox-repro"
        },
        "template"
      ],
      "."
    ],
    [
      "p",
      "Before you reporting a bug, please make sure you've searched exists issues, and read our ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/react/faq"
        },
        "FAQ"
      ],
      "."
    ],
    [
      "h2",
      "Proposing a Change"
    ],
    [
      "p",
      "If you intend to change the public API or introduce new feature, we also recommend use our ",
      [
        "a",
        {
          "title": null,
          "href": "http://new-issue.ant.design"
        },
        "issue helper"
      ],
      " to create a feature request issue."
    ],
    [
      "h2",
      "Your First Pull Request"
    ],
    [
      "p",
      "Working on your first Pull Request? You can learn how from this free video series:"
    ],
    [
      "p",
      [
        "a",
        {
          "title": null,
          "href": "https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github"
        },
        "How to Contribute to an Open Source Project on GitHub"
      ]
    ],
    [
      "p",
      "To help you get your feet wet and get you familiar with our contribution process, we have a list of ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
        },
        "good first issues"
      ],
      " that contain bugs or small features that have a relatively limited scope. This is a great place to get started."
    ],
    [
      "p",
      "If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don’t accidentally duplicate your effort."
    ],
    [
      "p",
      "If somebody claims an issue but doesn’t follow up for more than two weeks, it’s fine to take over it but you should still leave a comment."
    ],
    [
      "h2",
      "Sending a Pull Request"
    ],
    [
      "p",
      "The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation."
    ],
    [
      "p",
      [
        "strong",
        "Before submitting a pull request"
      ],
      ", please make sure the following is done:"
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          "Fork the repository and create your branch from ",
          [
            "a",
            {
              "title": null,
              "href": "#Branch-Organization"
            },
            "proper branch"
          ],
          "."
        ]
      ],
      [
        "li",
        [
          "p",
          "Run ",
          [
            "code",
            "npm install"
          ],
          " in the repository root."
        ]
      ],
      [
        "li",
        [
          "p",
          "If you’ve fixed a bug or added code that should be tested, add tests!"
        ]
      ],
      [
        "li",
        [
          "p",
          "Ensure the test suite passes (npm run test). Tip: ",
          [
            "code",
            "npm test -- --watch TestName"
          ],
          " is helpful in development."
        ]
      ],
      [
        "li",
        [
          "p",
          "Run ",
          [
            "code",
            "npm test -- -u"
          ],
          " to update ",
          [
            "a",
            {
              "title": null,
              "href": "http://facebook.github.io/jest/docs/en/snapshot-testing.html#snapshot-testing-with-jest"
            },
            "jest snapshot"
          ],
          " and commit these changes as well (if has)."
        ]
      ],
      [
        "li",
        [
          "p",
          "Make sure your code lints (npm run lint). Tip: Lint runs automatically when you ",
          [
            "code",
            "git commit"
          ],
          "."
        ]
      ]
    ],
    [
      "p",
      "Sending a Pull Request to ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/react-component/"
        },
        "react-component"
      ],
      ":"
    ],
    [
      "p",
      "Since antd's components are based on react-component, sometimes you may need to send pull request to the corresponding react-component repository. If it's a bugfix pull request, after it's merged, the core team will release a patch release for that component as soon as possible, then you only need to do is reinstalling antd in your project to get the latest patch release. If it's a feature pull request, after it's merged, the core team will release a minor release, then you need raise another pull request to ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/"
        },
        "Ant Design"
      ],
      " to update dependencies, document and TypeScript interfaces (if needed)."
    ],
    [
      "h2",
      "Development Workflow"
    ],
    [
      "p",
      "After cloning antd, run ",
      [
        "code",
        "npm install"
      ],
      " to fetch its dependencies. Then, you can run several commands:"
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          [
            "code",
            "npm start"
          ],
          " runs Ant Design website locally."
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "npm run lint"
          ],
          " checks the code style."
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "npm test"
          ],
          " runs the complete test suite."
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "npm run compile"
          ],
          " compiles TypeScript code to the ",
          [
            "code",
            "lib"
          ],
          " and ",
          [
            "code",
            "es"
          ],
          " directory."
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "npm run dist"
          ],
          " creates UMD build of antd."
        ]
      ]
    ]
  ],
  "meta": {
    "order": 10,
    "title": "Contributing",
    "toc": false,
    "filename": "docs/react/contributing.en-US.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Code-of-Conduct",
          "title": "Code of Conduct"
        },
        "Code of Conduct"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Open-Development",
          "title": "Open Development"
        },
        "Open Development"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Branch-Organization",
          "title": "Branch Organization"
        },
        "Branch Organization"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Bugs",
          "title": "Bugs"
        },
        "Bugs"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Proposing-a-Change",
          "title": "Proposing a Change"
        },
        "Proposing a Change"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Your-First-Pull-Request",
          "title": "Your First Pull Request"
        },
        "Your First Pull Request"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Sending-a-Pull-Request",
          "title": "Sending a Pull Request"
        },
        "Sending a Pull Request"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Development-Workflow",
          "title": "Development Workflow"
        },
        "Development Workflow"
      ]
    ]
  ]
};

/***/ })

});