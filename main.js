/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --white-color: #eeeed2;\n  --black-color: #769656;\n  --bg-color: #27272a;\n  --text-color: #f1f5f9;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  height: 100vh;\n  width: 100vw;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--bg-color);\n}\n\n.header {\n  padding: 20px;\n  font-size: 3rem;\n  font-weight: 500;\n  color: var(--text-color);\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.path-text {\n  font-size: 2rem;\n  color: var(--text-color);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n}\n\n.chessboard {\n  margin-top: 100px;\n  margin-right: 100px;\n  display: grid;\n  height: fit-content;\n  width: fit-content;\n  grid-template-columns: repeat(9, 1fr);\n  grid-template-rows: repeat(9, 1fr);\n}\n\n.chessboard.unclickable {\n  pointer-events: none;\n}\n\n.chess-block {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 90px;\n  width: 90px;\n  border: 1px solid black;\n  opacity: 80%;\n  transition: 0.4s;\n  text-align: center;\n  font-size: 2.5rem;\n  font-weight: 600;\n}\n\n.chess-block:hover {\n  opacity: 100%;\n  transition: 0.4s;\n}\n\n.chess-block.black {\n  background-color: var(--black-color);\n}\n\n.chess-block.white {\n  background-color: var(--white-color);\n}\n\n.notation {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--text-color);\n}\n\n.notation-side {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.8rem;\n  font-weight: 700;\n  justify-content: center;\n  align-items: center;\n  color: var(--text-color);\n}\n\n#restart {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: none;\n  padding: 20px;\n  border-radius: 20px;\n  width: 150px;\n  height: 50px;\n  font-size: 1.2rem;\n  color: var(--text-color);\n  border: 2px solid var(--text-color);\n  cursor: pointer;\n  transition: 0.4s;\n}\n\n#restart:hover {\n  width: 170px;\n  font-size: 1.3rem;\n  transition: 0.4s;\n}\n\n@media screen and (min-width: 300px) {\n  .header {\n    padding: 10px;\n    font-size: 1.6rem;\n  }\n  .chessboard {\n    margin-top: 20px;\n    margin-right: 20px;\n  }\n\n  .container {\n    flex-direction: column;\n  }\n\n  .path-text {\n    font-size: 1.4rem;\n  }\n\n  .chess-block {\n    height: 38px;\n    width: 38px;\n    font-size: 1.8rem;\n    font-weight: 600;\n  }\n}\n\n@media screen and (min-width: 600px) {\n  .header {\n    padding: 10px;\n    font-size: 2rem;\n  }\n  .chessboard {\n    margin-top: 20px;\n    margin-right: 20px;\n  }\n\n  .container {\n    flex-direction: column;\n  }\n\n  .path-text {\n    font-size: 1.5rem;\n  }\n\n  .chess-block {\n    height: 50px;\n    width: 50px;\n    font-size: 2rem;\n    font-weight: 600;\n  }\n}\n\n@media screen and (min-width: 950px) {\n  .header {\n    padding: 20px;\n    font-size: 2rem;\n  }\n  .chessboard {\n    margin-top: 40px;\n    margin-right: 40px;\n  }\n\n  .container {\n    flex-direction: row;\n  }\n\n  .path-text {\n    font-size: 1.8rem;\n  }\n\n  .chess-block {\n    height: 70px;\n    width: 70px;\n    font-size: 2rem;\n    font-weight: 600;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  .header {\n    padding: 20px;\n    font-size: 2.5rem;\n  }\n  .chessboard {\n    margin-top: 50px;\n    margin-right: 50px;\n  }\n\n  .container {\n    flex-direction: row;\n  }\n\n  .path-text {\n    font-size: 2rem;\n  }\n\n  .chess-block {\n    height: 80px;\n    width: 80px;\n    font-size: 2rem;\n    font-weight: 600;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://knight-traversal/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://knight-traversal/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://knight-traversal/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://knight-traversal/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://knight-traversal/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://knight-traversal/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://knight-traversal/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://knight-traversal/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://knight-traversal/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://knight-traversal/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/BFS.js":
/*!********************!*\
  !*** ./src/BFS.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ knightMoves)\n/* harmony export */ });\n/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./position */ \"./src/position.js\");\n\n\n\n// implementation of breadth first search algorithm for finding the shortest path\n\nfunction knightMoves(start, end) {\n  const q = [];\n  q.push((0,_position__WEBPACK_IMPORTED_MODULE_0__.position)(start));\n  let path = bfs(q, end);\n\n  return reconstructPath(path);\n}\n\nfunction reconstructPath(path) {\n  path.pos[0] = _position__WEBPACK_IMPORTED_MODULE_0__.xMap[path.pos[0]];\n  let pathArr = [];\n\n  let pathString = path.pos[0] + path.pos[1];\n  pathArr.push(pathString);\n\n  while (path.parent) {\n    path = path.parent;\n    path.pos[0] = _position__WEBPACK_IMPORTED_MODULE_0__.xMap[path.pos[0]];\n    let pathString = path.pos[0] + path.pos[1];\n    pathArr.push(pathString);\n  }\n\n  return pathArr;\n}\n\nfunction bfs(q, end) {\n  while (q.length > 0) {\n    let positionProcessing = q.shift();\n    let arr = positionProcessing.pos;\n\n    if (arr[0] === end[0] && arr[1] === end[1]) return positionProcessing;\n\n    if (arr[0] + 2 <= 8 && arr[1] + 1 <= 8) {\n      q.push(\n        (0,_position__WEBPACK_IMPORTED_MODULE_0__.position)(\n          [arr[0] + 2, arr[1] + 1],\n          positionProcessing,\n          positionProcessing.move + 1\n        )\n      );\n    }\n\n    if (arr[0] + 2 <= 8 && arr[1] - 1 >= 1) {\n      q.push(\n        (0,_position__WEBPACK_IMPORTED_MODULE_0__.position)(\n          [arr[0] + 2, arr[1] - 1],\n          positionProcessing,\n          positionProcessing.move + 1\n        )\n      );\n    }\n\n    if (arr[0] - 2 >= 1 && arr[1] - 1 >= 1) {\n      q.push(\n        (0,_position__WEBPACK_IMPORTED_MODULE_0__.position)(\n          [arr[0] - 2, arr[1] - 1],\n          positionProcessing,\n          positionProcessing.move + 1\n        )\n      );\n    }\n\n    if (arr[0] - 2 >= 1 && arr[1] + 1 <= 8) {\n      q.push(\n        (0,_position__WEBPACK_IMPORTED_MODULE_0__.position)(\n          [arr[0] - 2, arr[1] + 1],\n          positionProcessing,\n          positionProcessing.move + 1\n        )\n      );\n    }\n\n    if (arr[0] + 1 <= 8 && arr[1] - 2 >= 1) {\n      q.push(\n        (0,_position__WEBPACK_IMPORTED_MODULE_0__.position)(\n          [arr[0] + 1, arr[1] - 2],\n          positionProcessing,\n          positionProcessing.move + 1\n        )\n      );\n    }\n\n    if (arr[0] - 1 >= 1 && arr[1] - 2 >= 1) {\n      q.push(\n        (0,_position__WEBPACK_IMPORTED_MODULE_0__.position)(\n          [arr[0] - 1, arr[1] - 2],\n          positionProcessing,\n          positionProcessing.move + 1\n        )\n      );\n    }\n\n    if (arr[0] + 1 <= 8 && arr[1] + 2 <= 8) {\n      q.push(\n        (0,_position__WEBPACK_IMPORTED_MODULE_0__.position)(\n          [arr[0] + 1, arr[1] + 2],\n          positionProcessing,\n          positionProcessing.move + 1\n        )\n      );\n    }\n\n    if (arr[0] - 1 >= 1 && arr[1] + 2 <= 8) {\n      q.push(\n        (0,_position__WEBPACK_IMPORTED_MODULE_0__.position)(\n          [arr[0] - 1, arr[1] + 2],\n          positionProcessing,\n          positionProcessing.move + 1\n        )\n      );\n    }\n  }\n}\n\n\n//# sourceURL=webpack://knight-traversal/./src/BFS.js?");

/***/ }),

/***/ "./src/chessboard.js":
/*!***************************!*\
  !*** ./src/chessboard.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createChessboard: () => (/* binding */ createChessboard),\n/* harmony export */   resetChessboard: () => (/* binding */ resetChessboard),\n/* harmony export */   resetPathText: () => (/* binding */ resetPathText)\n/* harmony export */ });\n/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./position */ \"./src/position.js\");\n/* harmony import */ var _simulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simulation */ \"./src/simulation.js\");\n\n\n\nfunction createChessboard() {\n  const chessboard = document.querySelector(\".chessboard\");\n\n  for (let i = 8; i >= 1; i--) {\n    for (let j = 0; j <= 8; j++) {\n      if (j === 0) {\n        const sideNotation = document.createElement(\"div\");\n        sideNotation.classList.add(\"notation-side\");\n        sideNotation.textContent = i;\n        chessboard.appendChild(sideNotation);\n      } else {\n        const chessblock = document.createElement(\"div\");\n        chessblock.classList.add(\"chess-block\");\n        chessblock.id = `${_position__WEBPACK_IMPORTED_MODULE_0__.xMap[j]}${i}`;\n\n        if (i % 2 !== 0) {\n          if (j % 2 !== 0) chessblock.classList.add(\"black\");\n          else chessblock.classList.add(\"white\");\n        } else {\n          if (j % 2 === 0) chessblock.classList.add(\"black\");\n          else chessblock.classList.add(\"white\");\n        }\n\n        addListenersToBlocks(chessblock);\n        chessboard.appendChild(chessblock);\n      }\n    }\n  }\n\n  for (let i = 0; i <= 8; i++) {\n    const notation = document.createElement(\"div\");\n    notation.classList.add(\"notation\");\n    if (i !== 0) notation.textContent = _position__WEBPACK_IMPORTED_MODULE_0__.xMap[i];\n    chessboard.appendChild(notation);\n  }\n}\n\nfunction resetChessboard() {\n  const chessboard = document.querySelector(\".chessboard\");\n  while (chessboard.firstChild) chessboard.removeChild(chessboard.firstChild);\n\n  createChessboard();\n}\n\nfunction resetPathText() {\n  const pathText = document.querySelector(\".path-text\");\n  while (pathText.firstChild) pathText.removeChild(pathText.firstChild);\n}\n\nlet knightActive = true;\nlet startPos = null;\nlet endPos = null;\n\nfunction addListenersToBlocks(chessBlock) {\n  const knightIcon = document.createElement(\"img\");\n  knightIcon.src = \"images/chess-knight.svg\";\n  knightIcon.alt = \"K\";\n\n  const flagIcon = document.createElement(\"img\");\n  flagIcon.src = \"images/flag-checkered.svg\";\n  flagIcon.alt = \"End\";\n\n  chessBlock.addEventListener(\"mouseenter\", () => {\n    if (knightActive === true) {\n      chessBlock.appendChild(knightIcon);\n    } else if (knightActive === false && !chessBlock.firstChild)\n      chessBlock.appendChild(flagIcon);\n  });\n\n  chessBlock.addEventListener(\"mouseleave\", () => {\n    if (knightActive === true) chessBlock.removeChild(knightIcon);\n    else if (knightActive === false && chessBlock.firstChild === flagIcon)\n      chessBlock.removeChild(flagIcon);\n  });\n\n  chessBlock.addEventListener(\"click\", () => {\n    if (knightActive === true) {\n      chessBlock.appendChild(knightIcon);\n      startPos = chessBlock.id;\n      knightActive = false;\n    } else if (knightActive === false && chessBlock.firstChild !== knightIcon) {\n      chessBlock.appendChild(flagIcon);\n      knightActive = true;\n      endPos = chessBlock.id;\n\n      (0,_simulation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(startPos, endPos);\n    }\n  });\n}\n\n\n//# sourceURL=webpack://knight-traversal/./src/chessboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _chessboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chessboard */ \"./src/chessboard.js\");\n\n\n\n// First a chessboard is created\n// Upon creating chessboard assign event listeners to each of the 64 blocks\n// assign unique ID to each of the 64 blocks\n\n// When both knight and end position are assigned simulation is called\n// Simulation calls the bfs algorithm which returns the array of shortest moves\n// After that, the path is animated and shown on chessboard\n// Upon clicking reset button, the chessboard is reset and you can play again\n\n(0,_chessboard__WEBPACK_IMPORTED_MODULE_1__.createChessboard)();\n\n\n//# sourceURL=webpack://knight-traversal/./src/index.js?");

/***/ }),

/***/ "./src/position.js":
/*!*************************!*\
  !*** ./src/position.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   position: () => (/* binding */ position),\n/* harmony export */   xMap: () => (/* binding */ xMap),\n/* harmony export */   xMapReverse: () => (/* binding */ xMapReverse)\n/* harmony export */ });\nfunction position(pos = null, parent = null, move = 0) {\n  return { pos, parent, move };\n}\n\nconst xMap = {\n  1: \"A\",\n  2: \"B\",\n  3: \"C\",\n  4: \"D\",\n  5: \"E\",\n  6: \"F\",\n  7: \"G\",\n  8: \"H\",\n};\n\nconst xMapReverse = {\n  A: 1,\n  B: 2,\n  C: 3,\n  D: 4,\n  E: 5,\n  F: 6,\n  G: 7,\n  H: 8,\n};\n\n\n//# sourceURL=webpack://knight-traversal/./src/position.js?");

/***/ }),

/***/ "./src/simulation.js":
/*!***************************!*\
  !*** ./src/simulation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startSimulation)\n/* harmony export */ });\n/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./position */ \"./src/position.js\");\n/* harmony import */ var _BFS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BFS */ \"./src/BFS.js\");\n/* harmony import */ var _chessboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chessboard */ \"./src/chessboard.js\");\n\n\n\n\nfunction startSimulation(startPos, endPos) {\n  document.querySelector(\".chessboard\").classList.add(\"unclickable\");\n\n  let startArr = startPos.split(\"\");\n  let endArr = endPos.split(\"\");\n\n  startArr[0] = _position__WEBPACK_IMPORTED_MODULE_0__.xMapReverse[startArr[0]];\n  endArr[0] = _position__WEBPACK_IMPORTED_MODULE_0__.xMapReverse[endArr[0]];\n\n  startArr[1] = Number(startArr[1]);\n  endArr[1] = Number(endArr[1]);\n\n  let pathArr = (0,_BFS__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(startArr, endArr);\n  pathArr.reverse();\n\n  animatePath(pathArr);\n}\n\nasync function animatePath(pathArr) {\n  const delay = 1000;\n\n  const pathText = document.querySelector(\".path-text\");\n  pathText.appendChild(document.createElement(\"p\")).textContent = `Path in ${\n    pathArr.length - 1\n  } moves:`;\n\n  if (pathArr.length === 2) {\n    const chessBlock = document.getElementById(pathArr[0]);\n    const nextChessBlock = document.getElementById(pathArr[1]);\n\n    const knightIcon = document.createElement(\"img\");\n    knightIcon.src = \"images/chess-knight.svg\";\n    knightIcon.alt = \"K\";\n\n    await new Promise((resolve) => setTimeout(resolve, delay));\n\n    chessBlock.removeChild(chessBlock.firstChild);\n    nextChessBlock.removeChild(nextChessBlock.firstChild);\n    nextChessBlock.appendChild(knightIcon);\n\n    chessBlock.appendChild(document.createElement(\"p\")).textContent = \"1\";\n    pathText.appendChild(\n      document.createElement(\"p\")\n    ).textContent = `1. ${pathArr[0]}`;\n  }\n\n  for (let i = 1; i < pathArr.length - 1; i++) {\n    const prevPosition = pathArr[i - 1];\n    const currentPosition = pathArr[i];\n    const nextPosition = pathArr[i + 1];\n\n    const prevChessBlock = document.getElementById(prevPosition);\n    const chessBlock = document.getElementById(currentPosition);\n    const nextChessBlock = document.getElementById(nextPosition);\n\n    const circleIcon = document.createElement(\"img\");\n    circleIcon.src = \"images/circle-outline.svg\";\n    circleIcon.alt = \".\";\n\n    const knightIcon = document.createElement(\"img\");\n    knightIcon.src = \"images/chess-knight.svg\";\n    knightIcon.alt = \"K\";\n\n    chessBlock.appendChild(circleIcon);\n\n    if (nextPosition) {\n      await new Promise((resolve) => setTimeout(resolve, delay));\n\n      prevChessBlock.removeChild(prevChessBlock.firstChild);\n      chessBlock.removeChild(circleIcon);\n\n      prevChessBlock.appendChild(document.createElement(\"p\")).textContent = i;\n      pathText.appendChild(\n        document.createElement(\"p\")\n      ).textContent = `${i}. ${pathArr[i]}`;\n      chessBlock.appendChild(knightIcon);\n    }\n\n    if (nextChessBlock.firstChild) {\n      await new Promise((resolve) => setTimeout(resolve, delay));\n\n      nextChessBlock.removeChild(nextChessBlock.firstChild);\n      nextChessBlock.appendChild(knightIcon);\n      chessBlock.appendChild(document.createElement(\"p\")).textContent = i + 1;\n      pathText.appendChild(document.createElement(\"p\")).textContent = `${\n        i + 1\n      }. ${pathArr[i + 1]}`;\n    }\n  }\n\n  const restartButton = document.createElement(\"button\");\n  restartButton.id = \"restart\";\n  restartButton.textContent = \"Restart\";\n\n  restartButton.addEventListener(\"click\", () => {\n    (0,_chessboard__WEBPACK_IMPORTED_MODULE_2__.resetChessboard)();\n    (0,_chessboard__WEBPACK_IMPORTED_MODULE_2__.resetPathText)();\n    document.querySelector(\".chessboard\").classList.remove(\"unclickable\");\n  });\n\n  pathText.appendChild(restartButton);\n}\n\n\n//# sourceURL=webpack://knight-traversal/./src/simulation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;