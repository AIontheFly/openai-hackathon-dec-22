"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api_whisper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/whisper */ \"./pages/api/whisper.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    // prototype for text to speech\n    // useEffect(() => {\n    //   const synth = window.speechSynthesis;\n    //   const voices = synth.getVoices(); \n    //   let text = 'Hello World';\n    //   const sayThis = new SpeechSynthesisUtterance(text); \n    //   sayThis.voice = voices[0]; // 0, 17, 10, 60, 58, 53, 51, 50, 49, 39, 33, 26\n    //   synth.speak(sayThis);\n    // }, []);\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    console.log(\"text:\", text);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{}, [\n        text\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_api_whisper__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                setText: setText,\n                children: \"text\"\n            }, void 0, false, {\n                fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                        children: [\n                            \"Welcome to \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://nextjs.org\",\n                                children: \"Next.js!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 22\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().description),\n                        children: [\n                            \"Get started by editing\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().code),\n                                children: \"pages/index.tsx\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().grid),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://nextjs.org/docs\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Documentation →\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Find in-depth information about Next.js features and API.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://nextjs.org/learn\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Learn →\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Learn about Next.js in an interactive course with quizzes!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://github.com/vercel/next.js/tree/canary/examples\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Examples →\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Discover and deploy boilerplate example Next.js projects.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Deploy →\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Instantly deploy your Next.js site to a public URL with Vercel.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: [\n                        \"Powered by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().logo),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/vercel.svg\",\n                                alt: \"Vercel Logo\",\n                                width: 72,\n                                height: 16\n                            }, void 0, false, {\n                                fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stephen/Codesmith/Projects/openai-hackathon-dec-22/pages/index.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"4ujWDM02ns4tez/JXYjL1bw6ipA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTRCO0FBQ0U7QUFDZ0I7QUFDRjtBQUNSO0FBRXJCLFNBQVNNLE9BQU87O0lBRTdCLCtCQUErQjtJQUMvQixvQkFBb0I7SUFDcEIsMENBQTBDO0lBQzFDLHVDQUF1QztJQUN2Qyw4QkFBOEI7SUFDOUIseURBQXlEO0lBQ3pELGdGQUFnRjtJQUNoRiwwQkFBMEI7SUFDMUIsVUFBVTtJQUVWLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNqQ0ssUUFBUUMsR0FBRyxDQUFDLFNBQVNIO0lBRXJCSixnREFBU0EsQ0FBQyxJQUFNLENBQ2QsR0FBRztRQUFDSTtLQUFLO0lBRVgscUJBRUUsOERBQUNJO1FBQUlDLFdBQVdWLDBFQUFnQjs7MEJBQzlCLDhEQUFDRixrREFBSUE7O2tDQUNILDhEQUFDYztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNmLG9EQUFPQTtnQkFBQ0csU0FBU0E7MEJBQVM7Ozs7OzswQkFDM0IsOERBQUNhO2dCQUFLVCxXQUFXVixxRUFBVzs7a0NBQzFCLDhEQUFDb0I7d0JBQUdWLFdBQVdWLHNFQUFZOzs0QkFBRTswQ0FDaEIsOERBQUNxQjtnQ0FBRUgsTUFBSzswQ0FBcUI7Ozs7Ozs7Ozs7OztrQ0FHMUMsOERBQUNJO3dCQUFFWixXQUFXViw0RUFBa0I7OzRCQUFFOzRCQUNUOzBDQUN2Qiw4REFBQ3dCO2dDQUFLZCxXQUFXVixxRUFBVzswQ0FBRTs7Ozs7Ozs7Ozs7O2tDQUdoQyw4REFBQ1M7d0JBQUlDLFdBQVdWLHFFQUFXOzswQ0FDekIsOERBQUNxQjtnQ0FBRUgsTUFBSztnQ0FBMEJSLFdBQVdWLHFFQUFXOztrREFDdEQsOERBQUMyQjtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDTDtrREFBRTs7Ozs7Ozs7Ozs7OzBDQUdMLDhEQUFDRDtnQ0FBRUgsTUFBSztnQ0FBMkJSLFdBQVdWLHFFQUFXOztrREFDdkQsOERBQUMyQjtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDTDtrREFBRTs7Ozs7Ozs7Ozs7OzBDQUdMLDhEQUFDRDtnQ0FDQ0gsTUFBSztnQ0FDTFIsV0FBV1YscUVBQVc7O2tEQUV0Qiw4REFBQzJCO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNMO2tEQUFFOzs7Ozs7Ozs7Ozs7MENBR0wsOERBQUNEO2dDQUNDSCxNQUFLO2dDQUNMVSxRQUFPO2dDQUNQWCxLQUFJO2dDQUNKUCxXQUFXVixxRUFBVzs7a0RBRXRCLDhEQUFDMkI7a0RBQUc7Ozs7OztrREFDSiw4REFBQ0w7a0RBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPVCw4REFBQ087Z0JBQU9uQixXQUFXVix1RUFBYTswQkFDOUIsNEVBQUNxQjtvQkFDQ0gsTUFBSztvQkFDTFUsUUFBTztvQkFDUFgsS0FBSTs7d0JBQ0w7d0JBQ1k7c0NBQ1gsOERBQUNhOzRCQUFLcEIsV0FBV1YscUVBQVc7c0NBQzFCLDRFQUFDRCxtREFBS0E7Z0NBQUNpQyxLQUFJO2dDQUFjQyxLQUFJO2dDQUFjQyxPQUFPO2dDQUFJQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFFLENBQUM7R0FwRnVCL0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFdoaXNwZXIgZnJvbSAnLi9hcGkvd2hpc3Blcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgLy8gcHJvdG90eXBlIGZvciB0ZXh0IHRvIHNwZWVjaFxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnN0IHN5bnRoID0gd2luZG93LnNwZWVjaFN5bnRoZXNpcztcbiAgLy8gICBjb25zdCB2b2ljZXMgPSBzeW50aC5nZXRWb2ljZXMoKTsgXG4gIC8vICAgbGV0IHRleHQgPSAnSGVsbG8gV29ybGQnO1xuICAvLyAgIGNvbnN0IHNheVRoaXMgPSBuZXcgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlKHRleHQpOyBcbiAgLy8gICBzYXlUaGlzLnZvaWNlID0gdm9pY2VzWzBdOyAvLyAwLCAxNywgMTAsIDYwLCA1OCwgNTMsIDUxLCA1MCwgNDksIDM5LCAzMywgMjZcbiAgLy8gICBzeW50aC5zcGVhayhzYXlUaGlzKTtcbiAgLy8gfSwgW10pO1xuXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc29sZS5sb2coXCJ0ZXh0OlwiLCB0ZXh0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIH0sIFt0ZXh0XSk7XG4gICAgXG4gIHJldHVybiAoXG4gICBcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFdoaXNwZXIgc2V0VGV4dD17c2V0VGV4dH0+dGV4dDwvV2hpc3Blcj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIFdlbGNvbWUgdG8gPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZ1wiPk5leHQuanMhPC9hPlxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBHZXQgc3RhcnRlZCBieSBlZGl0aW5neycgJ31cbiAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9e3N0eWxlcy5jb2RlfT5wYWdlcy9pbmRleC50c3g8L2NvZGU+XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvZG9jc1wiIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGgyPkRvY3VtZW50YXRpb24gJnJhcnI7PC9oMj5cbiAgICAgICAgICAgIDxwPkZpbmQgaW4tZGVwdGggaW5mb3JtYXRpb24gYWJvdXQgTmV4dC5qcyBmZWF0dXJlcyBhbmQgQVBJLjwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuXCIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8aDI+TGVhcm4gJnJhcnI7PC9oMj5cbiAgICAgICAgICAgIDxwPkxlYXJuIGFib3V0IE5leHQuanMgaW4gYW4gaW50ZXJhY3RpdmUgY291cnNlIHdpdGggcXVpenplcyE8L3A+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvdHJlZS9jYW5hcnkvZXhhbXBsZXNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDI+RXhhbXBsZXMgJnJhcnI7PC9oMj5cbiAgICAgICAgICAgIDxwPkRpc2NvdmVyIGFuZCBkZXBsb3kgYm9pbGVycGxhdGUgZXhhbXBsZSBOZXh0LmpzIHByb2plY3RzLjwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbS9uZXc/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDI+RGVwbG95ICZyYXJyOzwvaDI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgSW5zdGFudGx5IGRlcGxveSB5b3VyIE5leHQuanMgc2l0ZSB0byBhIHB1YmxpYyBVUkwgd2l0aCBWZXJjZWwuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQb3dlcmVkIGJ5eycgJ31cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgd2lkdGg9ezcyfSBoZWlnaHQ9ezE2fSAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIldoaXNwZXIiLCJIb21lIiwidGV4dCIsInNldFRleHQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsImEiLCJwIiwiZGVzY3JpcHRpb24iLCJjb2RlIiwiZ3JpZCIsImNhcmQiLCJoMiIsInRhcmdldCIsImZvb3RlciIsInNwYW4iLCJsb2dvIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});