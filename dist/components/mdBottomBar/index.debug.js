(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueMaterial"] = factory();
	else
		root["VueMaterial"] = factory();
})(this, (function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(278);


/***/ },

/***/ 1:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    mdTheme: String
	  },
	  data: function data() {
	    return {
	      closestThemedParent: false
	    };
	  },
	  methods: {
	    getClosestThemedParent: function getClosestThemedParent($parent) {
	      if (!$parent || !$parent.$el || $parent._uid === 0) {
	        return false;
	      }

	      if ($parent.mdTheme || $parent.mdName) {
	        return $parent;
	      }

	      return this.getClosestThemedParent($parent.$parent);
	    }
	  },
	  computed: {
	    themeClass: function themeClass() {
	      if (this.mdTheme) {
	        return 'md-theme-' + this.mdTheme;
	      }

	      var theme = this.closestThemedParent.mdTheme;

	      if (!theme) {
	        if (this.closestThemedParent) {
	          theme = this.closestThemedParent.mdName;
	        } else {
	          theme = this.$material.currentTheme;
	        }
	      }

	      return 'md-theme-' + theme;
	    }
	  },
	  mounted: function mounted() {
	    this.closestThemedParent = this.getClosestThemedParent(this.$parent);

	    if (!this.$material.currentTheme) {
	      this.$material.setCurrentTheme('default');
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },

/***/ 74:
/***/ function(module, exports) {

	module.exports = ".THEME_NAME.md-bottom-bar.md-fixed {\n  background-color: BACKGROUND-COLOR; }\n  .THEME_NAME.md-bottom-bar.md-fixed .md-bottom-bar-item {\n    color: BACKGROUND-CONTRAST-0.54; }\n    .THEME_NAME.md-bottom-bar.md-fixed .md-bottom-bar-item:hover:not([disabled]):not(.md-active) {\n      color: BACKGROUND-CONTRAST-0.87; }\n    .THEME_NAME.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active {\n      color: PRIMARY-COLOR; }\n  .THEME_NAME.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active {\n    color: ACCENT-COLOR; }\n  .THEME_NAME.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active {\n    color: WARN-COLOR; }\n  .THEME_NAME.md-bottom-bar.md-fixed.md-transparent .md-bottom-bar-item.md-active {\n    color: BACKGROUND-CONTRAST; }\n\n.THEME_NAME.md-bottom-bar.md-shift {\n  background-color: PRIMARY-COLOR;\n  color: PRIMARY-CONTRAST; }\n  .THEME_NAME.md-bottom-bar.md-shift .md-bottom-bar-item {\n    color: PRIMARY-CONTRAST-0.54; }\n    .THEME_NAME.md-bottom-bar.md-shift .md-bottom-bar-item:hover:not([disabled]):not(.md-active) {\n      color: PRIMARY-CONTRAST-0.87; }\n    .THEME_NAME.md-bottom-bar.md-shift .md-bottom-bar-item.md-active {\n      color: PRIMARY-CONTRAST; }\n  .THEME_NAME.md-bottom-bar.md-shift.md-accent {\n    background-color: ACCENT-COLOR; }\n    .THEME_NAME.md-bottom-bar.md-shift.md-accent .md-bottom-bar-item {\n      color: ACCENT-CONTRAST-0.54; }\n      .THEME_NAME.md-bottom-bar.md-shift.md-accent .md-bottom-bar-item:hover:not([disabled]):not(.md-active) {\n        color: ACCENT-CONTRAST-0.87; }\n      .THEME_NAME.md-bottom-bar.md-shift.md-accent .md-bottom-bar-item.md-active {\n        color: ACCENT-CONTRAST; }\n  .THEME_NAME.md-bottom-bar.md-shift.md-warn {\n    background-color: WARN-COLOR; }\n    .THEME_NAME.md-bottom-bar.md-shift.md-warn .md-bottom-bar-item {\n      color: WARN-CONTRAST-0.54; }\n      .THEME_NAME.md-bottom-bar.md-shift.md-warn .md-bottom-bar-item:hover:not([disabled]):not(.md-active) {\n        color: WARN-CONTRAST-0.87; }\n      .THEME_NAME.md-bottom-bar.md-shift.md-warn .md-bottom-bar-item.md-active {\n        color: WARN-CONTRAST; }\n  .THEME_NAME.md-bottom-bar.md-shift.md-transparent {\n    background-color: transparent; }\n    .THEME_NAME.md-bottom-bar.md-shift.md-transparent .md-bottom-bar-item {\n      color: BACKGROUND-CONTRAST-0.54; }\n      .THEME_NAME.md-bottom-bar.md-shift.md-transparent .md-bottom-bar-item:hover:not([disabled]):not(.md-active) {\n        color: BACKGROUND-CONTRAST-0.87; }\n      .THEME_NAME.md-bottom-bar.md-shift.md-transparent .md-bottom-bar-item.md-active {\n        color: BACKGROUND-CONTRAST; }\n"

/***/ },

/***/ 104:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(104)

	/* script */
	__vue_exports__ = __webpack_require__(316)

	/* template */
	var __vue_template__ = __webpack_require__(199)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some((function (key) { return key !== "default" && key !== "__esModule" }))) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\WorkSpace2017\\html\\vue\\vue-material\\src\\components\\mdBottomBar\\mdBottomBar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0e58034a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0e58034a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] mdBottomBar.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(317)

	/* template */
	var __vue_template__ = __webpack_require__(245)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some((function (key) { return key !== "default" && key !== "__esModule" }))) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\WorkSpace2017\\html\\vue\\vue-material\\src\\components\\mdBottomBar\\mdBottomBarItem.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7e431006", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-7e431006", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] mdBottomBarItem.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "md-bottom-bar",
	    class: [_vm.themeClass, _vm.classes]
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0e58034a", module.exports)
	  }
	}

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.href) ? _c('a', {
	    staticClass: "md-bottom-bar-item",
	    class: _vm.classes,
	    attrs: {
	      "href": _vm.href,
	      "disabled": _vm.disabled
	    },
	    on: {
	      "click": _vm.setActive
	    }
	  }, [_c('md-icon', [_vm._v(_vm._s(_vm.mdIcon))]), _vm._v(" "), _c('md-ink-ripple', {
	    attrs: {
	      "md-disabled": _vm.disabled
	    }
	  }), _vm._v(" "), _c('span', {
	    staticClass: "md-text"
	  }, [_vm._t("default")], 2)], 1) : _c('button', {
	    staticClass: "md-bottom-bar-item",
	    class: _vm.classes,
	    attrs: {
	      "type": "button",
	      "disabled": _vm.disabled
	    },
	    on: {
	      "click": _vm.setActive
	    }
	  }, [_c('md-icon', [_vm._v(_vm._s(_vm.mdIcon))]), _vm._v(" "), _c('md-ink-ripple', {
	    attrs: {
	      "md-disabled": _vm.disabled
	    }
	  }), _vm._v(" "), _c('span', {
	    staticClass: "md-text"
	  }, [_vm._t("default")], 2)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7e431006", module.exports)
	  }
	}

/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = install;

	var _mdBottomBar = __webpack_require__(135);

	var _mdBottomBar2 = _interopRequireDefault(_mdBottomBar);

	var _mdBottomBarItem = __webpack_require__(136);

	var _mdBottomBarItem2 = _interopRequireDefault(_mdBottomBarItem);

	var _mdBottomBar3 = __webpack_require__(74);

	var _mdBottomBar4 = _interopRequireDefault(_mdBottomBar3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function install(Vue) {
	  Vue.component('md-bottom-bar', Vue.extend(_mdBottomBar2.default));
	  Vue.component('md-bottom-bar-item', Vue.extend(_mdBottomBarItem2.default));

	  Vue.material.styles.push(_mdBottomBar4.default);
	}
	module.exports = exports['default'];

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mixin = __webpack_require__(1);

	var _mixin2 = _interopRequireDefault(_mixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: {
	    mdShift: Boolean
	  },
	  mixins: [_mixin2.default],
	  computed: {
	    classes: function classes() {
	      return this.mdShift ? 'md-shift' : 'md-fixed';
	    }
	  },
	  methods: {
	    setActive: function setActive(item) {
	      this.$children.forEach((function (child) {
	        child.active = child === item;
	      }));

	      this.$emit('change', this.$children.findIndex((function (i) {
	        return i === item;
	      })));
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//

	module.exports = exports['default'];

/***/ },

/***/ 317:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    mdIcon: String,
	    mdActive: Boolean,
	    disabled: String,
	    href: String
	  },
	  data: function data() {
	    return {
	      active: false
	    };
	  },

	  computed: {
	    classes: function classes() {
	      return {
	        'md-active': this.active
	      };
	    }
	  },
	  watch: {
	    mdActive: function mdActive(active) {
	      this.setActive(active);
	    }
	  },
	  methods: {
	    setActive: function setActive(active) {
	      if (active) {
	        this.$parent.setActive(this);
	      }
	    }
	  },
	  mounted: function mounted() {
	    if (!this.$parent.$el.classList.contains('md-bottom-bar')) {
	      this.$destroy();

	      throw new Error('You should wrap the md-bottom-bar-item in a md-bottom-bar');
	    }

	    if (this.mdActive) {
	      this.active = true;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }

/******/ })
}));
;