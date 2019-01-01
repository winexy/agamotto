/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/agamotto/index.js":
/*!*******************************!*\
  !*** ./src/agamotto/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _v_dom_hyper_script_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../v-dom/hyper-script-function */ \"./src/v-dom/hyper-script-function.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Component =\n/*#__PURE__*/\nfunction () {\n  function Component(props) {\n    _classCallCheck(this, Component);\n\n    this.props = props;\n  }\n\n  _createClass(Component, [{\n    key: \"setState\",\n    value: function setState() {\n      var newState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      this.state = _objectSpread({}, this.state, newState);\n      console.log(this.render());\n    }\n  }, {\n    key: \"render\",\n    value: function render() {}\n  }]);\n\n  return Component;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Component: Component,\n  createElement: _v_dom_hyper_script_function__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWdhbW90dG8vaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWdhbW90dG8vaW5kZXguanM/YzU0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaCBmcm9tICcuLi92LWRvbS9oeXBlci1zY3JpcHQtZnVuY3Rpb24nO1xuXG5cbmNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB9XG5cbiAgc2V0U3RhdGUobmV3U3RhdGUgPSB7fSkge1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgLi4ubmV3U3RhdGVcbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2codGhpcy5yZW5kZXIoKSk7XG4gIH1cblxuICByZW5kZXIoKSB7fVxuXG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgQ29tcG9uZW50LFxuICBjcmVhdGVFbGVtZW50OiBoXG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTs7O0FBRUE7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUZBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/agamotto/index.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _agamotto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agamotto */ \"./src/agamotto/index.js\");\n/* harmony import */ var _v_dom_update_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v-dom/update-element */ \"./src/v-dom/update-element.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n //------------\n// ---------------------------------------------------------------------\n\nfunction Test(props) {\n  return _agamotto__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    class: \"kek\",\n    style: {\n      width: '100px',\n      border: '1px solid red'\n    }\n  }, props.n);\n}\n\nvar App =\n/*#__PURE__*/\nfunction () {\n  function App(props) {\n    _classCallCheck(this, App);\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return _agamotto__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n        class: \"App\"\n      }, _agamotto__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h1\", null, \"This is the App\"), _agamotto__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"br\", null), _agamotto__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", null, _agamotto__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"p\", null, \"Lorem ipsum dolor sit amet, consectetur adipisicing \")));\n    }\n  }]);\n\n  return App;\n}();\n\nfunction log(e) {\n  console.log(e.target.value);\n}\n\nvar f = _agamotto__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"ul\", {\n  style: \"list-style: none;\"\n}, [1, 2, 3].map(function (n) {\n  return _agamotto__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(Test, {\n    n: n\n  });\n}), \"privet kak dela\", _agamotto__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"li\", {\n  class: \"item\",\n  onClick: function onClick() {\n    return alert('hi!');\n  }\n}, \"item 1\"), _agamotto__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"li\", {\n  class: \"item\"\n}, _agamotto__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(App, {\n  name: \"kek\"\n}), _agamotto__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(Test, {\n  name: \"asd\"\n}), _agamotto__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"input\", {\n  type: \"checkbox\",\n  checked: true\n}), _agamotto__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"input\", {\n  type: \"text\",\n  onInput: log\n})), _agamotto__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"li\", {\n  forceUpdate: true\n}, \"text\"));\nvar g = _agamotto__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"ul\", {\n  style: \"list-style: none;\"\n}, _agamotto__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"li\", {\n  class: \"item item2\",\n  onClick: function onClick() {\n    return alert('hi!');\n  }\n}, \"item 1\"), _agamotto__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"li\", {\n  style: \"background: red;\"\n}, _agamotto__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"input\", {\n  type: \"checkbox\",\n  checked: false\n}), _agamotto__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"input\", {\n  type: \"text\",\n  onInput: log\n})), _agamotto__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"li\", {\n  forceUpdate: true\n}, \"text\"));\nconsole.log(g);\nvar $root = document.getElementById('root');\nvar $reload = document.getElementById('reload');\nObject(_v_dom_update_element__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($root, f);\n$reload.addEventListener('click', function () {\n  Object(_v_dom_update_element__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($root, g, f);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWdhbW90dG8gZnJvbSAnLi9hZ2Ftb3R0byc7XG5pbXBvcnQgdXBkYXRlRWxlbWVudCBmcm9tICcuL3YtZG9tL3VwZGF0ZS1lbGVtZW50JztcblxuXG4vLy0tLS0tLS0tLS0tLVxuXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBUZXN0KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJrZWtcIlxuICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCByZWQnIH19XG4gICAgPlxuICAgICAgeyBwcm9wcy5uIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPVwiQXBwXCI+XG4gICAgICAgIDxoMT5UaGlzIGlzIHRoZSBBcHA8L2gxPlxuICAgICAgICA8YnIvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2coZSkge1xuICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XG59XG5cbmNvbnN0IGYgPSAoXG4gIDx1bCBzdHlsZT1cImxpc3Qtc3R5bGU6IG5vbmU7XCI+XG4gICAge1xuICAgICAgWzEsMiwzXS5tYXAobiA9PiA8VGVzdCBuPXtufSAvPilcbiAgICB9XG4gICAgcHJpdmV0XG4gICAga2FrXG4gICAgZGVsYVxuICAgIDxsaSBjbGFzcz1cIml0ZW1cIiBvbkNsaWNrPXsoKSA9PiBhbGVydCgnaGkhJyl9Pml0ZW0gMTwvbGk+XG4gICAgPGxpIGNsYXNzPVwiaXRlbVwiPlxuICAgICAgPEFwcCBuYW1lPVwia2VrXCIgLz5cbiAgICAgIDxUZXN0IG5hbWU9XCJhc2RcIiAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3RydWV9IC8+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbklucHV0PXtsb2d9IC8+XG4gICAgPC9saT5cbiAgICB7LyogdGhpcyBub2RlIHdpbGwgYWx3YXlzIGJlIHVwZGF0ZWQgKi99XG4gICAgPGxpIGZvcmNlVXBkYXRlPXt0cnVlfT50ZXh0PC9saT5cbiAgPC91bD5cbik7XG5cbmNvbnN0IGcgPSAoXG4gIDx1bCBzdHlsZT1cImxpc3Qtc3R5bGU6IG5vbmU7XCI+XG4gICAgPGxpIGNsYXNzPVwiaXRlbSBpdGVtMlwiIG9uQ2xpY2s9eygpID0+IGFsZXJ0KCdoaSEnKX0+aXRlbSAxPC9saT5cbiAgICA8bGkgc3R5bGU9XCJiYWNrZ3JvdW5kOiByZWQ7XCI+XG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17ZmFsc2V9IC8+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbklucHV0PXtsb2d9IC8+XG4gICAgPC9saT5cbiAgICB7LyogdGhpcyBub2RlIHdpbGwgYWx3YXlzIGJlIHVwZGF0ZWQgKi99XG4gICAgPGxpIGZvcmNlVXBkYXRlPXt0cnVlfT50ZXh0PC9saT5cbiAgPC91bD5cbik7XG5jb25zb2xlLmxvZyhnKTtcblxuY29uc3QgJHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuY29uc3QgJHJlbG9hZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWxvYWQnKTtcblxudXBkYXRlRWxlbWVudCgkcm9vdCwgZik7XG4kcmVsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICB1cGRhdGVFbGVtZW50KCRyb290LCBnLCBmKTtcbn0pO1xuXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQU9BO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBUUE7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/v-dom/add-event-listeners.js":
/*!******************************************!*\
  !*** ./src/v-dom/add-event-listeners.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addEventListeners; });\n/* harmony import */ var _props_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./props/utils */ \"./src/v-dom/props/utils.js\");\n\nfunction addEventListeners($target, props) {\n  Object.keys(props).filter(_props_utils__WEBPACK_IMPORTED_MODULE_0__[\"isEventProp\"]).forEach(function (event) {\n    return $target.addEventListener(Object(_props_utils__WEBPACK_IMPORTED_MODULE_0__[\"extractEventName\"])(event), props[event]);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdi1kb20vYWRkLWV2ZW50LWxpc3RlbmVycy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92LWRvbS9hZGQtZXZlbnQtbGlzdGVuZXJzLmpzPzMwMjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgaXNFdmVudFByb3AsXG4gIGV4dHJhY3RFdmVudE5hbWVcbn0gZnJvbSAnLi9wcm9wcy91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCR0YXJnZXQsIHByb3BzKSB7XG4gIE9iamVjdC5rZXlzKHByb3BzKVxuICAgIC5maWx0ZXIoaXNFdmVudFByb3ApXG4gICAgLmZvckVhY2goZXZlbnQgPT4gJHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV4dHJhY3RFdmVudE5hbWUoZXZlbnQpLCBwcm9wc1tldmVudF0pKTtcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBRUE7QUFBQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/v-dom/add-event-listeners.js\n");

/***/ }),

/***/ "./src/v-dom/changed.js":
/*!******************************!*\
  !*** ./src/v-dom/changed.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return changed; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction changed(node1, node2) {\n  return _typeof(node1) !== _typeof(node2) || typeof node1 === 'string' && node1 !== node2 || node1.type !== node2.type || node1.props && node1.props.forceUpdate;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdi1kb20vY2hhbmdlZC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92LWRvbS9jaGFuZ2VkLmpzPzM4YjQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhbmdlZChub2RlMSwgbm9kZTIpIHtcbiAgcmV0dXJuIHR5cGVvZiBub2RlMSAhPT0gdHlwZW9mIG5vZGUyIHx8XG4gICAgdHlwZW9mIG5vZGUxID09PSAnc3RyaW5nJyAmJiBub2RlMSAhPT0gbm9kZTIgfHxcbiAgICBub2RlMS50eXBlICE9PSBub2RlMi50eXBlIHx8XG4gICAgbm9kZTEucHJvcHMgJiYgbm9kZTEucHJvcHMuZm9yY2VVcGRhdGU7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBSUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/v-dom/changed.js\n");

/***/ }),

/***/ "./src/v-dom/create-class-component.js":
/*!*********************************************!*\
  !*** ./src/v-dom/create-class-component.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createClassComponent; });\n/* harmony import */ var _spread_children__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spread-children */ \"./src/v-dom/spread-children.js\");\n\nfunction createClassComponent(Component, props) {\n  var classComponent = new Component(props);\n  var rendered = classComponent.render();\n  rendered.children = Object(_spread_children__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(rendered.children);\n  return rendered;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdi1kb20vY3JlYXRlLWNsYXNzLWNvbXBvbmVudC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92LWRvbS9jcmVhdGUtY2xhc3MtY29tcG9uZW50LmpzPzUwYWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNwcmVhZENoaWxkcmVuIGZyb20gXCIuL3NwcmVhZC1jaGlsZHJlblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDbGFzc0NvbXBvbmVudChDb21wb25lbnQsIHByb3BzKSB7XG4gIGxldCBjbGFzc0NvbXBvbmVudCA9IG5ldyBDb21wb25lbnQocHJvcHMpO1xuXG4gIGxldCByZW5kZXJlZCA9IGNsYXNzQ29tcG9uZW50LnJlbmRlcigpO1xuXG4gIHJlbmRlcmVkLmNoaWxkcmVuID0gc3ByZWFkQ2hpbGRyZW4ocmVuZGVyZWQuY2hpbGRyZW4pO1xuXG4gIHJldHVybiByZW5kZXJlZDtcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/v-dom/create-class-component.js\n");

/***/ }),

/***/ "./src/v-dom/create-element.js":
/*!*************************************!*\
  !*** ./src/v-dom/create-element.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createElement; });\n/* harmony import */ var _props_set_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./props/set-prop */ \"./src/v-dom/props/set-prop.js\");\n/* harmony import */ var _add_event_listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-event-listeners */ \"./src/v-dom/add-event-listeners.js\");\n\n\nfunction createElement(node) {\n  if (Array.isArray(node)) {\n    return node.map(createElement);\n  }\n\n  if (typeof node === 'string' || typeof node === 'number') {\n    return document.createTextNode(node);\n  }\n\n  var $el = document.createElement(node.type);\n  Object(_props_set_prop__WEBPACK_IMPORTED_MODULE_0__[\"setProps\"])($el, node.props);\n  Object(_add_event_listeners__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($el, node.props);\n  node.children.filter(function (_) {\n    return _;\n  }).map(createElement).forEach($el.appendChild.bind($el));\n  return $el;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdi1kb20vY3JlYXRlLWVsZW1lbnQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdi1kb20vY3JlYXRlLWVsZW1lbnQuanM/ZWJjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXRQcm9wcyB9IGZyb20gJy4vcHJvcHMvc2V0LXByb3AnO1xuaW1wb3J0IGFkZEV2ZW50TGlzdGVuZXJzIGZyb20gJy4vYWRkLWV2ZW50LWxpc3RlbmVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQobm9kZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgIHJldHVybiBub2RlLm1hcChjcmVhdGVFbGVtZW50KVxuICB9XG5cbiAgaWYgKHR5cGVvZiBub2RlID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygbm9kZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobm9kZSk7XG4gIH1cblxuXG4gIGNvbnN0ICRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZS50eXBlKTtcbiAgc2V0UHJvcHMoJGVsLCBub2RlLnByb3BzKTtcbiAgYWRkRXZlbnRMaXN0ZW5lcnMoJGVsLCBub2RlLnByb3BzKTtcblxuICBub2RlLmNoaWxkcmVuXG4gICAgLmZpbHRlcihfID0+IF8pXG4gICAgLm1hcChjcmVhdGVFbGVtZW50KVxuICAgIC5mb3JFYWNoKCRlbC5hcHBlbmRDaGlsZC5iaW5kKCRlbCkpO1xuICByZXR1cm4gJGVsO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/v-dom/create-element.js\n");

/***/ }),

/***/ "./src/v-dom/create-functional-component.js":
/*!**************************************************!*\
  !*** ./src/v-dom/create-functional-component.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createFunctionalComponent; });\n/* harmony import */ var _spread_children__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spread-children */ \"./src/v-dom/spread-children.js\");\n\nfunction createFunctionalComponent(Component, props) {\n  var component = Component(props);\n  component.children = Object(_spread_children__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(component.children);\n  return component;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdi1kb20vY3JlYXRlLWZ1bmN0aW9uYWwtY29tcG9uZW50LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3YtZG9tL2NyZWF0ZS1mdW5jdGlvbmFsLWNvbXBvbmVudC5qcz9mZDU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzcHJlYWRDaGlsZHJlbiBmcm9tIFwiLi9zcHJlYWQtY2hpbGRyZW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudChDb21wb25lbnQsIHByb3BzKSB7XG4gIGxldCBjb21wb25lbnQgPSBDb21wb25lbnQocHJvcHMpO1xuXG4gIGNvbXBvbmVudC5jaGlsZHJlbiA9IHNwcmVhZENoaWxkcmVuKGNvbXBvbmVudC5jaGlsZHJlbik7XG4gIFxuICByZXR1cm4gY29tcG9uZW50O1xufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/v-dom/create-functional-component.js\n");

/***/ }),

/***/ "./src/v-dom/hyper-script-function.js":
/*!********************************************!*\
  !*** ./src/v-dom/hyper-script-function.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return h; });\n/* harmony import */ var _spread_children__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spread-children */ \"./src/v-dom/spread-children.js\");\n/* harmony import */ var _create_functional_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-functional-component */ \"./src/v-dom/create-functional-component.js\");\n/* harmony import */ var _create_class_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-class-component */ \"./src/v-dom/create-class-component.js\");\n\n\n\nfunction h() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  var type = args[0],\n      props = args[1],\n      children = args.slice(2);\n  if (typeof type === 'string') return {\n    type: type,\n    props: props || {},\n    children: Object(_spread_children__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(children)\n  };\n\n  if (type.prototype.render) {\n    return _create_class_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"].apply(void 0, args);\n  }\n\n  return _create_functional_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"].apply(void 0, args);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdi1kb20vaHlwZXItc2NyaXB0LWZ1bmN0aW9uLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3YtZG9tL2h5cGVyLXNjcmlwdC1mdW5jdGlvbi5qcz8yMTdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzcHJlYWRDaGlsZHJlbiBmcm9tICcuL3NwcmVhZC1jaGlsZHJlbic7XG5pbXBvcnQgY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudCBmcm9tICcuL2NyZWF0ZS1mdW5jdGlvbmFsLWNvbXBvbmVudCc7XG5pbXBvcnQgY3JlYXRlQ2xhc3NDb21wb25lbnQgZnJvbSAnLi9jcmVhdGUtY2xhc3MtY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaCguLi5hcmdzKSB7XG4gIGxldCBbdHlwZSwgcHJvcHMsIC4uLmNoaWxkcmVuXSA9IGFyZ3M7XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJylcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZSxcbiAgICAgIHByb3BzOiBwcm9wcyB8fCB7fSxcbiAgICAgIGNoaWxkcmVuOiBzcHJlYWRDaGlsZHJlbihjaGlsZHJlbilcbiAgICB9O1xuXG5cbiAgaWYgKHR5cGUucHJvdG90eXBlLnJlbmRlcikge1xuICAgIHJldHVybiBjcmVhdGVDbGFzc0NvbXBvbmVudCguLi5hcmdzKTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50KC4uLmFyZ3MpO1xufVxuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/v-dom/hyper-script-function.js\n");

/***/ }),

/***/ "./src/v-dom/props/remove-prop.js":
/*!****************************************!*\
  !*** ./src/v-dom/props/remove-prop.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return removeProp; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/v-dom/props/utils.js\");\n\n\nfunction removeBooleanProp($target, name) {\n  $target.removeAttribute(name);\n  $target[name] = false;\n}\n\nfunction removeProp($target, name, value) {\n  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isCustomProp\"])(name)) return;\n\n  if (typeof value === 'boolean') {\n    removeBooleanProp($target, name);\n  } else {\n    $target.removeAttribute(name);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdi1kb20vcHJvcHMvcmVtb3ZlLXByb3AuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdi1kb20vcHJvcHMvcmVtb3ZlLXByb3AuanM/ZGJhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0N1c3RvbVByb3AgfSBmcm9tICcuL3V0aWxzJztcblxuZnVuY3Rpb24gcmVtb3ZlQm9vbGVhblByb3AoJHRhcmdldCwgbmFtZSkge1xuICAkdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgJHRhcmdldFtuYW1lXSA9IGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVQcm9wKCR0YXJnZXQsIG5hbWUsIHZhbHVlKSB7XG4gIGlmIChpc0N1c3RvbVByb3AobmFtZSkpIHJldHVybjtcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICByZW1vdmVCb29sZWFuUHJvcCgkdGFyZ2V0LCBuYW1lKTtcbiAgfSBlbHNlIHtcbiAgICAkdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/v-dom/props/remove-prop.js\n");

/***/ }),

/***/ "./src/v-dom/props/set-prop.js":
/*!*************************************!*\
  !*** ./src/v-dom/props/set-prop.js ***!
  \*************************************/
/*! exports provided: setProps, setProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setProps\", function() { return setProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setProp\", function() { return setProp; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/v-dom/props/utils.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nfunction setProps($target, props) {\n  Object.keys(props).forEach(function (name) {\n    setProp($target, name, props[name]);\n  });\n}\nfunction setProp($target, name, value) {\n  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isCustomProp\"])(name)) return;\n\n  if (typeof value === 'boolean') {\n    setBooleanProp($target, name, value);\n  } else if (name === 'style') {\n    setStyleProp($target, value);\n  } else {\n    $target.setAttribute(name, value);\n  }\n}\n\nfunction setStyleProp($target, styles) {\n  Object.entries(styles).forEach(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        prop = _ref2[0],\n        value = _ref2[1];\n\n    $target.style[prop] = value;\n  });\n}\n\nfunction setBooleanProp($target, name, value) {\n  if (value) {\n    $target.setAttribute(name, value);\n    $target[name] = true;\n  } else {\n    $target[name] = false;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdi1kb20vcHJvcHMvc2V0LXByb3AuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdi1kb20vcHJvcHMvc2V0LXByb3AuanM/MmQxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0N1c3RvbVByb3AgfSBmcm9tICcuL3V0aWxzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvcHMoJHRhcmdldCwgcHJvcHMpIHtcbiAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgc2V0UHJvcCgkdGFyZ2V0LCBuYW1lLCBwcm9wc1tuYW1lXSk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9wKCR0YXJnZXQsIG5hbWUsIHZhbHVlKSB7XG4gIGlmIChpc0N1c3RvbVByb3AobmFtZSkpIHJldHVybjtcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICBzZXRCb29sZWFuUHJvcCgkdGFyZ2V0LCBuYW1lLCB2YWx1ZSk7XG4gIH0gZWxzZSBpZiAobmFtZSA9PT0gJ3N0eWxlJykge1xuICAgIHNldFN0eWxlUHJvcCgkdGFyZ2V0LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgJHRhcmdldC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG59XG5cblxuZnVuY3Rpb24gc2V0U3R5bGVQcm9wKCR0YXJnZXQsIHN0eWxlcykge1xuICBPYmplY3QuZW50cmllcyhzdHlsZXMpXG4gICAgLmZvckVhY2goKFtwcm9wLCB2YWx1ZV0pID0+IHtcbiAgICAgICR0YXJnZXQuc3R5bGVbcHJvcF0gPSB2YWx1ZVxuICAgIH0pO1xufVxuXG5cbmZ1bmN0aW9uIHNldEJvb2xlYW5Qcm9wKCR0YXJnZXQsIG5hbWUsIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSkge1xuICAgICR0YXJnZXQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAkdGFyZ2V0W25hbWVdID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICAkdGFyZ2V0W25hbWVdID0gZmFsc2U7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/v-dom/props/set-prop.js\n");

/***/ }),

/***/ "./src/v-dom/props/update-prop.js":
/*!****************************************!*\
  !*** ./src/v-dom/props/update-prop.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return updateProps; });\n/* harmony import */ var _set_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set-prop */ \"./src/v-dom/props/set-prop.js\");\n/* harmony import */ var _remove_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove-prop */ \"./src/v-dom/props/remove-prop.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nfunction updateProp($target, name, newVal, oldVal) {\n  if (!newVal) {\n    Object(_remove_prop__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($target, name, oldVal);\n  } else if (!oldVal || newVal !== oldVal) {\n    Object(_set_prop__WEBPACK_IMPORTED_MODULE_0__[\"setProp\"])($target, name, newVal);\n  }\n}\n\nfunction updateProps($target, newProps) {\n  var oldProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n  var props = _objectSpread({}, newProps, oldProps);\n\n  Object.keys(props).forEach(function (name) {\n    updateProp($target, name, newProps[name], oldProps[name]);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdi1kb20vcHJvcHMvdXBkYXRlLXByb3AuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdi1kb20vcHJvcHMvdXBkYXRlLXByb3AuanM/Nzk5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXRQcm9wIH0gZnJvbSAnLi9zZXQtcHJvcCc7XG5pbXBvcnQgcmVtb3ZlUHJvcCAgZnJvbSAnLi9yZW1vdmUtcHJvcCc7XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb3AoJHRhcmdldCwgbmFtZSwgbmV3VmFsLCBvbGRWYWwpIHtcbiAgaWYgKCFuZXdWYWwpIHtcbiAgICByZW1vdmVQcm9wKCR0YXJnZXQsIG5hbWUsIG9sZFZhbCk7XG4gIH0gZWxzZSBpZiAoIW9sZFZhbCB8fCBuZXdWYWwgIT09IG9sZFZhbCkge1xuICAgIHNldFByb3AoJHRhcmdldCwgbmFtZSwgbmV3VmFsKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVQcm9wcygkdGFyZ2V0LCBuZXdQcm9wcywgb2xkUHJvcHMgPSB7fSkge1xuICBjb25zdCBwcm9wcyA9IHtcbiAgICAuLi5uZXdQcm9wcyxcbiAgICAuLi5vbGRQcm9wc1xuICB9O1xuXG4gIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIHVwZGF0ZVByb3AoJHRhcmdldCwgbmFtZSwgbmV3UHJvcHNbbmFtZV0sIG9sZFByb3BzW25hbWVdKTtcbiAgfSk7XG59XG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/v-dom/props/update-prop.js\n");

/***/ }),

/***/ "./src/v-dom/props/utils.js":
/*!**********************************!*\
  !*** ./src/v-dom/props/utils.js ***!
  \**********************************/
/*! exports provided: isCustomProp, isEventProp, extractEventName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isCustomProp\", function() { return isCustomProp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isEventProp\", function() { return isEventProp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"extractEventName\", function() { return extractEventName; });\nfunction isCustomProp(name) {\n  return isEventProp(name) || name === 'forceUpdate';\n}\nfunction isEventProp(name) {\n  return /^on/.test(name);\n}\n/**\n * Event name consist of \"on\" and \"event\"\n * Example: onClick\n * @param name\n * @returns {string}\n */\n\nfunction extractEventName(name) {\n  return name.slice(2).toLowerCase();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdi1kb20vcHJvcHMvdXRpbHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdi1kb20vcHJvcHMvdXRpbHMuanM/OTBmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaXNDdXN0b21Qcm9wKG5hbWUpIHtcbiAgcmV0dXJuIGlzRXZlbnRQcm9wKG5hbWUpIHx8IG5hbWUgPT09ICdmb3JjZVVwZGF0ZSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0V2ZW50UHJvcChuYW1lKSB7XG4gIHJldHVybiAvXm9uLy50ZXN0KG5hbWUpO1xufVxuXG4vKipcbiAqIEV2ZW50IG5hbWUgY29uc2lzdCBvZiBcIm9uXCIgYW5kIFwiZXZlbnRcIlxuICogRXhhbXBsZTogb25DbGlja1xuICogQHBhcmFtIG5hbWVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0RXZlbnROYW1lKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUuc2xpY2UoMikudG9Mb3dlckNhc2UoKTtcbn1cblxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBTUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/v-dom/props/utils.js\n");

/***/ }),

/***/ "./src/v-dom/spread-children.js":
/*!**************************************!*\
  !*** ./src/v-dom/spread-children.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return spreadChildren; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction spreadChildren(children) {\n  return children.reduce(function (children, child) {\n    if (Array.isArray(child)) children.push.apply(children, _toConsumableArray(child));else children.push(child);\n    return children;\n  }, []);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdi1kb20vc3ByZWFkLWNoaWxkcmVuLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3YtZG9tL3NwcmVhZC1jaGlsZHJlbi5qcz82MzkwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNwcmVhZENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHJldHVybiBjaGlsZHJlbi5yZWR1Y2UoKGNoaWxkcmVuLCBjaGlsZCkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkgY2hpbGRyZW4ucHVzaCguLi5jaGlsZCk7XG4gICAgZWxzZSBjaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH0sIFtdKTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/v-dom/spread-children.js\n");

/***/ }),

/***/ "./src/v-dom/update-element.js":
/*!*************************************!*\
  !*** ./src/v-dom/update-element.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return updateElement; });\n/* harmony import */ var _changed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changed */ \"./src/v-dom/changed.js\");\n/* harmony import */ var _props_update_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./props/update-prop */ \"./src/v-dom/props/update-prop.js\");\n/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-element */ \"./src/v-dom/create-element.js\");\n\n\n\nfunction updateElement($parent, newNode, oldNode) {\n  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n\n  if (!oldNode) {\n    $parent.appendChild(Object(_create_element__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(newNode));\n  } else if (!newNode) {\n    $parent.removeChild($parent.childNodes[index]);\n  } else if (Object(_changed__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(newNode, oldNode)) {\n    $parent.replaceChild(Object(_create_element__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(newNode), $parent.childNodes[index]);\n  } else if (newNode.type) {\n    debugger;\n    Object(_props_update_prop__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($parent.childNodes[index], newNode.props, oldNode.props);\n    var newLength = newNode.children.length;\n    var oldLength = oldNode.children.length;\n\n    for (var i = 0; i < newLength || i < oldLength; i++) {\n      updateElement($parent.childNodes[index], newNode.children[i], oldNode.children[i], i);\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdi1kb20vdXBkYXRlLWVsZW1lbnQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdi1kb20vdXBkYXRlLWVsZW1lbnQuanM/OGJlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhbmdlZCBmcm9tICcuL2NoYW5nZWQnO1xuaW1wb3J0IHVwZGF0ZVByb3BzIGZyb20gJy4vcHJvcHMvdXBkYXRlLXByb3AnO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnQoJHBhcmVudCwgbmV3Tm9kZSwgb2xkTm9kZSwgaW5kZXggPSAwKSB7XG4gIGlmICghb2xkTm9kZSkge1xuICAgICRwYXJlbnQuYXBwZW5kQ2hpbGQoXG4gICAgICBjcmVhdGVFbGVtZW50KG5ld05vZGUpXG4gICAgKTtcbiAgfSBlbHNlIGlmICghbmV3Tm9kZSkge1xuICAgICRwYXJlbnQucmVtb3ZlQ2hpbGQoXG4gICAgICAkcGFyZW50LmNoaWxkTm9kZXNbaW5kZXhdXG4gICAgKTtcbiAgfSBlbHNlIGlmIChjaGFuZ2VkKG5ld05vZGUsIG9sZE5vZGUpKSB7XG4gICAgJHBhcmVudC5yZXBsYWNlQ2hpbGQoXG4gICAgICBjcmVhdGVFbGVtZW50KG5ld05vZGUpLFxuICAgICAgJHBhcmVudC5jaGlsZE5vZGVzW2luZGV4XVxuICAgICk7XG4gIH0gZWxzZSBpZiAobmV3Tm9kZS50eXBlKSB7XG4gICAgZGVidWdnZXI7XG4gICAgdXBkYXRlUHJvcHMoXG4gICAgICAkcGFyZW50LmNoaWxkTm9kZXNbaW5kZXhdLFxuICAgICAgbmV3Tm9kZS5wcm9wcyxcbiAgICAgIG9sZE5vZGUucHJvcHNcbiAgICApO1xuICAgIGNvbnN0IG5ld0xlbmd0aCA9IG5ld05vZGUuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGNvbnN0IG9sZExlbmd0aCA9IG9sZE5vZGUuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3TGVuZ3RoIHx8IGkgPCBvbGRMZW5ndGg7IGkrKykge1xuICAgICAgdXBkYXRlRWxlbWVudChcbiAgICAgICAgJHBhcmVudC5jaGlsZE5vZGVzW2luZGV4XSxcbiAgICAgICAgbmV3Tm9kZS5jaGlsZHJlbltpXSxcbiAgICAgICAgb2xkTm9kZS5jaGlsZHJlbltpXSxcbiAgICAgICAgaVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/v-dom/update-element.js\n");

/***/ })

/******/ });