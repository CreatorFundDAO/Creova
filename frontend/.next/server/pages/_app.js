"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/icons */ \"@chakra-ui/icons\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__, framer_motion__WEBPACK_IMPORTED_MODULE_5__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__, framer_motion__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst Navbar = ()=>{\n    const { colorMode, toggleColorMode } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const navBg = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"linear(to-r, #14B8A6, #FFFFFF)\", \"#27272A\");\n    const navColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"black\", \"white\");\n    const hoverBg = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"teal.500\", \"teal.300\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        bgGradient: \"linear(to-r, #14B8A6, #FFFFFF)\",\n        px: 8,\n        py: 4,\n        position: \"fixed\",\n        top: \"0\",\n        width: \"100%\",\n        height: \"70px\",\n        zIndex: \"100\",\n        boxShadow: \"none\",\n        borderBottom: \"none\",\n        border: \"none\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n            align: \"center\",\n            justify: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                    href: \"/\",\n                    position: \"relative\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                        src: \"/logo.png\",\n                        alt: \"Creova Logo\",\n                        height: \"135px\",\n                        maxWidth: \"480px\",\n                        objectFit: \"contain\",\n                        position: \"absolute\",\n                        top: \"50%\",\n                        left: \"0\",\n                        transform: \"translateY(-50%)\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adamgough/CreatorFundDAO/frontend/components/Navbar.js\",\n                        lineNumber: 32,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/adamgough/CreatorFundDAO/frontend/components/Navbar.js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n                    gap: 6,\n                    align: \"center\",\n                    children: [\n                        [\n                            {\n                                name: \"Our Solutions\",\n                                path: \"/solutions\"\n                            },\n                            {\n                                name: \"About Creova\",\n                                path: \"/about\"\n                            },\n                            {\n                                name: \"Funding\",\n                                path: \"/funding\"\n                            },\n                            {\n                                name: \"User Dashboard\",\n                                path: \"/dashboard\"\n                            },\n                            {\n                                name: \"Transparency\",\n                                path: \"/transparency\"\n                            }\n                        ].map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                color: navColor,\n                                fontSize: \"lg\",\n                                fontWeight: \"bold\",\n                                variant: \"ghost\",\n                                _hover: {\n                                    bg: hoverBg,\n                                    color: \"white\",\n                                    transform: \"scale(1.05)\"\n                                },\n                                onClick: ()=>router.push(link.path),\n                                children: link.name\n                            }, link.name, false, {\n                                fileName: \"/Users/adamgough/CreatorFundDAO/frontend/components/Navbar.js\",\n                                lineNumber: 54,\n                                columnNumber: 25\n                            }, undefined)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.ConnectButton, {\n                            showBalance: false,\n                            chainStatus: \"none\",\n                            accountStatus: \"address\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adamgough/CreatorFundDAO/frontend/components/Navbar.js\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {\n                            \"aria-label\": \"Toggle theme\",\n                            icon: colorMode === \"light\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.MoonIcon, {}, void 0, false, {\n                                fileName: \"/Users/adamgough/CreatorFundDAO/frontend/components/Navbar.js\",\n                                lineNumber: 77,\n                                columnNumber: 55\n                            }, void 0) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.SunIcon, {}, void 0, false, {\n                                fileName: \"/Users/adamgough/CreatorFundDAO/frontend/components/Navbar.js\",\n                                lineNumber: 77,\n                                columnNumber: 70\n                            }, void 0),\n                            onClick: toggleColorMode,\n                            color: navColor,\n                            _hover: {\n                                bg: hoverBg,\n                                transform: \"scale(1.1)\",\n                                color: \"white\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/adamgough/CreatorFundDAO/frontend/components/Navbar.js\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adamgough/CreatorFundDAO/frontend/components/Navbar.js\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/adamgough/CreatorFundDAO/frontend/components/Navbar.js\",\n            lineNumber: 29,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/adamgough/CreatorFundDAO/frontend/components/Navbar.js\",\n        lineNumber: 16,\n        columnNumber: 1\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvTmF2YmFyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0c7QUFDMUQ7QUFDYjtBQUNlO0FBQ3BCO0FBRW5DLE1BQU1hLFNBQVM7SUFDWCxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsZUFBZSxFQUFFLEdBQUdULDhEQUFZQTtJQUNuRCxNQUFNVSxTQUFTTixzREFBU0E7SUFFeEIsTUFBTU8sUUFBUVYsbUVBQWlCQSxDQUFDLGtDQUFrQztJQUNsRSxNQUFNVyxXQUFXWCxtRUFBaUJBLENBQUMsU0FBUztJQUM1QyxNQUFNWSxVQUFVWixtRUFBaUJBLENBQUMsWUFBWTtJQUU5QyxxQkFDSiw4REFBQ1AsaURBQUdBO1FBQ0ZvQixZQUFXO1FBQ1hSLElBQUk7UUFDSlMsSUFBSTtRQUNKQyxVQUFTO1FBQ1RDLEtBQUk7UUFDSkMsT0FBTTtRQUNOQyxRQUFPO1FBQ1RDLFFBQU87UUFDTEMsV0FBVTtRQUNWQyxjQUFhO1FBQ2JDLFFBQU87a0JBRUcsNEVBQUM1QixrREFBSUE7WUFBQzZCLE9BQU07WUFBU0MsU0FBUTs7OEJBRXpCLDhEQUFDNUIsa0RBQUlBO29CQUFDNkIsTUFBSztvQkFBSVYsVUFBUzs4QkFDcEIsNEVBQUNsQixtREFBS0E7d0JBQ0Y2QixLQUFJO3dCQUNKQyxLQUFJO3dCQUNKVCxRQUFPO3dCQUNQVSxVQUFTO3dCQUNUQyxXQUFVO3dCQUNWZCxVQUFTO3dCQUNUQyxLQUFJO3dCQUNKYyxNQUFLO3dCQUNMQyxXQUFVOzs7Ozs7Ozs7Ozs4QkFLbEIsOERBQUNyQyxrREFBSUE7b0JBQUNzQyxLQUFLO29CQUFHVCxPQUFNOzt3QkFDZjs0QkFDbkI7Z0NBQUVVLE1BQU07Z0NBQWlCQyxNQUFNOzRCQUFhOzRCQUM1QztnQ0FBRUQsTUFBTTtnQ0FBZ0JDLE1BQU07NEJBQVM7NEJBQ3ZDO2dDQUFFRCxNQUFNO2dDQUFXQyxNQUFNOzRCQUFXOzRCQUNwQztnQ0FBRUQsTUFBTTtnQ0FBa0JDLE1BQU07NEJBQWE7NEJBQzdDO2dDQUFFRCxNQUFNO2dDQUFnQkMsTUFBTTs0QkFBZ0I7eUJBQy9DLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxxQkFDaUIsOERBQUN6QyxvREFBTUE7Z0NBRUgwQyxPQUFPMUI7Z0NBQ1AyQixVQUFTO2dDQUNUQyxZQUFXO2dDQUNYQyxTQUFRO2dDQUNSQyxRQUFRO29DQUFFQyxJQUFJOUI7b0NBQVN5QixPQUFPO29DQUFTTixXQUFXO2dDQUFjO2dDQUNoRVksU0FBUyxJQUFNbEMsT0FBT21DLElBQUksQ0FBQ1IsS0FBS0YsSUFBSTswQ0FFbkNFLEtBQUtILElBQUk7K0JBUkxHLEtBQUtILElBQUk7Ozs7O3NDQWF0Qiw4REFBQzdCLGlFQUFhQTs0QkFDVnlDLGFBQWE7NEJBQ2JDLGFBQVk7NEJBQ1pDLGVBQWM7Ozs7OztzQ0FJbEIsOERBQUNqRCx3REFBVUE7NEJBQ1BrRCxjQUFXOzRCQUNYQyxNQUFNMUMsY0FBYyx3QkFBVSw4REFBQ04sc0RBQVFBOzs7O3VEQUFNLDhEQUFDQyxxREFBT0E7Ozs7OzRCQUNyRHlDLFNBQVNuQzs0QkFDVDZCLE9BQU8xQjs0QkFDUDhCLFFBQVE7Z0NBQUVDLElBQUk5QjtnQ0FBU21CLFdBQVc7Z0NBQWNNLE9BQU87NEJBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZGO0FBRUEsaUVBQWUvQixNQUFNQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvYWRhbWdvdWdoL0NyZWF0b3JGdW5kREFPL2Zyb250ZW5kL2NvbXBvbmVudHMvTmF2YmFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgRmxleCwgQnV0dG9uLCBMaW5rLCBJbWFnZSwgSWNvbkJ1dHRvbiwgdXNlQ29sb3JNb2RlLCB1c2VDb2xvck1vZGVWYWx1ZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBNb29uSWNvbiwgU3VuSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IENvbm5lY3RCdXR0b24gfSBmcm9tIFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdFwiO1xuaW1wb3J0IHsgcHggfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjb2xvck1vZGUsIHRvZ2dsZUNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBuYXZCZyA9IHVzZUNvbG9yTW9kZVZhbHVlKFwibGluZWFyKHRvLXIsICMxNEI4QTYsICNGRkZGRkYpXCIsIFwiIzI3MjcyQVwiKTtcbiAgICBjb25zdCBuYXZDb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlKFwiYmxhY2tcIiwgXCJ3aGl0ZVwiKTtcbiAgICBjb25zdCBob3ZlckJnID0gdXNlQ29sb3JNb2RlVmFsdWUoXCJ0ZWFsLjUwMFwiLCBcInRlYWwuMzAwXCIpO1xuXG4gICAgcmV0dXJuIChcbjxCb3hcbiAgYmdHcmFkaWVudD1cImxpbmVhcih0by1yLCAjMTRCOEE2LCAjRkZGRkZGKVwiXG4gIHB4PXs4fVxuICBweT17NH0gLy8gYWRqdXN0IHRoaXMgZm9yIGNlbnRlcmluZ1xuICBwb3NpdGlvbj1cImZpeGVkXCJcbiAgdG9wPVwiMFwiXG4gIHdpZHRoPVwiMTAwJVwiXG4gIGhlaWdodD1cIjcwcHhcIlxuekluZGV4PVwiMTAwXCJcbiAgYm94U2hhZG93PVwibm9uZVwiXG4gIGJvcmRlckJvdHRvbT1cIm5vbmVcIlxuICBib3JkZXI9XCJub25lXCJcbj5cbiAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICB7LyogTG9nbyAqL31cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nby5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ3Jlb3ZhIExvZ29cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTM1cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9XCI0ODBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wPVwiNTAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZVkoLTUwJSlcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgIHsvKiBOYXZpZ2F0aW9uIExpbmtzICovfVxuICAgICAgICAgICAgICAgIDxGbGV4IGdhcD17Nn0gYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge1tcbiAgeyBuYW1lOiBcIk91ciBTb2x1dGlvbnNcIiwgcGF0aDogXCIvc29sdXRpb25zXCIgfSxcbiAgeyBuYW1lOiBcIkFib3V0IENyZW92YVwiLCBwYXRoOiBcIi9hYm91dFwiIH0sXG4gIHsgbmFtZTogXCJGdW5kaW5nXCIsIHBhdGg6IFwiL2Z1bmRpbmdcIiB9LFxuICB7IG5hbWU6IFwiVXNlciBEYXNoYm9hcmRcIiwgcGF0aDogXCIvZGFzaGJvYXJkXCIgfSxcbiAgeyBuYW1lOiBcIlRyYW5zcGFyZW5jeVwiLCBwYXRoOiBcIi90cmFuc3BhcmVuY3lcIiB9LFxuXS5tYXAoKGxpbmspID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2xpbmsubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17bmF2Q29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7IGJnOiBob3ZlckJnLCBjb2xvcjogXCJ3aGl0ZVwiLCB0cmFuc2Zvcm06IFwic2NhbGUoMS4wNSlcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGxpbmsucGF0aCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpbmsubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgICAgICAgICB7LyogQ29ubmVjdCBXYWxsZXQgKFJhaW5ib3dLaXQpICovfVxuICAgICAgICAgICAgICAgICAgICA8Q29ubmVjdEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0JhbGFuY2U9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5TdGF0dXM9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRTdGF0dXM9XCJhZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICB7LyogRGFyayBNb2RlIFRvZ2dsZSAqL31cbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgdGhlbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17Y29sb3JNb2RlID09PSBcImxpZ2h0XCIgPyA8TW9vbkljb24gLz4gOiA8U3VuSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNvbG9yTW9kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtuYXZDb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBiZzogaG92ZXJCZywgdHJhbnNmb3JtOiBcInNjYWxlKDEuMSlcIiwgY29sb3I6IFwid2hpdGVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9Cb3g+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXSwibmFtZXMiOlsiQm94IiwiRmxleCIsIkJ1dHRvbiIsIkxpbmsiLCJJbWFnZSIsIkljb25CdXR0b24iLCJ1c2VDb2xvck1vZGUiLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIk1vb25JY29uIiwiU3VuSWNvbiIsInVzZVJvdXRlciIsIkNvbm5lY3RCdXR0b24iLCJweCIsIk5hdmJhciIsImNvbG9yTW9kZSIsInRvZ2dsZUNvbG9yTW9kZSIsInJvdXRlciIsIm5hdkJnIiwibmF2Q29sb3IiLCJob3ZlckJnIiwiYmdHcmFkaWVudCIsInB5IiwicG9zaXRpb24iLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsInpJbmRleCIsImJveFNoYWRvdyIsImJvcmRlckJvdHRvbSIsImJvcmRlciIsImFsaWduIiwianVzdGlmeSIsImhyZWYiLCJzcmMiLCJhbHQiLCJtYXhXaWR0aCIsIm9iamVjdEZpdCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJnYXAiLCJuYW1lIiwicGF0aCIsIm1hcCIsImxpbmsiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInZhcmlhbnQiLCJfaG92ZXIiLCJiZyIsIm9uQ2xpY2siLCJwdXNoIiwic2hvd0JhbGFuY2UiLCJjaGFpblN0YXR1cyIsImFjY291bnRTdGF0dXMiLCJhcmlhLWxhYmVsIiwiaWNvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/Navbar.js\n");

/***/ }),

/***/ "(pages-dir-node)/./lib/wagmiConfig.ts":
/*!****************************!*\
  !*** ./lib/wagmiConfig.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   wagmiConfig: () => (/* binding */ wagmiConfig)\n/* harmony export */ });\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__, wagmi_chains__WEBPACK_IMPORTED_MODULE_1__]);\n([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__, wagmi_chains__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/* __next_internal_client_entry_do_not_use__ wagmiConfig auto */ \n\nconst walletConnectProjectId = \"991616039e117c2b075fb08360b401f8\";\nconst wagmiConfig = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.getDefaultConfig)({\n    appName: \"Creova\",\n    projectId: walletConnectProjectId,\n    chains: [\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_1__.mainnet,\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_1__.polygon,\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_1__.optimism,\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_1__.arbitrum,\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_1__.sepolia\n    ],\n    ssr: true\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2xpYi93YWdtaUNvbmZpZy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7aUVBRTBEO0FBQ21CO0FBRTdFLE1BQU1NLHlCQUF5QjtBQUV4QixNQUFNQyxjQUFjUCx3RUFBZ0JBLENBQUM7SUFDMUNRLFNBQVM7SUFDVEMsV0FBV0g7SUFDWEksUUFBUTtRQUFDVCxpREFBT0E7UUFBRUMsaURBQU9BO1FBQUVDLGtEQUFRQTtRQUFFQyxrREFBUUE7UUFBRUMsaURBQU9BO0tBQUM7SUFDdkRNLEtBQUs7QUFDUCxHQUFHIiwic291cmNlcyI6WyIvVXNlcnMvYWRhbWdvdWdoL0NyZWF0b3JGdW5kREFPL2Zyb250ZW5kL2xpYi93YWdtaUNvbmZpZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IGdldERlZmF1bHRDb25maWcgfSBmcm9tICdAcmFpbmJvdy1tZS9yYWluYm93a2l0JztcbmltcG9ydCB7IG1haW5uZXQsIHBvbHlnb24sIG9wdGltaXNtLCBhcmJpdHJ1bSwgc2Vwb2xpYSB9IGZyb20gJ3dhZ21pL2NoYWlucyc7XG5cbmNvbnN0IHdhbGxldENvbm5lY3RQcm9qZWN0SWQgPSBcIjk5MTYxNjAzOWUxMTdjMmIwNzVmYjA4MzYwYjQwMWY4XCI7XG5cbmV4cG9ydCBjb25zdCB3YWdtaUNvbmZpZyA9IGdldERlZmF1bHRDb25maWcoe1xuICBhcHBOYW1lOiBcIkNyZW92YVwiLFxuICBwcm9qZWN0SWQ6IHdhbGxldENvbm5lY3RQcm9qZWN0SWQsXG4gIGNoYWluczogW21haW5uZXQsIHBvbHlnb24sIG9wdGltaXNtLCBhcmJpdHJ1bSwgc2Vwb2xpYV0sXG4gIHNzcjogdHJ1ZSxcbn0pOyJdLCJuYW1lcyI6WyJnZXREZWZhdWx0Q29uZmlnIiwibWFpbm5ldCIsInBvbHlnb24iLCJvcHRpbWlzbSIsImFyYml0cnVtIiwic2Vwb2xpYSIsIndhbGxldENvbm5lY3RQcm9qZWN0SWQiLCJ3YWdtaUNvbmZpZyIsImFwcE5hbWUiLCJwcm9qZWN0SWQiLCJjaGFpbnMiLCJzc3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./lib/wagmiConfig.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _lib_wagmiConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/wagmiConfig */ \"(pages-dir-node)/./lib/wagmiConfig.ts\");\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Navbar */ \"(pages-dir-node)/./components/Navbar.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"(pages-dir-node)/./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/theme */ \"(pages-dir-node)/./styles/theme.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, wagmi__WEBPACK_IMPORTED_MODULE_2__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, _lib_wagmiConfig__WEBPACK_IMPORTED_MODULE_4__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__, _components_Navbar__WEBPACK_IMPORTED_MODULE_6__, _styles_theme__WEBPACK_IMPORTED_MODULE_9__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, wagmi__WEBPACK_IMPORTED_MODULE_2__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, _lib_wagmiConfig__WEBPACK_IMPORTED_MODULE_4__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__, _components_Navbar__WEBPACK_IMPORTED_MODULE_6__, _styles_theme__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n // ✅ Import your Chakra UI custom theme\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();\nconst customRainbowKitTheme = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__.lightTheme)({\n    accentColor: \"#14B8A6\",\n    accentColorForeground: \"#FFFFFF\",\n    borderRadius: \"medium\",\n    fontStack: \"system\"\n});\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n        theme: _styles_theme__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico?v=2\",\n                        type: \"image/x-icon\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adamgough/CreatorFundDAO/frontend/pages/_app.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Creova - Decentralised Creator Funding\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adamgough/CreatorFundDAO/frontend/pages/_app.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adamgough/CreatorFundDAO/frontend/pages/_app.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_2__.WagmiConfig, {\n                config: _lib_wagmiConfig__WEBPACK_IMPORTED_MODULE_4__.wagmiConfig,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {\n                    client: queryClient,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__.RainbowKitProvider, {\n                        theme: customRainbowKitTheme,\n                        coolMode: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/adamgough/CreatorFundDAO/frontend/pages/_app.js\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                ...pageProps\n                            }, void 0, false, {\n                                fileName: \"/Users/adamgough/CreatorFundDAO/frontend/pages/_app.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adamgough/CreatorFundDAO/frontend/pages/_app.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/adamgough/CreatorFundDAO/frontend/pages/_app.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/adamgough/CreatorFundDAO/frontend/pages/_app.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adamgough/CreatorFundDAO/frontend/pages/_app.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ2Q7QUFDcUM7QUFDeEI7QUFDdUI7QUFDOUI7QUFDYjtBQUNjO0FBQ0ssQ0FBQyx1Q0FBdUM7QUFFeEYsTUFBTVUsY0FBYyxJQUFJUiw4REFBV0E7QUFFbkMsTUFBTVMsd0JBQXdCTCxrRUFBVUEsQ0FBQztJQUN2Q00sYUFBYTtJQUNiQyx1QkFBdUI7SUFDdkJDLGNBQWM7SUFDZEMsV0FBVztBQUNiO0FBRUEsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ2xCLDREQUFjQTtRQUFDbUIsT0FBT1YscURBQWlCQTs7WUFBRTswQkFDeEMsOERBQUNELGtEQUFJQTs7a0NBQ0gsOERBQUNZO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLO3dCQUFtQkMsTUFBSzs7Ozs7O2tDQUM5Qyw4REFBQ0M7a0NBQU07Ozs7Ozs7Ozs7OzswQkFFVCw4REFBQ3ZCLDhDQUFXQTtnQkFBQ3dCLFFBQVFyQix5REFBV0E7MEJBQzlCLDRFQUFDRCxzRUFBbUJBO29CQUFDdUIsUUFBUWhCOzhCQUMzQiw0RUFBQ0wsc0VBQWtCQTt3QkFBQ2MsT0FBT1I7d0JBQXVCZ0IsUUFBUTs7MENBQ3hELDhEQUFDcEIsMERBQU1BOzs7OzswQ0FDUCw4REFBQ1U7Z0NBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQztBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvYWRhbWdvdWdoL0NyZWF0b3JGdW5kREFPL2Zyb250ZW5kL3BhZ2VzL19hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgV2FnbWlDb25maWcgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgd2FnbWlDb25maWcgfSBmcm9tIFwiLi4vbGliL3dhZ21pQ29uZmlnXCI7XG5pbXBvcnQgeyBSYWluYm93S2l0UHJvdmlkZXIsIGxpZ2h0VGhlbWUgfSBmcm9tIFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdFwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBcIkByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IGN1c3RvbUNoYWtyYVRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjsgLy8g4pyFIEltcG9ydCB5b3VyIENoYWtyYSBVSSBjdXN0b20gdGhlbWVcblxuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcblxuY29uc3QgY3VzdG9tUmFpbmJvd0tpdFRoZW1lID0gbGlnaHRUaGVtZSh7XG4gIGFjY2VudENvbG9yOiBcIiMxNEI4QTZcIixcbiAgYWNjZW50Q29sb3JGb3JlZ3JvdW5kOiBcIiNGRkZGRkZcIixcbiAgYm9yZGVyUmFkaXVzOiBcIm1lZGl1bVwiLFxuICBmb250U3RhY2s6IFwic3lzdGVtXCIsXG59KTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXtjdXN0b21DaGFrcmFUaGVtZX0+IHsvKiDinIUgSW5qZWN0IENoYWtyYSBjdXN0b20gdGhlbWUgKi99XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY28/dj0yXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIC8+XG4gICAgICAgIDx0aXRsZT5DcmVvdmEgLSBEZWNlbnRyYWxpc2VkIENyZWF0b3IgRnVuZGluZzwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8V2FnbWlDb25maWcgY29uZmlnPXt3YWdtaUNvbmZpZ30+XG4gICAgICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgICAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgdGhlbWU9e2N1c3RvbVJhaW5ib3dLaXRUaGVtZX0gY29vbE1vZGU+XG4gICAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9SYWluYm93S2l0UHJvdmlkZXI+XG4gICAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgICAgIDwvV2FnbWlDb25maWc+XG4gICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sIm5hbWVzIjpbIkNoYWtyYVByb3ZpZGVyIiwiV2FnbWlDb25maWciLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJ3YWdtaUNvbmZpZyIsIlJhaW5ib3dLaXRQcm92aWRlciIsImxpZ2h0VGhlbWUiLCJOYXZiYXIiLCJIZWFkIiwiY3VzdG9tQ2hha3JhVGhlbWUiLCJxdWVyeUNsaWVudCIsImN1c3RvbVJhaW5ib3dLaXRUaGVtZSIsImFjY2VudENvbG9yIiwiYWNjZW50Q29sb3JGb3JlZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwiZm9udFN0YWNrIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsImxpbmsiLCJyZWwiLCJocmVmIiwidHlwZSIsInRpdGxlIiwiY29uZmlnIiwiY2xpZW50IiwiY29vbE1vZGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/theme.js":
/*!*************************!*\
  !*** ./styles/theme.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__]);\n_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// frontend/config/theme.js\n\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    colors: {\n        brand: {\n            50: \"#e6fffa\",\n            100: \"#b2f5ea\",\n            200: \"#81e6d9\",\n            300: \"#4fd1c5\",\n            400: \"#38b2ac\",\n            500: \"#14B8A6\",\n            600: \"#0F766E\",\n            700: \"#285e61\",\n            800: \"#234e52\",\n            900: \"#1d4044\"\n        }\n    },\n    fonts: {\n        heading: \"'Inter', sans-serif\",\n        body: \"'Inter', sans-serif\"\n    },\n    styles: {\n        global: {\n            body: {\n                bgGradient: \"linear(to-br, #14B8A6, #ffffff)\",\n                color: \"gray.900\"\n            },\n            h1: {\n                fontWeight: \"bold\",\n                color: \"gray.800\"\n            },\n            button: {\n                _hover: {\n                    transform: \"translateY(-3px)\",\n                    boxShadow: \"lg\"\n                }\n            }\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3N0eWxlcy90aGVtZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDJCQUEyQjtBQUNvQjtBQUUvQyxNQUFNQyxRQUFRRCw2REFBV0EsQ0FBQztJQUN4QkUsUUFBUTtRQUNOQyxPQUFPO1lBQ0wsSUFBSTtZQUNKLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztRQUNQO0lBQ0Y7SUFDQUMsT0FBTztRQUNMQyxTQUFTO1FBQ1RDLE1BQU07SUFDUjtJQUNBQyxRQUFRO1FBQ05DLFFBQVE7WUFDTkYsTUFBTTtnQkFDSkcsWUFBWTtnQkFDWkMsT0FBTztZQUNUO1lBQ0FDLElBQUk7Z0JBQ0ZDLFlBQVk7Z0JBQ1pGLE9BQU87WUFDVDtZQUNBRyxRQUFRO2dCQUNOQyxRQUFRO29CQUNOQyxXQUFXO29CQUNYQyxXQUFXO2dCQUNiO1lBQ0Y7UUFDRjtJQUNGO0FBQ0Y7QUFFQSxpRUFBZWYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2FkYW1nb3VnaC9DcmVhdG9yRnVuZERBTy9mcm9udGVuZC9zdHlsZXMvdGhlbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZnJvbnRlbmQvY29uZmlnL3RoZW1lLmpzXG5pbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xuICBjb2xvcnM6IHtcbiAgICBicmFuZDoge1xuICAgICAgNTA6IFwiI2U2ZmZmYVwiLFxuICAgICAgMTAwOiBcIiNiMmY1ZWFcIixcbiAgICAgIDIwMDogXCIjODFlNmQ5XCIsXG4gICAgICAzMDA6IFwiIzRmZDFjNVwiLFxuICAgICAgNDAwOiBcIiMzOGIyYWNcIixcbiAgICAgIDUwMDogXCIjMTRCOEE2XCIsIC8vIE1haW4gQ3Jlb3ZhIHRlYWwgY29sb3JcbiAgICAgIDYwMDogXCIjMEY3NjZFXCIsXG4gICAgICA3MDA6IFwiIzI4NWU2MVwiLFxuICAgICAgODAwOiBcIiMyMzRlNTJcIixcbiAgICAgIDkwMDogXCIjMWQ0MDQ0XCIsXG4gICAgfSxcbiAgfSxcbiAgZm9udHM6IHtcbiAgICBoZWFkaW5nOiBcIidJbnRlcicsIHNhbnMtc2VyaWZcIixcbiAgICBib2R5OiBcIidJbnRlcicsIHNhbnMtc2VyaWZcIixcbiAgfSxcbiAgc3R5bGVzOiB7XG4gICAgZ2xvYmFsOiB7XG4gICAgICBib2R5OiB7XG4gICAgICAgIGJnR3JhZGllbnQ6IFwibGluZWFyKHRvLWJyLCAjMTRCOEE2LCAjZmZmZmZmKVwiLFxuICAgICAgICBjb2xvcjogXCJncmF5LjkwMFwiLFxuICAgICAgfSxcbiAgICAgIGgxOiB7XG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICBjb2xvcjogXCJncmF5LjgwMFwiLFxuICAgICAgfSxcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICBfaG92ZXI6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtM3B4KVwiLFxuICAgICAgICAgIGJveFNoYWRvdzogXCJsZ1wiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lOyJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsInRoZW1lIiwiY29sb3JzIiwiYnJhbmQiLCJmb250cyIsImhlYWRpbmciLCJib2R5Iiwic3R5bGVzIiwiZ2xvYmFsIiwiYmdHcmFkaWVudCIsImNvbG9yIiwiaDEiLCJmb250V2VpZ2h0IiwiYnV0dG9uIiwiX2hvdmVyIiwidHJhbnNmb3JtIiwiYm94U2hhZG93Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./styles/theme.js\n");

/***/ }),

/***/ "@chakra-ui/icons":
/*!***********************************!*\
  !*** external "@chakra-ui/icons" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/icons");;

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("wagmi/chains");;

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@rainbow-me"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.js")));
module.exports = __webpack_exports__;

})();