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

	module.exports = __webpack_require__(87);


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

/***/ 2:
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

/***/ 3:
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(9)((function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	}));

/***/ },

/***/ 5:
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },

/***/ 6:
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },

/***/ 8:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var getClosestVueParent = function getClosestVueParent($parent, cssClass) {
	  if (!$parent || !$parent.$el) {
	    return false;
	  }

	  if ($parent._uid === 0) {
	    return false;
	  }

	  if ($parent.$el.classList.contains(cssClass)) {
	    return $parent;
	  }

	  return getClosestVueParent($parent.$parent, cssClass);
	};

	exports.default = getClosestVueParent;
	module.exports = exports["default"];

/***/ },

/***/ 9:
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(6);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },

/***/ 11:
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },

/***/ 12:
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(14)
	  , createDesc = __webpack_require__(16);
	module.exports = __webpack_require__(4) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(10)
	  , IE8_DOM_DEFINE = __webpack_require__(31)
	  , toPrimitive    = __webpack_require__(36)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },

/***/ 15:
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },

/***/ 16:
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(25)('keys')
	  , uid    = __webpack_require__(27);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(32)
	  , defined = __webpack_require__(11);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(3)
	  , core      = __webpack_require__(5)
	  , ctx       = __webpack_require__(22)
	  , hide      = __webpack_require__(13)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(11);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },

/***/ 21:
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(29);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(6)
	  , document = __webpack_require__(3).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },

/***/ 24:
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(3)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(15)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },

/***/ 27:
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(34)
	  , enumBugKeys = __webpack_require__(24);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },

/***/ 29:
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(18)
	  , toLength  = __webpack_require__(26)
	  , toIndex   = __webpack_require__(35);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(4) && !__webpack_require__(9)((function(){
	  return Object.defineProperty(__webpack_require__(23)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	}));

/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(21);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(12)
	  , toIObject    = __webpack_require__(18)
	  , arrayIndexOf = __webpack_require__(30)(false)
	  , IE_PROTO     = __webpack_require__(17)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(15)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(6);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(42), __esModule: true };

/***/ },

/***/ 42:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(44);
	module.exports = __webpack_require__(5).Object.keys;

/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(19)
	  , core    = __webpack_require__(5)
	  , fails   = __webpack_require__(9);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails((function(){ fn(1); })), 'Object', exp);
	};

/***/ },

/***/ 44:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(20)
	  , $keys    = __webpack_require__(28);

	__webpack_require__(43)('keys', (function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	}));

/***/ },

/***/ 65:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var isArray = function isArray(value) {
	  return value && value.constructor === Array;
	};

	exports.default = isArray;
	module.exports = exports["default"];

/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = install;

	var _mdSelect = __webpack_require__(268);

	var _mdSelect2 = _interopRequireDefault(_mdSelect);

	var _mdOption = __webpack_require__(267);

	var _mdOption2 = _interopRequireDefault(_mdOption);

	var _mdSelect3 = __webpack_require__(215);

	var _mdSelect4 = _interopRequireDefault(_mdSelect3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function install(Vue) {
	  Vue.component('md-select', Vue.extend(_mdSelect2.default));
	  Vue.component('md-option', Vue.extend(_mdOption2.default));

	  Vue.material.styles.push(_mdSelect4.default);
	}
	module.exports = exports['default'];

/***/ },

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getClosestVueParent = __webpack_require__(8);

	var _getClosestVueParent2 = _interopRequireDefault(_getClosestVueParent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: {
	    value: [String, Boolean, Number]
	  },
	  data: function data() {
	    return {
	      parentSelect: {},
	      check: false,
	      index: 0
	    };
	  },
	  computed: {
	    isSelected: function isSelected() {
	      if (this.value && this.parentSelect.value) {
	        var thisValue = this.value.toString();

	        if (this.parentSelect.multiple) {
	          return this.parentSelect.value.indexOf(thisValue) >= 0;
	        }

	        return this.value && this.parentSelect.value && thisValue === this.parentSelect.value.toString();
	      }

	      return false;
	    },
	    classes: function classes() {
	      return {
	        'md-selected': this.isSelected,
	        'md-checked': this.check
	      };
	    }
	  },
	  methods: {
	    isMultiple: function isMultiple() {
	      return this.parentSelect.multiple;
	    },
	    setParentOption: function setParentOption() {
	      if (!this.isMultiple()) {
	        this.parentSelect.selectOption(this.value, this.$refs.item.textContent);
	      } else {
	        this.check = !this.check;
	      }
	    },
	    selectOption: function selectOption($event) {
	      this.setParentOption();
	      this.$emit('selected', $event);
	    }
	  },
	  watch: {
	    isSelected: function isSelected(selected) {
	      if (this.isMultiple()) {
	        this.check = selected;
	      }
	    },
	    check: function check(_check) {
	      if (_check) {
	        this.parentSelect.selectMultiple(this.index, this.value, this.$refs.item.textContent);
	      } else {
	        this.parentSelect.selectMultiple(this.index);
	      }
	    }
	  },
	  mounted: function mounted() {
	    this.parentSelect = (0, _getClosestVueParent2.default)(this.$parent, 'md-select');
	    this.parentContent = (0, _getClosestVueParent2.default)(this.$parent, 'md-menu-content');

	    if (!this.parentSelect) {
	      throw new Error('You must wrap the md-option in a md-select');
	    }

	    this.parentSelect.optionsAmount++;
	    this.index = this.parentSelect.optionsAmount;

	    this.parentSelect.multipleOptions[this.index] = {};
	    this.parentSelect.options[this.index] = this;

	    if (this.isMultiple() && this.parentSelect.value.indexOf(this.value) >= 0 || this.parentSelect.value === this.value) {
	      this.setParentOption();
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this.parentSelect) {
	      delete this.parentSelect.options[this.index];
	      delete this.parentSelect.multipleOptions[this.index];
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

/***/ },

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keys = __webpack_require__(38);

	var _keys2 = _interopRequireDefault(_keys);

	var _mixin = __webpack_require__(2);

	var _mixin2 = _interopRequireDefault(_mixin);

	var _getClosestVueParent = __webpack_require__(8);

	var _getClosestVueParent2 = _interopRequireDefault(_getClosestVueParent);

	var _isArray = __webpack_require__(65);

	var _isArray2 = _interopRequireDefault(_isArray);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: {
	    name: String,
	    id: String,
	    required: Boolean,
	    multiple: Boolean,
	    value: [String, Number, Array],
	    disabled: Boolean,
	    placeholder: String,
	    mdMenuClass: String
	  },
	  mixins: [_mixin2.default],
	  data: function data() {
	    return {
	      selectedValue: null,
	      selectedText: null,
	      multipleText: null,
	      multipleOptions: {},
	      options: {},
	      optionsAmount: 0
	    };
	  },

	  computed: {
	    classes: function classes() {
	      return {
	        'md-disabled': this.disabled
	      };
	    },
	    contentClasses: function contentClasses() {
	      if (this.multiple) {
	        return 'md-multiple ' + this.mdMenuClass;
	      }

	      return this.mdMenuClass;
	    }
	  },
	  watch: {
	    value: function value(_value) {
	      this.setTextAndValue(_value);
	    },
	    disabled: function disabled() {
	      this.setParentDisabled();
	    },
	    required: function required() {
	      this.setParentRequired();
	    },
	    placeholder: function placeholder() {
	      this.setParentPlaceholder();
	    }
	  },
	  methods: {
	    setParentDisabled: function setParentDisabled() {
	      this.parentContainer.isDisabled = this.disabled;
	    },
	    setParentRequired: function setParentRequired() {
	      this.parentContainer.isRequired = this.required;
	    },
	    setParentPlaceholder: function setParentPlaceholder() {
	      this.parentContainer.hasPlaceholder = !!this.placeholder;
	    },
	    getSingleValue: function getSingleValue(value) {
	      var _this = this;

	      var output = {};

	      (0, _keys2.default)(this.options).forEach((function (index) {
	        var options = _this.options[index];

	        if (options.value === value) {
	          output.value = value;
	          output.text = options.$refs.item.textContent;
	        }
	      }));

	      return output;
	    },
	    getMultipleValue: function getMultipleValue(modelValue) {
	      var _this2 = this;

	      if ((0, _isArray2.default)(this.value)) {
	        var outputText = [];

	        modelValue.forEach((function (value) {
	          (0, _keys2.default)(_this2.options).forEach((function (index) {
	            var options = _this2.options[index];

	            if (options.value === value) {
	              var text = options.$refs.item.textContent;

	              _this2.multipleOptions[index] = {
	                value: value,
	                text: text
	              };
	              outputText.push(text);
	            }
	          }));
	        }));

	        return {
	          value: modelValue,
	          text: outputText.join(', ')
	        };
	      }

	      return {};
	    },
	    setTextAndValue: function setTextAndValue(modelValue) {
	      var output = this.multiple ? this.getMultipleValue(modelValue) : this.getSingleValue(modelValue);

	      this.selectedValue = output.value;
	      this.selectedText = output.text;

	      if (this.selectedText && this.parentContainer) {
	        this.parentContainer.setValue(this.selectedText);
	      }
	    },
	    changeValue: function changeValue(value) {
	      this.$emit('input', value);
	      this.$emit('change', value);
	      this.$emit('selected', value);
	    },
	    selectMultiple: function selectMultiple(index, value, text) {
	      var values = [];

	      this.multipleOptions[index] = {
	        value: value,
	        text: text
	      };

	      for (var key in this.multipleOptions) {
	        if (this.multipleOptions.hasOwnProperty(key) && this.multipleOptions[key].value) {
	          values.push(this.multipleOptions[key].value);
	        }
	      }

	      this.changeValue(values);
	    },
	    selectOption: function selectOption(value, text) {
	      this.selectedText = text;
	      this.setTextAndValue(value);
	      this.changeValue(value);
	    }
	  },
	  mounted: function mounted() {
	    this.parentContainer = (0, _getClosestVueParent2.default)(this.$parent, 'md-input-container');

	    if (this.parentContainer) {
	      this.setParentDisabled();
	      this.setParentRequired();
	      this.setParentPlaceholder();
	      this.parentContainer.hasSelect = true;
	    }

	    this.setTextAndValue(this.value);
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this.parentContainer) {
	      this.parentContainer.setValue('');
	      this.parentContainer.hasSelect = false;
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

/***/ },

/***/ 192:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 215:
/***/ function(module, exports) {

	module.exports = ".THEME_NAME.md-select:after {\n  color: BACKGROUND-CONTRAST-0.54; }\n\n.THEME_NAME.md-select:after {\n  color: BACKGROUND-CONTRAST-0.38; }\n\n.THEME_NAME.md-select-content .md-menu-item.md-selected, .THEME_NAME.md-select-content .md-menu-item.md-checked {\n  color: PRIMARY-COLOR; }\n"

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(140),
	  /* template */
	  __webpack_require__(328),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/kyy/Documents/my/github/vue-material/src/components/mdSelect/mdOption.vue"
	if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key !== "__esModule"}))) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] mdOption.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6189afdd", Component.options)
	  } else {
	    hotAPI.reload("data-v-6189afdd", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(192)

	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(141),
	  /* template */
	  __webpack_require__(341),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/kyy/Documents/my/github/vue-material/src/components/mdSelect/mdSelect.vue"
	if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key !== "__esModule"}))) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] mdSelect.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-a6127e38", Component.options)
	  } else {
	    hotAPI.reload("data-v-a6127e38", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('md-menu-item', {
	    staticClass: "md-option",
	    class: _vm.classes,
	    attrs: {
	      "tabindex": "-1"
	    },
	    on: {
	      "click": _vm.selectOption
	    }
	  }, [(_vm.parentSelect.multiple) ? _c('md-checkbox', {
	    staticClass: "md-primary",
	    model: {
	      value: (_vm.check),
	      callback: function($$v) {
	        _vm.check = $$v
	      }
	    }
	  }, [_c('span', {
	    ref: "item"
	  }, [_vm._t("default")], 2)]) : _c('span', {
	    ref: "item"
	  }, [_vm._t("default")], 2)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6189afdd", module.exports)
	  }
	}

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "md-select",
	    class: [_vm.themeClass, _vm.classes]
	  }, [_c('md-menu', {
	    attrs: {
	      "md-close-on-select": !_vm.multiple
	    }
	  }, [_c('span', {
	    ref: "value",
	    staticClass: "md-select-value",
	    attrs: {
	      "md-menu-trigger": ""
	    }
	  }, [_vm._v(_vm._s(_vm.selectedText || _vm.multipleText || _vm.placeholder))]), _vm._v(" "), _c('md-menu-content', {
	    staticClass: "md-select-content",
	    class: [_vm.themeClass, _vm.contentClasses]
	  }, [_vm._t("default")], 2)], 1), _vm._v(" "), _c('select', {
	    attrs: {
	      "name": _vm.name,
	      "id": _vm.id,
	      "required": _vm.required,
	      "disabled": _vm.disabled,
	      "tabindex": "-1"
	    }
	  }, [_c('option', {
	    domProps: {
	      "value": _vm.value
	    }
	  }, [_vm._v(_vm._s(_vm.value))])])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-a6127e38", module.exports)
	  }
	}

/***/ }

/******/ })
}));
;