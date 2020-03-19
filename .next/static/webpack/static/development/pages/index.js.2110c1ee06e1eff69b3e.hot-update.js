webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/index/Index_content.js":
/*!*******************************************!*\
  !*** ./components/index/Index_content.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _scss_Index_content_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../scss/Index_content.scss */ "./scss/Index_content.scss");
/* harmony import */ var _scss_Index_content_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scss_Index_content_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _All_categorys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./All_categorys */ "./components/index/All_categorys.js");
/* harmony import */ var _Index_description1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Index_description1 */ "./components/index/Index_description1.js");
/* harmony import */ var _Category_items__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Category_items */ "./components/index/Category_items.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "C:\\Users\\AndrojaTim\\Documents\\Projects\\besedila_pesmi_akordi\\components\\index\\Index_content.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;







var Index_content = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index_content, _Component);

  function Index_content() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index_content);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index_content)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      songs_popularno: [],
      songs_slovenske: [],
      // slovenske and !narodnozabavne
      songs_dalmatinske: [],
      songs_tuje: [],
      songs_narodno_zabavne: []
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index_content, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("https://jsonplaceholder.typicode.com/todos?_limit=6").then(function (res) {
        return _this2.setState({
          songs_popularno: res.data
        });
      });
      axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("https://jsonplaceholder.typicode.com/todos?_limit=3").then(function (res) {
        return _this2.setState({
          songs_slovenske: res.data
        });
      });
      axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("https://jsonplaceholder.typicode.com/todos?_limit=3").then(function (res) {
        return _this2.setState({
          songs_dalmatinske: res.data
        });
      });
      axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("https://jsonplaceholder.typicode.com/todos?_limit=3").then(function (res) {
        return _this2.setState({
          songs_tuje: res.data
        });
      });
      axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("https://jsonplaceholder.typicode.com/todos?_limit=3").then(function (res) {
        return _this2.setState({
          songs_narodno_zabavne: res.data
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "default_margin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx(_All_categorys__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), __jsx(_Index_description1__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx("div", {
        className: "category_name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Trenutno popularno")), __jsx("div", {
        className: "linebreak",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), __jsx("div", {
        className: "to_grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx(_Category_items__WEBPACK_IMPORTED_MODULE_11__["default"], {
        songs: this.state.songs_popularno,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }))), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("div", {
        className: "category_name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Kategorija:")), __jsx("div", {
        className: "linebreak",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), __jsx("div", {
        className: "to_grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx(_Category_items__WEBPACK_IMPORTED_MODULE_11__["default"], {
        songs: this.state.songs_slovenske,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }))), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx("div", {
        className: "category_name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Kategorija:")), __jsx("div", {
        className: "linebreak",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), __jsx("div", {
        className: "to_grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx(_Category_items__WEBPACK_IMPORTED_MODULE_11__["default"], {
        songs: this.state.songs_dalmatinske,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }))), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("div", {
        className: "category_name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Kategorija:")), __jsx("div", {
        className: "linebreak",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), __jsx("div", {
        className: "to_grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, __jsx(_Category_items__WEBPACK_IMPORTED_MODULE_11__["default"], {
        songs: this.state.songs_tuje,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }))), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx("div", {
        className: "category_name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Kategorija:")), __jsx("div", {
        className: "linebreak",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), __jsx("div", {
        className: "to_grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx(_Category_items__WEBPACK_IMPORTED_MODULE_11__["default"], {
        songs: this.state.songs_narodno_zabavne,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }))));
    }
  }]);

  return Index_content;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index_content);

/***/ })

})
//# sourceMappingURL=index.js.2110c1ee06e1eff69b3e.hot-update.js.map