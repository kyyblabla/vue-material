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

	module.exports = __webpack_require__(82);


/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach((function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    }))
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = install;

	var _mdLayout = __webpack_require__(258);

	var _mdLayout2 = _interopRequireDefault(_mdLayout);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function install(Vue) {
	  Vue.component('md-layout', Vue.extend(_mdLayout2.default));
	}
	module.exports = exports['default'];

/***/ },

/***/ 131:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//

	exports.default = {
	  props: {
	    mdTag: {
	      type: String,
	      default: 'div'
	    },
	    mdRow: Boolean,
	    mdRowXsmall: Boolean,
	    mdRowSmall: Boolean,
	    mdRowMedium: Boolean,
	    mdRowLarge: Boolean,
	    mdRowXlarge: Boolean,
	    mdColumn: Boolean,
	    mdColumnXsmall: Boolean,
	    mdColumnSmall: Boolean,
	    mdColumnMedium: Boolean,
	    mdColumnLarge: Boolean,
	    mdColumnXlarge: Boolean,
	    mdHideXsmall: Boolean,
	    mdHideSmall: Boolean,
	    mdHideMedium: Boolean,
	    mdHideLarge: Boolean,
	    mdHideXlarge: Boolean,
	    mdGutter: [String, Number, Boolean],
	    mdAlign: String,
	    mdAlignXsmall: String,
	    mdAlignSmall: String,
	    mdAlignMedium: String,
	    mdAlignLarge: String,
	    mdAlignXlarge: String,
	    mdFlex: [String, Number, Boolean],
	    mdFlexXsmall: [String, Number, Boolean],
	    mdFlexSmall: [String, Number, Boolean],
	    mdFlexMedium: [String, Number, Boolean],
	    mdFlexLarge: [String, Number, Boolean],
	    mdFlexXlarge: [String, Number, Boolean],
	    mdFlexOffset: [String, Number, Boolean],
	    mdFlexOffsetXsmall: [String, Number, Boolean],
	    mdFlexOffsetSmall: [String, Number, Boolean],
	    mdFlexOffsetMedium: [String, Number, Boolean],
	    mdFlexOffsetLarge: [String, Number, Boolean],
	    mdFlexOffsetXlarge: [String, Number, Boolean]
	  },
	  computed: {
	    classes: function classes() {
	      var classes = {
	        'md-row': this.mdRow,
	        'md-row-xsmall': this.mdRowXsmall,
	        'md-row-small': this.mdRowSmall,
	        'md-row-medium': this.mdRowMedium,
	        'md-row-large': this.mdRowLarge,
	        'md-row-xlarge': this.mdRowXlarge,
	        'md-column': this.mdColumn,
	        'md-column-xsmall': this.mdColumnXsmall,
	        'md-column-small': this.mdColumnSmall,
	        'md-column-medium': this.mdColumnMedium,
	        'md-column-large': this.mdColumnLarge,
	        'md-column-xlarge': this.mdColumnXlarge,
	        'md-hide-xsmall': this.mdHideXsmall,
	        'md-hide-small': this.mdHideSmall,
	        'md-hide-medium': this.mdHideMedium,
	        'md-hide-large': this.mdHideLarge,
	        'md-hide-xlarge': this.mdHideXlarge
	      };

	      if (this.mdGutter) {
	        if (typeof this.mdGutter === 'boolean') {
	          classes['md-gutter'] = true;
	        } else if (this.mdGutter) {
	          classes['md-gutter-' + this.mdGutter] = true;
	        }
	      }

	      /* Flex */
	      this.generatePropClasses('md-flex', '', 'mdFlex', classes);
	      this.generatePropClasses('md-flex', 'xsmall', 'mdFlexXsmall', classes);
	      this.generatePropClasses('md-flex', 'small', 'mdFlexSmall', classes);
	      this.generatePropClasses('md-flex', 'medium', 'mdFlexMedium', classes);
	      this.generatePropClasses('md-flex', 'large', 'mdFlexLarge', classes);
	      this.generatePropClasses('md-flex', 'xlarge', 'mdFlexXlarge', classes);

	      /* Flex Offset */
	      this.generatePropClasses('md-flex-offset', '', 'mdFlexOffset', classes);
	      this.generatePropClasses('md-flex-offset', 'xsmall', 'mdFlexOffsetXsmall', classes);
	      this.generatePropClasses('md-flex-offset', 'small', 'mdFlexOffsetSmall', classes);
	      this.generatePropClasses('md-flex-offset', 'medium', 'mdFlexOffsetMedium', classes);
	      this.generatePropClasses('md-flex-offset', 'large', 'mdFlexOffsetLarge', classes);
	      this.generatePropClasses('md-flex-offset', 'xlarge', 'mdFlexOffsetXlarge', classes);

	      /* Alignment */
	      this.generatePropClasses('md-align', '', 'mdAlign', classes);
	      this.generatePropClasses('md-align', 'xsmall', 'mdAlignXsmall', classes);
	      this.generatePropClasses('md-align', 'small', 'mdAlignSmall', classes);
	      this.generatePropClasses('md-align', 'medium', 'mdAlignMedium', classes);
	      this.generatePropClasses('md-align', 'large', 'mdAlignLarge', classes);
	      this.generatePropClasses('md-align', 'xlarge', 'mdAlignXlarge', classes);

	      return classes;
	    }
	  },
	  methods: {
	    generatePropClasses: function generatePropClasses(prop, size, name, object) {
	      if (size) {
	        size = '-' + size;
	      }

	      if (this[name]) {
	        if (typeof this[name] === 'boolean') {
	          object[prop + size] = true;
	        } else {
	          object[prop + size + '-' + this[name]] = true;
	        }
	      }
	    }
	  },
	  render: function render(createElement) {
	    return createElement(this.mdTag, {
	      staticClass: 'md-layout',
	      class: this.classes
	    }, this.$slots.default);
	  }
	};
	module.exports = exports['default'];

/***/ },

/***/ 193:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(193)

	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(131),
	  /* template */
	  null,
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/kyy/Documents/my/github/vue-material/src/components/mdLayout/mdLayout.vue"
	if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key !== "__esModule"}))) {console.error("named exports are not supported in *.vue files.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-a85016b8", Component.options)
	  } else {
	    hotAPI.reload("data-v-a85016b8", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }

/******/ })
}));
;