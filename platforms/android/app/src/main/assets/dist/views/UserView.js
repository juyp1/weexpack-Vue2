// { "framework": "Vue" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(115)
	)

	/* script */
	__vue_exports__ = __webpack_require__(116)

	/* template */
	var __vue_template__ = __webpack_require__(117)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/juyunpeng/Documents/chanquan.portal.mobile.web/src/views/UserView.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-e3d12a1a"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = {
	  "header": {
	    "position": "relative",
	    "height": 120,
	    "marginBottom": 3,
	    "borderBottomWidth": 2,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#DDDDDD",
	    "backgroundColor": "#FF6600"
	  },
	  "logo": {
	    "position": "relative",
	    "width": 50,
	    "height": 50,
	    "top": 35,
	    "left": 35,
	    "borderWidth": 3,
	    "borderStyle": "solid",
	    "borderColor": "#FFFFFF"
	  },
	  "image": {
	    "width": 44,
	    "height": 44
	  },
	  "nav": {
	    "display": "flex",
	    "position": "absolute",
	    "left": 120,
	    "top": 35,
	    "flexDirection": "row",
	    "flexWrap": "nowrap",
	    "justifyContent": "flex-start",
	    "alignItems": "center"
	  },
	  "link": {
	    "paddingLeft": 15,
	    "paddingRight": 15
	  },
	  "title": {
	    "fontFamily": "Verdana, Geneva, sans-serif",
	    "fontSize": 32,
	    "lineHeight": 44,
	    "color": "#FFFFFF"
	  }
	}

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["header"]
	  }, [_c('div', {
	    staticClass: ["logo"],
	    on: {
	      "click": function($event) {
	        _vm.jump('/')
	      }
	    }
	  }, [_c('image', {
	    staticClass: ["image"],
	    attrs: {
	      "src": "https://news.ycombinator.com/favicon.ico"
	    }
	  })]), _c('div', {
	    staticClass: ["nav"]
	  }, [_c('div', {
	    staticClass: ["link"],
	    on: {
	      "click": function($event) {
	        _vm.jump('/top')
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("Top")])]), _c('div', {
	    staticClass: ["link"],
	    on: {
	      "click": function($event) {
	        _vm.jump('/new')
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("New")])]), _c('div', {
	    staticClass: ["link"],
	    on: {
	      "click": function($event) {
	        _vm.jump('/show')
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("Show")])]), _c('div', {
	    staticClass: ["link"],
	    on: {
	      "click": function($event) {
	        _vm.jump('/ask')
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("Ask")])]), _c('div', {
	    staticClass: ["link"],
	    on: {
	      "click": function($event) {
	        _vm.jump('/job')
	      }
	    }
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("Job")])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(3)
	)

	/* template */
	var __vue_template__ = __webpack_require__(4)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/juyunpeng/Documents/chanquan.portal.mobile.web/src/components/app-header.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-e45d7d00"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),

/***/ 115:
/***/ (function(module, exports) {

	module.exports = {
	  "user-info": {
	    "paddingTop": 60,
	    "paddingLeft": 80,
	    "paddingRight": 60
	  },
	  "user-name": {
	    "fontSize": 72,
	    "fontWeight": "bold",
	    "marginBottom": 60
	  },
	  "loading-text": {
	    "fontFamily": "Verdana, Geneva, sans-serif",
	    "fontSize": 44,
	    "color": "#BBBBBB"
	  },
	  "meta-label": {
	    "fontFamily": "Verdana, Geneva, sans-serif",
	    "fontSize": 32,
	    "marginBottom": 15,
	    "color": "#333333"
	  },
	  "user-about": {
	    "marginTop": 20,
	    "fontSize": 28,
	    "color": "#666666"
	  }
	}

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _appHeader = __webpack_require__(108);

	var _appHeader2 = _interopRequireDefault(_appHeader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: { AppHeader: _appHeader2.default },
	  computed: {
	    userId: function userId() {
	      if (this.$route && this.$route.params) {
	        return this.$route.params.id;
	      }
	      return 'Hanks10100';
	    },
	    user: function user() {
	      return this.$store.state.users[this.userId];
	    }
	  },

	  created: function created() {
	    weex.requireModule('poneInfo').camera();
	    this.$store.dispatch('FETCH_USER', { id: this.userId });
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = exports['default'];

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["user-view"]
	  }, [_c('app-header'), _c('div', {
	    staticClass: ["user-info"]
	  }, [_c('text', {
	    staticClass: ["user-name"]
	  }, [_vm._v(_vm._s(_vm.userId))]), (_vm.user) ? _c('div', {
	    staticClass: ["user-meta"]
	  }, [_c('text', {
	    staticClass: ["meta-label"]
	  }, [_vm._v("Created: " + _vm._s(_vm._f("timeAgo")(_vm.user.created)) + " ago")]), _c('text', {
	    staticClass: ["meta-label"]
	  }, [_vm._v("Karma:   " + _vm._s(_vm.user.karma))]), (_vm.user.about) ? _c('text', {
	    staticClass: ["meta-label", "user-about"]
	  }, [_vm._v(_vm._s(_vm._f("unescape")(_vm.user.about)))]) : _vm._e()]) : _c('div', {
	    staticClass: ["loading"]
	  }, [_c('text', {
	    staticClass: ["loading-text"]
	  }, [_vm._v("loading ...")])])])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });