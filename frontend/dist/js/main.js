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
/******/ 	__webpack_require__.p = "/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }); })(); }

	"use strict";

	var _interopRequire = __webpack_require__(6)["default"];

	__webpack_require__(7);

	var React = _interopRequire(__webpack_require__(15));

	var Router = _interopRequire(__webpack_require__(4));

	var a11y = _interopRequire(__webpack_require__(9));

	var App = _interopRequire(__webpack_require__(3));

	a11y({ "throw": true });

	document.addEventListener("DOMContentLoaded", function (event) {
		React.render(React.createElement(App, null), document.getElementById("app"));
	});

	/* REACT HOT LOADER */ if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module)) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "entry.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }); })(); }


	/* REACT HOT LOADER */ if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module)) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "main.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }); })(); }

	"use strict";

	var _interopRequire = __webpack_require__(6)["default"];

	var React = _interopRequire(__webpack_require__(15));

	var Router = _interopRequire(__webpack_require__(4));

	var Locations = Router.Locations;
	var Location = Router.Location;
	var NotFound = Router.NotFound;

	var DocumentSignPage = _interopRequire(__webpack_require__(12));

	var DocumentDataPage = _interopRequire(__webpack_require__(13));

	var NotFoundPage = _interopRequire(__webpack_require__(14));

	var Header = _interopRequire(__webpack_require__(10));

	module.exports = React.createClass({
	  displayName: "App",

	  render: function render() {
	    return React.createElement(
	      "div",
	      { id: "app-container", className: "app-container" },
	      React.createElement(Header, null),
	      React.createElement(
	        Locations,
	        { id: "pages-container", className: "pages-container" },
	        React.createElement(Location, { path: "/document/sign", handler: DocumentSignPage }),
	        React.createElement(Location, { path: "/document/data", handler: DocumentDataPage }),
	        React.createElement(NotFound, { handler: DocumentSignPage })
	      )
	    );
	  }
	});

	/* REACT HOT LOADER */ if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module)) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "App.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Router                    = __webpack_require__(17);
	var Route                     = __webpack_require__(18);
	var Link                      = __webpack_require__(19);

	var RouterMixin               = __webpack_require__(20);
	var AsyncRouteRenderingMixin  = __webpack_require__(21);
	var RouteRenderingMixin       = __webpack_require__(22);

	var NavigatableMixin          = __webpack_require__(23);

	var environment               = __webpack_require__(25);

	var CaptureClicks             = __webpack_require__(24);

	module.exports = {
	  Locations: Router.Locations,
	  Pages: Router.Pages,

	  Location: Route.Route,
	  Page: Route.Route,
	  NotFound: Route.NotFound,

	  Link: Link,

	  environment: environment,

	  RouterMixin: RouterMixin,
	  RouteRenderingMixin: RouteRenderingMixin,
	  AsyncRouteRenderingMixin: AsyncRouteRenderingMixin,

	  NavigatableMixin: NavigatableMixin,
	  CaptureClicks: CaptureClicks
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Core.js 0.6.1
	 * https://github.com/zloirock/core-js
	 * License: http://rock.mit-license.org
	 * © 2015 Denis Pushkarev
	 */
	!function(global, framework, undefined){
	'use strict';

	/******************************************************************************
	 * Module : common                                                            *
	 ******************************************************************************/

	  // Shortcuts for [[Class]] & property names
	var OBJECT          = 'Object'
	  , FUNCTION        = 'Function'
	  , ARRAY           = 'Array'
	  , STRING          = 'String'
	  , NUMBER          = 'Number'
	  , REGEXP          = 'RegExp'
	  , DATE            = 'Date'
	  , MAP             = 'Map'
	  , SET             = 'Set'
	  , WEAKMAP         = 'WeakMap'
	  , WEAKSET         = 'WeakSet'
	  , SYMBOL          = 'Symbol'
	  , PROMISE         = 'Promise'
	  , MATH            = 'Math'
	  , ARGUMENTS       = 'Arguments'
	  , PROTOTYPE       = 'prototype'
	  , CONSTRUCTOR     = 'constructor'
	  , TO_STRING       = 'toString'
	  , TO_STRING_TAG   = TO_STRING + 'Tag'
	  , TO_LOCALE       = 'toLocaleString'
	  , HAS_OWN         = 'hasOwnProperty'
	  , FOR_EACH        = 'forEach'
	  , ITERATOR        = 'iterator'
	  , FF_ITERATOR     = '@@' + ITERATOR
	  , PROCESS         = 'process'
	  , CREATE_ELEMENT  = 'createElement'
	  // Aliases global objects and prototypes
	  , Function        = global[FUNCTION]
	  , Object          = global[OBJECT]
	  , Array           = global[ARRAY]
	  , String          = global[STRING]
	  , Number          = global[NUMBER]
	  , RegExp          = global[REGEXP]
	  , Date            = global[DATE]
	  , Map             = global[MAP]
	  , Set             = global[SET]
	  , WeakMap         = global[WEAKMAP]
	  , WeakSet         = global[WEAKSET]
	  , Symbol          = global[SYMBOL]
	  , Math            = global[MATH]
	  , TypeError       = global.TypeError
	  , RangeError      = global.RangeError
	  , setTimeout      = global.setTimeout
	  , setImmediate    = global.setImmediate
	  , clearImmediate  = global.clearImmediate
	  , parseInt        = global.parseInt
	  , isFinite        = global.isFinite
	  , process         = global[PROCESS]
	  , nextTick        = process && process.nextTick
	  , document        = global.document
	  , html            = document && document.documentElement
	  , navigator       = global.navigator
	  , define          = global.define
	  , console         = global.console || {}
	  , ArrayProto      = Array[PROTOTYPE]
	  , ObjectProto     = Object[PROTOTYPE]
	  , FunctionProto   = Function[PROTOTYPE]
	  , Infinity        = 1 / 0
	  , DOT             = '.';

	// http://jsperf.com/core-js-isobject
	function isObject(it){
	  return it !== null && (typeof it == 'object' || typeof it == 'function');
	}
	function isFunction(it){
	  return typeof it == 'function';
	}
	// Native function?
	var isNative = ctx(/./.test, /\[native code\]\s*\}\s*$/, 1);

	// Object internal [[Class]] or toStringTag
	// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring
	var toString = ObjectProto[TO_STRING];
	function setToStringTag(it, tag, stat){
	  if(it && !has(it = stat ? it : it[PROTOTYPE], SYMBOL_TAG))hidden(it, SYMBOL_TAG, tag);
	}
	function cof(it){
	  return toString.call(it).slice(8, -1);
	}
	function classof(it){
	  var O, T;
	  return it == undefined ? it === undefined ? 'Undefined' : 'Null'
	    : typeof (T = (O = Object(it))[SYMBOL_TAG]) == 'string' ? T : cof(O);
	}

	// Function
	var call  = FunctionProto.call
	  , apply = FunctionProto.apply
	  , REFERENCE_GET;
	// Partial apply
	function part(/* ...args */){
	  var fn     = assertFunction(this)
	    , length = arguments.length
	    , args   = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((args[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that    = this
	      , _length = arguments.length
	      , i = 0, j = 0, _args;
	    if(!holder && !_length)return invoke(fn, args, that);
	    _args = args.slice();
	    if(holder)for(;length > i; i++)if(_args[i] === _)_args[i] = arguments[j++];
	    while(_length > j)_args.push(arguments[j++]);
	    return invoke(fn, _args, that);
	  }
	}
	// Optional / simple context binding
	function ctx(fn, that, length){
	  assertFunction(fn);
	  if(~length && that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    }
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    }
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    }
	  } return function(/* ...args */){
	      return fn.apply(that, arguments);
	  }
	}
	// Fast apply
	// http://jsperf.lnkit.com/fast-apply/5
	function invoke(fn, args, that){
	  var un = that === undefined;
	  switch(args.length | 0){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	    case 5: return un ? fn(args[0], args[1], args[2], args[3], args[4])
	                      : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
	  } return              fn.apply(that, args);
	}

	// Object:
	var create           = Object.create
	  , getPrototypeOf   = Object.getPrototypeOf
	  , setPrototypeOf   = Object.setPrototypeOf
	  , defineProperty   = Object.defineProperty
	  , defineProperties = Object.defineProperties
	  , getOwnDescriptor = Object.getOwnPropertyDescriptor
	  , getKeys          = Object.keys
	  , getNames         = Object.getOwnPropertyNames
	  , getSymbols       = Object.getOwnPropertySymbols
	  , isFrozen         = Object.isFrozen
	  , has              = ctx(call, ObjectProto[HAS_OWN], 2)
	  // Dummy, fix for not array-like ES3 string in es5 module
	  , ES5Object        = Object
	  , Dict;
	function toObject(it){
	  return ES5Object(assertDefined(it));
	}
	function returnIt(it){
	  return it;
	}
	function returnThis(){
	  return this;
	}
	function get(object, key){
	  if(has(object, key))return object[key];
	}
	function ownKeys(it){
	  assertObject(it);
	  return getSymbols ? getNames(it).concat(getSymbols(it)) : getNames(it);
	}
	// 19.1.2.1 Object.assign(target, source, ...)
	var assign = Object.assign || function(target, source){
	  var T = Object(assertDefined(target))
	    , l = arguments.length
	    , i = 1;
	  while(l > i){
	    var S      = ES5Object(arguments[i++])
	      , keys   = getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)T[key = keys[j++]] = S[key];
	  }
	  return T;
	}
	function keyOf(object, el){
	  var O      = toObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	}

	// Array
	// array('str1,str2,str3') => ['str1', 'str2', 'str3']
	function array(it){
	  return String(it).split(',');
	}
	var push    = ArrayProto.push
	  , unshift = ArrayProto.unshift
	  , slice   = ArrayProto.slice
	  , splice  = ArrayProto.splice
	  , indexOf = ArrayProto.indexOf
	  , forEach = ArrayProto[FOR_EACH];
	/*
	 * 0 -> forEach
	 * 1 -> map
	 * 2 -> filter
	 * 3 -> some
	 * 4 -> every
	 * 5 -> find
	 * 6 -> findIndex
	 */
	function createArrayMethod(type){
	  var isMap       = type == 1
	    , isFilter    = type == 2
	    , isSome      = type == 3
	    , isEvery     = type == 4
	    , isFindIndex = type == 6
	    , noholes     = type == 5 || isFindIndex;
	  return function(callbackfn/*, that = undefined */){
	    var O      = Object(assertDefined(this))
	      , that   = arguments[1]
	      , self   = ES5Object(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = isMap ? Array(length) : isFilter ? [] : undefined
	      , val, res;
	    for(;length > index; index++)if(noholes || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(type){
	        if(isMap)result[index] = res;             // map
	        else if(res)switch(type){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(isEvery)return false;           // every
	      }
	    }
	    return isFindIndex ? -1 : isSome || isEvery ? isEvery : result;
	  }
	}
	function createArrayContains(isContains){
	  return function(el /*, fromIndex = 0 */){
	    var O      = toObject(this)
	      , length = toLength(O.length)
	      , index  = toIndex(arguments[1], length);
	    if(isContains && el != el){
	      for(;length > index; index++)if(sameNaN(O[index]))return isContains || index;
	    } else for(;length > index; index++)if(isContains || index in O){
	      if(O[index] === el)return isContains || index;
	    } return !isContains && -1;
	  }
	}
	function generic(A, B){
	  // strange IE quirks mode bug -> use typeof vs isFunction
	  return typeof A == 'function' ? A : B;
	}

	// Math
	var MAX_SAFE_INTEGER = 0x1fffffffffffff // pow(2, 53) - 1 == 9007199254740991
	  , pow    = Math.pow
	  , abs    = Math.abs
	  , ceil   = Math.ceil
	  , floor  = Math.floor
	  , max    = Math.max
	  , min    = Math.min
	  , random = Math.random
	  , trunc  = Math.trunc || function(it){
	      return (it > 0 ? floor : ceil)(it);
	    }
	// 20.1.2.4 Number.isNaN(number)
	function sameNaN(number){
	  return number != number;
	}
	// 7.1.4 ToInteger
	function toInteger(it){
	  return isNaN(it) ? 0 : trunc(it);
	}
	// 7.1.15 ToLength
	function toLength(it){
	  return it > 0 ? min(toInteger(it), MAX_SAFE_INTEGER) : 0;
	}
	function toIndex(index, length){
	  var index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	}
	function lz(num){
	  return num > 9 ? num : '0' + num;
	}

	function createReplacer(regExp, replace, isStatic){
	  var replacer = isObject(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(isStatic ? it : this).replace(regExp, replacer);
	  }
	}
	function createPointAt(toString){
	  return function(pos){
	    var s = String(assertDefined(this))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return toString ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? toString ? s.charAt(i) : a
	      : toString ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  }
	}

	// Assertion & errors
	var REDUCE_ERROR = 'Reduce of empty object with no initial value';
	function assert(condition, msg1, msg2){
	  if(!condition)throw TypeError(msg2 ? msg1 + msg2 : msg1);
	}
	function assertDefined(it){
	  if(it == undefined)throw TypeError('Function called on null or undefined');
	  return it;
	}
	function assertFunction(it){
	  assert(isFunction(it), it, ' is not a function!');
	  return it;
	}
	function assertObject(it){
	  assert(isObject(it), it, ' is not an object!');
	  return it;
	}
	function assertInstance(it, Constructor, name){
	  assert(it instanceof Constructor, name, ": use the 'new' operator!");
	}

	// Property descriptors & Symbol
	function descriptor(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  }
	}
	function simpleSet(object, key, value){
	  object[key] = value;
	  return object;
	}
	function createDefiner(bitmap){
	  return DESC ? function(object, key, value){
	    return defineProperty(object, key, descriptor(bitmap, value));
	  } : simpleSet;
	}
	function uid(key){
	  return SYMBOL + '(' + key + ')_' + (++sid + random())[TO_STRING](36);
	}
	function getWellKnownSymbol(name, setter){
	  return (Symbol && Symbol[name]) || (setter ? Symbol : safeSymbol)(SYMBOL + DOT + name);
	}
	// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
	var DESC = !!function(){
	      try {
	        return defineProperty({}, 'a', {get: function(){ return 2 }}).a == 2;
	      } catch(e){}
	    }()
	  , sid    = 0
	  , hidden = createDefiner(1)
	  , set    = Symbol ? simpleSet : hidden
	  , safeSymbol = Symbol || uid;
	function assignHidden(target, src){
	  for(var key in src)hidden(target, key, src[key]);
	  return target;
	}

	var SYMBOL_UNSCOPABLES = getWellKnownSymbol('unscopables')
	  , ArrayUnscopables   = ArrayProto[SYMBOL_UNSCOPABLES] || {}
	  , SYMBOL_TAG         = getWellKnownSymbol(TO_STRING_TAG)
	  , SYMBOL_SPECIES     = getWellKnownSymbol('species')
	  , SYMBOL_ITERATOR;
	function setSpecies(C){
	  if(DESC && (framework || !isNative(C)))defineProperty(C, SYMBOL_SPECIES, {
	    configurable: true,
	    get: returnThis
	  });
	}

	/******************************************************************************
	 * Module : common.export                                                     *
	 ******************************************************************************/

	var NODE = cof(process) == PROCESS
	  , core = {}
	  , path = framework ? global : core
	  , old  = global.core
	  , exportGlobal
	  // type bitmap
	  , FORCED = 1
	  , GLOBAL = 2
	  , STATIC = 4
	  , PROTO  = 8
	  , BIND   = 16
	  , WRAP   = 32;
	function $define(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & GLOBAL
	    , target   = isGlobal ? global : (type & STATIC)
	        ? global[name] : (global[name] || ObjectProto)[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // there is a similar native
	    own = !(type & FORCED) && target && key in target
	      && (!isFunction(target[key]) || isNative(target[key]));
	    // export native or passed
	    out = (own ? target : source)[key];
	    // prevent global pollution for namespaces
	    if(!framework && isGlobal && !isFunction(target[key]))exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & BIND && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & WRAP && !framework && target[key] == out){
	      exp = function(param){
	        return this instanceof out ? new out(param) : out(param);
	      }
	      exp[PROTOTYPE] = out[PROTOTYPE];
	    } else exp = type & PROTO && isFunction(out) ? ctx(call, out) : out;
	    // extend global
	    if(framework && target && !own){
	      if(isGlobal)target[key] = out;
	      else delete target[key] && hidden(target, key, out);
	    }
	    // export
	    if(exports[key] != out)hidden(exports, key, exp);
	  }
	}
	// CommonJS export
	if(typeof module != 'undefined' && module.exports)module.exports = core;
	// RequireJS export
	else if(isFunction(define) && define.amd)define(function(){return core});
	// Export to global object
	else exportGlobal = true;
	if(exportGlobal || framework){
	  core.noConflict = function(){
	    global.core = old;
	    return core;
	  }
	  global.core = core;
	}

	/******************************************************************************
	 * Module : common.iterators                                                  *
	 ******************************************************************************/

	SYMBOL_ITERATOR = getWellKnownSymbol(ITERATOR);
	var ITER  = safeSymbol('iter')
	  , KEY   = 1
	  , VALUE = 2
	  , Iterators = {}
	  , IteratorPrototype = {}
	    // Safari has byggy iterators w/o `next`
	  , BUGGY_ITERATORS = 'keys' in ArrayProto && !('next' in [].keys());
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	setIterator(IteratorPrototype, returnThis);
	function setIterator(O, value){
	  hidden(O, SYMBOL_ITERATOR, value);
	  // Add iterator for FF iterator protocol
	  FF_ITERATOR in ArrayProto && hidden(O, FF_ITERATOR, value);
	}
	function createIterator(Constructor, NAME, next, proto){
	  Constructor[PROTOTYPE] = create(proto || IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	}
	function defineIterator(Constructor, NAME, value, DEFAULT){
	  var proto = Constructor[PROTOTYPE]
	    , iter  = get(proto, SYMBOL_ITERATOR) || get(proto, FF_ITERATOR) || (DEFAULT && get(proto, DEFAULT)) || value;
	  if(framework){
	    // Define iterator
	    setIterator(proto, iter);
	    if(iter !== value){
	      var iterProto = getPrototypeOf(iter.call(new Constructor));
	      // Set @@toStringTag to native iterators
	      setToStringTag(iterProto, NAME + ' Iterator', true);
	      // FF fix
	      has(proto, FF_ITERATOR) && setIterator(iterProto, returnThis);
	    }
	  }
	  // Plug for library
	  Iterators[NAME] = iter;
	  // FF & v8 fix
	  Iterators[NAME + ' Iterator'] = returnThis;
	  return iter;
	}
	function defineStdIterators(Base, NAME, Constructor, next, DEFAULT, IS_SET){
	  function createIter(kind){
	    return function(){
	      return new Constructor(this, kind);
	    }
	  }
	  createIterator(Constructor, NAME, next);
	  var entries = createIter(KEY+VALUE)
	    , values  = createIter(VALUE);
	  if(DEFAULT == VALUE)values = defineIterator(Base, NAME, values, 'values');
	  else entries = defineIterator(Base, NAME, entries, 'entries');
	  if(DEFAULT){
	    $define(PROTO + FORCED * BUGGY_ITERATORS, NAME, {
	      entries: entries,
	      keys: IS_SET ? values : createIter(KEY),
	      values: values
	    });
	  }
	}
	function iterResult(done, value){
	  return {value: value, done: !!done};
	}
	function isIterable(it){
	  var O      = Object(it)
	    , Symbol = global[SYMBOL]
	    , hasExt = (Symbol && Symbol[ITERATOR] || FF_ITERATOR) in O;
	  return hasExt || SYMBOL_ITERATOR in O || has(Iterators, classof(O));
	}
	function getIterator(it){
	  var Symbol  = global[SYMBOL]
	    , ext     = it[Symbol && Symbol[ITERATOR] || FF_ITERATOR]
	    , getIter = ext || it[SYMBOL_ITERATOR] || Iterators[classof(it)];
	  return assertObject(getIter.call(it));
	}
	function stepCall(fn, value, entries){
	  return entries ? invoke(fn, value) : fn(value);
	}
	function checkDangerIterClosing(fn){
	  var danger = true;
	  var O = {
	    next: function(){ throw 1 },
	    'return': function(){ danger = false }
	  };
	  O[SYMBOL_ITERATOR] = returnThis;
	  try {
	    fn(O);
	  } catch(e){}
	  return danger;
	}
	function closeIterator(iterator){
	  var ret = iterator['return'];
	  if(ret !== undefined)ret.call(iterator);
	}
	function safeIterClose(exec, iterator){
	  try {
	    exec(iterator);
	  } catch(e){
	    closeIterator(iterator);
	    throw e;
	  }
	}
	function forOf(iterable, entries, fn, that){
	  safeIterClose(function(iterator){
	    var f = ctx(fn, that, entries ? 2 : 1)
	      , step;
	    while(!(step = iterator.next()).done)if(stepCall(f, step.value, entries) === false){
	      return closeIterator(iterator);
	    }
	  }, getIterator(iterable));
	}

	/******************************************************************************
	 * Module : es6.symbol                                                        *
	 ******************************************************************************/

	// ECMAScript 6 symbols shim
	!function(TAG, SymbolRegistry, AllSymbols, setter){
	  // 19.4.1.1 Symbol([description])
	  if(!isNative(Symbol)){
	    Symbol = function(description){
	      assert(!(this instanceof Symbol), SYMBOL + ' is not a ' + CONSTRUCTOR);
	      var tag = uid(description)
	        , sym = set(create(Symbol[PROTOTYPE]), TAG, tag);
	      AllSymbols[tag] = sym;
	      DESC && setter && defineProperty(ObjectProto, tag, {
	        configurable: true,
	        set: function(value){
	          hidden(this, tag, value);
	        }
	      });
	      return sym;
	    }
	    hidden(Symbol[PROTOTYPE], TO_STRING, function(){
	      return this[TAG];
	    });
	  }
	  $define(GLOBAL + WRAP, {Symbol: Symbol});
	  
	  var symbolStatics = {
	    // 19.4.2.1 Symbol.for(key)
	    'for': function(key){
	      return has(SymbolRegistry, key += '')
	        ? SymbolRegistry[key]
	        : SymbolRegistry[key] = Symbol(key);
	    },
	    // 19.4.2.4 Symbol.iterator
	    iterator: SYMBOL_ITERATOR || getWellKnownSymbol(ITERATOR),
	    // 19.4.2.5 Symbol.keyFor(sym)
	    keyFor: part.call(keyOf, SymbolRegistry),
	    // 19.4.2.10 Symbol.species
	    species: SYMBOL_SPECIES,
	    // 19.4.2.13 Symbol.toStringTag
	    toStringTag: SYMBOL_TAG = getWellKnownSymbol(TO_STRING_TAG, true),
	    // 19.4.2.14 Symbol.unscopables
	    unscopables: SYMBOL_UNSCOPABLES,
	    pure: safeSymbol,
	    set: set,
	    useSetter: function(){setter = true},
	    useSimple: function(){setter = false}
	  };
	  // 19.4.2.2 Symbol.hasInstance
	  // 19.4.2.3 Symbol.isConcatSpreadable
	  // 19.4.2.6 Symbol.match
	  // 19.4.2.8 Symbol.replace
	  // 19.4.2.9 Symbol.search
	  // 19.4.2.11 Symbol.split
	  // 19.4.2.12 Symbol.toPrimitive
	  forEach.call(array('hasInstance,isConcatSpreadable,match,replace,search,split,toPrimitive'),
	    function(it){
	      symbolStatics[it] = getWellKnownSymbol(it);
	    }
	  );
	  $define(STATIC, SYMBOL, symbolStatics);
	  
	  setToStringTag(Symbol, SYMBOL);
	  
	  $define(STATIC + FORCED * !isNative(Symbol), OBJECT, {
	    // 19.1.2.7 Object.getOwnPropertyNames(O)
	    getOwnPropertyNames: function(it){
	      var names = getNames(toObject(it)), result = [], key, i = 0;
	      while(names.length > i)has(AllSymbols, key = names[i++]) || result.push(key);
	      return result;
	    },
	    // 19.1.2.8 Object.getOwnPropertySymbols(O)
	    getOwnPropertySymbols: function(it){
	      var names = getNames(toObject(it)), result = [], key, i = 0;
	      while(names.length > i)has(AllSymbols, key = names[i++]) && result.push(AllSymbols[key]);
	      return result;
	    }
	  });
	  
	  // 20.2.1.9 Math[@@toStringTag]
	  setToStringTag(Math, MATH, true);
	  // 24.3.3 JSON[@@toStringTag]
	  setToStringTag(global.JSON, 'JSON', true);
	}(safeSymbol('tag'), {}, {}, true);

	/******************************************************************************
	 * Module : es6.object.statics                                                *
	 ******************************************************************************/

	!function(){
	  var objectStatic = {
	    // 19.1.3.1 Object.assign(target, source)
	    assign: assign,
	    // 19.1.3.10 Object.is(value1, value2)
	    is: function(x, y){
	      return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	    }
	  };
	  // 19.1.3.19 Object.setPrototypeOf(O, proto)
	  // Works with __proto__ only. Old v8 can't works with null proto objects.
	  '__proto__' in ObjectProto && function(buggy, set){
	    try {
	      set = ctx(call, getOwnDescriptor(ObjectProto, '__proto__').set, 2);
	      set({}, ArrayProto);
	    } catch(e){ buggy = true }
	    objectStatic.setPrototypeOf = setPrototypeOf = setPrototypeOf || function(O, proto){
	      assertObject(O);
	      assert(proto === null || isObject(proto), proto, ": can't set as prototype!");
	      if(buggy)O.__proto__ = proto;
	      else set(O, proto);
	      return O;
	    }
	  }();
	  $define(STATIC, OBJECT, objectStatic);
	}();

	/******************************************************************************
	 * Module : es6.object.statics-accept-primitives                              *
	 ******************************************************************************/

	!function(){
	  // Object static methods accept primitives
	  function wrapObjectMethod(key, MODE){
	    var fn  = Object[key]
	      , exp = core[OBJECT][key]
	      , f   = 0
	      , o   = {};
	    if(!exp || isNative(exp)){
	      o[key] = MODE == 1 ? function(it){
	        return isObject(it) ? fn(it) : it;
	      } : MODE == 2 ? function(it){
	        return isObject(it) ? fn(it) : true;
	      } : MODE == 3 ? function(it){
	        return isObject(it) ? fn(it) : false;
	      } : MODE == 4 ? function(it, key){
	        return fn(toObject(it), key);
	      } : function(it){
	        return fn(toObject(it));
	      };
	      try { fn(DOT) }
	      catch(e){ f = 1 }
	      $define(STATIC + FORCED * f, OBJECT, o);
	    }
	  }
	  wrapObjectMethod('freeze', 1);
	  wrapObjectMethod('seal', 1);
	  wrapObjectMethod('preventExtensions', 1);
	  wrapObjectMethod('isFrozen', 2);
	  wrapObjectMethod('isSealed', 2);
	  wrapObjectMethod('isExtensible', 3);
	  wrapObjectMethod('getOwnPropertyDescriptor', 4);
	  wrapObjectMethod('getPrototypeOf');
	  wrapObjectMethod('keys');
	  wrapObjectMethod('getOwnPropertyNames');
	}();

	/******************************************************************************
	 * Module : es6.number.statics                                                *
	 ******************************************************************************/

	!function(isInteger){
	  $define(STATIC, NUMBER, {
	    // 20.1.2.1 Number.EPSILON
	    EPSILON: pow(2, -52),
	    // 20.1.2.2 Number.isFinite(number)
	    isFinite: function(it){
	      return typeof it == 'number' && isFinite(it);
	    },
	    // 20.1.2.3 Number.isInteger(number)
	    isInteger: isInteger,
	    // 20.1.2.4 Number.isNaN(number)
	    isNaN: sameNaN,
	    // 20.1.2.5 Number.isSafeInteger(number)
	    isSafeInteger: function(number){
	      return isInteger(number) && abs(number) <= MAX_SAFE_INTEGER;
	    },
	    // 20.1.2.6 Number.MAX_SAFE_INTEGER
	    MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
	    // 20.1.2.10 Number.MIN_SAFE_INTEGER
	    MIN_SAFE_INTEGER: -MAX_SAFE_INTEGER,
	    // 20.1.2.12 Number.parseFloat(string)
	    parseFloat: parseFloat,
	    // 20.1.2.13 Number.parseInt(string, radix)
	    parseInt: parseInt
	  });
	// 20.1.2.3 Number.isInteger(number)
	}(Number.isInteger || function(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	});

	/******************************************************************************
	 * Module : es6.math                                                          *
	 ******************************************************************************/

	// ECMAScript 6 shim
	!function(){
	  // 20.2.2.28 Math.sign(x)
	  var E    = Math.E
	    , exp  = Math.exp
	    , log  = Math.log
	    , sqrt = Math.sqrt
	    , sign = Math.sign || function(x){
	        return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	      };
	  
	  // 20.2.2.5 Math.asinh(x)
	  function asinh(x){
	    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log(x + sqrt(x * x + 1));
	  }
	  // 20.2.2.14 Math.expm1(x)
	  function expm1(x){
	    return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : exp(x) - 1;
	  }
	    
	  $define(STATIC, MATH, {
	    // 20.2.2.3 Math.acosh(x)
	    acosh: function(x){
	      return (x = +x) < 1 ? NaN : isFinite(x) ? log(x / E + sqrt(x + 1) * sqrt(x - 1) / E) + 1 : x;
	    },
	    // 20.2.2.5 Math.asinh(x)
	    asinh: asinh,
	    // 20.2.2.7 Math.atanh(x)
	    atanh: function(x){
	      return (x = +x) == 0 ? x : log((1 + x) / (1 - x)) / 2;
	    },
	    // 20.2.2.9 Math.cbrt(x)
	    cbrt: function(x){
	      return sign(x = +x) * pow(abs(x), 1 / 3);
	    },
	    // 20.2.2.11 Math.clz32(x)
	    clz32: function(x){
	      return (x >>>= 0) ? 32 - x[TO_STRING](2).length : 32;
	    },
	    // 20.2.2.12 Math.cosh(x)
	    cosh: function(x){
	      return (exp(x = +x) + exp(-x)) / 2;
	    },
	    // 20.2.2.14 Math.expm1(x)
	    expm1: expm1,
	    // 20.2.2.16 Math.fround(x)
	    // TODO: fallback for IE9-
	    fround: function(x){
	      return new Float32Array([x])[0];
	    },
	    // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	    hypot: function(value1, value2){
	      var sum  = 0
	        , len1 = arguments.length
	        , len2 = len1
	        , args = Array(len1)
	        , larg = -Infinity
	        , arg;
	      while(len1--){
	        arg = args[len1] = +arguments[len1];
	        if(arg == Infinity || arg == -Infinity)return Infinity;
	        if(arg > larg)larg = arg;
	      }
	      larg = arg || 1;
	      while(len2--)sum += pow(args[len2] / larg, 2);
	      return larg * sqrt(sum);
	    },
	    // 20.2.2.18 Math.imul(x, y)
	    imul: function(x, y){
	      var UInt16 = 0xffff
	        , xn = +x
	        , yn = +y
	        , xl = UInt16 & xn
	        , yl = UInt16 & yn;
	      return 0 | xl * yl + ((UInt16 & xn >>> 16) * yl + xl * (UInt16 & yn >>> 16) << 16 >>> 0);
	    },
	    // 20.2.2.20 Math.log1p(x)
	    log1p: function(x){
	      return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log(1 + x);
	    },
	    // 20.2.2.21 Math.log10(x)
	    log10: function(x){
	      return log(x) / Math.LN10;
	    },
	    // 20.2.2.22 Math.log2(x)
	    log2: function(x){
	      return log(x) / Math.LN2;
	    },
	    // 20.2.2.28 Math.sign(x)
	    sign: sign,
	    // 20.2.2.30 Math.sinh(x)
	    sinh: function(x){
	      return (abs(x = +x) < 1) ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (E / 2);
	    },
	    // 20.2.2.33 Math.tanh(x)
	    tanh: function(x){
	      var a = expm1(x = +x)
	        , b = expm1(-x);
	      return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	    },
	    // 20.2.2.34 Math.trunc(x)
	    trunc: trunc
	  });
	}();

	/******************************************************************************
	 * Module : es6.string                                                        *
	 ******************************************************************************/

	!function(fromCharCode){
	  function assertNotRegExp(it){
	    if(cof(it) == REGEXP)throw TypeError();
	  }
	  
	  $define(STATIC, STRING, {
	    // 21.1.2.2 String.fromCodePoint(...codePoints)
	    fromCodePoint: function(x){
	      var res = []
	        , len = arguments.length
	        , i   = 0
	        , code
	      while(len > i){
	        code = +arguments[i++];
	        if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	        res.push(code < 0x10000
	          ? fromCharCode(code)
	          : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	        );
	      } return res.join('');
	    },
	    // 21.1.2.4 String.raw(callSite, ...substitutions)
	    raw: function(callSite){
	      var raw = toObject(callSite.raw)
	        , len = toLength(raw.length)
	        , sln = arguments.length
	        , res = []
	        , i   = 0;
	      while(len > i){
	        res.push(String(raw[i++]));
	        if(i < sln)res.push(String(arguments[i]));
	      } return res.join('');
	    }
	  });
	  
	  $define(PROTO, STRING, {
	    // 21.1.3.3 String.prototype.codePointAt(pos)
	    codePointAt: createPointAt(false),
	    // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	    endsWith: function(searchString /*, endPosition = @length */){
	      assertNotRegExp(searchString);
	      var that = String(assertDefined(this))
	        , endPosition = arguments[1]
	        , len = toLength(that.length)
	        , end = endPosition === undefined ? len : min(toLength(endPosition), len);
	      searchString += '';
	      return that.slice(end - searchString.length, end) === searchString;
	    },
	    // 21.1.3.7 String.prototype.includes(searchString, position = 0)
	    includes: function(searchString /*, position = 0 */){
	      assertNotRegExp(searchString);
	      return !!~String(assertDefined(this)).indexOf(searchString, arguments[1]);
	    },
	    // 21.1.3.13 String.prototype.repeat(count)
	    repeat: function(count){
	      var str = String(assertDefined(this))
	        , res = ''
	        , n   = toInteger(count);
	      if(0 > n || n == Infinity)throw RangeError("Count can't be negative");
	      for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	      return res;
	    },
	    // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	    startsWith: function(searchString /*, position = 0 */){
	      assertNotRegExp(searchString);
	      var that  = String(assertDefined(this))
	        , index = toLength(min(arguments[1], that.length));
	      searchString += '';
	      return that.slice(index, index + searchString.length) === searchString;
	    }
	  });
	}(String.fromCharCode);

	/******************************************************************************
	 * Module : es6.array.statics                                                 *
	 ******************************************************************************/

	!function(){
	  $define(STATIC + FORCED * checkDangerIterClosing(Array.from), ARRAY, {
	    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	    from: function(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	      var O       = Object(assertDefined(arrayLike))
	        , mapfn   = arguments[1]
	        , mapping = mapfn !== undefined
	        , f       = mapping ? ctx(mapfn, arguments[2], 2) : undefined
	        , index   = 0
	        , length, result, step;
	      if(isIterable(O)){
	        result = new (generic(this, Array));
	        safeIterClose(function(iterator){
	          for(; !(step = iterator.next()).done; index++){
	            result[index] = mapping ? f(step.value, index) : step.value;
	          }
	        }, getIterator(O));
	      } else {
	        result = new (generic(this, Array))(length = toLength(O.length));
	        for(; length > index; index++){
	          result[index] = mapping ? f(O[index], index) : O[index];
	        }
	      }
	      result.length = index;
	      return result;
	    }
	  });
	  
	  $define(STATIC, ARRAY, {
	    // 22.1.2.3 Array.of( ...items)
	    of: function(/* ...args */){
	      var index  = 0
	        , length = arguments.length
	        , result = new (generic(this, Array))(length);
	      while(length > index)result[index] = arguments[index++];
	      result.length = length;
	      return result;
	    }
	  });
	  
	  setSpecies(Array);
	}();

	/******************************************************************************
	 * Module : es6.array.prototype                                               *
	 ******************************************************************************/

	!function(){
	  $define(PROTO, ARRAY, {
	    // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	    copyWithin: function(target /* = 0 */, start /* = 0, end = @length */){
	      var O     = Object(assertDefined(this))
	        , len   = toLength(O.length)
	        , to    = toIndex(target, len)
	        , from  = toIndex(start, len)
	        , end   = arguments[2]
	        , fin   = end === undefined ? len : toIndex(end, len)
	        , count = min(fin - from, len - to)
	        , inc   = 1;
	      if(from < to && to < from + count){
	        inc  = -1;
	        from = from + count - 1;
	        to   = to + count - 1;
	      }
	      while(count-- > 0){
	        if(from in O)O[to] = O[from];
	        else delete O[to];
	        to += inc;
	        from += inc;
	      } return O;
	    },
	    // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	    fill: function(value /*, start = 0, end = @length */){
	      var O      = Object(assertDefined(this))
	        , length = toLength(O.length)
	        , index  = toIndex(arguments[1], length)
	        , end    = arguments[2]
	        , endPos = end === undefined ? length : toIndex(end, length);
	      while(endPos > index)O[index++] = value;
	      return O;
	    },
	    // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	    find: createArrayMethod(5),
	    // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	    findIndex: createArrayMethod(6)
	  });
	  
	  if(framework){
	    // 22.1.3.31 Array.prototype[@@unscopables]
	    forEach.call(array('find,findIndex,fill,copyWithin,entries,keys,values'), function(it){
	      ArrayUnscopables[it] = true;
	    });
	    SYMBOL_UNSCOPABLES in ArrayProto || hidden(ArrayProto, SYMBOL_UNSCOPABLES, ArrayUnscopables);
	  }
	}();

	/******************************************************************************
	 * Module : es6.iterators                                                     *
	 ******************************************************************************/

	!function(at){
	  // 22.1.3.4 Array.prototype.entries()
	  // 22.1.3.13 Array.prototype.keys()
	  // 22.1.3.29 Array.prototype.values()
	  // 22.1.3.30 Array.prototype[@@iterator]()
	  defineStdIterators(Array, ARRAY, function(iterated, kind){
	    set(this, ITER, {o: toObject(iterated), i: 0, k: kind});
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	  }, function(){
	    var iter  = this[ITER]
	      , O     = iter.o
	      , kind  = iter.k
	      , index = iter.i++;
	    if(!O || index >= O.length){
	      iter.o = undefined;
	      return iterResult(1);
	    }
	    if(kind == KEY)  return iterResult(0, index);
	    if(kind == VALUE)return iterResult(0, O[index]);
	                     return iterResult(0, [index, O[index]]);
	  }, VALUE);
	  
	  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	  Iterators[ARGUMENTS] = Iterators[ARRAY];
	  
	  // 21.1.3.27 String.prototype[@@iterator]()
	  defineStdIterators(String, STRING, function(iterated){
	    set(this, ITER, {o: String(iterated), i: 0});
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	  }, function(){
	    var iter  = this[ITER]
	      , O     = iter.o
	      , index = iter.i
	      , point;
	    if(index >= O.length)return iterResult(1);
	    point = at.call(O, index);
	    iter.i += point.length;
	    return iterResult(0, point);
	  });
	}(createPointAt(true));

	/******************************************************************************
	 * Module : web.immediate                                                     *
	 ******************************************************************************/

	// setImmediate shim
	// Node.js 0.9+ & IE10+ has setImmediate, else:
	isFunction(setImmediate) && isFunction(clearImmediate) || function(ONREADYSTATECHANGE){
	  var postMessage      = global.postMessage
	    , addEventListener = global.addEventListener
	    , MessageChannel   = global.MessageChannel
	    , counter          = 0
	    , queue            = {}
	    , defer, channel, port;
	  setImmediate = function(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(isFunction(fn) ? fn : Function(fn), args);
	    }
	    defer(counter);
	    return counter;
	  }
	  clearImmediate = function(id){
	    delete queue[id];
	  }
	  function run(id){
	    if(has(queue, id)){
	      var fn = queue[id];
	      delete queue[id];
	      fn();
	    }
	  }
	  function listner(event){
	    run(event.data);
	  }
	  // Node.js 0.8-
	  if(NODE){
	    defer = function(id){
	      nextTick(part.call(run, id));
	    }
	  // Modern browsers, skip implementation for WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is object
	  } else if(addEventListener && isFunction(postMessage) && !global.importScripts){
	    defer = function(id){
	      postMessage(id, '*');
	    }
	    addEventListener('message', listner, false);
	  // WebWorkers
	  } else if(isFunction(MessageChannel)){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // IE8-
	  } else if(document && ONREADYSTATECHANGE in document[CREATE_ELEMENT]('script')){
	    defer = function(id){
	      html.appendChild(document[CREATE_ELEMENT]('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run(id);
	      }
	    }
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(run, 0, id);
	    }
	  }
	}('onreadystatechange');
	$define(GLOBAL + BIND, {
	  setImmediate:   setImmediate,
	  clearImmediate: clearImmediate
	});

	/******************************************************************************
	 * Module : es6.promise                                                       *
	 ******************************************************************************/

	// ES6 promises shim
	// Based on https://github.com/getify/native-promise-only/
	!function(Promise, test){
	  isFunction(Promise) && isFunction(Promise.resolve)
	  && Promise.resolve(test = new Promise(function(){})) == test
	  || function(asap, RECORD){
	    function isThenable(it){
	      var then;
	      if(isObject(it))then = it.then;
	      return isFunction(then) ? then : false;
	    }
	    function handledRejectionOrHasOnRejected(promise){
	      var record = promise[RECORD]
	        , chain  = record.c
	        , i      = 0
	        , react;
	      if(record.h)return true;
	      while(chain.length > i){
	        react = chain[i++];
	        if(react.fail || handledRejectionOrHasOnRejected(react.P))return true;
	      }
	    }
	    function notify(record, reject){
	      var chain = record.c;
	      if(reject || chain.length)asap(function(){
	        var promise = record.p
	          , value   = record.v
	          , ok      = record.s == 1
	          , i       = 0;
	        if(reject && !handledRejectionOrHasOnRejected(promise)){
	          setTimeout(function(){
	            if(!handledRejectionOrHasOnRejected(promise)){
	              if(NODE){
	                if(!process.emit('unhandledRejection', value, promise)){
	                  // default node.js behavior
	                }
	              } else if(isFunction(console.error)){
	                console.error('Unhandled promise rejection', value);
	              }
	            }
	          }, 1e3);
	        } else while(chain.length > i)!function(react){
	          var cb = ok ? react.ok : react.fail
	            , ret, then;
	          try {
	            if(cb){
	              if(!ok)record.h = true;
	              ret = cb === true ? value : cb(value);
	              if(ret === react.P){
	                react.rej(TypeError(PROMISE + '-chain cycle'));
	              } else if(then = isThenable(ret)){
	                then.call(ret, react.res, react.rej);
	              } else react.res(ret);
	            } else react.rej(value);
	          } catch(err){
	            react.rej(err);
	          }
	        }(chain[i++]);
	        chain.length = 0;
	      });
	    }
	    function resolve(value){
	      var record = this
	        , then, wrapper;
	      if(record.d)return;
	      record.d = true;
	      record = record.r || record; // unwrap
	      try {
	        if(then = isThenable(value)){
	          wrapper = {r: record, d: false}; // wrap
	          then.call(value, ctx(resolve, wrapper, 1), ctx(reject, wrapper, 1));
	        } else {
	          record.v = value;
	          record.s = 1;
	          notify(record);
	        }
	      } catch(err){
	        reject.call(wrapper || {r: record, d: false}, err); // wrap
	      }
	    }
	    function reject(value){
	      var record = this;
	      if(record.d)return;
	      record.d = true;
	      record = record.r || record; // unwrap
	      record.v = value;
	      record.s = 2;
	      notify(record, true);
	    }
	    function getConstructor(C){
	      var S = assertObject(C)[SYMBOL_SPECIES];
	      return S != undefined ? S : C;
	    }
	    // 25.4.3.1 Promise(executor)
	    Promise = function(executor){
	      assertFunction(executor);
	      assertInstance(this, Promise, PROMISE);
	      var record = {
	        p: this,      // promise
	        c: [],        // chain
	        s: 0,         // state
	        d: false,     // done
	        v: undefined, // value
	        h: false      // handled rejection
	      };
	      hidden(this, RECORD, record);
	      try {
	        executor(ctx(resolve, record, 1), ctx(reject, record, 1));
	      } catch(err){
	        reject.call(record, err);
	      }
	    }
	    assignHidden(Promise[PROTOTYPE], {
	      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	      then: function(onFulfilled, onRejected){
	        var S = assertObject(assertObject(this)[CONSTRUCTOR])[SYMBOL_SPECIES];
	        var react = {
	          ok:   isFunction(onFulfilled) ? onFulfilled : true,
	          fail: isFunction(onRejected)  ? onRejected  : false
	        } , P = react.P = new (S != undefined ? S : Promise)(function(resolve, reject){
	          react.res = assertFunction(resolve);
	          react.rej = assertFunction(reject);
	        }), record = this[RECORD];
	        record.c.push(react);
	        record.s && notify(record);
	        return P;
	      },
	      // 25.4.5.1 Promise.prototype.catch(onRejected)
	      'catch': function(onRejected){
	        return this.then(undefined, onRejected);
	      }
	    });
	    assignHidden(Promise, {
	      // 25.4.4.1 Promise.all(iterable)
	      all: function(iterable){
	        var Promise = getConstructor(this)
	          , values  = [];
	        return new Promise(function(resolve, reject){
	          forOf(iterable, false, push, values);
	          var remaining = values.length
	            , results   = Array(remaining);
	          if(remaining)forEach.call(values, function(promise, index){
	            Promise.resolve(promise).then(function(value){
	              results[index] = value;
	              --remaining || resolve(results);
	            }, reject);
	          });
	          else resolve(results);
	        });
	      },
	      // 25.4.4.4 Promise.race(iterable)
	      race: function(iterable){
	        var Promise = getConstructor(this);
	        return new Promise(function(resolve, reject){
	          forOf(iterable, false, function(promise){
	            Promise.resolve(promise).then(resolve, reject);
	          });
	        });
	      },
	      // 25.4.4.5 Promise.reject(r)
	      reject: function(r){
	        return new (getConstructor(this))(function(resolve, reject){
	          reject(r);
	        });
	      },
	      // 25.4.4.6 Promise.resolve(x)
	      resolve: function(x){
	        return isObject(x) && RECORD in x && getPrototypeOf(x) === this[PROTOTYPE]
	          ? x : new (getConstructor(this))(function(resolve, reject){
	            resolve(x);
	          });
	      }
	    });
	  }(nextTick || setImmediate, safeSymbol('record'));
	  setToStringTag(Promise, PROMISE);
	  setSpecies(Promise);
	  $define(GLOBAL + FORCED * !isNative(Promise), {Promise: Promise});
	}(global[PROMISE]);

	/******************************************************************************
	 * Module : es6.collections                                                   *
	 ******************************************************************************/

	// ECMAScript 6 collections shim
	!function(){
	  var UID   = safeSymbol('uid')
	    , O1    = safeSymbol('O1')
	    , WEAK  = safeSymbol('weak')
	    , LEAK  = safeSymbol('leak')
	    , LAST  = safeSymbol('last')
	    , FIRST = safeSymbol('first')
	    , SIZE  = DESC ? safeSymbol('size') : 'size'
	    , uid   = 0
	    , tmp   = {};
	  
	  function getCollection(C, NAME, methods, commonMethods, isMap, isWeak){
	    var ADDER = isMap ? 'set' : 'add'
	      , proto = C && C[PROTOTYPE]
	      , O     = {};
	    function initFromIterable(that, iterable){
	      if(iterable != undefined)forOf(iterable, isMap, that[ADDER], that);
	      return that;
	    }
	    function fixSVZ(key, chain){
	      var method = proto[key];
	      if(framework)proto[key] = function(a, b){
	        var result = method.call(this, a === 0 ? 0 : a, b);
	        return chain ? this : result;
	      };
	    }
	    if(!isNative(C) || !(isWeak || (!BUGGY_ITERATORS && has(proto, FOR_EACH) && has(proto, 'entries')))){
	      // create collection constructor
	      C = isWeak
	        ? function(iterable){
	            assertInstance(this, C, NAME);
	            set(this, UID, uid++);
	            initFromIterable(this, iterable);
	          }
	        : function(iterable){
	            var that = this;
	            assertInstance(that, C, NAME);
	            set(that, O1, create(null));
	            set(that, SIZE, 0);
	            set(that, LAST, undefined);
	            set(that, FIRST, undefined);
	            initFromIterable(that, iterable);
	          };
	      assignHidden(assignHidden(C[PROTOTYPE], methods), commonMethods);
	      isWeak || !DESC || defineProperty(C[PROTOTYPE], 'size', {get: function(){
	        return assertDefined(this[SIZE]);
	      }});
	    } else {
	      var Native = C
	        , inst   = new C
	        , chain  = inst[ADDER](isWeak ? {} : -0, 1)
	        , buggyZero;
	      // wrap to init collections from iterable
	      if(checkDangerIterClosing(function(O){ new C(O) })){
	        C = function(iterable){
	          assertInstance(this, C, NAME);
	          return initFromIterable(new Native, iterable);
	        }
	        C[PROTOTYPE] = proto;
	        if(framework)proto[CONSTRUCTOR] = C;
	      }
	      isWeak || inst[FOR_EACH](function(val, key){
	        buggyZero = 1 / key === -Infinity;
	      });
	      // fix converting -0 key to +0
	      if(buggyZero){
	        fixSVZ('delete');
	        fixSVZ('has');
	        isMap && fixSVZ('get');
	      }
	      // + fix .add & .set for chaining
	      if(buggyZero || chain !== inst)fixSVZ(ADDER, true);
	    }
	    setToStringTag(C, NAME);
	    setSpecies(C);
	    
	    O[NAME] = C;
	    $define(GLOBAL + WRAP + FORCED * !isNative(C), O);
	    
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    isWeak || defineStdIterators(C, NAME, function(iterated, kind){
	      set(this, ITER, {o: iterated, k: kind});
	    }, function(){
	      var iter  = this[ITER]
	        , kind  = iter.k
	        , entry = iter.l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!iter.o || !(iter.l = entry = entry ? entry.n : iter.o[FIRST])){
	        // or finish the iteration
	        iter.o = undefined;
	        return iterResult(1);
	      }
	      // return step by kind
	      if(kind == KEY)  return iterResult(0, entry.k);
	      if(kind == VALUE)return iterResult(0, entry.v);
	                       return iterResult(0, [entry.k, entry.v]);   
	    }, isMap ? KEY+VALUE : VALUE, !isMap);
	    
	    return C;
	  }
	  
	  function fastKey(it, create){
	    // return primitive with prefix
	    if(!isObject(it))return (typeof it == 'string' ? 'S' : 'P') + it;
	    // can't set id to frozen object
	    if(isFrozen(it))return 'F';
	    if(!has(it, UID)){
	      // not necessary to add id
	      if(!create)return 'E';
	      // add missing object id
	      hidden(it, UID, ++uid);
	    // return object id with prefix
	    } return 'O' + it[UID];
	  }
	  function getEntry(that, key){
	    // fast case
	    var index = fastKey(key), entry;
	    if(index != 'F')return that[O1][index];
	    // frozen object case
	    for(entry = that[FIRST]; entry; entry = entry.n){
	      if(entry.k == key)return entry;
	    }
	  }
	  function def(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry)entry.v = value;
	    // create new entry
	    else {
	      that[LAST] = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that[LAST],          // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that[FIRST])that[FIRST] = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index != 'F')that[O1][index] = entry;
	    } return that;
	  }

	  var collectionMethods = {
	    // 23.1.3.1 Map.prototype.clear()
	    // 23.2.3.2 Set.prototype.clear()
	    clear: function(){
	      for(var that = this, data = that[O1], entry = that[FIRST]; entry; entry = entry.n){
	        entry.r = true;
	        if(entry.p)entry.p = entry.p.n = undefined;
	        delete data[entry.i];
	      }
	      that[FIRST] = that[LAST] = undefined;
	      that[SIZE] = 0;
	    },
	    // 23.1.3.3 Map.prototype.delete(key)
	    // 23.2.3.4 Set.prototype.delete(value)
	    'delete': function(key){
	      var that  = this
	        , entry = getEntry(that, key);
	      if(entry){
	        var next = entry.n
	          , prev = entry.p;
	        delete that[O1][entry.i];
	        entry.r = true;
	        if(prev)prev.n = next;
	        if(next)next.p = prev;
	        if(that[FIRST] == entry)that[FIRST] = next;
	        if(that[LAST] == entry)that[LAST] = prev;
	        that[SIZE]--;
	      } return !!entry;
	    },
	    // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	    // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	    forEach: function(callbackfn /*, that = undefined */){
	      var f = ctx(callbackfn, arguments[1], 3)
	        , entry;
	      while(entry = entry ? entry.n : this[FIRST]){
	        f(entry.v, entry.k, this);
	        // revert to the last existing entry
	        while(entry && entry.r)entry = entry.p;
	      }
	    },
	    // 23.1.3.7 Map.prototype.has(key)
	    // 23.2.3.7 Set.prototype.has(value)
	    has: function(key){
	      return !!getEntry(this, key);
	    }
	  }
	  
	  // 23.1 Map Objects
	  Map = getCollection(Map, MAP, {
	    // 23.1.3.6 Map.prototype.get(key)
	    get: function(key){
	      var entry = getEntry(this, key);
	      return entry && entry.v;
	    },
	    // 23.1.3.9 Map.prototype.set(key, value)
	    set: function(key, value){
	      return def(this, key === 0 ? 0 : key, value);
	    }
	  }, collectionMethods, true);
	  
	  // 23.2 Set Objects
	  Set = getCollection(Set, SET, {
	    // 23.2.3.1 Set.prototype.add(value)
	    add: function(value){
	      return def(this, value = value === 0 ? 0 : value, value);
	    }
	  }, collectionMethods);
	  
	  function defWeak(that, key, value){
	    if(isFrozen(assertObject(key)))leakStore(that).set(key, value);
	    else {
	      has(key, WEAK) || hidden(key, WEAK, {});
	      key[WEAK][that[UID]] = value;
	    } return that;
	  }
	  function leakStore(that){
	    return that[LEAK] || hidden(that, LEAK, new Map)[LEAK];
	  }
	  
	  var weakMethods = {
	    // 23.3.3.2 WeakMap.prototype.delete(key)
	    // 23.4.3.3 WeakSet.prototype.delete(value)
	    'delete': function(key){
	      if(!isObject(key))return false;
	      if(isFrozen(key))return leakStore(this)['delete'](key);
	      return has(key, WEAK) && has(key[WEAK], this[UID]) && delete key[WEAK][this[UID]];
	    },
	    // 23.3.3.4 WeakMap.prototype.has(key)
	    // 23.4.3.4 WeakSet.prototype.has(value)
	    has: function(key){
	      if(!isObject(key))return false;
	      if(isFrozen(key))return leakStore(this).has(key);
	      return has(key, WEAK) && has(key[WEAK], this[UID]);
	    }
	  };
	  
	  // 23.3 WeakMap Objects
	  WeakMap = getCollection(WeakMap, WEAKMAP, {
	    // 23.3.3.3 WeakMap.prototype.get(key)
	    get: function(key){
	      if(isObject(key)){
	        if(isFrozen(key))return leakStore(this).get(key);
	        if(has(key, WEAK))return key[WEAK][this[UID]];
	      }
	    },
	    // 23.3.3.5 WeakMap.prototype.set(key, value)
	    set: function(key, value){
	      return defWeak(this, key, value);
	    }
	  }, weakMethods, true, true);
	  
	  // IE11 WeakMap frozen keys fix
	  if(framework && new WeakMap().set(Object.freeze(tmp), 7).get(tmp) != 7){
	    forEach.call(array('delete,has,get,set'), function(key){
	      var method = WeakMap[PROTOTYPE][key];
	      WeakMap[PROTOTYPE][key] = function(a, b){
	        // store frozen objects on leaky map
	        if(isObject(a) && isFrozen(a)){
	          var result = leakStore(this)[key](a, b);
	          return key == 'set' ? this : result;
	        // store all the rest on native weakmap
	        } return method.call(this, a, b);
	      };
	    });
	  }
	  
	  // 23.4 WeakSet Objects
	  WeakSet = getCollection(WeakSet, WEAKSET, {
	    // 23.4.3.1 WeakSet.prototype.add(value)
	    add: function(value){
	      return defWeak(this, value, true);
	    }
	  }, weakMethods, false, true);
	}();

	/******************************************************************************
	 * Module : es6.reflect                                                       *
	 ******************************************************************************/

	!function(){
	  function Enumerate(iterated){
	    var keys = [], key;
	    for(key in iterated)keys.push(key);
	    set(this, ITER, {o: iterated, a: keys, i: 0});
	  }
	  createIterator(Enumerate, OBJECT, function(){
	    var iter = this[ITER]
	      , keys = iter.a
	      , key;
	    do {
	      if(iter.i >= keys.length)return iterResult(1);
	    } while(!((key = keys[iter.i++]) in iter.o));
	    return iterResult(0, key);
	  });
	  
	  function wrap(fn){
	    return function(it){
	      assertObject(it);
	      try {
	        return fn.apply(undefined, arguments), true;
	      } catch(e){
	        return false;
	      }
	    }
	  }
	  
	  function reflectGet(target, propertyKey/*, receiver*/){
	    var receiver = arguments.length < 3 ? target : arguments[2]
	      , desc = getOwnDescriptor(assertObject(target), propertyKey), proto;
	    if(desc)return has(desc, 'value')
	      ? desc.value
	      : desc.get === undefined
	        ? undefined
	        : desc.get.call(receiver);
	    return isObject(proto = getPrototypeOf(target))
	      ? reflectGet(proto, propertyKey, receiver)
	      : undefined;
	  }
	  function reflectSet(target, propertyKey, V/*, receiver*/){
	    var receiver = arguments.length < 4 ? target : arguments[3]
	      , ownDesc  = getOwnDescriptor(assertObject(target), propertyKey)
	      , existingDescriptor, proto;
	    if(!ownDesc){
	      if(isObject(proto = getPrototypeOf(target))){
	        return reflectSet(proto, propertyKey, V, receiver);
	      }
	      ownDesc = descriptor(0);
	    }
	    if(has(ownDesc, 'value')){
	      if(ownDesc.writable === false || !isObject(receiver))return false;
	      existingDescriptor = getOwnDescriptor(receiver, propertyKey) || descriptor(0);
	      existingDescriptor.value = V;
	      return defineProperty(receiver, propertyKey, existingDescriptor), true;
	    }
	    return ownDesc.set === undefined
	      ? false
	      : (ownDesc.set.call(receiver, V), true);
	  }
	  var isExtensible = Object.isExtensible || returnIt;
	  
	  var reflect = {
	    // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	    apply: ctx(call, apply, 3),
	    // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	    construct: function(target, argumentsList /*, newTarget*/){
	      var proto    = assertFunction(arguments.length < 3 ? target : arguments[2])[PROTOTYPE]
	        , instance = create(isObject(proto) ? proto : ObjectProto)
	        , result   = apply.call(target, instance, argumentsList);
	      return isObject(result) ? result : instance;
	    },
	    // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	    defineProperty: wrap(defineProperty),
	    // 26.1.4 Reflect.deleteProperty(target, propertyKey)
	    deleteProperty: function(target, propertyKey){
	      var desc = getOwnDescriptor(assertObject(target), propertyKey);
	      return desc && !desc.configurable ? false : delete target[propertyKey];
	    },
	    // 26.1.5 Reflect.enumerate(target)
	    enumerate: function(target){
	      return new Enumerate(assertObject(target));
	    },
	    // 26.1.6 Reflect.get(target, propertyKey [, receiver])
	    get: reflectGet,
	    // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	    getOwnPropertyDescriptor: function(target, propertyKey){
	      return getOwnDescriptor(assertObject(target), propertyKey);
	    },
	    // 26.1.8 Reflect.getPrototypeOf(target)
	    getPrototypeOf: function(target){
	      return getPrototypeOf(assertObject(target));
	    },
	    // 26.1.9 Reflect.has(target, propertyKey)
	    has: function(target, propertyKey){
	      return propertyKey in target;
	    },
	    // 26.1.10 Reflect.isExtensible(target)
	    isExtensible: function(target){
	      return !!isExtensible(assertObject(target));
	    },
	    // 26.1.11 Reflect.ownKeys(target)
	    ownKeys: ownKeys,
	    // 26.1.12 Reflect.preventExtensions(target)
	    preventExtensions: wrap(Object.preventExtensions || returnIt),
	    // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	    set: reflectSet
	  }
	  // 26.1.14 Reflect.setPrototypeOf(target, proto)
	  if(setPrototypeOf)reflect.setPrototypeOf = function(target, proto){
	    return setPrototypeOf(assertObject(target), proto), true;
	  };
	  
	  $define(GLOBAL, {Reflect: {}});
	  $define(STATIC, 'Reflect', reflect);
	}();

	/******************************************************************************
	 * Module : es7.proposals                                                     *
	 ******************************************************************************/

	!function(){
	  $define(PROTO, ARRAY, {
	    // https://github.com/domenic/Array.prototype.includes
	    includes: createArrayContains(true)
	  });
	  $define(PROTO, STRING, {
	    // https://github.com/mathiasbynens/String.prototype.at
	    at: createPointAt(true)
	  });
	  
	  function createObjectToArray(isEntries){
	    return function(object){
	      var O      = toObject(object)
	        , keys   = getKeys(object)
	        , length = keys.length
	        , i      = 0
	        , result = Array(length)
	        , key;
	      if(isEntries)while(length > i)result[i] = [key = keys[i++], O[key]];
	      else while(length > i)result[i] = O[keys[i++]];
	      return result;
	    }
	  }
	  $define(STATIC, OBJECT, {
	    // https://gist.github.com/WebReflection/9353781
	    getOwnPropertyDescriptors: function(object){
	      var O      = toObject(object)
	        , result = {};
	      forEach.call(ownKeys(O), function(key){
	        defineProperty(result, key, descriptor(0, getOwnDescriptor(O, key)));
	      });
	      return result;
	    },
	    // https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-04/apr-9.md#51-objectentries-objectvalues
	    values:  createObjectToArray(false),
	    entries: createObjectToArray(true)
	  });
	  $define(STATIC, REGEXP, {
	    // https://gist.github.com/kangax/9698100
	    escape: createReplacer(/([\\\-[\]{}()*+?.,^$|])/g, '\\$1', true)
	  });
	}();

	/******************************************************************************
	 * Module : es7.abstract-refs                                                 *
	 ******************************************************************************/

	// https://github.com/zenparsing/es-abstract-refs
	!function(REFERENCE){
	  REFERENCE_GET = getWellKnownSymbol(REFERENCE+'Get', true);
	  var REFERENCE_SET = getWellKnownSymbol(REFERENCE+SET, true)
	    , REFERENCE_DELETE = getWellKnownSymbol(REFERENCE+'Delete', true);
	  
	  $define(STATIC, SYMBOL, {
	    referenceGet: REFERENCE_GET,
	    referenceSet: REFERENCE_SET,
	    referenceDelete: REFERENCE_DELETE
	  });
	  
	  hidden(FunctionProto, REFERENCE_GET, returnThis);
	  
	  function setMapMethods(Constructor){
	    if(Constructor){
	      var MapProto = Constructor[PROTOTYPE];
	      hidden(MapProto, REFERENCE_GET, MapProto.get);
	      hidden(MapProto, REFERENCE_SET, MapProto.set);
	      hidden(MapProto, REFERENCE_DELETE, MapProto['delete']);
	    }
	  }
	  setMapMethods(Map);
	  setMapMethods(WeakMap);
	}('reference');

	/******************************************************************************
	 * Module : core.dict                                                         *
	 ******************************************************************************/

	!function(DICT){
	  Dict = function(iterable){
	    var dict = create(null);
	    if(iterable != undefined){
	      if(isIterable(iterable)){
	        forOf(iterable, true, function(key, value){
	          dict[key] = value;
	        });
	      } else assign(dict, iterable);
	    }
	    return dict;
	  }
	  Dict[PROTOTYPE] = null;
	  
	  function DictIterator(iterated, kind){
	    set(this, ITER, {o: toObject(iterated), a: getKeys(iterated), i: 0, k: kind});
	  }
	  createIterator(DictIterator, DICT, function(){
	    var iter = this[ITER]
	      , O    = iter.o
	      , keys = iter.a
	      , kind = iter.k
	      , key;
	    do {
	      if(iter.i >= keys.length){
	        iter.o = undefined;
	        return iterResult(1);
	      }
	    } while(!has(O, key = keys[iter.i++]));
	    if(kind == KEY)  return iterResult(0, key);
	    if(kind == VALUE)return iterResult(0, O[key]);
	                     return iterResult(0, [key, O[key]]);
	  });
	  function createDictIter(kind){
	    return function(it){
	      return new DictIterator(it, kind);
	    }
	  }
	  
	  /*
	   * 0 -> forEach
	   * 1 -> map
	   * 2 -> filter
	   * 3 -> some
	   * 4 -> every
	   * 5 -> find
	   * 6 -> findKey
	   * 7 -> mapPairs
	   */
	  function createDictMethod(type){
	    var isMap    = type == 1
	      , isEvery  = type == 4;
	    return function(object, callbackfn, that /* = undefined */){
	      var f      = ctx(callbackfn, that, 3)
	        , O      = toObject(object)
	        , result = isMap || type == 7 || type == 2 ? new (generic(this, Dict)) : undefined
	        , key, val, res;
	      for(key in O)if(has(O, key)){
	        val = O[key];
	        res = f(val, key, object);
	        if(type){
	          if(isMap)result[key] = res;             // map
	          else if(res)switch(type){
	            case 2: result[key] = val; break      // filter
	            case 3: return true;                  // some
	            case 5: return val;                   // find
	            case 6: return key;                   // findKey
	            case 7: result[res[0]] = res[1];      // mapPairs
	          } else if(isEvery)return false;         // every
	        }
	      }
	      return type == 3 || isEvery ? isEvery : result;
	    }
	  }
	  function createDictReduce(isTurn){
	    return function(object, mapfn, init){
	      assertFunction(mapfn);
	      var O      = toObject(object)
	        , keys   = getKeys(O)
	        , length = keys.length
	        , i      = 0
	        , memo, key, result;
	      if(isTurn)memo = init == undefined ? new (generic(this, Dict)) : Object(init);
	      else if(arguments.length < 3){
	        assert(length, REDUCE_ERROR);
	        memo = O[keys[i++]];
	      } else memo = Object(init);
	      while(length > i)if(has(O, key = keys[i++])){
	        result = mapfn(memo, O[key], key, object);
	        if(isTurn){
	          if(result === false)break;
	        } else memo = result;
	      }
	      return memo;
	    }
	  }
	  var findKey = createDictMethod(6);
	  function includes(object, el){
	    return (el == el ? keyOf(object, el) : findKey(object, sameNaN)) !== undefined;
	  }
	  
	  var dictMethods = {
	    keys:    createDictIter(KEY),
	    values:  createDictIter(VALUE),
	    entries: createDictIter(KEY+VALUE),
	    forEach: createDictMethod(0),
	    map:     createDictMethod(1),
	    filter:  createDictMethod(2),
	    some:    createDictMethod(3),
	    every:   createDictMethod(4),
	    find:    createDictMethod(5),
	    findKey: findKey,
	    mapPairs:createDictMethod(7),
	    reduce:  createDictReduce(false),
	    turn:    createDictReduce(true),
	    keyOf:   keyOf,
	    includes:includes,
	    // Has / get / set own property
	    has: has,
	    get: get,
	    set: createDefiner(0),
	    isDict: function(it){
	      return isObject(it) && getPrototypeOf(it) === Dict[PROTOTYPE];
	    }
	  };
	  
	  if(REFERENCE_GET)for(var key in dictMethods)!function(fn){
	    function method(){
	      for(var args = [this], i = 0; i < arguments.length;)args.push(arguments[i++]);
	      return invoke(fn, args);
	    }
	    fn[REFERENCE_GET] = function(){
	      return method;
	    }
	  }(dictMethods[key]);
	  
	  $define(GLOBAL + FORCED, {Dict: assignHidden(Dict, dictMethods)});
	}('Dict');

	/******************************************************************************
	 * Module : core.$for                                                         *
	 ******************************************************************************/

	!function(ENTRIES, FN){  
	  function $for(iterable, entries){
	    if(!(this instanceof $for))return new $for(iterable, entries);
	    this[ITER]    = getIterator(iterable);
	    this[ENTRIES] = !!entries;
	  }
	  
	  createIterator($for, 'Wrapper', function(){
	    return this[ITER].next();
	  });
	  var $forProto = $for[PROTOTYPE];
	  setIterator($forProto, function(){
	    return this[ITER]; // unwrap
	  });
	  
	  function createChainIterator(next){
	    function Iter(I, fn, that){
	      this[ITER]    = getIterator(I);
	      this[ENTRIES] = I[ENTRIES];
	      this[FN]      = ctx(fn, that, I[ENTRIES] ? 2 : 1);
	    }
	    createIterator(Iter, 'Chain', next, $forProto);
	    setIterator(Iter[PROTOTYPE], returnThis); // override $forProto iterator
	    return Iter;
	  }
	  
	  var MapIter = createChainIterator(function(){
	    var step = this[ITER].next();
	    return step.done ? step : iterResult(0, stepCall(this[FN], step.value, this[ENTRIES]));
	  });
	  
	  var FilterIter = createChainIterator(function(){
	    for(;;){
	      var step = this[ITER].next();
	      if(step.done || stepCall(this[FN], step.value, this[ENTRIES]))return step;
	    }
	  });
	  
	  assignHidden($forProto, {
	    of: function(fn, that){
	      forOf(this, this[ENTRIES], fn, that);
	    },
	    array: function(fn, that){
	      var result = [];
	      forOf(fn != undefined ? this.map(fn, that) : this, false, push, result);
	      return result;
	    },
	    filter: function(fn, that){
	      return new FilterIter(this, fn, that);
	    },
	    map: function(fn, that){
	      return new MapIter(this, fn, that);
	    }
	  });
	  
	  $for.isIterable  = isIterable;
	  $for.getIterator = getIterator;
	  
	  $define(GLOBAL + FORCED, {$for: $for});
	}('entries', safeSymbol('fn'));

	/******************************************************************************
	 * Module : core.delay                                                        *
	 ******************************************************************************/

	// https://esdiscuss.org/topic/promise-returning-delay-function
	$define(GLOBAL + FORCED, {
	  delay: function(time){
	    return new Promise(function(resolve){
	      setTimeout(resolve, time, true);
	    });
	  }
	});

	/******************************************************************************
	 * Module : core.binding                                                      *
	 ******************************************************************************/

	!function(_, toLocaleString){
	  // Placeholder
	  core._ = path._ = path._ || {};

	  $define(PROTO + FORCED, FUNCTION, {
	    part: part,
	    only: function(numberArguments, that /* = @ */){
	      var fn     = assertFunction(this)
	        , n      = toLength(numberArguments)
	        , isThat = arguments.length > 1;
	      return function(/* ...args */){
	        var length = min(n, arguments.length)
	          , args   = Array(length)
	          , i      = 0;
	        while(length > i)args[i] = arguments[i++];
	        return invoke(fn, args, isThat ? that : this);
	      }
	    }
	  });
	  
	  function tie(key){
	    var that  = this
	      , bound = {};
	    return hidden(that, _, function(key){
	      if(key === undefined || !(key in that))return toLocaleString.call(that);
	      return has(bound, key) ? bound[key] : (bound[key] = ctx(that[key], that, -1));
	    })[_](key);
	  }
	  
	  hidden(path._, TO_STRING, function(){
	    return _;
	  });
	  
	  hidden(ObjectProto, _, tie);
	  DESC || hidden(ArrayProto, _, tie);
	  // IE8- dirty hack - redefined toLocaleString is not enumerable
	}(DESC ? uid('tie') : TO_LOCALE, ObjectProto[TO_LOCALE]);

	/******************************************************************************
	 * Module : core.object                                                       *
	 ******************************************************************************/

	!function(){
	  function define(target, mixin){
	    var keys   = ownKeys(toObject(mixin))
	      , length = keys.length
	      , i = 0, key;
	    while(length > i)defineProperty(target, key = keys[i++], getOwnDescriptor(mixin, key));
	    return target;
	  };
	  $define(STATIC + FORCED, OBJECT, {
	    isObject: isObject,
	    classof: classof,
	    define: define,
	    make: function(proto, mixin){
	      return define(create(proto), mixin);
	    }
	  });
	}();

	/******************************************************************************
	 * Module : core.array                                                        *
	 ******************************************************************************/

	$define(PROTO + FORCED, ARRAY, {
	  turn: function(fn, target /* = [] */){
	    assertFunction(fn);
	    var memo   = target == undefined ? [] : Object(target)
	      , O      = ES5Object(this)
	      , length = toLength(O.length)
	      , index  = 0;
	    while(length > index)if(fn(memo, O[index], index++, this) === false)break;
	    return memo;
	  }
	});
	if(framework)ArrayUnscopables.turn = true;

	/******************************************************************************
	 * Module : core.number                                                       *
	 ******************************************************************************/

	!function(numberMethods){  
	  function NumberIterator(iterated){
	    set(this, ITER, {l: toLength(iterated), i: 0});
	  }
	  createIterator(NumberIterator, NUMBER, function(){
	    var iter = this[ITER]
	      , i    = iter.i++;
	    return i < iter.l ? iterResult(0, i) : iterResult(1);
	  });
	  defineIterator(Number, NUMBER, function(){
	    return new NumberIterator(this);
	  });
	  
	  numberMethods.random = function(lim /* = 0 */){
	    var a = +this
	      , b = lim == undefined ? 0 : +lim
	      , m = min(a, b);
	    return random() * (max(a, b) - m) + m;
	  };

	  forEach.call(array(
	      // ES3:
	      'round,floor,ceil,abs,sin,asin,cos,acos,tan,atan,exp,sqrt,max,min,pow,atan2,' +
	      // ES6:
	      'acosh,asinh,atanh,cbrt,clz32,cosh,expm1,hypot,imul,log1p,log10,log2,sign,sinh,tanh,trunc'
	    ), function(key){
	      var fn = Math[key];
	      if(fn)numberMethods[key] = function(/* ...args */){
	        // ie9- dont support strict mode & convert `this` to object -> convert it to number
	        var args = [+this]
	          , i    = 0;
	        while(arguments.length > i)args.push(arguments[i++]);
	        return invoke(fn, args);
	      }
	    }
	  );
	  
	  $define(PROTO + FORCED, NUMBER, numberMethods);
	}({});

	/******************************************************************************
	 * Module : core.string                                                       *
	 ******************************************************************************/

	!function(){
	  var escapeHTMLDict = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&apos;'
	  }, unescapeHTMLDict = {}, key;
	  for(key in escapeHTMLDict)unescapeHTMLDict[escapeHTMLDict[key]] = key;
	  $define(PROTO + FORCED, STRING, {
	    escapeHTML:   createReplacer(/[&<>"']/g, escapeHTMLDict),
	    unescapeHTML: createReplacer(/&(?:amp|lt|gt|quot|apos);/g, unescapeHTMLDict)
	  });
	}();

	/******************************************************************************
	 * Module : core.date                                                         *
	 ******************************************************************************/

	!function(formatRegExp, flexioRegExp, locales, current, SECONDS, MINUTES, HOURS, MONTH, YEAR){
	  function createFormat(prefix){
	    return function(template, locale /* = current */){
	      var that = this
	        , dict = locales[has(locales, locale) ? locale : current];
	      function get(unit){
	        return that[prefix + unit]();
	      }
	      return String(template).replace(formatRegExp, function(part){
	        switch(part){
	          case 's'  : return get(SECONDS);                  // Seconds : 0-59
	          case 'ss' : return lz(get(SECONDS));              // Seconds : 00-59
	          case 'm'  : return get(MINUTES);                  // Minutes : 0-59
	          case 'mm' : return lz(get(MINUTES));              // Minutes : 00-59
	          case 'h'  : return get(HOURS);                    // Hours   : 0-23
	          case 'hh' : return lz(get(HOURS));                // Hours   : 00-23
	          case 'D'  : return get(DATE);                     // Date    : 1-31
	          case 'DD' : return lz(get(DATE));                 // Date    : 01-31
	          case 'W'  : return dict[0][get('Day')];           // Day     : Понедельник
	          case 'N'  : return get(MONTH) + 1;                // Month   : 1-12
	          case 'NN' : return lz(get(MONTH) + 1);            // Month   : 01-12
	          case 'M'  : return dict[2][get(MONTH)];           // Month   : Январь
	          case 'MM' : return dict[1][get(MONTH)];           // Month   : Января
	          case 'Y'  : return get(YEAR);                     // Year    : 2014
	          case 'YY' : return lz(get(YEAR) % 100);           // Year    : 14
	        } return part;
	      });
	    }
	  }
	  function addLocale(lang, locale){
	    function split(index){
	      var result = [];
	      forEach.call(array(locale.months), function(it){
	        result.push(it.replace(flexioRegExp, '$' + index));
	      });
	      return result;
	    }
	    locales[lang] = [array(locale.weekdays), split(1), split(2)];
	    return core;
	  }
	  $define(PROTO + FORCED, DATE, {
	    format:    createFormat('get'),
	    formatUTC: createFormat('getUTC')
	  });
	  addLocale(current, {
	    weekdays: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday',
	    months: 'January,February,March,April,May,June,July,August,September,October,November,December'
	  });
	  addLocale('ru', {
	    weekdays: 'Воскресенье,Понедельник,Вторник,Среда,Четверг,Пятница,Суббота',
	    months: 'Январ:я|ь,Феврал:я|ь,Март:а|,Апрел:я|ь,Ма:я|й,Июн:я|ь,' +
	            'Июл:я|ь,Август:а|,Сентябр:я|ь,Октябр:я|ь,Ноябр:я|ь,Декабр:я|ь'
	  });
	  core.locale = function(locale){
	    return has(locales, locale) ? current = locale : current;
	  };
	  core.addLocale = addLocale;
	}(/\b\w\w?\b/g, /:(.*)\|(.*)$/, {}, 'en', 'Seconds', 'Minutes', 'Hours', 'Month', 'FullYear');

	/******************************************************************************
	 * Module : core.global                                                       *
	 ******************************************************************************/

	$define(GLOBAL + FORCED, {global: global});

	/******************************************************************************
	 * Module : js.array.statics                                                  *
	 ******************************************************************************/

	// JavaScript 1.6 / Strawman array statics shim
	!function(arrayStatics){
	  function setArrayStatics(keys, length){
	    forEach.call(array(keys), function(key){
	      if(key in ArrayProto)arrayStatics[key] = ctx(call, ArrayProto[key], length);
	    });
	  }
	  setArrayStatics('pop,reverse,shift,keys,values,entries', 1);
	  setArrayStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
	  setArrayStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
	                  'reduce,reduceRight,copyWithin,fill,turn');
	  $define(STATIC, ARRAY, arrayStatics);
	}({});

	/******************************************************************************
	 * Module : web.dom.itarable                                                  *
	 ******************************************************************************/

	!function(NodeList){
	  if(framework && NodeList && !(SYMBOL_ITERATOR in NodeList[PROTOTYPE])){
	    hidden(NodeList[PROTOTYPE], SYMBOL_ITERATOR, Iterators[ARRAY]);
	  }
	  Iterators.NodeList = Iterators[ARRAY];
	}(global.NodeList);

	/******************************************************************************
	 * Module : core.log                                                          *
	 ******************************************************************************/

	!function(log, enabled){
	  // Methods from https://github.com/DeveloperToolsWG/console-object/blob/master/api.md
	  forEach.call(array('assert,clear,count,debug,dir,dirxml,error,exception,' +
	      'group,groupCollapsed,groupEnd,info,isIndependentlyComposed,log,' +
	      'markTimeline,profile,profileEnd,table,time,timeEnd,timeline,' +
	      'timelineEnd,timeStamp,trace,warn'), function(key){
	    log[key] = function(){
	      if(enabled && key in console)return apply.call(console[key], console, arguments);
	    };
	  });
	  $define(GLOBAL + FORCED, {log: assign(log.log, log, {
	    enable: function(){
	      enabled = true;
	    },
	    disable: function(){
	      enabled = false;
	    }
	  })});
	}({}, true);
	}(typeof self != 'undefined' && self.Math === Math ? self : Function('return this')(), false);
	module.exports = { "default": module.exports, __esModule: true };


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj["default"] : obj;
	};

	exports.__esModule = true;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/css-loader/index.js!/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/stylus-loader/index.js?paths=node_modules/!/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/src/styles/styles.styl", function() {
			var newContent = require("!!/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/css-loader/index.js!/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/stylus-loader/index.js?paths=node_modules/!/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/src/styles/styles.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(100)();
	exports.push([module.id, "@import url(http://yui.yahooapis.com/pure/0.6.0/pure-min.css);", ""]);
	exports.push([module.id, "@import url(http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css);", ""]);
	exports.push([module.id, "\n\n* {\n  box-sizing: border-box;\n}\nbody {\n  padding: 1em 2em;\n}\nh1,\nh2,\nh3,\nh4,\nh5 {\n  margin-bottom: 0;\n}\nh2 {\n  margin-top: 0;\n}\ntextarea {\n  min-height: 15em;\n}\n.pure-g > * {\n  padding: 0 1em;\n}\n.pure-g > *:nth-child(odd) {\n  padding-left: 0;\n}\n.pure-g > *:last-child {\n  padding-right: 0;\n}\n.eth-logo {\n  max-height: 37px;\n  display: inline-block;\n  vertical-align: top;\n}\n.eth-title {\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 2px;\n}\n.nav-link {\n  float: right;\n}\n.documentView {\n  min-height: 200px;\n  padding: 0.5em 0.6em;\n  border: 1px solid #ccc;\n  box-shadow: 0 1px 3px #ddd;\n  border-radius: 4px;\n  vertical-align: middle;\n  display: block;\n  margin: 0.25em 0;\n}\n.pure-button {\n  float: right;\n}\n.eth-logo {\n  background: url("+__webpack_require__(172)+");\n  background-size: contain;\n  width: 25px;\n  height: 50px;\n}\nnav {\n  display: inline-block;\n  vertical-align: top;\n  float: right;\n}\nnav ul {\n  margin: 0;\n  padding: 0;\n  display: flex;\n}\nnav ul li {\n  margin-left: 10px;\n  flex: 1 0 auto;\n  list-style: none;\n  background: #eee;\n}\nnav ul li:first-child {\n  margin-left: 0;\n}\nnav ul li:hover {\n  background: #507a9a;\n}\nnav ul li:hover a {\n  color: #fff;\n}\nnav ul li a {\n  color: #fff;\n  color: #333;\n  text-decoration: none;\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 0.75em;\n}\n", ""]);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(26);
	var assertions = __webpack_require__(27);

	var assertAccessibility = function (tagName, props, children, log) {
	  var key;

	  var tagTests = assertions.tags[tagName];
	  if (tagTests) for (key in tagTests) log(tagTests[key].test(tagName, props, children), tagTests[key].msg);

	  var propTests;
	  for (var propName in props) {
	    propTests = assertions.props[propName];
	    if (propTests) for (key in propTests) log(propTests[key].test(tagName, props, children), propTests[key].msg);
	  }
	};

	var error = function (passed, msg) {
	  if (!passed) throw new Error(msg);
	};

	var warn = function (passed, msg) {
	  if (!passed) console.warn(msg);
	};

	module.exports = function (options) {
	  var _createElement = React.createElement;
	  var log = options && options["throw"] ? error : warn;
	  React.createElement = function (type, _props) {
	    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      children[_key - 2] = arguments[_key];
	    }

	    if (typeof type === "string") {
	      var props = _props || {};
	      assertAccessibility(type, props, children, log);
	    }
	    return _createElement.apply(this, arguments);
	  };
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }); })(); }

	"use strict";

	var _interopRequire = __webpack_require__(6)["default"];

	var React = _interopRequire(__webpack_require__(15));

	var Navigation = _interopRequire(__webpack_require__(28));

	module.exports = React.createClass({
		displayName: "Header",

		render: function () {
			return React.createElement(
				"header",
				null,
				React.createElement("div", { className: "eth-logo" }),
				React.createElement(
					"h1",
					{ className: "eth-title" },
					" EtherSign"
				),
				React.createElement(Navigation, null),
				React.createElement("hr", null)
			);
		}
	});

	/* REACT HOT LOADER */ if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module)) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Header.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isIE9 = memoize(function() {
			return /msie 9\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isIE9();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }); })(); }

	"use strict";

	var _interopRequire = __webpack_require__(6)["default"];

	var React = _interopRequire(__webpack_require__(15));

	var Reflux = _interopRequire(__webpack_require__(39));

	var DocumentRefluxStore = _interopRequire(__webpack_require__(29));

	module.exports = React.createClass({
	  displayName: "DocumentSignPage",

	  mixins: [Reflux.ListenerMixin],

	  getInitialState: function getInitialState() {
	    return {
	      doclink: "",
	      doctext: "",
	      sigName1: "",
	      sigAddr1: "",
	      sigName2: "",
	      sigAddr2: "",
	      myID: "" };
	  },
	  componentWillMount: function componentWillMount() {
	    this.listenTo(DocumentRefluxStore, this.publishedDataStatus);
	  },
	  publishedDataStatus: function publishedDataStatus(data) {},

	  uiStoreDoc: function uiStoreDoc() {
	    var doclink = DocumentRefluxStore.storeDocumentInIpfs(this.state.doclink);
	    this.setState({ doclink: doclink });
	  },
	  uiRetrieveDoc: function uiRetrieveDoc() {
	    var doctext = DocumentRefluxStore.loadDocumentFromIpfs(this.state.doclink);
	    this.setState({ doctext: doctext });
	  },
	  uiSubmitToBlockchain: function uiSubmitToBlockchain() {
	    var contractAddr = DocumentRefluxStore.createAndPopulateData(this.state.doclink, [this.state.sigAddr1, this.state.sigAddr2], [this.state.sigName1, this.state.sigName2]);
	    this.setState({ contractAddr: contractAddr });
	  },
	  uiHandleAddressOrNameChange: function uiHandleAddressOrNameChange(name, event) {
	    if (name === "sigName1") {
	      this.setState({ sigName1: event.target.value });
	    }
	    if (name === "sigAddr1") {
	      this.setState({ sigAddr1: event.target.value });
	    }
	    if (name === "sigName2") {
	      this.setState({ sigName2: event.target.value });
	    }
	    if (name === "sigAddr2") {
	      this.setState({ sigAddr2: event.target.value });
	    }
	  },

	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "page-document-sign" },
	      React.createElement(
	        "main",
	        null,
	        React.createElement(
	          "form",
	          { className: "pure-form pure-form-stacked" },
	          React.createElement(
	            "fieldset",
	            null,
	            React.createElement(
	              "div",
	              { className: "pure-g" },
	              React.createElement(
	                "div",
	                { className: "pure-u-1-2" },
	                React.createElement(
	                  "h2",
	                  null,
	                  "My ID"
	                ),
	                React.createElement(
	                  "div",
	                  { id: "myID" },
	                  this.state.myID
	                ),
	                React.createElement(
	                  "h2",
	                  null,
	                  "Document"
	                ),
	                React.createElement(
	                  "textarea",
	                  { type: "text", id: "doctext", className: "pure-input-1" },
	                  this.state.doctext
	                ),
	                React.createElement(
	                  "label",
	                  { id: "document_link" },
	                  "IPFS Hash:"
	                ),
	                React.createElement("input", { type: "text", id: "doclink", className: "pure-input-1", value: this.state.doclink }),
	                React.createElement(
	                  "button",
	                  { className: "pure-button", type: "button", onClick: this.uiStoreDoc },
	                  React.createElement("i", { className: "fa fa-arrow-circle-up" }),
	                  " Submit document"
	                ),
	                React.createElement(
	                  "button",
	                  { className: "pure-button", type: "button", onClick: this.uiRetrieveDoc },
	                  React.createElement("i", { className: "fa fa-arrow-circle-o-down" }),
	                  " Retrieve document"
	                )
	              ),
	              React.createElement(
	                "div",
	                { className: "pure-u-1-2 pure-u-md-1-1" },
	                React.createElement(
	                  "h2",
	                  null,
	                  "Signatories"
	                ),
	                React.createElement(
	                  "div",
	                  { className: "signatory-group" },
	                  React.createElement(
	                    "legend",
	                    null,
	                    "Signatory 1"
	                  ),
	                  React.createElement(
	                    "label",
	                    null,
	                    "Name"
	                  ),
	                  React.createElement("input", { type: "text", id: "sigName1", className: "pure-input-1", onChange: this.uiHandleAddressOrNameChange.bind(this, "sigName1"), value: this.state.sigName1 }),
	                  React.createElement(
	                    "label",
	                    null,
	                    "Ethereum Address"
	                  ),
	                  React.createElement("input", { type: "text", id: "sigAddr1", className: "pure-input-1", onChange: this.uiHandleAddressOrNameChange.bind(this, "sigAddr1"), value: this.state.sigAddr1 })
	                ),
	                React.createElement(
	                  "div",
	                  { className: "signatory-group" },
	                  React.createElement(
	                    "legend",
	                    null,
	                    "Signatory 2"
	                  ),
	                  React.createElement(
	                    "label",
	                    null,
	                    "Name"
	                  ),
	                  React.createElement("input", { type: "text", id: "sigName2", className: "pure-input-1", onChange: this.uiHandleAddressOrNameChange.bind(this, "sigName2"), value: this.state.sigName2 }),
	                  React.createElement(
	                    "label",
	                    null,
	                    "Ethereum Address"
	                  ),
	                  React.createElement("input", { type: "text", id: "sigAddr2", className: "pure-input-1", onChange: this.uiHandleAddressOrNameChange.bind(this, "sigAddr2"), value: this.state.sigAddr2 })
	                ),
	                React.createElement(
	                  "button",
	                  { className: "pure-button pure-button-primary", type: "button", onClick: this.uiSubmitToBlockchain },
	                  React.createElement("i", { className: "fa fa-sitemap" }),
	                  " Submit to blockchain"
	                ),
	                React.createElement(
	                  "div",
	                  { id: "contractAddr" },
	                  this.state.contractAddr
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});
	// WHY DOES THIS ERROR? --- DocumentRefluxStore.getPrimaryAccount(),

	// if(data.event === 'init'){ this.setState({ user: DocumentRefluxStore.user })}

	/* REACT HOT LOADER */ if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module)) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "DocumentSignPage.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }); })(); }

	"use strict";

	var _interopRequire = __webpack_require__(6)["default"];

	var React = _interopRequire(__webpack_require__(15));

	var Reflux = _interopRequire(__webpack_require__(39));

	var DocumentRefluxStore = _interopRequire(__webpack_require__(29));

	module.exports = React.createClass({
	  displayName: "DocumentDataPage",

	  mixins: [Reflux.ListenerMixin],

	  getInitialState: function getInitialState() {
	    return {
	      myID: "",
	      contractAddrInput: "",
	      doctext: "",
	      docLinkHTML: "",
	      signingDataHTML: ""
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    this.listenTo(DocumentRefluxStore, this.publishedDataStatus);
	  },
	  publishedDataStatus: function publishedDataStatus(data) {},

	  uiGetContractData: function uiGetContractData() {

	    var documentLink = DocumentRefluxStore.getDocumentLink(this.state.contractAddrInput);
	    var signingData = DocumentRefluxStore.getSignatureData(this.state.contractAddrInput);
	    var doctext = DocumentRefluxStore.loadDocumentFromIpfs(documentLink);

	    var signedOrNot0;
	    var signedOrNot1;

	    if (signingData.sigTimestamps[0] > 0) {
	      signedOrNot0 = React.createElement(
	        "span",
	        null,
	        React.createElement("i", { "class": "fa fa-check-square-o" }),
	        " ",
	        "Signed (Timestamp " + signingData.sigTimestamps[0] + ")"
	      );
	    } else {
	      signedOrNot0 = React.createElement(
	        "span",
	        null,
	        React.createElement("i", { "class": "fa fa-square-o" }),
	        " Not Signed"
	      );
	    }
	    if (signingData.sigTimestamps[1] > 0) {
	      signedOrNot1 = React.createElement(
	        "span",
	        null,
	        React.createElement("i", { "class": "fa fa-square-o" }),
	        " ",
	        "Signed (Timestamp " + signingData.sigTimestamps[1] + ")"
	      );
	    } else {
	      signedOrNot1 = React.createElement(
	        "span",
	        null,
	        React.createElement("i", { "class": "fa fa-square-o" }),
	        " Not Signed"
	      );
	    }

	    this.setState({
	      doctext: doctext,
	      docLinkHTML: React.createElement(
	        "div",
	        null,
	        React.createElement(
	          "h3",
	          null,
	          "Document Link"
	        ),
	        React.createElement(
	          "div",
	          null,
	          documentLink
	        )
	      ),
	      signingDataHTML: React.createElement(
	        "div",
	        null,
	        React.createElement(
	          "h3",
	          null,
	          "Signatory 1"
	        ),
	        React.createElement(
	          "div",
	          null,
	          signingData.sigNames[0]
	        ),
	        React.createElement(
	          "div",
	          null,
	          signingData.sigAddresses[0]
	        ),
	        React.createElement(
	          "div",
	          null,
	          signedOrNot0
	        ),
	        React.createElement(
	          "h3",
	          null,
	          "Signatory 2"
	        ),
	        React.createElement(
	          "div",
	          null,
	          signingData.sigNames[1]
	        ),
	        React.createElement(
	          "div",
	          null,
	          signingData.sigAddresses[1]
	        ),
	        React.createElement(
	          "div",
	          null,
	          signedOrNot1
	        )
	      )
	    });
	  },

	  uiSignDocument: function uiSignDocument() {
	    DocumentRefluxStore.signDocument(this.state.contractAddrInput);
	  },

	  uiHandleAddressOrNameChange: function uiHandleAddressOrNameChange(name, event) {
	    if (name === "contractAddrInput") {
	      this.setState({ contractAddrInput: event.target.value });
	    }
	  },

	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "page-document-data" },
	      React.createElement(
	        "main",
	        null,
	        React.createElement(
	          "form",
	          { className: "pure-form pure-form-stacked" },
	          React.createElement(
	            "fieldset",
	            null,
	            React.createElement(
	              "div",
	              { className: "pure-g" },
	              React.createElement(
	                "div",
	                { className: "pure-u-1-2 pure-u-md-1-1" },
	                React.createElement(
	                  "h2",
	                  null,
	                  "My ID"
	                ),
	                React.createElement(
	                  "div",
	                  { id: "myID" },
	                  this.state.myID
	                ),
	                React.createElement(
	                  "h2",
	                  null,
	                  "Contract Data"
	                ),
	                React.createElement(
	                  "div",
	                  { className: "pure-control-group" },
	                  React.createElement(
	                    "h3",
	                    null,
	                    "Ethereum Address"
	                  ),
	                  React.createElement("input", { type: "text", id: "contractAddrInput", className: "pure-input-1", onChange: this.uiHandleAddressOrNameChange.bind(this, "contractAddrInput"), value: this.state.contractAddrInput }),
	                  React.createElement(
	                    "div",
	                    null,
	                    React.createElement(
	                      "button",
	                      { className: "pure-button", type: "button", onClick: this.uiGetContractData },
	                      "Get Contract Data"
	                    )
	                  )
	                ),
	                React.createElement(
	                  "div",
	                  { className: "pure-control-group" },
	                  React.createElement(
	                    "h3",
	                    null,
	                    "Document View"
	                  ),
	                  React.createElement(
	                    "div",
	                    { id: "doctext", className: "doctext" },
	                    this.state.doctext
	                  ),
	                  React.createElement(
	                    "div",
	                    null,
	                    React.createElement(
	                      "button",
	                      { className: "pure-button pure-button-primary", type: "button", onClick: this.uiSignDocument },
	                      React.createElement("i", { className: "fa fa-pencil" }),
	                      " Sign Document"
	                    )
	                  )
	                )
	              ),
	              React.createElement(
	                "div",
	                { className: "pure-u-1-2 pure-u-md-1-1" },
	                React.createElement(
	                  "h2",
	                  null,
	                  "Document Data"
	                ),
	                React.createElement(
	                  "div",
	                  { className: "pure-control-group" },
	                  React.createElement(
	                    "div",
	                    { id: "contractDocumentLink" },
	                    this.state.docLinkHTML
	                  ),
	                  React.createElement(
	                    "div",
	                    { id: "signingData" },
	                    this.state.signingDataHTML
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	// if(data.event === 'init'){ this.setState({ user: DocumentRefluxStore.user })}

	/* REACT HOT LOADER */ if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module)) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "DocumentDataPage.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }); })(); }

	"use strict";

	var _interopRequire = __webpack_require__(6)["default"];

	var React = _interopRequire(__webpack_require__(15));

	module.exports = React.createClass({
	  displayName: "404Page",

	  render: function () {
	    return React.createElement(
	      "h2",
	      null,
	      "404"
	    );
	  }
	});

	/* REACT HOT LOADER */ if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module)) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "404Page.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["React"] = __webpack_require__(16);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(30);


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React                     = __webpack_require__(26);
	var RouterMixin               = __webpack_require__(20);
	var AsyncRouteRenderingMixin  = __webpack_require__(21);
	var assign                    = Object.assign || __webpack_require__(41);

	/**
	 * Create a new router class
	 *
	 * @param {String} name
	 * @param {ReactComponent} component
	 */
	function createRouter(name, component) {

	  return React.createClass({

	    mixins: [RouterMixin, AsyncRouteRenderingMixin],

	    displayName: name,

	    getRoutes: function(props) {
	      return props.children;
	    },

	    getDefaultProps: function() {
	      return {
	        component: component
	      }
	    },

	    render: function() {
	      // Render the Route's handler.
	      var handler = this.renderRouteHandler();
	      // Pass all props except this component to the Router (containing div/body).
	      var props = assign({}, this.props);
	      delete props.component;
	      return React.createElement(this.props.component, props, handler);
	    }
	  });
	}

	module.exports = {
	  createRouter: createRouter,
	  Locations: createRouter('Locations', 'div'),
	  Pages: createRouter('Pages', 'body')
	}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React     = __webpack_require__(26);

	function createClass(name) {
	  return React.createClass({
	    propTypes: {
	      handler: React.PropTypes.element.isRequired,
	      path: name === 'NotFound' ? 
	        function(props, propName) {
	          if (props[propName]) throw new Error("Don't pass a `path` to NotFound.");
	        }
	        : React.PropTypes.string.isRequired
	    },
	    getDefaultProps: function() {
	      if (name === 'NotFound') {
	        return {path: null};
	      }
	      return {};
	    },
	    render: function() {
	      throw new Error(name + " is not meant to be directly rendered.");
	    }
	  });
	}

	module.exports = {
	  /**
	   * Regular route descriptor.
	   *
	   * @param {Object} spec
	   */
	  Route: createClass('Route'),
	  /**
	   * Catch all route descriptor.
	   *
	   * @param {Object} spec
	   */
	  NotFound: createClass('NotFound')
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React             = __webpack_require__(26);
	var NavigatableMixin  = __webpack_require__(23);
	var Environment       = __webpack_require__(25);
	var assign            = Object.assign || __webpack_require__(41);

	/**
	 * Link.
	 *
	 * A basic navigatable component which renders into <a> DOM element and handles
	 * onClick event by transitioning onto different route (defined by
	 * this.props.href).
	 */
	var Link = React.createClass({
	  mixins: [NavigatableMixin],

	  displayName: 'Link',

	  propTypes: {
	    href: React.PropTypes.string.isRequired,
	    global: React.PropTypes.bool,
	    globalHash: React.PropTypes.bool
	  },

	  onClick: function(e) {
	    if (this.props.onClick) {
	      this.props.onClick(e);
	    }

	    // return if the link target is external
	    if (this.props.href.match(/^([a-z-]+:|\/\/)/)) return;

	    // return if the user did a middle-click, right-click, or used a modifier
	    // key (like ctrl-click, meta-click, shift-click, etc.)
	    if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;

	    if (!e.defaultPrevented) {
	      e.preventDefault();
	      this._navigate(this.props.href, function(err) {
	        if (err) {
	          throw err;
	        }
	      });
	    }
	  },

	  _navigationParams: function() {
	    var params = {};
	    for (var k in this.props) {
	      if (!this.constructor.propTypes[k]) {
	        params[k] = this.props[k];
	      }
	    }
	    return params;
	  },

	  _createHref: function() {
	    return this.props.global ?
	      Environment.defaultEnvironment.makeHref(this.props.href) :
	      this.makeHref(this.props.href);
	  },

	  _navigate: function(path, cb) {
	    if (this.props.globalHash) {
	      return Environment.hashEnvironment.navigate(path, cb);
	    }

	    if (this.props.global) {
	      return Environment.defaultEnvironment.navigate(path, cb);
	    }

	    return this.navigate(path, this._navigationParams(), cb);
	  },

	  render: function() {
	    var props = assign({}, this.props, {
	      onClick: this.onClick,
	      href: this._createHref()
	    });
	    return React.DOM.a(props, this.props.children);
	  }
	});

	module.exports = Link;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React         = __webpack_require__(26);
	var invariant     = __webpack_require__(31);
	var assign        = Object.assign || __webpack_require__(41);
	var matchRoutes   = __webpack_require__(32);
	var Environment   = __webpack_require__(25);

	var RouterMixin = {
	  mixins: [Environment.Mixin],

	  propTypes: {
	    path: React.PropTypes.string,
	    contextual: React.PropTypes.bool,
	    onBeforeNavigation: React.PropTypes.func,
	    onNavigation: React.PropTypes.func
	  },

	  childContextTypes: {
	    router: React.PropTypes.any
	  },

	  getChildContext: function() {
	    return {
	      router: this
	    };
	  },

	  contextTypes: {
	    router: React.PropTypes.any
	  },

	  getInitialState: function() {
	    return this.getRouterState(this.props);
	  },

	  componentWillReceiveProps: function(nextProps) {
	    var nextState = this.getRouterState(nextProps);
	    this.delegateSetRoutingState(nextState);
	  },

	  getRouterState: function(props) {
	    var path;
	    var prefix;

	    var parent = props.contextual && this.getParentRouter();

	    if (parent) {

	      var parentMatch = parent.getMatch();

	      invariant(
	        props.path ||
	        isString(parentMatch.unmatchedPath) ||
	        parentMatch.matchedPath == parentMatch.path,
	        "contextual router has nothing to match on: %s", parentMatch.unmatchedPath
	      );

	      path = props.path || parentMatch.unmatchedPath || '/';
	      prefix = parent.state.prefix + parentMatch.matchedPath;
	    } else {

	      path = props.path || this.getEnvironment().getPath();

	      invariant(
	        isString(path),
	        ("router operate in environment which cannot provide path, " +
	         "pass it a path prop; or probably you want to make it contextual")
	      );

	      prefix = '';
	    }

	    if (path[0] !== '/') {
	      path = '/' + path;
	    }

	    var match = matchRoutes(this.getRoutes(props), path);
	    var handler = match.getHandler();

	    return {
	      match: match,
	      handler: handler,
	      prefix: prefix,
	      navigation: {}
	    };
	  },

	  getEnvironment: function() {
	    if (this.props.environment) {
	      return this.props.environment;
	    }
	    if (this.props.hash) {
	      return Environment.hashEnvironment;
	    }
	    if (this.props.contextual && this.context.router) {
	      return this.context.router.getEnvironment();
	    }
	    return Environment.defaultEnvironment;
	  },

	  /**
	   * Return parent router or undefined.
	   */
	  getParentRouter: function() {
	    var current = this.context.router;
	    var environment = this.getEnvironment();

	    if (current) {
	      if (current.getEnvironment() === environment) {
	        return current;
	      }
	    }
	  },

	  /**
	   * Return current match.
	   */
	  getMatch: function() {
	    return this.state.match;
	  },

	  /**
	   * Make href scoped for the current router.
	   */
	  makeHref: function(href) {
	    return join(this.state.prefix, href);
	  },

	  /**
	   * Navigate to a path
	   *
	   * @param {String} path
	   * @param {Function} navigation
	   * @param {Callback} cb
	   */
	  navigate: function(path, navigation, cb) {
	    path = join(this.state.prefix, path);
	    this.getEnvironment().setPath(path, navigation, cb);
	  },

	  /**
	   * Set new path.
	   *
	   * This function is called by environment.
	   *
	   * @private
	   *
	   * @param {String} path
	   * @param {Function} navigation
	   * @param {Callback} cb
	   */
	  setPath: function(path, navigation, cb) {
	    var match = matchRoutes(this.getRoutes(this.props), path);
	    var handler = match.getHandler();

	    var state = {
	      match: match,
	      handler: handler,
	      prefix: this.state.prefix,
	      navigation: navigation
	    };

	    assign(navigation, {match: match});

	    if (this.props.onBeforeNavigation &&
	        this.props.onBeforeNavigation(path, navigation) === false) {
	      return;
	    }

	    if (navigation.onBeforeNavigation &&
	        navigation.onBeforeNavigation(path, navigation) === false) {
	      return;
	    }

	    this.delegateSetRoutingState(state, function() {
	      if (this.props.onNavigation) {
	        this.props.onNavigation();
	      }
	      cb();
	    }.bind(this));
	  },

	  /**
	   * Return the current path
	   */
	  getPath: function () {
	    return this.state.match.path;
	  },

	  /**
	   * Try to delegate state update to a setRoutingState method (might be provided
	   * by router itself) or use replaceState.
	   */
	  delegateSetRoutingState: function(state, cb) {
	    if (this.setRoutingState) {
	      this.setRoutingState(state, cb);
	    } else {
	      this.replaceState(state, cb);
	    }
	  }

	};

	function join(a, b) {
	  return (a + b).replace(/\/\//g, '/');
	}

	function isString(o) {
	  return Object.prototype.toString.call(o) === '[object String]';
	}

	module.exports = RouterMixin;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var assign              = Object.assign || __webpack_require__(41);
	var prefetchAsyncState  = __webpack_require__(42);
	var isAsyncComponent    = __webpack_require__(43);
	var RouteRenderingMixin = __webpack_require__(22);

	/**
	 * Mixin for router components which prefetches state of async components
	 * (as in react-async).
	 */
	var AsyncRouteRenderingMixin = {
	  mixins: [RouteRenderingMixin],

	  setRoutingState: function(state, cb) {
	    var currentHandler = this.state && this.state.handler;
	    var nextHandler = state && state.handler;

	    if (nextHandler && nextHandler.type && 
	        isAsyncComponent(nextHandler) &&
	        // if component's type is the same we would need to skip async state
	        // update
	        !(currentHandler && currentHandler.type === nextHandler.type)) {
	      // store pending state and start fetching async state of a new handler
	      this.setState(
	        {pendingState: state},
	        this.prefetchMatchHandlerState.bind(null, state, cb)
	      );
	    } else {
	      this.replaceState(state, cb);
	    }
	  },

	  hasPendingUpdate: function() {
	    return !!this.state.pendingState;
	  },

	  prefetchMatchHandlerState: function(state, cb) {
	    prefetchAsyncState(state.handler, function(err, handler) {
	      // check if we router is still mounted and have the same match in state
	      // as we started fetching state with
	      if (this.isMounted() &&
	          this.state.pendingState &&
	          this.state.pendingState.match === state.match) {
	        var nextState = assign({}, this.state.pendingState, {handler: handler});
	        this.replaceState(nextState, cb);

	      }
	    }.bind(this));
	  }
	};

	module.exports = AsyncRouteRenderingMixin;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React  = __webpack_require__(26);
	var cloneWithProps = __webpack_require__(33);
	var assign = Object.assign || __webpack_require__(41);


	/**
	 * Mixin for routers which implements the simplest rendering strategy.
	 */
	var RouteRenderingMixin = {

	  renderRouteHandler: function(props) {
	    var handler = this.state.handler;
	    props = assign({ref: this.state.match.route.ref}, props);
	    // If we were passed an element, we need to clone it before passing it along.
	    if (React.isValidElement(handler)) {
	      return cloneWithProps(handler, props);
	    }
	    return React.createElement(handler, props);
	  }

	};

	module.exports = RouteRenderingMixin;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React       = __webpack_require__(26);
	var Environment = __webpack_require__(25);


	/**
	 * NavigatableMixin
	 *
	 * A mixin for a component which operates in context of a router and can
	 * navigate to a different route using `navigate(path, cb)` method.
	 */
	var NavigatableMixin = {

	  contextTypes: {
	    router: React.PropTypes.any
	  },

	  /**
	   * @private
	   */
	  _getNavigable: function() {
	    return this.context.router || Environment.defaultEnvironment;
	  },

	  getPath: function() {
	    return this._getNavigable().getPath();
	  },

	  navigate: function(path, cb) {
	    return this._getNavigable().navigate(path, cb);
	  },

	  makeHref: function(path) {
	    return this._getNavigable().makeHref(path);
	  }
	};

	module.exports = NavigatableMixin;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React       = __webpack_require__(26);
	var urllite     = __webpack_require__(53);
	var Environment = __webpack_require__(25);
	var assign      = Object.assign || __webpack_require__(41);

	/**
	 * A container component which captures <a> clicks and, if there's a matching
	 * route defined, routes them.
	 */
	var CaptureClicks = React.createClass({
	  displayName: 'CaptureClicks',

	  propTypes: {
	    component: React.PropTypes.func.isRequired,
	    environment: React.PropTypes.object
	  },

	  getDefaultProps: function() {
	    return {
	      component: React.DOM.div,
	      environment: Environment.defaultEnvironment,
	      gotoURL: function(url) {
	        // We should really just be allowing the event's default action, be we
	        // can't make the decision to do that synchronously.
	        window.location.href = url;
	      }
	    };
	  },

	  onClick: function(e) {
	    if (this.props.onClick) {
	      this.props.onClick(e);
	    }

	    // Ignore canceled events, modified clicks, and right clicks.
	    if (e.defaultPrevented) {
	      return;
	    }

	    if (e.metaKey || e.ctrlKey || e.shiftKey) {
	      return;
	    }

	    if (e.button !== 0) {
	      return;
	    }

	    // Get the <a> element.
	    var el = e.target;
	    while (el && el.nodeName !== 'A') {
	      el = el.parentNode;
	    }

	    // Ignore clicks from non-a elements.
	    if (!el) {
	      return;
	    }

	    // Ignore the click if the element has a target.
	    if (el.target && el.target !== '_self') {
	      return;
	    }

	    // Ignore the click if it's a download link. (We use this method of
	    // detecting the presence of the attribute for old IE versions.)
	    if (!!el.attributes.download) {
	      return;
	    }

	    // Use a regular expression to parse URLs instead of relying on the browser
	    // to do it for us (because IE).
	    var url = urllite(el.href);
	    var windowURL = urllite(window.location.href);

	    // Ignore links that don't share a protocol and host with ours.
	    if (url.protocol !== windowURL.protocol || url.host !== windowURL.host) {
	      return;
	    }

	    // Ignore 'rel="external"' links.
	    if (el.rel && /(?:^|\s+)external(?:\s+|$)/.test(el.rel)) {
	      return;
	    }

	    e.preventDefault();

	    // flag if we already found a "not found" case and bailed
	    var bail = false;

	    var onBeforeNavigation = function(path, navigation) {
	      if (bail) {
	        return false;
	      } else if (!navigation.match || !navigation.match.match) {
	        bail = true;
	        this.props.gotoURL(el.href);
	        return false;
	      }
	    }.bind(this);

	    this.props.environment.navigate(
	      url.pathname + (url.hash.length > 1 ? url.hash : ''),
	      {onBeforeNavigation: onBeforeNavigation},
	      function(err, info) {
	        if (err) {
	          throw err;
	        }
	      });
	  },

	  render: function() {
	    var props = assign({}, this.props, {
	      onClick: this.onClick
	    });
	    return this.props.component(props, this.props.children);
	  }

	});

	module.exports = CaptureClicks;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Routing environment.
	 *
	 * It specifies how routers read its state from DOM and synchronise it back.
	 */

	var ExecutionEnvironment  = __webpack_require__(34);
	var DummyEnvironment      = __webpack_require__(35);
	var Environment           = __webpack_require__(36);

	/**
	 * Mixin for routes to keep attached to an environment.
	 *
	 * This mixin assumes the environment is passed via props.
	 */
	var Mixin = {

	  componentDidMount: function() {
	    this.getEnvironment().register(this);
	  },

	  componentWillUnmount: function() {
	    this.getEnvironment().unregister(this);
	  }
	};

	var PathnameEnvironment;
	var HashEnvironment;

	var pathnameEnvironment;
	var hashEnvironment;
	var defaultEnvironment;
	var dummyEnvironment;

	if (ExecutionEnvironment.canUseDOM) {

	  PathnameEnvironment = __webpack_require__(37);
	  HashEnvironment     = __webpack_require__(38);

	  pathnameEnvironment = new PathnameEnvironment();
	  hashEnvironment     = new HashEnvironment();
	  defaultEnvironment  = (window.history !== undefined &&
	                         window.history.pushState !== undefined) ?
	                        pathnameEnvironment :
	                        hashEnvironment;

	} else {

	  dummyEnvironment    = new DummyEnvironment();
	  pathnameEnvironment = dummyEnvironment;
	  hashEnvironment     = dummyEnvironment;
	  defaultEnvironment  = dummyEnvironment;

	}

	module.exports = {
	  pathnameEnvironment: pathnameEnvironment,
	  hashEnvironment: hashEnvironment,
	  defaultEnvironment: defaultEnvironment,
	  dummyEnvironment: dummyEnvironment,

	  Environment: Environment,
	  PathnameEnvironment: PathnameEnvironment,
	  HashEnvironment: HashEnvironment,

	  Mixin: Mixin
	};


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(40);


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(26);

	var INTERACTIVE = {
	  button: true,
	  input: true,
	  textarea: true,
	  a: function a(props) {
	    return typeof props.href === "string";
	  }
	};

	var hasAlt = function (props) {
	  return typeof props.alt === "string";
	};

	var isInteractive = function (tagName, props) {
	  var tag = INTERACTIVE[tagName];
	  return typeof tagName === "function" ? tag(props) : tag;
	};

	var hasChildTextNode = function (props, children) {
	  var hasText = false;
	  React.Children.forEach(children, function (child) {
	    if (hasText) return;else if (child === null) return;else if (typeof child === "undefined") return;else if (typeof child === "string") hasText = true;else if (child.type === "img" && child.props.alt) hasText = true;else if (child.props.children) hasText = hasChildTextNode(child.props, child.props.children);
	  });
	  return hasText;
	};

	exports.props = {
	  onClick: {
	    NO_ROLE: {
	      msg: "You have a click handler on a non-interactive element but no `role` DOM property. It will be unclear what this element is supposed to do to a screen-reader user. http://www.w3.org/TR/wai-aria/roles#role_definitions",
	      test: function test(tagName, props, children) {
	        return !(!isInteractive(tagName, props) && !props.role);
	      }
	    },

	    NO_TABINDEX: {
	      msg: "You have a click handler on a non-interactive element but no `tabIndex` DOM property. The element will not be navigable or interactive by keyboard users. http://www.w3.org/TR/wai-aria-practices/#focus_tabindex",
	      test: function test(tagName, props, children) {
	        return !(!isInteractive(tagName, props) && !props.tabIndex);
	      }
	    },

	    NO_LABEL: {
	      msg: "You have a click handler on an element with no screen-readable text. Add `aria-label` or `aria-labelled-by` attribute, or put some text in the element.",
	      test: function test(tagName, props, children) {
	        return props["aria-label"] || props["aria-labelled-by"] || tagName === "img" && props.alt || hasChildTextNode(props, children);
	      }
	    },

	    BUTTON_ROLE_NO_KEYUP: {
	      msg: "You have `role=\"button\"` but did not define an `onKeyUp` handler. Add it, and have the \"Space\" key do the same thing as an `onClick` handler.",
	      test: function test(tagName, props, children) {
	        return !(props.role === "button" && !props.onKeyUp);
	      }
	    },

	    BUTTON_ROLE_NO_KEYDOWN: {
	      msg: "You have `role=\"button\"` but did not define an `onKeyDown` handler. Add it, and have the \"Enter\" key do the same thing as an `onClick` handler.",
	      test: function test(tagName, props, children) {
	        return !(props.role === "button" && !props.onKeyUp);
	      }
	    }

	  }
	};

	exports.tags = {
	  a: {
	    HASH_HREF_NEEDS_BUTTON: {
	      msg: "You have an anchor with `href=\"#\"` and no `role` DOM property. Add `role=\"button\"` or better yet, use a `<button/>`.",
	      test: function test(tagName, props, children) {
	        return !(!props.role && props.href === "#");
	      }
	    }
	  },

	  img: {
	    MISSING_ALT: {
	      msg: "You forgot an `alt` DOM property on an image. Screen-reader users will not know what it is.",
	      test: function test(tagName, props, children) {
	        return hasAlt(props);
	      }
	    },

	    REDUDANT_ALT: {
	      // TODO: have some way to set localization strings to match against
	      msg: "Screen-readers already announce `img` tags as an image, you don't need to use the word \"image\" in the description",
	      test: function test(tagName, props, children) {
	        return !(hasAlt(props) && props.alt.match("image"));
	      }
	    }
	  }
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }); })(); }

	"use strict";

	var _interopRequire = __webpack_require__(6)["default"];

	var React = _interopRequire(__webpack_require__(15));

	var Router = _interopRequire(__webpack_require__(4));

	var Link = Router.Link;

	module.exports = React.createClass({
	    displayName: "Navigation",

	    render: function () {
	        return React.createElement(
	            "nav",
	            null,
	            React.createElement(
	                "ul",
	                null,
	                React.createElement(
	                    "li",
	                    null,
	                    React.createElement(
	                        Link,
	                        { href: "/document/sign" },
	                        React.createElement("i", { className: "fa fa-pencil" }),
	                        " Document Sign"
	                    )
	                ),
	                React.createElement(
	                    "li",
	                    null,
	                    React.createElement(
	                        Link,
	                        { href: "/document/data" },
	                        React.createElement("i", { className: "fa fa-file-o" }),
	                        " Document Data"
	                    )
	                )
	            )
	        );
	    }
	});

	/* REACT HOT LOADER */ if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module)) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Navigation.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }); })(); }

	"use strict";

	var _interopRequire = __webpack_require__(6)["default"];

	var React = _interopRequire(__webpack_require__(15));

	var Reflux = _interopRequire(__webpack_require__(39));

	module.exports = Reflux.createStore({

		user: {},

		init: function init() {},

		callAPI: function callAPI(functionName, input) {

			var message = JSON.stringify(input);
			var base_url = "";
			var url = base_url + "/api/documentSign/" + functionName;

			var client = new XMLHttpRequest();
			client.open("PUT", url, false);
			client.setRequestHeader("Content-Type", "application/json");
			client.send(message);
			json_data = JSON.parse(client.response);

			return json_data;
		},

		// Basic API functions

		createAndPopulateData: function createAndPopulateData(documentLink, sigAddresses, sigNames) {

			var data = { documentLink: documentLink,
				sigAddresses: sigAddresses,
				sigNames: sigNames };
			var contractAddr = this.callAPI("createAndPopulateData", data).address;

			return contractAddr;
		},

		getDocumentLink: function getDocumentLink(contractAddress) {

			var data = { contractAddress: contractAddress };
			var documentLink = this.callAPI("getDocumentLink", data).documentLink;

			return documentLink;
		},

		signDocument: function signDocument(contractAddress) {

			var data = { contractAddress: contractAddress };

			this.callAPI("signDocument", data);
		},

		getSignatureData: function getSignatureData(contractAddress) {

			var data = { contractAddress: contractAddress };
			var signingData = this.callAPI("getSignatureData", data);

			return signingData;
		},

		storeDocumentInIpfs: function storeDocumentInIpfs(documentText) {

			var data = { documentText: documentText };
			var documentLink = this.callAPI("storeDocumentInIpfs", data).documentLink;

			return documentLink;
		},

		loadDocumentFromIpfs: function loadDocumentFromIpfs(documentLink) {

			var data = { documentLink: documentLink };
			var documentText = this.callAPI("loadDocumentFromIpfs", data).documentText;

			return documentText;
		},

		getPrimaryAccount: function getPrimaryAccount(documentLink) {

			var account = this.callAPI("getPrimaryAccount", {}).account;

			return account;
		}
	});

	// this.trigger({
	// 	store: 'DocumentRefluxStore',
	// 	event: 'init',
	// 	data: null
	// });

	/* REACT HOT LOADER */ if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jeffscottward/Documents/Development/Projects/ConsenSys/balanc3/frontend/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module)) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "DocumentRefluxStore.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactWithAddons
	 */

	/**
	 * This module exists purely in the open source project, and is meant as a way
	 * to create a separate standalone build of React. This build has "addons", or
	 * functionality we've built and think might be useful but doesn't have a good
	 * place to live inside React core.
	 */

	"use strict";

	var LinkedStateMixin = __webpack_require__(44);
	var React = __webpack_require__(40);
	var ReactComponentWithPureRenderMixin =
	  __webpack_require__(45);
	var ReactCSSTransitionGroup = __webpack_require__(46);
	var ReactTransitionGroup = __webpack_require__(47);
	var ReactUpdates = __webpack_require__(48);

	var cx = __webpack_require__(49);
	var cloneWithProps = __webpack_require__(33);
	var update = __webpack_require__(50);

	React.addons = {
	  CSSTransitionGroup: ReactCSSTransitionGroup,
	  LinkedStateMixin: LinkedStateMixin,
	  PureRenderMixin: ReactComponentWithPureRenderMixin,
	  TransitionGroup: ReactTransitionGroup,

	  batchedUpdates: ReactUpdates.batchedUpdates,
	  classSet: cx,
	  cloneWithProps: cloneWithProps,
	  update: update
	};

	if ("production" !== (undefined)) {
	  React.addons.Perf = __webpack_require__(51);
	  React.addons.TestUtils = __webpack_require__(52);
	}

	module.exports = React;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if ("production" !== (undefined)) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        'Invariant Violation: ' +
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var pattern   = __webpack_require__(82);
	var invariant = __webpack_require__(31);
	var React  = __webpack_require__(26);
	var cloneWithProps = __webpack_require__(33);
	var assign = Object.assign || __webpack_require__(41);

	/**
	 * Match routes against a path
	 *
	 * @param {Array.<Route>} routes
	 * @param {String} path
	 */
	function matchRoutes(routes, path) {
	  var match, page, notFound;

	  if (!Array.isArray(routes)) {
	    routes = [routes];
	  }

	  for (var i = 0, len = routes.length; i < len; i++) {
	    var current = routes[i];
	    // Simply skip null or undefined to allow ternaries in route definitions
	    if (!current) continue;

	    if ((undefined) !== "production") {
	      invariant(
	        current.props.handler !== undefined && current.props.path !== undefined,
	        "Router should contain either Route or NotFound components " +
	        "as routes")
	    }

	    if (current.props.path) {
	      current.props.pattern = current.props.pattern || pattern.newPattern(current.props.path);
	      if (!page) {
	        match = current.props.pattern.match(path);
	        if (match) {
	          page = current;
	        }
	        // Parse RegExp matches, which are returned as an array rather an an object.
	        if (Array.isArray(match)) {
	          match = parseMatch(current, match);
	        }
	      }
	    }
	    if (!notFound && current.props.path === null) {
	      notFound = current;
	    }
	  }

	  return new Match(
	    path,
	    page ? page : notFound ? notFound : null,
	    match
	  );
	}

	/**
	 * Given the currently matched Location & the match array, transform the matches to named key/value pairs,
	 * if possible.
	 * @param  {Route} current Matched Route.
	 * @param  {Array} match   Array of matches from RegExp.
	 * @return {Object}        Key/value pairs to feed to the route's handler.
	 */
	function parseMatch(current, match) {
	  if (Array.isArray(current.props.matchKeys)) {
	    return current.props.matchKeys.reduce(function(memo, key, i) {
	      memo[key] = match[i];
	      return memo;
	    }, {});
	  }
	  return {_: match};
	}

	/**
	 * Match object
	 *
	 * @private
	 */
	function Match(path, route, match) {
	  this.path = path;
	  this.route = route;
	  this.match = match;

	  this.unmatchedPath = this.match && this.match._ ?
	    this.match._[0] :
	    null;

	  this.matchedPath = this.unmatchedPath ?
	    this.path.substring(0, this.path.length - this.unmatchedPath.length) :
	    this.path;
	}

	Match.prototype.getHandler = function() {
	  if (!this.route) return undefined;

	  var props = assign({}, this.route.props, this.match);
	  delete props.pattern;
	  delete props.path;
	  delete props.handler;
	  var handler = this.route.props.handler;
	  // Passed an element - clone it with the props from the route
	  if (React.isValidElement(handler)) {
	    return cloneWithProps(handler, props);
	  }
	  // Passed a component descriptor - create an element. Assign it the ref
	  // from the <Location> tag.
	  return React.createElement(handler, props);
	}

	module.exports = matchRoutes;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @providesModule cloneWithProps
	 */

	"use strict";

	var ReactElement = __webpack_require__(54);
	var ReactPropTransferer = __webpack_require__(55);

	var keyOf = __webpack_require__(56);
	var warning = __webpack_require__(57);

	var CHILDREN_PROP = keyOf({children: null});

	/**
	 * Sometimes you want to change the props of a child passed to you. Usually
	 * this is to add a CSS class.
	 *
	 * @param {object} child child component you'd like to clone
	 * @param {object} props props you'd like to modify. They will be merged
	 * as if you used `transferPropsTo()`.
	 * @return {object} a clone of child with props merged in.
	 */
	function cloneWithProps(child, props) {
	  if ("production" !== (undefined)) {
	    ("production" !== (undefined) ? warning(
	      !child.ref,
	      'You are calling cloneWithProps() on a child with a ref. This is ' +
	      'dangerous because you\'re creating a new child which will not be ' +
	      'added as a ref to its parent.'
	    ) : null);
	  }

	  var newProps = ReactPropTransferer.mergeProps(props, child.props);

	  // Use `child.props.children` if it is provided.
	  if (!newProps.hasOwnProperty(CHILDREN_PROP) &&
	      child.props.hasOwnProperty(CHILDREN_PROP)) {
	    newProps.children = child.props.children;
	  }

	  // The current API doesn't retain _owner and _context, which is why this
	  // doesn't use ReactElement.cloneAndReplaceProps.
	  return ReactElement.createElement(child.type, newProps);
	}

	module.exports = cloneWithProps;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ExecutionEnvironment
	 */

	/*jslint evil: true */

	"use strict";

	var canUseDOM = !!(
	  typeof window !== 'undefined' &&
	  window.document &&
	  window.document.createElement
	);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners:
	    canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	module.exports = ExecutionEnvironment;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Environment   = __webpack_require__(36);
	var emptyFunction = __webpack_require__(58);

	/**
	 * Dummy routing environment which provides no path.
	 *
	 * Should be used on server or in WebWorker.
	 */
	function DummyEnvironment() {
	  Environment.call(this);
	}

	DummyEnvironment.prototype = Object.create(Environment.prototype);
	DummyEnvironment.prototype.constructor = DummyEnvironment;

	DummyEnvironment.prototype.getPath = emptyFunction.thatReturnsNull;

	DummyEnvironment.prototype.setPath = function(path, navigation, cb) {
	  // Support old (path, cb) arity
	  if (typeof navigation === 'function' && cb === undefined) {
	    cb = navigation;
	    navigation = {};
	  }
	  this.path = path;
	  cb();
	};

	DummyEnvironment.prototype.start = emptyFunction;

	DummyEnvironment.prototype.stop = emptyFunction;

	module.exports = DummyEnvironment;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var ReactUpdates  = __webpack_require__(48);

	/**
	 * Base abstract class for a routing environment.
	 *
	 * @private
	 */
	function Environment() {
	  this.routers = [];
	  this.path = this.getPath();
	}

	/**
	 * Notify routers about the change.
	 *
	 * @param {Object} navigation
	 * @param {Function} cb
	 */
	Environment.prototype.notify = function notify(navigation, cb) {
	  var latch = this.routers.length;

	  if (latch === 0) {
	    return cb && cb();
	  }

	  function callback() {
	    latch -= 1;
	    if (cb && latch === 0) {
	      cb();
	    }
	  }

	  ReactUpdates.batchedUpdates(function() {
	    for (var i = 0, len = this.routers.length; i < len; i++) {
	      this.routers[i].setPath(this.path, navigation, callback);
	    }
	  }.bind(this));
	}

	Environment.prototype.makeHref = function makeHref(path) {
	  return path;
	}

	Environment.prototype.navigate = function navigate(path, navigation, cb) {
	  return this.setPath(path, navigation, cb);
	}

	Environment.prototype.setPath = function(path, navigation, cb) {
	  // Support (path, cb) arity.
	  if (typeof navigation === 'function' && cb === undefined) {
	    cb = navigation;
	    navigation = {};
	  }
	  // Support (path) arity.
	  if (!navigation) navigation = {};

	  if (!navigation.isPopState) {
	    if (navigation.replace) {
	      this.replaceState(path, navigation);
	    } else {
	      this.pushState(path, navigation);
	    }
	  }
	  this.path = path;
	  this.notify(navigation, cb);
	}

	/**
	 * Register router with an environment.
	 */
	Environment.prototype.register = function register(router) {
	  if (this.routers.length === 0) {
	    this.start();
	  }

	  if (router.getParentRouter === undefined || !router.getParentRouter()) {
	    this.routers.push(router);
	  }
	}

	/**
	 * Unregister router from an environment.
	 */
	Environment.prototype.unregister = function unregister(router) {
	  if (this.routers.indexOf(router) > -1) {
	    this.routers.splice(this.routers.indexOf(router), 1);
	  }

	  if (this.routers.length === 0) {
	    this.stop();
	  }
	}

	module.exports = Environment;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Environment = __webpack_require__(36);

	/**
	 * Routing environment which routes by `location.pathname`.
	 */
	function PathnameEnvironment() {
	  this.onPopState = this.onPopState.bind(this);
	  this.useHistoryApi = !!(window.history &&
	                          window.history.pushState &&
	                          window.history.replaceState);
	  Environment.call(this);
	}

	PathnameEnvironment.prototype = Object.create(Environment.prototype);
	PathnameEnvironment.prototype.constructor = PathnameEnvironment;

	PathnameEnvironment.prototype.getPath = function() {
	  return window.location.pathname;
	}

	PathnameEnvironment.prototype.pushState = function(path, navigation) {
	  if (this.useHistoryApi) {
	    window.history.pushState({}, '', path);
	  } else {
	    window.location.pathname = path;
	  }
	}

	PathnameEnvironment.prototype.replaceState = function(path, navigation) {
	  if (this.useHistoryApi) {
	    window.history.replaceState({}, '', path);
	  } else {
	    window.location.pathname = path;
	  }
	}

	PathnameEnvironment.prototype.start = function() {
	  if (this.useHistoryApi && window.addEventListener) {
	    window.addEventListener('popstate', this.onPopState);
	  }
	};

	PathnameEnvironment.prototype.stop = function() {
	  if (this.useHistoryApi && window.removeEventListener) {
	    window.removeEventListener('popstate', this.onPopState);
	  }
	};

	PathnameEnvironment.prototype.onPopState = function(e) {
	  var path = window.location.pathname;

	  if (this.path !== path) {
	    this.setPath(path, {isPopState: true});
	  }
	};

	module.exports = PathnameEnvironment;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Environment = __webpack_require__(36);

	/**
	 * Routing environment which routes by `location.hash`.
	 */
	function HashEnvironment() {
	  this.onHashChange = this.onHashChange.bind(this);
	  Environment.call(this);
	}

	HashEnvironment.prototype = Object.create(Environment.prototype);
	HashEnvironment.prototype.constructor = HashEnvironment;

	HashEnvironment.prototype.getPath = function() {
	  return window.location.hash.slice(1) || '/';
	};

	HashEnvironment.prototype.pushState = function(path, navigation) {
	  window.location.hash = path;
	}

	HashEnvironment.prototype.replaceState = function(path, navigation) {
	  var href = window.location.href.replace(/(javascript:|#).*$/, '');
	  window.location.replace(href + '#' + path);
	}

	HashEnvironment.prototype.start = function() {
	  if (window.addEventListener) {
	    window.addEventListener('hashchange', this.onHashChange);
	  } else {
	    window.attachEvent('onhashchange', this.onHashChange);
	  }
	};

	HashEnvironment.prototype.stop = function() {
	  if (window.removeEventListener) {
	    window.removeEventListener('hashchange', this.onHashChange);
	  } else {
	    window.detachEvent('onhashchange', this.onHashChange);
	  }
	};

	HashEnvironment.prototype.onHashChange = function() {
	  var path = this.getPath();

	  if (this.path !== path) {
	    this.setPath(path, {isPopState: true});
	  }
	};

	module.exports = HashEnvironment;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(59);


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule React
	 */

	"use strict";

	var DOMPropertyOperations = __webpack_require__(60);
	var EventPluginUtils = __webpack_require__(61);
	var ReactChildren = __webpack_require__(62);
	var ReactComponent = __webpack_require__(63);
	var ReactCompositeComponent = __webpack_require__(64);
	var ReactContext = __webpack_require__(65);
	var ReactCurrentOwner = __webpack_require__(66);
	var ReactElement = __webpack_require__(54);
	var ReactElementValidator = __webpack_require__(67);
	var ReactDOM = __webpack_require__(68);
	var ReactDOMComponent = __webpack_require__(69);
	var ReactDefaultInjection = __webpack_require__(70);
	var ReactInstanceHandles = __webpack_require__(71);
	var ReactLegacyElement = __webpack_require__(72);
	var ReactMount = __webpack_require__(73);
	var ReactMultiChild = __webpack_require__(74);
	var ReactPerf = __webpack_require__(75);
	var ReactPropTypes = __webpack_require__(76);
	var ReactServerRendering = __webpack_require__(77);
	var ReactTextComponent = __webpack_require__(78);

	var assign = __webpack_require__(79);
	var deprecated = __webpack_require__(80);
	var onlyChild = __webpack_require__(81);

	ReactDefaultInjection.inject();

	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;

	if ("production" !== (undefined)) {
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	}

	// TODO: Drop legacy elements once classes no longer export these factories
	createElement = ReactLegacyElement.wrapCreateElement(
	  createElement
	);
	createFactory = ReactLegacyElement.wrapCreateFactory(
	  createFactory
	);

	var render = ReactPerf.measure('React', 'render', ReactMount.render);

	var React = {
	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    only: onlyChild
	  },
	  DOM: ReactDOM,
	  PropTypes: ReactPropTypes,
	  initializeTouchEvents: function(shouldUseTouch) {
	    EventPluginUtils.useTouchEvents = shouldUseTouch;
	  },
	  createClass: ReactCompositeComponent.createClass,
	  createElement: createElement,
	  createFactory: createFactory,
	  constructAndRenderComponent: ReactMount.constructAndRenderComponent,
	  constructAndRenderComponentByID: ReactMount.constructAndRenderComponentByID,
	  render: render,
	  renderToString: ReactServerRendering.renderToString,
	  renderToStaticMarkup: ReactServerRendering.renderToStaticMarkup,
	  unmountComponentAtNode: ReactMount.unmountComponentAtNode,
	  isValidClass: ReactLegacyElement.isValidClass,
	  isValidElement: ReactElement.isValidElement,
	  withContext: ReactContext.withContext,

	  // Hook for JSX spread, don't use this for anything else.
	  __spread: assign,

	  // Deprecations (remove for 0.13)
	  renderComponent: deprecated(
	    'React',
	    'renderComponent',
	    'render',
	    this,
	    render
	  ),
	  renderComponentToString: deprecated(
	    'React',
	    'renderComponentToString',
	    'renderToString',
	    this,
	    ReactServerRendering.renderToString
	  ),
	  renderComponentToStaticMarkup: deprecated(
	    'React',
	    'renderComponentToStaticMarkup',
	    'renderToStaticMarkup',
	    this,
	    ReactServerRendering.renderToStaticMarkup
	  ),
	  isValidComponent: deprecated(
	    'React',
	    'isValidComponent',
	    'isValidElement',
	    this,
	    ReactElement.isValidElement
	  )
	};

	// Inject the runtime into a devtools global hook regardless of browser.
	// Allows for debugging when the hook is injected on the page.
	if (
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
	    Component: ReactComponent,
	    CurrentOwner: ReactCurrentOwner,
	    DOMComponent: ReactDOMComponent,
	    DOMPropertyOperations: DOMPropertyOperations,
	    InstanceHandles: ReactInstanceHandles,
	    Mount: ReactMount,
	    MultiChild: ReactMultiChild,
	    TextComponent: ReactTextComponent
	  });
	}

	if ("production" !== (undefined)) {
	  var ExecutionEnvironment = __webpack_require__(34);
	  if (ExecutionEnvironment.canUseDOM && window.top === window.self) {

	    // If we're in Chrome, look for the devtools marker and provide a download
	    // link if not installed.
	    if (navigator.userAgent.indexOf('Chrome') > -1) {
	      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
	        console.debug(
	          'Download the React DevTools for a better development experience: ' +
	          'http://fb.me/react-devtools'
	        );
	      }
	    }

	    var expectedFeatures = [
	      // shims
	      Array.isArray,
	      Array.prototype.every,
	      Array.prototype.forEach,
	      Array.prototype.indexOf,
	      Array.prototype.map,
	      Date.now,
	      Function.prototype.bind,
	      Object.keys,
	      String.prototype.split,
	      String.prototype.trim,

	      // shams
	      Object.create,
	      Object.freeze
	    ];

	    for (var i = 0; i < expectedFeatures.length; i++) {
	      if (!expectedFeatures[i]) {
	        console.error(
	          'One or more ES5 shim/shams expected by React are not available: ' +
	          'http://fb.me/react-warning-polyfills'
	        );
	        break;
	      }
	    }
	  }
	}

	// Version exists only in the open-source version of React, not in Facebook's
	// internal version.
	React.version = '0.12.2';

	module.exports = React;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// modified from https://github.com/es-shims/es6-shim
	var keys = __webpack_require__(101);
	var canBeObject = function (obj) {
		return typeof obj !== 'undefined' && obj !== null;
	};

	var assignShim = function assign(target, source1) {
		if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
		var objTarget = Object(target);
		var s, source, i, props;
		for (s = 1; s < arguments.length; ++s) {
			source = Object(arguments[s]);
			props = keys(source);
			for (i = 0; i < props.length; ++i) {
				objTarget[props[i]] = source[props[i]];
			}
		}
		return objTarget;
	};

	assignShim.shim = function shimObjectAssign() {
		if (!Object.assign) {
			Object.assign = assignShim;
		}
		return Object.assign || assignShim;
	};

	module.exports = assignShim;



/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var invariant         = __webpack_require__(31);
	var cloneWithProps    = __webpack_require__(33);
	var isAsyncComponent  = __webpack_require__(43);

	/**
	 * Prefetch an async state for an unmounted async component instance.
	 *
	 * @param {ReactComponent} component
	 * @param {Callback} cb
	 */
	function prefetchAsyncState(component, cb) {

	  invariant(
	    isAsyncComponent(component),
	    "%s should be an async component to be able to prefetch async state, " +
	    "but getInitialStateAsync(cb) method is missing or is not a function",
	    component.displayName
	  );

	  var cloneCallback = function(err, asyncState) {
	    if (err) {
	      return cb(err);
	    }

	    cb(null, cloneWithProps(component, {asyncState: asyncState || {}}));
	  };
	  var getInitialStateAsync = component.type.prototype.getInitialStateAsync;
	  var promise = getInitialStateAsync.call(component, cloneCallback);

	  if (promise && typeof promise.then === 'function') {
	    promise.then(cloneCallback.bind(cloneCallback, null), cloneCallback);
	  }
	}

	module.exports = prefetchAsyncState;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * Check if a component is an async component.
	 *
	 * @param {ReactComponent} component
	 */
	function isAsyncComponent(component) {
	  return component.type.prototype && typeof component.type.prototype.getInitialStateAsync === 'function';
	}

	module.exports = isAsyncComponent;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule LinkedStateMixin
	 * @typechecks static-only
	 */

	"use strict";

	var ReactLink = __webpack_require__(83);
	var ReactStateSetters = __webpack_require__(84);

	/**
	 * A simple mixin around ReactLink.forState().
	 */
	var LinkedStateMixin = {
	  /**
	   * Create a ReactLink that's linked to part of this component's state. The
	   * ReactLink will have the current value of this.state[key] and will call
	   * setState() when a change is requested.
	   *
	   * @param {string} key state key to update. Note: you may want to use keyOf()
	   * if you're using Google Closure Compiler advanced mode.
	   * @return {ReactLink} ReactLink instance linking to the state.
	   */
	  linkState: function(key) {
	    return new ReactLink(
	      this.state[key],
	      ReactStateSetters.createStateKeySetter(this, key)
	    );
	  }
	};

	module.exports = LinkedStateMixin;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule ReactComponentWithPureRenderMixin
	*/

	"use strict";

	var shallowEqual = __webpack_require__(85);

	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function(nextProps, nextState) {
	    return !shallowEqual(this.props, nextProps) ||
	           !shallowEqual(this.state, nextState);
	  }
	};

	module.exports = ReactComponentWithPureRenderMixin;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @providesModule ReactCSSTransitionGroup
	 */

	"use strict";

	var React = __webpack_require__(40);

	var assign = __webpack_require__(79);

	var ReactTransitionGroup = React.createFactory(
	  __webpack_require__(47)
	);
	var ReactCSSTransitionGroupChild = React.createFactory(
	  __webpack_require__(86)
	);

	var ReactCSSTransitionGroup = React.createClass({
	  displayName: 'ReactCSSTransitionGroup',

	  propTypes: {
	    transitionName: React.PropTypes.string.isRequired,
	    transitionEnter: React.PropTypes.bool,
	    transitionLeave: React.PropTypes.bool
	  },

	  getDefaultProps: function() {
	    return {
	      transitionEnter: true,
	      transitionLeave: true
	    };
	  },

	  _wrapChild: function(child) {
	    // We need to provide this childFactory so that
	    // ReactCSSTransitionGroupChild can receive updates to name, enter, and
	    // leave while it is leaving.
	    return ReactCSSTransitionGroupChild(
	      {
	        name: this.props.transitionName,
	        enter: this.props.transitionEnter,
	        leave: this.props.transitionLeave
	      },
	      child
	    );
	  },

	  render: function() {
	    return (
	      ReactTransitionGroup(
	        assign({}, this.props, {childFactory: this._wrapChild})
	      )
	    );
	  }
	});

	module.exports = ReactCSSTransitionGroup;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionGroup
	 */

	"use strict";

	var React = __webpack_require__(40);
	var ReactTransitionChildMapping = __webpack_require__(87);

	var assign = __webpack_require__(79);
	var cloneWithProps = __webpack_require__(33);
	var emptyFunction = __webpack_require__(58);

	var ReactTransitionGroup = React.createClass({
	  displayName: 'ReactTransitionGroup',

	  propTypes: {
	    component: React.PropTypes.any,
	    childFactory: React.PropTypes.func
	  },

	  getDefaultProps: function() {
	    return {
	      component: 'span',
	      childFactory: emptyFunction.thatReturnsArgument
	    };
	  },

	  getInitialState: function() {
	    return {
	      children: ReactTransitionChildMapping.getChildMapping(this.props.children)
	    };
	  },

	  componentWillReceiveProps: function(nextProps) {
	    var nextChildMapping = ReactTransitionChildMapping.getChildMapping(
	      nextProps.children
	    );
	    var prevChildMapping = this.state.children;

	    this.setState({
	      children: ReactTransitionChildMapping.mergeChildMappings(
	        prevChildMapping,
	        nextChildMapping
	      )
	    });

	    var key;

	    for (key in nextChildMapping) {
	      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
	      if (nextChildMapping[key] && !hasPrev &&
	          !this.currentlyTransitioningKeys[key]) {
	        this.keysToEnter.push(key);
	      }
	    }

	    for (key in prevChildMapping) {
	      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
	      if (prevChildMapping[key] && !hasNext &&
	          !this.currentlyTransitioningKeys[key]) {
	        this.keysToLeave.push(key);
	      }
	    }

	    // If we want to someday check for reordering, we could do it here.
	  },

	  componentWillMount: function() {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  },

	  componentDidUpdate: function() {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);

	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },

	  performEnter: function(key) {
	    this.currentlyTransitioningKeys[key] = true;

	    var component = this.refs[key];

	    if (component.componentWillEnter) {
	      component.componentWillEnter(
	        this._handleDoneEntering.bind(this, key)
	      );
	    } else {
	      this._handleDoneEntering(key);
	    }
	  },

	  _handleDoneEntering: function(key) {
	    var component = this.refs[key];
	    if (component.componentDidEnter) {
	      component.componentDidEnter();
	    }

	    delete this.currentlyTransitioningKeys[key];

	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(
	      this.props.children
	    );

	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully entered. Remove it.
	      this.performLeave(key);
	    }
	  },

	  performLeave: function(key) {
	    this.currentlyTransitioningKeys[key] = true;

	    var component = this.refs[key];
	    if (component.componentWillLeave) {
	      component.componentWillLeave(this._handleDoneLeaving.bind(this, key));
	    } else {
	      // Note that this is somewhat dangerous b/c it calls setState()
	      // again, effectively mutating the component before all the work
	      // is done.
	      this._handleDoneLeaving(key);
	    }
	  },

	  _handleDoneLeaving: function(key) {
	    var component = this.refs[key];

	    if (component.componentDidLeave) {
	      component.componentDidLeave();
	    }

	    delete this.currentlyTransitioningKeys[key];

	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(
	      this.props.children
	    );

	    if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
	      // This entered again before it fully left. Add it again.
	      this.performEnter(key);
	    } else {
	      var newChildren = assign({}, this.state.children);
	      delete newChildren[key];
	      this.setState({children: newChildren});
	    }
	  },

	  render: function() {
	    // TODO: we could get rid of the need for the wrapper node
	    // by cloning a single child
	    var childrenToRender = {};
	    for (var key in this.state.children) {
	      var child = this.state.children[key];
	      if (child) {
	        // You may need to apply reactive updates to a child as it is leaving.
	        // The normal React way to do it won't work since the child will have
	        // already been removed. In case you need this behavior you can provide
	        // a childFactory function to wrap every child, even the ones that are
	        // leaving.
	        childrenToRender[key] = cloneWithProps(
	          this.props.childFactory(child),
	          {ref: key}
	        );
	      }
	    }
	    return React.createElement(
	      this.props.component,
	      this.props,
	      childrenToRender
	    );
	  }
	});

	module.exports = ReactTransitionGroup;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactUpdates
	 */

	"use strict";

	var CallbackQueue = __webpack_require__(88);
	var PooledClass = __webpack_require__(89);
	var ReactCurrentOwner = __webpack_require__(66);
	var ReactPerf = __webpack_require__(75);
	var Transaction = __webpack_require__(90);

	var assign = __webpack_require__(79);
	var invariant = __webpack_require__(31);
	var warning = __webpack_require__(57);

	var dirtyComponents = [];
	var asapCallbackQueue = CallbackQueue.getPooled();
	var asapEnqueued = false;

	var batchingStrategy = null;

	function ensureInjected() {
	  ("production" !== (undefined) ? invariant(
	    ReactUpdates.ReactReconcileTransaction && batchingStrategy,
	    'ReactUpdates: must inject a reconcile transaction class and batching ' +
	    'strategy'
	  ) : invariant(ReactUpdates.ReactReconcileTransaction && batchingStrategy));
	}

	var NESTED_UPDATES = {
	  initialize: function() {
	    this.dirtyComponentsLength = dirtyComponents.length;
	  },
	  close: function() {
	    if (this.dirtyComponentsLength !== dirtyComponents.length) {
	      // Additional updates were enqueued by componentDidUpdate handlers or
	      // similar; before our own UPDATE_QUEUEING wrapper closes, we want to run
	      // these new updates so that if A's componentDidUpdate calls setState on
	      // B, B will update before the callback A's updater provided when calling
	      // setState.
	      dirtyComponents.splice(0, this.dirtyComponentsLength);
	      flushBatchedUpdates();
	    } else {
	      dirtyComponents.length = 0;
	    }
	  }
	};

	var UPDATE_QUEUEING = {
	  initialize: function() {
	    this.callbackQueue.reset();
	  },
	  close: function() {
	    this.callbackQueue.notifyAll();
	  }
	};

	var TRANSACTION_WRAPPERS = [NESTED_UPDATES, UPDATE_QUEUEING];

	function ReactUpdatesFlushTransaction() {
	  this.reinitializeTransaction();
	  this.dirtyComponentsLength = null;
	  this.callbackQueue = CallbackQueue.getPooled();
	  this.reconcileTransaction =
	    ReactUpdates.ReactReconcileTransaction.getPooled();
	}

	assign(
	  ReactUpdatesFlushTransaction.prototype,
	  Transaction.Mixin, {
	  getTransactionWrappers: function() {
	    return TRANSACTION_WRAPPERS;
	  },

	  destructor: function() {
	    this.dirtyComponentsLength = null;
	    CallbackQueue.release(this.callbackQueue);
	    this.callbackQueue = null;
	    ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
	    this.reconcileTransaction = null;
	  },

	  perform: function(method, scope, a) {
	    // Essentially calls `this.reconcileTransaction.perform(method, scope, a)`
	    // with this transaction's wrappers around it.
	    return Transaction.Mixin.perform.call(
	      this,
	      this.reconcileTransaction.perform,
	      this.reconcileTransaction,
	      method,
	      scope,
	      a
	    );
	  }
	});

	PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);

	function batchedUpdates(callback, a, b) {
	  ensureInjected();
	  batchingStrategy.batchedUpdates(callback, a, b);
	}

	/**
	 * Array comparator for ReactComponents by owner depth
	 *
	 * @param {ReactComponent} c1 first component you're comparing
	 * @param {ReactComponent} c2 second component you're comparing
	 * @return {number} Return value usable by Array.prototype.sort().
	 */
	function mountDepthComparator(c1, c2) {
	  return c1._mountDepth - c2._mountDepth;
	}

	function runBatchedUpdates(transaction) {
	  var len = transaction.dirtyComponentsLength;
	  ("production" !== (undefined) ? invariant(
	    len === dirtyComponents.length,
	    'Expected flush transaction\'s stored dirty-components length (%s) to ' +
	    'match dirty-components array length (%s).',
	    len,
	    dirtyComponents.length
	  ) : invariant(len === dirtyComponents.length));

	  // Since reconciling a component higher in the owner hierarchy usually (not
	  // always -- see shouldComponentUpdate()) will reconcile children, reconcile
	  // them before their children by sorting the array.
	  dirtyComponents.sort(mountDepthComparator);

	  for (var i = 0; i < len; i++) {
	    // If a component is unmounted before pending changes apply, ignore them
	    // TODO: Queue unmounts in the same list to avoid this happening at all
	    var component = dirtyComponents[i];
	    if (component.isMounted()) {
	      // If performUpdateIfNecessary happens to enqueue any new updates, we
	      // shouldn't execute the callbacks until the next render happens, so
	      // stash the callbacks first
	      var callbacks = component._pendingCallbacks;
	      component._pendingCallbacks = null;
	      component.performUpdateIfNecessary(transaction.reconcileTransaction);

	      if (callbacks) {
	        for (var j = 0; j < callbacks.length; j++) {
	          transaction.callbackQueue.enqueue(
	            callbacks[j],
	            component
	          );
	        }
	      }
	    }
	  }
	}

	var flushBatchedUpdates = ReactPerf.measure(
	  'ReactUpdates',
	  'flushBatchedUpdates',
	  function() {
	    // ReactUpdatesFlushTransaction's wrappers will clear the dirtyComponents
	    // array and perform any updates enqueued by mount-ready handlers (i.e.,
	    // componentDidUpdate) but we need to check here too in order to catch
	    // updates enqueued by setState callbacks and asap calls.
	    while (dirtyComponents.length || asapEnqueued) {
	      if (dirtyComponents.length) {
	        var transaction = ReactUpdatesFlushTransaction.getPooled();
	        transaction.perform(runBatchedUpdates, null, transaction);
	        ReactUpdatesFlushTransaction.release(transaction);
	      }

	      if (asapEnqueued) {
	        asapEnqueued = false;
	        var queue = asapCallbackQueue;
	        asapCallbackQueue = CallbackQueue.getPooled();
	        queue.notifyAll();
	        CallbackQueue.release(queue);
	      }
	    }
	  }
	);

	/**
	 * Mark a component as needing a rerender, adding an optional callback to a
	 * list of functions which will be executed once the rerender occurs.
	 */
	function enqueueUpdate(component, callback) {
	  ("production" !== (undefined) ? invariant(
	    !callback || typeof callback === "function",
	    'enqueueUpdate(...): You called `setProps`, `replaceProps`, ' +
	    '`setState`, `replaceState`, or `forceUpdate` with a callback that ' +
	    'isn\'t callable.'
	  ) : invariant(!callback || typeof callback === "function"));
	  ensureInjected();

	  // Various parts of our code (such as ReactCompositeComponent's
	  // _renderValidatedComponent) assume that calls to render aren't nested;
	  // verify that that's the case. (This is called by each top-level update
	  // function, like setProps, setState, forceUpdate, etc.; creation and
	  // destruction of top-level components is guarded in ReactMount.)
	  ("production" !== (undefined) ? warning(
	    ReactCurrentOwner.current == null,
	    'enqueueUpdate(): Render methods should be a pure function of props ' +
	    'and state; triggering nested component updates from render is not ' +
	    'allowed. If necessary, trigger nested updates in ' +
	    'componentDidUpdate.'
	  ) : null);

	  if (!batchingStrategy.isBatchingUpdates) {
	    batchingStrategy.batchedUpdates(enqueueUpdate, component, callback);
	    return;
	  }

	  dirtyComponents.push(component);

	  if (callback) {
	    if (component._pendingCallbacks) {
	      component._pendingCallbacks.push(callback);
	    } else {
	      component._pendingCallbacks = [callback];
	    }
	  }
	}

	/**
	 * Enqueue a callback to be run at the end of the current batching cycle. Throws
	 * if no updates are currently being performed.
	 */
	function asap(callback, context) {
	  ("production" !== (undefined) ? invariant(
	    batchingStrategy.isBatchingUpdates,
	    'ReactUpdates.asap: Can\'t enqueue an asap callback in a context where' +
	    'updates are not being batched.'
	  ) : invariant(batchingStrategy.isBatchingUpdates));
	  asapCallbackQueue.enqueue(callback, context);
	  asapEnqueued = true;
	}

	var ReactUpdatesInjection = {
	  injectReconcileTransaction: function(ReconcileTransaction) {
	    ("production" !== (undefined) ? invariant(
	      ReconcileTransaction,
	      'ReactUpdates: must provide a reconcile transaction class'
	    ) : invariant(ReconcileTransaction));
	    ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;
	  },

	  injectBatchingStrategy: function(_batchingStrategy) {
	    ("production" !== (undefined) ? invariant(
	      _batchingStrategy,
	      'ReactUpdates: must provide a batching strategy'
	    ) : invariant(_batchingStrategy));
	    ("production" !== (undefined) ? invariant(
	      typeof _batchingStrategy.batchedUpdates === 'function',
	      'ReactUpdates: must provide a batchedUpdates() function'
	    ) : invariant(typeof _batchingStrategy.batchedUpdates === 'function'));
	    ("production" !== (undefined) ? invariant(
	      typeof _batchingStrategy.isBatchingUpdates === 'boolean',
	      'ReactUpdates: must provide an isBatchingUpdates boolean attribute'
	    ) : invariant(typeof _batchingStrategy.isBatchingUpdates === 'boolean'));
	    batchingStrategy = _batchingStrategy;
	  }
	};

	var ReactUpdates = {
	  /**
	   * React references `ReactReconcileTransaction` using this property in order
	   * to allow dependency injection.
	   *
	   * @internal
	   */
	  ReactReconcileTransaction: null,

	  batchedUpdates: batchedUpdates,
	  enqueueUpdate: enqueueUpdate,
	  flushBatchedUpdates: flushBatchedUpdates,
	  injection: ReactUpdatesInjection,
	  asap: asap
	};

	module.exports = ReactUpdates;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule cx
	 */

	/**
	 * This function is used to mark string literals representing CSS class names
	 * so that they can be transformed statically. This allows for modularization
	 * and minification of CSS class names.
	 *
	 * In static_upstream, this function is actually implemented, but it should
	 * eventually be replaced with something more descriptive, and the transform
	 * that is used in the main stack should be ported for use elsewhere.
	 *
	 * @param string|object className to modularize, or an object of key/values.
	 *                      In the object case, the values are conditions that
	 *                      determine if the className keys should be included.
	 * @param [string ...]  Variable list of classNames in the string case.
	 * @return string       Renderable space-separated CSS className.
	 */
	function cx(classNames) {
	  if (typeof classNames == 'object') {
	    return Object.keys(classNames).filter(function(className) {
	      return classNames[className];
	    }).join(' ');
	  } else {
	    return Array.prototype.join.call(arguments, ' ');
	  }
	}

	module.exports = cx;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule update
	 */

	"use strict";

	var assign = __webpack_require__(79);
	var keyOf = __webpack_require__(56);
	var invariant = __webpack_require__(31);

	function shallowCopy(x) {
	  if (Array.isArray(x)) {
	    return x.concat();
	  } else if (x && typeof x === 'object') {
	    return assign(new x.constructor(), x);
	  } else {
	    return x;
	  }
	}

	var COMMAND_PUSH = keyOf({$push: null});
	var COMMAND_UNSHIFT = keyOf({$unshift: null});
	var COMMAND_SPLICE = keyOf({$splice: null});
	var COMMAND_SET = keyOf({$set: null});
	var COMMAND_MERGE = keyOf({$merge: null});
	var COMMAND_APPLY = keyOf({$apply: null});

	var ALL_COMMANDS_LIST = [
	  COMMAND_PUSH,
	  COMMAND_UNSHIFT,
	  COMMAND_SPLICE,
	  COMMAND_SET,
	  COMMAND_MERGE,
	  COMMAND_APPLY
	];

	var ALL_COMMANDS_SET = {};

	ALL_COMMANDS_LIST.forEach(function(command) {
	  ALL_COMMANDS_SET[command] = true;
	});

	function invariantArrayCase(value, spec, command) {
	  ("production" !== (undefined) ? invariant(
	    Array.isArray(value),
	    'update(): expected target of %s to be an array; got %s.',
	    command,
	    value
	  ) : invariant(Array.isArray(value)));
	  var specValue = spec[command];
	  ("production" !== (undefined) ? invariant(
	    Array.isArray(specValue),
	    'update(): expected spec of %s to be an array; got %s. ' +
	    'Did you forget to wrap your parameter in an array?',
	    command,
	    specValue
	  ) : invariant(Array.isArray(specValue)));
	}

	function update(value, spec) {
	  ("production" !== (undefined) ? invariant(
	    typeof spec === 'object',
	    'update(): You provided a key path to update() that did not contain one ' +
	    'of %s. Did you forget to include {%s: ...}?',
	    ALL_COMMANDS_LIST.join(', '),
	    COMMAND_SET
	  ) : invariant(typeof spec === 'object'));

	  if (spec.hasOwnProperty(COMMAND_SET)) {
	    ("production" !== (undefined) ? invariant(
	      Object.keys(spec).length === 1,
	      'Cannot have more than one key in an object with %s',
	      COMMAND_SET
	    ) : invariant(Object.keys(spec).length === 1));

	    return spec[COMMAND_SET];
	  }

	  var nextValue = shallowCopy(value);

	  if (spec.hasOwnProperty(COMMAND_MERGE)) {
	    var mergeObj = spec[COMMAND_MERGE];
	    ("production" !== (undefined) ? invariant(
	      mergeObj && typeof mergeObj === 'object',
	      'update(): %s expects a spec of type \'object\'; got %s',
	      COMMAND_MERGE,
	      mergeObj
	    ) : invariant(mergeObj && typeof mergeObj === 'object'));
	    ("production" !== (undefined) ? invariant(
	      nextValue && typeof nextValue === 'object',
	      'update(): %s expects a target of type \'object\'; got %s',
	      COMMAND_MERGE,
	      nextValue
	    ) : invariant(nextValue && typeof nextValue === 'object'));
	    assign(nextValue, spec[COMMAND_MERGE]);
	  }

	  if (spec.hasOwnProperty(COMMAND_PUSH)) {
	    invariantArrayCase(value, spec, COMMAND_PUSH);
	    spec[COMMAND_PUSH].forEach(function(item) {
	      nextValue.push(item);
	    });
	  }

	  if (spec.hasOwnProperty(COMMAND_UNSHIFT)) {
	    invariantArrayCase(value, spec, COMMAND_UNSHIFT);
	    spec[COMMAND_UNSHIFT].forEach(function(item) {
	      nextValue.unshift(item);
	    });
	  }

	  if (spec.hasOwnProperty(COMMAND_SPLICE)) {
	    ("production" !== (undefined) ? invariant(
	      Array.isArray(value),
	      'Expected %s target to be an array; got %s',
	      COMMAND_SPLICE,
	      value
	    ) : invariant(Array.isArray(value)));
	    ("production" !== (undefined) ? invariant(
	      Array.isArray(spec[COMMAND_SPLICE]),
	      'update(): expected spec of %s to be an array of arrays; got %s. ' +
	      'Did you forget to wrap your parameters in an array?',
	      COMMAND_SPLICE,
	      spec[COMMAND_SPLICE]
	    ) : invariant(Array.isArray(spec[COMMAND_SPLICE])));
	    spec[COMMAND_SPLICE].forEach(function(args) {
	      ("production" !== (undefined) ? invariant(
	        Array.isArray(args),
	        'update(): expected spec of %s to be an array of arrays; got %s. ' +
	        'Did you forget to wrap your parameters in an array?',
	        COMMAND_SPLICE,
	        spec[COMMAND_SPLICE]
	      ) : invariant(Array.isArray(args)));
	      nextValue.splice.apply(nextValue, args);
	    });
	  }

	  if (spec.hasOwnProperty(COMMAND_APPLY)) {
	    ("production" !== (undefined) ? invariant(
	      typeof spec[COMMAND_APPLY] === 'function',
	      'update(): expected spec of %s to be a function; got %s.',
	      COMMAND_APPLY,
	      spec[COMMAND_APPLY]
	    ) : invariant(typeof spec[COMMAND_APPLY] === 'function'));
	    nextValue = spec[COMMAND_APPLY](nextValue);
	  }

	  for (var k in spec) {
	    if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
	      nextValue[k] = update(value[k], spec[k]);
	    }
	  }

	  return nextValue;
	}

	module.exports = update;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultPerf
	 * @typechecks static-only
	 */

	"use strict";

	var DOMProperty = __webpack_require__(91);
	var ReactDefaultPerfAnalysis = __webpack_require__(92);
	var ReactMount = __webpack_require__(73);
	var ReactPerf = __webpack_require__(75);

	var performanceNow = __webpack_require__(93);

	function roundFloat(val) {
	  return Math.floor(val * 100) / 100;
	}

	function addValue(obj, key, val) {
	  obj[key] = (obj[key] || 0) + val;
	}

	var ReactDefaultPerf = {
	  _allMeasurements: [], // last item in the list is the current one
	  _mountStack: [0],
	  _injected: false,

	  start: function() {
	    if (!ReactDefaultPerf._injected) {
	      ReactPerf.injection.injectMeasure(ReactDefaultPerf.measure);
	    }

	    ReactDefaultPerf._allMeasurements.length = 0;
	    ReactPerf.enableMeasure = true;
	  },

	  stop: function() {
	    ReactPerf.enableMeasure = false;
	  },

	  getLastMeasurements: function() {
	    return ReactDefaultPerf._allMeasurements;
	  },

	  printExclusive: function(measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    var summary = ReactDefaultPerfAnalysis.getExclusiveSummary(measurements);
	    console.table(summary.map(function(item) {
	      return {
	        'Component class name': item.componentName,
	        'Total inclusive time (ms)': roundFloat(item.inclusive),
	        'Exclusive mount time (ms)': roundFloat(item.exclusive),
	        'Exclusive render time (ms)': roundFloat(item.render),
	        'Mount time per instance (ms)': roundFloat(item.exclusive / item.count),
	        'Render time per instance (ms)': roundFloat(item.render / item.count),
	        'Instances': item.count
	      };
	    }));
	    // TODO: ReactDefaultPerfAnalysis.getTotalTime() does not return the correct
	    // number.
	  },

	  printInclusive: function(measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements);
	    console.table(summary.map(function(item) {
	      return {
	        'Owner > component': item.componentName,
	        'Inclusive time (ms)': roundFloat(item.time),
	        'Instances': item.count
	      };
	    }));
	    console.log(
	      'Total time:',
	      ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms'
	    );
	  },

	  getMeasurementsSummaryMap: function(measurements) {
	    var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(
	      measurements,
	      true
	    );
	    return summary.map(function(item) {
	      return {
	        'Owner > component': item.componentName,
	        'Wasted time (ms)': item.time,
	        'Instances': item.count
	      };
	    });
	  },

	  printWasted: function(measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    console.table(ReactDefaultPerf.getMeasurementsSummaryMap(measurements));
	    console.log(
	      'Total time:',
	      ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms'
	    );
	  },

	  printDOM: function(measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    var summary = ReactDefaultPerfAnalysis.getDOMSummary(measurements);
	    console.table(summary.map(function(item) {
	      var result = {};
	      result[DOMProperty.ID_ATTRIBUTE_NAME] = item.id;
	      result['type'] = item.type;
	      result['args'] = JSON.stringify(item.args);
	      return result;
	    }));
	    console.log(
	      'Total time:',
	      ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms'
	    );
	  },

	  _recordWrite: function(id, fnName, totalTime, args) {
	    // TODO: totalTime isn't that useful since it doesn't count paints/reflows
	    var writes =
	      ReactDefaultPerf
	        ._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1]
	        .writes;
	    writes[id] = writes[id] || [];
	    writes[id].push({
	      type: fnName,
	      time: totalTime,
	      args: args
	    });
	  },

	  measure: function(moduleName, fnName, func) {
	    return function() {for (var args=[],$__0=0,$__1=arguments.length;$__0<$__1;$__0++) args.push(arguments[$__0]);
	      var totalTime;
	      var rv;
	      var start;

	      if (fnName === '_renderNewRootComponent' ||
	          fnName === 'flushBatchedUpdates') {
	        // A "measurement" is a set of metrics recorded for each flush. We want
	        // to group the metrics for a given flush together so we can look at the
	        // components that rendered and the DOM operations that actually
	        // happened to determine the amount of "wasted work" performed.
	        ReactDefaultPerf._allMeasurements.push({
	          exclusive: {},
	          inclusive: {},
	          render: {},
	          counts: {},
	          writes: {},
	          displayNames: {},
	          totalTime: 0
	        });
	        start = performanceNow();
	        rv = func.apply(this, args);
	        ReactDefaultPerf._allMeasurements[
	          ReactDefaultPerf._allMeasurements.length - 1
	        ].totalTime = performanceNow() - start;
	        return rv;
	      } else if (moduleName === 'ReactDOMIDOperations' ||
	        moduleName === 'ReactComponentBrowserEnvironment') {
	        start = performanceNow();
	        rv = func.apply(this, args);
	        totalTime = performanceNow() - start;

	        if (fnName === 'mountImageIntoNode') {
	          var mountID = ReactMount.getID(args[1]);
	          ReactDefaultPerf._recordWrite(mountID, fnName, totalTime, args[0]);
	        } else if (fnName === 'dangerouslyProcessChildrenUpdates') {
	          // special format
	          args[0].forEach(function(update) {
	            var writeArgs = {};
	            if (update.fromIndex !== null) {
	              writeArgs.fromIndex = update.fromIndex;
	            }
	            if (update.toIndex !== null) {
	              writeArgs.toIndex = update.toIndex;
	            }
	            if (update.textContent !== null) {
	              writeArgs.textContent = update.textContent;
	            }
	            if (update.markupIndex !== null) {
	              writeArgs.markup = args[1][update.markupIndex];
	            }
	            ReactDefaultPerf._recordWrite(
	              update.parentID,
	              update.type,
	              totalTime,
	              writeArgs
	            );
	          });
	        } else {
	          // basic format
	          ReactDefaultPerf._recordWrite(
	            args[0],
	            fnName,
	            totalTime,
	            Array.prototype.slice.call(args, 1)
	          );
	        }
	        return rv;
	      } else if (moduleName === 'ReactCompositeComponent' && (
	        fnName === 'mountComponent' ||
	        fnName === 'updateComponent' || // TODO: receiveComponent()?
	        fnName === '_renderValidatedComponent')) {

	        var rootNodeID = fnName === 'mountComponent' ?
	          args[0] :
	          this._rootNodeID;
	        var isRender = fnName === '_renderValidatedComponent';
	        var isMount = fnName === 'mountComponent';

	        var mountStack = ReactDefaultPerf._mountStack;
	        var entry = ReactDefaultPerf._allMeasurements[
	          ReactDefaultPerf._allMeasurements.length - 1
	        ];

	        if (isRender) {
	          addValue(entry.counts, rootNodeID, 1);
	        } else if (isMount) {
	          mountStack.push(0);
	        }

	        start = performanceNow();
	        rv = func.apply(this, args);
	        totalTime = performanceNow() - start;

	        if (isRender) {
	          addValue(entry.render, rootNodeID, totalTime);
	        } else if (isMount) {
	          var subMountTime = mountStack.pop();
	          mountStack[mountStack.length - 1] += totalTime;
	          addValue(entry.exclusive, rootNodeID, totalTime - subMountTime);
	          addValue(entry.inclusive, rootNodeID, totalTime);
	        } else {
	          addValue(entry.inclusive, rootNodeID, totalTime);
	        }

	        entry.displayNames[rootNodeID] = {
	          current: this.constructor.displayName,
	          owner: this._owner ? this._owner.constructor.displayName : '<root>'
	        };

	        return rv;
	      } else {
	        return func.apply(this, args);
	      }
	    };
	  }
	};

	module.exports = ReactDefaultPerf;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTestUtils
	 */

	"use strict";

	var EventConstants = __webpack_require__(94);
	var EventPluginHub = __webpack_require__(95);
	var EventPropagators = __webpack_require__(96);
	var React = __webpack_require__(40);
	var ReactElement = __webpack_require__(54);
	var ReactBrowserEventEmitter = __webpack_require__(97);
	var ReactMount = __webpack_require__(73);
	var ReactTextComponent = __webpack_require__(78);
	var ReactUpdates = __webpack_require__(48);
	var SyntheticEvent = __webpack_require__(98);

	var assign = __webpack_require__(79);

	var topLevelTypes = EventConstants.topLevelTypes;

	function Event(suffix) {}

	/**
	 * @class ReactTestUtils
	 */

	/**
	 * Todo: Support the entire DOM.scry query syntax. For now, these simple
	 * utilities will suffice for testing purposes.
	 * @lends ReactTestUtils
	 */
	var ReactTestUtils = {
	  renderIntoDocument: function(instance) {
	    var div = document.createElement('div');
	    // None of our tests actually require attaching the container to the
	    // DOM, and doing so creates a mess that we rely on test isolation to
	    // clean up, so we're going to stop honoring the name of this method
	    // (and probably rename it eventually) if no problems arise.
	    // document.documentElement.appendChild(div);
	    return React.render(instance, div);
	  },

	  isElement: function(element) {
	    return ReactElement.isValidElement(element);
	  },

	  isElementOfType: function(inst, convenienceConstructor) {
	    return (
	      ReactElement.isValidElement(inst) &&
	      inst.type === convenienceConstructor.type
	    );
	  },

	  isDOMComponent: function(inst) {
	    return !!(inst && inst.mountComponent && inst.tagName);
	  },

	  isDOMComponentElement: function(inst) {
	    return !!(inst &&
	              ReactElement.isValidElement(inst) &&
	              !!inst.tagName);
	  },

	  isCompositeComponent: function(inst) {
	    return typeof inst.render === 'function' &&
	           typeof inst.setState === 'function';
	  },

	  isCompositeComponentWithType: function(inst, type) {
	    return !!(ReactTestUtils.isCompositeComponent(inst) &&
	             (inst.constructor === type.type));
	  },

	  isCompositeComponentElement: function(inst) {
	    if (!ReactElement.isValidElement(inst)) {
	      return false;
	    }
	    // We check the prototype of the type that will get mounted, not the
	    // instance itself. This is a future proof way of duck typing.
	    var prototype = inst.type.prototype;
	    return (
	      typeof prototype.render === 'function' &&
	      typeof prototype.setState === 'function'
	    );
	  },

	  isCompositeComponentElementWithType: function(inst, type) {
	    return !!(ReactTestUtils.isCompositeComponentElement(inst) &&
	             (inst.constructor === type));
	  },

	  isTextComponent: function(inst) {
	    return inst instanceof ReactTextComponent.type;
	  },

	  findAllInRenderedTree: function(inst, test) {
	    if (!inst) {
	      return [];
	    }
	    var ret = test(inst) ? [inst] : [];
	    if (ReactTestUtils.isDOMComponent(inst)) {
	      var renderedChildren = inst._renderedChildren;
	      var key;
	      for (key in renderedChildren) {
	        if (!renderedChildren.hasOwnProperty(key)) {
	          continue;
	        }
	        ret = ret.concat(
	          ReactTestUtils.findAllInRenderedTree(renderedChildren[key], test)
	        );
	      }
	    } else if (ReactTestUtils.isCompositeComponent(inst)) {
	      ret = ret.concat(
	        ReactTestUtils.findAllInRenderedTree(inst._renderedComponent, test)
	      );
	    }
	    return ret;
	  },

	  /**
	   * Finds all instance of components in the rendered tree that are DOM
	   * components with the class name matching `className`.
	   * @return an array of all the matches.
	   */
	  scryRenderedDOMComponentsWithClass: function(root, className) {
	    return ReactTestUtils.findAllInRenderedTree(root, function(inst) {
	      var instClassName = inst.props.className;
	      return ReactTestUtils.isDOMComponent(inst) && (
	        instClassName &&
	        (' ' + instClassName + ' ').indexOf(' ' + className + ' ') !== -1
	      );
	    });
	  },

	  /**
	   * Like scryRenderedDOMComponentsWithClass but expects there to be one result,
	   * and returns that one result, or throws exception if there is any other
	   * number of matches besides one.
	   * @return {!ReactDOMComponent} The one match.
	   */
	  findRenderedDOMComponentWithClass: function(root, className) {
	    var all =
	      ReactTestUtils.scryRenderedDOMComponentsWithClass(root, className);
	    if (all.length !== 1) {
	      throw new Error('Did not find exactly one match for class:' + className);
	    }
	    return all[0];
	  },


	  /**
	   * Finds all instance of components in the rendered tree that are DOM
	   * components with the tag name matching `tagName`.
	   * @return an array of all the matches.
	   */
	  scryRenderedDOMComponentsWithTag: function(root, tagName) {
	    return ReactTestUtils.findAllInRenderedTree(root, function(inst) {
	      return ReactTestUtils.isDOMComponent(inst) &&
	            inst.tagName === tagName.toUpperCase();
	    });
	  },

	  /**
	   * Like scryRenderedDOMComponentsWithTag but expects there to be one result,
	   * and returns that one result, or throws exception if there is any other
	   * number of matches besides one.
	   * @return {!ReactDOMComponent} The one match.
	   */
	  findRenderedDOMComponentWithTag: function(root, tagName) {
	    var all = ReactTestUtils.scryRenderedDOMComponentsWithTag(root, tagName);
	    if (all.length !== 1) {
	      throw new Error('Did not find exactly one match for tag:' + tagName);
	    }
	    return all[0];
	  },


	  /**
	   * Finds all instances of components with type equal to `componentType`.
	   * @return an array of all the matches.
	   */
	  scryRenderedComponentsWithType: function(root, componentType) {
	    return ReactTestUtils.findAllInRenderedTree(root, function(inst) {
	      return ReactTestUtils.isCompositeComponentWithType(
	        inst,
	        componentType
	      );
	    });
	  },

	  /**
	   * Same as `scryRenderedComponentsWithType` but expects there to be one result
	   * and returns that one result, or throws exception if there is any other
	   * number of matches besides one.
	   * @return {!ReactComponent} The one match.
	   */
	  findRenderedComponentWithType: function(root, componentType) {
	    var all = ReactTestUtils.scryRenderedComponentsWithType(
	      root,
	      componentType
	    );
	    if (all.length !== 1) {
	      throw new Error(
	        'Did not find exactly one match for componentType:' + componentType
	      );
	    }
	    return all[0];
	  },

	  /**
	   * Pass a mocked component module to this method to augment it with
	   * useful methods that allow it to be used as a dummy React component.
	   * Instead of rendering as usual, the component will become a simple
	   * <div> containing any provided children.
	   *
	   * @param {object} module the mock function object exported from a
	   *                        module that defines the component to be mocked
	   * @param {?string} mockTagName optional dummy root tag name to return
	   *                              from render method (overrides
	   *                              module.mockTagName if provided)
	   * @return {object} the ReactTestUtils object (for chaining)
	   */
	  mockComponent: function(module, mockTagName) {
	    mockTagName = mockTagName || module.mockTagName || "div";

	    var ConvenienceConstructor = React.createClass({displayName: "ConvenienceConstructor",
	      render: function() {
	        return React.createElement(
	          mockTagName,
	          null,
	          this.props.children
	        );
	      }
	    });

	    module.mockImplementation(ConvenienceConstructor);

	    module.type = ConvenienceConstructor.type;
	    module.isReactLegacyFactory = true;

	    return this;
	  },

	  /**
	   * Simulates a top level event being dispatched from a raw event that occured
	   * on an `Element` node.
	   * @param topLevelType {Object} A type from `EventConstants.topLevelTypes`
	   * @param {!Element} node The dom to simulate an event occurring on.
	   * @param {?Event} fakeNativeEvent Fake native event to use in SyntheticEvent.
	   */
	  simulateNativeEventOnNode: function(topLevelType, node, fakeNativeEvent) {
	    fakeNativeEvent.target = node;
	    ReactBrowserEventEmitter.ReactEventListener.dispatchEvent(
	      topLevelType,
	      fakeNativeEvent
	    );
	  },

	  /**
	   * Simulates a top level event being dispatched from a raw event that occured
	   * on the `ReactDOMComponent` `comp`.
	   * @param topLevelType {Object} A type from `EventConstants.topLevelTypes`.
	   * @param comp {!ReactDOMComponent}
	   * @param {?Event} fakeNativeEvent Fake native event to use in SyntheticEvent.
	   */
	  simulateNativeEventOnDOMComponent: function(
	      topLevelType,
	      comp,
	      fakeNativeEvent) {
	    ReactTestUtils.simulateNativeEventOnNode(
	      topLevelType,
	      comp.getDOMNode(),
	      fakeNativeEvent
	    );
	  },

	  nativeTouchData: function(x, y) {
	    return {
	      touches: [
	        {pageX: x, pageY: y}
	      ]
	    };
	  },

	  Simulate: null,
	  SimulateNative: {}
	};

	/**
	 * Exports:
	 *
	 * - `ReactTestUtils.Simulate.click(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.Simulate.mouseMove(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.Simulate.change(Element/ReactDOMComponent)`
	 * - ... (All keys from event plugin `eventTypes` objects)
	 */
	function makeSimulator(eventType) {
	  return function(domComponentOrNode, eventData) {
	    var node;
	    if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
	      node = domComponentOrNode.getDOMNode();
	    } else if (domComponentOrNode.tagName) {
	      node = domComponentOrNode;
	    }

	    var fakeNativeEvent = new Event();
	    fakeNativeEvent.target = node;
	    // We don't use SyntheticEvent.getPooled in order to not have to worry about
	    // properly destroying any properties assigned from `eventData` upon release
	    var event = new SyntheticEvent(
	      ReactBrowserEventEmitter.eventNameDispatchConfigs[eventType],
	      ReactMount.getID(node),
	      fakeNativeEvent
	    );
	    assign(event, eventData);
	    EventPropagators.accumulateTwoPhaseDispatches(event);

	    ReactUpdates.batchedUpdates(function() {
	      EventPluginHub.enqueueEvents(event);
	      EventPluginHub.processEventQueue();
	    });
	  };
	}

	function buildSimulators() {
	  ReactTestUtils.Simulate = {};

	  var eventType;
	  for (eventType in ReactBrowserEventEmitter.eventNameDispatchConfigs) {
	    /**
	     * @param {!Element || ReactDOMComponent} domComponentOrNode
	     * @param {?object} eventData Fake event data to use in SyntheticEvent.
	     */
	    ReactTestUtils.Simulate[eventType] = makeSimulator(eventType);
	  }
	}

	// Rebuild ReactTestUtils.Simulate whenever event plugins are injected
	var oldInjectEventPluginOrder = EventPluginHub.injection.injectEventPluginOrder;
	EventPluginHub.injection.injectEventPluginOrder = function() {
	  oldInjectEventPluginOrder.apply(this, arguments);
	  buildSimulators();
	};
	var oldInjectEventPlugins = EventPluginHub.injection.injectEventPluginsByName;
	EventPluginHub.injection.injectEventPluginsByName = function() {
	  oldInjectEventPlugins.apply(this, arguments);
	  buildSimulators();
	};

	buildSimulators();

	/**
	 * Exports:
	 *
	 * - `ReactTestUtils.SimulateNative.click(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.SimulateNative.mouseMove(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.SimulateNative.mouseIn/ReactDOMComponent)`
	 * - `ReactTestUtils.SimulateNative.mouseOut(Element/ReactDOMComponent)`
	 * - ... (All keys from `EventConstants.topLevelTypes`)
	 *
	 * Note: Top level event types are a subset of the entire set of handler types
	 * (which include a broader set of "synthetic" events). For example, onDragDone
	 * is a synthetic event. Except when testing an event plugin or React's event
	 * handling code specifically, you probably want to use ReactTestUtils.Simulate
	 * to dispatch synthetic events.
	 */

	function makeNativeSimulator(eventType) {
	  return function(domComponentOrNode, nativeEventData) {
	    var fakeNativeEvent = new Event(eventType);
	    assign(fakeNativeEvent, nativeEventData);
	    if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
	      ReactTestUtils.simulateNativeEventOnDOMComponent(
	        eventType,
	        domComponentOrNode,
	        fakeNativeEvent
	      );
	    } else if (!!domComponentOrNode.tagName) {
	      // Will allow on actual dom nodes.
	      ReactTestUtils.simulateNativeEventOnNode(
	        eventType,
	        domComponentOrNode,
	        fakeNativeEvent
	      );
	    }
	  };
	}

	var eventType;
	for (eventType in topLevelTypes) {
	  // Event type is stored as 'topClick' - we transform that to 'click'
	  var convenienceName = eventType.indexOf('top') === 0 ?
	    eventType.charAt(3).toLowerCase() + eventType.substr(4) : eventType;
	  /**
	   * @param {!Element || ReactDOMComponent} domComponentOrNode
	   * @param {?Event} nativeEventData Fake native event to use in SyntheticEvent.
	   */
	  ReactTestUtils.SimulateNative[convenienceName] =
	    makeNativeSimulator(eventType);
	}

	module.exports = ReactTestUtils;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var URL, URL_PATTERN, defaults, urllite,
	    __hasProp = {}.hasOwnProperty,
	    __slice = [].slice;

	  URL_PATTERN = /^(?:(?:([^:\/?\#]+:)\/+|(\/\/))(?:([a-z0-9-\._~%]+)(?::([a-z0-9-\._~%]+))?@)?(([a-z0-9-\._~%!$&'()*+,;=]+)(?::([0-9]+))?)?)?([^?\#]*?)(\?[^\#]*)?(\#.*)?$/;

	  urllite = function(raw, opts) {
	    return urllite.URL.parse(raw, opts);
	  };

	  urllite.URL = URL = (function() {
	    function URL(props) {
	      var k, v;
	      for (k in props) {
	        if (!__hasProp.call(props, k)) continue;
	        v = props[k];
	        this[k] = v;
	      }
	    }

	    URL.parse = function(raw) {
	      var m, pathname, protocol;
	      m = raw.toString().match(URL_PATTERN);
	      pathname = m[8] || '';
	      protocol = m[1];
	      return urllite._createURL({
	        protocol: protocol,
	        username: m[3],
	        password: m[4],
	        hostname: m[6],
	        port: m[7],
	        pathname: protocol && pathname.charAt(0) !== '/' ? "/" + pathname : pathname,
	        search: m[9],
	        hash: m[10],
	        isSchemeRelative: m[2] != null
	      });
	    };

	    return URL;

	  })();

	  defaults = {
	    protocol: '',
	    username: '',
	    password: '',
	    host: '',
	    hostname: '',
	    port: '',
	    pathname: '',
	    search: '',
	    hash: '',
	    origin: '',
	    isSchemeRelative: false
	  };

	  urllite._createURL = function() {
	    var base, bases, k, props, v, _i, _len, _ref, _ref1;
	    bases = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    props = {};
	    for (_i = 0, _len = bases.length; _i < _len; _i++) {
	      base = bases[_i];
	      for (k in defaults) {
	        if (!__hasProp.call(defaults, k)) continue;
	        v = defaults[k];
	        props[k] = (_ref = (_ref1 = base[k]) != null ? _ref1 : props[k]) != null ? _ref : v;
	      }
	    }
	    props.host = props.hostname && props.port ? "" + props.hostname + ":" + props.port : props.hostname ? props.hostname : '';
	    props.origin = props.protocol ? "" + props.protocol + "//" + props.host : '';
	    props.isAbsolutePathRelative = !props.host && props.pathname.charAt(0) === '/';
	    props.isPathRelative = !props.host && props.pathname.charAt(0) !== '/';
	    props.isRelative = props.isSchemeRelative || props.isAbsolutePathRelative || props.isPathRelative;
	    props.isAbsolute = !props.isRelative;
	    return new urllite.URL(props);
	  };

	  module.exports = urllite;

	}).call(this);


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElement
	 */

	"use strict";

	var ReactContext = __webpack_require__(65);
	var ReactCurrentOwner = __webpack_require__(66);

	var warning = __webpack_require__(57);

	var RESERVED_PROPS = {
	  key: true,
	  ref: true
	};

	/**
	 * Warn for mutations.
	 *
	 * @internal
	 * @param {object} object
	 * @param {string} key
	 */
	function defineWarningProperty(object, key) {
	  Object.defineProperty(object, key, {

	    configurable: false,
	    enumerable: true,

	    get: function() {
	      if (!this._store) {
	        return null;
	      }
	      return this._store[key];
	    },

	    set: function(value) {
	      ("production" !== (undefined) ? warning(
	        false,
	        'Don\'t set the ' + key + ' property of the component. ' +
	        'Mutate the existing props object instead.'
	      ) : null);
	      this._store[key] = value;
	    }

	  });
	}

	/**
	 * This is updated to true if the membrane is successfully created.
	 */
	var useMutationMembrane = false;

	/**
	 * Warn for mutations.
	 *
	 * @internal
	 * @param {object} element
	 */
	function defineMutationMembrane(prototype) {
	  try {
	    var pseudoFrozenProperties = {
	      props: true
	    };
	    for (var key in pseudoFrozenProperties) {
	      defineWarningProperty(prototype, key);
	    }
	    useMutationMembrane = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}

	/**
	 * Base constructor for all React elements. This is only used to make this
	 * work with a dynamic instanceof check. Nothing should live on this prototype.
	 *
	 * @param {*} type
	 * @param {string|object} ref
	 * @param {*} key
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function(type, key, ref, owner, context, props) {
	  // Built-in properties that belong on the element
	  this.type = type;
	  this.key = key;
	  this.ref = ref;

	  // Record the component responsible for creating this element.
	  this._owner = owner;

	  // TODO: Deprecate withContext, and then the context becomes accessible
	  // through the owner.
	  this._context = context;

	  if ("production" !== (undefined)) {
	    // The validation flag and props are currently mutative. We put them on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    this._store = { validated: false, props: props };

	    // We're not allowed to set props directly on the object so we early
	    // return and rely on the prototype membrane to forward to the backing
	    // store.
	    if (useMutationMembrane) {
	      Object.freeze(this);
	      return;
	    }
	  }

	  this.props = props;
	};

	// We intentionally don't expose the function on the constructor property.
	// ReactElement should be indistinguishable from a plain object.
	ReactElement.prototype = {
	  _isReactElement: true
	};

	if ("production" !== (undefined)) {
	  defineMutationMembrane(ReactElement.prototype);
	}

	ReactElement.createElement = function(type, config, children) {
	  var propName;

	  // Reserved names are extracted
	  var props = {};

	  var key = null;
	  var ref = null;

	  if (config != null) {
	    ref = config.ref === undefined ? null : config.ref;
	    if ("production" !== (undefined)) {
	      ("production" !== (undefined) ? warning(
	        config.key !== null,
	        'createElement(...): Encountered component with a `key` of null. In ' +
	        'a future version, this will be treated as equivalent to the string ' +
	        '\'null\'; instead, provide an explicit key or use undefined.'
	      ) : null);
	    }
	    // TODO: Change this back to `config.key === undefined`
	    key = config.key == null ? null : '' + config.key;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) &&
	          !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (typeof props[propName] === 'undefined') {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }

	  return new ReactElement(
	    type,
	    key,
	    ref,
	    ReactCurrentOwner.current,
	    ReactContext.current,
	    props
	  );
	};

	ReactElement.createFactory = function(type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. <Foo />.type === Foo.type.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  factory.type = type;
	  return factory;
	};

	ReactElement.cloneAndReplaceProps = function(oldElement, newProps) {
	  var newElement = new ReactElement(
	    oldElement.type,
	    oldElement.key,
	    oldElement.ref,
	    oldElement._owner,
	    oldElement._context,
	    newProps
	  );

	  if ("production" !== (undefined)) {
	    // If the key on the original is valid, then the clone is valid
	    newElement._store.validated = oldElement._store.validated;
	  }
	  return newElement;
	};

	/**
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function(object) {
	  // ReactTestUtils is often used outside of beforeEach where as React is
	  // within it. This leads to two different instances of React on the same
	  // page. To identify a element from a different React instance we use
	  // a flag instead of an instanceof check.
	  var isElement = !!(object && object._isReactElement);
	  // if (isElement && !(object instanceof ReactElement)) {
	  // This is an indicator that you're using multiple versions of React at the
	  // same time. This will screw with ownership and stuff. Fix it, please.
	  // TODO: We could possibly warn here.
	  // }
	  return isElement;
	};

	module.exports = ReactElement;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTransferer
	 */

	"use strict";

	var assign = __webpack_require__(79);
	var emptyFunction = __webpack_require__(58);
	var invariant = __webpack_require__(31);
	var joinClasses = __webpack_require__(99);
	var warning = __webpack_require__(57);

	var didWarn = false;

	/**
	 * Creates a transfer strategy that will merge prop values using the supplied
	 * `mergeStrategy`. If a prop was previously unset, this just sets it.
	 *
	 * @param {function} mergeStrategy
	 * @return {function}
	 */
	function createTransferStrategy(mergeStrategy) {
	  return function(props, key, value) {
	    if (!props.hasOwnProperty(key)) {
	      props[key] = value;
	    } else {
	      props[key] = mergeStrategy(props[key], value);
	    }
	  };
	}

	var transferStrategyMerge = createTransferStrategy(function(a, b) {
	  // `merge` overrides the first object's (`props[key]` above) keys using the
	  // second object's (`value`) keys. An object's style's existing `propA` would
	  // get overridden. Flip the order here.
	  return assign({}, b, a);
	});

	/**
	 * Transfer strategies dictate how props are transferred by `transferPropsTo`.
	 * NOTE: if you add any more exceptions to this list you should be sure to
	 * update `cloneWithProps()` accordingly.
	 */
	var TransferStrategies = {
	  /**
	   * Never transfer `children`.
	   */
	  children: emptyFunction,
	  /**
	   * Transfer the `className` prop by merging them.
	   */
	  className: createTransferStrategy(joinClasses),
	  /**
	   * Transfer the `style` prop (which is an object) by merging them.
	   */
	  style: transferStrategyMerge
	};

	/**
	 * Mutates the first argument by transferring the properties from the second
	 * argument.
	 *
	 * @param {object} props
	 * @param {object} newProps
	 * @return {object}
	 */
	function transferInto(props, newProps) {
	  for (var thisKey in newProps) {
	    if (!newProps.hasOwnProperty(thisKey)) {
	      continue;
	    }

	    var transferStrategy = TransferStrategies[thisKey];

	    if (transferStrategy && TransferStrategies.hasOwnProperty(thisKey)) {
	      transferStrategy(props, thisKey, newProps[thisKey]);
	    } else if (!props.hasOwnProperty(thisKey)) {
	      props[thisKey] = newProps[thisKey];
	    }
	  }
	  return props;
	}

	/**
	 * ReactPropTransferer are capable of transferring props to another component
	 * using a `transferPropsTo` method.
	 *
	 * @class ReactPropTransferer
	 */
	var ReactPropTransferer = {

	  TransferStrategies: TransferStrategies,

	  /**
	   * Merge two props objects using TransferStrategies.
	   *
	   * @param {object} oldProps original props (they take precedence)
	   * @param {object} newProps new props to merge in
	   * @return {object} a new object containing both sets of props merged.
	   */
	  mergeProps: function(oldProps, newProps) {
	    return transferInto(assign({}, oldProps), newProps);
	  },

	  /**
	   * @lends {ReactPropTransferer.prototype}
	   */
	  Mixin: {

	    /**
	     * Transfer props from this component to a target component.
	     *
	     * Props that do not have an explicit transfer strategy will be transferred
	     * only if the target component does not already have the prop set.
	     *
	     * This is usually used to pass down props to a returned root component.
	     *
	     * @param {ReactElement} element Component receiving the properties.
	     * @return {ReactElement} The supplied `component`.
	     * @final
	     * @protected
	     */
	    transferPropsTo: function(element) {
	      ("production" !== (undefined) ? invariant(
	        element._owner === this,
	        '%s: You can\'t call transferPropsTo() on a component that you ' +
	        'don\'t own, %s. This usually means you are calling ' +
	        'transferPropsTo() on a component passed in as props or children.',
	        this.constructor.displayName,
	        typeof element.type === 'string' ?
	        element.type :
	        element.type.displayName
	      ) : invariant(element._owner === this));

	      if ("production" !== (undefined)) {
	        if (!didWarn) {
	          didWarn = true;
	          ("production" !== (undefined) ? warning(
	            false,
	            'transferPropsTo is deprecated. ' +
	            'See http://fb.me/react-transferpropsto for more information.'
	          ) : null);
	        }
	      }

	      // Because elements are immutable we have to merge into the existing
	      // props object rather than clone it.
	      transferInto(element.props, this.props);

	      return element;
	    }

	  }
	};

	module.exports = ReactPropTransferer;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyOf
	 */

	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without loosing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	var keyOf = function(oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};


	module.exports = keyOf;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule warning
	 */

	"use strict";

	var emptyFunction = __webpack_require__(58);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if ("production" !== (undefined)) {
	  warning = function(condition, format ) {for (var args=[],$__0=2,$__1=arguments.length;$__0<$__1;$__0++) args.push(arguments[$__0]);
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      console.warn('Warning: ' + format.replace(/%s/g, function()  {return args[argIndex++];}));
	    }
	  };
	}

	module.exports = warning;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule emptyFunction
	 */

	function makeEmptyFunction(arg) {
	  return function() {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	function emptyFunction() {}

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function() { return this; };
	emptyFunction.thatReturnsArgument = function(arg) { return arg; };

	module.exports = emptyFunction;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	exports.ActionMethods = __webpack_require__(102);

	exports.ListenerMethods = __webpack_require__(103);

	exports.PublisherMethods = __webpack_require__(104);

	exports.StoreMethods = __webpack_require__(105);

	exports.createAction = __webpack_require__(106);

	exports.createStore = __webpack_require__(107);

	exports.connect = __webpack_require__(108);

	exports.connectFilter = __webpack_require__(109);

	exports.ListenerMixin = __webpack_require__(110);

	exports.listenTo = __webpack_require__(111);

	exports.listenToMany = __webpack_require__(112);


	var maker = __webpack_require__(113).staticJoinCreator;

	exports.joinTrailing = exports.all = maker("last"); // Reflux.all alias for backward compatibility

	exports.joinLeading = maker("first");

	exports.joinStrict = maker("strict");

	exports.joinConcat = maker("all");

	var _ = __webpack_require__(114);

	exports.EventEmitter = _.EventEmitter;

	exports.Promise = _.Promise;

	/**
	 * Convenience function for creating a set of actions
	 *
	 * @param definitions the definitions for the actions to be created
	 * @returns an object with actions of corresponding action names
	 */
	exports.createActions = function(definitions) {
	    var actions = {};
	    for (var k in definitions){
	        if (definitions.hasOwnProperty(k)) {
	            var val = definitions[k],
	                actionName = _.isObject(val) ? k : val;

	            actions[actionName] = exports.createAction(val);
	        }
	    }
	    return actions;
	};

	/**
	 * Sets the eventmitter that Reflux uses
	 */
	exports.setEventEmitter = function(ctx) {
	    var _ = __webpack_require__(114);
	    exports.EventEmitter = _.EventEmitter = ctx;
	};


	/**
	 * Sets the Promise library that Reflux uses
	 */
	exports.setPromise = function(ctx) {
	    var _ = __webpack_require__(114);
	    exports.Promise = _.Promise = ctx;
	};


	/**
	 * Sets the Promise factory that creates new promises
	 * @param {Function} factory has the signature `function(resolver) { return [new Promise]; }`
	 */
	exports.setPromiseFactory = function(factory) {
	    var _ = __webpack_require__(114);
	    _.createPromise = factory;
	};


	/**
	 * Sets the method used for deferring actions and stores
	 */
	exports.nextTick = function(nextTick) {
	    var _ = __webpack_require__(114);
	    _.nextTick = nextTick;
	};

	/**
	 * Provides the set of created actions and stores for introspection
	 */
	exports.__keep = __webpack_require__(115);

	/**
	 * Warn if Function.prototype.bind not available
	 */
	if (!Function.prototype.bind) {
	  console.error(
	    'Function.prototype.bind not available. ' +
	    'ES5 shim required. ' +
	    'https://github.com/spoike/refluxjs#es5'
	  );
	}


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMPropertyOperations
	 * @typechecks static-only
	 */

	"use strict";

	var DOMProperty = __webpack_require__(91);

	var escapeTextForBrowser = __webpack_require__(116);
	var memoizeStringOnly = __webpack_require__(117);
	var warning = __webpack_require__(57);

	function shouldIgnoreValue(name, value) {
	  return value == null ||
	    (DOMProperty.hasBooleanValue[name] && !value) ||
	    (DOMProperty.hasNumericValue[name] && isNaN(value)) ||
	    (DOMProperty.hasPositiveNumericValue[name] && (value < 1)) ||
	    (DOMProperty.hasOverloadedBooleanValue[name] && value === false);
	}

	var processAttributeNameAndPrefix = memoizeStringOnly(function(name) {
	  return escapeTextForBrowser(name) + '="';
	});

	if ("production" !== (undefined)) {
	  var reactProps = {
	    children: true,
	    dangerouslySetInnerHTML: true,
	    key: true,
	    ref: true
	  };
	  var warnedProperties = {};

	  var warnUnknownProperty = function(name) {
	    if (reactProps.hasOwnProperty(name) && reactProps[name] ||
	        warnedProperties.hasOwnProperty(name) && warnedProperties[name]) {
	      return;
	    }

	    warnedProperties[name] = true;
	    var lowerCasedName = name.toLowerCase();

	    // data-* attributes should be lowercase; suggest the lowercase version
	    var standardName = (
	      DOMProperty.isCustomAttribute(lowerCasedName) ?
	        lowerCasedName :
	      DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName) ?
	        DOMProperty.getPossibleStandardName[lowerCasedName] :
	        null
	    );

	    // For now, only warn when we have a suggested correction. This prevents
	    // logging too much when using transferPropsTo.
	    ("production" !== (undefined) ? warning(
	      standardName == null,
	      'Unknown DOM property ' + name + '. Did you mean ' + standardName + '?'
	    ) : null);

	  };
	}

	/**
	 * Operations for dealing with DOM properties.
	 */
	var DOMPropertyOperations = {

	  /**
	   * Creates markup for the ID property.
	   *
	   * @param {string} id Unescaped ID.
	   * @return {string} Markup string.
	   */
	  createMarkupForID: function(id) {
	    return processAttributeNameAndPrefix(DOMProperty.ID_ATTRIBUTE_NAME) +
	      escapeTextForBrowser(id) + '"';
	  },

	  /**
	   * Creates markup for a property.
	   *
	   * @param {string} name
	   * @param {*} value
	   * @return {?string} Markup string, or null if the property was invalid.
	   */
	  createMarkupForProperty: function(name, value) {
	    if (DOMProperty.isStandardName.hasOwnProperty(name) &&
	        DOMProperty.isStandardName[name]) {
	      if (shouldIgnoreValue(name, value)) {
	        return '';
	      }
	      var attributeName = DOMProperty.getAttributeName[name];
	      if (DOMProperty.hasBooleanValue[name] ||
	          (DOMProperty.hasOverloadedBooleanValue[name] && value === true)) {
	        return escapeTextForBrowser(attributeName);
	      }
	      return processAttributeNameAndPrefix(attributeName) +
	        escapeTextForBrowser(value) + '"';
	    } else if (DOMProperty.isCustomAttribute(name)) {
	      if (value == null) {
	        return '';
	      }
	      return processAttributeNameAndPrefix(name) +
	        escapeTextForBrowser(value) + '"';
	    } else if ("production" !== (undefined)) {
	      warnUnknownProperty(name);
	    }
	    return null;
	  },

	  /**
	   * Sets the value for a property on a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   * @param {*} value
	   */
	  setValueForProperty: function(node, name, value) {
	    if (DOMProperty.isStandardName.hasOwnProperty(name) &&
	        DOMProperty.isStandardName[name]) {
	      var mutationMethod = DOMProperty.getMutationMethod[name];
	      if (mutationMethod) {
	        mutationMethod(node, value);
	      } else if (shouldIgnoreValue(name, value)) {
	        this.deleteValueForProperty(node, name);
	      } else if (DOMProperty.mustUseAttribute[name]) {
	        // `setAttribute` with objects becomes only `[object]` in IE8/9,
	        // ('' + value) makes it output the correct toString()-value.
	        node.setAttribute(DOMProperty.getAttributeName[name], '' + value);
	      } else {
	        var propName = DOMProperty.getPropertyName[name];
	        // Must explicitly cast values for HAS_SIDE_EFFECTS-properties to the
	        // property type before comparing; only `value` does and is string.
	        if (!DOMProperty.hasSideEffects[name] ||
	            ('' + node[propName]) !== ('' + value)) {
	          // Contrary to `setAttribute`, object properties are properly
	          // `toString`ed by IE8/9.
	          node[propName] = value;
	        }
	      }
	    } else if (DOMProperty.isCustomAttribute(name)) {
	      if (value == null) {
	        node.removeAttribute(name);
	      } else {
	        node.setAttribute(name, '' + value);
	      }
	    } else if ("production" !== (undefined)) {
	      warnUnknownProperty(name);
	    }
	  },

	  /**
	   * Deletes the value for a property on a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   */
	  deleteValueForProperty: function(node, name) {
	    if (DOMProperty.isStandardName.hasOwnProperty(name) &&
	        DOMProperty.isStandardName[name]) {
	      var mutationMethod = DOMProperty.getMutationMethod[name];
	      if (mutationMethod) {
	        mutationMethod(node, undefined);
	      } else if (DOMProperty.mustUseAttribute[name]) {
	        node.removeAttribute(DOMProperty.getAttributeName[name]);
	      } else {
	        var propName = DOMProperty.getPropertyName[name];
	        var defaultValue = DOMProperty.getDefaultValueForProperty(
	          node.nodeName,
	          propName
	        );
	        if (!DOMProperty.hasSideEffects[name] ||
	            ('' + node[propName]) !== defaultValue) {
	          node[propName] = defaultValue;
	        }
	      }
	    } else if (DOMProperty.isCustomAttribute(name)) {
	      node.removeAttribute(name);
	    } else if ("production" !== (undefined)) {
	      warnUnknownProperty(name);
	    }
	  }

	};

	module.exports = DOMPropertyOperations;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPluginUtils
	 */

	"use strict";

	var EventConstants = __webpack_require__(94);

	var invariant = __webpack_require__(31);

	/**
	 * Injected dependencies:
	 */

	/**
	 * - `Mount`: [required] Module that can convert between React dom IDs and
	 *   actual node references.
	 */
	var injection = {
	  Mount: null,
	  injectMount: function(InjectedMount) {
	    injection.Mount = InjectedMount;
	    if ("production" !== (undefined)) {
	      ("production" !== (undefined) ? invariant(
	        InjectedMount && InjectedMount.getNode,
	        'EventPluginUtils.injection.injectMount(...): Injected Mount module ' +
	        'is missing getNode.'
	      ) : invariant(InjectedMount && InjectedMount.getNode));
	    }
	  }
	};

	var topLevelTypes = EventConstants.topLevelTypes;

	function isEndish(topLevelType) {
	  return topLevelType === topLevelTypes.topMouseUp ||
	         topLevelType === topLevelTypes.topTouchEnd ||
	         topLevelType === topLevelTypes.topTouchCancel;
	}

	function isMoveish(topLevelType) {
	  return topLevelType === topLevelTypes.topMouseMove ||
	         topLevelType === topLevelTypes.topTouchMove;
	}
	function isStartish(topLevelType) {
	  return topLevelType === topLevelTypes.topMouseDown ||
	         topLevelType === topLevelTypes.topTouchStart;
	}


	var validateEventDispatches;
	if ("production" !== (undefined)) {
	  validateEventDispatches = function(event) {
	    var dispatchListeners = event._dispatchListeners;
	    var dispatchIDs = event._dispatchIDs;

	    var listenersIsArr = Array.isArray(dispatchListeners);
	    var idsIsArr = Array.isArray(dispatchIDs);
	    var IDsLen = idsIsArr ? dispatchIDs.length : dispatchIDs ? 1 : 0;
	    var listenersLen = listenersIsArr ?
	      dispatchListeners.length :
	      dispatchListeners ? 1 : 0;

	    ("production" !== (undefined) ? invariant(
	      idsIsArr === listenersIsArr && IDsLen === listenersLen,
	      'EventPluginUtils: Invalid `event`.'
	    ) : invariant(idsIsArr === listenersIsArr && IDsLen === listenersLen));
	  };
	}

	/**
	 * Invokes `cb(event, listener, id)`. Avoids using call if no scope is
	 * provided. The `(listener,id)` pair effectively forms the "dispatch" but are
	 * kept separate to conserve memory.
	 */
	function forEachEventDispatch(event, cb) {
	  var dispatchListeners = event._dispatchListeners;
	  var dispatchIDs = event._dispatchIDs;
	  if ("production" !== (undefined)) {
	    validateEventDispatches(event);
	  }
	  if (Array.isArray(dispatchListeners)) {
	    for (var i = 0; i < dispatchListeners.length; i++) {
	      if (event.isPropagationStopped()) {
	        break;
	      }
	      // Listeners and IDs are two parallel arrays that are always in sync.
	      cb(event, dispatchListeners[i], dispatchIDs[i]);
	    }
	  } else if (dispatchListeners) {
	    cb(event, dispatchListeners, dispatchIDs);
	  }
	}

	/**
	 * Default implementation of PluginModule.executeDispatch().
	 * @param {SyntheticEvent} SyntheticEvent to handle
	 * @param {function} Application-level callback
	 * @param {string} domID DOM id to pass to the callback.
	 */
	function executeDispatch(event, listener, domID) {
	  event.currentTarget = injection.Mount.getNode(domID);
	  var returnValue = listener(event, domID);
	  event.currentTarget = null;
	  return returnValue;
	}

	/**
	 * Standard/simple iteration through an event's collected dispatches.
	 */
	function executeDispatchesInOrder(event, executeDispatch) {
	  forEachEventDispatch(event, executeDispatch);
	  event._dispatchListeners = null;
	  event._dispatchIDs = null;
	}

	/**
	 * Standard/simple iteration through an event's collected dispatches, but stops
	 * at the first dispatch execution returning true, and returns that id.
	 *
	 * @return id of the first dispatch execution who's listener returns true, or
	 * null if no listener returned true.
	 */
	function executeDispatchesInOrderStopAtTrueImpl(event) {
	  var dispatchListeners = event._dispatchListeners;
	  var dispatchIDs = event._dispatchIDs;
	  if ("production" !== (undefined)) {
	    validateEventDispatches(event);
	  }
	  if (Array.isArray(dispatchListeners)) {
	    for (var i = 0; i < dispatchListeners.length; i++) {
	      if (event.isPropagationStopped()) {
	        break;
	      }
	      // Listeners and IDs are two parallel arrays that are always in sync.
	      if (dispatchListeners[i](event, dispatchIDs[i])) {
	        return dispatchIDs[i];
	      }
	    }
	  } else if (dispatchListeners) {
	    if (dispatchListeners(event, dispatchIDs)) {
	      return dispatchIDs;
	    }
	  }
	  return null;
	}

	/**
	 * @see executeDispatchesInOrderStopAtTrueImpl
	 */
	function executeDispatchesInOrderStopAtTrue(event) {
	  var ret = executeDispatchesInOrderStopAtTrueImpl(event);
	  event._dispatchIDs = null;
	  event._dispatchListeners = null;
	  return ret;
	}

	/**
	 * Execution of a "direct" dispatch - there must be at most one dispatch
	 * accumulated on the event or it is considered an error. It doesn't really make
	 * sense for an event with multiple dispatches (bubbled) to keep track of the
	 * return values at each dispatch execution, but it does tend to make sense when
	 * dealing with "direct" dispatches.
	 *
	 * @return The return value of executing the single dispatch.
	 */
	function executeDirectDispatch(event) {
	  if ("production" !== (undefined)) {
	    validateEventDispatches(event);
	  }
	  var dispatchListener = event._dispatchListeners;
	  var dispatchID = event._dispatchIDs;
	  ("production" !== (undefined) ? invariant(
	    !Array.isArray(dispatchListener),
	    'executeDirectDispatch(...): Invalid `event`.'
	  ) : invariant(!Array.isArray(dispatchListener)));
	  var res = dispatchListener ?
	    dispatchListener(event, dispatchID) :
	    null;
	  event._dispatchListeners = null;
	  event._dispatchIDs = null;
	  return res;
	}

	/**
	 * @param {SyntheticEvent} event
	 * @return {bool} True iff number of dispatches accumulated is greater than 0.
	 */
	function hasDispatches(event) {
	  return !!event._dispatchListeners;
	}

	/**
	 * General utilities that are useful in creating custom Event Plugins.
	 */
	var EventPluginUtils = {
	  isEndish: isEndish,
	  isMoveish: isMoveish,
	  isStartish: isStartish,

	  executeDirectDispatch: executeDirectDispatch,
	  executeDispatch: executeDispatch,
	  executeDispatchesInOrder: executeDispatchesInOrder,
	  executeDispatchesInOrderStopAtTrue: executeDispatchesInOrderStopAtTrue,
	  hasDispatches: hasDispatches,
	  injection: injection,
	  useTouchEvents: false
	};

	module.exports = EventPluginUtils;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactChildren
	 */

	"use strict";

	var PooledClass = __webpack_require__(89);

	var traverseAllChildren = __webpack_require__(118);
	var warning = __webpack_require__(57);

	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var threeArgumentPooler = PooledClass.threeArgumentPooler;

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.forEachFunction = forEachFunction;
	  this.forEachContext = forEachContext;
	}
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

	function forEachSingleChild(traverseContext, child, name, i) {
	  var forEachBookKeeping = traverseContext;
	  forEachBookKeeping.forEachFunction.call(
	    forEachBookKeeping.forEachContext, child, i);
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc.
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }

	  var traverseContext =
	    ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, mapFunction, mapContext) {
	  this.mapResult = mapResult;
	  this.mapFunction = mapFunction;
	  this.mapContext = mapContext;
	}
	PooledClass.addPoolingTo(MapBookKeeping, threeArgumentPooler);

	function mapSingleChildIntoContext(traverseContext, child, name, i) {
	  var mapBookKeeping = traverseContext;
	  var mapResult = mapBookKeeping.mapResult;

	  var keyUnique = !mapResult.hasOwnProperty(name);
	  ("production" !== (undefined) ? warning(
	    keyUnique,
	    'ReactChildren.map(...): Encountered two children with the same key, ' +
	    '`%s`. Child keys must be unique; when two children share a key, only ' +
	    'the first child will be used.',
	    name
	  ) : null);

	  if (keyUnique) {
	    var mappedChild =
	      mapBookKeeping.mapFunction.call(mapBookKeeping.mapContext, child, i);
	    mapResult[name] = mappedChild;
	  }
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * TODO: This may likely break any calls to `ReactChildren.map` that were
	 * previously relying on the fact that we guarded against null children.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} mapFunction.
	 * @param {*} mapContext Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }

	  var mapResult = {};
	  var traverseContext = MapBookKeeping.getPooled(mapResult, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	  return mapResult;
	}

	function forEachSingleChildDummy(traverseContext, child, name, i) {
	  return null;
	}

	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}

	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  count: countChildren
	};

	module.exports = ReactChildren;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponent
	 */

	"use strict";

	var ReactElement = __webpack_require__(54);
	var ReactOwner = __webpack_require__(119);
	var ReactUpdates = __webpack_require__(48);

	var assign = __webpack_require__(79);
	var invariant = __webpack_require__(31);
	var keyMirror = __webpack_require__(120);

	/**
	 * Every React component is in one of these life cycles.
	 */
	var ComponentLifeCycle = keyMirror({
	  /**
	   * Mounted components have a DOM node representation and are capable of
	   * receiving new props.
	   */
	  MOUNTED: null,
	  /**
	   * Unmounted components are inactive and cannot receive new props.
	   */
	  UNMOUNTED: null
	});

	var injected = false;

	/**
	 * Optionally injectable environment dependent cleanup hook. (server vs.
	 * browser etc). Example: A browser system caches DOM nodes based on component
	 * ID and must remove that cache entry when this instance is unmounted.
	 *
	 * @private
	 */
	var unmountIDFromEnvironment = null;

	/**
	 * The "image" of a component tree, is the platform specific (typically
	 * serialized) data that represents a tree of lower level UI building blocks.
	 * On the web, this "image" is HTML markup which describes a construction of
	 * low level `div` and `span` nodes. Other platforms may have different
	 * encoding of this "image". This must be injected.
	 *
	 * @private
	 */
	var mountImageIntoNode = null;

	/**
	 * Components are the basic units of composition in React.
	 *
	 * Every component accepts a set of keyed input parameters known as "props" that
	 * are initialized by the constructor. Once a component is mounted, the props
	 * can be mutated using `setProps` or `replaceProps`.
	 *
	 * Every component is capable of the following operations:
	 *
	 *   `mountComponent`
	 *     Initializes the component, renders markup, and registers event listeners.
	 *
	 *   `receiveComponent`
	 *     Updates the rendered DOM nodes to match the given component.
	 *
	 *   `unmountComponent`
	 *     Releases any resources allocated by this component.
	 *
	 * Components can also be "owned" by other components. Being owned by another
	 * component means being constructed by that component. This is different from
	 * being the child of a component, which means having a DOM representation that
	 * is a child of the DOM representation of that component.
	 *
	 * @class ReactComponent
	 */
	var ReactComponent = {

	  injection: {
	    injectEnvironment: function(ReactComponentEnvironment) {
	      ("production" !== (undefined) ? invariant(
	        !injected,
	        'ReactComponent: injectEnvironment() can only be called once.'
	      ) : invariant(!injected));
	      mountImageIntoNode = ReactComponentEnvironment.mountImageIntoNode;
	      unmountIDFromEnvironment =
	        ReactComponentEnvironment.unmountIDFromEnvironment;
	      ReactComponent.BackendIDOperations =
	        ReactComponentEnvironment.BackendIDOperations;
	      injected = true;
	    }
	  },

	  /**
	   * @internal
	   */
	  LifeCycle: ComponentLifeCycle,

	  /**
	   * Injected module that provides ability to mutate individual properties.
	   * Injected into the base class because many different subclasses need access
	   * to this.
	   *
	   * @internal
	   */
	  BackendIDOperations: null,

	  /**
	   * Base functionality for every ReactComponent constructor. Mixed into the
	   * `ReactComponent` prototype, but exposed statically for easy access.
	   *
	   * @lends {ReactComponent.prototype}
	   */
	  Mixin: {

	    /**
	     * Checks whether or not this component is mounted.
	     *
	     * @return {boolean} True if mounted, false otherwise.
	     * @final
	     * @protected
	     */
	    isMounted: function() {
	      return this._lifeCycleState === ComponentLifeCycle.MOUNTED;
	    },

	    /**
	     * Sets a subset of the props.
	     *
	     * @param {object} partialProps Subset of the next props.
	     * @param {?function} callback Called after props are updated.
	     * @final
	     * @public
	     */
	    setProps: function(partialProps, callback) {
	      // Merge with the pending element if it exists, otherwise with existing
	      // element props.
	      var element = this._pendingElement || this._currentElement;
	      this.replaceProps(
	        assign({}, element.props, partialProps),
	        callback
	      );
	    },

	    /**
	     * Replaces all of the props.
	     *
	     * @param {object} props New props.
	     * @param {?function} callback Called after props are updated.
	     * @final
	     * @public
	     */
	    replaceProps: function(props, callback) {
	      ("production" !== (undefined) ? invariant(
	        this.isMounted(),
	        'replaceProps(...): Can only update a mounted component.'
	      ) : invariant(this.isMounted()));
	      ("production" !== (undefined) ? invariant(
	        this._mountDepth === 0,
	        'replaceProps(...): You called `setProps` or `replaceProps` on a ' +
	        'component with a parent. This is an anti-pattern since props will ' +
	        'get reactively updated when rendered. Instead, change the owner\'s ' +
	        '`render` method to pass the correct value as props to the component ' +
	        'where it is created.'
	      ) : invariant(this._mountDepth === 0));
	      // This is a deoptimized path. We optimize for always having a element.
	      // This creates an extra internal element.
	      this._pendingElement = ReactElement.cloneAndReplaceProps(
	        this._pendingElement || this._currentElement,
	        props
	      );
	      ReactUpdates.enqueueUpdate(this, callback);
	    },

	    /**
	     * Schedule a partial update to the props. Only used for internal testing.
	     *
	     * @param {object} partialProps Subset of the next props.
	     * @param {?function} callback Called after props are updated.
	     * @final
	     * @internal
	     */
	    _setPropsInternal: function(partialProps, callback) {
	      // This is a deoptimized path. We optimize for always having a element.
	      // This creates an extra internal element.
	      var element = this._pendingElement || this._currentElement;
	      this._pendingElement = ReactElement.cloneAndReplaceProps(
	        element,
	        assign({}, element.props, partialProps)
	      );
	      ReactUpdates.enqueueUpdate(this, callback);
	    },

	    /**
	     * Base constructor for all React components.
	     *
	     * Subclasses that override this method should make sure to invoke
	     * `ReactComponent.Mixin.construct.call(this, ...)`.
	     *
	     * @param {ReactElement} element
	     * @internal
	     */
	    construct: function(element) {
	      // This is the public exposed props object after it has been processed
	      // with default props. The element's props represents the true internal
	      // state of the props.
	      this.props = element.props;
	      // Record the component responsible for creating this component.
	      // This is accessible through the element but we maintain an extra
	      // field for compatibility with devtools and as a way to make an
	      // incremental update. TODO: Consider deprecating this field.
	      this._owner = element._owner;

	      // All components start unmounted.
	      this._lifeCycleState = ComponentLifeCycle.UNMOUNTED;

	      // See ReactUpdates.
	      this._pendingCallbacks = null;

	      // We keep the old element and a reference to the pending element
	      // to track updates.
	      this._currentElement = element;
	      this._pendingElement = null;
	    },

	    /**
	     * Initializes the component, renders markup, and registers event listeners.
	     *
	     * NOTE: This does not insert any nodes into the DOM.
	     *
	     * Subclasses that override this method should make sure to invoke
	     * `ReactComponent.Mixin.mountComponent.call(this, ...)`.
	     *
	     * @param {string} rootID DOM ID of the root node.
	     * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	     * @param {number} mountDepth number of components in the owner hierarchy.
	     * @return {?string} Rendered markup to be inserted into the DOM.
	     * @internal
	     */
	    mountComponent: function(rootID, transaction, mountDepth) {
	      ("production" !== (undefined) ? invariant(
	        !this.isMounted(),
	        'mountComponent(%s, ...): Can only mount an unmounted component. ' +
	        'Make sure to avoid storing components between renders or reusing a ' +
	        'single component instance in multiple places.',
	        rootID
	      ) : invariant(!this.isMounted()));
	      var ref = this._currentElement.ref;
	      if (ref != null) {
	        var owner = this._currentElement._owner;
	        ReactOwner.addComponentAsRefTo(this, ref, owner);
	      }
	      this._rootNodeID = rootID;
	      this._lifeCycleState = ComponentLifeCycle.MOUNTED;
	      this._mountDepth = mountDepth;
	      // Effectively: return '';
	    },

	    /**
	     * Releases any resources allocated by `mountComponent`.
	     *
	     * NOTE: This does not remove any nodes from the DOM.
	     *
	     * Subclasses that override this method should make sure to invoke
	     * `ReactComponent.Mixin.unmountComponent.call(this)`.
	     *
	     * @internal
	     */
	    unmountComponent: function() {
	      ("production" !== (undefined) ? invariant(
	        this.isMounted(),
	        'unmountComponent(): Can only unmount a mounted component.'
	      ) : invariant(this.isMounted()));
	      var ref = this._currentElement.ref;
	      if (ref != null) {
	        ReactOwner.removeComponentAsRefFrom(this, ref, this._owner);
	      }
	      unmountIDFromEnvironment(this._rootNodeID);
	      this._rootNodeID = null;
	      this._lifeCycleState = ComponentLifeCycle.UNMOUNTED;
	    },

	    /**
	     * Given a new instance of this component, updates the rendered DOM nodes
	     * as if that instance was rendered instead.
	     *
	     * Subclasses that override this method should make sure to invoke
	     * `ReactComponent.Mixin.receiveComponent.call(this, ...)`.
	     *
	     * @param {object} nextComponent Next set of properties.
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     */
	    receiveComponent: function(nextElement, transaction) {
	      ("production" !== (undefined) ? invariant(
	        this.isMounted(),
	        'receiveComponent(...): Can only update a mounted component.'
	      ) : invariant(this.isMounted()));
	      this._pendingElement = nextElement;
	      this.performUpdateIfNecessary(transaction);
	    },

	    /**
	     * If `_pendingElement` is set, update the component.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     */
	    performUpdateIfNecessary: function(transaction) {
	      if (this._pendingElement == null) {
	        return;
	      }
	      var prevElement = this._currentElement;
	      var nextElement = this._pendingElement;
	      this._currentElement = nextElement;
	      this.props = nextElement.props;
	      this._owner = nextElement._owner;
	      this._pendingElement = null;
	      this.updateComponent(transaction, prevElement);
	    },

	    /**
	     * Updates the component's currently mounted representation.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @param {object} prevElement
	     * @internal
	     */
	    updateComponent: function(transaction, prevElement) {
	      var nextElement = this._currentElement;

	      // If either the owner or a `ref` has changed, make sure the newest owner
	      // has stored a reference to `this`, and the previous owner (if different)
	      // has forgotten the reference to `this`. We use the element instead
	      // of the public this.props because the post processing cannot determine
	      // a ref. The ref conceptually lives on the element.

	      // TODO: Should this even be possible? The owner cannot change because
	      // it's forbidden by shouldUpdateReactComponent. The ref can change
	      // if you swap the keys of but not the refs. Reconsider where this check
	      // is made. It probably belongs where the key checking and
	      // instantiateReactComponent is done.

	      if (nextElement._owner !== prevElement._owner ||
	          nextElement.ref !== prevElement.ref) {
	        if (prevElement.ref != null) {
	          ReactOwner.removeComponentAsRefFrom(
	            this, prevElement.ref, prevElement._owner
	          );
	        }
	        // Correct, even if the owner is the same, and only the ref has changed.
	        if (nextElement.ref != null) {
	          ReactOwner.addComponentAsRefTo(
	            this,
	            nextElement.ref,
	            nextElement._owner
	          );
	        }
	      }
	    },

	    /**
	     * Mounts this component and inserts it into the DOM.
	     *
	     * @param {string} rootID DOM ID of the root node.
	     * @param {DOMElement} container DOM element to mount into.
	     * @param {boolean} shouldReuseMarkup If true, do not insert markup
	     * @final
	     * @internal
	     * @see {ReactMount.render}
	     */
	    mountComponentIntoNode: function(rootID, container, shouldReuseMarkup) {
	      var transaction = ReactUpdates.ReactReconcileTransaction.getPooled();
	      transaction.perform(
	        this._mountComponentIntoNode,
	        this,
	        rootID,
	        container,
	        transaction,
	        shouldReuseMarkup
	      );
	      ReactUpdates.ReactReconcileTransaction.release(transaction);
	    },

	    /**
	     * @param {string} rootID DOM ID of the root node.
	     * @param {DOMElement} container DOM element to mount into.
	     * @param {ReactReconcileTransaction} transaction
	     * @param {boolean} shouldReuseMarkup If true, do not insert markup
	     * @final
	     * @private
	     */
	    _mountComponentIntoNode: function(
	        rootID,
	        container,
	        transaction,
	        shouldReuseMarkup) {
	      var markup = this.mountComponent(rootID, transaction, 0);
	      mountImageIntoNode(markup, container, shouldReuseMarkup);
	    },

	    /**
	     * Checks if this component is owned by the supplied `owner` component.
	     *
	     * @param {ReactComponent} owner Component to check.
	     * @return {boolean} True if `owners` owns this component.
	     * @final
	     * @internal
	     */
	    isOwnedBy: function(owner) {
	      return this._owner === owner;
	    },

	    /**
	     * Gets another component, that shares the same owner as this one, by ref.
	     *
	     * @param {string} ref of a sibling Component.
	     * @return {?ReactComponent} the actual sibling Component.
	     * @final
	     * @internal
	     */
	    getSiblingByRef: function(ref) {
	      var owner = this._owner;
	      if (!owner || !owner.refs) {
	        return null;
	      }
	      return owner.refs[ref];
	    }
	  }
	};

	module.exports = ReactComponent;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCompositeComponent
	 */

	"use strict";

	var ReactComponent = __webpack_require__(63);
	var ReactContext = __webpack_require__(65);
	var ReactCurrentOwner = __webpack_require__(66);
	var ReactElement = __webpack_require__(54);
	var ReactElementValidator = __webpack_require__(67);
	var ReactEmptyComponent = __webpack_require__(121);
	var ReactErrorUtils = __webpack_require__(122);
	var ReactLegacyElement = __webpack_require__(72);
	var ReactOwner = __webpack_require__(119);
	var ReactPerf = __webpack_require__(75);
	var ReactPropTransferer = __webpack_require__(55);
	var ReactPropTypeLocations = __webpack_require__(123);
	var ReactPropTypeLocationNames = __webpack_require__(124);
	var ReactUpdates = __webpack_require__(48);

	var assign = __webpack_require__(79);
	var instantiateReactComponent = __webpack_require__(125);
	var invariant = __webpack_require__(31);
	var keyMirror = __webpack_require__(120);
	var keyOf = __webpack_require__(56);
	var monitorCodeUse = __webpack_require__(126);
	var mapObject = __webpack_require__(127);
	var shouldUpdateReactComponent = __webpack_require__(128);
	var warning = __webpack_require__(57);

	var MIXINS_KEY = keyOf({mixins: null});

	/**
	 * Policies that describe methods in `ReactCompositeComponentInterface`.
	 */
	var SpecPolicy = keyMirror({
	  /**
	   * These methods may be defined only once by the class specification or mixin.
	   */
	  DEFINE_ONCE: null,
	  /**
	   * These methods may be defined by both the class specification and mixins.
	   * Subsequent definitions will be chained. These methods must return void.
	   */
	  DEFINE_MANY: null,
	  /**
	   * These methods are overriding the base ReactCompositeComponent class.
	   */
	  OVERRIDE_BASE: null,
	  /**
	   * These methods are similar to DEFINE_MANY, except we assume they return
	   * objects. We try to merge the keys of the return values of all the mixed in
	   * functions. If there is a key conflict we throw.
	   */
	  DEFINE_MANY_MERGED: null
	});


	var injectedMixins = [];

	/**
	 * Composite components are higher-level components that compose other composite
	 * or native components.
	 *
	 * To create a new type of `ReactCompositeComponent`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactCompositeComponentInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will available on the prototype.
	 *
	 * @interface ReactCompositeComponentInterface
	 * @internal
	 */
	var ReactCompositeComponentInterface = {

	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: SpecPolicy.DEFINE_MANY,

	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: SpecPolicy.DEFINE_MANY,

	  // ==== Definition methods ====

	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @nosideeffects
	   * @required
	   */
	  render: SpecPolicy.DEFINE_ONCE,



	  // ==== Delegate methods ====

	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,

	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: SpecPolicy.DEFINE_MANY,



	  // ==== Advanced methods ====

	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: SpecPolicy.OVERRIDE_BASE

	};

	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function(Constructor, displayName) {
	    Constructor.displayName = displayName;
	  },
	  mixins: function(Constructor, mixins) {
	    if (mixins) {
	      for (var i = 0; i < mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function(Constructor, childContextTypes) {
	    validateTypeDef(
	      Constructor,
	      childContextTypes,
	      ReactPropTypeLocations.childContext
	    );
	    Constructor.childContextTypes = assign(
	      {},
	      Constructor.childContextTypes,
	      childContextTypes
	    );
	  },
	  contextTypes: function(Constructor, contextTypes) {
	    validateTypeDef(
	      Constructor,
	      contextTypes,
	      ReactPropTypeLocations.context
	    );
	    Constructor.contextTypes = assign(
	      {},
	      Constructor.contextTypes,
	      contextTypes
	    );
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function(Constructor, getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(
	        Constructor.getDefaultProps,
	        getDefaultProps
	      );
	    } else {
	      Constructor.getDefaultProps = getDefaultProps;
	    }
	  },
	  propTypes: function(Constructor, propTypes) {
	    validateTypeDef(
	      Constructor,
	      propTypes,
	      ReactPropTypeLocations.prop
	    );
	    Constructor.propTypes = assign(
	      {},
	      Constructor.propTypes,
	      propTypes
	    );
	  },
	  statics: function(Constructor, statics) {
	    mixStaticSpecIntoComponent(Constructor, statics);
	  }
	};

	function getDeclarationErrorAddendum(component) {
	  var owner = component._owner || null;
	  if (owner && owner.constructor && owner.constructor.displayName) {
	    return ' Check the render method of `' + owner.constructor.displayName +
	      '`.';
	  }
	  return '';
	}

	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      ("production" !== (undefined) ? invariant(
	        typeof typeDef[propName] == 'function',
	        '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	        'React.PropTypes.',
	        Constructor.displayName || 'ReactCompositeComponent',
	        ReactPropTypeLocationNames[location],
	        propName
	      ) : invariant(typeof typeDef[propName] == 'function'));
	    }
	  }
	}

	function validateMethodOverride(proto, name) {
	  var specPolicy = ReactCompositeComponentInterface.hasOwnProperty(name) ?
	    ReactCompositeComponentInterface[name] :
	    null;

	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactCompositeComponentMixin.hasOwnProperty(name)) {
	    ("production" !== (undefined) ? invariant(
	      specPolicy === SpecPolicy.OVERRIDE_BASE,
	      'ReactCompositeComponentInterface: You are attempting to override ' +
	      '`%s` from your class specification. Ensure that your method names ' +
	      'do not overlap with React methods.',
	      name
	    ) : invariant(specPolicy === SpecPolicy.OVERRIDE_BASE));
	  }

	  // Disallow defining methods more than once unless explicitly allowed.
	  if (proto.hasOwnProperty(name)) {
	    ("production" !== (undefined) ? invariant(
	      specPolicy === SpecPolicy.DEFINE_MANY ||
	      specPolicy === SpecPolicy.DEFINE_MANY_MERGED,
	      'ReactCompositeComponentInterface: You are attempting to define ' +
	      '`%s` on your component more than once. This conflict may be due ' +
	      'to a mixin.',
	      name
	    ) : invariant(specPolicy === SpecPolicy.DEFINE_MANY ||
	    specPolicy === SpecPolicy.DEFINE_MANY_MERGED));
	  }
	}

	function validateLifeCycleOnReplaceState(instance) {
	  var compositeLifeCycleState = instance._compositeLifeCycleState;
	  ("production" !== (undefined) ? invariant(
	    instance.isMounted() ||
	      compositeLifeCycleState === CompositeLifeCycle.MOUNTING,
	    'replaceState(...): Can only update a mounted or mounting component.'
	  ) : invariant(instance.isMounted() ||
	    compositeLifeCycleState === CompositeLifeCycle.MOUNTING));
	  ("production" !== (undefined) ? invariant(
	    ReactCurrentOwner.current == null,
	    'replaceState(...): Cannot update during an existing state transition ' +
	    '(such as within `render`). Render methods should be a pure function ' +
	    'of props and state.'
	  ) : invariant(ReactCurrentOwner.current == null));
	  ("production" !== (undefined) ? invariant(compositeLifeCycleState !== CompositeLifeCycle.UNMOUNTING,
	    'replaceState(...): Cannot update while unmounting component. This ' +
	    'usually means you called setState() on an unmounted component.'
	  ) : invariant(compositeLifeCycleState !== CompositeLifeCycle.UNMOUNTING));
	}

	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building `ReactCompositeComponent` classses.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    return;
	  }

	  ("production" !== (undefined) ? invariant(
	    !ReactLegacyElement.isValidFactory(spec),
	    'ReactCompositeComponent: You\'re attempting to ' +
	    'use a component class as a mixin. Instead, just use a regular object.'
	  ) : invariant(!ReactLegacyElement.isValidFactory(spec)));
	  ("production" !== (undefined) ? invariant(
	    !ReactElement.isValidElement(spec),
	    'ReactCompositeComponent: You\'re attempting to ' +
	    'use a component as a mixin. Instead, just use a regular object.'
	  ) : invariant(!ReactElement.isValidElement(spec)));

	  var proto = Constructor.prototype;

	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }

	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }

	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above
	      continue;
	    }

	    var property = spec[name];
	    validateMethodOverride(proto, name);

	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactCompositeComponent methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isCompositeComponentMethod =
	        ReactCompositeComponentInterface.hasOwnProperty(name);
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      var markedDontBind = property && property.__reactDontBind;
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind =
	        isFunction &&
	        !isCompositeComponentMethod &&
	        !isAlreadyDefined &&
	        !markedDontBind;

	      if (shouldAutoBind) {
	        if (!proto.__reactAutoBindMap) {
	          proto.__reactAutoBindMap = {};
	        }
	        proto.__reactAutoBindMap[name] = property;
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactCompositeComponentInterface[name];

	          // These cases should already be caught by validateMethodOverride
	          ("production" !== (undefined) ? invariant(
	            isCompositeComponentMethod && (
	              specPolicy === SpecPolicy.DEFINE_MANY_MERGED ||
	              specPolicy === SpecPolicy.DEFINE_MANY
	            ),
	            'ReactCompositeComponent: Unexpected spec policy %s for key %s ' +
	            'when mixing in component specs.',
	            specPolicy,
	            name
	          ) : invariant(isCompositeComponentMethod && (
	            specPolicy === SpecPolicy.DEFINE_MANY_MERGED ||
	            specPolicy === SpecPolicy.DEFINE_MANY
	          )));

	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          if ("production" !== (undefined)) {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}

	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }

	    var isReserved = name in RESERVED_SPEC_KEYS;
	    ("production" !== (undefined) ? invariant(
	      !isReserved,
	      'ReactCompositeComponent: You are attempting to define a reserved ' +
	      'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	      'as an instance property instead; it will still be accessible on the ' +
	      'constructor.',
	      name
	    ) : invariant(!isReserved));

	    var isInherited = name in Constructor;
	    ("production" !== (undefined) ? invariant(
	      !isInherited,
	      'ReactCompositeComponent: You are attempting to define ' +
	      '`%s` on your component more than once. This conflict may be ' +
	      'due to a mixin.',
	      name
	    ) : invariant(!isInherited));
	    Constructor[name] = property;
	  }
	}

	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeObjectsWithNoDuplicateKeys(one, two) {
	  ("production" !== (undefined) ? invariant(
	    one && two && typeof one === 'object' && typeof two === 'object',
	    'mergeObjectsWithNoDuplicateKeys(): Cannot merge non-objects'
	  ) : invariant(one && two && typeof one === 'object' && typeof two === 'object'));

	  mapObject(two, function(value, key) {
	    ("production" !== (undefined) ? invariant(
	      one[key] === undefined,
	      'mergeObjectsWithNoDuplicateKeys(): ' +
	      'Tried to merge two objects with the same key: `%s`. This conflict ' +
	      'may be due to a mixin; in particular, this may be caused by two ' +
	      'getInitialState() or getDefaultProps() methods returning objects ' +
	      'with clashing keys.',
	      key
	    ) : invariant(one[key] === undefined));
	    one[key] = value;
	  });
	  return one;
	}

	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    return mergeObjectsWithNoDuplicateKeys(a, b);
	  };
	}

	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}

	/**
	 * `ReactCompositeComponent` maintains an auxiliary life cycle state in
	 * `this._compositeLifeCycleState` (which can be null).
	 *
	 * This is different from the life cycle state maintained by `ReactComponent` in
	 * `this._lifeCycleState`. The following diagram shows how the states overlap in
	 * time. There are times when the CompositeLifeCycle is null - at those times it
	 * is only meaningful to look at ComponentLifeCycle alone.
	 *
	 * Top Row: ReactComponent.ComponentLifeCycle
	 * Low Row: ReactComponent.CompositeLifeCycle
	 *
	 * +-------+---------------------------------+--------+
	 * |  UN   |             MOUNTED             |   UN   |
	 * |MOUNTED|                                 | MOUNTED|
	 * +-------+---------------------------------+--------+
	 * |       ^--------+   +-------+   +--------^        |
	 * |       |        |   |       |   |        |        |
	 * |    0--|MOUNTING|-0-|RECEIVE|-0-|   UN   |--->0   |
	 * |       |        |   |PROPS  |   |MOUNTING|        |
	 * |       |        |   |       |   |        |        |
	 * |       |        |   |       |   |        |        |
	 * |       +--------+   +-------+   +--------+        |
	 * |       |                                 |        |
	 * +-------+---------------------------------+--------+
	 */
	var CompositeLifeCycle = keyMirror({
	  /**
	   * Components in the process of being mounted respond to state changes
	   * differently.
	   */
	  MOUNTING: null,
	  /**
	   * Components in the process of being unmounted are guarded against state
	   * changes.
	   */
	  UNMOUNTING: null,
	  /**
	   * Components that are mounted and receiving new props respond to state
	   * changes differently.
	   */
	  RECEIVING_PROPS: null
	});

	/**
	 * @lends {ReactCompositeComponent.prototype}
	 */
	var ReactCompositeComponentMixin = {

	  /**
	   * Base constructor for all composite component.
	   *
	   * @param {ReactElement} element
	   * @final
	   * @internal
	   */
	  construct: function(element) {
	    // Children can be either an array or more than one argument
	    ReactComponent.Mixin.construct.apply(this, arguments);
	    ReactOwner.Mixin.construct.apply(this, arguments);

	    this.state = null;
	    this._pendingState = null;

	    // This is the public post-processed context. The real context and pending
	    // context lives on the element.
	    this.context = null;

	    this._compositeLifeCycleState = null;
	  },

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function() {
	    return ReactComponent.Mixin.isMounted.call(this) &&
	      this._compositeLifeCycleState !== CompositeLifeCycle.MOUNTING;
	  },

	  /**
	   * Initializes the component, renders markup, and registers event listeners.
	   *
	   * @param {string} rootID DOM ID of the root node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {number} mountDepth number of components in the owner hierarchy
	   * @return {?string} Rendered markup to be inserted into the DOM.
	   * @final
	   * @internal
	   */
	  mountComponent: ReactPerf.measure(
	    'ReactCompositeComponent',
	    'mountComponent',
	    function(rootID, transaction, mountDepth) {
	      ReactComponent.Mixin.mountComponent.call(
	        this,
	        rootID,
	        transaction,
	        mountDepth
	      );
	      this._compositeLifeCycleState = CompositeLifeCycle.MOUNTING;

	      if (this.__reactAutoBindMap) {
	        this._bindAutoBindMethods();
	      }

	      this.context = this._processContext(this._currentElement._context);
	      this.props = this._processProps(this.props);

	      this.state = this.getInitialState ? this.getInitialState() : null;
	      ("production" !== (undefined) ? invariant(
	        typeof this.state === 'object' && !Array.isArray(this.state),
	        '%s.getInitialState(): must return an object or null',
	        this.constructor.displayName || 'ReactCompositeComponent'
	      ) : invariant(typeof this.state === 'object' && !Array.isArray(this.state)));

	      this._pendingState = null;
	      this._pendingForceUpdate = false;

	      if (this.componentWillMount) {
	        this.componentWillMount();
	        // When mounting, calls to `setState` by `componentWillMount` will set
	        // `this._pendingState` without triggering a re-render.
	        if (this._pendingState) {
	          this.state = this._pendingState;
	          this._pendingState = null;
	        }
	      }

	      this._renderedComponent = instantiateReactComponent(
	        this._renderValidatedComponent(),
	        this._currentElement.type // The wrapping type
	      );

	      // Done with mounting, `setState` will now trigger UI changes.
	      this._compositeLifeCycleState = null;
	      var markup = this._renderedComponent.mountComponent(
	        rootID,
	        transaction,
	        mountDepth + 1
	      );
	      if (this.componentDidMount) {
	        transaction.getReactMountReady().enqueue(this.componentDidMount, this);
	      }
	      return markup;
	    }
	  ),

	  /**
	   * Releases any resources allocated by `mountComponent`.
	   *
	   * @final
	   * @internal
	   */
	  unmountComponent: function() {
	    this._compositeLifeCycleState = CompositeLifeCycle.UNMOUNTING;
	    if (this.componentWillUnmount) {
	      this.componentWillUnmount();
	    }
	    this._compositeLifeCycleState = null;

	    this._renderedComponent.unmountComponent();
	    this._renderedComponent = null;

	    ReactComponent.Mixin.unmountComponent.call(this);

	    // Some existing components rely on this.props even after they've been
	    // destroyed (in event handlers).
	    // TODO: this.props = null;
	    // TODO: this.state = null;
	  },

	  /**
	   * Sets a subset of the state. Always use this or `replaceState` to mutate
	   * state. You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * There is no guarantee that calls to `setState` will run synchronously,
	   * as they may eventually be batched together.  You can provide an optional
	   * callback that will be executed when the call to setState is actually
	   * completed.
	   *
	   * @param {object} partialState Next partial state to be merged with state.
	   * @param {?function} callback Called after state is updated.
	   * @final
	   * @protected
	   */
	  setState: function(partialState, callback) {
	    ("production" !== (undefined) ? invariant(
	      typeof partialState === 'object' || partialState == null,
	      'setState(...): takes an object of state variables to update.'
	    ) : invariant(typeof partialState === 'object' || partialState == null));
	    if ("production" !== (undefined)){
	      ("production" !== (undefined) ? warning(
	        partialState != null,
	        'setState(...): You passed an undefined or null state object; ' +
	        'instead, use forceUpdate().'
	      ) : null);
	    }
	    // Merge with `_pendingState` if it exists, otherwise with existing state.
	    this.replaceState(
	      assign({}, this._pendingState || this.state, partialState),
	      callback
	    );
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {object} completeState Next state.
	   * @param {?function} callback Called after state is updated.
	   * @final
	   * @protected
	   */
	  replaceState: function(completeState, callback) {
	    validateLifeCycleOnReplaceState(this);
	    this._pendingState = completeState;
	    if (this._compositeLifeCycleState !== CompositeLifeCycle.MOUNTING) {
	      // If we're in a componentWillMount handler, don't enqueue a rerender
	      // because ReactUpdates assumes we're in a browser context (which is wrong
	      // for server rendering) and we're about to do a render anyway.
	      // TODO: The callback here is ignored when setState is called from
	      // componentWillMount. Either fix it or disallow doing so completely in
	      // favor of getInitialState.
	      ReactUpdates.enqueueUpdate(this, callback);
	    }
	  },

	  /**
	   * Filters the context object to only contain keys specified in
	   * `contextTypes`, and asserts that they are valid.
	   *
	   * @param {object} context
	   * @return {?object}
	   * @private
	   */
	  _processContext: function(context) {
	    var maskedContext = null;
	    var contextTypes = this.constructor.contextTypes;
	    if (contextTypes) {
	      maskedContext = {};
	      for (var contextName in contextTypes) {
	        maskedContext[contextName] = context[contextName];
	      }
	      if ("production" !== (undefined)) {
	        this._checkPropTypes(
	          contextTypes,
	          maskedContext,
	          ReactPropTypeLocations.context
	        );
	      }
	    }
	    return maskedContext;
	  },

	  /**
	   * @param {object} currentContext
	   * @return {object}
	   * @private
	   */
	  _processChildContext: function(currentContext) {
	    var childContext = this.getChildContext && this.getChildContext();
	    var displayName = this.constructor.displayName || 'ReactCompositeComponent';
	    if (childContext) {
	      ("production" !== (undefined) ? invariant(
	        typeof this.constructor.childContextTypes === 'object',
	        '%s.getChildContext(): childContextTypes must be defined in order to ' +
	        'use getChildContext().',
	        displayName
	      ) : invariant(typeof this.constructor.childContextTypes === 'object'));
	      if ("production" !== (undefined)) {
	        this._checkPropTypes(
	          this.constructor.childContextTypes,
	          childContext,
	          ReactPropTypeLocations.childContext
	        );
	      }
	      for (var name in childContext) {
	        ("production" !== (undefined) ? invariant(
	          name in this.constructor.childContextTypes,
	          '%s.getChildContext(): key "%s" is not defined in childContextTypes.',
	          displayName,
	          name
	        ) : invariant(name in this.constructor.childContextTypes));
	      }
	      return assign({}, currentContext, childContext);
	    }
	    return currentContext;
	  },

	  /**
	   * Processes props by setting default values for unspecified props and
	   * asserting that the props are valid. Does not mutate its argument; returns
	   * a new props object with defaults merged in.
	   *
	   * @param {object} newProps
	   * @return {object}
	   * @private
	   */
	  _processProps: function(newProps) {
	    if ("production" !== (undefined)) {
	      var propTypes = this.constructor.propTypes;
	      if (propTypes) {
	        this._checkPropTypes(propTypes, newProps, ReactPropTypeLocations.prop);
	      }
	    }
	    return newProps;
	  },

	  /**
	   * Assert that the props are valid
	   *
	   * @param {object} propTypes Map of prop name to a ReactPropType
	   * @param {object} props
	   * @param {string} location e.g. "prop", "context", "child context"
	   * @private
	   */
	  _checkPropTypes: function(propTypes, props, location) {
	    // TODO: Stop validating prop types here and only use the element
	    // validation.
	    var componentName = this.constructor.displayName;
	    for (var propName in propTypes) {
	      if (propTypes.hasOwnProperty(propName)) {
	        var error =
	          propTypes[propName](props, propName, componentName, location);
	        if (error instanceof Error) {
	          // We may want to extend this logic for similar errors in
	          // renderComponent calls, so I'm abstracting it away into
	          // a function to minimize refactoring in the future
	          var addendum = getDeclarationErrorAddendum(this);
	          ("production" !== (undefined) ? warning(false, error.message + addendum) : null);
	        }
	      }
	    }
	  },

	  /**
	   * If any of `_pendingElement`, `_pendingState`, or `_pendingForceUpdate`
	   * is set, update the component.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  performUpdateIfNecessary: function(transaction) {
	    var compositeLifeCycleState = this._compositeLifeCycleState;
	    // Do not trigger a state transition if we are in the middle of mounting or
	    // receiving props because both of those will already be doing this.
	    if (compositeLifeCycleState === CompositeLifeCycle.MOUNTING ||
	        compositeLifeCycleState === CompositeLifeCycle.RECEIVING_PROPS) {
	      return;
	    }

	    if (this._pendingElement == null &&
	        this._pendingState == null &&
	        !this._pendingForceUpdate) {
	      return;
	    }

	    var nextContext = this.context;
	    var nextProps = this.props;
	    var nextElement = this._currentElement;
	    if (this._pendingElement != null) {
	      nextElement = this._pendingElement;
	      nextContext = this._processContext(nextElement._context);
	      nextProps = this._processProps(nextElement.props);
	      this._pendingElement = null;

	      this._compositeLifeCycleState = CompositeLifeCycle.RECEIVING_PROPS;
	      if (this.componentWillReceiveProps) {
	        this.componentWillReceiveProps(nextProps, nextContext);
	      }
	    }

	    this._compositeLifeCycleState = null;

	    var nextState = this._pendingState || this.state;
	    this._pendingState = null;

	    var shouldUpdate =
	      this._pendingForceUpdate ||
	      !this.shouldComponentUpdate ||
	      this.shouldComponentUpdate(nextProps, nextState, nextContext);

	    if ("production" !== (undefined)) {
	      if (typeof shouldUpdate === "undefined") {
	        console.warn(
	          (this.constructor.displayName || 'ReactCompositeComponent') +
	          '.shouldComponentUpdate(): Returned undefined instead of a ' +
	          'boolean value. Make sure to return true or false.'
	        );
	      }
	    }

	    if (shouldUpdate) {
	      this._pendingForceUpdate = false;
	      // Will set `this.props`, `this.state` and `this.context`.
	      this._performComponentUpdate(
	        nextElement,
	        nextProps,
	        nextState,
	        nextContext,
	        transaction
	      );
	    } else {
	      // If it's determined that a component should not update, we still want
	      // to set props and state.
	      this._currentElement = nextElement;
	      this.props = nextProps;
	      this.state = nextState;
	      this.context = nextContext;

	      // Owner cannot change because shouldUpdateReactComponent doesn't allow
	      // it. TODO: Remove this._owner completely.
	      this._owner = nextElement._owner;
	    }
	  },

	  /**
	   * Merges new props and state, notifies delegate methods of update and
	   * performs update.
	   *
	   * @param {ReactElement} nextElement Next element
	   * @param {object} nextProps Next public object to set as properties.
	   * @param {?object} nextState Next object to set as state.
	   * @param {?object} nextContext Next public object to set as context.
	   * @param {ReactReconcileTransaction} transaction
	   * @private
	   */
	  _performComponentUpdate: function(
	    nextElement,
	    nextProps,
	    nextState,
	    nextContext,
	    transaction
	  ) {
	    var prevElement = this._currentElement;
	    var prevProps = this.props;
	    var prevState = this.state;
	    var prevContext = this.context;

	    if (this.componentWillUpdate) {
	      this.componentWillUpdate(nextProps, nextState, nextContext);
	    }

	    this._currentElement = nextElement;
	    this.props = nextProps;
	    this.state = nextState;
	    this.context = nextContext;

	    // Owner cannot change because shouldUpdateReactComponent doesn't allow
	    // it. TODO: Remove this._owner completely.
	    this._owner = nextElement._owner;

	    this.updateComponent(
	      transaction,
	      prevElement
	    );

	    if (this.componentDidUpdate) {
	      transaction.getReactMountReady().enqueue(
	        this.componentDidUpdate.bind(this, prevProps, prevState, prevContext),
	        this
	      );
	    }
	  },

	  receiveComponent: function(nextElement, transaction) {
	    if (nextElement === this._currentElement &&
	        nextElement._owner != null) {
	      // Since elements are immutable after the owner is rendered,
	      // we can do a cheap identity compare here to determine if this is a
	      // superfluous reconcile. It's possible for state to be mutable but such
	      // change should trigger an update of the owner which would recreate
	      // the element. We explicitly check for the existence of an owner since
	      // it's possible for a element created outside a composite to be
	      // deeply mutated and reused.
	      return;
	    }

	    ReactComponent.Mixin.receiveComponent.call(
	      this,
	      nextElement,
	      transaction
	    );
	  },

	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @param {ReactElement} prevElement
	   * @internal
	   * @overridable
	   */
	  updateComponent: ReactPerf.measure(
	    'ReactCompositeComponent',
	    'updateComponent',
	    function(transaction, prevParentElement) {
	      ReactComponent.Mixin.updateComponent.call(
	        this,
	        transaction,
	        prevParentElement
	      );

	      var prevComponentInstance = this._renderedComponent;
	      var prevElement = prevComponentInstance._currentElement;
	      var nextElement = this._renderValidatedComponent();
	      if (shouldUpdateReactComponent(prevElement, nextElement)) {
	        prevComponentInstance.receiveComponent(nextElement, transaction);
	      } else {
	        // These two IDs are actually the same! But nothing should rely on that.
	        var thisID = this._rootNodeID;
	        var prevComponentID = prevComponentInstance._rootNodeID;
	        prevComponentInstance.unmountComponent();
	        this._renderedComponent = instantiateReactComponent(
	          nextElement,
	          this._currentElement.type
	        );
	        var nextMarkup = this._renderedComponent.mountComponent(
	          thisID,
	          transaction,
	          this._mountDepth + 1
	        );
	        ReactComponent.BackendIDOperations.dangerouslyReplaceNodeWithMarkupByID(
	          prevComponentID,
	          nextMarkup
	        );
	      }
	    }
	  ),

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldUpdateComponent`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {?function} callback Called after update is complete.
	   * @final
	   * @protected
	   */
	  forceUpdate: function(callback) {
	    var compositeLifeCycleState = this._compositeLifeCycleState;
	    ("production" !== (undefined) ? invariant(
	      this.isMounted() ||
	        compositeLifeCycleState === CompositeLifeCycle.MOUNTING,
	      'forceUpdate(...): Can only force an update on mounted or mounting ' +
	        'components.'
	    ) : invariant(this.isMounted() ||
	      compositeLifeCycleState === CompositeLifeCycle.MOUNTING));
	    ("production" !== (undefined) ? invariant(
	      compositeLifeCycleState !== CompositeLifeCycle.UNMOUNTING &&
	      ReactCurrentOwner.current == null,
	      'forceUpdate(...): Cannot force an update while unmounting component ' +
	      'or within a `render` function.'
	    ) : invariant(compositeLifeCycleState !== CompositeLifeCycle.UNMOUNTING &&
	    ReactCurrentOwner.current == null));
	    this._pendingForceUpdate = true;
	    ReactUpdates.enqueueUpdate(this, callback);
	  },

	  /**
	   * @private
	   */
	  _renderValidatedComponent: ReactPerf.measure(
	    'ReactCompositeComponent',
	    '_renderValidatedComponent',
	    function() {
	      var renderedComponent;
	      var previousContext = ReactContext.current;
	      ReactContext.current = this._processChildContext(
	        this._currentElement._context
	      );
	      ReactCurrentOwner.current = this;
	      try {
	        renderedComponent = this.render();
	        if (renderedComponent === null || renderedComponent === false) {
	          renderedComponent = ReactEmptyComponent.getEmptyComponent();
	          ReactEmptyComponent.registerNullComponentID(this._rootNodeID);
	        } else {
	          ReactEmptyComponent.deregisterNullComponentID(this._rootNodeID);
	        }
	      } finally {
	        ReactContext.current = previousContext;
	        ReactCurrentOwner.current = null;
	      }
	      ("production" !== (undefined) ? invariant(
	        ReactElement.isValidElement(renderedComponent),
	        '%s.render(): A valid ReactComponent must be returned. You may have ' +
	          'returned undefined, an array or some other invalid object.',
	        this.constructor.displayName || 'ReactCompositeComponent'
	      ) : invariant(ReactElement.isValidElement(renderedComponent)));
	      return renderedComponent;
	    }
	  ),

	  /**
	   * @private
	   */
	  _bindAutoBindMethods: function() {
	    for (var autoBindKey in this.__reactAutoBindMap) {
	      if (!this.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
	        continue;
	      }
	      var method = this.__reactAutoBindMap[autoBindKey];
	      this[autoBindKey] = this._bindAutoBindMethod(ReactErrorUtils.guard(
	        method,
	        this.constructor.displayName + '.' + autoBindKey
	      ));
	    }
	  },

	  /**
	   * Binds a method to the component.
	   *
	   * @param {function} method Method to be bound.
	   * @private
	   */
	  _bindAutoBindMethod: function(method) {
	    var component = this;
	    var boundMethod = method.bind(component);
	    if ("production" !== (undefined)) {
	      boundMethod.__reactBoundContext = component;
	      boundMethod.__reactBoundMethod = method;
	      boundMethod.__reactBoundArguments = null;
	      var componentName = component.constructor.displayName;
	      var _bind = boundMethod.bind;
	      boundMethod.bind = function(newThis ) {for (var args=[],$__0=1,$__1=arguments.length;$__0<$__1;$__0++) args.push(arguments[$__0]);
	        // User is trying to bind() an autobound method; we effectively will
	        // ignore the value of "this" that the user is trying to use, so
	        // let's warn.
	        if (newThis !== component && newThis !== null) {
	          monitorCodeUse('react_bind_warning', { component: componentName });
	          console.warn(
	            'bind(): React component methods may only be bound to the ' +
	            'component instance. See ' + componentName
	          );
	        } else if (!args.length) {
	          monitorCodeUse('react_bind_warning', { component: componentName });
	          console.warn(
	            'bind(): You are binding a component method to the component. ' +
	            'React does this for you automatically in a high-performance ' +
	            'way, so you can safely remove this call. See ' + componentName
	          );
	          return boundMethod;
	        }
	        var reboundMethod = _bind.apply(boundMethod, arguments);
	        reboundMethod.__reactBoundContext = component;
	        reboundMethod.__reactBoundMethod = method;
	        reboundMethod.__reactBoundArguments = args;
	        return reboundMethod;
	      };
	    }
	    return boundMethod;
	  }
	};

	var ReactCompositeComponentBase = function() {};
	assign(
	  ReactCompositeComponentBase.prototype,
	  ReactComponent.Mixin,
	  ReactOwner.Mixin,
	  ReactPropTransferer.Mixin,
	  ReactCompositeComponentMixin
	);

	/**
	 * Module for creating composite components.
	 *
	 * @class ReactCompositeComponent
	 * @extends ReactComponent
	 * @extends ReactOwner
	 * @extends ReactPropTransferer
	 */
	var ReactCompositeComponent = {

	  LifeCycle: CompositeLifeCycle,

	  Base: ReactCompositeComponentBase,

	  /**
	   * Creates a composite component class given a class specification.
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function(spec) {
	    var Constructor = function(props) {
	      // This constructor is overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted. This will later be used
	      // by the stand-alone class implementation.
	    };
	    Constructor.prototype = new ReactCompositeComponentBase();
	    Constructor.prototype.constructor = Constructor;

	    injectedMixins.forEach(
	      mixSpecIntoComponent.bind(null, Constructor)
	    );

	    mixSpecIntoComponent(Constructor, spec);

	    // Initialize the defaultProps property after all mixins have been merged
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    ("production" !== (undefined) ? invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    ) : invariant(Constructor.prototype.render));

	    if ("production" !== (undefined)) {
	      if (Constructor.prototype.componentShouldUpdate) {
	        monitorCodeUse(
	          'react_component_should_update_warning',
	          { component: spec.displayName }
	        );
	        console.warn(
	          (spec.displayName || 'A component') + ' has a method called ' +
	          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	          'The name is phrased as a question because the function is ' +
	          'expected to return a value.'
	         );
	      }
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactCompositeComponentInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    if ("production" !== (undefined)) {
	      return ReactLegacyElement.wrapFactory(
	        ReactElementValidator.createFactory(Constructor)
	      );
	    }
	    return ReactLegacyElement.wrapFactory(
	      ReactElement.createFactory(Constructor)
	    );
	  },

	  injection: {
	    injectMixin: function(mixin) {
	      injectedMixins.push(mixin);
	    }
	  }
	};

	module.exports = ReactCompositeComponent;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactContext
	 */

	"use strict";

	var assign = __webpack_require__(79);

	/**
	 * Keeps track of the current context.
	 *
	 * The context is automatically passed down the component ownership hierarchy
	 * and is accessible via `this.context` on ReactCompositeComponents.
	 */
	var ReactContext = {

	  /**
	   * @internal
	   * @type {object}
	   */
	  current: {},

	  /**
	   * Temporarily extends the current context while executing scopedCallback.
	   *
	   * A typical use case might look like
	   *
	   *  render: function() {
	   *    var children = ReactContext.withContext({foo: 'foo'}, () => (
	   *
	   *    ));
	   *    return <div>{children}</div>;
	   *  }
	   *
	   * @param {object} newContext New context to merge into the existing context
	   * @param {function} scopedCallback Callback to run with the new context
	   * @return {ReactComponent|array<ReactComponent>}
	   */
	  withContext: function(newContext, scopedCallback) {
	    var result;
	    var previousContext = ReactContext.current;
	    ReactContext.current = assign({}, previousContext, newContext);
	    try {
	      result = scopedCallback();
	    } finally {
	      ReactContext.current = previousContext;
	    }
	    return result;
	  }

	};

	module.exports = ReactContext;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCurrentOwner
	 */

	"use strict";

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 *
	 * The depth indicate how many composite components are above this render level.
	 */
	var ReactCurrentOwner = {

	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null

	};

	module.exports = ReactCurrentOwner;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElementValidator
	 */

	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */

	"use strict";

	var ReactElement = __webpack_require__(54);
	var ReactPropTypeLocations = __webpack_require__(123);
	var ReactCurrentOwner = __webpack_require__(66);

	var monitorCodeUse = __webpack_require__(126);
	var warning = __webpack_require__(57);

	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {
	  'react_key_warning': {},
	  'react_numeric_key_warning': {}
	};
	var ownerHasMonitoredObjectMap = {};

	var loggedTypeFailures = {};

	var NUMERIC_PROPERTY_REGEX = /^\d+$/;

	/**
	 * Gets the current owner's displayName for use in warnings.
	 *
	 * @internal
	 * @return {?string} Display name or undefined
	 */
	function getCurrentOwnerDisplayName() {
	  var current = ReactCurrentOwner.current;
	  return current && current.constructor.displayName || undefined;
	}

	/**
	 * Warn if the component doesn't have an explicit key assigned to it.
	 * This component is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it.
	 *
	 * @internal
	 * @param {ReactComponent} component Component that requires a key.
	 * @param {*} parentType component's parent's type.
	 */
	function validateExplicitKey(component, parentType) {
	  if (component._store.validated || component.key != null) {
	    return;
	  }
	  component._store.validated = true;

	  warnAndMonitorForKeyUse(
	    'react_key_warning',
	    'Each child in an array should have a unique "key" prop.',
	    component,
	    parentType
	  );
	}

	/**
	 * Warn if the key is being defined as an object property but has an incorrect
	 * value.
	 *
	 * @internal
	 * @param {string} name Property name of the key.
	 * @param {ReactComponent} component Component that requires a key.
	 * @param {*} parentType component's parent's type.
	 */
	function validatePropertyKey(name, component, parentType) {
	  if (!NUMERIC_PROPERTY_REGEX.test(name)) {
	    return;
	  }
	  warnAndMonitorForKeyUse(
	    'react_numeric_key_warning',
	    'Child objects should have non-numeric keys so ordering is preserved.',
	    component,
	    parentType
	  );
	}

	/**
	 * Shared warning and monitoring code for the key warnings.
	 *
	 * @internal
	 * @param {string} warningID The id used when logging.
	 * @param {string} message The base warning that gets output.
	 * @param {ReactComponent} component Component that requires a key.
	 * @param {*} parentType component's parent's type.
	 */
	function warnAndMonitorForKeyUse(warningID, message, component, parentType) {
	  var ownerName = getCurrentOwnerDisplayName();
	  var parentName = parentType.displayName;

	  var useName = ownerName || parentName;
	  var memoizer = ownerHasKeyUseWarning[warningID];
	  if (memoizer.hasOwnProperty(useName)) {
	    return;
	  }
	  memoizer[useName] = true;

	  message += ownerName ?
	    (" Check the render method of " + ownerName + ".") :
	    (" Check the renderComponent call using <" + parentName + ">.");

	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwnerName = null;
	  if (component._owner && component._owner !== ReactCurrentOwner.current) {
	    // Name of the component that originally created this child.
	    childOwnerName = component._owner.constructor.displayName;

	    message += (" It was passed a child from " + childOwnerName + ".");
	  }

	  message += ' See http://fb.me/react-warning-keys for more information.';
	  monitorCodeUse(warningID, {
	    component: useName,
	    componentOwner: childOwnerName
	  });
	  console.warn(message);
	}

	/**
	 * Log that we're using an object map. We're considering deprecating this
	 * feature and replace it with proper Map and ImmutableMap data structures.
	 *
	 * @internal
	 */
	function monitorUseOfObjectMap() {
	  var currentName = getCurrentOwnerDisplayName() || '';
	  if (ownerHasMonitoredObjectMap.hasOwnProperty(currentName)) {
	    return;
	  }
	  ownerHasMonitoredObjectMap[currentName] = true;
	  monitorCodeUse('react_object_map_children');
	}

	/**
	 * Ensure that every component either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {*} component Statically passed child of any type.
	 * @param {*} parentType component's parent's type.
	 * @return {boolean}
	 */
	function validateChildKeys(component, parentType) {
	  if (Array.isArray(component)) {
	    for (var i = 0; i < component.length; i++) {
	      var child = component[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(component)) {
	    // This component was passed in a valid location.
	    component._store.validated = true;
	  } else if (component && typeof component === 'object') {
	    monitorUseOfObjectMap();
	    for (var name in component) {
	      validatePropertyKey(name, component[name], parentType);
	    }
	  }
	}

	/**
	 * Assert that the props are valid
	 *
	 * @param {string} componentName Name of the component for error messages.
	 * @param {object} propTypes Map of prop name to a ReactPropType
	 * @param {object} props
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @private
	 */
	function checkPropTypes(componentName, propTypes, props, location) {
	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        error = propTypes[propName](props, propName, componentName, location);
	      } catch (ex) {
	        error = ex;
	      }
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;
	        // This will soon use the warning module
	        monitorCodeUse(
	          'react_failed_descriptor_type_check',
	          { message: error.message }
	        );
	      }
	    }
	  }
	}

	var ReactElementValidator = {

	  createElement: function(type, props, children) {
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    ("production" !== (undefined) ? warning(
	      type != null,
	      'React.createElement: type should not be null or undefined. It should ' +
	        'be a string (for DOM elements) or a ReactClass (for composite ' +
	        'components).'
	    ) : null);

	    var element = ReactElement.createElement.apply(this, arguments);

	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }

	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], type);
	    }

	    if (type) {
	      var name = type.displayName;
	      if (type.propTypes) {
	        checkPropTypes(
	          name,
	          type.propTypes,
	          element.props,
	          ReactPropTypeLocations.prop
	        );
	      }
	      if (type.contextTypes) {
	        checkPropTypes(
	          name,
	          type.contextTypes,
	          element._context,
	          ReactPropTypeLocations.context
	        );
	      }
	    }
	    return element;
	  },

	  createFactory: function(type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(
	      null,
	      type
	    );
	    validatedFactory.type = type;
	    return validatedFactory;
	  }

	};

	module.exports = ReactElementValidator;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOM
	 * @typechecks static-only
	 */

	"use strict";

	var ReactElement = __webpack_require__(54);
	var ReactElementValidator = __webpack_require__(67);
	var ReactLegacyElement = __webpack_require__(72);

	var mapObject = __webpack_require__(127);

	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @param {string} tag Tag name (e.g. `div`).
	 * @private
	 */
	function createDOMFactory(tag) {
	  if ("production" !== (undefined)) {
	    return ReactLegacyElement.markNonLegacyFactory(
	      ReactElementValidator.createFactory(tag)
	    );
	  }
	  return ReactLegacyElement.markNonLegacyFactory(
	    ReactElement.createFactory(tag)
	  );
	}

	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOM = mapObject({
	  a: 'a',
	  abbr: 'abbr',
	  address: 'address',
	  area: 'area',
	  article: 'article',
	  aside: 'aside',
	  audio: 'audio',
	  b: 'b',
	  base: 'base',
	  bdi: 'bdi',
	  bdo: 'bdo',
	  big: 'big',
	  blockquote: 'blockquote',
	  body: 'body',
	  br: 'br',
	  button: 'button',
	  canvas: 'canvas',
	  caption: 'caption',
	  cite: 'cite',
	  code: 'code',
	  col: 'col',
	  colgroup: 'colgroup',
	  data: 'data',
	  datalist: 'datalist',
	  dd: 'dd',
	  del: 'del',
	  details: 'details',
	  dfn: 'dfn',
	  dialog: 'dialog',
	  div: 'div',
	  dl: 'dl',
	  dt: 'dt',
	  em: 'em',
	  embed: 'embed',
	  fieldset: 'fieldset',
	  figcaption: 'figcaption',
	  figure: 'figure',
	  footer: 'footer',
	  form: 'form',
	  h1: 'h1',
	  h2: 'h2',
	  h3: 'h3',
	  h4: 'h4',
	  h5: 'h5',
	  h6: 'h6',
	  head: 'head',
	  header: 'header',
	  hr: 'hr',
	  html: 'html',
	  i: 'i',
	  iframe: 'iframe',
	  img: 'img',
	  input: 'input',
	  ins: 'ins',
	  kbd: 'kbd',
	  keygen: 'keygen',
	  label: 'label',
	  legend: 'legend',
	  li: 'li',
	  link: 'link',
	  main: 'main',
	  map: 'map',
	  mark: 'mark',
	  menu: 'menu',
	  menuitem: 'menuitem',
	  meta: 'meta',
	  meter: 'meter',
	  nav: 'nav',
	  noscript: 'noscript',
	  object: 'object',
	  ol: 'ol',
	  optgroup: 'optgroup',
	  option: 'option',
	  output: 'output',
	  p: 'p',
	  param: 'param',
	  picture: 'picture',
	  pre: 'pre',
	  progress: 'progress',
	  q: 'q',
	  rp: 'rp',
	  rt: 'rt',
	  ruby: 'ruby',
	  s: 's',
	  samp: 'samp',
	  script: 'script',
	  section: 'section',
	  select: 'select',
	  small: 'small',
	  source: 'source',
	  span: 'span',
	  strong: 'strong',
	  style: 'style',
	  sub: 'sub',
	  summary: 'summary',
	  sup: 'sup',
	  table: 'table',
	  tbody: 'tbody',
	  td: 'td',
	  textarea: 'textarea',
	  tfoot: 'tfoot',
	  th: 'th',
	  thead: 'thead',
	  time: 'time',
	  title: 'title',
	  tr: 'tr',
	  track: 'track',
	  u: 'u',
	  ul: 'ul',
	  'var': 'var',
	  video: 'video',
	  wbr: 'wbr',

	  // SVG
	  circle: 'circle',
	  defs: 'defs',
	  ellipse: 'ellipse',
	  g: 'g',
	  line: 'line',
	  linearGradient: 'linearGradient',
	  mask: 'mask',
	  path: 'path',
	  pattern: 'pattern',
	  polygon: 'polygon',
	  polyline: 'polyline',
	  radialGradient: 'radialGradient',
	  rect: 'rect',
	  stop: 'stop',
	  svg: 'svg',
	  text: 'text',
	  tspan: 'tspan'

	}, createDOMFactory);

	module.exports = ReactDOM;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMComponent
	 * @typechecks static-only
	 */

	"use strict";

	var CSSPropertyOperations = __webpack_require__(129);
	var DOMProperty = __webpack_require__(91);
	var DOMPropertyOperations = __webpack_require__(60);
	var ReactBrowserComponentMixin = __webpack_require__(130);
	var ReactComponent = __webpack_require__(63);
	var ReactBrowserEventEmitter = __webpack_require__(97);
	var ReactMount = __webpack_require__(73);
	var ReactMultiChild = __webpack_require__(74);
	var ReactPerf = __webpack_require__(75);

	var assign = __webpack_require__(79);
	var escapeTextForBrowser = __webpack_require__(116);
	var invariant = __webpack_require__(31);
	var isEventSupported = __webpack_require__(131);
	var keyOf = __webpack_require__(56);
	var monitorCodeUse = __webpack_require__(126);

	var deleteListener = ReactBrowserEventEmitter.deleteListener;
	var listenTo = ReactBrowserEventEmitter.listenTo;
	var registrationNameModules = ReactBrowserEventEmitter.registrationNameModules;

	// For quickly matching children type, to test if can be treated as content.
	var CONTENT_TYPES = {'string': true, 'number': true};

	var STYLE = keyOf({style: null});

	var ELEMENT_NODE_TYPE = 1;

	/**
	 * @param {?object} props
	 */
	function assertValidProps(props) {
	  if (!props) {
	    return;
	  }
	  // Note the use of `==` which checks for null or undefined.
	  ("production" !== (undefined) ? invariant(
	    props.children == null || props.dangerouslySetInnerHTML == null,
	    'Can only set one of `children` or `props.dangerouslySetInnerHTML`.'
	  ) : invariant(props.children == null || props.dangerouslySetInnerHTML == null));
	  if ("production" !== (undefined)) {
	    if (props.contentEditable && props.children != null) {
	      console.warn(
	        'A component is `contentEditable` and contains `children` managed by ' +
	        'React. It is now your responsibility to guarantee that none of those '+
	        'nodes are unexpectedly modified or duplicated. This is probably not ' +
	        'intentional.'
	      );
	    }
	  }
	  ("production" !== (undefined) ? invariant(
	    props.style == null || typeof props.style === 'object',
	    'The `style` prop expects a mapping from style properties to values, ' +
	    'not a string.'
	  ) : invariant(props.style == null || typeof props.style === 'object'));
	}

	function putListener(id, registrationName, listener, transaction) {
	  if ("production" !== (undefined)) {
	    // IE8 has no API for event capturing and the `onScroll` event doesn't
	    // bubble.
	    if (registrationName === 'onScroll' &&
	        !isEventSupported('scroll', true)) {
	      monitorCodeUse('react_no_scroll_event');
	      console.warn('This browser doesn\'t support the `onScroll` event');
	    }
	  }
	  var container = ReactMount.findReactContainerForID(id);
	  if (container) {
	    var doc = container.nodeType === ELEMENT_NODE_TYPE ?
	      container.ownerDocument :
	      container;
	    listenTo(registrationName, doc);
	  }
	  transaction.getPutListenerQueue().enqueuePutListener(
	    id,
	    registrationName,
	    listener
	  );
	}

	// For HTML, certain tags should omit their close tag. We keep a whitelist for
	// those special cased tags.

	var omittedCloseTags = {
	  'area': true,
	  'base': true,
	  'br': true,
	  'col': true,
	  'embed': true,
	  'hr': true,
	  'img': true,
	  'input': true,
	  'keygen': true,
	  'link': true,
	  'meta': true,
	  'param': true,
	  'source': true,
	  'track': true,
	  'wbr': true
	  // NOTE: menuitem's close tag should be omitted, but that causes problems.
	};

	// We accept any tag to be rendered but since this gets injected into abitrary
	// HTML, we want to make sure that it's a safe tag.
	// http://www.w3.org/TR/REC-xml/#NT-Name

	var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
	var validatedTagCache = {};
	var hasOwnProperty = {}.hasOwnProperty;

	function validateDangerousTag(tag) {
	  if (!hasOwnProperty.call(validatedTagCache, tag)) {
	    ("production" !== (undefined) ? invariant(VALID_TAG_REGEX.test(tag), 'Invalid tag: %s', tag) : invariant(VALID_TAG_REGEX.test(tag)));
	    validatedTagCache[tag] = true;
	  }
	}

	/**
	 * Creates a new React class that is idempotent and capable of containing other
	 * React components. It accepts event listeners and DOM properties that are
	 * valid according to `DOMProperty`.
	 *
	 *  - Event listeners: `onClick`, `onMouseDown`, etc.
	 *  - DOM properties: `className`, `name`, `title`, etc.
	 *
	 * The `style` property functions differently from the DOM API. It accepts an
	 * object mapping of style properties to values.
	 *
	 * @constructor ReactDOMComponent
	 * @extends ReactComponent
	 * @extends ReactMultiChild
	 */
	function ReactDOMComponent(tag) {
	  validateDangerousTag(tag);
	  this._tag = tag;
	  this.tagName = tag.toUpperCase();
	}

	ReactDOMComponent.displayName = 'ReactDOMComponent';

	ReactDOMComponent.Mixin = {

	  /**
	   * Generates root tag markup then recurses. This method has side effects and
	   * is not idempotent.
	   *
	   * @internal
	   * @param {string} rootID The root DOM ID for this node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {number} mountDepth number of components in the owner hierarchy
	   * @return {string} The computed markup.
	   */
	  mountComponent: ReactPerf.measure(
	    'ReactDOMComponent',
	    'mountComponent',
	    function(rootID, transaction, mountDepth) {
	      ReactComponent.Mixin.mountComponent.call(
	        this,
	        rootID,
	        transaction,
	        mountDepth
	      );
	      assertValidProps(this.props);
	      var closeTag = omittedCloseTags[this._tag] ? '' : '</' + this._tag + '>';
	      return (
	        this._createOpenTagMarkupAndPutListeners(transaction) +
	        this._createContentMarkup(transaction) +
	        closeTag
	      );
	    }
	  ),

	  /**
	   * Creates markup for the open tag and all attributes.
	   *
	   * This method has side effects because events get registered.
	   *
	   * Iterating over object properties is faster than iterating over arrays.
	   * @see http://jsperf.com/obj-vs-arr-iteration
	   *
	   * @private
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {string} Markup of opening tag.
	   */
	  _createOpenTagMarkupAndPutListeners: function(transaction) {
	    var props = this.props;
	    var ret = '<' + this._tag;

	    for (var propKey in props) {
	      if (!props.hasOwnProperty(propKey)) {
	        continue;
	      }
	      var propValue = props[propKey];
	      if (propValue == null) {
	        continue;
	      }
	      if (registrationNameModules.hasOwnProperty(propKey)) {
	        putListener(this._rootNodeID, propKey, propValue, transaction);
	      } else {
	        if (propKey === STYLE) {
	          if (propValue) {
	            propValue = props.style = assign({}, props.style);
	          }
	          propValue = CSSPropertyOperations.createMarkupForStyles(propValue);
	        }
	        var markup =
	          DOMPropertyOperations.createMarkupForProperty(propKey, propValue);
	        if (markup) {
	          ret += ' ' + markup;
	        }
	      }
	    }

	    // For static pages, no need to put React ID and checksum. Saves lots of
	    // bytes.
	    if (transaction.renderToStaticMarkup) {
	      return ret + '>';
	    }

	    var markupForID = DOMPropertyOperations.createMarkupForID(this._rootNodeID);
	    return ret + ' ' + markupForID + '>';
	  },

	  /**
	   * Creates markup for the content between the tags.
	   *
	   * @private
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {string} Content markup.
	   */
	  _createContentMarkup: function(transaction) {
	    // Intentional use of != to avoid catching zero/false.
	    var innerHTML = this.props.dangerouslySetInnerHTML;
	    if (innerHTML != null) {
	      if (innerHTML.__html != null) {
	        return innerHTML.__html;
	      }
	    } else {
	      var contentToUse =
	        CONTENT_TYPES[typeof this.props.children] ? this.props.children : null;
	      var childrenToUse = contentToUse != null ? null : this.props.children;
	      if (contentToUse != null) {
	        return escapeTextForBrowser(contentToUse);
	      } else if (childrenToUse != null) {
	        var mountImages = this.mountChildren(
	          childrenToUse,
	          transaction
	        );
	        return mountImages.join('');
	      }
	    }
	    return '';
	  },

	  receiveComponent: function(nextElement, transaction) {
	    if (nextElement === this._currentElement &&
	        nextElement._owner != null) {
	      // Since elements are immutable after the owner is rendered,
	      // we can do a cheap identity compare here to determine if this is a
	      // superfluous reconcile. It's possible for state to be mutable but such
	      // change should trigger an update of the owner which would recreate
	      // the element. We explicitly check for the existence of an owner since
	      // it's possible for a element created outside a composite to be
	      // deeply mutated and reused.
	      return;
	    }

	    ReactComponent.Mixin.receiveComponent.call(
	      this,
	      nextElement,
	      transaction
	    );
	  },

	  /**
	   * Updates a native DOM component after it has already been allocated and
	   * attached to the DOM. Reconciles the root DOM node, then recurses.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @param {ReactElement} prevElement
	   * @internal
	   * @overridable
	   */
	  updateComponent: ReactPerf.measure(
	    'ReactDOMComponent',
	    'updateComponent',
	    function(transaction, prevElement) {
	      assertValidProps(this._currentElement.props);
	      ReactComponent.Mixin.updateComponent.call(
	        this,
	        transaction,
	        prevElement
	      );
	      this._updateDOMProperties(prevElement.props, transaction);
	      this._updateDOMChildren(prevElement.props, transaction);
	    }
	  ),

	  /**
	   * Reconciles the properties by detecting differences in property values and
	   * updating the DOM as necessary. This function is probably the single most
	   * critical path for performance optimization.
	   *
	   * TODO: Benchmark whether checking for changed values in memory actually
	   *       improves performance (especially statically positioned elements).
	   * TODO: Benchmark the effects of putting this at the top since 99% of props
	   *       do not change for a given reconciliation.
	   * TODO: Benchmark areas that can be improved with caching.
	   *
	   * @private
	   * @param {object} lastProps
	   * @param {ReactReconcileTransaction} transaction
	   */
	  _updateDOMProperties: function(lastProps, transaction) {
	    var nextProps = this.props;
	    var propKey;
	    var styleName;
	    var styleUpdates;
	    for (propKey in lastProps) {
	      if (nextProps.hasOwnProperty(propKey) ||
	         !lastProps.hasOwnProperty(propKey)) {
	        continue;
	      }
	      if (propKey === STYLE) {
	        var lastStyle = lastProps[propKey];
	        for (styleName in lastStyle) {
	          if (lastStyle.hasOwnProperty(styleName)) {
	            styleUpdates = styleUpdates || {};
	            styleUpdates[styleName] = '';
	          }
	        }
	      } else if (registrationNameModules.hasOwnProperty(propKey)) {
	        deleteListener(this._rootNodeID, propKey);
	      } else if (
	          DOMProperty.isStandardName[propKey] ||
	          DOMProperty.isCustomAttribute(propKey)) {
	        ReactComponent.BackendIDOperations.deletePropertyByID(
	          this._rootNodeID,
	          propKey
	        );
	      }
	    }
	    for (propKey in nextProps) {
	      var nextProp = nextProps[propKey];
	      var lastProp = lastProps[propKey];
	      if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp) {
	        continue;
	      }
	      if (propKey === STYLE) {
	        if (nextProp) {
	          nextProp = nextProps.style = assign({}, nextProp);
	        }
	        if (lastProp) {
	          // Unset styles on `lastProp` but not on `nextProp`.
	          for (styleName in lastProp) {
	            if (lastProp.hasOwnProperty(styleName) &&
	                (!nextProp || !nextProp.hasOwnProperty(styleName))) {
	              styleUpdates = styleUpdates || {};
	              styleUpdates[styleName] = '';
	            }
	          }
	          // Update styles that changed since `lastProp`.
	          for (styleName in nextProp) {
	            if (nextProp.hasOwnProperty(styleName) &&
	                lastProp[styleName] !== nextProp[styleName]) {
	              styleUpdates = styleUpdates || {};
	              styleUpdates[styleName] = nextProp[styleName];
	            }
	          }
	        } else {
	          // Relies on `updateStylesByID` not mutating `styleUpdates`.
	          styleUpdates = nextProp;
	        }
	      } else if (registrationNameModules.hasOwnProperty(propKey)) {
	        putListener(this._rootNodeID, propKey, nextProp, transaction);
	      } else if (
	          DOMProperty.isStandardName[propKey] ||
	          DOMProperty.isCustomAttribute(propKey)) {
	        ReactComponent.BackendIDOperations.updatePropertyByID(
	          this._rootNodeID,
	          propKey,
	          nextProp
	        );
	      }
	    }
	    if (styleUpdates) {
	      ReactComponent.BackendIDOperations.updateStylesByID(
	        this._rootNodeID,
	        styleUpdates
	      );
	    }
	  },

	  /**
	   * Reconciles the children with the various properties that affect the
	   * children content.
	   *
	   * @param {object} lastProps
	   * @param {ReactReconcileTransaction} transaction
	   */
	  _updateDOMChildren: function(lastProps, transaction) {
	    var nextProps = this.props;

	    var lastContent =
	      CONTENT_TYPES[typeof lastProps.children] ? lastProps.children : null;
	    var nextContent =
	      CONTENT_TYPES[typeof nextProps.children] ? nextProps.children : null;

	    var lastHtml =
	      lastProps.dangerouslySetInnerHTML &&
	      lastProps.dangerouslySetInnerHTML.__html;
	    var nextHtml =
	      nextProps.dangerouslySetInnerHTML &&
	      nextProps.dangerouslySetInnerHTML.__html;

	    // Note the use of `!=` which checks for null or undefined.
	    var lastChildren = lastContent != null ? null : lastProps.children;
	    var nextChildren = nextContent != null ? null : nextProps.children;

	    // If we're switching from children to content/html or vice versa, remove
	    // the old content
	    var lastHasContentOrHtml = lastContent != null || lastHtml != null;
	    var nextHasContentOrHtml = nextContent != null || nextHtml != null;
	    if (lastChildren != null && nextChildren == null) {
	      this.updateChildren(null, transaction);
	    } else if (lastHasContentOrHtml && !nextHasContentOrHtml) {
	      this.updateTextContent('');
	    }

	    if (nextContent != null) {
	      if (lastContent !== nextContent) {
	        this.updateTextContent('' + nextContent);
	      }
	    } else if (nextHtml != null) {
	      if (lastHtml !== nextHtml) {
	        ReactComponent.BackendIDOperations.updateInnerHTMLByID(
	          this._rootNodeID,
	          nextHtml
	        );
	      }
	    } else if (nextChildren != null) {
	      this.updateChildren(nextChildren, transaction);
	    }
	  },

	  /**
	   * Destroys all event registrations for this instance. Does not remove from
	   * the DOM. That must be done by the parent.
	   *
	   * @internal
	   */
	  unmountComponent: function() {
	    this.unmountChildren();
	    ReactBrowserEventEmitter.deleteAllListeners(this._rootNodeID);
	    ReactComponent.Mixin.unmountComponent.call(this);
	  }

	};

	assign(
	  ReactDOMComponent.prototype,
	  ReactComponent.Mixin,
	  ReactDOMComponent.Mixin,
	  ReactMultiChild.Mixin,
	  ReactBrowserComponentMixin
	);

	module.exports = ReactDOMComponent;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultInjection
	 */

	"use strict";

	var BeforeInputEventPlugin = __webpack_require__(132);
	var ChangeEventPlugin = __webpack_require__(133);
	var ClientReactRootIndex = __webpack_require__(134);
	var CompositionEventPlugin = __webpack_require__(135);
	var DefaultEventPluginOrder = __webpack_require__(136);
	var EnterLeaveEventPlugin = __webpack_require__(137);
	var ExecutionEnvironment = __webpack_require__(34);
	var HTMLDOMPropertyConfig = __webpack_require__(138);
	var MobileSafariClickEventPlugin = __webpack_require__(139);
	var ReactBrowserComponentMixin = __webpack_require__(130);
	var ReactComponentBrowserEnvironment =
	  __webpack_require__(140);
	var ReactDefaultBatchingStrategy = __webpack_require__(141);
	var ReactDOMComponent = __webpack_require__(69);
	var ReactDOMButton = __webpack_require__(142);
	var ReactDOMForm = __webpack_require__(143);
	var ReactDOMImg = __webpack_require__(144);
	var ReactDOMInput = __webpack_require__(145);
	var ReactDOMOption = __webpack_require__(146);
	var ReactDOMSelect = __webpack_require__(147);
	var ReactDOMTextarea = __webpack_require__(148);
	var ReactEventListener = __webpack_require__(149);
	var ReactInjection = __webpack_require__(150);
	var ReactInstanceHandles = __webpack_require__(71);
	var ReactMount = __webpack_require__(73);
	var SelectEventPlugin = __webpack_require__(151);
	var ServerReactRootIndex = __webpack_require__(152);
	var SimpleEventPlugin = __webpack_require__(153);
	var SVGDOMPropertyConfig = __webpack_require__(154);

	var createFullPageComponent = __webpack_require__(155);

	function inject() {
	  ReactInjection.EventEmitter.injectReactEventListener(
	    ReactEventListener
	  );

	  /**
	   * Inject modules for resolving DOM hierarchy and plugin ordering.
	   */
	  ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);
	  ReactInjection.EventPluginHub.injectInstanceHandle(ReactInstanceHandles);
	  ReactInjection.EventPluginHub.injectMount(ReactMount);

	  /**
	   * Some important event plugins included by default (without having to require
	   * them).
	   */
	  ReactInjection.EventPluginHub.injectEventPluginsByName({
	    SimpleEventPlugin: SimpleEventPlugin,
	    EnterLeaveEventPlugin: EnterLeaveEventPlugin,
	    ChangeEventPlugin: ChangeEventPlugin,
	    CompositionEventPlugin: CompositionEventPlugin,
	    MobileSafariClickEventPlugin: MobileSafariClickEventPlugin,
	    SelectEventPlugin: SelectEventPlugin,
	    BeforeInputEventPlugin: BeforeInputEventPlugin
	  });

	  ReactInjection.NativeComponent.injectGenericComponentClass(
	    ReactDOMComponent
	  );

	  ReactInjection.NativeComponent.injectComponentClasses({
	    'button': ReactDOMButton,
	    'form': ReactDOMForm,
	    'img': ReactDOMImg,
	    'input': ReactDOMInput,
	    'option': ReactDOMOption,
	    'select': ReactDOMSelect,
	    'textarea': ReactDOMTextarea,

	    'html': createFullPageComponent('html'),
	    'head': createFullPageComponent('head'),
	    'body': createFullPageComponent('body')
	  });

	  // This needs to happen after createFullPageComponent() otherwise the mixin
	  // gets double injected.
	  ReactInjection.CompositeComponent.injectMixin(ReactBrowserComponentMixin);

	  ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
	  ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);

	  ReactInjection.EmptyComponent.injectEmptyComponent('noscript');

	  ReactInjection.Updates.injectReconcileTransaction(
	    ReactComponentBrowserEnvironment.ReactReconcileTransaction
	  );
	  ReactInjection.Updates.injectBatchingStrategy(
	    ReactDefaultBatchingStrategy
	  );

	  ReactInjection.RootIndex.injectCreateReactRootIndex(
	    ExecutionEnvironment.canUseDOM ?
	      ClientReactRootIndex.createReactRootIndex :
	      ServerReactRootIndex.createReactRootIndex
	  );

	  ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);

	  if ("production" !== (undefined)) {
	    var url = (ExecutionEnvironment.canUseDOM && window.location.href) || '';
	    if ((/[?&]react_perf\b/).test(url)) {
	      var ReactDefaultPerf = __webpack_require__(51);
	      ReactDefaultPerf.start();
	    }
	  }
	}

	module.exports = {
	  inject: inject
	};


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInstanceHandles
	 * @typechecks static-only
	 */

	"use strict";

	var ReactRootIndex = __webpack_require__(156);

	var invariant = __webpack_require__(31);

	var SEPARATOR = '.';
	var SEPARATOR_LENGTH = SEPARATOR.length;

	/**
	 * Maximum depth of traversals before we consider the possibility of a bad ID.
	 */
	var MAX_TREE_DEPTH = 100;

	/**
	 * Creates a DOM ID prefix to use when mounting React components.
	 *
	 * @param {number} index A unique integer
	 * @return {string} React root ID.
	 * @internal
	 */
	function getReactRootIDString(index) {
	  return SEPARATOR + index.toString(36);
	}

	/**
	 * Checks if a character in the supplied ID is a separator or the end.
	 *
	 * @param {string} id A React DOM ID.
	 * @param {number} index Index of the character to check.
	 * @return {boolean} True if the character is a separator or end of the ID.
	 * @private
	 */
	function isBoundary(id, index) {
	  return id.charAt(index) === SEPARATOR || index === id.length;
	}

	/**
	 * Checks if the supplied string is a valid React DOM ID.
	 *
	 * @param {string} id A React DOM ID, maybe.
	 * @return {boolean} True if the string is a valid React DOM ID.
	 * @private
	 */
	function isValidID(id) {
	  return id === '' || (
	    id.charAt(0) === SEPARATOR && id.charAt(id.length - 1) !== SEPARATOR
	  );
	}

	/**
	 * Checks if the first ID is an ancestor of or equal to the second ID.
	 *
	 * @param {string} ancestorID
	 * @param {string} descendantID
	 * @return {boolean} True if `ancestorID` is an ancestor of `descendantID`.
	 * @internal
	 */
	function isAncestorIDOf(ancestorID, descendantID) {
	  return (
	    descendantID.indexOf(ancestorID) === 0 &&
	    isBoundary(descendantID, ancestorID.length)
	  );
	}

	/**
	 * Gets the parent ID of the supplied React DOM ID, `id`.
	 *
	 * @param {string} id ID of a component.
	 * @return {string} ID of the parent, or an empty string.
	 * @private
	 */
	function getParentID(id) {
	  return id ? id.substr(0, id.lastIndexOf(SEPARATOR)) : '';
	}

	/**
	 * Gets the next DOM ID on the tree path from the supplied `ancestorID` to the
	 * supplied `destinationID`. If they are equal, the ID is returned.
	 *
	 * @param {string} ancestorID ID of an ancestor node of `destinationID`.
	 * @param {string} destinationID ID of the destination node.
	 * @return {string} Next ID on the path from `ancestorID` to `destinationID`.
	 * @private
	 */
	function getNextDescendantID(ancestorID, destinationID) {
	  ("production" !== (undefined) ? invariant(
	    isValidID(ancestorID) && isValidID(destinationID),
	    'getNextDescendantID(%s, %s): Received an invalid React DOM ID.',
	    ancestorID,
	    destinationID
	  ) : invariant(isValidID(ancestorID) && isValidID(destinationID)));
	  ("production" !== (undefined) ? invariant(
	    isAncestorIDOf(ancestorID, destinationID),
	    'getNextDescendantID(...): React has made an invalid assumption about ' +
	    'the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.',
	    ancestorID,
	    destinationID
	  ) : invariant(isAncestorIDOf(ancestorID, destinationID)));
	  if (ancestorID === destinationID) {
	    return ancestorID;
	  }
	  // Skip over the ancestor and the immediate separator. Traverse until we hit
	  // another separator or we reach the end of `destinationID`.
	  var start = ancestorID.length + SEPARATOR_LENGTH;
	  for (var i = start; i < destinationID.length; i++) {
	    if (isBoundary(destinationID, i)) {
	      break;
	    }
	  }
	  return destinationID.substr(0, i);
	}

	/**
	 * Gets the nearest common ancestor ID of two IDs.
	 *
	 * Using this ID scheme, the nearest common ancestor ID is the longest common
	 * prefix of the two IDs that immediately preceded a "marker" in both strings.
	 *
	 * @param {string} oneID
	 * @param {string} twoID
	 * @return {string} Nearest common ancestor ID, or the empty string if none.
	 * @private
	 */
	function getFirstCommonAncestorID(oneID, twoID) {
	  var minLength = Math.min(oneID.length, twoID.length);
	  if (minLength === 0) {
	    return '';
	  }
	  var lastCommonMarkerIndex = 0;
	  // Use `<=` to traverse until the "EOL" of the shorter string.
	  for (var i = 0; i <= minLength; i++) {
	    if (isBoundary(oneID, i) && isBoundary(twoID, i)) {
	      lastCommonMarkerIndex = i;
	    } else if (oneID.charAt(i) !== twoID.charAt(i)) {
	      break;
	    }
	  }
	  var longestCommonID = oneID.substr(0, lastCommonMarkerIndex);
	  ("production" !== (undefined) ? invariant(
	    isValidID(longestCommonID),
	    'getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s',
	    oneID,
	    twoID,
	    longestCommonID
	  ) : invariant(isValidID(longestCommonID)));
	  return longestCommonID;
	}

	/**
	 * Traverses the parent path between two IDs (either up or down). The IDs must
	 * not be the same, and there must exist a parent path between them. If the
	 * callback returns `false`, traversal is stopped.
	 *
	 * @param {?string} start ID at which to start traversal.
	 * @param {?string} stop ID at which to end traversal.
	 * @param {function} cb Callback to invoke each ID with.
	 * @param {?boolean} skipFirst Whether or not to skip the first node.
	 * @param {?boolean} skipLast Whether or not to skip the last node.
	 * @private
	 */
	function traverseParentPath(start, stop, cb, arg, skipFirst, skipLast) {
	  start = start || '';
	  stop = stop || '';
	  ("production" !== (undefined) ? invariant(
	    start !== stop,
	    'traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.',
	    start
	  ) : invariant(start !== stop));
	  var traverseUp = isAncestorIDOf(stop, start);
	  ("production" !== (undefined) ? invariant(
	    traverseUp || isAncestorIDOf(start, stop),
	    'traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do ' +
	    'not have a parent path.',
	    start,
	    stop
	  ) : invariant(traverseUp || isAncestorIDOf(start, stop)));
	  // Traverse from `start` to `stop` one depth at a time.
	  var depth = 0;
	  var traverse = traverseUp ? getParentID : getNextDescendantID;
	  for (var id = start; /* until break */; id = traverse(id, stop)) {
	    var ret;
	    if ((!skipFirst || id !== start) && (!skipLast || id !== stop)) {
	      ret = cb(id, traverseUp, arg);
	    }
	    if (ret === false || id === stop) {
	      // Only break //after// visiting `stop`.
	      break;
	    }
	    ("production" !== (undefined) ? invariant(
	      depth++ < MAX_TREE_DEPTH,
	      'traverseParentPath(%s, %s, ...): Detected an infinite loop while ' +
	      'traversing the React DOM ID tree. This may be due to malformed IDs: %s',
	      start, stop
	    ) : invariant(depth++ < MAX_TREE_DEPTH));
	  }
	}

	/**
	 * Manages the IDs assigned to DOM representations of React components. This
	 * uses a specific scheme in order to traverse the DOM efficiently (e.g. in
	 * order to simulate events).
	 *
	 * @internal
	 */
	var ReactInstanceHandles = {

	  /**
	   * Constructs a React root ID
	   * @return {string} A React root ID.
	   */
	  createReactRootID: function() {
	    return getReactRootIDString(ReactRootIndex.createReactRootIndex());
	  },

	  /**
	   * Constructs a React ID by joining a root ID with a name.
	   *
	   * @param {string} rootID Root ID of a parent component.
	   * @param {string} name A component's name (as flattened children).
	   * @return {string} A React ID.
	   * @internal
	   */
	  createReactID: function(rootID, name) {
	    return rootID + name;
	  },

	  /**
	   * Gets the DOM ID of the React component that is the root of the tree that
	   * contains the React component with the supplied DOM ID.
	   *
	   * @param {string} id DOM ID of a React component.
	   * @return {?string} DOM ID of the React component that is the root.
	   * @internal
	   */
	  getReactRootIDFromNodeID: function(id) {
	    if (id && id.charAt(0) === SEPARATOR && id.length > 1) {
	      var index = id.indexOf(SEPARATOR, 1);
	      return index > -1 ? id.substr(0, index) : id;
	    }
	    return null;
	  },

	  /**
	   * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
	   * should would receive a `mouseEnter` or `mouseLeave` event.
	   *
	   * NOTE: Does not invoke the callback on the nearest common ancestor because
	   * nothing "entered" or "left" that element.
	   *
	   * @param {string} leaveID ID being left.
	   * @param {string} enterID ID being entered.
	   * @param {function} cb Callback to invoke on each entered/left ID.
	   * @param {*} upArg Argument to invoke the callback with on left IDs.
	   * @param {*} downArg Argument to invoke the callback with on entered IDs.
	   * @internal
	   */
	  traverseEnterLeave: function(leaveID, enterID, cb, upArg, downArg) {
	    var ancestorID = getFirstCommonAncestorID(leaveID, enterID);
	    if (ancestorID !== leaveID) {
	      traverseParentPath(leaveID, ancestorID, cb, upArg, false, true);
	    }
	    if (ancestorID !== enterID) {
	      traverseParentPath(ancestorID, enterID, cb, downArg, true, false);
	    }
	  },

	  /**
	   * Simulates the traversal of a two-phase, capture/bubble event dispatch.
	   *
	   * NOTE: This traversal happens on IDs without touching the DOM.
	   *
	   * @param {string} targetID ID of the target node.
	   * @param {function} cb Callback to invoke.
	   * @param {*} arg Argument to invoke the callback with.
	   * @internal
	   */
	  traverseTwoPhase: function(targetID, cb, arg) {
	    if (targetID) {
	      traverseParentPath('', targetID, cb, arg, true, false);
	      traverseParentPath(targetID, '', cb, arg, false, true);
	    }
	  },

	  /**
	   * Traverse a node ID, calling the supplied `cb` for each ancestor ID. For
	   * example, passing `.0.$row-0.1` would result in `cb` getting called
	   * with `.0`, `.0.$row-0`, and `.0.$row-0.1`.
	   *
	   * NOTE: This traversal happens on IDs without touching the DOM.
	   *
	   * @param {string} targetID ID of the target node.
	   * @param {function} cb Callback to invoke.
	   * @param {*} arg Argument to invoke the callback with.
	   * @internal
	   */
	  traverseAncestors: function(targetID, cb, arg) {
	    traverseParentPath('', targetID, cb, arg, true, false);
	  },

	  /**
	   * Exposed for unit testing.
	   * @private
	   */
	  _getFirstCommonAncestorID: getFirstCommonAncestorID,

	  /**
	   * Exposed for unit testing.
	   * @private
	   */
	  _getNextDescendantID: getNextDescendantID,

	  isAncestorIDOf: isAncestorIDOf,

	  SEPARATOR: SEPARATOR

	};

	module.exports = ReactInstanceHandles;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactLegacyElement
	 */

	"use strict";

	var ReactCurrentOwner = __webpack_require__(66);

	var invariant = __webpack_require__(31);
	var monitorCodeUse = __webpack_require__(126);
	var warning = __webpack_require__(57);

	var legacyFactoryLogs = {};
	function warnForLegacyFactoryCall() {
	  if (!ReactLegacyElementFactory._isLegacyCallWarningEnabled) {
	    return;
	  }
	  var owner = ReactCurrentOwner.current;
	  var name = owner && owner.constructor ? owner.constructor.displayName : '';
	  if (!name) {
	    name = 'Something';
	  }
	  if (legacyFactoryLogs.hasOwnProperty(name)) {
	    return;
	  }
	  legacyFactoryLogs[name] = true;
	  ("production" !== (undefined) ? warning(
	    false,
	    name + ' is calling a React component directly. ' +
	    'Use a factory or JSX instead. See: http://fb.me/react-legacyfactory'
	  ) : null);
	  monitorCodeUse('react_legacy_factory_call', { version: 3, name: name });
	}

	function warnForPlainFunctionType(type) {
	  var isReactClass =
	    type.prototype &&
	    typeof type.prototype.mountComponent === 'function' &&
	    typeof type.prototype.receiveComponent === 'function';
	  if (isReactClass) {
	    ("production" !== (undefined) ? warning(
	      false,
	      'Did not expect to get a React class here. Use `Component` instead ' +
	      'of `Component.type` or `this.constructor`.'
	    ) : null);
	  } else {
	    if (!type._reactWarnedForThisType) {
	      try {
	        type._reactWarnedForThisType = true;
	      } catch (x) {
	        // just incase this is a frozen object or some special object
	      }
	      monitorCodeUse(
	        'react_non_component_in_jsx',
	        { version: 3, name: type.name }
	      );
	    }
	    ("production" !== (undefined) ? warning(
	      false,
	      'This JSX uses a plain function. Only React components are ' +
	      'valid in React\'s JSX transform.'
	    ) : null);
	  }
	}

	function warnForNonLegacyFactory(type) {
	  ("production" !== (undefined) ? warning(
	    false,
	    'Do not pass React.DOM.' + type.type + ' to JSX or createFactory. ' +
	    'Use the string "' + type.type + '" instead.'
	  ) : null);
	}

	/**
	 * Transfer static properties from the source to the target. Functions are
	 * rebound to have this reflect the original source.
	 */
	function proxyStaticMethods(target, source) {
	  if (typeof source !== 'function') {
	    return;
	  }
	  for (var key in source) {
	    if (source.hasOwnProperty(key)) {
	      var value = source[key];
	      if (typeof value === 'function') {
	        var bound = value.bind(source);
	        // Copy any properties defined on the function, such as `isRequired` on
	        // a PropTypes validator.
	        for (var k in value) {
	          if (value.hasOwnProperty(k)) {
	            bound[k] = value[k];
	          }
	        }
	        target[key] = bound;
	      } else {
	        target[key] = value;
	      }
	    }
	  }
	}

	// We use an object instead of a boolean because booleans are ignored by our
	// mocking libraries when these factories gets mocked.
	var LEGACY_MARKER = {};
	var NON_LEGACY_MARKER = {};

	var ReactLegacyElementFactory = {};

	ReactLegacyElementFactory.wrapCreateFactory = function(createFactory) {
	  var legacyCreateFactory = function(type) {
	    if (typeof type !== 'function') {
	      // Non-function types cannot be legacy factories
	      return createFactory(type);
	    }

	    if (type.isReactNonLegacyFactory) {
	      // This is probably a factory created by ReactDOM we unwrap it to get to
	      // the underlying string type. It shouldn't have been passed here so we
	      // warn.
	      if ("production" !== (undefined)) {
	        warnForNonLegacyFactory(type);
	      }
	      return createFactory(type.type);
	    }

	    if (type.isReactLegacyFactory) {
	      // This is probably a legacy factory created by ReactCompositeComponent.
	      // We unwrap it to get to the underlying class.
	      return createFactory(type.type);
	    }

	    if ("production" !== (undefined)) {
	      warnForPlainFunctionType(type);
	    }

	    // Unless it's a legacy factory, then this is probably a plain function,
	    // that is expecting to be invoked by JSX. We can just return it as is.
	    return type;
	  };
	  return legacyCreateFactory;
	};

	ReactLegacyElementFactory.wrapCreateElement = function(createElement) {
	  var legacyCreateElement = function(type, props, children) {
	    if (typeof type !== 'function') {
	      // Non-function types cannot be legacy factories
	      return createElement.apply(this, arguments);
	    }

	    var args;

	    if (type.isReactNonLegacyFactory) {
	      // This is probably a factory created by ReactDOM we unwrap it to get to
	      // the underlying string type. It shouldn't have been passed here so we
	      // warn.
	      if ("production" !== (undefined)) {
	        warnForNonLegacyFactory(type);
	      }
	      args = Array.prototype.slice.call(arguments, 0);
	      args[0] = type.type;
	      return createElement.apply(this, args);
	    }

	    if (type.isReactLegacyFactory) {
	      // This is probably a legacy factory created by ReactCompositeComponent.
	      // We unwrap it to get to the underlying class.
	      if (type._isMockFunction) {
	        // If this is a mock function, people will expect it to be called. We
	        // will actually call the original mock factory function instead. This
	        // future proofs unit testing that assume that these are classes.
	        type.type._mockedReactClassConstructor = type;
	      }
	      args = Array.prototype.slice.call(arguments, 0);
	      args[0] = type.type;
	      return createElement.apply(this, args);
	    }

	    if ("production" !== (undefined)) {
	      warnForPlainFunctionType(type);
	    }

	    // This is being called with a plain function we should invoke it
	    // immediately as if this was used with legacy JSX.
	    return type.apply(null, Array.prototype.slice.call(arguments, 1));
	  };
	  return legacyCreateElement;
	};

	ReactLegacyElementFactory.wrapFactory = function(factory) {
	  ("production" !== (undefined) ? invariant(
	    typeof factory === 'function',
	    'This is suppose to accept a element factory'
	  ) : invariant(typeof factory === 'function'));
	  var legacyElementFactory = function(config, children) {
	    // This factory should not be called when JSX is used. Use JSX instead.
	    if ("production" !== (undefined)) {
	      warnForLegacyFactoryCall();
	    }
	    return factory.apply(this, arguments);
	  };
	  proxyStaticMethods(legacyElementFactory, factory.type);
	  legacyElementFactory.isReactLegacyFactory = LEGACY_MARKER;
	  legacyElementFactory.type = factory.type;
	  return legacyElementFactory;
	};

	// This is used to mark a factory that will remain. E.g. we're allowed to call
	// it as a function. However, you're not suppose to pass it to createElement
	// or createFactory, so it will warn you if you do.
	ReactLegacyElementFactory.markNonLegacyFactory = function(factory) {
	  factory.isReactNonLegacyFactory = NON_LEGACY_MARKER;
	  return factory;
	};

	// Checks if a factory function is actually a legacy factory pretending to
	// be a class.
	ReactLegacyElementFactory.isValidFactory = function(factory) {
	  // TODO: This will be removed and moved into a class validator or something.
	  return typeof factory === 'function' &&
	    factory.isReactLegacyFactory === LEGACY_MARKER;
	};

	ReactLegacyElementFactory.isValidClass = function(factory) {
	  if ("production" !== (undefined)) {
	    ("production" !== (undefined) ? warning(
	      false,
	      'isValidClass is deprecated and will be removed in a future release. ' +
	      'Use a more specific validator instead.'
	    ) : null);
	  }
	  return ReactLegacyElementFactory.isValidFactory(factory);
	};

	ReactLegacyElementFactory._isLegacyCallWarningEnabled = true;

	module.exports = ReactLegacyElementFactory;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMount
	 */

	"use strict";

	var DOMProperty = __webpack_require__(91);
	var ReactBrowserEventEmitter = __webpack_require__(97);
	var ReactCurrentOwner = __webpack_require__(66);
	var ReactElement = __webpack_require__(54);
	var ReactLegacyElement = __webpack_require__(72);
	var ReactInstanceHandles = __webpack_require__(71);
	var ReactPerf = __webpack_require__(75);

	var containsNode = __webpack_require__(157);
	var deprecated = __webpack_require__(80);
	var getReactRootElementInContainer = __webpack_require__(158);
	var instantiateReactComponent = __webpack_require__(125);
	var invariant = __webpack_require__(31);
	var shouldUpdateReactComponent = __webpack_require__(128);
	var warning = __webpack_require__(57);

	var createElement = ReactLegacyElement.wrapCreateElement(
	  ReactElement.createElement
	);

	var SEPARATOR = ReactInstanceHandles.SEPARATOR;

	var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
	var nodeCache = {};

	var ELEMENT_NODE_TYPE = 1;
	var DOC_NODE_TYPE = 9;

	/** Mapping from reactRootID to React component instance. */
	var instancesByReactRootID = {};

	/** Mapping from reactRootID to `container` nodes. */
	var containersByReactRootID = {};

	if ("production" !== (undefined)) {
	  /** __DEV__-only mapping from reactRootID to root elements. */
	  var rootElementsByReactRootID = {};
	}

	// Used to store breadth-first search state in findComponentRoot.
	var findComponentRootReusableArray = [];

	/**
	 * @param {DOMElement} container DOM element that may contain a React component.
	 * @return {?string} A "reactRoot" ID, if a React component is rendered.
	 */
	function getReactRootID(container) {
	  var rootElement = getReactRootElementInContainer(container);
	  return rootElement && ReactMount.getID(rootElement);
	}

	/**
	 * Accessing node[ATTR_NAME] or calling getAttribute(ATTR_NAME) on a form
	 * element can return its control whose name or ID equals ATTR_NAME. All
	 * DOM nodes support `getAttributeNode` but this can also get called on
	 * other objects so just return '' if we're given something other than a
	 * DOM node (such as window).
	 *
	 * @param {?DOMElement|DOMWindow|DOMDocument|DOMTextNode} node DOM node.
	 * @return {string} ID of the supplied `domNode`.
	 */
	function getID(node) {
	  var id = internalGetID(node);
	  if (id) {
	    if (nodeCache.hasOwnProperty(id)) {
	      var cached = nodeCache[id];
	      if (cached !== node) {
	        ("production" !== (undefined) ? invariant(
	          !isValid(cached, id),
	          'ReactMount: Two valid but unequal nodes with the same `%s`: %s',
	          ATTR_NAME, id
	        ) : invariant(!isValid(cached, id)));

	        nodeCache[id] = node;
	      }
	    } else {
	      nodeCache[id] = node;
	    }
	  }

	  return id;
	}

	function internalGetID(node) {
	  // If node is something like a window, document, or text node, none of
	  // which support attributes or a .getAttribute method, gracefully return
	  // the empty string, as if the attribute were missing.
	  return node && node.getAttribute && node.getAttribute(ATTR_NAME) || '';
	}

	/**
	 * Sets the React-specific ID of the given node.
	 *
	 * @param {DOMElement} node The DOM node whose ID will be set.
	 * @param {string} id The value of the ID attribute.
	 */
	function setID(node, id) {
	  var oldID = internalGetID(node);
	  if (oldID !== id) {
	    delete nodeCache[oldID];
	  }
	  node.setAttribute(ATTR_NAME, id);
	  nodeCache[id] = node;
	}

	/**
	 * Finds the node with the supplied React-generated DOM ID.
	 *
	 * @param {string} id A React-generated DOM ID.
	 * @return {DOMElement} DOM node with the suppled `id`.
	 * @internal
	 */
	function getNode(id) {
	  if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
	    nodeCache[id] = ReactMount.findReactNodeByID(id);
	  }
	  return nodeCache[id];
	}

	/**
	 * A node is "valid" if it is contained by a currently mounted container.
	 *
	 * This means that the node does not have to be contained by a document in
	 * order to be considered valid.
	 *
	 * @param {?DOMElement} node The candidate DOM node.
	 * @param {string} id The expected ID of the node.
	 * @return {boolean} Whether the node is contained by a mounted container.
	 */
	function isValid(node, id) {
	  if (node) {
	    ("production" !== (undefined) ? invariant(
	      internalGetID(node) === id,
	      'ReactMount: Unexpected modification of `%s`',
	      ATTR_NAME
	    ) : invariant(internalGetID(node) === id));

	    var container = ReactMount.findReactContainerForID(id);
	    if (container && containsNode(container, node)) {
	      return true;
	    }
	  }

	  return false;
	}

	/**
	 * Causes the cache to forget about one React-specific ID.
	 *
	 * @param {string} id The ID to forget.
	 */
	function purgeID(id) {
	  delete nodeCache[id];
	}

	var deepestNodeSoFar = null;
	function findDeepestCachedAncestorImpl(ancestorID) {
	  var ancestor = nodeCache[ancestorID];
	  if (ancestor && isValid(ancestor, ancestorID)) {
	    deepestNodeSoFar = ancestor;
	  } else {
	    // This node isn't populated in the cache, so presumably none of its
	    // descendants are. Break out of the loop.
	    return false;
	  }
	}

	/**
	 * Return the deepest cached node whose ID is a prefix of `targetID`.
	 */
	function findDeepestCachedAncestor(targetID) {
	  deepestNodeSoFar = null;
	  ReactInstanceHandles.traverseAncestors(
	    targetID,
	    findDeepestCachedAncestorImpl
	  );

	  var foundNode = deepestNodeSoFar;
	  deepestNodeSoFar = null;
	  return foundNode;
	}

	/**
	 * Mounting is the process of initializing a React component by creatings its
	 * representative DOM elements and inserting them into a supplied `container`.
	 * Any prior content inside `container` is destroyed in the process.
	 *
	 *   ReactMount.render(
	 *     component,
	 *     document.getElementById('container')
	 *   );
	 *
	 *   <div id="container">                   <-- Supplied `container`.
	 *     <div data-reactid=".3">              <-- Rendered reactRoot of React
	 *       // ...                                 component.
	 *     </div>
	 *   </div>
	 *
	 * Inside of `container`, the first element rendered is the "reactRoot".
	 */
	var ReactMount = {
	  /** Exposed for debugging purposes **/
	  _instancesByReactRootID: instancesByReactRootID,

	  /**
	   * This is a hook provided to support rendering React components while
	   * ensuring that the apparent scroll position of its `container` does not
	   * change.
	   *
	   * @param {DOMElement} container The `container` being rendered into.
	   * @param {function} renderCallback This must be called once to do the render.
	   */
	  scrollMonitor: function(container, renderCallback) {
	    renderCallback();
	  },

	  /**
	   * Take a component that's already mounted into the DOM and replace its props
	   * @param {ReactComponent} prevComponent component instance already in the DOM
	   * @param {ReactComponent} nextComponent component instance to render
	   * @param {DOMElement} container container to render into
	   * @param {?function} callback function triggered on completion
	   */
	  _updateRootComponent: function(
	      prevComponent,
	      nextComponent,
	      container,
	      callback) {
	    var nextProps = nextComponent.props;
	    ReactMount.scrollMonitor(container, function() {
	      prevComponent.replaceProps(nextProps, callback);
	    });

	    if ("production" !== (undefined)) {
	      // Record the root element in case it later gets transplanted.
	      rootElementsByReactRootID[getReactRootID(container)] =
	        getReactRootElementInContainer(container);
	    }

	    return prevComponent;
	  },

	  /**
	   * Register a component into the instance map and starts scroll value
	   * monitoring
	   * @param {ReactComponent} nextComponent component instance to render
	   * @param {DOMElement} container container to render into
	   * @return {string} reactRoot ID prefix
	   */
	  _registerComponent: function(nextComponent, container) {
	    ("production" !== (undefined) ? invariant(
	      container && (
	        container.nodeType === ELEMENT_NODE_TYPE ||
	        container.nodeType === DOC_NODE_TYPE
	      ),
	      '_registerComponent(...): Target container is not a DOM element.'
	    ) : invariant(container && (
	      container.nodeType === ELEMENT_NODE_TYPE ||
	      container.nodeType === DOC_NODE_TYPE
	    )));

	    ReactBrowserEventEmitter.ensureScrollValueMonitoring();

	    var reactRootID = ReactMount.registerContainer(container);
	    instancesByReactRootID[reactRootID] = nextComponent;
	    return reactRootID;
	  },

	  /**
	   * Render a new component into the DOM.
	   * @param {ReactComponent} nextComponent component instance to render
	   * @param {DOMElement} container container to render into
	   * @param {boolean} shouldReuseMarkup if we should skip the markup insertion
	   * @return {ReactComponent} nextComponent
	   */
	  _renderNewRootComponent: ReactPerf.measure(
	    'ReactMount',
	    '_renderNewRootComponent',
	    function(
	        nextComponent,
	        container,
	        shouldReuseMarkup) {
	      // Various parts of our code (such as ReactCompositeComponent's
	      // _renderValidatedComponent) assume that calls to render aren't nested;
	      // verify that that's the case.
	      ("production" !== (undefined) ? warning(
	        ReactCurrentOwner.current == null,
	        '_renderNewRootComponent(): Render methods should be a pure function ' +
	        'of props and state; triggering nested component updates from ' +
	        'render is not allowed. If necessary, trigger nested updates in ' +
	        'componentDidUpdate.'
	      ) : null);

	      var componentInstance = instantiateReactComponent(nextComponent, null);
	      var reactRootID = ReactMount._registerComponent(
	        componentInstance,
	        container
	      );
	      componentInstance.mountComponentIntoNode(
	        reactRootID,
	        container,
	        shouldReuseMarkup
	      );

	      if ("production" !== (undefined)) {
	        // Record the root element in case it later gets transplanted.
	        rootElementsByReactRootID[reactRootID] =
	          getReactRootElementInContainer(container);
	      }

	      return componentInstance;
	    }
	  ),

	  /**
	   * Renders a React component into the DOM in the supplied `container`.
	   *
	   * If the React component was previously rendered into `container`, this will
	   * perform an update on it and only mutate the DOM as necessary to reflect the
	   * latest React component.
	   *
	   * @param {ReactElement} nextElement Component element to render.
	   * @param {DOMElement} container DOM element to render into.
	   * @param {?function} callback function triggered on completion
	   * @return {ReactComponent} Component instance rendered in `container`.
	   */
	  render: function(nextElement, container, callback) {
	    ("production" !== (undefined) ? invariant(
	      ReactElement.isValidElement(nextElement),
	      'renderComponent(): Invalid component element.%s',
	      (
	        typeof nextElement === 'string' ?
	          ' Instead of passing an element string, make sure to instantiate ' +
	          'it by passing it to React.createElement.' :
	        ReactLegacyElement.isValidFactory(nextElement) ?
	          ' Instead of passing a component class, make sure to instantiate ' +
	          'it by passing it to React.createElement.' :
	        // Check if it quacks like a element
	        typeof nextElement.props !== "undefined" ?
	          ' This may be caused by unintentionally loading two independent ' +
	          'copies of React.' :
	          ''
	      )
	    ) : invariant(ReactElement.isValidElement(nextElement)));

	    var prevComponent = instancesByReactRootID[getReactRootID(container)];

	    if (prevComponent) {
	      var prevElement = prevComponent._currentElement;
	      if (shouldUpdateReactComponent(prevElement, nextElement)) {
	        return ReactMount._updateRootComponent(
	          prevComponent,
	          nextElement,
	          container,
	          callback
	        );
	      } else {
	        ReactMount.unmountComponentAtNode(container);
	      }
	    }

	    var reactRootElement = getReactRootElementInContainer(container);
	    var containerHasReactMarkup =
	      reactRootElement && ReactMount.isRenderedByReact(reactRootElement);

	    var shouldReuseMarkup = containerHasReactMarkup && !prevComponent;

	    var component = ReactMount._renderNewRootComponent(
	      nextElement,
	      container,
	      shouldReuseMarkup
	    );
	    callback && callback.call(component);
	    return component;
	  },

	  /**
	   * Constructs a component instance of `constructor` with `initialProps` and
	   * renders it into the supplied `container`.
	   *
	   * @param {function} constructor React component constructor.
	   * @param {?object} props Initial props of the component instance.
	   * @param {DOMElement} container DOM element to render into.
	   * @return {ReactComponent} Component instance rendered in `container`.
	   */
	  constructAndRenderComponent: function(constructor, props, container) {
	    var element = createElement(constructor, props);
	    return ReactMount.render(element, container);
	  },

	  /**
	   * Constructs a component instance of `constructor` with `initialProps` and
	   * renders it into a container node identified by supplied `id`.
	   *
	   * @param {function} componentConstructor React component constructor
	   * @param {?object} props Initial props of the component instance.
	   * @param {string} id ID of the DOM element to render into.
	   * @return {ReactComponent} Component instance rendered in the container node.
	   */
	  constructAndRenderComponentByID: function(constructor, props, id) {
	    var domNode = document.getElementById(id);
	    ("production" !== (undefined) ? invariant(
	      domNode,
	      'Tried to get element with id of "%s" but it is not present on the page.',
	      id
	    ) : invariant(domNode));
	    return ReactMount.constructAndRenderComponent(constructor, props, domNode);
	  },

	  /**
	   * Registers a container node into which React components will be rendered.
	   * This also creates the "reactRoot" ID that will be assigned to the element
	   * rendered within.
	   *
	   * @param {DOMElement} container DOM element to register as a container.
	   * @return {string} The "reactRoot" ID of elements rendered within.
	   */
	  registerContainer: function(container) {
	    var reactRootID = getReactRootID(container);
	    if (reactRootID) {
	      // If one exists, make sure it is a valid "reactRoot" ID.
	      reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID);
	    }
	    if (!reactRootID) {
	      // No valid "reactRoot" ID found, create one.
	      reactRootID = ReactInstanceHandles.createReactRootID();
	    }
	    containersByReactRootID[reactRootID] = container;
	    return reactRootID;
	  },

	  /**
	   * Unmounts and destroys the React component rendered in the `container`.
	   *
	   * @param {DOMElement} container DOM element containing a React component.
	   * @return {boolean} True if a component was found in and unmounted from
	   *                   `container`
	   */
	  unmountComponentAtNode: function(container) {
	    // Various parts of our code (such as ReactCompositeComponent's
	    // _renderValidatedComponent) assume that calls to render aren't nested;
	    // verify that that's the case. (Strictly speaking, unmounting won't cause a
	    // render but we still don't expect to be in a render call here.)
	    ("production" !== (undefined) ? warning(
	      ReactCurrentOwner.current == null,
	      'unmountComponentAtNode(): Render methods should be a pure function of ' +
	      'props and state; triggering nested component updates from render is ' +
	      'not allowed. If necessary, trigger nested updates in ' +
	      'componentDidUpdate.'
	    ) : null);

	    var reactRootID = getReactRootID(container);
	    var component = instancesByReactRootID[reactRootID];
	    if (!component) {
	      return false;
	    }
	    ReactMount.unmountComponentFromNode(component, container);
	    delete instancesByReactRootID[reactRootID];
	    delete containersByReactRootID[reactRootID];
	    if ("production" !== (undefined)) {
	      delete rootElementsByReactRootID[reactRootID];
	    }
	    return true;
	  },

	  /**
	   * Unmounts a component and removes it from the DOM.
	   *
	   * @param {ReactComponent} instance React component instance.
	   * @param {DOMElement} container DOM element to unmount from.
	   * @final
	   * @internal
	   * @see {ReactMount.unmountComponentAtNode}
	   */
	  unmountComponentFromNode: function(instance, container) {
	    instance.unmountComponent();

	    if (container.nodeType === DOC_NODE_TYPE) {
	      container = container.documentElement;
	    }

	    // http://jsperf.com/emptying-a-node
	    while (container.lastChild) {
	      container.removeChild(container.lastChild);
	    }
	  },

	  /**
	   * Finds the container DOM element that contains React component to which the
	   * supplied DOM `id` belongs.
	   *
	   * @param {string} id The ID of an element rendered by a React component.
	   * @return {?DOMElement} DOM element that contains the `id`.
	   */
	  findReactContainerForID: function(id) {
	    var reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(id);
	    var container = containersByReactRootID[reactRootID];

	    if ("production" !== (undefined)) {
	      var rootElement = rootElementsByReactRootID[reactRootID];
	      if (rootElement && rootElement.parentNode !== container) {
	        ("production" !== (undefined) ? invariant(
	          // Call internalGetID here because getID calls isValid which calls
	          // findReactContainerForID (this function).
	          internalGetID(rootElement) === reactRootID,
	          'ReactMount: Root element ID differed from reactRootID.'
	        ) : invariant(// Call internalGetID here because getID calls isValid which calls
	        // findReactContainerForID (this function).
	        internalGetID(rootElement) === reactRootID));

	        var containerChild = container.firstChild;
	        if (containerChild &&
	            reactRootID === internalGetID(containerChild)) {
	          // If the container has a new child with the same ID as the old
	          // root element, then rootElementsByReactRootID[reactRootID] is
	          // just stale and needs to be updated. The case that deserves a
	          // warning is when the container is empty.
	          rootElementsByReactRootID[reactRootID] = containerChild;
	        } else {
	          console.warn(
	            'ReactMount: Root element has been removed from its original ' +
	            'container. New container:', rootElement.parentNode
	          );
	        }
	      }
	    }

	    return container;
	  },

	  /**
	   * Finds an element rendered by React with the supplied ID.
	   *
	   * @param {string} id ID of a DOM node in the React component.
	   * @return {DOMElement} Root DOM node of the React component.
	   */
	  findReactNodeByID: function(id) {
	    var reactRoot = ReactMount.findReactContainerForID(id);
	    return ReactMount.findComponentRoot(reactRoot, id);
	  },

	  /**
	   * True if the supplied `node` is rendered by React.
	   *
	   * @param {*} node DOM Element to check.
	   * @return {boolean} True if the DOM Element appears to be rendered by React.
	   * @internal
	   */
	  isRenderedByReact: function(node) {
	    if (node.nodeType !== 1) {
	      // Not a DOMElement, therefore not a React component
	      return false;
	    }
	    var id = ReactMount.getID(node);
	    return id ? id.charAt(0) === SEPARATOR : false;
	  },

	  /**
	   * Traverses up the ancestors of the supplied node to find a node that is a
	   * DOM representation of a React component.
	   *
	   * @param {*} node
	   * @return {?DOMEventTarget}
	   * @internal
	   */
	  getFirstReactDOM: function(node) {
	    var current = node;
	    while (current && current.parentNode !== current) {
	      if (ReactMount.isRenderedByReact(current)) {
	        return current;
	      }
	      current = current.parentNode;
	    }
	    return null;
	  },

	  /**
	   * Finds a node with the supplied `targetID` inside of the supplied
	   * `ancestorNode`.  Exploits the ID naming scheme to perform the search
	   * quickly.
	   *
	   * @param {DOMEventTarget} ancestorNode Search from this root.
	   * @pararm {string} targetID ID of the DOM representation of the component.
	   * @return {DOMEventTarget} DOM node with the supplied `targetID`.
	   * @internal
	   */
	  findComponentRoot: function(ancestorNode, targetID) {
	    var firstChildren = findComponentRootReusableArray;
	    var childIndex = 0;

	    var deepestAncestor = findDeepestCachedAncestor(targetID) || ancestorNode;

	    firstChildren[0] = deepestAncestor.firstChild;
	    firstChildren.length = 1;

	    while (childIndex < firstChildren.length) {
	      var child = firstChildren[childIndex++];
	      var targetChild;

	      while (child) {
	        var childID = ReactMount.getID(child);
	        if (childID) {
	          // Even if we find the node we're looking for, we finish looping
	          // through its siblings to ensure they're cached so that we don't have
	          // to revisit this node again. Otherwise, we make n^2 calls to getID
	          // when visiting the many children of a single node in order.

	          if (targetID === childID) {
	            targetChild = child;
	          } else if (ReactInstanceHandles.isAncestorIDOf(childID, targetID)) {
	            // If we find a child whose ID is an ancestor of the given ID,
	            // then we can be sure that we only want to search the subtree
	            // rooted at this child, so we can throw out the rest of the
	            // search state.
	            firstChildren.length = childIndex = 0;
	            firstChildren.push(child.firstChild);
	          }

	        } else {
	          // If this child had no ID, then there's a chance that it was
	          // injected automatically by the browser, as when a `<table>`
	          // element sprouts an extra `<tbody>` child as a side effect of
	          // `.innerHTML` parsing. Optimistically continue down this
	          // branch, but not before examining the other siblings.
	          firstChildren.push(child.firstChild);
	        }

	        child = child.nextSibling;
	      }

	      if (targetChild) {
	        // Emptying firstChildren/findComponentRootReusableArray is
	        // not necessary for correctness, but it helps the GC reclaim
	        // any nodes that were left at the end of the search.
	        firstChildren.length = 0;

	        return targetChild;
	      }
	    }

	    firstChildren.length = 0;

	    ("production" !== (undefined) ? invariant(
	      false,
	      'findComponentRoot(..., %s): Unable to find element. This probably ' +
	      'means the DOM was unexpectedly mutated (e.g., by the browser), ' +
	      'usually due to forgetting a <tbody> when using tables, nesting tags ' +
	      'like <form>, <p>, or <a>, or using non-SVG elements in an <svg> ' +
	      'parent. ' +
	      'Try inspecting the child nodes of the element with React ID `%s`.',
	      targetID,
	      ReactMount.getID(ancestorNode)
	    ) : invariant(false));
	  },


	  /**
	   * React ID utilities.
	   */

	  getReactRootID: getReactRootID,

	  getID: getID,

	  setID: setID,

	  getNode: getNode,

	  purgeID: purgeID
	};

	// Deprecations (remove for 0.13)
	ReactMount.renderComponent = deprecated(
	  'ReactMount',
	  'renderComponent',
	  'render',
	  this,
	  ReactMount.render
	);

	module.exports = ReactMount;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMultiChild
	 * @typechecks static-only
	 */

	"use strict";

	var ReactComponent = __webpack_require__(63);
	var ReactMultiChildUpdateTypes = __webpack_require__(159);

	var flattenChildren = __webpack_require__(160);
	var instantiateReactComponent = __webpack_require__(125);
	var shouldUpdateReactComponent = __webpack_require__(128);

	/**
	 * Updating children of a component may trigger recursive updates. The depth is
	 * used to batch recursive updates to render markup more efficiently.
	 *
	 * @type {number}
	 * @private
	 */
	var updateDepth = 0;

	/**
	 * Queue of update configuration objects.
	 *
	 * Each object has a `type` property that is in `ReactMultiChildUpdateTypes`.
	 *
	 * @type {array<object>}
	 * @private
	 */
	var updateQueue = [];

	/**
	 * Queue of markup to be rendered.
	 *
	 * @type {array<string>}
	 * @private
	 */
	var markupQueue = [];

	/**
	 * Enqueues markup to be rendered and inserted at a supplied index.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {string} markup Markup that renders into an element.
	 * @param {number} toIndex Destination index.
	 * @private
	 */
	function enqueueMarkup(parentID, markup, toIndex) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.INSERT_MARKUP,
	    markupIndex: markupQueue.push(markup) - 1,
	    textContent: null,
	    fromIndex: null,
	    toIndex: toIndex
	  });
	}

	/**
	 * Enqueues moving an existing element to another index.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {number} fromIndex Source index of the existing element.
	 * @param {number} toIndex Destination index of the element.
	 * @private
	 */
	function enqueueMove(parentID, fromIndex, toIndex) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.MOVE_EXISTING,
	    markupIndex: null,
	    textContent: null,
	    fromIndex: fromIndex,
	    toIndex: toIndex
	  });
	}

	/**
	 * Enqueues removing an element at an index.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {number} fromIndex Index of the element to remove.
	 * @private
	 */
	function enqueueRemove(parentID, fromIndex) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.REMOVE_NODE,
	    markupIndex: null,
	    textContent: null,
	    fromIndex: fromIndex,
	    toIndex: null
	  });
	}

	/**
	 * Enqueues setting the text content.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {string} textContent Text content to set.
	 * @private
	 */
	function enqueueTextContent(parentID, textContent) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.TEXT_CONTENT,
	    markupIndex: null,
	    textContent: textContent,
	    fromIndex: null,
	    toIndex: null
	  });
	}

	/**
	 * Processes any enqueued updates.
	 *
	 * @private
	 */
	function processQueue() {
	  if (updateQueue.length) {
	    ReactComponent.BackendIDOperations.dangerouslyProcessChildrenUpdates(
	      updateQueue,
	      markupQueue
	    );
	    clearQueue();
	  }
	}

	/**
	 * Clears any enqueued updates.
	 *
	 * @private
	 */
	function clearQueue() {
	  updateQueue.length = 0;
	  markupQueue.length = 0;
	}

	/**
	 * ReactMultiChild are capable of reconciling multiple children.
	 *
	 * @class ReactMultiChild
	 * @internal
	 */
	var ReactMultiChild = {

	  /**
	   * Provides common functionality for components that must reconcile multiple
	   * children. This is used by `ReactDOMComponent` to mount, update, and
	   * unmount child components.
	   *
	   * @lends {ReactMultiChild.prototype}
	   */
	  Mixin: {

	    /**
	     * Generates a "mount image" for each of the supplied children. In the case
	     * of `ReactDOMComponent`, a mount image is a string of markup.
	     *
	     * @param {?object} nestedChildren Nested child maps.
	     * @return {array} An array of mounted representations.
	     * @internal
	     */
	    mountChildren: function(nestedChildren, transaction) {
	      var children = flattenChildren(nestedChildren);
	      var mountImages = [];
	      var index = 0;
	      this._renderedChildren = children;
	      for (var name in children) {
	        var child = children[name];
	        if (children.hasOwnProperty(name)) {
	          // The rendered children must be turned into instances as they're
	          // mounted.
	          var childInstance = instantiateReactComponent(child, null);
	          children[name] = childInstance;
	          // Inlined for performance, see `ReactInstanceHandles.createReactID`.
	          var rootID = this._rootNodeID + name;
	          var mountImage = childInstance.mountComponent(
	            rootID,
	            transaction,
	            this._mountDepth + 1
	          );
	          childInstance._mountIndex = index;
	          mountImages.push(mountImage);
	          index++;
	        }
	      }
	      return mountImages;
	    },

	    /**
	     * Replaces any rendered children with a text content string.
	     *
	     * @param {string} nextContent String of content.
	     * @internal
	     */
	    updateTextContent: function(nextContent) {
	      updateDepth++;
	      var errorThrown = true;
	      try {
	        var prevChildren = this._renderedChildren;
	        // Remove any rendered children.
	        for (var name in prevChildren) {
	          if (prevChildren.hasOwnProperty(name)) {
	            this._unmountChildByName(prevChildren[name], name);
	          }
	        }
	        // Set new text content.
	        this.setTextContent(nextContent);
	        errorThrown = false;
	      } finally {
	        updateDepth--;
	        if (!updateDepth) {
	          errorThrown ? clearQueue() : processQueue();
	        }
	      }
	    },

	    /**
	     * Updates the rendered children with new children.
	     *
	     * @param {?object} nextNestedChildren Nested child maps.
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     */
	    updateChildren: function(nextNestedChildren, transaction) {
	      updateDepth++;
	      var errorThrown = true;
	      try {
	        this._updateChildren(nextNestedChildren, transaction);
	        errorThrown = false;
	      } finally {
	        updateDepth--;
	        if (!updateDepth) {
	          errorThrown ? clearQueue() : processQueue();
	        }
	      }
	    },

	    /**
	     * Improve performance by isolating this hot code path from the try/catch
	     * block in `updateChildren`.
	     *
	     * @param {?object} nextNestedChildren Nested child maps.
	     * @param {ReactReconcileTransaction} transaction
	     * @final
	     * @protected
	     */
	    _updateChildren: function(nextNestedChildren, transaction) {
	      var nextChildren = flattenChildren(nextNestedChildren);
	      var prevChildren = this._renderedChildren;
	      if (!nextChildren && !prevChildren) {
	        return;
	      }
	      var name;
	      // `nextIndex` will increment for each child in `nextChildren`, but
	      // `lastIndex` will be the last index visited in `prevChildren`.
	      var lastIndex = 0;
	      var nextIndex = 0;
	      for (name in nextChildren) {
	        if (!nextChildren.hasOwnProperty(name)) {
	          continue;
	        }
	        var prevChild = prevChildren && prevChildren[name];
	        var prevElement = prevChild && prevChild._currentElement;
	        var nextElement = nextChildren[name];
	        if (shouldUpdateReactComponent(prevElement, nextElement)) {
	          this.moveChild(prevChild, nextIndex, lastIndex);
	          lastIndex = Math.max(prevChild._mountIndex, lastIndex);
	          prevChild.receiveComponent(nextElement, transaction);
	          prevChild._mountIndex = nextIndex;
	        } else {
	          if (prevChild) {
	            // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
	            lastIndex = Math.max(prevChild._mountIndex, lastIndex);
	            this._unmountChildByName(prevChild, name);
	          }
	          // The child must be instantiated before it's mounted.
	          var nextChildInstance = instantiateReactComponent(
	            nextElement,
	            null
	          );
	          this._mountChildByNameAtIndex(
	            nextChildInstance, name, nextIndex, transaction
	          );
	        }
	        nextIndex++;
	      }
	      // Remove children that are no longer present.
	      for (name in prevChildren) {
	        if (prevChildren.hasOwnProperty(name) &&
	            !(nextChildren && nextChildren[name])) {
	          this._unmountChildByName(prevChildren[name], name);
	        }
	      }
	    },

	    /**
	     * Unmounts all rendered children. This should be used to clean up children
	     * when this component is unmounted.
	     *
	     * @internal
	     */
	    unmountChildren: function() {
	      var renderedChildren = this._renderedChildren;
	      for (var name in renderedChildren) {
	        var renderedChild = renderedChildren[name];
	        // TODO: When is this not true?
	        if (renderedChild.unmountComponent) {
	          renderedChild.unmountComponent();
	        }
	      }
	      this._renderedChildren = null;
	    },

	    /**
	     * Moves a child component to the supplied index.
	     *
	     * @param {ReactComponent} child Component to move.
	     * @param {number} toIndex Destination index of the element.
	     * @param {number} lastIndex Last index visited of the siblings of `child`.
	     * @protected
	     */
	    moveChild: function(child, toIndex, lastIndex) {
	      // If the index of `child` is less than `lastIndex`, then it needs to
	      // be moved. Otherwise, we do not need to move it because a child will be
	      // inserted or moved before `child`.
	      if (child._mountIndex < lastIndex) {
	        enqueueMove(this._rootNodeID, child._mountIndex, toIndex);
	      }
	    },

	    /**
	     * Creates a child component.
	     *
	     * @param {ReactComponent} child Component to create.
	     * @param {string} mountImage Markup to insert.
	     * @protected
	     */
	    createChild: function(child, mountImage) {
	      enqueueMarkup(this._rootNodeID, mountImage, child._mountIndex);
	    },

	    /**
	     * Removes a child component.
	     *
	     * @param {ReactComponent} child Child to remove.
	     * @protected
	     */
	    removeChild: function(child) {
	      enqueueRemove(this._rootNodeID, child._mountIndex);
	    },

	    /**
	     * Sets this text content string.
	     *
	     * @param {string} textContent Text content to set.
	     * @protected
	     */
	    setTextContent: function(textContent) {
	      enqueueTextContent(this._rootNodeID, textContent);
	    },

	    /**
	     * Mounts a child with the supplied name.
	     *
	     * NOTE: This is part of `updateChildren` and is here for readability.
	     *
	     * @param {ReactComponent} child Component to mount.
	     * @param {string} name Name of the child.
	     * @param {number} index Index at which to insert the child.
	     * @param {ReactReconcileTransaction} transaction
	     * @private
	     */
	    _mountChildByNameAtIndex: function(child, name, index, transaction) {
	      // Inlined for performance, see `ReactInstanceHandles.createReactID`.
	      var rootID = this._rootNodeID + name;
	      var mountImage = child.mountComponent(
	        rootID,
	        transaction,
	        this._mountDepth + 1
	      );
	      child._mountIndex = index;
	      this.createChild(child, mountImage);
	      this._renderedChildren = this._renderedChildren || {};
	      this._renderedChildren[name] = child;
	    },

	    /**
	     * Unmounts a rendered child by name.
	     *
	     * NOTE: This is part of `updateChildren` and is here for readability.
	     *
	     * @param {ReactComponent} child Component to unmount.
	     * @param {string} name Name of the child in `this._renderedChildren`.
	     * @private
	     */
	    _unmountChildByName: function(child, name) {
	      this.removeChild(child);
	      child._mountIndex = null;
	      child.unmountComponent();
	      delete this._renderedChildren[name];
	    }

	  }

	};

	module.exports = ReactMultiChild;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPerf
	 * @typechecks static-only
	 */

	"use strict";

	/**
	 * ReactPerf is a general AOP system designed to measure performance. This
	 * module only has the hooks: see ReactDefaultPerf for the analysis tool.
	 */
	var ReactPerf = {
	  /**
	   * Boolean to enable/disable measurement. Set to false by default to prevent
	   * accidental logging and perf loss.
	   */
	  enableMeasure: false,

	  /**
	   * Holds onto the measure function in use. By default, don't measure
	   * anything, but we'll override this if we inject a measure function.
	   */
	  storedMeasure: _noMeasure,

	  /**
	   * Use this to wrap methods you want to measure. Zero overhead in production.
	   *
	   * @param {string} objName
	   * @param {string} fnName
	   * @param {function} func
	   * @return {function}
	   */
	  measure: function(objName, fnName, func) {
	    if ("production" !== (undefined)) {
	      var measuredFunc = null;
	      var wrapper = function() {
	        if (ReactPerf.enableMeasure) {
	          if (!measuredFunc) {
	            measuredFunc = ReactPerf.storedMeasure(objName, fnName, func);
	          }
	          return measuredFunc.apply(this, arguments);
	        }
	        return func.apply(this, arguments);
	      };
	      wrapper.displayName = objName + '_' + fnName;
	      return wrapper;
	    }
	    return func;
	  },

	  injection: {
	    /**
	     * @param {function} measure
	     */
	    injectMeasure: function(measure) {
	      ReactPerf.storedMeasure = measure;
	    }
	  }
	};

	/**
	 * Simply passes through the measured function, without measuring it.
	 *
	 * @param {string} objName
	 * @param {string} fnName
	 * @param {function} func
	 * @return {function}
	 */
	function _noMeasure(objName, fnName, func) {
	  return func;
	}

	module.exports = ReactPerf;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypes
	 */

	"use strict";

	var ReactElement = __webpack_require__(54);
	var ReactPropTypeLocationNames = __webpack_require__(124);

	var deprecated = __webpack_require__(80);
	var emptyFunction = __webpack_require__(58);

	/**
	 * Collection of methods that allow declaration and validation of props that are
	 * supplied to React components. Example usage:
	 *
	 *   var Props = require('ReactPropTypes');
	 *   var MyArticle = React.createClass({
	 *     propTypes: {
	 *       // An optional string prop named "description".
	 *       description: Props.string,
	 *
	 *       // A required enum prop named "category".
	 *       category: Props.oneOf(['News','Photos']).isRequired,
	 *
	 *       // A prop named "dialog" that requires an instance of Dialog.
	 *       dialog: Props.instanceOf(Dialog).isRequired
	 *     },
	 *     render: function() { ... }
	 *   });
	 *
	 * A more formal specification of how these methods are used:
	 *
	 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	 *   decl := ReactPropTypes.{type}(.isRequired)?
	 *
	 * Each and every declaration produces a function with the same signature. This
	 * allows the creation of custom validation functions. For example:
	 *
	 *  var MyLink = React.createClass({
	 *    propTypes: {
	 *      // An optional string or URI prop named "href".
	 *      href: function(props, propName, componentName) {
	 *        var propValue = props[propName];
	 *        if (propValue != null && typeof propValue !== 'string' &&
	 *            !(propValue instanceof URI)) {
	 *          return new Error(
	 *            'Expected a string or an URI for ' + propName + ' in ' +
	 *            componentName
	 *          );
	 *        }
	 *      }
	 *    },
	 *    render: function() {...}
	 *  });
	 *
	 * @internal
	 */

	var ANONYMOUS = '<<anonymous>>';

	var elementTypeChecker = createElementTypeChecker();
	var nodeTypeChecker = createNodeChecker();

	var ReactPropTypes = {
	  array: createPrimitiveTypeChecker('array'),
	  bool: createPrimitiveTypeChecker('boolean'),
	  func: createPrimitiveTypeChecker('function'),
	  number: createPrimitiveTypeChecker('number'),
	  object: createPrimitiveTypeChecker('object'),
	  string: createPrimitiveTypeChecker('string'),

	  any: createAnyTypeChecker(),
	  arrayOf: createArrayOfTypeChecker,
	  element: elementTypeChecker,
	  instanceOf: createInstanceTypeChecker,
	  node: nodeTypeChecker,
	  objectOf: createObjectOfTypeChecker,
	  oneOf: createEnumTypeChecker,
	  oneOfType: createUnionTypeChecker,
	  shape: createShapeTypeChecker,

	  component: deprecated(
	    'React.PropTypes',
	    'component',
	    'element',
	    this,
	    elementTypeChecker
	  ),
	  renderable: deprecated(
	    'React.PropTypes',
	    'renderable',
	    'node',
	    this,
	    nodeTypeChecker
	  )
	};

	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName, location) {
	    componentName = componentName || ANONYMOUS;
	    if (props[propName] == null) {
	      var locationName = ReactPropTypeLocationNames[location];
	      if (isRequired) {
	        return new Error(
	          ("Required " + locationName + " `" + propName + "` was not specified in ")+
	          ("`" + componentName + "`.")
	        );
	      }
	    } else {
	      return validate(props, propName, componentName, location);
	    }
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

	function createPrimitiveTypeChecker(expectedType) {
	  function validate(props, propName, componentName, location) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== expectedType) {
	      var locationName = ReactPropTypeLocationNames[location];
	      // `propValue` being instance of, say, date/regexp, pass the 'object'
	      // check, but we can offer a more precise error message here rather than
	      // 'of type `object`'.
	      var preciseType = getPreciseType(propValue);

	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` of type `" + preciseType + "` ") +
	        ("supplied to `" + componentName + "`, expected `" + expectedType + "`.")
	      );
	    }
	  }
	  return createChainableTypeChecker(validate);
	}

	function createAnyTypeChecker() {
	  return createChainableTypeChecker(emptyFunction.thatReturns());
	}

	function createArrayOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location) {
	    var propValue = props[propName];
	    if (!Array.isArray(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` of type ") +
	        ("`" + propType + "` supplied to `" + componentName + "`, expected an array.")
	      );
	    }
	    for (var i = 0; i < propValue.length; i++) {
	      var error = typeChecker(propValue, i, componentName, location);
	      if (error instanceof Error) {
	        return error;
	      }
	    }
	  }
	  return createChainableTypeChecker(validate);
	}

	function createElementTypeChecker() {
	  function validate(props, propName, componentName, location) {
	    if (!ReactElement.isValidElement(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` supplied to ") +
	        ("`" + componentName + "`, expected a ReactElement.")
	      );
	    }
	  }
	  return createChainableTypeChecker(validate);
	}

	function createInstanceTypeChecker(expectedClass) {
	  function validate(props, propName, componentName, location) {
	    if (!(props[propName] instanceof expectedClass)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var expectedClassName = expectedClass.name || ANONYMOUS;
	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` supplied to ") +
	        ("`" + componentName + "`, expected instance of `" + expectedClassName + "`.")
	      );
	    }
	  }
	  return createChainableTypeChecker(validate);
	}

	function createEnumTypeChecker(expectedValues) {
	  function validate(props, propName, componentName, location) {
	    var propValue = props[propName];
	    for (var i = 0; i < expectedValues.length; i++) {
	      if (propValue === expectedValues[i]) {
	        return;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    var valuesString = JSON.stringify(expectedValues);
	    return new Error(
	      ("Invalid " + locationName + " `" + propName + "` of value `" + propValue + "` ") +
	      ("supplied to `" + componentName + "`, expected one of " + valuesString + ".")
	    );
	  }
	  return createChainableTypeChecker(validate);
	}

	function createObjectOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` of type ") +
	        ("`" + propType + "` supplied to `" + componentName + "`, expected an object.")
	      );
	    }
	    for (var key in propValue) {
	      if (propValue.hasOwnProperty(key)) {
	        var error = typeChecker(propValue, key, componentName, location);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	    }
	  }
	  return createChainableTypeChecker(validate);
	}

	function createUnionTypeChecker(arrayOfTypeCheckers) {
	  function validate(props, propName, componentName, location) {
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (checker(props, propName, componentName, location) == null) {
	        return;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    return new Error(
	      ("Invalid " + locationName + " `" + propName + "` supplied to ") +
	      ("`" + componentName + "`.")
	    );
	  }
	  return createChainableTypeChecker(validate);
	}

	function createNodeChecker() {
	  function validate(props, propName, componentName, location) {
	    if (!isNode(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` supplied to ") +
	        ("`" + componentName + "`, expected a ReactNode.")
	      );
	    }
	  }
	  return createChainableTypeChecker(validate);
	}

	function createShapeTypeChecker(shapeTypes) {
	  function validate(props, propName, componentName, location) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` of type `" + propType + "` ") +
	        ("supplied to `" + componentName + "`, expected `object`.")
	      );
	    }
	    for (var key in shapeTypes) {
	      var checker = shapeTypes[key];
	      if (!checker) {
	        continue;
	      }
	      var error = checker(propValue, key, componentName, location);
	      if (error) {
	        return error;
	      }
	    }
	  }
	  return createChainableTypeChecker(validate, 'expected `object`');
	}

	function isNode(propValue) {
	  switch(typeof propValue) {
	    case 'number':
	    case 'string':
	      return true;
	    case 'boolean':
	      return !propValue;
	    case 'object':
	      if (Array.isArray(propValue)) {
	        return propValue.every(isNode);
	      }
	      if (ReactElement.isValidElement(propValue)) {
	        return true;
	      }
	      for (var k in propValue) {
	        if (!isNode(propValue[k])) {
	          return false;
	        }
	      }
	      return true;
	    default:
	      return false;
	  }
	}

	// Equivalent of `typeof` but with special handling for array and regexp.
	function getPropType(propValue) {
	  var propType = typeof propValue;
	  if (Array.isArray(propValue)) {
	    return 'array';
	  }
	  if (propValue instanceof RegExp) {
	    // Old webkits (at least until Android 4.0) return 'function' rather than
	    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	    // passes PropTypes.object.
	    return 'object';
	  }
	  return propType;
	}

	// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
	function getPreciseType(propValue) {
	  var propType = getPropType(propValue);
	  if (propType === 'object') {
	    if (propValue instanceof Date) {
	      return 'date';
	    } else if (propValue instanceof RegExp) {
	      return 'regexp';
	    }
	  }
	  return propType;
	}

	module.exports = ReactPropTypes;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 * @providesModule ReactServerRendering
	 */
	"use strict";

	var ReactElement = __webpack_require__(54);
	var ReactInstanceHandles = __webpack_require__(71);
	var ReactMarkupChecksum = __webpack_require__(161);
	var ReactServerRenderingTransaction =
	  __webpack_require__(162);

	var instantiateReactComponent = __webpack_require__(125);
	var invariant = __webpack_require__(31);

	/**
	 * @param {ReactElement} element
	 * @return {string} the HTML markup
	 */
	function renderToString(element) {
	  ("production" !== (undefined) ? invariant(
	    ReactElement.isValidElement(element),
	    'renderToString(): You must pass a valid ReactElement.'
	  ) : invariant(ReactElement.isValidElement(element)));

	  var transaction;
	  try {
	    var id = ReactInstanceHandles.createReactRootID();
	    transaction = ReactServerRenderingTransaction.getPooled(false);

	    return transaction.perform(function() {
	      var componentInstance = instantiateReactComponent(element, null);
	      var markup = componentInstance.mountComponent(id, transaction, 0);
	      return ReactMarkupChecksum.addChecksumToMarkup(markup);
	    }, null);
	  } finally {
	    ReactServerRenderingTransaction.release(transaction);
	  }
	}

	/**
	 * @param {ReactElement} element
	 * @return {string} the HTML markup, without the extra React ID and checksum
	 * (for generating static pages)
	 */
	function renderToStaticMarkup(element) {
	  ("production" !== (undefined) ? invariant(
	    ReactElement.isValidElement(element),
	    'renderToStaticMarkup(): You must pass a valid ReactElement.'
	  ) : invariant(ReactElement.isValidElement(element)));

	  var transaction;
	  try {
	    var id = ReactInstanceHandles.createReactRootID();
	    transaction = ReactServerRenderingTransaction.getPooled(true);

	    return transaction.perform(function() {
	      var componentInstance = instantiateReactComponent(element, null);
	      return componentInstance.mountComponent(id, transaction, 0);
	    }, null);
	  } finally {
	    ReactServerRenderingTransaction.release(transaction);
	  }
	}

	module.exports = {
	  renderToString: renderToString,
	  renderToStaticMarkup: renderToStaticMarkup
	};


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTextComponent
	 * @typechecks static-only
	 */

	"use strict";

	var DOMPropertyOperations = __webpack_require__(60);
	var ReactComponent = __webpack_require__(63);
	var ReactElement = __webpack_require__(54);

	var assign = __webpack_require__(79);
	var escapeTextForBrowser = __webpack_require__(116);

	/**
	 * Text nodes violate a couple assumptions that React makes about components:
	 *
	 *  - When mounting text into the DOM, adjacent text nodes are merged.
	 *  - Text nodes cannot be assigned a React root ID.
	 *
	 * This component is used to wrap strings in elements so that they can undergo
	 * the same reconciliation that is applied to elements.
	 *
	 * TODO: Investigate representing React components in the DOM with text nodes.
	 *
	 * @class ReactTextComponent
	 * @extends ReactComponent
	 * @internal
	 */
	var ReactTextComponent = function(props) {
	  // This constructor and it's argument is currently used by mocks.
	};

	assign(ReactTextComponent.prototype, ReactComponent.Mixin, {

	  /**
	   * Creates the markup for this text node. This node is not intended to have
	   * any features besides containing text content.
	   *
	   * @param {string} rootID DOM ID of the root node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {number} mountDepth number of components in the owner hierarchy
	   * @return {string} Markup for this text node.
	   * @internal
	   */
	  mountComponent: function(rootID, transaction, mountDepth) {
	    ReactComponent.Mixin.mountComponent.call(
	      this,
	      rootID,
	      transaction,
	      mountDepth
	    );

	    var escapedText = escapeTextForBrowser(this.props);

	    if (transaction.renderToStaticMarkup) {
	      // Normally we'd wrap this in a `span` for the reasons stated above, but
	      // since this is a situation where React won't take over (static pages),
	      // we can simply return the text as it is.
	      return escapedText;
	    }

	    return (
	      '<span ' + DOMPropertyOperations.createMarkupForID(rootID) + '>' +
	        escapedText +
	      '</span>'
	    );
	  },

	  /**
	   * Updates this component by updating the text content.
	   *
	   * @param {object} nextComponent Contains the next text content.
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  receiveComponent: function(nextComponent, transaction) {
	    var nextProps = nextComponent.props;
	    if (nextProps !== this.props) {
	      this.props = nextProps;
	      ReactComponent.BackendIDOperations.updateTextContentByID(
	        this._rootNodeID,
	        nextProps
	      );
	    }
	  }

	});

	var ReactTextComponentFactory = function(text) {
	  // Bypass validation and configuration
	  return new ReactElement(ReactTextComponent, null, null, null, null, text);
	};

	ReactTextComponentFactory.type = ReactTextComponent;

	module.exports = ReactTextComponentFactory;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Object.assign
	 */

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign

	function assign(target, sources) {
	  if (target == null) {
	    throw new TypeError('Object.assign target cannot be null or undefined');
	  }

	  var to = Object(target);
	  var hasOwnProperty = Object.prototype.hasOwnProperty;

	  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
	    var nextSource = arguments[nextIndex];
	    if (nextSource == null) {
	      continue;
	    }

	    var from = Object(nextSource);

	    // We don't currently support accessors nor proxies. Therefore this
	    // copy cannot throw. If we ever supported this then we must handle
	    // exceptions and side-effects. We don't support symbols so they won't
	    // be transferred.

	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }
	  }

	  return to;
	};

	module.exports = assign;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule deprecated
	 */

	var assign = __webpack_require__(79);
	var warning = __webpack_require__(57);

	/**
	 * This will log a single deprecation notice per function and forward the call
	 * on to the new API.
	 *
	 * @param {string} namespace The namespace of the call, eg 'React'
	 * @param {string} oldName The old function name, eg 'renderComponent'
	 * @param {string} newName The new function name, eg 'render'
	 * @param {*} ctx The context this forwarded call should run in
	 * @param {function} fn The function to forward on to
	 * @return {*} Will be the value as returned from `fn`
	 */
	function deprecated(namespace, oldName, newName, ctx, fn) {
	  var warned = false;
	  if ("production" !== (undefined)) {
	    var newFn = function() {
	      ("production" !== (undefined) ? warning(
	        warned,
	        (namespace + "." + oldName + " will be deprecated in a future version. ") +
	        ("Use " + namespace + "." + newName + " instead.")
	      ) : null);
	      warned = true;
	      return fn.apply(ctx, arguments);
	    };
	    newFn.displayName = (namespace + "_" + oldName);
	    // We need to make sure all properties of the original fn are copied over.
	    // In particular, this is needed to support PropTypes
	    return assign(newFn, fn);
	  }

	  return fn;
	}

	module.exports = deprecated;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule onlyChild
	 */
	"use strict";

	var ReactElement = __webpack_require__(54);

	var invariant = __webpack_require__(31);

	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection. The current implementation of this
	 * function assumes that a single child gets passed without a wrapper, but the
	 * purpose of this helper function is to abstract away the particular structure
	 * of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactComponent} The first and only `ReactComponent` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  ("production" !== (undefined) ? invariant(
	    ReactElement.isValidElement(children),
	    'onlyChild must be passed a children with exactly one child.'
	  ) : invariant(ReactElement.isValidElement(children)));
	  return children;
	}

	module.exports = onlyChild;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

	module.exports = {
	  PatternPrototype: {
	    match: function(url) {
	      var bound, captured, i, match, name, value, _i, _len;
	      match = this.regex.exec(url);
	      if (match == null) {
	        return null;
	      }
	      captured = match.slice(1);
	      if (this.isRegex) {
	        return captured;
	      }
	      bound = {};
	      for (i = _i = 0, _len = captured.length; _i < _len; i = ++_i) {
	        value = captured[i];
	        name = this.names[i];
	        if (value == null) {
	          continue;
	        }
	        if (name === '_') {
	          if (bound._ == null) {
	            bound._ = [];
	          }
	          bound._.push(value);
	        } else {
	          bound[name] = value;
	        }
	      }
	      return bound;
	    }
	  },
	  newPattern: function(arg, separator) {
	    var isRegex, pattern, regexString;
	    if (separator == null) {
	      separator = '/';
	    }
	    isRegex = arg instanceof RegExp;
	    if (!(('string' === typeof arg) || isRegex)) {
	      throw new TypeError('argument must be a regex or a string');
	    }
	    [':', '*'].forEach(function(forbidden) {
	      if (separator === forbidden) {
	        throw new Error("separator can't be " + forbidden);
	      }
	    });
	    pattern = Object.create(module.exports.PatternPrototype);
	    pattern.isRegex = isRegex;
	    pattern.regex = isRegex ? arg : (regexString = module.exports.toRegexString(arg, separator), new RegExp(regexString));
	    if (!isRegex) {
	      pattern.names = module.exports.getNames(arg, separator);
	    }
	    return pattern;
	  },
	  escapeForRegex: function(string) {
	    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	  },
	  getNames: function(arg, separator) {
	    var escapedSeparator, name, names, regex, results;
	    if (separator == null) {
	      separator = '/';
	    }
	    if (arg instanceof RegExp) {
	      return [];
	    }
	    escapedSeparator = module.exports.escapeForRegex(separator);
	    regex = new RegExp("((:?:[^" + escapedSeparator + "\(\)]+)|(?:[\*]))", 'g');
	    names = [];
	    results = regex.exec(arg);
	    while (results != null) {
	      name = results[1].slice(1);
	      if (name === '_') {
	        throw new TypeError(":_ can't be used as a pattern name in pattern " + arg);
	      }
	      if (__indexOf.call(names, name) >= 0) {
	        throw new TypeError("duplicate pattern name :" + name + " in pattern " + arg);
	      }
	      names.push(name || '_');
	      results = regex.exec(arg);
	    }
	    return names;
	  },
	  escapeSeparators: function(string, separator) {
	    var escapedSeparator, regex;
	    if (separator == null) {
	      separator = '/';
	    }
	    escapedSeparator = module.exports.escapeForRegex(separator);
	    regex = new RegExp(escapedSeparator, 'g');
	    return string.replace(regex, escapedSeparator);
	  },
	  toRegexString: function(string, separator) {
	    var escapedSeparator, stringWithEscapedSeparators;
	    if (separator == null) {
	      separator = '/';
	    }
	    stringWithEscapedSeparators = module.exports.escapeSeparators(string, separator);
	    stringWithEscapedSeparators = stringWithEscapedSeparators.replace(/\((.*?)\)/g, '(?:$1)?').replace(/\*/g, '(.*?)');
	    escapedSeparator = module.exports.escapeForRegex(separator);
	    module.exports.getNames(string, separator).forEach(function(name) {
	      return stringWithEscapedSeparators = stringWithEscapedSeparators.replace(':' + name, "([^\\" + separator + "]+)");
	    });
	    return "^" + stringWithEscapedSeparators + "$";
	  }
	};


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactLink
	 * @typechecks static-only
	 */

	"use strict";

	/**
	 * ReactLink encapsulates a common pattern in which a component wants to modify
	 * a prop received from its parent. ReactLink allows the parent to pass down a
	 * value coupled with a callback that, when invoked, expresses an intent to
	 * modify that value. For example:
	 *
	 * React.createClass({
	 *   getInitialState: function() {
	 *     return {value: ''};
	 *   },
	 *   render: function() {
	 *     var valueLink = new ReactLink(this.state.value, this._handleValueChange);
	 *     return <input valueLink={valueLink} />;
	 *   },
	 *   this._handleValueChange: function(newValue) {
	 *     this.setState({value: newValue});
	 *   }
	 * });
	 *
	 * We have provided some sugary mixins to make the creation and
	 * consumption of ReactLink easier; see LinkedValueUtils and LinkedStateMixin.
	 */

	var React = __webpack_require__(40);

	/**
	 * @param {*} value current value of the link
	 * @param {function} requestChange callback to request a change
	 */
	function ReactLink(value, requestChange) {
	  this.value = value;
	  this.requestChange = requestChange;
	}

	/**
	 * Creates a PropType that enforces the ReactLink API and optionally checks the
	 * type of the value being passed inside the link. Example:
	 *
	 * MyComponent.propTypes = {
	 *   tabIndexLink: ReactLink.PropTypes.link(React.PropTypes.number)
	 * }
	 */
	function createLinkTypeChecker(linkType) {
	  var shapes = {
	    value: typeof linkType === 'undefined' ?
	      React.PropTypes.any.isRequired :
	      linkType.isRequired,
	    requestChange: React.PropTypes.func.isRequired
	  };
	  return React.PropTypes.shape(shapes);
	}

	ReactLink.PropTypes = {
	  link: createLinkTypeChecker
	};

	module.exports = ReactLink;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactStateSetters
	 */

	"use strict";

	var ReactStateSetters = {
	  /**
	   * Returns a function that calls the provided function, and uses the result
	   * of that to set the component's state.
	   *
	   * @param {ReactCompositeComponent} component
	   * @param {function} funcReturningState Returned callback uses this to
	   *                                      determine how to update state.
	   * @return {function} callback that when invoked uses funcReturningState to
	   *                    determined the object literal to setState.
	   */
	  createStateSetter: function(component, funcReturningState) {
	    return function(a, b, c, d, e, f) {
	      var partialState = funcReturningState.call(component, a, b, c, d, e, f);
	      if (partialState) {
	        component.setState(partialState);
	      }
	    };
	  },

	  /**
	   * Returns a single-argument callback that can be used to update a single
	   * key in the component's state.
	   *
	   * Note: this is memoized function, which makes it inexpensive to call.
	   *
	   * @param {ReactCompositeComponent} component
	   * @param {string} key The key in the state that you should update.
	   * @return {function} callback of 1 argument which calls setState() with
	   *                    the provided keyName and callback argument.
	   */
	  createStateKeySetter: function(component, key) {
	    // Memoize the setters.
	    var cache = component.__keySetters || (component.__keySetters = {});
	    return cache[key] || (cache[key] = createStateKeySetter(component, key));
	  }
	};

	function createStateKeySetter(component, key) {
	  // Partial state is allocated outside of the function closure so it can be
	  // reused with every call, avoiding memory allocation when this function
	  // is called.
	  var partialState = {};
	  return function stateKeySetter(value) {
	    partialState[key] = value;
	    component.setState(partialState);
	  };
	}

	ReactStateSetters.Mixin = {
	  /**
	   * Returns a function that calls the provided function, and uses the result
	   * of that to set the component's state.
	   *
	   * For example, these statements are equivalent:
	   *
	   *   this.setState({x: 1});
	   *   this.createStateSetter(function(xValue) {
	   *     return {x: xValue};
	   *   })(1);
	   *
	   * @param {function} funcReturningState Returned callback uses this to
	   *                                      determine how to update state.
	   * @return {function} callback that when invoked uses funcReturningState to
	   *                    determined the object literal to setState.
	   */
	  createStateSetter: function(funcReturningState) {
	    return ReactStateSetters.createStateSetter(this, funcReturningState);
	  },

	  /**
	   * Returns a single-argument callback that can be used to update a single
	   * key in the component's state.
	   *
	   * For example, these statements are equivalent:
	   *
	   *   this.setState({x: 1});
	   *   this.createStateKeySetter('x')(1);
	   *
	   * Note: this is memoized function, which makes it inexpensive to call.
	   *
	   * @param {string} key The key in the state that you should update.
	   * @return {function} callback of 1 argument which calls setState() with
	   *                    the provided keyName and callback argument.
	   */
	  createStateKeySetter: function(key) {
	    return ReactStateSetters.createStateKeySetter(this, key);
	  }
	};

	module.exports = ReactStateSetters;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 */

	"use strict";

	/**
	 * Performs equality by iterating through keys on an object and returning
	 * false when any key has values which are not strictly equal between
	 * objA and objB. Returns true when the values of all keys are strictly equal.
	 *
	 * @return {boolean}
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	  var key;
	  // Test for A's keys different from B.
	  for (key in objA) {
	    if (objA.hasOwnProperty(key) &&
	        (!objB.hasOwnProperty(key) || objA[key] !== objB[key])) {
	      return false;
	    }
	  }
	  // Test for B's keys missing from A.
	  for (key in objB) {
	    if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = shallowEqual;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @providesModule ReactCSSTransitionGroupChild
	 */

	"use strict";

	var React = __webpack_require__(40);

	var CSSCore = __webpack_require__(163);
	var ReactTransitionEvents = __webpack_require__(164);

	var onlyChild = __webpack_require__(81);

	// We don't remove the element from the DOM until we receive an animationend or
	// transitionend event. If the user screws up and forgets to add an animation
	// their node will be stuck in the DOM forever, so we detect if an animation
	// does not start and if it doesn't, we just call the end listener immediately.
	var TICK = 17;
	var NO_EVENT_TIMEOUT = 5000;

	var noEventListener = null;


	if ("production" !== (undefined)) {
	  noEventListener = function() {
	    console.warn(
	      'transition(): tried to perform an animation without ' +
	      'an animationend or transitionend event after timeout (' +
	      NO_EVENT_TIMEOUT + 'ms). You should either disable this ' +
	      'transition in JS or add a CSS animation/transition.'
	    );
	  };
	}

	var ReactCSSTransitionGroupChild = React.createClass({
	  displayName: 'ReactCSSTransitionGroupChild',

	  transition: function(animationType, finishCallback) {
	    var node = this.getDOMNode();
	    var className = this.props.name + '-' + animationType;
	    var activeClassName = className + '-active';
	    var noEventTimeout = null;

	    var endListener = function(e) {
	      if (e && e.target !== node) {
	        return;
	      }
	      if ("production" !== (undefined)) {
	        clearTimeout(noEventTimeout);
	      }

	      CSSCore.removeClass(node, className);
	      CSSCore.removeClass(node, activeClassName);

	      ReactTransitionEvents.removeEndEventListener(node, endListener);

	      // Usually this optional callback is used for informing an owner of
	      // a leave animation and telling it to remove the child.
	      finishCallback && finishCallback();
	    };

	    ReactTransitionEvents.addEndEventListener(node, endListener);

	    CSSCore.addClass(node, className);

	    // Need to do this to actually trigger a transition.
	    this.queueClass(activeClassName);

	    if ("production" !== (undefined)) {
	      noEventTimeout = setTimeout(noEventListener, NO_EVENT_TIMEOUT);
	    }
	  },

	  queueClass: function(className) {
	    this.classNameQueue.push(className);

	    if (!this.timeout) {
	      this.timeout = setTimeout(this.flushClassNameQueue, TICK);
	    }
	  },

	  flushClassNameQueue: function() {
	    if (this.isMounted()) {
	      this.classNameQueue.forEach(
	        CSSCore.addClass.bind(CSSCore, this.getDOMNode())
	      );
	    }
	    this.classNameQueue.length = 0;
	    this.timeout = null;
	  },

	  componentWillMount: function() {
	    this.classNameQueue = [];
	  },

	  componentWillUnmount: function() {
	    if (this.timeout) {
	      clearTimeout(this.timeout);
	    }
	  },

	  componentWillEnter: function(done) {
	    if (this.props.enter) {
	      this.transition('enter', done);
	    } else {
	      done();
	    }
	  },

	  componentWillLeave: function(done) {
	    if (this.props.leave) {
	      this.transition('leave', done);
	    } else {
	      done();
	    }
	  },

	  render: function() {
	    return onlyChild(this.props.children);
	  }
	});

	module.exports = ReactCSSTransitionGroupChild;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 * @providesModule ReactTransitionChildMapping
	 */

	"use strict";

	var ReactChildren = __webpack_require__(62);

	var ReactTransitionChildMapping = {
	  /**
	   * Given `this.props.children`, return an object mapping key to child. Just
	   * simple syntactic sugar around ReactChildren.map().
	   *
	   * @param {*} children `this.props.children`
	   * @return {object} Mapping of key to child
	   */
	  getChildMapping: function(children) {
	    return ReactChildren.map(children, function(child) {
	      return child;
	    });
	  },

	  /**
	   * When you're adding or removing children some may be added or removed in the
	   * same render pass. We want to show *both* since we want to simultaneously
	   * animate elements in and out. This function takes a previous set of keys
	   * and a new set of keys and merges them with its best guess of the correct
	   * ordering. In the future we may expose some of the utilities in
	   * ReactMultiChild to make this easy, but for now React itself does not
	   * directly have this concept of the union of prevChildren and nextChildren
	   * so we implement it here.
	   *
	   * @param {object} prev prev children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @param {object} next next children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @return {object} a key set that contains all keys in `prev` and all keys
	   * in `next` in a reasonable order.
	   */
	  mergeChildMappings: function(prev, next) {
	    prev = prev || {};
	    next = next || {};

	    function getValueForKey(key) {
	      if (next.hasOwnProperty(key)) {
	        return next[key];
	      } else {
	        return prev[key];
	      }
	    }

	    // For each key of `next`, the list of keys to insert before that key in
	    // the combined list
	    var nextKeysPending = {};

	    var pendingKeys = [];
	    for (var prevKey in prev) {
	      if (next.hasOwnProperty(prevKey)) {
	        if (pendingKeys.length) {
	          nextKeysPending[prevKey] = pendingKeys;
	          pendingKeys = [];
	        }
	      } else {
	        pendingKeys.push(prevKey);
	      }
	    }

	    var i;
	    var childMapping = {};
	    for (var nextKey in next) {
	      if (nextKeysPending.hasOwnProperty(nextKey)) {
	        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	          var pendingNextKey = nextKeysPending[nextKey][i];
	          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(
	            pendingNextKey
	          );
	        }
	      }
	      childMapping[nextKey] = getValueForKey(nextKey);
	    }

	    // Finally, add the keys which didn't appear before any key in `next`
	    for (i = 0; i < pendingKeys.length; i++) {
	      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	    }

	    return childMapping;
	  }
	};

	module.exports = ReactTransitionChildMapping;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CallbackQueue
	 */

	"use strict";

	var PooledClass = __webpack_require__(89);

	var assign = __webpack_require__(79);
	var invariant = __webpack_require__(31);

	/**
	 * A specialized pseudo-event module to help keep track of components waiting to
	 * be notified when their DOM representations are available for use.
	 *
	 * This implements `PooledClass`, so you should never need to instantiate this.
	 * Instead, use `CallbackQueue.getPooled()`.
	 *
	 * @class ReactMountReady
	 * @implements PooledClass
	 * @internal
	 */
	function CallbackQueue() {
	  this._callbacks = null;
	  this._contexts = null;
	}

	assign(CallbackQueue.prototype, {

	  /**
	   * Enqueues a callback to be invoked when `notifyAll` is invoked.
	   *
	   * @param {function} callback Invoked when `notifyAll` is invoked.
	   * @param {?object} context Context to call `callback` with.
	   * @internal
	   */
	  enqueue: function(callback, context) {
	    this._callbacks = this._callbacks || [];
	    this._contexts = this._contexts || [];
	    this._callbacks.push(callback);
	    this._contexts.push(context);
	  },

	  /**
	   * Invokes all enqueued callbacks and clears the queue. This is invoked after
	   * the DOM representation of a component has been created or updated.
	   *
	   * @internal
	   */
	  notifyAll: function() {
	    var callbacks = this._callbacks;
	    var contexts = this._contexts;
	    if (callbacks) {
	      ("production" !== (undefined) ? invariant(
	        callbacks.length === contexts.length,
	        "Mismatched list of contexts in callback queue"
	      ) : invariant(callbacks.length === contexts.length));
	      this._callbacks = null;
	      this._contexts = null;
	      for (var i = 0, l = callbacks.length; i < l; i++) {
	        callbacks[i].call(contexts[i]);
	      }
	      callbacks.length = 0;
	      contexts.length = 0;
	    }
	  },

	  /**
	   * Resets the internal queue.
	   *
	   * @internal
	   */
	  reset: function() {
	    this._callbacks = null;
	    this._contexts = null;
	  },

	  /**
	   * `PooledClass` looks for this.
	   */
	  destructor: function() {
	    this.reset();
	  }

	});

	PooledClass.addPoolingTo(CallbackQueue);

	module.exports = CallbackQueue;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule PooledClass
	 */

	"use strict";

	var invariant = __webpack_require__(31);

	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function(copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};

	var twoArgumentPooler = function(a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};

	var threeArgumentPooler = function(a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};

	var fiveArgumentPooler = function(a1, a2, a3, a4, a5) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4, a5);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4, a5);
	  }
	};

	var standardReleaser = function(instance) {
	  var Klass = this;
	  ("production" !== (undefined) ? invariant(
	    instance instanceof Klass,
	    'Trying to release an instance into a pool of a different type.'
	  ) : invariant(instance instanceof Klass));
	  if (instance.destructor) {
	    instance.destructor();
	  }
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};

	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;

	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances (optional).
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function(CopyConstructor, pooler) {
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};

	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fiveArgumentPooler: fiveArgumentPooler
	};

	module.exports = PooledClass;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Transaction
	 */

	"use strict";

	var invariant = __webpack_require__(31);

	/**
	 * `Transaction` creates a black box that is able to wrap any method such that
	 * certain invariants are maintained before and after the method is invoked
	 * (Even if an exception is thrown while invoking the wrapped method). Whoever
	 * instantiates a transaction can provide enforcers of the invariants at
	 * creation time. The `Transaction` class itself will supply one additional
	 * automatic invariant for you - the invariant that any transaction instance
	 * should not be run while it is already being run. You would typically create a
	 * single instance of a `Transaction` for reuse multiple times, that potentially
	 * is used to wrap several different methods. Wrappers are extremely simple -
	 * they only require implementing two methods.
	 *
	 * <pre>
	 *                       wrappers (injected at creation time)
	 *                                      +        +
	 *                                      |        |
	 *                    +-----------------|--------|--------------+
	 *                    |                 v        |              |
	 *                    |      +---------------+   |              |
	 *                    |   +--|    wrapper1   |---|----+         |
	 *                    |   |  +---------------+   v    |         |
	 *                    |   |          +-------------+  |         |
	 *                    |   |     +----|   wrapper2  |--------+   |
	 *                    |   |     |    +-------------+  |     |   |
	 *                    |   |     |                     |     |   |
	 *                    |   v     v                     v     v   | wrapper
	 *                    | +---+ +---+   +---------+   +---+ +---+ | invariants
	 * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained
	 * +----------------->|-|---|-|---|-->|anyMethod|---|---|-|---|-|-------->
	 *                    | |   | |   |   |         |   |   | |   | |
	 *                    | |   | |   |   |         |   |   | |   | |
	 *                    | |   | |   |   |         |   |   | |   | |
	 *                    | +---+ +---+   +---------+   +---+ +---+ |
	 *                    |  initialize                    close    |
	 *                    +-----------------------------------------+
	 * </pre>
	 *
	 * Use cases:
	 * - Preserving the input selection ranges before/after reconciliation.
	 *   Restoring selection even in the event of an unexpected error.
	 * - Deactivating events while rearranging the DOM, preventing blurs/focuses,
	 *   while guaranteeing that afterwards, the event system is reactivated.
	 * - Flushing a queue of collected DOM mutations to the main UI thread after a
	 *   reconciliation takes place in a worker thread.
	 * - Invoking any collected `componentDidUpdate` callbacks after rendering new
	 *   content.
	 * - (Future use case): Wrapping particular flushes of the `ReactWorker` queue
	 *   to preserve the `scrollTop` (an automatic scroll aware DOM).
	 * - (Future use case): Layout calculations before and after DOM upates.
	 *
	 * Transactional plugin API:
	 * - A module that has an `initialize` method that returns any precomputation.
	 * - and a `close` method that accepts the precomputation. `close` is invoked
	 *   when the wrapped process is completed, or has failed.
	 *
	 * @param {Array<TransactionalWrapper>} transactionWrapper Wrapper modules
	 * that implement `initialize` and `close`.
	 * @return {Transaction} Single transaction for reuse in thread.
	 *
	 * @class Transaction
	 */
	var Mixin = {
	  /**
	   * Sets up this instance so that it is prepared for collecting metrics. Does
	   * so such that this setup method may be used on an instance that is already
	   * initialized, in a way that does not consume additional memory upon reuse.
	   * That can be useful if you decide to make your subclass of this mixin a
	   * "PooledClass".
	   */
	  reinitializeTransaction: function() {
	    this.transactionWrappers = this.getTransactionWrappers();
	    if (!this.wrapperInitData) {
	      this.wrapperInitData = [];
	    } else {
	      this.wrapperInitData.length = 0;
	    }
	    this._isInTransaction = false;
	  },

	  _isInTransaction: false,

	  /**
	   * @abstract
	   * @return {Array<TransactionWrapper>} Array of transaction wrappers.
	   */
	  getTransactionWrappers: null,

	  isInTransaction: function() {
	    return !!this._isInTransaction;
	  },

	  /**
	   * Executes the function within a safety window. Use this for the top level
	   * methods that result in large amounts of computation/mutations that would
	   * need to be safety checked.
	   *
	   * @param {function} method Member of scope to call.
	   * @param {Object} scope Scope to invoke from.
	   * @param {Object?=} args... Arguments to pass to the method (optional).
	   *                           Helps prevent need to bind in many cases.
	   * @return Return value from `method`.
	   */
	  perform: function(method, scope, a, b, c, d, e, f) {
	    ("production" !== (undefined) ? invariant(
	      !this.isInTransaction(),
	      'Transaction.perform(...): Cannot initialize a transaction when there ' +
	      'is already an outstanding transaction.'
	    ) : invariant(!this.isInTransaction()));
	    var errorThrown;
	    var ret;
	    try {
	      this._isInTransaction = true;
	      // Catching errors makes debugging more difficult, so we start with
	      // errorThrown set to true before setting it to false after calling
	      // close -- if it's still set to true in the finally block, it means
	      // one of these calls threw.
	      errorThrown = true;
	      this.initializeAll(0);
	      ret = method.call(scope, a, b, c, d, e, f);
	      errorThrown = false;
	    } finally {
	      try {
	        if (errorThrown) {
	          // If `method` throws, prefer to show that stack trace over any thrown
	          // by invoking `closeAll`.
	          try {
	            this.closeAll(0);
	          } catch (err) {
	          }
	        } else {
	          // Since `method` didn't throw, we don't want to silence the exception
	          // here.
	          this.closeAll(0);
	        }
	      } finally {
	        this._isInTransaction = false;
	      }
	    }
	    return ret;
	  },

	  initializeAll: function(startIndex) {
	    var transactionWrappers = this.transactionWrappers;
	    for (var i = startIndex; i < transactionWrappers.length; i++) {
	      var wrapper = transactionWrappers[i];
	      try {
	        // Catching errors makes debugging more difficult, so we start with the
	        // OBSERVED_ERROR state before overwriting it with the real return value
	        // of initialize -- if it's still set to OBSERVED_ERROR in the finally
	        // block, it means wrapper.initialize threw.
	        this.wrapperInitData[i] = Transaction.OBSERVED_ERROR;
	        this.wrapperInitData[i] = wrapper.initialize ?
	          wrapper.initialize.call(this) :
	          null;
	      } finally {
	        if (this.wrapperInitData[i] === Transaction.OBSERVED_ERROR) {
	          // The initializer for wrapper i threw an error; initialize the
	          // remaining wrappers but silence any exceptions from them to ensure
	          // that the first error is the one to bubble up.
	          try {
	            this.initializeAll(i + 1);
	          } catch (err) {
	          }
	        }
	      }
	    }
	  },

	  /**
	   * Invokes each of `this.transactionWrappers.close[i]` functions, passing into
	   * them the respective return values of `this.transactionWrappers.init[i]`
	   * (`close`rs that correspond to initializers that failed will not be
	   * invoked).
	   */
	  closeAll: function(startIndex) {
	    ("production" !== (undefined) ? invariant(
	      this.isInTransaction(),
	      'Transaction.closeAll(): Cannot close transaction when none are open.'
	    ) : invariant(this.isInTransaction()));
	    var transactionWrappers = this.transactionWrappers;
	    for (var i = startIndex; i < transactionWrappers.length; i++) {
	      var wrapper = transactionWrappers[i];
	      var initData = this.wrapperInitData[i];
	      var errorThrown;
	      try {
	        // Catching errors makes debugging more difficult, so we start with
	        // errorThrown set to true before setting it to false after calling
	        // close -- if it's still set to true in the finally block, it means
	        // wrapper.close threw.
	        errorThrown = true;
	        if (initData !== Transaction.OBSERVED_ERROR) {
	          wrapper.close && wrapper.close.call(this, initData);
	        }
	        errorThrown = false;
	      } finally {
	        if (errorThrown) {
	          // The closer for wrapper i threw an error; close the remaining
	          // wrappers but silence any exceptions from them to ensure that the
	          // first error is the one to bubble up.
	          try {
	            this.closeAll(i + 1);
	          } catch (e) {
	          }
	        }
	      }
	    }
	    this.wrapperInitData.length = 0;
	  }
	};

	var Transaction = {

	  Mixin: Mixin,

	  /**
	   * Token to look for to determine if an error occured.
	   */
	  OBSERVED_ERROR: {}

	};

	module.exports = Transaction;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMProperty
	 * @typechecks static-only
	 */

	/*jslint bitwise: true */

	"use strict";

	var invariant = __webpack_require__(31);

	function checkMask(value, bitmask) {
	  return (value & bitmask) === bitmask;
	}

	var DOMPropertyInjection = {
	  /**
	   * Mapping from normalized, camelcased property names to a configuration that
	   * specifies how the associated DOM property should be accessed or rendered.
	   */
	  MUST_USE_ATTRIBUTE: 0x1,
	  MUST_USE_PROPERTY: 0x2,
	  HAS_SIDE_EFFECTS: 0x4,
	  HAS_BOOLEAN_VALUE: 0x8,
	  HAS_NUMERIC_VALUE: 0x10,
	  HAS_POSITIVE_NUMERIC_VALUE: 0x20 | 0x10,
	  HAS_OVERLOADED_BOOLEAN_VALUE: 0x40,

	  /**
	   * Inject some specialized knowledge about the DOM. This takes a config object
	   * with the following properties:
	   *
	   * isCustomAttribute: function that given an attribute name will return true
	   * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
	   * attributes where it's impossible to enumerate all of the possible
	   * attribute names,
	   *
	   * Properties: object mapping DOM property name to one of the
	   * DOMPropertyInjection constants or null. If your attribute isn't in here,
	   * it won't get written to the DOM.
	   *
	   * DOMAttributeNames: object mapping React attribute name to the DOM
	   * attribute name. Attribute names not specified use the **lowercase**
	   * normalized name.
	   *
	   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
	   * Property names not specified use the normalized name.
	   *
	   * DOMMutationMethods: Properties that require special mutation methods. If
	   * `value` is undefined, the mutation method should unset the property.
	   *
	   * @param {object} domPropertyConfig the config as described above.
	   */
	  injectDOMPropertyConfig: function(domPropertyConfig) {
	    var Properties = domPropertyConfig.Properties || {};
	    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
	    var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
	    var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};

	    if (domPropertyConfig.isCustomAttribute) {
	      DOMProperty._isCustomAttributeFunctions.push(
	        domPropertyConfig.isCustomAttribute
	      );
	    }

	    for (var propName in Properties) {
	      ("production" !== (undefined) ? invariant(
	        !DOMProperty.isStandardName.hasOwnProperty(propName),
	        'injectDOMPropertyConfig(...): You\'re trying to inject DOM property ' +
	        '\'%s\' which has already been injected. You may be accidentally ' +
	        'injecting the same DOM property config twice, or you may be ' +
	        'injecting two configs that have conflicting property names.',
	        propName
	      ) : invariant(!DOMProperty.isStandardName.hasOwnProperty(propName)));

	      DOMProperty.isStandardName[propName] = true;

	      var lowerCased = propName.toLowerCase();
	      DOMProperty.getPossibleStandardName[lowerCased] = propName;

	      if (DOMAttributeNames.hasOwnProperty(propName)) {
	        var attributeName = DOMAttributeNames[propName];
	        DOMProperty.getPossibleStandardName[attributeName] = propName;
	        DOMProperty.getAttributeName[propName] = attributeName;
	      } else {
	        DOMProperty.getAttributeName[propName] = lowerCased;
	      }

	      DOMProperty.getPropertyName[propName] =
	        DOMPropertyNames.hasOwnProperty(propName) ?
	          DOMPropertyNames[propName] :
	          propName;

	      if (DOMMutationMethods.hasOwnProperty(propName)) {
	        DOMProperty.getMutationMethod[propName] = DOMMutationMethods[propName];
	      } else {
	        DOMProperty.getMutationMethod[propName] = null;
	      }

	      var propConfig = Properties[propName];
	      DOMProperty.mustUseAttribute[propName] =
	        checkMask(propConfig, DOMPropertyInjection.MUST_USE_ATTRIBUTE);
	      DOMProperty.mustUseProperty[propName] =
	        checkMask(propConfig, DOMPropertyInjection.MUST_USE_PROPERTY);
	      DOMProperty.hasSideEffects[propName] =
	        checkMask(propConfig, DOMPropertyInjection.HAS_SIDE_EFFECTS);
	      DOMProperty.hasBooleanValue[propName] =
	        checkMask(propConfig, DOMPropertyInjection.HAS_BOOLEAN_VALUE);
	      DOMProperty.hasNumericValue[propName] =
	        checkMask(propConfig, DOMPropertyInjection.HAS_NUMERIC_VALUE);
	      DOMProperty.hasPositiveNumericValue[propName] =
	        checkMask(propConfig, DOMPropertyInjection.HAS_POSITIVE_NUMERIC_VALUE);
	      DOMProperty.hasOverloadedBooleanValue[propName] =
	        checkMask(propConfig, DOMPropertyInjection.HAS_OVERLOADED_BOOLEAN_VALUE);

	      ("production" !== (undefined) ? invariant(
	        !DOMProperty.mustUseAttribute[propName] ||
	          !DOMProperty.mustUseProperty[propName],
	        'DOMProperty: Cannot require using both attribute and property: %s',
	        propName
	      ) : invariant(!DOMProperty.mustUseAttribute[propName] ||
	        !DOMProperty.mustUseProperty[propName]));
	      ("production" !== (undefined) ? invariant(
	        DOMProperty.mustUseProperty[propName] ||
	          !DOMProperty.hasSideEffects[propName],
	        'DOMProperty: Properties that have side effects must use property: %s',
	        propName
	      ) : invariant(DOMProperty.mustUseProperty[propName] ||
	        !DOMProperty.hasSideEffects[propName]));
	      ("production" !== (undefined) ? invariant(
	        !!DOMProperty.hasBooleanValue[propName] +
	          !!DOMProperty.hasNumericValue[propName] +
	          !!DOMProperty.hasOverloadedBooleanValue[propName] <= 1,
	        'DOMProperty: Value can be one of boolean, overloaded boolean, or ' +
	        'numeric value, but not a combination: %s',
	        propName
	      ) : invariant(!!DOMProperty.hasBooleanValue[propName] +
	        !!DOMProperty.hasNumericValue[propName] +
	        !!DOMProperty.hasOverloadedBooleanValue[propName] <= 1));
	    }
	  }
	};
	var defaultValueCache = {};

	/**
	 * DOMProperty exports lookup objects that can be used like functions:
	 *
	 *   > DOMProperty.isValid['id']
	 *   true
	 *   > DOMProperty.isValid['foobar']
	 *   undefined
	 *
	 * Although this may be confusing, it performs better in general.
	 *
	 * @see http://jsperf.com/key-exists
	 * @see http://jsperf.com/key-missing
	 */
	var DOMProperty = {

	  ID_ATTRIBUTE_NAME: 'data-reactid',

	  /**
	   * Checks whether a property name is a standard property.
	   * @type {Object}
	   */
	  isStandardName: {},

	  /**
	   * Mapping from lowercase property names to the properly cased version, used
	   * to warn in the case of missing properties.
	   * @type {Object}
	   */
	  getPossibleStandardName: {},

	  /**
	   * Mapping from normalized names to attribute names that differ. Attribute
	   * names are used when rendering markup or with `*Attribute()`.
	   * @type {Object}
	   */
	  getAttributeName: {},

	  /**
	   * Mapping from normalized names to properties on DOM node instances.
	   * (This includes properties that mutate due to external factors.)
	   * @type {Object}
	   */
	  getPropertyName: {},

	  /**
	   * Mapping from normalized names to mutation methods. This will only exist if
	   * mutation cannot be set simply by the property or `setAttribute()`.
	   * @type {Object}
	   */
	  getMutationMethod: {},

	  /**
	   * Whether the property must be accessed and mutated as an object property.
	   * @type {Object}
	   */
	  mustUseAttribute: {},

	  /**
	   * Whether the property must be accessed and mutated using `*Attribute()`.
	   * (This includes anything that fails `<propName> in <element>`.)
	   * @type {Object}
	   */
	  mustUseProperty: {},

	  /**
	   * Whether or not setting a value causes side effects such as triggering
	   * resources to be loaded or text selection changes. We must ensure that
	   * the value is only set if it has changed.
	   * @type {Object}
	   */
	  hasSideEffects: {},

	  /**
	   * Whether the property should be removed when set to a falsey value.
	   * @type {Object}
	   */
	  hasBooleanValue: {},

	  /**
	   * Whether the property must be numeric or parse as a
	   * numeric and should be removed when set to a falsey value.
	   * @type {Object}
	   */
	  hasNumericValue: {},

	  /**
	   * Whether the property must be positive numeric or parse as a positive
	   * numeric and should be removed when set to a falsey value.
	   * @type {Object}
	   */
	  hasPositiveNumericValue: {},

	  /**
	   * Whether the property can be used as a flag as well as with a value. Removed
	   * when strictly equal to false; present without a value when strictly equal
	   * to true; present with a value otherwise.
	   * @type {Object}
	   */
	  hasOverloadedBooleanValue: {},

	  /**
	   * All of the isCustomAttribute() functions that have been injected.
	   */
	  _isCustomAttributeFunctions: [],

	  /**
	   * Checks whether a property name is a custom attribute.
	   * @method
	   */
	  isCustomAttribute: function(attributeName) {
	    for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
	      var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
	      if (isCustomAttributeFn(attributeName)) {
	        return true;
	      }
	    }
	    return false;
	  },

	  /**
	   * Returns the default property value for a DOM property (i.e., not an
	   * attribute). Most default values are '' or false, but not all. Worse yet,
	   * some (in particular, `type`) vary depending on the type of element.
	   *
	   * TODO: Is it better to grab all the possible properties when creating an
	   * element to avoid having to create the same element twice?
	   */
	  getDefaultValueForProperty: function(nodeName, prop) {
	    var nodeDefaults = defaultValueCache[nodeName];
	    var testElement;
	    if (!nodeDefaults) {
	      defaultValueCache[nodeName] = nodeDefaults = {};
	    }
	    if (!(prop in nodeDefaults)) {
	      testElement = document.createElement(nodeName);
	      nodeDefaults[prop] = testElement[prop];
	    }
	    return nodeDefaults[prop];
	  },

	  injection: DOMPropertyInjection
	};

	module.exports = DOMProperty;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultPerfAnalysis
	 */

	var assign = __webpack_require__(79);

	// Don't try to save users less than 1.2ms (a number I made up)
	var DONT_CARE_THRESHOLD = 1.2;
	var DOM_OPERATION_TYPES = {
	  'mountImageIntoNode': 'set innerHTML',
	  INSERT_MARKUP: 'set innerHTML',
	  MOVE_EXISTING: 'move',
	  REMOVE_NODE: 'remove',
	  TEXT_CONTENT: 'set textContent',
	  'updatePropertyByID': 'update attribute',
	  'deletePropertyByID': 'delete attribute',
	  'updateStylesByID': 'update styles',
	  'updateInnerHTMLByID': 'set innerHTML',
	  'dangerouslyReplaceNodeWithMarkupByID': 'replace'
	};

	function getTotalTime(measurements) {
	  // TODO: return number of DOM ops? could be misleading.
	  // TODO: measure dropped frames after reconcile?
	  // TODO: log total time of each reconcile and the top-level component
	  // class that triggered it.
	  var totalTime = 0;
	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    totalTime += measurement.totalTime;
	  }
	  return totalTime;
	}

	function getDOMSummary(measurements) {
	  var items = [];
	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    var id;

	    for (id in measurement.writes) {
	      measurement.writes[id].forEach(function(write) {
	        items.push({
	          id: id,
	          type: DOM_OPERATION_TYPES[write.type] || write.type,
	          args: write.args
	        });
	      });
	    }
	  }
	  return items;
	}

	function getExclusiveSummary(measurements) {
	  var candidates = {};
	  var displayName;

	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    var allIDs = assign(
	      {},
	      measurement.exclusive,
	      measurement.inclusive
	    );

	    for (var id in allIDs) {
	      displayName = measurement.displayNames[id].current;

	      candidates[displayName] = candidates[displayName] || {
	        componentName: displayName,
	        inclusive: 0,
	        exclusive: 0,
	        render: 0,
	        count: 0
	      };
	      if (measurement.render[id]) {
	        candidates[displayName].render += measurement.render[id];
	      }
	      if (measurement.exclusive[id]) {
	        candidates[displayName].exclusive += measurement.exclusive[id];
	      }
	      if (measurement.inclusive[id]) {
	        candidates[displayName].inclusive += measurement.inclusive[id];
	      }
	      if (measurement.counts[id]) {
	        candidates[displayName].count += measurement.counts[id];
	      }
	    }
	  }

	  // Now make a sorted array with the results.
	  var arr = [];
	  for (displayName in candidates) {
	    if (candidates[displayName].exclusive >= DONT_CARE_THRESHOLD) {
	      arr.push(candidates[displayName]);
	    }
	  }

	  arr.sort(function(a, b) {
	    return b.exclusive - a.exclusive;
	  });

	  return arr;
	}

	function getInclusiveSummary(measurements, onlyClean) {
	  var candidates = {};
	  var inclusiveKey;

	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    var allIDs = assign(
	      {},
	      measurement.exclusive,
	      measurement.inclusive
	    );
	    var cleanComponents;

	    if (onlyClean) {
	      cleanComponents = getUnchangedComponents(measurement);
	    }

	    for (var id in allIDs) {
	      if (onlyClean && !cleanComponents[id]) {
	        continue;
	      }

	      var displayName = measurement.displayNames[id];

	      // Inclusive time is not useful for many components without knowing where
	      // they are instantiated. So we aggregate inclusive time with both the
	      // owner and current displayName as the key.
	      inclusiveKey = displayName.owner + ' > ' + displayName.current;

	      candidates[inclusiveKey] = candidates[inclusiveKey] || {
	        componentName: inclusiveKey,
	        time: 0,
	        count: 0
	      };

	      if (measurement.inclusive[id]) {
	        candidates[inclusiveKey].time += measurement.inclusive[id];
	      }
	      if (measurement.counts[id]) {
	        candidates[inclusiveKey].count += measurement.counts[id];
	      }
	    }
	  }

	  // Now make a sorted array with the results.
	  var arr = [];
	  for (inclusiveKey in candidates) {
	    if (candidates[inclusiveKey].time >= DONT_CARE_THRESHOLD) {
	      arr.push(candidates[inclusiveKey]);
	    }
	  }

	  arr.sort(function(a, b) {
	    return b.time - a.time;
	  });

	  return arr;
	}

	function getUnchangedComponents(measurement) {
	  // For a given reconcile, look at which components did not actually
	  // render anything to the DOM and return a mapping of their ID to
	  // the amount of time it took to render the entire subtree.
	  var cleanComponents = {};
	  var dirtyLeafIDs = Object.keys(measurement.writes);
	  var allIDs = assign({}, measurement.exclusive, measurement.inclusive);

	  for (var id in allIDs) {
	    var isDirty = false;
	    // For each component that rendered, see if a component that triggered
	    // a DOM op is in its subtree.
	    for (var i = 0; i < dirtyLeafIDs.length; i++) {
	      if (dirtyLeafIDs[i].indexOf(id) === 0) {
	        isDirty = true;
	        break;
	      }
	    }
	    if (!isDirty && measurement.counts[id] > 0) {
	      cleanComponents[id] = true;
	    }
	  }
	  return cleanComponents;
	}

	var ReactDefaultPerfAnalysis = {
	  getExclusiveSummary: getExclusiveSummary,
	  getInclusiveSummary: getInclusiveSummary,
	  getDOMSummary: getDOMSummary,
	  getTotalTime: getTotalTime
	};

	module.exports = ReactDefaultPerfAnalysis;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule performanceNow
	 * @typechecks
	 */

	var performance = __webpack_require__(165);

	/**
	 * Detect if we can use `window.performance.now()` and gracefully fallback to
	 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
	 * because of Facebook's testing infrastructure.
	 */
	if (!performance || !performance.now) {
	  performance = Date;
	}

	var performanceNow = performance.now.bind(performance);

	module.exports = performanceNow;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventConstants
	 */

	"use strict";

	var keyMirror = __webpack_require__(120);

	var PropagationPhases = keyMirror({bubbled: null, captured: null});

	/**
	 * Types of raw signals from the browser caught at the top level.
	 */
	var topLevelTypes = keyMirror({
	  topBlur: null,
	  topChange: null,
	  topClick: null,
	  topCompositionEnd: null,
	  topCompositionStart: null,
	  topCompositionUpdate: null,
	  topContextMenu: null,
	  topCopy: null,
	  topCut: null,
	  topDoubleClick: null,
	  topDrag: null,
	  topDragEnd: null,
	  topDragEnter: null,
	  topDragExit: null,
	  topDragLeave: null,
	  topDragOver: null,
	  topDragStart: null,
	  topDrop: null,
	  topError: null,
	  topFocus: null,
	  topInput: null,
	  topKeyDown: null,
	  topKeyPress: null,
	  topKeyUp: null,
	  topLoad: null,
	  topMouseDown: null,
	  topMouseMove: null,
	  topMouseOut: null,
	  topMouseOver: null,
	  topMouseUp: null,
	  topPaste: null,
	  topReset: null,
	  topScroll: null,
	  topSelectionChange: null,
	  topSubmit: null,
	  topTextInput: null,
	  topTouchCancel: null,
	  topTouchEnd: null,
	  topTouchMove: null,
	  topTouchStart: null,
	  topWheel: null
	});

	var EventConstants = {
	  topLevelTypes: topLevelTypes,
	  PropagationPhases: PropagationPhases
	};

	module.exports = EventConstants;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPluginHub
	 */

	"use strict";

	var EventPluginRegistry = __webpack_require__(166);
	var EventPluginUtils = __webpack_require__(61);

	var accumulateInto = __webpack_require__(167);
	var forEachAccumulated = __webpack_require__(168);
	var invariant = __webpack_require__(31);

	/**
	 * Internal store for event listeners
	 */
	var listenerBank = {};

	/**
	 * Internal queue of events that have accumulated their dispatches and are
	 * waiting to have their dispatches executed.
	 */
	var eventQueue = null;

	/**
	 * Dispatches an event and releases it back into the pool, unless persistent.
	 *
	 * @param {?object} event Synthetic event to be dispatched.
	 * @private
	 */
	var executeDispatchesAndRelease = function(event) {
	  if (event) {
	    var executeDispatch = EventPluginUtils.executeDispatch;
	    // Plugins can provide custom behavior when dispatching events.
	    var PluginModule = EventPluginRegistry.getPluginModuleForEvent(event);
	    if (PluginModule && PluginModule.executeDispatch) {
	      executeDispatch = PluginModule.executeDispatch;
	    }
	    EventPluginUtils.executeDispatchesInOrder(event, executeDispatch);

	    if (!event.isPersistent()) {
	      event.constructor.release(event);
	    }
	  }
	};

	/**
	 * - `InstanceHandle`: [required] Module that performs logical traversals of DOM
	 *   hierarchy given ids of the logical DOM elements involved.
	 */
	var InstanceHandle = null;

	function validateInstanceHandle() {
	  var invalid = !InstanceHandle||
	    !InstanceHandle.traverseTwoPhase ||
	    !InstanceHandle.traverseEnterLeave;
	  if (invalid) {
	    throw new Error('InstanceHandle not injected before use!');
	  }
	}

	/**
	 * This is a unified interface for event plugins to be installed and configured.
	 *
	 * Event plugins can implement the following properties:
	 *
	 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
	 *     Required. When a top-level event is fired, this method is expected to
	 *     extract synthetic events that will in turn be queued and dispatched.
	 *
	 *   `eventTypes` {object}
	 *     Optional, plugins that fire events must publish a mapping of registration
	 *     names that are used to register listeners. Values of this mapping must
	 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
	 *
	 *   `executeDispatch` {function(object, function, string)}
	 *     Optional, allows plugins to override how an event gets dispatched. By
	 *     default, the listener is simply invoked.
	 *
	 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
	 *
	 * @public
	 */
	var EventPluginHub = {

	  /**
	   * Methods for injecting dependencies.
	   */
	  injection: {

	    /**
	     * @param {object} InjectedMount
	     * @public
	     */
	    injectMount: EventPluginUtils.injection.injectMount,

	    /**
	     * @param {object} InjectedInstanceHandle
	     * @public
	     */
	    injectInstanceHandle: function(InjectedInstanceHandle) {
	      InstanceHandle = InjectedInstanceHandle;
	      if ("production" !== (undefined)) {
	        validateInstanceHandle();
	      }
	    },

	    getInstanceHandle: function() {
	      if ("production" !== (undefined)) {
	        validateInstanceHandle();
	      }
	      return InstanceHandle;
	    },

	    /**
	     * @param {array} InjectedEventPluginOrder
	     * @public
	     */
	    injectEventPluginOrder: EventPluginRegistry.injectEventPluginOrder,

	    /**
	     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	     */
	    injectEventPluginsByName: EventPluginRegistry.injectEventPluginsByName

	  },

	  eventNameDispatchConfigs: EventPluginRegistry.eventNameDispatchConfigs,

	  registrationNameModules: EventPluginRegistry.registrationNameModules,

	  /**
	   * Stores `listener` at `listenerBank[registrationName][id]`. Is idempotent.
	   *
	   * @param {string} id ID of the DOM element.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @param {?function} listener The callback to store.
	   */
	  putListener: function(id, registrationName, listener) {
	    ("production" !== (undefined) ? invariant(
	      !listener || typeof listener === 'function',
	      'Expected %s listener to be a function, instead got type %s',
	      registrationName, typeof listener
	    ) : invariant(!listener || typeof listener === 'function'));

	    var bankForRegistrationName =
	      listenerBank[registrationName] || (listenerBank[registrationName] = {});
	    bankForRegistrationName[id] = listener;
	  },

	  /**
	   * @param {string} id ID of the DOM element.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @return {?function} The stored callback.
	   */
	  getListener: function(id, registrationName) {
	    var bankForRegistrationName = listenerBank[registrationName];
	    return bankForRegistrationName && bankForRegistrationName[id];
	  },

	  /**
	   * Deletes a listener from the registration bank.
	   *
	   * @param {string} id ID of the DOM element.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   */
	  deleteListener: function(id, registrationName) {
	    var bankForRegistrationName = listenerBank[registrationName];
	    if (bankForRegistrationName) {
	      delete bankForRegistrationName[id];
	    }
	  },

	  /**
	   * Deletes all listeners for the DOM element with the supplied ID.
	   *
	   * @param {string} id ID of the DOM element.
	   */
	  deleteAllListeners: function(id) {
	    for (var registrationName in listenerBank) {
	      delete listenerBank[registrationName][id];
	    }
	  },

	  /**
	   * Allows registered plugins an opportunity to extract events from top-level
	   * native browser events.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @internal
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {
	    var events;
	    var plugins = EventPluginRegistry.plugins;
	    for (var i = 0, l = plugins.length; i < l; i++) {
	      // Not every plugin in the ordering may be loaded at runtime.
	      var possiblePlugin = plugins[i];
	      if (possiblePlugin) {
	        var extractedEvents = possiblePlugin.extractEvents(
	          topLevelType,
	          topLevelTarget,
	          topLevelTargetID,
	          nativeEvent
	        );
	        if (extractedEvents) {
	          events = accumulateInto(events, extractedEvents);
	        }
	      }
	    }
	    return events;
	  },

	  /**
	   * Enqueues a synthetic event that should be dispatched when
	   * `processEventQueue` is invoked.
	   *
	   * @param {*} events An accumulation of synthetic events.
	   * @internal
	   */
	  enqueueEvents: function(events) {
	    if (events) {
	      eventQueue = accumulateInto(eventQueue, events);
	    }
	  },

	  /**
	   * Dispatches all synthetic events on the event queue.
	   *
	   * @internal
	   */
	  processEventQueue: function() {
	    // Set `eventQueue` to null before processing it so that we can tell if more
	    // events get enqueued while processing.
	    var processingEventQueue = eventQueue;
	    eventQueue = null;
	    forEachAccumulated(processingEventQueue, executeDispatchesAndRelease);
	    ("production" !== (undefined) ? invariant(
	      !eventQueue,
	      'processEventQueue(): Additional events were enqueued while processing ' +
	      'an event queue. Support for this has not yet been implemented.'
	    ) : invariant(!eventQueue));
	  },

	  /**
	   * These are needed for tests only. Do not use!
	   */
	  __purge: function() {
	    listenerBank = {};
	  },

	  __getListenerBank: function() {
	    return listenerBank;
	  }

	};

	module.exports = EventPluginHub;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPropagators
	 */

	"use strict";

	var EventConstants = __webpack_require__(94);
	var EventPluginHub = __webpack_require__(95);

	var accumulateInto = __webpack_require__(167);
	var forEachAccumulated = __webpack_require__(168);

	var PropagationPhases = EventConstants.PropagationPhases;
	var getListener = EventPluginHub.getListener;

	/**
	 * Some event types have a notion of different registration names for different
	 * "phases" of propagation. This finds listeners by a given phase.
	 */
	function listenerAtPhase(id, event, propagationPhase) {
	  var registrationName =
	    event.dispatchConfig.phasedRegistrationNames[propagationPhase];
	  return getListener(id, registrationName);
	}

	/**
	 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
	 * here, allows us to not have to bind or create functions for each event.
	 * Mutating the event's members allows us to not have to create a wrapping
	 * "dispatch" object that pairs the event with the listener.
	 */
	function accumulateDirectionalDispatches(domID, upwards, event) {
	  if ("production" !== (undefined)) {
	    if (!domID) {
	      throw new Error('Dispatching id must not be null');
	    }
	  }
	  var phase = upwards ? PropagationPhases.bubbled : PropagationPhases.captured;
	  var listener = listenerAtPhase(domID, event, phase);
	  if (listener) {
	    event._dispatchListeners =
	      accumulateInto(event._dispatchListeners, listener);
	    event._dispatchIDs = accumulateInto(event._dispatchIDs, domID);
	  }
	}

	/**
	 * Collect dispatches (must be entirely collected before dispatching - see unit
	 * tests). Lazily allocate the array to conserve memory.  We must loop through
	 * each event and perform the traversal for each one. We can not perform a
	 * single traversal for the entire collection of events because each event may
	 * have a different target.
	 */
	function accumulateTwoPhaseDispatchesSingle(event) {
	  if (event && event.dispatchConfig.phasedRegistrationNames) {
	    EventPluginHub.injection.getInstanceHandle().traverseTwoPhase(
	      event.dispatchMarker,
	      accumulateDirectionalDispatches,
	      event
	    );
	  }
	}


	/**
	 * Accumulates without regard to direction, does not look for phased
	 * registration names. Same as `accumulateDirectDispatchesSingle` but without
	 * requiring that the `dispatchMarker` be the same as the dispatched ID.
	 */
	function accumulateDispatches(id, ignoredDirection, event) {
	  if (event && event.dispatchConfig.registrationName) {
	    var registrationName = event.dispatchConfig.registrationName;
	    var listener = getListener(id, registrationName);
	    if (listener) {
	      event._dispatchListeners =
	        accumulateInto(event._dispatchListeners, listener);
	      event._dispatchIDs = accumulateInto(event._dispatchIDs, id);
	    }
	  }
	}

	/**
	 * Accumulates dispatches on an `SyntheticEvent`, but only for the
	 * `dispatchMarker`.
	 * @param {SyntheticEvent} event
	 */
	function accumulateDirectDispatchesSingle(event) {
	  if (event && event.dispatchConfig.registrationName) {
	    accumulateDispatches(event.dispatchMarker, null, event);
	  }
	}

	function accumulateTwoPhaseDispatches(events) {
	  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
	}

	function accumulateEnterLeaveDispatches(leave, enter, fromID, toID) {
	  EventPluginHub.injection.getInstanceHandle().traverseEnterLeave(
	    fromID,
	    toID,
	    accumulateDispatches,
	    leave,
	    enter
	  );
	}


	function accumulateDirectDispatches(events) {
	  forEachAccumulated(events, accumulateDirectDispatchesSingle);
	}



	/**
	 * A small set of propagation patterns, each of which will accept a small amount
	 * of information, and generate a set of "dispatch ready event objects" - which
	 * are sets of events that have already been annotated with a set of dispatched
	 * listener functions/ids. The API is designed this way to discourage these
	 * propagation strategies from actually executing the dispatches, since we
	 * always want to collect the entire set of dispatches before executing event a
	 * single one.
	 *
	 * @constructor EventPropagators
	 */
	var EventPropagators = {
	  accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
	  accumulateDirectDispatches: accumulateDirectDispatches,
	  accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches
	};

	module.exports = EventPropagators;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactBrowserEventEmitter
	 * @typechecks static-only
	 */

	"use strict";

	var EventConstants = __webpack_require__(94);
	var EventPluginHub = __webpack_require__(95);
	var EventPluginRegistry = __webpack_require__(166);
	var ReactEventEmitterMixin = __webpack_require__(169);
	var ViewportMetrics = __webpack_require__(170);

	var assign = __webpack_require__(79);
	var isEventSupported = __webpack_require__(131);

	/**
	 * Summary of `ReactBrowserEventEmitter` event handling:
	 *
	 *  - Top-level delegation is used to trap most native browser events. This
	 *    may only occur in the main thread and is the responsibility of
	 *    ReactEventListener, which is injected and can therefore support pluggable
	 *    event sources. This is the only work that occurs in the main thread.
	 *
	 *  - We normalize and de-duplicate events to account for browser quirks. This
	 *    may be done in the worker thread.
	 *
	 *  - Forward these native events (with the associated top-level type used to
	 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
	 *    to extract any synthetic events.
	 *
	 *  - The `EventPluginHub` will then process each event by annotating them with
	 *    "dispatches", a sequence of listeners and IDs that care about that event.
	 *
	 *  - The `EventPluginHub` then dispatches the events.
	 *
	 * Overview of React and the event system:
	 *
	 * +------------+    .
	 * |    DOM     |    .
	 * +------------+    .
	 *       |           .
	 *       v           .
	 * +------------+    .
	 * | ReactEvent |    .
	 * |  Listener  |    .
	 * +------------+    .                         +-----------+
	 *       |           .               +--------+|SimpleEvent|
	 *       |           .               |         |Plugin     |
	 * +-----|------+    .               v         +-----------+
	 * |     |      |    .    +--------------+                    +------------+
	 * |     +-----------.--->|EventPluginHub|                    |    Event   |
	 * |            |    .    |              |     +-----------+  | Propagators|
	 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
	 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
	 * |            |    .    |              |     +-----------+  |  utilities |
	 * |     +-----------.--->|              |                    +------------+
	 * |     |      |    .    +--------------+
	 * +-----|------+    .                ^        +-----------+
	 *       |           .                |        |Enter/Leave|
	 *       +           .                +-------+|Plugin     |
	 * +-------------+   .                         +-----------+
	 * | application |   .
	 * |-------------|   .
	 * |             |   .
	 * |             |   .
	 * +-------------+   .
	 *                   .
	 *    React Core     .  General Purpose Event Plugin System
	 */

	var alreadyListeningTo = {};
	var isMonitoringScrollValue = false;
	var reactTopListenersCounter = 0;

	// For events like 'submit' which don't consistently bubble (which we trap at a
	// lower node than `document`), binding at `document` would cause duplicate
	// events so we don't include them here
	var topEventMapping = {
	  topBlur: 'blur',
	  topChange: 'change',
	  topClick: 'click',
	  topCompositionEnd: 'compositionend',
	  topCompositionStart: 'compositionstart',
	  topCompositionUpdate: 'compositionupdate',
	  topContextMenu: 'contextmenu',
	  topCopy: 'copy',
	  topCut: 'cut',
	  topDoubleClick: 'dblclick',
	  topDrag: 'drag',
	  topDragEnd: 'dragend',
	  topDragEnter: 'dragenter',
	  topDragExit: 'dragexit',
	  topDragLeave: 'dragleave',
	  topDragOver: 'dragover',
	  topDragStart: 'dragstart',
	  topDrop: 'drop',
	  topFocus: 'focus',
	  topInput: 'input',
	  topKeyDown: 'keydown',
	  topKeyPress: 'keypress',
	  topKeyUp: 'keyup',
	  topMouseDown: 'mousedown',
	  topMouseMove: 'mousemove',
	  topMouseOut: 'mouseout',
	  topMouseOver: 'mouseover',
	  topMouseUp: 'mouseup',
	  topPaste: 'paste',
	  topScroll: 'scroll',
	  topSelectionChange: 'selectionchange',
	  topTextInput: 'textInput',
	  topTouchCancel: 'touchcancel',
	  topTouchEnd: 'touchend',
	  topTouchMove: 'touchmove',
	  topTouchStart: 'touchstart',
	  topWheel: 'wheel'
	};

	/**
	 * To ensure no conflicts with other potential React instances on the page
	 */
	var topListenersIDKey = "_reactListenersID" + String(Math.random()).slice(2);

	function getListeningForDocument(mountAt) {
	  // In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
	  // directly.
	  if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
	    mountAt[topListenersIDKey] = reactTopListenersCounter++;
	    alreadyListeningTo[mountAt[topListenersIDKey]] = {};
	  }
	  return alreadyListeningTo[mountAt[topListenersIDKey]];
	}

	/**
	 * `ReactBrowserEventEmitter` is used to attach top-level event listeners. For
	 * example:
	 *
	 *   ReactBrowserEventEmitter.putListener('myID', 'onClick', myFunction);
	 *
	 * This would allocate a "registration" of `('onClick', myFunction)` on 'myID'.
	 *
	 * @internal
	 */
	var ReactBrowserEventEmitter = assign({}, ReactEventEmitterMixin, {

	  /**
	   * Injectable event backend
	   */
	  ReactEventListener: null,

	  injection: {
	    /**
	     * @param {object} ReactEventListener
	     */
	    injectReactEventListener: function(ReactEventListener) {
	      ReactEventListener.setHandleTopLevel(
	        ReactBrowserEventEmitter.handleTopLevel
	      );
	      ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;
	    }
	  },

	  /**
	   * Sets whether or not any created callbacks should be enabled.
	   *
	   * @param {boolean} enabled True if callbacks should be enabled.
	   */
	  setEnabled: function(enabled) {
	    if (ReactBrowserEventEmitter.ReactEventListener) {
	      ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);
	    }
	  },

	  /**
	   * @return {boolean} True if callbacks are enabled.
	   */
	  isEnabled: function() {
	    return !!(
	      ReactBrowserEventEmitter.ReactEventListener &&
	      ReactBrowserEventEmitter.ReactEventListener.isEnabled()
	    );
	  },

	  /**
	   * We listen for bubbled touch events on the document object.
	   *
	   * Firefox v8.01 (and possibly others) exhibited strange behavior when
	   * mounting `onmousemove` events at some node that was not the document
	   * element. The symptoms were that if your mouse is not moving over something
	   * contained within that mount point (for example on the background) the
	   * top-level listeners for `onmousemove` won't be called. However, if you
	   * register the `mousemove` on the document object, then it will of course
	   * catch all `mousemove`s. This along with iOS quirks, justifies restricting
	   * top-level listeners to the document object only, at least for these
	   * movement types of events and possibly all events.
	   *
	   * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
	   *
	   * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
	   * they bubble to document.
	   *
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @param {object} contentDocumentHandle Document which owns the container
	   */
	  listenTo: function(registrationName, contentDocumentHandle) {
	    var mountAt = contentDocumentHandle;
	    var isListening = getListeningForDocument(mountAt);
	    var dependencies = EventPluginRegistry.
	      registrationNameDependencies[registrationName];

	    var topLevelTypes = EventConstants.topLevelTypes;
	    for (var i = 0, l = dependencies.length; i < l; i++) {
	      var dependency = dependencies[i];
	      if (!(
	            isListening.hasOwnProperty(dependency) &&
	            isListening[dependency]
	          )) {
	        if (dependency === topLevelTypes.topWheel) {
	          if (isEventSupported('wheel')) {
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	              topLevelTypes.topWheel,
	              'wheel',
	              mountAt
	            );
	          } else if (isEventSupported('mousewheel')) {
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	              topLevelTypes.topWheel,
	              'mousewheel',
	              mountAt
	            );
	          } else {
	            // Firefox needs to capture a different mouse scroll event.
	            // @see http://www.quirksmode.org/dom/events/tests/scroll.html
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	              topLevelTypes.topWheel,
	              'DOMMouseScroll',
	              mountAt
	            );
	          }
	        } else if (dependency === topLevelTypes.topScroll) {

	          if (isEventSupported('scroll', true)) {
	            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
	              topLevelTypes.topScroll,
	              'scroll',
	              mountAt
	            );
	          } else {
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	              topLevelTypes.topScroll,
	              'scroll',
	              ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE
	            );
	          }
	        } else if (dependency === topLevelTypes.topFocus ||
	            dependency === topLevelTypes.topBlur) {

	          if (isEventSupported('focus', true)) {
	            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
	              topLevelTypes.topFocus,
	              'focus',
	              mountAt
	            );
	            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
	              topLevelTypes.topBlur,
	              'blur',
	              mountAt
	            );
	          } else if (isEventSupported('focusin')) {
	            // IE has `focusin` and `focusout` events which bubble.
	            // @see http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	              topLevelTypes.topFocus,
	              'focusin',
	              mountAt
	            );
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	              topLevelTypes.topBlur,
	              'focusout',
	              mountAt
	            );
	          }

	          // to make sure blur and focus event listeners are only attached once
	          isListening[topLevelTypes.topBlur] = true;
	          isListening[topLevelTypes.topFocus] = true;
	        } else if (topEventMapping.hasOwnProperty(dependency)) {
	          ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	            dependency,
	            topEventMapping[dependency],
	            mountAt
	          );
	        }

	        isListening[dependency] = true;
	      }
	    }
	  },

	  trapBubbledEvent: function(topLevelType, handlerBaseName, handle) {
	    return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	      topLevelType,
	      handlerBaseName,
	      handle
	    );
	  },

	  trapCapturedEvent: function(topLevelType, handlerBaseName, handle) {
	    return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
	      topLevelType,
	      handlerBaseName,
	      handle
	    );
	  },

	  /**
	   * Listens to window scroll and resize events. We cache scroll values so that
	   * application code can access them without triggering reflows.
	   *
	   * NOTE: Scroll events do not bubble.
	   *
	   * @see http://www.quirksmode.org/dom/events/scroll.html
	   */
	  ensureScrollValueMonitoring: function(){
	    if (!isMonitoringScrollValue) {
	      var refresh = ViewportMetrics.refreshScrollValues;
	      ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
	      isMonitoringScrollValue = true;
	    }
	  },

	  eventNameDispatchConfigs: EventPluginHub.eventNameDispatchConfigs,

	  registrationNameModules: EventPluginHub.registrationNameModules,

	  putListener: EventPluginHub.putListener,

	  getListener: EventPluginHub.getListener,

	  deleteListener: EventPluginHub.deleteListener,

	  deleteAllListeners: EventPluginHub.deleteAllListeners

	});

	module.exports = ReactBrowserEventEmitter;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticEvent
	 * @typechecks static-only
	 */

	"use strict";

	var PooledClass = __webpack_require__(89);

	var assign = __webpack_require__(79);
	var emptyFunction = __webpack_require__(58);
	var getEventTarget = __webpack_require__(171);

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var EventInterface = {
	  type: null,
	  target: getEventTarget,
	  // currentTarget is set when dispatching; no use in copying it here
	  currentTarget: emptyFunction.thatReturnsNull,
	  eventPhase: null,
	  bubbles: null,
	  cancelable: null,
	  timeStamp: function(event) {
	    return event.timeStamp || Date.now();
	  },
	  defaultPrevented: null,
	  isTrusted: null
	};

	/**
	 * Synthetic events are dispatched by event plugins, typically in response to a
	 * top-level event delegation handler.
	 *
	 * These systems should generally use pooling to reduce the frequency of garbage
	 * collection. The system should check `isPersistent` to determine whether the
	 * event should be released into the pool after being dispatched. Users that
	 * need a persisted event should invoke `persist`.
	 *
	 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
	 * normalizing browser quirks. Subclasses do not necessarily have to implement a
	 * DOM interface; custom application-specific events can also subclass this.
	 *
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 */
	function SyntheticEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  this.dispatchConfig = dispatchConfig;
	  this.dispatchMarker = dispatchMarker;
	  this.nativeEvent = nativeEvent;

	  var Interface = this.constructor.Interface;
	  for (var propName in Interface) {
	    if (!Interface.hasOwnProperty(propName)) {
	      continue;
	    }
	    var normalize = Interface[propName];
	    if (normalize) {
	      this[propName] = normalize(nativeEvent);
	    } else {
	      this[propName] = nativeEvent[propName];
	    }
	  }

	  var defaultPrevented = nativeEvent.defaultPrevented != null ?
	    nativeEvent.defaultPrevented :
	    nativeEvent.returnValue === false;
	  if (defaultPrevented) {
	    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
	  } else {
	    this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
	  }
	  this.isPropagationStopped = emptyFunction.thatReturnsFalse;
	}

	assign(SyntheticEvent.prototype, {

	  preventDefault: function() {
	    this.defaultPrevented = true;
	    var event = this.nativeEvent;
	    event.preventDefault ? event.preventDefault() : event.returnValue = false;
	    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
	  },

	  stopPropagation: function() {
	    var event = this.nativeEvent;
	    event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
	    this.isPropagationStopped = emptyFunction.thatReturnsTrue;
	  },

	  /**
	   * We release all dispatched `SyntheticEvent`s after each event loop, adding
	   * them back into the pool. This allows a way to hold onto a reference that
	   * won't be added back into the pool.
	   */
	  persist: function() {
	    this.isPersistent = emptyFunction.thatReturnsTrue;
	  },

	  /**
	   * Checks if this event should be released back into the pool.
	   *
	   * @return {boolean} True if this should not be released, false otherwise.
	   */
	  isPersistent: emptyFunction.thatReturnsFalse,

	  /**
	   * `PooledClass` looks for `destructor` on each instance it releases.
	   */
	  destructor: function() {
	    var Interface = this.constructor.Interface;
	    for (var propName in Interface) {
	      this[propName] = null;
	    }
	    this.dispatchConfig = null;
	    this.dispatchMarker = null;
	    this.nativeEvent = null;
	  }

	});

	SyntheticEvent.Interface = EventInterface;

	/**
	 * Helper to reduce boilerplate when creating subclasses.
	 *
	 * @param {function} Class
	 * @param {?object} Interface
	 */
	SyntheticEvent.augmentClass = function(Class, Interface) {
	  var Super = this;

	  var prototype = Object.create(Super.prototype);
	  assign(prototype, Class.prototype);
	  Class.prototype = prototype;
	  Class.prototype.constructor = Class;

	  Class.Interface = assign({}, Super.Interface, Interface);
	  Class.augmentClass = Super.augmentClass;

	  PooledClass.addPoolingTo(Class, PooledClass.threeArgumentPooler);
	};

	PooledClass.addPoolingTo(SyntheticEvent, PooledClass.threeArgumentPooler);

	module.exports = SyntheticEvent;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule joinClasses
	 * @typechecks static-only
	 */

	"use strict";

	/**
	 * Combines multiple className strings into one.
	 * http://jsperf.com/joinclasses-args-vs-array
	 *
	 * @param {...?string} classes
	 * @return {string}
	 */
	function joinClasses(className/*, ... */) {
	  if (!className) {
	    className = '';
	  }
	  var nextClass;
	  var argLength = arguments.length;
	  if (argLength > 1) {
	    for (var ii = 1; ii < argLength; ii++) {
	      nextClass = arguments[ii];
	      if (nextClass) {
	        className = (className ? className + ' ' : '') + nextClass;
	      }
	    }
	  }
	  return className;
	}

	module.exports = joinClasses;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(173);
	var hasDontEnumBug = !({ 'toString': null }).propertyIsEnumerable('toString');
	var hasProtoEnumBug = function () {}.propertyIsEnumerable('prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];

	var keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var ctor = object.constructor;
			var skipConstructor = ctor && ctor.prototype === object;

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};

	keysShim.shim = function shimObjectKeys() {
		if (!Object.keys) {
			Object.keys = keysShim;
		}
		return Object.keys || keysShim;
	};

	module.exports = keysShim;


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * A module of methods that you want to include in all actions.
	 * This module is consumed by `createAction`.
	 */
	module.exports = {
	};


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(114),
	    maker = __webpack_require__(113).instanceJoinCreator;

	/**
	 * Extract child listenables from a parent from their
	 * children property and return them in a keyed Object
	 *
	 * @param {Object} listenable The parent listenable
	 */
	var mapChildListenables = function(listenable) {
	    var i = 0, children = {}, childName;
	    for (;i < (listenable.children||[]).length; ++i) {
	        childName = listenable.children[i];
	        if(listenable[childName]){
	            children[childName] = listenable[childName];
	        }
	    }
	    return children;
	};

	/**
	 * Make a flat dictionary of all listenables including their
	 * possible children (recursively), concatenating names in camelCase.
	 *
	 * @param {Object} listenables The top-level listenables
	 */
	var flattenListenables = function(listenables) {
	    var flattened = {};
	    for(var key in listenables){
	        var listenable = listenables[key];
	        var childMap = mapChildListenables(listenable);

	        // recursively flatten children
	        var children = flattenListenables(childMap);

	        // add the primary listenable and chilren
	        flattened[key] = listenable;
	        for(var childKey in children){
	            var childListenable = children[childKey];
	            flattened[key + _.capitalize(childKey)] = childListenable;
	        }
	    }

	    return flattened;
	};

	/**
	 * A module of methods related to listening.
	 */
	module.exports = {

	    /**
	     * An internal utility function used by `validateListening`
	     *
	     * @param {Action|Store} listenable The listenable we want to search for
	     * @returns {Boolean} The result of a recursive search among `this.subscriptions`
	     */
	    hasListener: function(listenable) {
	        var i = 0, j, listener, listenables;
	        for (;i < (this.subscriptions||[]).length; ++i) {
	            listenables = [].concat(this.subscriptions[i].listenable);
	            for (j = 0; j < listenables.length; j++){
	                listener = listenables[j];
	                if (listener === listenable || listener.hasListener && listener.hasListener(listenable)) {
	                    return true;
	                }
	            }
	        }
	        return false;
	    },

	    /**
	     * A convenience method that listens to all listenables in the given object.
	     *
	     * @param {Object} listenables An object of listenables. Keys will be used as callback method names.
	     */
	    listenToMany: function(listenables){
	        var allListenables = flattenListenables(listenables);
	        for(var key in allListenables){
	            var cbname = _.callbackName(key),
	                localname = this[cbname] ? cbname : this[key] ? key : undefined;
	            if (localname){
	                this.listenTo(allListenables[key],localname,this[cbname+"Default"]||this[localname+"Default"]||localname);
	            }
	        }
	    },

	    /**
	     * Checks if the current context can listen to the supplied listenable
	     *
	     * @param {Action|Store} listenable An Action or Store that should be
	     *  listened to.
	     * @returns {String|Undefined} An error message, or undefined if there was no problem.
	     */
	    validateListening: function(listenable){
	        if (listenable === this) {
	            return "Listener is not able to listen to itself";
	        }
	        if (!_.isFunction(listenable.listen)) {
	            return listenable + " is missing a listen method";
	        }
	        if (listenable.hasListener && listenable.hasListener(this)) {
	            return "Listener cannot listen to this listenable because of circular loop";
	        }
	    },

	    /**
	     * Sets up a subscription to the given listenable for the context object
	     *
	     * @param {Action|Store} listenable An Action or Store that should be
	     *  listened to.
	     * @param {Function|String} callback The callback to register as event handler
	     * @param {Function|String} defaultCallback The callback to register as default handler
	     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is the object being listened to
	     */
	    listenTo: function(listenable, callback, defaultCallback) {
	        var desub, unsubscriber, subscriptionobj, subs = this.subscriptions = this.subscriptions || [];
	        _.throwIf(this.validateListening(listenable));
	        this.fetchInitialState(listenable, defaultCallback);
	        desub = listenable.listen(this[callback]||callback, this);
	        unsubscriber = function() {
	            var index = subs.indexOf(subscriptionobj);
	            _.throwIf(index === -1,'Tried to remove listen already gone from subscriptions list!');
	            subs.splice(index, 1);
	            desub();
	        };
	        subscriptionobj = {
	            stop: unsubscriber,
	            listenable: listenable
	        };
	        subs.push(subscriptionobj);
	        return subscriptionobj;
	    },

	    /**
	     * Stops listening to a single listenable
	     *
	     * @param {Action|Store} listenable The action or store we no longer want to listen to
	     * @returns {Boolean} True if a subscription was found and removed, otherwise false.
	     */
	    stopListeningTo: function(listenable){
	        var sub, i = 0, subs = this.subscriptions || [];
	        for(;i < subs.length; i++){
	            sub = subs[i];
	            if (sub.listenable === listenable){
	                sub.stop();
	                _.throwIf(subs.indexOf(sub)!==-1,'Failed to remove listen from subscriptions list!');
	                return true;
	            }
	        }
	        return false;
	    },

	    /**
	     * Stops all subscriptions and empties subscriptions array
	     */
	    stopListeningToAll: function(){
	        var remaining, subs = this.subscriptions || [];
	        while((remaining=subs.length)){
	            subs[0].stop();
	            _.throwIf(subs.length!==remaining-1,'Failed to remove listen from subscriptions list!');
	        }
	    },

	    /**
	     * Used in `listenTo`. Fetches initial data from a publisher if it has a `getInitialState` method.
	     * @param {Action|Store} listenable The publisher we want to get initial state from
	     * @param {Function|String} defaultCallback The method to receive the data
	     */
	    fetchInitialState: function (listenable, defaultCallback) {
	        defaultCallback = (defaultCallback && this[defaultCallback]) || defaultCallback;
	        var me = this;
	        if (_.isFunction(defaultCallback) && _.isFunction(listenable.getInitialState)) {
	            var data = listenable.getInitialState();
	            if (data && _.isFunction(data.then)) {
	                data.then(function() {
	                    defaultCallback.apply(me, arguments);
	                });
	            } else {
	                defaultCallback.call(this, data);
	            }
	        }
	    },

	    /**
	     * The callback will be called once all listenables have triggered at least once.
	     * It will be invoked with the last emission from each listenable.
	     * @param {...Publishers} publishers Publishers that should be tracked.
	     * @param {Function|String} callback The method to call when all publishers have emitted
	     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
	     */
	    joinTrailing: maker("last"),

	    /**
	     * The callback will be called once all listenables have triggered at least once.
	     * It will be invoked with the first emission from each listenable.
	     * @param {...Publishers} publishers Publishers that should be tracked.
	     * @param {Function|String} callback The method to call when all publishers have emitted
	     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
	     */
	    joinLeading: maker("first"),

	    /**
	     * The callback will be called once all listenables have triggered at least once.
	     * It will be invoked with all emission from each listenable.
	     * @param {...Publishers} publishers Publishers that should be tracked.
	     * @param {Function|String} callback The method to call when all publishers have emitted
	     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
	     */
	    joinConcat: maker("all"),

	    /**
	     * The callback will be called once all listenables have triggered.
	     * If a callback triggers twice before that happens, an error is thrown.
	     * @param {...Publishers} publishers Publishers that should be tracked.
	     * @param {Function|String} callback The method to call when all publishers have emitted
	     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
	     */
	    joinStrict: maker("strict")
	};


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(114);

	/**
	 * A module of methods for object that you want to be able to listen to.
	 * This module is consumed by `createStore` and `createAction`
	 */
	module.exports = {

	    /**
	     * Hook used by the publisher that is invoked before emitting
	     * and before `shouldEmit`. The arguments are the ones that the action
	     * is invoked with. If this function returns something other than
	     * undefined, that will be passed on as arguments for shouldEmit and
	     * emission.
	     */
	    preEmit: function() {},

	    /**
	     * Hook used by the publisher after `preEmit` to determine if the
	     * event should be emitted with given arguments. This may be overridden
	     * in your application, default implementation always returns true.
	     *
	     * @returns {Boolean} true if event should be emitted
	     */
	    shouldEmit: function() { return true; },

	    /**
	     * Subscribes the given callback for action triggered
	     *
	     * @param {Function} callback The callback to register as event handler
	     * @param {Mixed} [optional] bindContext The context to bind the callback with
	     * @returns {Function} Callback that unsubscribes the registered event handler
	     */
	    listen: function(callback, bindContext) {
	        bindContext = bindContext || this;
	        var eventHandler = function(args) {
	            if (aborted){
	                return;
	            }
	            callback.apply(bindContext, args);
	        }, me = this, aborted = false;
	        this.emitter.addListener(this.eventLabel, eventHandler);
	        return function() {
	            aborted = true;
	            me.emitter.removeListener(me.eventLabel, eventHandler);
	        };
	    },

	    /**
	     * Attach handlers to promise that trigger the completed and failed
	     * child publishers, if available.
	     *
	     * @param {Object} The promise to attach to
	     */
	    promise: function(promise) {
	        var me = this;

	        var canHandlePromise =
	            this.children.indexOf('completed') >= 0 &&
	            this.children.indexOf('failed') >= 0;

	        if (!canHandlePromise){
	            throw new Error('Publisher must have "completed" and "failed" child publishers');
	        }

	        promise.then(function(response) {
	            return me.completed(response);
	        }, function(error) {
	            return me.failed(error);
	        });
	    },

	    /**
	     * Subscribes the given callback for action triggered, which should
	     * return a promise that in turn is passed to `this.promise`
	     *
	     * @param {Function} callback The callback to register as event handler
	     */
	    listenAndPromise: function(callback, bindContext) {
	        var me = this;
	        bindContext = bindContext || this;
	        this.willCallPromise = (this.willCallPromise || 0) + 1;

	        var removeListen = this.listen(function() {

	            if (!callback) {
	                throw new Error('Expected a function returning a promise but got ' + callback);
	            }

	            var args = arguments,
	                promise = callback.apply(bindContext, args);
	            return me.promise.call(me, promise);
	        }, bindContext);

	        return function () {
	          me.willCallPromise--;
	          removeListen.call(me);
	        };

	    },

	    /**
	     * Publishes an event using `this.emitter` (if `shouldEmit` agrees)
	     */
	    trigger: function() {
	        var args = arguments,
	            pre = this.preEmit.apply(this, args);
	        args = pre === undefined ? args : _.isArguments(pre) ? pre : [].concat(pre);
	        if (this.shouldEmit.apply(this, args)) {
	            this.emitter.emit(this.eventLabel, args);
	        }
	    },

	    /**
	     * Tries to publish the event on the next tick
	     */
	    triggerAsync: function(){
	        var args = arguments,me = this;
	        _.nextTick(function() {
	            me.trigger.apply(me, args);
	        });
	    },

	    /**
	     * Returns a Promise for the triggered action
	     *
	     * @return {Promise}
	     *   Resolved by completed child action.
	     *   Rejected by failed child action.
	     *   If listenAndPromise'd, then promise associated to this trigger.
	     *   Otherwise, the promise is for next child action completion.
	     */
	    triggerPromise: function(){
	        var me = this;
	        var args = arguments;

	        var canHandlePromise =
	            this.children.indexOf('completed') >= 0 &&
	            this.children.indexOf('failed') >= 0;

	        var promise = _.createPromise(function(resolve, reject) {
	            // If `listenAndPromise` is listening
	            // patch `promise` w/ context-loaded resolve/reject
	            if (me.willCallPromise) {
	                _.nextTick(function() {
	                    var old_promise_method = me.promise;
	                    me.promise = function (promise) {
	                        promise.then(resolve, reject);
	                        // Back to your regularly schedule programming.
	                        me.promise = old_promise_method;
	                        return me.promise.apply(me, arguments);
	                    };
	                    me.trigger.apply(me, args);
	                });
	                return;
	            }

	            if (canHandlePromise) {
	                var removeSuccess = me.completed.listen(function(args) {
	                    removeSuccess();
	                    removeFailed();
	                    resolve(args);
	                });

	                var removeFailed = me.failed.listen(function(args) {
	                    removeSuccess();
	                    removeFailed();
	                    reject(args);
	                });
	            }

	            me.triggerAsync.apply(me, args);

	            if (!canHandlePromise) {
	                resolve();
	            }
	        });

	        return promise;
	    }
	};


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * A module of methods that you want to include in all stores.
	 * This module is consumed by `createStore`.
	 */
	module.exports = {
	};


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(114),
	    Reflux = __webpack_require__(59),
	    Keep = __webpack_require__(115),
	    allowed = {preEmit:1,shouldEmit:1};

	/**
	 * Creates an action functor object. It is mixed in with functions
	 * from the `PublisherMethods` mixin. `preEmit` and `shouldEmit` may
	 * be overridden in the definition object.
	 *
	 * @param {Object} definition The action object definition
	 */
	var createAction = function(definition) {

	    definition = definition || {};
	    if (!_.isObject(definition)){
	        definition = {actionName: definition};
	    }

	    for(var a in Reflux.ActionMethods){
	        if (!allowed[a] && Reflux.PublisherMethods[a]) {
	            throw new Error("Cannot override API method " + a +
	                " in Reflux.ActionMethods. Use another method name or override it on Reflux.PublisherMethods instead."
	            );
	        }
	    }

	    for(var d in definition){
	        if (!allowed[d] && Reflux.PublisherMethods[d]) {
	            throw new Error("Cannot override API method " + d +
	                " in action creation. Use another method name or override it on Reflux.PublisherMethods instead."
	            );
	        }
	    }

	    definition.children = definition.children || [];
	    if (definition.asyncResult){
	        definition.children = definition.children.concat(["completed","failed"]);
	    }

	    var i = 0, childActions = {};
	    for (; i < definition.children.length; i++) {
	        var name = definition.children[i];
	        childActions[name] = createAction(name);
	    }

	    var context = _.extend({
	        eventLabel: "action",
	        emitter: new _.EventEmitter(),
	        _isAction: true
	    }, Reflux.PublisherMethods, Reflux.ActionMethods, definition);

	    var functor = function() {
	        return functor[functor.sync?"trigger":"triggerPromise"].apply(functor, arguments);
	    };

	    _.extend(functor,childActions,context);

	    Keep.createdActions.push(functor);

	    return functor;

	};

	module.exports = createAction;


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(114),
	    Reflux = __webpack_require__(59),
	    Keep = __webpack_require__(115),
	    mixer = __webpack_require__(174),
	    allowed = {preEmit:1,shouldEmit:1},
	    bindMethods = __webpack_require__(175);

	/**
	 * Creates an event emitting Data Store. It is mixed in with functions
	 * from the `ListenerMethods` and `PublisherMethods` mixins. `preEmit`
	 * and `shouldEmit` may be overridden in the definition object.
	 *
	 * @param {Object} definition The data store object definition
	 * @returns {Store} A data store instance
	 */
	module.exports = function(definition) {

	    definition = definition || {};

	    for(var a in Reflux.StoreMethods){
	        if (!allowed[a] && (Reflux.PublisherMethods[a] || Reflux.ListenerMethods[a])){
	            throw new Error("Cannot override API method " + a +
	                " in Reflux.StoreMethods. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead."
	            );
	        }
	    }

	    for(var d in definition){
	        if (!allowed[d] && (Reflux.PublisherMethods[d] || Reflux.ListenerMethods[d])){
	            throw new Error("Cannot override API method " + d +
	                " in store creation. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead."
	            );
	        }
	    }

	    definition = mixer(definition);

	    function Store() {
	        var i=0, arr;
	        this.subscriptions = [];
	        this.emitter = new _.EventEmitter();
	        this.eventLabel = "change";
	        bindMethods(this, definition);
	        if (this.init && _.isFunction(this.init)) {
	            this.init();
	        }
	        if (this.listenables){
	            arr = [].concat(this.listenables);
	            for(;i < arr.length;i++){
	                this.listenToMany(arr[i]);
	            }
	        }
	    }

	    _.extend(Store.prototype, Reflux.ListenerMethods, Reflux.PublisherMethods, Reflux.StoreMethods, definition);

	    var store = new Store();
	    Keep.createdStores.push(store);

	    return store;
	};


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(59),
	    _ = __webpack_require__(114);

	module.exports = function(listenable,key){
	    return {
	        getInitialState: function(){
	            if (!_.isFunction(listenable.getInitialState)) {
	                return {};
	            } else if (key === undefined) {
	                return listenable.getInitialState();
	            } else {
	                return _.object([key],[listenable.getInitialState()]);
	            }
	        },
	        componentDidMount: function(){
	            _.extend(this,Reflux.ListenerMethods);
	            var me = this, cb = (key === undefined ? this.setState : function(v){me.setState(_.object([key],[v]));});
	            this.listenTo(listenable,cb);
	        },
	        componentWillUnmount: Reflux.ListenerMixin.componentWillUnmount
	    };
	};


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(59),
	  _ = __webpack_require__(114);

	module.exports = function(listenable, key, filterFunc) {
	    filterFunc = _.isFunction(key) ? key : filterFunc;
	    return {
	        getInitialState: function() {
	            if (!_.isFunction(listenable.getInitialState)) {
	                return {};
	            } else if (_.isFunction(key)) {
	                return filterFunc.call(this, listenable.getInitialState());
	            } else {
	                // Filter initial payload from store.
	                var result = filterFunc.call(this, listenable.getInitialState());
	                if (result) {
	                  return _.object([key], [result]);
	                } else {
	                  return {};
	                }
	            }
	        },
	        componentDidMount: function() {
	            _.extend(this, Reflux.ListenerMethods);
	            var me = this;
	            var cb = function(value) {
	                if (_.isFunction(key)) {
	                    me.setState(filterFunc.call(me, value));
	                } else {
	                    var result = filterFunc.call(me, value);
	                    me.setState(_.object([key], [result]));
	                }
	            };

	            this.listenTo(listenable, cb);
	        },
	        componentWillUnmount: Reflux.ListenerMixin.componentWillUnmount
	    };
	};



/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(114),
	    ListenerMethods = __webpack_require__(103);

	/**
	 * A module meant to be consumed as a mixin by a React component. Supplies the methods from
	 * `ListenerMethods` mixin and takes care of teardown of subscriptions.
	 * Note that if you're using the `connect` mixin you don't need this mixin, as connect will
	 * import everything this mixin contains!
	 */
	module.exports = _.extend({

	    /**
	     * Cleans up all listener previously registered.
	     */
	    componentWillUnmount: ListenerMethods.stopListeningToAll

	}, ListenerMethods);


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(59);


	/**
	 * A mixin factory for a React component. Meant as a more convenient way of using the `ListenerMixin`,
	 * without having to manually set listeners in the `componentDidMount` method.
	 *
	 * @param {Action|Store} listenable An Action or Store that should be
	 *  listened to.
	 * @param {Function|String} callback The callback to register as event handler
	 * @param {Function|String} defaultCallback The callback to register as default handler
	 * @returns {Object} An object to be used as a mixin, which sets up the listener for the given listenable.
	 */
	module.exports = function(listenable,callback,initial){
	    return {
	        /**
	         * Set up the mixin before the initial rendering occurs. Import methods from `ListenerMethods`
	         * and then make the call to `listenTo` with the arguments provided to the factory function
	         */
	        componentDidMount: function() {
	            for(var m in Reflux.ListenerMethods){
	                if (this[m] !== Reflux.ListenerMethods[m]){
	                    if (this[m]){
	                        throw "Can't have other property '"+m+"' when using Reflux.listenTo!";
	                    }
	                    this[m] = Reflux.ListenerMethods[m];
	                }
	            }
	            this.listenTo(listenable,callback,initial);
	        },
	        /**
	         * Cleans up all listener previously registered.
	         */
	        componentWillUnmount: Reflux.ListenerMethods.stopListeningToAll
	    };
	};


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(59);

	/**
	 * A mixin factory for a React component. Meant as a more convenient way of using the `listenerMixin`,
	 * without having to manually set listeners in the `componentDidMount` method. This version is used
	 * to automatically set up a `listenToMany` call.
	 *
	 * @param {Object} listenables An object of listenables
	 * @returns {Object} An object to be used as a mixin, which sets up the listeners for the given listenables.
	 */
	module.exports = function(listenables){
	    return {
	        /**
	         * Set up the mixin before the initial rendering occurs. Import methods from `ListenerMethods`
	         * and then make the call to `listenTo` with the arguments provided to the factory function
	         */
	        componentDidMount: function() {
	            for(var m in Reflux.ListenerMethods){
	                if (this[m] !== Reflux.ListenerMethods[m]){
	                    if (this[m]){
	                        throw "Can't have other property '"+m+"' when using Reflux.listenToMany!";
	                    }
	                    this[m] = Reflux.ListenerMethods[m];
	                }
	            }
	            this.listenToMany(listenables);
	        },
	        /**
	         * Cleans up all listener previously registered.
	         */
	        componentWillUnmount: Reflux.ListenerMethods.stopListeningToAll
	    };
	};


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Internal module used to create static and instance join methods
	 */

	var slice = Array.prototype.slice,
	    _ = __webpack_require__(114),
	    createStore = __webpack_require__(107),
	    strategyMethodNames = {
	        strict: "joinStrict",
	        first: "joinLeading",
	        last: "joinTrailing",
	        all: "joinConcat"
	    };

	/**
	 * Used in `index.js` to create the static join methods
	 * @param {String} strategy Which strategy to use when tracking listenable trigger arguments
	 * @returns {Function} A static function which returns a store with a join listen on the given listenables using the given strategy
	 */
	exports.staticJoinCreator = function(strategy){
	    return function(/* listenables... */) {
	        var listenables = slice.call(arguments);
	        return createStore({
	            init: function(){
	                this[strategyMethodNames[strategy]].apply(this,listenables.concat("triggerAsync"));
	            }
	        });
	    };
	};

	/**
	 * Used in `ListenerMethods.js` to create the instance join methods
	 * @param {String} strategy Which strategy to use when tracking listenable trigger arguments
	 * @returns {Function} An instance method which sets up a join listen on the given listenables using the given strategy
	 */
	exports.instanceJoinCreator = function(strategy){
	    return function(/* listenables..., callback*/){
	        _.throwIf(arguments.length < 3,'Cannot create a join with less than 2 listenables!');
	        var listenables = slice.call(arguments),
	            callback = listenables.pop(),
	            numberOfListenables = listenables.length,
	            join = {
	                numberOfListenables: numberOfListenables,
	                callback: this[callback]||callback,
	                listener: this,
	                strategy: strategy
	            }, i, cancels = [], subobj;
	        for (i = 0; i < numberOfListenables; i++) {
	            _.throwIf(this.validateListening(listenables[i]));
	        }
	        for (i = 0; i < numberOfListenables; i++) {
	            cancels.push(listenables[i].listen(newListener(i,join),this));
	        }
	        reset(join);
	        subobj = {listenable: listenables};
	        subobj.stop = makeStopper(subobj,cancels,this);
	        this.subscriptions = (this.subscriptions || []).concat(subobj);
	        return subobj;
	    };
	};

	// ---- internal join functions ----

	function makeStopper(subobj,cancels,context){
	    return function() {
	        var i, subs = context.subscriptions,
	            index = (subs ? subs.indexOf(subobj) : -1);
	        _.throwIf(index === -1,'Tried to remove join already gone from subscriptions list!');
	        for(i=0;i < cancels.length; i++){
	            cancels[i]();
	        }
	        subs.splice(index, 1);
	    };
	}

	function reset(join) {
	    join.listenablesEmitted = new Array(join.numberOfListenables);
	    join.args = new Array(join.numberOfListenables);
	}

	function newListener(i,join) {
	    return function() {
	        var callargs = slice.call(arguments);
	        if (join.listenablesEmitted[i]){
	            switch(join.strategy){
	                case "strict": throw new Error("Strict join failed because listener triggered twice.");
	                case "last": join.args[i] = callargs; break;
	                case "all": join.args[i].push(callargs);
	            }
	        } else {
	            join.listenablesEmitted[i] = true;
	            join.args[i] = (join.strategy==="all"?[callargs]:callargs);
	        }
	        emitIfAllListenablesEmitted(join);
	    };
	}

	function emitIfAllListenablesEmitted(join) {
	    for (var i = 0; i < join.numberOfListenables; i++) {
	        if (!join.listenablesEmitted[i]) {
	            return;
	        }
	    }
	    join.callback.apply(join.listener,join.args);
	    reset(join);
	}


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * isObject, extend, isFunction, isArguments are taken from undescore/lodash in
	 * order to remove the dependency
	 */
	var isObject = exports.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	};

	exports.extend = function(obj) {
	    if (!isObject(obj)) {
	        return obj;
	    }
	    var source, prop;
	    for (var i = 1, length = arguments.length; i < length; i++) {
	        source = arguments[i];
	        for (prop in source) {
	            if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
	                var propertyDescriptor = Object.getOwnPropertyDescriptor(source, prop);
	                Object.defineProperty(obj, prop, propertyDescriptor);
	            } else {
	                obj[prop] = source[prop];
	            }
	        }
	    }
	    return obj;
	};

	exports.isFunction = function(value) {
	    return typeof value === 'function';
	};

	exports.EventEmitter = __webpack_require__(208);

	exports.nextTick = function(callback) {
	    setTimeout(callback, 0);
	};

	exports.capitalize = function(string){
	    return string.charAt(0).toUpperCase()+string.slice(1);
	};

	exports.callbackName = function(string){
	    return "on"+exports.capitalize(string);
	};

	exports.object = function(keys,vals){
	    var o={}, i=0;
	    for(;i<keys.length;i++){
	        o[keys[i]] = vals[i];
	    }
	    return o;
	};

	exports.Promise = __webpack_require__(209);

	exports.createPromise = function(resolver) {
	    return new exports.Promise(resolver);
	};

	exports.isArguments = function(value) {
	    return typeof value === 'object' && ('callee' in value) && typeof value.length === 'number';
	};

	exports.throwIf = function(val,msg){
	    if (val){
	        throw Error(msg||val);
	    }
	};


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	exports.createdStores = [];

	exports.createdActions = [];

	exports.reset = function() {
	    while(exports.createdStores.length) {
	        exports.createdStores.pop();
	    }
	    while(exports.createdActions.length) {
	        exports.createdActions.pop();
	    }
	};


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule escapeTextForBrowser
	 * @typechecks static-only
	 */

	"use strict";

	var ESCAPE_LOOKUP = {
	  "&": "&amp;",
	  ">": "&gt;",
	  "<": "&lt;",
	  "\"": "&quot;",
	  "'": "&#x27;"
	};

	var ESCAPE_REGEX = /[&><"']/g;

	function escaper(match) {
	  return ESCAPE_LOOKUP[match];
	}

	/**
	 * Escapes text to prevent scripting attacks.
	 *
	 * @param {*} text Text value to escape.
	 * @return {string} An escaped string.
	 */
	function escapeTextForBrowser(text) {
	  return ('' + text).replace(ESCAPE_REGEX, escaper);
	}

	module.exports = escapeTextForBrowser;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule memoizeStringOnly
	 * @typechecks static-only
	 */

	"use strict";

	/**
	 * Memoizes the return value of a function that accepts one string argument.
	 *
	 * @param {function} callback
	 * @return {function}
	 */
	function memoizeStringOnly(callback) {
	  var cache = {};
	  return function(string) {
	    if (cache.hasOwnProperty(string)) {
	      return cache[string];
	    } else {
	      return cache[string] = callback.call(this, string);
	    }
	  };
	}

	module.exports = memoizeStringOnly;


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule traverseAllChildren
	 */

	"use strict";

	var ReactElement = __webpack_require__(54);
	var ReactInstanceHandles = __webpack_require__(71);

	var invariant = __webpack_require__(31);

	var SEPARATOR = ReactInstanceHandles.SEPARATOR;
	var SUBSEPARATOR = ':';

	/**
	 * TODO: Test that:
	 * 1. `mapChildren` transforms strings and numbers into `ReactTextComponent`.
	 * 2. it('should fail when supplied duplicate key', function() {
	 * 3. That a single child and an array with one item have the same key pattern.
	 * });
	 */

	var userProvidedKeyEscaperLookup = {
	  '=': '=0',
	  '.': '=1',
	  ':': '=2'
	};

	var userProvidedKeyEscapeRegex = /[=.:]/g;

	function userProvidedKeyEscaper(match) {
	  return userProvidedKeyEscaperLookup[match];
	}

	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  if (component && component.key != null) {
	    // Explicit key
	    return wrapUserProvidedKey(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}

	/**
	 * Escape a component key so that it is safe to use in a reactid.
	 *
	 * @param {*} key Component key to be escaped.
	 * @return {string} An escaped string.
	 */
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(
	    userProvidedKeyEscapeRegex,
	    userProvidedKeyEscaper
	  );
	}

	/**
	 * Wrap a `key` value explicitly provided by the user to distinguish it from
	 * implicitly-generated keys generated by a component's index in its parent.
	 *
	 * @param {string} key Value of a user-provided `key` attribute
	 * @return {string}
	 */
	function wrapUserProvidedKey(key) {
	  return '$' + escapeUserProvidedKey(key);
	}

	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!number} indexSoFar Number of children encountered until this point.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	var traverseAllChildrenImpl =
	  function(children, nameSoFar, indexSoFar, callback, traverseContext) {
	    var nextName, nextIndex;
	    var subtreeCount = 0;  // Count of children found in the current subtree.
	    if (Array.isArray(children)) {
	      for (var i = 0; i < children.length; i++) {
	        var child = children[i];
	        nextName = (
	          nameSoFar +
	          (nameSoFar ? SUBSEPARATOR : SEPARATOR) +
	          getComponentKey(child, i)
	        );
	        nextIndex = indexSoFar + subtreeCount;
	        subtreeCount += traverseAllChildrenImpl(
	          child,
	          nextName,
	          nextIndex,
	          callback,
	          traverseContext
	        );
	      }
	    } else {
	      var type = typeof children;
	      var isOnlyChild = nameSoFar === '';
	      // If it's the only child, treat the name as if it was wrapped in an array
	      // so that it's consistent if the number of children grows
	      var storageName =
	        isOnlyChild ? SEPARATOR + getComponentKey(children, 0) : nameSoFar;
	      if (children == null || type === 'boolean') {
	        // All of the above are perceived as null.
	        callback(traverseContext, null, storageName, indexSoFar);
	        subtreeCount = 1;
	      } else if (type === 'string' || type === 'number' ||
	                 ReactElement.isValidElement(children)) {
	        callback(traverseContext, children, storageName, indexSoFar);
	        subtreeCount = 1;
	      } else if (type === 'object') {
	        ("production" !== (undefined) ? invariant(
	          !children || children.nodeType !== 1,
	          'traverseAllChildren(...): Encountered an invalid child; DOM ' +
	          'elements are not valid children of React components.'
	        ) : invariant(!children || children.nodeType !== 1));
	        for (var key in children) {
	          if (children.hasOwnProperty(key)) {
	            nextName = (
	              nameSoFar + (nameSoFar ? SUBSEPARATOR : SEPARATOR) +
	              wrapUserProvidedKey(key) + SUBSEPARATOR +
	              getComponentKey(children[key], 0)
	            );
	            nextIndex = indexSoFar + subtreeCount;
	            subtreeCount += traverseAllChildrenImpl(
	              children[key],
	              nextName,
	              nextIndex,
	              callback,
	              traverseContext
	            );
	          }
	        }
	      }
	    }
	    return subtreeCount;
	  };

	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', 0, callback, traverseContext);
	}

	module.exports = traverseAllChildren;


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactOwner
	 */

	"use strict";

	var emptyObject = __webpack_require__(176);
	var invariant = __webpack_require__(31);

	/**
	 * ReactOwners are capable of storing references to owned components.
	 *
	 * All components are capable of //being// referenced by owner components, but
	 * only ReactOwner components are capable of //referencing// owned components.
	 * The named reference is known as a "ref".
	 *
	 * Refs are available when mounted and updated during reconciliation.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return (
	 *         <div onClick={this.handleClick}>
	 *           <CustomComponent ref="custom" />
	 *         </div>
	 *       );
	 *     },
	 *     handleClick: function() {
	 *       this.refs.custom.handleClick();
	 *     },
	 *     componentDidMount: function() {
	 *       this.refs.custom.initialize();
	 *     }
	 *   });
	 *
	 * Refs should rarely be used. When refs are used, they should only be done to
	 * control data that is not handled by React's data flow.
	 *
	 * @class ReactOwner
	 */
	var ReactOwner = {

	  /**
	   * @param {?object} object
	   * @return {boolean} True if `object` is a valid owner.
	   * @final
	   */
	  isValidOwner: function(object) {
	    return !!(
	      object &&
	      typeof object.attachRef === 'function' &&
	      typeof object.detachRef === 'function'
	    );
	  },

	  /**
	   * Adds a component by ref to an owner component.
	   *
	   * @param {ReactComponent} component Component to reference.
	   * @param {string} ref Name by which to refer to the component.
	   * @param {ReactOwner} owner Component on which to record the ref.
	   * @final
	   * @internal
	   */
	  addComponentAsRefTo: function(component, ref, owner) {
	    ("production" !== (undefined) ? invariant(
	      ReactOwner.isValidOwner(owner),
	      'addComponentAsRefTo(...): Only a ReactOwner can have refs. This ' +
	      'usually means that you\'re trying to add a ref to a component that ' +
	      'doesn\'t have an owner (that is, was not created inside of another ' +
	      'component\'s `render` method). Try rendering this component inside of ' +
	      'a new top-level component which will hold the ref.'
	    ) : invariant(ReactOwner.isValidOwner(owner)));
	    owner.attachRef(ref, component);
	  },

	  /**
	   * Removes a component by ref from an owner component.
	   *
	   * @param {ReactComponent} component Component to dereference.
	   * @param {string} ref Name of the ref to remove.
	   * @param {ReactOwner} owner Component on which the ref is recorded.
	   * @final
	   * @internal
	   */
	  removeComponentAsRefFrom: function(component, ref, owner) {
	    ("production" !== (undefined) ? invariant(
	      ReactOwner.isValidOwner(owner),
	      'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. This ' +
	      'usually means that you\'re trying to remove a ref to a component that ' +
	      'doesn\'t have an owner (that is, was not created inside of another ' +
	      'component\'s `render` method). Try rendering this component inside of ' +
	      'a new top-level component which will hold the ref.'
	    ) : invariant(ReactOwner.isValidOwner(owner)));
	    // Check that `component` is still the current ref because we do not want to
	    // detach the ref if another component stole it.
	    if (owner.refs[ref] === component) {
	      owner.detachRef(ref);
	    }
	  },

	  /**
	   * A ReactComponent must mix this in to have refs.
	   *
	   * @lends {ReactOwner.prototype}
	   */
	  Mixin: {

	    construct: function() {
	      this.refs = emptyObject;
	    },

	    /**
	     * Lazily allocates the refs object and stores `component` as `ref`.
	     *
	     * @param {string} ref Reference name.
	     * @param {component} component Component to store as `ref`.
	     * @final
	     * @private
	     */
	    attachRef: function(ref, component) {
	      ("production" !== (undefined) ? invariant(
	        component.isOwnedBy(this),
	        'attachRef(%s, ...): Only a component\'s owner can store a ref to it.',
	        ref
	      ) : invariant(component.isOwnedBy(this)));
	      var refs = this.refs === emptyObject ? (this.refs = {}) : this.refs;
	      refs[ref] = component;
	    },

	    /**
	     * Detaches a reference name.
	     *
	     * @param {string} ref Name to dereference.
	     * @final
	     * @private
	     */
	    detachRef: function(ref) {
	      delete this.refs[ref];
	    }

	  }

	};

	module.exports = ReactOwner;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyMirror
	 * @typechecks static-only
	 */

	"use strict";

	var invariant = __webpack_require__(31);

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function(obj) {
	  var ret = {};
	  var key;
	  ("production" !== (undefined) ? invariant(
	    obj instanceof Object && !Array.isArray(obj),
	    'keyMirror(...): Argument must be an object.'
	  ) : invariant(obj instanceof Object && !Array.isArray(obj)));
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEmptyComponent
	 */

	"use strict";

	var ReactElement = __webpack_require__(54);

	var invariant = __webpack_require__(31);

	var component;
	// This registry keeps track of the React IDs of the components that rendered to
	// `null` (in reality a placeholder such as `noscript`)
	var nullComponentIdsRegistry = {};

	var ReactEmptyComponentInjection = {
	  injectEmptyComponent: function(emptyComponent) {
	    component = ReactElement.createFactory(emptyComponent);
	  }
	};

	/**
	 * @return {ReactComponent} component The injected empty component.
	 */
	function getEmptyComponent() {
	  ("production" !== (undefined) ? invariant(
	    component,
	    'Trying to return null from a render, but no null placeholder component ' +
	    'was injected.'
	  ) : invariant(component));
	  return component();
	}

	/**
	 * Mark the component as having rendered to null.
	 * @param {string} id Component's `_rootNodeID`.
	 */
	function registerNullComponentID(id) {
	  nullComponentIdsRegistry[id] = true;
	}

	/**
	 * Unmark the component as having rendered to null: it renders to something now.
	 * @param {string} id Component's `_rootNodeID`.
	 */
	function deregisterNullComponentID(id) {
	  delete nullComponentIdsRegistry[id];
	}

	/**
	 * @param {string} id Component's `_rootNodeID`.
	 * @return {boolean} True if the component is rendered to null.
	 */
	function isNullComponentID(id) {
	  return nullComponentIdsRegistry[id];
	}

	var ReactEmptyComponent = {
	  deregisterNullComponentID: deregisterNullComponentID,
	  getEmptyComponent: getEmptyComponent,
	  injection: ReactEmptyComponentInjection,
	  isNullComponentID: isNullComponentID,
	  registerNullComponentID: registerNullComponentID
	};

	module.exports = ReactEmptyComponent;


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactErrorUtils
	 * @typechecks
	 */

	"use strict";

	var ReactErrorUtils = {
	  /**
	   * Creates a guarded version of a function. This is supposed to make debugging
	   * of event handlers easier. To aid debugging with the browser's debugger,
	   * this currently simply returns the original function.
	   *
	   * @param {function} func Function to be executed
	   * @param {string} name The name of the guard
	   * @return {function}
	   */
	  guard: function(func, name) {
	    return func;
	  }
	};

	module.exports = ReactErrorUtils;


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocations
	 */

	"use strict";

	var keyMirror = __webpack_require__(120);

	var ReactPropTypeLocations = keyMirror({
	  prop: null,
	  context: null,
	  childContext: null
	});

	module.exports = ReactPropTypeLocations;


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocationNames
	 */

	"use strict";

	var ReactPropTypeLocationNames = {};

	if ("production" !== (undefined)) {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}

	module.exports = ReactPropTypeLocationNames;


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule instantiateReactComponent
	 * @typechecks static-only
	 */

	"use strict";

	var warning = __webpack_require__(57);

	var ReactElement = __webpack_require__(54);
	var ReactLegacyElement = __webpack_require__(72);
	var ReactNativeComponent = __webpack_require__(177);
	var ReactEmptyComponent = __webpack_require__(121);

	/**
	 * Given an `element` create an instance that will actually be mounted.
	 *
	 * @param {object} element
	 * @param {*} parentCompositeType The composite type that resolved this.
	 * @return {object} A new instance of the element's constructor.
	 * @protected
	 */
	function instantiateReactComponent(element, parentCompositeType) {
	  var instance;

	  if ("production" !== (undefined)) {
	    ("production" !== (undefined) ? warning(
	      element && (typeof element.type === 'function' ||
	                     typeof element.type === 'string'),
	      'Only functions or strings can be mounted as React components.'
	    ) : null);

	    // Resolve mock instances
	    if (element.type._mockedReactClassConstructor) {
	      // If this is a mocked class, we treat the legacy factory as if it was the
	      // class constructor for future proofing unit tests. Because this might
	      // be mocked as a legacy factory, we ignore any warnings triggerd by
	      // this temporary hack.
	      ReactLegacyElement._isLegacyCallWarningEnabled = false;
	      try {
	        instance = new element.type._mockedReactClassConstructor(
	          element.props
	        );
	      } finally {
	        ReactLegacyElement._isLegacyCallWarningEnabled = true;
	      }

	      // If the mock implementation was a legacy factory, then it returns a
	      // element. We need to turn this into a real component instance.
	      if (ReactElement.isValidElement(instance)) {
	        instance = new instance.type(instance.props);
	      }

	      var render = instance.render;
	      if (!render) {
	        // For auto-mocked factories, the prototype isn't shimmed and therefore
	        // there is no render function on the instance. We replace the whole
	        // component with an empty component instance instead.
	        element = ReactEmptyComponent.getEmptyComponent();
	      } else {
	        if (render._isMockFunction && !render._getMockImplementation()) {
	          // Auto-mocked components may have a prototype with a mocked render
	          // function. For those, we'll need to mock the result of the render
	          // since we consider undefined to be invalid results from render.
	          render.mockImplementation(
	            ReactEmptyComponent.getEmptyComponent
	          );
	        }
	        instance.construct(element);
	        return instance;
	      }
	    }
	  }

	  // Special case string values
	  if (typeof element.type === 'string') {
	    instance = ReactNativeComponent.createInstanceForTag(
	      element.type,
	      element.props,
	      parentCompositeType
	    );
	  } else {
	    // Normal case for non-mocks and non-strings
	    instance = new element.type(element.props);
	  }

	  if ("production" !== (undefined)) {
	    ("production" !== (undefined) ? warning(
	      typeof instance.construct === 'function' &&
	      typeof instance.mountComponent === 'function' &&
	      typeof instance.receiveComponent === 'function',
	      'Only React Components can be mounted.'
	    ) : null);
	  }

	  // This actually sets up the internal instance. This will become decoupled
	  // from the public instance in a future diff.
	  instance.construct(element);

	  return instance;
	}

	module.exports = instantiateReactComponent;


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule monitorCodeUse
	 */

	"use strict";

	var invariant = __webpack_require__(31);

	/**
	 * Provides open-source compatible instrumentation for monitoring certain API
	 * uses before we're ready to issue a warning or refactor. It accepts an event
	 * name which may only contain the characters [a-z0-9_] and an optional data
	 * object with further information.
	 */

	function monitorCodeUse(eventName, data) {
	  ("production" !== (undefined) ? invariant(
	    eventName && !/[^a-z0-9_]/.test(eventName),
	    'You must provide an eventName using only the characters [a-z0-9_]'
	  ) : invariant(eventName && !/[^a-z0-9_]/.test(eventName)));
	}

	module.exports = monitorCodeUse;


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule mapObject
	 */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * Executes the provided `callback` once for each enumerable own property in the
	 * object and constructs a new object from the results. The `callback` is
	 * invoked with three arguments:
	 *
	 *  - the property value
	 *  - the property name
	 *  - the object being traversed
	 *
	 * Properties that are added after the call to `mapObject` will not be visited
	 * by `callback`. If the values of existing properties are changed, the value
	 * passed to `callback` will be the value at the time `mapObject` visits them.
	 * Properties that are deleted before being visited are not visited.
	 *
	 * @grep function objectMap()
	 * @grep function objMap()
	 *
	 * @param {?object} object
	 * @param {function} callback
	 * @param {*} context
	 * @return {?object}
	 */
	function mapObject(object, callback, context) {
	  if (!object) {
	    return null;
	  }
	  var result = {};
	  for (var name in object) {
	    if (hasOwnProperty.call(object, name)) {
	      result[name] = callback.call(context, object[name], name, object);
	    }
	  }
	  return result;
	}

	module.exports = mapObject;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shouldUpdateReactComponent
	 * @typechecks static-only
	 */

	"use strict";

	/**
	 * Given a `prevElement` and `nextElement`, determines if the existing
	 * instance should be updated as opposed to being destroyed or replaced by a new
	 * instance. Both arguments are elements. This ensures that this logic can
	 * operate on stateless trees without any backing instance.
	 *
	 * @param {?object} prevElement
	 * @param {?object} nextElement
	 * @return {boolean} True if the existing instance should be updated.
	 * @protected
	 */
	function shouldUpdateReactComponent(prevElement, nextElement) {
	  if (prevElement && nextElement &&
	      prevElement.type === nextElement.type &&
	      prevElement.key === nextElement.key &&
	      prevElement._owner === nextElement._owner) {
	    return true;
	  }
	  return false;
	}

	module.exports = shouldUpdateReactComponent;


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSPropertyOperations
	 * @typechecks static-only
	 */

	"use strict";

	var CSSProperty = __webpack_require__(178);
	var ExecutionEnvironment = __webpack_require__(34);

	var camelizeStyleName = __webpack_require__(179);
	var dangerousStyleValue = __webpack_require__(180);
	var hyphenateStyleName = __webpack_require__(181);
	var memoizeStringOnly = __webpack_require__(117);
	var warning = __webpack_require__(57);

	var processStyleName = memoizeStringOnly(function(styleName) {
	  return hyphenateStyleName(styleName);
	});

	var styleFloatAccessor = 'cssFloat';
	if (ExecutionEnvironment.canUseDOM) {
	  // IE8 only supports accessing cssFloat (standard) as styleFloat
	  if (document.documentElement.style.cssFloat === undefined) {
	    styleFloatAccessor = 'styleFloat';
	  }
	}

	if ("production" !== (undefined)) {
	  var warnedStyleNames = {};

	  var warnHyphenatedStyleName = function(name) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }

	    warnedStyleNames[name] = true;
	    ("production" !== (undefined) ? warning(
	      false,
	      'Unsupported style property ' + name + '. Did you mean ' +
	      camelizeStyleName(name) + '?'
	    ) : null);
	  };
	}

	/**
	 * Operations for dealing with CSS properties.
	 */
	var CSSPropertyOperations = {

	  /**
	   * Serializes a mapping of style properties for use as inline styles:
	   *
	   *   > createMarkupForStyles({width: '200px', height: 0})
	   *   "width:200px;height:0;"
	   *
	   * Undefined values are ignored so that declarative programming is easier.
	   * The result should be HTML-escaped before insertion into the DOM.
	   *
	   * @param {object} styles
	   * @return {?string}
	   */
	  createMarkupForStyles: function(styles) {
	    var serialized = '';
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      if ("production" !== (undefined)) {
	        if (styleName.indexOf('-') > -1) {
	          warnHyphenatedStyleName(styleName);
	        }
	      }
	      var styleValue = styles[styleName];
	      if (styleValue != null) {
	        serialized += processStyleName(styleName) + ':';
	        serialized += dangerousStyleValue(styleName, styleValue) + ';';
	      }
	    }
	    return serialized || null;
	  },

	  /**
	   * Sets the value for multiple styles on a node.  If a value is specified as
	   * '' (empty string), the corresponding style property will be unset.
	   *
	   * @param {DOMElement} node
	   * @param {object} styles
	   */
	  setValueForStyles: function(node, styles) {
	    var style = node.style;
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      if ("production" !== (undefined)) {
	        if (styleName.indexOf('-') > -1) {
	          warnHyphenatedStyleName(styleName);
	        }
	      }
	      var styleValue = dangerousStyleValue(styleName, styles[styleName]);
	      if (styleName === 'float') {
	        styleName = styleFloatAccessor;
	      }
	      if (styleValue) {
	        style[styleName] = styleValue;
	      } else {
	        var expansion = CSSProperty.shorthandPropertyExpansions[styleName];
	        if (expansion) {
	          // Shorthand property that IE8 won't like unsetting, so unset each
	          // component to placate it
	          for (var individualStyleName in expansion) {
	            style[individualStyleName] = '';
	          }
	        } else {
	          style[styleName] = '';
	        }
	      }
	    }
	  }

	};

	module.exports = CSSPropertyOperations;


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactBrowserComponentMixin
	 */

	"use strict";

	var ReactEmptyComponent = __webpack_require__(121);
	var ReactMount = __webpack_require__(73);

	var invariant = __webpack_require__(31);

	var ReactBrowserComponentMixin = {
	  /**
	   * Returns the DOM node rendered by this component.
	   *
	   * @return {DOMElement} The root node of this component.
	   * @final
	   * @protected
	   */
	  getDOMNode: function() {
	    ("production" !== (undefined) ? invariant(
	      this.isMounted(),
	      'getDOMNode(): A component must be mounted to have a DOM node.'
	    ) : invariant(this.isMounted()));
	    if (ReactEmptyComponent.isNullComponentID(this._rootNodeID)) {
	      return null;
	    }
	    return ReactMount.getNode(this._rootNodeID);
	  }
	};

	module.exports = ReactBrowserComponentMixin;


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isEventSupported
	 */

	"use strict";

	var ExecutionEnvironment = __webpack_require__(34);

	var useHasFeature;
	if (ExecutionEnvironment.canUseDOM) {
	  useHasFeature =
	    document.implementation &&
	    document.implementation.hasFeature &&
	    // always returns true in newer browsers as per the standard.
	    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
	    document.implementation.hasFeature('', '') !== true;
	}

	/**
	 * Checks if an event is supported in the current execution environment.
	 *
	 * NOTE: This will not work correctly for non-generic events such as `change`,
	 * `reset`, `load`, `error`, and `select`.
	 *
	 * Borrows from Modernizr.
	 *
	 * @param {string} eventNameSuffix Event name, e.g. "click".
	 * @param {?boolean} capture Check if the capture phase is supported.
	 * @return {boolean} True if the event is supported.
	 * @internal
	 * @license Modernizr 3.0.0pre (Custom Build) | MIT
	 */
	function isEventSupported(eventNameSuffix, capture) {
	  if (!ExecutionEnvironment.canUseDOM ||
	      capture && !('addEventListener' in document)) {
	    return false;
	  }

	  var eventName = 'on' + eventNameSuffix;
	  var isSupported = eventName in document;

	  if (!isSupported) {
	    var element = document.createElement('div');
	    element.setAttribute(eventName, 'return;');
	    isSupported = typeof element[eventName] === 'function';
	  }

	  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
	    // This is the only way to test support for the `wheel` event in IE9+.
	    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
	  }

	  return isSupported;
	}

	module.exports = isEventSupported;


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013 Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule BeforeInputEventPlugin
	 * @typechecks static-only
	 */

	"use strict";

	var EventConstants = __webpack_require__(94);
	var EventPropagators = __webpack_require__(96);
	var ExecutionEnvironment = __webpack_require__(34);
	var SyntheticInputEvent = __webpack_require__(182);

	var keyOf = __webpack_require__(56);

	var canUseTextInputEvent = (
	  ExecutionEnvironment.canUseDOM &&
	  'TextEvent' in window &&
	  !('documentMode' in document || isPresto())
	);

	/**
	 * Opera <= 12 includes TextEvent in window, but does not fire
	 * text input events. Rely on keypress instead.
	 */
	function isPresto() {
	  var opera = window.opera;
	  return (
	    typeof opera === 'object' &&
	    typeof opera.version === 'function' &&
	    parseInt(opera.version(), 10) <= 12
	  );
	}

	var SPACEBAR_CODE = 32;
	var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);

	var topLevelTypes = EventConstants.topLevelTypes;

	// Events and their corresponding property names.
	var eventTypes = {
	  beforeInput: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onBeforeInput: null}),
	      captured: keyOf({onBeforeInputCapture: null})
	    },
	    dependencies: [
	      topLevelTypes.topCompositionEnd,
	      topLevelTypes.topKeyPress,
	      topLevelTypes.topTextInput,
	      topLevelTypes.topPaste
	    ]
	  }
	};

	// Track characters inserted via keypress and composition events.
	var fallbackChars = null;

	// Track whether we've ever handled a keypress on the space key.
	var hasSpaceKeypress = false;

	/**
	 * Return whether a native keypress event is assumed to be a command.
	 * This is required because Firefox fires `keypress` events for key commands
	 * (cut, copy, select-all, etc.) even though no character is inserted.
	 */
	function isKeypressCommand(nativeEvent) {
	  return (
	    (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) &&
	    // ctrlKey && altKey is equivalent to AltGr, and is not a command.
	    !(nativeEvent.ctrlKey && nativeEvent.altKey)
	  );
	}

	/**
	 * Create an `onBeforeInput` event to match
	 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
	 *
	 * This event plugin is based on the native `textInput` event
	 * available in Chrome, Safari, Opera, and IE. This event fires after
	 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
	 *
	 * `beforeInput` is spec'd but not implemented in any browsers, and
	 * the `input` event does not provide any useful information about what has
	 * actually been added, contrary to the spec. Thus, `textInput` is the best
	 * available event to identify the characters that have actually been inserted
	 * into the target node.
	 */
	var BeforeInputEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {

	    var chars;

	    if (canUseTextInputEvent) {
	      switch (topLevelType) {
	        case topLevelTypes.topKeyPress:
	          /**
	           * If native `textInput` events are available, our goal is to make
	           * use of them. However, there is a special case: the spacebar key.
	           * In Webkit, preventing default on a spacebar `textInput` event
	           * cancels character insertion, but it *also* causes the browser
	           * to fall back to its default spacebar behavior of scrolling the
	           * page.
	           *
	           * Tracking at:
	           * https://code.google.com/p/chromium/issues/detail?id=355103
	           *
	           * To avoid this issue, use the keypress event as if no `textInput`
	           * event is available.
	           */
	          var which = nativeEvent.which;
	          if (which !== SPACEBAR_CODE) {
	            return;
	          }

	          hasSpaceKeypress = true;
	          chars = SPACEBAR_CHAR;
	          break;

	        case topLevelTypes.topTextInput:
	          // Record the characters to be added to the DOM.
	          chars = nativeEvent.data;

	          // If it's a spacebar character, assume that we have already handled
	          // it at the keypress level and bail immediately. Android Chrome
	          // doesn't give us keycodes, so we need to blacklist it.
	          if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
	            return;
	          }

	          // Otherwise, carry on.
	          break;

	        default:
	          // For other native event types, do nothing.
	          return;
	      }
	    } else {
	      switch (topLevelType) {
	        case topLevelTypes.topPaste:
	          // If a paste event occurs after a keypress, throw out the input
	          // chars. Paste events should not lead to BeforeInput events.
	          fallbackChars = null;
	          break;
	        case topLevelTypes.topKeyPress:
	          /**
	           * As of v27, Firefox may fire keypress events even when no character
	           * will be inserted. A few possibilities:
	           *
	           * - `which` is `0`. Arrow keys, Esc key, etc.
	           *
	           * - `which` is the pressed key code, but no char is available.
	           *   Ex: 'AltGr + d` in Polish. There is no modified character for
	           *   this key combination and no character is inserted into the
	           *   document, but FF fires the keypress for char code `100` anyway.
	           *   No `input` event will occur.
	           *
	           * - `which` is the pressed key code, but a command combination is
	           *   being used. Ex: `Cmd+C`. No character is inserted, and no
	           *   `input` event will occur.
	           */
	          if (nativeEvent.which && !isKeypressCommand(nativeEvent)) {
	            fallbackChars = String.fromCharCode(nativeEvent.which);
	          }
	          break;
	        case topLevelTypes.topCompositionEnd:
	          fallbackChars = nativeEvent.data;
	          break;
	      }

	      // If no changes have occurred to the fallback string, no relevant
	      // event has fired and we're done.
	      if (fallbackChars === null) {
	        return;
	      }

	      chars = fallbackChars;
	    }

	    // If no characters are being inserted, no BeforeInput event should
	    // be fired.
	    if (!chars) {
	      return;
	    }

	    var event = SyntheticInputEvent.getPooled(
	      eventTypes.beforeInput,
	      topLevelTargetID,
	      nativeEvent
	    );

	    event.data = chars;
	    fallbackChars = null;
	    EventPropagators.accumulateTwoPhaseDispatches(event);
	    return event;
	  }
	};

	module.exports = BeforeInputEventPlugin;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ChangeEventPlugin
	 */

	"use strict";

	var EventConstants = __webpack_require__(94);
	var EventPluginHub = __webpack_require__(95);
	var EventPropagators = __webpack_require__(96);
	var ExecutionEnvironment = __webpack_require__(34);
	var ReactUpdates = __webpack_require__(48);
	var SyntheticEvent = __webpack_require__(98);

	var isEventSupported = __webpack_require__(131);
	var isTextInputElement = __webpack_require__(183);
	var keyOf = __webpack_require__(56);

	var topLevelTypes = EventConstants.topLevelTypes;

	var eventTypes = {
	  change: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onChange: null}),
	      captured: keyOf({onChangeCapture: null})
	    },
	    dependencies: [
	      topLevelTypes.topBlur,
	      topLevelTypes.topChange,
	      topLevelTypes.topClick,
	      topLevelTypes.topFocus,
	      topLevelTypes.topInput,
	      topLevelTypes.topKeyDown,
	      topLevelTypes.topKeyUp,
	      topLevelTypes.topSelectionChange
	    ]
	  }
	};

	/**
	 * For IE shims
	 */
	var activeElement = null;
	var activeElementID = null;
	var activeElementValue = null;
	var activeElementValueProp = null;

	/**
	 * SECTION: handle `change` event
	 */
	function shouldUseChangeEvent(elem) {
	  return (
	    elem.nodeName === 'SELECT' ||
	    (elem.nodeName === 'INPUT' && elem.type === 'file')
	  );
	}

	var doesChangeEventBubble = false;
	if (ExecutionEnvironment.canUseDOM) {
	  // See `handleChange` comment below
	  doesChangeEventBubble = isEventSupported('change') && (
	    !('documentMode' in document) || document.documentMode > 8
	  );
	}

	function manualDispatchChangeEvent(nativeEvent) {
	  var event = SyntheticEvent.getPooled(
	    eventTypes.change,
	    activeElementID,
	    nativeEvent
	  );
	  EventPropagators.accumulateTwoPhaseDispatches(event);

	  // If change and propertychange bubbled, we'd just bind to it like all the
	  // other events and have it go through ReactBrowserEventEmitter. Since it
	  // doesn't, we manually listen for the events and so we have to enqueue and
	  // process the abstract event manually.
	  //
	  // Batching is necessary here in order to ensure that all event handlers run
	  // before the next rerender (including event handlers attached to ancestor
	  // elements instead of directly on the input). Without this, controlled
	  // components don't work properly in conjunction with event bubbling because
	  // the component is rerendered and the value reverted before all the event
	  // handlers can run. See https://github.com/facebook/react/issues/708.
	  ReactUpdates.batchedUpdates(runEventInBatch, event);
	}

	function runEventInBatch(event) {
	  EventPluginHub.enqueueEvents(event);
	  EventPluginHub.processEventQueue();
	}

	function startWatchingForChangeEventIE8(target, targetID) {
	  activeElement = target;
	  activeElementID = targetID;
	  activeElement.attachEvent('onchange', manualDispatchChangeEvent);
	}

	function stopWatchingForChangeEventIE8() {
	  if (!activeElement) {
	    return;
	  }
	  activeElement.detachEvent('onchange', manualDispatchChangeEvent);
	  activeElement = null;
	  activeElementID = null;
	}

	function getTargetIDForChangeEvent(
	    topLevelType,
	    topLevelTarget,
	    topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topChange) {
	    return topLevelTargetID;
	  }
	}
	function handleEventsForChangeEventIE8(
	    topLevelType,
	    topLevelTarget,
	    topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topFocus) {
	    // stopWatching() should be a noop here but we call it just in case we
	    // missed a blur event somehow.
	    stopWatchingForChangeEventIE8();
	    startWatchingForChangeEventIE8(topLevelTarget, topLevelTargetID);
	  } else if (topLevelType === topLevelTypes.topBlur) {
	    stopWatchingForChangeEventIE8();
	  }
	}


	/**
	 * SECTION: handle `input` event
	 */
	var isInputEventSupported = false;
	if (ExecutionEnvironment.canUseDOM) {
	  // IE9 claims to support the input event but fails to trigger it when
	  // deleting text, so we ignore its input events
	  isInputEventSupported = isEventSupported('input') && (
	    !('documentMode' in document) || document.documentMode > 9
	  );
	}

	/**
	 * (For old IE.) Replacement getter/setter for the `value` property that gets
	 * set on the active element.
	 */
	var newValueProp =  {
	  get: function() {
	    return activeElementValueProp.get.call(this);
	  },
	  set: function(val) {
	    // Cast to a string so we can do equality checks.
	    activeElementValue = '' + val;
	    activeElementValueProp.set.call(this, val);
	  }
	};

	/**
	 * (For old IE.) Starts tracking propertychange events on the passed-in element
	 * and override the value property so that we can distinguish user events from
	 * value changes in JS.
	 */
	function startWatchingForValueChange(target, targetID) {
	  activeElement = target;
	  activeElementID = targetID;
	  activeElementValue = target.value;
	  activeElementValueProp = Object.getOwnPropertyDescriptor(
	    target.constructor.prototype,
	    'value'
	  );

	  Object.defineProperty(activeElement, 'value', newValueProp);
	  activeElement.attachEvent('onpropertychange', handlePropertyChange);
	}

	/**
	 * (For old IE.) Removes the event listeners from the currently-tracked element,
	 * if any exists.
	 */
	function stopWatchingForValueChange() {
	  if (!activeElement) {
	    return;
	  }

	  // delete restores the original property definition
	  delete activeElement.value;
	  activeElement.detachEvent('onpropertychange', handlePropertyChange);

	  activeElement = null;
	  activeElementID = null;
	  activeElementValue = null;
	  activeElementValueProp = null;
	}

	/**
	 * (For old IE.) Handles a propertychange event, sending a `change` event if
	 * the value of the active element has changed.
	 */
	function handlePropertyChange(nativeEvent) {
	  if (nativeEvent.propertyName !== 'value') {
	    return;
	  }
	  var value = nativeEvent.srcElement.value;
	  if (value === activeElementValue) {
	    return;
	  }
	  activeElementValue = value;

	  manualDispatchChangeEvent(nativeEvent);
	}

	/**
	 * If a `change` event should be fired, returns the target's ID.
	 */
	function getTargetIDForInputEvent(
	    topLevelType,
	    topLevelTarget,
	    topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topInput) {
	    // In modern browsers (i.e., not IE8 or IE9), the input event is exactly
	    // what we want so fall through here and trigger an abstract event
	    return topLevelTargetID;
	  }
	}

	// For IE8 and IE9.
	function handleEventsForInputEventIE(
	    topLevelType,
	    topLevelTarget,
	    topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topFocus) {
	    // In IE8, we can capture almost all .value changes by adding a
	    // propertychange handler and looking for events with propertyName
	    // equal to 'value'
	    // In IE9, propertychange fires for most input events but is buggy and
	    // doesn't fire when text is deleted, but conveniently, selectionchange
	    // appears to fire in all of the remaining cases so we catch those and
	    // forward the event if the value has changed
	    // In either case, we don't want to call the event handler if the value
	    // is changed from JS so we redefine a setter for `.value` that updates
	    // our activeElementValue variable, allowing us to ignore those changes
	    //
	    // stopWatching() should be a noop here but we call it just in case we
	    // missed a blur event somehow.
	    stopWatchingForValueChange();
	    startWatchingForValueChange(topLevelTarget, topLevelTargetID);
	  } else if (topLevelType === topLevelTypes.topBlur) {
	    stopWatchingForValueChange();
	  }
	}

	// For IE8 and IE9.
	function getTargetIDForInputEventIE(
	    topLevelType,
	    topLevelTarget,
	    topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topSelectionChange ||
	      topLevelType === topLevelTypes.topKeyUp ||
	      topLevelType === topLevelTypes.topKeyDown) {
	    // On the selectionchange event, the target is just document which isn't
	    // helpful for us so just check activeElement instead.
	    //
	    // 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
	    // propertychange on the first input event after setting `value` from a
	    // script and fires only keydown, keypress, keyup. Catching keyup usually
	    // gets it and catching keydown lets us fire an event for the first
	    // keystroke if user does a key repeat (it'll be a little delayed: right
	    // before the second keystroke). Other input methods (e.g., paste) seem to
	    // fire selectionchange normally.
	    if (activeElement && activeElement.value !== activeElementValue) {
	      activeElementValue = activeElement.value;
	      return activeElementID;
	    }
	  }
	}


	/**
	 * SECTION: handle `click` event
	 */
	function shouldUseClickEvent(elem) {
	  // Use the `click` event to detect changes to checkbox and radio inputs.
	  // This approach works across all browsers, whereas `change` does not fire
	  // until `blur` in IE8.
	  return (
	    elem.nodeName === 'INPUT' &&
	    (elem.type === 'checkbox' || elem.type === 'radio')
	  );
	}

	function getTargetIDForClickEvent(
	    topLevelType,
	    topLevelTarget,
	    topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topClick) {
	    return topLevelTargetID;
	  }
	}

	/**
	 * This plugin creates an `onChange` event that normalizes change events
	 * across form elements. This event fires at a time when it's possible to
	 * change the element's value without seeing a flicker.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - select
	 */
	var ChangeEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {

	    var getTargetIDFunc, handleEventFunc;
	    if (shouldUseChangeEvent(topLevelTarget)) {
	      if (doesChangeEventBubble) {
	        getTargetIDFunc = getTargetIDForChangeEvent;
	      } else {
	        handleEventFunc = handleEventsForChangeEventIE8;
	      }
	    } else if (isTextInputElement(topLevelTarget)) {
	      if (isInputEventSupported) {
	        getTargetIDFunc = getTargetIDForInputEvent;
	      } else {
	        getTargetIDFunc = getTargetIDForInputEventIE;
	        handleEventFunc = handleEventsForInputEventIE;
	      }
	    } else if (shouldUseClickEvent(topLevelTarget)) {
	      getTargetIDFunc = getTargetIDForClickEvent;
	    }

	    if (getTargetIDFunc) {
	      var targetID = getTargetIDFunc(
	        topLevelType,
	        topLevelTarget,
	        topLevelTargetID
	      );
	      if (targetID) {
	        var event = SyntheticEvent.getPooled(
	          eventTypes.change,
	          targetID,
	          nativeEvent
	        );
	        EventPropagators.accumulateTwoPhaseDispatches(event);
	        return event;
	      }
	    }

	    if (handleEventFunc) {
	      handleEventFunc(
	        topLevelType,
	        topLevelTarget,
	        topLevelTargetID
	      );
	    }
	  }

	};

	module.exports = ChangeEventPlugin;


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ClientReactRootIndex
	 * @typechecks
	 */

	"use strict";

	var nextReactRootIndex = 0;

	var ClientReactRootIndex = {
	  createReactRootIndex: function() {
	    return nextReactRootIndex++;
	  }
	};

	module.exports = ClientReactRootIndex;


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CompositionEventPlugin
	 * @typechecks static-only
	 */

	"use strict";

	var EventConstants = __webpack_require__(94);
	var EventPropagators = __webpack_require__(96);
	var ExecutionEnvironment = __webpack_require__(34);
	var ReactInputSelection = __webpack_require__(184);
	var SyntheticCompositionEvent = __webpack_require__(185);

	var getTextContentAccessor = __webpack_require__(186);
	var keyOf = __webpack_require__(56);

	var END_KEYCODES = [9, 13, 27, 32]; // Tab, Return, Esc, Space
	var START_KEYCODE = 229;

	var useCompositionEvent = (
	  ExecutionEnvironment.canUseDOM &&
	  'CompositionEvent' in window
	);

	// In IE9+, we have access to composition events, but the data supplied
	// by the native compositionend event may be incorrect. In Korean, for example,
	// the compositionend event contains only one character regardless of
	// how many characters have been composed since compositionstart.
	// We therefore use the fallback data while still using the native
	// events as triggers.
	var useFallbackData = (
	  !useCompositionEvent ||
	  (
	    'documentMode' in document &&
	    document.documentMode > 8 &&
	    document.documentMode <= 11
	  )
	);

	var topLevelTypes = EventConstants.topLevelTypes;
	var currentComposition = null;

	// Events and their corresponding property names.
	var eventTypes = {
	  compositionEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onCompositionEnd: null}),
	      captured: keyOf({onCompositionEndCapture: null})
	    },
	    dependencies: [
	      topLevelTypes.topBlur,
	      topLevelTypes.topCompositionEnd,
	      topLevelTypes.topKeyDown,
	      topLevelTypes.topKeyPress,
	      topLevelTypes.topKeyUp,
	      topLevelTypes.topMouseDown
	    ]
	  },
	  compositionStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onCompositionStart: null}),
	      captured: keyOf({onCompositionStartCapture: null})
	    },
	    dependencies: [
	      topLevelTypes.topBlur,
	      topLevelTypes.topCompositionStart,
	      topLevelTypes.topKeyDown,
	      topLevelTypes.topKeyPress,
	      topLevelTypes.topKeyUp,
	      topLevelTypes.topMouseDown
	    ]
	  },
	  compositionUpdate: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onCompositionUpdate: null}),
	      captured: keyOf({onCompositionUpdateCapture: null})
	    },
	    dependencies: [
	      topLevelTypes.topBlur,
	      topLevelTypes.topCompositionUpdate,
	      topLevelTypes.topKeyDown,
	      topLevelTypes.topKeyPress,
	      topLevelTypes.topKeyUp,
	      topLevelTypes.topMouseDown
	    ]
	  }
	};

	/**
	 * Translate native top level events into event types.
	 *
	 * @param {string} topLevelType
	 * @return {object}
	 */
	function getCompositionEventType(topLevelType) {
	  switch (topLevelType) {
	    case topLevelTypes.topCompositionStart:
	      return eventTypes.compositionStart;
	    case topLevelTypes.topCompositionEnd:
	      return eventTypes.compositionEnd;
	    case topLevelTypes.topCompositionUpdate:
	      return eventTypes.compositionUpdate;
	  }
	}

	/**
	 * Does our fallback best-guess model think this event signifies that
	 * composition has begun?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
	function isFallbackStart(topLevelType, nativeEvent) {
	  return (
	    topLevelType === topLevelTypes.topKeyDown &&
	    nativeEvent.keyCode === START_KEYCODE
	  );
	}

	/**
	 * Does our fallback mode think that this event is the end of composition?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
	function isFallbackEnd(topLevelType, nativeEvent) {
	  switch (topLevelType) {
	    case topLevelTypes.topKeyUp:
	      // Command keys insert or clear IME input.
	      return (END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1);
	    case topLevelTypes.topKeyDown:
	      // Expect IME keyCode on each keydown. If we get any other
	      // code we must have exited earlier.
	      return (nativeEvent.keyCode !== START_KEYCODE);
	    case topLevelTypes.topKeyPress:
	    case topLevelTypes.topMouseDown:
	    case topLevelTypes.topBlur:
	      // Events are not possible without cancelling IME.
	      return true;
	    default:
	      return false;
	  }
	}

	/**
	 * Helper class stores information about selection and document state
	 * so we can figure out what changed at a later date.
	 *
	 * @param {DOMEventTarget} root
	 */
	function FallbackCompositionState(root) {
	  this.root = root;
	  this.startSelection = ReactInputSelection.getSelection(root);
	  this.startValue = this.getText();
	}

	/**
	 * Get current text of input.
	 *
	 * @return {string}
	 */
	FallbackCompositionState.prototype.getText = function() {
	  return this.root.value || this.root[getTextContentAccessor()];
	};

	/**
	 * Text that has changed since the start of composition.
	 *
	 * @return {string}
	 */
	FallbackCompositionState.prototype.getData = function() {
	  var endValue = this.getText();
	  var prefixLength = this.startSelection.start;
	  var suffixLength = this.startValue.length - this.startSelection.end;

	  return endValue.substr(
	    prefixLength,
	    endValue.length - suffixLength - prefixLength
	  );
	};

	/**
	 * This plugin creates `onCompositionStart`, `onCompositionUpdate` and
	 * `onCompositionEnd` events on inputs, textareas and contentEditable
	 * nodes.
	 */
	var CompositionEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {

	    var eventType;
	    var data;

	    if (useCompositionEvent) {
	      eventType = getCompositionEventType(topLevelType);
	    } else if (!currentComposition) {
	      if (isFallbackStart(topLevelType, nativeEvent)) {
	        eventType = eventTypes.compositionStart;
	      }
	    } else if (isFallbackEnd(topLevelType, nativeEvent)) {
	      eventType = eventTypes.compositionEnd;
	    }

	    if (useFallbackData) {
	      // The current composition is stored statically and must not be
	      // overwritten while composition continues.
	      if (!currentComposition && eventType === eventTypes.compositionStart) {
	        currentComposition = new FallbackCompositionState(topLevelTarget);
	      } else if (eventType === eventTypes.compositionEnd) {
	        if (currentComposition) {
	          data = currentComposition.getData();
	          currentComposition = null;
	        }
	      }
	    }

	    if (eventType) {
	      var event = SyntheticCompositionEvent.getPooled(
	        eventType,
	        topLevelTargetID,
	        nativeEvent
	      );
	      if (data) {
	        // Inject data generated from fallback path into the synthetic event.
	        // This matches the property of native CompositionEventInterface.
	        event.data = data;
	      }
	      EventPropagators.accumulateTwoPhaseDispatches(event);
	      return event;
	    }
	  }
	};

	module.exports = CompositionEventPlugin;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DefaultEventPluginOrder
	 */

	"use strict";

	 var keyOf = __webpack_require__(56);

	/**
	 * Module that is injectable into `EventPluginHub`, that specifies a
	 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
	 * plugins, without having to package every one of them. This is better than
	 * having plugins be ordered in the same order that they are injected because
	 * that ordering would be influenced by the packaging order.
	 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
	 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
	 */
	var DefaultEventPluginOrder = [
	  keyOf({ResponderEventPlugin: null}),
	  keyOf({SimpleEventPlugin: null}),
	  keyOf({TapEventPlugin: null}),
	  keyOf({EnterLeaveEventPlugin: null}),
	  keyOf({ChangeEventPlugin: null}),
	  keyOf({SelectEventPlugin: null}),
	  keyOf({CompositionEventPlugin: null}),
	  keyOf({BeforeInputEventPlugin: null}),
	  keyOf({AnalyticsEventPlugin: null}),
	  keyOf({MobileSafariClickEventPlugin: null})
	];

	module.exports = DefaultEventPluginOrder;


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EnterLeaveEventPlugin
	 * @typechecks static-only
	 */

	"use strict";

	var EventConstants = __webpack_require__(94);
	var EventPropagators = __webpack_require__(96);
	var SyntheticMouseEvent = __webpack_require__(187);

	var ReactMount = __webpack_require__(73);
	var keyOf = __webpack_require__(56);

	var topLevelTypes = EventConstants.topLevelTypes;
	var getFirstReactDOM = ReactMount.getFirstReactDOM;

	var eventTypes = {
	  mouseEnter: {
	    registrationName: keyOf({onMouseEnter: null}),
	    dependencies: [
	      topLevelTypes.topMouseOut,
	      topLevelTypes.topMouseOver
	    ]
	  },
	  mouseLeave: {
	    registrationName: keyOf({onMouseLeave: null}),
	    dependencies: [
	      topLevelTypes.topMouseOut,
	      topLevelTypes.topMouseOver
	    ]
	  }
	};

	var extractedEvents = [null, null];

	var EnterLeaveEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * For almost every interaction we care about, there will be both a top-level
	   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
	   * we do not extract duplicate events. However, moving the mouse into the
	   * browser from outside will not fire a `mouseout` event. In this case, we use
	   * the `mouseover` top-level event.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {
	    if (topLevelType === topLevelTypes.topMouseOver &&
	        (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
	      return null;
	    }
	    if (topLevelType !== topLevelTypes.topMouseOut &&
	        topLevelType !== topLevelTypes.topMouseOver) {
	      // Must not be a mouse in or mouse out - ignoring.
	      return null;
	    }

	    var win;
	    if (topLevelTarget.window === topLevelTarget) {
	      // `topLevelTarget` is probably a window object.
	      win = topLevelTarget;
	    } else {
	      // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
	      var doc = topLevelTarget.ownerDocument;
	      if (doc) {
	        win = doc.defaultView || doc.parentWindow;
	      } else {
	        win = window;
	      }
	    }

	    var from, to;
	    if (topLevelType === topLevelTypes.topMouseOut) {
	      from = topLevelTarget;
	      to =
	        getFirstReactDOM(nativeEvent.relatedTarget || nativeEvent.toElement) ||
	        win;
	    } else {
	      from = win;
	      to = topLevelTarget;
	    }

	    if (from === to) {
	      // Nothing pertains to our managed components.
	      return null;
	    }

	    var fromID = from ? ReactMount.getID(from) : '';
	    var toID = to ? ReactMount.getID(to) : '';

	    var leave = SyntheticMouseEvent.getPooled(
	      eventTypes.mouseLeave,
	      fromID,
	      nativeEvent
	    );
	    leave.type = 'mouseleave';
	    leave.target = from;
	    leave.relatedTarget = to;

	    var enter = SyntheticMouseEvent.getPooled(
	      eventTypes.mouseEnter,
	      toID,
	      nativeEvent
	    );
	    enter.type = 'mouseenter';
	    enter.target = to;
	    enter.relatedTarget = from;

	    EventPropagators.accumulateEnterLeaveDispatches(leave, enter, fromID, toID);

	    extractedEvents[0] = leave;
	    extractedEvents[1] = enter;

	    return extractedEvents;
	  }

	};

	module.exports = EnterLeaveEventPlugin;


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule HTMLDOMPropertyConfig
	 */

	/*jslint bitwise: true*/

	"use strict";

	var DOMProperty = __webpack_require__(91);
	var ExecutionEnvironment = __webpack_require__(34);

	var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;
	var MUST_USE_PROPERTY = DOMProperty.injection.MUST_USE_PROPERTY;
	var HAS_BOOLEAN_VALUE = DOMProperty.injection.HAS_BOOLEAN_VALUE;
	var HAS_SIDE_EFFECTS = DOMProperty.injection.HAS_SIDE_EFFECTS;
	var HAS_NUMERIC_VALUE = DOMProperty.injection.HAS_NUMERIC_VALUE;
	var HAS_POSITIVE_NUMERIC_VALUE =
	  DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
	var HAS_OVERLOADED_BOOLEAN_VALUE =
	  DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;

	var hasSVG;
	if (ExecutionEnvironment.canUseDOM) {
	  var implementation = document.implementation;
	  hasSVG = (
	    implementation &&
	    implementation.hasFeature &&
	    implementation.hasFeature(
	      'http://www.w3.org/TR/SVG11/feature#BasicStructure',
	      '1.1'
	    )
	  );
	}


	var HTMLDOMPropertyConfig = {
	  isCustomAttribute: RegExp.prototype.test.bind(
	    /^(data|aria)-[a-z_][a-z\d_.\-]*$/
	  ),
	  Properties: {
	    /**
	     * Standard Properties
	     */
	    accept: null,
	    acceptCharset: null,
	    accessKey: null,
	    action: null,
	    allowFullScreen: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    allowTransparency: MUST_USE_ATTRIBUTE,
	    alt: null,
	    async: HAS_BOOLEAN_VALUE,
	    autoComplete: null,
	    // autoFocus is polyfilled/normalized by AutoFocusMixin
	    // autoFocus: HAS_BOOLEAN_VALUE,
	    autoPlay: HAS_BOOLEAN_VALUE,
	    cellPadding: null,
	    cellSpacing: null,
	    charSet: MUST_USE_ATTRIBUTE,
	    checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    classID: MUST_USE_ATTRIBUTE,
	    // To set className on SVG elements, it's necessary to use .setAttribute;
	    // this works on HTML elements too in all browsers except IE8. Conveniently,
	    // IE8 doesn't support SVG and so we can simply use the attribute in
	    // browsers that support SVG and the property in browsers that don't,
	    // regardless of whether the element is HTML or SVG.
	    className: hasSVG ? MUST_USE_ATTRIBUTE : MUST_USE_PROPERTY,
	    cols: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
	    colSpan: null,
	    content: null,
	    contentEditable: null,
	    contextMenu: MUST_USE_ATTRIBUTE,
	    controls: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    coords: null,
	    crossOrigin: null,
	    data: null, // For `<object />` acts as `src`.
	    dateTime: MUST_USE_ATTRIBUTE,
	    defer: HAS_BOOLEAN_VALUE,
	    dir: null,
	    disabled: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    download: HAS_OVERLOADED_BOOLEAN_VALUE,
	    draggable: null,
	    encType: null,
	    form: MUST_USE_ATTRIBUTE,
	    formAction: MUST_USE_ATTRIBUTE,
	    formEncType: MUST_USE_ATTRIBUTE,
	    formMethod: MUST_USE_ATTRIBUTE,
	    formNoValidate: HAS_BOOLEAN_VALUE,
	    formTarget: MUST_USE_ATTRIBUTE,
	    frameBorder: MUST_USE_ATTRIBUTE,
	    height: MUST_USE_ATTRIBUTE,
	    hidden: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    href: null,
	    hrefLang: null,
	    htmlFor: null,
	    httpEquiv: null,
	    icon: null,
	    id: MUST_USE_PROPERTY,
	    label: null,
	    lang: null,
	    list: MUST_USE_ATTRIBUTE,
	    loop: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    manifest: MUST_USE_ATTRIBUTE,
	    marginHeight: null,
	    marginWidth: null,
	    max: null,
	    maxLength: MUST_USE_ATTRIBUTE,
	    media: MUST_USE_ATTRIBUTE,
	    mediaGroup: null,
	    method: null,
	    min: null,
	    multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    name: null,
	    noValidate: HAS_BOOLEAN_VALUE,
	    open: null,
	    pattern: null,
	    placeholder: null,
	    poster: null,
	    preload: null,
	    radioGroup: null,
	    readOnly: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    rel: null,
	    required: HAS_BOOLEAN_VALUE,
	    role: MUST_USE_ATTRIBUTE,
	    rows: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
	    rowSpan: null,
	    sandbox: null,
	    scope: null,
	    scrolling: null,
	    seamless: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    shape: null,
	    size: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
	    sizes: MUST_USE_ATTRIBUTE,
	    span: HAS_POSITIVE_NUMERIC_VALUE,
	    spellCheck: null,
	    src: null,
	    srcDoc: MUST_USE_PROPERTY,
	    srcSet: MUST_USE_ATTRIBUTE,
	    start: HAS_NUMERIC_VALUE,
	    step: null,
	    style: null,
	    tabIndex: null,
	    target: null,
	    title: null,
	    type: null,
	    useMap: null,
	    value: MUST_USE_PROPERTY | HAS_SIDE_EFFECTS,
	    width: MUST_USE_ATTRIBUTE,
	    wmode: MUST_USE_ATTRIBUTE,

	    /**
	     * Non-standard Properties
	     */
	    autoCapitalize: null, // Supported in Mobile Safari for keyboard hints
	    autoCorrect: null, // Supported in Mobile Safari for keyboard hints
	    itemProp: MUST_USE_ATTRIBUTE, // Microdata: http://schema.org/docs/gs.html
	    itemScope: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE, // Microdata: http://schema.org/docs/gs.html
	    itemType: MUST_USE_ATTRIBUTE, // Microdata: http://schema.org/docs/gs.html
	    property: null // Supports OG in meta tags
	  },
	  DOMAttributeNames: {
	    acceptCharset: 'accept-charset',
	    className: 'class',
	    htmlFor: 'for',
	    httpEquiv: 'http-equiv'
	  },
	  DOMPropertyNames: {
	    autoCapitalize: 'autocapitalize',
	    autoComplete: 'autocomplete',
	    autoCorrect: 'autocorrect',
	    autoFocus: 'autofocus',
	    autoPlay: 'autoplay',
	    encType: 'enctype',
	    hrefLang: 'hreflang',
	    radioGroup: 'radiogroup',
	    spellCheck: 'spellcheck',
	    srcDoc: 'srcdoc',
	    srcSet: 'srcset'
	  }
	};

	module.exports = HTMLDOMPropertyConfig;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule MobileSafariClickEventPlugin
	 * @typechecks static-only
	 */

	"use strict";

	var EventConstants = __webpack_require__(94);

	var emptyFunction = __webpack_require__(58);

	var topLevelTypes = EventConstants.topLevelTypes;

	/**
	 * Mobile Safari does not fire properly bubble click events on non-interactive
	 * elements, which means delegated click listeners do not fire. The workaround
	 * for this bug involves attaching an empty click listener on the target node.
	 *
	 * This particular plugin works around the bug by attaching an empty click
	 * listener on `touchstart` (which does fire on every element).
	 */
	var MobileSafariClickEventPlugin = {

	  eventTypes: null,

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {
	    if (topLevelType === topLevelTypes.topTouchStart) {
	      var target = nativeEvent.target;
	      if (target && !target.onclick) {
	        target.onclick = emptyFunction;
	      }
	    }
	  }

	};

	module.exports = MobileSafariClickEventPlugin;


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentBrowserEnvironment
	 */

	/*jslint evil: true */

	"use strict";

	var ReactDOMIDOperations = __webpack_require__(188);
	var ReactMarkupChecksum = __webpack_require__(161);
	var ReactMount = __webpack_require__(73);
	var ReactPerf = __webpack_require__(75);
	var ReactReconcileTransaction = __webpack_require__(189);

	var getReactRootElementInContainer = __webpack_require__(158);
	var invariant = __webpack_require__(31);
	var setInnerHTML = __webpack_require__(190);


	var ELEMENT_NODE_TYPE = 1;
	var DOC_NODE_TYPE = 9;


	/**
	 * Abstracts away all functionality of `ReactComponent` requires knowledge of
	 * the browser context.
	 */
	var ReactComponentBrowserEnvironment = {
	  ReactReconcileTransaction: ReactReconcileTransaction,

	  BackendIDOperations: ReactDOMIDOperations,

	  /**
	   * If a particular environment requires that some resources be cleaned up,
	   * specify this in the injected Mixin. In the DOM, we would likely want to
	   * purge any cached node ID lookups.
	   *
	   * @private
	   */
	  unmountIDFromEnvironment: function(rootNodeID) {
	    ReactMount.purgeID(rootNodeID);
	  },

	  /**
	   * @param {string} markup Markup string to place into the DOM Element.
	   * @param {DOMElement} container DOM Element to insert markup into.
	   * @param {boolean} shouldReuseMarkup Should reuse the existing markup in the
	   * container if possible.
	   */
	  mountImageIntoNode: ReactPerf.measure(
	    'ReactComponentBrowserEnvironment',
	    'mountImageIntoNode',
	    function(markup, container, shouldReuseMarkup) {
	      ("production" !== (undefined) ? invariant(
	        container && (
	          container.nodeType === ELEMENT_NODE_TYPE ||
	            container.nodeType === DOC_NODE_TYPE
	        ),
	        'mountComponentIntoNode(...): Target container is not valid.'
	      ) : invariant(container && (
	        container.nodeType === ELEMENT_NODE_TYPE ||
	          container.nodeType === DOC_NODE_TYPE
	      )));

	      if (shouldReuseMarkup) {
	        if (ReactMarkupChecksum.canReuseMarkup(
	          markup,
	          getReactRootElementInContainer(container))) {
	          return;
	        } else {
	          ("production" !== (undefined) ? invariant(
	            container.nodeType !== DOC_NODE_TYPE,
	            'You\'re trying to render a component to the document using ' +
	            'server rendering but the checksum was invalid. This usually ' +
	            'means you rendered a different component type or props on ' +
	            'the client from the one on the server, or your render() ' +
	            'methods are impure. React cannot handle this case due to ' +
	            'cross-browser quirks by rendering at the document root. You ' +
	            'should look for environment dependent code in your components ' +
	            'and ensure the props are the same client and server side.'
	          ) : invariant(container.nodeType !== DOC_NODE_TYPE));

	          if ("production" !== (undefined)) {
	            console.warn(
	              'React attempted to use reuse markup in a container but the ' +
	              'checksum was invalid. This generally means that you are ' +
	              'using server rendering and the markup generated on the ' +
	              'server was not what the client was expecting. React injected ' +
	              'new markup to compensate which works but you have lost many ' +
	              'of the benefits of server rendering. Instead, figure out ' +
	              'why the markup being generated is different on the client ' +
	              'or server.'
	            );
	          }
	        }
	      }

	      ("production" !== (undefined) ? invariant(
	        container.nodeType !== DOC_NODE_TYPE,
	        'You\'re trying to render a component to the document but ' +
	          'you didn\'t use server rendering. We can\'t do this ' +
	          'without using server rendering due to cross-browser quirks. ' +
	          'See renderComponentToString() for server rendering.'
	      ) : invariant(container.nodeType !== DOC_NODE_TYPE));

	      setInnerHTML(container, markup);
	    }
	  )
	};

	module.exports = ReactComponentBrowserEnvironment;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultBatchingStrategy
	 */

	"use strict";

	var ReactUpdates = __webpack_require__(48);
	var Transaction = __webpack_require__(90);

	var assign = __webpack_require__(79);
	var emptyFunction = __webpack_require__(58);

	var RESET_BATCHED_UPDATES = {
	  initialize: emptyFunction,
	  close: function() {
	    ReactDefaultBatchingStrategy.isBatchingUpdates = false;
	  }
	};

	var FLUSH_BATCHED_UPDATES = {
	  initialize: emptyFunction,
	  close: ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)
	};

	var TRANSACTION_WRAPPERS = [FLUSH_BATCHED_UPDATES, RESET_BATCHED_UPDATES];

	function ReactDefaultBatchingStrategyTransaction() {
	  this.reinitializeTransaction();
	}

	assign(
	  ReactDefaultBatchingStrategyTransaction.prototype,
	  Transaction.Mixin,
	  {
	    getTransactionWrappers: function() {
	      return TRANSACTION_WRAPPERS;
	    }
	  }
	);

	var transaction = new ReactDefaultBatchingStrategyTransaction();

	var ReactDefaultBatchingStrategy = {
	  isBatchingUpdates: false,

	  /**
	   * Call the provided function in a context within which calls to `setState`
	   * and friends are batched such that components aren't updated unnecessarily.
	   */
	  batchedUpdates: function(callback, a, b) {
	    var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;

	    ReactDefaultBatchingStrategy.isBatchingUpdates = true;

	    // The code is written this way to avoid extra allocations
	    if (alreadyBatchingUpdates) {
	      callback(a, b);
	    } else {
	      transaction.perform(callback, null, a, b);
	    }
	  }
	};

	module.exports = ReactDefaultBatchingStrategy;


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMButton
	 */

	"use strict";

	var AutoFocusMixin = __webpack_require__(191);
	var ReactBrowserComponentMixin = __webpack_require__(130);
	var ReactCompositeComponent = __webpack_require__(64);
	var ReactElement = __webpack_require__(54);
	var ReactDOM = __webpack_require__(68);

	var keyMirror = __webpack_require__(120);

	// Store a reference to the <button> `ReactDOMComponent`. TODO: use string
	var button = ReactElement.createFactory(ReactDOM.button.type);

	var mouseListenerNames = keyMirror({
	  onClick: true,
	  onDoubleClick: true,
	  onMouseDown: true,
	  onMouseMove: true,
	  onMouseUp: true,
	  onClickCapture: true,
	  onDoubleClickCapture: true,
	  onMouseDownCapture: true,
	  onMouseMoveCapture: true,
	  onMouseUpCapture: true
	});

	/**
	 * Implements a <button> native component that does not receive mouse events
	 * when `disabled` is set.
	 */
	var ReactDOMButton = ReactCompositeComponent.createClass({
	  displayName: 'ReactDOMButton',

	  mixins: [AutoFocusMixin, ReactBrowserComponentMixin],

	  render: function() {
	    var props = {};

	    // Copy the props; except the mouse listeners if we're disabled
	    for (var key in this.props) {
	      if (this.props.hasOwnProperty(key) &&
	          (!this.props.disabled || !mouseListenerNames[key])) {
	        props[key] = this.props[key];
	      }
	    }

	    return button(props, this.props.children);
	  }

	});

	module.exports = ReactDOMButton;


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMForm
	 */

	"use strict";

	var EventConstants = __webpack_require__(94);
	var LocalEventTrapMixin = __webpack_require__(192);
	var ReactBrowserComponentMixin = __webpack_require__(130);
	var ReactCompositeComponent = __webpack_require__(64);
	var ReactElement = __webpack_require__(54);
	var ReactDOM = __webpack_require__(68);

	// Store a reference to the <form> `ReactDOMComponent`. TODO: use string
	var form = ReactElement.createFactory(ReactDOM.form.type);

	/**
	 * Since onSubmit doesn't bubble OR capture on the top level in IE8, we need
	 * to capture it on the <form> element itself. There are lots of hacks we could
	 * do to accomplish this, but the most reliable is to make <form> a
	 * composite component and use `componentDidMount` to attach the event handlers.
	 */
	var ReactDOMForm = ReactCompositeComponent.createClass({
	  displayName: 'ReactDOMForm',

	  mixins: [ReactBrowserComponentMixin, LocalEventTrapMixin],

	  render: function() {
	    // TODO: Instead of using `ReactDOM` directly, we should use JSX. However,
	    // `jshint` fails to parse JSX so in order for linting to work in the open
	    // source repo, we need to just use `ReactDOM.form`.
	    return form(this.props);
	  },

	  componentDidMount: function() {
	    this.trapBubbledEvent(EventConstants.topLevelTypes.topReset, 'reset');
	    this.trapBubbledEvent(EventConstants.topLevelTypes.topSubmit, 'submit');
	  }
	});

	module.exports = ReactDOMForm;


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMImg
	 */

	"use strict";

	var EventConstants = __webpack_require__(94);
	var LocalEventTrapMixin = __webpack_require__(192);
	var ReactBrowserComponentMixin = __webpack_require__(130);
	var ReactCompositeComponent = __webpack_require__(64);
	var ReactElement = __webpack_require__(54);
	var ReactDOM = __webpack_require__(68);

	// Store a reference to the <img> `ReactDOMComponent`. TODO: use string
	var img = ReactElement.createFactory(ReactDOM.img.type);

	/**
	 * Since onLoad doesn't bubble OR capture on the top level in IE8, we need to
	 * capture it on the <img> element itself. There are lots of hacks we could do
	 * to accomplish this, but the most reliable is to make <img> a composite
	 * component and use `componentDidMount` to attach the event handlers.
	 */
	var ReactDOMImg = ReactCompositeComponent.createClass({
	  displayName: 'ReactDOMImg',
	  tagName: 'IMG',

	  mixins: [ReactBrowserComponentMixin, LocalEventTrapMixin],

	  render: function() {
	    return img(this.props);
	  },

	  componentDidMount: function() {
	    this.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load');
	    this.trapBubbledEvent(EventConstants.topLevelTypes.topError, 'error');
	  }
	});

	module.exports = ReactDOMImg;


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMInput
	 */

	"use strict";

	var AutoFocusMixin = __webpack_require__(191);
	var DOMPropertyOperations = __webpack_require__(60);
	var LinkedValueUtils = __webpack_require__(193);
	var ReactBrowserComponentMixin = __webpack_require__(130);
	var ReactCompositeComponent = __webpack_require__(64);
	var ReactElement = __webpack_require__(54);
	var ReactDOM = __webpack_require__(68);
	var ReactMount = __webpack_require__(73);
	var ReactUpdates = __webpack_require__(48);

	var assign = __webpack_require__(79);
	var invariant = __webpack_require__(31);

	// Store a reference to the <input> `ReactDOMComponent`. TODO: use string
	var input = ReactElement.createFactory(ReactDOM.input.type);

	var instancesByReactID = {};

	function forceUpdateIfMounted() {
	  /*jshint validthis:true */
	  if (this.isMounted()) {
	    this.forceUpdate();
	  }
	}

	/**
	 * Implements an <input> native component that allows setting these optional
	 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
	 *
	 * If `checked` or `value` are not supplied (or null/undefined), user actions
	 * that affect the checked state or value will trigger updates to the element.
	 *
	 * If they are supplied (and not null/undefined), the rendered element will not
	 * trigger updates to the element. Instead, the props must change in order for
	 * the rendered element to be updated.
	 *
	 * The rendered element will be initialized as unchecked (or `defaultChecked`)
	 * with an empty value (or `defaultValue`).
	 *
	 * @see http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
	 */
	var ReactDOMInput = ReactCompositeComponent.createClass({
	  displayName: 'ReactDOMInput',

	  mixins: [AutoFocusMixin, LinkedValueUtils.Mixin, ReactBrowserComponentMixin],

	  getInitialState: function() {
	    var defaultValue = this.props.defaultValue;
	    return {
	      initialChecked: this.props.defaultChecked || false,
	      initialValue: defaultValue != null ? defaultValue : null
	    };
	  },

	  render: function() {
	    // Clone `this.props` so we don't mutate the input.
	    var props = assign({}, this.props);

	    props.defaultChecked = null;
	    props.defaultValue = null;

	    var value = LinkedValueUtils.getValue(this);
	    props.value = value != null ? value : this.state.initialValue;

	    var checked = LinkedValueUtils.getChecked(this);
	    props.checked = checked != null ? checked : this.state.initialChecked;

	    props.onChange = this._handleChange;

	    return input(props, this.props.children);
	  },

	  componentDidMount: function() {
	    var id = ReactMount.getID(this.getDOMNode());
	    instancesByReactID[id] = this;
	  },

	  componentWillUnmount: function() {
	    var rootNode = this.getDOMNode();
	    var id = ReactMount.getID(rootNode);
	    delete instancesByReactID[id];
	  },

	  componentDidUpdate: function(prevProps, prevState, prevContext) {
	    var rootNode = this.getDOMNode();
	    if (this.props.checked != null) {
	      DOMPropertyOperations.setValueForProperty(
	        rootNode,
	        'checked',
	        this.props.checked || false
	      );
	    }

	    var value = LinkedValueUtils.getValue(this);
	    if (value != null) {
	      // Cast `value` to a string to ensure the value is set correctly. While
	      // browsers typically do this as necessary, jsdom doesn't.
	      DOMPropertyOperations.setValueForProperty(rootNode, 'value', '' + value);
	    }
	  },

	  _handleChange: function(event) {
	    var returnValue;
	    var onChange = LinkedValueUtils.getOnChange(this);
	    if (onChange) {
	      returnValue = onChange.call(this, event);
	    }
	    // Here we use asap to wait until all updates have propagated, which
	    // is important when using controlled components within layers:
	    // https://github.com/facebook/react/issues/1698
	    ReactUpdates.asap(forceUpdateIfMounted, this);

	    var name = this.props.name;
	    if (this.props.type === 'radio' && name != null) {
	      var rootNode = this.getDOMNode();
	      var queryRoot = rootNode;

	      while (queryRoot.parentNode) {
	        queryRoot = queryRoot.parentNode;
	      }

	      // If `rootNode.form` was non-null, then we could try `form.elements`,
	      // but that sometimes behaves strangely in IE8. We could also try using
	      // `form.getElementsByName`, but that will only return direct children
	      // and won't include inputs that use the HTML5 `form=` attribute. Since
	      // the input might not even be in a form, let's just use the global
	      // `querySelectorAll` to ensure we don't miss anything.
	      var group = queryRoot.querySelectorAll(
	        'input[name=' + JSON.stringify('' + name) + '][type="radio"]');

	      for (var i = 0, groupLen = group.length; i < groupLen; i++) {
	        var otherNode = group[i];
	        if (otherNode === rootNode ||
	            otherNode.form !== rootNode.form) {
	          continue;
	        }
	        var otherID = ReactMount.getID(otherNode);
	        ("production" !== (undefined) ? invariant(
	          otherID,
	          'ReactDOMInput: Mixing React and non-React radio inputs with the ' +
	          'same `name` is not supported.'
	        ) : invariant(otherID));
	        var otherInstance = instancesByReactID[otherID];
	        ("production" !== (undefined) ? invariant(
	          otherInstance,
	          'ReactDOMInput: Unknown radio button ID %s.',
	          otherID
	        ) : invariant(otherInstance));
	        // If this is a controlled radio button group, forcing the input that
	        // was previously checked to update will cause it to be come re-checked
	        // as appropriate.
	        ReactUpdates.asap(forceUpdateIfMounted, otherInstance);
	      }
	    }

	    return returnValue;
	  }

	});

	module.exports = ReactDOMInput;


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMOption
	 */

	"use strict";

	var ReactBrowserComponentMixin = __webpack_require__(130);
	var ReactCompositeComponent = __webpack_require__(64);
	var ReactElement = __webpack_require__(54);
	var ReactDOM = __webpack_require__(68);

	var warning = __webpack_require__(57);

	// Store a reference to the <option> `ReactDOMComponent`. TODO: use string
	var option = ReactElement.createFactory(ReactDOM.option.type);

	/**
	 * Implements an <option> native component that warns when `selected` is set.
	 */
	var ReactDOMOption = ReactCompositeComponent.createClass({
	  displayName: 'ReactDOMOption',

	  mixins: [ReactBrowserComponentMixin],

	  componentWillMount: function() {
	    // TODO (yungsters): Remove support for `selected` in <option>.
	    if ("production" !== (undefined)) {
	      ("production" !== (undefined) ? warning(
	        this.props.selected == null,
	        'Use the `defaultValue` or `value` props on <select> instead of ' +
	        'setting `selected` on <option>.'
	      ) : null);
	    }
	  },

	  render: function() {
	    return option(this.props, this.props.children);
	  }

	});

	module.exports = ReactDOMOption;


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMSelect
	 */

	"use strict";

	var AutoFocusMixin = __webpack_require__(191);
	var LinkedValueUtils = __webpack_require__(193);
	var ReactBrowserComponentMixin = __webpack_require__(130);
	var ReactCompositeComponent = __webpack_require__(64);
	var ReactElement = __webpack_require__(54);
	var ReactDOM = __webpack_require__(68);
	var ReactUpdates = __webpack_require__(48);

	var assign = __webpack_require__(79);

	// Store a reference to the <select> `ReactDOMComponent`. TODO: use string
	var select = ReactElement.createFactory(ReactDOM.select.type);

	function updateWithPendingValueIfMounted() {
	  /*jshint validthis:true */
	  if (this.isMounted()) {
	    this.setState({value: this._pendingValue});
	    this._pendingValue = 0;
	  }
	}

	/**
	 * Validation function for `value` and `defaultValue`.
	 * @private
	 */
	function selectValueType(props, propName, componentName) {
	  if (props[propName] == null) {
	    return;
	  }
	  if (props.multiple) {
	    if (!Array.isArray(props[propName])) {
	      return new Error(
	        ("The `" + propName + "` prop supplied to <select> must be an array if ") +
	        ("`multiple` is true.")
	      );
	    }
	  } else {
	    if (Array.isArray(props[propName])) {
	      return new Error(
	        ("The `" + propName + "` prop supplied to <select> must be a scalar ") +
	        ("value if `multiple` is false.")
	      );
	    }
	  }
	}

	/**
	 * If `value` is supplied, updates <option> elements on mount and update.
	 * @param {ReactComponent} component Instance of ReactDOMSelect
	 * @param {?*} propValue For uncontrolled components, null/undefined. For
	 * controlled components, a string (or with `multiple`, a list of strings).
	 * @private
	 */
	function updateOptions(component, propValue) {
	  var multiple = component.props.multiple;
	  var value = propValue != null ? propValue : component.state.value;
	  var options = component.getDOMNode().options;
	  var selectedValue, i, l;
	  if (multiple) {
	    selectedValue = {};
	    for (i = 0, l = value.length; i < l; ++i) {
	      selectedValue['' + value[i]] = true;
	    }
	  } else {
	    selectedValue = '' + value;
	  }
	  for (i = 0, l = options.length; i < l; i++) {
	    var selected = multiple ?
	      selectedValue.hasOwnProperty(options[i].value) :
	      options[i].value === selectedValue;

	    if (selected !== options[i].selected) {
	      options[i].selected = selected;
	    }
	  }
	}

	/**
	 * Implements a <select> native component that allows optionally setting the
	 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
	 * string. If `multiple` is true, the prop must be an array of strings.
	 *
	 * If `value` is not supplied (or null/undefined), user actions that change the
	 * selected option will trigger updates to the rendered options.
	 *
	 * If it is supplied (and not null/undefined), the rendered options will not
	 * update in response to user actions. Instead, the `value` prop must change in
	 * order for the rendered options to update.
	 *
	 * If `defaultValue` is provided, any options with the supplied values will be
	 * selected.
	 */
	var ReactDOMSelect = ReactCompositeComponent.createClass({
	  displayName: 'ReactDOMSelect',

	  mixins: [AutoFocusMixin, LinkedValueUtils.Mixin, ReactBrowserComponentMixin],

	  propTypes: {
	    defaultValue: selectValueType,
	    value: selectValueType
	  },

	  getInitialState: function() {
	    return {value: this.props.defaultValue || (this.props.multiple ? [] : '')};
	  },

	  componentWillMount: function() {
	    this._pendingValue = null;
	  },

	  componentWillReceiveProps: function(nextProps) {
	    if (!this.props.multiple && nextProps.multiple) {
	      this.setState({value: [this.state.value]});
	    } else if (this.props.multiple && !nextProps.multiple) {
	      this.setState({value: this.state.value[0]});
	    }
	  },

	  render: function() {
	    // Clone `this.props` so we don't mutate the input.
	    var props = assign({}, this.props);

	    props.onChange = this._handleChange;
	    props.value = null;

	    return select(props, this.props.children);
	  },

	  componentDidMount: function() {
	    updateOptions(this, LinkedValueUtils.getValue(this));
	  },

	  componentDidUpdate: function(prevProps) {
	    var value = LinkedValueUtils.getValue(this);
	    var prevMultiple = !!prevProps.multiple;
	    var multiple = !!this.props.multiple;
	    if (value != null || prevMultiple !== multiple) {
	      updateOptions(this, value);
	    }
	  },

	  _handleChange: function(event) {
	    var returnValue;
	    var onChange = LinkedValueUtils.getOnChange(this);
	    if (onChange) {
	      returnValue = onChange.call(this, event);
	    }

	    var selectedValue;
	    if (this.props.multiple) {
	      selectedValue = [];
	      var options = event.target.options;
	      for (var i = 0, l = options.length; i < l; i++) {
	        if (options[i].selected) {
	          selectedValue.push(options[i].value);
	        }
	      }
	    } else {
	      selectedValue = event.target.value;
	    }

	    this._pendingValue = selectedValue;
	    ReactUpdates.asap(updateWithPendingValueIfMounted, this);
	    return returnValue;
	  }

	});

	module.exports = ReactDOMSelect;


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMTextarea
	 */

	"use strict";

	var AutoFocusMixin = __webpack_require__(191);
	var DOMPropertyOperations = __webpack_require__(60);
	var LinkedValueUtils = __webpack_require__(193);
	var ReactBrowserComponentMixin = __webpack_require__(130);
	var ReactCompositeComponent = __webpack_require__(64);
	var ReactElement = __webpack_require__(54);
	var ReactDOM = __webpack_require__(68);
	var ReactUpdates = __webpack_require__(48);

	var assign = __webpack_require__(79);
	var invariant = __webpack_require__(31);

	var warning = __webpack_require__(57);

	// Store a reference to the <textarea> `ReactDOMComponent`. TODO: use string
	var textarea = ReactElement.createFactory(ReactDOM.textarea.type);

	function forceUpdateIfMounted() {
	  /*jshint validthis:true */
	  if (this.isMounted()) {
	    this.forceUpdate();
	  }
	}

	/**
	 * Implements a <textarea> native component that allows setting `value`, and
	 * `defaultValue`. This differs from the traditional DOM API because value is
	 * usually set as PCDATA children.
	 *
	 * If `value` is not supplied (or null/undefined), user actions that affect the
	 * value will trigger updates to the element.
	 *
	 * If `value` is supplied (and not null/undefined), the rendered element will
	 * not trigger updates to the element. Instead, the `value` prop must change in
	 * order for the rendered element to be updated.
	 *
	 * The rendered element will be initialized with an empty value, the prop
	 * `defaultValue` if specified, or the children content (deprecated).
	 */
	var ReactDOMTextarea = ReactCompositeComponent.createClass({
	  displayName: 'ReactDOMTextarea',

	  mixins: [AutoFocusMixin, LinkedValueUtils.Mixin, ReactBrowserComponentMixin],

	  getInitialState: function() {
	    var defaultValue = this.props.defaultValue;
	    // TODO (yungsters): Remove support for children content in <textarea>.
	    var children = this.props.children;
	    if (children != null) {
	      if ("production" !== (undefined)) {
	        ("production" !== (undefined) ? warning(
	          false,
	          'Use the `defaultValue` or `value` props instead of setting ' +
	          'children on <textarea>.'
	        ) : null);
	      }
	      ("production" !== (undefined) ? invariant(
	        defaultValue == null,
	        'If you supply `defaultValue` on a <textarea>, do not pass children.'
	      ) : invariant(defaultValue == null));
	      if (Array.isArray(children)) {
	        ("production" !== (undefined) ? invariant(
	          children.length <= 1,
	          '<textarea> can only have at most one child.'
	        ) : invariant(children.length <= 1));
	        children = children[0];
	      }

	      defaultValue = '' + children;
	    }
	    if (defaultValue == null) {
	      defaultValue = '';
	    }
	    var value = LinkedValueUtils.getValue(this);
	    return {
	      // We save the initial value so that `ReactDOMComponent` doesn't update
	      // `textContent` (unnecessary since we update value).
	      // The initial value can be a boolean or object so that's why it's
	      // forced to be a string.
	      initialValue: '' + (value != null ? value : defaultValue)
	    };
	  },

	  render: function() {
	    // Clone `this.props` so we don't mutate the input.
	    var props = assign({}, this.props);

	    ("production" !== (undefined) ? invariant(
	      props.dangerouslySetInnerHTML == null,
	      '`dangerouslySetInnerHTML` does not make sense on <textarea>.'
	    ) : invariant(props.dangerouslySetInnerHTML == null));

	    props.defaultValue = null;
	    props.value = null;
	    props.onChange = this._handleChange;

	    // Always set children to the same thing. In IE9, the selection range will
	    // get reset if `textContent` is mutated.
	    return textarea(props, this.state.initialValue);
	  },

	  componentDidUpdate: function(prevProps, prevState, prevContext) {
	    var value = LinkedValueUtils.getValue(this);
	    if (value != null) {
	      var rootNode = this.getDOMNode();
	      // Cast `value` to a string to ensure the value is set correctly. While
	      // browsers typically do this as necessary, jsdom doesn't.
	      DOMPropertyOperations.setValueForProperty(rootNode, 'value', '' + value);
	    }
	  },

	  _handleChange: function(event) {
	    var returnValue;
	    var onChange = LinkedValueUtils.getOnChange(this);
	    if (onChange) {
	      returnValue = onChange.call(this, event);
	    }
	    ReactUpdates.asap(forceUpdateIfMounted, this);
	    return returnValue;
	  }

	});

	module.exports = ReactDOMTextarea;


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEventListener
	 * @typechecks static-only
	 */

	"use strict";

	var EventListener = __webpack_require__(194);
	var ExecutionEnvironment = __webpack_require__(34);
	var PooledClass = __webpack_require__(89);
	var ReactInstanceHandles = __webpack_require__(71);
	var ReactMount = __webpack_require__(73);
	var ReactUpdates = __webpack_require__(48);

	var assign = __webpack_require__(79);
	var getEventTarget = __webpack_require__(171);
	var getUnboundedScrollPosition = __webpack_require__(195);

	/**
	 * Finds the parent React component of `node`.
	 *
	 * @param {*} node
	 * @return {?DOMEventTarget} Parent container, or `null` if the specified node
	 *                           is not nested.
	 */
	function findParent(node) {
	  // TODO: It may be a good idea to cache this to prevent unnecessary DOM
	  // traversal, but caching is difficult to do correctly without using a
	  // mutation observer to listen for all DOM changes.
	  var nodeID = ReactMount.getID(node);
	  var rootID = ReactInstanceHandles.getReactRootIDFromNodeID(nodeID);
	  var container = ReactMount.findReactContainerForID(rootID);
	  var parent = ReactMount.getFirstReactDOM(container);
	  return parent;
	}

	// Used to store ancestor hierarchy in top level callback
	function TopLevelCallbackBookKeeping(topLevelType, nativeEvent) {
	  this.topLevelType = topLevelType;
	  this.nativeEvent = nativeEvent;
	  this.ancestors = [];
	}
	assign(TopLevelCallbackBookKeeping.prototype, {
	  destructor: function() {
	    this.topLevelType = null;
	    this.nativeEvent = null;
	    this.ancestors.length = 0;
	  }
	});
	PooledClass.addPoolingTo(
	  TopLevelCallbackBookKeeping,
	  PooledClass.twoArgumentPooler
	);

	function handleTopLevelImpl(bookKeeping) {
	  var topLevelTarget = ReactMount.getFirstReactDOM(
	    getEventTarget(bookKeeping.nativeEvent)
	  ) || window;

	  // Loop through the hierarchy, in case there's any nested components.
	  // It's important that we build the array of ancestors before calling any
	  // event handlers, because event handlers can modify the DOM, leading to
	  // inconsistencies with ReactMount's node cache. See #1105.
	  var ancestor = topLevelTarget;
	  while (ancestor) {
	    bookKeeping.ancestors.push(ancestor);
	    ancestor = findParent(ancestor);
	  }

	  for (var i = 0, l = bookKeeping.ancestors.length; i < l; i++) {
	    topLevelTarget = bookKeeping.ancestors[i];
	    var topLevelTargetID = ReactMount.getID(topLevelTarget) || '';
	    ReactEventListener._handleTopLevel(
	      bookKeeping.topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      bookKeeping.nativeEvent
	    );
	  }
	}

	function scrollValueMonitor(cb) {
	  var scrollPosition = getUnboundedScrollPosition(window);
	  cb(scrollPosition);
	}

	var ReactEventListener = {
	  _enabled: true,
	  _handleTopLevel: null,

	  WINDOW_HANDLE: ExecutionEnvironment.canUseDOM ? window : null,

	  setHandleTopLevel: function(handleTopLevel) {
	    ReactEventListener._handleTopLevel = handleTopLevel;
	  },

	  setEnabled: function(enabled) {
	    ReactEventListener._enabled = !!enabled;
	  },

	  isEnabled: function() {
	    return ReactEventListener._enabled;
	  },


	  /**
	   * Traps top-level events by using event bubbling.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {string} handlerBaseName Event name (e.g. "click").
	   * @param {object} handle Element on which to attach listener.
	   * @return {object} An object with a remove function which will forcefully
	   *                  remove the listener.
	   * @internal
	   */
	  trapBubbledEvent: function(topLevelType, handlerBaseName, handle) {
	    var element = handle;
	    if (!element) {
	      return;
	    }
	    return EventListener.listen(
	      element,
	      handlerBaseName,
	      ReactEventListener.dispatchEvent.bind(null, topLevelType)
	    );
	  },

	  /**
	   * Traps a top-level event by using event capturing.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {string} handlerBaseName Event name (e.g. "click").
	   * @param {object} handle Element on which to attach listener.
	   * @return {object} An object with a remove function which will forcefully
	   *                  remove the listener.
	   * @internal
	   */
	  trapCapturedEvent: function(topLevelType, handlerBaseName, handle) {
	    var element = handle;
	    if (!element) {
	      return;
	    }
	    return EventListener.capture(
	      element,
	      handlerBaseName,
	      ReactEventListener.dispatchEvent.bind(null, topLevelType)
	    );
	  },

	  monitorScrollValue: function(refresh) {
	    var callback = scrollValueMonitor.bind(null, refresh);
	    EventListener.listen(window, 'scroll', callback);
	    EventListener.listen(window, 'resize', callback);
	  },

	  dispatchEvent: function(topLevelType, nativeEvent) {
	    if (!ReactEventListener._enabled) {
	      return;
	    }

	    var bookKeeping = TopLevelCallbackBookKeeping.getPooled(
	      topLevelType,
	      nativeEvent
	    );
	    try {
	      // Event queue being processed in the same cycle allows
	      // `preventDefault`.
	      ReactUpdates.batchedUpdates(handleTopLevelImpl, bookKeeping);
	    } finally {
	      TopLevelCallbackBookKeeping.release(bookKeeping);
	    }
	  }
	};

	module.exports = ReactEventListener;


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInjection
	 */

	"use strict";

	var DOMProperty = __webpack_require__(91);
	var EventPluginHub = __webpack_require__(95);
	var ReactComponent = __webpack_require__(63);
	var ReactCompositeComponent = __webpack_require__(64);
	var ReactEmptyComponent = __webpack_require__(121);
	var ReactBrowserEventEmitter = __webpack_require__(97);
	var ReactNativeComponent = __webpack_require__(177);
	var ReactPerf = __webpack_require__(75);
	var ReactRootIndex = __webpack_require__(156);
	var ReactUpdates = __webpack_require__(48);

	var ReactInjection = {
	  Component: ReactComponent.injection,
	  CompositeComponent: ReactCompositeComponent.injection,
	  DOMProperty: DOMProperty.injection,
	  EmptyComponent: ReactEmptyComponent.injection,
	  EventPluginHub: EventPluginHub.injection,
	  EventEmitter: ReactBrowserEventEmitter.injection,
	  NativeComponent: ReactNativeComponent.injection,
	  Perf: ReactPerf.injection,
	  RootIndex: ReactRootIndex.injection,
	  Updates: ReactUpdates.injection
	};

	module.exports = ReactInjection;


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SelectEventPlugin
	 */

	"use strict";

	var EventConstants = __webpack_require__(94);
	var EventPropagators = __webpack_require__(96);
	var ReactInputSelection = __webpack_require__(184);
	var SyntheticEvent = __webpack_require__(98);

	var getActiveElement = __webpack_require__(196);
	var isTextInputElement = __webpack_require__(183);
	var keyOf = __webpack_require__(56);
	var shallowEqual = __webpack_require__(85);

	var topLevelTypes = EventConstants.topLevelTypes;

	var eventTypes = {
	  select: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onSelect: null}),
	      captured: keyOf({onSelectCapture: null})
	    },
	    dependencies: [
	      topLevelTypes.topBlur,
	      topLevelTypes.topContextMenu,
	      topLevelTypes.topFocus,
	      topLevelTypes.topKeyDown,
	      topLevelTypes.topMouseDown,
	      topLevelTypes.topMouseUp,
	      topLevelTypes.topSelectionChange
	    ]
	  }
	};

	var activeElement = null;
	var activeElementID = null;
	var lastSelection = null;
	var mouseDown = false;

	/**
	 * Get an object which is a unique representation of the current selection.
	 *
	 * The return value will not be consistent across nodes or browsers, but
	 * two identical selections on the same node will return identical objects.
	 *
	 * @param {DOMElement} node
	 * @param {object}
	 */
	function getSelection(node) {
	  if ('selectionStart' in node &&
	      ReactInputSelection.hasSelectionCapabilities(node)) {
	    return {
	      start: node.selectionStart,
	      end: node.selectionEnd
	    };
	  } else if (window.getSelection) {
	    var selection = window.getSelection();
	    return {
	      anchorNode: selection.anchorNode,
	      anchorOffset: selection.anchorOffset,
	      focusNode: selection.focusNode,
	      focusOffset: selection.focusOffset
	    };
	  } else if (document.selection) {
	    var range = document.selection.createRange();
	    return {
	      parentElement: range.parentElement(),
	      text: range.text,
	      top: range.boundingTop,
	      left: range.boundingLeft
	    };
	  }
	}

	/**
	 * Poll selection to see whether it's changed.
	 *
	 * @param {object} nativeEvent
	 * @return {?SyntheticEvent}
	 */
	function constructSelectEvent(nativeEvent) {
	  // Ensure we have the right element, and that the user is not dragging a
	  // selection (this matches native `select` event behavior). In HTML5, select
	  // fires only on input and textarea thus if there's no focused element we
	  // won't dispatch.
	  if (mouseDown ||
	      activeElement == null ||
	      activeElement != getActiveElement()) {
	    return;
	  }

	  // Only fire when selection has actually changed.
	  var currentSelection = getSelection(activeElement);
	  if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
	    lastSelection = currentSelection;

	    var syntheticEvent = SyntheticEvent.getPooled(
	      eventTypes.select,
	      activeElementID,
	      nativeEvent
	    );

	    syntheticEvent.type = 'select';
	    syntheticEvent.target = activeElement;

	    EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);

	    return syntheticEvent;
	  }
	}

	/**
	 * This plugin creates an `onSelect` event that normalizes select events
	 * across form elements.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - contentEditable
	 *
	 * This differs from native browser implementations in the following ways:
	 * - Fires on contentEditable fields as well as inputs.
	 * - Fires for collapsed selection.
	 * - Fires after user input.
	 */
	var SelectEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {

	    switch (topLevelType) {
	      // Track the input node that has focus.
	      case topLevelTypes.topFocus:
	        if (isTextInputElement(topLevelTarget) ||
	            topLevelTarget.contentEditable === 'true') {
	          activeElement = topLevelTarget;
	          activeElementID = topLevelTargetID;
	          lastSelection = null;
	        }
	        break;
	      case topLevelTypes.topBlur:
	        activeElement = null;
	        activeElementID = null;
	        lastSelection = null;
	        break;

	      // Don't fire the event while the user is dragging. This matches the
	      // semantics of the native select event.
	      case topLevelTypes.topMouseDown:
	        mouseDown = true;
	        break;
	      case topLevelTypes.topContextMenu:
	      case topLevelTypes.topMouseUp:
	        mouseDown = false;
	        return constructSelectEvent(nativeEvent);

	      // Chrome and IE fire non-standard event when selection is changed (and
	      // sometimes when it hasn't).
	      // Firefox doesn't support selectionchange, so check selection status
	      // after each key entry. The selection changes after keydown and before
	      // keyup, but we check on keydown as well in the case of holding down a
	      // key, when multiple keydown events are fired but only one keyup is.
	      case topLevelTypes.topSelectionChange:
	      case topLevelTypes.topKeyDown:
	      case topLevelTypes.topKeyUp:
	        return constructSelectEvent(nativeEvent);
	    }
	  }
	};

	module.exports = SelectEventPlugin;


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ServerReactRootIndex
	 * @typechecks
	 */

	"use strict";

	/**
	 * Size of the reactRoot ID space. We generate random numbers for React root
	 * IDs and if there's a collision the events and DOM update system will
	 * get confused. In the future we need a way to generate GUIDs but for
	 * now this will work on a smaller scale.
	 */
	var GLOBAL_MOUNT_POINT_MAX = Math.pow(2, 53);

	var ServerReactRootIndex = {
	  createReactRootIndex: function() {
	    return Math.ceil(Math.random() * GLOBAL_MOUNT_POINT_MAX);
	  }
	};

	module.exports = ServerReactRootIndex;


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SimpleEventPlugin
	 */

	"use strict";

	var EventConstants = __webpack_require__(94);
	var EventPluginUtils = __webpack_require__(61);
	var EventPropagators = __webpack_require__(96);
	var SyntheticClipboardEvent = __webpack_require__(197);
	var SyntheticEvent = __webpack_require__(98);
	var SyntheticFocusEvent = __webpack_require__(198);
	var SyntheticKeyboardEvent = __webpack_require__(199);
	var SyntheticMouseEvent = __webpack_require__(187);
	var SyntheticDragEvent = __webpack_require__(200);
	var SyntheticTouchEvent = __webpack_require__(201);
	var SyntheticUIEvent = __webpack_require__(202);
	var SyntheticWheelEvent = __webpack_require__(203);

	var getEventCharCode = __webpack_require__(204);

	var invariant = __webpack_require__(31);
	var keyOf = __webpack_require__(56);
	var warning = __webpack_require__(57);

	var topLevelTypes = EventConstants.topLevelTypes;

	var eventTypes = {
	  blur: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onBlur: true}),
	      captured: keyOf({onBlurCapture: true})
	    }
	  },
	  click: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onClick: true}),
	      captured: keyOf({onClickCapture: true})
	    }
	  },
	  contextMenu: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onContextMenu: true}),
	      captured: keyOf({onContextMenuCapture: true})
	    }
	  },
	  copy: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onCopy: true}),
	      captured: keyOf({onCopyCapture: true})
	    }
	  },
	  cut: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onCut: true}),
	      captured: keyOf({onCutCapture: true})
	    }
	  },
	  doubleClick: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDoubleClick: true}),
	      captured: keyOf({onDoubleClickCapture: true})
	    }
	  },
	  drag: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDrag: true}),
	      captured: keyOf({onDragCapture: true})
	    }
	  },
	  dragEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDragEnd: true}),
	      captured: keyOf({onDragEndCapture: true})
	    }
	  },
	  dragEnter: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDragEnter: true}),
	      captured: keyOf({onDragEnterCapture: true})
	    }
	  },
	  dragExit: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDragExit: true}),
	      captured: keyOf({onDragExitCapture: true})
	    }
	  },
	  dragLeave: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDragLeave: true}),
	      captured: keyOf({onDragLeaveCapture: true})
	    }
	  },
	  dragOver: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDragOver: true}),
	      captured: keyOf({onDragOverCapture: true})
	    }
	  },
	  dragStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDragStart: true}),
	      captured: keyOf({onDragStartCapture: true})
	    }
	  },
	  drop: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDrop: true}),
	      captured: keyOf({onDropCapture: true})
	    }
	  },
	  focus: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onFocus: true}),
	      captured: keyOf({onFocusCapture: true})
	    }
	  },
	  input: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onInput: true}),
	      captured: keyOf({onInputCapture: true})
	    }
	  },
	  keyDown: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onKeyDown: true}),
	      captured: keyOf({onKeyDownCapture: true})
	    }
	  },
	  keyPress: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onKeyPress: true}),
	      captured: keyOf({onKeyPressCapture: true})
	    }
	  },
	  keyUp: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onKeyUp: true}),
	      captured: keyOf({onKeyUpCapture: true})
	    }
	  },
	  load: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onLoad: true}),
	      captured: keyOf({onLoadCapture: true})
	    }
	  },
	  error: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onError: true}),
	      captured: keyOf({onErrorCapture: true})
	    }
	  },
	  // Note: We do not allow listening to mouseOver events. Instead, use the
	  // onMouseEnter/onMouseLeave created by `EnterLeaveEventPlugin`.
	  mouseDown: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onMouseDown: true}),
	      captured: keyOf({onMouseDownCapture: true})
	    }
	  },
	  mouseMove: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onMouseMove: true}),
	      captured: keyOf({onMouseMoveCapture: true})
	    }
	  },
	  mouseOut: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onMouseOut: true}),
	      captured: keyOf({onMouseOutCapture: true})
	    }
	  },
	  mouseOver: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onMouseOver: true}),
	      captured: keyOf({onMouseOverCapture: true})
	    }
	  },
	  mouseUp: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onMouseUp: true}),
	      captured: keyOf({onMouseUpCapture: true})
	    }
	  },
	  paste: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onPaste: true}),
	      captured: keyOf({onPasteCapture: true})
	    }
	  },
	  reset: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onReset: true}),
	      captured: keyOf({onResetCapture: true})
	    }
	  },
	  scroll: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onScroll: true}),
	      captured: keyOf({onScrollCapture: true})
	    }
	  },
	  submit: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onSubmit: true}),
	      captured: keyOf({onSubmitCapture: true})
	    }
	  },
	  touchCancel: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchCancel: true}),
	      captured: keyOf({onTouchCancelCapture: true})
	    }
	  },
	  touchEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchEnd: true}),
	      captured: keyOf({onTouchEndCapture: true})
	    }
	  },
	  touchMove: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchMove: true}),
	      captured: keyOf({onTouchMoveCapture: true})
	    }
	  },
	  touchStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchStart: true}),
	      captured: keyOf({onTouchStartCapture: true})
	    }
	  },
	  wheel: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onWheel: true}),
	      captured: keyOf({onWheelCapture: true})
	    }
	  }
	};

	var topLevelEventsToDispatchConfig = {
	  topBlur:        eventTypes.blur,
	  topClick:       eventTypes.click,
	  topContextMenu: eventTypes.contextMenu,
	  topCopy:        eventTypes.copy,
	  topCut:         eventTypes.cut,
	  topDoubleClick: eventTypes.doubleClick,
	  topDrag:        eventTypes.drag,
	  topDragEnd:     eventTypes.dragEnd,
	  topDragEnter:   eventTypes.dragEnter,
	  topDragExit:    eventTypes.dragExit,
	  topDragLeave:   eventTypes.dragLeave,
	  topDragOver:    eventTypes.dragOver,
	  topDragStart:   eventTypes.dragStart,
	  topDrop:        eventTypes.drop,
	  topError:       eventTypes.error,
	  topFocus:       eventTypes.focus,
	  topInput:       eventTypes.input,
	  topKeyDown:     eventTypes.keyDown,
	  topKeyPress:    eventTypes.keyPress,
	  topKeyUp:       eventTypes.keyUp,
	  topLoad:        eventTypes.load,
	  topMouseDown:   eventTypes.mouseDown,
	  topMouseMove:   eventTypes.mouseMove,
	  topMouseOut:    eventTypes.mouseOut,
	  topMouseOver:   eventTypes.mouseOver,
	  topMouseUp:     eventTypes.mouseUp,
	  topPaste:       eventTypes.paste,
	  topReset:       eventTypes.reset,
	  topScroll:      eventTypes.scroll,
	  topSubmit:      eventTypes.submit,
	  topTouchCancel: eventTypes.touchCancel,
	  topTouchEnd:    eventTypes.touchEnd,
	  topTouchMove:   eventTypes.touchMove,
	  topTouchStart:  eventTypes.touchStart,
	  topWheel:       eventTypes.wheel
	};

	for (var topLevelType in topLevelEventsToDispatchConfig) {
	  topLevelEventsToDispatchConfig[topLevelType].dependencies = [topLevelType];
	}

	var SimpleEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * Same as the default implementation, except cancels the event when return
	   * value is false. This behavior will be disabled in a future release.
	   *
	   * @param {object} Event to be dispatched.
	   * @param {function} Application-level callback.
	   * @param {string} domID DOM ID to pass to the callback.
	   */
	  executeDispatch: function(event, listener, domID) {
	    var returnValue = EventPluginUtils.executeDispatch(event, listener, domID);

	    ("production" !== (undefined) ? warning(
	      typeof returnValue !== 'boolean',
	      'Returning `false` from an event handler is deprecated and will be ' +
	      'ignored in a future release. Instead, manually call ' +
	      'e.stopPropagation() or e.preventDefault(), as appropriate.'
	    ) : null);

	    if (returnValue === false) {
	      event.stopPropagation();
	      event.preventDefault();
	    }
	  },

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {
	    var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
	    if (!dispatchConfig) {
	      return null;
	    }
	    var EventConstructor;
	    switch (topLevelType) {
	      case topLevelTypes.topInput:
	      case topLevelTypes.topLoad:
	      case topLevelTypes.topError:
	      case topLevelTypes.topReset:
	      case topLevelTypes.topSubmit:
	        // HTML Events
	        // @see http://www.w3.org/TR/html5/index.html#events-0
	        EventConstructor = SyntheticEvent;
	        break;
	      case topLevelTypes.topKeyPress:
	        // FireFox creates a keypress event for function keys too. This removes
	        // the unwanted keypress events. Enter is however both printable and
	        // non-printable. One would expect Tab to be as well (but it isn't).
	        if (getEventCharCode(nativeEvent) === 0) {
	          return null;
	        }
	        /* falls through */
	      case topLevelTypes.topKeyDown:
	      case topLevelTypes.topKeyUp:
	        EventConstructor = SyntheticKeyboardEvent;
	        break;
	      case topLevelTypes.topBlur:
	      case topLevelTypes.topFocus:
	        EventConstructor = SyntheticFocusEvent;
	        break;
	      case topLevelTypes.topClick:
	        // Firefox creates a click event on right mouse clicks. This removes the
	        // unwanted click events.
	        if (nativeEvent.button === 2) {
	          return null;
	        }
	        /* falls through */
	      case topLevelTypes.topContextMenu:
	      case topLevelTypes.topDoubleClick:
	      case topLevelTypes.topMouseDown:
	      case topLevelTypes.topMouseMove:
	      case topLevelTypes.topMouseOut:
	      case topLevelTypes.topMouseOver:
	      case topLevelTypes.topMouseUp:
	        EventConstructor = SyntheticMouseEvent;
	        break;
	      case topLevelTypes.topDrag:
	      case topLevelTypes.topDragEnd:
	      case topLevelTypes.topDragEnter:
	      case topLevelTypes.topDragExit:
	      case topLevelTypes.topDragLeave:
	      case topLevelTypes.topDragOver:
	      case topLevelTypes.topDragStart:
	      case topLevelTypes.topDrop:
	        EventConstructor = SyntheticDragEvent;
	        break;
	      case topLevelTypes.topTouchCancel:
	      case topLevelTypes.topTouchEnd:
	      case topLevelTypes.topTouchMove:
	      case topLevelTypes.topTouchStart:
	        EventConstructor = SyntheticTouchEvent;
	        break;
	      case topLevelTypes.topScroll:
	        EventConstructor = SyntheticUIEvent;
	        break;
	      case topLevelTypes.topWheel:
	        EventConstructor = SyntheticWheelEvent;
	        break;
	      case topLevelTypes.topCopy:
	      case topLevelTypes.topCut:
	      case topLevelTypes.topPaste:
	        EventConstructor = SyntheticClipboardEvent;
	        break;
	    }
	    ("production" !== (undefined) ? invariant(
	      EventConstructor,
	      'SimpleEventPlugin: Unhandled event type, `%s`.',
	      topLevelType
	    ) : invariant(EventConstructor));
	    var event = EventConstructor.getPooled(
	      dispatchConfig,
	      topLevelTargetID,
	      nativeEvent
	    );
	    EventPropagators.accumulateTwoPhaseDispatches(event);
	    return event;
	  }

	};

	module.exports = SimpleEventPlugin;


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SVGDOMPropertyConfig
	 */

	/*jslint bitwise: true*/

	"use strict";

	var DOMProperty = __webpack_require__(91);

	var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;

	var SVGDOMPropertyConfig = {
	  Properties: {
	    cx: MUST_USE_ATTRIBUTE,
	    cy: MUST_USE_ATTRIBUTE,
	    d: MUST_USE_ATTRIBUTE,
	    dx: MUST_USE_ATTRIBUTE,
	    dy: MUST_USE_ATTRIBUTE,
	    fill: MUST_USE_ATTRIBUTE,
	    fillOpacity: MUST_USE_ATTRIBUTE,
	    fontFamily: MUST_USE_ATTRIBUTE,
	    fontSize: MUST_USE_ATTRIBUTE,
	    fx: MUST_USE_ATTRIBUTE,
	    fy: MUST_USE_ATTRIBUTE,
	    gradientTransform: MUST_USE_ATTRIBUTE,
	    gradientUnits: MUST_USE_ATTRIBUTE,
	    markerEnd: MUST_USE_ATTRIBUTE,
	    markerMid: MUST_USE_ATTRIBUTE,
	    markerStart: MUST_USE_ATTRIBUTE,
	    offset: MUST_USE_ATTRIBUTE,
	    opacity: MUST_USE_ATTRIBUTE,
	    patternContentUnits: MUST_USE_ATTRIBUTE,
	    patternUnits: MUST_USE_ATTRIBUTE,
	    points: MUST_USE_ATTRIBUTE,
	    preserveAspectRatio: MUST_USE_ATTRIBUTE,
	    r: MUST_USE_ATTRIBUTE,
	    rx: MUST_USE_ATTRIBUTE,
	    ry: MUST_USE_ATTRIBUTE,
	    spreadMethod: MUST_USE_ATTRIBUTE,
	    stopColor: MUST_USE_ATTRIBUTE,
	    stopOpacity: MUST_USE_ATTRIBUTE,
	    stroke: MUST_USE_ATTRIBUTE,
	    strokeDasharray: MUST_USE_ATTRIBUTE,
	    strokeLinecap: MUST_USE_ATTRIBUTE,
	    strokeOpacity: MUST_USE_ATTRIBUTE,
	    strokeWidth: MUST_USE_ATTRIBUTE,
	    textAnchor: MUST_USE_ATTRIBUTE,
	    transform: MUST_USE_ATTRIBUTE,
	    version: MUST_USE_ATTRIBUTE,
	    viewBox: MUST_USE_ATTRIBUTE,
	    x1: MUST_USE_ATTRIBUTE,
	    x2: MUST_USE_ATTRIBUTE,
	    x: MUST_USE_ATTRIBUTE,
	    y1: MUST_USE_ATTRIBUTE,
	    y2: MUST_USE_ATTRIBUTE,
	    y: MUST_USE_ATTRIBUTE
	  },
	  DOMAttributeNames: {
	    fillOpacity: 'fill-opacity',
	    fontFamily: 'font-family',
	    fontSize: 'font-size',
	    gradientTransform: 'gradientTransform',
	    gradientUnits: 'gradientUnits',
	    markerEnd: 'marker-end',
	    markerMid: 'marker-mid',
	    markerStart: 'marker-start',
	    patternContentUnits: 'patternContentUnits',
	    patternUnits: 'patternUnits',
	    preserveAspectRatio: 'preserveAspectRatio',
	    spreadMethod: 'spreadMethod',
	    stopColor: 'stop-color',
	    stopOpacity: 'stop-opacity',
	    strokeDasharray: 'stroke-dasharray',
	    strokeLinecap: 'stroke-linecap',
	    strokeOpacity: 'stroke-opacity',
	    strokeWidth: 'stroke-width',
	    textAnchor: 'text-anchor',
	    viewBox: 'viewBox'
	  }
	};

	module.exports = SVGDOMPropertyConfig;


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule createFullPageComponent
	 * @typechecks
	 */

	"use strict";

	// Defeat circular references by requiring this directly.
	var ReactCompositeComponent = __webpack_require__(64);
	var ReactElement = __webpack_require__(54);

	var invariant = __webpack_require__(31);

	/**
	 * Create a component that will throw an exception when unmounted.
	 *
	 * Components like <html> <head> and <body> can't be removed or added
	 * easily in a cross-browser way, however it's valuable to be able to
	 * take advantage of React's reconciliation for styling and <title>
	 * management. So we just document it and throw in dangerous cases.
	 *
	 * @param {string} tag The tag to wrap
	 * @return {function} convenience constructor of new component
	 */
	function createFullPageComponent(tag) {
	  var elementFactory = ReactElement.createFactory(tag);

	  var FullPageComponent = ReactCompositeComponent.createClass({
	    displayName: 'ReactFullPageComponent' + tag,

	    componentWillUnmount: function() {
	      ("production" !== (undefined) ? invariant(
	        false,
	        '%s tried to unmount. Because of cross-browser quirks it is ' +
	        'impossible to unmount some top-level components (eg <html>, <head>, ' +
	        'and <body>) reliably and efficiently. To fix this, have a single ' +
	        'top-level component that never unmounts render these elements.',
	        this.constructor.displayName
	      ) : invariant(false));
	    },

	    render: function() {
	      return elementFactory(this.props);
	    }
	  });

	  return FullPageComponent;
	}

	module.exports = createFullPageComponent;


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactRootIndex
	 * @typechecks
	 */

	"use strict";

	var ReactRootIndexInjection = {
	  /**
	   * @param {function} _createReactRootIndex
	   */
	  injectCreateReactRootIndex: function(_createReactRootIndex) {
	    ReactRootIndex.createReactRootIndex = _createReactRootIndex;
	  }
	};

	var ReactRootIndex = {
	  createReactRootIndex: null,
	  injection: ReactRootIndexInjection
	};

	module.exports = ReactRootIndex;


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule containsNode
	 * @typechecks
	 */

	var isTextNode = __webpack_require__(205);

	/*jslint bitwise:true */

	/**
	 * Checks if a given DOM node contains or is another DOM node.
	 *
	 * @param {?DOMNode} outerNode Outer DOM node.
	 * @param {?DOMNode} innerNode Inner DOM node.
	 * @return {boolean} True if `outerNode` contains or is `innerNode`.
	 */
	function containsNode(outerNode, innerNode) {
	  if (!outerNode || !innerNode) {
	    return false;
	  } else if (outerNode === innerNode) {
	    return true;
	  } else if (isTextNode(outerNode)) {
	    return false;
	  } else if (isTextNode(innerNode)) {
	    return containsNode(outerNode, innerNode.parentNode);
	  } else if (outerNode.contains) {
	    return outerNode.contains(innerNode);
	  } else if (outerNode.compareDocumentPosition) {
	    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
	  } else {
	    return false;
	  }
	}

	module.exports = containsNode;


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getReactRootElementInContainer
	 */

	"use strict";

	var DOC_NODE_TYPE = 9;

	/**
	 * @param {DOMElement|DOMDocument} container DOM element that may contain
	 *                                           a React component
	 * @return {?*} DOM element that may have the reactRoot ID, or null.
	 */
	function getReactRootElementInContainer(container) {
	  if (!container) {
	    return null;
	  }

	  if (container.nodeType === DOC_NODE_TYPE) {
	    return container.documentElement;
	  } else {
	    return container.firstChild;
	  }
	}

	module.exports = getReactRootElementInContainer;


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMultiChildUpdateTypes
	 */

	"use strict";

	var keyMirror = __webpack_require__(120);

	/**
	 * When a component's children are updated, a series of update configuration
	 * objects are created in order to batch and serialize the required changes.
	 *
	 * Enumerates all the possible types of update configurations.
	 *
	 * @internal
	 */
	var ReactMultiChildUpdateTypes = keyMirror({
	  INSERT_MARKUP: null,
	  MOVE_EXISTING: null,
	  REMOVE_NODE: null,
	  TEXT_CONTENT: null
	});

	module.exports = ReactMultiChildUpdateTypes;


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule flattenChildren
	 */

	"use strict";

	var ReactTextComponent = __webpack_require__(78);

	var traverseAllChildren = __webpack_require__(118);
	var warning = __webpack_require__(57);

	/**
	 * @param {function} traverseContext Context passed through traversal.
	 * @param {?ReactComponent} child React child component.
	 * @param {!string} name String name of key path to child.
	 */
	function flattenSingleChildIntoContext(traverseContext, child, name) {
	  // We found a component instance.
	  var result = traverseContext;
	  var keyUnique = !result.hasOwnProperty(name);
	  ("production" !== (undefined) ? warning(
	    keyUnique,
	    'flattenChildren(...): Encountered two children with the same key, ' +
	    '`%s`. Child keys must be unique; when two children share a key, only ' +
	    'the first child will be used.',
	    name
	  ) : null);
	  if (keyUnique && child != null) {
	    var type = typeof child;
	    var normalizedValue;

	    if (type === 'string') {
	      normalizedValue = ReactTextComponent(child);
	    } else if (type === 'number') {
	      normalizedValue = ReactTextComponent('' + child);
	    } else {
	      normalizedValue = child;
	    }

	    result[name] = normalizedValue;
	  }
	}

	/**
	 * Flattens children that are typically specified as `props.children`. Any null
	 * children will not be included in the resulting object.
	 * @return {!object} flattened children keyed by name.
	 */
	function flattenChildren(children) {
	  if (children == null) {
	    return children;
	  }
	  var result = {};
	  traverseAllChildren(children, flattenSingleChildIntoContext, result);
	  return result;
	}

	module.exports = flattenChildren;


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMarkupChecksum
	 */

	"use strict";

	var adler32 = __webpack_require__(206);

	var ReactMarkupChecksum = {
	  CHECKSUM_ATTR_NAME: 'data-react-checksum',

	  /**
	   * @param {string} markup Markup string
	   * @return {string} Markup string with checksum attribute attached
	   */
	  addChecksumToMarkup: function(markup) {
	    var checksum = adler32(markup);
	    return markup.replace(
	      '>',
	      ' ' + ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '">'
	    );
	  },

	  /**
	   * @param {string} markup to use
	   * @param {DOMElement} element root React element
	   * @returns {boolean} whether or not the markup is the same
	   */
	  canReuseMarkup: function(markup, element) {
	    var existingChecksum = element.getAttribute(
	      ReactMarkupChecksum.CHECKSUM_ATTR_NAME
	    );
	    existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
	    var markupChecksum = adler32(markup);
	    return markupChecksum === existingChecksum;
	  }
	};

	module.exports = ReactMarkupChecksum;


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactServerRenderingTransaction
	 * @typechecks
	 */

	"use strict";

	var PooledClass = __webpack_require__(89);
	var CallbackQueue = __webpack_require__(88);
	var ReactPutListenerQueue = __webpack_require__(207);
	var Transaction = __webpack_require__(90);

	var assign = __webpack_require__(79);
	var emptyFunction = __webpack_require__(58);

	/**
	 * Provides a `CallbackQueue` queue for collecting `onDOMReady` callbacks
	 * during the performing of the transaction.
	 */
	var ON_DOM_READY_QUEUEING = {
	  /**
	   * Initializes the internal `onDOMReady` queue.
	   */
	  initialize: function() {
	    this.reactMountReady.reset();
	  },

	  close: emptyFunction
	};

	var PUT_LISTENER_QUEUEING = {
	  initialize: function() {
	    this.putListenerQueue.reset();
	  },

	  close: emptyFunction
	};

	/**
	 * Executed within the scope of the `Transaction` instance. Consider these as
	 * being member methods, but with an implied ordering while being isolated from
	 * each other.
	 */
	var TRANSACTION_WRAPPERS = [
	  PUT_LISTENER_QUEUEING,
	  ON_DOM_READY_QUEUEING
	];

	/**
	 * @class ReactServerRenderingTransaction
	 * @param {boolean} renderToStaticMarkup
	 */
	function ReactServerRenderingTransaction(renderToStaticMarkup) {
	  this.reinitializeTransaction();
	  this.renderToStaticMarkup = renderToStaticMarkup;
	  this.reactMountReady = CallbackQueue.getPooled(null);
	  this.putListenerQueue = ReactPutListenerQueue.getPooled();
	}

	var Mixin = {
	  /**
	   * @see Transaction
	   * @abstract
	   * @final
	   * @return {array} Empty list of operation wrap proceedures.
	   */
	  getTransactionWrappers: function() {
	    return TRANSACTION_WRAPPERS;
	  },

	  /**
	   * @return {object} The queue to collect `onDOMReady` callbacks with.
	   */
	  getReactMountReady: function() {
	    return this.reactMountReady;
	  },

	  getPutListenerQueue: function() {
	    return this.putListenerQueue;
	  },

	  /**
	   * `PooledClass` looks for this, and will invoke this before allowing this
	   * instance to be resused.
	   */
	  destructor: function() {
	    CallbackQueue.release(this.reactMountReady);
	    this.reactMountReady = null;

	    ReactPutListenerQueue.release(this.putListenerQueue);
	    this.putListenerQueue = null;
	  }
	};


	assign(
	  ReactServerRenderingTransaction.prototype,
	  Transaction.Mixin,
	  Mixin
	);

	PooledClass.addPoolingTo(ReactServerRenderingTransaction);

	module.exports = ReactServerRenderingTransaction;


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSCore
	 * @typechecks
	 */

	var invariant = __webpack_require__(31);

	/**
	 * The CSSCore module specifies the API (and implements most of the methods)
	 * that should be used when dealing with the display of elements (via their
	 * CSS classes and visibility on screen. It is an API focused on mutating the
	 * display and not reading it as no logical state should be encoded in the
	 * display of elements.
	 */

	var CSSCore = {

	  /**
	   * Adds the class passed in to the element if it doesn't already have it.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  addClass: function(element, className) {
	    ("production" !== (undefined) ? invariant(
	      !/\s/.test(className),
	      'CSSCore.addClass takes only a single class name. "%s" contains ' +
	      'multiple classes.', className
	    ) : invariant(!/\s/.test(className)));

	    if (className) {
	      if (element.classList) {
	        element.classList.add(className);
	      } else if (!CSSCore.hasClass(element, className)) {
	        element.className = element.className + ' ' + className;
	      }
	    }
	    return element;
	  },

	  /**
	   * Removes the class passed in from the element
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  removeClass: function(element, className) {
	    ("production" !== (undefined) ? invariant(
	      !/\s/.test(className),
	      'CSSCore.removeClass takes only a single class name. "%s" contains ' +
	      'multiple classes.', className
	    ) : invariant(!/\s/.test(className)));

	    if (className) {
	      if (element.classList) {
	        element.classList.remove(className);
	      } else if (CSSCore.hasClass(element, className)) {
	        element.className = element.className
	          .replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1')
	          .replace(/\s+/g, ' ') // multiple spaces to one
	          .replace(/^\s*|\s*$/g, ''); // trim the ends
	      }
	    }
	    return element;
	  },

	  /**
	   * Helper to add or remove a class from an element based on a condition.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @param {*} bool condition to whether to add or remove the class
	   * @return {DOMElement} the element passed in
	   */
	  conditionClass: function(element, className, bool) {
	    return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
	  },

	  /**
	   * Tests whether the element has the class specified.
	   *
	   * @param {DOMNode|DOMWindow} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {boolean} true if the element has the class, false if not
	   */
	  hasClass: function(element, className) {
	    ("production" !== (undefined) ? invariant(
	      !/\s/.test(className),
	      'CSS.hasClass takes only a single class name.'
	    ) : invariant(!/\s/.test(className)));
	    if (element.classList) {
	      return !!className && element.classList.contains(className);
	    }
	    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
	  }

	};

	module.exports = CSSCore;


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionEvents
	 */

	"use strict";

	var ExecutionEnvironment = __webpack_require__(34);

	/**
	 * EVENT_NAME_MAP is used to determine which event fired when a
	 * transition/animation ends, based on the style property used to
	 * define that event.
	 */
	var EVENT_NAME_MAP = {
	  transitionend: {
	    'transition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'mozTransitionEnd',
	    'OTransition': 'oTransitionEnd',
	    'msTransition': 'MSTransitionEnd'
	  },

	  animationend: {
	    'animation': 'animationend',
	    'WebkitAnimation': 'webkitAnimationEnd',
	    'MozAnimation': 'mozAnimationEnd',
	    'OAnimation': 'oAnimationEnd',
	    'msAnimation': 'MSAnimationEnd'
	  }
	};

	var endEvents = [];

	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;

	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are useable, and if not remove them
	  // from the map
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }

	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }

	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	}

	if (ExecutionEnvironment.canUseDOM) {
	  detectEvents();
	}

	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	var ReactTransitionEvents = {
	  addEndEventListener: function(node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function(endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },

	  removeEndEventListener: function(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function(endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};

	module.exports = ReactTransitionEvents;


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule performance
	 * @typechecks
	 */

	"use strict";

	var ExecutionEnvironment = __webpack_require__(34);

	var performance;

	if (ExecutionEnvironment.canUseDOM) {
	  performance =
	    window.performance ||
	    window.msPerformance ||
	    window.webkitPerformance;
	}

	module.exports = performance || {};


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPluginRegistry
	 * @typechecks static-only
	 */

	"use strict";

	var invariant = __webpack_require__(31);

	/**
	 * Injectable ordering of event plugins.
	 */
	var EventPluginOrder = null;

	/**
	 * Injectable mapping from names to event plugin modules.
	 */
	var namesToPlugins = {};

	/**
	 * Recomputes the plugin list using the injected plugins and plugin ordering.
	 *
	 * @private
	 */
	function recomputePluginOrdering() {
	  if (!EventPluginOrder) {
	    // Wait until an `EventPluginOrder` is injected.
	    return;
	  }
	  for (var pluginName in namesToPlugins) {
	    var PluginModule = namesToPlugins[pluginName];
	    var pluginIndex = EventPluginOrder.indexOf(pluginName);
	    ("production" !== (undefined) ? invariant(
	      pluginIndex > -1,
	      'EventPluginRegistry: Cannot inject event plugins that do not exist in ' +
	      'the plugin ordering, `%s`.',
	      pluginName
	    ) : invariant(pluginIndex > -1));
	    if (EventPluginRegistry.plugins[pluginIndex]) {
	      continue;
	    }
	    ("production" !== (undefined) ? invariant(
	      PluginModule.extractEvents,
	      'EventPluginRegistry: Event plugins must implement an `extractEvents` ' +
	      'method, but `%s` does not.',
	      pluginName
	    ) : invariant(PluginModule.extractEvents));
	    EventPluginRegistry.plugins[pluginIndex] = PluginModule;
	    var publishedEvents = PluginModule.eventTypes;
	    for (var eventName in publishedEvents) {
	      ("production" !== (undefined) ? invariant(
	        publishEventForPlugin(
	          publishedEvents[eventName],
	          PluginModule,
	          eventName
	        ),
	        'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.',
	        eventName,
	        pluginName
	      ) : invariant(publishEventForPlugin(
	        publishedEvents[eventName],
	        PluginModule,
	        eventName
	      )));
	    }
	  }
	}

	/**
	 * Publishes an event so that it can be dispatched by the supplied plugin.
	 *
	 * @param {object} dispatchConfig Dispatch configuration for the event.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @return {boolean} True if the event was successfully published.
	 * @private
	 */
	function publishEventForPlugin(dispatchConfig, PluginModule, eventName) {
	  ("production" !== (undefined) ? invariant(
	    !EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName),
	    'EventPluginHub: More than one plugin attempted to publish the same ' +
	    'event name, `%s`.',
	    eventName
	  ) : invariant(!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName)));
	  EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;

	  var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
	  if (phasedRegistrationNames) {
	    for (var phaseName in phasedRegistrationNames) {
	      if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
	        var phasedRegistrationName = phasedRegistrationNames[phaseName];
	        publishRegistrationName(
	          phasedRegistrationName,
	          PluginModule,
	          eventName
	        );
	      }
	    }
	    return true;
	  } else if (dispatchConfig.registrationName) {
	    publishRegistrationName(
	      dispatchConfig.registrationName,
	      PluginModule,
	      eventName
	    );
	    return true;
	  }
	  return false;
	}

	/**
	 * Publishes a registration name that is used to identify dispatched events and
	 * can be used with `EventPluginHub.putListener` to register listeners.
	 *
	 * @param {string} registrationName Registration name to add.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @private
	 */
	function publishRegistrationName(registrationName, PluginModule, eventName) {
	  ("production" !== (undefined) ? invariant(
	    !EventPluginRegistry.registrationNameModules[registrationName],
	    'EventPluginHub: More than one plugin attempted to publish the same ' +
	    'registration name, `%s`.',
	    registrationName
	  ) : invariant(!EventPluginRegistry.registrationNameModules[registrationName]));
	  EventPluginRegistry.registrationNameModules[registrationName] = PluginModule;
	  EventPluginRegistry.registrationNameDependencies[registrationName] =
	    PluginModule.eventTypes[eventName].dependencies;
	}

	/**
	 * Registers plugins so that they can extract and dispatch events.
	 *
	 * @see {EventPluginHub}
	 */
	var EventPluginRegistry = {

	  /**
	   * Ordered list of injected plugins.
	   */
	  plugins: [],

	  /**
	   * Mapping from event name to dispatch config
	   */
	  eventNameDispatchConfigs: {},

	  /**
	   * Mapping from registration name to plugin module
	   */
	  registrationNameModules: {},

	  /**
	   * Mapping from registration name to event name
	   */
	  registrationNameDependencies: {},

	  /**
	   * Injects an ordering of plugins (by plugin name). This allows the ordering
	   * to be decoupled from injection of the actual plugins so that ordering is
	   * always deterministic regardless of packaging, on-the-fly injection, etc.
	   *
	   * @param {array} InjectedEventPluginOrder
	   * @internal
	   * @see {EventPluginHub.injection.injectEventPluginOrder}
	   */
	  injectEventPluginOrder: function(InjectedEventPluginOrder) {
	    ("production" !== (undefined) ? invariant(
	      !EventPluginOrder,
	      'EventPluginRegistry: Cannot inject event plugin ordering more than ' +
	      'once. You are likely trying to load more than one copy of React.'
	    ) : invariant(!EventPluginOrder));
	    // Clone the ordering so it cannot be dynamically mutated.
	    EventPluginOrder = Array.prototype.slice.call(InjectedEventPluginOrder);
	    recomputePluginOrdering();
	  },

	  /**
	   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
	   * in the ordering injected by `injectEventPluginOrder`.
	   *
	   * Plugins can be injected as part of page initialization or on-the-fly.
	   *
	   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	   * @internal
	   * @see {EventPluginHub.injection.injectEventPluginsByName}
	   */
	  injectEventPluginsByName: function(injectedNamesToPlugins) {
	    var isOrderingDirty = false;
	    for (var pluginName in injectedNamesToPlugins) {
	      if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
	        continue;
	      }
	      var PluginModule = injectedNamesToPlugins[pluginName];
	      if (!namesToPlugins.hasOwnProperty(pluginName) ||
	          namesToPlugins[pluginName] !== PluginModule) {
	        ("production" !== (undefined) ? invariant(
	          !namesToPlugins[pluginName],
	          'EventPluginRegistry: Cannot inject two different event plugins ' +
	          'using the same name, `%s`.',
	          pluginName
	        ) : invariant(!namesToPlugins[pluginName]));
	        namesToPlugins[pluginName] = PluginModule;
	        isOrderingDirty = true;
	      }
	    }
	    if (isOrderingDirty) {
	      recomputePluginOrdering();
	    }
	  },

	  /**
	   * Looks up the plugin for the supplied event.
	   *
	   * @param {object} event A synthetic event.
	   * @return {?object} The plugin that created the supplied event.
	   * @internal
	   */
	  getPluginModuleForEvent: function(event) {
	    var dispatchConfig = event.dispatchConfig;
	    if (dispatchConfig.registrationName) {
	      return EventPluginRegistry.registrationNameModules[
	        dispatchConfig.registrationName
	      ] || null;
	    }
	    for (var phase in dispatchConfig.phasedRegistrationNames) {
	      if (!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)) {
	        continue;
	      }
	      var PluginModule = EventPluginRegistry.registrationNameModules[
	        dispatchConfig.phasedRegistrationNames[phase]
	      ];
	      if (PluginModule) {
	        return PluginModule;
	      }
	    }
	    return null;
	  },

	  /**
	   * Exposed for unit testing.
	   * @private
	   */
	  _resetEventPlugins: function() {
	    EventPluginOrder = null;
	    for (var pluginName in namesToPlugins) {
	      if (namesToPlugins.hasOwnProperty(pluginName)) {
	        delete namesToPlugins[pluginName];
	      }
	    }
	    EventPluginRegistry.plugins.length = 0;

	    var eventNameDispatchConfigs = EventPluginRegistry.eventNameDispatchConfigs;
	    for (var eventName in eventNameDispatchConfigs) {
	      if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
	        delete eventNameDispatchConfigs[eventName];
	      }
	    }

	    var registrationNameModules = EventPluginRegistry.registrationNameModules;
	    for (var registrationName in registrationNameModules) {
	      if (registrationNameModules.hasOwnProperty(registrationName)) {
	        delete registrationNameModules[registrationName];
	      }
	    }
	  }

	};

	module.exports = EventPluginRegistry;


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule accumulateInto
	 */

	"use strict";

	var invariant = __webpack_require__(31);

	/**
	 *
	 * Accumulates items that must not be null or undefined into the first one. This
	 * is used to conserve memory by avoiding array allocations, and thus sacrifices
	 * API cleanness. Since `current` can be null before being passed in and not
	 * null after this function, make sure to assign it back to `current`:
	 *
	 * `a = accumulateInto(a, b);`
	 *
	 * This API should be sparingly used. Try `accumulate` for something cleaner.
	 *
	 * @return {*|array<*>} An accumulation of items.
	 */

	function accumulateInto(current, next) {
	  ("production" !== (undefined) ? invariant(
	    next != null,
	    'accumulateInto(...): Accumulated items must not be null or undefined.'
	  ) : invariant(next != null));
	  if (current == null) {
	    return next;
	  }

	  // Both are not empty. Warning: Never call x.concat(y) when you are not
	  // certain that x is an Array (x could be a string with concat method).
	  var currentIsArray = Array.isArray(current);
	  var nextIsArray = Array.isArray(next);

	  if (currentIsArray && nextIsArray) {
	    current.push.apply(current, next);
	    return current;
	  }

	  if (currentIsArray) {
	    current.push(next);
	    return current;
	  }

	  if (nextIsArray) {
	    // A bit too dangerous to mutate `next`.
	    return [current].concat(next);
	  }

	  return [current, next];
	}

	module.exports = accumulateInto;


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule forEachAccumulated
	 */

	"use strict";

	/**
	 * @param {array} an "accumulation" of items which is either an Array or
	 * a single item. Useful when paired with the `accumulate` module. This is a
	 * simple utility that allows us to reason about a collection of items, but
	 * handling the case when there is exactly one item (and we do not need to
	 * allocate an array).
	 */
	var forEachAccumulated = function(arr, cb, scope) {
	  if (Array.isArray(arr)) {
	    arr.forEach(cb, scope);
	  } else if (arr) {
	    cb.call(scope, arr);
	  }
	};

	module.exports = forEachAccumulated;


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEventEmitterMixin
	 */

	"use strict";

	var EventPluginHub = __webpack_require__(95);

	function runEventQueueInBatch(events) {
	  EventPluginHub.enqueueEvents(events);
	  EventPluginHub.processEventQueue();
	}

	var ReactEventEmitterMixin = {

	  /**
	   * Streams a fired top-level event to `EventPluginHub` where plugins have the
	   * opportunity to create `ReactEvent`s to be dispatched.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {object} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native environment event.
	   */
	  handleTopLevel: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {
	    var events = EventPluginHub.extractEvents(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent
	    );

	    runEventQueueInBatch(events);
	  }
	};

	module.exports = ReactEventEmitterMixin;


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ViewportMetrics
	 */

	"use strict";

	var getUnboundedScrollPosition = __webpack_require__(195);

	var ViewportMetrics = {

	  currentScrollLeft: 0,

	  currentScrollTop: 0,

	  refreshScrollValues: function() {
	    var scrollPosition = getUnboundedScrollPosition(window);
	    ViewportMetrics.currentScrollLeft = scrollPosition.x;
	    ViewportMetrics.currentScrollTop = scrollPosition.y;
	  }

	};

	module.exports = ViewportMetrics;


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventTarget
	 * @typechecks static-only
	 */

	"use strict";

	/**
	 * Gets the target node from a native browser event by accounting for
	 * inconsistencies in browser DOM APIs.
	 *
	 * @param {object} nativeEvent Native browser event.
	 * @return {DOMEventTarget} Target node.
	 */
	function getEventTarget(nativeEvent) {
	  var target = nativeEvent.target || nativeEvent.srcElement || window;
	  // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
	  // @see http://www.quirksmode.org/js/events_properties.html
	  return target.nodeType === 3 ? target.parentNode : target;
	}

	module.exports = getEventTarget;


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toStr = Object.prototype.toString;

	module.exports = function isArguments(value) {
		var str = toStr.call(value);
		var isArgs = str === '[object Arguments]';
		if (!isArgs) {
			isArgs = str !== '[object Array]'
				&& value !== null
				&& typeof value === 'object'
				&& typeof value.length === 'number'
				&& value.length >= 0
				&& toStr.call(value.callee) === '[object Function]';
		}
		return isArgs;
	};


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(114);

	module.exports = function mix(def) {
	    var composed = {
	        init: [],
	        preEmit: [],
	        shouldEmit: []
	    };

	    var updated = (function mixDef(mixin) {
	        var mixed = {};
	        if (mixin.mixins) {
	            mixin.mixins.forEach(function (subMixin) {
	                _.extend(mixed, mixDef(subMixin));
	            });
	        }
	        _.extend(mixed, mixin);
	        Object.keys(composed).forEach(function (composable) {
	            if (mixin.hasOwnProperty(composable)) {
	                composed[composable].push(mixin[composable]);
	            }
	        });
	        return mixed;
	    }(def));

	    if (composed.init.length > 1) {
	        updated.init = function () {
	            var args = arguments;
	            composed.init.forEach(function (init) {
	                init.apply(this, args);
	            }, this);
	        };
	    }
	    if (composed.preEmit.length > 1) {
	        updated.preEmit = function () {
	            return composed.preEmit.reduce(function (args, preEmit) {
	                var newValue = preEmit.apply(this, args);
	                return newValue === undefined ? args : [newValue];
	            }.bind(this), arguments);
	        };
	    }
	    if (composed.shouldEmit.length > 1) {
	        updated.shouldEmit = function () {
	            var args = arguments;
	            return !composed.shouldEmit.some(function (shouldEmit) {
	                return !shouldEmit.apply(this, args);
	            }, this);
	        };
	    }
	    Object.keys(composed).forEach(function (composable) {
	        if (composed[composable].length === 1) {
	            updated[composable] = composed[composable][0];
	        }
	    });

	    return updated;
	};


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(store, definition) {
	  for (var name in definition) {
	    if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
	        var propertyDescriptor = Object.getOwnPropertyDescriptor(definition, name);

	        if (!propertyDescriptor.value || typeof propertyDescriptor.value !== 'function' || !definition.hasOwnProperty(name)) {
	            continue;
	        }

	        store[name] = definition[name].bind(store);
	    } else {
	        var property = definition[name];

	        if (typeof property !== 'function' || !definition.hasOwnProperty(name)) {
	            continue;
	        }

	        store[name] = property.bind(store);
	    }
	  }

	  return store;
	};


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule emptyObject
	 */

	"use strict";

	var emptyObject = {};

	if ("production" !== (undefined)) {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactNativeComponent
	 */

	"use strict";

	var assign = __webpack_require__(79);
	var invariant = __webpack_require__(31);

	var genericComponentClass = null;
	// This registry keeps track of wrapper classes around native tags
	var tagToComponentClass = {};

	var ReactNativeComponentInjection = {
	  // This accepts a class that receives the tag string. This is a catch all
	  // that can render any kind of tag.
	  injectGenericComponentClass: function(componentClass) {
	    genericComponentClass = componentClass;
	  },
	  // This accepts a keyed object with classes as values. Each key represents a
	  // tag. That particular tag will use this class instead of the generic one.
	  injectComponentClasses: function(componentClasses) {
	    assign(tagToComponentClass, componentClasses);
	  }
	};

	/**
	 * Create an internal class for a specific tag.
	 *
	 * @param {string} tag The tag for which to create an internal instance.
	 * @param {any} props The props passed to the instance constructor.
	 * @return {ReactComponent} component The injected empty component.
	 */
	function createInstanceForTag(tag, props, parentType) {
	  var componentClass = tagToComponentClass[tag];
	  if (componentClass == null) {
	    ("production" !== (undefined) ? invariant(
	      genericComponentClass,
	      'There is no registered component for the tag %s',
	      tag
	    ) : invariant(genericComponentClass));
	    return new genericComponentClass(tag, props);
	  }
	  if (parentType === tag) {
	    // Avoid recursion
	    ("production" !== (undefined) ? invariant(
	      genericComponentClass,
	      'There is no registered component for the tag %s',
	      tag
	    ) : invariant(genericComponentClass));
	    return new genericComponentClass(tag, props);
	  }
	  // Unwrap legacy factories
	  return new componentClass.type(props);
	}

	var ReactNativeComponent = {
	  createInstanceForTag: createInstanceForTag,
	  injection: ReactNativeComponentInjection
	};

	module.exports = ReactNativeComponent;


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSProperty
	 */

	"use strict";

	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 */
	var isUnitlessNumber = {
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexShrink: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,

	  // SVG-related properties
	};

	/**
	 */
